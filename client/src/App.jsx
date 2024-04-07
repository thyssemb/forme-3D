import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Scene from '../public/Scene.jsx';
import './index.css';

function App() {
    return (
        <div>
            <Canvas className="canvas">
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={true} />
                    <ambientLight />
                    <Scene />
                </Suspense>
                <Environment preset="sunset"/>
                <OrbitControls />
            </Canvas>
            <div className="info">
                <h1>brain</h1>
                <p>the brain is a complex organ that controls thought, memory, emotion, touch, motor skills, vision, breathing, temperature,
                    hunger and every process that regulates our body. Together, the brain and spinal cord that extends from it make up the central nervous system, or CNS.</p>
            </div>
        </div>
    );
}

export default App;
