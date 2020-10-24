import { triggerAsyncId } from "async_hooks";
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
    PUSH 32
    FILL_TEXT

    PUSH ARG0
    PUSH ARG1
    PUSH ARG2
    PUSH 1
    SET_FILL_COLOR

    BEGIN_PATH
    PUSH 0
    PUSH 32
    PUSH 100
    PUSH 100
    RECT
    FILL
    `,
    constants
);

var canvas = document.getElementById("canvas") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
var script = new SpriteScript(bytes, { cache: true, width: 100, height: 132 });
script.renderCache([255, 0, 0]);

var td = Date.now();
var avg = 0;
var c = 0;
setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 1000; i++) script.render(ctx, { x: 100, y: 100 });

    avg += Date.now() - td;
    c++;
    td = Date.now();
    console.log(avg / c);
});
