import Path from '@joemaddalone/path'

function randRange (min, max) {
  return Math.random() * (max - min) + min
}

const useBuildTopCurvePath = (numPoints, width, height, curveHeight) => {
  const curveStart = {
    x: width, y: randRange(height - curveHeight, height)
  }

  const curve = []

  let prev = {
    cx1: undefined,
    cy1: undefined,
    cx2: undefined,
    cy2: undefined,
    ex: curveStart.x,
    ey: curveStart.y
  }

  for (let i = 0; i < numPoints; i++) {
    const cy2 = randRange(height - curveHeight, height)
    curve.push({
      cx1: prev.ex - width / numPoints / 3,
      cy1: prev.cy1 ? prev.ey + (prev.ey - prev.cy2) : randRange(height - curveHeight, height),
      cx2: prev.ex - width / numPoints * 2 / 3,
      cy2,
      ex: prev.ex - width / numPoints,
      ey: randRange(height - curveHeight, cy2)
    })
    prev = curve[i]
  }

  const path = new Path()
  path.moveTo(0, 0)
  path.L(width, 0)
  path.L(curveStart.x, curveStart.y)
  curve.forEach(curve => path.C(curve.cx1, curve.cy1, curve.cx2, curve.cy2, curve.ex, curve.ey))
  path.L(0, 0)

  return path.toString()
}

export default useBuildTopCurvePath
