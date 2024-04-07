import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
    const groupRef = useRef();
    const { nodes, materials } = useGLTF('/scene.gltf');

    if (groupRef.current) {

        groupRef.current.scale.set(3, 3, 3); // taille
    }

    return (
        <group {...props} ref={groupRef} dispose={null}>
            <mesh geometry={nodes.Brain_Part_01_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
            <mesh geometry={nodes.Brain_Part_02_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
            <mesh geometry={nodes.Brain_Part_03_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
            <mesh geometry={nodes.Brain_Part_04_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
            <mesh geometry={nodes.Brain_Part_05_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
            <mesh geometry={nodes.Brain_Part_06_BRAIN_TEXTURE_blinn2_0.geometry} material={materials.BRAIN_TEXTURE_blinn2} />
        </group>
    );
}

useGLTF.preload('/scene.gltf');
