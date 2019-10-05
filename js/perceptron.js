const _ = console.log

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function f(x) {
    return 0.5 * x + 0.2
}

// A perceptron is a neuron
function Perceptron(learning_rate, n) {
    const weights = Array.from({ length: n }, (k, v) => random(-1, 1))
    const activation = (n) => n >= 0 ? 1 : -1

    return {
        guess(inputs) {
            let sum = 0
            for (let i = 0; i < weights.length; i++) {
                sum += inputs[i] * weights[i]
            }
            return activation(sum)
        },

        train(inputs, label) {
            const guess = this.guess(inputs)
            const cost = label - guess
            for (let i = 0; i < weights.length; i++) {
                weights[i] += inputs[i] * cost * learning_rate
            }
        },
        guessY(x) {
            // w0 * x + w1 * y + w2 * b = 0
            // w1 * y = -w2 * b - w0 * x    (b = 1)
            // y = -w2 / w1 - w0 / w1 * x
            const w0 = weights[0]
            const w1 = weights[1]
            const w2 = weights[2]
            return -w2/w1 - w0/w1 * x
        }
    }
}