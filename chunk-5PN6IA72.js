import{$ as ge,C as ce,I as de,L as Z,M as y,N as K,P as w,R as p,S as D,V as X,X as le,Y as he,_ as fe,a as G,e as Y,ga as De,ha as pe,ia as J,l as oe,m as W,pa as q,q as P,w as ae,y as ue}from"./chunk-TBU7BOQM.js";var we=null;function H(){return we}function dn(n){we??=n}var me=class{};var U=new w(""),Fe=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=y({token:e,factory:()=>D(je),providedIn:"platform"});let n=e;return n})();var je=(()=>{let e=class e extends Fe{constructor(){super(),this._doc=D(U),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return H().getBaseHref(this._doc)}onPopState(t){let r=H().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=H().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,s){this._history.pushState(t,r,s)}replaceState(t,r,s){this._history.replaceState(t,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=y({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function Ae(n,e){if(n.length==0)return e;if(e.length==0)return n;let i=0;return n.endsWith("/")&&i++,e.startsWith("/")&&i++,i==2?n+e.substring(1):i==1?n+e:n+"/"+e}function ye(n){let e=n.match(/#|\?|$/),i=e&&e.index||n.length,t=i-(n[i-1]==="/"?1:0);return n.slice(0,t)+n.slice(i)}function R(n){return n&&n[0]!=="?"?"?"+n:n}var Q=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=y({token:e,factory:()=>D(Ve),providedIn:"root"});let n=e;return n})(),ze=new w(""),Ve=(()=>{let e=class e extends Q{constructor(t,r){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??D(U).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Ae(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+R(this._platformLocation.search),s=this._platformLocation.hash;return s&&t?`${r}${s}`:r}pushState(t,r,s,a){let o=this.prepareExternalUrl(s+R(a));this._platformLocation.pushState(t,r,o)}replaceState(t,r,s,a){let o=this.prepareExternalUrl(s+R(a));this._platformLocation.replaceState(t,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(r){return new(r||e)(p(Fe),p(ze,8))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ge=(()=>{let e=class e{constructor(t){this._subject=new pe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=Ze(ye(Ee(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+R(r))}normalize(t){return e.stripTrailingSlash(We(this._basePath,Ee(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",s=null){this._locationStrategy.pushState(s,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+R(r)),s)}replaceState(t,r="",s=null){this._locationStrategy.replaceState(s,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+R(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(s=>s(t,r))}subscribe(t,r,s){return this._subject.subscribe({next:t,error:r,complete:s})}};e.normalizeQueryParams=R,e.joinWithSlash=Ae,e.stripTrailingSlash=ye,e.\u0275fac=function(r){return new(r||e)(p(Q))},e.\u0275prov=y({token:e,factory:()=>Ye(),providedIn:"root"});let n=e;return n})();function Ye(){return new Ge(p(Q))}function We(n,e){if(!n||!e.startsWith(n))return e;let i=e.substring(n.length);return i===""||["/",";","?","#"].includes(i[0])?i:e}function Ee(n){return n.replace(/\/index.html$/,"")}function Ze(n){if(new RegExp("^(https?:)?//").test(n)){let[,i]=n.split(/\/\/[^\/]+/);return i}return n}function Ce(n,e){e=encodeURIComponent(e);for(let i of n.split(";")){let t=i.indexOf("="),[r,s]=t==-1?[i,""]:[i.slice(0,t),i.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var ln=(()=>{let e=class e{transform(t){return JSON.stringify(t,null,2)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=le({name:"json",type:e,pure:!1,standalone:!0});let n=e;return n})();var hn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=X({type:e}),e.\u0275inj=K({});let n=e;return n})(),fn="browser",Ke="server";function Xe(n){return n===Ke}var x=class{};var N=class{},j=class{},A=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(i=>{let t=i.indexOf(":");if(t>0){let r=i.slice(0,t),s=r.toLowerCase(),a=i.slice(t+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((i,t)=>{this.setHeaderEntries(t,i)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([i,t])=>{this.setHeaderEntries(i,t)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let i=this.headers.get(e.toLowerCase());return i&&i.length>0?i[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,i){return this.clone({name:e,value:i,op:"a"})}set(e,i){return this.clone({name:e,value:i,op:"s"})}delete(e,i){return this.clone({name:e,value:i,op:"d"})}maybeSetNormalizedName(e,i){this.normalizedNames.has(i)||this.normalizedNames.set(i,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(i=>{this.headers.set(i,e.headers.get(i)),this.normalizedNames.set(i,e.normalizedNames.get(i))})}clone(e){let i=new n;return i.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,i.lazyUpdate=(this.lazyUpdate||[]).concat([e]),i}applyUpdate(e){let i=e.name.toLowerCase();switch(e.op){case"a":case"s":let t=e.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(e.name,i);let r=(e.op==="a"?this.headers.get(i):void 0)||[];r.push(...t),this.headers.set(i,r);break;case"d":let s=e.value;if(!s)this.headers.delete(i),this.normalizedNames.delete(i);else{let a=this.headers.get(i);if(!a)return;a=a.filter(o=>s.indexOf(o)===-1),a.length===0?(this.headers.delete(i),this.normalizedNames.delete(i)):this.headers.set(i,a)}break}}setHeaderEntries(e,i){let t=(Array.isArray(i)?i:[i]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(i=>e(this.normalizedNames.get(i),this.headers.get(i)))}};var te=class{encodeKey(e){return be(e)}encodeValue(e){return be(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function qe(n,e){let i=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[a,o]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],l=i.get(a)||[];l.push(o),i.set(a,l)}),i}var He=/%(\d[a-f0-9])/gi,Qe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function be(n){return encodeURIComponent(n).replace(He,(e,i)=>Qe[i]??e)}function $(n){return`${n}`}var v=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new te,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=qe(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(i=>{let t=e.fromObject[i],r=Array.isArray(t)?t.map($):[$(t)];this.map.set(i,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let i=this.map.get(e);return i?i[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,i){return this.clone({param:e,value:i,op:"a"})}appendAll(e){let i=[];return Object.keys(e).forEach(t=>{let r=e[t];Array.isArray(r)?r.forEach(s=>{i.push({param:t,value:s,op:"a"})}):i.push({param:t,value:r,op:"a"})}),this.clone(i)}set(e,i){return this.clone({param:e,value:i,op:"s"})}delete(e,i){return this.clone({param:e,value:i,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let i=this.encoder.encodeKey(e);return this.map.get(e).map(t=>i+"="+this.encoder.encodeValue(t)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let i=new n({encoder:this.encoder});return i.cloneFrom=this.cloneFrom||this,i.updates=(this.updates||[]).concat(e),i}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let i=(e.op==="a"?this.map.get(e.param):void 0)||[];i.push($(e.value)),this.map.set(e.param,i);break;case"d":if(e.value!==void 0){let t=this.map.get(e.param)||[],r=t.indexOf($(e.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var ne=class{constructor(){this.map=new Map}set(e,i){return this.map.set(e,i),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function et(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ve(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Se(n){return typeof Blob<"u"&&n instanceof Blob}function Te(n){return typeof FormData<"u"&&n instanceof FormData}function tt(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var L=class n{constructor(e,i,t,r){this.url=i,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(et(this.method)||r?(this.body=t!==void 0?t:null,s=r):s=t,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new A,this.context??=new ne,!this.params)this.params=new v,this.urlWithParams=i;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=i;else{let o=i.indexOf("?"),l=o===-1?"?":o<i.length-1?"&":"";this.urlWithParams=i+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ve(this.body)||Se(this.body)||Te(this.body)||tt(this.body)?this.body:this.body instanceof v?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Te(this.body)?null:Se(this.body)?this.body.type||null:ve(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let i=e.method||this.method,t=e.url||this.url,r=e.responseType||this.responseType,s=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,o=e.withCredentials??this.withCredentials,l=e.reportProgress??this.reportProgress,u=e.headers||this.headers,f=e.params||this.params,E=e.context??this.context;return e.setHeaders!==void 0&&(u=Object.keys(e.setHeaders).reduce((g,F)=>g.set(F,e.setHeaders[F]),u)),e.setParams&&(f=Object.keys(e.setParams).reduce((g,F)=>g.set(F,e.setParams[F]),f)),new n(i,t,a,{params:f,headers:u,context:E,reportProgress:l,responseType:r,withCredentials:o,transferCache:s})}},S=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(S||{}),B=class{constructor(e,i=200,t="OK"){this.headers=e.headers||new A,this.status=e.status!==void 0?e.status:i,this.statusText=e.statusText||t,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},z=class n extends B{constructor(e={}){super(e),this.type=S.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},k=class n extends B{constructor(e={}){super(e),this.type=S.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},b=class extends B{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Oe=200,nt=204;function ee(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var rt=(()=>{let e=class e{constructor(t){this.handler=t}request(t,r,s={}){let a;if(t instanceof L)a=t;else{let u;s.headers instanceof A?u=s.headers:u=new A(s.headers);let f;s.params&&(s.params instanceof v?f=s.params:f=new v({fromObject:s.params})),a=new L(t,r,s.body!==void 0?s.body:null,{headers:u,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=W(a).pipe(ue(u=>this.handler.handle(u)));if(t instanceof L||s.observe==="events")return o;let l=o.pipe(ae(u=>u instanceof k));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(P(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return l.pipe(P(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return l.pipe(P(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return l.pipe(P(u=>u.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new v().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,ee(s,r))}post(t,r,s={}){return this.request("POST",t,ee(s,r))}put(t,r,s={}){return this.request("PUT",t,ee(s,r))}};e.\u0275fac=function(r){return new(r||e)(p(N))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let n=e;return n})(),it=/^\)\]\}',?\n/,st="X-Request-URL";function Re(n){if(n.url)return n.url;let e=st.toLocaleLowerCase();return n.headers.get(e)}var ot=(()=>{let e=class e{constructor(){this.fetchImpl=D(re,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=D(J)}handle(t){return new Y(r=>{let s=new AbortController;return this.doRequest(t,s.signal,r).then(ie,a=>r.error(new b({error:a}))),()=>s.abort()})}async doRequest(t,r,s){let a=this.createRequestInit(t),o;try{let m=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,G({signal:r},a)));at(m),s.next({type:S.Sent}),o=await m}catch(m){s.error(new b({error:m,status:m.status??0,statusText:m.statusText,url:t.urlWithParams,headers:m.headers}));return}let l=new A(o.headers),u=o.statusText,f=Re(o)??t.urlWithParams,E=o.status,g=null;if(t.reportProgress&&s.next(new z({headers:l,status:E,statusText:u,url:f})),o.body){let m=o.headers.get("content-length"),M=[],c=o.body.getReader(),d=0,C,I,h=typeof Zone<"u"&&Zone.current;await this.ngZone.runOutsideAngular(async()=>{for(;;){let{done:T,value:_}=await c.read();if(T)break;if(M.push(_),d+=_.length,t.reportProgress){I=t.responseType==="text"?(I??"")+(C??=new TextDecoder).decode(_,{stream:!0}):void 0;let se=()=>s.next({type:S.DownloadProgress,total:m?+m:void 0,loaded:d,partialText:I});h?h.run(se):se()}}});let O=this.concatChunks(M,d);try{let T=o.headers.get("Content-Type")??"";g=this.parseBody(t,O,T)}catch(T){s.error(new b({error:T,headers:new A(o.headers),status:o.status,statusText:o.statusText,url:Re(o)??t.urlWithParams}));return}}E===0&&(E=g?Oe:0),E>=200&&E<300?(s.next(new k({body:g,headers:l,status:E,statusText:u,url:f})),s.complete()):s.error(new b({error:g,headers:l,status:E,statusText:u,url:f}))}parseBody(t,r,s){switch(t.responseType){case"json":let a=new TextDecoder().decode(r).replace(it,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(t){let r={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((a,o)=>r[a]=o.join(",")),t.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let a=t.detectContentTypeHeader();a!==null&&(r["Content-Type"]=a)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:s}}concatChunks(t,r){let s=new Uint8Array(r),a=0;for(let o of t)s.set(o,a),a+=o.length;return s}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=y({token:e,factory:e.\u0275fac});let n=e;return n})(),re=class{};function ie(){}function at(n){n.then(ie,ie)}function ut(n,e){return e(n)}function ct(n,e,i){return(t,r)=>ge(i,()=>e(t,s=>n(s,r)))}var _e=new w(""),dt=new w(""),lt=new w("",{providedIn:"root",factory:()=>!0});var Ie=(()=>{let e=class e extends N{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=D(De),this.contributeToStability=D(lt)}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(_e),...this.injector.get(dt,[])]));this.chain=r.reduceRight((s,a)=>ct(s,a,this.injector),ut)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(ce(()=>this.pendingTasks.remove(r)))}else return this.chain(t,r=>this.backend.handle(r))}};e.\u0275fac=function(r){return new(r||e)(p(j),p(fe))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let n=e;return n})();var ht=/^\)\]\}',?\n/;function ft(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var Me=(()=>{let e=class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Z(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?oe(r.\u0275loadImpl()):W(null)).pipe(de(()=>new Y(a=>{let o=r.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((c,d)=>o.setRequestHeader(c,d.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let c=t.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(t.responseType){let c=t.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let l=t.serializeBody(),u=null,f=()=>{if(u!==null)return u;let c=o.statusText||"OK",d=new A(o.getAllResponseHeaders()),C=ft(o)||t.url;return u=new z({headers:d,status:o.status,statusText:c,url:C}),u},E=()=>{let{headers:c,status:d,statusText:C,url:I}=f(),h=null;d!==nt&&(h=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=h?Oe:0);let O=d>=200&&d<300;if(t.responseType==="json"&&typeof h=="string"){let T=h;h=h.replace(ht,"");try{h=h!==""?JSON.parse(h):null}catch(_){h=T,O&&(O=!1,h={error:_,text:h})}}O?(a.next(new k({body:h,headers:c,status:d,statusText:C,url:I||void 0})),a.complete()):a.error(new b({error:h,headers:c,status:d,statusText:C,url:I||void 0}))},g=c=>{let{url:d}=f(),C=new b({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});a.error(C)},F=!1,m=c=>{F||(a.next(f()),F=!0);let d={type:S.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),t.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),a.next(d)},M=c=>{let d={type:S.UploadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),a.next(d)};return o.addEventListener("load",E),o.addEventListener("error",g),o.addEventListener("timeout",g),o.addEventListener("abort",g),t.reportProgress&&(o.addEventListener("progress",m),l!==null&&o.upload&&o.upload.addEventListener("progress",M)),o.send(l),a.next({type:S.Sent}),()=>{o.removeEventListener("error",g),o.removeEventListener("abort",g),o.removeEventListener("load",E),o.removeEventListener("timeout",g),t.reportProgress&&(o.removeEventListener("progress",m),l!==null&&o.upload&&o.upload.removeEventListener("progress",M)),o.readyState!==o.DONE&&o.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(p(x))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let n=e;return n})(),Pe=new w(""),gt="XSRF-TOKEN",Dt=new w("",{providedIn:"root",factory:()=>gt}),pt="X-XSRF-TOKEN",mt=new w("",{providedIn:"root",factory:()=>pt}),V=class{},yt=(()=>{let e=class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ce(t,this.cookieName),this.lastCookieString=t),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(p(U),p(q),p(Dt))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let n=e;return n})();function Et(n,e){let i=n.url.toLowerCase();if(!D(Pe)||n.method==="GET"||n.method==="HEAD"||i.startsWith("http://")||i.startsWith("https://"))return e(n);let t=D(V).getToken(),r=D(mt);return t!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,t)})),e(n)}function Mn(...n){let e=[rt,Me,Ie,{provide:N,useExisting:Ie},{provide:j,useFactory:()=>D(ot,{optional:!0})??D(Me)},{provide:_e,useValue:Et,multi:!0},{provide:Pe,useValue:!0},{provide:V,useClass:yt}];for(let i of n)e.push(...i.\u0275providers);return he(e)}export{H as a,dn as b,me as c,U as d,Q as e,Ge as f,Ce as g,ln as h,hn as i,fn as j,Xe as k,x as l,rt as m,Mn as n};
