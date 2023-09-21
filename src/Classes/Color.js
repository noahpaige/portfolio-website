class Color {
  constructor () {
    this.r = 0
    this.g = 0
    this.b = 0
    this.a = 1
  }

  set (o) {
    if (typeof o.r === 'number') this.r = Math.min(Math.max(0, o.r), 255)
    if (typeof o.g === 'number') this.g = Math.min(Math.max(0, o.g), 255)
    if (typeof o.b === 'number') this.b = Math.min(Math.max(0, o.b), 255)
    if (typeof o.a === 'number') this.a = Math.min(Math.max(0, o.a), 1)

    return this
  }

  toObj () {
    return JSON.parse(JSON.stringify(
      { r: this.r, g: this.g, b: this.b, a: this.a }
    ))
  }

  toString () {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }

  static blend (a, b, i) {
    const c = new Color()
    const ao = a.toObj()
    const bo = b.toObj()
    c.set({ r: lerp(ao.r, bo.r, i), g: lerp(ao.g, bo.g, i), b: lerp(ao.b, bo.b, i), a: lerp(ao.a, bo.a, i) })

    return c
  }
}

const lerp = (a, b, i) => a + (b - a) * i

export default Color
