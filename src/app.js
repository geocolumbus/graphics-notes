function write(img, filename) {

    let fs = require("fs");

    if (!filename.includes(".png")) {
        filename += ".png";
    }

    return PImage.encodePNGToStream(img, fs.createWriteStream(filename))
        .then(() => {
            console.log("wrote out the png file to out.png");
        }).catch((e) => {
            console.log("there was an error writing");
        });
}


// Create an empty image with a transparent background

let PImage = require('pureimage');
let img = PImage.make(200, 200);
write(img, "img1");

/*
{
  bitmap:
   Bitmap {
     width: 200,
     height: 200,
     data: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... > },
  _fillColor: 255,
  _strokeColor: 255,
  _lineWidth: 1,
  _globalAlpha: 1,
  transform:
   Transform {
     context: undefined,
     matrix: [ 1, 0, 0, 1, 0, 0 ],
     stack: [],
     setContext: [Function],
     getMatrix: [Function],
     setMatrix: [Function],
     cloneMatrix: [Function],
     save: [Function],
     restore: [Function],
     setTransform: [Function],
     translate: [Function],
     rotate: [Function],
     scale: [Function],
     rotateDegrees: [Function],
     rotateAbout: [Function],
     rotateDegreesAbout: [Function],
     identity: [Function],
     multiply: [Function],
     invert: [Function],
     transformPoint: [Function] },
  _font: { family: 'invalid', size: 12 },
  imageSmoothingEnabled: true,
  _clip: null,
  _fillStyle_text: '',
  _strokeStyle_text: '' }
 */

// Write shapes
let ctx = img.getContext();

// ctx.fillStyle = 'rgba(0, 25, 234, 0.6)';

// ctx.strokeStyle = 'rgba(0, 25, 234, 0.6)';

// ctx.lineWidth = 15;

// ctx.globalAlpha = 1;

// ctx.fillRect(x,y,w,h)

// ctx.clearRect(x,y,w,h)

// ctx.strokeRect(x,y,w,h)

// this._moveTo({x: 20, y: 40})
// this._moveTo(new Point(20,

// lineTo(x,y)

// quadraticCurveTo(cp1x, cp1y, x,y)

// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

// arc(x,y, rad, start, end, clockwise)

// ctx.drawLine({start: {x: 20, y:42}, end: {x: 20, y:90}})
// ctx.drawLine(new Line(new Point(20, 42), new Point(20, 90)))
// ctx.drawLine(new Line(20, 42, 20, 90))

// ctx.drawLine_noaa({start: {x: 20, y:42}, end: {x: 20, y:90}})
// ctx.drawLine_noaa(new Line(new Point(20, 42), new Point(20, 90)))
// ctx.drawLine_noaa(new Line(20, 42, 20, 90))

// ctx.drawLine_aa({start: {x: 20, y:42}, end: {x: 20, y:90}})
// ctx.drawLine_aa(new Line(new Point(20, 42), new Point(20, 90)))
// ctx.drawLine_aa(new Line(20, 42, 20, 90))

// var uInt32 = colorStringToUint32('#FF00FF');
// console.log(uInt32); // Prints 4278255615

// console.log(fract(12.35))

// closePath()

// stroke()

// fill()

// fill_aa()

// fill_noaa()

// pixelInsideClip(x,y)

// fillText(text, x ,y)

// strokeText(text, x ,y)



// Not implemented
// arcTo
// rect
// ellipse

ctx.






