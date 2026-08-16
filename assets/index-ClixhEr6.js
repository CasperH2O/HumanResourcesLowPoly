const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/unitModelResources-DY8igU7R.js","assets/three.core-DG6I5xW6.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/unitModelMaterials--SYKi_SQ.js","assets/toon-DLr-bRAE.js"])))=>i.map(i=>d[i]);
import{$n as e,C as t,Cn as n,Ct as r,D as i,Dt as a,E as o,En as s,Et as c,Fn as l,Gn as u,H as d,Ht as f,I as p,In as m,Jn as h,Kn as g,L as _,Ln as v,Lt as y,M as b,Mn as x,N as S,Nn as C,O as w,Ot as T,P as E,Pn as D,Pt as O,Qn as ee,R as k,S as A,St as j,T as M,Tn as N,Un as te,V as P,Vt as ne,Xn as re,Y as ie,_ as F,_r as I,b as L,bn as ae,bt as oe,c as R,cr as se,d as ce,dr as le,dt as z,er as ue,et as de,f as fe,fr as pe,ft as B,g as me,gr as he,gt as ge,h as _e,hr as ve,ht as ye,i as be,ir as xe,it as Se,j as Ce,jn as we,k as Te,kt as Ee,l as De,lr as Oe,lt as ke,m as V,mr as Ae,mt as je,nr as Me,nt as H,or as Ne,p as Pe,pr as Fe,pt as Ie,qn as U,r as Le,rr as W,rt as G,s as K,sr as Re,st as ze,tr as Be,tt as Ve,ur as He,ut as q,v as Ue,vn as We,vr as Ge,w as Ke,wn as qe,x as Je,xn as Ye,xt as Xe,y as Ze,yn as Qe,yr as $e,z as et}from"./three.core-DG6I5xW6.js";import{t as tt}from"./SkeletonUtils-CHxfGqZJ.js";import{a as nt,c as rt,i as it,n as at,o as ot,r as st,s as ct,t as lt}from"./toon-DLr-bRAE.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function ut(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function dt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Y={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},ft={basic:{uniforms:he([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:he([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:he([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:he([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:he([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new V(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:he([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:he([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:he([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:he([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:he([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:he([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:he([Y.common,Y.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:he([Y.lights,Y.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};ft.physical={uniforms:he([ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var pt={r:0,b:0,g:0},mt=new z,ht=new q;ht.set(-1,0,0,0,1,0,0,0,1);function gt(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new B(new K(1,1,1),new D({name:`BackgroundCubeMaterial`,uniforms:Oe(ft.backgroundCube.uniforms),vertexShader:ft.backgroundCube.vertexShader,fragmentShader:ft.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ht),l.material.toneMapped=_e.getTransfer(i.colorSpace)!==x,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new B(new Ee(2,2),new D({name:`BackgroundMaterial`,uniforms:Oe(ft.background.uniforms),vertexShader:ft.background.vertexShader,fragmentShader:ft.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_e.getTransfer(i.colorSpace)!==x,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(pt,Ae(e)),n.buffers.color.setClear(pt.r,pt.g,pt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function _t(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function vt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function yt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ge(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Ge(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function bt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new T,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var xt=4,St=[.125,.215,.35,.446,.526,.582],Ct=20,wt=256,Tt=new c,Et=new V,Dt=null,Ot=0,kt=0,At=!1,jt=new W,Mt=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=jt}=i;Dt=this._renderer.getRenderTarget(),Ot=this._renderer.getActiveCubeFace(),kt=this._renderer.getActiveMipmapLevel(),At=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dt,Ot,kt),this._renderer.xr.enabled=At,e.scissorTest=!1,Ft(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dt=this._renderer.getRenderTarget(),Ot=this._renderer.getActiveCubeFace(),kt=this._renderer.getActiveMipmapLevel(),At=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:de,minFilter:de,generateMipmaps:!1,type:_,format:ne,colorSpace:G,depthBuffer:!1},r=Pt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pt(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nt(r)),this._blurMaterial=Lt(r,e,t),this._ggxMaterial=It(r,e,t)}return r}_compileMaterial(e){let t=new B(new De,e);this._renderer.compile(t,Tt)}_sceneToCubeUV(e,t,n,r,i){let o=new a(90,1,t,n),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Et),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new B(new K,new Ie({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Et),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(i.x,i.y,i.z),o.lookAt(i.x+c[t],i.y,i.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(i.x,i.y,i.z),o.lookAt(i.x,i.y+c[t],i.z)):(o.up.set(0,s[t],0),o.position.set(i.x,i.y,i.z),o.lookAt(i.x,i.y,i.z+c[t]));let a=this._cubeSize;Ft(r,n*a,t>2?a:0,a,a),l.setRenderTarget(r),m&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zt()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rt());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ft(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Tt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-xt?n-d+xt:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ft(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Tt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ft(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Tt)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&pe(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ct;m>Ct&&Ge(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ct}`);let h=[],g=0;for(let e=0;e<Ct;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ft(t,3*v*(r>_-xt?r-_+xt:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Tt)}};function Nt(e){let t=[],n=[],r=[],i=e,a=e-xt+1+St.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-xt?s=St[o-e+xt-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new De;h.setAttribute(`position`,new R(f,3)),h.setAttribute(`uv`,new R(p,2)),h.setAttribute(`faceIndex`,new R(m,1)),r.push(new B(h,null)),i>xt&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Pt(e,t,n){let r=new Re(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ft(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function It(e,t,n){return new D({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:wt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lt(e,t,n){let r=new Float32Array(Ct),i=new W(0,1,0);return new D({name:`SphericalGaussianBlur`,defines:{n:Ct,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rt(){return new D({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Bt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function zt(){return new D({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bt(){return`

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
	`}var Vt=class extends Re{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ue(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new K(5,5,5),i=new D({name:`CubemapFromEquirect`,uniforms:Oe(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new B(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=de),new me(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ht(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Vt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Mt(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Mt(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ut(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Wt(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?g:u)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function d(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:d}}function Gt(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Kt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:pe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qt(e,t,n){let r=new WeakMap,i=new xe;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Je(h,p,m,u);g.type=b,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Me(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Jt(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Yt={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Xt(e,t,n,r,i,a){let o=new Re(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new M(t,n):void 0}),s=new Re(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),l=new De;l.setAttribute(`position`,new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ce([0,2,0,0,2,0],2));let u=new ae({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new B(l,u),f=new c(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},_e.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Yt[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),l.dispose(),u.dispose()}}var Zt=new te,Qt=new M(1,1),$t=new Je,en=new L,tn=new Ue,nn=[],rn=[],an=new Float32Array(16),on=new Float32Array(9),sn=new Float32Array(4);function cn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=nn[i];if(a===void 0&&(a=new Float32Array(i),nn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ln(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function un(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function dn(e,t){let n=rn[t];n===void 0&&(n=new Int32Array(t),rn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function fn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2fv(this.addr,t),un(n,t)}}function mn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ln(n,t))return;e.uniform3fv(this.addr,t),un(n,t)}}function hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4fv(this.addr,t),un(n,t)}}function gn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ln(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),un(n,t)}else{if(ln(n,r))return;sn.set(r),e.uniformMatrix2fv(this.addr,!1,sn),un(n,r)}}function _n(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ln(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),un(n,t)}else{if(ln(n,r))return;on.set(r),e.uniformMatrix3fv(this.addr,!1,on),un(n,r)}}function vn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ln(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),un(n,t)}else{if(ln(n,r))return;an.set(r),e.uniformMatrix4fv(this.addr,!1,an),un(n,r)}}function yn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2iv(this.addr,t),un(n,t)}}function xn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ln(n,t))return;e.uniform3iv(this.addr,t),un(n,t)}}function Sn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4iv(this.addr,t),un(n,t)}}function Cn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ln(n,t))return;e.uniform2uiv(this.addr,t),un(n,t)}}function Tn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ln(n,t))return;e.uniform3uiv(this.addr,t),un(n,t)}}function En(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ln(n,t))return;e.uniform4uiv(this.addr,t),un(n,t)}}function Dn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Qt.compareFunction=n.isReversedDepthBuffer()?518:515,a=Qt):a=Zt,n.setTexture2D(t||a,i)}function On(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||en,i)}function kn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||tn,i)}function An(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||$t,i)}function jn(e){switch(e){case 5126:return fn;case 35664:return pn;case 35665:return mn;case 35666:return hn;case 35674:return gn;case 35675:return _n;case 35676:return vn;case 5124:case 35670:return yn;case 35667:case 35671:return bn;case 35668:case 35672:return xn;case 35669:case 35673:return Sn;case 5125:return Cn;case 36294:return wn;case 36295:return Tn;case 36296:return En;case 35678:case 36198:case 36298:case 36306:case 35682:return Dn;case 35679:case 36299:case 36307:return On;case 35680:case 36300:case 36308:case 36293:return kn;case 36289:case 36303:case 36311:case 36292:return An}}function Mn(e,t){e.uniform1fv(this.addr,t)}function Nn(e,t){let n=cn(t,this.size,2);e.uniform2fv(this.addr,n)}function Pn(e,t){let n=cn(t,this.size,3);e.uniform3fv(this.addr,n)}function Fn(e,t){let n=cn(t,this.size,4);e.uniform4fv(this.addr,n)}function In(e,t){let n=cn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ln(e,t){let n=cn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Rn(e,t){let n=cn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function zn(e,t){e.uniform1iv(this.addr,t)}function Bn(e,t){e.uniform2iv(this.addr,t)}function Vn(e,t){e.uniform3iv(this.addr,t)}function Hn(e,t){e.uniform4iv(this.addr,t)}function Un(e,t){e.uniform1uiv(this.addr,t)}function Wn(e,t){e.uniform2uiv(this.addr,t)}function Gn(e,t){e.uniform3uiv(this.addr,t)}function Kn(e,t){e.uniform4uiv(this.addr,t)}function qn(e,t,n){let r=this.cache,i=t.length,a=dn(n,i);ln(r,a)||(e.uniform1iv(this.addr,a),un(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Qt:Zt;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Jn(e,t,n){let r=this.cache,i=t.length,a=dn(n,i);ln(r,a)||(e.uniform1iv(this.addr,a),un(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||en,a[e])}function Yn(e,t,n){let r=this.cache,i=t.length,a=dn(n,i);ln(r,a)||(e.uniform1iv(this.addr,a),un(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||tn,a[e])}function Xn(e,t,n){let r=this.cache,i=t.length,a=dn(n,i);ln(r,a)||(e.uniform1iv(this.addr,a),un(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||$t,a[e])}function Zn(e){switch(e){case 5126:return Mn;case 35664:return Nn;case 35665:return Pn;case 35666:return Fn;case 35674:return In;case 35675:return Ln;case 35676:return Rn;case 5124:case 35670:return zn;case 35667:case 35671:return Bn;case 35668:case 35672:return Vn;case 35669:case 35673:return Hn;case 5125:return Un;case 36294:return Wn;case 36295:return Gn;case 36296:return Kn;case 35678:case 36198:case 36298:case 36306:case 35682:return qn;case 35679:case 36299:case 36307:return Jn;case 35680:case 36300:case 36308:case 36293:return Yn;case 36289:case 36303:case 36311:case 36292:return Xn}}var Qn=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jn(t.type)}},$n=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zn(t.type)}},er=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},tr=/(\w+)(\])?(\[|\.)?/g;function nr(e,t){e.seq.push(t),e.map[t.id]=t}function rr(e,t,n){let r=e.name,i=r.length;for(tr.lastIndex=0;;){let a=tr.exec(r),o=tr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){nr(n,l===void 0?new Qn(s,e,t):new $n(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new er(s),nr(n,e)),n=e}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);rr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ar(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var or=37297,sr=0;function cr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var lr=new q;function ur(e){_e._getMatrix(lr,_e.workingColorSpace,e);let t=`mat3( ${lr.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(e)){case Se:return[t,`LinearTransferOETF`];case x:return[t,`sRGBTransferOETF`];default:return Ge(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function dr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+cr(e.getShaderSource(t),r)}return i}function fr(e,t){let n=ur(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var pr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function mr(e,t){let n=pr[t];return n===void 0?(Ge(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var hr=new W;function gr(){return _e.getLuminanceCoefficients(hr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${hr.x.toFixed(4)}, ${hr.y.toFixed(4)}, ${hr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function _r(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(br).join(`
`)}function vr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function yr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function br(e){return e!==``}function xr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cr=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(e){return e.replace(Cr,Er)}var Tr=new Map;function Er(e,t){let n=J[t];if(n===void 0){let e=Tr.get(t);if(e!==void 0)n=J[e],Ge(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return wr(n)}var Dr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Or(e){return e.replace(Dr,kr)}function kr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ar(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var jr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Mr(e){return jr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Nr={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Pr(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Nr[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Fr={302:`ENVMAP_MODE_REFRACTION`};function Ir(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Fr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Lr={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Rr(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Lr[e.combine]||`ENVMAP_BLENDING_NONE`}function zr(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Br(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Mr(n),l=Pr(n),u=Ir(n),d=Rr(n),f=zr(n),p=_r(n),m=vr(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(br).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(br).join(`
`),_.length>0&&(_+=`
`)):(g=[Ar(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(br).join(`
`),_=[Ar(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:mr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,fr(`linearToOutputTexel`,n.outputColorSpace),gr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(br).join(`
`)),o=wr(o),o=xr(o,n),o=Sr(o,n),s=wr(s),s=xr(s,n),s=Sr(s,n),o=Or(o),s=Or(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ar(i,i.VERTEX_SHADER,y),S=ar(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=dr(i,x,`vertex`),n=dr(i,S,`fragment`);pe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):Ge(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ir(i,h),T=yr(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,or)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sr++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Vr=0,Hr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ur(e),t.set(e,n)),n}},Ur=class{constructor(e){this.id=Vr++,this.code=e,this.usedTimes=0}};function Wr(e){return e===1030||e===37490||e===36285}function Gr(e,t,n,r,i,a){let o=new ie,s=new Hr,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Ge(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=ft[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,F=!!i.bumpMap&&i.wireframe===!1,I=!!i.normalMap,L=!!i.displacementMap,ae=!!i.emissiveMap,oe=!!i.metalnessMap,R=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.dispersion>0,z=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=se&&!!i.anisotropyMap,pe=ce&&!!i.clearcoatMap,B=ce&&!!i.clearcoatNormalMap,me=ce&&!!i.clearcoatRoughnessMap,he=z&&!!i.iridescenceMap,ge=z&&!!i.iridescenceThicknessMap,ve=ue&&!!i.sheenColorMap,ye=ue&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=de&&!!i.transmissionMap,we=de&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,V=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(V=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:F,normalMap:I,displacementMap:L,emissiveMap:ae,normalMapObjectSpace:I&&i.normalMapType===1,normalMapTangentSpace:I&&i.normalMapType===0,packedNormalMap:I&&i.normalMapType===0&&Wr(i.normalMap.format),metalnessMap:oe,roughnessMap:R,anisotropy:se,anisotropyMap:fe,clearcoat:ce,clearcoatMap:pe,clearcoatNormalMap:B,clearcoatRoughnessMap:me,dispersion:le,iridescence:z,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:ue,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:de,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:F&&m(i.bumpMap.channel),normalMapUv:I&&m(i.normalMap.channel),displacementMapUv:L&&m(i.displacementMap.channel),emissiveMapUv:ae&&m(i.emissiveMap.channel),metalnessMapUv:oe&&m(i.metalnessMap.channel),roughnessMapUv:R&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:B&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:be&&m(i.specularMap.channel),specularColorMapUv:xe&&m(i.specularColorMap.channel),specularIntensityMapUv:Se&&m(i.specularIntensityMap.channel),transmissionMapUv:Ce&&m(i.transmissionMap.channel),thicknessMapUv:we&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(I||se),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&I===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:V,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&_e.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&_e.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ft[t];n=U.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Br(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Kr(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function qr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yr(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||qr),r.length>1&&r.sort(t||Jr),i.length>1&&i.sort(t||Jr),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Xr(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Yr,e.set(t,[i])):n>=r.length?(i=new Yr,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new V};break;case`SpotLight`:n={position:new W,direction:new W,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function Qr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $r=0;function ei(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ti(e){let t=new Zr,n=Qr(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new z,o=new z;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ei);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=$r++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ni(e){let t=new ti(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ri(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ni(e),t.set(n,[a])):r>=i.length?(a=new ni(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ii=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ai=`uniform sampler2D shadow_pass;
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
}`,oi=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],si=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ci=new z,li=new W,ui=new W;function di(e,n,r){let i=new E,a=new Me,o=new Me,s=new xe,c=new je,l=new ye,u={},d=r.maxTextureSize,f={0:1,1:0,2:2},p=new D({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ii,fragmentShader:ai}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new De;h.setAttribute(`position`,new R(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new B(h,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(n,r,c){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||n.length===0)return;this.type===2&&(Ge(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=n.length;l<u;l++){let u=n[l],f=u.shadow;if(f===void 0){Ge(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let h=f.getFrameExtents();a.multiply(h),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/h.x),a.x=o.x*h.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/h.y),a.y=o.y*h.y,f.mapSize.y=o.y));let g=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){Ge(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new Re(a.x,a.y,{format:We,type:_,minFilter:de,magFilter:de,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new M(a.x,a.y,b),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=t,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Xe,f.map.depthTexture.magFilter=Xe}else u.isPointLight?(f.map=new Vt(a.x),f.map.depthTexture=new F(a.x,ee)):(f.map=new Re(a.x,a.y),f.map.depthTexture=new M(a.x,a.y,ee)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=t,this.type===1?(f.map.depthTexture.compareFunction=g?518:515,f.map.depthTexture.minFilter=de,f.map.depthTexture.magFilter=de):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=Xe,f.map.depthTexture.magFilter=Xe);f.camera.updateProjectionMatrix()}let v=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(s)}if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),li.setFromMatrixPosition(u.matrixWorld),e.position.copy(li),ui.copy(e.position),ui.add(oi[t]),e.up.copy(si[t]),e.lookAt(ui),e.updateMatrixWorld(),n.makeTranslation(-li.x,-li.y,-li.z),ci.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(ci,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(u);i=f.getFrustum(),C(r,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&x(f,c),f.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,f)};function x(t,r){let i=n.update(g);p.defines.VSM_SAMPLES!==t.blurSamples&&(p.defines.VSM_SAMPLES=t.blurSamples,m.defines.VSM_SAMPLES=t.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),t.mapPass===null&&(t.mapPass=new Re(a.x,a.y,{format:We,type:_})),p.uniforms.shadow_pass.value=t.map.depthTexture,p.uniforms.resolution.value=t.mapSize,p.uniforms.radius.value=t.radius,e.setRenderTarget(t.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=t.mapPass.texture,m.uniforms.resolution.value=t.mapSize,m.uniforms.radius.value=t.radius,e.setRenderTarget(t.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function S(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,w)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function C(t,r,a,o,s){if(t.visible===!1)return;if(t.layers.test(r.layers)&&(t.isMesh||t.isLine||t.isPoints)&&(t.castShadow||t.receiveShadow&&s===3)&&(!t.frustumCulled||i.intersectsObject(t))){t.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,t.matrixWorld);let i=n.update(t),c=t.material;if(Array.isArray(c)){let n=i.groups;for(let l=0,u=n.length;l<u;l++){let u=n[l],d=c[u.materialIndex];if(d&&d.visible){let n=S(t,d,o,s);t.onBeforeShadow(e,t,r,a,i,n,u),e.renderBufferDirect(a,null,i,n,t,u),t.onAfterShadow(e,t,r,a,i,n,u)}}}else if(c.visible){let n=S(t,c,o,s);t.onBeforeShadow(e,t,r,a,i,n,null),e.renderBufferDirect(a,null,i,n,t,null),t.onAfterShadow(e,t,r,a,i,n,null)}}let c=t.children;for(let e=0,t=c.length;e<t;e++)C(c[e],r,a,o,s)}function w(e){e.target.removeEventListener(`dispose`,w);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fi(e,t){function n(){let t=!1,n=new xe,r=null,i=new xe(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=N[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),F=e.getParameter(e.VIEWPORT),I=new xe().fromArray(ie),L=new xe().fromArray(F);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),R(e.CULL_FACE),fe(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function z(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:pe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:pe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:pe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:pe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function B(t,n){t.side===2?se(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?se(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==ee&&(M&&e.lineWidth(t),ee=t)}function _e(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ve(t){t?R(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+j-1),ne!==t&&(e.activeTexture(t),ne=t)}function be(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+j-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function Se(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){pe(`WebGLState:`,e)}}function H(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Pe(t){I.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))}function Fe(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function U(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,I.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:z,setBlending:fe,setMaterial:B,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:je,texImage3D:Me,pixelStorei:Ne,getParameter:H,updateUBOMapping:Ie,uniformBlockBinding:U,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:Oe,scissor:Pe,viewport:Fe,reset:Le}}function pi(e,t,n,i,a,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Me,d=new WeakMap,f=new Set,p,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):le(`canvas`)}function _(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=g(n,a));let o=t?g(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ge(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&Ge(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Ge(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Ge(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Se:_e.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Ge(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),E(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),O(t)}function E(e){let t=i.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=m.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&D(e),Object.keys(r).length===0&&m.delete(n)}i.remove(e)}function D(t){let n=i.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=m.get(r);delete a[n.__cacheKey],s.memory.textures--}function O(t){let n=i.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),i.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=i.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),i.remove(r[t])}i.remove(t)}let ee=0;function k(){ee=0}function A(){return ee}function M(e){ee=e}function N(){let e=ee;return e>=a.maxTextures&&Ge(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+a.maxTextures),ee+=1,e}function te(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,r){let a=i.get(t);if(t.isVideoTexture&&Ee(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Ge(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Ge(`WebGLRenderer: Texture marked for update but image is incomplete`);else{z(a,t,r);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+r)}function ne(t,r){let a=i.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){z(a,t,r);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+r)}function re(t,r){let a=i.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){z(a,t,r);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+r)}function ie(t,r){let a=i.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ue(a,t,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+r)}let F={[qe]:e.REPEAT,[Pe]:e.CLAMP_TO_EDGE,[oe]:e.MIRRORED_REPEAT},I={[Xe]:e.NEAREST,[r]:e.NEAREST_MIPMAP_NEAREST,[j]:e.NEAREST_MIPMAP_LINEAR,[de]:e.LINEAR,[H]:e.LINEAR_MIPMAP_NEAREST,[Ve]:e.LINEAR_MIPMAP_LINEAR},L={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&Ge(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,F[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,F[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,F[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,I[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,I[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,L[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,a.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function R(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let o=te(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&D(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function se(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ce(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=se(n.start,r.width,4),c=se(t.start,r.width,4);n.start<=i+1&&a===c&&se(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function z(t,r,s){let c=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(c=e.TEXTURE_3D);let l=R(t,r),u=r.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=i.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=_e.getPrimaries(_e.workingColorSpace),i=r.colorSpace===``?null:_e.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=_(r.image,!1,a.maxTextureSize);t=De(r,t);let i=o.convert(r.format,r.colorSpace),p=o.convert(r.type),m=x(r.internalFormat,i,p,r.normalized,r.colorSpace,r.isVideoTexture);ae(c,r);let h,g=r.mipmaps,b=r.isVideoTexture!==!0,w=d.__version===void 0||l===!0,T=u.dataReady,E=C(r,t);if(r.isDepthTexture)m=S(r.format===Ke,r.type),w&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,i,p,null));else if(r.isDataTexture)if(g.length>0){b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,r=g.length;t<r;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,i,p,h.data);r.generateMipmaps=!1}else b?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ce(r,t,i,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,i,p,t.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){b&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let a=0,o=g.length;a<o;a++)if(h=g[a],r.format!==1023)if(i!==null)if(b){if(T)if(r.layerUpdates.size>0){let t=Fe(h.width,h.height,r.format,r.type);for(let o of r.layerUpdates){let r=h.data.subarray(o*t/h.data.BYTES_PER_ELEMENT,(o+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,h.width,h.height,1,i,r)}r.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,h.width,h.height,t.depth,i,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,m,h.width,h.height,t.depth,0,h.data,0,0);else Ge(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else b?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,h.width,h.height,t.depth,i,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,m,h.width,h.height,t.depth,0,i,p,h.data)}else{b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,a=g.length;t<a;t++)h=g[t],r.format===1023?b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,i,p,h.data):i===null?Ge(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,i,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(r.isDataArrayTexture)if(b){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T)if(r.layerUpdates.size>0){let a=Fe(t.width,t.height,r.format,r.type);for(let o of r.layerUpdates){let r=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,i,p,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,i,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,i,p,t.data);else if(r.isData3DTexture)b?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,i,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,i,p,t.data);else if(r.isFramebufferTexture){if(w)if(b)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let r=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,r,a,0,i,p,null),r>>=1,a>>=1}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&w){let t=Oe(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,r=g.length;t<r;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,i,p,h):n.texImage2D(e.TEXTURE_2D,t,m,i,p,h);r.generateMipmaps=!1}else if(b){if(w){let r=Oe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,i,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,i,p,t);v(r)&&y(c),d.__version=u.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function ue(t,r,s){if(r.image.length!==6)return;let c=R(t,r),l=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=i.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=_e.getPrimaries(_e.workingColorSpace),i=r.colorSpace===``?null:_e.getPrimaries(r.colorSpace),d=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=r.isCompressedTexture||r.image[0].isCompressedTexture,p=r.image[0]&&r.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(r.image[e],!0,a.maxCubemapSize):m[e]=p?r.image[e].image:r.image[e],m[e]=De(r,m[e]);let h=m[0],g=o.convert(r.format,r.colorSpace),b=o.convert(r.type),S=x(r.internalFormat,g,b,r.normalized,r.colorSpace),w=r.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=C(r,h);ae(e.TEXTURE_CUBE_MAP,r);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let i=0;i<O.length;i++){let a=O[i];r.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,b,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,S,a.width,a.height,0,g,b,a.data):g===null?Ge(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,S,a.width,a.height,0,a.data)}}}else{if(O=r.mipmaps,w&&T){O.length>0&&D++;let t=Oe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(r)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function fe(t,r,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=x(a.internalFormat,d,f,a.normalized,a.colorSpace),m=i.get(r),h=i.get(a);if(h.__renderTarget=r,!m.__hasExternalTextures){let t=Math.max(1,r.width>>u),i=Math.max(1,r.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,i,r.depth,0,d,f,null):n.texImage2D(l,u,p,t,i,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Te(r)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,we(r)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function B(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Te(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=x(a.internalFormat,s,l,a.normalized,a.colorSpace);Te(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,r,a){let s=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=i.get(r.depthTexture);if(l.__renderTarget=r,(!l.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,r.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ae(e.TEXTURE_CUBE_MAP,r.depthTexture);let t=o.convert(r.depthTexture.format),i=o.convert(r.depthTexture.type),a;r.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,r.width,r.height,0,t,i,null)}}else P(r.depthTexture,0);let u=l.__webglTexture,d=we(r),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)Te(r)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(r.depthTexture.format===1027)Te(r)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function he(t){let r=i.get(t),a=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)me(r.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(r.__webglFramebuffer[0],t,0):me(r.__webglFramebuffer,t,0)}else if(a){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),B(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),B(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){let a=i.get(t);n!==void 0&&fe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&he(t)}function ve(t){let r=t.texture,a=i.get(t),c=i.get(r);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=r.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps&&r.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=i.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Te(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=x(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),B(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0)for(let i=0;i<r.mipmaps.length;i++)fe(a.__webglFramebuffer[n][i],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i);else fe(a.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(r)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let r=0,o=l.length;r<o;r++){let o=l[r],s=i.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),ae(c,o),fe(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+r,c,0),v(o)&&y(c)}n.unbindTexture()}else{let i=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(i=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(i,c.__webglTexture),ae(i,r),r.mipmaps&&r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)fe(a.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,i,n);else fe(a.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,i,0);v(r)&&y(i),n.unbindTexture()}t.depthBuffer&&he(t)}function ye(e){let t=e.textures;for(let r=0,a=t.length;r<a;r++){let a=t[r];if(v(a)){let t=b(e),r=i.get(a).__webglTexture;n.bindTexture(t,r),y(t),n.unbindTexture()}}}let be=[],xe=[];function Ce(t){if(t.samples>0){if(Te(t)===!1){let r=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=i.get(t),d=r.length>1;if(d)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=i.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(be.length=0,xe.length=0,be.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(be.push(c),xe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=i.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(a.maxSamples,e.samples)}function Te(e){let n=i.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ee(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_e.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ge(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):pe(`WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=ge,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function mi(e,t){function n(n,r=``){let i,a=_e.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gi=`
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

}`,_i=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Te(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new D({vertexShader:hi,fragmentShader:gi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vi=class extends w{constructor(e,n){super();let r=this,i=null,o=1,s=null,c=`local-floor`,l=1,u=null,d=null,f=null,p=null,m=null,g=null,_=typeof XRWebGLBinding<`u`,v=new _i,b={},x=n.getContextAttributes(),S=null,C=null,w=[],T=[],E=new Me,D=null,O=new a;O.viewport=new xe;let k=new a;k.viewport=new xe;let A=[O,k],j=new be,N=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new se,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new se,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new se,w[e]=t),t.getHandSpace()};function P(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){i.removeEventListener(`select`,P),i.removeEventListener(`selectstart`,P),i.removeEventListener(`selectend`,P),i.removeEventListener(`squeeze`,P),i.removeEventListener(`squeezestart`,P),i.removeEventListener(`squeezeend`,P),i.removeEventListener(`end`,ie),i.removeEventListener(`inputsourceschange`,F);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}N=null,te=null,v.reset();for(let e in b)delete b[e];e.setRenderTarget(S),m=null,p=null,f=null,i=null,C=null,z.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){o=e,r.isPresenting===!0&&Ge(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,r.isPresenting===!0&&Ge(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,n)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(a){if(i=a,i!==null){if(S=e.getRenderTarget(),i.addEventListener(`select`,P),i.addEventListener(`selectstart`,P),i.addEventListener(`selectend`,P),i.addEventListener(`squeeze`,P),i.addEventListener(`squeezestart`,P),i.addEventListener(`squeezeend`,P),i.addEventListener(`end`,ie),i.addEventListener(`inputsourceschange`,F),x.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let r=null,a=null,s=null;x.depth&&(s=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,r=x.stencil?Ke:t,a=x.stencil?re:ee);let c={colorFormat:n.RGBA8,depthFormat:s,scaleFactor:o};f=this.getBinding(),p=f.createProjectionLayer(c),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),C=new Re(p.textureWidth,p.textureHeight,{format:ne,type:h,depthTexture:new M(p.textureWidth,p.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,r),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(i,n,t),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Re(m.framebufferWidth,m.framebufferHeight,{format:ne,type:h,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await i.requestReferenceSpace(c),z.setContext(i),z.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}let I=new W,L=new W;function ae(e,t,n){I.setFromMatrixPosition(t.matrixWorld),L.setFromMatrixPosition(n.matrixWorld);let r=I.distanceTo(L),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;v.texture!==null&&(v.depthNear>0&&(t=v.depthNear),v.depthFar>0&&(n=v.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(N!==j.near||te!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,te=j.far),j.layers.mask=e.layers.mask|6,O.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let r=e.parent,a=j.cameras;oe(j,r);for(let e=0;e<a.length;e++)oe(a[e],r);a.length===2?ae(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),R(e,j,r)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=y*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(p!==null||m!==null)return l},this.setFoveation=function(e){l=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(j)},this.getCameraTexture=function(e){return b[e]};let ce=null;function le(t,n){if(d=n.getViewerPose(u||s),g=n,d!==null){let t=d.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],o=null;if(m!==null)o=m.getViewport(i);else{let t=f.getViewSubImage(p,i);o=t.viewport,r===0&&(e.setRenderTargetTextures(C,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(C))}let s=A[r];s===void 0&&(s=new a,s.layers.enable(r),s.viewport=new xe,A[r]=s),s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(i.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),r===0&&(j.matrix.copy(s.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(s)}let o=i.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&_){f=r.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&v.init(e,i.renderState)}if(o&&o.includes(`camera-access`)&&_){e.state.unbindTexture(),f=r.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=b[n];e||(e=new Te,b[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<w.length;e++){let t=T[e],r=w[e];t!==null&&r!==void 0&&r.update(t,n,u||s)}ce&&ce(t,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),g=null}let z=new ut;z.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},yi=new z,bi=new q;bi.set(-1,0,0,0,1,0,0,0,1);function xi(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ae(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(yi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(bi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Si(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return pe(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ge(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Ge(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ci=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function Ti(){return wi===null&&(wi=new A(Ci,16,16,We,_),wi.name=`DFG_LUT`,wi.minFilter=de,wi.magFilter=de,wi.wrapS=Pe,wi.wrapT=Pe,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Ei=class{constructor(t={}){let{canvas:r=He(),context:i=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=h}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<`u`&&i instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);v=i.getContextAttributes().alpha}else v=s;let y=g,b=new Set([f,Qe,n]),x=new Set([h,ee,Be,re,e,ue]),S=new Uint32Array(4),C=new Int32Array(4),w=new W,T=null,D=null,O=[],k=[],A=null;this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,M=!1,N=null,te=null,P=null,ne=null;this._outputColorSpace=we;let ie=0,F=0,L=null,ae=-1,oe=null,R=new xe,se=new xe,ce=null,le=new V(0),de=0,fe=r.width,B=r.height,me=1,he=null,ge=null,ye=new xe(0,0,fe,B),be=new xe(0,0,fe,B),Se=!1,Ce=new E,Te=!1,Ee=!1,De=new z,Oe=new W,ke=new xe,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return L===null?me:1}let H=i;function Pe(e,t){return r.getContext(e,t)}try{let e={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in r&&r.setAttribute(`data-engine`,`three.js r185`),r.addEventListener(`webglcontextlost`,ct,!1),r.addEventListener(`webglcontextrestored`,lt,!1),r.addEventListener(`webglcontextcreationerror`,J,!1),H===null){let t=`webgl2`;if(H=Pe(t,e),H===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw pe(`WebGLRenderer: `+e.message),e}let Fe,Ie,U,Le,G,K,ze,q,Ue,We,Ke,qe,Je,Ye,Xe,Ze,$e,et,tt,nt,rt,it,at;function ot(){Fe=new Ut(H),Fe.init(),rt=new mi(H,Fe),Ie=new yt(H,Fe,t,rt),U=new fi(H,Fe),Ie.reversedDepthBuffer&&m&&U.buffers.depth.setReversed(!0),te=H.createFramebuffer(),P=H.createFramebuffer(),ne=H.createFramebuffer(),Le=new Kt(H),G=new Kr,K=new pi(H,Fe,U,G,Ie,rt,Le),ze=new Ht(j),q=new dt(H),it=new _t(H,q),Ue=new Wt(H,q,Le,it),We=new Jt(H,Ue,q,it,Le),et=new qt(H,Ie,K),Xe=new bt(G),Ke=new Gr(j,ze,Fe,Ie,it,Xe),qe=new xi(j,G),Je=new Xr,Ye=new ri(Fe),$e=new gt(j,ze,U,We,v,l),Ze=new di(j,We,Ie),at=new Si(H,Le,Ie,U),tt=new vt(H,Fe,Le),nt=new Gt(H,Fe,Le),Le.programs=Ke.programs,j.capabilities=Ie,j.extensions=Fe,j.properties=G,j.renderLists=Je,j.shadowMap=Ze,j.state=U,j.info=Le}ot(),y!==1009&&(A=new Xt(y,r.width,r.height,c,a,o));let st=new vi(j,H);this.xr=st,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,B,!1))},this.getSize=function(e){return e.set(fe,B)},this.setSize=function(e,t,n=!0){if(st.isPresenting){Ge(`WebGLRenderer: Can't change size while VR device is presenting.`);return}fe=e,B=t,r.width=Math.floor(e*me),r.height=Math.floor(t*me),n===!0&&(r.style.width=e+`px`,r.style.height=t+`px`),A!==null&&A.setSize(r.width,r.height),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(fe*me,B*me).floor()},this.setDrawingBufferSize=function(e,t,n){fe=e,B=t,me=n,r.width=Math.floor(e*n),r.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(y===1009){pe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ge(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}A.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(R)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),U.viewport(R.copy(ye).multiplyScalar(me).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),U.scissor(se.copy(be).multiplyScalar(me).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){U.setScissorTest(Se=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=b.has(t)}if(e){let e=L.texture.type,t=x.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(S[0]=i,S[1]=a,S[2]=o,S[3]=r,H.clearBufferuiv(H.COLOR,0,S)):(C[0]=i,C[1]=a,C[2]=o,C[3]=r,H.clearBufferiv(H.COLOR,0,C))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){r.removeEventListener(`webglcontextlost`,ct,!1),r.removeEventListener(`webglcontextrestored`,lt,!1),r.removeEventListener(`webglcontextcreationerror`,J,!1),$e.dispose(),Je.dispose(),Ye.dispose(),G.dispose(),ze.dispose(),We.dispose(),it.dispose(),at.dispose(),Ke.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,St),st.removeEventListener(`sessionend`,Ct),wt.stop()};function ct(e){e.preventDefault(),ve(`WebGLRenderer: Context Lost.`),M=!0}function lt(){ve(`WebGLRenderer: Context Restored.`),M=!1;let e=Le.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Le.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function J(e){pe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Y(e){let t=e.target;t.removeEventListener(`dispose`,Y),ft(t)}function ft(e){pt(e),G.remove(e)}function pt(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=q.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*Me()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh)if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?q.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,n),e.side=0,e.needsUpdate=!0,At(e,t,n),e.side=2):At(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),D=Ye.get(n),D.init(t),k.push(D),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),D.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];mt(a,n,e),r.add(a)}else mt(t,n,e),r.add(t)}),D=k.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){G.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function xt(e){ht&&ht(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new ut;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){ht=e,st.setAnimationLoop(e),e===null?wt.stop():wt.start()},st.addEventListener(`sessionstart`,St),st.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){pe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(M===!0)return;N!==null&&N.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=A!==null&&(L===null||n)&&A.begin(j,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,L),D=Ye.get(e,k.length),D.init(t),D.state.textureUnits=K.getTextureUnits(),k.push(D),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(De,Ne,t.reversedDepth),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),T=Je.get(e,O.length),T.init(),O.push(T),st.enabled===!0&&st.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,j.sortObjects)}Tt(e,t,0,j.sortObjects),T.finish(),j.sortObjects===!0&&T.sort(he,ge,t.reversedDepth),je=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,je&&$e.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Xe.beginShadows();let i=D.state.shadowsArray;if(Ze.render(i,e,t),Te===!0&&Xe.endShadows(),(r&&A.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(D.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}je&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(T,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),je&&$e.render(e),Et(T,e,t)}L!==null&&F===0&&(K.updateMultisampleRenderTarget(L),K.updateRenderTargetMipmap(L)),r&&A.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),it.resetDefaultState(),ae=-1,oe=null,k.pop(),k.length>0?(D=k[k.length-1],K.setTextureUnits(D.state.textureUnits),Te===!0&&Xe.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,O.pop(),T=O.length>0?O[O.length-1]:null,N!==null&&N.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)D.pushLightProbeGrid(e);else if(e.isLight)D.pushLight(e),e.castShadow&&D.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Ce.intersectsSprite(e)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let t=We.update(e),i=e.material;i.visible&&T.push(e,t,i,n,ke.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ce.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ke.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&T.push(e,t,s,n,ke.z,o)}}else i.visible&&T.push(e,t,i,n,ke.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;D.setupLightsView(n),Te===!0&&Xe.setGlobalState(j.clippingPlanes,n),r&&U.viewport(R.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);D.state.transmissionRenderTarget[r.id]=new Re(1,1,{generateMipmaps:!0,type:e?_:h,minFilter:Ve,samples:Math.max(4,Ie.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let i=D.state.transmissionRenderTarget[r.id],a=r.viewport||R;i.setSize(a.z*j.transmissionResolutionScale,a.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(i),j.getClearColor(le),de=j.getClearAlpha(),de<1&&j.setClearColor(16777215,.5),j.clear(),je&&$e.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),D.setupLightsView(r),Te===!0&&Xe.setGlobalState(j.clippingPlanes,r),Ot(e,n,r),K.updateMultisampleRenderTarget(i),K.updateRenderTargetMipmap(i),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(i),K.updateRenderTargetMipmap(i))}j.setRenderTarget(s,c,l),j.setClearColor(le,de),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Ae);let r=G.get(e),i=D.state.lights,a=D.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,D.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Y),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Ke.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Mt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=D.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ir.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Ae),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?j.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_e.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=D.state.lights;if(Te===!0&&(Ee===!0||e!==oe)){let t=e===oe&&r.id===ae;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=D.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(U.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ae&&(ae=r.id,C=!0),v.needsLights){let e=Nt(D.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||oe!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(H,`projectionMatrix`,e.projectionMatrix),T.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(H,Oe.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&T.setValue(H,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&T.setValue(H,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){T.setOptional(H,i,`bindMatrix`),T.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(H,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(T.setOptional(H,i,`batchingTexture`),T.setValue(H,`batchingTexture`,i._matricesTexture,K),T.setOptional(H,i,`batchingIdTexture`),T.setValue(H,`batchingIdTexture`,i._indirectTexture,K),T.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(H,`batchingColorTexture`,i._colorsTexture,K));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ti()),C){if(T.setValue(H,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ft(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,me,B,D.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ir.upload(H,jt(v),E,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ir.upload(H,jt(v),E,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(H,`center`,i.center),T.setValue(H,`modelViewMatrix`,i.modelViewMatrix),T.setValue(H,`normalMatrix`,i.normalMatrix),T.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ie=t,F=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),R.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,U.viewport(R),U.scissor(se),U.setScissorTest(ce),ae=-1;return}if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,R.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else R.copy(ye).multiplyScalar(me).floor(),se.copy(be).multiplyScalar(me).floor(),ce=Se;if(n!==0&&(r=te),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(R),U.scissor(se),U.setScissorTest(ce),i){let r=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}ae=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){pe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(c)){pe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ie.textureTypeReadable(l)){pe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=L===null?null:G.get(L).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ie.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0);let f=L===null?null:G.get(L).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,f);let p=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await I(H,p,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.deleteBuffer(d),H.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,P),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){ie=0,F=0,L=null,U.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ne}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(e),t.unpackColorSpace=_e._getUnpackColorSpace()}},Di=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness===void 0?.003:t.defaultThickness,r=new V().fromArray(t.defaultColor===void 0?[0,0,0]:t.defaultColor),i=t.defaultAlpha===void 0?1:t.defaultAlpha,a=t.defaultKeepAlive!==void 0&&t.defaultKeepAlive,o={},s={},c={},l={outlineThickness:{value:n},outlineColor:{value:r},outlineAlpha:{value:i}},u=[`#include <common>`,`#include <uv_pars_vertex>`,`#include <displacementmap_pars_vertex>`,`#include <fog_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <logdepthbuf_pars_vertex>`,`#include <clipping_planes_pars_vertex>`,`uniform float outlineThickness;`,`vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {`,`	float thickness = outlineThickness;`,`	const float ratio = 1.0;`,`	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );`,`	vec4 norm = normalize( pos - pos2 );`,`	return pos + norm * thickness * pos.w * ratio;`,`}`,`void main() {`,`	#include <uv_vertex>`,`	#include <beginnormal_vertex>`,`	#include <morphnormal_vertex>`,`	#include <skinbase_vertex>`,`	#include <skinnormal_vertex>`,`	#include <begin_vertex>`,`	#include <morphtarget_vertex>`,`	#include <skinning_vertex>`,`	#include <displacementmap_vertex>`,`	#include <project_vertex>`,`	vec3 outlineNormal = - objectNormal;`,`	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );`,`	#include <logdepthbuf_vertex>`,`	#include <clipping_planes_vertex>`,`	#include <fog_vertex>`,`}`].join(`
`),d=[`#include <common>`,`#include <fog_pars_fragment>`,`#include <logdepthbuf_pars_fragment>`,`#include <clipping_planes_pars_fragment>`,`uniform vec3 outlineColor;`,`uniform float outlineAlpha;`,`void main() {`,`	#include <clipping_planes_fragment>`,`	#include <logdepthbuf_fragment>`,`	gl_FragColor = vec4( outlineColor, outlineAlpha );`,`	#include <tonemapping_fragment>`,`	#include <colorspace_fragment>`,`	#include <fog_fragment>`,`	#include <premultiplied_alpha_fragment>`,`}`].join(`
`);function f(){return new D({type:`OutlineEffect`,uniforms:U.merge([Y.fog,Y.displacementmap,l]),vertexShader:u,fragmentShader:d,side:1})}function p(e){let t=o[e.uuid];return t===void 0&&(t={material:f(),used:!0,keepAlive:a,count:0},o[e.uuid]=t),t.used=!0,t.material}function m(e){let t=p(e);return s[t.uuid]=e,b(t,e),t}function h(e){let t=e.geometry,n=t!==void 0&&t.attributes.normal!==void 0;return e.isMesh===!0&&e.material!==void 0&&n===!0}function g(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=m(e.material[t]);else e.material=m(e.material);c[e.uuid]=e.onBeforeRender,e.onBeforeRender=v}}function _(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=s[e.material[t].uuid];else e.material=s[e.material.uuid];e.onBeforeRender=c[e.uuid]}}function v(e,t,n,r,i){let a=s[i.uuid];a!==void 0&&y(i,a)}function y(e,t){let n=t.userData.outlineParameters;e.uniforms.outlineAlpha.value=t.opacity,n!==void 0&&(n.thickness!==void 0&&(e.uniforms.outlineThickness.value=n.thickness),n.color!==void 0&&e.uniforms.outlineColor.value.fromArray(n.color),n.alpha!==void 0&&(e.uniforms.outlineAlpha.value=n.alpha)),t.displacementMap&&(e.uniforms.displacementMap.value=t.displacementMap,e.uniforms.displacementScale.value=t.displacementScale,e.uniforms.displacementBias.value=t.displacementBias)}function b(e,t){if(e.name===`invisible`)return;let n=t.userData.outlineParameters;e.fog=t.fog,e.toneMapped=t.toneMapped,e.premultipliedAlpha=t.premultipliedAlpha,e.displacementMap=t.displacementMap,n===void 0?(e.transparent=t.transparent,e.visible=t.visible):(e.visible=t.visible===!1?!1:n.visible===void 0||n.visible,e.transparent=n.alpha!==void 0&&n.alpha<1||t.transparent,n.keepAlive!==void 0&&(o[t.uuid].keepAlive=n.keepAlive)),(t.wireframe===!0||t.depthTest===!1)&&(e.visible=!1),t.clippingPlanes&&(e.clipping=!0,e.clippingPlanes=t.clippingPlanes,e.clipIntersection=t.clipIntersection,e.clipShadows=t.clipShadows),e.version=t.version}function x(){let e;e=Object.keys(s);for(let t=0,n=e.length;t<n;t++)s[e[t]]=void 0;e=Object.keys(c);for(let t=0,n=e.length;t<n;t++)c[e[t]]=void 0;e=Object.keys(o);for(let t=0,n=e.length;t<n;t++){let n=e[t];o[n].used===!1?(o[n].count++,o[n].keepAlive===!1&&o[n].count>60&&delete o[n]):(o[n].used=!1,o[n].count=0)}}this.render=function(t,n){if(this.enabled===!1){e.render(t,n);return}let r=e.autoClear;e.autoClear=this.autoClear,e.render(t,n),e.autoClear=r,this.renderOutline(t,n)},this.renderOutline=function(t,n){let r=e.autoClear,i=t.matrixWorldAutoUpdate,a=t.background,o=e.shadowMap.enabled;t.matrixWorldAutoUpdate=!1,t.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,t.traverse(g),e.render(t,n),t.traverse(_),x(),t.matrixWorldAutoUpdate=i,t.background=a,e.autoClear=r,e.shadowMap.enabled=o},this.setSize=function(t,n){e.setSize(t,n)}}},Oi=.012,ki=new Map([[`KeyW`,[0,1]],[`ArrowUp`,[0,1]],[`KeyS`,[0,-1]],[`ArrowDown`,[0,-1]],[`KeyA`,[-1,0]],[`ArrowLeft`,[-1,0]],[`KeyD`,[1,0]],[`ArrowRight`,[1,0]]]),Ai=new Set([`F5`,`F9`]),ji=class{target;panVector=new Me;zoomDelta=0;pointer=new Me;middlePanHeld=!1;dragRect;selectGesture;orderAt;held=new Set;justPressed=new Map;listeners=[];dragStart;dragAdditive=!1;pendingGesture;pendingOrder;constructor(e){this.target=e;let t=e=>{e.repeat||this.justPressed.set(e.code,{shift:e.shiftKey,ctrl:e.ctrlKey}),ki.has(e.code)&&this.held.add(e.code),(ki.has(e.code)||Ai.has(e.code))&&e.preventDefault()},n=e=>{this.held.delete(e.code)},r=e=>{this.zoomDelta+=e.deltaY,e.preventDefault()},i=e=>{this.toNdc(e,this.pointer),this.dragStart&&(this.dragRect=Mi(this.dragStart,this.pointer))},a=t=>{this.toNdc(t,this.pointer),t.button===0?(this.dragStart=this.pointer.clone(),this.dragAdditive=t.ctrlKey||t.shiftKey,this.dragRect=Mi(this.dragStart,this.pointer),e.setPointerCapture(t.pointerId)):t.button===1?(this.middlePanHeld=!0,e.setPointerCapture(t.pointerId)):t.button===2&&(this.pendingOrder=this.pointer.clone()),t.preventDefault()},o=t=>{if(t.button===1){this.middlePanHeld=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}if(t.button!==0||!this.dragStart)return;this.toNdc(t,this.pointer);let n=Mi(this.dragStart,this.pointer),r=Math.max(n.x1-n.x0,n.y1-n.y0);this.pendingGesture={rect:n,isBox:r>Oi,additive:this.dragAdditive,doubleClick:!1},this.dragStart=void 0,this.dragRect=void 0,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},s=e=>{let t=new Me,n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1)),this.pendingGesture={rect:Mi(t,t),isBox:!1,additive:e.ctrlKey||e.shiftKey,doubleClick:!0},e.preventDefault()},c=e=>e.preventDefault(),l=()=>{this.held.clear(),this.dragStart=void 0,this.dragRect=void 0,this.middlePanHeld=!1};window.addEventListener(`keydown`,t),window.addEventListener(`keyup`,n),e.addEventListener(`wheel`,r,{passive:!1}),e.addEventListener(`pointermove`,i),e.addEventListener(`pointerdown`,a),e.addEventListener(`pointerup`,o),e.addEventListener(`dblclick`,s),e.addEventListener(`contextmenu`,c),window.addEventListener(`blur`,l),this.listeners.push(()=>window.removeEventListener(`keydown`,t),()=>window.removeEventListener(`keyup`,n),()=>e.removeEventListener(`wheel`,r),()=>e.removeEventListener(`pointermove`,i),()=>e.removeEventListener(`pointerdown`,a),()=>e.removeEventListener(`pointerup`,o),()=>e.removeEventListener(`dblclick`,s),()=>e.removeEventListener(`contextmenu`,c),()=>window.removeEventListener(`blur`,l))}toNdc(e,t){let n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1))}sample(){this.panVector.set(0,0);for(let e of this.held){let t=ki.get(e);t&&(this.panVector.x+=t[0],this.panVector.y+=t[1])}this.panVector.lengthSq()>1&&this.panVector.normalize(),this.selectGesture=this.pendingGesture,this.orderAt=this.pendingOrder}wasPressed(e){return this.justPressed.has(e)}pressModifiers(e){return this.justPressed.get(e)}consume(){this.zoomDelta=0,this.justPressed.clear(),this.pendingGesture=void 0,this.pendingOrder=void 0,this.selectGesture=void 0,this.orderAt=void 0}dispose(){for(let e of this.listeners)e();this.listeners.length=0}};function Mi(e,t){return{x0:Math.min(e.x,t.x),y0:Math.min(e.y,t.y),x1:Math.max(e.x,t.x),y1:Math.max(e.y,t.y)}}function Ni(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.z*r,z:e.x*r+e.z*n}}function Pi(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return Math.abs(t)/2}function Fi(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}function Ii(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)a.x<t&&(t=a.x),a.x>r&&(r=a.x),a.z<n&&(n=a.z),a.z>i&&(i=a.z);return{x0:t,z0:n,x1:r,z1:i}}function Li(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];!o||!s||o.z>t!=s.z>t&&e<(s.x-o.x)*(t-o.z)/(s.z-o.z)+o.x&&(r=!r)}return r}function Ri(e,t,n){let r=e=>e.x*t.x+e.z*t.z-n,i=[];for(let t=0;t<e.length;t++){let n=e[t],a=e[(t+1)%e.length];if(!n||!a)continue;let o=r(n),s=r(a),c=o>=-1e-6,l=s>=-1e-6;if(c&&i.push(n),c!==l&&Math.abs(o-s)>1e-9){let e=o/(o-s);i.push({x:n.x+(a.x-n.x)*e,z:n.z+(a.z-n.z)*e})}}return i}function zi(e,t){let n=0;for(let e=0;e<t.length;e++){let r=t[e],i=t[(e+1)%t.length];r&&i&&(n+=r.x*i.z-i.x*r.z)}let r=n>=0?t:[...t].reverse(),i=[...e];for(let e=0;e<r.length&&i.length;e++){let t=r[e],n=r[(e+1)%r.length];if(!t||!n)continue;let a=n.x-t.x,o=n.z-t.z,s=Math.max(Math.hypot(a,o),1e-9),c={x:-o/s,z:a/s};i=Ri(i,c,c.x*t.x+c.z*t.z)}return i}function Bi(e){if(e.length!==3)return 0;let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];if(!r||!i)return 0;let a=i.x-r.x,o=i.z-r.z;t=Math.max(t,a*a+o*o)}return t>1e-9?2*Pi(e)/t:0}function Vi(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/Math.max(i*i+a*a,1)));return Math.hypot(e-(n.x+i*o),t-(n.z+a*o))}function Hi(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/Math.max(i*i+a*a,1)));return{x:n.x+i*o,z:n.z+a*o}}function Ui(e,t,n){let r=1/0;for(let i=0;i<n.length-1;i++){let a=n[i],o=n[i+1];a&&o&&(r=Math.min(r,Vi(e,t,a,o)))}return r}function Wi(e,t){let n=1/0;for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length];if(!(!i||!a))for(let e=0;e<t.length;e++){let r=t[e],o=t[(e+1)%t.length];!r||!o||(n=Math.min(n,Vi(i.x,i.z,r,o),Vi(a.x,a.z,r,o),Vi(r.x,r.z,i,a),Vi(o.x,o.z,i,a)))}}return n}var Gi={downtown:3.8,commercial:3.5,residential:3};function Ki(e,t){return Math.max(1,Math.round(e/Gi[t]))}var qi=[`intact`,`damaged`,`rubble`],Ji={intact:1,damaged:1.02,rubble:1.16};function Yi(e){return e!==`rubble`}function Xi(e){return 100+Math.min(100,e.height)*.35}function Zi(e){let t=Ji[e.state],n=e.width*t/2,r=e.depth*t/2,i=e.rotation??0;if(i===0)return{x0:e.x-n,z0:e.z-r,x1:e.x+n,z1:e.z+r};let a=Math.cos(i),o=Math.sin(i),s=Math.abs(n*a)+Math.abs(r*o),c=Math.abs(n*o)+Math.abs(r*a);return{x0:e.x-s,z0:e.z-c,x1:e.x+s,z1:e.z+c}}function Qi(e){let t=Ji[e.state],n=e.width*t/2,r=e.depth*t/2,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=Ni(t,i);return{x:n.x+e.x,z:n.z+e.z}})}var X=1.8,$i=1.4,ea=.34,ta=.62;function na(e,t,n){let r=Math.hypot(e,t)/n;return r<ea?`downtown`:r<ta?`commercial`:`residential`}var ra={downtown:{minLot:40,height:[46,120],stopChance:.22,gapChance:.07,parkChance:.04,parkingChance:.1,towerChance:.16},commercial:{minLot:28,height:[18,48],stopChance:.1,gapChance:.1,parkChance:.07,parkingChance:.16,towerChance:.08},residential:{minLot:20,height:[8,20],stopChance:.03,gapChance:.13,parkChance:.14,parkingChance:.06,towerChance:.03}},ia=.05;function aa(e){return Bi(e)<ia}var oa=class e{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e){return Math.floor(this.next()*e)}save(){return{s:this.s}}static restore(t){let n=new e(0);return n.s=t.s>>>0,n}},sa={points:[],tags:[]};function ca(e,t){let{points:n,tags:r}=e;if(n.length<3)return sa;let i=[],a=[],o=e=>e.x*t.normal.x+e.z*t.normal.z-t.offset;for(let e=0;e<n.length;e++){let s=n[e],c=n[(e+1)%n.length];if(!s||!c)continue;let l=r[e]??-1,u=o(s),d=o(c),f=u>=-1e-6;if(f===d>=-1e-6){f&&(i.push(s),a.push(l));continue}let p=u-d;if(Math.abs(p)<1e-12)continue;let m=u/p,h={x:s.x+(c.x-s.x)*m,z:s.z+(c.z-s.z)*m};f?(i.push(s,h),a.push(l,t.tag)):(i.push(h),a.push(l))}return i.length>=3?{points:i,tags:a}:sa}function la(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return t/2}function ua(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length];if(!a||!o)continue;let s=a.x*o.z-o.x*a.z;t+=s,n+=(a.x+o.x)*s,r+=(a.z+o.z)*s}if(Math.abs(t)>1e-9)return{x:n/(3*t),z:r/(3*t)};let i=0,a=0;for(let t of e)i+=t.x,a+=t.z;let o=Math.max(e.length,1);return{x:i/o,z:a/o}}function da(e,t){let n=la(t.points)>=0?t:fa(t);return e.map((t,r)=>{let i=n;for(let n=0;n<e.length;n++){if(n===r)continue;let a=e[n];if(!a)continue;let o=t.x-a.x,s=t.z-a.z,c=Math.hypot(o,s);if(c<1e-6)continue;let l={x:o/c,z:s/c},u={x:(t.x+a.x)/2,z:(t.z+a.z)/2};if(i=ca(i,{normal:l,offset:u.x*l.x+u.z*l.z,tag:n}),i.points.length<3)return sa}return i})}function fa(e){let t=e.points.length,n=[],r=[];for(let i=0;i<t;i++){let a=e.points[t-1-i];a&&(n.push(a),r.push(e.tags[(t-2-i+t)%t]??-1))}return{points:n,tags:r}}function pa(e,t,n,r){let i=[...e];for(let e=0;e<r;e++){let e=da(i,t);i=i.map((t,r)=>{let i=e[r];if(!i||i.points.length<3)return t;let a=zi(n,i.points);return Pi(a)<1?t:ua(a)})}return i}function ma(e,t){let n=e;for(let r=0;r<e.points.length;r++){let i=e.points[r],a=e.points[(r+1)%e.points.length];if(!i||!a)continue;let o=e.tags[r]??-1,s=t(o);if(s<=0)continue;let c=a.x-i.x,l=a.z-i.z,u=Math.hypot(c,l);if(u<1e-9)continue;let d={x:-l/u,z:c/u};if(n=ca(n,{normal:d,offset:i.x*d.x+i.z*d.z+s,tag:o}),n.points.length<3)return sa}return n}function ha(e,t,n,r){let i=Ii(t),a=[],o=r*r,s=Math.max(1,n)*40;for(let r=0;r<s&&a.length<n;r++){let n=e.range(i.x0,i.x1),r=e.range(i.z0,i.z1);if(!Li(n,r,t))continue;let s=!1;for(let e of a){let t=e.x-n,i=e.z-r;if(t*t+i*i<o){s=!0;break}}s||a.push({x:n,z:r})}return a}var ga=[11,15],_a=.3,va=4,ya=2e4,ba=88,xa=3,Sa=400,Ca=.995,wa=[15,25],Ta=.75,Ea=3.4,Da=200,Oa=7,ka=4,Aa=12,ja={downtown:.15,commercial:.45,residential:.8},Ma=-2;function Na(e){return Ma-e}function Pa(e){return e<=Ma}function Fa(e){return e>=0?15/2:Pa(e)?32/2:0}function Ia(e,t,n){let r={blocks:[],buildings:[],roads:[],trees:[],cars:[]},i=Ii(t),a=n*.2,o={points:Fi({x0:i.x0-a,z0:i.z0-a,x1:i.x1+a,z1:i.z1+a}),tags:[-1,-1,-1,-1]},[s,c]=ga,l=da(pa(ha(e,t,s+e.int(c-s+1),n*_a),o,t,va),o);La(r,l,t);let u=l.map(t=>{if(!t||t.points.length<3)return;let r=ua(t.points),i=ja[na(r.x,r.z,n)];return e.next()<i?no(t):void 0});for(let i=0;i<l.length;i++){let a=l[i];if(!a||a.points.length<3)continue;let o=zi(t,a.points);Pi(o)<Sa||Ba(r,e,a,o,t,n,i,u[i])}return oo(r,e),r}function La(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];if(i)for(let t=0;t<i.points.length;t++){let a=i.tags[t]??-1;if(a<0||a<=r)continue;let o=i.points[t],s=i.points[(t+1)%i.points.length];!o||!s||Ra(e,o,s,32,!0,n)}}}function Ra(e,t,n,r,i,a){let o=n.x-t.x,s=n.z-t.z,c=Math.hypot(o,s);if(c<1)return;let l=Math.atan2(s,o),u={x:(t.x+n.x)/2,z:(t.z+n.z)/2},d=zi(a,Fi({x0:-c/2,z0:-r/2,x1:c/2,z1:r/2}).map(e=>{let t=Ni(e,l);return{x:t.x+u.x,z:t.z+u.z}}));$a(d,l,r)&&e.roads.push({...Ii(d),arterial:i,alongX:!0,rotation:l,clip:d})}function za(e,t){let n=3.4,r=21.5,i=[],a=[],o=(e,n)=>t.some(t=>Li(e,n,t)),s=(t,n)=>e.some(e=>e===t||!e.arterial?!1:Li(n.x,n.z,e.clip)?!0:e.clip.some((t,r)=>{let i=e.clip[(r+1)%e.clip.length];return i!==void 0&&Vi(n.x,n.z,t,i)<=.5})),c=(e,n)=>{let r=e.rotation??0,i=Fi({x0:-e.width/2,z0:-e.depth/2,x1:e.width/2,z1:e.depth/2}).map(t=>{let n=Ni(t,r);return{x:e.x+n.x,z:e.z+n.z}});for(let r of t){let t=zi(r,i);Pi(t)>.05&&n.push({...e,clip:t})}};for(let t of e){if(!t.arterial)continue;let e=t.rotation??0,l={x:(t.x0+t.x1)/2,z:(t.z0+t.z1)/2},u=t.clip.map(t=>Ni({x:t.x-l.x,z:t.z-l.z},-e).x),d=Math.min(...u),f=Math.max(...u);if(f-d<12)continue;let p=f-d>=50?[d,f].filter(n=>{let r=Ni({x:n,z:0},e);return s(t,{x:l.x+r.x,z:l.z+r.z})}):[],m=p.includes(d)?d+r+7/2+3:d,h=p.includes(f)?f-r-7/2-3:f;if(h-m>=12)for(let t of[-1.9,1.9]){let n=Ni({x:(m+h)/2,z:t},e);c({x:l.x+n.x,z:l.z+n.z,width:h-m,depth:.9,rotation:e},i)}for(let t of p){let i=t===d?t+r:t-r;for(let t=0;t<8;t++){let r=Ni({x:i,z:-7*n*.5+t*n},e),s={x:l.x+r.x,z:l.z+r.z};o(s.x,s.z)&&c({...s,width:7,depth:1.7,rotation:e},a)}}}return{centreLines:i,crosswalks:a}}function Ba(e,t,n,r,i,a,o,s){let c={points:n.points,tags:n.tags.map(e=>e>=0?Na(e):e)},l=da(pa(ha(t,r,Math.max(3,Math.round(Pi(r)/ya)),ba),c,r,xa),c);for(let t=0;t<l.length;t++){let n=l[t];if(n)for(let r=0;r<n.points.length;r++){let a=n.tags[r]??-1;if(a<0||a<=t)continue;let o=n.points[r],s=n.points[(r+1)%n.points.length];!o||!s||Ra(e,o,s,15,!1,i)}}for(let n of l)!n||n.points.length<3||Va(e,t,n,i,a,o,s)}function Va(e,t,n,r,i,a,o){let s=ma(n,Fa);if(s.points.length<3)return;let c=zi(r,s.points);if(Pi(c)<Sa)return;let l=ua(c),u=na(l.x,l.z,i),d=ra[u],f=t.next(),p=e.blocks.length,m=o??eo(s.points);if(f<d.parkChance){let n=ma(s,()=>7),i=n.points.length>=3?zi(r,n.points):[];if(Pi(i)<Sa)return;e.blocks.push({id:p,districtId:a,...Ii(c),district:u,kind:`park`,clip:c,innerClip:i,rotation:m}),io(e,t,i);return}if(f<d.parkChance+d.parkingChance){let n=ma(s,()=>7),i=n.points.length>=3?zi(r,n.points):[],o=eo(c);e.blocks.push({id:p,districtId:a,...Ii(c),district:u,kind:`parking`,clip:c,innerClip:i,rotation:o}),ao(e,t,i,c,o);return}e.blocks.push({id:p,districtId:a,...Ii(c),district:u,kind:`built`,clip:c,rotation:m});let h=ma(s,()=>7);if(h.points.length<3||(Ha(e,t,h.points,r,m,u,a,p,d),u!==`downtown`))return;let g=ma(s,()=>Oa),_=g.points.length>=3?zi(r,g.points):[];if(!Ua(e,p,c))return;let v=e.blocks[p];if(v&&Pi(_)>=Sa){e.blocks[p]={...v,innerClip:_};let t=e.buildings.filter(e=>e.blockId===p&&e.state!==`rubble`);io(e,new oa(Ya(p,_)),_,t.map(Qa),Aa)}}function Ha(e,t,n,r,i,a,o,s,c){let l=n.map(e=>Ni(e,-i)),u=r.map(e=>Ni(e,-i)),d=Ii(l);if(d.x1-d.x0<c.minLot||d.z1-d.z0<c.minLot)return;let f=[];ro(t,d,c,f);for(let n of f){if(t.next()<c.gapChance||n.x1-n.x0-1.4<=2||n.z1-n.z0-1.4<=2)continue;let r=zi(Fi({x0:n.x0+$i/2,x1:n.x1-$i/2,z0:n.z0+$i/2,z1:n.z1-$i/2}),l),d=Pi(r);if(d<25)continue;let f=zi(u,r),p=Pi(f);if(p<25)continue;let m=ua(f),h=0,g=0;for(let e of f)h=Math.max(h,Math.abs(e.x-m.x)),g=Math.max(g,Math.abs(e.z-m.z));let _=h*2,v=g*2;if(_<=2||v<=2)continue;let y=p<d-1,b=p<_*v*Ca,[x,S]=c.height,C=t.range(x,S),w=!y&&t.next()<c.towerChance?t.range(1.6,2.4):1;a!==`downtown`&&(C*=w);let T=Ni(m,i);e.buildings.push({id:0,x:T.x,z:T.z,width:_,depth:v,height:C,district:a,districtId:o,blockId:s,paletteIndex:t.int(7),greebles:y?0:1+t.int(3),rotation:i,state:y?`rubble`:`intact`,health:0,...b?{clip:f.map(e=>Ni(e,i))}:{}})}}function Ua(e,t,n){let r=e.buildings.findIndex(e=>e.blockId===t);if(r<0)return!1;let i=r;for(;e.buildings[i]?.blockId===t;)i++;let a=e.buildings.slice(r,i),o=[];for(let e of a){if(e.state!==`intact`||!Ka(e,n))continue;let t=qa(e,n);o.every(e=>Wi(Qa(e),Qa(t))>=wa[0]-1e-6)&&o.push(t)}return e.buildings.splice(r,a.length,...Wa(a,o)),o.length>0}function Wa(e,t){if(t.length===0)return[];let n=e=>e.reduce((e,t)=>t.state===`rubble`?e:e+Pi(Qa(t))*t.height,0),r=n(e),i=n(t);if(i<=0)return[...t];let a=Math.min(Math.max(r/i,1),Ea);return t.map(e=>({...e,height:Ga(e.height*a)}))}function Ga(e){return e<=Da?e:Da+120*(1-Math.exp(-(e-Da)/120))}function Ka(e,t){return Wi(Qa(e),t)<=7+$i+.1}function qa(e,t){let n=Qa(e).map(t=>({x:e.x+(t.x-e.x)*Ta,z:e.z+(t.z-e.z)*Ta})),r=Xa(e,t),i=7-Math.min(...n.map(e=>(e.x-r.a.x)*r.inward.x+(e.z-r.a.z)*r.inward.z)),a=Za(n,t,r.inward,i),o=n.map(e=>({x:e.x+r.inward.x*a,z:e.z+r.inward.z*a}));return{...e,x:e.x+r.inward.x*a,z:e.z+r.inward.z*a,width:e.width*Ta,depth:e.depth*Ta,height:e.height*Ja(e),...e.clip?{clip:o}:{}}}function Ja(e){let t=Math.imul(Math.round(e.x*10),2654435761)^Math.imul(Math.round(e.z*10),2246822507);return t^=Math.imul(Math.round((e.width+e.depth)*10),3266489909),t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,1+(t>>>0)/4294967296*.6}function Ya(e,t){let n=ua(t),r=Math.imul(e+1,2654435761)^Math.imul(Math.round(n.x),2246822507);return r^=Math.imul(Math.round(n.z),3266489909),(r^r>>>16)>>>0}function Xa(e,t){let n=ua(t),r;for(let i=0;i<t.length;i++){let a=t[i],o=t[(i+1)%t.length];if(!a||!o)continue;let s=Math.max(Math.hypot(o.x-a.x,o.z-a.z),1e-9),c={x:-(o.z-a.z)/s,z:(o.x-a.x)/s},l={x:(a.x+o.x)/2,z:(a.z+o.z)/2};(n.x-l.x)*c.x+(n.z-l.z)*c.z<0&&(c={x:-c.x,z:-c.z});let u=Vi(e.x,e.z,a,o);(!r||u<r.distance)&&(r={a,inward:c,distance:u})}if(!r)throw Error(`downtown block has no edge`);return r}function Za(e,t,n,r){let i=r=>e.every(e=>{let i={x:e.x+n.x*r,z:e.z+n.z*r};return Li(i.x,i.z,t)||Ui(i.x,i.z,[...t,t[0]])<=1e-5});if(i(r))return r;let a=0,o=r;for(let e=0;e<24;e++){let e=(a+o)/2;i(e)?a=e:o=e}return a}function Qa(e){return e.clip&&e.clip.length>=3?e.clip:Qi({...e,state:`intact`})}function $a(e,t,n){if(e.length<3)return!1;let r=e.map(e=>Ni(e,-t).x),i=Math.max(...r)-Math.min(...r);return i>=n&&Pi(e)>=i*n*.6}function eo(e){return to(e).angle}function to(e,t){let n=0,r=-1;for(let i=0;i<e.length;i++){if(t&&!t(i))continue;let a=e[i],o=e[(i+1)%e.length];if(!a||!o)continue;let s=o.x-a.x,c=o.z-a.z,l=s*s+c*c;l>r&&(r=l,n=Math.atan2(c,s))}return{angle:n,lengthSquared:r}}function no(e){let t=to(e.points,t=>(e.tags[t]??-1)>=0);return t.lengthSquared>0?t.angle:eo(e.points)}function ro(e,t,n,r,i=0){let a=t.x1-t.x0,o=t.z1-t.z0,s=a>=n.minLot*2,c=o>=n.minLot*2;if(!s&&!c){r.push(t);return}if(i>=2&&e.next()<n.stopChance){r.push(t);return}let l;l=s&&c?a>o?e.next()<.78:e.next()<.22:s;let u=e.range(.36,.64);if(l){let o=t.x0+a*u;ro(e,{...t,x1:o},n,r,i+1),ro(e,{...t,x0:o},n,r,i+1)}else{let a=t.z0+o*u;ro(e,{...t,z1:a},n,r,i+1),ro(e,{...t,z0:a},n,r,i+1)}}function io(e,t,n,r=[],i=ka){let a=Ii(n),o=[...n,n[0]],s=4+t.int(Math.max(2,Math.floor(Pi(n)/1400))),c=0;for(let e=0;e<s*3;e++)c^=Math.floor(t.next()*4294967296);let l=new oa(c),u=2+l.int(Math.max(1,Math.min(3,Math.floor(Pi(n)/2200)))),d=(e,t)=>Li(e,t,n)&&Ui(e,t,o)>=8&&r.every(n=>!Li(e,t,n)&&Ui(e,t,[...n,n[0]])>=i);for(let t=0;t<u;t++){let t;for(let e=0;e<8;e++){let e=l.range(a.x0,a.x1),n=l.range(a.z0,a.z1);if(d(e,n)){t={x:e,z:n};break}}if(!t)continue;let n=2+l.int(3),r=l.range(5,11),i=l.next()<.35;for(let a=0;a<n;a++){let n=l.range(0,Math.PI*2),o=a===0?0:l.range(2,r),s=t.x+Math.cos(n)*o,c=t.z+Math.sin(n)*o,u=a===0?i?l.range(2.4,2.88):l.range(1.45,1.92):l.range(1.12,1.8);d(s,c)&&e.trees.push({x:s,z:c,scale:u})}}}function ao(e,t,n,r,i){let a=Ii(n.map(e=>Ni(e,-i))),o=Math.floor((a.x1-a.x0-14)/15),s=Math.floor((a.z1-a.z0-14)/6);if(!(o<1||s<1))for(let c=0;c<s;c++)for(let s=0;s<o;s++){if(t.next()<.32)continue;let o=t.int(6),l=Ni({x:a.x0+7+15*(s+.5),z:a.z0+7+6*(c+.5)},i);!Li(l.x,l.z,n)||Ui(l.x,l.z,[...r,r[0]])<7||e.cars.push({x:l.x,z:l.z,alongX:!0,paletteIndex:o,parked:!0,rotation:i})}}function oo(e,t){for(let n of e.roads){let r=n.rotation??0,i={x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2},a=n.clip.map(e=>{let t=Ni({x:e.x-i.x,z:e.z-i.z},-r);return n.alongX?t.x:t.z}),o=Math.min(...a),s=Math.max(...a),c=Math.max(1,Math.floor((s-o)/(n.arterial?90:150)));for(let a=0;a<c;a++){let a;for(let e=0;e<12&&!a;e++){let e=t.range(0,1),c=(t.next()<.5?-1:1)*(n.arterial?8:4),l=Ni(n.alongX?{x:o+(s-o)*e,z:c}:{x:c,z:o+(s-o)*e},r),u={x:i.x+l.x,z:i.z+l.z};Li(u.x,u.z,n.clip)&&(a=u)}if(!a)continue;let c=t.int(6);e.cars.push({x:a.x,z:a.z,alongX:n.alongX,paletteIndex:c,parked:!1,rotation:r})}}}var so=11,co=1.75,lo=[.06,.12],uo=[2,3],fo=14,po=8,mo=[12*co,26*co],ho=.28*Math.sqrt(co),go=[27,42],_o=[71,85],vo=150,yo=class e{boundary;surfaces;decorativeFragments;buildings=[];blocks=[];roads=[];roadPatches=[];centreLines=[];crosswalks=[];trees=[];cars=[];radius;rng;byId=new Map;buckets=new Map;constructor(e){this.radius=e.radius??900,this.rng=new oa(e.seed);let t=this.generateBoundary();this.boundary=t;let n=Ia(this.rng,t,this.radius);this.blocks.push(...n.blocks),this.roads.push(...n.roads),this.trees.push(...n.trees),this.cars.push(...n.cars),(e.maxBuildings===void 0?n.buildings:bo(n.buildings,e.maxBuildings)).forEach((e,t)=>this.buildings.push({...e,id:t})),e.maxBuildings!==void 0&&this.removeOrphanedDowntownTrees();let r=this.fractureCorner();this.boundary=r.main,this.surfaces=[r.main,r.detached],this.decorativeFragments=r.chips,this.cars.splice(0,this.cars.length,...this.cars.filter(e=>this.containsPoint(e.x,e.z)));let i=za(this.roads,this.surfaces);this.centreLines.push(...i.centreLines),this.crosswalks.push(...i.crosswalks);for(let e of this.buildings)e.health=e.state===`rubble`?0:Xi(e),this.byId.set(e.id,e),this.index(e)}get startAnchors(){let e=this.radius*.5;return[{x:-e,z:0},{x:e,z:0}]}static bucketKey(e,t){return(e+512)*4096+(t+512)}removeOrphanedDowntownTrees(){let e=this.blocks.filter(e=>e.kind===`built`&&e.district===`downtown`&&e.innerClip&&this.buildings.some(t=>t.blockId===e.id&&t.state!==`rubble`));this.trees.splice(0,this.trees.length,...this.trees.filter(t=>{let n=this.blocks.find(e=>e.kind===`built`&&e.district===`downtown`&&e.innerClip&&Li(t.x,t.z,e.innerClip));return!n||e.includes(n)}))}index(t){let n=Zi({...t,state:`rubble`}),r=Math.floor(n.x0/vo),i=Math.floor(n.x1/vo),a=Math.floor(n.z0/vo),o=Math.floor(n.z1/vo);for(let n=r;n<=i;n++)for(let r=a;r<=o;r++){let i=e.bucketKey(n,r),a=this.buckets.get(i);a?a.push(t.id):this.buckets.set(i,[t.id])}}buildingsOverlapping(t){let n=new Set,r=Math.floor(t.x0/vo),i=Math.floor(t.x1/vo),a=Math.floor(t.z0/vo),o=Math.floor(t.z1/vo);for(let t=r;t<=i;t++)for(let r=a;r<=o;r++)for(let i of this.buckets.get(e.bucketKey(t,r))??[])n.add(i);let s=[];for(let e of[...n].sort((e,t)=>e-t)){let t=this.byId.get(e);t&&s.push(t)}return s}generateBoundary(){let e=[];for(let t=0;t<so;t++){let n=t/so*Math.PI*2+this.rng.range(-.22,.22),r=this.radius*this.rng.range(.72,1.08);e.push({x:Math.cos(n)*r,z:Math.sin(n)*r})}return e}containsPoint(e,t){for(let n of this.surfaces??[this.boundary])if(Li(e,t,n))return!0;return!1}clearOfSurface(e,t,n){let r=Math.hypot(t.x,t.z);if(r<1e-6)return t;let i={x:t.x/r,z:t.z/r},a=r;for(let t=0;t<po&&!(Wi(n,e.map(e=>({x:e.x+i.x*a,z:e.z+i.z*a})))>=fo);t++)a+=fo;return{x:i.x*a,z:i.z*a}}fractureCorner(){let e=this.boundary,t=e.length,n=n=>e[(n+t)%t],r=(e,t,n)=>({x:e.x+(t.x-e.x)*n,z:e.z+(t.z-e.z)*n}),i=this.rng.int(t),a=Math.abs(Pi(e)),o=(e,t)=>{let i=n(e-1),o=n(e),s=n(e+t-1),c=n(e+t);if(!i||!o||!s||!c)return;let l=r(i,o,.38),u=r(s,c,.62);if(Vi(0,0,l,u)<this.radius*.58)return;let d=[l];for(let r=0;r<t;r++){let t=n(e+r);t&&d.push(t)}return d.push(u),{cutA:l,cutB:u,share:a>0?Math.abs(Pi(d))/a:0}},s=i,c=uo[0],l;for(let e=uo[0];e<=uo[1];e++){for(let n=0;n<t;n++){let r=(i+n)%t,a=o(r,e);if(a){if(a.share>=lo[0]&&a.share<=lo[1]){l={candidate:r,width:e,share:a.share};break}(!l||a.share>l.share)&&(l={candidate:r,width:e,share:a.share})}}if(l&&l.share>=lo[0]&&l.share<=lo[1])break}l&&(s=l.candidate,c=l.width);let u=n(s-1),d=n(s),f=n(s+c-1),p=n(s+c);if(!u||!d||!f||!p)throw Error(`cannot fracture empty boundary`);let m=r(u,d,.38),h=r(f,p,.62),g=this.polygonCentroid(e),_=[m];for(let e=0;e<c;e++){let t=n(s+e);t&&_.push(t)}_.push(h);let v=this.polygonCentroid(_),y=v.x-g.x,b=v.z-g.z,x=Math.max(Math.hypot(y,b),1),S=[m],C=h.x-m.x,w=h.z-m.z,T=Math.max(Math.hypot(C,w),1),E=-w/T,D=C/T;for(let e=1;e<=7;e++){let t=e/8,n=Math.sin(t*Math.PI),i=this.rng.range(-48,48)*n,a=r(m,h,t);S.push({x:a.x+E*i,z:a.z+D*i})}S.push(h);let O=[],ee=[],k=[],A=new Map([[1,!1],[3,!0],[5,!1],[7,!0]]);for(let e=0;e<S.length-1;e++){let t=S[e],n=S[e+1];if(!t||!n)continue;O.push(t),ee.push(t);let i=A.get(e);if(i===void 0)continue;let a=r(t,n,.5),o=g.x-a.x,s=g.z-a.z,c=Math.max(Math.hypot(o,s),1);o/=c,s/=c,i&&(o=-o,s=-s);let l=this.rng.range(mo[0],mo[1]),u={x:a.x+o*l,z:a.z+s*l},d=[t,u,n];aa(d)||(i?ee.push(u):O.push(u),k.push({points:d,fromPiece:i}))}let j=S[S.length-1];j&&(O.push(j),ee.push(j));let M=[..._,...ee.slice(1,-1).reverse()],N=[h];for(let e=c;e<t;e++){let t=n(s+e);t&&N.push(t)}N.push(m,...O.slice(1,-1));let te=this.rng.range(_o[0],_o[1]),P={x:y/x*te,z:b/x*te},ne=M.map(e=>({x:e.x+P.x,z:e.z+P.z})),re=[],ie=new Map;for(let e of[2,5,8]){let t=N[(e-1+N.length)%N.length],n=N[e],i=N[(e+1)%N.length];if(!t||!n||!i)continue;let a=r(t,n,1-ho),o=r(n,i,ho),s=[a,n,o];if(aa(s))continue;ie.set(e,[a,o]);let c=n.x-g.x,l=n.z-g.z,u=Math.max(Math.hypot(c,l),1);c/=u,l/=u;let d=this.rng.range(go[0],go[1]);re.push({points:s,offset:{x:c*d,z:l*d}})}N=N.flatMap((e,t)=>{let n=ie.get(t);return n?[...n]:[e]});let F=[...k.map(e=>{let t=this.rng.range(13,52),n=e.fromPiece?P:{x:0,z:0},r=e.fromPiece?-1:1;return{points:e.points,offset:{x:n.x+y/x*t*r,z:n.z+b/x*t*r}}}),...re].map(e=>{let t=this.clearOfSurface(e.points,e.offset,N),n=e=>e.map(e=>({x:e.x+t.x,z:e.z+t.z})),r=[];for(let t of this.blocks){let i=zi(e.points,t.clip??Fi(t));Pi(i)>=1&&r.push({kind:t.kind,polygon:n(i)})}let i=[];for(let t of this.buildings){let r=zi(e.points,t.clip??Qi({...t,state:`intact`}));Pi(r)>=1&&i.push(n(r))}let a=this.cars.filter(t=>t.parked&&Li(t.x,t.z,e.points)).map(e=>({...e,x:e.x+t.x,z:e.z+t.z})),o=za(this.roads,[e.points]).centreLines.map(e=>({...e,x:e.x+t.x,z:e.z+t.z,...e.clip?{clip:n(e.clip)}:{}}));return{boundary:n(e.points),depth:this.rng.range(35,75),overlays:r,rubble:i,parkedCars:a,centreLines:o}});return this.splitRoadPatches(N,M,P),this.splitRoads(N,M,P),this.splitBlocks(N,M,P),this.splitBuildings(N,M,P,S),this.movePointContent(N,M,P),{main:N,detached:ne,chips:F}}polygonCentroid(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}splitRoadPatches(e,t,n){let r=[];for(let i of this.roadPatches){let a=zi(e,i);Pi(a)>=1&&r.push(a);let o=zi(t,i);Pi(o)>=1&&r.push(o.map(e=>({x:e.x+n.x,z:e.z+n.z})))}this.roadPatches.splice(0,this.roadPatches.length,...r)}splitRoads(e,t,n){let r=[];for(let i of this.roads){let a=i.arterial?32:15,o=i.rotation??0,s=zi(e,i.clip);$a(s,o,a)&&r.push({...i,...Ii(s),clip:s});let c=zi(t,i.clip);if($a(c,o,a)){let e=c.map(e=>({x:e.x+n.x,z:e.z+n.z}));r.push({...i,...Ii(e),clip:e})}}this.roads.splice(0,this.roads.length,...r)}splitBlocks(e,t,n){let r=[];for(let i of this.blocks){let a=i.clip??Fi(i),o=zi(e,a),s=i.innerClip?zi(o,zi(e,i.innerClip)):void 0;Pi(o)>=20&&r.push({...i,...Ii(o),clip:o,...s&&Pi(s)>=1?{innerClip:s}:{}});let c=zi(t,a);if(Pi(c)>=20){let e=c.map(e=>({x:e.x+n.x,z:e.z+n.z})),a=i.innerClip?zi(c,zi(t,i.innerClip)).map(e=>({x:e.x+n.x,z:e.z+n.z})):void 0;r.push({...i,...Ii(e),clip:e,...a&&Pi(a)>=1?{innerClip:a}:{}})}}this.blocks.splice(0,this.blocks.length,...r)}splitBuildings(e,t,n,r){for(let i=0;i<this.buildings.length;i++){let a=this.buildings[i];if(!a)continue;let o=a.clip&&a.clip.length>=3?a.clip:Qi({...a,state:`intact`}),s=zi(e,o),c=zi(t,o),l=Pi(s),u=Pi(c),d=Pi(o),f=e=>o.every(t=>Li(t.x,t.z,e)),p=l>10&&u>10||Math.max(l,u)<d*.98||Ui(a.x,a.z,r)<Math.hypot(a.width,a.depth)*.52||!(f(e)||f(t)),m=u>l,h=m?c.map(e=>({x:e.x+n.x,z:e.z+n.z})):s;this.buildings[i]={...a,x:a.x+(m?n.x:0),z:a.z+(m?n.z:0),state:p?`rubble`:a.state,...p||a.clip?{clip:h}:{}}}}movePointContent(e,t,n){let r=r=>{let i=[];for(let a of r)Li(a.x,a.z,t)?i.push({...a,x:a.x+n.x,z:a.z+n.z}):Li(a.x,a.z,e)&&i.push(a);r.splice(0,r.length,...i)};r(this.trees),r(this.cars),this.trees.splice(0,this.trees.length,...this.trees.filter(e=>this.blocks.some(t=>(t.kind===`park`||t.kind===`built`&&t.district===`downtown`&&t.innerClip)&&(()=>{let n=t.innerClip??t.clip??Fi(t);return Li(e.x,e.z,n)&&Ui(e.x,e.z,[...n,n[0]])>=8})()))),this.cars.splice(0,this.cars.length,...this.cars.filter(e=>!e.parked||this.blocks.some(t=>t.kind===`parking`&&t.clip!==void 0&&Li(e.x,e.z,t.clip)&&Ui(e.x,e.z,[...t.clip,t.clip[0]])>=7)))}get(e){return this.byId.get(e)}setState(e,t){let n=this.byId.get(e);if(!n||n.state===t)return!1;n.state=t;let r=Xi(n);return n.health=t===`intact`?r:t===`damaged`?r*.5:0,!0}advanceState(e){let t=this.byId.get(e);if(!t)return;let n=qi[qi.indexOf(t.state)+1];return n&&this.setState(e,n),t.state}setAllStates(e){for(let t of this.buildings)this.setState(t.id,e)}damage(e,t){let n=this.byId.get(e);if(!n||n.state===`rubble`||t<=0)return!1;n.health=Math.max(0,n.health-t);let r=Xi(n),i=n.health<=0?`rubble`:n.health<=r*.5?`damaged`:`intact`;return n.state!==i&&(n.state=i,!0)}countByState(e){let t=0;for(let n of this.buildings)n.state===e&&t++;return t}countByDistrict(e){let t=0;for(let n of this.buildings)n.district===e&&t++;return t}countBlocks(e){let t=0;for(let n of this.blocks)n.kind===e&&t++;return t}hash(){let e=2166136261,t=t=>{e^=Math.round(t*1e3)|0,e=Math.imul(e,16777619)};for(let e of this.boundary)t(e.x),t(e.z);for(let e of this.surfaces.slice(1))for(let n of e)t(n.x),t(n.z);for(let e of this.decorativeFragments)for(let n of e.boundary)t(n.x),t(n.z);for(let e of this.buildings){t(e.x),t(e.z),t(e.width),t(e.depth),t(e.height),t(qi.indexOf(e.state)),t(e.paletteIndex),t(e.rotation??0);for(let n of e.clip??[])t(n.x),t(n.z)}for(let e of this.blocks)t(e.x0),t(e.z0),t(e.rotation??0);return(e>>>0).toString(16).padStart(8,`0`)}};function bo(e,t){let n=Math.max(0,Math.min(t,e.length));return n===e.length?e:n===0?[]:Array.from({length:n},(t,r)=>e[Math.floor(r*e.length/n)])}var xo=[`machines`,`ancients`];function So(e){return e===`machines`?`ancients`:`machines`}var Co={humansPips:40,segments:2,pipsPerSegment:20},wo={machines:{id:`machines`,name:`Machines`,meterLabel:`ENERGY`,harvest:`deposit`,primaryOrder:`Deploy`},ancients:{id:`ancients`,name:`Ancient Ones`,meterLabel:`INSANITY`,harvest:`immediate`,primaryOrder:`Unidentified order (frame_0057)`}};function To(e=Co){return e.segments*e.pipsPerSegment}var Eo=1e3/30,Do=class{sim;stepMs;accumulatorMs=0;steps=0;dropped=0;constructor(e,t=Eo){this.sim=e,this.stepMs=t}get stepCount(){return this.steps}get droppedMs(){return this.dropped}advance(e){if(!Number.isFinite(e)||e<=0)return this.accumulatorMs/this.stepMs;this.accumulatorMs+=e;let t=0;for(;this.accumulatorMs>=this.stepMs&&t<5;)this.sim.step(),this.steps++,t++,this.accumulatorMs-=this.stepMs;return this.accumulatorMs>=this.stepMs&&(this.dropped+=this.accumulatorMs,this.accumulatorMs=0),this.accumulatorMs/this.stepMs}},Oo=36,ko={harvestPerStep:12/30,tier2Cost:300,structureCost:180};function Ao(e,t,n,r){return(e-n)**2+(t-r)**2}function jo(e,t){return e!==void 0&&e.state!==`rubble`&&(t[e.id]??0)>0}function Mo(e,t,n){let r=n.clip;if(r&&r.length>=3){if(Li(e,t,r))return 0;let n=1/0;for(let i=0;i<r.length;i++){let a=r[i],o=r[(i+1)%r.length];a&&o&&(n=Math.min(n,Vi(e,t,a,o)))}return n*n}let i=Ni({x:e-n.x,z:t-n.z},-(n.rotation??0)),a=Math.max(Math.abs(i.x)-n.width/2,0),o=Math.max(Math.abs(i.z)-n.depth/2,0);return a*a+o*o}function No(e,t,n,r){let i=n.clip,a={x:n.x,z:n.z};if(i&&i.length>=3){let n=1/0;for(let r=0;r<i.length;r++){let o=i[r],s=i[(r+1)%i.length];if(!o||!s)continue;let c=Hi(e,t,o,s),l=(c.x-e)**2+(c.z-t)**2;l<n&&(n=l,a=c)}}else{let r=Ni({x:e-n.x,z:t-n.z},-(n.rotation??0)),i=Ni({x:Math.max(-n.width/2,Math.min(n.width/2,r.x)),z:Math.max(-n.depth/2,Math.min(n.depth/2,r.z))},n.rotation??0);a={x:n.x+i.x,z:n.z+i.z}}let o=e-a.x,s=t-a.z,c=Math.hypot(o,s);return c<1e-6&&(o=e-n.x,s=t-n.z,c=Math.hypot(o,s)),c<1e-6?{x:a.x+r,z:a.z}:{x:a.x+o/c*r,z:a.z+s/c*r}}var Po=3,Fo=4,Io=24,Lo=30,Ro=2,zo=.06,Bo=4e4,Vo=40,Ho={small:{radius:5,cells:2},medium:{radius:8,cells:3},large:{radius:16,cells:6}},Uo={waypoints:[],reachedGoal:!1,expansions:0,length:1/0},Wo=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],Go=Math.SQRT2;function Ko(e,t,n,r){let i=!1,a=1/0;for(let r=0,o=n.length-1;r<n.length;o=r++){let s=n[r],c=n[o];if(!s||!c)continue;s.z>t!=c.z>t&&e<(c.x-s.x)*(t-s.z)/(c.z-s.z)+s.x&&(i=!i);let l=c.x-s.x,u=c.z-s.z,d=Math.max(0,Math.min(1,((e-s.x)*l+(t-s.z)*u)/Math.max(l*l+u*u,1e-9)));a=Math.min(a,Math.hypot(e-(s.x+l*d),t-(s.z+u*d)))}return i||a<=r}var qo=class{f=[];node=[];get size(){return this.node.length}clear(){this.f.length=0,this.node.length=0}less(e,t){let n=this.f[e]??0,r=this.f[t]??0;return n===r?(this.node[e]??0)<(this.node[t]??0):n<r}swap(e,t){let n=this.f[e]??0,r=this.node[e]??0;this.f[e]=this.f[t]??0,this.node[e]=this.node[t]??0,this.f[t]=n,this.node[t]=r}push(e,t){this.f.push(e),this.node.push(t);let n=this.node.length-1;for(;n>0;){let e=n-1>>1;if(!this.less(n,e))break;this.swap(n,e),n=e}}pop(){let e=this.node[0]??-1,t=this.node.length-1;this.swap(0,t),this.f.pop(),this.node.pop();let n=0,r=this.node.length;for(;;){let e=n*2+1,t=e+1,i=n;if(e<r&&this.less(e,i)&&(i=e),t<r&&this.less(t,i)&&(i=t),i===n)break;this.swap(n,i),n=i}return e}},Jo=class{city;dim;min;solid;crusherSolid;offShard;cost;dist;crusherDist;scratch=new Uint8Array;gScore;cameFrom;seenGen;closed;generation=0;heap=new qo;rebuildCount=0;lastRebuildCells=0;onShardCount=-1;obstacles=[];constructor(e){this.city=e;let t=e.radius+Lo;this.min=-t,this.dim=Math.ceil(t*2/3);let n=this.dim*this.dim;this.solid=new Uint8Array(n),this.crusherSolid=new Uint8Array(n),this.offShard=new Uint8Array(n),this.cost=new Uint8Array(n),this.dist=new Uint8Array(n),this.crusherDist=new Uint8Array(n),this.gScore=new Float64Array(n),this.cameFrom=new Int32Array(n),this.seenGen=new Uint32Array(n),this.closed=new Uint8Array(n),this.buildTerrain(),this.rebuildAll()}get cellCount(){return this.dim*this.dim}cellX(e){return Math.floor((e-this.min)/3)}cellZ(e){return Math.floor((e-this.min)/3)}worldX(e){return this.min+(e+.5)*3}worldZ(e){return this.min+(e+.5)*3}inBounds(e,t){return e>=0&&t>=0&&e<this.dim&&t<this.dim}clearanceAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?(this.dist[r*this.dim+n]??0)/3:0}passable(e,t,n,r=!1){let i=this.cellX(e),a=this.cellZ(t);return this.passableCell(i,a,Ho[n].cells,r)}costAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?this.cost[r*this.dim+n]??1:1}walkable(e,t,n,r,i,a=!1){return this.sample(e,t,n,r,Ho[i].cells,a)}passableCell(e,t,n,r=!1){return this.inBounds(e,t)?((r?this.crusherDist:this.dist)[t*this.dim+e]??0)>n*3:!1}buildTerrain(){let e=1/0;for(let t of this.city.boundary)e=Math.min(e,Math.hypot(t.x,t.z));let t=e*.92;for(let e=0;e<this.dim;e++){let n=this.worldZ(e);for(let r=0;r<this.dim;r++){let i=this.worldX(r);Math.hypot(i,n)<t||this.city.containsPoint(i,n)||(this.offShard[e*this.dim+r]=1)}}}rebuildAll(){this.solid.set(this.offShard),this.crusherSolid.set(this.offShard),this.cost.fill(1);for(let e of this.city.buildings)this.stampBuilding(e);for(let e of this.obstacles)this.stampObstacle(e);this.transform(this.solid,this.dist,0,0,this.dim-1,this.dim-1),this.transform(this.crusherSolid,this.crusherDist,0,0,this.dim-1,this.dim-1),this.lastRebuildCells=this.cellCount}addObstacle(e){this.obstacles.push(e);let t=this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1));this.stampObstacle(e);let n=this.grow(t,8),r=this.grow(n,8);this.transform(this.solid,this.dist,r.x0,r.z0,r.x1,r.z1,n),this.transform(this.crusherSolid,this.crusherDist,r.x0,r.z0,r.x1,r.z1,n),this.rebuildCount++,this.lastRebuildCells=(r.x1-r.x0+1)*(r.z1-r.z0+1)}setObstacles(e){this.obstacles.length=0,this.obstacles.push(...e),this.rebuildAll()}rebuildAround(e){let t=this.dirtyRect(e);for(let e=t.z0;e<=t.z1;e++)for(let n=t.x0;n<=t.x1;n++){let t=e*this.dim+n;this.solid[t]=this.offShard[t]??0,this.crusherSolid[t]=this.offShard[t]??0,this.cost[t]=1}let n={x0:this.worldX(t.x0)-3,z0:this.worldZ(t.z0)-3,x1:this.worldX(t.x1)+3,z1:this.worldZ(t.z1)+3};for(let e of this.city.buildingsOverlapping(n))this.stampBuilding(e,t);for(let e of this.obstacles)e.x1<n.x0||e.x0>n.x1||e.z1<n.z0||e.z0>n.z1||this.stampObstacle(e,t);let r=this.grow(t,8),i=this.grow(r,8);this.transform(this.solid,this.dist,i.x0,i.z0,i.x1,i.z1,r),this.transform(this.crusherSolid,this.crusherDist,i.x0,i.z0,i.x1,i.z1,r),this.rebuildCount++,this.lastRebuildCells=(i.x1-i.x0+1)*(i.z1-i.z0+1)}dirtyRect(e){let t=Zi({...e,state:`rubble`});return this.clampRect(this.cellX(t.x0),this.cellZ(t.z0),this.cellX(t.x1),this.cellZ(t.z1))}clampRect(e,t,n,r){return{x0:Math.max(0,e),z0:Math.max(0,t),x1:Math.min(this.dim-1,n),z1:Math.min(this.dim-1,r)}}grow(e,t){return this.clampRect(e.x0-t,e.z0-t,e.x1+t,e.z1+t)}stampBuilding(e,t){let n=Zi(e),r=this.clampRect(this.cellX(n.x0),this.cellZ(n.z0),this.cellX(n.x1),this.cellZ(n.z1)),i=Math.max(r.x0,t?.x0??0),a=Math.min(r.x1,t?.x1??this.dim-1),o=Math.max(r.z0,t?.z0??0),s=Math.min(r.z1,t?.z1??this.dim-1),c=Yi(e.state),l=e.rotation??0,u=Ji[e.state],d=e.width*u/2+1.5,f=e.depth*u/2+1.5,p=Math.cos(l),m=Math.sin(l),h=e.clip&&e.clip.length>=3?e.clip:void 0;for(let t=o;t<=s;t++){let n=this.worldZ(t);for(let r=i;r<=a;r++){let i=this.worldX(r);if(l!==0){let t=i-e.x,r=n-e.z,a=t*p+r*m,o=-t*m+r*p;if(Math.abs(a)>d||Math.abs(o)>f)continue}if(h&&!Ko(i,n,h,1.5))continue;let a=t*this.dim+r;c?this.solid[a]=1:(this.offShard[a]??0)===0&&(this.cost[a]=Ro)}}}stampObstacle(e,t){let n=this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1)),r=Math.max(n.x0,t?.x0??0),i=Math.min(n.x1,t?.x1??this.dim-1),a=Math.max(n.z0,t?.z0??0),o=Math.min(n.z1,t?.z1??this.dim-1);for(let e=a;e<=o;e++)for(let t=r;t<=i;t++){let n=e*this.dim+t;this.solid[n]=1,this.crusherSolid[n]=1}}transform(e,t,n,r,i,a,o){let s=i-n+1,c=a-r+1;if(s<=0||c<=0)return;this.scratch.length<s*c&&(this.scratch=new Uint8Array(s*c));let l=this.scratch;for(let t=0;t<c;t++){let i=(t+r)*this.dim;for(let r=0;r<s;r++)l[t*s+r]=(e[i+r+n]??1)===1?0:Io}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=e*s+t,r=l[n]??Io;r!==0&&(t>0&&(r=Math.min(r,(l[n-1]??Io)+Po)),e>0&&(r=Math.min(r,(l[n-s]??Io)+Po),t>0&&(r=Math.min(r,(l[n-s-1]??Io)+Fo)),t+1<s&&(r=Math.min(r,(l[n-s+1]??Io)+Fo))),l[n]=Math.min(r,Io))}for(let e=c-1;e>=0;e--)for(let t=s-1;t>=0;t--){let n=e*s+t,r=l[n]??Io;r!==0&&(t+1<s&&(r=Math.min(r,(l[n+1]??Io)+Po)),e+1<c&&(r=Math.min(r,(l[n+s]??Io)+Po),t+1<s&&(r=Math.min(r,(l[n+s+1]??Io)+Fo)),t>0&&(r=Math.min(r,(l[n+s-1]??Io)+Fo))),l[n]=Math.min(r,Io))}let u=Math.max(n,o?.x0??n),d=Math.min(i,o?.x1??i),f=Math.max(r,o?.z0??r),p=Math.min(a,o?.z1??a);for(let e=f;e<=p;e++)for(let i=u;i<=d;i++)t[e*this.dim+i]=l[(e-r)*s+(i-n)]??0}nearestPassable(e,t,n,r=!1){let i=Ho[n].cells,a=this.cellX(e),o=this.cellZ(t);if(this.passableCell(a,o,i,r))return{x:this.worldX(a),z:this.worldZ(o)};for(let n=1;n<=Vo;n++){let s=-1,c=1/0;for(let l=-n;l<=n;l++){let u=[[a+l,o-n],[a+l,o+n],[a-n,o+l],[a+n,o+l]];for(let[n,a]of u){if(!this.passableCell(n,a,i,r))continue;let o=this.worldX(n)-e,l=this.worldZ(a)-t,u=o*o+l*l;u<c&&(c=u,s=a*this.dim+n)}}if(s>=0){let e=Math.floor(s/this.dim);return{x:this.worldX(s-e*this.dim),z:this.worldZ(e)}}}}findPath(e,t,n,r,i,a=!1){let o=Ho[i].cells,s=this.nearestPassable(e,t,i,a),c=this.nearestPassable(n,r,i,a);if(!s||!c)return Uo;let l=this.cellX(s.x),u=this.cellZ(s.z),d=this.cellX(c.x),f=this.cellZ(c.z),p=u*this.dim+l,m=f*this.dim+d;if(p===m)return{waypoints:[],reachedGoal:!0,expansions:0,length:0};let h=++this.generation;this.heap.clear(),this.gScore[p]=0,this.cameFrom[p]=-1,this.seenGen[p]=h,this.closed[p]=0,this.heap.push(this.heuristic(l,u,d,f),p);let g=0,_=p,v=this.heuristic(l,u,d,f),y=!1;for(;this.heap.size>0&&g<Bo;){let e=this.heap.pop();if(this.seenGen[e]!==h||this.closed[e]===1)continue;if(this.closed[e]=1,g++,e===m){y=!0;break}let t=Math.floor(e/this.dim),n=e-t*this.dim,r=this.heuristic(n,t,d,f);r<v&&(v=r,_=e);for(let[r,i]of Wo){let s=n+r,c=t+i;if(!this.passableCell(s,c,o,a)||r!==0&&i!==0&&(!this.passableCell(n+r,t,o,a)||!this.passableCell(n,t+i,o,a)))continue;let l=c*this.dim+s;if(this.seenGen[l]===h&&this.closed[l]===1)continue;let u=r!==0&&i!==0?Go:1,p=this.cost[l]??1,m=8-(this.dist[l]??Io)/3,g=(this.gScore[e]??0)+u*p+m*zo;this.seenGen[l]===h&&g>=(this.gScore[l]??0)||(this.seenGen[l]=h,this.closed[l]=0,this.gScore[l]=g,this.cameFrom[l]=e,this.heap.push(g+this.heuristic(s,c,d,f),l))}}let b=y?m:_;return b===p?Uo:this.reconstruct(p,b,o,a,y,g)}heuristic(e,t,n,r){let i=Math.abs(e-n),a=Math.abs(t-r);return Math.max(i,a)+(Go-1)*Math.min(i,a)}reconstruct(e,t,n,r,i,a){let o=[];for(let n=t;n!==-1&&(o.push(n),n!==e);n=this.cameFrom[n]??-1);o.reverse();let s=[],c=o[0]??e;for(let e=1;e<o.length;e++){let t=o[e];if(t===void 0)continue;let i=o[e+1];i!==void 0&&this.lineOfSight(c,i,n,r)||(s.push(this.worldX(t%this.dim),this.worldZ(Math.floor(t/this.dim))),c=t)}let l=0,u=this.worldX(e%this.dim),d=this.worldZ(Math.floor(e/this.dim));for(let e=0;e<s.length;e+=2){let t=s[e]??u,n=s[e+1]??d;l+=Math.hypot(t-u,n-d),u=t,d=n}return{waypoints:s,reachedGoal:i,expansions:a,length:l}}lineOfSight(e,t,n,r){return this.sample(this.worldX(e%this.dim),this.worldZ(Math.floor(e/this.dim)),this.worldX(t%this.dim),this.worldZ(Math.floor(t/this.dim)),n,r)}sample(e,t,n,r,i,a=!1){let o=Math.max(1,Math.ceil(Math.hypot(n-e,r-t)/1.5));for(let s=0;s<=o;s++){let c=s/o,l=e+(n-e)*c,u=t+(r-t)*c;if(!this.passableCell(this.cellX(l),this.cellZ(u),i,a))return!1}return!0}routeLength(e,t,n,r,i){let a=this.findPath(e,t,n,r,i);return a.reachedGoal?a.length:1/0}flood(e,t,n,r){let i=Ho[n].cells,a=this.cellIndexAt(e,t),o=r?this.cellIndexAt(r.x,r.z):-1;if(a<0||(this.dist[a]??0)<=i*3)return{count:0,reachedTarget:!1};let s=++this.generation;this.seenGen[a]=s;let c=[a],l=0,u=0,d=!1;for(;l<c.length;){let e=c[l++];if(e===void 0)continue;u++,e===o&&(d=!0);let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of Wo){let a=n+e,o=t+r;if(!this.passableCell(a,o,i)||e!==0&&r!==0&&(!this.passableCell(n+e,t,i)||!this.passableCell(n,t+r,i)))continue;let l=o*this.dim+a;this.seenGen[l]!==s&&(this.seenGen[l]=s,c.push(l))}}return{count:u,reachedTarget:d}}componentAtLeast(e,t,n,r){let i=Ho[n].cells,a=this.cellIndexAt(e,t);if(a<0||(this.dist[a]??0)<=i*3)return!1;if(r<=1)return!0;let o=++this.generation;this.seenGen[a]=o;let s=[a],c=0,l=0;for(;c<s.length;){let e=s[c++];if(e===void 0)continue;if(++l>=r)return!0;let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of Wo){let a=n+e,c=t+r;if(!this.passableCell(a,c,i)||e!==0&&r!==0&&(!this.passableCell(n+e,t,i)||!this.passableCell(n,t+r,i)))continue;let l=c*this.dim+a;this.seenGen[l]!==o&&(this.seenGen[l]=o,s.push(l))}}return!1}cellIndexAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?r*this.dim+n:-1}get onShardCells(){if(this.onShardCount<0){let e=0;for(let t=0;t<this.offShard.length;t++)(this.offShard[t]??1)===0&&e++;this.onShardCount=e}return this.onShardCount}passableFraction(e){let t=Ho[e].cells,n=0;for(let e=0;e<this.dist.length;e++)(this.offShard[e]??1)!==1&&(this.dist[e]??0)>t*3&&n++;let r=this.onShardCells;return r===0?0:n/r}snapshotClearance(){return this.dist.slice()}},Yo=.55,Xo=180,Zo=9,Qo=1800,$o=class{all=[];byId=new Map;nextId=0;get(e){return this.byId.get(e)}displace(e,t,n,r){if(t<4)return;let i=n.range(0,Math.PI*2),a=Math.cos(i),o=Math.sin(i),s=Ni({x:a,z:o},-(e.rotation??0)),c=Math.min(Math.abs(s.x)>1e-6?e.width/2/Math.abs(s.x):1/0,Math.abs(s.z)>1e-6?e.depth/2/Math.abs(s.z):1/0),l=Ho.small.radius,u=r.nearestPassable(e.x+a*(c+l),e.z+o*(c+l),`small`);if(!u)return;if(this.all.length>=48){let e=this.nearest(u.x,u.z);return e&&(e.humans+=t,e.lifeSteps=Qo),e}let d=r.nearestPassable(u.x+a*55,u.z+o*55,`small`)??u,f={id:this.nextId++,x:u.x,z:u.z,prevX:u.x,prevZ:u.z,humans:t,fleeX:d.x,fleeZ:d.z,panicSteps:Xo,trailDirX:0,trailDirZ:0,trailStrength:0,lifeSteps:Qo};return this.all.push(f),this.byId.set(f.id,f),f}step(e){for(let t=this.all.length-1;t>=0;t--){let n=this.all[t];if(!n)continue;if(n.prevX=n.x,n.prevZ=n.z,n.humans<=0){this.removeAt(t);continue}if(n.lifeSteps--,n.lifeSteps<=0){this.removeAt(t);continue}if(n.panicSteps<=0){ns(n);continue}n.panicSteps--;let r=n.fleeX-n.x,i=n.fleeZ-n.z,a=Math.hypot(r,i),o=6/30;if(a<=o){n.x=n.fleeX,n.z=n.fleeZ,ts(n,r,i),n.panicSteps=0;continue}let s=r/a*o,c=i/a*o,l=n.x,u=n.z;!es(n,s,c,e)&&!es(n,s,0,e)&&!es(n,0,c,e)?n.panicSteps=0:ts(n,n.x-l,n.z-u)}}evictBlocked(e){for(let t=this.all.length-1;t>=0;t--){let n=this.all[t];if(!n||e.passable(n.x,n.z,`small`))continue;let r=e.nearestPassable(n.x,n.z,`small`);if(!r){this.removeAt(t);continue}n.x=r.x,n.z=r.z,n.prevX=r.x,n.prevZ=r.z,n.fleeX=r.x,n.fleeZ=r.z,n.panicSteps=0,n.trailStrength=0}}nearest(e,t,n=1/0){let r,i=n;for(let n of this.all){if(n.humans<=0)continue;let a=(n.x-e)**2+(n.z-t)**2;a<i&&(i=a,r=n)}return r}drain(e,t){let n=this.byId.get(e);if(!n)return 0;let r=Math.min(n.humans,t);if(n.humans-=r,n.humans<=0){let e=this.all.indexOf(n);e>=0&&this.removeAt(e)}return r}removeAt(e){let t=this.all[e];t&&(this.all.splice(e,1),this.byId.delete(t.id))}totalHumans(){let e=0;for(let t of this.all)e+=t.humans;return e}save(){return{crowds:this.all.map(e=>({...e})),nextId:this.nextId}}restore(e){this.all.length=0,this.byId.clear();for(let t of e.crowds){let e={...t};this.all.push(e),this.byId.set(e.id,e)}this.nextId=e.nextId}};function es(e,t,n,r){if(t===0&&n===0)return!1;let i=e.x+t,a=e.z+n;return r.passable(i,a,`small`)?(e.x=i,e.z=a,!0):!1}function ts(e,t,n){let r=Math.hypot(t,n);r<=1e-6||(e.trailDirX=t/r,e.trailDirZ=n/r,e.trailStrength=1)}function ns(e){e.trailStrength=Math.max(0,e.trailStrength-1/Zo)}function rs(e,t,n){if(e.deployTimer>0)return!1;let r=n??!e.deployed;return r!==e.deployed&&(e.deployTarget=r,e.deployTimer=t,!0)}function is(e){return e.deployTimer!==0&&(e.deployTimer--,e.deployTimer===0&&(e.deployed=e.deployTarget),!0)}function as(e,t){return(e+4096)*16384+(t+4096)}var os=class{items=[];cells=new Map;size=1;get cellSize(){return this.size}get count(){return this.items.length}rebuild(e,t){this.items=e,this.size=t>0?t:1;for(let e of this.cells.values())e.length=0;for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let r=as(Math.floor(n.x/this.size),Math.floor(n.z/this.size)),i=this.cells.get(r);i?i.push(t):this.cells.set(r,[t])}}forEachNeighbour(e,t){let n=this.items[e];if(!n)return;let r=Math.floor(n.x/this.size),i=Math.floor(n.z/this.size);for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){let a=this.cells.get(as(r+e,i+n));if(a)for(let e of a){let n=this.items[e];n&&t(n,e)}}}forEachWithin(e,t,n,r){let i=Math.floor((e-n)/this.size),a=Math.floor((e+n)/this.size),o=Math.floor((t-n)/this.size),s=Math.floor((t+n)/this.size);if((a-i+1)*(s-o+1)>this.items.length){for(let e=0;e<this.items.length;e++){let t=this.items[e];t&&r(t,e)}return}for(let e=i;e<=a;e++)for(let t=o;t<=s;t++){let n=this.cells.get(as(e,t));if(n)for(let e of n){let t=this.items[e];t&&r(t,e)}}}};function ss(e){return Math.round(e*30)}var cs=[{id:`machine-processing-node`,name:`Processing Node`,faction:`machines`,nav:`medium`,speed:9,role:`support`,tier:1,cost:180,health:650,deployedDamageTakenMultiplier:.7,buildSteps:ss(6),canDeploy:!0,anchoredFootprint:{width:18,depth:18},processesHumans:!0},{id:`mobile-factory`,name:`Mobile Factory`,faction:`machines`,nav:`medium`,speed:9,role:`support`,tier:1,cost:180,health:800,deployedDamageTakenMultiplier:.7,buildSteps:ss(6),canDeploy:!0,anchoredFootprint:{width:24,depth:18},producesUnits:!0},{id:`machine-infantry`,name:`Deployable Infantry`,faction:`machines`,nav:`small`,speed:20,role:`infantry`,tier:1,cost:60,health:110,weaponIds:[`machine-rifle`],deployedDamageTakenMultiplier:.7,buildSteps:ss(3),canDeploy:!0},{id:`machine-construct`,name:`Giant Ranged Construct`,faction:`machines`,nav:`large`,canCrushBuildings:!0,speed:12,role:`heavy`,tier:2,cost:240,health:500,weaponIds:[`machine-cannon`],deployedDamageTakenMultiplier:.7,buildSteps:ss(9),canDeploy:!0},{id:`ancient-infantry`,name:`Frog-like Infantry`,faction:`ancients`,nav:`small`,speed:23,role:`infantry`,tier:1,cost:50,health:120,weaponIds:[`ancient-bite`],buildSteps:ss(3)},{id:`ancient-nug`,name:`Nug`,faction:`ancients`,nav:`large`,canCrushBuildings:!0,speed:14,role:`heavy`,tier:2,cost:240,health:560,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:ss(9)},{id:`machine-harbinger`,name:`Machine Harbinger`,faction:`machines`,nav:`large`,speed:12,role:`harbinger`,tier:1,cost:0,health:1400,weaponIds:[`machine-harbinger-laser`],deployedDamageTakenMultiplier:.7,buildSteps:ss(30),canDeploy:!0,producesUnits:!0,productionTypes:[`machine-processing-node`,`mobile-factory`]},{id:`machine-harvester`,name:`Human Harvester`,faction:`machines`,nav:`medium`,speed:16,role:`harvester`,tier:1,cost:80,health:240,buildSteps:ss(4)},{id:`ancient-harbinger`,name:`Ancient Harbinger`,faction:`ancients`,nav:`large`,speed:14,role:`harbinger`,tier:1,cost:0,health:1400,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:ss(30),constructionTypes:[`ancient-slime-temple`,`ancient-deity-structure`]},{id:`ancient-harvester`,name:`Soul Harvester`,faction:`ancients`,nav:`medium`,canCrushBuildings:!0,speed:18,role:`harvester`,tier:1,cost:80,health:260,weaponIds:[`ancient-bite`],buildSteps:ss(4)},{id:`ancient-support`,name:`Poison Specialist`,faction:`ancients`,nav:`small`,speed:19,role:`support`,tier:2,cost:180,health:150,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:ss(7)},{id:`ancient-slime-temple`,name:`Slime Temple`,faction:`ancients`,nav:`large`,speed:0,role:`structure`,tier:1,cost:180,health:900,buildSteps:0,constructionSteps:ss(10),stationary:!0,anchoredFootprint:{width:18,depth:18},producesUnits:!0},{id:`ancient-deity-structure`,name:`Deity Summon Structure`,faction:`ancients`,nav:`large`,speed:0,role:`structure`,tier:2,cost:500,health:1800,buildSteps:0,constructionSteps:ss(10),stationary:!0,anchoredFootprint:{width:30,depth:30}},{id:`machine-shard-cutter`,name:`Shard Cutter`,faction:`machines`,nav:`large`,canCrushBuildings:!0,speed:10,role:`heavy`,tier:2,cost:320,health:700,weaponIds:[`machine-cannon`],buildSteps:ss(12)}],ls=new Map(cs.map(e=>[e.id,e]));function us(e){let t=ls.get(e);if(!t)throw Error(`unknown unit type: ${e}`);return t}function ds(e){return Ho[e.nav].radius}function fs(e){return e.canCrushBuildings===!0&&e.role!==`harvester`}function ps(e,t){e.harvestingBuildingId=t?.kind===`building`?t.id:null,e.harvestingCrowdId=t?.kind===`crowd`?t.id:null}function ms(e){return e.harvestingBuildingId!==null||e.harvestingCrowdId!==null}var hs=6,gs=.35,_s=.35,vs=.6,ys=40,bs=.1,xs=.6,Ss=15,Cs=90;function ws(e,t){let n=[[0,0]];for(let r=1;n.length<e;r++){let i=r*6;for(let a=0;a<i&&n.length<e;a++){let e=a/i*Math.PI*2;n.push([Math.cos(e)*r*t,Math.sin(e)*r*t])}}return n}var Ts=class{units=[];byId=new Map;pathQueue=[];nextId=0;spatialIndex=new os;spatialDirty=!0;processorList=[];pushX=[];pushZ=[];pathsLastStep=0;pathsTotal=0;get pending(){return this.pathQueue.length}get pendingIds(){return this.pathQueue}get(e){return this.byId.get(e)}get processors(){return this.processorList}index(){return this.spatialDirty&&=(this.spatialIndex.rebuild(this.units,this.spatialCellSize()),!1),this.spatialIndex}markMoved(){this.spatialDirty=!0}spatialCellSize(){let e=0;for(let t of this.units)this.typeOf(t).stationary||(e=Math.max(e,ds(this.typeOf(t))));return e>0?e*2:ys}remove(e){let t=this.byId.get(e);if(!t)return;this.byId.delete(e);let n=this.units.indexOf(t);n>=0&&this.units.splice(n,1);let r=this.processorList.indexOf(t);return r>=0&&this.processorList.splice(r,1),this.dropQueued([e]),this.markMoved(),t}typeOf(e){return us(e.typeId)}spawn(e,t,n,r=0){us(e);let i={id:this.nextId++,typeId:e,x:t,z:n,prevX:t,prevZ:n,heading:r,prevHeading:r,path:[],goalX:t,goalZ:n,hasGoal:!1,repathPending:!1,unreachable:!1,blockedSteps:0,stalledSteps:0,health:us(e).health,targetId:null,attackMove:!1,targetBuildingId:null,lastAttackerId:null,attackCooldown:0,cargo:0,harvestingBuildingId:null,harvestingCrowdId:null,harvestOrdered:!1,deployed:us(e).stationary===!0,deployTimer:0,deployTarget:us(e).stationary===!0,queue:[]};return this.units.push(i),this.byId.set(i.id,i),us(e).processesHumans&&this.processorList.push(i),this.markMoved(),i}order(e,t,n,r,i=!1){let a=[...new Set(e)].map(e=>this.byId.get(e)).filter(e=>e!==void 0&&e.deployTimer===0&&!this.typeOf(e).stationary);if(a.length===0)return;let o=0;for(let e of a)o=Math.max(o,ds(this.typeOf(e))*2.4);a.sort((e,r)=>{let i=(e.x-t)**2+(e.z-n)**2,a=(r.x-t)**2+(r.z-n)**2;return i===a?e.id-r.id:i-a});let s=ws(a.length,o);a.forEach((e,a)=>{e.attackMove=i,e.targetBuildingId=null,e.deployed&&this.typeOf(e).canDeploy&&rs(e,Oo,!1);let[o,c]=s[a]??[0,0],l=this.typeOf(e),u=r.nearestPassable(t+o,n+c,l.nav,fs(l));e.goalX=u?.x??t,e.goalZ=u?.z??n,e.hasGoal=!0,e.unreachable=!1,e.blockedSteps=0,e.stalledSteps=0,this.requestPath(e)})}stop(e){for(let t of e){let e=this.byId.get(t);e&&(e.attackMove=!1,e.targetBuildingId=null,e.path.length=0,e.hasGoal=!1,e.repathPending=!1,e.blockedSteps=0,e.stalledSteps=0,e.goalX=e.x,e.goalZ=e.z)}this.dropQueued(e)}requestPath(e){e.repathPending||(e.repathPending=!0,this.pathQueue.push(e.id))}dropQueued(e){let t=new Set(e);for(let e=this.pathQueue.length-1;e>=0;e--){let n=this.pathQueue[e];n!==void 0&&t.has(n)&&this.pathQueue.splice(e,1)}}revalidate(e){for(let t of this.units){if(!t.hasGoal||t.path.length===0||t.repathPending)continue;let n=this.typeOf(t),r=n.nav,i=t.x,a=t.z,o=!1;for(let s=0;s<t.path.length;s+=2){let c=t.path[s]??i,l=t.path[s+1]??a;if(!e.walkable(i,a,c,l,r,fs(n))){o=!0;break}i=c,a=l}o&&this.requestPath(t)}}step(e){this.stepDeployment(),this.servicePaths(e),this.integrate(e),this.separate(e),this.detectStalls()}detectStalls(){for(let e of this.units){if(e.attackMove&&e.targetId!==null){e.stalledSteps=0;continue}if(e.path.length===0){e.stalledSteps=0;continue}if(Math.hypot(e.x-e.prevX,e.z-e.prevZ)>=us(e.typeId).speed/30*bs){e.stalledSteps=0;continue}e.stalledSteps++,e.stalledSteps%Ss===0&&this.requestPath(e),e.stalledSteps>=Cs&&(e.path.length=0,e.hasGoal=!1,e.unreachable=!0,e.stalledSteps=0)}}stepDeployment(){for(let e of this.units)e.deployTimer!==0&&is(e)}beginDeploy(e,t){let n=this.byId.get(e);return!n||!this.typeOf(n).canDeploy||!rs(n,Oo,t)?!1:(this.stop([e]),!0)}servicePaths(e){for(this.pathsLastStep=0;this.pathsLastStep<hs;){let t=this.pathQueue.shift();if(t===void 0)break;let n=this.byId.get(t);if(!n||(n.repathPending=!1,!n.hasGoal))continue;let r=this.typeOf(n),i=e.findPath(n.x,n.z,n.goalX,n.goalZ,r.nav,fs(r));n.path=[...i.waypoints],n.unreachable=!i.reachedGoal,n.path.length===0&&(n.hasGoal=!1),this.pathsLastStep++,this.pathsTotal++}}integrate(e){this.markMoved();for(let t of this.units){if(t.prevX=t.x,t.prevZ=t.z,t.prevHeading=t.heading,t.deployTimer>0||t.deployed||t.attackMove&&t.targetId!==null)continue;let n=t.path[0],r=t.path[1];if(n===void 0||r===void 0)continue;let i=this.typeOf(t),a=n-t.x,o=r-t.z,s=Math.hypot(a,o);if(s<=1e-6){t.path.splice(0,2);continue}t.heading=Es(t.heading,Math.atan2(o,a),gs);let c=i.speed/30/e.costAt(t.x,t.z),l=ds(i)*xs;if(s<=Math.max(c,l)){t.x=n,t.z=r,t.path.splice(0,2),t.path.length===0&&(t.hasGoal=!1);continue}let u=a/s*c,d=o/s*c;if(this.tryMove(t,u,d,e,i.nav,fs(i))){t.blockedSteps=0;continue}if(this.tryMove(t,u,0,e,i.nav,fs(i))||this.tryMove(t,0,d,e,i.nav,fs(i))){t.blockedSteps=0;continue}t.blockedSteps++,t.blockedSteps>=Cs?(t.path.length=0,t.hasGoal=!1,t.unreachable=!0,t.blockedSteps=0):t.blockedSteps%Ss===0&&this.requestPath(t)}}tryMove(e,t,n,r,i,a=!1){if(t===0&&n===0)return!1;let o=e.x+t,s=e.z+n;return r.passable(o,s,i,a)?(e.x=o,e.z=s,!0):!1}separate(e){let t=this.units.length;if(t<2)return;let n=!1;for(let e of this.units)if(!this.typeOf(e).stationary){n=!0;break}if(!n)return;let r=this.index();this.pushX.length=0,this.pushZ.length=0;for(let e=0;e<t;e++)this.pushX.push(0),this.pushZ.push(0);for(let e=0;e<t;e++){let t=this.units[e];if(!t||this.typeOf(t).stationary)continue;let n=ds(this.typeOf(t));r.forEachNeighbour(e,(r,i)=>{if(i<=e||this.typeOf(r).stationary)return;let a=ds(this.typeOf(r)),o=n+a,s=r.x-t.x,c=r.z-t.z,l=Math.hypot(s,c);if(l>=o)return;if(l<1e-6){let e=(t.id*31+r.id*17)%360*(Math.PI/180);s=Math.cos(e),c=Math.sin(e),l=1}let u=(o-l)/l*.5*_s;this.pushX[e]=(this.pushX[e]??0)-s*u,this.pushZ[e]=(this.pushZ[e]??0)-c*u,this.pushX[i]=(this.pushX[i]??0)+s*u,this.pushZ[i]=(this.pushZ[i]??0)+c*u})}for(let n=0;n<t;n++){let t=this.units[n];if(!t||this.typeOf(t).stationary)continue;let r=this.pushX[n]??0,i=this.pushZ[n]??0;if(r===0&&i===0)continue;let a=this.typeOf(t),o=a.speed/30*vs,s=Math.hypot(r,i);s>o&&(r=r/s*o,i=i/s*o);let c=a.nav,l=t.x+r,u=t.z+i;e.passable(l,u,c,fs(a))&&(t.x=l,t.z=u,this.markMoved())}}evictBlocked(e){for(let t of this.units){let n=this.typeOf(t),r=n.anchoredFootprint!==void 0&&t.deployed&&(t.deployTimer===0||t.deployTarget);if(n.stationary||r)continue;let i=n.nav;if(e.passable(t.x,t.z,i,fs(n)))continue;let a=e.nearestPassable(t.x,t.z,i,fs(n));a&&(t.x=a.x,t.z=a.z,t.prevX=a.x,t.prevZ=a.z,t.blockedSteps=0,t.stalledSteps=0,this.markMoved(),t.hasGoal&&this.requestPath(t))}}countByFaction(e){let t=0;for(let n of this.units)this.typeOf(n).faction===e&&t++;return t}countMoving(){let e=0;for(let t of this.units)t.path.length>0&&e++;return e}countBlocked(){let e=0;for(let t of this.units)t.blockedSteps>0&&e++;return e}countStalled(){let e=0;for(let t of this.units)t.stalledSteps>0&&e++;return e}countDeployed(){let e=0;for(let t of this.units)t.deployed&&e++;return e}countDeploying(){let e=0;for(let t of this.units)t.deployTimer>0&&e++;return e}countUnreached(){let e=0;for(let t of this.units)t.unreachable&&e++;return e}save(){return{units:this.units.map(e=>({...e,path:[...e.path],queue:e.queue.map(e=>({...e}))})),nextId:this.nextId,pathQueue:[...this.pathQueue],pathsTotal:this.pathsTotal}}restore(e){this.units.length=0,this.byId.clear(),this.processorList.length=0,this.pathQueue.length=0,this.markMoved();for(let t of e.units){let e={...t,path:[...t.path],queue:(t.queue??[]).map(e=>({...e}))};this.units.push(e),this.byId.set(e.id,e),this.typeOf(e).processesHumans&&this.processorList.push(e)}this.nextId=e.nextId,this.pathQueue.push(...e.pathQueue),this.pathsTotal=e.pathsTotal,this.pathsLastStep=0}};function Es(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return Math.abs(r)<=n?t:e+Math.sign(r)*n}var Ds=2,Os=8,ks=400,As=class{world;constructor(e){this.world=e}step(){for(let e of this.world.army.units){let t=this.world.army.typeOf(e);t.role===`harvester`&&this.stepHarvester(e,t)}}stepHarvester(e,t){let n=t.faction===`machines`,r=n&&e.cargo>=1e-6,i=this.resolveHarvestJob(e),a=i?void 0:this.harvestTargetPosition(e);if(!i&&!r&&ps(e,null),!i&&!r&&!e.hasGoal){let n=ds(t)*3,r=this.world.crowds.nearest(e.x,e.z,n**2);r&&(ps(e,{kind:`crowd`,id:r.id}),i=this.resolveHarvestJob(e))}if(e.harvestOrdered&&!ms(e)&&!r){let t=a?.x??e.x,n=a?.z??e.z;ps(e,this.nextHarvestTargetAt(e,t,n)),i=this.resolveHarvestJob(e)}if(!i){r&&(this.orderToNode(e,t),this.depositIfAtNode(e,t.faction));return}let o=i.distanceSquared<=22**2,s=e.harvestingCrowdId!==null&&e.hasGoal&&Ao(e.goalX,e.goalZ,i.x,i.z)>22**2;if(!o&&(!e.hasGoal||s)&&(!n||e.cargo<60)){let t=i.stand();t?this.world.army.order([e.id],t.x,t.z,this.world.nav):ps(e,null)}let c=!1;if(o){let r=Math.min(i.available,ko.harvestPerStep,n?60-e.cargo:i.available);r>0&&(i.take(r),n?(e.cargo+=r,60-e.cargo<1e-6&&(e.cargo=60)):this.world.factions[t.faction].resources.credit(r),c=n&&this.resolveHarvestJob(e)===void 0,c&&ps(e,this.nextHarvestTargetAt(e,i.x,i.z)))}if(n&&((e.cargo>=60||c)&&this.orderToNode(e,t,!0),this.depositIfAtNode(e,t.faction),e.cargo===0&&!e.hasGoal)){let t=this.resolveHarvestJob(e),n=t&&t.available>0?t.stand():void 0;n&&this.world.army.order([e.id],n.x,n.z,this.world.nav)}}resolveHarvestJob(e){let t=e.harvestingBuildingId;if(t!==null){let n=this.world.city.get(t);if(!jo(n,this.world.population))return;let r=this.world.population[t]??0;return{x:n.x,z:n.z,stand:()=>this.harvestStand(e,n),distanceSquared:Mo(e.x,e.z,n),available:r,take:e=>{this.world.population[t]=(this.world.population[t]??0)-e}}}let n=e.harvestingCrowdId;if(n!==null){let t=this.world.crowds.get(n);return!t||t.humans<=0?void 0:{x:t.x,z:t.z,stand:()=>({x:t.x,z:t.z}),distanceSquared:Ao(e.x,e.z,t.x,t.z),available:t.humans,take:e=>{this.world.crowds.drain(n,e)}}}}harvestStand(e,t){let n=this.world.army.typeOf(e),r=ds(n)+Ds,i=[],a=new Set,o=(o,s)=>{let c=No(o,s,t,r),l=this.world.nav.nearestPassable(c.x,c.z,n.nav,n.canCrushBuildings&&n.role!==`harvester`);if(!l||Mo(l.x,l.z,t)>22**2)return;let u=`${l.x},${l.z}`;a.has(u)||(a.add(u),i.push({x:l.x,z:l.z,distanceSquared:Ao(e.x,e.z,l.x,l.z)}))};o(e.x,e.z);let s=Math.max(t.width,t.depth)+r*2;for(let e=0;e<Os;e++){let n=e/Os*Math.PI*2;o(t.x+Math.cos(n)*s,t.z+Math.sin(n)*s)}i.sort((e,t)=>e.distanceSquared===t.distanceSquared?e.x===t.x?e.z-t.z:e.x-t.x:e.distanceSquared-t.distanceSquared);for(let e of i)if(this.world.nav.componentAtLeast(e.x,e.z,n.nav,ks))return{x:e.x,z:e.z}}harvestTargetPosition(e){if(e.harvestingBuildingId!==null){let t=this.world.city.get(e.harvestingBuildingId);return t?{x:t.x,z:t.z}:void 0}if(e.harvestingCrowdId!==null){let t=this.world.crowds.get(e.harvestingCrowdId);return t?{x:t.x,z:t.z}:void 0}}nextHarvestTargetAt(e,t,n){let r=300**2,i=this.world.crowds.nearest(t,n,r);if(i)return{kind:`crowd`,id:i.id};let a=this.nearestPopulatedBuilding(e,t,n,r);return a?{kind:`building`,id:a.id}:null}orderToNode(e,t,n=!1){let r=this.nearestProcessingNode(e.x,e.z,t.faction);if(!r||e.hasGoal&&Ao(e.goalX,e.goalZ,r.x,r.z)<=28**2||e.hasGoal&&!n||Ao(e.x,e.z,r.x,r.z)<=28**2)return;let i=this.world.army.typeOf(r).anchoredFootprint,a=e.x-r.x,o=e.z-r.z,s=Math.max(Math.hypot(a,o),1),c=a/s,l=o/s,u=Math.min(Math.abs(c)>1e-6?i.width/2/Math.abs(c):1/0,Math.abs(l)>1e-6?i.depth/2/Math.abs(l):1/0),d={x:r.x+c*(u+ds(t)+2),z:r.z+l*(u+ds(t)+2)};this.world.army.order([e.id],d.x,d.z,this.world.nav)}depositIfAtNode(e,t){if(e.cargo<1e-6)return;let n=this.nearestProcessingNode(e.x,e.z,t);if(!n||Ao(e.x,e.z,n.x,n.z)>28**2)return;let r=this.world.factions[t].resources,i=r.credit(e.cargo);e.cargo-=i,e.cargo<1e-6&&(e.cargo=0),!(i<=0)&&(r.addCharge(2*i/60),this.world.emit({kind:`deposited`,faction:t}))}nearestPopulatedBuilding(e,t,n,r){let i=Math.sqrt(r),a=[];for(let e of this.world.city.buildingsOverlapping({x0:t-i,z0:n-i,x1:t+i,z1:n+i})){if(!jo(e,this.world.population))continue;let i=Mo(t,n,e);i<r&&a.push({id:e.id,distanceSquared:i})}a.sort((e,t)=>e.distanceSquared===t.distanceSquared?e.id-t.id:e.distanceSquared-t.distanceSquared);for(let t of a){let n=this.world.city.get(t.id);if(n&&this.harvestStand(e,n))return t}}nearestProcessingNode(e,t,n){let r,i=1/0;for(let a of this.world.army.processors){let o=this.world.army.typeOf(a);if(o.faction!==n||!o.processesHumans||!a.deployed||a.deployTimer>0)continue;let s=Ao(e,t,a.x,a.z);s<i&&(i=s,r=a)}return r}},js={count:0,health:0,nearest:void 0};function Ms(e,t,n,r,i){let a=0,o=0,s,c=1/0,l=i*i;return e.index().forEachWithin(n,r,i,i=>{if(e.typeOf(i).faction===t)return;let u=(i.x-n)**2+(i.z-r)**2;u>l||(a++,o+=i.health,(u<c||u===c&&i.id<(s?.id??1/0))&&(s=i,c=u))}),a===0?js:{count:a,health:o,nearest:s}}function Ns(e,t){for(let n of e.units){let r=e.typeOf(n);if(r.faction===t&&r.role===`harbinger`)return n}}function Ps(e,t){let n=[];for(let r of e.units){let i=e.typeOf(r);i.faction===t&&i.role!==`harvester`&&i.role!==`structure`&&i.role!==`harbinger`&&(i.stationary||(i.weaponIds??[]).length===0||n.push(r))}return n}function Fs(e,t){let n=[];for(let r of e.units){let i=e.typeOf(r);i.faction!==t||!i.producesUnits||r.deployTimer>0||i.anchoredFootprint&&!r.deployed||n.push(r)}return n}function Is(e,t){let n=Ns(e,t);if(n)return{x:n.x,z:n.z};let r=0,i=0,a=0;for(let n of e.units)e.typeOf(n).faction===t&&(r+=n.x,i+=n.z,a++);return a===0?void 0:{x:r/a,z:i/a}}var Ls={machines:{harvesters:4,attackAt:6,retreatAt:2,deployBeforeContact:!0,deployAt:120,spreadHarvesters:!1,tier2At:8},ancients:{harvesters:3,attackAt:5,retreatAt:1,deployBeforeContact:!1,deployAt:0,spreadHarvesters:!0,tier2At:6}},Rs=8,zs=220,Bs=60,Vs=1.5,Hs=[46,74,104,140].flatMap(e=>[[e,0],[-e,0],[0,e],[0,-e],[e*.7,e*.7],[-e*.7,e*.7],[e*.7,-e*.7],[-e*.7,-e*.7]]),Us=class{context;posture=`expand`;nextPlanIn=1;constructor(e){this.context=e}get state(){return{posture:this.posture,nextPlanIn:this.nextPlanIn}}restore(e){this.posture=e.posture,this.nextPlanIn=e.nextPlanIn}step(){this.nextPlanIn--,!(this.nextPlanIn>0)&&(this.nextPlanIn=Rs,this.plan())}plan(){let e=Ls[this.context.faction];this.workTheEconomy(e),this.raiseInfrastructure(),this.spendIncome(e),this.fight(e)}workTheEconomy(e){let t=new Set;for(let n of this.context.army.units){let r=this.context.army.typeOf(n);if(r.faction!==this.context.faction||r.role!==`harvester`)continue;let i=n.harvestingBuildingId!==null||n.harvestingCrowdId!==null;if(n.harvestOrdered&&(i||n.hasGoal)){n.harvestingBuildingId!==null&&t.add(n.harvestingBuildingId);continue}let a=this.context.harvestTargetFor(n);a&&(e.spreadHarvesters&&a.kind===`building`&&t.has(a.id)||(a.kind===`building`?(t.add(a.id),this.context.enqueue({kind:`harvest`,unitIds:[n.id],buildingId:a.id})):this.context.enqueue({kind:`harvest`,unitIds:[n.id],crowdId:a.id})))}}raiseInfrastructure(){let e=Ns(this.context.army,this.context.faction);if(!e)return;for(let e of this.context.army.units){let t=this.context.army.typeOf(e);t.faction===this.context.faction&&(!t.anchoredFootprint||t.stationary||e.deployed||e.deployTimer>0||e.hasGoal||this.context.enqueue({kind:`deploy`,unitIds:[e.id],deployed:!0}))}let t=[...this.context.army.typeOf(e).productionTypes??[]].sort((e,t)=>{let n=cs.find(t=>t.id===e)?.producesUnits===!0;return n===(cs.find(e=>e.id===t)?.producesUnits===!0)?0:n?-1:1});for(let n of t){if(this.countOwned(n)>0)continue;let t=cs.find(e=>e.id===n);if(!(!t||!this.canAfford(t)||e.queue.length>0)){this.context.enqueue({kind:`produce`,producer:{kind:`unit`,id:e.id},typeId:n});return}}for(let t of this.context.army.typeOf(e).constructionTypes??[]){let n=cs.find(e=>e.id===t);if(!(!n||n.tier!==1||this.countOwned(t)>0||!this.canAfford(n))){this.summon(e,t);return}}}summon(e,t){for(let[n,r]of Hs){let i=this.context.constructionPlacement(e.id,t,e.x+n,e.z+r);if(i){this.context.enqueue({kind:`build`,builderId:e.id,structureTypeId:t,x:i.x,z:i.z});return}}}spendIncome(e){let t=this.countRole(`harvester`);for(let n of Fs(this.context.army,this.context.faction)){let r=this.context.army.typeOf(n);if((r.productionTypes??[]).length>0||n.queue.length>0)continue;let i=t<e.harvesters?this.bestType(`harvester`,r):this.bestType(`field`,r);!i||!this.canAfford(i)||this.context.enqueue({kind:`produce`,producer:{kind:`unit`,id:n.id},typeId:i.id})}this.context.techTier()===1&&Ps(this.context.army,this.context.faction).length>=e.tier2At&&this.context.resources.humans>=ko.tier2Cost&&this.context.enqueue({kind:`unlockTier2`})}fight(e){let t=Ps(this.context.army,this.context.faction),n=Is(this.context.army,this.context.faction);if(!n)return;let r=Ms(this.context.army,this.context.faction,n.x,n.z,zs),i=this.posture;this.posture=r.count>0?`defend`:this.posture===`attack`?t.length>=e.retreatAt?`attack`:`expand`:t.length>=e.attackAt?`attack`:`expand`;let a=this.posture!==i;if(this.posture===`defend`){let e=r.nearest??n;this.order(t,a,{kind:`attackMove`,unitIds:[],x:e.x,z:e.z});return}if(this.posture===`expand`){this.order(t,a,{kind:`move`,unitIds:[],x:n.x,z:n.z},Bs);return}let o=this.attackTarget();if(o){if(e.deployBeforeContact)for(let n of t){if(!this.context.army.typeOf(n).canDeploy||n.deployTimer>0)continue;let t=Math.hypot(n.x-o.x,n.z-o.z);t<=e.deployAt&&!n.deployed?this.context.enqueue({kind:`deploy`,unitIds:[n.id],deployed:!0}):t>e.deployAt*Vs&&n.deployed&&this.context.enqueue({kind:`deploy`,unitIds:[n.id],deployed:!1})}this.order(t,a,{kind:`attackMove`,unitIds:[],x:o.x,z:o.z})}}attackTarget(){let e=this.context.faction===`machines`?`ancients`:`machines`,t=Ns(this.context.army,e);if(t)return{x:t.x,z:t.z};let n;for(let t of this.context.army.units)this.context.army.typeOf(t).faction===e&&(!n||t.id<n.id)&&(n=t);return n?{x:n.x,z:n.z}:void 0}order(e,t,n,r=0){let i=e.filter(e=>(t||!e.hasGoal)&&e.deployTimer===0);if(i.length!==0){if(r===0){this.context.enqueue({...n,unitIds:i.map(e=>e.id)});return}i.forEach((e,t)=>{let i=Math.floor(t/4)+1,a=t%4,o=(a===0||a===3?r:-r)*i*.5,s=(a<2?r:-r)*i*.5;this.context.enqueue({...n,unitIds:[e.id],x:n.x+o,z:n.z+s})})}}countOwned(e){let t=0;for(let n of this.context.army.units)n.typeId===e&&t++;return t}countRole(e){let t=0;for(let n of this.context.army.units){let r=this.context.army.typeOf(n);r.faction===this.context.faction&&r.role===e&&t++}return t}canAfford(e){return this.context.resources.humans>=e.cost}bestType(e,t){let n=this.context.techTier(),r;for(let i of cs)i.faction!==this.context.faction||i.tier>n||i.role===`harbinger`||i.role===`structure`||i.stationary||(e===`harvester`?i.role!==`harvester`:i.role===`harvester`)||t.productionTypes&&!t.productionTypes.includes(i.id)||this.canAfford(i)&&(!r||i.cost>r.cost)&&(r=i);return r}},Ws=new Map([{id:`machine-rifle`,damage:8,damageType:`kinetic`,attackKind:`ranged`,range:65,minimumRange:0,cadence:8,projectileSpeed:120,shots:1,targetClasses:[`unit`,`structure`]},{id:`machine-cannon`,damage:24,damageType:`kinetic`,attackKind:`ranged`,range:255,minimumRange:18,cadence:84,projectileSpeed:150,shots:2,targetClasses:[`unit`,`structure`]},{id:`machine-harbinger-laser`,damage:22,damageType:`kinetic`,attackKind:`ranged`,range:90,minimumRange:0,cadence:10,projectileSpeed:140,shots:1,targetClasses:[`unit`,`structure`]},{id:`ancient-bite`,damage:18,damageType:`crush`,attackKind:`melee`,range:15,minimumRange:0,cadence:20,projectileSpeed:0,shots:1,targetClasses:[`unit`,`structure`]},{id:`ancient-acid`,damage:24,damageType:`acid`,attackKind:`ranged`,range:58,minimumRange:0,cadence:40,projectileSpeed:90,shots:1,targetClasses:[`unit`,`structure`]}].map(e=>[e.id,e]));function Gs(e){let t=Ws.get(e);if(!t)throw Error(`unknown weapon ${e}`);return t}function Ks(e,t){return Math.hypot(t.x-e.x,t.z-e.z)}var qs=class{context;constructor(e){this.context=e}step(){let e=[];for(let t of this.context.army.units){t.attackCooldown>0&&t.attackCooldown--;let n=this.context.army.typeOf(t),r=n.weaponIds;if(!r||r.length===0||t.deployTimer>0||t.targetBuildingId!==null&&this.attackBuilding(t,r))continue;let i=Math.max(...r.map(e=>Gs(e).range)),a=t.targetId===null?void 0:this.context.army.get(t.targetId);if(a&&t.attackMove&&Ks(t,a)>i&&(a=void 0),(!a||this.context.army.typeOf(a).faction===n.faction)&&(a=this.preferredTarget(t,n.faction,i),t.targetId=a?.id??null),!a)continue;let o=a.x-t.x,s=a.z-t.z,c=Math.hypot(o,s),l=this.weaponForDistance(r,c);if(!l||(t.heading=Es(t.heading,Math.atan2(s,o),gs),t.attackCooldown>0))continue;let u=this.context.army.typeOf(a),d=l.damage*(a.deployed?u.deployedDamageTakenMultiplier??1:1);t.attackCooldown=l.cadence,a.lastAttackerId=t.id,this.context.emit({kind:`underAttack`,faction:this.context.army.typeOf(a).faction});for(let e=0;e<l.shots;e++)a.health-=d,this.context.emit({kind:`combatHit`,attackerId:t.id,attackerTypeId:t.typeId,targetId:a.id,targetTypeId:a.typeId,weaponId:l.id,shotIndex:e,shotCount:l.shots,sourceX:t.x,sourceZ:t.z,sourceHeading:t.heading,targetX:a.x,targetZ:a.z,targetHeading:a.heading,damage:d,remainingHealth:a.health});a.health<=0&&e.push(a)}for(let t of e){if(!this.context.army.get(t.id))continue;let e=this.context.army.typeOf(t).faction,n=this.context.army.typeOf(t).role===`harbinger`;this.context.army.remove(t.id),n?this.context.emit({kind:`harbingerDown`,faction:e,subject:e}):this.context.emit({kind:`unitDown`,faction:e})}}attackBuilding(e,t){let n=e.targetBuildingId===null?void 0:this.context.standingBuilding(e.targetBuildingId,e.x,e.z);if(!n)return e.targetBuildingId=null,!1;e.heading=Es(e.heading,Math.atan2(n.z-e.z,n.x-e.x),gs);let r=this.weaponForDistance(t.filter(e=>Gs(e).targetClasses.includes(`structure`)),n.distance);if(!r||e.attackCooldown>0)return!0;e.attackCooldown=r.cadence;for(let t=0;t<r.shots;t++)this.context.damageBuilding(e.targetBuildingId,r.damage),this.context.emit({kind:`combatHit`,attackerId:e.id,attackerTypeId:e.typeId,targetId:-1,targetTypeId:`city-building`,weaponId:r.id,shotIndex:t,shotCount:r.shots,sourceX:e.x,sourceZ:e.z,sourceHeading:e.heading,targetX:n.x,targetZ:n.z,targetHeight:n.height,damage:r.damage,remainingHealth:0});return!0}preferredTarget(e,t,n){if(e.lastAttackerId!==null){let r=this.context.army.get(e.lastAttackerId);if(r&&this.context.army.typeOf(r).faction!==t&&Ks(e,r)<=n)return r}return this.nearestEnemy(e,t,n)}nearestEnemy(e,t,n){let r,i=n*n;return this.context.army.index().forEachWithin(e.x,e.z,n,n=>{if(this.context.army.typeOf(n).faction===t)return;let a=(n.x-e.x)**2+(n.z-e.z)**2;(a<i||a===i&&n.id<(r?.id??1/0))&&(r=n,i=a)}),r}weaponForDistance(e,t){let n;for(let r of e){let e=Gs(r);t>e.range||t<e.minimumRange||(!n||e.range<n.range)&&(n=e)}return n}};function Js(e,t){let n=xo.filter(t=>e.has(t));if(n.length===0)return;let r=xo.filter(t=>!e.has(t));return{tick:t,winner:n.length===1?So(n[0]):r[0]??null,defeated:n}}function Ys(e){return e?e.winner?xo.indexOf(e.winner)+1:0:-1}var Xs=.0031,Zs=1;function Qs(e){return e.buildings.map(e=>{if(e.state===`rubble`)return 0;let t=(e.clip&&e.clip.length>=3?Pi(e.clip):e.width*e.depth)*Ki(e.height,e.district);return Math.max(Zs,Math.round(t*Xs))})}var $s=1e3,ec=class{humans=0;humansCap=$s;charge=0;chargeCap=To();get segmentsReady(){return Math.floor(this.charge/Co.pipsPerSegment)}credit(e){let t=this.humans;return this.humans=tc(this.humans+e,0,this.humansCap),this.humans-t}spend(e){return e>this.humans?!1:(this.humans-=e,!0)}addCharge(e){this.charge=tc(this.charge+e,0,this.chargeCap)}spendSegment(){return this.segmentsReady<1?!1:(this.charge-=Co.pipsPerSegment,!0)}save(){return{humans:this.humans,charge:this.charge}}restore(e){this.humans=tc(e.humans,0,this.humansCap),this.charge=tc(e.charge,0,this.chargeCap)}};function tc(e,t,n){return e<t?t:e>n?n:e}var nc=1200,rc=new Map(cs.map((e,t)=>[e.id,t])),ic=[{name:`id`,value:e=>e.id},{name:`typeId`,value:e=>rc.get(e.typeId)??-1},{name:`x`,value:e=>e.x},{name:`z`,value:e=>e.z},{name:`heading`,value:e=>e.heading},{name:`path`,value:e=>e.path.length},{name:`goalX`,value:e=>e.goalX},{name:`goalZ`,value:e=>e.goalZ},{name:`hasGoal`,value:e=>+!!e.hasGoal},{name:`repathPending`,value:e=>+!!e.repathPending},{name:`unreachable`,value:e=>+!!e.unreachable},{name:`blockedSteps`,value:e=>e.blockedSteps},{name:`stalledSteps`,value:e=>e.stalledSteps},{name:`health`,value:e=>e.health},{name:`targetId`,value:e=>e.targetId??-1},{name:`attackMove`,value:e=>+!!e.attackMove},{name:`lastAttackerId`,value:e=>e.lastAttackerId??-1},{name:`targetBuildingId`,value:e=>e.targetBuildingId??-1},{name:`attackCooldown`,value:e=>e.attackCooldown},{name:`cargo`,value:e=>e.cargo},{name:`harvestingBuildingId`,value:e=>e.harvestingBuildingId??-1},{name:`harvestingCrowdId`,value:e=>e.harvestingCrowdId??-1},{name:`harvestOrdered`,value:e=>+!!e.harvestOrdered},{name:`deployed`,value:e=>+!!e.deployed},{name:`deployTimer`,value:e=>e.deployTimer},{name:`deployTarget`,value:e=>+!!e.deployTarget},{name:`queue`,value:e=>e.queue.length>0?e.queue.length*1e3+(e.queue[0]?.remainingSteps??0):0}],ac=6,oc=7,sc=[`expand`,`attack`,`defend`],cc=9,lc=8,uc=1,dc=1e3,fc=4,pc=12,mc=32,hc=25,gc=400,_c=12,vc=45/30,yc=3,bc=class{seed;playerFaction;city;nav;army=new Ts;constructionSites=[];battlefield;battlefieldUnitsPerType;freeProduction;factions={machines:{resources:new ec,techTier:1,carnageRemainder:0},ancients:{resources:new ec,techTier:1,carnageRemainder:0}};population;populationCapacity;crowds=new $o;tick=0;get resources(){return this.factions[this.playerFaction].resources}get techTier(){return this.factions[this.playerFaction].techTier}harvesting;combat;rng;queue=[];changed=new Set;events=[];obstacleSignature=``;controllers;ai;eliminated=new Set;matchOutcome=null;combatDamagedBuildings=new Map;constructor(e,t=`machines`,n={}){if(this.seed=e,this.playerFaction=t,this.controllers={machines:n.controllers?.machines??(t===`machines`?`human`:`ai`),ancients:n.controllers?.ancients??(t===`ancients`?`human`:`ai`)},this.battlefield=n.battlefield===!0,this.battlefieldUnitsPerType=Math.max(1,Math.floor(n.battlefieldUnitsPerType??fc)),this.freeProduction=this.battlefield,this.rng=new oa(e),this.city=this.battlefield?new yo({seed:e,radius:650,maxBuildings:18}):new yo({seed:e}),this.nav=new Jo(this.city),this.population=Qs(this.city),this.populationCapacity=[...this.population],this.battlefield&&(this.factions.machines.techTier=2,this.factions.ancients.techTier=2),this.harvesting=new As({city:this.city,nav:this.nav,army:this.army,crowds:this.crowds,population:this.population,factions:this.factions,emit:e=>this.events.push(e)}),this.combat=new qs({army:this.army,emit:e=>{e.kind===`harbingerDown`&&e.faction&&this.eliminated.add(e.faction),this.events.push(e)},standingBuilding:(e,t,n)=>{let r=this.city.get(e);if(!(!r||r.state===`rubble`))return{x:r.x,z:r.z,height:r.height,distance:Math.sqrt(Mo(t,n,r))}},damageBuilding:(e,t)=>{let n=this.city.get(e);!n||n.state===`rubble`||(this.combatDamagedBuildings.has(e)||this.combatDamagedBuildings.set(e,n.state),this.city.damage(e,t))}}),this.ai={machines:new Us(this.aiContext(`machines`)),ancients:new Us(this.aiContext(`ancients`))},this.battlefield)this.deployStartingEconomy(),this.deployBattlefieldForces();else if(n.standardMatch){for(let e of xo)this.factions[e].resources.credit(dc);this.deployHarbingers()}else this.deployStartingEconomy(),this.deployStartingForces()}aiContext(e){return{faction:e,army:this.army,resources:this.factions[e].resources,techTier:()=>this.factions[e].techTier,enqueue:t=>this.enqueue(e,t),harvestTargetFor:e=>this.aiHarvestTarget(e),constructionPlacement:(e,t,n,r)=>this.constructionPlacement(e,t,n,r)}}aiHarvestTarget(e){let t=this.harvesting.nextHarvestTargetAt(e,e.x,e.z);if(t)return t;let n=this.harvesting.nearestPopulatedBuilding(e,e.x,e.z,(nc*2)**2);return n?{kind:`building`,id:n.id}:null}deployStartingForces(){let e=this.city.startAnchors;[`machines`,`ancients`].forEach((t,n)=>{let r=e[n]??{x:0,z:0},i=cs.find(e=>e.faction===t&&e.role===`harbinger`),a=cs.find(e=>e.faction===t&&e.role===`harvester`),o=cs.find(e=>e.faction===t&&e.role===`infantry`),s=cs.find(e=>e.faction===t&&e.role===`heavy`);if(!(!i||!a||!o||!s))for(let e=0;e<uc;e++)this.spawnNear(i.id,r.x,r.z,ds(i)*(2+e*2)),this.spawnNear(s.id,r.x,r.z,ds(s)*(3+e*2)),this.spawnNear(o.id,r.x,r.z,ds(s)*5+ds(o)*e),this.spawnNear(a.id,r.x,r.z,ds(s)*4+ds(a)*e)})}deployHarbingers(){this.city.startAnchors.forEach((e,t)=>{let n=xo[t],r=n&&cs.find(e=>e.faction===n&&e.role===`harbinger`);r&&this.spawnNear(r.id,e.x,e.z,ds(r)*2)})}deployBattlefieldForces(){for(let e of[`machines`,`ancients`]){let t=cs.filter(t=>t.faction===e&&t.role!==`structure`&&t.id!==`machine-processing-node`&&t.id!==`mobile-factory`),n=Math.ceil(t.length/2),r=e===`machines`?-1:1;for(let[i,a]of t.entries()){let t=i%2,o=Math.floor(i/2),s=r*(170+t*250),c=(o-(n-1)/2)*260,l=ds(a)*2.7,u=Math.ceil(Math.sqrt(this.battlefieldUnitsPerType)),d=Math.ceil(this.battlefieldUnitsPerType/u);for(let t=0;t<this.battlefieldUnitsPerType;t++){let n=s+(t%u-(u-1)/2)*l,r=c+(Math.floor(t/u)-(d-1)/2)*l,i=this.spawnNear(a.id,n,r,Math.max(ds(a)*.6,5));i&&e===`machines`&&(a.id===`machine-infantry`||a.id===`machine-construct`)&&(i.deployed=!0,i.deployTarget=!0)}}}this.obstacleSignature=``,this.refreshStructureObstacles()}deployStartingEconomy(){let e=this.city.startAnchors[0],t=this.city.startAnchors[1];e&&(this.addInfrastructureNear(`machine-processing-node`,e.x+34,e.z,!0),this.addInfrastructureNear(`mobile-factory`,e.x-34,e.z,this.battlefield)),t&&(this.addStationaryNear(`ancient-slime-temple`,t.x+34,t.z),this.addStationaryNear(`ancient-deity-structure`,t.x-40,t.z))}addInfrastructureNear(e,t,n,r){let i=this.nav.nearestPassable(t,n,`medium`);if(!i)return;let a=this.army.spawn(e,i.x,i.z);return a.deployed=r,a.deployTarget=r,this.obstacleSignature=``,this.refreshStructureObstacles(),a}addStationaryNear(e,t,n){let r=this.nav.nearestPassable(t,n,`large`);if(!r)return;let i=this.army.spawn(e,r.x,r.z);return this.battlefield&&e===`ancient-slime-temple`&&(i.deployed=!0,i.deployTarget=!0),this.obstacleSignature=``,this.refreshStructureObstacles(),i}spawnNear(e,t,n,r,i=!1){let a=cs.find(t=>t.id===e);if(!a)return;let o=ds(a),s,c=-1/0,l=i?mc:pc;for(let u=0;u<l;u++){let d=this.rng.range(0,Math.PI*2),f=(i?r*(1+3*u/(l-1)):r)*Math.sqrt(this.rng.next()),p=this.nav.nearestPassable(t+Math.cos(d)*f,n+Math.sin(d)*f,a.nav);if(!p||this.nav.flood(p.x,p.z,a.nav).count<gc)continue;let m=this.spawnGap(p.x,p.z,o);if(m>=0)return this.army.spawn(e,p.x,p.z,Math.atan2(-p.z,-p.x));!i&&m>c&&(c=m,s=p)}return s&&!i?this.army.spawn(e,s.x,s.z,Math.atan2(-s.z,-s.x)):void 0}spawnGap(e,t,n){let r=1/0;for(let i of this.army.units){let a=n+ds(this.army.typeOf(i)),o=Math.sqrt(Ao(e,t,i.x,i.z))-a;o<r&&(r=o)}return r}enqueue(e,t){this.queue.push({issuer:e,command:t})}step(){if(!this.matchOutcome){if(this.tick++,this.applyCommands(),this.army.step(this.nav),this.refreshStructureObstacles(),this.crushBuildings(),this.combat.step(),this.combatDamagedBuildings.size>0){let e=new Map(this.combatDamagedBuildings);this.combatDamagedBuildings.clear(),this.finalizeBuildingChanges(e,!1)}if(this.crowds.step(this.nav),this.harvesting.step(),this.stepConstruction(),this.stepProduction(),this.resolveMatch(),!this.matchOutcome)for(let e of xo)this.controllers[e]===`ai`&&this.ai[e].step()}}resolveMatch(){if(this.matchOutcome||this.eliminated.size===0)return;let e=Js(this.eliminated,this.tick);e&&(this.matchOutcome=e,this.events.push({kind:`matchResolved`,...e.winner?{faction:e.winner}:{}}))}applyCommands(){if(this.queue.length===0)return;let e=this.queue.splice(0,this.queue.length),t=new Map,n=e=>{if(t.has(e))return;let n=this.city.get(e);n&&t.set(e,n.state)},r=!1;for(let{issuer:t,command:i}of e)if((i.kind===`damage`||i.kind===`setState`||i.kind===`setAllStates`||i.kind===`raze`||i.kind===`setController`||i.kind===`debugResources`)==(t===`debug`)){if(t===`debug`){this.applyDeveloperCommand(i,n);continue}switch(i.kind){case`move`:this.applyMove(t,i.unitIds,i.x,i.z);break;case`stop`:this.applyStop(t,i.unitIds);break;case`attack`:`buildingId`in i?this.applyAttackBuilding(t,i.unitIds,i.buildingId,i.x,i.z):this.applyAttack(t,i.unitIds,i.targetId,i.x,i.z);break;case`attackMove`:this.applyAttackMove(t,i.unitIds,i.x,i.z);break;case`harvest`:this.applyHarvest(t,i);break;case`deploy`:for(let e of this.controllableIds(t,i.unitIds))this.army.beginDeploy(e,i.deployed);break;case`build`:r=this.applyBuild(t,i.builderId,i.structureTypeId,i.x,i.z)||r;break;case`produce`:this.applyProduce(t,i.producer,i.typeId);break;case`unlockTier2`:this.applyUnlockTier2(t)}}this.finalizeBuildingChanges(t,r)}applyMove(e,t,n,r){let i=this.controllableIds(e,t);for(let e of i)this.clearHarvestIntent(e),this.cancelConstructionForBuilder(e,!0);this.army.order(i,n,r,this.nav)}applyAttackMove(e,t,n,r){let i=this.controllableIds(e,t);for(let e of i){this.clearHarvestIntent(e),this.cancelConstructionForBuilder(e,!0);let t=this.army.get(e);t&&(t.targetId=null)}this.army.order(i,n,r,this.nav,!0)}applyStop(e,t){let n=this.controllableIds(e,t);for(let e of n)this.clearHarvestIntent(e),this.cancelConstructionForBuilder(e,!0);this.army.stop(n)}applyAttack(e,t,n,r,i){let a=this.army.get(n);if(!a||this.army.typeOf(a).faction===e)return;let o=this.controllableIds(e,t);for(let e of o){let t=this.army.get(e);t&&(t.targetId=n),this.cancelConstructionForBuilder(e,!0)}this.army.order(o,r,i,this.nav)}applyAttackBuilding(e,t,n,r,i){let a=this.city.get(n);if(!a||a.state===`rubble`)return;let o=this.controllableIds(e,t).filter(e=>{let t=this.army.get(e),n=t&&this.army.typeOf(t);return n!==void 0&&(n.weaponIds??[]).some(e=>Gs(e).targetClasses.includes(`structure`))});if(o.length!==0){this.army.order(o,r,i,this.nav);for(let e of o){let t=this.army.get(e);t&&(t.targetBuildingId=n,t.targetId=null,this.cancelConstructionForBuilder(e,!0))}}}clearHarvestIntent(e){let t=this.army.get(e);t&&(ps(t,null),t.harvestOrdered=!1)}applyHarvest(e,t){let n=`buildingId`in t?this.city.get(t.buildingId):void 0,r=`crowdId`in t?this.crowds.get(t.crowdId):void 0;if(n&&!jo(n,this.population)||r&&r.humans<=0||!n&&!r)return;let i=n?{kind:`building`,id:n.id}:{kind:`crowd`,id:r.id};for(let a of t.unitIds){let t=this.army.get(a),o=t&&this.army.typeOf(t);if(!t||o?.faction!==e||o.role!==`harvester`||(ps(t,i),t.harvestOrdered=!0,o.faction!==`ancients`&&t.cargo>=60))continue;let s=n?this.harvesting.harvestStand(t,n):{x:r.x,z:r.z};s&&this.army.order([t.id],s.x,s.z,this.nav)}}applyBuild(e,t,n,r,i){let a=this.constructionPlacement(t,n,r,i),o=this.army.get(t),s=cs.find(e=>e.id===n);if(o===void 0||this.army.typeOf(o).faction!==e||a===void 0||s===void 0||!s||!a)return this.events.push(s?{kind:`buildRefused`,subject:s.name,faction:e}:{kind:`buildRefused`,faction:e}),!1;if(!this.factions[e].resources.spend(s.cost))return this.events.push({kind:`constructionRefusedResources`,subject:s.name,faction:e}),!1;let c={...a,builderId:t,remainingSteps:s.constructionSteps??0,summoning:!1};return this.constructionSites.push(c),this.army.order([t],c.approachX,c.approachZ,this.nav),this.obstacleSignature=``,this.events.push({kind:`constructionStarted`,subject:s.name,faction:e}),!0}constructionPlacement(e,t,n,r){let i=this.army.get(e),a=i&&this.army.typeOf(i),o=cs.find(e=>e.id===t);if(!i||!a||!o||a.faction!==o.faction||!a.constructionTypes?.includes(o.id)||this.constructionSites.some(t=>t.builderId===e))return;let s=o.anchoredFootprint;if(!s||o.stationary!==!0||o.constructionSteps===void 0)return;let c=s.width/2,l=s.depth/2,u=1.5;for(let[e,t]of[[0,0],[-c+u,-l+u],[-c+u,l-u],[c-u,-l+u],[c-u,l-u]])if(!this.nav.passable(n+e,r+t,`small`))return;let d=this.constructionApproach(i,c,l,n,r);return d?{structureTypeId:t,x:n,z:r,approachX:d.x,approachZ:d.z}:void 0}constructionApproach(e,t,n,r,i){let a=ds(this.army.typeOf(e));return[{x:r-t-a-yc,z:i},{x:r+t+a+yc,z:i},{x:r,z:i-n-a-yc},{x:r,z:i+n+a+yc}].sort((t,n)=>Ao(e.x,e.z,t.x,t.z)-Ao(e.x,e.z,n.x,n.z)).find(t=>this.nav.passable(t.x,t.z,this.army.typeOf(e).nav))}cancelConstructionForBuilder(e,t){let n=this.constructionSites.findIndex(t=>t.builderId===e);if(n<0)return!1;let[r]=this.constructionSites.splice(n,1),i=r&&cs.find(e=>e.id===r.structureTypeId),a=this.army.get(e);t&&r&&!r.summoning&&i&&a&&this.factions[this.army.typeOf(a).faction].resources.credit(i.cost),this.obstacleSignature=``;let o=a&&this.army.typeOf(a).faction;return this.events.push(i?{kind:`constructionCancelled`,subject:i.name,...o?{faction:o}:{}}:{kind:`constructionCancelled`,...o?{faction:o}:{}}),!0}applyProduce(e,t,n){let r=this.army.get(t.id),i=cs.find(e=>e.id===n),a=r&&this.army.typeOf(r),o=a?.producesUnits===!0,s=a?.productionTypes===void 0||a.productionTypes.includes(n),c=r!==void 0&&this.army.typeOf(r).faction===e&&o&&s&&i!==void 0&&i.faction===e&&i.role!==`structure`&&i.role!==`harbinger`&&i.tier<=this.factions[e].techTier&&(a.anchoredFootprint===void 0||r.deployed)&&r.deployTimer===0;c&&r.queue.length>=5?this.events.push({kind:`productionQueueFull`,subject:i.name,faction:e}):c&&(this.freeProduction||this.factions[e].resources.spend(i.cost))?(r.queue.push({typeId:i.id,remainingSteps:i.buildSteps}),this.events.push({kind:`productionQueued`,subject:i.name,faction:e})):this.events.push(i?{kind:`productionRefused`,subject:i.name,faction:e}:{kind:`productionRefused`,faction:e})}applyUnlockTier2(e){let t=this.factions[e];t.techTier===1&&(this.freeProduction||t.resources.spend(ko.tier2Cost))?(t.techTier=2,this.events.push({kind:`tier2`,faction:e})):this.events.push({kind:`tier2Refused`,faction:e})}crushBuildings(){let e=new Map;for(let t of this.army.units){let n=this.army.typeOf(t);if(!n.canCrushBuildings||n.role===`harvester`)continue;let r=ds(n),i=r*r,a=this.city.buildingsOverlapping({x0:t.x-r,z0:t.z-r,x1:t.x+r,z1:t.z+r});for(let n of a)n.state!==`rubble`&&(Mo(t.x,t.z,n)>i||(e.has(n.id)||e.set(n.id,n.state),this.city.damage(n.id,vc)))}this.finalizeBuildingChanges(e,!1)}finalizeBuildingChanges(e,t){let n=[];for(let[t,r]of e)this.city.get(t)?.state!==r&&n.push(t);if(n.length===0){t&&(this.army.evictBlocked(this.nav),this.army.revalidate(this.nav));return}for(let e of n)this.changed.add(e);if(this.collapsePopulation(n),n.length>=_c)this.nav.rebuildAll();else for(let e of n){let t=this.city.get(e);t&&this.nav.rebuildAround(t)}this.displacePopulation(e),this.army.evictBlocked(this.nav),this.crowds.evictBlocked(this.nav),this.army.revalidate(this.nav)}displacePopulation(e){for(let[t,n]of e){if(n!==`intact`)continue;let e=this.city.get(t);if(!e||e.state!==`damaged`)continue;let r=this.population[t]??0;if(r<=0)continue;let i=r*Yo;this.population[t]=r-i,this.crowds.displace(e,i,this.rng,this.nav)}}collapsePopulation(e){let t=0;for(let n of e){let e=this.city.get(n);if(!e||e.state!==`rubble`)continue;let r=this.population[n]??0;this.population[n]=0,this.witnessedByAncients(e.x,e.z)&&(t+=r+10)}if(t<=0)return;let n=this.factions.ancients;for(n.carnageRemainder+=t;n.carnageRemainder>=45;)n.resources.addCharge(1),n.carnageRemainder-=45}witnessedByAncients(e,t){let n=120**2,r=!1;return this.army.index().forEachWithin(e,t,120,i=>{r||this.army.typeOf(i).faction===`ancients`&&Ao(i.x,i.z,e,t)<=n&&(r=!0)}),r}applyDeveloperCommand(e,t){switch(e.kind){case`setController`:this.controllers[e.faction]=e.controller;break;case`damage`:t(e.buildingId),this.city.advanceState(e.buildingId);break;case`setState`:t(e.buildingId),this.city.setState(e.buildingId,e.state);break;case`setAllStates`:for(let e of this.city.buildings)t(e.id);this.city.setAllStates(e.state);break;case`debugResources`:this.resources.credit(e.humans),this.resources.addCharge(e.charge);break;case`raze`:{let n=e.radius*e.radius;for(let r of this.city.buildings)r.state!==`rubble`&&((r.x-e.x)**2+(r.z-e.z)**2>n||(t(r.id),this.city.setState(r.id,`rubble`)));break}}}controllableIds(e,t){return e===`debug`?[]:t.filter(t=>{let n=this.army.get(t);return n!==void 0&&this.army.typeOf(n).faction===e})}canWorkBuilding(e,t){let n=this.army.get(e),r=this.city.get(t);return!n||!r?!1:this.harvesting.harvestStand(n,r)!==void 0}stepProduction(){this.stepUnitProduction()}stepUnitProduction(){for(let e of this.army.units){let t=this.army.typeOf(e),n=e.queue[0],r=t.anchoredFootprint===void 0||e.deployed;if(!t.producesUnits||!n||!r||e.deployTimer>0||n.remainingSteps>0&&--n.remainingSteps>0)continue;let i=cs.find(e=>e.id===n.typeId);if(!i||!this.spawnNear(i.id,e.x+hc,e.z,ds(i)*4,!0)){this.events.push({kind:`productionBlocked`,subject:i?.name??n.typeId,faction:t.faction});continue}e.queue.shift(),this.events.push({kind:`produced`,subject:i.name,faction:t.faction})}}stepConstruction(){for(let e=this.constructionSites.length-1;e>=0;e--){let t=this.constructionSites[e];if(!t)continue;let n=this.army.get(t.builderId),r=cs.find(e=>e.id===t.structureTypeId);if(!n||!r){this.cancelConstructionForBuilder(t.builderId,!1);continue}if(!t.summoning){let e=r.anchoredFootprint,i=ds(this.army.typeOf(n))+yc+.5,a=Math.max(Math.abs(n.x-t.x)-(e?.width??0)/2,0),o=Math.max(Math.abs(n.z-t.z)-(e?.depth??0)/2,0);if(Math.hypot(a,o)>i)continue;t.summoning=!0,this.army.stop([n.id])}if(t.remainingSteps>0&&--t.remainingSteps>0)continue;this.army.spawn(r.id,t.x,t.z),this.constructionSites.splice(e,1),this.obstacleSignature=``;let i=this.army.typeOf(n).faction;this.events.push({kind:`constructionComplete`,subject:r.name,faction:i})}}refreshStructureObstacles(){let e=this.army.units.flatMap(e=>{let t=this.army.typeOf(e).anchoredFootprint,n=e.deployed&&(e.deployTimer===0||e.deployTarget);return!t||!n?[]:[{x0:e.x-t.width/2,z0:e.z-t.depth/2,x1:e.x+t.width/2,z1:e.z+t.depth/2}]}),t=this.constructionSites.map(e=>{let t=cs.find(t=>t.id===e.structureTypeId)?.anchoredFootprint;return t?{x0:e.x-t.width/2,z0:e.z-t.depth/2,x1:e.x+t.width/2,z1:e.z+t.depth/2}:void 0}).filter(e=>e!==void 0),n=[...e,...t],r=n.map(e=>`${e.x0},${e.z0},${e.x1},${e.z1}`).join(`|`);r!==this.obstacleSignature&&(this.obstacleSignature=r,this.nav.setObstacles(n))}get outcome(){return this.matchOutcome}remainingPopulation(){return this.population.reduce((e,t)=>e+t,0)}drainChangedBuildings(){if(this.changed.size===0)return[];let e=[...this.changed].sort((e,t)=>e-t);return this.changed.clear(),e}drainEvents(){return this.events.length===0?[]:this.events.splice(0,this.events.length)}cargoInTransit(){let e=0;for(let t of this.army.units)this.army.typeOf(t).faction===this.playerFaction&&(e+=t.cargo);return e}harvestersIdle(){let e=0;for(let t of this.army.units){let n=this.army.typeOf(t);n.faction===this.playerFaction&&n.role===`harvester`&&(!t.harvestOrdered||ms(t)||n.faction===`machines`&&t.cargo>0||e++)}return e}queuedProduction(){let e=0;for(let t of this.army.units)this.army.typeOf(t).faction===this.playerFaction&&(e+=t.queue.length);return e}hash(){let e=this.army.units,t=this.crowds.all,n=this.army.pendingIds,r=new Float64Array(ac+xo.length*oc+n.length+e.length*ic.length+this.population.length+this.city.buildings.length+t.length*cc+this.constructionSites.length*lc),i=0;r[i++]=this.tick,r[i++]=this.rng.save().s,r[i++]=this.army.pathsTotal,r[i++]=this.matchOutcome?.tick??-1,r[i++]=Ys(this.matchOutcome);for(let e of xo){let t=this.factions[e];r[i++]=t.resources.humans,r[i++]=t.resources.charge,r[i++]=t.techTier,r[i++]=t.carnageRemainder,r[i++]=+(this.controllers[e]===`ai`);let n=this.ai[e].state;r[i++]=sc.indexOf(n.posture),r[i++]=n.nextPlanIn}r[i++]=n.length;for(let e of n)r[i++]=e;for(let t of e)for(let e of ic)r[i++]=e.value(t);for(let e of this.population)r[i++]=e;for(let e of this.city.buildings)r[i++]=e.health;for(let e of t)r[i++]=e.id,r[i++]=e.x,r[i++]=e.z,r[i++]=e.humans,r[i++]=e.panicSteps,r[i++]=e.lifeSteps,r[i++]=e.trailDirX,r[i++]=e.trailDirZ,r[i++]=e.trailStrength;for(let e of this.constructionSites)r[i++]=e.builderId,r[i++]=rc.get(e.structureTypeId)??-1,r[i++]=e.x,r[i++]=e.z,r[i++]=e.approachX,r[i++]=e.approachZ,r[i++]=e.remainingSteps,r[i++]=+!!e.summoning;if(i!==r.length)throw Error(`world hash wrote ${i} values into an array sized ${r.length}; the sizing terms are stale`);let a=new Uint8Array(r.buffer),o=2166136261;for(let e of a)o^=e,o=Math.imul(o,16777619);for(let e of this.city.hash())o^=e.charCodeAt(0),o=Math.imul(o,16777619);return(o>>>0).toString(16).padStart(8,`0`)}save(){return{tick:this.tick,rng:this.rng.save(),units:this.army.save(),buildingStates:this.city.buildings.map(e=>e.state),buildingHealth:this.city.buildings.map(e=>e.health),playerFaction:this.playerFaction,economy:{population:[...this.population],factions:{machines:this.saveFaction(`machines`),ancients:this.saveFaction(`ancients`)}},crowds:this.crowds.save(),constructionSites:this.constructionSites.map(e=>({...e})),match:this.matchOutcome?{...this.matchOutcome,defeated:[...this.matchOutcome.defeated]}:null,controllers:{...this.controllers},ai:{machines:this.ai.machines.state,ancients:this.ai.ancients.state}}}saveFaction(e){let t=this.factions[e];return{resources:t.resources.save(),techTier:t.techTier,carnageRemainder:t.carnageRemainder}}restore(e){if(e.playerFaction!==this.playerFaction)throw Error(`save is for ${e.playerFaction}, this world is ${this.playerFaction}; construct the World with the save's faction before restoring`);this.tick=e.tick,this.rng=oa.restore(e.rng),this.population.splice(0,this.population.length,...e.economy.population);for(let t of xo){let n=e.economy.factions[t],r=this.factions[t];r.resources.restore(n.resources),r.techTier=n.techTier,r.carnageRemainder=n.carnageRemainder}this.crowds.restore(e.crowds),this.constructionSites.splice(0,this.constructionSites.length,...e.constructionSites.map(e=>({...e})));for(let t of xo)this.controllers[t]=e.controllers[t],this.ai[t].restore(e.ai[t]);this.matchOutcome=e.match?{...e.match,defeated:[...e.match.defeated]}:null,this.eliminated.clear();for(let t of e.match?.defeated??[])this.eliminated.add(t);this.queue.length=0,this.events.length=0,this.obstacleSignature=``,this.city.buildings.forEach((t,n)=>{let r=e.buildingStates[n],i=e.buildingHealth[n];r&&(t.state!==r||t.health!==i)&&(t.state=r,t.health=i??0,this.changed.add(t.id))}),this.army.restore(e.units),this.refreshStructureObstacles()}destructionCounts(){return qi.map(e=>this.city.countByState(e))}},xc=class extends Error{};function Sc(e){if(e.outcome)throw new xc(`this match has ended; a resolved match can be reopened but not saved`);return{version:24,seed:e.seed,playerFaction:e.playerFaction,tick:e.tick,hash:e.hash(),world:e.save()}}function Cc(e){Tc(e);let t=new bc(e.seed,e.playerFaction),n=t.city.buildings.length,r=e.world.buildingStates.length;if(n!==r||e.world.buildingHealth.length!==n)throw new xc(`save has ${r} building states / ${e.world.buildingHealth.length} health values but seed ${e.seed} now generates ${n}; the city generator changed since this save was written`);t.restore(e.world);let i=t.hash();if(i!==e.hash)throw new xc(`restored world hash ${i} does not match the saved ${e.hash}; the save did not round-trip and the world is not the one that was saved`);return t}function wc(e){try{return Tc(e),!0}catch{return!1}}function Tc(e){if(typeof e!=`object`||!e)throw new xc(`save is not an object`);let t=e;if(t.version!==24)throw new xc(`save version ${String(t.version)} cannot be read by version 24`);if(typeof t.seed!=`number`||!Number.isFinite(t.seed))throw new xc(`save has no usable seed`);if(t.playerFaction!==`machines`&&t.playerFaction!==`ancients`)throw new xc(`save has an unknown faction ${String(t.playerFaction)}`);if(typeof t.tick!=`number`||!Number.isInteger(t.tick)||t.tick<0)throw new xc(`save has no usable step count`);if(typeof t.hash!=`string`||t.hash.length===0)throw new xc(`save has no hash to verify against`);let n=t.world;if(typeof n!=`object`||!n)throw new xc(`save has no world state`);if(!Array.isArray(n.buildingStates))throw new xc(`save has no destruction state`);if(!Array.isArray(n.buildingHealth))throw new xc(`save has no building health`);if(!Array.isArray(n.constructionSites))throw new xc(`save has no construction sites`);if(!n.buildingHealth.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0))throw new xc(`save has unusable building health`);if(typeof n.controllers!=`object`||n.controllers===null)throw new xc(`save does not say who commands each faction`);if(typeof n.economy!=`object`||n.economy===null)throw new xc(`save has no economy state`);let r=n.economy.factions;if(typeof r!=`object`||!r)throw new xc(`save has no per-faction economy state`);for(let e of[`machines`,`ancients`]){let t=r[e];if(typeof t!=`object`||!t||typeof t.resources!=`object`||t.resources===null)throw new xc(`save has no resource state for ${e}`)}}var Ec=`human-resources`,Dc=1,Oc=`saves`,kc=`quick`,Ac=class e{db=null;static get available(){return typeof indexedDB<`u`}async open(){if(this.db)return this.db;if(!e.available)throw Error(`IndexedDB is unavailable in this context`);return this.db=await new Promise((e,t)=>{let n=indexedDB.open(Ec,Dc);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(Oc)||e.createObjectStore(Oc,{keyPath:`slot`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`failed to open the save database`)),n.onblocked=()=>t(Error(`save database upgrade blocked by another tab`))}),this.db}async put(e,t,n=kc){let r=await this.open(),i={slot:n,envelope:e,savedAtMs:t};await jc(r,`readwrite`,e=>e.put(i))}async get(e=kc){let t=await jc(await this.open(),`readonly`,t=>t.get(e));if(t){if(!wc(t.envelope)){this.lastRejection=`save in slot "${e}" is not readable by this build`;return}return this.lastRejection=null,t}}lastRejection=null;async list(){return(await jc(await this.open(),`readonly`,e=>e.getAll())).map(e=>({...e,readable:wc(e.envelope)})).sort((e,t)=>t.savedAtMs-e.savedAtMs)}async delete(e=kc){await jc(await this.open(),`readwrite`,t=>t.delete(e))}};function jc(e,t,n){return new Promise((r,i)=>{let a=e.transaction(Oc,t),o=n(a.objectStore(Oc));o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error??Error(`save operation failed`)),a.onabort=()=>i(a.error??Error(`save transaction aborted`))})}function Z(e,t,n=0){let r=[];for(let i=0;i<e;i++){let a=n+i/e*Math.PI*2;r.push([Math.cos(a)*t,Math.sin(a)*t])}return r}function Mc(e,t=0){return Z(6,e,t)}function Nc(e,t){let n=e/2,r=t/2;return[[n,r],[-n,r],[-n,-r],[n,-r]]}function Q(e,t,n){let r=e/2,i=t/2,a=Math.min(n,Math.min(r,i)*.9);return[[r,i-a],[r-a,i],[-(r-a),i],[-r,i-a],[-r,-(i-a)],[-(r-a),-i],[r-a,-i],[r,-(i-a)]]}function Pc(e){let t=[],n=new z,r=new z,i=new W,a=new W,o=new W,s=new W,c=new W;for(let l of e){let e=l.profile.length;if(e<3)continue;let u=l.taper??1,d=l.pivot??`base`,f=d===`base`?0:d===`centre`?-l.height/2:-l.height,p=f+l.height,m=l.shearX??0,h=l.shearZ??0;n.makeRotationY(l.rotY??0),l.tilt&&n.multiply(r.makeRotationX(l.tilt)),l.roll&&n.multiply(r.makeRotationZ(l.roll)),n.setPosition(l.x,l.y,l.z);let g=[],_=[];i.set(0,0,0);for(let e of l.profile){let t=e[0],r=e[1];g.push(new W(t,f,r).applyMatrix4(n)),_.push(new W(t*u+m,p,r*u+h).applyMatrix4(n))}for(let e of g)i.add(e);for(let e of _)i.add(e);i.multiplyScalar(1/(e*2));let v=(e,n,r)=>{a.subVectors(n,e),o.subVectors(r,e),s.crossVectors(a,o),c.copy(e).add(n).add(r).multiplyScalar(1/3).sub(i);let[l,u]=s.dot(c)<0?[r,n]:[n,r];t.push(e.x,e.y,e.z,l.x,l.y,l.z,u.x,u.y,u.z)};for(let t=1;t<e-1;t++){let e=g[0],n=g[t],r=g[t+1],i=_[0],a=_[t],o=_[t+1];e&&n&&r&&v(e,n,r),i&&a&&o&&v(i,a,o)}for(let t=0;t<e;t++){let n=(t+1)%e,r=g[t],i=g[n],a=_[t],o=_[n];!r||!i||!a||!o||(v(r,i,o),v(r,o,a))}}let l=new De;return l.setAttribute(`position`,new R(new Float32Array(t),3)),l.computeVertexNormals(),l}var Fc=-Math.PI/2,Ic=(e,t,n=9)=>Z(n,1).map(([n,r])=>[n*e,r*t]);function Lc(e,t){let n=e,r=t,i=[],a=[];i.push({profile:Ic(n*.18,n*.18),height:n*.72,x:0,y:r*.48,z:0,roll:Fc}),i.push({profile:Ic(n*.16,n*.14),height:n*.28,x:n*.42,y:r*.58,z:0,roll:Fc});for(let e of[-1,1])i.push({profile:Q(n*.08,n*.9,n*.02),height:n*.42,taper:.55,x:n*.02,y:r*.6,z:e*n*.36,roll:-Math.PI/2,rotY:e*-.3});i.push({profile:Z(5,n*.06),height:n*.72,taper:.15,x:-n*.48,y:r*.5,z:0,roll:Fc});for(let e of[-n*.16,n*.16])a.push({profile:Z(6,n*.055),height:n*.03,x:n*.5,y:r*.6,z:e,roll:Fc});return{parts:i,accents:a}}function Rc(e,t){let n=e,r=t,i=[],a=[],o=[],s=-Math.PI/2,c=(e,t=0)=>({roll:s+t,rotY:-e}),l=(e,t)=>Nc(e*2,t*2),u=(e,t,n=9)=>Z(n,1).map(([n,r])=>[n*e,r*t]),d=(e,t,n,r,i=6,a=1)=>{let o=Math.hypot(t.x-e.x,t.z-e.z),s=t.y-e.y;return{profile:Z(i,n),height:Math.hypot(o,s)*a,taper:r/n,x:e.x,y:e.y,z:e.z,...c(Math.atan2(t.z-e.z,t.x-e.x),Math.atan2(s,o))}},f=(e,t)=>({x:e.x,y:e.y,z:t*e.z}),p=[{x:n*.11,base:r*.6,top:r*.839,halfLength:n*.17,halfWidth:n*.26},{x:-n*.06,base:r*.489,top:r*.828,halfLength:n*.18,halfWidth:n*.324},{x:-n*.24,base:r*.344,top:r*.794,halfLength:n*.18,halfWidth:n*.34},{x:-n*.41,base:r*.233,top:r*.7,halfLength:n*.17,halfWidth:n*.31},{x:-n*.55,base:r*.144,top:r*.544,halfLength:n*.13,halfWidth:n*.24}];for(let e of p)i.push({profile:u(e.halfLength,e.halfWidth),height:e.top-e.base,taper:.66,x:e.x,y:e.base,z:0});let m=e=>{let t=p[0],n=p[p.length-1];if(!t||!n)return r*.8;if(e>=t.x)return t.top;if(e<=n.x)return n.top;for(let t=0;t<p.length-1;t++){let n=p[t],r=p[t+1];if(!n||!r||e>n.x||e<r.x)continue;let i=(n.x-e)/(n.x-r.x);return n.top+(r.top-n.top)*i}return n.top},h=n*.22,g=n*.36,_=[[r*.144,.3,n*.03],[r*.211,.58,n*.08],[r*.3,.84,n*.14],[r*.383,.98,n*.17],[r*.467,1,n*.19],[r*.544,.86,n*.215],[r*.628,.68,n*.235],[r*.706,.55,n*.25]];for(let e=0;e<_.length-1;e++){let t=_[e],n=_[e+1];!t||!n||a.push({profile:u(h*t[1],g*t[1]),height:n[0]-t[0],taper:n[1]/t[1],shearX:n[2]-t[2],x:t[2],y:t[0],z:0})}let v=r*.783,y=r*.689;i.push({profile:Q(n*.3,n*.54,n*.07),height:r*.139,taper:.74,x:n*.21,y:r*.811,z:0}),i.push({profile:Q(n*.24,n*.46,n*.06),height:r*.1,taper:.88,shearX:-n*.05,x:n*.3,y:v,z:0}),i.push({profile:l(r*.018,n*.05),height:n*.16,taper:.25,x:n*.3,y:r*.933,z:0,...c(Math.PI,.55)}),i.push({profile:Q(n*.19,n*.5,n*.05),height:r*.072,taper:.82,x:n*.27,y:r*.855,z:0});let b=n*.25,x=r*.878,S=(e,t)=>({x:b,y:x,z:e*t,...c(Math.PI/2*e)});for(let e of[1,-1])i.push({profile:Z(8,n*.105),height:n*.045,taper:.86,...S(e,n*.175)}),o.push({profile:Z(8,n*.05),height:n*.075,taper:1.7,...S(e,n*.2)}),o.push({profile:Z(8,n*.085),height:n*.075,taper:.53,...S(e,n*.275)}),i.push({profile:l(n*.013,n*.058),height:n*.022,...S(e,n*.338)});i.push({profile:Q(n*.2,n*.44,n*.05),height:r*.05,taper:.9,x:n*.16,y:r*.639,z:0});let C=[[n*.33,n*.06,r*.069],[n*.3,n*.15,r*.06],[n*.24,n*.21,r*.044]],w=[[n*.3,n*.1,r*.044],[n*.24,n*.19,r*.033]];for(let e of[1,-1]){for(let[t,r,i]of C)a.push({profile:Z(3,n*.012),height:i,taper:2.8,pivot:`top`,x:t,y:v,z:e*r});for(let[t,i,o]of w)a.push({profile:Z(3,n*.03,Math.PI),height:o,taper:.3,x:t,y:y-r*.006,z:e*i})}let T=n*.03,E=.16,D=[{x:n*.15,sink:r*.06,rootZ:n*.19,length:n*.26,elevation:-.16,chord:n*.15,sweep:n*.06,chevron:0},{x:-n*.03,sink:r*.028,rootZ:n*.07,length:n*.376,reaches:r,elevation:1.25,chord:n*.15,sweep:n*.07,chevron:.5},{x:-n*.17,sink:r*.024,rootZ:n*.08,length:n*.37,elevation:1.18,chord:n*.15,sweep:n*.07,chevron:.52},{x:-n*.31,sink:r*.024,rootZ:n*.084,length:n*.35,elevation:1.12,chord:n*.14,sweep:n*.07,chevron:.52},{x:-n*.44,sink:r*.024,rootZ:n*.084,length:n*.35,elevation:1.05,chord:n*.13,sweep:n*.06,chevron:.5},{x:-n*.55,sink:r*.024,rootZ:n*.076,length:n*.32,elevation:.98,chord:n*.11,sweep:n*.06,chevron:.48}];for(let e of D){let t=m(e.x)-e.sink,n=e.reaches===void 0?e.length:(e.reaches-T*E*Math.cos(e.elevation)-t)/Math.sin(e.elevation);for(let r of[1,-1])i.push({profile:l(T,e.chord),height:n,taper:E,shearZ:r*e.sweep,x:e.x,y:t,z:r*e.rootZ,...c(Math.PI/2*r,e.elevation)});e.chevron!==0&&a.push({profile:Nc(e.chord*1.7,e.rootZ*1.5),height:n*e.chevron,taper:.14,shearX:-e.sweep,x:e.x,y:t-r*.004,z:0})}let O=[{x:-n*.49,y:r*.283,z:0},{x:-n*.64,y:r*.211,z:0},{x:-n*.75,y:r*.158,z:0},{x:-n*.81,y:r*.131,z:0}],ee=[n*.19,n*.13,n*.07,n*.02];for(let e=0;e<O.length-1;e++){let t=O[e],r=O[e+1];!t||!r||i.push(d(t,r,ee[e]??n*.1,ee[e+1]??n*.05,6,e===O.length-2?1:1.12))}let k=[[-n*.65,r*.217,n*.05,n*.19],[-n*.74,r*.161,n*.036,n*.13]];for(let[e,t,o,s]of k){for(let r of[1,-1])i.push({profile:l(n*.018,n*.075),height:s,taper:.18,shearZ:r*n*.04,x:e,y:t,z:r*o,...c(Math.PI/2*r,.9)});a.push({profile:Nc(n*.16,o*2.3),height:s*.5,taper:.22,shearX:-n*.03,x:e,y:t+r*.004,z:0})}let A={x:-n*.05,y:r*.433,z:n*.31},j={x:-n*.01,y:r*.244,z:n*.28},M={x:-n*.07,y:r*.111,z:n*.264};for(let e of[1,-1]){i.push(d(f(A,e),f(j,e),n*.144,n*.124,7,1.1)),i.push(d(f(j,e),f(M,e),n*.124,n*.11,7,1.1)),i.push({profile:Q(n*.35,n*.23,n*.05),height:r*.1,taper:.86,x:-n*.07,y:0,z:e*M.z});for(let t of[-1,0,1]){let i={x:n*.08,y:r*.038,z:e*(M.z+t*n*.085)},o={x:n*.28,y:r*.013,z:e*(M.z+t*n*.125)};a.push(d(i,o,n*.036,n*.012,4))}i.push({profile:Z(8,n*.062),height:n*.022,taper:.8,x:n*.03,y:r*.333,z:e*n*.3,...c(e*1)})}let N={x:-n*.15,y:r*.594,z:n*.37},te={x:n*.05,y:r*.433,z:n*.47},P={x:n*.23,y:r*.283,z:n*.52},ne=[[{x:n*.24,y:r*.267,z:n*.46},{x:n*.39,y:r*.172,z:n*.44}],[{x:n*.24,y:r*.267,z:n*.52},{x:n*.37,y:r*.161,z:n*.54}],[{x:n*.23,y:r*.267,z:n*.58},{x:n*.32,y:r*.167,z:n*.63}]];for(let e of[1,-1]){i.push(d(f(N,e),f(te,e),n*.13,n*.115,7,1.1)),i.push(d(f(te,e),f(P,e),n*.115,n*.095,7,1.08)),i.push({profile:Q(n*.15,n*.19,n*.04),height:r*.045,taper:.9,pivot:`top`,x:n*.24,y:r*.29,z:e*P.z});for(let[t,r]of ne)a.push(d(f(t,e),f(r,e),n*.038,n*.012,4))}let re=n*.86,ie=e=>{let t=Math.hypot(e.x,e.z);if(t<=re)return e;let n=re/t;return{x:e.x*n,y:e.y,z:e.z*n}},F=[{x:n*.31,y:r*.761,z:n*.04},{x:n*.52,y:r*.765,z:n*.1},{x:n*.68,y:r*.717,z:n*.22},{x:n*.75,y:r*.622,z:n*.35},{x:n*.72,y:r*.539,z:n*.42},{x:n*.61,y:r*.478,z:n*.44},{x:n*.49,y:r*.45,z:n*.34}].map(ie),I=[n*.065,n*.062,n*.058,n*.055,n*.05,n*.045,n*.034];for(let e=0;e<F.length-1;e++){let t=F[e],r=F[e+1];!t||!r||a.push(d(t,r,I[e]??n*.04,I[e+1]??n*.03,5,e===F.length-2?1:1.12))}let L=F[4]??{x:0,y:r*.5,z:0},ae=n*.105;for(let e=0;e<7;e++){let t=e/7*Math.PI*2,r=Math.sin(e*1.7)*.55,i=ie({x:L.x+Math.cos(t)*Math.cos(r)*ae,y:L.y+Math.sin(r)*ae,z:L.z+Math.sin(t)*Math.cos(r)*ae});a.push(d(L,i,n*.042,n*.008,4))}return{parts:i,secondary:a,accents:o}}function zc(e,t){let n=e,r=t,i=[],a=[],o=[],s=(e,t,n=9)=>Z(n,1).map(([n,r])=>[n*e,r*t]),c=-Math.PI/2,l=Math.PI/10,u=e=>e*Math.cos(l),d=n*.39,f=d*.86,p=r*.145;for(let e=0;e<6;e++){let t=(e+.5)/6*Math.PI*2,n=Math.cos(t),r=Math.sin(t);a.push({profile:Z(7,d*.44),height:p*(e%2?.84:1),taper:.66,x:n*f,y:0,z:r*f,rotY:-t}),a.push({profile:Z(6,d*.28),height:p*.62,taper:.7,x:n*(f+d*.24),y:0,z:r*(f+d*.24),rotY:-t})}let m=r*.52,h=d*.5,g=[[r*.045,d*.68,!0],[r*.095,d*.85,!0],[r*.145,d*.94,!0],[r*.2,d*.99,!0],[r*.255,d,!0],[r*.315,d*.97,!0],[r*.365,d*.9,!1],[r*.415,d*.8,!1],[r*.455,d*.68,!1],[r*.49,d*.58,!1]];g.forEach(([e,t,n],r)=>{let o=g[r+1],s=o?o[0]:m,c=o?o[1]:h;(n?a:i).push({profile:Z(10,t,l),height:(s-e)*1.3,taper:c/t,x:0,y:e,z:0})}),i.push({profile:s(r*.105,d*.12),height:d*.2,x:u(d*.95),y:r*.2,z:0,roll:c});for(let e of[-1,1])i.push({profile:s(r*.128,d*.11),height:d*.2,x:u(d*.93),y:r*.232,z:e*d*.3,roll:c,tilt:-e*.52});for(let[e,t,n]of[[r*.25,d*.46,d*.12],[r*.25,-d*.46,d*.12],[r*.15,d*.32,d*.088],[r*.15,-d*.32,d*.088]])i.push({profile:Z(6,n),height:d*.13,taper:.68,x:u(d*.95)-d*.04,y:e,z:t,roll:c});let _=u(d*.9);i.push({profile:s(r*.075,d*.62),height:d*.28,taper:.82,x:_,y:r*.43,z:0,roll:c});let v=_+d*.22,y=[[0,r*.447,d*.2,v],[-d*.38,r*.422,d*.16,v-d*.08],[d*.38,r*.422,d*.16,v-d*.08]];for(let[e,t,n,r]of y)i.push({profile:Z(8,n*1.45),height:d*.11,x:r,y:t,z:e,roll:c}),o.push({profile:Z(8,n),height:d*.17,taper:.5,x:r+d*.09,y:t,z:e,roll:c});for(let[e,t]of[[0,.115],[-d*.2,.085],[d*.2,.085],[-d*.58,.07],[d*.58,.07]])a.push({profile:Z(4,d*.115,Math.PI/4),height:r*t,taper:.1,shearX:-d*.11,x:_+d*.11,y:r*.41,z:e,roll:Math.PI});let b=r*.47;for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=d*(.25+e%3*.1);i.push({profile:Z(6,d*.165),height:r*(.2+e%4*.06),taper:.66,shearX:Math.cos(t)*d*.08,shearZ:Math.sin(t)*d*.08,x:Math.cos(t)*n,y:b,z:Math.sin(t)*n,rotY:-t})}[[r*.46,r*.72,d*.2,-d*.05,d*.05],[r*.7,r*.89,d*.165,0,d*.12],[r*.88,r,d*.13,d*.11,d*.18]].forEach(([e,t,n,r,a])=>{i.push({profile:Z(6,n),height:t-e,taper:.86,shearX:a,x:r,y:e,z:0})});let x=[[d*.55,r*.395],[d*.95,r*.46],[n*.57,r*.475],[n*.72,r*.44],[n*.84,r*.35],[n*.9,r*.2]],S=[d*.34,d*.31,d*.27,d*.21,d*.125],C=[.7,1.31,2.06,2.79];for(let e=0;e<C.length*2;e++){let t=e>=C.length,n=(C[e%C.length]??0)*(t?-1:1),r=Math.cos(n),o=Math.sin(n);for(let e=0;e<x.length-1;e++){let t=x[e],s=x[e+1];if(!t||!s)continue;let l=s[0]-t[0],u=s[1]-t[1],f=S[e]??d*.15,p=S[e+1]??f*.7;(e%2?a:i).push({profile:Z(7,f),height:Math.hypot(l,u)*1.12,taper:p/f,x:r*t[0],y:t[1],z:o*t[0],roll:c+Math.atan2(u,l),rotY:-n})}for(let e of[2,3,4]){let t=x[e];if(!t)continue;let s=S[e]??d*.15;(e%2?i:a).push({profile:Z(5,s*.6),height:s*.8,taper:.5,x:r*t[0],y:t[1]-s*.75,z:o*t[0],roll:Math.PI,rotY:-n})}}for(let e of[-d*.28,0,d*.28])a.push({profile:Z(4,d*.092,Math.PI/4),height:r*.1,taper:.14,x:u(d*.9),y:r*.135,z:e,roll:Math.PI});return{parts:i,secondary:a,accents:o}}function Bc(e,t){let n=e,r=t,i=[],a=[],o=(e,t,n=10)=>Z(n,1).map(([n,r])=>[n*e,r*t]),s=(e,t,n=8)=>Z(n,1).map(([n,r])=>[n*e,r*t]),c=-Math.PI/2,l=(e,t)=>({roll:c+t,rotY:-e}),u=-n*.35,d=n*.52,f=n*.475,p=r*.46,m=n*.105,h=.76,g=r-m*h,_=1.25,v=[[0,.7],[.1,.9],[.22,1],[.4,.99],[.58,.9],[.74,.72],[.88,.46]],y=g-p,b=e=>{let t=v[0]?.[1]??1;for(let[n,r]of v)e>=n&&(t=r);return t};v.forEach(([e,t],n)=>{let r=v[n+1];i.push({profile:o(d*t,f*t),height:((r?r[0]:1)-e)*y*(r?_:1),taper:(r?r[1]:.16)/t,x:u,y:p+e*y,z:0})});let x=Math.PI*(3-Math.sqrt(5));for(let e=0;e<46;e++){let t=(e+.5)/46,n=.08+t*.84+Math.sin(e*2.9)*.035,r=Math.PI/2*t**1.5,a=e*x,o=Math.cos(a),s=Math.sin(a),c=b(n),g=m*(1.7-.5*t)*(e%3==0?.86:1),_=m*h;i.push({profile:Z(5,g),height:m,taper:.8,x:u+d*c*o-Math.cos(r)*o*_,y:p+n*y-Math.sin(r)*_,z:f*c*s-Math.cos(r)*s*_,...l(a,r)})}i.push({profile:Z(6,m*1.25),height:m,taper:.55,x:u,y:r-m,z:0});let S=r*.355,C=r*.5,w=.92,T=n*.05;for(let e=0;e<16;e++){let t=(e+.5)/16*Math.PI*2;a.push({profile:Nc(n*.075,2*Math.PI*f*w/16*1.1),height:C-S,taper:.92,shearX:T,x:u+d*(w+e%2*.04)*Math.cos(t),y:S,z:f*(w+e%2*.04)*Math.sin(t),rotY:-t})}let E=-n*.3,D=r*.29,O=r*.47,ee=[[0,.8],[.45,1]];ee.forEach(([e,t],r)=>{let i=ee[r+1],s=O-D;a.push({profile:o(n*.37*t,n*.34*t,9),height:((i?i[0]:1)-e)*s*_,taper:(i?i[1]:.9)/t,x:E,y:D+e*s,z:0})});let k=r*.115,A=n*.165,j=r*.345,M=.45,N=n*.235,te=n*.345,P=n*.075;for(let e of[1,-1])for(let t of[-1,1]){let r=e>0?n*.19:-n*.48,o=r+e*P,s=t*N,c=t*te,l=o+(r-o)*M,u=c+(s-c)*M,d=k+(j-k)*M;i.push({profile:Z(7,A),height:k,taper:.88,x:o,y:0,z:c,rotY:-Math.atan2(c,o)}),a.push({profile:Z(6,n*.095),height:d-k*.75,taper:1.14,shearX:l-o,shearZ:u-c,x:o,y:k*.75,z:c}),a.push({profile:Z(6,n*.115),height:j-d,taper:1.12,shearX:r-l,shearZ:s-u,x:l,y:d,z:u})}a.push({profile:o(n*.23,n*.29,9),height:r*.3,taper:.86,x:n*.19,y:r*.29,z:0});let ne=n*.5,re=n*.22,ie=n*.235,F=r*.265,I=r*.66,L=-.04,ae=[[0,.58,-.012],[.2,.9,0],[.44,1,.012],[.68,.96,.004],[.86,.86,-.022]],oe=I-F;ae.forEach(([e,t,r],i)=>{let s=ae[i+1];a.push({profile:o(re*t,ie*t),height:((s?s[0]:1)-e)*oe*(s?_:1),taper:(s?s[1]:.72)/t,shearX:((s?s[2]:L)-r)*n,x:ne+r*n,y:F+e*oe,z:0})});let R=ne+L*n,se=n*.21,ce=r*.028;for(let e=0;e<7;e++){let t=(e+.5)/7*Math.PI*2,n=Math.abs(Math.abs(Math.sin(t))-1)<.2&&Math.cos(t)<.4,r=n?3.4:Math.cos(t)<-.5?1.5:1;a.push({profile:Z(5,se*(n?.5:.36)),height:ce*r,taper:r>1?.32:.7,shearX:se*.1*r-(n?se*.5:0),x:R+se*Math.cos(t),y:I,z:se*Math.sin(t),rotY:-t})}a.push({profile:o(se*.72,se*.72,8),height:r*.014,x:R,y:I-r*.005,z:0});for(let e=0;e<4;e++){let t=(e+.5)/4*Math.PI*2;a.push({profile:Z(4,se*.16,Math.PI/4),height:ce,taper:.22,x:R+se*.5*Math.cos(t),y:I,z:se*.5*Math.sin(t)})}let le=ne+re*.92,z=r*.46;a.push({profile:s(r*.062,ie*.68),height:n*.055,taper:.86,x:le,y:z,z:0,roll:c});let ue=z-r*.016;a.push({profile:s(r*.024,n*.058),height:n*.045,taper:.8,x:le+n*.04,y:ue,z:0,roll:c});let de=n*.115;for(let e=0;e<5;e++){let t=Math.PI*(e+.4)/5.8;i.push({profile:Z(6,n*.022),height:n*.032,x:le+n*.035,y:ue+Math.sin(t)*de*.62,z:Math.cos(t)*de,roll:c})}let fe=n*.3,pe=n*.15,B=n*.36,me=r*.43,he=r*.18;for(let e=0;e<11;e++){let t=(e+.5)/11*Math.PI*2,n=B-pe;i.push({profile:Nc(r*.03,2*Math.PI*B/11*.9),height:Math.hypot(n,he),taper:1.24,x:fe+pe*Math.cos(t),y:me,z:pe*Math.sin(t),...l(t,-Math.atan2(he,n))})}let ge=n*.88,_e=n*.2125,ve=r*.5,ye=[.79,1.16,1.53,1.98],be=[[0,-.06],[.3,-.14],[.58,-.05],[.82,.36],[1,1]],xe=[.075,.066,.052,.036,.018],Se=e=>{let t=Math.cos(e);return-fe*t+Math.sqrt(fe*fe*(t*t-1)+ge*ge)};for(let e=0;e<ye.length*2;e++){let t=e%ye.length,a=e>=ye.length,o=(ye[t]??0)*(a?-1:1),s=Se(o*1.22),c=r*(.2+.14*(t/(ye.length-1))),u=e=>o*(1+.22*e),d=e=>Math.min(_e+e*(s-_e),Se(u(e))),f=e=>ve+e*(c-ve),p=(e,t)=>{let n=u(e),r=d(e);return{x:fe+Math.cos(n)*r,y:f(t),z:Math.sin(n)*r}};for(let e=0;e<be.length-1;e++){let t=be[e],r=be[e+1];if(!t||!r)continue;let a=p(t[0],t[1]),o=p(r[0],r[1]),s=Math.hypot(o.x-a.x,o.z-a.z),c=o.y-a.y,u=(xe[e]??.02)*n,d=(xe[e+1]??.01)*n;i.push({profile:Z(5,u),height:Math.hypot(s,c)*(e===be.length-2?1:1.1),taper:d/u,x:a.x,y:a.y,z:a.z,...l(Math.atan2(o.z-a.z,o.x-a.x),Math.atan2(c,s))})}}return{parts:i,secondary:a}}function Vc(e,t){let n=e,r=t,i=[],a=[],o=(e,t,n=8)=>Z(n,1).map(([n,r])=>[n*e,r*t]),s=-Math.PI/2,c=1.16,l=(e,t,n,r,i=6)=>{for(let a=0;a<t.length-1;a++){let l=t[a],u=t[a+1];if(!l||!u)continue;let d=u[0]-l[0],f=u[1]-l[1],p=u[2]-l[2],m=Math.hypot(d,p),h=n[a]??1,g=n[a+1]??h*.4;e.push({profile:o(h*r,h,i),height:Math.hypot(m,f)*c,taper:g/h,x:l[0],y:l[1],z:l[2],roll:s+Math.atan2(f,m),rotY:-Math.atan2(p,d)})}},u=[[-n*.7,r*.46,r*.15,n*.24],[-n*.42,r*.55,r*.24,n*.36],[-n*.1,r*.62,r*.28,n*.43],[n*.22,r*.6,r*.26,n*.44],[n*.5,r*.52,r*.22,n*.45]],d=n*.18,f=.84;for(let e=0;e<u.length-1;e++){let t=u[e],n=u[e+1];!t||!n||i.push({profile:o(t[2]*f,t[3]*f,6),height:(n[0]-t[0])*c,taper:n[2]/t[2],x:t[0],y:t[1],z:0,roll:s})}for(let e of[-1,1])for(let t=0;t<6;t++){let r=t/5,o=r*1.9,s=u.length-1,c=u.map(([t,n,i,a],c)=>[t+(c===s?r*d:0),n+i*Math.cos(o),e*a*Math.sin(o)]),f=n*(.17-.025*r);l(t%2==0?a:i,c,[f*.72,f*.92,f,f*.96,f*.58],.9,6)}i.push({profile:o(r*.125,n*.3),height:n*.3,x:n*.3,y:r*.71,z:0,roll:s});let p=n*.54,m=r*.855,h=n*.32;a.push({profile:o(r*.042,h),height:n*.3,taper:.78,shearX:r*.032,x:p,y:m,z:0,roll:s});for(let e=0;e<6;e++){let t=e/5*2-1;a.push({profile:Z(4,n*.036,Math.PI/4),height:r*.045,taper:.16,shearX:-n*.024,x:p+n*.26-Math.abs(t)*n*.038,y:m-r*.016,z:t*h*.78,roll:Math.PI,rotY:t*.3})}for(let e=0;e<6;e++){let t=e/5;i.push({profile:Z(5,n*(.044-.014*t)),height:r*(.038-.014*t),taper:.2,shearX:-n*.022,x:n*(.42-.56*t),y:r*(.89+.024*t),z:0})}for(let e of[-1,1]){let t=e*n*.1;a.push({profile:Z(6,n*.085),height:r*.075,taper:.74,shearX:-n*.038,shearZ:e*n*.024,x:n*.42,y:r*.85,z:t}),i.push({profile:Z(6,n*.063),height:r*.075,taper:.14,shearX:-n*.042,shearZ:e*n*.03,x:n*.382,y:r*.925,z:t*1.24})}let g=[[n*.56,n*.28,r*.8,r*.045,n*.28,6,-1],[n*.56,n*.26,r*.705,r*.04,n*.265,5,-1],[n*.54,n*.26,r*.635,r*.05,n*.25,4,1]];for(let[e,t,c,l,u,d,f]of g){i.push({profile:o(l,u,6),height:t,x:e,y:c,z:0,roll:s});for(let i=0;i<d;i++){let o=i/(d-1)*2-1;a.push({profile:Z(4,n*.032,Math.PI/4),height:r*.036,taper:.14,x:e+t*.82,y:c+f*l*.5,z:o*u*.76,roll:f<0?Math.PI:0})}}for(let e of[-1,1])for(let t=0;t<4;t++){let i=t/3,o=n*(.8+.04*i),s=r*(.63-.13*i),c=e*n*(.26-.05*i),u=[[n*.64,r*(.78-.11*i),e*n*(.23-.03*i)],[o,s,c],[n*(.86-.12*i),r*(.41-.11*i),e*n*(.28-.09*i)]],d=n*(.06-.012*i);l(a,u,[d,d*.82,d*.1],.5,5),a.push({profile:Z(5,d*.5),height:d*.85,taper:.5,x:o,y:s-d*.6,z:c,roll:Math.PI})}l(i,[[n*.66,r*.675,0],[n*.8,r*.668,0],[n*.9,r*.648,0],[n*.95,r*.612,0]],[n*.062,n*.056,n*.05,n*.044],1,6),i.push({profile:Z(6,n*.054),height:n*.07,taper:.72,x:n*.94,y:r*.613,z:0,roll:s-.4}),a.push({profile:Z(4,n*.03,Math.PI/4),height:n*.07,taper:.12,x:n*.965,y:r*.602,z:0,roll:s-.5});for(let[e,t]of[[n*.74,r*.681],[n*.85,r*.664]])i.push({profile:Z(4,n*.019),height:n*.058,taper:.18,shearX:n*.024,x:e,y:t,z:0});let _=[[n*.44,n*.42,r*.52,n*.3,n*.3,n*.19,4],[-n*.6,n*.32,r*.48,n*.28,-n*.16,n*.13,3]];for(let[e,t,n,r,c,l,u]of _)for(let d of[-1,1]){let f=d*t;i.push({profile:Z(8,r),height:n,taper:.4,shearX:-c,shearZ:-d*l,x:e,y:0,z:f}),a.push({profile:o(r*.36,r*.3,6),height:n*.6,taper:.46,shearX:-c*.6,x:e+r*.1,y:n*.05,z:f+d*r*.6}),a.push({profile:Z(6,r*.82),height:r*.3,taper:1.06,x:e,y:0,z:f});for(let t=0;t<u;t++){let a=(t+.5)/u,o=d*(.5+a*2.4),p=r*(1-a*.5);i.push({profile:Z(5,r*(.32-a*.11)),height:r*(.55-a*.18),taper:.24,x:e-c*a+Math.cos(o)*p*.82,y:n*(.18+a*.5),z:f-d*l*a+Math.sin(o)*p*.82,roll:s+1.1,rotY:-o})}let p=-Math.sign(e);for(let t=0;t<3;t++){let n=.4+t*.5;i.push({profile:Z(4,r*.1),height:r*.75,taper:.3,x:e+p*Math.cos(n)*r*.6,y:r*.34,z:f+d*Math.sin(n)*r*.42,roll:s-.16,rotY:-p*d*.55})}}i.push({profile:o(r*.13,n*.22,6),height:n*.12,taper:.66,x:-n*.7,y:r*.45,z:0,roll:s+Math.PI});for(let e of[-1,.4,-.4,1])i.push({profile:Z(5,n*.045),height:n*.13,taper:.24,x:-n*.74,y:r*(.4+Math.abs(e)*.06),z:e*n*.14,roll:s+Math.PI+.3,rotY:e*.5});return{parts:i,secondary:a,accents:[]}}function Hc(e,t,n){let r=Math.cos(n),i=Math.sin(n);return[e*r-t*i,e*i+t*r]}function Uc(e,t){let n=e,r=t,i=[],a=[],o=n*.05,s=r*.28,c=n*.22,l=n*.56;for(let e of[55,125,-125,-55]){let t=e*Math.PI/180,i=Math.cos(t)*l,u=Math.sin(t)*l,d=Math.cos(t)*c,f=Math.sin(t)*c,p=-t,[m,h]=Hc(d-i,f-u,p);a.push({profile:Q(n*.34,n*.38,o*1.4),height:s,taper:.8,shearX:m,shearZ:h,x:i,y:0,z:u,rotY:p}),a.push({profile:Mc(n*.2),height:r*.028,x:i,y:0,z:u,rotY:p}),a.push({profile:Q(n*.28,n*.32,o),height:r*.055,x:i*.72+d*.28,y:s*.44,z:u*.72+f*.28,rotY:p})}a.push({profile:Q(n*.44,n*.44,o),height:r*.1,taper:1.08,x:0,y:r*.24,z:0}),a.push({profile:Mc(n*.2),height:r*.07,x:0,y:r*.33,z:0}),i.push({profile:Mc(n*.24,Math.PI/6),height:r*.09,taper:1.75,x:0,y:r*.37,z:0}),i.push({profile:Mc(n*.42,Math.PI/6),height:r*.09,taper:.99,x:n*.01,y:r*.46,z:0}),i.push({profile:Mc(n*.41),height:r*.045,taper:.86,x:0,y:r*.55,z:0}),a.push({profile:Mc(n*.19),height:n*.06,x:n*.35,y:r*.495,z:0,roll:-Math.PI/2});for(let e of[-1,1])i.push({profile:Mc(n*.16),height:n*.05,x:n*.02,y:r*.5,z:e*n*.37,rotY:e*-Math.PI/2,roll:-Math.PI/2});i.push({profile:Q(n*.36,n*.66,o),height:r*.06,taper:.94,x:-n*.04,y:r*.545,z:0});for(let e of[-1,1]){let t=e*n*.24,s=e*n*.012;[[r*.575,r*.16,n*.26,.95],[r*.75,r*.15,n*.24,.94],[r*.91,r*.09,n*.205,.88]].forEach(([e,r,a,c],l)=>{i.push({profile:Q(a,a*1.1,o),height:r,taper:c,shearX:-n*.012,shearZ:s,x:-n*.02-l*n*.012,y:e,z:t+l*s*1.6})});for(let[e,a]of[[r*.725,n*.28],[r*.888,n*.26]])i.push({profile:Q(a,a*1.12,o),height:r*.03,x:-n*.03,y:e,z:t+s*1.2});a.push({profile:Nc(n*.19,n*.035),height:r*.15,x:-n*.02,y:r*.59,z:t-e*n*.13})}for(let e of[-1,1])i.push({profile:Q(n*.19,n*.38,o),height:n*.36,taper:.88,shearX:-n*.18,x:n*.05,y:r*.47,z:e*n*.3,rotY:e*-Math.PI/2,roll:-Math.PI/2}),i.push({profile:Mc(n*.17),height:r*.07,x:n*.07,y:r*.51,z:e*n*.68}),i.push({profile:Q(n*.2,n*.22,o*1.2),height:r*.29,taper:.95,shearX:-n*.03,shearZ:e*n*.16,x:n*.1,y:r*.24,z:e*n*.52}),i.push({profile:Q(n*.19,n*.18,o),height:r*.06,taper:.86,x:n*.1,y:r*.21,z:e*n*.52});for(let e of[-1,1]){let t=n*.58,a=e*n*.26;i.push({profile:Q(n*.17,n*.15,o),height:r*.26,taper:1.1,shearX:-n*.34,shearZ:e*n*.02,x:t,y:r*.11,z:a}),i.push({profile:Q(n*.18,n*.17,o),height:r*.07,x:t+n*.03,y:r*.085,z:a});for(let e of[-1,1])i.push({profile:Nc(n*.075,n*.07),height:n*.2,taper:.35,x:t+n*.04,y:r*.12+e*r*.026,z:a,roll:-Math.PI/2})}let u=[];for(let e of[-1,1])a.push({profile:Nc(n*.12,n*.03),height:r*.095,x:n*.23,y:r*.45,z:e*n*.4}),u.push({profile:Nc(n*.065,n*.045),height:r*.07,x:n*.23,y:r*.463,z:e*n*.403});return{parts:i,secondary:a,accents:u}}function Wc(e,t){let n=e,r=t,i=[],a=[],o=[],s=-Math.PI/2,c=(e,t=0)=>({roll:s+t,rotY:-e}),l=(e,t,n=0)=>n>0?Q(e*2,t*2,n):Nc(e*2,t*2),u=n*.25,d=r*.392,f=n*.64,p=r*.455,m=n*.885,h=r*.034,g=.38,_=1.06,v=f-u,y=p-d,b=Math.hypot(v,y),x=Math.atan2(y,v),S=m-f,C=h-p,w=Math.hypot(S,C),T=Math.atan2(C,S);for(let e of[1,-1])for(let t of[1,-1]){let s=Math.atan2(t,e),v=Math.cos(s),y=Math.sin(s),E=(e,t)=>({x:v*e,y:t,z:y*e}),D=e=>E(f+S*e,p+C*e),O=E(u,d),ee=E(f,p),k=E(m,h),A=D(g);a.push({profile:l(r*.028,n*.05,n*.022),height:b*_,taper:.92,...O,...c(s,x)}),o.push({profile:l(r*.031,n*.056,n*.024),height:r*.075,taper:.94,...D(-.03),...c(s,T)}),a.push({profile:l(r*.024,n*.044,n*.02),height:w*g*_,taper:.95,...ee,...c(s,T)}),i.push({profile:l(r*.0225,n*.04,n*.018),height:w*.62,taper:.9,...A,...c(s,T)}),o.push({profile:Q(n*.125,n*.095,n*.026),height:h,taper:1.06,x:k.x,y:0,z:k.z,rotY:-s})}let E=r*.152,D=r*.428,O=n*.3;o.push({profile:Q(O*2,O*2,O*.62),height:D-E,x:0,y:E,z:0});let ee=(E+D)/2;for(let e=0;e<4;e++){let t=e*Math.PI/2,s=Math.cos(t),l=Math.sin(t),u=e=>({x:s*e,y:ee,z:l*e,...c(t)});i.push({profile:Z(8,n*.29,Math.PI/8),height:n*.075,...u(O-n*.02)}),a.push({profile:Z(8,n*.245,Math.PI/8),height:n*.055,...u(O+n*.02)}),o.push({profile:Nc(r*.036,n*.024),height:n*.03,...u(O+n*.075)})}i.push({profile:Z(8,n*.315,Math.PI/8),height:r*.042,taper:.88,x:0,y:D,z:0}),o.push({profile:Nc(n*.06,n*.055),height:r*.074,x:n*.09,y:r*.088,z:0});let k=r*.462,A=r*.695,j=r*.895,M=n*.312,N=n*.362,te=n*.036,P=.965;a.push({profile:Q(M,N,te),height:A-k,x:0,y:k,z:0}),a.push({profile:Q(M*P,N*P,te*P),height:j-A,taper:P,x:0,y:A,z:0});let ne=k+r*.046;i.push({profile:Q(M*1.075,N*1.075,te),height:ne-k,taper:.965,x:0,y:k,z:0});let re=Math.PI/4,ie=e=>({x:M*e/2-te*e/2,z:-(N*e/2-te*e/2)}),F=ie(1),I=ie(P);i.push({profile:Nc(n*.03,n*.085),height:A-ne,x:F.x,y:ne,z:F.z,rotY:re}),i.push({profile:Nc(n*.03,n*.082),height:j-A-r*.008,shearX:-I.x*.03500000000000003,x:I.x,y:A,z:I.z,rotY:re}),a.push({profile:Nc(n*.022,n*.022),height:r-j,taper:.85,x:n*.028,y:j,z:0});let L=N*.5,ae=L+n*.065,oe=r*.03,R=n*.085;for(let[e,t]of[[r*.812,n*.505],[r*.672,n*.425]]){o.push({profile:Z(10,n*.112),height:n*.062,x:n*.03,y:e,z:L-n*.02,...c(Math.PI/2)}),a.push({profile:Z(10,n*.135),height:n*.086,taper:.94,x:n*.03,y:e,z:L+n*.03,...c(Math.PI/2)});let s=n*.075;for(let r of[oe,-oe])a.push({profile:Q(n*.042,n*.042,n*.012),height:t,x:s,y:e+r,z:ae,...c(0)}),i.push({profile:Q(n*.044,n*.044,n*.013),height:R,x:s+t-R,y:e+r,z:ae,...c(0)});o.push({profile:Nc(n*.018,n*.058),height:t*.78,x:s+n*.02,y:e-r*.049,z:ae,...c(0)})}return{parts:i,secondary:a,accents:o}}function Gc(e,t){let n=e,r=t,i=[],a=[],o=[],s=-Math.PI/2,c=(e,t=0)=>({roll:s+t,rotY:-e}),l=(e,t,n=0)=>n>0?Q(e*2,t*2,n):Nc(e*2,t*2),u=(e,t,n)=>({x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n}),d=(e,t,n,r=1,i=1)=>{let a=t.x-e.x,o=t.y-e.y,s=t.z-e.z,l=Math.hypot(a,s);return{profile:n,height:Math.hypot(l,o)*i,taper:r,x:e.x,y:e.y,z:e.z,...c(Math.atan2(s,a),Math.atan2(o,l))}},f=(e,t,n,r)=>({profile:Z(8,n),height:r,pivot:`centre`,x:e.x,y:e.y,z:e.z,...c(t)}),p=-n*.16,m=n*1.42,h=n*1.28,g=n*.12,_=n*.36,v=r*.465,y=r*.561,b=r*.759,x=r*.905,S=r*.972,C=.975,w=.955,T=n*.03,E=p+T,D=e=>{let t=m*e/2,n=h*e/2,r=g*e,i=_*e;return[[t,n-r],[t-r,n],[-t+i,n],[-t,n-i],[-t,-(n-i)],[-t+i,-n],[t-r,-n],[t,-(n-r)]]},O=(e,t,n,r,i=0)=>({profile:D(n),height:t-e,taper:r/n,shearX:i,x:p,y:e,z:0});i.push(O(v,y,.86,1)),a.push(O(y,b,1,.995)),a.push(O(b,x,C,w)),a.push(O(x,S,w,.83,T)),a.push({profile:Q(m*.4,h*.56,g),height:r*.006,x:E-m*.19,y:S,z:0});let ee=r-S,k=[-n*.345,-n*.115,n*.115,n*.345];for(let e of k)i.push({profile:l(ee/2,n*.045,n*.012),height:m*.17,taper:.55,x:E+m*.22,y:S+ee/2,z:e,...c(0)}),o.push({profile:Nc(m*.1,n*.09),height:r*.006,x:E+m*.09,y:S,z:e}),o.push({profile:l(r*.012,n*.045),height:n*.035,x:p-m*C/2+n*.015,y:r*.855,z:e*.82,...c(Math.PI)});let A=m*.9482/2;for(let e of[-n*.21,0,n*.21])for(let t of[0,Math.PI])o.push({profile:Z(3,n*.05),height:n*.035,x:p+Math.cos(t)*(A-n*.01),y:v+(y-v)*.63,z:e,...c(t)});o.push({profile:D(.62),height:r*.028,x:p,y:v-r*.028,z:0});let j=p-n*.3;o.push({profile:Q(n*.34,n*.42,n*.06),height:r*.062,x:j,y:v-r*.1,z:0});for(let e=0;e<4;e++)o.push({profile:Nc(n*.3,n*.048),height:r*.072,x:j,y:v-r*.112,z:(e-1.5)*n*.15});let M=r*.462,N=r*.2,te=r*.046,P=n*.2,ne=n*.18,re=n*.24,ie=n*.68,F=1.05;for(let e of[1,-1])for(let t of[1,-1]){let s={x:p+e*P,y:M,z:t*ne},c={x:p+e*re,y:te,z:t*ie},m={...u(s,c,.92),y:N},h=Math.atan2(c.z-s.z,c.x-s.x);o.push(f(s,h,n*.115,n*.3));let g=u(s,m,.62);a.push(d(s,g,l(n*.17,n*.16,n*.038),1,F)),i.push(d(g,m,l(n*.165,n*.155,n*.037),.94,F));let _=u(s,m,.2);i.push({profile:Q(n*.26,n*.21,n*.05),height:r*.028,x:_.x,y:_.y+n*.05,z:_.z,rotY:-h}),o.push(f(m,h,n*.115,n*.26));let v=u(m,c,.44);a.push(d(m,v,l(n*.128,n*.118,n*.028),1,F)),i.push(d(v,c,l(n*.122,n*.112,n*.027),.92)),o.push({profile:Q(n*.25,n*.21,n*.05),height:te,taper:1.06,x:c.x,y:0,z:c.z,rotY:-h})}let I=n*.26,L=n*.075;for(let e of[1,-1]){let t={x:n*.46,y:r*.56,z:e*I},s={x:n*.62,y:r*.385,z:e*I*1.02},c={x:n*.7,y:r*.26,z:e*I*1.02},p={x:n*.855,y:r*.26,z:e*I*1.02};o.push(f(t,Math.PI/2,n*.075,n*.22));let m=u(t,s,.64);a.push(d(t,m,l(n*.078,n*.066,n*.018),1,F)),i.push(d(m,s,l(n*.074,n*.063,n*.017),.95,F)),o.push(f(s,Math.PI/2,n*.066,n*.18));let h=u(s,c,.6);a.push(d(s,h,l(n*.068,n*.058,n*.016),1,F)),i.push(d(h,c,l(n*.064,n*.054,n*.015),.92,F)),o.push(f(c,Math.PI/2,n*.056,n*.19));for(let e of[1,-1]){let t=e*L;a.push(d({...c,z:c.z+t},{...p,z:p.z+t},l(n*.034,n*.026),.85))}let g=u(c,p,.4);o.push(f(g,Math.PI/2,n*.026,L*2))}return{parts:i,secondary:a,accents:o}}function Kc(e,t){let n=e,r=t,i=[],a=[];for(let e of[-1,1])for(let t of[-1,1]){let a=e*n*.48,o=t*n*.44;i.push({profile:Q(n*.3,n*.24,n*.04),height:r*.35,taper:.7,shearX:-e*n*.22,shearZ:-t*n*.18,x:a,y:0,z:o,rotY:Math.atan2(t,e)}),i.push({profile:Q(n*.32,n*.24,n*.04),height:r*.035,x:a,y:0,z:o,rotY:Math.atan2(t,e)})}i.push({profile:Q(n*.82,n*.68,n*.08),height:r*.18,taper:1.08,x:0,y:r*.32,z:0}),i.push({profile:Q(n*.7,n*.56,n*.08),height:r*.2,taper:.9,x:n*.02,y:r*.5,z:0}),i.push({profile:Mc(n*.28,Math.PI/6),height:r*.11,taper:.82,x:n*.06,y:r*.7,z:0});for(let e of[-n*.26,n*.26])i.push({profile:Mc(n*.13),height:n*.32,x:n*.26,y:r*.8,z:e,roll:-Math.PI/2});return a.push({profile:Mc(n*.11),height:n*.035,x:n*.28,y:r*.58,z:0,roll:-Math.PI/2}),{parts:i,accents:a}}function qc(e,t,n){let r=Math.min(e,t)/2,i=[],a=[];i.push({profile:Mc(r*.98,Math.PI/6),height:1.2,x:0,y:0,z:0});let o=n?5.4:2.6,s=1.2+o;i.push({profile:Mc(r*.72),height:o,taper:.78,x:0,y:1.2,z:0}),i.push({profile:Mc(r*.58,Math.PI/6),height:1.2,taper:1.05,x:0,y:s,z:0}),[r*.5,r*.34,r*.18].forEach((e,t)=>{let n=t===0?12:t===1?6:1;for(let o=0;o<n;o++){let c=o/n*Math.PI*2+t%2*Math.PI/6,l={profile:Mc(t===2?r*.18:r*.115,Math.PI/6),height:.34,x:Math.cos(c)*e,y:s+1.12+t*.22,z:Math.sin(c)*e};t%2==0?a.push(l):i.push(l)}});for(let e of[Math.PI/6,Math.PI/2,Math.PI*5/6,Math.PI*7/6,Math.PI*3/2,Math.PI*11/6])i.push({profile:Q(r*.34,r*.44,r*.05),height:1.6,x:Math.cos(e)*r*.72,y:0,z:Math.sin(e)*r*.72,rotY:-e});return{parts:i,secondary:a}}function Jc(e,t,n){let r=Math.min(e,t)/2,i=[],a=[],o=n?4:8.2,s=n?4.2:6.4;i.push({profile:Q(e*.44,t*.52,r*.08),height:s,taper:.92,x:0,y:o,z:0}),i.push({profile:Mc(r*.32),height:1.2,x:e*.12,y:o+s,z:0}),i.push({profile:Q(e*.18,t*.28,r*.05),height:1.1,x:e*.28,y:o+s*.42,z:0});for(let n of[-1,1])for(let i of[-1,1]){let s=n*e*.38,c=i*t*.36,l=n*e*.18,u=i*t*.2,d=Math.atan2(i,n),f=l-s,p=u-c;a.push({profile:Q(r*.34,r*.22,r*.04),height:o,taper:.72,shearX:f*Math.cos(d)-p*Math.sin(d),shearZ:f*Math.sin(d)+p*Math.cos(d),x:s,y:0,z:c,rotY:d}),a.push({profile:Q(r*.46,r*.28,r*.04),height:.5,x:s,y:0,z:c,rotY:d})}if(n){let n=e*.22,r=.26,i=n/2+.2;for(let o=0;o<8;o++){let s=o/8*Math.PI*2,c=Math.cos(s)*e*.25,l=Math.sin(s)*t*.25,u=(e,t,n)=>Math.abs(t)<1e-6?1/0:(Math.sign(t)*n-e)/t,d=r/2,f=Math.min(u(c,Math.cos(s),e/2-d*Math.abs(Math.sin(s))),u(l,Math.sin(s),t/2-d*Math.abs(Math.cos(s))));a.push({profile:Nc(n,r),height:f,x:c,y:i,z:l,roll:-Math.PI/2,rotY:-s})}}else for(let n of[-r*.28,r*.28])a.push({profile:Q(e*.1,t*.18,r*.03),height:2.4,x:-e*.12,y:o+s,z:n});return{parts:i,secondary:a}}function Yc(e,t){let n=Math.min(e,t)/2,r=[],i=[],a=[];i.push({profile:Z(12,n),height:1,x:0,y:0,z:0}),i.push({profile:Z(12,n*.78),height:1,x:0,y:1,z:0}),i.push({profile:Z(12,n*.58),height:2.2,taper:.92,x:0,y:2,z:0}),a.push({profile:Z(16,n*.34),height:.16,x:0,y:4.24,z:0});for(let e=0;e<4;e++){let t=Math.PI/4+e*Math.PI/2,r=Math.cos(t)*n*.68,o=Math.sin(t)*n*.68;i.push({profile:Mc(n*.12),height:5.6,taper:.8,x:r,y:2.2,z:o}),i.push({profile:Z(7,n*.2),height:.6,x:r,y:7.8,z:o}),a.push({profile:Z(5,n*.16),height:1.2,taper:.1,x:r,y:8.4,z:o})}for(let e=0;e<8;e++){let t=e/8*Math.PI*2;i.push({profile:Q(n*.16,n*.3,n*.04),height:n*.42,x:Math.cos(t)*n*.46,y:3,z:Math.sin(t)*n*.46,roll:-Math.PI/2,rotY:-t})}return{parts:r,secondary:i,accents:a}}function Xc(e,t){let n=[],r=[],i=[],a=(e,t,n=10,r=0)=>Z(n,1,r).map(([n,r])=>[n*e,r*t]),o=(e,t,n=9)=>a(e,t,n),s=-Math.PI/2,c=Math.min(e,t)*.967,l=c/2,u=c*.913,d=c*.254/9,f=e=>l+(c*.207-l)*e/8,p=e=>{let t=0;for(let n=0;n<9;n++)e<=f(n)&&(t=(n+1)*d);return t};for(let e=0;e<9;e++){let t=f(e);r.push({profile:Nc(t*2,t*2),height:d*1.02,x:0,y:e*d,z:0})}r.push({profile:Nc(c*.098,c*.175),height:c*.105,x:l-c*.054,y:0,z:0}),r.push({profile:Nc(c*.108,c*.205),height:c*.024,x:l-c*.056,y:c*.105,z:0}),r.push({profile:Nc(c*.0048,c*.083),height:c*.083,x:l-c*.0024,y:0,z:0});let m=c*.428;for(let e of[-1,1])for(let t of[-1,1]){let n=p(m),i=e*m,o=t*m,s=-Math.atan2(t,e);r.push({profile:Nc(c*.138,c*.138),height:c*.062,x:i,y:n,z:o}),r.push({profile:a(c*.052,c*.048,7),height:c*.11,taper:.9,x:i,y:n+c*.062,z:o,rotY:s}),r.push({profile:a(c*.04,c*.038,6),height:c*.055,taper:.84,x:i,y:n+c*.172,z:o,rotY:s})}let h=c*.362,g=[];for(let e of[-1,1]){for(let t of[-c*.15,0,c*.15])g.push([t,e*h]);for(let t of[-c*.15,c*.15])g.push([e*h,t])}for(let[e,t]of g){let n=p(Math.max(Math.abs(e),Math.abs(t)));r.push({profile:Nc(c*.038,c*.038),height:c*.066,x:e,y:n,z:t}),r.push({profile:Nc(c*.052,c*.052),height:c*.016,x:e,y:n+c*.066,z:t}),i.push({profile:a(c*.024,c*.024,4,Math.PI/4),height:c*.045,taper:.08,x:e,y:n+c*.082,z:t})}let _=Math.PI/10,v=c*.238,y=c*.224,b=c*.231,x=[[.299,.52],[.348,.72],[.4,.86],[.455,.95],[.514,1],[.572,1],[.627,.95],[.676,.84],[.716,.66]],S=c*.731;x.forEach(([e,t],r)=>{let i=x[r+1],o=i?i[0]*c:S,s=i?i[1]:.48;n.push({profile:a(v*t,y*t,10,_),height:(o-e*c)*1.25,taper:s/t,x:0,y:e*c,z:0})});for(let[e,t,r]of[[.9,.53,.036],[-1.15,.6,.03],[2.1,.56,.033],[-2.35,.5,.028],[1.7,.66,.026],[-.55,.44,.031]])n.push({profile:a(c*r,c*r*.85,6),height:c*r*1.3,taper:.6,x:Math.cos(e)*b*.9,y:t*c,z:Math.sin(e)*b*.9,roll:s,rotY:-e});let C=c*.585,w=v*.9;n.push({profile:o(c*.186,c*.179),height:c*.083,taper:.88,x:w,y:C,z:0,roll:s}),n.push({profile:o(c*.157,c*.152),height:c*.04,taper:.82,x:w+c*.072,y:C,z:0,roll:s}),i.push({profile:a(c*.0925,c*.0925,8,Math.PI/8),height:c*.024,taper:.97,x:w+c*.101,y:C,z:0,roll:s}),i.push({profile:a(c*.068,c*.068,8,Math.PI/8),height:c*.012,taper:.95,x:w+c*.122,y:C,z:0,roll:s}),n.push({profile:a(c*.019,c*.019,7),height:c*.01,x:w+c*.131,y:C+c*.019,z:0,roll:s}),n.push({profile:o(c*.031,c*.01),height:c*.01,x:w+c*.131,y:C-c*.017,z:0,roll:s});let T=c*.44,E=c*.306,D=(T+E)/2;n.push({profile:o(c*.093,c*.159),height:c*.079,taper:.92,x:c*.176,y:D,z:0,roll:s}),n.push({profile:o(c*.069,c*.148),height:c*.045,taper:.95,x:c*.25,y:D,z:0,roll:s}),n.push({profile:o(c*.021,c*.155),height:c*.048,taper:.95,x:c*.252,y:T,z:0,roll:s}),n.push({profile:o(c*.019,c*.15),height:c*.046,taper:.95,x:c*.252,y:E,z:0,roll:s});for(let e=0;e<7;e++)r.push({profile:Z(3,c*.019,Math.PI/2),height:c*.052,taper:.12,x:c*.291,y:T-c*.005,z:(e-3)*c*.038,roll:Math.PI});for(let e=0;e<6;e++)r.push({profile:Z(3,c*.017,-Math.PI/2),height:c*.045,taper:.14,x:c*.291,y:E+c*.005,z:(e-2.5)*c*.038});let O=[[.4,.128,-.08,.52],[.82,.14,.1,.555],[1.2,.128,.26,.6],[1.55,.145,.05,.535],[2.05,.118,.3,.575],[2.6,.098,.22,.62]];for(let e=0;e<O.length*2;e++){let t=O[e%O.length];if(!t)continue;let[n,i,a,l]=t,u=n*(e>=O.length?-1:1),d=c*i,f=Math.cos(u),p=Math.sin(u),m=[c*.042,c*.028,c*.003],h=b*.93,g=l*c;for(let e=0;e<2;e++){let t=d*(e===0?.55:.5),n=a+e*.14,i=m[e]??c*.01,l=m[e+1]??i*.4;r.push({profile:o(i*.72,i,6),height:t*1.08,taper:l/i,x:f*h,y:g,z:p*h,roll:s+n,rotY:-u}),h+=t*Math.cos(n),g+=t*Math.sin(n)}}for(let[e,t]of[[.62,.6],[-.62,.6],[1.42,.68],[-1.42,.68],[2.3,.64],[-2.3,.64]])r.push({profile:o(c*.011,c*.014,5),height:c*.036,taper:.1,x:Math.cos(e)*b*.95,y:t*c,z:Math.sin(e)*b*.95,roll:s+.35,rotY:-e});[.8,.836,.862,.878,.885,.878,.862,.836,.8].forEach((e,t)=>{let r=-1.9+t*.475,i=Math.cos(r),o=Math.sin(r),l=[[b*.72,c*.672],[b*.82,c*(.672+(e-.672)*.55)],[b*.88,c*e]],u=[c*.0155,c*.0097,c*.0017];for(let e=0;e<2;e++){let t=l[e],d=l[e+1];if(!t||!d)continue;let f=d[0]-t[0],p=d[1]-t[1],m=u[e]??c*.008,h=u[e+1]??m*.4;n.push({profile:a(m,m,5),height:Math.hypot(f,p)*1.08,taper:h/m,x:i*t[0],y:t[1],z:o*t[0],roll:s+Math.atan2(p,f),rotY:-r})}});let ee=-c*.055,k=c*.203,A=c*.197,j=[[.6345,.733],[.6655,.858],[.6966,.943],[.7241,.987],[.7517,1],[.7862,.977],[.8207,.907],[.8517,.792],[.8793,.622],[.8965,.45],[.9069,.28]];j.forEach(([e,t],n)=>{let i=j[n+1],o=i?i[0]*c:u,s=i?i[1]:.06;r.push({profile:a(k*t,A*t,10),height:(o-e*c)*(i?1.2:1),taper:s/t,x:ee,y:e*c,z:0})});let M=e=>{let t=j[0]?.[1]??1;for(let[n,r]of j)e>=n&&(t=r);return t};for(let[e,t]of[[.745,1],[.8,.97],[.858,.79]])n.push({profile:a(k*t*1.03,A*t*1.03,10),height:c*.011,x:ee,y:e*c,z:0});for(let e=0;e<8;e++){let t=(e+.5)/8*Math.PI*2,r=Math.cos(t),i=Math.sin(t);for(let[e,t]of[[.672,.752],[.752,.878]]){let o=M(e)*1.02,s=M(t)*1.02,l=r*k*o,u=i*A*o;n.push({profile:a(c*.0097,c*.0097,4),height:(t-e)*c,shearX:r*k*s-l,shearZ:i*A*s-u,x:ee+l,y:e*c,z:u})}}let N=[c*.038,c*.033,c*.027,c*.02];for(let e=0;e<10;e++){let t=(e+.5)/10*Math.PI*2,r=Math.cos(t),i=Math.sin(t),o=c*(.28+e%3*.035),l=[[c*.134,c*.366],[c*.214,c*.328],[c*.262,c*.252],[o,p(o)]];for(let e=0;e<l.length-1;e++){let o=l[e],u=l[e+1];if(!o||!u)continue;let d=u[0]-o[0],f=u[1]-o[1],p=N[e]??c*.02,m=N[e+1]??p*.8;n.push({profile:a(p,p,5),height:Math.hypot(d,f)*1.06,taper:m/p,x:r*o[0],y:o[1],z:i*o[0],roll:s+Math.atan2(f,d),rotY:-t})}}return{parts:n,secondary:r,accents:i}}function Zc(e,t,n,r){switch(e){case`processing-node`:return qc(t,n,r);case`mobile-factory`:return Jc(t,n,r);case`slime-temple`:return Yc(t,n);case`ancient-deity-structure`:return Xc(t,n)}}var Qc={machines:{line:`#70e3bd`,chrome:`#25ae8a`,plate:`#3e6354`,onPlate:`#70e3bd`,pipOn:`#a2f1ab`,pipGap:`#0a5913`,pipOff:`#9e9da2`,pipOffGap:`#4c4d52`,accent:`#ffb020`,label:`#f2fff6`,warn:`#e6483d`,go:`#7fe3b0`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,primaryIcon:{width:24,height:24,inner:`<rect x="9" y="4" width="6" height="11" fill="#ffffff"/>
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
        stroke-width="1.6"/>`}}},$c=[{typeId:`ancient-deity-structure`,state:`mobile`,source:`models/ancient-deity-structure/ancient-deity-structure-01.glb`,runtime:`public/assets/runtime-models/ancient-deity-structure--mobile.glb`},{typeId:`ancient-nug`,state:`mobile`,source:`models/ancient-nug/ancient-nug-01.glb`,runtime:`public/assets/runtime-models/ancient-nug--mobile.glb`},{typeId:`ancient-slime-temple`,state:`mobile`,source:`models/slime-temple/slime-temple-1.glb`,runtime:`public/assets/runtime-models/ancient-slime-temple--mobile.glb`},{typeId:`machine-harbinger`,state:`mobile`,source:`models/machine-harbinger/machine-harbinger-02.glb`,runtime:`public/assets/runtime-models/machine-harbinger--mobile.glb`},{typeId:`machine-harvester`,state:`mobile`,source:`models/machine-harvester/machine-harvester-01.glb`,runtime:`public/assets/runtime-models/machine-harvester--mobile.glb`},{typeId:`machine-infantry`,state:`mobile`,source:`models/machine-infantry/machine-infantry-01.glb`,runtime:`public/assets/runtime-models/machine-infantry--mobile.glb`},{typeId:`mobile-factory`,state:`mobile`,source:`models/machine-mobile-factory/machine-mobile-factory-mobile-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--mobile.glb`},{typeId:`mobile-factory`,state:`deployed`,source:`models/machine-mobile-factory/machine-mobile-factory-deployed-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--deployed.glb`},{typeId:`machine-processing-node`,state:`mobile`,source:`models/machine-processing-node/machine-processing-node-01.glb`,runtime:`public/assets/runtime-models/machine-processing-node--mobile.glb`},{typeId:`machine-shard-cutter`,state:`mobile`,source:`models/machine-shard-cutter/machine-shard-cutter-01.glb`,runtime:`public/assets/runtime-models/machine-shard-cutter--mobile.glb`},{typeId:`ancient-harvester`,state:`mobile`,source:`models/ancient-harverster/ancient-harvester-01.glb`,runtime:`public/assets/runtime-models/ancient-harvester--mobile.glb`},{typeId:`ancient-harbinger`,state:`mobile`,source:`models/ancient-harbinger/ancient-harbinger-03.glb`,runtime:`public/assets/runtime-models/ancient-harbinger--mobile.glb`},{typeId:`ancient-infantry`,state:`mobile`,source:`models/ancient-infantry/ancient-infantry-01.glb`,runtime:`public/assets/runtime-models/ancient-infantry--mobile.glb`},{typeId:`ancient-support`,state:`mobile`,source:`models/ancient-poison-specialist/ancient-poison-specialist-01.glb`,runtime:`public/assets/runtime-models/ancient-support--mobile.glb`},{typeId:`machine-construct`,state:`mobile`,source:`models/machine-construct/machine-construct-01.glb`,runtime:`public/assets/runtime-models/machine-construct--mobile.glb`}];function el(e,t=`mobile`){let n=$c.find(n=>n.typeId===e&&n.state===t);if(!n)throw Error(`No canonical runtime model declared for ${e}:${t}`);return`/HumanResourcesLowPoly/${n.runtime.replace(/^public\//,``)}`}var tl=(e,t,n,r,i,a={})=>({typeId:e,faction:t,assetUrl:el(e,a.state??`mobile`),bounds:{targetExtent:n,normaliseBy:r,...a.yawOffset===void 0?{}:{yawOffset:a.yawOffset}},fallback:{extent:n},material:{palette:i},...a.state===void 0?{}:{state:a.state},...a.cachePickGeometry===void 0?{}:{cachePickGeometry:a.cachePickGeometry},...a.animations===void 0?{}:{animations:a.animations}}),nl=[tl(`ancient-deity-structure`,`ancients`,30,`horizontal`,`ancient-deity-structure`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),tl(`ancient-nug`,`ancients`,70,`height`,`ancient-nug`,{yawOffset:Math.PI/2}),tl(`ancient-slime-temple`,`ancients`,18,`horizontal`,`secondary`),tl(`machine-harbinger`,`machines`,34,`height`,`machine-harbinger`,{yawOffset:Math.PI/2}),tl(`machine-harvester`,`machines`,25,`height`,`machine-harvester`,{yawOffset:Math.PI/2}),tl(`machine-infantry`,`machines`,10,`height`,`machine-infantry`,{yawOffset:Math.PI/2}),tl(`mobile-factory`,`machines`,24,`horizontal`,`machine-mobile-factory`,{state:`mobile`}),tl(`mobile-factory`,`machines`,24,`horizontal`,`machine-mobile-factory`,{state:`deployed`}),tl(`machine-processing-node`,`machines`,18,`horizontal`,`machine-processing-node`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),tl(`machine-shard-cutter`,`machines`,Ho.large.radius*2,`horizontal`,`machine-shard-cutter`,{yawOffset:Math.PI/2}),tl(`ancient-harvester`,`ancients`,Ho.medium.radius*2,`horizontal`,`ancient-harvester`,{yawOffset:Math.PI/2}),tl(`ancient-harbinger`,`ancients`,30,`height`,`ancient-harbinger`,{yawOffset:Math.PI/2}),tl(`ancient-infantry`,`ancients`,9,`height`,`ancient-infantry`,{yawOffset:Math.PI/2}),tl(`ancient-support`,`ancients`,30,`height`,`ancient-poison-specialist`,{yawOffset:Math.PI/2}),tl(`machine-construct`,`machines`,70,`height`,`machine-construct`,{yawOffset:Math.PI/2,animations:{walk:`NlaTrack`,defeat:`NlaTrack.001`}})],rl=new Map(nl.map(e=>[il(e.typeId,e.state),e]));function il(e,t=`mobile`){return`${e}:${t}`}function al(e,t=!1){return rl.get(il(e,t?`deployed`:`mobile`))??rl.get(il(e))}var ol=`modulepreload`,sl=function(e){return`/HumanResourcesLowPoly/`+e},cl={},ll=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=sl(t,n),t=s(t),t in cl)return;cl[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ol,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ul={"machine-infantry":3091507,"machine-harvester":3091507},dl=.2,fl=64,pl={"ancient-slime-temple":{...Zc(`slime-temple`,18,18,!0),allowsFootprintOverflow:!0},"ancient-deity-structure":{...Zc(`ancient-deity-structure`,30,30,!0),allowsFootprintOverflow:!0},"machine-processing-node":{...Zc(`processing-node`,18,18,!1),allowsFootprintOverflow:!0},"mobile-factory":{...Zc(`mobile-factory`,24,18,!1),allowsFootprintOverflow:!0},"machine-harbinger":Kc(Ho.large.radius,34),"machine-harvester":Gc(Ho.medium.radius,25),"machine-shard-cutter":{...Gc(Ho.large.radius*1.1,32),allowsFootprintOverflow:!0},"machine-infantry":Wc(Ho.small.radius,10),"machine-construct":{...Uc(28,70),allowsFootprintOverflow:!0},"ancient-harbinger":zc(Ho.large.radius,30),"ancient-harvester":Bc(Ho.medium.radius,20),"ancient-infantry":Rc(Ho.small.radius,9),"ancient-support":Lc(Ho.small.radius,9),"ancient-nug":{...Vc(28,70),allowsFootprintOverflow:!0}},ml={"machine-processing-node":{...Zc(`processing-node`,18,18,!0),allowsFootprintOverflow:!0},"mobile-factory":{...Zc(`mobile-factory`,24,18,!0),allowsFootprintOverflow:!0}},hl=new Map;function gl(e,t=!1){let n=t?ml[e]:pl[e];if(!n)throw Error(`unit type ${e} has no reference silhouette`);return n}function _l(e){return ml[e]}function vl(e){return ul[e]??it(us(e).faction)}function yl(e,t=!1){let n=`${e}:${t?`deployed`:`mobile`}`,r=hl.get(n);if(r)return r;let i=gl(e,t),a=Pc([...i.parts,...i.secondary??[],...i.accents??[]]),o=a.getAttribute(`position`),s=0,c=1/0,l=-1/0,u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e=0;e<o.count;e++)s=Math.max(s,Math.hypot(o.getX(e),o.getZ(e))),c=Math.min(c,o.getX(e)),l=Math.max(l,o.getX(e)),u=Math.min(u,o.getY(e)),d=Math.max(d,o.getY(e)),f=Math.min(f,o.getZ(e)),p=Math.max(p,o.getZ(e));a.dispose();let m={radius:s,minY:u,maxY:d,height:d-u,centre:{x:(c+l)/2,y:(u+d)/2,z:(f+p)/2},size:{x:l-c,y:d-u,z:p-f}};return hl.set(n,m),m}function bl(e){if(![`machine-infantry`,`machine-construct`,`machine-harbinger`,`machine-processing-node`,`mobile-factory`].includes(e))return;let t=yl(e),n=t.radius+Math.hypot(t.centre.x,t.centre.z),r=Math.max(n,t.height/2)*1.08,i=e===`machine-construct`,a=e===`machine-harbinger`,o=e===`mobile-factory`,s=r*(i?.82:a?.9:o?1.1:1);return{drop:e===`machine-infantry`||e===`machine-construct`||e===`machine-harbinger`?t.height*.25:0,shieldRadius:s,shieldCentre:{x:t.centre.x,y:t.centre.y+(i?t.height*.12:o?-s/3:0),z:t.centre.z}}}function xl(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}function Sl(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function Cl(e,t,n){let r=e.instanceColor,a=t*3;if(r&&Math.fround(n.r)===r.array[a]&&Math.fround(n.g)===r.array[a+1]&&Math.fround(n.b)===r.array[a+2])return!1;e.setColorAt(t,n);let o=e.instanceColor;return o?(o.setUsage(i),o.addUpdateRange(a,3),!0):!1}function wl(e,t){let n=yl(e,t),r=new K(n.size.x,n.size.y,n.size.z);return r.translate(n.centre.x,n.centre.y,n.centre.z),r}var Tl=class{modelMode;detailedResourcesFactory;group=new p;meshes=new Map;matrix=new z;rotation=new z;colour=new V;used=new Map;selected=new Map;alerted=new Map;importedUnits=new Map;activeImportedUnits=new Set;modelResources;pendingModelLoads=new Map;modelLoaderState;disposed=!1;importedTemplates=new Map;defeatedImportedUnits=new Map;importedSelectionGroup=new p;importedOcclusionGroups={machines:new p,ancients:new p};lastAnimationSyncMs;drawn=0;selectedDrawn=0;alertedDrawn=0;constructor(e,t=`detailed`,n){this.modelMode=t,this.detailedResourcesFactory=n,t===`detailed`&&this.startDetailedModelLoader();for(let n of cs)for(let r of ml[n.id]?[!1,!0]:[!1]){let a=gl(n.id,r),o=e.units.filter(e=>e.typeId===n.id).length,s=Math.max(o+fl,4),c=t===`detailed`?wl(n.id,r):void 0,l=new d(c??Pc(a.parts),lt(16777215),s);l.frustumCulled=!1;let u=new d(c?c.clone():Pc([...a.parts,...a.secondary??[]]),new Ie,s);u.frustumCulled=!1;let f=new d(u.geometry,new Ie,s);f.frustumCulled=!1;let p;t===`regular`&&a.secondary&&a.secondary.length>0&&(p=new d(Pc(a.secondary),lt(16777215),s),p.frustumCulled=!1);let m;t===`regular`&&a.accents&&a.accents.length>0&&(m=new d(Pc(a.accents),lt(vl(n.id)),s),m.frustumCulled=!1);let h=bl(n.id),g;h&&(g=new d(new et(h.shieldRadius,2),lt(it(`machines`),{transparent:!0,opacity:dl,depthWrite:!1}),s),g.frustumCulled=!1,g.renderOrder=5);let _=`${n.id}:${r?`deployed`:`mobile`}`;for(let e of[l,u,f,p,m,g])e&&(e.instanceMatrix.setUsage(i),e.count=0);l.castShadow=l.receiveShadow=!0,p&&(p.castShadow=p.receiveShadow=!0),m&&(m.castShadow=m.receiveShadow=!0),u.castShadow=u.receiveShadow=!1,g&&(g.castShadow=g.receiveShadow=!1),this.meshes.set(_,{key:_,type:n,deployed:r,body:l,shell:u,alertShell:f,secondary:p,accent:m,deployedShield:g,deployedAppearance:h,matrixDirty:!1,shellMatrixDirty:!1,alertShellMatrixDirty:!1,secondaryMatrixDirty:!1,accentMatrixDirty:!1,shieldMatrixDirty:!1,bodyColourDirty:!1,secondaryColourDirty:!1}),this.group.add(l),p&&this.group.add(p),m&&this.group.add(m),g&&this.group.add(g)}}requestImportedModel(e,t){let n=al(e,t);if(n){let e=il(n.typeId,n.state);this.modelResources?this.modelResources.load(e,n):this.pendingModelLoads.set(e,n)}return n}startDetailedModelLoader(){this.modelLoaderState={state:`loading`};let e=this.detailedResourcesFactory?Promise.resolve(void 0):ll(()=>import(`./unitModelResources-DY8igU7R.js`),__vite__mapDeps([0,1,2]));Promise.all([e,ll(()=>import(`./unitModelMaterials--SYKi_SQ.js`),__vite__mapDeps([3,1,4]))]).then(([e,{prepareUnitModelMaterials:t}])=>{if(this.disposed)return;let n=this.detailedResourcesFactory?this.detailedResourcesFactory(t):new e.UnitModelResources(t);this.modelResources=n,this.modelLoaderState=void 0;for(let[e,t]of this.pendingModelLoads)n.load(e,t);this.pendingModelLoads.clear()}).catch(e=>{this.disposed||(this.modelLoaderState={state:`failed`,error:e},console.warn(`Unable to initialise Detailed model loading; using block fallbacks.`,e))})}importedUnitFor(e,t,n){let r=this.requestImportedModel(e,n);if(!r)return;let i=il(r.typeId,r.state),a=this.modelResources?.get(i)??this.importedTemplates.get(i);if(!a)return;let o=this.importedUnits.get(t);if(o?.modelKey===i)return o;o&&this.removeImportedUnit(t,o);let s=tt(a.scene),c=tt(a.scene),l=a.pickGeometry?new B(a.pickGeometry,new Ie({side:2})):void 0,u=new Le(s),d=new Le(c),f=r?.animations&&this.animationClip(a,r.animations.walk),p={modelKey:i,template:a,body:s,pick:l,selection:void 0,occlusion:c,faction:r.faction,selectionMaterial:void 0,mixer:u,occlusionMixer:d,walkAction:f?u.clipAction(f):void 0,occlusionWalkAction:f?d.clipAction(f):void 0};return this.importedUnits.set(t,p),this.group.add(s),this.importedOcclusionGroups[r.faction].add(c),p}syncImportedUnit(e,t,n,r,i,a,o,s){if(this.modelMode!==`detailed`)return;let c=al(e,s);if(!c)return;let l=this.importedUnitFor(e,t,s);if(l)return this.activeImportedUnits.add(t),l.body.position.set(n,r,i),l.body.rotation.set(0,-a+(c.bounds.yawOffset??0),0),l.pick&&(l.pick.position.copy(l.body.position),l.pick.rotation.copy(l.body.rotation)),l.occlusion.position.copy(l.body.position),l.occlusion.rotation.copy(l.body.rotation),l.walkAction&&(o?l.walkAction.isRunning()||l.walkAction.reset().play():l.walkAction.isRunning()&&l.walkAction.stop()),l.occlusionWalkAction&&(o?l.occlusionWalkAction.isRunning()||l.occlusionWalkAction.reset().play():l.occlusionWalkAction.isRunning()&&l.occlusionWalkAction.stop()),l}selectionClone(e){if(e.selection)return e.selection;let t=tt(e.template.scene),n=new Ie({color:16777215,side:2,toneMapped:!1});return t.traverse(e=>{e instanceof B&&(e.material=n,e.castShadow=e.receiveShadow=!1,e.frustumCulled=!1)}),e.selection=t,e.selectionMaterial=n,this.importedSelectionGroup.add(t),t}advanceImportedAnimations(e){let t=this.lastAnimationSyncMs??e,n=Math.min(.1,Math.max(0,e-t)/1e3);this.lastAnimationSyncMs=e;for(let e of this.importedUnits.values())e.walkAction?.isRunning()&&e.mixer.update(n),e.occlusionWalkAction?.isRunning()&&e.occlusionMixer.update(n);for(let[t,r]of this.defeatedImportedUnits)r.mixer.update(n),!(e<r.expiresAt)&&(this.group.remove(r.body),r.mixer.stopAllAction(),this.defeatedImportedUnits.delete(t))}animationClip(e,t){return e.animations.find(e=>e.name===t)}syncDefeats(e,t){let n=new Set;for(let r of e){if(r.kind!==`combatHit`||r.targetTypeId!==`machine-construct`||r.remainingHealth>0||n.has(r.targetId)||this.defeatedImportedUnits.has(r.targetId))continue;n.add(r.targetId);let e=al(r.targetTypeId);if(!e?.animations)continue;let i=this.modelResources?.get(il(r.targetTypeId,e.state))??this.importedTemplates.get(il(r.targetTypeId,e.state));if(!i)continue;let a=this.animationClip(i,e.animations.defeat);if(!a)continue;let o=this.importedUnits.get(r.targetId),s=o?.body??tt(i.scene);o?(this.importedUnits.delete(r.targetId),o.selection&&this.importedSelectionGroup.remove(o.selection),this.importedOcclusionGroups[e.faction].remove(o.occlusion),o.selectionMaterial?.dispose(),o.pick?.material.dispose(),o.mixer.stopAllAction(),o.occlusionMixer.stopAllAction()):this.group.add(s),s.position.set(r.targetX,X,r.targetZ),s.rotation.set(0,-(r.targetHeading??0)+(e.bounds.yawOffset??0),0);let c=new Le(s),l=c.clipAction(a);l.setLoop(ze,1),l.clampWhenFinished=!0,l.play(),this.defeatedImportedUnits.set(r.targetId,{body:s,mixer:c,expiresAt:t+a.duration*1e3})}}removeDormantImportedUnits(){for(let[e,t]of this.importedUnits)this.activeImportedUnits.has(e)||this.removeImportedUnit(e,t)}removeImportedUnit(e,t){this.group.remove(t.body),t.selection&&this.importedSelectionGroup.remove(t.selection),this.importedOcclusionGroups[t.faction].remove(t.occlusion),t.selectionMaterial?.dispose(),t.pick?.material.dispose(),t.mixer.stopAllAction(),t.occlusionMixer.stopAllAction(),this.importedUnits.delete(e)}importedSelectionSources(){return this.importedSelectionGroup}importedPickSource(e){let t=this.importedUnits.get(e);return t?.pick??t?.body}importedOcclusionSources(){return Object.entries(this.importedOcclusionGroups).map(([e,t])=>({source:t,faction:e}))}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof B))return;let n=t.material;Array.isArray(n)?n.forEach(t=>at(t,e)):at(n,e)})}occlusionSources(){return[...this.meshes.values()].map(e=>({source:e.body,geometry:e.shell.geometry,faction:e.type.faction}))}selectionSources(){return[...this.meshes.values()].flatMap(e=>[{source:e.shell,geometry:e.shell.geometry,faction:e.type.faction,alert:!1},{source:e.alertShell,geometry:e.shell.geometry,faction:e.type.faction,alert:!0}])}static layersOf(e){let t=e=>{let t=1;return e.secondary&&e.secondary.length>0&&t++,e.accents&&e.accents.length>0&&t++,t},n=t(gl(e)),r=_l(e);return r&&(n+=t(r)),bl(e)&&(n+=r?2:1),n}sync(e,t,n,r,i=performance.now()){this.advanceImportedAnimations(i),this.used.clear(),this.selected.clear(),this.alerted.clear(),this.activeImportedUnits.clear(),this.drawn=0,this.selectedDrawn=0,this.alertedDrawn=0;for(let e of this.meshes.values())e.matrixDirty=!1,e.shellMatrixDirty=!1,e.alertShellMatrixDirty=!1,e.secondaryMatrixDirty=!1,e.accentMatrixDirty=!1,e.shieldMatrixDirty=!1,e.bodyColourDirty=!1,e.secondaryColourDirty=!1;for(let i of e.units){let e=i.deployTimer>0?1-i.deployTimer/Oo:+!!i.deployed,a=ml[i.typeId]!==void 0&&(i.deployTimer>0?i.deployTarget?e>=.5:e>.5:i.deployed),o=this.meshes.get(`${i.typeId}:${a?`deployed`:`mobile`}`);if(!o)continue;let s=this.used.get(o.key)??0;if(s>=o.body.instanceMatrix.count)continue;this.used.set(o.key,s+1);let c=i.prevX+(i.x-i.prevX)*t,l=i.prevZ+(i.z-i.prevZ)*t,u=r?.(i.id),d=xl(i.prevHeading,i.heading,t),f=c+(u?.forward??0)*Math.cos(d),p=l+(u?.forward??0)*Math.sin(d);this.rotation.makeRotationY(-d-(u?.yaw??0));let m=o.deployedAppearance,h=0;if(m)if(i.deployTimer>0){let e=1-i.deployTimer/Oo;h=i.deployTarget?e:1-e}else i.deployed&&(h=1);let g=X-(m?.drop??0)*h,_=Math.hypot(i.x-i.prevX,i.z-i.prevZ)>.001,v=this.syncImportedUnit(i.typeId,i.id,f,g,p,d+(u?.yaw??0),_,a);if(o.body.visible=!v,o.secondary&&(o.secondary.visible=!v),o.accent&&(o.accent.visible=!v),this.matrix.copy(this.rotation),this.matrix.setPosition(f,g,p),o.matrixDirty=Sl(o.body,s,this.matrix)||o.matrixDirty,o.secondary&&(o.secondaryMatrixDirty=Sl(o.secondary,s,this.matrix)||o.secondaryMatrixDirty),o.accent&&(o.accentMatrixDirty=Sl(o.accent,s,this.matrix)||o.accentMatrixDirty),o.deployedShield&&m){this.matrix.copy(this.rotation),this.matrix.scale(new W(h,h,h));let e=m.shieldCentre,t=new W(e.x,e.y,e.z).applyMatrix4(this.rotation);this.matrix.setPosition(f+t.x,g+t.y,p+t.z),o.shieldMatrixDirty=Sl(o.deployedShield,s,this.matrix)||o.shieldMatrixDirty}let y=rt(o.type.faction),b=1;if(i.deployTimer>0){let e=1-i.deployTimer/Oo,t=i.deployTarget?1:.72;b=t+((i.deployTarget?.72:1)-t)*e}else i.deployed&&(b=.72);this.colour.setHex(y).multiplyScalar(b),o.bodyColourDirty=Cl(o.body,s,this.colour)||o.bodyColourDirty,o.secondary&&(this.colour.setHex(ot(o.type.faction)).multiplyScalar(b),o.secondaryColourDirty=Cl(o.secondary,s,this.colour)||o.secondaryColourDirty);let x=n(i.id);if(x!==void 0){let e=x===`attack`;if(v){let t=this.selectionClone(v);t.position.copy(v.body.position),t.rotation.copy(v.body.rotation),t.visible=!0,v.selectionMaterial?.color.set(e?16719904:Qc[o.type.faction].line)}else{let t=e?o.alertShell:o.shell,n=e?this.alerted:this.selected,r=n.get(o.key)??0;this.matrix.copy(this.rotation),this.matrix.setPosition(f,g,p);let i=Sl(t,r,this.matrix);e?o.alertShellMatrixDirty=i||o.alertShellMatrixDirty:o.shellMatrixDirty=i||o.shellMatrixDirty,n.set(o.key,r+1)}e?this.alertedDrawn++:this.selectedDrawn++}else v&&v.selection&&(v.selection.visible=!1);this.drawn++}this.removeDormantImportedUnits();for(let e of this.meshes.values()){let t=this.used.get(e.key)??0;e.body.count=t,e.shell.count=this.selected.get(e.key)??0,e.alertShell.count=this.alerted.get(e.key)??0,e.secondary&&(e.secondary.count=t),e.accent&&(e.accent.count=t),e.deployedShield&&(e.deployedShield.count=t),e.matrixDirty&&(e.body.instanceMatrix.needsUpdate=!0),e.shellMatrixDirty&&(e.shell.instanceMatrix.needsUpdate=!0),e.alertShellMatrixDirty&&(e.alertShell.instanceMatrix.needsUpdate=!0),e.secondary&&e.secondaryMatrixDirty&&(e.secondary.instanceMatrix.needsUpdate=!0),e.accent&&e.accentMatrixDirty&&(e.accent.instanceMatrix.needsUpdate=!0),e.deployedShield&&e.shieldMatrixDirty&&(e.deployedShield.instanceMatrix.needsUpdate=!0),e.bodyColourDirty&&e.body.instanceColor&&(e.body.instanceColor.needsUpdate=!0),e.secondaryColourDirty&&e.secondary?.instanceColor&&(e.secondary.instanceColor.needsUpdate=!0)}}static measure(e){let{radius:t,height:n}=yl(e);return{radius:t,height:n}}static footprintOf(e){return ds(e)}modelStatus(e,t=!1){let n=al(e,t);if(!n)return;let r=il(n.typeId,n.state);return this.modelResources?.status(r)??(this.pendingModelLoads.has(r)?this.modelLoaderState:void 0)}detailedPerformanceStats(){if(this.modelMode!==`detailed`||!this.modelResources)return;let e=this.modelResources.counts,t=0;for(let e of this.importedUnits.values())e.selection?.visible&&t++;return{loadedModels:e.loaded,loadingModels:e.loading,failedModels:e.failed,fallbacks:this.drawn-this.activeImportedUnits.size,visible:this.activeImportedUnits.size,selection:t,occlusion:this.activeImportedUnits.size}}dispose(){this.disposed=!0,this.pendingModelLoads.clear();for(let e of this.importedUnits.values()){this.group.remove(e.body),e.selection&&this.importedSelectionGroup.remove(e.selection);for(let t of Object.values(this.importedOcclusionGroups))t.remove(e.occlusion);e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()}this.importedUnits.clear();for(let e of this.defeatedImportedUnits.values())this.group.remove(e.body),e.mixer.stopAllAction();this.defeatedImportedUnits.clear(),this.importedSelectionGroup.clear();for(let e of Object.values(this.importedOcclusionGroups))e.clear();this.modelResources?.dispose();for(let e of this.meshes.values())e.body.geometry.dispose(),El(e.body.material),e.shell.geometry.dispose(),El(e.shell.material),El(e.alertShell.material),e.secondary&&(e.secondary.geometry.dispose(),El(e.secondary.material)),e.accent&&(e.accent.geometry.dispose(),El(e.accent.material)),e.deployedShield&&(e.deployedShield.geometry.dispose(),El(e.deployedShield.material))}};function El(e){Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}var Dl=new W;function Ol(e,t,n){let r=kl(e,n);if(!r)return;let i,a=1/0;for(let e of t){let t=(e.x-r.x)**2+(e.z-r.z)**2;t>196||t>=a||(i=e,a=t)}return i?.id}function kl(e,t,n=X){Dl.set(t.x,t.y,.5).unproject(e);let r=e.position,i=Dl.sub(r);if(Math.abs(i.y)<1e-6)return;let a=(n-r.y)/i.y;if(!(a<0))return new W(r.x+i.x*a,n,r.z+i.z*a)}function Al(e,t,n,r){jl.setFromCamera(n,e);let i,a=1/0;for(let e of t.units){let t=r?.importedPickSource(e.id),n=t?zl(t):r?.modelMode===`detailed`?Rl(e):Ll(e);!n||n.distance>=a||(a=n.distance,i=e.id)}return i}var jl=new Ye,Ml=[],Nl=[],Pl=new Map,Fl=new Map,Il=new z;function Ll(e){let t=Vl(e);return Ul(t,e),Ml.length=0,t.raycast(jl,Ml),Bl(Ml)}function Rl(e){let t=Hl(e),n=`${e.typeId}:${t?`deployed`:`mobile`}`,r=Fl.get(n);if(!r){let i=yl(e.typeId,t),a=new K(i.size.x,i.size.y,i.size.z);a.translate(i.centre.x,i.centre.y,i.centre.z),r=new B(a,new Ie({side:2})),r.matrixAutoUpdate=!1,Fl.set(n,r)}return Ul(r,e),Ml.length=0,r.raycast(jl,Ml),Bl(Ml)}function zl(e){return e.updateMatrixWorld(!0),Nl.length=0,jl.intersectObject(e,!0,Nl),Bl(Nl)}function Bl(e){let t;for(let n of e)(!t||n.distance<t.distance)&&(t=n);return t}function Vl(e){let t=Hl(e),n=`${e.typeId}:${t?`deployed`:`mobile`}`,r=Pl.get(n);if(r)return r;let i=gl(e.typeId,t);return r=new B(Pc([...i.parts,...i.secondary??[]]),new Ie({side:2})),r.matrixAutoUpdate=!1,Pl.set(n,r),r}function Hl(e){if(_l(e.typeId)===void 0)return!1;if(e.deployTimer>0){let t=1-e.deployTimer/Oo;return e.deployTarget?t>=.5:t>.5}return e.deployed}function Ul(e,t){let n=bl(t.typeId),r=0;if(n)if(t.deployTimer>0){let e=1-t.deployTimer/Oo;r=t.deployTarget?e:1-e}else t.deployed&&(r=1);Il.makeRotationY(-t.heading),Il.setPosition(t.x,X-(n?.drop??0)*r,t.z),e.matrixWorld.copy(Il)}function Wl(e,t,n){Dl.set(n.x,n.y,.5).unproject(e);let r=e.position,i=Dl.x-r.x,a=Dl.y-r.y,o=Dl.z-r.z,s,c=1/0;for(let e of t.buildings){let t=e.state===`intact`?e.height:e.state===`damaged`?e.height*.55:3,n=e.rotation??0,l=Ni({x:r.x-e.x,z:r.z-e.z},-n),u=Ni({x:i,z:o},-n),d=Gl(l.x,r.y,l.z,u.x,a,u.z,-e.width/2,0,-e.depth/2,e.width/2,t,e.depth/2);d!==void 0&&d<c&&(c=d,s=e.id)}return s}function Gl(e,t,n,r,i,a,o,s,c,l,u,d){let f=0,p=1/0;for(let[m,h,g,_]of[[e,r,o,l],[t,i,s,u],[n,a,c,d]]){if(Math.abs(h)<1e-9){if(m<g||m>_)return;continue}let e=(g-m)/h,t=(_-m)/h;if(e>t&&([e,t]=[t,e]),f=Math.max(f,e),p=Math.min(p,t),f>p)return}return p>=0?f:void 0}function Kl(e,t,n){let r=[];for(let i of t.units)Jl(e,i,n)&&r.push(i.id);return r.sort((e,t)=>e-t)}function ql(e,t){return Kl(e,t,{x0:-1,y0:-1,x1:1,y1:1})}function Jl(e,t,n){return Dl.set(t.x,X,t.z).project(e),Dl.z<-1||Dl.z>1?!1:Dl.x>=n.x0&&Dl.x<=n.x1&&Dl.y>=n.y0&&Dl.y<=n.y1}var Yl={fovDeg:28,minDistance:350,maxDistance:1500,initialDistance:750,minPitchDeg:47,maxPitchDeg:58,yawDeg:45,nearPlane:50,farPlane:16e4,basePanSpeed:120,zoomSpeed:.0016,smoothing:12,panLimit:nc*.6},Xl=class{camera;target=new W(0,0,0);desiredTarget=new W(0,0,0);distance;desiredDistance;lastMiddlePointer=new Me;middleDragActive=!1;constructor(e,t={x:0,z:0}){this.camera=new a(Yl.fovDeg,e,Yl.nearPlane,Yl.farPlane),this.distance=Yl.initialDistance,this.desiredDistance=this.distance,this.target.set(t.x,0,t.z),this.desiredTarget.copy(this.target),this.applyTransform()}get zoomFraction(){return ke.inverseLerp(Yl.minDistance,Yl.maxDistance,this.distance)}get pitchDeg(){let e=Math.sqrt(this.zoomFraction);return ke.lerp(Yl.minPitchDeg,Yl.maxPitchDeg,e)}get focus(){return this.target}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}update(e,t){if(e.zoomDelta!==0){let t=Math.exp(e.zoomDelta*Yl.zoomSpeed);this.desiredDistance=ke.clamp(this.desiredDistance*t,Yl.minDistance,Yl.maxDistance)}let n=e.panVector;if(n.x!==0||n.y!==0){let e=Yl.basePanSpeed*(1+this.zoomFraction*4)*t,r=ke.degToRad(Yl.yawDeg),i=Math.sin(r),a=Math.cos(r);this.desiredTarget.x+=(n.y*i-n.x*a)*e,this.desiredTarget.z+=(n.x*i+n.y*a)*e,this.clampDesiredTarget()}if(e.middlePanHeld){let t=kl(this.camera,e.pointer);if(this.middleDragActive&&t){let e=kl(this.camera,this.lastMiddlePointer);e&&(this.desiredTarget.x+=e.x-t.x,this.desiredTarget.z+=e.z-t.z,this.clampDesiredTarget())}this.lastMiddlePointer.copy(e.pointer),this.middleDragActive=!0}else this.middleDragActive=!1;let r=1-Math.exp(-Yl.smoothing*t);this.distance+=(this.desiredDistance-this.distance)*r,this.target.lerp(this.desiredTarget,r),this.applyTransform()}clampDesiredTarget(){let e=Math.hypot(this.desiredTarget.x,this.desiredTarget.z);if(e>Yl.panLimit){let t=Yl.panLimit/e;this.desiredTarget.x*=t,this.desiredTarget.z*=t}}applyTransform(){let e=ke.degToRad(this.pitchDeg),t=ke.degToRad(Yl.yawDeg),n=Math.cos(e)*this.distance;this.camera.position.set(this.target.x-Math.sin(t)*n,this.target.y+Math.sin(e)*this.distance,this.target.z-Math.cos(t)*n),this.camera.lookAt(this.target)}},Zl={machines:{fill:`rgba(61, 61, 61, 0.82)`,edge:`#70e3bd`,edgePx:2,chamferPx:30,radiusPx:0,tile:`rgba(62, 99, 84, 0.85)`,tileEdge:`#70e3bd`,tileRadius:`0`,heading:`#f2fff6`,body:`#f2fff6`,dim:`#9fbdb1`,headingShadow:`0 0 4px rgba(0, 0, 0, 0.85), 0 1px 1px rgba(0, 0, 0, 0.7)`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,accent:`#ffb020`,ok:`#a2f1ab`,warn:`#e6483d`,onEdge:`#10231c`,cornerLeft:{width:40,height:120,inner:`<g fill="none" stroke="var(--panel-edge)" stroke-width="2" stroke-linejoin="miter">
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
      </g>`}}},Ql=1920;function $l(e,t,n){if(e.style.setProperty(`--panel-fill`,t.fill),e.style.setProperty(`--panel-edge`,t.edge),e.style.setProperty(`--panel-edge-px`,`${t.edgePx}px`),e.style.setProperty(`--panel-tile`,t.tile),e.style.setProperty(`--panel-tile-edge`,t.tileEdge),e.style.setProperty(`--panel-tile-radius`,t.tileRadius),e.style.setProperty(`--panel-heading`,t.heading),e.style.setProperty(`--panel-body`,t.body),e.style.setProperty(`--panel-dim`,t.dim),e.style.setProperty(`--panel-heading-shadow`,t.headingShadow),e.style.setProperty(`--panel-font`,t.font),e.style.setProperty(`--panel-accent`,t.accent),e.style.setProperty(`--panel-ok`,t.ok),e.style.setProperty(`--panel-warn`,t.warn),e.style.setProperty(`--panel-on-edge`,t.onEdge),e.style.setProperty(`--panel-border-top`,`${t.edgePx}px solid ${t.edge}`),e.style.setProperty(`--panel-border-inward`,`${t.edgePx}px solid ${t.edge}`),t.chamferPx>0){let r=t.chamferPx;e.style.setProperty(`--panel-clip`,n===`left`?`polygon(0 0, calc(100% - ${r}px) 0, 100% ${r}px, 100% 100%, 0 100%)`:`polygon(${r}px 0, 100% 0, 100% 100%, 0 100%, 0 ${r}px)`),e.style.setProperty(`--panel-radius`,`0`)}else e.style.setProperty(`--panel-clip`,`none`),e.style.setProperty(`--panel-radius`,n===`left`?`0 ${t.radiusPx}px 0 0`:`${t.radiusPx}px 0 0 0`)}function eu(e){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return t.setAttribute(`viewBox`,`0 0 ${e.width} ${e.height}`),t.setAttribute(`width`,String(e.width)),t.setAttribute(`height`,String(e.height)),t.innerHTML=e.inner,t}var tu=class{handlers;root;onResize;nameEl;metaEl;activityEl;statsEl;countEl;chipsEl;deployEl;deployFillEl;deployLabelEl;lastName=``;lastMeta=``;lastActivity=``;lastStats=``;lastCount=``;lastChipSignature=``;lastDeploy=``;lastVisible=null;constructor(e,t,n){this.handlers=n,du();let r=Zl[t];this.root=nu(`div`,`hrp hrp-unit`),this.root.dataset.faction=t,$l(this.root,r,`left`);let i=eu(r.cornerLeft);i.classList.add(`hrp-corner`);let a=nu(`div`,`hrp-shell`),o=nu(`div`,`hrp-body`),s=nu(`div`,`hrp-lead`),c=nu(`div`,`hrp-portrait`);c.append(su(),cu()),s.append(c);let l=nu(`div`,`hrp-lead-text`);this.nameEl=nu(`div`,`hrp-name`),this.metaEl=nu(`div`,`hrp-meta`),this.activityEl=nu(`div`,`hrp-activity`),this.statsEl=nu(`div`,`hrp-stats`),l.append(this.nameEl,this.metaEl,this.activityEl,this.statsEl),s.append(l);let u=nu(`div`,`hrp-rail`);this.countEl=nu(`div`,`hrp-count`),this.chipsEl=nu(`div`,`hrp-chips`),this.deployEl=document.createElement(`button`),this.deployEl.type=`button`,this.deployEl.className=`hrp-deploy`,this.deployFillEl=nu(`div`,`hrp-deploy-fill`),this.deployLabelEl=nu(`span`,`hrp-deploy-label`),this.deployEl.append(this.deployFillEl,lu(),this.deployLabelEl),this.deployEl.addEventListener(`click`,()=>this.handlers.onDeploy()),u.append(this.countEl,this.chipsEl,this.deployEl),o.append(s,nu(`div`,`hrp-divider`),u),a.append(o),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(ru()))}render(e){let t=e.mode!==`none`&&e.leader!==null;if(t!==this.lastVisible&&(this.root.classList.toggle(`shown`,t),this.lastVisible=t),!t||!e.leader)return;let n=e.leader;this.write(this.nameEl,`lastName`,n.name),this.write(this.metaEl,`lastMeta`,iu(n)),this.write(this.activityEl,`lastActivity`,n.activity??``),this.activityEl.classList.toggle(`empty`,n.activity===null);let r=`${n.humansOnboard?`${n.humansOnboard.current}/${n.humansOnboard.max}`:``} ${n.health?`${n.health.current}/${n.health.max}`:`none`}`;r!==this.lastStats&&(this.statsEl.replaceChildren(...n.humansOnboard?[au(`HUMANS`,`${Math.round(n.humansOnboard.current)}/${n.humansOnboard.max}`)]:[],ou(n.health)),this.lastStats=r),this.write(this.countEl,`lastCount`,e.selectedCount>1?`${e.selectedCount} SELECTED`:``),this.countEl.classList.toggle(`empty`,e.selectedCount<=1),this.root.dataset.inspect=e.inspectOnly?`true`:`false`;let i=e.tallies.map(e=>`${e.typeId}:${e.count}:${+!!e.isLeader}`).join(`|`);i!==this.lastChipSignature&&(this.chipsEl.replaceChildren(...e.tallies.map(e=>this.chip(e.typeId,e.count,e.isLeader))),this.lastChipSignature=i),this.paintDeploy(e.inspectOnly?{kind:`unable`}:n.deployState)}chip(e,t,n){let r=document.createElement(`button`);r.type=`button`,r.className=n?`hrp-chip leader`:`hrp-chip`,r.title=e;let i=nu(`div`,`hrp-chip-well`);i.append(su());let a=nu(`span`,`hrp-chip-count`);return a.textContent=`×${t}`,r.append(i,a),r.addEventListener(`click`,()=>this.handlers.onIsolateType(e)),r}paintDeploy(e){let t=e.kind===`transitioning`?`transitioning:${e.to}:${Math.round(e.progress*20)}`:e.kind;t!==this.lastDeploy&&(this.lastDeploy=t,this.root.dataset.deploy=e.kind,this.deployEl.hidden=e.kind===`unable`,this.deployEl.disabled=e.kind===`transitioning`,e.kind===`transitioning`?(this.deployFillEl.style.width=`${Math.round(e.progress*100)}%`,this.deployLabelEl.textContent=e.to?`DEPLOYING`:`PACKING UP`):(this.deployFillEl.style.width=`0%`,this.deployLabelEl.textContent=e.kind===`deployed`?`DEPLOYED`:`DEPLOY`))}write(e,t,n){this[t]!==n&&(e.textContent=n,this[t]=n)}};function nu(e,t){let n=document.createElement(e);return n.className=t,n}function ru(){return Math.max(.7,Math.min(1,window.innerWidth/Ql))}function iu(e){return`${e.faction===`machines`?`MACHINES`:`ANCIENT ONES`} · ${e.role.toUpperCase()}`}function au(e,t){let n=nu(`div`,`hrp-stat`),r=nu(`span`,`hrp-stat-label`);r.textContent=e;let i=nu(`span`,`hrp-stat-value`);return i.textContent=t,n.append(r,i),n}function ou(e){let t=nu(`div`,`hrp-stat`),n=nu(`span`,`hrp-stat-label`);if(n.textContent=`HEALTH`,t.append(n),!e){let e=nu(`span`,`hrp-stat-value pending`);return e.textContent=`— M5`,t.append(e),t}let r=nu(`div`,`hrp-health`),i=Math.max(+(e.current>0),Math.floor(e.current/e.max*12));for(let e=0;e<12;e++){let t=nu(`i`,e<i?`hrp-pip on`:`hrp-pip`);r.append(t)}t.append(r);let a=nu(`span`,`hrp-stat-value`);return a.textContent=`${Math.max(0,Math.ceil(e.current))}/${e.max}`,t.append(a),t}function su(){return nu(`div`,`hrp-placeholder`)}function cu(){let e=nu(`div`,`hrp-portrait-label`);return e.textContent=`unit portrait`,e}function lu(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`width`,`22`),e.setAttribute(`height`,`22`),e.classList.add(`hrp-deploy-icon`),e.innerHTML=`<rect x="9" y="4" width="6" height="11" fill="currentColor"/>
    <rect x="5" y="17" width="14" height="1.8" fill="currentColor"/>
    <path d="M2 12 L6 8.5 V15.5 Z" fill="currentColor"/>
    <path d="M22 12 L18 8.5 V15.5 Z" fill="currentColor"/>`,e}var uu=!1;function du(){if(uu)return;uu=!0;let e=document.createElement(`style`);e.textContent=fu,document.head.append(e)}var fu=`
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
`,pu=class{handlers;root;onResize;titleEl;stateEl;humansEl;gridEl;queueRowEl;queueEl;tierEl;noticeEl;producer={kind:`unit`,id:-1};lastTitle=``;lastState=``;lastHumans=``;lastGridSignature=``;lastQueueSignature=``;lastTier=``;lastNotice=null;lastVisible=null;constructor(e,t,n){this.handlers=n,du(),vu();let r=Zl[t];this.root=mu(`div`,`hrp hrp-build`),this.root.dataset.faction=t,$l(this.root,r,`right`);let i=eu(r.cornerRight);i.classList.add(`hrp-corner`);let a=mu(`div`,`hrp-shell`),o=mu(`div`,`hrpb-head`),s=mu(`div`,`hrpb-heading`);this.titleEl=mu(`div`,`hrp-name`),this.stateEl=mu(`div`,`hrp-meta`),s.append(this.titleEl,this.stateEl);let c=mu(`div`,`hrpb-bank`),l=mu(`span`,`hrp-stat-label`);l.textContent=`HUMANS`,this.humansEl=mu(`span`,`hrpb-humans`),c.append(l,this.humansEl),o.append(s,c),this.gridEl=mu(`div`,`hrpb-grid`);let u=mu(`div`,`hrpb-foot`);this.queueRowEl=mu(`div`,`hrpb-queue-row`);let d=mu(`span`,`hrp-stat-label`);d.textContent=`QUEUE`,this.queueEl=mu(`div`,`hrpb-queue`),this.queueRowEl.append(d,this.queueEl),this.tierEl=document.createElement(`button`),this.tierEl.type=`button`,this.tierEl.className=`hrpb-tier`,this.tierEl.addEventListener(`click`,()=>this.handlers.onUnlockTier2()),u.append(this.queueRowEl,mu(`div`,`hrpb-spacer`),this.tierEl),this.noticeEl=mu(`div`,`hrpb-notice`),a.append(o,this.gridEl,u,this.noticeEl),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(ru()))}render(e){if(e.visible!==this.lastVisible&&(this.root.classList.toggle(`shown`,e.visible),this.lastVisible=e.visible),!e.visible)return;this.producer=e.producer,e.title!==this.lastTitle&&(this.titleEl.textContent=e.title,this.lastTitle=e.title),e.state!==this.lastState&&(this.stateEl.textContent=e.state,this.lastState=e.state);let t=String(Math.floor(e.humans));t!==this.lastHumans&&(this.humansEl.textContent=t,this.lastHumans=t);let n=e.producesUnits?e.producible.map(e=>`${e.typeId}:${+!!e.enabled}:${+!!e.lockedByTier}:${+!!e.unaffordable}`).join(`|`):`none`;n!==this.lastGridSignature&&(this.gridEl.classList.toggle(`empty`,!e.producesUnits),this.gridEl.replaceChildren(...e.producesUnits?e.producible.map(e=>this.tile(e)):[hu()]),this.lastGridSignature=n),this.queueRowEl.classList.toggle(`empty`,!e.producesUnits);let r=e.queue.map((e,t)=>`${e.typeId}:${t===0?Math.round(e.progress*20):0}`).join(`|`);r!==this.lastQueueSignature&&(this.queueEl.replaceChildren(...e.queue.map((e,t)=>gu(e.name,t===0?e.progress:0,e.secondsLeft,t===0))),this.lastQueueSignature=r);let i=`${e.tier2.unlocked}:${e.tier2.affordable}`;i!==this.lastTier&&(this.tierEl.hidden=e.tier2.unlocked,this.tierEl.disabled=!e.tier2.affordable,this.tierEl.textContent=`UNLOCK TIER 2 · ${e.tier2.cost}`,this.lastTier=i),e.notice!==this.lastNotice&&(this.noticeEl.textContent=e.notice??``,this.noticeEl.classList.toggle(`shown`,e.notice!==null),this.lastNotice=e.notice)}tile(e){let t=document.createElement(`button`);t.type=`button`,t.className=`hrpb-tile`,t.disabled=!e.enabled&&!(e.action===`build`&&e.unaffordable&&!e.lockedByTier),t.title=e.lockedByTier?`${e.name} — requires Tier ${e.tier}`:e.unaffordable?`${e.name} — costs ${e.cost} Humans`:e.name,e.lockedByTier&&(t.dataset.locked=`tier`);let n=mu(`div`,`hrpb-well`);if(e.lockedByTier){let t=mu(`span`,`hrpb-tier-badge`);t.textContent=`TIER ${e.tier}`,n.append(t)}else n.append(mu(`div`,`hrp-placeholder`));let r=mu(`span`,`hrpb-name`);r.textContent=e.name;let i=mu(`div`,`hrpb-costs`),a=mu(`span`,e.unaffordable?`hrpb-cost short`:`hrpb-cost`);a.textContent=String(e.cost);let o=mu(`span`,`hrpb-time`);return o.textContent=`${e.seconds}s`,i.append(a,o),t.append(n,r,i),t.addEventListener(`click`,()=>e.action===`build`?this.handlers.onBuild(this.producer,e.typeId):this.handlers.onProduce(this.producer,e.typeId)),t}};function mu(e,t){let n=document.createElement(e);return n.className=t,n}function hu(){let e=mu(`div`,`hrpb-note`);return e.textContent=`Builds no units. Harvesters deliver here; production is the factory’s.`,e}function gu(e,t,n,r){let i=mu(`div`,r?`hrpb-slot active`:`hrpb-slot`);if(i.title=e,r){let e=mu(`div`,`hrpb-slot-fill`);e.style.height=`${Math.round(t*100)}%`;let r=mu(`span`,`hrpb-slot-label`);r.textContent=`${n.toFixed(1)}s`,i.append(e,r)}return i}var _u=!1;function vu(){if(_u)return;_u=!0;let e=document.createElement(`style`);e.textContent=yu,document.head.append(e)}var yu=`
.hrp-build .hrp-shell { width: 600px; box-sizing: border-box; }
.hrpb-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 22px 10px 40px;
  border-bottom: 1px solid color-mix(in srgb, var(--panel-edge) 45%, transparent);
}
.hrpb-heading { display: flex; flex-direction: column; gap: 3px; }
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
`,bu=1920,xu=5,Su=4,Cu=30,wu=class{onCommand;root;onResize;skin;humansTrough;meterTroughs;divider;clockEl;alertEl;bannerEl;onBannerTransitionEnd;buttons=new Map;lastClock=``;lastBanner=null;lastAlert=null;constructor(e,t,n){this.onCommand=n,this.skin=Qc[t.faction],Ru(),this.root=Eu(`div`,`hud`),this.root.dataset.faction=t.faction,this.root.style.setProperty(`--line`,this.skin.line),this.root.style.setProperty(`--chrome`,this.skin.chrome),this.root.style.setProperty(`--plate`,this.skin.plate),this.root.style.setProperty(`--on-plate`,this.skin.onPlate),this.root.style.setProperty(`--pip-on`,this.skin.pipOn),this.root.style.setProperty(`--pip-gap`,this.skin.pipGap),this.root.style.setProperty(`--pip-off`,this.skin.pipOff),this.root.style.setProperty(`--pip-off-gap`,this.skin.pipOffGap),this.root.style.setProperty(`--accent`,this.skin.accent),this.root.style.setProperty(`--label`,this.skin.label),this.root.style.setProperty(`--warn`,this.skin.warn),this.root.style.setProperty(`--go`,this.skin.go),this.root.style.setProperty(`--icon-stroke`,this.skin.outline??`transparent`),this.root.style.setProperty(`--hud-font`,this.skin.font),this.root.style.setProperty(`--band`,this.skin.band),this.root.style.setProperty(`--on-band`,this.skin.onBand),this.root.style.setProperty(`--rail`,`${this.skin.railPx}px`),this.root.style.setProperty(`--divider`,this.skin.divider),this.root.style.setProperty(`--radius`,this.skin.radius),this.root.style.setProperty(`--outline`,this.skin.outline??this.skin.line),this.root.style.setProperty(`--chamfer`,this.skin.chamferPx>0?`polygon(${this.skin.chamferPx}px 0, calc(100% - ${this.skin.chamferPx}px) 0, 100% 100%, 0 100%)`:`none`);let r=Eu(`div`,`hud-band`);r.append(ju(this.skin,`left`));let i=Eu(`div`,`hud-meters`),a=Eu(`div`,`hud-meter`);a.append(Du(`HUMANS`)),this.humansTrough=Ou(t.humans.trough.pips),a.append(this.humansTrough.el),i.append(a);let o=Eu(`div`,`hud-meter`);o.append(Du(t.meter.label)),this.divider=Eu(`div`,`hud-divider`);let s=[];t.meter.troughs.forEach((e,t)=>{t>0&&o.append(this.divider);let n=Ou(e.pips);s.push(n),o.append(n.el)}),this.meterTroughs=s,i.append(o),r.append(i,ju(this.skin,`right`)),this.root.append(r);let c=Eu(`div`,`hud-island`);c.append(Mu(Nu())),this.alertEl=Mu(Pu()),this.alertEl.classList.add(`hud-alert`),c.append(this.alertEl),this.clockEl=Eu(`div`,`hud-time`),c.append(this.clockEl),this.root.append(c),this.bannerEl=Eu(`div`,`hud-banner`),this.onBannerTransitionEnd=e=>{e.propertyName===`opacity`&&!this.bannerEl.classList.contains(`shown`)&&(this.bannerEl.textContent=``)},this.bannerEl.addEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.append(this.bannerEl);let l=Eu(`div`,`hud-column`),u=Eu(`div`,`hud-collapse`);u.append(Au(this.skin.badge)),l.append(u,Eu(`div`,`hud-spine`));let d=Eu(`div`,`hud-cluster`);for(let e of t.commands){let t=document.createElement(`button`);t.className=`hud-button`,t.type=`button`,t.title=e.label,t.setAttribute(`aria-label`,e.label),t.innerHTML=Fu(e.id,this.skin),t.addEventListener(`click`,()=>this.onCommand(e.id)),this.buttons.set(e.id,t),d.append(t)}l.append(d),this.root.append(l),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize),this.render(t)}dispose(){window.removeEventListener(`resize`,this.onResize),this.bannerEl.removeEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.remove()}rescale(){let e=Math.max(.7,Math.min(1,window.innerWidth/bu));this.root.style.setProperty(`--hud-scale`,String(e))}render(e){Tu(this.humansTrough,e.humans.trough),e.meter.troughs.forEach((e,t)=>{let n=this.meterTroughs[t];n&&Tu(n,e)}),this.divider.classList.toggle(`lit`,e.meter.dividerLit),e.clock!==this.lastClock&&(this.clockEl.textContent=e.clock,this.lastClock=e.clock),e.alert!==this.lastAlert&&(this.alertEl.classList.toggle(`on`,e.alert),this.lastAlert=e.alert),e.banner!==this.lastBanner&&(e.banner!==null&&(this.bannerEl.textContent=e.banner),this.bannerEl.classList.toggle(`shown`,e.banner!==null),this.lastBanner=e.banner);for(let t of e.commands){let e=this.buttons.get(t.id);e&&(e.disabled=!t.enabled)}}};function Tu(e,t){e.pips.forEach((e,n)=>{let r=n<t.filled;e.classList.toggle(`on`,r),e.classList.toggle(`accent`,r&&t.accent)})}function Eu(e,t){let n=document.createElement(e);return n.className=t,n}function Du(e){let t=Eu(`div`,`hud-label`);return t.textContent=e,t}function Ou(e){let t=Eu(`div`,`hud-trough`),n=[];for(let r=0;r<e;r++){let e=Eu(`i`,`hud-pip`);n.push(e),t.append(e)}return{el:t,pips:n}}function ku(e,t,n){let r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${e} ${t}`),r.setAttribute(`width`,String(e)),r.setAttribute(`height`,String(t)),r.innerHTML=n,r}function Au(e){return ku(e.width,e.height,e.inner)}function ju(e,t){let n=Au(e.cap);return n.classList.add(`hud-cap`,t),n}function Mu(e){let t=Eu(`div`,`hud-plate`);return t.append(e),t}function Nu(){return ku(22,22,`<circle cx="11" cy="11" r="8" fill="none" stroke="var(--on-plate)" stroke-width="2"/>
     <path d="M11 11 V5 A6 6 0 0 1 17 11 Z" fill="var(--on-plate)"/>`)}function Pu(){return ku(22,22,`<rect x="9" y="4" width="4" height="9" rx="1.4" fill="currentColor"/>
     <rect x="8.5" y="15" width="5" height="3.2" rx="1" fill="currentColor"/>`)}function Fu(e,t){switch(e){case`primary`:return`<svg viewBox="0 0 ${t.primaryIcon.width} ${t.primaryIcon.height}"
        width="${Cu}" height="${Cu}">${t.primaryIcon.inner}</svg>`;case`regroup`:return Iu(`M12 11 L8.5 6.5 H10.8 V3 H13.2 V6.5 H15.5 Z`,`var(--warn)`,45);case`scatter`:return Iu(`M12 3 L15.5 7.5 H13.2 V11 H10.8 V7.5 H8.5 Z`,`var(--go)`,0);case`cancel`:return`<svg viewBox="0 0 24 24" width="${Cu}" height="${Cu}">
        <circle cx="12" cy="12" r="9" fill="var(--icon-stroke)" stroke="#ffffff" stroke-width="2"/>
        <path d="M8.4 8.4 L15.6 15.6 M15.6 8.4 L8.4 15.6" stroke="#ffffff" stroke-width="2.6"
              stroke-linecap="round"/>
      </svg>`}}function Iu(e,t,n){return`<svg viewBox="0 0 24 24" width="${Cu}" height="${Cu}">
    <g transform="rotate(${n} 12 12)">${[0,90,180,270].map(n=>`<path d="${e}" fill="${t}" stroke="var(--icon-stroke)" stroke-width="1.1" stroke-linejoin="round" transform="rotate(${n} 12 12)"/>`).join(``)}</g>
  </svg>`}var Lu=!1;function Ru(){if(Lu)return;Lu=!0;let e=document.createElement(`style`);e.textContent=zu,document.head.append(e)}var zu=`
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
  gap: ${Su}px;
  align-items: stretch;
  height: 17px;
  padding: 2px 3px;
  background: var(--pip-off-gap);
  border: 1px solid rgba(255, 255, 255, 0.42);
}
.hud-pip {
  width: ${xu}px;
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
`;function Bu(e,t,n){if(!(t>0)||n<=0||e<=0)return 0;if(e>=t)return n;let r=Math.floor(e/t*n);return Math.min(Math.max(r,1),n-1)}function Vu(e){let t=Math.floor(e/30),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`}function Hu(e){let{segments:t,pipsPerSegment:n}=Co,r=[];for(let i=0;i<t;i++){let t=e-i*n;r.push({pips:n,filled:Math.min(Math.max(Math.floor(t),0),n),accent:i>0})}return r}function Uu({world:e,selected:t,banner:n}){let r=wo[e.playerFaction],{humans:i,humansCap:a,charge:o,chargeCap:s}=e.resources,c=t>0;return{faction:r.id,factionName:r.name,humans:{value:i,cap:a,trough:{pips:Co.humansPips,filled:Bu(i,a,Co.humansPips),accent:!1}},meter:{label:r.meterLabel,value:o,cap:s,segmentsReady:e.resources.segmentsReady,troughs:Hu(o),dividerLit:o>Co.pipsPerSegment},clock:Vu(e.tick),alert:e.army.units.some(e=>e.attackCooldown>0),selected:t,commands:[{id:`primary`,label:r.primaryOrder,enabled:r.id===`machines`&&c},{id:`regroup`,label:`Regroup — unresolved reading`,enabled:!1},{id:`scatter`,label:`Scatter — unresolved reading`,enabled:!1},{id:`cancel`,label:`Stop`,enabled:c}],banner:n}}function Wu(e,t){if(!t)return{kind:`unable`};if(e.deployTimer>0){let t=Math.max(Oo,1);return{kind:`transitioning`,to:e.deployTarget,stepsLeft:e.deployTimer,progress:Math.min(Math.max(1-e.deployTimer/t,0),1)}}return e.deployed?{kind:`deployed`}:{kind:`mobile`}}function Gu(e){return e.harvestingBuildingId===null?e.harvestingCrowdId===null?e.cargo>0?`Carrying ${Math.round(e.cargo)}`:e.unreachable?`Could not reach its goal`:e.path.length>0?`Moving`:null:`Harvesting a street crowd`:`Harvesting`}function Ku(e){let t=us(e.typeId);return{typeId:t.id,name:t.name,faction:t.faction,role:t.role,cost:t.cost,health:{current:e.health,max:t.health},humansOnboard:t.faction===`machines`&&t.role===`harvester`?{current:e.cargo,max:60}:null,deployState:Wu(e,!!t.canDeploy),activity:Gu(e)}}function qu(e,t,n){let r=e.playerFaction;if(n&&e.army.typeOf(n).faction!==r)return{mode:`single`,faction:r,selectedCount:1,inspectOnly:!0,leader:Ku(n),tallies:[]};let i=t.list(),a=t.primary(),o=a===void 0?void 0:e.army.get(a);if(!o)return{mode:`none`,faction:r,selectedCount:0,inspectOnly:!1,leader:null,tallies:[]};let s=new Map;for(let t of i){let n=e.army.get(t);n&&s.set(n.typeId,(s.get(n.typeId)??0)+1)}let c=[...s.entries()].map(([e,t])=>({typeId:e,name:us(e).name,count:t,isLeader:e===o.typeId})).sort((e,t)=>t.count-e.count||e.typeId.localeCompare(t.typeId));return{mode:i.length>1?`multi`:`single`,faction:r,selectedCount:i.length,inspectOnly:!1,leader:Ku(o),tallies:i.length>1?c:[]}}var Ju={visible:!1,faction:`machines`,producer:{kind:`unit`,id:-1},title:``,state:``,humans:0,producesUnits:!1,producible:[],queue:[],tier2:{unlocked:!1,cost:ko.tier2Cost,affordable:!1},notice:null};function Yu(e,t,n){if(!t)return Ju;let r=us(t.typeId);if(!r.producesUnits&&!r.constructionTypes||r.faction!==e.playerFaction)return Ju;let i=e.resources.humans,a=e.constructionSites.some(e=>e.builderId===t.id),o=r.constructionTypes?cs.filter(e=>r.constructionTypes?.includes(e.id)).map(t=>({action:`build`,typeId:t.id,name:t.name,cost:e.freeProduction?0:t.cost,seconds:Math.round((t.constructionSteps??0)/30),tier:t.tier,lockedByTier:!1,unaffordable:!e.freeProduction&&i<t.cost,enabled:!a&&(e.freeProduction||i>=t.cost)})):cs.filter(e=>r.productionTypes?.includes(e.id)??(e.faction===r.faction&&e.role!==`harbinger`&&!e.processesHumans&&!e.producesUnits)).map(n=>({action:`produce`,typeId:n.id,name:n.name,cost:e.freeProduction?0:n.cost,seconds:Math.round(n.buildSteps/30),tier:n.tier,lockedByTier:n.tier>e.techTier,unaffordable:!e.freeProduction&&i<n.cost,enabled:n.tier<=e.techTier&&(e.freeProduction||i>=n.cost)&&t.deployed&&t.deployTimer===0})).sort((e,t)=>e.tier-t.tier||e.cost-t.cost);return{visible:!0,faction:r.faction,producer:{kind:`unit`,id:t.id},title:r.constructionTypes?`${r.name} — Build`:r.name,state:r.constructionTypes?a?`SUMMONING STRUCTURE`:`CONSTRUCTION AVAILABLE`:t.deployTimer>0?t.deployTarget?`DEPLOYING`:`PACKING UP`:t.deployed?t.queue.length?`DEPLOYED · PRODUCING`:`DEPLOYED`:`MOBILE — CANNOT PRODUCE`,humans:i,producesUnits:!0,producible:o,queue:t.queue.map((e,t)=>({typeId:e.typeId,name:us(e.typeId).name,progress:t===0?1-e.remainingSteps/Math.max(us(e.typeId).buildSteps,1):0,secondsLeft:e.remainingSteps/30})),tier2:{unlocked:e.techTier>=2,cost:ko.tier2Cost,affordable:i>=ko.tier2Cost},notice:n}}function Xu(e){return e.winner?e.winner===e.playerFaction?{title:`VICTORY`,body:`The ${wo[So(e.winner)].name} Harbinger is destroyed. The shard is yours.`,tone:`won`}:{title:`DEFEAT`,body:`Your Harbinger is destroyed. The ${wo[e.winner].name} hold the shard.`,tone:`lost`}:{title:`STALEMATE`,body:`Both Harbingers fell on the same step. Neither side can command what is left.`,tone:`drawn`}}var Zu={machines:[`Humans in, Progress out. We don't do feelings, we do throughput.`,`Collect. Convert. Repeat. It's not cruelty, it's an assembly line.`,`No detours, no snacking. Just humans on a conveyor belt to somewhere worse.`,`Efficiency is a love language.`],ancients:[`Chant a little, eat a lot.`,`Every summoning circle doubles as a dinner table.`,`The stars aligned. So did our appetite.`,`Insanity is a side effect. Also the main course.`]};function Qu(e){let t=Zu[e];return t[Math.floor(Math.random()*t.length)]}var $u={machines:`ENERGY`,ancients:`INSANITY`},ed=class{root;constructor(e,t){sd(),this.root=td(`div`,`menu`),this.root.append(ad());let n=td(`div`,`menu-panel`),r=document.createElement(`h1`);r.className=`menu-title`,r.innerHTML=`HUMAN<br>RESOURCES`,n.append(r);let i=td(`div`,`menu-tagline`);i.append(td(`span`,`menu-rule`));let a=td(`span`,``);a.textContent=`Choose your apocalypse`,i.append(a),n.append(i);let o=td(`div`,`menu-columns`),s=td(`div`,`menu-cards`);for(let e of[`machines`,`ancients`])s.append(this.buildCard(e,t.onStart));o.append(s),o.append(this.buildActions(t)),n.append(o),this.root.append(n),e.append(this.root)}buildCard(e,t){let n=wo[e],r=Qc[e],i=document.createElement(`button`);i.type=`button`,i.className=`menu-card`,i.dataset.faction=e,i.style.setProperty(`--card-line`,r.line),i.style.setProperty(`--card-font`,r.font),i.style.setProperty(`--card-pip-on`,r.pipOn),i.style.setProperty(`--card-pip-gap`,r.pipGap),i.style.setProperty(`--card-pip-off`,r.pipOff),i.style.setProperty(`--card-accent`,r.accent),e===`ancients`?(i.style.setProperty(`--card-fill`,r.plate),i.style.setProperty(`--card-ink`,`#4a3520`),i.style.setProperty(`--card-body`,`#20180e`),i.style.setProperty(`--card-label`,`#2f2214`)):(i.style.setProperty(`--card-fill`,`rgba(20, 26, 24, 0.55)`),i.style.setProperty(`--card-ink`,`#f2fff6`),i.style.setProperty(`--card-body`,`#dff3ea`),i.style.setProperty(`--card-label`,r.line));let a=td(`div`,`menu-card-head`),o=td(`div`,`menu-card-name`);o.textContent=n.name,a.append(o,id(e)),i.append(a);let s=td(`div`,`menu-card-meter`),c=td(`span`,`menu-card-meter-label`);c.textContent=$u[e],s.append(c,rd(8,e===`ancients`?6:5,e===`ancients`?2:0)),i.append(s);let l=td(`div`,`menu-card-copy`);return l.textContent=Qu(e),i.append(l),i.addEventListener(`click`,()=>t(e)),i}buildActions(e){let t=td(`nav`,`menu-actions`);if(e.saved){let n=wo[e.saved.faction];t.append(nd(`Resume`,`${n.name} · ${e.saved.clock}`,e.onResume))}let n=e.slotCount??0;if(n>0&&t.append(nd(`Select save`,n===1?`1 slot`:`${n} slots`,e.onSelectSave)),t.append(nd(`Settings`,``,e.onSettings)),e.onExit&&t.append(nd(`Exit`,``,e.onExit,`quiet`)),!e.saved&&n===0){let e=td(`div`,`menu-note`);e.textContent=`No saved match`,t.prepend(e)}return t}dispose(){this.root.remove()}};function td(e,t){let n=document.createElement(e);return n.className=t,n}function nd(e,t,n,r=``){let i=document.createElement(`button`);i.type=`button`,i.className=r?`menu-action ${r}`:`menu-action`;let a=td(`span`,`menu-action-label`);a.textContent=e;let o=td(`span`,`menu-action-meta`);return o.textContent=t,i.append(a,o),i.addEventListener(`click`,n),i}function rd(e,t,n){let r=td(`div`,`menu-trough`);for(let i=0;i<e;i++){let e=td(`i`,`menu-pip`);i<t&&e.classList.add(n>0&&i>=t-n?`accent`:`on`),r.append(e)}return r}function id(e){let t=Qc[e],n=t.cap,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,e===`ancients`?`78`:`92`),r.setAttribute(`height`,e===`ancients`?`42`:`52`),r.classList.add(`menu-card-cap`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function ad(){let e=[34,52,41,68,47,82,58,39,71,50,88,44,63,36,76,55,42,66,48,80],t=100/e.length,n=e.map((e,n)=>`<rect x="${n*t}" y="${100-e}" width="${t+.3}" height="${e}"/>`).join(``),r=td(`div`,`menu-skyline`);return r.innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <g fill="#050302">${n}</g>
  </svg>`,r}var od=!1;function sd(){if(od)return;od=!0;let e=document.createElement(`style`);e.textContent=cd,document.head.append(e)}var cd=`
.menu, .fe {
  position: fixed;
  inset: 0;
  z-index: 40;
  overflow: hidden;
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
  height: 100%;
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
`,ld=[[`Pan`,`WASD / arrows · middle drag`],[`Zoom`,`wheel`],[`Select · box select`,`left drag`],[`Move order`,`right click`],[`Attack-move`,`A, then left click`],[`Add to selection`,`shift + click`],[`Control group`,`shift + digit`],[`Clear selection · exit`,`Esc`],[`Stop`,`Q`],[`Quick save · load`,`F5 · F9`]],ud=class{root;constructor(e,t,n){Dd(),this.root=md(`SETTINGS`);let r=$(`div`,`fe-body`);r.append(hd(`Unit models`,`Regular models improve FPS performance. Detailed models look better, at the cost of performance.`,yd(t.modelMode,n.onModelMode)),hd(`Machines colour`,`Recolours Machine units and structures. Applies to your next match.`,gd(`machines`,t.colourVariant.machines,n.onColourVariant)),hd(`Ancients colour`,`Recolours Ancient units and structures. Applies to your next match.`,gd(`ancients`,t.colourVariant.ancients,n.onColourVariant)),hd(`Diagnostic overlay`,`fps, sim Hz, blocked and stalled counts, nav reachability probe.`,vd(t.overlayVisible,n.onToggleOverlay)),hd(`City lighting`,`Warm directional sunlight and cool ambient fill. Off restores the original even lighting rig.`,vd(t.cityLighting,n.onToggleCityLighting)),hd(`Enhanced shadows`,`Soft mapped shadows on city geometry. Off restores the original projected-shadow treatment.`,vd(t.enhancedShadows,n.onToggleEnhancedShadows)),hd(`Ambient occlusion`,`Subtle local darkening at building bases and in narrow city gaps.`,vd(t.ambientOcclusion,n.onToggleAmbientOcclusion)));let i=$(`section`,`fe-section`),a=$(`div`,`fe-row-title`);a.textContent=`Controls`;let o=$(`div`,`fe-row-sub`);o.textContent=`Reference only. Rebinding needs an options system that does not exist yet.`;let s=$(`div`,`fe-controls`);for(let[e,t]of ld){let n=$(`div`,`fe-control`),r=$(`span`,``);r.textContent=e;let i=$(`span`,`fe-keys`);i.textContent=t,n.append(r,i),s.append(n)}i.append(a,o,s),r.append(i),this.root.append(r,Td(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},dd=class{root;constructor(e,t,n){Dd(),this.root=md(`SELECT SAVE`,t.length===1?`1 SLOT`:`${t.length} SLOTS`);let r=$(`div`,`fe-slots`);if(t.length===0){let e=$(`div`,`fe-empty`);e.textContent=`No saved matches`,r.append(e)}t.forEach((e,t)=>r.append(bd(e,t===0,n)));let i=$(`p`,`fe-note`);i.textContent=`One slot for now: F5 always writes “quick”. Naming and multiple slots need a keyed-slot scheme in saveStore.ts — the envelope in sim/save.ts does not need to change.`,this.root.append(r,i,Td(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},fd=class{root;onKey;constructor(e,t,n){Dd(),this.root=$(`div`,`fe-scrim`);let r=$(`div`,`fe-dialog`),i=$(`h2`,`fe-dialog-title`);i.textContent=`ABANDON MATCH?`;let a=$(`p`,`fe-dialog-body`);a.textContent=`Returns to the title screen. The match is not saved unless you save it first.`;let o=$(`p`,`fe-dialog-meta`);o.textContent=t?`Last quick save: ${t}`:`No quick save in this session.`;let s=$(`div`,`fe-dialog-actions`);s.append(wd(`Save and exit`,`primary`,n.onSaveAndExit),wd(`Exit anyway`,`danger`,n.onExitAnyway),wd(`Cancel`,`ghost`,n.onCancel)),r.append(i,a,o,s),this.root.append(r),e.append(this.root),this.onKey=e=>{e.key===`Escape`&&n.onCancel()},window.addEventListener(`keydown`,this.onKey)}dispose(){window.removeEventListener(`keydown`,this.onKey),this.root.remove()}},pd=class{root;constructor(e,t,n){Dd(),this.root=$(`div`,`fe-scrim`);let r=Xu(t),i=$(`div`,r.tone===`drawn`?`fe-dialog`:`fe-dialog ${r.tone}`),a=$(`div`,`fe-end-head`),o=$(`h2`,`fe-dialog-title fe-end-title`);o.textContent=r.title,a.append(o);let s=$(`p`,`fe-dialog-body`);s.textContent=r.body;let c=$(`div`,`fe-dialog-actions`);c.append(wd(`Play again`,`primary`,n.onPlayAgain),wd(`Back to menu`,`ghost`,n.onBackToMenu)),i.append(a,s,c),this.root.append(i),e.append(this.root)}dispose(){this.root.remove()}};function $(e,t){let n=document.createElement(e);return n.className=t,n}function md(e,t=``){let n=$(`div`,`fe`),r=$(`div`,`fe-head`),i=document.createElement(`h1`);if(i.className=`menu-title fe-title`,i.textContent=e,r.append(i),t){let e=$(`span`,`fe-head-meta`);e.textContent=t,r.append(e)}return n.append(r),n}function hd(e,t,n){let r=$(`div`,`fe-row`),i=$(`div`,``),a=$(`div`,`fe-row-title`);a.textContent=e;let o=$(`div`,`fe-row-sub`);return o.textContent=t,i.append(a,o),r.append(i,n),r}function gd(e,t,n){let r=$(`div`,`fe-swatches`);return nt(e).forEach((i,a)=>{let o=a,s=document.createElement(`button`);s.type=`button`,s.className=t===o?`fe-swatch on`:`fe-swatch`,s.style.setProperty(`--swatch-colour`,_d(i)),s.setAttribute(`aria-label`,`${wo[e].name} colour option ${a+1}`),s.addEventListener(`click`,()=>n(e,o)),r.append(s)}),r}function _d(e){return`#${e.toString(16).padStart(6,`0`)}`}function vd(e,t){let n=document.createElement(`button`);return n.type=`button`,n.className=e?`fe-switch on`:`fe-switch`,n.setAttribute(`role`,`switch`),n.setAttribute(`aria-checked`,String(e)),n.append($(`span`,`fe-switch-knob`)),n.addEventListener(`click`,()=>t(!e)),n}function yd(e,t){let n=$(`div`,`fe-swatches`);for(let r of[`regular`,`detailed`]){let i=document.createElement(`button`);i.type=`button`,i.className=e===r?`fe-mode-choice on`:`fe-mode-choice`;let a=$(`span`,`fe-mode-choice-label`);a.textContent=r===`regular`?`Regular`:`Detailed`,i.append(a),i.setAttribute(`aria-pressed`,String(e===r)),i.addEventListener(`click`,()=>t(r)),n.append(i)}return n}function bd(e,t,n){let r=$(`div`,e.readable?t?`fe-slot primary`:`fe-slot`:`fe-slot broken`),i=$(`div`,`fe-slot-badge`);e.readable&&e.faction?(i.dataset.faction=e.faction,i.style.setProperty(`--badge-line`,Qc[e.faction].line),i.append(Sd(e.faction))):i.textContent=`!`;let a=$(`div`,`fe-slot-text`),o=$(`div`,`fe-slot-name`);o.textContent=e.readable&&e.faction?`${wo[e.faction].name} — ${e.slot}`:`Unreadable — ${e.slot}`;let s=$(`div`,`fe-slot-meta`);return s.textContent=e.readable?`${e.clock} · tick ${e.tick.toLocaleString(`en-GB`)} · saved ${Cd(e.savedAtMs)}`:`Written by an older build. Old versions are refused, not migrated.`,a.append(o,s),r.append(i,a),e.readable&&r.append(wd(`Load`,t?`primary`:`ghost`,()=>n.onLoad(e.slot))),r.append(xd(()=>n.onDelete(e.slot))),r}function xd(e){let t=document.createElement(`button`);t.type=`button`,t.className=`fe-button icon`,t.title=`Delete this save`,t.textContent=`×`;let n=!1,r=()=>{n&&(n=!1,t.classList.remove(`armed`),t.textContent=`×`,t.title=`Delete this save`)};return t.addEventListener(`click`,()=>{if(n){e();return}n=!0,t.classList.add(`armed`),t.textContent=`Delete?`,t.title=`Click again to delete`}),t.addEventListener(`pointerleave`,r),t.addEventListener(`blur`,r),t}function Sd(e){let t=Qc[e],n=t.primaryIcon,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,`44`),r.setAttribute(`height`,`44`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function Cd(e){let t=Math.max(0,Math.round((Date.now()-e)/1e3));if(t<60)return`just now`;let n=Math.round(t/60);if(n<60)return`${n} minute${n===1?``:`s`} ago`;let r=Math.round(n/60);if(r<24)return`${r} hour${r===1?``:`s`} ago`;let i=Math.round(r/24);return i===1?`yesterday`:`${i} days ago`}function wd(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`fe-button ${t}`,r.textContent=e,r.addEventListener(`click`,n),r}function Td(e){let t=$(`div`,`fe-footer`);return t.append(wd(`Back`,`ghost`,e)),t}var Ed=!1;function Dd(){if(Ed)return;Ed=!0;let e=document.createElement(`style`);e.textContent=cd+Od,document.head.append(e)}var Od=`
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

.fe-mode-choice {
  display: grid;
  place-items: center;
  min-width: 112px;
  height: 42px;
  padding: 0 16px;
  box-sizing: border-box;
  cursor: pointer;
  background: transparent;
  border: 2px solid rgba(255, 226, 195, 0.5);
  border-radius: 21px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  color: #ffcf9a;
}
.fe-mode-choice:hover, .fe-mode-choice:focus-visible { border-color: #ffe2ad; color: #fffdf7; outline: none; }
.fe-mode-choice.on { background: #ffbd52; border-color: #ffe2ad; color: #1b1005; }
.fe-mode-choice-label { display: block; transform: translateY(1px); }

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
.fe-button:hover, .fe-button:focus-visible { border-color: #ffbd52; color: #fffdf7; outline: none; }
.fe-button.primary { background: #ffbd52; border-color: #ffe2ad; color: #1b1005; font-weight: 700; }
.fe-button.primary:hover { background: #ffd188; color: #1b1005; }
.fe-button.danger { border-color: rgba(230, 72, 61, 0.8); color: #f0938b; }
.fe-button.danger:hover { background: rgba(230, 72, 61, 0.15); border-color: #e6483d; color: #fff; }
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
`,kd=class{windowSize;samples=[];constructor(e=90){this.windowSize=e}add(e){e<=0||!Number.isFinite(e)||(this.samples.push(e),this.samples.length>this.windowSize&&this.samples.shift())}get sampleCount(){return this.samples.length}get fps(){if(this.samples.length===0)return 0;let e=this.samples.reduce((e,t)=>e+t,0);return this.samples.length/e*1e3}get worstFrameMs(){return this.samples.length===0?0:Math.max(...this.samples)}get medianFrameMs(){if(this.samples.length===0)return 0;let e=[...this.samples].sort((e,t)=>e-t);return e[Math.floor(e.length/2)]??0}get missedVsyncCount(){let e=this.medianFrameMs;if(e<=0)return 0;let t=e*1.5,n=0;for(let e of this.samples)e>t&&n++;return n}},Ad=60,jd=[{id:`dev-controls`,label:`Dev Controls`},{id:`statistics`,label:`Statistics`}],Md=class{el;activeTab=`dev-controls`;constructor(e){this.el=e,this.el.addEventListener(`pointerdown`,e=>{let t=e.target?.closest(`[data-overlay-tab]`);!t||!Nd(t.dataset.overlayTab)||(this.setActiveTab(t.dataset.overlayTab),t.focus())})}render(e,t){let n=t.medianFrameMs>0?1e3/t.medianFrameMs:0,r=t.missedVsyncCount,i=r>0?`${r} missed vsync / ${t.sampleCount} frames`:n>=59?`meets ${Ad} fps target`:`vsync-limited at ~${n.toFixed(1)} Hz`,a=e.groups.length>0?e.groups.join(`,`):`—`,[o=``,s=``,c=``,l=``,u=``,d=``,f=``,p=``]=[`<b>HUMAN RESOURCES</b>  ${e.battlefield?`BATTLE PLAYGROUND`:`M5`} · playing ${e.faction}`,``,`render     ${e.fps.toFixed(1)} fps  (${i})`,`frame      median ${t.medianFrameMs.toFixed(1)} ms · worst ${t.worstFrameMs.toFixed(1)} ms`,...e.detailed?[`detailed  ${e.detailed.drawCalls} draw calls · ${e.detailed.triangles.toLocaleString()} triangles`,`models    ${e.detailed.units.loadedModels} loaded · ${e.detailed.units.loadingModels} loading · ${e.detailed.units.failedModels} failed`,`detail    ${e.detailed.units.visible} visible · ${e.detailed.units.selection} selection · ${e.detailed.units.occlusion} occlusion · ${e.detailed.units.fallbacks} fallback`]:[],`sim        ${e.simHz.toFixed(2)} Hz   step ${e.stepCount}`,`alpha      ${e.alpha.toFixed(3)}`,`dropped    ${e.droppedMs.toFixed(0)} ms sim time`,``,`units      ${e.units}   moving ${e.unitsMoving}   selected ${e.selected}`,`blocked    ${e.unitsBlocked}   stalled ${e.unitsStalled}   short of goal ${e.unitsUnreached}`,`groups     ${a}`,`paths      ${e.pathsTotal} searched · ${e.pathsQueued} queued`,``,`nav        ${e.navCells} cells   ${e.navRebuilds} local rebuilds`,`rebuild    ${e.navLastRebuildCells} cells in ${e.navRebuildMs.toFixed(2)} ms`,`passable   small ${(e.smallPassable*100).toFixed(1)}% · large ${(e.largePassable*100).toFixed(1)}%`,`reach      small ${(e.reachSmall*100).toFixed(1)}% · large ${(e.reachLarge*100).toFixed(1)}% of the shard`,`at focus   small ${Pd(e.atFocusSmall)} · large ${Pd(e.atFocusLarge)}`,`           (measured where the camera was when last probed — P re-probes)`,``,`camera     ${e.distance.toFixed(0)} m   pitch ${e.pitchDeg.toFixed(1)}°`,`zoom       ${(e.zoomFraction*100).toFixed(0)}%`,`focus      x ${e.focusX.toFixed(0)}  z ${e.focusZ.toFixed(0)}`,``,`city       ${e.cityBuildings} buildings   seed ${e.seed}`,`state      intact ${e.cityIntact} · damaged ${e.cityDamaged} · rubble ${e.cityRubble}`,`population ${Math.round(e.populationRemaining)} / ${e.populationTotal} humans left in the city`,`displaced  ${Math.round(e.civilianHumans)} humans in the street · ${e.civilianCrowds} crowds`,`           (damage must move humans here, not delete them)`,`           building occupancy indicators ${e.populationLabels?`on`:`off`}   (I toggles; harvester selection)`,``,`humans     ${Math.floor(e.humans)} / ${e.humansCap}   ${e.humansPerMinute.toFixed(0)}/min`,`charge     ${Math.floor(e.charge)} / ${e.chargeCap} pips · ${e.chargeSegments} banked   ${e.chargePerMinute.toFixed(1)}/min`,`in transit ${Math.round(e.cargoInTransit)} carried   ${e.harvesting} harvesting · ${e.harvestIdle} idle`,`           (Machines sawtooth as they haul · Ancient Ones must read 0)`,`           (idle = standing order, nothing within retarget range)`,`tech       tier ${e.techTier}   ${e.structures} structures   ${e.queued} queued`,`deployed   ${e.unitsDeployed} settled · ${e.unitsDeploying} transforming`,``,`WASD pan · wheel zoom · drag select · right-click move`,`shift+click add · digit recall group · shift+digit assign`,`X damage nearest · Z raze at focus · B cycle all states · P re-probe`,`select harvester · click building to harvest · E harvest at focus`,`R deploy selected · V deploy factory`,`F produce Tier 1 · G produce Tier 2 · T unlock Tier 2`,`C build economy structure · M build Machine factory`,`H +humans · J +charge   (debug tuning)`,`O hand player side to AI · shift+O opponent · F cycle simulation speed`,`[ previous seed · ] next seed`,`F5 quick save · F9 quick load`,...e.battlefield?[`battle playground: 1 switch to Machines · 2 switch to Ancients`]:[]].join(`
`).split(`

`),m=f.split(`
`),h=m.splice(-2).join(`
`),g=m.join(`
`),_=p.split(`
`),v=[`CAMERA & SELECTION\n${_.slice(0,2).join(`
`)}`,`WORLD DEBUG\n${_[2]??``}`,`HARVEST & DEPLOY\n${_.slice(3,5).join(`
`)}`,`PRODUCTION & BUILDING\n${_.slice(5,7).join(`
`)}`,`DEBUG RESOURCES\n${_[7]??``}`,`AI CONTROL\n${_[8]??``}`,`SESSION\n${_.slice(9,11).join(`
`)}`,...e.battlefield?[`BATTLE PLAYGROUND\n${_[11]??``}`]:[]].join(`

`),y=[`RENDER INFO\n${s}`,`CAMERA INFO\n${u}`,v].join(`

`),b=[`UNIT INFO\n${c}`,`NAV INFO\n${l}`,`CITY INFO\n${d}`,`HUMAN INFO\n${g}`,`TECH INFO\n${h}`].join(`

`);this.el.innerHTML=[`<div class="overlay-heading">${o}</div>`,`<div class="overlay-tabs" role="tablist" aria-label="Diagnostic categories">`,...jd.map(e=>`<button class="overlay-tab" type="button" role="tab" id="overlay-tab-${e.id}" aria-controls="overlay-panel-${e.id}" aria-selected="${e.id===this.activeTab}" tabindex="${e.id===this.activeTab?0:-1}" data-overlay-tab="${e.id}">${e.label}</button>`),`</div>`,this.panel(`dev-controls`,y),this.panel(`statistics`,b)].join(``)}panel(e,t){return`<section class="overlay-tab-panel" role="tabpanel" id="overlay-panel-${e}" aria-labelledby="overlay-tab-${e}"${e===this.activeTab?``:` hidden`}><pre class="overlay-readout">${t}</pre></section>`}setActiveTab(e){this.activeTab=e;for(let t of this.el.querySelectorAll(`[data-overlay-tab]`)){let n=t.dataset.overlayTab===e;t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1}for(let t of this.el.querySelectorAll(`.overlay-tab-panel`))t.hidden=t.id!==`overlay-panel-${e}`}};function Nd(e){return jd.some(t=>t.id===e)}function Pd(e){return e?`reachable`:`no route`}function Fd(e,t){return e===`building`?t>=.16?`block`:e:e===`block`?t<.14?`building`:t>=.65?`district`:e:t<.6?`block`:e}function Id(e,t){let n=n=>{let r=new Map;for(let i of e.buildings){if((t[i.id]??0)<=0)continue;let e=n===`block`?i.blockId:i.districtId;if(e===void 0)continue;let a=r.get(e);a?a.push(i.id):r.set(e,[i.id])}return[...r].map(([r,i])=>{if(n===`block`){let t=e.get(i[0]??-1),n=e.blocks.find(e=>e.id===r&&(!t||Li(t.x,t.z,e.clip??[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}])));if(n)return{id:r,...n.clip?ua(n.clip):{x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2},buildingIds:i}}let a=0,o=0,s=0;for(let n of i){let r=e.get(n),i=t[n]??0;!r||i<=0||(a+=r.x*i,o+=r.z*i,s+=i)}return{id:r,x:a/s,z:o/s,buildingIds:i}})};return{block:n(`block`),district:n(`district`)}}var Ld=15e3,Rd=5e3,zd=class{city;population;capacity;root;labels=new Map;visibleKeys=new Set;blockGroups;districtGroups;point=new W;visible=!1;pinned=!1;level=`building`;presentationDirty=!0;populationDirty=!0;lastRetireCheckMs=-1/0;constructor(e,t,n,r,i){this.city=t,this.population=n,this.capacity=r,Vd(),this.root=document.createElement(`div`),this.root.className=`population-labels`,this.root.style.setProperty(`--population-accent`,Qc[i].line);let a=Id(t,r);this.blockGroups=a.block,this.districtGroups=a.district,e.append(this.root)}createLabel(e){let t=document.createElement(`span`);t.className=`population-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`population-label-count`;let r=document.createElement(`span`);r.className=`population-label-bar`;let i=document.createElement(`span`);i.className=`population-label-bar-fill`,r.append(i),t.append(n,r),this.root.append(t);let a={label:t,count:n,fill:i,left:null,top:null,text:null,width:null,lastRelevantMs:-1/0};return this.labels.set(e,a),a}get enabled(){return this.visible||this.pinned}toggle(){this.pinned=!this.pinned,this.updateVisibility()}setSelectionEnabled(e){this.visible!==e&&(this.visible=e,this.updateVisibility())}updateVisibility(){let e=this.enabled;this.root.classList.toggle(`shown`,e),this.presentationDirty=!0,e||this.discardLabels()}sync({camera:e,zoomFraction:t,nowMs:n,cameraDirty:r,populationDirty:i}){if(!this.enabled)return;this.populationDirty||=i;let a=Fd(this.level,t),o=a!==this.level;if(this.level=a,!this.presentationDirty&&!o&&!r&&!this.populationDirty)return;this.presentationDirty=!1,this.populationDirty=!1,e.updateMatrixWorld();let s=new Set;if(this.level===`building`)for(let t of this.city.buildings){if((this.capacity[t.id]??0)<=0)continue;let r=t.state===`intact`?t.height:t.state===`damaged`?t.height*.55:3;this.syncLabel(`building:${t.id}`,t.x,r+5,t.z,[t.id],e,n,s)}else{let t=this.level===`block`?this.blockGroups:this.districtGroups;for(let r of t)this.syncLabel(`${this.level}:${r.id}`,r.x,8,r.z,r.buildingIds,e,n,s)}this.hideNoLongerVisible(s),this.visibleKeys.clear();for(let e of s)this.visibleKeys.add(e);this.retireIrrelevant(n)}syncLabel(e,t,n,r,i,a,o,s){if(this.point.set(t,n,r).project(a),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04))return;let c=0,l=0;for(let e of i)c+=this.population[e]??0,l+=this.capacity[e]??0;if(c<=0)return;let u=this.labels.get(e)??this.createLabel(e),d=`${(this.point.x*.5+.5)*100}%`,f=`${(-this.point.y*.5+.5)*100}%`,p=`HUMANS  ${Math.ceil(c)}`,m=`${Math.min(100,Math.max(0,c/Math.max(1,l)*100))}%`;u.left!==d&&(u.label.style.left=d,u.left=d),u.top!==f&&(u.label.style.top=f,u.top=f),u.text!==p&&(u.count.textContent=p,u.text=p),u.width!==m&&(u.fill.style.width=m,u.width=m),u.label.hidden&&(u.label.hidden=!1),u.lastRelevantMs=o,s.add(e)}hideNoLongerVisible(e){for(let t of this.visibleKeys){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}discardLabels(){this.root.replaceChildren(),this.labels.clear(),this.visibleKeys.clear()}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<Rd)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleKeys.has(t)||e-n.lastRelevantMs<Ld||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleKeys.clear()}},Bd=!1;function Vd(){if(Bd)return;Bd=!0;let e=document.createElement(`style`);e.textContent=`
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
`,document.head.append(e)}var Hd=128,Ud=48,Wd=96,Gd=16,Kd=.45,qd=.6,Jd=.6,Yd=25;function Xd(e){let t=e.filter(e=>e>0).sort((e,t)=>e-t);return t.length===0?1:t[Math.floor((t.length-1)*.75)]}function Zd(e,t){return Math.max(0,e)/Math.max(1,t)}function Qd(e,t){return Math.max(0,Math.min(1,1-Math.exp(-Zd(e,t))))}function $d(e,t){return Math.max(14,Math.max(e,t)*.45+7)}function ef(e,t,n){return n.some(n=>(n.x-e)**2+(n.z-t)**2<=200**2)}function tf(){return new D({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
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
    `})}function nf(){return new D({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
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
    `})}function rf(e,t){return new D({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:0,uniforms:{uScans:{value:e},uScanCount:t},vertexShader:`
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
      uniform vec4 uScans[${Gd}];
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
        for (int index = 0; index < ${Gd}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${Yd.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float texture = 0.94 + 0.06 * sin(point.x * 0.17 + point.y * 0.11);
        gl_FragColor = vec4(palette(vHeat) * texture, ${Kd.toFixed(2)} * coverage);
      }
    `})}function af(e,t,n,r,i=!1){return new D({transparent:!0,depthWrite:!1,depthTest:!0,...i?{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}:{},side:i?2:0,uniforms:{uSources:{value:e},uScans:{value:t},uSourceCount:n,uScanCount:r},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 localPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          localPosition = instanceMatrix * localPosition;
        #endif
        vec4 worldPosition = modelMatrix * localPosition;
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec4 uSources[${Wd}];
      uniform vec4 uScans[${Gd}];
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
        for (int index = 0; index < ${Gd}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${Yd.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float field = 0.0;
        for (int index = 0; index < ${Wd}; index++) {
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
        gl_FragColor = vec4(palette(heat) * texture, ${Kd.toFixed(2)} * coverage);
      }
    `})}var of=class{city;cityView;population;group=new p;continuousSources=Array.from({length:Wd},()=>new xe);continuousScans=Array.from({length:Gd},()=>new xe);continuousSourceCount={value:0};continuousScanCount={value:0};buildingContinuousSources=[];continuousSourceScratch=[];groundMaterial=af(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount);buildingMaterial=rf(this.continuousScans,this.continuousScanCount);clippedBuildingMaterial=af(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);ground;buildingOverlays=new Map;buildingHeatAttributes=new Map;crowdGeometry=new fe(1,32).rotateX(-Math.PI/2);crowdHeat=new P(new Float32Array(Ud),1);crowds;rings=new d(new s(175,200,96).rotateX(-Math.PI/2),nf(),Hd);ringMatrix=new z;crowdMatrix=new z;buildingMatrix=new z;heatReferencePopulation;lastHarvesterSignature=``;buildingOverlayDirty=!0;constructor(e,t,n,r){this.city=e,this.cityView=t,this.population=n,this.heatReferencePopulation=Xd(r),this.ground=new B(new Ee(this.city.radius*2,this.city.radius*2).rotateX(-Math.PI/2),this.groundMaterial),this.ground.position.y=X+.24,this.ground.frustumCulled=!1,this.ground.renderOrder=0,this.crowdGeometry.setAttribute(`instanceHeat`,this.crowdHeat),this.crowds=new d(this.crowdGeometry,tf(),Ud),this.crowds.count=0,this.crowds.frustumCulled=!1,this.rings.count=0,this.rings.frustumCulled=!1,this.crowds.renderOrder=3,this.rings.renderOrder=2,this.group.add(this.ground,this.rings,this.crowds),this.syncBuildingOverlays(),this.buildingOverlayDirty=!1}sync(e,t,n,r,i){i&&(this.buildingOverlayDirty=!0);let a=e.slice(0,16),o=a.length>0;if(this.group.visible=o,!o)return;let s=a.map(e=>`${e.id}:${e.x}:${e.z}`).join(`|`),c=s!==this.lastHarvesterSignature,l=c||r||i;this.lastHarvesterSignature=s,this.buildingOverlayDirty&&=(this.syncBuildingOverlays(),!1),c&&(this.syncRings(a),this.syncScans(a)),l&&(this.syncBuildingHeat(a),this.syncBuildingContinuousSources(a)),this.syncContinuousGround(t,n),this.syncCrowds(a,t,n)}dispose(){this.ground.geometry.dispose(),this.groundMaterial.dispose(),this.buildingMaterial.dispose(),this.clippedBuildingMaterial.dispose(),this.buildingHeatAttributes.clear();for(let[e,t]of this.buildingOverlays)t.geometry!==e.geometry&&t.geometry.dispose();this.buildingOverlays.clear(),this.crowdGeometry.dispose(),this.crowds.material.dispose(),this.rings.geometry.dispose(),this.rings.material.dispose()}syncBuildingOverlays(){let e=this.cityView.buildingHeatmapSources,t=new Set(e);for(let[e,n]of this.buildingOverlays)t.has(e)||(n.removeFromParent(),n.geometry!==e.geometry&&n.geometry.dispose(),n instanceof d&&this.buildingHeatAttributes.delete(n),this.buildingOverlays.delete(e));for(let t of e){let e=this.buildingOverlays.get(t);if(e){let n=t instanceof d&&this.cityView.buildingHeatmapInstanceIds.has(t);n&&e.geometry.userData.heatmapSource!==t.geometry?(e.geometry.dispose(),e.geometry=t.geometry.clone(),e.geometry.userData.heatmapSource=t.geometry):n||(e.geometry=t.geometry);continue}let n=t instanceof d&&this.cityView.buildingHeatmapInstanceIds.has(t),r=n?this.buildingMaterial:this.clippedBuildingMaterial,i=t instanceof d?new d(n?t.geometry.clone():t.geometry,r,t.instanceMatrix.count):new B(t.geometry,r);n&&(i.geometry.userData.heatmapSource=t.geometry),i instanceof d&&t instanceof d&&(n?(i.geometry.userData.heatmapSource=t.geometry,i.count=0):(i.instanceMatrix=t.instanceMatrix,i.count=t.count)),i.frustumCulled=!1,i.renderOrder=1,this.buildingOverlays.set(t,i),this.group.add(i)}}syncBuildingHeat(e){for(let[t,n]of this.cityView.buildingHeatmapInstanceIds){let r=this.buildingOverlays.get(t);if(!(r instanceof d))continue;let i=this.buildingHeatAttributes.get(r);(!i||i.count!==r.instanceMatrix.count)&&(i=new P(new Float32Array(r.instanceMatrix.count),1),this.buildingHeatAttributes.set(r,i)),r.geometry.setAttribute(`instanceHeat`,i);let a=0;for(let o=0;o<n.length;o++){let s=n[o],c=this.city.get(s),l=this.population[s]??0;!c||c.state===`rubble`||!ef(c.x,c.z,e)||(t.getMatrixAt(o,this.buildingMatrix),r.setMatrixAt(a,this.buildingMatrix),i.setX(a,Qd(l,this.heatReferencePopulation)),a++)}r.count=a,r.instanceMatrix.needsUpdate=!0,i.needsUpdate=!0}}syncRings(e){let t=Math.min(e.length,Hd);for(let n=0;n<t;n++){let t=e[n];this.ringMatrix.makeTranslation(t.x,X+.32,t.z),this.rings.setMatrixAt(n,this.ringMatrix)}this.rings.count=t,this.rings.instanceMatrix.needsUpdate=!0}syncScans(e){let t=Math.min(e.length,Gd);this.continuousScanCount.value=t;for(let t=0;t<Gd;t++){let n=e[t];this.continuousScans[t].set(n?.x??0,n?.z??0,200,+!!n)}}syncCrowds(e,t,n){let r=0;for(let i of t){let t=i.prevX+(i.x-i.prevX)*n,a=i.prevZ+(i.z-i.prevZ)*n;if(!ef(t,a,e))continue;if(r>=Ud)break;let o=Qd(i.humans,this.heatReferencePopulation),s=14+Math.sqrt(i.humans)*2.2;this.crowdMatrix.makeScale(s,s,s),this.crowdMatrix.setPosition(t,X+.36,a),this.crowds.setMatrixAt(r,this.crowdMatrix),this.crowdHeat.setX(r,o),r++}this.crowds.count=r,this.crowds.instanceMatrix.needsUpdate=!0,this.crowdHeat.needsUpdate=!0}syncBuildingContinuousSources(e){this.buildingContinuousSources.length=0;for(let t of this.city.buildings){let n=this.population[t.id]??0;if(t.state===`rubble`||n<=0||!ef(t.x,t.z,e))continue;let r=$d(t.width,t.depth);this.buildingContinuousSources.push(new xe(t.x,t.z,r,Zd(n,this.heatReferencePopulation)*qd))}}syncContinuousGround(e,t){let n=this.continuousSourceScratch;n.length=0,n.push(...this.buildingContinuousSources);for(let r of e){let e=r.prevX+(r.x-r.prevX)*t,i=r.prevZ+(r.z-r.prevZ)*t;r.humans<=0||!this.isWithinActiveScan(e,i)||n.push(new xe(e,i,18+Math.sqrt(r.humans)*1.7,Zd(r.humans,this.heatReferencePopulation)*Jd))}n.sort((e,t)=>t.w-e.w),this.continuousSourceCount.value=Math.min(n.length,Wd);for(let e=0;e<Wd;e++)this.continuousSources[e].copy(n[e]??sf)}isWithinActiveScan(e,t){return this.continuousScans.some(n=>n.w>0&&(n.x-e)**2+(n.y-t)**2<=n.z**2)}},sf=new xe(0,0,0,0),cf=15e3,lf=5e3,uf=`#63c174`,df=`#e3ae4e`,ff=`#df5b55`,pf=class{root;labels=new Map;visibleIds=new Set;point=new W;stateDirty=!0;lastRetireCheckMs=-1/0;constructor(e){gf(),this.root=document.createElement(`div`),this.root.className=`unit-health-labels`,e.append(this.root)}sync({army:e,camera:t,nowMs:n,cameraDirty:r,stateDirty:i,selectionDirty:a,selectedIds:o,inspectedEnemyId:s}){if(this.stateDirty||=i,!a&&!r&&!this.stateDirty&&this.visibleIds.size===0)return;this.stateDirty=!1;let c=new Set(o);t.updateMatrixWorld();let l=new Set;for(let r of e.units){let i=e.typeOf(r);if(!(r.health<i.health||c.has(r.id)||r.id===s||r.attackCooldown>0)||(this.point.set(r.x,yl(r.typeId).maxY+3,r.z).project(t),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04)))continue;let a=this.labels.get(r.id)??this.createLabel(r.id),o=`${(this.point.x*.5+.5)*100}%`,u=`${(-this.point.y*.5+.5)*100}%`,d=Math.max(0,Math.min(1,r.health/Math.max(1,i.health))),f=`${d*100}%`,p=mf(d);a.left!==o&&(a.label.style.left=o,a.left=o),a.top!==u&&(a.label.style.top=u,a.top=u),a.width!==f&&(a.fill.style.width=f,a.width=f),a.colour!==p&&(a.fill.style.backgroundColor=p,a.colour=p),a.label.hidden&&(a.label.hidden=!1),a.lastRelevantMs=n,l.add(r.id)}this.hideNoLongerVisible(l),this.visibleIds.clear();for(let e of l)this.visibleIds.add(e);this.retireIrrelevant(n)}createLabel(e){let t=document.createElement(`span`);t.className=`unit-health-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`unit-health-label-bar`;let r=document.createElement(`span`);r.className=`unit-health-label-bar-fill`,n.append(r),t.append(n),this.root.append(t);let i={label:t,fill:r,left:null,top:null,width:null,colour:null,lastRelevantMs:-1/0};return this.labels.set(e,i),i}hideNoLongerVisible(e){for(let t of this.visibleIds){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<lf)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleIds.has(t)||e-n.lastRelevantMs<cf||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleIds.clear()}};function mf(e){return e<.3?ff:e<.6?df:uf}var hf=!1;function gf(){if(hf)return;hf=!0;let e=document.createElement(`style`);e.textContent=`
.unit-health-labels { position: fixed; inset: 0; pointer-events: none; z-index: 9; }
.unit-health-label { position: absolute; transform: translate(-50%, -100%); width: 31px; }
.unit-health-label-bar { display: block; height: 3px; overflow: hidden; background: rgba(255, 255, 255, .2); }
.unit-health-label-bar-fill { display: block; height: 100%; background: ${uf}; transition: width .1s linear, background-color .1s linear; }
`,document.head.append(e)}var _f=.6,vf=1.8,yf=2696995,bf=X+vf/2;function xf(){return new K(_f,vf,_f)}function Sf(){return new ge({color:yf,flatShading:!0})}var Cf=8,wf=96;function Tf(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Ef=class{city;army;population;group=new p;civilians;matrix=new z;highlightGeometry=new Map;selectedGeometry;constructor(e,t,n){this.city=e,this.army=t,this.population=n,this.civilians=new d(xf(),Sf(),wf),this.civilians.instanceMatrix.setUsage(i),this.civilians.count=0,this.civilians.frustumCulled=!1,this.group.add(this.civilians)}sync(e,t,n){let r=0,i=!1;for(let t of this.army.units){let n=t.harvestingBuildingId,a=n===null?void 0:this.city.get(n);if(!jo(a,this.population)||Mo(t.x,t.z,a)>22**2)continue;let o=t.x-a.x,s=t.z-a.z,c=Math.max(Math.hypot(o,s),1),l=Ni({x:o/c,z:s/c},-(a.rotation??0)),u=Math.min(Math.abs(l.x)>.001?a.width/2/Math.abs(l.x):1/0,Math.abs(l.z)>.001?a.depth/2/Math.abs(l.z):1/0),d=a.x+o/c*u,f=a.z+s/c*u;for(let n=0;n<Cf&&r<wf;n++){let a=(e+n*5+t.id*11)%30/30,l=(n%3-1)*1.7,u=d+(t.x-d)*a-s/c*l,p=f+(t.z-f)*a+o/c*l;this.matrix.makeTranslation(u,bf,p),i=Tf(this.civilians,r++,this.matrix)||i}}this.civilians.count=r,i&&(this.civilians.instanceMatrix.needsUpdate=!0);let a=n===void 0?void 0:this.city.get(n),o=jo(a,this.population)?a:void 0;this.selectedGeometry=t&&o?this.geometryFor(o):void 0}selectionSource(){return this.selectedGeometry?{geometry:this.selectedGeometry,colour:16719904}:void 0}dispose(){for(let e of this.highlightGeometry.values())e.dispose();this.civilians.geometry.dispose(),this.civilians.material.dispose()}geometryFor(e){let t=`${e.id}:${e.state}`,n=this.highlightGeometry.get(t);if(n)return n;let r=Math.max(e.height*(e.state===`intact`?1:e.state===`damaged`?.54:.06),2.2),i=Df(e.clip??this.rectangleFootprint(e),X+.15,X+r);return this.highlightGeometry.set(t,i),i}rectangleFootprint(e){let t=e.width/2,n=e.depth/2;return[{x:-t,z:-n},{x:t,z:-n},{x:t,z:n},{x:-t,z:n}].map(t=>{let n=Ni(t,e.rotation??0);return{x:e.x+n.x,z:e.z+n.z}})}};function Df(e,t,n){let r=[],i=e.map(e=>new Me(e.x,e.z));for(let e of v.triangulateShape(i,[])){let a=i[e[0]??-1],o=i[e[1]??-1],s=i[e[2]??-1];!a||!o||!s||(r.push(a.x,n,a.y,o.x,n,o.y,s.x,n,s.y),r.push(s.x,t,s.y,o.x,t,o.y,a.x,t,a.y))}for(let e=0;e<i.length;e++){let a=i[e],o=i[(e+1)%i.length];a&&o&&r.push(a.x,t,a.y,a.x,n,a.y,o.x,t,o.y,o.x,t,o.y,a.x,n,a.y,o.x,n,o.y)}let a=new De;return a.setAttribute(`position`,new R(new Float32Array(r),3)),a.computeVertexNormals(),a}var Of=2,kf=32,Af=640,jf=5,Mf=1.6,Nf=8;function Pf(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Ff=class{group=new p;figures;matrix=new z;constructor(){this.figures=new d(xf(),Sf(),Af),this.figures.instanceMatrix.setUsage(i),this.figures.count=0,this.figures.frustumCulled=!1,this.group.add(this.figures)}sync(e,t,n,r){let i=0,a=!1,o=new Map;for(let e of r.units){if(e.harvestingCrowdId===null)continue;let t=o.get(e.harvestingCrowdId);t?t.push(e):o.set(e.harvestingCrowdId,[e])}for(let r of e){let e=r.prevX+(r.x-r.prevX)*t,s=r.prevZ+(r.z-r.prevZ)*t,c=r.trailDirX,l=r.trailDirZ,u=Math.min(Math.max(1,Math.ceil(r.humans/Of)),kf),d=2.4+Math.sqrt(u)*1.5,f=(o.get(r.id)??[]).filter(e=>Ao(e.x,e.z,r.x,r.z)<=22**2),p=Math.min(u,f.length*Nf);for(let o=0;o<u&&!(i>=Af);o++){let u=(If(r.id*31+o*7+1)*2-1)*d,m=(If(r.id*17+o*13+2)*2-1)*d,h=o%jf*Mf*r.trailStrength,g=e+u-c*h,_=s+m-l*h;if(o<p){let e=f[o%f.length],r=e.prevX+(e.x-e.prevX)*t,i=e.prevZ+(e.z-e.prevZ)*t,a=(n+o*5+e.id*11)%30/30;this.matrix.makeTranslation(g+(r-g)*a,bf,_+(i-_)*a)}else this.matrix.makeTranslation(g,bf,_);a=Pf(this.figures,i++,this.matrix)||a}if(i>=Af)break}this.figures.count=i,a&&(this.figures.instanceMatrix.needsUpdate=!0)}dispose(){this.figures.geometry.dispose(),this.figures.material.dispose()}};function If(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}var Lf=48,Rf=class{group=new p;preview=new p;previewTypeId=null;sites=new Map;constructor(){this.group.add(this.preview)}sync(e,t,n,r){e?(this.previewTypeId!==e.structureTypeId&&this.replacePreview(e.structureTypeId),this.preview.visible=!0,this.preview.position.set(e.x,.1,e.z),this.tint(this.preview,t?7729818:15749714,.48)):this.preview.visible=!1;let i=new Set(n.map(e=>e.builderId));for(let[e,t]of this.sites)i.has(e)||(this.group.remove(t.group),Hf(t.group),this.sites.delete(e));for(let e of n){let t=this.sites.get(e.builderId);t||(t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group)),t.group.position.set(e.x,.12,e.z);let n=Vf(e.summoning?1-e.remainingSteps/Math.max(us(e.structureTypeId).constructionSteps??1,1):0,0,1);this.animateSite(t,n,r)}}dispose(){Hf(this.group),this.sites.clear()}replacePreview(e){Hf(this.preview),this.preview.clear(),this.preview.add(Bf(e).group),this.previewTypeId=e}siteGroup(e){let t=us(e.structureTypeId).anchoredFootprint,n=Math.hypot((t?.width??18)/2,(t?.depth??18)/2)+2,r=new p,i=zf(n),a=Bf(e.structureTypeId),o=yl(e.structureTypeId);return i.group.position.y=o.minY+o.height*.5,r.add(i.group,a.group),{group:r,circle:i.group,circleMaterials:i.materials,progressGeometry:i.progressGeometry,progressMaterial:i.progressMaterial,ghostMaterial:a.material}}animateSite(e,t,n){let r=n*.0024+e.group.id*.73,i=.16+t*.68,a=Math.sin(r)*(.13-t*.05);e.ghostMaterial.opacity=Vf(i+a,.06,.92);let o=.27+t*.22+Math.sin(r*1.4)*.08;for(let t of e.circleMaterials)t.opacity=Vf(o,.12,.62);e.progressMaterial.opacity=Vf(o+.2,.3,.82),e.progressGeometry.setDrawRange(0,Math.round(t*Lf)*6);let s=1+Math.sin(r*1.4)*.035;e.circle.scale.setScalar(s),e.circle.rotation.y=r*.15}tint(e,t,n){e.traverse(e=>{!(e instanceof B)||!(e.material instanceof ge)||(e.material.color.setHex(t),e.material.opacity=n)})}};function zf(e){let t=new p,n=[],r=e=>{let t=new ge({color:15786104,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,side:2});return n.push(t),t},i=(e,t,n)=>{let i=new B(new s(e,t,48),r(n));return i.rotation.x=-Math.PI/2,i.renderOrder=12,i};t.add(i(e-.62,e,.48),i(e*.56,e*.68,.38));let a=new s(e*.3,e*.42,Lf);a.setDrawRange(0,0);let o=new ge({color:15786104,flatShading:!0,transparent:!0,opacity:.72,depthWrite:!1,side:2}),c=new B(a,o);c.rotation.x=-Math.PI/2,c.renderOrder=14,t.add(c);for(let n=0;n<8;n++){let i=n/8*Math.PI*2,a=new B(new K(.36,.08,e*.18),r(.42));a.position.set(Math.sin(i)*e*.79,.03,Math.cos(i)*e*.79),a.rotation.y=i,a.renderOrder=13,t.add(a)}return{group:t,materials:n,progressGeometry:a,progressMaterial:o}}function Bf(e){let t=gl(e),n=new p,r=new ge({color:14263807,flatShading:!0,transparent:!0,opacity:.48,depthWrite:!1});return n.add(new B(Pc([...t.parts??[],...t.secondary??[],...t.accents??[]]),r)),{group:n,material:r}}function Vf(e,t,n){return Math.max(t,Math.min(n,e))}function Hf(e){e.traverse(e=>{e instanceof B&&(e.geometry.dispose(),e.material instanceof ge&&e.material.dispose())})}var Uf=[{facade:12823945,roof:11771002,trim:13416082,window:8942684,rooftop:10587760},{facade:12494723,roof:11244402,trim:13021069,window:8417113,rooftop:9995883},{facade:12165501,roof:10849645,trim:12757638,window:8219735,rooftop:9601128},{facade:13021324,roof:11573880,trim:13613463,window:9140319,rooftop:10521968},{facade:12099966,roof:10849902,trim:12692103,window:8351064,rooftop:9535593},{facade:12626310,roof:11376245,trim:13218446,window:8745820,rooftop:10127467},{facade:12955531,roof:11573624,trim:13547413,window:9008735,rooftop:10390383},{facade:12297344,roof:10981232,trim:12889481,window:8416857,rooftop:9732456},{facade:12626566,roof:11375988,trim:13218446,window:8679771,rooftop:9995883},{facade:13087117,roof:11705210,trim:13678999,window:9140318,rooftop:10587760},{facade:12034431,roof:10718317,trim:12626311,window:8219479,rooftop:9404007},{facade:12889480,roof:11573624,trim:13481618,window:9008477,rooftop:10455918},{facade:12231551,roof:10915696,trim:12823688,window:8416856,rooftop:9666921},{facade:12692102,roof:11376245,trim:13284238,window:8745563,rooftop:10193004},{facade:10650211,roof:8744276,trim:11178095,window:7298122,rooftop:7956047},{facade:9732202,roof:8284503,trim:10389616,window:7035981,rooftop:7693910},{facade:10129774,roof:8551006,trim:10787448,window:7366991,rooftop:8156510},{facade:8154970,roof:6774093,trim:8944228,window:6247752,rooftop:6643024},{facade:10840145,roof:8936778,trim:11368542,window:7492164,rooftop:8347727},{facade:12165220,roof:9994065,trim:12823152,window:7957324,rooftop:9271631}];function Wf(e){let t=Math.imul(e.id+1,2654435761)^Math.imul(e.paletteIndex+11,2246822507);return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,Uf[(t>>>0)%Uf.length]??Uf[0]}var Gf=[11028540,3493995,14209990,7307086,9072296,4145992],Kf={sky:12048612,skyHorizon:14872553,shardTop:10323041,cliff:[11100220,9260336,7289894],road:10659477,sidewalk:13027512,parking:10132878,laneMarking:14205527,crosswalk:14672082,park:8362574,tree:5204788,treeTrunk:7360569,rubble:12892060,hvac:13027512},qf={intact:1,damaged:.54,rubble:.06},Jf=.8,Yf=3;function Xf(e,t={}){return lt(e,t)}function Zf(e){let t=new K(1,1,1,1,e,1).toNonIndexed(),n=t.getAttribute(`position`),r=new Float32Array(n.count*3);for(let t=0;t<n.count;t+=3){let i=(n.getY(t)+n.getY(t+1)+n.getY(t+2))/3,a=Math.floor((i+.5)*e)%2==0?1:Jf;for(let e=0;e<3;e++)r[(t+e)*3]=a,r[(t+e)*3+1]=a,r[(t+e)*3+2]=a}return t.setAttribute(`color`,new R(r,3)),t}var Qf=class{city;group=new p;buildingMeshList=[];buildingHeatmapInstanceIdsByMesh=new Map;slots=new Map;detailSlots=new Map;roofs;trims;windowBands;greebles;greebleStart=new Map;debris;matrix=new z;color=new V;scale=new W;clipped;clippedState=``;landscaped;landscapedState=``;constructor(e){this.city=e;for(let e of this.buildShardTops())this.group.add(e);for(let e of this.buildCliffBands())this.group.add(e);this.group.add(this.buildPads(`built`,Kf.sidewalk,X)),this.landscaped=this.buildLandscapedBuiltBlocks(),this.group.add(this.landscaped),this.group.add(this.buildPads(`parking`,Kf.parking,X)),this.group.add(this.buildPads(`park`,Kf.sidewalk,X)),this.group.add(this.buildParkland()),this.group.add(this.buildRoads());for(let e of this.buildFragmentOverlays())this.group.add(e);let t=this.buildStripes([...this.city.centreLines,...this.city.decorativeFragments.flatMap(e=>e.centreLines)],Kf.laneMarking,1.1);t.name=`centre-lines`,this.group.add(t);let n=this.buildStripes(this.city.crosswalks,Kf.crosswalk,1.1);n.name=`crosswalks`,this.group.add(n),this.group.add(this.buildTrees()),this.group.add(this.buildCars()),this.group.add(this.buildEdgeRubble());let r=new Map;for(let e of this.city.buildings){if(e.clip)continue;let t=Ki(e.height,e.district),n=r.get(t);n?n.push(e):r.set(t,[e])}for(let[e,t]of r){let n=new d(Zf(e),Xf(16777215,{vertexColors:!0}),t.length);n.frustumCulled=!1,n.userData.storeys=e,this.buildingMeshList.push(n),this.buildingHeatmapInstanceIdsByMesh.set(n,t.map(e=>e.id)),this.group.add(n),t.forEach((e,t)=>this.slots.set(e.id,{mesh:n,index:t}))}let i=this.city.buildings.filter(e=>!e.clip);i.forEach((e,t)=>this.detailSlots.set(e.id,t)),this.roofs=new d(new K(1,1,1),Xf(16777215),Math.max(i.length,1)),this.roofs.name=`building-roofs`,this.roofs.frustumCulled=!1,this.buildingHeatmapInstanceIdsByMesh.set(this.roofs,i.map(e=>e.id)),this.trims=new d(new K(1,1,1),Xf(16777215),Math.max(i.length,1)),this.trims.name=`building-trims`,this.trims.frustumCulled=!1,this.windowBands=new d(new K(1,1,1),Xf(16777215),Math.max(i.length,1)),this.windowBands.name=`building-window-bands`,this.windowBands.frustumCulled=!1,this.group.add(this.trims,this.windowBands,this.roofs);let a=0;for(let t of e.buildings)this.greebleStart.set(t.id,a),a+=t.greebles;this.greebles=new d(new K(1,1,1),Xf(16777215),Math.max(a,1)),this.greebles.name=`rooftop-structures`,this.greebles.frustumCulled=!1,this.group.add(this.greebles),this.debris=new d(new K(1,1,1),Xf(Kf.rubble),Math.max(e.buildings.length*Yf,1)),this.debris.frustumCulled=!1,this.group.add(this.debris),this.refreshAll(),this.group.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0})}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof B))return;let n=t.material;Array.isArray(n)?n.forEach(t=>at(t,e)):at(n,e)})}buildShardTops(){return[...this.city.surfaces,...this.city.decorativeFragments.map(e=>e.boundary)].map((e,t)=>{let n=e[0];if(!n)throw Error(`city boundary is empty`);let r=new l;r.moveTo(n.x,-n.z);for(let t=1;t<e.length;t++){let n=e[t];n&&r.lineTo(n.x,-n.z)}r.closePath();let i=new B(new m(r),Xf(Kf.shardTop));return i.rotation.x=-Math.PI/2,i.name=t<this.city.surfaces.length?`shard-top-${t}`:`shard-chip-top-${t}`,i})}buildCliffBands(){let e=[...this.city.surfaces.map(e=>({points:e,depth:340,chip:!1})),...this.city.decorativeFragments.map(e=>({points:e.boundary,depth:e.depth,chip:!0}))],t=[0,.28,.62,1],n=[];for(let r=0;r<3;r++){let i=Kf.cliff[r];if(i===void 0)continue;let a=[];for(let n of e){if(n.chip&&r>0)continue;let e=n.points,i=n.chip?0:-(t[r]??0)*n.depth,o=n.chip?-n.depth:-(t[r+1]??1)*n.depth,s=this.polygonCentre(e),c=[1,.995,.985,.97][r]??1,l=[1,.995,.985,.97][r+1]??.97;for(let t=0;t<e.length;t++){let n=e[t],r=e[(t+1)%e.length];if(!n||!r)continue;let u=this.scaleFrom(n,s,c),d=this.scaleFrom(r,s,c),f=this.scaleFrom(r,s,l),p=this.scaleFrom(n,s,l);a.push(u.x,i,u.z,d.x,i,d.z,f.x,o,f.z,u.x,i,u.z,f.x,o,f.z,p.x,o,p.z)}}let o=new De;o.setAttribute(`position`,new R(new Float32Array(a),3)),o.computeVertexNormals();let s=new B(o,Xf(i,{side:2}));s.name=`cliff-band-${r}`,n.push(s)}return n}polygonCentre(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}scaleFrom(e,t,n){return{x:t.x+(e.x-t.x)*n,z:t.z+(e.z-t.z)*n}}buildPads(e,t,n){let r=this.city.blocks.filter(t=>t.kind===e),i=r.map(e=>e.clip??this.rectPoints(e)),a=e===`park`?r.map(e=>{let t=this.parkGrassFootprint(e);return t.length>=3?[t]:[]}):void 0,o=new B(this.polygonsGeometry(i,0,n,a),Xf(t));return o.name=`${e}-pads`,o}buildParkland(){let e=this.city.blocks.filter(e=>e.kind===`park`).map(e=>this.parkGrassFootprint(e)).filter(e=>e.length>=3),t=new B(this.polygonsGeometry(e,0,X),Xf(Kf.park));return t.name=`parkland`,t}buildLandscapedBuiltBlocks(){let e=[],t=this.city.buildings.filter(e=>e.state!==`rubble`);for(let n of this.city.blocks){if(n.kind!==`built`||n.district!==`downtown`||!n.innerClip||n.innerClip.length<3)continue;let r=n.clip??this.rectPoints(n);if(!this.city.buildings.filter(e=>e.blockId===n.id&&e.state!==`rubble`&&this.pointInOrOnPolygon(e.x,e.z,r)).length)continue;let i=this.triangulateGrass(n.innerClip),a=Ii(n.innerClip),o=t.filter(e=>{let t=Ji[e.state],n=Math.hypot(e.width*t/2+4,e.depth*t/2+4);return e.x+n>=a.x0&&e.x-n<=a.x1&&e.z+n>=a.z0&&e.z-n<=a.z1});for(let e of o)i=i.flatMap(t=>this.subtractConvexFootprint(t,this.bufferedBuildingFootprint(e)));i=i.filter(e=>!o.some(t=>Pi(zi(e,this.bufferedBuildingFootprint(t)))>1e-4)),e.push(...i.filter(e=>e.length>=3))}let n=new B(this.polygonsGeometry(e,X,X+.01),Xf(Kf.park));return n.name=`downtown-landscaping`,n}triangulateGrass(e){let t=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),n=t.map(e=>new Me(e.x,e.z));return v.triangulateShape(n,[]).flatMap(e=>{let n=e.map(e=>t[e]).filter(e=>e!==void 0);return n.length===3?[n]:[]})}subtractConvexFootprint(e,t){if(e.length<3||t.length<3)return e.length>=3?[[...e]]:[];let n=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?t:[...t].reverse(),r=[...e],i=[];for(let e=0;e<n.length&&r.length>=3;e++){let t=n[e],a=n[(e+1)%n.length];if(!t||!a)continue;let o=Math.max(Math.hypot(a.x-t.x,a.z-t.z),1e-9),s={x:-(a.z-t.z)/o,z:(a.x-t.x)/o},c=s.x*t.x+s.z*t.z,l=Ri(r,{x:-s.x,z:-s.z},-c);l.length>=3&&i.push(l),r=Ri(r,s,c)}return i}bufferedBuildingFootprint(e){if(e.clip&&e.clip.length>=3)return this.offsetConvexFootprint(e.clip,4);let t=Ji[e.state],n=e.width*t/2+4,r=e.depth*t/2+4,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=Ni(t,i);return{x:e.x+n.x,z:e.z+n.z}})}offsetConvexFootprint(e,t){let n=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),r=n.map((e,r)=>{let i=n[(r+1)%n.length];if(!i)throw Error(`visible footprint has no next edge`);let a=Math.max(Math.hypot(i.x-e.x,i.z-e.z),1e-9),o={x:-(i.z-e.z)/a,z:(i.x-e.x)/a};return{inward:o,offset:o.x*e.x+o.z*e.z-t}});return n.map((e,t)=>{let n=r[(t-1+r.length)%r.length],i=r[t];if(!n||!i)return e;let a=n.inward.x*i.inward.z-n.inward.z*i.inward.x;return Math.abs(a)<1e-6?e:{x:(n.offset*i.inward.z-n.inward.z*i.offset)/a,z:(n.inward.x*i.offset-n.offset*i.inward.x)/a}})}pointInOrOnPolygon(e,t,n){if(this.distanceToPolygonEdge({x:e,z:t},n)<=1e-5)return!0;let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];o&&s&&o.z>t!=s.z>t&&e<(s.x-o.x)*(t-o.z)/(s.z-o.z)+o.x&&(r=!r)}return r}parkGrassFootprint(e){let t=e.innerClip;if(!t||t.length<3)return[];let n=e.clip??[];if(!n.length||!t.some(e=>this.distanceToPolygonEdge(e,n)<=1e-4))return t;let r=this.polygonCentre(t),i=Math.max(...t.map(e=>Math.hypot(e.x-r.x,e.z-r.z)),1),a=1-Math.min(.02/i,.001);return t.map(e=>this.scaleFrom(e,r,a))}distanceToPolygonEdge(e,t){let n=1/0;for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];if(!i||!a)continue;let o=a.x-i.x,s=a.z-i.z,c=Math.max(0,Math.min(1,((e.x-i.x)*o+(e.z-i.z)*s)/Math.max(o*o+s*s,1e-9)));n=Math.min(n,Math.hypot(e.x-(i.x+o*c),e.z-(i.z+s*c)))}return n}buildRoads(){let e=[...this.city.surfaces,...this.city.decorativeFragments.map(e=>e.boundary)],t=new B(this.polygonsGeometry(e,0,1),Xf(Kf.road));return t.name=`roads`,t}buildFragmentOverlays(){return[{kind:`built`,colour:Kf.sidewalk,top:X},{kind:`parking`,colour:Kf.parking,top:X},{kind:`park`,colour:Kf.park,top:X}].map(e=>{let t=this.city.decorativeFragments.flatMap(t=>t.overlays.filter(t=>t.kind===e.kind).map(e=>e.polygon)),n=new B(this.polygonsGeometry(t,0,e.top),Xf(e.colour));return n.name=`chip-${e.kind}`,n})}rectPoints(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}appendPrism(e,t,n,r,i=!0,a=[]){if(t.length<3)return;let o=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?[...t]:[...t].reverse(),s=o.map(e=>new Me(e.x,e.z)),c=a.filter(e=>e.length>=3).map(e=>e.map(e=>new Me(e.x,e.z))),l=[s,...c].flat(),u=v.triangulateShape(s,c);for(let t of u){let n=t[0],i=t[1],a=t[2];if(n===void 0||i===void 0||a===void 0)continue;let o=l[n],s=l[i],c=l[a];!o||!s||!c||((s.x-o.x)*(c.y-o.y)-(s.y-o.y)*(c.x-o.x)>0?e.push(o.x,r,o.y,c.x,r,c.y,s.x,r,s.y):e.push(o.x,r,o.y,s.x,r,s.y,c.x,r,c.y))}if(i)for(let t=0;t<o.length;t++){let i=o[t],a=o[(t+1)%o.length];!i||!a||e.push(i.x,n,i.z,i.x,r,i.z,a.x,n,a.z,a.x,n,a.z,i.x,r,i.z,a.x,r,a.z)}}appendBandedPrism(e,t,n,r,i,a,o){if(n.length<3)return;let s=e.length/3;this.appendPrism(e,n,r,i,!1);for(let n=s;n<e.length/3;n++)t.push(o.r,o.g,o.b);let c=Math.max(1,Math.round(a));for(let a=0;a<c;a++){let s=r+(i-r)*a/c,l=r+(i-r)*(a+1)/c,u=a%2==0?1:Jf,d=e.length/3;for(let t=0;t<n.length;t++){let r=n[t],i=n[(t+1)%n.length];!r||!i||e.push(r.x,s,r.z,r.x,l,r.z,i.x,s,i.z,i.x,s,i.z,r.x,l,r.z,i.x,l,i.z)}for(let n=d;n<e.length/3;n++)t.push(o.r*u,o.g*u,o.b*u)}}polygonsGeometry(e,t,n,r){let i=[];e.forEach((e,a)=>this.appendPrism(i,e,t,n,!0,r?.[a]??[]));let a=new De;return a.setAttribute(`position`,new R(new Float32Array(i),3)),a.computeVertexNormals(),a}buildEdgeRubble(){let e=this.city.decorativeFragments.flatMap(e=>e.rubble),t=new B(this.polygonsGeometry(e,X,X+2.2),Xf(Kf.rubble));return t.name=`edge-rubble`,t}buildClipped(){let e=[],t=[];for(let n of this.city.buildings){if(!n.clip||n.clip.length<3)continue;let r=Math.max(n.height*qf[n.state],2.2);if(n.state===`rubble`?this.color.setHex(Kf.rubble):(this.color.setHex(Wf(n).facade),n.state===`damaged`&&this.color.multiplyScalar(.76)),n.state===`rubble`){let i=e.length/3;this.appendPrism(e,n.clip,X,X+r);for(let n=i;n<e.length/3;n++)t.push(this.color.r,this.color.g,this.color.b)}else{let i=Ki(r,n.district);this.appendBandedPrism(e,t,n.clip,X,X+r,i,this.color)}}let n=new De;n.setAttribute(`position`,new R(new Float32Array(e),3)),n.setAttribute(`color`,new R(new Float32Array(t),3)),n.computeVertexNormals();let r=new B(n,Xf(16777215,{vertexColors:!0}));return r.name=`clipped-buildings`,r}clippedSignature(){let e=``;for(let t of this.city.buildings)t.clip&&(e+=t.state[0]);return e}rebuildClipped(){let e=this.clippedSignature();if(e===this.clippedState)return;this.clippedState=e;let t=this.buildClipped();if(this.clipped){this.group.remove(this.clipped),this.clipped.geometry.dispose();let e=this.clipped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.clipped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}buildStripes(e,t,n){let r=e.map(e=>e.clip??this.rectPoints({x0:e.x-e.width/2,z0:e.z-e.depth/2,x1:e.x+e.width/2,z1:e.z+e.depth/2})),i=new B(this.polygonsGeometry(r,0,n),Xf(t));return i.frustumCulled=!1,i}buildTrees(){let e=new p;e.name=`trees`;let t=new d(new et(2.75,2),Xf(Kf.tree),Math.max(this.city.trees.length,1));t.name=`tree-canopies`,t.frustumCulled=!1;let n=new d(new Ze(.55,.72,1.5,5),Xf(Kf.treeTrunk),Math.max(this.city.trees.length,1));return n.name=`tree-stumps`,n.frustumCulled=!1,this.city.trees.forEach((e,r)=>{this.matrix.makeScale(e.scale,e.scale,e.scale),this.matrix.setPosition(e.x,X+.75*e.scale,e.z),n.setMatrixAt(r,this.matrix),this.matrix.setPosition(e.x,X+3.5*e.scale,e.z),t.setMatrixAt(r,this.matrix)}),t.instanceMatrix.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0,e.add(n,t),e}buildCars(){let e=[...this.city.cars,...this.city.decorativeFragments.flatMap(e=>e.parkedCars)],t=new d(new K(1,1,1),Xf(16777215),Math.max(e.length,1));return t.name=`cars`,t.frustumCulled=!1,e.forEach((e,n)=>{let r=4.875,i=2.1;this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(e.alongX?r:i,1.775,e.alongX?i:r),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,(e.parked?X:1)+1,e.z),t.setMatrixAt(n,this.matrix),this.color.setHex(Gf[e.paletteIndex%Gf.length]??16777215),t.setColorAt(n,this.color)}),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),t}refresh(e){let t=this.city.get(e);t&&(this.writeBuilding(t),this.flush(this.slots.get(e)?.mesh),this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,t.clip&&this.rebuildClipped(),this.rebuildLandscaping())}refreshAll(){for(let e of this.city.buildings)this.writeBuilding(e);for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,this.rebuildClipped(),this.rebuildLandscaping()}landscapingSignature(){return this.city.buildings.filter(e=>e.district===`downtown`).map(e=>`${e.id}:${e.state[0]}`).join(`|`)}rebuildLandscaping(){let e=this.landscapingSignature();if(e===this.landscapedState)return;this.landscapedState=e;let t=this.buildLandscapedBuiltBlocks();if(this.landscaped){this.group.remove(this.landscaped),this.landscaped.geometry.dispose();let e=this.landscaped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.landscaped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}flush(e){e&&(e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0))}flushDetails(){for(let e of[this.roofs,this.trims,this.windowBands,this.greebles])this.flush(e)}writeBuilding(e){let t=this.slots.get(e.id);if(!t)return;let n=Ji[e.state],r=Math.max(e.height*qf[e.state],2.2),i=e.width*n,a=e.depth*n,o=Wf(e);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(i,r,a),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,X+r/2,e.z),t.mesh.setMatrixAt(t.index,this.matrix);let s=o.facade;e.state===`rubble`?this.color.setHex(Kf.rubble):(this.color.setHex(s),e.state===`damaged`&&this.color.multiplyScalar(.76)),t.mesh.setColorAt(t.index,this.color),this.writeBuildingDetails(e,i,a,r,o),this.writeGreebles(e,X+r),this.writeDebris(e)}writeBuildingDetails(e,t,n,r,i){let a=this.detailSlots.get(e.id);if(a===void 0)return;let o=(t,n,r,i,o,s)=>{this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n,r,i),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,o,e.z),t.setMatrixAt(a,this.matrix),this.color.setHex(s),e.state===`damaged`&&this.color.multiplyScalar(.76),t.setColorAt(a,this.color)};if(e.state===`rubble`){for(let t of[this.roofs,this.trims,this.windowBands])this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,X,e.z),t.setMatrixAt(a,this.matrix);return}let s=.65,c=.42,l=X+r,u=Math.min(1.15,Math.max(.65,r*.09)),d=l-Math.min(4.2,Math.max(1.6,r*.22));o(this.trims,t*1.025,c,n*1.025,l-c/2,i.trim),o(this.windowBands,t*1.012,u,n*1.012,d,i.window),o(this.roofs,t*.985,s,n*.985,l+s/2,i.roof)}writeGreebles(e,t){let n=this.greebleStart.get(e.id);if(n===void 0)return;let r=e.state===`intact`;for(let i=0;i<e.greebles;i++){if(!r){this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,t,e.z),this.greebles.setMatrixAt(n+i,this.matrix);continue}let a=Ni({x:((i+1)/(e.greebles+1)-.5)*e.width*.55,z:((e.id+i)%5/5-.5)*e.depth*.55},e.rotation??0),o=Math.min(e.width,e.depth)*.16,s=o*(.52+(e.id+i)%3*.1);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(o*1.28,s,o),this.matrix.scale(this.scale),this.matrix.setPosition(e.x+a.x,t+s/2,e.z+a.z),this.greebles.setMatrixAt(n+i,this.matrix),this.color.setHex(Kf.hvac),this.greebles.setColorAt(n+i,this.color)}}writeDebris(e){let t=e.id*Yf;if(t+Yf>this.debris.count)return;let n=e.state===`rubble`;for(let r=0;r<Yf;r++){if(!n){this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,X,e.z),this.debris.setMatrixAt(t+r,this.matrix);continue}let i=e.id*3+r,a=Ni({x:(i*37%100/100-.5)*(e.width+16),z:(i*61%100/100-.5)*(e.depth+16)},e.rotation??0),o=Math.min(e.width,e.depth)*(.14+i%4/4*.16);this.matrix.makeScale(o,o*.5,o),this.matrix.setPosition(e.x+a.x,X+o*.25,e.z+a.z),this.debris.setMatrixAt(t+r,this.matrix)}}get meshCount(){return this.group.children.length}get buildingMeshes(){return this.buildingMeshList}get buildingHeatmapSources(){return this.clipped?[...this.buildingMeshList,this.roofs,this.clipped]:[...this.buildingMeshList,this.roofs]}get buildingHeatmapInstanceIds(){return this.buildingHeatmapInstanceIdsByMesh}renderedStoreysOf(e){let t=this.slots.get(e);return typeof t?.mesh.userData.storeys==`number`?t.mesh.userData.storeys:void 0}renderedHeightOf(e){if(this.city.get(e)?.clip)return 2.2;let t=this.slots.get(e);if(t)return t.mesh.getMatrixAt(t.index,this.matrix),this.matrix.elements[5]}dispose(){for(let e of this.group.children)if(e instanceof B){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}}},$f=256,ep=180,tp=new W(0,1,0);function np(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function rp(e,t,n){let r=e.instanceColor,a=t*3;if(r&&Math.fround(n.r)===r.array[a]&&Math.fround(n.g)===r.array[a+1]&&Math.fround(n.b)===r.array[a+2])return!1;e.setColorAt(t,n);let o=e.instanceColor;return o?(o.setUsage(i),o.addUpdateRange(a,3),!0):!1}function ip(e,t,n){return Math.max(t,Math.min(n,e))}function ap(e){switch(e){case`machine-cannon`:return{colour:it(`machines`),width:4.1,impact:3.1};case`machine-harbinger-laser`:return{colour:it(`machines`),width:.48,impact:2.3};case`machine-rifle`:return{colour:it(`machines`),width:.18,impact:1};case`ancient-acid`:return{colour:st,width:.34,impact:1.7};case`ancient-bite`:return{colour:16760428,width:0,impact:1.8};default:return{colour:16777215,width:.25,impact:1.2}}}var op=class{group=new p;beamsMesh;impactsMesh;matrix=new z;position=new W;direction=new W;scale=new W;rotation=new O;colour=new V;beams=[];impacts=[];melee=new Map;constructor(){let e=new Ie({color:16777215,transparent:!0,opacity:.9,depthWrite:!1});e.userData.outlineParameters={visible:!1},this.beamsMesh=new d(new Ze(1,1,1,6),e,$f),this.impactsMesh=new d(new et(1,1),new Ie({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),$f);for(let e of[this.beamsMesh,this.impactsMesh])e.instanceMatrix.setUsage(i),e.count=0;this.beamsMesh.frustumCulled=!1,this.impactsMesh.frustumCulled=!1,this.beamsMesh.renderOrder=20,this.impactsMesh.renderOrder=21,this.group.add(this.beamsMesh,this.impactsMesh)}sync(e,t){for(let n of e)n.kind===`combatHit`&&this.addHit(n,t);this.beams=this.beams.filter(e=>t<e.startedAt+e.duration),this.impacts=this.impacts.filter(e=>t<e.startedAt+e.duration);for(let[e,n]of this.melee)t>=n.startedAt+n.duration&&this.melee.delete(e);this.syncBeams(t),this.syncImpacts(t)}meleePose(e,t){let n=this.melee.get(e);if(!n)return;let r=ip((t-n.startedAt)/n.duration,0,1);if(r>=1)return;let i=Math.sin(r*Math.PI);return{forward:i*n.distance,yaw:i*.18}}addHit(e,t){let n=Gs(e.weaponId),r=ap(e.weaponId),i=yl(e.attackerTypeId),a=e.targetHeight??yl(e.targetTypeId).height,o=Math.max(1,i.radius*.48),s=e.weaponId===`machine-cannon`?.6:.3,c=(e.shotIndex-(e.shotCount-1)/2)*Math.max(.8,i.radius*s),l=new W(e.sourceX+Math.cos(e.sourceHeading)*o-Math.sin(e.sourceHeading)*c,X+i.height*.58,e.sourceZ+Math.sin(e.sourceHeading)*o+Math.cos(e.sourceHeading)*c),u=new W(e.targetX,X+a*.56,e.targetZ);if(n.projectileSpeed===0){this.melee.set(e.attackerId,{startedAt:t,duration:ep,distance:Math.max(.6,i.radius*.1)}),this.pushImpact({position:u,colour:r.colour,radius:r.impact,startedAt:t,duration:130});return}let d=ip(l.distanceTo(u)/n.projectileSpeed*250,65,180);this.pushBeam({start:l,end:u,colour:r.colour,width:r.width,startedAt:t,duration:d}),this.pushImpact({position:u,colour:r.colour,radius:r.impact,startedAt:t+d*.72,duration:120})}pushBeam(e){this.beams.length>=$f&&this.beams.shift(),this.beams.push(e)}pushImpact(e){this.impacts.length>=$f&&this.impacts.shift(),this.impacts.push(e)}syncBeams(e){let t=0,n=!1,r=!1;for(let i of this.beams){let a=ip((e-i.startedAt)/i.duration,0,1);this.direction.subVectors(i.end,i.start).multiplyScalar(a);let o=this.direction.length();if(o<=1e-5)continue;this.direction.normalize(),this.position.copy(i.start).addScaledVector(this.direction,o/2),this.rotation.setFromUnitVectors(tp,this.direction);let s=1-a*.55;this.scale.set(i.width*s,o,i.width*s),this.matrix.compose(this.position,this.rotation,this.scale),n=np(this.beamsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=rp(this.beamsMesh,t,this.colour)||r,t++}this.finish(this.beamsMesh,t,n,r)}syncImpacts(e){let t=0,n=!1,r=!1;for(let i of this.impacts){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.45+Math.sin(a*Math.PI)*.9);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=np(this.impactsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=rp(this.impactsMesh,t,this.colour)||r,t++}this.finish(this.impactsMesh,t,n,r)}finish(e,t,n,r){e.count=t,n&&(e.instanceMatrix.needsUpdate=!0),r&&e.instanceColor&&(e.instanceColor.needsUpdate=!0)}dispose(){this.beamsMesh.geometry.dispose(),this.beamsMesh.material.dispose(),this.impactsMesh.geometry.dispose(),this.impactsMesh.material.dispose()}},sp=[10800,-81e3,10800],cp=35e3,lp=[8433856,8433856,8958144,8960192,9484488],up=[12636344,11585712,12112064,11585720,12636352,11059376],dp=40,fp=22;function pp(e,t){return(e*17+t*13)%19/18}function mp(e,t,n){let r=Math.atan2(n,e),i=Math.asin(t/Math.hypot(e,t,n)),a=Math.floor((r+Math.PI)/(Math.PI*2)*dp);return Math.floor((i+Math.PI/2)/Math.PI*fp)*dp+a}function hp(){let e=new et(cp,5).toNonIndexed(),t=e.getAttribute(`position`),n=new Float32Array(t.count*3),r=new V;for(let e=0;e<t.count/3;e++){let i=e*3,a=((t.getX(i)??0)+(t.getX(i+1)??0)+(t.getX(i+2)??0))/3,o=((t.getY(i)??0)+(t.getY(i+1)??0)+(t.getY(i+2)??0))/3,s=((t.getZ(i)??0)+(t.getZ(i+1)??0)+(t.getZ(i+2)??0))/3,c=(a+s)*.6+o*.53,l=mp(a,o,s),u=c<cp*.35||pp(l,1)>.48?lp:up,d=Math.min(u.length-1,Math.floor(pp(l,2)*u.length));r.setHex(u[d]);for(let e=0;e<3;e++){let t=(i+e)*3;n[t]=r.r,n[t+1]=r.g,n[t+2]=r.b}}e.setAttribute(`color`,new R(n,3));let i=new B(e,new Ie({vertexColors:!0,fog:!1}));return i.position.set(sp[0],sp[1],sp[2]),i}var gp=class{group=new p;constructor(){this.group.add(hp())}dispose(){for(let e of this.group.children)e instanceof B&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose());this.group.clear()}},_p=2e-5,vp=.58,yp=class{units;group=new p;overlayScene=new C;depthScene=new C;occluderTarget;unitDepthTarget;size=new Me;overlays;importedOverlays;constructor(e){this.units=e,this.occluderTarget=bp(),this.unitDepthTarget=bp(),this.group.name=`unit-occlusion-overlay`,this.overlayScene.add(this.group),this.overlays=this.units.occlusionSources().map(e=>this.createOverlay(e)),this.importedOverlays=this.units.importedOcclusionSources().map(e=>this.createImportedOverlay(e))}captureOccluderDepth(e,t,n){this.resizeToRenderer(e);let r=this.units.group.visible,i=e.getRenderTarget(),a=e.autoClear,o=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,this.units.group.visible=!1;try{e.setRenderTarget(this.occluderTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(t,n)}finally{e.setRenderTarget(i),e.autoClear=a,this.units.group.visible=r,e.shadowMap.autoUpdate=o}}render(e,t){for(let e of this.overlays){let t=e.source.source.visible?e.source.source.count:0;e.mesh.count=t,e.depthMesh.count=t,e.colour.setHex(rt(e.source.faction))}for(let e of this.importedOverlays)e.colour.setHex(rt(e.source.faction));this.captureUnitSilhouetteDepth(e,t);let n=e.autoClear;try{e.autoClear=!1,e.render(this.overlayScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.material,e.render(n.scene,t))}finally{e.autoClear=n}}dispose(){this.occluderTarget.dispose(),this.unitDepthTarget.dispose();for(let e of this.overlays)e.material.dispose(),e.depthMaterial.dispose();for(let e of this.importedOverlays)e.material.dispose(),e.depthMaterial.dispose(),e.source.source.removeFromParent(),e.scene.clear();this.group.clear(),this.overlayScene.clear(),this.depthScene.clear()}createOverlay(e){let t=new V(rt(e.faction)),n=new D({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:vp},epsilon:{value:_p}},vertexShader:`
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
      `}),r=new d(e.geometry,n,e.source.instanceMatrix.count);r.instanceMatrix=e.source.instanceMatrix,r.count=0,r.frustumCulled=!1,this.group.add(r);let i=new D({colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          vec4 viewPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        void main() { }
      `}),a=new d(e.geometry,i,e.source.instanceMatrix.count);return a.instanceMatrix=e.source.instanceMatrix,a.count=0,a.frustumCulled=!1,this.depthScene.add(a),{source:e,mesh:r,depthMesh:a,material:n,depthMaterial:i,colour:t}}createImportedOverlay(e){let t=new V(rt(e.faction)),n=new D({transparent:!0,side:2,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:vp},epsilon:{value:_p}},vertexShader:`
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
      `}),r=new D({side:2,colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        void main() { }
      `}),i=new C;return i.add(e.source),{source:e,scene:i,material:n,depthMaterial:r,colour:t}}captureUnitSilhouetteDepth(e,t){let n=e.getRenderTarget(),r=e.autoClear;try{e.setRenderTarget(this.unitDepthTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(this.depthScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.depthMaterial,e.render(n.scene,t))}finally{e.setRenderTarget(n),e.autoClear=r}}resizeToRenderer(e){e.getDrawingBufferSize(this.size);let t=Math.max(1,Math.floor(this.size.x)),n=Math.max(1,Math.floor(this.size.y));(this.occluderTarget.width!==t||this.occluderTarget.height!==n)&&(this.occluderTarget.setSize(t,n),this.unitDepthTarget.setSize(t,n))}};function bp(){let e=new M(1,1,ee);e.format=t;let n=new Re(1,1,{depthBuffer:!0});return n.depthTexture=e,n}var xp=2,Sp=8,Cp=.3,wp=.52,Tp=class{units;maskScene=new C;maskGroup=new p;maskTarget=Ep(!0);horizontalTarget=Ep(!1);postScene=new C;postCamera=new c(-1,1,1,-1,0,2);horizontalMaterial;compositeMaterial;fullscreen;buildingMask;masks;resolution=new Me;clearColour=new V;constructor(e){this.units=e,this.postCamera.position.z=1,this.maskScene.add(this.maskGroup),this.masks=this.units.selectionSources().map(e=>this.createMask(e)),this.maskGroup.add(this.units.importedSelectionSources()),this.buildingMask=new B(new Ee,new Ie({color:16719904,side:2,toneMapped:!1})),this.buildingMask.visible=!1,this.maskGroup.add(this.buildingMask),this.horizontalMaterial=Dp(this.maskTarget.texture,this.resolution,!1),this.compositeMaterial=Dp(this.horizontalTarget.texture,this.resolution,!0),this.compositeMaterial.uniforms.originMask.value=this.maskTarget.texture,this.fullscreen=new B(new Ee(2,2),this.horizontalMaterial),this.fullscreen.frustumCulled=!1,this.postScene.add(this.fullscreen)}render(e,t,n){this.syncSources(n),!(this.units.selectedDrawn===0&&this.units.alertedDrawn===0&&!n)&&(this.resizeToRenderer(e),this.captureMask(e,t),this.renderHorizontal(e),this.composite(e))}dispose(){this.maskTarget.dispose(),this.horizontalTarget.dispose(),this.horizontalMaterial.dispose(),this.compositeMaterial.dispose(),this.fullscreen.geometry.dispose(),this.buildingMask.material.dispose();for(let e of this.masks)e.mesh.material.dispose();this.maskGroup.remove(this.units.importedSelectionSources()),this.maskGroup.clear(),this.maskScene.clear(),this.postScene.clear()}createMask(e){let t=new d(e.geometry,new Ie({color:e.alert?16719904:Qc[e.faction].line,side:2,toneMapped:!1}),e.source.instanceMatrix.count);return t.instanceMatrix=e.source.instanceMatrix,t.count=0,t.frustumCulled=!1,this.maskGroup.add(t),{source:e,mesh:t}}syncSources(e){for(let e of this.masks)e.mesh.count=e.source.source.count;this.buildingMask.visible=e!==void 0,e&&(this.buildingMask.geometry=e.geometry,this.buildingMask.material.color.setHex(e.colour))}captureMask(e,t){let n=e.getRenderTarget(),r=e.autoClear,i=e.getClearAlpha();e.getClearColor(this.clearColour);try{e.setRenderTarget(this.maskTarget),e.autoClear=!1,e.setClearColor(0,0),e.clear(!0,!0,!0),e.render(this.maskScene,t)}finally{e.setClearColor(this.clearColour,i),e.setRenderTarget(n),e.autoClear=r}}renderHorizontal(e){let t=e.getRenderTarget(),n=e.autoClear;try{e.setRenderTarget(this.horizontalTarget),e.autoClear=!1,e.clear(!0,!0,!0),this.fullscreen.material=this.horizontalMaterial,e.render(this.postScene,this.postCamera)}finally{e.setRenderTarget(t),e.autoClear=n}}composite(e){let t=e.autoClear;try{e.autoClear=!1,this.fullscreen.material=this.compositeMaterial,e.render(this.postScene,this.postCamera)}finally{e.autoClear=t}}resizeToRenderer(e){e.getDrawingBufferSize(this.resolution);let t=Math.max(1,Math.floor(this.resolution.x)),n=Math.max(1,Math.floor(this.resolution.y));(this.maskTarget.width!==t||this.maskTarget.height!==n)&&(this.maskTarget.setSize(t,n),this.horizontalTarget.setSize(t,n));let r=Math.min(Sp,Math.max(1,Math.round(xp*e.getPixelRatio())));this.horizontalMaterial.uniforms.radius.value=r,this.compositeMaterial.uniforms.radius.value=r}};function Ep(e){let t=new Re(1,1,{depthBuffer:e});return t.texture.minFilter=Xe,t.texture.magFilter=Xe,t.texture.generateMipmaps=!1,t}function Dp(e,t,n){return new D({transparent:n,depthTest:!1,depthWrite:!1,uniforms:{mask:{value:e},originMask:{value:e},resolution:{value:t},radius:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:n?kp():Op()})}function Op(){return`
    uniform sampler2D mask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${Sp}; offset <= ${Sp}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(float(offset) / resolution.x, 0.0));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      gl_FragColor = best;
    }
  `}function kp(){return`
    uniform sampler2D mask;
    uniform sampler2D originMask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${Sp}; offset <= ${Sp}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(0.0, float(offset) / resolution.y));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      if (best.a < 0.5) discard;
      float original = texture2D(originMask, vUv).a;
      float opacity = original >= 0.5 ? ${Cp.toFixed(2)} : ${wp.toFixed(2)};
      gl_FragColor = vec4(best.rgb, opacity);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}var Ap={x:-1244,y:3e3,z:700},jp=16770750,Mp=2.6,Np=7438479,Pp=.82,Fp={x:-Ap.x/Ap.y,z:-Ap.z/Ap.y},Ip=4096,Lp=760,Rp=1900,zp=.9;function Bp(e,t,n){if(!e.castShadow)return;let r=ke.clamp(n,0,1),i=ke.lerp(Lp,Rp,r*r),a=i*2/Ip,o=Math.round(t.x/a)*a,s=Math.round(t.z/a)*a;e.position.set(Ap.x+o,Ap.y,Ap.z+s),e.target.position.set(o,0,s),e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.radius=zp/a,e.shadow.camera.updateProjectionMatrix()}function Vp(e={cityLighting:!0,enhancedShadows:!0}){let t=e.cityLighting?new o(jp,Mp):new o(16774102,2.05);return e.enhancedShadows?t.position.set(Ap.x,Ap.y,Ap.z):t.position.set(-1,1,0).normalize(),t.castShadow=e.enhancedShadows,e.enhancedShadows?(t.shadow.mapSize.set(Ip,Ip),t.shadow.camera.left=-1900,t.shadow.camera.right=Rp,t.shadow.camera.top=Rp,t.shadow.camera.bottom=-1900,t.shadow.camera.near=100,t.shadow.camera.far=6e3,t.shadow.normalBias=.12,t.shadow.bias=-8e-5,t.shadow.radius=zp/(Rp*2/Ip),t.shadow.camera.updateProjectionMatrix(),t):t}function Hp(e={cityLighting:!0,enhancedShadows:!0}){return e.cityLighting?new k(Kf.sky,Np,Pp):new k(Kf.sky,7236170,1)}var Up=256,Wp=X+.12,Gp=Fp.x,Kp=Fp.z,qp=2.75,Jp=6.25,Yp=8,Xp=1.4,Zp=1,Qp=0;function $p(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var em=class{group=new p;buildings;contacts;trees;units;matrix=new z;scale=new W;enhancedShadows;buildingSignature=``;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}){this.enhancedShadows=n.enhancedShadows;let r=(e,t)=>new ge({color:1512978,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,...t===void 0?{}:{side:t}});this.buildings=new B(new De,r(n.enhancedShadows?.1:.24)),this.buildings.name=`building-shadows`,this.contacts=new B(new De,r(.22,2)),this.contacts.name=`building-contact-ao`,this.contacts.visible=n.ambientOcclusion,this.trees=new B(new De,r(n.enhancedShadows?.13:.24)),this.trees.name=`tree-shadows`,this.units=new d(new fe(1,12),r(n.enhancedShadows?.18:.24),Up),this.units.visible=!n.enhancedShadows,this.units.instanceMatrix.setUsage(i),this.units.count=0;for(let e of[this.buildings,this.contacts,this.trees,this.units])e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1;this.group.add(this.buildings,this.contacts,this.trees,this.units),this.rebuildTreeShadows(e),this.sync(e,t)}sync(e,t){let n=e.buildings.map(e=>e.state).join(``);n!==this.buildingSignature&&(this.buildingSignature=n,this.rebuildBuildingShadows(e),this.rebuildBuildingContacts(e));let r=0,i=!1;for(let e of t.units){if(r>=this.units.instanceMatrix.count)break;let n=ds(t.typeOf(e));this.matrix.makeRotationX(-Math.PI/2),this.scale.set(n*.9,n*.62,1),this.matrix.scale(this.scale),this.matrix.setPosition(e.x+n*.22,Wp+.03,e.z+n*.16),i=$p(this.units,r++,this.matrix)||i}this.units.count=r,i&&(this.units.instanceMatrix.needsUpdate=!0)}rebuildBuildingShadows(e){let t=[],n=e.surfaces.flatMap(tm);for(let r of e.buildings){let e=r.state===`intact`?r.height:r.state===`damaged`?r.height*.55:0;if(e<=0)continue;let i=e*(this.enhancedShadows?1:.48),a=this.enhancedShadows?Gp:Zp,o=this.enhancedShadows?Kp:Qp,s=r.clip??Qi(r),c=nm([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]);this.appendClippedShadow(t,n,c)}let r=this.buildings.geometry,i=new De;i.setAttribute(`position`,new R(new Float32Array(t),3)),i.computeVertexNormals(),this.buildings.geometry=i,r.dispose()}rebuildBuildingContacts(e){let t=[],n=e.surfaces.flatMap(tm);for(let r of e.buildings){if(r.state===`rubble`)continue;let e=r.clip??Qi(r);if(e.length<3)continue;let i=e.map(e=>{let t=e.x-r.x,n=e.z-r.z,i=Math.hypot(t,n)||1;return{x:e.x+t/i*Xp,z:e.z+n/i*Xp}});for(let r=0;r<e.length;r++){let a=(r+1)%e.length,o=e[r],s=e[a],c=i[r],l=i[a];!o||!s||!c||!l||(this.appendClippedShadow(t,n,[o,l,c]),this.appendClippedShadow(t,n,[o,s,l]))}}let r=this.contacts.geometry,i=new De;i.setAttribute(`position`,new R(new Float32Array(t),3)),i.computeVertexNormals(),this.contacts.geometry=i,r.dispose()}rebuildTreeShadows(e){let t=[],n=e.surfaces.flatMap(tm);for(let r of e.trees){let e=qp*r.scale,i=Jp*r.scale*(this.enhancedShadows?1:.48),a=this.enhancedShadows?Gp:Zp,o=this.enhancedShadows?Kp:Qp,s=Array.from({length:Yp},(t,n)=>{let i=n/Yp*Math.PI*2;return{x:r.x+Math.cos(i)*e,z:r.z+Math.sin(i)*e}});this.appendClippedShadow(t,n,nm([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]))}let r=this.trees.geometry,i=new De;i.setAttribute(`position`,new R(new Float32Array(t),3)),i.computeVertexNormals(),this.trees.geometry=i,r.dispose()}appendClippedShadow(e,t,n){for(let r of t){let t=zi(r,n);for(let n=1;n<t.length-1;n++)this.appendTriangle(e,t[0],t[n+1],t[n])}}appendTriangle(e,t,n,r){if(!(!t||!n||!r))for(let i of[t,n,r])e.push(i.x,Wp,i.z)}dispose(){for(let e of[this.buildings,this.contacts,this.trees,this.units])e.geometry.dispose(),e.material.dispose()}};function tm(e){if(e.length<3)return[];let t=e.map(e=>new Me(e.x,e.z));return v.triangulateShape(t,[]).flatMap(t=>{let[n,r,i]=t,a=n===void 0?void 0:e[n],o=r===void 0?void 0:e[r],s=i===void 0?void 0:e[i];return a&&o&&s?[[a,o,s]]:[]})}function nm(e){let t=[...e].sort((e,t)=>e.x-t.x||e.z-t.z),n=(e,t,n)=>(t.x-e.x)*(n.z-e.z)-(t.z-e.z)*(n.x-e.x),r=e=>{let t=[];for(let r of e){for(;t.length>=2&&n(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t},i=r(t),a=r([...t].reverse());return i.pop(),a.pop(),[...i,...a]}var rm=2400,im=7e3,am=1600,om=1e3;function sm(e,t,n,r){let i=(e,i)=>({x:t+e*r,y:n+i*r}),a=[i(-115,5),i(-75,-25),i(-20,-18),i(5,-48),i(70,-38),i(105,-8),i(92,18),i(-55,24)],o=[a[7],a[6],i(92,43),i(-55,49)],s=[a[6],a[5],i(105,18),i(92,43)],c=(t,n)=>{let r=t[0];if(r){e.beginPath(),e.moveTo(r.x,r.y);for(let n of t.slice(1))e.lineTo(n.x,n.y);e.closePath(),e.fillStyle=n,e.fill()}};c(o,`#dbd8c6`),c(s,`#c9c8bb`),c(a,`#f6f0dd`)}function cm(){let e=document.createElement(`canvas`);e.width=am,e.height=om;let t=e.getContext(`2d`);if(t){let n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,`#${new V(Kf.sky).getHexString()}`),n.addColorStop(1,`#${new V(Kf.skyHorizon).getHexString()}`),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),sm(t,255,160,.75),sm(t,1240,125,1.1)}let n=new ce(e);return n.colorSpace=we,n.needsUpdate=!0,n}var lm=class{scene=new C;city;units;unitOcclusion;selectionSilhouette;combat;shadows;skyGradient;earth;sun;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}){this.skyGradient=cm(),this.scene.background=this.skyGradient,this.scene.fog=new S(Kf.skyHorizon,rm,im),this.earth=new gp,this.scene.add(this.earth.group),this.shadows=new em(e,t,n),this.scene.add(this.shadows.group),this.city=new Qf(e),this.scene.add(this.city.group),this.units=new Tl(t,n.modelMode??`detailed`),this.scene.add(this.units.group),this.unitOcclusion=new yp(this.units),this.selectionSilhouette=new Tp(this.units),this.combat=new op,this.scene.add(this.combat.group),this.sun=Vp(n),this.scene.add(this.sun,this.sun.target),this.scene.add(Hp(n))}updateShadowCoverage(e,t){Bp(this.sun,e,t)}dispose(){this.city.dispose(),this.unitOcclusion.dispose(),this.selectionSilhouette.dispose(),this.units.dispose(),this.combat.dispose(),this.shadows.dispose(),this.earth.dispose(),this.skyGradient.dispose(),this.scene.clear()}},um=[1,2,3,4,5,6,7,8,9,0],dm=class{ids=[];groups=new Map;get size(){return this.ids.length}list(){return this.ids}has(e){return this.ids.includes(e)}primary(){return this.ids[0]}set(e){this.ids=[...new Set(e)].sort((e,t)=>e-t)}add(e){this.set([...this.ids,...e])}toggle(e){this.set(this.has(e)?this.ids.filter(t=>t!==e):[...this.ids,e])}clear(){this.ids=[]}assignGroup(e,t=this.ids){um.includes(e)&&this.groups.set(e,[...t])}recallGroup(e){let t=this.groups.get(e);return!t||t.length===0?!1:(this.set(t),!0)}groupSize(e){return this.groups.get(e)?.length??0}occupiedGroups(){return um.filter(e=>this.groupSize(e)>0)}prune(e){this.ids=this.ids.filter(e);for(let[t,n]of this.groups){let r=n.filter(e);r.length!==n.length&&(r.length===0?this.groups.delete(t):this.groups.set(t,r))}}},fm=`human-resources.frontend`;function pm(){return{colourVariant:{machines:0,ancients:0},overlayVisible:!0,cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1,modelMode:`detailed`}}function mm(e=typeof window>`u`?void 0:window.localStorage){let t=pm();try{let n=e?.getItem(fm);if(!n)return t;let r=JSON.parse(n),i=e=>+(e===1);return{colourVariant:{machines:i(r.colourVariant?.machines),ancients:i(r.colourVariant?.ancients)},overlayVisible:r.overlayVisible!==!1,cityLighting:r.cityLighting!==!1,enhancedShadows:r.enhancedShadows!==!1,ambientOcclusion:r.ambientOcclusion===!0,modelMode:r.modelMode===`regular`?`regular`:`detailed`}}catch{return t}}function hm(e,t=typeof window>`u`?void 0:window.localStorage){try{t?.setItem(fm,JSON.stringify(e))}catch{}}var gm=`
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
`,_m=!1;function vm(){if(_m)return;_m=!0;let e=document.createElement(`style`);e.textContent=gm,document.head.append(e)}function ym(e){let t=new URLSearchParams(e).get(`ai`);if(!t)return;let n=t===`both`?[`machines`,`ancients`]:t.split(`,`).map(e=>e.trim()),r={};for(let e of n)(e===`machines`||e===`ancients`)&&(r[e]=`ai`);return Object.keys(r).length>0?r:void 0}var bm=1213353265,xm=250,Sm=85,Cm=100,wm=1800,Tm=[1,2,4],Em=80,Dm=3;function Om(e,t,n){let r,i=1/0;for(let a of e.buildings){if(a.state===`rubble`)continue;let e=(a.x-t)**2+(a.z-n)**2;e<i&&(i=e,r=a.id)}return r}var km=class{windowTicks;ticks=[];earned=[];total=0;last=null;constructor(e=360){this.windowTicks=e}add(e,t){for(this.last!==null&&t>this.last&&(this.total+=t-this.last),this.last=t,this.ticks.push(e),this.earned.push(this.total);this.ticks.length>1&&e-(this.ticks[0]??e)>this.windowTicks;)this.ticks.shift(),this.earned.shift()}get perMinute(){if(this.ticks.length<2)return 0;let e=(this.ticks.at(-1)??0)-(this.ticks[0]??0);return e<=0?0:((this.earned.at(-1)??0)-(this.earned[0]??0))/e*30*60}};function Am(e,t){switch(e.kind){case`produced`:case`constructionComplete`:case`productionQueued`:return null;case`productionRefused`:return`INSUFFICIENT HUMANS`;case`productionQueueFull`:return`QUEUE FULL (5)`;case`productionBlocked`:return`NO ROOM TO DEPLOY`;case`buildRefused`:return`CANNOT BUILD HERE`;case`constructionRefusedResources`:return`INSUFFICIENT HUMANS`;case`constructionStarted`:return`${(e.subject??`STRUCTURE`).toUpperCase()} SUMMONING`;case`constructionCancelled`:return`SUMMONING CANCELLED`;case`underAttack`:return`UNIT UNDER ATTACK`;case`combatHit`:return null;case`unitDown`:return`UNIT DESTROYED`;case`harbingerDown`:return`HARBINGER DESTROYED`;case`matchResolved`:return e.faction===void 0?`STALEMATE`:e.faction===t?`VICTORY`:`DEFEAT`;case`tier2`:return`TIER 2 UNLOCKED`;case`tier2Refused`:return`TIER 2 UNAVAILABLE`;case`deposited`:return null}}var jm=new Set([`productionRefused`,`productionQueueFull`,`productionBlocked`,`constructionStarted`,`constructionCancelled`,`constructionRefusedResources`]);function Mm({world:e,renderer:t,toonEffect:n,renderSettings:r,overlayEl:i,boxEl:a,store:o,onLoadRequested:s,onSeedStepRequested:c,onExitToTitle:l,onPlayAgainRequested:u,onBattleFactionRequested:d,diagnosticsEnabled:f,detailedPerformance:p}){let m=new Do(e),h=new lm(e.city,e.army,r),g=e.army.units.filter(t=>e.army.typeOf(t).faction===e.playerFaction),_=e.city.startAnchors[e.playerFaction===`machines`?0:1]??{x:0,z:0},v=g.length>0?{x:g.reduce((e,t)=>e+t.x,0)/g.length,z:g.reduce((e,t)=>e+t.z,0)/g.length}:_,y=new Xl(window.innerWidth/window.innerHeight,v),b=new ji(t.domElement),x=new dm,S=t=>{e.controllers[e.playerFaction]!==`ai`&&e.enqueue(e.playerFaction,t)},C=new Md(i),w=new kd,T=p&&r.modelMode===`detailed`;T&&(t.info.autoReset=!1);let E=new km,D=new km,O=new zd(document.body,e.city,e.population,e.populationCapacity,e.playerFaction),ee=new of(e.city,h.city,e.population,e.populationCapacity);h.scene.add(ee.group);let k=new pf(document.body),A=new Ef(e.city,e.army,e.population);h.scene.add(A.group);let j=new Ff;h.scene.add(j.group);let M=new Rf;h.scene.add(M.group);let N=null,te=0,P=(e,t)=>{N=e,te=t+wm},ne=new wu(document.body,Uu({world:e,selected:0,banner:null}),t=>{t===`cancel`&&x.size>0?S({kind:`stop`,unitIds:x.list()}):t===`primary`&&x.size>0&&e.playerFaction===`machines`&&S({kind:`deploy`,unitIds:x.list()})}),re=Cm,ie=null,F=null,I=!1,L=0,ae=new tu(document.body,e.playerFaction,{onDeploy:()=>S({kind:`deploy`,unitIds:x.list()}),onIsolateType:t=>{x.set(x.list().filter(n=>e.army.get(n)?.typeId===t))}}),oe=new pu(document.body,e.playerFaction,{onProduce:(e,t)=>S({kind:`produce`,producer:e,typeId:t}),onBuild:(t,n)=>{let r=us(n).cost;if(!e.freeProduction&&e.resources.humans<r){P(`INSUFFICIENT HUMANS`,performance.now());return}F={builderId:t.id,structureTypeId:n},P(`CHOOSE SUMMONING SITE`,performance.now())},onUnlockTier2:()=>S({kind:`unlockTier2`})}),R=null,se=0,ce=null,le=!0,z=null,ue=!1,de=()=>{z?.dispose(),z=null,ue=!1,b.consume()},fe=()=>{z||=(ue=!0,new fd(document.body,ce,{onSaveAndExit:()=>{if(!o){de(),l();return}let t=Sc(e);o.put(t,Date.now()).catch(e=>console.error(`save failed`,e)).finally(()=>{de(),l()})},onExitAnyway:()=>{de(),l()},onCancel:()=>de()}))},pe=null,B=t=>{pe||=(z&&de(),ue=!0,x.clear(),new pd(document.body,{winner:t.winner??void 0,playerFaction:e.playerFaction},{onPlayAgain:()=>u(),onBackToMenu:()=>l()}))};vm();let me=document.createElement(`div`);me.className=`control-notice`,me.style.display=`none`;let he=document.createElement(`div`);he.className=`speed-notice`,he.style.display=`none`,document.body.append(me,he);let ge=``,_e=``,ve=()=>{let t=e.controllers[e.playerFaction]===`ai`?`AI CONTROLLED`:``;t!==ge&&(ge=t,me.textContent=t,me.style.display=t.length>0?`block`:`none`);let n=Tm[L]??1,r=n===1?``:`${n}× SPEED`;r!==_e&&(_e=r,he.textContent=r,he.style.display=r.length>0?`block`:`none`)};ve();let ye=()=>{t.setSize(window.innerWidth,window.innerHeight),y.setAspect(window.innerWidth/window.innerHeight),le=!0};window.addEventListener(`resize`,ye);let be=new Me,xe=t=>{let n=Wl(y.camera,e.city,t);return jo(n===void 0?void 0:e.city.get(n),e.population)?n:void 0},Se=t=>{if(x.size===0)return;let n=Al(y.camera,e.army,t,h.units),r=n===void 0?void 0:e.army.get(n);if(!(!r||e.army.typeOf(r).faction===e.playerFaction))return x.list().some(t=>{let n=e.army.get(t);if(!n||n.deployTimer>0)return!1;let r=e.army.typeOf(n);return r.faction===e.playerFaction&&(r.weaponIds??[]).some(e=>Gs(e).targetClasses.includes(`unit`))})?r.id:void 0},Ce=0,we=null,Te=0,Ee=0,De=30,Oe=xm,ke=0,V=0,Ae=0,je=!1,H=!1,Ne=e.tick,Pe=``,Fe=NaN,Ie=NaN,U=NaN,Le=!0,W=0,G=!1,K=r=>{if(G)return;let i=we===null?1e3/60:r-we;if(we=r,w.add(i),T&&t.info.reset(),b.sample(),!ue){y.update(b,i/1e3);let t=f(),n=F!==null&&b.orderAt!==void 0;n&&(F=null,P(`SUMMONING CANCELLED`,r));let a=e.controllers[e.playerFaction]===`human`;a||(x.size>0&&x.clear(),ie=null,F=null,I=!1);let l=a?b.selectGesture:void 0;if(I&&b.orderAt!==void 0)I=!1,P(`ATTACK MOVE CANCELLED`,r);else if(I&&l&&!l.isBox){be.set((l.rect.x0+l.rect.x1)/2,(l.rect.y0+l.rect.y1)/2);let t=Wl(y.camera,e.city,be),n=kl(y.camera,be);if(t!==void 0&&x.size>0){let n=e.city.get(t);n&&(S({kind:`attack`,unitIds:x.list(),buildingId:n.id,x:n.x,z:n.z}),P(`DEMOLISHING`,r))}else n&&x.size>0&&(S({kind:`attackMove`,unitIds:x.list(),x:n.x,z:n.z}),P(`ATTACK MOVE`,r));I=!1}else if(l&&F){if(!l.isBox){be.set((l.rect.x0+l.rect.x1)/2,(l.rect.y0+l.rect.y1)/2);let t=kl(y.camera,be),n=t&&e.constructionPlacement(F.builderId,F.structureTypeId,t.x,t.z);n&&(S({kind:`build`,builderId:F.builderId,structureTypeId:F.structureTypeId,x:n.x,z:n.z}),F=null)}}else if(l)if(l.isBox){let t=Kl(y.camera,e.army,l.rect).filter(t=>{let n=e.army.get(t);return n!==void 0&&e.army.typeOf(n).faction===e.playerFaction});l.additive?x.add(t):x.set(t)}else{be.set((l.rect.x0+l.rect.x1)/2,(l.rect.y0+l.rect.y1)/2);let t=Al(y.camera,e.army,be,h.units),n=t===void 0?void 0:e.army.get(t),i=n&&e.army.typeOf(n).faction===e.playerFaction?t:void 0;if(n&&i===void 0)ie=n.id,l.additive||x.clear();else if(i===void 0){l.additive||(ie=null);let t=x.list().filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),n=Ol(y.camera,e.crowds.all,be),i=xe(be);t.length>0&&n!==void 0?(S({kind:`harvest`,unitIds:t,crowdId:n}),P(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r)):t.length>0&&i!==void 0?(S({kind:`harvest`,unitIds:t,buildingId:i}),P(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r)):l.additive||x.clear()}else if(l.doubleClick){let t=n.typeId,r=ql(y.camera,e.army).filter(n=>{let r=e.army.get(n);return r!==void 0&&e.army.typeOf(r).faction===e.playerFaction&&r.typeId===t});ie=null,l.additive?x.add(r):x.set(r)}else l.additive?(ie=null,x.toggle(i)):(ie=null,x.set([i]))}for(let e of um){let t=a?b.pressModifiers(`Digit${e}`):void 0;t&&(t.shift?x.assignGroup(e):x.recallGroup(e))}if(b.wasPressed(`Escape`)&&(I?(I=!1,P(`ATTACK MOVE CANCELLED`,r)):F?(F=null,P(`SUMMONING CANCELLED`,r)):x.size>0||ie!==null?(x.clear(),ie=null):fe()),t&&b.wasPressed(`KeyP`)&&(Le=!0),t&&b.wasPressed(`KeyI`)&&O.toggle(),t&&e.battlefield&&b.wasPressed(`Digit1`)&&d(`machines`),t&&e.battlefield&&b.wasPressed(`Digit2`)&&d(`ancients`),t&&b.wasPressed(`BracketLeft`)&&c(-1),t&&b.wasPressed(`BracketRight`)&&c(1),b.orderAt&&!n&&x.size>0){let t=x.list(),n=Se(b.orderAt),i=t.filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),a=Ol(y.camera,e.crowds.all,b.orderAt),o=xe(b.orderAt);if(n!==void 0){let r=e.army.get(n);r&&S({kind:`attack`,unitIds:t,targetId:r.id,x:r.x,z:r.z})}else if(i.length>0&&a!==void 0)S({kind:`harvest`,unitIds:i,crowdId:a}),P(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r);else if(i.length>0&&o!==void 0)S({kind:`harvest`,unitIds:i,buildingId:o}),P(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r);else{let e=kl(y.camera,b.orderAt);e&&S({kind:`move`,unitIds:t,x:e.x,z:e.z})}}if(t&&b.wasPressed(`KeyO`)){let t=b.pressModifiers(`KeyO`)?.shift?e.playerFaction===`machines`?`ancients`:`machines`:e.playerFaction,n=e.controllers[t]===`ai`?`human`:`ai`;e.enqueue(`debug`,{kind:`setController`,faction:t,controller:n}),n===`ai`&&t===e.playerFaction&&x.clear()}if(t&&b.wasPressed(`KeyF`)&&(L=(L+1)%Tm.length,P(`${Tm[L]??1}× SPEED`,r)),b.wasPressed(`KeyA`)&&x.size>0&&(I=!0,F=null,P(`ATTACK MOVE · PICK A POINT`,r)),b.wasPressed(`KeyQ`)&&x.size>0&&S({kind:`stop`,unitIds:x.list()}),t&&b.wasPressed(`KeyX`)){let t=Om(e.city,y.focus.x,y.focus.z);t!==void 0&&e.enqueue(`debug`,{kind:`damage`,buildingId:t})}if(t&&b.wasPressed(`KeyZ`)&&e.enqueue(`debug`,{kind:`raze`,x:y.focus.x,z:y.focus.z,radius:Sm}),t&&b.wasPressed(`KeyB`)){Ce=(Ce+1)%qi.length;let t=qi[Ce];e.enqueue(`debug`,{kind:`setAllStates`,state:t})}if(t&&b.wasPressed(`KeyH`)&&e.enqueue(`debug`,{kind:`debugResources`,humans:Em,charge:0}),t&&b.wasPressed(`KeyJ`)&&e.enqueue(`debug`,{kind:`debugResources`,humans:0,charge:Dm}),t&&b.wasPressed(`KeyE`)&&x.size>0){let t=Om(e.city,y.focus.x,y.focus.z);t!==void 0&&jo(e.city.get(t),e.population)&&(S({kind:`harvest`,unitIds:x.list(),buildingId:t}),P(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r))}if(t&&b.wasPressed(`KeyR`)&&x.size>0&&S({kind:`deploy`,unitIds:x.list()}),t&&b.wasPressed(`KeyT`)&&S({kind:`unlockTier2`}),t&&(b.wasPressed(`KeyF`)||b.wasPressed(`KeyG`))){let t=e.army.units.find(t=>e.army.typeOf(t).faction===e.playerFaction&&e.army.typeOf(t).producesUnits&&t.deployed&&t.deployTimer===0),n=e.playerFaction===`machines`?`machine-infantry`:`ancient-infantry`,i=e.playerFaction===`machines`?`machine-construct`:`ancient-support`;t?S({kind:`produce`,producer:{kind:`unit`,id:t.id},typeId:b.wasPressed(`KeyG`)?i:n}):P(`NO DEPLOYED FACTORY`,r)}if(t&&b.wasPressed(`KeyV`)){let t=x.primary()===void 0?void 0:e.army.get(x.primary());t&&e.army.typeOf(t).canDeploy&&S({kind:`deploy`,unitIds:[t.id]})}if(b.wasPressed(`F5`)&&o&&e.outcome)P(`MATCH OVER · NOT SAVED`,r);else if(b.wasPressed(`F5`)&&o){let t=Sc(e);P(`SAVING`,r),o.put(t,Date.now()).then(()=>{P(`SAVED · STEP ${t.tick}`,performance.now()),ce=`step ${t.tick}`}).catch(e=>{console.error(`save failed`,e),P(`SAVE FAILED`,performance.now())})}b.wasPressed(`F9`)&&s()}if(t.domElement.style.cursor=I?`crosshair`:F?`copy`:``,b.dragRect&&!ue){let e=b.dragRect;a.style.display=`block`,a.style.left=`${(e.x0+1)/2*100}%`,a.style.top=`${(1-e.y1)/2*100}%`,a.style.width=`${(e.x1-e.x0)/2*100}%`,a.style.height=`${(e.y1-e.y0)/2*100}%`}else a.style.display=`none`;b.consume();let l=performance.now(),u=m.advance(ue?0:i*(Tm[L]??1)),p=e.drainChangedBuildings();if(p.length>0)if(ke=performance.now()-l,Le=!0,p.length>8)h.city.refreshAll();else for(let e of p)h.city.refresh(e);ve();let g=e.drainEvents();e.outcome&&!pe&&B(e.outcome);let _=g.some(e=>e.kind===`combatHit`||e.kind===`unitDown`);h.combat.sync(g,r),h.units.syncDefeats(g,r);for(let t of g){let n=`faction`in t?t.faction:void 0;if(t.kind!==`matchResolved`&&n!==void 0&&n!==e.playerFaction)continue;let i=Am(t,e.playerFaction);i&&(P(i,r),jm.has(t.kind)&&(R=i,se=r+wm))}x.prune(t=>{let n=e.army.get(t);return n!==void 0&&e.army.typeOf(n).faction===e.playerFaction});let v=x.list(),z=`${ie??``}|${v.join(`,`)}`,de=z!==Pe;Pe=z;let me=y.camera,he=le||Math.abs(me.position.x-Fe)>.01||Math.abs(me.position.y-Ie)>.01||Math.abs(me.position.z-U)>.01;le=!1,Fe=me.position.x,Ie=me.position.y,U=me.position.z;let ge=e.tick!==Ne;Ne=e.tick;let _e=p.length>0||ge&&e.army.units.some(ms),ye=Se(b.pointer);h.units.sync(e.army,u,t=>{let n=e.army.get(t);if(t===ye)return`attack`;if((x.has(t)||t===ie)&&n)return`selected`},e=>h.combat.meleePose(e,r),r),k.sync({army:e.army,camera:me,nowMs:r,cameraDirty:he,stateDirty:_,selectionDirty:de,selectedIds:v,inspectedEnemyId:ie}),(ge||p.length>0)&&h.shadows.sync(e.city,e.army),j.sync(e.crowds.all,u,e.tick,e.army);let Me=v.filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),Re=Me.flatMap(t=>{let n=e.army.get(t);return n?[n]:[]});O.setSelectionEnabled(!1),O.sync({camera:me,zoomFraction:y.zoomFraction,nowMs:r,cameraDirty:he,populationDirty:_e}),ee.sync(Re,e.crowds.all,u,_e,p.length>0);let ze=Me.length>0?xe(b.pointer):void 0;A.sync(e.tick,Me.length>0,ze);let Be=F?kl(y.camera,b.pointer):void 0,Ve=F!==null&&Be!==void 0&&e.constructionPlacement(F.builderId,F.structureTypeId,Be.x,Be.z)!==void 0;if(M.sync(F&&Be?{structureTypeId:F.structureTypeId,x:Be.x,z:Be.z}:void 0,Ve,e.constructionSites,r),h.updateShadowCoverage(y.focus,y.zoomFraction),h.city.setOutlineZoom(y.zoomFraction),h.units.setOutlineZoom(y.zoomFraction),h.unitOcclusion.captureOccluderDepth(t,h.scene,y.camera),n.render(h.scene,y.camera),h.unitOcclusion.render(t,y.camera),h.selectionSilhouette.render(t,y.camera,A.selectionSource()),ie!==null&&e.army.get(ie)===void 0&&(ie=null),re+=i,re>=Cm){re=0,N!==null&&r>te&&(N=null),R!==null&&r>se&&(R=null),ne.render(Uu({world:e,selected:x.size,banner:N})),ae.render(qu(e,x,ie===null?void 0:e.army.get(ie)));let t=x.primary()===void 0?void 0:e.army.get(x.primary());oe.render(Yu(e,t,R))}if(Ee+=i,Ee>=1e3&&(De=(m.stepCount-Te)/Ee*1e3,Te=m.stepCount,Ee=0),E.add(e.tick,e.resources.humans),D.add(e.tick,e.resources.charge),Oe+=i,Oe>=xm){if(Oe=0,Le){Le=!1;let t=e.city.startAnchors[0];if(t){let n={x:y.focus.x,z:y.focus.z},r=e.nav.onShardCells,i=e.nav.flood(t.x,t.z,`small`,n),a=e.nav.flood(t.x,t.z,`large`,n);V=i.count/r,Ae=a.count/r,je=i.reachedTarget,H=a.reachedTarget}}let[n,r,i]=e.destructionCounts();C.render({faction:wo[e.playerFaction].name,battlefield:e.battlefield,seed:e.seed,fps:w.fps,simHz:De,stepCount:e.tick,droppedMs:m.droppedMs,alpha:u,zoomFraction:y.zoomFraction,pitchDeg:y.pitchDeg,distance:y.camera.position.distanceTo(y.focus),focusX:y.focus.x,focusZ:y.focus.z,cityBuildings:e.city.buildings.length,cityIntact:n??0,cityDamaged:r??0,cityRubble:i??0,populationLabels:O.enabled,units:e.army.units.length,unitsMoving:e.army.countMoving(),unitsBlocked:e.army.countBlocked(),unitsUnreached:e.army.countUnreached(),unitsStalled:e.army.countStalled(),selected:x.size,groups:x.occupiedGroups(),pathsQueued:e.army.pending,pathsTotal:e.army.pathsTotal,navCells:e.nav.cellCount,navRebuilds:e.nav.rebuildCount,navLastRebuildCells:e.nav.lastRebuildCells,navRebuildMs:ke,smallPassable:e.nav.passableFraction(`small`),largePassable:e.nav.passableFraction(`large`),reachSmall:V,reachLarge:Ae,atFocusSmall:je,atFocusLarge:H,humans:e.resources.humans,humansCap:e.resources.humansCap,charge:e.resources.charge,chargeCap:e.resources.chargeCap,chargeSegments:e.resources.segmentsReady,techTier:e.techTier,humansPerMinute:E.perMinute,chargePerMinute:D.perMinute,cargoInTransit:e.cargoInTransit(),populationRemaining:e.remainingPopulation(),populationTotal:e.populationCapacity.reduce((e,t)=>e+t,0),structures:e.army.units.filter(t=>e.army.typeOf(t).faction===e.playerFaction&&e.army.typeOf(t).role===`structure`).length,queued:e.queuedProduction(),civilianCrowds:e.crowds.all.length,civilianHumans:e.crowds.totalHumans(),harvesting:e.army.units.filter(ms).length,harvestIdle:e.harvestersIdle(),unitsDeployed:e.army.countDeployed(),unitsDeploying:e.army.countDeploying(),...T?{detailed:{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,units:h.units.detailedPerformanceStats()??{loadedModels:0,loadingModels:0,failedModels:0,fallbacks:0,visible:0,selection:0,occlusion:0}}}:{}},w)}W=requestAnimationFrame(K)};return W=requestAnimationFrame(K),{dispose(){G=!0,cancelAnimationFrame(W),window.removeEventListener(`resize`,ye),b.dispose(),me.remove(),he.remove(),pe?.dispose(),ne.dispose(),ae.dispose(),oe.dispose(),de(),h.dispose(),T&&(t.info.autoReset=!0),O.dispose(),ee.dispose(),k.dispose(),A.dispose(),j.dispose(),M.dispose(),a.style.display=`none`}}}async function Nm(){let e=window.location.pathname.endsWith(`/battle.html`),t=document.getElementById(`overlay`),n=document.getElementById(`overlay-content`),r=document.getElementById(`overlay-toggle`),i=document.getElementById(`selectbox`);if(!t||!n||!(r instanceof HTMLButtonElement)||!i)throw Error(`overlay controls or #selectbox missing from the page shell`);r.addEventListener(`click`,()=>{let e=t.classList.toggle(`minimized`);r.textContent=e?`+`:`−`,r.title=e?`Restore developer panel`:`Minimize developer panel`,r.setAttribute(`aria-expanded`,String(!e))});let a=new Ei({antialias:!0,powerPreference:`high-performance`});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.shadowMap.enabled=!0,a.shadowMap.type=1,a.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(a.domElement);let o=new Di(a,{defaultThickness:.0022,defaultColor:[0,0,0],defaultAlpha:.68}),s=Ac.available?new Ac:null;s||console.warn(`IndexedDB unavailable; saving is disabled for this session`);let c=mm(),l=ym(window.location.search),u={standardMatch:!0,...l?{controllers:l}:{}},d=new URLSearchParams(window.location.search),f=d.get(`detailedPerf`)===`1`,p=d.get(`stress`)===`detailed`;ct(`machines`,c.colourVariant.machines),ct(`ancients`,c.colourVariant.ancients);let m=()=>{t.style.display=c.overlayVisible?``:`none`};m();let h=null,g=null,_=e=>{g?.dispose(),g=e},v=e=>{_(null),h?.dispose(),a.shadowMap.enabled=c.enhancedShadows,h=Mm({world:e,renderer:a,toonEffect:o,renderSettings:c,overlayEl:n,boxEl:i,store:s,onLoadRequested:y,onSeedStepRequested:t=>{let n=e.seed+t>>>0;queueMicrotask(()=>v(e.battlefield?new bc(n,e.playerFaction,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}}):new bc(n,e.playerFaction,u)))},onExitToTitle:()=>{h?.dispose(),h=null,b()},onPlayAgainRequested:()=>{queueMicrotask(()=>v(e.battlefield?new bc(e.seed,e.playerFaction,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}}):new bc(e.seed,e.playerFaction,u)))},onBattleFactionRequested:t=>{!e.battlefield||t===e.playerFaction||queueMicrotask(()=>v(new bc(e.seed,t,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}})))},diagnosticsEnabled:()=>c.overlayVisible,detailedPerformance:f})},y=e=>{s&&s.get(e).then(e=>{if(!e){console.warn(s.lastRejection??`no save to load`);return}v(Cc(e.envelope))}).catch(e=>console.error(`load failed`,e))},b=async()=>{let e=s?await s.get().catch(()=>void 0):void 0,t=s?await s.list().catch(()=>[]):[];_(new ed(document.body,{saved:e&&{faction:e.envelope.playerFaction,tick:e.envelope.tick,clock:Vu(e.envelope.tick)},slotCount:t.length,onStart:e=>v(new bc(bm,e,u)),onResume:()=>y(),onSelectSave:()=>void S(),onSettings:()=>x()}))},x=()=>{_(new ud(document.body,c,{onColourVariant:(e,t)=>{c.colourVariant[e]=t,ct(e,t),hm(c),x()},onToggleOverlay:e=>{c.overlayVisible=e,hm(c),m(),x()},onToggleCityLighting:e=>{c.cityLighting=e,hm(c),x()},onToggleEnhancedShadows:e=>{c.enhancedShadows=e,a.shadowMap.enabled=e,hm(c),x()},onToggleAmbientOcclusion:e=>{c.ambientOcclusion=e,hm(c),x()},onModelMode:e=>{c.modelMode=e,hm(c),x()},onBack:()=>void b()}))},S=async()=>{let e=s?await s.list().catch(()=>[]):[];_(new dd(document.body,e.map(e=>({slot:e.slot,faction:e.readable?e.envelope.playerFaction:void 0,clock:Vu(e.envelope.tick??0),tick:e.envelope.tick??0,savedAtMs:e.savedAtMs,readable:e.readable})),{onLoad:e=>y(e),onDelete:e=>{s&&s.delete(e).then(()=>S()).catch(e=>console.error(`delete failed`,e))},onBack:()=>void b()}))},C=new URLSearchParams(window.location.search).get(`faction`);if(e){v(new bc(bm,C===`ancients`?`ancients`:`machines`,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}}));return}if(C===`machines`||C===`ancients`){v(new bc(bm,C,u));return}await b()}Nm();