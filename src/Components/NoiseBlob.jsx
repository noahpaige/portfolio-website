import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "react-spring/three";
import { MathUtils } from "three";
import { a } from '@react-spring/three'


import "../App.css";

export default function NoiseBlob({ position }) {
  console.log(position);
  // This reference gives us direct access to the THREE.Mesh object
  const sphere = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const onFrame = (state, delta) => {
    sphere.current.rotation.x += delta;
    const v = (hovered ? state.mouse.x / 2 : 0);
    sphere.current.rotation.x = MathUtils.lerp(
      sphere.current.rotation.x,
      v,
      0.2
    );
    sphere.current.position.y = MathUtils.lerp(
      sphere.current.position.y,
      Math.sin(state.clock.elapsedTime / 1.5) / 6 +
        (hovered ? state.mouse.y / 2 : 0),
      0.2
    );
  };

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(onFrame);

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? "#E8B059" : mode ? "#202020" : "white",
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [mode, hovered, down]
  );

  return (
    <animated.mesh
      position={[0,0,-1]}
      ref={sphere}
      scale={wobble}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => {
        setDown(false);
        // Toggle mode between dark and bright
        setMode(!mode);
      }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      {/* <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} /> */}
      <meshNormalMaterial />
    </animated.mesh>
  );
}

