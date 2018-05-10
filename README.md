## waterMarker
## Add a waterMarker on your screen

## HOT TO USE 如何使用

* npm install watermarker --save
* import WaterMarker from 'screenwatermark'
* const WaterMarker = new WaterMarker({  
* font: '18px Microsoft YaHei',//字体 canvas font
* textAlign: 'center', //字体位置 canvas textAlign
* textStyle: '#9e9e9e8a', //字体颜色 canvas textcolor
* text: 'this is water marker test', //内容 canvas textContent
* degree: 20, //旋转角度 canvas rotate
* canvasWidth: 400, //canvas宽 canvasWidth 
* canvasHeight: 400, //canvas高 canvasHeight})
* WaterMarker.canvasObserver({
 })

## function describe功能描述
* 屏幕水印插件，支持字体，字号，内容位置，内容颜色，canvas角度，并且通过canvas宽高来定义水印离散程度。WaterMarker Tool support canvasFont,canvasFontTextAlign,canvasTextStyle,canvasDegree and you can change canvasWidth/height to dispersed your watermatker.

* 水印不可删除，watermarker can't be deleted
## coming soon ，隐藏式水印（ concealment watermarker）
## how about a Star https://github.com/AplloBattlestarGalactica/waterMark  
## tell me your issue
## etc..