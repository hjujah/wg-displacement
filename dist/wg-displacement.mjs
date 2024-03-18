var gt = Object.defineProperty;
var pt = (e, t, i) => t in e ? gt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var z = (e, t, i) => (pt(e, typeof t != "symbol" ? t + "" : t, i), i);
import I from "gsap";
function G(e) {
  let t = e[0], i = e[1], s = e[2];
  return Math.sqrt(t * t + i * i + s * s);
}
function q(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
}
function mt(e, t, i, s) {
  return e[0] = t, e[1] = i, e[2] = s, e;
}
function W(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e[2] = t[2] + i[2], e;
}
function k(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e[2] = t[2] - i[2], e;
}
function xt(e, t, i) {
  return e[0] = t[0] * i[0], e[1] = t[1] * i[1], e[2] = t[2] * i[2], e;
}
function yt(e, t, i) {
  return e[0] = t[0] / i[0], e[1] = t[1] / i[1], e[2] = t[2] / i[2], e;
}
function N(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e;
}
function Mt(e, t) {
  let i = t[0] - e[0], s = t[1] - e[1], r = t[2] - e[2];
  return Math.sqrt(i * i + s * s + r * r);
}
function Et(e, t) {
  let i = t[0] - e[0], s = t[1] - e[1], r = t[2] - e[2];
  return i * i + s * s + r * r;
}
function j(e) {
  let t = e[0], i = e[1], s = e[2];
  return t * t + i * i + s * s;
}
function At(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
}
function wt(e, t) {
  return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
}
function V(e, t) {
  let i = t[0], s = t[1], r = t[2], n = i * i + s * s + r * r;
  return n > 0 && (n = 1 / Math.sqrt(n)), e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function ot(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Z(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[0], a = i[1], l = i[2];
  return e[0] = r * l - n * a, e[1] = n * h - s * l, e[2] = s * a - r * h, e;
}
function vt(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2];
  return e[0] = r + s * (i[0] - r), e[1] = n + s * (i[1] - n), e[2] = h + s * (i[2] - h), e;
}
function bt(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[3] * s + i[7] * r + i[11] * n + i[15];
  return h = h || 1, e[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / h, e[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / h, e[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / h, e;
}
function _t(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[3] * s + i[7] * r + i[11] * n + i[15];
  return h = h || 1, e[0] = (i[0] * s + i[4] * r + i[8] * n) / h, e[1] = (i[1] * s + i[5] * r + i[9] * n) / h, e[2] = (i[2] * s + i[6] * r + i[10] * n) / h, e;
}
function Tt(e, t, i) {
  let s = t[0], r = t[1], n = t[2];
  return e[0] = s * i[0] + r * i[3] + n * i[6], e[1] = s * i[1] + r * i[4] + n * i[7], e[2] = s * i[2] + r * i[5] + n * i[8], e;
}
function Ft(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[0], a = i[1], l = i[2], f = i[3], d = a * n - l * r, o = l * s - h * n, c = h * r - a * s, u = a * c - l * o, g = l * d - h * c, m = h * o - a * d, p = f * 2;
  return d *= p, o *= p, c *= p, u *= 2, g *= 2, m *= 2, e[0] = s + d + u, e[1] = r + o + g, e[2] = n + c + m, e;
}
const St = function() {
  const e = [0, 0, 0], t = [0, 0, 0];
  return function(i, s) {
    q(e, i), q(t, s), V(e, e), V(t, t);
    let r = ot(e, t);
    return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r);
  };
}();
function Ct(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
}
class O extends Array {
  constructor(t = 0, i = t, s = t) {
    return super(t, i, s), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(t) {
    this[0] = t;
  }
  set y(t) {
    this[1] = t;
  }
  set z(t) {
    this[2] = t;
  }
  set(t, i = t, s = t) {
    return t.length ? this.copy(t) : (mt(this, t, i, s), this);
  }
  copy(t) {
    return q(this, t), this;
  }
  add(t, i) {
    return i ? W(this, t, i) : W(this, this, t), this;
  }
  sub(t, i) {
    return i ? k(this, t, i) : k(this, this, t), this;
  }
  multiply(t) {
    return t.length ? xt(this, this, t) : N(this, this, t), this;
  }
  divide(t) {
    return t.length ? yt(this, this, t) : N(this, this, 1 / t), this;
  }
  inverse(t = this) {
    return wt(this, t), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return G(this);
  }
  distance(t) {
    return t ? Mt(this, t) : G(this);
  }
  squaredLen() {
    return j(this);
  }
  squaredDistance(t) {
    return t ? Et(this, t) : j(this);
  }
  negate(t = this) {
    return At(this, t), this;
  }
  cross(t, i) {
    return i ? Z(this, t, i) : Z(this, this, t), this;
  }
  scale(t) {
    return N(this, this, t), this;
  }
  normalize() {
    return V(this, this), this;
  }
  dot(t) {
    return ot(this, t);
  }
  equals(t) {
    return Ct(this, t);
  }
  applyMatrix3(t) {
    return Tt(this, this, t), this;
  }
  applyMatrix4(t) {
    return bt(this, this, t), this;
  }
  scaleRotateMatrix4(t) {
    return _t(this, this, t), this;
  }
  applyQuaternion(t) {
    return Ft(this, this, t), this;
  }
  angle(t) {
    return St(this, t);
  }
  lerp(t, i) {
    return vt(this, this, t, i), this;
  }
  clone() {
    return new O(this[0], this[1], this[2]);
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this[2] = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t;
  }
  transformDirection(t) {
    const i = this[0], s = this[1], r = this[2];
    return this[0] = t[0] * i + t[4] * s + t[8] * r, this[1] = t[1] * i + t[5] * s + t[9] * r, this[2] = t[2] * i + t[6] * s + t[10] * r, this.normalize();
  }
}
const H = new O();
let Rt = 1, zt = 1, Q = !1;
class Ot {
  constructor(t, i = {}) {
    t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = i, this.id = Rt++, this.VAOs = {}, this.drawRange = { start: 0, count: 0 }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
    for (let s in i)
      this.addAttribute(s, i[s]);
  }
  addAttribute(t, i) {
    if (this.attributes[t] = i, i.id = zt++, i.size = i.size || 1, i.type = i.type || (i.data.constructor === Float32Array ? this.gl.FLOAT : i.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), i.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, i.normalized = i.normalized || !1, i.stride = i.stride || 0, i.offset = i.offset || 0, i.count = i.count || (i.stride ? i.data.byteLength / i.stride : i.data.length / i.size), i.divisor = i.instanced || 0, i.needsUpdate = !1, i.usage = i.usage || this.gl.STATIC_DRAW, i.buffer || this.updateAttribute(i), i.divisor) {
      if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== i.count * i.divisor)
        return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, i.count * i.divisor);
      this.instancedCount = i.count * i.divisor;
    } else
      t === "index" ? this.drawRange.count = i.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, i.count));
  }
  updateAttribute(t) {
    const i = !t.buffer;
    i && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), i ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1;
  }
  setIndex(t) {
    this.addAttribute("index", t);
  }
  setDrawRange(t, i) {
    this.drawRange.start = t, this.drawRange.count = i;
  }
  setInstancedCount(t) {
    this.instancedCount = t;
  }
  createVAO(t) {
    this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t);
  }
  bindAttributes(t) {
    t.attributeLocations.forEach((i, { name: s, type: r }) => {
      if (!this.attributes[s]) {
        console.warn(`active attribute ${s} not being supplied`);
        return;
      }
      const n = this.attributes[s];
      this.gl.bindBuffer(n.target, n.buffer), this.glState.boundBuffer = n.buffer;
      let h = 1;
      r === 35674 && (h = 2), r === 35675 && (h = 3), r === 35676 && (h = 4);
      const a = n.size / h, l = h === 1 ? 0 : h * h * h, f = h === 1 ? 0 : h * h;
      for (let d = 0; d < h; d++)
        this.gl.vertexAttribPointer(i + d, a, n.type, n.normalized, n.stride + l, n.offset + d * f), this.gl.enableVertexAttribArray(i + d), this.gl.renderer.vertexAttribDivisor(i + d, n.divisor);
    }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({ program: t, mode: i = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((s, { name: r }) => {
      const n = this.attributes[r];
      n.needsUpdate && this.updateAttribute(n);
    }), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(
      i,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * 2,
      this.instancedCount
    ) : this.gl.renderer.drawArraysInstanced(i, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(i, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2) : this.gl.drawArrays(i, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const t = this.attributes.position;
    if (t.data)
      return t;
    if (!Q)
      return console.warn("No position buffer data found to compute bounds"), Q = !0;
  }
  computeBoundingBox(t) {
    t || (t = this.getPosition());
    const i = t.data, s = t.stride ? t.stride / i.BYTES_PER_ELEMENT : t.size;
    this.bounds || (this.bounds = {
      min: new O(),
      max: new O(),
      center: new O(),
      scale: new O(),
      radius: 1 / 0
    });
    const r = this.bounds.min, n = this.bounds.max, h = this.bounds.center, a = this.bounds.scale;
    r.set(1 / 0), n.set(-1 / 0);
    for (let l = 0, f = i.length; l < f; l += s) {
      const d = i[l], o = i[l + 1], c = i[l + 2];
      r.x = Math.min(d, r.x), r.y = Math.min(o, r.y), r.z = Math.min(c, r.z), n.x = Math.max(d, n.x), n.y = Math.max(o, n.y), n.z = Math.max(c, n.z);
    }
    a.sub(n, r), h.add(r, n).divide(2);
  }
  computeBoundingSphere(t) {
    t || (t = this.getPosition());
    const i = t.data, s = t.stride ? t.stride / i.BYTES_PER_ELEMENT : t.size;
    this.bounds || this.computeBoundingBox(t);
    let r = 0;
    for (let n = 0, h = i.length; n < h; n += s)
      H.fromArray(i, n), r = Math.max(r, this.bounds.center.squaredDistance(H));
    this.bounds.radius = Math.sqrt(r);
  }
  remove() {
    for (let t in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
    for (let t in this.attributes)
      this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t];
  }
}
let Lt = 1;
const K = {};
class Dt {
  constructor(t, {
    vertex: i,
    fragment: s,
    uniforms: r = {},
    transparent: n = !1,
    cullFace: h = t.BACK,
    frontFace: a = t.CCW,
    depthTest: l = !0,
    depthWrite: f = !0,
    depthFunc: d = t.LESS
  } = {}) {
    t.canvas || console.error("gl not passed as first argument to Program"), this.gl = t, this.uniforms = r, this.id = Lt++, i || console.warn("vertex shader not supplied"), s || console.warn("fragment shader not supplied"), this.transparent = n, this.cullFace = h, this.frontFace = a, this.depthTest = l, this.depthWrite = f, this.depthFunc = d, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
    const o = t.createShader(t.VERTEX_SHADER);
    t.shaderSource(o, i), t.compileShader(o), t.getShaderInfoLog(o) !== "" && console.warn(`${t.getShaderInfoLog(o)}
Vertex Shader
${J(i)}`);
    const c = t.createShader(t.FRAGMENT_SHADER);
    if (t.shaderSource(c, s), t.compileShader(c), t.getShaderInfoLog(c) !== "" && console.warn(`${t.getShaderInfoLog(c)}
Fragment Shader
${J(s)}`), this.program = t.createProgram(), t.attachShader(this.program, o), t.attachShader(this.program, c), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS))
      return console.warn(t.getProgramInfoLog(this.program));
    t.deleteShader(o), t.deleteShader(c), this.uniformLocations = /* @__PURE__ */ new Map();
    let u = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
    for (let p = 0; p < u; p++) {
      let x = t.getActiveUniform(this.program, p);
      this.uniformLocations.set(x, t.getUniformLocation(this.program, x.name));
      const E = x.name.match(/(\w+)/g);
      x.uniformName = E[0], E.length === 3 ? (x.isStructArray = !0, x.structIndex = Number(E[1]), x.structProperty = E[2]) : E.length === 2 && isNaN(Number(E[1])) && (x.isStruct = !0, x.structProperty = E[1]);
    }
    this.attributeLocations = /* @__PURE__ */ new Map();
    const g = [], m = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
    for (let p = 0; p < m; p++) {
      const x = t.getActiveAttrib(this.program, p), E = t.getAttribLocation(this.program, x.name);
      E !== -1 && (g[E] = x.name, this.attributeLocations.set(x, E));
    }
    this.attributeOrder = g.join("");
  }
  setBlendFunc(t, i, s, r) {
    this.blendFunc.src = t, this.blendFunc.dst = i, this.blendFunc.srcAlpha = s, this.blendFunc.dstAlpha = r, t && (this.transparent = !0);
  }
  setBlendEquation(t, i) {
    this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = i;
  }
  applyState() {
    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }
  use({ flipFaces: t = !1 } = {}) {
    let i = -1;
    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((r, n) => {
      let h = n.uniformName, a = this.uniforms[h];
      if (n.isStruct && (a = a[n.structProperty], h += `.${n.structProperty}`), n.isStructArray && (a = a[n.structIndex][n.structProperty], h += `[${n.structIndex}].${n.structProperty}`), !a)
        return tt(`Active uniform ${h} has not been supplied`);
      if (a && a.value === void 0)
        return tt(`${h} uniform is missing a value parameter`);
      if (a.value.texture)
        return i = i + 1, a.value.update(i), B(this.gl, n.type, r, i);
      if (a.value.length && a.value[0].texture) {
        const l = [];
        return a.value.forEach((f) => {
          i = i + 1, f.update(i), l.push(i);
        }), B(this.gl, n.type, r, l);
      }
      B(this.gl, n.type, r, a.value);
    }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function B(e, t, i, s) {
  s = s.length ? It(s) : s;
  const r = e.renderer.state.uniformLocations.get(i);
  if (s.length)
    if (r === void 0 || r.length !== s.length)
      e.renderer.state.uniformLocations.set(i, s.slice(0));
    else {
      if (Ut(r, s))
        return;
      r.set ? r.set(s) : Pt(r, s), e.renderer.state.uniformLocations.set(i, r);
    }
  else {
    if (r === s)
      return;
    e.renderer.state.uniformLocations.set(i, s);
  }
  switch (t) {
    case 5126:
      return s.length ? e.uniform1fv(i, s) : e.uniform1f(i, s);
    case 35664:
      return e.uniform2fv(i, s);
    case 35665:
      return e.uniform3fv(i, s);
    case 35666:
      return e.uniform4fv(i, s);
    case 35670:
    case 5124:
    case 35678:
    case 35680:
      return s.length ? e.uniform1iv(i, s) : e.uniform1i(i, s);
    case 35671:
    case 35667:
      return e.uniform2iv(i, s);
    case 35672:
    case 35668:
      return e.uniform3iv(i, s);
    case 35673:
    case 35669:
      return e.uniform4iv(i, s);
    case 35674:
      return e.uniformMatrix2fv(i, !1, s);
    case 35675:
      return e.uniformMatrix3fv(i, !1, s);
    case 35676:
      return e.uniformMatrix4fv(i, !1, s);
  }
}
function J(e) {
  let t = e.split(`
`);
  for (let i = 0; i < t.length; i++)
    t[i] = i + 1 + ": " + t[i];
  return t.join(`
`);
}
function It(e) {
  const t = e.length, i = e[0].length;
  if (i === void 0)
    return e;
  const s = t * i;
  let r = K[s];
  r || (K[s] = r = new Float32Array(s));
  for (let n = 0; n < t; n++)
    r.set(e[n], n * i);
  return r;
}
function Ut(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let i = 0, s = e.length; i < s; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
function Pt(e, t) {
  for (let i = 0, s = e.length; i < s; i++)
    e[i] = t[i];
}
let $ = 0;
function tt(e) {
  $ > 100 || (console.warn(e), $++, $ > 100 && console.warn("More than 100 program warnings - stopping logs."));
}
const X = new O();
let Nt = 1;
class Bt {
  constructor({
    canvas: t = document.createElement("canvas"),
    width: i = 300,
    height: s = 150,
    dpr: r = 1,
    alpha: n = !1,
    depth: h = !0,
    stencil: a = !1,
    antialias: l = !1,
    premultipliedAlpha: f = !1,
    preserveDrawingBuffer: d = !1,
    powerPreference: o = "default",
    autoClear: c = !0,
    webgl: u = 2
  } = {}) {
    const g = { alpha: n, depth: h, stencil: a, antialias: l, premultipliedAlpha: f, preserveDrawingBuffer: d, powerPreference: o };
    this.dpr = r, this.alpha = n, this.color = !0, this.depth = h, this.stencil = a, this.premultipliedAlpha = f, this.autoClear = c, this.id = Nt++, u === 2 && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(i, s), this.state = {}, this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }, this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = { x: 0, y: 0, width: null, height: null }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = /* @__PURE__ */ new Map(), this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(t, i) {
    this.width = t, this.height = i, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = i * this.dpr, Object.assign(this.gl.canvas.style, {
      width: t + "px",
      height: i + "px"
    });
  }
  setViewport(t, i, s = 0, r = 0) {
    this.state.viewport.width === t && this.state.viewport.height === i || (this.state.viewport.width = t, this.state.viewport.height = i, this.state.viewport.x = s, this.state.viewport.y = r, this.gl.viewport(s, r, t, i));
  }
  setScissor(t, i, s = 0, r = 0) {
    this.gl.scissor(s, r, t, i);
  }
  enable(t) {
    this.state[t] !== !0 && (this.gl.enable(t), this.state[t] = !0);
  }
  disable(t) {
    this.state[t] !== !1 && (this.gl.disable(t), this.state[t] = !1);
  }
  setBlendFunc(t, i, s, r) {
    this.state.blendFunc.src === t && this.state.blendFunc.dst === i && this.state.blendFunc.srcAlpha === s && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t, this.state.blendFunc.dst = i, this.state.blendFunc.srcAlpha = s, this.state.blendFunc.dstAlpha = r, s !== void 0 ? this.gl.blendFuncSeparate(t, i, s, r) : this.gl.blendFunc(t, i));
  }
  setBlendEquation(t, i) {
    t = t || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === i) && (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = i, i !== void 0 ? this.gl.blendEquationSeparate(t, i) : this.gl.blendEquation(t));
  }
  setCullFace(t) {
    this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t));
  }
  setFrontFace(t) {
    this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t));
  }
  setDepthMask(t) {
    this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t));
  }
  setDepthFunc(t) {
    this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t));
  }
  activeTexture(t) {
    this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t));
  }
  bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: i = null } = {}) {
    this.state.framebuffer !== i && (this.state.framebuffer = i, this.gl.bindFramebuffer(t, i));
  }
  getExtension(t, i, s) {
    return i && this.gl[i] ? this.gl[i].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), i ? this.extensions[t] ? this.extensions[t][s].bind(this.extensions[t]) : null : this.extensions[t]);
  }
  sortOpaque(t, i) {
    return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.program.id !== i.program.id ? t.program.id - i.program.id : t.zDepth !== i.zDepth ? t.zDepth - i.zDepth : i.id - t.id;
  }
  sortTransparent(t, i) {
    return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.zDepth !== i.zDepth ? i.zDepth - t.zDepth : i.id - t.id;
  }
  sortUI(t, i) {
    return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.program.id !== i.program.id ? t.program.id - i.program.id : i.id - t.id;
  }
  getRenderList({ scene: t, camera: i, frustumCull: s, sort: r }) {
    let n = [];
    if (i && s && i.updateFrustum(), t.traverse((h) => {
      if (!h.visible)
        return !0;
      h.draw && (s && h.frustumCulled && i && !i.frustumIntersectsMesh(h) || n.push(h));
    }), r) {
      const h = [], a = [], l = [];
      n.forEach((f) => {
        f.program.transparent ? f.program.depthTest ? a.push(f) : l.push(f) : h.push(f), f.zDepth = 0, !(f.renderOrder !== 0 || !f.program.depthTest || !i) && (f.worldMatrix.getTranslation(X), X.applyMatrix4(i.projectionViewMatrix), f.zDepth = X.z);
      }), h.sort(this.sortOpaque), a.sort(this.sortTransparent), l.sort(this.sortUI), n = h.concat(a, l);
    }
    return n;
  }
  render({ scene: t, camera: i, target: s = null, update: r = !0, sort: n = !0, frustumCull: h = !0, clear: a }) {
    s === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(s), this.setViewport(s.width, s.height)), (a || this.autoClear && a !== !1) && (this.depth && (!s || s.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear(
      (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
    )), r && t.updateMatrixWorld(), i && i.updateMatrixWorld(), this.getRenderList({ scene: t, camera: i, frustumCull: h, sort: n }).forEach((f) => {
      f.draw({ camera: i });
    });
  }
}
function $t(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
function Xt(e, t, i, s, r) {
  return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e;
}
function Yt(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i * i + s * s + r * r + n * n;
  return h > 0 && (h = 1 / Math.sqrt(h)), e[0] = i * h, e[1] = s * h, e[2] = r * h, e[3] = n * h, e;
}
function qt(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Vt(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
}
function Gt(e, t, i) {
  i = i * 0.5;
  let s = Math.sin(i);
  return e[0] = s * t[0], e[1] = s * t[1], e[2] = s * t[2], e[3] = Math.cos(i), e;
}
function et(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], a = i[0], l = i[1], f = i[2], d = i[3];
  return e[0] = s * d + h * a + r * f - n * l, e[1] = r * d + h * l + n * a - s * f, e[2] = n * d + h * f + s * l - r * a, e[3] = h * d - s * a - r * l - n * f, e;
}
function Wt(e, t, i) {
  i *= 0.5;
  let s = t[0], r = t[1], n = t[2], h = t[3], a = Math.sin(i), l = Math.cos(i);
  return e[0] = s * l + h * a, e[1] = r * l + n * a, e[2] = n * l - r * a, e[3] = h * l - s * a, e;
}
function kt(e, t, i) {
  i *= 0.5;
  let s = t[0], r = t[1], n = t[2], h = t[3], a = Math.sin(i), l = Math.cos(i);
  return e[0] = s * l - n * a, e[1] = r * l + h * a, e[2] = n * l + s * a, e[3] = h * l - r * a, e;
}
function jt(e, t, i) {
  i *= 0.5;
  let s = t[0], r = t[1], n = t[2], h = t[3], a = Math.sin(i), l = Math.cos(i);
  return e[0] = s * l + r * a, e[1] = r * l - s * a, e[2] = n * l + h * a, e[3] = h * l - n * a, e;
}
function Zt(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2], a = t[3], l = i[0], f = i[1], d = i[2], o = i[3], c, u, g, m, p;
  return u = r * l + n * f + h * d + a * o, u < 0 && (u = -u, l = -l, f = -f, d = -d, o = -o), 1 - u > 1e-6 ? (c = Math.acos(u), g = Math.sin(c), m = Math.sin((1 - s) * c) / g, p = Math.sin(s * c) / g) : (m = 1 - s, p = s), e[0] = m * r + p * l, e[1] = m * n + p * f, e[2] = m * h + p * d, e[3] = m * a + p * o, e;
}
function Ht(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i * i + s * s + r * r + n * n, a = h ? 1 / h : 0;
  return e[0] = -i * a, e[1] = -s * a, e[2] = -r * a, e[3] = n * a, e;
}
function Qt(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e;
}
function Kt(e, t) {
  let i = t[0] + t[4] + t[8], s;
  if (i > 0)
    s = Math.sqrt(i + 1), e[3] = 0.5 * s, s = 0.5 / s, e[0] = (t[5] - t[7]) * s, e[1] = (t[6] - t[2]) * s, e[2] = (t[1] - t[3]) * s;
  else {
    let r = 0;
    t[4] > t[0] && (r = 1), t[8] > t[r * 3 + r] && (r = 2);
    let n = (r + 1) % 3, h = (r + 2) % 3;
    s = Math.sqrt(t[r * 3 + r] - t[n * 3 + n] - t[h * 3 + h] + 1), e[r] = 0.5 * s, s = 0.5 / s, e[3] = (t[n * 3 + h] - t[h * 3 + n]) * s, e[n] = (t[n * 3 + r] + t[r * 3 + n]) * s, e[h] = (t[h * 3 + r] + t[r * 3 + h]) * s;
  }
  return e;
}
function Jt(e, t, i = "YXZ") {
  let s = Math.sin(t[0] * 0.5), r = Math.cos(t[0] * 0.5), n = Math.sin(t[1] * 0.5), h = Math.cos(t[1] * 0.5), a = Math.sin(t[2] * 0.5), l = Math.cos(t[2] * 0.5);
  return i === "XYZ" ? (e[0] = s * h * l + r * n * a, e[1] = r * n * l - s * h * a, e[2] = r * h * a + s * n * l, e[3] = r * h * l - s * n * a) : i === "YXZ" ? (e[0] = s * h * l + r * n * a, e[1] = r * n * l - s * h * a, e[2] = r * h * a - s * n * l, e[3] = r * h * l + s * n * a) : i === "ZXY" ? (e[0] = s * h * l - r * n * a, e[1] = r * n * l + s * h * a, e[2] = r * h * a + s * n * l, e[3] = r * h * l - s * n * a) : i === "ZYX" ? (e[0] = s * h * l - r * n * a, e[1] = r * n * l + s * h * a, e[2] = r * h * a - s * n * l, e[3] = r * h * l + s * n * a) : i === "YZX" ? (e[0] = s * h * l + r * n * a, e[1] = r * n * l + s * h * a, e[2] = r * h * a - s * n * l, e[3] = r * h * l - s * n * a) : i === "XZY" && (e[0] = s * h * l - r * n * a, e[1] = r * n * l - s * h * a, e[2] = r * h * a + s * n * l, e[3] = r * h * l + s * n * a), e;
}
const te = $t, ee = Xt, ie = qt, se = Yt;
class re extends Array {
  constructor(t = 0, i = 0, s = 0, r = 1) {
    return super(t, i, s, r), this.onChange = () => {
    }, this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(t) {
    this[0] = t, this.onChange();
  }
  set y(t) {
    this[1] = t, this.onChange();
  }
  set z(t) {
    this[2] = t, this.onChange();
  }
  set w(t) {
    this[3] = t, this.onChange();
  }
  identity() {
    return Vt(this), this.onChange(), this;
  }
  set(t, i, s, r) {
    return t.length ? this.copy(t) : (ee(this, t, i, s, r), this.onChange(), this);
  }
  rotateX(t) {
    return Wt(this, this, t), this.onChange(), this;
  }
  rotateY(t) {
    return kt(this, this, t), this.onChange(), this;
  }
  rotateZ(t) {
    return jt(this, this, t), this.onChange(), this;
  }
  inverse(t = this) {
    return Ht(this, t), this.onChange(), this;
  }
  conjugate(t = this) {
    return Qt(this, t), this.onChange(), this;
  }
  copy(t) {
    return te(this, t), this.onChange(), this;
  }
  normalize(t = this) {
    return se(this, t), this.onChange(), this;
  }
  multiply(t, i) {
    return i ? et(this, t, i) : et(this, this, t), this.onChange(), this;
  }
  dot(t) {
    return ie(this, t);
  }
  fromMatrix3(t) {
    return Kt(this, t), this.onChange(), this;
  }
  fromEuler(t) {
    return Jt(this, t, t.order), this;
  }
  fromAxisAngle(t, i) {
    return Gt(this, t, i), this.onChange(), this;
  }
  slerp(t, i) {
    return Zt(this, this, t, i), this.onChange(), this;
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this[2] = t[i + 2], this[3] = t[i + 3], this.onChange(), this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t[i + 3] = this[3], t;
  }
}
const ne = 1e-6;
function he(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function ae(e, t, i, s, r, n, h, a, l, f, d, o, c, u, g, m, p) {
  return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e[4] = n, e[5] = h, e[6] = a, e[7] = l, e[8] = f, e[9] = d, e[10] = o, e[11] = c, e[12] = u, e[13] = g, e[14] = m, e[15] = p, e;
}
function le(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function fe(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = t[4], a = t[5], l = t[6], f = t[7], d = t[8], o = t[9], c = t[10], u = t[11], g = t[12], m = t[13], p = t[14], x = t[15], E = i * a - s * h, M = i * l - r * h, y = i * f - n * h, w = s * l - r * a, A = s * f - n * a, T = r * f - n * l, F = d * m - o * g, S = d * p - c * g, b = d * x - u * g, C = o * p - c * m, _ = o * x - u * m, R = c * x - u * p, v = E * R - M * _ + y * C + w * b - A * S + T * F;
  return v ? (v = 1 / v, e[0] = (a * R - l * _ + f * C) * v, e[1] = (r * _ - s * R - n * C) * v, e[2] = (m * T - p * A + x * w) * v, e[3] = (c * A - o * T - u * w) * v, e[4] = (l * b - h * R - f * S) * v, e[5] = (i * R - r * b + n * S) * v, e[6] = (p * y - g * T - x * M) * v, e[7] = (d * T - c * y + u * M) * v, e[8] = (h * _ - a * b + f * F) * v, e[9] = (s * b - i * _ - n * F) * v, e[10] = (g * A - m * y + x * E) * v, e[11] = (o * y - d * A - u * E) * v, e[12] = (a * S - h * C - l * F) * v, e[13] = (i * C - s * S + r * F) * v, e[14] = (m * M - g * w - p * E) * v, e[15] = (d * w - o * M + c * E) * v, e) : null;
}
function de(e) {
  let t = e[0], i = e[1], s = e[2], r = e[3], n = e[4], h = e[5], a = e[6], l = e[7], f = e[8], d = e[9], o = e[10], c = e[11], u = e[12], g = e[13], m = e[14], p = e[15], x = t * h - i * n, E = t * a - s * n, M = t * l - r * n, y = i * a - s * h, w = i * l - r * h, A = s * l - r * a, T = f * g - d * u, F = f * m - o * u, S = f * p - c * u, b = d * m - o * g, C = d * p - c * g, _ = o * p - c * m;
  return x * _ - E * C + M * b + y * S - w * F + A * T;
}
function it(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], a = t[4], l = t[5], f = t[6], d = t[7], o = t[8], c = t[9], u = t[10], g = t[11], m = t[12], p = t[13], x = t[14], E = t[15], M = i[0], y = i[1], w = i[2], A = i[3];
  return e[0] = M * s + y * a + w * o + A * m, e[1] = M * r + y * l + w * c + A * p, e[2] = M * n + y * f + w * u + A * x, e[3] = M * h + y * d + w * g + A * E, M = i[4], y = i[5], w = i[6], A = i[7], e[4] = M * s + y * a + w * o + A * m, e[5] = M * r + y * l + w * c + A * p, e[6] = M * n + y * f + w * u + A * x, e[7] = M * h + y * d + w * g + A * E, M = i[8], y = i[9], w = i[10], A = i[11], e[8] = M * s + y * a + w * o + A * m, e[9] = M * r + y * l + w * c + A * p, e[10] = M * n + y * f + w * u + A * x, e[11] = M * h + y * d + w * g + A * E, M = i[12], y = i[13], w = i[14], A = i[15], e[12] = M * s + y * a + w * o + A * m, e[13] = M * r + y * l + w * c + A * p, e[14] = M * n + y * f + w * u + A * x, e[15] = M * h + y * d + w * g + A * E, e;
}
function ce(e, t, i) {
  let s = i[0], r = i[1], n = i[2], h, a, l, f, d, o, c, u, g, m, p, x;
  return t === e ? (e[12] = t[0] * s + t[4] * r + t[8] * n + t[12], e[13] = t[1] * s + t[5] * r + t[9] * n + t[13], e[14] = t[2] * s + t[6] * r + t[10] * n + t[14], e[15] = t[3] * s + t[7] * r + t[11] * n + t[15]) : (h = t[0], a = t[1], l = t[2], f = t[3], d = t[4], o = t[5], c = t[6], u = t[7], g = t[8], m = t[9], p = t[10], x = t[11], e[0] = h, e[1] = a, e[2] = l, e[3] = f, e[4] = d, e[5] = o, e[6] = c, e[7] = u, e[8] = g, e[9] = m, e[10] = p, e[11] = x, e[12] = h * s + d * r + g * n + t[12], e[13] = a * s + o * r + m * n + t[13], e[14] = l * s + c * r + p * n + t[14], e[15] = f * s + u * r + x * n + t[15]), e;
}
function oe(e, t, i) {
  let s = i[0], r = i[1], n = i[2];
  return e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e[3] = t[3] * s, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function ue(e, t, i, s) {
  let r = s[0], n = s[1], h = s[2], a = Math.hypot(r, n, h), l, f, d, o, c, u, g, m, p, x, E, M, y, w, A, T, F, S, b, C, _, R, v, L;
  return Math.abs(a) < ne ? null : (a = 1 / a, r *= a, n *= a, h *= a, l = Math.sin(i), f = Math.cos(i), d = 1 - f, o = t[0], c = t[1], u = t[2], g = t[3], m = t[4], p = t[5], x = t[6], E = t[7], M = t[8], y = t[9], w = t[10], A = t[11], T = r * r * d + f, F = n * r * d + h * l, S = h * r * d - n * l, b = r * n * d - h * l, C = n * n * d + f, _ = h * n * d + r * l, R = r * h * d + n * l, v = n * h * d - r * l, L = h * h * d + f, e[0] = o * T + m * F + M * S, e[1] = c * T + p * F + y * S, e[2] = u * T + x * F + w * S, e[3] = g * T + E * F + A * S, e[4] = o * b + m * C + M * _, e[5] = c * b + p * C + y * _, e[6] = u * b + x * C + w * _, e[7] = g * b + E * C + A * _, e[8] = o * R + m * v + M * L, e[9] = c * R + p * v + y * L, e[10] = u * R + x * v + w * L, e[11] = g * R + E * v + A * L, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function ge(e, t) {
  return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
}
function ut(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[4], h = t[5], a = t[6], l = t[8], f = t[9], d = t[10];
  return e[0] = Math.hypot(i, s, r), e[1] = Math.hypot(n, h, a), e[2] = Math.hypot(l, f, d), e;
}
function pe(e) {
  let t = e[0], i = e[1], s = e[2], r = e[4], n = e[5], h = e[6], a = e[8], l = e[9], f = e[10];
  const d = t * t + i * i + s * s, o = r * r + n * n + h * h, c = a * a + l * l + f * f;
  return Math.sqrt(Math.max(d, o, c));
}
const me = function() {
  const e = [0, 0, 0];
  return function(t, i) {
    let s = e;
    ut(s, i);
    let r = 1 / s[0], n = 1 / s[1], h = 1 / s[2], a = i[0] * r, l = i[1] * n, f = i[2] * h, d = i[4] * r, o = i[5] * n, c = i[6] * h, u = i[8] * r, g = i[9] * n, m = i[10] * h, p = a + o + m, x = 0;
    return p > 0 ? (x = Math.sqrt(p + 1) * 2, t[3] = 0.25 * x, t[0] = (c - g) / x, t[1] = (u - f) / x, t[2] = (l - d) / x) : a > o && a > m ? (x = Math.sqrt(1 + a - o - m) * 2, t[3] = (c - g) / x, t[0] = 0.25 * x, t[1] = (l + d) / x, t[2] = (u + f) / x) : o > m ? (x = Math.sqrt(1 + o - a - m) * 2, t[3] = (u - f) / x, t[0] = (l + d) / x, t[1] = 0.25 * x, t[2] = (c + g) / x) : (x = Math.sqrt(1 + m - a - o) * 2, t[3] = (l - d) / x, t[0] = (u + f) / x, t[1] = (c + g) / x, t[2] = 0.25 * x), t;
  };
}();
function xe(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2], a = t[3], l = r + r, f = n + n, d = h + h, o = r * l, c = r * f, u = r * d, g = n * f, m = n * d, p = h * d, x = a * l, E = a * f, M = a * d, y = s[0], w = s[1], A = s[2];
  return e[0] = (1 - (g + p)) * y, e[1] = (c + M) * y, e[2] = (u - E) * y, e[3] = 0, e[4] = (c - M) * w, e[5] = (1 - (o + p)) * w, e[6] = (m + x) * w, e[7] = 0, e[8] = (u + E) * A, e[9] = (m - x) * A, e[10] = (1 - (o + g)) * A, e[11] = 0, e[12] = i[0], e[13] = i[1], e[14] = i[2], e[15] = 1, e;
}
function ye(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i + i, a = s + s, l = r + r, f = i * h, d = s * h, o = s * a, c = r * h, u = r * a, g = r * l, m = n * h, p = n * a, x = n * l;
  return e[0] = 1 - o - g, e[1] = d + x, e[2] = c - p, e[3] = 0, e[4] = d - x, e[5] = 1 - f - g, e[6] = u + m, e[7] = 0, e[8] = c + p, e[9] = u - m, e[10] = 1 - f - o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Me(e, t, i, s, r) {
  let n = 1 / Math.tan(t / 2), h = 1 / (s - r);
  return e[0] = n / i, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (r + s) * h, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * r * s * h, e[15] = 0, e;
}
function Ee(e, t, i, s, r, n, h) {
  let a = 1 / (t - i), l = 1 / (s - r), f = 1 / (n - h);
  return e[0] = -2 * a, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * f, e[11] = 0, e[12] = (t + i) * a, e[13] = (r + s) * l, e[14] = (h + n) * f, e[15] = 1, e;
}
function Ae(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2], a = s[0], l = s[1], f = s[2], d = r - i[0], o = n - i[1], c = h - i[2], u = d * d + o * o + c * c;
  u === 0 ? c = 1 : (u = 1 / Math.sqrt(u), d *= u, o *= u, c *= u);
  let g = l * c - f * o, m = f * d - a * c, p = a * o - l * d;
  return u = g * g + m * m + p * p, u === 0 && (f ? a += 1e-6 : l ? f += 1e-6 : l += 1e-6, g = l * c - f * o, m = f * d - a * c, p = a * o - l * d, u = g * g + m * m + p * p), u = 1 / Math.sqrt(u), g *= u, m *= u, p *= u, e[0] = g, e[1] = m, e[2] = p, e[3] = 0, e[4] = o * p - c * m, e[5] = c * g - d * p, e[6] = d * m - o * g, e[7] = 0, e[8] = d, e[9] = o, e[10] = c, e[11] = 0, e[12] = r, e[13] = n, e[14] = h, e[15] = 1, e;
}
class U extends Array {
  constructor(t = 1, i = 0, s = 0, r = 0, n = 0, h = 1, a = 0, l = 0, f = 0, d = 0, o = 1, c = 0, u = 0, g = 0, m = 0, p = 1) {
    return super(t, i, s, r, n, h, a, l, f, d, o, c, u, g, m, p), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(t) {
    this[12] = t;
  }
  set y(t) {
    this[13] = t;
  }
  set z(t) {
    this[14] = t;
  }
  set w(t) {
    this[15] = t;
  }
  set(t, i, s, r, n, h, a, l, f, d, o, c, u, g, m, p) {
    return t.length ? this.copy(t) : (ae(this, t, i, s, r, n, h, a, l, f, d, o, c, u, g, m, p), this);
  }
  translate(t, i = this) {
    return ce(this, i, t), this;
  }
  rotate(t, i, s = this) {
    return ue(this, s, t, i), this;
  }
  scale(t, i = this) {
    return oe(this, i, typeof t == "number" ? [t, t, t] : t), this;
  }
  multiply(t, i) {
    return i ? it(this, t, i) : it(this, this, t), this;
  }
  identity() {
    return le(this), this;
  }
  copy(t) {
    return he(this, t), this;
  }
  fromPerspective({ fov: t, aspect: i, near: s, far: r } = {}) {
    return Me(this, t, i, s, r), this;
  }
  fromOrthogonal({ left: t, right: i, bottom: s, top: r, near: n, far: h }) {
    return Ee(this, t, i, s, r, n, h), this;
  }
  fromQuaternion(t) {
    return ye(this, t), this;
  }
  setPosition(t) {
    return this.x = t[0], this.y = t[1], this.z = t[2], this;
  }
  inverse(t = this) {
    return fe(this, t), this;
  }
  compose(t, i, s) {
    return xe(this, t, i, s), this;
  }
  getRotation(t) {
    return me(t, this), this;
  }
  getTranslation(t) {
    return ge(t, this), this;
  }
  getScaling(t) {
    return ut(t, this), this;
  }
  getMaxScaleOnAxis() {
    return pe(this);
  }
  lookAt(t, i, s) {
    return Ae(this, t, i, s), this;
  }
  determinant() {
    return de(this);
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this[2] = t[i + 2], this[3] = t[i + 3], this[4] = t[i + 4], this[5] = t[i + 5], this[6] = t[i + 6], this[7] = t[i + 7], this[8] = t[i + 8], this[9] = t[i + 9], this[10] = t[i + 10], this[11] = t[i + 11], this[12] = t[i + 12], this[13] = t[i + 13], this[14] = t[i + 14], this[15] = t[i + 15], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t[i + 3] = this[3], t[i + 4] = this[4], t[i + 5] = this[5], t[i + 6] = this[6], t[i + 7] = this[7], t[i + 8] = this[8], t[i + 9] = this[9], t[i + 10] = this[10], t[i + 11] = this[11], t[i + 12] = this[12], t[i + 13] = this[13], t[i + 14] = this[14], t[i + 15] = this[15], t;
  }
}
function we(e, t, i = "YXZ") {
  return i === "XYZ" ? (e[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)), Math.abs(t[8]) < 0.99999 ? (e[0] = Math.atan2(-t[9], t[10]), e[2] = Math.atan2(-t[4], t[0])) : (e[0] = Math.atan2(t[6], t[5]), e[2] = 0)) : i === "YXZ" ? (e[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)), Math.abs(t[9]) < 0.99999 ? (e[1] = Math.atan2(t[8], t[10]), e[2] = Math.atan2(t[1], t[5])) : (e[1] = Math.atan2(-t[2], t[0]), e[2] = 0)) : i === "ZXY" ? (e[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)), Math.abs(t[6]) < 0.99999 ? (e[1] = Math.atan2(-t[2], t[10]), e[2] = Math.atan2(-t[4], t[5])) : (e[1] = 0, e[2] = Math.atan2(t[1], t[0]))) : i === "ZYX" ? (e[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)), Math.abs(t[2]) < 0.99999 ? (e[0] = Math.atan2(t[6], t[10]), e[2] = Math.atan2(t[1], t[0])) : (e[0] = 0, e[2] = Math.atan2(-t[4], t[5]))) : i === "YZX" ? (e[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)), Math.abs(t[1]) < 0.99999 ? (e[0] = Math.atan2(-t[9], t[5]), e[1] = Math.atan2(-t[2], t[0])) : (e[0] = 0, e[1] = Math.atan2(t[8], t[10]))) : i === "XZY" && (e[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)), Math.abs(t[4]) < 0.99999 ? (e[0] = Math.atan2(t[6], t[5]), e[1] = Math.atan2(t[8], t[0])) : (e[0] = Math.atan2(-t[9], t[10]), e[1] = 0)), e;
}
const st = new U();
class ve extends Array {
  constructor(t = 0, i = t, s = t, r = "YXZ") {
    return super(t, i, s), this.order = r, this.onChange = () => {
    }, this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(t) {
    this[0] = t, this.onChange();
  }
  set y(t) {
    this[1] = t, this.onChange();
  }
  set z(t) {
    this[2] = t, this.onChange();
  }
  set(t, i = t, s = t) {
    return t.length ? this.copy(t) : (this[0] = t, this[1] = i, this[2] = s, this.onChange(), this);
  }
  copy(t) {
    return this[0] = t[0], this[1] = t[1], this[2] = t[2], this.onChange(), this;
  }
  reorder(t) {
    return this.order = t, this.onChange(), this;
  }
  fromRotationMatrix(t, i = this.order) {
    return we(this, t, i), this.onChange(), this;
  }
  fromQuaternion(t, i = this.order) {
    return st.fromQuaternion(t), this.fromRotationMatrix(st, i);
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t;
  }
}
class be {
  constructor() {
    this.parent = null, this.children = [], this.visible = !0, this.matrix = new U(), this.worldMatrix = new U(), this.matrixAutoUpdate = !0, this.position = new O(), this.quaternion = new re(), this.scale = new O(1), this.rotation = new ve(), this.up = new O(0, 1, 0), this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation), this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }
  setParent(t, i = !0) {
    this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, i && t && t.addChild(this, !1);
  }
  addChild(t, i = !0) {
    ~this.children.indexOf(t) || this.children.push(t), i && t.setParent(this, !1);
  }
  removeChild(t, i = !0) {
    ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), i && t.setParent(null, !1);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
    for (let i = 0, s = this.children.length; i < s; i++)
      this.children[i].updateMatrixWorld(t);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0;
  }
  traverse(t) {
    if (!t(this))
      for (let i = 0, s = this.children.length; i < s; i++)
        this.children[i].traverse(t);
  }
  decompose() {
    this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(t, i = !1) {
    i ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion);
  }
}
function _e(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e;
}
function Te(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i + i, a = s + s, l = r + r, f = i * h, d = s * h, o = s * a, c = r * h, u = r * a, g = r * l, m = n * h, p = n * a, x = n * l;
  return e[0] = 1 - o - g, e[3] = d - x, e[6] = c + p, e[1] = d + x, e[4] = 1 - f - g, e[7] = u - m, e[2] = c - p, e[5] = u + m, e[8] = 1 - f - o, e;
}
function Fe(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function Se(e, t, i, s, r, n, h, a, l, f) {
  return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e[4] = n, e[5] = h, e[6] = a, e[7] = l, e[8] = f, e;
}
function Ce(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
}
function Re(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = t[4], a = t[5], l = t[6], f = t[7], d = t[8], o = d * h - a * f, c = -d * n + a * l, u = f * n - h * l, g = i * o + s * c + r * u;
  return g ? (g = 1 / g, e[0] = o * g, e[1] = (-d * s + r * f) * g, e[2] = (a * s - r * h) * g, e[3] = c * g, e[4] = (d * i - r * l) * g, e[5] = (-a * i + r * n) * g, e[6] = u * g, e[7] = (-f * i + s * l) * g, e[8] = (h * i - s * n) * g, e) : null;
}
function rt(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], a = t[4], l = t[5], f = t[6], d = t[7], o = t[8], c = i[0], u = i[1], g = i[2], m = i[3], p = i[4], x = i[5], E = i[6], M = i[7], y = i[8];
  return e[0] = c * s + u * h + g * f, e[1] = c * r + u * a + g * d, e[2] = c * n + u * l + g * o, e[3] = m * s + p * h + x * f, e[4] = m * r + p * a + x * d, e[5] = m * n + p * l + x * o, e[6] = E * s + M * h + y * f, e[7] = E * r + M * a + y * d, e[8] = E * n + M * l + y * o, e;
}
function ze(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], a = t[4], l = t[5], f = t[6], d = t[7], o = t[8], c = i[0], u = i[1];
  return e[0] = s, e[1] = r, e[2] = n, e[3] = h, e[4] = a, e[5] = l, e[6] = c * s + u * h + f, e[7] = c * r + u * a + d, e[8] = c * n + u * l + o, e;
}
function Oe(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], a = t[4], l = t[5], f = t[6], d = t[7], o = t[8], c = Math.sin(i), u = Math.cos(i);
  return e[0] = u * s + c * h, e[1] = u * r + c * a, e[2] = u * n + c * l, e[3] = u * h - c * s, e[4] = u * a - c * r, e[5] = u * l - c * n, e[6] = f, e[7] = d, e[8] = o, e;
}
function Le(e, t, i) {
  let s = i[0], r = i[1];
  return e[0] = s * t[0], e[1] = s * t[1], e[2] = s * t[2], e[3] = r * t[3], e[4] = r * t[4], e[5] = r * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function De(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = t[4], a = t[5], l = t[6], f = t[7], d = t[8], o = t[9], c = t[10], u = t[11], g = t[12], m = t[13], p = t[14], x = t[15], E = i * a - s * h, M = i * l - r * h, y = i * f - n * h, w = s * l - r * a, A = s * f - n * a, T = r * f - n * l, F = d * m - o * g, S = d * p - c * g, b = d * x - u * g, C = o * p - c * m, _ = o * x - u * m, R = c * x - u * p, v = E * R - M * _ + y * C + w * b - A * S + T * F;
  return v ? (v = 1 / v, e[0] = (a * R - l * _ + f * C) * v, e[1] = (l * b - h * R - f * S) * v, e[2] = (h * _ - a * b + f * F) * v, e[3] = (r * _ - s * R - n * C) * v, e[4] = (i * R - r * b + n * S) * v, e[5] = (s * b - i * _ - n * F) * v, e[6] = (m * T - p * A + x * w) * v, e[7] = (p * y - g * T - x * M) * v, e[8] = (g * A - m * y + x * E) * v, e) : null;
}
class Ie extends Array {
  constructor(t = 1, i = 0, s = 0, r = 0, n = 1, h = 0, a = 0, l = 0, f = 1) {
    return super(t, i, s, r, n, h, a, l, f), this;
  }
  set(t, i, s, r, n, h, a, l, f) {
    return t.length ? this.copy(t) : (Se(this, t, i, s, r, n, h, a, l, f), this);
  }
  translate(t, i = this) {
    return ze(this, i, t), this;
  }
  rotate(t, i = this) {
    return Oe(this, i, t), this;
  }
  scale(t, i = this) {
    return Le(this, i, t), this;
  }
  multiply(t, i) {
    return i ? rt(this, t, i) : rt(this, this, t), this;
  }
  identity() {
    return Ce(this), this;
  }
  copy(t) {
    return Fe(this, t), this;
  }
  fromMatrix4(t) {
    return _e(this, t), this;
  }
  fromQuaternion(t) {
    return Te(this, t), this;
  }
  fromBasis(t, i, s) {
    return this.set(t[0], t[1], t[2], i[0], i[1], i[2], s[0], s[1], s[2]), this;
  }
  inverse(t = this) {
    return Re(this, t), this;
  }
  getNormalMatrix(t) {
    return De(this, t), this;
  }
}
let Ue = 0;
class Pe extends be {
  constructor(t, { geometry: i, program: s, mode: r = t.TRIANGLES, frustumCulled: n = !0, renderOrder: h = 0 } = {}) {
    super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = Ue++, this.geometry = i, this.program = s, this.mode = r, this.frustumCulled = n, this.renderOrder = h, this.modelViewMatrix = new U(), this.normalMatrix = new Ie(), this.beforeRenderCallbacks = [], this.afterRenderCallbacks = [];
  }
  onBeforeRender(t) {
    return this.beforeRenderCallbacks.push(t), this;
  }
  onAfterRender(t) {
    return this.afterRenderCallbacks.push(t), this;
  }
  draw({ camera: t } = {}) {
    this.beforeRenderCallbacks.forEach((s) => s && s({ mesh: this, camera: t })), t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
      modelMatrix: { value: null },
      viewMatrix: { value: null },
      modelViewMatrix: { value: null },
      normalMatrix: { value: null },
      projectionMatrix: { value: null },
      cameraPosition: { value: null }
    }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
    let i = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: i }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach((s) => s && s({ mesh: this, camera: t }));
  }
}
const nt = new Uint8Array(4);
function ht(e) {
  return (e & e - 1) === 0;
}
let Ne = 1;
class Be {
  constructor(t, {
    image: i,
    target: s = t.TEXTURE_2D,
    type: r = t.UNSIGNED_BYTE,
    format: n = t.RGBA,
    internalFormat: h = n,
    wrapS: a = t.CLAMP_TO_EDGE,
    wrapT: l = t.CLAMP_TO_EDGE,
    generateMipmaps: f = !0,
    minFilter: d = f ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
    magFilter: o = t.LINEAR,
    premultiplyAlpha: c = !1,
    unpackAlignment: u = 4,
    flipY: g = s == t.TEXTURE_2D,
    anisotropy: m = 0,
    level: p = 0,
    width: x,
    // used for RenderTargets or Data Textures
    height: E = x
  } = {}) {
    this.gl = t, this.id = Ne++, this.image = i, this.target = s, this.type = r, this.format = n, this.internalFormat = h, this.minFilter = d, this.magFilter = o, this.wrapS = a, this.wrapT = l, this.generateMipmaps = f, this.premultiplyAlpha = c, this.unpackAlignment = u, this.flipY = g, this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy), this.level = p, this.width = x, this.height = E, this.texture = this.gl.createTexture(), this.store = {
      image: null
    }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0;
  }
  bind() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id);
  }
  update(t = 0) {
    const i = !(this.image === this.store.image && !this.needsUpdate);
    if ((i || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), !!i) {
      if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(
        this.target,
        this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,
        this.anisotropy
      ), this.state.anisotropy = this.anisotropy), this.image) {
        if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let s = 0; s < 6; s++)
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + s,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image[s]
            );
        else if (ArrayBuffer.isView(this.image))
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
        else if (this.image.isCompressedTexture)
          for (let s = 0; s < this.image.length; s++)
            this.gl.compressedTexImage2D(
              this.target,
              s,
              this.internalFormat,
              this.image[s].width,
              this.image[s].height,
              0,
              this.image[s].data
            );
        else
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
        this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!ht(this.image.width) || !ht(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let s = 0; s < 6; s++)
          this.gl.texImage2D(
            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + s,
            0,
            this.gl.RGBA,
            1,
            1,
            0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            nt
          );
      else
        this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, nt);
      this.store.image = this.image;
    }
  }
}
function $e(e, t) {
  return e[0] = t[0], e[1] = t[1], e;
}
function Xe(e, t, i) {
  return e[0] = t, e[1] = i, e;
}
function at(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e;
}
function lt(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e;
}
function Ye(e, t, i) {
  return e[0] = t[0] * i[0], e[1] = t[1] * i[1], e;
}
function qe(e, t, i) {
  return e[0] = t[0] / i[0], e[1] = t[1] / i[1], e;
}
function Y(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e;
}
function Ve(e, t) {
  var i = t[0] - e[0], s = t[1] - e[1];
  return Math.sqrt(i * i + s * s);
}
function Ge(e, t) {
  var i = t[0] - e[0], s = t[1] - e[1];
  return i * i + s * s;
}
function ft(e) {
  var t = e[0], i = e[1];
  return Math.sqrt(t * t + i * i);
}
function We(e) {
  var t = e[0], i = e[1];
  return t * t + i * i;
}
function ke(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e;
}
function je(e, t) {
  return e[0] = 1 / t[0], e[1] = 1 / t[1], e;
}
function Ze(e, t) {
  var i = t[0], s = t[1], r = i * i + s * s;
  return r > 0 && (r = 1 / Math.sqrt(r)), e[0] = t[0] * r, e[1] = t[1] * r, e;
}
function He(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function dt(e, t) {
  return e[0] * t[1] - e[1] * t[0];
}
function Qe(e, t, i, s) {
  var r = t[0], n = t[1];
  return e[0] = r + s * (i[0] - r), e[1] = n + s * (i[1] - n), e;
}
function Ke(e, t, i) {
  var s = t[0], r = t[1];
  return e[0] = i[0] * s + i[3] * r + i[6], e[1] = i[1] * s + i[4] * r + i[7], e;
}
function Je(e, t, i) {
  let s = t[0], r = t[1];
  return e[0] = i[0] * s + i[4] * r + i[12], e[1] = i[1] * s + i[5] * r + i[13], e;
}
function ti(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
class P extends Array {
  constructor(t = 0, i = t) {
    return super(t, i), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(t) {
    this[0] = t;
  }
  set y(t) {
    this[1] = t;
  }
  set(t, i = t) {
    return t.length ? this.copy(t) : (Xe(this, t, i), this);
  }
  copy(t) {
    return $e(this, t), this;
  }
  add(t, i) {
    return i ? at(this, t, i) : at(this, this, t), this;
  }
  sub(t, i) {
    return i ? lt(this, t, i) : lt(this, this, t), this;
  }
  multiply(t) {
    return t.length ? Ye(this, this, t) : Y(this, this, t), this;
  }
  divide(t) {
    return t.length ? qe(this, this, t) : Y(this, this, 1 / t), this;
  }
  inverse(t = this) {
    return je(this, t), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return ft(this);
  }
  distance(t) {
    return t ? Ve(this, t) : ft(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(t) {
    return t ? Ge(this, t) : We(this);
  }
  negate(t = this) {
    return ke(this, t), this;
  }
  cross(t, i) {
    return i ? dt(t, i) : dt(this, t);
  }
  scale(t) {
    return Y(this, this, t), this;
  }
  normalize() {
    return Ze(this, this), this;
  }
  dot(t) {
    return He(this, t);
  }
  equals(t) {
    return ti(this, t);
  }
  applyMatrix3(t) {
    return Ke(this, this, t), this;
  }
  applyMatrix4(t) {
    return Je(this, this, t), this;
  }
  lerp(t, i) {
    return Qe(this, this, t, i), this;
  }
  clone() {
    return new P(this[0], this[1]);
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t;
  }
}
class ei extends Ot {
  constructor(t, { attributes: i = {} } = {}) {
    Object.assign(i, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    }), super(t, i);
  }
}
const ii = `#define GLSLIFY 1
attribute vec2 uv;attribute vec2 position;varying vec2 vUv;uniform vec2 uvRepeat;uniform vec2 uvOffset;uniform vec2 uvDisplacementRepeat;uniform vec2 uvDisplacementOffset;varying vec2 vUvMap;varying vec2 vUvDisplacementMap;void main(){vUv=uv;vUvMap=uv;vUvMap*=uvRepeat;vUvMap+=uvOffset;vUvDisplacementMap=uv;vUvDisplacementMap*=uvDisplacementRepeat;vUvDisplacementMap+=uvDisplacementOffset;gl_Position=vec4(position,0,1);}`, si = `precision highp float;
#define GLSLIFY 1
uniform float uTime;uniform float uOffsetX;uniform float uOffsetY;uniform float uFadeCenterX;uniform float uFadeCenterY;uniform float uFadeFrom;uniform float uFadeTo;varying vec2 vUv;uniform sampler2D uTexture;varying vec2 vUvMap;uniform sampler2D uDisplacementTexture;varying vec2 vUvDisplacementMap;uniform float uDisplacementCoef;uniform float uSpeed;vec2 scaleUV(vec2 uv,float scale){float center=0.0;return((uv-center)*scale)+((1.0-scale)/2.0);}void main(){float angle=uTime*uSpeed;float cosAngle=cos(angle);float sinAngle=sin(angle);vec2 centeredCoord=vUvDisplacementMap-0.5;vec2 rotatedCoord;rotatedCoord.x=cosAngle*centeredCoord.x-sinAngle*centeredCoord.y;rotatedCoord.y=sinAngle*centeredCoord.x+cosAngle*centeredCoord.y;rotatedCoord+=0.5;vec4 displacementTexture=texture2D(uDisplacementTexture,scaleUV(rotatedCoord,0.75));vec2 fadeEffectCenter=vec2(uFadeCenterX,uFadeCenterY);vec2 displacementMapCoordAdjusted=vUvDisplacementMap-fadeEffectCenter;float distanceFromFadeCenter=length(displacementMapCoordAdjusted);float edgeFade=smoothstep(uFadeFrom,uFadeTo,distanceFromFadeCenter);float displaceForceX=displacementTexture.r*uOffsetX*uDisplacementCoef*edgeFade;float displaceForceY=displacementTexture.r*uOffsetY*uDisplacementCoef*edgeFade;vec2 uvDisplaced=vec2(vUvMap.x-displaceForceX,vUvMap.y+displaceForceY);vec4 displacedTexture=texture2D(uTexture,uvDisplaced);gl_FragColor=displacedTexture;}`;
class ri {
  constructor() {
    z(this, "assets", {});
    z(this, "load", (t, i) => new Promise((s) => {
      const r = [];
      for (let n = 0; n < t.length; n++) {
        const { name: h, texture: a } = t[n];
        a && !this.assets[h] && r.push(this.loadTexture(a, h, i));
      }
      Promise.all(r).then(() => s());
    }));
  }
  // Dictionary of assets, can be different type, gltf, texture, img, font, feel free to make a Enum if using TypeScript
  get(t) {
    return this.assets[t];
  }
  loadTexture(t, i, s) {
    return this.assets[i] || (this.assets[i] = {}), new Promise((r) => {
      const n = new Image(), h = new Be(s);
      n.onload = () => {
        h.image = n, this.assets[i] = h, r(n);
      }, n.src = t;
    });
  }
}
const D = new ri();
function ct(e, t) {
  const i = e.canvas.offsetWidth / e.canvas.offsetHeight;
  if (!t) {
    console.warn("no image provided");
    return;
  }
  const s = t.width / t.height, r = new P(), n = new P();
  return i / s > 1 ? r.set([1, s / i]) : r.set([i / s, 1]), n.set([(1 - r[0]) / 2, (1 - r[1]) / 2]), { offset: n, repeat: r };
}
class ai {
  constructor(t = { el: ".scene", GUI: !1, uniforms: {} }) {
    z(this, "renderer");
    z(this, "mesh");
    z(this, "program");
    z(this, "guiObj", {
      fadeFrom: 0.075,
      fadeTo: 0.75,
      fadeCenterX: 0.5,
      fadeCenterY: 0.5,
      displacementCoef: 0.5,
      speed: 0.3
    });
    z(this, "mousePosition", {
      x: 0,
      y: 0
    });
    /**
     * Handles the mouse move event.
     * @param {MouseEvent} event - The mouse move event.
     */
    z(this, "onMouseMove", (t) => {
      if (!this.program) {
        console.warn("No program on move", this);
        return;
      }
      const i = t.clientX - this.el.offsetLeft, s = t.clientY - this.el.offsetTop, r = i / this.el.offsetWidth, n = s / this.el.offsetHeight, h = -4, a = 4, l = this.adjustRange(r, h, a), f = this.adjustRange(n, h, a);
      I.to(this.mousePosition, {
        x: l,
        y: f,
        duration: 2,
        ease: "Power4.easeOut",
        overwrite: !0,
        onUpdate: () => {
          this.program.uniforms.uOffsetX.value = this.mousePosition.x, this.program.uniforms.uOffsetY.value = this.mousePosition.y;
        }
      });
    });
    /**
     * Handles the "leave" event for the scene.
     */
    z(this, "onLeave", () => {
      if (!this.program) {
        console.warn("No program on leave:", this);
        return;
      }
      I.to(this.mousePosition, {
        x: 0,
        y: 0,
        duration: 2,
        ease: "Power4.easeOut",
        overwrite: !0,
        onUpdate: () => {
          this.program.uniforms.uOffsetX.value = this.mousePosition.x, this.program.uniforms.uOffsetY.value = this.mousePosition.y;
        }
      });
    });
    /**
     * Handles the resize event of the scene.
     */
    z(this, "handleResize", () => {
      this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);
    });
    /**
     * Handles the requestAnimationFrame callback.
     * @param {number} t - The current timestamp.
     */
    z(this, "handleRAF", (t) => {
      this.program && (this.program.uniforms.uTime.value = t * 1, this.renderer.render({ scene: this.mesh }));
    });
    this.el = document.querySelector(t.el), this.uid = Math.random().toString(36).substr(2, 9), this.imageUrl = t.image, this.displacementUrl = t.displacement, this.GUI = t.GUI, this.uniformOptions = t.uniforms || {}, this.setScene(), setTimeout(() => {
      this.events();
    });
  }
  /**
   * sets up the gui for the scene
   */
  setGUI() {
  }
  /**
   * Sets up the WebGL scene using OGL.
   */
  async setScene() {
    const t = this.el.getElementsByTagName("canvas")[0];
    if (!t) {
      console.warn("No canvas element found in the container. Make sure to add a canvas element to the container!");
      return;
    }
    this.renderer = new Bt({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas: t
    });
    const i = this.renderer.gl;
    i.clearColor(1, 1, 1, 1), this.handleResize();
    const s = new ei(i), r = `image_${this.uid}`, n = `displacement_${this.uid}`;
    await D.load(
      [
        {
          name: r,
          texture: this.imageUrl
        },
        {
          name: n,
          texture: this.displacementUrl
        }
      ],
      i
    ).then(() => {
    });
    const h = ct(i, D.assets[r].image), a = ct(i, D.assets[n].image);
    this.program = new Dt(i, {
      vertex: ii,
      fragment: si,
      uniforms: {
        /**
         * defines the uniforms for the program
         * @param {WebGLRenderingContext} gl - the webgl context
         */
        uTime: {
          value: this.uniformOptions.uTime || 0
        },
        uSpeed: {
          value: this.uniformOptions.uSpeed || 0.3
        },
        uFadeCenterX: {
          value: this.uniformOptions.uFadeCenterX || 0.5
        },
        uFadeCenterY: {
          value: this.uniformOptions.uFadeCenterY || 0.5
        },
        uFadeFrom: {
          value: this.uniformOptions.uFadeFrom || 0
        },
        uFadeTo: {
          value: this.uniformOptions.uFadeTo || 1
        },
        uDisplacementCoef: {
          value: this.uniformOptions.uDisplacementCoef || 0.1
        },
        uOffsetX: {
          value: this.uniformOptions.uOffsetX || 0
        },
        uOffsetY: {
          value: this.uniformOptions.uOffsetY || 0
        },
        uTexture: {
          value: D.assets[r]
        },
        uvRepeat: {
          value: h.repeat
        },
        uvOffset: {
          value: h.offset
        },
        uDisplacementTexture: {
          value: D.assets[n]
        },
        uvDisplacementRepeat: {
          value: a.repeat
        },
        uvDisplacementOffset: {
          value: a.offset
        }
      }
    }), this.mesh = new Pe(i, {
      geometry: s,
      program: this.program
    });
  }
  /**
   * Normalizes a value between a minimum and maximum range
   * @param {number} normalizedValue - the value to be normalized, between 0 and 1
   * @param {number} minValue - the minimum value of the range
   * @param {number} maxValue - the maximum value of the range
   * @returns {number} the normalized value, between minValue and maxValue
   */
  adjustRange(t, i, s) {
    const r = s - i;
    return t * r + i;
  }
  /**
   * Adds event listeners for mouse movement and resizing
   */
  events() {
    window.addEventListener("resize", this.handleResize, !1), this.el.addEventListener("mousemove", this.onMouseMove, !1), this.el.addEventListener("mouseleave", this.onLeave, !1), I.ticker.add(this.handleRAF);
  }
  /**
   * removes event listeners and destroys the scene
   */
  destroy() {
    this.el.removeEventListener("mousemove", this.onMouseMove, !1), this.el.removeEventListener("mouseleave", this.onLeave, !1), window.removeEventListener("resize", this.handleResize, !1), I.ticker.remove(this.handleRAF);
  }
}
export {
  ai as default
};
