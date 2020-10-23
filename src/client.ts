import { Compile, SpriteScript } from "./spritescript";

var constants = {
    PI: Math.PI
};

var bytes = Compile(
    `
    LABEL FONT "bold 32px Comic Sans MS"
    LABEL USERNAME "william"

    PUSH FONT
    SET_FONT

    PUSH USERNAME
    PUSH 0
    PUSH 0
    FILL_TEXT

    PUSH 255
    PUSH 0
    PUSH 0
    PUSH 1
    SET_FILL_COLOR

    BEGIN_PATH
    PUSH 0
    PUSH 0
    PUSH 100
    PUSH 100
    RECT
    FILL
    `,
    constants
);

var canvas = document.getElementById("canvas") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
var script = SpriteScript.FromBase64(
    "Ahdib2xkIDMycHggQ29taWMgU2FucyBNUwdXaWxsaWFtKwAAAAAAAAAAoMEAAABwwgAAACBCHAAAAKBADgAAAFNDAAAAU0MAAABTQwAAAIA/Ey8wKwAAAAAAAAAAAAAAAAAgQgAAAAAAAAAAAEAA2w9JQAQbAAAAf0MAAAAAAAAAAAAAAAAAgD8TLzAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAACAPxQAAAAAQA4AAAB/QwAAAAAAAAAAAAAAAACAPxMAAACAPyoAAAAAwAUAAACMQiIj"
);

// function drawPlayer(x: number, y: number) {
//     ctx.lineWidth = 5;

//     ctx.translate(x, y);

//     ctx.beginPath();
//     ctx.rect(0, -20, -60, 40);

//     ctx.fillStyle = "lightgrey";
//     ctx.fill();
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(0, 0, 40, 0, 2 * Math.PI);

//     ctx.fillStyle = "rgb(255, 0, 0)";
//     ctx.fill();
//     ctx.stroke();

//     ctx.font = "bold 32px Comic Sans MS";
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;

//     ctx.fillStyle = "rgb(255, 0, 0)";

//     var width = ctx.measureText("William").width;
//     ctx.fillText("William", -width / 2, 70);
//     ctx.strokeText("William", -width / 2, 70);

//     ctx.setTransform(1, 0, 0, 1, 0, 0);
// }

// console.time("ss");
// for (var i = 0; i < 10000; i++) script.render(ctx, { x: 100, y: 100 });
// console.timeEnd("ss");

// console.time("vanilla");
// for (var i = 0; i < 10000; i++) drawPlayer(100, 100);
// console.timeEnd("vanilla");
