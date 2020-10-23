var codeBlock = `
BEGIN_PATH

PUSH 0 -20 -60 40
RECT

PUSH 5
SET_LINE_WIDTH

PUSH 211 211 211 1
SET_FILL_COLOR

FILL
STROKE

BEGIN_PATH
PUSH 0 0 40 0 2 PI
MULTIPLY
ARC

PUSH 255 0 0 1
SET_FILL_COLOR

FILL
STROKE

PUSH "bold 32px Comic Sans MS"
SET_FONT

PUSH 0 0 0 1
SET_STROKE_COLOR

PUSH 2
SET_LINE_WIDTH

PUSH 255 0 0 1
SET_FILL_COLOR

PUSH "william"
MEASURE_TEXT
PUSH -2
DIVIDE
PUSH 70

FILL_TEXT
STROKE_TEXT
`;

var codeBlock2 = `
PUSH 255
PUSH 0
PUSH 0
PUSH 1
SET_FILL_COLOR
`;

interface Command {
    command: string;
    args: (string | number)[];
}

function parseIfNumber(input: string): string | number {
    var possibleNumber = Number(input);
    if (isNaN(possibleNumber)) return input;
    return possibleNumber;
}

function toStackArgs(args: (number | string)[]) {
    for (var i = 0; i < args.length; i++) {
        if (args[i] == "PI") args[i] = Math.PI;
    }
    return args;
}

function tokenize(raw: string) {
    var lines: string[] = raw.split("\n").filter((val) => val);
    var commands: Command[] = [];

    for (var i = 0; i < lines.length; i++) {
        var line: string = lines[i];
        var firstSpace = line.indexOf(" ");

        if (line.startsWith("//")) break;

        if (firstSpace == -1) {
            commands.push({
                command: line,
                args: []
            });
            continue;
        }

        var cmd = line.substr(0, firstSpace);
        var args: (string | number)[] = [];

        var current = "";
        var inString = false;
        for (var j = firstSpace + 1; j < line.length; j++) {
            var chr = line[j];

            if (inString) {
                if (chr == '"') {
                    inString = false;
                    args.push(current);
                    current = "";
                } else {
                    current += chr;
                }
            } else {
                if (chr == '"') {
                    inString = true;
                    current = "";
                } else if (chr == " " && current.length > 0) {
                    args.push(parseIfNumber(current));
                    current = "";
                } else if (chr != " ") {
                    current += chr;
                }
            }
        }

        if (current.length > 0) args.push(parseIfNumber(current));

        commands.push({
            command: cmd,
            args: args
        });
    }

    return commands;
}

function execute(commands: Command[]) {
    var stack: (number | string)[] = [];

    for (var i = 0; i < commands.length; i++) {
        console.log(i, stack);
        var cmd = commands[i];

        switch (cmd.command) {
            case "PUSH":
                stack.push(...toStackArgs(cmd.args));
                break;
            case "ADD":
                var b: number = stack.pop() as number;
                var a: number = stack.pop() as number;
                stack.push(a + b);
                break;
            case "SUBTRACT":
                var b: number = stack.pop() as number;
                var a: number = stack.pop() as number;
                stack.push(a - b);
                break;
            case "MULTIPLY":
                var b: number = stack.pop() as number;
                var a: number = stack.pop() as number;
                stack.push(a * b);
                break;
            case "DIVIDE":
                var b: number = stack.pop() as number;
                var a: number = stack.pop() as number;
                stack.push(a / b);
                break;
            case "ABS":
                var a: number = stack.pop() as number;
                stack.push(Math.abs(a));
                break;
            case "FLOOR":
                var a: number = stack.pop() as number;
                stack.push(Math.floor(a));
                break;
            case "CEIL":
                var a: number = stack.pop() as number;
                stack.push(Math.ceil(a));
                break;
            case "MODULO":
                var b: number = stack.pop() as number;
                var a: number = stack.pop() as number;
                stack.push(a % b);
                break;
            case "POWER":
                var b: number = stack.pop() as number;
                var a: number = stack.pop() as number;
                stack.push(Math.pow(a, b));
                break;
        }
    }

    return stack;
}

var commands = tokenize(codeBlock2);
console.log(commands);
var stack = execute(commands);
console.log(stack);
