import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Cube() {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;

        mountRef.current.appendChild(renderer.domElement);
        sceneRef.current = scene;
        cameraRef.current = camera;

        // Load GLB model
        const loader = new GLTFLoader();
        loader.load(
            'thorax_and_abdomen_some_arteries_and_veins.glb', // Utilisez simplement le nom du fichier GLB
            function (gltf) {
                scene.add(gltf.scene);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                console.error('An error happened', error);
            }
        );

        // Position de la caméra
        camera.position.z = 5;

        // Fonction d'animation
        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}></div>;
}

export default Cube;
