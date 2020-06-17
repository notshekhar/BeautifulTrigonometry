let canvas = document.querySelector("canvas")
let scr = canvas.getContext("2d")
let walls = []

walls.push(new Boundary(100, 250, 500, 250))
walls.push(new Boundary(300, 50, 300, 450))

walls.push(new Boundary(0, 0, 600, 0))
walls.push(new Boundary(0, 0, 0, 500))
walls.push(new Boundary(0, 500, 600, 500))
walls.push(new Boundary(600, 500, 600, 0))

let i = 0
let t = 0
//moving particle in circular path
let ox = canvas.width / 2
let oy = canvas.height / 2
let radius = 199 //* (4 / (n * Math.PI))
let particle = new Particle(ox + radius, oy, 0)

function draw() {
    //clearing canvas
    scr.fillStyle = "black"
    scr.fillRect(0, 0, canvas.width, canvas.height)

    //showing particle
    particle.show()

    // let n = i * 2 + 1
    let x = ox + radius * Math.cos(t)
    let y = oy + radius * Math.sin(t)

    if (x < 300) {
        if (y < 250) {
            particle.secondC()
        } else {
            particle.thirdC()
        }
    } else {
        if (y < 250) {
            particle.firstC()
        } else {
            particle.fourthC()
        }
    }
    particle.move(x, y, 45)
    t -= 0.08

    if (t < -360) {
        t = 0
    }
    // for (let wall of walls) {
    //     wall.show()
    // }
    particle.cast(walls)
    requestAnimationFrame (draw)
}

requestAnimationFrame(draw)

// setInterval(() => draw(), 21)

// canvas.onmousemove = (e) => {
//     particle.move(e.x, e.y)
// }
