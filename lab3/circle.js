function drawCircleMidPoint(circlevertexData, canvasWidth, canvasHeight) {
	let radius = 100;
	let xc = 300;
	let yc = 420;
  
	let x = 0;
	let y = radius;
	let p = 1 - radius;
  
	while (x <= y) {
		circlevertexData.push(normalise(xc + x, canvasWidth));
		circlevertexData.push(normalise(yc + y, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc + y, canvasWidth));
		circlevertexData.push(normalise(yc + x, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc - x, canvasWidth));
		circlevertexData.push(normalise(yc + y, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc - y, canvasWidth));
		circlevertexData.push(normalise(yc + x, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc + x, canvasWidth));
		circlevertexData.push(normalise(yc - y, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc + y, canvasWidth));
		circlevertexData.push(normalise(yc - x, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc - x, canvasWidth));
		circlevertexData.push(normalise(yc - y, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		circlevertexData.push(normalise(xc - y, canvasWidth));
		circlevertexData.push(normalise(yc - x, canvasHeight));
		circlevertexData.push(1.0, 0.0, 0.0);

		if (p < 0) {
			x++;
			p += 2 * x + 1;
		} else {
			x++;
			y--;
			p += 2 * x - 2 * y + 1;
		}
	}
}
function normalise(val, max) {
	return (val / max) * 2 - 1;
}