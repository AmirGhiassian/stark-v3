// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { StlViewer } from "react-stl-viewer";
import { useState } from "react";

// function Model(props: any) {
//   const { scene } = useGLTF("bmw.glb");
//   return <primitive object={scene} {...props} />;
// }
const style = {
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};
function App() {
  const [obj, setObj] = useState("Kodama.stl");
  return (
    <>
      <StlViewer style={style} orbitControls shadows url={obj} />
      {/* <Canvas */}
      {/*   dpr={[1, 2]} */}
      {/*   camera={{ fov: 45 }} */}
      {/*   style={{ position: "absolute" }} */}
      {/* > */}
      {/*   <color attach="background" args={["#101010"]} /> */}
      {/*   <PresentationControls */}
      {/*     speed={1.5} */}
      {/*     global */}
      {/*     zoom={0.5} */}
      {/*     polar={[-0.1, Math.PI / 4]} */}
      {/*   > */}
      {/*     <Stage environment={null}> */}
      {/*       <Model scale={0.01} /> */}
      {/*     </Stage> */}
      {/*   </PresentationControls> */}
      {/* </Canvas> */}
    </>
  );
}

export default App;
