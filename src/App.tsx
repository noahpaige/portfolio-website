import { useState, useRef, useMemo } from "react";
import "./App.css";
import PageSection from "./PageSection";

function App() {
  const [count, setCount] = useState(0);

  // const callback = function (entries: IntersectionObserverEntry[]) {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("animate-fadeIn");
  //     } else {
  //       entry.target.classList.remove("animate-fadeIn");
  //     }
  //   });
  // };

  // const observer = new IntersectionObserver(callback);

  // const targets = document.querySelectorAll(".js-show-on-scroll");
  // targets.forEach(function (target) {
  //   target.classList.add("opacity-0");
  //   observer.observe(target);
  // });

  const scrollRef = useRef(null);
  const messages = [
    "It's over Anakin! I have the high ground.",
    "YoU uNdErEsTiMaTe My PoWeR!!",
    "It was said that you would, destroy the Sith, not join them.",
    "You were my brother, Anakin.",
  ];
  const colors = ["#F7B267", "#F79D65", "#F4845F", "#F27059", "#F25C54"];
  const curves = useMemo(
    () => ({
      tops: [
        {
          path: "M 0 2032 L 10.4 2037.3 C 20.9 2043 42 2053 63 2096 C 83.5 2139 104 2213 125 2234.7 C 146.1 2256 167 2224 188 2224 C 208.7 2224 230 2256 253 2248 C 271.3 2235 292 2181 313 2138.7 C 333.9 2096 355 2064 376 2080 C 396.5 2096 417 2160 438 2197.3 C 459.1 2235 480 2245 501 2240 C 521.7 2235 543 2213 563 2181.3 C 584.3 2149 605 2107 626 2085.3 C 647 2064 668 2064 689 2064 C 709.6 2064 730 2064 751 2106.7 C 772.2 2149 793 2235 814 2234.7 C 834.8 2235 856 2149 877 2138.7 C 897.4 2128 918 2192 939 2213.3 C 960 2235 981 2213 1002 2181.3 C 1022.6 2149 1043 2107 1064 2090.7 C 1085.2 2075 1106 2085 1127 2085.3 C 1147.8 2085 1169 2075 1190 2064 C 1210.4 2053 1231 2043 1252 2074.7 C 1273 2107 1294 2181 1315 2202.7 C 1335.7 2224 1357 2192 1377 2176 C 1398.3 2160 1419 2160 1430 2160 L 1440 2160 L 1440 0 L 0 0 Z",
          viewBox: "0 0 1440 2249",
        },
        {
          path: "M 0 2224 L 15 2197.3 C 30 2171 60 2117 90 2117.3 C 120 2117 150 2171 180 2197.3 C 210 2224 240 2224 270 2208 C 300 2192 330 2160 360 2160 C 390 2160 420 2192 450 2192 C 480 2192 510 2160 540 2160 C 570 2160 600 2192 630 2181.3 C 660 2171 690 2117 720 2122.7 C 750 2128 780 2192 810 2224 C 840 2256 870 2256 900 2234.7 C 930 2213 960 2171 990 2133.3 C 1020 2096 1050 2064 1080 2074.7 C 1110 2085 1140 2139 1170 2154.7 C 1200 2171 1230 2149 1260 2133.3 C 1290 2117 1320 2107 1350 2133.3 C 1380 2160 1410 2224 1425 2256 L 1440 2288 L 1440 0 L 0 0 Z",
          viewBox: "0 0 1440 2288",
        },
        {
          path: "M 0 2192 L 15 2186.7 C 30 2181 60 2171 90 2149.3 C 120 2128 150 2096 180 2101.3 C 210 2107 240 2149 270 2181.3 C 300 2213 330 2235 360 2229.3 C 390 2224 420 2192 450 2160 C 480 2128 510 2096 540 2096 C 570 2096 600 2128 630 2165.3 C 660 2203 690 2245 720 2245.3 C 750 2245 780 2203 810 2202.7 C 840 2203 870 2245 900 2229.3 C 930 2213 960 2139 990 2122.7 C 1020 2107 1050 2149 1080 2181.3 C 1110 2213 1140 2235 1170 2250.7 C 1200 2267 1230 2277 1260 2240 C 1290 2203 1320 2117 1350 2101.3 C 1380 2085 1410 2139 1425 2165.3 L 1440 2192 L 1440 0 L 0 0 Z",
          viewBox: "0 0 1440 2265",
        },
        {
          path: "M 0 2160 L 15 2133.3 C 30 2107 60 2053 90 2037.3 C 120 2021 150 2043 180 2085.3 C 210 2128 240 2192 270 2202.7 C 300 2213 330 2171 360 2138.7 C 390 2107 420 2085 450 2112 C 480 2139 510 2213 540 2250.7 C 570 2288 600 2288 630 2250.7 C 660 2213 690 2139 720 2133.3 C 750 2128 780 2192 810 2186.7 C 840 2181 870 2107 900 2101.3 C 930 2096 960 2160 990 2170.7 C 1020 2181 1050 2139 1080 2133.3 C 1110 2128 1140 2160 1170 2149.3 C 1200 2139 1230 2085 1260 2090.7 C 1290 2096 1320 2160 1350 2170.7 C 1380 2181 1410 2139 1425 2117.3 L 1440 2096 L 1440 0 L 0 0 Z",
          viewBox: "0 0 1440 2279",
        },
      ],
      bottoms: [
        {
          path: "M 0 32 L 15 37.3 C 30 43 60 53 90 69.3 C 120 85 150 107 180 144 C 210 181 240 235 270 213.3 C 300 192 330 96 360 58.7 C 390 21 420 43 450 90.7 C 480 139 510 213 540 240 C 570 267 600 245 630 208 C 660 171 690 117 720 85.3 C 750 53 780 43 810 85.3 C 840 128 870 224 900 234.7 C 930 245 960 171 990 149.3 C 1020 128 1050 160 1080 197.3 C 1110 235 1140 277 1170 245.3 C 1200 213 1230 107 1260 53.3 C 1290 0 1320 0 1350 16 C 1380 32 1410 64 1425 80 L 1440 96 L 1440 2320 L 0 2320 Z",
          viewBox: "0 6.67787 1440 2313",
        },
        {
          path: "M 0 32 L 15 69.3 C 30 107 60 181 90 208 C 120 235 150 213 180 192 C 210 171 240 149 270 122.7 C 300 96 330 64 360 48 C 390 32 420 32 450 64 C 480 96 510 160 540 192 C 570 224 600 224 630 229.3 C 660 235 690 245 720 240 C 750 235 780 213 810 181.3 C 840 149 870 107 900 106.7 C 930 107 960 149 990 154.7 C 1020 160 1050 128 1080 144 C 1110 160 1140 224 1170 234.7 C 1200 245 1230 203 1260 165.3 C 1290 128 1320 96 1350 106.7 C 1380 117 1410 171 1425 197.3 L 1440 224 L 1440 2320 L 0 2320 Z",
          viewBox: "0 32 1440 2288",
        },
        {
          path: "M 0 288 L 15 282.7 C 30 277 60 267 90 256 C 120 245 150 235 180 202.7 C 210 171 240 117 270 128 C 300 139 330 213 360 213.3 C 390 213 420 139 450 117.3 C 480 96 510 128 540 133.3 C 570 139 600 117 630 106.7 C 660 96 690 96 720 133.3 C 750 171 780 245 810 234.7 C 840 224 870 128 900 85.3 C 930 43 960 53 990 90.7 C 1020 128 1050 192 1080 208 C 1110 224 1140 192 1170 192 C 1200 192 1230 224 1260 229.3 C 1290 235 1320 213 1350 202.7 C 1380 192 1410 192 1425 192 L 1440 192 L 1440 2320 L 0 2320 Z",
          viewBox: "0 57.7248 1440 2262",
        },
        {
          path: "M 0 64 L 15 53.3 C 30 43 60 21 90 37.3 C 120 53 150 107 180 154.7 C 210 203 240 245 270 240 C 300 235 330 181 360 138.7 C 390 96 420 64 450 80 C 480 96 510 160 540 197.3 C 570 235 600 245 630 218.7 C 660 192 690 128 720 128 C 750 128 780 192 810 192 C 840 192 870 128 900 112 C 930 96 960 128 990 149.3 C 1020 171 1050 181 1080 160 C 1110 139 1140 85 1170 101.3 C 1200 117 1230 203 1260 202.7 C 1290 203 1320 117 1350 85.3 C 1380 53 1410 75 1425 85.3 L 1440 96 L 1440 2320 L 0 2320 Z",
          viewBox: "0 31.4728 1440 2289",
        },
      ],
    }),
    undefined
  );

  return (
    <div ref={scrollRef} className="overflow-y-scroll overflow-x-hidden">
      <div className=" overflow-scroll h-screen bg-base-200 snap-y snap-mandatory">
        <PageSection
          topCurve={curves.tops[0]}
          bottomCurve={curves.bottoms[0]}
          topColor={colors[0]}
          bottomColor={colors[1]}
          name="section 1"
          render={() => (
            <div>
              <h1 className="text-8xl font-bold">Noah Paige</h1>
              <p className="py-6">Web Developer, Game Designer</p>
            </div>
          )}
        />
        <PageSection
          topCurve={curves.tops[1]}
          bottomCurve={curves.bottoms[1]}
          topColor={colors[1]}
          bottomColor={colors[2]}
          name="section 2"
          render={() => (
            <div>
              <h1 className="text-5xl font-bold">{messages[1]}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          )}
        />
        <PageSection
          topCurve={curves.tops[2]}
          bottomCurve={curves.bottoms[2]}
          topColor={colors[2]}
          bottomColor={colors[3]}
          name="section 3"
          render={() => (
            <div>
              <h1 className="text-5xl font-bold">{messages[2]}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          )}
        />
        <footer
          style={{ backgroundColor: colors[3] }}
          className="footer p-10 text-neutral-content snap-center"
        >
          <a className="link link-hover footer-title w-1/3">Contact</a>
          <a className="link link-hover footer-title w-1/3">LinkedIn</a>
          <a className="link link-hover footer-title w-1/3">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
