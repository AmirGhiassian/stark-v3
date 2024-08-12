import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";
import Loading from "./Loading";
import { useControls } from "leva";
import { Leva } from "leva";

function Model() {
  useGLTF.preload("shinny_glass.gltf");
  const gltf = useLoader(GLTFLoader, "shinny_glass.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />;
    </>
  );
}

function Testing() {
  const { toggle } = useControls({
    toggle: { value: true, label: "Auto Rotate" },
  });

  const { websocketIP } = useControls({
    websocketIP: { value: "ws://localhost:5000", label: "Websocket IP" },
  });

  const { button } = useControls({
    button: {
      value: () => {
        console.log("Button Clicked");
      },
      label: "Click Me",
    },
  });
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas>
          <PerspectiveCamera fov={50} position={[0, 20, 50]} makeDefault />
          <Model />
          <OrbitControls enablePan={false} autoRotate={toggle} />
          <Environment files="/sky.exr" background />
        </Canvas>
      </Suspense>
    </>
  );
}

export default Testing;

{
  /* <ambientLight intensity={0.1} /> */
}
{
  /* <directionalLight color="red" position={[0, 0, 5]} /> */
}
{
  /* <mesh> */
}
{
  /*   <boxGeometry args={[3, 3, 3]} /> */
}
{
  /*   <meshStandardMaterial /> */
}
{
  /*   <ImportModel /> */
}
{
  /* </mesh> */
}
