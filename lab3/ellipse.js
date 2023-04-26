function drawEllipseMidPoint(ellipsevertexData,canvasWidth,canvasHeight) {
    let a = 200;
    let b = 100;
    let xc = 250;
    let yc = 200;
  
    let x = 0;
    let y = b;
    let p = b * b - a * a * b + (a * a) / 4;
    let dx = 2 * b * b * x;
    let dy = 2 * a * a * y;
  
    while (dx < dy) {
      ellipsevertexData.push(normalise(xc + x, canvasWidth));
      ellipsevertexData.push(normalise(yc + y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
      ellipsevertexData.push(normalise(xc - x, canvasWidth));
      ellipsevertexData.push(normalise(yc + y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
      ellipsevertexData.push(normalise(xc + x, canvasWidth));
      ellipsevertexData.push(normalise(yc - y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
      ellipsevertexData.push(normalise(xc - x, canvasWidth));
      ellipsevertexData.push(normalise(yc - y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
  
      if (p < 0) {
        x++;
        dx += 2 * b * b;
        p += dx + b * b;
      } else {
        x++;
        y--;
        dx += 2 * b * b;
        dy -= 2 * a * a;
        p += dx - dy + b * b;
      }
    }
  
    p = b * b * (x + 0.5) * (x + 0.5) + a * a * (y - 1) * (y - 1) - a * a * b * b;
  
    while (y >= 0) {
      ellipsevertexData.push(normalise(xc + x, canvasWidth));
      ellipsevertexData.push(normalise(yc + y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
      ellipsevertexData.push(normalise(xc - x, canvasWidth));
      ellipsevertexData.push(normalise(yc + y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
      ellipsevertexData.push(normalise(xc + x, canvasWidth));
      ellipsevertexData.push(normalise(yc - y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
      ellipsevertexData.push(normalise(xc - x, canvasWidth));
      ellipsevertexData.push(normalise(yc - y, canvasHeight));
      ellipsevertexData.push(1.0, 0.0, 0.0);
  
      if (p > 0) {
        y--;
        dy -= 2 * a * a;
        p += a * a - dy;
      } else {
        x++;
        y--;
        dx += 2 * b * b;
        dy -= 2 * a * a;
        p += dx - dy + a * a;
      }
    }
  }
function normalise(value, range) {
    return (value / (range / 2)) - 1;
  }