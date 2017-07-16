import React, { Component, PropTypes } from 'react';

export default class Paint extends Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
        brushCol: PropTypes.string,
        lineWidth: PropTypes.number,
    };
    static defaultProps = {
        className: 'react-paint',
        style: {},
        height: 500,
        width: 500,
        brushCol: '#ffffff',
        lineWidth: 10,
    };

    constructor(...props) {
        super(...props);
        this.image = new Image();
        this.image.src = '/paintbrush.png';
        this.state = {
            isDrawing: false,
            mouseLastLoc: [0, 0],
        };
    }

    distanceBetween(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    angleBetween(point1, point2) {
        return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    componentDidMount() {
        const { brushCol, lineWidth } = this.props;

        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = lineWidth;
        this.context.strokeStyle = brushCol;
        this.context.lineJoin = this.context.lineCap = 'round';
    }

    componentWillUpdate(nextProps) {
        const { brushCol, lineWidth } = this.props;

        if (
            brushCol !== nextProps.brushCol ||
            lineWidth !== nextProps.lineWidth
        ) {
            this.context.lineWidth = nextProps.lineWidth;
            this.context.strokeStyle = nextProps.brushCol;
        }
    }

    mouseDown = e => {
        if (!this.state.isDrawing) this.setState({ isDrawing: true });

        this.setState({
            mouseLastLoc: [e.pageX, e.pageY],
        });

        this.context.moveTo((e.pageX), (e.pageY));
    }


    mouseUp = () => (this.setState({ isDrawing: false }));

    mouseMove = e => {

        if (this.state.isDrawing) {
            // prevent IOS scroll when drawing
            if (
                (e.pageX) > 0 &&
                (e.pageY) < this.props.height
            ) {
                const currentPoint = { x: e.pageX, y: e.pageY };
                const lastPoint = { x: this.state.mouseLastLoc[0], y: this.state.mouseLastLoc[1] };
                const dist = this.distanceBetween(lastPoint, currentPoint);
                const angle = this.angleBetween(lastPoint, currentPoint);
                for (var i = 0; i < dist; i++) {
                    const x = lastPoint.x + (Math.sin(angle) * i) - 25;
                    const y = lastPoint.y + (Math.cos(angle) * i) - 25;
                    this.context.drawImage(this.image, x, y);
                }
                this.setState({
                    mouseLastLoc: [currentPoint.x, currentPoint.y],
                });            
            }
        }
    }

    render() {
        const {
            width,
            height,
            style,
            className,
        } = this.props;


        return (
            <div className={className}>
                <canvas
                    ref={c => (this.canvas = c)}
                    className={`${className}__canvas`}

                    width={width}
                    height={height}

                    style={
                        Object.assign({}, style, {
                            width: width,
                            height: height,
                        })
                    }

                    onMouseDown={this.mouseDown}
                    onMouseEnter={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    onMouseLeave={this.mouseUp}
                    onMouseMove={this.mouseMove}
                />
            </div>
        );
    }
}


export { Paint };

