import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Scene from "../public/brain/Scene.jsx";
import Kidney from "../public/kidney/Kidney.jsx";
import './index.css';

function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
        </div>
    );
}

function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
        </div>
    );
}

function App() {
    // éléments 3D à afficher dans le carrousel
    const items = [
        {
            key: 'scene',
            scene: <Scene />,
        },
        {
            key: 'kidney',
            scene: <Kidney />,
        },
    ];

    // Configuration du carrousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="container">
            <div className="center">
                <Slider {...settings}>
                    {items.map(item => (
                        <div key={item.key}>
                            <h1>{item.title}</h1>
                            <Canvas className="canvas">
                                <Suspense fallback={null}>
                                    <OrbitControls enableZoom={true} />
                                    <ambientLight />
                                    {item.scene}
                                </Suspense>
                                <Environment preset="sunset"/>
                                <OrbitControls />
                            </Canvas>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default App;
