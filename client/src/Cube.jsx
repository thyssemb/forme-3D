import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Brain() {
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

        const brainGeometry = new THREE.SphereGeometry(1, 32, 32);
        const brainMaterial = new THREE.MeshBasicMaterial({ color: 0x8844ff, wireframe: true });
        const brainMesh = new THREE.Mesh(brainGeometry, brainMaterial);
        scene.add(brainMesh);

        // Position de la caméra
        camera.position.z = 5;

        // Fonction d'animation
        const animate = function () {
            requestAnimationFrame(animate);

            brainMesh.rotation.y += 0.01;

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

export default Brain;
