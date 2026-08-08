(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="169",Pl=0,Pa=1,Ll=2,zo=1,Il=2,Zt=3,_n=0,St=1,Gt=2,fn=0,ri=1,wi=2,La=3,Ia=4,Dl=5,Rn=100,Ul=101,Nl=102,Fl=103,Ol=104,Bl=200,zl=201,kl=202,Hl=203,ds=204,fs=205,Gl=206,Vl=207,Wl=208,Xl=209,ql=210,Yl=211,$l=212,jl=213,Kl=214,ps=0,ms=1,gs=2,oi=3,_s=4,vs=5,xs=6,Ms=7,ko=0,Zl=1,Jl=2,pn=0,Ql=1,ec=2,tc=3,Ho=4,nc=5,ic=6,rc=7,Go=300,li=301,ci=302,Ss=303,ys=304,Er=306,Es=1e3,Pn=1001,Ts=1002,Lt=1003,sc=1004,Oi=1005,Bt=1006,Ir=1007,Ln=1008,en=1009,Vo=1010,Wo=1011,Pi=1012,ra=1013,Un=1014,Jt=1015,Ii=1016,sa=1017,aa=1018,ui=1020,Xo=35902,qo=1021,Yo=1022,zt=1023,$o=1024,jo=1025,si=1026,hi=1027,Ko=1028,oa=1029,Zo=1030,la=1031,ca=1033,cr=33776,ur=33777,hr=33778,dr=33779,bs=35840,As=35841,ws=35842,Rs=35843,Cs=36196,Ps=37492,Ls=37496,Is=37808,Ds=37809,Us=37810,Ns=37811,Fs=37812,Os=37813,Bs=37814,zs=37815,ks=37816,Hs=37817,Gs=37818,Vs=37819,Ws=37820,Xs=37821,fr=36492,qs=36494,Ys=36495,Jo=36283,$s=36284,js=36285,Ks=36286,ac=3200,oc=3201,Qo=0,lc=1,hn="",kt="srgb",vn="srgb-linear",ua="display-p3",Tr="display-p3-linear",gr="linear",et="srgb",_r="rec709",vr="p3",Bn=7680,Da=519,cc=512,uc=513,hc=514,el=515,dc=516,fc=517,pc=518,mc=519,Zs=35044,Ua="300 es",Qt=2e3,xr=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,Js=180/Math.PI;function mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function gc(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,r,s,a,o,l,u){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u)}set(e,t,n,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],d=n[4],p=n[7],m=n[2],f=n[5],v=n[8],M=r[0],c=r[3],h=r[6],T=r[1],_=r[4],E=r[7],C=r[2],w=r[5],A=r[8];return s[0]=a*M+o*T+l*C,s[3]=a*c+o*_+l*w,s[6]=a*h+o*E+l*A,s[1]=u*M+d*T+p*C,s[4]=u*c+d*_+p*w,s[7]=u*h+d*E+p*A,s[2]=m*M+f*T+v*C,s[5]=m*c+f*_+v*w,s[8]=m*h+f*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return t*a*d-t*o*u-n*s*d+n*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*a-o*u,m=o*l-d*s,f=u*s-a*l,v=t*p+n*m+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(r*u-d*n)*M,e[2]=(o*n-r*a)*M,e[3]=m*M,e[4]=(d*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=f*M,e[7]=(n*l-u*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new De;function tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _c(){const i=Mr("canvas");return i.style.display="block",i}const Na={};function pr(i){i in Na||(Na[i]=!0,console.warn(i))}function vc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function xc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fa=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oa=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mi={[vn]:{transfer:gr,primaries:_r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[kt]:{transfer:et,primaries:_r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tr]:{transfer:gr,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Oa),fromReference:i=>i.applyMatrix3(Fa)},[ua]:{transfer:et,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Oa),fromReference:i=>i.applyMatrix3(Fa).convertLinearToSRGB()}},Sc=new Set([vn,Tr]),Ye={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=mi[e].toReference,r=mi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return mi[i].primaries},getTransfer:function(i){return i===hn?gr:mi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(mi[e].luminanceCoefficients)}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zn;class yc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=Mr("canvas")),zn.width=e.width,zn.height=e.height;const n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ec=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Or(r[a].image)):s.push(Or(r[a]))}else s=Or(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class _t extends fi{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Pn,r=Pn,s=Bt,a=Ln,o=zt,l=en,u=_t.DEFAULT_ANISOTROPY,d=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=mn(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Go;_t.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],f=l[5],v=l[9],M=l[2],c=l[6],h=l[10];if(Math.abs(d-m)<.01&&Math.abs(p-M)<.01&&Math.abs(v-c)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+M)<.1&&Math.abs(v+c)<.1&&Math.abs(u+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,E=(f+1)/2,C=(h+1)/2,w=(d+m)/4,A=(p+M)/4,L=(v+c)/4;return _>E&&_>C?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=A/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=L/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=L/s),this.set(n,r,s,t),this}let T=Math.sqrt((c-v)*(c-v)+(p-M)*(p-M)+(m-d)*(m-d));return Math.abs(T)<.001&&(T=1),this.x=(c-v)/T,this.y=(p-M)/T,this.z=(m-d)/T,this.w=Math.acos((u+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bc extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _t(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class il extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ac extends _t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],u=n[r+1],d=n[r+2],p=n[r+3];const m=s[a+0],f=s[a+1],v=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=f,e[t+2]=v,e[t+3]=M;return}if(p!==M||l!==m||u!==f||d!==v){let c=1-o;const h=l*m+u*f+d*v+p*M,T=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,h*T);c=Math.sin(c*w)/C,o=Math.sin(o*w)/C}const E=o*T;if(l=l*c+m*E,u=u*c+f*E,d=d*c+v*E,p=p*c+M*E,c===1-o){const C=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=C,u*=C,d*=C,p*=C}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],d=n[r+3],p=s[a],m=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+d*p+l*f-u*m,e[t+1]=l*v+d*m+u*p-o*f,e[t+2]=u*v+d*f+o*m-l*p,e[t+3]=d*v-o*p-l*m-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(r/2),p=o(s/2),m=l(n/2),f=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=m*d*p+u*f*v,this._y=u*f*p-m*d*v,this._z=u*d*v+m*f*p,this._w=u*d*p-m*f*v;break;case"YXZ":this._x=m*d*p+u*f*v,this._y=u*f*p-m*d*v,this._z=u*d*v-m*f*p,this._w=u*d*p+m*f*v;break;case"ZXY":this._x=m*d*p-u*f*v,this._y=u*f*p+m*d*v,this._z=u*d*v+m*f*p,this._w=u*d*p-m*f*v;break;case"ZYX":this._x=m*d*p-u*f*v,this._y=u*f*p+m*d*v,this._z=u*d*v-m*f*p,this._w=u*d*p+m*f*v;break;case"YZX":this._x=m*d*p+u*f*v,this._y=u*f*p+m*d*v,this._z=u*d*v-m*f*p,this._w=u*d*p-m*f*v;break;case"XZY":this._x=m*d*p-u*f*v,this._y=u*f*p-m*d*v,this._z=u*d*v+m*f*p,this._w=u*d*p+m*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],d=t[6],p=t[10],m=n+o+p;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-u)*f,this._z=(a-r)*f}else if(n>o&&n>p){const f=2*Math.sqrt(1+n-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+u)/f}else if(o>p){const f=2*Math.sqrt(1+o-n-p);this._w=(s-u)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+p-n-o);this._w=(a-r)/f,this._x=(s+u)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,d=t._w;return this._x=n*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-n*u,this._z=s*d+a*u+n*l-r*o,this._w=a*d-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),p=Math.sin((1-t)*d)/u,m=Math.sin(t*d)/u;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*n),d=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*u+a*p-o*d,this.y=n+l*d+o*u-s*p,this.z=r+l*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new D,Ba=new Di;class Ui{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ut):Ut.fromBufferAttribute(s,a),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),zi.subVectors(this.max,gi),kn.subVectors(e.a,gi),Hn.subVectors(e.b,gi),Gn.subVectors(e.c,gi),rn.subVectors(Hn,kn),sn.subVectors(Gn,Hn),Mn.subVectors(kn,Gn);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-Mn.z,Mn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,Mn.z,0,-Mn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-Mn.y,Mn.x,0];return!zr(t,kn,Hn,Gn,zi)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,kn,Hn,Gn,zi))?!1:(ki.crossVectors(rn,sn),t=[ki.x,ki.y,ki.z],zr(t,kn,Hn,Gn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new D,new D,new D,new D,new D,new D,new D,new D],Ut=new D,Bi=new Ui,kn=new D,Hn=new D,Gn=new D,rn=new D,sn=new D,Mn=new D,gi=new D,zi=new D,ki=new D,Sn=new D;function zr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Sn.fromArray(i,s);const o=r.x*Math.abs(Sn.x)+r.y*Math.abs(Sn.y)+r.z*Math.abs(Sn.z),l=e.dot(Sn),u=t.dot(Sn),d=n.dot(Sn);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const wc=new Ui,_i=new D,kr=new D;class br{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_i,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(kr)),this.expandByPoint(_i.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new D,Hr=new D,Hi=new D,an=new D,Gr=new D,Gi=new D,Vr=new D;class rl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Hr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hi),o=an.dot(this.direction),l=-an.dot(Hi),u=an.lengthSq(),d=Math.abs(1-a*a);let p,m,f,v;if(d>0)if(p=a*l-o,m=a*o-l,v=s*d,p>=0)if(m>=-v)if(m<=v){const M=1/d;p*=M,m*=M,f=p*(p+a*m+2*o)+m*(a*p+m+2*l)+u}else m=s,p=Math.max(0,-(a*m+o)),f=-p*p+m*(m+2*l)+u;else m=-s,p=Math.max(0,-(a*m+o)),f=-p*p+m*(m+2*l)+u;else m<=-v?(p=Math.max(0,-(-a*s+o)),m=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+m*(m+2*l)+u):m<=v?(p=0,m=Math.min(Math.max(-s,-l),s),f=m*(m+2*l)+u):(p=Math.max(0,-(a*s+o)),m=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+m*(m+2*l)+u);else m=a>0?-s:s,p=Math.max(0,-(a*m+o)),f=-p*p+m*(m+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Hr).addScaledVector(Hi,m),f}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),r=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),d>=0?(s=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,r,s){Gr.subVectors(t,e),Gi.subVectors(n,e),Vr.crossVectors(Gr,Gi);let a=this.direction.dot(Vr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;an.subVectors(this.origin,e);const l=o*this.direction.dot(Gi.crossVectors(an,Gi));if(l<0)return null;const u=o*this.direction.dot(Gr.cross(an));if(u<0||l+u>a)return null;const d=-o*an.dot(Vr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,s,a,o,l,u,d,p,m,f,v,M,c){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,u,d,p,m,f,v,M,c)}set(e,t,n,r,s,a,o,l,u,d,p,m,f,v,M,c){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=p,h[14]=m,h[3]=f,h[7]=v,h[11]=M,h[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vn.setFromMatrixColumn(e,0).length(),s=1/Vn.setFromMatrixColumn(e,1).length(),a=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*d,f=a*p,v=o*d,M=o*p;t[0]=l*d,t[4]=-l*p,t[8]=u,t[1]=f+v*u,t[5]=m-M*u,t[9]=-o*l,t[2]=M-m*u,t[6]=v+f*u,t[10]=a*l}else if(e.order==="YXZ"){const m=l*d,f=l*p,v=u*d,M=u*p;t[0]=m+M*o,t[4]=v*o-f,t[8]=a*u,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=f*o-v,t[6]=M+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*d,f=l*p,v=u*d,M=u*p;t[0]=m-M*o,t[4]=-a*p,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*d,t[9]=M-m*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*d,f=a*p,v=o*d,M=o*p;t[0]=l*d,t[4]=v*u-f,t[8]=m*u+M,t[1]=l*p,t[5]=M*u+m,t[9]=f*u-v,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,f=a*u,v=o*l,M=o*u;t[0]=l*d,t[4]=M-m*p,t[8]=v*p+f,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-u*d,t[6]=f*p+v,t[10]=m-M*p}else if(e.order==="XZY"){const m=a*l,f=a*u,v=o*l,M=o*u;t[0]=l*d,t[4]=-p,t[8]=u*d,t[1]=m*p+M,t[5]=a*d,t[9]=f*p-v,t[2]=v*p-f,t[6]=o*d,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rc,e,Cc)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),on.crossVectors(n,bt),on.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),on.crossVectors(n,bt)),on.normalize(),Vi.crossVectors(bt,on),r[0]=on.x,r[4]=Vi.x,r[8]=bt.x,r[1]=on.y,r[5]=Vi.y,r[9]=bt.y,r[2]=on.z,r[6]=Vi.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],d=n[1],p=n[5],m=n[9],f=n[13],v=n[2],M=n[6],c=n[10],h=n[14],T=n[3],_=n[7],E=n[11],C=n[15],w=r[0],A=r[4],L=r[8],q=r[12],g=r[1],y=r[5],O=r[9],z=r[13],k=r[2],j=r[6],G=r[10],Z=r[14],V=r[3],ae=r[7],he=r[11],ge=r[15];return s[0]=a*w+o*g+l*k+u*V,s[4]=a*A+o*y+l*j+u*ae,s[8]=a*L+o*O+l*G+u*he,s[12]=a*q+o*z+l*Z+u*ge,s[1]=d*w+p*g+m*k+f*V,s[5]=d*A+p*y+m*j+f*ae,s[9]=d*L+p*O+m*G+f*he,s[13]=d*q+p*z+m*Z+f*ge,s[2]=v*w+M*g+c*k+h*V,s[6]=v*A+M*y+c*j+h*ae,s[10]=v*L+M*O+c*G+h*he,s[14]=v*q+M*z+c*Z+h*ge,s[3]=T*w+_*g+E*k+C*V,s[7]=T*A+_*y+E*j+C*ae,s[11]=T*L+_*O+E*G+C*he,s[15]=T*q+_*z+E*Z+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],m=e[10],f=e[14],v=e[3],M=e[7],c=e[11],h=e[15];return v*(+s*l*p-r*u*p-s*o*m+n*u*m+r*o*f-n*l*f)+M*(+t*l*f-t*u*m+s*a*m-r*a*f+r*u*d-s*l*d)+c*(+t*u*p-t*o*f-s*a*p+n*a*f+s*o*d-n*u*d)+h*(-r*o*d-t*l*p+t*o*m+r*a*p-n*a*m+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],m=e[10],f=e[11],v=e[12],M=e[13],c=e[14],h=e[15],T=p*c*u-M*m*u+M*l*f-o*c*f-p*l*h+o*m*h,_=v*m*u-d*c*u-v*l*f+a*c*f+d*l*h-a*m*h,E=d*M*u-v*p*u+v*o*f-a*M*f-d*o*h+a*p*h,C=v*p*l-d*M*l-v*o*m+a*M*m+d*o*c-a*p*c,w=t*T+n*_+r*E+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(M*m*s-p*c*s-M*r*f+n*c*f+p*r*h-n*m*h)*A,e[2]=(o*c*s-M*l*s+M*r*u-n*c*u-o*r*h+n*l*h)*A,e[3]=(p*l*s-o*m*s-p*r*u+n*m*u+o*r*f-n*l*f)*A,e[4]=_*A,e[5]=(d*c*s-v*m*s+v*r*f-t*c*f-d*r*h+t*m*h)*A,e[6]=(v*l*s-a*c*s-v*r*u+t*c*u+a*r*h-t*l*h)*A,e[7]=(a*m*s-d*l*s+d*r*u-t*m*u-a*r*f+t*l*f)*A,e[8]=E*A,e[9]=(v*p*s-d*M*s-v*n*f+t*M*f+d*n*h-t*p*h)*A,e[10]=(a*M*s-v*o*s+v*n*u-t*M*u-a*n*h+t*o*h)*A,e[11]=(d*o*s-a*p*s-d*n*u+t*p*u+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(d*M*r-v*p*r+v*n*m-t*M*m-d*n*c+t*p*c)*A,e[14]=(v*o*r-a*M*r-v*n*l+t*M*l+a*n*c-t*o*c)*A,e[15]=(a*p*r-d*o*r+d*n*l-t*p*l-a*n*m+t*o*m)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+n,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,d=a+a,p=o+o,m=s*u,f=s*d,v=s*p,M=a*d,c=a*p,h=o*p,T=l*u,_=l*d,E=l*p,C=n.x,w=n.y,A=n.z;return r[0]=(1-(M+h))*C,r[1]=(f+E)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(f-E)*w,r[5]=(1-(m+h))*w,r[6]=(c+T)*w,r[7]=0,r[8]=(v+_)*A,r[9]=(c-T)*A,r[10]=(1-(m+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Vn.set(r[0],r[1],r[2]).length();const a=Vn.set(r[4],r[5],r[6]).length(),o=Vn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);const u=1/s,d=1/a,p=1/o;return Nt.elements[0]*=u,Nt.elements[1]*=u,Nt.elements[2]*=u,Nt.elements[4]*=d,Nt.elements[5]*=d,Nt.elements[6]*=d,Nt.elements[8]*=p,Nt.elements[9]*=p,Nt.elements[10]*=p,t.setFromRotationMatrix(Nt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Qt){const l=this.elements,u=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let f,v;if(o===Qt)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===xr)f=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Qt){const l=this.elements,u=1/(t-e),d=1/(n-r),p=1/(a-s),m=(t+e)*u,f=(n+r)*d;let v,M;if(o===Qt)v=(a+s)*p,M=-2*p;else if(o===xr)v=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vn=new D,Nt=new tt,Rc=new D(0,0,0),Cc=new D(1,1,1),on=new D,Vi=new D,bt=new D,za=new tt,ka=new Di;class Wt{constructor(e=0,t=0,n=0,r=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],p=r[2],m=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pc=0;const Ha=new D,Wn=new Di,$t=new tt,Wi=new D,vi=new D,Lc=new D,Ic=new Di,Ga=new D(1,0,0),Va=new D(0,1,0),Wa=new D(0,0,1),Xa={type:"added"},Dc={type:"removed"},Xn={type:"childadded",child:null},Wr={type:"childremoved",child:null};class ut extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new D,t=new Wt,n=new Di,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new De}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Va,e)}rotateZ(e){return this.rotateOnAxis(Wa,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Va,e)}translateZ(e){return this.translateOnAxis(Wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wi.copy(e):Wi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(vi,Wi,this.up):$t.lookAt(Wi,vi,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Wn.setFromRotationMatrix($t),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xa),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xa),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,Lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,Ic,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),m=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ut.DEFAULT_UP=new D(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new D,jt=new D,Xr=new D,Kt=new D,qn=new D,Yn=new D,qa=new D,qr=new D,Yr=new D,$r=new D,jr=new Ze,Kr=new Ze,Zr=new Ze;class Pt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ft.subVectors(r,t),jt.subVectors(n,t),Xr.subVectors(e,t);const a=Ft.dot(Ft),o=Ft.dot(jt),l=Ft.dot(Xr),u=jt.dot(jt),d=jt.dot(Xr),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const m=1/p,f=(u*l-o*d)*m,v=(a*d-o*l)*m;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kt)===null?!1:Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Kt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kt.x),l.addScaledVector(a,Kt.y),l.addScaledVector(o,Kt.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return jr.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),jr.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),Zr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jr,s.x),a.addScaledVector(Kr,s.y),a.addScaledVector(Zr,s.z),a}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),jt.subVectors(e,t),Ft.cross(jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Ft.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Pt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;qn.subVectors(r,n),Yn.subVectors(s,n),qr.subVectors(e,n);const l=qn.dot(qr),u=Yn.dot(qr);if(l<=0&&u<=0)return t.copy(n);Yr.subVectors(e,r);const d=qn.dot(Yr),p=Yn.dot(Yr);if(d>=0&&p<=d)return t.copy(r);const m=l*p-d*u;if(m<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(qn,a);$r.subVectors(e,s);const f=qn.dot($r),v=Yn.dot($r);if(v>=0&&f<=v)return t.copy(s);const M=f*u-l*v;if(M<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Yn,o);const c=d*v-f*p;if(c<=0&&p-d>=0&&f-v>=0)return qa.subVectors(s,r),o=(p-d)/(p-d+(f-v)),t.copy(r).addScaledVector(qa,o);const h=1/(c+M+m);return a=M*h,o=m*h,t.copy(n).addScaledVector(qn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=gc(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Jr(a,s,e+1/3),this.g=Jr(a,s,e),this.b=Jr(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ye.fromWorkingColorSpace(pt.copy(this),e),Math.round(Mt(pt.r*255,0,255))*65536+Math.round(Mt(pt.g*255,0,255))*256+Math.round(Mt(pt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,r=pt.g,s=pt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=kt){Ye.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,r=pt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ln),this.setHSL(ln.h+e,ln.s+t,ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Xi);const n=Ur(ln.h,Xi.h,t),r=Ur(ln.s,Xi.s,t),s=Ur(ln.l,Xi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Ue;Ue.NAMES=al;let Uc=0;class Fn extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=ri,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ds,this.blendDst=fs,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ds&&(n.blendSrc=this.blendSrc),this.blendDst!==fs&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ri extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new D,qi=new Le;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zs,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zs&&(e.usage=this.usage),e}}class ol extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ll extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nc=0;const Ct=new tt,Qr=new ut,$n=new D,At=new Ui,xi=new Ui,ct=new D;class yt extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tl(e)?ll:ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(At.min,xi.min),At.expandByPoint(ct),ct.addVectors(At.max,xi.max),At.expandByPoint(ct)):(At.expandByPoint(xi.min),At.expandByPoint(xi.max))}At.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)ct.fromBufferAttribute(o,u),l&&($n.fromBufferAttribute(e,u),ct.add($n)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;const u=new D,d=new D,p=new D,m=new Le,f=new Le,v=new Le,M=new D,c=new D;function h(L,q,g){u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,q),p.fromBufferAttribute(n,g),m.fromBufferAttribute(s,L),f.fromBufferAttribute(s,q),v.fromBufferAttribute(s,g),d.sub(u),p.sub(u),f.sub(m),v.sub(m);const y=1/(f.x*v.y-v.x*f.y);isFinite(y)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(p,-f.y).multiplyScalar(y),c.copy(p).multiplyScalar(f.x).addScaledVector(d,-v.x).multiplyScalar(y),o[L].add(M),o[q].add(M),o[g].add(M),l[L].add(c),l[q].add(c),l[g].add(c))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,q=T.length;L<q;++L){const g=T[L],y=g.start,O=g.count;for(let z=y,k=y+O;z<k;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new D,E=new D,C=new D,w=new D;function A(L){C.fromBufferAttribute(r,L),w.copy(C);const q=o[L];_.copy(q),_.sub(C.multiplyScalar(C.dot(q))).normalize(),E.crossVectors(w,q);const y=E.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,y)}for(let L=0,q=T.length;L<q;++L){const g=T[L],y=g.start,O=g.count;for(let z=y,k=y+O;z<k;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,f=n.count;m<f;m++)n.setXYZ(m,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,u=new D,d=new D,p=new D;if(e)for(let m=0,f=e.count;m<f;m+=3){const v=e.getX(m+0),M=e.getX(m+1),c=e.getX(m+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,c),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,c),o.add(d),l.add(d),u.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,f=t.count;m<f;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,p=o.normalized,m=new u.constructor(l.length*d);let f=0,v=0;for(let M=0,c=l.length;M<c;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*d;for(let h=0;h<d;h++)m[v++]=u[f++]}return new It(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){const m=u[d],f=e(m,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,m=u.length;p<m;p++){const f=u[p];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let m=0,f=p.length;m<f;m++)d.push(p[m].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ya=new tt,yn=new rl,Yi=new br,$a=new D,$i=new D,ji=new D,Ki=new D,es=new D,Zi=new D,ja=new D,Ji=new D;class Je extends ut{constructor(e=new yt,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zi.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],p=s[l];d!==0&&(es.fromBufferAttribute(p,e),a?Zi.addScaledVector(es,d):Zi.addScaledVector(es.sub(t),d))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),yn.copy(e.ray).recast(e.near),!(Yi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Yi,$a)===null||yn.origin.distanceToSquared($a)>(e.far-e.near)**2))&&(Ya.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,m=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=m.length;v<M;v++){const c=m[v],h=a[c.materialIndex],T=Math.max(c.start,f.start),_=Math.min(o.count,Math.min(c.start+c.count,f.start+f.count));for(let E=T,C=_;E<C;E+=3){const w=o.getX(E),A=o.getX(E+1),L=o.getX(E+2);r=Qi(this,h,e,n,u,d,p,w,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let c=v,h=M;c<h;c+=3){const T=o.getX(c),_=o.getX(c+1),E=o.getX(c+2);r=Qi(this,a,e,n,u,d,p,T,_,E),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=m.length;v<M;v++){const c=m[v],h=a[c.materialIndex],T=Math.max(c.start,f.start),_=Math.min(l.count,Math.min(c.start+c.count,f.start+f.count));for(let E=T,C=_;E<C;E+=3){const w=E,A=E+1,L=E+2;r=Qi(this,h,e,n,u,d,p,w,A,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let c=v,h=M;c<h;c+=3){const T=c,_=c+1,E=c+2;r=Qi(this,a,e,n,u,d,p,T,_,E),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}}}function Fc(i,e,t,n,r,s,a,o){let l;if(e.side===St?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===_n,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ji);return u<t.near||u>t.far?null:{distance:u,point:Ji.clone(),object:i}}function Qi(i,e,t,n,r,s,a,o,l,u){i.getVertexPosition(o,$i),i.getVertexPosition(l,ji),i.getVertexPosition(u,Ki);const d=Fc(i,e,t,n,$i,ji,Ki,ja);if(d){const p=new D;Pt.getBarycoord(ja,$i,ji,Ki,p),r&&(d.uv=Pt.getInterpolatedAttribute(r,o,l,u,p,new Le)),s&&(d.uv1=Pt.getInterpolatedAttribute(s,o,l,u,p,new Le)),a&&(d.normal=Pt.getInterpolatedAttribute(a,o,l,u,p,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:o,b:l,c:u,normal:new D,materialIndex:0};Pt.getNormal($i,ji,Ki,m.normal),d.face=m,d.barycoord=p}return d}class gn extends yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],p=[];let m=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(p,2));function v(M,c,h,T,_,E,C,w,A,L,q){const g=E/A,y=C/L,O=E/2,z=C/2,k=w/2,j=A+1,G=L+1;let Z=0,V=0;const ae=new D;for(let he=0;he<G;he++){const ge=he*y-z;for(let ke=0;ke<j;ke++){const He=ke*g-O;ae[M]=He*T,ae[c]=ge*_,ae[h]=k,u.push(ae.x,ae.y,ae.z),ae[M]=0,ae[c]=0,ae[h]=w>0?1:-1,d.push(ae.x,ae.y,ae.z),p.push(ke/A),p.push(1-he/L),Z+=1}}for(let he=0;he<L;he++)for(let ge=0;ge<A;ge++){const ke=m+ge+j*he,He=m+ge+j*(he+1),X=m+(ge+1)+j*(he+1),ee=m+(ge+1)+j*he;l.push(ke,He,ee),l.push(He,X,ee),V+=6}o.addGroup(f,V,q),f+=V,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gt(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function Oc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Bc={clone:di,merge:gt};var zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zc,this.fragmentShader=kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Oc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ul extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cn=new D,Ka=new Le,Za=new Le;class wt extends ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cn.x,cn.y).multiplyScalar(-e/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cn.x,cn.y).multiplyScalar(-e/cn.z)}getViewSize(e,t){return this.getViewBounds(e,Ka,Za),t.subVectors(Za,Ka)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jn=-90,Kn=1;class Hc extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wt(jn,Kn,e,t);r.layers=this.layers,this.add(r);const s=new wt(jn,Kn,e,t);s.layers=this.layers,this.add(s);const a=new wt(jn,Kn,e,t);a.layers=this.layers,this.add(a);const o=new wt(jn,Kn,e,t);o.layers=this.layers,this.add(o);const l=new wt(jn,Kn,e,t);l.layers=this.layers,this.add(l);const u=new wt(jn,Kn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,m,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hl extends _t{constructor(e,t,n,r,s,a,o,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new hl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gn(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:fn});s.uniforms.tEquirect.value=t;const a=new Je(r,s),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Bt),new Hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ts=new D,Vc=new D,Wc=new De;class An{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ts.subVectors(n,t).cross(Vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wc.getNormalMatrix(e),r=this.coplanarPoint(ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new br,er=new D;class ha{constructor(e=new An,t=new An,n=new An,r=new An,s=new An,a=new An){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],d=r[5],p=r[6],m=r[7],f=r[8],v=r[9],M=r[10],c=r[11],h=r[12],T=r[13],_=r[14],E=r[15];if(n[0].setComponents(l-s,m-u,c-f,E-h).normalize(),n[1].setComponents(l+s,m+u,c+f,E+h).normalize(),n[2].setComponents(l+a,m+d,c+v,E+T).normalize(),n[3].setComponents(l-a,m-d,c-v,E-T).normalize(),n[4].setComponents(l-o,m-p,c-M,E-_).normalize(),t===Qt)n[5].setComponents(l+o,m+p,c+M,E+_).normalize();else if(t===xr)n[5].setComponents(o,p,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(e){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(er.x=r.normal.x>0?e.max.x:e.min.x,er.y=r.normal.y>0?e.max.y:e.min.y,er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Xc(i){const e=new WeakMap;function t(o,l){const u=o.array,d=o.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,u,d),o.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){const d=l.array,p=l.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,d);else{p.sort((f,v)=>f.start-v.start);let m=0;for(let f=1;f<p.length;f++){const v=p[m],M=p[f];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++m,p[m]=M)}p.length=m+1;for(let f=0,v=p.length;f<v;f++){const M=p[f];i.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Dn extends yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),u=o+1,d=l+1,p=e/o,m=t/l,f=[],v=[],M=[],c=[];for(let h=0;h<d;h++){const T=h*m-a;for(let _=0;_<u;_++){const E=_*p-s;v.push(E,-T,0),M.push(0,0,1),c.push(_/o),c.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const _=T+u*h,E=T+u*(h+1),C=T+1+u*(h+1),w=T+1+u*h;f.push(_,E,w),f.push(E,C,w)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(M,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.widthSegments,e.heightSegments)}}var qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yc=`#ifdef USE_ALPHAHASH
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
#endif`,$c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,gu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,th=`#if defined( USE_POINTS_UV )
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
#endif`,nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ah=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oh=`#ifdef USE_MORPHTARGETS
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
#endif`,lh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ch=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ph=`#ifdef USE_NORMALMAP
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
#endif`,mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Th=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ah=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ch=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Ph=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ih=`#ifdef USE_SKINNING
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
#endif`,Dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uh=`#ifdef USE_SKINNING
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
#endif`,Nh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zh=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kh=`#ifdef USE_TRANSMISSION
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
#endif`,Hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qh=`uniform sampler2D t2D;
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
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`#include <common>
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
}`,Jh=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qh=`#define DISTANCE
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
}`,ed=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`uniform float scale;
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
}`,rd=`uniform vec3 diffuse;
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
}`,sd=`#include <common>
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
}`,ad=`uniform vec3 diffuse;
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
}`,od=`#define LAMBERT
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
}`,ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cd=`#define MATCAP
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
}`,ud=`#define MATCAP
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
}`,hd=`#define NORMAL
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
}`,dd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fd=`#define PHONG
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
}`,pd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,md=`#define STANDARD
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
}`,gd=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_d=`#define TOON
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
}`,vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xd=`uniform float size;
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
}`,Md=`uniform vec3 diffuse;
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
}`,Sd=`#include <common>
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
}`,yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ed=`uniform float rotation;
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
}`,Td=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:qc,alphahash_pars_fragment:Yc,alphamap_fragment:$c,alphamap_pars_fragment:jc,alphatest_fragment:Kc,alphatest_pars_fragment:Zc,aomap_fragment:Jc,aomap_pars_fragment:Qc,batching_pars_vertex:eu,batching_vertex:tu,begin_vertex:nu,beginnormal_vertex:iu,bsdfs:ru,iridescence_fragment:su,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:uu,color_fragment:hu,color_pars_fragment:du,color_pars_vertex:fu,color_vertex:pu,common:mu,cube_uv_reflection_fragment:gu,defaultnormal_vertex:_u,displacementmap_pars_vertex:vu,displacementmap_vertex:xu,emissivemap_fragment:Mu,emissivemap_pars_fragment:Su,colorspace_fragment:yu,colorspace_pars_fragment:Eu,envmap_fragment:Tu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Au,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Bu,envmap_vertex:Ru,fog_vertex:Cu,fog_pars_vertex:Pu,fog_fragment:Lu,fog_pars_fragment:Iu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:zu,lights_toon_pars_fragment:ku,lights_phong_fragment:Hu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Vu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:Zu,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:eh,map_particle_pars_fragment:th,metalnessmap_fragment:nh,metalnessmap_pars_fragment:ih,morphinstance_vertex:rh,morphcolor_vertex:sh,morphnormal_vertex:ah,morphtarget_pars_vertex:oh,morphtarget_vertex:lh,normal_fragment_begin:ch,normal_fragment_maps:uh,normal_pars_fragment:hh,normal_pars_vertex:dh,normal_vertex:fh,normalmap_pars_fragment:ph,clearcoat_normal_fragment_begin:mh,clearcoat_normal_fragment_maps:gh,clearcoat_pars_fragment:_h,iridescence_pars_fragment:vh,opaque_fragment:xh,packing:Mh,premultiplied_alpha_fragment:Sh,project_vertex:yh,dithering_fragment:Eh,dithering_pars_fragment:Th,roughnessmap_fragment:bh,roughnessmap_pars_fragment:Ah,shadowmap_pars_fragment:wh,shadowmap_pars_vertex:Rh,shadowmap_vertex:Ch,shadowmask_pars_fragment:Ph,skinbase_vertex:Lh,skinning_pars_vertex:Ih,skinning_vertex:Dh,skinnormal_vertex:Uh,specularmap_fragment:Nh,specularmap_pars_fragment:Fh,tonemapping_fragment:Oh,tonemapping_pars_fragment:Bh,transmission_fragment:zh,transmission_pars_fragment:kh,uv_pars_fragment:Hh,uv_pars_vertex:Gh,uv_vertex:Vh,worldpos_vertex:Wh,background_vert:Xh,background_frag:qh,backgroundCube_vert:Yh,backgroundCube_frag:$h,cube_vert:jh,cube_frag:Kh,depth_vert:Zh,depth_frag:Jh,distanceRGBA_vert:Qh,distanceRGBA_frag:ed,equirect_vert:td,equirect_frag:nd,linedashed_vert:id,linedashed_frag:rd,meshbasic_vert:sd,meshbasic_frag:ad,meshlambert_vert:od,meshlambert_frag:ld,meshmatcap_vert:cd,meshmatcap_frag:ud,meshnormal_vert:hd,meshnormal_frag:dd,meshphong_vert:fd,meshphong_frag:pd,meshphysical_vert:md,meshphysical_frag:gd,meshtoon_vert:_d,meshtoon_frag:vd,points_vert:xd,points_frag:Md,shadow_vert:Sd,shadow_frag:yd,sprite_vert:Ed,sprite_frag:Td},re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Ht={basic:{uniforms:gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:gt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:gt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:gt([re.points,re.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:gt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:gt([re.common,re.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:gt([re.sprite,re.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:gt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:gt([re.lights,re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ht.physical={uniforms:gt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const tr={r:0,b:0,g:0},Tn=new Wt,bd=new tt;function Ad(i,e,t,n,r,s,a){const o=new Ue(0);let l=s===!0?0:1,u,d,p=null,m=0,f=null;function v(T){let _=T.isScene===!0?T.background:null;return _&&_.isTexture&&(_=(T.backgroundBlurriness>0?t:e).get(_)),_}function M(T){let _=!1;const E=v(T);E===null?h(o,l):E&&E.isColor&&(h(E,1),_=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function c(T,_){const E=v(_);E&&(E.isCubeTexture||E.mapping===Er)?(d===void 0&&(d=new Je(new gn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:di(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Tn.copy(_.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bd.makeRotationFromEuler(Tn)),d.material.toneMapped=Ye.getTransfer(E.colorSpace)!==et,(p!==E||m!==E.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,p=E,m=E.version,f=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Je(new Dn(2,2),new tn({name:"BackgroundMaterial",uniforms:di(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||m!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,p=E,m=E.version,f=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function h(T,_){T.getRGB(tr,cl(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(T,_=1){o.set(T),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:M,addToRenderList:c}}function wd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(g,y,O,z,k){let j=!1;const G=p(z,O,y);s!==G&&(s=G,u(s.object)),j=f(g,z,O,k),j&&v(g,z,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(g,y,O,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function u(g){return i.bindVertexArray(g)}function d(g){return i.deleteVertexArray(g)}function p(g,y,O){const z=O.wireframe===!0;let k=n[g.id];k===void 0&&(k={},n[g.id]=k);let j=k[y.id];j===void 0&&(j={},k[y.id]=j);let G=j[z];return G===void 0&&(G=m(l()),j[z]=G),G}function m(g){const y=[],O=[],z=[];for(let k=0;k<t;k++)y[k]=0,O[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:O,attributeDivisors:z,object:g,attributes:{},index:null}}function f(g,y,O,z){const k=s.attributes,j=y.attributes;let G=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){const he=k[V];let ge=j[V];if(ge===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(ge=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(ge=g.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function v(g,y,O,z){const k={},j=y.attributes;let G=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){let he=j[V];he===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(he=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(he=g.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),k[V]=ge,G++}s.attributes=k,s.attributesNum=G,s.index=z}function M(){const g=s.newAttributes;for(let y=0,O=g.length;y<O;y++)g[y]=0}function c(g){h(g,0)}function h(g,y){const O=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;O[g]=1,z[g]===0&&(i.enableVertexAttribArray(g),z[g]=1),k[g]!==y&&(i.vertexAttribDivisor(g,y),k[g]=y)}function T(){const g=s.newAttributes,y=s.enabledAttributes;for(let O=0,z=y.length;O<z;O++)y[O]!==g[O]&&(i.disableVertexAttribArray(O),y[O]=0)}function _(g,y,O,z,k,j,G){G===!0?i.vertexAttribIPointer(g,y,O,k,j):i.vertexAttribPointer(g,y,O,z,k,j)}function E(g,y,O,z){M();const k=z.attributes,j=O.getAttributes(),G=y.defaultAttributeValues;for(const Z in j){const V=j[Z];if(V.location>=0){let ae=k[Z];if(ae===void 0&&(Z==="instanceMatrix"&&g.instanceMatrix&&(ae=g.instanceMatrix),Z==="instanceColor"&&g.instanceColor&&(ae=g.instanceColor)),ae!==void 0){const he=ae.normalized,ge=ae.itemSize,ke=e.get(ae);if(ke===void 0)continue;const He=ke.buffer,X=ke.type,ee=ke.bytesPerElement,pe=X===i.INT||X===i.UNSIGNED_INT||ae.gpuType===ra;if(ae.isInterleavedBufferAttribute){const ue=ae.data,Pe=ue.stride,we=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)h(V.location+Ne,ue.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)c(V.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ne=0;Ne<V.locationSize;Ne++)_(V.location+Ne,ge/V.locationSize,X,he,Pe*ee,(we+ge/V.locationSize*Ne)*ee,pe)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)h(V.location+ue,ae.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<V.locationSize;ue++)c(V.location+ue);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ue=0;ue<V.locationSize;ue++)_(V.location+ue,ge/V.locationSize,X,he,ge*ee,ge/V.locationSize*ue*ee,pe)}}else if(G!==void 0){const he=G[Z];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(V.location,he);break;case 3:i.vertexAttrib3fv(V.location,he);break;case 4:i.vertexAttrib4fv(V.location,he);break;default:i.vertexAttrib1fv(V.location,he)}}}}T()}function C(){L();for(const g in n){const y=n[g];for(const O in y){const z=y[O];for(const k in z)d(z[k].object),delete z[k];delete y[O]}delete n[g]}}function w(g){if(n[g.id]===void 0)return;const y=n[g.id];for(const O in y){const z=y[O];for(const k in z)d(z[k].object),delete z[k];delete y[O]}delete n[g.id]}function A(g){for(const y in n){const O=n[y];if(O[g.id]===void 0)continue;const z=O[g.id];for(const k in z)d(z[k].object),delete z[k];delete O[g.id]}}function L(){q(),a=!0,s!==r&&(s=r,u(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:c,disableUnusedAttributes:T}}function Rd(i,e,t){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),t.update(d,n,1)}function a(u,d,p){p!==0&&(i.drawArraysInstanced(n,u,d,p),t.update(d,n,p))}function o(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,p);let f=0;for(let v=0;v<p;v++)f+=d[v];t.update(f,n,1)}function l(u,d,p,m){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<u.length;v++)a(u[v],d[v],m[v]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,d,0,m,0,p);let v=0;for(let M=0;M<p;M++)v+=d[M];for(let M=0;M<m.length;M++)t.update(v,n,m[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==en&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Jt&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:f,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:c,maxAttributes:h,maxVertexUniforms:T,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:C,maxSamples:w}}function Pd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new An,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const f=p.length!==0||m||n!==0||r;return r=m,n=p.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,f){const v=p.clippingPlanes,M=p.clipIntersection,c=p.clipShadows,h=i.get(p);if(!r||v===null||v.length===0||s&&!c)s?d(null):u();else{const T=s?0:n,_=T*4;let E=h.clippingState||null;l.value=E,E=d(v,m,_,f);for(let C=0;C!==_;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,f,v){const M=p!==null?p.length:0;let c=null;if(M!==0){if(c=l.value,v!==!0||c===null){const h=f+M*4,T=m.matrixWorldInverse;o.getNormalMatrix(T),(c===null||c.length<h)&&(c=new Float32Array(h));for(let _=0,E=f;_!==M;++_,E+=4)a.copy(p[_]).applyMatrix4(T,o),a.normal.toArray(c,E),c[E+3]=a.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,c}}function Ld(i){let e=new WeakMap;function t(a,o){return o===Ss?a.mapping=li:o===ys&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ss||o===ys)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Gc(l.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fl extends ul{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ii=4,Ja=[.125,.215,.35,.446,.526,.582],Cn=20,ns=new fl,Qa=new Ue;let is=null,rs=0,ss=0,as=!1;const wn=(1+Math.sqrt(5))/2,Zn=1/wn,eo=[new D(-wn,Zn,0),new D(wn,Zn,0),new D(-Zn,0,wn),new D(Zn,0,wn),new D(0,wn,-Zn),new D(0,wn,Zn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class to{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(is,rs,ss),this._renderer.xr.enabled=as,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ii,format:zt,colorSpace:vn,depthBuffer:!1},r=no(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=no(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(s)),this._blurMaterial=Dd(s,e,t)}return r}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,n,r){const o=new wt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(Qa),d.toneMapping=pn,d.autoClear=!1;const f=new Ri({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),v=new Je(new gn,f);let M=!1;const c=e.background;c?c.isColor&&(f.color.copy(c),e.background=null,M=!0):(f.color.copy(Qa),M=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const _=this._cubeSize;nr(r,T*_,h>2?_:0,_,_),d.setRenderTarget(r),M&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=c}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=io());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=eo[(r-s-1)%eo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Je(this._lodPlanes[r],u),m=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cn-1),M=s/v,c=isFinite(s)?1+Math.floor(d*M):Cn;c>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Cn}`);const h=[];let T=0;for(let A=0;A<Cn;++A){const L=A/M,q=Math.exp(-L*L/2);h.push(q),A===0?T+=q:A<c&&(T+=2*q)}for(let A=0;A<h.length;A++)h[A]=h[A]/T;m.envMap.value=e.texture,m.samples.value=c,m.weights.value=h,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:_}=this;m.dTheta.value=v,m.mipInt.value=_-n;const E=this._sizeLods[r],C=3*E*(r>_-ii?r-_+ii:0),w=4*(this._cubeSize-E);nr(t,C,w,3*E,2*E),l.setRenderTarget(t),l.render(p,ns)}}function Id(i){const e=[],t=[],n=[];let r=i;const s=i-ii+1+Ja.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ii?l=Ja[a-i+ii-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,p=1+u,m=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,v=6,M=3,c=2,h=1,T=new Float32Array(M*v*f),_=new Float32Array(c*v*f),E=new Float32Array(h*v*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,L=w>2?0:-1,q=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];T.set(q,M*v*w),_.set(m,c*v*w);const g=[w,w,w,w,w,w];E.set(g,h*v*w)}const C=new yt;C.setAttribute("position",new It(T,M)),C.setAttribute("uv",new It(_,c)),C.setAttribute("faceIndex",new It(E,h)),e.push(C),r>ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function no(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dd(i,e,t){const n=new Float32Array(Cn),r=new D(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function io(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ro(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function Ud(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ss||l===ys,d=l===li||l===ci;if(u||d){let p=e.get(o);const m=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new to(i)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const f=o.image;return u&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new to(i)),p=u?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Nd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Fd(i,e,t,n){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);for(const v in m.morphAttributes){const M=m.morphAttributes[v];for(let c=0,h=M.length;c<h;c++)e.remove(M[c])}m.removeEventListener("dispose",a),delete r[m.id];const f=s.get(m);f&&(e.remove(f),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const v in m)e.update(m[v],i.ARRAY_BUFFER);const f=p.morphAttributes;for(const v in f){const M=f[v];for(let c=0,h=M.length;c<h;c++)e.update(M[c],i.ARRAY_BUFFER)}}function u(p){const m=[],f=p.index,v=p.attributes.position;let M=0;if(f!==null){const T=f.array;M=f.version;for(let _=0,E=T.length;_<E;_+=3){const C=T[_+0],w=T[_+1],A=T[_+2];m.push(C,w,w,A,A,C)}}else if(v!==void 0){const T=v.array;M=v.version;for(let _=0,E=T.length/3-1;_<E;_+=3){const C=_+0,w=_+1,A=_+2;m.push(C,w,w,A,A,C)}}else return;const c=new(tl(m)?ll:ol)(m,1);c.version=M;const h=s.get(p);h&&e.remove(h),s.set(p,c)}function d(p){const m=s.get(p);if(m){const f=p.index;f!==null&&m.version<f.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Od(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,f){i.drawElements(n,f,s,m*a),t.update(f,n,1)}function u(m,f,v){v!==0&&(i.drawElementsInstanced(n,f,s,m*a,v),t.update(f,n,v))}function d(m,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,m,0,v);let c=0;for(let h=0;h<v;h++)c+=f[h];t.update(c,n,1)}function p(m,f,v,M){if(v===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<m.length;h++)u(m[h]/a,f[h],M[h]);else{c.multiDrawElementsInstancedWEBGL(n,f,0,s,m,0,M,0,v);let h=0;for(let T=0;T<v;T++)h+=f[T];for(let T=0;T<M.length;T++)t.update(h,n,M[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Bd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zd(i,e,t){const n=new WeakMap,r=new Ze;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let m=n.get(o);if(m===void 0||m.count!==p){let g=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var f=g;m!==void 0&&m.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,c=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),c===!0&&(E=3);let C=o.attributes.position.count*E,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*p),L=new il(A,C,w,p);L.type=Jt,L.needsUpdate=!0;const q=E*4;for(let y=0;y<p;y++){const O=h[y],z=T[y],k=_[y],j=C*w*4*y;for(let G=0;G<O.count;G++){const Z=G*q;v===!0&&(r.fromBufferAttribute(O,G),A[j+Z+0]=r.x,A[j+Z+1]=r.y,A[j+Z+2]=r.z,A[j+Z+3]=0),M===!0&&(r.fromBufferAttribute(z,G),A[j+Z+4]=r.x,A[j+Z+5]=r.y,A[j+Z+6]=r.z,A[j+Z+7]=0),c===!0&&(r.fromBufferAttribute(k,G),A[j+Z+8]=r.x,A[j+Z+9]=r.y,A[j+Z+10]=r.z,A[j+Z+11]=k.itemSize===4?r.w:1)}}m={count:p,texture:L,size:new Le(C,w)},n.set(o,m),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let c=0;c<u.length;c++)v+=u[c];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function kd(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return p}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class pl extends _t{constructor(e,t,n,r,s,a,o,l,u,d=si){if(d!==si&&d!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===si&&(n=Un),n===void 0&&d===hi&&(n=ui),super(null,r,s,a,o,l,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ml=new _t,so=new pl(1,1),gl=new il,_l=new Ac,vl=new hl,ao=[],oo=[],lo=new Float32Array(16),co=new Float32Array(9),uo=new Float32Array(4);function pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ao[r];if(s===void 0&&(s=new Float32Array(r),ao[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ar(i,e){let t=oo[e];t===void 0&&(t=new Int32Array(e),oo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;uo.set(n),i.uniformMatrix2fv(this.addr,!1,uo),lt(t,n)}}function qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;co.set(n),i.uniformMatrix3fv(this.addr,!1,co),lt(t,n)}}function Yd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;lo.set(n),i.uniformMatrix4fv(this.addr,!1,lo),lt(t,n)}}function $d(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(so.compareFunction=el,s=so):s=ml,t.setTexture2D(e||s,r)}function rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_l,r)}function sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vl,r)}function af(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gl,r)}function of(i){switch(i){case 5126:return Hd;case 35664:return Gd;case 35665:return Vd;case 35666:return Wd;case 35674:return Xd;case 35675:return qd;case 35676:return Yd;case 5124:case 35670:return $d;case 35667:case 35671:return jd;case 35668:case 35672:return Kd;case 35669:case 35673:return Zd;case 5125:return Jd;case 36294:return Qd;case 36295:return ef;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return nf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return af}}function lf(i,e){i.uniform1fv(this.addr,e)}function cf(i,e){const t=pi(e,this.size,2);i.uniform2fv(this.addr,t)}function uf(i,e){const t=pi(e,this.size,3);i.uniform3fv(this.addr,t)}function hf(i,e){const t=pi(e,this.size,4);i.uniform4fv(this.addr,t)}function df(i,e){const t=pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ff(i,e){const t=pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pf(i,e){const t=pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mf(i,e){i.uniform1iv(this.addr,e)}function gf(i,e){i.uniform2iv(this.addr,e)}function _f(i,e){i.uniform3iv(this.addr,e)}function vf(i,e){i.uniform4iv(this.addr,e)}function xf(i,e){i.uniform1uiv(this.addr,e)}function Mf(i,e){i.uniform2uiv(this.addr,e)}function Sf(i,e){i.uniform3uiv(this.addr,e)}function yf(i,e){i.uniform4uiv(this.addr,e)}function Ef(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ml,s[a])}function Tf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_l,s[a])}function bf(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vl,s[a])}function Af(i,e,t){const n=this.cache,r=e.length,s=Ar(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gl,s[a])}function wf(i){switch(i){case 5126:return lf;case 35664:return cf;case 35665:return uf;case 35666:return hf;case 35674:return df;case 35675:return ff;case 35676:return pf;case 5124:case 35670:return mf;case 35667:case 35671:return gf;case 35668:case 35672:return _f;case 35669:case 35673:return vf;case 5125:return xf;case 36294:return Mf;case 36295:return Sf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Af}}class Rf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=of(t.type)}}class Cf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wf(t.type)}}class Pf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const os=/(\w+)(\])?(\[|\.)?/g;function ho(i,e){i.seq.push(e),i.map[e.id]=e}function Lf(i,e,t){const n=i.name,r=n.length;for(os.lastIndex=0;;){const s=os.exec(n),a=os.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){ho(t,u===void 0?new Rf(o,i,e):new Cf(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Pf(o),ho(t,p)),t=p}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Lf(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function fo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const If=37297;let Df=0;function Uf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Nf(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===_r?n="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case Tr:return[n,"LinearTransferOETF"];case kt:case ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function po(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Uf(i.getShaderSource(e),a)}else return r}function Ff(i,e){const t=Nf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Of(i,e){let t;switch(e){case Ql:t="Linear";break;case ec:t="Reinhard";break;case tc:t="Cineon";break;case Ho:t="ACESFilmic";break;case ic:t="AgX";break;case rc:t="Neutral";break;case nc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new D;function Bf(){Ye.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function kf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ai(i){return i!==""}function mo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function go(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qs(i){return i.replace(Gf,Wf)}const Vf=new Map;function Wf(i,e){let t=Ie[e];if(t===void 0){const n=Vf.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qs(t)}const Xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _o(i){return i.replace(Xf,qf)}function qf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function $f(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Kf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case Zl:e="ENVMAP_BLENDING_MIX";break;case Jl:e="ENVMAP_BLENDING_ADD";break}return e}function Zf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jf(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Yf(t),u=$f(t),d=jf(t),p=Kf(t),m=Zf(t),f=zf(t),v=kf(s),M=r.createProgram();let c,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),c.length>0&&(c+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ai).join(`
`),h.length>0&&(h+=`
`)):(c=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),h=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==pn?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Ff("linearToOutputTexel",t.outputColorSpace),Bf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Qs(a),a=mo(a,t),a=go(a,t),o=Qs(o),o=mo(o,t),o=go(o,t),a=_o(a),o=_o(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,c=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,h=["#define varying in",t.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=T+c+a,E=T+h+o,C=fo(r,r.VERTEX_SHADER,_),w=fo(r,r.FRAGMENT_SHADER,E);r.attachShader(M,C),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(y){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(C).trim(),k=r.getShaderInfoLog(w).trim();let j=!0,G=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,C,w);else{const Z=po(r,C,"vertex"),V=po(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+O+`
`+Z+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||k==="")&&(G=!1);G&&(y.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:c},fragmentShader:{log:k,prefix:h}})}r.deleteShader(C),r.deleteShader(w),L=new mr(r,M),q=Hf(r,M)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let q;this.getAttributes=function(){return q===void 0&&A(this),q};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(M,If)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Df++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=w,this}let Qf=0;class ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tp(e),t.set(e,n)),n}}class tp{constructor(e){this.id=Qf++,this.code=e,this.usedTimes=0}}function np(i,e,t,n,r,s,a){const o=new sl,l=new ep,u=new Set,d=[],p=r.logarithmicDepthBuffer,m=r.reverseDepthBuffer,f=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(g){return u.add(g),g===0?"uv":`uv${g}`}function h(g,y,O,z,k){const j=z.fog,G=k.geometry,Z=g.isMeshStandardMaterial?z.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||Z),ae=V&&V.mapping===Er?V.image.height:null,he=M[g.type];g.precision!==null&&(v=r.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ke=ge!==void 0?ge.length:0;let He=0;G.morphAttributes.position!==void 0&&(He=1),G.morphAttributes.normal!==void 0&&(He=2),G.morphAttributes.color!==void 0&&(He=3);let X,ee,pe,ue;if(he){const xt=Ht[he];X=xt.vertexShader,ee=xt.fragmentShader}else X=g.vertexShader,ee=g.fragmentShader,l.update(g),pe=l.getVertexShaderID(g),ue=l.getFragmentShaderID(g);const Pe=i.getRenderTarget(),we=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,Ve=!!g.map,Be=!!g.matcap,R=!!V,ht=!!g.aoMap,Fe=!!g.lightMap,ze=!!g.bumpMap,Te=!!g.normalMap,$e=!!g.displacementMap,be=!!g.emissiveMap,b=!!g.metalnessMap,x=!!g.roughnessMap,N=g.anisotropy>0,$=g.clearcoat>0,J=g.dispersion>0,Y=g.iridescence>0,Se=g.sheen>0,ie=g.transmission>0,de=N&&!!g.anisotropyMap,Q=$&&!!g.clearcoatMap,W=$&&!!g.clearcoatNormalMap,ne=$&&!!g.clearcoatRoughnessMap,_e=Y&&!!g.iridescenceMap,me=Y&&!!g.iridescenceThicknessMap,se=Se&&!!g.sheenColorMap,Ae=Se&&!!g.sheenRoughnessMap,xe=!!g.specularMap,Oe=!!g.specularColorMap,P=!!g.specularIntensityMap,oe=ie&&!!g.transmissionMap,H=ie&&!!g.thicknessMap,K=!!g.gradientMap,le=!!g.alphaMap,fe=g.alphaTest>0,Ge=!!g.alphaHash,rt=!!g.extensions;let vt=pn;g.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(vt=i.toneMapping);const We={shaderID:he,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:ee,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:ue,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:we,instancingColor:we&&k.instanceColor!==null,instancingMorph:we&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:vn,alphaToCoverage:!!g.alphaToCoverage,map:Ve,matcap:Be,envMap:R,envMapMode:R&&V.mapping,envMapCubeUVHeight:ae,aoMap:ht,lightMap:Fe,bumpMap:ze,normalMap:Te,displacementMap:f&&$e,emissiveMap:be,normalMapObjectSpace:Te&&g.normalMapType===lc,normalMapTangentSpace:Te&&g.normalMapType===Qo,metalnessMap:b,roughnessMap:x,anisotropy:N,anisotropyMap:de,clearcoat:$,clearcoatMap:Q,clearcoatNormalMap:W,clearcoatRoughnessMap:ne,dispersion:J,iridescence:Y,iridescenceMap:_e,iridescenceThicknessMap:me,sheen:Se,sheenColorMap:se,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:Oe,specularIntensityMap:P,transmission:ie,transmissionMap:oe,thicknessMap:H,gradientMap:K,opaque:g.transparent===!1&&g.blending===ri&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:fe,alphaHash:Ge,combine:g.combine,mapUv:Ve&&c(g.map.channel),aoMapUv:ht&&c(g.aoMap.channel),lightMapUv:Fe&&c(g.lightMap.channel),bumpMapUv:ze&&c(g.bumpMap.channel),normalMapUv:Te&&c(g.normalMap.channel),displacementMapUv:$e&&c(g.displacementMap.channel),emissiveMapUv:be&&c(g.emissiveMap.channel),metalnessMapUv:b&&c(g.metalnessMap.channel),roughnessMapUv:x&&c(g.roughnessMap.channel),anisotropyMapUv:de&&c(g.anisotropyMap.channel),clearcoatMapUv:Q&&c(g.clearcoatMap.channel),clearcoatNormalMapUv:W&&c(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&c(g.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&c(g.iridescenceMap.channel),iridescenceThicknessMapUv:me&&c(g.iridescenceThicknessMap.channel),sheenColorMapUv:se&&c(g.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&c(g.sheenRoughnessMap.channel),specularMapUv:xe&&c(g.specularMap.channel),specularColorMapUv:Oe&&c(g.specularColorMap.channel),specularIntensityMapUv:P&&c(g.specularIntensityMap.channel),transmissionMapUv:oe&&c(g.transmissionMap.channel),thicknessMapUv:H&&c(g.thicknessMap.channel),alphaMapUv:le&&c(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||N),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Ve||le),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:He,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ve&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Gt,flipSided:g.side===St,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:rt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&g.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return We.vertexUv1s=u.has(1),We.vertexUv2s=u.has(2),We.vertexUv3s=u.has(3),u.clear(),We}function T(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)y.push(O),y.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(_(y,g),E(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function _(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function E(g,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),g.push(o.mask)}function C(g){const y=M[g.type];let O;if(y){const z=Ht[y];O=Bc.clone(z.uniforms)}else O=g.uniforms;return O}function w(g,y){let O;for(let z=0,k=d.length;z<k;z++){const j=d[z];if(j.cacheKey===y){O=j,++O.usedTimes;break}}return O===void 0&&(O=new Jf(i,y,g,s),d.push(O)),O}function A(g){if(--g.usedTimes===0){const y=d.indexOf(g);d[y]=d[d.length-1],d.pop(),g.destroy()}}function L(g){l.remove(g)}function q(){l.dispose()}return{getParameters:h,getProgramCacheKey:T,getUniforms:C,acquireProgram:w,releaseProgram:A,releaseShaderCache:L,programs:d,dispose:q}}function ip(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function rp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,m,f,v,M,c){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:m,material:f,groupOrder:v,renderOrder:p.renderOrder,z:M,group:c},i[e]=h):(h.id=p.id,h.object=p,h.geometry=m,h.material=f,h.groupOrder=v,h.renderOrder=p.renderOrder,h.z=M,h.group=c),e++,h}function o(p,m,f,v,M,c){const h=a(p,m,f,v,M,c);f.transmission>0?n.push(h):f.transparent===!0?r.push(h):t.push(h)}function l(p,m,f,v,M,c){const h=a(p,m,f,v,M,c);f.transmission>0?n.unshift(h):f.transparent===!0?r.unshift(h):t.unshift(h)}function u(p,m){t.length>1&&t.sort(p||rp),n.length>1&&n.sort(m||xo),r.length>1&&r.sort(m||xo)}function d(){for(let p=e,m=i.length;p<m;p++){const f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:u}}function sp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Mo,i.set(n,[a])):r>=s.length?(a=new Mo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ap(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function op(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lp=0;function cp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function up(i){const e=new ap,t=op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new D);const r=new D,s=new tt,a=new tt;function o(u){let d=0,p=0,m=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,v=0,M=0,c=0,h=0,T=0,_=0,E=0,C=0,w=0,A=0;u.sort(cp);for(let q=0,g=u.length;q<g;q++){const y=u[q],O=y.color,z=y.intensity,k=y.distance,j=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=O.r*z,p+=O.g*z,m+=O.b*z;else if(y.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(y.sh.coefficients[G],z);A++}else if(y.isDirectionalLight){const G=e.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Z=y.shadow,V=t.get(y);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=y.shadow.matrix,T++}n.directional[f]=G,f++}else if(y.isSpotLight){const G=e.get(y);G.position.setFromMatrixPosition(y.matrixWorld),G.color.copy(O).multiplyScalar(z),G.distance=k,G.coneCos=Math.cos(y.angle),G.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),G.decay=y.decay,n.spot[M]=G;const Z=y.shadow;if(y.map&&(n.spotLightMap[C]=y.map,C++,Z.updateMatrices(y),y.castShadow&&w++),n.spotLightMatrix[M]=Z.matrix,y.castShadow){const V=t.get(y);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=j,E++}M++}else if(y.isRectAreaLight){const G=e.get(y);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(y.width*.5,0,0),G.halfHeight.set(0,y.height*.5,0),n.rectArea[c]=G,c++}else if(y.isPointLight){const G=e.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity),G.distance=y.distance,G.decay=y.decay,y.castShadow){const Z=y.shadow,V=t.get(y);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=y.shadow.matrix,_++}n.point[v]=G,v++}else if(y.isHemisphereLight){const G=e.get(y);G.skyColor.copy(y.color).multiplyScalar(z),G.groundColor.copy(y.groundColor).multiplyScalar(z),n.hemi[h]=G,h++}}c>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=m;const L=n.hash;(L.directionalLength!==f||L.pointLength!==v||L.spotLength!==M||L.rectAreaLength!==c||L.hemiLength!==h||L.numDirectionalShadows!==T||L.numPointShadows!==_||L.numSpotShadows!==E||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=c,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=E+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=f,L.pointLength=v,L.spotLength=M,L.rectAreaLength=c,L.hemiLength=h,L.numDirectionalShadows=T,L.numPointShadows=_,L.numSpotShadows=E,L.numSpotMaps=C,L.numLightProbes=A,n.version=lp++)}function l(u,d){let p=0,m=0,f=0,v=0,M=0;const c=d.matrixWorldInverse;for(let h=0,T=u.length;h<T;h++){const _=u[h];if(_.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(c),p++}else if(_.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(c),f++}else if(_.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(c),a.identity(),s.copy(_.matrixWorld),s.premultiply(c),a.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(c),m++}else if(_.isHemisphereLight){const E=n.hemi[M];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(c),M++}}}return{setup:o,setupView:l,state:n}}function So(i){const e=new up(i),t=[],n=[];function r(d){u.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function hp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new So(i),e.set(r,[o])):s>=a.length?(o=new So(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class dp extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fp extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gp(i,e,t){let n=new ha;const r=new Le,s=new Le,a=new Ze,o=new dp({depthPacking:oc}),l=new fp,u={},d=t.maxTextureSize,p={[_n]:St,[St]:_n,[Gt]:Gt},m=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:pp,fragmentShader:mp}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const v=new yt;v.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Je(v,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let h=this.type;this.render=function(w,A,L){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||w.length===0)return;const q=i.getRenderTarget(),g=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),O=i.state;O.setBlending(fn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=h!==Zt&&this.type===Zt,k=h===Zt&&this.type!==Zt;for(let j=0,G=w.length;j<G;j++){const Z=w[j],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ae=V.getFrameExtents();if(r.multiply(ae),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ae.x),r.x=s.x*ae.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ae.y),r.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||z===!0||k===!0){const ge=this.type!==Zt?{minFilter:Lt,magFilter:Lt}:{};V.map!==null&&V.map.dispose(),V.map=new Nn(r.x,r.y,ge),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const he=V.getViewportCount();for(let ge=0;ge<he;ge++){const ke=V.getViewport(ge);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),O.viewport(a),V.updateMatrices(Z,ge),n=V.getFrustum(),E(A,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Zt&&T(V,L),V.needsUpdate=!1}h=this.type,c.needsUpdate=!1,i.setRenderTarget(q,g,y)};function T(w,A){const L=e.update(M);m.defines.VSM_SAMPLES!==w.blurSamples&&(m.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nn(r.x,r.y)),m.uniforms.shadow_pass.value=w.map.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,m,M,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,f,M,null)}function _(w,A,L,q){let g=null;const y=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)g=y;else if(g=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=g.uuid,z=A.uuid;let k=u[O];k===void 0&&(k={},u[O]=k);let j=k[z];j===void 0&&(j=g.clone(),k[z]=j,A.addEventListener("dispose",C)),g=j}if(g.visible=A.visible,g.wireframe=A.wireframe,q===Zt?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:p[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,L.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const O=i.properties.get(g);O.light=L}return g}function E(w,A,L,q,g){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===Zt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const z=e.update(w),k=w.material;if(Array.isArray(k)){const j=z.groups;for(let G=0,Z=j.length;G<Z;G++){const V=j[G],ae=k[V.materialIndex];if(ae&&ae.visible){const he=_(w,ae,q,g);w.onBeforeShadow(i,w,A,L,z,he,V),i.renderBufferDirect(L,null,z,he,w,V),w.onAfterShadow(i,w,A,L,z,he,V)}}}else if(k.visible){const j=_(w,k,q,g);w.onBeforeShadow(i,w,A,L,z,j,null),i.renderBufferDirect(L,null,z,j,w,null),w.onAfterShadow(i,w,A,L,z,j,null)}}const O=w.children;for(let z=0,k=O.length;z<k;z++)E(O[z],A,L,q,g)}function C(w){w.target.removeEventListener("dispose",C);for(const L in u){const q=u[L],g=w.target.uuid;g in q&&(q[g].dispose(),delete q[g])}}}const _p={[ps]:ms,[gs]:xs,[_s]:Ms,[oi]:vs,[ms]:ps,[xs]:gs,[Ms]:_s,[vs]:oi};function vp(i){function e(){let P=!1;const oe=new Ze;let H=null;const K=new Ze(0,0,0,0);return{setMask:function(le){H!==le&&!P&&(i.colorMask(le,le,le,le),H=le)},setLocked:function(le){P=le},setClear:function(le,fe,Ge,rt,vt){vt===!0&&(le*=rt,fe*=rt,Ge*=rt),oe.set(le,fe,Ge,rt),K.equals(oe)===!1&&(i.clearColor(le,fe,Ge,rt),K.copy(oe))},reset:function(){P=!1,H=null,K.set(-1,0,0,0)}}}function t(){let P=!1,oe=!1,H=null,K=null,le=null;return{setReversed:function(fe){oe=fe},setTest:function(fe){fe?pe(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(fe){H!==fe&&!P&&(i.depthMask(fe),H=fe)},setFunc:function(fe){if(oe&&(fe=_p[fe]),K!==fe){switch(fe){case ps:i.depthFunc(i.NEVER);break;case ms:i.depthFunc(i.ALWAYS);break;case gs:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case _s:i.depthFunc(i.EQUAL);break;case vs:i.depthFunc(i.GEQUAL);break;case xs:i.depthFunc(i.GREATER);break;case Ms:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=fe}},setLocked:function(fe){P=fe},setClear:function(fe){le!==fe&&(i.clearDepth(fe),le=fe)},reset:function(){P=!1,H=null,K=null,le=null}}}function n(){let P=!1,oe=null,H=null,K=null,le=null,fe=null,Ge=null,rt=null,vt=null;return{setTest:function(We){P||(We?pe(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(We){oe!==We&&!P&&(i.stencilMask(We),oe=We)},setFunc:function(We,xt,Xt){(H!==We||K!==xt||le!==Xt)&&(i.stencilFunc(We,xt,Xt),H=We,K=xt,le=Xt)},setOp:function(We,xt,Xt){(fe!==We||Ge!==xt||rt!==Xt)&&(i.stencilOp(We,xt,Xt),fe=We,Ge=xt,rt=Xt)},setLocked:function(We){P=We},setClear:function(We){vt!==We&&(i.clearStencil(We),vt=We)},reset:function(){P=!1,oe=null,H=null,K=null,le=null,fe=null,Ge=null,rt=null,vt=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,m=[],f=null,v=!1,M=null,c=null,h=null,T=null,_=null,E=null,C=null,w=new Ue(0,0,0),A=0,L=!1,q=null,g=null,y=null,O=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=G>=2);let V=null,ae={};const he=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),ke=new Ze().fromArray(he),He=new Ze().fromArray(ge);function X(P,oe,H,K){const le=new Uint8Array(4),fe=i.createTexture();i.bindTexture(P,fe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<H;Ge++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(oe+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return fe}const ee={};ee[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),s.setFunc(oi),Fe(!1),ze(Pa),pe(i.CULL_FACE),R(fn);function pe(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function ue(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Pe(P,oe){return d[P]!==oe?(i.bindFramebuffer(P,oe),d[P]=oe,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function we(P,oe){let H=m,K=!1;if(P){H=p.get(oe),H===void 0&&(H=[],p.set(oe,H));const le=P.textures;if(H.length!==le.length||H[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ge=le.length;fe<Ge;fe++)H[fe]=i.COLOR_ATTACHMENT0+fe;H.length=le.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function Ne(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const Ve={[Rn]:i.FUNC_ADD,[Ul]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};Ve[Fl]=i.MIN,Ve[Ol]=i.MAX;const Be={[Bl]:i.ZERO,[zl]:i.ONE,[kl]:i.SRC_COLOR,[ds]:i.SRC_ALPHA,[ql]:i.SRC_ALPHA_SATURATE,[Wl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[Hl]:i.ONE_MINUS_SRC_COLOR,[fs]:i.ONE_MINUS_SRC_ALPHA,[Xl]:i.ONE_MINUS_DST_COLOR,[Vl]:i.ONE_MINUS_DST_ALPHA,[Yl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[Kl]:i.ONE_MINUS_CONSTANT_ALPHA};function R(P,oe,H,K,le,fe,Ge,rt,vt,We){if(P===fn){v===!0&&(ue(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),P!==Dl){if(P!==M||We!==L){if((c!==Rn||_!==Rn)&&(i.blendEquation(i.FUNC_ADD),c=Rn,_=Rn),We)switch(P){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.ONE,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}h=null,T=null,E=null,C=null,w.set(0,0,0),A=0,M=P,L=We}return}le=le||oe,fe=fe||H,Ge=Ge||K,(oe!==c||le!==_)&&(i.blendEquationSeparate(Ve[oe],Ve[le]),c=oe,_=le),(H!==h||K!==T||fe!==E||Ge!==C)&&(i.blendFuncSeparate(Be[H],Be[K],Be[fe],Be[Ge]),h=H,T=K,E=fe,C=Ge),(rt.equals(w)===!1||vt!==A)&&(i.blendColor(rt.r,rt.g,rt.b,vt),w.copy(rt),A=vt),M=P,L=!1}function ht(P,oe){P.side===Gt?ue(i.CULL_FACE):pe(i.CULL_FACE);let H=P.side===St;oe&&(H=!H),Fe(H),P.blending===ri&&P.transparent===!1?R(fn):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;a.setTest(K),K&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),$e(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){q!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),q=P)}function ze(P){P!==Pl?(pe(i.CULL_FACE),P!==g&&(P===Pa?i.cullFace(i.BACK):P===Ll?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),g=P}function Te(P){P!==y&&(j&&i.lineWidth(P),y=P)}function $e(P,oe,H){P?(pe(i.POLYGON_OFFSET_FILL),(O!==oe||z!==H)&&(i.polygonOffset(oe,H),O=oe,z=H)):ue(i.POLYGON_OFFSET_FILL)}function be(P){P?pe(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function b(P){P===void 0&&(P=i.TEXTURE0+k-1),V!==P&&(i.activeTexture(P),V=P)}function x(P,oe,H){H===void 0&&(V===null?H=i.TEXTURE0+k-1:H=V);let K=ae[H];K===void 0&&(K={type:void 0,texture:void 0},ae[H]=K),(K.type!==P||K.texture!==oe)&&(V!==H&&(i.activeTexture(H),V=H),i.bindTexture(P,oe||ee[P]),K.type=P,K.texture=oe)}function N(){const P=ae[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){ke.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ke.copy(P))}function se(P){He.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),He.copy(P))}function Ae(P,oe){let H=l.get(oe);H===void 0&&(H=new WeakMap,l.set(oe,H));let K=H.get(P);K===void 0&&(K=i.getUniformBlockIndex(oe,P.name),H.set(P,K))}function xe(P,oe){const K=l.get(oe).get(P);o.get(oe)!==K&&(i.uniformBlockBinding(oe,K,P.__bindingPointIndex),o.set(oe,K))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},V=null,ae={},d={},p=new WeakMap,m=[],f=null,v=!1,M=null,c=null,h=null,T=null,_=null,E=null,C=null,w=new Ue(0,0,0),A=0,L=!1,q=null,g=null,y=null,O=null,z=null,ke.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:ue,bindFramebuffer:Pe,drawBuffers:we,useProgram:Ne,setBlending:R,setMaterial:ht,setFlipSided:Fe,setCullFace:ze,setLineWidth:Te,setPolygonOffset:$e,setScissorTest:be,activeTexture:b,bindTexture:x,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:ne,texImage3D:_e,updateUBOMapping:Ae,uniformBlockBinding:xe,texStorage2D:Q,texStorage3D:W,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:me,viewport:se,reset:Oe}}function yo(i,e,t,n){const r=xp(n);switch(t){case qo:return i*e;case $o:return i*e;case jo:return i*e*2;case Ko:return i*e/r.components*r.byteLength;case oa:return i*e/r.components*r.byteLength;case Zo:return i*e*2/r.components*r.byteLength;case la:return i*e*2/r.components*r.byteLength;case Yo:return i*e*3/r.components*r.byteLength;case zt:return i*e*4/r.components*r.byteLength;case ca:return i*e*4/r.components*r.byteLength;case cr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case As:case Rs:return Math.max(i,16)*Math.max(e,8)/4;case bs:case ws:return Math.max(i,8)*Math.max(e,8)/2;case Cs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Us:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ns:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ws:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fr:case qs:case Ys:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jo:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*8;case js:case Ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xp(i){switch(i){case en:case Vo:return{byteLength:1,components:1};case Pi:case Wo:case Ii:return{byteLength:2,components:1};case sa:case aa:return{byteLength:2,components:4};case Un:case ra:case Jt:return{byteLength:4,components:1};case Xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,d=new WeakMap;let p;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,x){return f?new OffscreenCanvas(b,x):Mr("canvas")}function M(b,x,N){let $=1;const J=be(b);if((J.width>N||J.height>N)&&($=N/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor($*J.width),Se=Math.floor($*J.height);p===void 0&&(p=v(Y,Se));const ie=x?v(Y,Se):p;return ie.width=Y,ie.height=Se,ie.getContext("2d").drawImage(b,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Se+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function c(b){return b.generateMipmaps&&b.minFilter!==Lt&&b.minFilter!==Bt}function h(b){i.generateMipmap(b)}function T(b,x,N,$,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const Se=J?gr:Ye.getTransfer($);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=Se===et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(b,x){let N;return b?x===null||x===Un||x===ui?N=i.DEPTH24_STENCIL8:x===Jt?N=i.DEPTH32F_STENCIL8:x===Pi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===ui?N=i.DEPTH_COMPONENT24:x===Jt?N=i.DEPTH_COMPONENT32F:x===Pi&&(N=i.DEPTH_COMPONENT16),N}function E(b,x){return c(b)===!0||b.isFramebufferTexture&&b.minFilter!==Lt&&b.minFilter!==Bt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&d.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),q(x)}function A(b){const x=n.get(b);if(x.__webglInit===void 0)return;const N=b.source,$=m.get(N);if($){const J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(b),Object.keys($).length===0&&m.delete(N)}n.remove(b)}function L(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const N=b.source,$=m.get(N);delete $[x.__cacheKey],a.memory.textures--}function q(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=b.textures;for(let $=0,J=N.length;$<J;$++){const Y=n.get(N[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[$])}n.remove(b)}let g=0;function y(){g=0}function O(){const b=g;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),g+=1,b}function z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function k(b,x){const N=n.get(b);if(b.isVideoTexture&&Te(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(N,b,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function j(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){He(N,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function G(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){He(N,b,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function Z(b,x){const N=n.get(b);if(b.version>0&&N.__version!==b.version){X(N,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const V={[Es]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ts]:i.MIRRORED_REPEAT},ae={[Lt]:i.NEAREST,[sc]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},he={[cc]:i.NEVER,[mc]:i.ALWAYS,[uc]:i.LESS,[el]:i.LEQUAL,[hc]:i.EQUAL,[pc]:i.GEQUAL,[dc]:i.GREATER,[fc]:i.NOTEQUAL};function ge(b,x){if(x.type===Jt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Bt||x.magFilter===Ir||x.magFilter===Oi||x.magFilter===Ln||x.minFilter===Bt||x.minFilter===Ir||x.minFilter===Oi||x.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,V[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Lt||x.minFilter!==Oi&&x.minFilter!==Ln||x.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ke(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const $=x.source;let J=m.get($);J===void 0&&(J={},m.set($,J));const Y=z(x);if(Y!==b.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[Y].usedTimes++;const Se=J[b.__cacheKey];Se!==void 0&&(J[b.__cacheKey].usedTimes--,Se.usedTimes===0&&L(x)),b.__cacheKey=Y,b.__webglTexture=J[Y].texture}return N}function He(b,x,N){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const J=ke(b,x),Y=x.source;t.bindTexture($,b.__webglTexture,i.TEXTURE0+N);const Se=n.get(Y);if(Y.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const ie=Ye.getPrimaries(Ye.workingColorSpace),de=x.colorSpace===hn?null:Ye.getPrimaries(x.colorSpace),Q=x.colorSpace===hn||ie===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let W=M(x.image,!1,r.maxTextureSize);W=$e(x,W);const ne=s.convert(x.format,x.colorSpace),_e=s.convert(x.type);let me=T(x.internalFormat,ne,_e,x.colorSpace,x.isVideoTexture);ge($,x);let se;const Ae=x.mipmaps,xe=x.isVideoTexture!==!0,Oe=Se.__version===void 0||J===!0,P=Y.dataReady,oe=E(x,W);if(x.isDepthTexture)me=_(x.format===hi,x.type),Oe&&(xe?t.texStorage2D(i.TEXTURE_2D,1,me,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,me,W.width,W.height,0,ne,_e,null));else if(x.isDataTexture)if(Ae.length>0){xe&&Oe&&t.texStorage2D(i.TEXTURE_2D,oe,me,Ae[0].width,Ae[0].height);for(let H=0,K=Ae.length;H<K;H++)se=Ae[H],xe?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,se.width,se.height,ne,_e,se.data):t.texImage2D(i.TEXTURE_2D,H,me,se.width,se.height,0,ne,_e,se.data);x.generateMipmaps=!1}else xe?(Oe&&t.texStorage2D(i.TEXTURE_2D,oe,me,W.width,W.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,ne,_e,W.data)):t.texImage2D(i.TEXTURE_2D,0,me,W.width,W.height,0,ne,_e,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){xe&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,me,Ae[0].width,Ae[0].height,W.depth);for(let H=0,K=Ae.length;H<K;H++)if(se=Ae[H],x.format!==zt)if(ne!==null)if(xe){if(P)if(x.layerUpdates.size>0){const le=yo(se.width,se.height,x.format,x.type);for(const fe of x.layerUpdates){const Ge=se.data.subarray(fe*le/se.data.BYTES_PER_ELEMENT,(fe+1)*le/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,fe,se.width,se.height,1,ne,Ge,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,se.width,se.height,W.depth,ne,se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,me,se.width,se.height,W.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,se.width,se.height,W.depth,ne,_e,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,me,se.width,se.height,W.depth,0,ne,_e,se.data)}else{xe&&Oe&&t.texStorage2D(i.TEXTURE_2D,oe,me,Ae[0].width,Ae[0].height);for(let H=0,K=Ae.length;H<K;H++)se=Ae[H],x.format!==zt?ne!==null?xe?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,se.width,se.height,ne,se.data):t.compressedTexImage2D(i.TEXTURE_2D,H,me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,se.width,se.height,ne,_e,se.data):t.texImage2D(i.TEXTURE_2D,H,me,se.width,se.height,0,ne,_e,se.data)}else if(x.isDataArrayTexture)if(xe){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,me,W.width,W.height,W.depth),P)if(x.layerUpdates.size>0){const H=yo(W.width,W.height,x.format,x.type);for(const K of x.layerUpdates){const le=W.data.subarray(K*H/W.data.BYTES_PER_ELEMENT,(K+1)*H/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,W.width,W.height,1,ne,_e,le)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,ne,_e,W.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,W.width,W.height,W.depth,0,ne,_e,W.data);else if(x.isData3DTexture)xe?(Oe&&t.texStorage3D(i.TEXTURE_3D,oe,me,W.width,W.height,W.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,ne,_e,W.data)):t.texImage3D(i.TEXTURE_3D,0,me,W.width,W.height,W.depth,0,ne,_e,W.data);else if(x.isFramebufferTexture){if(Oe)if(xe)t.texStorage2D(i.TEXTURE_2D,oe,me,W.width,W.height);else{let H=W.width,K=W.height;for(let le=0;le<oe;le++)t.texImage2D(i.TEXTURE_2D,le,me,H,K,0,ne,_e,null),H>>=1,K>>=1}}else if(Ae.length>0){if(xe&&Oe){const H=be(Ae[0]);t.texStorage2D(i.TEXTURE_2D,oe,me,H.width,H.height)}for(let H=0,K=Ae.length;H<K;H++)se=Ae[H],xe?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ne,_e,se):t.texImage2D(i.TEXTURE_2D,H,me,ne,_e,se);x.generateMipmaps=!1}else if(xe){if(Oe){const H=be(W);t.texStorage2D(i.TEXTURE_2D,oe,me,H.width,H.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,_e,W)}else t.texImage2D(i.TEXTURE_2D,0,me,ne,_e,W);c(x)&&h($),Se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,N){if(x.image.length!==6)return;const $=ke(b,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);const Y=n.get(J);if(J.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const Se=Ye.getPrimaries(Ye.workingColorSpace),ie=x.colorSpace===hn?null:Ye.getPrimaries(x.colorSpace),de=x.colorSpace===hn||Se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Q=x.isCompressedTexture||x.image[0].isCompressedTexture,W=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let K=0;K<6;K++)!Q&&!W?ne[K]=M(x.image[K],!0,r.maxCubemapSize):ne[K]=W?x.image[K].image:x.image[K],ne[K]=$e(x,ne[K]);const _e=ne[0],me=s.convert(x.format,x.colorSpace),se=s.convert(x.type),Ae=T(x.internalFormat,me,se,x.colorSpace),xe=x.isVideoTexture!==!0,Oe=Y.__version===void 0||$===!0,P=J.dataReady;let oe=E(x,_e);ge(i.TEXTURE_CUBE_MAP,x);let H;if(Q){xe&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ae,_e.width,_e.height);for(let K=0;K<6;K++){H=ne[K].mipmaps;for(let le=0;le<H.length;le++){const fe=H[le];x.format!==zt?me!==null?xe?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,fe.width,fe.height,me,se,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ae,fe.width,fe.height,0,me,se,fe.data)}}}else{if(H=x.mipmaps,xe&&Oe){H.length>0&&oe++;const K=be(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ae,K.width,K.height)}for(let K=0;K<6;K++)if(W){xe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ne[K].width,ne[K].height,me,se,ne[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ae,ne[K].width,ne[K].height,0,me,se,ne[K].data);for(let le=0;le<H.length;le++){const Ge=H[le].image[K].image;xe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Ge.width,Ge.height,me,se,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ae,Ge.width,Ge.height,0,me,se,Ge.data)}}else{xe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me,se,ne[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ae,me,se,ne[K]);for(let le=0;le<H.length;le++){const fe=H[le];xe?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,me,se,fe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ae,me,se,fe.image[K])}}}c(x)&&h(i.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ee(b,x,N,$,J,Y){const Se=s.convert(N.format,N.colorSpace),ie=s.convert(N.type),de=T(N.internalFormat,Se,ie,N.colorSpace);if(!n.get(x).__hasExternalTextures){const W=Math.max(1,x.width>>Y),ne=Math.max(1,x.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,de,W,ne,x.depth,0,Se,ie,null):t.texImage2D(J,Y,de,W,ne,0,Se,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,n.get(N).__webglTexture,0,Fe(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,n.get(N).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(b,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=_(x.stencilBuffer,J),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=Fe(x);ze(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Y,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,b)}else{const $=x.textures;for(let J=0;J<$.length;J++){const Y=$[J],Se=s.convert(Y.format,Y.colorSpace),ie=s.convert(Y.type),de=T(Y.internalFormat,Se,ie,Y.colorSpace),Q=Fe(x);N&&ze(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,de,x.width,x.height):ze(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,J=Fe(x);if(x.depthTexture.format===si)ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===hi)ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const x=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[$],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(b,x,N){const $=n.get(b);x!==void 0&&ee($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pe(b)}function Ne(b){const x=b.texture,N=n.get(b),$=n.get(x);b.addEventListener("dispose",w);const J=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let de=0;de<x.mipmaps.length;de++)N.__webglFramebuffer[ie][de]=i.createFramebuffer()}else N.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)N.__webglFramebuffer[ie]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ie=0,de=J.length;ie<de;ie++){const Q=n.get(J[ie]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ze(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){const de=J[ie];N.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);const Q=s.convert(de.format,de.colorSpace),W=s.convert(de.type),ne=T(de.internalFormat,Q,W,de.colorSpace,b.isXRRenderTarget===!0),_e=Fe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ne,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ee(N.__webglFramebuffer[ie][de],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else ee(N.__webglFramebuffer[ie],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);c(x)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,de=J.length;ie<de;ie++){const Q=J[ie],W=n.get(Q);t.bindTexture(i.TEXTURE_2D,W.__webglTexture),ge(i.TEXTURE_2D,Q),ee(N.__webglFramebuffer,b,Q,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),c(Q)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),ge(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ee(N.__webglFramebuffer[de],b,x,i.COLOR_ATTACHMENT0,ie,de);else ee(N.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ie,0);c(x)&&h(ie),t.unbindTexture()}b.depthBuffer&&Pe(b)}function Ve(b){const x=b.textures;for(let N=0,$=x.length;N<$;N++){const J=x[N];if(c(J)){const Y=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(J).__webglTexture;t.bindTexture(Y,Se),h(Y),t.unbindTexture()}}}const Be=[],R=[];function ht(b){if(b.samples>0){if(ze(b)===!1){const x=b.textures,N=b.width,$=b.height;let J=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(b),ie=x.length>1;if(ie)for(let de=0;de<x.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<x.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Q=n.get(x[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,J,i.NEAREST),l===!0&&(Be.length=0,R.length=0,Be.push(i.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Be.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<x.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Q=n.get(x[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Fe(b){return Math.min(r.maxSamples,b.samples)}function ze(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(b){const x=a.render.frame;d.get(b)!==x&&(d.set(b,x),b.update())}function $e(b,x){const N=b.colorSpace,$=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==vn&&N!==hn&&(Ye.getTransfer(N)===et?($!==zt||J!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=y,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=we,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ze}function Sp(i,e){function t(n,r=hn){let s;const a=Ye.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return i.BYTE;if(n===Wo)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Jt)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===qo)return i.ALPHA;if(n===Yo)return i.RGB;if(n===zt)return i.RGBA;if(n===$o)return i.LUMINANCE;if(n===jo)return i.LUMINANCE_ALPHA;if(n===si)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Zo)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===cr||n===ur||n===hr||n===dr)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bs||n===As||n===ws||n===Rs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ws)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cs||n===Ps||n===Ls)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cs||n===Ps)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ls)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Is||n===Ds||n===Us||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===ks||n===Hs||n===Gs||n===Vs||n===Ws||n===Xs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Is)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ds)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Us)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ns)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Os)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ks)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ws)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===qs||n===Ys)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fr)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ys)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===$s||n===js||n===Ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class yp extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ep={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const c=t.getJointPose(M,n),h=this._getHandJoint(u,M);c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=c.radius),h.visible=c!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=d.position.distanceTo(p.position),f=.02,v=.005;u.inputState.pinching&&m>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bp=`
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

}`;class Ap{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:Tp,fragmentShader:bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wp extends fi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,p=null,m=null,f=null,v=null;const M=new Ap,c=t.getContextAttributes();let h=null,T=null;const _=[],E=[],C=new Le;let w=null;const A=new wt;A.layers.enable(1),A.viewport=new Ze;const L=new wt;L.layers.enable(2),L.viewport=new Ze;const q=[A,L],g=new yp;g.layers.enable(1),g.layers.enable(2);let y=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new ls,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new ls,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new ls,_[X]=ee),ee.getHandSpace()};function z(X){const ee=E.indexOf(X.inputSource);if(ee===-1)return;const pe=_[ee];pe!==void 0&&(pe.update(X.inputSource,X.frame,u||a),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",j);for(let X=0;X<_.length;X++){const ee=E[X];ee!==null&&(E[X]=null,_[X].disconnect(ee))}y=null,O=null,M.reset(),e.setRenderTarget(h),f=null,m=null,p=null,r=null,T=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",j),c.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Nn(f.framebufferWidth,f.framebufferHeight,{format:zt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:c.stencil})}else{let ee=null,pe=null,ue=null;c.depth&&(ue=c.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=c.stencil?hi:si,pe=c.stencil?ui:Un);const Pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Pe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new Nn(m.textureWidth,m.textureHeight,{format:zt,type:en,depthTexture:new pl(m.textureWidth,m.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:c.stencil,colorSpace:e.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(X){for(let ee=0;ee<X.removed.length;ee++){const pe=X.removed[ee],ue=E.indexOf(pe);ue>=0&&(E[ue]=null,_[ue].disconnect(pe))}for(let ee=0;ee<X.added.length;ee++){const pe=X.added[ee];let ue=E.indexOf(pe);if(ue===-1){for(let we=0;we<_.length;we++)if(we>=E.length){E.push(pe),ue=we;break}else if(E[we]===null){E[we]=pe,ue=we;break}if(ue===-1)break}const Pe=_[ue];Pe&&Pe.connect(pe)}}const G=new D,Z=new D;function V(X,ee,pe){G.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const ue=G.distanceTo(Z),Pe=ee.projectionMatrix.elements,we=pe.projectionMatrix.elements,Ne=Pe[14]/(Pe[10]-1),Ve=Pe[14]/(Pe[10]+1),Be=(Pe[9]+1)/Pe[5],R=(Pe[9]-1)/Pe[5],ht=(Pe[8]-1)/Pe[0],Fe=(we[8]+1)/we[0],ze=Ne*ht,Te=Ne*Fe,$e=ue/(-ht+Fe),be=$e*-ht;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ($e),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const b=Ne+$e,x=Ve+$e,N=ze-be,$=Te+(ue-be),J=Be*Ve/x*b,Y=R*Ve/x*b;X.projectionMatrix.makePerspective(N,$,J,Y,b,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,pe=X.far;M.texture!==null&&(M.depthNear>0&&(ee=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),g.near=L.near=A.near=ee,g.far=L.far=A.far=pe,(y!==g.near||O!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),y=g.near,O=g.far);const ue=X.parent,Pe=g.cameras;ae(g,ue);for(let we=0;we<Pe.length;we++)ae(Pe[we],ue);Pe.length===2?V(g,A,L):g.projectionMatrix.copy(A.projectionMatrix),he(X,g,ue)};function he(X,ee,pe){pe===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Js*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function(X){l=X,m!==null&&(m.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(g)};let ge=null;function ke(X,ee){if(d=ee.getViewerPose(u||a),v=ee,d!==null){const pe=d.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ue=!1;pe.length!==g.cameras.length&&(g.cameras.length=0,ue=!0);for(let we=0;we<pe.length;we++){const Ne=pe[we];let Ve=null;if(f!==null)Ve=f.getViewport(Ne);else{const R=p.getViewSubImage(m,Ne);Ve=R.viewport,we===0&&(e.setRenderTargetTextures(T,R.colorTexture,m.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(T))}let Be=q[we];Be===void 0&&(Be=new wt,Be.layers.enable(we),Be.viewport=new Ze,q[we]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),we===0&&(g.matrix.copy(Be.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ue===!0&&g.cameras.push(Be)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const we=p.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&M.init(e,we,r.renderState)}}for(let pe=0;pe<_.length;pe++){const ue=E[pe],Pe=_[pe];ue!==null&&Pe!==void 0&&Pe.update(ue,ee,u||a)}ge&&ge(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const He=new dl;He.setAnimationLoop(ke),this.setAnimationLoop=function(X){ge=X},this.dispose=function(){}}}const bn=new Wt,Rp=new tt;function Cp(i,e){function t(c,h){c.matrixAutoUpdate===!0&&c.updateMatrix(),h.value.copy(c.matrix)}function n(c,h){h.color.getRGB(c.fogColor.value,cl(i)),h.isFog?(c.fogNear.value=h.near,c.fogFar.value=h.far):h.isFogExp2&&(c.fogDensity.value=h.density)}function r(c,h,T,_,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(c,h):h.isMeshToonMaterial?(s(c,h),p(c,h)):h.isMeshPhongMaterial?(s(c,h),d(c,h)):h.isMeshStandardMaterial?(s(c,h),m(c,h),h.isMeshPhysicalMaterial&&f(c,h,E)):h.isMeshMatcapMaterial?(s(c,h),v(c,h)):h.isMeshDepthMaterial?s(c,h):h.isMeshDistanceMaterial?(s(c,h),M(c,h)):h.isMeshNormalMaterial?s(c,h):h.isLineBasicMaterial?(a(c,h),h.isLineDashedMaterial&&o(c,h)):h.isPointsMaterial?l(c,h,T,_):h.isSpriteMaterial?u(c,h):h.isShadowMaterial?(c.color.value.copy(h.color),c.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(c,h){c.opacity.value=h.opacity,h.color&&c.diffuse.value.copy(h.color),h.emissive&&c.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.bumpMap&&(c.bumpMap.value=h.bumpMap,t(h.bumpMap,c.bumpMapTransform),c.bumpScale.value=h.bumpScale,h.side===St&&(c.bumpScale.value*=-1)),h.normalMap&&(c.normalMap.value=h.normalMap,t(h.normalMap,c.normalMapTransform),c.normalScale.value.copy(h.normalScale),h.side===St&&c.normalScale.value.negate()),h.displacementMap&&(c.displacementMap.value=h.displacementMap,t(h.displacementMap,c.displacementMapTransform),c.displacementScale.value=h.displacementScale,c.displacementBias.value=h.displacementBias),h.emissiveMap&&(c.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,c.emissiveMapTransform)),h.specularMap&&(c.specularMap.value=h.specularMap,t(h.specularMap,c.specularMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest);const T=e.get(h),_=T.envMap,E=T.envMapRotation;_&&(c.envMap.value=_,bn.copy(E),bn.x*=-1,bn.y*=-1,bn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),c.envMapRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(bn)),c.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=h.reflectivity,c.ior.value=h.ior,c.refractionRatio.value=h.refractionRatio),h.lightMap&&(c.lightMap.value=h.lightMap,c.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,c.lightMapTransform)),h.aoMap&&(c.aoMap.value=h.aoMap,c.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,c.aoMapTransform))}function a(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}function o(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}function l(c,h,T,_){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*T,c.scale.value=_*.5,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}function u(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}function d(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}function p(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}function m(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}function f(c,h,T){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===St&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=T.texture,c.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}function v(c,h){h.matcap&&(c.matcap.value=h.matcap)}function M(c,h){const T=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(T.matrixWorld),c.nearDistance.value=T.shadow.camera.near,c.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Pp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,_){const E=_.program;n.uniformBlockBinding(T,E)}function u(T,_){let E=r[T.id];E===void 0&&(v(T),E=d(T),r[T.id]=E,T.addEventListener("dispose",c));const C=_.program;n.updateUBOMapping(T,C);const w=e.render.frame;s[T.id]!==w&&(m(T),s[T.id]=w)}function d(T){const _=p();T.__bindingPointIndex=_;const E=i.createBuffer(),C=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function p(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const _=r[T.id],E=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,A=E.length;w<A;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let q=0,g=L.length;q<g;q++){const y=L[q];if(f(y,w,q,C)===!0){const O=y.__offset,z=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let j=0;j<z.length;j++){const G=z[j],Z=M(G);typeof G=="number"||typeof G=="boolean"?(y.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+k,y.__data)):G.isMatrix3?(y.__data[0]=G.elements[0],y.__data[1]=G.elements[1],y.__data[2]=G.elements[2],y.__data[3]=0,y.__data[4]=G.elements[3],y.__data[5]=G.elements[4],y.__data[6]=G.elements[5],y.__data[7]=0,y.__data[8]=G.elements[6],y.__data[9]=G.elements[7],y.__data[10]=G.elements[8],y.__data[11]=0):(G.toArray(y.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,_,E,C){const w=T.value,A=_+"_"+E;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const L=C[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function v(T){const _=T.uniforms;let E=0;const C=16;for(let A=0,L=_.length;A<L;A++){const q=Array.isArray(_[A])?_[A]:[_[A]];for(let g=0,y=q.length;g<y;g++){const O=q[g],z=Array.isArray(O.value)?O.value:[O.value];for(let k=0,j=z.length;k<j;k++){const G=z[k],Z=M(G),V=E%C,ae=V%Z.boundary,he=V+ae;E+=ae,he!==0&&C-he<Z.storage&&(E+=C-he),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Z.storage}}}const w=E%C;return w>0&&(E+=C-w),T.__size=E,T.__cache={},this}function M(T){const _={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(_.boundary=4,_.storage=4):T.isVector2?(_.boundary=8,_.storage=8):T.isVector3||T.isColor?(_.boundary=16,_.storage=12):T.isVector4?(_.boundary=16,_.storage=16):T.isMatrix3?(_.boundary=48,_.storage=48):T.isMatrix4?(_.boundary=64,_.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),_}function c(T){const _=T.target;_.removeEventListener("dispose",c);const E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Lp{constructor(e={}){const{canvas:t=_c(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const f=new Uint32Array(4),v=new Int32Array(4);let M=null,c=null;const h=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=pn,this.toneMappingExposure=1;const _=this;let E=!1,C=0,w=0,A=null,L=-1,q=null;const g=new Ze,y=new Ze;let O=null;const z=new Ue(0);let k=0,j=t.width,G=t.height,Z=1,V=null,ae=null;const he=new Ze(0,0,j,G),ge=new Ze(0,0,j,G);let ke=!1;const He=new ha;let X=!1,ee=!1;const pe=new tt,ue=new tt,Pe=new D,we=new Ze,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Be(){return A===null?Z:1}let R=n;function ht(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",fe,!1),R===null){const I="webgl2";if(R=ht(I,S),R===null)throw ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,ze,Te,$e,be,b,x,N,$,J,Y,Se,ie,de,Q,W,ne,_e,me,se,Ae,xe,Oe,P;function oe(){Fe=new Nd(R),Fe.init(),xe=new Sp(R,Fe),ze=new Cd(R,Fe,e,xe),Te=new vp(R),ze.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),$e=new Bd(R),be=new ip,b=new Mp(R,Fe,Te,be,ze,xe,$e),x=new Ld(_),N=new Ud(_),$=new Xc(R),Oe=new wd(R,$),J=new Fd(R,$,$e,Oe),Y=new kd(R,J,$,$e),me=new zd(R,ze,b),W=new Pd(be),Se=new np(_,x,N,Fe,ze,Oe,W),ie=new Cp(_,be),de=new sp,Q=new hp(Fe),_e=new Ad(_,x,N,Te,Y,m,l),ne=new gp(_,Y,ze),P=new Pp(R,$e,ze,Te),se=new Rd(R,Fe,$e),Ae=new Od(R,Fe,$e),$e.programs=Se.programs,_.capabilities=ze,_.extensions=Fe,_.properties=be,_.renderLists=de,_.shadowMap=ne,_.state=Te,_.info=$e}oe();const H=new wp(_,R);this.xr=H,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(j,G,!1))},this.getSize=function(S){return S.set(j,G)},this.setSize=function(S,I,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,G=I,t.width=Math.floor(S*Z),t.height=Math.floor(I*Z),F===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(j*Z,G*Z).floor()},this.setDrawingBufferSize=function(S,I,F){j=S,G=I,Z=F,t.width=Math.floor(S*F),t.height=Math.floor(I*F),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(g)},this.getViewport=function(S){return S.copy(he)},this.setViewport=function(S,I,F,B){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,I,F,B),Te.viewport(g.copy(he).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(ge)},this.setScissor=function(S,I,F,B){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,I,F,B),Te.scissor(y.copy(ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(S){Te.setScissorTest(ke=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(S=!0,I=!0,F=!0){let B=0;if(S){let U=!1;if(A!==null){const te=A.texture.format;U=te===ca||te===la||te===oa}if(U){const te=A.texture.type,ce=te===en||te===Un||te===Pi||te===ui||te===sa||te===aa,ve=_e.getClearColor(),Me=_e.getClearAlpha(),Re=ve.r,Ce=ve.g,ye=ve.b;ce?(f[0]=Re,f[1]=Ce,f[2]=ye,f[3]=Me,R.clearBufferuiv(R.COLOR,0,f)):(v[0]=Re,v[1]=Ce,v[2]=ye,v[3]=Me,R.clearBufferiv(R.COLOR,0,v))}else B|=R.COLOR_BUFFER_BIT}I&&(B|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),de.dispose(),Q.dispose(),be.dispose(),x.dispose(),N.dispose(),Y.dispose(),Oe.dispose(),P.dispose(),Se.dispose(),H.dispose(),H.removeEventListener("sessionstart",ya),H.removeEventListener("sessionend",Ea),xn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=$e.autoReset,I=ne.enabled,F=ne.autoUpdate,B=ne.needsUpdate,U=ne.type;oe(),$e.autoReset=S,ne.enabled=I,ne.autoUpdate=F,ne.needsUpdate=B,ne.type=U}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ge(S){const I=S.target;I.removeEventListener("dispose",Ge),rt(I)}function rt(S){vt(S),be.remove(S)}function vt(S){const I=be.get(S).programs;I!==void 0&&(I.forEach(function(F){Se.releaseProgram(F)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,F,B,U,te){I===null&&(I=Ne);const ce=U.isMesh&&U.matrixWorld.determinant()<0,ve=Al(S,I,F,B,U);Te.setMaterial(B,ce);let Me=F.index,Re=1;if(B.wireframe===!0){if(Me=J.getWireframeAttribute(F),Me===void 0)return;Re=2}const Ce=F.drawRange,ye=F.attributes.position;let je=Ce.start*Re,Qe=(Ce.start+Ce.count)*Re;te!==null&&(je=Math.max(je,te.start*Re),Qe=Math.min(Qe,(te.start+te.count)*Re)),Me!==null?(je=Math.max(je,0),Qe=Math.min(Qe,Me.count)):ye!=null&&(je=Math.max(je,0),Qe=Math.min(Qe,ye.count));const nt=Qe-je;if(nt<0||nt===1/0)return;Oe.setup(U,B,ve,F,Me);let Et,Xe=se;if(Me!==null&&(Et=$.get(Me),Xe=Ae,Xe.setIndex(Et)),U.isMesh)B.wireframe===!0?(Te.setLineWidth(B.wireframeLinewidth*Be()),Xe.setMode(R.LINES)):Xe.setMode(R.TRIANGLES);else if(U.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),Te.setLineWidth(Ee*Be()),U.isLineSegments?Xe.setMode(R.LINES):U.isLineLoop?Xe.setMode(R.LINE_LOOP):Xe.setMode(R.LINE_STRIP)}else U.isPoints?Xe.setMode(R.POINTS):U.isSprite&&Xe.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,dt=U._multiDrawCounts,qe=U._multiDrawCount,Dt=Me?$.get(Me).bytesPerElement:1,On=be.get(B).currentProgram.getUniforms();for(let Tt=0;Tt<qe;Tt++)On.setValue(R,"_gl_DrawID",Tt),Xe.render(Ee[Tt]/Dt,dt[Tt])}else if(U.isInstancedMesh)Xe.renderInstances(je,nt,U.count);else if(F.isInstancedBufferGeometry){const Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,dt=Math.min(F.instanceCount,Ee);Xe.renderInstances(je,nt,dt)}else Xe.render(je,nt)};function We(S,I,F){S.transparent===!0&&S.side===Gt&&S.forceSinglePass===!1?(S.side=St,S.needsUpdate=!0,Fi(S,I,F),S.side=_n,S.needsUpdate=!0,Fi(S,I,F),S.side=Gt):Fi(S,I,F)}this.compile=function(S,I,F=null){F===null&&(F=S),c=Q.get(F),c.init(I),T.push(c),F.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(c.pushLight(U),U.castShadow&&c.pushShadow(U))}),S!==F&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(c.pushLight(U),U.castShadow&&c.pushShadow(U))}),c.setupLights();const B=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const ve=te[ce];We(ve,F,U),B.add(ve)}else We(te,F,U),B.add(te)}),T.pop(),c=null,B},this.compileAsync=function(S,I,F=null){const B=this.compile(S,I,F);return new Promise(U=>{function te(){if(B.forEach(function(ce){be.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){U(S);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let xt=null;function Xt(S){xt&&xt(S)}function ya(){xn.stop()}function Ea(){xn.start()}const xn=new dl;xn.setAnimationLoop(Xt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(S){xt=S,H.setAnimationLoop(S),S===null?xn.stop():xn.start()},H.addEventListener("sessionstart",ya),H.addEventListener("sessionend",Ea),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,I,A),c=Q.get(S,T.length),c.init(I),T.push(c),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),He.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,X=W.init(this.clippingPlanes,ee),M=de.get(S,h.length),M.init(),h.push(M),H.enabled===!0&&H.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&Rr(te,I,-1/0,_.sortObjects)}Rr(S,I,0,_.sortObjects),M.finish(),_.sortObjects===!0&&M.sort(V,ae),Ve=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ve&&_e.addToRenderList(M,S),this.info.render.frame++,X===!0&&W.beginShadows();const F=c.state.shadowsArray;ne.render(F,S,I),X===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=M.opaque,U=M.transmissive;if(c.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let ce=0,ve=te.length;ce<ve;ce++){const Me=te[ce];ba(B,U,S,Me)}Ve&&_e.render(S);for(let ce=0,ve=te.length;ce<ve;ce++){const Me=te[ce];Ta(M,S,Me,Me.viewport)}}else U.length>0&&ba(B,U,S,I),Ve&&_e.render(S),Ta(M,S,I);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(_,S,I),Oe.resetDefaultState(),L=-1,q=null,T.pop(),T.length>0?(c=T[T.length-1],X===!0&&W.setGlobalState(_.clippingPlanes,c.state.camera)):c=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function Rr(S,I,F,B){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)c.pushLight(S),S.castShadow&&c.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||He.intersectsSprite(S)){B&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ue);const ce=Y.update(S),ve=S.material;ve.visible&&M.push(S,ce,ve,F,we.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||He.intersectsObject(S))){const ce=Y.update(S),ve=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),we.copy(ce.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(ue)),Array.isArray(ve)){const Me=ce.groups;for(let Re=0,Ce=Me.length;Re<Ce;Re++){const ye=Me[Re],je=ve[ye.materialIndex];je&&je.visible&&M.push(S,ce,je,F,we.z,ye)}}else ve.visible&&M.push(S,ce,ve,F,we.z,null)}}const te=S.children;for(let ce=0,ve=te.length;ce<ve;ce++)Rr(te[ce],I,F,B)}function Ta(S,I,F,B){const U=S.opaque,te=S.transmissive,ce=S.transparent;c.setupLightsView(F),X===!0&&W.setGlobalState(_.clippingPlanes,F),B&&Te.viewport(g.copy(B)),U.length>0&&Ni(U,I,F),te.length>0&&Ni(te,I,F),ce.length>0&&Ni(ce,I,F),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ba(S,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[B.id]===void 0&&(c.state.transmissionRenderTarget[B.id]=new Nn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ii:en,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=c.state.transmissionRenderTarget[B.id],ce=B.viewport||g;te.setSize(ce.z,ce.w);const ve=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(z),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&_e.render(F);const Me=_.toneMapping;_.toneMapping=pn;const Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),c.setupLightsView(B),X===!0&&W.setGlobalState(_.clippingPlanes,B),Ni(S,F,B),b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ye=0,je=I.length;ye<je;ye++){const Qe=I[ye],nt=Qe.object,Et=Qe.geometry,Xe=Qe.material,Ee=Qe.group;if(Xe.side===Gt&&nt.layers.test(B.layers)){const dt=Xe.side;Xe.side=St,Xe.needsUpdate=!0,Aa(nt,F,B,Et,Xe,Ee),Xe.side=dt,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(b.updateMultisampleRenderTarget(te),b.updateRenderTargetMipmap(te))}_.setRenderTarget(ve),_.setClearColor(z,k),Re!==void 0&&(B.viewport=Re),_.toneMapping=Me}function Ni(S,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=S.length;U<te;U++){const ce=S[U],ve=ce.object,Me=ce.geometry,Re=B===null?ce.material:B,Ce=ce.group;ve.layers.test(F.layers)&&Aa(ve,I,F,Me,Re,Ce)}}function Aa(S,I,F,B,U,te){S.onBeforeRender(_,I,F,B,U,te),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(_,I,F,B,S,te),U.transparent===!0&&U.side===Gt&&U.forceSinglePass===!1?(U.side=St,U.needsUpdate=!0,_.renderBufferDirect(F,I,B,U,S,te),U.side=_n,U.needsUpdate=!0,_.renderBufferDirect(F,I,B,U,S,te),U.side=Gt):_.renderBufferDirect(F,I,B,U,S,te),S.onAfterRender(_,I,F,B,U,te)}function Fi(S,I,F){I.isScene!==!0&&(I=Ne);const B=be.get(S),U=c.state.lights,te=c.state.shadowsArray,ce=U.state.version,ve=Se.getParameters(S,U.state,te,I,F),Me=Se.getProgramCacheKey(ve);let Re=B.programs;B.environment=S.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",Ge),Re=new Map,B.programs=Re);let Ce=Re.get(Me);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===ce)return Ra(S,ve),Ce}else ve.uniforms=Se.getUniforms(S),S.onBeforeCompile(ve,_),Ce=Se.acquireProgram(ve,Me),Re.set(Me,Ce),B.uniforms=ve.uniforms;const ye=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ye.clippingPlanes=W.uniform),Ra(S,ve),B.needsLights=Rl(S),B.lightsStateVersion=ce,B.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function wa(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Ra(S,I){const F=be.get(S);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Al(S,I,F,B,U){I.isScene!==!0&&(I=Ne),b.resetTextureUnits();const te=I.fog,ce=B.isMeshStandardMaterial?I.environment:null,ve=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vn,Me=(B.isMeshStandardMaterial?N:x).get(B.envMap||ce),Re=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!F.morphAttributes.position,je=!!F.morphAttributes.normal,Qe=!!F.morphAttributes.color;let nt=pn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nt=_.toneMapping);const Et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xe=Et!==void 0?Et.length:0,Ee=be.get(B),dt=c.state.lights;if(X===!0&&(ee===!0||S!==q)){const Rt=S===q&&B.id===L;W.setState(B,S,Rt)}let qe=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==dt.state.version||Ee.outputColorSpace!==ve||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==Me||B.fog===!0&&Ee.fog!==te||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==W.numPlanes||Ee.numIntersection!==W.numIntersection)||Ee.vertexAlphas!==Re||Ee.vertexTangents!==Ce||Ee.morphTargets!==ye||Ee.morphNormals!==je||Ee.morphColors!==Qe||Ee.toneMapping!==nt||Ee.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,Ee.__version=B.version);let Dt=Ee.currentProgram;qe===!0&&(Dt=Fi(B,I,U));let On=!1,Tt=!1,Cr=!1;const it=Dt.getUniforms(),nn=Ee.uniforms;if(Te.useProgram(Dt.program)&&(On=!0,Tt=!0,Cr=!0),B.id!==L&&(L=B.id,Tt=!0),On||q!==S){ze.reverseDepthBuffer?(pe.copy(S.projectionMatrix),xc(pe),Mc(pe),it.setValue(R,"projectionMatrix",pe)):it.setValue(R,"projectionMatrix",S.projectionMatrix),it.setValue(R,"viewMatrix",S.matrixWorldInverse);const Rt=it.map.cameraPosition;Rt!==void 0&&Rt.setValue(R,Pe.setFromMatrixPosition(S.matrixWorld)),ze.logarithmicDepthBuffer&&it.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,Tt=!0,Cr=!0)}if(U.isSkinnedMesh){it.setOptional(R,U,"bindMatrix"),it.setOptional(R,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),it.setValue(R,"boneTexture",Rt.boneTexture,b))}U.isBatchedMesh&&(it.setOptional(R,U,"batchingTexture"),it.setValue(R,"batchingTexture",U._matricesTexture,b),it.setOptional(R,U,"batchingIdTexture"),it.setValue(R,"batchingIdTexture",U._indirectTexture,b),it.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&it.setValue(R,"batchingColorTexture",U._colorsTexture,b));const Pr=F.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&me.update(U,F,Dt),(Tt||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,it.setValue(R,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(nn.envMap.value=Me,nn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(nn.envMapIntensity.value=I.environmentIntensity),Tt&&(it.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&wl(nn,Cr),te&&B.fog===!0&&ie.refreshFogUniforms(nn,te),ie.refreshMaterialUniforms(nn,B,Z,G,c.state.transmissionRenderTarget[S.id]),mr.upload(R,wa(Ee),nn,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mr.upload(R,wa(Ee),nn,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(R,"center",U.center),it.setValue(R,"modelViewMatrix",U.modelViewMatrix),it.setValue(R,"normalMatrix",U.normalMatrix),it.setValue(R,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Rt=B.uniformsGroups;for(let Lr=0,Cl=Rt.length;Lr<Cl;Lr++){const Ca=Rt[Lr];P.update(Ca,Dt),P.bind(Ca,Dt)}}return Dt}function wl(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Rl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,I,F){be.get(S.texture).__webglTexture=I,be.get(S.depthTexture).__webglTexture=F;const B=be.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const F=be.get(S);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,F=0){A=S,C=I,w=F;let B=!0,U=null,te=!1,ce=!1;if(S){const Me=be.get(S);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(Me.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(Me.__hasExternalTextures)b.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ye=S.depthTexture;if(Me.__boundDepthTexture!==ye){if(ye!==null&&be.has(ye)&&(S.width!==ye.image.width||S.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Re=S.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ce=!0);const Ce=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?U=Ce[I][F]:U=Ce[I],te=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?U=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[F]:U=Ce,g.copy(S.viewport),y.copy(S.scissor),O=S.scissorTest}else g.copy(he).multiplyScalar(Z).floor(),y.copy(ge).multiplyScalar(Z).floor(),O=ke;if(Te.bindFramebuffer(R.FRAMEBUFFER,U)&&B&&Te.drawBuffers(S,U),Te.viewport(g),Te.scissor(y),Te.setScissorTest(O),te){const Me=be.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,F)}else if(ce){const Me=be.get(S.texture),Re=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.__webglTexture,F||0,Re)}L=-1},this.readRenderTargetPixels=function(S,I,F,B,U,te,ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){Te.bindFramebuffer(R.FRAMEBUFFER,ve);try{const Me=S.texture,Re=Me.format,Ce=Me.type;if(!ze.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-B&&F>=0&&F<=S.height-U&&R.readPixels(I,F,B,U,xe.convert(Re),xe.convert(Ce),te)}finally{const Me=A!==null?be.get(A).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(S,I,F,B,U,te,ce){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){const Me=S.texture,Re=Me.format,Ce=Me.type;if(!ze.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-B&&F>=0&&F<=S.height-U){Te.bindFramebuffer(R.FRAMEBUFFER,ve);const ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),R.readPixels(I,F,B,U,xe.convert(Re),xe.convert(Ce),0);const je=A!==null?be.get(A).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,je);const Qe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vc(R,Qe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(ye),R.deleteSync(Qe),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,F=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-F),U=Math.floor(S.image.width*B),te=Math.floor(S.image.height*B),ce=I!==null?I.x:0,ve=I!==null?I.y:0;b.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,ce,ve,U,te),Te.unbindTexture()},this.copyTextureToTexture=function(S,I,F=null,B=null,U=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,F=null);let te,ce,ve,Me,Re,Ce;F!==null?(te=F.max.x-F.min.x,ce=F.max.y-F.min.y,ve=F.min.x,Me=F.min.y):(te=S.image.width,ce=S.image.height,ve=0,Me=0),B!==null?(Re=B.x,Ce=B.y):(Re=0,Ce=0);const ye=xe.convert(I.format),je=xe.convert(I.type);b.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Et=R.getParameter(R.UNPACK_SKIP_PIXELS),Xe=R.getParameter(R.UNPACK_SKIP_ROWS),Ee=R.getParameter(R.UNPACK_SKIP_IMAGES),dt=S.isCompressedTexture?S.mipmaps[U]:S.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Me),S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Re,Ce,te,ce,ye,je,dt.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Re,Ce,dt.width,dt.height,ye,dt.data):R.texSubImage2D(R.TEXTURE_2D,U,Re,Ce,te,ce,ye,je,dt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Et),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ee),U===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(S,I,F=null,B=null,U=0){S.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0);let te,ce,ve,Me,Re,Ce,ye,je,Qe;const nt=S.isCompressedTexture?S.mipmaps[U]:S.image;F!==null?(te=F.max.x-F.min.x,ce=F.max.y-F.min.y,ve=F.max.z-F.min.z,Me=F.min.x,Re=F.min.y,Ce=F.min.z):(te=nt.width,ce=nt.height,ve=nt.depth,Me=0,Re=0,Ce=0),B!==null?(ye=B.x,je=B.y,Qe=B.z):(ye=0,je=0,Qe=0);const Et=xe.convert(I.format),Xe=xe.convert(I.type);let Ee;if(I.isData3DTexture)b.setTexture3D(I,0),Ee=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b.setTexture2DArray(I,0),Ee=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const dt=R.getParameter(R.UNPACK_ROW_LENGTH),qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Dt=R.getParameter(R.UNPACK_SKIP_PIXELS),On=R.getParameter(R.UNPACK_SKIP_ROWS),Tt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Me),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce),S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Ee,U,ye,je,Qe,te,ce,ve,Et,Xe,nt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ee,U,ye,je,Qe,te,ce,ve,Et,nt.data):R.texSubImage3D(Ee,U,ye,je,Qe,te,ce,ve,Et,Xe,nt),R.pixelStorei(R.UNPACK_ROW_LENGTH,dt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Dt),R.pixelStorei(R.UNPACK_SKIP_ROWS,On),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tt),U===0&&I.generateMipmaps&&R.generateMipmap(Ee),Te.unbindTexture()},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),Te.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Te.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ua?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Tr?"display-p3":"srgb"}}class fa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ip extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zs,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mt=new D;class Sr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xl extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Jn;const Mi=new D,Qn=new D,ei=new D,ti=new Le,Si=new Le,Ml=new tt,rr=new D,yi=new D,sr=new D,Eo=new Le,cs=new Le,To=new Le;class Up extends ut{constructor(e=new xl){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dp(t,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new Sr(n,3,0,!1)),Jn.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=Jn,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qn.setFromMatrixScale(this.matrixWorld),Ml.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qn.multiplyScalar(-ei.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;ar(rr.set(-.5,-.5,0),ei,a,Qn,r,s),ar(yi.set(.5,-.5,0),ei,a,Qn,r,s),ar(sr.set(.5,.5,0),ei,a,Qn,r,s),Eo.set(0,0),cs.set(1,0),To.set(1,1);let o=e.ray.intersectTriangle(rr,yi,sr,!1,Mi);if(o===null&&(ar(yi.set(-.5,.5,0),ei,a,Qn,r,s),cs.set(0,1),o=e.ray.intersectTriangle(rr,sr,yi,!1,Mi),o===null))return;const l=e.ray.origin.distanceTo(Mi);l<e.near||l>e.far||t.push({distance:l,point:Mi.clone(),uv:Pt.getInterpolation(Mi,rr,yi,sr,Eo,cs,To,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ar(i,e,t,n,r,s){ti.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Si.x=s*ti.x-r*ti.y,Si.y=r*ti.x+s*ti.y):Si.copy(ti),i.copy(e),i.x+=Si.x,i.y+=Si.y,i.applyMatrix4(Ml)}class Sl extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bo=new tt,ea=new rl,or=new br,lr=new D;class Np extends ut{constructor(e=new yt,t=new Sl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),or.radius+=s,e.ray.intersectsSphere(or)===!1)return;bo.copy(r).invert(),ea.copy(e.ray).applyMatrix4(bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=m,M=f;v<M;v++){const c=u.getX(v);lr.fromBufferAttribute(p,c),Ao(lr,c,l,r,e,t,this)}}else{const m=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let v=m,M=f;v<M;v++)lr.fromBufferAttribute(p,v),Ao(lr,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ao(i,e,t,n,r,s,a){const o=ea.distanceSqToPoint(i);if(o<t){const l=new D;ea.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yl extends _t{constructor(e,t,n,r,s,a,o,l,u){super(e,t,n,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pa extends yt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],u=new D,d=new Le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const f=n+p/t*r;u.x=e*Math.cos(f),u.y=e*Math.sin(f),a.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(a[m]/e+1)/2,d.y=(a[m+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class In extends yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],m=[],f=[];let v=0;const M=[],c=n/2;let h=0;T(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(f,2));function T(){const E=new D,C=new D;let w=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const q=[],g=L/s,y=g*(t-e)+e;for(let O=0;O<=r;O++){const z=O/r,k=z*l+o,j=Math.sin(k),G=Math.cos(k);C.x=y*j,C.y=-g*n+c,C.z=y*G,p.push(C.x,C.y,C.z),E.set(j,A,G).normalize(),m.push(E.x,E.y,E.z),f.push(z,1-g),q.push(v++)}M.push(q)}for(let L=0;L<r;L++)for(let q=0;q<s;q++){const g=M[q][L],y=M[q+1][L],O=M[q+1][L+1],z=M[q][L+1];e>0&&(d.push(g,y,z),w+=3),t>0&&(d.push(y,O,z),w+=3)}u.addGroup(h,w,0),h+=w}function _(E){const C=v,w=new Le,A=new D;let L=0;const q=E===!0?e:t,g=E===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,c*g,0),m.push(0,g,0),f.push(.5,.5),v++;const y=v;for(let O=0;O<=r;O++){const k=O/r*l+o,j=Math.cos(k),G=Math.sin(k);A.x=q*G,A.y=c*g,A.z=q*j,p.push(A.x,A.y,A.z),m.push(0,g,0),w.x=j*.5+.5,w.y=G*.5*g+.5,f.push(w.x,w.y),v++}for(let O=0;O<r;O++){const z=C+O,k=y+O;E===!0?d.push(k,k+1,z):d.push(k+1,k,z),L+=3}u.addGroup(h,L,E===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends In{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ma(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),u(n),d(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const _=new D,E=new D,C=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],E),f(t[w+2],C),l(_,E,C,T)}function l(T,_,E,C){const w=C+1,A=[];for(let L=0;L<=w;L++){A[L]=[];const q=T.clone().lerp(E,L/w),g=_.clone().lerp(E,L/w),y=w-L;for(let O=0;O<=y;O++)O===0&&L===w?A[L][O]=q:A[L][O]=q.clone().lerp(g,O/y)}for(let L=0;L<w;L++)for(let q=0;q<2*(w-L)-1;q++){const g=Math.floor(q/2);q%2===0?(m(A[L][g+1]),m(A[L+1][g]),m(A[L][g])):(m(A[L][g+1]),m(A[L+1][g+1]),m(A[L+1][g]))}}function u(T){const _=new D;for(let E=0;E<s.length;E+=3)_.x=s[E+0],_.y=s[E+1],_.z=s[E+2],_.normalize().multiplyScalar(T),s[E+0]=_.x,s[E+1]=_.y,s[E+2]=_.z}function d(){const T=new D;for(let _=0;_<s.length;_+=3){T.x=s[_+0],T.y=s[_+1],T.z=s[_+2];const E=c(T)/2/Math.PI+.5,C=h(T)/Math.PI+.5;a.push(E,1-C)}v(),p()}function p(){for(let T=0;T<a.length;T+=6){const _=a[T+0],E=a[T+2],C=a[T+4],w=Math.max(_,E,C),A=Math.min(_,E,C);w>.9&&A<.1&&(_<.2&&(a[T+0]+=1),E<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function m(T){s.push(T.x,T.y,T.z)}function f(T,_){const E=T*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function v(){const T=new D,_=new D,E=new D,C=new D,w=new Le,A=new Le,L=new Le;for(let q=0,g=0;q<s.length;q+=9,g+=6){T.set(s[q+0],s[q+1],s[q+2]),_.set(s[q+3],s[q+4],s[q+5]),E.set(s[q+6],s[q+7],s[q+8]),w.set(a[g+0],a[g+1]),A.set(a[g+2],a[g+3]),L.set(a[g+4],a[g+5]),C.copy(T).add(_).add(E).divideScalar(3);const y=c(C);M(w,g+0,T,y),M(A,g+2,_,y),M(L,g+4,E,y)}}function M(T,_,E,C){C<0&&T.x===1&&(a[_]=T.x-1),E.x===0&&E.z===0&&(a[_]=C/2/Math.PI+.5)}function c(T){return Math.atan2(T.z,-T.x)}function h(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.vertices,e.indices,e.radius,e.details)}}class yr extends wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yr(e.radius,e.detail)}}class ga extends wr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ga(e.radius,e.detail)}}class _a extends yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const d=[],p=new D,m=new D,f=[],v=[],M=[],c=[];for(let h=0;h<=n;h++){const T=[],_=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const w=C/t;p.x=-e*Math.cos(r+w*s)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(r+w*s)*Math.sin(a+_*o),v.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),c.push(w+E,1-_),T.push(u++)}d.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){const _=d[h][T+1],E=d[h][T],C=d[h+1][T],w=d[h+1][T+1];(h!==0||a>0)&&f.push(_,E,w),(h!==n-1||l<Math.PI)&&f.push(E,C,w)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(M,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class un extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class va extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const us=new tt,wo=new D,Ro=new D;class El{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(wo),Ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ro),t.updateMatrixWorld(),us.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(us),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Co=new tt,Ei=new D,hs=new D;class Fp extends El{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),hs.copy(n.position),hs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hs),n.updateMatrixWorld(),r.makeTranslation(-Ei.x,-Ei.y,-Ei.z),Co.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co)}}class Op extends va{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Fp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bp extends El{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kp extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Po(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Po();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Po(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const Lo=new Ue(16752714),Gp=new Ue(7314628),Io=new Ue(854793),Vp=new Ue(592655);function ta(){const i=document.getElementById("hero-canvas"),e=document.getElementById("hero"),t=new Lp({canvas:i,antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.toneMapping=Ho,t.toneMappingExposure=1.2;const n=new Ip;n.background=Io.clone(),n.fog=new fa(854793,.048);const r=new wt(38,1,.1,100);r.position.set(0,2.6,9.5),r.lookAt(0,1.6,0);const s=new kp(3813414,.9);n.add(s);const a=new Op(Lo.clone(),60,30,2);a.position.set(0,4.6,.4),n.add(a);const o=new zp(4477034,.5);o.position.set(-6,8,-8),n.add(o);const l=new un({color:5854027,roughness:.95,metalness:.02,flatShading:!0}),u=new un({color:3486252,roughness:1,flatShading:!0}),d=new un({color:12173255,roughness:.3,metalness:.8}),p=new un({color:7035454,roughness:.5,metalness:.7}),m=new un({color:3811872,roughness:.9}),f=new dn;n.add(f);const v=new Je(new pa(22,48),new un({color:1710101,roughness:1}));v.rotation.x=-Math.PI/2,f.add(v);const M=document.createElement("canvas");M.width=M.height=512;const c=M.getContext("2d");c.strokeStyle="#8fd8e8",c.lineWidth=2,c.translate(256,256);for(let Q=0;Q<3;Q++){const W=92+Q*52;c.beginPath(),c.arc(0,0,W,0,Math.PI*2),c.globalAlpha=.35,c.stroke(),c.globalAlpha=.9;const ne=10+Q*4;for(let _e=0;_e<ne;_e++){const me=_e/ne*Math.PI*2+Q,se=Math.cos(me)*W,Ae=Math.sin(me)*W;c.beginPath(),c.moveTo(se,Ae);const xe=Math.cos(me)*(W+20),Oe=Math.sin(me)*(W+20);c.lineTo(xe,Oe),c.lineTo(xe+Math.cos(me+Math.PI/2)*12,Oe+Math.sin(me+Math.PI/2)*12),c.stroke(),c.beginPath(),c.arc(se,Ae,3.2,0,Math.PI*2),c.fill(),c.fillStyle="#8fd8e8"}}const h=new yl(M),T=new Ri({map:h,transparent:!0,opacity:0,blending:wi,depthWrite:!1}),_=new Je(new Dn(9.4,9.4),T);_.rotation.x=-Math.PI/2,_.position.y=.02,f.add(_);const E=[],C=11;for(let Q=0;Q<C;Q++){const W=Q/C*Math.PI*2+Q%3*.09,ne=new yr(.55+Q%4*.13,0),_e=ne.attributes.position;for(let Ae=0;Ae<_e.count;Ae++)_e.setXYZ(Ae,_e.getX(Ae)*(.9+Math.sin(Q*7+Ae)*.13),_e.getY(Ae)*.78,_e.getZ(Ae)*(.9+Math.cos(Q*5+Ae)*.13));ne.computeVertexNormals();const me=new Je(ne,Q%3===0?u:l),se=2.35+Q%2*.28;me.userData={a:W,r0:se,y0:.28+Q%3*.07,rot:Math.random()*Math.PI,drift:.7+Math.random()*1.4},me.rotation.set(Math.random()*.4,me.userData.rot,Math.random()*.3),E.push(me),f.add(me)}const w=new Je(new yr(.95,0),l);w.scale.y=.5,w.position.y=.32,f.add(w);const A=new dn,L=new gn(.26,3.4,.06);{const Q=L.attributes.position;for(let W=0;W<Q.count;W++){const _e=(1.7-Q.getY(W))/3.4;Q.setX(W,Q.getX(W)*(1-_e*.55)),Q.setZ(W,Q.getZ(W)*(1-_e*.4))}L.computeVertexNormals()}const q=new Je(L,d);q.position.y=2.5,A.add(q);const g=new Je(new gn(.045,2.2,.064),new un({color:3027512,roughness:.6,metalness:.6}));g.position.y=2.2,A.add(g);const y=new Je(new gn(1.15,.13,.17),p);y.position.y=4.15,y.rotation.z=.02,A.add(y);const O=new Je(new In(.065,.075,.75,8),m);O.position.y=4.55,A.add(O);const z=new Je(new ga(.14,0),p);z.position.y=4.98,A.add(z),A.rotation.z=.06,A.scale.setScalar(.82),f.add(A);const k=new dn,j=new un({color:2170909,roughness:.6,metalness:.8}),G=new Je(new ma(.22,.16,6),j);G.position.y=.28,k.add(G);const Z=new Je(new In(.16,.12,.06,6),j);Z.position.y=-.24,k.add(Z);for(let Q=0;Q<4;Q++){const W=new Je(new In(.012,.012,.5,4),j),ne=Q/4*Math.PI*2;W.position.set(Math.cos(ne)*.16,0,Math.sin(ne)*.16),k.add(W)}const V=new Je(new _a(.11,12,12),new Ri({color:16763e3}));k.add(V);const ae=new Up(new xl({map:Do(),color:16754784,transparent:!0,blending:wi,depthWrite:!1,opacity:.85}));ae.scale.setScalar(2.2),k.add(ae);const he=new Je(new In(.008,.008,3.2,4),j);he.position.y=1.95,k.add(he),k.position.set(.55,4.7,.5),f.add(k);const ge={uTime:{value:0},uThin:{value:0},uCold:{value:0}},ke=new tn({transparent:!0,depthWrite:!1,uniforms:ge,vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime, uThin, uCold;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
                   mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
      }
      void main() {
        vec2 p = vUv * 6.0;
        // fog-gate ripple: slow sideways shimmer, not a static haze
        float n = noise(p + vec2(uTime * 0.14, uTime * 0.05));
        n += 0.5 * noise(p * 2.3 - vec2(uTime * 0.21, 0.0));
        n /= 1.5;
        float edge = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
        float ring = smoothstep(0.02, 0.25, distance(vUv, vec2(0.5))) * smoothstep(0.55, 0.38, distance(vUv, vec2(0.5)));
        float a = n * edge * (0.34 - uThin * 0.27) * (0.4 + ring);
        vec3 warm = vec3(0.55, 0.46, 0.36);
        vec3 cold = vec3(0.38, 0.47, 0.58);
        gl_FragColor = vec4(mix(warm, cold, uCold), a);
      }
    `}),He=new Je(new Dn(11,11,1,1),ke);He.rotation.x=-Math.PI/2,He.position.y=.55,f.add(He);const X=260,ee=new Float32Array(X*3),pe=new Float32Array(X);for(let Q=0;Q<X;Q++)ee[Q*3]=(Math.random()-.5)*14,ee[Q*3+1]=Math.random()*8,ee[Q*3+2]=(Math.random()-.5)*12,pe[Q]=Math.random();const ue=new yt;ue.setAttribute("position",new It(ee,3));const Pe=new Sl({size:.045,map:Do(),transparent:!0,color:14202250,opacity:.75,depthWrite:!1,blending:wi,sizeAttenuation:!0}),we=new Np(ue,Pe);f.add(we);const Ne=new dn,Ve=new Dn(.065,.095),Be=new Ri({color:13351066,side:Gt,transparent:!0,opacity:.55}),R=new Je(Ve,Be);R.position.x=-.05;const ht=new Je(Ve,Be);ht.position.x=.05,Ne.add(R,ht),f.add(Ne);let Fe=0,ze=0,Te=0,$e=0,be=0,b=0,x=0;window.addEventListener("pointermove",Q=>{Fe=Q.clientX/window.innerWidth*2-1,ze=Q.clientY/window.innerHeight*2-1,b=1,clearTimeout(ta._ht),ta._ht=setTimeout(()=>{b=0},1600)});function N(){const Q=e.getBoundingClientRect(),W=Q.height-window.innerHeight;x=W>0?Math.min(1,Math.max(0,-Q.top/W)):0}window.addEventListener("scroll",N,{passive:!0});function $(){const Q=i.clientWidth,W=i.clientHeight;(i.width!==Q*t.getPixelRatio()||i.height!==W*t.getPixelRatio())&&(t.setSize(Q,W,!1),r.aspect=Q/W,r.updateProjectionMatrix())}const J=new Ue,Y=new Ue,Se=new Hp;let ie=!0;new IntersectionObserver(([Q])=>{ie=Q.isIntersecting},{threshold:0}).observe(e);function de(){if(requestAnimationFrame(de),!ie)return;$();const Q=Se.getElapsedTime(),W=Math.min(1,Math.max(0,(x-.25)/.6));Te+=(ze*.06-Te)*.018,$e+=(Fe*.1-$e)*.018,f.rotation.y=Q*.07+$e,f.rotation.x=Te*.5,r.position.x=Math.sin(Q*.05)*.25+Fe*.35,r.position.y=2.6+ze*-.15+x*.9,r.lookAt(0,1.7-x*.4,0);const ne=x*x;for(const xe of E){const{a:Oe,r0:P,y0:oe,drift:H}=xe.userData,K=P+ne*H*1.6;xe.position.set(Math.cos(Oe)*K,oe+ne*H*.55+Math.sin(Q*.6+Oe*5)*ne*.05,Math.sin(Oe)*K),xe.rotation.y=xe.userData.rot+ne*H*.7,xe.rotation.x=ne*H*.35}k.rotation.z=Math.sin(Q*.7)*.05,k.position.x=.55+Math.sin(Q*.5)*.06;const _e=.92+Math.sin(Q*9.3)*.04+Math.sin(Q*23.7)*.04;a.intensity=(46+Math.sin(Q*1.3)*5)*_e*(1-W*.45),ae.material.opacity=.75*_e*(1-W*.3),J.copy(Lo).lerp(Gp,W),a.color.copy(J),ae.material.color.copy(J),V.material.color.setHex(W>.5?11063272:16763e3),s.intensity=.9-W*.35,s.color.setHex(W>.5?2502716:3813414),o.intensity=.5+W*.9,Y.copy(Io).lerp(Vp,W),n.background.copy(Y),n.fog.color.copy(Y),be+=(b-be)*.03,ge.uTime.value=Q,ge.uThin.value=be,ge.uCold.value=W,T.opacity=be*.5*(1-ne*.6);const me=ue.attributes.position;for(let xe=0;xe<X;xe++){let Oe=me.getY(xe)+.004+pe[xe]*.006+ne*.01;Oe>8.5&&(Oe=0),me.setY(xe,Oe),me.setX(xe,me.getX(xe)+Math.sin(Q*.5+pe[xe]*20)*.0015)}me.needsUpdate=!0,Pe.color.setHex(W>.5?10139856:14202250);const se=Q*.9;Ne.position.set(k.position.x+Math.cos(se)*(.55+Math.sin(Q*.31)*.15),k.position.y+Math.sin(Q*1.7)*.18,k.position.z+Math.sin(se)*.5),Ne.lookAt(k.position);const Ae=Math.sin(Q*26)*.9;R.rotation.y=Ae,ht.rotation.y=-Ae,t.render(n,r)}N(),de()}function Do(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new yl(i)}const Ot="https://github.com/Arbiter09",Ti=[{id:"systems",name:"DISTRIBUTED SYSTEMS",short:"SYSTEMS",crow:"Machines that cannot agree, taught to agree. Slowly, and in C++.",projects:[{name:"MULTIPAXOSDB",tag:"consensus store",crow:"10,081 transactions a second, up from 38. He will tell you the number again.",lines:["A fault-tolerant distributed transaction system in C++ across 9 servers and 3 shards, implementing Multi-Paxos log replication and Two-Phase Commit over asynchronous gRPC on a single-threaded event loop.","Crash recovery via Paxos ballot persistence and WAL replay. A duplicate-balance bug (474 duplicates) was fixed with idempotency guards, verified to exact 30,000/30,000 conservation under concurrent recovery.","Transaction throughput increased 272x to a mean 10,081 TPS, up from 38, by diagnosing single-transaction batching bottlenecks and generating concurrent workloads across all 3 shard leaders."],stack:["C++","Multi-Paxos","2PC","gRPC","LevelDB"],link:Ot},{name:"ARMFORGE",tag:"bare metal OS",crow:"He wrote an operating system for a computer that does not exist.",lines:["An open-source AArch64 kernel on QEMU, extended with a fixed-priority RTOS scheduler implementing rate-monotonic scheduling, periodic tasks, mutexes, semaphores, priority inheritance and POSIX signals. 4 microsecond WCRT with zero deadline misses.","A PL011 UART driver with interrupt-driven receive, a 256-byte ring buffer, CRC-framed protocol and ACK/NACK retransmission, exposed as a Unix character device at 0.32ms mean round trip.","An eBPF/XDP network monitor using libbpf CO-RE in SKB mode, classifying guest traffic into BPF map counters and ring-buffer events. Verified on AWS EC2 Graviton2 capturing 10/10 ICMP packets."],stack:["C","AArch64","QEMU","RTOS","eBPF/XDP","libbpf"],link:Ot},{name:"KV STORE",tag:"in-memory engine",crow:"836,183 operations a second, to store things he will forget by Tuesday.",lines:["A Redis-compatible storage engine in C++17 with kqueue/epoll I/O, mmap persistence and a CRC-32 WAL, reaching 836,183 ops/s on loopback. Validated by 5,100 assertions and 50k libFuzzer and ASan iterations.","396,336 ops/s under an 80/20 mixed workload via seqlock RCU concurrent reader threads and WAL group commit, cutting sync overhead 13x, with MVCC snapshot isolation whose transactions survive kill -9.","Hardened with in-process OpenSSL TLS 1.3, AUTH and a Prometheus metrics endpoint. 74 integration tests, CI on Linux and macOS on every push."],stack:["C++17","kqueue/epoll","mmap","MVCC","OpenSSL","Prometheus"],link:Ot},{name:"TCP/IP STACK",tag:"user-space networking",crow:"He rebuilt the internet's plumbing. The original was working fine.",lines:["A user-space TCP/IP stack over raw AF_PACKET sockets with ARP resolution, IP fragmentation and reassembly, and a sliding-window TCP state machine, sustaining 850 Mbps across a 2-node benchmark.","Connection handshake latency cut 35% by replacing per-packet heap allocation with mmap-backed ring buffers for zero-copy packet processing, bringing average SYN-to-ACK down to 46 microseconds.","Diagnosed and fixed a congestion-collapse bug under simulated packet loss with a simplified Reno-style congestion control algorithm, improving throughput stability from 40% to 92% of theoretical link capacity under 5% loss."],stack:["C++","raw sockets","epoll","Netfilter","TCP/IP"],link:Ot}]},{id:"aiml",name:"AI / ML",short:"AI / ML",crow:"He builds things that build things now. I remain unemployed.",projects:[{name:"PAPERMIND",tag:"research copilot",crow:"It reads the papers so he can pretend he did.",lines:["A multi-agent research assistant on LangGraph: planner, retriever and critic agents answering multi-hop questions over academic corpora.","87% answer relevance on a 200-question arXiv CS evaluation set.","The RAG pipeline ingests 3,000+ arXiv PDFs into Pinecone with hybrid retrieval (dense plus BM25 reranking), dropping the hallucination rate from 31% to 9% on factual citation queries.","A critic node scores retrieved context against the query before generation and re-retrieves when confidence falls below threshold, cutting low-confidence responses 43%."],stack:["LangGraph","LangChain","Pinecone","Claude API","FastAPI","Python"],link:Ot},{name:"DEVMIND",tag:"code review agent",crow:"He cut token costs 38%. The other 62% remain. Watching.",lines:["An autonomous multi-step code review agent tested across 500+ simulated pull requests, combining the Claude API with MCP-standardized GitHub integrations in an agentic loop.","Redis caching of repeated MCP tool results (file reads, diff fetches) plus structured prompt compression cut Claude API token costs 38%, holding sub-2s p95 latency under concurrent runs.","A self-evaluation loop critiques its own output against a rubric of 12 code quality dimensions, including security checks, before posting review comments."],stack:["Claude API","MCP","FastAPI","Redis","React","OpenTelemetry","AWS EC2"],link:Ot},{name:"NEURALSERVE",tag:"fine-tune + serving",crow:"He made an 8-billion-parameter model 98.6% less work to train. The other 1.4% took a week.",lines:["Fine-tuned LLaMA 3.1 8B on a 12K-sample instruction dataset using LoRA at rank 16 with PyTorch and HuggingFace PEFT, cutting trainable parameters by 98.6% while improving ROUGE-L from 0.29 to 0.41 over the frozen baseline.","A batched inference server in FastAPI with dynamic request batching and Redis-backed KV-cache eviction, sustaining 180 req/min at p95 latency under 420ms on a single AWS EC2 g4dn.xlarge instance.","The serving pipeline is instrumented with OpenTelemetry and a Prometheus and Grafana dashboard tracking token throughput, GPU utilization and cache hit rate across 3 model versions, to catch latency regressions early."],stack:["PyTorch","LoRA","HuggingFace","FastAPI","Redis","Docker","AWS EC2"],link:Ot},{name:"MOVIEPULSE",tag:"recommender",crow:"An RMSE of 0.85. To predict whether humans like explosions. Groundbreaking.",lines:["A hybrid recommendation engine combining ALS matrix factorization with content-based filtering on MovieLens 1M: 1M ratings, 6,040 users, 3,883 movies.","RMSE of 0.85 on held-out test data, a 24% improvement over a global-mean baseline.","Top-10 precision improved 56% (Precision@10 of 0.078 against 0.050) by tuning latent factor dimensionality and regularization through 5-fold cross-validation across 56 hyperparameter combinations.","Inference latency cut from 6.9ms to 0.9ms (7.7x) by precomputing and caching top-N recommendations in Redis, serving 1,087 req/s at 200 concurrent requests with zero failures."],stack:["Python","scikit-learn","FastAPI","Redis","PostgreSQL"],link:Ot}]},{id:"web3",name:"WEB3",short:"WEB3",crow:"Contracts that hold other people's money. He tested them, at least.",projects:[{name:"STABLECOIN",tag:"WETH / WBTC",crow:"A dollar he invented, backed by two coins that refuse to sit still.",lines:["A decentralized, over-collateralized stablecoin protocol in Solidity, letting users mint a USD-pegged token (DSC) against WETH and WBTC collateral through a central DSCEngine contract.","Protocol solvency is enforced by real-time health-factor calculations and a permissionless liquidation mechanism in DSCEngine.sol, using Chainlink price feeds validated through a custom OracleLib to prevent stale-price exploits.","Correctness validated with Foundry: unit tests for the core protocol flows, plus fuzz and invariant suites that continuously verified the system stayed fully over-collateralized under randomized inputs."],stack:["Solidity","Foundry","Chainlink","DSCEngine","invariant tests"],link:Ot},{name:"REBASE TOKEN",tag:"cross-chain",crow:"Interest that follows you across three chains. Like a debt collector, but polite.",lines:["A cross-chain, interest-bearing ERC20 rebase token. Users deposit ETH into an L1 Vault to mint RebaseToken, with balances computed dynamically on-chain as principal plus continuously accrued interest.","A custom Chainlink CCIP TokenPool burns tokens on the source chain and encodes each user's locked interest rate into the message payload, preserving it on mint across Sepolia, Arbitrum Sepolia and ZKsync Sepolia.","Enforced a monotonically decreasing global rate with per-user rate locking, validated with Foundry unit, fuzz and fork-based cross-chain integration tests."],stack:["Solidity","Foundry","Chainlink CCIP","ERC20","ZKsync"],link:Ot},{name:"NFT & ERC20",tag:"token contracts",crow:"He minted cats. On-chain. Base64-encoded cats.",lines:["Two independent Foundry-based Solidity projects. MintCats is an ERC721 suite: a standard BasicNft contract with IPFS-stored metadata, and a dynamic MoodNft that stores fully on-chain Base64-encoded metadata and lets users flip the NFT's mood between happy and sad.","OurToken is a custom ERC20 built on OpenZeppelin's standard library, with a Foundry deployment script that mints the initial supply to the deployer on broadcast.","A Solidity test suite in Foundry's forge covers transfers, allowances and revert conditions, with deployment automated across both projects via Anvil local nodes and testnet RPC configurations."],stack:["Solidity","Foundry","OpenZeppelin","ERC721","ERC20","IPFS"],link:Ot},{name:"ETHDENVER 2025",tag:"2nd place · $3,000",crow:"Second place. He mentions it roughly as often as I molt. Constantly.",lines:["A decentralized audio attribution platform, built at ETHDenver 2025.","Took 2nd place, awarded $3,000 USDC."],stack:[],link:"https://devfolio.co/"}]},{id:"grind",name:"THE GRIND",short:"THE GRIND",crow:"The part of the resume that is just stubbornness, tabulated.",projects:[{name:"THE GRIND",tag:"300+ solved",crow:"Three hundred and counting. He is not well.",lines:["300+ LeetCode problems solved, Hard and Medium.","Graphs, dynamic programming, and advanced data structures.","The souls counter on the shrine ticks to the same number. One soul per problem."],stack:["graphs","dynamic programming","data structures","stubbornness"],link:"https://leetcode.com/u/Jas_009/"}]}],Uo=34;function Wp(){const i=document.getElementById("hh-screen"),e=document.getElementById("handheld"),t={power:!0,booting:!1,view:"cats",cat:0,proj:0,sound:!1},n=()=>Ti[t.cat],r=()=>n().projects[t.proj];function s(){if(!(!t.power||t.booting))return t.view==="cats"?a():t.view==="menu"?o():l()}function a(){const _=n();i.innerHTML=`
      <div class="scr-head"><span>THE WORKBENCH</span></div>
      <div class="scr-menu">
        ${Ti.map((E,C)=>`
          <div class="scr-row${C===t.cat?" on":""}">
            <span class="scr-caret">${C===t.cat?"▶":""}</span>
            <span class="scr-folder">▤</span>
            <span class="scr-name">${E.short}</span>
            <span class="scr-count">${E.projects.length}</span>
          </div>`).join("")}
      </div>
      <div class="scr-box scr-desc"><span class="scr-crow">"${_.crow}"</span></div>
      <div class="scr-foot">
        <span>${_.projects.length} works</span><span>A ▸ OPEN</span>
      </div>`}function o(){const _=r();i.innerHTML=`
      <div class="scr-head"><span>${n().short}</span><span class="scr-crumb">B ▸ FOLDERS</span></div>
      <div class="scr-menu">
        ${n().projects.map((E,C)=>`
          <div class="scr-row${C===t.proj?" on":""}">
            <span class="scr-caret">${C===t.proj?"▶":""}</span>
            <span class="scr-name">${E.name}</span>
          </div>`).join("")}
      </div>
      <div class="scr-box scr-desc"><span class="scr-crow">"${_.crow}"</span></div>
      <div class="scr-foot"><span>${_.tag}</span><span>A ▸ OPEN</span></div>`}function l(){const _=r();i.innerHTML=`
      <div class="scr-head"><span>${_.name}</span><span class="scr-crumb">${n().short}</span></div>
      <div class="scr-box scr-body" id="scr-body">
        ${_.lines.map(E=>`<p>${E}</p>`).join("")}
        ${_.stack.length?`<div class="scr-stack">${_.stack.map(E=>`<span>${E}</span>`).join("")}</div>`:""}
      </div>
      <div class="scr-foot">
        <span>◀ ▶ SWITCH · ▲ ▼ SCROLL</span><span>A ▸ LINK · B ▸ BACK</span>
      </div>`}const u=document.getElementById("hh-power");function d(_){if(t.power=_,e.classList.toggle("off",!_),u.setAttribute("aria-checked",String(_)),!_){t.booting=!1,i.innerHTML="";return}t.booting=!0,t.view="cats",i.innerHTML='<div class="scr-bootline"></div>',h(880),setTimeout(()=>{t.booting=!1,s(),h(1180)},620)}u.addEventListener("click",()=>d(!t.power));function p(_){if(!(!t.power||t.booting)){if(h(_==="a"?660:_==="b"?330:520),_==="select"){t.sound=!t.sound,M(`SOUND ${t.sound?"ON":"OFF"}`);return}if(_==="start"){t.view="cats",s();return}return t.view==="cats"?m(_):t.view==="menu"?f(_):v(_)}}function m(_){if(_==="up")t.cat=(t.cat-1+Ti.length)%Ti.length;else if(_==="down")t.cat=(t.cat+1)%Ti.length;else if(_==="a")t.proj=0,t.view="menu";else return;s()}function f(_){const E=n().projects;if(_==="up")t.proj=(t.proj-1+E.length)%E.length;else if(_==="down")t.proj=(t.proj+1)%E.length;else if(_==="b")t.view="cats";else if(_==="a")t.view="detail";else return;s()}function v(_){const E=document.getElementById("scr-body");if(_==="up"&&E){E.scrollTop-=Uo;return}if(_==="down"&&E){E.scrollTop+=Uo;return}if(_==="left"||_==="right"){const C=n().projects;t.proj=(t.proj+(_==="right"?1:-1)+C.length)%C.length,s();return}if(_==="a"){window.open(r().link,"_blank","noopener");return}_==="b"&&(t.view="menu",s())}function M(_){const E=document.createElement("div");E.className="scr-flash",E.textContent=_,i.appendChild(E),setTimeout(()=>E.remove(),1100)}let c;function h(_){if(t.sound)try{c=c||new(window.AudioContext||window.webkitAudioContext);const E=c.createOscillator(),C=c.createGain();E.type="square",E.frequency.value=_,C.gain.setValueAtTime(.035,c.currentTime),C.gain.exponentialRampToValueAtTime(1e-4,c.currentTime+.09),E.connect(C).connect(c.destination),E.start(),E.stop(c.currentTime+.1)}catch{}}e.querySelectorAll("[data-btn]").forEach(_=>{_.addEventListener("click",()=>p(_.dataset.btn))});const T={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",z:"a",Z:"a",Enter:"a",x:"b",X:"b",Escape:"b",Backspace:"b"};window.addEventListener("keydown",_=>{if(!document.getElementById("page-projects").classList.contains("active")||!t.power||t.booting)return;const E=T[_.key];if(!E)return;_.preventDefault(),p(E);const C=e.querySelector(`[data-btn="${E}"]`);C&&(C.classList.add("pressed"),setTimeout(()=>C.classList.remove("pressed"),110))}),s()}const Xp={mumbai:'<svg width="54" height="20" viewBox="0 0 54 20" class="ms-skyline" aria-label="Mumbai"><path d="M2 19 v-7 h4 v7 M9 19 v-11 h3 v11 M15 19 v-6 l3 -4 3 4 v6 M25 19 v-13 h2 l1 -4 1 4 h2 v13 M35 19 v-8 h4 v8 M43 19 v-5 a4 4 0 0 1 8 0 v5" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>',singapore:'<svg width="44" height="20" viewBox="0 0 44 20" class="ms-skyline" aria-label="Singapore outpost"><path d="M4 19 v-9 M9 19 v-9 M14 19 v-9 M2 10 h14 M6 10 l3 -5 3 5 M24 19 v-12 h4 v12 M33 19 v-7 l4 -3 v10" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2.5 2"/></svg>',ny:'<svg width="54" height="22" viewBox="0 0 54 22" class="ms-skyline" aria-label="New York"><path d="M4 21 v-10 h5 v10 M12 21 v-16 h4 l0 16 M14 5 v-3 M21 21 v-12 h5 v12 M30 21 v-18 l3 -2 3 2 v18 M40 21 v-8 h5 v8 M48 21 v-13 h4 v13" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>',sf:'<svg width="48" height="20" viewBox="0 0 48 20" class="ms-skyline" aria-label="San Francisco outpost"><path d="M2 14 h10 M4 14 v5 M10 14 v5 M2 14 q5 -8 10 0 M18 19 v-9 l3 -6 3 6 v9 M30 19 v-7 h4 v7 M38 19 v-10 h5 v10" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="2.5 2"/></svg>'},qp=[{role:"B.E. in Information Technology",org:"University of Mumbai",dates:"Aug 2020 — Jun 2024",loc:"Mumbai, IN",city:"mumbai",bullets:["GPA 9.2/10 across operating systems, databases, distributed systems, and networking.","Where the grind began: DSA by day, side projects by night."],badges:["GPA 9.2 / 10"]},{role:"Software Developer Intern",org:"Kotton King",dates:"Mar 2024 — Aug 2024",loc:"Singapore · remote",city:"singapore",remote:!0,bullets:["Cut response latency 40% on Java (Spring Boot) and PostgreSQL services through query optimization and multithreaded concurrency tuning, while scaling to 10K+ daily requests.","Hardened 8 endpoints against SQL injection with parameterized queries, input sanitization, and fixed-window rate limiting.","Built a webhook-driven CI/CD pipeline on GitHub Actions, Docker, and Kubernetes rolling deploys: 20% faster releases across 3 services."]},{role:"MS in Data Science",org:"Stony Brook University",dates:"Aug 2024 — May 2026",loc:"New York, US",city:"ny",bullets:["Computer Science track. GPA 3.73/4.00, top 10% of the cohort.","Statistical learning, reinforcement learning, big data, and programming abstractions."],badges:["Top 10% · GPA 3.73","ETHDenver 2025 · 2nd place"]},{role:"Software Developer Intern",org:"Good Ai",dates:"Jul 2025 — Jun 2026",loc:"San Francisco · remote",city:"sf",remote:!0,bullets:["Migrated inter-service event delivery to an AWS SQS + Kinesis pipeline with least-privilege IAM across 6 consumers, sustaining 200K+ events/day at sub-150ms lag.","Built 30+ reusable React and TypeScript components for AI dashboards, holding WCAG 2.1 accessibility and 95%+ test coverage in Vitest.","Instrumented FastAPI microservices with OpenTelemetry tracing plus Prometheus and Grafana alerting, cutting mean time to detect incidents 35%."]},{role:"Software Developer (Research)",org:"Stony Brook University",dates:"Aug 2025 — present",loc:"New York, US",city:"ny",current:!0,bullets:["Translated Fair Representation Act requirements into a graph-based gluing algorithm enforcing contiguity, compactness, and proportional seat allocation via BFS across all 50 states.","Ran 5,000+ Monte Carlo Markov Chain ensemble simulations with MGGG GerryChain on the Seawulf HPC cluster; Slurm scheduling and a migration to AWS EC2 Spot instances lifted throughput 35% while cutting compute costs 28%."]}];function Yp(){const i=document.getElementById("road"),e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.id="road-svg",e.innerHTML='<path id="road-path-base" d=""/><path id="road-path" d=""/>',i.appendChild(e);const t=document.createElement("div");t.id="road-nodes",i.appendChild(t);const n=[];qp.forEach((d,p)=>{const m=document.createElement("div");m.className="milestone "+(p%2?"side-left":"side-right")+(d.remote?" remote":"")+(d.current?" current":""),m.innerHTML=`
      <div class="ms-card">
        <div class="ms-crest">${Xp[d.city]}<span class="ms-loc">${d.loc}</span></div>
        <div class="ms-role">${d.role}</div>
        <div class="ms-org">${d.org}${d.current?" — current chapter":""}</div>
        <div class="ms-dates">${d.dates}</div>
        <ul>${d.bullets.map(v=>`<li>${v}</li>`).join("")}</ul>
        ${(d.badges||[]).map(v=>`<span class="wax-badge">${v}</span>`).join("")}
      </div>`,i.appendChild(m);const f=document.createElement("span");f.className="road-node"+(d.current?" current":""),t.appendChild(f),n.push({el:m,node:f})});const r=e.querySelector("#road-path-base"),s=e.querySelector("#road-path");let a=0;function o(){const d=i.scrollHeight,p=i.clientWidth;if(!d||!p||!n.length)return;e.setAttribute("width",p),e.setAttribute("height",d),e.setAttribute("viewBox",`0 0 ${p} ${d}`);const m=p/2,f=n.map(({el:T,node:_},E)=>{const C=T.offsetTop+38,w=m+(E%2?-18:18);return _.style.left=`${w}px`,_.style.top=`${C}px`,[w,C]}),v=f[0],M=f[f.length-1],c=[[m,Math.max(0,v[1]-90)],...f,[m,Math.min(d,M[1]+110)]],h=$p(c);r.setAttribute("d",h),s.setAttribute("d",h),a=s.getTotalLength(),s.style.strokeDasharray=a,l()}function l(){if(!a)return;const d=i.getBoundingClientRect(),p=Math.min(1,Math.max(0,(window.innerHeight*.8-d.top)/d.height));s.style.strokeDashoffset=a*(1-p)}window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",o),window.addEventListener("tab:experience",o),o();const u=new IntersectionObserver(d=>{d.forEach(p=>{if(!p.isIntersecting)return;p.target.classList.add("lit");const m=n.find(f=>f.el===p.target);m&&m.node.classList.add("lit")})},{threshold:.2});n.forEach(d=>u.observe(d.el))}function $p(i){let e=`M ${i[0][0]} ${i[0][1]}`;for(let t=0;t<i.length-1;t++){const n=i[t-1]||i[t],r=i[t],s=i[t+1],a=i[t+2]||s;e+=` C ${r[0]+(s[0]-n[0])/6} ${r[1]+(s[1]-n[1])/6}, ${s[0]-(a[0]-r[0])/6} ${s[1]-(a[1]-r[1])/6}, ${s[0]} ${s[1]}`}return e}const jp=[{date:["03","AUG"],hash:"f4c1a2e",subject:"feat(papermind): passage-level citation pinning",body:"Answers now link to the exact highlighted span in the source PDF. Reranker threshold tuned on 40 hand-labeled queries. Chai count: 3.",tags:["papermind"]},{date:["27","JUL"],hash:"b91d07c",subject:"perf(devmind): context pruner v2 — 38% fewer tokens",body:"Replaced greedy truncation with relevance-scored eviction. Same eval accuracy, roughly a third off the bill. The crow remains unimpressed.",tags:["devmind","perf"]},{date:["20","JUL"],hash:"7e3f9a1",subject:"feat(terminal): sudo hire-me easter egg",body:"This site’s terminal now handles insufficient privileges with appropriate drama.",tags:["portfolio"]},{date:["13","JUL"],hash:"d20cafe",subject:"fix(moviepulse): cold-start users no longer predicted to hate everything",body:"Fallback prior was anchored to the grumpiest decile. Blend now warms up over first 5 ratings. RMSE holds at 0.84.",tags:["moviepulse"]},{date:["06","JUL"],hash:"a11ce5d",subject:"chore(leetcode): problems 297–304",body:"Two hards. One of them fell in 20 minutes; the other took the whole of Sunday and a walk around the block. Souls acquired: 8.",tags:["grind"]},{date:["29","JUN"],hash:"0ddba11",subject:"feat(shrine): the lantern now flickers correctly",body:"Spent four hours on a light. Zero regrets. This is what weekends are for.",tags:["portfolio","3d"]}];function Kp(){const i=document.getElementById("shiplog-entries");i.innerHTML=jp.map(e=>`
    <div class="log-entry">
      <div class="log-stamp"><span class="d">${e.date[0]}</span><span class="m">${e.date[1]}</span></div>
      <div class="log-msg">
        <div><span class="hash">${e.hash}</span> <span class="subject">${e.subject}</span></div>
        <div class="body">${e.body}</div>
        <div class="body">${e.tags.map(t=>`<span class="tag">#${t}</span>`).join(" ")}</div>
      </div>
    </div>`).join("")}const Zp=["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ"];function Jp(i){const e=document.getElementById("term-output"),t=document.getElementById("term-input"),n=document.getElementById("term-screen"),r=[];let s=-1,a=null;const o=(M="")=>{const c=document.createElement("div");c.innerHTML=M,e.appendChild(c),n.scrollTop=n.scrollHeight};o('<span class="dim">last login: a Sunday, well past midnight — candle at 40%</span>'),o(`type <span class="warm">help</span> to see what the archive holds
`),n.addEventListener("click",()=>t.focus());const l={"experience.md":`<span class="gold"># experience.md</span>

<span class="warm">## Software Developer (Research)</span> — Stony Brook University <span class="dim">(Aug 2025–present)</span>
- Fair Representation Act rules translated into a graph-based gluing
  algorithm: contiguity, compactness, proportional seats via BFS, 50 states
- 5,000+ MCMC ensemble simulations (MGGG GerryChain) on Seawulf HPC;
  Slurm scheduling lifted throughput 35%

<span class="warm">## Software Developer Intern</span> — Good Ai, San Francisco <span class="dim">(remote, Jul 2025–Jun 2026)</span>
- AWS SQS + Kinesis event pipeline, least-privilege IAM across 6 consumers,
  200K+ events/day at sub-150ms lag
- 30+ reusable React + TypeScript components, WCAG 2.1, 95%+ Vitest coverage
- OpenTelemetry + Prometheus/Grafana across 5+ services, MTTD down 35%

<span class="warm">## MS, Data Science</span> <span class="dim">(CS track)</span> — Stony Brook University <span class="dim">(Aug 2024–May 2026)</span>
- GPA 3.73/4.00, top 10%

<span class="warm">## Software Developer Intern</span> — Kotton King, Singapore <span class="dim">(remote, Mar 2024–Aug 2024)</span>
- Java/Spring Boot + PostgreSQL: response latency down 40%, 10K+ daily requests
- 8 endpoints hardened against SQL injection; fixed-window rate limiting
- Webhook-driven CI/CD (Actions, Docker, K8s): deploys 20% faster, 3 services

<span class="warm">## B.E., Information Technology</span> — University of Mumbai <span class="dim">(Aug 2020–Jun 2024)</span> · GPA 9.2/10`,"skills.json":`{
  <span class="warm">"ai_ml"</span>:     ["Claude API", "MCP", "LangChain", "DSPy", "PyTorch",
                "HuggingFace Transformers", "scikit-learn", "LoRA fine-tuning"],
  <span class="warm">"systems"</span>:   ["Multi-Paxos", "2PC", "raw sockets", "TCP/IP", "epoll/kqueue",
                "gRPC", "eBPF/XDP", "RTOS", "LevelDB", "MVCC"],
  <span class="warm">"languages"</span>: ["Python", "C/C++", "Java", "Go", "JavaScript", "TypeScript", "SQL", "Bash"],
  <span class="warm">"data_cloud"</span>:["AWS (EC2, RDS, S3, IAM)", "GCP", "Databricks", "Spark",
                "Kafka", "PostgreSQL", "Redis", "MongoDB"],
  <span class="warm">"backend"</span>:   ["FastAPI", "Spring Boot", "REST", "GraphQL", "gRPC",
                "Docker", "Kubernetes", "CI/CD", "OpenTelemetry"],
  <span class="warm">"frontend"</span>:  ["React", "Next.js", "Redux Toolkit", "Tailwind", "Vitest", "WCAG 2.1"],
  <span class="warm">"web3"</span>:      ["Solidity", "Foundry", "Chainlink", "Chainlink CCIP", "OpenZeppelin",
                "ERC20", "ERC721", "invariant + fuzz testing", "Anvil"],
  <span class="warm">"misc"</span>:      ["candle maintenance", "crow diplomacy", <span class="gold">"shipping on Sundays"</span>]
}`,"grind.txt":`leetcode: 300+ solved (hard/medium). graphs, DP, advanced data structures.
one soul per problem; the shrine counter ticks to the same number.`},u=`<span class="warm">systems/</span>
  <span class="gold">multipaxosdb/</span>  9 servers · 3 shards · Multi-Paxos + 2PC · 10,081 TPS
  <span class="gold">armforge/</span>      AArch64 bare metal · RTOS scheduler · 4µs WCRT
  <span class="gold">kvstore/</span>       Redis-compatible C++17 engine · 836,183 ops/s
  <span class="gold">tcpip/</span>         user-space stack · 850 Mbps · 46µs SYN-to-ACK

<span class="warm">ai-ml/</span>
  <span class="gold">papermind/</span>     multi-agent research assistant · 87% answer relevance
  <span class="gold">devmind/</span>       code review agent · MCP · −38% token spend
  <span class="gold">neuralserve/</span>   LLaMA 3.1 8B LoRA · ROUGE-L 0.29→0.41 · p95 &lt;420ms
  <span class="gold">moviepulse/</span>    hybrid recommender · RMSE 0.85 · 7.7x faster inference

<span class="warm">web3/</span>
  <span class="gold">stablecoin/</span>    over-collateralized DSC · WETH/WBTC · Chainlink oracles
  <span class="gold">rebase-token/</span>  cross-chain interest-bearing ERC20 · Chainlink CCIP
  <span class="gold">nft-erc20/</span>     MintCats ERC721 + on-chain Base64 MoodNft · OurToken
  <span class="gold">ethdenver/</span>     decentralized audio attribution · 2nd · $3,000 USDC

<span class="warm">the-grind/</span>
  <span class="gold">leetcode/</span>      300+ solved (hard/medium) · graphs · DP · data structures`,d={help:()=>`<span class="gold">the archive responds to:</span>
  whoami            ls [projects]      cat &lt;file&gt;
  cd projects       open resume        sudo hire-me
  runes             clear              history
<span class="dim">  ...and a few words it does not advertise.</span>`,whoami:()=>`jas — backend engineer · agent builder · weekend shipper
<span class="dim">uid=1000(jas) gid=1000(bench) groups=chai,hpc,hunters-dream</span>`,pwd:()=>"/home/jas/archive",date:()=>new Date().toString(),ls:M=>M[0]==="projects"?u:'<span class="gold">projects/</span>  experience.md  skills.json  grind.txt  <span class="dim">.secrets</span>',cat:M=>{const c=M.join(" ");return c?c===".secrets"?'<span class="dim">nice try. the crow ate them.</span>':c==="resume"||c==="resume.pdf"?d.open(["resume"]):l[c]||`<span class="err">cat: ${ni(c)}: no such scroll in the archive</span>`:'<span class="err">cat: which scroll?</span>'},cd:M=>{const c=(M[0]||"").replace(/\/$/,""),h={projects:"projects",experience:"experience",shiplog:"shiplog",home:"home",contact:"contact","~":"home"};return h[c]?(setTimeout(()=>i(h[c]),450),`<span class="dim">passing through the fog gate → ${h[c]}...</span>`):`<span class="err">cd: ${ni(c)||"(nowhere)"}: the path is barred</span>`},open:M=>M[0]==="resume"?`<span class="dim">unfurling the illustrated scroll...</span>
resume: <a href="/Jas-Portfolio/resume.pdf" target="_blank">resume.pdf</a> <span class="dim">(place your PDF at /public/resume.pdf)</span>`:'<span class="err">open: only the resume unrolls from here</span>',sudo:M=>M.join(" ").startsWith("hire-me")?`<span class="dim">[sudo] password for jas: ********</span>
<span class="gold">╔══════════════════════════════════════╗
║   PRIVILEGE ESCALATION SUCCESSFUL    ║
║   role: whatever needs shipping      ║
║   start date: negotiable             ║
║   contact: jasshah9513@gmail.com     ║
╚══════════════════════════════════════╝</span>
<span class="warm">HR daemon notified. A raven has been dispatched.</span>`:'<span class="err">jas is not in the sudoers file. this incident will be reported to the crow.</span>',history:()=>r.map((M,c)=>`  ${c+1}  ${ni(M)}`).join(`
`)||'<span class="dim">(empty)</span>',clear:()=>(e.innerHTML="",null),echo:M=>ni(M.join(" ")),praise:()=>'<span class="gold">\\[T]/  PRAISE THE SUN  \\[T]/</span>',bonfire:()=>'<span class="warm">bonfire lit.</span> <span class="dim">progress saved. it was always saved — git exists.</span>',moth:()=>'<span class="dim">it circles the lantern still. it does not answer to you.</span>',souls:()=>'<span class="gold">souls held: 300+</span> <span class="dim">(one per leetcode problem. no shortcuts were taken.)</span>',crow:()=>'<span class="dim">"caw," it says, meaning: your RMSE flex impresses no one.</span>',humanity:()=>'<span class="dim">restored. briefly. then a flaky test appeared.</span>',chai:()=>'<span class="warm">☕ brewing...</span> <span class="dim">productivity +12%, sleep schedule −40%</span>',vim:()=>'<span class="err">you are now trapped. (kidding — this shell is merciful. :q respected.)</span>',":q":()=>'<span class="dim">you were never in vim. but the instinct is respected.</span>',runes:()=>(p(),null)};function p(){a={round:1,seq:[],awaiting:!1},o(`<span class="gold">— THE RUNE TRIAL —</span>
<span class="dim">the stones flash a sequence. type it back using keys 1–6.
three rounds. the lantern is watching.</span>
  <span class="warm">1=ᚠ 2=ᚢ 3=ᚦ 4=ᚨ 5=ᚱ 6=ᚲ</span>   (type "q" to flee)`),m()}function m(){const M=2+a.round;a.seq=Array.from({length:M},()=>1+Math.floor(Math.random()*6)),a.awaiting=!1;const c=a.seq.map(T=>Zp[T-1]).join(" ");o(`
<span class="dim">round ${a.round} — attend:</span>`);const h=document.createElement("div");h.innerHTML=`<span class="gold" style="font-size:19px; letter-spacing:8px;">${c}</span>`,e.appendChild(h),n.scrollTop=n.scrollHeight,setTimeout(()=>{h.innerHTML=`<span class="dim" style="font-size:19px; letter-spacing:8px;">${"· ".repeat(M).trim()}</span>`,o(`<span class="dim">the stones go dark. speak the sequence (e.g. ${a.seq.map(()=>"#").join("")}):</span>`),a.awaiting=!0},1400+M*450)}function f(M){if(M.trim().toLowerCase()==="q"){o('<span class="dim">you flee. the runes dim, unjudging. mostly.</span>'),a=null;return}if(!a.awaiting){o('<span class="dim">patience. the stones are still speaking.</span>');return}const c=M.replace(/\s/g,"").split("").map(Number);if(!(c.length===a.seq.length&&c.every((T,_)=>T===a.seq[_]))){o(`<span class="err">the runes flare and reject you. the sequence was ${a.seq.join("")}.</span>
<span class="dim">YOU DIED. (type "runes" to try again — there is always another attempt)</span>`),a=null;return}if(a.round===3){o(`<span class="gold">the third seal breaks. RUNE TRIAL COMPLETE.</span>
<span class="warm">reward: the knowledge that you'd pass a memorization interview round.</span>
<span class="dim">achievement noted in no permanent record whatsoever.</span>`),a=null;return}a.round++,o('<span class="gold">correct.</span> <span class="dim">the stones brighten...</span>'),setTimeout(m,700)}function v(M){const c=M.trim();if(o(`<span class="warm">jas@thebench:~$</span> ${ni(c)}`),!c)return;if(r.push(c),s=r.length,a){f(c);return}const[h,...T]=c.split(/\s+/),_=d[h.toLowerCase()];if(_){const E=_(T);E&&o(E)}else o(`<span class="err">${ni(h)}: not found in the archive.</span> <span class="dim">try "help" — or guess. guessing is traditional.</span>`)}t.addEventListener("keydown",M=>{if(M.key==="Enter")v(t.value),t.value="";else if(M.key==="ArrowUp")M.preventDefault(),s>0&&(t.value=r[--s]||"");else if(M.key==="ArrowDown")M.preventDefault(),s<r.length&&(t.value=r[++s]||"");else if(M.key==="Tab"){M.preventDefault();const c=t.value.toLowerCase(),h=Object.keys(d).find(T=>T.startsWith(c)&&c);h&&(t.value=h+" ")}})}function ni(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Qp=[{key:"email",glyph:"✉",hue:22,value:"jasshah9513@gmail.com",href:"mailto:jasshah9513@gmail.com",note:"The fastest bird. Usually answered before the candle gutters.",copy:"jasshah9513@gmail.com"},{key:"github",glyph:"⑂",hue:205,value:"github.com/Arbiter09",href:"https://github.com/Arbiter09",note:"Everything unfinished, in public. The commit messages are honest."},{key:"linkedin",glyph:"❖",hue:200,value:"linkedin.com/in/jas-shah-709854233",href:"https://www.linkedin.com/in/jas-shah-709854233/",note:"The formal ledger. Wear shoes."},{key:"resume",glyph:"✎",hue:45,value:"the illustrated scroll (PDF)",href:"/Jas-Portfolio/resume.pdf",note:"One page. It took longer than this entire site."}];function em(){const i=document.getElementById("contact-scene"),e=document.getElementById("dispatches"),t=document.getElementById("raven"),n=document.getElementById("flight-svg"),r=document.getElementById("flight-base"),s=document.getElementById("flight-line");e.innerHTML=Qp.map((f,v)=>`
    <article class="dispatch" data-side="${v%2?"right":"left"}">
      <div class="dispatch-seal" style="--seal-hue:${f.hue}">
        <svg viewBox="0 0 48 48" width="48" height="48">
          <circle cx="24" cy="24" r="19" fill="hsl(${f.hue} 42% 26%)" stroke="hsl(${f.hue} 48% 44%)" stroke-width="1.2"/>
          <circle cx="24" cy="24" r="19" fill="url(#seal-shine)" opacity="0.28"/>
          <text x="24" y="30" text-anchor="middle" font-size="17" fill="hsl(${f.hue} 55% 76%)">${f.glyph}</text>
        </svg>
      </div>
      <div class="dispatch-main">
        <span class="dispatch-key">${f.key}</span>
        <a class="dispatch-val" href="${f.href}"${f.href.startsWith("mailto:")?"":' target="_blank" rel="noopener"'}>${f.value}</a>
        <p class="dispatch-note">${f.note}</p>
      </div>
      ${f.copy?`<button class="dispatch-copy" data-copy="${f.copy}">copy</button>`:""}
    </article>`).join(""),n.insertAdjacentHTML("afterbegin",`<defs><radialGradient id="seal-shine" cx="0.34" cy="0.28" r="0.75">
    <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`),e.querySelectorAll(".dispatch-copy").forEach(f=>{f.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(f.dataset.copy),f.textContent="sealed"}catch{f.textContent="copy it yourself"}setTimeout(()=>{f.textContent="copy"},1800)})});const a=new IntersectionObserver(f=>{f.forEach(v=>{v.isIntersecting&&v.target.classList.add("alighted")})},{threshold:.35});e.querySelectorAll(".dispatch").forEach(f=>a.observe(f)),new IntersectionObserver(([f])=>{f.isIntersecting&&f.target.classList.add("alighted")},{threshold:.4}).observe(document.getElementById("altar"));let l=0;function u(){const f=i.clientWidth,v=i.clientHeight;if(!f||!v)return;n.setAttribute("viewBox",`0 0 ${f} ${v}`),n.setAttribute("width",f),n.setAttribute("height",v);const M=[[f*.78,92],[f*.3,v*.2],[f*.74,v*.36],[f*.26,v*.53],[f*.72,v*.7],[f*.5,v*.89]],c=nm(M);r.setAttribute("d",c),s.setAttribute("d",c),l=s.getTotalLength(),s.style.strokeDasharray=l,p()}let d=0;function p(){if(!l)return;const f=i.getBoundingClientRect(),v=f.height-window.innerHeight;d=v>0?Math.min(1,Math.max(0,-f.top/v)):0,s.style.strokeDashoffset=l*(1-d);const M=s.getPointAtLength(l*d),c=s.getPointAtLength(Math.min(l,l*d+14));let h=Math.atan2(c.y-M.y,c.x-M.x)*180/Math.PI,T=1;(h>90||h<-90)&&(T=-1,h+=180),h=Math.max(-32,Math.min(32,h));const _=d>.02&&d<.985;t.classList.toggle("flying",_),t.classList.toggle("perched",!_),_||(h=0,T=1);const E=_?Math.sin(performance.now()/220)*3:0;t.style.transform=`translate(${M.x}px, ${M.y+E}px) translate(-50%, -50%) rotate(${h}deg) scaleX(${T})`}window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",u),window.addEventListener("tab:contact",u),u(),function f(){t.classList.contains("flying")&&p(),requestAnimationFrame(f)}();const m=document.getElementById("feather-layer");document.getElementById("release-raven").addEventListener("click",()=>{const f=document.getElementById("altar-note");for(let M=0;M<14;M++)tm(m);const v=t.cloneNode(!0);v.id="raven-flyer",v.classList.add("flying","departing"),v.classList.remove("perched"),document.body.appendChild(v),setTimeout(()=>v.remove(),2400),f.textContent="The raven is away. Expect a reply within one turn of the moon.",f.classList.add("sent"),setTimeout(()=>{window.location.href="mailto:jasshah9513@gmail.com"},900)})}function tm(i){const e=document.createElement("div");e.className="feather",e.style.left=18+Math.random()*64+"%",e.style.setProperty("--drift",Math.random()*90-45+"px"),e.style.setProperty("--spin",Math.random()*540-270+"deg"),e.style.animationDuration=2.6+Math.random()*2.4+"s",e.style.animationDelay=Math.random()*.7+"s",e.innerHTML=`<svg viewBox="0 0 14 34" width="11" height="27">
    <path d="M7 1 C11 9, 12 21, 7 33 C2 21, 3 9, 7 1 Z" fill="#2a2724" stroke="#4a443c" stroke-width="0.7"/>
    <path d="M7 4 L7 30" stroke="#5c5348" stroke-width="0.7"/></svg>`,i.appendChild(e),setTimeout(()=>e.remove(),5600)}function nm(i){let e=`M ${i[0][0]} ${i[0][1]}`;for(let t=0;t<i.length-1;t++){const n=i[t-1]||i[t],r=i[t],s=i[t+1],a=i[t+2]||s;e+=` C ${r[0]+(s[0]-n[0])/6} ${r[1]+(s[1]-n[1])/6}, ${s[0]-(a[0]-r[0])/6} ${s[1]-(a[1]-r[1])/6}, ${s[0]} ${s[1]}`}return e}const xa=[...document.querySelectorAll(".nav-tab")],No=document.getElementById("rune-underline"),Fo=document.getElementById("fog-transition");let Li="home";function Ma(i){const e=xa.find(r=>r.dataset.tab===i);if(!e)return;const t=e.parentElement.getBoundingClientRect(),n=e.getBoundingClientRect();No.style.left=n.left-t.left+"px",No.style.width=n.width+"px"}function Sa(i,e=!1){if(i===Li)return;const t=()=>{document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),document.getElementById("page-"+i).classList.add("active"),xa.forEach(n=>n.classList.toggle("active",n.dataset.tab===i)),Ma(i),Li=i,window.scrollTo({top:0,behavior:"instant"}),i==="terminal"&&setTimeout(()=>document.getElementById("term-input").focus(),350),window.dispatchEvent(new Event("tab:"+i))};if(e){t();return}Fo.classList.add("on"),setTimeout(()=>{t(),Fo.classList.remove("on")},320)}xa.forEach(i=>i.addEventListener("click",()=>Sa(i.dataset.tab)));document.querySelector(".nav-sigil").addEventListener("click",i=>{i.preventDefault(),Sa("home")});window.addEventListener("resize",()=>Ma(Li));Ma("home");const Tl=["backend engineer","agent builder","weekend shipper"],Ci=document.getElementById("role-type"),Oo=document.getElementById("acquire-banner"),im=document.getElementById("acquire-item");let na=0;function bl(){const i=Tl[na];im.textContent=i.replace(/\b\w/g,n=>n.toUpperCase()),Li==="home"&&window.scrollY<window.innerHeight*.6&&(Oo.classList.add("show"),setTimeout(()=>Oo.classList.remove("show"),1700));let e=0;Ci.textContent="";const t=setInterval(()=>{Ci.textContent=i.slice(0,++e),e>=i.length&&(clearInterval(t),setTimeout(rm,3400))},65)}function rm(){const i=setInterval(()=>{Ci.textContent=Ci.textContent.slice(0,-1),Ci.textContent||(clearInterval(i),na=(na+1)%Tl.length,setTimeout(bl,350))},30)}setTimeout(bl,1100);const Bo=document.getElementById("souls-value");let bi=0;const sm=setInterval(()=>{if(bi+=Math.ceil((300-bi)*.012)||1,bi>=300){bi=300,clearInterval(sm),Bo.textContent="300+";return}Bo.textContent=bi},90);window.addEventListener("scroll",()=>{document.body.classList.toggle("moonlit",Li==="home"&&window.scrollY>window.innerHeight*.9)},{passive:!0});document.addEventListener("pointerdown",i=>{if(i.target.closest(".ember-btn, .nav-tab, .hh-round, .hh-pill, .dp"))for(let t=0;t<7;t++){const n=document.createElement("div");n.className="spark",n.style.left=i.clientX+"px",n.style.top=i.clientY+"px";const r=Math.random()*Math.PI*2,s=18+Math.random()*34;n.style.setProperty("--sx",Math.cos(r)*s+"px"),n.style.setProperty("--sy",Math.sin(r)*s-22+"px"),document.body.appendChild(n),setTimeout(()=>n.remove(),750)}});ta();Wp();Yp();Kp();Jp(Sa);em();
