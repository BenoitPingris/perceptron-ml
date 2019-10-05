let perceptron = null
let points = null
let currIndex = 0

function setup() {
    createCanvas(500, 500)

    perceptron = Perceptron(0.005, 3)
    points = Array.from({ length: 50 }, (v, k) => Point())
}

function draw() {
    background(151)

    const p1 = Point(-1, f(-1))
    const p2 = Point(1, f(1))
    strokeWeight(3)
    fill(0,0,255)
    line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY())
    strokeWeight(1)
    fill(0,0,0)
    const p3 = Point(-1, perceptron.guessY(-1))
    const p4 = Point(1, perceptron.guessY(1))
    line(p3.pixelX(), p3.pixelY(), p4.pixelX(), p4.pixelY())

    for (const point of points) {
        point.show()

        const label = point.label()
        const inputs = [...point.coord(), point.bias()]
        // perceptron.train(inputs, label)
        const guess = perceptron.guess(inputs)
        fill(guess === label ? 'green' : 'red')
        ellipse(point.pixelX(), point.pixelY(), 8)
    }

    const inputs = [...points[currIndex].coord(), points[currIndex].bias()]
    const label = points[currIndex].label()
    perceptron.train(inputs, label)
    currIndex = (currIndex + 1) % (points.length )
}