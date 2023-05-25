const scale=0.25
const positions = new Float32Array([
  // Front face
  -scale, -scale, scale,
  scale, -scale, scale,
  scale, scale, scale,
  -scale, scale, scale,

  // Back face
  -scale, -scale, -scale,
  -scale, scale, -scale,
  scale, scale, -scale,
  scale, -scale, -scale,

  // Top face
  -scale, scale, -scale,
  -scale, scale, scale,
  scale, scale, scale,
  scale, scale, -scale,

  // Bottom face
  -scale, -scale, -scale,
  scale, -scale, -scale,
  scale, -scale, scale,
  -scale, -scale, scale,

  // Right face
  scale, -scale, -scale,
  scale, scale, -scale,
  scale, scale, scale,
  scale, -scale, scale,

  // Left face
  -scale, -scale, -scale,
  -scale, -scale, scale,
  -scale, scale, scale,
  -scale, scale, -scale,
]);
