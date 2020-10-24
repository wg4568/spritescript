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

    PUSH ARG0
    PUSH ARG1
    PUSH ARG2
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
var script = new SpriteScript(bytes);

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    script.render(ctx, { x: 100, y: 100 }, [80, 160, 24]);
}, 16);
