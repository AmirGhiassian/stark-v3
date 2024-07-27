import * as THREE from "three";
import { useEffect, useRef } from "react";
import { STLLoader } from "three/examples/jsm/Addons.js";

function ViewModel() {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xb2ffc8,
      metalness: 0.25,
      roughness: 0.1,
      opacity: 1.0,
      transparent: true,
      transmission: 0.99,
      clearcoat: 1.0,
      clearcoatRoughness: 0.25,
    });
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={refContainer}></div>;
}

export default ViewModel;
