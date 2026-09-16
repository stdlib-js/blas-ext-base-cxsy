"use strict";var y=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(n){throw (t=0, n)}};};var p=y(function(I,l){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist'),o=5;function h(v,t,n,q,s,j,g){var i,e,a,r,x,c,f,u;if(v<=0)return s;if(i=d(t,0),e=d(s,0),a=q*2,r=g*2,x=n*2,c=j*2,n===1&&j===1){if(f=v%o,f>0)for(u=0;u<f;u++)e[r]=i[a]-e[r],e[r+1]=i[a+1]-e[r+1],a+=x,r+=c;if(v<o)return s;for(u=f;u<v;u+=o)e[r]=i[a]-e[r],e[r+1]=i[a+1]-e[r+1],e[r+2]=i[a+2]-e[r+2],e[r+3]=i[a+3]-e[r+3],e[r+4]=i[a+4]-e[r+4],e[r+5]=i[a+5]-e[r+5],e[r+6]=i[a+6]-e[r+6],e[r+7]=i[a+7]-e[r+7],e[r+8]=i[a+8]-e[r+8],e[r+9]=i[a+9]-e[r+9],a+=o*2,r+=o*2;return s}for(u=0;u<v;u++)e[r]=i[a]-e[r],e[r+1]=i[a+1]-e[r+1],a+=x,r+=c;return s}l.exports=h
});var _=y(function(J,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),k=p();function z(v,t,n,q,s){return k(v,t,n,w(v,n),q,s,w(v,s))}R.exports=z
});var O=y(function(K,M){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=p();A(E,"ndarray",B);M.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),m,b=D(C(__dirname,"./native.js"));F(b)?m=G:m=b;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
