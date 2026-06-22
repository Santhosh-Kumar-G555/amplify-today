// lib/constants.ts

// Total scroll height for the 5 scenes
export const TOTAL_SCROLL_HEIGHT = 1250; // in vh units

// Each scene's scroll range: [startProgress, endProgress] normalized 0 to 1
export const SCENE_RANGES = {
  scene1: [0.00, 0.20],   // 0% – 20% scroll
  scene2: [0.20, 0.40],   // 20% – 40% scroll
  scene3: [0.40, 0.60],   // 40% – 60% scroll
  scene4: [0.60, 0.80],   // 60% – 80% scroll
  scene5: [0.80, 1.00],   // 80% – 100% scroll
};

// Camera positions at the START of each scene (Three.js coordinates)
export const CAMERA_KEYFRAMES = [
  { position: [2, 3, 8],    target: [0, 0, 0],  fov: 55 },  // Scene 1: close, low angle
  { position: [4, 5, 6],    target: [0, 1, 0],  fov: 50 },  // Scene 2: slight pullback
  { position: [6, 6, 6],    target: [0, 0, 0],  fov: 50 },  // Scene 3: isometric
  { position: [5, 8, 5],    target: [0, 0, 0],  fov: 45 },  // Scene 4: elevated
  { position: [10, 12, 10], target: [0, 0, 0],  fov: 40 },  // Scene 5: wide reveal
];
