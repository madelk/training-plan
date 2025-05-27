export type lightType = 'red' | 'red-yellow' | 'green' | 'yellow';
const TRAFFIC_LIGHTS: lightType[] = ['red', 'red-yellow', 'green', 'yellow'];
export const defaultLight: lightType = 'red';

export function getNextLight(currentLight?: lightType): lightType {
  if (!currentLight) return defaultLight;
  const currentIndex = TRAFFIC_LIGHTS.indexOf(currentLight);
  return TRAFFIC_LIGHTS[(currentIndex + 1) % TRAFFIC_LIGHTS.length];
}

export function isValidLight(light: unknown): light is lightType {
  return TRAFFIC_LIGHTS.includes(light as lightType);
}
