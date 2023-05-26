var bottomLeftX = -0.4;
var bottomLeftY = -0.25;
var bottomRightX = 0.4;
var bottomRightY = -0.25;
var topRightX = 0.4;
var topRightY = 0.25;
var topLeftX = -0.4;
var topLeftY = 0.25;

var rectangle_vertices = new Float32Array([
    bottomLeftX, bottomLeftY,
    bottomRightX, bottomRightY,
    topRightX, topRightY,
    topLeftX, topLeftY
]);

//creates window 
createwindow(rectangle_vertices,fragcode=`
void main(void) {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`)

//initial line
var lineStartX = 0;
var lineStartY = 120;
var lineEndX = 130;
var lineEndY = 5;

var line_vertices = new Float32Array([
    lineStartX, lineStartY,
    lineEndX, lineEndY
]);
console.log(line_vertices)

function normalizeCoordinates(coordinates, minValue, maxValue) {
    var range = maxValue - minValue;
    var normalizedCoordinates = [];
  
    for (var i = 0; i < coordinates.length; i++) {
      var value = coordinates[i];
      var normalizedValue = (value - minValue) / range *2 - 1;
      normalizedCoordinates.push(normalizedValue);
    }
  
    return normalizedCoordinates;
  }
  
z=normalizeCoordinates(line_vertices,0,130)
console.log(z)
prev_line=new Float32Array(z)
console.log(prev_line)
// s

// Define the clipping region boundaries
var xmin = -0.4;
var xmax = 0.4;
var ymin = -0.25;
var ymax = 0.25;

// Function to perform Cohen-Sutherland line clipping
function cohenSutherlandLineClipping(z) 
{ 
    x1=z[0]
    y1=z[1]
    x2=z[2]
    y2=z[3]
    console.log(x1,y1,x2,y2)
    var code1 = computeOutCode(x1, y1);
    var code2 = computeOutCode(x2, y2);
    var accept = false;

    while (true) {
        if (!(code1 | code2)) {
            // Both points are inside the clipping region
            accept = true;
            break;
        } else if (code1 & code2) {
            // Both points are outside the clipping region and in the same region
            break;
        } else {
            var x, y;
            var outCode = code1 ? code1 : code2;

            if (outCode & 8) {
                // Top boundary
                x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1);
                y = ymax;
            } else if (outCode & 4) {
                // Bottom boundary
                x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1);
                y = ymin;
            } else if (outCode & 2) {
                // Right boundary
                y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1);
                x = xmax;
            } else if (outCode & 1) {
                // Left boundary
                y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1);
                x = xmin;
            }

            if (outCode === code1) {
                x1 = x;
                y1 = y;
                code1 = computeOutCode(x1, y1);
            } else {
                x2 = x;
                y2 = y;
                code2 = computeOutCode(x2, y2);
            }
        }
    }

    if (accept) {
        // Draw the clipped line
        var vertices = new Float32Array([
            x1, y1,
            x2, y2
        ]);
        console.log(x1,y1,x2,y2)
        createline(vertices)
    }
}

// Function to compute the out code of a point
function computeOutCode(x, y) {
    var code = 0;

    if (x < xmin) {
        code |= 1;  // to the left of the clip window
    } else if (x > xmax) {
        code |= 2;  // to the right of the clip window
    }

    if (y < ymin) {
        code |= 4;  // below the clip window
    } else if (y > ymax) {
        code |= 8;  // above the clip window
    }

    return code;
}
cohenSutherlandLineClipping(z)


