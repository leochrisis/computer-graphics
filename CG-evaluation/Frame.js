class Frame {
  constructor (height, width) {
    this.height = height,
    this.width = width,
    this.drawedFrame = []
    this._buildFrame()
  }

  setHeigth (height) {
    this.height = height
    this.drawedFrame = []
    this._buildFrame
  }

  setWidth (width) {
    this.width = width
    this.drawedFrame = []
    this._buildFrame
  }

  drawIn (x, y, color) {
    if (x >= 0 && x <= this.drawedFrame.length) {
      if (y >= 0 && y <= this.drawedFrame.length) {
        this.drawedFrame[x][y] = '|' + color
      }
    }
  }

  print () {
    var frameHelper = ''

    for (var i = 0; i < this.height; i++) {
      frameHelper = ''
      for (var j = 0; j < this.width; j++) {
        frameHelper += this.drawedFrame[i][j]
      }
      console.log(frameHelper)
    }
  }

  _buildFrame () {
    for (var i = 0; i < this.height; i++) {
      this.drawedFrame.push(['|_'])
      for (var j = 0; j < this.width; j++) {
        this.drawedFrame[i].push('|_')
      }
    }
  }
}

module.exports = Frame
