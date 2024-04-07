import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Cube() {
    const mountRef = useRef(null);
    const cubeRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: "white" });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cubeRef.current = cube;

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);

            renderer.render(scene, camera);
        };

        animate();

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            mouseRef.current.x = (clientX / innerWidth) * 2 - 1;
            mouseRef.current.y = -(clientY / innerHeight) * 2 + 1;

            const { x, y } = mouseRef.current;
            cubeRef.current.rotation.x = y * 0.5;
            cubeRef.current.rotation.y = x * 0.5;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}></div>;
}

export default Cube;
