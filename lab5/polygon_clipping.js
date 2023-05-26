var bottomLeftX = -0.4;
var bottomLeftY = -0.25;
var bottomRightX = 0.4;
var bottomRightY = -0.25;
var topRightX = 0.4;
var topRightY = 0.25;
var topLeftX = -0.4;
var topLeftY = 0.25;

var rectangleVertices = [
  [bottomLeftX, bottomLeftY],
  [bottomRightX, bottomRightY],
  [topRightX, topRightY],
  [topLeftX, topLeftY]
];
createwindow(rectangleVertices)
var polygonVertices = [
  [0.6, -0.6],
  [0.2, 0.4],
  [-0.2, 0.5],
  [-0.4, 0.3]
];
createwindow(polygonVertices)
function clip(subjectPolygon, clipPolygon) {
  var cp1, cp2, s, e;
  var inside = function(p) {
    return (cp2[0] - cp1[0]) * (p[1] - cp1[1]) > (cp2[1] - cp1[1]) * (p[0] - cp1[0]);
  };
  var intersection = function() {
    var dc = [cp1[0] - cp2[0], cp1[1] - cp2[1]],
      dp = [s[0] - e[0], s[1] - e[1]],
      n1 = cp1[0] * cp2[1] - cp1[1] * cp2[0],
      n2 = s[0] * e[1] - s[1] * e[0],
      n3 = 1.0 / (dc[0] * dp[1] - dc[1] * dp[0]);
    return [Math.round((n1 * dp[0] - n2 * dc[0]) * n3 * 1000) / 1000, Math.round((n1 * dp[1] - n2 * dc[1]) * n3 * 1000) / 1000];
  };
  var outputList = subjectPolygon;
  cp1 = clipPolygon[clipPolygon.length - 1];
  for (var j = 0; j < clipPolygon.length; j++) {
    cp2 = clipPolygon[j];
    var inputList = outputList;
    outputList = [];
    s = inputList[inputList.length - 1]; // Last point in the input list
    for (var i = 0; i < inputList.length; i++) {
      e = inputList[i];
      if (inside(e)) {
        if (!inside(s)) {
          outputList.push(intersection());
        }
        outputList.push(e);
      } else if (inside(s)) {
        outputList.push(intersection());
      }
      s = e;
    }
    cp1 = cp2;
  }
  return outputList;
}

var z = clip(polygonVertices, rectangleVertices);
console.log(z);
// createwindow(z)



















