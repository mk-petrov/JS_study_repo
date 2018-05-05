let currentId = 0;
function getId() {
    return currentId++;
}

function createRect(width, height) {
    return {
        id: getId(),
        width: width,
        height: height,
        area: () => this.width * this.height,
        compareTo: function (other) {
            let result = other.area() - this.area();
            return result || (other.width - this.width);
        },
        toString: function () {
            return `[${this.width} x ${this.height}]`;
        }
    }
}

let myRect = createRect(7, 5);
let otherRect = createRect(20, 16);
let equalRect = createRect(5, 7);
let rectArr = [myRect, otherRect, equalRect];
console.log(rectArr.toString());
//sort by area and then by width
rectArr.sort((a, b) => a.compareTo(b));
console.log(rectArr.toString());