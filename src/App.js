import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { group } from "three";
import "./App.css";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const group = useRef();
  const data = useScroll();

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(0, 1) / 2;
    group.current.children[3].material.zoom = 1 + data.range(0, 1) / 5;
    group.current.children[4].material.zoom = 1 + data.range(0, 1) / 3;
    group.current.children[5].material.zoom = 1 + data.range(0, 1) / 3;
  });

  return (
    <group ref={group}>
      <Image url="./img01.jpg" scale={[4, 5, 1]} position={[-1, 0, 1]} />
      <Image url="./img05.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./img03.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="./img04.jpg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
      <Image
        url="./img06.jpg"
        scale={[1.5, 5, 1]}
        position={[-1.5, -height + 1, 0.5]}
      ></Image>
      <Image
        url="./img07.jpg"
        scale={[1.1, 5, 1]}
        position={[0.3, -height - 1, 1]}
      ></Image>
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={3} damping={3} horizontal={false} infinite={false}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "-50vh", left: "1em" }}>
            Be
          </h1>
          <h1 style={{ position: "absolute", top: "50vh" }}>Creative</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
