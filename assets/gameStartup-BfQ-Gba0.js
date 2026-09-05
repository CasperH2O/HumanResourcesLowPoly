const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/unitModelResources-CShfznbw.js","assets/three.core-BnugWimV.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/unitModelMaterials-_KRbRZ9J.js","assets/toon-DLatBX7x.js"])))=>i.map(i=>d[i]);
import{n as e,o as t,t as n}from"./loop-CCaCSFt0.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./index-D1aK-8E2.js";import{$ as d,A as f,An as p,At as m,B as h,Bn as g,C as _,Cn as v,Cr as y,D as b,Dn as x,Dt as S,E as C,Et as w,F as T,Fn as E,G as D,Gt as O,H as k,I as A,In as j,K as M,Kt as ee,L as te,Ln as ne,M as re,Mt as ie,N,Nt as ae,O as P,On as oe,P as se,Qn as ce,R as le,Rn as F,Rt as ue,S as de,Sn as fe,Sr as pe,T as me,Tn as he,Tt as ge,U as _e,V as ve,Vn as ye,Vt as be,Xn as xe,Yn as Se,Zn as Ce,_ as we,_r as I,_t as L,a as Te,ar as Ee,at as De,b as Oe,br as ke,bt as Ae,c as R,cr as je,ct as Me,dr as Ne,dt as z,er as Pe,f as Fe,fr as Ie,g as Le,gr as Re,gt as B,h as V,hr as ze,ht as Be,i as Ve,ir as He,it as H,j as U,jt as Ue,k as We,kn as Ge,l as W,lt as Ke,m as qe,mr as Je,mt as G,nr as Ye,or as K,ot as Xe,p as Ze,pr as Qe,pt as $e,qn as et,r as tt,rr as nt,rt,sr as q,st as it,tt as at,u as J,ur as ot,v as st,vr as ct,vt as lt,w as ut,wn as dt,wr as ft,wt as pt,x as mt,xr as ht,y as gt,yr as _t,yt as vt,zn as yt}from"./three.core-BnugWimV.js";import{a as bt,c as xt,i as St,n as Ct,s as wt,t as Tt}from"./toon-DLatBX7x.js";import{t as Et}from"./SkeletonUtils-CHxfGqZJ.js";import{A as Dt,B as Ot,C as kt,D as At,E as jt,F as Mt,G as Nt,H as Pt,I as Ft,J as It,K as Lt,L as Rt,M as Y,N as zt,O as Bt,P as Vt,R as Ht,S as Ut,SaveStore as Wt,T as Gt,U as Kt,V as qt,W as Jt,_ as Yt,a as Xt,b as Zt,c as Qt,d as $t,f as en,g as tn,h as nn,i as rn,j as an,k as on,l as sn,m as cn,n as ln,o as un,p as dn,q as fn,r as pn,s as mn,t as hn,u as gn,v as _n,w as vn,x as yn,y as bn,z as xn}from"./saveStore-B-t7hrW3.js";function Sn(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Cn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},wn={basic:{uniforms:ht([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:ht([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:ht([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:ht([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:ht([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new V(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:ht([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:ht([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:ht([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:ht([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:ht([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:ht([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:ht([Z.common,Z.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:ht([Z.lights,Z.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};wn.physical={uniforms:ht([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Tn={r:0,b:0,g:0},En=new Be,Dn=new G;Dn.set(-1,0,0,0,1,0,0,0,1);function On(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new B(new R(1,1,1),new F({name:`BackgroundCubeMaterial`,uniforms:Je(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(En.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dn),l.material.toneMapped=Le.getTransfer(i.colorSpace)!==j,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new B(new ae(2,2),new F({name:`BackgroundMaterial`,uniforms:Je(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Le.getTransfer(i.colorSpace)!==j,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Tn,_t(e)),n.buffers.color.setClear(Tn.r,Tn.g,Tn.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function kn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function An(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jn(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(y(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&y(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Mn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ie,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Nn=4,Pn=[.125,.215,.35,.446,.526,.582],Fn=20,In=256,Ln=new m,Rn=new V,zn=null,Bn=0,Vn=0,Hn=!1,Un=new q,Wn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Un}=i;zn=this._renderer.getRenderTarget(),Bn=this._renderer.getActiveCubeFace(),Vn=this._renderer.getActiveMipmapLevel(),Hn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zn,Bn,Vn),this._renderer.xr.enabled=Hn,e.scissorTest=!1,qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zn=this._renderer.getRenderTarget(),Bn=this._renderer.getActiveCubeFace(),Vn=this._renderer.getActiveMipmapLevel(),Hn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:H,minFilter:H,generateMipmaps:!1,type:ve,format:O,colorSpace:it,depthBuffer:!1},r=Kn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gn(r)),this._blurMaterial=Yn(r,e,t),this._ggxMaterial=Jn(r,e,t)}return r}_compileMaterial(e){let t=new B(new J,e);this._renderer.compile(t,Ln)}_sceneToCubeUV(e,t,n,r,i){let a=new Ue(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Rn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new B(new R,new L({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Rn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;qn(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;qn(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ln)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Nn?n-d+Nn:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,qn(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ln),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,qn(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ln)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&I(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Fn;m>Fn&&y(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);let h=[],g=0;for(let e=0;e<Fn;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];qn(t,3*v*(r>_-Nn?r-_+Nn:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ln)}};function Gn(e){let t=[],n=[],r=[],i=e,a=e-Nn+1+Pn.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Nn?s=Pn[o-e+Nn-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new J;h.setAttribute(`position`,new W(f,3)),h.setAttribute(`uv`,new W(p,2)),h.setAttribute(`faceIndex`,new W(m,1)),r.push(new B(h,null)),i>Nn&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Kn(e,t,n){let r=new Ne(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function qn(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Jn(e,t,n){return new F({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yn(e,t,n){let r=new Float32Array(Fn),i=new q(0,1,0);return new F({name:`SphericalGaussianBlur`,defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xn(){return new F({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zn(){return new F({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var $n=class extends Ne{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new R(5,5,5),i=new F({name:`CubemapFromEquirect`,uniforms:Je(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new B(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=H),new we(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function er(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new $n(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Wn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Wn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function tr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ft(`WebGLRenderer: `+e+` extension not supported.`),t}}}function nr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?xe:Se)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function rr(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ir(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ar(e,t,n){let r=new WeakMap,i=new je;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new de(h,p,m,u);g.type=A,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function or(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var sr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function cr(e,t,n,r,i,a){let o=new Ne(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new C(t,n):void 0}),s=new Ne(t,n,{type:ve,depthBuffer:!1,stencilBuffer:!1}),c=new J;c.setAttribute(`position`,new T([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new T([0,2,0,0,2,0],2));let l=new dt({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new B(c,l),d=new m(-1,1,1,-1,0,1),f=null,p=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Le.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=sr[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(u,d),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var lr=new et,ur=new C(1,1),dr=new de,fr=new mt,pr=new gt,mr=[],hr=[],gr=new Float32Array(16),_r=new Float32Array(9),vr=new Float32Array(4);function yr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=mr[i];if(a===void 0&&(a=new Float32Array(i),mr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function br(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Sr(e,t){let n=hr[t];n===void 0&&(n=new Int32Array(t),hr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(br(n,t))return;e.uniform2fv(this.addr,t),xr(n,t)}}function Tr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(br(n,t))return;e.uniform3fv(this.addr,t),xr(n,t)}}function Er(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(br(n,t))return;e.uniform4fv(this.addr,t),xr(n,t)}}function Dr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(br(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xr(n,t)}else{if(br(n,r))return;vr.set(r),e.uniformMatrix2fv(this.addr,!1,vr),xr(n,r)}}function Or(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(br(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xr(n,t)}else{if(br(n,r))return;_r.set(r),e.uniformMatrix3fv(this.addr,!1,_r),xr(n,r)}}function kr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(br(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xr(n,t)}else{if(br(n,r))return;gr.set(r),e.uniformMatrix4fv(this.addr,!1,gr),xr(n,r)}}function Ar(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(br(n,t))return;e.uniform2iv(this.addr,t),xr(n,t)}}function Mr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(br(n,t))return;e.uniform3iv(this.addr,t),xr(n,t)}}function Nr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(br(n,t))return;e.uniform4iv(this.addr,t),xr(n,t)}}function Pr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(br(n,t))return;e.uniform2uiv(this.addr,t),xr(n,t)}}function Ir(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(br(n,t))return;e.uniform3uiv(this.addr,t),xr(n,t)}}function Lr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(br(n,t))return;e.uniform4uiv(this.addr,t),xr(n,t)}}function Rr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ur.compareFunction=n.isReversedDepthBuffer()?518:515,a=ur):a=lr,n.setTexture2D(t||a,i)}function zr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fr,i)}function Br(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||pr,i)}function Vr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||dr,i)}function Hr(e){switch(e){case 5126:return Cr;case 35664:return wr;case 35665:return Tr;case 35666:return Er;case 35674:return Dr;case 35675:return Or;case 35676:return kr;case 5124:case 35670:return Ar;case 35667:case 35671:return jr;case 35668:case 35672:return Mr;case 35669:case 35673:return Nr;case 5125:return Pr;case 36294:return Fr;case 36295:return Ir;case 36296:return Lr;case 35678:case 36198:case 36298:case 36306:case 35682:return Rr;case 35679:case 36299:case 36307:return zr;case 35680:case 36300:case 36308:case 36293:return Br;case 36289:case 36303:case 36311:case 36292:return Vr}}function Ur(e,t){e.uniform1fv(this.addr,t)}function Wr(e,t){let n=yr(t,this.size,2);e.uniform2fv(this.addr,n)}function Gr(e,t){let n=yr(t,this.size,3);e.uniform3fv(this.addr,n)}function Kr(e,t){let n=yr(t,this.size,4);e.uniform4fv(this.addr,n)}function qr(e,t){let n=yr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Jr(e,t){let n=yr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Yr(e,t){let n=yr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xr(e,t){e.uniform1iv(this.addr,t)}function Zr(e,t){e.uniform2iv(this.addr,t)}function Qr(e,t){e.uniform3iv(this.addr,t)}function $r(e,t){e.uniform4iv(this.addr,t)}function ei(e,t){e.uniform1uiv(this.addr,t)}function ti(e,t){e.uniform2uiv(this.addr,t)}function ni(e,t){e.uniform3uiv(this.addr,t)}function ri(e,t){e.uniform4uiv(this.addr,t)}function ii(e,t,n){let r=this.cache,i=t.length,a=Sr(n,i);br(r,a)||(e.uniform1iv(this.addr,a),xr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ur:lr;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ai(e,t,n){let r=this.cache,i=t.length,a=Sr(n,i);br(r,a)||(e.uniform1iv(this.addr,a),xr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fr,a[e])}function oi(e,t,n){let r=this.cache,i=t.length,a=Sr(n,i);br(r,a)||(e.uniform1iv(this.addr,a),xr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||pr,a[e])}function si(e,t,n){let r=this.cache,i=t.length,a=Sr(n,i);br(r,a)||(e.uniform1iv(this.addr,a),xr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||dr,a[e])}function ci(e){switch(e){case 5126:return Ur;case 35664:return Wr;case 35665:return Gr;case 35666:return Kr;case 35674:return qr;case 35675:return Jr;case 35676:return Yr;case 5124:case 35670:return Xr;case 35667:case 35671:return Zr;case 35668:case 35672:return Qr;case 35669:case 35673:return $r;case 5125:return ei;case 36294:return ti;case 36295:return ni;case 36296:return ri;case 35678:case 36198:case 36298:case 36306:case 35682:return ii;case 35679:case 36299:case 36307:return ai;case 35680:case 36300:case 36308:case 36293:return oi;case 36289:case 36303:case 36311:case 36292:return si}}var li=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hr(t.type)}},ui=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ci(t.type)}},di=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fi=/(\w+)(\])?(\[|\.)?/g;function pi(e,t){e.seq.push(t),e.map[t.id]=t}function mi(e,t,n){let r=e.name,i=r.length;for(fi.lastIndex=0;;){let a=fi.exec(r),o=fi.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){pi(n,l===void 0?new li(s,e,t):new ui(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new di(s),pi(n,e)),n=e}}}var hi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);mi(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function gi(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _i=37297,vi=0;function yi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var bi=new G;function xi(e){Le._getMatrix(bi,Le.workingColorSpace,e);let t=`mat3( ${bi.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(e)){case Me:return[t,`LinearTransferOETF`];case j:return[t,`sRGBTransferOETF`];default:return y(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Si(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+yi(e.getShaderSource(t),r)}return i}function Ci(e,t){let n=xi(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var wi={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ti(e,t){let n=wi[t];return n===void 0?(y(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ei=new q;function Di(){return Le.getLuminanceCoefficients(Ei),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ei.x.toFixed(4)}, ${Ei.y.toFixed(4)}, ${Ei.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Oi(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ji).join(`
`)}function ki(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ai(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ji(e){return e!==``}function Mi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ni(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pi=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fi(e){return e.replace(Pi,Li)}var Ii=new Map;function Li(e,t){let n=X[t];if(n===void 0){let e=Ii.get(t);if(e!==void 0)n=X[e],y(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Fi(n)}var Ri=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zi(e){return e.replace(Ri,Bi)}function Bi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vi(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Hi={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ui(e){return Hi[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wi={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Gi(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Wi[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ki={302:`ENVMAP_MODE_REFRACTION`};function qi(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ki[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ji={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ji[e.combine]||`ENVMAP_BLENDING_NONE`}function Xi(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Zi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ui(n),l=Gi(n),u=qi(n),d=Yi(n),f=Xi(n),p=Oi(n),m=ki(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ji).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ji).join(`
`),_.length>0&&(_+=`
`)):(g=[Vi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ji).join(`
`),_=[Vi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Ti(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Ci(`linearToOutputTexel`,n.outputColorSpace),Di(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ji).join(`
`)),o=Fi(o),o=Mi(o,n),o=Ni(o,n),s=Fi(s),s=Mi(s,n),s=Ni(s,n),o=zi(o),s=zi(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let b=v+g+o,x=v+_+s,S=gi(i,i.VERTEX_SHADER,b),C=gi(i,i.FRAGMENT_SHADER,x);i.attachShader(h,S),i.attachShader(h,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(S)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,S,C);else{let e=Si(i,S,`vertex`),n=Si(i,C,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):y(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(S),i.deleteShader(C),T=new hi(i,h),E=Ai(i,h)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(h,_i)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=C,this}var Qi=0,$i=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ea(e),t.set(e,n)),n}},ea=class{constructor(e){this.id=Qi++,this.code=e,this.usedTimes=0}};function ta(e){return e===1030||e===37490||e===36285}function na(e,t,n,r,i,a){let o=new d,s=new $i,c=new Set,l=[],u=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return c.add(e),e===0?`uv`:`uv${e}`}function g(i,o,l,u,d,g){let _=u.fog,v=d.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&y(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let T=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,E=T===void 0?0:T.length,D=0;v.morphAttributes.position!==void 0&&(D=1),v.morphAttributes.normal!==void 0&&(D=2),v.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=wn[w];O=e.vertexShader,k=e.fragmentShader}else{O=i.vertexShader,k=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),A=e.id,j=t.id}let M=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=d.isInstancedMesh===!0,ne=d.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,N=!!S,ae=!!i.aoMap,P=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,F=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=de&&!!i.anisotropyMap,ve=fe&&!!i.clearcoatMap,ye=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,I=!!i.specularMap,L=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=ge&&!!i.transmissionMap,De=ge&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,R=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:k,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:ne,batchingColor:ne&&d._colorsTexture!==null,instancing:te,instancingColor:te&&d.instanceColor!==null,instancingMorph:te&&d.morphTexture!==null,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:N,envMapMode:N&&S.mapping,envMapCubeUVHeight:C,aoMap:ae,lightMap:P,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&ta(i.normalMap.format),metalnessMap:F,roughnessMap:ue,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:I,specularColorMap:L,specularIntensityMap:Te,transmission:ge,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:R,combine:i.combine,mapUv:re&&h(i.map.channel),aoMapUv:ae&&h(i.aoMap.channel),lightMapUv:P&&h(i.lightMap.channel),bumpMapUv:oe&&h(i.bumpMap.channel),normalMapUv:se&&h(i.normalMap.channel),displacementMapUv:ce&&h(i.displacementMap.channel),emissiveMapUv:le&&h(i.emissiveMap.channel),metalnessMapUv:F&&h(i.metalnessMap.channel),roughnessMapUv:ue&&h(i.roughnessMap.channel),anisotropyMapUv:_e&&h(i.anisotropyMap.channel),clearcoatMapUv:ve&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&h(i.sheenRoughnessMap.channel),specularMapUv:I&&h(i.specularMap.channel),specularColorMapUv:L&&h(i.specularColorMap.channel),specularIntensityMapUv:Te&&h(i.specularIntensityMap.channel),transmissionMapUv:Ee&&h(i.transmissionMap.channel),thicknessMapUv:De&&h(i.thicknessMap.channel),alphaMapUv:ke&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!v.attributes.uv&&(re||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Le.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Le.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function x(e){let t=m[e.type],n;if(t){let e=wn[t];n=Ce.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r=u.get(n);return r===void 0?(r=new Zi(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function w(e){s.remove(e)}function T(){s.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:T}}function ra(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ia(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function aa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function oa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||ia),r.length>1&&r.sort(t||aa),i.length>1&&i.sort(t||aa),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function sa(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new oa,e.set(t,[i])):n>=r.length?(i=new oa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ca(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new q,color:new V};break;case`SpotLight`:n={position:new q,direction:new q,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function la(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ua=0;function da(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function fa(e){let t=new ca,n=la(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Be,o=new Be;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(da);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ua++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function pa(e){let t=new fa(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ma(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new pa(e),t.set(n,[a])):r>=i.length?(a=new pa(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ha=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ga=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_a=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],va=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ya=new Be,ba=new q,xa=new q;function Sa(e,t,n){let r=new le,i=new K,a=new K,o=new je,s=new lt,c=new vt,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new F({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:ha,fragmentShader:ga}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new J;m.setAttribute(`position`,new W(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new B(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(y(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){y(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){y(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ne(i.x,i.y,{format:fe,type:ve,minFilter:H,magFilter:H,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new C(i.x,i.y,A),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ut,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ge,d.map.depthTexture.magFilter=ge}else l.isPointLight?(d.map=new $n(i.x),d.map.depthTexture=new st(i.x,Ye)):(d.map=new Ne(i.x,i.y),d.map.depthTexture=new C(i.x,i.y,Ye)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ut,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=H,d.map.depthTexture.magFilter=H):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ge,d.map.depthTexture.magFilter=ge);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ba.setFromMatrixPosition(l.matrixWorld),e.position.copy(ba),xa.copy(e.position),xa.add(_a[t]),e.up.copy(va[t]),e.lookAt(xa),e.updateMatrixWorld(),n.makeTranslation(-ba.x,-ba.y,-ba.z),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),x(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ne(i.x,i.y,{format:fe,type:ve})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ca(e,t){function n(){let t=!1,n=new je,r=null,i=new je(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ge[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1);let re=null,ie={},N=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),P=new je().fromArray(N),oe=new je().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),le(e.CULL_FACE),he(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(F(e.BLEND),g=!1);return}if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?F(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?F(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function be(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function xe(t){t?le(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+M-1),re!==t&&(e.activeTexture(t),re=t)}function Ce(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+M-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function L(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function R(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function z(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){P.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),P.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function B(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,P.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:F,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:L,compressedTexImage3D:Te,texImage2D:Me,texImage3D:Ne,pixelStorei:Pe,getParameter:z,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:Ae,texStorage3D:R,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Fe,viewport:Ie,reset:B}}function wa(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Re(`canvas`)}function g(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),y(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&y(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];y(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||y(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Me:Le.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,y(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),A(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function A(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let j=0;function M(){j=0}function ee(){return j}function te(e){j=e}function ne(){let e=j;return e>=i.maxTextures&&y(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),j+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&ke(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)y(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)y(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){he(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[oe]:e.REPEAT,[qe]:e.CLAMP_TO_EDGE,[pt]:e.MIRRORED_REPEAT},ce={[ge]:e.NEAREST,[S]:e.NEAREST_MIPMAP_NEAREST,[w]:e.NEAREST_MIPMAP_LINEAR,[H]:e.LINEAR,[Xe]:e.LINEAR_MIPMAP_NEAREST,[De]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&y(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=re(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Le.getPrimaries(Le.workingColorSpace),r=o.colorSpace===``?null:Le.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Ae(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,b=o.mipmaps,S=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,E=u.dataReady,D=T(o,t);if(o.isDepthTexture)m=C(o.format===me,o.type),w&&(S?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(b.length>0){S&&w&&n.texStorage2D(e.TEXTURE_2D,D,m,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)h=b[t],S?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else S?(w&&n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height),E&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){S&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,b[0].width,b[0].height,t.depth);for(let i=0,a=b.length;i<a;i++)if(h=b[i],o.format!==1023)if(r!==null)if(S){if(E)if(o.layerUpdates.size>0){let t=ct(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0);else y(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else S?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{S&&w&&n.texStorage2D(e.TEXTURE_2D,D,m,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)h=b[t],o.format===1023?S?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?y(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):S?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(S){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,t.width,t.height,t.depth),E)if(o.layerUpdates.size>0){let i=ct(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)S?(w&&n.texStorage3D(e.TEXTURE_3D,D,m,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w)if(S)n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(b.length>0){if(S&&w){let t=R(b[0]);n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,i=b.length;t<i;t++)h=b[t],S?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(S){if(w){let r=R(t);n.texStorage2D(e.TEXTURE_2D,D,m,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Le.getPrimaries(Le.workingColorSpace),r=o.colorSpace===``?null:Le.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ae(o,m[e]);let h=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=x(o.internalFormat,b,S,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=T(o,h);F(e.TEXTURE_CUBE_MAP,o);let k;if(f){w&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?y(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,w&&E){k.length>0&&O++;let t=R(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<k.length;r++){let i=k[r];w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.normalized,o.colorSpace);Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ie(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let we=[],L=[];function Te(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,L.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(we.push(l),L.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,L)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ke(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Le.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&y(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=M,this.getTextureUnits=ee,this.setTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=N,this.setTexture3D=ae,this.setTextureCube=P,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ta(e,t){function n(n,r=``){let i,a=Le.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ea=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Da=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new re(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new F({vertexShader:Ea,fragmentShader:Da,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ka=class extends U{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Oa,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new K,T=null,E=new Ue;E.viewport=new je;let D=new Ue;D.viewport=new je;let k=[E,D],A=new Ve,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Ie,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Ie,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Ie,x[e]=t),t.getHandSpace()};function ee(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,ee),r.removeEventListener(`selectstart`,ee),r.removeEventListener(`selectend`,ee),r.removeEventListener(`squeeze`,ee),r.removeEventListener(`squeezestart`,ee),r.removeEventListener(`squeezeend`,ee),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}j=null,M=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&y(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&y(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ee),r.addEventListener(`selectstart`,ee),r.addEventListener(`selectend`,ee),r.addEventListener(`squeeze`,ee),r.addEventListener(`squeezestart`,ee),r.addEventListener(`squeezeend`,ee),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?me:ut,a=_.stencil?Pe:Ye);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ne(d.textureWidth,d.textureHeight,{format:O,type:ce,depthTexture:new C(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ne(f.framebufferWidth,f.framebufferHeight,{format:O,type:ce,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ie=new q,N=new q;function ae(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(N),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;P(A,i);for(let e=0;e<a.length;e++)P(a[e],i);a.length===2?ae(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),oe(e,A,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=be*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let se=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new Ue,o.layers.enable(n),o.viewport=new je,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new re,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new Sn;F.setAnimationLoop(le),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Aa=new Be,ja=new G;ja.set(-1,0,0,0,1,0,0,0,1);function Ma(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,_t(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Aa.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ja),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Na(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?y(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):y(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function b(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:b}}var Pa=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fa=null;function Ia(){return Fa===null&&(Fa=new _(Pa,16,16,fe,ve),Fa.name=`DFG_LUT`,Fa.minFilter=H,Fa.magFilter=H,Fa.wrapS=qe,Fa.wrapT=qe,Fa.generateMipmaps=!1,Fa.needsUpdate=!0),Fa}var La=class{constructor(e={}){let{canvas:t=ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ce}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ee,v,x]),g=new Set([ce,Ye,Ee,Pe,nt,He]),_=new Uint32Array(4),b=new Int32Array(4),S=new q,C=null,w=null,T=[],D=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,A=!1,j=null,M=null,te=null,ne=null;this._outputColorSpace=E;let re=0,ie=0,N=null,ae=-1,P=null,oe=new je,se=new je,F=null,ue=new V(0),de=0,fe=t.width,me=t.height,he=1,ge=null,_e=null,ye=new je(0,0,fe,me),be=new je(0,0,fe,me),xe=!1,Se=new le,Ce=!1,we=!1,L=new Be,Te=new q,Oe=new je,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},R=!1;function Me(){return N===null?he:1}let z=n;function Fe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),z===null){let t=`webgl2`;if(z=Fe(t,e),z===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw I(`WebGLRenderer: `+e.message),e}let Ie,Re,B,Ve,H,U,Ue,We,Ge,W,Ke,qe,Je,G,K,Xe,Ze,Qe,$e,et,tt,rt,it;function at(){Ie=new tr(z),Ie.init(),tt=new Ta(z,Ie),Re=new jn(z,Ie,e,tt),B=new Ca(z,Ie),Re.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),M=z.createFramebuffer(),te=z.createFramebuffer(),ne=z.createFramebuffer(),Ve=new ir(z),H=new ra,U=new wa(z,Ie,B,H,Re,tt,Ve),Ue=new er(k),We=new Cn(z),rt=new kn(z,We),Ge=new nr(z,We,Ve,rt),W=new or(z,Ge,We,rt,Ve),Qe=new ar(z,Re,U),K=new Mn(H),Ke=new na(k,Ue,Ie,Re,rt,K),qe=new Ma(k,H),Je=new sa,G=new ma(Ie),Ze=new On(k,Ue,B,W,p,s),Xe=new Sa(k,W,Re),it=new Na(z,Ve,Re,B),$e=new An(z,Ie,Ve),et=new rr(z,Ie,Ve),Ve.programs=Ke.programs,k.capabilities=Re,k.extensions=Ie,k.properties=H,k.renderLists=Je,k.shadowMap=Xe,k.state=B,k.info=Ve}at(),m!==1009&&(O=new cr(m,t.width,t.height,o,r,i));let J=new ka(k,z);this.xr=J,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(fe,me,!1))},this.getSize=function(e){return e.set(fe,me)},this.setSize=function(e,n,r=!0){if(J.isPresenting){y(`WebGLRenderer: Can't change size while VR device is presenting.`);return}fe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(fe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){y(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}O.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.viewport(oe.copy(ye).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),B.scissor(se.copy(be).multiplyScalar(he).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){B.setScissorTest(xe=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,z.clearBufferuiv(z.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,z.clearBufferiv(z.COLOR,0,b))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ze.dispose(),Je.dispose(),G.dispose(),H.dispose(),Ue.dispose(),W.dispose(),rt.dispose(),it.dispose(),Ke.dispose(),J.dispose(),J.removeEventListener(`sessionstart`,gt),J.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),ke(`WebGLRenderer: Context Lost.`),A=!0}function ct(){ke(`WebGLRenderer: Context Restored.`),A=!1;let e=Ve.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Ve.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),H.remove(e)}function ft(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=We.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Me()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh)if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,n),e.side=0,e.needsUpdate=!0,wt(e,t,n),e.side=2):wt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),w=G.get(n),w.init(t),D.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];pt(a,n,e),r.add(a)}else pt(t,n,e),r.add(t)}),w=D.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){H.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Sn;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,J.setAnimationLoop(e),e===null?vt.stop():vt.start()},J.addEventListener(`sessionstart`,gt),J.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;j!==null&&j.renderStart(e,t);let n=J.enabled===!0&&J.isPresenting===!0,r=O!==null&&(N===null||n)&&O.begin(k,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(t),t=J.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,N),w=G.get(e,D.length),w.init(t),w.state.textureUnits=U.getTextureUnits(),D.push(w),L.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(L,ot,t.reversedDepth),we=this.localClippingEnabled,Ce=K.init(this.clippingPlanes,we),C=Je.get(e,T.length),C.init(),T.push(C),J.enabled===!0&&J.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,k.sortObjects)}yt(e,t,0,k.sortObjects),C.finish(),k.sortObjects===!0&&C.sort(ge,_e,t.reversedDepth),R=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,R&&Ze.addToRenderList(C,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&K.beginShadows();let i=w.state.shadowsArray;if(Xe.render(i,e,t),Ce===!0&&K.endShadows(),(r&&O.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}R&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(C,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),R&&Ze.render(e),bt(C,e,t)}N!==null&&ie===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),r&&O.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),rt.resetDefaultState(),ae=-1,P=null,D.pop(),D.length>0?(w=D[D.length-1],U.setTextureUnits(w.state.textureUnits),Ce===!0&&K.setGlobalState(k.clippingPlanes,w.state.camera)):w=null,T.pop(),C=T.length>0?T[T.length-1]:null,j!==null&&j.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)w.pushLightProbeGrid(e);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Se.intersectsSprite(e)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(L);let t=W.update(e),i=e.material;i.visible&&C.push(e,t,i,n,Oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Se.intersectsObject(e))){let t=W.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(L)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&C.push(e,t,s,n,Oe.z,o)}}else i.visible&&C.push(e,t,i,n,Oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),Ce===!0&&K.setGlobalState(k.clippingPlanes,n),r&&B.viewport(oe.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new Ne(1,1,{generateMipmaps:!0,type:e?ve:ce,minFilter:De,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(ue),de=k.getClearAlpha(),de<1&&k.setClearColor(16777215,.5),k.clear(),R&&Ze.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),Ce===!0&&K.setGlobalState(k.clippingPlanes,r),St(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(ue,de),d!==void 0&&(r.viewport=d),k.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=Ae);let r=H.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ke.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,k),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=K.uniform),Et(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=w.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=hi.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=Ae),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?k.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Le.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=w.state.lights;if(Ce===!0&&(we===!0||e!==P)){let t=e===P&&r.id===ae;K.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==K.numPlanes||v.numIntersection!==K.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=w.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,x,v));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==ae&&(ae=r.id,C=!0),v.needsLights){let e=Dt(w.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||P!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Te.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,C=!0,T=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,U),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,U),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,U)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,U),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,U),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,U));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Ia()),C){if(E.setValue(z,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&kt(D,T),a&&r.fog===!0&&qe.refreshFogUniforms(D,a),qe.refreshMaterialUniforms(D,r,he,me,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}hi.upload(z,Tt(v),D,U)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(hi.upload(z,Tt(v),D,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),se.copy(e.scissor),F=e.scissorTest,B.viewport(oe),B.scissor(se),B.setScissorTest(F),ae=-1;return}if(o.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(o.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),se.copy(e.scissor),F=e.scissorTest}else oe.copy(ye).multiplyScalar(he).floor(),se.copy(be).multiplyScalar(he).floor(),F=xe;if(n!==0&&(r=M),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(oe),B.scissor(se),B.setScissorTest(F),i){let r=H.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}ae=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=N===null?null:H.get(N).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0);let f=N===null?null:H.get(N).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await pe(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(U.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,te),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){re=0,ie=0,N=null,B.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ot}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),t.unpackColorSpace=Le._getUnpackColorSpace()}},Ra=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness===void 0?.003:t.defaultThickness,r=new V().fromArray(t.defaultColor===void 0?[0,0,0]:t.defaultColor),i=t.defaultAlpha===void 0?1:t.defaultAlpha,a=t.defaultKeepAlive!==void 0&&t.defaultKeepAlive,o={},s={},c={},l={outlineThickness:{value:n},outlineColor:{value:r},outlineAlpha:{value:i}},u=[`#include <common>`,`#include <uv_pars_vertex>`,`#include <displacementmap_pars_vertex>`,`#include <fog_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <logdepthbuf_pars_vertex>`,`#include <clipping_planes_pars_vertex>`,`uniform float outlineThickness;`,`vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {`,`	float thickness = outlineThickness;`,`	const float ratio = 1.0;`,`	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );`,`	vec4 norm = normalize( pos - pos2 );`,`	return pos + norm * thickness * pos.w * ratio;`,`}`,`void main() {`,`	#include <uv_vertex>`,`	#include <beginnormal_vertex>`,`	#include <morphnormal_vertex>`,`	#include <skinbase_vertex>`,`	#include <skinnormal_vertex>`,`	#include <begin_vertex>`,`	#include <morphtarget_vertex>`,`	#include <skinning_vertex>`,`	#include <displacementmap_vertex>`,`	#include <project_vertex>`,`	vec3 outlineNormal = - objectNormal;`,`	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );`,`	#include <logdepthbuf_vertex>`,`	#include <clipping_planes_vertex>`,`	#include <fog_vertex>`,`}`].join(`
`),d=[`#include <common>`,`#include <fog_pars_fragment>`,`#include <logdepthbuf_pars_fragment>`,`#include <clipping_planes_pars_fragment>`,`uniform vec3 outlineColor;`,`uniform float outlineAlpha;`,`void main() {`,`	#include <clipping_planes_fragment>`,`	#include <logdepthbuf_fragment>`,`	gl_FragColor = vec4( outlineColor, outlineAlpha );`,`	#include <tonemapping_fragment>`,`	#include <colorspace_fragment>`,`	#include <fog_fragment>`,`	#include <premultiplied_alpha_fragment>`,`}`].join(`
`);function f(){return new F({type:`OutlineEffect`,uniforms:Ce.merge([Z.fog,Z.displacementmap,l]),vertexShader:u,fragmentShader:d,side:1})}function p(e){let t=o[e.uuid];return t===void 0&&(t={material:f(),used:!0,keepAlive:a,count:0},o[e.uuid]=t),t.used=!0,t.material}function m(e){let t=p(e);return s[t.uuid]=e,b(t,e),t}function h(e){let t=e.geometry,n=t!==void 0&&t.attributes.normal!==void 0;return e.isMesh===!0&&e.material!==void 0&&n===!0}function g(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=m(e.material[t]);else e.material=m(e.material);c[e.uuid]=e.onBeforeRender,e.onBeforeRender=v}}function _(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=s[e.material[t].uuid];else e.material=s[e.material.uuid];e.onBeforeRender=c[e.uuid]}}function v(e,t,n,r,i){let a=s[i.uuid];a!==void 0&&y(i,a)}function y(e,t){let n=t.userData.outlineParameters;e.uniforms.outlineAlpha.value=t.opacity,n!==void 0&&(n.thickness!==void 0&&(e.uniforms.outlineThickness.value=n.thickness),n.color!==void 0&&e.uniforms.outlineColor.value.fromArray(n.color),n.alpha!==void 0&&(e.uniforms.outlineAlpha.value=n.alpha)),t.displacementMap&&(e.uniforms.displacementMap.value=t.displacementMap,e.uniforms.displacementScale.value=t.displacementScale,e.uniforms.displacementBias.value=t.displacementBias)}function b(e,t){if(e.name===`invisible`)return;let n=t.userData.outlineParameters;e.fog=t.fog,e.toneMapped=t.toneMapped,e.premultipliedAlpha=t.premultipliedAlpha,e.displacementMap=t.displacementMap,n===void 0?(e.transparent=t.transparent,e.visible=t.visible):(e.visible=t.visible===!1?!1:n.visible===void 0||n.visible,e.transparent=n.alpha!==void 0&&n.alpha<1||t.transparent,n.keepAlive!==void 0&&(o[t.uuid].keepAlive=n.keepAlive)),(t.wireframe===!0||t.depthTest===!1)&&(e.visible=!1),t.clippingPlanes&&(e.clipping=!0,e.clippingPlanes=t.clippingPlanes,e.clipIntersection=t.clipIntersection,e.clipShadows=t.clipShadows),e.version=t.version}function x(){let e;e=Object.keys(s);for(let t=0,n=e.length;t<n;t++)s[e[t]]=void 0;e=Object.keys(c);for(let t=0,n=e.length;t<n;t++)c[e[t]]=void 0;e=Object.keys(o);for(let t=0,n=e.length;t<n;t++){let n=e[t];o[n].used===!1?(o[n].count++,o[n].keepAlive===!1&&o[n].count>60&&delete o[n]):(o[n].used=!1,o[n].count=0)}}this.render=function(t,n){if(this.enabled===!1){e.render(t,n);return}let r=e.autoClear;e.autoClear=this.autoClear,e.render(t,n),e.autoClear=r,this.renderOutline(t,n)},this.renderOutline=function(t,n){let r=e.autoClear,i=t.matrixWorldAutoUpdate,a=t.background,o=e.shadowMap.enabled;t.matrixWorldAutoUpdate=!1,t.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,t.traverse(g),e.render(t,n),t.traverse(_),x(),t.matrixWorldAutoUpdate=i,t.background=a,e.autoClear=r,e.shadowMap.enabled=o},this.setSize=function(t,n){e.setSize(t,n)}}},za=`human-resources.frontend`;function Ba(){return{colourVariant:{machines:0,ancients:0},overlayVisible:!0,cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}}function Va(e=typeof window>`u`?void 0:window.localStorage){let t=Ba();try{let n=e?.getItem(za);if(!n)return t;let r=JSON.parse(n),i=e=>+(e===1);return{colourVariant:{machines:i(r.colourVariant?.machines),ancients:i(r.colourVariant?.ancients)},overlayVisible:r.overlayVisible!==!1,cityLighting:r.cityLighting!==!1,enhancedShadows:r.enhancedShadows!==!1,ambientOcclusion:r.ambientOcclusion===!0}}catch{return t}}function Ha(e,t=typeof window>`u`?void 0:window.localStorage){try{t?.setItem(za,JSON.stringify(e))}catch{}}function Ua(n){return n.winner?n.winner===n.playerFaction?{title:`VICTORY`,body:`The ${e[t(n.winner)].name} Harbinger is destroyed. The shard is yours.`,tone:`won`}:{title:`DEFEAT`,body:`Your Harbinger is destroyed. The ${e[n.winner].name} hold the shard.`,tone:`lost`}:{title:`STALEMATE`,body:`Both Harbingers fell on the same step. Neither side can command what is left.`,tone:`drawn`}}function Wa(e,t,n){if(t<1)throw Error(`A dialog needs at least one action`);return(e+n+t)%t}var Ga=[[`Pan`,`WASD / arrows · middle drag`],[`Zoom`,`wheel`],[`Select · box select`,`left drag`],[`Move order`,`right click`],[`Attack-move`,`A, then left click`],[`Add to selection`,`shift + click`],[`Control group`,`shift + digit`],[`Clear selection · exit`,`Esc`],[`Stop`,`Q`],[`Destroy selected units`,`Delete`],[`Select idle harvesters`,`F`],[`Center on Harbinger`,`C`],[`Quick save · load`,`F5 · F9`]],Ka=class{root;constructor(e,t,n){lo(),this.root=Xa(`SETTINGS`);let r=Q(`div`,`fe-body`);r.append(Za(`Machines colour`,`Recolours Machine units and structures. Applies to your next match.`,Qa(`machines`,t.colourVariant.machines,n.onColourVariant)),Za(`Ancients colour`,`Recolours Ancient units and structures. Applies to your next match.`,Qa(`ancients`,t.colourVariant.ancients,n.onColourVariant)),Za(`Diagnostic overlay`,`fps, sim Hz, blocked and stalled counts, nav reachability probe.`,eo(t.overlayVisible,n.onToggleOverlay)),Za(`City lighting`,`Warm directional sunlight and cool ambient fill. Off restores the original even lighting rig.`,eo(t.cityLighting,n.onToggleCityLighting)),Za(`Enhanced shadows`,`Soft mapped shadows on city geometry. Off restores the original projected-shadow treatment.`,eo(t.enhancedShadows,n.onToggleEnhancedShadows)),Za(`Ambient occlusion`,`Subtle local darkening at building bases and in narrow city gaps.`,eo(t.ambientOcclusion,n.onToggleAmbientOcclusion)));let i=Q(`section`,`fe-section`),a=Q(`div`,`fe-row-title`);a.textContent=`Controls`;let o=Q(`div`,`fe-row-sub`);o.textContent=`Reference only. Rebinding needs an options system that does not exist yet.`;let s=Q(`div`,`fe-controls`);for(let[e,t]of Ga){let n=Q(`div`,`fe-control`),r=Q(`span`,``);r.textContent=e;let i=Q(`span`,`fe-keys`);i.textContent=t,n.append(r,i),s.append(n)}i.append(a,o,s),r.append(i),this.root.append(r,so(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},qa=class{root;constructor(e,t,n){lo(),this.root=Xa(`SELECT SAVE`,t.length===1?`1 SLOT`:`${t.length} SLOTS`);let r=Q(`div`,`fe-slots`);if(t.length===0){let e=Q(`div`,`fe-empty`);e.textContent=`No saved matches`,r.append(e)}t.forEach((e,t)=>r.append(no(e,t===0,n)));let i=Q(`p`,`fe-note`);i.textContent=`One slot for now: F5 always writes “quick”. Naming and multiple slots need a keyed-slot scheme in saveStore.ts — the envelope in sim/save.ts does not need to change.`,this.root.append(r,i,so(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},Ja=class{root;onKey;constructor(e,t,n){lo(),this.root=Q(`div`,`fe-scrim`);let r=Q(`div`,`fe-dialog`),i=Q(`h2`,`fe-dialog-title`);i.textContent=`ABANDON MATCH?`;let a=Q(`p`,`fe-dialog-body`);a.textContent=`Returns to the title screen. The match is not saved unless you save it first.`;let o=Q(`p`,`fe-dialog-meta`);o.textContent=t?`Last quick save: ${t}`:`No quick save in this session.`;let s=Q(`div`,`fe-dialog-actions`),c=[oo(`Save and exit`,`primary`,n.onSaveAndExit),oo(`Exit anyway`,`danger`,n.onExitAnyway),oo(`Cancel`,`ghost`,n.onCancel)];s.append(...c),r.append(i,a,o,s),this.root.append(r),e.append(this.root);let l=c.length-1,u=(e,t=!1)=>{c[l]?.classList.remove(`selected`),l=e;let n=c[l];if(!n)throw Error(`Exit confirmation has no selected action`);n.classList.add(`selected`),t&&n.focus({preventScroll:!0})};for(let[e,t]of c.entries())t.addEventListener(`pointerenter`,()=>u(e)),t.addEventListener(`focus`,()=>u(e));u(l,!0),this.onKey=e=>{e.key===`ArrowLeft`||e.key===`ArrowRight`?(e.preventDefault(),u(Wa(l,c.length,e.key===`ArrowLeft`?-1:1),!0)):e.key===`Enter`?(e.preventDefault(),e.repeat||c[l]?.click()):e.key===`Escape`&&(e.preventDefault(),n.onCancel())},window.addEventListener(`keydown`,this.onKey)}dispose(){window.removeEventListener(`keydown`,this.onKey),this.root.remove()}},Ya=class{root;constructor(e,t,n){lo(),this.root=Q(`div`,`fe-scrim`);let r=Ua(t),i=Q(`div`,r.tone===`drawn`?`fe-dialog`:`fe-dialog ${r.tone}`),a=Q(`div`,`fe-end-head`),o=Q(`h2`,`fe-dialog-title fe-end-title`);o.textContent=r.title,a.append(o);let s=Q(`p`,`fe-dialog-body`);s.textContent=r.body;let c=Q(`div`,`fe-dialog-actions`);c.append(oo(`Play again`,`primary`,n.onPlayAgain),oo(`Back to menu`,`ghost`,n.onBackToMenu)),i.append(a,s,c),this.root.append(i),e.append(this.root)}dispose(){this.root.remove()}};function Q(e,t){let n=document.createElement(e);return n.className=t,n}function Xa(e,t=``){let n=Q(`div`,`fe`),r=Q(`div`,`fe-head`),i=document.createElement(`h1`);if(i.className=`menu-title fe-title`,i.textContent=e,r.append(i),t){let e=Q(`span`,`fe-head-meta`);e.textContent=t,r.append(e)}return n.append(r),n}function Za(e,t,n){let r=Q(`div`,`fe-row`),i=Q(`div`,``),a=Q(`div`,`fe-row-title`);a.textContent=e;let o=Q(`div`,`fe-row-sub`);return o.textContent=t,i.append(a,o),r.append(i,n),r}function Qa(t,n,r){let i=Q(`div`,`fe-swatches`);return bt(t).forEach((a,o)=>{let s=o,c=document.createElement(`button`);c.type=`button`,c.className=n===s?`fe-swatch on`:`fe-swatch`,c.style.setProperty(`--swatch-colour`,$a(a)),c.setAttribute(`aria-label`,`${e[t].name} colour option ${o+1}`),c.addEventListener(`click`,()=>{r(t,s);for(let e of i.children)e.classList.toggle(`on`,e===c)}),i.append(c)}),i}function $a(e){return`#${e.toString(16).padStart(6,`0`)}`}function eo(e,t){let n=document.createElement(`button`);return n.type=`button`,n.setAttribute(`role`,`switch`),to(n,e),n.append(Q(`span`,`fe-switch-knob`)),n.addEventListener(`click`,()=>{let e=n.getAttribute(`aria-checked`)!==`true`;t(e),to(n,e)}),n}function to(e,t){e.className=t?`fe-switch on`:`fe-switch`,e.setAttribute(`aria-checked`,String(t))}function no(t,n,r){let i=Q(`div`,t.readable?n?`fe-slot primary`:`fe-slot`:`fe-slot broken`),a=Q(`div`,`fe-slot-badge`);t.readable&&t.faction?(a.dataset.faction=t.faction,a.style.setProperty(`--badge-line`,s[t.faction].line),a.append(io(t.faction))):a.textContent=`!`;let o=Q(`div`,`fe-slot-text`),c=Q(`div`,`fe-slot-name`);c.textContent=t.readable&&t.faction?`${e[t.faction].name} — ${t.slot}`:`Unreadable — ${t.slot}`;let l=Q(`div`,`fe-slot-meta`);return l.textContent=t.readable?`${t.clock} · tick ${t.tick.toLocaleString(`en-GB`)} · saved ${ao(t.savedAtMs)}`:`Written by an older build. Old versions are refused, not migrated.`,o.append(c,l),i.append(a,o),t.readable&&i.append(oo(`Load`,n?`primary`:`ghost`,()=>r.onLoad(t.slot))),i.append(ro(()=>r.onDelete(t.slot))),i}function ro(e){let t=document.createElement(`button`);t.type=`button`,t.className=`fe-button icon`,t.title=`Delete this save`,t.textContent=`×`;let n=!1,r=()=>{n&&(n=!1,t.classList.remove(`armed`),t.textContent=`×`,t.title=`Delete this save`)};return t.addEventListener(`click`,()=>{if(n){e();return}n=!0,t.classList.add(`armed`),t.textContent=`Delete?`,t.title=`Click again to delete`}),t.addEventListener(`pointerleave`,r),t.addEventListener(`blur`,r),t}function io(e){let t=s[e],n=t.primaryIcon,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,`44`),r.setAttribute(`height`,`44`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function ao(e){let t=Math.max(0,Math.round((Date.now()-e)/1e3));if(t<60)return`just now`;let n=Math.round(t/60);if(n<60)return`${n} minute${n===1?``:`s`} ago`;let r=Math.round(n/60);if(r<24)return`${r} hour${r===1?``:`s`} ago`;let i=Math.round(r/24);return i===1?`yesterday`:`${i} days ago`}function oo(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`fe-button ${t}`,r.textContent=e,r.addEventListener(`click`,n),r}function so(e){let t=Q(`div`,`fe-footer`);return t.append(oo(`Back`,`ghost`,e)),t}var co=!1;function lo(){if(co)return;co=!0;let e=document.createElement(`style`);e.textContent=a+uo,document.head.append(e)}var uo=`
.fe {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: clamp(40px, 8vh, 88px) clamp(32px, 7.8vw, 150px);
  box-sizing: border-box;
  overflow-y: auto;
}
.fe > * { position: relative; z-index: 1; }
.fe-head { display: flex; align-items: baseline; justify-content: space-between; gap: 24px; }
.fe-title { font-size: clamp(40px, 5.4vw, 104px); }
.fe-head-meta { font-size: 15px; letter-spacing: 0.14em; color: rgba(255, 207, 154, 0.55); }

.fe-body { display: flex; flex-direction: column; max-width: 900px; }
.fe-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  padding: 26px 0;
  border-top: 1px solid rgba(255, 189, 82, 0.3);
}
.fe-row-title { font-size: 28px; color: #fffdf7; }
.fe-row-sub { margin-top: 6px; max-width: 460px; font-size: 17px; line-height: 1.45; color: rgba(255, 207, 154, 0.6); }
.fe-section { padding: 26px 0 0; border-top: 1px solid rgba(255, 189, 82, 0.3); }
.fe-controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 9px 60px; margin-top: 18px; }
.fe-control { display: flex; justify-content: space-between; gap: 16px; font-size: 19px; color: #f2e7d8; }
.fe-keys { font-family: ui-monospace, Menlo, monospace; font-size: 17px; color: #ffbd52; }

.fe-swatches { display: flex; align-items: center; gap: 16px; flex: none; }
.fe-swatch {
  width: 52px;
  height: 52px;
  cursor: pointer;
  background: var(--swatch-colour);
  border: 2px solid rgba(255, 226, 195, 0.35);
  border-radius: 50%;
}
.fe-swatch:hover, .fe-swatch:focus-visible { border-color: rgba(255, 226, 195, 0.85); outline: none; }
.fe-swatch.on { border-color: #fffdf7; box-shadow: 0 0 0 3px rgba(255, 253, 247, 0.3); }

.fe-switch {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 88px;
  height: 42px;
  padding: 0 5px;
  cursor: pointer;
  background: transparent;
  border: 2px solid rgba(255, 226, 195, 0.5);
  border-radius: 21px;
}
.fe-switch.on { justify-content: flex-end; background: #ffbd52; border-color: #ffe2ad; }
.fe-switch-knob { width: 30px; height: 30px; border-radius: 50%; background: rgba(255, 226, 195, 0.6); }
.fe-switch.on .fe-switch-knob { background: #1b1005; }

.fe-slots { display: flex; flex-direction: column; gap: 14px; }
.fe-slot {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 22px 26px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 189, 82, 0.3);
}
.fe-slot.primary { background: rgba(255, 189, 82, 0.1); border: 2px solid #ffbd52; }
.fe-slot.broken { background: transparent; border: 1px dashed rgba(230, 72, 61, 0.55); opacity: 0.8; }
.fe-slot-badge {
  flex: none;
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  font-size: 44px;
  color: #e6483d;
  border: 1px solid rgba(230, 72, 61, 0.6);
}
/* The badge is the faction's own chrome, so a slot is identifiable before its label is read. */
.fe-slot-badge[data-faction="machines"] {
  color: inherit;
  background: rgba(20, 26, 24, 0.8);
  border: 2px solid var(--badge-line);
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
}
/*
 * The skin's opaque plate, not its translucent band — the same decision menu.ts records for the
 * Ancient card. On this black ground the translucent grey composites dark, which inverts the one
 * distinction the two-skin system rests on, and the scroll icon is drawn to sit on light gold.
 */
.fe-slot-badge[data-faction="ancients"] {
  color: inherit;
  background: #d7c193;
  border: 4px solid var(--badge-line);
  border-radius: 14px;
}
.fe-slot-text { flex: 1; display: flex; flex-direction: column; gap: 6px; }
.fe-slot-name { font-size: 34px; color: #fffdf7; }
.fe-slot-meta { font-family: ui-monospace, Menlo, monospace; font-size: 19px; color: rgba(255, 207, 154, 0.7); }
.fe-empty { padding: 40px 0; font-size: 21px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255, 226, 195, 0.5); }
.fe-note { max-width: 900px; margin: 0; padding: 14px 18px; border-left: 3px solid #ffbd52; font-size: 17px; line-height: 1.5; color: rgba(255, 207, 154, 0.7); }

.fe-footer { display: flex; justify-content: flex-end; margin-top: auto; padding-top: 26px; }

.fe-button {
  padding: 14px 38px;
  cursor: pointer;
  font-family: inherit;
  font-size: 22px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid rgba(255, 189, 82, 0.5);
  color: #ffe2ad;
}
.fe-button:hover, .fe-button:focus-visible, .fe-button.selected { border-color: #ffbd52; color: #fffdf7; outline: none; }
.fe-button.primary { background: #ffbd52; border-color: #ffe2ad; color: #1b1005; font-weight: 700; }
.fe-button.primary:hover, .fe-button.primary.selected { background: #ffd188; color: #1b1005; }
.fe-button.danger { border-color: rgba(230, 72, 61, 0.8); color: #f0938b; }
.fe-button.danger:hover, .fe-button.danger.selected { background: rgba(230, 72, 61, 0.15); border-color: #e6483d; color: #fff; }
.fe-button.ghost { }
.fe-button.icon { flex: none; width: 52px; height: 52px; padding: 0; font-size: 24px; border-width: 1px; border-color: rgba(255, 226, 195, 0.35); }
.fe-button.icon:hover { border-color: #e6483d; color: #e6483d; }
/* Armed: wide enough for the word, and unmistakably the destructive one. */
.fe-button.icon.armed {
  width: auto;
  padding: 0 18px;
  font-size: 15px;
  background: rgba(230, 72, 61, 0.18);
  border-color: #e6483d;
  color: #ffd6d1;
}

.fe-scrim {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  background: rgba(11, 6, 3, 0.72);
  font-family: "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif;
}
.fe-dialog { width: 400px; max-width: calc(100% - 48px); padding: 22px 24px 18px; background: rgba(18, 12, 8, 0.94); border: 2px solid #ffbd52; }
.fe-dialog-title {
  margin: 0 0 10px;
  font-size: 21px;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #fffdf7;
  text-shadow: -2px 2px 0 #f2600f, -4px 4px 0 #cd4909, -6px 6px 0 #8f2d05;
}
.fe-dialog-body { margin: 0 0 4px; font-size: 13px; line-height: 1.55; color: #f2e7d8; }
.fe-dialog-meta { margin: 0 0 18px; font-size: 11.5px; line-height: 1.5; color: rgba(255, 226, 195, 0.6); }
.fe-dialog-actions { display: flex; gap: 9px; }
.fe-dialog-actions .fe-button { flex: 1; padding: 10px 0; font-size: 12.5px; letter-spacing: 0.1em; }
.fe-dialog-actions .fe-button.ghost { flex: 0 0 88px; }

/*
 * The end dialog is tinted only at its border: the result is already stated in large type, and a
 * full colour wash over the board behind it would be the third thing on screen competing to say
 * the same word.
 */
.fe-dialog.won { border-color: #ffbd52; }
.fe-dialog.lost { border-color: #e6483d; }
.fe-end-head .fe-dialog-title { margin-bottom: 14px; }
.fe-end-title { font-size: 46px; line-height: 0.95; letter-spacing: 0.06em; }
.fe-end-head + .fe-dialog-body { margin-bottom: 18px; }
`,fo=`/HumanResourcesLowPoly/assets/unicorn2-DCXXqZCr.stl`,po=11777712,mo=7830134,ho=.55,go=.18;function _o(e){let t=e|0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function vo(e){return _o(e)/4294967295}function yo(e,t,n){let r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=t.x*a.x+t.y*a.y-n,c=t.x*o.x+t.y*o.y-n,l=s<=1e-7,u=c<=1e-7;if(l&&r.push(a),l!==u){let e=s/(s-c);r.push({x:a.x+(o.x-a.x)*e,y:a.y+(o.y-a.y)*e})}}return r}function bo(e,t=3,n=1){let r=Math.max(.18,n),i=Math.max(1,Math.round(Math.sqrt(t*r))),a=Math.ceil(t/i),o=Array.from({length:t},(t,n)=>{let o=n%i,s=Math.floor(n/i);return{x:((o+.5+(vo(e+n*31)-.5)*.68)/i-.5)*r,y:(s+.5+(vo(e+n*37)-.5)*.68)/a-.5}});return o.map((e,t)=>{let n=[{x:-r/2,y:-.5},{x:r/2,y:-.5},{x:r/2,y:.5},{x:-r/2,y:.5}];for(let r=0;r<o.length&&n.length>=3;r++){if(r===t)continue;let i=o[r],a={x:i.x-e.x,y:i.y-e.y};n=yo(n,a,(i.x**2+i.y**2-e.x**2-e.y**2)/2)}return n.map(e=>({x:e.x/r,y:e.y}))}).filter(e=>e.length>=3)}function xo(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=a.x*o.y-o.x*a.y;t+=s,n+=(a.x+o.x)*s,r+=(a.y+o.y)*s}return Math.abs(t)<1e-8?e.reduce((t,n)=>({x:t.x+n.x/e.length,y:t.y+n.y/e.length}),{x:0,y:0}):{x:n/(3*t),y:r/(3*t)}}function So(e,t=xo(e)){let n=new yt,r=e[0];if(!r)return new J;n.moveTo(r.x-t.x,r.y-t.y);for(let r=1;r<e.length;r++){let i=e[r];n.lineTo(i.x-t.x,i.y-t.y)}n.closePath();let i=new N(n,{depth:1,steps:1,bevelEnabled:!1,curveSegments:1});return i.translate(0,0,-.5),i.computeVertexNormals(),i}function Co(e){let t=[{x:(vo(e+3)-.5)*.12,y:-.5},{x:(vo(e+7)-.5)*.2,y:-.17},{x:(vo(e+11)-.5)*.2,y:.16},{x:(vo(e+17)-.5)*.12,y:.5}];return[So([{x:-.5,y:-.5},...t,{x:-.5,y:.5}],{x:0,y:0}),So([t[0],{x:.5,y:-.5},{x:.5,y:.5},...t.slice(1).reverse()],{x:0,y:0})]}function wo(e){let t=[-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,...Array.from({length:4},(t,n)=>({x:(n===0||n===3?-.5:.5)+(vo(e+n*11)-.5)*.16,y:.42+vo(e+n*17)*.16,z:(n<2?-.5:.5)+(vo(e+n*23)-.5)*.16})).flatMap(e=>[e.x,e.y,e.z])],n=new J;return n.setAttribute(`position`,new T(t,3)),n.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,5,1,0,4,5,1,6,2,1,5,6,2,7,3,2,6,7,3,4,0,3,7,4]),n.computeVertexNormals(),n}function To(e,t,n=!0){let r=t.length>=3?t:[{x:-.5,y:-.5},{x:.5,y:-.5},{x:.5,y:.5},{x:-.5,y:.5}],i=xo(r),a=r.flatMap((t,a)=>{let o=r[(a+1)%r.length],s=(t,r)=>{let a=n?1.06+vo(e+r)*.16:1;return{x:i.x+(t.x-i.x)*a,y:i.y+(t.y-i.y)*a}};return[0,1,2].map(e=>s({x:t.x+(o.x-t.x)*e/3,y:t.y+(o.y-t.y)*e/3},a*29+e*7))}),o=[],s=[];for(let e of a)o.push(e.x,0,e.y);let c=o.length/3;for(let t=0;t<a.length;t++){let n=a[t],r=.34+vo(e+t*29)*.13;o.push(i.x+(n.x-i.x)*r,.62+vo(e+t*31)*.36,i.y+(n.y-i.y)*r)}for(let e=0;e<a.length;e++){let t=(e+1)%a.length;s.push(e,c+t,t,e,c+e,c+t)}for(let e=1;e<a.length-1;e++)s.push(c,c+e+1,c+e);let l=new J;return l.setAttribute(`position`,new T(o,3)),l.setIndex(s),l.computeVertexNormals(),l}function Eo(e){return!e.clip||e.clip.length<3?[{x:-.5,y:-.5},{x:.5,y:-.5},{x:.5,y:.5},{x:-.5,y:.5}]:e.clip.map(t=>{let n=Lt({x:t.x-e.x,z:t.z-e.z},-(e.rotation??0));return{x:n.x/e.width,y:n.z/e.depth}})}function Do(e){if(e.health<=0)return 2;let t=1-e.health/zt(e);return Math.max(0,Math.min(2,Math.floor((t+1e-6)*2)))}function Oo(e){let t=Do(e);return t===0?e.height:t===2?Math.max(3,e.height*go):e.height*ho}function ko(e){return Do(e)===2?0:Oo(e)}var Ao=new Set,jo=class{city;group=new h;exterior;markers;concrete;rubble;heatmapMarkers;rubbleHeatmapMarkers;entries=new Map;matrix=new Be;marker=new Be;fromPosition=new q;toPosition=new q;fromRotation=new ue;toRotation=new ue;fromScale=new q;toScale=new q;markerPosition=new q;markerRotation=new ue;markerScale=new q;heatmapMatrix=new Be;constructor(e,t){this.city=e;let n=this.capacityFor(e);this.markers=this.batch(n.markers,n.markers*64,n.markers*200,16777215,`destroyed-facade-edge-markers`,{side:1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.markers.castShadow=!0,this.markers.receiveShadow=!1,this.exterior=this.batch(n.exterior,n.exterior*64,n.exterior*200,16777215,`destroyed-facades`),this.exterior.castShadow=!1,this.concrete=this.batch(n.concrete,n.concrete*64,n.concrete*200,16777215,`destroyed-concrete`),this.concrete.castShadow=!1,this.rubble=this.batch(n.rubble,n.rubble*64,n.rubble*200,16777215,`destroyed-rubble`),this.rubble.castShadow=!1,this.group.add(this.markers,this.exterior,this.concrete,this.rubble);for(let n of e.buildings)this.build(n,t(n));this.syncDamage(0,!0),this.heatmapMarkers=this.markers.clone(),this.heatmapMarkers.name=`destroyed-heatmap-parts`,this.heatmapMarkers.material=new L({transparent:!0,opacity:.78,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.heatmapMarkers.castShadow=!1,this.heatmapMarkers.receiveShadow=!1,this.heatmapMarkers.frustumCulled=!1,this.heatmapMarkers.renderOrder=1,this.rubbleHeatmapMarkers=this.markers.clone(),this.rubbleHeatmapMarkers.name=`destroyed-rubble-heatmap`,this.rubbleHeatmapMarkers.material=new L({transparent:!0,opacity:.46,depthWrite:!1,depthTest:!1,side:2}),this.rubbleHeatmapMarkers.castShadow=!1,this.rubbleHeatmapMarkers.receiveShadow=!1,this.rubbleHeatmapMarkers.frustumCulled=!1,this.rubbleHeatmapMarkers.renderOrder=2}batch(e,t,n,r,i,a={}){let o=new Te(e,t,n,Tt(r,a));return o.name=i,o.frustumCulled=!1,o.sortObjects=!1,o.castShadow=!0,o.receiveShadow=!0,o.userData.preserveShadowFlags=!0,o}capacityFor(e){let t=0,n=0;for(let r of e.buildings){let e=(r.clip&&r.clip.length>=3?r.clip.length:4)*3;n+=e,t+=e+7}let r=Math.max(e.buildings.length,1);return{markers:Math.max(t,1),exterior:Math.max(n,1),concrete:r*6,rubble:r}}add(e,t,n,r,i=!1){t.index||t.setIndex(Array.from({length:t.getAttribute(`position`).count},(e,t)=>t)),t.getAttribute(`uv`)||t.setAttribute(`uv`,new T(t.getAttribute(`position`).count*2,2));let a=e.addGeometry(t);t.dispose();let o=e.addInstance(a);return e.setMatrixAt(o,n),e.setColorAt(o,new V(r)),e.setVisibleAt(o,i),o}transform(e,t,n){return this.matrix.compose(e,new ue().setFromEuler(new f(t.x,t.y,t.z)),n).clone()}buildingMatrix(e,t,n=new q,r=new q(1,1,1)){let i=Lt({x:t.x,z:t.z},e.rotation??0);return this.transform(new q(e.x+i.x,Y+t.y,e.z+i.z),new q(n.x,-(e.rotation??0)+n.y,n.z),r)}build(e,t){let n=[],r=[],i=[],a=Math.max(.65,Math.min(e.width,e.depth)*.045),o=e.clip&&e.clip.length>=3?e.clip.map((t,n)=>[t,e.clip[(n+1)%e.clip.length]]):this.rectangleEdges(e),s=0;for(let[r,i]of o){let o=i.x-r.x,c=i.z-r.z,l=Math.hypot(o,c),u=bo(e.id*733+s*389,3,l/e.height);for(let d of u){let u=xo(d),f=new q((r.x+i.x)/2,0,(r.z+i.z)/2),p=o/l,m=c/l,h=new q(f.x+p*u.x*l,(u.y+.5)*e.height,f.z+m*u.x*l),g=this.transform(h.setY(Y+h.y),new q(0,-Math.atan2(c,o),0),new q(l,e.height,a)),_=e.height*.16,v=Math.min(...d.map(e=>e.y-u.y))*_,y=this.transform(new q(h.x,Y-v,h.z),new q(0,-Math.atan2(c,o),0),new q(l*.7,_,a*1.35)),b=So(d,u),x=b.clone(),S=!e.clip||this.geometryIsOnShard(b,y)&&this.geometryIsOnShard(b,this.markerMatrix(y)),C=this.add(this.exterior,b,g,t),w=this.add(this.markers,x,this.markerMatrix(g),this.markerColor(t));n.push({id:C,markerId:w,batch:`exterior`,home:g,rubble:y,rubbleSafe:S}),s++}}let c=e.district===`residential`?3:e.district===`commercial`?5:7,l=Math.max(.5,Math.min(e.width,e.depth)*.035),u=Math.floor(c/3),d=Eo(e);for(let t=0;t<1;t++){let n=e.clip&&e.clip.length>=3?So(d,{x:0,y:0}):Co(e.id*173+u*41)[t],i=n.clone(),a=this.buildingMatrix(e,new q(0,(u+1)/(c+1)*e.height,0),new q(Math.PI/2,0,0),new q(e.width*.76,e.depth*.73,l)),o=this.add(this.concrete,n,a,po),s=this.add(this.markers,i,this.markerMatrix(a),this.markerColor(po));r.push({id:o,markerId:s,batch:`concrete`,home:a})}let f=this.buildingMatrix(e,new q(0,e.height*.45,0),new q,new q(e.width*.25,e.height*.9,e.depth*.23)),p=this.buildingMatrix(e,new q(0,Math.max(e.height*.035,.8),0),new q,new q(e.width*.25,e.height*.06,e.depth*.23)),m=wo(e.id+1280),h=m.clone(),g=!e.clip||this.geometryIsOnShard(m,p),_=this.add(this.concrete,m,f,mo),v=this.add(this.markers,h,this.markerMatrix(f),this.markerColor(mo));i.push({id:_,markerId:v,home:f,final:p,rubbleSafe:g});for(let[t,n]of[[-.25,-.23],[.25,-.23],[.25,.23],[-.25,.23]]){let r={x:e.width*t,z:e.depth*n};if(e.clip&&!Kt(e.x+Lt(r,e.rotation??0).x,e.z+Lt(r,e.rotation??0).z,e.clip))continue;let a=this.buildingMatrix(e,new q(r.x,e.height*.42,r.z),new q,new q(Math.max(.9,Math.min(e.width,e.depth)*.065),e.height*.84,Math.max(.9,Math.min(e.width,e.depth)*.065))),o=this.buildingMatrix(e,new q(r.x,Math.max(.8,e.height*(.035+vo(e.id+t*100)*.025)),r.z),new q,new q(Math.max(.9,Math.min(e.width,e.depth)*.065),e.height*.07,Math.max(.9,Math.min(e.width,e.depth)*.065))),s=wo(e.id+i.length*29),c=s.clone(),l=!e.clip||this.geometryIsOnShard(s,o),u=this.add(this.concrete,s,a,mo),d=this.add(this.markers,c,this.markerMatrix(a),this.markerColor(mo));i.push({id:u,markerId:d,home:a,final:o,rubbleSafe:l})}let y=this.buildingMatrix(e,new q(0,.05,0),new q,new q(e.width,Math.max(1,Math.min(e.width,e.depth)*.13),e.depth)),b=!!(e.clip&&e.clip.length>=3),x=To(e.id,Eo(e),!b),S=x.clone(),C=y.clone().scale(new q(1,.58,1)),w={id:this.add(this.rubble,x,y,t),markerId:this.add(this.markers,S,b?y:this.markerMatrix(y),this.markerColor(t)),visible:!e.clip||e.clip.length>=3,home:y,damaged:C,edgeClipped:b};this.entries.set(e.id,{phase:-1,shell:n,floors:r,fragments:[...n,...r],structure:i,mound:w})}rectangleEdges(e){let t=e.width/2,n=e.depth/2,r=[[-t,-n],[t,-n],[t,n],[-t,n]].map(([t,n])=>{let r=Lt({x:t,z:n},e.rotation??0);return{x:e.x+r.x,z:e.z+r.z}});return r.map((e,t)=>[e,r[(t+1)%r.length]])}geometryIsOnShard(e,t){let n=e.getAttribute(`position`),r=new q;for(let e=0;e<n.count;e++)if(r.fromBufferAttribute(n,e).applyMatrix4(t),!this.city.containsPoint(r.x,r.z))return!1;return!0}syncDamage(e,t=!1){let n=!1,r=!1,i;for(let e of this.city.buildings){let t=this.entries.get(e.id);if(!t)continue;let a=Do(e);if(a!==t.phase){t.phase=a,n=!0,(i??=new Set).add(e.id);for(let[n,i]of t.fragments.entries())this.setFragment(i,this.fragmentVisible(e,t,i,n,a),a===2),r=!0;for(let[n,i]of t.structure.entries()){let t=this.structureVisible(e,i,n,a),o=this.structuralMatrix(i,a);this.concrete.setVisibleAt(i.id,t),this.concrete.setMatrixAt(i.id,o),this.markers.setVisibleAt(i.markerId,t),this.markers.setMatrixAt(i.markerId,this.markerMatrix(o)),r=!0}let o=a===2?t.mound.home:t.mound.damaged;this.rubble.setVisibleAt(t.mound.id,a>0&&t.mound.visible),this.rubble.setMatrixAt(t.mound.id,o),this.markers.setVisibleAt(t.mound.markerId,a>0&&t.mound.visible),this.markers.setMatrixAt(t.mound.markerId,t.mound.edgeClipped?o:this.markerMatrix(o))}}return{phaseChanged:n,transformsChanged:r,changedIds:i??Ao}}fragmentVisible(e,t,n,r,i){let a=r>=t.shell.length,o=t.shell.length+e.id%t.floors.length,s=e.district===`downtown`?3:4,c=a&&i>=s&&r!==o,l=e.id%t.shell.length,u=Math.floor(vo(e.id*811+47)*t.shell.length),d=!a&&n.rubbleSafe!==!1&&(r===l||r===u),f=i===2&&!d,p=.35*Math.min(1,i/1),m=i<=1?0:.35+.3*(i-1)/1,h=!a&&i<2&&vo(e.id*997+r*37)<Math.max(p,m);return i>0&&!c&&!h&&!f}setFragment(e,t,n=!1){let r=e.batch===`concrete`?this.concrete:this.exterior;r.setVisibleAt(e.id,t),e.markerId!==void 0&&this.markers.setVisibleAt(e.markerId,t);let i=n&&e.rubble?e.rubble:e.home;r.setMatrixAt(e.id,i),e.markerId!==void 0&&this.markers.setMatrixAt(e.markerId,this.markerMatrix(i))}markerMatrix(e){return e.decompose(this.markerPosition,this.markerRotation,this.markerScale),this.markerScale.multiplyScalar(1.018),this.markerScale.z*=1.04/1.018,this.marker.compose(this.markerPosition,this.markerRotation,this.markerScale)}markerColor(e){return new V(e).multiplyScalar(.24).getHex()}structureVisible(e,t,n,r){if(r===0)return!1;if(n===0)return r<2||t.rubbleSafe;let i=Math.max(0,4-Math.ceil(r*4/2));return(n-1+e.id)%4<i&&(r<2||t.rubbleSafe)}structuralMatrix(e,t){if(t<=0)return e.home;if(t>=2)return e.final;e.home.decompose(this.fromPosition,this.fromRotation,this.fromScale),e.final.decompose(this.toPosition,this.toRotation,this.toScale);let n=Math.sqrt(t/2);return this.matrix.compose(this.fromPosition.lerp(this.toPosition,n),this.fromRotation.slerp(this.toRotation,n),this.fromScale.lerp(this.toScale,n))}phaseOf(e){return this.entries.get(e)?.phase??0}get heatmapSources(){return[this.heatmapMarkers,this.rubbleHeatmapMarkers]}syncHeatmap(e){for(let[t,n]of this.entries){let r=e.get(t),i=(e,t,n)=>{this.heatmapMarkers.setVisibleAt(e,r!==void 0&&this.markers.getVisibleAt(e)),t.getMatrixAt(n,this.heatmapMatrix),this.heatmapMarkers.setMatrixAt(e,this.heatmapMatrix),r!==void 0&&this.heatmapMarkers.setColorAt(e,new V(r))};for(let e of n.fragments)e.markerId!==void 0&&i(e.markerId,e.batch===`concrete`?this.concrete:this.exterior,e.id);for(let e of n.structure)i(e.markerId,this.concrete,e.id);i(n.mound.markerId,this.rubble,n.mound.id)}}syncRubbleHeatmap(e){for(let[t,n]of this.entries){let r=e.has(t)&&n.phase===2&&this.markers.getVisibleAt(n.mound.markerId);this.rubbleHeatmapMarkers.setVisibleAt(n.mound.markerId,r),this.rubble.getMatrixAt(n.mound.id,this.heatmapMatrix),this.rubbleHeatmapMarkers.setMatrixAt(n.mound.markerId,this.heatmapMatrix),r&&this.rubbleHeatmapMarkers.setColorAt(n.mound.markerId,new V(672498));for(let e of n.fragments)e.markerId!==void 0&&this.rubbleHeatmapMarkers.setVisibleAt(e.markerId,!1);for(let e of n.structure)this.rubbleHeatmapMarkers.setVisibleAt(e.markerId,!1)}}get meshCount(){return 4}dispose(){this.heatmapMarkers.dispose(),this.rubbleHeatmapMarkers.dispose(),this.markers.dispose(),this.exterior.dispose(),this.concrete.dispose(),this.rubble.dispose();for(let e of[this.markers,this.exterior,this.concrete,this.rubble])e.material.dispose()}},Mo=[9521734,5731979,4672333,5405816,12167306,7897170,7957373],No=3425875,Po=13936950,Fo=14278100,Io=2964817,Lo=12077637,Ro=4288160,zo=.1125,Bo=class{box=new R(1,1,1);wedge=Wo();materials=new Map;local=new Be;root=new Be;scale=new q;position=new q;identity=new ue;sideways=new Be().makeRotationY(Math.PI/2);describe(e){let t=Uo(e),n=Ho(t),r=.92+t()*.16,i=.95+t()*.1,a=.96+t()*.08,o=(t()-.5)*.18,s=Mo[e.paletteIndex%Mo.length]??Mo[0],c=Vo[n],l=4.875*c.length*r,u=2.1*c.width*i,d=1.775*c.bodyHeight,f=d/2,p=1.775*c.cabinHeight*a,m=l*c.cabinLength,h=u*c.cabinWidth,g=d+p/2-.02,_=[{kind:`body`,size:[l,d,u],position:[0,f,0],color:n===`taxi`?Po:n===`police`?Fo:s},{kind:`cabin`,size:[m,p,h],position:[l*(c.cabinForward+o),g,0],color:No}];if(n===`truck`){let e=l*.43;_.push({kind:`cargo`,size:[e,d*2.45,u*.9],position:[-l*.24,d*1.225,0],color:s})}if(n===`taxi`&&_.push({kind:`taxi-sign`,size:[.45,.18,.42],position:[l*.03,d+p+.08,0],color:15851409}),n===`police`){let e=d+p+.06;_.push({kind:`police-body-dark`,size:[l*.3,d*.72,u*1.01],position:[-l*.31,d*.58,0],color:Io},{kind:`police-bar-red`,size:[.28,.12,.48],position:[l*.02,e,-.25],color:Lo},{kind:`police-bar-blue`,size:[.28,.12,.48],position:[l*.02,e,.25],color:Ro})}return{type:n,parts:_}}create(e){let t=e.map(e=>({car:e,vehicle:this.describe(e)})),n=new Map;for(let{vehicle:e}of t)for(let t of e.parts){let e=this.key(t);n.set(e,(n.get(e)??0)+1)}let r=new Map,i=new h;i.name=`cars`;for(let[e,t]of n){let[n,a]=e.split(`:`),o=new M(n===`cabin`?this.wedge:this.box,this.material(Number(a)),t);o.name=`cars-${n}`,o.frustumCulled=!1,o.castShadow=!0,o.receiveShadow=!0,r.set(e,o),i.add(o)}let a=new Map;for(let{car:e,vehicle:n}of t){this.root.makeRotationY(-(e.rotation??0)),e.alongX||this.root.multiply(this.sideways),this.root.setPosition(e.x,(e.parked?Y:1)+zo,e.z);for(let e of n.parts){let t=this.key(e),n=a.get(t)??0,i=r.get(t);i&&(this.scale.set(...e.size),this.local.compose(this.position.set(...e.position),this.identity,this.scale),this.local.premultiply(this.root),i.setMatrixAt(n,this.local),a.set(t,n+1))}}for(let e of r.values())e.instanceMatrix.needsUpdate=!0;return i}dispose(){this.box.dispose(),this.wedge.dispose();for(let e of this.materials.values())e.dispose();this.materials.clear()}key(e){return`${e.kind}:${e.color}`}material(e){let t=this.materials.get(e);return t||(t=Tt(e),this.materials.set(e,t)),t}},Vo={compact:{length:.85,width:.95,bodyHeight:.3,cabinLength:.48,cabinWidth:.72,cabinHeight:.43,cabinForward:.02},sedan:{length:1,width:1,bodyHeight:.28,cabinLength:.52,cabinWidth:.75,cabinHeight:.37,cabinForward:.08},suv:{length:.95,width:1.05,bodyHeight:.34,cabinLength:.58,cabinWidth:.8,cabinHeight:.52,cabinForward:.02},van:{length:1.1,width:1,bodyHeight:.32,cabinLength:.68,cabinWidth:.82,cabinHeight:.57,cabinForward:-.05},truck:{length:1.65,width:1.05,bodyHeight:.32,cabinLength:.27,cabinWidth:.78,cabinHeight:.43,cabinForward:.31},taxi:{length:1,width:1,bodyHeight:.28,cabinLength:.52,cabinWidth:.75,cabinHeight:.37,cabinForward:.08},police:{length:1,width:1,bodyHeight:.28,cabinLength:.52,cabinWidth:.75,cabinHeight:.37,cabinForward:.08}};function Ho(e){let t=e();return t<.35?`sedan`:t<.6?`compact`:t<.75?`suv`:t<.9?`van`:t<.97?`truck`:t<.99?e()<.5?`taxi`:`police`:`sedan`}function Uo(e){let t=Math.imul(Math.round(e.x*16),2654435761)^Math.imul(Math.round(e.z*16),2246822507);return t^=Math.imul(e.paletteIndex+1,3266489909),t^=e.parked?668265261:374761393,t^=e.alongX?0:2135587861,()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Wo(){let e=new Float32Array([-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,.5,.12,-.5,.5,.12,.5,-.5,.5,.5]),t=[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5],n=new J;return n.setAttribute(`position`,new W(e,3)),n.setIndex(t),n.computeVertexNormals(),n}function Go(e){let t=e.length,n=[];for(let r=0;r<t;r++){let i=e[r],a=e[(r+1)%t];for(let o=r+2;o<t;o++){if(r===0&&o===t-1)continue;let s=e[o],c=e[(o+1)%t];fn(i,a,s,c)&&n.push([r,o])}}return n}function Ko(e,t,n=30){let r=t.length,i=t.slice();for(let t=0;t<n;t++){let t=Go(i);if(t.length===0)break;let n=Array(r).fill(1);for(let[e,i]of t)n[e]*=.7,n[(e+1)%r]*=.7,n[i]*=.7,n[(i+1)%r]*=.7;i=i.map((t,r)=>n[r]===1?t:Ot(e[r],t,n[r]))}return i}function qo(e,t){let n=e.length;if(t<=0||n===0)return e.slice();let r=Array(n);for(let i=0;i<n;i++){let a=0,o=0;for(let r=-t;r<=t;r++){let s=t+1-Math.abs(r);a+=e[((i+r)%n+n)%n]*s,o+=s}r[i]=a/o}return r}var Jo={seed:99537374,maxRimSpacing:30,ringCount:5,totalDepth:340,cliffFraction:.4,insetPower:1.6,maxInset:180,chunkCountMin:24,chunkCountMax:30,chunkInsetVariation:.55,chunkProtrusion:75,noiseFrequency:8,noiseStrength:.35,anchorCount:5,anchorPull:.6,anchorJitter:.55,seamNoiseFrequency:3,seamSnapDistance:60},Yo=.26,Xo=.11;function Zo(e,t){return e/Math.max(1,t)*3}function Qo(e,t,n=[]){let r=$o(e,t.maxRimSpacing),i=r.length,a=Nt(r),o=r.map(e=>Math.hypot(e.x-a.x,e.z-a.z)),s=Math.max(...o,1),c=Math.max(o.reduce((e,t)=>e+t,0)/Math.max(o.length,1),1),l=Math.min(t.maxInset,c*Yo),u=Math.min(t.chunkProtrusion,c*Xo),d=new on(t.seed>>>0),f=ts(i,t,d),p=rs(f,i),m=is(e,a,s,t,d),h=i/f.length,g=Math.max(1,Math.round(h/2)),_=qo(p.map(e=>f[e].insetBias),g),v=qo(p.map(e=>f[e].protrusion),g),y=es(r,a),b=g*2,x=qo(y.map(e=>e.x),b),S=qo(y.map(e=>e.z),b),C=x.map((e,t)=>Pt({x:e,z:S[t]})),w=n.length?r.map(e=>{let r;for(let i of n){let n=qt(e.x,e.z,i.path);!n||n.distance>=t.seamSnapDistance||r&&n.distance>=r.distance||(r={seam:i,crackT:n.t,feather:It(1-n.distance/t.seamSnapDistance),distance:n.distance})}return r}):void 0,T=Math.max(1,Math.floor(t.ringCount)),E=[];for(let e=0;e<=T;e++){let n=e/T,o=n===0?0:-t.totalDepth*n,s=It((n-t.cliffFraction)/Math.max(1e-6,1-t.cliffFraction))**+Math.max(.01,t.insetPower),c=t.anchorPull<=0?0:t.anchorPull*It((n-t.cliffFraction)/Math.max(1e-6,1-t.cliffFraction)),d=[];for(let o=0;o<i;o++){let f=r[o],p=C[o],h=Gt(o/i*t.noiseFrequency,e*.6+11,t.seed^2654435769),g=l*s*(1+_[o]*t.chunkInsetVariation),y=Math.max(0,g*(1+h*t.noiseStrength)),b=Math.sin(n*Math.PI),x=v[o]*u*b,S=w?.[o],T=S?S.seam.sign*Gt(S.crackT*t.seamNoiseFrequency,7.3,S.seam.seed)*Math.sin(S.crackT*Math.PI)*u*b:0,E=S?x+(T-x)*S.feather:x,D=p;if(c>0){let e=as(f,m);e&&(D=Pt(Ot(p,Pt({x:e.x-f.x,z:e.z-f.z}),c)))}let O=Math.hypot(f.x-a.x,f.z-a.z),k=Math.min(y-E,O*.85);d.push({x:f.x+D.x*k,z:f.z+D.z*k})}E.push({index:e,t:n,y:o,points:Ko(r,d)})}return{perimeter:r,rings:E,chunks:f,anchors:m}}function $o(e,t){let n=e.length;if(n<2)return e.map(e=>({...e}));let r=Math.max(.001,t),i=[];for(let t=0;t<n;t++){let a=e[t],o=e[(t+1)%n];i.push({x:a.x,z:a.z});let s=Math.hypot(o.x-a.x,o.z-a.z),c=Math.ceil(s/r);for(let e=1;e<c;e++){let t=e/c;i.push({x:a.x+(o.x-a.x)*t,z:a.z+(o.z-a.z)*t})}}return i}function es(e,t){let n=e.length;return e.map((r,i)=>{let a=e[(i-1+n)%n],o=e[(i+1)%n],s={x:o.x-a.x,z:o.z-a.z},c=Pt({x:-s.z,z:s.x}),l={x:t.x-r.x,z:t.z-r.z};return c.x*l.x+c.z*l.z>=0?c:{x:-c.x,z:-c.z}})}function ts(e,t,n){let r=Math.max(1,Math.min(t.chunkCountMax,Math.round(n.range(t.chunkCountMin,t.chunkCountMax+1)))),i=Math.max(1,Math.min(r,e)),a=Array.from({length:i},()=>n.range(.4,1)),o=a.reduce((e,t)=>e+t,0),s=[],c=0;for(let t=0;t<i;t++){let r=i-t-1,l=e-c,u=Math.max(1,Math.round(a[t]/o*e)),d=r===0?l:Math.min(u,l-r);s.push({startIndex:c,length:d,insetBias:n.range(-1,1),protrusion:ns(n),colourVariant:n.next()}),c+=d}return s}function ns(e){let t=e.next();return t<.35?0:t<.675?e.range(.3,1):-e.range(.15,.5)}function rs(e,t){let n=Array(t).fill(e.length-1);return e.forEach((e,r)=>{for(let i=e.startIndex;i<e.startIndex+e.length&&i<t;i++)n[i]=r}),n}function is(e,t,n,r,i){let a=[];for(let o=0;o<Math.max(1,Math.floor(r.anchorCount));o++){let o=i.range(0,Math.PI*2),s=n*r.anchorJitter*Math.sqrt(i.next()),c={x:t.x+Math.cos(o)*s,z:t.z+Math.sin(o)*s};for(let n=0;n<6&&!Kt(c.x,c.z,e);n++)c={x:(c.x+t.x)/2,z:(c.z+t.z)/2};a.push(c)}return a}function as(e,t){let n,r=1/0;for(let i of t){let t=Math.hypot(i.x-e.x,i.z-e.z);t<r&&(r=t,n=i)}return n}function os(e){let t=2166136261;for(let n of e)t=Math.imul(t^Math.round(n.x*16),16777619),t=Math.imul(t^Math.round(n.z*16),16777619);return t>>>0}function ss(e,t,n){return{...n,seed:os(e),ringCount:t===0?n.ringCount:3,totalDepth:t===0?n.totalDepth:Zo(n.totalDepth,n.ringCount)}}function cs(e){let t=new Map,n=(e,n)=>{let r=t.get(e);r?r.push(n):t.set(e,[n])};for(let t of e){let e=os(t.path),[r,i]=t.surfaces;n(r,{path:t.path,sign:1,seed:e}),n(i,{path:t.path.map(e=>({x:e.x+t.offset.x,z:e.z+t.offset.z})),sign:-1,seed:e})}return t}function ls(e){let t=[],{perimeter:n,rings:r}=e;ms(t,`top`,0,0,r[0].points,0,!1);for(let e=0;e<r.length-1;e++){let i=r[e],a=r[e+1],o=(i.t+a.t)/2;for(let r=0;r<n.length;r++){let s=(r+1)%n.length,c={x:i.points[r].x,y:i.y,z:i.points[r].z},l={x:i.points[s].x,y:i.y,z:i.points[s].z},u={x:a.points[s].x,y:a.y,z:a.points[s].z},d={x:a.points[r].x,y:a.y,z:a.points[r].z},f=(r+e)%2==0?[[c,l,u],[c,u,d]]:[[c,l,d],[l,u,d]];for(let[n,r,i]of f)t.push({kind:`band`,ring:e,t:o,points:[n,r,i]})}}let i=r[r.length-1];return ms(t,`floor`,r.length-1,1,i.points,i.y,!0),t}function us(e,t){let n=[],r=[];for(let i of ls(e)){let e=i.kind===`band`?t.bandColour(i.t):i.kind===`floor`?t.floorColour:t.topColour;if(e)for(let a of fs(i.points,t.crop).parts)ps(n,r,a[0],a[1],a[2],e)}let i=new J;return i.setAttribute(`position`,new W(new Float32Array(n),3)),i.setAttribute(`color`,new W(new Float32Array(r),3)),i.computeVertexNormals(),i}function ds(e,t){let n=[];for(let r of ls(e)){if(r.kind!==`band`)continue;let e=fs(r.points,t).cutEdge;e&&n.push({ring:r.ring,a:e[0],b:e[1]})}return n}function fs(e,t){if(!t)return{parts:[e],cutEdge:void 0};let n=e=>t.keep*(e.x*t.normal.x+e.z*t.normal.z-t.offset),r=[n(e[0]),n(e[1]),n(e[2])],i=e=>Math.abs(e)<=1e-9;if(r[0]>=0&&r[1]>=0&&r[2]>=0){let t=e.filter((e,t)=>i(r[t]));return{parts:[e],cutEdge:t.length===2?[t[0],t[1]]:void 0}}if(r[0]<=0&&r[1]<=0&&r[2]<=0)return{parts:[],cutEdge:void 0};let a=[];for(let t=0;t<3;t++){let n=e[t],i=e[(t+1)%3],o=r[t],s=r[(t+1)%3];if(o>=0&&a.push(n),o>0&&s<0||o<0&&s>0){let e=o/(o-s),t={x:n.x+(i.x-n.x)*e,y:n.y+(i.y-n.y)*e,z:n.z+(i.z-n.z)*e};a.push(t)}}if(a.length<3)return{parts:[],cutEdge:void 0};let o=[];for(let e=1;e+1<a.length;e++)o.push([a[0],a[e],a[e+1]]);let s=a.filter(e=>i(n(e)));return{parts:o,cutEdge:s.length===2?[s[0],s[1]]:void 0}}function ps(e,t,n,r,i,a){e.push(n.x,n.y,n.z,r.x,r.y,r.z,i.x,i.y,i.z);for(let e=0;e<3;e++)t.push(a.r,a.g,a.b)}function ms(e,t,n,r,i,a,o){if(i.length<3)return;let s=i.map(e=>new K(e.x,e.z));for(let i of ye.triangulateShape(s,[])){let c=i[0],l=i[1],u=i[2];if(c===void 0||l===void 0||u===void 0)continue;let d=s[c],f=s[l],p=s[u],[m,h,g]=(f.x-d.x)*(p.y-d.y)-(f.y-d.y)*(p.x-d.x)>0===o?[d,f,p]:[d,p,f];e.push({kind:t,ring:n,t:r,points:[{x:m.x,y:a,z:m.y},{x:h.x,y:a,z:h.y},{x:g.x,y:a,z:g.y}]})}}function hs(e,t){let n=_s(e,t);if(n.length===0)return;let r=[];for(let e of n)Ss(e,r);if(r.length===0)return;let i=new Cs(r,t).tessellate(r),a=i.facets,{crop:o,outward:s,bias:c}=t,l=gs(o.normal),u=s.x*o.normal.x+s.z*o.normal.z>=0,d=[],f=[];for(let e of a){let{points:t,colour:n}=e,r=(t[1].s-t[0].s)*(t[2].y-t[0].y)-(t[1].y-t[0].y)*(t[2].s-t[0].s)>=0===u?t:[t[0],t[2],t[1]];for(let e of r)d.push(o.normal.x*o.offset+l.x*e.s+s.x*c,e.y,o.normal.z*o.offset+l.z*e.s+s.z*c),f.push(n.r,n.g,n.b)}let p=new J;return p.setAttribute(`position`,new W(new Float32Array(d),3)),p.setAttribute(`color`,new W(new Float32Array(f),3)),p.userData.heatCellCount=i.cellCount,p.computeVertexNormals(),p}function gs(e){return{x:e.z,z:-e.x}}function _s(e,t){let{crop:n}=t,r=gs(n.normal),i=e=>({s:e.x*r.x+e.z*r.z,y:e.y}),a=new Map;for(let t of ds(e,n)){let e=a.get(t.ring),n=[i(t.a),i(t.b)];e?e.push(n):a.set(t.ring,[n])}let o=[],s=[];for(let[t,n]of[...a.entries()].sort((e,t)=>e[0]-t[0])){if(!e.rings[t]||!e.rings[t+1])continue;let r=xs(n),i=[];for(let e of r){let t=e[0],n=e[e.length-1];if(bs(t,n)){o.push(e.slice(0,-1));continue}Math.abs(t.y-n.y)<vs?o.push(e):i.push(t.y>n.y?e:[...e].reverse())}i.sort((e,t)=>e[0].s-t[0].s);for(let e=0;e+1<i.length;e+=2){let n=i[e],r=i[e+1];o.push([...n,...[...r].reverse()]),t===0&&s.push([n[0].s,r[0].s])}}if(t.topY>0)for(let[e,n]of s)o.push([{s:e,y:0},{s:e,y:t.topY},{s:n,y:t.topY},{s:n,y:0}]);return o}var vs=1e-6,ys=1e-4;function bs(e,t){return Math.abs(e.s-t.s)<=ys&&Math.abs(e.y-t.y)<=ys}function xs(e){let t=Array(e.length).fill(!1),n=[];for(let r=0;r<e.length;r++){if(t[r])continue;t[r]=!0;let i=[e[r][0],e[r][1]];for(let n=!0;n;){n=!1;for(let r=0;r<e.length;r++){if(t[r])continue;let[a,o]=e[r],s=i[0],c=i[i.length-1];if(bs(c,a))i.push(o);else if(bs(c,o))i.push(a);else if(bs(s,a))i.unshift(o);else if(bs(s,o))i.unshift(a);else continue;t[r]=!0,n=!0}}n.push(i)}return n}function Ss(e,t){if(e.length<3)return;let n=e.map(e=>new K(e.s,e.y));for(let r of ye.triangulateShape(n,[])){let n=r[0],i=r[1],a=r[2];if(n===void 0||i===void 0||a===void 0)continue;let o=e[n],s=e[i],c=e[a];o&&s&&c&&t.push([o,s,c])}}var Cs=class{options;cells;constructor(e,t){this.options=t;let n=1/0,r=-1/0,i=1/0,a=-1/0;for(let t of e)for(let e of t)n=Math.min(n,e.s),r=Math.max(r,e.s),i=Math.min(i,e.y),a=Math.max(a,e.y);let o=Math.max(1,Math.min(t.cellSizeMin,t.cellSizeMax)),s=Math.max(o,t.cellSizeMin,t.cellSizeMax),c=(o+s)/2,l=Math.max(1,Math.max(Math.abs(r-t.hotAt),Math.abs(t.hotAt-n))),u=new on(t.seed),d=ws(n,r,o,s,u),f=ws(i,a,o,s,u),p=[],m=Ds(t.cellJitter),h=Math.max(.25,t.noiseScale);for(let e of f)for(let n of d){let r=(n.start+n.end)/2+u.range(-.5,.5)*n.size*m,i=(e.start+e.end)/2+u.range(-.5,.5)*e.size*m,a=Math.max(0,1-Math.abs(r-t.hotAt)/l)**+Math.max(.05,t.falloffPower),o=Gt(r/(c*h),i/(c*h),t.seed),s=t.heatFloor+a*t.longitudinalHeat+o*t.noiseStrength;p.push({s:r,y:i,colour:this.ramp(Ds(s))})}let g=p.map(e=>({x:e.s,z:e.y})),_={points:[{x:n,z:i},{x:r,z:i},{x:r,z:a},{x:n,z:a}],tags:[-1,-1,-1,-1]};this.cells=Bt(g,_).flatMap((e,t)=>{let n=p[t];return n&&e.points.length>=3?[{seed:n,points:e.points,bounds:Ts(e.points.map(e=>({s:e.x,y:e.z})))}]:[]})}tessellate(e){let t=[],n=0,r=e.map(e=>({points:e,polygon:e.map(e=>({x:e.s,z:e.y})),bounds:Ts(e)}));for(let e of this.cells){let i=!1;for(let n of r){if(!Es(e.bounds,n.bounds))continue;let r=Ht(e.points,n.polygon);if(r.length<3||Jt(r)<=1e-6)continue;i=!0;let a={s:r[0].x,y:r[0].z};for(let n=1;n+1<r.length;n++){let i={s:r[n].x,y:r[n].z},o={s:r[n+1].x,y:r[n+1].z},s=(i.s-a.s)*(o.y-a.y)-(i.y-a.y)*(o.s-a.s);Math.abs(s)>1e-8&&t.push({points:[a,i,o],colour:e.seed.colour})}}i&&n++}return{facets:t,cellCount:n}}ramp(e){let t=[...this.options.palette].reverse(),n=e*(t.length-1),r=Math.min(t.length-2,Math.floor(n));return new V(t[r]).lerp(new V(t[r+1]),n-r)}};function ws(e,t,n,r,i){let a=[];for(let o=e;o<t;){let e=i.range(n,r);a.push({start:o,end:o+e,size:e}),o+=e}return a.length>0?a:[{start:e,end:e+n,size:n}]}function Ts(e){let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let a of e)t=Math.min(t,a.s),n=Math.max(n,a.s),r=Math.min(r,a.y),i=Math.max(i,a.y);return{minS:t,maxS:n,minY:r,maxY:i}}function Es(e,t){return e.maxS>=t.minS&&t.maxS>=e.minS&&e.maxY>=t.minY&&t.maxY>=e.minY}function Ds(e){return e<0?0:e>1?1:e}var Os={emissiveColour:14836e3,emissiveIntensity:.35};function ks(e=Os){return Tt(16777215,{vertexColors:!0,emissive:e.emissiveColour,emissiveIntensity:e.emissiveIntensity})}var As=class extends Ke{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new se(this.manager);a.setPath(this.path),a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){function t(e){let t=new DataView(e);if(84+t.getUint32(80,!0)*50===t.byteLength)return!0;let r=[115,111,108,105,100];for(let e=0;e<5;e++)if(n(r,t,e))return!1;return!0}function n(e,t,n){for(let r=0,i=e.length;r<i;r++)if(e[r]!==t.getUint8(n+r))return!1;return!0}function r(e){let t=new DataView(e),n=t.getUint32(80,!0),r,i,a,o=!1,s,c,l,u,d;for(let e=0;e<70;e++)t.getUint32(e,!1)==1129270351&&t.getUint8(e+4)==82&&t.getUint8(e+5)==61&&(o=!0,s=new Float32Array(n*3*3),c=t.getUint8(e+6)/255,l=t.getUint8(e+7)/255,u=t.getUint8(e+8)/255,d=t.getUint8(e+9)/255);let f=new J,p=new Float32Array(n*3*3),m=new Float32Array(n*3*3),h=new V;for(let e=0;e<n;e++){let n=84+e*50,d=t.getFloat32(n,!0),f=t.getFloat32(n+4,!0),g=t.getFloat32(n+8,!0);if(o){let e=t.getUint16(n+48,!0);e&32768?(r=c,i=l,a=u):(r=(e&31)/31,i=(e>>5&31)/31,a=(e>>10&31)/31)}for(let c=1;c<=3;c++){let l=n+c*12,u=e*3*3+(c-1)*3;p[u]=t.getFloat32(l,!0),p[u+1]=t.getFloat32(l+4,!0),p[u+2]=t.getFloat32(l+8,!0),m[u]=d,m[u+1]=f,m[u+2]=g,o&&(h.setRGB(r,i,a,E),s[u]=h.r,s[u+1]=h.g,s[u+2]=h.b)}}return f.setAttribute(`position`,new W(p,3)),f.setAttribute(`normal`,new W(m,3)),o&&(f.setAttribute(`color`,new W(s,3)),f.hasColors=!0,f.alpha=d),f}function i(e){let t=new J,n=/solid([\s\S]*?)endsolid/g,r=/facet([\s\S]*?)endfacet/g,i=/solid\s(.+)/,a=0,o=RegExp(`vertex[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`,`g`),s=RegExp(`normal[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`,`g`),c=[],l=[],u=[],d=new q,f,p=0,m=0,h=0;for(;(f=n.exec(e))!==null;){m=h;let e=f[0],n=(f=i.exec(e))===null?``:f[1];for(u.push(n);(f=r.exec(e))!==null;){let e=0,t=0,n=f[0];for(;(f=s.exec(n))!==null;)d.x=parseFloat(f[1]),d.y=parseFloat(f[2]),d.z=parseFloat(f[3]),t++;for(;(f=o.exec(n))!==null;)c.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),l.push(d.x,d.y,d.z),e++,h++;t!==1&&console.error(`THREE.STLLoader: Something isn't right with the normal of face number `+a),e!==3&&console.error(`THREE.STLLoader: Something isn't right with the vertices of face number `+a),a++}let g=m,_=h-m;t.userData.groupNames=u,t.addGroup(g,_,p),p++}return t.setAttribute(`position`,new T(c,3)),t.setAttribute(`normal`,new T(l,3)),t}function a(e){return typeof e==`string`?e:new TextDecoder().decode(e)}function o(e){if(typeof e==`string`){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer||t}return e}let s=o(e);return t(s)?r(s):i(a(e))}},js=12830926,Ms=14069061;function Ns(){let e=new Map;return t=>{let n=e.get(t);return n||(n=new As().loadAsync(t),e.set(t,n)),n.then(e=>e.clone())}}function Ps(e){e.computeBoundingBox();let t=e.boundingBox;if(!t||t.isEmpty())throw Error(`STL landmark has empty bounds`);let n=t.max.z-t.min.z;if(n<=0)throw Error(`STL landmark must be Z-up with non-zero height`);return{min:t.min.clone(),max:t.max.clone(),centre:t.getCenter(new q),height:n}}function Fs(e,t,n){for(let r=0;r<3;r++){let i=t+r;n.push(e.getX(i),e.getY(i),e.getZ(i))}}function Is(e,t,n){let r=new q((e.getX(t)+e.getX(t+1)+e.getX(t+2))/3,(e.getY(t)+e.getY(t+1)+e.getY(t+2))/3,(e.getZ(t)+e.getZ(t+1)+e.getZ(t+2))/3),i=(r.x-n.min.x)/(n.max.x-n.min.x),a=(r.y-n.min.y)/(n.max.y-n.min.y),o=(r.z-n.min.z)/n.height;return o<.16||o>.84&&i>.27&&i<.62&&a<.52||o>.46&&o<.84&&i>.17&&i<.56&&a<.4}function Ls(e){let t=new J;return t.setAttribute(`position`,new W(new Float32Array(e),3)),t.computeVertexNormals(),t}function Rs(e){let t=Ps(e),n=e.getAttribute(`position`);if(!(n instanceof W)||n.count%3!=0)throw Error(`STL landmark must contain triangle positions`);let r=[],i=[];for(let e=0;e<n.count;e+=3)Fs(n,e,Is(n,e,t)?i:r);let a=new h;a.name=`park-unicorn-model`,a.rotation.x=-Math.PI/2,a.scale.setScalar(4/t.height);let o=new q(-t.centre.x,-t.centre.y,-t.min.z),s=(e,t,n)=>{if(t.length===0)return;let r=new B(Ls(t),Tt(n));r.name=e,r.position.copy(o),a.add(r)};return s(`park-unicorn-silver-body`,r,js),s(`park-unicorn-gold-accents`,i,Ms),a}var zs=[{facade:12823945,roof:11771002,trim:13416082,window:8942684,rooftop:10587760},{facade:12494723,roof:11244402,trim:13021069,window:8417113,rooftop:9995883},{facade:12165501,roof:10849645,trim:12757638,window:8219735,rooftop:9601128},{facade:13021324,roof:11573880,trim:13613463,window:9140319,rooftop:10521968},{facade:12099966,roof:10849902,trim:12692103,window:8351064,rooftop:9535593},{facade:12626310,roof:11376245,trim:13218446,window:8745820,rooftop:10127467},{facade:12955531,roof:11573624,trim:13547413,window:9008735,rooftop:10390383},{facade:12297344,roof:10981232,trim:12889481,window:8416857,rooftop:9732456},{facade:12626566,roof:11375988,trim:13218446,window:8679771,rooftop:9995883},{facade:13087117,roof:11705210,trim:13678999,window:9140318,rooftop:10587760},{facade:12034431,roof:10718317,trim:12626311,window:8219479,rooftop:9404007},{facade:12889480,roof:11573624,trim:13481618,window:9008477,rooftop:10455918},{facade:12231551,roof:10915696,trim:12823688,window:8416856,rooftop:9666921},{facade:12692102,roof:11376245,trim:13284238,window:8745563,rooftop:10193004},{facade:10650211,roof:8744276,trim:11178095,window:7298122,rooftop:7956047},{facade:9732202,roof:8284503,trim:10389616,window:7035981,rooftop:7693910},{facade:10129774,roof:8551006,trim:10787448,window:7366991,rooftop:8156510},{facade:8154970,roof:6774093,trim:8944228,window:6247752,rooftop:6643024},{facade:10840145,roof:8936778,trim:11368542,window:7492164,rooftop:8347727},{facade:12165220,roof:9994065,trim:12823152,window:7957324,rooftop:9271631}];function Bs(e){let t=Math.imul(e.id+1,2654435761)^Math.imul(e.paletteIndex+11,2246822507);return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,zs[(t>>>0)%zs.length]??zs[0]}var Vs={sky:12048612,skyHorizon:14872553,shardTop:10323041,cliff:[11100220,9260336,7289894],road:10659477,sidewalk:13027512,parking:10132878,laneMarking:14205527,laneDivider:14672082,crosswalk:14672082,park:8362574,tree:5204788,treeTrunk:7360569,rubble:12892060,hvac:13027512,shardCutFaceHot:16562494,shardCutFaceBright:16222498,shardCutFace:14836e3,shardCutFaceCooled:10965554},Hs=.8,Us=.2,Ws={cellSizeMin:30,cellSizeMax:90,cellJitter:.8,heatFloor:.42,longitudinalHeat:.22,falloffPower:.8,noiseStrength:.42,noiseScale:2.2},Gs=3,Ks=[13193033,14453311,14993749,7317084,5865395],qs=6,Js=1.05,Ys=.7,Xs=Math.PI/9;function Zs(e,t={}){return Tt(e,t)}function Qs(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.z-i.x*r.z}return t/2}function $s(e){return Qs(e)>=0?e:[...e].reverse()}function ec(e){let t=Vs.cliff,n=Math.max(0,Math.min(1,e))*(t.length-1),r=Math.min(t.length-2,Math.floor(n));return new V(t[r]).lerp(new V(t[r+1]),n-r)}function tc(e){let t=new R(1,1,1,1,e,1).toNonIndexed(),n=t.getAttribute(`position`),r=new Float32Array(n.count*3);for(let t=0;t<n.count;t+=3){let i=(n.getY(t)+n.getY(t+1)+n.getY(t+2))/3,a=Math.floor((i+.5)*e)%2==0?1:Hs;for(let e=0;e<3;e++)r[(t+e)*3]=a,r[(t+e)*3+1]=a,r[(t+e)*3+2]=a}return t.setAttribute(`color`,new W(r,3)),t}var nc=class{city;group;buildingMeshList=[];buildingHeatmapInstanceIdsByMesh=new Map;slots=new Map;vehicleFactory=new Bo;detailSlots=new Map;roofs;trims;windowBands;greebles;greebleStart=new Map;debris;matrix=new Be;color=new V;scale=new q;clipped;clippedState=``;landscaped;landscapedState=``;destruction;stlLoader;disposed=!1;constructor(e,t,n){this.city=e,this.group=t,this.stlLoader=n??(typeof document>`u`?void 0:Ns());for(let e of this.buildShardTops())this.group.add(e);for(let e of this.buildRock())this.group.add(e);this.group.add(this.buildPads(`built`,Vs.sidewalk,Y)),this.landscaped=this.buildLandscapedBuiltBlocks(),this.group.add(this.landscaped),this.group.add(this.buildPads(`parking`,Vs.parking,Y)),this.group.add(this.buildPads(`park`,Vs.sidewalk,Y)),this.group.add(this.buildParkland()),this.group.add(this.buildRoads());let r=this.buildStripes(this.city.centreLines,Vs.laneMarking,1.1);r.name=`centre-lines`,this.group.add(r);let i=this.buildStripes(this.city.laneLines,Vs.laneDivider,1.1);i.name=`lane-lines`,this.group.add(i);let a=this.buildStripes(this.city.crosswalks,Vs.crosswalk,1.1);a.name=`crosswalks`,this.group.add(a);let o=this.city.parkLandmark;this.group.add(this.buildParkRainbow(o)),this.group.add(this.buildParkUnicorn(o)),this.group.add(this.buildTrees()),this.group.add(this.buildCars());let s=new Map;for(let e of this.city.buildings){if(e.clip)continue;let t=Mt(e.height,e.district),n=s.get(t);n?n.push(e):s.set(t,[e])}for(let[e,t]of s){let n=new M(tc(e),Zs(16777215,{vertexColors:!0}),t.length);n.frustumCulled=!1,n.userData.storeys=e,this.buildingMeshList.push(n),this.buildingHeatmapInstanceIdsByMesh.set(n,t.map(e=>e.id)),this.group.add(n),t.forEach((e,t)=>this.slots.set(e.id,{mesh:n,index:t}))}let c=this.city.buildings.filter(e=>!e.clip);c.forEach((e,t)=>this.detailSlots.set(e.id,t)),this.roofs=new M(new R(1,1,1),Zs(16777215),Math.max(c.length,1)),this.roofs.name=`building-roofs`,this.roofs.frustumCulled=!1,this.buildingHeatmapInstanceIdsByMesh.set(this.roofs,c.map(e=>e.id)),this.trims=new M(new R(1,1,1),Zs(16777215),Math.max(c.length,1)),this.trims.name=`building-trims`,this.trims.frustumCulled=!1,this.windowBands=new M(new R(1,1,1),Zs(16777215),Math.max(c.length,1)),this.windowBands.name=`building-window-bands`,this.windowBands.frustumCulled=!1,this.group.add(this.trims,this.windowBands,this.roofs);let l=0;for(let t of e.buildings)this.greebleStart.set(t.id,l),l+=t.greebles;this.greebles=new M(new R(1,1,1),Zs(16777215),Math.max(l,1)),this.greebles.name=`rooftop-structures`,this.greebles.frustumCulled=!1,this.group.add(this.greebles),this.debris=new M(new R(1,1,1),Zs(Vs.rubble),Math.max(e.buildings.length*Gs,1)),this.debris.frustumCulled=!1,this.group.add(this.debris),this.destruction=new jo(this.city,e=>Bs(e).facade),this.group.add(this.destruction.group),this.refreshAll(),this.group.traverse(e=>{e.userData.preserveShadowFlags||(e.castShadow=!0,e.receiveShadow=!0)})}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof B))return;let n=t.material;Array.isArray(n)?n.forEach(t=>Ct(t,e)):Ct(n,e)})}buildShardTops(){return this.city.surfaces.map(({points:e,index:t})=>{let n=e[0];if(!n)throw Error(`city boundary is empty`);let r=new yt;r.moveTo(n.x,-n.z);for(let t=1;t<e.length;t++){let n=e[t];n&&r.lineTo(n.x,-n.z)}r.closePath();let i=new B(new g(r),Zs(Vs.shardTop));return i.rotation.x=-Math.PI/2,i.name=`shard-top-${t}`,i})}buildRock(){let e=cs(this.city.fractureSeams),t={...Jo,totalDepth:340},n=this.city.undersideCut;return this.city.surfaces.flatMap(({points:r,index:i})=>{let a=$s(n?n.boundary:r),o=Qo(a,ss(a,n?0:i,t),n?n.seams:e.get(i)),s=us(o,{bandColour:ec,floorColour:ec(1),...n?{crop:n.crop}:{}}),c=[];n&&s.translate(n.translation.x,0,n.translation.z);let l=new B(s,Zs(16777215,{vertexColors:!0}));l.name=`shard-underside-${i}`,c.push(l);let u=n?this.buildCutFace(o,n):void 0;return u&&c.push(u),c})}buildCutFace(e,t){let n=hs(e,{crop:t.crop,outward:t.outward,topY:Y,bias:Us,palette:[new V(Vs.shardCutFaceHot),new V(Vs.shardCutFaceBright),new V(Vs.shardCutFace),new V(Vs.shardCutFaceCooled)],hotAt:t.hotAt,...Ws,seed:t.faceSeed});if(!n)return;n.translate(t.translation.x,0,t.translation.z);let r=new B(n,ks());return r.name=`shard-cut-face`,r}polygonCentre(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}scaleFrom(e,t,n){return{x:t.x+(e.x-t.x)*n,z:t.z+(e.z-t.z)*n}}buildPads(e,t,n){let r=this.city.blocks.filter(t=>t.kind===e),i=r.map(e=>e.clip??this.rectPoints(e)),a=e===`park`?r.map(e=>{let t=this.parkGrassFootprint(e);return t.length>=3?[t]:[]}):void 0,o=new B(this.polygonsGeometry(i,0,n,a),Zs(t));return o.name=`${e}-pads`,o}buildParkland(){let e=this.city.blocks.filter(e=>e.kind===`park`).map(e=>this.parkGrassFootprint(e)).filter(e=>e.length>=3),t=new B(this.polygonsGeometry(e,0,Y),Zs(Vs.park));return t.name=`parkland`,t}buildParkRainbow(e){let t=new h;return t.name=`park-rainbow`,e?(t.position.set(e.x,Y,e.z),t.rotation.y=Math.PI/2,Ks.forEach((e,n)=>{let r=jt-n*Js,i=r-Js,a=new N(this.rainbowBandShape(r,i),{depth:Ys,steps:1,bevelEnabled:!1,curveSegments:1}),o=new B(a,Zs(e));o.name=`park-rainbow-band-${n}`,o.position.set(5,0,-.7/2),t.add(o)}),t):t}buildParkUnicorn(e){let t=new h;t.name=`park-unicorn`;let n=this.stlLoader;return!e||!n?t:(t.position.set(e.x,Y,e.z),Promise.resolve().then(()=>n(fo)).then(e=>{if(this.disposed){e.dispose();return}let n=Rs(e);e.dispose();let r=new h;r.name=`park-unicorn-pose`,r.position.set(10,0,0),r.rotation.y=Xs,r.add(n),n.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0}),t.add(r)}).catch(e=>{console.warn(`Unable to load park unicorn STL.`,e)}),t)}rainbowBandShape(e,t){let n=new yt;n.moveTo(-e,0);for(let t=1;t<=qs;t++){let r=Math.PI-Math.PI*t/qs;n.lineTo(Math.cos(r)*e,Math.sin(r)*e)}n.lineTo(t,0);for(let e=1;e<=qs;e++){let r=Math.PI*e/qs;n.lineTo(Math.cos(r)*t,Math.sin(r)*t)}return n.closePath(),n}buildLandscapedBuiltBlocks(){let e=[],t=this.city.buildings.filter(e=>e.state!==`rubble`);for(let n of this.city.blocks){if(n.kind!==`built`||n.district!==`downtown`||!n.innerClip||n.innerClip.length<3)continue;let r=this.triangulateGrass(n.innerClip),i=Ft(n.innerClip),a=t.filter(e=>{let t=an[e.state],n=Math.hypot(e.width*t/2+4,e.depth*t/2+4);return e.x+n>=i.x0&&e.x-n<=i.x1&&e.z+n>=i.z0&&e.z-n<=i.z1});for(let e of a)r=r.flatMap(t=>this.subtractConvexFootprint(t,this.bufferedBuildingFootprint(e)));r=r.filter(e=>!a.some(t=>Jt(Ht(e,this.bufferedBuildingFootprint(t)))>1e-4)),e.push(...r.filter(e=>e.length>=3))}let n=new B(this.polygonsGeometry(e,Y,Y+.01),Zs(Vs.park));return n.name=`downtown-landscaping`,n}triangulateGrass(e){let t=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),n=t.map(e=>new K(e.x,e.z));return ye.triangulateShape(n,[]).flatMap(e=>{let n=e.map(e=>t[e]).filter(e=>e!==void 0);return n.length===3?[n]:[]})}subtractConvexFootprint(e,t){if(e.length<3||t.length<3)return e.length>=3?[[...e]]:[];let n=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?t:[...t].reverse(),r=[...e],i=[];for(let e=0;e<n.length&&r.length>=3;e++){let t=n[e],a=n[(e+1)%n.length];if(!t||!a)continue;let o=Math.max(Math.hypot(a.x-t.x,a.z-t.z),1e-9),s={x:-(a.z-t.z)/o,z:(a.x-t.x)/o},c=s.x*t.x+s.z*t.z,l=Rt(r,{x:-s.x,z:-s.z},-c);l.length>=3&&i.push(l),r=Rt(r,s,c)}return i}bufferedBuildingFootprint(e){if(e.clip&&e.clip.length>=3)return this.offsetConvexFootprint(e.clip,4);let t=an[e.state],n=e.width*t/2+4,r=e.depth*t/2+4,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=Lt(t,i);return{x:e.x+n.x,z:e.z+n.z}})}offsetConvexFootprint(e,t){let n=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),r=n.map((e,r)=>{let i=n[(r+1)%n.length];if(!i)throw Error(`visible footprint has no next edge`);let a=Math.max(Math.hypot(i.x-e.x,i.z-e.z),1e-9),o={x:-(i.z-e.z)/a,z:(i.x-e.x)/a};return{inward:o,offset:o.x*e.x+o.z*e.z-t}});return n.map((e,t)=>{let n=r[(t-1+r.length)%r.length],i=r[t];if(!n||!i)return e;let a=n.inward.x*i.inward.z-n.inward.z*i.inward.x;return Math.abs(a)<1e-6?e:{x:(n.offset*i.inward.z-n.inward.z*i.offset)/a,z:(n.inward.x*i.offset-n.offset*i.inward.x)/a}})}parkGrassFootprint(e){let t=e.innerClip;if(!t||t.length<3)return[];let n=e.clip??[];if(!n.length||!t.some(e=>this.distanceToPolygonEdge(e,n)<=1e-4))return t;let r=this.polygonCentre(t),i=Math.max(...t.map(e=>Math.hypot(e.x-r.x,e.z-r.z)),1),a=1-Math.min(.02/i,.001);return t.map(e=>this.scaleFrom(e,r,a))}distanceToPolygonEdge(e,t){let n=1/0;for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];if(!i||!a)continue;let o=a.x-i.x,s=a.z-i.z,c=Math.max(0,Math.min(1,((e.x-i.x)*o+(e.z-i.z)*s)/Math.max(o*o+s*s,1e-9)));n=Math.min(n,Math.hypot(e.x-(i.x+o*c),e.z-(i.z+s*c)))}return n}buildRoads(){let e=new B(this.polygonsGeometry(this.city.surfaces.map(e=>e.points),0,1),Zs(Vs.road));return e.name=`roads`,e}rectPoints(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}appendPrism(e,t,n,r,i=!0,a=[]){if(t.length<3)return;let o=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?[...t]:[...t].reverse(),s=o.map(e=>new K(e.x,e.z)),c=a.filter(e=>e.length>=3).map(e=>e.map(e=>new K(e.x,e.z))),l=[s,...c].flat(),u=ye.triangulateShape(s,c);for(let t of u){let n=t[0],i=t[1],a=t[2];if(n===void 0||i===void 0||a===void 0)continue;let o=l[n],s=l[i],c=l[a];!o||!s||!c||((s.x-o.x)*(c.y-o.y)-(s.y-o.y)*(c.x-o.x)>0?e.push(o.x,r,o.y,c.x,r,c.y,s.x,r,s.y):e.push(o.x,r,o.y,s.x,r,s.y,c.x,r,c.y))}if(i)for(let t=0;t<o.length;t++){let i=o[t],a=o[(t+1)%o.length];!i||!a||e.push(i.x,n,i.z,i.x,r,i.z,a.x,n,a.z,a.x,n,a.z,i.x,r,i.z,a.x,r,a.z)}}appendBandedPrism(e,t,n,r,i,a,o){if(n.length<3)return;let s=e.length/3;this.appendPrism(e,n,r,i,!1);for(let n=s;n<e.length/3;n++)t.push(o.r,o.g,o.b);let c=Math.max(1,Math.round(a));for(let a=0;a<c;a++){let s=r+(i-r)*a/c,l=r+(i-r)*(a+1)/c,u=a%2==0?1:Hs,d=e.length/3;for(let t=0;t<n.length;t++){let r=n[t],i=n[(t+1)%n.length];!r||!i||e.push(r.x,s,r.z,r.x,l,r.z,i.x,s,i.z,i.x,s,i.z,r.x,l,r.z,i.x,l,i.z)}for(let n=d;n<e.length/3;n++)t.push(o.r*u,o.g*u,o.b*u)}}polygonsGeometry(e,t,n,r){let i=[];e.forEach((e,a)=>this.appendPrism(i,e,t,n,!0,r?.[a]??[]));let a=new J;return a.setAttribute(`position`,new W(new Float32Array(i),3)),a.computeVertexNormals(),a}buildClipped(){let e=[],t=[];for(let n of this.city.buildings){if(!n.clip||n.clip.length<3||Do(n)>0)continue;let r=n.height;this.color.setHex(Bs(n).facade);let i=Mt(r,n.district);this.appendBandedPrism(e,t,n.clip,Y,Y+r,i,this.color)}let n=new J;n.setAttribute(`position`,new W(new Float32Array(e),3)),n.setAttribute(`color`,new W(new Float32Array(t),3)),n.computeVertexNormals();let r=new B(n,Zs(16777215,{vertexColors:!0}));return r.name=`clipped-buildings`,r}clippedSignature(){let e=``;for(let t of this.city.buildings)t.clip&&(e+=Do(t));return e}rebuildClipped(){let e=this.clippedSignature();if(e===this.clippedState)return;this.clippedState=e;let t=this.buildClipped();if(this.clipped){this.group.remove(this.clipped),this.clipped.geometry.dispose();let e=this.clipped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.clipped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}buildStripes(e,t,n){let r=e.map(e=>e.clip??this.rectPoints({x0:e.x-e.width/2,z0:e.z-e.depth/2,x1:e.x+e.width/2,z1:e.z+e.depth/2})),i=Zs(t);i.userData.outlineParameters={thickness:0,alpha:0,nearAlpha:0};let a=new B(this.polygonsGeometry(r,0,n),i);return a.frustumCulled=!1,a}buildTrees(){let e=new h;e.name=`trees`;let t=new M(new _e(2.75,2),Zs(Vs.tree),Math.max(this.city.trees.length,1));t.name=`tree-canopies`,t.frustumCulled=!1;let n=new M(new Oe(.55,.72,1.5,5),Zs(Vs.treeTrunk),Math.max(this.city.trees.length,1));return n.name=`tree-stumps`,n.frustumCulled=!1,this.city.trees.forEach((e,r)=>{this.matrix.makeScale(e.scale,e.scale,e.scale),this.matrix.setPosition(e.x,Y+.75*e.scale,e.z),n.setMatrixAt(r,this.matrix),this.matrix.setPosition(e.x,Y+3.5*e.scale,e.z),t.setMatrixAt(r,this.matrix)}),t.instanceMatrix.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0,e.add(n,t),e}buildCars(){return this.vehicleFactory.create(this.city.cars)}refresh(e){let t=this.city.get(e);t&&(this.writeBuilding(t),this.flush(this.slots.get(e)?.mesh),this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,t.clip&&this.rebuildClipped(),this.rebuildLandscaping())}refreshAll(){for(let e of this.city.buildings)this.writeBuilding(e);for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,this.rebuildClipped(),this.rebuildLandscaping()}syncDamage(e){let t=this.destruction?.syncDamage(e)??{phaseChanged:!1,transformsChanged:!1,changedIds:new Set};if(t.phaseChanged){let e=!1;for(let n of t.changedIds){let t=this.city.buildings.find(e=>e.id===n);t&&(this.writeBuilding(t),e||=!!t.clip)}for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,e&&this.rebuildClipped()}return t}landscapingSignature(){return this.city.buildings.filter(e=>e.district===`downtown`).map(e=>`${e.id}:${e.state[0]}`).join(`|`)}rebuildLandscaping(){let e=this.landscapingSignature();if(e===this.landscapedState)return;this.landscapedState=e;let t=this.buildLandscapedBuiltBlocks();if(this.landscaped){this.group.remove(this.landscaped),this.landscaped.geometry.dispose();let e=this.landscaped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.landscaped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}flush(e){e&&(e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0))}flushDetails(){for(let e of[this.roofs,this.trims,this.windowBands,this.greebles])this.flush(e)}writeBuilding(e){let t=this.slots.get(e.id);if(!t)return;let n=Do(e),r=e.height,i=e.width,a=e.depth,o=Bs(e);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n===0?i:0,n===0?r:0,n===0?a:0),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,Y+r/2,e.z),t.mesh.setMatrixAt(t.index,this.matrix),this.color.setHex(o.facade),t.mesh.setColorAt(t.index,this.color),this.writeBuildingDetails(e,i,a,r,o),this.writeGreebles(e,Y+r),this.writeDebris(e)}writeBuildingDetails(e,t,n,r,i){let a=this.detailSlots.get(e.id);if(a===void 0)return;let o=(t,n,r,i,o,s)=>{this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n,r,i),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,o,e.z),t.setMatrixAt(a,this.matrix),this.color.setHex(s),t.setColorAt(a,this.color)};if(Do(e)>0){for(let t of[this.roofs,this.trims,this.windowBands])this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,Y,e.z),t.setMatrixAt(a,this.matrix);return}let s=.65,c=.42,l=Y+r,u=Math.min(1.15,Math.max(.65,r*.09)),d=l-Math.min(4.2,Math.max(1.6,r*.22));o(this.trims,t*1.025,c,n*1.025,l-c/2,i.trim),o(this.windowBands,t*1.012,u,n*1.012,d,i.window),o(this.roofs,t*.985,s,n*.985,l+s/2,i.roof)}writeGreebles(e,t){let n=this.greebleStart.get(e.id);if(n===void 0)return;let r=Do(e)===0;for(let i=0;i<e.greebles;i++){if(!r){this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,t,e.z),this.greebles.setMatrixAt(n+i,this.matrix);continue}let a=((i+1)/(e.greebles+1)-.5)*e.width*.55,o=((e.id+i)%5/5-.5)*e.depth*.55,s=Lt({x:a,z:o},e.rotation??0),c=Math.min(e.width,e.depth)*.16,l=c*(.52+(e.id+i)%3*.1);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(c*1.28,l,c),this.matrix.scale(this.scale),this.matrix.setPosition(e.x+s.x,t+l/2,e.z+s.z),this.greebles.setMatrixAt(n+i,this.matrix),this.color.setHex(Vs.hvac),this.greebles.setColorAt(n+i,this.color)}}writeDebris(e){let t=e.id*Gs;if(!(t+Gs>this.debris.count))for(let n=0;n<Gs;n++)this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,Y,e.z),this.debris.setMatrixAt(t+n,this.matrix)}get meshCount(){return this.group.children.length}get buildingMeshes(){return this.buildingMeshList}get buildingHeatmapSources(){return this.clipped?[...this.buildingMeshList,this.roofs,this.clipped]:[...this.buildingMeshList,this.roofs]}get buildingDamageHeatmapSources(){return this.destruction?.heatmapSources??[]}syncBuildingDamageHeatmap(e,t){this.destruction?.syncHeatmap(e),this.destruction?.syncRubbleHeatmap(t)}get buildingHeatmapInstanceIds(){return this.buildingHeatmapInstanceIdsByMesh}renderedStoreysOf(e){let t=this.slots.get(e);return typeof t?.mesh.userData.storeys==`number`?t.mesh.userData.storeys:void 0}renderedHeightOf(e){if(this.city.get(e)?.clip)return 2.2;let t=this.slots.get(e);if(t)return t.mesh.getMatrixAt(t.index,this.matrix),this.matrix.elements[5]}dispose(){this.disposed=!0,this.destruction?.dispose(),this.vehicleFactory.dispose();for(let e of this.group.children)if(e instanceof B){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}this.group.children.find(e=>e.name===`park-unicorn`&&e instanceof h)?.traverse(e=>{if(!(e instanceof B))return;e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()})}},rc=15,ic=class{group=new h;sections;sectionOfBuilding=new Map;constructor(e,t){let n=ac(e);this.sections=n.map((e,r)=>{let i=n.length===1?this.group:new h;i!==this.group&&(i.name=`shard-piece-${r}`,this.group.add(i));let a=new nc(e.content,i,t);for(let t of e.content.buildings)this.sectionOfBuilding.set(t.id,a);return{view:a,group:i,offset:e.offset??{x:0,z:0}}})}setSeparation(e){let t=1-Math.max(0,Math.min(1,e));for(let e of this.sections)e.group.position.set(-e.offset.x*t,0,-e.offset.z*t)}setOutlineZoom(e){for(let t of this.sections)t.view.setOutlineZoom(e)}refresh(e){this.sectionOfBuilding.get(e)?.refresh(e)}refreshAll(){for(let e of this.sections)e.view.refreshAll()}syncDamage(e){let t=!1,n=!1;for(let r of this.sections){let i=r.view.syncDamage(e);t||=i.phaseChanged,n||=i.transformsChanged}return{phaseChanged:t,transformsChanged:n}}get meshCount(){return this.sections.reduce((e,t)=>e+t.view.meshCount,0)}get buildingMeshes(){return this.sections.flatMap(e=>[...e.view.buildingMeshes])}get buildingHeatmapSources(){return this.sections.flatMap(e=>[...e.view.buildingHeatmapSources])}get buildingDamageHeatmapSources(){return this.sections.flatMap(e=>[...e.view.buildingDamageHeatmapSources])}syncBuildingDamageHeatmap(e,t){for(let n of this.sections)n.view.syncBuildingDamageHeatmap(e,t)}get buildingHeatmapInstanceIds(){let e=new Map;for(let t of this.sections)for(let[n,r]of t.view.buildingHeatmapInstanceIds)e.set(n,r);return e}renderedStoreysOf(e){return this.sectionOfBuilding.get(e)?.renderedStoreysOf(e)}renderedHeightOf(e){return this.sectionOfBuilding.get(e)?.renderedHeightOf(e)}dispose(){for(let e of this.sections)e.view.dispose()}};function ac(e){let t=e.surfaces.map((e,t)=>({index:t,points:e})),n=e.shardCut;if(!n)return[{offset:void 0,content:{...oc(e),surfaces:t,undersideCut:void 0}}];let r=sc(t),i=lc(e,n);return t.map(t=>{let a=n.pieces[t.index],o=e=>e.filter(e=>r(e.x,e.z)===t.index),s=e=>e.filter(e=>r((e.x0+e.x1)/2,(e.z0+e.z1)/2)===t.index),c=e=>e.filter(e=>(e.surfaceIndex??r(e.x,e.z))===t.index),l=e.buildings.filter(e=>(e.clip?.length??3)>=3&&r(e.x,e.z)===t.index),u=new Map(l.map(e=>[e.id,e]));return{offset:a?.offset,content:{parkLandmark:e.parkLandmark&&r(e.parkLandmark.x,e.parkLandmark.z)===t.index?e.parkLandmark:void 0,surfaces:[t],fractureSeams:e.fractureSeams.filter(e=>e.surfaces.includes(t.index)),buildings:l,blocks:s(e.blocks),roads:s(e.roads),centreLines:c(e.centreLines),laneLines:c(e.laneLines),crosswalks:c(e.crosswalks),trees:o(e.trees),cars:o(e.cars),undersideCut:i[t.index],get:e=>u.get(e),containsPoint:(e,n)=>Kt(e,n,t.points)}}})}function oc(e){return{parkLandmark:e.parkLandmark,fractureSeams:e.fractureSeams,buildings:e.buildings,blocks:e.blocks,roads:e.roads,centreLines:e.centreLines,laneLines:e.laneLines,crosswalks:e.crosswalks,trees:e.trees,cars:e.cars,get:t=>e.get(t),containsPoint:(t,n)=>e.containsPoint(t,n)}}function sc(e){return(t,n)=>{for(let r of e)if(Kt(t,n,r.points))return r.index;let r=-1,i=rc;for(let a of e)for(let e=0;e<a.points.length;e++){let o=a.points[e],s=a.points[(e+1)%a.points.length],c=xn(t,n,o,s);c<i&&(i=c,r=a.index)}return r}}function cc(e,t){let n=t.offset.x*e.normal.x+t.offset.z*e.normal.z>=0?-1:1;return{x:e.normal.x*n,z:e.normal.z*n}}function lc(e,t){let n=gs(t.normal),r=cs(e.fractureSeams.flatMap(e=>{let n=t.pieces[e.surfaces[0]];return n?[{surfaces:[0,1],path:e.path.map(e=>({x:e.x-n.offset.x,z:e.z-n.offset.z})),offset:e.offset}]:[]})).get(0)??[],i=os([{x:t.originX,z:t.originZ},{x:t.normal.x*1e3,z:t.normal.z*1e3}]),a=[];for(let[e,o]of t.pieces.entries()){let s=t.pieces[1-e];a[e]={boundary:t.originalBoundary,seams:r,crop:{normal:t.normal,...uc(t.normal,o.source,s.source)},outward:cc(t,o),hotAt:t.originX*n.x+t.originZ*n.z,faceSeed:i,translation:o.offset}}return a}function uc(e,t,n){let r=t=>t.x*e.x+t.z*e.z,i=t.map(r),a=n.map(r),o=e=>e.reduce((e,t)=>e+t,0)/e.length,s=o(i)>=o(a)?1:-1;return{keep:s,offset:((s===1?Math.min(...i):Math.max(...i))+(s===1?Math.max(...a):Math.min(...a)))/2}}var dc=[{typeId:`ancient-deity-structure`,state:`mobile`,source:`models/ancient-deity-structure/ancient-deity-structure-01.glb`,runtime:`public/assets/runtime-models/ancient-deity-structure--mobile.glb`},{typeId:`ancient-nug`,state:`mobile`,source:`models/ancient-nug/ancient-nug-01.glb`,runtime:`public/assets/runtime-models/ancient-nug--mobile.glb`},{typeId:`ancient-slime-temple`,state:`mobile`,source:`models/slime-temple/slime-temple-1.glb`,runtime:`public/assets/runtime-models/ancient-slime-temple--mobile.glb`},{typeId:`machine-harbinger`,state:`mobile`,source:`models/machine-harbinger/machine-harbinger-02.glb`,runtime:`public/assets/runtime-models/machine-harbinger--mobile.glb`},{typeId:`machine-harvester`,state:`mobile`,source:`models/machine-harvester/machine-harvester-02.glb`,runtime:`public/assets/runtime-models/machine-harvester--mobile.glb`},{typeId:`machine-infantry`,state:`mobile`,source:`models/machine-infantry/machine-infantry-01.glb`,runtime:`public/assets/runtime-models/machine-infantry--mobile.glb`},{typeId:`mobile-factory`,state:`mobile`,source:`models/machine-mobile-factory/machine-mobile-factory-mobile-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--mobile.glb`},{typeId:`mobile-factory`,state:`deployed`,source:`models/machine-mobile-factory/machine-mobile-factory-deployed-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--deployed.glb`},{typeId:`machine-processing-node`,state:`mobile`,source:`models/machine-processing-node/machine-processing-node-01.glb`,runtime:`public/assets/runtime-models/machine-processing-node--mobile.glb`},{typeId:`machine-shard-cutter`,state:`mobile`,source:`models/machine-shard-cutter/machine-shard-cutter-01.glb`,runtime:`public/assets/runtime-models/machine-shard-cutter--mobile.glb`},{typeId:`ancient-harvester`,state:`mobile`,source:`models/ancient-harverster/ancient-harvester-01.glb`,runtime:`public/assets/runtime-models/ancient-harvester--mobile.glb`},{typeId:`ancient-harbinger`,state:`mobile`,source:`models/ancient-harbinger/ancient-harbinger-04.glb`,runtime:`public/assets/runtime-models/ancient-harbinger--mobile.glb`},{typeId:`ancient-infantry`,state:`mobile`,source:`models/ancient-infantry/ancient-infantry-01.glb`,runtime:`public/assets/runtime-models/ancient-infantry--mobile.glb`},{typeId:`ancient-support`,state:`mobile`,source:`models/ancient-acid-specialist/ancient-acid-specialist-01.glb`,runtime:`public/assets/runtime-models/ancient-support--mobile.glb`},{typeId:`machine-construct`,state:`mobile`,source:`models/machine-construct/machine-construct-01.glb`,runtime:`public/assets/runtime-models/machine-construct--mobile.glb`}];function fc(e,t=`mobile`){let n=dc.find(n=>n.typeId===e&&n.state===t);if(!n)throw Error(`No canonical runtime model declared for ${e}:${t}`);return`/HumanResourcesLowPoly/${n.runtime.replace(/^public\//,``)}`}var pc=(e,t,n,r,i,a={})=>({typeId:e,faction:t,assetUrl:fc(e,a.state??`mobile`),bounds:{targetExtent:n,normaliseBy:r,...a.yawOffset===void 0?{}:{yawOffset:a.yawOffset}},fallback:{extent:n},material:{palette:i},...a.state===void 0?{}:{state:a.state},...a.cachePickGeometry===void 0?{}:{cachePickGeometry:a.cachePickGeometry},...a.animations===void 0?{}:{animations:a.animations}}),mc=[pc(`ancient-deity-structure`,`ancients`,50,`height`,`ancient-deity-structure`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),pc(`ancient-nug`,`ancients`,140,`height`,`ancient-nug`,{yawOffset:Math.PI/2}),pc(`ancient-slime-temple`,`ancients`,30,`horizontal`,`ancient-slime-temple`),pc(`machine-harbinger`,`machines`,55,`height`,`machine-harbinger`,{yawOffset:Math.PI/2}),pc(`machine-harvester`,`machines`,12.5,`height`,`machine-harvester`,{yawOffset:Math.PI/2}),pc(`machine-infantry`,`machines`,10,`height`,`machine-infantry`,{yawOffset:Math.PI/2}),pc(`mobile-factory`,`machines`,24,`horizontal`,`machine-mobile-factory`,{state:`mobile`}),pc(`mobile-factory`,`machines`,22.5,`height`,`machine-mobile-factory`,{state:`deployed`}),pc(`machine-processing-node`,`machines`,22.5,`horizontal`,`machine-processing-node`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),pc(`machine-shard-cutter`,`machines`,72,`height`,`machine-shard-cutter`,{yawOffset:Math.PI/2}),pc(`ancient-harvester`,`ancients`,32.5,`horizontal`,`ancient-harvester`,{yawOffset:Math.PI/2}),pc(`ancient-harbinger`,`ancients`,45,`height`,`ancient-harbinger`,{yawOffset:Math.PI/2}),pc(`ancient-infantry`,`ancients`,9,`height`,`ancient-infantry`,{yawOffset:Math.PI/2}),pc(`ancient-support`,`ancients`,45,`height`,`ancient-acid-specialist`,{yawOffset:Math.PI/2}),pc(`machine-construct`,`machines`,140,`height`,`machine-construct`,{yawOffset:Math.PI/2,animations:{walk:`NlaTrack`,defeat:`NlaTrack.001`}})],hc=new Map(mc.map(e=>[gc(e.typeId,e.state),e]));function gc(e,t=`mobile`){return`${e}:${t}`}function _c(e,t=!1){return hc.get(gc(e,t?`deployed`:`mobile`))??hc.get(gc(e))}function vc(e){return hc.has(gc(e,`deployed`))}function yc(e,t=!1){let n=_c(e,t)?.fallback.extent??$t(e).radius*2;return{radius:n/Math.SQRT2,minY:0,maxY:n,height:n,centre:{x:0,y:n/2,z:0},size:{x:n,y:n,z:n}}}var bc={"machine-cannon":{colour:6865096,tracerWidth:4.1,impactRadius:3.1},"machine-siege-cannon":{colour:9233644,tracerWidth:5.4,impactRadius:4.6},"machine-harbinger-laser":{colour:6865096,tracerWidth:.48,impactRadius:2.3},"machine-harbinger-emitter":{colour:5940909,tracerWidth:.34,impactRadius:1.9},"machine-rifle":{colour:16765503,tracerWidth:.42,tracerLength:2,impactRadius:1,muzzleFlash:{colour:16769898,radius:1.15,durationMs:55}},"machine-rifle-braced":{colour:16765503,tracerWidth:.5,tracerLength:3.2,impactRadius:1.2,muzzleFlash:{colour:16769898,radius:1.4,durationMs:65}},"machine-cutter-repeater":{colour:16765503,tracerWidth:.36,tracerLength:1.6,impactRadius:.9,muzzleFlash:{colour:16769898,radius:.9,durationMs:50}},"ancient-corrosive-spray":{colour:6877280,tracerWidth:.6,impactRadius:2.6},"ancient-bite":{colour:16760428,tracerWidth:0,impactRadius:1.8},"ancient-slam":{colour:16760428,tracerWidth:0,impactRadius:4.2},"ancient-harbinger-maul":{colour:16765088,tracerWidth:0,impactRadius:3.2}},xc={colour:16777215,tracerWidth:.25,impactRadius:1.2};function Sc(e){return bc[e]??xc}var Cc={"machine-infantry":{"machine-rifle":[{forward:2.28,right:0,height:7}]}};function wc(e,t,n){let r=Cc[e]?.[t];return r?.[n%r.length]}var Tc=256,Ec=180,Dc=new q(0,1,0);function Oc(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function kc(e,t,n){let r=e.instanceColor,i=t*3;if(r&&Math.fround(n.r)===r.array[i]&&Math.fround(n.g)===r.array[i+1]&&Math.fround(n.b)===r.array[i+2])return!1;e.setColorAt(t,n);let a=e.instanceColor;return a?(a.setUsage(P),a.addUpdateRange(i,3),!0):!1}function Ac(e,t,n){return Math.max(t,Math.min(n,e))}var jc=class{group=new h;beamsMesh;impactsMesh;flashesMesh;matrix=new Be;position=new q;direction=new q;scale=new q;rotation=new ue;colour=new V;beams=[];impacts=[];flashes=[];melee=new Map;constructor(){let e=new L({color:16777215,transparent:!0,opacity:.9,depthWrite:!1});e.userData.outlineParameters={visible:!1},this.beamsMesh=new M(new Oe(1,1,1,6),e,Tc),this.impactsMesh=new M(new _e(1,1),new L({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),Tc),this.flashesMesh=new M(new _e(1,1),new L({color:16777215,transparent:!0,opacity:.95,depthWrite:!1}),Tc);for(let e of[this.beamsMesh,this.impactsMesh,this.flashesMesh])e.instanceMatrix.setUsage(P),e.count=0;this.beamsMesh.frustumCulled=!1,this.impactsMesh.frustumCulled=!1,this.flashesMesh.frustumCulled=!1,this.beamsMesh.renderOrder=20,this.impactsMesh.renderOrder=21,this.flashesMesh.renderOrder=22,this.group.add(this.beamsMesh,this.impactsMesh,this.flashesMesh)}sync(e,t){for(let n of e)n.kind===`combatHit`&&this.addHit(n,t);this.beams=this.beams.filter(e=>t<e.startedAt+e.duration),this.impacts=this.impacts.filter(e=>t<e.startedAt+e.duration),this.flashes=this.flashes.filter(e=>t<e.startedAt+e.duration);for(let[e,n]of this.melee)t>=n.startedAt+n.duration&&this.melee.delete(e);this.syncBeams(t),this.syncImpacts(t),this.syncFlashes(t)}meleePose(e,t){let n=this.melee.get(e);if(!n)return;let r=Ac((t-n.startedAt)/n.duration,0,1);if(r>=1)return;let i=Math.sin(r*Math.PI);return{forward:i*n.distance,yaw:i*.18}}addHit(e,t){let n=kt(e.weaponId),r=Sc(e.weaponId),i=yc(e.attackerTypeId),a=e.targetHeight??yc(e.targetTypeId).height,o=wc(e.attackerTypeId,e.weaponId,e.shotIndex),s=o?new q(e.sourceX+Math.cos(e.sourceHeading)*o.forward-Math.sin(e.sourceHeading)*o.right,Y+o.height,e.sourceZ+Math.sin(e.sourceHeading)*o.forward+Math.cos(e.sourceHeading)*o.right):this.defaultSource(e,i.radius,i.height),c=new q(e.targetX,Y+a*.56,e.targetZ);if(n.projectileSpeed===0){this.melee.set(e.attackerId,{startedAt:t,duration:Ec,distance:Math.max(.6,i.radius*.1)}),this.pushImpact({position:c,colour:r.colour,radius:r.impactRadius,startedAt:t,duration:130});return}let l=Ac(s.distanceTo(c)/n.projectileSpeed*250,65,180);this.pushBeam({start:s,end:c,colour:r.colour,width:r.tracerWidth,...r.tracerLength===void 0?{}:{length:r.tracerLength},startedAt:t,duration:l}),r.muzzleFlash&&this.pushFlash({position:s,colour:r.muzzleFlash.colour,radius:r.muzzleFlash.radius,startedAt:t,duration:r.muzzleFlash.durationMs}),this.pushImpact({position:c,colour:r.colour,radius:r.impactRadius,startedAt:t+l*.72,duration:120})}defaultSource(e,t,n){let r=Math.max(1,t*.48),i=e.weaponId===`machine-cannon`||e.weaponId===`machine-siege-cannon`?.6:.3,a=(e.shotIndex-(e.shotCount-1)/2)*Math.max(.8,t*i);return new q(e.sourceX+Math.cos(e.sourceHeading)*r-Math.sin(e.sourceHeading)*a,Y+n*.58,e.sourceZ+Math.sin(e.sourceHeading)*r+Math.cos(e.sourceHeading)*a)}pushBeam(e){this.beams.length>=Tc&&this.beams.shift(),this.beams.push(e)}pushImpact(e){this.impacts.length>=Tc&&this.impacts.shift(),this.impacts.push(e)}pushFlash(e){this.flashes.length>=Tc&&this.flashes.shift(),this.flashes.push(e)}syncBeams(e){let t=0,n=!1,r=!1;for(let i of this.beams){let a=Ac((e-i.startedAt)/i.duration,0,1);this.direction.subVectors(i.end,i.start);let o=this.direction.length(),s=o*a,c=i.length===void 0?0:Math.max(0,s-Math.min(i.length,o)),l=s-c;if(l<=1e-5)continue;this.direction.normalize(),this.position.copy(i.start).addScaledVector(this.direction,c+l/2),this.rotation.setFromUnitVectors(Dc,this.direction);let u=1-a*.55;this.scale.set(i.width*u,l,i.width*u),this.matrix.compose(this.position,this.rotation,this.scale),n=Oc(this.beamsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=kc(this.beamsMesh,t,this.colour)||r,t++}this.finish(this.beamsMesh,t,n,r)}syncImpacts(e){let t=0,n=!1,r=!1;for(let i of this.impacts){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.45+Math.sin(a*Math.PI)*.9);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=Oc(this.impactsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=kc(this.impactsMesh,t,this.colour)||r,t++}this.finish(this.impactsMesh,t,n,r)}syncFlashes(e){let t=0,n=!1,r=!1;for(let i of this.flashes){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.65+Math.sin(a*Math.PI)*.75);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=Oc(this.flashesMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=kc(this.flashesMesh,t,this.colour)||r,t++}this.finish(this.flashesMesh,t,n,r)}finish(e,t,n,r){e.count=t,n&&(e.instanceMatrix.needsUpdate=!0),r&&e.instanceColor&&(e.instanceColor.needsUpdate=!0)}dispose(){this.beamsMesh.geometry.dispose(),this.beamsMesh.material.dispose(),this.impactsMesh.geometry.dispose(),this.impactsMesh.material.dispose(),this.flashesMesh.geometry.dispose(),this.flashesMesh.material.dispose()}},Mc=16721976,Nc=class{group=new h;beams;beamOpacity=new D(new Float32Array(64),1);matrix=new Be;position=new q;scale=new q;direction=new q;rollAxis=new q;width=new q;normal=new q;rotation=new ue;basis=new Be;constructor(){let e=new L({color:Mc,transparent:!0,opacity:.88,depthWrite:!1,side:2});e.userData.outlineParameters={visible:!1},e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float instanceOpacity;
varying float vInstanceOpacity;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vInstanceOpacity = instanceOpacity;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vInstanceOpacity;`).replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,`vec4 diffuseColor = vec4( diffuse, opacity * vInstanceOpacity );`)},e.customProgramCacheKey=()=>`cutter-sweep-instance-opacity-v1`,this.beams=new M(new ae(1,1),e,64),this.beams.geometry.setAttribute(`instanceOpacity`,this.beamOpacity),this.beams.instanceMatrix.setUsage(P),this.beams.frustumCulled=!1,this.beams.renderOrder=20,this.beams.count=0,this.group.add(this.beams)}sync(e,t){let n=0;for(let r of e.units){if(r.cutterSweepSteps<=0||!Qt(e.typeOf(r))||n+2>64)continue;let i=dn-r.cutterSweepSteps+t,a=tn(i)*Math.PI,o=nn(i),s=r.prevX+(r.x-r.prevX)*t,c=r.prevZ+(r.z-r.prevZ)*t,l=Y+52,u=Math.cos(a),d=Math.sin(a);this.writeHalf(n++,s,l,c,-Math.sin(r.heading)*u,d,Math.cos(r.heading)*u,r.heading,o),this.writeHalf(n++,s,l,c,Math.sin(r.heading)*u,-d,-Math.cos(r.heading)*u,r.heading,o)}this.beams.count=n,this.beams.instanceMatrix.needsUpdate=!0,this.beamOpacity.needsUpdate=!0}writeHalf(e,t,n,r,i,a,o,s,c){this.direction.set(i,a,o),this.rollAxis.set(Math.cos(s),0,Math.sin(s)),this.width.crossVectors(this.rollAxis,this.direction),this.normal.crossVectors(this.width,this.direction),this.basis.makeBasis(this.width,this.direction,this.normal),this.rotation.setFromRotationMatrix(this.basis),this.position.set(t+i*500*c/2,n+a*500*c/2,r+o*500*c/2),this.scale.set(20,500*c,1),this.matrix.compose(this.position,this.rotation,this.scale),this.beams.setMatrixAt(e,this.matrix),this.beamOpacity.setX(e,c)}dispose(){this.beams.geometry.dispose(),this.beams.material.dispose()}},Pc=[10800,-81e3,10800],Fc=35e3,Ic=[8433856,8433856,8958144,8960192,9484488],Lc=[12636344,11585712,12112064,11585720,12636352,11059376],Rc=40,zc=22;function Bc(e,t){return(e*17+t*13)%19/18}function Vc(e,t,n){let r=Math.atan2(n,e),i=Math.asin(t/Math.hypot(e,t,n)),a=Math.floor((r+Math.PI)/(Math.PI*2)*Rc);return Math.floor((i+Math.PI/2)/Math.PI*zc)*Rc+a}function Hc(){let e=new _e(Fc,5).toNonIndexed(),t=e.getAttribute(`position`),n=new Float32Array(t.count*3),r=new V;for(let e=0;e<t.count/3;e++){let i=e*3,a=((t.getX(i)??0)+(t.getX(i+1)??0)+(t.getX(i+2)??0))/3,o=((t.getY(i)??0)+(t.getY(i+1)??0)+(t.getY(i+2)??0))/3,s=((t.getZ(i)??0)+(t.getZ(i+1)??0)+(t.getZ(i+2)??0))/3,c=(a+s)*.6+o*.53,l=Vc(a,o,s),u=c<Fc*.35||Bc(l,1)>.48?Ic:Lc,d=Math.min(u.length-1,Math.floor(Bc(l,2)*u.length));r.setHex(u[d]);for(let e=0;e<3;e++){let t=(i+e)*3;n[t]=r.r,n[t+1]=r.g,n[t+2]=r.b}}e.setAttribute(`color`,new W(n,3));let i=new B(e,new L({vertexColors:!0,fog:!1}));return i.position.set(Pc[0],Pc[1],Pc[2]),i}var Uc=class{group=new h;constructor(){this.group.add(Hc())}dispose(){for(let e of this.group.children)e instanceof B&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose());this.group.clear()}},Wc=class{createResources;resources;resourcesPromise;queued=new Map;pending=new Map;draining=!1;activeLoads=0;priority=0;order=0;disposed=!1;constructor(e=Gc){this.createResources=e}ready(){return this.resourcesPromise||=this.createResources().then(e=>{if(!this.disposed&&e)return this.resources=e,this.scheduleDrain(),e}).catch(e=>{this.disposed||console.warn(`Unable to initialise Detailed model loading; using block fallbacks.`,e)}),this.resourcesPromise}preload(e){if(this.disposed)return;let t=--this.priority;for(let n of e)this.enqueue(n,t);this.scheduleDrain()}request(e){if(this.disposed)return Promise.resolve();let t=this.enqueue(e,--this.priority);return this.scheduleDrain(),t}status(e){return this.resources?.status(gc(e.typeId,e.state))?.state}enqueue(e,t){let n=gc(e.typeId,e.state);if(this.resources?.status(n)?.state===`ready`)return Promise.resolve();let r=this.pending.get(n);if(r)return this.queued.has(n)&&t<r.priority&&(r.priority=t),r.promise;let i,a=new Promise(e=>{i=e}),o={entry:e,priority:t,order:this.order++,promise:a,resolve:()=>i?.()};return this.queued.set(n,o),this.pending.set(n,o),a}scheduleDrain(){this.draining||this.disposed||(this.draining=!0,this.drain())}async drain(){try{let e=await this.ready();if(!e||this.disposed)return;for(;!this.disposed&&this.activeLoads<2&&this.queued.size>0;){let[t,n]=this.nextQueued();this.queued.delete(t),this.activeLoads++,this.loadOne(e,t,n)}}finally{this.draining=!1,!this.disposed&&this.queued.size>0&&this.activeLoads<2&&this.scheduleDrain()}}nextQueued(){let e=[...this.queued.entries()].sort(([,e],[,t])=>e.priority-t.priority||e.order-t.order)[0];if(!e)throw Error(`Model scheduler dispatched an empty queue`);return e}async loadOne(e,t,n){try{await e.load(t,n.entry),await new Promise(e=>setTimeout(e,0))}finally{this.activeLoads--,this.pending.delete(t),n.resolve(),this.scheduleDrain()}}dispose(){if(!this.disposed){this.disposed=!0,this.queued.clear();for(let e of this.pending.values())e.resolve();this.pending.clear(),this.resources?.dispose()}}};async function Gc(){let[{UnitModelResources:e},{prepareUnitModelMaterials:t}]=await Promise.all([u(()=>import(`./unitModelResources-CShfznbw.js`),__vite__mapDeps([0,1,2])),u(()=>import(`./unitModelMaterials-_KRbRZ9J.js`),__vite__mapDeps([3,1,4]))]);return new e(t)}function Kc(e=`machines`){let t=e===`machines`?`ancients`:`machines`,n=e=>e===`machines`?`machine-harbinger`:`ancient-harbinger`;return Jc([[n(e),!1],[n(t),!1],[`machine-processing-node`,!1],[`mobile-factory`,!1],[`mobile-factory`,!0],[`ancient-slime-temple`,!1],[`ancient-deity-structure`,!1]])}function qc(e){let t=e.world.units.units,n=t.filter(t=>$t(t.typeId).faction===e.playerFaction).map(e=>[e.typeId,e.deployed]),r=t.filter(t=>$t(t.typeId).faction!==e.playerFaction).map(e=>[e.typeId,e.deployed]),i=e.world.constructionSites.map(e=>[e.structureTypeId,!1]),a=t.flatMap(e=>e.queue.map(e=>[e.typeId,!1]));return Jc([...n,...r,...i,...a],Kc(e.playerFaction))}function Jc(e,t=mc){let n=[],r=new Set,i=e=>{if(!e)return;let t=gc(e.typeId,e.state);r.has(t)||(r.add(t),n.push(e))};for(let[t,n]of e)i(_c(t,n));for(let e of t)i(e);for(let e of mc)i(e);return n}var Yc=[],Xc=.2,Zc=64,Qc=1.2,$c=.05,el=2400,tl=[`machine-infantry`,`machine-construct`,`machine-harbinger`,`machine-processing-node`,`mobile-factory`];function nl(e,t){if(!tl.includes(e))return;let n=t.radius+Math.hypot(t.centre.x,t.centre.z),r=Math.max(n,t.height/2)*1.08,i=e===`machine-construct`,a=e===`machine-harbinger`,o=e===`mobile-factory`,s=r*(i?.82:a?.9:o?1.1:1);return{drop:e===`machine-infantry`||e===`machine-construct`||e===`machine-harbinger`||e===`machine-processing-node`?t.height*.25:0,shieldRadius:s,shieldCentre:{x:t.centre.x,y:t.centre.y+(i?t.height*.12:o?-s/3:0),z:t.centre.z}}}function rl(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}function il(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function al(e,t,n){let r=e.instanceColor,i=t*3;if(r&&Math.fround(n.r)===r.array[i]&&Math.fround(n.g)===r.array[i+1]&&Math.fround(n.b)===r.array[i+2])return!1;e.setColorAt(t,n);let a=e.instanceColor;return a?(a.setUsage(P),a.addUpdateRange(i,3),!0):!1}var ol=class{detailedResourcesFactory;sharedModelCache;shardCutOffsets;group=new h;meshes=new Map;matrix=new Be;rotation=new Be;colour=new V;used=new Map;selected=new Map;alerted=new Map;importedUnits=new Map;activeImportedUnits=new Set;modelResources;pendingModelLoads=new Map;modelLoaderState;modelResourcesPromise;ownsModelResources;disposed=!1;importedTemplates=new Map;defeatedImportedUnits=new Map;fadingDeadUnits=new Map;presentationHidden=new Set;importedSelectionGroup=new h;importedOcclusionGroups={machines:new h,ancients:new h};lastAnimationSyncMs;drawn=0;selectedDrawn=0;alertedDrawn=0;constructor(e,t,n){this.detailedResourcesFactory=t,this.sharedModelCache=n,this.ownsModelResources=n===void 0,n?this.modelResourcesPromise=n.ready().then(e=>this.acceptModelResources(e)):this.startDetailedModelLoader();for(let t of un)for(let n of vc(t.id)?[!1,!0]:[!1]){let r=e.units.filter(e=>e.typeId===t.id).length,i=Math.max(r+Zc,4),a=this.fallbackGeometry(t.id,n),o=new M(a,Tt(16777215),i);o.frustumCulled=!1;let s=new M(a.clone(),new L,i);s.frustumCulled=!1;let c=new M(s.geometry,new L,i);c.frustumCulled=!1;let l=this.deployedAppearanceFor(t.id),u;l&&(u=new M(new _e(l.shieldRadius,2),Tt(St(`machines`),{transparent:!0,opacity:Xc,depthWrite:!1}),i),u.frustumCulled=!1,u.renderOrder=5);let d=`${t.id}:${n?`deployed`:`mobile`}`;for(let e of[o,s,c,u])e&&(e.instanceMatrix.setUsage(P),e.count=0);o.castShadow=o.receiveShadow=!0,s.castShadow=s.receiveShadow=!1,u&&(u.castShadow=u.receiveShadow=!1),this.meshes.set(d,{key:d,type:t,deployed:n,body:o,shell:s,alertShell:c,deployedShield:u,deployedAppearance:l,matrixDirty:!1,shellMatrixDirty:!1,alertShellMatrixDirty:!1,shieldMatrixDirty:!1,bodyColourDirty:!1}),this.group.add(o),u&&this.group.add(u)}}boundsOf(e,t=!1){let n=_c(e,t),r=n&&gc(n.typeId,n.state);return(r?this.modelResources?.measuredBounds(r):void 0)??yc(e,t)}deployedAppearanceFor(e){return nl(e,this.boundsOf(e,!1))}fallbackGeometry(e,t){let n=this.boundsOf(e,t),r=new R(n.size.x,n.size.y,n.size.z);return r.translate(n.centre.x,n.centre.y,n.centre.z),r}refreshDeployedShield(e){let t=this.deployedAppearanceFor(e);if(t)for(let n of[`mobile`,`deployed`]){let r=this.meshes.get(`${e}:${n}`);!r?.deployedShield||t.shieldRadius===r.deployedAppearance?.shieldRadius||(r.deployedShield.geometry.dispose(),r.deployedShield.geometry=new _e(t.shieldRadius,2),r.deployedAppearance=t,r.shieldMatrixDirty=!0)}}loadModel(e,t){return this.modelResources.load(e,t).then(()=>{t.state!==`deployed`&&this.refreshDeployedShield(t.typeId)})}requestImportedModel(e,t){let n=_c(e,t);if(n){let e=gc(n.typeId,n.state);this.sharedModelCache?this.sharedModelCache.request(n).then(()=>{n.state!==`deployed`&&this.refreshDeployedShield(n.typeId)}):this.modelResources?this.loadModel(e,n):this.pendingModelLoads.set(e,n)}return n}startDetailedModelLoader(){this.modelLoaderState={state:`loading`};let e=this.detailedResourcesFactory?Promise.resolve(void 0):u(()=>import(`./unitModelResources-CShfznbw.js`),__vite__mapDeps([0,1,2]));this.modelResourcesPromise=Promise.all([e,u(()=>import(`./unitModelMaterials-_KRbRZ9J.js`),__vite__mapDeps([3,1,4]))]).then(([e,{prepareUnitModelMaterials:t}])=>{if(this.disposed)return;let n=this.detailedResourcesFactory?this.detailedResourcesFactory(t):new e.UnitModelResources(t);return this.acceptModelResources(n)}).catch(e=>{this.disposed||(this.modelLoaderState={state:`failed`,error:e},console.warn(`Unable to initialise Detailed model loading; using block fallbacks.`,e))})}acceptModelResources(e){if(!(!e||this.disposed)){this.modelResources=e,this.modelLoaderState=void 0;for(let[e,t]of this.pendingModelLoads)this.loadModel(e,t);return this.pendingModelLoads.clear(),e}}async preloadAll(e){let t=[e===`machines`?`machine-harbinger`:`ancient-harbinger`,e===`machines`?`ancient-harbinger`:`machine-harbinger`,`machine-processing-node`,`mobile-factory`,`ancient-slime-temple`,`ancient-deity-structure`],n=[...t.flatMap(e=>mc.filter(t=>t.typeId===e)),...mc.filter(e=>!t.includes(e.typeId))];if(this.sharedModelCache){this.sharedModelCache.preload(n);return}if(!(!await this.modelResourcesPromise||this.disposed))for(let e of n){if(this.disposed)return;await this.loadModel(gc(e.typeId,e.state),e),await new Promise(e=>setTimeout(e,0))}}modelTemplate(e,t=!1){let n=_c(e,t);return n?this.modelResources?.get(gc(n.typeId,n.state))?.scene:void 0}setPresentationHidden(e){this.presentationHidden.clear();for(let t of e)this.presentationHidden.add(t)}importedUnitFor(e,t,n){let r=this.requestImportedModel(e,n);if(!r)return;let i=gc(r.typeId,r.state),a=this.modelResources?.get(i)??this.importedTemplates.get(i);if(!a)return;let o=this.importedUnits.get(t);if(o?.modelKey===i)return o;o&&this.removeImportedUnit(t,o);let s=Et(a.scene),c=Et(a.scene),l=a.pickGeometry?new B(a.pickGeometry,new L({side:2})):void 0,u=new tt(s),d=new tt(c),f=r?.animations&&this.animationClip(a,r.animations.walk),p={modelKey:i,template:a,body:s,pick:l,selection:void 0,occlusion:c,faction:r.faction,selectionMaterial:void 0,mixer:u,occlusionMixer:d,walkAction:f?u.clipAction(f):void 0,occlusionWalkAction:f?d.clipAction(f):void 0};return this.importedUnits.set(t,p),this.group.add(s),this.importedOcclusionGroups[r.faction].add(c),p}syncImportedUnit(e,t,n,r,i,a,o,s){let c=_c(e,s);if(!c)return;let l=this.importedUnitFor(e,t,s);if(l)return this.activeImportedUnits.add(t),l.body.position.set(n,r,i),l.body.rotation.set(0,-a+(c.bounds.yawOffset??0),0),l.pick&&(l.pick.position.copy(l.body.position),l.pick.rotation.copy(l.body.rotation)),l.occlusion.position.copy(l.body.position),l.occlusion.rotation.copy(l.body.rotation),l.walkAction&&(o?l.walkAction.isRunning()||l.walkAction.reset().play():l.walkAction.isRunning()&&l.walkAction.stop()),l.occlusionWalkAction&&(o?l.occlusionWalkAction.isRunning()||l.occlusionWalkAction.reset().play():l.occlusionWalkAction.isRunning()&&l.occlusionWalkAction.stop()),l}selectionClone(e){if(e.selection)return e.selection;let t=Et(e.template.scene),n=new L({color:16777215,side:2,toneMapped:!1});return t.traverse(e=>{e instanceof B&&(e.material=n,e.castShadow=e.receiveShadow=!1,e.frustumCulled=!1)}),e.selection=t,e.selectionMaterial=n,this.importedSelectionGroup.add(t),t}advanceImportedAnimations(e){let t=this.lastAnimationSyncMs??e,n=Math.min(.1,Math.max(0,e-t)/1e3);this.lastAnimationSyncMs=e;for(let e of this.importedUnits.values())e.walkAction?.isRunning()&&e.mixer.update(n),e.occlusionWalkAction?.isRunning()&&e.occlusionMixer.update(n);for(let[t,r]of this.defeatedImportedUnits)r.mixer.update(n),!(e<r.expiresAt)&&(this.retireCorpse(r),r.mixer.stopAllAction(),this.defeatedImportedUnits.delete(t));for(let[t,n]of this.fadingDeadUnits){let r=Math.min(1,(e-n.startMs)/n.durationMs);for(let e=0;e<n.materials.length;e++)n.materials[e].opacity=n.baseOpacities[e]*(1-r);if(n.body.position.y=n.startY-n.sinkMetres*r,!n.shadowDisabled&&r>=.5&&(n.shadowDisabled=!0,n.body.traverse(e=>{e.castShadow=!1})),!(r<1)){this.retireCorpse(n);for(let e of n.materials)e.dispose();this.fadingDeadUnits.delete(t)}}}retireCorpse(e){this.group.remove(e.body),e.occlusion&&this.importedOcclusionGroups[e.faction].remove(e.occlusion)}corpseShadowSources(){if(this.defeatedImportedUnits.size===0&&this.fadingDeadUnits.size===0)return Yc;let e=[];for(let t of this.defeatedImportedUnits.values())e.push({x:t.body.position.x,z:t.body.position.z,radius:t.radius});for(let t of this.fadingDeadUnits.values())e.push({x:t.body.position.x,z:t.body.position.z,radius:t.radius});return e}deathFadeDurationFor(e){return Math.min(el,Math.max(600,e.height*25))}animationClip(e,t){return e.animations.find(e=>e.name===t)}syncDefeats(e,t){let n=new Set;for(let r of e){if(r.kind!==`combatHit`||r.remainingHealth>0||n.has(r.targetId)||this.defeatedImportedUnits.has(r.targetId)||this.fadingDeadUnits.has(r.targetId))continue;let e=this.importedUnits.get(r.targetId),i=e?.modelKey.endsWith(`:deployed`)??!1,a=_c(r.targetTypeId,i);if(!a)continue;n.add(r.targetId);let o=this.modelResources?.get(gc(r.targetTypeId,a.state))??this.importedTemplates.get(gc(r.targetTypeId,a.state));if(!o)continue;let s=a.animations&&this.animationClip(o,a.animations.defeat),c=e?.body??Et(o.scene),l=e?.occlusion;e?(this.importedUnits.delete(r.targetId),e.selection&&this.importedSelectionGroup.remove(e.selection),e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()):this.group.add(c),c.position.set(r.targetX,Y,r.targetZ),c.rotation.set(0,-(r.targetHeading??0)+(a.bounds.yawOffset??0),0);let u=gn($t(r.targetTypeId),i);if(s){let e=new tt(c),n=e.clipAction(s);n.setLoop(z,1),n.clampWhenFinished=!0,n.play(),this.defeatedImportedUnits.set(r.targetId,{body:c,mixer:e,expiresAt:t+s.duration*1e3,occlusion:l,faction:a.faction,radius:u});continue}let d=this.boundsOf(r.targetTypeId,i),f=[],p=[],m=new Map,h=e=>{let t=m.get(e);if(t)return t;let n=e.clone();return n.transparent=!0,delete n.userData.outlineParameters,m.set(e,n),f.push(n),p.push(n.opacity),n};c.traverse(e=>{e instanceof B&&(e.material=Array.isArray(e.material)?e.material.map(h):h(e.material))}),this.fadingDeadUnits.set(r.targetId,{body:c,materials:f,baseOpacities:p,startY:c.position.y,sinkMetres:Math.min(Qc,d.height*$c),startMs:t,durationMs:this.deathFadeDurationFor(d),occlusion:l,faction:a.faction,radius:u,shadowDisabled:!1})}}removeDormantImportedUnits(){for(let[e,t]of this.importedUnits)this.activeImportedUnits.has(e)||this.removeImportedUnit(e,t)}removeImportedUnit(e,t){this.group.remove(t.body),t.selection&&this.importedSelectionGroup.remove(t.selection),this.importedOcclusionGroups[t.faction].remove(t.occlusion),t.selectionMaterial?.dispose(),t.pick?.material.dispose(),t.mixer.stopAllAction(),t.occlusionMixer.stopAllAction(),this.importedUnits.delete(e)}importedSelectionSources(){return this.importedSelectionGroup}importedPickSource(e){let t=this.importedUnits.get(e);return t?.pick??t?.body}importedOcclusionSources(){return Object.entries(this.importedOcclusionGroups).map(([e,t])=>({source:t,faction:e}))}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof B))return;let n=t.material;Array.isArray(n)?n.forEach(t=>Ct(t,e)):Ct(n,e)})}occlusionSources(){return[...this.meshes.values()].map(e=>({source:e.body,geometry:e.shell.geometry,faction:e.type.faction}))}selectionSources(){return[...this.meshes.values()].flatMap(e=>[{source:e.shell,geometry:e.shell.geometry,faction:e.type.faction,alert:!1},{source:e.alertShell,geometry:e.shell.geometry,faction:e.type.faction,alert:!0}])}setShardCutOffsets(e){this.shardCutOffsets=e}sync(e,t,n,r,i=performance.now()){this.advanceImportedAnimations(i),this.used.clear(),this.selected.clear(),this.alerted.clear(),this.activeImportedUnits.clear(),this.drawn=0,this.selectedDrawn=0,this.alertedDrawn=0;for(let e of this.meshes.values())e.matrixDirty=!1,e.shellMatrixDirty=!1,e.alertShellMatrixDirty=!1,e.shieldMatrixDirty=!1,e.bodyColourDirty=!1;for(let i of e.units){if(this.presentationHidden.has(i.id))continue;let e=i.deployTimer>0?1-i.deployTimer/Yt:+!!i.deployed,a=vc(i.typeId)&&(i.deployTimer>0?i.deployTarget?e>=.5:e>.5:i.deployed),o=this.meshes.get(`${i.typeId}:${a?`deployed`:`mobile`}`);if(!o)continue;let c=this.used.get(o.key)??0;if(c>=o.body.instanceMatrix.count)continue;this.used.set(o.key,c+1);let l=i.prevX+(i.x-i.prevX)*t,u=i.prevZ+(i.z-i.prevZ)*t,d=this.shardCutOffsets?.(i.x,i.z),f=l+(d?.x??0),p=u+(d?.z??0),m=r?.(i.id),h=rl(i.prevHeading,i.heading,t),g=f+(m?.forward??0)*Math.cos(h),_=p+(m?.forward??0)*Math.sin(h);this.rotation.makeRotationY(-h-(m?.yaw??0));let v=o.deployedAppearance,y=0;if(v)if(i.deployTimer>0){let e=1-i.deployTimer/Yt;y=i.deployTarget?e:1-e}else i.deployed&&(y=1);let b=Y-(v?.drop??0)*y,x=Math.hypot(i.x-i.prevX,i.z-i.prevZ)>.001,S=this.syncImportedUnit(i.typeId,i.id,g,b,_,h+(m?.yaw??0),x,a);if(o.body.visible=!S,this.matrix.copy(this.rotation),this.matrix.setPosition(g,b,_),o.matrixDirty=il(o.body,c,this.matrix)||o.matrixDirty,o.deployedShield&&v){this.matrix.copy(this.rotation),this.matrix.scale(new q(y,y,y));let e=v.shieldCentre,t=new q(e.x,e.y,e.z).applyMatrix4(this.rotation);this.matrix.setPosition(g+t.x,b+t.y,_+t.z),o.shieldMatrixDirty=il(o.deployedShield,c,this.matrix)||o.shieldMatrixDirty}let C=xt(o.type.faction),w=1;if(i.deployTimer>0){let e=1-i.deployTimer/Yt,t=i.deployTarget?1:.72;w=t+((i.deployTarget?.72:1)-t)*e}else i.deployed&&(w=.72);this.colour.setHex(C).multiplyScalar(w),o.bodyColourDirty=al(o.body,c,this.colour)||o.bodyColourDirty;let T=n(i.id);if(T!==void 0){let e=T===`attack`;if(S){let t=this.selectionClone(S);t.position.copy(S.body.position),t.rotation.copy(S.body.rotation),t.visible=!0,S.selectionMaterial?.color.set(e?16719904:s[o.type.faction].line)}else{let t=e?o.alertShell:o.shell,n=e?this.alerted:this.selected,r=n.get(o.key)??0;this.matrix.copy(this.rotation),this.matrix.setPosition(g,b,_);let i=il(t,r,this.matrix);e?o.alertShellMatrixDirty=i||o.alertShellMatrixDirty:o.shellMatrixDirty=i||o.shellMatrixDirty,n.set(o.key,r+1)}e?this.alertedDrawn++:this.selectedDrawn++}else S&&S.selection&&(S.selection.visible=!1);this.drawn++}this.removeDormantImportedUnits();for(let e of this.meshes.values()){let t=this.used.get(e.key)??0;e.body.count=t,e.shell.count=this.selected.get(e.key)??0,e.alertShell.count=this.alerted.get(e.key)??0,e.deployedShield&&(e.deployedShield.count=t),e.matrixDirty&&(e.body.instanceMatrix.needsUpdate=!0),e.shellMatrixDirty&&(e.shell.instanceMatrix.needsUpdate=!0),e.alertShellMatrixDirty&&(e.alertShell.instanceMatrix.needsUpdate=!0),e.deployedShield&&e.shieldMatrixDirty&&(e.deployedShield.instanceMatrix.needsUpdate=!0),e.bodyColourDirty&&e.body.instanceColor&&(e.body.instanceColor.needsUpdate=!0)}}static footprintOf(e,t=!1){return gn(e,t)}modelStatus(e,t=!1){let n=_c(e,t);if(!n)return;let r=gc(n.typeId,n.state);return this.modelResources?.status(r)??(this.pendingModelLoads.has(r)?this.modelLoaderState:void 0)}detailedPerformanceStats(){if(!this.modelResources)return;let e=this.modelResources.counts,t=0;for(let e of this.importedUnits.values())e.selection?.visible&&t++;return{loadedModels:e.loaded,loadingModels:e.loading,failedModels:e.failed,fallbacks:this.drawn-this.activeImportedUnits.size,visible:this.activeImportedUnits.size,selection:t,occlusion:this.activeImportedUnits.size}}dispose(){this.disposed=!0,this.pendingModelLoads.clear();for(let e of this.importedUnits.values()){this.group.remove(e.body),e.selection&&this.importedSelectionGroup.remove(e.selection);for(let t of Object.values(this.importedOcclusionGroups))t.remove(e.occlusion);e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()}this.importedUnits.clear();for(let e of this.defeatedImportedUnits.values())this.retireCorpse(e),e.mixer.stopAllAction();this.defeatedImportedUnits.clear();for(let e of this.fadingDeadUnits.values()){this.retireCorpse(e);for(let t of e.materials)t.dispose()}this.fadingDeadUnits.clear(),this.importedSelectionGroup.clear();for(let e of Object.values(this.importedOcclusionGroups))e.clear();this.ownsModelResources&&this.modelResources?.dispose();for(let e of this.meshes.values())e.body.geometry.dispose(),sl(e.body.material),e.shell.geometry.dispose(),sl(e.shell.material),sl(e.alertShell.material),e.deployedShield&&(e.deployedShield.geometry.dispose(),sl(e.deployedShield.material))}};function sl(e){Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}var cl=class{renderer;idleWindow;state_=`idle`;completed=[];failure_;generation=0;idleHandle;timeoutHandle;parallelShaderCompile;onContextLost=()=>this.cancel();constructor(e,t=window){this.renderer=e,this.idleWindow=t,this.parallelShaderCompile=e.getContext().getExtension(`KHR_parallel_shader_compile`)!==null,e.domElement.addEventListener(`webglcontextlost`,this.onContextLost)}get telemetry(){return{state:this.state_,completedTasks:this.completed,failure:this.failure_,parallelShaderCompile:this.parallelShaderCompile}}start(e){this.cancelScheduledTurn(),this.completed.length=0,this.failure_=void 0;let t=++this.generation;if(!this.parallelShaderCompile){this.state_=`unsupported`;return}this.state_=`running`;let n=0,r=()=>{if(t!==this.generation||this.state_!==`running`)return;let i=e[n++];if(!i){this.state_=`complete`;return}let a=performance.now(),o;try{o=i.run()}catch(e){this.fail(t,e);return}let s=performance.now()-a;this.completed.push({name:i.name,invocationMs:s}),s>50&&console.warn(`Shader prewarm task ${i.name} blocked the title for ${s.toFixed(1)} ms`),Promise.resolve(o).then(()=>this.schedule(t,r),e=>this.fail(t,e))};this.schedule(t,r)}cancel(){++this.generation,this.cancelScheduledTurn(),(this.state_===`running`||this.state_===`idle`)&&(this.state_=`cancelled`)}dispose(){this.cancel(),this.renderer.domElement.removeEventListener(`webglcontextlost`,this.onContextLost)}schedule(e,t){if(e===this.generation&&this.state_===`running`){if(this.idleWindow.requestIdleCallback){this.idleHandle=this.idleWindow.requestIdleCallback(()=>{this.idleHandle=void 0,t()},{timeout:250});return}this.timeoutHandle=setTimeout(()=>{this.timeoutHandle=void 0,t()},0)}}cancelScheduledTurn(){this.idleHandle!==void 0&&this.idleWindow.cancelIdleCallback?.(this.idleHandle),this.timeoutHandle!==void 0&&clearTimeout(this.timeoutHandle),this.idleHandle=void 0,this.timeoutHandle=void 0}fail(e,t){e===this.generation&&(this.failure_=t,this.state_=`failed`,this.cancelScheduledTurn(),console.warn(`Critical shader prewarm failed; the normal render path remains available.`,t))}};function ll(e,t,n,r,i){return{name:t,run:async()=>{await e.compileAsync(n,r,i)}}}function ul(e,t,n){return{name:t,run:()=>e.initRenderTarget(n)}}var dl=2e-5,fl=.58,pl=class{units;group=new h;overlayScene=new ne;depthScene=new ne;occluderTarget;unitDepthTarget;size=new K;overlays;importedOverlays;constructor(e){this.units=e,this.occluderTarget=ml(),this.unitDepthTarget=ml(),this.group.name=`unit-occlusion-overlay`,this.overlayScene.add(this.group),this.overlays=this.units.occlusionSources().map(e=>this.createOverlay(e)),this.importedOverlays=this.units.importedOcclusionSources().map(e=>this.createImportedOverlay(e))}captureOccluderDepth(e,t,n){this.resizeToRenderer(e);let r=this.units.group.visible,i=e.getRenderTarget(),a=e.autoClear,o=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,this.units.group.visible=!1;try{e.setRenderTarget(this.occluderTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(t,n)}finally{e.setRenderTarget(i),e.autoClear=a,this.units.group.visible=r,e.shadowMap.autoUpdate=o}}render(e,t){for(let e of this.overlays){let t=e.source.source.visible?e.source.source.count:0;e.mesh.count=t,e.depthMesh.count=t,e.colour.setHex(xt(e.source.faction))}for(let e of this.importedOverlays)e.colour.setHex(xt(e.source.faction));this.captureUnitSilhouetteDepth(e,t);let n=e.autoClear;try{e.autoClear=!1,e.render(this.overlayScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.material,e.render(n.scene,t))}finally{e.autoClear=n}}shaderPrewarmTasks(e,t){return this.resizeToRenderer(e),[ul(e,`unit-occlusion: world-depth target`,this.occluderTarget),ul(e,`unit-occlusion: unit-depth target`,this.unitDepthTarget),ll(e,`unit-occlusion: unit-depth shader`,this.depthScene,t),ll(e,`unit-occlusion: composite shader`,this.overlayScene,t)]}dispose(){this.occluderTarget.dispose(),this.unitDepthTarget.dispose();for(let e of this.overlays)e.material.dispose(),e.depthMaterial.dispose();for(let e of this.importedOverlays)e.material.dispose(),e.depthMaterial.dispose(),e.source.source.removeFromParent(),e.scene.clear();this.group.clear(),this.overlayScene.clear(),this.depthScene.clear()}createOverlay(e){let t=new V(xt(e.faction)),n=new F({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:fl},epsilon:{value:dl}},vertexShader:`
        void main() {
          vec4 viewPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        uniform sampler2D occluderDepth;
        uniform sampler2D unitDepth;
        uniform vec2 resolution;
        uniform vec3 colour;
        uniform float opacity;
        uniform float epsilon;

        void main() {
          vec2 screenUv = gl_FragCoord.xy / resolution;
          float worldDepth = texture2D(occluderDepth, screenUv).x;
          float unitSilhouetteDepth = texture2D(unitDepth, screenUv).x;
          // Compare the two rendered silhouette layers, rather than testing each model fragment
          // against the city. If the unit layer is in front, none of that unit receives an x-ray.
          if (unitSilhouetteDepth <= worldDepth + epsilon) discard;
          // Emit the tint only once, from the front-most surface of the unit silhouette layer.
          if (gl_FragCoord.z > unitSilhouetteDepth + epsilon) discard;
          gl_FragColor = vec4(colour, opacity);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),r=new M(e.geometry,n,e.source.instanceMatrix.count);r.instanceMatrix=e.source.instanceMatrix,r.count=0,r.frustumCulled=!1,this.group.add(r);let i=new F({colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          vec4 viewPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        void main() { }
      `}),a=new M(e.geometry,i,e.source.instanceMatrix.count);return a.instanceMatrix=e.source.instanceMatrix,a.count=0,a.frustumCulled=!1,this.depthScene.add(a),{source:e,mesh:r,depthMesh:a,material:n,depthMaterial:i,colour:t}}createImportedOverlay(e){let t=new V(xt(e.faction)),n=new F({transparent:!0,side:2,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:fl},epsilon:{value:dl}},vertexShader:`
        void main() {
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        uniform sampler2D occluderDepth;
        uniform sampler2D unitDepth;
        uniform vec2 resolution;
        uniform vec3 colour;
        uniform float opacity;
        uniform float epsilon;

        void main() {
          vec2 screenUv = gl_FragCoord.xy / resolution;
          float worldDepth = texture2D(occluderDepth, screenUv).x;
          float unitSilhouetteDepth = texture2D(unitDepth, screenUv).x;
          if (unitSilhouetteDepth <= worldDepth + epsilon) discard;
          if (gl_FragCoord.z > unitSilhouetteDepth + epsilon) discard;
          gl_FragColor = vec4(colour, opacity);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),r=new F({side:2,colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        void main() { }
      `}),i=new ne;return i.add(e.source),{source:e,scene:i,material:n,depthMaterial:r,colour:t}}captureUnitSilhouetteDepth(e,t){let n=e.getRenderTarget(),r=e.autoClear;try{e.setRenderTarget(this.unitDepthTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(this.depthScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.depthMaterial,e.render(n.scene,t))}finally{e.setRenderTarget(n),e.autoClear=r}}resizeToRenderer(e){e.getDrawingBufferSize(this.size);let t=Math.max(1,Math.floor(this.size.x)),n=Math.max(1,Math.floor(this.size.y));(this.occluderTarget.width!==t||this.occluderTarget.height!==n)&&(this.occluderTarget.setSize(t,n),this.unitDepthTarget.setSize(t,n))}};function ml(){let e=new C(1,1,Ye);e.format=ut;let t=new Ne(1,1,{depthBuffer:!0});return t.depthTexture=e,t}var hl=2,gl=8,_l=.3,vl=.52,yl=class{units;maskScene=new ne;maskGroup=new h;maskTarget=bl(!0);horizontalTarget=bl(!1);postScene=new ne;postCamera=new m(-1,1,1,-1,0,2);horizontalMaterial;compositeMaterial;fullscreen;buildingMask;masks;resolution=new K;clearColour=new V;constructor(e){this.units=e,this.postCamera.position.z=1,this.maskScene.add(this.maskGroup),this.masks=this.units.selectionSources().map(e=>this.createMask(e)),this.maskGroup.add(this.units.importedSelectionSources()),this.buildingMask=new B(new ae,new L({color:16719904,side:2,toneMapped:!1})),this.buildingMask.visible=!1,this.maskGroup.add(this.buildingMask),this.horizontalMaterial=xl(this.maskTarget.texture,this.resolution,!1),this.compositeMaterial=xl(this.horizontalTarget.texture,this.resolution,!0),this.compositeMaterial.uniforms.originMask.value=this.maskTarget.texture,this.fullscreen=new B(new ae(2,2),this.horizontalMaterial),this.fullscreen.frustumCulled=!1,this.postScene.add(this.fullscreen)}render(e,t,n){this.syncSources(n),!(this.units.selectedDrawn===0&&this.units.alertedDrawn===0&&!n)&&(this.resizeToRenderer(e),this.captureMask(e,t),this.renderHorizontal(e),this.composite(e))}shaderPrewarmTasks(e,t){return this.resizeToRenderer(e),[ul(e,`selection-silhouette: mask target`,this.maskTarget),ul(e,`selection-silhouette: horizontal target`,this.horizontalTarget),ll(e,`selection-silhouette: mask shader`,this.maskScene,t),{name:`selection-silhouette: horizontal shader`,run:async()=>{this.fullscreen.material=this.horizontalMaterial,await e.compileAsync(this.postScene,this.postCamera)}},{name:`selection-silhouette: composite shader`,run:async()=>{this.fullscreen.material=this.compositeMaterial,await e.compileAsync(this.postScene,this.postCamera)}}]}dispose(){this.maskTarget.dispose(),this.horizontalTarget.dispose(),this.horizontalMaterial.dispose(),this.compositeMaterial.dispose(),this.fullscreen.geometry.dispose(),this.buildingMask.material.dispose();for(let e of this.masks)e.mesh.material.dispose();this.maskGroup.remove(this.units.importedSelectionSources()),this.maskGroup.clear(),this.maskScene.clear(),this.postScene.clear()}createMask(e){let t=new M(e.geometry,new L({color:e.alert?16719904:s[e.faction].line,side:2,toneMapped:!1}),e.source.instanceMatrix.count);return t.instanceMatrix=e.source.instanceMatrix,t.count=0,t.frustumCulled=!1,this.maskGroup.add(t),{source:e,mesh:t}}syncSources(e){for(let e of this.masks)e.mesh.count=e.source.source.count;this.buildingMask.visible=e!==void 0,e&&(this.buildingMask.geometry=e.geometry,this.buildingMask.material.color.setHex(e.colour))}captureMask(e,t){let n=e.getRenderTarget(),r=e.autoClear,i=e.getClearAlpha();e.getClearColor(this.clearColour);try{e.setRenderTarget(this.maskTarget),e.autoClear=!1,e.setClearColor(0,0),e.clear(!0,!0,!0),e.render(this.maskScene,t)}finally{e.setClearColor(this.clearColour,i),e.setRenderTarget(n),e.autoClear=r}}renderHorizontal(e){let t=e.getRenderTarget(),n=e.autoClear;try{e.setRenderTarget(this.horizontalTarget),e.autoClear=!1,e.clear(!0,!0,!0),this.fullscreen.material=this.horizontalMaterial,e.render(this.postScene,this.postCamera)}finally{e.setRenderTarget(t),e.autoClear=n}}composite(e){let t=e.autoClear;try{e.autoClear=!1,this.fullscreen.material=this.compositeMaterial,e.render(this.postScene,this.postCamera)}finally{e.autoClear=t}}resizeToRenderer(e){e.getDrawingBufferSize(this.resolution);let t=Math.max(1,Math.floor(this.resolution.x)),n=Math.max(1,Math.floor(this.resolution.y));(this.maskTarget.width!==t||this.maskTarget.height!==n)&&(this.maskTarget.setSize(t,n),this.horizontalTarget.setSize(t,n));let r=Math.min(gl,Math.max(1,Math.round(hl*e.getPixelRatio())));this.horizontalMaterial.uniforms.radius.value=r,this.compositeMaterial.uniforms.radius.value=r}};function bl(e){let t=new Ne(1,1,{depthBuffer:e});return t.texture.minFilter=ge,t.texture.magFilter=ge,t.texture.generateMipmaps=!1,t}function xl(e,t,n){return new F({transparent:n,depthTest:!1,depthWrite:!1,uniforms:{mask:{value:e},originMask:{value:e},resolution:{value:t},radius:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:n?Cl():Sl()})}function Sl(){return`
    uniform sampler2D mask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${gl}; offset <= ${gl}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(float(offset) / resolution.x, 0.0));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      gl_FragColor = best;
    }
  `}function Cl(){return`
    uniform sampler2D mask;
    uniform sampler2D originMask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${gl}; offset <= ${gl}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(0.0, float(offset) / resolution.y));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      if (best.a < 0.5) discard;
      float original = texture2D(originMask, vUv).a;
      float opacity = original >= 0.5 ? ${_l.toFixed(2)} : ${vl.toFixed(2)};
      gl_FragColor = vec4(best.rgb, opacity);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}var wl={x:-1244,y:3e3,z:700},Tl=16770750,El=2.6,Dl=7438479,Ol=.82,kl={x:-wl.x/wl.y,z:-wl.z/wl.y},Al=4096,jl=760,Ml=1900,Nl=.9;function Pl(e,t,n){if(!e.castShadow)return;let r=$e.clamp(n,0,1),i=$e.lerp(jl,Ml,r*r),a=i*2/Al,o=Math.round(t.x/a)*a,s=Math.round(t.z/a)*a;e.position.set(wl.x+o,wl.y,wl.z+s),e.target.position.set(o,0,s),e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.radius=Nl/a,e.shadow.camera.updateProjectionMatrix()}function Fl(e={cityLighting:!0,enhancedShadows:!0}){let t=e.cityLighting?new b(Tl,El):new b(16774102,2.05);return e.enhancedShadows?t.position.set(wl.x,wl.y,wl.z):t.position.set(-1,1,0).normalize(),t.castShadow=e.enhancedShadows,e.enhancedShadows?(t.shadow.mapSize.set(Al,Al),t.shadow.camera.left=-1900,t.shadow.camera.right=Ml,t.shadow.camera.top=Ml,t.shadow.camera.bottom=-1900,t.shadow.camera.near=100,t.shadow.camera.far=6e3,t.shadow.normalBias=.12,t.shadow.bias=-8e-5,t.shadow.radius=Nl/(Ml*2/Al),t.shadow.camera.updateProjectionMatrix(),t):t}function Il(e={cityLighting:!0,enhancedShadows:!0}){return e.cityLighting?new k(Vs.sky,Dl,Ol):new k(Vs.sky,7236170,1)}var Ll=256,Rl=Y+.12,zl=kl.x,Bl=kl.z,Vl=2.75,Hl=6.25,Ul=8,Wl=1.4,Gl=1,Kl=0;function ql(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Jl=class{group=new h;buildings;contacts;trees;units;matrix=new Be;scale=new q;enhancedShadows;buildingSignature=``;contactsEnabled=!1;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}){this.enhancedShadows=n.enhancedShadows;let r=(e,t)=>new Ae({color:1512978,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,...t===void 0?{}:{side:t}});this.buildings=new B(new J,r(n.enhancedShadows?.1:.24)),this.buildings.name=`building-shadows`,this.contacts=new B(new J,r(.22,2)),this.contacts.name=`building-contact-ao`,this.contactsEnabled=n.ambientOcclusion,this.contacts.visible=n.ambientOcclusion,this.trees=new B(new J,r(n.enhancedShadows?.13:.24)),this.trees.name=`tree-shadows`,this.units=new M(new Ze(1,12),r(n.enhancedShadows?.18:.24),Ll),this.units.visible=!n.enhancedShadows,this.units.instanceMatrix.setUsage(P),this.units.count=0;for(let e of[this.buildings,this.contacts,this.trees,this.units])e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1;this.group.add(this.buildings,this.contacts,this.trees,this.units),this.rebuildTreeShadows(e),this.sync(e,t)}setStaticShadowsVisible(e){this.buildings.visible=e,this.trees.visible=e,this.contacts.visible=e&&this.contactsEnabled}refreshStatic(e){this.rebuildTreeShadows(e),this.rebuildBuildingShadows(e),this.rebuildBuildingContacts(e),this.buildingSignature=e.buildings.map(e=>Do(e)).join(`,`)}sync(e,t,n=[]){let r=e.buildings.map(e=>Do(e)).join(`,`);r!==this.buildingSignature&&(this.buildingSignature=r,this.rebuildBuildingShadows(e),this.rebuildBuildingContacts(e));let i=0,a=!1,o=this.units.instanceMatrix.count,s=(e,t,n)=>{this.matrix.makeRotationX(-Math.PI/2),this.scale.set(n*.9,n*.62,1),this.matrix.scale(this.scale),this.matrix.setPosition(e+n*.22,Rl+.03,t+n*.16),a=ql(this.units,i++,this.matrix)||a};for(let e of t.units){if(i>=o)break;s(e.x,e.z,gn(t.typeOf(e),e.deployed))}for(let e of n){if(i>=o)break;s(e.x,e.z,e.radius)}this.units.count=i,a&&(this.units.instanceMatrix.needsUpdate=!0)}rebuildBuildingShadows(e){let t=[],n=e.surfaces.flatMap(Yl);for(let r of e.buildings){let e=ko(r);if(e<=0)continue;let i=e*(this.enhancedShadows?1:.48),a=this.enhancedShadows?zl:Gl,o=this.enhancedShadows?Bl:Kl,s=r.clip??Vt(r),c=Xl([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]);this.appendClippedShadow(t,n,c)}let r=this.buildings.geometry,i=new J;i.setAttribute(`position`,new W(new Float32Array(t),3)),i.computeVertexNormals(),this.buildings.geometry=i,r.dispose()}rebuildBuildingContacts(e){let t=[],n=e.surfaces.flatMap(Yl);for(let r of e.buildings){if(r.state===`rubble`)continue;let e=r.clip??Vt(r);if(e.length<3)continue;let i=e.map(e=>{let t=e.x-r.x,n=e.z-r.z,i=Math.hypot(t,n)||1;return{x:e.x+t/i*Wl,z:e.z+n/i*Wl}});for(let r=0;r<e.length;r++){let a=(r+1)%e.length,o=e[r],s=e[a],c=i[r],l=i[a];!o||!s||!c||!l||(this.appendClippedShadow(t,n,[o,l,c]),this.appendClippedShadow(t,n,[o,s,l]))}}let r=this.contacts.geometry,i=new J;i.setAttribute(`position`,new W(new Float32Array(t),3)),i.computeVertexNormals(),this.contacts.geometry=i,r.dispose()}rebuildTreeShadows(e){let t=[],n=e.surfaces.flatMap(Yl);for(let r of e.trees){let e=Vl*r.scale,i=Hl*r.scale*(this.enhancedShadows?1:.48),a=this.enhancedShadows?zl:Gl,o=this.enhancedShadows?Bl:Kl,s=Array.from({length:Ul},(t,n)=>{let i=n/Ul*Math.PI*2;return{x:r.x+Math.cos(i)*e,z:r.z+Math.sin(i)*e}});this.appendClippedShadow(t,n,Xl([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]))}let r=this.trees.geometry,i=new J;i.setAttribute(`position`,new W(new Float32Array(t),3)),i.computeVertexNormals(),this.trees.geometry=i,r.dispose()}appendClippedShadow(e,t,n){for(let r of t){let t=Ht(r,n);for(let n=1;n<t.length-1;n++)this.appendTriangle(e,t[0],t[n+1],t[n])}}appendTriangle(e,t,n,r){if(!t||!n||!r)return;let i=(n.x-t.x)*(r.z-t.z)-(n.z-t.z)*(r.x-t.x);if(!(Math.abs(i)<=1e-9))for(let i of[t,n,r])e.push(i.x,Rl,i.z)}dispose(){for(let e of[this.buildings,this.contacts,this.trees,this.units])e.geometry.dispose(),e.material.dispose()}};function Yl(e){if(e.length<3)return[];let t=e.map(e=>new K(e.x,e.z));return ye.triangulateShape(t,[]).flatMap(t=>{let[n,r,i]=t,a=n===void 0?void 0:e[n],o=r===void 0?void 0:e[r],s=i===void 0?void 0:e[i];return a&&o&&s?[[a,o,s]]:[]})}function Xl(e){let t=[...e].sort((e,t)=>e.x-t.x||e.z-t.z),n=(e,t,n)=>(t.x-e.x)*(n.z-e.z)-(t.z-e.z)*(n.x-e.x),r=e=>{let t=[];for(let r of e){for(;t.length>=2&&n(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t},i=r(t),a=r([...t].reverse());return i.pop(),a.pop(),[...i,...a]}var Zl=760,Ql={machines:7398333,ancients:14730627},$l=class{group=new h;surface=new h;inner;outer;innerMaterial;outerMaterial;startedAt=-1/0;constructor(){this.innerMaterial=eu(),this.outerMaterial=eu(),this.inner=tu(3.75,5.45,this.innerMaterial),this.outer=tu(7.8,8.8,this.outerMaterial),this.surface.rotation.x=-Math.PI/2,this.surface.add(this.inner,this.outer),this.group.add(this.surface),this.group.visible=!1}show(e,t,n,r){let i=Ql[n];this.innerMaterial.color.setHex(i),this.outerMaterial.color.setHex(i),this.group.position.set(e,Y+.35,t),this.startedAt=r,this.group.visible=!0,this.sync(r)}sync(e){if(!this.group.visible)return;let t=(e-this.startedAt)/Zl;if(t>=1){this.group.visible=!1;return}let n=Math.max(0,t),r=1+Math.sin(n*Math.PI)*.06;this.inner.scale.setScalar(r),this.outer.scale.setScalar(.72+n*.9),this.innerMaterial.opacity=.82*(1-n*.38),this.outerMaterial.opacity=.76*(1-n)}dispose(){this.inner.geometry.dispose(),this.outer.geometry.dispose(),this.innerMaterial.dispose(),this.outerMaterial.dispose(),this.group.clear()}};function eu(){let e=new Ae({color:16777215,flatShading:!0,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1,side:2});return e.userData.outlineParameters={visible:!1},e}function tu(e,t,n){let r=new B(new p(e,t,48),n);return r.renderOrder=16,r}var nu=2400,ru=7e3,iu=1600,au=1e3;function ou(e,t,n,r){let i=(e,i)=>({x:t+e*r,y:n+i*r}),a=[i(-115,5),i(-75,-25),i(-20,-18),i(5,-48),i(70,-38),i(105,-8),i(92,18),i(-55,24)],o=[a[7],a[6],i(92,43),i(-55,49)],s=[a[6],a[5],i(105,18),i(92,43)],c=(t,n)=>{let r=t[0];if(r){e.beginPath(),e.moveTo(r.x,r.y);for(let n of t.slice(1))e.lineTo(n.x,n.y);e.closePath(),e.fillStyle=n,e.fill()}};c(o,`#dbd8c6`),c(s,`#c9c8bb`),c(a,`#f6f0dd`)}function su(){let e=document.createElement(`canvas`);e.width=iu,e.height=au;let t=e.getContext(`2d`);if(t){let n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,`#${new V(Vs.sky).getHexString()}`),n.addColorStop(1,`#${new V(Vs.skyHorizon).getHexString()}`),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),ou(t,255,160,.75),ou(t,1240,125,1.1)}let n=new Fe(e);return n.colorSpace=E,n.needsUpdate=!0,n}var cu=class{scene=new ne;city;units;unitOcclusion;selectionSilhouette;combat;cutterSweep;moveCommandIndicator;shadows;skyGradient;earth;sun;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1},r){this.skyGradient=su(),this.scene.background=this.skyGradient,this.scene.fog=new te(Vs.skyHorizon,nu,ru),this.earth=new Uc,this.scene.add(this.earth.group),this.shadows=new Jl(e,t,n),this.scene.add(this.shadows.group),this.city=new ic(e),this.scene.add(this.city.group),this.units=new ol(t,void 0,r),this.scene.add(this.units.group),this.unitOcclusion=new pl(this.units),this.selectionSilhouette=new yl(this.units),this.combat=new jc,this.scene.add(this.combat.group),this.cutterSweep=new Nc,this.scene.add(this.cutterSweep.group),this.moveCommandIndicator=new $l,this.scene.add(this.moveCommandIndicator.group),this.sun=Fl(n),this.scene.add(this.sun,this.sun.target),this.scene.add(Il(n))}rebuildCity(e){return this.scene.remove(this.city.group),this.city.dispose(),this.city=new ic(e),this.scene.add(this.city.group),this.city}updateShadowCoverage(e,t){Pl(this.sun,e,t)}shaderPrewarmTasks(e,t,n){return[ll(e,`game-scene: visible material programs`,this.scene,t),...n?[ll(e,`game-scene: alternate faction programs`,this.scene,n)]:[],...this.unitOcclusion.shaderPrewarmTasks(e,t),...this.selectionSilhouette.shaderPrewarmTasks(e,t)]}dispose(){this.city.dispose(),this.unitOcclusion.dispose(),this.selectionSilhouette.dispose(),this.units.dispose(),this.combat.dispose(),this.cutterSweep.dispose(),this.moveCommandIndicator.dispose(),this.shadows.dispose(),this.earth.dispose(),this.skyGradient.dispose(),this.scene.clear()}},lu=new q;function uu(e,t,n){let r=du(e,n);if(!r)return;let i,a=1/0;for(let e of t){let t=(e.x-r.x)**2+(e.z-r.z)**2;t>196||t>=a||(i=e,a=t)}return i?.id}function du(e,t,n=Y){lu.set(t.x,t.y,.5).unproject(e);let r=e.position,i=lu.sub(r);if(Math.abs(i.y)<1e-6)return;let a=(n-r.y)/i.y;if(!(a<0))return new q(r.x+i.x*a,n,r.z+i.z*a)}function fu(e,t,n,r){pu.setFromCamera(n,e);let i,a=1/0;for(let e of t.units){let t=r?.importedPickSource?.(e.id),n=t?xu(t):vu(e,r);!n||n.distance>=a||(a=n.distance,i=e.id)}return i}var pu=new he,mu=[],hu=[],gu=new Map,_u=new Be;function vu(e,t){let n=Cu(e),r=`${e.typeId}:${n?`deployed`:`mobile`}`,i=gu.get(r);if(!i){let a=yu(e.typeId,n,t),o=new R(a.size.x,a.size.y,a.size.z);o.translate(a.centre.x,a.centre.y,a.centre.z),i=new B(o,new L({side:2})),i.matrixAutoUpdate=!1,gu.set(r,i)}return wu(i,e,t),mu.length=0,i.raycast(pu,mu),Su(mu)}function yu(e,t,n){return n?.boundsOf?n.boundsOf(e,t):yc(e,t)}function bu(e,t){return t?.deployedAppearanceFor?t.deployedAppearanceFor(e):nl(e,yc(e,!1))}function xu(e){return e.updateMatrixWorld(!0),hu.length=0,pu.intersectObject(e,!0,hu),Su(hu)}function Su(e){let t;for(let n of e)(!t||n.distance<t.distance)&&(t=n);return t}function Cu(e){if(!vc(e.typeId))return!1;if(e.deployTimer>0){let t=1-e.deployTimer/Yt;return e.deployTarget?t>=.5:t>.5}return e.deployed}function wu(e,t,n){let r=bu(t.typeId,n),i=0;if(r)if(t.deployTimer>0){let e=1-t.deployTimer/Yt;i=t.deployTarget?e:1-e}else t.deployed&&(i=1);_u.makeRotationY(-t.heading),_u.setPosition(t.x,Y-(r?.drop??0)*i,t.z),e.matrixWorld.copy(_u)}function Tu(e,t,n){lu.set(n.x,n.y,.5).unproject(e);let r=e.position,i=lu.x-r.x,a=lu.y-r.y,o=lu.z-r.z,s,c=1/0;for(let e of t.buildings){let t=Oo(e),n=e.rotation??0,l=Lt({x:r.x-e.x,z:r.z-e.z},-n),u=Lt({x:i,z:o},-n),d=Eu(l.x,r.y,l.z,u.x,a,u.z,-e.width/2,0,-e.depth/2,e.width/2,t,e.depth/2);d!==void 0&&d<c&&(c=d,s=e.id)}return s}function Eu(e,t,n,r,i,a,o,s,c,l,u,d){let f=0,p=1/0;for(let[m,h,g,_]of[[e,r,o,l],[t,i,s,u],[n,a,c,d]]){if(Math.abs(h)<1e-9){if(m<g||m>_)return;continue}let e=(g-m)/h,t=(_-m)/h;if(e>t&&([e,t]=[t,e]),f=Math.max(f,e),p=Math.min(p,t),f>p)return}return p>=0?f:void 0}function Du(e,t,n){let r=[];for(let i of t.units)ku(e,i,n)&&r.push(i.id);return r.sort((e,t)=>e-t)}function Ou(e,t){return Du(e,t,{x0:-1,y0:-1,x1:1,y1:1})}function ku(e,t,n){return lu.set(t.x,Y,t.z).project(e),lu.z<-1||lu.z>1?!1:lu.x>=n.x0&&lu.x<=n.x1&&lu.y>=n.y0&&lu.y<=n.y1}var Au={fovDeg:28,minDistance:200,maxDistance:1500,initialDistance:750,minPitchDeg:50,maxPitchDeg:58,yawDeg:45,nearPlane:50,farPlane:16e4,basePanSpeed:120,zoomSpeed:.0016,smoothing:12,panLimit:pn*.6},ju=class{camera;target=new q(0,0,0);desiredTarget=new q(0,0,0);distance;desiredDistance;lastGrabPointer=new K;grabDragActive=!1;constructor(e,t={x:0,z:0}){this.camera=new Ue(Au.fovDeg,e,Au.nearPlane,Au.farPlane),this.distance=Au.initialDistance,this.desiredDistance=this.distance,this.target.set(t.x,0,t.z),this.desiredTarget.copy(this.target),this.applyTransform()}get zoomFraction(){return $e.inverseLerp(Au.minDistance,Au.maxDistance,this.distance)}get pitchDeg(){let e=Math.sqrt(this.zoomFraction);return $e.lerp(Au.minPitchDeg,Au.maxPitchDeg,e)}get focus(){return this.target}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}focusOn(e){this.desiredTarget.set(e.x,0,e.z),this.clampDesiredTarget()}update(e,t){if(e.zoomDelta!==0){let t=Math.exp(e.zoomDelta*Au.zoomSpeed);this.desiredDistance=$e.clamp(this.desiredDistance*t,Au.minDistance,Au.maxDistance)}let n=e.panVector;if(n.x!==0||n.y!==0){let e=Au.basePanSpeed*(1+this.zoomFraction*4)*t,r=$e.degToRad(Au.yawDeg),i=Math.sin(r),a=Math.cos(r);this.desiredTarget.x+=(n.y*i-n.x*a)*e,this.desiredTarget.z+=(n.x*i+n.y*a)*e,this.clampDesiredTarget()}if(e.middlePanHeld||e.touchPanHeld){let t=du(this.camera,e.pointer);if(this.grabDragActive&&t){let e=du(this.camera,this.lastGrabPointer);e&&(this.desiredTarget.x+=e.x-t.x,this.desiredTarget.z+=e.z-t.z,this.clampDesiredTarget())}this.lastGrabPointer.copy(e.pointer),this.grabDragActive=!0}else this.grabDragActive=!1;let r=1-Math.exp(-Au.smoothing*t);this.distance+=(this.desiredDistance-this.distance)*r,this.target.lerp(this.desiredTarget,r),this.applyTransform()}clampDesiredTarget(){let e=Math.hypot(this.desiredTarget.x,this.desiredTarget.z);if(e>Au.panLimit){let t=Au.panLimit/e;this.desiredTarget.x*=t,this.desiredTarget.z*=t}}applyTransform(){let e=$e.degToRad(this.pitchDeg),t=$e.degToRad(Au.yawDeg),n=Math.cos(e)*this.distance;this.camera.position.set(this.target.x-Math.sin(t)*n,this.target.y+Math.sin(e)*this.distance,this.target.z-Math.cos(t)*n),this.camera.lookAt(this.target)}};function Mu(e){let t=new URLSearchParams(e),n=t.get(`ai`),r=n===`both`?[`machines`,`ancients`]:n?.split(`,`).map(e=>e.trim())??[],i={};for(let e of r)(e===`machines`||e===`ancients`)&&(i[e]=`ai`);return{controllers:Object.keys(i).length>0?i:void 0,detailedPerformance:t.get(`detailedPerf`)===`1`,detailedStress:t.get(`stress`)===`detailed`}}function Nu(e,t,n){let r,i=1/0;for(let a of e.buildings){if(a.state===`rubble`)continue;let e=(a.x-t)**2+(a.z-n)**2;e<i&&(i=e,r=a.id)}return r}function Pu(e,t){let n=e.city.startAnchors[0];if(!n||e.nav.onShardCells<=0)return{reachSmall:0,reachLarge:0,reachLargeStrict:0,atFocusSmall:!1,atFocusLarge:!1};let r=e.nav.flood(n.x,n.z,`small`,t,!1,3),i=e.nav.flood(n.x,n.z,`large`,t,!1,13),a=e.nav.flood(n.x,n.z,`large`,t,!0,13);return{reachSmall:r.count/e.nav.onShardCells,reachLarge:i.count/e.nav.onShardCells,reachLargeStrict:a.count/e.nav.onShardCells,atFocusSmall:r.reachedTarget,atFocusLarge:i.reachedTarget}}var Fu=class{windowTicks;ticks=[];earned=[];total=0;last=null;constructor(e=360){this.windowTicks=e}add(e,t){for(this.last!==null&&t>this.last&&(this.total+=t-this.last),this.last=t,this.ticks.push(e),this.earned.push(this.total);this.ticks.length>1&&e-(this.ticks[0]??e)>this.windowTicks;)this.ticks.shift(),this.earned.shift()}get perMinute(){if(this.ticks.length<2)return 0;let e=(this.ticks.at(-1)??0)-(this.ticks[0]??0);return e<=0?0:((this.earned.at(-1)??0)-(this.earned[0]??0))/e*30*60}},Iu=.012,Lu=350,Ru=.06,zu=new Map([[`KeyW`,[0,1]],[`ArrowUp`,[0,1]],[`KeyS`,[0,-1]],[`ArrowDown`,[0,-1]],[`KeyA`,[-1,0]],[`ArrowLeft`,[-1,0]],[`KeyD`,[1,0]],[`ArrowRight`,[1,0]]]),Bu=new Set([`Delete`,`KeyF`,`KeyC`,`F5`,`F9`]),Vu=class{target;panVector=new K;zoomDelta=0;pointer=new K;middlePanHeld=!1;touchPanHeld=!1;dragRect;selectGesture;orderAt;touchPanCandidate;held=new Set;justPressed=new Map;listeners=[];dragStart;dragAdditive=!1;pendingGesture;pendingOrder;touches=new Map;touchGesturePinched=!1;touchPanAllowed=!1;lastTouchTap;ignoreNativeDoubleClickUntil=0;constructor(e){this.target=e;let t=e=>{e.repeat||this.justPressed.set(e.code,{shift:e.shiftKey,ctrl:e.ctrlKey}),zu.has(e.code)&&this.held.add(e.code),(zu.has(e.code)||Bu.has(e.code))&&e.preventDefault()},n=e=>{this.held.delete(e.code)},r=e=>{this.zoomDelta+=e.deltaY,e.preventDefault()},i=e=>{if(e.pointerType===`touch`&&this.touches.has(e.pointerId)){let t=this.touchDistance();this.touches.get(e.pointerId).set(e.clientX,e.clientY);let n=this.touchDistance();t!==void 0&&n!==void 0&&t>0&&(this.zoomDelta+=-Math.log(n/t)*800)}if(this.toNdc(e,this.pointer),e.pointerType===`touch`&&this.dragStart&&!this.touchGesturePinched){let e=Hu(this.dragStart,this.pointer),t=Math.max(e.x1-e.x0,e.y1-e.y0);this.touchPanAllowed&&t>Iu&&(this.touchPanHeld=!0)}else this.dragStart&&!this.touchGesturePinched&&(this.dragRect=Hu(this.dragStart,this.pointer))},a=t=>{if(this.toNdc(t,this.pointer),t.pointerType===`touch`&&(this.touches.set(t.pointerId,new K(t.clientX,t.clientY)),e.setPointerCapture(t.pointerId),this.touches.size>=2&&(this.touchGesturePinched=!0,this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.clearTouchTap())),t.button===0){if(this.touchGesturePinched){t.preventDefault();return}this.dragStart=this.pointer.clone(),this.dragAdditive=t.ctrlKey||t.shiftKey,t.pointerType===`touch`?(this.touchPanCandidate=this.dragStart.clone(),this.touchPanAllowed=!1,this.touchPanHeld=!1):this.dragRect=Hu(this.dragStart,this.pointer),e.setPointerCapture(t.pointerId)}else t.button===1?(this.middlePanHeld=!0,e.setPointerCapture(t.pointerId)):t.button===2&&(this.pendingOrder=this.pointer.clone());t.preventDefault()},o=t=>{if(t.pointerType===`touch`&&(this.touches.delete(t.pointerId),this.touchGesturePinched)){this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this.touches.size===0&&(this.touchGesturePinched=!1);return}if(t.button===1){this.middlePanHeld=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}if(t.button!==0||!this.dragStart)return;this.toNdc(t,this.pointer);let n=Hu(this.dragStart,this.pointer),r=Math.max(n.x1-n.x0,n.y1-n.y0);if(t.pointerType===`touch`&&(this.touchPanHeld||r>Iu)){this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,this.clearTouchTap(),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}let i=t.pointerType===`touch`&&this.isDoubleTap(this.pointer,t.timeStamp);this.pendingGesture={rect:n,isBox:r>Iu,additive:this.dragAdditive,doubleClick:i,pointerType:Uu(t.pointerType)},t.pointerType===`touch`&&(this.ignoreNativeDoubleClickUntil=performance.now()+Lu),this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},s=t=>{this.touches.delete(t.pointerId),this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,t.pointerType===`touch`&&this.clearTouchTap(),this.touches.size===0&&(this.touchGesturePinched=!1),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},c=e=>{if(performance.now()<this.ignoreNativeDoubleClickUntil)return;let t=new K,n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1)),this.pendingGesture={rect:Hu(t,t),isBox:!1,additive:e.ctrlKey||e.shiftKey,doubleClick:!0,pointerType:`mouse`},e.preventDefault()},l=e=>e.preventDefault(),u=()=>{this.held.clear(),this.dragStart=void 0,this.dragRect=void 0,this.middlePanHeld=!1,this.touches.clear(),this.touchGesturePinched=!1,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,this.clearTouchTap()};window.addEventListener(`keydown`,t),window.addEventListener(`keyup`,n),e.addEventListener(`wheel`,r,{passive:!1}),e.addEventListener(`pointermove`,i),e.addEventListener(`pointerdown`,a),e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,s),e.addEventListener(`dblclick`,c),e.addEventListener(`contextmenu`,l),window.addEventListener(`blur`,u),this.listeners.push(()=>window.removeEventListener(`keydown`,t),()=>window.removeEventListener(`keyup`,n),()=>e.removeEventListener(`wheel`,r),()=>e.removeEventListener(`pointermove`,i),()=>e.removeEventListener(`pointerdown`,a),()=>e.removeEventListener(`pointerup`,o),()=>e.removeEventListener(`pointercancel`,s),()=>e.removeEventListener(`dblclick`,c),()=>e.removeEventListener(`contextmenu`,l),()=>window.removeEventListener(`blur`,u))}resolveTouchPan(e){this.touchPanCandidate&&=(this.touchPanAllowed=e,void 0)}isDoubleTap(e,t){let n=this.lastTouchTap,r=n!==void 0&&t-n.timeStamp<=Lu&&n.point.distanceTo(e)<=Ru;return this.lastTouchTap=r?void 0:{point:e.clone(),timeStamp:t},r}clearTouchTap(){this.lastTouchTap=void 0}touchDistance(){if(this.touches.size<2)return;let e=this.touches.values(),t=e.next().value,n=e.next().value;return t.distanceTo(n)}toNdc(e,t){let n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1))}sample(){this.panVector.set(0,0);for(let e of this.held){let t=zu.get(e);t&&(this.panVector.x+=t[0],this.panVector.y+=t[1])}this.panVector.lengthSq()>1&&this.panVector.normalize(),this.selectGesture=this.pendingGesture,this.orderAt=this.pendingOrder}wasPressed(e){return this.justPressed.has(e)}pressModifiers(e){return this.justPressed.get(e)}consume(){this.zoomDelta=0,this.justPressed.clear(),this.pendingGesture=void 0,this.pendingOrder=void 0,this.selectGesture=void 0,this.orderAt=void 0}dispose(){for(let e of this.listeners)e();this.listeners.length=0}};function Hu(e,t){return{x0:Math.min(e.x,t.x),y0:Math.min(e.y,t.y),x1:Math.max(e.x,t.x),y1:Math.max(e.y,t.y)}}function Uu(e){return e===`touch`||e===`pen`?e:`mouse`}var Wu={machines:{fill:`rgba(61, 61, 61, 0.82)`,edge:`#70e3bd`,edgePx:2,chamferPx:30,radiusPx:0,tile:`rgba(62, 99, 84, 0.85)`,tileEdge:`#70e3bd`,tileRadius:`0`,heading:`#f2fff6`,body:`#f2fff6`,dim:`#9fbdb1`,headingShadow:`0 0 4px rgba(0, 0, 0, 0.85), 0 1px 1px rgba(0, 0, 0, 0.7)`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,accent:`#ffb020`,ok:`#a2f1ab`,warn:`#e6483d`,onEdge:`#10231c`,cornerLeft:{width:40,height:120,inner:`<g fill="none" stroke="var(--panel-edge)" stroke-width="2" stroke-linejoin="miter">
        <path d="M2 118 V96 L20 78 V40"/>
        <path d="M12 118 V92 L30 74 V44"/>
        <rect x="15" y="28" width="10" height="8"/>
      </g>`},cornerRight:{width:40,height:120,inner:`<g fill="none" stroke="var(--panel-edge)" stroke-width="2" stroke-linejoin="miter"
        transform="translate(40 0) scale(-1 1)">
        <path d="M2 118 V96 L20 78 V40"/>
        <path d="M12 118 V92 L30 74 V44"/>
        <rect x="15" y="28" width="10" height="8"/>
      </g>`}},ancients:{fill:`rgba(146, 146, 146, 0.84)`,edge:`#e0c583`,edgePx:5,chamferPx:0,radiusPx:26,tile:`#d7c193`,tileEdge:`#5a3e25`,tileRadius:`6px`,heading:`#f6f07a`,body:`#2f2214`,dim:`#3a2a18`,headingShadow:`0 0 5px rgba(0, 0, 0, 0.75), 0 1px 1px rgba(0, 0, 0, 0.6)`,font:`Georgia, "Times New Roman", serif`,accent:`#ffa600`,ok:`#ecff81`,warn:`#e2564a`,onEdge:`#2f2214`,cornerLeft:{width:78,height:42,inner:`<g fill="var(--panel-edge)" stroke="#5a3e25" stroke-width="3" stroke-linejoin="round"
        transform="translate(78 0) scale(-0.75 0.75)">
        <path d="M104 1 C70 1 46 8 30 21 C17 32 15 43 23 48 C30 53 41 52 46 46
                 C36 49 27 45 28 36 C30 24 55 13 104 21 Z"/>
        <ellipse cx="78" cy="40" rx="8" ry="6"/>
      </g>`},cornerRight:{width:78,height:42,inner:`<g fill="var(--panel-edge)" stroke="#5a3e25" stroke-width="3" stroke-linejoin="round"
        transform="scale(0.75 0.75)">
        <path d="M104 1 C70 1 46 8 30 21 C17 32 15 43 23 48 C30 53 41 52 46 46
                 C36 49 27 45 28 36 C30 24 55 13 104 21 Z"/>
        <ellipse cx="78" cy="40" rx="8" ry="6"/>
      </g>`}}},Gu=1920;function Ku(e,t,n){if(e.style.setProperty(`--panel-fill`,t.fill),e.style.setProperty(`--panel-edge`,t.edge),e.style.setProperty(`--panel-edge-px`,`${t.edgePx}px`),e.style.setProperty(`--panel-tile`,t.tile),e.style.setProperty(`--panel-tile-edge`,t.tileEdge),e.style.setProperty(`--panel-tile-radius`,t.tileRadius),e.style.setProperty(`--panel-heading`,t.heading),e.style.setProperty(`--panel-body`,t.body),e.style.setProperty(`--panel-dim`,t.dim),e.style.setProperty(`--panel-heading-shadow`,t.headingShadow),e.style.setProperty(`--panel-font`,t.font),e.style.setProperty(`--panel-accent`,t.accent),e.style.setProperty(`--panel-ok`,t.ok),e.style.setProperty(`--panel-warn`,t.warn),e.style.setProperty(`--panel-on-edge`,t.onEdge),e.style.setProperty(`--panel-border-top`,`${t.edgePx}px solid ${t.edge}`),e.style.setProperty(`--panel-border-inward`,`${t.edgePx}px solid ${t.edge}`),t.chamferPx>0){let r=t.chamferPx;e.style.setProperty(`--panel-clip`,n===`left`?`polygon(0 0, calc(100% - ${r}px) 0, 100% ${r}px, 100% 100%, 0 100%)`:`polygon(${r}px 0, 100% 0, 100% 100%, 0 100%, 0 ${r}px)`),e.style.setProperty(`--panel-radius`,`0`)}else e.style.setProperty(`--panel-clip`,`none`),e.style.setProperty(`--panel-radius`,n===`left`?`0 ${t.radiusPx}px 0 0`:`${t.radiusPx}px 0 0 0`)}function qu(e){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return t.setAttribute(`viewBox`,`0 0 ${e.width} ${e.height}`),t.setAttribute(`width`,String(e.width)),t.setAttribute(`height`,String(e.height)),t.innerHTML=e.inner,t}var Ju=class{handlers;root;onResize;nameEl;metaEl;activityEl;loadoutEl;statusEl;ritualEl;statsEl;countEl;chipsEl;deployEl;deployFillEl;deployLabelEl;cutterSweepEl;cutterSweepFillEl;cutterSweepLabelEl;ritualButtonEl;lastName=``;lastMeta=``;lastActivity=``;lastLoadout=``;lastStatus=``;lastRitual=``;lastStats=``;lastCount=``;lastChipSignature=``;lastDeploy=``;lastCutterSweep=``;lastRitualButton=``;lastVisible=null;ritualTargetId=null;constructor(e,t,n){this.handlers=n,od();let r=Wu[t];this.root=$(`div`,`hrp hrp-unit`),this.root.dataset.faction=t,Ku(this.root,r,`left`);let i=qu(r.cornerLeft);i.classList.add(`hrp-corner`);let a=$(`div`,`hrp-shell`),o=$(`div`,`hrp-body`),s=$(`div`,`hrp-lead`),c=$(`div`,`hrp-portrait`);c.append(td(),nd()),s.append(c);let l=$(`div`,`hrp-lead-text`);this.nameEl=$(`div`,`hrp-name`),this.metaEl=$(`div`,`hrp-meta`),this.activityEl=$(`div`,`hrp-activity`),this.loadoutEl=$(`div`,`hrp-loadout`),this.statusEl=$(`div`,`hrp-statuses`),this.ritualEl=$(`div`,`hrp-ritual`),this.statsEl=$(`div`,`hrp-stats`),l.append(this.nameEl,this.metaEl,this.activityEl,this.loadoutEl,this.statusEl,this.ritualEl,this.statsEl),s.append(l);let u=$(`div`,`hrp-rail`);this.countEl=$(`div`,`hrp-count`),this.chipsEl=$(`div`,`hrp-chips`),this.deployEl=document.createElement(`button`),this.deployEl.type=`button`,this.deployEl.className=`hrp-deploy`,this.deployFillEl=$(`div`,`hrp-deploy-fill`),this.deployLabelEl=$(`span`,`hrp-deploy-label`),this.deployEl.append(this.deployFillEl,rd(),this.deployLabelEl),this.deployEl.addEventListener(`click`,()=>this.handlers.onDeploy()),this.cutterSweepEl=document.createElement(`button`),this.cutterSweepEl.type=`button`,this.cutterSweepEl.className=`hrp-deploy hrp-cutter-sweep`,this.cutterSweepEl.title=`Cuts at a right angle to the direction the Cutter faces, not along it. Aim it with a move order first - the cut is permanent and can be made only once.`,this.cutterSweepFillEl=$(`div`,`hrp-deploy-fill`),this.cutterSweepLabelEl=$(`span`,`hrp-deploy-label`),this.cutterSweepEl.append(this.cutterSweepFillEl,id(),this.cutterSweepLabelEl),this.cutterSweepEl.addEventListener(`click`,()=>this.handlers.onCutterSweep()),this.ritualButtonEl=document.createElement(`button`),this.ritualButtonEl.type=`button`,this.ritualButtonEl.className=`hrp-ritual-btn`,this.ritualButtonEl.addEventListener(`click`,()=>{this.ritualTargetId!==null&&this.handlers.onRitual(this.ritualTargetId,this.ritualButtonEl.dataset.mode===`begin`)}),u.append(this.countEl,this.chipsEl,this.deployEl,this.cutterSweepEl,this.ritualButtonEl),o.append(s,$(`div`,`hrp-divider`),u),a.append(o),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(Yu()))}render(e){let t=e.mode!==`none`&&e.leader!==null;if(t!==this.lastVisible&&(this.root.classList.toggle(`shown`,t),this.lastVisible=t),!t||!e.leader)return;let n=e.leader;this.write(this.nameEl,`lastName`,n.name),this.write(this.metaEl,`lastMeta`,Qu(n)),this.write(this.activityEl,`lastActivity`,n.activity??``),this.activityEl.classList.toggle(`empty`,n.activity===null);let r=Xu(n).join(`|`);r!==this.lastLoadout&&(this.loadoutEl.replaceChildren(...Xu(n).map(e=>{let t=$(`div`,`hrp-loadout-line`);return t.textContent=e,t})),this.loadoutEl.classList.toggle(`empty`,r.length===0),this.lastLoadout=r);let i=n.statuses.map(e=>`${e.id}:${e.secondsLeft}`).join(`|`);i!==this.lastStatus&&(this.statusEl.replaceChildren(...n.statuses.map(e=>{let t=$(`span`,`hrp-status`);return t.dataset.status=e.id,t.textContent=`${e.label} ${e.secondsLeft}s`,t})),this.statusEl.classList.toggle(`empty`,n.statuses.length===0),this.lastStatus=i);let a=n.ritual?`${+!!n.ritual.channelling}:${n.ritual.secondsLeft}:${n.ritual.blockedBy??``}`:``;a!==this.lastRitual&&(this.ritualEl.replaceChildren(...n.ritual?Zu(n.ritual):[]),this.ritualEl.classList.toggle(`empty`,n.ritual===null),this.lastRitual=a);let o=`${n.humansOnboard?`${n.humansOnboard.current}/${n.humansOnboard.max}`:``} ${n.health?`${n.health.current}/${n.health.max}`:`none`}`;o!==this.lastStats&&(this.statsEl.replaceChildren(...n.humansOnboard?[$u(`HUMANS`,`${Math.round(n.humansOnboard.current)}/${n.humansOnboard.max}`)]:[],ed(n.health)),this.lastStats=o),this.ritualTargetId=e.leader.ritual&&!e.inspectOnly?e.leaderId??null:null;let s=e.leader.ritual&&!e.inspectOnly?`${e.leader.ritual.channelling?`cancel`:`begin`}:${e.leader.ritual.blockedBy??``}`:``;if(s!==this.lastRitualButton){let t=e.leader.ritual,n=s.length>0&&t!==null;if(this.ritualButtonEl.classList.toggle(`shown`,n),n&&t){let e=!t.channelling;this.ritualButtonEl.dataset.mode=e?`begin`:`cancel`,this.ritualButtonEl.textContent=e?`SUMMON DEITY - ${t.humansCost} + ${t.chargeCost}`:`ABANDON RITUAL`,this.ritualButtonEl.disabled=e&&t.blockedBy!==null,this.ritualButtonEl.title=e?t.blockedBy??`Levels everything within ${t.radius} m. Destroying this structure cancels it.`:`The investment already paid is not returned.`}this.lastRitualButton=s}this.write(this.countEl,`lastCount`,e.selectedCount>1?`${e.selectedCount} SELECTED`:``),this.countEl.classList.toggle(`empty`,e.selectedCount<=1),this.root.dataset.inspect=e.inspectOnly?`true`:`false`;let c=e.tallies.map(e=>`${e.typeId}:${e.count}:${+!!e.isLeader}`).join(`|`);c!==this.lastChipSignature&&(this.chipsEl.replaceChildren(...e.tallies.map(e=>this.chip(e.typeId,e.count,e.isLeader))),this.lastChipSignature=c),this.paintDeploy(e.inspectOnly?{kind:`unable`}:n.deployState),this.paintCutterSweep(e.inspectOnly?null:n.cutterSweep)}chip(e,t,n){let r=document.createElement(`button`);r.type=`button`,r.className=n?`hrp-chip leader`:`hrp-chip`,r.title=e;let i=$(`div`,`hrp-chip-well`);i.append(td());let a=$(`span`,`hrp-chip-count`);return a.textContent=`×${t}`,r.append(i,a),r.addEventListener(`click`,()=>this.handlers.onIsolateType(e)),r}paintDeploy(e){let t=e.kind===`transitioning`?`transitioning:${e.to}:${Math.round(e.progress*20)}`:e.kind;t!==this.lastDeploy&&(this.lastDeploy=t,this.root.dataset.deploy=e.kind,this.deployEl.hidden=e.kind===`unable`,this.deployEl.disabled=e.kind===`transitioning`,e.kind===`transitioning`?(this.deployFillEl.style.width=`${Math.round(e.progress*100)}%`,this.deployLabelEl.textContent=e.to?`DEPLOYING`:`PACKING UP`):(this.deployFillEl.style.width=`0%`,this.deployLabelEl.textContent=e.kind===`deployed`?`DEPLOYED`:`DEPLOY`))}paintCutterSweep(e){let t=e?.kind===`sweeping`?`sweeping:${Math.round(e.progress*20)}`:e?.kind===`cooldown`?`cooldown:${e.secondsLeft}`:e?.kind??`hidden`;t!==this.lastCutterSweep&&(this.lastCutterSweep=t,this.cutterSweepEl.hidden=e===null,this.cutterSweepEl.disabled=e?.kind!==`ready`,this.root.dataset.cutterSweep=e?.kind??`hidden`,e&&(e.kind===`sweeping`?(this.cutterSweepFillEl.style.width=`${Math.round(e.progress*100)}%`,this.cutterSweepLabelEl.textContent=`CUTTING ${e.secondsLeft}s`):e.kind===`cooldown`?(this.cutterSweepFillEl.style.width=`0%`,this.cutterSweepLabelEl.textContent=`RECHARGING ${e.secondsLeft}s`):(this.cutterSweepFillEl.style.width=`0%`,this.cutterSweepLabelEl.textContent=`RADIAL CUT`)))}write(e,t,n){this[t]!==n&&(e.textContent=n,this[t]=n)}};function $(e,t){let n=document.createElement(e);return n.className=t,n}function Yu(){return Math.max(.7,Math.min(1,window.innerWidth/Gu))}function Xu(e){let t=e.weapons.map(e=>{let t=[`${e.damageType.toUpperCase()} / ${e.dps} DPS / ${e.range} m`];return e.minimumRange>0&&t.push(`dead zone ${e.minimumRange} m`),e.structureOnly&&t.push(`structures only`),t.join(` / `)});return e.stanceNote&&t.push(e.stanceNote),t}function Zu(e){let t=$(`div`,`hrp-ritual-label`);if(e.channelling){t.textContent=`DEITY RITUAL - ${e.secondsLeft}s LEFT / DESTROYING THIS STRUCTURE ENDS IT`;let n=$(`div`,`hrp-ritual-bar`),r=$(`div`,`hrp-ritual-fill`);return r.style.width=`${Math.round(e.progress*100)}%`,n.append(r),[t,n]}return t.textContent=e.blockedBy?`DEITY RITUAL - ${e.blockedBy}`:`DEITY RITUAL READY - ${e.humansCost} HUMANS + ${e.chargeCost} INSANITY / ${e.radius} m`,t.classList.toggle(`blocked`,e.blockedBy!==null),[t]}function Qu(e){return`${e.faction===`machines`?`MACHINES`:`ANCIENT ONES`} · ${e.role.toUpperCase()} / ${e.armor.toUpperCase()} ARMOUR`}function $u(e,t){let n=$(`div`,`hrp-stat`),r=$(`span`,`hrp-stat-label`);r.textContent=e;let i=$(`span`,`hrp-stat-value`);return i.textContent=t,n.append(r,i),n}function ed(e){let t=$(`div`,`hrp-stat`),n=$(`span`,`hrp-stat-label`);if(n.textContent=`HEALTH`,t.append(n),!e){let e=$(`span`,`hrp-stat-value pending`);return e.textContent=`— M5`,t.append(e),t}let r=$(`div`,`hrp-health`),i=Math.max(+(e.current>0),Math.floor(e.current/e.max*12));for(let e=0;e<12;e++){let t=$(`i`,e<i?`hrp-pip on`:`hrp-pip`);r.append(t)}t.append(r);let a=$(`span`,`hrp-stat-value`);return a.textContent=`${Math.max(0,Math.ceil(e.current))}/${e.max}`,t.append(a),t}function td(){return $(`div`,`hrp-placeholder`)}function nd(){let e=$(`div`,`hrp-portrait-label`);return e.textContent=`unit portrait`,e}function rd(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`width`,`22`),e.setAttribute(`height`,`22`),e.classList.add(`hrp-deploy-icon`),e.innerHTML=`<rect x="9" y="4" width="6" height="11" fill="currentColor"/>
    <rect x="5" y="17" width="14" height="1.8" fill="currentColor"/>
    <path d="M2 12 L6 8.5 V15.5 Z" fill="currentColor"/>
    <path d="M22 12 L18 8.5 V15.5 Z" fill="currentColor"/>`,e}function id(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`width`,`22`),e.setAttribute(`height`,`22`),e.classList.add(`hrp-deploy-icon`),e.innerHTML=`<path d="M3 12 H21" stroke="currentColor" stroke-width="3.6"/>
    <path d="M12 3 A9 9 0 0 1 20.3 8" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M20.7 4.8 V9 H16.5" fill="none" stroke="currentColor" stroke-width="2"/>`,e}var ad=!1;function od(){if(ad)return;ad=!0;let e=document.createElement(`style`);e.textContent=sd,document.head.append(e)}var sd=`
.hrp {
  --hud-scale: 1;
  position: fixed;
  bottom: 0;
  /* Never eats a click meant for the city; only buttons opt back in. */
  pointer-events: none;
  user-select: none;
  font-family: var(--panel-font);
  color: var(--panel-body);
  transform-origin: bottom left;
  transform: scale(var(--hud-scale));
  opacity: 0;
  /*
   * Hidden, not merely transparent.
   *
   * A pointer-events:none root does not cover the buttons, which opt back in — so at
   * opacity 0 the deploy button and the produce tiles were still catching clicks in the two
   * bottom corners of an otherwise empty screen, which is exactly the thing the UI must never do.
   * The delayed visibility keeps the fade: opacity animates out first, then the panel goes away.
   */
  visibility: hidden;
  transition: opacity 120ms linear, visibility 0s linear 120ms;
  z-index: 11;
}
.hrp.shown { opacity: 1; visibility: visible; transition: opacity 120ms linear; }
/*
 * The plate. Separate from the root because the Machine chamfer is a clip-path, and a clip-path
 * clips descendants — including the corner ornament, which is positioned above the panel.
 */
.hrp-shell {
  background: var(--panel-fill);
  border-top: var(--panel-border-top);
  border-radius: var(--panel-radius);
  clip-path: var(--panel-clip);
}
.hrp-unit { left: 0; }
.hrp-unit .hrp-shell { border-right: var(--panel-border-inward); }
.hrp-build { right: 0; transform-origin: bottom right; }
.hrp-build .hrp-shell { border-left: var(--panel-border-inward); }

/* The corner ornament points back into the screen from the panel's inward top corner. */
.hrp-corner { position: absolute; display: block; }
.hrp-unit .hrp-corner { right: 10px; bottom: 100%; }
.hrp-build .hrp-corner { left: 10px; bottom: 100%; }

.hrp-body { display: flex; align-items: stretch; }
.hrp-lead { display: flex; align-items: center; gap: 16px; padding: 16px 26px 16px 20px; }
.hrp-portrait {
  position: relative;
  display: grid;
  place-items: center;
  width: 104px;
  height: 104px;
  overflow: hidden;
  background: var(--panel-tile);
  border: 1px solid var(--panel-tile-edge);
  border-radius: var(--panel-tile-radius);
}
.hrp-placeholder {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(45deg,
    color-mix(in srgb, var(--panel-tile-edge) 22%, transparent) 0 6px,
    transparent 6px 12px);
}
.hrp-portrait-label {
  position: relative;
  font: 11px/1.4 ui-monospace, Menlo, monospace;
  text-align: center;
  color: var(--panel-dim);
}

.hrp-lead-text { display: flex; flex-direction: column; gap: 7px; min-width: 260px; }
.hrp-name {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
  color: var(--panel-heading);
  text-shadow: var(--panel-heading-shadow);
}
.hrp-meta { font-size: 14px; letter-spacing: 0.14em; color: var(--panel-dim); }
.hrp-activity { font-size: 15px; font-style: italic; color: var(--panel-body); }
.hrp-activity.empty { display: none; }
.hrp-loadout { display: flex; flex-direction: column; gap: 1px; margin-top: 2px; }
.hrp-loadout.empty { display: none; }
.hrp-loadout-line { font-size: 12px; letter-spacing: 0.08em; color: var(--panel-dim); }
.hrp-statuses { display: flex; gap: 4px; margin-top: 3px; }
.hrp-statuses.empty { display: none; }
.hrp-status { font-size: 11px; letter-spacing: 0.1em; padding: 1px 5px; border: 1px solid currentColor; }
.hrp-status[data-status="corroded"] { color: #8ce46a; }
.hrp-status[data-status="warded"] { color: #7ec8ff; }
.hrp-ritual { margin-top: 4px; }
.hrp-ritual.empty { display: none; }
.hrp-ritual-label { font-size: 11px; letter-spacing: 0.1em; color: #d8a0ff; }
.hrp-ritual-label.blocked { color: var(--panel-dim); }
.hrp-ritual-bar { height: 4px; margin-top: 2px; background: rgba(255, 255, 255, 0.12); }
.hrp-ritual-fill { height: 100%; background: #d8a0ff; }
.hrp-ritual-btn { display: none; margin-top: 6px; padding: 5px 8px; font: inherit; font-size: 11px;
  letter-spacing: 0.1em; color: #d8a0ff; background: transparent; border: 1px solid #d8a0ff; cursor: pointer; }
.hrp-ritual-btn.shown { display: block; }
.hrp-ritual-btn:disabled { color: var(--panel-dim); border-color: var(--panel-dim); cursor: default; }
.hrp-stats { display: flex; gap: 22px; }
.hrp-stat { display: flex; flex-direction: column; gap: 2px; }
.hrp-stat-label { font-size: 11px; letter-spacing: 0.12em; color: var(--panel-dim); }
.hrp-stat-value { font-size: 15px; color: var(--panel-body); }
/* Dimmed rather than hidden: the slot has to read as reserved, not as missing. */
.hrp-stat-value.pending { opacity: 0.45; }
.hrp-health { display: flex; gap: 3px; padding: 2px 3px; background: #4c4d52; border: 1px solid rgba(255,255,255,0.3); }
.hrp-unit[data-inspect="true"] .hrp-deploy { display: none; }
.hrp-pip { width: 5px; height: 13px; background: #9e9da2; }
.hrp-pip.on { background: var(--panel-ok); }

.hrp-divider { width: 1px; margin: 18px 0; background: color-mix(in srgb, var(--panel-edge) 45%, transparent); }
.hrp-rail { display: flex; flex-direction: column; justify-content: center; gap: 10px; padding: 16px 26px 16px 20px; }
.hrp-count { font-size: 12px; letter-spacing: 0.14em; color: var(--panel-dim); }
.hrp-count.empty { display: none; }

.hrp-chips { display: flex; gap: 6px; }
.hrp-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 9px 5px 5px;
  cursor: pointer;
  pointer-events: auto;
  font-family: inherit;
  color: var(--panel-body);
  background: var(--panel-tile);
  border: 1px solid color-mix(in srgb, var(--panel-edge) 55%, transparent);
  border-radius: var(--panel-tile-radius);
}
/* The accent marks the leader's type, matching the meter's "past the first segment" rule. */
.hrp-chip.leader { border: 2px solid var(--panel-accent); }
.hrp-chip-well { position: relative; width: 28px; height: 28px; overflow: hidden; background: rgba(0,0,0,0.3); }
.hrp-chip-count { font-size: 17px; font-weight: 700; color: var(--panel-body); }

.hrp-deploy {
  position: relative;
  display: flex;
  align-items: center;
  gap: 9px;
  overflow: hidden;
  padding: 8px 14px;
  cursor: pointer;
  pointer-events: auto;
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: var(--panel-body);
  background: var(--panel-tile);
  border: 1px solid var(--panel-edge);
  border-radius: var(--panel-tile-radius);
}
/*
 * The UA's [hidden] rule is display:none at the lowest specificity, so the display:flex above
 * beats it and setting deployEl.hidden did nothing — a Giant Ranged Construct, which has no
 * deploy at all, drew a live DEPLOY button that enqueued an order the simulation refuses.
 */
.hrp-deploy[hidden] { display: none; }
.hrp-deploy-icon, .hrp-deploy-label { position: relative; }
.hrp-deploy-fill {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 0%;
  background: color-mix(in srgb, var(--panel-accent) 30%, transparent);
}
/* Filled rather than outlined once settled — the same "state, not a mode" language the flat
   selection tint uses, so a deployed unit reads as changed rather than as merely toggled. The
   ink is per skin: the Machine edge is mint and the Ancient edge gold, and no one colour reads
   on both. */
.hrp[data-deploy="deployed"] .hrp-deploy { background: var(--panel-edge); color: var(--panel-on-edge); }
.hrp[data-deploy="transitioning"] .hrp-deploy { border-color: var(--panel-accent); cursor: progress; }
.hrp[data-cutter-sweep="sweeping"] .hrp-cutter-sweep { border-color: var(--panel-accent); cursor: progress; }
`,cd=class{handlers;root;onResize;titleEl;stateEl;guidanceEl;humansEl;gridEl;queueRowEl;queueEl;tierEl;cancelSummonEl;noticeEl;producer={kind:`unit`,id:-1};lastTitle=``;lastState=``;lastGuidance=``;lastHumans=``;lastGridSignature=``;lastQueueSignature=``;lastTier=``;lastActiveSummon=null;lastNotice=null;lastVisible=null;constructor(e,t,n){this.handlers=n,od(),pd();let r=Wu[t];this.root=ld(`div`,`hrp hrp-build`),this.root.dataset.faction=t,Ku(this.root,r,`right`);let i=qu(r.cornerRight);i.classList.add(`hrp-corner`);let a=ld(`div`,`hrp-shell`),o=ld(`div`,`hrpb-head`),s=ld(`div`,`hrpb-heading`);this.titleEl=ld(`div`,`hrp-name`),this.stateEl=ld(`div`,`hrp-meta`),this.guidanceEl=ld(`div`,`hrpb-guidance`),s.append(this.titleEl,this.stateEl,this.guidanceEl);let c=ld(`div`,`hrpb-bank`),l=ld(`span`,`hrp-stat-label`);l.textContent=`HUMANS`,this.humansEl=ld(`span`,`hrpb-humans`),c.append(l,this.humansEl),o.append(s,c),this.gridEl=ld(`div`,`hrpb-grid`);let u=ld(`div`,`hrpb-foot`);this.queueRowEl=ld(`div`,`hrpb-queue-row`);let d=ld(`span`,`hrp-stat-label`);d.textContent=`QUEUE`,this.queueEl=ld(`div`,`hrpb-queue`),this.queueRowEl.append(d,this.queueEl),this.tierEl=document.createElement(`button`),this.tierEl.type=`button`,this.tierEl.className=`hrpb-tier`,this.tierEl.addEventListener(`click`,()=>this.handlers.onUnlockTier2()),this.cancelSummonEl=document.createElement(`button`),this.cancelSummonEl.type=`button`,this.cancelSummonEl.className=`hrpb-cancel-summon`,this.cancelSummonEl.addEventListener(`click`,()=>this.handlers.onCancelSummon(this.producer)),u.append(this.queueRowEl,ld(`div`,`hrpb-spacer`),this.cancelSummonEl,this.tierEl),this.noticeEl=ld(`div`,`hrpb-notice`),a.append(o,this.gridEl,u,this.noticeEl),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(Yu()))}render(e){if(e.visible!==this.lastVisible&&(this.root.classList.toggle(`shown`,e.visible),this.lastVisible=e.visible),!e.visible)return;this.producer=e.producer,e.title!==this.lastTitle&&(this.titleEl.textContent=e.title,this.lastTitle=e.title),e.state!==this.lastState&&(this.stateEl.textContent=e.state,this.lastState=e.state),e.guidance!==this.lastGuidance&&(this.guidanceEl.textContent=e.guidance,this.lastGuidance=e.guidance);let t=String(Math.floor(e.humans));t!==this.lastHumans&&(this.humansEl.textContent=t,this.lastHumans=t);let n=e.producesUnits?e.producible.map(e=>`${e.typeId}:${+!!e.enabled}:${+!!e.lockedByTier}:${+!!e.unaffordable}`).join(`|`):`none`;n!==this.lastGridSignature&&(this.gridEl.classList.toggle(`empty`,!e.producesUnits),this.gridEl.replaceChildren(...e.producesUnits?e.producible.map(e=>this.tile(e)):[ud()]),this.lastGridSignature=n),this.queueRowEl.classList.toggle(`empty`,!e.producesUnits);let r=e.activeSummon?`${e.activeSummon.typeId}:${e.activeSummon.summoning}:${Math.round(e.activeSummon.progress*100)}`:``;r!==this.lastActiveSummon&&(this.cancelSummonEl.hidden=e.activeSummon===null,this.cancelSummonEl.textContent=e.activeSummon?`CANCEL ${e.activeSummon.summoning?`SUMMON`:`APPROACH`} · FULL REFUND`:``,this.lastActiveSummon=r);let i=e.queue.map((e,t)=>`${e.typeId}:${t===0?Math.round(e.progress*20):0}`).join(`|`);i!==this.lastQueueSignature&&(this.queueEl.replaceChildren(...e.queue.map((e,t)=>dd(e.name,t===0?e.progress:0,e.secondsLeft,t===0))),this.lastQueueSignature=i);let a=`${e.tier2.unlocked}:${e.tier2.affordable}`;a!==this.lastTier&&(this.tierEl.hidden=e.tier2.unlocked,this.tierEl.disabled=!e.tier2.affordable,this.tierEl.textContent=`UNLOCK TIER 2 · ${e.tier2.cost}`,this.lastTier=a),e.notice!==this.lastNotice&&(this.noticeEl.textContent=e.notice??``,this.noticeEl.classList.toggle(`shown`,e.notice!==null),this.lastNotice=e.notice)}tile(e){let t=document.createElement(`button`);t.type=`button`,t.className=`hrpb-tile`,t.disabled=!e.enabled,t.title=e.lockedByTier?`${e.name} — requires Tier ${e.tier}`:e.unaffordable?`${e.name} — costs ${e.cost} Humans`:e.name,e.lockedByTier&&(t.dataset.locked=`tier`);let n=ld(`div`,`hrpb-well`);if(e.lockedByTier){let t=ld(`span`,`hrpb-tier-badge`);t.textContent=`TIER ${e.tier}`,n.append(t)}else n.append(ld(`div`,`hrp-placeholder`));let r=ld(`span`,`hrpb-name`);r.textContent=e.name;let i=ld(`div`,`hrpb-costs`),a=ld(`span`,e.unaffordable?`hrpb-cost short`:`hrpb-cost`);a.textContent=String(e.cost);let o=ld(`span`,`hrpb-time`);return o.textContent=`${e.seconds}s`,i.append(a,o),t.append(n,r,i),t.addEventListener(`click`,()=>e.action===`summon`?this.handlers.onSummon(this.producer,e.typeId):this.handlers.onProduce(this.producer,e.typeId)),t}};function ld(e,t){let n=document.createElement(e);return n.className=t,n}function ud(){let e=ld(`div`,`hrpb-note`);return e.textContent=`Builds no units. Harvesters deliver here; production is the factory’s.`,e}function dd(e,t,n,r){let i=ld(`div`,r?`hrpb-slot active`:`hrpb-slot`);if(i.title=e,r){let e=ld(`div`,`hrpb-slot-fill`);e.style.height=`${Math.round(t*100)}%`;let r=ld(`span`,`hrpb-slot-label`);r.textContent=`${n.toFixed(1)}s`,i.append(e,r)}return i}var fd=!1;function pd(){if(fd)return;fd=!0;let e=document.createElement(`style`);e.textContent=md,document.head.append(e)}var md=`
.hrp-build .hrp-shell { width: 600px; box-sizing: border-box; }
.hrpb-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px 10px 40px;
  border-bottom: 1px solid color-mix(in srgb, var(--panel-edge) 45%, transparent);
}
.hrpb-heading { display: flex; flex-direction: column; gap: 3px; }
.hrpb-guidance { max-width: 355px; font-size: 10px; line-height: 1.3; letter-spacing: 0.055em; color: var(--panel-dim); }
.hrpb-bank { display: flex; align-items: baseline; gap: 7px; }
.hrpb-humans { font-size: 24px; font-weight: 700; color: var(--panel-ok); font-variant-numeric: tabular-nums; }
.hrp-build[data-faction="ancients"] .hrpb-humans { color: var(--panel-body); }

.hrpb-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; padding: 14px 22px 12px 40px; }
.hrpb-grid.empty { display: block; }
.hrpb-note { font-size: 14px; line-height: 1.45; color: var(--panel-dim); }
.hrpb-tile {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 9px;
  text-align: left;
  cursor: pointer;
  pointer-events: auto;
  font-family: inherit;
  color: var(--panel-body);
  background: var(--panel-tile);
  border: 1px solid var(--panel-edge);
  border-radius: var(--panel-tile-radius);
}
.hrpb-tile:hover:not(:disabled) { border-color: var(--panel-accent); }
/*
 * Dimmed, not faded out — the frames' four command buttons are all solid, and the difference
 * between "not yet" and "not there" has to stay legible. Same 0.62 hud.ts settled on.
 */
.hrpb-tile:disabled { opacity: 0.62; cursor: default; }
.hrpb-tile[data-locked="tier"] { background: transparent; border-style: dashed; }
.hrpb-well { position: relative; display: grid; place-items: center; height: 52px; overflow: hidden; background: rgba(0,0,0,0.28); }
.hrpb-tier-badge { font-size: 11px; letter-spacing: 0.12em; color: var(--panel-accent); }
.hrpb-name { font-size: 13px; line-height: 1.2; }
.hrpb-costs { display: flex; justify-content: space-between; font-size: 13px; }
.hrpb-cost { color: var(--panel-ok); }
.hrp-build[data-faction="ancients"] .hrpb-cost { color: var(--panel-body); font-weight: 700; }
.hrpb-cost.short { color: var(--panel-warn); }
.hrpb-time { color: var(--panel-dim); }

.hrpb-foot { display: flex; align-items: center; gap: 9px; padding: 0 22px 16px 40px; }
.hrpb-spacer { flex: 1; }
.hrpb-queue-row { display: flex; align-items: center; gap: 9px; }
.hrpb-queue-row.empty { display: none; }
.hrpb-queue { display: flex; gap: 6px; }
.hrpb-slot {
  position: relative;
  display: grid;
  place-items: center;
  width: 50px;
  height: 34px;
  overflow: hidden;
  background: color-mix(in srgb, var(--panel-tile) 70%, transparent);
  border: 1px solid color-mix(in srgb, var(--panel-edge) 50%, transparent);
  border-radius: var(--panel-tile-radius);
}
.hrpb-slot.active { border-color: var(--panel-edge); }
.hrpb-slot-fill { position: absolute; left: 0; bottom: 0; width: 100%; background: color-mix(in srgb, var(--panel-ok) 32%, transparent); }
.hrpb-slot-label { position: relative; font-size: 12px; color: var(--panel-body); font-variant-numeric: tabular-nums; }

.hrpb-tier {
  padding: 7px 13px;
  cursor: pointer;
  pointer-events: auto;
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.1em;
  color: var(--panel-accent);
  background: transparent;
  border: 1px solid var(--panel-accent);
  border-radius: var(--panel-tile-radius);
}
.hrpb-tier:disabled { opacity: 0.62; cursor: default; }

.hrpb-cancel-summon {
  padding: 7px 13px;
  cursor: pointer;
  pointer-events: auto;
  font-family: inherit;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--panel-warn);
  background: transparent;
  border: 1px solid var(--panel-warn);
  border-radius: var(--panel-tile-radius);
}

/* Event copy from the simulation, never copy this panel wrote. */
.hrpb-notice {
  display: none;
  align-items: center;
  gap: 9px;
  padding: 8px 22px 12px 40px;
  font-size: 14px;
  letter-spacing: 0.08em;
  color: var(--panel-warn);
  border-top: 1px solid color-mix(in srgb, var(--panel-edge) 25%, transparent);
}
.hrpb-notice.shown { display: flex; }
`,hd=1920,gd=5,_d=4,vd=30,yd=class{onCommand;root;onResize;skin;humansTrough;meterTroughs;divider;clockEl;alertEl;bannerEl;onBannerTransitionEnd;buttons=new Map;lastClock=``;lastBanner=null;lastAlert=null;constructor(e,t,n){this.onCommand=n,this.skin=s[t.faction],Nd(),this.root=xd(`div`,`hud`),this.root.dataset.faction=t.faction,this.root.style.setProperty(`--line`,this.skin.line),this.root.style.setProperty(`--chrome`,this.skin.chrome),this.root.style.setProperty(`--plate`,this.skin.plate),this.root.style.setProperty(`--on-plate`,this.skin.onPlate),this.root.style.setProperty(`--pip-on`,this.skin.pipOn),this.root.style.setProperty(`--pip-gap`,this.skin.pipGap),this.root.style.setProperty(`--pip-off`,this.skin.pipOff),this.root.style.setProperty(`--pip-off-gap`,this.skin.pipOffGap),this.root.style.setProperty(`--accent`,this.skin.accent),this.root.style.setProperty(`--label`,this.skin.label),this.root.style.setProperty(`--warn`,this.skin.warn),this.root.style.setProperty(`--go`,this.skin.go),this.root.style.setProperty(`--icon-stroke`,this.skin.outline??`transparent`),this.root.style.setProperty(`--hud-font`,this.skin.font),this.root.style.setProperty(`--band`,this.skin.band),this.root.style.setProperty(`--on-band`,this.skin.onBand),this.root.style.setProperty(`--rail`,`${this.skin.railPx}px`),this.root.style.setProperty(`--divider`,this.skin.divider),this.root.style.setProperty(`--radius`,this.skin.radius),this.root.style.setProperty(`--outline`,this.skin.outline??this.skin.line),this.root.style.setProperty(`--chamfer`,this.skin.chamferPx>0?`polygon(${this.skin.chamferPx}px 0, calc(100% - ${this.skin.chamferPx}px) 0, 100% 100%, 0 100%)`:`none`);let r=xd(`div`,`hud-band`);r.append(Ed(this.skin,`left`));let i=xd(`div`,`hud-meters`),a=xd(`div`,`hud-meter`);a.append(Sd(`HUMANS`)),this.humansTrough=Cd(t.humans.trough.pips),a.append(this.humansTrough.el),i.append(a);let o=xd(`div`,`hud-meter`);o.append(Sd(t.meter.label)),this.divider=xd(`div`,`hud-divider`);let c=[];t.meter.troughs.forEach((e,t)=>{t>0&&o.append(this.divider);let n=Cd(e.pips);c.push(n),o.append(n.el)}),this.meterTroughs=c,i.append(o),r.append(i,Ed(this.skin,`right`)),this.root.append(r);let l=xd(`div`,`hud-island`);l.append(Dd(Od())),this.alertEl=Dd(kd()),this.alertEl.classList.add(`hud-alert`),l.append(this.alertEl),this.clockEl=xd(`div`,`hud-time`),l.append(this.clockEl),this.root.append(l),this.bannerEl=xd(`div`,`hud-banner`),this.onBannerTransitionEnd=e=>{e.propertyName===`opacity`&&!this.bannerEl.classList.contains(`shown`)&&(this.bannerEl.textContent=``)},this.bannerEl.addEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.append(this.bannerEl);let u=xd(`div`,`hud-column`),d=xd(`div`,`hud-collapse`);d.append(Td(this.skin.badge)),u.append(d,xd(`div`,`hud-spine`));let f=xd(`div`,`hud-cluster`);for(let e of t.commands){let t=document.createElement(`button`);t.className=`hud-button`,t.type=`button`,t.title=e.label,t.setAttribute(`aria-label`,e.label),t.innerHTML=Ad(e.id,this.skin),t.addEventListener(`click`,()=>this.onCommand(e.id)),this.buttons.set(e.id,t),f.append(t)}u.append(f),this.root.append(u),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize),this.render(t)}dispose(){window.removeEventListener(`resize`,this.onResize),this.bannerEl.removeEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.remove()}rescale(){let e=Math.max(.7,Math.min(1,window.innerWidth/hd));this.root.style.setProperty(`--hud-scale`,String(e))}render(e){bd(this.humansTrough,e.humans.trough),e.meter.troughs.forEach((e,t)=>{let n=this.meterTroughs[t];n&&bd(n,e)}),this.divider.classList.toggle(`lit`,e.meter.dividerLit),e.clock!==this.lastClock&&(this.clockEl.textContent=e.clock,this.lastClock=e.clock),e.alert!==this.lastAlert&&(this.alertEl.classList.toggle(`on`,e.alert),this.lastAlert=e.alert),e.banner!==this.lastBanner&&(e.banner!==null&&(this.bannerEl.textContent=e.banner),this.bannerEl.classList.toggle(`shown`,e.banner!==null),this.lastBanner=e.banner);for(let t of e.commands){let e=this.buttons.get(t.id);e&&(e.disabled=!t.enabled)}}};function bd(e,t){e.pips.forEach((e,n)=>{let r=n<t.filled;e.classList.toggle(`on`,r),e.classList.toggle(`accent`,r&&t.accent)})}function xd(e,t){let n=document.createElement(e);return n.className=t,n}function Sd(e){let t=xd(`div`,`hud-label`);return t.textContent=e,t}function Cd(e){let t=xd(`div`,`hud-trough`),n=[];for(let r=0;r<e;r++){let e=xd(`i`,`hud-pip`);n.push(e),t.append(e)}return{el:t,pips:n}}function wd(e,t,n){let r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${e} ${t}`),r.setAttribute(`width`,String(e)),r.setAttribute(`height`,String(t)),r.innerHTML=n,r}function Td(e){return wd(e.width,e.height,e.inner)}function Ed(e,t){let n=Td(e.cap);return n.classList.add(`hud-cap`,t),n}function Dd(e){let t=xd(`div`,`hud-plate`);return t.append(e),t}function Od(){return wd(22,22,`<circle cx="11" cy="11" r="8" fill="none" stroke="var(--on-plate)" stroke-width="2"/>
     <path d="M11 11 V5 A6 6 0 0 1 17 11 Z" fill="var(--on-plate)"/>`)}function kd(){return wd(22,22,`<rect x="9" y="4" width="4" height="9" rx="1.4" fill="currentColor"/>
     <rect x="8.5" y="15" width="5" height="3.2" rx="1" fill="currentColor"/>`)}function Ad(e,t){switch(e){case`primary`:return`<svg viewBox="0 0 ${t.primaryIcon.width} ${t.primaryIcon.height}"
        width="${vd}" height="${vd}">${t.primaryIcon.inner}</svg>`;case`regroup`:return jd(`M12 11 L8.5 6.5 H10.8 V3 H13.2 V6.5 H15.5 Z`,`var(--warn)`,45);case`scatter`:return jd(`M12 3 L15.5 7.5 H13.2 V11 H10.8 V7.5 H8.5 Z`,`var(--go)`,0);case`cancel`:return`<svg viewBox="0 0 24 24" width="${vd}" height="${vd}">
        <circle cx="12" cy="12" r="9" fill="var(--icon-stroke)" stroke="#ffffff" stroke-width="2"/>
        <path d="M8.4 8.4 L15.6 15.6 M15.6 8.4 L8.4 15.6" stroke="#ffffff" stroke-width="2.6"
              stroke-linecap="round"/>
      </svg>`}}function jd(e,t,n){return`<svg viewBox="0 0 24 24" width="${vd}" height="${vd}">
    <g transform="rotate(${n} 12 12)">${[0,90,180,270].map(n=>`<path d="${e}" fill="${t}" stroke="var(--icon-stroke)" stroke-width="1.1" stroke-linejoin="round" transform="rotate(${n} 12 12)"/>`).join(``)}</g>
  </svg>`}var Md=!1;function Nd(){if(Md)return;Md=!0;let e=document.createElement(`style`);e.textContent=Pd,document.head.append(e)}var Pd=`
.hud {
  --hud-scale: 1;
  position: fixed;
  inset: 0;
  /* The HUD must never eat a click meant for the city; only its buttons opt back in. */
  pointer-events: none;
  user-select: none;
  font-family: var(--hud-font);
  z-index: 10;
}

/* --- Top band --- */
.hud-band {
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  /* flex-start, not stretch: the brackets are taller than the band on purpose and stretching
     them would squash the shape back into a rectangle. */
  align-items: flex-start;
  transform: translateX(-50%) scale(var(--hud-scale));
  transform-origin: top center;
}
.hud-cap { display: block; }
.hud-cap.right { transform: scaleX(-1); }
.hud-meters {
  display: flex;
  align-items: center;
  gap: 34px;
  padding: 0 26px;
  height: 34px;
  /* Sampled per faction and deliberately *not* tinted toward it — the Machine band is a dark
     neutral and the Ancient band a light one. Tinting either would make the HUD read as a colour
     filter laid over the city. */
  background: var(--band);
  border-bottom: var(--rail) solid var(--line);
  /* Chamfered top corners where the skin asks for them, so the band is a trapezoid with its long
     edge at the bottom — the edge the Machine cap's diagonal trace bundle resolves against.
     Square corners left that cap looking stuck on rather than continuous with the band. The
     Ancient skin sets this to none, because a chamfer reads as machined against ribbon work. */
  clip-path: var(--chamfer);
}
.hud-meter { display: flex; align-items: center; gap: 12px; }
.hud-label {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.13em;
  color: var(--label);
  /* A dark halo works over the dark Machine band and the light Ancient one alike; a glow sized
     to one would smear on the other. */
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.85), 0 1px 1px rgba(0, 0, 0, 0.7);
}

/* --- Pip troughs --- */
.hud-trough {
  display: flex;
  gap: ${_d}px;
  align-items: stretch;
  height: 17px;
  padding: 2px 3px;
  background: var(--pip-off-gap);
  border: 1px solid rgba(255, 255, 255, 0.42);
}
.hud-pip {
  width: ${gd}px;
  background: var(--pip-off);
}
.hud-pip.on { background: var(--pip-on); }
.hud-pip.accent { background: var(--accent); }

.hud-divider {
  width: 2px;
  height: 21px;
  margin: 0 5px;
  /* Per skin, because contrast reverses: a pale tick reads on the dark Machine band and
     disappears on the light Ancient one. */
  background: var(--divider);
}
.hud-divider.lit { background: var(--accent); box-shadow: 0 0 6px var(--accent); }

/* --- Top-right island --- */
.hud-island {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 16px 0 22px;
  background: var(--band);
  border-bottom: var(--rail) solid var(--line);
  border-left: 2px solid var(--line);
  transform: scale(var(--hud-scale));
  transform-origin: top right;
}
.hud-plate {
  display: grid;
  place-items: center;
  width: 30px;
  height: 26px;
  background: var(--plate);
  border: 1px solid var(--outline);
  border-radius: var(--radius);
}
/* The lamp is dull until something is actually wrong, then it burns. Dimmed by opacity rather
   than by a translucent white, which was invisible on the light Ancient plate. */
.hud-alert { color: var(--on-plate); opacity: 0.42; }
.hud-alert.on { color: var(--warn); opacity: 1; box-shadow: 0 0 10px var(--warn); }
.hud-time {
  min-width: 74px;
  text-align: right;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-variant-numeric: tabular-nums;
  color: var(--on-band);
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.85), 0 1px 1px rgba(0, 0, 0, 0.7);
}

/* --- Status plate --- */
.hud-banner {
  position: absolute;
  top: 52px;
  left: 50%;
  padding: 7px 44px;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #fff2f2;
  background: linear-gradient(#c0182c, #7d0a19);
  border: 2px solid var(--line);
  border-radius: var(--radius);
  text-shadow: 0 0 9px rgba(0, 0, 0, 0.75);
  opacity: 0;
  transform: translateX(-50%) scale(var(--hud-scale));
  transform-origin: top center;
  /*
   * A banner first becoming visible used to allocate and rasterize its opacity layer in the
   * same frame as a production or harvest event.  That work competes with the WebGL frame and
   * reads as a small freeze.  Keep this tiny, frequently animated element on its own compositor
   * layer from HUD construction onward, and isolate its layout/style invalidation from the
   * canvas and the rest of the HUD.
   */
  contain: layout style;
  will-change: opacity;
  pointer-events: none;
  transition: opacity 140ms linear;
}
.hud-banner.shown { opacity: 1; }

/* --- Right command column, two detached pieces as in the frames --- */
.hud-column {
  position: absolute;
  top: 12%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: scale(var(--hud-scale));
  transform-origin: top right;
}
.hud-collapse {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  background: var(--band);
  border: 2px solid var(--line);
  border-right: none;
  border-radius: var(--radius) 0 0 var(--radius);
}
/* Thin line trailing off the bracket toward the screen edge — ornament, not a control. */
.hud-spine {
  width: 10px;
  height: 150px;
  margin-right: 12px;
  border-right: 2px solid var(--line);
  border-bottom: 2px solid var(--line);
}
.hud-cluster {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 26px;
  padding: 5px;
  background: var(--band);
  border: 2px solid var(--line);
  border-right: none;
  border-radius: var(--radius) 0 0 var(--radius);
}
.hud-button {
  display: grid;
  place-items: center;
  width: 46px;
  height: 40px;
  padding: 0;
  background: var(--plate);
  border: 1px solid var(--outline);
  border-radius: var(--radius);
  cursor: pointer;
  pointer-events: auto;
}
.hud-button:hover:not(:disabled) { background: var(--chrome); }
/*
 * Dimmed, not faded out. At 0.38 the three orders that wait on M4 read as a broken column
 * rather than an unavailable one — the frames show four solid buttons, and the difference
 * between "not yet" and "not there" has to stay legible.
 */
.hud-button:disabled { opacity: 0.62; cursor: default; }
`;function Fd(e,t){if(!t)return{kind:`unable`};if(e.deployTimer>0){let t=Math.max(Yt,1);return{kind:`transitioning`,to:e.deployTarget,stepsLeft:e.deployTimer,progress:Math.min(Math.max(1-e.deployTimer/t,0),1)}}return e.deployed?{kind:`deployed`}:{kind:`mobile`}}function Id(e){return e.cutterSweepSteps>0?`Radial cutting sweep active`:e.shardCutSpent?`Spent — split the Earthshard`:e.harvestingBuildingId===null?e.harvestingCrowdId===null?e.cargo>0?`Carrying ${Math.round(e.cargo)}`:e.unreachable?`Could not reach its goal`:e.path.length>0?`Moving`:null:`Harvesting a street crowd`:`Harvesting`}function Ld(e){return!Qt($t(e.typeId))||e.shardCutSpent?null:e.cutterSweepSteps>0?{kind:`sweeping`,progress:Math.min(Math.max(1-e.cutterSweepSteps/dn,0),1),secondsLeft:Math.ceil(e.cutterSweepSteps/30)}:e.cutterSweepCooldown>0?{kind:`cooldown`,secondsLeft:Math.ceil(e.cutterSweepCooldown/30)}:{kind:`ready`}}function Rd(e,t){return en(e,t).map(e=>{let t=kt(e);return{id:e,damageType:t.damageType,range:t.range,minimumRange:t.minimumRange,dps:Math.round(vn(t,30)*10)/10,structureOnly:!t.targetClasses.includes(`unit`)}})}function zd(e){if(!e.canDeploy)return null;let t=e.deployedDamageTakenMultiplier,n=t!==void 0&&t<1?`${Math.round((1-t)*100)}% less damage taken`:null;if(!e.deployedWeaponIds)return n?`Deployed: immobile, ${n}`:`Deployed: immobile`;let r=Bd(Rd(e,!1)),i=Bd(Rd(e,!0));if(!r||!i)return n?`Deployed: immobile, ${n}`:`Deployed: immobile`;let a=[`${i.range} m reach`,`${i.dps} DPS`];return i.minimumRange>0&&a.push(`blind inside ${i.minimumRange} m`),n&&a.push(n),`Deployed: ${a.join(`, `)} — mobile: ${r.range} m, ${r.dps} DPS`}function Bd(e){let t;for(let n of e)n.structureOnly||(!t||n.range>t.range)&&(t=n);return t}function Vd(e){let t=[];return e.corrosionSteps>0&&t.push({id:`corroded`,label:`CORRODED`,secondsLeft:Math.ceil(e.corrosionSteps/30)}),e.wardSteps>0&&t.push({id:`warded`,label:`WARDED`,secondsLeft:Math.ceil(e.wardSteps/30)}),t}function Hd(e,t=null){let n=$t(e.typeId);return{typeId:n.id,name:n.name,faction:n.faction,role:n.role,cost:n.cost,health:{current:e.health,max:n.health},humansOnboard:n.faction===`machines`&&n.role===`harvester`?{current:e.cargo,max:60}:null,deployState:Fd(e,!!n.canDeploy),activity:Id(e),armor:mn(n),weapons:Rd(n,e.deployed),statuses:Vd(e),stanceNote:zd(n),ritual:t,cutterSweep:Ld(e)}}function Ud(e,t){let n=$t(t.typeId);if(!n.deityRitual)return null;let r=n.faction===e.playerFaction?e.ritualRefusal(n.faction,t.id):`noRitualSite`;return{channelling:t.ritualSteps>0,progress:t.ritualSteps>0?Math.min(Math.max(1-t.ritualSteps/Xt,0),1):0,secondsLeft:Math.ceil(t.ritualSteps/30),blockedBy:t.ritualSteps>0?null:Wd(r),humansCost:350,chargeCost:8,radius:420}}function Wd(e){switch(e){case void 0:return null;case`noRitualSite`:return`NOT YOUR RITUAL SITE`;case`ritualAlreadyActive`:return`ALREADY CHANNELLING`;case`requiresTier2`:return`REQUIRES TIER 2`;case`insufficientHumans`:return`NEEDS 350 HUMANS`;case`insufficientCharge`:return`NEEDS 8 INSANITY`}}function Gd(e,t,n){let r=e.playerFaction;if(n&&e.army.typeOf(n).faction!==r)return{mode:`single`,faction:r,selectedCount:1,inspectOnly:!0,leader:Hd(n,Ud(e,n)),leaderId:n.id,tallies:[]};let i=t.list(),a=t.primary(),o=a===void 0?void 0:e.army.get(a);if(!o)return{mode:`none`,faction:r,selectedCount:0,inspectOnly:!1,leader:null,leaderId:null,tallies:[]};let s=new Map;for(let t of i){let n=e.army.get(t);n&&s.set(n.typeId,(s.get(n.typeId)??0)+1)}let c=[...s.entries()].map(([e,t])=>({typeId:e,name:$t(e).name,count:t,isLeader:e===o.typeId})).sort((e,t)=>t.count-e.count||e.typeId.localeCompare(t.typeId));return{mode:i.length>1?`multi`:`single`,faction:r,selectedCount:i.length,inspectOnly:!1,leader:Hd(o,Ud(e,o)),leaderId:o.id,tallies:i.length>1?c:[]}}var Kd={visible:!1,faction:`machines`,producer:{kind:`unit`,id:-1},title:``,state:``,guidance:``,humans:0,producesUnits:!1,producible:[],queue:[],activeSummon:null,tier2:{unlocked:!1,cost:_n.tier2Cost,affordable:!1},notice:null};function qd(e,t,n,r){if(!t)return Kd;let i=$t(t.typeId);if(!i.producesUnits&&!i.summonTypes||i.faction!==e.playerFaction)return Kd;let a=e.resources.humans,o=e.constructionSites.find(e=>e.builderId===t.id),s=o?(()=>{let e=$t(o.structureTypeId),t=Math.max(e.constructionSteps??e.buildSteps,1);return{typeId:e.id,name:e.name,summoning:o.summoning,progress:o.summoning?Math.min(Math.max(1-o.remainingSteps/t,0),1):0}})():null,c=i.summonTypes?i.summonTypes.map(e=>$t(e)).map(t=>({action:`summon`,typeId:t.id,name:t.name,cost:e.freeProduction?0:t.cost,seconds:Math.round((t.constructionSteps??t.buildSteps)/30),tier:t.tier,lockedByTier:t.tier>e.techTier,unaffordable:!e.freeProduction&&a<t.cost,enabled:!s&&t.tier<=e.techTier&&(e.freeProduction||a>=t.cost)})):un.filter(e=>i.productionTypes?.includes(e.id)??(e.faction===i.faction&&e.role!==`harbinger`&&!e.processesHumans&&!e.producesUnits)).map(n=>({action:`produce`,typeId:n.id,name:n.name,cost:e.freeProduction?0:n.cost,seconds:Math.round(n.buildSteps/30),tier:n.tier,lockedByTier:n.tier>e.techTier,unaffordable:!e.freeProduction&&a<n.cost,enabled:n.tier<=e.techTier&&(e.freeProduction||a>=n.cost)&&t.deployed&&t.deployTimer===0})).sort((e,t)=>e.tier-t.tier||e.cost-t.cost),l=t.fabricationPad?.occupantId,u=l==null?void 0:e.army.get(l),d=u?u.hasGoal?`CLEARING FABRICATION PAD`:`WAITING FOR PAD CLEARANCE`:t.queue.length?`FABRICATING — ${$t(t.queue[0].typeId).name.toUpperCase()}`:`DEPLOYED`,f=r?.builderId===t.id?$t(r.typeId):void 0,p=i.fabricationPadOutputTypeId?$t(i.fabricationPadOutputTypeId):void 0,m=i.summonTypes?f?`PLACE ${f.name.toUpperCase()} ON CLEAR GROUND — ESC OR RIGHT-CLICK TO CANCEL`:i.id===`ancient-harbinger`?`SUMMON ROSTER — ANCIENT INFANTRY COMES FROM A SLIME TEMPLE`:`INFANTRY ROSTER ONLY`:p?t.deployed||t.deployTimer>0?`${p.name.toUpperCase()} FABRICATION PAD RESERVED BESIDE PRODUCER`:`DEPLOY REQUIRES CLEAR SPACE FOR A ${p.name.toUpperCase()} FABRICATION PAD`:i.productionTypes?.length===1?`${$t(i.productionTypes[0]).name.toUpperCase()} ROSTER ONLY`:`FABRICATION ROSTER — ${(i.productionTypes??[]).map(e=>$t(e).name.toUpperCase()).join(`, `)}`;return{visible:!0,faction:i.faction,producer:{kind:`unit`,id:t.id},title:i.summonTypes?`${i.name} — Summon`:i.name,state:i.summonTypes?s?`${s.summoning?`SUMMONING`:`HARBINGER APPROACHING`} — ${s.name.toUpperCase()}`:`CHOOSE A SUMMON`:t.deployTimer>0?t.deployTarget?`DEPLOYING`:`PACKING UP`:t.deployed?i.fabricationPadOutputTypeId?d:t.queue.length?`DEPLOYED · PRODUCING`:`DEPLOYED`:`MOBILE — CANNOT PRODUCE`,guidance:m,humans:a,producesUnits:!0,producible:c,queue:t.queue.map((e,t)=>({typeId:e.typeId,name:$t(e.typeId).name,progress:t===0?1-e.remainingSteps/Math.max($t(e.typeId).buildSteps,1):0,secondsLeft:e.remainingSteps/30})),activeSummon:s,tier2:{unlocked:e.techTier>=2,cost:_n.tier2Cost,affordable:a>=_n.tier2Cost},notice:n}}var Jd=class{windowSize;samples=[];constructor(e=90){this.windowSize=e}add(e){e<=0||!Number.isFinite(e)||(this.samples.push(e),this.samples.length>this.windowSize&&this.samples.shift())}get sampleCount(){return this.samples.length}get fps(){if(this.samples.length===0)return 0;let e=this.samples.reduce((e,t)=>e+t,0);return this.samples.length/e*1e3}get worstFrameMs(){return this.samples.length===0?0:Math.max(...this.samples)}get medianFrameMs(){if(this.samples.length===0)return 0;let e=[...this.samples].sort((e,t)=>e-t);return e[Math.floor(e.length/2)]??0}get missedVsyncCount(){let e=this.medianFrameMs;if(e<=0)return 0;let t=e*1.5,n=0;for(let e of this.samples)e>t&&n++;return n}},Yd=60,Xd=[{id:`dev-controls`,label:`Dev Controls`},{id:`statistics`,label:`Statistics`}],Zd=class{el;activeTab=`dev-controls`;constructor(e){this.el=e,this.el.addEventListener(`pointerdown`,e=>{let t=e.target?.closest(`[data-overlay-tab]`);!t||!Qd(t.dataset.overlayTab)||(this.setActiveTab(t.dataset.overlayTab),t.focus())})}render(e,t){let n=t.medianFrameMs>0?1e3/t.medianFrameMs:0,r=t.missedVsyncCount,i=r>0?`${r} missed vsync / ${t.sampleCount} frames`:n>=59?`meets ${Yd} fps target`:`vsync-limited at ~${n.toFixed(1)} Hz`,a=e.groups.length>0?e.groups.join(`,`):`—`,[o=``,s=``,c=``,l=``,u=``,d=``,f=``,p=``]=[`<b>HUMAN RESOURCES</b>  ${e.battlefield?`BATTLE PLAYGROUND`:`M5`} · playing ${e.faction}`,``,`render     ${e.fps.toFixed(1)} fps  (${i})`,`frame      median ${t.medianFrameMs.toFixed(1)} ms · worst ${t.worstFrameMs.toFixed(1)} ms`,...e.detailed?[`detailed  ${e.detailed.drawCalls} draw calls · ${e.detailed.triangles.toLocaleString()} triangles`,`models    ${e.detailed.units.loadedModels} loaded · ${e.detailed.units.loadingModels} loading · ${e.detailed.units.failedModels} failed`,`detail    ${e.detailed.units.visible} visible · ${e.detailed.units.selection} selection · ${e.detailed.units.occlusion} occlusion · ${e.detailed.units.fallbacks} fallback`]:[],`sim        ${e.simHz.toFixed(2)} Hz   step ${e.stepCount}`,`alpha      ${e.alpha.toFixed(3)}`,`dropped    ${e.droppedMs.toFixed(0)} ms sim time`,``,`units      ${e.units}   moving ${e.unitsMoving}   selected ${e.selected}`,`blocked    ${e.unitsBlocked}   stalled ${e.unitsStalled}   short of goal ${e.unitsUnreached}`,`groups     ${a}`,`paths      ${e.pathsTotal} searched · ${e.pathsQueued} queued`,``,`nav        ${e.navCells} cells   ${e.navRebuilds} local rebuilds`,`rebuild    ${e.navLastRebuildCells} cells in ${e.navRebuildMs.toFixed(2)} ms`,`passable   small ${(e.smallPassable*100).toFixed(1)}% · large ${(e.largePassable*100).toFixed(1)}%`,`  strict   small ${(e.smallPassableStrict*100).toFixed(1)}% · large ${(e.largePassableStrict*100).toFixed(1)}%`,`           (large passes residential + commercial, so it reads above small; strict counts`,`            only ground with no building on it)`,`reach      small ${(e.reachSmall*100).toFixed(1)}% · large ${(e.reachLarge*100).toFixed(1)}% of the shard`,`  strict   large ${(e.reachLargeStrict*100).toFixed(1)}%   (the share razing still opens — spec §15.4 criterion 5)`,`at focus   small ${$d(e.atFocusSmall)} · large ${$d(e.atFocusLarge)}`,`           (measured where the camera was when last probed — P re-probes)`,``,`camera     ${e.distance.toFixed(0)} m   pitch ${e.pitchDeg.toFixed(1)}°`,`zoom       ${(e.zoomFraction*100).toFixed(0)}%`,`focus      x ${e.focusX.toFixed(0)}  z ${e.focusZ.toFixed(0)}`,``,`city       ${e.cityBuildings} buildings   seed ${e.seed}`,`state      intact ${e.cityIntact} · damaged ${e.cityDamaged} · rubble ${e.cityRubble}`,`population ${Math.round(e.populationRemaining)} / ${e.populationTotal} humans left in the city`,`displaced  ${Math.round(e.civilianHumans)} humans in the street · ${e.civilianCrowds} crowds`,`           (damage must move humans here, not delete them)`,`           building occupancy indicators ${e.populationLabels?`on`:`off`}   (I toggles; harvester selection)`,``,`humans     ${Math.floor(e.humans)} / ${e.humansCap}   ${e.humansPerMinute.toFixed(0)}/min`,`charge     ${Math.floor(e.charge)} / ${e.chargeCap} pips · ${e.chargeSegments} banked   ${e.chargePerMinute.toFixed(1)}/min`,`in transit ${Math.round(e.cargoInTransit)} carried   ${e.harvesting} harvesting · ${e.harvestIdle} idle`,`           (Machines sawtooth as they haul · Ancient Ones must read 0)`,`           (idle = standing order, nothing within retarget range)`,`tech       tier ${e.techTier}   ${e.structures} structures   ${e.queued} queued`,`deployed   ${e.unitsDeployed} settled · ${e.unitsDeploying} transforming`,``,`WASD pan · wheel zoom · drag select · right-click move`,`shift+click add · digit recall group · shift+digit assign`,`X damage nearest · Z raze at focus · B cycle all states · P re-probe`,`select harvester · click building to harvest · E harvest at focus`,`R deploy selected · V deploy factory`,`L produce Tier 1 · G produce Tier 2 · T unlock Tier 2`,`H +humans · J +charge   (debug tuning)`,`O hand player side to AI · shift+O opponent · K cycle simulation speed`,`[ previous seed · ] next seed`,`F5 quick save · F9 quick load`,`Y cycle observed faction`].join(`
`).split(`

`),m=f.split(`
`),h=m.splice(-2).join(`
`),g=m.join(`
`),_=p.split(`
`),v=[`CAMERA & SELECTION\n${_.slice(0,2).join(`
`)}`,`WORLD DEBUG\n${_[2]??``}`,`NAV VISUALS
U occupied-space circles · M unit paths`,`HARVEST & DEPLOY\n${_.slice(3,5).join(`
`)}`,`PRODUCTION & BUILDING\n${_.slice(5,7).join(`
`)}`,`DEBUG RESOURCES\n${_[7]??``}`,`AI CONTROL\n${_[8]??``}`,`SESSION\n${_.slice(9,12).join(`
`)}`].join(`

`),y=[`RENDER INFO\n${s}`,`CAMERA INFO\n${u}`,v].join(`

`),b=[`UNIT INFO\n${c}`,`NAV INFO\n${l}`,`CITY INFO\n${d}`,`HUMAN INFO\n${g}`,`TECH INFO\n${h}`].join(`

`);this.el.innerHTML=[`<div class="overlay-heading">${o}</div>`,`<div class="overlay-tabs" role="tablist" aria-label="Diagnostic categories">`,...Xd.map(e=>`<button class="overlay-tab" type="button" role="tab" id="overlay-tab-${e.id}" aria-controls="overlay-panel-${e.id}" aria-selected="${e.id===this.activeTab}" tabindex="${e.id===this.activeTab?0:-1}" data-overlay-tab="${e.id}">${e.label}</button>`),`</div>`,this.panel(`dev-controls`,y),this.panel(`statistics`,b)].join(``)}panel(e,t){return`<section class="overlay-tab-panel" role="tabpanel" id="overlay-panel-${e}" aria-labelledby="overlay-tab-${e}"${e===this.activeTab?``:` hidden`}><pre class="overlay-readout">${t}</pre></section>`}setActiveTab(e){this.activeTab=e;for(let t of this.el.querySelectorAll(`[data-overlay-tab]`)){let n=t.dataset.overlayTab===e;t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1}for(let t of this.el.querySelectorAll(`.overlay-tab-panel`))t.hidden=t.id!==`overlay-panel-${e}`}};function Qd(e){return Xd.some(t=>t.id===e)}function $d(e){return e?`reachable`:`no route`}function ef(e,t){return e===`building`?t>=.16?`block`:e:e===`block`?t<.14?`building`:t>=.65?`district`:e:t<.6?`block`:e}function tf(e,t){let n=n=>{let r=new Map;for(let i of e.buildings){if((t[i.id]??0)<=0)continue;let e=n===`block`?i.blockId:i.districtId;if(e===void 0)continue;let a=r.get(e);a?a.push(i.id):r.set(e,[i.id])}return[...r].map(([r,i])=>{if(n===`block`){let t=e.get(i[0]??-1),n=e.blocks.find(e=>e.id===r&&(!t||Kt(t.x,t.z,e.clip??[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}])));if(n)return{id:r,...n.clip?At(n.clip):{x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2},buildingIds:i}}let a=0,o=0,s=0;for(let n of i){let r=e.get(n),i=t[n]??0;!r||i<=0||(a+=r.x*i,o+=r.z*i,s+=i)}return{id:r,x:a/s,z:o/s,buildingIds:i}})};return{block:n(`block`),district:n(`district`)}}var nf=15e3,rf=5e3,af=class{city;population;capacity;root;labels=new Map;visibleKeys=new Set;blockGroups;districtGroups;point=new q;visible=!1;pinned=!1;level=`building`;presentationDirty=!0;populationDirty=!0;lastRetireCheckMs=-1/0;constructor(e,t,n,r,i){this.city=t,this.population=n,this.capacity=r,sf(),this.root=document.createElement(`div`),this.root.className=`population-labels`,this.root.style.setProperty(`--population-accent`,s[i].line);let a=tf(t,r);this.blockGroups=a.block,this.districtGroups=a.district,e.append(this.root)}createLabel(e){let t=document.createElement(`span`);t.className=`population-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`population-label-count`;let r=document.createElement(`span`);r.className=`population-label-bar`;let i=document.createElement(`span`);i.className=`population-label-bar-fill`,r.append(i),t.append(n,r),this.root.append(t);let a={label:t,count:n,fill:i,left:null,top:null,text:null,width:null,lastRelevantMs:-1/0};return this.labels.set(e,a),a}get enabled(){return this.visible||this.pinned}setFaction(e){this.root.style.setProperty(`--population-accent`,s[e].line)}toggle(){this.pinned=!this.pinned,this.updateVisibility()}setSelectionEnabled(e){this.visible!==e&&(this.visible=e,this.updateVisibility())}updateVisibility(){let e=this.enabled;this.root.classList.toggle(`shown`,e),this.presentationDirty=!0,e||this.discardLabels()}sync({camera:e,zoomFraction:t,nowMs:n,cameraDirty:r,populationDirty:i}){if(!this.enabled)return;this.populationDirty||=i;let a=ef(this.level,t),o=a!==this.level;if(this.level=a,!this.presentationDirty&&!o&&!r&&!this.populationDirty)return;this.presentationDirty=!1,this.populationDirty=!1,e.updateMatrixWorld();let s=new Set;if(this.level===`building`)for(let t of this.city.buildings){if((this.capacity[t.id]??0)<=0)continue;let r=Oo(t);this.syncLabel(`building:${t.id}`,t.x,r+5,t.z,[t.id],e,n,s)}else{let t=this.level===`block`?this.blockGroups:this.districtGroups;for(let r of t)this.syncLabel(`${this.level}:${r.id}`,r.x,8,r.z,r.buildingIds,e,n,s)}this.hideNoLongerVisible(s),this.visibleKeys.clear();for(let e of s)this.visibleKeys.add(e);this.retireIrrelevant(n)}syncLabel(e,t,n,r,i,a,o,s){if(this.point.set(t,n,r).project(a),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04))return;let c=0,l=0;for(let e of i)c+=this.population[e]??0,l+=this.capacity[e]??0;if(c<=0)return;let u=this.labels.get(e)??this.createLabel(e),d=`${(this.point.x*.5+.5)*100}%`,f=`${(-this.point.y*.5+.5)*100}%`,p=`HUMANS  ${Math.ceil(c)}`,m=`${Math.min(100,Math.max(0,c/Math.max(1,l)*100))}%`;u.left!==d&&(u.label.style.left=d,u.left=d),u.top!==f&&(u.label.style.top=f,u.top=f),u.text!==p&&(u.count.textContent=p,u.text=p),u.width!==m&&(u.fill.style.width=m,u.width=m),u.label.hidden&&(u.label.hidden=!1),u.lastRelevantMs=o,s.add(e)}hideNoLongerVisible(e){for(let t of this.visibleKeys){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}discardLabels(){this.root.replaceChildren(),this.labels.clear(),this.visibleKeys.clear()}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<rf)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleKeys.has(t)||e-n.lastRelevantMs<nf||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleKeys.clear()}},of=!1;function sf(){if(of)return;of=!0;let e=document.createElement(`style`);e.textContent=`
.population-labels { position: fixed; inset: 0; pointer-events: none; z-index: 8; display: none; }
.population-labels.shown { display: block; }
.population-label {
  position: absolute;
  transform: translate(-50%, -100%);
  min-width: 62px;
  padding: 3px 5px;
  color: #fff;
  background: rgba(15, 20, 18, 0.78);
  border: 1px solid var(--population-accent);
  border-radius: 2px;
  font: 600 11px/1.25 ui-monospace, SFMono-Regular, Consolas, monospace;
  white-space: nowrap;
  text-shadow: 0 1px 2px #000;
}
.population-label-count { display: block; }
.population-label-bar { display: block; height: 3px; margin-top: 3px; overflow: hidden; background: rgba(255, 255, 255, .2); }
.population-label-bar-fill { display: block; height: 100%; background: var(--population-accent); transition: width .1s linear; }
`,document.head.append(e)}var cf=128,lf=48,uf=96,df=16,ff=.45,pf=.6,mf=.6,hf=25;function gf(e){let t=e.filter(e=>e>0).sort((e,t)=>e-t);return t.length===0?1:t[Math.floor((t.length-1)*.75)]}function _f(e,t){return Math.max(0,e)/Math.max(1,t)}function vf(e,t){return Math.max(0,Math.min(1,1-Math.exp(-_f(e,t))))}function yf(e){let t=new V(672498),n=new V(386795),r=new V(16765965),i=new V(16718341),a=Math.max(0,Math.min(1,e));return(a<.33?t.lerp(n,a/.33):a<.66?n.lerp(r,(a-.33)/.33):r.lerp(i,(a-.66)/.34)).getHex()}function bf(e,t){return Math.max(14,Math.max(e,t)*.45+7)}function xf(e,t,n){return n.some(n=>(n.x-e)**2+(n.z-t)**2<=200**2)}function Sf(){return new F({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
      attribute float instanceHeat;
      varying float vHeat;
      varying vec2 vUv;
      void main() {
        vHeat = instanceHeat;
        vUv = uv;
        vec4 worldPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      varying float vHeat;
      varying vec2 vUv;
      vec3 palette(float value) {
        vec3 blue = vec3(0.04, 0.26, 0.95);
        vec3 cyan = vec3(0.02, 0.90, 0.92);
        vec3 yellow = vec3(1.00, 0.83, 0.05);
        vec3 red = vec3(1.00, 0.10, 0.03);
        if (value < 0.33) return mix(blue, cyan, value / 0.33);
        if (value < 0.66) return mix(cyan, yellow, (value - 0.33) / 0.33);
        return mix(yellow, red, (value - 0.66) / 0.34);
      }
      void main() {
        float radial = 1.0 - length(vUv - 0.5) * 2.0;
        if (radial <= 0.0 || vHeat <= 0.001) discard;
        gl_FragColor = vec4(palette(vHeat), radial * radial * (0.20 + vHeat * 0.34));
      }
    `})}function Cf(){return new F({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
      varying float vDistanceFromScanner;
      void main() {
        vDistanceFromScanner = length(position.xz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying float vDistanceFromScanner;
      void main() {
        float edgeFade = 1.0 - smoothstep(
          175.0,
          200.0,
          vDistanceFromScanner
        );
        if (edgeFade <= 0.001) discard;
        gl_FragColor = vec4(0.125, 0.875, 1.0, 0.58 * edgeFade);
      }
    `})}function wf(e,t){return new F({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:0,uniforms:{uScans:{value:e},uScanCount:t},vertexShader:`
      attribute float instanceHeat;
      varying float vHeat;
      varying vec3 vWorldPosition;
      void main() {
        vec4 localPosition = instanceMatrix * vec4(position, 1.0);
        vec4 worldPosition = modelMatrix * localPosition;
        vHeat = instanceHeat;
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec4 uScans[${df}];
      uniform int uScanCount;
      varying float vHeat;
      varying vec3 vWorldPosition;
      vec3 palette(float value) {
        vec3 blue = vec3(0.04, 0.26, 0.95);
        vec3 cyan = vec3(0.02, 0.90, 0.92);
        vec3 yellow = vec3(1.00, 0.83, 0.05);
        vec3 red = vec3(1.00, 0.10, 0.03);
        if (value < 0.33) return mix(blue, cyan, value / 0.33);
        if (value < 0.66) return mix(cyan, yellow, (value - 0.33) / 0.33);
        return mix(yellow, red, (value - 0.66) / 0.34);
      }
      void main() {
        vec2 point = vWorldPosition.xz;
        float coverage = 0.0;
        for (int index = 0; index < ${df}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${hf.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float texture = 0.94 + 0.06 * sin(point.x * 0.17 + point.y * 0.11);
        gl_FragColor = vec4(palette(vHeat) * texture, ${ff.toFixed(2)} * coverage);
      }
    `})}function Tf(e,t,n,r,i=!1){return new F({transparent:!0,depthWrite:!1,depthTest:!0,...i?{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}:{},side:i?2:0,uniforms:{uSources:{value:e},uScans:{value:t},uSourceCount:n,uScanCount:r},vertexShader:`
      varying vec3 vWorldPosition;
      #include <batching_pars_vertex>
      void main() {
        #include <batching_vertex>
        vec4 localPosition = vec4(position, 1.0);
        #ifdef USE_BATCHING
          localPosition = batchingMatrix * localPosition;
        #endif
        #ifdef USE_INSTANCING
          localPosition = instanceMatrix * localPosition;
        #endif
        vec4 worldPosition = modelMatrix * localPosition;
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec4 uSources[${uf}];
      uniform vec4 uScans[${df}];
      uniform int uSourceCount;
      uniform int uScanCount;
      varying vec3 vWorldPosition;
      vec3 palette(float value) {
        vec3 blue = vec3(0.04, 0.26, 0.95);
        vec3 cyan = vec3(0.02, 0.90, 0.92);
        vec3 yellow = vec3(1.00, 0.83, 0.05);
        vec3 red = vec3(1.00, 0.10, 0.03);
        if (value < 0.33) return mix(blue, cyan, value / 0.33);
        if (value < 0.66) return mix(cyan, yellow, (value - 0.33) / 0.33);
        return mix(yellow, red, (value - 0.66) / 0.34);
      }
      void main() {
        vec2 point = vWorldPosition.xz;
        float coverage = 0.0;
        for (int index = 0; index < ${df}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${hf.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float field = 0.0;
        for (int index = 0; index < ${uf}; index++) {
          if (index >= uSourceCount) break;
          vec4 source = uSources[index];
          if (source.w <= 0.0) continue;
          vec2 delta = point - source.xy;
          field += source.w * exp(-dot(delta, delta) / max(1.0, source.z * source.z));
        }
        float heat = 1.0 - exp(-field * ${1 .toFixed(2)});
        // Empty floor and clipped-building fragments remain the palette's lowest blue; scanner
        // coverage provides the natural outer fade.
        float texture = 0.94 + 0.06 * sin(point.x * 0.17 + point.y * 0.11);
        gl_FragColor = vec4(palette(heat) * texture, ${ff.toFixed(2)} * coverage);
      }
    `})}var Ef=class{city;cityView;population;group=new h;continuousSources=Array.from({length:uf},()=>new je);continuousScans=Array.from({length:df},()=>new je);continuousSourceCount={value:0};continuousScanCount={value:0};buildingContinuousSources=[];continuousSourceScratch=[];groundMaterial=Tf(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount);buildingMaterial=wf(this.continuousScans,this.continuousScanCount);clippedBuildingMaterial=Tf(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);rubbleBuildingMaterial=Tf(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);ground;buildingOverlays=new Map;buildingHeatAttributes=new Map;crowdGeometry=new Ze(1,32).rotateX(-Math.PI/2);crowdHeat=new D(new Float32Array(lf),1);crowds;rings=new M(new p(175,200,96).rotateX(-Math.PI/2),Cf(),cf);ringMatrix=new Be;crowdMatrix=new Be;buildingMatrix=new Be;heatReferencePopulation;lastHarvesterSignature=``;buildingOverlayDirty=!0;constructor(e,t,n,r){this.city=e,this.cityView=t,this.population=n,this.heatReferencePopulation=gf(r),this.rubbleBuildingMaterial.depthTest=!1,this.rubbleBuildingMaterial.side=0,this.ground=new B(new ae(this.city.radius*2,this.city.radius*2).rotateX(-Math.PI/2),this.groundMaterial),this.ground.position.y=Y+.24,this.ground.frustumCulled=!1,this.ground.renderOrder=0,this.crowdGeometry.setAttribute(`instanceHeat`,this.crowdHeat),this.crowds=new M(this.crowdGeometry,Sf(),lf),this.crowds.count=0,this.crowds.frustumCulled=!1,this.rings.count=0,this.rings.frustumCulled=!1,this.crowds.renderOrder=3,this.rings.renderOrder=2,this.group.add(this.ground,this.rings,this.crowds),this.syncBuildingOverlays();let i=this.cityView.buildingDamageHeatmapSources,a=i.find(e=>e.name===`destroyed-heatmap-parts`),o=i.find(e=>e.name===`destroyed-rubble-heatmap`);a&&(a.material.dispose(),a.material=this.clippedBuildingMaterial),o&&(o.material.dispose(),o.material=this.rubbleBuildingMaterial),this.group.add(...i),this.buildingOverlayDirty=!1}sync(e,t,n,r,i){i&&(this.buildingOverlayDirty=!0);let a=e.slice(0,16),o=a.length>0;if(this.group.visible=o,!o)return;let s=a.map(e=>`${e.id}:${e.x}:${e.z}`).join(`|`),c=s!==this.lastHarvesterSignature,l=c||r||i;this.lastHarvesterSignature=s,this.buildingOverlayDirty&&=(this.syncBuildingOverlays(),!1),c&&(this.syncRings(a),this.syncScans(a)),l&&(this.syncBuildingHeat(a),this.syncBuildingContinuousSources(a)),this.syncContinuousGround(t,n),this.syncCrowds(a,t,n)}dispose(){this.ground.geometry.dispose(),this.groundMaterial.dispose(),this.buildingMaterial.dispose(),this.clippedBuildingMaterial.dispose(),this.rubbleBuildingMaterial.dispose(),this.buildingHeatAttributes.clear();for(let[e,t]of this.buildingOverlays)t.geometry!==e.geometry&&t.geometry.dispose();this.buildingOverlays.clear(),this.crowdGeometry.dispose(),this.crowds.material.dispose(),this.rings.geometry.dispose(),this.rings.material.dispose()}syncBuildingOverlays(){let e=this.cityView.buildingHeatmapSources,t=new Set(e);for(let[e,n]of this.buildingOverlays)t.has(e)||(n.removeFromParent(),n.geometry!==e.geometry&&n.geometry.dispose(),n instanceof M&&this.buildingHeatAttributes.delete(n),this.buildingOverlays.delete(e));for(let t of e){let e=this.buildingOverlays.get(t);if(e){let n=t instanceof M&&this.cityView.buildingHeatmapInstanceIds.has(t);n&&e.geometry.userData.heatmapSource!==t.geometry?(e.geometry.dispose(),e.geometry=t.geometry.clone(),e.geometry.userData.heatmapSource=t.geometry):n||(e.geometry=t.geometry);continue}let n=t instanceof M&&this.cityView.buildingHeatmapInstanceIds.has(t),r=n?this.buildingMaterial:this.clippedBuildingMaterial,i=t instanceof M?new M(n?t.geometry.clone():t.geometry,r,t.instanceMatrix.count):new B(t.geometry,r);n&&(i.geometry.userData.heatmapSource=t.geometry),i instanceof M&&t instanceof M&&(n?(i.geometry.userData.heatmapSource=t.geometry,i.count=0):(i.instanceMatrix=t.instanceMatrix,i.count=t.count)),i.frustumCulled=!1,i.renderOrder=1,this.buildingOverlays.set(t,i),this.group.add(i)}}syncBuildingHeat(e){let t=new Map,n=new Set;for(let[t,n]of this.cityView.buildingHeatmapInstanceIds){let r=this.buildingOverlays.get(t);if(!(r instanceof M))continue;let i=this.buildingHeatAttributes.get(r);(!i||i.count!==r.instanceMatrix.count)&&(i=new D(new Float32Array(r.instanceMatrix.count),1),this.buildingHeatAttributes.set(r,i)),r.geometry.setAttribute(`instanceHeat`,i);let a=0;for(let o=0;o<n.length;o++){let s=n[o],c=this.city.get(s),l=this.population[s]??0;!c||c.state===`rubble`||!xf(c.x,c.z,e)||(t.getMatrixAt(o,this.buildingMatrix),r.setMatrixAt(a,this.buildingMatrix),i.setX(a,vf(l,this.heatReferencePopulation)),a++)}r.count=a,r.instanceMatrix.needsUpdate=!0,i.needsUpdate=!0}for(let r of this.city.buildings){let i=this.population[r.id]??0;if(xf(r.x,r.z,e)){if(r.state===`rubble`){n.add(r.id);continue}r.state===`damaged`&&t.set(r.id,yf(vf(i,this.heatReferencePopulation)))}}this.cityView.syncBuildingDamageHeatmap(t,n)}syncRings(e){let t=Math.min(e.length,cf);for(let n=0;n<t;n++){let t=e[n];this.ringMatrix.makeTranslation(t.x,Y+.32,t.z),this.rings.setMatrixAt(n,this.ringMatrix)}this.rings.count=t,this.rings.instanceMatrix.needsUpdate=!0}syncScans(e){let t=Math.min(e.length,df);this.continuousScanCount.value=t;for(let t=0;t<df;t++){let n=e[t];this.continuousScans[t].set(n?.x??0,n?.z??0,200,+!!n)}}syncCrowds(e,t,n){let r=0;for(let i of t){let t=i.prevX+(i.x-i.prevX)*n,a=i.prevZ+(i.z-i.prevZ)*n;if(!xf(t,a,e))continue;if(r>=lf)break;let o=vf(i.humans,this.heatReferencePopulation),s=14+Math.sqrt(i.humans)*2.2;this.crowdMatrix.makeScale(s,s,s),this.crowdMatrix.setPosition(t,Y+.36,a),this.crowds.setMatrixAt(r,this.crowdMatrix),this.crowdHeat.setX(r,o),r++}this.crowds.count=r,this.crowds.instanceMatrix.needsUpdate=!0,this.crowdHeat.needsUpdate=!0}syncBuildingContinuousSources(e){this.buildingContinuousSources.length=0;for(let t of this.city.buildings){let n=this.population[t.id]??0;if(t.state===`rubble`||n<=0||!xf(t.x,t.z,e))continue;let r=bf(t.width,t.depth);this.buildingContinuousSources.push(new je(t.x,t.z,r,_f(n,this.heatReferencePopulation)*pf))}}syncContinuousGround(e,t){let n=this.continuousSourceScratch;n.length=0,n.push(...this.buildingContinuousSources);for(let r of e){let e=r.prevX+(r.x-r.prevX)*t,i=r.prevZ+(r.z-r.prevZ)*t;r.humans<=0||!this.isWithinActiveScan(e,i)||n.push(new je(e,i,18+Math.sqrt(r.humans)*1.7,_f(r.humans,this.heatReferencePopulation)*mf))}n.sort((e,t)=>t.w-e.w),this.continuousSourceCount.value=Math.min(n.length,uf);for(let e=0;e<uf;e++)this.continuousSources[e].copy(n[e]??Df)}isWithinActiveScan(e,t){return this.continuousScans.some(n=>n.w>0&&(n.x-e)**2+(n.y-t)**2<=n.z**2)}},Df=new je(0,0,0,0),Of=15e3,kf=5e3,Af=`#63c174`,jf=`#e3ae4e`,Mf=`#df5b55`,Nf=class{root;labels=new Map;visibleIds=new Set;point=new q;stateDirty=!0;lastRetireCheckMs=-1/0;constructor(e){If(),this.root=document.createElement(`div`),this.root.className=`unit-health-labels`,e.append(this.root)}sync({army:e,camera:t,nowMs:n,cameraDirty:r,stateDirty:i,selectionDirty:a,selectedIds:o,inspectedEnemyId:s}){if(this.stateDirty||=i,!a&&!r&&!this.stateDirty&&this.visibleIds.size===0)return;this.stateDirty=!1;let c=new Set(o);t.updateMatrixWorld();let l=new Set;for(let r of e.units){let i=e.typeOf(r);if(!(r.health<i.health||c.has(r.id)||r.id===s||r.attackCooldown>0)||(this.point.set(r.x,yc(r.typeId).maxY+3,r.z).project(t),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04)))continue;let a=this.labels.get(r.id)??this.createLabel(r.id),o=`${(this.point.x*.5+.5)*100}%`,u=`${(-this.point.y*.5+.5)*100}%`,d=Math.max(0,Math.min(1,r.health/Math.max(1,i.health))),f=`${d*100}%`,p=Pf(d);a.left!==o&&(a.label.style.left=o,a.left=o),a.top!==u&&(a.label.style.top=u,a.top=u),a.width!==f&&(a.fill.style.width=f,a.width=f),a.colour!==p&&(a.fill.style.backgroundColor=p,a.colour=p),a.label.hidden&&(a.label.hidden=!1),a.lastRelevantMs=n,l.add(r.id)}this.hideNoLongerVisible(l),this.visibleIds.clear();for(let e of l)this.visibleIds.add(e);this.retireIrrelevant(n)}createLabel(e){let t=document.createElement(`span`);t.className=`unit-health-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`unit-health-label-bar`;let r=document.createElement(`span`);r.className=`unit-health-label-bar-fill`,n.append(r),t.append(n),this.root.append(t);let i={label:t,fill:r,left:null,top:null,width:null,colour:null,lastRelevantMs:-1/0};return this.labels.set(e,i),i}hideNoLongerVisible(e){for(let t of this.visibleIds){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<kf)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleIds.has(t)||e-n.lastRelevantMs<Of||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleIds.clear()}};function Pf(e){return e<.3?Mf:e<.6?jf:Af}var Ff=!1;function If(){if(Ff)return;Ff=!0;let e=document.createElement(`style`);e.textContent=`
.unit-health-labels { position: fixed; inset: 0; pointer-events: none; z-index: 9; }
.unit-health-label { position: absolute; transform: translate(-50%, -100%); width: 31px; }
.unit-health-label-bar { display: block; height: 3px; overflow: hidden; background: rgba(255, 255, 255, .2); }
.unit-health-label-bar-fill { display: block; height: 100%; background: ${Af}; transition: width .1s linear, background-color .1s linear; }
`,document.head.append(e)}var Lf=.6,Rf=1.8,zf=2696995,Bf=Y+Rf/2;function Vf(){return new R(Lf,Rf,Lf)}function Hf(){return new Ae({color:zf,flatShading:!0})}var Uf=8,Wf=96;function Gf(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Kf=class{city;army;population;group=new h;civilians;matrix=new Be;highlightGeometry=new Map;selectedGeometry;constructor(e,t,n){this.city=e,this.army=t,this.population=n,this.civilians=new M(Vf(),Hf(),Wf),this.civilians.instanceMatrix.setUsage(P),this.civilians.count=0,this.civilians.frustumCulled=!1,this.group.add(this.civilians)}sync(e,t,n){let r=0,i=!1;for(let t of this.army.units){let n=t.harvestingBuildingId,a=n===null?void 0:this.city.get(n);if(!bn(a,this.population)||yn(t.x,t.z,a)>37**2||!Ut(this.army.typeOf(t).faction,t.cargo))continue;let o=t.x-a.x,s=t.z-a.z,c=Math.max(Math.hypot(o,s),1),l=Lt({x:o/c,z:s/c},-(a.rotation??0)),u=Math.min(Math.abs(l.x)>.001?a.width/2/Math.abs(l.x):1/0,Math.abs(l.z)>.001?a.depth/2/Math.abs(l.z):1/0),d=a.x+o/c*u,f=a.z+s/c*u;for(let n=0;n<Uf&&r<Wf;n++){let a=(e+n*5+t.id*11)%30/30,l=(n%3-1)*1.7,u=d+(t.x-d)*a-s/c*l,p=f+(t.z-f)*a+o/c*l;this.matrix.makeTranslation(u,Bf,p),i=Gf(this.civilians,r++,this.matrix)||i}}this.civilians.count=r,i&&(this.civilians.instanceMatrix.needsUpdate=!0);let a=n===void 0?void 0:this.city.get(n),o=bn(a,this.population)?a:void 0;this.selectedGeometry=t&&o?this.geometryFor(o):void 0}selectionSource(){return this.selectedGeometry?{geometry:this.selectedGeometry,colour:16719904}:void 0}dispose(){for(let e of this.highlightGeometry.values())e.dispose();this.civilians.geometry.dispose(),this.civilians.material.dispose()}geometryFor(e){let t=`${e.id}:${e.state}`,n=this.highlightGeometry.get(t);if(n)return n;let r=Math.max(Oo(e),2.2),i=qf(e.clip??this.rectangleFootprint(e),Y+.15,Y+r);return this.highlightGeometry.set(t,i),i}rectangleFootprint(e){let t=e.width/2,n=e.depth/2;return[{x:-t,z:-n},{x:t,z:-n},{x:t,z:n},{x:-t,z:n}].map(t=>{let n=Lt(t,e.rotation??0);return{x:e.x+n.x,z:e.z+n.z}})}};function qf(e,t,n){let r=[],i=e.map(e=>new K(e.x,e.z));for(let e of ye.triangulateShape(i,[])){let a=i[e[0]??-1],o=i[e[1]??-1],s=i[e[2]??-1];!a||!o||!s||(r.push(a.x,n,a.y,o.x,n,o.y,s.x,n,s.y),r.push(s.x,t,s.y,o.x,t,o.y,a.x,t,a.y))}for(let e=0;e<i.length;e++){let a=i[e],o=i[(e+1)%i.length];a&&o&&r.push(a.x,t,a.y,a.x,n,a.y,o.x,t,o.y,o.x,t,o.y,a.x,n,a.y,o.x,n,o.y)}let a=new J;return a.setAttribute(`position`,new W(new Float32Array(r),3)),a.computeVertexNormals(),a}var Jf=2,Yf=32,Xf=640,Zf=5,Qf=1.6,$f=8;function ep(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var tp=class{shardCutOffsets;group=new h;figures;matrix=new Be;constructor(){this.figures=new M(Vf(),Hf(),Xf),this.figures.instanceMatrix.setUsage(P),this.figures.count=0,this.figures.frustumCulled=!1,this.group.add(this.figures)}setShardCutOffsets(e){this.shardCutOffsets=e}sync(e,t,n,r){let i=0,a=!1,o=new Map;for(let e of r.units){if(e.harvestingCrowdId===null)continue;let t=o.get(e.harvestingCrowdId);t?t.push(e):o.set(e.harvestingCrowdId,[e])}for(let s of e){let e=this.shardCutOffsets?.(s.x,s.z),c=s.prevX+(s.x-s.prevX)*t+(e?.x??0),l=s.prevZ+(s.z-s.prevZ)*t+(e?.z??0),u=s.trailDirX,d=s.trailDirZ,f=Math.min(Math.max(1,Math.ceil(s.humans/Jf)),Yf),p=2.4+Math.sqrt(f)*1.5,m=(o.get(s.id)??[]).filter(e=>Zt(e.x,e.z,s.x,s.z)<=37**2&&Ut(r.typeOf(e).faction,e.cargo)),h=Math.min(f,m.length*$f);for(let e=0;e<f&&!(i>=Xf);e++){let r=(np(s.id*31+e*7+1)*2-1)*p,o=(np(s.id*17+e*13+2)*2-1)*p,f=e%Zf*Qf*s.trailStrength,g=c+r-u*f,_=l+o-d*f;if(e<h){let r=m[e%m.length],i=r.prevX+(r.x-r.prevX)*t,a=r.prevZ+(r.z-r.prevZ)*t,o=(n+e*5+r.id*11)%30/30;this.matrix.makeTranslation(g+(i-g)*o,Bf,_+(a-_)*o)}else this.matrix.makeTranslation(g,Bf,_);a=ep(this.figures,i++,this.matrix)||a}if(i>=Xf)break}this.figures.count=i,a&&(this.figures.instanceMatrix.needsUpdate=!0)}dispose(){this.figures.geometry.dispose(),this.figures.material.dispose()}};function np(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}var rp=48,ip=class{modelTemplate;shardCutOffsets;group=new h;preview=new h;previewTypeId=null;previewUsesFallback=!1;previewDispose=()=>{};sites=new Map;constructor(e){this.modelTemplate=e,this.group.add(this.preview)}setShardCutOffsets(e){this.shardCutOffsets=e}sync(e,t,n,r){if(!e)this.preview.visible=!1,this.previewTypeId!==null&&this.clearPreview();else{let n=this.modelTemplate?.(e.typeId);(this.previewTypeId!==e.typeId||this.previewUsesFallback!==!n)&&this.replacePreview(e.typeId,n),this.preview.visible=!0,this.preview.position.set(e.x,Y,e.z),this.tint(this.preview,t?7729818:15749714,t?.72:.38)}let i=new Set(n.map(e=>e.builderId));for(let[e,t]of this.sites)i.has(e)||(this.group.remove(t.group),t.dispose(),this.sites.delete(e));for(let e of n){let t=this.sites.get(e.builderId);t||(t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group)),t.usesFallback!==!this.modelTemplate?.(e.structureTypeId)&&(this.group.remove(t.group),t.dispose(),t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group));let n=this.shardCutOffsets?.(e.x,e.z);t.group.position.set(e.x+(n?.x??0),Y+.12,e.z+(n?.z??0));let i=$t(e.structureTypeId),a=dp(e.summoning?1-e.remainingSteps/Math.max(i.constructionSteps??i.buildSteps,1):0,0,1);this.animateSite(t,a,r)}}dispose(){this.clearPreview();for(let e of this.sites.values())e.dispose();this.sites.clear(),this.group.clear()}replacePreview(e,t){this.clearPreview();let n=op(e),r=sp(e,t,lp);r.group.rotation.y=_c(e)?.bounds.yawOffset??0,n.group.position.y=.04,n.group.name=`summon-allocation`,r.group.name=`summon-preview-ghost`,this.preview.add(n.group,r.group),this.previewTypeId=e,this.previewUsesFallback=r.usesFallback,this.previewDispose=()=>{n.dispose(),r.dispose()}}clearPreview(){this.previewDispose(),this.previewDispose=()=>{},this.preview.clear(),this.previewTypeId=null,this.previewUsesFallback=!1}siteGroup(e){let t=new h,n=ap(cp(e.structureTypeId)),r=sp(e.structureTypeId,this.modelTemplate?.(e.structureTypeId)),i=yc(e.structureTypeId);return r.group.rotation.y=_c(e.structureTypeId)?.bounds.yawOffset??0,n.group.position.y=.04,t.add(n.group,r.group),{group:t,circle:n.group,circleMaterials:n.materials,progressGeometry:n.progressGeometry,progressMaterial:n.progressMaterial,ghostMaterials:r.materials,ghost:r.group,emergenceHeight:i.maxY,usesFallback:r.usesFallback,dispose:()=>{fp(n.group),r.dispose()}}}animateSite(e,t,n){let r=Math.floor(t*100)/100;e.ghost.position.y=-e.emergenceHeight*(1-r);let i=n*.0024+e.group.id*.73,a=.16+t*.68,o=Math.sin(i)*(.13-t*.05);for(let t of e.ghostMaterials)t.opacity=dp(a+o,.06,.92);let s=.27+t*.22+Math.sin(i*1.4)*.08;for(let t of e.circleMaterials)t.opacity=dp(s,.12,.62);e.progressMaterial.opacity=dp(s+.2,.3,.82),e.progressGeometry.setDrawRange(0,Math.round(t*rp)*6);let c=1+Math.sin(i*1.4)*.035;e.circle.scale.setScalar(c),e.circle.rotation.y=i*.15}tint(e,t,n){e.traverse(e=>{!(e instanceof B)&&!(e instanceof rt)||!(e.material instanceof Ae)&&!(e.material instanceof L)&&!(e.material instanceof at)||(e.material.color.setHex(t),e.material.opacity=n)})}};function ap(e){let t=new h,n=[],r=e=>{let t=new Ae({color:15786104,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,depthTest:!1,side:2});return t.userData.outlineParameters={visible:!1},n.push(t),t},i=(e,t,n)=>{let i=new B(new p(e,t,48),r(n));return i.rotation.x=-Math.PI/2,i.renderOrder=16,i};t.add(i(e-.62,e,.48),i(e*.56,e*.68,.38));let a=new p(e*.3,e*.42,rp);a.setDrawRange(0,0);let o=new Ae({color:15786104,flatShading:!0,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,side:2});o.userData.outlineParameters={visible:!1};let s=new B(a,o);s.rotation.x=-Math.PI/2,s.renderOrder=18,t.add(s);for(let n=0;n<8;n++){let i=n/8*Math.PI*2,a=new B(new R(.36,.08,e*.18),r(.42));a.position.set(Math.sin(i)*e*.79,.03,Math.cos(i)*e*.79),a.rotation.y=i,a.renderOrder=17,t.add(a)}return{group:t,materials:n,progressGeometry:a,progressMaterial:o}}function op(e){let t=$t(e);if(!t.anchoredFootprint){let t=ap(cp(e));return t.group.name=`summon-allocation-circle`,t.group.userData.allocatedRadius=cp(e),{group:t.group,dispose:()=>fp(t.group)}}let n=new h,r=t.anchoredFootprint.width+12,i=t.anchoredFootprint.depth+12,a=new ae(r,i),o=new We(a);a.dispose();let s=new at({color:7729818,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1});s.userData.outlineParameters={visible:!1};let c=new rt(o,s);return c.rotation.x=-Math.PI/2,c.renderOrder=18,c.name=`summon-allocation-rectangle`,c.userData.allocatedWidth=r,c.userData.allocatedDepth=i,n.add(c),n.name=`summon-allocation-rectangle`,{group:n,dispose:()=>{o.dispose(),s.dispose(),n.clear()}}}function sp(e,t,n=up){if(t){let e=t.clone(!0),r=[];return e.traverse(e=>{if(!(e instanceof B))return;let t=n();e.material=t,e.castShadow=e.receiveShadow=!1,r.push(t)}),{group:e,materials:r,usesFallback:!1,dispose:()=>{r.forEach(e=>e.dispose()),e.clear()}}}let r=yc(e),i=new h,a=n(),o=new R(r.size.x,r.size.y,r.size.z);return o.translate(r.centre.x,r.centre.y,r.centre.z),i.add(new B(o,a)),{group:i,materials:[a],usesFallback:!0,dispose:()=>fp(i)}}function cp(e){let t=$t(e),n=t.anchoredFootprint;return n?Math.hypot(n.width/2+6,n.depth/2+6):gn(t)+6}function lp(){let e=new Ae({color:14263807,flatShading:!0,transparent:!0,opacity:.48,depthWrite:!1});return e.userData.outlineParameters={visible:!1},e}function up(){return new L({color:14263807,transparent:!0,opacity:.48,depthWrite:!1})}function dp(e,t,n){return Math.max(t,Math.min(n,e))}function fp(e){e.traverse(e=>{e instanceof B&&(e.geometry.dispose(),(e.material instanceof Ae||e.material instanceof L||e.material instanceof at)&&e.material.dispose())})}var pp=class{city;separation=1;constructor(e){this.city=e}update(e,t){if(e.stepsLeft<=0||e.totalSteps<=0){this.separation=1;return}let n=e.totalSteps-e.stepsLeft+t;this.separation=It(n/e.totalSteps)}get progress(){return this.separation}get active(){return this.separation<1&&this.city.shardCut!==void 0}offsetFor=(e,t)=>{if(!this.active)return;let n=this.city.shardCut?.pieces[this.city.shardPieceAt(e,t)];if(!n)return;let r=1-this.separation;return{x:-n.offset.x*r,z:-n.offset.z*r}}},mp=12,hp=16,gp=8844229,_p=12124128;function vp(e,t,n){return Math.max(t,Math.min(n,e))}function yp(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var bp=class{modelTemplate;group=new h;cubes;matrix=new Be;printed=new Map;completedPrints=new Map;constructing=new Map;constructor(e){this.modelTemplate=e;let t=new Ae({color:gp,flatShading:!0,transparent:!0,opacity:.92,depthWrite:!1});t.userData.outlineParameters={visible:!1},this.cubes=new M(new R(1,1,1),t,192),this.cubes.instanceMatrix.setUsage(P),this.cubes.count=0,this.cubes.frustumCulled=!1,this.cubes.renderOrder=16,this.group.add(this.cubes)}sync(e,t){let n=this.activeJobs(e);this.syncCubes(n,t),this.syncConstructionOutlines(n,t);let r=new Map;for(let n of e.units){let i=n.fabricationPad;if(!i||i.occupantId===null)continue;let a=e.get(i.occupantId);if(!a||(r.set(a.id,n.id),this.completedPrints.get(a.id)===n.id))continue;this.completedPrints.delete(a.id);let o=this.printed.get(a.id),s=this.modelTemplate(a.typeId)!==void 0;(!o||o.producerId!==n.id||o.usesFallback===s)&&(o&&this.removePrinted(o),o=this.createPrinted(a,n.id,o?.startedAt??t),this.printed.set(a.id,o),this.group.add(o.group));let c=vp((t-o.startedAt)/520,0,1);this.positionPrinted(o,a),this.setPrintedOpacity(o,c),c>=1&&(this.removePrinted(o),this.completedPrints.set(a.id,n.id))}for(let e of[...this.printed.values()])r.get(e.productId)!==e.producerId&&this.removePrinted(e);for(let[e,t]of this.completedPrints)r.get(e)!==t&&this.completedPrints.delete(e)}printedUnitIds(){return[...this.printed.keys()]}activeJobs(e){let t=[];for(let n of e.units){let r=e.typeOf(n),i=n.fabricationPad,a=n.queue[0];if(!i||i.occupantId!==null||!a||!n.deployed||n.deployTimer>0||!r.fabricationPadOutputTypeId)continue;let o=Math.max($t(a.typeId).buildSteps,1);if(t.push({producer:n,progress:vp(1-a.remainingSteps/o,0,1)}),t.length===hp)break}return t}syncCubes(e,t){let n=0,r=!1;for(let i of e){let e=yc(i.producer.typeId,!0),a=Y+Math.max(3,e.height*.38);for(let e=0;e<mp;e++){let o=((t*.00125+e/mp+i.producer.id*.173)%1+1)%1,s=this.constructionTarget(i,e,t),c=i.producer.x+(s.x-i.producer.x)*o,l=i.producer.z+(s.z-i.producer.z)*o,u=a+(s.y-a)*o+Math.sin(o*Math.PI)*2.2,d=1.8;this.matrix.makeScale(d,d,d),this.matrix.setPosition(c,u,l),r=yp(this.cubes,n++,this.matrix)||r}}this.cubes.count=n,r&&(this.cubes.instanceMatrix.needsUpdate=!0)}constructionTarget(e,t,n){let r=e.producer.fabricationPad,i=e.producer.queue[0].typeId,a=yc(i),o=n*.0011+t*2.399+e.producer.id*.619,s=.14+t*.61803398875%1*.3,c=Math.cos(o)*a.size.x*s,l=Math.sin(o*1.31)*a.size.z*s,u=a.minY+a.size.y*(.16+(Math.sin(o*.73)+1)*.5*.68),d=_c(i)?.bounds.yawOffset??0;return{x:r.x+c*Math.cos(d)+l*Math.sin(d),y:Y+u,z:r.z-c*Math.sin(d)+l*Math.cos(d)}}syncConstructionOutlines(e,t){let n=new Set;for(let r of e){let e=r.producer.queue[0].typeId;n.add(r.producer.id);let i=this.constructing.get(r.producer.id),a=this.modelTemplate(e)!==void 0;(!i||i.typeId!==e||i.usesFallback===a)&&(i&&this.removeConstructionOutline(i),i=this.createConstructionOutline(r.producer.id,e),this.constructing.set(r.producer.id,i),this.group.add(i.group));let o=r.producer.fabricationPad;i.group.position.set(o.x,Y,o.z),i.group.rotation.y=_c(e)?.bounds.yawOffset??0;let s=t*.003+r.producer.id*.71,c=vp(.46+r.progress*.24+Math.sin(s)*.12,.28,.82);for(let e of i.materials)e.opacity=c}for(let e of[...this.constructing.values()])n.has(e.producerId)||this.removeConstructionOutline(e)}createConstructionOutline(e,t){let n=this.modelTemplate(t),r=new h,i=new at({color:_p,transparent:!0,opacity:.55,depthWrite:!1});i.userData.outlineParameters={visible:!1};let a=[i];if(n){let e=n.clone(!0);e.updateMatrixWorld(!0);let t=[];e.traverse(e=>{e instanceof B&&t.push(e)});for(let e of t){let t=new rt(new Qe(e.geometry),i);t.applyMatrix4(e.matrixWorld),t.frustumCulled=!1,t.renderOrder=17,r.add(t)}}else{let e=yc(t),n=new R(e.size.x,e.size.y,e.size.z);n.translate(e.centre.x,e.centre.y,e.centre.z);let a=new rt(new Qe(n),i);n.dispose(),a.renderOrder=17,r.add(a)}return{producerId:e,typeId:t,group:r,materials:a,usesFallback:!n,dispose:()=>{r.traverse(e=>{e instanceof rt&&e.geometry.dispose()}),a.forEach(e=>e.dispose()),r.clear()}}}removeConstructionOutline(e){this.group.remove(e.group),e.dispose(),this.constructing.delete(e.producerId)}createPrinted(e,t,n){let r=this.modelTemplate(e.typeId);if(!r)return this.fallbackPrinted(e,t,n);let i=Et(r),a=new Map,o=[],s=[],c=e=>{let t=a.get(e);if(t)return t;let n=e.clone();return n.transparent=!0,n.opacity=0,n.depthWrite=!1,a.set(e,n),o.push(n),s.push(e.opacity),n};return i.traverse(e=>{e instanceof B&&(e.material=Array.isArray(e.material)?e.material.map(c):c(e.material),e.castShadow=e.receiveShadow=!1,e.frustumCulled=!1)}),{productId:e.id,producerId:t,typeId:e.typeId,group:i,materials:o,baseOpacities:s,usesFallback:!1,startedAt:n,dispose:()=>{o.forEach(e=>e.dispose()),i.clear()}}}fallbackPrinted(e,t,n){let r=yc(e.typeId),i=new R(r.size.x,r.size.y,r.size.z);i.translate(r.centre.x,r.centre.y,r.centre.z);let a=Tt(gp,{transparent:!0,opacity:0,depthWrite:!1}),o=new h;return o.add(new B(i,a)),{productId:e.id,producerId:t,typeId:e.typeId,group:o,materials:[a],baseOpacities:[1],usesFallback:!0,startedAt:n,dispose:()=>{i.dispose(),a.dispose(),o.clear()}}}positionPrinted(e,t){let n=_c(t.typeId);e.group.position.set(t.x,Y,t.z),e.group.rotation.set(0,-t.heading+(n?.bounds.yawOffset??0),0)}setPrintedOpacity(e,t){for(let n=0;n<e.materials.length;n++){let r=e.materials[n];r.opacity=e.baseOpacities[n]*t,r.depthWrite=t>=.88}}removePrinted(e){this.group.remove(e.group),e.dispose(),this.printed.delete(e.productId)}dispose(){for(let e of[...this.printed.values()])this.removePrinted(e);this.completedPrints.clear();for(let e of[...this.constructing.values()])this.removeConstructionOutline(e);this.cubes.geometry.dispose(),this.cubes.material.dispose(),this.group.clear()}},xp=class{group=new h;footprintGeometry=new J;unitRadiusGeometry=new J;anchoredGeometry=new J;constructionGeometry=new J;pathGeometry=new J;footprints=new rt(this.footprintGeometry,new at({color:16762967,transparent:!0,opacity:.82,depthTest:!1}));paths=new rt(this.pathGeometry,new at({vertexColors:!0,transparent:!0,opacity:.9,depthTest:!1}));unitRadii=new rt(this.unitRadiusGeometry,new at({color:5104639,transparent:!0,opacity:.82,depthTest:!1}));anchoredFootprints=new rt(this.anchoredGeometry,new at({color:13987071,transparent:!0,opacity:.9,depthTest:!1}));constructionFootprints=new rt(this.constructionGeometry,new at({color:10906879,transparent:!0,opacity:.92,depthTest:!1}));constructor(){this.group.name=`navigation-debug`,this.footprints.name=`occupied-space-outlines`,this.unitRadii.name=`unit-avoidance-radii`,this.anchoredFootprints.name=`anchored-footprints`,this.constructionFootprints.name=`construction-footprints`,this.paths.name=`unit-paths`,this.footprints.renderOrder=20,this.paths.renderOrder=21,this.footprints.frustumCulled=!1,this.unitRadii.frustumCulled=!1,this.anchoredFootprints.frustumCulled=!1,this.constructionFootprints.frustumCulled=!1,this.paths.frustumCulled=!1,this.group.add(this.footprints,this.unitRadii,this.anchoredFootprints,this.constructionFootprints,this.paths)}sync(e,t,n,r,i){this.footprints.visible=r,this.unitRadii.visible=r,this.anchoredFootprints.visible=r,this.paths.visible=i,r&&this.setFootprints(e,t,n),i&&this.setPaths(t)}dispose(){this.footprintGeometry.dispose(),this.unitRadiusGeometry.dispose(),this.anchoredGeometry.dispose(),this.constructionGeometry.dispose(),this.pathGeometry.dispose(),this.footprints.material.dispose(),this.unitRadii.material.dispose(),this.anchoredFootprints.material.dispose(),this.constructionFootprints.material.dispose(),this.paths.material.dispose()}setFootprints(e,t,n){let r=[],i=[],a=[],o=[];for(let t of e.buildings){let e=t.clip&&t.clip.length>=3?t.clip:Vt(t);this.polygon(r,e,.45)}for(let e of t.units){let n=t.typeOf(e);if(this.circle(i,e.x,e.z,gn(n,e.deployed),.7),n.anchoredFootprint&&(e.deployed||n.stationary)){let{width:t,depth:r}=n.anchoredFootprint;this.polygon(a,[{x:e.x-t/2,z:e.z-r/2},{x:e.x+t/2,z:e.z-r/2},{x:e.x+t/2,z:e.z+r/2},{x:e.x-t/2,z:e.z+r/2}],.75)}}for(let e of n){let t=$t(e.structureTypeId).anchoredFootprint;if(!t)continue;let{width:n,depth:r}=t;this.polygon(o,[{x:e.x-n/2,z:e.z-r/2},{x:e.x+n/2,z:e.z-r/2},{x:e.x+n/2,z:e.z+r/2},{x:e.x-n/2,z:e.z+r/2}],.8)}this.footprintGeometry.setAttribute(`position`,new W(new Float32Array(r),3)),this.unitRadiusGeometry.setAttribute(`position`,new W(new Float32Array(i),3)),this.anchoredGeometry.setAttribute(`position`,new W(new Float32Array(a),3)),this.constructionGeometry.setAttribute(`position`,new W(new Float32Array(o),3))}setPaths(e){let t=[],n=[];for(let r of e.units){if(r.path.length===0)continue;let i=xt(e.typeOf(r).faction),a=(i>>16&255)/255,o=(i>>8&255)/255,s=(i&255)/255,c=r.x,l=r.z;for(let e=0;e<r.path.length;e+=2){let i=r.path[e],u=r.path[e+1];i!==void 0&&u!==void 0&&(t.push(c,.95,l,i,.95,u),n.push(a,o,s,a,o,s),c=i,l=u)}}this.pathGeometry.setAttribute(`position`,new W(new Float32Array(t),3)),this.pathGeometry.setAttribute(`color`,new W(new Float32Array(n),3))}circle(e,t,n,r,i){for(let a=0;a<24;a++){let o=a/24*Math.PI*2,s=(a+1)/24*Math.PI*2;e.push(t+Math.cos(o)*r,i,n+Math.sin(o)*r,t+Math.cos(s)*r,i,n+Math.sin(s)*r)}}polygon(e,t,n){for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];!i||!a||e.push(i.x,n,i.z,a.x,n,a.z)}}},Sp=[1,2,3,4,5,6,7,8,9,0],Cp=class{ids=[];groups=new Map;get size(){return this.ids.length}list(){return this.ids}has(e){return this.ids.includes(e)}primary(){return this.ids[0]}set(e){this.ids=[...new Set(e)].sort((e,t)=>e-t)}add(e){this.set([...this.ids,...e])}toggle(e){this.set(this.has(e)?this.ids.filter(t=>t!==e):[...this.ids,e])}clear(){this.ids=[]}assignGroup(e,t=this.ids){Sp.includes(e)&&this.groups.set(e,[...t])}recallGroup(e){let t=this.groups.get(e);return!t||t.length===0?!1:(this.set(t),!0)}groupSize(e){return this.groups.get(e)?.length??0}occupiedGroups(){return Sp.filter(e=>this.groupSize(e)>0)}prune(e){this.ids=this.ids.filter(e);for(let[t,n]of this.groups){let r=n.filter(e);r.length!==n.length&&(r.length===0?this.groups.delete(t):this.groups.set(t,r))}}},wp={request:e=>requestAnimationFrame(e),cancel:e=>cancelAnimationFrame(e)};function Tp(e){let t=e.scheduler??wp,n=null,r=null,i=!1,a=!1,o=!1,s=c=>{if(a||!i)return;n=null;let l=r===null?1e3/60:c-r,u=Number.isFinite(l)?Math.max(0,l):0;r=c,e.beforeAdvance?.(c,u);let d=Math.max(0,e.speed?.()??1),f=e.loop.advance(e.paused?.()?0:u*d);try{e.render({nowMs:c,deltaMs:u,alpha:f}),o||(o=!0,e.onFirstFrame?.())}catch(t){i=!1,e.onFrameError?.(t);return}!a&&i&&n===null&&(n=t.request(s))};return{start(){a||i||(i=!0,r=null,n=t.request(s))},stop(){i&&(i=!1,n!==null&&t.cancel(n),n=null,r=null)},dispose(){a||(a=!0,this.stop())}}}function Ep(e){if(e.selectedIds.length!==0){if(e.attackTarget)return{kind:`attack`,unitIds:e.selectedIds,targetId:e.attackTarget.id,x:e.attackTarget.x,z:e.attackTarget.z};if(e.harvesterIds.length>0&&e.crowdId!==void 0)return{kind:`harvest`,unitIds:e.harvesterIds,crowdId:e.crowdId};if(e.harvesterIds.length>0&&e.buildingId!==void 0)return{kind:`harvest`,unitIds:e.harvesterIds,buildingId:e.buildingId};if(e.ground)return{kind:`move`,unitIds:e.selectedIds,x:e.ground.x,z:e.ground.z}}}function Dp(e){return e&&{kind:`summon`,builderId:e.builderId,typeId:e.typeId,x:e.x,z:e.z}}function Op(e,t){switch(t.kind){case`replace`:e.set(t.ids);break;case`add`:e.add(t.ids);break;case`toggle`:e.toggle(t.id);break;case`clear`:e.clear()}}var kp=class{dependencies;constructor(e){this.dependencies=e}contextual(e){let t=Ep(e);return t&&this.dependencies.issueCommand(t),t}summon(e){let t=Dp(e);return t&&this.dependencies.issueCommand(t),t}select(e){Op(this.dependencies.selection,e)}issue(e){this.dependencies.issueCommand(e)}},Ap=[1,2,4];function jp(e){let{nowMs:t,deltaMs:n,paused:r,input:i,world:a,selection:o,rig:s,scene:c,renderer:l,boxEl:u,clickPoint:d,diagnosticsEnabled:f,announce:p,issueCommand:m,attackableEnemyAt:h,harvestableBuildingAt:g,onExitRequested:_,onLoadRequested:v,onQuickSave:y,onSeedStepRequested:b,onPlayerFactionCycleRequested:x,onProbeRequested:S,populationLabels:C}=e,{inspectedEnemyId:w,placement:T,attackMoveArmed:E,speedIndex:D,allStatesIndex:O,showOccupiedSpace:k,showUnitPaths:A}=e.state,j=e=>m.issue(e),M=Ap;if(i.sample(),!r){i.touchPanCandidate&&i.resolveTouchPan(fu(s.camera,a.army,i.touchPanCandidate,c.units)===void 0),s.update(i,n/1e3);let e=f(),r=T!==null&&i.orderAt!==void 0;r&&(T=null,p(`SUMMON TARGETING CANCELLED`,t));let l=a.controllers[a.playerFaction]===`human`;l||(o.size>0&&o.clear(),w=null,T=null,E=!1);let u=l?i.selectGesture:void 0;if(E&&i.orderAt!==void 0)E=!1,p(`ATTACK MOVE CANCELLED`,t);else if(E&&u&&!u.isBox){d.set((u.rect.x0+u.rect.x1)/2,(u.rect.y0+u.rect.y1)/2);let e=Tu(s.camera,a.city,d),n=du(s.camera,d);if(e!==void 0&&o.size>0){let n=a.city.get(e);n&&(j({kind:`attack`,unitIds:o.list(),buildingId:n.id,x:n.x,z:n.z}),p(`DEMOLISHING`,t))}else n&&o.size>0&&(j({kind:`attackMove`,unitIds:o.list(),x:n.x,z:n.z}),p(`ATTACK MOVE`,t));E=!1}else if(u&&T){if(!u.isBox){d.set((u.rect.x0+u.rect.x1)/2,(u.rect.y0+u.rect.y1)/2);let e=du(s.camera,d),n=e&&a.constructionPlacement(T.builderId,T.typeId,e.x,e.z);n?(m.summon({builderId:T.builderId,typeId:T.typeId,x:n.x,z:n.z}),T=null):p(`INVALID SUMMON SITE — NEED CLEAR GROUND`,t)}}else if(u)if(u.isBox){let e=Du(s.camera,a.army,u.rect).filter(e=>{let t=a.army.get(e);return t!==void 0&&a.army.typeOf(t).faction===a.playerFaction});m.select({kind:u.additive?`add`:`replace`,ids:e})}else{d.set((u.rect.x0+u.rect.x1)/2,(u.rect.y0+u.rect.y1)/2);let e=fu(s.camera,a.army,d,c.units),n=e===void 0?void 0:a.army.get(e),r=n&&a.army.typeOf(n).faction===a.playerFaction?e:void 0;if(n&&r===void 0)if(u.pointerType===`touch`&&o.size>0){let e=h(d);e!==void 0&&j({kind:`attack`,unitIds:o.list(),targetId:e,x:n.x,z:n.z})}else w=n.id,u.additive||o.clear();else if(r===void 0){u.additive||(w=null);let e=o.list().filter(e=>{let t=a.army.get(e),n=t&&a.army.typeOf(t);return n?.faction===a.playerFaction&&n.role===`harvester`}),n=uu(s.camera,a.crowds.all,d),r=g(d),i=e.some(e=>{let t=a.army.get(e);return t!==void 0&&Ut(a.army.typeOf(t).faction,t.cargo)});if(e.length>0&&n!==void 0)j({kind:`harvest`,unitIds:e,crowdId:n}),i&&p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t);else if(e.length>0&&r!==void 0)j({kind:`harvest`,unitIds:e,buildingId:r}),i&&p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t);else if(u.pointerType===`touch`&&o.size>0){let e=du(s.camera,d);e&&(j({kind:`move`,unitIds:o.list(),x:e.x,z:e.z}),c.moveCommandIndicator.show(e.x,e.z,a.playerFaction,t))}else u.additive||o.clear()}else if(u.doubleClick){let e=n.typeId,t=Ou(s.camera,a.army).filter(t=>{let n=a.army.get(t);return n!==void 0&&a.army.typeOf(n).faction===a.playerFaction&&n.typeId===e});w=null,m.select({kind:u.additive?`add`:`replace`,ids:t})}else u.additive?(w=null,m.select({kind:`toggle`,id:r})):(w=null,m.select({kind:`replace`,ids:[r]}))}for(let e of Sp){let t=l?i.pressModifiers(`Digit${e}`):void 0;t&&(t.shift?o.assignGroup(e):o.recallGroup(e))}if(i.wasPressed(`Escape`)&&(E?(E=!1,p(`ATTACK MOVE CANCELLED`,t)):T?(T=null,p(`SUMMON TARGETING CANCELLED`,t)):o.size>0||w!==null?(o.clear(),w=null):_()),l&&i.wasPressed(`Delete`)&&o.size>0&&j({kind:`destroy`,unitIds:o.list()}),l&&i.wasPressed(`KeyF`)){let e=a.army.units.filter(e=>{let t=a.army.typeOf(e);return t.faction===a.playerFaction&&t.role===`harvester`&&!e.hasGoal&&!e.attackMove&&e.targetId===null&&e.targetBuildingId===null&&e.harvestingBuildingId===null&&e.harvestingCrowdId===null&&!e.harvestOrdered&&e.deployTimer===0}).map(e=>e.id);o.set(e),w=null}if(l&&i.wasPressed(`KeyC`)){let e=a.army.units.find(e=>{let t=a.army.typeOf(e);return t.faction===a.playerFaction&&t.role===`harbinger`});e&&s.focusOn(e)}if(e&&i.wasPressed(`KeyP`)&&S(),e&&i.wasPressed(`KeyI`)&&C.toggle(),e&&i.wasPressed(`KeyU`)&&(k=!k,p(`OCCUPIED SPACE ${k?`ON`:`OFF`}`,t)),e&&i.wasPressed(`KeyM`)&&(A=!A,p(`UNIT PATHS ${A?`ON`:`OFF`}`,t)),e&&i.wasPressed(`KeyY`)&&x(),e&&i.wasPressed(`BracketLeft`)&&b(-1),e&&i.wasPressed(`BracketRight`)&&b(1),i.orderAt&&!r&&o.size>0){let e=o.list(),n=h(i.orderAt),r=e.filter(e=>{let t=a.army.get(e),n=t&&a.army.typeOf(t);return n?.faction===a.playerFaction&&n.role===`harvester`}),l=uu(s.camera,a.crowds.all,i.orderAt),u=g(i.orderAt),d=r.some(e=>{let t=a.army.get(e);return t!==void 0&&Ut(a.army.typeOf(t).faction,t.cargo)}),f=n===void 0?void 0:a.army.get(n),_=f||r.length>0&&(l!==void 0||u!==void 0)?void 0:du(s.camera,i.orderAt),v=m.contextual({selectedIds:e,harvesterIds:r,attackTarget:f&&{id:f.id,x:f.x,z:f.z},crowdId:l,buildingId:u,ground:_});v?.kind===`harvest`&&d?p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t):v?.kind===`move`&&c.moveCommandIndicator.show(v.x,v.z,a.playerFaction,t)}if(e&&i.wasPressed(`KeyO`)){let e=i.pressModifiers(`KeyO`)?.shift?a.playerFaction===`machines`?`ancients`:`machines`:a.playerFaction,t=a.controllers[e]===`ai`?`human`:`ai`;a.enqueue(`debug`,{kind:`setController`,faction:e,controller:t}),t===`ai`&&e===a.playerFaction&&o.clear()}if(e&&i.wasPressed(`KeyK`)&&(D=(D+1)%M.length,p(`${M[D]??1}× SPEED`,t)),i.wasPressed(`KeyA`)&&o.size>0&&(E=!0,T=null,p(`ATTACK MOVE · PICK A POINT`,t)),i.wasPressed(`KeyQ`)&&o.size>0&&j({kind:`stop`,unitIds:o.list()}),e&&i.wasPressed(`KeyX`)){let e=Nu(a.city,s.focus.x,s.focus.z);e!==void 0&&a.enqueue(`debug`,{kind:`damage`,buildingId:e})}if(e&&i.wasPressed(`KeyZ`)&&a.enqueue(`debug`,{kind:`raze`,x:s.focus.x,z:s.focus.z,radius:85}),e&&i.wasPressed(`KeyB`)){O=(O+1)%Dt.length;let e=Dt[O];a.enqueue(`debug`,{kind:`setAllStates`,state:e})}if(e&&i.wasPressed(`KeyH`)&&a.enqueue(`debug`,{kind:`debugResources`,humans:80,charge:0}),e&&i.wasPressed(`KeyJ`)&&a.enqueue(`debug`,{kind:`debugResources`,humans:0,charge:3}),e&&i.wasPressed(`KeyE`)&&o.size>0){let e=Nu(a.city,s.focus.x,s.focus.z);e!==void 0&&bn(a.city.get(e),a.population)&&(j({kind:`harvest`,unitIds:o.list(),buildingId:e}),p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t))}if(e&&i.wasPressed(`KeyR`)&&o.size>0&&j({kind:`deploy`,unitIds:o.list()}),e&&i.wasPressed(`KeyT`)&&j({kind:`unlockTier2`}),e&&(i.wasPressed(`KeyL`)||i.wasPressed(`KeyG`))){let e=a.army.units.find(e=>a.army.typeOf(e).faction===a.playerFaction&&a.army.typeOf(e).producesUnits&&e.deployed&&e.deployTimer===0),n=a.playerFaction===`machines`?`machine-infantry`:`ancient-infantry`,r=a.playerFaction===`machines`?`machine-construct`:`ancient-support`;e?j({kind:`produce`,producer:{kind:`unit`,id:e.id},typeId:i.wasPressed(`KeyG`)?r:n}):p(`NO DEPLOYED FACTORY`,t)}if(e&&i.wasPressed(`KeyV`)){let e=o.primary()===void 0?void 0:a.army.get(o.primary());e&&a.army.typeOf(e).canDeploy&&j({kind:`deploy`,unitIds:[e.id]})}i.wasPressed(`F5`)&&y(t),i.wasPressed(`F9`)&&v()}if(l.domElement.style.cursor=E?`crosshair`:``,i.dragRect&&!r){let e=i.dragRect;u.style.display=`block`,u.style.left=`${(e.x0+1)/2*100}%`,u.style.top=`${(1-e.y1)/2*100}%`,u.style.width=`${(e.x1-e.x0)/2*100}%`,u.style.height=`${(e.y1-e.y0)/2*100}%`}else u.style.display=`none`;return i.consume(),{inspectedEnemyId:w,placement:T,attackMoveArmed:E,speedIndex:D,allStatesIndex:O,showOccupiedSpace:k,showUnitPaths:A}}var Mp=class{options;now;codec;constructor(e){this.options=e,this.now=e.now??(()=>Date.now()),this.codec=e.codec??{pack:hn,unpack:ln}}get available(){return this.options.store!==null}async save(e,t){let n=this.options.store;if(n)try{let r=this.codec.pack(e);return await n.put(r,this.now(),t),r}catch(e){this.options.reportError?.(`save`,e);return}}async load(e){let t=this.options.store;if(t)try{let n=await t.get(e);if(!n){this.options.reportError?.(`load`,Error(t.lastRejection??`no save to load`));return}return{world:this.codec.unpack(n.envelope),envelope:n.envelope}}catch(e){this.options.reportError?.(`load`,e);return}}async latest(){let e=this.options.store;if(e)try{return await e.get()}catch(e){this.options.reportError?.(`load`,e);return}}async list(){let e=this.options.store;if(!e)return[];try{return await e.list()}catch(e){return this.options.reportError?.(`list`,e),[]}}async delete(e){let t=this.options.store;if(!t)return!1;try{return await t.delete(e),!0}catch(e){return this.options.reportError?.(`delete`,e),!1}}},Np=`
.control-notice,
.speed-notice {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  padding: 5px 14px;
  pointer-events: none;
  user-select: none;
  font: 600 12px/1.4 ui-monospace, "Cascadia Mono", Consolas, monospace;
  letter-spacing: 0.14em;
  color: #ffe2ad;
  background: rgba(12, 8, 4, 0.78);
  border: 1px solid rgba(255, 189, 82, 0.55);
}
.control-notice {
  bottom: 52px;
}
.speed-notice {
  bottom: 24px;
}
`;function Pp(){if(document.getElementById(`game-session-control-notice-style`))return;let e=document.createElement(`style`);e.id=`game-session-control-notice-style`,e.textContent=Np,document.head.append(e)}var Fp=250,Ip=100,Lp=1800;function Rp(e){switch(e){case`outputUnavailable`:return`OUTPUT UNAVAILABLE`;case`requiresTier2`:return`REQUIRES TIER 2`;case`insufficientHumans`:return`INSUFFICIENT HUMANS`;case`producerMobile`:return`DEPLOY TO FABRICATE`;case`producerTransitioning`:return`PRODUCER TRANSITIONING`;case`queueFull`:return`QUEUE FULL (5)`;case`invalidFabricationSpace`:return`DEPLOYMENT REFUSED — NO FABRICATION SPACE`;case`summonAlreadyActive`:return`SUMMON ALREADY ACTIVE`;case`invalidSummonSite`:return`INVALID SUMMON SITE`}}function zp(e){switch(e.kind){case`produced`:return null;case`constructionComplete`:return`SUMMON COMPLETE — ${(e.subject??`OUTPUT`).toUpperCase()}`;case`productionQueued`:return null;case`unitCreationRefused`:return Rp(e.reason);case`productionBlocked`:return`NO ROOM TO DEPLOY`;case`productionWaitingForClearance`:return`WAITING FOR PAD CLEARANCE`;case`buildRefused`:return`CANNOT BUILD HERE`;case`constructionStarted`:return null;case`constructionCancelled`:return e.refund&&e.refund>0?`SUMMON CANCELLED — ${(e.subject??`OUTPUT`).toUpperCase()} · ${e.refund} HUMANS REFUNDED`:`SUMMON CANCELLED`;case`underAttack`:return`UNIT UNDER ATTACK`;case`combatHit`:return null;case`unitDown`:return`UNIT DESTROYED`;case`harbingerDown`:return`HARBINGER DESTROYED`;case`matchResolved`:return null;case`shardCut`:return`EARTHSHARD SPLIT`;case`shardCutFailed`:return`EARTHSHARD HELD — CUT LINE TOO NEAR THE RIM`;case`tier2`:return`TIER 2 UNLOCKED`;case`tier2Refused`:return`TIER 2 UNAVAILABLE`;case`deposited`:return null;case`playerFactionChanged`:return null;case`ritualBegun`:return`DEITY RITUAL BEGUN — DEFEND THE STRUCTURE`;case`ritualCancelled`:return`DEITY RITUAL ABANDONED — NO REFUND`;case`ritualComplete`:return`THE DEITY DESCENDS — ${(e.subject??``).toUpperCase()}`;case`ritualRefused`:return Bp(e.reason)}}function Bp(e){switch(e){case`noRitualSite`:return`NO DEITY STRUCTURE`;case`ritualAlreadyActive`:return`RITUAL ALREADY CHANNELLING`;case`requiresTier2`:return`REQUIRES TIER 2`;case`insufficientHumans`:return`RITUAL NEEDS 350 HUMANS`;case`insufficientCharge`:return`RITUAL NEEDS 8 INSANITY`}}var Vp=new Set([`unitCreationRefused`,`ritualRefused`,`ritualBegun`,`ritualCancelled`,`productionBlocked`,`productionWaitingForClearance`,`constructionCancelled`]);function Hp(e){return e.kind!==`combatHit`||e.weaponId!==cn.id}function Up(e,t){let n=!1;return{world:e,dispose(){n||(n=!0,t())}}}function Wp({world:t,renderer:r,toonEffect:i,renderSettings:a,overlayEl:o,boxEl:s,store:c,onLoadRequested:u,onSeedStepRequested:d,onExitToTitle:f,onPlayAgainRequested:p,onMatchEnded:m,onPlayerFactionCycleRequested:h,diagnosticsEnabled:g,detailedPerformance:_,modelCache:v,preparedScene:y,onFirstFrame:b,onRenderFailure:x}){let S=!0,C=new n(t),w=new Mp({store:c,reportError:(e,t)=>console.error(`${e} failed`,t)}),T=y??new cu(t.city,t.army,a,v),E=t.army.units.filter(e=>t.army.typeOf(e).faction===t.playerFaction),D=t.city.startAnchors[t.playerFaction===`machines`?0:1]??{x:0,z:0},O=E.length>0?{x:E.reduce((e,t)=>e+t.x,0)/E.length,z:E.reduce((e,t)=>e+t.z,0)/E.length}:D,k=new ju(window.innerWidth/window.innerHeight,O),A=new Vu(r.domElement),j=new Cp,M=new kp({selection:j,issueCommand:e=>{t.controllers[t.playerFaction]!==`ai`&&t.enqueue(t.playerFaction,e)}}),ee=new Zd(o),te=new Jd,ne=_;ne&&(r.info.autoReset=!1);let re=new Fu,ie=new Fu,N=new af(document.body,t.city,t.population,t.populationCapacity,t.playerFaction),ae=new Ef(t.city,T.city,t.population,t.populationCapacity);T.scene.add(ae.group);let P=new pp(t.city),oe=t.city.shardCut!==void 0,se=!1,ce=new Nf(document.body),le=new Kf(t.city,t.army,t.population);T.scene.add(le.group);let F=new tp;T.scene.add(F.group);let ue=new ip(e=>T.units.modelTemplate(e));T.scene.add(ue.group);let de=new bp(e=>T.units.modelTemplate(e));T.scene.add(de.group);let fe=new xp;T.scene.add(fe.group);let pe=null,me=0,he=!1,ge=!1,_e=(e,t)=>{pe=e,me=t+Lp},ve=e=>{e===`cancel`&&j.size>0?M.issue({kind:`stop`,unitIds:j.list()}):e===`primary`&&j.size>0&&t.playerFaction===`machines`&&M.issue({kind:`deploy`,unitIds:j.list()})},ye=new yd(document.body,l({world:t,selected:0,banner:null}),ve),be=Ip,xe=null,Se=null,Ce=!1,we=0,I={onDeploy:()=>M.issue({kind:`deploy`,unitIds:j.list()}),onCutterSweep:()=>M.issue({kind:`cutterSweep`,unitIds:j.list()}),onRitual:(e,t)=>M.issue(t?{kind:`beginRitual`,structureId:e}:{kind:`cancelRitual`,structureId:e}),onIsolateType:e=>{j.set(j.list().filter(n=>t.army.get(n)?.typeId===e))}},L=new Ju(document.body,t.playerFaction,I),Te={onProduce:(e,t)=>M.issue({kind:`produce`,producer:e,typeId:t}),onSummon:(e,t)=>{Se={builderId:e.id,typeId:t},_e(`CHOOSE SUMMONING SITE`,performance.now())},onCancelSummon:e=>M.issue({kind:`cancelSummon`,builderId:e.id}),onUnlockTier2:()=>M.issue({kind:`unlockTier2`})},Ee=new cd(document.body,t.playerFaction,Te),De=null,Oe=0,ke=null,Ae=e=>{if(w.available){if(t.outcome){_e(`MATCH OVER · NOT SAVED`,e);return}_e(`SAVING`,e),w.save(t).then(e=>{S&&(e?(_e(`SAVED · STEP ${e.tick}`,performance.now()),ke=`step ${e.tick}`):_e(`SAVE FAILED`,performance.now()))})}},R=!0,je=null,Me=!1,Ne=()=>{je?.dispose(),je=null,Me=!1,A.consume()},z=()=>{je||=(Me=!0,new Ja(document.body,ke,{onSaveAndExit:()=>{if(!w.available){Ne(),f();return}w.save(t).finally(()=>{S&&(Ne(),f())})},onExitAnyway:()=>{Ne(),f()},onCancel:()=>Ne()}))},Pe=null,Fe=e=>{Pe||=(je&&Ne(),Me=!0,j.clear(),m?.(e),new Ya(document.body,{winner:e.winner??void 0,playerFaction:t.playerFaction},{onPlayAgain:()=>p(),onBackToMenu:()=>f()}))};Pp();let Ie=document.createElement(`div`);Ie.className=`control-notice`,Ie.style.display=`none`;let Le=document.createElement(`div`);Le.className=`speed-notice`,Le.style.display=`none`,document.body.append(Ie,Le);let Re=``,B=``,V=()=>{let e=t.controllers[t.playerFaction]===`ai`?`AI CONTROLLED`:``;e!==Re&&(Re=e,Ie.textContent=e,Ie.style.display=e.length>0?`block`:`none`);let n=Ap[we]??1,r=n===1?``:`${n}× SPEED`;r!==B&&(B=r,Le.textContent=r,Le.style.display=r.length>0?`block`:`none`)};V();let ze=()=>{j.clear(),xe=null,Se=null,Ce=!1,pe=null,De=null,re=new Fu,ie=new Fu,N.setFaction(t.playerFaction),ye.dispose(),L.dispose(),Ee.dispose(),ye=new yd(document.body,l({world:t,selected:0,banner:null}),ve),L=new Ju(document.body,t.playerFaction,I),Ee=new cd(document.body,t.playerFaction,Te),be=Ip,R=!0,V()},Be=()=>{r.setSize(window.innerWidth,window.innerHeight),k.setAspect(window.innerWidth/window.innerHeight),R=!0};window.addEventListener(`resize`,Be);let Ve=e=>{e.preventDefault(),ot?.stop(),x?.(Error(`WebGL context was lost while starting the match`))};r.domElement.addEventListener(`webglcontextlost`,Ve);let He=new K,H=e=>{let n=Tu(k.camera,t.city,e);return bn(n===void 0?void 0:t.city.get(n),t.population)?n:void 0},U=e=>{if(j.size===0)return;let n=fu(k.camera,t.army,e,T.units),r=n===void 0?void 0:t.army.get(n);if(!(!r||t.army.typeOf(r).faction===t.playerFaction))return j.list().some(e=>{let n=t.army.get(e);if(!n||n.deployTimer>0)return!1;let r=t.army.typeOf(n);return r.faction===t.playerFaction&&(r.weaponIds??[]).some(e=>kt(e).targetClasses.includes(`unit`))})?r.id:void 0},Ue=0,We=0,Ge=0,W=30,Ke=Fp,qe=0,Je=0,G=0,Ye=0,Xe=!1,Ze=!1,Qe=t.tick,$e=!1,et=``,tt=NaN,nt=NaN,rt=NaN,q=!0,it=0,at=(e,n)=>{te.add(n),ne&&r.info.reset();let i=jp({nowMs:e,deltaMs:n,paused:Me,input:A,world:t,selection:j,rig:k,scene:T,renderer:r,boxEl:s,clickPoint:He,state:{inspectedEnemyId:xe,placement:Se,attackMoveArmed:Ce,speedIndex:we,allStatesIndex:Ue,showOccupiedSpace:he,showUnitPaths:ge},diagnosticsEnabled:g,announce:_e,issueCommand:M,attackableEnemyAt:U,harvestableBuildingAt:H,onExitRequested:z,onLoadRequested:u,onQuickSave:Ae,onSeedStepRequested:d,onPlayerFactionCycleRequested:h,onProbeRequested:()=>{q=!0},populationLabels:N});xe=i.inspectedEnemyId,Se=i.placement,Ce=i.attackMoveArmed,we=i.speedIndex,Ue=i.allStatesIndex,he=i.showOccupiedSpace,ge=i.showUnitPaths,it=performance.now()},J=({nowMs:n,deltaMs:a,alpha:o})=>{if(!oe&&t.city.shardCut){oe=!0;let e=T.rebuildCity(t.city);T.scene.remove(ae.group),ae.dispose(),ae=new Ef(t.city,e,t.population,t.populationCapacity),T.scene.add(ae.group),q=!0}P.update(t.shardCutTransition,o),T.city.setSeparation(P.progress);let s=P.active?P.offsetFor:void 0;T.units.setShardCutOffsets(s),F.setShardCutOffsets(s),ue.setShardCutOffsets(s),P.active!==se&&(se=P.active,T.shadows.setStaticShadowsVisible(!P.active),P.active||T.shadows.refreshStatic(t.city));let c=t.drainChangedBuildings();if(c.length>0)if(qe=performance.now()-it,q=!0,c.length>8)T.city.refreshAll();else for(let e of c)T.city.refresh(e);V();let u=t.drainEvents();t.outcome&&!Pe&&Fe(t.outcome);let d=u.some(e=>e.kind===`combatHit`||e.kind===`unitDown`);T.combat.sync(u.filter(Hp),n),T.units.syncDefeats(u,n);for(let e of u){if(e.kind===`playerFactionChanged`){ze();continue}let r=`faction`in e?e.faction:void 0;if(e.kind!==`matchResolved`&&r!==void 0&&r!==t.playerFaction)continue;let i=zp(e);i&&(_e(i,n),Vp.has(e.kind)&&(De=i,Oe=n+Lp))}j.prune(e=>{let n=t.army.get(e);return n!==void 0&&t.army.typeOf(n).faction===t.playerFaction});let f=j.list(),p=`${xe??``}|${f.join(`,`)}`,m=p!==et;et=p;let h=k.camera,g=R||Math.abs(h.position.x-tt)>.01||Math.abs(h.position.y-nt)>.01||Math.abs(h.position.z-rt)>.01;R=!1,tt=h.position.x,nt=h.position.y,rt=h.position.z;let _=t.tick!==Qe;Qe=t.tick;let v=c.length>0||_&&t.army.units.some(sn),y=U(A.pointer);de.sync(t.army,n),T.units.setPresentationHidden(de.printedUnitIds()),T.units.sync(t.army,o,e=>{let n=t.army.get(e);if(e===y)return`attack`;if((j.has(e)||e===xe)&&n)return`selected`},e=>T.combat.meleePose(e,n),n),T.cutterSweep.sync(t.army,o),ce.sync({army:t.army,camera:h,nowMs:n,cameraDirty:g,stateDirty:d,selectionDirty:m,selectedIds:f,inspectedEnemyId:xe});let b=T.city.syncDamage(n);v||=b.phaseChanged;let x=T.units.corpseShadowSources();(_||c.length>0||b.phaseChanged||x.length>0||$e)&&T.shadows.sync(t.city,t.army,x),$e=x.length>0,F.sync(t.crowds.all,o,t.tick,t.army);let S=f.filter(e=>{let n=t.army.get(e),r=n&&t.army.typeOf(n);return r?.faction===t.playerFaction&&r.role===`harvester`}),w=S.flatMap(e=>{let n=t.army.get(e);return n?[n]:[]});N.setSelectionEnabled(!1),N.sync({camera:h,zoomFraction:k.zoomFraction,nowMs:n,cameraDirty:g,populationDirty:v}),ae.sync(w,t.crowds.all,o,v,c.length>0||b.phaseChanged);let E=S.length>0?H(A.pointer):void 0;le.sync(t.tick,S.length>0,E);let D=Se?du(k.camera,A.pointer):void 0,O=Se!==null&&D!==void 0&&t.constructionPlacement(Se.builderId,Se.typeId,D.x,D.z)!==void 0;if(ue.sync(Se&&D?{typeId:Se.typeId,x:D.x,z:D.z}:void 0,O,t.constructionSites,n),fe.sync(t.city,t.army,t.constructionSites,he,ge),T.moveCommandIndicator.sync(n),T.updateShadowCoverage(k.focus,k.zoomFraction),T.city.setOutlineZoom(k.zoomFraction),T.units.setOutlineZoom(k.zoomFraction),T.unitOcclusion.captureOccluderDepth(r,T.scene,k.camera),i.render(T.scene,k.camera),T.unitOcclusion.render(r,k.camera),T.selectionSilhouette.render(r,k.camera,le.selectionSource()),xe!==null&&t.army.get(xe)===void 0&&(xe=null),be+=a,be>=Ip){be=0,pe!==null&&n>me&&(pe=null),De!==null&&n>Oe&&(De=null),ye.render(l({world:t,selected:j.size,banner:pe})),L.render(Gd(t,j,xe===null?void 0:t.army.get(xe)));let e=j.primary()===void 0?void 0:t.army.get(j.primary());Ee.render(qd(t,e,De,Se))}if(Ge+=a,Ge>=1e3&&(W=(C.stepCount-We)/Ge*1e3,We=C.stepCount,Ge=0),re.add(t.tick,t.resources.humans),ie.add(t.tick,t.resources.charge),Ke+=a,Ke>=Fp){if(Ke=0,q){q=!1;let e=Pu(t,{x:k.focus.x,z:k.focus.z});Je=e.reachSmall,G=e.reachLarge,Ye=e.reachLargeStrict,Xe=e.atFocusSmall,Ze=e.atFocusLarge}let[n,i,a]=t.destructionCounts();ee.render({faction:e[t.playerFaction].name,battlefield:t.battlefield,seed:t.seed,fps:te.fps,simHz:W,stepCount:t.tick,droppedMs:C.droppedMs,alpha:o,zoomFraction:k.zoomFraction,pitchDeg:k.pitchDeg,distance:k.camera.position.distanceTo(k.focus),focusX:k.focus.x,focusZ:k.focus.z,cityBuildings:t.city.buildings.length,cityIntact:n??0,cityDamaged:i??0,cityRubble:a??0,populationLabels:N.enabled,units:t.army.units.length,unitsMoving:t.army.countMoving(),unitsBlocked:t.army.countBlocked(),unitsUnreached:t.army.countUnreached(),unitsStalled:t.army.countStalled(),selected:j.size,groups:j.occupiedGroups(),pathsQueued:t.army.pending,pathsTotal:t.army.pathsTotal,navCells:t.nav.cellCount,navRebuilds:t.nav.rebuildCount,navLastRebuildCells:t.nav.lastRebuildCells,navRebuildMs:qe,smallPassable:t.nav.passableFraction(`small`,!1,3),largePassable:t.nav.passableFraction(`large`,!1,13),smallPassableStrict:t.nav.passableFraction(`small`,!0,3),largePassableStrict:t.nav.passableFraction(`large`,!0,13),reachSmall:Je,reachLarge:G,reachLargeStrict:Ye,atFocusSmall:Xe,atFocusLarge:Ze,humans:t.resources.humans,humansCap:t.resources.humansCap,charge:t.resources.charge,chargeCap:t.resources.chargeCap,chargeSegments:t.resources.segmentsReady,techTier:t.techTier,humansPerMinute:re.perMinute,chargePerMinute:ie.perMinute,cargoInTransit:t.cargoInTransit(),populationRemaining:t.remainingPopulation(),populationTotal:t.populationCapacity.reduce((e,t)=>e+t,0),structures:t.army.units.filter(e=>t.army.typeOf(e).faction===t.playerFaction&&t.army.typeOf(e).role===`structure`).length,queued:t.queuedProduction(),civilianCrowds:t.crowds.all.length,civilianHumans:t.crowds.totalHumans(),harvesting:t.army.units.filter(sn).length,harvestIdle:t.harvestersIdle(),unitsDeployed:t.army.countDeployed(),unitsDeploying:t.army.countDeploying(),...ne?{detailed:{drawCalls:r.info.render.calls,triangles:r.info.render.triangles,units:T.units.detailedPerformanceStats()??{loadedModels:0,loadingModels:0,failedModels:0,fallbacks:0,visible:0,selection:0,occlusion:0}}}:{}},te)}},ot;return ot=Tp({loop:C,speed:()=>Ap[we]??1,paused:()=>Me,beforeAdvance:at,render:J,...b?{onFirstFrame:()=>{performance.mark(`game-session-first-frame`),b()}}:{},...x?{onFrameError:x}:{}}),ot.start(),Up(t,()=>{S=!1,ot?.dispose(),window.removeEventListener(`resize`,Be),r.domElement.removeEventListener(`webglcontextlost`,Ve),A.dispose(),Ie.remove(),Le.remove(),Pe?.dispose(),ye.dispose(),L.dispose(),Ee.dispose(),Ne(),T.dispose(),ne&&(r.info.autoReset=!0),N.dispose(),ae.dispose(),ce.dispose(),le.dispose(),F.dispose(),ue.dispose(),de.dispose(),fe.dispose(),s.style.display=`none`})}function Gp(e,t){e.hidden=!t}var Kp=1213353265,qp=class{create;active=null;currentState={kind:`title`};constructor(e){this.create=e}get state(){return this.currentState}show(e){this.releaseSession(),this.currentState={kind:e}}newMatch(e){return this.replace(e)}load(e){return this.replace(e)}playAgain(e){return this.replace(e)}matchEnded(){this.active&&(this.currentState={kind:`matchEnd`,session:this.active})}exit(){this.releaseSession(),this.currentState={kind:`title`}}dispose(){this.currentState.kind!==`disposed`&&(this.releaseSession(),this.currentState={kind:`disposed`})}replace(e){if(this.currentState.kind===`disposed`)throw Error(`front-end flow is disposed`);this.releaseSession();let t=this.create(e);return this.active=t,this.currentState={kind:`playing`,session:t},t}releaseSession(){let e=this.active;this.active=null,e?.dispose()}};function Jp(e,t,n){let r=e??n();return r.world.choosePlayerFactionForNewMatch(t),r}function Yp(e){let t=Va(),n=Mu(e.search),a={standardMatch:!0,...n.controllers?{controllers:n.controllers}:{}};wt(`machines`,t.colourVariant.machines),wt(`ancients`,t.colourVariant.ancients);let o=new Wc,s=null,l=null,u=null,d=null,f=null,p=!1,m=0,h=new Mp({store:e.store,reportError:(e,t)=>console.error(`${e} failed`,t)}),g=e=>{s?.dispose(),s=e},_=()=>{Gp(e.overlayPanelEl,t.overlayVisible)},v=()=>{l!==null&&cancelAnimationFrame(l),u!==null&&cancelAnimationFrame(u),l=null,u=null,d?.dispose(),d=null},y=e=>{v();let t=new c(document.body,{faction:e,onRecover:()=>C()});return d=t,t},b=e=>(v(),e.setOnRecover(()=>C()),d=e,e),x=(e,t)=>{l=requestAnimationFrame(()=>{l=null,u=requestAnimationFrame(()=>{u=null,!(p||d!==e)&&t()})})},S,C,w,T,E=new qp(({world:r,manifest:i,preparedScene:a})=>{o.preload(i);let s=d,c=_c(r.playerFaction===`machines`?`machine-harbinger`:`ancient-harbinger`),l=c?o.request(c):void 0;g(null),e.renderer.shadowMap.enabled=t.enhancedShadows;let u=Wp({world:r,renderer:e.renderer,toonEffect:e.toonEffect,renderSettings:t,overlayEl:e.overlayEl,boxEl:e.boxEl,store:e.store,onLoadRequested:()=>S(),onSeedStepRequested:e=>{let t=r.seed+e>>>0;queueMicrotask(()=>{m++,k(()=>O(D(t,r.playerFaction,r.battlefield),Kc(r.playerFaction)),r.playerFaction)})},onExitToTitle:()=>C(),onPlayAgainRequested:()=>{queueMicrotask(()=>{m++,A(()=>O(D(r.seed,r.playerFaction,r.battlefield),Kc(r.playerFaction)),r.playerFaction)})},onMatchEnded:()=>E.matchEnded(),onPlayerFactionCycleRequested:()=>{let e=r.playerFaction===`machines`?`ancients`:`machines`;r.enqueue(`debug`,{kind:`setPlayerFaction`,faction:e})},diagnosticsEnabled:()=>t.overlayVisible,detailedPerformance:n.detailedPerformance,modelCache:o,...a?{preparedScene:a}:{},onFirstFrame:()=>{d===s&&s?.firstFrameSubmitted()},onRenderFailure:()=>{s&&d===s&&s.state!==`disposed`?s.fail():y().fail()}});return l?.then(()=>{d===s&&c&&s?.harbingerSettled(o.status(c))}),_(),u}),D=(e,t,r)=>new rn(e,t,r?{battlefield:!0,...a,...n.detailedStress?{battlefieldUnitsPerType:8}:{}}:a),O=(e,t,n)=>({world:e,manifest:t,...n?{preparedScene:n}:{}}),k=(e,t,n)=>{let r=n?b(n):y(t);x(r,()=>E.newMatch(e()))},A=(e,t)=>{let n=y(t);x(n,()=>E.playAgain(e()))},j=()=>{o.preload(Kc())},M=(t,n,r)=>{f?.dispose();let i=Math.max(1,e.renderer.domElement.clientWidth)/Math.max(1,e.renderer.domElement.clientHeight),a=t.city.startAnchors[r===`machines`?0:1],o=new ju(i,a).camera;f=new cl(e.renderer),f.start(n.shaderPrewarmTasks(e.renderer,o))},ee=e=>{let n=Jp(null,e,()=>{let e=new rn(Kp,`machines`,a);return{world:e,scene:new cu(e.city,e.army,t,o)}});return M(n.world,n.scene,e),n},te=e=>{let t=ee(e);return O(t.world,Kc(e),t.scene)};return S=e=>{let t=y(),n=++m;h.load(e).then(e=>{!e||p||n!==m||d!==t||x(t,()=>E.load(O(e.world,qc(e.envelope))))})},C=()=>{if(p)return;v(),m++,E.exit();let e,t=(t,n)=>{e=new r(document.body,{saved:t&&{faction:t.envelope.playerFaction,tick:t.envelope.tick,clock:i(t.envelope.tick)},slotCount:n,onStart:e=>{k(()=>te(e),e)},onResume:()=>S(),onSelectSave:()=>void T(),onSettings:()=>w()}),g(e),_()};t(void 0,0),j();let n=m;Promise.all([h.latest(),h.list()]).then(([r,i])=>{p||n!==m||s!==e||t(r,i.length)})},w=()=>{E.show(`settings`),g(new Ka(document.body,t,{onColourVariant:(e,n)=>{t.colourVariant[e]=n,wt(e,n),o.dispose(),o=new Wc,Ha(t)},onToggleOverlay:e=>{t.overlayVisible=e,Ha(t),_()},onToggleCityLighting:e=>{t.cityLighting=e,Ha(t)},onToggleEnhancedShadows:n=>{t.enhancedShadows=n,e.renderer.shadowMap.enabled=n,Ha(t)},onToggleAmbientOcclusion:e=>{t.ambientOcclusion=e,Ha(t)},onBack:()=>C()}))},T=async()=>{let e=++m,t=await h.list();p||e!==m||(E.show(`saveList`),g(new qa(document.body,t.map(e=>({slot:e.slot,faction:e.readable?e.envelope.playerFaction:void 0,clock:i(e.envelope.tick??0),tick:e.envelope.tick??0,savedAtMs:e.savedAtMs,readable:e.readable})),{onLoad:e=>S(e),onDelete:e=>{h.delete(e).then(()=>T())},onBack:()=>C()})))},{get state(){return E.state},start(t,n){if(p)return;if(t===`machines`||t===`ancients`){k(()=>te(t),t,n);return}if(t===`resume`){S();return}if(t===`save-list`){T();return}if(t===`settings`){w();return}let r=new URLSearchParams(e.search).get(`faction`);if(e.pathname.endsWith(`/battle.html`)){let e=r===`ancients`?`ancients`:`machines`;k(()=>O(D(Kp,e,!0),Kc(e)),e)}else r===`machines`||r===`ancients`?k(()=>te(r),r):C()},warmOpeningMatch(){p||j()},dispose(){p||(p=!0,m++,v(),f?.dispose(),g(null),E.dispose(),o.dispose())}}}var Xp;function Zp(){if(Xp)return Xp;let e=o(),t=new La({antialias:!0,powerPreference:`high-performance`});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=1,t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);let n=new Ra(t,{defaultThickness:.0022,defaultColor:[0,0,0],defaultAlpha:.68}),r=Wt.available?new Wt:null;return r||console.warn(`IndexedDB unavailable; saving is disabled for this session`),Xp=Yp({renderer:t,toonEffect:n,overlayPanelEl:e.overlayPanelEl,overlayEl:e.overlayEl,boxEl:e.boxEl,store:r,pathname:window.location.pathname,search:window.location.search}),Xp}function Qp(e,t){Zp().start(e,t)}function $p(){Zp().warmOpeningMatch()}export{Qp as startGame,$p as warmOpeningMatch};