
const pinkFragCode = `
  void main(void) {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0); // Solid pink color
  }
`;

const redFragCode = `
  void main(void) {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Solid red color
  }
`;

const greenFragCode = `
  void main(void) {
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // Solid green color
  }
`;

const blueFragCode = `
  void main(void) {
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0); // Solid blue color
  }
`;

const yellowFragCode = `
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); // Solid yellow color
  }
`;

const whiteFragCode = `
  void main(void) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Solid white color
  }
`;

let initialCubeVertices = new Float32Array([
  // Face 1
  0, 0, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0.5, 0.5, 0.5, 0.5,

  // Face 2
  0, 0, 0, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 0, 0.5, 0.5, 0, 0, 0.5,

  // Face 3
  0.5, 0.5, 0.5, 0.5, 0, 0, 0.5, 0, 0.5, 0.5, 0, 0, 0.5, 0.5, 0.5, 0.5, 0.5, 0,

  // Face 4
  0, 0, 0, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0, 0, 0, 0.5, 0, 0.5, 0.5, 0,

  // Face 5
  0.5, 0.5, 0.5, 0, 0.5, 0.5, 0.5, 0.5, 0, 0, 0.5, 0.5, 0.5, 0.5, 0, 0, 0.5, 0,

  // Face 6
  0, 0, 0, 0, 0, 0.5, 0.5, 0, 0.5, 0, 0, 0, 0.5, 0, 0.5, 0.5, 0, 0,
]);

let transformedCube;

const faceColors = [
  pinkFragCode,
  pinkFragCode,
  redFragCode,
  redFragCode,
  greenFragCode,
  greenFragCode,
  blueFragCode,
  blueFragCode,
  yellowFragCode,
  yellowFragCode,
  whiteFragCode,
  whiteFragCode,
];

function drawCube(vertices) {
  transformedCube = vertices;
  let face = 0;
  for (let i = 0; i < vertices.length; i += 9) {
    createshapes(vertices.slice(i, i + 9), faceColors[face]);
    face++;
  }
}
// createshapes(initialCubeVertices,yellowFragCode)
drawCube(initialCubeVertices);



function rotateY(vertices, angle) {
  const rotationMatrix = mat4.create();
  mat4.fromYRotation(rotationMatrix, angle);
  const transformedVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    const vertex = vec3.fromValues(vertices[i], vertices[i + 1], vertices[i + 2]);
    vec3.transformMat4(vertex, vertex, rotationMatrix);
    transformedVertices[i] = vertex[0];
    transformedVertices[i + 1] = vertex[1];
    transformedVertices[i + 2] = vertex[2];
  }
  return transformedVertices;
}

function rotateX(vertices, angle) {
  const rotationMatrix = mat4.create();
  mat4.fromXRotation(rotationMatrix, angle);
  const transformedVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    const vertex = vec3.fromValues(vertices[i], vertices[i + 1], vertices[i + 2]);
    vec3.transformMat4(vertex, vertex, rotationMatrix);
    transformedVertices[i] = vertex[0];
    transformedVertices[i + 1] = vertex[1];
    transformedVertices[i + 2] = vertex[2];
  }
  return transformedVertices;
}

function rotateZ(vertices, angle) {
  const rotationMatrix = mat4.create();
  mat4.fromZRotation(rotationMatrix, angle);
  const transformedVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    const vertex = vec3.fromValues(vertices[i], vertices[i + 1], vertices[i + 2]);
    vec3.transformMat4(vertex, vertex, rotationMatrix);
    transformedVertices[i] = vertex[0];
    transformedVertices[i + 1] = vertex[1];
    transformedVertices[i + 2] = vertex[2];
  }
  return transformedVertices;
}

function drawCube(vertices, angleX, angleY, angleZ) {
  transformedCube = vertices;
  let face = 0;
  for (let i = 0; i < vertices.length; i += 9) {
    let transformedVertices = vertices.slice(i, i + 9);
    transformedVertices = rotateY(transformedVertices, angleY);
    transformedVertices = rotateX(transformedVertices, angleX);
    transformedVertices = rotateZ(transformedVertices, angleZ);
    createshapes(transformedVertices, faceColors[face]);
    face++;
  }
}

const angleX = Math.PI / 4; // 45 degrees in radians for X-axis rotation
const angleY = Math.PI / 4; // 45 degrees in radians for Y-axis rotation
const angleZ = Math.PI / 4; // 45 degrees in radians for Z-axis rotation
drawCube(initialCubeVertices, angleX,angleY,angleZ);

function translate(vertices, tx, ty, tz) {
  const translatedVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    translatedVertices[i] = vertices[i] + tx;
    translatedVertices[i + 1] = vertices[i + 1] + ty;
    translatedVertices[i + 2] = vertices[i + 2] + tz;
  }
  return translatedVertices;
}



function translate(vertices, tx, ty, tz) {
  const translatedVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    translatedVertices[i] = vertices[i] + tx;
    translatedVertices[i + 1] = vertices[i + 1] + ty;
    translatedVertices[i + 2] = vertices[i + 2] + tz;
  }
  return translatedVertices;
}

function scale(vertices, sx, sy, sz) {
  const scaledVertices = new Float32Array(vertices.length);
  for (let i = 0; i < vertices.length; i += 3) {
    scaledVertices[i] = vertices[i] * sx;
    scaledVertices[i + 1] = vertices[i + 1] * sy;
    scaledVertices[i + 2] = vertices[i + 2] * sz;
  }
  return scaledVertices;
}

function drawCube(vertices, angleX, angleY, angleZ) {
  transformedCube = vertices;
  let face = 0;
  for (let i = 0; i < vertices.length; i += 9) {
    let transformedVertices = vertices.slice(i, i + 9);
    transformedVertices = rotateY(transformedVertices, angleY);
    transformedVertices = rotateX(transformedVertices, angleX);
    transformedVertices = rotateZ(transformedVertices, angleZ);
    transformedVertices = translate(transformedVertices, tx, ty, tz);
    transformedVertices = scale(transformedVertices, sx, sy, sz);
    createshapes(transformedVertices, faceColors[face]);
    face++;
  }
}


var tx = 0.2;
var ty = 0.1;
var tz = 0.2;
var sx = 0.2;
var sy = 0.2;
var sz = 0.2;
const translation = new Float32Array([tx, ty, tz]); // Translation values for X, Y, and Z axes
const scaleValues = new Float32Array([sx, sy, sz]); // Scale values for X, Y, and Z axes

// drawCube(initialCubeVertices, 0,0,0,0,0);
// drawCube(initialCubeVertices, angleX,0,0,0,0);
// drawCube(initialCubeVertices, angleX, angleY, 0,0,0);
// drawCube(initialCubeVertices, angleX, angleY, angleZ, 0, 0);
// drawCube(initialCubeVertices, angleX, angleY, angleZ, translation, 0);
// drawCube(initialCubeVertices, angleX, angleY, angleZ, translation, scaleValues);