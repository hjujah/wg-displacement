precision highp float;
uniform float uTime;
uniform float uOffsetX;
uniform float uOffsetY;

// Uniforms for new fade effect center, not affecting rotation
uniform float uFadeCenterX;
uniform float uFadeCenterY;
uniform float uFadeFrom;
uniform float uFadeTo;

varying vec2 vUv;

uniform sampler2D uTexture;
varying vec2 vUvMap;

uniform sampler2D uDisplacementTexture;
varying vec2 vUvDisplacementMap;

uniform float uDisplacementCoef;
uniform float uSpeed;


// uniform float uDisplacementX;
// uniform float uDisplacementY;



void main() {  
    // Calculate rotation without changing the pivot
    float angle = uTime * uSpeed;
    float cosAngle = cos(angle);
    float sinAngle = sin(angle);

    // Original centered coordinates for rotation
    vec2 centeredCoord = vUvDisplacementMap - 0.5; 
    vec2 rotatedCoord;
    rotatedCoord.x = cosAngle * centeredCoord.x - sinAngle * centeredCoord.y;
    rotatedCoord.y = sinAngle * centeredCoord.x + cosAngle * centeredCoord.y;
    rotatedCoord += 0.5; // Rotate around the original center


    // Apply the movement to the rotated coordinates
    // vec2 movedCoord = rotatedCoord + vec2(uOffsetX * 0.01, uOffsetY * 0.01);
    
    // Use movedCoord for sampling the displacement texture instead of rotatedCoord
    vec4 displacementTexture = texture2D(uDisplacementTexture, rotatedCoord);



    // Calculate fade effect based on a different center (uFadeCenterX, uFadeCenterY)
    vec2 fadeEffectCenter = vec2(uFadeCenterX, uFadeCenterY);
    vec2 displacementMapCoordAdjusted = vUvDisplacementMap - fadeEffectCenter;
    float distanceFromFadeCenter = length(displacementMapCoordAdjusted);
    float edgeFade = smoothstep(uFadeFrom, uFadeTo, distanceFromFadeCenter); // Inverse fade effect

    float displaceForceX = displacementTexture.r * uOffsetX * uDisplacementCoef * edgeFade;
    float displaceForceY = displacementTexture.r * uOffsetY * uDisplacementCoef * edgeFade;

    vec2 uvDisplaced = vec2(vUvMap.x - displaceForceX, vUvMap.y + displaceForceY);

    // vec2 movedCoord = uvDisplaced + vec2(uOffsetX * 0.01, uOffsetY * 0.01);

    vec4 displacedTexture = texture2D(uTexture, uvDisplaced);

    gl_FragColor = displacedTexture;
}
