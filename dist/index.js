"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=g(function(w,i){
var v=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-function/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e,f){var n,u,t;if(!v(r))throw new TypeError(a('1VxAh',r));if(!m(e))throw new TypeError(a('1Vx2H',e));for(u=r.length,t=u-1;t>=0;t--){if(n=e.call(f,r[t],t,r),n)return!1;u!==r.length&&(t+=r.length-u,u=r.length)}return!0}i.exports=h
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
