// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=t,s=e,i=r;var l=function(t,e,r){var l,o;if(!n(t))throw new TypeError(i("invalid argument. First argument must be a collection. Value: `%s`.",t));if(!s(e))throw new TypeError(i("invalid argument. Second argument must be a function. Value: `%s`.",e));for(o=(l=t.length)-1;o>=0;o--){if(e.call(r,t[o],o,t))return!1;l!==t.length&&(o+=t.length-l,l=t.length)}return!0};export{l as default};
//# sourceMappingURL=index.mjs.map
