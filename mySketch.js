function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);
	textSize(100)
	textAlign(BOTTOM, LEFT)
	text("Ali", 0, windowHeight, )
	if (mouseIsPressed) {
		strokeWeight(5);
		stroke(2, 100, 255);
		fill(100, 255, 2);
		ellipse(mouseX, mouseY, 20, 20); // The strokeweight, stroke colour, and fill colour are changed when the mouse is pressed for both the ellipse and the word "Ali"
	} else {
		strokeWeight(7);
		stroke(255, 1, 255)
		fill(255, 100, 2); // When the mouse isn't pressed, the strokeweight, stroke colour, and fill colour change for the word "Ali"
		rect(mouseY + 500, mouseX, int(random(250)), 20); // When the mouse isn't pressed, a rectangle with a random width and with that same strokeweight, stroke colour, and fill colour is drawn
	}
}
