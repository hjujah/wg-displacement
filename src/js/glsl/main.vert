attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

uniform vec2 uvRepeat;
uniform vec2 uvOffset;

uniform vec2 uvDisplacementRepeat;
uniform vec2 uvDisplacementOffset;

varying vec2 vUvMap;

varying vec2 vUvDisplacementMap;


void main() {
  vUv = uv;
  
  vUvMap = uv;
  vUvMap *= uvRepeat;
  vUvMap += uvOffset;

  vUvDisplacementMap = uv;
  vUvDisplacementMap *= uvDisplacementRepeat;
  vUvDisplacementMap += uvDisplacementOffset;

  gl_Position = vec4(position, 0, 1);
}
