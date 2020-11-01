import { CompileError, SpriteScript } from "./spritescript";
import ace from "ace-builds";
import "brace/theme/monokai";

const canvas = document.getElementById("viewer") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.setShowPrintMargin(false);
editor.setFontSize("18px");

var canvasSize = { h: 300, w: 300 };
var canvasCenter = { x: canvasSize.w / 2, y: canvasSize.h / 2 };
var mouse = { x: 0, y: 0 };

var args: (number | string)[] = [];

export function Args(a: (number | string)[]) {
    args = a;
    Render();
}

var isDragging = false;
var dragStart = { x: 0, y: 0, a: 0, b: 0 };
canvas.addEventListener("mousedown", (e) => {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if (!isDragging) {
        isDragging = true;
        dragStart = { x: x, y: y, a: canvasCenter.x, b: canvasCenter.y };
    }
});

canvas.addEventListener(
    "mousemove",
    (e) => {
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        if (isDragging) {
            canvasCenter = {
                x: x - dragStart.x + dragStart.a,
                y: y - dragStart.y + dragStart.b
            };
            Render();
        }
    },
    false
);

canvas.addEventListener("mouseup", () => {
    isDragging = false;
});

editor.on("change", () => {
    localStorage.setItem("code", editor.getValue());
    try {
        Render();
    } catch (err) {
        if (err instanceof CompileError) compileError(err);
    }
});

function compileError(err: CompileError) {
    // var code = editor.getValue();
    // console.log(err.position);
    // var real = 0;
    // var magic = 0;
    // while (magic < err.position) {
    //     if (code[real] != " " && code[real] != "\n" && code[real] != '"')
    //         magic++;
    //     real++;
    // }
    // real += 2;
    // while (code[real] == " " || code[real] == "\n" || code[real] == '"') real++;
    // console.log(real, [code.substr(real + 1, 10)]);
}

function getByteCode() {
    var code: string = editor.getValue();
    var script: SpriteScript = SpriteScript.FromScript(code);
    return script;
}

function Render() {
    canvas.width = canvasSize.w;
    canvas.height = canvasSize.h;

    ctx.save();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "grey";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(canvasCenter.x, 0);
    ctx.lineTo(canvasCenter.x, canvas.height);
    ctx.moveTo(0, canvasCenter.y);
    ctx.lineTo(canvas.width, canvasCenter.y);
    ctx.stroke();

    ctx.restore();

    var script = getByteCode();
    script.render(ctx, canvasCenter, args);
}

export function Compile() {
    var script = SpriteScript.FromScript(editor.getValue());

    const elem = document.createElement("textarea");
    elem.value = script.toBase64();

    document.body.appendChild(elem);
    elem.select();

    document.execCommand("copy");
    document.body.removeChild(elem);

    alert("Base64 copied!");
}

window.onload = () => {
    var code = localStorage.getItem("code");
    if (code) editor.setValue(code, -1);
    Render();
};
