
function createrectangle(vertices,fragCode = `
  void main(void) {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`){
    var vertexBuffer = gl.createBuffer();
  // Bind the buffer to ARRAY_BUFFER
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  
  // Copy the vertices data to the buffer
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
// Create the fragment shader
var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

// Define the fragment shader code


// Attach the code to the shader
gl.shaderSource(fragShader, fragCode);

// Compile the shader
gl.compileShader(fragShader);

// Create the shader program
var shaderProgram = gl.createProgram();

// Attach the vertex shader and fragment shader to the program
gl.attachShader(shaderProgram, vertShader);
gl.attachShader(shaderProgram, fragShader);

// Link the program
gl.linkProgram(shaderProgram);

// Use the program
gl.useProgram(shaderProgram);

// Enable the vertex attribute array
var coord = gl.getAttribLocation(shaderProgram, "coordinates");
gl.enableVertexAttribArray(coord);

// Specify how to read the buffer data
gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

// Draw the square
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
}


