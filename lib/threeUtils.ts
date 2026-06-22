// lib/threeUtils.ts
import * as THREE from 'three'

/**
 * Linearly interpolates between two numbers.
 */
export function lerp(a: number, b: number, t: number): number {
  return THREE.MathUtils.lerp(a, b, t)
}

/**
 * Smoothstep easing — feels more cinematic than linear.
 */
export function smoothstep(t: number): number {
  return t * t * (3 - 2 * t)
}

/**
 * Clamps a value between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Normalises a value from the range [min, max] to [0, 1].
 */
export function normalise(value: number, min: number, max: number): number {
  return clamp((value - min) / (max - min), 0, 1)
}

/**
 * Maps a value from [inMin, inMax] to [outMin, outMax].
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
}

/**
 * Lerps a THREE.Color from colorA hex to colorB hex by t.
 */
export function lerpColor(hexA: number, hexB: number, t: number): THREE.Color {
  return new THREE.Color(hexA).lerp(new THREE.Color(hexB), t)
}

/**
 * Generates a random float in [min, max].
 */
export function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

/**
 * Converts world-space THREE.Vector3 to CSS pixel coordinates for HTML overlays.
 */
export function worldToScreen(
  worldPos: THREE.Vector3,
  camera: THREE.Camera,
  width: number,
  height: number
): { x: number; y: number } {
  const projected = worldPos.clone().project(camera)
  return {
    x: ((projected.x + 1) / 2) * width,
    y: ((-projected.y + 1) / 2) * height,
  }
}
