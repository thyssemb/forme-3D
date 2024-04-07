import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Brain() {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const raycasterRef = useRef(new THREE.Raycaster());
    const mouseRef = useRef(new THREE.Vector2());

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

        const handleMouseClick = (event) => {
            const rect = mountRef.current.getBoundingClientRect();
            mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObject(brainMesh);

            if (intersects.length > 0) {
                const intersect = intersects[0];
                const newPosition = intersect.point.clone().multiplyScalar(1.1);
                cameraRef.current.position.lerp(newPosition, 0.3);
                cameraRef.current.lookAt(intersect.point);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleMouseClick);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}></div>;
}

export default Brain;
