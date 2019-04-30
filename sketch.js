var ptouchIsDown
var pmouseIsPressed
var fr = 30

function setup () {
  createCanvas(windowWidth, windowHeight)
  frameRate(fr)
}

function draw () {
  background(255)
  noStroke()

  fill(0)
  textFont('Helvetica')

  var words = 'ENTER'
  var size = 30

  var words = ['72', '33']
  words = random(words)

  // textSize(72);
  // textAlign(CENTER, BASELINE);
  // text(words, width / 2, height / 2);

  for (i = 0; i <= width; i += 30) {
    textSize(72)
    textAlign(CENTER, BASELINE)
    text(words, i, height / 2)
  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}
