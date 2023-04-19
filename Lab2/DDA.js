function drawDDALine() {
  let vertexData = [];
  let X0 = 200;
  let Y0 = 200;
  let X1 = 400;
  let Y1 = 400;

  let dx = Math.abs(X1 - X0);
  let dy = Math.abs(Y1 - Y0);
  let steps = dx > dy ? dx : dy;

  let Xinc = dx / steps;
  let Yinc = dx / steps;

  let X = X0;
  let Y = Y0;
  for (let i = 0; i < steps; i++) {
    vertexData.push(normalise(X, canvasWidth));
    vertexData.push(normalise(Y, canvasHeight));
    vertexData.push(0);
    X += Xinc;
    Y += Yinc;
  }
  let fragCode = `void main() {gl_FragColor = vec4(0, 0, 1, 1);}`; //blue color
  DrawObject(gl.POINTS, 1, fragCode, vertexData, 0, vertexData.length);
}
