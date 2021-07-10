class Duck {
    constructor(flying = false, quaking = false, xPos = 0, yPos = 0) {
        this.flying = flying;
        this.quaking = quaking;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    takeOff() {
        this.flying = true;
        if (this.quaking)
            console.log(`Duck is flying to ${this.xPos},${this.yPos} while quacking`);
        else
            console.log(`Duck is flying to ${this.xPos},${this.yPos}`);
    }
    land() {
        this.flying = false;
        if (this.quaking)
            console.log(`Duck is swimming to ${this.xPos},${this.yPos} while quacking`);
        else
            console.log(`Duck is swimming to ${this.xPos},${this.yPos}`);
    }
    startQuacking() {
        this.quaking = true;
    }
    stopQuacking() {
        this.quaking = false;
    }
    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
    }
}
module.exports = Duck;