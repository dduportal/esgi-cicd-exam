interface Square {
    width: number
}

interface Rectangle extends Square {
    height: number
}

type Shape = Rectangle | Square

function getSurface(shape: Shape): number {
    if('height' in shape) {
        return shape.width * shape.height
    } else {
        return shape.width * shape.width
    }
}

function toNumber(value: number | string): number {
    return typeof(value) === 'string' ? Number(value) : value
}