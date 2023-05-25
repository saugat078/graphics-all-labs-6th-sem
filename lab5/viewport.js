const XW_MAX = 600;
const XW_MIN = 200;
const YW_MAX = 400;
const YW_MIN = 200;

function createViewport() {
  createLine([
    normalise(XW_MIN, canvasWidth),
    normalise(YW_MIN, canvasHeight),
    0,
    normalise(XW_MAX, canvasWidth),
    normalise(YW_MIN, canvasHeight),
    0,
  ]);
  createLine([
    normalise(XW_MIN, canvasWidth),
    normalise(YW_MAX, canvasHeight),
    0,
    normalise(XW_MAX, canvasWidth),
    normalise(YW_MAX, canvasHeight),
    0,
  ]);
  createLine([
    normalise(XW_MIN, canvasWidth),
    normalise(YW_MIN, canvasHeight),
    0,
    normalise(XW_MIN, canvasWidth),
    normalise(YW_MAX, canvasHeight),
    0,
  ]);
  createLine([
    normalise(XW_MAX, canvasWidth),
    normalise(YW_MIN, canvasHeight),
    0,
    normalise(XW_MAX, canvasWidth),
    normalise(YW_MAX, canvasHeight),
    0,
  ]);
}

createViewport();
