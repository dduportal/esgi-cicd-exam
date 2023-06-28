function getSurface(shape) {
    if ('height' in shape) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
function toNumber(value) {
    return value;
}
