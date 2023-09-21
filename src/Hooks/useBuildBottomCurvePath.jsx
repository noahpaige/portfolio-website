import Path from '@joemaddalone/path'

function randRange (min, max) {
  return Math.random() * (max - min) + min
}

const useBuildBottomCurvePath = (numPoints, width, height, curveHeight) => {
  const curveStart = {
    x: 0, y: randRange(0, curveHeight)
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
    const cy2 = randRange(0, curveHeight)
    curve.push({
      cx1: prev.ex + width / numPoints / 3,
      cy1: prev.cy1 ? prev.ey + (prev.ey - prev.cy2) : randRange(0, curveHeight),
      cx2: prev.ex + width / numPoints * 2 / 3,
      cy2,
      ex: prev.ex + width / numPoints,
      ey: randRange(cy2, curveHeight)
    })
    prev = curve[i]
  }

  const path = new Path()
  path.moveTo(width, height)
  path.L(0, height)
  path.L(curveStart.x, curveStart.y)
  curve.forEach(curve => path.C(curve.cx1, curve.cy1, curve.cx2, curve.cy2, curve.ex, curve.ey))
  path.L(width, height)

  return path.toString()
}

export default useBuildBottomCurvePath
