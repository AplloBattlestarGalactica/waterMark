import './index.css';
class WaterMarker {
    constructor(opt, isOberserve) {
        this.option = opt;
        this.isOberserve = isOberserve;
        this.drawCanvas = this.drawCanvas.bind(this);
        this.canvasObserver = this.canvasObserver.bind(this);
        this.canvasState = false;

    }

    drawCanvas() {

        let divContainer = document.body.appendChild(document.createElement('div'));
        let waterMarkercanvas = document.createElement('canvas');
        let context = waterMarkercanvas.getContext('2d');

        divContainer.appendChild(waterMarkercanvas);
        divContainer.id = 'divContainer'
        let backgroundUrl = null;

        divContainer.style.height = window.innerHeight + 'px';
        divContainer.style.width = window.innerWidth + 'px';


        waterMarkercanvas.width = this.option.canvasWidth;
        waterMarkercanvas.height = this.option.canvasHeight;



        context.font = this.option.font;
        context.textAlign = this.option.textAlign;
        context.fillStyle = this.option.textStyle;
        context.translate(waterMarkercanvas.width / 2, waterMarkercanvas.height / 2);
        context.rotate(this.option.degree * Math.PI / 180);
        context.fillText(this.option.text, 0, 0);

        backgroundUrl = waterMarkercanvas.toDataURL('image/png');
        divContainer.style.backgroundImage = `url(${backgroundUrl})`;
        this.canvasState = true;


    }

    canvasObserver() {
        this.drawCanvas();
        let canvasObserver = new MutationObserver((mo) => {
            if (mo[0].removedNodes.id = 'divContainer' && mo[0].addedNodes.length == 0 && mo[0].previousSibling != null) {
                this.drawCanvas()
            }
        });
        let config = { attributes: true, childList: true, characterData: true };

        canvasObserver.observe(document.querySelector('#divContainer').parentNode, { childList: true });
        let canvasObserverChild = new MutationObserver(mo => {
            this.drawCanvas()
        })
        let configChild = { attributes: true, childList: true, characterData: true };
        canvasObserverChild.observe(document.querySelector('#divContainer'), configChild)
    }
}
export default WaterMarker;