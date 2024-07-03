/*! For license information please see 4335.0ba34387f4533ef5.js.LICENSE.txt */
"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[4335,7560,2389,1686],{7560:(e,t,r)=>{function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},i.apply(this,arguments)}r.d(t,{Z:()=>i})},74335:(e,t,r)=>{r.r(t),r.d(t,{pmConsole:()=>m});var i=r(29875),n=r(60398),s=r(7560);const a=new Set(["iso-2022-cn","iso-2022-cn-ext"]),o="utf-16",c="utf-16be",u=254,_=255,l={first:e=>e?e[0]:void 0,last:e=>e?e.at(-1):void 0,get:(e,t)=>{const r=r=>String.prototype.split.call(t,r).filter(Boolean).reduce(((e,t)=>null!=e?e[t]:e),e),i=r(/[,[\]]+?/)||r(/[,.[\]]+?/);return void 0===i||i===e?void 0:i},has:(e,t)=>{const r=t.split(".");return!!e&&(r.length>1?l.has(e[t.split(".")[0]],r.slice(1).join(".")):Object.prototype.hasOwnProperty.call(e,t))}};function d(e,t){if(a.has(t))return"";t===o&&e.length>=2&&e[0]===u&&e[1]===_&&(t=c);try{return new TextDecoder(t||"utf8").decode(e)}catch(t){return new TextDecoder("utf8").decode(e)}}const f={UNSPECIFIED:"Unspecified certificate verification error",UNABLE_TO_GET_ISSUER_CERT:"Unable to get issuer certificate",UNABLE_TO_GET_CRL:"Unable to get certificate CRL",UNABLE_TO_DECRYPT_CERT_SIGNATURE:"Unable to decrypt certificate's signature",UNABLE_TO_DECRYPT_CRL_SIGNATURE:"Unable to decrypt CRL's signature",UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY:"Unable to decode issuer public key",CERT_SIGNATURE_FAILURE:"Certificate signature failure",CRL_SIGNATURE_FAILURE:"CRL signature failure",CERT_NOT_YET_VALID:"Certificate is not yet valid",CERT_HAS_EXPIRED:"Certificate has expired",CRL_NOT_YET_VALID:"CRL is not yet valid",CRL_HAS_EXPIRED:"CRL has expired",ERROR_IN_CERT_NOT_BEFORE_FIELD:"Format error in certificate's notBefore field",ERR_TLS_CERT_ALTNAME_INVALID:"Hostname/IP does not match certificate's altnames",ERROR_IN_CERT_NOT_AFTER_FIELD:"Format error in certificate's notAfter field",ERROR_IN_CRL_LAST_UPDATE_FIELD:"Format error in CRL's lastUpdate field",ERROR_IN_CRL_NEXT_UPDATE_FIELD:"Format error in CRL's nextUpdate field",OUT_OF_MEM:"Out of memory",DEPTH_ZERO_SELF_SIGNED_CERT:"Self signed certificate",SELF_SIGNED_CERT_IN_CHAIN:"Self signed certificate in certificate chain",UNABLE_TO_GET_ISSUER_CERT_LOCALLY:"Unable to get local issuer certificate",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"Unable to verify the first certificate",CERT_CHAIN_TOO_LONG:"Certificate chain too long",CERT_REVOKED:"Certificate revoked",INVALID_CA:"Invalid CA certificate",PATH_LENGTH_EXCEEDED:"Path length constraint exceeded",INVALID_PURPOSE:"Unsupported certificate purpose",CERT_UNTRUSTED:"Certificate not trusted",CERT_REJECTED:"Certificate rejected",SUBJECT_ISSUER_MISMATCH:"Subject issuer mismatch",AKID_SKID_MISMATCH:"Authority and subject key identifier mismatch",AKID_ISSUER_SERIAL_MISMATCH:"Authority and issuer serial number mismatch",KEYUSAGE_NO_CERTSIGN:"Key usage does not include certificate signing",UNABLE_TO_GET_CRL_ISSUER:"Unable to get CRL issuer certificate",UNHANDLED_CRITICAL_EXTENSION:"Unhandled critical extension",KEYUSAGE_NO_CRL_SIGN:"Key usage does not include CRL signing",UNHANDLED_CRITICAL_CRL_EXTENSION:"Unhandled critical CRL extension",INVALID_NON_CA:"Invalid non-CA certificate (has CA markings)",PROXY_PATH_LENGTH_EXCEEDED:"Proxy path length constraint exceeded",KEYUSAGE_NO_DIGITAL_SIGNATURE:"Key usage does not include digital signature",PROXY_CERTIFICATES_NOT_ALLOWED:"Proxy certificates not allowed, please set the appropriate flag",INVALID_EXTENSION:"Invalid or inconsistent certificate extension",INVALID_POLICY_EXTENSION:"Invalid or inconsistent certificate policy extension",NO_EXPLICIT_POLICY:"No explicit policy",DIFFERENT_CRL_SCOPE:"Different CRL scope",UNSUPPORTED_EXTENSION_FEATURE:"Unsupported extension feature",UNNESTED_RESOURCE:"RFC 3779 resource not subset of parent's resources",PERMITTED_VIOLATION:"Permitted subtree violation",EXCLUDED_VIOLATION:"Excluded subtree violation",SUBTREE_MINMAX:"Name constraints minimum and maximum not supported",APPLICATION_VERIFICATION:"Application verification failure",UNSUPPORTED_CONSTRAINT_TYPE:"Unsupported name constraint type",UNSUPPORTED_CONSTRAINT_SYNTAX:"Unsupported or invalid name constraint syntax",UNSUPPORTED_NAME_SYNTAX:"Unsupported or invalid name syntax",CRL_PATH_VALIDATION_ERROR:"CRL path validation error",PATH_LOOP:"Path Loop",SUITE_B_INVALID_VERSION:"Suite B: certificate version invalid",SUITE_B_INVALID_ALGORITHM:"Suite B: invalid public key algorithm",SUITE_B_INVALID_CURVE:"Suite B: invalid ECC curve",SUITE_B_INVALID_SIGNATURE_ALGORITHM:"Suite B: invalid signature algorithm",SUITE_B_LOS_NOT_ALLOWED:"Suite B: curve not allowed for this LOS",SUITE_B_CANNOT_SIGN_P_384_WITH_P_256:"Suite B: cannot sign P-384 with P-256",HOSTNAME_MISMATCH:"Hostname mismatch",EMAIL_MISMATCH:"Email address mismatch",IP_ADDRESS_MISMATCH:"IP address mismatch",DANE_NO_MATCH:"No matching DANE TLSA records",EE_KEY_TOO_SMALL:"EE certificate key too weak",CA_KEY_TOO_SMALL:"CA certificate key too weak",CA_MD_TOO_WEAK:"CA signature digest algorithm too weak",INVALID_CALL:"Invalid certificate verification context",STORE_LOOKUP:"Issuer certificate lookup error",NO_VALID_SCTS:"Certificate Transparency required, but no valid SCTs found",PROXY_SUBJECT_NAME_VIOLATION:"Proxy subject name violation",OCSP_VERIFY_NEEDED:"OCSP verification needed",OCSP_VERIFY_FAILED:"OCSP verification failed",OCSP_CERT_UNKNOWN:"OCSP unknown cert"};var E=r(52963).Buffer,p=function(e,t){var r={undefined:"u",number:"n",bigint:"b",symbol:"s",Map:"M",Set:"S",Date:"D",RegExp:"R",Buffer:"B",Int8Array:"H",Uint8Array:"I",Uint8ClampedArray:"J",Int16Array:"P",Uint16Array:"Q",Int32Array:"F",Uint32Array:"G",Float32Array:"K",Float64Array:"L"},i={parse:function(e,t){var r=JSON.parse(e,u).map(c),i=r.length,o=i>1?r[i-1]:[],_=r[0],l=t||n,d="object"==typeof _&&_?a(r,o,new Set,_,l):"_0"===_&&o.length?s(o,0):_;return l.call({"":d},"",d)},stringify:function(s,a,c){for(var u,_=new Map,l=new Map,d=[],f=[],p=[],y=a&&typeof a==typeof f?function(e,t){if(""===e||a.indexOf(e)>-1)return t}:a||n,A=+o(_,f,y.call({"":s},"",s)),I=function(n,s){var a=y.call(this,n,s),c=function(t,n,s,a,o){var c,u;switch(typeof a){case"string":o[s]instanceof Date&&(c=r.Date+a);break;case"undefined":c=r.undefined;break;case"number":Number.isFinite(a)||(c=r.number+e(a));break;case"bigint":c=r.bigint+e(a);break;case"symbol":var _=e(a);c=r.symbol+_.substring(7,_.length-1);break;case"object":if(null===a)break;if("Buffer"===a.type&&a.data&&E.isBuffer(o[s]))c=r.Buffer+JSON.stringify(a.data);else if(a instanceof RegExp)c=r.RegExp+e(a);else if(a instanceof Map){var l=[];for(u of a.entries())l.push(u);c=r.Map+i.stringify(l)}else if(a instanceof Set){var d=[];for(u of a.values())d.push(u);c=r.Set+i.stringify(d)}else a instanceof Int8Array?c=r.Int8Array+JSON.stringify(Array.apply([],a)):a instanceof Uint8Array?c=r.Uint8Array+JSON.stringify(Array.apply([],a)):a instanceof Uint8ClampedArray?c=r.Uint8ClampedArray+JSON.stringify(Array.apply([],a)):a instanceof Int16Array?c=r.Int16Array+JSON.stringify(Array.apply([],a)):a instanceof Uint16Array?c=r.Uint16Array+JSON.stringify(Array.apply([],a)):a instanceof Int32Array?c=r.Int32Array+JSON.stringify(Array.apply([],a)):a instanceof Uint32Array?c=r.Uint32Array+JSON.stringify(Array.apply([],a)):a instanceof Float32Array?c=r.Float32Array+JSON.stringify(Array.apply([],a)):a instanceof Float64Array&&(c=r.Float64Array+JSON.stringify(Array.apply([],a)))}if(c){var f=t.get(c);return f||(f="_"+e(n.push(c)-1),t.set(c,f),f)}}(l,d,n,a,this);if(c)return c;if(u)return u=!u,s;switch(typeof a){case"object":if(null===a)return a;case t:return _.get(a)||o(_,f,a)}return a};A<f.length;A++)u=!0,p[A]=JSON.stringify(f[A],I,c);return d.length&&p.push(JSON.stringify(d)),"["+p.join(",")+"]"}};return i;function n(e,t){return t}function s(e,t){var n=e[t].substring(1);switch(e[t].charAt(0)){case r.undefined:e[t]=void 0;break;case r.number:e[t]=Number(n);break;case r.bigint:e[t]=BigInt(n);break;case r.symbol:e[t]=Symbol.for(n);break;case r.RegExp:var s=/\/(.*)\/(.*)/.exec(n);e[t]=new RegExp(s[1],s[2]);break;case r.Buffer:e[t]=E.from(JSON.parse(n));break;case r.Date:e[t]=new Date(n);break;case r.Map:e[t]=new Map(i.parse(n));break;case r.Set:e[t]=new Set(i.parse(n));break;case r.Int8Array:e[t]=new Int8Array(JSON.parse(n));break;case r.Uint8Array:e[t]=new Uint8Array(JSON.parse(n));break;case r.Uint8ClampedArray:e[t]=new Uint8ClampedArray(JSON.parse(n));break;case r.Int16Array:e[t]=new Int16Array(JSON.parse(n));break;case r.Uint16Array:e[t]=new Uint16Array(JSON.parse(n));break;case r.Int32Array:e[t]=new Int32Array(JSON.parse(n));break;case r.Uint32Array:e[t]=new Uint32Array(JSON.parse(n));break;case r.Float32Array:e[t]=new Float32Array(JSON.parse(n));break;case r.Float64Array:e[t]=new Float64Array(JSON.parse(n))}return e[t]}function a(t,r,i,n,o){return Object.keys(n).reduce((function(n,c){var u=n[c];if(u instanceof e){if(u.startsWith("_")){var _=u.substring(1);return r[_]instanceof e&&s(r,_),n[c]=r[_],n}var l=t[u];"object"!=typeof l||i.has(l)?n[c]=o.call(n,c,l):(i.add(l),n[c]=o.call(n,c,a(t,r,i,l,o)))}else n[c]=o.call(n,c,u);return n}),n)}function o(t,r,i){var n=e(r.push(i)-1);return t.set(i,n),n}function c(t){return t instanceof e?e(t):t}function u(r,i){return typeof i===t?new e(i):i}}(String,"string"),y=p.parse;p.stringify;const A=5242880,I=new Set(["video","audio","image","embed"]);function g(e){if("stream"in e){if(e.stream instanceof ArrayBuffer)return d(new Uint8Array(e.stream),e.contentInfo.charset);if(e.stream instanceof Uint8Array)return d(e.stream,e.contentInfo.charset)}return""}function h(e,t){return"httpVersion"in e?e.httpVersion:"stream"in e?l.get(l.last(t),"response.httpVersion")||"":l.get(l.first(t),"request.httpVersion")||""}function S(e){return"url"in e&&"object"==typeof e.url?function({protocol:e,host:t,path:r,query:i}){const n=new URLSearchParams((i||[]).map((({key:e,value:t})=>[e,t]))).toString();return`${e||""}${Array.isArray(t)?`://${t.join(".")}`:""}${Array.isArray(r)?`/${r.join("/")}`:""}${n.length>0?`?${n}`:""}`}(e.url):e.href||""}function T(e,t){return"httpVersion"in e?e.httpVersion:l.get(l.first(t),"request.httpVersion")||""}function N(e){return e.body?{body:e.body}:{}}function C(e){return"responseTime"in e&&e.responseTime||0}class O{constructor(){this._items=[]}clear(){this._items=[]}enqueue(e){var t=this;this._items.push((async function(){await e(),t._items.length>0&&(t._items.shift(),t._items.length>0&&t._items[0]())})),1==this._items.length&&this._items[0]()}}var R=r(21466);const m=new class{constructor(e,t){this._sequence=0,this._timelineId="default-timeline",this._queue=new O,this._storage=e,this.blobData=t}getTimelineId(){return this._timelineId}write(e,t,r,i,a=Date.now()){var o=this;const c={id:(0,n.v4)(),timeline:this._timelineId,sequence:this._sequence++,timestamp:a,type:t,severity:e,source:r||void 0,details:i},u=this.getTimelineId();"log"===t&&"clear"===e?this._queue.enqueue((async function(){await o._storage.set(u,[c])})):this._queue.enqueue((async function(){const e=await o._storage.get(u)||[],t=await Promise.all((r=c,"log"===r.type&&"clear"===r.severity?[r]:"network"===r.type?function(e){var t;const r=function(e){const t=e.details.request.headers;return Array.isArray(t)&&(e.details.request.headers=t.filter((e=>!e.disabled))),e}((0,s.Z)({},e));if("error"===r.severity||r.details&&r.details.browserRequest)return[r];const{data:i,sessions:n}=(null==(t=r.details.history)?void 0:t.execution)||{};return Array.isArray(i)?i.map(((e,t)=>((e=(0,s.Z)({},e)).session.id&&n?(e.session=n[e.session.id],e.session||(e.session={session:"A previous session was reused"})):e.session={session:"A previous session was reused"},t===i.length-1?(e.request=(0,s.Z)({},e.request,r.details.request),e.response=(0,s.Z)({},e.response,r.details.response),e.indirect=r.details.indirect,e.warning=r.details.warning,e.agentUsed=r.details.agentUsed||"vscode"):e.redirect=!0,(0,s.Z)({},r,{id:`${r.id}-${t}`,details:e})))):[e]}(r):"log"===r.type?function(e){try{e.details=y(e.details)}catch(e){}return[e]}(r):[r]).map((async function(e){return"network"===e.type?await async function(e,t){let r,i;if(t.details.request.body&&"raw"===t.details.request.body.mode&&!("___ignored___"in t.details.request.body)){const e=t.details.request.body.raw,r=t.details.request.body.options;e.length>A?(i={id:`${t.id}-request`,data:e.slice(0,Math.max(0,A))},t.details.request.body={___truncated___:!0,___ignored___:!0,blobId:i.id,mode:"raw",options:r}):e.length>10240&&(i={id:`${t.id}-request`,data:e},t.details.request.body={___ignored___:!0,blobId:i.id,mode:"raw",options:r})}if(t.details.response){var n;const e=(null==(n=t.details.response)||null==(n=n.contentInfo)?void 0:n.mimeFormat)||"";if(I.has(e))t.details.response.body={___unsupported___:!0};else{const e=t.details.response.body||"";e.length>A?(r={id:`${t.id}-response`,data:e.slice(0,A)},t.details.response.body={___truncated___:!0,___ignored___:!0,blobId:r.id}):e.length>10240&&(r={id:`${t.id}-response`,data:e},t.details.response.body={___ignored___:!0,blobId:r.id})}}return i&&await e.push(i),r&&await e.push(r),t}(o.blobData,e):c})));var r;await o._storage.set(u,[...e,...t])}))}error(e,t,r){return this.write("error",e,t,r)}info(e,t,r){return this.write("info",e,t,r)}log(e,t,r){return this.write("log",e,t,r)}warn(e,t,r){return this.write("warn",e,t,r)}clear(){this._queue.clear(),this._queue.enqueue((()=>this._storage.set(this.getTimelineId(),[])))}logRequest(e){e&&e.request&&function(e,t){var r;const i=null==(r=t.history)||null==(r=r.execution)?void 0:r.data,n={agentUsed:"vscode",request:(0,s.Z)({},t.request,{url:S(t.request),headers:(a=t.request,"header"in a?a.header:a.headers)},"body"in t.request&&N(t.request),{httpVersion:T(t.request,i)})};var a,o;if(l.has(t.cursor,"scriptId")&&(n.indirect="request"),t.indirect&&(n.indirect=t.indirect),t.history&&(n.history=t.history),t.response&&(n.response=(0,s.Z)({headers:t.response.headers,statusCode:(o=t.response,"statusCode"in o?`${o.statusCode} ${o.statusMessage}`:String(o.code)),httpVersion:h(t.response,i),body:g(t.response),responseTime:C(t.response)},"contentInfo"in t.response&&{contentInfo:t.response.contentInfo})),t.error)return n.error={name:t.error.name,message:t.error.message},e.error("network",{cloud:t.cloud},n);if(t.history){const r=function(e){const t=e.execution.data,r=t&&l.last(t),i=l.get(e,["execution","sessions",l.get(r,"session.id")]);return!1===l.get(i,"tls.authorized")?("string"!=typeof(n=l.get(i,"tls.authorizationError"))?"Certificate verification failed":f[n]||n)||"Certificate verification failed":null;var n}(t.history);if(r)return n.warning=r,e.warn("network",{cloud:t.cloud},n)}e.log("network",{cloud:t.cloud},n)}(this,e)}logConsole(e){e&&e.messages&&e.level&&this.write(e.level,"log",{cloud:e.cloud},e.messages)}logException(e){e&&e.error&&this.error("exception",{cloud:e.cloud},e.error)}getAllLogs(){return this._storage.get(this.getTimelineId())}reveal(){return R.VSCodeCommunicationsService.postMessageToExtension({type:"REVEAL_CONSOLE",payload:void 0})}}(new i.InMemoryKVStorage("Console"),new class{constructor(e){this._storage=e}async push(e){return this._storage.set(e.id,e.data)}async remove(e){return this._storage.remove(e.id)}async get(e){return this._storage.get(e.id)}}(new i.InMemoryKVStorage("ConsoleBlob")))}}]);
//# sourceMappingURL=4335.0ba34387f4533ef5.js.map