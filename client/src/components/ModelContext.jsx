import React, { createContext, useContext, useState } from 'react';

const ModelContext = createContext();

export const models = [
    { name: 'T-Shirt', path: '/shirt_baked.glb', geometry: 'T_Shirt_male', material: 'lambert1', x: 1, y: 1, z: 1, position: [0, 0, 0]},
    { name: 'One Shoulder Dress', path: '/one-shoulder_formal_dress.glb', geometry: 'one_shoulder_formal_dressPattern2D_3531541_lambert1_0', material: 'lambert1', x: 0.00063135403218180, y: 0.00063135403218180, z: 0.00063135403218180, position: [0, -100, -500]},
    { name: 'Jeans', path: '/stretchy_jeans_free.glb', geometry: 'defaultMaterial', material:'Jeans', x: 0.4313540321818045, y: 0.4313540321818045, z: 0.4313540321818045, position: [0, -500, -700] },
    { name: 'Sweater', path: '/sweater.glb', geometry: 'Object_4', material: 'WORLD_ZIP_HOODIE', x: 0.0006313540321818045, y: 0.0006313540321818045, z: 0.0006313540321818045, position: [0, -500, -700]},
    { name: 'Shorts', path: '/Shorts.gltf', geometry: 'Cube', material: '', x: 0.2313540321818045, y: 0.2313540321818045, z: 0.2313540321818045, position: [0, -500, -700]},
    // { name: 'Sock', path: '/sock.gltf', geometry: 'Cube_Cube001', material: ''}
  ];


export const useModel = () => {
  return useContext(ModelContext);
};

export const ModelProvider = ({ children }) => {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <ModelContext.Provider value={{ selectedModel, setSelectedModel }}>
      {children}
    </ModelContext.Provider>
  );
};
