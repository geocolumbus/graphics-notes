(function () {
    "use strict";

    const PImage = require('pureimage');
    const fs = require("fs");
    let size = 600;
    let img;
    let ctx;

    function write() {
        PImage.encodePNGToStream(img, fs.createWriteStream('out.png')).then(() => {
            console.log("wrote out the png file to out.png");
        }).catch((e) => {
            console.log("there was an error writing");
        });
    }

    function init() {
        img = PImage.make(size, size, {});
        ctx = img.getContext("2d");
    }

    function set(x, y) {
        ctx.fillRect(x * 6, y * 6, 5, 5);
    }

    function fractal() {
        let x = 0;
        let y = 0;
        let size = 100;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                set(i, j);
            }
        }
    }

    // ---- MAIN --------------------------------

    init();
    fractal();
    write();

}());