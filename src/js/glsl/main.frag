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


uniform bool uEffect1;


// uniform float uDisplacementX;
// uniform float uDisplacementY;


// Helper function to scale UV coordinates
vec2 scaleUV(vec2 uv, float scale) {
    float center = 0.0;
    return ((uv - center) * scale) + ((1.0 - scale) / 2.0);
}


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
    vec4 displacementTexture = texture2D(uDisplacementTexture, scaleUV(rotatedCoord, 0.75));


    // Calculate fade effect based on a different center (uFadeCenterX, uFadeCenterY)
    // vec2 fadeEffectCenter = vec2(uFadeCenterX, uFadeCenterY);

    // bool effect1 = true;

    vec2 fadeEffectCenter;

    if(uEffect1) {
        fadeEffectCenter = vec2(uFadeCenterX, uFadeCenterY);
    } else{
        fadeEffectCenter = vec2(uOffsetX * uFadeCenterX, uOffsetY * uFadeCenterY);
    }

    vec2 displacementMapCoordAdjusted = vUvDisplacementMap - fadeEffectCenter;
    float distanceFromFadeCenter = length(displacementMapCoordAdjusted);
    float edgeFade = smoothstep(uFadeFrom, uFadeTo, distanceFromFadeCenter); // Inverse fade effect


    // Calculate direction factors: 
    // Negative for left and top, positive for right and bottom
    float directionFactorX = (vUvMap.x - 0.5) * 2.0; // Scale to [-1, 1] range for horizontal control
    float directionFactorY = (vUvMap.y - 0.5) * 2.0; // Scale to [-1, 1] range for vertical control

    // Apply the direction factors to displacement force
    float displaceForceX;
    float displaceForceY;
    if(uEffect1) {
        displaceForceX = displacementTexture.r * uOffsetX * uDisplacementCoef * edgeFade * -1.0;
        displaceForceY = displacementTexture.r * uOffsetY * uDisplacementCoef * edgeFade * -1.0;
    } else {
        displaceForceX = displacementTexture.r * 0.1 * uDisplacementCoef * directionFactorX * edgeFade * -1.0;
        displaceForceY = displacementTexture.r * 0.1 * uDisplacementCoef * directionFactorY * edgeFade * -1.0;
    }

    // Adjust uvDisplaced based on the displacement forces
    vec2 uvDisplaced = vec2(vUvMap.x + displaceForceX, vUvMap.y + displaceForceY);

    // Apply displaced texture coordinates
    vec4 displacedTexture = texture2D(uTexture, uvDisplaced);



    // float displaceForceX1 = displacementTexture.r * uOffsetX * uDisplacementCoef * edgeFade * -1.0;
    // float displaceForceY1 = displacementTexture.r * uOffsetY * uDisplacementCoef * edgeFade * -1.0;
    // vec2 uvDisplaced1 = vec2(vUvMap.x - displaceForceX1, vUvMap.y + displaceForceY1);
    // vec4 displacedTexture1 = texture2D(uTexture, uvDisplaced1);
    

    // float displaceForceX1 = displacementTexture.r * 0.1 * uDisplacementCoef * edgeFade * -1.0;
    // float displaceForceY1 = displacementTexture.r * 0.1 * uDisplacementCoef * edgeFade * -1.0;
    // vec2 uvDisplaced1 = vec2(vUvMap.x - displaceForceX1, vUvMap.y + displaceForceY1);
    // vec4 displacedTexture1 = texture2D(uTexture, uvDisplaced1);

    gl_FragColor =  displacedTexture * 1.;
}
