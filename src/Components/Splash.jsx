import { Canvas } from "@react-three/fiber";
import "../App.css";
import Blurb from "./Blurb";
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { a } from '@react-spring/web'

export default function Splash() {
  return (
    <div className="h-full w-full">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content h-screen flex-col lg:flex-row-reverse w-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-9xl font-bold mb-4">Noah</h1>
            <h1 className="text-9xl font-bold">Paige</h1>
          </div>
          <a.main className="h-full" >
            <Canvas className="canvas" dpr={[1, 2]}>
              <Blurb />
              <OrbitControls enablePan={false} enableZoom={false} maxAzimuthAngle={ Math.PI * 13 / 24 } minAzimuthAngle={ Math.PI * 11 / 24 } maxPolarAngle={Math.PI * 13 / 24} minPolarAngle={Math.PI * 11 / 24} />
            </Canvas>
          </a.main>
        </div>
      </div>
    </div>
  );
}

