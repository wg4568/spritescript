"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Render = exports.Compile = exports.Enum = exports.Datatype = exports.Instruction = exports.CompileError = exports.RuntimeError = void 0;
class RuntimeError extends Error {
    constructor(msg) {
        super(`Runtime Error: ${msg}`);
    }
}
exports.RuntimeError = RuntimeError;
class CompileError extends Error {
    constructor(msg) {
        super(`Compile Error: ${msg}`);
    }
}
exports.CompileError = CompileError;
var Instruction;
(function (Instruction) {
    Instruction[Instruction["PUSH"] = 0] = "PUSH";
    Instruction[Instruction["POP"] = 1] = "POP";
    Instruction[Instruction["ADD"] = 2] = "ADD";
    Instruction[Instruction["SUBTRACT"] = 3] = "SUBTRACT";
    Instruction[Instruction["MULTIPLY"] = 4] = "MULTIPLY";
    Instruction[Instruction["DIVIDE"] = 5] = "DIVIDE";
    Instruction[Instruction["MODULO"] = 6] = "MODULO";
    Instruction[Instruction["EXPONENT"] = 7] = "EXPONENT";
    Instruction[Instruction["ABS"] = 8] = "ABS";
    Instruction[Instruction["FLOOR"] = 9] = "FLOOR";
    Instruction[Instruction["CEIL"] = 10] = "CEIL";
    Instruction[Instruction["SET_LINE_CAP"] = 11] = "SET_LINE_CAP";
    Instruction[Instruction["SET_LINE_DASH_OFFSET"] = 12] = "SET_LINE_DASH_OFFSET";
    Instruction[Instruction["SET_LINE_JOIN"] = 13] = "SET_LINE_JOIN";
    Instruction[Instruction["SET_LINE_WIDTH"] = 14] = "SET_LINE_WIDTH";
    Instruction[Instruction["SET_MITER_LIMIT"] = 15] = "SET_MITER_LIMIT";
    Instruction[Instruction["SET_SHADOW_BLUR"] = 16] = "SET_SHADOW_BLUR";
    Instruction[Instruction["SET_SHADOW_COLOR"] = 17] = "SET_SHADOW_COLOR";
    Instruction[Instruction["SET_SHADOW_OFFSET"] = 18] = "SET_SHADOW_OFFSET";
    Instruction[Instruction["SET_FILL_COLOR"] = 19] = "SET_FILL_COLOR";
    Instruction[Instruction["SET_STROKE_COLOR"] = 20] = "SET_STROKE_COLOR";
    Instruction[Instruction["SET_GLOBAL_ALPHA"] = 21] = "SET_GLOBAL_ALPHA";
    Instruction[Instruction["SET_GLOBAL_COMPOSITE_OPERATION"] = 22] = "SET_GLOBAL_COMPOSITE_OPERATION";
    Instruction[Instruction["SET_IMAGE_SMOOTHING_ENABLED"] = 23] = "SET_IMAGE_SMOOTHING_ENABLED";
    Instruction[Instruction["SET_FONT"] = 24] = "SET_FONT";
    Instruction[Instruction["SET_TEXT_ALIGN"] = 25] = "SET_TEXT_ALIGN";
    Instruction[Instruction["SET_TEXT_BASELINE"] = 26] = "SET_TEXT_BASELINE";
    Instruction[Instruction["ARC"] = 27] = "ARC";
    Instruction[Instruction["RECT"] = 28] = "RECT";
    Instruction[Instruction["ELLIPSE"] = 29] = "ELLIPSE";
    Instruction[Instruction["ARC_TO"] = 30] = "ARC_TO";
    Instruction[Instruction["BEZIER_TO"] = 31] = "BEZIER_TO";
    Instruction[Instruction["QUADRATIC_TO"] = 32] = "QUADRATIC_TO";
    Instruction[Instruction["DRAW_IMAGE"] = 33] = "DRAW_IMAGE";
    Instruction[Instruction["FILL_TEXT"] = 34] = "FILL_TEXT";
    Instruction[Instruction["STROKE_TEXT"] = 35] = "STROKE_TEXT";
    Instruction[Instruction["LINE_TO"] = 36] = "LINE_TO";
    Instruction[Instruction["MOVE_TO"] = 37] = "MOVE_TO";
    Instruction[Instruction["ROTATE"] = 38] = "ROTATE";
    Instruction[Instruction["SCALE"] = 39] = "SCALE";
    Instruction[Instruction["TRANSFORM"] = 40] = "TRANSFORM";
    Instruction[Instruction["TRANSLATE"] = 41] = "TRANSLATE";
    Instruction[Instruction["MEASURE_TEXT"] = 42] = "MEASURE_TEXT";
    Instruction[Instruction["BEGIN_PATH"] = 43] = "BEGIN_PATH";
    Instruction[Instruction["CLOSE_PATH"] = 44] = "CLOSE_PATH";
    Instruction[Instruction["RESTORE"] = 45] = "RESTORE";
    Instruction[Instruction["CLIP"] = 46] = "CLIP";
    Instruction[Instruction["FILL"] = 47] = "FILL";
    Instruction[Instruction["STROKE"] = 48] = "STROKE";
})(Instruction = exports.Instruction || (exports.Instruction = {}));
var Datatype;
(function (Datatype) {
    Datatype[Datatype["Number"] = 0] = "Number";
    Datatype[Datatype["Label"] = 1] = "Label";
    Datatype[Datatype["Enum"] = 2] = "Enum";
    Datatype[Datatype["Argument"] = 3] = "Argument";
})(Datatype = exports.Datatype || (exports.Datatype = {}));
var Enum;
(function (Enum) {
    Enum[Enum["BUTT"] = 0] = "BUTT";
    Enum[Enum["ROUND"] = 1] = "ROUND";
    Enum[Enum["SQUARE"] = 2] = "SQUARE";
    Enum[Enum["BEVEL"] = 3] = "BEVEL";
    Enum[Enum["MITER"] = 4] = "MITER";
    Enum[Enum["LEFT"] = 5] = "LEFT";
    Enum[Enum["RIGHT"] = 6] = "RIGHT";
    Enum[Enum["CENTER"] = 7] = "CENTER";
    Enum[Enum["START"] = 8] = "START";
    Enum[Enum["END"] = 9] = "END";
    Enum[Enum["TOP"] = 10] = "TOP";
    Enum[Enum["HANGING"] = 11] = "HANGING";
    Enum[Enum["MIDDLE"] = 12] = "MIDDLE";
    Enum[Enum["ALPHABETIC"] = 13] = "ALPHABETIC";
    Enum[Enum["IDEOGRAPHIC"] = 14] = "IDEOGRAPHIC";
    Enum[Enum["BOTTON"] = 15] = "BOTTON";
    Enum[Enum["SOURCE_OVER"] = 16] = "SOURCE_OVER";
    Enum[Enum["SOURCE_IN"] = 17] = "SOURCE_IN";
    Enum[Enum["SOURCE_OUT"] = 18] = "SOURCE_OUT";
    Enum[Enum["SOURCE_ATOP"] = 19] = "SOURCE_ATOP";
    Enum[Enum["DESTINATION_OVER"] = 20] = "DESTINATION_OVER";
    Enum[Enum["DESTINATION_IN"] = 21] = "DESTINATION_IN";
    Enum[Enum["DESTINATION_OUT"] = 22] = "DESTINATION_OUT";
    Enum[Enum["DESTINATION_ATOP"] = 23] = "DESTINATION_ATOP";
    Enum[Enum["LIGHTER"] = 24] = "LIGHTER";
    Enum[Enum["COPY"] = 25] = "COPY";
    Enum[Enum["XOR"] = 26] = "XOR";
    Enum[Enum["MULTIPLY"] = 27] = "MULTIPLY";
    Enum[Enum["SCREEN"] = 28] = "SCREEN";
    Enum[Enum["OVERLAY"] = 29] = "OVERLAY";
    Enum[Enum["DARKEN"] = 30] = "DARKEN";
    Enum[Enum["LIGHTEN"] = 31] = "LIGHTEN";
    Enum[Enum["COLOR_DODGE"] = 32] = "COLOR_DODGE";
    Enum[Enum["COLOR_BURN"] = 33] = "COLOR_BURN";
    Enum[Enum["HARD_LIGHT"] = 34] = "HARD_LIGHT";
    Enum[Enum["SOFT_LIGHT"] = 35] = "SOFT_LIGHT";
    Enum[Enum["DIFFERENCE"] = 36] = "DIFFERENCE";
    Enum[Enum["EXCLUSION"] = 37] = "EXCLUSION";
    Enum[Enum["HUE"] = 38] = "HUE";
    Enum[Enum["SATURATION"] = 39] = "SATURATION";
    Enum[Enum["COLOR"] = 40] = "COLOR";
    Enum[Enum["LUMINOSITY"] = 41] = "LUMINOSITY";
})(Enum = exports.Enum || (exports.Enum = {}));
function ctxEnumToString(e) {
    return Enum[e].toLowerCase().replace("_", "-");
}
function getTopDown(stack, index) {
    return stack[stack.length - index - 1];
}
function Compile(code, constants = {}) {
    let TokenType;
    (function (TokenType) {
        TokenType[TokenType["Keyword"] = 0] = "Keyword";
        TokenType[TokenType["Number"] = 1] = "Number";
        TokenType[TokenType["String"] = 2] = "String";
        TokenType[TokenType["None"] = 3] = "None";
    })(TokenType || (TokenType = {}));
    var tokens = [];
    var i = 0;
    code += "\n"; // guarantee termination
    while (i < code.length) {
        let first = code[i];
        let current = "";
        let type = TokenType.None;
        if (first == '"') {
            i++;
            type = TokenType.String;
            while (code[i] != '"') {
                current += code[i];
                i++;
            }
        }
        if (/^[a-zA-Z]+$/.test(first)) {
            type = TokenType.Keyword;
            while (/^[a-zA-Z0-9_]+$/.test(code[i])) {
                current += code[i];
                i++;
            }
            current = current.toUpperCase();
        }
        if (/^[0-9\-]+$/.test(first)) {
            type = TokenType.Number;
            while (/^[0-9\-.]+$/.test(code[i])) {
                current += code[i];
                i++;
            }
        }
        i++;
        if (current)
            tokens.push([type, current]);
    }
    var labelIndex = 0;
    var labelIndexStore = {};
    var labels = [];
    var commands = [];
    var i = 0;
    while (i < tokens.length) {
        let first = tokens[i];
        if (first[0] != TokenType.Keyword) {
            i++;
            continue;
        }
        switch (first[1]) {
            case "LABEL":
                let title = tokens[++i][1];
                let content = tokens[++i][1];
                labelIndexStore[title] = labelIndex++;
                labels.push(content.length);
                for (let q = 0; q < content.length; q++)
                    labels.push(content.charCodeAt(q));
                break;
            case "PUSH":
                let value = tokens[++i];
                let number = new Float32Array(1);
                if (value[0] == TokenType.Keyword) {
                    let keyword = value[1];
                    if (keyword == "TRUE")
                        number[0] = 1;
                    else if (keyword == "FALSE")
                        number[0] = 0;
                    else if (Object.values(Enum).includes(keyword))
                        number[0] = Enum[keyword];
                    else if (keyword in constants)
                        number[0] = constants[keyword];
                    else
                        number[0] = labelIndexStore[keyword];
                }
                else
                    number[0] = Number(value[1]);
                commands.push(Instruction.PUSH);
                commands.push(...new Uint8Array(number.buffer));
                break;
            default:
                commands.push(Instruction[first[1]]);
                break;
        }
        i++;
    }
    var length = 1 + labels.length + commands.length;
    var data = [labelIndex].concat(labels).concat(commands);
    return new Uint8Array(data);
}
exports.Compile = Compile;
function Render(ctx, posn, binary) {
    var labels = [];
    var stack = [];
    var i = 0;
    var nLabels = binary[i];
    for (var j = 0; j < nLabels; j++) {
        let length = binary[++i];
        labels.push(String.fromCharCode(...binary.subarray(i + 1, i + length + 1)));
        i += length;
    }
    i++;
    function getNumberFromStack(idx) {
        if (idx > stack.length)
            throw new RuntimeError(`Index ${idx} exceeds stack length`);
        return stack[stack.length - idx - 1];
    }
    function getStringFromStack(idx) {
        if (idx > stack.length)
            throw new RuntimeError(`Index ${idx} exceeds stack length`);
        let n = stack[stack.length - idx - 1];
        if (n > labels.length)
            throw new RuntimeError(`Label with index ${n} does not exist`);
        return labels[n];
    }
    function getEnumFromStack(idx) {
        if (idx > stack.length)
            throw new RuntimeError(`Index ${idx} exceeds stack length`);
        let n = stack[stack.length - i - 1];
        Enum[n].toLowerCase().replace("_", "-");
    }
    function getStackValues(types) {
        let data = [];
        if (stack.length < types.length)
            for (let i = 0; i < types.length; i++) {
                switch (types[i]) {
                    case Datatype.Number:
                        data.push(stack[stack.length - i - 1]);
                        break;
                    case Datatype.Label:
                        data.push(labels[stack[stack.length - i - 1]]);
                        break;
                    case Datatype.Enum:
                        data.push(Enum[stack[stack.length - i - 1]]
                            .toLowerCase()
                            .replace("_", "-"));
                        break;
                }
            }
        return data;
    }
    console.log(labels);
    console.log(binary[i]);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(posn.x, posn.y);
    ctx.save();
    while (i < binary.length) {
        let instr = binary[i];
        console.log(Instruction[instr]);
        switch (instr) {
            case Instruction.PUSH: {
                let p = new Uint8Array(binary.subarray(i + 1, i + 5)).buffer;
                console.log(p);
                let num = new Float32Array(p)[0];
                stack.push(num);
                i += 4;
                break;
            }
            case Instruction.POP: {
                stack.pop();
                break;
            }
            case Instruction.ADD: {
                let data = getStackValues([Datatype.Number, Datatype.Number]);
                stack.push(data[1] + data[0]);
                break;
            }
            case Instruction.SUBTRACT: {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a - b);
                break;
            }
            case Instruction.MULTIPLY: {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a * b);
                break;
            }
            case Instruction.DIVIDE: {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a / b);
                break;
            }
            case Instruction.EXPONENT: {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(Math.pow(a, b));
                break;
            }
            case Instruction.MODULO: {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a % b);
                break;
            }
            case Instruction.ABS: {
                let a = stack.pop();
                stack.push(Math.abs(a));
                break;
            }
            case Instruction.FLOOR: {
                let a = stack.pop();
                stack.push(Math.floor(a));
                break;
            }
            case Instruction.CEIL: {
                let a = stack.pop();
                stack.push(Math.ceil(a));
                break;
            }
            case Instruction.FLOOR: {
                let a = stack.pop();
                stack.push(Math.floor(a));
                break;
            }
            case Instruction.SET_LINE_CAP: {
                let cap = ctxEnumToString(getTopDown(stack, 0));
                ctx.lineCap = cap;
                break;
            }
            case Instruction.SET_LINE_DASH_OFFSET: {
                let offset = getTopDown(stack, 0);
                ctx.lineDashOffset = offset;
                break;
            }
            case Instruction.SET_LINE_JOIN: {
                let join = ctxEnumToString(getTopDown(stack, 0));
                ctx.lineJoin = join;
                break;
            }
            case Instruction.SET_LINE_WIDTH: {
                let width = getTopDown(stack, 0);
                ctx.lineWidth = width;
                break;
            }
            case Instruction.SET_MITER_LIMIT: {
                let ml = getTopDown(stack, 0);
                ctx.miterLimit = ml;
                break;
            }
            case Instruction.SET_SHADOW_BLUR: {
                let blur = getTopDown(stack, 0);
                ctx.shadowBlur = blur;
                break;
            }
            case Instruction.SET_SHADOW_COLOR: {
                let a = getTopDown(stack, 0);
                let b = getTopDown(stack, 1);
                let g = getTopDown(stack, 2);
                let r = getTopDown(stack, 3);
                ctx.shadowColor = `rgba(${r},${g},${b},${a})`;
                break;
            }
            case Instruction.SET_SHADOW_OFFSET: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                ctx.shadowOffsetX = x;
                ctx.shadowOffsetY = y;
                break;
            }
            case Instruction.SET_FILL_COLOR: {
                let a = getTopDown(stack, 0);
                let b = getTopDown(stack, 1);
                let g = getTopDown(stack, 2);
                let r = getTopDown(stack, 3);
                ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
                break;
            }
            case Instruction.SET_STROKE_COLOR: {
                let a = getTopDown(stack, 0);
                let b = getTopDown(stack, 1);
                let g = getTopDown(stack, 2);
                let r = getTopDown(stack, 3);
                ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
                break;
            }
            case Instruction.SET_GLOBAL_ALPHA: {
                let alpha = getTopDown(stack, 0);
                ctx.globalAlpha = alpha;
                break;
            }
            case Instruction.SET_GLOBAL_COMPOSITE_OPERATION: {
                let oper = ctxEnumToString(getTopDown(stack, 0));
                ctx.globalCompositeOperation = oper;
                break;
            }
            case Instruction.SET_IMAGE_SMOOTHING_ENABLED: {
                let enabled = getTopDown(stack, 0);
                ctx.imageSmoothingEnabled = enabled;
                break;
            }
            case Instruction.SET_FONT: {
                ctx.font = labels[getTopDown(stack, 0)];
                break;
            }
            case Instruction.SET_TEXT_ALIGN: {
                let align = ctxEnumToString(getTopDown(stack, 0));
                ctx.textAlign = align;
                break;
            }
            case Instruction.SET_TEXT_BASELINE: {
                let baseline = ctxEnumToString(getTopDown(stack, 0));
                ctx.textBaseline = baseline;
                break;
            }
            case Instruction.ARC: {
                let end = getTopDown(stack, 0);
                let start = getTopDown(stack, 1);
                let radius = getTopDown(stack, 2);
                let y = getTopDown(stack, 3);
                let x = getTopDown(stack, 4);
                ctx.arc(x, y, radius, start, end);
                break;
            }
            case Instruction.RECT: {
                let h = getTopDown(stack, 0);
                let w = getTopDown(stack, 1);
                let y = getTopDown(stack, 2);
                let x = getTopDown(stack, 3);
                ctx.rect(x, y, w, h);
                break;
            }
            case Instruction.ELLIPSE: {
                let end = getTopDown(stack, 0);
                let start = getTopDown(stack, 1);
                let rot = getTopDown(stack, 2);
                let rady = getTopDown(stack, 3);
                let radx = getTopDown(stack, 4);
                let y = getTopDown(stack, 5);
                let x = getTopDown(stack, 6);
                ctx.ellipse(x, y, radx, rady, rot, start, end);
                break;
            }
            case Instruction.ARC_TO: {
                let radius = getTopDown(stack, 0);
                let y2 = getTopDown(stack, 1);
                let x2 = getTopDown(stack, 2);
                let y1 = getTopDown(stack, 3);
                let x1 = getTopDown(stack, 4);
                ctx.arcTo(x1, y1, x2, y2, radius);
                break;
            }
            case Instruction.BEZIER_TO: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                let cp2y = getTopDown(stack, 2);
                let cp2x = getTopDown(stack, 3);
                let cp1y = getTopDown(stack, 4);
                let cp1x = getTopDown(stack, 5);
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
                break;
            }
            case Instruction.QUADRATIC_TO: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                let cpy = getTopDown(stack, 2);
                let cpx = getTopDown(stack, 3);
                ctx.quadraticCurveTo(cpx, cpy, x, y);
                break;
            }
            case Instruction.DRAW_IMAGE: {
                let dH = getTopDown(stack, 0);
                let dW = getTopDown(stack, 1);
                let dy = getTopDown(stack, 2);
                let dx = getTopDown(stack, 3);
                let sh = getTopDown(stack, 4);
                let sw = getTopDown(stack, 5);
                let sy = getTopDown(stack, 6);
                let sx = getTopDown(stack, 7);
                let url = labels[getTopDown(stack, 8)];
                var img = new Image(); // TODO: cache images
                img.src = url;
                ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dW, dH);
                break;
            }
            case Instruction.FILL_TEXT: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                let txt = labels[getTopDown(stack, 2)];
                ctx.fillText(txt, x, y);
                break;
            }
            case Instruction.STROKE_TEXT: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                let txt = labels[getTopDown(stack, 2)];
                ctx.strokeText(txt, x, y);
                break;
            }
            case Instruction.MEASURE_TEXT: {
                let txt = labels[getTopDown(stack, 0)];
                stack.push(ctx.measureText(txt).width);
                break;
            }
            case Instruction.LINE_TO: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                ctx.lineTo(x, y);
                break;
            }
            case Instruction.MOVE_TO: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                ctx.moveTo(x, y);
                break;
            }
            case Instruction.ROTATE: {
                let a = getTopDown(stack, 0);
                ctx.rotate(a);
                break;
            }
            case Instruction.SCALE: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                ctx.scale(x, y);
                break;
            }
            case Instruction.TRANSFORM: {
                let a = getTopDown(stack, 0);
                let b = getTopDown(stack, 1);
                let c = getTopDown(stack, 2);
                let d = getTopDown(stack, 3);
                let e = getTopDown(stack, 4);
                let f = getTopDown(stack, 5);
                ctx.transform(a, b, c, d, e, f);
                break;
            }
            case Instruction.TRANSLATE: {
                let y = getTopDown(stack, 0);
                let x = getTopDown(stack, 1);
                ctx.translate(x, y);
                break;
            }
            case Instruction.BEGIN_PATH: {
                ctx.beginPath();
                break;
            }
            case Instruction.CLOSE_PATH: {
                ctx.closePath();
                break;
            }
            case Instruction.RESTORE: {
                ctx.restore();
                ctx.save();
                break;
            }
            case Instruction.CLIP: {
                ctx.clip();
                break;
            }
            case Instruction.FILL: {
                ctx.fill();
                break;
            }
            case Instruction.STROKE: {
                ctx.stroke();
                break;
            }
        }
        i++;
    }
    ctx.restore();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}
exports.Render = Render;
