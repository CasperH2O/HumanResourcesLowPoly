const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/unitModelResources-B_GVLizi.js","assets/three.core-D_QsyoxR.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/unitModelMaterials-BAvpoud0.js","assets/factionPalette-DuVOyDzj.js"])))=>i.map(i=>d[i]);
import{$n as e,A as t,At as n,B as r,Bn as i,Bt as a,C as o,Cn as s,Ct as c,D as l,Dn as u,E as d,En as f,Et as p,F as m,Fn as h,G as g,Gt as _,H as v,I as y,In as b,Jn as x,Kn as S,L as C,Ln as w,Lt as T,M as E,Mt as D,O,On as ee,P as k,Pn as A,Q as te,Rn as ne,S as j,Sn as re,Sr as ie,T as ae,Tt as oe,V as M,W as N,Wt as se,Xn as ce,Yn as P,Zn as F,_ as I,_r as L,_t as le,a as ue,ar as R,at as de,b as fe,br as pe,c as me,dr as he,et as ge,f as _e,fr as ve,ft as ye,g as be,gr as xe,gt as Se,h as z,hr as B,ht as V,i as Ce,ir as we,it as Te,j as Ee,jt as De,k as Oe,kn as ke,kt as H,l as Ae,lr as je,m as Me,mr as Ne,mt as Pe,nr as Fe,nt as U,or as W,ot as Ie,p as G,pr as Le,pt as K,r as Re,rr as ze,rt as Be,sr as Ve,st as He,tr as Ue,u as q,ur as We,ut as Ge,v as Ke,vr as qe,vt as Je,w as Ye,wn as Xe,wt as Ze,x as Qe,xn as $e,xr as et,y as tt,yr as nt,yt as rt,z as J,zn as it}from"./three.core-D_QsyoxR.js";import{a as at,c as ot,n as st,o as ct,r as lt,s as ut}from"./factionPalette-DuVOyDzj.js";import{t as dt}from"./SkeletonUtils-CHxfGqZJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function ft(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function pt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},X={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},mt={basic:{uniforms:nt([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:nt([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:nt([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:nt([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:nt([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new z(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:nt([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:nt([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:nt([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:nt([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:nt([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:nt([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:nt([X.common,X.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:nt([X.lights,X.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};mt.physical={uniforms:nt([mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var ht={r:0,b:0,g:0},gt=new Pe,_t=new K;_t.set(-1,0,0,0,1,0,0,0,1);function vt(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?_(o,s):i&&i.isColor&&(_(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new V(new me(1,1,1),new w({name:`BackgroundCubeMaterial`,uniforms:ve(mt.backgroundCube.uniforms),vertexShader:mt.backgroundCube.vertexShader,fragmentShader:mt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_t),l.material.toneMapped=be.getTransfer(i.colorSpace)!==h,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new D(2,2),new w({name:`BackgroundMaterial`,uniforms:ve(mt.background.uniforms),vertexShader:mt.background.vertexShader,fragmentShader:mt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=be.getTransfer(i.colorSpace)!==h,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function _(t,r){t.getRGB(ht,L(e)),n.buffers.color.setClear(ht.r,ht.g,ht.b,r,a)}function v(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,_(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,_(o,s)},render:m,addToRenderList:g,dispose:v}}function yt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function bt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function xt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(et(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&et(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function St(e){let t=this,n=null,r=0,i=!1,a=!1,o=new De,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ct=4,wt=[.125,.215,.35,.446,.526,.582],Tt=20,Et=256,Dt=new H,Ot=new z,kt=null,At=0,jt=0,Mt=!1,Nt=new W,Pt=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Nt}=i;kt=this._renderer.getRenderTarget(),At=this._renderer.getActiveCubeFace(),jt=this._renderer.getActiveMipmapLevel(),Mt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kt,At,jt),this._renderer.xr.enabled=Mt,e.scissorTest=!1,Lt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kt=this._renderer.getRenderTarget(),At=this._renderer.getActiveCubeFace(),jt=this._renderer.getActiveMipmapLevel(),Mt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:r,format:se,colorSpace:Ie,depthBuffer:!1},i=It(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=It(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ft(r)),this._blurMaterial=zt(r,e,t),this._ggxMaterial=Rt(r,e,t)}return i}_compileMaterial(e){let t=new V(new q,e);this._renderer.compile(t,Dt)}_sceneToCubeUV(e,t,r,i,a){let o=new n(90,1,t,r),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Ot),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new me,new Se({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Ot),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[t],a.y,a.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[t],a.z)):(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[t]));let r=this._cubeSize;Lt(i,n*r,t>2?r:0,r,r),l.setRenderTarget(i),m&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vt()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bt());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Lt(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Dt)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ct?n-d+Ct:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Lt(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Dt),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Lt(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Dt)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&B(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Tt;m>Tt&&et(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tt}`);let h=[],g=0;for(let e=0;e<Tt;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Lt(t,3*v*(r>_-Ct?r-_+Ct:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Dt)}};function Ft(e){let t=[],n=[],r=[],i=e,a=e-Ct+1+wt.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ct?s=wt[o-e+Ct-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new q;h.setAttribute(`position`,new Ae(f,3)),h.setAttribute(`uv`,new Ae(p,2)),h.setAttribute(`faceIndex`,new Ae(m,1)),r.push(new V(h,null)),i>Ct&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function It(e,t,n){let r=new We(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Lt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Rt(e,t,n){return new w({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Et,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ht(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function zt(e,t,n){let r=new Float32Array(Tt),i=new W(0,1,0);return new w({name:`SphericalGaussianBlur`,defines:{n:Tt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ht(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bt(){return new w({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ht(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vt(){return new w({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ht(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ht(){return`

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
	`}var Ut=class extends We{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new me(5,5,5),i=new w({name:`CubemapFromEquirect`,uniforms:ve(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Be),new I(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Wt(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Ut(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Pt(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Pt(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Gt(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ie(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Kt(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?P:x)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qt(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Yt(e,t,n){let r=new WeakMap,i=new Ve;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,h=1;p>t.maxTextureSize&&(h=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*h*4*u),_=new j(g,p,h,u);_.type=m,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new R(p,h)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xt(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zt={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qt(e,t,n,i,a,o){let c=new We(t,n,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,depthTexture:a?new d(t,n):void 0}),l=new We(t,n,{type:r,depthBuffer:!1,stencilBuffer:!1}),u=new q;u.setAttribute(`position`,new k([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new k([0,2,0,0,2,0],2));let f=new s({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new V(u,f),m=new H(-1,1,1,-1,0,1),h=null,g=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){c.setSize(e,t),l.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=c.width,n=c.height;for(let e=0;e<b.length;e++){let r=b[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(c.width!==e||c.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(c),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=c,r=l;for(let i=0;i<b.length;i++){let a=b[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,f.defines={},be.getTransfer(h)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=Zt[g];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(p,m),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),l.dispose(),u.dispose(),f.dispose()}}var $t=new S,en=new d(1,1),tn=new j,nn=new Qe,rn=new tt,an=[],on=[],sn=new Float32Array(16),cn=new Float32Array(9),ln=new Float32Array(4);function un(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=an[i];if(a===void 0&&(a=new Float32Array(i),an[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function dn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function pn(e,t){let n=on[t];n===void 0&&(n=new Int32Array(t),on[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function mn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function gn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function _n(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function vn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(dn(n,r))return;ln.set(r),e.uniformMatrix2fv(this.addr,!1,ln),fn(n,r)}}function yn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(dn(n,r))return;cn.set(r),e.uniformMatrix3fv(this.addr,!1,cn),fn(n,r)}}function bn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(dn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(dn(n,r))return;sn.set(r),e.uniformMatrix4fv(this.addr,!1,sn),fn(n,r)}}function xn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Sn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function Cn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function Tn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function En(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function Dn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function On(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function kn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(en.compareFunction=n.isReversedDepthBuffer()?518:515,a=en):a=$t,n.setTexture2D(t||a,i)}function An(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||nn,i)}function jn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||rn,i)}function Mn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||tn,i)}function Nn(e){switch(e){case 5126:return mn;case 35664:return hn;case 35665:return gn;case 35666:return _n;case 35674:return vn;case 35675:return yn;case 35676:return bn;case 5124:case 35670:return xn;case 35667:case 35671:return Sn;case 35668:case 35672:return Cn;case 35669:case 35673:return wn;case 5125:return Tn;case 36294:return En;case 36295:return Dn;case 36296:return On;case 35678:case 36198:case 36298:case 36306:case 35682:return kn;case 35679:case 36299:case 36307:return An;case 35680:case 36300:case 36308:case 36293:return jn;case 36289:case 36303:case 36311:case 36292:return Mn}}function Pn(e,t){e.uniform1fv(this.addr,t)}function Fn(e,t){let n=un(t,this.size,2);e.uniform2fv(this.addr,n)}function In(e,t){let n=un(t,this.size,3);e.uniform3fv(this.addr,n)}function Ln(e,t){let n=un(t,this.size,4);e.uniform4fv(this.addr,n)}function Rn(e,t){let n=un(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zn(e,t){let n=un(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Bn(e,t){let n=un(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Vn(e,t){e.uniform1iv(this.addr,t)}function Hn(e,t){e.uniform2iv(this.addr,t)}function Un(e,t){e.uniform3iv(this.addr,t)}function Wn(e,t){e.uniform4iv(this.addr,t)}function Gn(e,t){e.uniform1uiv(this.addr,t)}function Kn(e,t){e.uniform2uiv(this.addr,t)}function qn(e,t){e.uniform3uiv(this.addr,t)}function Jn(e,t){e.uniform4uiv(this.addr,t)}function Yn(e,t,n){let r=this.cache,i=t.length,a=pn(n,i);dn(r,a)||(e.uniform1iv(this.addr,a),fn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?en:$t;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Xn(e,t,n){let r=this.cache,i=t.length,a=pn(n,i);dn(r,a)||(e.uniform1iv(this.addr,a),fn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||nn,a[e])}function Zn(e,t,n){let r=this.cache,i=t.length,a=pn(n,i);dn(r,a)||(e.uniform1iv(this.addr,a),fn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||rn,a[e])}function Qn(e,t,n){let r=this.cache,i=t.length,a=pn(n,i);dn(r,a)||(e.uniform1iv(this.addr,a),fn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||tn,a[e])}function $n(e){switch(e){case 5126:return Pn;case 35664:return Fn;case 35665:return In;case 35666:return Ln;case 35674:return Rn;case 35675:return zn;case 35676:return Bn;case 5124:case 35670:return Vn;case 35667:case 35671:return Hn;case 35668:case 35672:return Un;case 35669:case 35673:return Wn;case 5125:return Gn;case 36294:return Kn;case 36295:return qn;case 36296:return Jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Yn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return Zn;case 36289:case 36303:case 36311:case 36292:return Qn}}var er=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nn(t.type)}},tr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$n(t.type)}},nr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},rr=/(\w+)(\])?(\[|\.)?/g;function ir(e,t){e.seq.push(t),e.map[t.id]=t}function ar(e,t,n){let r=e.name,i=r.length;for(rr.lastIndex=0;;){let a=rr.exec(r),o=rr.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ir(n,l===void 0?new er(s,e,t):new tr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new nr(s),ir(n,e)),n=e}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ar(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function sr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var cr=37297,lr=0;function ur(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var dr=new K;function fr(e){be._getMatrix(dr,be.workingColorSpace,e);let t=`mat3( ${dr.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case h:return[t,`sRGBTransferOETF`];default:return et(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function pr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ur(e.getShaderSource(t),r)}return i}function mr(e,t){let n=fr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var hr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function gr(e,t){let n=hr[t];return n===void 0?(et(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var _r=new W;function vr(){return be.getLuminanceCoefficients(_r),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${_r.x.toFixed(4)}, ${_r.y.toFixed(4)}, ${_r.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function yr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Sr).join(`
`)}function br(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function xr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Sr(e){return e!==``}function Cr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(e){return e.replace(Tr,Or)}var Dr=new Map;function Or(e,t){let n=Y[t];if(n===void 0){let e=Dr.get(t);if(e!==void 0)n=Y[e],et(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Er(n)}var kr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ar(e){return e.replace(kr,jr)}function jr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Mr(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Nr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Pr(e){return Nr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Fr={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ir(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Fr[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Lr={302:`ENVMAP_MODE_REFRACTION`};function Rr(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Lr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var zr={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Br(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:zr[e.combine]||`ENVMAP_BLENDING_NONE`}function Vr(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Hr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Pr(n),l=Ir(n),u=Rr(n),d=Br(n),f=Vr(n),p=yr(n),m=br(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Sr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Sr).join(`
`),_.length>0&&(_+=`
`)):(g=[Mr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Sr).join(`
`),_=[Mr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:gr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,mr(`linearToOutputTexel`,n.outputColorSpace),vr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Sr).join(`
`)),o=Er(o),o=Cr(o,n),o=wr(o,n),s=Er(s),s=Cr(s,n),s=wr(s,n),o=Ar(o),s=Ar(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=sr(i,i.VERTEX_SHADER,y),S=sr(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=pr(i,x,`vertex`),n=pr(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):et(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new or(i,h),T=xr(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,cr)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lr++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ur=0,Wr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gr(e),t.set(e,n)),n}},Gr=class{constructor(e){this.id=Ur++,this.code=e,this.usedTimes=0}};function Kr(e){return e===1030||e===37490||e===36285}function qr(e,t,n,r,i,a){let o=new te,s=new Wr,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&et(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=mt[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,M=!!i.lightMap,N=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,P=!!i.emissiveMap,F=!!i.metalnessMap,I=!!i.roughnessMap,L=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,R=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=L&&!!i.anisotropyMap,me=le&&!!i.clearcoatMap,he=le&&!!i.clearcoatNormalMap,ge=le&&!!i.clearcoatRoughnessMap,_e=R&&!!i.iridescenceMap,ve=R&&!!i.iridescenceThicknessMap,ye=de&&!!i.sheenColorMap,xe=de&&!!i.sheenRoughnessMap,Se=!!i.specularMap,z=!!i.specularColorMap,B=!!i.specularIntensityMap,V=fe&&!!i.transmissionMap,Ce=fe&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=e.toneMapping);let H={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:M,bumpMap:N,normalMap:se,displacementMap:ce,emissiveMap:P,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Kr(i.normalMap.format),metalnessMap:F,roughnessMap:I,anisotropy:L,anisotropyMap:pe,clearcoat:le,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ue,iridescence:R,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:ye,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:z,specularIntensityMap:B,transmission:fe,transmissionMap:V,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:M&&m(i.lightMap.channel),bumpMapUv:N&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:P&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:pe&&m(i.anisotropyMap.channel),clearcoatMapUv:me&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:z&&m(i.specularColorMap.channel),specularIntensityMapUv:B&&m(i.specularIntensityMap.channel),transmissionMapUv:V&&m(i.transmissionMap.channel),thicknessMapUv:Ce&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||L),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&be.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:P&&i.emissiveMap.isVideoTexture===!0&&be.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return H.vertexUv1s=c.has(1),H.vertexUv2s=c.has(2),H.vertexUv3s=c.has(3),c.clear(),H}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=mt[t];n=ce.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Hr(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Jr(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Yr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zr(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Yr),r.length>1&&r.sort(t||Xr),i.length>1&&i.sort(t||Xr),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Qr(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Zr,e.set(t,[i])):n>=r.length?(i=new Zr,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function $r(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new z};break;case`SpotLight`:n={position:new W,direction:new W,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function ei(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ti=0;function ni(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ri(e){let t=new $r,n=ei(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Pe,o=new Pe;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ni);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ti++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ii(e){let t=new ri(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ai(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ii(e),t.set(n,[a])):r>=i.length?(a=new ii(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var oi=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,si=`uniform sampler2D shadow_pass;
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
}`,ci=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],li=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ui=new Pe,di=new W,fi=new W;function pi(e,t,n){let i=new C,a=new R,o=new R,s=new Ve,c=new le,l=new Je,u={},f=n.maxTextureSize,p={0:1,1:0,2:2},h=new w({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:oi,fragmentShader:si}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let _=new q;_.setAttribute(`position`,new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new V(_,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let b=this.type;this.render=function(t,n,c){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||t.length===0)return;this.type===2&&(et(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),h=e.state;h.setBlending(0),h.buffers.depth.getReversed()===!0?h.buffers.color.setClear(0,0,0,0):h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let g=b!==this.type;g&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){et(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let _=p.getFrameExtents();a.multiply(_),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/_.x),a.x=o.x*_.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/_.y),a.y=o.y*_.y,p.mapSize.y=o.y));let v=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=v,p.map===null||g===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){et(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new We(a.x,a.y,{format:$e,type:r,minFilter:Be,magFilter:Be,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new d(a.x,a.y,m),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=Ye,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=Ze,p.map.depthTexture.magFilter=Ze}else u.isPointLight?(p.map=new Ut(a.x),p.map.depthTexture=new Ke(a.x,Ue)):(p.map=new We(a.x,a.y),p.map.depthTexture=new d(a.x,a.y,Ue)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=Ye,this.type===1?(p.map.depthTexture.compareFunction=v?518:515,p.map.depthTexture.minFilter=Be,p.map.depthTexture.magFilter=Be):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=Ze,p.map.depthTexture.magFilter=Ze);p.camera.updateProjectionMatrix()}let y=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<y;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),h.viewport(s)}if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),di.setFromMatrixPosition(u.matrixWorld),e.position.copy(di),fi.copy(e.position),fi.add(ci[t]),e.up.copy(li[t]),e.lookAt(fi),e.updateMatrixWorld(),n.makeTranslation(-di.x,-di.y,-di.z),ui.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ui,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(u);i=p.getFrustum(),T(n,c,p.camera,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&x(p,c),p.needsUpdate=!1}b=this.type,y.needsUpdate=!1,e.setRenderTarget(l,u,p)};function x(n,i){let o=t.update(v);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,g.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new We(a.x,a.y,{format:$e,type:r})),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(i,null,o,h,v,null),g.uniforms.shadow_pass.value=n.mapPass.texture,g.uniforms.resolution.value=n.mapSize,g.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(i,null,o,g,v,null)}function S(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=S(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=S(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],r,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function mi(e,t){function n(){let t=!1,n=new Ve,r=null,i=new Ve(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ee[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),j=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),j=re>=1);let ae=null,oe={},M=e.getParameter(e.SCISSOR_BOX),N=e.getParameter(e.VIEWPORT),se=new Ve().fromArray(M),ce=new Ve().fromArray(N);function P(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let F={};F[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),F[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),F[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),I(e.CULL_FACE),pe(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function L(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function R(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(L(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(j&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||te!==r)&&(A=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):L(e.POLYGON_OFFSET_FILL)}function ye(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function xe(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||F[t]),i.type=t,i.texture=n)}function Se(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function V(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function H(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Pe(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function U(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function W(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:L,bindFramebuffer:le,drawBuffers:ue,useProgram:R,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:V,compressedTexImage3D:Ce,texImage2D:H,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:Fe,uniformBlockBinding:U,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:Pe,reset:W}}function hi(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),d=new R,f=new WeakMap,m=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):Ne(`canvas`)}function y(e,t,n){let r=1,i=H(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);h===void 0&&(h=v(n,a));let o=t?v(n,a):h;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),et(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&et(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];et(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||et(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?He:be.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,et(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),t.isVideoTexture&&f.delete(t),t.isHTMLTexture&&m.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),k(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=g.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ee(e),Object.keys(i).length===0&&g.delete(n)}r.remove(e)}function ee(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=g.get(i);delete a[n.__cacheKey],o.memory.textures--}function k(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let A=0;function te(){A=0}function ne(){return A}function j(e){A=e}function re(){let e=A;return e>=i.maxTextures&&et(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),A+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&Oe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)et(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)et(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let P={[u]:e.REPEAT,[Me]:e.CLAMP_TO_EDGE,[c]:e.MIRRORED_REPEAT},F={[Ze]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[oe]:e.NEAREST_MIPMAP_LINEAR,[Be]:e.LINEAR,[de]:e.LINEAR_MIPMAP_NEAREST,[Te]:e.LINEAR_MIPMAP_LINEAR},I={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function L(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&et(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,P[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,P[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,P[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,F[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,F[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,I[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function le(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let s=ie(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ee(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ue(n.start,r.width,4),c=ue(t.start,r.width,4);n.start<=i+1&&a===c&&ue(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=le(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=be.getPrimaries(be.workingColorSpace),r=o.colorSpace===``?null:be.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=y(o.image,!1,i.maxTextureSize);t=ke(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=C(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);L(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=d.__version===void 0||l===!0,S=u.dataReady,E=T(o,t);if(o.isDepthTexture)p=w(o.format===ae,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture)if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,E,p,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,f,h.data):n.texImage2D(e.TEXTURE_2D,t,p,h.width,h.height,0,r,f,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,E,p,t.width,t.height),S&&fe(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,p,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023)if(r!==null)if(_){if(S)if(o.layerUpdates.size>0){let t=xe(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,h.width,h.height,t.depth,0,h.data,0,0);else et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else _?S&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,f,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,h.width,h.height,t.depth,0,r,f,h.data)}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,E,p,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,f,h.data):n.texImage2D(e.TEXTURE_2D,t,p,h.width,h.height,0,r,f,h.data):r===null?et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?S&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,p,t.width,t.height,t.depth),S)if(o.layerUpdates.size>0){let i=xe(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,E,p,t.width,t.height,t.depth),S&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(v)if(_)n.texStorage2D(e.TEXTURE_2D,E,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),m.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=H(g[0]);n.texStorage2D(e.TEXTURE_2D,E,p,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?S&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,h):n.texImage2D(e.TEXTURE_2D,t,p,r,f,h);o.generateMipmaps=!1}else if(_){if(v){let r=H(t);n.texStorage2D(e.TEXTURE_2D,E,p,r.width,r.height)}S&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);b(o)&&x(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,o,s){if(o.image.length!==6)return;let c=le(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=be.getPrimaries(be.workingColorSpace),r=o.colorSpace===``?null:be.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=y(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ke(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=C(o.internalFormat,g,_,o.normalized,o.colorSpace),S=o.isVideoTexture!==!0,w=u.__version===void 0||c===!0,E=l.dataReady,D=T(o,h);L(e.TEXTURE_CUBE_MAP,o);let O;if(f){S&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,S&&w){O.length>0&&D++;let t=H(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<O.length;r++){let i=O[r];S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}b(o)&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=C(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=C(o.internalFormat,c,l,o.normalized,o.colorSpace);De(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),L(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=Ee(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)De(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function Se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&De(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=C(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),L(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)&&x(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),L(c,a),he(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),b(a)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),L(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)&&x(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function z(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)){let t=S(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let V=[],Ce=[];function we(t){if(t.samples>0){if(De(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(V.length=0,Ce.length=0,V.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(V.push(c),Ce.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(i.maxSamples,e.samples)}function De(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Oe(e){let t=o.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(be.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&et(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function H(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(d.width=e.naturalWidth||e.width,d.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(d.width=e.displayWidth,d.height=e.displayHeight):(d.width=e.width,d.height=e.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=j,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=ye,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gi(e,t){function n(n,r=``){let i,a=be.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var _i=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vi=`
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

}`,yi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ee(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new w({vertexShader:_i,fragmentShader:vi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new D(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bi=class extends t{constructor(t,r){super();let i=this,o=null,s=1,c=null,l=`local-floor`,u=1,f=null,p=null,m=null,h=null,g=null,_=null,v=typeof XRWebGLBinding<`u`,y=new yi,b={},x=r.getContextAttributes(),S=null,C=null,w=[],T=[],E=new R,D=null,O=new n;O.viewport=new Ve;let ee=new n;ee.viewport=new Ve;let k=[O,ee],A=new Ce,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new he,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new he,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new he,w[e]=t),t.getHandSpace()};function j(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,f||c),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){o.removeEventListener(`select`,j),o.removeEventListener(`selectstart`,j),o.removeEventListener(`selectend`,j),o.removeEventListener(`squeeze`,j),o.removeEventListener(`squeezestart`,j),o.removeEventListener(`squeezeend`,j),o.removeEventListener(`end`,re),o.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}te=null,ne=null,y.reset();for(let e in b)delete b[e];t.setRenderTarget(S),g=null,h=null,m=null,o=null,C=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){s=e,i.isPresenting===!0&&et(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){l=e,i.isPresenting===!0&&et(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(e){f=e},this.getBaseLayer=function(){return h===null?g:h},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(o,r)),m},this.getFrame=function(){return _},this.getSession=function(){return o},this.setSession=async function(n){if(o=n,o!==null){if(S=t.getRenderTarget(),o.addEventListener(`select`,j),o.addEventListener(`selectstart`,j),o.addEventListener(`selectend`,j),o.addEventListener(`squeeze`,j),o.addEventListener(`squeezestart`,j),o.addEventListener(`squeezeend`,j),o.addEventListener(`end`,re),o.addEventListener(`inputsourceschange`,ie),x.xrCompatible!==!0&&await r.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(E),v&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,i=null,a=null;x.depth&&(a=x.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,n=x.stencil?ae:Ye,i=x.stencil?e:Ue);let c={colorFormat:r.RGBA8,depthFormat:a,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(c),o.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),C=new We(h.textureWidth,h.textureHeight,{format:se,type:F,depthTexture:new d(h.textureWidth,h.textureHeight,i,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(o,r,e),o.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new We(g.framebufferWidth,g.framebufferHeight,{format:se,type:F,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await o.requestReferenceSpace(l),le.setContext(o),le.start(),i.isPresenting=!0,i.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let i=w[r];i&&i.connect(n)}}let oe=new W,M=new W;function N(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(o===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),A.near=ee.near=O.near=t,A.far=ee.far=O.far=n,(te!==A.near||ne!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,ne=A.far),A.layers.mask=e.layers.mask|6,O.layers.mask=A.layers.mask&-5,ee.layers.mask=A.layers.mask&-3;let r=e.parent,i=A.cameras;ce(A,r);for(let e=0;e<i.length;e++)ce(i[e],r);i.length===2?N(A,O,ee):A.projectionMatrix.copy(O.projectionMatrix),P(e,A,r)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=a*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null||g!==null)return u},this.setFoveation=function(e){u=e,h!==null&&(h.fixedFoveation=e),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(A)},this.getCameraTexture=function(e){return b[e]};let I=null;function L(e,r){if(p=r.getViewerPose(f||c),_=r,p!==null){let e=p.views;g!==null&&(t.setRenderTargetFramebuffer(C,g.framebuffer),t.setRenderTarget(C));let r=!1;e.length!==A.cameras.length&&(A.cameras.length=0,r=!0);for(let i=0;i<e.length;i++){let a=e[i],o=null;if(g!==null)o=g.getViewport(a);else{let e=m.getViewSubImage(h,a);o=e.viewport,i===0&&(t.setRenderTargetTextures(C,e.colorTexture,e.depthStencilTexture),t.setRenderTarget(C))}let s=k[i];s===void 0&&(s=new n,s.layers.enable(i),s.viewport=new Ve,k[i]=s),s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(a.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),i===0&&(A.matrix.copy(s.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),r===!0&&A.cameras.push(s)}let a=o.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&o.depthUsage==`gpu-optimized`&&v){m=i.getBinding();let t=m.getDepthInformation(e[0]);t&&t.isValid&&t.texture&&y.init(t,o.renderState)}if(a&&a.includes(`camera-access`)&&v){t.state.unbindTexture(),m=i.getBinding();for(let t=0;t<e.length;t++){let n=e[t].camera;if(n){let e=b[n];e||(e=new Ee,b[n]=e);let t=m.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<w.length;e++){let t=T[e],n=w[e];t!==null&&n!==void 0&&n.update(t,r,f||c)}I&&I(e,r),r.detectedPlanes&&i.dispatchEvent({type:`planesdetected`,data:r}),_=null}let le=new ft;le.setAnimationLoop(L),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},xi=new Pe,Si=new K;Si.set(-1,0,0,0,1,0,0,0,1);function Ci(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,L(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(xi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Si),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function wi(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?et(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):et(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ti=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Di(){return Ei===null&&(Ei=new o(Ti,16,16,$e,r),Ei.name=`DFG_LUT`,Ei.minFilter=Be,Ei.magFilter=Be,Ei.wrapS=Me,Ei.wrapT=Me,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Oi=class{constructor(t={}){let{canvas:n=Le(),context:i=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:h=F}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<`u`&&i instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=i.getContextAttributes().alpha}else g=s;let v=h,y=new Set([_,re,f]),b=new Set([F,Ue,we,e,Fe,ze]),x=new Uint32Array(4),S=new Int32Array(4),w=new W,T=null,E=null,D=[],O=[],ee=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,te=!1,ne=null,j=null,ie=null,ae=null;this._outputColorSpace=A;let oe=0,M=0,N=null,se=-1,ce=null,P=new Ve,I=new Ve,L=null,le=new z(0),ue=0,R=n.width,de=n.height,fe=1,me=null,he=null,ge=new Ve(0,0,R,de),_e=new Ve(0,0,R,de),ve=!1,ye=new C,xe=!1,Se=!1,V=new Pe,Ce=new W,Ee=new Ve,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return N===null?fe:1}let H=i;function Ae(e,t){return n.getContext(e,t)}try{let e={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in n&&n.setAttribute(`data-engine`,`three.js r185`),n.addEventListener(`webglcontextlost`,st,!1),n.addEventListener(`webglcontextrestored`,ct,!1),n.addEventListener(`webglcontextcreationerror`,lt,!1),H===null){let t=`webgl2`;if(H=Ae(t,e),H===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw B(`WebGLRenderer: `+e.message),e}let Me,Ne,U,Ie,G,K,Re,Be,He,q,Ge,Ke,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt,J,it;function at(){Me=new Gt(H),Me.init(),rt=new gi(H,Me),Ne=new xt(H,Me,t,rt),U=new mi(H,Me),Ne.reversedDepthBuffer&&m&&U.buffers.depth.setReversed(!0),j=H.createFramebuffer(),ie=H.createFramebuffer(),ae=H.createFramebuffer(),Ie=new Jt(H),G=new Jr,K=new hi(H,Me,U,G,Ne,rt,Ie),Re=new Wt(k),Be=new pt(H),J=new yt(H,Be),He=new Kt(H,Be,Ie,J),q=new Xt(H,He,Be,J,Ie),$e=new Yt(H,Ne,K),Xe=new St(G),Ge=new qr(k,Re,Me,Ne,J,Xe),Ke=new Ci(k,G),Je=new Qr,Ye=new ai(Me),Qe=new vt(k,Re,U,q,g,l),Ze=new pi(k,q,Ne),it=new wi(H,Ie,Ne,U),tt=new bt(H,Me,Ie),nt=new qt(H,Me,Ie),Ie.programs=Ge.programs,k.capabilities=Ne,k.extensions=Me,k.properties=G,k.renderLists=Je,k.shadowMap=Ze,k.state=U,k.info=Ie}at(),v!==1009&&(ee=new Qt(v,n.width,n.height,c,a,o));let ot=new bi(k,H);this.xr=ot,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(e){e!==void 0&&(fe=e,this.setSize(R,de,!1))},this.getSize=function(e){return e.set(R,de)},this.setSize=function(e,t,r=!0){if(ot.isPresenting){et(`WebGLRenderer: Can't change size while VR device is presenting.`);return}R=e,de=t,n.width=Math.floor(e*fe),n.height=Math.floor(t*fe),r===!0&&(n.style.width=e+`px`,n.style.height=t+`px`),ee!==null&&ee.setSize(n.width,n.height),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(R*fe,de*fe).floor()},this.setDrawingBufferSize=function(e,t,r){R=e,de=t,fe=r,n.width=Math.floor(e*r),n.height=Math.floor(t*r),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(v===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){et(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),U.viewport(P.copy(ge).multiplyScalar(fe).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),U.scissor(I.copy(_e).multiplyScalar(fe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){U.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=y.has(t)}if(e){let e=N.texture.type,t=b.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(x[0]=i,x[1]=a,x[2]=o,x[3]=r,H.clearBufferuiv(H.COLOR,0,x)):(S[0]=i,S[1]=a,S[2]=o,S[3]=r,H.clearBufferiv(H.COLOR,0,S))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){n.removeEventListener(`webglcontextlost`,st,!1),n.removeEventListener(`webglcontextrestored`,ct,!1),n.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Je.dispose(),Ye.dispose(),G.dispose(),Re.dispose(),q.dispose(),J.dispose(),it.dispose(),Ge.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),Ct.stop()};function st(e){e.preventDefault(),qe(`WebGLRenderer: Context Lost.`),te=!0}function ct(){qe(`WebGLRenderer: Context Restored.`),te=!1;let e=Ie.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;at(),Ie.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function lt(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){Y(e),G.remove(e)}function Y(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;J.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*ke()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh)if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=G.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function X(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,n),e.side=0,e.needsUpdate=!0,kt(e,t,n),e.side=2):kt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),E=Ye.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];X(a,n,e),r.add(a)}else X(t,n,e),r.add(t)}),E=O.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){G.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){Ct.stop()}function _t(){Ct.start()}let Ct=new ft;Ct.setAnimationLoop(ht),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=ee!==null&&(N===null||n)&&ee.begin(k,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,N),E=Ye.get(e,O.length),E.init(t),E.state.textureUnits=K.getTextureUnits(),O.push(E),V.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ye.setFromProjectionMatrix(V,je,t.reversedDepth),Se=this.localClippingEnabled,xe=Xe.init(this.clippingPlanes,Se),T=Je.get(e,D.length),T.init(),D.push(T),ot.enabled===!0&&ot.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,k.sortObjects)}wt(e,t,0,k.sortObjects),T.finish(),k.sortObjects===!0&&T.sort(me,he,t.reversedDepth),Oe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Oe&&Qe.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Xe.beginShadows();let i=E.state.shadowsArray;if(Ze.render(i,e,t),xe===!0&&Xe.endShadows(),(r&&ee.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Oe&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(T,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Oe&&Qe.render(e),Tt(T,e,t)}N!==null&&M===0&&(K.updateMultisampleRenderTarget(N),K.updateRenderTargetMipmap(N)),r&&ee.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),J.resetDefaultState(),se=-1,ce=null,O.pop(),O.length>0?(E=O[O.length-1],K.setTextureUnits(E.state.textureUnits),xe===!0&&Xe.setGlobalState(k.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null,ne!==null&&ne.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)E.pushLightProbeGrid(e);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ye.intersectsSprite(e)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(V);let t=q.update(e),i=e.material;i.visible&&T.push(e,t,i,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ye.intersectsObject(e))){let t=q.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(V)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&T.push(e,t,s,n,Ee.z,o)}}else i.visible&&T.push(e,t,i,n,Ee.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),xe===!0&&Xe.setGlobalState(k.clippingPlanes,n),r&&U.viewport(P.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Et(e,t,n,i){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[i.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[i.id]=new We(1,1,{generateMipmaps:!0,type:e?r:F,minFilter:Te,samples:Math.max(4,Ne.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}let a=E.state.transmissionRenderTarget[i.id],s=i.viewport||P;a.setSize(s.z*k.transmissionResolutionScale,s.w*k.transmissionResolutionScale);let c=k.getRenderTarget(),l=k.getActiveCubeFace(),u=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(le),ue=k.getClearAlpha(),ue<1&&k.setClearColor(16777215,.5),k.clear(),Oe&&Qe.render(n);let d=k.toneMapping;k.toneMapping=0;let f=i.viewport;if(i.viewport!==void 0&&(i.viewport=void 0),E.setupLightsView(i),xe===!0&&Xe.setGlobalState(k.clippingPlanes,i),Dt(e,n,i),K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let r=0,a=t.length;r<a;r++){let{object:a,geometry:o,material:s,group:c}=t[r];if(s.side===2&&a.layers.test(i.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,i,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(K.updateMultisampleRenderTarget(a),K.updateRenderTargetMipmap(a))}k.setRenderTarget(c,l,u),k.setClearColor(le,ue),f!==void 0&&(i.viewport=f),k.toneMapping=d}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function kt(e,t,n){t.isScene!==!0&&(t=De);let r=G.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,E.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Ge.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,k),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),jt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=E.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=or.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Mt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=De),K.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?k.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:be.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=G.get(r),y=E.state.lights;if(xe===!0&&(Se===!0||e!==ce)){let t=e===ce&&r.id===se;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=kt(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),D=v.uniforms;if(U.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==se&&(se=r.id,C=!0),v.needsLights){let e=Mt(E.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ce!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(H,`projectionMatrix`,e.projectionMatrix),T.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(H,Ce.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&T.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,K),y.state.spotShadowMap.length>0&&T.setValue(H,`spotShadowMap`,y.state.spotShadowMap,K),y.state.pointShadowMap.length>0&&T.setValue(H,`pointShadowMap`,y.state.pointShadowMap,K)),i.isSkinnedMesh){T.setOptional(H,i,`bindMatrix`),T.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(H,`boneTexture`,e.boneTexture,K))}i.isBatchedMesh&&(T.setOptional(H,i,`batchingTexture`),T.setValue(H,`batchingTexture`,i._matricesTexture,K),T.setOptional(H,i,`batchingIdTexture`),T.setValue(H,`batchingIdTexture`,i._indirectTexture,K),T.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(H,`batchingColorTexture`,i._colorsTexture,K));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Di()),C){if(T.setValue(H,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&Pt(D,w),a&&r.fog===!0&&Ke.refreshFogUniforms(D,a),Ke.refreshMaterialUniforms(D,r,fe,de,E.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}or.upload(H,At(v),D,K)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(or.upload(H,At(v),D,K),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(H,`center`,i.center),T.setValue(H,`modelViewMatrix`,i.modelViewMatrix),T.setValue(H,`normalMatrix`,i.normalMatrix),T.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=G.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,oe=t,M=n;let r=null,i=!1,a=!1;if(e){let o=G.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),I.copy(e.scissor),L=e.scissorTest,U.viewport(P),U.scissor(I),U.setScissorTest(L),se=-1;return}if(o.__webglFramebuffer===void 0)K.setupRenderTarget(e);else if(o.__hasExternalTextures)K.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&G.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);K.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&K.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),I.copy(e.scissor),L=e.scissorTest}else P.copy(ge).multiplyScalar(fe).floor(),I.copy(_e).multiplyScalar(fe).floor(),L=ve;if(n!==0&&(r=j),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(P),U.scissor(I),U.setScissorTest(L),i){let r=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=G.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=G.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}se=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!Ne.textureFormatReadable(c)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ne.textureTypeReadable(l)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=N===null?null:G.get(N).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s),!Ne.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ne.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0);let f=N===null?null:G.get(N).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,f);let p=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pe(H,p,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,d),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.deleteBuffer(d),H.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;K.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(K.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(K.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(K.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=G.get(e),r=G.get(t),h=G.get(n.__renderTarget),g=G.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,G.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||G.has(e)){let n=G.get(e),r=G.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,ie),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){G.get(e).__webglFramebuffer===void 0&&K.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?K.setTextureCube(e,0):e.isData3DTexture?K.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?K.setTexture2DArray(e,0):K.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){oe=0,M=0,N=null,U.reset(),J.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),t.unpackColorSpace=be._getUnpackColorSpace()}},ki=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness===void 0?.003:t.defaultThickness,r=new z().fromArray(t.defaultColor===void 0?[0,0,0]:t.defaultColor),i=t.defaultAlpha===void 0?1:t.defaultAlpha,a=t.defaultKeepAlive!==void 0&&t.defaultKeepAlive,o={},s={},c={},l={outlineThickness:{value:n},outlineColor:{value:r},outlineAlpha:{value:i}},u=[`#include <common>`,`#include <uv_pars_vertex>`,`#include <displacementmap_pars_vertex>`,`#include <fog_pars_vertex>`,`#include <morphtarget_pars_vertex>`,`#include <skinning_pars_vertex>`,`#include <logdepthbuf_pars_vertex>`,`#include <clipping_planes_pars_vertex>`,`uniform float outlineThickness;`,`vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {`,`	float thickness = outlineThickness;`,`	const float ratio = 1.0;`,`	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );`,`	vec4 norm = normalize( pos - pos2 );`,`	return pos + norm * thickness * pos.w * ratio;`,`}`,`void main() {`,`	#include <uv_vertex>`,`	#include <beginnormal_vertex>`,`	#include <morphnormal_vertex>`,`	#include <skinbase_vertex>`,`	#include <skinnormal_vertex>`,`	#include <begin_vertex>`,`	#include <morphtarget_vertex>`,`	#include <skinning_vertex>`,`	#include <displacementmap_vertex>`,`	#include <project_vertex>`,`	vec3 outlineNormal = - objectNormal;`,`	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );`,`	#include <logdepthbuf_vertex>`,`	#include <clipping_planes_vertex>`,`	#include <fog_vertex>`,`}`].join(`
`),d=[`#include <common>`,`#include <fog_pars_fragment>`,`#include <logdepthbuf_pars_fragment>`,`#include <clipping_planes_pars_fragment>`,`uniform vec3 outlineColor;`,`uniform float outlineAlpha;`,`void main() {`,`	#include <clipping_planes_fragment>`,`	#include <logdepthbuf_fragment>`,`	gl_FragColor = vec4( outlineColor, outlineAlpha );`,`	#include <tonemapping_fragment>`,`	#include <colorspace_fragment>`,`	#include <fog_fragment>`,`	#include <premultiplied_alpha_fragment>`,`}`].join(`
`);function f(){return new w({type:`OutlineEffect`,uniforms:ce.merge([X.fog,X.displacementmap,l]),vertexShader:u,fragmentShader:d,side:1})}function p(e){let t=o[e.uuid];return t===void 0&&(t={material:f(),used:!0,keepAlive:a,count:0},o[e.uuid]=t),t.used=!0,t.material}function m(e){let t=p(e);return s[t.uuid]=e,b(t,e),t}function h(e){let t=e.geometry,n=t!==void 0&&t.attributes.normal!==void 0;return e.isMesh===!0&&e.material!==void 0&&n===!0}function g(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=m(e.material[t]);else e.material=m(e.material);c[e.uuid]=e.onBeforeRender,e.onBeforeRender=v}}function _(e){if(h(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=s[e.material[t].uuid];else e.material=s[e.material.uuid];e.onBeforeRender=c[e.uuid]}}function v(e,t,n,r,i){let a=s[i.uuid];a!==void 0&&y(i,a)}function y(e,t){let n=t.userData.outlineParameters;e.uniforms.outlineAlpha.value=t.opacity,n!==void 0&&(n.thickness!==void 0&&(e.uniforms.outlineThickness.value=n.thickness),n.color!==void 0&&e.uniforms.outlineColor.value.fromArray(n.color),n.alpha!==void 0&&(e.uniforms.outlineAlpha.value=n.alpha)),t.displacementMap&&(e.uniforms.displacementMap.value=t.displacementMap,e.uniforms.displacementScale.value=t.displacementScale,e.uniforms.displacementBias.value=t.displacementBias)}function b(e,t){if(e.name===`invisible`)return;let n=t.userData.outlineParameters;e.fog=t.fog,e.toneMapped=t.toneMapped,e.premultipliedAlpha=t.premultipliedAlpha,e.displacementMap=t.displacementMap,n===void 0?(e.transparent=t.transparent,e.visible=t.visible):(e.visible=t.visible===!1?!1:n.visible===void 0||n.visible,e.transparent=n.alpha!==void 0&&n.alpha<1||t.transparent,n.keepAlive!==void 0&&(o[t.uuid].keepAlive=n.keepAlive)),(t.wireframe===!0||t.depthTest===!1)&&(e.visible=!1),t.clippingPlanes&&(e.clipping=!0,e.clippingPlanes=t.clippingPlanes,e.clipIntersection=t.clipIntersection,e.clipShadows=t.clipShadows),e.version=t.version}function x(){let e;e=Object.keys(s);for(let t=0,n=e.length;t<n;t++)s[e[t]]=void 0;e=Object.keys(c);for(let t=0,n=e.length;t<n;t++)c[e[t]]=void 0;e=Object.keys(o);for(let t=0,n=e.length;t<n;t++){let n=e[t];o[n].used===!1?(o[n].count++,o[n].keepAlive===!1&&o[n].count>60&&delete o[n]):(o[n].used=!1,o[n].count=0)}}this.render=function(t,n){if(this.enabled===!1){e.render(t,n);return}let r=e.autoClear;e.autoClear=this.autoClear,e.render(t,n),e.autoClear=r,this.renderOutline(t,n)},this.renderOutline=function(t,n){let r=e.autoClear,i=t.matrixWorldAutoUpdate,a=t.background,o=e.shadowMap.enabled;t.matrixWorldAutoUpdate=!1,t.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,t.traverse(g),e.render(t,n),t.traverse(_),x(),t.matrixWorldAutoUpdate=i,t.background=a,e.autoClear=r,e.shadowMap.enabled=o},this.setSize=function(t,n){e.setSize(t,n)}}},Ai=.012,ji=350,Mi=.06,Ni=new Map([[`KeyW`,[0,1]],[`ArrowUp`,[0,1]],[`KeyS`,[0,-1]],[`ArrowDown`,[0,-1]],[`KeyA`,[-1,0]],[`ArrowLeft`,[-1,0]],[`KeyD`,[1,0]],[`ArrowRight`,[1,0]]]),Pi=new Set([`Delete`,`KeyF`,`KeyC`,`F5`,`F9`]),Fi=class{target;panVector=new R;zoomDelta=0;pointer=new R;middlePanHeld=!1;touchPanHeld=!1;dragRect;selectGesture;orderAt;touchPanCandidate;held=new Set;justPressed=new Map;listeners=[];dragStart;dragAdditive=!1;pendingGesture;pendingOrder;touches=new Map;touchGesturePinched=!1;touchPanAllowed=!1;lastTouchTap;ignoreNativeDoubleClickUntil=0;constructor(e){this.target=e;let t=e=>{e.repeat||this.justPressed.set(e.code,{shift:e.shiftKey,ctrl:e.ctrlKey}),Ni.has(e.code)&&this.held.add(e.code),(Ni.has(e.code)||Pi.has(e.code))&&e.preventDefault()},n=e=>{this.held.delete(e.code)},r=e=>{this.zoomDelta+=e.deltaY,e.preventDefault()},i=e=>{if(e.pointerType===`touch`&&this.touches.has(e.pointerId)){let t=this.touchDistance();this.touches.get(e.pointerId).set(e.clientX,e.clientY);let n=this.touchDistance();t!==void 0&&n!==void 0&&t>0&&(this.zoomDelta+=-Math.log(n/t)*800)}if(this.toNdc(e,this.pointer),e.pointerType===`touch`&&this.dragStart&&!this.touchGesturePinched){let e=Ii(this.dragStart,this.pointer),t=Math.max(e.x1-e.x0,e.y1-e.y0);this.touchPanAllowed&&t>Ai&&(this.touchPanHeld=!0)}else this.dragStart&&!this.touchGesturePinched&&(this.dragRect=Ii(this.dragStart,this.pointer))},a=t=>{if(this.toNdc(t,this.pointer),t.pointerType===`touch`&&(this.touches.set(t.pointerId,new R(t.clientX,t.clientY)),e.setPointerCapture(t.pointerId),this.touches.size>=2&&(this.touchGesturePinched=!0,this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.clearTouchTap())),t.button===0){if(this.touchGesturePinched){t.preventDefault();return}this.dragStart=this.pointer.clone(),this.dragAdditive=t.ctrlKey||t.shiftKey,t.pointerType===`touch`?(this.touchPanCandidate=this.dragStart.clone(),this.touchPanAllowed=!1,this.touchPanHeld=!1):this.dragRect=Ii(this.dragStart,this.pointer),e.setPointerCapture(t.pointerId)}else t.button===1?(this.middlePanHeld=!0,e.setPointerCapture(t.pointerId)):t.button===2&&(this.pendingOrder=this.pointer.clone());t.preventDefault()},o=t=>{if(t.pointerType===`touch`&&(this.touches.delete(t.pointerId),this.touchGesturePinched)){this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this.touches.size===0&&(this.touchGesturePinched=!1);return}if(t.button===1){this.middlePanHeld=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}if(t.button!==0||!this.dragStart)return;this.toNdc(t,this.pointer);let n=Ii(this.dragStart,this.pointer),r=Math.max(n.x1-n.x0,n.y1-n.y0);if(t.pointerType===`touch`&&(this.touchPanHeld||r>Ai)){this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,this.clearTouchTap(),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId);return}let i=t.pointerType===`touch`&&this.isDoubleTap(this.pointer,t.timeStamp);this.pendingGesture={rect:n,isBox:r>Ai,additive:this.dragAdditive,doubleClick:i,pointerType:Li(t.pointerType)},t.pointerType===`touch`&&(this.ignoreNativeDoubleClickUntil=performance.now()+ji),this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},s=t=>{this.touches.delete(t.pointerId),this.dragStart=void 0,this.dragRect=void 0,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,t.pointerType===`touch`&&this.clearTouchTap(),this.touches.size===0&&(this.touchGesturePinched=!1),e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)},c=e=>{if(performance.now()<this.ignoreNativeDoubleClickUntil)return;let t=new R,n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1)),this.pendingGesture={rect:Ii(t,t),isBox:!1,additive:e.ctrlKey||e.shiftKey,doubleClick:!0,pointerType:`mouse`},e.preventDefault()},l=e=>e.preventDefault(),u=()=>{this.held.clear(),this.dragStart=void 0,this.dragRect=void 0,this.middlePanHeld=!1,this.touches.clear(),this.touchGesturePinched=!1,this.touchPanCandidate=void 0,this.touchPanHeld=!1,this.touchPanAllowed=!1,this.clearTouchTap()};window.addEventListener(`keydown`,t),window.addEventListener(`keyup`,n),e.addEventListener(`wheel`,r,{passive:!1}),e.addEventListener(`pointermove`,i),e.addEventListener(`pointerdown`,a),e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,s),e.addEventListener(`dblclick`,c),e.addEventListener(`contextmenu`,l),window.addEventListener(`blur`,u),this.listeners.push(()=>window.removeEventListener(`keydown`,t),()=>window.removeEventListener(`keyup`,n),()=>e.removeEventListener(`wheel`,r),()=>e.removeEventListener(`pointermove`,i),()=>e.removeEventListener(`pointerdown`,a),()=>e.removeEventListener(`pointerup`,o),()=>e.removeEventListener(`pointercancel`,s),()=>e.removeEventListener(`dblclick`,c),()=>e.removeEventListener(`contextmenu`,l),()=>window.removeEventListener(`blur`,u))}resolveTouchPan(e){this.touchPanCandidate&&=(this.touchPanAllowed=e,void 0)}isDoubleTap(e,t){let n=this.lastTouchTap,r=n!==void 0&&t-n.timeStamp<=ji&&n.point.distanceTo(e)<=Mi;return this.lastTouchTap=r?void 0:{point:e.clone(),timeStamp:t},r}clearTouchTap(){this.lastTouchTap=void 0}touchDistance(){if(this.touches.size<2)return;let e=this.touches.values(),t=e.next().value,n=e.next().value;return t.distanceTo(n)}toNdc(e,t){let n=this.target.getBoundingClientRect();t.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height*2-1))}sample(){this.panVector.set(0,0);for(let e of this.held){let t=Ni.get(e);t&&(this.panVector.x+=t[0],this.panVector.y+=t[1])}this.panVector.lengthSq()>1&&this.panVector.normalize(),this.selectGesture=this.pendingGesture,this.orderAt=this.pendingOrder}wasPressed(e){return this.justPressed.has(e)}pressModifiers(e){return this.justPressed.get(e)}consume(){this.zoomDelta=0,this.justPressed.clear(),this.pendingGesture=void 0,this.pendingOrder=void 0,this.selectGesture=void 0,this.orderAt=void 0}dispose(){for(let e of this.listeners)e();this.listeners.length=0}};function Ii(e,t){return{x0:Math.min(e.x,t.x),y0:Math.min(e.y,t.y),x1:Math.max(e.x,t.x),y1:Math.max(e.y,t.y)}}function Li(e){return e===`touch`||e===`pen`?e:`mouse`}function Z(e,t){let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n-e.z*r,z:e.x*r+e.z*n}}function Ri(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return Math.abs(t)/2}function zi(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}function Bi(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)a.x<t&&(t=a.x),a.x>r&&(r=a.x),a.z<n&&(n=a.z),a.z>i&&(i=a.z);return{x0:t,z0:n,x1:r,z1:i}}function Vi(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let o=n[i],s=n[a];!o||!s||o.z>t!=s.z>t&&e<(s.x-o.x)*(t-o.z)/(s.z-o.z)+o.x&&(r=!r)}return r}function Hi(e,t,n){let r=e=>e.x*t.x+e.z*t.z-n,i=[];for(let t=0;t<e.length;t++){let n=e[t],a=e[(t+1)%e.length];if(!n||!a)continue;let o=r(n),s=r(a),c=o>=-1e-6,l=s>=-1e-6;if(c&&i.push(n),c!==l&&Math.abs(o-s)>1e-9){let e=o/(o-s);i.push({x:n.x+(a.x-n.x)*e,z:n.z+(a.z-n.z)*e})}}return i}function Ui(e,t){let n=0;for(let e=0;e<t.length;e++){let r=t[e],i=t[(e+1)%t.length];r&&i&&(n+=r.x*i.z-i.x*r.z)}let r=n>=0?t:[...t].reverse(),i=[...e];for(let e=0;e<r.length&&i.length;e++){let t=r[e],n=r[(e+1)%r.length];if(!t||!n)continue;let a=n.x-t.x,o=n.z-t.z,s=Math.max(Math.hypot(a,o),1e-9),c={x:-o/s,z:a/s};i=Hi(i,c,c.x*t.x+c.z*t.z)}return i}function Wi(e){if(e.length!==3)return 0;let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];if(!r||!i)return 0;let a=i.x-r.x,o=i.z-r.z;t=Math.max(t,a*a+o*o)}return t>1e-9?2*Ri(e)/t:0}function Gi(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/Math.max(i*i+a*a,1)));return Math.hypot(e-(n.x+i*o),t-(n.z+a*o))}function Ki(e,t,n,r){let i=r.x-n.x,a=r.z-n.z,o=Math.max(0,Math.min(1,((e-n.x)*i+(t-n.z)*a)/Math.max(i*i+a*a,1)));return{x:n.x+i*o,z:n.z+a*o}}function qi(e,t,n){let r=1/0;for(let i=0;i<n.length-1;i++){let a=n[i],o=n[i+1];a&&o&&(r=Math.min(r,Gi(e,t,a,o)))}return r}function Ji(e,t){let n=1/0;for(let r=0;r<e.length;r++){let i=e[r],a=e[(r+1)%e.length];if(!(!i||!a))for(let e=0;e<t.length;e++){let r=t[e],o=t[(e+1)%t.length];!r||!o||(n=Math.min(n,Gi(i.x,i.z,r,o),Gi(a.x,a.z,r,o),Gi(r.x,r.z,i,a),Gi(o.x,o.z,i,a)))}}return n}var Yi={downtown:3.8,commercial:3.5,residential:3};function Xi(e,t){return Math.max(1,Math.round(e/Yi[t]))}var Zi=[`intact`,`damaged`,`rubble`],Qi={intact:1,damaged:1.02,rubble:1.16};function $i(e){return e!==`rubble`}function ea(e){return 100+Math.min(100,e.height)*.35}function ta(e){let t=Qi[e.state],n=e.width*t/2,r=e.depth*t/2,i=e.rotation??0;if(i===0)return{x0:e.x-n,z0:e.z-r,x1:e.x+n,z1:e.z+r};let a=Math.cos(i),o=Math.sin(i),s=Math.abs(n*a)+Math.abs(r*o),c=Math.abs(n*o)+Math.abs(r*a);return{x0:e.x-s,z0:e.z-c,x1:e.x+s,z1:e.z+c}}function na(e){let t=Qi[e.state],n=e.width*t/2,r=e.depth*t/2,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=Z(t,i);return{x:n.x+e.x,z:n.z+e.z}})}var Q=1.8,ra=1.4,ia=.34,aa=.62;function oa(e,t,n){let r=Math.hypot(e,t)/n;return r<ia?`downtown`:r<aa?`commercial`:`residential`}function sa(e){return e===`residential`?1:e===`commercial`?2:3}var ca={downtown:{minLot:40,height:[46,120],stopChance:.22,gapChance:.07,parkChance:.04,parkingChance:.1,towerChance:.16},commercial:{minLot:28,height:[18,48],stopChance:.1,gapChance:.1,parkChance:.07,parkingChance:.16,towerChance:.08},residential:{minLot:20,height:[8,20],stopChance:.03,gapChance:.13,parkChance:.14,parkingChance:.06,towerChance:.03}},la=.05;function ua(e){return Wi(e)<la}var da=class e{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e){return Math.floor(this.next()*e)}save(){return{s:this.s}}static restore(t){let n=new e(0);return n.s=t.s>>>0,n}},fa={points:[],tags:[]};function pa(e,t){let{points:n,tags:r}=e;if(n.length<3)return fa;let i=[],a=[],o=e=>e.x*t.normal.x+e.z*t.normal.z-t.offset;for(let e=0;e<n.length;e++){let s=n[e],c=n[(e+1)%n.length];if(!s||!c)continue;let l=r[e]??-1,u=o(s),d=o(c),f=u>=-1e-6;if(f===d>=-1e-6){f&&(i.push(s),a.push(l));continue}let p=u-d;if(Math.abs(p)<1e-12)continue;let m=u/p,h={x:s.x+(c.x-s.x)*m,z:s.z+(c.z-s.z)*m};f?(i.push(s,h),a.push(l,t.tag)):(i.push(h),a.push(l))}return i.length>=3?{points:i,tags:a}:fa}function ma(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];r&&i&&(t+=r.x*i.z-i.x*r.z)}return t/2}function ha(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length];if(!a||!o)continue;let s=a.x*o.z-o.x*a.z;t+=s,n+=(a.x+o.x)*s,r+=(a.z+o.z)*s}if(Math.abs(t)>1e-9)return{x:n/(3*t),z:r/(3*t)};let i=0,a=0;for(let t of e)i+=t.x,a+=t.z;let o=Math.max(e.length,1);return{x:i/o,z:a/o}}function ga(e,t){let n=ma(t.points)>=0?t:_a(t);return e.map((t,r)=>{let i=n;for(let n=0;n<e.length;n++){if(n===r)continue;let a=e[n];if(!a)continue;let o=t.x-a.x,s=t.z-a.z,c=Math.hypot(o,s);if(c<1e-6)continue;let l={x:o/c,z:s/c},u={x:(t.x+a.x)/2,z:(t.z+a.z)/2};if(i=pa(i,{normal:l,offset:u.x*l.x+u.z*l.z,tag:n}),i.points.length<3)return fa}return i})}function _a(e){let t=e.points.length,n=[],r=[];for(let i=0;i<t;i++){let a=e.points[t-1-i];a&&(n.push(a),r.push(e.tags[(t-2-i+t)%t]??-1))}return{points:n,tags:r}}function va(e,t,n,r){let i=[...e];for(let e=0;e<r;e++){let e=ga(i,t);i=i.map((t,r)=>{let i=e[r];if(!i||i.points.length<3)return t;let a=Ui(n,i.points);return Ri(a)<1?t:ha(a)})}return i}function ya(e,t){let n=e;for(let r=0;r<e.points.length;r++){let i=e.points[r],a=e.points[(r+1)%e.points.length];if(!i||!a)continue;let o=e.tags[r]??-1,s=t(o);if(s<=0)continue;let c=a.x-i.x,l=a.z-i.z,u=Math.hypot(c,l);if(u<1e-9)continue;let d={x:-l/u,z:c/u};if(n=pa(n,{normal:d,offset:i.x*d.x+i.z*d.z+s,tag:o}),n.points.length<3)return fa}return n}function ba(e,t,n,r){let i=Bi(t),a=[],o=r*r,s=Math.max(1,n)*40;for(let r=0;r<s&&a.length<n;r++){let n=e.range(i.x0,i.x1),r=e.range(i.z0,i.z1);if(!Vi(n,r,t))continue;let s=!1;for(let e of a){let t=e.x-n,i=e.z-r;if(t*t+i*i<o){s=!0;break}}s||a.push({x:n,z:r})}return a}var xa=[11,15],Sa=.3,Ca=4,wa=2e4,Ta=88,Ea=3,Da=400,Oa=.995,ka=[15,25],Aa=.75,ja=3.4,Ma=200,Na=7,Pa=4,Fa=12,Ia={downtown:.15,commercial:.45,residential:.8},La=-2;function Ra(e){return La-e}function za(e){return e<=La}function Ba(e){return e>=0?15/2:za(e)?32/2:0}function Va(e,t,n){let r={blocks:[],buildings:[],roads:[],trees:[],cars:[]},i=Bi(t),a=n*.2,o={points:zi({x0:i.x0-a,z0:i.z0-a,x1:i.x1+a,z1:i.z1+a}),tags:[-1,-1,-1,-1]},[s,c]=xa,l=ga(va(ba(e,t,s+e.int(c-s+1),n*Sa),o,t,Ca),o);Ha(r,l,t);let u=l.map(t=>{if(!t||t.points.length<3)return;let r=ha(t.points),i=Ia[oa(r.x,r.z,n)];return e.next()<i?so(t):void 0});for(let i=0;i<l.length;i++){let a=l[i];if(!a||a.points.length<3)continue;let o=Ui(t,a.points);Ri(o)<Da||Ga(r,e,a,o,t,n,i,u[i])}return fo(r,e),r}function Ha(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];if(i)for(let t=0;t<i.points.length;t++){let a=i.tags[t]??-1;if(a<0||a<=r)continue;let o=i.points[t],s=i.points[(t+1)%i.points.length];!o||!s||Ua(e,o,s,32,!0,n)}}}function Ua(e,t,n,r,i,a){let o=n.x-t.x,s=n.z-t.z,c=Math.hypot(o,s);if(c<1)return;let l=Math.atan2(s,o),u={x:(t.x+n.x)/2,z:(t.z+n.z)/2},d=Ui(a,zi({x0:-c/2,z0:-r/2,x1:c/2,z1:r/2}).map(e=>{let t=Z(e,l);return{x:t.x+u.x,z:t.z+u.z}}));io(d,l,r)&&e.roads.push({...Bi(d),arterial:i,alongX:!0,rotation:l,clip:d})}function Wa(e,t){let n=3.4,r=21.5,i=[],a=[],o=(e,n)=>t.some(t=>Vi(e,n,t)),s=(t,n)=>e.some(e=>e===t||!e.arterial?!1:Vi(n.x,n.z,e.clip)?!0:e.clip.some((t,r)=>{let i=e.clip[(r+1)%e.clip.length];return i!==void 0&&Gi(n.x,n.z,t,i)<=.5})),c=(e,n)=>{let r=e.rotation??0,i=zi({x0:-e.width/2,z0:-e.depth/2,x1:e.width/2,z1:e.depth/2}).map(t=>{let n=Z(t,r);return{x:e.x+n.x,z:e.z+n.z}});for(let r of t){let t=Ui(r,i);Ri(t)>.05&&n.push({...e,clip:t})}};for(let t of e){if(!t.arterial)continue;let e=t.rotation??0,l={x:(t.x0+t.x1)/2,z:(t.z0+t.z1)/2},u=t.clip.map(t=>Z({x:t.x-l.x,z:t.z-l.z},-e).x),d=Math.min(...u),f=Math.max(...u);if(f-d<12)continue;let p=f-d>=50?[d,f].filter(n=>{let r=Z({x:n,z:0},e);return s(t,{x:l.x+r.x,z:l.z+r.z})}):[],m=p.includes(d)?d+r+7/2+3:d,h=p.includes(f)?f-r-7/2-3:f;if(h>m)for(let t=m;t<h;t+=18){let n=Math.min(9,h-t),r=Z({x:t+n/2,z:0},e);c({x:l.x+r.x,z:l.z+r.z,width:n,depth:.9,rotation:e},i)}for(let t of p){let i=t===d?t+r:t-r;for(let t=0;t<8;t++){let r=Z({x:i,z:-7*n*.5+t*n},e),s={x:l.x+r.x,z:l.z+r.z};o(s.x,s.z)&&c({...s,width:7,depth:1.7,rotation:e},a)}}}return{centreLines:i,crosswalks:a}}function Ga(e,t,n,r,i,a,o,s){let c={points:n.points,tags:n.tags.map(e=>e>=0?Ra(e):e)},l=ga(va(ba(t,r,Math.max(3,Math.round(Ri(r)/wa)),Ta),c,r,Ea),c);for(let t=0;t<l.length;t++){let n=l[t];if(n)for(let r=0;r<n.points.length;r++){let a=n.tags[r]??-1;if(a<0||a<=t)continue;let o=n.points[r],s=n.points[(r+1)%n.points.length];!o||!s||Ua(e,o,s,15,!1,i)}}for(let n of l)!n||n.points.length<3||Ka(e,t,n,i,a,o,s)}function Ka(e,t,n,r,i,a,o){let s=ya(n,Ba);if(s.points.length<3)return;let c=Ui(r,s.points);if(Ri(c)<Da)return;let l=ha(c),u=oa(l.x,l.z,i),d=ca[u],f=t.next(),p=e.blocks.length,m=o??ao(s.points);if(f<d.parkChance){let n=ya(s,()=>7),i=n.points.length>=3?Ui(r,n.points):[];if(Ri(i)<Da)return;e.blocks.push({id:p,districtId:a,...Bi(c),district:u,kind:`park`,clip:c,innerClip:i,rotation:m}),lo(e,t,i);return}if(f<d.parkChance+d.parkingChance){let n=ya(s,()=>7),i=n.points.length>=3?Ui(r,n.points):[],o=ao(c);e.blocks.push({id:p,districtId:a,...Bi(c),district:u,kind:`parking`,clip:c,innerClip:i,rotation:o}),uo(e,t,i,c,o);return}e.blocks.push({id:p,districtId:a,...Bi(c),district:u,kind:`built`,clip:c,rotation:m});let h=ya(s,()=>7);if(h.points.length<3||(qa(e,t,h.points,r,m,u,a,p,d),u!==`downtown`))return;let g=ya(s,()=>Na),_=g.points.length>=3?Ui(r,g.points):[];if(!Ja(e,p,c))return;let v=e.blocks[p];if(v&&Ri(_)>=Da){e.blocks[p]={...v,innerClip:_};let t=e.buildings.filter(e=>e.blockId===p&&e.state!==`rubble`);lo(e,new da(eo(p,_)),_,t.map(ro),Fa)}}function qa(e,t,n,r,i,a,o,s,c){let l=n.map(e=>Z(e,-i)),u=r.map(e=>Z(e,-i)),d=Bi(l);if(d.x1-d.x0<c.minLot||d.z1-d.z0<c.minLot)return;let f=[];co(t,d,c,f);for(let n of f){if(t.next()<c.gapChance||n.x1-n.x0-1.4<=2||n.z1-n.z0-1.4<=2)continue;let r=Ui(zi({x0:n.x0+ra/2,x1:n.x1-ra/2,z0:n.z0+ra/2,z1:n.z1-ra/2}),l),d=Ri(r);if(d<25)continue;let f=Ui(u,r),p=Ri(f);if(p<25)continue;let m=ha(f),h=0,g=0;for(let e of f)h=Math.max(h,Math.abs(e.x-m.x)),g=Math.max(g,Math.abs(e.z-m.z));let _=h*2,v=g*2;if(_<=2||v<=2)continue;let y=p<d-1,b=p<_*v*Oa,[x,S]=c.height,C=t.range(x,S),w=!y&&t.next()<c.towerChance?t.range(1.6,2.4):1;a!==`downtown`&&(C*=w);let T=Z(m,i);e.buildings.push({id:0,x:T.x,z:T.z,width:_,depth:v,height:C,district:a,districtId:o,blockId:s,paletteIndex:t.int(7),greebles:y?0:1+t.int(3),rotation:i,state:y?`rubble`:`intact`,health:0,...b?{clip:f.map(e=>Z(e,i))}:{}})}}function Ja(e,t,n){let r=e.buildings.findIndex(e=>e.blockId===t);if(r<0)return!1;let i=r;for(;e.buildings[i]?.blockId===t;)i++;let a=e.buildings.slice(r,i),o=[];for(let e of a){if(e.state!==`intact`||!Za(e,n))continue;let t=Qa(e,n);o.every(e=>Ji(ro(e),ro(t))>=ka[0]-1e-6)&&o.push(t)}return e.buildings.splice(r,a.length,...Ya(a,o)),o.length>0}function Ya(e,t){if(t.length===0)return[];let n=e=>e.reduce((e,t)=>t.state===`rubble`?e:e+Ri(ro(t))*t.height,0),r=n(e),i=n(t);if(i<=0)return[...t];let a=Math.min(Math.max(r/i,1),ja);return t.map(e=>({...e,height:Xa(e.height*a)}))}function Xa(e){return e<=Ma?e:Ma+120*(1-Math.exp(-(e-Ma)/120))}function Za(e,t){return Ji(ro(e),t)<=7+ra+.1}function Qa(e,t){let n=ro(e).map(t=>({x:e.x+(t.x-e.x)*Aa,z:e.z+(t.z-e.z)*Aa})),r=to(e,t),i=7-Math.min(...n.map(e=>(e.x-r.a.x)*r.inward.x+(e.z-r.a.z)*r.inward.z)),a=no(n,t,r.inward,i),o=n.map(e=>({x:e.x+r.inward.x*a,z:e.z+r.inward.z*a}));return{...e,x:e.x+r.inward.x*a,z:e.z+r.inward.z*a,width:e.width*Aa,depth:e.depth*Aa,height:e.height*$a(e),...e.clip?{clip:o}:{}}}function $a(e){let t=Math.imul(Math.round(e.x*10),2654435761)^Math.imul(Math.round(e.z*10),2246822507);return t^=Math.imul(Math.round((e.width+e.depth)*10),3266489909),t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,1+(t>>>0)/4294967296*.6}function eo(e,t){let n=ha(t),r=Math.imul(e+1,2654435761)^Math.imul(Math.round(n.x),2246822507);return r^=Math.imul(Math.round(n.z),3266489909),(r^r>>>16)>>>0}function to(e,t){let n=ha(t),r;for(let i=0;i<t.length;i++){let a=t[i],o=t[(i+1)%t.length];if(!a||!o)continue;let s=Math.max(Math.hypot(o.x-a.x,o.z-a.z),1e-9),c={x:-(o.z-a.z)/s,z:(o.x-a.x)/s},l={x:(a.x+o.x)/2,z:(a.z+o.z)/2};(n.x-l.x)*c.x+(n.z-l.z)*c.z<0&&(c={x:-c.x,z:-c.z});let u=Gi(e.x,e.z,a,o);(!r||u<r.distance)&&(r={a,inward:c,distance:u})}if(!r)throw Error(`downtown block has no edge`);return r}function no(e,t,n,r){let i=r=>e.every(e=>{let i={x:e.x+n.x*r,z:e.z+n.z*r};return Vi(i.x,i.z,t)||qi(i.x,i.z,[...t,t[0]])<=1e-5});if(i(r))return r;let a=0,o=r;for(let e=0;e<24;e++){let e=(a+o)/2;i(e)?a=e:o=e}return a}function ro(e){return e.clip&&e.clip.length>=3?e.clip:na({...e,state:`intact`})}function io(e,t,n){if(e.length<3)return!1;let r=e.map(e=>Z(e,-t).x),i=Math.max(...r)-Math.min(...r);return i>=n&&Ri(e)>=i*n*.6}function ao(e){return oo(e).angle}function oo(e,t){let n=0,r=-1;for(let i=0;i<e.length;i++){if(t&&!t(i))continue;let a=e[i],o=e[(i+1)%e.length];if(!a||!o)continue;let s=o.x-a.x,c=o.z-a.z,l=s*s+c*c;l>r&&(r=l,n=Math.atan2(c,s))}return{angle:n,lengthSquared:r}}function so(e){let t=oo(e.points,t=>(e.tags[t]??-1)>=0);return t.lengthSquared>0?t.angle:ao(e.points)}function co(e,t,n,r,i=0){let a=t.x1-t.x0,o=t.z1-t.z0,s=a>=n.minLot*2,c=o>=n.minLot*2;if(!s&&!c){r.push(t);return}if(i>=2&&e.next()<n.stopChance){r.push(t);return}let l;l=s&&c?a>o?e.next()<.78:e.next()<.22:s;let u=e.range(.36,.64);if(l){let o=t.x0+a*u;co(e,{...t,x1:o},n,r,i+1),co(e,{...t,x0:o},n,r,i+1)}else{let a=t.z0+o*u;co(e,{...t,z1:a},n,r,i+1),co(e,{...t,z0:a},n,r,i+1)}}function lo(e,t,n,r=[],i=Pa){let a=Bi(n),o=[...n,n[0]],s=4+t.int(Math.max(2,Math.floor(Ri(n)/1400))),c=0;for(let e=0;e<s*3;e++)c^=Math.floor(t.next()*4294967296);let l=new da(c),u=2+l.int(Math.max(1,Math.min(3,Math.floor(Ri(n)/2200)))),d=(e,t)=>Vi(e,t,n)&&qi(e,t,o)>=8&&r.every(n=>!Vi(e,t,n)&&qi(e,t,[...n,n[0]])>=i);for(let t=0;t<u;t++){let t;for(let e=0;e<8;e++){let e=l.range(a.x0,a.x1),n=l.range(a.z0,a.z1);if(d(e,n)){t={x:e,z:n};break}}if(!t)continue;let n=2+l.int(3),r=l.range(5,11),i=l.next()<.35;for(let a=0;a<n;a++){let n=l.range(0,Math.PI*2),o=a===0?0:l.range(2,r),s=t.x+Math.cos(n)*o,c=t.z+Math.sin(n)*o,u=a===0?i?l.range(2.4,2.88):l.range(1.45,1.92):l.range(1.12,1.8);d(s,c)&&e.trees.push({x:s,z:c,scale:u})}}}function uo(e,t,n,r,i){let a=Bi(n.map(e=>Z(e,-i))),o=Math.floor((a.x1-a.x0-14)/15),s=Math.floor((a.z1-a.z0-14)/6);if(!(o<1||s<1))for(let c=0;c<s;c++)for(let s=0;s<o;s++){if(t.next()<.32)continue;let o=t.int(6),l=Z({x:a.x0+7+15*(s+.5),z:a.z0+7+6*(c+.5)},i);!Vi(l.x,l.z,n)||qi(l.x,l.z,[...r,r[0]])<7||e.cars.push({x:l.x,z:l.z,alongX:!0,paletteIndex:o,parked:!0,rotation:i})}}function fo(e,t){let n=25*Math.PI/180,r=new da(t.save().s^2654435769);for(let i of e.roads){let a=i.rotation??0,o={x:(i.x0+i.x1)/2,z:(i.z0+i.z1)/2},s=i.clip.map(e=>{let t=Z({x:e.x-o.x,z:e.z-o.z},-a);return i.alongX?t.x:t.z}),c=Math.min(...s),l=Math.max(...s),u=Math.max(1,Math.floor((l-c)/(i.arterial?90:150)));for(let s=0;s<u;s++){let s;for(let e=0;e<12&&!s;e++){let e=t.range(0,1),n=(t.next()<.5?-1:1)*(i.arterial?8:4),r=Z(i.alongX?{x:c+(l-c)*e,z:n}:{x:n,z:c+(l-c)*e},a),u={x:o.x+r.x,z:o.z+r.z};Vi(u.x,u.z,i.clip)&&(s=u)}if(!s)continue;let u=t.int(6);e.cars.push({x:s.x+r.range(-3,3),z:s.z+r.range(-3,3),alongX:i.alongX,paletteIndex:u,parked:!1,rotation:a+r.range(-n,n)})}}}var po=11,mo=1.75,ho=[.06,.12],go=[2,3],_o=14,vo=8,yo=[12*mo,26*mo],bo=.28*Math.sqrt(mo),xo=[27,42],So=[71,85],Co=150,wo=class e{boundary;surfaces;decorativeFragments;buildings=[];blocks=[];roads=[];roadPatches=[];centreLines=[];crosswalks=[];trees=[];cars=[];radius;rng;byId=new Map;buckets=new Map;constructor(e){this.radius=e.radius??900,this.rng=new da(e.seed);let t=this.generateBoundary();this.boundary=t;let n=Va(this.rng,t,this.radius);this.blocks.push(...n.blocks),this.roads.push(...n.roads),this.trees.push(...n.trees),this.cars.push(...n.cars),(e.maxBuildings===void 0?n.buildings:To(n.buildings,e.maxBuildings)).forEach((e,t)=>this.buildings.push({...e,id:t})),e.maxBuildings!==void 0&&this.removeOrphanedDowntownTrees();let r=this.fractureCorner();this.boundary=r.main,this.surfaces=[r.main,r.detached],this.decorativeFragments=r.chips,this.cars.splice(0,this.cars.length,...this.cars.filter(e=>this.containsPoint(e.x,e.z)));let i=Wa(this.roads,this.surfaces);this.centreLines.push(...i.centreLines),this.crosswalks.push(...i.crosswalks);for(let e of this.buildings)e.health=e.state===`rubble`?0:ea(e),this.byId.set(e.id,e),this.index(e)}get startAnchors(){let e=this.radius*.5;return[{x:-e,z:0},{x:e,z:0}]}static bucketKey(e,t){return(e+512)*4096+(t+512)}removeOrphanedDowntownTrees(){let e=this.blocks.filter(e=>e.kind===`built`&&e.district===`downtown`&&e.innerClip&&this.buildings.some(t=>t.blockId===e.id&&t.state!==`rubble`));this.trees.splice(0,this.trees.length,...this.trees.filter(t=>{let n=this.blocks.find(e=>e.kind===`built`&&e.district===`downtown`&&e.innerClip&&Vi(t.x,t.z,e.innerClip));return!n||e.includes(n)}))}index(t){let n=ta({...t,state:`rubble`}),r=Math.floor(n.x0/Co),i=Math.floor(n.x1/Co),a=Math.floor(n.z0/Co),o=Math.floor(n.z1/Co);for(let n=r;n<=i;n++)for(let r=a;r<=o;r++){let i=e.bucketKey(n,r),a=this.buckets.get(i);a?a.push(t.id):this.buckets.set(i,[t.id])}}buildingsOverlapping(t){let n=new Set,r=Math.floor(t.x0/Co),i=Math.floor(t.x1/Co),a=Math.floor(t.z0/Co),o=Math.floor(t.z1/Co);for(let t=r;t<=i;t++)for(let r=a;r<=o;r++)for(let i of this.buckets.get(e.bucketKey(t,r))??[])n.add(i);let s=[];for(let e of[...n].sort((e,t)=>e-t)){let t=this.byId.get(e);t&&s.push(t)}return s}generateBoundary(){let e=[];for(let t=0;t<po;t++){let n=t/po*Math.PI*2+this.rng.range(-.22,.22),r=this.radius*this.rng.range(.72,1.08);e.push({x:Math.cos(n)*r,z:Math.sin(n)*r})}return e}containsPoint(e,t){for(let n of this.surfaces??[this.boundary])if(Vi(e,t,n))return!0;return!1}clearOfSurface(e,t,n,r,i){let a=n=>Math.min(...i.map(r=>Ji(r,e.map(e=>({x:e.x+t.x*n,z:e.z+t.z*n}))))),o=n,s=o,c=a(o);for(let e=0;e<vo&&c<_o;e++){o=Math.max(o+r*_o,0);let e=a(o);e>c&&(c=e,s=o)}return{x:t.x*s,z:t.z*s}}fractureCorner(){let e=this.boundary,t=e.length,n=n=>e[(n+t)%t],r=(e,t,n)=>({x:e.x+(t.x-e.x)*n,z:e.z+(t.z-e.z)*n}),i=this.rng.int(t),a=Math.abs(Ri(e)),o=(e,t)=>{let i=n(e-1),o=n(e),s=n(e+t-1),c=n(e+t);if(!i||!o||!s||!c)return;let l=r(i,o,.38),u=r(s,c,.62);if(Gi(0,0,l,u)<this.radius*.58)return;let d=[l];for(let r=0;r<t;r++){let t=n(e+r);t&&d.push(t)}return d.push(u),{cutA:l,cutB:u,share:a>0?Math.abs(Ri(d))/a:0}},s=i,c=go[0],l;for(let e=go[0];e<=go[1];e++){for(let n=0;n<t;n++){let r=(i+n)%t,a=o(r,e);if(a){if(a.share>=ho[0]&&a.share<=ho[1]){l={candidate:r,width:e,share:a.share};break}(!l||a.share>l.share)&&(l={candidate:r,width:e,share:a.share})}}if(l&&l.share>=ho[0]&&l.share<=ho[1])break}l&&(s=l.candidate,c=l.width);let u=n(s-1),d=n(s),f=n(s+c-1),p=n(s+c);if(!u||!d||!f||!p)throw Error(`cannot fracture empty boundary`);let m=r(u,d,.38),h=r(f,p,.62),g=this.polygonCentroid(e),_=[m];for(let e=0;e<c;e++){let t=n(s+e);t&&_.push(t)}_.push(h);let v=this.polygonCentroid(_),y=v.x-g.x,b=v.z-g.z,x=Math.max(Math.hypot(y,b),1),S=[m],C=h.x-m.x,w=h.z-m.z,T=Math.max(Math.hypot(C,w),1),E=-w/T,D=C/T;for(let e=1;e<=7;e++){let t=e/8,n=Math.sin(t*Math.PI),i=this.rng.range(-48,48)*n,a=r(m,h,t);S.push({x:a.x+E*i,z:a.z+D*i})}S.push(h);let O=[],ee=[],k=[],A=new Map([[1,!1],[3,!0],[5,!1],[7,!0]]);for(let e=0;e<S.length-1;e++){let t=S[e],n=S[e+1];if(!t||!n)continue;O.push(t),ee.push(t);let i=A.get(e);if(i===void 0)continue;let a=r(t,n,.5),o=g.x-a.x,s=g.z-a.z,c=Math.max(Math.hypot(o,s),1);o/=c,s/=c,i&&(o=-o,s=-s);let l=this.rng.range(yo[0],yo[1]),u={x:a.x+o*l,z:a.z+s*l},d=[t,u,n];ua(d)||(i?ee.push(u):O.push(u),k.push({points:d,fromPiece:i}))}let te=S[S.length-1];te&&(O.push(te),ee.push(te));let ne=[..._,...ee.slice(1,-1).reverse()],j=[h];for(let e=c;e<t;e++){let t=n(s+e);t&&j.push(t)}j.push(m,...O.slice(1,-1));let re=this.rng.range(So[0],So[1]),ie={x:y/x*re,z:b/x*re},ae=ne.map(e=>({x:e.x+ie.x,z:e.z+ie.z})),oe=[],M=new Map;for(let e of[2,5,8]){let t=j[(e-1+j.length)%j.length],n=j[e],i=j[(e+1)%j.length];if(!t||!n||!i)continue;let a=r(t,n,1-bo),o=r(n,i,bo),s=[a,n,o];if(ua(s))continue;M.set(e,[a,o]);let c=n.x-g.x,l=n.z-g.z,u=Math.max(Math.hypot(c,l),1);c/=u,l/=u;let d=this.rng.range(xo[0],xo[1]);oe.push({points:s,axis:{x:c,z:l},start:d,direction:1})}j=j.flatMap((e,t)=>{let n=M.get(t);return n?[...n]:[e]});let N={x:y/x,z:b/x},se=[...k.map(e=>{let t=e.fromPiece?-1:1,n=e.fromPiece?re:0;return{points:e.points,axis:N,start:n,direction:t}}),...oe].map(e=>{let t=this.clearOfSurface(e.points,e.axis,e.start,e.direction,[j,ae]),n=e=>e.map(e=>({x:e.x+t.x,z:e.z+t.z})),r=[];for(let t of this.blocks){let i=Ui(e.points,t.clip??zi(t));Ri(i)>=1&&r.push({kind:t.kind,polygon:n(i)})}let i=[];for(let t of this.buildings){let r=Ui(e.points,t.clip??na({...t,state:`intact`}));Ri(r)>=1&&i.push(n(r))}let a=this.cars.filter(t=>t.parked&&Vi(t.x,t.z,e.points)).map(e=>({...e,x:e.x+t.x,z:e.z+t.z})),o=Wa(this.roads,[e.points]).centreLines.map(e=>({...e,x:e.x+t.x,z:e.z+t.z,...e.clip?{clip:n(e.clip)}:{}}));return{boundary:n(e.points),depth:this.rng.range(35,75),overlays:r,rubble:i,parkedCars:a,centreLines:o}});return this.splitRoadPatches(j,ne,ie),this.splitRoads(j,ne,ie),this.splitBlocks(j,ne,ie),this.splitBuildings(j,ne,ie,S),this.movePointContent(j,ne,ie),{main:j,detached:ae,chips:se}}polygonCentroid(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}splitRoadPatches(e,t,n){let r=[];for(let i of this.roadPatches){let a=Ui(e,i);Ri(a)>=1&&r.push(a);let o=Ui(t,i);Ri(o)>=1&&r.push(o.map(e=>({x:e.x+n.x,z:e.z+n.z})))}this.roadPatches.splice(0,this.roadPatches.length,...r)}splitRoads(e,t,n){let r=[];for(let i of this.roads){let a=i.arterial?32:15,o=i.rotation??0,s=Ui(e,i.clip);io(s,o,a)&&r.push({...i,...Bi(s),clip:s});let c=Ui(t,i.clip);if(io(c,o,a)){let e=c.map(e=>({x:e.x+n.x,z:e.z+n.z}));r.push({...i,...Bi(e),clip:e})}}this.roads.splice(0,this.roads.length,...r)}splitBlocks(e,t,n){let r=[];for(let i of this.blocks){let a=i.clip??zi(i),o=Ui(e,a),s=i.innerClip?Ui(o,Ui(e,i.innerClip)):void 0;Ri(o)>=20&&r.push({...i,...Bi(o),clip:o,...s&&Ri(s)>=1?{innerClip:s}:{}});let c=Ui(t,a);if(Ri(c)>=20){let e=c.map(e=>({x:e.x+n.x,z:e.z+n.z})),a=i.innerClip?Ui(c,Ui(t,i.innerClip)).map(e=>({x:e.x+n.x,z:e.z+n.z})):void 0;r.push({...i,...Bi(e),clip:e,...a&&Ri(a)>=1?{innerClip:a}:{}})}}this.blocks.splice(0,this.blocks.length,...r)}splitBuildings(e,t,n,r){for(let i=0;i<this.buildings.length;i++){let a=this.buildings[i];if(!a)continue;let o=a.clip&&a.clip.length>=3?a.clip:na({...a,state:`intact`}),s=Ui(e,o),c=Ui(t,o),l=Ri(s),u=Ri(c),d=Ri(o),f=e=>o.every(t=>Vi(t.x,t.z,e)),p=l>10&&u>10||Math.max(l,u)<d*.98||qi(a.x,a.z,r)<Math.hypot(a.width,a.depth)*.52||!(f(e)||f(t)),m=u>l,h=m?c.map(e=>({x:e.x+n.x,z:e.z+n.z})):s;this.buildings[i]={...a,x:a.x+(m?n.x:0),z:a.z+(m?n.z:0),state:p?`rubble`:a.state,...p||a.clip?{clip:h}:{}}}}movePointContent(e,t,n){let r=r=>{let i=[];for(let a of r)Vi(a.x,a.z,t)?i.push({...a,x:a.x+n.x,z:a.z+n.z}):Vi(a.x,a.z,e)&&i.push(a);r.splice(0,r.length,...i)};r(this.trees),r(this.cars),this.trees.splice(0,this.trees.length,...this.trees.filter(e=>this.blocks.some(t=>(t.kind===`park`||t.kind===`built`&&t.district===`downtown`&&t.innerClip)&&(()=>{let n=t.innerClip??t.clip??zi(t);return Vi(e.x,e.z,n)&&qi(e.x,e.z,[...n,n[0]])>=8})()))),this.cars.splice(0,this.cars.length,...this.cars.filter(e=>!e.parked||this.blocks.some(t=>t.kind===`parking`&&t.clip!==void 0&&Vi(e.x,e.z,t.clip)&&qi(e.x,e.z,[...t.clip,t.clip[0]])>=7)))}get(e){return this.byId.get(e)}setState(e,t){let n=this.byId.get(e);if(!n||n.state===t)return!1;n.state=t;let r=ea(n);return n.health=t===`intact`?r:t===`damaged`?r*.5:0,!0}advanceState(e){let t=this.byId.get(e);if(!t)return;let n=Zi[Zi.indexOf(t.state)+1];return n&&this.setState(e,n),t.state}setAllStates(e){for(let t of this.buildings)this.setState(t.id,e)}damage(e,t){let n=this.byId.get(e);if(!n||n.state===`rubble`||t<=0)return!1;n.health=Math.max(0,n.health-t);let r=ea(n),i=n.health<=0?`rubble`:n.health<=r*.5?`damaged`:`intact`;return n.state!==i&&(n.state=i,!0)}countByState(e){let t=0;for(let n of this.buildings)n.state===e&&t++;return t}countByDistrict(e){let t=0;for(let n of this.buildings)n.district===e&&t++;return t}countBlocks(e){let t=0;for(let n of this.blocks)n.kind===e&&t++;return t}hash(){let e=2166136261,t=t=>{e^=Math.round(t*1e3)|0,e=Math.imul(e,16777619)};for(let e of this.boundary)t(e.x),t(e.z);for(let e of this.surfaces.slice(1))for(let n of e)t(n.x),t(n.z);for(let e of this.decorativeFragments)for(let n of e.boundary)t(n.x),t(n.z);for(let e of this.buildings){t(e.x),t(e.z),t(e.width),t(e.depth),t(e.height),t(Zi.indexOf(e.state)),t(e.paletteIndex),t(e.rotation??0);for(let n of e.clip??[])t(n.x),t(n.z)}for(let e of this.blocks)t(e.x0),t(e.z0),t(e.rotation??0);return(e>>>0).toString(16).padStart(8,`0`)}};function To(e,t){let n=Math.max(0,Math.min(t,e.length));return n===e.length?e:n===0?[]:Array.from({length:n},(t,r)=>e[Math.floor(r*e.length/n)])}var Eo=[`machines`,`ancients`];function Do(e){return e===`machines`?`ancients`:`machines`}var Oo={humansPips:40,segments:2,pipsPerSegment:20},ko={machines:{id:`machines`,name:`Machines`,meterLabel:`ENERGY`,harvest:`deposit`,primaryOrder:`Deploy`},ancients:{id:`ancients`,name:`Ancient Ones`,meterLabel:`INSANITY`,harvest:`immediate`,primaryOrder:`Unidentified order (frame_0057)`}};function Ao(e=Oo){return e.segments*e.pipsPerSegment}var jo=1e3/30,Mo=class{sim;stepMs;accumulatorMs=0;steps=0;dropped=0;constructor(e,t=jo){this.sim=e,this.stepMs=t}get stepCount(){return this.steps}get droppedMs(){return this.dropped}advance(e){if(!Number.isFinite(e)||e<=0)return this.accumulatorMs/this.stepMs;this.accumulatorMs+=e;let t=0;for(;this.accumulatorMs>=this.stepMs&&t<5;)this.sim.step(),this.steps++,t++,this.accumulatorMs-=this.stepMs;return this.accumulatorMs>=this.stepMs&&(this.dropped+=this.accumulatorMs,this.accumulatorMs=0),this.accumulatorMs/this.stepMs}},No=36,Po={harvestPerStep:4/30,tier2Cost:300,structureCost:180};function Fo(e,t,n,r){return(e-n)**2+(t-r)**2}function Io(e,t){return e!==`machines`||t<60}function Lo(e,t){return e?.state===`intact`&&(t[e.id]??0)>0}function Ro(e,t,n){let r=n.clip;if(r&&r.length>=3){if(Vi(e,t,r))return 0;let n=1/0;for(let i=0;i<r.length;i++){let a=r[i],o=r[(i+1)%r.length];a&&o&&(n=Math.min(n,Gi(e,t,a,o)))}return n*n}let i=Z({x:e-n.x,z:t-n.z},-(n.rotation??0)),a=Math.max(Math.abs(i.x)-n.width/2,0),o=Math.max(Math.abs(i.z)-n.depth/2,0);return a*a+o*o}function zo(e,t,n,r){let i=n.clip,a={x:n.x,z:n.z};if(i&&i.length>=3){let n=1/0;for(let r=0;r<i.length;r++){let o=i[r],s=i[(r+1)%i.length];if(!o||!s)continue;let c=Ki(e,t,o,s),l=(c.x-e)**2+(c.z-t)**2;l<n&&(n=l,a=c)}}else{let r=Z({x:e-n.x,z:t-n.z},-(n.rotation??0)),i=Z({x:Math.max(-n.width/2,Math.min(n.width/2,r.x)),z:Math.max(-n.depth/2,Math.min(n.depth/2,r.z))},n.rotation??0);a={x:n.x+i.x,z:n.z+i.z}}let o=e-a.x,s=t-a.z,c=Math.hypot(o,s);return c<1e-6&&(o=e-n.x,s=t-n.z,c=Math.hypot(o,s)),c<1e-6?{x:a.x+r,z:a.z}:{x:a.x+o/c*r,z:a.z+s/c*r}}var Bo=[`small`,`medium`,`large`,`extraLarge`],Vo={small:0,medium:1,large:2,extraLarge:3},Ho=3,Uo=4,Wo=69,Go=30,Ko=2,qo=.06,Jo=4e4,Yo=40,Xo={waypoints:[],reachedGoal:!1,expansions:0,length:1/0},Zo=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],Qo=Math.SQRT2;function $o(e,t,n,r){let i=!1,a=1/0;for(let r=0,o=n.length-1;r<n.length;o=r++){let s=n[r],c=n[o];if(!s||!c)continue;s.z>t!=c.z>t&&e<(c.x-s.x)*(t-s.z)/(c.z-s.z)+s.x&&(i=!i);let l=c.x-s.x,u=c.z-s.z,d=Math.max(0,Math.min(1,((e-s.x)*l+(t-s.z)*u)/Math.max(l*l+u*u,1e-9)));a=Math.min(a,Math.hypot(e-(s.x+l*d),t-(s.z+u*d)))}return i||a<=r}var es=class{f=[];node=[];get size(){return this.node.length}clear(){this.f.length=0,this.node.length=0}less(e,t){let n=this.f[e]??0,r=this.f[t]??0;return n===r?(this.node[e]??0)<(this.node[t]??0):n<r}swap(e,t){let n=this.f[e]??0,r=this.node[e]??0;this.f[e]=this.f[t]??0,this.node[e]=this.node[t]??0,this.f[t]=n,this.node[t]=r}push(e,t){this.f.push(e),this.node.push(t);let n=this.node.length-1;for(;n>0;){let e=n-1>>1;if(!this.less(n,e))break;this.swap(n,e),n=e}}pop(){let e=this.node[0]??-1,t=this.node.length-1;this.swap(0,t),this.f.pop(),this.node.pop();let n=0,r=this.node.length;for(;;){let e=n*2+1,t=e+1,i=n;if(e<r&&this.less(e,i)&&(i=e),t<r&&this.less(t,i)&&(i=t),i===n)break;this.swap(n,i),n=i}return e}},ts=class{city;dim;min;alwaysSolid;buildingTier;offShard;cost;dist;scratch=new Uint8Array;gScore;cameFrom;seenGen;closed;generation=0;heap=new es;rebuildCount=0;lastRebuildCells=0;onShardCount=-1;obstacles=[];constructor(e){this.city=e;let t=e.radius+Go;this.min=-t,this.dim=Math.ceil(t*2/3);let n=this.dim*this.dim;this.alwaysSolid=new Uint8Array(n),this.buildingTier=new Uint8Array(n),this.offShard=new Uint8Array(n),this.cost=new Uint8Array(n),this.dist={small:new Uint8Array(n),medium:new Uint8Array(n),large:new Uint8Array(n),extraLarge:new Uint8Array(n)},this.gScore=new Float64Array(n),this.cameFrom=new Int32Array(n),this.seenGen=new Uint32Array(n),this.closed=new Uint8Array(n),this.buildTerrain(),this.rebuildAll()}get cellCount(){return this.dim*this.dim}cellX(e){return Math.floor((e-this.min)/3)}cellZ(e){return Math.floor((e-this.min)/3)}worldX(e){return this.min+(e+.5)*3}worldZ(e){return this.min+(e+.5)*3}inBounds(e,t){return e>=0&&t>=0&&e<this.dim&&t<this.dim}clearanceAt(e,t,n=`small`){let r=this.cellX(e),i=this.cellZ(t);return this.inBounds(r,i)?(this.fieldFor(n,!1)[i*this.dim+r]??0)/3:0}passable(e,t,n,r,i){let a=this.cellX(e),o=this.cellZ(t);return this.passableCell(a,o,i,this.fieldFor(n,r))}costAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?this.cost[r*this.dim+n]??1:1}walkable(e,t,n,r,i,a,o){return this.sample(e,t,n,r,o,this.fieldFor(i,a))}fieldFor(e,t){return t?this.dist.small:this.dist[e]}passableCell(e,t,n,r){return this.inBounds(e,t)?(r[t*this.dim+e]??0)>n*3:!1}buildTerrain(){let e=1/0;for(let t of this.city.boundary)e=Math.min(e,Math.hypot(t.x,t.z));let t=e*.92;for(let e=0;e<this.dim;e++){let n=this.worldZ(e);for(let r=0;r<this.dim;r++){let i=this.worldX(r);Math.hypot(i,n)<t||this.city.containsPoint(i,n)||(this.offShard[e*this.dim+r]=1)}}}rebuildAll(){this.alwaysSolid.set(this.offShard),this.buildingTier.fill(0),this.cost.fill(1);for(let e of this.city.buildings)this.stampBuilding(e);for(let e of this.obstacles)this.stampObstacle(e);for(let e of Bo)this.transform(Vo[e],this.dist[e],0,0,this.dim-1,this.dim-1);this.lastRebuildCells=this.cellCount}addObstacle(e){this.obstacles.push(e);let t=this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1));this.stampObstacle(e);let n=this.grow(t,23),r=this.grow(n,23);for(let e of Bo)this.transform(Vo[e],this.dist[e],r.x0,r.z0,r.x1,r.z1,n);this.rebuildCount++,this.lastRebuildCells=(r.x1-r.x0+1)*(r.z1-r.z0+1)}setObstacles(e){this.obstacles.length=0,this.obstacles.push(...e),this.rebuildAll()}rebuildAround(e){let t=this.dirtyRect(e);for(let e=t.z0;e<=t.z1;e++)for(let n=t.x0;n<=t.x1;n++){let t=e*this.dim+n;this.alwaysSolid[t]=this.offShard[t]??0,this.buildingTier[t]=0,this.cost[t]=1}let n={x0:this.worldX(t.x0)-3,z0:this.worldZ(t.z0)-3,x1:this.worldX(t.x1)+3,z1:this.worldZ(t.z1)+3};for(let e of this.city.buildingsOverlapping(n))this.stampBuilding(e,t);for(let e of this.obstacles)e.x1<n.x0||e.x0>n.x1||e.z1<n.z0||e.z0>n.z1||this.stampObstacle(e,t);let r=this.grow(t,23),i=this.grow(r,23);for(let e of Bo)this.transform(Vo[e],this.dist[e],i.x0,i.z0,i.x1,i.z1,r);this.rebuildCount++,this.lastRebuildCells=(i.x1-i.x0+1)*(i.z1-i.z0+1)}dirtyRect(e){let t=ta({...e,state:`rubble`});return this.clampRect(this.cellX(t.x0),this.cellZ(t.z0),this.cellX(t.x1),this.cellZ(t.z1))}clampRect(e,t,n,r){return{x0:Math.max(0,e),z0:Math.max(0,t),x1:Math.min(this.dim-1,n),z1:Math.min(this.dim-1,r)}}grow(e,t){return this.clampRect(e.x0-t,e.z0-t,e.x1+t,e.z1+t)}stampBuilding(e,t){let n=ta(e),r=this.clampRect(this.cellX(n.x0),this.cellZ(n.z0),this.cellX(n.x1),this.cellZ(n.z1)),i=Math.max(r.x0,t?.x0??0),a=Math.min(r.x1,t?.x1??this.dim-1),o=Math.max(r.z0,t?.z0??0),s=Math.min(r.z1,t?.z1??this.dim-1),c=$i(e.state)?sa(e.district):0,l=e.rotation??0,u=Qi[e.state],d=e.width*u/2+1.5,f=e.depth*u/2+1.5,p=Math.cos(l),m=Math.sin(l),h=e.clip&&e.clip.length>=3?e.clip:void 0;for(let t=o;t<=s;t++){let n=this.worldZ(t);for(let r=i;r<=a;r++){let i=this.worldX(r);if(l!==0){let t=i-e.x,r=n-e.z,a=t*p+r*m,o=-t*m+r*p;if(Math.abs(a)>d||Math.abs(o)>f)continue}if(h&&!$o(i,n,h,1.5))continue;let a=t*this.dim+r;c>0?c>(this.buildingTier[a]??0)&&(this.buildingTier[a]=c):(this.offShard[a]??0)===0&&(this.cost[a]=Ko)}}}stampObstacle(e,t){let n=this.clampRect(this.cellX(e.x0),this.cellZ(e.z0),this.cellX(e.x1),this.cellZ(e.z1)),r=Math.max(n.x0,t?.x0??0),i=Math.min(n.x1,t?.x1??this.dim-1),a=Math.max(n.z0,t?.z0??0),o=Math.min(n.z1,t?.z1??this.dim-1);for(let e=a;e<=o;e++)for(let t=r;t<=i;t++)this.alwaysSolid[e*this.dim+t]=1}transform(e,t,n,r,i,a,o){let s=i-n+1,c=a-r+1;if(s<=0||c<=0)return;this.scratch.length<s*c&&(this.scratch=new Uint8Array(s*c));let l=this.scratch;for(let t=0;t<c;t++){let i=(t+r)*this.dim;for(let r=0;r<s;r++){let a=i+r+n,o=(this.alwaysSolid[a]??1)===1||(this.buildingTier[a]??0)>e;l[t*s+r]=o?0:Wo}}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=e*s+t,r=l[n]??Wo;r!==0&&(t>0&&(r=Math.min(r,(l[n-1]??Wo)+Ho)),e>0&&(r=Math.min(r,(l[n-s]??Wo)+Ho),t>0&&(r=Math.min(r,(l[n-s-1]??Wo)+Uo)),t+1<s&&(r=Math.min(r,(l[n-s+1]??Wo)+Uo))),l[n]=Math.min(r,Wo))}for(let e=c-1;e>=0;e--)for(let t=s-1;t>=0;t--){let n=e*s+t,r=l[n]??Wo;r!==0&&(t+1<s&&(r=Math.min(r,(l[n+1]??Wo)+Ho)),e+1<c&&(r=Math.min(r,(l[n+s]??Wo)+Ho),t+1<s&&(r=Math.min(r,(l[n+s+1]??Wo)+Uo)),t>0&&(r=Math.min(r,(l[n+s-1]??Wo)+Uo))),l[n]=Math.min(r,Wo))}let u=Math.max(n,o?.x0??n),d=Math.min(i,o?.x1??i),f=Math.max(r,o?.z0??r),p=Math.min(a,o?.z1??a);for(let e=f;e<=p;e++)for(let i=u;i<=d;i++)t[e*this.dim+i]=l[(e-r)*s+(i-n)]??0}nearestPassable(e,t,n,r,i,a){let o=a+i,s=this.fieldFor(n,r),c=this.cellX(e),l=this.cellZ(t);if(this.passableCell(c,l,o,s))return{x:this.worldX(c),z:this.worldZ(l)};for(let n=1;n<=Yo;n++){let r=-1,i=1/0;for(let a=-n;a<=n;a++){let u=[[c+a,l-n],[c+a,l+n],[c-n,l+a],[c+n,l+a]];for(let[n,a]of u){if(!this.passableCell(n,a,o,s))continue;let c=this.worldX(n)-e,l=this.worldZ(a)-t,u=c*c+l*l;u<i&&(i=u,r=a*this.dim+n)}}if(r>=0){let e=Math.floor(r/this.dim);return{x:this.worldX(r-e*this.dim),z:this.worldZ(e)}}}}findPath(e,t,n,r,i,a,o){let s=this.fieldFor(i,a),c=this.nearestPassable(e,t,i,a,0,o),l=this.nearestPassable(n,r,i,a,0,o);if(!c||!l)return Xo;let u=this.cellX(c.x),d=this.cellZ(c.z),f=this.cellX(l.x),p=this.cellZ(l.z),m=d*this.dim+u,h=p*this.dim+f;if(m===h)return{waypoints:[],reachedGoal:!0,expansions:0,length:0};let g=++this.generation;this.heap.clear(),this.gScore[m]=0,this.cameFrom[m]=-1,this.seenGen[m]=g,this.closed[m]=0,this.heap.push(this.heuristic(u,d,f,p),m);let _=0,v=m,y=this.heuristic(u,d,f,p),b=!1;for(;this.heap.size>0&&_<Jo;){let e=this.heap.pop();if(this.seenGen[e]!==g||this.closed[e]===1)continue;if(this.closed[e]=1,_++,e===h){b=!0;break}let t=Math.floor(e/this.dim),n=e-t*this.dim,r=this.heuristic(n,t,f,p);r<y&&(y=r,v=e);for(let[r,i]of Zo){let a=n+r,c=t+i;if(!this.passableCell(a,c,o,s)||r!==0&&i!==0&&(!this.passableCell(n+r,t,o,s)||!this.passableCell(n,t+i,o,s)))continue;let l=c*this.dim+a;if(this.seenGen[l]===g&&this.closed[l]===1)continue;let u=r!==0&&i!==0?Qo:1,d=this.cost[l]??1,m=23-(s[l]??Wo)/3,h=(this.gScore[e]??0)+u*d+m*qo;this.seenGen[l]===g&&h>=(this.gScore[l]??0)||(this.seenGen[l]=g,this.closed[l]=0,this.gScore[l]=h,this.cameFrom[l]=e,this.heap.push(h+this.heuristic(a,c,f,p),l))}}let x=b?h:v;return x===m?Xo:this.reconstruct(m,x,o,s,b,_)}heuristic(e,t,n,r){let i=Math.abs(e-n),a=Math.abs(t-r);return Math.max(i,a)+(Qo-1)*Math.min(i,a)}reconstruct(e,t,n,r,i,a){let o=[];for(let n=t;n!==-1&&(o.push(n),n!==e);n=this.cameFrom[n]??-1);o.reverse();let s=[],c=o[0]??e;for(let e=1;e<o.length;e++){let t=o[e];if(t===void 0)continue;let i=o[e+1];i!==void 0&&this.lineOfSight(c,i,n,r)||(s.push(this.worldX(t%this.dim),this.worldZ(Math.floor(t/this.dim))),c=t)}let l=0,u=this.worldX(e%this.dim),d=this.worldZ(Math.floor(e/this.dim));for(let e=0;e<s.length;e+=2){let t=s[e]??u,n=s[e+1]??d;l+=Math.hypot(t-u,n-d),u=t,d=n}return{waypoints:s,reachedGoal:i,expansions:a,length:l}}lineOfSight(e,t,n,r){return this.sample(this.worldX(e%this.dim),this.worldZ(Math.floor(e/this.dim)),this.worldX(t%this.dim),this.worldZ(Math.floor(t/this.dim)),n,r)}sample(e,t,n,r,i,a){let o=Math.max(1,Math.ceil(Math.hypot(n-e,r-t)/1.5));for(let s=0;s<=o;s++){let c=s/o,l=e+(n-e)*c,u=t+(r-t)*c;if(!this.passableCell(this.cellX(l),this.cellZ(u),i,a))return!1}return!0}routeLength(e,t,n,r,i,a,o){let s=this.findPath(e,t,n,r,i,a,o);return s.reachedGoal?s.length:1/0}flood(e,t,n,r,i,a){let o=this.fieldFor(n,i),s=this.cellIndexAt(e,t),c=r?this.cellIndexAt(r.x,r.z):-1;if(s<0||(o[s]??0)<=a*3)return{count:0,reachedTarget:!1};let l=++this.generation;this.seenGen[s]=l;let u=[s],d=0,f=0,p=!1;for(;d<u.length;){let e=u[d++];if(e===void 0)continue;f++,e===c&&(p=!0);let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of Zo){let i=n+e,s=t+r;if(!this.passableCell(i,s,a,o)||e!==0&&r!==0&&(!this.passableCell(n+e,t,a,o)||!this.passableCell(n,t+r,a,o)))continue;let c=s*this.dim+i;this.seenGen[c]!==l&&(this.seenGen[c]=l,u.push(c))}}return{count:f,reachedTarget:p}}componentAtLeast(e,t,n,r,i,a){let o=this.fieldFor(n,i),s=this.cellIndexAt(e,t);if(s<0||(o[s]??0)<=a*3)return!1;if(r<=1)return!0;let c=++this.generation;this.seenGen[s]=c;let l=[s],u=0,d=0;for(;u<l.length;){let e=l[u++];if(e===void 0)continue;if(++d>=r)return!0;let t=Math.floor(e/this.dim),n=e-t*this.dim;for(let[e,r]of Zo){let i=n+e,s=t+r;if(!this.passableCell(i,s,a,o)||e!==0&&r!==0&&(!this.passableCell(n+e,t,a,o)||!this.passableCell(n,t+r,a,o)))continue;let u=s*this.dim+i;this.seenGen[u]!==c&&(this.seenGen[u]=c,l.push(u))}}return!1}cellIndexAt(e,t){let n=this.cellX(e),r=this.cellZ(t);return this.inBounds(n,r)?r*this.dim+n:-1}get onShardCells(){if(this.onShardCount<0){let e=0;for(let t=0;t<this.offShard.length;t++)(this.offShard[t]??1)===0&&e++;this.onShardCount=e}return this.onShardCount}passableFraction(e,t,n){let r=this.fieldFor(e,t),i=0;for(let e=0;e<r.length;e++)(this.offShard[e]??1)!==1&&(r[e]??0)>n*3&&i++;let a=this.onShardCells;return a===0?0:i/a}snapshotClearance(){let e=new Uint8Array(this.cellCount*Bo.length);return Bo.forEach((t,n)=>e.set(this.dist[t],n*this.cellCount)),e}},ns=.2,rs=3,is=180,as=9,os=1800,ss=class{all=[];byId=new Map;nextId=0;get(e){return this.byId.get(e)}displace(e,t,n,r){if(t<4)return;let i=n.range(0,Math.PI*2),a=Math.cos(i),o=Math.sin(i),s=Z({x:a,z:o},-(e.rotation??0)),c=Math.min(Math.abs(s.x)>1e-6?e.width/2/Math.abs(s.x):1/0,Math.abs(s.z)>1e-6?e.depth/2/Math.abs(s.z):1/0),l=r.nearestPassable(e.x+a*(c+7),e.z+o*(c+7),`small`,!1,0,rs);if(!l)return;if(this.all.length>=48){let e=this.nearest(l.x,l.z);return e&&(e.humans+=t,e.lifeSteps=os),e}let u=r.nearestPassable(l.x+a*55,l.z+o*55,`small`,!1,0,rs)??l,d={id:this.nextId++,x:l.x,z:l.z,prevX:l.x,prevZ:l.z,humans:t,fleeX:u.x,fleeZ:u.z,panicSteps:is,trailDirX:0,trailDirZ:0,trailStrength:0,lifeSteps:os};return this.all.push(d),this.byId.set(d.id,d),d}step(e){for(let t=this.all.length-1;t>=0;t--){let n=this.all[t];if(!n)continue;if(n.prevX=n.x,n.prevZ=n.z,n.humans<=0){this.removeAt(t);continue}if(n.lifeSteps--,n.lifeSteps<=0){this.removeAt(t);continue}if(n.panicSteps<=0){us(n);continue}n.panicSteps--;let r=n.fleeX-n.x,i=n.fleeZ-n.z,a=Math.hypot(r,i),o=6/30;if(a<=o){n.x=n.fleeX,n.z=n.fleeZ,ls(n,r,i),n.panicSteps=0;continue}let s=r/a*o,c=i/a*o,l=n.x,u=n.z;!cs(n,s,c,e)&&!cs(n,s,0,e)&&!cs(n,0,c,e)?n.panicSteps=0:ls(n,n.x-l,n.z-u)}}evictBlocked(e){for(let t=this.all.length-1;t>=0;t--){let n=this.all[t];if(!n||e.passable(n.x,n.z,`small`,!1,rs))continue;let r=e.nearestPassable(n.x,n.z,`small`,!1,0,rs);if(!r){this.removeAt(t);continue}n.x=r.x,n.z=r.z,n.prevX=r.x,n.prevZ=r.z,n.fleeX=r.x,n.fleeZ=r.z,n.panicSteps=0,n.trailStrength=0}}nearest(e,t,n=1/0){let r,i=n;for(let n of this.all){if(n.humans<=0)continue;let a=(n.x-e)**2+(n.z-t)**2;a<i&&(i=a,r=n)}return r}drain(e,t){let n=this.byId.get(e);if(!n)return 0;let r=Math.min(n.humans,t);if(n.humans-=r,n.humans<=0){let e=this.all.indexOf(n);e>=0&&this.removeAt(e)}return r}removeAt(e){let t=this.all[e];t&&(this.all.splice(e,1),this.byId.delete(t.id))}totalHumans(){let e=0;for(let t of this.all)e+=t.humans;return e}save(){return{crowds:this.all.map(e=>({...e})),nextId:this.nextId}}restore(e){this.all.length=0,this.byId.clear();for(let t of e.crowds){let e={...t};this.all.push(e),this.byId.set(e.id,e)}this.nextId=e.nextId}};function cs(e,t,n,r){if(t===0&&n===0)return!1;let i=e.x+t,a=e.z+n;return r.passable(i,a,`small`,!1,rs)?(e.x=i,e.z=a,!0):!1}function ls(e,t,n){let r=Math.hypot(t,n);r<=1e-6||(e.trailDirX=t/r,e.trailDirZ=n/r,e.trailStrength=1)}function us(e){e.trailStrength=Math.max(0,e.trailStrength-1/as)}function ds(e,t,n){if(e.deployTimer>0)return!1;let r=n??!e.deployed;return r!==e.deployed&&(e.deployTarget=r,e.deployTimer=t,!0)}function fs(e){return e.deployTimer!==0&&(e.deployTimer--,e.deployTimer===0&&(e.deployed=e.deployTarget),!0)}function ps(e,t){return(e+4096)*16384+(t+4096)}var ms=class{items=[];cells=new Map;size=1;get cellSize(){return this.size}get count(){return this.items.length}rebuild(e,t){this.items=e,this.size=t>0?t:1;for(let e of this.cells.values())e.length=0;for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let r=ps(Math.floor(n.x/this.size),Math.floor(n.z/this.size)),i=this.cells.get(r);i?i.push(t):this.cells.set(r,[t])}}forEachNeighbour(e,t){let n=this.items[e];if(!n)return;let r=Math.floor(n.x/this.size),i=Math.floor(n.z/this.size);for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){let a=this.cells.get(ps(r+e,i+n));if(a)for(let e of a){let n=this.items[e];n&&t(n,e)}}}forEachWithin(e,t,n,r){let i=Math.floor((e-n)/this.size),a=Math.floor((e+n)/this.size),o=Math.floor((t-n)/this.size),s=Math.floor((t+n)/this.size);if((a-i+1)*(s-o+1)>this.items.length){for(let e=0;e<this.items.length;e++){let t=this.items[e];t&&r(t,e)}return}for(let e=i;e<=a;e++)for(let t=o;t<=s;t++){let n=this.cells.get(ps(e,t));if(n)for(let e of n){let t=this.items[e];t&&r(t,e)}}}},hs=new Map([{id:`machine-rifle`,damage:4,damageType:`kinetic`,attackKind:`ranged`,range:65,minimumRange:0,cadence:8,projectileSpeed:120,shots:1,targetClasses:[`unit`,`structure`]},{id:`machine-cannon`,damage:24,damageType:`kinetic`,attackKind:`ranged`,range:255,minimumRange:18,cadence:84,projectileSpeed:150,shots:2,targetClasses:[`unit`,`structure`]},{id:`machine-harbinger-laser`,damage:22,damageType:`kinetic`,attackKind:`ranged`,range:90,minimumRange:0,cadence:10,projectileSpeed:140,shots:1,targetClasses:[`unit`,`structure`]},{id:`ancient-bite`,damage:18,damageType:`crush`,attackKind:`melee`,range:15,minimumRange:0,cadence:20,projectileSpeed:0,shots:1,targetClasses:[`unit`,`structure`]},{id:`ancient-acid`,damage:24,damageType:`acid`,attackKind:`ranged`,range:58,minimumRange:0,cadence:40,projectileSpeed:90,shots:1,targetClasses:[`unit`,`structure`]}].map(e=>[e.id,e]));function gs(e){let t=hs.get(e);if(!t)throw Error(`unknown weapon ${e}`);return t}function _s(e){return Math.round(e*30)}var vs=[{id:`machine-processing-node`,name:`Processing Node`,faction:`machines`,nav:`large`,radius:24,deployedRadius:24,speed:9,role:`support`,tier:1,cost:180,health:650,deployedDamageTakenMultiplier:.7,buildSteps:_s(6),canDeploy:!0,anchoredFootprint:{width:45,depth:45},processesHumans:!0},{id:`mobile-factory`,name:`Mobile Factory`,faction:`machines`,nav:`medium`,radius:13.6,deployedRadius:11.9,speed:9,role:`support`,tier:1,cost:180,health:800,deployedDamageTakenMultiplier:.7,buildSteps:_s(6),canDeploy:!0,anchoredFootprint:{width:17,depth:16},producesUnits:!0},{id:`machine-infantry`,name:`Deployable Infantry`,faction:`machines`,nav:`small`,radius:6,speed:20,role:`infantry`,tier:1,cost:60,health:110,weaponIds:[`machine-rifle`],deployedDamageTakenMultiplier:.7,buildSteps:_s(3),canDeploy:!0},{id:`machine-construct`,name:`Giant Ranged Construct`,faction:`machines`,nav:`extraLarge`,radius:47.6,speed:12,role:`heavy`,tier:2,cost:240,health:500,weaponIds:[`machine-cannon`],deployedDamageTakenMultiplier:.7,buildSteps:_s(9),canDeploy:!0},{id:`ancient-infantry`,name:`Frog-like Infantry`,faction:`ancients`,nav:`small`,radius:4.2,speed:23,role:`infantry`,tier:1,cost:50,health:120,weaponIds:[`ancient-bite`],buildSteps:_s(3)},{id:`ancient-nug`,name:`Nug`,faction:`ancients`,nav:`extraLarge`,radius:61.425,speed:14,role:`heavy`,tier:2,cost:240,health:560,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:_s(9)},{id:`machine-harbinger`,name:`Machine Harbinger`,faction:`machines`,nav:`large`,radius:31.2,speed:12,role:`harbinger`,tier:1,cost:0,health:1400,weaponIds:[`machine-harbinger-laser`],deployedDamageTakenMultiplier:.7,buildSteps:_s(30),canDeploy:!0,producesUnits:!0,productionTypes:[`machine-processing-node`,`mobile-factory`]},{id:`machine-harvester`,name:`Human Harvester`,faction:`machines`,nav:`medium`,radius:18.4,speed:16,role:`harvester`,tier:1,cost:80,health:240,buildSteps:_s(4)},{id:`ancient-harbinger`,name:`Ancient Harbinger`,faction:`ancients`,nav:`large`,radius:21.84,speed:14,role:`harbinger`,tier:1,cost:0,health:1400,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:_s(30),constructionTypes:[`ancient-slime-temple`,`ancient-deity-structure`]},{id:`ancient-harvester`,name:`Soul Harvester`,faction:`ancients`,nav:`medium`,radius:14.904,speed:18,role:`harvester`,tier:1,cost:80,health:260,weaponIds:[`ancient-bite`],buildSteps:_s(4)},{id:`ancient-support`,name:`Acid Specialist`,faction:`ancients`,nav:`small`,radius:16.8,speed:19,role:`support`,tier:2,cost:180,health:150,weaponIds:[`ancient-bite`,`ancient-acid`],buildSteps:_s(7)},{id:`ancient-slime-temple`,name:`Slime Temple`,faction:`ancients`,nav:`large`,radius:17,speed:0,role:`structure`,tier:1,cost:180,health:900,buildSteps:0,constructionSteps:_s(10),stationary:!0,anchoredFootprint:{width:24,depth:23.2},producesUnits:!0},{id:`ancient-deity-structure`,name:`Deity Summon Structure`,faction:`ancients`,nav:`large`,radius:31,speed:0,role:`structure`,tier:2,cost:500,health:1800,buildSteps:0,constructionSteps:_s(10),stationary:!0,anchoredFootprint:{width:45,depth:41}},{id:`machine-shard-cutter`,name:`Shard Cutter`,faction:`machines`,nav:`large`,radius:46.8,speed:10,role:`heavy`,tier:2,cost:320,health:700,weaponIds:[`machine-cannon`],buildSteps:_s(12)}],ys=new Map(vs.map(e=>[e.id,e]));function bs(e){let t=ys.get(e);if(!t)throw Error(`unknown unit type: ${e}`);return t}function xs(e,t=!1){return t&&e.deployedRadius!==void 0?e.deployedRadius:e.radius}function Ss(e,t=!1){return Math.ceil(xs(e,t)/3)}function Cs(e,t){return e.role===`harvester`&&t===`job`}function ws(e,t){e.harvestingBuildingId=t?.kind===`building`?t.id:null,e.harvestingCrowdId=t?.kind===`crowd`?t.id:null,t!==null&&(e.restrictedNav=!0)}function Ts(e){return e.harvestingBuildingId!==null||e.harvestingCrowdId!==null}var Es=6,Ds=.35,Os=.35,ks=.6,As=40,js=.1,Ms=.6,Ns=15,Ps=90;function Fs(e,t){let n=[[0,0]];for(let r=1;n.length<e;r++){let i=r*6;for(let a=0;a<i&&n.length<e;a++){let e=a/i*Math.PI*2;n.push([Math.cos(e)*r*t,Math.sin(e)*r*t])}}return n}var Is=class{units=[];byId=new Map;pathQueue=[];nextId=0;spatialIndex=new ms;spatialDirty=!0;processorList=[];pushX=[];pushZ=[];pathsLastStep=0;pathsTotal=0;get pending(){return this.pathQueue.length}get pendingIds(){return this.pathQueue}get(e){return this.byId.get(e)}get processors(){return this.processorList}index(){return this.spatialDirty&&=(this.spatialIndex.rebuild(this.units,this.spatialCellSize()),!1),this.spatialIndex}markMoved(){this.spatialDirty=!0}spatialCellSize(){let e=0;for(let t of this.units)e=Math.max(e,xs(this.typeOf(t),t.deployed));return e>0?e*2:As}isAvoidanceAnchor(e){let t=this.typeOf(e);return t.stationary===!0||t.faction===`machines`&&(e.deployed||e.deployTimer>0&&e.deployTarget)}remove(e){let t=this.byId.get(e);if(!t)return;this.byId.delete(e);let n=this.units.indexOf(t);n>=0&&this.units.splice(n,1);let r=this.processorList.indexOf(t);return r>=0&&this.processorList.splice(r,1),this.dropQueued([e]),this.markMoved(),t}typeOf(e){return bs(e.typeId)}spawn(e,t,n,r=0){bs(e);let i={id:this.nextId++,typeId:e,x:t,z:n,prevX:t,prevZ:n,heading:r,prevHeading:r,path:[],goalX:t,goalZ:n,hasGoal:!1,repathPending:!1,restrictedNav:Cs(bs(e),`job`),unreachable:!1,blockedSteps:0,stalledSteps:0,health:bs(e).health,targetId:null,attackMove:!1,chaseSteps:0,targetBuildingId:null,lastAttackerId:null,attackCooldown:0,cargo:0,harvestingBuildingId:null,harvestingCrowdId:null,harvestOrdered:!1,deployed:bs(e).stationary===!0,deployTimer:0,deployTarget:bs(e).stationary===!0,queue:[]};return this.units.push(i),this.byId.set(i.id,i),bs(e).processesHumans&&this.processorList.push(i),this.markMoved(),i}order(e,t,n,r,i=!1,a=`job`){let o=[...new Set(e)].map(e=>this.byId.get(e)).filter(e=>e!==void 0&&e.deployTimer===0&&!this.typeOf(e).stationary);if(o.length===0)return;let s=0;for(let e of o)s=Math.max(s,xs(this.typeOf(e))*2.4);o.sort((e,r)=>{let i=(e.x-t)**2+(e.z-n)**2,a=(r.x-t)**2+(r.z-n)**2;return i===a?e.id-r.id:i-a});let c=Fs(o.length,s);o.forEach((e,o)=>{e.attackMove=i,e.targetBuildingId=null,e.deployed&&this.typeOf(e).canDeploy&&ds(e,No,!1);let[s,l]=c[o]??[0,0],u=this.typeOf(e);e.restrictedNav=Cs(u,a);let d=r.nearestPassable(t+s,n+l,u.nav,e.restrictedNav,0,Ss(u));e.goalX=d?.x??t,e.goalZ=d?.z??n,e.hasGoal=!0,e.unreachable=!1,e.blockedSteps=0,e.stalledSteps=0,this.requestPath(e)})}stop(e){for(let t of e){let e=this.byId.get(t);e&&(e.attackMove=!1,e.targetBuildingId=null,e.path.length=0,e.hasGoal=!1,e.repathPending=!1,e.blockedSteps=0,e.stalledSteps=0,e.goalX=e.x,e.goalZ=e.z)}this.dropQueued(e)}requestPath(e){e.repathPending||(e.repathPending=!0,this.pathQueue.push(e.id))}dropQueued(e){let t=new Set(e);for(let e=this.pathQueue.length-1;e>=0;e--){let n=this.pathQueue[e];n!==void 0&&t.has(n)&&this.pathQueue.splice(e,1)}}revalidate(e){for(let t of this.units){if(!t.hasGoal||t.path.length===0||t.repathPending)continue;let n=this.typeOf(t),r=n.nav,i=t.x,a=t.z,o=!1;for(let s=0;s<t.path.length;s+=2){let c=t.path[s]??i,l=t.path[s+1]??a;if(!e.walkable(i,a,c,l,r,t.restrictedNav,Ss(n))){o=!0;break}i=c,a=l}o&&this.requestPath(t)}}step(e){this.stepDeployment(),this.servicePaths(e),this.integrate(e),this.separate(e),this.detectStalls(),this.chaseTargets(e)}detectStalls(){for(let e of this.units){if(e.attackMove&&e.targetId!==null){e.stalledSteps=0;continue}if(e.path.length===0){e.stalledSteps=0;continue}if(Math.hypot(e.x-e.prevX,e.z-e.prevZ)>=bs(e.typeId).speed/30*js){e.stalledSteps=0;continue}e.stalledSteps++,e.stalledSteps%Ns===0&&this.requestPath(e),e.stalledSteps>=Ps&&(e.path.length=0,e.hasGoal=!1,e.unreachable=!0,e.stalledSteps=0)}}chaseTargets(e){for(let t of this.units){if(t.targetId===null||t.attackMove||t.hasGoal||t.deployTimer>0||t.deployed){t.chaseSteps=0;continue}let n=this.typeOf(t),r=n.weaponIds;if(!r||r.length===0){t.chaseSteps=0;continue}let i=this.byId.get(t.targetId);if(!i){t.chaseSteps=0;continue}let a=Math.max(...r.map(e=>gs(e).range));if(Math.hypot(i.x-t.x,i.z-t.z)<=a){t.chaseSteps=0;continue}if(t.chaseSteps++,t.chaseSteps%Ns!==0)continue;let o=e.nearestPassable(i.x,i.z,n.nav,t.restrictedNav,0,Ss(n)),s=o?.x??i.x,c=o?.z??i.z;Math.hypot(s-t.x,c-t.z)<xs(n)||(t.goalX=s,t.goalZ=c,t.hasGoal=!0,t.blockedSteps=0,t.stalledSteps=0,this.requestPath(t))}}stepDeployment(){for(let e of this.units)e.deployTimer!==0&&fs(e)}beginDeploy(e,t){let n=this.byId.get(e);return!n||!this.typeOf(n).canDeploy||!ds(n,No,t)?!1:(this.stop([e]),!0)}servicePaths(e){for(this.pathsLastStep=0;this.pathsLastStep<Es;){let t=this.pathQueue.shift();if(t===void 0)break;let n=this.byId.get(t);if(!n||(n.repathPending=!1,!n.hasGoal))continue;let r=this.typeOf(n),i=e.findPath(n.x,n.z,n.goalX,n.goalZ,r.nav,n.restrictedNav,Ss(r));n.path=[...i.waypoints],n.unreachable=!i.reachedGoal,n.path.length===0&&(n.hasGoal=!1),this.pathsLastStep++,this.pathsTotal++}}integrate(e){this.markMoved();for(let t of this.units){if(t.prevX=t.x,t.prevZ=t.z,t.prevHeading=t.heading,t.deployTimer>0||t.deployed||t.attackMove&&t.targetId!==null)continue;let n=t.path[0],r=t.path[1];if(n===void 0||r===void 0)continue;let i=this.typeOf(t),a=n-t.x,o=r-t.z,s=Math.hypot(a,o);if(s<=1e-6){t.path.splice(0,2);continue}t.heading=Ls(t.heading,Math.atan2(o,a),Ds);let c=i.speed/30/e.costAt(t.x,t.z),l=xs(i)*Ms;if(s<=Math.max(c,l)){t.x=n,t.z=r,t.path.splice(0,2),t.path.length===0&&(t.hasGoal=!1);continue}let u=a/s*c,d=o/s*c;if(this.tryMove(t,u,d,e,i)){t.blockedSteps=0;continue}if(this.tryMove(t,u,0,e,i)||this.tryMove(t,0,d,e,i)){t.blockedSteps=0;continue}t.blockedSteps++,t.blockedSteps>=Ps?(t.path.length=0,t.hasGoal=!1,t.unreachable=!0,t.blockedSteps=0):t.blockedSteps%Ns===0&&this.requestPath(t)}}tryMove(e,t,n,r,i){if(t===0&&n===0)return!1;let a=e.x+t,o=e.z+n;return r.passable(a,o,i.nav,e.restrictedNav,Ss(i))?(e.x=a,e.z=o,!0):!1}separate(e){let t=this.units.length;if(t<2)return;let n=!1;for(let e of this.units)if(!this.isAvoidanceAnchor(e)){n=!0;break}if(!n)return;let r=this.index();this.pushX.length=0,this.pushZ.length=0;for(let e=0;e<t;e++)this.pushX.push(0),this.pushZ.push(0);for(let e=0;e<t;e++){let t=this.units[e];if(!t)continue;let n=this.isAvoidanceAnchor(t),i=xs(this.typeOf(t),t.deployed);r.forEachNeighbour(e,(r,a)=>{if(a<=e)return;let o=this.isAvoidanceAnchor(r);if(n&&o)return;let s=xs(this.typeOf(r),r.deployed),c=i+s,l=r.x-t.x,u=r.z-t.z,d=Math.hypot(l,u);if(d>=c)return;if(d<1e-6){let e=(t.id*31+r.id*17)%360*(Math.PI/180);l=Math.cos(e),u=Math.sin(e),d=1}let f=(c-d)/d*Os;n?(this.pushX[a]=(this.pushX[a]??0)+l*f,this.pushZ[a]=(this.pushZ[a]??0)+u*f):o?(this.pushX[e]=(this.pushX[e]??0)-l*f,this.pushZ[e]=(this.pushZ[e]??0)-u*f):(this.pushX[e]=(this.pushX[e]??0)-l*f*.5,this.pushZ[e]=(this.pushZ[e]??0)-u*f*.5,this.pushX[a]=(this.pushX[a]??0)+l*f*.5,this.pushZ[a]=(this.pushZ[a]??0)+u*f*.5)})}for(let n=0;n<t;n++){let t=this.units[n];if(!t||this.isAvoidanceAnchor(t))continue;let r=this.pushX[n]??0,i=this.pushZ[n]??0;if(r===0&&i===0)continue;let a=this.typeOf(t),o=a.speed/30*ks,s=Math.hypot(r,i);s>o&&(r=r/s*o,i=i/s*o);let c=a.nav,l=t.x+r,u=t.z+i;e.passable(l,u,c,t.restrictedNav,Ss(a,t.deployed))&&(t.x=l,t.z=u,this.markMoved())}}evictBlocked(e){for(let t of this.units){let n=this.typeOf(t),r=n.anchoredFootprint!==void 0&&t.deployed&&(t.deployTimer===0||t.deployTarget);if(n.stationary||r)continue;let i=n.nav,a=Ss(n,t.deployed);if(e.passable(t.x,t.z,i,t.restrictedNav,a))continue;let o=e.nearestPassable(t.x,t.z,i,t.restrictedNav,0,a);o&&(t.x=o.x,t.z=o.z,t.prevX=o.x,t.prevZ=o.z,t.blockedSteps=0,t.stalledSteps=0,this.markMoved(),t.hasGoal&&this.requestPath(t))}}countByFaction(e){let t=0;for(let n of this.units)this.typeOf(n).faction===e&&t++;return t}countMoving(){let e=0;for(let t of this.units)t.path.length>0&&e++;return e}countBlocked(){let e=0;for(let t of this.units)t.blockedSteps>0&&e++;return e}countStalled(){let e=0;for(let t of this.units)t.stalledSteps>0&&e++;return e}countDeployed(){let e=0;for(let t of this.units)t.deployed&&e++;return e}countDeploying(){let e=0;for(let t of this.units)t.deployTimer>0&&e++;return e}countUnreached(){let e=0;for(let t of this.units)t.unreachable&&e++;return e}save(){return{units:this.units.map(e=>({...e,path:[...e.path],queue:e.queue.map(e=>({...e}))})),nextId:this.nextId,pathQueue:[...this.pathQueue],pathsTotal:this.pathsTotal}}restore(e){this.units.length=0,this.byId.clear(),this.processorList.length=0,this.pathQueue.length=0,this.markMoved();for(let t of e.units){let e={...t,path:[...t.path],queue:(t.queue??[]).map(e=>({...e}))};this.units.push(e),this.byId.set(e.id,e),this.typeOf(e).processesHumans&&this.processorList.push(e)}this.nextId=e.nextId,this.pathQueue.push(...e.pathQueue),this.pathsTotal=e.pathsTotal,this.pathsLastStep=0}};function Ls(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return Math.abs(r)<=n?t:e+Math.sign(r)*n}var Rs=2,zs=8,Bs=400,Vs=class{world;constructor(e){this.world=e}step(){for(let e of this.world.army.units){let t=this.world.army.typeOf(e);t.role===`harvester`&&this.stepHarvester(e,t)}}stepHarvester(e,t){let n=t.faction===`machines`,r=n&&e.cargo>=1e-6,i=this.resolveHarvestJob(e),a=i?void 0:this.harvestTargetPosition(e);if(!i&&!r&&ws(e,null),!i&&!r&&!e.hasGoal){let n=xs(t,e.deployed)*3,r=this.world.crowds.nearest(e.x,e.z,n**2);r&&(ws(e,{kind:`crowd`,id:r.id}),i=this.resolveHarvestJob(e))}if(e.harvestOrdered&&!Ts(e)&&!r){let t=a?.x??e.x,n=a?.z??e.z;ws(e,this.nextHarvestTargetAt(e,t,n)),i=this.resolveHarvestJob(e)}if(!i){r&&(this.orderToNode(e,t),this.depositIfAtNode(e,t.faction));return}let o=i.distanceSquared<=37**2,s=e.harvestingCrowdId!==null&&e.hasGoal&&Fo(e.goalX,e.goalZ,i.x,i.z)>37**2;if(!o&&(!e.hasGoal||s)&&(!n||e.cargo<60)){let t=i.stand();t?this.world.army.order([e.id],t.x,t.z,this.world.nav):ws(e,null)}let c=!1;if(o){let r=Math.min(i.available,Po.harvestPerStep,n?60-e.cargo:i.available);r>0&&(i.take(r),n?(e.cargo+=r,60-e.cargo<1e-6&&(e.cargo=60)):this.world.factions[t.faction].resources.credit(r),c=n&&this.resolveHarvestJob(e)===void 0,c&&ws(e,this.nextHarvestTargetAt(e,i.x,i.z)))}if(n&&((e.cargo>=60||c)&&this.orderToNode(e,t,!0),this.depositIfAtNode(e,t.faction),e.cargo===0&&!e.hasGoal)){let t=this.resolveHarvestJob(e),n=t!==void 0&&t.distanceSquared<=37**2,r=t&&t.available>0&&!n?t.stand():void 0;r&&this.world.army.order([e.id],r.x,r.z,this.world.nav)}}resolveHarvestJob(e){let t=e.harvestingBuildingId;if(t!==null){let n=this.world.city.get(t);if(!Lo(n,this.world.population))return;let r=this.world.population[t]??0;return{x:n.x,z:n.z,stand:()=>this.harvestStand(e,n),distanceSquared:Ro(e.x,e.z,n),available:r,take:e=>{this.world.population[t]=(this.world.population[t]??0)-e}}}let n=e.harvestingCrowdId;if(n!==null){let t=this.world.crowds.get(n);return!t||t.humans<=0?void 0:{x:t.x,z:t.z,stand:()=>({x:t.x,z:t.z}),distanceSquared:Fo(e.x,e.z,t.x,t.z),available:t.humans,take:e=>{this.world.crowds.drain(n,e)}}}}harvestStand(e,t){let n=this.world.army.typeOf(e),r=xs(n,e.deployed)+Rs,i=Ss(n,e.deployed),a=[],o=new Set,s=(s,c)=>{let l=zo(s,c,t,r),u=this.world.nav.nearestPassable(l.x,l.z,n.nav,Cs(n,`job`),0,i);if(!u||Ro(u.x,u.z,t)>37**2)return;let d=`${u.x},${u.z}`;o.has(d)||(o.add(d),a.push({x:u.x,z:u.z,distanceSquared:Fo(e.x,e.z,u.x,u.z)}))};s(e.x,e.z);let c=Math.max(t.width,t.depth)+r*2;for(let e=0;e<zs;e++){let n=e/zs*Math.PI*2;s(t.x+Math.cos(n)*c,t.z+Math.sin(n)*c)}a.sort((e,t)=>e.distanceSquared===t.distanceSquared?e.x===t.x?e.z-t.z:e.x-t.x:e.distanceSquared-t.distanceSquared);for(let e of a)if(this.world.nav.componentAtLeast(e.x,e.z,n.nav,Bs,Cs(n,`job`),i))return{x:e.x,z:e.z}}harvestTargetPosition(e){if(e.harvestingBuildingId!==null){let t=this.world.city.get(e.harvestingBuildingId);return t?{x:t.x,z:t.z}:void 0}if(e.harvestingCrowdId!==null){let t=this.world.crowds.get(e.harvestingCrowdId);return t?{x:t.x,z:t.z}:void 0}}nextHarvestTargetAt(e,t,n){let r=300**2,i=this.world.crowds.nearest(t,n,r);if(i)return{kind:`crowd`,id:i.id};let a=this.nearestPopulatedBuilding(e,t,n,r);return a?{kind:`building`,id:a.id}:null}orderToNode(e,t,n=!1){let r=this.nearestProcessingNode(e.x,e.z,t.faction);if(!r||e.hasGoal&&Fo(e.goalX,e.goalZ,r.x,r.z)<=59**2||e.hasGoal&&!n||Fo(e.x,e.z,r.x,r.z)<=59**2)return;let i=this.world.army.typeOf(r).anchoredFootprint,a=e.x-r.x,o=e.z-r.z,s=Math.max(Math.hypot(a,o),1),c=a/s,l=o/s,u=Math.min(Math.abs(c)>1e-6?i.width/2/Math.abs(c):1/0,Math.abs(l)>1e-6?i.depth/2/Math.abs(l):1/0),d={x:r.x+c*(u+xs(t)+2),z:r.z+l*(u+xs(t)+2)};this.world.army.order([e.id],d.x,d.z,this.world.nav)}depositIfAtNode(e,t){if(e.cargo<1e-6)return;let n=this.nearestProcessingNode(e.x,e.z,t);if(!n||Fo(e.x,e.z,n.x,n.z)>59**2)return;let r=this.world.factions[t].resources,i=r.credit(e.cargo);e.cargo-=i,e.cargo<1e-6&&(e.cargo=0),!(i<=0)&&(r.addCharge(2*i/60),this.world.emit({kind:`deposited`,faction:t}))}nearestPopulatedBuilding(e,t,n,r){let i=Math.sqrt(r),a=[];for(let e of this.world.city.buildingsOverlapping({x0:t-i,z0:n-i,x1:t+i,z1:n+i})){if(!Lo(e,this.world.population))continue;let i=Ro(t,n,e);i<r&&a.push({id:e.id,distanceSquared:i})}a.sort((e,t)=>e.distanceSquared===t.distanceSquared?e.id-t.id:e.distanceSquared-t.distanceSquared);for(let t of a){let n=this.world.city.get(t.id);if(n&&this.harvestStand(e,n))return t}}nearestProcessingNode(e,t,n){let r,i=1/0;for(let a of this.world.army.processors){let o=this.world.army.typeOf(a);if(o.faction!==n||!o.processesHumans||!a.deployed||a.deployTimer>0)continue;let s=Fo(e,t,a.x,a.z);s<i&&(i=s,r=a)}return r}},Hs={count:0,health:0,nearest:void 0};function Us(e,t,n,r,i){let a=0,o=0,s,c=1/0,l=i*i;return e.index().forEachWithin(n,r,i,i=>{if(e.typeOf(i).faction===t)return;let u=(i.x-n)**2+(i.z-r)**2;u>l||(a++,o+=i.health,(u<c||u===c&&i.id<(s?.id??1/0))&&(s=i,c=u))}),a===0?Hs:{count:a,health:o,nearest:s}}function Ws(e,t){for(let n of e.units){let r=e.typeOf(n);if(r.faction===t&&r.role===`harbinger`)return n}}function Gs(e,t){let n=[];for(let r of e.units){let i=e.typeOf(r);i.faction===t&&i.role!==`harvester`&&i.role!==`structure`&&i.role!==`harbinger`&&(i.stationary||(i.weaponIds??[]).length===0||n.push(r))}return n}function Ks(e,t){let n=[];for(let r of e.units){let i=e.typeOf(r);i.faction!==t||!i.producesUnits||r.deployTimer>0||i.anchoredFootprint&&!r.deployed||n.push(r)}return n}function qs(e,t){let n=Ws(e,t);if(n)return{x:n.x,z:n.z};let r=0,i=0,a=0;for(let n of e.units)e.typeOf(n).faction===t&&(r+=n.x,i+=n.z,a++);return a===0?void 0:{x:r/a,z:i/a}}var Js={machines:{harvesters:4,attackAt:6,retreatAt:2,deployBeforeContact:!0,deployAt:120,spreadHarvesters:!1,tier2At:8},ancients:{harvesters:3,attackAt:5,retreatAt:1,deployBeforeContact:!1,deployAt:0,spreadHarvesters:!0,tier2At:6}},Ys=8,Xs=220,Zs=60,Qs=1.5,$s=[46,74,104,140].flatMap(e=>[[e,0],[-e,0],[0,e],[0,-e],[e*.7,e*.7],[-e*.7,e*.7],[e*.7,-e*.7],[-e*.7,-e*.7]]),ec=class{context;posture=`expand`;nextPlanIn=1;constructor(e){this.context=e}get state(){return{posture:this.posture,nextPlanIn:this.nextPlanIn}}restore(e){this.posture=e.posture,this.nextPlanIn=e.nextPlanIn}step(){this.nextPlanIn--,!(this.nextPlanIn>0)&&(this.nextPlanIn=Ys,this.plan())}plan(){let e=Js[this.context.faction];this.workTheEconomy(e),this.raiseInfrastructure(),this.spendIncome(e),this.fight(e)}workTheEconomy(e){let t=new Set;for(let n of this.context.army.units){let r=this.context.army.typeOf(n);if(r.faction!==this.context.faction||r.role!==`harvester`)continue;let i=n.harvestingBuildingId!==null||n.harvestingCrowdId!==null;if(n.harvestOrdered&&(i||n.hasGoal)){n.harvestingBuildingId!==null&&t.add(n.harvestingBuildingId);continue}let a=this.context.harvestTargetFor(n);a&&(e.spreadHarvesters&&a.kind===`building`&&t.has(a.id)||(a.kind===`building`?(t.add(a.id),this.context.enqueue({kind:`harvest`,unitIds:[n.id],buildingId:a.id})):this.context.enqueue({kind:`harvest`,unitIds:[n.id],crowdId:a.id})))}}raiseInfrastructure(){let e=Ws(this.context.army,this.context.faction);if(!e)return;for(let e of this.context.army.units){let t=this.context.army.typeOf(e);t.faction===this.context.faction&&(!t.anchoredFootprint&&!t.producesUnits||t.stationary||e.deployed||e.deployTimer>0||e.hasGoal||this.context.enqueue({kind:`deploy`,unitIds:[e.id],deployed:!0}))}let t=[...this.context.army.typeOf(e).productionTypes??[]].sort((e,t)=>{let n=vs.find(t=>t.id===e)?.producesUnits===!0;return n===(vs.find(e=>e.id===t)?.producesUnits===!0)?0:n?-1:1});for(let n of t){if(this.countOwned(n)>0)continue;let t=vs.find(e=>e.id===n);if(!(!t||!this.canAfford(t)||e.queue.length>0)){this.context.enqueue({kind:`produce`,producer:{kind:`unit`,id:e.id},typeId:n});return}}for(let t of this.context.army.typeOf(e).constructionTypes??[]){let n=vs.find(e=>e.id===t);if(!(!n||n.tier!==1||this.countOwned(t)>0||!this.canAfford(n))){this.summon(e,t);return}}}summon(e,t){for(let[n,r]of $s){let i=this.context.constructionPlacement(e.id,t,e.x+n,e.z+r);if(i){this.context.enqueue({kind:`build`,builderId:e.id,structureTypeId:t,x:i.x,z:i.z});return}}}spendIncome(e){let t=this.countRole(`harvester`);for(let n of Ks(this.context.army,this.context.faction)){let r=this.context.army.typeOf(n);if((r.productionTypes??[]).length>0||n.queue.length>0)continue;let i=t<e.harvesters?this.bestType(`harvester`,r):this.bestType(`field`,r);!i||!this.canAfford(i)||this.context.enqueue({kind:`produce`,producer:{kind:`unit`,id:n.id},typeId:i.id})}this.context.techTier()===1&&Gs(this.context.army,this.context.faction).length>=e.tier2At&&this.context.resources.humans>=Po.tier2Cost&&this.context.enqueue({kind:`unlockTier2`})}fight(e){let t=Gs(this.context.army,this.context.faction),n=qs(this.context.army,this.context.faction);if(!n)return;let r=Us(this.context.army,this.context.faction,n.x,n.z,Xs),i=this.posture;this.posture=r.count>0?`defend`:this.posture===`attack`?t.length>=e.retreatAt?`attack`:`expand`:t.length>=e.attackAt?`attack`:`expand`;let a=this.posture!==i;if(this.posture===`defend`){let e=r.nearest??n;this.order(t,a,{kind:`attackMove`,unitIds:[],x:e.x,z:e.z});return}if(this.posture===`expand`){this.order(t,a,{kind:`move`,unitIds:[],x:n.x,z:n.z},Zs);return}let o=this.attackTarget();if(o){if(e.deployBeforeContact)for(let n of t){if(!this.context.army.typeOf(n).canDeploy||n.deployTimer>0)continue;let t=Math.hypot(n.x-o.x,n.z-o.z);t<=e.deployAt&&!n.deployed?this.context.enqueue({kind:`deploy`,unitIds:[n.id],deployed:!0}):t>e.deployAt*Qs&&n.deployed&&this.context.enqueue({kind:`deploy`,unitIds:[n.id],deployed:!1})}this.order(t,a,{kind:`attackMove`,unitIds:[],x:o.x,z:o.z})}}attackTarget(){let e=this.context.faction===`machines`?`ancients`:`machines`,t=Ws(this.context.army,e);if(t)return{x:t.x,z:t.z};let n;for(let t of this.context.army.units)this.context.army.typeOf(t).faction===e&&(!n||t.id<n.id)&&(n=t);return n?{x:n.x,z:n.z}:void 0}order(e,t,n,r=0){let i=e.filter(e=>(t||!e.hasGoal)&&e.deployTimer===0);if(i.length!==0){if(r===0){this.context.enqueue({...n,unitIds:i.map(e=>e.id)});return}i.forEach((e,t)=>{let i=Math.floor(t/4)+1,a=t%4,o=(a===0||a===3?r:-r)*i*.5,s=(a<2?r:-r)*i*.5;this.context.enqueue({...n,unitIds:[e.id],x:n.x+o,z:n.z+s})})}}countOwned(e){let t=0;for(let n of this.context.army.units)n.typeId===e&&t++;return t}countRole(e){let t=0;for(let n of this.context.army.units){let r=this.context.army.typeOf(n);r.faction===this.context.faction&&r.role===e&&t++}return t}canAfford(e){return this.context.resources.humans>=e.cost}bestType(e,t){let n=this.context.techTier(),r;for(let i of vs)i.faction!==this.context.faction||i.tier>n||i.role===`harbinger`||i.role===`structure`||i.stationary||(e===`harvester`?i.role!==`harvester`:i.role===`harvester`)||t.productionTypes&&!t.productionTypes.includes(i.id)||this.canAfford(i)&&(!r||i.cost>r.cost)&&(r=i);return r}};function tc(e,t){return Math.hypot(t.x-e.x,t.z-e.z)}var nc=class{context;constructor(e){this.context=e}step(){let e=[];for(let t of this.context.army.units){t.attackCooldown>0&&t.attackCooldown--;let n=this.context.army.typeOf(t),r=n.weaponIds;if(!r||r.length===0||t.deployTimer>0||t.targetBuildingId!==null&&this.attackBuilding(t,r))continue;let i=Math.max(...r.map(e=>gs(e).range)),a=t.targetId===null?void 0:this.context.army.get(t.targetId);if(a&&t.attackMove&&tc(t,a)>i&&(a=void 0),(!a||this.context.army.typeOf(a).faction===n.faction)&&(a=this.preferredTarget(t,n.faction,i),t.targetId=a?.id??null),!a)continue;let o=a.x-t.x,s=a.z-t.z,c=Math.hypot(o,s);(t.path.length===0||c<=i)&&(t.heading=Ls(t.heading,Math.atan2(s,o),Ds));let l=this.weaponForDistance(r,c);if(!l||t.attackCooldown>0)continue;let u=this.context.army.typeOf(a),d=l.damage*(a.deployed?u.deployedDamageTakenMultiplier??1:1);t.attackCooldown=l.cadence,a.lastAttackerId=t.id,this.context.emit({kind:`underAttack`,faction:this.context.army.typeOf(a).faction});for(let e=0;e<l.shots;e++)a.health-=d,this.context.emit({kind:`combatHit`,attackerId:t.id,attackerTypeId:t.typeId,targetId:a.id,targetTypeId:a.typeId,weaponId:l.id,shotIndex:e,shotCount:l.shots,sourceX:t.x,sourceZ:t.z,sourceHeading:t.heading,targetX:a.x,targetZ:a.z,targetHeading:a.heading,damage:d,remainingHealth:a.health});a.health<=0&&e.push(a)}for(let t of e){if(!this.context.army.get(t.id))continue;let e=this.context.army.typeOf(t).faction,n=this.context.army.typeOf(t).role===`harbinger`;this.context.army.remove(t.id),n?this.context.emit({kind:`harbingerDown`,faction:e,subject:e}):this.context.emit({kind:`unitDown`,faction:e})}}attackBuilding(e,t){let n=e.targetBuildingId===null?void 0:this.context.standingBuilding(e.targetBuildingId,e.x,e.z);if(!n)return e.targetBuildingId=null,!1;e.heading=Ls(e.heading,Math.atan2(n.z-e.z,n.x-e.x),Ds);let r=this.weaponForDistance(t.filter(e=>gs(e).targetClasses.includes(`structure`)),n.distance);if(!r||e.attackCooldown>0)return!0;e.attackCooldown=r.cadence;for(let t=0;t<r.shots;t++)this.context.damageBuilding(e.targetBuildingId,r.damage),this.context.emit({kind:`combatHit`,attackerId:e.id,attackerTypeId:e.typeId,targetId:-1,targetTypeId:`city-building`,weaponId:r.id,shotIndex:t,shotCount:r.shots,sourceX:e.x,sourceZ:e.z,sourceHeading:e.heading,targetX:n.x,targetZ:n.z,targetHeight:n.height,damage:r.damage,remainingHealth:0});return!0}preferredTarget(e,t,n){if(e.lastAttackerId!==null){let r=this.context.army.get(e.lastAttackerId);if(r&&this.context.army.typeOf(r).faction!==t&&tc(e,r)<=n)return r}return this.nearestEnemy(e,t,n)}nearestEnemy(e,t,n){let r,i=n*n;return this.context.army.index().forEachWithin(e.x,e.z,n,n=>{if(this.context.army.typeOf(n).faction===t)return;let a=(n.x-e.x)**2+(n.z-e.z)**2;(a<i||a===i&&n.id<(r?.id??1/0))&&(r=n,i=a)}),r}weaponForDistance(e,t){let n;for(let r of e){let e=gs(r);t>e.range||t<e.minimumRange||(!n||e.range<n.range)&&(n=e)}return n}};function rc(e,t){let n=Eo.filter(t=>e.has(t));if(n.length===0)return;let r=Eo.filter(t=>!e.has(t));return{tick:t,winner:n.length===1?Do(n[0]):r[0]??null,defeated:n}}function ic(e){return e?e.winner?Eo.indexOf(e.winner)+1:0:-1}var ac=.0031,oc=1;function sc(e){return e.buildings.map(e=>{if(e.state===`rubble`)return 0;let t=(e.clip&&e.clip.length>=3?Ri(e.clip):e.width*e.depth)*Xi(e.height,e.district);return Math.max(oc,Math.round(t*ac))})}var cc=1e3,lc=class{humans=0;humansCap=cc;charge=0;chargeCap=Ao();get segmentsReady(){return Math.floor(this.charge/Oo.pipsPerSegment)}credit(e){let t=this.humans;return this.humans=uc(this.humans+e,0,this.humansCap),this.humans-t}spend(e){return e>this.humans?!1:(this.humans-=e,!0)}addCharge(e){this.charge=uc(this.charge+e,0,this.chargeCap)}spendSegment(){return this.segmentsReady<1?!1:(this.charge-=Oo.pipsPerSegment,!0)}save(){return{humans:this.humans,charge:this.charge}}restore(e){this.humans=uc(e.humans,0,this.humansCap),this.charge=uc(e.charge,0,this.chargeCap)}};function uc(e,t,n){return e<t?t:e>n?n:e}var dc=1200,fc=new Map(vs.map((e,t)=>[e.id,t])),pc=[{name:`id`,value:e=>e.id},{name:`typeId`,value:e=>fc.get(e.typeId)??-1},{name:`x`,value:e=>e.x},{name:`z`,value:e=>e.z},{name:`heading`,value:e=>e.heading},{name:`path`,value:e=>e.path.length},{name:`goalX`,value:e=>e.goalX},{name:`goalZ`,value:e=>e.goalZ},{name:`hasGoal`,value:e=>+!!e.hasGoal},{name:`repathPending`,value:e=>+!!e.repathPending},{name:`unreachable`,value:e=>+!!e.unreachable},{name:`blockedSteps`,value:e=>e.blockedSteps},{name:`stalledSteps`,value:e=>e.stalledSteps},{name:`health`,value:e=>e.health},{name:`targetId`,value:e=>e.targetId??-1},{name:`attackMove`,value:e=>+!!e.attackMove},{name:`chaseSteps`,value:e=>e.chaseSteps},{name:`lastAttackerId`,value:e=>e.lastAttackerId??-1},{name:`targetBuildingId`,value:e=>e.targetBuildingId??-1},{name:`attackCooldown`,value:e=>e.attackCooldown},{name:`cargo`,value:e=>e.cargo},{name:`harvestingBuildingId`,value:e=>e.harvestingBuildingId??-1},{name:`harvestingCrowdId`,value:e=>e.harvestingCrowdId??-1},{name:`harvestOrdered`,value:e=>+!!e.harvestOrdered},{name:`deployed`,value:e=>+!!e.deployed},{name:`deployTimer`,value:e=>e.deployTimer},{name:`deployTarget`,value:e=>+!!e.deployTarget},{name:`queue`,value:e=>e.queue.length>0?e.queue.length*1e3+(e.queue[0]?.remainingSteps??0):0},{name:`restrictedNav`,value:e=>+!!e.restrictedNav}],mc=6,hc=7,gc=[`expand`,`attack`,`defend`],_c=9,vc=8,yc=!0,bc=1,xc=1e3,Sc=4,Cc=12,wc=32,Tc=25,Ec=400,Dc=3,Oc=500,kc=[1,2,4,8,16,32],Ac=12,jc=45/30,Mc=3,Nc=class{seed;city;nav;army=new Is;constructionSites=[];battlefield;battlefieldUnitsPerType;freeProduction;factions={machines:{resources:new lc,techTier:1,carnageRemainder:0},ancients:{resources:new lc,techTier:1,carnageRemainder:0}};population;populationCapacity;playerFaction;crowds=new ss;tick=0;get resources(){return this.factions[this.playerFaction].resources}get techTier(){return this.factions[this.playerFaction].techTier}harvesting;combat;rng;queue=[];changed=new Set;events=[];obstacleSignature=``;controllers;ai;eliminated=new Set;matchOutcome=null;combatDamagedBuildings=new Map;constructor(e,t=`machines`,n={}){if(this.seed=e,this.playerFaction=t,this.controllers={machines:n.controllers?.machines??(t===`machines`?`human`:`ai`),ancients:n.controllers?.ancients??(t===`ancients`?`human`:`ai`)},this.battlefield=n.battlefield===!0,this.battlefieldUnitsPerType=Math.max(1,Math.floor(n.battlefieldUnitsPerType??Sc)),this.freeProduction=this.battlefield,this.rng=new da(e),this.city=this.battlefield?new wo({seed:e,radius:650,maxBuildings:18}):new wo({seed:e}),this.nav=new ts(this.city),this.population=sc(this.city),this.populationCapacity=[...this.population],this.battlefield&&(this.factions.machines.techTier=2,this.factions.ancients.techTier=2),this.harvesting=new Vs({city:this.city,nav:this.nav,army:this.army,crowds:this.crowds,population:this.population,factions:this.factions,emit:e=>this.events.push(e)}),this.combat=new nc({army:this.army,emit:e=>{e.kind===`harbingerDown`&&e.faction&&this.eliminated.add(e.faction),this.events.push(e)},standingBuilding:(e,t,n)=>{let r=this.city.get(e);if(!(!r||r.state===`rubble`))return{x:r.x,z:r.z,height:r.height,distance:Math.sqrt(Ro(t,n,r))}},damageBuilding:(e,t)=>{let n=this.city.get(e);!n||n.state===`rubble`||(this.combatDamagedBuildings.has(e)||this.combatDamagedBuildings.set(e,n.state),this.city.damage(e,t))}}),this.ai={machines:new ec(this.aiContext(`machines`)),ancients:new ec(this.aiContext(`ancients`))},this.battlefield)this.deployStartingEconomy(),this.deployBattlefieldForces();else if(n.standardMatch){for(let e of Eo)this.factions[e].resources.credit(xc);this.deployHarbingers()}else this.deployStartingEconomy(),this.deployStartingForces()}aiContext(e){return{faction:e,army:this.army,resources:this.factions[e].resources,techTier:()=>this.factions[e].techTier,enqueue:t=>this.enqueue(e,t),harvestTargetFor:e=>this.aiHarvestTarget(e),constructionPlacement:(e,t,n,r)=>this.constructionPlacement(e,t,n,r)}}aiHarvestTarget(e){let t=this.harvesting.nextHarvestTargetAt(e,e.x,e.z);if(t)return t;let n=this.harvesting.nearestPopulatedBuilding(e,e.x,e.z,(dc*2)**2);return n?{kind:`building`,id:n.id}:null}deployStartingForces(){let e=this.city.startAnchors;[`machines`,`ancients`].forEach((t,n)=>{let r=e[n]??{x:0,z:0},i=vs.find(e=>e.faction===t&&e.role===`harbinger`),a=vs.find(e=>e.faction===t&&e.role===`harvester`),o=vs.find(e=>e.faction===t&&e.role===`infantry`),s=vs.find(e=>e.faction===t&&e.role===`heavy`);if(!(!i||!a||!o||!s))for(let e=0;e<bc;e++)this.spawnNear(i.id,r.x,r.z,xs(i)*(2+e*2)),this.spawnNear(s.id,r.x,r.z,xs(s)*(3+e*2)),this.spawnNear(o.id,r.x,r.z,xs(s)*5+xs(o)*e),this.spawnNear(a.id,r.x,r.z,xs(s)*4+xs(a)*e)})}deployHarbingers(){this.city.startAnchors.forEach((e,t)=>{let n=Eo[t],r=n&&vs.find(e=>e.faction===n&&e.role===`harbinger`);r&&this.deployHarbingerNear(r,e)})}deployHarbingerNear(e,t){let n=this.harbingerLandingSpot(e,t);n&&this.army.spawn(e.id,n.x,n.z,Math.atan2(-n.z,-n.x))}harbingerCandidates(e){let t=[],n=(n,r,i,a)=>{let o={x:(n+i)/2,z:(r+a)/2};Fo(o.x,o.z,e.x,e.z)<=Oc**2&&t.push(o)};for(let e of this.city.blocks)(e.kind===`park`||e.kind===`parking`)&&n(e.x0,e.z0,e.x1,e.z1);for(let e of this.city.roads)e.arterial&&n(e.x0,e.z0,e.x1,e.z1);return t.sort((t,n)=>Fo(t.x,t.z,e.x,e.z)-Fo(n.x,n.z,e.x,e.z)),[e,...t]}harbingerSpotAt(e,t,n){let r=this.nav.nearestPassable(t,n,e.nav,yc,Dc,Ss(e));if(r&&!(this.nav.flood(r.x,r.z,e.nav,void 0,yc,Ss(e)).count<Ec))return r}harbingerLandingSpot(e,t){for(let n of this.harbingerCandidates(t)){let t=this.harbingerSpotAt(e,n.x,n.z);if(t)return t}let n=xs(e)*2;for(let r of kc)for(let i=0;i<Cc;i++){let i=this.rng.range(0,Math.PI*2),a=n*r*Math.sqrt(this.rng.next()),o=this.harbingerSpotAt(e,t.x+Math.cos(i)*a,t.z+Math.sin(i)*a);if(o)return o}}deployBattlefieldForces(){for(let e of[`machines`,`ancients`]){let t=vs.filter(t=>t.faction===e&&t.role!==`structure`&&t.id!==`machine-processing-node`&&t.id!==`mobile-factory`),n=Math.ceil(t.length/2),r=e===`machines`?-1:1;for(let[i,a]of t.entries()){let t=i%2,o=Math.floor(i/2),s=r*(170+t*250),c=(o-(n-1)/2)*260,l=xs(a)*2.7,u=Math.ceil(Math.sqrt(this.battlefieldUnitsPerType)),d=Math.ceil(this.battlefieldUnitsPerType/u);for(let t=0;t<this.battlefieldUnitsPerType;t++){let n=s+(t%u-(u-1)/2)*l,r=c+(Math.floor(t/u)-(d-1)/2)*l,i=this.spawnNear(a.id,n,r,Math.max(xs(a)*.6,5));i&&e===`machines`&&(a.id===`machine-infantry`||a.id===`machine-construct`)&&(i.deployed=!0,i.deployTarget=!0)}}}this.obstacleSignature=``,this.refreshStructureObstacles()}deployStartingEconomy(){let e=this.city.startAnchors[0],t=this.city.startAnchors[1];e&&(this.addInfrastructureNear(`machine-processing-node`,e.x+34,e.z,!0),this.addInfrastructureNear(`mobile-factory`,e.x-34,e.z,this.battlefield)),t&&(this.addStationaryNear(`ancient-slime-temple`,t.x+34,t.z),this.addStationaryNear(`ancient-deity-structure`,t.x-40,t.z))}addInfrastructureNear(e,t,n,r){let i=bs(e),a=this.nav.nearestPassable(t,n,i.nav,yc,0,Ss(i,r));if(!a)return;let o=this.army.spawn(e,a.x,a.z);return o.deployed=r,o.deployTarget=r,this.obstacleSignature=``,this.refreshStructureObstacles(),o}addStationaryNear(e,t,n){let r=bs(e),i=this.nav.nearestPassable(t,n,r.nav,yc,0,Ss(r));if(!i)return;let a=this.army.spawn(e,i.x,i.z);return this.battlefield&&e===`ancient-slime-temple`&&(a.deployed=!0,a.deployTarget=!0),this.obstacleSignature=``,this.refreshStructureObstacles(),a}spawnNear(e,t,n,r,i=!1){let a=vs.find(t=>t.id===e);if(!a)return;let o=xs(a),s=Ss(a),c,l=-1/0,u=i?wc:Cc;for(let d=0;d<u;d++){let f=this.rng.range(0,Math.PI*2),p=(i?r*(1+3*d/(u-1)):r)*Math.sqrt(this.rng.next()),m=this.nav.nearestPassable(t+Math.cos(f)*p,n+Math.sin(f)*p,a.nav,yc,0,s);if(!m||this.nav.flood(m.x,m.z,a.nav,void 0,yc,s).count<Ec)continue;let h=this.spawnGap(m.x,m.z,o);if(h>=0)return this.army.spawn(e,m.x,m.z,Math.atan2(-m.z,-m.x));!i&&h>l&&(l=h,c=m)}return c&&!i?this.army.spawn(e,c.x,c.z,Math.atan2(-c.z,-c.x)):void 0}spawnGap(e,t,n){let r=1/0;for(let i of this.army.units){let a=n+xs(this.army.typeOf(i),i.deployed),o=Math.sqrt(Fo(e,t,i.x,i.z))-a;o<r&&(r=o)}return r}enqueue(e,t){this.queue.push({issuer:e,command:t})}step(){if(!this.matchOutcome){if(this.tick++,this.applyCommands(),this.army.step(this.nav),this.refreshStructureObstacles(),this.crushBuildings(),this.combat.step(),this.combatDamagedBuildings.size>0){let e=new Map(this.combatDamagedBuildings);this.combatDamagedBuildings.clear(),this.finalizeBuildingChanges(e,!1)}if(this.crowds.step(this.nav),this.harvesting.step(),this.stepConstruction(),this.stepProduction(),this.resolveMatch(),!this.matchOutcome)for(let e of Eo)this.controllers[e]===`ai`&&this.ai[e].step()}}resolveMatch(){if(this.matchOutcome||this.eliminated.size===0)return;let e=rc(this.eliminated,this.tick);e&&(this.matchOutcome=e,this.events.push({kind:`matchResolved`,...e.winner?{faction:e.winner}:{}}))}applyCommands(){if(this.queue.length===0)return;let e=this.queue.splice(0,this.queue.length),t=new Map,n=e=>{if(t.has(e))return;let n=this.city.get(e);n&&t.set(e,n.state)},r=!1;for(let{issuer:t,command:i}of e)if((i.kind===`damage`||i.kind===`setState`||i.kind===`setAllStates`||i.kind===`raze`||i.kind===`setPlayerFaction`||i.kind===`setController`||i.kind===`debugResources`)==(t===`debug`)){if(t===`debug`){this.applyDeveloperCommand(i,n);continue}switch(i.kind){case`move`:this.applyMove(t,i.unitIds,i.x,i.z);break;case`stop`:this.applyStop(t,i.unitIds);break;case`destroy`:this.applyDestroy(t,i.unitIds);break;case`attack`:`buildingId`in i?this.applyAttackBuilding(t,i.unitIds,i.buildingId,i.x,i.z):this.applyAttack(t,i.unitIds,i.targetId,i.x,i.z);break;case`attackMove`:this.applyAttackMove(t,i.unitIds,i.x,i.z);break;case`harvest`:this.applyHarvest(t,i);break;case`deploy`:for(let e of this.controllableIds(t,i.unitIds))this.army.beginDeploy(e,i.deployed);break;case`build`:r=this.applyBuild(t,i.builderId,i.structureTypeId,i.x,i.z)||r;break;case`produce`:this.applyProduce(t,i.producer,i.typeId);break;case`unlockTier2`:this.applyUnlockTier2(t)}}this.finalizeBuildingChanges(t,r)}applyMove(e,t,n,r){let i=this.controllableIds(e,t);for(let e of i)this.clearHarvestIntent(e),this.cancelConstructionForBuilder(e,!0);this.army.order(i,n,r,this.nav,!1,`command`)}applyDestroy(e,t){for(let n of this.controllableIds(e,t)){let e=this.army.get(n);if(!e)continue;let t=this.army.typeOf(e);this.army.remove(n),t.role===`harbinger`?(this.eliminated.add(t.faction),this.events.push({kind:`harbingerDown`,faction:t.faction,subject:t.faction})):this.events.push({kind:`unitDown`,faction:t.faction})}}applyAttackMove(e,t,n,r){let i=this.controllableIds(e,t);for(let e of i){this.clearHarvestIntent(e),this.cancelConstructionForBuilder(e,!0);let t=this.army.get(e);t&&(t.targetId=null)}this.army.order(i,n,r,this.nav,!0,`command`)}applyStop(e,t){let n=this.controllableIds(e,t);for(let e of n)this.clearHarvestIntent(e),this.cancelConstructionForBuilder(e,!0);this.army.stop(n)}applyAttack(e,t,n,r,i){let a=this.army.get(n);if(!a||this.army.typeOf(a).faction===e)return;let o=this.controllableIds(e,t);for(let e of o){let t=this.army.get(e);t&&(t.targetId=n),this.cancelConstructionForBuilder(e,!0)}this.army.order(o,r,i,this.nav,!1,`command`)}applyAttackBuilding(e,t,n,r,i){let a=this.city.get(n);if(!a||a.state===`rubble`)return;let o=this.controllableIds(e,t).filter(e=>{let t=this.army.get(e),n=t&&this.army.typeOf(t);return n!==void 0&&(n.weaponIds??[]).some(e=>gs(e).targetClasses.includes(`structure`))});if(o.length!==0){this.army.order(o,r,i,this.nav,!1,`command`);for(let e of o){let t=this.army.get(e);t&&(t.targetBuildingId=n,t.targetId=null,this.cancelConstructionForBuilder(e,!0))}}}clearHarvestIntent(e){let t=this.army.get(e);t&&(ws(t,null),t.harvestOrdered=!1)}applyHarvest(e,t){let n=`buildingId`in t?this.city.get(t.buildingId):void 0,r=`crowdId`in t?this.crowds.get(t.crowdId):void 0;if(n&&!Lo(n,this.population)||r&&r.humans<=0||!n&&!r)return;let i=n?{kind:`building`,id:n.id}:{kind:`crowd`,id:r.id};for(let a of t.unitIds){let t=this.army.get(a),o=t&&this.army.typeOf(t);if(!t||o?.faction!==e||o.role!==`harvester`||(ws(t,i),t.harvestOrdered=!0,!Io(o.faction,t.cargo)))continue;let s=n?this.harvesting.harvestStand(t,n):{x:r.x,z:r.z};s&&this.army.order([t.id],s.x,s.z,this.nav)}}applyBuild(e,t,n,r,i){let a=this.constructionPlacement(t,n,r,i),o=this.army.get(t),s=vs.find(e=>e.id===n);if(o===void 0||this.army.typeOf(o).faction!==e||a===void 0||s===void 0||!s||!a)return this.events.push(s?{kind:`buildRefused`,subject:s.name,faction:e}:{kind:`buildRefused`,faction:e}),!1;if(!this.factions[e].resources.spend(s.cost))return this.events.push({kind:`constructionRefusedResources`,subject:s.name,faction:e}),!1;let c={...a,builderId:t,remainingSteps:s.constructionSteps??0,summoning:!1};return this.constructionSites.push(c),this.army.order([t],c.approachX,c.approachZ,this.nav,!1,`command`),this.obstacleSignature=``,this.events.push({kind:`constructionStarted`,subject:s.name,faction:e}),!0}constructionPlacement(e,t,n,r){let i=this.army.get(e),a=i&&this.army.typeOf(i),o=vs.find(e=>e.id===t);if(!i||!a||!o||a.faction!==o.faction||!a.constructionTypes?.includes(o.id)||this.constructionSites.some(t=>t.builderId===e))return;let s=o.anchoredFootprint;if(!s||o.stationary!==!0||o.constructionSteps===void 0)return;let c=s.width/2,l=s.depth/2,u=1.5;for(let[e,t]of[[0,0],[-c+u,-l+u],[-c+u,l-u],[c-u,-l+u],[c-u,l-u]])if(!this.nav.passable(n+e,r+t,`small`,!1,1))return;let d=this.constructionApproach(i,c,l,n,r);return d?{structureTypeId:t,x:n,z:r,approachX:d.x,approachZ:d.z}:void 0}constructionApproach(e,t,n,r,i){let a=this.army.typeOf(e),o=xs(a);return[{x:r-t-o-Mc,z:i},{x:r+t+o+Mc,z:i},{x:r,z:i-n-o-Mc},{x:r,z:i+n+o+Mc}].sort((t,n)=>Fo(e.x,e.z,t.x,t.z)-Fo(e.x,e.z,n.x,n.z)).find(e=>this.nav.passable(e.x,e.z,a.nav,!1,Ss(a)))}cancelConstructionForBuilder(e,t){let n=this.constructionSites.findIndex(t=>t.builderId===e);if(n<0)return!1;let[r]=this.constructionSites.splice(n,1),i=r&&vs.find(e=>e.id===r.structureTypeId),a=this.army.get(e);t&&r&&!r.summoning&&i&&a&&this.factions[this.army.typeOf(a).faction].resources.credit(i.cost),this.obstacleSignature=``;let o=a&&this.army.typeOf(a).faction;return this.events.push(i?{kind:`constructionCancelled`,subject:i.name,...o?{faction:o}:{}}:{kind:`constructionCancelled`,...o?{faction:o}:{}}),!0}applyProduce(e,t,n){let r=this.army.get(t.id),i=vs.find(e=>e.id===n),a=r&&this.army.typeOf(r),o=a?.producesUnits===!0,s=a?.productionTypes===void 0||a.productionTypes.includes(n),c=r!==void 0&&this.army.typeOf(r).faction===e&&o&&s&&i!==void 0&&i.faction===e&&i.role!==`structure`&&i.role!==`harbinger`&&i.tier<=this.factions[e].techTier&&r.deployed&&r.deployTimer===0;c&&r.queue.length>=5?this.events.push({kind:`productionQueueFull`,subject:i.name,faction:e}):c&&(this.freeProduction||this.factions[e].resources.spend(i.cost))?(r.queue.push({typeId:i.id,remainingSteps:i.buildSteps}),this.events.push({kind:`productionQueued`,subject:i.name,faction:e})):this.events.push(i?{kind:`productionRefused`,subject:i.name,faction:e}:{kind:`productionRefused`,faction:e})}applyUnlockTier2(e){let t=this.factions[e];t.techTier===1&&(this.freeProduction||t.resources.spend(Po.tier2Cost))?(t.techTier=2,this.events.push({kind:`tier2`,faction:e})):this.events.push({kind:`tier2Refused`,faction:e})}crushBuildings(){let e=new Map;for(let t of this.army.units){let n=this.army.typeOf(t);if(n.stationary)continue;let r=t.restrictedNav?0:Vo[n.nav];if(r===0)continue;let i=xs(n,t.deployed),a=i*i,o=this.city.buildingsOverlapping({x0:t.x-i,z0:t.z-i,x1:t.x+i,z1:t.z+i});for(let n of o)n.state!==`rubble`&&(sa(n.district)>r||Ro(t.x,t.z,n)>a||(e.has(n.id)||e.set(n.id,n.state),this.city.damage(n.id,jc)))}this.finalizeBuildingChanges(e,!1)}finalizeBuildingChanges(e,t){let n=[];for(let[t,r]of e)this.city.get(t)?.state!==r&&n.push(t);if(n.length===0){t&&(this.army.evictBlocked(this.nav),this.army.revalidate(this.nav));return}for(let e of n)this.changed.add(e);if(this.collapsePopulation(n),n.length>=Ac)this.nav.rebuildAll();else for(let e of n){let t=this.city.get(e);t&&this.nav.rebuildAround(t)}this.displacePopulation(e),this.army.evictBlocked(this.nav),this.crowds.evictBlocked(this.nav),this.army.revalidate(this.nav)}displacePopulation(e){for(let[t,n]of e){if(n!==`intact`)continue;let e=this.city.get(t);if(!e||e.state!==`damaged`)continue;let r=this.population[t]??0;if(r<=0)continue;let i=r*ns;this.population[t]=0,this.crowds.displace(e,i,this.rng,this.nav)}}collapsePopulation(e){let t=0;for(let n of e){let e=this.city.get(n);if(!e||e.state!==`rubble`)continue;let r=this.population[n]??0;this.population[n]=0,this.witnessedByAncients(e.x,e.z)&&(t+=r+10)}if(t<=0)return;let n=this.factions.ancients;for(n.carnageRemainder+=t;n.carnageRemainder>=45;)n.resources.addCharge(1),n.carnageRemainder-=45}witnessedByAncients(e,t){let n=120**2,r=!1;return this.army.index().forEachWithin(e,t,120,i=>{r||this.army.typeOf(i).faction===`ancients`&&Fo(i.x,i.z,e,t)<=n&&(r=!0)}),r}applyDeveloperCommand(e,t){switch(e.kind){case`setPlayerFaction`:e.faction!==this.playerFaction&&(this.playerFaction=e.faction,this.events.push({kind:`playerFactionChanged`,playerFaction:e.faction}));break;case`setController`:this.controllers[e.faction]=e.controller;break;case`damage`:t(e.buildingId),this.city.advanceState(e.buildingId);break;case`setState`:t(e.buildingId),this.city.setState(e.buildingId,e.state);break;case`setAllStates`:for(let e of this.city.buildings)t(e.id);this.city.setAllStates(e.state);break;case`debugResources`:this.resources.credit(e.humans),this.resources.addCharge(e.charge);break;case`raze`:{let n=e.radius*e.radius;for(let r of this.city.buildings)r.state!==`rubble`&&((r.x-e.x)**2+(r.z-e.z)**2>n||(t(r.id),this.city.setState(r.id,`rubble`)));break}}}controllableIds(e,t){return e===`debug`?[]:t.filter(t=>{let n=this.army.get(t);return n!==void 0&&this.army.typeOf(n).faction===e})}canWorkBuilding(e,t){let n=this.army.get(e),r=this.city.get(t);return!n||!r?!1:this.harvesting.harvestStand(n,r)!==void 0}stepProduction(){this.stepUnitProduction()}stepUnitProduction(){for(let e of this.army.units){let t=this.army.typeOf(e),n=e.queue[0];if(!t.producesUnits||!n||!e.deployed||e.deployTimer>0||n.remainingSteps>0&&--n.remainingSteps>0)continue;let r=vs.find(e=>e.id===n.typeId);if(!r||!this.spawnNear(r.id,e.x+Tc,e.z,xs(r)*4,!0)){this.events.push({kind:`productionBlocked`,subject:r?.name??n.typeId,faction:t.faction});continue}e.queue.shift(),this.events.push({kind:`produced`,subject:r.name,faction:t.faction})}}stepConstruction(){for(let e=this.constructionSites.length-1;e>=0;e--){let t=this.constructionSites[e];if(!t)continue;let n=this.army.get(t.builderId),r=vs.find(e=>e.id===t.structureTypeId);if(!n||!r){this.cancelConstructionForBuilder(t.builderId,!1);continue}if(!t.summoning){let e=r.anchoredFootprint,i=xs(this.army.typeOf(n),n.deployed)+Mc+3/2,a=Math.max(Math.abs(n.x-t.x)-(e?.width??0)/2,0),o=Math.max(Math.abs(n.z-t.z)-(e?.depth??0)/2,0);if(Math.hypot(a,o)>i)continue;t.summoning=!0,this.army.stop([n.id])}if(t.remainingSteps>0&&--t.remainingSteps>0)continue;this.army.spawn(r.id,t.x,t.z),this.constructionSites.splice(e,1),this.obstacleSignature=``;let i=this.army.typeOf(n).faction;this.events.push({kind:`constructionComplete`,subject:r.name,faction:i})}}refreshStructureObstacles(){let e=this.army.units.flatMap(e=>{let t=this.army.typeOf(e).anchoredFootprint,n=e.deployed&&(e.deployTimer===0||e.deployTarget);return!t||!n?[]:[{x0:e.x-t.width/2,z0:e.z-t.depth/2,x1:e.x+t.width/2,z1:e.z+t.depth/2}]}),t=this.constructionSites.map(e=>{let t=vs.find(t=>t.id===e.structureTypeId)?.anchoredFootprint;return t?{x0:e.x-t.width/2,z0:e.z-t.depth/2,x1:e.x+t.width/2,z1:e.z+t.depth/2}:void 0}).filter(e=>e!==void 0),n=[...e,...t],r=n.map(e=>`${e.x0},${e.z0},${e.x1},${e.z1}`).join(`|`);r!==this.obstacleSignature&&(this.obstacleSignature=r,this.nav.setObstacles(n))}get outcome(){return this.matchOutcome}remainingPopulation(){return this.population.reduce((e,t)=>e+t,0)}drainChangedBuildings(){if(this.changed.size===0)return[];let e=[...this.changed].sort((e,t)=>e-t);return this.changed.clear(),e}drainEvents(){return this.events.length===0?[]:this.events.splice(0,this.events.length)}cargoInTransit(){let e=0;for(let t of this.army.units)this.army.typeOf(t).faction===this.playerFaction&&(e+=t.cargo);return e}harvestersIdle(){let e=0;for(let t of this.army.units){let n=this.army.typeOf(t);n.faction===this.playerFaction&&n.role===`harvester`&&(!t.harvestOrdered||Ts(t)||n.faction===`machines`&&t.cargo>0||e++)}return e}queuedProduction(){let e=0;for(let t of this.army.units)this.army.typeOf(t).faction===this.playerFaction&&(e+=t.queue.length);return e}hash(){let e=this.army.units,t=this.crowds.all,n=this.army.pendingIds,r=new Float64Array(mc+Eo.length*hc+n.length+e.length*pc.length+this.population.length+this.city.buildings.length+t.length*_c+this.constructionSites.length*vc),i=0;r[i++]=this.tick,r[i++]=this.rng.save().s,r[i++]=this.army.pathsTotal,r[i++]=this.matchOutcome?.tick??-1,r[i++]=ic(this.matchOutcome);for(let e of Eo){let t=this.factions[e];r[i++]=t.resources.humans,r[i++]=t.resources.charge,r[i++]=t.techTier,r[i++]=t.carnageRemainder,r[i++]=+(this.controllers[e]===`ai`);let n=this.ai[e].state;r[i++]=gc.indexOf(n.posture),r[i++]=n.nextPlanIn}r[i++]=n.length;for(let e of n)r[i++]=e;for(let t of e)for(let e of pc)r[i++]=e.value(t);for(let e of this.population)r[i++]=e;for(let e of this.city.buildings)r[i++]=e.health;for(let e of t)r[i++]=e.id,r[i++]=e.x,r[i++]=e.z,r[i++]=e.humans,r[i++]=e.panicSteps,r[i++]=e.lifeSteps,r[i++]=e.trailDirX,r[i++]=e.trailDirZ,r[i++]=e.trailStrength;for(let e of this.constructionSites)r[i++]=e.builderId,r[i++]=fc.get(e.structureTypeId)??-1,r[i++]=e.x,r[i++]=e.z,r[i++]=e.approachX,r[i++]=e.approachZ,r[i++]=e.remainingSteps,r[i++]=+!!e.summoning;if(i!==r.length)throw Error(`world hash wrote ${i} values into an array sized ${r.length}; the sizing terms are stale`);let a=new Uint8Array(r.buffer),o=2166136261;for(let e of a)o^=e,o=Math.imul(o,16777619);for(let e of this.city.hash())o^=e.charCodeAt(0),o=Math.imul(o,16777619);return(o>>>0).toString(16).padStart(8,`0`)}save(){return{tick:this.tick,rng:this.rng.save(),units:this.army.save(),buildingStates:this.city.buildings.map(e=>e.state),buildingHealth:this.city.buildings.map(e=>e.health),playerFaction:this.playerFaction,economy:{population:[...this.population],factions:{machines:this.saveFaction(`machines`),ancients:this.saveFaction(`ancients`)}},crowds:this.crowds.save(),constructionSites:this.constructionSites.map(e=>({...e})),match:this.matchOutcome?{...this.matchOutcome,defeated:[...this.matchOutcome.defeated]}:null,controllers:{...this.controllers},ai:{machines:this.ai.machines.state,ancients:this.ai.ancients.state}}}saveFaction(e){let t=this.factions[e];return{resources:t.resources.save(),techTier:t.techTier,carnageRemainder:t.carnageRemainder}}restore(e){if(e.playerFaction!==this.playerFaction)throw Error(`save is for ${e.playerFaction}, this world is ${this.playerFaction}; construct the World with the save's faction before restoring`);this.tick=e.tick,this.rng=da.restore(e.rng),this.population.splice(0,this.population.length,...e.economy.population);for(let t of Eo){let n=e.economy.factions[t],r=this.factions[t];r.resources.restore(n.resources),r.techTier=n.techTier,r.carnageRemainder=n.carnageRemainder}this.crowds.restore(e.crowds),this.constructionSites.splice(0,this.constructionSites.length,...e.constructionSites.map(e=>({...e})));for(let t of Eo)this.controllers[t]=e.controllers[t],this.ai[t].restore(e.ai[t]);this.matchOutcome=e.match?{...e.match,defeated:[...e.match.defeated]}:null,this.eliminated.clear();for(let t of e.match?.defeated??[])this.eliminated.add(t);this.queue.length=0,this.events.length=0,this.obstacleSignature=``,this.city.buildings.forEach((t,n)=>{let r=e.buildingStates[n],i=e.buildingHealth[n];r&&(t.state!==r||t.health!==i)&&(t.state=r,t.health=i??0,this.changed.add(t.id))}),this.army.restore(e.units),this.refreshStructureObstacles()}destructionCounts(){return Zi.map(e=>this.city.countByState(e))}},Pc=class extends Error{};function Fc(e){if(e.outcome)throw new Pc(`this match has ended; a resolved match can be reopened but not saved`);return{version:27,seed:e.seed,playerFaction:e.playerFaction,tick:e.tick,hash:e.hash(),world:e.save()}}function Ic(e){Rc(e);let t=new Nc(e.seed,e.playerFaction),n=t.city.buildings.length,r=e.world.buildingStates.length;if(n!==r||e.world.buildingHealth.length!==n)throw new Pc(`save has ${r} building states / ${e.world.buildingHealth.length} health values but seed ${e.seed} now generates ${n}; the city generator changed since this save was written`);t.restore(e.world);let i=t.hash();if(i!==e.hash)throw new Pc(`restored world hash ${i} does not match the saved ${e.hash}; the save did not round-trip and the world is not the one that was saved`);return t}function Lc(e){try{return Rc(e),!0}catch{return!1}}function Rc(e){if(typeof e!=`object`||!e)throw new Pc(`save is not an object`);let t=e;if(t.version!==27)throw new Pc(`save version ${String(t.version)} cannot be read by version 27`);if(typeof t.seed!=`number`||!Number.isFinite(t.seed))throw new Pc(`save has no usable seed`);if(t.playerFaction!==`machines`&&t.playerFaction!==`ancients`)throw new Pc(`save has an unknown faction ${String(t.playerFaction)}`);if(typeof t.tick!=`number`||!Number.isInteger(t.tick)||t.tick<0)throw new Pc(`save has no usable step count`);if(typeof t.hash!=`string`||t.hash.length===0)throw new Pc(`save has no hash to verify against`);let n=t.world;if(typeof n!=`object`||!n)throw new Pc(`save has no world state`);if(!Array.isArray(n.buildingStates))throw new Pc(`save has no destruction state`);if(!Array.isArray(n.buildingHealth))throw new Pc(`save has no building health`);if(!Array.isArray(n.constructionSites))throw new Pc(`save has no construction sites`);if(!n.buildingHealth.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0))throw new Pc(`save has unusable building health`);if(typeof n.controllers!=`object`||n.controllers===null)throw new Pc(`save does not say who commands each faction`);if(typeof n.economy!=`object`||n.economy===null)throw new Pc(`save has no economy state`);let r=n.economy.factions;if(typeof r!=`object`||!r)throw new Pc(`save has no per-faction economy state`);for(let e of[`machines`,`ancients`]){let t=r[e];if(typeof t!=`object`||!t||typeof t.resources!=`object`||t.resources===null)throw new Pc(`save has no resource state for ${e}`)}}var zc=`human-resources`,Bc=1,Vc=`saves`,Hc=`quick`,Uc=class e{db=null;static get available(){return typeof indexedDB<`u`}async open(){if(this.db)return this.db;if(!e.available)throw Error(`IndexedDB is unavailable in this context`);return this.db=await new Promise((e,t)=>{let n=indexedDB.open(zc,Bc);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(Vc)||e.createObjectStore(Vc,{keyPath:`slot`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`failed to open the save database`)),n.onblocked=()=>t(Error(`save database upgrade blocked by another tab`))}),this.db}async put(e,t,n=Hc){let r=await this.open(),i={slot:n,envelope:e,savedAtMs:t};await Wc(r,`readwrite`,e=>e.put(i))}async get(e=Hc){let t=await Wc(await this.open(),`readonly`,t=>t.get(e));if(t){if(!Lc(t.envelope)){this.lastRejection=`save in slot "${e}" is not readable by this build`;return}return this.lastRejection=null,t}}lastRejection=null;async list(){return(await Wc(await this.open(),`readonly`,e=>e.getAll())).map(e=>({...e,readable:Lc(e.envelope)})).sort((e,t)=>t.savedAtMs-e.savedAtMs)}async delete(e=Hc){await Wc(await this.open(),`readwrite`,t=>t.delete(e))}};function Wc(e,t,n){return new Promise((r,i)=>{let a=e.transaction(Vc,t),o=n(a.objectStore(Vc));o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error??Error(`save operation failed`)),a.onabort=()=>i(a.error??Error(`save transaction aborted`))})}var Gc=11777712,Kc=7830134,qc=.55,Jc=.18;function Yc(e){let t=e|0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function Xc(e){return Yc(e)/4294967295}function Zc(e,t,n){let r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=t.x*a.x+t.y*a.y-n,c=t.x*o.x+t.y*o.y-n,l=s<=1e-7,u=c<=1e-7;if(l&&r.push(a),l!==u){let e=s/(s-c);r.push({x:a.x+(o.x-a.x)*e,y:a.y+(o.y-a.y)*e})}}return r}function Qc(e,t=3,n=1){let r=Math.max(.18,n),i=Math.max(1,Math.round(Math.sqrt(t*r))),a=Math.ceil(t/i),o=Array.from({length:t},(t,n)=>{let o=n%i,s=Math.floor(n/i);return{x:((o+.5+(Xc(e+n*31)-.5)*.68)/i-.5)*r,y:(s+.5+(Xc(e+n*37)-.5)*.68)/a-.5}});return o.map((e,t)=>{let n=[{x:-r/2,y:-.5},{x:r/2,y:-.5},{x:r/2,y:.5},{x:-r/2,y:.5}];for(let r=0;r<o.length&&n.length>=3;r++){if(r===t)continue;let i=o[r],a={x:i.x-e.x,y:i.y-e.y};n=Zc(n,a,(i.x**2+i.y**2-e.x**2-e.y**2)/2)}return n.map(e=>({x:e.x/r,y:e.y}))}).filter(e=>e.length>=3)}function $c(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let a=e[i],o=e[(i+1)%e.length],s=a.x*o.y-o.x*a.y;t+=s,n+=(a.x+o.x)*s,r+=(a.y+o.y)*s}return Math.abs(t)<1e-8?e.reduce((t,n)=>({x:t.x+n.x/e.length,y:t.y+n.y/e.length}),{x:0,y:0}):{x:n/(3*t),y:r/(3*t)}}function el(e,t=$c(e)){let n=new ne,r=e[0];if(!r)return new q;n.moveTo(r.x-t.x,r.y-t.y);for(let r=1;r<e.length;r++){let i=e[r];n.lineTo(i.x-t.x,i.y-t.y)}n.closePath();let i=new E(n,{depth:1,steps:1,bevelEnabled:!1,curveSegments:1});return i.translate(0,0,-.5),i.computeVertexNormals(),i}function tl(e){let t=[{x:(Xc(e+3)-.5)*.12,y:-.5},{x:(Xc(e+7)-.5)*.2,y:-.17},{x:(Xc(e+11)-.5)*.2,y:.16},{x:(Xc(e+17)-.5)*.12,y:.5}];return[el([{x:-.5,y:-.5},...t,{x:-.5,y:.5}],{x:0,y:0}),el([t[0],{x:.5,y:-.5},{x:.5,y:.5},...t.slice(1).reverse()],{x:0,y:0})]}function nl(e){let t=[-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,...Array.from({length:4},(t,n)=>({x:(n===0||n===3?-.5:.5)+(Xc(e+n*11)-.5)*.16,y:.42+Xc(e+n*17)*.16,z:(n<2?-.5:.5)+(Xc(e+n*23)-.5)*.16})).flatMap(e=>[e.x,e.y,e.z])],n=new q;return n.setAttribute(`position`,new k(t,3)),n.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,5,1,0,4,5,1,6,2,1,5,6,2,7,3,2,6,7,3,4,0,3,7,4]),n.computeVertexNormals(),n}function rl(e,t,n=!0){let r=t.length>=3?t:[{x:-.5,y:-.5},{x:.5,y:-.5},{x:.5,y:.5},{x:-.5,y:.5}],i=$c(r),a=r.flatMap((t,a)=>{let o=r[(a+1)%r.length],s=(t,r)=>{let a=n?1.06+Xc(e+r)*.16:1;return{x:i.x+(t.x-i.x)*a,y:i.y+(t.y-i.y)*a}};return[0,1,2].map(e=>s({x:t.x+(o.x-t.x)*e/3,y:t.y+(o.y-t.y)*e/3},a*29+e*7))}),o=[],s=[];for(let e of a)o.push(e.x,0,e.y);let c=o.length/3;for(let t=0;t<a.length;t++){let n=a[t],r=.34+Xc(e+t*29)*.13;o.push(i.x+(n.x-i.x)*r,.62+Xc(e+t*31)*.36,i.y+(n.y-i.y)*r)}for(let e=0;e<a.length;e++){let t=(e+1)%a.length;s.push(e,c+t,t,e,c+e,c+t)}for(let e=1;e<a.length-1;e++)s.push(c,c+e+1,c+e);let l=new q;return l.setAttribute(`position`,new k(o,3)),l.setIndex(s),l.computeVertexNormals(),l}function il(e){return!e.clip||e.clip.length<3?[{x:-.5,y:-.5},{x:.5,y:-.5},{x:.5,y:.5},{x:-.5,y:.5}]:e.clip.map(t=>{let n=Z({x:t.x-e.x,z:t.z-e.z},-(e.rotation??0));return{x:n.x/e.width,y:n.z/e.depth}})}function al(e){if(e.health<=0)return 2;let t=1-e.health/ea(e);return Math.max(0,Math.min(2,Math.floor((t+1e-6)*2)))}function ol(e){let t=al(e);return t===0?e.height:t===2?Math.max(3,e.height*Jc):e.height*qc}function sl(e){return al(e)===2?0:ol(e)}var cl=new Set,ll=class{city;group=new J;exterior;markers;concrete;rubble;heatmapMarkers;rubbleHeatmapMarkers;entries=new Map;matrix=new Pe;marker=new Pe;fromPosition=new W;toPosition=new W;fromRotation=new T;toRotation=new T;fromScale=new W;toScale=new W;markerPosition=new W;markerRotation=new T;markerScale=new W;heatmapMatrix=new Pe;constructor(e,t){this.city=e;let n=this.capacityFor(e);this.markers=this.batch(n.markers,n.markers*64,n.markers*200,16777215,`destroyed-facade-edge-markers`,{side:1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.markers.castShadow=!0,this.markers.receiveShadow=!1,this.exterior=this.batch(n.exterior,n.exterior*64,n.exterior*200,16777215,`destroyed-facades`),this.exterior.castShadow=!1,this.concrete=this.batch(n.concrete,n.concrete*64,n.concrete*200,16777215,`destroyed-concrete`),this.concrete.castShadow=!1,this.rubble=this.batch(n.rubble,n.rubble*64,n.rubble*200,16777215,`destroyed-rubble`),this.rubble.castShadow=!1,this.group.add(this.markers,this.exterior,this.concrete,this.rubble);for(let n of e.buildings)this.build(n,t(n));this.syncDamage(0,!0),this.heatmapMarkers=this.markers.clone(),this.heatmapMarkers.name=`destroyed-heatmap-parts`,this.heatmapMarkers.material=new Se({transparent:!0,opacity:.78,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.heatmapMarkers.castShadow=!1,this.heatmapMarkers.receiveShadow=!1,this.heatmapMarkers.frustumCulled=!1,this.heatmapMarkers.renderOrder=1,this.rubbleHeatmapMarkers=this.markers.clone(),this.rubbleHeatmapMarkers.name=`destroyed-rubble-heatmap`,this.rubbleHeatmapMarkers.material=new Se({transparent:!0,opacity:.46,depthWrite:!1,depthTest:!1,side:2}),this.rubbleHeatmapMarkers.castShadow=!1,this.rubbleHeatmapMarkers.receiveShadow=!1,this.rubbleHeatmapMarkers.frustumCulled=!1,this.rubbleHeatmapMarkers.renderOrder=2}batch(e,t,n,r,i,a={}){let o=new ue(e,t,n,ut(r,a));return o.name=i,o.frustumCulled=!1,o.sortObjects=!1,o.castShadow=!0,o.receiveShadow=!0,o.userData.preserveShadowFlags=!0,o}capacityFor(e){let t=0,n=0;for(let r of e.buildings){let e=(r.clip&&r.clip.length>=3?r.clip.length:4)*3;n+=e,t+=e+7}let r=Math.max(e.buildings.length,1);return{markers:Math.max(t,1),exterior:Math.max(n,1),concrete:r*6,rubble:r}}add(e,t,n,r,i=!1){t.index||t.setIndex(Array.from({length:t.getAttribute(`position`).count},(e,t)=>t)),t.getAttribute(`uv`)||t.setAttribute(`uv`,new k(t.getAttribute(`position`).count*2,2));let a=e.addGeometry(t);t.dispose();let o=e.addInstance(a);return e.setMatrixAt(o,n),e.setColorAt(o,new z(r)),e.setVisibleAt(o,i),o}transform(e,t,n){return this.matrix.compose(e,new T().setFromEuler(new Oe(t.x,t.y,t.z)),n).clone()}buildingMatrix(e,t,n=new W,r=new W(1,1,1)){let i=Z({x:t.x,z:t.z},e.rotation??0);return this.transform(new W(e.x+i.x,Q+t.y,e.z+i.z),new W(n.x,-(e.rotation??0)+n.y,n.z),r)}build(e,t){let n=[],r=[],i=[],a=Math.max(.65,Math.min(e.width,e.depth)*.045),o=e.clip&&e.clip.length>=3?e.clip.map((t,n)=>[t,e.clip[(n+1)%e.clip.length]]):this.rectangleEdges(e),s=0;for(let[r,i]of o){let o=i.x-r.x,c=i.z-r.z,l=Math.hypot(o,c),u=Qc(e.id*733+s*389,3,l/e.height);for(let d of u){let u=$c(d),f=new W((r.x+i.x)/2,0,(r.z+i.z)/2),p=o/l,m=c/l,h=new W(f.x+p*u.x*l,(u.y+.5)*e.height,f.z+m*u.x*l),g=this.transform(h.setY(Q+h.y),new W(0,-Math.atan2(c,o),0),new W(l,e.height,a)),_=e.height*.16,v=Math.min(...d.map(e=>e.y-u.y))*_,y=this.transform(new W(h.x,Q-v,h.z),new W(0,-Math.atan2(c,o),0),new W(l*.7,_,a*1.35)),b=el(d,u),x=b.clone(),S=!e.clip||this.geometryIsOnShard(b,y)&&this.geometryIsOnShard(b,this.markerMatrix(y)),C=this.add(this.exterior,b,g,t),w=this.add(this.markers,x,this.markerMatrix(g),this.markerColor(t));n.push({id:C,markerId:w,batch:`exterior`,home:g,rubble:y,rubbleSafe:S}),s++}}let c=e.district===`residential`?3:e.district===`commercial`?5:7,l=Math.max(.5,Math.min(e.width,e.depth)*.035),u=Math.floor(c/3),d=il(e);for(let t=0;t<1;t++){let n=e.clip&&e.clip.length>=3?el(d,{x:0,y:0}):tl(e.id*173+u*41)[t],i=n.clone(),a=this.buildingMatrix(e,new W(0,(u+1)/(c+1)*e.height,0),new W(Math.PI/2,0,0),new W(e.width*.76,e.depth*.73,l)),o=this.add(this.concrete,n,a,Gc),s=this.add(this.markers,i,this.markerMatrix(a),this.markerColor(Gc));r.push({id:o,markerId:s,batch:`concrete`,home:a})}let f=this.buildingMatrix(e,new W(0,e.height*.45,0),new W,new W(e.width*.25,e.height*.9,e.depth*.23)),p=this.buildingMatrix(e,new W(0,Math.max(e.height*.035,.8),0),new W,new W(e.width*.25,e.height*.06,e.depth*.23)),m=nl(e.id+1280),h=m.clone(),g=!e.clip||this.geometryIsOnShard(m,p),_=this.add(this.concrete,m,f,Kc),v=this.add(this.markers,h,this.markerMatrix(f),this.markerColor(Kc));i.push({id:_,markerId:v,home:f,final:p,rubbleSafe:g});for(let[t,n]of[[-.25,-.23],[.25,-.23],[.25,.23],[-.25,.23]]){let r={x:e.width*t,z:e.depth*n};if(e.clip&&!Vi(e.x+Z(r,e.rotation??0).x,e.z+Z(r,e.rotation??0).z,e.clip))continue;let a=this.buildingMatrix(e,new W(r.x,e.height*.42,r.z),new W,new W(Math.max(.9,Math.min(e.width,e.depth)*.065),e.height*.84,Math.max(.9,Math.min(e.width,e.depth)*.065))),o=this.buildingMatrix(e,new W(r.x,Math.max(.8,e.height*(.035+Xc(e.id+t*100)*.025)),r.z),new W,new W(Math.max(.9,Math.min(e.width,e.depth)*.065),e.height*.07,Math.max(.9,Math.min(e.width,e.depth)*.065))),s=nl(e.id+i.length*29),c=s.clone(),l=!e.clip||this.geometryIsOnShard(s,o),u=this.add(this.concrete,s,a,Kc),d=this.add(this.markers,c,this.markerMatrix(a),this.markerColor(Kc));i.push({id:u,markerId:d,home:a,final:o,rubbleSafe:l})}let y=this.buildingMatrix(e,new W(0,.05,0),new W,new W(e.width,Math.max(1,Math.min(e.width,e.depth)*.13),e.depth)),b=!!(e.clip&&e.clip.length>=3),x=rl(e.id,il(e),!b),S=x.clone(),C=y.clone().scale(new W(1,.58,1)),w={id:this.add(this.rubble,x,y,t),markerId:this.add(this.markers,S,b?y:this.markerMatrix(y),this.markerColor(t)),visible:!e.clip||e.clip.length>=3,home:y,damaged:C,edgeClipped:b};this.entries.set(e.id,{phase:-1,shell:n,floors:r,fragments:[...n,...r],structure:i,mound:w})}rectangleEdges(e){let t=e.width/2,n=e.depth/2,r=[[-t,-n],[t,-n],[t,n],[-t,n]].map(([t,n])=>{let r=Z({x:t,z:n},e.rotation??0);return{x:e.x+r.x,z:e.z+r.z}});return r.map((e,t)=>[e,r[(t+1)%r.length]])}geometryIsOnShard(e,t){let n=e.getAttribute(`position`),r=new W;for(let e=0;e<n.count;e++)if(r.fromBufferAttribute(n,e).applyMatrix4(t),!this.city.containsPoint(r.x,r.z))return!1;return!0}syncDamage(e,t=!1){let n=!1,r=!1,i;for(let e of this.city.buildings){let t=this.entries.get(e.id);if(!t)continue;let a=al(e);if(a!==t.phase){t.phase=a,n=!0,(i??=new Set).add(e.id);for(let[n,i]of t.fragments.entries())this.setFragment(i,this.fragmentVisible(e,t,i,n,a),a===2),r=!0;for(let[n,i]of t.structure.entries()){let t=this.structureVisible(e,i,n,a),o=this.structuralMatrix(i,a);this.concrete.setVisibleAt(i.id,t),this.concrete.setMatrixAt(i.id,o),this.markers.setVisibleAt(i.markerId,t),this.markers.setMatrixAt(i.markerId,this.markerMatrix(o)),r=!0}let o=a===2?t.mound.home:t.mound.damaged;this.rubble.setVisibleAt(t.mound.id,a>0&&t.mound.visible),this.rubble.setMatrixAt(t.mound.id,o),this.markers.setVisibleAt(t.mound.markerId,a>0&&t.mound.visible),this.markers.setMatrixAt(t.mound.markerId,t.mound.edgeClipped?o:this.markerMatrix(o))}}return{phaseChanged:n,transformsChanged:r,changedIds:i??cl}}fragmentVisible(e,t,n,r,i){let a=r>=t.shell.length,o=t.shell.length+e.id%t.floors.length,s=e.district===`downtown`?3:4,c=a&&i>=s&&r!==o,l=e.id%t.shell.length,u=Math.floor(Xc(e.id*811+47)*t.shell.length),d=!a&&n.rubbleSafe!==!1&&(r===l||r===u),f=i===2&&!d,p=.35*Math.min(1,i/1),m=i<=1?0:.35+.3*(i-1)/1,h=!a&&i<2&&Xc(e.id*997+r*37)<Math.max(p,m);return i>0&&!c&&!h&&!f}setFragment(e,t,n=!1){let r=e.batch===`concrete`?this.concrete:this.exterior;r.setVisibleAt(e.id,t),e.markerId!==void 0&&this.markers.setVisibleAt(e.markerId,t);let i=n&&e.rubble?e.rubble:e.home;r.setMatrixAt(e.id,i),e.markerId!==void 0&&this.markers.setMatrixAt(e.markerId,this.markerMatrix(i))}markerMatrix(e){return e.decompose(this.markerPosition,this.markerRotation,this.markerScale),this.markerScale.multiplyScalar(1.018),this.markerScale.z*=1.04/1.018,this.marker.compose(this.markerPosition,this.markerRotation,this.markerScale)}markerColor(e){return new z(e).multiplyScalar(.24).getHex()}structureVisible(e,t,n,r){if(r===0)return!1;if(n===0)return r<2||t.rubbleSafe;let i=Math.max(0,4-Math.ceil(r*4/2));return(n-1+e.id)%4<i&&(r<2||t.rubbleSafe)}structuralMatrix(e,t){if(t<=0)return e.home;if(t>=2)return e.final;e.home.decompose(this.fromPosition,this.fromRotation,this.fromScale),e.final.decompose(this.toPosition,this.toRotation,this.toScale);let n=Math.sqrt(t/2);return this.matrix.compose(this.fromPosition.lerp(this.toPosition,n),this.fromRotation.slerp(this.toRotation,n),this.fromScale.lerp(this.toScale,n))}phaseOf(e){return this.entries.get(e)?.phase??0}get heatmapSources(){return[this.heatmapMarkers,this.rubbleHeatmapMarkers]}syncHeatmap(e){for(let[t,n]of this.entries){let r=e.get(t),i=(e,t,n)=>{this.heatmapMarkers.setVisibleAt(e,r!==void 0&&this.markers.getVisibleAt(e)),t.getMatrixAt(n,this.heatmapMatrix),this.heatmapMarkers.setMatrixAt(e,this.heatmapMatrix),r!==void 0&&this.heatmapMarkers.setColorAt(e,new z(r))};for(let e of n.fragments)e.markerId!==void 0&&i(e.markerId,e.batch===`concrete`?this.concrete:this.exterior,e.id);for(let e of n.structure)i(e.markerId,this.concrete,e.id);i(n.mound.markerId,this.rubble,n.mound.id)}}syncRubbleHeatmap(e){for(let[t,n]of this.entries){let r=e.has(t)&&n.phase===2&&this.markers.getVisibleAt(n.mound.markerId);this.rubbleHeatmapMarkers.setVisibleAt(n.mound.markerId,r),this.rubble.getMatrixAt(n.mound.id,this.heatmapMatrix),this.rubbleHeatmapMarkers.setMatrixAt(n.mound.markerId,this.heatmapMatrix),r&&this.rubbleHeatmapMarkers.setColorAt(n.mound.markerId,new z(672498));for(let e of n.fragments)e.markerId!==void 0&&this.rubbleHeatmapMarkers.setVisibleAt(e.markerId,!1);for(let e of n.structure)this.rubbleHeatmapMarkers.setVisibleAt(e.markerId,!1)}}get meshCount(){return 4}dispose(){this.heatmapMarkers.dispose(),this.rubbleHeatmapMarkers.dispose(),this.markers.dispose(),this.exterior.dispose(),this.concrete.dispose(),this.rubble.dispose();for(let e of[this.markers,this.exterior,this.concrete,this.rubble])e.material.dispose()}},ul={machines:{line:`#70e3bd`,chrome:`#25ae8a`,plate:`#3e6354`,onPlate:`#70e3bd`,pipOn:`#a2f1ab`,pipGap:`#0a5913`,pipOff:`#9e9da2`,pipOffGap:`#4c4d52`,accent:`#ffb020`,label:`#f2fff6`,warn:`#e6483d`,go:`#7fe3b0`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,primaryIcon:{width:24,height:24,inner:`<rect x="9" y="4" width="6" height="11" fill="#ffffff"/>
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
        stroke-width="1.6"/>`}}},dl=[{typeId:`ancient-deity-structure`,state:`mobile`,source:`models/ancient-deity-structure/ancient-deity-structure-01.glb`,runtime:`public/assets/runtime-models/ancient-deity-structure--mobile.glb`},{typeId:`ancient-nug`,state:`mobile`,source:`models/ancient-nug/ancient-nug-01.glb`,runtime:`public/assets/runtime-models/ancient-nug--mobile.glb`},{typeId:`ancient-slime-temple`,state:`mobile`,source:`models/slime-temple/slime-temple-1.glb`,runtime:`public/assets/runtime-models/ancient-slime-temple--mobile.glb`},{typeId:`machine-harbinger`,state:`mobile`,source:`models/machine-harbinger/machine-harbinger-02.glb`,runtime:`public/assets/runtime-models/machine-harbinger--mobile.glb`},{typeId:`machine-harvester`,state:`mobile`,source:`models/machine-harvester/machine-harvester-01.glb`,runtime:`public/assets/runtime-models/machine-harvester--mobile.glb`},{typeId:`machine-infantry`,state:`mobile`,source:`models/machine-infantry/machine-infantry-01.glb`,runtime:`public/assets/runtime-models/machine-infantry--mobile.glb`},{typeId:`mobile-factory`,state:`mobile`,source:`models/machine-mobile-factory/machine-mobile-factory-mobile-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--mobile.glb`},{typeId:`mobile-factory`,state:`deployed`,source:`models/machine-mobile-factory/machine-mobile-factory-deployed-01.glb`,runtime:`public/assets/runtime-models/mobile-factory--deployed.glb`},{typeId:`machine-processing-node`,state:`mobile`,source:`models/machine-processing-node/machine-processing-node-01.glb`,runtime:`public/assets/runtime-models/machine-processing-node--mobile.glb`},{typeId:`machine-shard-cutter`,state:`mobile`,source:`models/machine-shard-cutter/machine-shard-cutter-01.glb`,runtime:`public/assets/runtime-models/machine-shard-cutter--mobile.glb`},{typeId:`ancient-harvester`,state:`mobile`,source:`models/ancient-harverster/ancient-harvester-01.glb`,runtime:`public/assets/runtime-models/ancient-harvester--mobile.glb`},{typeId:`ancient-harbinger`,state:`mobile`,source:`models/ancient-harbinger/ancient-harbinger-03.glb`,runtime:`public/assets/runtime-models/ancient-harbinger--mobile.glb`},{typeId:`ancient-infantry`,state:`mobile`,source:`models/ancient-infantry/ancient-infantry-01.glb`,runtime:`public/assets/runtime-models/ancient-infantry--mobile.glb`},{typeId:`ancient-support`,state:`mobile`,source:`models/ancient-acid-specialist/ancient-acid-specialist-01.glb`,runtime:`public/assets/runtime-models/ancient-support--mobile.glb`},{typeId:`machine-construct`,state:`mobile`,source:`models/machine-construct/machine-construct-01.glb`,runtime:`public/assets/runtime-models/machine-construct--mobile.glb`}];function fl(e,t=`mobile`){let n=dl.find(n=>n.typeId===e&&n.state===t);if(!n)throw Error(`No canonical runtime model declared for ${e}:${t}`);return`/HumanResourcesLowPoly/${n.runtime.replace(/^public\//,``)}`}var pl=(e,t,n,r,i,a={})=>({typeId:e,faction:t,assetUrl:fl(e,a.state??`mobile`),bounds:{targetExtent:n,normaliseBy:r,...a.yawOffset===void 0?{}:{yawOffset:a.yawOffset}},fallback:{extent:n},material:{palette:i},...a.state===void 0?{}:{state:a.state},...a.cachePickGeometry===void 0?{}:{cachePickGeometry:a.cachePickGeometry},...a.animations===void 0?{}:{animations:a.animations}}),ml=[pl(`ancient-deity-structure`,`ancients`,50,`height`,`ancient-deity-structure`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),pl(`ancient-nug`,`ancients`,140,`height`,`ancient-nug`,{yawOffset:Math.PI/2}),pl(`ancient-slime-temple`,`ancients`,30,`horizontal`,`ancient-slime-temple`),pl(`machine-harbinger`,`machines`,55,`height`,`machine-harbinger`,{yawOffset:Math.PI/2}),pl(`machine-harvester`,`machines`,30,`height`,`machine-harvester`,{yawOffset:Math.PI/2}),pl(`machine-infantry`,`machines`,10,`height`,`machine-infantry`,{yawOffset:Math.PI/2}),pl(`mobile-factory`,`machines`,24,`horizontal`,`machine-mobile-factory`,{state:`mobile`}),pl(`mobile-factory`,`machines`,22.5,`height`,`machine-mobile-factory`,{state:`deployed`}),pl(`machine-processing-node`,`machines`,45,`horizontal`,`machine-processing-node`,{yawOffset:Math.PI/2,cachePickGeometry:!0}),pl(`machine-shard-cutter`,`machines`,72,`height`,`machine-shard-cutter`,{yawOffset:Math.PI/2}),pl(`ancient-harvester`,`ancients`,32.5,`horizontal`,`ancient-harvester`,{yawOffset:Math.PI/2}),pl(`ancient-harbinger`,`ancients`,60,`height`,`ancient-harbinger`,{yawOffset:Math.PI/2}),pl(`ancient-infantry`,`ancients`,9,`height`,`ancient-infantry`,{yawOffset:Math.PI/2}),pl(`ancient-support`,`ancients`,45,`height`,`ancient-acid-specialist`,{yawOffset:Math.PI/2}),pl(`machine-construct`,`machines`,140,`height`,`machine-construct`,{yawOffset:Math.PI/2,animations:{walk:`NlaTrack`,defeat:`NlaTrack.001`}})],hl=new Map(ml.map(e=>[gl(e.typeId,e.state),e]));function gl(e,t=`mobile`){return`${e}:${t}`}function _l(e,t=!1){return hl.get(gl(e,t?`deployed`:`mobile`))??hl.get(gl(e))}function vl(e){return hl.has(gl(e,`deployed`))}function yl(e,t=!1){let n=_l(e,t)?.fallback.extent??bs(e).radius*2;return{radius:n/Math.SQRT2,minY:0,maxY:n,height:n,centre:{x:0,y:n/2,z:0},size:{x:n,y:n,z:n}}}var bl=`modulepreload`,xl=function(e){return`/HumanResourcesLowPoly/`+e},Sl={},Cl=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=xl(t,n),t=s(t),t in Sl)return;Sl[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:bl,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},wl=[],Tl=.2,El=64,Dl=1.2,Ol=.05,kl=2400,Al=[`machine-infantry`,`machine-construct`,`machine-harbinger`,`machine-processing-node`,`mobile-factory`];function jl(e,t){if(!Al.includes(e))return;let n=t.radius+Math.hypot(t.centre.x,t.centre.z),r=Math.max(n,t.height/2)*1.08,i=e===`machine-construct`,a=e===`machine-harbinger`,o=e===`mobile-factory`,s=r*(i?.82:a?.9:o?1.1:1);return{drop:e===`machine-infantry`||e===`machine-construct`||e===`machine-harbinger`||e===`machine-processing-node`?t.height*.25:0,shieldRadius:s,shieldCentre:{x:t.centre.x,y:t.centre.y+(i?t.height*.12:o?-s/3:0),z:t.centre.z}}}function Ml(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}function Nl(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function Pl(e,t,n){let r=e.instanceColor,i=t*3;if(r&&Math.fround(n.r)===r.array[i]&&Math.fround(n.g)===r.array[i+1]&&Math.fround(n.b)===r.array[i+2])return!1;e.setColorAt(t,n);let a=e.instanceColor;return a?(a.setUsage(O),a.addUpdateRange(i,3),!0):!1}var Fl=class{detailedResourcesFactory;group=new J;meshes=new Map;matrix=new Pe;rotation=new Pe;colour=new z;used=new Map;selected=new Map;alerted=new Map;importedUnits=new Map;activeImportedUnits=new Set;modelResources;pendingModelLoads=new Map;modelLoaderState;modelResourcesPromise;disposed=!1;importedTemplates=new Map;defeatedImportedUnits=new Map;fadingDeadUnits=new Map;importedSelectionGroup=new J;importedOcclusionGroups={machines:new J,ancients:new J};lastAnimationSyncMs;drawn=0;selectedDrawn=0;alertedDrawn=0;constructor(e,t){this.detailedResourcesFactory=t,this.startDetailedModelLoader();for(let t of vs)for(let n of vl(t.id)?[!1,!0]:[!1]){let r=e.units.filter(e=>e.typeId===t.id).length,i=Math.max(r+El,4),a=this.fallbackGeometry(t.id,n),o=new g(a,ut(16777215),i);o.frustumCulled=!1;let s=new g(a.clone(),new Se,i);s.frustumCulled=!1;let c=new g(s.geometry,new Se,i);c.frustumCulled=!1;let l=this.deployedAppearanceFor(t.id),u;l&&(u=new g(new v(l.shieldRadius,2),ut(st(`machines`),{transparent:!0,opacity:Tl,depthWrite:!1}),i),u.frustumCulled=!1,u.renderOrder=5);let d=`${t.id}:${n?`deployed`:`mobile`}`;for(let e of[o,s,c,u])e&&(e.instanceMatrix.setUsage(O),e.count=0);o.castShadow=o.receiveShadow=!0,s.castShadow=s.receiveShadow=!1,u&&(u.castShadow=u.receiveShadow=!1),this.meshes.set(d,{key:d,type:t,deployed:n,body:o,shell:s,alertShell:c,deployedShield:u,deployedAppearance:l,matrixDirty:!1,shellMatrixDirty:!1,alertShellMatrixDirty:!1,shieldMatrixDirty:!1,bodyColourDirty:!1}),this.group.add(o),u&&this.group.add(u)}}boundsOf(e,t=!1){let n=_l(e,t),r=n&&gl(n.typeId,n.state);return(r?this.modelResources?.measuredBounds(r):void 0)??yl(e,t)}deployedAppearanceFor(e){return jl(e,this.boundsOf(e,!1))}fallbackGeometry(e,t){let n=this.boundsOf(e,t),r=new me(n.size.x,n.size.y,n.size.z);return r.translate(n.centre.x,n.centre.y,n.centre.z),r}refreshDeployedShield(e){let t=this.deployedAppearanceFor(e);if(t)for(let n of[`mobile`,`deployed`]){let r=this.meshes.get(`${e}:${n}`);!r?.deployedShield||t.shieldRadius===r.deployedAppearance?.shieldRadius||(r.deployedShield.geometry.dispose(),r.deployedShield.geometry=new v(t.shieldRadius,2),r.deployedAppearance=t,r.shieldMatrixDirty=!0)}}loadModel(e,t){return this.modelResources.load(e,t).then(()=>{t.state!==`deployed`&&this.refreshDeployedShield(t.typeId)})}requestImportedModel(e,t){let n=_l(e,t);if(n){let e=gl(n.typeId,n.state);this.modelResources?this.loadModel(e,n):this.pendingModelLoads.set(e,n)}return n}startDetailedModelLoader(){this.modelLoaderState={state:`loading`};let e=this.detailedResourcesFactory?Promise.resolve(void 0):Cl(()=>import(`./unitModelResources-B_GVLizi.js`),__vite__mapDeps([0,1,2]));this.modelResourcesPromise=Promise.all([e,Cl(()=>import(`./unitModelMaterials-BAvpoud0.js`),__vite__mapDeps([3,1,4]))]).then(([e,{prepareUnitModelMaterials:t}])=>{if(this.disposed)return;let n=this.detailedResourcesFactory?this.detailedResourcesFactory(t):new e.UnitModelResources(t);this.modelResources=n,this.modelLoaderState=void 0;for(let[e,t]of this.pendingModelLoads)this.loadModel(e,t);return this.pendingModelLoads.clear(),n}).catch(e=>{this.disposed||(this.modelLoaderState={state:`failed`,error:e},console.warn(`Unable to initialise Detailed model loading; using block fallbacks.`,e))})}async preloadAll(e){if(!await this.modelResourcesPromise||this.disposed)return;let t=e===`machines`?`machine-harbinger`:`ancient-harbinger`,n=e===`machines`?`ancient-harbinger`:`machine-harbinger`,r=[t,...bs(t).constructionTypes??[],n],i=[...r.flatMap(e=>ml.filter(t=>t.typeId===e)),...ml.filter(e=>!r.includes(e.typeId))];for(let e of i){if(this.disposed)return;await this.loadModel(gl(e.typeId,e.state),e)}}modelTemplate(e,t=!1){let n=_l(e,t);return n?this.modelResources?.get(gl(n.typeId,n.state))?.scene:void 0}importedUnitFor(e,t,n){let r=this.requestImportedModel(e,n);if(!r)return;let i=gl(r.typeId,r.state),a=this.modelResources?.get(i)??this.importedTemplates.get(i);if(!a)return;let o=this.importedUnits.get(t);if(o?.modelKey===i)return o;o&&this.removeImportedUnit(t,o);let s=dt(a.scene),c=dt(a.scene),l=a.pickGeometry?new V(a.pickGeometry,new Se({side:2})):void 0,u=new Re(s),d=new Re(c),f=r?.animations&&this.animationClip(a,r.animations.walk),p={modelKey:i,template:a,body:s,pick:l,selection:void 0,occlusion:c,faction:r.faction,selectionMaterial:void 0,mixer:u,occlusionMixer:d,walkAction:f?u.clipAction(f):void 0,occlusionWalkAction:f?d.clipAction(f):void 0};return this.importedUnits.set(t,p),this.group.add(s),this.importedOcclusionGroups[r.faction].add(c),p}syncImportedUnit(e,t,n,r,i,a,o,s){let c=_l(e,s);if(!c)return;let l=this.importedUnitFor(e,t,s);if(l)return this.activeImportedUnits.add(t),l.body.position.set(n,r,i),l.body.rotation.set(0,-a+(c.bounds.yawOffset??0),0),l.pick&&(l.pick.position.copy(l.body.position),l.pick.rotation.copy(l.body.rotation)),l.occlusion.position.copy(l.body.position),l.occlusion.rotation.copy(l.body.rotation),l.walkAction&&(o?l.walkAction.isRunning()||l.walkAction.reset().play():l.walkAction.isRunning()&&l.walkAction.stop()),l.occlusionWalkAction&&(o?l.occlusionWalkAction.isRunning()||l.occlusionWalkAction.reset().play():l.occlusionWalkAction.isRunning()&&l.occlusionWalkAction.stop()),l}selectionClone(e){if(e.selection)return e.selection;let t=dt(e.template.scene),n=new Se({color:16777215,side:2,toneMapped:!1});return t.traverse(e=>{e instanceof V&&(e.material=n,e.castShadow=e.receiveShadow=!1,e.frustumCulled=!1)}),e.selection=t,e.selectionMaterial=n,this.importedSelectionGroup.add(t),t}advanceImportedAnimations(e){let t=this.lastAnimationSyncMs??e,n=Math.min(.1,Math.max(0,e-t)/1e3);this.lastAnimationSyncMs=e;for(let e of this.importedUnits.values())e.walkAction?.isRunning()&&e.mixer.update(n),e.occlusionWalkAction?.isRunning()&&e.occlusionMixer.update(n);for(let[t,r]of this.defeatedImportedUnits)r.mixer.update(n),!(e<r.expiresAt)&&(this.retireCorpse(r),r.mixer.stopAllAction(),this.defeatedImportedUnits.delete(t));for(let[t,n]of this.fadingDeadUnits){let r=Math.min(1,(e-n.startMs)/n.durationMs);for(let e=0;e<n.materials.length;e++)n.materials[e].opacity=n.baseOpacities[e]*(1-r);if(n.body.position.y=n.startY-n.sinkMetres*r,!n.shadowDisabled&&r>=.5&&(n.shadowDisabled=!0,n.body.traverse(e=>{e.castShadow=!1})),!(r<1)){this.retireCorpse(n);for(let e of n.materials)e.dispose();this.fadingDeadUnits.delete(t)}}}retireCorpse(e){this.group.remove(e.body),e.occlusion&&this.importedOcclusionGroups[e.faction].remove(e.occlusion)}corpseShadowSources(){if(this.defeatedImportedUnits.size===0&&this.fadingDeadUnits.size===0)return wl;let e=[];for(let t of this.defeatedImportedUnits.values())e.push({x:t.body.position.x,z:t.body.position.z,radius:t.radius});for(let t of this.fadingDeadUnits.values())e.push({x:t.body.position.x,z:t.body.position.z,radius:t.radius});return e}deathFadeDurationFor(e){return Math.min(kl,Math.max(600,e.height*25))}animationClip(e,t){return e.animations.find(e=>e.name===t)}syncDefeats(e,t){let n=new Set;for(let r of e){if(r.kind!==`combatHit`||r.remainingHealth>0||n.has(r.targetId)||this.defeatedImportedUnits.has(r.targetId)||this.fadingDeadUnits.has(r.targetId))continue;let e=this.importedUnits.get(r.targetId),i=e?.modelKey.endsWith(`:deployed`)??!1,a=_l(r.targetTypeId,i);if(!a)continue;n.add(r.targetId);let o=this.modelResources?.get(gl(r.targetTypeId,a.state))??this.importedTemplates.get(gl(r.targetTypeId,a.state));if(!o)continue;let s=a.animations&&this.animationClip(o,a.animations.defeat),c=e?.body??dt(o.scene),l=e?.occlusion;e?(this.importedUnits.delete(r.targetId),e.selection&&this.importedSelectionGroup.remove(e.selection),e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()):this.group.add(c),c.position.set(r.targetX,Q,r.targetZ),c.rotation.set(0,-(r.targetHeading??0)+(a.bounds.yawOffset??0),0);let u=xs(bs(r.targetTypeId),i);if(s){let e=new Re(c),n=e.clipAction(s);n.setLoop(Ge,1),n.clampWhenFinished=!0,n.play(),this.defeatedImportedUnits.set(r.targetId,{body:c,mixer:e,expiresAt:t+s.duration*1e3,occlusion:l,faction:a.faction,radius:u});continue}let d=this.boundsOf(r.targetTypeId,i),f=[],p=[],m=new Map,h=e=>{let t=m.get(e);if(t)return t;let n=e.clone();return n.transparent=!0,delete n.userData.outlineParameters,m.set(e,n),f.push(n),p.push(n.opacity),n};c.traverse(e=>{e instanceof V&&(e.material=Array.isArray(e.material)?e.material.map(h):h(e.material))}),this.fadingDeadUnits.set(r.targetId,{body:c,materials:f,baseOpacities:p,startY:c.position.y,sinkMetres:Math.min(Dl,d.height*Ol),startMs:t,durationMs:this.deathFadeDurationFor(d),occlusion:l,faction:a.faction,radius:u,shadowDisabled:!1})}}removeDormantImportedUnits(){for(let[e,t]of this.importedUnits)this.activeImportedUnits.has(e)||this.removeImportedUnit(e,t)}removeImportedUnit(e,t){this.group.remove(t.body),t.selection&&this.importedSelectionGroup.remove(t.selection),this.importedOcclusionGroups[t.faction].remove(t.occlusion),t.selectionMaterial?.dispose(),t.pick?.material.dispose(),t.mixer.stopAllAction(),t.occlusionMixer.stopAllAction(),this.importedUnits.delete(e)}importedSelectionSources(){return this.importedSelectionGroup}importedPickSource(e){let t=this.importedUnits.get(e);return t?.pick??t?.body}importedOcclusionSources(){return Object.entries(this.importedOcclusionGroups).map(([e,t])=>({source:t,faction:e}))}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof V))return;let n=t.material;Array.isArray(n)?n.forEach(t=>ot(t,e)):ot(n,e)})}occlusionSources(){return[...this.meshes.values()].map(e=>({source:e.body,geometry:e.shell.geometry,faction:e.type.faction}))}selectionSources(){return[...this.meshes.values()].flatMap(e=>[{source:e.shell,geometry:e.shell.geometry,faction:e.type.faction,alert:!1},{source:e.alertShell,geometry:e.shell.geometry,faction:e.type.faction,alert:!0}])}sync(e,t,n,r,i=performance.now()){this.advanceImportedAnimations(i),this.used.clear(),this.selected.clear(),this.alerted.clear(),this.activeImportedUnits.clear(),this.drawn=0,this.selectedDrawn=0,this.alertedDrawn=0;for(let e of this.meshes.values())e.matrixDirty=!1,e.shellMatrixDirty=!1,e.alertShellMatrixDirty=!1,e.shieldMatrixDirty=!1,e.bodyColourDirty=!1;for(let i of e.units){let e=i.deployTimer>0?1-i.deployTimer/No:+!!i.deployed,a=vl(i.typeId)&&(i.deployTimer>0?i.deployTarget?e>=.5:e>.5:i.deployed),o=this.meshes.get(`${i.typeId}:${a?`deployed`:`mobile`}`);if(!o)continue;let s=this.used.get(o.key)??0;if(s>=o.body.instanceMatrix.count)continue;this.used.set(o.key,s+1);let c=i.prevX+(i.x-i.prevX)*t,l=i.prevZ+(i.z-i.prevZ)*t,u=r?.(i.id),d=Ml(i.prevHeading,i.heading,t),f=c+(u?.forward??0)*Math.cos(d),p=l+(u?.forward??0)*Math.sin(d);this.rotation.makeRotationY(-d-(u?.yaw??0));let m=o.deployedAppearance,h=0;if(m)if(i.deployTimer>0){let e=1-i.deployTimer/No;h=i.deployTarget?e:1-e}else i.deployed&&(h=1);let g=Q-(m?.drop??0)*h,_=Math.hypot(i.x-i.prevX,i.z-i.prevZ)>.001,v=this.syncImportedUnit(i.typeId,i.id,f,g,p,d+(u?.yaw??0),_,a);if(o.body.visible=!v,this.matrix.copy(this.rotation),this.matrix.setPosition(f,g,p),o.matrixDirty=Nl(o.body,s,this.matrix)||o.matrixDirty,o.deployedShield&&m){this.matrix.copy(this.rotation),this.matrix.scale(new W(h,h,h));let e=m.shieldCentre,t=new W(e.x,e.y,e.z).applyMatrix4(this.rotation);this.matrix.setPosition(f+t.x,g+t.y,p+t.z),o.shieldMatrixDirty=Nl(o.deployedShield,s,this.matrix)||o.shieldMatrixDirty}let y=ct(o.type.faction),b=1;if(i.deployTimer>0){let e=1-i.deployTimer/No,t=i.deployTarget?1:.72;b=t+((i.deployTarget?.72:1)-t)*e}else i.deployed&&(b=.72);this.colour.setHex(y).multiplyScalar(b),o.bodyColourDirty=Pl(o.body,s,this.colour)||o.bodyColourDirty;let x=n(i.id);if(x!==void 0){let e=x===`attack`;if(v){let t=this.selectionClone(v);t.position.copy(v.body.position),t.rotation.copy(v.body.rotation),t.visible=!0,v.selectionMaterial?.color.set(e?16719904:ul[o.type.faction].line)}else{let t=e?o.alertShell:o.shell,n=e?this.alerted:this.selected,r=n.get(o.key)??0;this.matrix.copy(this.rotation),this.matrix.setPosition(f,g,p);let i=Nl(t,r,this.matrix);e?o.alertShellMatrixDirty=i||o.alertShellMatrixDirty:o.shellMatrixDirty=i||o.shellMatrixDirty,n.set(o.key,r+1)}e?this.alertedDrawn++:this.selectedDrawn++}else v&&v.selection&&(v.selection.visible=!1);this.drawn++}this.removeDormantImportedUnits();for(let e of this.meshes.values()){let t=this.used.get(e.key)??0;e.body.count=t,e.shell.count=this.selected.get(e.key)??0,e.alertShell.count=this.alerted.get(e.key)??0,e.deployedShield&&(e.deployedShield.count=t),e.matrixDirty&&(e.body.instanceMatrix.needsUpdate=!0),e.shellMatrixDirty&&(e.shell.instanceMatrix.needsUpdate=!0),e.alertShellMatrixDirty&&(e.alertShell.instanceMatrix.needsUpdate=!0),e.deployedShield&&e.shieldMatrixDirty&&(e.deployedShield.instanceMatrix.needsUpdate=!0),e.bodyColourDirty&&e.body.instanceColor&&(e.body.instanceColor.needsUpdate=!0)}}static footprintOf(e,t=!1){return xs(e,t)}modelStatus(e,t=!1){let n=_l(e,t);if(!n)return;let r=gl(n.typeId,n.state);return this.modelResources?.status(r)??(this.pendingModelLoads.has(r)?this.modelLoaderState:void 0)}detailedPerformanceStats(){if(!this.modelResources)return;let e=this.modelResources.counts,t=0;for(let e of this.importedUnits.values())e.selection?.visible&&t++;return{loadedModels:e.loaded,loadingModels:e.loading,failedModels:e.failed,fallbacks:this.drawn-this.activeImportedUnits.size,visible:this.activeImportedUnits.size,selection:t,occlusion:this.activeImportedUnits.size}}dispose(){this.disposed=!0,this.pendingModelLoads.clear();for(let e of this.importedUnits.values()){this.group.remove(e.body),e.selection&&this.importedSelectionGroup.remove(e.selection);for(let t of Object.values(this.importedOcclusionGroups))t.remove(e.occlusion);e.selectionMaterial?.dispose(),e.pick?.material.dispose(),e.mixer.stopAllAction(),e.occlusionMixer.stopAllAction()}this.importedUnits.clear();for(let e of this.defeatedImportedUnits.values())this.retireCorpse(e),e.mixer.stopAllAction();this.defeatedImportedUnits.clear();for(let e of this.fadingDeadUnits.values()){this.retireCorpse(e);for(let t of e.materials)t.dispose()}this.fadingDeadUnits.clear(),this.importedSelectionGroup.clear();for(let e of Object.values(this.importedOcclusionGroups))e.clear();this.modelResources?.dispose();for(let e of this.meshes.values())e.body.geometry.dispose(),Il(e.body.material),e.shell.geometry.dispose(),Il(e.shell.material),Il(e.alertShell.material),e.deployedShield&&(e.deployedShield.geometry.dispose(),Il(e.deployedShield.material))}};function Il(e){Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}var Ll=new W;function Rl(e,t,n){let r=zl(e,n);if(!r)return;let i,a=1/0;for(let e of t){let t=(e.x-r.x)**2+(e.z-r.z)**2;t>196||t>=a||(i=e,a=t)}return i?.id}function zl(e,t,n=Q){Ll.set(t.x,t.y,.5).unproject(e);let r=e.position,i=Ll.sub(r);if(Math.abs(i.y)<1e-6)return;let a=(n-r.y)/i.y;if(!(a<0))return new W(r.x+i.x*a,n,r.z+i.z*a)}function Bl(e,t,n,r){Vl.setFromCamera(n,e);let i,a=1/0;for(let e of t.units){let t=r?.importedPickSource?.(e.id),n=t?Yl(t):Kl(e,r);!n||n.distance>=a||(a=n.distance,i=e.id)}return i}var Vl=new Xe,Hl=[],Ul=[],Wl=new Map,Gl=new Pe;function Kl(e,t){let n=Zl(e),r=`${e.typeId}:${n?`deployed`:`mobile`}`,i=Wl.get(r);if(!i){let a=ql(e.typeId,n,t),o=new me(a.size.x,a.size.y,a.size.z);o.translate(a.centre.x,a.centre.y,a.centre.z),i=new V(o,new Se({side:2})),i.matrixAutoUpdate=!1,Wl.set(r,i)}return Ql(i,e,t),Hl.length=0,i.raycast(Vl,Hl),Xl(Hl)}function ql(e,t,n){return n?.boundsOf?n.boundsOf(e,t):yl(e,t)}function Jl(e,t){return t?.deployedAppearanceFor?t.deployedAppearanceFor(e):jl(e,yl(e,!1))}function Yl(e){return e.updateMatrixWorld(!0),Ul.length=0,Vl.intersectObject(e,!0,Ul),Xl(Ul)}function Xl(e){let t;for(let n of e)(!t||n.distance<t.distance)&&(t=n);return t}function Zl(e){if(!vl(e.typeId))return!1;if(e.deployTimer>0){let t=1-e.deployTimer/No;return e.deployTarget?t>=.5:t>.5}return e.deployed}function Ql(e,t,n){let r=Jl(t.typeId,n),i=0;if(r)if(t.deployTimer>0){let e=1-t.deployTimer/No;i=t.deployTarget?e:1-e}else t.deployed&&(i=1);Gl.makeRotationY(-t.heading),Gl.setPosition(t.x,Q-(r?.drop??0)*i,t.z),e.matrixWorld.copy(Gl)}function $l(e,t,n){Ll.set(n.x,n.y,.5).unproject(e);let r=e.position,i=Ll.x-r.x,a=Ll.y-r.y,o=Ll.z-r.z,s,c=1/0;for(let e of t.buildings){let t=ol(e),n=e.rotation??0,l=Z({x:r.x-e.x,z:r.z-e.z},-n),u=Z({x:i,z:o},-n),d=eu(l.x,r.y,l.z,u.x,a,u.z,-e.width/2,0,-e.depth/2,e.width/2,t,e.depth/2);d!==void 0&&d<c&&(c=d,s=e.id)}return s}function eu(e,t,n,r,i,a,o,s,c,l,u,d){let f=0,p=1/0;for(let[m,h,g,_]of[[e,r,o,l],[t,i,s,u],[n,a,c,d]]){if(Math.abs(h)<1e-9){if(m<g||m>_)return;continue}let e=(g-m)/h,t=(_-m)/h;if(e>t&&([e,t]=[t,e]),f=Math.max(f,e),p=Math.min(p,t),f>p)return}return p>=0?f:void 0}function tu(e,t,n){let r=[];for(let i of t.units)ru(e,i,n)&&r.push(i.id);return r.sort((e,t)=>e-t)}function nu(e,t){return tu(e,t,{x0:-1,y0:-1,x1:1,y1:1})}function ru(e,t,n){return Ll.set(t.x,Q,t.z).project(e),Ll.z<-1||Ll.z>1?!1:Ll.x>=n.x0&&Ll.x<=n.x1&&Ll.y>=n.y0&&Ll.y<=n.y1}var iu={fovDeg:28,minDistance:250,maxDistance:1500,initialDistance:750,minPitchDeg:47,maxPitchDeg:58,yawDeg:45,nearPlane:50,farPlane:16e4,basePanSpeed:120,zoomSpeed:.0016,smoothing:12,panLimit:dc*.6},au=class{camera;target=new W(0,0,0);desiredTarget=new W(0,0,0);distance;desiredDistance;lastGrabPointer=new R;grabDragActive=!1;constructor(e,t={x:0,z:0}){this.camera=new n(iu.fovDeg,e,iu.nearPlane,iu.farPlane),this.distance=iu.initialDistance,this.desiredDistance=this.distance,this.target.set(t.x,0,t.z),this.desiredTarget.copy(this.target),this.applyTransform()}get zoomFraction(){return ye.inverseLerp(iu.minDistance,iu.maxDistance,this.distance)}get pitchDeg(){let e=Math.sqrt(this.zoomFraction);return ye.lerp(iu.minPitchDeg,iu.maxPitchDeg,e)}get focus(){return this.target}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}focusOn(e){this.desiredTarget.set(e.x,0,e.z),this.clampDesiredTarget()}update(e,t){if(e.zoomDelta!==0){let t=Math.exp(e.zoomDelta*iu.zoomSpeed);this.desiredDistance=ye.clamp(this.desiredDistance*t,iu.minDistance,iu.maxDistance)}let n=e.panVector;if(n.x!==0||n.y!==0){let e=iu.basePanSpeed*(1+this.zoomFraction*4)*t,r=ye.degToRad(iu.yawDeg),i=Math.sin(r),a=Math.cos(r);this.desiredTarget.x+=(n.y*i-n.x*a)*e,this.desiredTarget.z+=(n.x*i+n.y*a)*e,this.clampDesiredTarget()}if(e.middlePanHeld||e.touchPanHeld){let t=zl(this.camera,e.pointer);if(this.grabDragActive&&t){let e=zl(this.camera,this.lastGrabPointer);e&&(this.desiredTarget.x+=e.x-t.x,this.desiredTarget.z+=e.z-t.z,this.clampDesiredTarget())}this.lastGrabPointer.copy(e.pointer),this.grabDragActive=!0}else this.grabDragActive=!1;let r=1-Math.exp(-iu.smoothing*t);this.distance+=(this.desiredDistance-this.distance)*r,this.target.lerp(this.desiredTarget,r),this.applyTransform()}clampDesiredTarget(){let e=Math.hypot(this.desiredTarget.x,this.desiredTarget.z);if(e>iu.panLimit){let t=iu.panLimit/e;this.desiredTarget.x*=t,this.desiredTarget.z*=t}}applyTransform(){let e=ye.degToRad(this.pitchDeg),t=ye.degToRad(iu.yawDeg),n=Math.cos(e)*this.distance;this.camera.position.set(this.target.x-Math.sin(t)*n,this.target.y+Math.sin(e)*this.distance,this.target.z-Math.cos(t)*n),this.camera.lookAt(this.target)}},ou={machines:{fill:`rgba(61, 61, 61, 0.82)`,edge:`#70e3bd`,edgePx:2,chamferPx:30,radiusPx:0,tile:`rgba(62, 99, 84, 0.85)`,tileEdge:`#70e3bd`,tileRadius:`0`,heading:`#f2fff6`,body:`#f2fff6`,dim:`#9fbdb1`,headingShadow:`0 0 4px rgba(0, 0, 0, 0.85), 0 1px 1px rgba(0, 0, 0, 0.7)`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,accent:`#ffb020`,ok:`#a2f1ab`,warn:`#e6483d`,onEdge:`#10231c`,cornerLeft:{width:40,height:120,inner:`<g fill="none" stroke="var(--panel-edge)" stroke-width="2" stroke-linejoin="miter">
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
      </g>`}}},su=1920;function cu(e,t,n){if(e.style.setProperty(`--panel-fill`,t.fill),e.style.setProperty(`--panel-edge`,t.edge),e.style.setProperty(`--panel-edge-px`,`${t.edgePx}px`),e.style.setProperty(`--panel-tile`,t.tile),e.style.setProperty(`--panel-tile-edge`,t.tileEdge),e.style.setProperty(`--panel-tile-radius`,t.tileRadius),e.style.setProperty(`--panel-heading`,t.heading),e.style.setProperty(`--panel-body`,t.body),e.style.setProperty(`--panel-dim`,t.dim),e.style.setProperty(`--panel-heading-shadow`,t.headingShadow),e.style.setProperty(`--panel-font`,t.font),e.style.setProperty(`--panel-accent`,t.accent),e.style.setProperty(`--panel-ok`,t.ok),e.style.setProperty(`--panel-warn`,t.warn),e.style.setProperty(`--panel-on-edge`,t.onEdge),e.style.setProperty(`--panel-border-top`,`${t.edgePx}px solid ${t.edge}`),e.style.setProperty(`--panel-border-inward`,`${t.edgePx}px solid ${t.edge}`),t.chamferPx>0){let r=t.chamferPx;e.style.setProperty(`--panel-clip`,n===`left`?`polygon(0 0, calc(100% - ${r}px) 0, 100% ${r}px, 100% 100%, 0 100%)`:`polygon(${r}px 0, 100% 0, 100% 100%, 0 100%, 0 ${r}px)`),e.style.setProperty(`--panel-radius`,`0`)}else e.style.setProperty(`--panel-clip`,`none`),e.style.setProperty(`--panel-radius`,n===`left`?`0 ${t.radiusPx}px 0 0`:`${t.radiusPx}px 0 0 0`)}function lu(e){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return t.setAttribute(`viewBox`,`0 0 ${e.width} ${e.height}`),t.setAttribute(`width`,String(e.width)),t.setAttribute(`height`,String(e.height)),t.innerHTML=e.inner,t}var uu=class{handlers;root;onResize;nameEl;metaEl;activityEl;statsEl;countEl;chipsEl;deployEl;deployFillEl;deployLabelEl;lastName=``;lastMeta=``;lastActivity=``;lastStats=``;lastCount=``;lastChipSignature=``;lastDeploy=``;lastVisible=null;constructor(e,t,n){this.handlers=n,bu();let r=ou[t];this.root=du(`div`,`hrp hrp-unit`),this.root.dataset.faction=t,cu(this.root,r,`left`);let i=lu(r.cornerLeft);i.classList.add(`hrp-corner`);let a=du(`div`,`hrp-shell`),o=du(`div`,`hrp-body`),s=du(`div`,`hrp-lead`),c=du(`div`,`hrp-portrait`);c.append(gu(),_u()),s.append(c);let l=du(`div`,`hrp-lead-text`);this.nameEl=du(`div`,`hrp-name`),this.metaEl=du(`div`,`hrp-meta`),this.activityEl=du(`div`,`hrp-activity`),this.statsEl=du(`div`,`hrp-stats`),l.append(this.nameEl,this.metaEl,this.activityEl,this.statsEl),s.append(l);let u=du(`div`,`hrp-rail`);this.countEl=du(`div`,`hrp-count`),this.chipsEl=du(`div`,`hrp-chips`),this.deployEl=document.createElement(`button`),this.deployEl.type=`button`,this.deployEl.className=`hrp-deploy`,this.deployFillEl=du(`div`,`hrp-deploy-fill`),this.deployLabelEl=du(`span`,`hrp-deploy-label`),this.deployEl.append(this.deployFillEl,vu(),this.deployLabelEl),this.deployEl.addEventListener(`click`,()=>this.handlers.onDeploy()),u.append(this.countEl,this.chipsEl,this.deployEl),o.append(s,du(`div`,`hrp-divider`),u),a.append(o),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(fu()))}render(e){let t=e.mode!==`none`&&e.leader!==null;if(t!==this.lastVisible&&(this.root.classList.toggle(`shown`,t),this.lastVisible=t),!t||!e.leader)return;let n=e.leader;this.write(this.nameEl,`lastName`,n.name),this.write(this.metaEl,`lastMeta`,pu(n)),this.write(this.activityEl,`lastActivity`,n.activity??``),this.activityEl.classList.toggle(`empty`,n.activity===null);let r=`${n.humansOnboard?`${n.humansOnboard.current}/${n.humansOnboard.max}`:``} ${n.health?`${n.health.current}/${n.health.max}`:`none`}`;r!==this.lastStats&&(this.statsEl.replaceChildren(...n.humansOnboard?[mu(`HUMANS`,`${Math.round(n.humansOnboard.current)}/${n.humansOnboard.max}`)]:[],hu(n.health)),this.lastStats=r),this.write(this.countEl,`lastCount`,e.selectedCount>1?`${e.selectedCount} SELECTED`:``),this.countEl.classList.toggle(`empty`,e.selectedCount<=1),this.root.dataset.inspect=e.inspectOnly?`true`:`false`;let i=e.tallies.map(e=>`${e.typeId}:${e.count}:${+!!e.isLeader}`).join(`|`);i!==this.lastChipSignature&&(this.chipsEl.replaceChildren(...e.tallies.map(e=>this.chip(e.typeId,e.count,e.isLeader))),this.lastChipSignature=i),this.paintDeploy(e.inspectOnly?{kind:`unable`}:n.deployState)}chip(e,t,n){let r=document.createElement(`button`);r.type=`button`,r.className=n?`hrp-chip leader`:`hrp-chip`,r.title=e;let i=du(`div`,`hrp-chip-well`);i.append(gu());let a=du(`span`,`hrp-chip-count`);return a.textContent=`×${t}`,r.append(i,a),r.addEventListener(`click`,()=>this.handlers.onIsolateType(e)),r}paintDeploy(e){let t=e.kind===`transitioning`?`transitioning:${e.to}:${Math.round(e.progress*20)}`:e.kind;t!==this.lastDeploy&&(this.lastDeploy=t,this.root.dataset.deploy=e.kind,this.deployEl.hidden=e.kind===`unable`,this.deployEl.disabled=e.kind===`transitioning`,e.kind===`transitioning`?(this.deployFillEl.style.width=`${Math.round(e.progress*100)}%`,this.deployLabelEl.textContent=e.to?`DEPLOYING`:`PACKING UP`):(this.deployFillEl.style.width=`0%`,this.deployLabelEl.textContent=e.kind===`deployed`?`DEPLOYED`:`DEPLOY`))}write(e,t,n){this[t]!==n&&(e.textContent=n,this[t]=n)}};function du(e,t){let n=document.createElement(e);return n.className=t,n}function fu(){return Math.max(.7,Math.min(1,window.innerWidth/su))}function pu(e){return`${e.faction===`machines`?`MACHINES`:`ANCIENT ONES`} · ${e.role.toUpperCase()}`}function mu(e,t){let n=du(`div`,`hrp-stat`),r=du(`span`,`hrp-stat-label`);r.textContent=e;let i=du(`span`,`hrp-stat-value`);return i.textContent=t,n.append(r,i),n}function hu(e){let t=du(`div`,`hrp-stat`),n=du(`span`,`hrp-stat-label`);if(n.textContent=`HEALTH`,t.append(n),!e){let e=du(`span`,`hrp-stat-value pending`);return e.textContent=`— M5`,t.append(e),t}let r=du(`div`,`hrp-health`),i=Math.max(+(e.current>0),Math.floor(e.current/e.max*12));for(let e=0;e<12;e++){let t=du(`i`,e<i?`hrp-pip on`:`hrp-pip`);r.append(t)}t.append(r);let a=du(`span`,`hrp-stat-value`);return a.textContent=`${Math.max(0,Math.ceil(e.current))}/${e.max}`,t.append(a),t}function gu(){return du(`div`,`hrp-placeholder`)}function _u(){let e=du(`div`,`hrp-portrait-label`);return e.textContent=`unit portrait`,e}function vu(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return e.setAttribute(`viewBox`,`0 0 24 24`),e.setAttribute(`width`,`22`),e.setAttribute(`height`,`22`),e.classList.add(`hrp-deploy-icon`),e.innerHTML=`<rect x="9" y="4" width="6" height="11" fill="currentColor"/>
    <rect x="5" y="17" width="14" height="1.8" fill="currentColor"/>
    <path d="M2 12 L6 8.5 V15.5 Z" fill="currentColor"/>
    <path d="M22 12 L18 8.5 V15.5 Z" fill="currentColor"/>`,e}var yu=!1;function bu(){if(yu)return;yu=!0;let e=document.createElement(`style`);e.textContent=xu,document.head.append(e)}var xu=`
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
`,Su=class{handlers;root;onResize;titleEl;stateEl;humansEl;gridEl;queueRowEl;queueEl;tierEl;noticeEl;producer={kind:`unit`,id:-1};lastTitle=``;lastState=``;lastHumans=``;lastGridSignature=``;lastQueueSignature=``;lastTier=``;lastNotice=null;lastVisible=null;constructor(e,t,n){this.handlers=n,bu(),Du();let r=ou[t];this.root=Cu(`div`,`hrp hrp-build`),this.root.dataset.faction=t,cu(this.root,r,`right`);let i=lu(r.cornerRight);i.classList.add(`hrp-corner`);let a=Cu(`div`,`hrp-shell`),o=Cu(`div`,`hrpb-head`),s=Cu(`div`,`hrpb-heading`);this.titleEl=Cu(`div`,`hrp-name`),this.stateEl=Cu(`div`,`hrp-meta`),s.append(this.titleEl,this.stateEl);let c=Cu(`div`,`hrpb-bank`),l=Cu(`span`,`hrp-stat-label`);l.textContent=`HUMANS`,this.humansEl=Cu(`span`,`hrpb-humans`),c.append(l,this.humansEl),o.append(s,c),this.gridEl=Cu(`div`,`hrpb-grid`);let u=Cu(`div`,`hrpb-foot`);this.queueRowEl=Cu(`div`,`hrpb-queue-row`);let d=Cu(`span`,`hrp-stat-label`);d.textContent=`QUEUE`,this.queueEl=Cu(`div`,`hrpb-queue`),this.queueRowEl.append(d,this.queueEl),this.tierEl=document.createElement(`button`),this.tierEl.type=`button`,this.tierEl.className=`hrpb-tier`,this.tierEl.addEventListener(`click`,()=>this.handlers.onUnlockTier2()),u.append(this.queueRowEl,Cu(`div`,`hrpb-spacer`),this.tierEl),this.noticeEl=Cu(`div`,`hrpb-notice`),a.append(o,this.gridEl,u,this.noticeEl),this.root.append(a,i),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize)}dispose(){window.removeEventListener(`resize`,this.onResize),this.root.remove()}rescale(){this.root.style.setProperty(`--hud-scale`,String(fu()))}render(e){if(e.visible!==this.lastVisible&&(this.root.classList.toggle(`shown`,e.visible),this.lastVisible=e.visible),!e.visible)return;this.producer=e.producer,e.title!==this.lastTitle&&(this.titleEl.textContent=e.title,this.lastTitle=e.title),e.state!==this.lastState&&(this.stateEl.textContent=e.state,this.lastState=e.state);let t=String(Math.floor(e.humans));t!==this.lastHumans&&(this.humansEl.textContent=t,this.lastHumans=t);let n=e.producesUnits?e.producible.map(e=>`${e.typeId}:${+!!e.enabled}:${+!!e.lockedByTier}:${+!!e.unaffordable}`).join(`|`):`none`;n!==this.lastGridSignature&&(this.gridEl.classList.toggle(`empty`,!e.producesUnits),this.gridEl.replaceChildren(...e.producesUnits?e.producible.map(e=>this.tile(e)):[wu()]),this.lastGridSignature=n),this.queueRowEl.classList.toggle(`empty`,!e.producesUnits);let r=e.queue.map((e,t)=>`${e.typeId}:${t===0?Math.round(e.progress*20):0}`).join(`|`);r!==this.lastQueueSignature&&(this.queueEl.replaceChildren(...e.queue.map((e,t)=>Tu(e.name,t===0?e.progress:0,e.secondsLeft,t===0))),this.lastQueueSignature=r);let i=`${e.tier2.unlocked}:${e.tier2.affordable}`;i!==this.lastTier&&(this.tierEl.hidden=e.tier2.unlocked,this.tierEl.disabled=!e.tier2.affordable,this.tierEl.textContent=`UNLOCK TIER 2 · ${e.tier2.cost}`,this.lastTier=i),e.notice!==this.lastNotice&&(this.noticeEl.textContent=e.notice??``,this.noticeEl.classList.toggle(`shown`,e.notice!==null),this.lastNotice=e.notice)}tile(e){let t=document.createElement(`button`);t.type=`button`,t.className=`hrpb-tile`,t.disabled=!e.enabled&&!(e.action===`build`&&e.unaffordable&&!e.lockedByTier),t.title=e.lockedByTier?`${e.name} — requires Tier ${e.tier}`:e.unaffordable?`${e.name} — costs ${e.cost} Humans`:e.name,e.lockedByTier&&(t.dataset.locked=`tier`);let n=Cu(`div`,`hrpb-well`);if(e.lockedByTier){let t=Cu(`span`,`hrpb-tier-badge`);t.textContent=`TIER ${e.tier}`,n.append(t)}else n.append(Cu(`div`,`hrp-placeholder`));let r=Cu(`span`,`hrpb-name`);r.textContent=e.name;let i=Cu(`div`,`hrpb-costs`),a=Cu(`span`,e.unaffordable?`hrpb-cost short`:`hrpb-cost`);a.textContent=String(e.cost);let o=Cu(`span`,`hrpb-time`);return o.textContent=`${e.seconds}s`,i.append(a,o),t.append(n,r,i),t.addEventListener(`click`,()=>e.action===`build`?this.handlers.onBuild(this.producer,e.typeId):this.handlers.onProduce(this.producer,e.typeId)),t}};function Cu(e,t){let n=document.createElement(e);return n.className=t,n}function wu(){let e=Cu(`div`,`hrpb-note`);return e.textContent=`Builds no units. Harvesters deliver here; production is the factory’s.`,e}function Tu(e,t,n,r){let i=Cu(`div`,r?`hrpb-slot active`:`hrpb-slot`);if(i.title=e,r){let e=Cu(`div`,`hrpb-slot-fill`);e.style.height=`${Math.round(t*100)}%`;let r=Cu(`span`,`hrpb-slot-label`);r.textContent=`${n.toFixed(1)}s`,i.append(e,r)}return i}var Eu=!1;function Du(){if(Eu)return;Eu=!0;let e=document.createElement(`style`);e.textContent=Ou,document.head.append(e)}var Ou=`
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
`,ku=1920,Au=5,ju=4,Mu=30,Nu=class{onCommand;root;onResize;skin;humansTrough;meterTroughs;divider;clockEl;alertEl;bannerEl;onBannerTransitionEnd;buttons=new Map;lastClock=``;lastBanner=null;lastAlert=null;constructor(e,t,n){this.onCommand=n,this.skin=ul[t.faction],qu(),this.root=Fu(`div`,`hud`),this.root.dataset.faction=t.faction,this.root.style.setProperty(`--line`,this.skin.line),this.root.style.setProperty(`--chrome`,this.skin.chrome),this.root.style.setProperty(`--plate`,this.skin.plate),this.root.style.setProperty(`--on-plate`,this.skin.onPlate),this.root.style.setProperty(`--pip-on`,this.skin.pipOn),this.root.style.setProperty(`--pip-gap`,this.skin.pipGap),this.root.style.setProperty(`--pip-off`,this.skin.pipOff),this.root.style.setProperty(`--pip-off-gap`,this.skin.pipOffGap),this.root.style.setProperty(`--accent`,this.skin.accent),this.root.style.setProperty(`--label`,this.skin.label),this.root.style.setProperty(`--warn`,this.skin.warn),this.root.style.setProperty(`--go`,this.skin.go),this.root.style.setProperty(`--icon-stroke`,this.skin.outline??`transparent`),this.root.style.setProperty(`--hud-font`,this.skin.font),this.root.style.setProperty(`--band`,this.skin.band),this.root.style.setProperty(`--on-band`,this.skin.onBand),this.root.style.setProperty(`--rail`,`${this.skin.railPx}px`),this.root.style.setProperty(`--divider`,this.skin.divider),this.root.style.setProperty(`--radius`,this.skin.radius),this.root.style.setProperty(`--outline`,this.skin.outline??this.skin.line),this.root.style.setProperty(`--chamfer`,this.skin.chamferPx>0?`polygon(${this.skin.chamferPx}px 0, calc(100% - ${this.skin.chamferPx}px) 0, 100% 100%, 0 100%)`:`none`);let r=Fu(`div`,`hud-band`);r.append(Bu(this.skin,`left`));let i=Fu(`div`,`hud-meters`),a=Fu(`div`,`hud-meter`);a.append(Iu(`HUMANS`)),this.humansTrough=Lu(t.humans.trough.pips),a.append(this.humansTrough.el),i.append(a);let o=Fu(`div`,`hud-meter`);o.append(Iu(t.meter.label)),this.divider=Fu(`div`,`hud-divider`);let s=[];t.meter.troughs.forEach((e,t)=>{t>0&&o.append(this.divider);let n=Lu(e.pips);s.push(n),o.append(n.el)}),this.meterTroughs=s,i.append(o),r.append(i,Bu(this.skin,`right`)),this.root.append(r);let c=Fu(`div`,`hud-island`);c.append(Vu(Hu())),this.alertEl=Vu(Uu()),this.alertEl.classList.add(`hud-alert`),c.append(this.alertEl),this.clockEl=Fu(`div`,`hud-time`),c.append(this.clockEl),this.root.append(c),this.bannerEl=Fu(`div`,`hud-banner`),this.onBannerTransitionEnd=e=>{e.propertyName===`opacity`&&!this.bannerEl.classList.contains(`shown`)&&(this.bannerEl.textContent=``)},this.bannerEl.addEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.append(this.bannerEl);let l=Fu(`div`,`hud-column`),u=Fu(`div`,`hud-collapse`);u.append(zu(this.skin.badge)),l.append(u,Fu(`div`,`hud-spine`));let d=Fu(`div`,`hud-cluster`);for(let e of t.commands){let t=document.createElement(`button`);t.className=`hud-button`,t.type=`button`,t.title=e.label,t.setAttribute(`aria-label`,e.label),t.innerHTML=Wu(e.id,this.skin),t.addEventListener(`click`,()=>this.onCommand(e.id)),this.buttons.set(e.id,t),d.append(t)}l.append(d),this.root.append(l),e.append(this.root),this.rescale(),this.onResize=()=>this.rescale(),window.addEventListener(`resize`,this.onResize),this.render(t)}dispose(){window.removeEventListener(`resize`,this.onResize),this.bannerEl.removeEventListener(`transitionend`,this.onBannerTransitionEnd),this.root.remove()}rescale(){let e=Math.max(.7,Math.min(1,window.innerWidth/ku));this.root.style.setProperty(`--hud-scale`,String(e))}render(e){Pu(this.humansTrough,e.humans.trough),e.meter.troughs.forEach((e,t)=>{let n=this.meterTroughs[t];n&&Pu(n,e)}),this.divider.classList.toggle(`lit`,e.meter.dividerLit),e.clock!==this.lastClock&&(this.clockEl.textContent=e.clock,this.lastClock=e.clock),e.alert!==this.lastAlert&&(this.alertEl.classList.toggle(`on`,e.alert),this.lastAlert=e.alert),e.banner!==this.lastBanner&&(e.banner!==null&&(this.bannerEl.textContent=e.banner),this.bannerEl.classList.toggle(`shown`,e.banner!==null),this.lastBanner=e.banner);for(let t of e.commands){let e=this.buttons.get(t.id);e&&(e.disabled=!t.enabled)}}};function Pu(e,t){e.pips.forEach((e,n)=>{let r=n<t.filled;e.classList.toggle(`on`,r),e.classList.toggle(`accent`,r&&t.accent)})}function Fu(e,t){let n=document.createElement(e);return n.className=t,n}function Iu(e){let t=Fu(`div`,`hud-label`);return t.textContent=e,t}function Lu(e){let t=Fu(`div`,`hud-trough`),n=[];for(let r=0;r<e;r++){let e=Fu(`i`,`hud-pip`);n.push(e),t.append(e)}return{el:t,pips:n}}function Ru(e,t,n){let r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${e} ${t}`),r.setAttribute(`width`,String(e)),r.setAttribute(`height`,String(t)),r.innerHTML=n,r}function zu(e){return Ru(e.width,e.height,e.inner)}function Bu(e,t){let n=zu(e.cap);return n.classList.add(`hud-cap`,t),n}function Vu(e){let t=Fu(`div`,`hud-plate`);return t.append(e),t}function Hu(){return Ru(22,22,`<circle cx="11" cy="11" r="8" fill="none" stroke="var(--on-plate)" stroke-width="2"/>
     <path d="M11 11 V5 A6 6 0 0 1 17 11 Z" fill="var(--on-plate)"/>`)}function Uu(){return Ru(22,22,`<rect x="9" y="4" width="4" height="9" rx="1.4" fill="currentColor"/>
     <rect x="8.5" y="15" width="5" height="3.2" rx="1" fill="currentColor"/>`)}function Wu(e,t){switch(e){case`primary`:return`<svg viewBox="0 0 ${t.primaryIcon.width} ${t.primaryIcon.height}"
        width="${Mu}" height="${Mu}">${t.primaryIcon.inner}</svg>`;case`regroup`:return Gu(`M12 11 L8.5 6.5 H10.8 V3 H13.2 V6.5 H15.5 Z`,`var(--warn)`,45);case`scatter`:return Gu(`M12 3 L15.5 7.5 H13.2 V11 H10.8 V7.5 H8.5 Z`,`var(--go)`,0);case`cancel`:return`<svg viewBox="0 0 24 24" width="${Mu}" height="${Mu}">
        <circle cx="12" cy="12" r="9" fill="var(--icon-stroke)" stroke="#ffffff" stroke-width="2"/>
        <path d="M8.4 8.4 L15.6 15.6 M15.6 8.4 L8.4 15.6" stroke="#ffffff" stroke-width="2.6"
              stroke-linecap="round"/>
      </svg>`}}function Gu(e,t,n){return`<svg viewBox="0 0 24 24" width="${Mu}" height="${Mu}">
    <g transform="rotate(${n} 12 12)">${[0,90,180,270].map(n=>`<path d="${e}" fill="${t}" stroke="var(--icon-stroke)" stroke-width="1.1" stroke-linejoin="round" transform="rotate(${n} 12 12)"/>`).join(``)}</g>
  </svg>`}var Ku=!1;function qu(){if(Ku)return;Ku=!0;let e=document.createElement(`style`);e.textContent=Ju,document.head.append(e)}var Ju=`
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
  gap: ${ju}px;
  align-items: stretch;
  height: 17px;
  padding: 2px 3px;
  background: var(--pip-off-gap);
  border: 1px solid rgba(255, 255, 255, 0.42);
}
.hud-pip {
  width: ${Au}px;
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
`;function Yu(e,t,n){if(!(t>0)||n<=0||e<=0)return 0;if(e>=t)return n;let r=Math.floor(e/t*n);return Math.min(Math.max(r,1),n-1)}function Xu(e){let t=Math.floor(e/30),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`}function Zu(e){let{segments:t,pipsPerSegment:n}=Oo,r=[];for(let i=0;i<t;i++){let t=e-i*n;r.push({pips:n,filled:Math.min(Math.max(Math.floor(t),0),n),accent:i>0})}return r}function Qu({world:e,selected:t,banner:n}){let r=ko[e.playerFaction],{humans:i,humansCap:a,charge:o,chargeCap:s}=e.resources,c=t>0;return{faction:r.id,factionName:r.name,humans:{value:i,cap:a,trough:{pips:Oo.humansPips,filled:Yu(i,a,Oo.humansPips),accent:!1}},meter:{label:r.meterLabel,value:o,cap:s,segmentsReady:e.resources.segmentsReady,troughs:Zu(o),dividerLit:o>Oo.pipsPerSegment},clock:Xu(e.tick),alert:e.army.units.some(e=>e.attackCooldown>0),selected:t,commands:[{id:`primary`,label:r.primaryOrder,enabled:r.id===`machines`&&c},{id:`regroup`,label:`Regroup — unresolved reading`,enabled:!1},{id:`scatter`,label:`Scatter — unresolved reading`,enabled:!1},{id:`cancel`,label:`Stop`,enabled:c}],banner:n}}function $u(e,t){if(!t)return{kind:`unable`};if(e.deployTimer>0){let t=Math.max(No,1);return{kind:`transitioning`,to:e.deployTarget,stepsLeft:e.deployTimer,progress:Math.min(Math.max(1-e.deployTimer/t,0),1)}}return e.deployed?{kind:`deployed`}:{kind:`mobile`}}function ed(e){return e.harvestingBuildingId===null?e.harvestingCrowdId===null?e.cargo>0?`Carrying ${Math.round(e.cargo)}`:e.unreachable?`Could not reach its goal`:e.path.length>0?`Moving`:null:`Harvesting a street crowd`:`Harvesting`}function td(e){let t=bs(e.typeId);return{typeId:t.id,name:t.name,faction:t.faction,role:t.role,cost:t.cost,health:{current:e.health,max:t.health},humansOnboard:t.faction===`machines`&&t.role===`harvester`?{current:e.cargo,max:60}:null,deployState:$u(e,!!t.canDeploy),activity:ed(e)}}function nd(e,t,n){let r=e.playerFaction;if(n&&e.army.typeOf(n).faction!==r)return{mode:`single`,faction:r,selectedCount:1,inspectOnly:!0,leader:td(n),tallies:[]};let i=t.list(),a=t.primary(),o=a===void 0?void 0:e.army.get(a);if(!o)return{mode:`none`,faction:r,selectedCount:0,inspectOnly:!1,leader:null,tallies:[]};let s=new Map;for(let t of i){let n=e.army.get(t);n&&s.set(n.typeId,(s.get(n.typeId)??0)+1)}let c=[...s.entries()].map(([e,t])=>({typeId:e,name:bs(e).name,count:t,isLeader:e===o.typeId})).sort((e,t)=>t.count-e.count||e.typeId.localeCompare(t.typeId));return{mode:i.length>1?`multi`:`single`,faction:r,selectedCount:i.length,inspectOnly:!1,leader:td(o),tallies:i.length>1?c:[]}}var rd={visible:!1,faction:`machines`,producer:{kind:`unit`,id:-1},title:``,state:``,humans:0,producesUnits:!1,producible:[],queue:[],tier2:{unlocked:!1,cost:Po.tier2Cost,affordable:!1},notice:null};function id(e,t,n){if(!t)return rd;let r=bs(t.typeId);if(!r.producesUnits&&!r.constructionTypes||r.faction!==e.playerFaction)return rd;let i=e.resources.humans,a=e.constructionSites.some(e=>e.builderId===t.id),o=r.constructionTypes?vs.filter(e=>r.constructionTypes?.includes(e.id)).map(t=>({action:`build`,typeId:t.id,name:t.name,cost:e.freeProduction?0:t.cost,seconds:Math.round((t.constructionSteps??0)/30),tier:t.tier,lockedByTier:!1,unaffordable:!e.freeProduction&&i<t.cost,enabled:!a&&(e.freeProduction||i>=t.cost)})):vs.filter(e=>r.productionTypes?.includes(e.id)??(e.faction===r.faction&&e.role!==`harbinger`&&!e.processesHumans&&!e.producesUnits)).map(n=>({action:`produce`,typeId:n.id,name:n.name,cost:e.freeProduction?0:n.cost,seconds:Math.round(n.buildSteps/30),tier:n.tier,lockedByTier:n.tier>e.techTier,unaffordable:!e.freeProduction&&i<n.cost,enabled:n.tier<=e.techTier&&(e.freeProduction||i>=n.cost)&&t.deployed&&t.deployTimer===0})).sort((e,t)=>e.tier-t.tier||e.cost-t.cost);return{visible:!0,faction:r.faction,producer:{kind:`unit`,id:t.id},title:r.constructionTypes?`${r.name} — Build`:r.name,state:r.constructionTypes?a?`SUMMONING STRUCTURE`:`CONSTRUCTION AVAILABLE`:t.deployTimer>0?t.deployTarget?`DEPLOYING`:`PACKING UP`:t.deployed?t.queue.length?`DEPLOYED · PRODUCING`:`DEPLOYED`:`MOBILE — CANNOT PRODUCE`,humans:i,producesUnits:!0,producible:o,queue:t.queue.map((e,t)=>({typeId:e.typeId,name:bs(e.typeId).name,progress:t===0?1-e.remainingSteps/Math.max(bs(e.typeId).buildSteps,1):0,secondsLeft:e.remainingSteps/30})),tier2:{unlocked:e.techTier>=2,cost:Po.tier2Cost,affordable:i>=Po.tier2Cost},notice:n}}function ad(e){return e.winner?e.winner===e.playerFaction?{title:`VICTORY`,body:`The ${ko[Do(e.winner)].name} Harbinger is destroyed. The shard is yours.`,tone:`won`}:{title:`DEFEAT`,body:`Your Harbinger is destroyed. The ${ko[e.winner].name} hold the shard.`,tone:`lost`}:{title:`STALEMATE`,body:`Both Harbingers fell on the same step. Neither side can command what is left.`,tone:`drawn`}}var od={machines:[`Humans in, Progress out. We don't do feelings, we do throughput.`,`Collect. Convert. Repeat. It's not cruelty, it's an assembly line.`,`No detours, no snacking. Just humans on a conveyor belt to somewhere worse.`,`Efficiency is a love language.`],ancients:[`Chant a little, eat a lot.`,`Every summoning circle doubles as a dinner table.`,`The stars aligned. So did our appetite.`,`Insanity is a side effect. Also the main course.`]};function sd(e){let t=od[e];return t[Math.floor(Math.random()*t.length)]}var cd={machines:`ENERGY`,ancients:`INSANITY`},ld=class{root;constructor(e,t){gd(),this.root=ud(`div`,`menu`),this.root.append(md());let n=ud(`div`,`menu-panel`),r=document.createElement(`h1`);r.className=`menu-title`,r.innerHTML=`HUMAN<br>RESOURCES`,n.append(r);let i=ud(`div`,`menu-tagline`);i.append(ud(`span`,`menu-rule`));let a=ud(`span`,``);a.textContent=`Choose your apocalypse`,i.append(a),n.append(i);let o=ud(`div`,`menu-columns`),s=ud(`div`,`menu-cards`);for(let e of[`machines`,`ancients`])s.append(this.buildCard(e,t.onStart));o.append(s),o.append(this.buildActions(t)),n.append(o),this.root.append(n),e.append(this.root)}buildCard(e,t){let n=ko[e],r=ul[e],i=document.createElement(`button`);i.type=`button`,i.className=`menu-card`,i.dataset.faction=e,i.style.setProperty(`--card-line`,r.line),i.style.setProperty(`--card-font`,r.font),i.style.setProperty(`--card-pip-on`,r.pipOn),i.style.setProperty(`--card-pip-gap`,r.pipGap),i.style.setProperty(`--card-pip-off`,r.pipOff),i.style.setProperty(`--card-accent`,r.accent),e===`ancients`?(i.style.setProperty(`--card-fill`,r.plate),i.style.setProperty(`--card-ink`,`#4a3520`),i.style.setProperty(`--card-body`,`#20180e`),i.style.setProperty(`--card-label`,`#2f2214`)):(i.style.setProperty(`--card-fill`,`rgba(20, 26, 24, 0.55)`),i.style.setProperty(`--card-ink`,`#f2fff6`),i.style.setProperty(`--card-body`,`#dff3ea`),i.style.setProperty(`--card-label`,r.line));let a=ud(`div`,`menu-card-head`),o=ud(`div`,`menu-card-name`);o.textContent=n.name,a.append(o,pd(e)),i.append(a);let s=ud(`div`,`menu-card-meter`),c=ud(`span`,`menu-card-meter-label`);c.textContent=cd[e],s.append(c,fd(8,e===`ancients`?6:5,e===`ancients`?2:0)),i.append(s);let l=ud(`div`,`menu-card-copy`);return l.textContent=sd(e),i.append(l),i.addEventListener(`click`,()=>t(e)),i}buildActions(e){let t=ud(`nav`,`menu-actions`);if(e.saved){let n=ko[e.saved.faction];t.append(dd(`Resume`,`${n.name} · ${e.saved.clock}`,e.onResume))}let n=e.slotCount??0;if(n>0&&t.append(dd(`Select save`,n===1?`1 slot`:`${n} slots`,e.onSelectSave)),t.append(dd(`Settings`,``,e.onSettings)),e.onExit&&t.append(dd(`Exit`,``,e.onExit,`quiet`)),!e.saved&&n===0){let e=ud(`div`,`menu-note`);e.textContent=`No saved match`,t.prepend(e)}return t}dispose(){this.root.remove()}};function ud(e,t){let n=document.createElement(e);return n.className=t,n}function dd(e,t,n,r=``){let i=document.createElement(`button`);i.type=`button`,i.className=r?`menu-action ${r}`:`menu-action`;let a=ud(`span`,`menu-action-label`);a.textContent=e;let o=ud(`span`,`menu-action-meta`);return o.textContent=t,i.append(a,o),i.addEventListener(`click`,n),i}function fd(e,t,n){let r=ud(`div`,`menu-trough`);for(let i=0;i<e;i++){let e=ud(`i`,`menu-pip`);i<t&&e.classList.add(n>0&&i>=t-n?`accent`:`on`),r.append(e)}return r}function pd(e){let t=ul[e],n=t.cap,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,e===`ancients`?`78`:`92`),r.setAttribute(`height`,e===`ancients`?`42`:`52`),r.classList.add(`menu-card-cap`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function md(){let e=[34,52,41,68,47,82,58,39,71,50,88,44,63,36,76,55,42,66,48,80],t=100/e.length,n=e.map((e,n)=>`<rect x="${n*t}" y="${100-e}" width="${t+.3}" height="${e}"/>`).join(``),r=ud(`div`,`menu-skyline`);return r.innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <g fill="#050302">${n}</g>
  </svg>`,r}var hd=!1;function gd(){if(hd)return;hd=!0;let e=document.createElement(`style`);e.textContent=_d,document.head.append(e)}var _d=`
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
`;function vd(e,t,n){if(t<1)throw Error(`A dialog needs at least one action`);return(e+n+t)%t}var yd=[[`Pan`,`WASD / arrows · middle drag`],[`Zoom`,`wheel`],[`Select · box select`,`left drag`],[`Move order`,`right click`],[`Attack-move`,`A, then left click`],[`Add to selection`,`shift + click`],[`Control group`,`shift + digit`],[`Clear selection · exit`,`Esc`],[`Stop`,`Q`],[`Destroy selected units`,`Delete`],[`Select idle harvesters`,`F`],[`Center on Harbinger`,`C`],[`Quick save · load`,`F5 · F9`]],bd=class{root;constructor(e,t,n){Id(),this.root=wd(`SETTINGS`);let r=$(`div`,`fe-body`);r.append(Td(`Machines colour`,`Recolours Machine units and structures. Applies to your next match.`,Ed(`machines`,t.colourVariant.machines,n.onColourVariant)),Td(`Ancients colour`,`Recolours Ancient units and structures. Applies to your next match.`,Ed(`ancients`,t.colourVariant.ancients,n.onColourVariant)),Td(`Diagnostic overlay`,`fps, sim Hz, blocked and stalled counts, nav reachability probe.`,Od(t.overlayVisible,n.onToggleOverlay)),Td(`City lighting`,`Warm directional sunlight and cool ambient fill. Off restores the original even lighting rig.`,Od(t.cityLighting,n.onToggleCityLighting)),Td(`Enhanced shadows`,`Soft mapped shadows on city geometry. Off restores the original projected-shadow treatment.`,Od(t.enhancedShadows,n.onToggleEnhancedShadows)),Td(`Ambient occlusion`,`Subtle local darkening at building bases and in narrow city gaps.`,Od(t.ambientOcclusion,n.onToggleAmbientOcclusion)));let i=$(`section`,`fe-section`),a=$(`div`,`fe-row-title`);a.textContent=`Controls`;let o=$(`div`,`fe-row-sub`);o.textContent=`Reference only. Rebinding needs an options system that does not exist yet.`;let s=$(`div`,`fe-controls`);for(let[e,t]of yd){let n=$(`div`,`fe-control`),r=$(`span`,``);r.textContent=e;let i=$(`span`,`fe-keys`);i.textContent=t,n.append(r,i),s.append(n)}i.append(a,o,s),r.append(i),this.root.append(r,Pd(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},xd=class{root;constructor(e,t,n){Id(),this.root=wd(`SELECT SAVE`,t.length===1?`1 SLOT`:`${t.length} SLOTS`);let r=$(`div`,`fe-slots`);if(t.length===0){let e=$(`div`,`fe-empty`);e.textContent=`No saved matches`,r.append(e)}t.forEach((e,t)=>r.append(kd(e,t===0,n)));let i=$(`p`,`fe-note`);i.textContent=`One slot for now: F5 always writes “quick”. Naming and multiple slots need a keyed-slot scheme in saveStore.ts — the envelope in sim/save.ts does not need to change.`,this.root.append(r,i,Pd(n.onBack)),e.append(this.root)}dispose(){this.root.remove()}},Sd=class{root;onKey;constructor(e,t,n){Id(),this.root=$(`div`,`fe-scrim`);let r=$(`div`,`fe-dialog`),i=$(`h2`,`fe-dialog-title`);i.textContent=`ABANDON MATCH?`;let a=$(`p`,`fe-dialog-body`);a.textContent=`Returns to the title screen. The match is not saved unless you save it first.`;let o=$(`p`,`fe-dialog-meta`);o.textContent=t?`Last quick save: ${t}`:`No quick save in this session.`;let s=$(`div`,`fe-dialog-actions`),c=[Nd(`Save and exit`,`primary`,n.onSaveAndExit),Nd(`Exit anyway`,`danger`,n.onExitAnyway),Nd(`Cancel`,`ghost`,n.onCancel)];s.append(...c),r.append(i,a,o,s),this.root.append(r),e.append(this.root);let l=c.length-1,u=(e,t=!1)=>{c[l]?.classList.remove(`selected`),l=e;let n=c[l];if(!n)throw Error(`Exit confirmation has no selected action`);n.classList.add(`selected`),t&&n.focus({preventScroll:!0})};for(let[e,t]of c.entries())t.addEventListener(`pointerenter`,()=>u(e)),t.addEventListener(`focus`,()=>u(e));u(l,!0),this.onKey=e=>{e.key===`ArrowLeft`||e.key===`ArrowRight`?(e.preventDefault(),u(vd(l,c.length,e.key===`ArrowLeft`?-1:1),!0)):e.key===`Enter`?(e.preventDefault(),e.repeat||c[l]?.click()):e.key===`Escape`&&(e.preventDefault(),n.onCancel())},window.addEventListener(`keydown`,this.onKey)}dispose(){window.removeEventListener(`keydown`,this.onKey),this.root.remove()}},Cd=class{root;constructor(e,t,n){Id(),this.root=$(`div`,`fe-scrim`);let r=ad(t),i=$(`div`,r.tone===`drawn`?`fe-dialog`:`fe-dialog ${r.tone}`),a=$(`div`,`fe-end-head`),o=$(`h2`,`fe-dialog-title fe-end-title`);o.textContent=r.title,a.append(o);let s=$(`p`,`fe-dialog-body`);s.textContent=r.body;let c=$(`div`,`fe-dialog-actions`);c.append(Nd(`Play again`,`primary`,n.onPlayAgain),Nd(`Back to menu`,`ghost`,n.onBackToMenu)),i.append(a,s,c),this.root.append(i),e.append(this.root)}dispose(){this.root.remove()}};function $(e,t){let n=document.createElement(e);return n.className=t,n}function wd(e,t=``){let n=$(`div`,`fe`),r=$(`div`,`fe-head`),i=document.createElement(`h1`);if(i.className=`menu-title fe-title`,i.textContent=e,r.append(i),t){let e=$(`span`,`fe-head-meta`);e.textContent=t,r.append(e)}return n.append(r),n}function Td(e,t,n){let r=$(`div`,`fe-row`),i=$(`div`,``),a=$(`div`,`fe-row-title`);a.textContent=e;let o=$(`div`,`fe-row-sub`);return o.textContent=t,i.append(a,o),r.append(i,n),r}function Ed(e,t,n){let r=$(`div`,`fe-swatches`);return lt(e).forEach((i,a)=>{let o=a,s=document.createElement(`button`);s.type=`button`,s.className=t===o?`fe-swatch on`:`fe-swatch`,s.style.setProperty(`--swatch-colour`,Dd(i)),s.setAttribute(`aria-label`,`${ko[e].name} colour option ${a+1}`),s.addEventListener(`click`,()=>n(e,o)),r.append(s)}),r}function Dd(e){return`#${e.toString(16).padStart(6,`0`)}`}function Od(e,t){let n=document.createElement(`button`);return n.type=`button`,n.className=e?`fe-switch on`:`fe-switch`,n.setAttribute(`role`,`switch`),n.setAttribute(`aria-checked`,String(e)),n.append($(`span`,`fe-switch-knob`)),n.addEventListener(`click`,()=>t(!e)),n}function kd(e,t,n){let r=$(`div`,e.readable?t?`fe-slot primary`:`fe-slot`:`fe-slot broken`),i=$(`div`,`fe-slot-badge`);e.readable&&e.faction?(i.dataset.faction=e.faction,i.style.setProperty(`--badge-line`,ul[e.faction].line),i.append(jd(e.faction))):i.textContent=`!`;let a=$(`div`,`fe-slot-text`),o=$(`div`,`fe-slot-name`);o.textContent=e.readable&&e.faction?`${ko[e.faction].name} — ${e.slot}`:`Unreadable — ${e.slot}`;let s=$(`div`,`fe-slot-meta`);return s.textContent=e.readable?`${e.clock} · tick ${e.tick.toLocaleString(`en-GB`)} · saved ${Md(e.savedAtMs)}`:`Written by an older build. Old versions are refused, not migrated.`,a.append(o,s),r.append(i,a),e.readable&&r.append(Nd(`Load`,t?`primary`:`ghost`,()=>n.onLoad(e.slot))),r.append(Ad(()=>n.onDelete(e.slot))),r}function Ad(e){let t=document.createElement(`button`);t.type=`button`,t.className=`fe-button icon`,t.title=`Delete this save`,t.textContent=`×`;let n=!1,r=()=>{n&&(n=!1,t.classList.remove(`armed`),t.textContent=`×`,t.title=`Delete this save`)};return t.addEventListener(`click`,()=>{if(n){e();return}n=!0,t.classList.add(`armed`),t.textContent=`Delete?`,t.title=`Click again to delete`}),t.addEventListener(`pointerleave`,r),t.addEventListener(`blur`,r),t}function jd(e){let t=ul[e],n=t.primaryIcon,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,`44`),r.setAttribute(`height`,`44`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function Md(e){let t=Math.max(0,Math.round((Date.now()-e)/1e3));if(t<60)return`just now`;let n=Math.round(t/60);if(n<60)return`${n} minute${n===1?``:`s`} ago`;let r=Math.round(n/60);if(r<24)return`${r} hour${r===1?``:`s`} ago`;let i=Math.round(r/24);return i===1?`yesterday`:`${i} days ago`}function Nd(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=`fe-button ${t}`,r.textContent=e,r.addEventListener(`click`,n),r}function Pd(e){let t=$(`div`,`fe-footer`);return t.append(Nd(`Back`,`ghost`,e)),t}var Fd=!1;function Id(){if(Fd)return;Fd=!0;let e=document.createElement(`style`);e.textContent=_d+Ld,document.head.append(e)}var Ld=`
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
`,Rd=class{windowSize;samples=[];constructor(e=90){this.windowSize=e}add(e){e<=0||!Number.isFinite(e)||(this.samples.push(e),this.samples.length>this.windowSize&&this.samples.shift())}get sampleCount(){return this.samples.length}get fps(){if(this.samples.length===0)return 0;let e=this.samples.reduce((e,t)=>e+t,0);return this.samples.length/e*1e3}get worstFrameMs(){return this.samples.length===0?0:Math.max(...this.samples)}get medianFrameMs(){if(this.samples.length===0)return 0;let e=[...this.samples].sort((e,t)=>e-t);return e[Math.floor(e.length/2)]??0}get missedVsyncCount(){let e=this.medianFrameMs;if(e<=0)return 0;let t=e*1.5,n=0;for(let e of this.samples)e>t&&n++;return n}},zd=60,Bd=[{id:`dev-controls`,label:`Dev Controls`},{id:`statistics`,label:`Statistics`}],Vd=class{el;activeTab=`dev-controls`;constructor(e){this.el=e,this.el.addEventListener(`pointerdown`,e=>{let t=e.target?.closest(`[data-overlay-tab]`);!t||!Hd(t.dataset.overlayTab)||(this.setActiveTab(t.dataset.overlayTab),t.focus())})}render(e,t){let n=t.medianFrameMs>0?1e3/t.medianFrameMs:0,r=t.missedVsyncCount,i=r>0?`${r} missed vsync / ${t.sampleCount} frames`:n>=59?`meets ${zd} fps target`:`vsync-limited at ~${n.toFixed(1)} Hz`,a=e.groups.length>0?e.groups.join(`,`):`—`,[o=``,s=``,c=``,l=``,u=``,d=``,f=``,p=``]=[`<b>HUMAN RESOURCES</b>  ${e.battlefield?`BATTLE PLAYGROUND`:`M5`} · playing ${e.faction}`,``,`render     ${e.fps.toFixed(1)} fps  (${i})`,`frame      median ${t.medianFrameMs.toFixed(1)} ms · worst ${t.worstFrameMs.toFixed(1)} ms`,...e.detailed?[`detailed  ${e.detailed.drawCalls} draw calls · ${e.detailed.triangles.toLocaleString()} triangles`,`models    ${e.detailed.units.loadedModels} loaded · ${e.detailed.units.loadingModels} loading · ${e.detailed.units.failedModels} failed`,`detail    ${e.detailed.units.visible} visible · ${e.detailed.units.selection} selection · ${e.detailed.units.occlusion} occlusion · ${e.detailed.units.fallbacks} fallback`]:[],`sim        ${e.simHz.toFixed(2)} Hz   step ${e.stepCount}`,`alpha      ${e.alpha.toFixed(3)}`,`dropped    ${e.droppedMs.toFixed(0)} ms sim time`,``,`units      ${e.units}   moving ${e.unitsMoving}   selected ${e.selected}`,`blocked    ${e.unitsBlocked}   stalled ${e.unitsStalled}   short of goal ${e.unitsUnreached}`,`groups     ${a}`,`paths      ${e.pathsTotal} searched · ${e.pathsQueued} queued`,``,`nav        ${e.navCells} cells   ${e.navRebuilds} local rebuilds`,`rebuild    ${e.navLastRebuildCells} cells in ${e.navRebuildMs.toFixed(2)} ms`,`passable   small ${(e.smallPassable*100).toFixed(1)}% · large ${(e.largePassable*100).toFixed(1)}%`,`  strict   small ${(e.smallPassableStrict*100).toFixed(1)}% · large ${(e.largePassableStrict*100).toFixed(1)}%`,`           (large passes residential + commercial, so it reads above small; strict counts`,`            only ground with no building on it)`,`reach      small ${(e.reachSmall*100).toFixed(1)}% · large ${(e.reachLarge*100).toFixed(1)}% of the shard`,`  strict   large ${(e.reachLargeStrict*100).toFixed(1)}%   (the share razing still opens — spec §15.4 criterion 5)`,`at focus   small ${Ud(e.atFocusSmall)} · large ${Ud(e.atFocusLarge)}`,`           (measured where the camera was when last probed — P re-probes)`,``,`camera     ${e.distance.toFixed(0)} m   pitch ${e.pitchDeg.toFixed(1)}°`,`zoom       ${(e.zoomFraction*100).toFixed(0)}%`,`focus      x ${e.focusX.toFixed(0)}  z ${e.focusZ.toFixed(0)}`,``,`city       ${e.cityBuildings} buildings   seed ${e.seed}`,`state      intact ${e.cityIntact} · damaged ${e.cityDamaged} · rubble ${e.cityRubble}`,`population ${Math.round(e.populationRemaining)} / ${e.populationTotal} humans left in the city`,`displaced  ${Math.round(e.civilianHumans)} humans in the street · ${e.civilianCrowds} crowds`,`           (damage must move humans here, not delete them)`,`           building occupancy indicators ${e.populationLabels?`on`:`off`}   (I toggles; harvester selection)`,``,`humans     ${Math.floor(e.humans)} / ${e.humansCap}   ${e.humansPerMinute.toFixed(0)}/min`,`charge     ${Math.floor(e.charge)} / ${e.chargeCap} pips · ${e.chargeSegments} banked   ${e.chargePerMinute.toFixed(1)}/min`,`in transit ${Math.round(e.cargoInTransit)} carried   ${e.harvesting} harvesting · ${e.harvestIdle} idle`,`           (Machines sawtooth as they haul · Ancient Ones must read 0)`,`           (idle = standing order, nothing within retarget range)`,`tech       tier ${e.techTier}   ${e.structures} structures   ${e.queued} queued`,`deployed   ${e.unitsDeployed} settled · ${e.unitsDeploying} transforming`,``,`WASD pan · wheel zoom · drag select · right-click move`,`shift+click add · digit recall group · shift+digit assign`,`X damage nearest · Z raze at focus · B cycle all states · P re-probe`,`select harvester · click building to harvest · E harvest at focus`,`R deploy selected · V deploy factory`,`L produce Tier 1 · G produce Tier 2 · T unlock Tier 2`,`H +humans · J +charge   (debug tuning)`,`O hand player side to AI · shift+O opponent · K cycle simulation speed`,`[ previous seed · ] next seed`,`F5 quick save · F9 quick load`,`Y cycle observed faction`].join(`
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

`);this.el.innerHTML=[`<div class="overlay-heading">${o}</div>`,`<div class="overlay-tabs" role="tablist" aria-label="Diagnostic categories">`,...Bd.map(e=>`<button class="overlay-tab" type="button" role="tab" id="overlay-tab-${e.id}" aria-controls="overlay-panel-${e.id}" aria-selected="${e.id===this.activeTab}" tabindex="${e.id===this.activeTab?0:-1}" data-overlay-tab="${e.id}">${e.label}</button>`),`</div>`,this.panel(`dev-controls`,y),this.panel(`statistics`,b)].join(``)}panel(e,t){return`<section class="overlay-tab-panel" role="tabpanel" id="overlay-panel-${e}" aria-labelledby="overlay-tab-${e}"${e===this.activeTab?``:` hidden`}><pre class="overlay-readout">${t}</pre></section>`}setActiveTab(e){this.activeTab=e;for(let t of this.el.querySelectorAll(`[data-overlay-tab]`)){let n=t.dataset.overlayTab===e;t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1}for(let t of this.el.querySelectorAll(`.overlay-tab-panel`))t.hidden=t.id!==`overlay-panel-${e}`}};function Hd(e){return Bd.some(t=>t.id===e)}function Ud(e){return e?`reachable`:`no route`}function Wd(e,t){return e===`building`?t>=.16?`block`:e:e===`block`?t<.14?`building`:t>=.65?`district`:e:t<.6?`block`:e}function Gd(e,t){let n=n=>{let r=new Map;for(let i of e.buildings){if((t[i.id]??0)<=0)continue;let e=n===`block`?i.blockId:i.districtId;if(e===void 0)continue;let a=r.get(e);a?a.push(i.id):r.set(e,[i.id])}return[...r].map(([r,i])=>{if(n===`block`){let t=e.get(i[0]??-1),n=e.blocks.find(e=>e.id===r&&(!t||Vi(t.x,t.z,e.clip??[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}])));if(n)return{id:r,...n.clip?ha(n.clip):{x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2},buildingIds:i}}let a=0,o=0,s=0;for(let n of i){let r=e.get(n),i=t[n]??0;!r||i<=0||(a+=r.x*i,o+=r.z*i,s+=i)}return{id:r,x:a/s,z:o/s,buildingIds:i}})};return{block:n(`block`),district:n(`district`)}}var Kd=15e3,qd=5e3,Jd=class{city;population;capacity;root;labels=new Map;visibleKeys=new Set;blockGroups;districtGroups;point=new W;visible=!1;pinned=!1;level=`building`;presentationDirty=!0;populationDirty=!0;lastRetireCheckMs=-1/0;constructor(e,t,n,r,i){this.city=t,this.population=n,this.capacity=r,Xd(),this.root=document.createElement(`div`),this.root.className=`population-labels`,this.root.style.setProperty(`--population-accent`,ul[i].line);let a=Gd(t,r);this.blockGroups=a.block,this.districtGroups=a.district,e.append(this.root)}createLabel(e){let t=document.createElement(`span`);t.className=`population-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`population-label-count`;let r=document.createElement(`span`);r.className=`population-label-bar`;let i=document.createElement(`span`);i.className=`population-label-bar-fill`,r.append(i),t.append(n,r),this.root.append(t);let a={label:t,count:n,fill:i,left:null,top:null,text:null,width:null,lastRelevantMs:-1/0};return this.labels.set(e,a),a}get enabled(){return this.visible||this.pinned}setFaction(e){this.root.style.setProperty(`--population-accent`,ul[e].line)}toggle(){this.pinned=!this.pinned,this.updateVisibility()}setSelectionEnabled(e){this.visible!==e&&(this.visible=e,this.updateVisibility())}updateVisibility(){let e=this.enabled;this.root.classList.toggle(`shown`,e),this.presentationDirty=!0,e||this.discardLabels()}sync({camera:e,zoomFraction:t,nowMs:n,cameraDirty:r,populationDirty:i}){if(!this.enabled)return;this.populationDirty||=i;let a=Wd(this.level,t),o=a!==this.level;if(this.level=a,!this.presentationDirty&&!o&&!r&&!this.populationDirty)return;this.presentationDirty=!1,this.populationDirty=!1,e.updateMatrixWorld();let s=new Set;if(this.level===`building`)for(let t of this.city.buildings){if((this.capacity[t.id]??0)<=0)continue;let r=ol(t);this.syncLabel(`building:${t.id}`,t.x,r+5,t.z,[t.id],e,n,s)}else{let t=this.level===`block`?this.blockGroups:this.districtGroups;for(let r of t)this.syncLabel(`${this.level}:${r.id}`,r.x,8,r.z,r.buildingIds,e,n,s)}this.hideNoLongerVisible(s),this.visibleKeys.clear();for(let e of s)this.visibleKeys.add(e);this.retireIrrelevant(n)}syncLabel(e,t,n,r,i,a,o,s){if(this.point.set(t,n,r).project(a),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04))return;let c=0,l=0;for(let e of i)c+=this.population[e]??0,l+=this.capacity[e]??0;if(c<=0)return;let u=this.labels.get(e)??this.createLabel(e),d=`${(this.point.x*.5+.5)*100}%`,f=`${(-this.point.y*.5+.5)*100}%`,p=`HUMANS  ${Math.ceil(c)}`,m=`${Math.min(100,Math.max(0,c/Math.max(1,l)*100))}%`;u.left!==d&&(u.label.style.left=d,u.left=d),u.top!==f&&(u.label.style.top=f,u.top=f),u.text!==p&&(u.count.textContent=p,u.text=p),u.width!==m&&(u.fill.style.width=m,u.width=m),u.label.hidden&&(u.label.hidden=!1),u.lastRelevantMs=o,s.add(e)}hideNoLongerVisible(e){for(let t of this.visibleKeys){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}discardLabels(){this.root.replaceChildren(),this.labels.clear(),this.visibleKeys.clear()}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<qd)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleKeys.has(t)||e-n.lastRelevantMs<Kd||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleKeys.clear()}},Yd=!1;function Xd(){if(Yd)return;Yd=!0;let e=document.createElement(`style`);e.textContent=`
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
`,document.head.append(e)}var Zd=128,Qd=48,$d=96,ef=16,tf=.45,nf=.6,rf=.6,af=25;function of(e){let t=e.filter(e=>e>0).sort((e,t)=>e-t);return t.length===0?1:t[Math.floor((t.length-1)*.75)]}function sf(e,t){return Math.max(0,e)/Math.max(1,t)}function cf(e,t){return Math.max(0,Math.min(1,1-Math.exp(-sf(e,t))))}function lf(e){let t=new z(672498),n=new z(386795),r=new z(16765965),i=new z(16718341),a=Math.max(0,Math.min(1,e));return(a<.33?t.lerp(n,a/.33):a<.66?n.lerp(r,(a-.33)/.33):r.lerp(i,(a-.66)/.34)).getHex()}function uf(e,t){return Math.max(14,Math.max(e,t)*.45+7)}function df(e,t,n){return n.some(n=>(n.x-e)**2+(n.z-t)**2<=200**2)}function ff(){return new w({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
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
    `})}function pf(){return new w({transparent:!0,depthWrite:!1,depthTest:!0,side:2,vertexShader:`
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
    `})}function mf(e,t){return new w({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:0,uniforms:{uScans:{value:e},uScanCount:t},vertexShader:`
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
      uniform vec4 uScans[${ef}];
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
        for (int index = 0; index < ${ef}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${af.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float texture = 0.94 + 0.06 * sin(point.x * 0.17 + point.y * 0.11);
        gl_FragColor = vec4(palette(vHeat) * texture, ${tf.toFixed(2)} * coverage);
      }
    `})}function hf(e,t,n,r,i=!1){return new w({transparent:!0,depthWrite:!1,depthTest:!0,...i?{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}:{},side:i?2:0,uniforms:{uSources:{value:e},uScans:{value:t},uSourceCount:n,uScanCount:r},vertexShader:`
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
      uniform vec4 uSources[${$d}];
      uniform vec4 uScans[${ef}];
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
        for (int index = 0; index < ${ef}; index++) {
          if (index >= uScanCount) break;
          vec4 scan = uScans[index];
          if (scan.w <= 0.0) continue;
          float distanceToScanner = distance(point, scan.xy);
          coverage = max(coverage, 1.0 - smoothstep(scan.z - ${af.toFixed(1)}, scan.z, distanceToScanner));
        }
        if (coverage <= 0.001) discard;
        float field = 0.0;
        for (int index = 0; index < ${$d}; index++) {
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
        gl_FragColor = vec4(palette(heat) * texture, ${tf.toFixed(2)} * coverage);
      }
    `})}var gf=class{city;cityView;population;group=new J;continuousSources=Array.from({length:$d},()=>new Ve);continuousScans=Array.from({length:ef},()=>new Ve);continuousSourceCount={value:0};continuousScanCount={value:0};buildingContinuousSources=[];continuousSourceScratch=[];groundMaterial=hf(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount);buildingMaterial=mf(this.continuousScans,this.continuousScanCount);clippedBuildingMaterial=hf(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);rubbleBuildingMaterial=hf(this.continuousSources,this.continuousScans,this.continuousSourceCount,this.continuousScanCount,!0);ground;buildingOverlays=new Map;buildingHeatAttributes=new Map;crowdGeometry=new G(1,32).rotateX(-Math.PI/2);crowdHeat=new N(new Float32Array(Qd),1);crowds;rings=new g(new ke(175,200,96).rotateX(-Math.PI/2),pf(),Zd);ringMatrix=new Pe;crowdMatrix=new Pe;buildingMatrix=new Pe;heatReferencePopulation;lastHarvesterSignature=``;buildingOverlayDirty=!0;constructor(e,t,n,r){this.city=e,this.cityView=t,this.population=n,this.heatReferencePopulation=of(r),this.rubbleBuildingMaterial.depthTest=!1,this.rubbleBuildingMaterial.side=0,this.ground=new V(new D(this.city.radius*2,this.city.radius*2).rotateX(-Math.PI/2),this.groundMaterial),this.ground.position.y=Q+.24,this.ground.frustumCulled=!1,this.ground.renderOrder=0,this.crowdGeometry.setAttribute(`instanceHeat`,this.crowdHeat),this.crowds=new g(this.crowdGeometry,ff(),Qd),this.crowds.count=0,this.crowds.frustumCulled=!1,this.rings.count=0,this.rings.frustumCulled=!1,this.crowds.renderOrder=3,this.rings.renderOrder=2,this.group.add(this.ground,this.rings,this.crowds),this.syncBuildingOverlays();let i=this.cityView.buildingDamageHeatmapSources,a=i.find(e=>e.name===`destroyed-heatmap-parts`),o=i.find(e=>e.name===`destroyed-rubble-heatmap`);a&&(a.material.dispose(),a.material=this.clippedBuildingMaterial),o&&(o.material.dispose(),o.material=this.rubbleBuildingMaterial),this.group.add(...i),this.buildingOverlayDirty=!1}sync(e,t,n,r,i){i&&(this.buildingOverlayDirty=!0);let a=e.slice(0,16),o=a.length>0;if(this.group.visible=o,!o)return;let s=a.map(e=>`${e.id}:${e.x}:${e.z}`).join(`|`),c=s!==this.lastHarvesterSignature,l=c||r||i;this.lastHarvesterSignature=s,this.buildingOverlayDirty&&=(this.syncBuildingOverlays(),!1),c&&(this.syncRings(a),this.syncScans(a)),l&&(this.syncBuildingHeat(a),this.syncBuildingContinuousSources(a)),this.syncContinuousGround(t,n),this.syncCrowds(a,t,n)}dispose(){this.ground.geometry.dispose(),this.groundMaterial.dispose(),this.buildingMaterial.dispose(),this.clippedBuildingMaterial.dispose(),this.rubbleBuildingMaterial.dispose(),this.buildingHeatAttributes.clear();for(let[e,t]of this.buildingOverlays)t.geometry!==e.geometry&&t.geometry.dispose();this.buildingOverlays.clear(),this.crowdGeometry.dispose(),this.crowds.material.dispose(),this.rings.geometry.dispose(),this.rings.material.dispose()}syncBuildingOverlays(){let e=this.cityView.buildingHeatmapSources,t=new Set(e);for(let[e,n]of this.buildingOverlays)t.has(e)||(n.removeFromParent(),n.geometry!==e.geometry&&n.geometry.dispose(),n instanceof g&&this.buildingHeatAttributes.delete(n),this.buildingOverlays.delete(e));for(let t of e){let e=this.buildingOverlays.get(t);if(e){let n=t instanceof g&&this.cityView.buildingHeatmapInstanceIds.has(t);n&&e.geometry.userData.heatmapSource!==t.geometry?(e.geometry.dispose(),e.geometry=t.geometry.clone(),e.geometry.userData.heatmapSource=t.geometry):n||(e.geometry=t.geometry);continue}let n=t instanceof g&&this.cityView.buildingHeatmapInstanceIds.has(t),r=n?this.buildingMaterial:this.clippedBuildingMaterial,i=t instanceof g?new g(n?t.geometry.clone():t.geometry,r,t.instanceMatrix.count):new V(t.geometry,r);n&&(i.geometry.userData.heatmapSource=t.geometry),i instanceof g&&t instanceof g&&(n?(i.geometry.userData.heatmapSource=t.geometry,i.count=0):(i.instanceMatrix=t.instanceMatrix,i.count=t.count)),i.frustumCulled=!1,i.renderOrder=1,this.buildingOverlays.set(t,i),this.group.add(i)}}syncBuildingHeat(e){let t=new Map,n=new Set;for(let[t,n]of this.cityView.buildingHeatmapInstanceIds){let r=this.buildingOverlays.get(t);if(!(r instanceof g))continue;let i=this.buildingHeatAttributes.get(r);(!i||i.count!==r.instanceMatrix.count)&&(i=new N(new Float32Array(r.instanceMatrix.count),1),this.buildingHeatAttributes.set(r,i)),r.geometry.setAttribute(`instanceHeat`,i);let a=0;for(let o=0;o<n.length;o++){let s=n[o],c=this.city.get(s),l=this.population[s]??0;!c||c.state===`rubble`||!df(c.x,c.z,e)||(t.getMatrixAt(o,this.buildingMatrix),r.setMatrixAt(a,this.buildingMatrix),i.setX(a,cf(l,this.heatReferencePopulation)),a++)}r.count=a,r.instanceMatrix.needsUpdate=!0,i.needsUpdate=!0}for(let r of this.city.buildings){let i=this.population[r.id]??0;if(df(r.x,r.z,e)){if(r.state===`rubble`){n.add(r.id);continue}r.state===`damaged`&&t.set(r.id,lf(cf(i,this.heatReferencePopulation)))}}this.cityView.syncBuildingDamageHeatmap(t,n)}syncRings(e){let t=Math.min(e.length,Zd);for(let n=0;n<t;n++){let t=e[n];this.ringMatrix.makeTranslation(t.x,Q+.32,t.z),this.rings.setMatrixAt(n,this.ringMatrix)}this.rings.count=t,this.rings.instanceMatrix.needsUpdate=!0}syncScans(e){let t=Math.min(e.length,ef);this.continuousScanCount.value=t;for(let t=0;t<ef;t++){let n=e[t];this.continuousScans[t].set(n?.x??0,n?.z??0,200,+!!n)}}syncCrowds(e,t,n){let r=0;for(let i of t){let t=i.prevX+(i.x-i.prevX)*n,a=i.prevZ+(i.z-i.prevZ)*n;if(!df(t,a,e))continue;if(r>=Qd)break;let o=cf(i.humans,this.heatReferencePopulation),s=14+Math.sqrt(i.humans)*2.2;this.crowdMatrix.makeScale(s,s,s),this.crowdMatrix.setPosition(t,Q+.36,a),this.crowds.setMatrixAt(r,this.crowdMatrix),this.crowdHeat.setX(r,o),r++}this.crowds.count=r,this.crowds.instanceMatrix.needsUpdate=!0,this.crowdHeat.needsUpdate=!0}syncBuildingContinuousSources(e){this.buildingContinuousSources.length=0;for(let t of this.city.buildings){let n=this.population[t.id]??0;if(t.state===`rubble`||n<=0||!df(t.x,t.z,e))continue;let r=uf(t.width,t.depth);this.buildingContinuousSources.push(new Ve(t.x,t.z,r,sf(n,this.heatReferencePopulation)*nf))}}syncContinuousGround(e,t){let n=this.continuousSourceScratch;n.length=0,n.push(...this.buildingContinuousSources);for(let r of e){let e=r.prevX+(r.x-r.prevX)*t,i=r.prevZ+(r.z-r.prevZ)*t;r.humans<=0||!this.isWithinActiveScan(e,i)||n.push(new Ve(e,i,18+Math.sqrt(r.humans)*1.7,sf(r.humans,this.heatReferencePopulation)*rf))}n.sort((e,t)=>t.w-e.w),this.continuousSourceCount.value=Math.min(n.length,$d);for(let e=0;e<$d;e++)this.continuousSources[e].copy(n[e]??_f)}isWithinActiveScan(e,t){return this.continuousScans.some(n=>n.w>0&&(n.x-e)**2+(n.y-t)**2<=n.z**2)}},_f=new Ve(0,0,0,0),vf=15e3,yf=5e3,bf=`#63c174`,xf=`#e3ae4e`,Sf=`#df5b55`,Cf=class{root;labels=new Map;visibleIds=new Set;point=new W;stateDirty=!0;lastRetireCheckMs=-1/0;constructor(e){Ef(),this.root=document.createElement(`div`),this.root.className=`unit-health-labels`,e.append(this.root)}sync({army:e,camera:t,nowMs:n,cameraDirty:r,stateDirty:i,selectionDirty:a,selectedIds:o,inspectedEnemyId:s}){if(this.stateDirty||=i,!a&&!r&&!this.stateDirty&&this.visibleIds.size===0)return;this.stateDirty=!1;let c=new Set(o);t.updateMatrixWorld();let l=new Set;for(let r of e.units){let i=e.typeOf(r);if(!(r.health<i.health||c.has(r.id)||r.id===s||r.attackCooldown>0)||(this.point.set(r.x,yl(r.typeId).maxY+3,r.z).project(t),!(this.point.z>-1&&this.point.z<1&&Math.abs(this.point.x)<=1.04&&Math.abs(this.point.y)<=1.04)))continue;let a=this.labels.get(r.id)??this.createLabel(r.id),o=`${(this.point.x*.5+.5)*100}%`,u=`${(-this.point.y*.5+.5)*100}%`,d=Math.max(0,Math.min(1,r.health/Math.max(1,i.health))),f=`${d*100}%`,p=wf(d);a.left!==o&&(a.label.style.left=o,a.left=o),a.top!==u&&(a.label.style.top=u,a.top=u),a.width!==f&&(a.fill.style.width=f,a.width=f),a.colour!==p&&(a.fill.style.backgroundColor=p,a.colour=p),a.label.hidden&&(a.label.hidden=!1),a.lastRelevantMs=n,l.add(r.id)}this.hideNoLongerVisible(l),this.visibleIds.clear();for(let e of l)this.visibleIds.add(e);this.retireIrrelevant(n)}createLabel(e){let t=document.createElement(`span`);t.className=`unit-health-label`,t.hidden=!0;let n=document.createElement(`span`);n.className=`unit-health-label-bar`;let r=document.createElement(`span`);r.className=`unit-health-label-bar-fill`,n.append(r),t.append(n),this.root.append(t);let i={label:t,fill:r,left:null,top:null,width:null,colour:null,lastRelevantMs:-1/0};return this.labels.set(e,i),i}hideNoLongerVisible(e){for(let t of this.visibleIds){if(e.has(t))continue;let n=this.labels.get(t);n&&!n.label.hidden&&(n.label.hidden=!0)}}retireIrrelevant(e){if(!(e-this.lastRetireCheckMs<yf)){this.lastRetireCheckMs=e;for(let[t,n]of this.labels)this.visibleIds.has(t)||e-n.lastRelevantMs<vf||(n.label.remove(),this.labels.delete(t))}}dispose(){this.root.remove(),this.labels.clear(),this.visibleIds.clear()}};function wf(e){return e<.3?Sf:e<.6?xf:bf}var Tf=!1;function Ef(){if(Tf)return;Tf=!0;let e=document.createElement(`style`);e.textContent=`
.unit-health-labels { position: fixed; inset: 0; pointer-events: none; z-index: 9; }
.unit-health-label { position: absolute; transform: translate(-50%, -100%); width: 31px; }
.unit-health-label-bar { display: block; height: 3px; overflow: hidden; background: rgba(255, 255, 255, .2); }
.unit-health-label-bar-fill { display: block; height: 100%; background: ${bf}; transition: width .1s linear, background-color .1s linear; }
`,document.head.append(e)}var Df=.6,Of=1.8,kf=2696995,Af=Q+Of/2;function jf(){return new me(Df,Of,Df)}function Mf(){return new rt({color:kf,flatShading:!0})}var Nf=8,Pf=96;function Ff(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var If=class{city;army;population;group=new J;civilians;matrix=new Pe;highlightGeometry=new Map;selectedGeometry;constructor(e,t,n){this.city=e,this.army=t,this.population=n,this.civilians=new g(jf(),Mf(),Pf),this.civilians.instanceMatrix.setUsage(O),this.civilians.count=0,this.civilians.frustumCulled=!1,this.group.add(this.civilians)}sync(e,t,n){let r=0,i=!1;for(let t of this.army.units){let n=t.harvestingBuildingId,a=n===null?void 0:this.city.get(n);if(!Lo(a,this.population)||Ro(t.x,t.z,a)>37**2||!Io(this.army.typeOf(t).faction,t.cargo))continue;let o=t.x-a.x,s=t.z-a.z,c=Math.max(Math.hypot(o,s),1),l=Z({x:o/c,z:s/c},-(a.rotation??0)),u=Math.min(Math.abs(l.x)>.001?a.width/2/Math.abs(l.x):1/0,Math.abs(l.z)>.001?a.depth/2/Math.abs(l.z):1/0),d=a.x+o/c*u,f=a.z+s/c*u;for(let n=0;n<Nf&&r<Pf;n++){let a=(e+n*5+t.id*11)%30/30,l=(n%3-1)*1.7,u=d+(t.x-d)*a-s/c*l,p=f+(t.z-f)*a+o/c*l;this.matrix.makeTranslation(u,Af,p),i=Ff(this.civilians,r++,this.matrix)||i}}this.civilians.count=r,i&&(this.civilians.instanceMatrix.needsUpdate=!0);let a=n===void 0?void 0:this.city.get(n),o=Lo(a,this.population)?a:void 0;this.selectedGeometry=t&&o?this.geometryFor(o):void 0}selectionSource(){return this.selectedGeometry?{geometry:this.selectedGeometry,colour:16719904}:void 0}dispose(){for(let e of this.highlightGeometry.values())e.dispose();this.civilians.geometry.dispose(),this.civilians.material.dispose()}geometryFor(e){let t=`${e.id}:${e.state}`,n=this.highlightGeometry.get(t);if(n)return n;let r=Math.max(ol(e),2.2),i=Lf(e.clip??this.rectangleFootprint(e),Q+.15,Q+r);return this.highlightGeometry.set(t,i),i}rectangleFootprint(e){let t=e.width/2,n=e.depth/2;return[{x:-t,z:-n},{x:t,z:-n},{x:t,z:n},{x:-t,z:n}].map(t=>{let n=Z(t,e.rotation??0);return{x:e.x+n.x,z:e.z+n.z}})}};function Lf(e,t,n){let r=[],a=e.map(e=>new R(e.x,e.z));for(let e of i.triangulateShape(a,[])){let i=a[e[0]??-1],o=a[e[1]??-1],s=a[e[2]??-1];!i||!o||!s||(r.push(i.x,n,i.y,o.x,n,o.y,s.x,n,s.y),r.push(s.x,t,s.y,o.x,t,o.y,i.x,t,i.y))}for(let e=0;e<a.length;e++){let i=a[e],o=a[(e+1)%a.length];i&&o&&r.push(i.x,t,i.y,i.x,n,i.y,o.x,t,o.y,o.x,t,o.y,i.x,n,i.y,o.x,n,o.y)}let o=new q;return o.setAttribute(`position`,new Ae(new Float32Array(r),3)),o.computeVertexNormals(),o}var Rf=2,zf=32,Bf=640,Vf=5,Hf=1.6,Uf=8;function Wf(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var Gf=class{group=new J;figures;matrix=new Pe;constructor(){this.figures=new g(jf(),Mf(),Bf),this.figures.instanceMatrix.setUsage(O),this.figures.count=0,this.figures.frustumCulled=!1,this.group.add(this.figures)}sync(e,t,n,r){let i=0,a=!1,o=new Map;for(let e of r.units){if(e.harvestingCrowdId===null)continue;let t=o.get(e.harvestingCrowdId);t?t.push(e):o.set(e.harvestingCrowdId,[e])}for(let s of e){let e=s.prevX+(s.x-s.prevX)*t,c=s.prevZ+(s.z-s.prevZ)*t,l=s.trailDirX,u=s.trailDirZ,d=Math.min(Math.max(1,Math.ceil(s.humans/Rf)),zf),f=2.4+Math.sqrt(d)*1.5,p=(o.get(s.id)??[]).filter(e=>Fo(e.x,e.z,s.x,s.z)<=37**2&&Io(r.typeOf(e).faction,e.cargo)),m=Math.min(d,p.length*Uf);for(let r=0;r<d&&!(i>=Bf);r++){let o=(Kf(s.id*31+r*7+1)*2-1)*f,d=(Kf(s.id*17+r*13+2)*2-1)*f,h=r%Vf*Hf*s.trailStrength,g=e+o-l*h,_=c+d-u*h;if(r<m){let e=p[r%p.length],i=e.prevX+(e.x-e.prevX)*t,a=e.prevZ+(e.z-e.prevZ)*t,o=(n+r*5+e.id*11)%30/30;this.matrix.makeTranslation(g+(i-g)*o,Af,_+(a-_)*o)}else this.matrix.makeTranslation(g,Af,_);a=Wf(this.figures,i++,this.matrix)||a}if(i>=Bf)break}this.figures.count=i,a&&(this.figures.instanceMatrix.needsUpdate=!0)}dispose(){this.figures.geometry.dispose(),this.figures.material.dispose()}};function Kf(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}var qf=48,Jf=class{modelTemplate;group=new J;preview=new J;previewTypeId=null;previewUsesFallback=!0;previewDispose=()=>{};sites=new Map;constructor(e){this.modelTemplate=e,this.group.add(this.preview)}sync(e,t,n,r){e?((this.previewTypeId!==e.structureTypeId||this.previewUsesFallback!==!this.modelTemplate?.(e.structureTypeId))&&this.replacePreview(e.structureTypeId),this.preview.visible=!0,this.preview.position.set(e.x,.1,e.z),this.tint(this.preview,t?7729818:15749714,.48)):this.preview.visible=!1;let i=new Set(n.map(e=>e.builderId));for(let[e,t]of this.sites)i.has(e)||(this.group.remove(t.group),t.dispose(),this.sites.delete(e));for(let e of n){let t=this.sites.get(e.builderId);t||(t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group)),t.usesFallback!==!this.modelTemplate?.(e.structureTypeId)&&(this.group.remove(t.group),t.dispose(),t=this.siteGroup(e),this.sites.set(e.builderId,t),this.group.add(t.group)),t.group.position.set(e.x,.12,e.z);let n=Qf(e.summoning?1-e.remainingSteps/Math.max(bs(e.structureTypeId).constructionSteps??1,1):0,0,1);this.animateSite(t,n,r)}}dispose(){this.previewDispose();for(let e of this.sites.values())e.dispose();this.sites.clear(),this.group.clear()}replacePreview(e){this.previewDispose(),this.preview.clear();let t=Xf(e,this.modelTemplate?.(e));this.preview.add(t.group),this.previewTypeId=e,this.previewUsesFallback=t.usesFallback,this.previewDispose=t.dispose}siteGroup(e){let t=bs(e.structureTypeId).anchoredFootprint,n=Math.hypot((t?.width??18)/2,(t?.depth??18)/2)+2,r=new J,i=Yf(n),a=Xf(e.structureTypeId,this.modelTemplate?.(e.structureTypeId)),o=yl(e.structureTypeId);return i.group.position.y=o.minY+o.height*.5,r.add(i.group,a.group),{group:r,circle:i.group,circleMaterials:i.materials,progressGeometry:i.progressGeometry,progressMaterial:i.progressMaterial,ghostMaterials:a.materials,usesFallback:a.usesFallback,dispose:()=>{$f(i.group),a.dispose()}}}animateSite(e,t,n){let r=n*.0024+e.group.id*.73,i=.16+t*.68,a=Math.sin(r)*(.13-t*.05);for(let t of e.ghostMaterials)t.opacity=Qf(i+a,.06,.92);let o=.27+t*.22+Math.sin(r*1.4)*.08;for(let t of e.circleMaterials)t.opacity=Qf(o,.12,.62);e.progressMaterial.opacity=Qf(o+.2,.3,.82),e.progressGeometry.setDrawRange(0,Math.round(t*qf)*6);let s=1+Math.sin(r*1.4)*.035;e.circle.scale.setScalar(s),e.circle.rotation.y=r*.15}tint(e,t,n){e.traverse(e=>{!(e instanceof V)||!(e.material instanceof rt)&&!(e.material instanceof Se)||(e.material.color.setHex(t),e.material.opacity=n)})}};function Yf(e){let t=new J,n=[],r=e=>{let t=new rt({color:15786104,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,side:2});return n.push(t),t},i=(e,t,n)=>{let i=new V(new ke(e,t,48),r(n));return i.rotation.x=-Math.PI/2,i.renderOrder=12,i};t.add(i(e-.62,e,.48),i(e*.56,e*.68,.38));let a=new ke(e*.3,e*.42,qf);a.setDrawRange(0,0);let o=new rt({color:15786104,flatShading:!0,transparent:!0,opacity:.72,depthWrite:!1,side:2}),s=new V(a,o);s.rotation.x=-Math.PI/2,s.renderOrder=14,t.add(s);for(let n=0;n<8;n++){let i=n/8*Math.PI*2,a=new V(new me(.36,.08,e*.18),r(.42));a.position.set(Math.sin(i)*e*.79,.03,Math.cos(i)*e*.79),a.rotation.y=i,a.renderOrder=13,t.add(a)}return{group:t,materials:n,progressGeometry:a,progressMaterial:o}}function Xf(e,t){if(t){let e=t.clone(!0),n=[];return e.traverse(e=>{if(!(e instanceof V))return;let t=Zf();e.material=t,e.castShadow=e.receiveShadow=!1,n.push(t)}),{group:e,materials:n,usesFallback:!1,dispose:()=>n.forEach(e=>e.dispose())}}let n=yl(e),r=new J,i=Zf(),a=new me(n.size.x,n.size.y,n.size.z);return a.translate(n.centre.x,n.centre.y,n.centre.z),r.add(new V(a,i)),{group:r,materials:[i],usesFallback:!0,dispose:()=>$f(r)}}function Zf(){return new Se({color:14263807,transparent:!0,opacity:.48,depthWrite:!1})}function Qf(e,t,n){return Math.max(t,Math.min(n,e))}function $f(e){e.traverse(e=>{e instanceof V&&(e.geometry.dispose(),(e.material instanceof rt||e.material instanceof Se)&&e.material.dispose())})}var ep=class{group=new J;footprintGeometry=new q;unitRadiusGeometry=new q;anchoredGeometry=new q;constructionGeometry=new q;pathGeometry=new q;footprints=new U(this.footprintGeometry,new ge({color:16762967,transparent:!0,opacity:.82,depthTest:!1}));paths=new U(this.pathGeometry,new ge({vertexColors:!0,transparent:!0,opacity:.9,depthTest:!1}));unitRadii=new U(this.unitRadiusGeometry,new ge({color:5104639,transparent:!0,opacity:.82,depthTest:!1}));anchoredFootprints=new U(this.anchoredGeometry,new ge({color:13987071,transparent:!0,opacity:.9,depthTest:!1}));constructionFootprints=new U(this.constructionGeometry,new ge({color:10906879,transparent:!0,opacity:.92,depthTest:!1}));constructor(){this.group.name=`navigation-debug`,this.footprints.name=`occupied-space-outlines`,this.unitRadii.name=`unit-avoidance-radii`,this.anchoredFootprints.name=`anchored-footprints`,this.constructionFootprints.name=`construction-footprints`,this.paths.name=`unit-paths`,this.footprints.renderOrder=20,this.paths.renderOrder=21,this.footprints.frustumCulled=!1,this.unitRadii.frustumCulled=!1,this.anchoredFootprints.frustumCulled=!1,this.constructionFootprints.frustumCulled=!1,this.paths.frustumCulled=!1,this.group.add(this.footprints,this.unitRadii,this.anchoredFootprints,this.constructionFootprints,this.paths)}sync(e,t,n,r,i){this.footprints.visible=r,this.unitRadii.visible=r,this.anchoredFootprints.visible=r,this.paths.visible=i,r&&this.setFootprints(e,t,n),i&&this.setPaths(t)}dispose(){this.footprintGeometry.dispose(),this.unitRadiusGeometry.dispose(),this.anchoredGeometry.dispose(),this.constructionGeometry.dispose(),this.pathGeometry.dispose(),this.footprints.material.dispose(),this.unitRadii.material.dispose(),this.anchoredFootprints.material.dispose(),this.constructionFootprints.material.dispose(),this.paths.material.dispose()}setFootprints(e,t,n){let r=[],i=[],a=[],o=[];for(let t of e.buildings){let e=t.clip&&t.clip.length>=3?t.clip:na(t);this.polygon(r,e,.45)}for(let e of t.units){let n=t.typeOf(e);if(this.circle(i,e.x,e.z,xs(n,e.deployed),.7),n.anchoredFootprint&&(e.deployed||n.stationary)){let{width:t,depth:r}=n.anchoredFootprint;this.polygon(a,[{x:e.x-t/2,z:e.z-r/2},{x:e.x+t/2,z:e.z-r/2},{x:e.x+t/2,z:e.z+r/2},{x:e.x-t/2,z:e.z+r/2}],.75)}}for(let e of n){let t=bs(e.structureTypeId).anchoredFootprint;if(!t)continue;let{width:n,depth:r}=t;this.polygon(o,[{x:e.x-n/2,z:e.z-r/2},{x:e.x+n/2,z:e.z-r/2},{x:e.x+n/2,z:e.z+r/2},{x:e.x-n/2,z:e.z+r/2}],.8)}this.footprintGeometry.setAttribute(`position`,new Ae(new Float32Array(r),3)),this.unitRadiusGeometry.setAttribute(`position`,new Ae(new Float32Array(i),3)),this.anchoredGeometry.setAttribute(`position`,new Ae(new Float32Array(a),3)),this.constructionGeometry.setAttribute(`position`,new Ae(new Float32Array(o),3))}setPaths(e){let t=[],n=[];for(let r of e.units){if(r.path.length===0)continue;let i=ct(e.typeOf(r).faction),a=(i>>16&255)/255,o=(i>>8&255)/255,s=(i&255)/255,c=r.x,l=r.z;for(let e=0;e<r.path.length;e+=2){let i=r.path[e],u=r.path[e+1];i!==void 0&&u!==void 0&&(t.push(c,.95,l,i,.95,u),n.push(a,o,s,a,o,s),c=i,l=u)}}this.pathGeometry.setAttribute(`position`,new Ae(new Float32Array(t),3)),this.pathGeometry.setAttribute(`color`,new Ae(new Float32Array(n),3))}circle(e,t,n,r,i){for(let a=0;a<24;a++){let o=a/24*Math.PI*2,s=(a+1)/24*Math.PI*2;e.push(t+Math.cos(o)*r,i,n+Math.sin(o)*r,t+Math.cos(s)*r,i,n+Math.sin(s)*r)}}polygon(e,t,n){for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];!i||!a||e.push(i.x,n,i.z,a.x,n,a.z)}}},tp=[{facade:12823945,roof:11771002,trim:13416082,window:8942684,rooftop:10587760},{facade:12494723,roof:11244402,trim:13021069,window:8417113,rooftop:9995883},{facade:12165501,roof:10849645,trim:12757638,window:8219735,rooftop:9601128},{facade:13021324,roof:11573880,trim:13613463,window:9140319,rooftop:10521968},{facade:12099966,roof:10849902,trim:12692103,window:8351064,rooftop:9535593},{facade:12626310,roof:11376245,trim:13218446,window:8745820,rooftop:10127467},{facade:12955531,roof:11573624,trim:13547413,window:9008735,rooftop:10390383},{facade:12297344,roof:10981232,trim:12889481,window:8416857,rooftop:9732456},{facade:12626566,roof:11375988,trim:13218446,window:8679771,rooftop:9995883},{facade:13087117,roof:11705210,trim:13678999,window:9140318,rooftop:10587760},{facade:12034431,roof:10718317,trim:12626311,window:8219479,rooftop:9404007},{facade:12889480,roof:11573624,trim:13481618,window:9008477,rooftop:10455918},{facade:12231551,roof:10915696,trim:12823688,window:8416856,rooftop:9666921},{facade:12692102,roof:11376245,trim:13284238,window:8745563,rooftop:10193004},{facade:10650211,roof:8744276,trim:11178095,window:7298122,rooftop:7956047},{facade:9732202,roof:8284503,trim:10389616,window:7035981,rooftop:7693910},{facade:10129774,roof:8551006,trim:10787448,window:7366991,rooftop:8156510},{facade:8154970,roof:6774093,trim:8944228,window:6247752,rooftop:6643024},{facade:10840145,roof:8936778,trim:11368542,window:7492164,rooftop:8347727},{facade:12165220,roof:9994065,trim:12823152,window:7957324,rooftop:9271631}];function np(e){let t=Math.imul(e.id+1,2654435761)^Math.imul(e.paletteIndex+11,2246822507);return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,tp[(t>>>0)%tp.length]??tp[0]}var rp=[11028540,3493995,14209990,7307086,9072296,4145992],ip={sky:12048612,skyHorizon:14872553,shardTop:10323041,cliff:[11100220,9260336,7289894],road:10659477,sidewalk:13027512,parking:10132878,laneMarking:14205527,crosswalk:14672082,park:8362574,tree:5204788,treeTrunk:7360569,rubble:12892060,hvac:13027512},ap=.8,op=3;function sp(e,t={}){return ut(e,t)}function cp(e){let t=new me(1,1,1,1,e,1).toNonIndexed(),n=t.getAttribute(`position`),r=new Float32Array(n.count*3);for(let t=0;t<n.count;t+=3){let i=(n.getY(t)+n.getY(t+1)+n.getY(t+2))/3,a=Math.floor((i+.5)*e)%2==0?1:ap;for(let e=0;e<3;e++)r[(t+e)*3]=a,r[(t+e)*3+1]=a,r[(t+e)*3+2]=a}return t.setAttribute(`color`,new Ae(r,3)),t}var lp=class{city;group=new J;buildingMeshList=[];buildingHeatmapInstanceIdsByMesh=new Map;slots=new Map;detailSlots=new Map;roofs;trims;windowBands;greebles;greebleStart=new Map;debris;matrix=new Pe;color=new z;scale=new W;clipped;clippedState=``;landscaped;landscapedState=``;destruction;constructor(e){this.city=e;for(let e of this.buildShardTops())this.group.add(e);for(let e of this.buildCliffBands())this.group.add(e);this.group.add(this.buildPads(`built`,ip.sidewalk,Q)),this.landscaped=this.buildLandscapedBuiltBlocks(),this.group.add(this.landscaped),this.group.add(this.buildPads(`parking`,ip.parking,Q)),this.group.add(this.buildPads(`park`,ip.sidewalk,Q)),this.group.add(this.buildParkland()),this.group.add(this.buildRoads());for(let e of this.buildFragmentOverlays())this.group.add(e);let t=this.buildStripes([...this.city.centreLines,...this.city.decorativeFragments.flatMap(e=>e.centreLines)],ip.laneMarking,1.1);t.name=`centre-lines`,this.group.add(t);let n=this.buildStripes(this.city.crosswalks,ip.crosswalk,1.1);n.name=`crosswalks`,this.group.add(n),this.group.add(this.buildTrees()),this.group.add(this.buildCars()),this.group.add(this.buildEdgeRubble());let r=new Map;for(let e of this.city.buildings){if(e.clip)continue;let t=Xi(e.height,e.district),n=r.get(t);n?n.push(e):r.set(t,[e])}for(let[e,t]of r){let n=new g(cp(e),sp(16777215,{vertexColors:!0}),t.length);n.frustumCulled=!1,n.userData.storeys=e,this.buildingMeshList.push(n),this.buildingHeatmapInstanceIdsByMesh.set(n,t.map(e=>e.id)),this.group.add(n),t.forEach((e,t)=>this.slots.set(e.id,{mesh:n,index:t}))}let i=this.city.buildings.filter(e=>!e.clip);i.forEach((e,t)=>this.detailSlots.set(e.id,t)),this.roofs=new g(new me(1,1,1),sp(16777215),Math.max(i.length,1)),this.roofs.name=`building-roofs`,this.roofs.frustumCulled=!1,this.buildingHeatmapInstanceIdsByMesh.set(this.roofs,i.map(e=>e.id)),this.trims=new g(new me(1,1,1),sp(16777215),Math.max(i.length,1)),this.trims.name=`building-trims`,this.trims.frustumCulled=!1,this.windowBands=new g(new me(1,1,1),sp(16777215),Math.max(i.length,1)),this.windowBands.name=`building-window-bands`,this.windowBands.frustumCulled=!1,this.group.add(this.trims,this.windowBands,this.roofs);let a=0;for(let t of e.buildings)this.greebleStart.set(t.id,a),a+=t.greebles;this.greebles=new g(new me(1,1,1),sp(16777215),Math.max(a,1)),this.greebles.name=`rooftop-structures`,this.greebles.frustumCulled=!1,this.group.add(this.greebles),this.debris=new g(new me(1,1,1),sp(ip.rubble),Math.max(e.buildings.length*op,1)),this.debris.frustumCulled=!1,this.group.add(this.debris),this.destruction=new ll(this.city,e=>np(e).facade),this.group.add(this.destruction.group),this.refreshAll(),this.group.traverse(e=>{e.userData.preserveShadowFlags||(e.castShadow=!0,e.receiveShadow=!0)})}setOutlineZoom(e){this.group.traverse(t=>{if(!(t instanceof V))return;let n=t.material;Array.isArray(n)?n.forEach(t=>ot(t,e)):ot(n,e)})}buildShardTops(){return[...this.city.surfaces,...this.city.decorativeFragments.map(e=>e.boundary)].map((e,t)=>{let n=e[0];if(!n)throw Error(`city boundary is empty`);let r=new ne;r.moveTo(n.x,-n.z);for(let t=1;t<e.length;t++){let n=e[t];n&&r.lineTo(n.x,-n.z)}r.closePath();let i=new V(new it(r),sp(ip.shardTop));return i.rotation.x=-Math.PI/2,i.name=t<this.city.surfaces.length?`shard-top-${t}`:`shard-chip-top-${t}`,i})}buildCliffBands(){let e=[...this.city.surfaces.map(e=>({points:e,depth:340,chip:!1})),...this.city.decorativeFragments.map(e=>({points:e.boundary,depth:e.depth,chip:!0}))],t=[0,.28,.62,1],n=[];for(let r=0;r<3;r++){let i=ip.cliff[r];if(i===void 0)continue;let a=[];for(let n of e){if(n.chip&&r>0)continue;let e=n.points,i=n.chip?0:-(t[r]??0)*n.depth,o=n.chip?-n.depth:-(t[r+1]??1)*n.depth,s=this.polygonCentre(e),c=[1,.995,.985,.97][r]??1,l=[1,.995,.985,.97][r+1]??.97;for(let t=0;t<e.length;t++){let n=e[t],r=e[(t+1)%e.length];if(!n||!r)continue;let u=this.scaleFrom(n,s,c),d=this.scaleFrom(r,s,c),f=this.scaleFrom(r,s,l),p=this.scaleFrom(n,s,l);a.push(u.x,i,u.z,d.x,i,d.z,f.x,o,f.z,u.x,i,u.z,f.x,o,f.z,p.x,o,p.z)}}let o=new q;o.setAttribute(`position`,new Ae(new Float32Array(a),3)),o.computeVertexNormals();let s=new V(o,sp(i,{side:2}));s.name=`cliff-band-${r}`,n.push(s)}return n}polygonCentre(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.z;return{x:t/e.length,z:n/e.length}}scaleFrom(e,t,n){return{x:t.x+(e.x-t.x)*n,z:t.z+(e.z-t.z)*n}}buildPads(e,t,n){let r=this.city.blocks.filter(t=>t.kind===e),i=r.map(e=>e.clip??this.rectPoints(e)),a=e===`park`?r.map(e=>{let t=this.parkGrassFootprint(e);return t.length>=3?[t]:[]}):void 0,o=new V(this.polygonsGeometry(i,0,n,a),sp(t));return o.name=`${e}-pads`,o}buildParkland(){let e=this.city.blocks.filter(e=>e.kind===`park`).map(e=>this.parkGrassFootprint(e)).filter(e=>e.length>=3),t=new V(this.polygonsGeometry(e,0,Q),sp(ip.park));return t.name=`parkland`,t}buildLandscapedBuiltBlocks(){let e=[],t=this.city.buildings.filter(e=>e.state!==`rubble`);for(let n of this.city.blocks){if(n.kind!==`built`||n.district!==`downtown`||!n.innerClip||n.innerClip.length<3)continue;let r=this.triangulateGrass(n.innerClip),i=Bi(n.innerClip),a=t.filter(e=>{let t=Qi[e.state],n=Math.hypot(e.width*t/2+4,e.depth*t/2+4);return e.x+n>=i.x0&&e.x-n<=i.x1&&e.z+n>=i.z0&&e.z-n<=i.z1});for(let e of a)r=r.flatMap(t=>this.subtractConvexFootprint(t,this.bufferedBuildingFootprint(e)));r=r.filter(e=>!a.some(t=>Ri(Ui(e,this.bufferedBuildingFootprint(t)))>1e-4)),e.push(...r.filter(e=>e.length>=3))}let n=new V(this.polygonsGeometry(e,Q,Q+.01),sp(ip.park));return n.name=`downtown-landscaping`,n}triangulateGrass(e){let t=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),n=t.map(e=>new R(e.x,e.z));return i.triangulateShape(n,[]).flatMap(e=>{let n=e.map(e=>t[e]).filter(e=>e!==void 0);return n.length===3?[n]:[]})}subtractConvexFootprint(e,t){if(e.length<3||t.length<3)return e.length>=3?[[...e]]:[];let n=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?t:[...t].reverse(),r=[...e],i=[];for(let e=0;e<n.length&&r.length>=3;e++){let t=n[e],a=n[(e+1)%n.length];if(!t||!a)continue;let o=Math.max(Math.hypot(a.x-t.x,a.z-t.z),1e-9),s={x:-(a.z-t.z)/o,z:(a.x-t.x)/o},c=s.x*t.x+s.z*t.z,l=Hi(r,{x:-s.x,z:-s.z},-c);l.length>=3&&i.push(l),r=Hi(r,s,c)}return i}bufferedBuildingFootprint(e){if(e.clip&&e.clip.length>=3)return this.offsetConvexFootprint(e.clip,4);let t=Qi[e.state],n=e.width*t/2+4,r=e.depth*t/2+4,i=e.rotation??0;return[{x:-n,z:-r},{x:n,z:-r},{x:n,z:r},{x:-n,z:r}].map(t=>{let n=Z(t,i);return{x:e.x+n.x,z:e.z+n.z}})}offsetConvexFootprint(e,t){let n=e.reduce((t,n,r)=>{let i=e[(r+1)%e.length];return i?t+n.x*i.z-i.x*n.z:t},0)>=0?[...e]:[...e].reverse(),r=n.map((e,r)=>{let i=n[(r+1)%n.length];if(!i)throw Error(`visible footprint has no next edge`);let a=Math.max(Math.hypot(i.x-e.x,i.z-e.z),1e-9),o={x:-(i.z-e.z)/a,z:(i.x-e.x)/a};return{inward:o,offset:o.x*e.x+o.z*e.z-t}});return n.map((e,t)=>{let n=r[(t-1+r.length)%r.length],i=r[t];if(!n||!i)return e;let a=n.inward.x*i.inward.z-n.inward.z*i.inward.x;return Math.abs(a)<1e-6?e:{x:(n.offset*i.inward.z-n.inward.z*i.offset)/a,z:(n.inward.x*i.offset-n.offset*i.inward.x)/a}})}parkGrassFootprint(e){let t=e.innerClip;if(!t||t.length<3)return[];let n=e.clip??[];if(!n.length||!t.some(e=>this.distanceToPolygonEdge(e,n)<=1e-4))return t;let r=this.polygonCentre(t),i=Math.max(...t.map(e=>Math.hypot(e.x-r.x,e.z-r.z)),1),a=1-Math.min(.02/i,.001);return t.map(e=>this.scaleFrom(e,r,a))}distanceToPolygonEdge(e,t){let n=1/0;for(let r=0;r<t.length;r++){let i=t[r],a=t[(r+1)%t.length];if(!i||!a)continue;let o=a.x-i.x,s=a.z-i.z,c=Math.max(0,Math.min(1,((e.x-i.x)*o+(e.z-i.z)*s)/Math.max(o*o+s*s,1e-9)));n=Math.min(n,Math.hypot(e.x-(i.x+o*c),e.z-(i.z+s*c)))}return n}buildRoads(){let e=[...this.city.surfaces,...this.city.decorativeFragments.map(e=>e.boundary)],t=new V(this.polygonsGeometry(e,0,1),sp(ip.road));return t.name=`roads`,t}buildFragmentOverlays(){return[{kind:`built`,colour:ip.sidewalk,top:Q},{kind:`parking`,colour:ip.parking,top:Q},{kind:`park`,colour:ip.park,top:Q}].map(e=>{let t=this.city.decorativeFragments.flatMap(t=>t.overlays.filter(t=>t.kind===e.kind).map(e=>e.polygon)),n=new V(this.polygonsGeometry(t,0,e.top),sp(e.colour));return n.name=`chip-${e.kind}`,n})}rectPoints(e){return[{x:e.x0,z:e.z0},{x:e.x1,z:e.z0},{x:e.x1,z:e.z1},{x:e.x0,z:e.z1}]}appendPrism(e,t,n,r,a=!0,o=[]){if(t.length<3)return;let s=t.reduce((e,n,r)=>{let i=t[(r+1)%t.length];return i?e+n.x*i.z-i.x*n.z:e},0)>=0?[...t]:[...t].reverse(),c=s.map(e=>new R(e.x,e.z)),l=o.filter(e=>e.length>=3).map(e=>e.map(e=>new R(e.x,e.z))),u=[c,...l].flat(),d=i.triangulateShape(c,l);for(let t of d){let n=t[0],i=t[1],a=t[2];if(n===void 0||i===void 0||a===void 0)continue;let o=u[n],s=u[i],c=u[a];!o||!s||!c||((s.x-o.x)*(c.y-o.y)-(s.y-o.y)*(c.x-o.x)>0?e.push(o.x,r,o.y,c.x,r,c.y,s.x,r,s.y):e.push(o.x,r,o.y,s.x,r,s.y,c.x,r,c.y))}if(a)for(let t=0;t<s.length;t++){let i=s[t],a=s[(t+1)%s.length];!i||!a||e.push(i.x,n,i.z,i.x,r,i.z,a.x,n,a.z,a.x,n,a.z,i.x,r,i.z,a.x,r,a.z)}}appendBandedPrism(e,t,n,r,i,a,o){if(n.length<3)return;let s=e.length/3;this.appendPrism(e,n,r,i,!1);for(let n=s;n<e.length/3;n++)t.push(o.r,o.g,o.b);let c=Math.max(1,Math.round(a));for(let a=0;a<c;a++){let s=r+(i-r)*a/c,l=r+(i-r)*(a+1)/c,u=a%2==0?1:ap,d=e.length/3;for(let t=0;t<n.length;t++){let r=n[t],i=n[(t+1)%n.length];!r||!i||e.push(r.x,s,r.z,r.x,l,r.z,i.x,s,i.z,i.x,s,i.z,r.x,l,r.z,i.x,l,i.z)}for(let n=d;n<e.length/3;n++)t.push(o.r*u,o.g*u,o.b*u)}}polygonsGeometry(e,t,n,r){let i=[];e.forEach((e,a)=>this.appendPrism(i,e,t,n,!0,r?.[a]??[]));let a=new q;return a.setAttribute(`position`,new Ae(new Float32Array(i),3)),a.computeVertexNormals(),a}buildEdgeRubble(){let e=new J;e.name=`edge-rubble`;let t=0;for(let n of this.city.decorativeFragments)for(let r of n.rubble){if(r.length<3)continue;let n=Ri(r),i=rl(t*40503+41,r.map(e=>({x:e.x,y:e.z})),!1);i.scale(1,Math.max(1.2,Math.sqrt(n)*.09),1),i.translate(0,Q,0);let a=new V(i,sp(ip.rubble));a.name=`edge-rubble-${t++}`,e.add(a)}return e}buildClipped(){let e=[],t=[];for(let n of this.city.buildings){if(!n.clip||n.clip.length<3||al(n)>0)continue;let r=n.height;this.color.setHex(np(n).facade);let i=Xi(r,n.district);this.appendBandedPrism(e,t,n.clip,Q,Q+r,i,this.color)}let n=new q;n.setAttribute(`position`,new Ae(new Float32Array(e),3)),n.setAttribute(`color`,new Ae(new Float32Array(t),3)),n.computeVertexNormals();let r=new V(n,sp(16777215,{vertexColors:!0}));return r.name=`clipped-buildings`,r}clippedSignature(){let e=``;for(let t of this.city.buildings)t.clip&&(e+=al(t));return e}rebuildClipped(){let e=this.clippedSignature();if(e===this.clippedState)return;this.clippedState=e;let t=this.buildClipped();if(this.clipped){this.group.remove(this.clipped),this.clipped.geometry.dispose();let e=this.clipped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.clipped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}buildStripes(e,t,n){let r=e.map(e=>e.clip??this.rectPoints({x0:e.x-e.width/2,z0:e.z-e.depth/2,x1:e.x+e.width/2,z1:e.z+e.depth/2})),i=new V(this.polygonsGeometry(r,0,n),sp(t));return i.frustumCulled=!1,i}buildTrees(){let e=new J;e.name=`trees`;let t=new g(new v(2.75,2),sp(ip.tree),Math.max(this.city.trees.length,1));t.name=`tree-canopies`,t.frustumCulled=!1;let n=new g(new fe(.55,.72,1.5,5),sp(ip.treeTrunk),Math.max(this.city.trees.length,1));return n.name=`tree-stumps`,n.frustumCulled=!1,this.city.trees.forEach((e,r)=>{this.matrix.makeScale(e.scale,e.scale,e.scale),this.matrix.setPosition(e.x,Q+.75*e.scale,e.z),n.setMatrixAt(r,this.matrix),this.matrix.setPosition(e.x,Q+3.5*e.scale,e.z),t.setMatrixAt(r,this.matrix)}),t.instanceMatrix.needsUpdate=!0,n.instanceMatrix.needsUpdate=!0,e.add(n,t),e}buildCars(){let e=[...this.city.cars,...this.city.decorativeFragments.flatMap(e=>e.parkedCars)],t=new g(new me(1,1,1),sp(16777215),Math.max(e.length,1));return t.name=`cars`,t.frustumCulled=!1,e.forEach((e,n)=>{let r=4.875,i=2.1;this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(e.alongX?r:i,1.775,e.alongX?i:r),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,(e.parked?Q:1)+1,e.z),t.setMatrixAt(n,this.matrix),this.color.setHex(rp[e.paletteIndex%rp.length]??16777215),t.setColorAt(n,this.color)}),t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0),t}refresh(e){let t=this.city.get(e);t&&(this.writeBuilding(t),this.flush(this.slots.get(e)?.mesh),this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,t.clip&&this.rebuildClipped(),this.rebuildLandscaping())}refreshAll(){for(let e of this.city.buildings)this.writeBuilding(e);for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,this.rebuildClipped(),this.rebuildLandscaping()}syncDamage(e){let t=this.destruction?.syncDamage(e)??{phaseChanged:!1,transformsChanged:!1,changedIds:new Set};if(t.phaseChanged){let e=!1;for(let n of t.changedIds){let t=this.city.buildings.find(e=>e.id===n);t&&(this.writeBuilding(t),e||=!!t.clip)}for(let e of this.buildingMeshList)this.flush(e);this.flushDetails(),this.debris.instanceMatrix.needsUpdate=!0,e&&this.rebuildClipped()}return t}landscapingSignature(){return this.city.buildings.filter(e=>e.district===`downtown`).map(e=>`${e.id}:${e.state[0]}`).join(`|`)}rebuildLandscaping(){let e=this.landscapingSignature();if(e===this.landscapedState)return;this.landscapedState=e;let t=this.buildLandscapedBuiltBlocks();if(this.landscaped){this.group.remove(this.landscaped),this.landscaped.geometry.dispose();let e=this.landscaped.material;Array.isArray(e)?e.forEach(e=>e.dispose()):e.dispose()}this.landscaped=t,t.castShadow=!0,t.receiveShadow=!0,this.group.add(t)}flush(e){e&&(e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0))}flushDetails(){for(let e of[this.roofs,this.trims,this.windowBands,this.greebles])this.flush(e)}writeBuilding(e){let t=this.slots.get(e.id);if(!t)return;let n=al(e),r=e.height,i=e.width,a=e.depth,o=np(e);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n===0?i:0,n===0?r:0,n===0?a:0),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,Q+r/2,e.z),t.mesh.setMatrixAt(t.index,this.matrix),this.color.setHex(o.facade),t.mesh.setColorAt(t.index,this.color),this.writeBuildingDetails(e,i,a,r,o),this.writeGreebles(e,Q+r),this.writeDebris(e)}writeBuildingDetails(e,t,n,r,i){let a=this.detailSlots.get(e.id);if(a===void 0)return;let o=(t,n,r,i,o,s)=>{this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(n,r,i),this.matrix.scale(this.scale),this.matrix.setPosition(e.x,o,e.z),t.setMatrixAt(a,this.matrix),this.color.setHex(s),t.setColorAt(a,this.color)};if(al(e)>0){for(let t of[this.roofs,this.trims,this.windowBands])this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,Q,e.z),t.setMatrixAt(a,this.matrix);return}let s=.65,c=.42,l=Q+r,u=Math.min(1.15,Math.max(.65,r*.09)),d=l-Math.min(4.2,Math.max(1.6,r*.22));o(this.trims,t*1.025,c,n*1.025,l-c/2,i.trim),o(this.windowBands,t*1.012,u,n*1.012,d,i.window),o(this.roofs,t*.985,s,n*.985,l+s/2,i.roof)}writeGreebles(e,t){let n=this.greebleStart.get(e.id);if(n===void 0)return;let r=al(e)===0;for(let i=0;i<e.greebles;i++){if(!r){this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,t,e.z),this.greebles.setMatrixAt(n+i,this.matrix);continue}let a=Z({x:((i+1)/(e.greebles+1)-.5)*e.width*.55,z:((e.id+i)%5/5-.5)*e.depth*.55},e.rotation??0),o=Math.min(e.width,e.depth)*.16,s=o*(.52+(e.id+i)%3*.1);this.matrix.makeRotationY(-(e.rotation??0)),this.scale.set(o*1.28,s,o),this.matrix.scale(this.scale),this.matrix.setPosition(e.x+a.x,t+s/2,e.z+a.z),this.greebles.setMatrixAt(n+i,this.matrix),this.color.setHex(ip.hvac),this.greebles.setColorAt(n+i,this.color)}}writeDebris(e){let t=e.id*op;if(!(t+op>this.debris.count))for(let n=0;n<op;n++)this.matrix.makeScale(0,0,0),this.matrix.setPosition(e.x,Q,e.z),this.debris.setMatrixAt(t+n,this.matrix)}get meshCount(){return this.group.children.length}get buildingMeshes(){return this.buildingMeshList}get buildingHeatmapSources(){return this.clipped?[...this.buildingMeshList,this.roofs,this.clipped]:[...this.buildingMeshList,this.roofs]}get buildingDamageHeatmapSources(){return this.destruction?.heatmapSources??[]}syncBuildingDamageHeatmap(e,t){this.destruction?.syncHeatmap(e),this.destruction?.syncRubbleHeatmap(t)}get buildingHeatmapInstanceIds(){return this.buildingHeatmapInstanceIdsByMesh}renderedStoreysOf(e){let t=this.slots.get(e);return typeof t?.mesh.userData.storeys==`number`?t.mesh.userData.storeys:void 0}renderedHeightOf(e){if(this.city.get(e)?.clip)return 2.2;let t=this.slots.get(e);if(t)return t.mesh.getMatrixAt(t.index,this.matrix),this.matrix.elements[5]}dispose(){this.destruction?.dispose();for(let e of this.group.children)if(e instanceof V){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}}},up={"machine-cannon":{colour:6865096,tracerWidth:4.1,impactRadius:3.1},"machine-harbinger-laser":{colour:6865096,tracerWidth:.48,impactRadius:2.3},"machine-rifle":{colour:16765503,tracerWidth:.42,tracerLength:2,impactRadius:1,muzzleFlash:{colour:16769898,radius:1.15,durationMs:55}},"ancient-acid":{colour:6877280,tracerWidth:.34,impactRadius:1.7},"ancient-bite":{colour:16760428,tracerWidth:0,impactRadius:1.8}},dp={colour:16777215,tracerWidth:.25,impactRadius:1.2};function fp(e){return up[e]??dp}var pp={"machine-infantry":{"machine-rifle":[{forward:2.28,right:0,height:7}]}};function mp(e,t,n){let r=pp[e]?.[t];return r?.[n%r.length]}var hp=256,gp=180,_p=new W(0,1,0);function vp(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}function yp(e,t,n){let r=e.instanceColor,i=t*3;if(r&&Math.fround(n.r)===r.array[i]&&Math.fround(n.g)===r.array[i+1]&&Math.fround(n.b)===r.array[i+2])return!1;e.setColorAt(t,n);let a=e.instanceColor;return a?(a.setUsage(O),a.addUpdateRange(i,3),!0):!1}function bp(e,t,n){return Math.max(t,Math.min(n,e))}var xp=class{group=new J;beamsMesh;impactsMesh;flashesMesh;matrix=new Pe;position=new W;direction=new W;scale=new W;rotation=new T;colour=new z;beams=[];impacts=[];flashes=[];melee=new Map;constructor(){let e=new Se({color:16777215,transparent:!0,opacity:.9,depthWrite:!1});e.userData.outlineParameters={visible:!1},this.beamsMesh=new g(new fe(1,1,1,6),e,hp),this.impactsMesh=new g(new v(1,1),new Se({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),hp),this.flashesMesh=new g(new v(1,1),new Se({color:16777215,transparent:!0,opacity:.95,depthWrite:!1}),hp);for(let e of[this.beamsMesh,this.impactsMesh,this.flashesMesh])e.instanceMatrix.setUsage(O),e.count=0;this.beamsMesh.frustumCulled=!1,this.impactsMesh.frustumCulled=!1,this.flashesMesh.frustumCulled=!1,this.beamsMesh.renderOrder=20,this.impactsMesh.renderOrder=21,this.flashesMesh.renderOrder=22,this.group.add(this.beamsMesh,this.impactsMesh,this.flashesMesh)}sync(e,t){for(let n of e)n.kind===`combatHit`&&this.addHit(n,t);this.beams=this.beams.filter(e=>t<e.startedAt+e.duration),this.impacts=this.impacts.filter(e=>t<e.startedAt+e.duration),this.flashes=this.flashes.filter(e=>t<e.startedAt+e.duration);for(let[e,n]of this.melee)t>=n.startedAt+n.duration&&this.melee.delete(e);this.syncBeams(t),this.syncImpacts(t),this.syncFlashes(t)}meleePose(e,t){let n=this.melee.get(e);if(!n)return;let r=bp((t-n.startedAt)/n.duration,0,1);if(r>=1)return;let i=Math.sin(r*Math.PI);return{forward:i*n.distance,yaw:i*.18}}addHit(e,t){let n=gs(e.weaponId),r=fp(e.weaponId),i=yl(e.attackerTypeId),a=e.targetHeight??yl(e.targetTypeId).height,o=mp(e.attackerTypeId,e.weaponId,e.shotIndex),s=o?new W(e.sourceX+Math.cos(e.sourceHeading)*o.forward-Math.sin(e.sourceHeading)*o.right,Q+o.height,e.sourceZ+Math.sin(e.sourceHeading)*o.forward+Math.cos(e.sourceHeading)*o.right):this.defaultSource(e,i.radius,i.height),c=new W(e.targetX,Q+a*.56,e.targetZ);if(n.projectileSpeed===0){this.melee.set(e.attackerId,{startedAt:t,duration:gp,distance:Math.max(.6,i.radius*.1)}),this.pushImpact({position:c,colour:r.colour,radius:r.impactRadius,startedAt:t,duration:130});return}let l=bp(s.distanceTo(c)/n.projectileSpeed*250,65,180);this.pushBeam({start:s,end:c,colour:r.colour,width:r.tracerWidth,...r.tracerLength===void 0?{}:{length:r.tracerLength},startedAt:t,duration:l}),r.muzzleFlash&&this.pushFlash({position:s,colour:r.muzzleFlash.colour,radius:r.muzzleFlash.radius,startedAt:t,duration:r.muzzleFlash.durationMs}),this.pushImpact({position:c,colour:r.colour,radius:r.impactRadius,startedAt:t+l*.72,duration:120})}defaultSource(e,t,n){let r=Math.max(1,t*.48),i=e.weaponId===`machine-cannon`?.6:.3,a=(e.shotIndex-(e.shotCount-1)/2)*Math.max(.8,t*i);return new W(e.sourceX+Math.cos(e.sourceHeading)*r-Math.sin(e.sourceHeading)*a,Q+n*.58,e.sourceZ+Math.sin(e.sourceHeading)*r+Math.cos(e.sourceHeading)*a)}pushBeam(e){this.beams.length>=hp&&this.beams.shift(),this.beams.push(e)}pushImpact(e){this.impacts.length>=hp&&this.impacts.shift(),this.impacts.push(e)}pushFlash(e){this.flashes.length>=hp&&this.flashes.shift(),this.flashes.push(e)}syncBeams(e){let t=0,n=!1,r=!1;for(let i of this.beams){let a=bp((e-i.startedAt)/i.duration,0,1);this.direction.subVectors(i.end,i.start);let o=this.direction.length(),s=o*a,c=i.length===void 0?0:Math.max(0,s-Math.min(i.length,o)),l=s-c;if(l<=1e-5)continue;this.direction.normalize(),this.position.copy(i.start).addScaledVector(this.direction,c+l/2),this.rotation.setFromUnitVectors(_p,this.direction);let u=1-a*.55;this.scale.set(i.width*u,l,i.width*u),this.matrix.compose(this.position,this.rotation,this.scale),n=vp(this.beamsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=yp(this.beamsMesh,t,this.colour)||r,t++}this.finish(this.beamsMesh,t,n,r)}syncImpacts(e){let t=0,n=!1,r=!1;for(let i of this.impacts){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.45+Math.sin(a*Math.PI)*.9);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=vp(this.impactsMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=yp(this.impactsMesh,t,this.colour)||r,t++}this.finish(this.impactsMesh,t,n,r)}syncFlashes(e){let t=0,n=!1,r=!1;for(let i of this.flashes){let a=(e-i.startedAt)/i.duration;if(a<0||a>=1)continue;let o=i.radius*(.65+Math.sin(a*Math.PI)*.75);this.matrix.makeScale(o,o,o),this.matrix.setPosition(i.position),n=vp(this.flashesMesh,t,this.matrix)||n,this.colour.setHex(i.colour),r=yp(this.flashesMesh,t,this.colour)||r,t++}this.finish(this.flashesMesh,t,n,r)}finish(e,t,n,r){e.count=t,n&&(e.instanceMatrix.needsUpdate=!0),r&&e.instanceColor&&(e.instanceColor.needsUpdate=!0)}dispose(){this.beamsMesh.geometry.dispose(),this.beamsMesh.material.dispose(),this.impactsMesh.geometry.dispose(),this.impactsMesh.material.dispose(),this.flashesMesh.geometry.dispose(),this.flashesMesh.material.dispose()}},Sp=[10800,-81e3,10800],Cp=35e3,wp=[8433856,8433856,8958144,8960192,9484488],Tp=[12636344,11585712,12112064,11585720,12636352,11059376],Ep=40,Dp=22;function Op(e,t){return(e*17+t*13)%19/18}function kp(e,t,n){let r=Math.atan2(n,e),i=Math.asin(t/Math.hypot(e,t,n)),a=Math.floor((r+Math.PI)/(Math.PI*2)*Ep);return Math.floor((i+Math.PI/2)/Math.PI*Dp)*Ep+a}function Ap(){let e=new v(Cp,5).toNonIndexed(),t=e.getAttribute(`position`),n=new Float32Array(t.count*3),r=new z;for(let e=0;e<t.count/3;e++){let i=e*3,a=((t.getX(i)??0)+(t.getX(i+1)??0)+(t.getX(i+2)??0))/3,o=((t.getY(i)??0)+(t.getY(i+1)??0)+(t.getY(i+2)??0))/3,s=((t.getZ(i)??0)+(t.getZ(i+1)??0)+(t.getZ(i+2)??0))/3,c=(a+s)*.6+o*.53,l=kp(a,o,s),u=c<Cp*.35||Op(l,1)>.48?wp:Tp,d=Math.min(u.length-1,Math.floor(Op(l,2)*u.length));r.setHex(u[d]);for(let e=0;e<3;e++){let t=(i+e)*3;n[t]=r.r,n[t+1]=r.g,n[t+2]=r.b}}e.setAttribute(`color`,new Ae(n,3));let i=new V(e,new Se({vertexColors:!0,fog:!1}));return i.position.set(Sp[0],Sp[1],Sp[2]),i}var jp=class{group=new J;constructor(){this.group.add(Ap())}dispose(){for(let e of this.group.children)e instanceof V&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose());this.group.clear()}},Mp=2e-5,Np=.58,Pp=class{units;group=new J;overlayScene=new b;depthScene=new b;occluderTarget;unitDepthTarget;size=new R;overlays;importedOverlays;constructor(e){this.units=e,this.occluderTarget=Fp(),this.unitDepthTarget=Fp(),this.group.name=`unit-occlusion-overlay`,this.overlayScene.add(this.group),this.overlays=this.units.occlusionSources().map(e=>this.createOverlay(e)),this.importedOverlays=this.units.importedOcclusionSources().map(e=>this.createImportedOverlay(e))}captureOccluderDepth(e,t,n){this.resizeToRenderer(e);let r=this.units.group.visible,i=e.getRenderTarget(),a=e.autoClear,o=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,this.units.group.visible=!1;try{e.setRenderTarget(this.occluderTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(t,n)}finally{e.setRenderTarget(i),e.autoClear=a,this.units.group.visible=r,e.shadowMap.autoUpdate=o}}render(e,t){for(let e of this.overlays){let t=e.source.source.visible?e.source.source.count:0;e.mesh.count=t,e.depthMesh.count=t,e.colour.setHex(ct(e.source.faction))}for(let e of this.importedOverlays)e.colour.setHex(ct(e.source.faction));this.captureUnitSilhouetteDepth(e,t);let n=e.autoClear;try{e.autoClear=!1,e.render(this.overlayScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.material,e.render(n.scene,t))}finally{e.autoClear=n}}dispose(){this.occluderTarget.dispose(),this.unitDepthTarget.dispose();for(let e of this.overlays)e.material.dispose(),e.depthMaterial.dispose();for(let e of this.importedOverlays)e.material.dispose(),e.depthMaterial.dispose(),e.source.source.removeFromParent(),e.scene.clear();this.group.clear(),this.overlayScene.clear(),this.depthScene.clear()}createOverlay(e){let t=new z(ct(e.faction)),n=new w({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:Np},epsilon:{value:Mp}},vertexShader:`
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
      `}),r=new g(e.geometry,n,e.source.instanceMatrix.count);r.instanceMatrix=e.source.instanceMatrix,r.count=0,r.frustumCulled=!1,this.group.add(r);let i=new w({colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          vec4 viewPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        void main() { }
      `}),a=new g(e.geometry,i,e.source.instanceMatrix.count);return a.instanceMatrix=e.source.instanceMatrix,a.count=0,a.frustumCulled=!1,this.depthScene.add(a),{source:e,mesh:r,depthMesh:a,material:n,depthMaterial:i,colour:t}}createImportedOverlay(e){let t=new z(ct(e.faction)),n=new w({transparent:!0,side:2,depthTest:!1,depthWrite:!1,uniforms:{occluderDepth:{value:this.occluderTarget.depthTexture},unitDepth:{value:this.unitDepthTarget.depthTexture},resolution:{value:this.size},colour:{value:t},opacity:{value:Np},epsilon:{value:Mp}},vertexShader:`
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
      `}),r=new w({side:2,colorWrite:!1,depthTest:!0,depthWrite:!0,vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        void main() { }
      `}),i=new b;return i.add(e.source),{source:e,scene:i,material:n,depthMaterial:r,colour:t}}captureUnitSilhouetteDepth(e,t){let n=e.getRenderTarget(),r=e.autoClear;try{e.setRenderTarget(this.unitDepthTarget),e.autoClear=!1,e.clear(!0,!0,!0),e.render(this.depthScene,t);for(let n of this.importedOverlays)n.source.source.children.length!==0&&(n.scene.overrideMaterial=n.depthMaterial,e.render(n.scene,t))}finally{e.setRenderTarget(n),e.autoClear=r}}resizeToRenderer(e){e.getDrawingBufferSize(this.size);let t=Math.max(1,Math.floor(this.size.x)),n=Math.max(1,Math.floor(this.size.y));(this.occluderTarget.width!==t||this.occluderTarget.height!==n)&&(this.occluderTarget.setSize(t,n),this.unitDepthTarget.setSize(t,n))}};function Fp(){let e=new d(1,1,Ue);e.format=Ye;let t=new We(1,1,{depthBuffer:!0});return t.depthTexture=e,t}var Ip=2,Lp=8,Rp=.3,zp=.52,Bp=class{units;maskScene=new b;maskGroup=new J;maskTarget=Vp(!0);horizontalTarget=Vp(!1);postScene=new b;postCamera=new H(-1,1,1,-1,0,2);horizontalMaterial;compositeMaterial;fullscreen;buildingMask;masks;resolution=new R;clearColour=new z;constructor(e){this.units=e,this.postCamera.position.z=1,this.maskScene.add(this.maskGroup),this.masks=this.units.selectionSources().map(e=>this.createMask(e)),this.maskGroup.add(this.units.importedSelectionSources()),this.buildingMask=new V(new D,new Se({color:16719904,side:2,toneMapped:!1})),this.buildingMask.visible=!1,this.maskGroup.add(this.buildingMask),this.horizontalMaterial=Hp(this.maskTarget.texture,this.resolution,!1),this.compositeMaterial=Hp(this.horizontalTarget.texture,this.resolution,!0),this.compositeMaterial.uniforms.originMask.value=this.maskTarget.texture,this.fullscreen=new V(new D(2,2),this.horizontalMaterial),this.fullscreen.frustumCulled=!1,this.postScene.add(this.fullscreen)}render(e,t,n){this.syncSources(n),!(this.units.selectedDrawn===0&&this.units.alertedDrawn===0&&!n)&&(this.resizeToRenderer(e),this.captureMask(e,t),this.renderHorizontal(e),this.composite(e))}dispose(){this.maskTarget.dispose(),this.horizontalTarget.dispose(),this.horizontalMaterial.dispose(),this.compositeMaterial.dispose(),this.fullscreen.geometry.dispose(),this.buildingMask.material.dispose();for(let e of this.masks)e.mesh.material.dispose();this.maskGroup.remove(this.units.importedSelectionSources()),this.maskGroup.clear(),this.maskScene.clear(),this.postScene.clear()}createMask(e){let t=new g(e.geometry,new Se({color:e.alert?16719904:ul[e.faction].line,side:2,toneMapped:!1}),e.source.instanceMatrix.count);return t.instanceMatrix=e.source.instanceMatrix,t.count=0,t.frustumCulled=!1,this.maskGroup.add(t),{source:e,mesh:t}}syncSources(e){for(let e of this.masks)e.mesh.count=e.source.source.count;this.buildingMask.visible=e!==void 0,e&&(this.buildingMask.geometry=e.geometry,this.buildingMask.material.color.setHex(e.colour))}captureMask(e,t){let n=e.getRenderTarget(),r=e.autoClear,i=e.getClearAlpha();e.getClearColor(this.clearColour);try{e.setRenderTarget(this.maskTarget),e.autoClear=!1,e.setClearColor(0,0),e.clear(!0,!0,!0),e.render(this.maskScene,t)}finally{e.setClearColor(this.clearColour,i),e.setRenderTarget(n),e.autoClear=r}}renderHorizontal(e){let t=e.getRenderTarget(),n=e.autoClear;try{e.setRenderTarget(this.horizontalTarget),e.autoClear=!1,e.clear(!0,!0,!0),this.fullscreen.material=this.horizontalMaterial,e.render(this.postScene,this.postCamera)}finally{e.setRenderTarget(t),e.autoClear=n}}composite(e){let t=e.autoClear;try{e.autoClear=!1,this.fullscreen.material=this.compositeMaterial,e.render(this.postScene,this.postCamera)}finally{e.autoClear=t}}resizeToRenderer(e){e.getDrawingBufferSize(this.resolution);let t=Math.max(1,Math.floor(this.resolution.x)),n=Math.max(1,Math.floor(this.resolution.y));(this.maskTarget.width!==t||this.maskTarget.height!==n)&&(this.maskTarget.setSize(t,n),this.horizontalTarget.setSize(t,n));let r=Math.min(Lp,Math.max(1,Math.round(Ip*e.getPixelRatio())));this.horizontalMaterial.uniforms.radius.value=r,this.compositeMaterial.uniforms.radius.value=r}};function Vp(e){let t=new We(1,1,{depthBuffer:e});return t.texture.minFilter=Ze,t.texture.magFilter=Ze,t.texture.generateMipmaps=!1,t}function Hp(e,t,n){return new w({transparent:n,depthTest:!1,depthWrite:!1,uniforms:{mask:{value:e},originMask:{value:e},resolution:{value:t},radius:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:n?Wp():Up()})}function Up(){return`
    uniform sampler2D mask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${Lp}; offset <= ${Lp}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(float(offset) / resolution.x, 0.0));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      gl_FragColor = best;
    }
  `}function Wp(){return`
    uniform sampler2D mask;
    uniform sampler2D originMask;
    uniform vec2 resolution;
    uniform float radius;
    varying vec2 vUv;
    void main() {
      vec4 best = vec4(0.0);
      for (int offset = -${Lp}; offset <= ${Lp}; offset++) {
        if (abs(float(offset)) > radius) continue;
        vec4 sampleMask = texture2D(mask, vUv + vec2(0.0, float(offset) / resolution.y));
        if (sampleMask.a > best.a) best = sampleMask;
      }
      if (best.a < 0.5) discard;
      float original = texture2D(originMask, vUv).a;
      float opacity = original >= 0.5 ? ${Rp.toFixed(2)} : ${zp.toFixed(2)};
      gl_FragColor = vec4(best.rgb, opacity);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}var Gp={x:-1244,y:3e3,z:700},Kp=16770750,qp=2.6,Jp=7438479,Yp=.82,Xp={x:-Gp.x/Gp.y,z:-Gp.z/Gp.y},Zp=4096,Qp=760,$p=1900,em=.9;function tm(e,t,n){if(!e.castShadow)return;let r=ye.clamp(n,0,1),i=ye.lerp(Qp,$p,r*r),a=i*2/Zp,o=Math.round(t.x/a)*a,s=Math.round(t.z/a)*a;e.position.set(Gp.x+o,Gp.y,Gp.z+s),e.target.position.set(o,0,s),e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.radius=em/a,e.shadow.camera.updateProjectionMatrix()}function nm(e={cityLighting:!0,enhancedShadows:!0}){let t=e.cityLighting?new l(Kp,qp):new l(16774102,2.05);return e.enhancedShadows?t.position.set(Gp.x,Gp.y,Gp.z):t.position.set(-1,1,0).normalize(),t.castShadow=e.enhancedShadows,e.enhancedShadows?(t.shadow.mapSize.set(Zp,Zp),t.shadow.camera.left=-1900,t.shadow.camera.right=$p,t.shadow.camera.top=$p,t.shadow.camera.bottom=-1900,t.shadow.camera.near=100,t.shadow.camera.far=6e3,t.shadow.normalBias=.12,t.shadow.bias=-8e-5,t.shadow.radius=em/($p*2/Zp),t.shadow.camera.updateProjectionMatrix(),t):t}function rm(e={cityLighting:!0,enhancedShadows:!0}){return e.cityLighting?new M(ip.sky,Jp,Yp):new M(ip.sky,7236170,1)}var im=256,am=Q+.12,om=Xp.x,sm=Xp.z,cm=2.75,lm=6.25,um=8,dm=1.4,fm=1,pm=0;function mm(e,t,n){let r=t*16,i=e.instanceMatrix.array;for(let a=0;a<16;a++)if(Math.fround(n.elements[a]??0)!==i[r+a])return e.setMatrixAt(t,n),e.instanceMatrix.addUpdateRange(r,16),!0;return!1}var hm=class{group=new J;buildings;contacts;trees;units;matrix=new Pe;scale=new W;enhancedShadows;buildingSignature=``;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}){this.enhancedShadows=n.enhancedShadows;let r=(e,t)=>new rt({color:1512978,flatShading:!0,transparent:!0,opacity:e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,...t===void 0?{}:{side:t}});this.buildings=new V(new q,r(n.enhancedShadows?.1:.24)),this.buildings.name=`building-shadows`,this.contacts=new V(new q,r(.22,2)),this.contacts.name=`building-contact-ao`,this.contacts.visible=n.ambientOcclusion,this.trees=new V(new q,r(n.enhancedShadows?.13:.24)),this.trees.name=`tree-shadows`,this.units=new g(new G(1,12),r(n.enhancedShadows?.18:.24),im),this.units.visible=!n.enhancedShadows,this.units.instanceMatrix.setUsage(O),this.units.count=0;for(let e of[this.buildings,this.contacts,this.trees,this.units])e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1;this.group.add(this.buildings,this.contacts,this.trees,this.units),this.rebuildTreeShadows(e),this.sync(e,t)}sync(e,t,n=[]){let r=e.buildings.map(e=>al(e)).join(`,`);r!==this.buildingSignature&&(this.buildingSignature=r,this.rebuildBuildingShadows(e),this.rebuildBuildingContacts(e));let i=0,a=!1,o=this.units.instanceMatrix.count,s=(e,t,n)=>{this.matrix.makeRotationX(-Math.PI/2),this.scale.set(n*.9,n*.62,1),this.matrix.scale(this.scale),this.matrix.setPosition(e+n*.22,am+.03,t+n*.16),a=mm(this.units,i++,this.matrix)||a};for(let e of t.units){if(i>=o)break;s(e.x,e.z,xs(t.typeOf(e),e.deployed))}for(let e of n){if(i>=o)break;s(e.x,e.z,e.radius)}this.units.count=i,a&&(this.units.instanceMatrix.needsUpdate=!0)}rebuildBuildingShadows(e){let t=[],n=e.surfaces.flatMap(gm);for(let r of e.buildings){let e=sl(r);if(e<=0)continue;let i=e*(this.enhancedShadows?1:.48),a=this.enhancedShadows?om:fm,o=this.enhancedShadows?sm:pm,s=r.clip??na(r),c=_m([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]);this.appendClippedShadow(t,n,c)}let r=this.buildings.geometry,i=new q;i.setAttribute(`position`,new Ae(new Float32Array(t),3)),i.computeVertexNormals(),this.buildings.geometry=i,r.dispose()}rebuildBuildingContacts(e){let t=[],n=e.surfaces.flatMap(gm);for(let r of e.buildings){if(r.state===`rubble`)continue;let e=r.clip??na(r);if(e.length<3)continue;let i=e.map(e=>{let t=e.x-r.x,n=e.z-r.z,i=Math.hypot(t,n)||1;return{x:e.x+t/i*dm,z:e.z+n/i*dm}});for(let r=0;r<e.length;r++){let a=(r+1)%e.length,o=e[r],s=e[a],c=i[r],l=i[a];!o||!s||!c||!l||(this.appendClippedShadow(t,n,[o,l,c]),this.appendClippedShadow(t,n,[o,s,l]))}}let r=this.contacts.geometry,i=new q;i.setAttribute(`position`,new Ae(new Float32Array(t),3)),i.computeVertexNormals(),this.contacts.geometry=i,r.dispose()}rebuildTreeShadows(e){let t=[],n=e.surfaces.flatMap(gm);for(let r of e.trees){let e=cm*r.scale,i=lm*r.scale*(this.enhancedShadows?1:.48),a=this.enhancedShadows?om:fm,o=this.enhancedShadows?sm:pm,s=Array.from({length:um},(t,n)=>{let i=n/um*Math.PI*2;return{x:r.x+Math.cos(i)*e,z:r.z+Math.sin(i)*e}});this.appendClippedShadow(t,n,_m([...s,...s.map(e=>({x:e.x+a*i,z:e.z+o*i}))]))}let r=this.trees.geometry,i=new q;i.setAttribute(`position`,new Ae(new Float32Array(t),3)),i.computeVertexNormals(),this.trees.geometry=i,r.dispose()}appendClippedShadow(e,t,n){for(let r of t){let t=Ui(r,n);for(let n=1;n<t.length-1;n++)this.appendTriangle(e,t[0],t[n+1],t[n])}}appendTriangle(e,t,n,r){if(!(!t||!n||!r))for(let i of[t,n,r])e.push(i.x,am,i.z)}dispose(){for(let e of[this.buildings,this.contacts,this.trees,this.units])e.geometry.dispose(),e.material.dispose()}};function gm(e){if(e.length<3)return[];let t=e.map(e=>new R(e.x,e.z));return i.triangulateShape(t,[]).flatMap(t=>{let[n,r,i]=t,a=n===void 0?void 0:e[n],o=r===void 0?void 0:e[r],s=i===void 0?void 0:e[i];return a&&o&&s?[[a,o,s]]:[]})}function _m(e){let t=[...e].sort((e,t)=>e.x-t.x||e.z-t.z),n=(e,t,n)=>(t.x-e.x)*(n.z-e.z)-(t.z-e.z)*(n.x-e.x),r=e=>{let t=[];for(let r of e){for(;t.length>=2&&n(t[t.length-2],t[t.length-1],r)<=0;)t.pop();t.push(r)}return t},i=r(t),a=r([...t].reverse());return i.pop(),a.pop(),[...i,...a]}var vm=760,ym={machines:7398333,ancients:14730627},bm=class{group=new J;surface=new J;inner;outer;innerMaterial;outerMaterial;startedAt=-1/0;constructor(){this.innerMaterial=xm(),this.outerMaterial=xm(),this.inner=Sm(3.75,5.45,this.innerMaterial),this.outer=Sm(7.8,8.8,this.outerMaterial),this.surface.rotation.x=-Math.PI/2,this.surface.add(this.inner,this.outer),this.group.add(this.surface),this.group.visible=!1}show(e,t,n,r){let i=ym[n];this.innerMaterial.color.setHex(i),this.outerMaterial.color.setHex(i),this.group.position.set(e,Q+.35,t),this.startedAt=r,this.group.visible=!0,this.sync(r)}sync(e){if(!this.group.visible)return;let t=(e-this.startedAt)/vm;if(t>=1){this.group.visible=!1;return}let n=Math.max(0,t),r=1+Math.sin(n*Math.PI)*.06;this.inner.scale.setScalar(r),this.outer.scale.setScalar(.72+n*.9),this.innerMaterial.opacity=.82*(1-n*.38),this.outerMaterial.opacity=.76*(1-n)}dispose(){this.inner.geometry.dispose(),this.outer.geometry.dispose(),this.innerMaterial.dispose(),this.outerMaterial.dispose(),this.group.clear()}};function xm(){let e=new rt({color:16777215,flatShading:!0,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1,side:2});return e.userData.outlineParameters={visible:!1},e}function Sm(e,t,n){let r=new V(new ke(e,t,48),n);return r.renderOrder=16,r}var Cm=2400,wm=7e3,Tm=1600,Em=1e3;function Dm(e,t,n,r){let i=(e,i)=>({x:t+e*r,y:n+i*r}),a=[i(-115,5),i(-75,-25),i(-20,-18),i(5,-48),i(70,-38),i(105,-8),i(92,18),i(-55,24)],o=[a[7],a[6],i(92,43),i(-55,49)],s=[a[6],a[5],i(105,18),i(92,43)],c=(t,n)=>{let r=t[0];if(r){e.beginPath(),e.moveTo(r.x,r.y);for(let n of t.slice(1))e.lineTo(n.x,n.y);e.closePath(),e.fillStyle=n,e.fill()}};c(o,`#dbd8c6`),c(s,`#c9c8bb`),c(a,`#f6f0dd`)}function Om(){let e=document.createElement(`canvas`);e.width=Tm,e.height=Em;let t=e.getContext(`2d`);if(t){let n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,`#${new z(ip.sky).getHexString()}`),n.addColorStop(1,`#${new z(ip.skyHorizon).getHexString()}`),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),Dm(t,255,160,.75),Dm(t,1240,125,1.1)}let n=new _e(e);return n.colorSpace=A,n.needsUpdate=!0,n}var km=class{scene=new b;city;units;unitOcclusion;selectionSilhouette;combat;moveCommandIndicator;shadows;skyGradient;earth;sun;constructor(e,t,n={cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}){this.skyGradient=Om(),this.scene.background=this.skyGradient,this.scene.fog=new y(ip.skyHorizon,Cm,wm),this.earth=new jp,this.scene.add(this.earth.group),this.shadows=new hm(e,t,n),this.scene.add(this.shadows.group),this.city=new lp(e),this.scene.add(this.city.group),this.units=new Fl(t),this.scene.add(this.units.group),this.unitOcclusion=new Pp(this.units),this.selectionSilhouette=new Bp(this.units),this.combat=new xp,this.scene.add(this.combat.group),this.moveCommandIndicator=new bm,this.scene.add(this.moveCommandIndicator.group),this.sun=nm(n),this.scene.add(this.sun,this.sun.target),this.scene.add(rm(n))}updateShadowCoverage(e,t){tm(this.sun,e,t)}dispose(){this.city.dispose(),this.unitOcclusion.dispose(),this.selectionSilhouette.dispose(),this.units.dispose(),this.combat.dispose(),this.moveCommandIndicator.dispose(),this.shadows.dispose(),this.earth.dispose(),this.skyGradient.dispose(),this.scene.clear()}},Am=[1,2,3,4,5,6,7,8,9,0],jm=class{ids=[];groups=new Map;get size(){return this.ids.length}list(){return this.ids}has(e){return this.ids.includes(e)}primary(){return this.ids[0]}set(e){this.ids=[...new Set(e)].sort((e,t)=>e-t)}add(e){this.set([...this.ids,...e])}toggle(e){this.set(this.has(e)?this.ids.filter(t=>t!==e):[...this.ids,e])}clear(){this.ids=[]}assignGroup(e,t=this.ids){Am.includes(e)&&this.groups.set(e,[...t])}recallGroup(e){let t=this.groups.get(e);return!t||t.length===0?!1:(this.set(t),!0)}groupSize(e){return this.groups.get(e)?.length??0}occupiedGroups(){return Am.filter(e=>this.groupSize(e)>0)}prune(e){this.ids=this.ids.filter(e);for(let[t,n]of this.groups){let r=n.filter(e);r.length!==n.length&&(r.length===0?this.groups.delete(t):this.groups.set(t,r))}}},Mm=`human-resources.frontend`;function Nm(){return{colourVariant:{machines:0,ancients:0},overlayVisible:!0,cityLighting:!0,enhancedShadows:!0,ambientOcclusion:!1}}function Pm(e=typeof window>`u`?void 0:window.localStorage){let t=Nm();try{let n=e?.getItem(Mm);if(!n)return t;let r=JSON.parse(n),i=e=>+(e===1);return{colourVariant:{machines:i(r.colourVariant?.machines),ancients:i(r.colourVariant?.ancients)},overlayVisible:r.overlayVisible!==!1,cityLighting:r.cityLighting!==!1,enhancedShadows:r.enhancedShadows!==!1,ambientOcclusion:r.ambientOcclusion===!0}}catch{return t}}function Fm(e,t=typeof window>`u`?void 0:window.localStorage){try{t?.setItem(Mm,JSON.stringify(e))}catch{}}var Im=3,Lm=13,Rm=`
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
`,zm=!1;function Bm(){if(zm)return;zm=!0;let e=document.createElement(`style`);e.textContent=Rm,document.head.append(e)}function Vm(e){let t=new URLSearchParams(e).get(`ai`);if(!t)return;let n=t===`both`?[`machines`,`ancients`]:t.split(`,`).map(e=>e.trim()),r={};for(let e of n)(e===`machines`||e===`ancients`)&&(r[e]=`ai`);return Object.keys(r).length>0?r:void 0}var Hm=1213353265,Um=250,Wm=85,Gm=100,Km=1800,qm=[1,2,4],Jm=80,Ym=3;function Xm(e,t,n){let r,i=1/0;for(let a of e.buildings){if(a.state===`rubble`)continue;let e=(a.x-t)**2+(a.z-n)**2;e<i&&(i=e,r=a.id)}return r}var Zm=class{windowTicks;ticks=[];earned=[];total=0;last=null;constructor(e=360){this.windowTicks=e}add(e,t){for(this.last!==null&&t>this.last&&(this.total+=t-this.last),this.last=t,this.ticks.push(e),this.earned.push(this.total);this.ticks.length>1&&e-(this.ticks[0]??e)>this.windowTicks;)this.ticks.shift(),this.earned.shift()}get perMinute(){if(this.ticks.length<2)return 0;let e=(this.ticks.at(-1)??0)-(this.ticks[0]??0);return e<=0?0:((this.earned.at(-1)??0)-(this.earned[0]??0))/e*30*60}};function Qm(e){switch(e.kind){case`produced`:case`constructionComplete`:case`productionQueued`:return null;case`productionRefused`:return`INSUFFICIENT HUMANS`;case`productionQueueFull`:return`QUEUE FULL (5)`;case`productionBlocked`:return`NO ROOM TO DEPLOY`;case`buildRefused`:return`CANNOT BUILD HERE`;case`constructionRefusedResources`:return`INSUFFICIENT HUMANS`;case`constructionStarted`:return`${(e.subject??`STRUCTURE`).toUpperCase()} SUMMONING`;case`constructionCancelled`:return`SUMMONING CANCELLED`;case`underAttack`:return`UNIT UNDER ATTACK`;case`combatHit`:return null;case`unitDown`:return`UNIT DESTROYED`;case`harbingerDown`:return`HARBINGER DESTROYED`;case`matchResolved`:return null;case`tier2`:return`TIER 2 UNLOCKED`;case`tier2Refused`:return`TIER 2 UNAVAILABLE`;case`deposited`:return null;case`playerFactionChanged`:return null}}var $m=new Set([`productionRefused`,`productionQueueFull`,`productionBlocked`,`constructionStarted`,`constructionCancelled`,`constructionRefusedResources`]);function eh({world:e,renderer:t,toonEffect:n,renderSettings:r,overlayEl:i,boxEl:a,store:o,onLoadRequested:s,onSeedStepRequested:c,onExitToTitle:l,onPlayAgainRequested:u,onPlayerFactionCycleRequested:d,diagnosticsEnabled:f,detailedPerformance:p}){let m=new Mo(e),h=new km(e.city,e.army,r);h.units.preloadAll(e.playerFaction);let g=e.army.units.filter(t=>e.army.typeOf(t).faction===e.playerFaction),_=e.city.startAnchors[e.playerFaction===`machines`?0:1]??{x:0,z:0},v=g.length>0?{x:g.reduce((e,t)=>e+t.x,0)/g.length,z:g.reduce((e,t)=>e+t.z,0)/g.length}:_,y=new au(window.innerWidth/window.innerHeight,v),b=new Fi(t.domElement),x=new jm,S=t=>{e.controllers[e.playerFaction]!==`ai`&&e.enqueue(e.playerFaction,t)},C=new Vd(i),w=new Rd,T=p;T&&(t.info.autoReset=!1);let E=new Zm,D=new Zm,O=new Jd(document.body,e.city,e.population,e.populationCapacity,e.playerFaction),ee=new gf(e.city,h.city,e.population,e.populationCapacity);h.scene.add(ee.group);let k=new Cf(document.body),A=new If(e.city,e.army,e.population);h.scene.add(A.group);let te=new Gf;h.scene.add(te.group);let ne=new Jf(e=>h.units.modelTemplate(e));h.scene.add(ne.group);let j=new ep;h.scene.add(j.group);let re=null,ie=0,ae=!1,oe=!1,M=(e,t)=>{re=e,ie=t+Km},N=t=>{t===`cancel`&&x.size>0?S({kind:`stop`,unitIds:x.list()}):t===`primary`&&x.size>0&&e.playerFaction===`machines`&&S({kind:`deploy`,unitIds:x.list()})},se=new Nu(document.body,Qu({world:e,selected:0,banner:null}),N),ce=Gm,P=null,F=null,I=!1,L=0,le={onDeploy:()=>S({kind:`deploy`,unitIds:x.list()}),onIsolateType:t=>{x.set(x.list().filter(n=>e.army.get(n)?.typeId===t))}},ue=new uu(document.body,e.playerFaction,le),de={onProduce:(e,t)=>S({kind:`produce`,producer:e,typeId:t}),onBuild:(t,n)=>{let r=bs(n).cost;if(!e.freeProduction&&e.resources.humans<r){M(`INSUFFICIENT HUMANS`,performance.now());return}F={builderId:t.id,structureTypeId:n},M(`CHOOSE SUMMONING SITE`,performance.now())},onUnlockTier2:()=>S({kind:`unlockTier2`})},fe=new Su(document.body,e.playerFaction,de),pe=null,me=0,he=null,ge=!0,_e=null,ve=!1,ye=()=>{_e?.dispose(),_e=null,ve=!1,b.consume()},be=()=>{_e||=(ve=!0,new Sd(document.body,he,{onSaveAndExit:()=>{if(!o){ye(),l();return}let t=Fc(e);o.put(t,Date.now()).catch(e=>console.error(`save failed`,e)).finally(()=>{ye(),l()})},onExitAnyway:()=>{ye(),l()},onCancel:()=>ye()}))},xe=null,Se=t=>{xe||=(_e&&ye(),ve=!0,x.clear(),new Cd(document.body,{winner:t.winner??void 0,playerFaction:e.playerFaction},{onPlayAgain:()=>u(),onBackToMenu:()=>l()}))};Bm();let z=document.createElement(`div`);z.className=`control-notice`,z.style.display=`none`;let B=document.createElement(`div`);B.className=`speed-notice`,B.style.display=`none`,document.body.append(z,B);let V=``,Ce=``,we=()=>{let t=e.controllers[e.playerFaction]===`ai`?`AI CONTROLLED`:``;t!==V&&(V=t,z.textContent=t,z.style.display=t.length>0?`block`:`none`);let n=qm[L]??1,r=n===1?``:`${n}× SPEED`;r!==Ce&&(Ce=r,B.textContent=r,B.style.display=r.length>0?`block`:`none`)};we();let Te=()=>{x.clear(),P=null,F=null,I=!1,re=null,pe=null,E=new Zm,D=new Zm,O.setFaction(e.playerFaction),se.dispose(),ue.dispose(),fe.dispose(),se=new Nu(document.body,Qu({world:e,selected:0,banner:null}),N),ue=new uu(document.body,e.playerFaction,le),fe=new Su(document.body,e.playerFaction,de),ce=Gm,ge=!0,we()},Ee=()=>{t.setSize(window.innerWidth,window.innerHeight),y.setAspect(window.innerWidth/window.innerHeight),ge=!0};window.addEventListener(`resize`,Ee);let De=new R,Oe=t=>{let n=$l(y.camera,e.city,t);return Lo(n===void 0?void 0:e.city.get(n),e.population)?n:void 0},ke=t=>{if(x.size===0)return;let n=Bl(y.camera,e.army,t,h.units),r=n===void 0?void 0:e.army.get(n);if(!(!r||e.army.typeOf(r).faction===e.playerFaction))return x.list().some(t=>{let n=e.army.get(t);if(!n||n.deployTimer>0)return!1;let r=e.army.typeOf(n);return r.faction===e.playerFaction&&(r.weaponIds??[]).some(e=>gs(e).targetClasses.includes(`unit`))})?r.id:void 0},H=0,Ae=null,je=0,Me=0,Ne=30,Pe=Um,Fe=0,U=0,W=0,Ie=0,G=!1,Le=!1,K=e.tick,Re=!1,ze=``,Be=NaN,Ve=NaN,He=NaN,Ue=!0,q=0,We=!1,Ge=r=>{if(We)return;let i=Ae===null?1e3/60:r-Ae;if(Ae=r,w.add(i),T&&t.info.reset(),b.sample(),!ve){b.touchPanCandidate&&b.resolveTouchPan(Bl(y.camera,e.army,b.touchPanCandidate,h.units)===void 0),y.update(b,i/1e3);let t=f(),n=F!==null&&b.orderAt!==void 0;n&&(F=null,M(`SUMMONING CANCELLED`,r));let a=e.controllers[e.playerFaction]===`human`;a||(x.size>0&&x.clear(),P=null,F=null,I=!1);let l=a?b.selectGesture:void 0;if(I&&b.orderAt!==void 0)I=!1,M(`ATTACK MOVE CANCELLED`,r);else if(I&&l&&!l.isBox){De.set((l.rect.x0+l.rect.x1)/2,(l.rect.y0+l.rect.y1)/2);let t=$l(y.camera,e.city,De),n=zl(y.camera,De);if(t!==void 0&&x.size>0){let n=e.city.get(t);n&&(S({kind:`attack`,unitIds:x.list(),buildingId:n.id,x:n.x,z:n.z}),M(`DEMOLISHING`,r))}else n&&x.size>0&&(S({kind:`attackMove`,unitIds:x.list(),x:n.x,z:n.z}),M(`ATTACK MOVE`,r));I=!1}else if(l&&F){if(!l.isBox){De.set((l.rect.x0+l.rect.x1)/2,(l.rect.y0+l.rect.y1)/2);let t=zl(y.camera,De),n=t&&e.constructionPlacement(F.builderId,F.structureTypeId,t.x,t.z);n&&(S({kind:`build`,builderId:F.builderId,structureTypeId:F.structureTypeId,x:n.x,z:n.z}),F=null)}}else if(l)if(l.isBox){let t=tu(y.camera,e.army,l.rect).filter(t=>{let n=e.army.get(t);return n!==void 0&&e.army.typeOf(n).faction===e.playerFaction});l.additive?x.add(t):x.set(t)}else{De.set((l.rect.x0+l.rect.x1)/2,(l.rect.y0+l.rect.y1)/2);let t=Bl(y.camera,e.army,De,h.units),n=t===void 0?void 0:e.army.get(t),i=n&&e.army.typeOf(n).faction===e.playerFaction?t:void 0;if(n&&i===void 0)if(l.pointerType===`touch`&&x.size>0){let e=ke(De);e!==void 0&&S({kind:`attack`,unitIds:x.list(),targetId:e,x:n.x,z:n.z})}else P=n.id,l.additive||x.clear();else if(i===void 0){l.additive||(P=null);let t=x.list().filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),n=Rl(y.camera,e.crowds.all,De),i=Oe(De),a=t.some(t=>{let n=e.army.get(t);return n!==void 0&&Io(e.army.typeOf(n).faction,n.cargo)});if(t.length>0&&n!==void 0)S({kind:`harvest`,unitIds:t,crowdId:n}),a&&M(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r);else if(t.length>0&&i!==void 0)S({kind:`harvest`,unitIds:t,buildingId:i}),a&&M(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r);else if(l.pointerType===`touch`&&x.size>0){let t=zl(y.camera,De);t&&(S({kind:`move`,unitIds:x.list(),x:t.x,z:t.z}),h.moveCommandIndicator.show(t.x,t.z,e.playerFaction,r))}else l.additive||x.clear()}else if(l.doubleClick){let t=n.typeId,r=nu(y.camera,e.army).filter(n=>{let r=e.army.get(n);return r!==void 0&&e.army.typeOf(r).faction===e.playerFaction&&r.typeId===t});P=null,l.additive?x.add(r):x.set(r)}else l.additive?(P=null,x.toggle(i)):(P=null,x.set([i]))}for(let e of Am){let t=a?b.pressModifiers(`Digit${e}`):void 0;t&&(t.shift?x.assignGroup(e):x.recallGroup(e))}if(b.wasPressed(`Escape`)&&(I?(I=!1,M(`ATTACK MOVE CANCELLED`,r)):F?(F=null,M(`SUMMONING CANCELLED`,r)):x.size>0||P!==null?(x.clear(),P=null):be()),a&&b.wasPressed(`Delete`)&&x.size>0&&S({kind:`destroy`,unitIds:x.list()}),a&&b.wasPressed(`KeyF`)){let t=e.army.units.filter(t=>{let n=e.army.typeOf(t);return n.faction===e.playerFaction&&n.role===`harvester`&&!t.hasGoal&&!t.attackMove&&t.targetId===null&&t.targetBuildingId===null&&t.harvestingBuildingId===null&&t.harvestingCrowdId===null&&!t.harvestOrdered&&t.deployTimer===0}).map(e=>e.id);x.set(t),P=null}if(a&&b.wasPressed(`KeyC`)){let t=e.army.units.find(t=>{let n=e.army.typeOf(t);return n.faction===e.playerFaction&&n.role===`harbinger`});t&&y.focusOn(t)}if(t&&b.wasPressed(`KeyP`)&&(Ue=!0),t&&b.wasPressed(`KeyI`)&&O.toggle(),t&&b.wasPressed(`KeyU`)&&(ae=!ae,M(`OCCUPIED SPACE ${ae?`ON`:`OFF`}`,r)),t&&b.wasPressed(`KeyM`)&&(oe=!oe,M(`UNIT PATHS ${oe?`ON`:`OFF`}`,r)),t&&b.wasPressed(`KeyY`)&&d(),t&&b.wasPressed(`BracketLeft`)&&c(-1),t&&b.wasPressed(`BracketRight`)&&c(1),b.orderAt&&!n&&x.size>0){let t=x.list(),n=ke(b.orderAt),i=t.filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),a=Rl(y.camera,e.crowds.all,b.orderAt),o=Oe(b.orderAt),s=i.some(t=>{let n=e.army.get(t);return n!==void 0&&Io(e.army.typeOf(n).faction,n.cargo)});if(n!==void 0){let r=e.army.get(n);r&&S({kind:`attack`,unitIds:t,targetId:r.id,x:r.x,z:r.z})}else if(i.length>0&&a!==void 0)S({kind:`harvest`,unitIds:i,crowdId:a}),s&&M(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r);else if(i.length>0&&o!==void 0)S({kind:`harvest`,unitIds:i,buildingId:o}),s&&M(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r);else{let n=zl(y.camera,b.orderAt);n&&(S({kind:`move`,unitIds:t,x:n.x,z:n.z}),h.moveCommandIndicator.show(n.x,n.z,e.playerFaction,r))}}if(t&&b.wasPressed(`KeyO`)){let t=b.pressModifiers(`KeyO`)?.shift?e.playerFaction===`machines`?`ancients`:`machines`:e.playerFaction,n=e.controllers[t]===`ai`?`human`:`ai`;e.enqueue(`debug`,{kind:`setController`,faction:t,controller:n}),n===`ai`&&t===e.playerFaction&&x.clear()}if(t&&b.wasPressed(`KeyK`)&&(L=(L+1)%qm.length,M(`${qm[L]??1}× SPEED`,r)),b.wasPressed(`KeyA`)&&x.size>0&&(I=!0,F=null,M(`ATTACK MOVE · PICK A POINT`,r)),b.wasPressed(`KeyQ`)&&x.size>0&&S({kind:`stop`,unitIds:x.list()}),t&&b.wasPressed(`KeyX`)){let t=Xm(e.city,y.focus.x,y.focus.z);t!==void 0&&e.enqueue(`debug`,{kind:`damage`,buildingId:t})}if(t&&b.wasPressed(`KeyZ`)&&e.enqueue(`debug`,{kind:`raze`,x:y.focus.x,z:y.focus.z,radius:Wm}),t&&b.wasPressed(`KeyB`)){H=(H+1)%Zi.length;let t=Zi[H];e.enqueue(`debug`,{kind:`setAllStates`,state:t})}if(t&&b.wasPressed(`KeyH`)&&e.enqueue(`debug`,{kind:`debugResources`,humans:Jm,charge:0}),t&&b.wasPressed(`KeyJ`)&&e.enqueue(`debug`,{kind:`debugResources`,humans:0,charge:Ym}),t&&b.wasPressed(`KeyE`)&&x.size>0){let t=Xm(e.city,y.focus.x,y.focus.z);t!==void 0&&Lo(e.city.get(t),e.population)&&(S({kind:`harvest`,unitIds:x.list(),buildingId:t}),M(e.playerFaction===`machines`?`EXTRACTING HUMANS`:`CONSUMING HUMANS`,r))}if(t&&b.wasPressed(`KeyR`)&&x.size>0&&S({kind:`deploy`,unitIds:x.list()}),t&&b.wasPressed(`KeyT`)&&S({kind:`unlockTier2`}),t&&(b.wasPressed(`KeyL`)||b.wasPressed(`KeyG`))){let t=e.army.units.find(t=>e.army.typeOf(t).faction===e.playerFaction&&e.army.typeOf(t).producesUnits&&t.deployed&&t.deployTimer===0),n=e.playerFaction===`machines`?`machine-infantry`:`ancient-infantry`,i=e.playerFaction===`machines`?`machine-construct`:`ancient-support`;t?S({kind:`produce`,producer:{kind:`unit`,id:t.id},typeId:b.wasPressed(`KeyG`)?i:n}):M(`NO DEPLOYED FACTORY`,r)}if(t&&b.wasPressed(`KeyV`)){let t=x.primary()===void 0?void 0:e.army.get(x.primary());t&&e.army.typeOf(t).canDeploy&&S({kind:`deploy`,unitIds:[t.id]})}if(b.wasPressed(`F5`)&&o&&e.outcome)M(`MATCH OVER · NOT SAVED`,r);else if(b.wasPressed(`F5`)&&o){let t=Fc(e);M(`SAVING`,r),o.put(t,Date.now()).then(()=>{M(`SAVED · STEP ${t.tick}`,performance.now()),he=`step ${t.tick}`}).catch(e=>{console.error(`save failed`,e),M(`SAVE FAILED`,performance.now())})}b.wasPressed(`F9`)&&s()}if(t.domElement.style.cursor=I?`crosshair`:F?`copy`:``,b.dragRect&&!ve){let e=b.dragRect;a.style.display=`block`,a.style.left=`${(e.x0+1)/2*100}%`,a.style.top=`${(1-e.y1)/2*100}%`,a.style.width=`${(e.x1-e.x0)/2*100}%`,a.style.height=`${(e.y1-e.y0)/2*100}%`}else a.style.display=`none`;b.consume();let l=performance.now(),u=m.advance(ve?0:i*(qm[L]??1)),p=e.drainChangedBuildings();if(p.length>0)if(Fe=performance.now()-l,Ue=!0,p.length>8)h.city.refreshAll();else for(let e of p)h.city.refresh(e);we();let g=e.drainEvents();e.outcome&&!xe&&Se(e.outcome);let _=g.some(e=>e.kind===`combatHit`||e.kind===`unitDown`);h.combat.sync(g,r),h.units.syncDefeats(g,r);for(let t of g){if(t.kind===`playerFactionChanged`){Te();continue}let n=`faction`in t?t.faction:void 0;if(t.kind!==`matchResolved`&&n!==void 0&&n!==e.playerFaction)continue;let i=Qm(t);i&&(M(i,r),$m.has(t.kind)&&(pe=i,me=r+Km))}x.prune(t=>{let n=e.army.get(t);return n!==void 0&&e.army.typeOf(n).faction===e.playerFaction});let v=x.list(),N=`${P??``}|${v.join(`,`)}`,le=N!==ze;ze=N;let R=y.camera,de=ge||Math.abs(R.position.x-Be)>.01||Math.abs(R.position.y-Ve)>.01||Math.abs(R.position.z-He)>.01;ge=!1,Be=R.position.x,Ve=R.position.y,He=R.position.z;let _e=e.tick!==K;K=e.tick;let ye=p.length>0||_e&&e.army.units.some(Ts),z=ke(b.pointer);h.units.sync(e.army,u,t=>{let n=e.army.get(t);if(t===z)return`attack`;if((x.has(t)||t===P)&&n)return`selected`},e=>h.combat.meleePose(e,r),r),k.sync({army:e.army,camera:R,nowMs:r,cameraDirty:de,stateDirty:_,selectionDirty:le,selectedIds:v,inspectedEnemyId:P});let B=h.city.syncDamage(r);ye||=B.phaseChanged;let V=h.units.corpseShadowSources();(_e||p.length>0||B.phaseChanged||V.length>0||Re)&&h.shadows.sync(e.city,e.army,V),Re=V.length>0,te.sync(e.crowds.all,u,e.tick,e.army);let Ce=v.filter(t=>{let n=e.army.get(t),r=n&&e.army.typeOf(n);return r?.faction===e.playerFaction&&r.role===`harvester`}),Ee=Ce.flatMap(t=>{let n=e.army.get(t);return n?[n]:[]});O.setSelectionEnabled(!1),O.sync({camera:R,zoomFraction:y.zoomFraction,nowMs:r,cameraDirty:de,populationDirty:ye}),ee.sync(Ee,e.crowds.all,u,ye,p.length>0||B.phaseChanged);let Ke=Ce.length>0?Oe(b.pointer):void 0;A.sync(e.tick,Ce.length>0,Ke);let qe=F?zl(y.camera,b.pointer):void 0,Je=F!==null&&qe!==void 0&&e.constructionPlacement(F.builderId,F.structureTypeId,qe.x,qe.z)!==void 0;if(ne.sync(F&&qe?{structureTypeId:F.structureTypeId,x:qe.x,z:qe.z}:void 0,Je,e.constructionSites,r),j.sync(e.city,e.army,e.constructionSites,ae,oe),h.moveCommandIndicator.sync(r),h.updateShadowCoverage(y.focus,y.zoomFraction),h.city.setOutlineZoom(y.zoomFraction),h.units.setOutlineZoom(y.zoomFraction),h.unitOcclusion.captureOccluderDepth(t,h.scene,y.camera),n.render(h.scene,y.camera),h.unitOcclusion.render(t,y.camera),h.selectionSilhouette.render(t,y.camera,A.selectionSource()),P!==null&&e.army.get(P)===void 0&&(P=null),ce+=i,ce>=Gm){ce=0,re!==null&&r>ie&&(re=null),pe!==null&&r>me&&(pe=null),se.render(Qu({world:e,selected:x.size,banner:re})),ue.render(nd(e,x,P===null?void 0:e.army.get(P)));let t=x.primary()===void 0?void 0:e.army.get(x.primary());fe.render(id(e,t,pe))}if(Me+=i,Me>=1e3&&(Ne=(m.stepCount-je)/Me*1e3,je=m.stepCount,Me=0),E.add(e.tick,e.resources.humans),D.add(e.tick,e.resources.charge),Pe+=i,Pe>=Um){if(Pe=0,Ue){Ue=!1;let t=e.city.startAnchors[0];if(t){let n={x:y.focus.x,z:y.focus.z},r=e.nav.onShardCells,i=e.nav.flood(t.x,t.z,`small`,n,!1,Im),a=e.nav.flood(t.x,t.z,`large`,n,!1,Lm),o=e.nav.flood(t.x,t.z,`large`,n,!0,Lm);U=i.count/r,W=a.count/r,Ie=o.count/r,G=i.reachedTarget,Le=a.reachedTarget}}let[n,r,i]=e.destructionCounts();C.render({faction:ko[e.playerFaction].name,battlefield:e.battlefield,seed:e.seed,fps:w.fps,simHz:Ne,stepCount:e.tick,droppedMs:m.droppedMs,alpha:u,zoomFraction:y.zoomFraction,pitchDeg:y.pitchDeg,distance:y.camera.position.distanceTo(y.focus),focusX:y.focus.x,focusZ:y.focus.z,cityBuildings:e.city.buildings.length,cityIntact:n??0,cityDamaged:r??0,cityRubble:i??0,populationLabels:O.enabled,units:e.army.units.length,unitsMoving:e.army.countMoving(),unitsBlocked:e.army.countBlocked(),unitsUnreached:e.army.countUnreached(),unitsStalled:e.army.countStalled(),selected:x.size,groups:x.occupiedGroups(),pathsQueued:e.army.pending,pathsTotal:e.army.pathsTotal,navCells:e.nav.cellCount,navRebuilds:e.nav.rebuildCount,navLastRebuildCells:e.nav.lastRebuildCells,navRebuildMs:Fe,smallPassable:e.nav.passableFraction(`small`,!1,Im),largePassable:e.nav.passableFraction(`large`,!1,Lm),smallPassableStrict:e.nav.passableFraction(`small`,!0,Im),largePassableStrict:e.nav.passableFraction(`large`,!0,Lm),reachSmall:U,reachLarge:W,reachLargeStrict:Ie,atFocusSmall:G,atFocusLarge:Le,humans:e.resources.humans,humansCap:e.resources.humansCap,charge:e.resources.charge,chargeCap:e.resources.chargeCap,chargeSegments:e.resources.segmentsReady,techTier:e.techTier,humansPerMinute:E.perMinute,chargePerMinute:D.perMinute,cargoInTransit:e.cargoInTransit(),populationRemaining:e.remainingPopulation(),populationTotal:e.populationCapacity.reduce((e,t)=>e+t,0),structures:e.army.units.filter(t=>e.army.typeOf(t).faction===e.playerFaction&&e.army.typeOf(t).role===`structure`).length,queued:e.queuedProduction(),civilianCrowds:e.crowds.all.length,civilianHumans:e.crowds.totalHumans(),harvesting:e.army.units.filter(Ts).length,harvestIdle:e.harvestersIdle(),unitsDeployed:e.army.countDeployed(),unitsDeploying:e.army.countDeploying(),...T?{detailed:{drawCalls:t.info.render.calls,triangles:t.info.render.triangles,units:h.units.detailedPerformanceStats()??{loadedModels:0,loadingModels:0,failedModels:0,fallbacks:0,visible:0,selection:0,occlusion:0}}}:{}},w)}q=requestAnimationFrame(Ge)};return q=requestAnimationFrame(Ge),{dispose(){We=!0,cancelAnimationFrame(q),window.removeEventListener(`resize`,Ee),b.dispose(),z.remove(),B.remove(),xe?.dispose(),se.dispose(),ue.dispose(),fe.dispose(),ye(),h.dispose(),T&&(t.info.autoReset=!0),O.dispose(),ee.dispose(),k.dispose(),A.dispose(),te.dispose(),ne.dispose(),j.dispose(),a.style.display=`none`}}}async function th(){let e=window.location.pathname.endsWith(`/battle.html`),t=document.getElementById(`overlay`),n=document.getElementById(`overlay-content`),r=document.getElementById(`overlay-toggle`),i=document.getElementById(`selectbox`);if(!t||!n||!(r instanceof HTMLButtonElement)||!i)throw Error(`overlay controls or #selectbox missing from the page shell`);r.addEventListener(`click`,()=>{let e=t.classList.toggle(`minimized`);r.textContent=e?`+`:`−`,r.title=e?`Restore developer panel`:`Minimize developer panel`,r.setAttribute(`aria-expanded`,String(!e))});let a=new Oi({antialias:!0,powerPreference:`high-performance`});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.shadowMap.enabled=!0,a.shadowMap.type=1,a.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(a.domElement);let o=new ki(a,{defaultThickness:.0022,defaultColor:[0,0,0],defaultAlpha:.68}),s=Uc.available?new Uc:null;s||console.warn(`IndexedDB unavailable; saving is disabled for this session`);let c=Pm(),l=Vm(window.location.search),u={standardMatch:!0,...l?{controllers:l}:{}},d=new URLSearchParams(window.location.search),f=d.get(`detailedPerf`)===`1`,p=d.get(`stress`)===`detailed`;at(`machines`,c.colourVariant.machines),at(`ancients`,c.colourVariant.ancients);let m=()=>{t.style.display=c.overlayVisible?``:`none`};m();let h=null,g=null,_=e=>{g?.dispose(),g=e},v=e=>{_(null),h?.dispose(),a.shadowMap.enabled=c.enhancedShadows,h=eh({world:e,renderer:a,toonEffect:o,renderSettings:c,overlayEl:n,boxEl:i,store:s,onLoadRequested:y,onSeedStepRequested:t=>{let n=e.seed+t>>>0;queueMicrotask(()=>v(e.battlefield?new Nc(n,e.playerFaction,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}}):new Nc(n,e.playerFaction,u)))},onExitToTitle:()=>{h?.dispose(),h=null,b()},onPlayAgainRequested:()=>{queueMicrotask(()=>v(e.battlefield?new Nc(e.seed,e.playerFaction,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}}):new Nc(e.seed,e.playerFaction,u)))},onPlayerFactionCycleRequested:()=>{let t=e.playerFaction===`machines`?`ancients`:`machines`;e.enqueue(`debug`,{kind:`setPlayerFaction`,faction:t})},diagnosticsEnabled:()=>c.overlayVisible,detailedPerformance:f})},y=e=>{s&&s.get(e).then(e=>{if(!e){console.warn(s.lastRejection??`no save to load`);return}v(Ic(e.envelope))}).catch(e=>console.error(`load failed`,e))},b=async()=>{let e=s?await s.get().catch(()=>void 0):void 0,t=s?await s.list().catch(()=>[]):[];_(new ld(document.body,{saved:e&&{faction:e.envelope.playerFaction,tick:e.envelope.tick,clock:Xu(e.envelope.tick)},slotCount:t.length,onStart:e=>v(new Nc(Hm,e,u)),onResume:()=>y(),onSelectSave:()=>void S(),onSettings:()=>x()}))},x=()=>{_(new bd(document.body,c,{onColourVariant:(e,t)=>{c.colourVariant[e]=t,at(e,t),Fm(c),x()},onToggleOverlay:e=>{c.overlayVisible=e,Fm(c),m(),x()},onToggleCityLighting:e=>{c.cityLighting=e,Fm(c),x()},onToggleEnhancedShadows:e=>{c.enhancedShadows=e,a.shadowMap.enabled=e,Fm(c),x()},onToggleAmbientOcclusion:e=>{c.ambientOcclusion=e,Fm(c),x()},onBack:()=>void b()}))},S=async()=>{let e=s?await s.list().catch(()=>[]):[];_(new xd(document.body,e.map(e=>({slot:e.slot,faction:e.readable?e.envelope.playerFaction:void 0,clock:Xu(e.envelope.tick??0),tick:e.envelope.tick??0,savedAtMs:e.savedAtMs,readable:e.readable})),{onLoad:e=>y(e),onDelete:e=>{s&&s.delete(e).then(()=>S()).catch(e=>console.error(`delete failed`,e))},onBack:()=>void b()}))},C=new URLSearchParams(window.location.search).get(`faction`);if(e){v(new Nc(Hm,C===`ancients`?`ancients`:`machines`,{battlefield:!0,...u,...p?{battlefieldUnitsPerType:8}:{}}));return}if(C===`machines`||C===`ancients`){v(new Nc(Hm,C,u));return}await b()}th();