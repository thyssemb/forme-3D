/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: payoman (https://sketchfab.com/payoman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kidney-337f06a149e24f05a9d639b161f8f3e9
Title: Kidney
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {

    const groupRef = useRef();
    const { nodes, materials } = useGLTF('/kidney/scene.gltf');

    if (groupRef.current) {

        groupRef.current.scale.set(0.5, 0.5, 0.5);
    }
  return (
      <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 77.222, 100]}>
              <mesh geometry={nodes['KidneyOutside_Ri��on_0'].geometry} material={materials.Rion}/>
              <mesh geometry={nodes.KidneyOutside_kidneyEdge_0.geometry} material={materials.kidneyEdge}/>
          </group>
          <mesh geometry={nodes.BezierCurve_arterias_0.geometry} material={materials.arterias}
                position={[46.9, -8.665, -2.527]} rotation={[0, 0, -0.525]} scale={[15.101, 22.101, 22.101]}/>
          <mesh geometry={nodes.BezierCurve001_tronco_0.geometry} material={materials.tronco}
                position={[48.512, -20.911, 0.394]} rotation={[0, 0, -0.525]} scale={[20.846, 36.846, 36.846]}/>
          <mesh geometry={nodes.BezierCurve002_venas_0.geometry} material={materials.venas}
                position={[47.225, -8.665, -2.527]} rotation={[0, 0, -0.525]} scale={[5.101, 15.101, 22.101]}/>
          <mesh geometry={nodes.Icosphere_PiramideRenal_0.geometry} material={materials.PiramideRenal}
                position={[45.523, 46.653, -5.489]} rotation={[-Math.PI / 2, 0.849, 0]}
                scale={[21.447, 18.398, 17.179]}/>
      </group>
  )
}

useGLTF.preload('/scene.gltf')
