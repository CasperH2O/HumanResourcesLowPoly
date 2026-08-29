const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/unitModelResources-CShfznbw.js","assets/three.core-BnugWimV.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/unitModelMaterials-CwQnBjv0.js","assets/toon-DLatBX7x.js"])))=>i.map(i=>d[i]);
import{$ as e,A as t,An as n,At as r,B as i,Bn as a,C as o,Cn as s,Cr as c,D as l,Dn as u,Dt as d,E as f,Et as p,F as m,Fn as h,G as g,Gt as _,H as v,I as y,In as b,K as x,Kt as S,L as C,Ln as w,M as T,Mt as E,N as D,Nt as O,O as k,On as A,Qn as j,R as M,Rn as N,Rt as ee,S as te,Sn as ne,Sr as re,T as ie,Tn as ae,Tt as oe,U as P,V as se,Vn as ce,Vt as le,Xn as F,Yn as ue,Zn as de,_ as fe,_r as I,_t as L,a as pe,ar as me,at as he,b as ge,br as _e,bt as ve,c as ye,cr as be,ct as xe,dr as Se,dt as Ce,er as we,f as Te,fr as Ee,g as De,gr as Oe,gt as R,h as z,hr as ke,ht as Ae,i as je,ir as Me,it as Ne,j as Pe,jt as Fe,k as Ie,kn as Le,l as Re,m as B,mr as ze,mt as V,nr as Be,or as H,ot as U,p as Ve,pr as W,pt as G,qn as He,r as Ue,rr as We,rt as Ge,sr as K,st as Ke,tt as qe,u as Je,ur as Ye,v as Xe,vr as Ze,vt as Qe,w as $e,wn as et,wr as tt,wt as nt,x as rt,xr as it,y as at,yr as ot,yt as st,zn as ct}from"./three.core-BnugWimV.js";import{a as lt,c as ut,i as dt,n as ft,s as pt,t as mt}from"./toon-DLatBX7x.js";import{t as ht}from"./SkeletonUtils-CHxfGqZJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function gt(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _t(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},J={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},vt={basic:{uniforms:it([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:it([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:it([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:it([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:it([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new z(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:it([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:it([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:it([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:it([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:it([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:it([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:it([J.common,J.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:it([J.lights,J.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};vt.physical={uniforms:it([vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var yt={r:0,b:0,g:0},bt=new Ae,xt=new V;xt.set(-1,0,0,0,1,0,0,0,1);function St(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new R(new ye(1,1,1),new N({name:`BackgroundCubeMaterial`,uniforms:ze(vt.backgroundCube.uniforms),vertexShader:vt.backgroundCube.vertexShader,fragmentShader:vt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xt),l.material.toneMapped=De.getTransfer(i.colorSpace)!==b,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new R(new O(2,2),new N({name:`BackgroundMaterial`,uniforms:ze(vt.background.uniforms),vertexShader:vt.background.vertexShader,fragmentShader:vt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=De.getTransfer(i.colorSpace)!==b,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(yt,ot(e)),n.buffers.color.setClear(yt.r,yt.g,yt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ct(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Tt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(c(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&c(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Et(e){let t=this,n=null,r=0,i=!1,a=!1,o=new E,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Dt=4,Ot=[.125,.215,.35,.446,.526,.582],kt=20,At=256,jt=new r,Mt=new z,Nt=null,Pt=0,Ft=0,It=!1,Lt=new K,Rt=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Lt}=i;Nt=this._renderer.getRenderTarget(),Pt=this._renderer.getActiveCubeFace(),Ft=this._renderer.getActiveMipmapLevel(),It=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nt,Pt,Ft),this._renderer.xr.enabled=It,e.scissorTest=!1,Vt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nt=this._renderer.getRenderTarget(),Pt=this._renderer.getActiveCubeFace(),Ft=this._renderer.getActiveMipmapLevel(),It=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:se,format:_,colorSpace:Ke,depthBuffer:!1},r=Bt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bt(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zt(r)),this._blurMaterial=Ut(r,e,t),this._ggxMaterial=Ht(r,e,t)}return r}_compileMaterial(e){let t=new R(new Je,e);this._renderer.compile(t,jt)}_sceneToCubeUV(e,t,n,r,i){let a=new Fe(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Mt),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new R(new ye,new L({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Mt),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Vt(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gt()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wt());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Vt(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,jt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Dt?n-d+Dt:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Vt(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,jt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Vt(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,jt)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,l=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&I(`blur direction must be either latitudinal or longitudinal!`);let u=this._lodMeshes[r];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(i)?Math.PI/(2*f):2*Math.PI/39,m=i/p,h=isFinite(i)?1+Math.floor(3*m):kt;h>kt&&c(`sigmaRadians, ${i}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${kt}`);let g=[],_=0;for(let e=0;e<kt;++e){let t=e/m,n=Math.exp(-t*t/2);g.push(n),e===0?_+=n:e<h&&(_+=2*n)}for(let e=0;e<g.length;e++)g[e]=g[e]/_;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=a===`latitudinal`,o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let y=this._sizeLods[r];Vt(t,3*y*(r>v-Dt?r-v+Dt:0),4*(this._cubeSize-y),3*y,2*y),s.setRenderTarget(t),s.render(u,jt)}};function zt(e){let t=[],n=[],r=[],i=e,a=e-Dt+1+Ot.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Dt?s=Ot[o-e+Dt-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Je;h.setAttribute(`position`,new Re(f,3)),h.setAttribute(`uv`,new Re(p,2)),h.setAttribute(`faceIndex`,new Re(m,1)),r.push(new R(h,null)),i>Dt&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Bt(e,t,n){let r=new Se(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Vt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ht(e,t,n){return new N({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:At,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ut(e,t,n){let r=new Float32Array(kt),i=new K(0,1,0);return new N({name:`SphericalGaussianBlur`,defines:{n:kt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wt(){return new N({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Kt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gt(){return new N({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kt(){return`

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
	`}var qt=class extends Se{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new at(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ye(5,5,5),i=new N({name:`CubemapFromEquirect`,uniforms:ze(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new R(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ne),new fe(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Jt(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new qt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Rt(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Rt(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Yt(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Xt(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?F:ue)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Zt(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Qt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $t(e,t,n){let r=new WeakMap,i=new be;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new te(h,p,m,u);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function en(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var tn={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function nn(e,t,n,i,a,o){let s=new Se(t,n,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,depthTexture:a?new f(t,n):void 0}),c=new Se(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}),l=new Je;l.setAttribute(`position`,new m([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new m([0,2,0,0,2,0],2));let u=new et({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new R(l,u),p=new r(-1,1,1,-1,0,1),h=null,g=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){s.setSize(e,t),c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=s.width,n=s.height;for(let e=0;e<b.length;e++){let r=b[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(s),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=s,r=c;for(let i=0;i<b.length;i++){let a=b[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,u.defines={},De.getTransfer(h)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=tn[g];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(d,p),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),c.dispose(),l.dispose(),u.dispose()}}var rn=new He,an=new f(1,1),on=new te,sn=new rt,cn=new at,ln=[],un=[],dn=new Float32Array(16),fn=new Float32Array(9),pn=new Float32Array(4);function mn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ln[i];if(a===void 0&&(a=new Float32Array(i),ln[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _n(e,t){let n=un[t];n===void 0&&(n=new Int32Array(t),un[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2fv(this.addr,t),gn(n,t)}}function bn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;e.uniform3fv(this.addr,t),gn(n,t)}}function xn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4fv(this.addr,t),gn(n,t)}}function Sn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(hn(n,r))return;pn.set(r),e.uniformMatrix2fv(this.addr,!1,pn),gn(n,r)}}function Cn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(hn(n,r))return;fn.set(r),e.uniformMatrix3fv(this.addr,!1,fn),gn(n,r)}}function wn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(hn(n,r))return;dn.set(r),e.uniformMatrix4fv(this.addr,!1,dn),gn(n,r)}}function Tn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function En(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2iv(this.addr,t),gn(n,t)}}function Dn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3iv(this.addr,t),gn(n,t)}}function On(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4iv(this.addr,t),gn(n,t)}}function kn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function An(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2uiv(this.addr,t),gn(n,t)}}function jn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3uiv(this.addr,t),gn(n,t)}}function Mn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4uiv(this.addr,t),gn(n,t)}}function Nn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(an.compareFunction=n.isReversedDepthBuffer()?518:515,a=an):a=rn,n.setTexture2D(t||a,i)}function Pn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||sn,i)}function Fn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||cn,i)}function In(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||on,i)}function Ln(e){switch(e){case 5126:return vn;case 35664:return yn;case 35665:return bn;case 35666:return xn;case 35674:return Sn;case 35675:return Cn;case 35676:return wn;case 5124:case 35670:return Tn;case 35667:case 35671:return En;case 35668:case 35672:return Dn;case 35669:case 35673:return On;case 5125:return kn;case 36294:return An;case 36295:return jn;case 36296:return Mn;case 35678:case 36198:case 36298:case 36306:case 35682:return Nn;case 35679:case 36299:case 36307:return Pn;case 35680:case 36300:case 36308:case 36293:return Fn;case 36289:case 36303:case 36311:case 36292:return In}}function Rn(e,t){e.uniform1fv(this.addr,t)}function zn(e,t){let n=mn(t,this.size,2);e.uniform2fv(this.addr,n)}function Bn(e,t){let n=mn(t,this.size,3);e.uniform3fv(this.addr,n)}function Vn(e,t){let n=mn(t,this.size,4);e.uniform4fv(this.addr,n)}function Hn(e,t){let n=mn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Un(e,t){let n=mn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wn(e,t){let n=mn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gn(e,t){e.uniform1iv(this.addr,t)}function Kn(e,t){e.uniform2iv(this.addr,t)}function qn(e,t){e.uniform3iv(this.addr,t)}function Jn(e,t){e.uniform4iv(this.addr,t)}function Yn(e,t){e.uniform1uiv(this.addr,t)}function Xn(e,t){e.uniform2uiv(this.addr,t)}function Zn(e,t){e.uniform3uiv(this.addr,t)}function Qn(e,t){e.uniform4uiv(this.addr,t)}function $n(e,t,n){let r=this.cache,i=t.length,a=_n(n,i);hn(r,a)||(e.uniform1iv(this.addr,a),gn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?an:rn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function er(e,t,n){let r=this.cache,i=t.length,a=_n(n,i);hn(r,a)||(e.uniform1iv(this.addr,a),gn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||sn,a[e])}function tr(e,t,n){let r=this.cache,i=t.length,a=_n(n,i);hn(r,a)||(e.uniform1iv(this.addr,a),gn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||cn,a[e])}function nr(e,t,n){let r=this.cache,i=t.length,a=_n(n,i);hn(r,a)||(e.uniform1iv(this.addr,a),gn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||on,a[e])}function rr(e){switch(e){case 5126:return Rn;case 35664:return zn;case 35665:return Bn;case 35666:return Vn;case 35674:return Hn;case 35675:return Un;case 35676:return Wn;case 5124:case 35670:return Gn;case 35667:case 35671:return Kn;case 35668:case 35672:return qn;case 35669:case 35673:return Jn;case 5125:return Yn;case 36294:return Xn;case 36295:return Zn;case 36296:return Qn;case 35678:case 36198:case 36298:case 36306:case 35682:return $n;case 35679:case 36299:case 36307:return er;case 35680:case 36300:case 36308:case 36293:return tr;case 36289:case 36303:case 36311:case 36292:return nr}}var ir=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ln(t.type)}},ar=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rr(t.type)}},or=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},sr=/(\w+)(\])?(\[|\.)?/g;function cr(e,t){e.seq.push(t),e.map[t.id]=t}function lr(e,t,n){let r=e.name,i=r.length;for(sr.lastIndex=0;;){let a=sr.exec(r),o=sr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){cr(n,l===void 0?new ir(s,e,t):new ar(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new or(s),cr(n,e)),n=e}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);lr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function dr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fr=37297,pr=0;function mr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var hr=new V;function gr(e){De._getMatrix(hr,De.workingColorSpace,e);let t=`mat3( ${hr.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(e)){case xe:return[t,`LinearTransferOETF`];case b:return[t,`sRGBTransferOETF`];default:return c(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function _r(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mr(e.getShaderSource(t),r)}return i}function vr(e,t){let n=gr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var yr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function br(e,t){let n=yr[t];return n===void 0?(c(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var xr=new K;function Sr(){return De.getLuminanceCoefficients(xr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${xr.x.toFixed(4)}, ${xr.y.toFixed(4)}, ${xr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Cr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Er).join(`
`)}function wr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Tr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Er(e){return e!==``}function Dr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Or(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(e){return e.replace(kr,Mr)}var jr=new Map;function Mr(e,t){let n=q[t];if(n===void 0){let e=jr.get(t);if(e!==void 0)n=q[e],c(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ar(n)}var Nr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pr(e){return e.replace(Nr,Fr)}function Fr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ir(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Lr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Rr(e){return Lr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var zr={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Br(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:zr[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Vr={302:`ENVMAP_MODE_REFRACTION`};function Hr(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Vr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ur={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Wr(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ur[e.combine]||`ENVMAP_BLENDING_NONE`}function Gr(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Kr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,l=Rr(n),u=Br(n),d=Hr(n),f=Wr(n),p=Gr(n),m=Cr(n),h=wr(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Er).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Er).join(`
`),v.length>0&&(v+=`
`)):(_=[Ir(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Er).join(`
`),v=[Ir(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:br(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,vr(`linearToOutputTexel`,n.outputColorSpace),Sr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Er).join(`
`)),o=Ar(o),o=Dr(o,n),o=Or(o,n),s=Ar(s),s=Dr(s,n),s=Or(s,n),o=Pr(o),s=Pr(s),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=dr(i,i.VERTEX_SHADER,b),C=dr(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g)||``,r=i.getShaderInfoLog(S)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),s=r.trim(),l=a.trim(),u=!0,d=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=_r(i,S,`vertex`),n=_r(i,C,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||l===``)&&(d=!1):c(`WebGLProgram: Program Info Log:`,o);d&&(t.diagnostics={runnable:u,programLog:o,vertexShader:{log:s,prefix:_},fragmentShader:{log:l,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new ur(i,g),E=Tr(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,fr)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pr++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var qr=0,Jr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yr(e),t.set(e,n)),n}},Yr=class{constructor(e){this.id=qr++,this.code=e,this.usedTimes=0}};function Xr(e){return e===1030||e===37490||e===36285}function Zr(t,n,r,i,a,o){let s=new e,l=new Jr,u=new Set,d=[],f=new Map,p=i.logarithmicDepthBuffer,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return u.add(e),e===0?`uv`:`uv${e}`}function _(e,a,s,d,f,_){let v=d.fog,y=f.geometry,b=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?d.environment:null,x=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap,S=n.get(e.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=h[e.type];e.precision!==null&&(m=i.getMaxPrecision(e.precision),m!==e.precision&&c(`WebGLProgram.getParameters:`,e.precision,`not supported, using`,m,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=vt[w];O=e.vertexShader,k=e.fragmentShader}else{O=e.vertexShader,k=e.fragmentShader;let t=l.getVertexShaderStage(e),n=l.getFragmentShaderStage(e);l.update(e,t,n),A=t.id,j=n.id}let M=t.getRenderTarget(),N=t.state.buffers.depth.getReversed(),ee=f.isInstancedMesh===!0,te=f.isBatchedMesh===!0,ne=!!e.map,re=!!e.matcap,ie=!!S,ae=!!e.aoMap,oe=!!e.lightMap,P=!!e.bumpMap&&e.wireframe===!1,se=!!e.normalMap,ce=!!e.displacementMap,le=!!e.emissiveMap,F=!!e.metalnessMap,ue=!!e.roughnessMap,de=e.anisotropy>0,fe=e.clearcoat>0,I=e.dispersion>0,L=e.iridescence>0,pe=e.sheen>0,me=e.transmission>0,he=de&&!!e.anisotropyMap,ge=fe&&!!e.clearcoatMap,_e=fe&&!!e.clearcoatNormalMap,ve=fe&&!!e.clearcoatRoughnessMap,ye=L&&!!e.iridescenceMap,be=L&&!!e.iridescenceThicknessMap,xe=pe&&!!e.sheenColorMap,Se=pe&&!!e.sheenRoughnessMap,Ce=!!e.specularMap,we=!!e.specularColorMap,Te=!!e.specularIntensityMap,Ee=me&&!!e.transmissionMap,Oe=me&&!!e.thicknessMap,R=!!e.gradientMap,z=!!e.alphaMap,ke=e.alphaTest>0,Ae=!!e.alphaHash,je=!!e.extensions,Me=0;e.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Me=t.toneMapping);let Ne={shaderID:w,shaderType:e.type,shaderName:e.name,vertexShader:O,fragmentShader:k,defines:e.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:e.isRawShaderMaterial===!0,glslVersion:e.glslVersion,precision:m,batching:te,batchingColor:te&&f._colorsTexture!==null,instancing:ee,instancingColor:ee&&f.instanceColor!==null,instancingMorph:ee&&f.morphTexture!==null,outputColorSpace:M===null?t.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!e.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&S.mapping,envMapCubeUVHeight:C,aoMap:ae,lightMap:oe,bumpMap:P,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&e.normalMapType===1,normalMapTangentSpace:se&&e.normalMapType===0,packedNormalMap:se&&e.normalMapType===0&&Xr(e.normalMap.format),metalnessMap:F,roughnessMap:ue,anisotropy:de,anisotropyMap:he,clearcoat:fe,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:I,iridescence:L,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:me,transmissionMap:Ee,thicknessMap:Oe,gradientMap:R,opaque:e.transparent===!1&&e.blending===1&&e.alphaToCoverage===!1,alphaMap:z,alphaTest:ke,alphaHash:Ae,combine:e.combine,mapUv:ne&&g(e.map.channel),aoMapUv:ae&&g(e.aoMap.channel),lightMapUv:oe&&g(e.lightMap.channel),bumpMapUv:P&&g(e.bumpMap.channel),normalMapUv:se&&g(e.normalMap.channel),displacementMapUv:ce&&g(e.displacementMap.channel),emissiveMapUv:le&&g(e.emissiveMap.channel),metalnessMapUv:F&&g(e.metalnessMap.channel),roughnessMapUv:ue&&g(e.roughnessMap.channel),anisotropyMapUv:he&&g(e.anisotropyMap.channel),clearcoatMapUv:ge&&g(e.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(e.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(e.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(e.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(e.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(e.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(e.sheenRoughnessMap.channel),specularMapUv:Ce&&g(e.specularMap.channel),specularColorMapUv:we&&g(e.specularColorMap.channel),specularIntensityMapUv:Te&&g(e.specularIntensityMap.channel),transmissionMapUv:Ee&&g(e.transmissionMap.channel),thicknessMapUv:Oe&&g(e.thicknessMap.channel),alphaMapUv:z&&g(e.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(se||de),vertexNormals:!!y.attributes.normal,vertexColors:e.vertexColors,vertexAlphas:e.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:f.isPoints===!0&&!!y.attributes.uv&&(ne||z),fog:!!v,useFog:e.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:e.wireframe===!1&&(e.flatShading===!0||y.attributes.normal===void 0&&se===!1&&(e.isMeshLambertMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isMeshPhysicalMaterial)),sizeAttenuation:e.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:N,skinning:f.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:e.dithering,shadowMapEnabled:t.shadowMap.enabled&&s.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,decodeVideoTexture:ne&&e.map.isVideoTexture===!0&&De.getTransfer(e.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&e.emissiveMap.isVideoTexture===!0&&De.getTransfer(e.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:e.premultipliedAlpha,doubleSided:e.side===2,flipSided:e.side===1,useDepthPacking:e.depthPacking>=0,depthPacking:e.depthPacking||0,index0AttributeName:e.index0AttributeName,extensionClipCullDistance:je&&e.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&e.extensions.multiDraw===!0||te)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:e.customProgramCacheKey()};return Ne.vertexUv1s=u.has(1),Ne.vertexUv2s=u.has(2),Ne.vertexUv3s=u.has(3),u.clear(),Ne}function v(e){let n=[];if(e.shaderID?n.push(e.shaderID):(n.push(e.customVertexShaderID),n.push(e.customFragmentShaderID)),e.defines!==void 0)for(let t in e.defines)n.push(t),n.push(e.defines[t]);return e.isRawShaderMaterial===!1&&(y(n,e),b(n,e),n.push(t.outputColorSpace)),n.push(e.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=vt[t];n=de.clone(e.uniforms)}else n=e.uniforms;return n}function S(e,n){let r=f.get(n);return r===void 0?(r=new Kr(t,n,e,a),d.push(r),f.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=d.indexOf(e);d[t]=d[d.length-1],d.pop(),f.delete(e.cacheKey),e.destroy()}}function w(e){l.remove(e)}function T(){l.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:T}}function Qr(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function $r(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ei(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ti(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||$r),r.length>1&&r.sort(t||ei),i.length>1&&i.sort(t||ei),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ni(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ti,e.set(t,[i])):n>=r.length?(i=new ti,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ri(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new z};break;case`SpotLight`:n={position:new K,direction:new K,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function ii(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ai=0;function oi(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function si(e){let t=new ri,n=ii(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Ae,o=new Ae;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(oi);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ai++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ci(e){let t=new si(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function li(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ci(e),t.set(n,[a])):r>=i.length?(a=new ci(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ui=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,di=`uniform sampler2D shadow_pass;
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
}`,fi=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],pi=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],mi=new Ae,hi=new K,gi=new K;function _i(e,t,n){let r=new M,i=new H,a=new H,o=new be,s=new Qe,l=new st,u={},d=n.maxTextureSize,p={0:1,1:0,2:2},m=new N({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:ui,fragmentShader:di}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute(`position`,new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new R(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let b=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(c(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=b!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){c(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){c(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Se(i.x,i.y,{format:ne,type:se,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new f(i.x,i.y,y),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=$e,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=oe,p.map.depthTexture.magFilter=oe}else u.isPointLight?(p.map=new qt(i.x),p.map.depthTexture=new Xe(i.x,Be)):(p.map=new Se(i.x,i.y),p.map.depthTexture=new f(i.x,i.y,Be)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=$e,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=Ne,p.map.depthTexture.magFilter=Ne):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=oe,p.map.depthTexture.magFilter=oe);p.camera.updateProjectionMatrix()}let v=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),hi.setFromMatrixPosition(u.matrixWorld),e.position.copy(hi),gi.copy(e.position),gi.add(fi[t]),e.up.copy(pi[t]),e.lookAt(gi),e.updateMatrixWorld(),n.makeTranslation(-hi.x,-hi.y,-hi.z),mi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(mi,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(u);r=p.getFrustum(),C(n,s,p.camera,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&x(p,s),p.needsUpdate=!1}b=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,p)};function x(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Se(i.x,i.y,{format:ne,type:se})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function S(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,w)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function C(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=S(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=S(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)C(c[e],i,a,o,s)}function w(e){e.target.removeEventListener(`dispose`,w);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function vi(e,t){function n(){let t=!1,n=new be,r=null,i=new be(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Le[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new be().fromArray(ie),P=new be().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),le(e.CULL_FACE),me(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let L={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};L[103]=e.MIN,L[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(F(e.BLEND),g=!1);return}if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(L[n],L[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?F(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?F(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function xe(t){t?le(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function Ce(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function R(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Re(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function B(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:F,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Me,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:B,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:je,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:R,compressedTexSubImage3D:ke,scissor:Ie,viewport:Re,reset:V}}function yi(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new H,f=new WeakMap,m=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):Oe(`canvas`)}function y(e,t,n){let r=1,i=Me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);h===void 0&&(h=v(n,a));let o=t?v(n,a):h;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),c(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&c(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];c(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;a&&(l=t.get(`EXT_texture_norm16`),l||c(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=r;if(r===e.RED&&(i===e.FLOAT&&(u=e.R32F),i===e.HALF_FLOAT&&(u=e.R16F),i===e.UNSIGNED_BYTE&&(u=e.R8),i===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),i===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.R8UI),i===e.UNSIGNED_SHORT&&(u=e.R16UI),i===e.UNSIGNED_INT&&(u=e.R32UI),i===e.BYTE&&(u=e.R8I),i===e.SHORT&&(u=e.R16I),i===e.INT&&(u=e.R32I)),r===e.RG&&(i===e.FLOAT&&(u=e.RG32F),i===e.HALF_FLOAT&&(u=e.RG16F),i===e.UNSIGNED_BYTE&&(u=e.RG8),i===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),i===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RG8UI),i===e.UNSIGNED_SHORT&&(u=e.RG16UI),i===e.UNSIGNED_INT&&(u=e.RG32UI),i===e.BYTE&&(u=e.RG8I),i===e.SHORT&&(u=e.RG16I),i===e.INT&&(u=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGB8UI),i===e.UNSIGNED_SHORT&&(u=e.RGB16UI),i===e.UNSIGNED_INT&&(u=e.RGB32UI),i===e.BYTE&&(u=e.RGB8I),i===e.SHORT&&(u=e.RGB16I),i===e.INT&&(u=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),i===e.UNSIGNED_INT&&(u=e.RGBA32UI),i===e.BYTE&&(u=e.RGBA8I),i===e.SHORT&&(u=e.RGBA16I),i===e.INT&&(u=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),i===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?xe:De.getTransfer(o);i===e.FLOAT&&(u=e.RGBA32F),i===e.HALF_FLOAT&&(u=e.RGBA16F),i===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),i===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,c(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),t.isVideoTexture&&f.delete(t),t.isHTMLTexture&&m.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),j(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=g.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&g.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=g.get(i);delete a[n.__cacheKey],o.memory.textures--}function j(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let M=0;function N(){M=0}function ee(){return M}function te(e){M=e}function ne(){let e=M;return e>=i.maxTextures&&c(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),M+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(t,i){let a=r.get(t);if(t.isVideoTexture&&Ae(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)c(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)c(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[A]:e.REPEAT,[B]:e.CLAMP_TO_EDGE,[nt]:e.MIRRORED_REPEAT},F={[oe]:e.NEAREST,[d]:e.NEAREST_MIPMAP_NEAREST,[p]:e.NEAREST_MIPMAP_LINEAR,[Ne]:e.LINEAR,[U]:e.LINEAR_MIPMAP_NEAREST,[he]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&c(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,F[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,F[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ue[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function fe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let s=re(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function L(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=L(n.start,r.width,4),c=L(t.start,r.width,4);n.start<=i+1&&a===c&&L(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=fe(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+s);let f=r.get(d);if(d.version!==f.__version||u===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=De.getPrimaries(De.workingColorSpace),r=o.colorSpace===``?null:De.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=y(o.image,!1,i.maxTextureSize);t=je(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),h=C(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);de(l,o);let g,_=o.mipmaps,v=o.isVideoTexture!==!0,S=f.__version===void 0||u===!0,E=d.dataReady,D=T(o,t);if(o.isDepthTexture)h=w(o.format===ie,o.type),S&&(v?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(_.length>0){v&&S&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data);o.generateMipmaps=!1}else v?(S&&n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height),E&&pe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){v&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(g=_[i],o.format!==1023)if(r!==null)if(v){if(E)if(o.layerUpdates.size>0){let t=Ze(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,g.data,0,0);else c(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else v?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,p,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,r,p,g.data)}else{v&&S&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],o.format===1023?v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data):r===null?c(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}else if(o.isDataArrayTexture)if(v){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,t.width,t.height,t.depth),E)if(o.layerUpdates.size>0){let i=Ze(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)v?(S&&n.texStorage3D(e.TEXTURE_3D,D,h,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(S)if(v)n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),m.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&S){let t=Me(_[0]);n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,g):n.texImage2D(e.TEXTURE_2D,t,h,r,p,g);o.generateMipmaps=!1}else if(v){if(S){let r=Me(t);n.texStorage2D(e.TEXTURE_2D,D,h,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,p,t);b(o)&&x(l),f.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,o,s){if(o.image.length!==6)return;let l=fe(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=De.getPrimaries(De.workingColorSpace),r=o.colorSpace===``?null:De.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=y(o.image[e],!0,i.maxCubemapSize):h[e]=m?o.image[e].image:o.image[e],h[e]=je(o,h[e]);let g=h[0],_=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=C(o.internalFormat,_,v,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=T(o,g);de(e.TEXTURE_CUBE_MAP,o);let k;if(p){w&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,S,g.width,g.height);for(let t=0;t<6;t++){k=h[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,_,v,i.data):_===null?c(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,w&&E){k.length>0&&O++;let t=Me(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,S,t.width,t.height)}for(let t=0;t<6;t++)if(m){w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,v,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,h[t].width,h[t].height,0,_,v,h[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,_,v,i.data)}}else{w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,_,v,h[t]);for(let r=0;r<k.length;r++){let i=k[r];w?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,_,v,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,_,v,i.image[t])}}}b(o)&&x(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=C(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,z(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ke(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=C(o.internalFormat,c,l,o.normalized,o.colorSpace);ke(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),de(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ae(i.depthTexture,0);let u=l.__webglTexture,d=z(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)ke(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Ce(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&ke(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=C(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=z(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),de(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)&&x(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),de(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),b(a)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),de(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)&&x(r),n.unbindTexture()}t.depthBuffer&&be(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)){let t=S(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let Te=[],Ee=[];function R(t){if(t.samples>0){if(ke(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Te.push(c),Ee.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function z(e){return Math.min(i.maxSamples,e.samples)}function ke(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ae(e){let t=o.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(De.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&c(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function Me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=ne,this.resetTextureUnits=N,this.getTextureUnits=ee,this.setTextureUnits=te,this.setTexture2D=ae,this.setTexture2DArray=P,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bi(e,t){function n(n,r=``){let i,a=De.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var xi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Si=`
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

}`,Ci=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new T(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new N({vertexShader:xi,fragmentShader:Si,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new R(new O(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wi=class extends Pe{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,l=null,u=null,d=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,v=new Ci,y={},b=t.getContextAttributes(),x=null,S=null,C=[],w=[],E=new H,D=null,O=new Fe;O.viewport=new be;let k=new Fe;k.viewport=new be;let A=[O,k],M=new je,N=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Ee,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Ee,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Ee,C[e]=t),t.getHandSpace()};function te(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}N=null,ee=null,v.reset();for(let e in y)delete y[e];e.setRenderTarget(x),m=null,p=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&c(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&c(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(c){if(r=c,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?ie:$e,a=b.stencil?we:Be);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),p=d.createProjectionLayer(s),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Se(p.textureWidth,p.textureHeight,{format:_,type:j,depthTexture:new f(p.textureWidth,p.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Se(m.framebufferWidth,m.framebufferHeight,{format:_,type:j,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),l=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new K,oe=new K;function P(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;v.texture!==null&&(v.depthNear>0&&(t=v.depthNear),v.depthFar>0&&(n=v.depthFar)),M.near=k.near=O.near=t,M.far=k.far=O.far=n,(N!==M.near||ee!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,ee=M.far),M.layers.mask=e.layers.mask|6,O.layers.mask=M.layers.mask&-5,k.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;se(M,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?P(M,O,k):M.projectionMatrix.copy(O.projectionMatrix),ce(e,M,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=le*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(p!==null||m!==null)return s},this.setFoveation=function(e){s=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)},this.getCameraTexture=function(e){return y[e]};let F=null;function ue(t,i){if(u=i.getViewerPose(l||a),h=i,u!==null){let t=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(m!==null)a=m.getViewport(r);else{let t=d.getViewSubImage(p,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=A[n];o===void 0&&(o=new Fe,o.layers.enable(n),o.viewport=new be,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&v.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new T,y[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,l||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new gt;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Ti=new Ae,Ei=new V;Ei.set(-1,0,0,0,1,0,0,0,1);function Di(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ot(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ti.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ei),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Oi(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function u(e,n){let o=i[e.id];o===void 0&&(_(e),o=d(e),i[e.id]=o,e.addEventListener(`dispose`,y));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(p(e),a[e.id]=c)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)m(t[n],e,n,a);else m(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(t,n,r,i){if(g(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);h(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function h(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function g(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function _(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?c(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):c(`WebGLRenderer: Unsupported uniform value type.`,e),t}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function b(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:l,update:u,dispose:b}}var ki=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function ji(){return Ai===null&&(Ai=new o(ki,16,16,ne,se),Ai.name=`DFG_LUT`,Ai.minFilter=Ne,Ai.magFilter=Ne,Ai.wrapS=B,Ai.wrapT=B,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Mi=class{constructor(e={}){let{canvas:t=ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=j}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let v=g,y=new Set([S,s,u]),b=new Set([j,Be,me,we,We,Me]),x=new Uint32Array(4),C=new Int32Array(4),w=new K,T=null,E=null,D=[],O=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,ee=null,te=null,ne=null,ie=null;this._outputColorSpace=h;let ae=0,oe=0,P=null,ce=-1,le=null,F=new be,ue=new be,de=null,fe=new z(0),L=0,pe=t.width,ge=t.height,ve=1,ye=null,xe=null,Ce=new be(0,0,pe,ge),Te=new be(0,0,pe,ge),Ee=!1,Oe=new M,R=!1,je=!1,Ne=new Ae,Pe=new K,Fe=new be,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Re(){return P===null?ve:1}let B=n;function ze(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),B===null){let t=`webgl2`;if(B=ze(t,e),B===null)throw ze(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw I(`WebGLRenderer: `+e.message),e}let V,H,U,Ve,W,G,He,Ue,Ge,Ke,qe,Je,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot;function st(){V=new Yt(B),V.init(),it=new bi(B,V),H=new Tt(B,V,e,it),U=new vi(B,V),H.reversedDepthBuffer&&m&&U.buffers.depth.setReversed(!0),te=B.createFramebuffer(),ne=B.createFramebuffer(),ie=B.createFramebuffer(),Ve=new Qt(B),W=new Qr,G=new yi(B,V,U,W,H,it,Ve),He=new Jt(A),Ue=new _t(B),at=new Ct(B,Ue),Ge=new Xt(B,Ue,Ve,at),Ke=new en(B,Ge,Ue,at,Ve),tt=new $t(B,H,G),Qe=new Et(W),qe=new Zr(A,He,V,H,at,Qe),Je=new Di(A,W),Xe=new ni,Ze=new li(V),et=new St(A,He,U,Ke,_,l),$e=new _i(A,Ke,H),ot=new Oi(B,Ve,H,U),nt=new wt(B,V,Ve),rt=new Zt(B,V,Ve),Ve.programs=qe.programs,A.capabilities=H,A.extensions=V,A.properties=W,A.renderLists=Xe,A.shadowMap=$e,A.state=U,A.info=Ve}st(),v!==1009&&(k=new nn(v,t.width,t.height,o,r,i));let ct=new wi(A,B);this.xr=ct,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=V.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=V.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(pe,ge,!1))},this.getSize=function(e){return e.set(pe,ge)},this.setSize=function(e,n,r=!0){if(ct.isPresenting){c(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,ge=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*ve,ge*ve).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,ge=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009){I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){c(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}k.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),U.viewport(F.copy(Ce).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),U.scissor(ue.copy(Te).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){U.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=y.has(t)}if(e){let e=P.texture.type,t=b.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(x[0]=i,x[1]=a,x[2]=o,x[3]=r,B.clearBufferuiv(B.COLOR,0,x)):(C[0]=i,C[1]=a,C[2]=o,C[3]=r,B.clearBufferiv(B.COLOR,0,C))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ee=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),et.dispose(),Xe.dispose(),Ze.dispose(),W.dispose(),He.dispose(),Ke.dispose(),at.dispose(),ot.dispose(),qe.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,vt),ct.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),_e(`WebGLRenderer: Context Lost.`),N=!0}function ut(){_e(`WebGLRenderer: Context Restored.`),N=!1;let e=Ve.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;st(),Ve.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function dt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),W.remove(e)}function mt(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ie);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ft(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ue.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*Re()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*Re()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh)if(V.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,jt(e,t,n),e.side=0,e.needsUpdate=!0,jt(e,t,n),e.side=2):jt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),E=Ze.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ht(a,n,e),r.add(a)}else ht(t,n,e),r.add(t)}),E=O.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){W.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}V.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let q=null;function J(e){q&&q(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new gt;bt.setAnimationLoop(J),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){q=e,ct.setAnimationLoop(e),e===null?bt.stop():bt.start()},ct.addEventListener(`sessionstart`,vt),ct.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(N===!0)return;ee!==null&&ee.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=k!==null&&(P===null||n)&&k.begin(A,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,P),E=Ze.get(e,O.length),E.init(t),E.state.textureUnits=G.getTextureUnits(),O.push(E),Ne.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(Ne,Ye,t.reversedDepth),je=this.localClippingEnabled,R=Qe.init(this.clippingPlanes,je),T=Xe.get(e,D.length),T.init(),D.push(T),ct.enabled===!0&&ct.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,A.sortObjects)}xt(e,t,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(ye,xe,t.reversedDepth),Le=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Le&&et.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),R===!0&&Qe.beginShadows();let i=E.state.shadowsArray;if($e.render(i,e,t),R===!0&&Qe.endShadows(),(r&&k.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ot(n,r,e,a)}Le&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Dt(T,e,n,n.viewport)}}else r.length>0&&Ot(n,r,e,t),Le&&et.render(e),Dt(T,e,t)}P!==null&&oe===0&&(G.updateMultisampleRenderTarget(P),G.updateRenderTargetMipmap(P)),r&&k.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),at.resetDefaultState(),ce=-1,le=null,O.pop(),O.length>0?(E=O[O.length-1],G.setTextureUnits(E.state.textureUnits),R===!0&&Qe.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null,ee!==null&&ee.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)E.pushLightProbeGrid(e);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Oe.intersectsSprite(e)){r&&Fe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ne);let t=Ke.update(e),i=e.material;i.visible&&T.push(e,t,i,n,Fe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Oe.intersectsObject(e))){let t=Ke.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Fe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Fe.copy(e.boundingSphere.center)),Fe.applyMatrix4(e.matrixWorld).applyMatrix4(Ne)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&T.push(e,t,s,n,Fe.z,o)}}else i.visible&&T.push(e,t,i,n,Fe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function Dt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),R===!0&&Qe.setGlobalState(A.clippingPlanes,n),r&&U.viewport(F.copy(r)),i.length>0&&kt(i,t,n),a.length>0&&kt(a,t,n),o.length>0&&kt(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[r.id]===void 0){let e=V.has(`EXT_color_buffer_half_float`)||V.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[r.id]=new Se(1,1,{generateMipmaps:!0,type:e?se:j,minFilter:he,samples:Math.max(4,H.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}let a=E.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(fe),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear(),Le&&et.render(n);let u=A.toneMapping;A.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),R===!0&&Qe.setGlobalState(A.clippingPlanes,r),kt(e,n,r),G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a),V.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,At(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,l),A.setClearColor(fe,L),d!==void 0&&(r.viewport=d),A.toneMapping=u}function kt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&At(o,t,n,s,l,c)}}function At(e,t,n,r,i,a){e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function jt(e,t,n){t.isScene!==!0&&(t=Ie);let r=W.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,E.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Nt(e,s),d}else s.uniforms=qe.getUniforms(e),ee!==null&&e.isNodeMaterial&&ee.build(e,n,s),e.onBeforeCompile(s,A),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),Nt(e,s),r.needsLights=Lt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=E.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ur.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Nt(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Pt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function Ft(e,t,n,r,i){t.isScene!==!0&&(t=Ie),G.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:De.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=W.get(r),y=E.state.lights;if(R===!0&&(je===!0||e!==le)){let t=e===le&&r.id===ce;Qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=jt(r,t,i),ee&&r.isNodeMaterial&&ee.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),D=v.uniforms;if(U.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=Pt(E.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,Pe.setFromMatrixPosition(e.matrixWorld)),H.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,G),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,G),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,G)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,G))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,G),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,G),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,G));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&tt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=ji()),C){if(T.setValue(B,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&It(D,w),a&&r.fog===!0&&Je.refreshFogUniforms(D,a),Je.refreshMaterialUniforms(D,r,ve,ge,E.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}ur.upload(B,Mt(v),D,G)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ur.upload(B,Mt(v),D,G),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function It(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=W.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,U.viewport(F),U.scissor(ue),U.setScissorTest(de),ce=-1;return}if(o.__webglFramebuffer===void 0)G.setupRenderTarget(e);else if(o.__hasExternalTextures)G.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);G.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&G.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else F.copy(Ce).multiplyScalar(ve).floor(),ue.copy(Te).multiplyScalar(ve).floor(),de=Ee;if(n!==0&&(r=te),U.bindFramebuffer(B.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(F),U.scissor(ue),U.setScissorTest(de),i){let r=W.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=W.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=W.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}ce=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!H.textureFormatReadable(c)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!H.textureTypeReadable(l)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=P===null?null:W.get(P).__webglFramebuffer;U.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!H.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!H.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,it.convert(l),it.convert(u),0);let f=P===null?null:W.get(P).__webglFramebuffer;U.bindFramebuffer(B.FRAMEBUFFER,f);let p=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await re(B,p,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.deleteBuffer(d),B.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;G.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(G.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(G.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(G.setTexture2D(t,0),v=B.TEXTURE_2D),U.activeTexture(B.TEXTURE0),U.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(B.UNPACK_ROW_LENGTH),b=U.getParameter(B.UNPACK_IMAGE_HEIGHT),x=U.getParameter(B.UNPACK_SKIP_PIXELS),S=U.getParameter(B.UNPACK_SKIP_ROWS),C=U.getParameter(B.UNPACK_SKIP_IMAGES);U.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(B.UNPACK_SKIP_PIXELS,l),U.pixelStorei(B.UNPACK_SKIP_ROWS,u),U.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);U.bindFramebuffer(B.READ_FRAMEBUFFER,null),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(B.READ_FRAMEBUFFER,ne),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);U.bindFramebuffer(B.READ_FRAMEBUFFER,null),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(B.UNPACK_ROW_LENGTH,y),U.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(B.UNPACK_SKIP_PIXELS,x),U.pixelStorei(B.UNPACK_SKIP_ROWS,S),U.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&G.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?G.setTextureCube(e,0):e.isData3DTexture?G.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?G.setTexture2DArray(e,0):G.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){ae=0,oe=0,P=null,U.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),t.unpackColorSpace=De._getUnpackColorSpace()}},Ni=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness===void 0?.003:t.defaultThickness,r=new z().fromArray(t.defaultColor===void 0?[0,0,0]:t.defaultColor),i=t.defaultAlpha===void 0?1:t.defaultAlpha,a=t.defaultKeepAlive!==void 0&&t.defaultKeepAlive,o={},s={},c={},l={outlineThickness:{value:n},outlineColor:{value:r},outlineAlpha:{value:i}},u=[`#include <common>`,`#include <uv_pars_vertex>`,`#include <displacementmap_pars_vertex>`,`#include <fog_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <logdepthbuf_pars_vertex>`,`#include <clipping_planes_pars_vertex>`,`uniform float outlineThickness;`,`vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {`,`	float thickness = outlineThickness;`,`	const float ratio = 1.0;`,`	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );`,`	vec4 norm = normalize( pos - pos2 );`,`	return pos + norm * thickness * pos.w * ratio;`,`}`,`void main() {`,`	#include <uv_vertex>`,`	#include <beginnormal_vertex>`,`	#include <morphnormal_vertex>`,`	#include <skinbase_vertex>`,`	#include <skinnormal_vertex>`,`	#include <begin_vertex>`,`	#include <morphtarget_vertex>`,`	#include <skinning_vertex>`,`	#include <displacementmap_vertex>`,`	#include <project_vertex>`,`	vec3 outlineNormal = - objectNormal;`,`	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );`,`	#include <logdepthbuf_vertex>`,`	#include <clipping_planes_vertex>`,`	#include <fog_vertex>`,`}`].join(`
`),d=[`#include <common>`,`#include <fog_pars_fragment>`,`#include <logdepthbuf_pars_fragment>`,`#include <clipping_planes_pars_fragment>`,`uniform vec3 outlineColor;`,`uniform float outlineAlpha;`,`void main() {`,`	#include <clipping_planes_fragment>`,`	#include <logdepthbuf_fragment>`,`	gl_FragColor = vec4( outlineColor, outlineAlpha );`,`	#include <tonemapping_fragment>`,`	#include <colorspace_fragment>`,`	#include <fog_fragment>`,`	#include <premultiplied_alpha_fragment>`,`}`].join(`
`);function f(){return new N({type:`OutlineEffect`,uniforms:de.merge([J.fog,J.displacementmap,l]),vertexShader:u,fragmentShader:d,side:1})}function p(e){let t=o[e.uuid];return t===void 0&&(t={material:f(),used:!0,keepAlive:a,count:0},o[e.uuid]=t),t.used=!0,t.material}function m(e){let t=p(e);return s[t.uuid]=e,b(t,e),t}function h(e){let t=e.geometry,n=t!==void 0&&t.attributes.normal!==void 0;return e.isMesh===!0&&e.material!==void 0&&n===!0}function g(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=m(e.material[t]);else e.material=m(e.material);c[e.uuid]=e.onBeforeRender,e.onBeforeRender=v}}function _(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=s[e.material[t].uuid];else e.material=s[e.material.uuid];e.onBeforeRender=c[e.uuid]}}function v(e,t,n,r,i){let a=s[i.uuid];a!==void 0&&y(i,a)}function y(e,t){let n=t.userData.outlineParameters;e.uniforms.outlineAlpha.value=t.opacity,n!==void 0&&(n.thickness!==void 0&&(e.uniforms.outlineThickness.value=n.thickness),n.color!==void 0&&e.uniforms.outlineColor.value.fromArray(n.color),n.alpha!==void 0&&(e.uniforms.outlineAlpha.value=n.alpha)),t.displacementMap&&(e.uniforms.displacementMap.value=t.displacementMap,e.uniforms.displacementScale.value=t.displacementScale,e.uniforms.displacementBias.value=t.displacementBias)}function b(e,t){if(e.name===`invisible`)return;let n=t.userData.outlineParameters;e.fog=t.fog,e.toneMapped=t.toneMapped,e.premultipliedAlpha=t.premultipliedAlpha,e.displacementMap=t.displacementMap,n===void 0?(e.transparent=t.transparent,e.visible=t.visible):(e.visible=t.visible===!1?!1:n.visible===void 0||n.visible,e.transparent=n.alpha!==void 0&&n.alpha<1||t.transparent,n.keepAlive!==void 0&&(o[t.uuid].keepAlive=n.keepAlive)),(t.wireframe===!0||t.depthTest===!1)&&(e.visible=!1),t.clippingPlanes&&(e.clipping=!0,e.clippingPlanes=t.clippingPlanes,e.clipIntersection=t.clipIntersection,e.clipShadows=t.clipShadows),e.version=t.version}function x(){let e;e=Object.keys(s);for(let t=0,n=e.length;t<n;t++)s[e[t]]=void 0;e=Object.keys(c);for(let t=0,n=e.length;t<n;t++)c[e[t]]=void 0;e=Object.keys(o);for(let t=0,n=e.length;t<n;t++){let n=e[t];o[n].used===!1?(o[n].count++,o[n].keepAlive===!1&&o[n].count>60&&delete o[n]):(o[n].used=!1,o[n].count=0)}}this.render=function(t,n){if(this.enabled===!1){e.render(t,n);return}let r=e.autoClear;e.autoClear=this.autoClear,e.render(t,n),e.autoClear=r,this.renderOutline(t,n)},this.renderOutline=function(t,n){let r=e.autoClear,i=t.matrixWorldAutoUpdate,a=t.background,o=e.shadowMap.enabled;t.matrixWorldAutoUpdate=!1,t.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,t.traverse(g),e.render(t,n),t.traverse(_),x(),t.matrixWorldAutoUpdate=i,t.background=a,e.autoClear=r,e.shadowMap.enabled=o},this.setSize=function(t,n){e.setSize(t,n)}}},Pi=`human-resources.frontend`;function Fi(){return{colourVariant:{machines:0,ancients:0},overlayVisible:!0,cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}}function Ii(e=typeof window>`u`?void 0:window.localStorage){let t=Fi();try{let n=e?.getItem(Pi);if(!n)return t;let r=JSON.parse(n),i=e=>+(e===1);return{colourVariant:{machines:i(r.colourVariant?.machines),ancients:i(r.colourVariant?.ancients)},overlayVisible:r.overlayVisible!==!1,cityLighting:r.cityLighting!==!1,enhancedShadows:r.enhancedShadows!==!1,ambientOcclusion:r.ambientOcclusion===!0}}catch{return t}}function Li(e,t=typeof window>`u`?void 0:window.localStorage){try{t?.setItem(Pi,JSON.stringify(e))}catch{}}var Ri=[`machines`,`ancients`];function zi(e){return e===`machines`?`ancients`:`machines`}var Bi={humansPips:40,segments:2,pipsPerSegment:20},Vi={machines:{id:`machines`,name:`Machines`,meterLabel:`ENERGY`,harvest:`deposit`,primaryOrder:`Deploy`},ancients:{id:`ancients`,name:`Ancient Ones`,meterLabel:`INSANITY`,harvest:`immediate`,primaryOrder:`Unidentified order (frame_0057)`}};function Hi(e=Bi){return e.segments*e.pipsPerSegment}var Ui=1e3/30,Wi=class{sim;stepMs;accumulatorMs=0;steps=0;dropped=0;constructor(e,t=Ui){this.sim=e,this.stepMs=t}get stepCount(){return this.steps}get droppedMs(){return this.dropped}advance(e){if(!Number.isFinite(e)||e<=0)return this.accumulatorMs/this.stepMs;this.accumulatorMs+=e;let t=0;for(;this.accumulatorMs>=this.stepMs&&t<5;)this.sim.step(),this.steps++,t++,this.accumulatorMs-=this.stepMs;return this.accumulatorMs>=this.stepMs&&(this.dropped+=this.accumulatorMs,this.accumulatorMs=0),this.accumulatorMs/this.stepMs}};function Gi(e,t,n){if(!(t>0)||n<=0||e<=0)return 0;if(e>=t)return n;let r=Math.floor(e/t*n);return Math.min(Math.max(r,1),n-1)}function Ki(e){let t=Math.floor(e/30),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`}function qi(e){let{segments:t,pipsPerSegment:n}=Bi,r=[];for(let i=0;i<t;i++){let t=e-i*n;r.push({pips:n,filled:Math.min(Math.max(Math.floor(t),0),n),accent:i>0})}return r}function Ji({world:e,selected:t,banner:n}){let r=Vi[e.playerFaction],{humans:i,humansCap:a,charge:o,chargeCap:s}=e.resources,c=t>0;return{faction:r.id,factionName:r.name,humans:{value:i,cap:a,trough:{pips:Bi.humansPips,filled:Gi(i,a,Bi.humansPips),accent:!1}},meter:{label:r.meterLabel,value:o,cap:s,segmentsReady:e.resources.segmentsReady,troughs:qi(o),dividerLit:o>Bi.pipsPerSegment},clock:Ki(e.tick),alert:e.army.units.some(e=>e.attackCooldown>0),selected:t,commands:[{id:`primary`,label:r.primaryOrder,enabled:r.id===`machines`&&c},{id:`regroup`,label:`Regroup — unresolved reading`,enabled:!1},{id:`scatter`,label:`Scatter — unresolved reading`,enabled:!1},{id:`cancel`,label:`Stop`,enabled:c}],banner:n}}var Yi={machines:{line:`#70e3bd`,chrome:`#25ae8a`,plate:`#3e6354`,onPlate:`#70e3bd`,pipOn:`#a2f1ab`,pipGap:`#0a5913`,pipOff:`#9e9da2`,pipOffGap:`#4c4d52`,accent:`#ffb020`,label:`#f2fff6`,warn:`#e6483d`,go:`#7fe3b0`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,primaryIcon:{width:24,height:24,inner:`<rect x="9" y="4" width="6" height="11" fill="#ffffff"/>
      <rect x="5" y="17" width="14" height="1.8" fill="#ffffff"/>
      <path d="M2 12 L6 8.5 V15.5 Z" fill="var(--line)"/>
      <path d="M22 12 L18 8.5 V15.5 Z" fill="var(--line)"/>`},band:`rgba(61, 61, 61, 0.86)`,onBand:`#f2fff6`,railPx:2,divider:`rgba(255, 255, 255, 0.45)`,chamferPx:22,radius:`0`,outline:null,cap:{width:92,height:52,inner:`<g fill="none" stroke="var(--line)" stroke-width="1.7" stroke-linejoin="miter">
        <path d="M92 3 H58 L40 21 H16 L6 31"/>
        <path d="M92 10 H55 L38 27 H24"/>
        <path d="M92 38 H64 L54 48 H12"/>
        <rect x="44" y="31" width="9" height="7"/>
      </g>
      <g fill="none" stroke="var(--line)" stroke-width="2">
        <path d="M92 6 L70 30"/>
        <path d="M92 13 L74 33"/>
        <path d="M92 20 L78 36"/>
      </g>`},badge:{width:24,height:24,inner:`<path d="M9 5 L18 12 L9 19 Z" fill="var(--line)"/>`}},ancients:{line:`#e0c583`,chrome:`#c0a468`,plate:`#d7c193`,onPlate:`#5a3e25`,pipOn:`#ecff81`,pipGap:`#485a00`,pipOff:`#9e9da2`,pipOffGap:`#4c4d52`,accent:`#ffa600`,label:`#f6f07a`,warn:`#e2564a`,go:`#dbf25c`,font:`Georgia, "Times New Roman", serif`,primaryIcon:{width:24,height:24,inner:`<path d="M6 4 H16 L18 6 V19 H8 L6 17 Z" fill="#ffffff" stroke="var(--outline)"
        stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M5.5 16.5 L18.5 7.5" stroke="#ffffff" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M5.5 16.5 L18.5 7.5" stroke="var(--outline)" stroke-width="1"
        stroke-linecap="round" opacity="0.55"/>`},band:`rgba(146, 146, 146, 0.88)`,onBand:`#f6f07a`,railPx:5,divider:`rgba(60, 42, 26, 0.7)`,chamferPx:0,radius:`5px`,outline:`#5a3e25`,cap:{width:104,height:56,inner:`<path d="M104 40 H34" stroke="var(--line)" stroke-width="6" stroke-linecap="round"
        fill="none"/>
      <g fill="var(--line)" stroke="var(--outline)" stroke-width="2" stroke-linejoin="round">
        <path d="M104 1 C70 1 46 8 30 21 C17 32 15 43 23 48 C30 53 41 52 46 46
                 C36 49 27 45 28 36 C30 24 55 13 104 21 Z"/>
        <path d="M62 11 C45 20 34 31 38 40 C28 33 33 20 52 8 Z"/>
        <ellipse cx="78" cy="40" rx="8" ry="6"/>
      </g>`},badge:{width:30,height:30,inner:`<g fill="none" stroke="var(--outline)" stroke-width="1.8" stroke-linecap="round">
        <path d="M6 9 C3 6 5 2 8 3 C11 4 10 8 7 8"/>
        <path d="M24 21 C27 24 25 28 22 27 C19 26 20 22 23 22"/>
      </g>
      <path d="M15 6 L23 13 L15 24 L7 13 Z" fill="#f0f070" stroke="var(--outline)"
        stroke-width="1.6"/>`}}};function Xi(e){return e.winner?e.winner===e.playerFaction?{title:`VICTORY`,body:`The ${Vi[zi(e.winner)].name} Harbinger is destroyed. The shard is yours.`,tone:`won`}:{title:`DEFEAT`,body:`Your Harbinger is destroyed. The ${Vi[e.winner].name} hold the shard.`,tone:`lost`}:{title:`STALEMATE`,body:`Both Harbingers fell on the same step. Neither side can command what is left.`,tone:`drawn`}}var Zi={machines:[`Humans in, Progress out. We don't do feelings, we do throughput.`,`Collect. Convert. Repeat. It's not cruelty, it's an assembly line.`,`No detours, no snacking. Just humans on a conveyor belt to somewhere worse.`,`Efficiency is a love language.`],ancients:[`Chant a little, eat a lot.`,`Every summoning circle doubles as a dinner table.`,`The stars aligned. So did our appetite.`,`Insanity is a side effect. Also the main course.`]};function Qi(e){let t=Zi[e];return t[Math.floor(Math.random()*t.length)]}var $i={machines:`ENERGY`,ancients:`INSANITY`},ea=class{root;constructor(e,t){sa(),this.root=ta(`div`,`menu`),this.root.append(aa());let n=ta(`div`,`menu-panel`),r=document.createElement(`h1`);r.className=`menu-title`,r.innerHTML=`HUMAN<br>RESOURCES`,n.append(r);let i=ta(`div`,`menu-tagline`);i.append(ta(`span`,`menu-rule`));let a=ta(`span`,``);a.textContent=`Choose your apocalypse`,i.append(a),n.append(i);let o=ta(`div`,`menu-columns`),s=ta(`div`,`menu-cards`);for(let e of[`machines`,`ancients`])s.append(this.buildCard(e,t.onStart));o.append(s),o.append(this.buildActions(t)),n.append(o),this.root.append(n),e.append(this.root)}buildCard(e,t){let n=Vi[e],r=Yi[e],i=document.createElement(`button`);i.type=`button`,i.className=`menu-card`,i.dataset.faction=e,i.style.setProperty(`--card-line`,r.line),i.style.setProperty(`--card-font`,r.font),i.style.setProperty(`--card-pip-on`,r.pipOn),i.style.setProperty(`--card-pip-gap`,r.pipGap),i.style.setProperty(`--card-pip-off`,r.pipOff),i.style.setProperty(`--card-accent`,r.accent),e===`ancients`?(i.style.setProperty(`--card-fill`,r.plate),i.style.setProperty(`--card-ink`,`#4a3520`),i.style.setProperty(`--card-body`,`#20180e`),i.style.setProperty(`--card-label`,`#2f2214`)):(i.style.setProperty(`--card-fill`,`rgba(20, 26, 24, 0.55)`),i.style.setProperty(`--card-ink`,`#f2fff6`),i.style.setProperty(`--card-body`,`#dff3ea`),i.style.setProperty(`--card-label`,r.line));let a=ta(`div`,`menu-card-head`),o=ta(`div`,`menu-card-name`);o.textContent=n.name,a.append(o,ia(e)),i.append(a);let s=ta(`div`,`menu-card-meter`),c=ta(`span`,`menu-card-meter-label`);c.textContent=$i[e],s.append(c,ra(8,e===`ancients`?6:5,e===`ancients`?2:0)),i.append(s);let l=ta(`div`,`menu-card-copy`);return l.textContent=Qi(e),i.append(l),i.addEventListener(`click`,()=>t(e)),i}buildActions(e){let t=ta(`nav`,`menu-actions`);if(e.saved){let n=Vi[e.saved.faction];t.append(na(`Resume`,`${n.name} · ${e.saved.clock}`,e.onResume))}let n=e.slotCount??0;if(n>0&&t.append(na(`Select save`,n===1?`1 slot`:`${n} slots`,e.onSelectSave)),t.append(na(`Settings`,``,e.onSettings)),e.onExit&&t.append(na(`Exit`,``,e.onExit,`quiet`)),!e.saved&&n===0){let e=ta(`div`,`menu-note`);e.textContent=`No saved match`,t.prepend(e)}return t}dispose(){this.root.remove()}};function ta(e,t){let n=document.createElement(e);return n.className=t,n}function na(e,t,n,r=``){let i=document.createElement(`button`);i.type=`button`,i.className=r?`menu-action ${r}`:`menu-action`;let a=ta(`span`,`menu-action-label`);a.textContent=e;let o=ta(`span`,`menu-action-meta`);return o.textContent=t,i.append(a,o),i.addEventListener(`click`,n),i}function ra(e,t,n){let r=ta(`div`,`menu-trough`);for(let i=0;i<e;i++){let e=ta(`i`,`menu-pip`);i<t&&e.classList.add(n>0&&i>=t-n?`accent`:`on`),r.append(e)}return r}function ia(e){let t=Yi[e],n=t.cap,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,e===`ancients`?`78`:`92`),r.setAttribute(`height`,e===`ancients`?`42`:`52`),r.classList.add(`menu-card-cap`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function aa(){let e=[34,52,41,68,47,82,58,39,71,50,88,44,63,36,76,55,42,66,48,80],t=100/e.length,n=e.map((e,n)=>`<rect x="${n*t}" y="${100-e}" width="${t+.3}" height="${e}"/>`).join(``),r=ta(`div`,`menu-skyline`);return r.innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <g fill="#050302">${n}</g>
  </svg>`,r}var oa=!1;function sa(){if(oa)return;oa=!0;let e=document.createElement(`style`);e.textContent=ca,document.head.append(e)}var ca=`
.menu, .fe {
  position: fixed;
  inset: 0;
  z-index: 40;
  overflow-x: hidden;
  /* Near-black. The ember wash is contained at the horizon; see the class comment in menu.ts. */
  background: #080604;
  font-family: "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif;
  color: #fffdf7;
}
.menu::after, .fe::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 32%;
  pointer-events: none;
  background: linear-gradient(to top, rgba(209, 76, 9, 0.4), rgba(138, 44, 4, 0.16) 42%, transparent);
}

.menu-skyline { position: absolute; left: -2%; right: -2%; bottom: 0; height: 19%; opacity: 0.95; }
.menu-skyline svg { display: block; width: 100%; height: 100%; }

.menu-panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 26px;
  min-height: 100%;
  padding: clamp(40px, 8vh, 96px) clamp(32px, 7.8vw, 150px);
  box-sizing: border-box;
}

/*
 * The extrude, faked with stacked shadows.
 *
 * frame_0350 offsets the orange body down and to the LEFT of each white face and takes it a long
 * way — the depth is about a third of the cap height, not a drop shadow. Twelve steps rather than
 * eight, because at this size the shorter stack banded visibly.
 */
.menu-title {
  margin: 0;
  font-size: clamp(52px, 8.8vw, 168px);
  font-weight: 900;
  line-height: 0.84;
  letter-spacing: -0.005em;
  color: #fffdf7;
  text-shadow:
    -3px 3px 0 #f2600f, -6px 6px 0 #ee5d0e, -9px 9px 0 #e9590d, -12px 12px 0 #e2550c,
    -15px 15px 0 #d94f0b, -18px 18px 0 #cd4909, -21px 21px 0 #c04208, -24px 24px 0 #b13b07,
    -27px 27px 0 #a03406, -30px 30px 0 #8f2d05, -33px 33px 0 #7c2504, -36px 36px 0 #691e03,
    -40px 44px 40px rgba(0, 0, 0, 0.85);
}
.menu-tagline { display: flex; align-items: center; gap: 16px; font-size: clamp(13px, 1.3vw, 24px); letter-spacing: 0.42em; text-transform: uppercase; color: #ffcf9a; }
.menu-rule { width: 52px; height: 2px; background: #f2600f; }

.menu-columns { display: flex; gap: 40px; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; margin-top: auto; }
.menu-cards { display: flex; gap: 26px; flex-wrap: wrap; }

.menu-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 520px;
  max-width: 100%;
  padding: 26px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: left;
  font-family: var(--card-font);
  color: var(--card-body);
  background: var(--card-fill);
  border: 2px solid var(--card-line);
  transition: transform 110ms ease, background 110ms ease;
}
.menu-card[data-faction="machines"] {
  /* Chamfered opposite corners — straight lines and 45° steps, as the Machine ornament is. */
  clip-path: polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px));
}
.menu-card[data-faction="ancients"] { border-width: 5px; border-radius: 20px; }
.menu-card:hover, .menu-card:focus-visible { transform: translateY(-3px); outline: none; }
.menu-card[data-faction="machines"]:hover { background: rgba(37, 174, 138, 0.22); }
.menu-card[data-faction="ancients"]:hover { background: #e6d3a8; }

.menu-card-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.menu-card-name {
  font-size: 52px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.06em;
  color: var(--card-ink);
  /* Nowrap because "Ancient Ones" is a two-word serif name and breaking it mid-name next to a
     one-word MACHINES made the pair read as different sizes. */
  white-space: nowrap;
}
.menu-card[data-faction="ancients"] .menu-card-name { font-weight: 700; letter-spacing: 0.02em; }
.menu-card-cap { flex: none; display: block; }
.menu-card[data-faction="ancients"] .menu-card-cap { transform: scaleX(-1); }

.menu-card-meter { display: flex; align-items: center; gap: 12px; }
.menu-card-meter-label { font-size: 17px; letter-spacing: 0.18em; color: var(--card-label); }
.menu-trough { display: flex; gap: 4px; padding: 2px 3px; background: var(--card-pip-gap); border: 1px solid rgba(255, 255, 255, 0.42); }
.menu-pip { width: 5px; height: 15px; background: var(--card-pip-off); }
.menu-pip.on { background: var(--card-pip-on); }
.menu-pip.accent { background: var(--card-accent); }

.menu-card-copy { font-size: 19px; line-height: 1.5; text-wrap: pretty; }

.menu-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; min-width: 360px; }
.menu-action {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 14px;
  width: 100%;
  padding: 11px 0;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 189, 82, 0.28);
  font-family: inherit;
  font-size: clamp(18px, 1.6vw, 30px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fffdf7;
}
.menu-action:hover, .menu-action:focus-visible { color: #ffbd52; outline: none; }
.menu-action.quiet { border-bottom: none; color: rgba(255, 253, 247, 0.5); }
.menu-action.quiet:hover { color: #e6483d; }
.menu-action-meta { min-width: 150px; text-align: left; font-size: 15px; letter-spacing: 0.06em; color: rgba(255, 207, 154, 0.6); }
.menu-note { font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255, 226, 195, 0.6); }

/*
 * The page document cannot scroll while a game is mounted, so the title screen must be its own
 * scroll container.  This also keeps keyboard focus reachable when a short viewport puts the
 * actions below the faction cards.
 */
.menu { overflow-y: auto; overscroll-behavior: contain; }

@media (max-width: 1180px) {
  .menu-panel { padding-inline: clamp(24px, 5vw, 64px); }
  .menu-columns { gap: 28px; }
  .menu-card { width: min(460px, calc(50vw - 52px)); }
  .menu-actions { min-width: min(360px, 100%); }
}

@media (max-width: 760px) {
  .menu-panel { gap: 20px; padding: 28px 20px 36px; }
  .menu-title { font-size: clamp(42px, 15vw, 82px); }
  .menu-tagline { gap: 10px; font-size: 12px; letter-spacing: 0.22em; }
  .menu-rule { width: 32px; }
  .menu-columns, .menu-cards { width: 100%; }
  .menu-columns { gap: 24px; margin-top: 12px; }
  .menu-cards { gap: 16px; }
  .menu-card { width: 100%; padding: 20px; gap: 11px; }
  .menu-card-name { font-size: clamp(28px, 8vw, 42px); }
  .menu-card-cap { width: 58px; height: auto; }
  .menu-card[data-faction="ancients"] .menu-card-cap { width: 52px; }
  .menu-card-copy { font-size: 16px; }
  .menu-card-meter-label { font-size: 14px; }
  .menu-actions { align-items: stretch; min-width: 0; }
  .menu-action { justify-content: space-between; font-size: 18px; }
  .menu-action-meta { min-width: 0; text-align: right; font-size: 13px; }
}
`;function la(e,t,n){if(t<1)throw Error(`A dialog needs at least one action`);return(e+n+t)%t}var ua=[[`Pan`,`WASD / arrows · middle drag`],[`Zoom`,`wheel`],[`Select · box select`,`left drag`],[`Move order`,`right click`],[`Attack-move`,`A, then left click`],[`Add to selection`,`shift + click`],[`Control group`,`shift + digit`],[`Clear selection · exit`,`Esc`],[`Stop`,`Q`],[`Destroy selected units`,`Delete`],[`Select idle harvesters`,`F`],[`Center on Harbinger`,`C`],[`Quick save · load`,`F5 · F9`]],da=class{root;constructor(e,t,n){Da(),this.root=ha(`SETTINGS`);let r=Y(`div`,`fe-body`);r.append(ga(`Machines colour`,`Recolours Machine units and structures. Applies to your next match.`,_a(`machines`,t.colourVariant.machines,n.onColourVariant)),ga(`Ancients colour`,`Recolours Ancient units and structures. Applies to your next match.`,_a(`ancients`,t.colourVariant.ancients,n.onColourVariant)),ga(`Diagnostic overlay`,`fps, sim Hz, blocked and stalled counts, nav reachability probe.`,ya(t.overlayVisible,n.onToggleOverlay)),ga(`City lighting`,`Warm directional sunlight and cool ambient fill. Off restores the original even lighting rig.`,ya(t.cityLighting,n.onToggleCityLighting)),ga(`Enhanced shadows`,`Soft mapped shadows on city geometry. Off restores the original projected-shadow treatment.`,ya(t.enhancedShadows,n.onToggleEnhancedShadows)),ga(`Ambient occlusion`,`Subtle local darkening at building bases and in narrow city gaps.`,ya(t.ambientOcclusion,n.onToggleAmbientOcclusion)));let i=Y(`section`,`fe-section`),a=Y(`div`,`fe-row-title`);a.textContent=`Controls`;let o=Y(`div`,`fe-row-sub`);o.textContent=`Reference only. Rebinding needs an options system that does not exist yet.`;let s=Y(`div`,`fe-controls`);for(let[e,t]of ua){let n=Y(`div`,`fe-control`),r=Y(`span`,``);r.textContent=e;let i=Y(`span`,`fe-keys`);i.textContent=t,n.append(r,i),s.append(n)}i.append(a,o,s),r.append(i),this.root.append(r,Ta(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},fa=class{root;constructor(e,t,n){Da(),this.root=ha(`SELECT SAVE`,t.length===1?`1 SLOT`:`${t.length} SLOTS`);let r=Y(`div`,`fe-slots`);if(t.length===0){let e=Y(`div`,`fe-empty`);e.textContent=`No saved matches`,r.append(e)}t.forEach((e,t)=>r.append(ba(e,t===0,n)));let i=Y(`p`,`fe-note`);i.textContent=`One slot for now: F5 always writes “quick”. Naming and multiple slots need a keyed-slot scheme in saveStore.ts — the envelope in sim/save.ts does not need to change.`,this.root.append(r,i,Ta(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},pa=class{root;onKey;constructor(e,t,n){Da(),this.root=Y(`div`,`fe-scrim`);let r=Y(`div`,`fe-dialog`),i=Y(`h2`,`fe-dialog-title`);i.textContent=`ABANDON MATCH?`;let a=Y(`p`,`fe-dialog-body`);a.textContent=`Returns to the title screen. The match is not saved unless you save it first.`;let o=Y(`p`,`fe-dialog-meta`);o.textContent=t?`Last quick save: ${t}`:`No quick save in this session.`;let s=Y(`div`,`fe-dialog-actions`),c=[wa(`Save and exit`,`primary`,n.onSaveAndExit),wa(`Exit anyway`,`danger`,n.onExitAnyway),wa(`Cancel`,`ghost`,n.onCancel)];s.append(...c),r.append(i,a,o,s),this.root.append(r),e.append(this.root);let l=c.length-1,u=(e,t=!1)=>{c[l]?.classList.remove(`selected`),l=e;let n=c[l];if(!n)throw Error(`Exit confirmation has no selected action`);n.classList.add(`selected`),t&&n.focus({preventScroll:!0})};for(let[e,t]of c.entries())t.addEventListener(`pointerenter`,()=>u(e)),t.addEventListener(`focus`,()=>u(e));u(l,!0),this.onKey=e=>{e.key===`ArrowLeft`||e.key===`ArrowRight`?(e.preventDefault(),u(la(l,c.length,e.key===`ArrowLeft`?-1:1),!0)):e.key===`Enter`?(e.preventDefault(),e.repeat||c[l]?.click()):e.key===`Escape`&&(e.preventDefault(),n.onCancel())},window.addEventListener(`keydown`,this.onKey)}dispose(){window.removeEventListener(`keydown`,this.onKey),this.root.remove()}},ma=class{root;constructor(e,t,n){Da(),this.root=Y(`div`,`fe-scrim`);let r=Xi(t),i=Y(`div`,r.tone===`drawn`?`fe-dialog`:`fe-dialog ${r.tone}`),a=Y(`div`,`fe-end-head`),o=Y(`h2`,`fe-dialog-title fe-end-title`);o.textContent=r.title,a.append(o);let s=Y(`p`,`fe-dialog-body`);s.textContent=r.body;let c=Y(`div`,`fe-dialog-actions`);c.append(wa(`Play again`,`primary`,n.onPlayAgain),wa(`Back to menu`,`ghost`,n.onBackToMenu)),i.append(a,s,c),this.root.append(i),e.append(this.root)}dispose(){this.root.remove()}};function Y(e,t){let n=document.createElement(e);return n.className=t,n}function ha(e,t=``){let n=Y(`div`,`fe`),r=Y(`div`,`fe-head`),i=document.createElement(`h1`);if(i.className=`menu-title fe-title`,i.textContent=e,r.append(i),t){let e=Y(`span`,`fe-head-meta`);e.textContent=t,r.append(e)}return n.append(r),n}function ga(e,t,n){let r=Y(`div`,`fe-row`),i=Y(`div`,``),a=Y(`div`,`fe-row-title`);a.textContent=e;let o=Y(`div`,`fe-row-sub`);return o.textContent=t,i.append(a,o),r.append(i,n),r}function _a(e,t,n){let r=Y(`div`,`fe-swatches`);return lt(e).forEach((i,a)=>{let o=a,s=document.createElement(`button`);s.type=`button`,s.className=t===o?`fe-swatch on`:`fe-swatch`,s.style.setProperty(`--swatch-colour`,va(i)),s.setAttribute(`aria-label`,`${Vi[e].name} colour option ${a+1}`),s.addEventListener(`click`,()=>n(e,o)),r.append(s)}),r}function va(e){return`#${e.toString(16).padStart(6,`0`)}`}function ya(e,t){let n=document.createElement(`button`);return n.type=`button`,n.className=e?`fe-switch on`:`fe-switch`,n.setAttribute(`role`,`switch`),n.setAttribute(`aria-checked`,String(e)),n.append(Y(`span`,`fe-switch-knob`)),n.addEventListener(`click`,()=>t(!e)),n}function ba(e,t,n){let r=Y(`div`,e.readable?t?`fe-slot primary`:`fe-slot`:`fe-slot broken`),i=Y(`div`,`fe-slot-badge`);e.readable&&e.faction?(i.dataset.faction=e.faction,i.style.setProperty(`--badge-line`,Yi[e.faction].line),i.append(Sa(e.faction))):i.textContent=`!`;let a=Y(`div`,`fe-slot-text`),o=Y(`div`,`fe-slot-name`);o.textContent=e.readable&&e.faction?`${Vi[e.faction].name} — ${e.slot}`:`Unreadable — ${e.slot}`;let s=Y(`div`,`fe-slot-meta`);return s.textContent=e.readable?`${e.clock} · tick ${e.tick.toLocaleString(`en-GB`)} · saved ${Ca(e.savedAtMs)}`:`Written by an older build. Old versions are refused, not migrated.`,a.append(o,s),r.append(i,a),e.readable&&r.append(wa(`Load`,t?`primary`:`ghost`,()=>n.onLoad(e.slot))),r.append(xa(()=>n.onDelete(e.slot))),r}function xa(e){let t=document.createElement(`button`);t.type=`button`,t.className=`fe-button icon`,t.title=`Delete this save`,t.textContent=`×`;let n=!1,r=()=>{n&&(n=!1,t.classList.remove(`armed`),t.textContent=`×`,t.title=`Delete this save`)};return t.addEventListener(`click`,()=>{if(n){e();return}n=!0,t.classList.add(`armed`),t.textContent=`Delete?`,t.title=`Click again to delete`}),t.addEventListener(`pointerleave`,r),t.addEventListener(`blur`,r),t}function Sa(e){let t=Yi[e],n=t.primaryIcon,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,`44`),r.setAttribute(`height`,`44`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function Ca(e){let t=Math.max(0,Math.round((Date.now()-e)/1e3));if(t<60)return`just now`;let n=Math.round(t/60);if(n<60)return`${n} minute${n===1?``:`s`} ago`;let r=Math.round(n/60);if(r<24)return`${r} hour${r===1?``:`s`} ago`;let i=Math.round(r/24);return i===1?`yesterday`:`${i} days ago`}function wa(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`fe-button ${t}`,r.textContent=e,r.addEventListener(`click`,n),r}function Ta(e){let t=Y(`div`,`fe-footer`);return t.append(wa(`Back`,`ghost`,e)),t}var Ea=!1;function Da(){if(Ea)return;Ea=!0;let e=document.createElement(`style`);e.textContent=ca+Oa,document.head.append(e)}var Oa=`
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
`;function X(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.z*r,z:e.x*r+e.z*n}}function Z(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return Math.abs(t)/2}function ka(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}function Aa(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)a.x<t&&(t=a.x),a.x>r&&(r=a.x),a.z<n&&(n=a.z),a.z>i&&(i=a.z);return{x0:t,z0:n,x1:r,z1:i}}function ja(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];!o||!s||o.z>t!=s.z>t&&e<(s.x-o.x)*(t-o.z)/(s.z-o.z)+o.x&&(r=!r)}return r}function Ma(e,t,n){let r=e=>e.x*t.x+e.z*t.z-n,i=[];for(let t=0;t<e.length;t++){let n=e[t],a=e[(t+1)%e.length];if(!n||!a)continue;let o=r(n),s=r(a),c=o>=-1e-6,l=s>=-1e-6;if(c&&i.push(n),c!==l&&Math.abs(o-s)>1e-9){let e=o/(o-s);i.push({x:n.x+(a.x-n.x)*e,z:n.z+(a.z-n.z)*e})}}return i}function Na(e,t){let n=0;for(let e=0;e<t.length;e++){let r=t[e],i=t[(e+1)%t.length];r&&i&&(n+=r.x*i.z-i.x*r.z)}let r=n>=0?t:[...t].reverse(),i=[...e];for(let e=0;e<r.length&&i.length;e++){let t=r[e],n=r[(e+1)%r.length];if(!t||!n)continue;let a=n.x-t.x,o=n.z-t.z,s=Math.max(Math.hypot(a,o),1e-9),c={x:-o/s,z:a/s};i=Ma(i,c,c.x*t.x+c.z*t.z)}return i}function Pa(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/Math.max(i*i+a*a,1)));return Math.hypot(e-(n.x+i*o),t-(n.z+a*o))}function Fa(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/Math.max(i*i+a*a,1)));return{x:n.x+i*o,z:n.z+a*o}}function Ia(e,t,n){let r=1/0;for(let i=0;i<n.length-1;i++){let a=n[i],o=n[i+1];a&&o&&(r=Math.min(r,Pa(e,t,a,o)))}return r}function La(e,t,n){if(n.length<2)return;let r=[],i=0;for(let e=0;e<n.length-1;e++){let t=n[e],a=n[e+1],o=Math.hypot(a.x-t.x,a.z-t.z);r.push(o),i+=o}let a,o=0;for(let s=0;s<n.length-1;s++){let c=n[s],l=n[s+1],u=r[s],d=Fa(e,t,c,l),f=Math.hypot(e-d.x,t-d.z);if(!a||f<a.distance){let e=u>1e-9?Math.hypot(d.x-c.x,d.z-c.z):0;a={point:d,t:i>1e-9?(o+e)/i:0,distance:f}}o+=u}return a}function Ra(e,t){let n=1/0;for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length];if(!(!i||!a))for(let e=0;e<t.length;e++){let r=t[e],o=t[(e+1)%t.length];!r||!o||(n=Math.min(n,Pa(i.x,i.z,r,o),Pa(a.x,a.z,r,o),Pa(r.x,r.z,i,a),Pa(o.x,o.z,i,a)))}}return n}function za(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}function Ba(e){let t=Math.max(Math.hypot(e.x,e.z),1e-9);return{x:e.x/t,z:e.z/t}}function Va(e,t,n){return{x:e.x+(t.x-e.x)*n,z:e.z+(t.z-e.z)*n}}function Ha(e){let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)}function Ua(e,t,n,r,i=0){let a=(e,t,n)=>(t.x-e.x)*(n.z-e.z)-(t.z-e.z)*(n.x-e.x),o=a(e,t,n),s=a(e,t,r),c=a(n,r,e),l=a(n,r,t),u=(e,t)=>e>i&&t<-i||e<-i&&t>i;return u(o,s)&&u(c,l)}var Wa={downtown:3.8,commercial:3.5,residential:3};function Ga(e,t){return Math.max(1,Math.round(e/Wa[t]))}var Ka=[`intact`,`damaged`,`rubble`],qa={intact:1,damaged:1.02,rubble:1.16};function Ja(e){return e!==`rubble`}function Ya(e){return 100+Math.min(100,e.height)*.35}function Xa(e){let t=qa[e.state],n=e.width*t/2,r=e.depth*t/2,i=e.rotation??0;if(i===0)return{x0:e.x-n,z0:e.z-r,x1:e.x+n,z1:e.z+r};let a=Math.cos(i),o=Math.sin(i),s=Math.abs(n*a)+Math.abs(r*o),c=Math.abs(n*o)+Math.abs(r*a);return{x0:e.x-s,z0:e.z-c,x1:e.x+s,z1:e.z+c}}function Za(e){let t=qa[e.state],n=e.width*t/2,r=e.depth*t/2,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=X(t,i);return{x:n.x+e.x,z:n.z+e.z}})}var Qa=1030,Q=1.8,$a=1.4,eo=.34,to=.62;function no(e,t,n){let r=Math.hypot(e,t)/n;return r<eo?`downtown`:r<to?`commercial`:`residential`}function ro(e){return e===`residential`?1:e===`commercial`?2:3}var io={downtown:{minLot:40,height:[46,120],stopChance:.22,gapChance:.07,parkChance:.04,parkingChance:.1,towerChance:.16},commercial:{minLot:28,height:[18,48],stopChance:.1,gapChance:.1,parkChance:.07,parkingChance:.16,towerChance:.08},residential:{minLot:20,height:[8,20],stopChance:.03,gapChance:.13,parkChance:.14,parkingChance:.06,towerChance:.03}},ao=class e{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e){return Math.floor(this.next()*e)}save(){return{s:this.s}}static restore(t){let n=new e(0);return n.s=t.s>>>0,n}},oo={points:[],tags:[]};function so(e,t){let{points:n,tags:r}=e;if(n.length<3)return oo;let i=[],a=[],o=e=>e.x*t.normal.x+e.z*t.normal.z-t.offset;for(let e=0;e<n.length;e++){let s=n[e],c=n[(e+1)%n.length];if(!s||!c)continue;let l=r[e]??-1,u=o(s),d=o(c),f=u>=-1e-6;if(f===d>=-1e-6){f&&(i.push(s),a.push(l));continue}let p=u-d;if(Math.abs(p)<1e-12)continue;let m=u/p,h={x:s.x+(c.x-s.x)*m,z:s.z+(c.z-s.z)*m};f?(i.push(s,h),a.push(l,t.tag)):(i.push(h),a.push(l))}return i.length>=3?{points:i,tags:a}:oo}function co(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return t/2}function lo(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length];if(!a||!o)continue;let s=a.x*o.z-o.x*a.z;t+=s,n+=(a.x+o.x)*s,r+=(a.z+o.z)*s}if(Math.abs(t)>1e-9)return{x:n/(3*t),z:r/(3*t)};let i=0,a=0;for(let t of e)i+=t.x,a+=t.z;let o=Math.max(e.length,1);return{x:i/o,z:a/o}}function uo(e,t){let n=co(t.points)>=0?t:fo(t);return e.map((t,r)=>{let i=n;for(let n=0;n<e.length;n++){if(n===r)continue;let a=e[n];if(!a)continue;let o=t.x-a.x,s=t.z-a.z,c=Math.hypot(o,s);if(c<1e-6)continue;let l={x:o/c,z:s/c},u={x:(t.x+a.x)/2,z:(t.z+a.z)/2};if(i=so(i,{normal:l,offset:u.x*l.x+u.z*l.z,tag:n}),i.points.length<3)return oo}return i})}function fo(e){let t=e.points.length,n=[],r=[];for(let i=0;i<t;i++){let a=e.points[t-1-i];a&&(n.push(a),r.push(e.tags[(t-2-i+t)%t]??-1))}return{points:n,tags:r}}function po(e,t,n,r){let i=[...e];for(let e=0;e<r;e++){let e=uo(i,t);i=i.map((t,r)=>{let i=e[r];if(!i||i.points.length<3)return t;let a=Na(n,i.points);return Z(a)<1?t:lo(a)})}return i}function mo(e,t){let n=e;for(let r=0;r<e.points.length;r++){let i=e.points[r],a=e.points[(r+1)%e.points.length];if(!i||!a)continue;let o=e.tags[r]??-1,s=t(o);if(s<=0)continue;let c=a.x-i.x,l=a.z-i.z,u=Math.hypot(c,l);if(u<1e-9)continue;let d={x:-l/u,z:c/u};if(n=so(n,{normal:d,offset:i.x*d.x+i.z*d.z+s,tag:o}),n.points.length<3)return oo}return n}function ho(e,t,n,r){let i=Aa(t),a=[],o=r*r,s=Math.max(1,n)*40;for(let r=0;r<s&&a.length<n;r++){let n=e.range(i.x0,i.x1),r=e.range(i.z0,i.z1);if(!ja(n,r,t))continue;let s=!1;for(let e of a){let t=e.x-n,i=e.z-r;if(t*t+i*i<o){s=!0;break}}s||a.push({x:n,z:r})}return a}var go=[11,15],_o=.3,vo=4,yo=2e4,bo=88,xo=3,So=400,Co=.995,wo=[15,25],To=.75,Eo=3.4,Do=200,Oo=7,ko=4,Ao=12,jo={downtown:.15,commercial:.45,residential:.8},Mo=-2;function No(e){return Mo-e}function Po(e){return e<=Mo}function Fo(e){return e>=0?10/2:Po(e)?18/2:0}function Io(e,t,n){let r={blocks:[],buildings:[],roads:[],trees:[],cars:[]},i=Aa(t),a=n*.2,o={points:ka({x0:i.x0-a,z0:i.z0-a,x1:i.x1+a,z1:i.z1+a}),tags:[-1,-1,-1,-1]},[s,c]=go,l=uo(po(ho(e,t,s+e.int(c-s+1),n*_o),o,t,vo),o);Lo(r,l,t);let u=l.map(t=>{if(!t||t.points.length<3)return;let r=lo(t.points),i=jo[no(r.x,r.z,n)];return e.next()<i?ns(t):void 0});for(let i=0;i<l.length;i++){let a=l[i];if(!a||a.points.length<3)continue;let o=Na(t,a.points);Z(o)<So||Bo(r,e,a,o,t,n,i,u[i])}return os(r,e),r}function Lo(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];if(i)for(let t=0;t<i.points.length;t++){let a=i.tags[t]??-1;if(a<0||a<=r)continue;let o=i.points[t],s=i.points[(t+1)%i.points.length];!o||!s||Ro(e,o,s,18,!0,n)}}}function Ro(e,t,n,r,i,a){let o=n.x-t.x,s=n.z-t.z,c=Math.hypot(o,s);if(c<1)return;let l=Math.atan2(s,o),u={x:(t.x+n.x)/2,z:(t.z+n.z)/2},d=Na(a,ka({x0:-c/2,z0:-r/2,x1:c/2,z1:r/2}).map(e=>{let t=X(e,l);return{x:t.x+u.x,z:t.z+u.z}}));$o(d,l,r)&&e.roads.push({...Aa(d),arterial:i,alongX:!0,rotation:l,clip:d})}function zo(e,t){let n=.98,r=n*2,i=.25,a=i/2,o=i/2,s=[],c=[],l=[],u=[],d=(e,n)=>t.some(t=>ja(e,n,t)),f=(t,n)=>e.find(e=>e===t||n.x<e.x0-.5||n.x>e.x1+.5||n.z<e.z0-.5||n.z>e.z1+.5?!1:ja(n.x,n.z,e.clip)?!0:e.clip.some((t,r)=>{let i=e.clip[(r+1)%e.clip.length];return i!==void 0&&Pa(n.x,n.z,t,i)<=.5})),p=(e,n)=>{let r=e.rotation??0,i=ka({x0:-e.width/2,z0:-e.depth/2,x1:e.width/2,z1:e.depth/2}).map(t=>{let n=X(t,r);return{x:e.x+n.x,z:e.z+n.z}});for(let r of t){let t=Na(r,i);Z(t)>.05&&n.push({...e,clip:t})}};for(let s of e){if(!t.some(e=>Z(Na(e,s.clip))>.05))continue;let e=s.rotation??0,c=s.arterial?18:10,m={x:(s.x0+s.x1)/2,z:(s.z0+s.z1)/2},h=s.clip.map(t=>X({x:t.x-m.x,z:t.z-m.z},-e).x),g=Math.min(...h),_=Math.max(...h);if(_-g<12)continue;let v=[g,_].flatMap(t=>{let n=X({x:t,z:0},e),r=f(s,{x:m.x+n.x,z:m.z+n.z});if(!r)return[];let i=r.arterial?18:10,a=s.arterial?2:6,o=Math.max(c,i)/2+4/2+a;return _-g>=o*2+4?[{end:t,setback:o}]:[]}),y=v.find(e=>e.end===g),b=v.find(e=>e.end===_),x=y?g+y.setback+4/2+o:g,S=b?_-b.setback-4/2-o:_;S>x&&u.push({road:s,angle:e,centre:m,roadWidth:c,lineLo:x,lineHi:S});let C=Math.max(2,Math.floor((c-0)/r));for(let t of v){let o=t.end===g?t.end+t.setback:t.end-t.setback;for(let t=0;t<C;t++){let i=X({x:o,z:-(C-1)*r*.5+t*r},e),a={x:m.x+i.x,z:m.z+i.z};d(a.x,a.z)&&p({...a,width:4,depth:n,rotation:e},l)}for(let t of[o-4/2-i/2-a,o+4/2+i/2+a]){let n=X({x:t,z:0},e);p({x:m.x+n.x,z:m.z+n.z,width:c,depth:i,rotation:e+Math.PI/2},l)}}}for(let e of u){let t=(t,n,r,a)=>{let o=X({x:t+n/2,z:r},e.angle);p({x:e.centre.x+o.x,z:e.centre.z+o.z,width:n,depth:i,rotation:e.angle},a)},n=l.flatMap(t=>{let n=X({x:t.x-e.centre.x,z:t.z-e.centre.z},-e.angle);if(n.x<e.lineLo-4||n.x>e.lineHi+4||Math.abs(n.z)>e.roadWidth/2+4)return[];let r=ka({x0:-t.width/2,z0:-t.depth/2,x1:t.width/2,z1:t.depth/2}).map(n=>{let r=X(n,t.rotation??0);return X({x:t.x+r.x-e.centre.x,z:t.z+r.z-e.centre.z},-e.angle)});return[{alongLo:Math.min(...r.map(e=>e.x))-o,alongHi:Math.max(...r.map(e=>e.x))+o,acrossLo:Math.min(...r.map(e=>e.z)),acrossHi:Math.max(...r.map(e=>e.z))}]}),r=t=>{let r=n.map(e=>{if(!(t+.45<e.acrossLo||t-.45>e.acrossHi))return[e.alongLo,e.alongHi]}).filter(e=>e!==void 0).sort((e,t)=>e[0]-t[0]),i=[],a=e.lineLo;for(let[t,n]of r)if(!(n<=a||t>=e.lineHi)&&(t>a&&i.push([a,Math.min(t,e.lineHi)]),a=Math.max(a,n),a>=e.lineHi))break;return a<e.lineHi&&i.push([a,e.lineHi]),i};if(e.road.arterial){for(let[e,n]of r(0))t(e,n-e,0,s);for(let n of[-e.roadWidth/4,e.roadWidth/4])for(let[e,i]of r(n))for(let r=e;r<i;r+=18)t(r,Math.min(9,i-r),n,c)}else for(let[e,n]of r(0))for(let r=e;r<n;r+=18)t(r,Math.min(9,n-r),0,s)}return{centreLines:s,laneLines:c,crosswalks:l}}function Bo(e,t,n,r,i,a,o,s){let c={points:n.points,tags:n.tags.map(e=>e>=0?No(e):e)},l=uo(po(ho(t,r,Math.max(3,Math.round(Z(r)/yo)),bo),c,r,xo),c);for(let t=0;t<l.length;t++){let n=l[t];if(n)for(let r=0;r<n.points.length;r++){let a=n.tags[r]??-1;if(a<0||a<=t)continue;let o=n.points[r],s=n.points[(r+1)%n.points.length];!o||!s||Ro(e,o,s,10,!1,i)}}for(let n of l)!n||n.points.length<3||Vo(e,t,n,i,a,o,s)}function Vo(e,t,n,r,i,a,o){let s=mo(n,Fo);if(s.points.length<3)return;let c=Na(r,s.points);if(Z(c)<So)return;let l=lo(c),u=no(l.x,l.z,i),d=io[u],f=t.next(),p=e.blocks.length,m=o??es(s.points);if(f<d.parkChance){let n=mo(s,()=>7),i=n.points.length>=3?Na(r,n.points):[];if(Z(i)<So)return;e.blocks.push({id:p,districtId:a,...Aa(c),district:u,kind:`park`,clip:c,innerClip:i,rotation:m}),is(e,t,i);return}if(f<d.parkChance+d.parkingChance){let n=mo(s,()=>7),i=n.points.length>=3?Na(r,n.points):[],o=es(c);e.blocks.push({id:p,districtId:a,...Aa(c),district:u,kind:`parking`,clip:c,innerClip:i,rotation:o}),as(e,t,i,c,o);return}e.blocks.push({id:p,districtId:a,...Aa(c),district:u,kind:`built`,clip:c,rotation:m});let h=mo(s,()=>7);if(h.points.length<3||(Ho(e,t,h.points,r,m,u,a,p,d),u!==`downtown`))return;let g=mo(s,()=>Oo),_=g.points.length>=3?Na(r,g.points):[];if(!Uo(e,p,c))return;let v=e.blocks[p];if(v&&Z(_)>=So){e.blocks[p]={...v,innerClip:_};let t=e.buildings.filter(e=>e.blockId===p&&e.state!==`rubble`);is(e,new ao(Yo(p,_)),_,t.map(Qo),Ao)}}function Ho(e,t,n,r,i,a,o,s,c){let l=n.map(e=>X(e,-i)),u=r.map(e=>X(e,-i)),d=Aa(l);if(d.x1-d.x0<c.minLot||d.z1-d.z0<c.minLot)return;let f=[];rs(t,d,c,f);for(let n of f){if(t.next()<c.gapChance||n.x1-n.x0-1.4<=2||n.z1-n.z0-1.4<=2)continue;let r=Na(ka({x0:n.x0+$a/2,x1:n.x1-$a/2,z0:n.z0+$a/2,z1:n.z1-$a/2}),l),d=Z(r);if(d<25)continue;let f=Na(u,r),p=Z(f);if(p<25)continue;let m=lo(f),h=0,g=0;for(let e of f)h=Math.max(h,Math.abs(e.x-m.x)),g=Math.max(g,Math.abs(e.z-m.z));let _=h*2,v=g*2;if(_<=2||v<=2)continue;let y=p<d-1,b=p<_*v*Co,[x,S]=c.height,C=t.range(x,S),w=!y&&t.next()<c.towerChance?t.range(1.6,2.4):1;a!==`downtown`&&(C*=w);let T=X(m,i);e.buildings.push({id:0,x:T.x,z:T.z,width:_,depth:v,height:C,district:a,districtId:o,blockId:s,paletteIndex:t.int(7),greebles:y?0:1+t.int(3),rotation:i,state:y?`rubble`:`intact`,health:0,...b?{clip:f.map(e=>X(e,i))}:{}})}}function Uo(e,t,n){let r=e.buildings.findIndex(e=>e.blockId===t);if(r<0)return!1;let i=r;for(;e.buildings[i]?.blockId===t;)i++;let a=e.buildings.slice(r,i),o=[];for(let e of a){if(e.state!==`intact`||!Ko(e,n))continue;let t=qo(e,n);o.every(e=>Ra(Qo(e),Qo(t))>=wo[0]-1e-6)&&o.push(t)}return e.buildings.splice(r,a.length,...Wo(a,o)),o.length>0}function Wo(e,t){if(t.length===0)return[];let n=e=>e.reduce((e,t)=>t.state===`rubble`?e:e+Z(Qo(t))*t.height,0),r=n(e),i=n(t);if(i<=0)return[...t];let a=Math.min(Math.max(r/i,1),Eo);return t.map(e=>({...e,height:Go(e.height*a)}))}function Go(e){return e<=Do?e:Do+120*(1-Math.exp(-(e-Do)/120))}function Ko(e,t){return Ra(Qo(e),t)<=7+$a+.1}function qo(e,t){let n=Qo(e).map(t=>({x:e.x+(t.x-e.x)*To,z:e.z+(t.z-e.z)*To})),r=Xo(e,t),i=7-Math.min(...n.map(e=>(e.x-r.a.x)*r.inward.x+(e.z-r.a.z)*r.inward.z)),a=Zo(n,t,r.inward,i),o=n.map(e=>({x:e.x+r.inward.x*a,z:e.z+r.inward.z*a}));return{...e,x:e.x+r.inward.x*a,z:e.z+r.inward.z*a,width:e.width*To,depth:e.depth*To,height:e.height*Jo(e),...e.clip?{clip:o}:{}}}function Jo(e){let t=Math.imul(Math.round(e.x*10),2654435761)^Math.imul(Math.round(e.z*10),2246822507);return t^=Math.imul(Math.round((e.width+e.depth)*10),3266489909),t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,1+(t>>>0)/4294967296*.6}function Yo(e,t){let n=lo(t),r=Math.imul(e+1,2654435761)^Math.imul(Math.round(n.x),2246822507);return r^=Math.imul(Math.round(n.z),3266489909),(r^r>>>16)>>>0}function Xo(e,t){let n=lo(t),r;for(let i=0;i<t.length;i++){let a=t[i],o=t[(i+1)%t.length];if(!a||!o)continue;let s=Math.max(Math.hypot(o.x-a.x,o.z-a.z),1e-9),c={x:-(o.z-a.z)/s,z:(o.x-a.x)/s},l={x:(a.x+o.x)/2,z:(a.z+o.z)/2};(n.x-l.x)*c.x+(n.z-l.z)*c.z<0&&(c={x:-c.x,z:-c.z});let u=Pa(e.x,e.z,a,o);(!r||u<r.distance)&&(r={a,inward:c,distance:u})}if(!r)throw Error(`downtown block has no edge`);return r}function Zo(e,t,n,r){let i=r=>e.every(e=>{let i={x:e.x+n.x*r,z:e.z+n.z*r};return ja(i.x,i.z,t)||Ia(i.x,i.z,[...t,t[0]])<=1e-5});if(i(r))return r;let a=0,o=r;for(let e=0;e<24;e++){let e=(a+o)/2;i(e)?a=e:o=e}return a}function Qo(e){return e.clip&&e.clip.length>=3?e.clip:Za({...e,state:`intact`})}function $o(e,t,n){if(e.length<3)return!1;let r=e.map(e=>X(e,-t).x),i=Math.max(...r)-Math.min(...r);return i>=n&&Z(e)>=i*n*.6}function es(e){return ts(e).angle}function ts(e,t){let n=0,r=-1;for(let i=0;i<e.length;i++){if(t&&!t(i))continue;let a=e[i],o=e[(i+1)%e.length];if(!a||!o)continue;let s=o.x-a.x,c=o.z-a.z,l=s*s+c*c;l>r&&(r=l,n=Math.atan2(c,s))}return{angle:n,lengthSquared:r}}function ns(e){let t=ts(e.points,t=>(e.tags[t]??-1)>=0);return t.lengthSquared>0?t.angle:es(e.points)}function rs(e,t,n,r,i=0){let a=t.x1-t.x0,o=t.z1-t.z0,s=a>=n.minLot*2,c=o>=n.minLot*2;if(!s&&!c){r.push(t);return}if(i>=2&&e.next()<n.stopChance){r.push(t);return}let l;l=s&&c?a>o?e.next()<.78:e.next()<.22:s;let u=e.range(.36,.64);if(l){let o=t.x0+a*u;rs(e,{...t,x1:o},n,r,i+1),rs(e,{...t,x0:o},n,r,i+1)}else{let a=t.z0+o*u;rs(e,{...t,z1:a},n,r,i+1),rs(e,{...t,z0:a},n,r,i+1)}}function is(e,t,n,r=[],i=ko){let a=Aa(n),o=[...n,n[0]],s=4+t.int(Math.max(2,Math.floor(Z(n)/1400))),c=0;for(let e=0;e<s*3;e++)c^=Math.floor(t.next()*4294967296);let l=new ao(c),u=2+l.int(Math.max(1,Math.min(3,Math.floor(Z(n)/2200)))),d=(e,t)=>ja(e,t,n)&&Ia(e,t,o)>=8&&r.every(n=>!ja(e,t,n)&&Ia(e,t,[...n,n[0]])>=i);for(let t=0;t<u;t++){let t;for(let e=0;e<8;e++){let e=l.range(a.x0,a.x1),n=l.range(a.z0,a.z1);if(d(e,n)){t={x:e,z:n};break}}if(!t)continue;let n=2+l.int(3),r=l.range(5,11),i=l.next()<.35;for(let a=0;a<n;a++){let n=l.range(0,Math.PI*2),o=a===0?0:l.range(2,r),s=t.x+Math.cos(n)*o,c=t.z+Math.sin(n)*o,u=a===0?i?l.range(2.4,2.88):l.range(1.45,1.92):l.range(1.12,1.8);d(s,c)&&e.trees.push({x:s,z:c,scale:u})}}}function as(e,t,n,r,i){let a=Aa(n.map(e=>X(e,-i))),o=Math.floor((a.x1-a.x0-14)/15),s=Math.floor((a.z1-a.z0-14)/6);if(!(o<1||s<1))for(let c=0;c<s;c++)for(let s=0;s<o;s++){if(t.next()<.32)continue;let o=t.int(6),l=X({x:a.x0+7+15*(s+.5),z:a.z0+7+6*(c+.5)},i);!ja(l.x,l.z,n)||Ia(l.x,l.z,[...r,r[0]])<7||e.cars.push({x:l.x,z:l.z,alongX:!0,paletteIndex:o,parked:!0,rotation:i})}}function os(e,t){let n=25*Math.PI/180,r=new ao(t.save().s^2654435769);for(let i of e.roads){let a=i.rotation??0,o={x:(i.x0+i.x1)/2,z:(i.z0+i.z1)/2},s=i.clip.map(e=>{let t=X({x:e.x-o.x,z:e.z-o.z},-a);return i.alongX?t.x:t.z}),c=Math.min(...s),l=Math.max(...s),u=Math.max(1,Math.floor((l-c)/(i.arterial?90:150)));for(let s=0;s<u;s++){let s;for(let e=0;e<12&&!s;e++){let e=t.range(0,1),n=i.arterial?[-12,-4,4,12][Math.floor(t.next()*4)]:(t.next()<.5?-1:1)*4,r=X(i.alongX?{x:c+(l-c)*e,z:n}:{x:n,z:c+(l-c)*e},a),u={x:o.x+r.x,z:o.z+r.z};ja(u.x,u.z,i.clip)&&(s=u)}if(!s)continue;let u=t.int(6);e.cars.push({x:s.x+r.range(-3,3),z:s.z+r.range(-3,3),alongX:i.alongX,paletteIndex:u,parked:!1,rotation:a+r.range(-n,n)})}}}function ss(e,t){let{extent:n,resolution:r,threshold:i}=t,a=n*2/r,o=[];for(let t=0;t<=r;t++){let i=[];for(let o=0;o<=r;o++)i.push(e(-n+o*a,-n+t*a));o.push(i)}let s=[];for(let e=0;e<r;e++)for(let t=0;t<r;t++){let r=o[e]?.[t],c=o[e]?.[t+1],l=o[e+1]?.[t+1],u=o[e+1]?.[t];if(r===void 0||c===void 0||l===void 0||u===void 0)continue;let d=[{x:-n+t*a,z:-n+e*a,value:r},{x:-n+(t+1)*a,z:-n+e*a,value:c},{x:-n+(t+1)*a,z:-n+(e+1)*a,value:l},{x:-n+t*a,z:-n+(e+1)*a,value:u}],f=[];for(let e=0;e<4;e++){let t=d[e],n=d[(e+1)%4];if(t.value>=i==n.value>=i)continue;let r=(i-t.value)/(n.value-t.value);f.push({x:t.x+(n.x-t.x)*r,z:t.z+(n.z-t.z)*r})}if(f.length===2&&s.push([f[0],f[1]]),f.length===4){let e=(r+c+l+u)*.25>=i;s.push(e?[f[0],f[1]]:[f[0],f[3]]),s.push(e?[f[2],f[3]]:[f[1],f[2]])}}return cs(s,a*.001)}function cs(e,t){let n=e=>`${Math.round(e.x/t)},${Math.round(e.z/t)}`,r=e.map(([e,t])=>({a:e,b:t,aKey:n(e),bKey:n(t),used:!1})),i=new Map;r.forEach((e,t)=>{for(let n of[e.aKey,e.bKey]){let e=i.get(n);e?e.push(t):i.set(n,[t])}});let a=[];for(let e=0;e<r.length;e++){let t=r[e];if(!t||t.used)continue;t.used=!0;let n=[t.a,t.b],o=t.bKey;for(;o!==t.aKey;){let e=i.get(o)?.find(e=>!r[e]?.used);if(e===void 0)break;let t=r[e];if(!t)break;t.used=!0;let a=t.bKey===o;n.push(a?t.a:t.b),o=a?t.aKey:t.bKey}o===t.aKey&&n.length>=3&&a.push(n)}return a}function ls(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=e=>e*e*(3-2*e),c=(e,t,n)=>e+(t-e)*n,l=(e,t)=>{let r=Math.imul(e,521288629)^Math.imul(t,1597334677)^n;return r^=r>>>16,r=Math.imul(r,2146121005),r^=r>>>15,(r>>>0)/4294967296*2-1};return c(c(l(r,i),l(r+1,i),s(a)),c(l(r,i+1),l(r+1,i+1),s(a)),s(o))}function us(e,t){if(e.length<=2)return[...e];let n=e[0],r=e[e.length-1],i=-1,a=0;for(let t=1;t<e.length-1;t++){let o=e[t],s=r.x-n.x,c=r.z-n.z,l=Math.abs(c*o.x-s*o.z+r.x*n.z-r.z*n.x)/Math.max(Math.hypot(s,c),1e-9);l>i&&(i=l,a=t)}return i<=t?[n,r]:[...us(e.slice(0,a+1),t).slice(0,-1),...us(e.slice(a),t)]}function ds(e,t){if(e.length<4)return[...e];let n=Aa(e),r=e.reduce((e,t)=>t.x<e.x?t:e,e[0]),i=e.reduce((e,t)=>t.x>e.x?t:e,e[0]),a=e.indexOf(r),o=e.indexOf(i),s=fs(e,a,o),c=fs(e,o,a),l=[...us(s,t).slice(0,-1),...us(c,t).slice(0,-1)];return Z(l)>(n.x1-n.x0)*(n.z1-n.z0)*.001?l:[...e]}function fs(e,t,n){let r=[];for(let i=t;;i=(i+1)%e.length){let t=e[i];if(t&&r.push(t),i===n)return r}}function ps(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return t>=0?[...e]:[...e].reverse()}var ms={seed:439041101,radius:1346,positiveBlobCount:8,negativeBlobCount:2,fieldResolution:96,threshold:.08,warpFrequency:.0018,warpStrength:82,coastNoiseFrequency:.02,coastNoiseStrength:.07,simplificationTolerance:8,satelliteCount:2,satelliteSize:.13,satelliteAreaShare:[0,1],satelliteGap:70,fractureDepth:80,fractureSegments:6,fractureIrregularity:.32,fractureNoiseFrequency:.024,fractureNoiseStrength:.4,minPolygonArea:5e5,minEdgeLength:8,maxGenerationAttempts:8},hs=class extends Error{attempts;constructor(e){super(`No valid shard shape after ${e.length} deterministic attempts`),this.attempts=e}};function gs(e){let t=[];for(let n=0;n<e.maxGenerationAttempts;n++){let r=_s(e.seed,n),i={...e,seed:r},a=new ao(r),o=bs(i,a),s=xs(i,a),c=Ss(i,o,s),l=ps(ds(c.reduce((e,t)=>Z(t)>Z(e)?t:e,[]),e.simplificationTolerance)),u=Es(l,e),d={seed:r,accepted:u.length===0,reasons:u,rawContourCount:c.length,vertices:l.length,area:Z(l)};if(t.push(d),u.length)continue;let f=vs(l,i);return{sourcePolygon:l,polygon:f.main,satelliteShards:f.satelliteShards,debug:{positiveBlobs:o,negativeBlobs:s,rawContours:c,attempts:t}}}throw new hs(t)}function _s(e,t){if(t===0)return e>>>0;let n=e+Math.imul(t,2654435769)>>>0;return n^=n>>>16,n=Math.imul(n,2246822507),n^=n>>>13,n>>>0}function vs(e,t){let n=[...e],r=[],i=new ao(t.seed^1291169091);for(let e=0;e<t.satelliteCount;e++){let e;for(let r=0;r<18&&!e;r++){let r=ys(n,t,i);r&&Ts(r.main,t)&&Ts(r.satellite,{...t,minPolygonArea:t.minPolygonArea*.008})&&(e=r)}e&&(n=e.main,r.push({sourcePolygon:e.source,polygon:e.satellite,offset:e.offset,fracturePath:e.fracture}))}return{main:n,satelliteShards:r}}function ys(e,t,n){let r=e.length;if(r<12)return;let i=n.int(r),a=t=>e[(t+r)%r],o=(e,t,n)=>({x:e.x+(t.x-e.x)*n,z:e.z+(t.z-e.z)*n}),s=e=>{let t=a(i-1),n=a(i),r=a(i+e-1),s=a(i+e);if(!t||!n||!r||!s)return;let c=o(t,n,.46),l=o(r,s,.54),u=[c];for(let t=0;t<e;t++){let e=a(i+t);e&&u.push(e)}return u.push(l),u},c=Math.max(2,r-5),l=Math.max(2,Math.min(c,Math.round(r*t.satelliteSize*n.range(.75,1.2)))),u=n.int(2147483647),d=za(e),f=Math.max(Z(e),1),p=e=>{let n=s(e);if(!n)return;let c=n[0],l=n[n.length-1];if(!c||!l)return;let f=za(n),p=Ba({x:f.x-d.x,z:f.z-d.z}),m=[c],h={x:l.x-c.x,z:l.z-c.z},g=Ba({x:-h.z,z:h.x}),_=g.x*p.x+g.z*p.z>=0?g:{x:-g.x,z:-g.z},v={x:-_.x,z:-_.z},y=Math.hypot(h.x,h.z),b=Math.max(t.fractureSegments,Math.ceil(y*t.fractureNoiseFrequency*2.5)),x=Math.min(t.fractureDepth,y*.42);for(let e=1;e<b;e++){let n=e/b,r=o(c,l,n),i=Math.sin(n*Math.PI),a=ls(n*1.8,.37,u)*t.fractureIrregularity,s=x*i*(.92+a),d=ls(r.x*t.fractureNoiseFrequency,r.z*t.fractureNoiseFrequency,u^374761393)*x*t.fractureNoiseStrength*i,f=y*.06*i*ls(n*1.1,.81,u^1831565813)*t.fractureIrregularity;m.push({x:r.x+v.x*(s+d)+h.x/y*f,z:r.z+v.z*(s+d)+h.z/y*f})}m.push(l);let S=us(m,t.simplificationTolerance),C=S.slice(1,-1),w=[l];for(let t=e;t<r;t++){let e=a(i+t);e&&w.push(e)}return w.push(c,...C),{span:e,main:w,source:[...n,...C.slice().reverse()],outward:p,fracture:S}},m=e=>{let n=Z(e.source)/f;return n>=t.satelliteAreaShare[0]&&n<=t.satelliteAreaShare[1]},h=p(l);if(!h||!m(h)){h=void 0;for(let e=1;e<=c-2&&!h;e++){let t=l+e,n=l-e,r=t<=c?p(t):void 0;if(r&&m(r)){h=r;break}let i=n>=2?p(n):void 0;i&&m(i)&&(h=i)}}if(!h||Z(h.source)<f*.008)return;let{main:g,source:_,outward:v}=h,y=_.map(e=>({x:e.x+v.x*t.satelliteGap,z:e.z+v.z*t.satelliteGap}));if(!(Ra(g,y)<t.satelliteGap*.45))return{main:g,source:_,satellite:y,offset:{x:v.x*t.satelliteGap,z:v.z*t.satelliteGap},fracture:h.fracture}}function bs(e,t){let n=[{x:0,z:0,radiusX:e.radius*.62,radiusZ:e.radius*.56,rotation:t.range(0,Math.PI),strength:1.08}];for(let r=1;r<e.positiveBlobCount;r++){let r=t.range(0,Math.PI*2),i=e.radius*t.range(.12,.74)*Math.sqrt(t.next()),a=t.range(.68,1.38),o=e.radius*t.range(.28,.5);n.push({x:Math.cos(r)*i,z:Math.sin(r)*i,radiusX:o*a,radiusZ:o/a,rotation:t.range(0,Math.PI),strength:t.range(.72,1.08)})}return n}function xs(e,t){let n=[];for(let r=0;r<e.negativeBlobCount;r++){let r=t.range(0,Math.PI*2),i=e.radius*t.range(.56,.88),a=t.range(.65,1.35),o=e.radius*t.range(.18,.31);n.push({x:Math.cos(r)*i,z:Math.sin(r)*i,radiusX:o*a,radiusZ:o/a,rotation:t.range(0,Math.PI),strength:t.range(.42,.68)})}return n}function Ss(e,t,n){return ss((r,i)=>Cs(r,i,e,t,n),{extent:e.radius*1.45,resolution:e.fieldResolution,threshold:e.threshold})}function Cs(e,t,n,r,i){let a=e+ls(e*n.warpFrequency,t*n.warpFrequency,n.seed^2246822507)*n.warpStrength,o=t+ls(e*n.warpFrequency,t*n.warpFrequency,n.seed^3266489909)*n.warpStrength,s=0;for(let e of r)s+=ws(a,o,e);for(let e of i)s-=ws(a,o,e);let c=ls(a*n.coastNoiseFrequency,o*n.coastNoiseFrequency,n.seed^668265261);return s+=c*n.coastNoiseStrength,s}function ws(e,t,n){let r=Math.cos(n.rotation),i=Math.sin(n.rotation),a=e-n.x,o=t-n.z,s=(a*r+o*i)/n.radiusX,c=(-a*i+o*r)/n.radiusZ,l=s*s+c*c;return l>=1?0:n.strength*(1-l)*(1-l)}function Ts(e,t){if(e.length<3||Z(e)<t.minPolygonArea)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];if(Math.hypot(r.x-i.x,r.z-i.z)<t.minEdgeLength)return!1;for(let t=n+1;t<e.length;t++){if(t===n||(t+1)%e.length===n||(n+1)%e.length===t)continue;let a=e[t],o=e[(t+1)%e.length];if(Ua(r,i,a,o,1e-7))return!1}}return!0}function Es(e,t){let n=[];if(e.length<3)return[`fewer than three vertices`];Z(e)<t.minPolygonArea&&n.push(`area below ${Math.round(t.minPolygonArea).toLocaleString()} m²`);for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length];if(Math.hypot(i.x-a.x,i.z-a.z)<t.minEdgeLength){n.push(`edge ${r} shorter than ${t.minEdgeLength} m`);break}for(let t=r+1;t<e.length;t++){if(t===r||(t+1)%e.length===r||(r+1)%e.length===t)continue;let o=e[t],s=e[(t+1)%e.length];if(Ua(i,a,o,s,1e-7))return n.push(`self-intersection at edges ${r}/${t}`),n}}return n}var Ds=[.03,.05],Os=[2,9],ks=[71,85],As=150,js={...ms,satelliteCount:1,negativeBlobCount:0,warpStrength:35,coastNoiseFrequency:.02,coastNoiseStrength:.07,simplificationTolerance:10,threshold:.08,satelliteAreaShare:Ds,satelliteGap:110,seed:0,radius:Qa*1.12},Ms=class e{boundary;surfaces;fractureSeams;buildings=[];blocks=[];roads=[];roadPatches=[];centreLines=[];laneLines=[];crosswalks=[];trees=[];cars=[];radius;rng;byId=new Map;buckets=new Map;constructor(e){this.radius=e.radius??1030;let{seed:t,shape:n}=this.generateBoundaryWithFallback(e.seed);this.rng=new ao(t);let r=n.sourcePolygon;this.boundary=r;for(let e=0;e<22;e++)this.rng.next();let i=Io(this.rng,r,this.radius);this.blocks.push(...i.blocks),this.roads.push(...i.roads),this.trees.push(...i.trees),this.cars.push(...i.cars),(e.maxBuildings===void 0?i.buildings:Ns(i.buildings,e.maxBuildings)).forEach((e,t)=>this.buildings.push({...e,id:t})),e.maxBuildings!==void 0&&this.removeOrphanedDowntownTrees();let a=this.fractureFromShape(n)??this.fractureCorner();this.boundary=a.main,this.surfaces=[a.main,a.detached],this.fractureSeams=[{surfaces:[0,1],path:a.fracturePath,offset:a.offset}],this.cars.splice(0,this.cars.length,...this.cars.filter(e=>this.containsPoint(e.x,e.z)));let o=zo(this.roads,this.surfaces);this.centreLines.push(...o.centreLines),this.laneLines.push(...o.laneLines),this.crosswalks.push(...o.crosswalks);for(let e of this.buildings)e.health=e.state===`rubble`?0:Ya(e),this.byId.set(e.id,e),this.index(e)}get startAnchors(){let e=this.radius*.5;return[{x:-e,z:0},{x:e,z:0}]}static bucketKey(e,t){return(e+512)*4096+(t+512)}removeOrphanedDowntownTrees(){let e=this.blocks.filter(e=>e.kind===`built`&&e.district===`downtown`&&e.innerClip&&this.buildings.some(t=>t.blockId===e.id&&t.state!==`rubble`));this.trees.splice(0,this.trees.length,...this.trees.filter(t=>{let n=this.blocks.find(e=>e.kind===`built`&&e.district===`downtown`&&e.innerClip&&ja(t.x,t.z,e.innerClip));return!n||e.includes(n)}))}index(t){let n=Xa({...t,state:`rubble`}),r=Math.floor(n.x0/As),i=Math.floor(n.x1/As),a=Math.floor(n.z0/As),o=Math.floor(n.z1/As);for(let n=r;n<=i;n++)for(let r=a;r<=o;r++){let i=e.bucketKey(n,r),a=this.buckets.get(i);a?a.push(t.id):this.buckets.set(i,[t.id])}}buildingsOverlapping(t){let n=new Set,r=Math.floor(t.x0/As),i=Math.floor(t.x1/As),a=Math.floor(t.z0/As),o=Math.floor(t.z1/As);for(let t=r;t<=i;t++)for(let r=a;r<=o;r++)for(let i of this.buckets.get(e.bucketKey(t,r))??[])n.add(i);let s=[];for(let e of[...n].sort((e,t)=>e-t)){let t=this.byId.get(e);t&&s.push(t)}return s}generateBoundary(e){return gs({...js,seed:e,radius:this.radius*1.12})}generateBoundaryWithFallback(e){for(let t=0;t<25;t++){let n=e+t>>>0;try{return{seed:n,shape:this.generateBoundary(n)}}catch(e){if(!(e instanceof hs)||t===24)throw e}}throw Error(`unreachable`)}fractureFromShape(e){let t=e.satelliteShards[0];if(!t)return;let n=e.polygon,r=t.polygon,i=t.offset;return this.splitRoadPatches(n,t.sourcePolygon,i),this.splitRoads(n,t.sourcePolygon,i),this.splitBlocks(n,t.sourcePolygon,i),this.splitBuildings(n,t.sourcePolygon,i,t.fracturePath),this.movePointContent(n,t.sourcePolygon,i),{main:n,detached:r,fracturePath:t.fracturePath,offset:i}}containsPoint(e,t){for(let n of this.surfaces??[this.boundary])if(ja(e,t,n))return!0;return!1}fractureCorner(){let e=this.boundary,t=e.length,n=n=>e[(n+t)%t],r=(e,t,n)=>({x:e.x+(t.x-e.x)*n,z:e.z+(t.z-e.z)*n}),i=this.rng.int(t),a=Math.abs(Z(e)),o=(e,t)=>{let i=n(e-1),o=n(e),s=n(e+t-1),c=n(e+t);if(!i||!o||!s||!c)return;let l=r(i,o,.38),u=r(s,c,.62);if(Pa(0,0,l,u)<this.radius*.58)return;let d=[l];for(let r=0;r<t;r++){let t=n(e+r);t&&d.push(t)}return d.push(u),{cutA:l,cutB:u,share:a>0?Math.abs(Z(d))/a:0}},s=i,c=Os[0],l;for(let e=Os[0];e<=Os[1];e++){for(let n=0;n<t;n++){let r=(i+n)%t,a=o(r,e);if(a){if(a.share>=Ds[0]&&a.share<=Ds[1]){l={candidate:r,width:e,share:a.share};break}(!l||a.share>l.share)&&(l={candidate:r,width:e,share:a.share})}}if(l&&l.share>=Ds[0]&&l.share<=Ds[1])break}l&&(s=l.candidate,c=l.width);let u=n(s-1),d=n(s),f=n(s+c-1),p=n(s+c);if(!u||!d||!f||!p)throw Error(`cannot fracture empty boundary`);let m=r(u,d,.38),h=r(f,p,.62),g=za(e),_=[m];for(let e=0;e<c;e++){let t=n(s+e);t&&_.push(t)}_.push(h);let v=za(_),y=v.x-g.x,b=v.z-g.z,x=Math.max(Math.hypot(y,b),1),S=[m],C=h.x-m.x,w=h.z-m.z,T=Math.max(Math.hypot(C,w),1),E=-w/T,D=C/T;for(let e=1;e<=7;e++){let t=e/8,n=Math.sin(t*Math.PI),i=this.rng.range(-48,48)*n,a=r(m,h,t);S.push({x:a.x+E*i,z:a.z+D*i})}S.push(h);let O=[..._,...S.slice(1,-1).reverse()],k=[h];for(let e=c;e<t;e++){let t=n(s+e);t&&k.push(t)}k.push(m,...S.slice(1,-1));let A=this.rng.range(ks[0],ks[1]),j={x:y/x*A,z:b/x*A},M=O.map(e=>({x:e.x+j.x,z:e.z+j.z}));for(let e=0;e<8&&Ra(k,M)<56;e++)A+=12,j={x:y/x*A,z:b/x*A},M=O.map(e=>({x:e.x+j.x,z:e.z+j.z}));return this.splitRoadPatches(k,O,j),this.splitRoads(k,O,j),this.splitBlocks(k,O,j),this.splitBuildings(k,O,j,S),this.movePointContent(k,O,j),{main:k,detached:M,fracturePath:S,offset:j}}splitRoadPatches(e,t,n){let r=[];for(let i of this.roadPatches){let a=Na(e,i);Z(a)>=1&&r.push(a);let o=Na(t,i);Z(o)>=1&&r.push(o.map(e=>({x:e.x+n.x,z:e.z+n.z})))}this.roadPatches.splice(0,this.roadPatches.length,...r)}splitRoads(e,t,n){let r=[];for(let i of this.roads){let a=i.arterial?18:10,o=i.rotation??0,s=Na(e,i.clip);$o(s,o,a)&&r.push({...i,...Aa(s),clip:s});let c=Na(t,i.clip);if($o(c,o,a)){let e=c.map(e=>({x:e.x+n.x,z:e.z+n.z}));r.push({...i,...Aa(e),clip:e})}}this.roads.splice(0,this.roads.length,...r)}splitBlocks(e,t,n){let r=[];for(let i of this.blocks){let a=i.clip??ka(i),o=Na(e,a),s=i.innerClip?Na(Na(e,i.innerClip),a):void 0;Z(o)>=20&&r.push({...i,...Aa(o),clip:o,...s&&Z(s)>=1?{innerClip:s}:{}});let c=Na(t,a);if(Z(c)>=20){let e=c.map(e=>({x:e.x+n.x,z:e.z+n.z})),o=i.innerClip?Na(Na(t,i.innerClip),a).map(e=>({x:e.x+n.x,z:e.z+n.z})):void 0;r.push({...i,...Aa(e),clip:e,...o&&Z(o)>=1?{innerClip:o}:{}})}}this.blocks.splice(0,this.blocks.length,...r)}splitBuildings(e,t,n,r){for(let i=0;i<this.buildings.length;i++){let a=this.buildings[i];if(!a)continue;let o=a.clip&&a.clip.length>=3?a.clip:Za({...a,state:`intact`}),s=Na(e,o),c=Na(t,o),l=Z(s),u=Z(c),d=Z(o),f=e=>o.every(t=>ja(t.x,t.z,e)),p=l>10&&u>10||Math.max(l,u)<d*.98||Ia(a.x,a.z,r)<Math.hypot(a.width,a.depth)*.52||!(f(e)||f(t)),m=u>l,h=m?c.map(e=>({x:e.x+n.x,z:e.z+n.z})):s;this.buildings[i]={...a,x:a.x+(m?n.x:0),z:a.z+(m?n.z:0),state:p?`rubble`:a.state,...p||a.clip?{clip:h}:{}}}}movePointContent(e,t,n){let r=r=>{let i=[];for(let a of r)ja(a.x,a.z,t)?i.push({...a,x:a.x+n.x,z:a.z+n.z}):ja(a.x,a.z,e)&&i.push(a);r.splice(0,r.length,...i)};r(this.trees),r(this.cars),this.trees.splice(0,this.trees.length,...this.trees.filter(e=>this.blocks.some(t=>(t.kind===`park`||t.kind===`built`&&t.district===`downtown`&&t.innerClip)&&(()=>{let n=t.innerClip??t.clip??ka(t);return ja(e.x,e.z,n)&&Ia(e.x,e.z,[...n,n[0]])>=8})()))),this.cars.splice(0,this.cars.length,...this.cars.filter(e=>!e.parked||this.blocks.some(t=>t.kind===`parking`&&t.clip!==void 0&&ja(e.x,e.z,t.clip)&&Ia(e.x,e.z,[...t.clip,t.clip[0]])>=7)))}get(e){return this.byId.get(e)}setState(e,t){let n=this.byId.get(e);if(!n||n.state===t)return!1;n.state=t;let r=Ya(n);return n.health=t===`intact`?r:t===`damaged`?r*.5:0,!0}advanceState(e){let t=this.byId.get(e);if(!t)return;let n=Ka[Ka.indexOf(t.state)+1];return n&&this.setState(e,n),t.state}setAllStates(e){for(let t of this.buildings)this.setState(t.id,e)}damage(e,t){let n=this.byId.get(e);if(!n||n.state===`rubble`||t<=0)return!1;n.health=Math.max(0,n.health-t);let r=Ya(n),i=n.health<=0?`rubble`:n.health<=r*.5?`damaged`:`intact`;return n.state!==i&&(n.state=i,!0)}countByState(e){let t=0;for(let n of this.buildings)n.state===e&&t++;return t}countByDistrict(e){let t=0;for(let n of this.buildings)n.district===e&&t++;return t}countBlocks(e){let t=0;for(let n of this.blocks)n.kind===e&&t++;return t}hash(){let e=2166136261,t=t=>{e^=Math.round(t*1e3)|0,e=Math.imul(e,16777619)};for(let e of this.boundary)t(e.x),t(e.z);for(let e of this.surfaces.slice(1))for(let n of e)t(n.x),t(n.z);for(let e of this.buildings){t(e.x),t(e.z),t(e.width),t(e.depth),t(e.height),t(Ka.indexOf(e.state)),t(e.paletteIndex),t(e.rotation??0);for(let n of e.clip??[])t(n.x),t(n.z)}for(let e of this.blocks)t(e.x0),t(e.z0),t(e.rotation??0);return(e>>>0).toString(16).padStart(8,`0`)}};function Ns(e,t){let n=Math.max(0,Math.min(t,e.length));return n===e.length?e:n===0?[]:Array.from({length:n},(t,r)=>e[Math.floor(r*e.length/n)])}var Ps=11777712,Fs=7830134,Is=.55,Ls=.18;function Rs(e){let t=e|0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function zs(e){return Rs(e)/4294967295}function Bs(e,t,n){let r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=t.x*a.x+t.y*a.y-n,c=t.x*o.x+t.y*o.y-n,l=s<=1e-7,u=c<=1e-7;if(l&&r.push(a),l!==u){let e=s/(s-c);r.push({x:a.x+(o.x-a.x)*e,y:a.y+(o.y-a.y)*e})}}return r}function Vs(e,t=3,n=1){let r=Math.max(.18,n),i=Math.max(1,Math.round(Math.sqrt(t*r))),a=Math.ceil(t/i),o=Array.from({length:t},(t,n)=>{let o=n%i,s=Math.floor(n/i);return{x:((o+.5+(zs(e+n*31)-.5)*.68)/i-.5)*r,y:(s+.5+(zs(e+n*37)-.5)*.68)/a-.5}});return o.map((e,t)=>{let n=[{x:-r/2,y:-.5},{x:r/2,y:-.5},{x:r/2,y:.5},{x:-r/2,y:.5}];for(let r=0;r<o.length&&n.length>=3;r++){if(r===t)continue;let i=o[r],a={x:i.x-e.x,y:i.y-e.y};n=Bs(n,a,(i.x**2+i.y**2-e.x**2-e.y**2)/2)}return n.map(e=>({x:e.x/r,y:e.y}))}).filter(e=>e.length>=3)}function Hs(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=a.x*o.y-o.x*a.y;t+=s,n+=(a.x+o.x)*s,r+=(a.y+o.y)*s}return Math.abs(t)<1e-8?e.reduce((t,n)=>({x:t.x+n.x/e.length,y:t.y+n.y/e.length}),{x:0,y:0}):{x:n/(3*t),y:r/(3*t)}}function Us(e,t=Hs(e)){let n=new ct,r=e[0];if(!r)return new Je;n.moveTo(r.x-t.x,r.y-t.y);for(let r=1;r<e.length;r++){let i=e[r];n.lineTo(i.x-t.x,i.y-t.y)}n.closePath();let i=new D(n,{depth:1,steps:1,bevelEnabled:!1,curveSegments:1});return i.translate(0,0,-.5),i.computeVertexNormals(),i}function Ws(e){let t=[{x:(zs(e+3)-.5)*.12,y:-.5},{x:(zs(e+7)-.5)*.2,y:-.17},{x:(zs(e+11)-.5)*.2,y:.16},{x:(zs(e+17)-.5)*.12,y:.5}];return[Us([{x:-.5,y:-.5},...t,{x:-.5,y:.5}],{x:0,y:0}),Us([t[0],{x:.5,y:-.5},{x:.5,y:.5},...t.slice(1).reverse()],{x:0,y:0})]}function Gs(e){let t=[-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,...Array.from({length:4},(t,n)=>({x:(n===0||n===3?-.5:.5)+(zs(e+n*11)-.5)*.16,y:.42+zs(e+n*17)*.16,z:(n<2?-.5:.5)+(zs(e+n*23)-.5)*.16})).flatMap(e=>[e.x,e.y,e.z])],n=new Je;return n.setAttribute(`position`,new m(t,3)),n.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,5,1,0,4,5,1,6,2,1,5,6,2,7,3,2,6,7,3,4,0,3,7,4]),n.computeVertexNormals(),n}function Ks(e,t,n=!0){let r=t.length>=3?t:[{x:-.5,y:-.5},{x:.5,y:-.5},{x:.5,y:.5},{x:-.5,y:.5}],i=Hs(r),a=r.flatMap((t,a)=>{let o=r[(a+1)%r.length],s=(t,r)=>{let a=n?1.06+zs(e+r)*.16:1;return{x:i.x+(t.x-i.x)*a,y:i.y+(t.y-i.y)*a}};return[0,1,2].map(e=>s({x:t.x+(o.x-t.x)*e/3,y:t.y+(o.y-t.y)*e/3},a*29+e*7))}),o=[],s=[];for(let e of a)o.push(e.x,0,e.y);let c=o.length/3;for(let t=0;t<a.length;t++){let n=a[t],r=.34+zs(e+t*29)*.13;o.push(i.x+(n.x-i.x)*r,.62+zs(e+t*31)*.36,i.y+(n.y-i.y)*r)}for(let e=0;e<a.length;e++){let t=(e+1)%a.length;s.push(e,c+t,t,e,c+e,c+t)}for(let e=1;e<a.length-1;e++)s.push(c,c+e+1,c+e);let l=new Je;return l.setAttribute(`position`,new m(o,3)),l.setIndex(s),l.computeVertexNormals(),l}function qs(e){return!e.clip||e.clip.length<3?[{x:-.5,y:-.5},{x:.5,y:-.5},{x:.5,y:.5},{x:-.5,y:.5}]:e.clip.map(t=>{let n=X({x:t.x-e.x,z:t.z-e.z},-(e.rotation??0));return{x:n.x/e.width,y:n.z/e.depth}})}function Js(e){if(e.health<=0)return 2;let t=1-e.health/Ya(e);return Math.max(0,Math.min(2,Math.floor((t+1e-6)*2)))}function Ys(e){let t=Js(e);return t===0?e.height:t===2?Math.max(3,e.height*Ls):e.height*Is}function Xs(e){return Js(e)===2?0:Ys(e)}var Zs=new Set,Qs=class{city;group=new i;exterior;markers;concrete;rubble;heatmapMarkers;rubbleHeatmapMarkers;entries=new Map;matrix=new Ae;marker=new Ae;fromPosition=new K;toPosition=new K;fromRotation=new ee;toRotation=new ee;fromScale=new K;toScale=new K;markerPosition=new K;markerRotation=new ee;markerScale=new K;heatmapMatrix=new Ae;constructor(e,t){this.city=e;let n=this.capacityFor(e);this.markers=this.batch(n.markers,n.markers*64,n.markers*200,16777215,`destroyed-facade-edge-markers`,{side:1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.markers.castShadow=!0,this.markers.receiveShadow=!1,this.exterior=this.batch(n.exterior,n.exterior*64,n.exterior*200,16777215,`destroyed-facades`),this.exterior.castShadow=!1,this.concrete=this.batch(n.concrete,n.concrete*64,n.concrete*200,16777215,`destroyed-concrete`),this.concrete.castShadow=!1,this.rubble=this.batch(n.rubble,n.rubble*64,n.rubble*200,16777215,`destroyed-rubble`),this.rubble.castShadow=!1,this.group.add(this.markers,this.exterior,this.concrete,this.rubble);for(let n of e.buildings)this.build(n,t(n));this.syncDamage(0,!0),this.heatmapMarkers=this.markers.clone(),this.heatmapMarkers.name=`destroyed-heatmap-parts`,this.heatmapMarkers.material=new L({transparent:!0,opacity:.78,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.heatmapMarkers.castShadow=!1,this.heatmapMarkers.receiveShadow=!1,this.heatmapMarkers.frustumCulled=!1,this.heatmapMarkers.renderOrder=1,this.rubbleHeatmapMarkers=this.markers.clone(),this.rubbleHeatmapMarkers.name=`destroyed-rubble-heatmap`,this.rubbleHeatmapMarkers.material=new L({transparent:!0,opacity:.46,depthWrite:!1,depthTest:!1,side:2}),this.rubbleHeatmapMarkers.castShadow=!1,this.rubbleHeatmapMarkers.receiveShadow=!1,this.rubbleHeatmapMarkers.frustumCulled=!1,this.rubbleHeatmapMarkers.renderOrder=2}batch(e,t,n,r,i,a={}){let o=new pe(e,t,n,mt(r,a));return o.name=i,o.frustumCulled=!1,o.sortObjects=!1,o.castShadow=!0,o.receiveShadow=!0,o.userData.preserveShadowFlags=!0,o}capacityFor(e){let t=0,n=0;for(let r of e.buildings){let e=(r.clip&&r.clip.length>=3?r.clip.length:4)*3;n+=e,t+=e+7}let r=Math.max(e.buildings.length,1);return{markers:Math.max(t,1),exterior:Math.max(n,1),concrete:r*6,rubble:r}}add(e,t,n,r,i=!1){t.index||t.setIndex(Array.from({length:t.getAttribute(`position`).count},(e,t)=>t)),t.getAttribute(`uv`)||t.setAttribute(`uv`,new m(t.getAttribute(`position`).count*2,2));let a=e.addGeometry(t);t.dispose();let o=e.addInstance(a);return e.setMatrixAt(o,n),e.setColorAt(o,new z(r)),e.setVisibleAt(o,i),o}transform(e,n,r){return this.matrix.compose(e,new ee().setFromEuler(new t(n.x,n.y,n.z)),r).clone()}buildingMatrix(e,t,n=new K,r=new K(1,1,1)){let i=X({x:t.x,z:t.z},e.rotation??0);return this.transform(new K(e.x+i.x,Q+t.y,e.z+i.z),new K(n.x,-(e.rotation??0)+n.y,n.z),r)}build(e,t){let n=[],r=[],i=[],a=Math.max(.65,Math.min(e.width,e.depth)*.045),o=e.clip&&e.clip.length>=3?e.clip.map((t,n)=>[t,e.clip[(n+1)%e.clip.length]]):this.rectangleEdges(e),s=0;for(let[r,i]of o){let o=i.x-r.x,c=i.z-r.z,l=Math.hypot(o,c),u=Vs(e.id*733+s*389,3,l/e.height);for(let d of u){let u=Hs(d),f=new K((r.x+i.x)/2,0,(r.z+i.z)/2),p=o/l,m=c/l,h=new K(f.x+p*u.x*l,(u.y+.5)*e.height,f.z+m*u.x*l),g=this.transform(h.setY(Q+h.y),new K(0,-Math.atan2(c,o),0),new K(l,e.height,a)),_=e.height*.16,v=Math.min(...d.map(e=>e.y-u.y))*_,y=this.transform(new K(h.x,Q-v,h.z),new K(0,-Math.atan2(c,o),0),new K(l*.7,_,a*1.35)),b=Us(d,u),x=b.clone(),S=!e.clip||this.geometryIsOnShard(b,y)&&this.geometryIsOnShard(b,this.markerMatrix(y)),C=this.add(this.exterior,b,g,t),w=this.add(this.markers,x,this.markerMatrix(g),this.markerColor(t));n.push({id:C,markerId:w,batch:`exterior`,home:g,rubble:y,rubbleSafe:S}),s++}}let c=e.district===`residential`?3:e.district===`commercial`?5:7,l=Math.max(.5,Math.min(e.width,e.depth)*.035),u=Math.floor(c/3),d=qs(e);for(let t=0;t<1;t++){let n=e.clip&&e.clip.length>=3?Us(d,{x:0,y:0}):Ws(e.id*173+u*41)[t],i=n.clone(),a=this.buildingMatrix(e,new K(0,(u+1)/(c+1)*e.height,0),new K(Math.PI/2,0,0),new K(e.width*.76,e.depth*.73,l)),o=this.add(this.concrete,n,a,Ps),s=this.add(this.markers,i,this.markerMatrix(a),this.markerColor(Ps));r.push({id:o,markerId:s,batch:`concrete`,home:a})}let f=this.buildingMatrix(e,new K(0,e.height*.45,0),new K,new K(e.width*.25,e.height*.9,e.depth*.23)),p=this.buildingMatrix(e,new K(0,Math.max(e.height*.035,.8),0),new K,new K(e.width*.25,e.height*.06,e.depth*.23)),m=Gs(e.id+1280),h=m.clone(),g=!e.clip||this.geometryIsOnShard(m,p),_=this.add(this.concrete,m,f,Fs),v=this.add(this.markers,h,this.markerMatrix(f),this.markerColor(Fs));i.push({id:_,markerId:v,home:f,final:p,rubbleSafe:g});for(let[t,n]of[[-.25,-.23],[.25,-.23],[.25,.23],[-.25,.23]]){let r={x:e.width*t,z:e.depth*n};if(e.clip&&!ja(e.x+X(r,e.rotation??0).x,e.z+X(r,e.rotation??0).z,e.clip))continue;let a=this.buildingMatrix(e,new K(r.x,e.height*.42,r.z),new K,new K(Math.max(.9,Math.min(e.width,e.depth)*.065),e.height*.84,Math.max(.9,Math.min(e.width,e.depth)*.065))),o=this.buildingMatrix(e,new K(r.x,Math.max(.8,e.height*(.035+zs(e.id+t*100)*.025)),r.z),new K,new K(Math.max(.9,Math.min(e.width,e.depth)*.065),e.height*.07,Math.max(.9,Math.min(e.width,e.depth)*.065))),s=Gs(e.id+i.length*29),c=s.clone(),l=!e.clip||this.geometryIsOnShard(s,o),u=this.add(this.concrete,s,a,Fs),d=this.add(this.markers,c,this.markerMatrix(a),this.markerColor(Fs));i.push({id:u,markerId:d,home:a,final:o,rubbleSafe:l})}let y=this.buildingMatrix(e,new K(0,.05,0),new K,new K(e.width,Math.max(1,Math.min(e.width,e.depth)*.13),e.depth)),b=!!(e.clip&&e.clip.length>=3),x=Ks(e.id,qs(e),!b),S=x.clone(),C=y.clone().scale(new K(1,.58,1)),w={id:this.add(this.rubble,x,y,t),markerId:this.add(this.markers,S,b?y:this.markerMatrix(y),this.markerColor(t)),visible:!e.clip||e.clip.length>=3,home:y,damaged:C,edgeClipped:b};this.entries.set(e.id,{phase:-1,shell:n,floors:r,fragments:[...n,...r],structure:i,mound:w})}rectangleEdges(e){let t=e.width/2,n=e.depth/2,r=[[-t,-n],[t,-n],[t,n],[-t,n]].map(([t,n])=>{let r=X({x:t,z:n},e.rotation??0);return{x:e.x+r.x,z:e.z+r.z}});return r.map((e,t)=>[e,r[(t+1)%r.length]])}geometryIsOnShard(e,t){let n=e.getAttribute(`position`),r=new K;for(let e=0;e<n.count;e++)if(r.fromBufferAttribute(n,e).applyMatrix4(t),!this.city.containsPoint(r.x,r.z))return!1;return!0}syncDamage(e,t=!1){let n=!1,r=!1,i;for(let e of this.city.buildings){let t=this.entries.get(e.id);if(!t)continue;let a=Js(e);if(a!==t.phase){t.phase=a,n=!0,(i??=new Set).add(e.id);for(let[n,i]of t.fragments.entries())this.setFragment(i,this.fragmentVisible(e,t,i,n,a),a===2),r=!0;for(let[n,i]of t.structure.entries()){let t=this.structureVisible(e,i,n,a),o=this.structuralMatrix(i,a);this.concrete.setVisibleAt(i.id,t),this.concrete.setMatrixAt(i.id,o),this.markers.setVisibleAt(i.markerId,t),this.markers.setMatrixAt(i.markerId,this.markerMatrix(o)),r=!0}let o=a===2?t.mound.home:t.mound.damaged;this.rubble.setVisibleAt(t.mound.id,a>0&&t.mound.visible),this.rubble.setMatrixAt(t.mound.id,o),this.markers.setVisibleAt(t.mound.markerId,a>0&&t.mound.visible),this.markers.setMatrixAt(t.mound.markerId,t.mound.edgeClipped?o:this.markerMatrix(o))}}return{phaseChanged:n,transformsChanged:r,changedIds:i??Zs}}fragmentVisible(e,t,n,r,i){let a=r>=t.shell.length,o=t.shell.length+e.id%t.floors.length,s=e.district===`downtown`?3:4,c=a&&i>=s&&r!==o,l=e.id%t.shell.length,u=Math.floor(zs(e.id*811+47)*t.shell.length),d=!a&&n.rubbleSafe!==!1&&(r===l||r===u),f=i===2&&!d,p=.35*Math.min(1,i/1),m=i<=1?0:.35+.3*(i-1)/1,h=!a&&i<2&&zs(e.id*997+r*37)<Math.max(p,m);return i>0&&!c&&!h&&!f}setFragment(e,t,n=!1){let r=e.batch===`concrete`?this.concrete:this.exterior;r.setVisibleAt(e.id,t),e.markerId!==void 0&&this.markers.setVisibleAt(e.markerId,t);let i=n&&e.rubble?e.rubble:e.home;r.setMatrixAt(e.id,i),e.markerId!==void 0&&this.markers.setMatrixAt(e.markerId,this.markerMatrix(i))}markerMatrix(e){return e.decompose(this.markerPosition,this.markerRotation,this.markerScale),this.markerScale.multiplyScalar(1.018),this.markerScale.z*=1.04/1.018,this.marker.compose(this.markerPosition,this.markerRotation,this.markerScale)}markerColor(e){return new z(e).multiplyScalar(.24).getHex()}structureVisible(e,t,n,r){if(r===0)return!1;if(n===0)return r<2||t.rubbleSafe;let i=Math.max(0,4-Math.ceil(r*4/2));return(n-1+e.id)%4<i&&(r<2||t.rubbleSafe)}structuralMatrix(e,t){if(t<=0)return e.home;if(t>=2)return e.final;e.home.decompose(this.fromPosition,this.fromRotation,this.fromScale),e.final.decompose(this.toPosition,this.toRotation,this.toScale);let n=Math.sqrt(t/2);return this.matrix.compose(this.fromPosition.lerp(this.toPosition,n),this.fromRotation.slerp(this.toRotation,n),this.fromScale.lerp(this.toScale,n))}phaseOf(e){return this.entries.get(e)?.phase??0}get heatmapSources(){return[this.heatmapMarkers,this.rubbleHeatmapMarkers]}syncHeatmap(e){for(let[t,n]of this.entries){let r=e.get(t),i=(e,t,n)=>{this.heatmapMarkers.setVisibleAt(e,r!==void 0&&this.markers.getVisibleAt(e)),t.getMatrixAt(n,this.heatmapMatrix),this.heatmapMarkers.setMatrixAt(e,this.heatmapMatrix),r!==void 0&&this.heatmapMarkers.setColorAt(e,new z(r))};for(let e of n.fragments)e.markerId!==void 0&&i(e.markerId,e.batch===`concrete`?this.concrete:this.exterior,e.id);for(let e of n.structure)i(e.markerId,this.concrete,e.id);i(n.mound.markerId,this.rubble,n.mound.id)}}syncRubbleHeatmap(e){for(let[t,n]of this.entries){let r=e.has(t)&&n.phase===2&&this.markers.getVisibleAt(n.mound.markerId);this.rubbleHeatmapMarkers.setVisibleAt(n.mound.markerId,r),this.rubble.getMatrixAt(n.mound.id,this.heatmapMatrix),this.rubbleHeatmapMarkers.setMatrixAt(n.mound.markerId,this.heatmapMatrix),r&&this.rubbleHeatmapMarkers.setColorAt(n.mound.markerId,new z(672498));for(let e of n.fragments)e.markerId!==void 0&&this.rubbleHeatmapMarkers.setVisibleAt(e.markerId,!1);for(let e of n.structure)this.rubbleHeatmapMarkers.setVisibleAt(e.markerId,!1)}}get meshCount(){return 4}dispose(){this.heatmapMarkers.dispose(),this.rubbleHeatmapMarkers.dispose(),this.markers.dispose(),this.exterior.dispose(),this.concrete.dispose(),this.rubble.dispose();for(let e of[this.markers,this.exterior,this.concrete,this.rubble])e.material.dispose()}},$s=[9521734,5731979,4672333,5405816,12167306,7897170,7957373],ec=3425875,tc=13936950,nc=14278100,rc=2964817,ic=12077637,ac=4288160,oc=.1125,sc=class{box=new ye(1,1,1);wedge=dc();materials=new Map;local=new Ae;root=new Ae;scale=new K;position=new K;identity=new ee;sideways=new Ae().makeRotationY(Math.PI/2);describe(e){let t=uc(e),n=lc(t),r=.92+t()*.16,i=.95+t()*.1,a=.96+t()*.08,o=(t()-.5)*.18,s=$s[e.paletteIndex%$s.length]??$s[0],c=cc[n],l=4.875*c.length*r,u=2.1*c.width*i,d=1.775*c.bodyHeight,f=d/2,p=1.775*c.cabinHeight*a,m=l*c.cabinLength,h=u*c.cabinWidth,g=d+p/2-.02,_=[{kind:`body`,size:[l,d,u],position:[0,f,0],color:n===`taxi`?tc:n===`police`?nc:s},{kind:`cabin`,size:[m,p,h],position:[l*(c.cabinForward+o),g,0],color:ec}];if(n===`truck`){let e=l*.43;_.push({kind:`cargo`,size:[e,d*2.45,u*.9],position:[-l*.24,d*1.225,0],color:s})}if(n===`taxi`&&_.push({kind:`taxi-sign`,size:[.45,.18,.42],position:[l*.03,d+p+.08,0],color:15851409}),n===`police`){let e=d+p+.06;_.push({kind:`police-body-dark`,size:[l*.3,d*.72,u*1.01],position:[-l*.31,d*.58,0],color:rc},{kind:`police-bar-red`,size:[.28,.12,.48],position:[l*.02,e,-.25],color:ic},{kind:`police-bar-blue`,size:[.28,.12,.48],position:[l*.02,e,.25],color:ac})}return{type:n,parts:_}}create(e){let t=e.map(e=>({car:e,vehicle:this.describe(e)})),n=new Map;for(let{vehicle:e}of t)for(let t of e.parts){let e=this.key(t);n.set(e,(n.get(e)??0)+1)}let r=new Map,a=new i;a.name=`cars`;for(let[e,t]of n){let[n,i]=e.split(`:`),o=new x(n===`cabin`?this.wedge:this.box,this.material(Number(i)),t);o.name=`cars-${n}`,o.frustumCulled=!1,o.castShadow=!0,o.receiveShadow=!0,r.set(e,o),a.add(o)}let o=new Map;for(let{car:e,vehicle:n}of t){this.root.makeRotationY(-(e.rotation??0)),e.alongX||this.root.multiply(this.sideways),this.root.setPosition(e.x,(e.parked?Q:1)+oc,e.z);for(let e of n.parts){let t=this.key(e),n=o.get(t)??0,i=r.get(t);i&&(this.scale.set(...e.size),this.local.compose(this.position.set(...e.position),this.identity,this.scale),this.local.premultiply(this.root),i.setMatrixAt(n,this.local),o.set(t,n+1))}}for(let e of r.values())e.instanceMatrix.needsUpdate=!0;return a}dispose(){this.box.dispose(),this.wedge.dispose();for(let e of this.materials.values())e.dispose();this.materials.clear()}key(e){return`${e.kind}:${e.color}`}material(e){let t=this.materials.get(e);return t||(t=mt(e),this.materials.set(e,t)),t}},cc={compact:{length:.85,width:.95,bodyHeight:.3,cabinLength:.48,cabinWidth:.72,cabinHeight:.43,cabinForward:.02},sedan:{length:1,width:1,bodyHeight:.28,cabinLength:.52,cabinWidth:.75,cabinHeight:.37,cabinForward:.08},suv:{length:.95,width:1.05,bodyHeight:.34,cabinLength:.58,cabinWidth:.8,cabinHeight:.52,cabinForward:.02},van:{length:1.1,width:1,bodyHeight:.32,cabinLength:.68,cabinWidth:.82,cabinHeight:.57,cabinForward:-.05},truck:{length:1.65,width:1.05,bodyHeight:.32,cabinLength:.27,cabinWidth:.78,cabinHeight:.43,cabinForward:.31},taxi:{length:1,width:1,bodyHeight:.28,cabinLength:.52,cabinWidth:.75,cabinHeight:.37,cabinForward:.08},police:{length:1,width:1,bodyHeight:.28,cabinLength:.52,cabinWidth:.75,cabinHeight:.37,cabinForward:.08}};function lc(e){let t=e();return t<.35?`sedan`:t<.6?`compact`:t<.75?`suv`:t<.9?`van`:t<.97?`truck`:t<.99?e()<.5?`taxi`:`police`:`sedan`}function uc(e){let t=Math.imul(Math.round(e.x*16),2654435761)^Math.imul(Math.round(e.z*16),2246822507);return t^=Math.imul(e.paletteIndex+1,3266489909),t^=e.parked?668265261:374761393,t^=e.alongX?0:2135587861,()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function dc(){let e=new Float32Array([-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,.5,.12,-.5,.5,.12,.5,-.5,.5,.5]),t=[0,1,2,0,2,3,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0,4,7,6,4,6,5],n=new Je;return n.setAttribute(`position`,new Re(e,3)),n.setIndex(t),n.computeVertexNormals(),n}function fc(e){let t=e.length,n=[];for(let r=0;r<t;r++){let i=e[r],a=e[(r+1)%t];for(let o=r+2;o<t;o++){if(r===0&&o===t-1)continue;let s=e[o],c=e[(o+1)%t];Ua(i,a,s,c)&&n.push([r,o])}}return n}function pc(e,t,n=30){let r=t.length,i=t.slice();for(let t=0;t<n;t++){let t=fc(i);if(t.length===0)break;let n=Array(r).fill(1);for(let[e,i]of t)n[e]*=.7,n[(e+1)%r]*=.7,n[i]*=.7,n[(i+1)%r]*=.7;i=i.map((t,r)=>n[r]===1?t:Va(e[r],t,n[r]))}return i}function mc(e,t){let n=e.length;if(t<=0||n===0)return e.slice();let r=Array(n);for(let i=0;i<n;i++){let a=0,o=0;for(let r=-t;r<=t;r++){let s=t+1-Math.abs(r);a+=e[((i+r)%n+n)%n]*s,o+=s}r[i]=a/o}return r}var hc={seed:99537374,maxRimSpacing:30,ringCount:5,totalDepth:340,cliffFraction:.4,insetPower:1.6,maxInset:180,chunkCountMin:24,chunkCountMax:30,chunkInsetVariation:.55,chunkProtrusion:75,noiseFrequency:8,noiseStrength:.35,anchorCount:5,anchorPull:.6,anchorJitter:.55,seamNoiseFrequency:3,seamSnapDistance:60},gc=.26,_c=.11;function vc(e,t){return e/Math.max(1,t)*3}function yc(e,t,n=[]){let r=bc(e,t.maxRimSpacing),i=r.length,a=za(r),o=r.map(e=>Math.hypot(e.x-a.x,e.z-a.z)),s=Math.max(...o,1),c=Math.max(o.reduce((e,t)=>e+t,0)/Math.max(o.length,1),1),l=Math.min(t.maxInset,c*gc),u=Math.min(t.chunkProtrusion,c*_c),d=new ao(t.seed>>>0),f=Sc(i,t,d),p=wc(f,i),m=Tc(e,a,s,t,d),h=i/f.length,g=Math.max(1,Math.round(h/2)),_=mc(p.map(e=>f[e].insetBias),g),v=mc(p.map(e=>f[e].protrusion),g),y=xc(r,a),b=g*2,x=mc(y.map(e=>e.x),b),S=mc(y.map(e=>e.z),b),C=x.map((e,t)=>Ba({x:e,z:S[t]})),w=n.length?r.map(e=>{let r;for(let i of n){let n=La(e.x,e.z,i.path);!n||n.distance>=t.seamSnapDistance||r&&n.distance>=r.distance||(r={seam:i,crackT:n.t,feather:Ha(1-n.distance/t.seamSnapDistance),distance:n.distance})}return r}):void 0,T=Math.max(1,Math.floor(t.ringCount)),E=[];for(let e=0;e<=T;e++){let n=e/T,o=n===0?0:-t.totalDepth*n,s=Ha((n-t.cliffFraction)/Math.max(1e-6,1-t.cliffFraction))**+Math.max(.01,t.insetPower),c=t.anchorPull<=0?0:t.anchorPull*Ha((n-t.cliffFraction)/Math.max(1e-6,1-t.cliffFraction)),d=[];for(let o=0;o<i;o++){let f=r[o],p=C[o],h=ls(o/i*t.noiseFrequency,e*.6+11,t.seed^2654435769),g=l*s*(1+_[o]*t.chunkInsetVariation),y=Math.max(0,g*(1+h*t.noiseStrength)),b=Math.sin(n*Math.PI),x=v[o]*u*b,S=w?.[o],T=S?S.seam.sign*ls(S.crackT*t.seamNoiseFrequency,7.3,S.seam.seed)*Math.sin(S.crackT*Math.PI)*u*b:0,E=S?x+(T-x)*S.feather:x,D=p;if(c>0){let e=Ec(f,m);e&&(D=Ba(Va(p,Ba({x:e.x-f.x,z:e.z-f.z}),c)))}let O=Math.hypot(f.x-a.x,f.z-a.z),k=Math.min(y-E,O*.85);d.push({x:f.x+D.x*k,z:f.z+D.z*k})}E.push({index:e,t:n,y:o,points:pc(r,d)})}return{perimeter:r,rings:E,chunks:f,anchors:m}}function bc(e,t){let n=e.length;if(n<2)return e.map(e=>({...e}));let r=Math.max(.001,t),i=[];for(let t=0;t<n;t++){let a=e[t],o=e[(t+1)%n];i.push({x:a.x,z:a.z});let s=Math.hypot(o.x-a.x,o.z-a.z),c=Math.ceil(s/r);for(let e=1;e<c;e++){let t=e/c;i.push({x:a.x+(o.x-a.x)*t,z:a.z+(o.z-a.z)*t})}}return i}function xc(e,t){let n=e.length;return e.map((r,i)=>{let a=e[(i-1+n)%n],o=e[(i+1)%n],s={x:o.x-a.x,z:o.z-a.z},c=Ba({x:-s.z,z:s.x}),l={x:t.x-r.x,z:t.z-r.z};return c.x*l.x+c.z*l.z>=0?c:{x:-c.x,z:-c.z}})}function Sc(e,t,n){let r=Math.max(1,Math.min(t.chunkCountMax,Math.round(n.range(t.chunkCountMin,t.chunkCountMax+1)))),i=Math.max(1,Math.min(r,e)),a=Array.from({length:i},()=>n.range(.4,1)),o=a.reduce((e,t)=>e+t,0),s=[],c=0;for(let t=0;t<i;t++){let r=i-t-1,l=e-c,u=Math.max(1,Math.round(a[t]/o*e)),d=r===0?l:Math.min(u,l-r);s.push({startIndex:c,length:d,insetBias:n.range(-1,1),protrusion:Cc(n),colourVariant:n.next()}),c+=d}return s}function Cc(e){let t=e.next();return t<.35?0:t<.675?e.range(.3,1):-e.range(.15,.5)}function wc(e,t){let n=Array(t).fill(e.length-1);return e.forEach((e,r)=>{for(let i=e.startIndex;i<e.startIndex+e.length&&i<t;i++)n[i]=r}),n}function Tc(e,t,n,r,i){let a=[];for(let o=0;o<Math.max(1,Math.floor(r.anchorCount));o++){let o=i.range(0,Math.PI*2),s=n*r.anchorJitter*Math.sqrt(i.next()),c={x:t.x+Math.cos(o)*s,z:t.z+Math.sin(o)*s};for(let n=0;n<6&&!ja(c.x,c.z,e);n++)c={x:(c.x+t.x)/2,z:(c.z+t.z)/2};a.push(c)}return a}function Ec(e,t){let n,r=1/0;for(let i of t){let t=Math.hypot(i.x-e.x,i.z-e.z);t<r&&(r=t,n=i)}return n}function Dc(e){let t=2166136261;for(let n of e)t=Math.imul(t^Math.round(n.x*16),16777619),t=Math.imul(t^Math.round(n.z*16),16777619);return t>>>0}function Oc(e,t,n){return{...n,seed:Dc(e),ringCount:t===0?n.ringCount:3,totalDepth:t===0?n.totalDepth:vc(n.totalDepth,n.ringCount)}}function kc(e){let t=new Map,n=(e,n)=>{let r=t.get(e);r?r.push(n):t.set(e,[n])};for(let t of e){let e=Dc(t.path),[r,i]=t.surfaces;n(r,{path:t.path,sign:1,seed:e}),n(i,{path:t.path.map(e=>({x:e.x+t.offset.x,z:e.z+t.offset.z})),sign:-1,seed:e})}return t}function Ac(e,t){let n=[],r=[],{perimeter:i,rings:a}=e;t.topColour&&Mc(n,r,a[0].points,0,t.topColour,!1);for(let e=0;e<a.length-1;e++){let o=a[e],s=a[e+1],c=t.bandColour((o.t+s.t)/2);for(let t=0;t<i.length;t++){let a=(t+1)%i.length,l={x:o.points[t].x,y:o.y,z:o.points[t].z},u={x:o.points[a].x,y:o.y,z:o.points[a].z},d={x:s.points[a].x,y:s.y,z:s.points[a].z},f={x:s.points[t].x,y:s.y,z:s.points[t].z},p=(t+e)%2==0?[[l,u,d],[l,d,f]]:[[l,u,f],[u,d,f]];for(let[e,t,i]of p)jc(n,r,e,t,i,c)}}let o=a[a.length-1];Mc(n,r,o.points,o.y,t.floorColour,!0);let s=new Je;return s.setAttribute(`position`,new Re(new Float32Array(n),3)),s.setAttribute(`color`,new Re(new Float32Array(r),3)),s.computeVertexNormals(),s}function jc(e,t,n,r,i,a){e.push(n.x,n.y,n.z,r.x,r.y,r.z,i.x,i.y,i.z);for(let e=0;e<3;e++)t.push(a.r,a.g,a.b)}function Mc(e,t,n,r,i,a){if(n.length<3)return;let o=n.map(e=>new H(e.x,e.z));for(let n of ce.triangulateShape(o,[])){let s=n[0],c=n[1],l=n[2];if(s===void 0||c===void 0||l===void 0)continue;let u=o[s],d=o[c],f=o[l],[p,m,h]=(d.x-u.x)*(f.y-u.y)-(d.y-u.y)*(f.x-u.x)>0===a?[u,d,f]:[u,f,d];jc(e,t,{x:p.x,y:r,z:p.y},{x:m.x,y:r,z:m.y},{x:h.x,y:r,z:h.y},i)}}var Nc=[{facade:12823945,roof:11771002,trim:13416082,window:8942684,rooftop:10587760},{facade:12494723,roof:11244402,trim:13021069,window:8417113,rooftop:9995883},{facade:12165501,roof:10849645,trim:12757638,window:8219735,rooftop:9601128},{facade:13021324,roof:11573880,trim:13613463,window:9140319,rooftop:10521968},{facade:12099966,roof:10849902,trim:12692103,window:8351064,rooftop:9535593},{facade:12626310,roof:11376245,trim:13218446,window:8745820,rooftop:10127467},{facade:12955531,roof:11573624,trim:13547413,window:9008735,rooftop:10390383},{facade:12297344,roof:10981232,trim:12889481,window:8416857,rooftop:9732456},{facade:12626566,roof:11375988,trim:13218446,window:8679771,rooftop:9995883},{facade:13087117,roof:11705210,trim:13678999,window:9140318,rooftop:10587760},{facade:12034431,roof:10718317,trim:12626311,window:8219479,rooftop:9404007},{facade:12889480,roof:11573624,trim:13481618,window:9008477,rooftop:10455918},{facade:12231551,roof:10915696,trim:12823688,window:8416856,rooftop:9666921},{facade:12692102,roof:11376245,trim:13284238,window:8745563,rooftop:10193004},{facade:10650211,roof:8744276,trim:11178095,window:7298122,rooftop:7956047},{facade:9732202,roof:8284503,trim:10389616,window:7035981,rooftop:7693910},{facade:10129774,roof:8551006,trim:10787448,window:7366991,rooftop:8156510},{facade:8154970,roof:6774093,trim:8944228,window:6247752,rooftop:6643024},{facade:10840145,roof:8936778,trim:11368542,window:7492164,rooftop:8347727},{facade:12165220,roof:9994065,trim:12823152,window:7957324,rooftop:9271631}];function Pc(e){let t=Math.imul(e.id+1,2654435761)^Math.imul(e.paletteIndex+11,2246822507);return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,Nc[(t>>>0)%Nc.length]??Nc[0]}var Fc={sky:12048612,skyHorizon:14872553,shardTop:10323041,cliff:[11100220,9260336,7289894],road:10659477,sidewalk:13027512,parking:10132878,laneMarking:14205527,laneDivider:14672082,crosswalk:14672082,park:8362574,tree:5204788,treeTrunk:7360569,rubble:12892060,hvac:13027512},Ic=.8,Lc=3;function Rc(e,t={}){return mt(e,t)}function zc(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.z-i.x*r.z}return t/2}function Bc(e){let t=Fc.cliff,n=Math.max(0,Math.min(1,e))*(t.length-1),r=Math.min(t.length-2,Math.floor(n));return new z(t[r]).lerp(new z(t[r+1]),n-r)}function Vc(e){let t=new ye(1,1,1,1,e,1).toNonIndexed(),n=t.getAttribute(`position`),r=new Float32Array(n.count*3);for(let t=0;t<n.count;t+=3){let i=(n.getY(t)+n.getY(t+1)+n.getY(t+2))/3,a=Math.floor((i+.5)*e)%2==0?1:Ic;for(let e=0;e<3;e++)r[(t+e)*3]=a,r[(t+e)*3+1]=a,r[(t+e)*3+2]=a}return t.setAttribute(`color`,new Re(r,3)),t}var Hc=class{city;group=new i;buildingMeshList=[];buildingHeatmapInstanceIdsByMesh=new Map;slots=new Map;vehicleFactory=new sc;detailSlots=new Map;roofs;trims;windowBands;greebles;greebleStart=new Map;debris;matrix=new Ae;color=new z;scale=new K;clipped;clippedState=``;landscaped;landscapedState=``;destruction;constructor(e){this.city=e;for(let e of this.buildShardTops())this.group.add(e);for(let e of this.buildUnderside())this.group.add(e);this.group.add(this.buildPads(`built`,Fc.sidewalk,Q)),this.landscaped=this.buildLandscapedBuiltBlocks(),this.group.add(this.landscaped),this.group.add(this.buildPads(`parking`,Fc.parking,Q)),this.group.add(this.buildPads(`park`,Fc.sidewalk,Q)),this.group.add(this.buildParkland()),this.group.add(this.buildRoads());let t=this.buildStripes(this.city.centreLines,Fc.laneMarking,1.1);t.name=`centre-lines`,this.group.add(t);let n=this.buildStripes(this.city.laneLines,Fc.laneDivider,1.1);n.name=`lane-lines`,this.group.add(n);let r=this.buildStripes(this.city.crosswalks,Fc.crosswalk,1.1);r.name=`crosswalks`,this.group.add(r),this.group.add(this.buildTrees()),this.group.add(this.buildCars());let i=new Map;for(let e of this.city.buildings){if(e.clip)continue;let t=Ga(e.height,e.district),n=i.get(t);n?n.push(e):i.set(t,[e])}for(let[e,t]of i){let n=new x(Vc(e),Rc(16777215,{vertexColors:!0}),t.length);n.frustumCulled=!1,n.userData.storeys=e,this.buildingMeshList.push(n),this.buildingHeatmapInstanceIdsByMesh.set(n,t.map(e=>e.id)),this.group.add(n),t.forEach((e,t)=>this.slots.set(e.id,{mesh:n,index:t}))}let a=this.city.buildings.filter(e=>!e.clip);a.forEach((e,t)=>this.detailSlots.set(e.id,t)),this.roofs=new x(new ye(1,1,1),Rc(16777215),Math.max(a.length,1)),this.roofs.name=`building-roofs`,this.roofs.frustumCulled=!1,this.buildingHeatmapInstanceIdsByMesh.set(this.roofs,a.map(e=>e.id)),this.trims=new x(new ye(1,1,1),Rc(16777215),Math.max(a.length,1)),this.trims.name=`building-trims`,this.trims.frustumCulled=!1,this.windowBands=new x(new ye(1,1,1),Rc(16777215),Math.max(a.length,1)),this.windowBands.name=`building-window-bands`,this.windowBands.frustumCulled=!1,this.group.add(this.trims,this.windowBands,this.roofs);let o=0;for(let t of e.buildings)this.greebleStart.set(t.id,o),o+=t.greebles;this.greebles=new x(new ye(1,1,1),Rc(16777215),Math.max(o,1)),this.greebles.name=`rooftop-structures`,this.greebles.frustumCulled=!1,this.group.add(this.greebles),this.debris=new x(new ye(1,1,1),Rc(Fc.rubble),Math.max(e.buildings.length*Lc,1)),this.debris.frustumCulled=!1,this.group.add(this.debris),this.destruction=new Qs(this.city,e=>Pc(e).facade),this.group.add(this.destruction.group),this.refreshAll(),this.group.traverse(e=>{e.userData.preserveShadowFlags||(e.castShadow=!0,e.receiveShadow=!0)})}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof R))return;let n=t.material;Array.isArray(n)?n.forEach(t=>ft(t,e)):ft(n,e)})}buildShardTops(){return this.city.surfaces.map((e,t)=>{let n=e[0];if(!n)throw Error(`city boundary is empty`);let r=new ct;r.moveTo(n.x,-n.z);for(let t=1;t<e.length;t++){let n=e[t];n&&r.lineTo(n.x,-n.z)}r.closePath();let i=new R(new a(r),Rc(Fc.shardTop));return i.rotation.x=-Math.PI/2,i.name=`shard-top-${t}`,i})}buildUnderside(){let e=kc(this.city.fractureSeams),t={...hc,totalDepth:340};return this.city.surfaces.map((n,r)=>{let i=zc(n)>=0?n:[...n].reverse(),a=Ac(yc(i,Oc(i,r,t),e.get(r)),{bandColour:Bc,floorColour:Bc(1)}),o=new R(a,Rc(16777215,{vertexColors:!0}));return o.name=`shard-underside-${r}`,o})}polygonCentre(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}scaleFrom(e,t,n){return{x:t.x+(e.x-t.x)*n,z:t.z+(e.z-t.z)*n}}buildPads(e,t,n){let r=this.city.blocks.filter(t=>t.kind===e),i=r.map(e=>e.clip??this.rectPoints(e)),a=e===`park`?r.map(e=>{let t=this.parkGrassFootprint(e);return t.length>=3?[t]:[]}):void 0,o=new R(this.polygonsGeometry(i,0,n,a),Rc(t));return o.name=`${e}-pads`,o}buildParkland(){let e=this.city.blocks.filter(e=>e.kind===`park`).map(e=>this.parkGrassFootprint(e)).filter(e=>e.length>=3),t=new R(this.polygonsGeometry(e,0,Q),Rc(Fc.park));return t.name=`parkland`,t}buildLandscapedBuiltBlocks(){let e=[],t=this.city.buildings.filter(e=>e.state!==`rubble`);for(let n of this.city.blocks){if(n.kind!==`built`||n.district!==`downtown`||!n.innerClip||n.innerClip.length<3)continue;let r=this.triangulateGrass(n.innerClip),i=Aa(n.innerClip),a=t.filter(e=>{let t=qa[e.state],n=Math.hypot(e.width*t/2+4,e.depth*t/2+4);return e.x+n>=i.x0&&e.x-n<=i.x1&&e.z+n>=i.z0&&e.z-n<=i.z1});for(let e of a)r=r.flatMap(t=>this.subtractConvexFootprint(t,this.bufferedBuildingFootprint(e)));r=r.filter(e=>!a.some(t=>Z(Na(e,this.bufferedBuildingFootprint(t)))>1e-4)),e.push(...r.filter(e=>e.length>=3))}let n=new R(this.polygonsGeometry(e,Q,Q+.01),Rc(Fc.park));return n.name=`downtown-landscaping`,n}triangulateGrass(e){let t=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),n=t.map(e=>new H(e.x,e.z));return ce.triangulateShape(n,[]).flatMap(e=>{let n=e.map(e=>t[e]).filter(e=>e!==void 0);return n.length===3?[n]:[]})}subtractConvexFootprint(e,t){if(e.length<3||t.length<3)return e.length>=3?[[...e]]:[];let n=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?t:[...t].reverse(),r=[...e],i=[];for(let e=0;e<n.length&&r.length>=3;e++){let t=n[e],a=n[(e+1)%n.length];if(!t||!a)continue;let o=Math.max(Math.hypot(a.x-t.x,a.z-t.z),1e-9),s={x:-(a.z-t.z)/o,z:(a.x-t.x)/o},c=s.x*t.x+s.z*t.z,l=Ma(r,{x:-s.x,z:-s.z},-c);l.length>=3&&i.push(l),r=Ma(r,s,c)}return i}bufferedBuildingFootprint(e){if(e.clip&&e.clip.length>=3)return this.offsetConvexFootprint(e.clip,4);let t=qa[e.state],n=e.width*t/2+4,r=e.depth*t/2+4,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=X(t,i);return{x:e.x+n.x,z:e.z+n.z}})}offsetConvexFootprint(e,t){let n=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),r=n.map((e,r)=>{let i=n[(r+1)%n.length];if(!i)throw Error(`visible footprint has no next edge`);let a=Math.max(Math.hypot(i.x-e.x,i.z-e.z),1e-9),o={x:-(i.z-e.z)/a,z:(i.x-e.x)/a};return{inward:o,offset:o.x*e.x+o.z*e.z-t}});return n.map((e,t)=>{let n=r[(t-1+r.length)%r.length],i=r[t];if(!n||!i)return e;let a=n.inward.x*i.inward.z-n.inward.z*i.inward.x;return Math.abs(a)<1e-6?e:{x:(n.offset*i.inward.z-n.inward.z*i.offset)/a,z:(n.inward.x*i.offset-n.offset*i.inward.x)/a}})}parkGrassFootprint(e){let t=e.innerClip;if(!t||t.length<3)return[];let n=e.clip??[];if(!n.length||!t.some(e=>this.distanceToPolygonEdge(e,n)<=1e-4))return t;let r=this.polygonCentre(t),i=Math.max(...t.map(e=>Math.hypot(e.x-r.x,e.z-r.z)),1),a=1-Math.min(.02/i,.001);return t.map(e=>this.scaleFrom(e,r,a))}distanceToPolygonEdge(e,t){let n=1/0;for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];if(!i||!a)continue;let o=a.x-i.x,s=a.z-i.z,c=Math.max(0,Math.min(1,((e.x-i.x)*o+(e.z-i.z)*s)/Math.max(o*o+s*s,1e-9)));n=Math.min(n,Math.hypot(e.x-(i.x+o*c),e.z-(i.z+s*c)))}return n}buildRoads(){let e=new R(this.polygonsGeometry(this.city.surfaces,0,1),Rc(Fc.road));return e.name=`roads`,e}rectPoints(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}appendPrism(e,t,n,r,i=!0,a=[]){if(t.length<3)return;let o=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?[...t]:[...t].reverse(),s=o.map(e=>new H(e.x,e.z)),c=a.filter(e=>e.length>=3).map(e=>e.map(e=>new H(e.x,e.z))),l=[s,...c].flat(),u=ce.triangulateShape(s,c);for(let t of u){let n=t[0],i=t[1],a=t[2];if(n===void 0||i===void 0||a===void 0)continue;let o=l[n],s=l[i],c=l[a];!o||!s||!c||((s.x-o.x)*(c.y-o.y)-(s.y-o.y)*(c.x-o.x)>0?e.push(o.x,r,o.y,c.x,r,c.y,s.x,r,s.y):e.push(o.x,r,o.y,s.x,r,s.y,c.x,r,c.y))}if(i)for(let t=0;t<o.length;t++){let i=o[t],a=o[(t+1)%o.length];!i||!a||e.push(i.x,n,i.z,i.x,r,i.z,a.x,n,a.z,a.x,n,a.z,i.x,r,i.z,a.x,r,a.z)}}appendBandedPrism(e,t,n,r,i,a,o){if(n.length<3)return;let s=e.length/3;this.appendPrism(e,n,r,i,!1);for(let n=s;n<e.length/3;n++)t.push(o.r,o.g,o.b);let c=Math.max(1,Math.round(a));for(let a=0;a<c;a++){let s=r+(i-r)*a/c,l=r+(i-r)*(a+1)/c,u=a%2==0?1:Ic,d=e.length/3;for(let t=0;t<n.length;t++){let r=n[t],i=n[(t+1)%n.length];!r||!i||e.push(r.x,s,r.z,r.x,l,r.z,i.x,s,i.z,i.x,s,i.z,r.x,l,r.z,i.x,l,i.z)}for(let n=d;n<e.length/3;n++)t.push(o.r*u,o.g*u,o.b*u)}}polygonsGeometry(e,t,n,r){let i=[];e.forEach((e,a)=>this.appendPrism(i,e,t,n,!0,r?.[a]??[]));let a=new Je;return a.setAttribute(`position`,new Re(new Float32Array(i),3)),a.computeVertexNormals(),a}buildClipped(){let e=[],t=[];for(let n of this.city.buildings){if(!n.clip||n.clip.length<3||Js(n)>0)continue;let r=n.height;this.color.setHex(Pc(n).facade);let i=Ga(r,n.district);this.appendBandedPrism(e,t,n.clip,Q,Q+r,i,this.color)}let n=new Je;n.setAttribute(`position`,new Re(new Float32Array(e),3)),n.setAttribute(`color`,new Re(new Float32Array(t),3)),n.computeVertexNormals();let r=new R(n,Rc(16777215,{vertexColors:!0}));return r.name=`clipped-buildings`,r}clippedSignature(){let e=``;for(let t of this.city.buildings)t.clip&&(e+=Js(t));return e}rebuildClipped(){let e=this.clippedSignature();if(e===this.clippedState)return;this.clippedState=e;let t=this.buildClipped();if(this.clipped){this.group.remove(this.clipped),this.clipped.geometry.dispose();let e=this.clipped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.clipped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}buildStripes(e,t,n){let r=e.map(e=>e.clip??this.rectPoints({x0:e.x-e.width/2,z0:e.z-e.depth/2,x1:e.x+e.width/2,z1:e.z+e.depth/2})),i=Rc(t);i.userData.outlineParameters={thickness:0,alpha:0,nearAlpha:0};let a=new R(this.polygonsGeometry(r,0,n),i);return a.frustumCulled=!1,a}buildTrees(){let e=new i;e.name=`trees`;let t=new x(new P(2.75,2),Rc(Fc.tree),Math.max(this.city.trees.length,1));t.name=`tree-canopies`,t.frustumCulled=!1;let n=new x(new ge(.55,.72,1.5,5),Rc(Fc.treeTrunk),Math.max(this.city.trees.length,1));return n.name=`tree-stumps`,n.frustumCulled=!1,this.city.trees.forEach((e,r)=>{this.matrix.makeScale(e.scale,e.scale,e.scale),this.matrix.setPosition(e.x,Q+.75*e.scale,e.z),n.setMatrixAt(r,this.matrix),this.matrix.setPosition(e.x,Q+3.5*e.scale,e.z),t.setMatrixAt(r,this.matrix)}),t.instanceMatrix.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0,e.add(n,t),e}buildCars(){return this.vehicleFactory.create(this.city.cars)}refresh(e){let t=this.city.get(e);t&&(this.writeBuilding(t),this.flush(this.slots.get(e)?.mesh),this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,t.clip&&this.rebuildClipped(),this.rebuildLandscaping())}refreshAll(){for(let e of this.city.buildings)this.writeBuilding(e);for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,this.rebuildClipped(),this.rebuildLandscaping()}syncDamage(e){let t=this.destruction?.syncDamage(e)??{phaseChanged:!1,transformsChanged:!1,changedIds:new Set};if(t.phaseChanged){let e=!1;for(let n of t.changedIds){let t=this.city.buildings.find(e=>e.id===n);t&&(this.writeBuilding(t),e||=!!t.clip)}for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,e&&this.rebuildClipped()}return t}landscapingSignature(){return this.city.buildings.filter(e=>e.district===`downtown`).map(e=>`${e.id}:${e.state[0]}`).join(`|`)}rebuildLandscaping(){let e=this.landscapingSignature();if(e===this.landscapedState)return;this.landscapedState=e;let t=this.buildLandscapedBuiltBlocks();if(this.landscaped){this.group.remove(this.landscaped),this.landscaped.geometry.dispose();let e=this.landscaped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.landscaped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}flush(e){e&&(e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0))}flushDetails(){for(let e of[this.roofs,this.trims,this.windowBands,this.greebles])this.flush(e)}writeBuilding(e){let t=this.slots.get(e.id);if(!t)return;let n=Js(e),r=e.height,i=e.width,a=e.depth,o=Pc(e);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n===0?i:0,n===0?r:0,n===0?a:0),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,Q+r/2,e.z),t.mesh.setMatrixAt(t.index,this.matrix),this.color.setHex(o.facade),t.mesh.setColorAt(t.index,this.color),this.writeBuildingDetails(e,i,a,r,o),this.writeGreebles(e,Q+r),this.writeDebris(e)}writeBuildingDetails(e,t,n,r,i){let a=this.detailSlots.get(e.id);if(a===void 0)return;let o=(t,n,r,i,o,s)=>{this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n,r,i),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,o,e.z),t.setMatrixAt(a,this.matrix),this.color.setHex(s),t.setColorAt(a,this.color)};if(Js(e)>0){for(let t of[this.roofs,this.trims,this.windowBands])this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,Q,e.z),t.setMatrixAt(a,this.matrix);return}let s=.65,c=.42,l=Q+r,u=Math.min(1.15,Math.max(.65,r*.09)),d=l-Math.min(4.2,Math.max(1.6,r*.22));o(this.trims,t*1.025,c,n*1.025,l-c/2,i.trim),o(this.windowBands,t*1.012,u,n*1.012,d,i.window),o(this.roofs,t*.985,s,n*.985,l+s/2,i.roof)}writeGreebles(e,t){let n=this.greebleStart.get(e.id);if(n===void 0)return;let r=Js(e)===0;for(let i=0;i<e.greebles;i++){if(!r){this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,t,e.z),this.greebles.setMatrixAt(n+i,this.matrix);continue}let a=X({x:((i+1)/(e.greebles+1)-.5)*e.width*.55,z:((e.id+i)%5/5-.5)*e.depth*.55},e.rotation??0),o=Math.min(e.width,e.depth)*.16,s=o*(.52+(e.id+i)%3*.1);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(o*1.28,s,o),this.matrix.scale(this.scale),this.matrix.setPosition(e.x+a.x,t+s/2,e.z+a.z),this.greebles.setMatrixAt(n+i,this.matrix),this.color.setHex(Fc.hvac),this.greebles.setColorAt(n+i,this.color)}}writeDebris(e){let t=e.id*Lc;if(!(t+Lc>this.debris.count))for(let n=0;n<Lc;n++)this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,Q,e.z),this.debris.setMatrixAt(t+n,this.matrix)}get meshCount(){return this.group.children.length}get buildingMeshes(){return this.buildingMeshList}get buildingHeatmapSources(){return this.clipped?[...this.buildingMeshList,this.roofs,this.clipped]:[...this.buildingMeshList,this.roofs]}get buildingDamageHeatmapSources(){return this.destruction?.heatmapSources??[]}syncBuildingDamageHeatmap(e,t){this.destruction?.syncHeatmap(e),this.destruction?.syncRubbleHeatmap(t)}get buildingHeatmapInstanceIds(){return this.buildingHeatmapInstanceIdsByMesh}renderedStoreysOf(e){let t=this.slots.get(e);return typeof t?.mesh.userData.storeys==`number`?t.mesh.userData.storeys:void 0}renderedHeightOf(e){if(this.city.get(e)?.clip)return 2.2;let t=this.slots.get(e);if(t)return t.mesh.getMatrixAt(t.index,this.matrix),this.matrix.elements[5]}dispose(){this.destruction?.dispose(),this.vehicleFactory.dispose();for(let e of this.group.children)if(e instanceof R){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}}},Uc=new Map([{id:`machine-rifle`,damage:4,damageType:`kinetic`,attackKind:`ranged`,range:65,minimumRange:0,cadence:8,projectileSpeed:120,shots:1,targetClasses:[`unit`,`structure`]},{id:`machine-cannon`,damage:24,damageType:`kinetic`,attackKind:`ranged`,range:255,minimumRange:18,cadence:84,projectileSpeed:150,shots:2,targetClasses:[`unit`,`structure`]},{id:`machine-harbinger-laser`,damage:22,damageType:`kinetic`,attackKind:`ranged`,range:90,minimumRange:0,cadence:10,projectileSpeed:140,shots:1,targetClasses:[`unit`,`structure`]},{id:`ancient-bite`,damage:18,damageType:`crush`,attackKind:`melee`,range:15,minimumRange:0,cadence:20,projectileSpeed:0,shots:1,targetClasses:[`unit`,`structure`]},{id:`ancient-acid`,damage:24,damageType:`acid`,attackKind:`ranged`,range:58,minimumRange:0,cadence:40,projectileSpeed:90,shots:1,targetClasses:[`unit`,`structure`]}].map(e=>[e.id,e]));function Wc(e){let t=Uc.get(e);if(!t)throw Error(`unknown weapon ${e}`);return t}var Gc=36,Kc={harvestPerStep:4/30,tier2Cost:300,structureCost:180};function qc(e,t,n,r){return(e-n)**2+(t-r)**2}function Jc(e,t){return e!==`machines`||t<60}function Yc(e,t){return e?.state===`intact`&&(t[e.id]??0)>0}function Xc(e,t,n){let r=n.clip;if(r&&r.length>=3){if(ja(e,t,r))return 0;let n=1/0;for(let i=0;i<r.length;i++){let a=r[i],o=r[(i+1)%r.length];a&&o&&(n=Math.min(n,Pa(e,t,a,o)))}return n*n}let i=X({x:e-n.x,z:t-n.z},-(n.rotation??0)),a=Math.max(Math.abs(i.x)-n.width/2,0),o=Math.max(Math.abs(i.z)-n.depth/2,0);return a*a+o*o}function Zc(e,t,n,r){let i=n.clip,a={x:n.x,z:n.z};if(i&&i.length>=3){let n=1/0;for(let r=0;r<i.length;r++){let o=i[r],s=i[(r+1)%i.length];if(!o||!s)continue;let c=Fa(e,t,o,s),l=(c.x-e)**2+(c.z-t)**2;l<n&&(n=l,a=c)}}else{let r=X({x:e-n.x,z:t-n.z},-(n.rotation??0)),i=X({x:Math.max(-n.width/2,Math.min(n.width/2,r.x)),z:Math.max(-n.depth/2,Math.min(n.depth/2,r.z))},n.rotation??0);a={x:n.x+i.x,z:n.z+i.z}}let o=e-a.x,s=t-a.z,c=Math.hypot(o,s);return c<1e-6&&(o=e-n.x,s=t-n.z,c=Math.hypot(o,s)),c<1e-6?{x:a.x+r,z:a.z}:{x:a.x+o/c*r,z:a.z+s/c*r}}function Qc(e,t,n){if(e.deployTimer>0)return!1;let r=n??!e.deployed;return r!==e.deployed&&(e.deployTarget=r,e.deployTimer=t,!0)}function $c(e){return e.deployTimer!==0&&(e.deployTimer--,e.deployTimer===0&&(e.deployed=e.deployTarget),!0)}var el=[`small`,`medium`,`large`,`extraLarge`],tl={small:0,medium:1,large:2,extraLarge:3},nl=3,rl=4,il=69,al=30,ol=2,sl=.06,cl=6e4,ll=40,ul={waypoints:[],reachedGoal:!1,expansions:0,length:1/0},dl=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],fl=Math.SQRT2;function pl(e,t,n,r){let i=!1,a=1/0;for(let r=0,o=n.length-1;r<n.length;o=r++){let s=n[r],c=n[o];if(!s||!c)continue;s.z>t!=c.z>t&&e<(c.x-s.x)*(t-s.z)/(c.z-s.z)+s.x&&(i=!i);let l=c.x-s.x,u=c.z-s.z,d=Math.max(0,Math.min(1,((e-s.x)*l+(t-s.z)*u)/Math.max(l*l+u*u,1e-9)));a=Math.min(a,Math.hypot(e-(s.x+l*d),t-(s.z+u*d)))}return i||a<=r}var ml=class{f=[];node=[];get size(){return this.node.length}clear(){this.f.length=0,this.node.length=0}less(e,t){let n=this.f[e]??0,r=this.f[t]??0;return n===r?(this.node[e]??0)<(this.node[t]??0):n<r}swap(e,t){let n=this.f[e]??0,r=this.node[e]??0;this.f[e]=this.f[t]??0,this.node[e]=this.node[t]??0,this.f[t]=n,this.node[t]=r}push(e,t){this.f.push(e),this.node.push(t);let n=this.node.length-1;for(;n>0;){let e=n-1>>1;if(!this.less(n,e))break;this.swap(n,e),n=e}}pop(){let e=this.node[0]??-1,t=this.node.length-1;this.swap(0,t),this.f.pop(),this.node.pop();let n=0,r=this.node.length;for(;;){let e=n*2+1,t=e+1,i=n;if(e<r&&this.less(e,i)&&(i=e),t<r&&this.less(t,i)&&(i=t),i===n)break;this.swap(n,i),n=i}return e}},hl=class{city;dim;min;alwaysSolid;buildingTier;offShard;cost;dist;probeSeen;scratch=new Uint8Array;gScore;cameFrom;seenGen;closed;generation=0;heap=new ml;rebuildCount=0;lastRebuildCells=0;onShardCount=-1;obstacles=[];constructor(e){this.city=e;let t=e.radius+al;this.min=-t,this.dim=Math.ceil(t*2/3);let n=this.dim*this.dim;this.alwaysSolid=new Uint8Array(n),this.buildingTier=new Uint8Array(n),this.offShard=new Uint8Array(n),this.cost=new Uint8Array(n),this.dist={small:new Uint8Array(n),medium:new Uint8Array(n),large:new Uint8Array(n),extraLarge:new Uint8Array(n)},this.probeSeen=new Uint8Array(n),this.gScore=new Float64Array(n),this.cameFrom=new Int32Array(n),this.seenGen=new Uint32Array(n),this.closed=new Uint8Array(n),this.buildTerrain(),this.rebuildAll()}get cellCount(){return this.dim*this.dim}cellX(e){return Math.floor((e-this.min)/3)}cellZ(e){return Math.floor((e-this.min)/3)}worldX(e){return this.min+(e+.5)*3}worldZ(e){return this.min+(e+.5)*3}inBounds(e,t){return e>=0&&t>=0&&e<this.dim&&t<this.dim}clearanceAt(e,t,n=`small`){let r=this.cellX(e),i=this.cellZ(t);return this.inBounds(r,i)?(this.fieldFor(n,!1)[i*this.dim+r]??0)/3:0}passable(e,t,n,r,i){let a=this.cellX(e),o=this.cellZ(t);return this.passableCell(a,o,i,this.fieldFor(n,r))}costAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?this.cost[r*this.dim+n]??1:1}walkable(e,t,n,r,i,a,o){return this.sample(e,t,n,r,o,this.fieldFor(i,a))}fieldFor(e,t){return t?this.dist.small:this.dist[e]}passableCell(e,t,n,r){return this.inBounds(e,t)?(r[t*this.dim+e]??0)>n*3:!1}buildTerrain(){let e=1/0;for(let t of this.city.boundary)e=Math.min(e,Math.hypot(t.x,t.z));let t=e*.92;for(let e=0;e<this.dim;e++){let n=this.worldZ(e);for(let r=0;r<this.dim;r++){let i=this.worldX(r);Math.hypot(i,n)<t||this.city.containsPoint(i,n)||(this.offShard[e*this.dim+r]=1)}}}rebuildAll(){this.alwaysSolid.set(this.offShard),this.buildingTier.fill(0),this.cost.fill(1);for(let e of this.city.buildings)this.stampBuilding(e);for(let e of this.obstacles)this.stampObstacle(e);for(let e of el)this.transform(tl[e],this.dist[e],0,0,this.dim-1,this.dim-1);this.lastRebuildCells=this.cellCount}addObstacle(e){let{outer:t}=this.stampNewObstacle(e);this.rebuildCount++,this.lastRebuildCells=(t.x1-t.x0+1)*(t.z1-t.z0+1)}stampNewObstacle(e){this.obstacles.push(e);let t=this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1));this.stampObstacle(e);let n=this.grow(t,23),r=this.grow(n,23);for(let e of el)this.transform(tl[e],this.dist[e],r.x0,r.z0,r.x1,r.z1,n);return{inner:n,outer:r}}setObstacles(e){this.obstacles.length=0,this.obstacles.push(...e),this.rebuildAll()}rebuildAround(e){let{outer:t}=this.clearAndRestamp(this.dirtyRect(e));this.rebuildCount++,this.lastRebuildCells=(t.x1-t.x0+1)*(t.z1-t.z0+1)}clearAndRestamp(e){for(let t=e.z0;t<=e.z1;t++)for(let n=e.x0;n<=e.x1;n++){let e=t*this.dim+n;this.alwaysSolid[e]=this.offShard[e]??0,this.buildingTier[e]=0,this.cost[e]=1}let t={x0:this.worldX(e.x0)-3,z0:this.worldZ(e.z0)-3,x1:this.worldX(e.x1)+3,z1:this.worldZ(e.z1)+3};for(let n of this.city.buildingsOverlapping(t))this.stampBuilding(n,e);for(let n of this.obstacles)n.x1<t.x0||n.x0>t.x1||n.z1<t.z0||n.z0>t.z1||this.stampObstacle(n,e);let n=this.grow(e,23),r=this.grow(n,23);for(let e of el)this.transform(tl[e],this.dist[e],r.x0,r.z0,r.x1,r.z1,n);return{inner:n,outer:r}}approachReachableWithProposedObstacle(e,t,n,r,i,a,o,s,c){return this.withProposedObstacle(e,()=>this.sameComponentAtLeast(t,n,r,i,a,o,s,c))}withProposedObstacle(e,t){let n=this.obstacleRect(e),r=this.grow(n,23),i=this.copyRegion(this.alwaysSolid,n),a=el.map(e=>this.copyRegion(this.dist[e],r)),o=this.obstacles.length;try{return this.stampNewObstacle(e),t()}finally{this.obstacles.length=o,this.restoreRegion(this.alwaysSolid,n,i),el.forEach((e,t)=>this.restoreRegion(this.dist[e],r,a[t]))}}obstacleRect(e){return this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1))}copyRegion(e,t){let n=t.x1-t.x0+1,r=new Uint8Array(n*(t.z1-t.z0+1));for(let i=t.z0,a=0;i<=t.z1;i++,a+=n)r.set(e.subarray(i*this.dim+t.x0,i*this.dim+t.x1+1),a);return r}restoreRegion(e,t,n){let r=t.x1-t.x0+1;for(let i=t.z0,a=0;i<=t.z1;i++,a+=r)e.set(n.subarray(a,a+r),i*this.dim+t.x0)}sameComponentAtLeast(e,t,n,r,i,a,o,s){let c=this.fieldFor(i,a),l=this.cellIndexAt(e,t),u=this.cellIndexAt(n,r);if(l<0||u<0||(c[l]??0)<=o*3||(c[u]??0)<=o*3)return!1;let d=[l],f=[l];this.probeSeen[l]=1;let p=0,m=0,h=l===u;try{for(;p<f.length;){let e=f[p++];if(e===void 0)continue;if(m++,m>=s&&h)return!0;let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of dl){let i=n+e,a=t+r;if(!this.passableCell(i,a,o,c)||e!==0&&r!==0&&(!this.passableCell(n+e,t,o,c)||!this.passableCell(n,t+r,o,c)))continue;let s=a*this.dim+i;this.probeSeen[s]!==1&&(this.probeSeen[s]=1,d.push(s),f.push(s),s===u&&(h=!0))}}return!1}finally{for(let e of d)this.probeSeen[e]=0}}dirtyRect(e){let t=Xa({...e,state:`rubble`});return this.clampRect(this.cellX(t.x0),this.cellZ(t.z0),this.cellX(t.x1),this.cellZ(t.z1))}clampRect(e,t,n,r){return{x0:Math.max(0,e),z0:Math.max(0,t),x1:Math.min(this.dim-1,n),z1:Math.min(this.dim-1,r)}}grow(e,t){return this.clampRect(e.x0-t,e.z0-t,e.x1+t,e.z1+t)}stampBuilding(e,t){let n=Xa(e),r=this.clampRect(this.cellX(n.x0),this.cellZ(n.z0),this.cellX(n.x1),this.cellZ(n.z1)),i=Math.max(r.x0,t?.x0??0),a=Math.min(r.x1,t?.x1??this.dim-1),o=Math.max(r.z0,t?.z0??0),s=Math.min(r.z1,t?.z1??this.dim-1),c=Ja(e.state)?ro(e.district):0,l=e.rotation??0,u=qa[e.state],d=e.width*u/2+1.5,f=e.depth*u/2+1.5,p=Math.cos(l),m=Math.sin(l),h=e.clip&&e.clip.length>=3?e.clip:void 0;for(let t=o;t<=s;t++){let n=this.worldZ(t);for(let r=i;r<=a;r++){let i=this.worldX(r);if(l!==0){let t=i-e.x,r=n-e.z,a=t*p+r*m,o=-t*m+r*p;if(Math.abs(a)>d||Math.abs(o)>f)continue}if(h&&!pl(i,n,h,1.5))continue;let a=t*this.dim+r;c>0?c>(this.buildingTier[a]??0)&&(this.buildingTier[a]=c):(this.offShard[a]??0)===0&&(this.cost[a]=ol)}}}stampObstacle(e,t){let n=this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1)),r=Math.max(n.x0,t?.x0??0),i=Math.min(n.x1,t?.x1??this.dim-1),a=Math.max(n.z0,t?.z0??0),o=Math.min(n.z1,t?.z1??this.dim-1);for(let e=a;e<=o;e++)for(let t=r;t<=i;t++)this.alwaysSolid[e*this.dim+t]=1}transform(e,t,n,r,i,a,o){let s=i-n+1,c=a-r+1;if(s<=0||c<=0)return;this.scratch.length<s*c&&(this.scratch=new Uint8Array(s*c));let l=this.scratch;for(let t=0;t<c;t++){let i=(t+r)*this.dim;for(let r=0;r<s;r++){let a=i+r+n,o=(this.alwaysSolid[a]??1)===1||(this.buildingTier[a]??0)>e;l[t*s+r]=o?0:il}}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=e*s+t,r=l[n]??il;r!==0&&(t>0&&(r=Math.min(r,(l[n-1]??il)+nl)),e>0&&(r=Math.min(r,(l[n-s]??il)+nl),t>0&&(r=Math.min(r,(l[n-s-1]??il)+rl)),t+1<s&&(r=Math.min(r,(l[n-s+1]??il)+rl))),l[n]=Math.min(r,il))}for(let e=c-1;e>=0;e--)for(let t=s-1;t>=0;t--){let n=e*s+t,r=l[n]??il;r!==0&&(t+1<s&&(r=Math.min(r,(l[n+1]??il)+nl)),e+1<c&&(r=Math.min(r,(l[n+s]??il)+nl),t+1<s&&(r=Math.min(r,(l[n+s+1]??il)+rl)),t>0&&(r=Math.min(r,(l[n+s-1]??il)+rl))),l[n]=Math.min(r,il))}let u=Math.max(n,o?.x0??n),d=Math.min(i,o?.x1??i),f=Math.max(r,o?.z0??r),p=Math.min(a,o?.z1??a);for(let e=f;e<=p;e++)for(let i=u;i<=d;i++)t[e*this.dim+i]=l[(e-r)*s+(i-n)]??0}nearestPassable(e,t,n,r,i,a){let o=a+i,s=this.fieldFor(n,r),c=this.cellX(e),l=this.cellZ(t);if(this.passableCell(c,l,o,s))return{x:this.worldX(c),z:this.worldZ(l)};for(let n=1;n<=ll;n++){let r=-1,i=1/0;for(let a=-n;a<=n;a++){let u=[[c+a,l-n],[c+a,l+n],[c-n,l+a],[c+n,l+a]];for(let[n,a]of u){if(!this.passableCell(n,a,o,s))continue;let c=this.worldX(n)-e,l=this.worldZ(a)-t,u=c*c+l*l;u<i&&(i=u,r=a*this.dim+n)}}if(r>=0){let e=Math.floor(r/this.dim);return{x:this.worldX(r-e*this.dim),z:this.worldZ(e)}}}}findPath(e,t,n,r,i,a,o){let s=this.fieldFor(i,a),c=this.nearestPassable(e,t,i,a,0,o),l=this.nearestPassable(n,r,i,a,0,o);if(!c||!l)return ul;let u=this.cellX(c.x),d=this.cellZ(c.z),f=this.cellX(l.x),p=this.cellZ(l.z),m=d*this.dim+u,h=p*this.dim+f;if(m===h)return{waypoints:[],reachedGoal:!0,expansions:0,length:0};let g=++this.generation;this.heap.clear(),this.gScore[m]=0,this.cameFrom[m]=-1,this.seenGen[m]=g,this.closed[m]=0,this.heap.push(this.heuristic(u,d,f,p),m);let _=0,v=m,y=this.heuristic(u,d,f,p),b=!1;for(;this.heap.size>0&&_<cl;){let e=this.heap.pop();if(this.seenGen[e]!==g||this.closed[e]===1)continue;if(this.closed[e]=1,_++,e===h){b=!0;break}let t=Math.floor(e/this.dim),n=e-t*this.dim,r=this.heuristic(n,t,f,p);r<y&&(y=r,v=e);for(let[r,i]of dl){let a=n+r,c=t+i;if(!this.passableCell(a,c,o,s)||r!==0&&i!==0&&(!this.passableCell(n+r,t,o,s)||!this.passableCell(n,t+i,o,s)))continue;let l=c*this.dim+a;if(this.seenGen[l]===g&&this.closed[l]===1)continue;let u=r!==0&&i!==0?fl:1,d=this.cost[l]??1,m=23-(s[l]??il)/3,h=(this.gScore[e]??0)+u*d+m*sl;this.seenGen[l]===g&&h>=(this.gScore[l]??0)||(this.seenGen[l]=g,this.closed[l]=0,this.gScore[l]=h,this.cameFrom[l]=e,this.heap.push(h+this.heuristic(a,c,f,p),l))}}let x=b?h:v;return x===m?ul:this.reconstruct(m,x,o,s,b,_)}heuristic(e,t,n,r){let i=Math.abs(e-n),a=Math.abs(t-r);return Math.max(i,a)+(fl-1)*Math.min(i,a)}reconstruct(e,t,n,r,i,a){let o=[];for(let n=t;n!==-1&&(o.push(n),n!==e);n=this.cameFrom[n]??-1);o.reverse();let s=[],c=o[0]??e;for(let e=1;e<o.length;e++){let t=o[e];if(t===void 0)continue;let i=o[e+1];i!==void 0&&this.lineOfSight(c,i,n,r)||(s.push(this.worldX(t%this.dim),this.worldZ(Math.floor(t/this.dim))),c=t)}let l=0,u=this.worldX(e%this.dim),d=this.worldZ(Math.floor(e/this.dim));for(let e=0;e<s.length;e+=2){let t=s[e]??u,n=s[e+1]??d;l+=Math.hypot(t-u,n-d),u=t,d=n}return{waypoints:s,reachedGoal:i,expansions:a,length:l}}lineOfSight(e,t,n,r){return this.sample(this.worldX(e%this.dim),this.worldZ(Math.floor(e/this.dim)),this.worldX(t%this.dim),this.worldZ(Math.floor(t/this.dim)),n,r)}sample(e,t,n,r,i,a){let o=Math.max(1,Math.ceil(Math.hypot(n-e,r-t)/1.5));for(let s=0;s<=o;s++){let c=s/o,l=e+(n-e)*c,u=t+(r-t)*c;if(!this.passableCell(this.cellX(l),this.cellZ(u),i,a))return!1}return!0}routeLength(e,t,n,r,i,a,o){let s=this.findPath(e,t,n,r,i,a,o);return s.reachedGoal?s.length:1/0}flood(e,t,n,r,i,a){let o=this.fieldFor(n,i),s=this.cellIndexAt(e,t),c=r?this.cellIndexAt(r.x,r.z):-1;if(s<0||(o[s]??0)<=a*3)return{count:0,reachedTarget:!1};let l=++this.generation;this.seenGen[s]=l;let u=[s],d=0,f=0,p=!1;for(;d<u.length;){let e=u[d++];if(e===void 0)continue;f++,e===c&&(p=!0);let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of dl){let i=n+e,s=t+r;if(!this.passableCell(i,s,a,o)||e!==0&&r!==0&&(!this.passableCell(n+e,t,a,o)||!this.passableCell(n,t+r,a,o)))continue;let c=s*this.dim+i;this.seenGen[c]!==l&&(this.seenGen[c]=l,u.push(c))}}return{count:f,reachedTarget:p}}componentAtLeast(e,t,n,r,i,a){let o=this.fieldFor(n,i),s=this.cellIndexAt(e,t);if(s<0||(o[s]??0)<=a*3)return!1;if(r<=1)return!0;let c=++this.generation;this.seenGen[s]=c;let l=[s],u=0,d=0;for(;u<l.length;){let e=l[u++];if(e===void 0)continue;if(++d>=r)return!0;let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of dl){let i=n+e,s=t+r;if(!this.passableCell(i,s,a,o)||e!==0&&r!==0&&(!this.passableCell(n+e,t,a,o)||!this.passableCell(n,t+r,a,o)))continue;let u=s*this.dim+i;this.seenGen[u]!==c&&(this.seenGen[u]=c,l.push(u))}}return!1}cellIndexAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?r*this.dim+n:-1}get onShardCells(){if(this.onShardCount<0){let e=0;for(let t=0;t<this.offShard.length;t++)(this.offShard[t]??1)===0&&e++;this.onShardCount=e}return this.onShardCount}passableFraction(e,t,n){let r=this.fieldFor(e,t),i=0;for(let e=0;e<r.length;e++)(this.offShard[e]??1)!==1&&(r[e]??0)>n*3&&i++;let a=this.onShardCells;return a===0?0:i/a}snapshotClearance(){let e=new Uint8Array(this.cellCount*el.length);return el.forEach((t,n)=>e.set(this.dist[t],n*this.cellCount)),e}};function gl(e,t){return(e+4096)*16384+(t+4096)}var _l=class{items=[];cells=new Map;size=1;get cellSize(){return this.size}get count(){return this.items.length}rebuild(e,t){this.items=e,this.size=t>0?t:1;for(let e of this.cells.values())e.length=0;for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let r=gl(Math.floor(n.x/this.size),Math.floor(n.z/this.size)),i=this.cells.get(r);i?i.push(t):this.cells.set(r,[t])}}forEachNeighbour(e,t){let n=this.items[e];if(!n)return;let r=Math.floor(n.x/this.size),i=Math.floor(n.z/this.size);for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){let a=this.cells.get(gl(r+e,i+n));if(a)for(let e of a){let n=this.items[e];n&&t(n,e)}}}forEachWithin(e,t,n,r){let i=Math.floor((e-n)/this.size),a=Math.floor((e+n)/this.size),o=Math.floor((t-n)/this.size),s=Math.floor((t+n)/this.size);if((a-i+1)*(s-o+1)>this.items.length){for(let e=0;e<this.items.length;e++){let t=this.items[e];t&&r(t,e)}return}for(let e=i;e<=a;e++)for(let t=o;t<=s;t++){let n=this.cells.get(gl(e,t));if(n)for(let e of n){let t=this.items[e];t&&r(t,e)}}}};function vl(e){return Math.round(e*30)}var yl=[{id:`machine-processing-node`,name:`Processing Node`,faction:`machines`,nav:`large`,radius:12,deployedRadius:12,speed:9,role:`support`,tier:1,cost:180,health:650,deployedDamageTakenMultiplier:.7,buildSteps:vl(6),canDeploy:!0,anchoredFootprint:{width:22.5,depth:22.5},processesHumans:!0},{id:`mobile-factory`,name:`Mobile Factory`,faction:`machines`,nav:`medium`,radius:13.6,deployedRadius:11.9,speed:9,role:`support`,tier:1,cost:180,health:800,deployedDamageTakenMultiplier:.7,buildSteps:vl(6),canDeploy:!0,anchoredFootprint:{width:17,depth:16},producesUnits:!0,productionTypes:[`machine-infantry`,`machine-harvester`],fabricationPadOutputTypeId:`machine-harvester`},{id:`machine-infantry`,name:`Deployable Infantry`,faction:`machines`,nav:`small`,radius:6,speed:20,role:`infantry`,tier:1,cost:60,health:110,weaponIds:[`machine-rifle`],deployedDamageTakenMultiplier:.7,buildSteps:vl(3),canDeploy:!0},{id:`machine-construct`,name:`Giant Ranged Construct`,faction:`machines`,nav:`extraLarge`,radius:47.6,speed:12,role:`heavy`,tier:2,cost:240,health:500,weaponIds:[`machine-cannon`],deployedDamageTakenMultiplier:.7,buildSteps:vl(9),canDeploy:!0},{id:`ancient-infantry`,name:`Frog-like Infantry`,faction:`ancients`,nav:`small`,radius:4.2,speed:23,role:`infantry`,tier:1,cost:50,health:120,weaponIds:[`ancient-bite`],buildSteps:vl(3)},{id:`ancient-nug`,name:`Nug`,faction:`ancients`,nav:`extraLarge`,radius:61.425,speed:14,role:`heavy`,tier:2,cost:240,health:560,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:vl(9)},{id:`machine-harbinger`,name:`Machine Harbinger`,faction:`machines`,nav:`large`,radius:31.2,speed:12,role:`harbinger`,tier:1,cost:0,health:1400,weaponIds:[`machine-harbinger-laser`],deployedDamageTakenMultiplier:.7,buildSteps:vl(30),canDeploy:!0,producesUnits:!0,productionTypes:[`machine-processing-node`,`mobile-factory`,`machine-construct`,`machine-shard-cutter`],fabricationPadOutputTypeId:`machine-construct`},{id:`machine-harvester`,name:`Human Harvester`,faction:`machines`,nav:`medium`,radius:7.667,speed:16,role:`harvester`,tier:1,cost:80,health:240,buildSteps:vl(4)},{id:`ancient-harbinger`,name:`Ancient Harbinger`,faction:`ancients`,nav:`large`,radius:21.84,speed:14,role:`harbinger`,tier:1,cost:0,health:1400,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:vl(30),constructionTypes:[`ancient-slime-temple`,`ancient-deity-structure`],summonTypes:[`ancient-harvester`,`ancient-support`,`ancient-nug`,`ancient-slime-temple`,`ancient-deity-structure`]},{id:`ancient-harvester`,name:`Soul Harvester`,faction:`ancients`,nav:`medium`,radius:9,speed:18,role:`harvester`,tier:1,cost:80,health:260,weaponIds:[`ancient-bite`],buildSteps:vl(4)},{id:`ancient-support`,name:`Acid Specialist`,faction:`ancients`,nav:`small`,radius:16.8,speed:19,role:`support`,tier:2,cost:180,health:150,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:vl(7)},{id:`ancient-slime-temple`,name:`Slime Temple`,faction:`ancients`,nav:`large`,radius:17,speed:0,role:`structure`,tier:1,cost:180,health:900,buildSteps:0,constructionSteps:vl(10),stationary:!0,anchoredFootprint:{width:24,depth:23.2},producesUnits:!0,productionTypes:[`ancient-infantry`]},{id:`ancient-deity-structure`,name:`Deity Summon Structure`,faction:`ancients`,nav:`large`,radius:31,speed:0,role:`structure`,tier:2,cost:500,health:1800,buildSteps:0,constructionSteps:vl(10),stationary:!0,anchoredFootprint:{width:45,depth:41}},{id:`machine-shard-cutter`,name:`Shard Cutter`,faction:`machines`,nav:`large`,radius:46.8,speed:10,role:`heavy`,tier:2,cost:320,health:700,weaponIds:[`machine-cannon`],buildSteps:vl(12)}],bl=new Map(yl.map(e=>[e.id,e]));function xl(e){let t=bl.get(e);if(!t)throw Error(`unknown unit type: ${e}`);return t}function $(e,t=!1){return t&&e.deployedRadius!==void 0?e.deployedRadius:e.radius}function Sl(e,t=!1){return Math.ceil($(e,t)/3)}function Cl(e,t){return e.role===`harvester`&&t===`job`}function wl(e,t){e.harvestingBuildingId=t?.kind===`building`?t.id:null,e.harvestingCrowdId=t?.kind===`crowd`?t.id:null,t!==null&&(e.restrictedNav=!0)}function Tl(e){return e.harvestingBuildingId!==null||e.harvestingCrowdId!==null}var El=6,Dl=.35,Ol=.35,kl=.6,Al=40,jl=.1,Ml=.6,Nl=15,Pl=90;function Fl(e,t){let n=[[0,0]];for(let r=1;n.length<e;r++){let i=r*6;for(let a=0;a<i&&n.length<e;a++){let e=a/i*Math.PI*2;n.push([Math.cos(e)*r*t,Math.sin(e)*r*t])}}return n}var Il=class{units=[];byId=new Map;pathQueue=[];nextId=0;spatialIndex=new _l;spatialDirty=!0;processorList=[];pushX=[];pushZ=[];pathsLastStep=0;pathsTotal=0;get pending(){return this.pathQueue.length}get pendingIds(){return this.pathQueue}get(e){return this.byId.get(e)}get processors(){return this.processorList}index(){return this.spatialDirty&&=(this.spatialIndex.rebuild(this.units,this.spatialCellSize()),!1),this.spatialIndex}markMoved(){this.spatialDirty=!0}spatialCellSize(){let e=0;for(let t of this.units)e=Math.max(e,$(this.typeOf(t),t.deployed));return e>0?e*2:Al}isAvoidanceAnchor(e){let t=this.typeOf(e);return t.stationary===!0||t.faction===`machines`&&(e.deployed||e.deployTimer>0&&e.deployTarget)}remove(e){let t=this.byId.get(e);if(!t)return;this.byId.delete(e);let n=this.units.indexOf(t);n>=0&&this.units.splice(n,1);let r=this.processorList.indexOf(t);return r>=0&&this.processorList.splice(r,1),this.dropQueued([e]),this.markMoved(),t}typeOf(e){return xl(e.typeId)}spawn(e,t,n,r=0){xl(e);let i={id:this.nextId++,typeId:e,x:t,z:n,prevX:t,prevZ:n,heading:r,prevHeading:r,path:[],goalX:t,goalZ:n,hasGoal:!1,repathPending:!1,restrictedNav:Cl(xl(e),`job`),unreachable:!1,blockedSteps:0,stalledSteps:0,stallWindowSteps:0,stallAnchorX:t,stallAnchorZ:n,health:xl(e).health,targetId:null,attackMove:!1,chaseSteps:0,targetBuildingId:null,lastAttackerId:null,attackCooldown:0,cargo:0,harvestingBuildingId:null,harvestingCrowdId:null,harvestOrdered:!1,deployed:xl(e).stationary===!0,deployTimer:0,deployTarget:xl(e).stationary===!0,queue:[],fabricationPad:null};return this.units.push(i),this.byId.set(i.id,i),xl(e).processesHumans&&this.processorList.push(i),this.markMoved(),i}order(e,t,n,r,i=!1,a=`job`){let o=[...new Set(e)].map(e=>this.byId.get(e)).filter(e=>e!==void 0&&e.deployTimer===0&&!this.typeOf(e).stationary);if(o.length===0)return;let s=0;for(let e of o)s=Math.max(s,$(this.typeOf(e))*2.4);o.sort((e,r)=>{let i=(e.x-t)**2+(e.z-n)**2,a=(r.x-t)**2+(r.z-n)**2;return i===a?e.id-r.id:i-a});let c=Fl(o.length,s);o.forEach((e,o)=>{e.attackMove=i,e.targetBuildingId=null,e.deployed&&this.typeOf(e).canDeploy&&Qc(e,Gc,!1);let[s,l]=c[o]??[0,0],u=this.typeOf(e);e.restrictedNav=Cl(u,a);let d=r.nearestPassable(t+s,n+l,u.nav,e.restrictedNav,0,Sl(u));e.goalX=d?.x??t,e.goalZ=d?.z??n,e.hasGoal=!0,e.unreachable=!1,e.blockedSteps=0,e.stalledSteps=0,e.stallWindowSteps=0,this.requestPath(e)})}stop(e){for(let t of e){let e=this.byId.get(t);e&&(e.attackMove=!1,e.targetBuildingId=null,e.path.length=0,e.hasGoal=!1,e.repathPending=!1,e.blockedSteps=0,e.stalledSteps=0,e.stallWindowSteps=0,e.goalX=e.x,e.goalZ=e.z)}this.dropQueued(e)}requestPath(e){e.repathPending||(e.repathPending=!0,this.pathQueue.push(e.id))}dropQueued(e){let t=new Set(e);for(let e=this.pathQueue.length-1;e>=0;e--){let n=this.pathQueue[e];n!==void 0&&t.has(n)&&this.pathQueue.splice(e,1)}}revalidate(e){for(let t of this.units){if(!t.hasGoal||t.path.length===0||t.repathPending)continue;let n=this.typeOf(t),r=n.nav,i=t.x,a=t.z,o=!1;for(let s=0;s<t.path.length;s+=2){let c=t.path[s]??i,l=t.path[s+1]??a;if(!e.walkable(i,a,c,l,r,t.restrictedNav,Sl(n))){o=!0;break}i=c,a=l}o&&this.requestPath(t)}}step(e){this.stepDeployment(),this.servicePaths(e),this.integrate(e),this.separate(e),this.detectStalls(),this.chaseTargets(e)}detectStalls(){for(let e of this.units){if(e.attackMove&&e.targetId!==null){e.stalledSteps=0,e.stallWindowSteps=0;continue}if(e.path.length===0){e.stalledSteps=0,e.stallWindowSteps=0;continue}if(e.stallWindowSteps===0&&(e.stallAnchorX=e.prevX,e.stallAnchorZ=e.prevZ),e.stallWindowSteps++,!(e.stallWindowSteps<Nl)){if(e.stallWindowSteps=0,Math.hypot(e.x-e.stallAnchorX,e.z-e.stallAnchorZ)>=xl(e.typeId).speed/30*Nl*jl){e.stalledSteps=0;continue}e.stalledSteps+=Nl,this.requestPath(e),e.stalledSteps>=Pl&&(e.path.length=0,e.hasGoal=!1,e.unreachable=!0,e.stalledSteps=0)}}}chaseTargets(e){for(let t of this.units){if(t.targetId===null||t.attackMove||t.hasGoal||t.deployTimer>0||t.deployed){t.chaseSteps=0;continue}let n=this.typeOf(t),r=n.weaponIds;if(!r||r.length===0){t.chaseSteps=0;continue}let i=this.byId.get(t.targetId);if(!i){t.chaseSteps=0;continue}let a=Math.max(...r.map(e=>Wc(e).range));if(Math.hypot(i.x-t.x,i.z-t.z)<=a){t.chaseSteps=0;continue}if(t.chaseSteps++,t.chaseSteps%Nl!==0)continue;let o=e.nearestPassable(i.x,i.z,n.nav,t.restrictedNav,0,Sl(n)),s=o?.x??i.x,c=o?.z??i.z;Math.hypot(s-t.x,c-t.z)<$(n)||(t.goalX=s,t.goalZ=c,t.hasGoal=!0,t.blockedSteps=0,t.stalledSteps=0,t.stallWindowSteps=0,this.requestPath(t))}}stepDeployment(){for(let e of this.units)e.deployTimer!==0&&$c(e)}beginDeploy(e,t){let n=this.byId.get(e);return!n||!this.typeOf(n).canDeploy||!Qc(n,Gc,t)?!1:(this.stop([e]),!0)}servicePaths(e){for(this.pathsLastStep=0;this.pathsLastStep<El;){let t=this.pathQueue.shift();if(t===void 0)break;let n=this.byId.get(t);if(!n||(n.repathPending=!1,!n.hasGoal))continue;let r=this.typeOf(n),i=e.findPath(n.x,n.z,n.goalX,n.goalZ,r.nav,n.restrictedNav,Sl(r));n.path=[...i.waypoints],n.unreachable=!i.reachedGoal,n.path.length===0&&(n.hasGoal=!1),this.pathsLastStep++,this.pathsTotal++}}integrate(e){this.markMoved();for(let t of this.units){if(t.prevX=t.x,t.prevZ=t.z,t.prevHeading=t.heading,t.deployTimer>0||t.deployed||t.attackMove&&t.targetId!==null)continue;let n=t.path[0],r=t.path[1];if(n===void 0||r===void 0)continue;let i=this.typeOf(t),a=n-t.x,o=r-t.z,s=Math.hypot(a,o);if(s<=1e-6){t.path.splice(0,2);continue}t.heading=Ll(t.heading,Math.atan2(o,a),Dl);let c=i.speed/30/e.costAt(t.x,t.z),l=$(i)*Ml;if(s<=Math.max(c,l)){t.x=n,t.z=r,t.path.splice(0,2),t.path.length===0&&(t.hasGoal=!1);continue}let u=a/s*c,d=o/s*c;if(this.tryMove(t,u,d,e,i)){t.blockedSteps=0;continue}if(this.tryMove(t,u,0,e,i)||this.tryMove(t,0,d,e,i)){t.blockedSteps=0;continue}t.blockedSteps++,t.blockedSteps>=Pl?(t.path.length=0,t.hasGoal=!1,t.unreachable=!0,t.blockedSteps=0):t.blockedSteps%Nl===0&&this.requestPath(t)}}tryMove(e,t,n,r,i){if(t===0&&n===0)return!1;let a=e.x+t,o=e.z+n;return r.passable(a,o,i.nav,e.restrictedNav,Sl(i))?(e.x=a,e.z=o,!0):!1}separate(e){let t=this.units.length;if(t<2)return;let n=!1;for(let e of this.units)if(!this.isAvoidanceAnchor(e)){n=!0;break}if(!n)return;let r=this.index();this.pushX.length=0,this.pushZ.length=0;for(let e=0;e<t;e++)this.pushX.push(0),this.pushZ.push(0);for(let e=0;e<t;e++){let t=this.units[e];if(!t)continue;let n=this.isAvoidanceAnchor(t),i=$(this.typeOf(t),t.deployed);r.forEachNeighbour(e,(r,a)=>{if(a<=e)return;let o=this.isAvoidanceAnchor(r);if(n&&o)return;let s=$(this.typeOf(r),r.deployed),c=i+s,l=r.x-t.x,u=r.z-t.z,d=Math.hypot(l,u);if(d>=c)return;if(d<1e-6){let e=(t.id*31+r.id*17)%360*(Math.PI/180);l=Math.cos(e),u=Math.sin(e),d=1}let f=(c-d)/d*Ol;n?(this.pushX[a]=(this.pushX[a]??0)+l*f,this.pushZ[a]=(this.pushZ[a]??0)+u*f):o?(this.pushX[e]=(this.pushX[e]??0)-l*f,this.pushZ[e]=(this.pushZ[e]??0)-u*f):(this.pushX[e]=(this.pushX[e]??0)-l*f*.5,this.pushZ[e]=(this.pushZ[e]??0)-u*f*.5,this.pushX[a]=(this.pushX[a]??0)+l*f*.5,this.pushZ[a]=(this.pushZ[a]??0)+u*f*.5)})}for(let n=0;n<t;n++){let t=this.units[n];if(!t||this.isAvoidanceAnchor(t))continue;let r=this.pushX[n]??0,i=this.pushZ[n]??0;if(r===0&&i===0)continue;let a=this.typeOf(t),o=a.speed/30*kl,s=Math.hypot(r,i);s>o&&(r=r/s*o,i=i/s*o);let c=a.nav,l=t.x+r,u=t.z+i;e.passable(l,u,c,t.restrictedNav,Sl(a,t.deployed))&&(t.x=l,t.z=u,this.markMoved())}}evictBlocked(e){for(let t of this.units){let n=this.typeOf(t),r=n.anchoredFootprint!==void 0&&t.deployed&&(t.deployTimer===0||t.deployTarget);if(n.stationary||r)continue;let i=n.nav,a=Sl(n,t.deployed);if(e.passable(t.x,t.z,i,t.restrictedNav,a))continue;let o=e.nearestPassable(t.x,t.z,i,t.restrictedNav,0,a);o&&(t.x=o.x,t.z=o.z,t.prevX=o.x,t.prevZ=o.z,t.blockedSteps=0,t.stalledSteps=0,t.stallWindowSteps=0,this.markMoved(),t.hasGoal&&this.requestPath(t))}}countByFaction(e){let t=0;for(let n of this.units)this.typeOf(n).faction===e&&t++;return t}countMoving(){let e=0;for(let t of this.units)t.path.length>0&&e++;return e}countBlocked(){let e=0;for(let t of this.units)t.blockedSteps>0&&e++;return e}countStalled(){let e=0;for(let t of this.units)t.stalledSteps>0&&e++;return e}countDeployed(){let e=0;for(let t of this.units)t.deployed&&e++;return e}countDeploying(){let e=0;for(let t of this.units)t.deployTimer>0&&e++;return e}countUnreached(){let e=0;for(let t of this.units)t.unreachable&&e++;return e}save(){return{units:this.units.map(e=>({...e,path:[...e.path],queue:e.queue.map(e=>({...e})),fabricationPad:e.fabricationPad?{...e.fabricationPad}:null})),nextId:this.nextId,pathQueue:[...this.pathQueue],pathsTotal:this.pathsTotal}}restore(e){this.units.length=0,this.byId.clear(),this.processorList.length=0,this.pathQueue.length=0,this.markMoved();for(let t of e.units){let e={...t,path:[...t.path],queue:(t.queue??[]).map(e=>({...e})),fabricationPad:t.fabricationPad?{...t.fabricationPad}:null};this.units.push(e),this.byId.set(e.id,e),this.typeOf(e).processesHumans&&this.processorList.push(e)}this.nextId=e.nextId,this.pathQueue.push(...e.pathQueue),this.pathsTotal=e.pathsTotal,this.pathsLastStep=0}};function Ll(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return Math.abs(r)<=n?t:e+Math.sign(r)*n}var Rl=[{typeId:`ancient-deity-structure`,state:`mobile`,source:`models/ancient-deity-structure/ancient-deity-structure-01.glb`,runtime:`public/assets/runtime-models/ancient-deity-structure--mobile.glb`},{typeId:`ancient-nug`,state:`mobile`,source:`models/ancient-nug/ancient-nug-01.glb`,runtime:`public/assets/runtime-models/ancient-nug--mobile.glb`},{typeId:`ancient-slime-temple`,state:`mobile`,source:`models/slime-temple/slime-temple-1.glb`,runtime:`public/assets/runtime-models/ancient-slime-temple--mobile.glb`},{typeId:`machine-harbinger`,state:`mobile`,source:`models/machine-harbinger/machine-harbinger-02.glb`,runtime:`public/assets/runtime-models/machine-harbinger--mobile.glb`},{typeId:`machine-harvester`,state:`mobile`,source:`models/machine-harvester/machine-harvester-01.glb`,runtime:`public/assets/runtime-models/machine-harvester--mobile.glb`},{typeId:`machine-infantry`,state:`mobile`,source:`models/machine-infantry/machine-infantry-01.glb`,runtime:`public/assets/runtime-models/machine-infantry--mobile.glb`},{typeId:`mobile-factory`,state:`mobile`,source:`models/machine-mobile-factory/machine-mobile-factory-mobile-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--mobile.glb`},{typeId:`mobile-factory`,state:`deployed`,source:`models/machine-mobile-factory/machine-mobile-factory-deployed-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--deployed.glb`},{typeId:`machine-processing-node`,state:`mobile`,source:`models/machine-processing-node/machine-processing-node-01.glb`,runtime:`public/assets/runtime-models/machine-processing-node--mobile.glb`},{typeId:`machine-shard-cutter`,state:`mobile`,source:`models/machine-shard-cutter/machine-shard-cutter-01.glb`,runtime:`public/assets/runtime-models/machine-shard-cutter--mobile.glb`},{typeId:`ancient-harvester`,state:`mobile`,source:`models/ancient-harverster/ancient-harvester-01.glb`,runtime:`public/assets/runtime-models/ancient-harvester--mobile.glb`},{typeId:`ancient-harbinger`,state:`mobile`,source:`models/ancient-harbinger/ancient-harbinger-03.glb`,runtime:`public/assets/runtime-models/ancient-harbinger--mobile.glb`},{typeId:`ancient-infantry`,state:`mobile`,source:`models/ancient-infantry/ancient-infantry-01.glb`,runtime:`public/assets/runtime-models/ancient-infantry--mobile.glb`},{typeId:`ancient-support`,state:`mobile`,source:`models/ancient-acid-specialist/ancient-acid-specialist-01.glb`,runtime:`public/assets/runtime-models/ancient-support--mobile.glb`},{typeId:`machine-construct`,state:`mobile`,source:`models/machine-construct/machine-construct-01.glb`,runtime:`public/assets/runtime-models/machine-construct--mobile.glb`}];function zl(e,t=`mobile`){let n=Rl.find(n=>n.typeId===e&&n.state===t);if(!n)throw Error(`No canonical runtime model declared for ${e}:${t}`);return`/HumanResourcesLowPoly/${n.runtime.replace(/^public\//,``)}`}var Bl=(e,t,n,r,i,a={})=>({typeId:e,faction:t,assetUrl:zl(e,a.state??`mobile`),bounds:{targetExtent:n,normaliseBy:r,...a.yawOffset===void 0?{}:{yawOffset:a.yawOffset}},fallback:{extent:n},material:{palette:i},...a.state===void 0?{}:{state:a.state},...a.cachePickGeometry===void 0?{}:{cachePickGeometry:a.cachePickGeometry},...a.animations===void 0?{}:{animations:a.animations}}),Vl=[Bl(`ancient-deity-structure`,`ancients`,50,`height`,`ancient-deity-structure`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),Bl(`ancient-nug`,`ancients`,140,`height`,`ancient-nug`,{yawOffset:Math.PI/2}),Bl(`ancient-slime-temple`,`ancients`,30,`horizontal`,`ancient-slime-temple`),Bl(`machine-harbinger`,`machines`,55,`height`,`machine-harbinger`,{yawOffset:Math.PI/2}),Bl(`machine-harvester`,`machines`,12.5,`height`,`machine-harvester`,{yawOffset:Math.PI/2}),Bl(`machine-infantry`,`machines`,10,`height`,`machine-infantry`,{yawOffset:Math.PI/2}),Bl(`mobile-factory`,`machines`,24,`horizontal`,`machine-mobile-factory`,{state:`mobile`}),Bl(`mobile-factory`,`machines`,22.5,`height`,`machine-mobile-factory`,{state:`deployed`}),Bl(`machine-processing-node`,`machines`,22.5,`horizontal`,`machine-processing-node`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),Bl(`machine-shard-cutter`,`machines`,72,`height`,`machine-shard-cutter`,{yawOffset:Math.PI/2}),Bl(`ancient-harvester`,`ancients`,32.5,`horizontal`,`ancient-harvester`,{yawOffset:Math.PI/2}),Bl(`ancient-harbinger`,`ancients`,60,`height`,`ancient-harbinger`,{yawOffset:Math.PI/2}),Bl(`ancient-infantry`,`ancients`,9,`height`,`ancient-infantry`,{yawOffset:Math.PI/2}),Bl(`ancient-support`,`ancients`,45,`height`,`ancient-acid-specialist`,{yawOffset:Math.PI/2}),Bl(`machine-construct`,`machines`,140,`height`,`machine-construct`,{yawOffset:Math.PI/2,animations:{walk:`NlaTrack`,defeat:`NlaTrack.001`}})],Hl=new Map(Vl.map(e=>[Ul(e.typeId,e.state),e]));function Ul(e,t=`mobile`){return`${e}:${t}`}function Wl(e,t=!1){return Hl.get(Ul(e,t?`deployed`:`mobile`))??Hl.get(Ul(e))}function Gl(e){return Hl.has(Ul(e,`deployed`))}function Kl(e,t=!1){let n=Wl(e,t)?.fallback.extent??xl(e).radius*2;return{radius:n/Math.SQRT2,minY:0,maxY:n,height:n,centre:{x:0,y:n/2,z:0},size:{x:n,y:n,z:n}}}var ql={"machine-cannon":{colour:6865096,tracerWidth:4.1,impactRadius:3.1},"machine-harbinger-laser":{colour:6865096,tracerWidth:.48,impactRadius:2.3},"machine-rifle":{colour:16765503,tracerWidth:.42,tracerLength:2,impactRadius:1,muzzleFlash:{colour:16769898,radius:1.15,durationMs:55}},"ancient-acid":{colour:6877280,tracerWidth:.34,impactRadius:1.7},"ancient-bite":{colour:16760428,tracerWidth:0,impactRadius:1.8}},Jl={colour:16777215,tracerWidth:.25,impactRadius:1.2};function Yl(e){return ql[e]??Jl}var Xl={"machine-infantry":{"machine-rifle":[{forward:2.28,right:0,height:7}]}};function Zl(e,t,n){let r=Xl[e]?.[t];return r?.[n%r.length]}var Ql=256,$l=180,eu=new K(0,1,0);function tu(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function nu(e,t,n){let r=e.instanceColor,i=t*3;if(r&&Math.fround(n.r)===r.array[i]&&Math.fround(n.g)===r.array[i+1]&&Math.fround(n.b)===r.array[i+2])return!1;e.setColorAt(t,n);let a=e.instanceColor;return a?(a.setUsage(k),a.addUpdateRange(i,3),!0):!1}function ru(e,t,n){return Math.max(t,Math.min(n,e))}var iu=class{group=new i;beamsMesh;impactsMesh;flashesMesh;matrix=new Ae;position=new K;direction=new K;scale=new K;rotation=new ee;colour=new z;beams=[];impacts=[];flashes=[];melee=new Map;constructor(){let e=new L({color:16777215,transparent:!0,opacity:.9,depthWrite:!1});e.userData.outlineParameters={visible:!1},this.beamsMesh=new x(new ge(1,1,1,6),e,Ql),this.impactsMesh=new x(new P(1,1),new L({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),Ql),this.flashesMesh=new x(new P(1,1),new L({color:16777215,transparent:!0,opacity:.95,depthWrite:!1}),Ql);for(let e of[this.beamsMesh,this.impactsMesh,this.flashesMesh])e.instanceMatrix.setUsage(k),e.count=0;this.beamsMesh.frustumCulled=!1,this.impactsMesh.frustumCulled=!1,this.flashesMesh.frustumCulled=!1,this.beamsMesh.renderOrder=20,this.impactsMesh.renderOrder=21,this.flashesMesh.renderOrder=22,this.group.add(this.beamsMesh,this.impactsMesh,this.flashesMesh)}sync(e,t){for(let n of e)n.kind===`combatHit`&&this.addHit(n,t);this.beams=this.beams.filter(e=>t<e.startedAt+e.duration),this.impacts=this.impacts.filter(e=>t<e.startedAt+e.duration),this.flashes=this.flashes.filter(e=>t<e.startedAt+e.duration);for(let[e,n]of this.melee)t>=n.startedAt+n.duration&&this.melee.delete(e);this.syncBeams(t),this.syncImpacts(t),this.syncFlashes(t)}meleePose(e,t){let n=this.melee.get(e);if(!n)return;let r=ru((t-n.startedAt)/n.duration,0,1);if(r>=1)return;let i=Math.sin(r*Math.PI);return{forward:i*n.distance,yaw:i*.18}}addHit(e,t){let n=Wc(e.weaponId),r=Yl(e.weaponId),i=Kl(e.attackerTypeId),a=e.targetHeight??Kl(e.targetTypeId).height,o=Zl(e.attackerTypeId,e.weaponId,e.shotIndex),s=o?new K(e.sourceX+Math.cos(e.sourceHeading)*o.forward-Math.sin(e.sourceHeading)*o.right,Q+o.height,e.sourceZ+Math.sin(e.sourceHeading)*o.forward+Math.cos(e.sourceHeading)*o.right):this.defaultSource(e,i.radius,i.height),c=new K(e.targetX,Q+a*.56,e.targetZ);if(n.projectileSpeed===0){this.melee.set(e.attackerId,{startedAt:t,duration:$l,distance:Math.max(.6,i.radius*.1)}),this.pushImpact({position:c,colour:r.colour,radius:r.impactRadius,startedAt:t,duration:130});return}let l=ru(s.distanceTo(c)/n.projectileSpeed*250,65,180);this.pushBeam({start:s,end:c,colour:r.colour,width:r.tracerWidth,...r.tracerLength===void 0?{}:{length:r.tracerLength},startedAt:t,duration:l}),r.muzzleFlash&&this.pushFlash({position:s,colour:r.muzzleFlash.colour,radius:r.muzzleFlash.radius,startedAt:t,duration:r.muzzleFlash.durationMs}),this.pushImpact({position:c,colour:r.colour,radius:r.impactRadius,startedAt:t+l*.72,duration:120})}defaultSource(e,t,n){let r=Math.max(1,t*.48),i=e.weaponId===`machine-cannon`?.6:.3,a=(e.shotIndex-(e.shotCount-1)/2)*Math.max(.8,t*i);return new K(e.sourceX+Math.cos(e.sourceHeading)*r-Math.sin(e.sourceHeading)*a,Q+n*.58,e.sourceZ+Math.sin(e.sourceHeading)*r+Math.cos(e.sourceHeading)*a)}pushBeam(e){this.beams.length>=Ql&&this.beams.shift(),this.beams.push(e)}pushImpact(e){this.impacts.length>=Ql&&this.impacts.shift(),this.impacts.push(e)}pushFlash(e){this.flashes.length>=Ql&&this.flashes.shift(),this.flashes.push(e)}syncBeams(e){let t=0,n=!1,r=!1;for(let i of this.beams){let a=ru((e-i.startedAt)/i.duration,0,1);this.direction.subVectors(i.end,i.start);let o=this.direction.length(),s=o*a,c=i.length===void 0?0:Math.max(0,s-Math.min(i.length,o)),l=s-c;if(l<=1e-5)continue;this.direction.normalize(),this.position.copy(i.start).addScaledVector(this.direction,c+l/2),this.rotation.setFromUnitVectors(eu,this.direction);let u=1-a*.55;this.scale.set(i.width*u,l,i.width*u),this.matrix.compose(this.position,this.rotation,this.scale),n=tu(this.beamsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=nu(this.beamsMesh,t,this.colour)||r,t++}this.finish(this.beamsMesh,t,n,r)}syncImpacts(e){let t=0,n=!1,r=!1;for(let i of this.impacts){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.45+Math.sin(a*Math.PI)*.9);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=tu(this.impactsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=nu(this.impactsMesh,t,this.colour)||r,t++}this.finish(this.impactsMesh,t,n,r)}syncFlashes(e){let t=0,n=!1,r=!1;for(let i of this.flashes){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.65+Math.sin(a*Math.PI)*.75);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=tu(this.flashesMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=nu(this.flashesMesh,t,this.colour)||r,t++}this.finish(this.flashesMesh,t,n,r)}finish(e,t,n,r){e.count=t,n&&(e.instanceMatrix.needsUpdate=!0),r&&e.instanceColor&&(e.instanceColor.needsUpdate=!0)}dispose(){this.beamsMesh.geometry.dispose(),this.beamsMesh.material.dispose(),this.impactsMesh.geometry.dispose(),this.impactsMesh.material.dispose(),this.flashesMesh.geometry.dispose(),this.flashesMesh.material.dispose()}},au=[10800,-81e3,10800],ou=35e3,su=[8433856,8433856,8958144,8960192,9484488],cu=[12636344,11585712,12112064,11585720,12636352,11059376],lu=40,uu=22;function du(e,t){return(e*17+t*13)%19/18}function fu(e,t,n){let r=Math.atan2(n,e),i=Math.asin(t/Math.hypot(e,t,n)),a=Math.floor((r+Math.PI)/(Math.PI*2)*lu);return Math.floor((i+Math.PI/2)/Math.PI*uu)*lu+a}function pu(){let e=new P(ou,5).toNonIndexed(),t=e.getAttribute(`position`),n=new Float32Array(t.count*3),r=new z;for(let e=0;e<t.count/3;e++){let i=e*3,a=((t.getX(i)??0)+(t.getX(i+1)??0)+(t.getX(i+2)??0))/3,o=((t.getY(i)??0)+(t.getY(i+1)??0)+(t.getY(i+2)??0))/3,s=((t.getZ(i)??0)+(t.getZ(i+1)??0)+(t.getZ(i+2)??0))/3,c=(a+s)*.6+o*.53,l=fu(a,o,s),u=c<ou*.35||du(l,1)>.48?su:cu,d=Math.min(u.length-1,Math.floor(du(l,2)*u.length));r.setHex(u[d]);for(let e=0;e<3;e++){let t=(i+e)*3;n[t]=r.r,n[t+1]=r.g,n[t+2]=r.b}}e.setAttribute(`color`,new Re(n,3));let i=new R(e,new L({vertexColors:!0,fog:!1}));return i.position.set(au[0],au[1],au[2]),i}var mu=class{group=new i;constructor(){this.group.add(pu())}dispose(){for(let e of this.group.children)e instanceof R&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose());this.group.clear()}},hu=`modulepreload`,gu=function(e){return`/HumanResourcesLowPoly/`+e},_u={},vu=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=gu(t,n),t=s(t),t in _u)return;_u[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:hu,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},yu=class{resources;resourcesPromise;queued=new Map;draining=!1;priority=0;order=0;disposed=!1;ready(){return this.resourcesPromise||=Promise.all([vu(()=>import(`./unitModelResources-CShfznbw.js`),__vite__mapDeps([0,1,2])),vu(()=>import(`./unitModelMaterials-CwQnBjv0.js`),__vite__mapDeps([3,1,4]))]).then(([{UnitModelResources:e},{prepareUnitModelMaterials:t}])=>{if(this.disposed)return;let n=new e(t);return this.resources=n,this.drain(),n}).catch(e=>{this.disposed||console.warn(`Unable to initialise Detailed model loading; using block fallbacks.`,e)}),this.resourcesPromise}preload(e){if(this.disposed)return;let t=--this.priority;for(let n of e){let e=Ul(n.typeId,n.state);if(this.resources?.status(e)?.state===`ready`||this.resources?.status(e)?.state===`loading`)continue;let r=this.queued.get(e);(!r||t<r.priority)&&this.queued.set(e,{entry:n,priority:t,order:this.order++})}this.ready().then(()=>this.drain())}async drain(){if(this.draining)return;let e=await this.ready();if(!(!e||this.disposed)){this.draining=!0;try{for(;!this.disposed&&this.queued.size>0;){let t=[...this.queued.entries()].sort(([,e],[,t])=>e.priority-t.priority||e.order-t.order)[0];if(!t)return;let[n,r]=t;this.queued.delete(n),await e.load(n,r.entry),await new Promise(e=>setTimeout(e,0))}}finally{this.draining=!1,!this.disposed&&this.queued.size>0&&this.drain()}}}dispose(){this.disposed||(this.disposed=!0,this.queued.clear(),this.resources?.dispose())}};function bu(){return Su([[`machine-harbinger`,!1],[`ancient-harbinger`,!1],[`machine-processing-node`,!1],[`mobile-factory`,!1],[`mobile-factory`,!0],[`ancient-slime-temple`,!1],[`ancient-deity-structure`,!1]])}function xu(e){let t=e.world.units.units,n=t.filter(t=>xl(t.typeId).faction===e.playerFaction).map(e=>[e.typeId,e.deployed]),r=t.filter(t=>xl(t.typeId).faction!==e.playerFaction).map(e=>[e.typeId,e.deployed]),i=e.world.constructionSites.map(e=>[e.structureTypeId,!1]),a=t.flatMap(e=>e.queue.map(e=>[e.typeId,!1]));return Su([...n,...r,...i,...a],bu())}function Su(e,t=Vl){let n=[],r=new Set,i=e=>{if(!e)return;let t=Ul(e.typeId,e.state);r.has(t)||(r.add(t),n.push(e))};for(let[t,n]of e)i(Wl(t,n));for(let e of t)i(e);for(let e of Vl)i(e);return n}var Cu=[],wu=.2,Tu=64,Eu=1.2,Du=.05,Ou=2400,ku=[`machine-infantry`,`machine-construct`,`machine-harbinger`,`machine-processing-node`,`mobile-factory`];function Au(e,t){if(!ku.includes(e))return;let n=t.radius+Math.hypot(t.centre.x,t.centre.z),r=Math.max(n,t.height/2)*1.08,i=e===`machine-construct`,a=e===`machine-harbinger`,o=e===`mobile-factory`,s=r*(i?.82:a?.9:o?1.1:1);return{drop:e===`machine-infantry`||e===`machine-construct`||e===`machine-harbinger`||e===`machine-processing-node`?t.height*.25:0,shieldRadius:s,shieldCentre:{x:t.centre.x,y:t.centre.y+(i?t.height*.12:o?-s/3:0),z:t.centre.z}}}function ju(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}function Mu(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function Nu(e,t,n){let r=e.instanceColor,i=t*3;if(r&&Math.fround(n.r)===r.array[i]&&Math.fround(n.g)===r.array[i+1]&&Math.fround(n.b)===r.array[i+2])return!1;e.setColorAt(t,n);let a=e.instanceColor;return a?(a.setUsage(k),a.addUpdateRange(i,3),!0):!1}var Pu=class{detailedResourcesFactory;sharedModelCache;group=new i;meshes=new Map;matrix=new Ae;rotation=new Ae;colour=new z;used=new Map;selected=new Map;alerted=new Map;importedUnits=new Map;activeImportedUnits=new Set;modelResources;pendingModelLoads=new Map;modelLoaderState;modelResourcesPromise;ownsModelResources;disposed=!1;importedTemplates=new Map;defeatedImportedUnits=new Map;fadingDeadUnits=new Map;presentationHidden=new Set;importedSelectionGroup=new i;importedOcclusionGroups={machines:new i,ancients:new i};lastAnimationSyncMs;drawn=0;selectedDrawn=0;alertedDrawn=0;constructor(e,t,n){this.detailedResourcesFactory=t,this.sharedModelCache=n,this.ownsModelResources=n===void 0,n?this.modelResourcesPromise=n.ready().then(e=>this.acceptModelResources(e)):this.startDetailedModelLoader();for(let t of yl)for(let n of Gl(t.id)?[!1,!0]:[!1]){let r=e.units.filter(e=>e.typeId===t.id).length,i=Math.max(r+Tu,4),a=this.fallbackGeometry(t.id,n),o=new x(a,mt(16777215),i);o.frustumCulled=!1;let s=new x(a.clone(),new L,i);s.frustumCulled=!1;let c=new x(s.geometry,new L,i);c.frustumCulled=!1;let l=this.deployedAppearanceFor(t.id),u;l&&(u=new x(new P(l.shieldRadius,2),mt(dt(`machines`),{transparent:!0,opacity:wu,depthWrite:!1}),i),u.frustumCulled=!1,u.renderOrder=5);let d=`${t.id}:${n?`deployed`:`mobile`}`;for(let e of[o,s,c,u])e&&(e.instanceMatrix.setUsage(k),e.count=0);o.castShadow=o.receiveShadow=!0,s.castShadow=s.receiveShadow=!1,u&&(u.castShadow=u.receiveShadow=!1),this.meshes.set(d,{key:d,type:t,deployed:n,body:o,shell:s,alertShell:c,deployedShield:u,deployedAppearance:l,matrixDirty:!1,shellMatrixDirty:!1,alertShellMatrixDirty:!1,shieldMatrixDirty:!1,bodyColourDirty:!1}),this.group.add(o),u&&this.group.add(u)}}boundsOf(e,t=!1){let n=Wl(e,t),r=n&&Ul(n.typeId,n.state);return(r?this.modelResources?.measuredBounds(r):void 0)??Kl(e,t)}deployedAppearanceFor(e){return Au(e,this.boundsOf(e,!1))}fallbackGeometry(e,t){let n=this.boundsOf(e,t),r=new ye(n.size.x,n.size.y,n.size.z);return r.translate(n.centre.x,n.centre.y,n.centre.z),r}refreshDeployedShield(e){let t=this.deployedAppearanceFor(e);if(t)for(let n of[`mobile`,`deployed`]){let r=this.meshes.get(`${e}:${n}`);!r?.deployedShield||t.shieldRadius===r.deployedAppearance?.shieldRadius||(r.deployedShield.geometry.dispose(),r.deployedShield.geometry=new P(t.shieldRadius,2),r.deployedAppearance=t,r.shieldMatrixDirty=!0)}}loadModel(e,t){return this.modelResources.load(e,t).then(()=>{t.state!==`deployed`&&this.refreshDeployedShield(t.typeId)})}requestImportedModel(e,t){let n=Wl(e,t);if(n){let e=Ul(n.typeId,n.state);this.sharedModelCache?.preload([n]),this.modelResources?this.loadModel(e,n):this.pendingModelLoads.set(e,n)}return n}startDetailedModelLoader(){this.modelLoaderState={state:`loading`};let e=this.detailedResourcesFactory?Promise.resolve(void 0):vu(()=>import(`./unitModelResources-CShfznbw.js`),__vite__mapDeps([0,1,2]));this.modelResourcesPromise=Promise.all([e,vu(()=>import(`./unitModelMaterials-CwQnBjv0.js`),__vite__mapDeps([3,1,4]))]).then(([e,{prepareUnitModelMaterials:t}])=>{if(this.disposed)return;let n=this.detailedResourcesFactory?this.detailedResourcesFactory(t):new e.UnitModelResources(t);return this.acceptModelResources(n)}).catch(e=>{this.disposed||(this.modelLoaderState={state:`failed`,error:e},console.warn(`Unable to initialise Detailed model loading; using block fallbacks.`,e))})}acceptModelResources(e){if(!(!e||this.disposed)){this.modelResources=e,this.modelLoaderState=void 0;for(let[e,t]of this.pendingModelLoads)this.loadModel(e,t);return this.pendingModelLoads.clear(),e}}async preloadAll(e){let t=[e===`machines`?`machine-harbinger`:`ancient-harbinger`,e===`machines`?`ancient-harbinger`:`machine-harbinger`,`machine-processing-node`,`mobile-factory`,`ancient-slime-temple`,`ancient-deity-structure`],n=[...t.flatMap(e=>Vl.filter(t=>t.typeId===e)),...Vl.filter(e=>!t.includes(e.typeId))];if(this.sharedModelCache){this.sharedModelCache.preload(n);return}if(!(!await this.modelResourcesPromise||this.disposed))for(let e of n){if(this.disposed)return;await this.loadModel(Ul(e.typeId,e.state),e),await new Promise(e=>setTimeout(e,0))}}modelTemplate(e,t=!1){let n=Wl(e,t);return n?this.modelResources?.get(Ul(n.typeId,n.state))?.scene:void 0}setPresentationHidden(e){this.presentationHidden.clear();for(let t of e)this.presentationHidden.add(t)}importedUnitFor(e,t,n){let r=this.requestImportedModel(e,n);if(!r)return;let i=Ul(r.typeId,r.state),a=this.modelResources?.get(i)??this.importedTemplates.get(i);if(!a)return;let o=this.importedUnits.get(t);if(o?.modelKey===i)return o;o&&this.removeImportedUnit(t,o);let s=ht(a.scene),c=ht(a.scene),l=a.pickGeometry?new R(a.pickGeometry,new L({side:2})):void 0,u=new Ue(s),d=new Ue(c),f=r?.animations&&this.animationClip(a,r.animations.walk),p={modelKey:i,template:a,body:s,pick:l,selection:void 0,occlusion:c,faction:r.faction,selectionMaterial:void 0,mixer:u,occlusionMixer:d,walkAction:f?u.clipAction(f):void 0,occlusionWalkAction:f?d.clipAction(f):void 0};return this.importedUnits.set(t,p),this.group.add(s),this.importedOcclusionGroups[r.faction].add(c),p}syncImportedUnit(e,t,n,r,i,a,o,s){let c=Wl(e,s);if(!c)return;let l=this.importedUnitFor(e,t,s);if(l)return this.activeImportedUnits.add(t),l.body.position.set(n,r,i),l.body.rotation.set(0,-a+(c.bounds.yawOffset??0),0),l.pick&&(l.pick.position.copy(l.body.position),l.pick.rotation.copy(l.body.rotation)),l.occlusion.position.copy(l.body.position),l.occlusion.rotation.copy(l.body.rotation),l.walkAction&&(o?l.walkAction.isRunning()||l.walkAction.reset().play():l.walkAction.isRunning()&&l.walkAction.stop()),l.occlusionWalkAction&&(o?l.occlusionWalkAction.isRunning()||l.occlusionWalkAction.reset().play():l.occlusionWalkAction.isRunning()&&l.occlusionWalkAction.stop()),l}selectionClone(e){if(e.selection)return e.selection;let t=ht(e.template.scene),n=new L({color:16777215,side:2,toneMapped:!1});return t.traverse(e=>{e instanceof R&&(e.material=n,e.castShadow=e.receiveShadow=!1,e.frustumCulled=!1)}),e.selection=t,e.selectionMaterial=n,this.importedSelectionGroup.add(t),t}advanceImportedAnimations(e){let t=this.lastAnimationSyncMs??e,n=Math.min(.1,Math.max(0,e-t)/1e3);this.lastAnimationSyncMs=e;for(let e of this.importedUnits.values())e.walkAction?.isRunning()&&e.mixer.update(n),e.occlusionWalkAction?.isRunning()&&e.occlusionMixer.update(n);for(let[t,r]of this.defeatedImportedUnits)r.mixer.update(n),!(e<r.expiresAt)&&(this.retireCorpse(r),r.mixer.stopAllAction(),this.defeatedImportedUnits.delete(t));for(let[t,n]of this.fadingDeadUnits){let r=Math.min(1,(e-n.startMs)/n.durationMs);for(let e=0;e<n.materials.length;e++)n.materials[e].opacity=n.baseOpacities[e]*(1-r);if(n.body.position.y=n.startY-n.sinkMetres*r,!n.shadowDisabled&&r>=.5&&(n.shadowDisabled=!0,n.body.traverse(e=>{e.castShadow=!1})),!(r<1)){this.retireCorpse(n);for(let e of n.materials)e.dispose();this.fadingDeadUnits.delete(t)}}}retireCorpse(e){this.group.remove(e.body),e.occlusion&&this.importedOcclusionGroups[e.faction].remove(e.occlusion)}corpseShadowSources(){if(this.defeatedImportedUnits.size===0&&this.fadingDeadUnits.size===0)return Cu;let e=[];for(let t of this.defeatedImportedUnits.values())e.push({x:t.body.position.x,z:t.body.position.z,radius:t.radius});for(let t of this.fadingDeadUnits.values())e.push({x:t.body.position.x,z:t.body.position.z,radius:t.radius});return e}deathFadeDurationFor(e){return Math.min(Ou,Math.max(600,e.height*25))}animationClip(e,t){return e.animations.find(e=>e.name===t)}syncDefeats(e,t){let n=new Set;for(let r of e){if(r.kind!==`combatHit`||r.remainingHealth>0||n.has(r.targetId)||this.defeatedImportedUnits.has(r.targetId)||this.fadingDeadUnits.has(r.targetId))continue;let e=this.importedUnits.get(r.targetId),i=e?.modelKey.endsWith(`:deployed`)??!1,a=Wl(r.targetTypeId,i);if(!a)continue;n.add(r.targetId);let o=this.modelResources?.get(Ul(r.targetTypeId,a.state))??this.importedTemplates.get(Ul(r.targetTypeId,a.state));if(!o)continue;let s=a.animations&&this.animationClip(o,a.animations.defeat),c=e?.body??ht(o.scene),l=e?.occlusion;e?(this.importedUnits.delete(r.targetId),e.selection&&this.importedSelectionGroup.remove(e.selection),e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()):this.group.add(c),c.position.set(r.targetX,Q,r.targetZ),c.rotation.set(0,-(r.targetHeading??0)+(a.bounds.yawOffset??0),0);let u=$(xl(r.targetTypeId),i);if(s){let e=new Ue(c),n=e.clipAction(s);n.setLoop(Ce,1),n.clampWhenFinished=!0,n.play(),this.defeatedImportedUnits.set(r.targetId,{body:c,mixer:e,expiresAt:t+s.duration*1e3,occlusion:l,faction:a.faction,radius:u});continue}let d=this.boundsOf(r.targetTypeId,i),f=[],p=[],m=new Map,h=e=>{let t=m.get(e);if(t)return t;let n=e.clone();return n.transparent=!0,delete n.userData.outlineParameters,m.set(e,n),f.push(n),p.push(n.opacity),n};c.traverse(e=>{e instanceof R&&(e.material=Array.isArray(e.material)?e.material.map(h):h(e.material))}),this.fadingDeadUnits.set(r.targetId,{body:c,materials:f,baseOpacities:p,startY:c.position.y,sinkMetres:Math.min(Eu,d.height*Du),startMs:t,durationMs:this.deathFadeDurationFor(d),occlusion:l,faction:a.faction,radius:u,shadowDisabled:!1})}}removeDormantImportedUnits(){for(let[e,t]of this.importedUnits)this.activeImportedUnits.has(e)||this.removeImportedUnit(e,t)}removeImportedUnit(e,t){this.group.remove(t.body),t.selection&&this.importedSelectionGroup.remove(t.selection),this.importedOcclusionGroups[t.faction].remove(t.occlusion),t.selectionMaterial?.dispose(),t.pick?.material.dispose(),t.mixer.stopAllAction(),t.occlusionMixer.stopAllAction(),this.importedUnits.delete(e)}importedSelectionSources(){return this.importedSelectionGroup}importedPickSource(e){let t=this.importedUnits.get(e);return t?.pick??t?.body}importedOcclusionSources(){return Object.entries(this.importedOcclusionGroups).map(([e,t])=>({source:t,faction:e}))}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof R))return;let n=t.material;Array.isArray(n)?n.forEach(t=>ft(t,e)):ft(n,e)})}occlusionSources(){return[...this.meshes.values()].map(e=>({source:e.body,geometry:e.shell.geometry,faction:e.type.faction}))}selectionSources(){return[...this.meshes.values()].flatMap(e=>[{source:e.shell,geometry:e.shell.geometry,faction:e.type.faction,alert:!1},{source:e.alertShell,geometry:e.shell.geometry,faction:e.type.faction,alert:!0}])}sync(e,t,n,r,i=performance.now()){this.advanceImportedAnimations(i),this.used.clear(),this.selected.clear(),this.alerted.clear(),this.activeImportedUnits.clear(),this.drawn=0,this.selectedDrawn=0,this.alertedDrawn=0;for(let e of this.meshes.values())e.matrixDirty=!1,e.shellMatrixDirty=!1,e.alertShellMatrixDirty=!1,e.shieldMatrixDirty=!1,e.bodyColourDirty=!1;for(let i of e.units){if(this.presentationHidden.has(i.id))continue;let e=i.deployTimer>0?1-i.deployTimer/Gc:+!!i.deployed,a=Gl(i.typeId)&&(i.deployTimer>0?i.deployTarget?e>=.5:e>.5:i.deployed),o=this.meshes.get(`${i.typeId}:${a?`deployed`:`mobile`}`);if(!o)continue;let s=this.used.get(o.key)??0;if(s>=o.body.instanceMatrix.count)continue;this.used.set(o.key,s+1);let c=i.prevX+(i.x-i.prevX)*t,l=i.prevZ+(i.z-i.prevZ)*t,u=r?.(i.id),d=ju(i.prevHeading,i.heading,t),f=c+(u?.forward??0)*Math.cos(d),p=l+(u?.forward??0)*Math.sin(d);this.rotation.makeRotationY(-d-(u?.yaw??0));let m=o.deployedAppearance,h=0;if(m)if(i.deployTimer>0){let e=1-i.deployTimer/Gc;h=i.deployTarget?e:1-e}else i.deployed&&(h=1);let g=Q-(m?.drop??0)*h,_=Math.hypot(i.x-i.prevX,i.z-i.prevZ)>.001,v=this.syncImportedUnit(i.typeId,i.id,f,g,p,d+(u?.yaw??0),_,a);if(o.body.visible=!v,this.matrix.copy(this.rotation),this.matrix.setPosition(f,g,p),o.matrixDirty=Mu(o.body,s,this.matrix)||o.matrixDirty,o.deployedShield&&m){this.matrix.copy(this.rotation),this.matrix.scale(new K(h,h,h));let e=m.shieldCentre,t=new K(e.x,e.y,e.z).applyMatrix4(this.rotation);this.matrix.setPosition(f+t.x,g+t.y,p+t.z),o.shieldMatrixDirty=Mu(o.deployedShield,s,this.matrix)||o.shieldMatrixDirty}let y=ut(o.type.faction),b=1;if(i.deployTimer>0){let e=1-i.deployTimer/Gc,t=i.deployTarget?1:.72;b=t+((i.deployTarget?.72:1)-t)*e}else i.deployed&&(b=.72);this.colour.setHex(y).multiplyScalar(b),o.bodyColourDirty=Nu(o.body,s,this.colour)||o.bodyColourDirty;let x=n(i.id);if(x!==void 0){let e=x===`attack`;if(v){let t=this.selectionClone(v);t.position.copy(v.body.position),t.rotation.copy(v.body.rotation),t.visible=!0,v.selectionMaterial?.color.set(e?16719904:Yi[o.type.faction].line)}else{let t=e?o.alertShell:o.shell,n=e?this.alerted:this.selected,r=n.get(o.key)??0;this.matrix.copy(this.rotation),this.matrix.setPosition(f,g,p);let i=Mu(t,r,this.matrix);e?o.alertShellMatrixDirty=i||o.alertShellMatrixDirty:o.shellMatrixDirty=i||o.shellMatrixDirty,n.set(o.key,r+1)}e?this.alertedDrawn++:this.selectedDrawn++}else v&&v.selection&&(v.selection.visible=!1);this.drawn++}this.removeDormantImportedUnits();for(let e of this.meshes.values()){let t=this.used.get(e.key)??0;e.body.count=t,e.shell.count=this.selected.get(e.key)??0,e.alertShell.count=this.alerted.get(e.key)??0,e.deployedShield&&(e.deployedShield.count=t),e.matrixDirty&&(e.body.instanceMatrix.needsUpdate=!0),e.shellMatrixDirty&&(e.shell.instanceMatrix.needsUpdate=!0),e.alertShellMatrixDirty&&(e.alertShell.instanceMatrix.needsUpdate=!0),e.deployedShield&&e.shieldMatrixDirty&&(e.deployedShield.instanceMatrix.needsUpdate=!0),e.bodyColourDirty&&e.body.instanceColor&&(e.body.instanceColor.needsUpdate=!0)}}static footprintOf(e,t=!1){return $(e,t)}modelStatus(e,t=!1){let n=Wl(e,t);if(!n)return;let r=Ul(n.typeId,n.state);return this.modelResources?.status(r)??(this.pendingModelLoads.has(r)?this.modelLoaderState:void 0)}detailedPerformanceStats(){if(!this.modelResources)return;let e=this.modelResources.counts,t=0;for(let e of this.importedUnits.values())e.selection?.visible&&t++;return{loadedModels:e.loaded,loadingModels:e.loading,failedModels:e.failed,fallbacks:this.drawn-this.activeImportedUnits.size,visible:this.activeImportedUnits.size,selection:t,occlusion:this.activeImportedUnits.size}}dispose(){this.disposed=!0,this.pendingModelLoads.clear();for(let e of this.importedUnits.values()){this.group.remove(e.body),e.selection&&this.importedSelectionGroup.remove(e.selection);for(let t of Object.values(this.importedOcclusionGroups))t.remove(e.occlusion);e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()}this.importedUnits.clear();for(let e of this.defeatedImportedUnits.values())this.retireCorpse(e),e.mixer.stopAllAction();this.defeatedImportedUnits.clear();for(let e of this.fadingDeadUnits.values()){this.retireCorpse(e);for(let t of e.materials)t.dispose()}this.fadingDeadUnits.clear(),this.importedSelectionGroup.clear();for(let e of Object.values(this.importedOcclusionGroups))e.clear();this.ownsModelResources&&this.modelResources?.dispose();for(let e of this.meshes.values())e.body.geometry.dispose(),Fu(e.body.material),e.shell.geometry.dispose(),Fu(e.shell.material),Fu(e.alertShell.material),e.deployedShield&&(e.deployedShield.geometry.dispose(),Fu(e.deployedShield.material))}};function Fu(e){Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}var Iu=2e-5,Lu=.58,Ru=class{units;group=new i;overlayScene=new w;depthScene=new w;occluderTarget;unitDepthTarget;size=new H;overlays;importedOverlays;constructor(e){this.units=e,this.occluderTarget=zu(),this.unitDepthTarget=zu(),this.group.name=`unit-occlusion-overlay`,this.overlayScene.add(this.group),this.overlays=this.units.occlusionSources().map(e=>this.createOverlay(e)),this.importedOverlays=this.units.importedOcclusionSources().map(e=>this.createImportedOverlay(e))}captureOccluderDepth(e,t,n){this.resizeToRenderer(e);let r=this.units.group.visible,i=e.getRenderTarget(),a=e.autoClear,o=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,this.units.group.visible=!1;try{e.setRenderTarget(this.occluderTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(t,n)}finally{e.setRenderTarget(i),e.autoClear=a,this.units.group.visible=r,e.shadowMap.autoUpdate=o}}render(e,t){for(let e of this.overlays){let t=e.source.source.visible?e.source.source.count:0;e.mesh.count=t,e.depthMesh.count=t,e.colour.setHex(ut(e.source.faction))}for(let e of this.importedOverlays)e.colour.setHex(ut(e.source.faction));this.captureUnitSilhouetteDepth(e,t);let n=e.autoClear;try{e.autoClear=!1,e.render(this.overlayScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.material,e.render(n.scene,t))}finally{e.autoClear=n}}dispose(){this.occluderTarget.dispose(),this.unitDepthTarget.dispose();for(let e of this.overlays)e.material.dispose(),e.depthMaterial.dispose();for(let e of this.importedOverlays)e.material.dispose(),e.depthMaterial.dispose(),e.source.source.removeFromParent(),e.scene.clear();this.group.clear(),this.overlayScene.clear(),this.depthScene.clear()}createOverlay(e){let t=new z(ut(e.faction)),n=new N({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:Lu},epsilon:{value:Iu}},vertexShader:`
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
      `}),r=new x(e.geometry,n,e.source.instanceMatrix.count);r.instanceMatrix=e.source.instanceMatrix,r.count=0,r.frustumCulled=!1,this.group.add(r);let i=new N({colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          vec4 viewPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        void main() { }
      `}),a=new x(e.geometry,i,e.source.instanceMatrix.count);return a.instanceMatrix=e.source.instanceMatrix,a.count=0,a.frustumCulled=!1,this.depthScene.add(a),{source:e,mesh:r,depthMesh:a,material:n,depthMaterial:i,colour:t}}createImportedOverlay(e){let t=new z(ut(e.faction)),n=new N({transparent:!0,side:2,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:Lu},epsilon:{value:Iu}},vertexShader:`
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
      `}),r=new N({side:2,colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        void main() { }
      `}),i=new w;return i.add(e.source),{source:e,scene:i,material:n,depthMaterial:r,colour:t}}captureUnitSilhouetteDepth(e,t){let n=e.getRenderTarget(),r=e.autoClear;try{e.setRenderTarget(this.unitDepthTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(this.depthScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.depthMaterial,e.render(n.scene,t))}finally{e.setRenderTarget(n),e.autoClear=r}}resizeToRenderer(e){e.getDrawingBufferSize(this.size);let t=Math.max(1,Math.floor(this.size.x)),n=Math.max(1,Math.floor(this.size.y));(this.occluderTarget.width!==t||this.occluderTarget.height!==n)&&(this.occluderTarget.setSize(t,n),this.unitDepthTarget.setSize(t,n))}};function zu(){let e=new f(1,1,Be);e.format=$e;let t=new Se(1,1,{depthBuffer:!0});return t.depthTexture=e,t}var Bu=2,Vu=8,Hu=.3,Uu=.52,Wu=class{units;maskScene=new w;maskGroup=new i;maskTarget=Gu(!0);horizontalTarget=Gu(!1);postScene=new w;postCamera=new r(-1,1,1,-1,0,2);horizontalMaterial;compositeMaterial;fullscreen;buildingMask;masks;resolution=new H;clearColour=new z;constructor(e){this.units=e,this.postCamera.position.z=1,this.maskScene.add(this.maskGroup),this.masks=this.units.selectionSources().map(e=>this.createMask(e)),this.maskGroup.add(this.units.importedSelectionSources()),this.buildingMask=new R(new O,new L({color:16719904,side:2,toneMapped:!1})),this.buildingMask.visible=!1,this.maskGroup.add(this.buildingMask),this.horizontalMaterial=Ku(this.maskTarget.texture,this.resolution,!1),this.compositeMaterial=Ku(this.horizontalTarget.texture,this.resolution,!0),this.compositeMaterial.uniforms.originMask.value=this.maskTarget.texture,this.fullscreen=new R(new O(2,2),this.horizontalMaterial),this.fullscreen.frustumCulled=!1,this.postScene.add(this.fullscreen)}render(e,t,n){this.syncSources(n),!(this.units.selectedDrawn===0&&this.units.alertedDrawn===0&&!n)&&(this.resizeToRenderer(e),this.captureMask(e,t),this.renderHorizontal(e),this.composite(e))}dispose(){this.maskTarget.dispose(),this.horizontalTarget.dispose(),this.horizontalMaterial.dispose(),this.compositeMaterial.dispose(),this.fullscreen.geometry.dispose(),this.buildingMask.material.dispose();for(let e of this.masks)e.mesh.material.dispose();this.maskGroup.remove(this.units.importedSelectionSources()),this.maskGroup.clear(),this.maskScene.clear(),this.postScene.clear()}createMask(e){let t=new x(e.geometry,new L({color:e.alert?16719904:Yi[e.faction].line,side:2,toneMapped:!1}),e.source.instanceMatrix.count);return t.instanceMatrix=e.source.instanceMatrix,t.count=0,t.frustumCulled=!1,this.maskGroup.add(t),{source:e,mesh:t}}syncSources(e){for(let e of this.masks)e.mesh.count=e.source.source.count;this.buildingMask.visible=e!==void 0,e&&(this.buildingMask.geometry=e.geometry,this.buildingMask.material.color.setHex(e.colour))}captureMask(e,t){let n=e.getRenderTarget(),r=e.autoClear,i=e.getClearAlpha();e.getClearColor(this.clearColour);try{e.setRenderTarget(this.maskTarget),e.autoClear=!1,e.setClearColor(0,0),e.clear(!0,!0,!0),e.render(this.maskScene,t)}finally{e.setClearColor(this.clearColour,i),e.setRenderTarget(n),e.autoClear=r}}renderHorizontal(e){let t=e.getRenderTarget(),n=e.autoClear;try{e.setRenderTarget(this.horizontalTarget),e.autoClear=!1,e.clear(!0,!0,!0),this.fullscreen.material=this.horizontalMaterial,e.render(this.postScene,this.postCamera)}finally{e.setRenderTarget(t),e.autoClear=n}}composite(e){let t=e.autoClear;try{e.autoClear=!1,this.fullscreen.material=this.compositeMaterial,e.render(this.postScene,this.postCamera)}finally{e.autoClear=t}}resizeToRenderer(e){e.getDrawingBufferSize(this.resolution);let t=Math.max(1,Math.floor(this.resolution.x)),n=Math.max(1,Math.floor(this.resolution.y));(this.maskTarget.width!==t||this.maskTarget.height!==n)&&(this.maskTarget.setSize(t,n),this.horizontalTarget.setSize(t,n));let r=Math.min(Vu,Math.max(1,Math.round(Bu*e.getPixelRatio())));this.horizontalMaterial.uniforms.radius.value=r,this.compositeMaterial.uniforms.radius.value=r}};function Gu(e){let t=new Se(1,1,{depthBuffer:e});return t.texture.minFilter=oe,t.texture.magFilter=oe,t.texture.generateMipmaps=!1,t}function Ku(e,t,n){return new N({transparent:n,depthTest:!1,depthWrite:!1,uniforms:{mask:{value:e},originMask:{value:e},resolution:{value:t},radius:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:n?Ju():qu()})}function qu(){return`
    uniform sampler2D mask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${Vu}; offset <= ${Vu}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(float(offset) / resolution.x, 0.0));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      gl_FragColor = best;
    }
  `}function Ju(){return`
    uniform sampler2D mask;
    uniform sampler2D originMask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${Vu}; offset <= ${Vu}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(0.0, float(offset) / resolution.y));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      if (best.a < 0.5) discard;
      float original = texture2D(originMask, vUv).a;
      float opacity = original >= 0.5 ? ${Hu.toFixed(2)} : ${Uu.toFixed(2)};
      gl_FragColor = vec4(best.rgb, opacity);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}var Yu={x:-1244,y:3e3,z:700},Xu=16770750,Zu=2.6,Qu=7438479,$u=.82,ed={x:-Yu.x/Yu.y,z:-Yu.z/Yu.y},td=4096,nd=760,rd=1900,id=.9;function ad(e,t,n){if(!e.castShadow)return;let r=G.clamp(n,0,1),i=G.lerp(nd,rd,r*r),a=i*2/td,o=Math.round(t.x/a)*a,s=Math.round(t.z/a)*a;e.position.set(Yu.x+o,Yu.y,Yu.z+s),e.target.position.set(o,0,s),e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.radius=id/a,e.shadow.camera.updateProjectionMatrix()}function od(e={cityLighting:!0,enhancedShadows:!0}){let t=e.cityLighting?new l(Xu,Zu):new l(16774102,2.05);return e.enhancedShadows?t.position.set(Yu.x,Yu.y,Yu.z):t.position.set(-1,1,0).normalize(),t.castShadow=e.enhancedShadows,e.enhancedShadows?(t.shadow.mapSize.set(td,td),t.shadow.camera.left=-1900,t.shadow.camera.right=rd,t.shadow.camera.top=rd,t.shadow.camera.bottom=-1900,t.shadow.camera.near=100,t.shadow.camera.far=6e3,t.shadow.normalBias=.12,t.shadow.bias=-8e-5,t.shadow.radius=id/(rd*2/td),t.shadow.camera.updateProjectionMatrix(),t):t}function sd(e={cityLighting:!0,enhancedShadows:!0}){return e.cityLighting?new v(Fc.sky,Qu,$u):new v(Fc.sky,7236170,1)}var cd=256,ld=Q+.12,ud=ed.x,dd=ed.z,fd=2.75,pd=6.25,md=8,hd=1.4,gd=1,_d=0;function vd(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var yd=class{group=new i;buildings;contacts;trees;units;matrix=new Ae;scale=new K;enhancedShadows;buildingSignature=``;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}){this.enhancedShadows=n.enhancedShadows;let r=(e,t)=>new ve({color:1512978,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,...t===void 0?{}:{side:t}});this.buildings=new R(new Je,r(n.enhancedShadows?.1:.24)),this.buildings.name=`building-shadows`,this.contacts=new R(new Je,r(.22,2)),this.contacts.name=`building-contact-ao`,this.contacts.visible=n.ambientOcclusion,this.trees=new R(new Je,r(n.enhancedShadows?.13:.24)),this.trees.name=`tree-shadows`,this.units=new x(new Ve(1,12),r(n.enhancedShadows?.18:.24),cd),this.units.visible=!n.enhancedShadows,this.units.instanceMatrix.setUsage(k),this.units.count=0;for(let e of[this.buildings,this.contacts,this.trees,this.units])e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1;this.group.add(this.buildings,this.contacts,this.trees,this.units),this.rebuildTreeShadows(e),this.sync(e,t)}sync(e,t,n=[]){let r=e.buildings.map(e=>Js(e)).join(`,`);r!==this.buildingSignature&&(this.buildingSignature=r,this.rebuildBuildingShadows(e),this.rebuildBuildingContacts(e));let i=0,a=!1,o=this.units.instanceMatrix.count,s=(e,t,n)=>{this.matrix.makeRotationX(-Math.PI/2),this.scale.set(n*.9,n*.62,1),this.matrix.scale(this.scale),this.matrix.setPosition(e+n*.22,ld+.03,t+n*.16),a=vd(this.units,i++,this.matrix)||a};for(let e of t.units){if(i>=o)break;s(e.x,e.z,$(t.typeOf(e),e.deployed))}for(let e of n){if(i>=o)break;s(e.x,e.z,e.radius)}this.units.count=i,a&&(this.units.instanceMatrix.needsUpdate=!0)}rebuildBuildingShadows(e){let t=[],n=e.surfaces.flatMap(bd);for(let r of e.buildings){let e=Xs(r);if(e<=0)continue;let i=e*(this.enhancedShadows?1:.48),a=this.enhancedShadows?ud:gd,o=this.enhancedShadows?dd:_d,s=r.clip??Za(r),c=xd([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]);this.appendClippedShadow(t,n,c)}let r=this.buildings.geometry,i=new Je;i.setAttribute(`position`,new Re(new Float32Array(t),3)),i.computeVertexNormals(),this.buildings.geometry=i,r.dispose()}rebuildBuildingContacts(e){let t=[],n=e.surfaces.flatMap(bd);for(let r of e.buildings){if(r.state===`rubble`)continue;let e=r.clip??Za(r);if(e.length<3)continue;let i=e.map(e=>{let t=e.x-r.x,n=e.z-r.z,i=Math.hypot(t,n)||1;return{x:e.x+t/i*hd,z:e.z+n/i*hd}});for(let r=0;r<e.length;r++){let a=(r+1)%e.length,o=e[r],s=e[a],c=i[r],l=i[a];!o||!s||!c||!l||(this.appendClippedShadow(t,n,[o,l,c]),this.appendClippedShadow(t,n,[o,s,l]))}}let r=this.contacts.geometry,i=new Je;i.setAttribute(`position`,new Re(new Float32Array(t),3)),i.computeVertexNormals(),this.contacts.geometry=i,r.dispose()}rebuildTreeShadows(e){let t=[],n=e.surfaces.flatMap(bd);for(let r of e.trees){let e=fd*r.scale,i=pd*r.scale*(this.enhancedShadows?1:.48),a=this.enhancedShadows?ud:gd,o=this.enhancedShadows?dd:_d,s=Array.from({length:md},(t,n)=>{let i=n/md*Math.PI*2;return{x:r.x+Math.cos(i)*e,z:r.z+Math.sin(i)*e}});this.appendClippedShadow(t,n,xd([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]))}let r=this.trees.geometry,i=new Je;i.setAttribute(`position`,new Re(new Float32Array(t),3)),i.computeVertexNormals(),this.trees.geometry=i,r.dispose()}appendClippedShadow(e,t,n){for(let r of t){let t=Na(r,n);for(let n=1;n<t.length-1;n++)this.appendTriangle(e,t[0],t[n+1],t[n])}}appendTriangle(e,t,n,r){if(!t||!n||!r)return;let i=(n.x-t.x)*(r.z-t.z)-(n.z-t.z)*(r.x-t.x);if(!(Math.abs(i)<=1e-9))for(let i of[t,n,r])e.push(i.x,ld,i.z)}dispose(){for(let e of[this.buildings,this.contacts,this.trees,this.units])e.geometry.dispose(),e.material.dispose()}};function bd(e){if(e.length<3)return[];let t=e.map(e=>new H(e.x,e.z));return ce.triangulateShape(t,[]).flatMap(t=>{let[n,r,i]=t,a=n===void 0?void 0:e[n],o=r===void 0?void 0:e[r],s=i===void 0?void 0:e[i];return a&&o&&s?[[a,o,s]]:[]})}function xd(e){let t=[...e].sort((e,t)=>e.x-t.x||e.z-t.z),n=(e,t,n)=>(t.x-e.x)*(n.z-e.z)-(t.z-e.z)*(n.x-e.x),r=e=>{let t=[];for(let r of e){for(;t.length>=2&&n(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t},i=r(t),a=r([...t].reverse());return i.pop(),a.pop(),[...i,...a]}var Sd=760,Cd={machines:7398333,ancients:14730627},wd=class{group=new i;surface=new i;inner;outer;innerMaterial;outerMaterial;startedAt=-1/0;constructor(){this.innerMaterial=Td(),this.outerMaterial=Td(),this.inner=Ed(3.75,5.45,this.innerMaterial),this.outer=Ed(7.8,8.8,this.outerMaterial),this.surface.rotation.x=-Math.PI/2,this.surface.add(this.inner,this.outer),this.group.add(this.surface),this.group.visible=!1}show(e,t,n,r){let i=Cd[n];this.innerMaterial.color.setHex(i),this.outerMaterial.color.setHex(i),this.group.position.set(e,Q+.35,t),this.startedAt=r,this.group.visible=!0,this.sync(r)}sync(e){if(!this.group.visible)return;let t=(e-this.startedAt)/Sd;if(t>=1){this.group.visible=!1;return}let n=Math.max(0,t),r=1+Math.sin(n*Math.PI)*.06;this.inner.scale.setScalar(r),this.outer.scale.setScalar(.72+n*.9),this.innerMaterial.opacity=.82*(1-n*.38),this.outerMaterial.opacity=.76*(1-n)}dispose(){this.inner.geometry.dispose(),this.outer.geometry.dispose(),this.innerMaterial.dispose(),this.outerMaterial.dispose(),this.group.clear()}};function Td(){let e=new ve({color:16777215,flatShading:!0,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1,side:2});return e.userData.outlineParameters={visible:!1},e}function Ed(e,t,r){let i=new R(new n(e,t,48),r);return i.renderOrder=16,i}var Dd=2400,Od=7e3,kd=1600,Ad=1e3;function jd(e,t,n,r){let i=(e,i)=>({x:t+e*r,y:n+i*r}),a=[i(-115,5),i(-75,-25),i(-20,-18),i(5,-48),i(70,-38),i(105,-8),i(92,18),i(-55,24)],o=[a[7],a[6],i(92,43),i(-55,49)],s=[a[6],a[5],i(105,18),i(92,43)],c=(t,n)=>{let r=t[0];if(r){e.beginPath(),e.moveTo(r.x,r.y);for(let n of t.slice(1))e.lineTo(n.x,n.y);e.closePath(),e.fillStyle=n,e.fill()}};c(o,`#dbd8c6`),c(s,`#c9c8bb`),c(a,`#f6f0dd`)}function Md(){let e=document.createElement(`canvas`);e.width=kd,e.height=Ad;let t=e.getContext(`2d`);if(t){let n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,`#${new z(Fc.sky).getHexString()}`),n.addColorStop(1,`#${new z(Fc.skyHorizon).getHexString()}`),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),jd(t,255,160,.75),jd(t,1240,125,1.1)}let n=new Te(e);return n.colorSpace=h,n.needsUpdate=!0,n}var Nd=class{scene=new w;city;units;unitOcclusion;selectionSilhouette;combat;moveCommandIndicator;shadows;skyGradient;earth;sun;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1},r){this.skyGradient=Md(),this.scene.background=this.skyGradient,this.scene.fog=new C(Fc.skyHorizon,Dd,Od),this.earth=new mu,this.scene.add(this.earth.group),this.shadows=new yd(e,t,n),this.scene.add(this.shadows.group),this.city=new Hc(e),this.scene.add(this.city.group),this.units=new Pu(t,void 0,r),this.scene.add(this.units.group),this.unitOcclusion=new Ru(this.units),this.selectionSilhouette=new Wu(this.units),this.combat=new iu,this.scene.add(this.combat.group),this.moveCommandIndicator=new wd,this.scene.add(this.moveCommandIndicator.group),this.sun=od(n),this.scene.add(this.sun,this.sun.target),this.scene.add(sd(n))}updateShadowCoverage(e,t){ad(this.sun,e,t)}dispose(){this.city.dispose(),this.unitOcclusion.dispose(),this.selectionSilhouette.dispose(),this.units.dispose(),this.combat.dispose(),this.moveCommandIndicator.dispose(),this.shadows.dispose(),this.earth.dispose(),this.skyGradient.dispose(),this.scene.clear()}},Pd=class{context;constructor(e){this.context=e}apply(e){let t=this.context.destruction.createChangeSet(),n=!1;for(let{issuer:r,command:i}of e)if((i.kind===`damage`||i.kind===`setState`||i.kind===`setAllStates`||i.kind===`raze`||i.kind===`setPlayerFaction`||i.kind===`setController`||i.kind===`debugResources`)==(r===`debug`)){if(r===`debug`){this.applyDeveloperCommand(i,t);continue}switch(i.kind){case`move`:this.applyMove(r,i.unitIds,i.x,i.z);break;case`stop`:this.applyStop(r,i.unitIds);break;case`destroy`:this.applyDestroy(r,i.unitIds);break;case`attack`:`buildingId`in i?this.applyAttackBuilding(r,i.unitIds,i.buildingId,i.x,i.z):this.applyAttack(r,i.unitIds,i.targetId,i.x,i.z);break;case`attackMove`:this.applyAttackMove(r,i.unitIds,i.x,i.z);break;case`harvest`:this.applyHarvest(r,i);break;case`deploy`:for(let e of this.controllableIds(r,i.unitIds))this.context.production.beginDeployment(e,i.deployed);break;case`build`:n=this.context.construction.request({issuer:r,builderId:i.builderId,structureTypeId:i.structureTypeId,x:i.x,z:i.z})||n;break;case`summon`:n=this.context.construction.request({issuer:r,builderId:i.builderId,structureTypeId:i.typeId,x:i.x,z:i.z})||n;break;case`cancelSummon`:this.controllableIds(r,[i.builderId]).length>0&&(n=this.context.construction.cancelForBuilder(i.builderId,!0)||n);break;case`produce`:this.context.production.request(r,i.producer,i.typeId);break;case`unlockTier2`:this.context.production.unlockTier2(r)}}this.context.destruction.reconcile(t,n)}applyMove(e,t,n,r){let i=this.controllableIds(e,t).filter(e=>!this.context.construction.isRitualLocked(e));for(let e of i)this.clearHarvestIntent(e);this.context.army.order(i,n,r,this.context.nav,!1,`command`)}applyDestroy(e,t){for(let n of this.controllableIds(e,t)){let e=this.context.army.get(n);if(!e)continue;let t=this.context.army.typeOf(e);this.context.construction.cancelForBuilder(n,!1),this.context.army.remove(n),t.role===`harbinger`?(this.context.recordElimination(t.faction),this.context.emit({kind:`harbingerDown`,faction:t.faction,subject:t.faction})):this.context.emit({kind:`unitDown`,faction:t.faction})}}applyAttackMove(e,t,n,r){let i=this.controllableIds(e,t).filter(e=>!this.context.construction.isRitualLocked(e));for(let e of i){this.clearHarvestIntent(e);let t=this.context.army.get(e);t&&(t.targetId=null)}this.context.army.order(i,n,r,this.context.nav,!0,`command`)}applyStop(e,t){let n=this.controllableIds(e,t).filter(e=>!this.context.construction.isRitualLocked(e));for(let e of n)this.clearHarvestIntent(e);this.context.army.stop(n)}applyAttack(e,t,n,r,i){let a=this.context.army.get(n);if(!a||this.context.army.typeOf(a).faction===e)return;let o=this.controllableIds(e,t).filter(e=>!this.context.construction.isRitualLocked(e));for(let e of o){let t=this.context.army.get(e);t&&(t.targetId=n)}this.context.army.order(o,r,i,this.context.nav,!1,`command`)}applyAttackBuilding(e,t,n,r,i){let a=this.context.city.get(n);if(!a||a.state===`rubble`)return;let o=this.controllableIds(e,t).filter(e=>{let t=this.context.army.get(e),n=t&&this.context.army.typeOf(t);return!this.context.construction.isRitualLocked(e)&&n!==void 0&&(n.weaponIds??[]).some(e=>Wc(e).targetClasses.includes(`structure`))});if(o.length!==0){this.context.army.order(o,r,i,this.context.nav,!1,`command`);for(let e of o){let t=this.context.army.get(e);t&&(t.targetBuildingId=n,t.targetId=null)}}}clearHarvestIntent(e){let t=this.context.army.get(e);t&&(wl(t,null),t.harvestOrdered=!1)}applyHarvest(e,t){let n=`buildingId`in t?this.context.city.get(t.buildingId):void 0,r=`crowdId`in t?this.context.crowds.get(t.crowdId):void 0;if(n&&!Yc(n,this.context.population)||r&&r.humans<=0||!n&&!r)return;let i=n?{kind:`building`,id:n.id}:{kind:`crowd`,id:r.id};for(let a of t.unitIds){let t=this.context.army.get(a),o=t&&this.context.army.typeOf(t);if(!t||o?.faction!==e||o.role!==`harvester`||(wl(t,i),t.harvestOrdered=!0,!Jc(o.faction,t.cargo)))continue;let s=n?this.context.harvesting.harvestStand(t,n):{x:r.x,z:r.z};s&&this.context.army.order([t.id],s.x,s.z,this.context.nav)}}applyDeveloperCommand(e,t){switch(e.kind){case`setPlayerFaction`:e.faction!==this.context.playerFaction()&&(this.context.setPlayerFaction(e.faction),this.context.emit({kind:`playerFactionChanged`,playerFaction:e.faction}));break;case`setController`:this.context.controllers[e.faction]=e.controller;break;case`damage`:this.context.destruction.advance(t,e.buildingId);break;case`setState`:this.context.destruction.setState(t,e.buildingId,e.state);break;case`setAllStates`:this.context.destruction.setAllStates(t,e.state);break;case`debugResources`:this.context.observedResources().credit(e.humans),this.context.observedResources().addCharge(e.charge);break;case`raze`:this.context.destruction.raze(t,e.x,e.z,e.radius)}}controllableIds(e,t){return e===`debug`?[]:t.filter(t=>{let n=this.context.army.get(t);return n!==void 0&&this.context.army.typeOf(n).faction===e})}},Fd=6,Id=400,Ld=class{context;sites=[];constructor(e){this.context=e}request(e){let t=this.context.army.get(e.builderId),n=t&&this.context.army.typeOf(t),r=yl.find(t=>t.id===e.structureTypeId),i=t=>(this.context.emit({kind:`unitCreationRefused`,reason:t,...r?{subject:r.name}:{},faction:e.issuer}),!1);if(!t||!n||!r||n.faction!==e.issuer||r.faction!==e.issuer||n.id!==`ancient-harbinger`||!this.allowedOutput(n,r))return i(`outputUnavailable`);if(r.tier>this.context.factionState(e.issuer).techTier)return i(`requiresTier2`);if(this.sites.some(e=>e.builderId===t.id))return i(`summonAlreadyActive`);let a=this.placement(e.builderId,e.structureTypeId,e.x,e.z);if(!a)return i(`invalidSummonSite`);if(!this.context.factionState(e.issuer).resources.spend(r.cost))return i(`insufficientHumans`);let o={...a,builderId:e.builderId,remainingSteps:this.stepsFor(r),summoning:!1};return this.sites.push(o),this.context.army.order([e.builderId],o.approachX,o.approachZ,this.context.nav,!1,`command`),this.context.invalidateStructureObstacles(),this.context.emit({kind:`constructionStarted`,subject:r.name,faction:e.issuer}),!0}placement(e,t,n,r){this.context.refreshStructureObstacles();let i=this.context.army.get(e),a=i&&this.context.army.typeOf(i),o=yl.find(e=>e.id===t);if(!i||!a||!o||a.faction!==o.faction||a.id!==`ancient-harbinger`||!this.allowedOutput(a,o)||o.tier>this.context.factionState(a.faction).techTier||this.sites.some(t=>t.builderId===e))return;let s=this.footprint(o,n,r);if(!this.clearGround(o,n,r)||!this.clearOfUnits(o,n,r,i.id))return;let c=this.approach(i,s);return c?{structureTypeId:t,x:n,z:r,approachX:c.x,approachZ:c.z}:void 0}hasSite(e){return this.sites.some(t=>t.builderId===e)}isRitualLocked(e){return this.sites.some(t=>t.builderId===e&&t.summoning)}cancelForBuilder(e,t){let n=this.sites.findIndex(t=>t.builderId===e);if(n<0)return!1;let[r]=this.sites.splice(n,1),i=r&&yl.find(e=>e.id===r.structureTypeId),a=this.context.army.get(e),o=a&&this.context.army.typeOf(a).faction;return t&&r&&i&&o&&this.context.factionState(o).resources.credit(i.cost),a&&this.context.army.stop([a.id]),this.context.invalidateStructureObstacles(),this.context.refreshStructureObstacles(),this.context.emit(i?{kind:`constructionCancelled`,subject:i.name,refund:t?i.cost:0,...o?{faction:o}:{}}:{kind:`constructionCancelled`,...o?{faction:o}:{}}),!0}step(){for(let e=this.sites.length-1;e>=0;e--){let t=this.sites[e];if(!t)continue;let n=this.context.army.get(t.builderId),r=yl.find(e=>e.id===t.structureTypeId);if(!n||!r){this.cancelForBuilder(t.builderId,!1);continue}let i=this.footprint(r,t.x,t.z);if(!t.summoning){let e=$(this.context.army.typeOf(n),n.deployed)+Fd+3/2,r=Math.max(Math.abs(n.x-t.x)-i.halfW,0),a=Math.max(Math.abs(n.z-t.z)-i.halfD,0);if(Math.hypot(r,a)>e)continue;t.summoning=!0,n.targetId=null,n.targetBuildingId=null,this.context.army.stop([n.id])}t.remainingSteps>0&&--t.remainingSteps>0||(this.context.army.spawn(r.id,t.x,t.z),this.sites.splice(e,1),this.context.invalidateStructureObstacles(),this.context.emit({kind:`constructionComplete`,subject:r.name,faction:this.context.army.typeOf(n).faction}))}}save(){return this.sites.map(e=>({...e}))}restore(e){this.sites.splice(0,this.sites.length,...e.map(e=>({...e}))),this.context.invalidateStructureObstacles()}obstacleFor(e){let t=yl.find(t=>t.id===e.structureTypeId),n=t&&this.footprint(t,e.x,e.z);return{x0:e.x-(n?.halfW??0),z0:e.z-(n?.halfD??0),x1:e.x+(n?.halfW??0),z1:e.z+(n?.halfD??0)}}allowedOutput(e,t){return e.summonTypes?.includes(t.id)===!0}stepsFor(e){return e.constructionSteps??e.buildSteps}footprint(e,t,n){let r=e.anchoredFootprint;return r?{x:t,z:n,halfW:r.width/2+Fd,halfD:r.depth/2+Fd}:{x:t,z:n,halfW:$(e)+Fd,halfD:$(e)+Fd}}clearGround(e,t,n){if(!e.anchoredFootprint)return this.context.nav.passable(t,n,e.nav,!0,Sl(e));let r=e.anchoredFootprint.width/2,i=e.anchoredFootprint.depth/2,a=1.5;return[[0,0],[-r+a,-i+a],[-r+a,i-a],[r-a,-i+a],[r-a,i-a]].every(([e,r])=>this.context.nav.passable(t+e,n+r,`small`,!0,1))}clearOfUnits(e,t,n,r){let i=e.anchoredFootprint?Math.hypot(e.anchoredFootprint.width/2,e.anchoredFootprint.depth/2)+Fd:$(e)+Fd;return this.context.army.units.every(e=>e.id===r||qc(t,n,e.x,e.z)>=(i+$(this.context.army.typeOf(e),e.deployed))**2)}approach(e,t){let n=this.context.army.typeOf(e),r=$(n),i=[{x:t.x-t.halfW-r-Fd,z:t.z},{x:t.x+t.halfW+r+Fd,z:t.z},{x:t.x,z:t.z-t.halfD-r-Fd},{x:t.x,z:t.z+t.halfD+r+Fd}].map((e,t)=>({...e,index:t})).sort((t,n)=>qc(e.x,e.z,t.x,t.z)-qc(e.x,e.z,n.x,n.z)||t.index-n.index),a={x0:t.x-t.halfW,z0:t.z-t.halfD,x1:t.x+t.halfW,z1:t.z+t.halfD},o=Sl(n),s=Cl(n,`command`);return i.find(t=>this.context.nav.approachReachableWithProposedObstacle(a,e.x,e.z,t.x,t.z,n.nav,s,o,Id))}},Rd=.2,zd=3,Bd=180,Vd=9,Hd=1800,Ud=class{all=[];byId=new Map;nextId=0;get(e){return this.byId.get(e)}displace(e,t,n,r){if(t<4)return;let i=n.range(0,Math.PI*2),a=Math.cos(i),o=Math.sin(i),s=X({x:a,z:o},-(e.rotation??0)),c=Math.min(Math.abs(s.x)>1e-6?e.width/2/Math.abs(s.x):1/0,Math.abs(s.z)>1e-6?e.depth/2/Math.abs(s.z):1/0),l=r.nearestPassable(e.x+a*(c+7),e.z+o*(c+7),`small`,!1,0,zd);if(!l)return;if(this.all.length>=48){let e=this.nearest(l.x,l.z);return e&&(e.humans+=t,e.lifeSteps=Hd),e}let u=r.nearestPassable(l.x+a*55,l.z+o*55,`small`,!1,0,zd)??l,d={id:this.nextId++,x:l.x,z:l.z,prevX:l.x,prevZ:l.z,humans:t,fleeX:u.x,fleeZ:u.z,panicSteps:Bd,trailDirX:0,trailDirZ:0,trailStrength:0,lifeSteps:Hd};return this.all.push(d),this.byId.set(d.id,d),d}step(e){for(let t=this.all.length-1;t>=0;t--){let n=this.all[t];if(!n)continue;if(n.prevX=n.x,n.prevZ=n.z,n.humans<=0){this.removeAt(t);continue}if(n.lifeSteps--,n.lifeSteps<=0){this.removeAt(t);continue}if(n.panicSteps<=0){Kd(n);continue}n.panicSteps--;let r=n.fleeX-n.x,i=n.fleeZ-n.z,a=Math.hypot(r,i),o=6/30;if(a<=o){n.x=n.fleeX,n.z=n.fleeZ,Gd(n,r,i),n.panicSteps=0;continue}let s=r/a*o,c=i/a*o,l=n.x,u=n.z;!Wd(n,s,c,e)&&!Wd(n,s,0,e)&&!Wd(n,0,c,e)?n.panicSteps=0:Gd(n,n.x-l,n.z-u)}}evictBlocked(e){for(let t=this.all.length-1;t>=0;t--){let n=this.all[t];if(!n||e.passable(n.x,n.z,`small`,!1,zd))continue;let r=e.nearestPassable(n.x,n.z,`small`,!1,0,zd);if(!r){this.removeAt(t);continue}n.x=r.x,n.z=r.z,n.prevX=r.x,n.prevZ=r.z,n.fleeX=r.x,n.fleeZ=r.z,n.panicSteps=0,n.trailStrength=0}}nearest(e,t,n=1/0){let r,i=n;for(let n of this.all){if(n.humans<=0)continue;let a=(n.x-e)**2+(n.z-t)**2;a<i&&(i=a,r=n)}return r}drain(e,t){let n=this.byId.get(e);if(!n)return 0;let r=Math.min(n.humans,t);if(n.humans-=r,n.humans<=0){let e=this.all.indexOf(n);e>=0&&this.removeAt(e)}return r}removeAt(e){let t=this.all[e];t&&(this.all.splice(e,1),this.byId.delete(t.id))}totalHumans(){let e=0;for(let t of this.all)e+=t.humans;return e}save(){return{crowds:this.all.map(e=>({...e})),nextId:this.nextId}}restore(e){this.all.length=0,this.byId.clear();for(let t of e.crowds){let e={...t};this.all.push(e),this.byId.set(e.id,e)}this.nextId=e.nextId}};function Wd(e,t,n,r){if(t===0&&n===0)return!1;let i=e.x+t,a=e.z+n;return r.passable(i,a,`small`,!1,zd)?(e.x=i,e.z=a,!0):!1}function Gd(e,t,n){let r=Math.hypot(t,n);r<=1e-6||(e.trailDirX=t/r,e.trailDirZ=n/r,e.trailStrength=1)}function Kd(e){e.trailStrength=Math.max(0,e.trailStrength-1/Vd)}var qd=12,Jd=45/30,Yd=class{context;changed=new Set;combatDamaged=new Map;constructor(e){this.context=e}createChangeSet(){return new Map}note(e,t){if(e.has(t))return;let n=this.context.city.get(t);n&&e.set(t,n.state)}advance(e,t){this.note(e,t),this.context.city.advanceState(t)}setState(e,t,n){this.note(e,t),this.context.city.setState(t,n)}setAllStates(e,t){for(let t of this.context.city.buildings)this.note(e,t.id);this.context.city.setAllStates(t)}raze(e,t,n,r){let i=r*r;for(let r of this.context.city.buildings)r.state!==`rubble`&&((r.x-t)**2+(r.z-n)**2>i||(this.note(e,r.id),this.context.city.setState(r.id,`rubble`)))}standingBuilding(e,t,n){let r=this.context.city.get(e);if(!(!r||r.state===`rubble`))return{x:r.x,z:r.z,height:r.height,distance:Math.sqrt(Xc(t,n,r))}}damageFromCombat(e,t){let n=this.context.city.get(e);!n||n.state===`rubble`||(this.combatDamaged.has(e)||this.combatDamaged.set(e,n.state),this.context.city.damage(e,t))}reconcileCombatDamage(){if(this.combatDamaged.size===0)return;let e=new Map(this.combatDamaged);this.combatDamaged.clear(),this.reconcile(e,!1)}crushBuildings(){let e=this.createChangeSet();for(let t of this.context.army.units){let n=this.context.army.typeOf(t);if(n.stationary)continue;let r=t.restrictedNav?0:tl[n.nav];if(r===0)continue;let i=$(n,t.deployed),a=i*i,o=this.context.city.buildingsOverlapping({x0:t.x-i,z0:t.z-i,x1:t.x+i,z1:t.z+i});for(let n of o)n.state!==`rubble`&&(ro(n.district)>r||Xc(t.x,t.z,n)>a||(this.note(e,n.id),this.context.city.damage(n.id,Jd)))}this.reconcile(e,!1)}reconcile(e,t){let n=[];for(let[t,r]of e)this.context.city.get(t)?.state!==r&&n.push(t);if(n.length===0){t&&(this.context.army.evictBlocked(this.context.nav),this.context.army.revalidate(this.context.nav));return}for(let e of n)this.changed.add(e);if(this.collapsePopulation(n),n.length>=qd)this.context.nav.rebuildAll();else for(let e of n){let t=this.context.city.get(e);t&&this.context.nav.rebuildAround(t)}this.displacePopulation(e),this.context.army.evictBlocked(this.context.nav),this.context.crowds.evictBlocked(this.context.nav),this.context.army.revalidate(this.context.nav)}markChanged(e){this.changed.add(e)}drainChangedBuildings(){if(this.changed.size===0)return[];let e=[...this.changed].sort((e,t)=>e-t);return this.changed.clear(),e}displacePopulation(e){for(let[t,n]of e){if(n!==`intact`)continue;let e=this.context.city.get(t);if(!e||e.state!==`damaged`)continue;let r=this.context.population[t]??0;if(r<=0)continue;let i=r*Rd;this.context.population[t]=0,this.context.crowds.displace(e,i,this.context.rng(),this.context.nav)}}collapsePopulation(e){let t=0;for(let n of e){let e=this.context.city.get(n);if(!e||e.state!==`rubble`)continue;let r=this.context.population[n]??0;this.context.population[n]=0,this.witnessedByAncients(e.x,e.z)&&(t+=r+10)}if(t<=0)return;let n=this.context.factionState(`ancients`);for(n.carnageRemainder+=t;n.carnageRemainder>=45;)n.resources.addCharge(1),n.carnageRemainder-=45}witnessedByAncients(e,t){let n=120**2,r=!1;return this.context.army.index().forEachWithin(e,t,120,i=>{r||this.context.army.typeOf(i).faction===`ancients`&&qc(i.x,i.z,e,t)<=n&&(r=!0)}),r}},Xd=2,Zd=8,Qd=400,$d=class{world;constructor(e){this.world=e}step(){for(let e of this.world.army.units){let t=this.world.army.typeOf(e);t.role===`harvester`&&this.stepHarvester(e,t)}}stepHarvester(e,t){let n=t.faction===`machines`,r=n&&e.cargo>=1e-6,i=this.resolveHarvestJob(e),a=i?void 0:this.harvestTargetPosition(e);if(!i&&!r&&wl(e,null),!i&&!r&&!e.hasGoal){let n=$(t,e.deployed)*3,r=this.world.crowds.nearest(e.x,e.z,n**2);r&&(wl(e,{kind:`crowd`,id:r.id}),i=this.resolveHarvestJob(e))}if(e.harvestOrdered&&!Tl(e)&&!r){let t=a?.x??e.x,n=a?.z??e.z;wl(e,this.nextHarvestTargetAt(e,t,n)),i=this.resolveHarvestJob(e)}if(!i){r&&(this.orderToNode(e,t),this.depositIfAtNode(e,t.faction));return}let o=i.distanceSquared<=37**2,s=e.harvestingCrowdId!==null&&e.hasGoal&&qc(e.goalX,e.goalZ,i.x,i.z)>37**2;if(!o&&(!e.hasGoal||s)&&(!n||e.cargo<60)){let t=i.stand();t?this.world.army.order([e.id],t.x,t.z,this.world.nav):wl(e,null)}let c=!1;if(o){let r=Math.min(i.available,Kc.harvestPerStep,n?60-e.cargo:i.available);r>0&&(i.take(r),n?(e.cargo+=r,60-e.cargo<1e-6&&(e.cargo=60)):this.world.factions[t.faction].resources.credit(r),c=n&&this.resolveHarvestJob(e)===void 0,c&&wl(e,this.nextHarvestTargetAt(e,i.x,i.z)))}if(n&&((e.cargo>=60||c)&&this.orderToNode(e,t,!0),this.depositIfAtNode(e,t.faction),e.cargo===0&&!e.hasGoal)){let t=this.resolveHarvestJob(e),n=t!==void 0&&t.distanceSquared<=37**2,r=t&&t.available>0&&!n?t.stand():void 0;r&&this.world.army.order([e.id],r.x,r.z,this.world.nav)}}resolveHarvestJob(e){let t=e.harvestingBuildingId;if(t!==null){let n=this.world.city.get(t);if(!Yc(n,this.world.population))return;let r=this.world.population[t]??0;return{x:n.x,z:n.z,stand:()=>this.harvestStand(e,n),distanceSquared:Xc(e.x,e.z,n),available:r,take:e=>{this.world.population[t]=(this.world.population[t]??0)-e}}}let n=e.harvestingCrowdId;if(n!==null){let t=this.world.crowds.get(n);return!t||t.humans<=0?void 0:{x:t.x,z:t.z,stand:()=>({x:t.x,z:t.z}),distanceSquared:qc(e.x,e.z,t.x,t.z),available:t.humans,take:e=>{this.world.crowds.drain(n,e)}}}}harvestStand(e,t){let n=this.world.army.typeOf(e),r=$(n,e.deployed)+Xd,i=Sl(n,e.deployed),a=[],o=new Set,s=(s,c)=>{let l=Zc(s,c,t,r),u=this.world.nav.nearestPassable(l.x,l.z,n.nav,Cl(n,`job`),0,i);if(!u||Xc(u.x,u.z,t)>37**2)return;let d=`${u.x},${u.z}`;o.has(d)||(o.add(d),a.push({x:u.x,z:u.z,distanceSquared:qc(e.x,e.z,u.x,u.z)}))};s(e.x,e.z);let c=Math.max(t.width,t.depth)+r*2;for(let e=0;e<Zd;e++){let n=e/Zd*Math.PI*2;s(t.x+Math.cos(n)*c,t.z+Math.sin(n)*c)}a.sort((e,t)=>e.distanceSquared===t.distanceSquared?e.x===t.x?e.z-t.z:e.x-t.x:e.distanceSquared-t.distanceSquared);for(let e of a)if(this.world.nav.componentAtLeast(e.x,e.z,n.nav,Qd,Cl(n,`job`),i))return{x:e.x,z:e.z}}harvestTargetPosition(e){if(e.harvestingBuildingId!==null){let t=this.world.city.get(e.harvestingBuildingId);return t?{x:t.x,z:t.z}:void 0}if(e.harvestingCrowdId!==null){let t=this.world.crowds.get(e.harvestingCrowdId);return t?{x:t.x,z:t.z}:void 0}}nextHarvestTargetAt(e,t,n){let r=300**2,i=this.world.crowds.nearest(t,n,r);if(i)return{kind:`crowd`,id:i.id};let a=this.nearestPopulatedBuilding(e,t,n,r);return a?{kind:`building`,id:a.id}:null}orderToNode(e,t,n=!1){let r=this.nearestProcessingNode(e.x,e.z,t.faction);if(!r||e.hasGoal&&qc(e.goalX,e.goalZ,r.x,r.z)<=59**2||e.hasGoal&&!n||qc(e.x,e.z,r.x,r.z)<=59**2)return;let i=this.world.army.typeOf(r).anchoredFootprint,a=e.x-r.x,o=e.z-r.z,s=Math.max(Math.hypot(a,o),1),c=a/s,l=o/s,u=Math.min(Math.abs(c)>1e-6?i.width/2/Math.abs(c):1/0,Math.abs(l)>1e-6?i.depth/2/Math.abs(l):1/0),d={x:r.x+c*(u+$(t)+2),z:r.z+l*(u+$(t)+2)};this.world.army.order([e.id],d.x,d.z,this.world.nav)}depositIfAtNode(e,t){if(e.cargo<1e-6)return;let n=this.nearestProcessingNode(e.x,e.z,t);if(!n||qc(e.x,e.z,n.x,n.z)>59**2)return;let r=this.world.factions[t].resources,i=r.credit(e.cargo);e.cargo-=i,e.cargo<1e-6&&(e.cargo=0),!(i<=0)&&(r.addCharge(2*i/60),this.world.emit({kind:`deposited`,faction:t}))}nearestPopulatedBuilding(e,t,n,r){let i=Math.sqrt(r),a=[];for(let e of this.world.city.buildingsOverlapping({x0:t-i,z0:n-i,x1:t+i,z1:n+i})){if(!Yc(e,this.world.population))continue;let i=Xc(t,n,e);i<r&&a.push({id:e.id,distanceSquared:i})}a.sort((e,t)=>e.distanceSquared===t.distanceSquared?e.id-t.id:e.distanceSquared-t.distanceSquared);for(let t of a){let n=this.world.city.get(t.id);if(n&&this.harvestStand(e,n))return t}}nearestProcessingNode(e,t,n){let r,i=1/0;for(let a of this.world.army.processors){let o=this.world.army.typeOf(a);if(o.faction!==n||!o.processesHumans||!a.deployed||a.deployTimer>0)continue;let s=qc(e,t,a.x,a.z);s<i&&(i=s,r=a)}return r}},ef={count:0,health:0,nearest:void 0};function tf(e,t,n,r,i){let a=0,o=0,s,c=1/0,l=i*i;return e.index().forEachWithin(n,r,i,i=>{if(e.typeOf(i).faction===t)return;let u=(i.x-n)**2+(i.z-r)**2;u>l||(a++,o+=i.health,(u<c||u===c&&i.id<(s?.id??1/0))&&(s=i,c=u))}),a===0?ef:{count:a,health:o,nearest:s}}function nf(e,t){for(let n of e.units){let r=e.typeOf(n);if(r.faction===t&&r.role===`harbinger`)return n}}function rf(e,t){let n=[];for(let r of e.units){let i=e.typeOf(r);i.faction===t&&i.role!==`harvester`&&i.role!==`structure`&&i.role!==`harbinger`&&(i.stationary||(i.weaponIds??[]).length===0||n.push(r))}return n}function af(e,t){let n=[];for(let r of e.units){let i=e.typeOf(r);i.faction!==t||!i.producesUnits||r.deployTimer>0||i.anchoredFootprint&&!r.deployed||n.push(r)}return n}function of(e,t){let n=nf(e,t);if(n)return{x:n.x,z:n.z};let r=0,i=0,a=0;for(let n of e.units)e.typeOf(n).faction===t&&(r+=n.x,i+=n.z,a++);return a===0?void 0:{x:r/a,z:i/a}}var sf={machines:{harvesters:4,attackAt:6,retreatAt:2,deployBeforeContact:!0,deployAt:120,spreadHarvesters:!1,tier2At:8},ancients:{harvesters:3,attackAt:5,retreatAt:1,deployBeforeContact:!1,deployAt:0,spreadHarvesters:!0,tier2At:6}},cf=8,lf=220,uf=60,df=1.5,ff=[46,74,104,140].flatMap(e=>[[e,0],[-e,0],[0,e],[0,-e],[e*.7,e*.7],[-e*.7,e*.7],[e*.7,-e*.7],[-e*.7,-e*.7]]),pf=class{context;posture=`expand`;nextPlanIn=1;constructor(e){this.context=e}get state(){return{posture:this.posture,nextPlanIn:this.nextPlanIn}}restore(e){this.posture=e.posture,this.nextPlanIn=e.nextPlanIn}step(){this.nextPlanIn--,!(this.nextPlanIn>0)&&(this.nextPlanIn=cf,this.plan())}plan(){let e=sf[this.context.faction];this.workTheEconomy(e);let t=this.raiseInfrastructure();this.spendIncome(e,t),this.fight(e)}workTheEconomy(e){let t=new Set;for(let n of this.context.army.units){let r=this.context.army.typeOf(n);if(r.faction!==this.context.faction||r.role!==`harvester`)continue;let i=n.harvestingBuildingId!==null||n.harvestingCrowdId!==null;if(n.harvestOrdered&&(i||n.hasGoal)){n.harvestingBuildingId!==null&&t.add(n.harvestingBuildingId);continue}let a=this.context.harvestTargetFor(n);a&&(e.spreadHarvesters&&a.kind===`building`&&t.has(a.id)||(a.kind===`building`?(t.add(a.id),this.context.enqueue({kind:`harvest`,unitIds:[n.id],buildingId:a.id})):this.context.enqueue({kind:`harvest`,unitIds:[n.id],crowdId:a.id})))}}raiseInfrastructure(){let e=nf(this.context.army,this.context.faction);if(!e)return!1;for(let e of this.context.army.units){let t=this.context.army.typeOf(e);t.faction===this.context.faction&&(!t.anchoredFootprint&&!t.producesUnits||t.stationary||e.deployed||e.deployTimer>0||e.hasGoal||this.context.enqueue({kind:`deploy`,unitIds:[e.id],deployed:!0}))}if(e.deployed&&e.deployTimer===0){let t=[...this.context.army.typeOf(e).productionTypes??[]].sort((e,t)=>{let n=yl.find(t=>t.id===e)?.producesUnits===!0;return n===(yl.find(e=>e.id===t)?.producesUnits===!0)?0:n?-1:1});for(let n of t){if(this.countOwned(n)>0)continue;let t=yl.find(e=>e.id===n);if(!(!t||!this.canAfford(t)||e.queue.length>0))return this.context.enqueue({kind:`produce`,producer:{kind:`unit`,id:e.id},typeId:n}),!1}}for(let t of this.context.army.typeOf(e).summonTypes??[]){let n=yl.find(e=>e.id===t);if(!(!n||n.role!==`structure`||n.tier!==1||this.countOwned(t)>0||!this.canAfford(n)))return this.summon(e,t)}return!1}summon(e,t){for(let[n,r]of ff){let i=this.context.constructionPlacement(e.id,t,e.x+n,e.z+r);if(i)return this.context.enqueue({kind:`summon`,builderId:e.id,typeId:t,x:i.x,z:i.z}),!0}return!1}spendIncome(e,t){let n=this.countRole(`harvester`),r=nf(this.context.army,this.context.faction);if(r&&!t){let t=this.context.army.typeOf(r),i=n<e.harvesters?this.bestSummonType(`harvester`,t):void 0;i&&this.canAfford(i)&&this.summon(r,i.id)}for(let t of af(this.context.army,this.context.faction)){let r=this.context.army.typeOf(t);if(r.role===`harbinger`||t.queue.length>0||t.fabricationPad!==null&&t.fabricationPad.occupantId!==null)continue;let i=n<e.harvesters?this.bestType(`harvester`,r)??this.bestType(`field`,r):this.bestType(`field`,r);!i||!this.canAfford(i)||this.context.enqueue({kind:`produce`,producer:{kind:`unit`,id:t.id},typeId:i.id})}this.context.techTier()===1&&rf(this.context.army,this.context.faction).length>=e.tier2At&&this.context.resources.humans>=Kc.tier2Cost&&this.context.enqueue({kind:`unlockTier2`})}fight(e){let t=rf(this.context.army,this.context.faction),n=of(this.context.army,this.context.faction);if(!n)return;let r=tf(this.context.army,this.context.faction,n.x,n.z,lf),i=this.posture;this.posture=r.count>0?`defend`:this.posture===`attack`?t.length>=e.retreatAt?`attack`:`expand`:t.length>=e.attackAt?`attack`:`expand`;let a=this.posture!==i;if(this.posture===`defend`){let e=r.nearest??n;this.order(t,a,{kind:`attackMove`,unitIds:[],x:e.x,z:e.z});return}if(this.posture===`expand`){this.order(t,a,{kind:`move`,unitIds:[],x:n.x,z:n.z},uf);return}let o=this.attackTarget();if(o){if(e.deployBeforeContact)for(let n of t){if(!this.context.army.typeOf(n).canDeploy||n.deployTimer>0)continue;let t=Math.hypot(n.x-o.x,n.z-o.z);t<=e.deployAt&&!n.deployed?this.context.enqueue({kind:`deploy`,unitIds:[n.id],deployed:!0}):t>e.deployAt*df&&n.deployed&&this.context.enqueue({kind:`deploy`,unitIds:[n.id],deployed:!1})}this.order(t,a,{kind:`attackMove`,unitIds:[],x:o.x,z:o.z})}}attackTarget(){let e=this.context.faction===`machines`?`ancients`:`machines`,t=nf(this.context.army,e);if(t)return{x:t.x,z:t.z};let n;for(let t of this.context.army.units)this.context.army.typeOf(t).faction===e&&(!n||t.id<n.id)&&(n=t);return n?{x:n.x,z:n.z}:void 0}order(e,t,n,r=0){let i=e.filter(e=>(t||!e.hasGoal)&&e.deployTimer===0);if(i.length!==0){if(r===0){this.context.enqueue({...n,unitIds:i.map(e=>e.id)});return}i.forEach((e,t)=>{let i=Math.floor(t/4)+1,a=t%4,o=(a===0||a===3?r:-r)*i*.5,s=(a<2?r:-r)*i*.5;this.context.enqueue({...n,unitIds:[e.id],x:n.x+o,z:n.z+s})})}}countOwned(e){let t=0;for(let n of this.context.army.units)n.typeId===e&&t++;return t}countRole(e){let t=0;for(let n of this.context.army.units){let r=this.context.army.typeOf(n);r.faction===this.context.faction&&r.role===e&&t++}return t}canAfford(e){return this.context.resources.humans>=e.cost}bestType(e,t){let n=this.context.techTier(),r;for(let i of yl)i.faction!==this.context.faction||i.tier>n||i.role===`harbinger`||i.role===`structure`||i.stationary||(e===`harvester`?i.role!==`harvester`:i.role===`harvester`)||t.productionTypes&&!t.productionTypes.includes(i.id)||this.canAfford(i)&&(!r||i.cost>r.cost)&&(r=i);return r}bestSummonType(e,t){let n=this.context.techTier(),r;for(let i of t.summonTypes??[]){let t=yl.find(e=>e.id===i);!t||t.tier>n||t.role===`structure`||t.role===`harbinger`||(e===`harvester`?t.role!==`harvester`:t.role===`harvester`)||this.canAfford(t)&&(!r||t.cost>r.cost||t.cost===r.cost&&t.id<r.id)&&(r=t)}return r}};function mf(e,t){return Math.hypot(t.x-e.x,t.z-e.z)}var hf=class{context;constructor(e){this.context=e}step(){let e=[];for(let t of this.context.army.units){t.attackCooldown>0&&t.attackCooldown--;let n=this.context.army.typeOf(t),r=n.weaponIds;if(!r||r.length===0||t.deployTimer>0||t.targetBuildingId!==null&&this.attackBuilding(t,r))continue;let i=Math.max(...r.map(e=>Wc(e).range)),a=t.targetId===null?void 0:this.context.army.get(t.targetId);if(a&&t.attackMove&&mf(t,a)>i&&(a=void 0),(!a||this.context.army.typeOf(a).faction===n.faction)&&(a=this.preferredTarget(t,n.faction,i),t.targetId=a?.id??null),!a)continue;let o=a.x-t.x,s=a.z-t.z,c=Math.hypot(o,s);(t.path.length===0||c<=i)&&(t.heading=Ll(t.heading,Math.atan2(s,o),Dl));let l=this.weaponForDistance(r,c);if(!l||t.attackCooldown>0)continue;let u=this.context.army.typeOf(a),d=l.damage*(a.deployed?u.deployedDamageTakenMultiplier??1:1);t.attackCooldown=l.cadence,a.lastAttackerId=t.id,this.context.emit({kind:`underAttack`,faction:this.context.army.typeOf(a).faction});for(let e=0;e<l.shots;e++)a.health-=d,this.context.emit({kind:`combatHit`,attackerId:t.id,attackerTypeId:t.typeId,targetId:a.id,targetTypeId:a.typeId,weaponId:l.id,shotIndex:e,shotCount:l.shots,sourceX:t.x,sourceZ:t.z,sourceHeading:t.heading,targetX:a.x,targetZ:a.z,targetHeading:a.heading,damage:d,remainingHealth:a.health});a.health<=0&&e.push(a)}for(let t of e){if(!this.context.army.get(t.id))continue;let e=this.context.army.typeOf(t).faction,n=this.context.army.typeOf(t).role===`harbinger`;this.context.army.remove(t.id),n?this.context.emit({kind:`harbingerDown`,faction:e,subject:e}):this.context.emit({kind:`unitDown`,faction:e})}}attackBuilding(e,t){let n=e.targetBuildingId===null?void 0:this.context.standingBuilding(e.targetBuildingId,e.x,e.z);if(!n)return e.targetBuildingId=null,!1;e.heading=Ll(e.heading,Math.atan2(n.z-e.z,n.x-e.x),Dl);let r=this.weaponForDistance(t.filter(e=>Wc(e).targetClasses.includes(`structure`)),n.distance);if(!r||e.attackCooldown>0)return!0;e.attackCooldown=r.cadence;for(let t=0;t<r.shots;t++)this.context.damageBuilding(e.targetBuildingId,r.damage),this.context.emit({kind:`combatHit`,attackerId:e.id,attackerTypeId:e.typeId,targetId:-1,targetTypeId:`city-building`,weaponId:r.id,shotIndex:t,shotCount:r.shots,sourceX:e.x,sourceZ:e.z,sourceHeading:e.heading,targetX:n.x,targetZ:n.z,targetHeight:n.height,damage:r.damage,remainingHealth:0});return!0}preferredTarget(e,t,n){if(e.lastAttackerId!==null){let r=this.context.army.get(e.lastAttackerId);if(r&&this.context.army.typeOf(r).faction!==t&&mf(e,r)<=n)return r}return this.nearestEnemy(e,t,n)}nearestEnemy(e,t,n){let r,i=n*n;return this.context.army.index().forEachWithin(e.x,e.z,n,n=>{if(this.context.army.typeOf(n).faction===t)return;let a=(n.x-e.x)**2+(n.z-e.z)**2;(a<i||a===i&&n.id<(r?.id??1/0))&&(r=n,i=a)}),r}weaponForDistance(e,t){let n;for(let r of e){let e=Wc(r);t>e.range||t<e.minimumRange||(!n||e.range<n.range)&&(n=e)}return n}};function gf(e,t){let n=Ri.filter(t=>e.has(t));if(n.length===0)return;let r=Ri.filter(t=>!e.has(t));return{tick:t,winner:n.length===1?zi(n[0]):r[0]??null,defeated:n}}function _f(e){return e?e.winner?Ri.indexOf(e.winner)+1:0:-1}var vf=.0031,yf=1;function bf(e){return e.buildings.map(e=>{if(e.state===`rubble`)return 0;let t=(e.clip&&e.clip.length>=3?Z(e.clip):e.width*e.depth)*Ga(e.height,e.district);return Math.max(yf,Math.round(t*vf))})}var xf=6;function Sf(e){return $(e)+xf}function Cf(e,t,n){let r=[[1,0],[0,-1],[-1,0],[0,1],[1,-1],[-1,-1],[-1,1],[1,1]];return[n,n+9,n+18].flatMap(n=>r.map(([r,i])=>{let a=r!==0&&i!==0?n/Math.SQRT2:n;return{x:e+r*a,z:t+i*a}}))}function wf(e,t,n,r,i,a){return qc(e,t,Math.max(r-a.width/2,Math.min(e,r+a.width/2)),Math.max(i-a.depth/2,Math.min(t,i+a.depth/2)))<n**2}var Tf=class{context;constructor(e){this.context=e}request(e,t,n){let r=this.context.army.get(t.id),i=yl.find(e=>e.id===n),a=r&&this.context.army.typeOf(r),o=a?.fabricationPadOutputTypeId!==void 0,s=t=>{this.context.emit({kind:`unitCreationRefused`,reason:t,...i?{subject:i.name}:{},faction:e})};if(!r||!a||a.faction!==e||!a.producesUnits||!i||i.faction!==e||i.role===`harbinger`||!a.productionTypes?.includes(n)){s(`outputUnavailable`);return}if(i.tier>this.context.factionState(e).techTier){s(`requiresTier2`);return}if(r.deployTimer>0){s(`producerTransitioning`);return}if(!r.deployed){s(`producerMobile`);return}if(o&&!this.ensurePad(r)){s(`invalidFabricationSpace`);return}r.queue.length>=5?s(`queueFull`):this.context.freeProduction||this.context.factionState(e).resources.spend(i.cost)?(r.queue.push({typeId:i.id,remainingSteps:i.buildSteps}),this.context.emit({kind:`productionQueued`,subject:i.name,faction:e})):s(`insufficientHumans`)}unlockTier2(e){let t=this.context.factionState(e);t.techTier===1&&(this.context.freeProduction||t.resources.spend(Kc.tier2Cost))?(t.techTier=2,this.context.emit({kind:`tier2`,faction:e})):this.context.emit({kind:`tier2Refused`,faction:e})}beginDeployment(e,t){let n=this.context.army.get(e);if(!n)return!1;let r=this.context.army.typeOf(n),i=t??!n.deployed;return n.deployTimer>0||i===n.deployed?!1:i&&r.fabricationPadOutputTypeId&&!this.ensurePad(n)?(this.context.emit({kind:`unitCreationRefused`,reason:`invalidFabricationSpace`,subject:r.name,faction:r.faction}),!1):(!i&&n.fabricationPad&&this.releasePad(n),this.context.army.beginDeploy(e,i))}syncPads(){for(let e of this.context.army.units)this.context.army.typeOf(e).fabricationPadOutputTypeId&&((e.deployTimer>0?e.deployTarget:e.deployed)?this.ensurePad(e):e.fabricationPad&&this.releasePad(e))}step(){this.syncPads();for(let e of this.context.army.units){let t=this.context.army.typeOf(e);if(!t.producesUnits||!e.deployed||e.deployTimer>0)continue;if(t.fabricationPadOutputTypeId){let n=e.fabricationPad;if(!n)continue;if(this.padOccupied(n)){this.orderPadClearance(e,n),(n.occupantId===null?void 0:this.context.army.get(n.occupantId))?.hasGoal||this.context.emit({kind:`productionWaitingForClearance`,subject:t.name,faction:t.faction});continue}}let n=e.queue[0];if(!n)continue;if(t.fabricationPadOutputTypeId){let r=e.fabricationPad;if(!r||n.remainingSteps>0&&--n.remainingSteps>0)continue;let i=yl.find(e=>e.id===n.typeId);if(!i){e.queue.shift();continue}r.occupantId=this.context.army.spawn(i.id,r.x,r.z,Math.atan2(-r.z,-r.x)).id,this.orderPadClearance(e,r),this.context.invalidateStructureObstacles(),e.queue.shift(),this.context.emit({kind:`produced`,subject:i.name,faction:t.faction});continue}if(n.remainingSteps>0&&--n.remainingSteps>0)continue;let r=yl.find(e=>e.id===n.typeId);if(!r||!this.spawnOrdinary(e,r)){this.context.emit({kind:`productionBlocked`,subject:r?.name??n.typeId,faction:t.faction});continue}e.queue.shift(),this.context.emit({kind:`produced`,subject:r.name,faction:t.faction})}}spawnOrdinary(e,t){for(let n of Cf(e.x,e.z,$(t)+xf))if(this.legalUnitPosition(t,n.x,n.z))return this.context.army.spawn(t.id,n.x,n.z,Math.atan2(-n.z,-n.x)),!0;return!1}ensurePad(e){if(e.fabricationPad)return e.fabricationPad;let t=this.context.army.typeOf(e),n=t.fabricationPadOutputTypeId&&yl.find(e=>e.id===t.fabricationPadOutputTypeId);if(!n)return;let r=t.anchoredFootprint?Math.max(t.anchoredFootprint.width,t.anchoredFootprint.depth)/2:$(t,!0),i=Sf(n);for(let a of Cf(e.x,e.z,r+i))if(!this.padOverlapsProducer(e,t,a.x,a.z,i)&&this.context.nav.passable(a.x,a.z,n.nav,!0,Math.ceil(i/3))&&this.clearOfUnits(a.x,a.z,i,e.id))return e.fabricationPad={x:a.x,z:a.z,radius:i,occupantId:null},this.context.invalidateStructureObstacles(),e.fabricationPad}padOverlapsProducer(e,t,n,r,i){return t.anchoredFootprint?wf(n,r,i,e.x,e.z,t.anchoredFootprint):qc(n,r,e.x,e.z)<(i+$(t,!0))**2}releasePad(e){e.fabricationPad=null,this.context.invalidateStructureObstacles()}padOccupied(e){if(e.occupantId===null)return!1;let t=this.context.army.get(e.occupantId);return!t||Math.hypot(t.x-e.x,t.z-e.z)>e.radius+$(this.context.army.typeOf(t))?(e.occupantId=null,this.context.invalidateStructureObstacles(),!1):!0}orderPadClearance(e,t){if(t.occupantId===null)return;let n=this.context.army.get(t.occupantId);if(!n||n.hasGoal)return;let r=this.clearingDestination(e,n,t);r&&this.context.army.order([n.id],r.x,r.z,this.context.nav,!1,`command`)}clearingDestination(e,t,n){let r=this.context.army.typeOf(t);for(let i of Cf(n.x,n.z,n.radius+$(r)+xf))if(this.legalUnitPosition(r,i.x,i.z,t.id,e.id)&&this.context.nav.findPath(t.x,t.z,i.x,i.z,r.nav,!1,Sl(r)).reachedGoal)return i}legalUnitPosition(e,t,n,...r){return this.context.nav.passable(t,n,e.nav,!0,Sl(e))&&this.clearOfUnits(t,n,$(e),...r)}clearOfUnits(e,t,n,...r){let i=new Set(r);return this.context.army.units.every(r=>i.has(r.id)||qc(e,t,r.x,r.z)>=(n+$(this.context.army.typeOf(r),r.deployed))**2)}},Ef=1e3,Df=class{humans=0;humansCap=Ef;charge=0;chargeCap=Hi();get segmentsReady(){return Math.floor(this.charge/Bi.pipsPerSegment)}credit(e){let t=this.humans;return this.humans=Of(this.humans+e,0,this.humansCap),this.humans-t}spend(e){return e>this.humans?!1:(this.humans-=e,!0)}addCharge(e){this.charge=Of(this.charge+e,0,this.chargeCap)}spendSegment(){return this.segmentsReady<1?!1:(this.charge-=Bi.pipsPerSegment,!0)}save(){return{humans:this.humans,charge:this.charge}}restore(e){this.humans=Of(e.humans,0,this.humansCap),this.charge=Of(e.charge,0,this.chargeCap)}};function Of(e,t,n){return e<t?t:e>n?n:e}var kf=12,Af=32,jf=class{context;constructor(e){this.context=e}onShardSpot(e,t,n,r){let i=this.context.nav.nearestPassable(t,n,e.nav,!0,r,Sl(e));if(i&&!(this.context.nav.flood(i.x,i.z,e.nav,void 0,!0,Sl(e)).count<400))return i}spawnNear(e,t,n,r,i=!1){let a=yl.find(t=>t.id===e);if(!a)return;let o=$(a),s=Sl(a),c,l=-1/0,u=i?Af:kf;for(let d=0;d<u;d++){let f=this.context.rng().range(0,Math.PI*2),p=(i?r*(1+3*d/(u-1)):r)*Math.sqrt(this.context.rng().next()),m=this.context.nav.nearestPassable(t+Math.cos(f)*p,n+Math.sin(f)*p,a.nav,!0,0,s);if(!m||this.context.nav.flood(m.x,m.z,a.nav,void 0,!0,s).count<400)continue;let h=this.spawnGap(m.x,m.z,o);if(h>=0)return this.context.army.spawn(e,m.x,m.z,Math.atan2(-m.z,-m.x));!i&&h>l&&(l=h,c=m)}return c&&!i?this.context.army.spawn(e,c.x,c.z,Math.atan2(-c.z,-c.x)):void 0}spawnGap(e,t,n){let r=1/0;for(let i of this.context.army.units){let a=n+$(this.context.army.typeOf(i),i.deployed),o=Math.sqrt(qc(e,t,i.x,i.z))-a;o<r&&(r=o)}return r}},Mf=class{context;signature=``;constructor(e){this.context=e}invalidate(){this.signature=``}refresh(){let e=this.context.army.units.flatMap(e=>{let t=this.context.army.typeOf(e).anchoredFootprint,n=e.deployed&&(e.deployTimer===0||e.deployTarget);return!t||!n?[]:[{x0:e.x-t.width/2,z0:e.z-t.depth/2,x1:e.x+t.width/2,z1:e.z+t.depth/2}]}),t=this.context.constructionSites().map(e=>{let t=yl.find(t=>t.id===e.structureTypeId),n=(t?.anchoredFootprint?.width??(t?t.radius*2:0))/2+7,r=(t?.anchoredFootprint?.depth??(t?t.radius*2:0))/2+7;return{x0:e.x-n,z0:e.z-r,x1:e.x+n,z1:e.z+r}}),n=this.context.army.units.flatMap(e=>{let t=e.fabricationPad;return t&&t.occupantId===null?[{x0:t.x-t.radius,z0:t.z-t.radius,x1:t.x+t.radius,z1:t.z+t.radius}]:[]}),r=[...e,...t,...n],i=r.map(e=>`${e.x0},${e.z0},${e.x1},${e.z1}`).join(`|`);i!==this.signature&&(this.signature=i,this.context.nav.setObstacles(r))}},Nf=1,Pf=1e3,Ff=12,If=3,Lf=500,Rf=[1,2,4,8,16,32],zf=[.25,.5,.75,1],Bf=class{context;constructor(e){this.context=e}initialize(e){if(e.battlefield)this.context.factions.machines.techTier=2,this.context.factions.ancients.techTier=2,this.deployStartingEconomy(!0),this.deployBattlefieldForces(e.battlefieldUnitsPerType);else if(e.standardMatch){for(let e of Ri)this.context.factions[e].resources.credit(Pf);this.deployHarbingers()}else this.deployStartingEconomy(!1),this.deployStartingForces()}deployStartingForces(){let e=this.context.city.startAnchors;[`machines`,`ancients`].forEach((t,n)=>{let r=e[n]??{x:0,z:0},i=yl.find(e=>e.faction===t&&e.role===`harbinger`),a=yl.find(e=>e.faction===t&&e.role===`harvester`),o=yl.find(e=>e.faction===t&&e.role===`infantry`),s=yl.find(e=>e.faction===t&&e.role===`heavy`);if(!(!i||!a||!o||!s))for(let e=0;e<Nf;e++)this.context.placement.spawnNear(i.id,r.x,r.z,$(i)*(2+e*2)),this.context.placement.spawnNear(s.id,r.x,r.z,$(s)*(3+e*2)),this.context.placement.spawnNear(o.id,r.x,r.z,$(s)*5+$(o)*e),this.context.placement.spawnNear(a.id,r.x,r.z,$(s)*4+$(a)*e)})}deployHarbingers(){this.context.city.startAnchors.forEach((e,t)=>{let n=Ri[t],r=n&&yl.find(e=>e.faction===n&&e.role===`harbinger`);if(!r)return;let i=this.harbingerLandingSpot(r,e);i&&this.context.army.spawn(r.id,i.x,i.z,Math.atan2(-i.z,-i.x))})}harbingerCandidates(e){let t=[],n=(n,r,i,a)=>{let o={x:(n+i)/2,z:(r+a)/2};qc(o.x,o.z,e.x,e.z)<=Lf**2&&t.push(o)};for(let e of this.context.city.blocks)(e.kind===`park`||e.kind===`parking`)&&n(e.x0,e.z0,e.x1,e.z1);for(let e of this.context.city.roads)e.arterial&&n(e.x0,e.z0,e.x1,e.z1);return t.sort((t,n)=>qc(t.x,t.z,e.x,e.z)-qc(n.x,n.z,e.x,e.z)),[e,...t]}harbingerLandingSpot(e,t){for(let n of this.harbingerCandidates(t)){let t=this.context.placement.onShardSpot(e,n.x,n.z,If);if(t&&this.hasFabricationPad(e,t.x,t.z))return t}let n=$(e)*2;for(let r of Rf)for(let i=0;i<Ff;i++){let i=this.context.rng().range(0,Math.PI*2),a=n*r*Math.sqrt(this.context.rng().next()),o=this.context.placement.onShardSpot(e,t.x+Math.cos(i)*a,t.z+Math.sin(i)*a,If);if(o&&this.hasFabricationPad(e,o.x,o.z))return o}}hasFabricationPad(e,t,n){let r=e.fabricationPadOutputTypeId;if(!r)return!0;let i=xl(r),a=e.anchoredFootprint?Math.max(e.anchoredFootprint.width,e.anchoredFootprint.depth)/2:$(e,!0),o=Sf(i);return Cf(t,n,a+o).some(e=>this.context.nav.passable(e.x,e.z,i.nav,!0,Math.ceil(o/3)))}battlefieldSlotSpot(e,t,n,r,i){let a=this.context.placement.onShardSpot(e,t,n,0);if(a)return a;for(let a of zf){let o=this.context.placement.onShardSpot(e,t+(r-t)*a,n+(i-n)*a,0);if(o)return o}return{x:t,z:n}}deployBattlefieldForces(e){for(let t of[`machines`,`ancients`]){let n=yl.filter(e=>e.faction===t&&e.role!==`structure`&&e.id!==`machine-processing-node`&&e.id!==`mobile-factory`),r=Math.ceil(n.length/2),i=t===`machines`?-1:1;for(let[a,o]of n.entries()){let n=a%2,s=Math.floor(a/2),c=i*(170+n*250),l=(s-(r-1)/2)*260,u=$(o)*2.7,d=Math.ceil(Math.sqrt(e)),f=Math.ceil(e/d);for(let n=0;n<e;n++){let e=c+(n%d-(d-1)/2)*u,r=l+(Math.floor(n/d)-(f-1)/2)*u,i=this.battlefieldSlotSpot(o,e,r,c,l),a=this.context.placement.spawnNear(o.id,i.x,i.z,Math.max($(o)*.6,5));a&&t===`machines`&&(o.id===`machine-infantry`||o.id===`machine-construct`)&&(a.deployed=!0,a.deployTarget=!0)}}}this.context.invalidateStructureObstacles(),this.context.refreshStructureObstacles()}deployStartingEconomy(e){let t=this.context.city.startAnchors[0],n=this.context.city.startAnchors[1];t&&(this.addInfrastructureNear(`machine-processing-node`,t.x+34,t.z,!0),this.addInfrastructureNear(`mobile-factory`,t.x-34,t.z,e)),n&&(this.addStationaryNear(`ancient-slime-temple`,n.x+34,n.z,e),this.addStationaryNear(`ancient-deity-structure`,n.x-40,n.z,e))}addInfrastructureNear(e,t,n,r){let i=xl(e),a=this.context.nav.nearestPassable(t,n,i.nav,!0,0,Sl(i,r));if(!a)return;let o=this.context.army.spawn(e,a.x,a.z);return o.deployed=r,o.deployTarget=r,this.context.invalidateStructureObstacles(),this.context.refreshStructureObstacles(),o}addStationaryNear(e,t,n,r){let i=xl(e),a=this.context.nav.nearestPassable(t,n,i.nav,!0,0,Sl(i));if(!a)return;let o=this.context.army.spawn(e,a.x,a.z);return r&&e===`ancient-slime-temple`&&(o.deployed=!0,o.deployTarget=!0),this.context.invalidateStructureObstacles(),this.context.refreshStructureObstacles(),o}},Vf=1200,Hf=new Map(yl.map((e,t)=>[e.id,t])),Uf=[{name:`id`,value:e=>e.id},{name:`typeId`,value:e=>Hf.get(e.typeId)??-1},{name:`x`,value:e=>e.x},{name:`z`,value:e=>e.z},{name:`heading`,value:e=>e.heading},{name:`path`,value:e=>e.path.length},{name:`goalX`,value:e=>e.goalX},{name:`goalZ`,value:e=>e.goalZ},{name:`hasGoal`,value:e=>+!!e.hasGoal},{name:`repathPending`,value:e=>+!!e.repathPending},{name:`unreachable`,value:e=>+!!e.unreachable},{name:`blockedSteps`,value:e=>e.blockedSteps},{name:`stalledSteps`,value:e=>e.stalledSteps},{name:`stallWindowSteps`,value:e=>e.stallWindowSteps},{name:`stallAnchorX`,value:e=>e.stallAnchorX},{name:`stallAnchorZ`,value:e=>e.stallAnchorZ},{name:`health`,value:e=>e.health},{name:`targetId`,value:e=>e.targetId??-1},{name:`attackMove`,value:e=>+!!e.attackMove},{name:`chaseSteps`,value:e=>e.chaseSteps},{name:`lastAttackerId`,value:e=>e.lastAttackerId??-1},{name:`targetBuildingId`,value:e=>e.targetBuildingId??-1},{name:`attackCooldown`,value:e=>e.attackCooldown},{name:`cargo`,value:e=>e.cargo},{name:`harvestingBuildingId`,value:e=>e.harvestingBuildingId??-1},{name:`harvestingCrowdId`,value:e=>e.harvestingCrowdId??-1},{name:`harvestOrdered`,value:e=>+!!e.harvestOrdered},{name:`deployed`,value:e=>+!!e.deployed},{name:`deployTimer`,value:e=>e.deployTimer},{name:`deployTarget`,value:e=>+!!e.deployTarget},{name:`queue`,value:e=>e.queue.length>0?e.queue.length*1e3+(e.queue[0]?.remainingSteps??0):0},{name:`fabricationPad`,value:e=>e.fabricationPad===null?0:1},{name:`restrictedNav`,value:e=>+!!e.restrictedNav}],Wf=6,Gf=7,Kf=[`expand`,`attack`,`defend`],qf=9,Jf=8,Yf=4,Xf=4,Zf=class{seed;city;nav;army=new Il;battlefield;freeProduction;factions={machines:{resources:new Df,techTier:1,carnageRemainder:0},ancients:{resources:new Df,techTier:1,carnageRemainder:0}};population;populationCapacity;playerFaction;crowds=new Ud;tick=0;get resources(){return this.factions[this.playerFaction].resources}get techTier(){return this.factions[this.playerFaction].techTier}harvesting;combat;placement;structureObstacles;construction;production;destruction;commands;rng;queue=[];events=[];controllers;controllersWereConfigured;ai;eliminated=new Set;matchOutcome=null;get constructionSites(){return this.construction.sites}constructor(e,t=`machines`,n={}){this.seed=e,this.playerFaction=t,this.battlefield=n.battlefield===!0,this.controllersWereConfigured=n.controllers!==void 0,this.controllers={machines:n.controllers?.machines??(this.battlefield||t===`machines`?`human`:`ai`),ancients:n.controllers?.ancients??(this.battlefield||t===`ancients`?`human`:`ai`)};let r=Math.max(1,Math.floor(n.battlefieldUnitsPerType??Xf));this.freeProduction=this.battlefield,this.rng=new ao(e),this.city=this.battlefield?new Ms({seed:e,radius:850,maxBuildings:18}):new Ms({seed:e}),this.nav=new hl(this.city),this.population=bf(this.city),this.populationCapacity=[...this.population],this.placement=new jf({army:this.army,nav:this.nav,rng:()=>this.rng}),this.destruction=new Yd({city:this.city,nav:this.nav,army:this.army,crowds:this.crowds,population:this.population,factionState:e=>this.factions[e],rng:()=>this.rng}),this.production=new Tf({army:this.army,nav:this.nav,freeProduction:this.freeProduction,factionState:e=>this.factions[e],invalidateStructureObstacles:()=>this.structureObstacles.invalidate(),emit:e=>this.events.push(e)}),this.construction=new Ld({army:this.army,nav:this.nav,factionState:e=>this.factions[e],invalidateStructureObstacles:()=>this.structureObstacles.invalidate(),refreshStructureObstacles:()=>this.structureObstacles.refresh(),emit:e=>this.events.push(e)}),this.structureObstacles=new Mf({army:this.army,nav:this.nav,constructionSites:()=>this.construction.sites}),this.harvesting=new $d({city:this.city,nav:this.nav,army:this.army,crowds:this.crowds,population:this.population,factions:this.factions,emit:e=>this.events.push(e)}),this.combat=new hf({army:this.army,emit:e=>{e.kind===`harbingerDown`&&e.faction&&this.eliminated.add(e.faction),this.events.push(e)},standingBuilding:(e,t,n)=>this.destruction.standingBuilding(e,t,n),damageBuilding:(e,t)=>this.destruction.damageFromCombat(e,t)}),this.commands=new Pd({army:this.army,city:this.city,nav:this.nav,crowds:this.crowds,population:this.population,controllers:this.controllers,harvesting:this.harvesting,construction:this.construction,production:this.production,destruction:this.destruction,playerFaction:()=>this.playerFaction,setPlayerFaction:e=>{this.playerFaction=e},observedResources:()=>this.resources,recordElimination:e=>this.eliminated.add(e),emit:e=>this.events.push(e)}),this.ai={machines:new pf(this.aiContext(`machines`)),ancients:new pf(this.aiContext(`ancients`))},new Bf({city:this.city,nav:this.nav,army:this.army,factions:this.factions,placement:this.placement,rng:()=>this.rng,invalidateStructureObstacles:()=>this.structureObstacles.invalidate(),refreshStructureObstacles:()=>this.structureObstacles.refresh()}).initialize({battlefield:this.battlefield,standardMatch:n.standardMatch===!0,battlefieldUnitsPerType:r}),this.production.syncPads(),this.structureObstacles.refresh()}choosePlayerFactionForNewMatch(e){if(this.tick!==0)throw Error(`player faction can only be chosen before a new match starts`);this.playerFaction=e,!this.controllersWereConfigured&&(this.controllers.machines=e===`machines`?`human`:`ai`,this.controllers.ancients=e===`ancients`?`human`:`ai`)}aiContext(e){return{faction:e,army:this.army,resources:this.factions[e].resources,techTier:()=>this.factions[e].techTier,enqueue:t=>this.enqueue(e,t),harvestTargetFor:e=>this.aiHarvestTarget(e),constructionPlacement:(e,t,n,r)=>this.constructionPlacement(e,t,n,r)}}aiHarvestTarget(e){let t=this.harvesting.nextHarvestTargetAt(e,e.x,e.z);if(t)return t;let n=this.harvesting.nearestPopulatedBuilding(e,e.x,e.z,(Vf*2)**2);return n?{kind:`building`,id:n.id}:null}enqueue(e,t){this.queue.push({issuer:e,command:t})}step(){if(!this.matchOutcome&&(this.tick++,this.applyCommands(),this.army.step(this.nav),this.structureObstacles.refresh(),this.destruction.crushBuildings(),this.combat.step(),this.destruction.reconcileCombatDamage(),this.crowds.step(this.nav),this.harvesting.step(),this.construction.step(),this.production.step(),this.resolveMatch(),!this.matchOutcome))for(let e of Ri)this.controllers[e]===`ai`&&this.ai[e].step()}resolveMatch(){if(this.matchOutcome||this.eliminated.size===0)return;let e=gf(this.eliminated,this.tick);e&&(this.matchOutcome=e,this.events.push({kind:`matchResolved`,...e.winner?{faction:e.winner}:{}}))}applyCommands(){if(this.queue.length===0)return;let e=this.queue.splice(0,this.queue.length);this.commands.apply(e)}constructionPlacement(e,t,n,r){return this.construction.placement(e,t,n,r)}canWorkBuilding(e,t){let n=this.army.get(e),r=this.city.get(t);return!n||!r?!1:this.harvesting.harvestStand(n,r)!==void 0}get outcome(){return this.matchOutcome}remainingPopulation(){return this.population.reduce((e,t)=>e+t,0)}drainChangedBuildings(){return this.destruction.drainChangedBuildings()}drainEvents(){return this.events.length===0?[]:this.events.splice(0,this.events.length)}cargoInTransit(){let e=0;for(let t of this.army.units)this.army.typeOf(t).faction===this.playerFaction&&(e+=t.cargo);return e}harvestersIdle(){let e=0;for(let t of this.army.units){let n=this.army.typeOf(t);n.faction===this.playerFaction&&n.role===`harvester`&&(!t.harvestOrdered||Tl(t)||n.faction===`machines`&&t.cargo>0||e++)}return e}queuedProduction(){let e=0;for(let t of this.army.units)this.army.typeOf(t).faction===this.playerFaction&&(e+=t.queue.length);return e}hash(){let e=this.army.units,t=this.crowds.all,n=this.army.pendingIds,r=new Float64Array(Wf+Ri.length*Gf+n.length+e.length*Uf.length+e.length*Yf+this.population.length+this.city.buildings.length+t.length*qf+this.constructionSites.length*Jf),i=0;r[i++]=this.tick,r[i++]=this.rng.save().s,r[i++]=this.army.pathsTotal,r[i++]=this.matchOutcome?.tick??-1,r[i++]=_f(this.matchOutcome);for(let e of Ri){let t=this.factions[e];r[i++]=t.resources.humans,r[i++]=t.resources.charge,r[i++]=t.techTier,r[i++]=t.carnageRemainder,r[i++]=+(this.controllers[e]===`ai`);let n=this.ai[e].state;r[i++]=Kf.indexOf(n.posture),r[i++]=n.nextPlanIn}r[i++]=n.length;for(let e of n)r[i++]=e;for(let t of e)for(let e of Uf)r[i++]=e.value(t);for(let t of e){let e=t.fabricationPad;r[i++]=e?.x??0,r[i++]=e?.z??0,r[i++]=e?.radius??0,r[i++]=e?.occupantId??-1}for(let e of this.population)r[i++]=e;for(let e of this.city.buildings)r[i++]=e.health;for(let e of t)r[i++]=e.id,r[i++]=e.x,r[i++]=e.z,r[i++]=e.humans,r[i++]=e.panicSteps,r[i++]=e.lifeSteps,r[i++]=e.trailDirX,r[i++]=e.trailDirZ,r[i++]=e.trailStrength;for(let e of this.constructionSites)r[i++]=e.builderId,r[i++]=Hf.get(e.structureTypeId)??-1,r[i++]=e.x,r[i++]=e.z,r[i++]=e.approachX,r[i++]=e.approachZ,r[i++]=e.remainingSteps,r[i++]=+!!e.summoning;if(i!==r.length)throw Error(`world hash wrote ${i} values into an array sized ${r.length}; the sizing terms are stale`);let a=new Uint8Array(r.buffer),o=2166136261;for(let e of a)o^=e,o=Math.imul(o,16777619);for(let e of this.city.hash())o^=e.charCodeAt(0),o=Math.imul(o,16777619);return(o>>>0).toString(16).padStart(8,`0`)}save(){return{tick:this.tick,rng:this.rng.save(),units:this.army.save(),buildingStates:this.city.buildings.map(e=>e.state),buildingHealth:this.city.buildings.map(e=>e.health),playerFaction:this.playerFaction,economy:{population:[...this.population],factions:{machines:this.saveFaction(`machines`),ancients:this.saveFaction(`ancients`)}},crowds:this.crowds.save(),constructionSites:this.construction.save(),match:this.matchOutcome?{...this.matchOutcome,defeated:[...this.matchOutcome.defeated]}:null,controllers:{...this.controllers},ai:{machines:this.ai.machines.state,ancients:this.ai.ancients.state}}}saveFaction(e){let t=this.factions[e];return{resources:t.resources.save(),techTier:t.techTier,carnageRemainder:t.carnageRemainder}}restore(e){if(e.playerFaction!==this.playerFaction)throw Error(`save is for ${e.playerFaction}, this world is ${this.playerFaction}; construct the World with the save's faction before restoring`);this.tick=e.tick,this.rng=ao.restore(e.rng),this.population.splice(0,this.population.length,...e.economy.population);for(let t of Ri){let n=e.economy.factions[t],r=this.factions[t];r.resources.restore(n.resources),r.techTier=n.techTier,r.carnageRemainder=n.carnageRemainder}this.crowds.restore(e.crowds),this.construction.restore(e.constructionSites);for(let t of Ri)this.controllers[t]=e.controllers[t],this.ai[t].restore(e.ai[t]);this.matchOutcome=e.match?{...e.match,defeated:[...e.match.defeated]}:null,this.eliminated.clear();for(let t of e.match?.defeated??[])this.eliminated.add(t);this.queue.length=0,this.events.length=0,this.structureObstacles.invalidate(),this.city.buildings.forEach((t,n)=>{let r=e.buildingStates[n],i=e.buildingHealth[n];r&&(t.state!==r||t.health!==i)&&(t.state=r,t.health=i??0,this.destruction.markChanged(t.id))}),this.army.restore(e.units),this.production.syncPads(),this.structureObstacles.refresh()}destructionCounts(){return Ka.map(e=>this.city.countByState(e))}};function Qf(e){let t=new URLSearchParams(e),n=t.get(`ai`),r=n===`both`?[`machines`,`ancients`]:n?.split(`,`).map(e=>e.trim())??[],i={};for(let e of r)(e===`machines`||e===`ancients`)&&(i[e]=`ai`);return{controllers:Object.keys(i).length>0?i:void 0,detailedPerformance:t.get(`detailedPerf`)===`1`,detailedStress:t.get(`stress`)===`detailed`}}function $f(e,t,n){let r,i=1/0;for(let a of e.buildings){if(a.state===`rubble`)continue;let e=(a.x-t)**2+(a.z-n)**2;e<i&&(i=e,r=a.id)}return r}function ep(e,t){let n=e.city.startAnchors[0];if(!n||e.nav.onShardCells<=0)return{reachSmall:0,reachLarge:0,reachLargeStrict:0,atFocusSmall:!1,atFocusLarge:!1};let r=e.nav.flood(n.x,n.z,`small`,t,!1,3),i=e.nav.flood(n.x,n.z,`large`,t,!1,13),a=e.nav.flood(n.x,n.z,`large`,t,!0,13);return{reachSmall:r.count/e.nav.onShardCells,reachLarge:i.count/e.nav.onShardCells,reachLargeStrict:a.count/e.nav.onShardCells,atFocusSmall:r.reachedTarget,atFocusLarge:i.reachedTarget}}var tp=class{windowTicks;ticks=[];earned=[];total=0;last=null;constructor(e=360){this.windowTicks=e}add(e,t){for(this.last!==null&&t>this.last&&(this.total+=t-this.last),this.last=t,this.ticks.push(e),this.earned.push(this.total);this.ticks.length>1&&e-(this.ticks[0]??e)>this.windowTicks;)this.ticks.shift(),this.earned.shift()}get perMinute(){if(this.ticks.length<2)return 0;let e=(this.ticks.at(-1)??0)-(this.ticks[0]??0);return e<=0?0:((this.earned.at(-1)??0)-(this.earned[0]??0))/e*30*60}},np=.012,rp=350,ip=.06,ap=new Map([[`KeyW`,[0,1]],[`ArrowUp`,[0,1]],[`KeyS`,[0,-1]],[`ArrowDown`,[0,-1]],[`KeyA`,[-1,0]],[`ArrowLeft`,[-1,0]],[`KeyD`,[1,0]],[`ArrowRight`,[1,0]]]),op=new Set([`Delete`,`KeyF`,`KeyC`,`F5`,`F9`]),sp=class{target;panVector=new H;zoomDelta=0;pointer=new H;middlePanHeld=!1;touchPanHeld=!1;dragRect;selectGesture;orderAt;touchPanCandidate;held=new Set;justPressed=new Map;listeners=[];dragStart;dragAdditive=!1;pendingGesture;pendingOrder;touches=new Map;touchGesturePinched=!1;touchPanAllowed=!1;lastTouchTap;ignoreNativeDoubleClickUntil=0;constructor(e){this.target=e;let t=e=>{e.repeat||this.justPressed.set(e.code,{shift:e.shiftKey,ctrl:e.ctrlKey}),ap.has(e.code)&&this.held.add(e.code),(ap.has(e.code)||op.has(e.code))&&e.preventDefault()},n=e=>{this.held.delete(e.code)},r=e=>{this.zoomDelta+=e.deltaY,e.preventDefault()},i=e=>{if(e.pointerType===`touch`&&this.touches.has(e.pointerId)){let t=this.touchDistance();this.touches.get(e.pointerId).set(e.clientX,e.clientY);let n=this.touchDistance();t!==void 0&&n!==void 0&&t>0&&(this.zoomDelta+=-Math.log(n/t)*800)}if(this.toNdc(e,this.pointer),e.pointerType===`touch`&&this.dragStart&&!this.touchGesturePinched){let e=cp(this.dragStart,this.pointer),t=Math.max(e.x1-e.x0,e.y1-e.y0);this.touchPanAllowed&&t>np&&(this.touchPanHeld=!0)}else this.dragStart&&!this.touchGesturePinched&&(this.dragRect=cp(this.dragStart,this.pointer))},a=t=>{if(this.toNdc(t,this.pointer),t.pointerType===`touch`&&(this.touches.set(t.pointerId,new H(t.clientX,t.clientY)),e.setPointerCapture(t.pointerId),this.touches.size>=2&&(this.touchGesturePinched=!0,this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.clearTouchTap())),t.button===0){if(this.touchGesturePinched){t.preventDefault();return}this.dragStart=this.pointer.clone(),this.dragAdditive=t.ctrlKey||t.shiftKey,t.pointerType===`touch`?(this.touchPanCandidate=this.dragStart.clone(),this.touchPanAllowed=!1,this.touchPanHeld=!1):this.dragRect=cp(this.dragStart,this.pointer),e.setPointerCapture(t.pointerId)}else t.button===1?(this.middlePanHeld=!0,e.setPointerCapture(t.pointerId)):t.button===2&&(this.pendingOrder=this.pointer.clone());t.preventDefault()},o=t=>{if(t.pointerType===`touch`&&(this.touches.delete(t.pointerId),this.touchGesturePinched)){this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this.touches.size===0&&(this.touchGesturePinched=!1);return}if(t.button===1){this.middlePanHeld=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}if(t.button!==0||!this.dragStart)return;this.toNdc(t,this.pointer);let n=cp(this.dragStart,this.pointer),r=Math.max(n.x1-n.x0,n.y1-n.y0);if(t.pointerType===`touch`&&(this.touchPanHeld||r>np)){this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,this.clearTouchTap(),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}let i=t.pointerType===`touch`&&this.isDoubleTap(this.pointer,t.timeStamp);this.pendingGesture={rect:n,isBox:r>np,additive:this.dragAdditive,doubleClick:i,pointerType:lp(t.pointerType)},t.pointerType===`touch`&&(this.ignoreNativeDoubleClickUntil=performance.now()+rp),this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},s=t=>{this.touches.delete(t.pointerId),this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,t.pointerType===`touch`&&this.clearTouchTap(),this.touches.size===0&&(this.touchGesturePinched=!1),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},c=e=>{if(performance.now()<this.ignoreNativeDoubleClickUntil)return;let t=new H,n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1)),this.pendingGesture={rect:cp(t,t),isBox:!1,additive:e.ctrlKey||e.shiftKey,doubleClick:!0,pointerType:`mouse`},e.preventDefault()},l=e=>e.preventDefault(),u=()=>{this.held.clear(),this.dragStart=void 0,this.dragRect=void 0,this.middlePanHeld=!1,this.touches.clear(),this.touchGesturePinched=!1,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,this.clearTouchTap()};window.addEventListener(`keydown`,t),window.addEventListener(`keyup`,n),e.addEventListener(`wheel`,r,{passive:!1}),e.addEventListener(`pointermove`,i),e.addEventListener(`pointerdown`,a),e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,s),e.addEventListener(`dblclick`,c),e.addEventListener(`contextmenu`,l),window.addEventListener(`blur`,u),this.listeners.push(()=>window.removeEventListener(`keydown`,t),()=>window.removeEventListener(`keyup`,n),()=>e.removeEventListener(`wheel`,r),()=>e.removeEventListener(`pointermove`,i),()=>e.removeEventListener(`pointerdown`,a),()=>e.removeEventListener(`pointerup`,o),()=>e.removeEventListener(`pointercancel`,s),()=>e.removeEventListener(`dblclick`,c),()=>e.removeEventListener(`contextmenu`,l),()=>window.removeEventListener(`blur`,u))}resolveTouchPan(e){this.touchPanCandidate&&=(this.touchPanAllowed=e,void 0)}isDoubleTap(e,t){let n=this.lastTouchTap,r=n!==void 0&&t-n.timeStamp<=rp&&n.point.distanceTo(e)<=ip;return this.lastTouchTap=r?void 0:{point:e.clone(),timeStamp:t},r}clearTouchTap(){this.lastTouchTap=void 0}touchDistance(){if(this.touches.size<2)return;let e=this.touches.values(),t=e.next().value,n=e.next().value;return t.distanceTo(n)}toNdc(e,t){let n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1))}sample(){this.panVector.set(0,0);for(let e of this.held){let t=ap.get(e);t&&(this.panVector.x+=t[0],this.panVector.y+=t[1])}this.panVector.lengthSq()>1&&this.panVector.normalize(),this.selectGesture=this.pendingGesture,this.orderAt=this.pendingOrder}wasPressed(e){return this.justPressed.has(e)}pressModifiers(e){return this.justPressed.get(e)}consume(){this.zoomDelta=0,this.justPressed.clear(),this.pendingGesture=void 0,this.pendingOrder=void 0,this.selectGesture=void 0,this.orderAt=void 0}dispose(){for(let e of this.listeners)e();this.listeners.length=0}};function cp(e,t){return{x0:Math.min(e.x,t.x),y0:Math.min(e.y,t.y),x1:Math.max(e.x,t.x),y1:Math.max(e.y,t.y)}}function lp(e){return e===`touch`||e===`pen`?e:`mouse`}var up=class extends Error{};function dp(e){if(e.outcome)throw new up(`this match has ended; a resolved match can be reopened but not saved`);return{version:33,seed:e.seed,playerFaction:e.playerFaction,tick:e.tick,hash:e.hash(),world:e.save()}}function fp(e){mp(e);let t=new Zf(e.seed,e.playerFaction),n=t.city.buildings.length,r=e.world.buildingStates.length;if(n!==r||e.world.buildingHealth.length!==n)throw new up(`save has ${r} building states / ${e.world.buildingHealth.length} health values but seed ${e.seed} now generates ${n}; the city generator changed since this save was written`);t.restore(e.world);let i=t.hash();if(i!==e.hash)throw new up(`restored world hash ${i} does not match the saved ${e.hash}; the save did not round-trip and the world is not the one that was saved`);return t}function pp(e){try{return mp(e),!0}catch{return!1}}function mp(e){if(typeof e!=`object`||!e)throw new up(`save is not an object`);let t=e;if(t.version!==33)throw new up(`save version ${String(t.version)} cannot be read by version 33`);if(typeof t.seed!=`number`||!Number.isFinite(t.seed))throw new up(`save has no usable seed`);if(t.playerFaction!==`machines`&&t.playerFaction!==`ancients`)throw new up(`save has an unknown faction ${String(t.playerFaction)}`);if(typeof t.tick!=`number`||!Number.isInteger(t.tick)||t.tick<0)throw new up(`save has no usable step count`);if(typeof t.hash!=`string`||t.hash.length===0)throw new up(`save has no hash to verify against`);let n=t.world;if(typeof n!=`object`||!n)throw new up(`save has no world state`);if(!Array.isArray(n.buildingStates))throw new up(`save has no destruction state`);if(!Array.isArray(n.buildingHealth))throw new up(`save has no building health`);if(!Array.isArray(n.constructionSites))throw new up(`save has no construction sites`);if(!n.buildingHealth.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0))throw new up(`save has unusable building health`);if(typeof n.controllers!=`object`||n.controllers===null)throw new up(`save does not say who commands each faction`);if(typeof n.economy!=`object`||n.economy===null)throw new up(`save has no economy state`);let r=n.economy.factions;if(typeof r!=`object`||!r)throw new up(`save has no per-faction economy state`);for(let e of[`machines`,`ancients`]){let t=r[e];if(typeof t!=`object`||!t||typeof t.resources!=`object`||t.resources===null)throw new up(`save has no resource state for ${e}`)}}var hp=`human-resources`,gp=1,_p=`saves`,vp=`quick`,yp=class e{db=null;static get available(){return typeof indexedDB<`u`}async open(){if(this.db)return this.db;if(!e.available)throw Error(`IndexedDB is unavailable in this context`);return this.db=await new Promise((e,t)=>{let n=indexedDB.open(hp,gp);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(_p)||e.createObjectStore(_p,{keyPath:`slot`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`failed to open the save database`)),n.onblocked=()=>t(Error(`save database upgrade blocked by another tab`))}),this.db}async put(e,t,n=vp){let r=await this.open(),i={slot:n,envelope:e,savedAtMs:t};await bp(r,`readwrite`,e=>e.put(i))}async get(e=vp){let t=await bp(await this.open(),`readonly`,t=>t.get(e));if(t){if(!pp(t.envelope)){this.lastRejection=`save in slot "${e}" is not readable by this build`;return}return this.lastRejection=null,t}}lastRejection=null;async list(){return(await bp(await this.open(),`readonly`,e=>e.getAll())).map(e=>({...e,readable:pp(e.envelope)})).sort((e,t)=>t.savedAtMs-e.savedAtMs)}async delete(e=vp){await bp(await this.open(),`readwrite`,t=>t.delete(e))}};function bp(e,t,n){return new Promise((r,i)=>{let a=e.transaction(_p,t),o=n(a.objectStore(_p));o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error??Error(`save operation failed`)),a.onabort=()=>i(a.error??Error(`save transaction aborted`))})}var xp=new K;function Sp(e,t,n){let r=Cp(e,n);if(!r)return;let i,a=1/0;for(let e of t){let t=(e.x-r.x)**2+(e.z-r.z)**2;t>196||t>=a||(i=e,a=t)}return i?.id}function Cp(e,t,n=Q){xp.set(t.x,t.y,.5).unproject(e);let r=e.position,i=xp.sub(r);if(Math.abs(i.y)<1e-6)return;let a=(n-r.y)/i.y;if(!(a<0))return new K(r.x+i.x*a,n,r.z+i.z*a)}function wp(e,t,n,r){Tp.setFromCamera(n,e);let i,a=1/0;for(let e of t.units){let t=r?.importedPickSource?.(e.id),n=t?Np(t):Ap(e,r);!n||n.distance>=a||(a=n.distance,i=e.id)}return i}var Tp=new ae,Ep=[],Dp=[],Op=new Map,kp=new Ae;function Ap(e,t){let n=Fp(e),r=`${e.typeId}:${n?`deployed`:`mobile`}`,i=Op.get(r);if(!i){let a=jp(e.typeId,n,t),o=new ye(a.size.x,a.size.y,a.size.z);o.translate(a.centre.x,a.centre.y,a.centre.z),i=new R(o,new L({side:2})),i.matrixAutoUpdate=!1,Op.set(r,i)}return Ip(i,e,t),Ep.length=0,i.raycast(Tp,Ep),Pp(Ep)}function jp(e,t,n){return n?.boundsOf?n.boundsOf(e,t):Kl(e,t)}function Mp(e,t){return t?.deployedAppearanceFor?t.deployedAppearanceFor(e):Au(e,Kl(e,!1))}function Np(e){return e.updateMatrixWorld(!0),Dp.length=0,Tp.intersectObject(e,!0,Dp),Pp(Dp)}function Pp(e){let t;for(let n of e)(!t||n.distance<t.distance)&&(t=n);return t}function Fp(e){if(!Gl(e.typeId))return!1;if(e.deployTimer>0){let t=1-e.deployTimer/Gc;return e.deployTarget?t>=.5:t>.5}return e.deployed}function Ip(e,t,n){let r=Mp(t.typeId,n),i=0;if(r)if(t.deployTimer>0){let e=1-t.deployTimer/Gc;i=t.deployTarget?e:1-e}else t.deployed&&(i=1);kp.makeRotationY(-t.heading),kp.setPosition(t.x,Q-(r?.drop??0)*i,t.z),e.matrixWorld.copy(kp)}function Lp(e,t,n){xp.set(n.x,n.y,.5).unproject(e);let r=e.position,i=xp.x-r.x,a=xp.y-r.y,o=xp.z-r.z,s,c=1/0;for(let e of t.buildings){let t=Ys(e),n=e.rotation??0,l=X({x:r.x-e.x,z:r.z-e.z},-n),u=X({x:i,z:o},-n),d=Rp(l.x,r.y,l.z,u.x,a,u.z,-e.width/2,0,-e.depth/2,e.width/2,t,e.depth/2);d!==void 0&&d<c&&(c=d,s=e.id)}return s}function Rp(e,t,n,r,i,a,o,s,c,l,u,d){let f=0,p=1/0;for(let[m,h,g,_]of[[e,r,o,l],[t,i,s,u],[n,a,c,d]]){if(Math.abs(h)<1e-9){if(m<g||m>_)return;continue}let e=(g-m)/h,t=(_-m)/h;if(e>t&&([e,t]=[t,e]),f=Math.max(f,e),p=Math.min(p,t),f>p)return}return p>=0?f:void 0}function zp(e,t,n){let r=[];for(let i of t.units)Vp(e,i,n)&&r.push(i.id);return r.sort((e,t)=>e-t)}function Bp(e,t){return zp(e,t,{x0:-1,y0:-1,x1:1,y1:1})}function Vp(e,t,n){return xp.set(t.x,Q,t.z).project(e),xp.z<-1||xp.z>1?!1:xp.x>=n.x0&&xp.x<=n.x1&&xp.y>=n.y0&&xp.y<=n.y1}var Hp={fovDeg:28,minDistance:200,maxDistance:1500,initialDistance:750,minPitchDeg:50,maxPitchDeg:58,yawDeg:45,nearPlane:50,farPlane:16e4,basePanSpeed:120,zoomSpeed:.0016,smoothing:12,panLimit:Vf*.6},Up=class{camera;target=new K(0,0,0);desiredTarget=new K(0,0,0);distance;desiredDistance;lastGrabPointer=new H;grabDragActive=!1;constructor(e,t={x:0,z:0}){this.camera=new Fe(Hp.fovDeg,e,Hp.nearPlane,Hp.farPlane),this.distance=Hp.initialDistance,this.desiredDistance=this.distance,this.target.set(t.x,0,t.z),this.desiredTarget.copy(this.target),this.applyTransform()}get zoomFraction(){return G.inverseLerp(Hp.minDistance,Hp.maxDistance,this.distance)}get pitchDeg(){let e=Math.sqrt(this.zoomFraction);return G.lerp(Hp.minPitchDeg,Hp.maxPitchDeg,e)}get focus(){return this.target}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}focusOn(e){this.desiredTarget.set(e.x,0,e.z),this.clampDesiredTarget()}update(e,t){if(e.zoomDelta!==0){let t=Math.exp(e.zoomDelta*Hp.zoomSpeed);this.desiredDistance=G.clamp(this.desiredDistance*t,Hp.minDistance,Hp.maxDistance)}let n=e.panVector;if(n.x!==0||n.y!==0){let e=Hp.basePanSpeed*(1+this.zoomFraction*4)*t,r=G.degToRad(Hp.yawDeg),i=Math.sin(r),a=Math.cos(r);this.desiredTarget.x+=(n.y*i-n.x*a)*e,this.desiredTarget.z+=(n.x*i+n.y*a)*e,this.clampDesiredTarget()}if(e.middlePanHeld||e.touchPanHeld){let t=Cp(this.camera,e.pointer);if(this.grabDragActive&&t){let e=Cp(this.camera,this.lastGrabPointer);e&&(this.desiredTarget.x+=e.x-t.x,this.desiredTarget.z+=e.z-t.z,this.clampDesiredTarget())}this.lastGrabPointer.copy(e.pointer),this.grabDragActive=!0}else this.grabDragActive=!1;let r=1-Math.exp(-Hp.smoothing*t);this.distance+=(this.desiredDistance-this.distance)*r,this.target.lerp(this.desiredTarget,r),this.applyTransform()}clampDesiredTarget(){let e=Math.hypot(this.desiredTarget.x,this.desiredTarget.z);if(e>Hp.panLimit){let t=Hp.panLimit/e;this.desiredTarget.x*=t,this.desiredTarget.z*=t}}applyTransform(){let e=G.degToRad(this.pitchDeg),t=G.degToRad(Hp.yawDeg),n=Math.cos(e)*this.distance;this.camera.position.set(this.target.x-Math.sin(t)*n,this.target.y+Math.sin(e)*this.distance,this.target.z-Math.cos(t)*n),this.camera.lookAt(this.target)}},Wp={machines:{fill:`rgba(61, 61, 61, 0.82)`,edge:`#70e3bd`,edgePx:2,chamferPx:30,radiusPx:0,tile:`rgba(62, 99, 84, 0.85)`,tileEdge:`#70e3bd`,tileRadius:`0`,heading:`#f2fff6`,body:`#f2fff6`,dim:`#9fbdb1`,headingShadow:`0 0 4px rgba(0, 0, 0, 0.85), 0 1px 1px rgba(0, 0, 0, 0.7)`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,accent:`#ffb020`,ok:`#a2f1ab`,warn:`#e6483d`,onEdge:`#10231c`,cornerLeft:{width:40,height:120,inner:`<g fill="none" stroke="var(--panel-edge)" stroke-width="2" stroke-linejoin="miter">
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
      </g>`}}},Gp=1920;function Kp(e,t,n){if(e.style.setProperty(`--panel-fill`,t.fill),e.style.setProperty(`--panel-edge`,t.edge),e.style.setProperty(`--panel-edge-px`,`${t.edgePx}px`),e.style.setProperty(`--panel-tile`,t.tile),e.style.setProperty(`--panel-tile-edge`,t.tileEdge),e.style.setProperty(`--panel-tile-radius`,t.tileRadius),e.style.setProperty(`--panel-heading`,t.heading),e.style.setProperty(`--panel-body`,t.body),e.style.setProperty(`--panel-dim`,t.dim),e.style.setProperty(`--panel-heading-shadow`,t.headingShadow),e.style.setProperty(`--panel-font`,t.font),e.style.setProperty(`--panel-accent`,t.accent),e.style.setProperty(`--panel-ok`,t.ok),e.style.setProperty(`--panel-warn`,t.warn),e.style.setProperty(`--panel-on-edge`,t.onEdge),e.style.setProperty(`--panel-border-top`,`${t.edgePx}px solid ${t.edge}`),e.style.setProperty(`--panel-border-inward`,`${t.edgePx}px solid ${t.edge}`),t.chamferPx>0){let r=t.chamferPx;e.style.setProperty(`--panel-clip`,n===`left`?`polygon(0 0, calc(100% - ${r}px) 0, 100% ${r}px, 100% 100%, 0 100%)`:`polygon(${r}px 0, 100% 0, 100% 100%, 0 100%, 0 ${r}px)`),e.style.setProperty(`--panel-radius`,`0`)}else e.style.setProperty(`--panel-clip`,`none`),e.style.setProperty(`--panel-radius`,n===`left`?`0 ${t.radiusPx}px 0 0`:`${t.radiusPx}px 0 0 0`)}function qp(e){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return t.setAttribute(`viewBox`,`0 0 ${e.width} ${e.height}`),t.setAttribute(`width`,String(e.width)),t.setAttribute(`height`,String(e.height)),t.innerHTML=e.inner,t}var Jp=class{handlers;root;onResize;nameEl;metaEl;activityEl;statsEl;countEl;chipsEl;deployEl;deployFillEl;deployLabelEl;lastName=``;lastMeta=``;lastActivity=``;lastStats=``;lastCount=``;lastChipSignature=``;lastDeploy=``;lastVisible=null;constructor(e,t,n){this.handlers=n,im();let r=Wp[t];this.root=Yp(`div`,`hrp hrp-unit`),this.root.dataset.faction=t,Kp(this.root,r,`left`);let i=qp(r.cornerLeft);i.classList.add(`hrp-corner`);let a=Yp(`div`,`hrp-shell`),o=Yp(`div`,`hrp-body`),s=Yp(`div`,`hrp-lead`),c=Yp(`div`,`hrp-portrait`);c.append(em(),tm()),s.append(c);let l=Yp(`div`,`hrp-lead-text`);this.nameEl=Yp(`div`,`hrp-name`),this.metaEl=Yp(`div`,`hrp-meta`),this.activityEl=Yp(`div`,`hrp-activity`),this.statsEl=Yp(`div`,`hrp-stats`),l.append(this.nameEl,this.metaEl,this.activityEl,this.statsEl),s.append(l);let u=Yp(`div`,`hrp-rail`);this.countEl=Yp(`div`,`hrp-count`),this.chipsEl=Yp(`div`,`hrp-chips`),this.deployEl=document.createElement(`button`),this.deployEl.type=`button`,this.deployEl.className=`hrp-deploy`,this.deployFillEl=Yp(`div`,`hrp-deploy-fill`),this.deployLabelEl=Yp(`span`,`hrp-deploy-label`),this.deployEl.append(this.deployFillEl,nm(),this.deployLabelEl),this.deployEl.addEventListener(`click`,()=>this.handlers.onDeploy()),u.append(this.countEl,this.chipsEl,this.deployEl),o.append(s,Yp(`div`,`hrp-divider`),u),a.append(o),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(Xp()))}render(e){let t=e.mode!==`none`&&e.leader!==null;if(t!==this.lastVisible&&(this.root.classList.toggle(`shown`,t),this.lastVisible=t),!t||!e.leader)return;let n=e.leader;this.write(this.nameEl,`lastName`,n.name),this.write(this.metaEl,`lastMeta`,Zp(n)),this.write(this.activityEl,`lastActivity`,n.activity??``),this.activityEl.classList.toggle(`empty`,n.activity===null);let r=`${n.humansOnboard?`${n.humansOnboard.current}/${n.humansOnboard.max}`:``} ${n.health?`${n.health.current}/${n.health.max}`:`none`}`;r!==this.lastStats&&(this.statsEl.replaceChildren(...n.humansOnboard?[Qp(`HUMANS`,`${Math.round(n.humansOnboard.current)}/${n.humansOnboard.max}`)]:[],$p(n.health)),this.lastStats=r),this.write(this.countEl,`lastCount`,e.selectedCount>1?`${e.selectedCount} SELECTED`:``),this.countEl.classList.toggle(`empty`,e.selectedCount<=1),this.root.dataset.inspect=e.inspectOnly?`true`:`false`;let i=e.tallies.map(e=>`${e.typeId}:${e.count}:${+!!e.isLeader}`).join(`|`);i!==this.lastChipSignature&&(this.chipsEl.replaceChildren(...e.tallies.map(e=>this.chip(e.typeId,e.count,e.isLeader))),this.lastChipSignature=i),this.paintDeploy(e.inspectOnly?{kind:`unable`}:n.deployState)}chip(e,t,n){let r=document.createElement(`button`);r.type=`button`,r.className=n?`hrp-chip leader`:`hrp-chip`,r.title=e;let i=Yp(`div`,`hrp-chip-well`);i.append(em());let a=Yp(`span`,`hrp-chip-count`);return a.textContent=`×${t}`,r.append(i,a),r.addEventListener(`click`,()=>this.handlers.onIsolateType(e)),r}paintDeploy(e){let t=e.kind===`transitioning`?`transitioning:${e.to}:${Math.round(e.progress*20)}`:e.kind;t!==this.lastDeploy&&(this.lastDeploy=t,this.root.dataset.deploy=e.kind,this.deployEl.hidden=e.kind===`unable`,this.deployEl.disabled=e.kind===`transitioning`,e.kind===`transitioning`?(this.deployFillEl.style.width=`${Math.round(e.progress*100)}%`,this.deployLabelEl.textContent=e.to?`DEPLOYING`:`PACKING UP`):(this.deployFillEl.style.width=`0%`,this.deployLabelEl.textContent=e.kind===`deployed`?`DEPLOYED`:`DEPLOY`))}write(e,t,n){this[t]!==n&&(e.textContent=n,this[t]=n)}};function Yp(e,t){let n=document.createElement(e);return n.className=t,n}function Xp(){return Math.max(.7,Math.min(1,window.innerWidth/Gp))}function Zp(e){return`${e.faction===`machines`?`MACHINES`:`ANCIENT ONES`} · ${e.role.toUpperCase()}`}function Qp(e,t){let n=Yp(`div`,`hrp-stat`),r=Yp(`span`,`hrp-stat-label`);r.textContent=e;let i=Yp(`span`,`hrp-stat-value`);return i.textContent=t,n.append(r,i),n}function $p(e){let t=Yp(`div`,`hrp-stat`),n=Yp(`span`,`hrp-stat-label`);if(n.textContent=`HEALTH`,t.append(n),!e){let e=Yp(`span`,`hrp-stat-value pending`);return e.textContent=`— M5`,t.append(e),t}let r=Yp(`div`,`hrp-health`),i=Math.max(+(e.current>0),Math.floor(e.current/e.max*12));for(let e=0;e<12;e++){let t=Yp(`i`,e<i?`hrp-pip on`:`hrp-pip`);r.append(t)}t.append(r);let a=Yp(`span`,`hrp-stat-value`);return a.textContent=`${Math.max(0,Math.ceil(e.current))}/${e.max}`,t.append(a),t}function em(){return Yp(`div`,`hrp-placeholder`)}function tm(){let e=Yp(`div`,`hrp-portrait-label`);return e.textContent=`unit portrait`,e}function nm(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`width`,`22`),e.setAttribute(`height`,`22`),e.classList.add(`hrp-deploy-icon`),e.innerHTML=`<rect x="9" y="4" width="6" height="11" fill="currentColor"/>
    <rect x="5" y="17" width="14" height="1.8" fill="currentColor"/>
    <path d="M2 12 L6 8.5 V15.5 Z" fill="currentColor"/>
    <path d="M22 12 L18 8.5 V15.5 Z" fill="currentColor"/>`,e}var rm=!1;function im(){if(rm)return;rm=!0;let e=document.createElement(`style`);e.textContent=am,document.head.append(e)}var am=`
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
`,om=class{handlers;root;onResize;titleEl;stateEl;guidanceEl;humansEl;gridEl;queueRowEl;queueEl;tierEl;cancelSummonEl;noticeEl;producer={kind:`unit`,id:-1};lastTitle=``;lastState=``;lastGuidance=``;lastHumans=``;lastGridSignature=``;lastQueueSignature=``;lastTier=``;lastActiveSummon=null;lastNotice=null;lastVisible=null;constructor(e,t,n){this.handlers=n,im(),dm();let r=Wp[t];this.root=sm(`div`,`hrp hrp-build`),this.root.dataset.faction=t,Kp(this.root,r,`right`);let i=qp(r.cornerRight);i.classList.add(`hrp-corner`);let a=sm(`div`,`hrp-shell`),o=sm(`div`,`hrpb-head`),s=sm(`div`,`hrpb-heading`);this.titleEl=sm(`div`,`hrp-name`),this.stateEl=sm(`div`,`hrp-meta`),this.guidanceEl=sm(`div`,`hrpb-guidance`),s.append(this.titleEl,this.stateEl,this.guidanceEl);let c=sm(`div`,`hrpb-bank`),l=sm(`span`,`hrp-stat-label`);l.textContent=`HUMANS`,this.humansEl=sm(`span`,`hrpb-humans`),c.append(l,this.humansEl),o.append(s,c),this.gridEl=sm(`div`,`hrpb-grid`);let u=sm(`div`,`hrpb-foot`);this.queueRowEl=sm(`div`,`hrpb-queue-row`);let d=sm(`span`,`hrp-stat-label`);d.textContent=`QUEUE`,this.queueEl=sm(`div`,`hrpb-queue`),this.queueRowEl.append(d,this.queueEl),this.tierEl=document.createElement(`button`),this.tierEl.type=`button`,this.tierEl.className=`hrpb-tier`,this.tierEl.addEventListener(`click`,()=>this.handlers.onUnlockTier2()),this.cancelSummonEl=document.createElement(`button`),this.cancelSummonEl.type=`button`,this.cancelSummonEl.className=`hrpb-cancel-summon`,this.cancelSummonEl.addEventListener(`click`,()=>this.handlers.onCancelSummon(this.producer)),u.append(this.queueRowEl,sm(`div`,`hrpb-spacer`),this.cancelSummonEl,this.tierEl),this.noticeEl=sm(`div`,`hrpb-notice`),a.append(o,this.gridEl,u,this.noticeEl),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(Xp()))}render(e){if(e.visible!==this.lastVisible&&(this.root.classList.toggle(`shown`,e.visible),this.lastVisible=e.visible),!e.visible)return;this.producer=e.producer,e.title!==this.lastTitle&&(this.titleEl.textContent=e.title,this.lastTitle=e.title),e.state!==this.lastState&&(this.stateEl.textContent=e.state,this.lastState=e.state),e.guidance!==this.lastGuidance&&(this.guidanceEl.textContent=e.guidance,this.lastGuidance=e.guidance);let t=String(Math.floor(e.humans));t!==this.lastHumans&&(this.humansEl.textContent=t,this.lastHumans=t);let n=e.producesUnits?e.producible.map(e=>`${e.typeId}:${+!!e.enabled}:${+!!e.lockedByTier}:${+!!e.unaffordable}`).join(`|`):`none`;n!==this.lastGridSignature&&(this.gridEl.classList.toggle(`empty`,!e.producesUnits),this.gridEl.replaceChildren(...e.producesUnits?e.producible.map(e=>this.tile(e)):[cm()]),this.lastGridSignature=n),this.queueRowEl.classList.toggle(`empty`,!e.producesUnits);let r=e.activeSummon?`${e.activeSummon.typeId}:${e.activeSummon.summoning}:${Math.round(e.activeSummon.progress*100)}`:``;r!==this.lastActiveSummon&&(this.cancelSummonEl.hidden=e.activeSummon===null,this.cancelSummonEl.textContent=e.activeSummon?`CANCEL ${e.activeSummon.summoning?`SUMMON`:`APPROACH`} · FULL REFUND`:``,this.lastActiveSummon=r);let i=e.queue.map((e,t)=>`${e.typeId}:${t===0?Math.round(e.progress*20):0}`).join(`|`);i!==this.lastQueueSignature&&(this.queueEl.replaceChildren(...e.queue.map((e,t)=>lm(e.name,t===0?e.progress:0,e.secondsLeft,t===0))),this.lastQueueSignature=i);let a=`${e.tier2.unlocked}:${e.tier2.affordable}`;a!==this.lastTier&&(this.tierEl.hidden=e.tier2.unlocked,this.tierEl.disabled=!e.tier2.affordable,this.tierEl.textContent=`UNLOCK TIER 2 · ${e.tier2.cost}`,this.lastTier=a),e.notice!==this.lastNotice&&(this.noticeEl.textContent=e.notice??``,this.noticeEl.classList.toggle(`shown`,e.notice!==null),this.lastNotice=e.notice)}tile(e){let t=document.createElement(`button`);t.type=`button`,t.className=`hrpb-tile`,t.disabled=!e.enabled,t.title=e.lockedByTier?`${e.name} — requires Tier ${e.tier}`:e.unaffordable?`${e.name} — costs ${e.cost} Humans`:e.name,e.lockedByTier&&(t.dataset.locked=`tier`);let n=sm(`div`,`hrpb-well`);if(e.lockedByTier){let t=sm(`span`,`hrpb-tier-badge`);t.textContent=`TIER ${e.tier}`,n.append(t)}else n.append(sm(`div`,`hrp-placeholder`));let r=sm(`span`,`hrpb-name`);r.textContent=e.name;let i=sm(`div`,`hrpb-costs`),a=sm(`span`,e.unaffordable?`hrpb-cost short`:`hrpb-cost`);a.textContent=String(e.cost);let o=sm(`span`,`hrpb-time`);return o.textContent=`${e.seconds}s`,i.append(a,o),t.append(n,r,i),t.addEventListener(`click`,()=>e.action===`summon`?this.handlers.onSummon(this.producer,e.typeId):this.handlers.onProduce(this.producer,e.typeId)),t}};function sm(e,t){let n=document.createElement(e);return n.className=t,n}function cm(){let e=sm(`div`,`hrpb-note`);return e.textContent=`Builds no units. Harvesters deliver here; production is the factory’s.`,e}function lm(e,t,n,r){let i=sm(`div`,r?`hrpb-slot active`:`hrpb-slot`);if(i.title=e,r){let e=sm(`div`,`hrpb-slot-fill`);e.style.height=`${Math.round(t*100)}%`;let r=sm(`span`,`hrpb-slot-label`);r.textContent=`${n.toFixed(1)}s`,i.append(e,r)}return i}var um=!1;function dm(){if(um)return;um=!0;let e=document.createElement(`style`);e.textContent=fm,document.head.append(e)}var fm=`
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
`,pm=1920,mm=5,hm=4,gm=30,_m=class{onCommand;root;onResize;skin;humansTrough;meterTroughs;divider;clockEl;alertEl;bannerEl;onBannerTransitionEnd;buttons=new Map;lastClock=``;lastBanner=null;lastAlert=null;constructor(e,t,n){this.onCommand=n,this.skin=Yi[t.faction],jm(),this.root=ym(`div`,`hud`),this.root.dataset.faction=t.faction,this.root.style.setProperty(`--line`,this.skin.line),this.root.style.setProperty(`--chrome`,this.skin.chrome),this.root.style.setProperty(`--plate`,this.skin.plate),this.root.style.setProperty(`--on-plate`,this.skin.onPlate),this.root.style.setProperty(`--pip-on`,this.skin.pipOn),this.root.style.setProperty(`--pip-gap`,this.skin.pipGap),this.root.style.setProperty(`--pip-off`,this.skin.pipOff),this.root.style.setProperty(`--pip-off-gap`,this.skin.pipOffGap),this.root.style.setProperty(`--accent`,this.skin.accent),this.root.style.setProperty(`--label`,this.skin.label),this.root.style.setProperty(`--warn`,this.skin.warn),this.root.style.setProperty(`--go`,this.skin.go),this.root.style.setProperty(`--icon-stroke`,this.skin.outline??`transparent`),this.root.style.setProperty(`--hud-font`,this.skin.font),this.root.style.setProperty(`--band`,this.skin.band),this.root.style.setProperty(`--on-band`,this.skin.onBand),this.root.style.setProperty(`--rail`,`${this.skin.railPx}px`),this.root.style.setProperty(`--divider`,this.skin.divider),this.root.style.setProperty(`--radius`,this.skin.radius),this.root.style.setProperty(`--outline`,this.skin.outline??this.skin.line),this.root.style.setProperty(`--chamfer`,this.skin.chamferPx>0?`polygon(${this.skin.chamferPx}px 0, calc(100% - ${this.skin.chamferPx}px) 0, 100% 100%, 0 100%)`:`none`);let r=ym(`div`,`hud-band`);r.append(wm(this.skin,`left`));let i=ym(`div`,`hud-meters`),a=ym(`div`,`hud-meter`);a.append(bm(`HUMANS`)),this.humansTrough=xm(t.humans.trough.pips),a.append(this.humansTrough.el),i.append(a);let o=ym(`div`,`hud-meter`);o.append(bm(t.meter.label)),this.divider=ym(`div`,`hud-divider`);let s=[];t.meter.troughs.forEach((e,t)=>{t>0&&o.append(this.divider);let n=xm(e.pips);s.push(n),o.append(n.el)}),this.meterTroughs=s,i.append(o),r.append(i,wm(this.skin,`right`)),this.root.append(r);let c=ym(`div`,`hud-island`);c.append(Tm(Em())),this.alertEl=Tm(Dm()),this.alertEl.classList.add(`hud-alert`),c.append(this.alertEl),this.clockEl=ym(`div`,`hud-time`),c.append(this.clockEl),this.root.append(c),this.bannerEl=ym(`div`,`hud-banner`),this.onBannerTransitionEnd=e=>{e.propertyName===`opacity`&&!this.bannerEl.classList.contains(`shown`)&&(this.bannerEl.textContent=``)},this.bannerEl.addEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.append(this.bannerEl);let l=ym(`div`,`hud-column`),u=ym(`div`,`hud-collapse`);u.append(Cm(this.skin.badge)),l.append(u,ym(`div`,`hud-spine`));let d=ym(`div`,`hud-cluster`);for(let e of t.commands){let t=document.createElement(`button`);t.className=`hud-button`,t.type=`button`,t.title=e.label,t.setAttribute(`aria-label`,e.label),t.innerHTML=Om(e.id,this.skin),t.addEventListener(`click`,()=>this.onCommand(e.id)),this.buttons.set(e.id,t),d.append(t)}l.append(d),this.root.append(l),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize),this.render(t)}dispose(){window.removeEventListener(`resize`,this.onResize),this.bannerEl.removeEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.remove()}rescale(){let e=Math.max(.7,Math.min(1,window.innerWidth/pm));this.root.style.setProperty(`--hud-scale`,String(e))}render(e){vm(this.humansTrough,e.humans.trough),e.meter.troughs.forEach((e,t)=>{let n=this.meterTroughs[t];n&&vm(n,e)}),this.divider.classList.toggle(`lit`,e.meter.dividerLit),e.clock!==this.lastClock&&(this.clockEl.textContent=e.clock,this.lastClock=e.clock),e.alert!==this.lastAlert&&(this.alertEl.classList.toggle(`on`,e.alert),this.lastAlert=e.alert),e.banner!==this.lastBanner&&(e.banner!==null&&(this.bannerEl.textContent=e.banner),this.bannerEl.classList.toggle(`shown`,e.banner!==null),this.lastBanner=e.banner);for(let t of e.commands){let e=this.buttons.get(t.id);e&&(e.disabled=!t.enabled)}}};function vm(e,t){e.pips.forEach((e,n)=>{let r=n<t.filled;e.classList.toggle(`on`,r),e.classList.toggle(`accent`,r&&t.accent)})}function ym(e,t){let n=document.createElement(e);return n.className=t,n}function bm(e){let t=ym(`div`,`hud-label`);return t.textContent=e,t}function xm(e){let t=ym(`div`,`hud-trough`),n=[];for(let r=0;r<e;r++){let e=ym(`i`,`hud-pip`);n.push(e),t.append(e)}return{el:t,pips:n}}function Sm(e,t,n){let r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${e} ${t}`),r.setAttribute(`width`,String(e)),r.setAttribute(`height`,String(t)),r.innerHTML=n,r}function Cm(e){return Sm(e.width,e.height,e.inner)}function wm(e,t){let n=Cm(e.cap);return n.classList.add(`hud-cap`,t),n}function Tm(e){let t=ym(`div`,`hud-plate`);return t.append(e),t}function Em(){return Sm(22,22,`<circle cx="11" cy="11" r="8" fill="none" stroke="var(--on-plate)" stroke-width="2"/>
     <path d="M11 11 V5 A6 6 0 0 1 17 11 Z" fill="var(--on-plate)"/>`)}function Dm(){return Sm(22,22,`<rect x="9" y="4" width="4" height="9" rx="1.4" fill="currentColor"/>
     <rect x="8.5" y="15" width="5" height="3.2" rx="1" fill="currentColor"/>`)}function Om(e,t){switch(e){case`primary`:return`<svg viewBox="0 0 ${t.primaryIcon.width} ${t.primaryIcon.height}"
        width="${gm}" height="${gm}">${t.primaryIcon.inner}</svg>`;case`regroup`:return km(`M12 11 L8.5 6.5 H10.8 V3 H13.2 V6.5 H15.5 Z`,`var(--warn)`,45);case`scatter`:return km(`M12 3 L15.5 7.5 H13.2 V11 H10.8 V7.5 H8.5 Z`,`var(--go)`,0);case`cancel`:return`<svg viewBox="0 0 24 24" width="${gm}" height="${gm}">
        <circle cx="12" cy="12" r="9" fill="var(--icon-stroke)" stroke="#ffffff" stroke-width="2"/>
        <path d="M8.4 8.4 L15.6 15.6 M15.6 8.4 L8.4 15.6" stroke="#ffffff" stroke-width="2.6"
              stroke-linecap="round"/>
      </svg>`}}function km(e,t,n){return`<svg viewBox="0 0 24 24" width="${gm}" height="${gm}">
    <g transform="rotate(${n} 12 12)">${[0,90,180,270].map(n=>`<path d="${e}" fill="${t}" stroke="var(--icon-stroke)" stroke-width="1.1" stroke-linejoin="round" transform="rotate(${n} 12 12)"/>`).join(``)}</g>
  </svg>`}var Am=!1;function jm(){if(Am)return;Am=!0;let e=document.createElement(`style`);e.textContent=Mm,document.head.append(e)}var Mm=`
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
  gap: ${hm}px;
  align-items: stretch;
  height: 17px;
  padding: 2px 3px;
  background: var(--pip-off-gap);
  border: 1px solid rgba(255, 255, 255, 0.42);
}
.hud-pip {
  width: ${mm}px;
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
`;function Nm(e,t){if(!t)return{kind:`unable`};if(e.deployTimer>0){let t=Math.max(Gc,1);return{kind:`transitioning`,to:e.deployTarget,stepsLeft:e.deployTimer,progress:Math.min(Math.max(1-e.deployTimer/t,0),1)}}return e.deployed?{kind:`deployed`}:{kind:`mobile`}}function Pm(e){return e.harvestingBuildingId===null?e.harvestingCrowdId===null?e.cargo>0?`Carrying ${Math.round(e.cargo)}`:e.unreachable?`Could not reach its goal`:e.path.length>0?`Moving`:null:`Harvesting a street crowd`:`Harvesting`}function Fm(e){let t=xl(e.typeId);return{typeId:t.id,name:t.name,faction:t.faction,role:t.role,cost:t.cost,health:{current:e.health,max:t.health},humansOnboard:t.faction===`machines`&&t.role===`harvester`?{current:e.cargo,max:60}:null,deployState:Nm(e,!!t.canDeploy),activity:Pm(e)}}function Im(e,t,n){let r=e.playerFaction;if(n&&e.army.typeOf(n).faction!==r)return{mode:`single`,faction:r,selectedCount:1,inspectOnly:!0,leader:Fm(n),tallies:[]};let i=t.list(),a=t.primary(),o=a===void 0?void 0:e.army.get(a);if(!o)return{mode:`none`,faction:r,selectedCount:0,inspectOnly:!1,leader:null,tallies:[]};let s=new Map;for(let t of i){let n=e.army.get(t);n&&s.set(n.typeId,(s.get(n.typeId)??0)+1)}let c=[...s.entries()].map(([e,t])=>({typeId:e,name:xl(e).name,count:t,isLeader:e===o.typeId})).sort((e,t)=>t.count-e.count||e.typeId.localeCompare(t.typeId));return{mode:i.length>1?`multi`:`single`,faction:r,selectedCount:i.length,inspectOnly:!1,leader:Fm(o),tallies:i.length>1?c:[]}}var Lm={visible:!1,faction:`machines`,producer:{kind:`unit`,id:-1},title:``,state:``,guidance:``,humans:0,producesUnits:!1,producible:[],queue:[],activeSummon:null,tier2:{unlocked:!1,cost:Kc.tier2Cost,affordable:!1},notice:null};function Rm(e,t,n,r){if(!t)return Lm;let i=xl(t.typeId);if(!i.producesUnits&&!i.summonTypes||i.faction!==e.playerFaction)return Lm;let a=e.resources.humans,o=e.constructionSites.find(e=>e.builderId===t.id),s=o?(()=>{let e=xl(o.structureTypeId),t=Math.max(e.constructionSteps??e.buildSteps,1);return{typeId:e.id,name:e.name,summoning:o.summoning,progress:o.summoning?Math.min(Math.max(1-o.remainingSteps/t,0),1):0}})():null,c=i.summonTypes?i.summonTypes.map(e=>xl(e)).map(t=>({action:`summon`,typeId:t.id,name:t.name,cost:e.freeProduction?0:t.cost,seconds:Math.round((t.constructionSteps??t.buildSteps)/30),tier:t.tier,lockedByTier:t.tier>e.techTier,unaffordable:!e.freeProduction&&a<t.cost,enabled:!s&&t.tier<=e.techTier&&(e.freeProduction||a>=t.cost)})):yl.filter(e=>i.productionTypes?.includes(e.id)??(e.faction===i.faction&&e.role!==`harbinger`&&!e.processesHumans&&!e.producesUnits)).map(n=>({action:`produce`,typeId:n.id,name:n.name,cost:e.freeProduction?0:n.cost,seconds:Math.round(n.buildSteps/30),tier:n.tier,lockedByTier:n.tier>e.techTier,unaffordable:!e.freeProduction&&a<n.cost,enabled:n.tier<=e.techTier&&(e.freeProduction||a>=n.cost)&&t.deployed&&t.deployTimer===0})).sort((e,t)=>e.tier-t.tier||e.cost-t.cost),l=t.fabricationPad?.occupantId,u=l==null?void 0:e.army.get(l),d=u?u.hasGoal?`CLEARING FABRICATION PAD`:`WAITING FOR PAD CLEARANCE`:t.queue.length?`FABRICATING — ${xl(t.queue[0].typeId).name.toUpperCase()}`:`DEPLOYED`,f=r?.builderId===t.id?xl(r.typeId):void 0,p=i.fabricationPadOutputTypeId?xl(i.fabricationPadOutputTypeId):void 0,m=i.summonTypes?f?`PLACE ${f.name.toUpperCase()} ON CLEAR GROUND — ESC OR RIGHT-CLICK TO CANCEL`:i.id===`ancient-harbinger`?`SUMMON ROSTER — ANCIENT INFANTRY COMES FROM A SLIME TEMPLE`:`INFANTRY ROSTER ONLY`:p?t.deployed||t.deployTimer>0?`${p.name.toUpperCase()} FABRICATION PAD RESERVED BESIDE PRODUCER`:`DEPLOY REQUIRES CLEAR SPACE FOR A ${p.name.toUpperCase()} FABRICATION PAD`:i.productionTypes?.length===1?`${xl(i.productionTypes[0]).name.toUpperCase()} ROSTER ONLY`:`FABRICATION ROSTER — ${(i.productionTypes??[]).map(e=>xl(e).name.toUpperCase()).join(`, `)}`;return{visible:!0,faction:i.faction,producer:{kind:`unit`,id:t.id},title:i.summonTypes?`${i.name} — Summon`:i.name,state:i.summonTypes?s?`${s.summoning?`SUMMONING`:`HARBINGER APPROACHING`} — ${s.name.toUpperCase()}`:`CHOOSE A SUMMON`:t.deployTimer>0?t.deployTarget?`DEPLOYING`:`PACKING UP`:t.deployed?i.fabricationPadOutputTypeId?d:t.queue.length?`DEPLOYED · PRODUCING`:`DEPLOYED`:`MOBILE — CANNOT PRODUCE`,guidance:m,humans:a,producesUnits:!0,producible:c,queue:t.queue.map((e,t)=>({typeId:e.typeId,name:xl(e.typeId).name,progress:t===0?1-e.remainingSteps/Math.max(xl(e.typeId).buildSteps,1):0,secondsLeft:e.remainingSteps/30})),activeSummon:s,tier2:{unlocked:e.techTier>=2,cost:Kc.tier2Cost,affordable:a>=Kc.tier2Cost},notice:n}}var zm=class{windowSize;samples=[];constructor(e=90){this.windowSize=e}add(e){e<=0||!Number.isFinite(e)||(this.samples.push(e),this.samples.length>this.windowSize&&this.samples.shift())}get sampleCount(){return this.samples.length}get fps(){if(this.samples.length===0)return 0;let e=this.samples.reduce((e,t)=>e+t,0);return this.samples.length/e*1e3}get worstFrameMs(){return this.samples.length===0?0:Math.max(...this.samples)}get medianFrameMs(){if(this.samples.length===0)return 0;let e=[...this.samples].sort((e,t)=>e-t);return e[Math.floor(e.length/2)]??0}get missedVsyncCount(){let e=this.medianFrameMs;if(e<=0)return 0;let t=e*1.5,n=0;for(let e of this.samples)e>t&&n++;return n}},Bm=60,Vm=[{id:`dev-controls`,label:`Dev Controls`},{id:`statistics`,label:`Statistics`}],Hm=class{el;activeTab=`dev-controls`;constructor(e){this.el=e,this.el.addEventListener(`pointerdown`,e=>{let t=e.target?.closest(`[data-overlay-tab]`);!t||!Um(t.dataset.overlayTab)||(this.setActiveTab(t.dataset.overlayTab),t.focus())})}render(e,t){let n=t.medianFrameMs>0?1e3/t.medianFrameMs:0,r=t.missedVsyncCount,i=r>0?`${r} missed vsync / ${t.sampleCount} frames`:n>=59?`meets ${Bm} fps target`:`vsync-limited at ~${n.toFixed(1)} Hz`,a=e.groups.length>0?e.groups.join(`,`):`—`,[o=``,s=``,c=``,l=``,u=``,d=``,f=``,p=``]=[`<b>HUMAN RESOURCES</b>  ${e.battlefield?`BATTLE PLAYGROUND`:`M5`} · playing ${e.faction}`,``,`render     ${e.fps.toFixed(1)} fps  (${i})`,`frame      median ${t.medianFrameMs.toFixed(1)} ms · worst ${t.worstFrameMs.toFixed(1)} ms`,...e.detailed?[`detailed  ${e.detailed.drawCalls} draw calls · ${e.detailed.triangles.toLocaleString()} triangles`,`models    ${e.detailed.units.loadedModels} loaded · ${e.detailed.units.loadingModels} loading · ${e.detailed.units.failedModels} failed`,`detail    ${e.detailed.units.visible} visible · ${e.detailed.units.selection} selection · ${e.detailed.units.occlusion} occlusion · ${e.detailed.units.fallbacks} fallback`]:[],`sim        ${e.simHz.toFixed(2)} Hz   step ${e.stepCount}`,`alpha      ${e.alpha.toFixed(3)}`,`dropped    ${e.droppedMs.toFixed(0)} ms sim time`,``,`units      ${e.units}   moving ${e.unitsMoving}   selected ${e.selected}`,`blocked    ${e.unitsBlocked}   stalled ${e.unitsStalled}   short of goal ${e.unitsUnreached}`,`groups     ${a}`,`paths      ${e.pathsTotal} searched · ${e.pathsQueued} queued`,``,`nav        ${e.navCells} cells   ${e.navRebuilds} local rebuilds`,`rebuild    ${e.navLastRebuildCells} cells in ${e.navRebuildMs.toFixed(2)} ms`,`passable   small ${(e.smallPassable*100).toFixed(1)}% · large ${(e.largePassable*100).toFixed(1)}%`,`  strict   small ${(e.smallPassableStrict*100).toFixed(1)}% · large ${(e.largePassableStrict*100).toFixed(1)}%`,`           (large passes residential + commercial, so it reads above small; strict counts`,`            only ground with no building on it)`,`reach      small ${(e.reachSmall*100).toFixed(1)}% · large ${(e.reachLarge*100).toFixed(1)}% of the shard`,`  strict   large ${(e.reachLargeStrict*100).toFixed(1)}%   (the share razing still opens — spec §15.4 criterion 5)`,`at focus   small ${Wm(e.atFocusSmall)} · large ${Wm(e.atFocusLarge)}`,`           (measured where the camera was when last probed — P re-probes)`,``,`camera     ${e.distance.toFixed(0)} m   pitch ${e.pitchDeg.toFixed(1)}°`,`zoom       ${(e.zoomFraction*100).toFixed(0)}%`,`focus      x ${e.focusX.toFixed(0)}  z ${e.focusZ.toFixed(0)}`,``,`city       ${e.cityBuildings} buildings   seed ${e.seed}`,`state      intact ${e.cityIntact} · damaged ${e.cityDamaged} · rubble ${e.cityRubble}`,`population ${Math.round(e.populationRemaining)} / ${e.populationTotal} humans left in the city`,`displaced  ${Math.round(e.civilianHumans)} humans in the street · ${e.civilianCrowds} crowds`,`           (damage must move humans here, not delete them)`,`           building occupancy indicators ${e.populationLabels?`on`:`off`}   (I toggles; harvester selection)`,``,`humans     ${Math.floor(e.humans)} / ${e.humansCap}   ${e.humansPerMinute.toFixed(0)}/min`,`charge     ${Math.floor(e.charge)} / ${e.chargeCap} pips · ${e.chargeSegments} banked   ${e.chargePerMinute.toFixed(1)}/min`,`in transit ${Math.round(e.cargoInTransit)} carried   ${e.harvesting} harvesting · ${e.harvestIdle} idle`,`           (Machines sawtooth as they haul · Ancient Ones must read 0)`,`           (idle = standing order, nothing within retarget range)`,`tech       tier ${e.techTier}   ${e.structures} structures   ${e.queued} queued`,`deployed   ${e.unitsDeployed} settled · ${e.unitsDeploying} transforming`,``,`WASD pan · wheel zoom · drag select · right-click move`,`shift+click add · digit recall group · shift+digit assign`,`X damage nearest · Z raze at focus · B cycle all states · P re-probe`,`select harvester · click building to harvest · E harvest at focus`,`R deploy selected · V deploy factory`,`L produce Tier 1 · G produce Tier 2 · T unlock Tier 2`,`H +humans · J +charge   (debug tuning)`,`O hand player side to AI · shift+O opponent · K cycle simulation speed`,`[ previous seed · ] next seed`,`F5 quick save · F9 quick load`,`Y cycle observed faction`].join(`
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

`);this.el.innerHTML=[`<div class="overlay-heading">${o}</div>`,`<div class="overlay-tabs" role="tablist" aria-label="Diagnostic categories">`,...Vm.map(e=>`<button class="overlay-tab" type="button" role="tab" id="overlay-tab-${e.id}" aria-controls="overlay-panel-${e.id}" aria-selected="${e.id===this.activeTab}" tabindex="${e.id===this.activeTab?0:-1}" data-overlay-tab="${e.id}">${e.label}</button>`),`</div>`,this.panel(`dev-controls`,y),this.panel(`statistics`,b)].join(``)}panel(e,t){return`<section class="overlay-tab-panel" role="tabpanel" id="overlay-panel-${e}" aria-labelledby="overlay-tab-${e}"${e===this.activeTab?``:` hidden`}><pre class="overlay-readout">${t}</pre></section>`}setActiveTab(e){this.activeTab=e;for(let t of this.el.querySelectorAll(`[data-overlay-tab]`)){let n=t.dataset.overlayTab===e;t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1}for(let t of this.el.querySelectorAll(`.overlay-tab-panel`))t.hidden=t.id!==`overlay-panel-${e}`}};function Um(e){return Vm.some(t=>t.id===e)}function Wm(e){return e?`reachable`:`no route`}function Gm(e,t){return e===`building`?t>=.16?`block`:e:e===`block`?t<.14?`building`:t>=.65?`district`:e:t<.6?`block`:e}function Km(e,t){let n=n=>{let r=new Map;for(let i of e.buildings){if((t[i.id]??0)<=0)continue;let e=n===`block`?i.blockId:i.districtId;if(e===void 0)continue;let a=r.get(e);a?a.push(i.id):r.set(e,[i.id])}return[...r].map(([r,i])=>{if(n===`block`){let t=e.get(i[0]??-1),n=e.blocks.find(e=>e.id===r&&(!t||ja(t.x,t.z,e.clip??[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}])));if(n)return{id:r,...n.clip?lo(n.clip):{x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2},buildingIds:i}}let a=0,o=0,s=0;for(let n of i){let r=e.get(n),i=t[n]??0;!r||i<=0||(a+=r.x*i,o+=r.z*i,s+=i)}return{id:r,x:a/s,z:o/s,buildingIds:i}})};return{block:n(`block`),district:n(`district`)}}var qm=15e3,Jm=5e3,Ym=class{city;population;capacity;root;labels=new Map;visibleKeys=new Set;blockGroups;districtGroups;point=new K;visible=!1;pinned=!1;level=`building`;presentationDirty=!0;populationDirty=!0;lastRetireCheckMs=-1/0;constructor(e,t,n,r,i){this.city=t,this.population=n,this.capacity=r,Zm(),this.root=document.createElement(`div`),this.root.className=`population-labels`,this.root.style.setProperty(`--population-accent`,Yi[i].line);let a=Km(t,r);this.blockGroups=a.block,this.districtGroups=a.district,e.append(this.root)}createLabel(e){let t=document.createElement(`span`);t.className=`population-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`population-label-count`;let r=document.createElement(`span`);r.className=`population-label-bar`;let i=document.createElement(`span`);i.className=`population-label-bar-fill`,r.append(i),t.append(n,r),this.root.append(t);let a={label:t,count:n,fill:i,left:null,top:null,text:null,width:null,lastRelevantMs:-1/0};return this.labels.set(e,a),a}get enabled(){return this.visible||this.pinned}setFaction(e){this.root.style.setProperty(`--population-accent`,Yi[e].line)}toggle(){this.pinned=!this.pinned,this.updateVisibility()}setSelectionEnabled(e){this.visible!==e&&(this.visible=e,this.updateVisibility())}updateVisibility(){let e=this.enabled;this.root.classList.toggle(`shown`,e),this.presentationDirty=!0,e||this.discardLabels()}sync({camera:e,zoomFraction:t,nowMs:n,cameraDirty:r,populationDirty:i}){if(!this.enabled)return;this.populationDirty||=i;let a=Gm(this.level,t),o=a!==this.level;if(this.level=a,!this.presentationDirty&&!o&&!r&&!this.populationDirty)return;this.presentationDirty=!1,this.populationDirty=!1,e.updateMatrixWorld();let s=new Set;if(this.level===`building`)for(let t of this.city.buildings){if((this.capacity[t.id]??0)<=0)continue;let r=Ys(t);this.syncLabel(`building:${t.id}`,t.x,r+5,t.z,[t.id],e,n,s)}else{let t=this.level===`block`?this.blockGroups:this.districtGroups;for(let r of t)this.syncLabel(`${this.level}:${r.id}`,r.x,8,r.z,r.buildingIds,e,n,s)}this.hideNoLongerVisible(s),this.visibleKeys.clear();for(let e of s)this.visibleKeys.add(e);this.retireIrrelevant(n)}syncLabel(e,t,n,r,i,a,o,s){if(this.point.set(t,n,r).project(a),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04))return;let c=0,l=0;for(let e of i)c+=this.population[e]??0,l+=this.capacity[e]??0;if(c<=0)return;let u=this.labels.get(e)??this.createLabel(e),d=`${(this.point.x*.5+.5)*100}%`,f=`${(-this.point.y*.5+.5)*100}%`,p=`HUMANS  ${Math.ceil(c)}`,m=`${Math.min(100,Math.max(0,c/Math.max(1,l)*100))}%`;u.left!==d&&(u.label.style.left=d,u.left=d),u.top!==f&&(u.label.style.top=f,u.top=f),u.text!==p&&(u.count.textContent=p,u.text=p),u.width!==m&&(u.fill.style.width=m,u.width=m),u.label.hidden&&(u.label.hidden=!1),u.lastRelevantMs=o,s.add(e)}hideNoLongerVisible(e){for(let t of this.visibleKeys){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}discardLabels(){this.root.replaceChildren(),this.labels.clear(),this.visibleKeys.clear()}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<Jm)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleKeys.has(t)||e-n.lastRelevantMs<qm||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleKeys.clear()}},Xm=!1;function Zm(){if(Xm)return;Xm=!0;let e=document.createElement(`style`);e.textContent=`
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
`,document.head.append(e)}var Qm=128,$m=48,eh=96,th=16,nh=.45,rh=.6,ih=.6,ah=25;function oh(e){let t=e.filter(e=>e>0).sort((e,t)=>e-t);return t.length===0?1:t[Math.floor((t.length-1)*.75)]}function sh(e,t){return Math.max(0,e)/Math.max(1,t)}function ch(e,t){return Math.max(0,Math.min(1,1-Math.exp(-sh(e,t))))}function lh(e){let t=new z(672498),n=new z(386795),r=new z(16765965),i=new z(16718341),a=Math.max(0,Math.min(1,e));return(a<.33?t.lerp(n,a/.33):a<.66?n.lerp(r,(a-.33)/.33):r.lerp(i,(a-.66)/.34)).getHex()}function uh(e,t){return Math.max(14,Math.max(e,t)*.45+7)}function dh(e,t,n){return n.some(n=>(n.x-e)**2+(n.z-t)**2<=200**2)}function fh(){return new N({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
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
    `})}function ph(){return new N({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
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
    `})}function mh(e,t){return new N({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:0,uniforms:{uScans:{value:e},uScanCount:t},vertexShader:`
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
      uniform vec4 uScans[${th}];
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
        for (int index = 0; index < ${th}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${ah.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float texture = 0.94 + 0.06 * sin(point.x * 0.17 + point.y * 0.11);
        gl_FragColor = vec4(palette(vHeat) * texture, ${nh.toFixed(2)} * coverage);
      }
    `})}function hh(e,t,n,r,i=!1){return new N({transparent:!0,depthWrite:!1,depthTest:!0,...i?{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}:{},side:i?2:0,uniforms:{uSources:{value:e},uScans:{value:t},uSourceCount:n,uScanCount:r},vertexShader:`
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
      uniform vec4 uSources[${eh}];
      uniform vec4 uScans[${th}];
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
        for (int index = 0; index < ${th}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${ah.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float field = 0.0;
        for (int index = 0; index < ${eh}; index++) {
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
        gl_FragColor = vec4(palette(heat) * texture, ${nh.toFixed(2)} * coverage);
      }
    `})}var gh=class{city;cityView;population;group=new i;continuousSources=Array.from({length:eh},()=>new be);continuousScans=Array.from({length:th},()=>new be);continuousSourceCount={value:0};continuousScanCount={value:0};buildingContinuousSources=[];continuousSourceScratch=[];groundMaterial=hh(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount);buildingMaterial=mh(this.continuousScans,this.continuousScanCount);clippedBuildingMaterial=hh(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);rubbleBuildingMaterial=hh(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);ground;buildingOverlays=new Map;buildingHeatAttributes=new Map;crowdGeometry=new Ve(1,32).rotateX(-Math.PI/2);crowdHeat=new g(new Float32Array($m),1);crowds;rings=new x(new n(175,200,96).rotateX(-Math.PI/2),ph(),Qm);ringMatrix=new Ae;crowdMatrix=new Ae;buildingMatrix=new Ae;heatReferencePopulation;lastHarvesterSignature=``;buildingOverlayDirty=!0;constructor(e,t,n,r){this.city=e,this.cityView=t,this.population=n,this.heatReferencePopulation=oh(r),this.rubbleBuildingMaterial.depthTest=!1,this.rubbleBuildingMaterial.side=0,this.ground=new R(new O(this.city.radius*2,this.city.radius*2).rotateX(-Math.PI/2),this.groundMaterial),this.ground.position.y=Q+.24,this.ground.frustumCulled=!1,this.ground.renderOrder=0,this.crowdGeometry.setAttribute(`instanceHeat`,this.crowdHeat),this.crowds=new x(this.crowdGeometry,fh(),$m),this.crowds.count=0,this.crowds.frustumCulled=!1,this.rings.count=0,this.rings.frustumCulled=!1,this.crowds.renderOrder=3,this.rings.renderOrder=2,this.group.add(this.ground,this.rings,this.crowds),this.syncBuildingOverlays();let i=this.cityView.buildingDamageHeatmapSources,a=i.find(e=>e.name===`destroyed-heatmap-parts`),o=i.find(e=>e.name===`destroyed-rubble-heatmap`);a&&(a.material.dispose(),a.material=this.clippedBuildingMaterial),o&&(o.material.dispose(),o.material=this.rubbleBuildingMaterial),this.group.add(...i),this.buildingOverlayDirty=!1}sync(e,t,n,r,i){i&&(this.buildingOverlayDirty=!0);let a=e.slice(0,16),o=a.length>0;if(this.group.visible=o,!o)return;let s=a.map(e=>`${e.id}:${e.x}:${e.z}`).join(`|`),c=s!==this.lastHarvesterSignature,l=c||r||i;this.lastHarvesterSignature=s,this.buildingOverlayDirty&&=(this.syncBuildingOverlays(),!1),c&&(this.syncRings(a),this.syncScans(a)),l&&(this.syncBuildingHeat(a),this.syncBuildingContinuousSources(a)),this.syncContinuousGround(t,n),this.syncCrowds(a,t,n)}dispose(){this.ground.geometry.dispose(),this.groundMaterial.dispose(),this.buildingMaterial.dispose(),this.clippedBuildingMaterial.dispose(),this.rubbleBuildingMaterial.dispose(),this.buildingHeatAttributes.clear();for(let[e,t]of this.buildingOverlays)t.geometry!==e.geometry&&t.geometry.dispose();this.buildingOverlays.clear(),this.crowdGeometry.dispose(),this.crowds.material.dispose(),this.rings.geometry.dispose(),this.rings.material.dispose()}syncBuildingOverlays(){let e=this.cityView.buildingHeatmapSources,t=new Set(e);for(let[e,n]of this.buildingOverlays)t.has(e)||(n.removeFromParent(),n.geometry!==e.geometry&&n.geometry.dispose(),n instanceof x&&this.buildingHeatAttributes.delete(n),this.buildingOverlays.delete(e));for(let t of e){let e=this.buildingOverlays.get(t);if(e){let n=t instanceof x&&this.cityView.buildingHeatmapInstanceIds.has(t);n&&e.geometry.userData.heatmapSource!==t.geometry?(e.geometry.dispose(),e.geometry=t.geometry.clone(),e.geometry.userData.heatmapSource=t.geometry):n||(e.geometry=t.geometry);continue}let n=t instanceof x&&this.cityView.buildingHeatmapInstanceIds.has(t),r=n?this.buildingMaterial:this.clippedBuildingMaterial,i=t instanceof x?new x(n?t.geometry.clone():t.geometry,r,t.instanceMatrix.count):new R(t.geometry,r);n&&(i.geometry.userData.heatmapSource=t.geometry),i instanceof x&&t instanceof x&&(n?(i.geometry.userData.heatmapSource=t.geometry,i.count=0):(i.instanceMatrix=t.instanceMatrix,i.count=t.count)),i.frustumCulled=!1,i.renderOrder=1,this.buildingOverlays.set(t,i),this.group.add(i)}}syncBuildingHeat(e){let t=new Map,n=new Set;for(let[t,n]of this.cityView.buildingHeatmapInstanceIds){let r=this.buildingOverlays.get(t);if(!(r instanceof x))continue;let i=this.buildingHeatAttributes.get(r);(!i||i.count!==r.instanceMatrix.count)&&(i=new g(new Float32Array(r.instanceMatrix.count),1),this.buildingHeatAttributes.set(r,i)),r.geometry.setAttribute(`instanceHeat`,i);let a=0;for(let o=0;o<n.length;o++){let s=n[o],c=this.city.get(s),l=this.population[s]??0;!c||c.state===`rubble`||!dh(c.x,c.z,e)||(t.getMatrixAt(o,this.buildingMatrix),r.setMatrixAt(a,this.buildingMatrix),i.setX(a,ch(l,this.heatReferencePopulation)),a++)}r.count=a,r.instanceMatrix.needsUpdate=!0,i.needsUpdate=!0}for(let r of this.city.buildings){let i=this.population[r.id]??0;if(dh(r.x,r.z,e)){if(r.state===`rubble`){n.add(r.id);continue}r.state===`damaged`&&t.set(r.id,lh(ch(i,this.heatReferencePopulation)))}}this.cityView.syncBuildingDamageHeatmap(t,n)}syncRings(e){let t=Math.min(e.length,Qm);for(let n=0;n<t;n++){let t=e[n];this.ringMatrix.makeTranslation(t.x,Q+.32,t.z),this.rings.setMatrixAt(n,this.ringMatrix)}this.rings.count=t,this.rings.instanceMatrix.needsUpdate=!0}syncScans(e){let t=Math.min(e.length,th);this.continuousScanCount.value=t;for(let t=0;t<th;t++){let n=e[t];this.continuousScans[t].set(n?.x??0,n?.z??0,200,+!!n)}}syncCrowds(e,t,n){let r=0;for(let i of t){let t=i.prevX+(i.x-i.prevX)*n,a=i.prevZ+(i.z-i.prevZ)*n;if(!dh(t,a,e))continue;if(r>=$m)break;let o=ch(i.humans,this.heatReferencePopulation),s=14+Math.sqrt(i.humans)*2.2;this.crowdMatrix.makeScale(s,s,s),this.crowdMatrix.setPosition(t,Q+.36,a),this.crowds.setMatrixAt(r,this.crowdMatrix),this.crowdHeat.setX(r,o),r++}this.crowds.count=r,this.crowds.instanceMatrix.needsUpdate=!0,this.crowdHeat.needsUpdate=!0}syncBuildingContinuousSources(e){this.buildingContinuousSources.length=0;for(let t of this.city.buildings){let n=this.population[t.id]??0;if(t.state===`rubble`||n<=0||!dh(t.x,t.z,e))continue;let r=uh(t.width,t.depth);this.buildingContinuousSources.push(new be(t.x,t.z,r,sh(n,this.heatReferencePopulation)*rh))}}syncContinuousGround(e,t){let n=this.continuousSourceScratch;n.length=0,n.push(...this.buildingContinuousSources);for(let r of e){let e=r.prevX+(r.x-r.prevX)*t,i=r.prevZ+(r.z-r.prevZ)*t;r.humans<=0||!this.isWithinActiveScan(e,i)||n.push(new be(e,i,18+Math.sqrt(r.humans)*1.7,sh(r.humans,this.heatReferencePopulation)*ih))}n.sort((e,t)=>t.w-e.w),this.continuousSourceCount.value=Math.min(n.length,eh);for(let e=0;e<eh;e++)this.continuousSources[e].copy(n[e]??_h)}isWithinActiveScan(e,t){return this.continuousScans.some(n=>n.w>0&&(n.x-e)**2+(n.y-t)**2<=n.z**2)}},_h=new be(0,0,0,0),vh=15e3,yh=5e3,bh=`#63c174`,xh=`#e3ae4e`,Sh=`#df5b55`,Ch=class{root;labels=new Map;visibleIds=new Set;point=new K;stateDirty=!0;lastRetireCheckMs=-1/0;constructor(e){Eh(),this.root=document.createElement(`div`),this.root.className=`unit-health-labels`,e.append(this.root)}sync({army:e,camera:t,nowMs:n,cameraDirty:r,stateDirty:i,selectionDirty:a,selectedIds:o,inspectedEnemyId:s}){if(this.stateDirty||=i,!a&&!r&&!this.stateDirty&&this.visibleIds.size===0)return;this.stateDirty=!1;let c=new Set(o);t.updateMatrixWorld();let l=new Set;for(let r of e.units){let i=e.typeOf(r);if(!(r.health<i.health||c.has(r.id)||r.id===s||r.attackCooldown>0)||(this.point.set(r.x,Kl(r.typeId).maxY+3,r.z).project(t),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04)))continue;let a=this.labels.get(r.id)??this.createLabel(r.id),o=`${(this.point.x*.5+.5)*100}%`,u=`${(-this.point.y*.5+.5)*100}%`,d=Math.max(0,Math.min(1,r.health/Math.max(1,i.health))),f=`${d*100}%`,p=wh(d);a.left!==o&&(a.label.style.left=o,a.left=o),a.top!==u&&(a.label.style.top=u,a.top=u),a.width!==f&&(a.fill.style.width=f,a.width=f),a.colour!==p&&(a.fill.style.backgroundColor=p,a.colour=p),a.label.hidden&&(a.label.hidden=!1),a.lastRelevantMs=n,l.add(r.id)}this.hideNoLongerVisible(l),this.visibleIds.clear();for(let e of l)this.visibleIds.add(e);this.retireIrrelevant(n)}createLabel(e){let t=document.createElement(`span`);t.className=`unit-health-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`unit-health-label-bar`;let r=document.createElement(`span`);r.className=`unit-health-label-bar-fill`,n.append(r),t.append(n),this.root.append(t);let i={label:t,fill:r,left:null,top:null,width:null,colour:null,lastRelevantMs:-1/0};return this.labels.set(e,i),i}hideNoLongerVisible(e){for(let t of this.visibleIds){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<yh)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleIds.has(t)||e-n.lastRelevantMs<vh||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleIds.clear()}};function wh(e){return e<.3?Sh:e<.6?xh:bh}var Th=!1;function Eh(){if(Th)return;Th=!0;let e=document.createElement(`style`);e.textContent=`
.unit-health-labels { position: fixed; inset: 0; pointer-events: none; z-index: 9; }
.unit-health-label { position: absolute; transform: translate(-50%, -100%); width: 31px; }
.unit-health-label-bar { display: block; height: 3px; overflow: hidden; background: rgba(255, 255, 255, .2); }
.unit-health-label-bar-fill { display: block; height: 100%; background: ${bh}; transition: width .1s linear, background-color .1s linear; }
`,document.head.append(e)}var Dh=.6,Oh=1.8,kh=2696995,Ah=Q+Oh/2;function jh(){return new ye(Dh,Oh,Dh)}function Mh(){return new ve({color:kh,flatShading:!0})}var Nh=8,Ph=96;function Fh(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Ih=class{city;army;population;group=new i;civilians;matrix=new Ae;highlightGeometry=new Map;selectedGeometry;constructor(e,t,n){this.city=e,this.army=t,this.population=n,this.civilians=new x(jh(),Mh(),Ph),this.civilians.instanceMatrix.setUsage(k),this.civilians.count=0,this.civilians.frustumCulled=!1,this.group.add(this.civilians)}sync(e,t,n){let r=0,i=!1;for(let t of this.army.units){let n=t.harvestingBuildingId,a=n===null?void 0:this.city.get(n);if(!Yc(a,this.population)||Xc(t.x,t.z,a)>37**2||!Jc(this.army.typeOf(t).faction,t.cargo))continue;let o=t.x-a.x,s=t.z-a.z,c=Math.max(Math.hypot(o,s),1),l=X({x:o/c,z:s/c},-(a.rotation??0)),u=Math.min(Math.abs(l.x)>.001?a.width/2/Math.abs(l.x):1/0,Math.abs(l.z)>.001?a.depth/2/Math.abs(l.z):1/0),d=a.x+o/c*u,f=a.z+s/c*u;for(let n=0;n<Nh&&r<Ph;n++){let a=(e+n*5+t.id*11)%30/30,l=(n%3-1)*1.7,u=d+(t.x-d)*a-s/c*l,p=f+(t.z-f)*a+o/c*l;this.matrix.makeTranslation(u,Ah,p),i=Fh(this.civilians,r++,this.matrix)||i}}this.civilians.count=r,i&&(this.civilians.instanceMatrix.needsUpdate=!0);let a=n===void 0?void 0:this.city.get(n),o=Yc(a,this.population)?a:void 0;this.selectedGeometry=t&&o?this.geometryFor(o):void 0}selectionSource(){return this.selectedGeometry?{geometry:this.selectedGeometry,colour:16719904}:void 0}dispose(){for(let e of this.highlightGeometry.values())e.dispose();this.civilians.geometry.dispose(),this.civilians.material.dispose()}geometryFor(e){let t=`${e.id}:${e.state}`,n=this.highlightGeometry.get(t);if(n)return n;let r=Math.max(Ys(e),2.2),i=Lh(e.clip??this.rectangleFootprint(e),Q+.15,Q+r);return this.highlightGeometry.set(t,i),i}rectangleFootprint(e){let t=e.width/2,n=e.depth/2;return[{x:-t,z:-n},{x:t,z:-n},{x:t,z:n},{x:-t,z:n}].map(t=>{let n=X(t,e.rotation??0);return{x:e.x+n.x,z:e.z+n.z}})}};function Lh(e,t,n){let r=[],i=e.map(e=>new H(e.x,e.z));for(let e of ce.triangulateShape(i,[])){let a=i[e[0]??-1],o=i[e[1]??-1],s=i[e[2]??-1];!a||!o||!s||(r.push(a.x,n,a.y,o.x,n,o.y,s.x,n,s.y),r.push(s.x,t,s.y,o.x,t,o.y,a.x,t,a.y))}for(let e=0;e<i.length;e++){let a=i[e],o=i[(e+1)%i.length];a&&o&&r.push(a.x,t,a.y,a.x,n,a.y,o.x,t,o.y,o.x,t,o.y,a.x,n,a.y,o.x,n,o.y)}let a=new Je;return a.setAttribute(`position`,new Re(new Float32Array(r),3)),a.computeVertexNormals(),a}var Rh=2,zh=32,Bh=640,Vh=5,Hh=1.6,Uh=8;function Wh(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Gh=class{group=new i;figures;matrix=new Ae;constructor(){this.figures=new x(jh(),Mh(),Bh),this.figures.instanceMatrix.setUsage(k),this.figures.count=0,this.figures.frustumCulled=!1,this.group.add(this.figures)}sync(e,t,n,r){let i=0,a=!1,o=new Map;for(let e of r.units){if(e.harvestingCrowdId===null)continue;let t=o.get(e.harvestingCrowdId);t?t.push(e):o.set(e.harvestingCrowdId,[e])}for(let s of e){let e=s.prevX+(s.x-s.prevX)*t,c=s.prevZ+(s.z-s.prevZ)*t,l=s.trailDirX,u=s.trailDirZ,d=Math.min(Math.max(1,Math.ceil(s.humans/Rh)),zh),f=2.4+Math.sqrt(d)*1.5,p=(o.get(s.id)??[]).filter(e=>qc(e.x,e.z,s.x,s.z)<=37**2&&Jc(r.typeOf(e).faction,e.cargo)),m=Math.min(d,p.length*Uh);for(let r=0;r<d&&!(i>=Bh);r++){let o=(Kh(s.id*31+r*7+1)*2-1)*f,d=(Kh(s.id*17+r*13+2)*2-1)*f,h=r%Vh*Hh*s.trailStrength,g=e+o-l*h,_=c+d-u*h;if(r<m){let e=p[r%p.length],i=e.prevX+(e.x-e.prevX)*t,a=e.prevZ+(e.z-e.prevZ)*t,o=(n+r*5+e.id*11)%30/30;this.matrix.makeTranslation(g+(i-g)*o,Ah,_+(a-_)*o)}else this.matrix.makeTranslation(g,Ah,_);a=Wh(this.figures,i++,this.matrix)||a}if(i>=Bh)break}this.figures.count=i,a&&(this.figures.instanceMatrix.needsUpdate=!0)}dispose(){this.figures.geometry.dispose(),this.figures.material.dispose()}};function Kh(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}var qh=48,Jh=class{modelTemplate;group=new i;preview=new i;previewTypeId=null;previewUsesFallback=!1;previewDispose=()=>{};sites=new Map;constructor(e){this.modelTemplate=e,this.group.add(this.preview)}sync(e,t,n,r){if(!e)this.preview.visible=!1,this.previewTypeId!==null&&this.clearPreview();else{let n=this.modelTemplate?.(e.typeId);(this.previewTypeId!==e.typeId||this.previewUsesFallback!==!n)&&this.replacePreview(e.typeId,n),this.preview.visible=!0,this.preview.position.set(e.x,Q,e.z),this.tint(this.preview,t?7729818:15749714,t?.72:.38)}let i=new Set(n.map(e=>e.builderId));for(let[e,t]of this.sites)i.has(e)||(this.group.remove(t.group),t.dispose(),this.sites.delete(e));for(let e of n){let t=this.sites.get(e.builderId);t||(t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group)),t.usesFallback!==!this.modelTemplate?.(e.structureTypeId)&&(this.group.remove(t.group),t.dispose(),t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group)),t.group.position.set(e.x,Q+.12,e.z);let n=xl(e.structureTypeId),i=tg(e.summoning?1-e.remainingSteps/Math.max(n.constructionSteps??n.buildSteps,1):0,0,1);this.animateSite(t,i,r)}}dispose(){this.clearPreview();for(let e of this.sites.values())e.dispose();this.sites.clear(),this.group.clear()}replacePreview(e,t){this.clearPreview();let n=Xh(e),r=Zh(e,t,$h);r.group.rotation.y=Wl(e)?.bounds.yawOffset??0,n.group.position.y=.04,n.group.name=`summon-allocation`,r.group.name=`summon-preview-ghost`,this.preview.add(n.group,r.group),this.previewTypeId=e,this.previewUsesFallback=r.usesFallback,this.previewDispose=()=>{n.dispose(),r.dispose()}}clearPreview(){this.previewDispose(),this.previewDispose=()=>{},this.preview.clear(),this.previewTypeId=null,this.previewUsesFallback=!1}siteGroup(e){let t=new i,n=Yh(Qh(e.structureTypeId)),r=Zh(e.structureTypeId,this.modelTemplate?.(e.structureTypeId)),a=Kl(e.structureTypeId);return r.group.rotation.y=Wl(e.structureTypeId)?.bounds.yawOffset??0,n.group.position.y=.04,t.add(n.group,r.group),{group:t,circle:n.group,circleMaterials:n.materials,progressGeometry:n.progressGeometry,progressMaterial:n.progressMaterial,ghostMaterials:r.materials,ghost:r.group,emergenceHeight:a.maxY,usesFallback:r.usesFallback,dispose:()=>{ng(n.group),r.dispose()}}}animateSite(e,t,n){let r=Math.floor(t*100)/100;e.ghost.position.y=-e.emergenceHeight*(1-r);let i=n*.0024+e.group.id*.73,a=.16+t*.68,o=Math.sin(i)*(.13-t*.05);for(let t of e.ghostMaterials)t.opacity=tg(a+o,.06,.92);let s=.27+t*.22+Math.sin(i*1.4)*.08;for(let t of e.circleMaterials)t.opacity=tg(s,.12,.62);e.progressMaterial.opacity=tg(s+.2,.3,.82),e.progressGeometry.setDrawRange(0,Math.round(t*qh)*6);let c=1+Math.sin(i*1.4)*.035;e.circle.scale.setScalar(c),e.circle.rotation.y=i*.15}tint(e,t,n){e.traverse(e=>{!(e instanceof R)&&!(e instanceof Ge)||!(e.material instanceof ve)&&!(e.material instanceof L)&&!(e.material instanceof qe)||(e.material.color.setHex(t),e.material.opacity=n)})}};function Yh(e){let t=new i,r=[],a=e=>{let t=new ve({color:15786104,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,depthTest:!1,side:2});return t.userData.outlineParameters={visible:!1},r.push(t),t},o=(e,t,r)=>{let i=new R(new n(e,t,48),a(r));return i.rotation.x=-Math.PI/2,i.renderOrder=16,i};t.add(o(e-.62,e,.48),o(e*.56,e*.68,.38));let s=new n(e*.3,e*.42,qh);s.setDrawRange(0,0);let c=new ve({color:15786104,flatShading:!0,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,side:2});c.userData.outlineParameters={visible:!1};let l=new R(s,c);l.rotation.x=-Math.PI/2,l.renderOrder=18,t.add(l);for(let n=0;n<8;n++){let r=n/8*Math.PI*2,i=new R(new ye(.36,.08,e*.18),a(.42));i.position.set(Math.sin(r)*e*.79,.03,Math.cos(r)*e*.79),i.rotation.y=r,i.renderOrder=17,t.add(i)}return{group:t,materials:r,progressGeometry:s,progressMaterial:c}}function Xh(e){let t=xl(e);if(!t.anchoredFootprint){let t=Yh(Qh(e));return t.group.name=`summon-allocation-circle`,t.group.userData.allocatedRadius=Qh(e),{group:t.group,dispose:()=>ng(t.group)}}let n=new i,r=t.anchoredFootprint.width+12,a=t.anchoredFootprint.depth+12,o=new O(r,a),s=new Ie(o);o.dispose();let c=new qe({color:7729818,transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1});c.userData.outlineParameters={visible:!1};let l=new Ge(s,c);return l.rotation.x=-Math.PI/2,l.renderOrder=18,l.name=`summon-allocation-rectangle`,l.userData.allocatedWidth=r,l.userData.allocatedDepth=a,n.add(l),n.name=`summon-allocation-rectangle`,{group:n,dispose:()=>{s.dispose(),c.dispose(),n.clear()}}}function Zh(e,t,n=eg){if(t){let e=t.clone(!0),r=[];return e.traverse(e=>{if(!(e instanceof R))return;let t=n();e.material=t,e.castShadow=e.receiveShadow=!1,r.push(t)}),{group:e,materials:r,usesFallback:!1,dispose:()=>{r.forEach(e=>e.dispose()),e.clear()}}}let r=Kl(e),a=new i,o=n(),s=new ye(r.size.x,r.size.y,r.size.z);return s.translate(r.centre.x,r.centre.y,r.centre.z),a.add(new R(s,o)),{group:a,materials:[o],usesFallback:!0,dispose:()=>ng(a)}}function Qh(e){let t=xl(e),n=t.anchoredFootprint;return n?Math.hypot(n.width/2+6,n.depth/2+6):$(t)+6}function $h(){let e=new ve({color:14263807,flatShading:!0,transparent:!0,opacity:.48,depthWrite:!1});return e.userData.outlineParameters={visible:!1},e}function eg(){return new L({color:14263807,transparent:!0,opacity:.48,depthWrite:!1})}function tg(e,t,n){return Math.max(t,Math.min(n,e))}function ng(e){e.traverse(e=>{e instanceof R&&(e.geometry.dispose(),(e.material instanceof ve||e.material instanceof L||e.material instanceof qe)&&e.material.dispose())})}var rg=12,ig=16,ag=8844229,og=12124128;function sg(e,t,n){return Math.max(t,Math.min(n,e))}function cg(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var lg=class{modelTemplate;group=new i;cubes;matrix=new Ae;printed=new Map;completedPrints=new Map;constructing=new Map;constructor(e){this.modelTemplate=e;let t=new ve({color:ag,flatShading:!0,transparent:!0,opacity:.92,depthWrite:!1});t.userData.outlineParameters={visible:!1},this.cubes=new x(new ye(1,1,1),t,192),this.cubes.instanceMatrix.setUsage(k),this.cubes.count=0,this.cubes.frustumCulled=!1,this.cubes.renderOrder=16,this.group.add(this.cubes)}sync(e,t){let n=this.activeJobs(e);this.syncCubes(n,t),this.syncConstructionOutlines(n,t);let r=new Map;for(let n of e.units){let i=n.fabricationPad;if(!i||i.occupantId===null)continue;let a=e.get(i.occupantId);if(!a||(r.set(a.id,n.id),this.completedPrints.get(a.id)===n.id))continue;this.completedPrints.delete(a.id);let o=this.printed.get(a.id),s=this.modelTemplate(a.typeId)!==void 0;(!o||o.producerId!==n.id||o.usesFallback===s)&&(o&&this.removePrinted(o),o=this.createPrinted(a,n.id,o?.startedAt??t),this.printed.set(a.id,o),this.group.add(o.group));let c=sg((t-o.startedAt)/520,0,1);this.positionPrinted(o,a),this.setPrintedOpacity(o,c),c>=1&&(this.removePrinted(o),this.completedPrints.set(a.id,n.id))}for(let e of[...this.printed.values()])r.get(e.productId)!==e.producerId&&this.removePrinted(e);for(let[e,t]of this.completedPrints)r.get(e)!==t&&this.completedPrints.delete(e)}printedUnitIds(){return[...this.printed.keys()]}activeJobs(e){let t=[];for(let n of e.units){let r=e.typeOf(n),i=n.fabricationPad,a=n.queue[0];if(!i||i.occupantId!==null||!a||!n.deployed||n.deployTimer>0||!r.fabricationPadOutputTypeId)continue;let o=Math.max(xl(a.typeId).buildSteps,1);if(t.push({producer:n,progress:sg(1-a.remainingSteps/o,0,1)}),t.length===ig)break}return t}syncCubes(e,t){let n=0,r=!1;for(let i of e){let e=Kl(i.producer.typeId,!0),a=Q+Math.max(3,e.height*.38);for(let e=0;e<rg;e++){let o=((t*.00125+e/rg+i.producer.id*.173)%1+1)%1,s=this.constructionTarget(i,e,t),c=i.producer.x+(s.x-i.producer.x)*o,l=i.producer.z+(s.z-i.producer.z)*o,u=a+(s.y-a)*o+Math.sin(o*Math.PI)*2.2,d=1.8;this.matrix.makeScale(d,d,d),this.matrix.setPosition(c,u,l),r=cg(this.cubes,n++,this.matrix)||r}}this.cubes.count=n,r&&(this.cubes.instanceMatrix.needsUpdate=!0)}constructionTarget(e,t,n){let r=e.producer.fabricationPad,i=e.producer.queue[0].typeId,a=Kl(i),o=n*.0011+t*2.399+e.producer.id*.619,s=.14+t*.61803398875%1*.3,c=Math.cos(o)*a.size.x*s,l=Math.sin(o*1.31)*a.size.z*s,u=a.minY+a.size.y*(.16+(Math.sin(o*.73)+1)*.5*.68),d=Wl(i)?.bounds.yawOffset??0;return{x:r.x+c*Math.cos(d)+l*Math.sin(d),y:Q+u,z:r.z-c*Math.sin(d)+l*Math.cos(d)}}syncConstructionOutlines(e,t){let n=new Set;for(let r of e){let e=r.producer.queue[0].typeId;n.add(r.producer.id);let i=this.constructing.get(r.producer.id),a=this.modelTemplate(e)!==void 0;(!i||i.typeId!==e||i.usesFallback===a)&&(i&&this.removeConstructionOutline(i),i=this.createConstructionOutline(r.producer.id,e),this.constructing.set(r.producer.id,i),this.group.add(i.group));let o=r.producer.fabricationPad;i.group.position.set(o.x,Q,o.z),i.group.rotation.y=Wl(e)?.bounds.yawOffset??0;let s=t*.003+r.producer.id*.71,c=sg(.46+r.progress*.24+Math.sin(s)*.12,.28,.82);for(let e of i.materials)e.opacity=c}for(let e of[...this.constructing.values()])n.has(e.producerId)||this.removeConstructionOutline(e)}createConstructionOutline(e,t){let n=this.modelTemplate(t),r=new i,a=new qe({color:og,transparent:!0,opacity:.55,depthWrite:!1});a.userData.outlineParameters={visible:!1};let o=[a];if(n){let e=n.clone(!0);e.updateMatrixWorld(!0);let t=[];e.traverse(e=>{e instanceof R&&t.push(e)});for(let e of t){let t=new Ge(new W(e.geometry),a);t.applyMatrix4(e.matrixWorld),t.frustumCulled=!1,t.renderOrder=17,r.add(t)}}else{let e=Kl(t),n=new ye(e.size.x,e.size.y,e.size.z);n.translate(e.centre.x,e.centre.y,e.centre.z);let i=new Ge(new W(n),a);n.dispose(),i.renderOrder=17,r.add(i)}return{producerId:e,typeId:t,group:r,materials:o,usesFallback:!n,dispose:()=>{r.traverse(e=>{e instanceof Ge&&e.geometry.dispose()}),o.forEach(e=>e.dispose()),r.clear()}}}removeConstructionOutline(e){this.group.remove(e.group),e.dispose(),this.constructing.delete(e.producerId)}createPrinted(e,t,n){let r=this.modelTemplate(e.typeId);if(!r)return this.fallbackPrinted(e,t,n);let i=ht(r),a=new Map,o=[],s=[],c=e=>{let t=a.get(e);if(t)return t;let n=e.clone();return n.transparent=!0,n.opacity=0,n.depthWrite=!1,a.set(e,n),o.push(n),s.push(e.opacity),n};return i.traverse(e=>{e instanceof R&&(e.material=Array.isArray(e.material)?e.material.map(c):c(e.material),e.castShadow=e.receiveShadow=!1,e.frustumCulled=!1)}),{productId:e.id,producerId:t,typeId:e.typeId,group:i,materials:o,baseOpacities:s,usesFallback:!1,startedAt:n,dispose:()=>{o.forEach(e=>e.dispose()),i.clear()}}}fallbackPrinted(e,t,n){let r=Kl(e.typeId),a=new ye(r.size.x,r.size.y,r.size.z);a.translate(r.centre.x,r.centre.y,r.centre.z);let o=mt(ag,{transparent:!0,opacity:0,depthWrite:!1}),s=new i;return s.add(new R(a,o)),{productId:e.id,producerId:t,typeId:e.typeId,group:s,materials:[o],baseOpacities:[1],usesFallback:!0,startedAt:n,dispose:()=>{a.dispose(),o.dispose(),s.clear()}}}positionPrinted(e,t){let n=Wl(t.typeId);e.group.position.set(t.x,Q,t.z),e.group.rotation.set(0,-t.heading+(n?.bounds.yawOffset??0),0)}setPrintedOpacity(e,t){for(let n=0;n<e.materials.length;n++){let r=e.materials[n];r.opacity=e.baseOpacities[n]*t,r.depthWrite=t>=.88}}removePrinted(e){this.group.remove(e.group),e.dispose(),this.printed.delete(e.productId)}dispose(){for(let e of[...this.printed.values()])this.removePrinted(e);this.completedPrints.clear();for(let e of[...this.constructing.values()])this.removeConstructionOutline(e);this.cubes.geometry.dispose(),this.cubes.material.dispose(),this.group.clear()}},ug=class{group=new i;footprintGeometry=new Je;unitRadiusGeometry=new Je;anchoredGeometry=new Je;constructionGeometry=new Je;pathGeometry=new Je;footprints=new Ge(this.footprintGeometry,new qe({color:16762967,transparent:!0,opacity:.82,depthTest:!1}));paths=new Ge(this.pathGeometry,new qe({vertexColors:!0,transparent:!0,opacity:.9,depthTest:!1}));unitRadii=new Ge(this.unitRadiusGeometry,new qe({color:5104639,transparent:!0,opacity:.82,depthTest:!1}));anchoredFootprints=new Ge(this.anchoredGeometry,new qe({color:13987071,transparent:!0,opacity:.9,depthTest:!1}));constructionFootprints=new Ge(this.constructionGeometry,new qe({color:10906879,transparent:!0,opacity:.92,depthTest:!1}));constructor(){this.group.name=`navigation-debug`,this.footprints.name=`occupied-space-outlines`,this.unitRadii.name=`unit-avoidance-radii`,this.anchoredFootprints.name=`anchored-footprints`,this.constructionFootprints.name=`construction-footprints`,this.paths.name=`unit-paths`,this.footprints.renderOrder=20,this.paths.renderOrder=21,this.footprints.frustumCulled=!1,this.unitRadii.frustumCulled=!1,this.anchoredFootprints.frustumCulled=!1,this.constructionFootprints.frustumCulled=!1,this.paths.frustumCulled=!1,this.group.add(this.footprints,this.unitRadii,this.anchoredFootprints,this.constructionFootprints,this.paths)}sync(e,t,n,r,i){this.footprints.visible=r,this.unitRadii.visible=r,this.anchoredFootprints.visible=r,this.paths.visible=i,r&&this.setFootprints(e,t,n),i&&this.setPaths(t)}dispose(){this.footprintGeometry.dispose(),this.unitRadiusGeometry.dispose(),this.anchoredGeometry.dispose(),this.constructionGeometry.dispose(),this.pathGeometry.dispose(),this.footprints.material.dispose(),this.unitRadii.material.dispose(),this.anchoredFootprints.material.dispose(),this.constructionFootprints.material.dispose(),this.paths.material.dispose()}setFootprints(e,t,n){let r=[],i=[],a=[],o=[];for(let t of e.buildings){let e=t.clip&&t.clip.length>=3?t.clip:Za(t);this.polygon(r,e,.45)}for(let e of t.units){let n=t.typeOf(e);if(this.circle(i,e.x,e.z,$(n,e.deployed),.7),n.anchoredFootprint&&(e.deployed||n.stationary)){let{width:t,depth:r}=n.anchoredFootprint;this.polygon(a,[{x:e.x-t/2,z:e.z-r/2},{x:e.x+t/2,z:e.z-r/2},{x:e.x+t/2,z:e.z+r/2},{x:e.x-t/2,z:e.z+r/2}],.75)}}for(let e of n){let t=xl(e.structureTypeId).anchoredFootprint;if(!t)continue;let{width:n,depth:r}=t;this.polygon(o,[{x:e.x-n/2,z:e.z-r/2},{x:e.x+n/2,z:e.z-r/2},{x:e.x+n/2,z:e.z+r/2},{x:e.x-n/2,z:e.z+r/2}],.8)}this.footprintGeometry.setAttribute(`position`,new Re(new Float32Array(r),3)),this.unitRadiusGeometry.setAttribute(`position`,new Re(new Float32Array(i),3)),this.anchoredGeometry.setAttribute(`position`,new Re(new Float32Array(a),3)),this.constructionGeometry.setAttribute(`position`,new Re(new Float32Array(o),3))}setPaths(e){let t=[],n=[];for(let r of e.units){if(r.path.length===0)continue;let i=ut(e.typeOf(r).faction),a=(i>>16&255)/255,o=(i>>8&255)/255,s=(i&255)/255,c=r.x,l=r.z;for(let e=0;e<r.path.length;e+=2){let i=r.path[e],u=r.path[e+1];i!==void 0&&u!==void 0&&(t.push(c,.95,l,i,.95,u),n.push(a,o,s,a,o,s),c=i,l=u)}}this.pathGeometry.setAttribute(`position`,new Re(new Float32Array(t),3)),this.pathGeometry.setAttribute(`color`,new Re(new Float32Array(n),3))}circle(e,t,n,r,i){for(let a=0;a<24;a++){let o=a/24*Math.PI*2,s=(a+1)/24*Math.PI*2;e.push(t+Math.cos(o)*r,i,n+Math.sin(o)*r,t+Math.cos(s)*r,i,n+Math.sin(s)*r)}}polygon(e,t,n){for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];!i||!a||e.push(i.x,n,i.z,a.x,n,a.z)}}},dg=[1,2,3,4,5,6,7,8,9,0],fg=class{ids=[];groups=new Map;get size(){return this.ids.length}list(){return this.ids}has(e){return this.ids.includes(e)}primary(){return this.ids[0]}set(e){this.ids=[...new Set(e)].sort((e,t)=>e-t)}add(e){this.set([...this.ids,...e])}toggle(e){this.set(this.has(e)?this.ids.filter(t=>t!==e):[...this.ids,e])}clear(){this.ids=[]}assignGroup(e,t=this.ids){dg.includes(e)&&this.groups.set(e,[...t])}recallGroup(e){let t=this.groups.get(e);return!t||t.length===0?!1:(this.set(t),!0)}groupSize(e){return this.groups.get(e)?.length??0}occupiedGroups(){return dg.filter(e=>this.groupSize(e)>0)}prune(e){this.ids=this.ids.filter(e);for(let[t,n]of this.groups){let r=n.filter(e);r.length!==n.length&&(r.length===0?this.groups.delete(t):this.groups.set(t,r))}}},pg={request:e=>requestAnimationFrame(e),cancel:e=>cancelAnimationFrame(e)};function mg(e){let t=e.scheduler??pg,n=null,r=null,i=!1,a=!1,o=s=>{if(a||!i)return;n=null;let c=r===null?1e3/60:s-r,l=Number.isFinite(c)?Math.max(0,c):0;r=s,e.beforeAdvance?.(s,l);let u=Math.max(0,e.speed?.()??1),d=e.loop.advance(e.paused?.()?0:l*u);e.render({nowMs:s,deltaMs:l,alpha:d}),!a&&i&&n===null&&(n=t.request(o))};return{start(){a||i||(i=!0,r=null,n=t.request(o))},stop(){i&&(i=!1,n!==null&&t.cancel(n),n=null,r=null)},dispose(){a||(a=!0,this.stop())}}}function hg(e){if(e.selectedIds.length!==0){if(e.attackTarget)return{kind:`attack`,unitIds:e.selectedIds,targetId:e.attackTarget.id,x:e.attackTarget.x,z:e.attackTarget.z};if(e.harvesterIds.length>0&&e.crowdId!==void 0)return{kind:`harvest`,unitIds:e.harvesterIds,crowdId:e.crowdId};if(e.harvesterIds.length>0&&e.buildingId!==void 0)return{kind:`harvest`,unitIds:e.harvesterIds,buildingId:e.buildingId};if(e.ground)return{kind:`move`,unitIds:e.selectedIds,x:e.ground.x,z:e.ground.z}}}function gg(e){return e&&{kind:`summon`,builderId:e.builderId,typeId:e.typeId,x:e.x,z:e.z}}function _g(e,t){switch(t.kind){case`replace`:e.set(t.ids);break;case`add`:e.add(t.ids);break;case`toggle`:e.toggle(t.id);break;case`clear`:e.clear()}}var vg=class{dependencies;constructor(e){this.dependencies=e}contextual(e){let t=hg(e);return t&&this.dependencies.issueCommand(t),t}summon(e){let t=gg(e);return t&&this.dependencies.issueCommand(t),t}select(e){_g(this.dependencies.selection,e)}issue(e){this.dependencies.issueCommand(e)}},yg=[1,2,4];function bg(e){let{nowMs:t,deltaMs:n,paused:r,input:i,world:a,selection:o,rig:s,scene:c,renderer:l,boxEl:u,clickPoint:d,diagnosticsEnabled:f,announce:p,issueCommand:m,attackableEnemyAt:h,harvestableBuildingAt:g,onExitRequested:_,onLoadRequested:v,onQuickSave:y,onSeedStepRequested:b,onPlayerFactionCycleRequested:x,onProbeRequested:S,populationLabels:C}=e,{inspectedEnemyId:w,placement:T,attackMoveArmed:E,speedIndex:D,allStatesIndex:O,showOccupiedSpace:k,showUnitPaths:A}=e.state,j=e=>m.issue(e),M=yg;if(i.sample(),!r){i.touchPanCandidate&&i.resolveTouchPan(wp(s.camera,a.army,i.touchPanCandidate,c.units)===void 0),s.update(i,n/1e3);let e=f(),r=T!==null&&i.orderAt!==void 0;r&&(T=null,p(`SUMMON TARGETING CANCELLED`,t));let l=a.controllers[a.playerFaction]===`human`;l||(o.size>0&&o.clear(),w=null,T=null,E=!1);let u=l?i.selectGesture:void 0;if(E&&i.orderAt!==void 0)E=!1,p(`ATTACK MOVE CANCELLED`,t);else if(E&&u&&!u.isBox){d.set((u.rect.x0+u.rect.x1)/2,(u.rect.y0+u.rect.y1)/2);let e=Lp(s.camera,a.city,d),n=Cp(s.camera,d);if(e!==void 0&&o.size>0){let n=a.city.get(e);n&&(j({kind:`attack`,unitIds:o.list(),buildingId:n.id,x:n.x,z:n.z}),p(`DEMOLISHING`,t))}else n&&o.size>0&&(j({kind:`attackMove`,unitIds:o.list(),x:n.x,z:n.z}),p(`ATTACK MOVE`,t));E=!1}else if(u&&T){if(!u.isBox){d.set((u.rect.x0+u.rect.x1)/2,(u.rect.y0+u.rect.y1)/2);let e=Cp(s.camera,d),n=e&&a.constructionPlacement(T.builderId,T.typeId,e.x,e.z);n?(m.summon({builderId:T.builderId,typeId:T.typeId,x:n.x,z:n.z}),T=null):p(`INVALID SUMMON SITE — NEED CLEAR GROUND`,t)}}else if(u)if(u.isBox){let e=zp(s.camera,a.army,u.rect).filter(e=>{let t=a.army.get(e);return t!==void 0&&a.army.typeOf(t).faction===a.playerFaction});m.select({kind:u.additive?`add`:`replace`,ids:e})}else{d.set((u.rect.x0+u.rect.x1)/2,(u.rect.y0+u.rect.y1)/2);let e=wp(s.camera,a.army,d,c.units),n=e===void 0?void 0:a.army.get(e),r=n&&a.army.typeOf(n).faction===a.playerFaction?e:void 0;if(n&&r===void 0)if(u.pointerType===`touch`&&o.size>0){let e=h(d);e!==void 0&&j({kind:`attack`,unitIds:o.list(),targetId:e,x:n.x,z:n.z})}else w=n.id,u.additive||o.clear();else if(r===void 0){u.additive||(w=null);let e=o.list().filter(e=>{let t=a.army.get(e),n=t&&a.army.typeOf(t);return n?.faction===a.playerFaction&&n.role===`harvester`}),n=Sp(s.camera,a.crowds.all,d),r=g(d),i=e.some(e=>{let t=a.army.get(e);return t!==void 0&&Jc(a.army.typeOf(t).faction,t.cargo)});if(e.length>0&&n!==void 0)j({kind:`harvest`,unitIds:e,crowdId:n}),i&&p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t);else if(e.length>0&&r!==void 0)j({kind:`harvest`,unitIds:e,buildingId:r}),i&&p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t);else if(u.pointerType===`touch`&&o.size>0){let e=Cp(s.camera,d);e&&(j({kind:`move`,unitIds:o.list(),x:e.x,z:e.z}),c.moveCommandIndicator.show(e.x,e.z,a.playerFaction,t))}else u.additive||o.clear()}else if(u.doubleClick){let e=n.typeId,t=Bp(s.camera,a.army).filter(t=>{let n=a.army.get(t);return n!==void 0&&a.army.typeOf(n).faction===a.playerFaction&&n.typeId===e});w=null,m.select({kind:u.additive?`add`:`replace`,ids:t})}else u.additive?(w=null,m.select({kind:`toggle`,id:r})):(w=null,m.select({kind:`replace`,ids:[r]}))}for(let e of dg){let t=l?i.pressModifiers(`Digit${e}`):void 0;t&&(t.shift?o.assignGroup(e):o.recallGroup(e))}if(i.wasPressed(`Escape`)&&(E?(E=!1,p(`ATTACK MOVE CANCELLED`,t)):T?(T=null,p(`SUMMON TARGETING CANCELLED`,t)):o.size>0||w!==null?(o.clear(),w=null):_()),l&&i.wasPressed(`Delete`)&&o.size>0&&j({kind:`destroy`,unitIds:o.list()}),l&&i.wasPressed(`KeyF`)){let e=a.army.units.filter(e=>{let t=a.army.typeOf(e);return t.faction===a.playerFaction&&t.role===`harvester`&&!e.hasGoal&&!e.attackMove&&e.targetId===null&&e.targetBuildingId===null&&e.harvestingBuildingId===null&&e.harvestingCrowdId===null&&!e.harvestOrdered&&e.deployTimer===0}).map(e=>e.id);o.set(e),w=null}if(l&&i.wasPressed(`KeyC`)){let e=a.army.units.find(e=>{let t=a.army.typeOf(e);return t.faction===a.playerFaction&&t.role===`harbinger`});e&&s.focusOn(e)}if(e&&i.wasPressed(`KeyP`)&&S(),e&&i.wasPressed(`KeyI`)&&C.toggle(),e&&i.wasPressed(`KeyU`)&&(k=!k,p(`OCCUPIED SPACE ${k?`ON`:`OFF`}`,t)),e&&i.wasPressed(`KeyM`)&&(A=!A,p(`UNIT PATHS ${A?`ON`:`OFF`}`,t)),e&&i.wasPressed(`KeyY`)&&x(),e&&i.wasPressed(`BracketLeft`)&&b(-1),e&&i.wasPressed(`BracketRight`)&&b(1),i.orderAt&&!r&&o.size>0){let e=o.list(),n=h(i.orderAt),r=e.filter(e=>{let t=a.army.get(e),n=t&&a.army.typeOf(t);return n?.faction===a.playerFaction&&n.role===`harvester`}),l=Sp(s.camera,a.crowds.all,i.orderAt),u=g(i.orderAt),d=r.some(e=>{let t=a.army.get(e);return t!==void 0&&Jc(a.army.typeOf(t).faction,t.cargo)}),f=n===void 0?void 0:a.army.get(n),_=f||r.length>0&&(l!==void 0||u!==void 0)?void 0:Cp(s.camera,i.orderAt),v=m.contextual({selectedIds:e,harvesterIds:r,attackTarget:f&&{id:f.id,x:f.x,z:f.z},crowdId:l,buildingId:u,ground:_});v?.kind===`harvest`&&d?p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t):v?.kind===`move`&&c.moveCommandIndicator.show(v.x,v.z,a.playerFaction,t)}if(e&&i.wasPressed(`KeyO`)){let e=i.pressModifiers(`KeyO`)?.shift?a.playerFaction===`machines`?`ancients`:`machines`:a.playerFaction,t=a.controllers[e]===`ai`?`human`:`ai`;a.enqueue(`debug`,{kind:`setController`,faction:e,controller:t}),t===`ai`&&e===a.playerFaction&&o.clear()}if(e&&i.wasPressed(`KeyK`)&&(D=(D+1)%M.length,p(`${M[D]??1}× SPEED`,t)),i.wasPressed(`KeyA`)&&o.size>0&&(E=!0,T=null,p(`ATTACK MOVE · PICK A POINT`,t)),i.wasPressed(`KeyQ`)&&o.size>0&&j({kind:`stop`,unitIds:o.list()}),e&&i.wasPressed(`KeyX`)){let e=$f(a.city,s.focus.x,s.focus.z);e!==void 0&&a.enqueue(`debug`,{kind:`damage`,buildingId:e})}if(e&&i.wasPressed(`KeyZ`)&&a.enqueue(`debug`,{kind:`raze`,x:s.focus.x,z:s.focus.z,radius:85}),e&&i.wasPressed(`KeyB`)){O=(O+1)%Ka.length;let e=Ka[O];a.enqueue(`debug`,{kind:`setAllStates`,state:e})}if(e&&i.wasPressed(`KeyH`)&&a.enqueue(`debug`,{kind:`debugResources`,humans:80,charge:0}),e&&i.wasPressed(`KeyJ`)&&a.enqueue(`debug`,{kind:`debugResources`,humans:0,charge:3}),e&&i.wasPressed(`KeyE`)&&o.size>0){let e=$f(a.city,s.focus.x,s.focus.z);e!==void 0&&Yc(a.city.get(e),a.population)&&(j({kind:`harvest`,unitIds:o.list(),buildingId:e}),p(a.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,t))}if(e&&i.wasPressed(`KeyR`)&&o.size>0&&j({kind:`deploy`,unitIds:o.list()}),e&&i.wasPressed(`KeyT`)&&j({kind:`unlockTier2`}),e&&(i.wasPressed(`KeyL`)||i.wasPressed(`KeyG`))){let e=a.army.units.find(e=>a.army.typeOf(e).faction===a.playerFaction&&a.army.typeOf(e).producesUnits&&e.deployed&&e.deployTimer===0),n=a.playerFaction===`machines`?`machine-infantry`:`ancient-infantry`,r=a.playerFaction===`machines`?`machine-construct`:`ancient-support`;e?j({kind:`produce`,producer:{kind:`unit`,id:e.id},typeId:i.wasPressed(`KeyG`)?r:n}):p(`NO DEPLOYED FACTORY`,t)}if(e&&i.wasPressed(`KeyV`)){let e=o.primary()===void 0?void 0:a.army.get(o.primary());e&&a.army.typeOf(e).canDeploy&&j({kind:`deploy`,unitIds:[e.id]})}i.wasPressed(`F5`)&&y(t),i.wasPressed(`F9`)&&v()}if(l.domElement.style.cursor=E?`crosshair`:``,i.dragRect&&!r){let e=i.dragRect;u.style.display=`block`,u.style.left=`${(e.x0+1)/2*100}%`,u.style.top=`${(1-e.y1)/2*100}%`,u.style.width=`${(e.x1-e.x0)/2*100}%`,u.style.height=`${(e.y1-e.y0)/2*100}%`}else u.style.display=`none`;return i.consume(),{inspectedEnemyId:w,placement:T,attackMoveArmed:E,speedIndex:D,allStatesIndex:O,showOccupiedSpace:k,showUnitPaths:A}}var xg=class{options;now;codec;constructor(e){this.options=e,this.now=e.now??(()=>Date.now()),this.codec=e.codec??{pack:dp,unpack:fp}}get available(){return this.options.store!==null}async save(e,t){let n=this.options.store;if(n)try{let r=this.codec.pack(e);return await n.put(r,this.now(),t),r}catch(e){this.options.reportError?.(`save`,e);return}}async load(e){let t=this.options.store;if(t)try{let n=await t.get(e);if(!n){this.options.reportError?.(`load`,Error(t.lastRejection??`no save to load`));return}return{world:this.codec.unpack(n.envelope),envelope:n.envelope}}catch(e){this.options.reportError?.(`load`,e);return}}async latest(){let e=this.options.store;if(e)try{return await e.get()}catch(e){this.options.reportError?.(`load`,e);return}}async list(){let e=this.options.store;if(!e)return[];try{return await e.list()}catch(e){return this.options.reportError?.(`list`,e),[]}}async delete(e){let t=this.options.store;if(!t)return!1;try{return await t.delete(e),!0}catch(e){return this.options.reportError?.(`delete`,e),!1}}},Sg=`
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
`;function Cg(){if(document.getElementById(`game-session-control-notice-style`))return;let e=document.createElement(`style`);e.id=`game-session-control-notice-style`,e.textContent=Sg,document.head.append(e)}var wg=250,Tg=100,Eg=1800;function Dg(e){switch(e){case`outputUnavailable`:return`OUTPUT UNAVAILABLE`;case`requiresTier2`:return`REQUIRES TIER 2`;case`insufficientHumans`:return`INSUFFICIENT HUMANS`;case`producerMobile`:return`DEPLOY TO FABRICATE`;case`producerTransitioning`:return`PRODUCER TRANSITIONING`;case`queueFull`:return`QUEUE FULL (5)`;case`invalidFabricationSpace`:return`DEPLOYMENT REFUSED — NO FABRICATION SPACE`;case`summonAlreadyActive`:return`SUMMON ALREADY ACTIVE`;case`invalidSummonSite`:return`INVALID SUMMON SITE`}}function Og(e){switch(e.kind){case`produced`:return null;case`constructionComplete`:return`SUMMON COMPLETE — ${(e.subject??`OUTPUT`).toUpperCase()}`;case`productionQueued`:return null;case`unitCreationRefused`:return Dg(e.reason);case`productionBlocked`:return`NO ROOM TO DEPLOY`;case`productionWaitingForClearance`:return`WAITING FOR PAD CLEARANCE`;case`buildRefused`:return`CANNOT BUILD HERE`;case`constructionStarted`:return null;case`constructionCancelled`:return e.refund&&e.refund>0?`SUMMON CANCELLED — ${(e.subject??`OUTPUT`).toUpperCase()} · ${e.refund} HUMANS REFUNDED`:`SUMMON CANCELLED`;case`underAttack`:return`UNIT UNDER ATTACK`;case`combatHit`:return null;case`unitDown`:return`UNIT DESTROYED`;case`harbingerDown`:return`HARBINGER DESTROYED`;case`matchResolved`:return null;case`tier2`:return`TIER 2 UNLOCKED`;case`tier2Refused`:return`TIER 2 UNAVAILABLE`;case`deposited`:return null;case`playerFactionChanged`:return null}}var kg=new Set([`unitCreationRefused`,`productionBlocked`,`productionWaitingForClearance`,`constructionCancelled`]);function Ag(e,t){let n=!1;return{world:e,dispose(){n||(n=!0,t())}}}function jg({world:e,renderer:t,toonEffect:n,renderSettings:r,overlayEl:i,boxEl:a,store:o,onLoadRequested:s,onSeedStepRequested:c,onExitToTitle:l,onPlayAgainRequested:u,onMatchEnded:d,onPlayerFactionCycleRequested:f,diagnosticsEnabled:p,detailedPerformance:m,modelCache:h,preparedScene:g}){let _=!0,v=new Wi(e),y=new xg({store:o,reportError:(e,t)=>console.error(`${e} failed`,t)}),b=g??new Nd(e.city,e.army,r,h),x=e.army.units.filter(t=>e.army.typeOf(t).faction===e.playerFaction),S=e.city.startAnchors[e.playerFaction===`machines`?0:1]??{x:0,z:0},C=x.length>0?{x:x.reduce((e,t)=>e+t.x,0)/x.length,z:x.reduce((e,t)=>e+t.z,0)/x.length}:S,w=new Up(window.innerWidth/window.innerHeight,C),T=new sp(t.domElement),E=new fg,D=new vg({selection:E,issueCommand:t=>{e.controllers[e.playerFaction]!==`ai`&&e.enqueue(e.playerFaction,t)}}),O=new Hm(i),k=new zm,A=m;A&&(t.info.autoReset=!1);let j=new tp,M=new tp,N=new Ym(document.body,e.city,e.population,e.populationCapacity,e.playerFaction),ee=new gh(e.city,b.city,e.population,e.populationCapacity);b.scene.add(ee.group);let te=new Ch(document.body),ne=new Ih(e.city,e.army,e.population);b.scene.add(ne.group);let re=new Gh;b.scene.add(re.group);let ie=new Jh(e=>b.units.modelTemplate(e));b.scene.add(ie.group);let ae=new lg(e=>b.units.modelTemplate(e));b.scene.add(ae.group);let oe=new ug;b.scene.add(oe.group);let P=null,se=0,ce=!1,le=!1,F=(e,t)=>{P=e,se=t+Eg},ue=t=>{t===`cancel`&&E.size>0?D.issue({kind:`stop`,unitIds:E.list()}):t===`primary`&&E.size>0&&e.playerFaction===`machines`&&D.issue({kind:`deploy`,unitIds:E.list()})},de=new _m(document.body,Ji({world:e,selected:0,banner:null}),ue),fe=Tg,I=null,L=null,pe=!1,me=0,he={onDeploy:()=>D.issue({kind:`deploy`,unitIds:E.list()}),onIsolateType:t=>{E.set(E.list().filter(n=>e.army.get(n)?.typeId===t))}},ge=new Jp(document.body,e.playerFaction,he),_e={onProduce:(e,t)=>D.issue({kind:`produce`,producer:e,typeId:t}),onSummon:(e,t)=>{L={builderId:e.id,typeId:t},F(`CHOOSE SUMMONING SITE`,performance.now())},onCancelSummon:e=>D.issue({kind:`cancelSummon`,builderId:e.id}),onUnlockTier2:()=>D.issue({kind:`unlockTier2`})},ve=new om(document.body,e.playerFaction,_e),ye=null,be=0,xe=null,Se=t=>{if(y.available){if(e.outcome){F(`MATCH OVER · NOT SAVED`,t);return}F(`SAVING`,t),y.save(e).then(e=>{_&&(e?(F(`SAVED · STEP ${e.tick}`,performance.now()),xe=`step ${e.tick}`):F(`SAVE FAILED`,performance.now()))})}},Ce=!0,we=null,Te=!1,Ee=()=>{we?.dispose(),we=null,Te=!1,T.consume()},De=()=>{we||=(Te=!0,new pa(document.body,xe,{onSaveAndExit:()=>{if(!y.available){Ee(),l();return}y.save(e).finally(()=>{_&&(Ee(),l())})},onExitAnyway:()=>{Ee(),l()},onCancel:()=>Ee()}))},Oe=null,R=t=>{Oe||=(we&&Ee(),Te=!0,E.clear(),d?.(t),new ma(document.body,{winner:t.winner??void 0,playerFaction:e.playerFaction},{onPlayAgain:()=>u(),onBackToMenu:()=>l()}))};Cg();let z=document.createElement(`div`);z.className=`control-notice`,z.style.display=`none`;let ke=document.createElement(`div`);ke.className=`speed-notice`,ke.style.display=`none`,document.body.append(z,ke);let Ae=``,je=``,Me=()=>{let t=e.controllers[e.playerFaction]===`ai`?`AI CONTROLLED`:``;t!==Ae&&(Ae=t,z.textContent=t,z.style.display=t.length>0?`block`:`none`);let n=yg[me]??1,r=n===1?``:`${n}× SPEED`;r!==je&&(je=r,ke.textContent=r,ke.style.display=r.length>0?`block`:`none`)};Me();let Ne=()=>{E.clear(),I=null,L=null,pe=!1,P=null,ye=null,j=new tp,M=new tp,N.setFaction(e.playerFaction),de.dispose(),ge.dispose(),ve.dispose(),de=new _m(document.body,Ji({world:e,selected:0,banner:null}),ue),ge=new Jp(document.body,e.playerFaction,he),ve=new om(document.body,e.playerFaction,_e),fe=Tg,Ce=!0,Me()},Pe=()=>{t.setSize(window.innerWidth,window.innerHeight),w.setAspect(window.innerWidth/window.innerHeight),Ce=!0};window.addEventListener(`resize`,Pe);let Fe=new H,Ie=t=>{let n=Lp(w.camera,e.city,t);return Yc(n===void 0?void 0:e.city.get(n),e.population)?n:void 0},Le=t=>{if(E.size===0)return;let n=wp(w.camera,e.army,t,b.units),r=n===void 0?void 0:e.army.get(n);if(!(!r||e.army.typeOf(r).faction===e.playerFaction))return E.list().some(t=>{let n=e.army.get(t);if(!n||n.deployTimer>0)return!1;let r=e.army.typeOf(n);return r.faction===e.playerFaction&&(r.weaponIds??[]).some(e=>Wc(e).targetClasses.includes(`unit`))})?r.id:void 0},Re=0,B=0,ze=0,V=30,Be=wg,U=0,Ve=0,W=0,G=0,He=!1,Ue=!1,We=e.tick,Ge=!1,K=``,Ke=NaN,qe=NaN,Je=NaN,Ye=!0,Xe=0,Ze=mg({loop:v,speed:()=>yg[me]??1,paused:()=>Te,beforeAdvance:(n,r)=>{k.add(r),A&&t.info.reset();let i=bg({nowMs:n,deltaMs:r,paused:Te,input:T,world:e,selection:E,rig:w,scene:b,renderer:t,boxEl:a,clickPoint:Fe,state:{inspectedEnemyId:I,placement:L,attackMoveArmed:pe,speedIndex:me,allStatesIndex:Re,showOccupiedSpace:ce,showUnitPaths:le},diagnosticsEnabled:p,announce:F,issueCommand:D,attackableEnemyAt:Le,harvestableBuildingAt:Ie,onExitRequested:De,onLoadRequested:s,onQuickSave:Se,onSeedStepRequested:c,onPlayerFactionCycleRequested:f,onProbeRequested:()=>{Ye=!0},populationLabels:N});I=i.inspectedEnemyId,L=i.placement,pe=i.attackMoveArmed,me=i.speedIndex,Re=i.allStatesIndex,ce=i.showOccupiedSpace,le=i.showUnitPaths,Xe=performance.now()},render:({nowMs:r,deltaMs:i,alpha:a})=>{let o=e.drainChangedBuildings();if(o.length>0)if(U=performance.now()-Xe,Ye=!0,o.length>8)b.city.refreshAll();else for(let e of o)b.city.refresh(e);Me();let s=e.drainEvents();e.outcome&&!Oe&&R(e.outcome);let c=s.some(e=>e.kind===`combatHit`||e.kind===`unitDown`);b.combat.sync(s,r),b.units.syncDefeats(s,r);for(let t of s){if(t.kind===`playerFactionChanged`){Ne();continue}let n=`faction`in t?t.faction:void 0;if(t.kind!==`matchResolved`&&n!==void 0&&n!==e.playerFaction)continue;let i=Og(t);i&&(F(i,r),kg.has(t.kind)&&(ye=i,be=r+Eg))}E.prune(t=>{let n=e.army.get(t);return n!==void 0&&e.army.typeOf(n).faction===e.playerFaction});let l=E.list(),u=`${I??``}|${l.join(`,`)}`,d=u!==K;K=u;let f=w.camera,p=Ce||Math.abs(f.position.x-Ke)>.01||Math.abs(f.position.y-qe)>.01||Math.abs(f.position.z-Je)>.01;Ce=!1,Ke=f.position.x,qe=f.position.y,Je=f.position.z;let m=e.tick!==We;We=e.tick;let h=o.length>0||m&&e.army.units.some(Tl),g=Le(T.pointer);ae.sync(e.army,r),b.units.setPresentationHidden(ae.printedUnitIds()),b.units.sync(e.army,a,t=>{let n=e.army.get(t);if(t===g)return`attack`;if((E.has(t)||t===I)&&n)return`selected`},e=>b.combat.meleePose(e,r),r),te.sync({army:e.army,camera:f,nowMs:r,cameraDirty:p,stateDirty:c,selectionDirty:d,selectedIds:l,inspectedEnemyId:I});let _=b.city.syncDamage(r);h||=_.phaseChanged;let y=b.units.corpseShadowSources();(m||o.length>0||_.phaseChanged||y.length>0||Ge)&&b.shadows.sync(e.city,e.army,y),Ge=y.length>0,re.sync(e.crowds.all,a,e.tick,e.army);let x=l.filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),S=x.flatMap(t=>{let n=e.army.get(t);return n?[n]:[]});N.setSelectionEnabled(!1),N.sync({camera:f,zoomFraction:w.zoomFraction,nowMs:r,cameraDirty:p,populationDirty:h}),ee.sync(S,e.crowds.all,a,h,o.length>0||_.phaseChanged);let C=x.length>0?Ie(T.pointer):void 0;ne.sync(e.tick,x.length>0,C);let D=L?Cp(w.camera,T.pointer):void 0,ue=L!==null&&D!==void 0&&e.constructionPlacement(L.builderId,L.typeId,D.x,D.z)!==void 0;if(ie.sync(L&&D?{typeId:L.typeId,x:D.x,z:D.z}:void 0,ue,e.constructionSites,r),oe.sync(e.city,e.army,e.constructionSites,ce,le),b.moveCommandIndicator.sync(r),b.updateShadowCoverage(w.focus,w.zoomFraction),b.city.setOutlineZoom(w.zoomFraction),b.units.setOutlineZoom(w.zoomFraction),b.unitOcclusion.captureOccluderDepth(t,b.scene,w.camera),n.render(b.scene,w.camera),b.unitOcclusion.render(t,w.camera),b.selectionSilhouette.render(t,w.camera,ne.selectionSource()),I!==null&&e.army.get(I)===void 0&&(I=null),fe+=i,fe>=Tg){fe=0,P!==null&&r>se&&(P=null),ye!==null&&r>be&&(ye=null),de.render(Ji({world:e,selected:E.size,banner:P})),ge.render(Im(e,E,I===null?void 0:e.army.get(I)));let t=E.primary()===void 0?void 0:e.army.get(E.primary());ve.render(Rm(e,t,ye,L))}if(ze+=i,ze>=1e3&&(V=(v.stepCount-B)/ze*1e3,B=v.stepCount,ze=0),j.add(e.tick,e.resources.humans),M.add(e.tick,e.resources.charge),Be+=i,Be>=wg){if(Be=0,Ye){Ye=!1;let t=ep(e,{x:w.focus.x,z:w.focus.z});Ve=t.reachSmall,W=t.reachLarge,G=t.reachLargeStrict,He=t.atFocusSmall,Ue=t.atFocusLarge}let[n,r,i]=e.destructionCounts();O.render({faction:Vi[e.playerFaction].name,battlefield:e.battlefield,seed:e.seed,fps:k.fps,simHz:V,stepCount:e.tick,droppedMs:v.droppedMs,alpha:a,zoomFraction:w.zoomFraction,pitchDeg:w.pitchDeg,distance:w.camera.position.distanceTo(w.focus),focusX:w.focus.x,focusZ:w.focus.z,cityBuildings:e.city.buildings.length,cityIntact:n??0,cityDamaged:r??0,cityRubble:i??0,populationLabels:N.enabled,units:e.army.units.length,unitsMoving:e.army.countMoving(),unitsBlocked:e.army.countBlocked(),unitsUnreached:e.army.countUnreached(),unitsStalled:e.army.countStalled(),selected:E.size,groups:E.occupiedGroups(),pathsQueued:e.army.pending,pathsTotal:e.army.pathsTotal,navCells:e.nav.cellCount,navRebuilds:e.nav.rebuildCount,navLastRebuildCells:e.nav.lastRebuildCells,navRebuildMs:U,smallPassable:e.nav.passableFraction(`small`,!1,3),largePassable:e.nav.passableFraction(`large`,!1,13),smallPassableStrict:e.nav.passableFraction(`small`,!0,3),largePassableStrict:e.nav.passableFraction(`large`,!0,13),reachSmall:Ve,reachLarge:W,reachLargeStrict:G,atFocusSmall:He,atFocusLarge:Ue,humans:e.resources.humans,humansCap:e.resources.humansCap,charge:e.resources.charge,chargeCap:e.resources.chargeCap,chargeSegments:e.resources.segmentsReady,techTier:e.techTier,humansPerMinute:j.perMinute,chargePerMinute:M.perMinute,cargoInTransit:e.cargoInTransit(),populationRemaining:e.remainingPopulation(),populationTotal:e.populationCapacity.reduce((e,t)=>e+t,0),structures:e.army.units.filter(t=>e.army.typeOf(t).faction===e.playerFaction&&e.army.typeOf(t).role===`structure`).length,queued:e.queuedProduction(),civilianCrowds:e.crowds.all.length,civilianHumans:e.crowds.totalHumans(),harvesting:e.army.units.filter(Tl).length,harvestIdle:e.harvestersIdle(),unitsDeployed:e.army.countDeployed(),unitsDeploying:e.army.countDeploying(),...A?{detailed:{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,units:b.units.detailedPerformanceStats()??{loadedModels:0,loadingModels:0,failedModels:0,fallbacks:0,visible:0,selection:0,occlusion:0}}}:{}},k)}}});return Ze.start(),Ag(e,()=>{_=!1,Ze.dispose(),window.removeEventListener(`resize`,Pe),T.dispose(),z.remove(),ke.remove(),Oe?.dispose(),de.dispose(),ge.dispose(),ve.dispose(),Ee(),b.dispose(),A&&(t.info.autoReset=!0),N.dispose(),ee.dispose(),te.dispose(),ne.dispose(),re.dispose(),ie.dispose(),ae.dispose(),oe.dispose(),a.style.display=`none`})}var Mg=1213353265,Ng=class{create;active=null;currentState={kind:`title`};constructor(e){this.create=e}get state(){return this.currentState}show(e){this.releaseSession(),this.currentState={kind:e}}newMatch(e){return this.replace(e)}load(e){return this.replace(e)}playAgain(e){return this.replace(e)}matchEnded(){this.active&&(this.currentState={kind:`matchEnd`,session:this.active})}exit(){this.releaseSession(),this.currentState={kind:`title`}}dispose(){this.currentState.kind!==`disposed`&&(this.releaseSession(),this.currentState={kind:`disposed`})}replace(e){if(this.currentState.kind===`disposed`)throw Error(`front-end flow is disposed`);this.releaseSession();let t=this.create(e);return this.active=t,this.currentState={kind:`playing`,session:t},t}releaseSession(){let e=this.active;this.active=null,e?.dispose()}};function Pg(e){let t=Ii(),n=Qf(e.search),r={standardMatch:!0,...n.controllers?{controllers:n.controllers}:{}};pt(`machines`,t.colourVariant.machines),pt(`ancients`,t.colourVariant.ancients);let i=new yu,a=null,o=null,s=0,c=null,l=null,u=null,d=!1,f=0,p=new xg({store:e.store,reportError:(e,t)=>console.error(`${e} failed`,t)}),m=e=>{a?.dispose(),a=e},h=()=>{e.overlayPanelEl.style.display=t.overlayVisible?``:`none`};h();let g=()=>{s++,c!==null&&cancelAnimationFrame(c),l!==null&&cancelAnimationFrame(l),u!==null&&clearTimeout(u),c=null,l=null,u=null},_=()=>{g(),o?.scene.dispose(),o=null},v,y,b,x,S=new Ng(({world:r,manifest:a,preparedScene:o})=>(i.preload(a),m(null),e.renderer.shadowMap.enabled=t.enhancedShadows,jg({world:r,renderer:e.renderer,toonEffect:e.toonEffect,renderSettings:t,overlayEl:e.overlayEl,boxEl:e.boxEl,store:e.store,onLoadRequested:()=>v(),onSeedStepRequested:e=>{let t=r.seed+e>>>0;queueMicrotask(()=>{f++,S.newMatch(w(C(t,r.playerFaction,r.battlefield),bu()))})},onExitToTitle:()=>y(),onPlayAgainRequested:()=>{queueMicrotask(()=>{f++,S.playAgain(w(C(r.seed,r.playerFaction,r.battlefield),bu()))})},onMatchEnded:()=>S.matchEnded(),onPlayerFactionCycleRequested:()=>{let e=r.playerFaction===`machines`?`ancients`:`machines`;r.enqueue(`debug`,{kind:`setPlayerFaction`,faction:e})},diagnosticsEnabled:()=>t.overlayVisible,detailedPerformance:n.detailedPerformance,modelCache:i,...o?{preparedScene:o}:{}}))),C=(e,t,i)=>new Zf(e,t,i?{battlefield:!0,...r,...n.detailedStress?{battlefieldUnitsPerType:8}:{}}:r),w=(e,t,n)=>({world:e,manifest:t,...n?{preparedScene:n}:{}}),T=()=>{g();let e=s;c=requestAnimationFrame(()=>{c=null,l=requestAnimationFrame(()=>{l=null,!(d||e!==s)&&(i.preload(bu()),u=setTimeout(()=>{if(u=null,d||e!==s||o)return;let n=new Zf(Mg,`machines`,r);o={world:n,scene:new Nd(n.city,n.army,t,i)}},0))})})},E=e=>{g();let n=o??(()=>{let e=new Zf(Mg,`machines`,r);return{world:e,scene:new Nd(e.city,e.army,t,i)}})();if(o=null,n.world.playerFaction===e)return n;n.scene.dispose();let a=new Zf(Mg,e,r);return{world:a,scene:new Nd(a.city,a.army,t,i)}};return v=e=>{let t=++f;p.load(e).then(e=>{!e||d||t!==f||S.load(w(e.world,xu(e.envelope)))})},y=()=>{if(d)return;f++,S.exit();let e,t=(t,n)=>{e=new ea(document.body,{saved:t&&{faction:t.envelope.playerFaction,tick:t.envelope.tick,clock:Ki(t.envelope.tick)},slotCount:n,onStart:e=>{let t=E(e);S.newMatch(w(t.world,bu(),t.scene))},onResume:()=>v(),onSelectSave:()=>void x(),onSettings:()=>b()}),m(e)};t(void 0,0),T();let n=f;Promise.all([p.latest(),p.list()]).then(([r,i])=>{d||n!==f||a!==e||t(r,i.length)})},b=()=>{S.show(`settings`),m(new da(document.body,t,{onColourVariant:(e,n)=>{t.colourVariant[e]=n,pt(e,n),_(),i.dispose(),i=new yu,Li(t),b()},onToggleOverlay:e=>{t.overlayVisible=e,Li(t),h(),b()},onToggleCityLighting:e=>{t.cityLighting=e,_(),Li(t),b()},onToggleEnhancedShadows:n=>{t.enhancedShadows=n,_(),e.renderer.shadowMap.enabled=n,Li(t),b()},onToggleAmbientOcclusion:e=>{t.ambientOcclusion=e,_(),Li(t),b()},onBack:()=>y()}))},x=async()=>{let e=++f,t=await p.list();d||e!==f||(S.show(`saveList`),m(new fa(document.body,t.map(e=>({slot:e.slot,faction:e.readable?e.envelope.playerFaction:void 0,clock:Ki(e.envelope.tick??0),tick:e.envelope.tick??0,savedAtMs:e.savedAtMs,readable:e.readable})),{onLoad:e=>v(e),onDelete:e=>{p.delete(e).then(()=>x())},onBack:()=>y()})))},{get state(){return S.state},start(){if(d)return;let t=new URLSearchParams(e.search).get(`faction`);if(e.pathname.endsWith(`/battle.html`)){let e=t===`ancients`?`ancients`:`machines`;S.newMatch(w(C(Mg,e,!0),bu()))}else t===`machines`||t===`ancients`?S.newMatch(w(C(Mg,t,!1),bu())):y()},dispose(){d||(d=!0,f++,_(),m(null),S.dispose(),i.dispose())}}}async function Fg(){let e=document.getElementById(`overlay`),t=document.getElementById(`overlay-content`),n=document.getElementById(`overlay-toggle`),r=document.getElementById(`selectbox`);if(!e||!t||!(n instanceof HTMLButtonElement)||!r)throw Error(`overlay controls or #selectbox missing from the page shell`);n.addEventListener(`click`,()=>{let t=e.classList.toggle(`minimized`);n.textContent=t?`+`:`−`,n.title=t?`Restore developer panel`:`Minimize developer panel`,n.setAttribute(`aria-expanded`,String(!t))});let i=new Mi({antialias:!0,powerPreference:`high-performance`});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=1,i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);let a=new Ni(i,{defaultThickness:.0022,defaultColor:[0,0,0],defaultAlpha:.68}),o=yp.available?new yp:null;o||console.warn(`IndexedDB unavailable; saving is disabled for this session`),Pg({renderer:i,toonEffect:a,overlayPanelEl:e,overlayEl:t,boxEl:r,store:o,pathname:window.location.pathname,search:window.location.search}).start()}Fg().catch(e=>{console.error(`application startup failed`,e)});