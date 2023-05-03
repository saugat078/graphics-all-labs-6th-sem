
var initial_vertices = new Float32Array([
    -0.2, -0.5,  // Bottom-left corner
    +0.2, -0.5,  // Bottom-right corner
    +0.2, +0.5,  // Top-right corner
    -0.2, +0.5   // Top-left corner
]);


function translaterectangle(vertice,translation) {
    let translated_Vertices = [];
  
    for (let i = 0; i < vertice.length; i = i + 2) {
      translated_Vertices.push(vertice[i] + translation[0]);
      translated_Vertices.push(vertice[i + 1] + translation[1]);
    }
    return translated_Vertices;
  }  
  
  var translatedVertices = translaterectangle(initial_vertices, [0.1, 0.1]);
  tarr=new Float32Array(translatedVertices)

//rotation
function rotateRectangle(vertice, angle) {
    let rotated_Vertices = [];
  
    for (let i = 0; i < vertice.length; i = i + 2) {
      let x = vertice[i];
      let y = vertice[i + 1];
  
      // Rotate the point (x, y) around the origin (0, 0)
      let rotatedX = x * Math.cos(angle) - y * Math.sin(angle);
      let rotatedY = x * Math.sin(angle) + y * Math.cos(angle);
  
      rotated_Vertices.push(rotatedX);
      rotated_Vertices.push(rotatedY);
    }
    return rotated_Vertices;
  }
  var rotatedVertices = rotateRectangle(tarr, Math.PI / 4);
  var rotatedArr = new Float32Array(rotatedVertices);

function scalerectangle(vertices, scale) {
    let scaledVertices = [];
  
    for (let i = 0; i < vertices.length; i = i + 2) {
      scaledVertices.push(vertices[i] * scale[0]);
      scaledVertices.push(vertices[i + 1] * scale[1]);
    }
  
    return new Float32Array(scaledVertices);
  }

  var scaledVertices = scalerectangle(rotatedArr, [1, 0.5]);
  scaled = new Float32Array(scaledVertices);

function reflectrectangle(vertices) {
    let reflectedVertices = [];
  
    for (let i = 0; i < vertices.length; i = i + 2) {
      reflectedVertices.push(vertices[i] * -1);  // flip x-coordinate
      reflectedVertices.push(vertices[i + 1]);   // keep y-coordinate
    }
  
    return new Float32Array(reflectedVertices);
  }
  
  var reflectedVertices = reflectrectangle(scaled);
  

  function shearrectangleX(vertices, shear) {
    let shearedVertices = [];
  
    for (let i = 0; i < vertices.length; i = i + 2) {
      shearedVertices.push(vertices[i] + vertices[i + 1] * shear[0]);
      shearedVertices.push(vertices[i + 1]);
    }
  
    return new Float32Array(shearedVertices);
  }
  
  var shearedVertices = shearrectangleX(reflectedVertices, [0.5]);
  sheared = new Float32Array(shearedVertices);


  







