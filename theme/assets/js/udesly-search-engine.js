!function(){"use strict";function t(t,e,n,s,r,i,c){try{var o=t[i](c),a=o.value}catch(t){return void n(t)}o.done?e(a):Promise.resolve(a).then(s,r)}var e=function(e){return function(){var n=this,s=arguments;return new Promise((function(r,i){var c=e.apply(n,s);function o(e){t(c,r,i,o,a,"next",e)}function a(e){t(c,r,i,o,a,"throw",e)}o(void 0)}))}};function n(t){return Array.isArray?Array.isArray(t):"[object Array]"===h(t)}function s(t){return"string"==typeof t}function r(t){return"number"==typeof t}function i(t){return!0===t||!1===t||function(t){return c(t)&&null!==t}(t)&&"[object Boolean]"==h(t)}function c(t){return"object"==typeof t}function o(t){return null!=t}function a(t){return!t.trim().length}function h(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const l=Object.prototype.hasOwnProperty;class u{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=d(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function d(t){let e=null,r=null,i=null,c=1;if(s(t)||n(t))i=t,e=g(t),r=f(t);else{if(!l.call(t,"name"))throw new Error((t=>`Missing ${t} property in key`)("name"));const n=t.name;if(i=n,l.call(t,"weight")&&(c=t.weight,c<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(n));e=g(n),r=f(n)}return{path:e,id:r,weight:c,src:i}}function g(t){return n(t)?t:t.split(".")}function f(t){return n(t)?t.join("."):t}var p={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let c=[],a=!1;const h=(t,e,l)=>{if(o(t))if(e[l]){const u=t[e[l]];if(!o(u))return;if(l===e.length-1&&(s(u)||r(u)||i(u)))c.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(u));else if(n(u)){a=!0;for(let t=0,n=u.length;t<n;t+=1)h(u[t],e,l+1)}else e.length&&h(u,e,l+1)}else c.push(t)};return h(t,s(e)?e.split("."):e,0),a?c:c[0]},ignoreLocation:!1,ignoreFieldNorm:!1}};const m=/[^ ]+/g;class y{constructor({getFn:t=p.getFn}={}){this.norm=function(t=3){const e=new Map,n=Math.pow(10,t);return{get(t){const s=t.match(m).length;if(e.has(s))return e.get(s);const r=1/Math.sqrt(s),i=parseFloat(Math.round(r*n)/n);return e.set(s,i),i},clear(){e.clear()}}}(3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,s(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();s(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!o(t)||a(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let r={i:e,$:{}};this.keys.forEach(((e,i)=>{let c=this.getFn(t,e.path);if(o(c))if(n(c)){let t=[];const e=[{nestedArrIndex:-1,value:c}];for(;e.length;){const{nestedArrIndex:r,value:i}=e.pop();if(o(i))if(s(i)&&!a(i)){let e={v:i,i:r,n:this.norm.get(i)};t.push(e)}else n(i)&&i.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}r.$[i]=t}else if(!a(c)){let t={v:c,n:this.norm.get(c)};r.$[i]=t}})),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function M(t,e,{getFn:n=p.getFn}={}){const s=new y({getFn:n});return s.setKeys(t.map(d)),s.setSources(e),s.create(),s}function x(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:r=p.distance,ignoreLocation:i=p.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(s-n);return r?c+o/r:o?1:c}const v=32;function L(t,e,n,{location:s=p.location,distance:r=p.distance,threshold:i=p.threshold,findAllMatches:c=p.findAllMatches,minMatchCharLength:o=p.minMatchCharLength,includeMatches:a=p.includeMatches,ignoreLocation:h=p.ignoreLocation}={}){if(e.length>v)throw new Error(`Pattern length exceeds max of ${v}.`);const l=e.length,u=t.length,d=Math.max(0,Math.min(s,u));let g=i,f=d;const m=o>1||a,y=m?Array(u):[];let M;for(;(M=t.indexOf(e,f))>-1;){let t=x(e,{currentLocation:M,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(t,g),f=M+l,m){let t=0;for(;t<l;)y[M+t]=1,t+=1}}f=-1;let L=[],w=1,_=l+u;const S=1<<l-1;for(let s=0;s<l;s+=1){let i=0,o=_;for(;i<o;){x(e,{errors:s,currentLocation:d+o,expectedLocation:d,distance:r,ignoreLocation:h})<=g?i=o:_=o,o=Math.floor((_-i)/2+i)}_=o;let a=Math.max(1,d-o+1),p=c?u:Math.min(d+o,u)+l,M=Array(p+2);M[p+1]=(1<<s)-1;for(let i=p;i>=a;i-=1){let c=i-1,o=n[t.charAt(c)];if(m&&(y[c]=+!!o),M[i]=(M[i+1]<<1|1)&o,s&&(M[i]|=(L[i+1]|L[i])<<1|1|L[i+1]),M[i]&S&&(w=x(e,{errors:s,currentLocation:c,expectedLocation:d,distance:r,ignoreLocation:h}),w<=g)){if(g=w,f=c,f<=d)break;a=Math.max(1,2*d-f)}}if(x(e,{errors:s+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;L=M}const k={isMatch:f>=0,score:Math.max(.001,w)};if(m){const t=function(t=[],e=p.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let c=t.length;i<c;i+=1){let c=t[i];c&&-1===s?s=i:c||-1===s||(r=i-1,r-s+1>=e&&n.push([s,r]),s=-1)}return t[i-1]&&i-s>=e&&n.push([s,i-1]),n}(y,o);t.length?a&&(k.indices=t):k.isMatch=!1}return k}function w(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<s-n-1}return e}class _{constructor(t,{location:e=p.location,threshold:n=p.threshold,distance:s=p.distance,includeMatches:r=p.includeMatches,findAllMatches:i=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:o=p.isCaseSensitive,ignoreLocation:a=p.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(t,e)=>{this.chunks.push({pattern:t,alphabet:w(t),startIndex:e})},l=this.pattern.length;if(l>v){let t=0;const e=l%v,n=l-e;for(;t<n;)h(this.pattern.substr(t,v),t),t+=v;if(e){const t=l-v;h(this.pattern.substr(t),t)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:s,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:o,ignoreLocation:a}=this.options;let h=[],l=0,u=!1;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=L(t,e,d,{location:s+g,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:a});f&&(u=!0),l+=p,f&&m&&(h=[...h,...m])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=h),d}}class S{constructor(t){this.pattern=t}static isMultiMatch(t){return k(t,this.multiRegex)}static isSingleMatch(t){return k(t,this.singleRegex)}search(){}}function k(t,e){const n=t.match(e);return n?n[1]:null}class C extends S{constructor(t,{location:e=p.location,threshold:n=p.threshold,distance:s=p.distance,includeMatches:r=p.includeMatches,findAllMatches:i=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:o=p.isCaseSensitive,ignoreLocation:a=p.ignoreLocation}={}){super(t),this._bitapSearch=new _(t,{location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class I extends S{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const s=[],r=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+r,s.push([e,n-1]);const i=!!s.length;return{isMatch:i,score:i?0:1,indices:s}}}const A=[class extends S{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},I,class extends S{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends S{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends S{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends S{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends S{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},C],$=A.length,E=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;const b=new Set([C.type,I.type]);class R{constructor(t,{isCaseSensitive:e=p.isCaseSensitive,includeMatches:n=p.includeMatches,minMatchCharLength:s=p.minMatchCharLength,ignoreLocation:r=p.ignoreLocation,findAllMatches:i=p.findAllMatches,location:c=p.location,threshold:o=p.threshold,distance:a=p.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:s,findAllMatches:i,ignoreLocation:r,location:c,threshold:o,distance:a},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(E).filter((t=>t&&!!t.trim())),s=[];for(let t=0,r=n.length;t<r;t+=1){const r=n[t];let i=!1,c=-1;for(;!i&&++c<$;){const t=A[c];let n=t.isMultiMatch(r);n&&(s.push(new t(n,e)),i=!0)}if(!i)for(c=-1;++c<$;){const t=A[c];let n=t.isSingleMatch(r);if(n){s.push(new t(n,e));break}}}return s}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let r=0,i=[],c=0;for(let s=0,o=e.length;s<o;s+=1){const o=e[s];i.length=0,r=0;for(let e=0,s=o.length;e<s;e+=1){const s=o[e],{isMatch:a,indices:h,score:l}=s.search(t);if(!a){c=0,r=0,i.length=0;break}if(r+=1,c+=l,n){const t=s.constructor.type;b.has(t)?i=[...i,...h]:i.push(h)}}if(r){let t={isMatch:!0,score:c/r};return n&&(t.indices=i),t}}return{isMatch:!1,score:1}}}const F=[];function O(t,e){for(let n=0,s=F.length;n<s;n+=1){let s=F[n];if(s.condition(t,e))return new s(t,e)}return new _(t,e)}const j="$and",q="$or",T="$path",N="$val",P=t=>!(!t[j]&&!t[q]),U=t=>({[j]:Object.keys(t).map((e=>({[e]:t[e]})))});function z(t,e,{auto:r=!0}={}){const i=t=>{let o=Object.keys(t);const a=(t=>!!t[T])(t);if(!a&&o.length>1&&!P(t))return i(U(t));if((t=>!n(t)&&c(t)&&!P(t))(t)){const n=a?t[T]:o[0],i=a?t[N]:t[n];if(!s(i))throw new Error((t=>"Invalid value for key "+t)(n));const c={keyId:f(n),pattern:i};return r&&(c.searcher=O(i,e)),c}let h={children:[],operator:o[0]};return o.forEach((e=>{const s=t[e];n(s)&&s.forEach((t=>{h.children.push(i(t))}))})),h};return P(t)||(t=U(t)),i(t)}function K(t,e){const n=t.matches;e.matches=[],o(n)&&n.forEach((t=>{if(!o(t.indices)||!t.indices.length)return;const{indices:n,value:s}=t;let r={indices:n,value:s};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)}))}function D(t,e){e.score=t.score}class W{constructor(t,e={},n){this.options={...p,...e},this.options.useExtendedSearch,this._keyStore=new u(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof y))throw new Error("Incorrect 'index' type");this._myIndex=e||M(this.options.keys,this._docs,{getFn:this.options.getFn})}add(t){o(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,s=this._docs.length;n<s;n+=1){const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,s-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:c,sortFn:o,ignoreFieldNorm:a}=this.options;let h=s(t)?s(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=p.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:s,score:r})=>{const i=t?t.weight:null;n*=Math.pow(0===r&&i?Number.EPSILON:r,(i||1)*(e?1:s))})),t.score=n}))}(h,{ignoreFieldNorm:a}),c&&h.sort(o),r(e)&&e>-1&&(h=h.slice(0,e)),function(t,e,{includeMatches:n=p.includeMatches,includeScore:s=p.includeScore}={}){const r=[];return n&&r.push(K),s&&r.push(D),t.map((t=>{const{idx:n}=t,s={item:e[n],refIndex:n};return r.length&&r.forEach((e=>{e(t,s)})),s}))}(h,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(t){const e=O(t,this.options),{records:n}=this._myIndex,s=[];return n.forEach((({v:t,i:n,n:r})=>{if(!o(t))return;const{isMatch:i,score:c,indices:a}=e.searchIn(t);i&&s.push({item:t,idx:n,matches:[{score:c,value:t,norm:r,indices:a}]})})),s}_searchLogical(t){const e=z(t,this.options),n=(t,e,s)=>{if(!t.children){const{keyId:n,searcher:r}=t,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:r});return i&&i.length?[{idx:s,item:e,matches:i}]:[]}switch(t.operator){case j:{const r=[];for(let i=0,c=t.children.length;i<c;i+=1){const c=t.children[i],o=n(c,e,s);if(!o.length)return[];r.push(...o)}return r}case q:{const r=[];for(let i=0,c=t.children.length;i<c;i+=1){const c=t.children[i],o=n(c,e,s);if(o.length){r.push(...o);break}}return r}}},s=this._myIndex.records,r={},i=[];return s.forEach((({$:t,i:s})=>{if(o(t)){let c=n(e,t,s);c.length&&(r[s]||(r[s]={idx:s,item:t,matches:[]},i.push(r[s])),c.forEach((({matches:t})=>{r[s].matches.push(...t)})))}})),i}_searchObjectList(t){const e=O(t,this.options),{keys:n,records:s}=this._myIndex,r=[];return s.forEach((({$:t,i:s})=>{if(!o(t))return;let i=[];n.forEach(((n,s)=>{i.push(...this._findMatches({key:n,value:t[s],searcher:e}))})),i.length&&r.push({idx:s,item:t,matches:i})})),r}_findMatches({key:t,value:e,searcher:s}){if(!o(e))return[];let r=[];if(n(e))e.forEach((({v:e,i:n,n:i})=>{if(!o(e))return;const{isMatch:c,score:a,indices:h}=s.searchIn(e);c&&r.push({score:a,key:t,value:e,idx:n,norm:i,indices:h})}));else{const{v:n,n:i}=e,{isMatch:c,score:o,indices:a}=s.searchIn(n);c&&r.push({score:o,key:t,value:n,norm:i,indices:a})}return r}}function H(){try{return new Date(document.head.querySelector("meta[http-equiv=last-modified]").content).getTime()}catch(t){try{return new Date(document.lastModified).getTime()}catch(t){return(new Date).getTime()}}}W.version="6.4.6",W.createIndex=M,W.parseIndex=function(t,{getFn:e=p.getFn}={}){const{keys:n,records:s}=t,r=new y({getFn:e});return r.setKeys(n),r.setIndexRecords(s),r},W.config=p,W.parseQuery=z,function(...t){F.push(...t)}(R);class J{constructor(t){this.name=t}open(){var t=this;return e((function*(){t.cache=yield caches.open(t.name)}))()}addUrlToCache(t){var n=this;return e((function*(){var e=yield fetch(t),s=yield e.text();return yield n.addResourceToCache(t,s),new Response(s)}))()}getFromCache(t){var n=arguments,s=this;return e((function*(){var e=n.length>1&&void 0!==n[1]?n[1]:H();s.cache||(yield s.open());var r=yield s.cache.match(t);return r&&r.headers.get("cached-on")>e.toString()?r:null}))()}getCachedOrLiveURL(t){var n=arguments,s=this;return e((function*(){var e=n.length>1&&void 0!==n[1]?n[1]:H(),r=yield s.getFromCache(t,e);return r?(console.log("Loaded from cache",t),r):yield s.addUrlToCache(t,e)}))()}addResourceToCache(t,n){var s=this;return e((function*(){s.cache||(yield s.open());var e=new Headers;e.append("cached-on",(new Date).getTime().toString()),yield s.cache.put(t,new Response(n,{headers:e}))}))()}}function V(){return(V=e((function*(){var t=new J("search");return yield t.getCachedOrLiveURL("/_data/search-index.json")}))).apply(this,arguments)}class B{constructor(t,e){this.wrapper=t,this.empty=this.wrapper.querySelector('[data-search-node="empty"]'),this.resultsList=this.wrapper.querySelector('[data-search-node="results"]'),0===e.length?(this.empty.style.display="",this.resultsList.style.display="none"):(this.empty.style.display="none",this.template=this.resultsList.querySelector("template").content.firstElementChild.outerHTML,this.resultsList.innerHTML=e.reduce(((t,e)=>t+=this.getTemplate(e)),""))}getTemplate(t){var e=t.item,n=e.url,s=e.title,r=e.f_excerpt||e.f_summary||e.f_description||e.excerpt||e.title;return this.template.replace(/\{#url#\}/gm,n).replace(/\{#title#\}/gm,s).replace(/\{#content#\}/gm,r)}}var Q;(Q=e((function*(){var t=yield function(){return V.apply(this,arguments)}(),{data:e,index:n}=yield t.json(),s=new W(e,{keys:["title","slug","f_title","tags","f_description","summary","f_summary","excerpt","f_excerpt"],threshold:.15},W.parseIndex(n)).search(new URLSearchParams(window.location.search).get("query")||null);document.querySelectorAll('[data-search-node="wrapper"]').forEach((t=>new B(t,s))),document.querySelectorAll(".search-loading").forEach((t=>{t.classList.replace("search-loading","search-loaded")}))})),function(){return Q.apply(this,arguments)})()}();
