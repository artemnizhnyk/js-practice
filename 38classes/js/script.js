"use strict";

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {

    constructor(width, height, text, bgColor) {
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10);
const longRectangle = new Rectangle(5, 15);

console.log(square.calcArea());
console.log(longRectangle.calcArea());

console.log(`-----------------`);

const div = new ColoredRectangleWithText(25, 10, `Any Text`, `blue`);
div.showMyProps();
console.log(div.calcArea());