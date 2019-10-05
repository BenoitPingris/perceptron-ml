function Point(_x = random(-1, 1), _y = random(-1, 1)) {
    const x = _x
    const y = _y
    const bias = 1
    const r = 15
    const label = y > f(x) ? 1 : -1

    return {
        pixelX() {
            return map(x, -1, 1, 0, width)
        },
        pixelY() {
            return map(y, -1, 1, height, 0)
        },
        show() {
            stroke(0)
            fill(label === 1 ? 255 : 0)
            ellipse(this.pixelX(), this.pixelY(), r)
        },
        coord() {
            return [x, y]
        },
        label() {
            return label
        },
        bias() {
            return bias
        },
    }
}