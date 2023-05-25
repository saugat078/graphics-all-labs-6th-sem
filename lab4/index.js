let scriptList = [
    "./main.js",
    "./translate.js",
    "./rectangle.js",
  ];
  function onChange(title) {
    document.getElementById("title").innerHTML = title;
    transform(title);
  }
  
  function transform(title) {
    if (title === "rectangle") {
        createrectangle(initial_vertices)
      return;
    }
    if (title === "translate") {
        createrectangle(tarr, fragCode = `
        void main(void) {
          gl_FragColor = vec4(0.0, 2.0, 1.0, 1.0);
        }
      `);
      return;
    }
    if (title === "rotate") {
        createrectangle(rotatedArr, fragCode = `
        void main(void) {
          gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        }
        `);
      return;
    }
    if (title === "scaling") {
        createrectangle(scaled, fragCode = `
        void main(void) {
          gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
        }
        `);
      return;
    }
    if (title === "reflect") {
        createrectangle(reflectedVertices, fragCode = `
        void main(void) {
          gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        }
        `);
      return;
    }
    if (title === "shearing") {
        createrectangle(sheared, fragCode = `
        void main(void) {
          gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
        }
        `);
      return;
    }
    if (title === "reset") {
      // let canvas = document.getElementById("canvas");
      // let gl = canvas.getContext("webgl");
      gl.clearColor(0, 0, 0, 0); // set the clear color to transparent black
      gl.clear(gl.COLOR_BUFFER_BIT);
      return;
    }
  }
  window.addEventListener("load", function() {
    transform("rectangle"); // initial rendering of rectangle on canvas
  });
  
  scriptList.forEach(function (s) {
    let script = document.createElement("script"); //creating <script> element
    script.src = s;
    script.async = false;
    document.body.appendChild(script);
  });