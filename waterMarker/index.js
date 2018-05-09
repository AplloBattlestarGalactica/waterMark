import './index.css';
class WaterMarker {
    constructor() {
        this.option = {
            font: '10px Microsoft YaHei',
            textAlign: 'center',
            textStyle: '#9e9e9e4f',
            text: 'this is water marker test',
            degree: 20,
            canvasWidth: 400,
            canvasHeight: 400,
        }
        this.drawCanvas = this.drawCanvas.bind(this);
        this.divContainer = document.body.appendChild(document.createElement('div'));
        this.waterMarkercanvas = document.createElement('canvas');
        this.context = this.waterMarkercanvas.getContext('2d');

        this.divContainer.appendChild(this.waterMarkercanvas);
        this.divContainer.id = 'divContainer'
        this.divContainer.style.height = window.innerHeight;
        this.backgroundUrl = null;
    }

    drawCanvas(opt) {

        this.waterMarkercanvas.width = opt.canvasWidth || this.option.width;
        this.waterMarkercanvas.height = opt.canvasHeight || this.option.height;



        this.context.font = opt.font || this.option.font;
        this.context.textAlign = opt.textAlign || this.option.textAlign;
        this.context.fillStyle = opt.textStyle || this.option.textStyle;
        this.context.translate(this.waterMarkercanvas.width / 2, this.waterMarkercanvas.height / 2);
        this.context.rotate(opt.degree * Math.PI / 180);
        this.context.fillText(opt.text || this.opt.text, 0, 0);

        this.backgroundUrl = this.waterMarkercanvas.toDataURL('image/png');
        this.divContainer.style.backgroundImage = `url(${this.backgroundUrl})`;

    }
}
export default WaterMarker;