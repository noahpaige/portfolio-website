import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const curves = [
    "M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,101.3C672,107,768,117,864,138.7C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,122.7C672,117,768,171,864,181.3C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,101.3C672,64,768,64,864,85.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,32L48,64C96,96,192,160,288,165.3C384,171,480,117,576,112C672,107,768,149,864,176C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,240C672,224,768,192,864,165.3C960,139,1056,117,1152,144C1248,171,1344,245,1392,282.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,186.7C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,128C672,96,768,96,864,133.3C960,171,1056,245,1152,250.7C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,186.7C672,181,768,139,864,149.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,122.7C672,117,768,171,864,181.3C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
  ];

  return (
    <div className="overflow-scroll">
      <div className="snap-mandatory snap-y overflow-scroll h-screen bg-base-200">
        <div className="snap-center h-screen">
          <div className="relative h-screen w-screen">
            <div className="absolute top-0 bg-blue-500 h-12 w-screen" />
            <svg
              className="drop-shadow-xl absolute top-11 fill-blue-500 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path className="" fill-opacity="1" d={curves[0]}></path>
            </svg>
            <svg
              className="drop-shadow-xl absolute bottom-11 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[1]}></path>
            </svg>
            <div className="absolute bottom-0 bg-blue-500 h-12 w-screen" />
          </div>
          <div className="hero h-screen relative -translate-y-full ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  It's over Anakin! I have the high ground.
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="snap-center h-screen">
          <div className="relative h-screen w-screen">
            <div className="absolute top-0 bg-blue-500 h-12 w-screen" />
            <svg
              className="drop-shadow-xl absolute top-11 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[2]}></path>
            </svg>
            <svg
              className="drop-shadow-xl absolute bottom-10 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[3]}></path>
            </svg>
            <div className="absolute bottom-0 bg-blue-500 h-11 w-screen" />
          </div>
          <div className="hero h-screen relative -translate-y-full ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  YoU uNdErEsTiMaTe My PoWeR!!
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="snap-center h-screen">
          <div className="relative h-screen w-screen">
            <div className="absolute top-0 bg-blue-500 h-12 w-screen" />
            <svg
              className="drop-shadow-xl absolute top-11 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[4]}></path>
            </svg>
            <svg
              className="drop-shadow-xl absolute bottom-10 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[5]}></path>
            </svg>
            <div className="absolute bottom-0 bg-blue-500 h-11 w-screen" />
          </div>
          <div className="hero h-screen relative -translate-y-full ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  It was said that you would, destroy the Sith, not join them.
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="snap-center h-screen">
          <div className="relative h-screen w-screen">
            <div className="absolute top-0 bg-blue-500 h-12 w-screen" />
            <svg
              className="drop-shadow-xl absolute top-11 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[6]}></path>
            </svg>
            <svg
              className="drop-shadow-xl absolute bottom-10 fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              height="6rem"
              width="100%"
            >
              <path fill-opacity="1" d={curves[7]}></path>
            </svg>
            <div className="absolute bottom-0 bg-blue-500 h-11 w-screen" />
          </div>
          <div className="hero h-screen relative -translate-y-full ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  You were my brother, Anakin.
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer p-10 bg-blue-500 text-neutral-content snap-center">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
