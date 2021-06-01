function rgb(r, g, b) {
    if (r < 0) {
        r = "00"
    }
    if (g < 0) {
        g = "00"
    }
    if (b < 0) {
        b = "00"
    }

    if (r > 255) {
        r = "ff"
    }
    if (g > 255) {
        g = "ff"
    }
    if (b > 255) {
        b = "ff"
    }

    r = r.toString(16).toUpperCase();
    g = g.toString(16).toUpperCase();
    b = b.toString(16).toUpperCase();

    if (r.length == 1)
        r = "0" + r
    if (g.length == 1)
        g = "0" + g
    if (b.length == 1)
        b = "0" + b
        
    return r + g + b
}
console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300, 255, 255))
console.log(rgb(173, 255, 47))
console.log(rgb(100, 114, 14))
console.log(rgb(263, 129, 213))