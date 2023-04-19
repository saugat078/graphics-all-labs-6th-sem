let scriptList = [
    "./glSetup/main.js",
    "./Lab2/DDA.js",
    "./Lab2/BLA.js",
  ];
  function onChange(title) {
    document.getElementById("title").innerHTML = title;
    callAlgo(title);
  }
  
  scriptList.forEach(function (s) {
    let script = document.createElement("script"); //creating <script> element
    script.src = s;
    script.async = false;
    document.body.appendChild(script);
  });
  
  function callAlgo(title) {
    if (title === "DDA") {
      GLINIT();
      drawDDALine();
      return;
    }
    if (title === "BLA") {
      GLINIT();
      drawBLALine();
      return;
    }
    if (title === "reset") {
      let canvas = document.getElementById("canvas");
      let gl = canvas.getContext("webgl");
      gl.clearColor(0, 0, 0, 0); // set the clear color to transparent black
      gl.clear(gl.COLOR_BUFFER_BIT);
      return;
    }
  }