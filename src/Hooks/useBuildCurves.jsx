import Color from '../Classes/Color'
import useBuildTopCurvePath from '../Hooks/useBuildTopCurvePath'
import useBuildBottomCurvePath from '../Hooks/useBuildBottomCurvePath'

const useBuildCurves = (num, curveHeight, topColor, bottomColor, bgColor) => {
  const curves = { tops: [], bottoms: [] }

  for (let i = num - 1; i >= 0; i--) {
    const tColor = Color.blend(topColor, bgColor, i === 0 ? 0 : computeLerpConst2(i / num))
    const bColor = Color.blend(bottomColor, bgColor, i === 0 ? 0 : computeLerpConst2(i / num))
    curves.tops.push({
      path: useBuildTopCurvePath(12, 100, 100, curveHeight - 1),
      color: tColor.toString(),
      motionVariants: {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: tColor.set({ a: 0 }).toString()
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: tColor.set({ a: 1 }).toString()
        }
      }
    })

    curves.bottoms.push({
      path: useBuildBottomCurvePath(12, 100, 100, curveHeight - 1),
      color: bColor.toString(),
      motionVariants: {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: tColor.set({ a: 0 }).toString()
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: tColor.set({ a: 1 }).toString()
        }
      }
    })
  }

  return curves
}

// // some funky shit
// const computeLerpConst1 = (i) => {
//   return Math.pow(Math.cos((1 - i) * Math.PI), 5) / 2 + 0.5
// }

// ease in out
const computeLerpConst2 = (i) => {
  return 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3)
}

export default useBuildCurves
