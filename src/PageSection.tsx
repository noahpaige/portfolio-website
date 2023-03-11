import { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function PageSection({
  render,
  topCurve,
  bottomCurve,
  topColor,
  bottomColor,
  name,
}) {
  const [outerRef, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) console.log(`${name} in view: ${inView}`);
  }, [inView]);
  return (
    <div ref={outerRef} className="snap-center h-screen">
      <div className="hero h-screen relative">
        <div className="hero-content text-center">
          <div className="max-w-md">{render()}</div>
        </div>
      </div>
      <div className="relative h-screen w-screen top-[-100%] overflow-hidden">
        <svg
          className={
            "top-curve gpu-accelerate drop-shadow-xl " +
            (inView ? " top-curve-in-view" : "")
          }
          style={{ fill: topColor }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={topCurve.viewBox}
          preserveAspectRatio="none"
          height="60%"
          width="100%"
        >
          <path fillOpacity="1" d={topCurve.path}></path>
        </svg>

        <svg
          className={
            "bottom-curve gpu-accelerate drop-shadow-xl transform-gpu" +
            (inView ? " bottom-curve-in-view" : "")
          }
          style={{ fill: bottomColor }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={bottomCurve.viewBox}
          preserveAspectRatio="none"
          height="60%"
          width="100%"
        >
          <path fillOpacity="1" d={bottomCurve.path}></path>
        </svg>
      </div>
    </div>
  );
}

export default memo(PageSection);
