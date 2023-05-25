// let scriptList = [
//     "./main.js",
//     "./setup.js.js",
//     "./line_clipping.js",
//   ];
//   function onChange(title) {
//     document.getElementById("title").innerHTML = title;
//     transform(title);
//   }
  
  
//   function transform(title) {
//     if (title === "initial_line") {
//         createline(z)
//       return;
//     }
//     // if (title === "initial_line") {
//     //     createline(initial_vertices)
//     //   return;
//     // }
//     if (title === "reset") {
//       // let canvas = document.getElementById("canvas");
//       // let gl = canvas.getContext("webgl");
//       gl.clearColor(0, 0, 0, 0); // set the clear color to transparent black
//       gl.clear(gl.COLOR_BUFFER_BIT);
//       return;
//     }
//   }
//   window.addEventListener("load", function() {
//     transform("rectangle"); // initial rendering of rectangle on canvas
//   });
  
//   scriptList.forEach(function (s) {
//     let script = document.createElement("script"); //creating <script> element
//     script.src = s;
//     script.async = false;
//     document.body.appendChild(script);
//   });