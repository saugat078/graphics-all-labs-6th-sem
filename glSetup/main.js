//get the canvas element
const canvas = document.querySelector("#canvas");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

function normalise(pos, axis) {
  const halfAxis = axis / 2;
  let normalised = pos / halfAxis - 1;
  return normalised;
}

//initialize webgl
var gl;
var vertexBuffer;
var vertCode;
var vertShader;
function GLINIT() {
  gl = canvas.getContext("webgl");
  if (!gl) {
    throw new Error(
      "Unable to load WebGL. Your computer or browser maynot support it"
    );
  }

//initialize the vertex buffer and vertex shader
  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  vertCode =
    "attribute vec3 coordinates;" +
    "void main(void)" +
    "{" +
    "gl_Position = vec4(coordinates, 1.0);" +
    "gl_PointSize = 4.0;" +
    "}";
  vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, vertCode);
  gl.compileShader(vertShader);
}

//function to draw object using fragmentshader,compileshader,attachshader
function DrawObject(object, objectSize, fragCode, vertices, start, end) {
  var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShader, fragCode);
  gl.compileShader(fragShader);
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertShader);
  gl.attachShader(shaderProgram, fragShader);
  gl.linkProgram(shaderProgram);
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  var coord = gl.getAttribLocation(shaderProgram, "coordinates");
  gl.enableVertexAttribArray(coord);
  gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
  gl.useProgram(shaderProgram);

  for (let i = start; i <= end; i += objectSize) {
    gl.drawArrays(object, i, objectSize);
  }
}
