"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var f=g(function(w,s){
var v=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,n){var a,u,t;if(!v(r))throw new TypeError(i('1VxAh',r));if(!m(e))throw new TypeError(i('1Vx2H',e));for(u=r.length,t=u-1;t>=0;t--){if(a=e.call(n,r[t],t,r),a)return!1;u!==r.length&&(t+=r.length-u,u=r.length)}return!0}s.exports=h
});var o=f();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
