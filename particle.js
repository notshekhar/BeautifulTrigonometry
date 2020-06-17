class Particle {
    constructor(x, y, angle) {
        this.angle = angle
        this.pos = new Vector(x, y)
        this.rays = new Array()
        this.rays.push(new Ray(this.pos.x, this.pos.y, 180))
        this.rays.push(new Ray(this.pos.x, this.pos.y, 90))

        // for(let i=1; i<this.angle; i+=1){
        //   this.rays.push(new Ray(this.pos.x, this.pos.y, i))
        // }
    }
    show() {
        this.rays.forEach((ray) => {
            ray.show()
        })
    }
    move(x, y) {
        this.pos.x = x
        this.pos.y = y
        for (let ray of this.rays) {
            ray.move(x, y)
        }
    }
    //first cordinate
    firstC() {
        this.rays[0].setAngle(180)
        this.rays[1].setAngle(90)
    }
    secondC() {
        this.rays[0].setAngle(360)
        this.rays[1].setAngle(90)
    }
    thirdC() {
        this.rays[0].setAngle(360)
        this.rays[1].setAngle(-90)
    }
    fourthC() {
        this.rays[0].setAngle(180)
        this.rays[1].setAngle(-90)
    }
    cast(walls) {
        for (let ray of this.rays) {
            let record = Infinity
            let point
            for (let wall of walls) {
                let pt = ray.cast(wall)
                if (pt) {
                    let d = this.pos.distance(pt)
                    if (d < record) {
                        record = d
                        point = pt
                    }
                    scr.beginPath()
                    scr.fillStyle = "white"
                    scr.arc(point.x, point.y, 10, 0, 2 * Math.PI)
                    scr.fill()
                    // //drawing line from ray source to intersection
                    // scr.beginPath()
                    // scr.strokeStyle = "white"
                    // scr.lineJoin = "round"
                    // scr.lineCap = "round"
                    // scr.fillStyle = "white"
                    // scr.moveTo(ray.position.x, ray.position.y)
                    // scr.lineTo(point.x, point.y)
                    // scr.stroke()
                }
            }
        }
    }
}
