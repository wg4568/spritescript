# spritescript

Spritescript is a serialization library for HTML5 canvas draw commands. It was written to allow graphics to be generated server-side, without the need to transmit large image files. "Why not use a vector format?" Because SpriteScript allows for variable rendering, and integrates nicely into an HTML5 canvas project.

Here's an example.

```
LABEL FONT "bold 32px Comic Sans MS"
LABEL USERNAME "william"

BEGIN_PATH

PUSH 0
PUSH -20
PUSH -60
PUSH 40
RECT

PUSH 5
SET_LINE_WIDTH

PUSH 211
PUSH 211
PUSH 211
PUSH 1
SET_FILL_COLOR

FILL
STROKE

BEGIN_PATH
PUSH 0
PUSH 0
PUSH 40
PUSH 0
PUSH 2
PUSH PI
MULTIPLY
ARC

PUSH 255
PUSH 0
PUSH 0
PUSH 1
SET_FILL_COLOR

FILL
STROKE

PUSH FONT
SET_FONT

PUSH 0
PUSH 0
PUSH 0
PUSH 1
SET_STROKE_COLOR

PUSH 2
SET_LINE_WIDTH

PUSH 255
PUSH 0
PUSH 0
PUSH 1
SET_FILL_COLOR

PUSH USERNAME
MEASURE_TEXT
PUSH -2
DIVIDE
PUSH 70

FILL_TEXT
STROKE_TEXT
```
