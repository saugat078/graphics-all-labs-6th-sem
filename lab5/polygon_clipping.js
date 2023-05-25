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
  [-0.6, -0.7],
  [0.9, 0.6],
  [0.45, 0.6],
  [-0.4, 0.2]
];
// createwindow(polygonVertices)
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
createwindow(z)





















// function sutherlandHodgmanClipping(subjectPolygon, clipPolygon) {
//   var outputList = subjectPolygon.slice(); // Make a copy of the subject polygon

//   for (var i = 0; i < clipPolygon.length; i += 2) {
//     var clipEdgeStartX = clipPolygon[i];
//     var clipEdgeStartY = clipPolygon[i + 1];
//     var clipEdgeEndX = clipPolygon[(i + 2) % clipPolygon.length];
//     var clipEdgeEndY = clipPolygon[(i + 3) % clipPolygon.length];

//     var inputList = outputList;
//     outputList = [];

//     var prevVertexX = inputList[inputList.length - 2];
//     var prevVertexY = inputList[inputList.length - 1];

//     for (var j = 0; j < inputList.length; j += 2) {
//       var currentVertexX = inputList[j];
//       var currentVertexY = inputList[j + 1];

//       if (isInside(clipEdgeStartX, clipEdgeStartY, clipEdgeEndX, clipEdgeEndY, currentVertexX, currentVertexY)) {
//         if (!isInside(clipEdgeStartX, clipEdgeStartY, clipEdgeEndX, clipEdgeEndY, prevVertexX, prevVertexY)) {
//           var intersectionPoint = computeIntersection(
//             clipEdgeStartX,
//             clipEdgeStartY,
//             clipEdgeEndX,
//             clipEdgeEndY,
//             prevVertexX,
//             prevVertexY,
//             currentVertexX,
//             currentVertexY
//           );
//           outputList.push(intersectionPoint.x, intersectionPoint.y);
//         }
//         outputList.push(currentVertexX, currentVertexY);
//       } else if (isInside(clipEdgeStartX, clipEdgeStartY, clipEdgeEndX, clipEdgeEndY, prevVertexX, prevVertexY)) {
//         var intersectionPoint = computeIntersection(
//           clipEdgeStartX,
//           clipEdgeStartY,
//           clipEdgeEndX,
//           clipEdgeEndY,
//           prevVertexX,
//           prevVertexY,
//           currentVertexX,
//           currentVertexY
//         );
//         outputList.push(intersectionPoint.x, intersectionPoint.y);
//       }
//       prevVertexX = currentVertexX;
//       prevVertexY = currentVertexY;
//     }
//   }

//   return outputList;
// }

// // Check if a point is inside the clip edge
// function isInside(clipEdgeStartX, clipEdgeStartY, clipEdgeEndX, clipEdgeEndY, pointX, pointY) {
//   var crossProduct =
//     (clipEdgeEndX - clipEdgeStartX) * (pointY - clipEdgeStartY) - (clipEdgeEndY - clipEdgeStartY) * (pointX - clipEdgeStartX);
//   return crossProduct <= 0;
// }

// // Compute the intersection point of two line segments
// function computeIntersection(
//   clipEdgeStartX,
//   clipEdgeStartY,
//   clipEdgeEndX,
//   clipEdgeEndY,
//   subjectEdgeStartX,
//   subjectEdgeStartY,
//   subjectEdgeEndX,
//   subjectEdgeEndY
// ) {
//   var clipVectorX = clipEdgeEndX - clipEdgeStartX;
//   var clipVectorY = clipEdgeEndY - clipEdgeStartY;
//   var subjectVectorX = subjectEdgeEndX - subjectEdgeStartX;
//   var subjectVectorY = subjectEdgeEndY - subjectEdgeStartY;

//   var clipLength = Math.sqrt(clipVectorX * clipVectorX + clipVectorY * clipVectorY);
//   var subjectLength = Math.sqrt(subjectVectorX * subjectVectorX + subjectVectorY * subjectVectorY);

//   clipVectorX /= clipLength;
//   clipVectorY /= clipLength;
//   subjectVectorX /= subjectLength;
//   subjectVectorY /= subjectLength;

//   var dotProduct = clipVectorX * subjectVectorX + clipVectorY * subjectVectorY;

//   var intersectionPointX = subjectEdgeStartX + subjectVectorX * dotProduct * subjectLength;
//   var intersectionPointY = subjectEdgeStartY + subjectVectorY * dotProduct * subjectLength;

//   return {
//     x: intersectionPointX,
//     y: intersectionPointY
//   };
// }

// var clippedVertices = sutherlandHodgmanClipping(polygonVertices, rectangleVertices);
// console.log(clippedVertices);


































































// var windowVertices = new Float32Array([
//     [bottomLeftX, bottomLeftY],
//     [bottomRightX, bottomRightY],
//     [topRightX, topRightY],
//     [topLeftX, topLeftY]
//   ]);
//   createwindow(rectangle_vertices)
// // Polygon vertices

  
// createwindow(normalizedPolygonVertices)



// // // Sutherland-Hodgman line clipping algorithm
// function clipPolygon(polygonVertices, windowVertices) {
//   var clippedVertices = polygonVertices;

//   for (var i = 0; i < windowVertices.length; i++) {
//     var clipEdgeStart = windowVertices[i];
//     var clipEdgeEnd = windowVertices[(i + 1) % windowVertices.length];
//     var newClippedVertices = [];

//     for (var j = 0; j < clippedVertices.length; j++) {
//       var currentVertex = clippedVertices[j];
//       var previousVertex = clippedVertices[(j + clippedVertices.length - 1) % clippedVertices.length];

//       if (insideWindow(currentVertex, clipEdgeStart, clipEdgeEnd)) {
//         if (!insideWindow(previousVertex, clipEdgeStart, clipEdgeEnd)) {
//           var intersection = computeIntersection(previousVertex, currentVertex, clipEdgeStart, clipEdgeEnd);
//           newClippedVertices.push(intersection);
//         }
//         newClippedVertices.push(currentVertex);
//       } else if (insideWindow(previousVertex, clipEdgeStart, clipEdgeEnd)) {
//         var intersection = computeIntersection(previousVertex, currentVertex, clipEdgeStart, clipEdgeEnd);
//         newClippedVertices.push(intersection);
//       }
//     }

// //     clippedVertices = newClippedVertices;
// //   }

// //   return clippedVertices;
// // }

// // // Check if a vertex is inside the clipping window
// // function insideWindow(vertex, clipEdgeStart, clipEdgeEnd) {
// //   var [vx, vy] = vertex;
// //   var [sx, sy] = clipEdgeStart;
// //   var [ex, ey] = clipEdgeEnd;

// //   var inside = ((ex - sx) * (vy - sy)) > ((ey - sy) * (vx - sx));
// //   return inside;
// // }

// // // Compute the intersection point between two line segments
// function computeIntersection(v1, v2, v3, v4) {
//   var [x1, y1] = v1;
//   var [x2, y2] = v2;
//   var [x3, y3] = v3;
//   var [x4, y4] = v4;

//   var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
//   var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
//   return [x, y];
// }

// // Clipping the polygon to fit within the window
// var clippedPolygonVertices = clipPolygon(polygonVertices, rectangle_vertices);
// console.log(clippedPolygonVertices);
// createwindow(clippedPolygonVertices)
//   }
