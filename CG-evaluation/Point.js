class Point {
  constructor (x, y) {
    if (isNaN(x) || isNaN(y)) {
      console.log('Invalid values. Please check them')
    } else {
      this.x = x
      this.y = y
    }
  }

  setX (x) {
    if (isNaN(x)) {
      console.log('Invalid value. Please check it')
    } else {
      this.x = x
    }
  }

  setXY (x, y) {
    if (isNaN(x) || isNaN(y)) {
      console.log('Invalid values. Please check them')
    } else {
      this.x = x
      this.y = y
    } 
  }

  setY (y) {
   if (isNaN(y)) {
      console.log('Invalid value. Please check it')
    } else {
      this.y = y
    } 
  }

  sum (point) {
    return new Point(this.x + point.x, this.y + point.y)
  }

  mult (point) {
    return new Point(this.x * point.x, this.y * point.y)
  }

  multEscalar (number) {
    return new Point(this.x * number, this.y * number)
  }

  print (frame, color) {
    if (this.x < 0 || this.y < 0) {
      return
    } else {
      frame.drawIn(this.x, this.y, color)
    }
  }
}

module.exports = Point
