let e,t;function n(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var r,i,s,a,o,l,u,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},h={},d={},f=c.parcelRequiree588;null==f&&((f=function(e){if(e in h)return h[e].exports;if(e in d){var t=d[e];delete d[e];var n={id:e,exports:{}};return h[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){d[e]=t},c.parcelRequiree588=f),f.register("1b2ls",function(e,t){n(e.exports,"Fragment",()=>r,e=>r=e),n(e.exports,"jsx",()=>i,e=>i=e),n(e.exports,"jsxs",()=>s,e=>s=e);var r,i,s,a=f("acw62"),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:c.current}}r=l,i=d,s=d}),f.register("acw62",function(e,t){e.exports=f("2pUnB")}),f.register("2pUnB",function(e,t){n(e.exports,"Children",()=>r,e=>r=e),n(e.exports,"Component",()=>i,e=>i=e),n(e.exports,"Fragment",()=>s,e=>s=e),n(e.exports,"Profiler",()=>a,e=>a=e),n(e.exports,"PureComponent",()=>o,e=>o=e),n(e.exports,"StrictMode",()=>l,e=>l=e),n(e.exports,"Suspense",()=>u,e=>u=e),n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),n(e.exports,"cloneElement",()=>h,e=>h=e),n(e.exports,"createContext",()=>d,e=>d=e),n(e.exports,"createElement",()=>f,e=>f=e),n(e.exports,"createFactory",()=>p,e=>p=e),n(e.exports,"createRef",()=>m,e=>m=e),n(e.exports,"forwardRef",()=>g,e=>g=e),n(e.exports,"isValidElement",()=>y,e=>y=e),n(e.exports,"lazy",()=>v,e=>v=e),n(e.exports,"memo",()=>w,e=>w=e),n(e.exports,"startTransition",()=>b,e=>b=e),n(e.exports,"unstable_act",()=>_,e=>_=e),n(e.exports,"useCallback",()=>E,e=>E=e),n(e.exports,"useContext",()=>S,e=>S=e),n(e.exports,"useDebugValue",()=>k,e=>k=e),n(e.exports,"useDeferredValue",()=>T,e=>T=e),n(e.exports,"useEffect",()=>I,e=>I=e),n(e.exports,"useId",()=>C,e=>C=e),n(e.exports,"useImperativeHandle",()=>N,e=>N=e),n(e.exports,"useInsertionEffect",()=>x,e=>x=e),n(e.exports,"useLayoutEffect",()=>R,e=>R=e),n(e.exports,"useMemo",()=>A,e=>A=e),n(e.exports,"useReducer",()=>P,e=>P=e),n(e.exports,"useRef",()=>D,e=>D=e),n(e.exports,"useState",()=>O,e=>O=e),n(e.exports,"useSyncExternalStore",()=>L,e=>L=e),n(e.exports,"useTransition",()=>M,e=>M=e),n(e.exports,"version",()=>U,e=>U=e);var r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,w,b,_,E,S,k,T,I,C,N,x,R,A,P,D,O,L,M,U,F=Symbol.for("react.element"),V=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var en=et.prototype=new ee;en.constructor=et,Y(en,Z.prototype),en.isPureReactComponent=!0;var er=Array.isArray,ei=Object.prototype.hasOwnProperty,es={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function eo(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)ei.call(t,r)&&!ea.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:F,type:e,key:s,ref:a,props:i,_owner:es.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function eh(e,t,n){if(null==e)return e;var r=[],i=0;return function e(t,n,r,i,s){var a,o,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case F:case V:c=!0}}if(c)return s=s(c=t),t=""===i?"."+ec(c,0):i,er(s)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(s,n,r,"",function(e){return e})):null!=s&&(el(s)&&(a=s,o=r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(eu,"$&/")+"/")+t,s={$$typeof:F,type:a.type,key:o,ref:a.ref,props:a.props,_owner:a._owner}),n.push(s)),1;if(c=0,i=""===i?".":i+":",er(t))for(var h=0;h<t.length;h++){var d=i+ec(u=t[h],h);c+=e(u,n,r,d,s)}else if("function"==typeof(d=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=Q&&l[Q]||l["@@iterator"])?l:null))for(t=d.call(t),h=0;!(u=t.next()).done;)d=i+ec(u=u.value,h++),c+=e(u,n,r,d,s);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function ed(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ef={current:null},ep={transition:null};r={map:eh,forEach:function(e,t,n){eh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eh(e,function(){t++}),t},toArray:function(e){return eh(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=z,a=B,o=et,l=j,u=W,c={ReactCurrentDispatcher:ef,ReactCurrentBatchConfig:ep,ReactCurrentOwner:es},h=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=es.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)ei.call(t,l)&&!ea.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==o?o[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:F,type:e.type,key:i,ref:s,props:r,_owner:a}},d=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:$,_context:e},e.Consumer=e},f=eo,p=function(e){var t=eo.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:q,render:e}},y=el,v=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:ed}},w=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},b=function(e){var t=ep.transition;ep.transition={};try{e()}finally{ep.transition=t}},_=function(){throw Error("act(...) is not supported in production builds of React.")},E=function(e,t){return ef.current.useCallback(e,t)},S=function(e){return ef.current.useContext(e)},k=function(){},T=function(e){return ef.current.useDeferredValue(e)},I=function(e,t){return ef.current.useEffect(e,t)},C=function(){return ef.current.useId()},N=function(e,t,n){return ef.current.useImperativeHandle(e,t,n)},x=function(e,t){return ef.current.useInsertionEffect(e,t)},R=function(e,t){return ef.current.useLayoutEffect(e,t)},A=function(e,t){return ef.current.useMemo(e,t)},P=function(e,t,n){return ef.current.useReducer(e,t,n)},D=function(e){return ef.current.useRef(e)},O=function(e){return ef.current.useState(e)},L=function(e,t,n){return ef.current.useSyncExternalStore(e,t,n)},M=function(){return ef.current.useTransition()},U="18.2.0"}),f.register("Xw6Mv",function(e,t){n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>$,e=>$=e),n(e.exports,"createPortal",()=>H,e=>H=e),n(e.exports,"createRoot",()=>q,e=>q=e),n(e.exports,"findDOMNode",()=>W,e=>W=e),n(e.exports,"flushSync",()=>K,e=>K=e),n(e.exports,"hydrate",()=>G,e=>G=e),n(e.exports,"hydrateRoot",()=>Q,e=>Q=e),n(e.exports,"render",()=>X,e=>X=e),n(e.exports,"unmountComponentAtNode",()=>Y,e=>Y=e),n(e.exports,"unstable_batchedUpdates",()=>J,e=>J=e),n(e.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),n(e.exports,"version",()=>ee,e=>ee=e);var r,i,s,a,o,l,u=f("acw62"),c=f("fO90s");function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var y=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},_={};function E(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}function I(e,t,n,r){var i,s=S.hasOwnProperty(t)?S[t]:null;(null!==s?0!==s.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,s,r)&&(n=null),r||null===s?(i=t,(!!v.call(_,i)||!v.call(b,i)&&(w.test(i)?_[i]=!0:(b[i]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):s.mustUseProperty?e[s.propertyName]=null===n?3!==s.type&&"":n:(t=s.attributeName,r=s.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(s=s.type)||4===s&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(k,T);S[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(k,T);S[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(k,T);S[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});var C=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),x=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),V=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var j=Symbol.iterator;function B(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=j&&e[j]||e["@@iterator"])?e:null}var $,H,q,W,K,G,Q,X,Y,J,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function es(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o)break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function eo(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=eo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eo(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function eh(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ed(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ea(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ef(e,t){null!=(t=t.checked)&&I(e,"checked",t,!1)}function ep(e,t){ef(e,t);var n=ea(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ey=Array.isArray;function ev(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(i=0,n=""+ea(n),t=null;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ew(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(h(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eb(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(h(92));if(ey(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ea(n)}}function e_(e,t){var n=ea(t.value),r=ea(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function eE(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ek(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eT,eI,eC=(eT=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eI=eI||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eI.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eT(e,t,n,r)})}:eT);function eN(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var ex={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eR=["Webkit","ms","Moz","O"];function eA(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ex.hasOwnProperty(e)&&ex[e]?(""+t).trim():t+"px"}function eP(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=eA(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ex).forEach(function(e){eR.forEach(function(t){ex[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=ex[e]})});var eD=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eO(e,t){if(t){if(eD[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(h(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(h(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(h(62))}}function eL(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eM=null;function eU(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eF=null,eV=null,ez=null;function ej(e){if(e=rQ(e)){if("function"!=typeof eF)throw Error(h(280));var t=e.stateNode;t&&(t=rY(t),eF(e.stateNode,e.type,t))}}function eB(e){eV?ez?ez.push(e):ez=[e]:eV=e}function e$(){if(eV){var e=eV,t=ez;if(ez=eV=null,ej(e),t)for(e=0;e<t.length;e++)ej(t[e])}}function eH(e,t){return e(t)}function eq(){}var eW=!1;function eK(e,t,n){if(eW)return e(t,n);eW=!0;try{return eH(e,t,n)}finally{eW=!1,(null!==eV||null!==ez)&&(eq(),e$())}}function eG(e,t){var n=e.stateNode;if(null===n)return null;var r=rY(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(h(231,t,typeof n));return n}var eQ=!1;if(y)try{var eX={};Object.defineProperty(eX,"passive",{get:function(){eQ=!0}}),window.addEventListener("test",eX,eX),window.removeEventListener("test",eX,eX)}catch(e){eQ=!1}function eY(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e4(e,t,n,r,i,s,a,o,l){eJ=!1,eZ=null,eY.apply(e2,arguments)}function e9(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e3(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e9(e)!==e)throw Error(h(188))}function e5(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e9(e)))throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return e6(i),e;if(s===r)return e6(i),t;s=s.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(3!==n.tag)throw Error(h(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e7=c.unstable_scheduleCallback,e8=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,ts=c.unstable_UserBlockingPriority,ta=c.unstable_NormalPriority,to=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,th=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(td(e)/tf|0)|0},td=Math.log,tf=Math.LN2,tp=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ty(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=tg(o):0!=(s&=a)&&(r=tg(s))}else 0!=(a=n&~i)?r=tg(a):0!==s&&(r=tg(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-th(t)),r|=e[n],t&=~i;return r}function tv(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tw(){var e=tp;return 0==(4194240&(tp<<=1))&&(tp=64),e}function tb(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function t_(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-th(t)]=n}function tE(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-th(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var tS=0;function tk(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tT,tI,tC,tN,tx,tR=!1,tA=[],tP=null,tD=null,tO=null,tL=new Map,tM=new Map,tU=[],tF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tV(e,t){switch(e){case"focusin":case"focusout":tP=null;break;case"dragenter":case"dragleave":tD=null;break;case"mouseover":case"mouseout":tO=null;break;case"pointerover":case"pointerout":tL.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tM.delete(t.pointerId)}}function tz(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&null!==(t=rQ(t))&&tI(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function tj(e){var t=rG(e.target);if(null!==t){var n=e9(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e3(n))){e.blockedOn=t,tx(e.priority,function(){tC(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tB(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rQ(n))&&tI(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eM=r,n.target.dispatchEvent(r),eM=null,t.shift()}return!0}function t$(e,t,n){tB(e)&&n.delete(t)}function tH(){tR=!1,null!==tP&&tB(tP)&&(tP=null),null!==tD&&tB(tD)&&(tD=null),null!==tO&&tB(tO)&&(tO=null),tL.forEach(t$),tM.forEach(t$)}function tq(e,t){e.blockedOn===t&&(e.blockedOn=null,tR||(tR=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tH)))}function tW(e){function t(t){return tq(t,e)}if(0<tA.length){tq(tA[0],e);for(var n=1;n<tA.length;n++){var r=tA[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tP&&tq(tP,e),null!==tD&&tq(tD,e),null!==tO&&tq(tO,e),tL.forEach(t),tM.forEach(t),n=0;n<tU.length;n++)(r=tU[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tU.length&&null===(n=tU[0]).blockedOn;)tj(n),null===n.blockedOn&&tU.shift()}var tK=C.ReactCurrentBatchConfig,tG=!0;function tQ(e,t,n,r){var i=tS,s=tK.transition;tK.transition=null;try{tS=1,tY(e,t,n,r)}finally{tS=i,tK.transition=s}}function tX(e,t,n,r){var i=tS,s=tK.transition;tK.transition=null;try{tS=4,tY(e,t,n,r)}finally{tS=i,tK.transition=s}}function tY(e,t,n,r){if(tG){var i=tZ(e,t,n,r);if(null===i)rb(e,t,r,tJ,n),tV(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return tP=tz(tP,e,t,n,r,i),!0;case"dragenter":return tD=tz(tD,e,t,n,r,i),!0;case"mouseover":return tO=tz(tO,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return tL.set(s,tz(tL.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tM.set(s,tz(tM.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(tV(e,r),4&t&&-1<tF.indexOf(e)){for(;null!==i;){var s=rQ(i);if(null!==s&&tT(s),null===(s=tZ(e,t,n,r))&&rb(e,t,r,tJ,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else rb(e,t,r,null,n)}}var tJ=null;function tZ(e,t,n,r){if(tJ=null,null!==(e=rG(e=eU(r)))){if(null===(t=e9(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e3(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ti:return 1;case ts:return 4;case ta:case to:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t4=null;function t9(){if(t4)return t4;var e,t,n=t2,r=n.length,i="value"in t1?t1.value:t1.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return t4=i.slice(e,1<t?1-t:void 0)}function t3(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t5(){return!1}function t7(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t6:t5,this.isPropagationStopped=t5,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t8,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t7(nn),ni=en({},nn,{view:0,detail:0}),ns=t7(ni),na=en({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ny,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t8=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t8=0,nt=e),t8)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),no=t7(na),nl=t7(en({},na,{dataTransfer:0})),nu=t7(en({},ni,{relatedTarget:0})),nc=t7(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nh=t7(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nd=t7(en({},nn,{data:0})),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function ny(){return ng}var nv=t7(en({},ni,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t3(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ny,charCode:function(e){return"keypress"===e.type?t3(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t3(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nw=t7(en({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nb=t7(en({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ny})),n_=t7(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nE=t7(en({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nS=[9,13,27,32],nk=y&&"CompositionEvent"in window,nT=null;y&&"documentMode"in document&&(nT=document.documentMode);var nI=y&&"TextEvent"in window&&!nT,nC=y&&(!nk||nT&&8<nT&&11>=nT),nN=!1;function nx(e,t){switch(e){case"keyup":return -1!==nS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nR(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nA=!1,nP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nD(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nP[e.type]:"textarea"===t}function nO(e,t,n,r){eB(r),0<(t=rE(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nL=null,nM=null;function nU(e){rp(e,0)}function nF(e){if(eu(rX(e)))return e}function nV(e,t){if("change"===e)return t}var nz=!1;if(y){if(y){var nj="oninput"in document;if(!nj){var nB=document.createElement("div");nB.setAttribute("oninput","return;"),nj="function"==typeof nB.oninput}r=nj}else r=!1;nz=r&&(!document.documentMode||9<document.documentMode)}function n$(){nL&&(nL.detachEvent("onpropertychange",nH),nM=nL=null)}function nH(e){if("value"===e.propertyName&&nF(nM)){var t=[];nO(t,nM,e,eU(e)),eK(nU,t)}}function nq(e,t,n){"focusin"===e?(n$(),nL=t,nM=n,nL.attachEvent("onpropertychange",nH)):"focusout"===e&&n$()}function nW(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nF(nM)}function nK(e,t){if("click"===e)return nF(t)}function nG(e,t){if("input"===e||"change"===e)return nF(t)}var nQ="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nX(e,t){if(nQ(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!v.call(t,i)||!nQ(e[i],t[i]))return!1}return!0}function nY(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nJ(e,t){var n,r=nY(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nY(r)}}function nZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=y&&"documentMode"in document&&11>=document.documentMode,n2=null,n4=null,n9=null,n3=!1;function n6(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n3||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n9&&nX(n9,r)||(n9=r,0<(r=rE(n4,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n5(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n7={animationend:n5("Animation","AnimationEnd"),animationiteration:n5("Animation","AnimationIteration"),animationstart:n5("Animation","AnimationStart"),transitionend:n5("Transition","TransitionEnd")},n8={},re={};function rt(e){if(n8[e])return n8[e];if(!n7[e])return e;var t,n=n7[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n8[e]=n[t];return e}y&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n7.animationend.animation,delete n7.animationiteration.animation,delete n7.animationstart.animation),"TransitionEvent"in window||delete n7.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ri=rt("animationstart"),rs=rt("transitionend"),ra=new Map,ro="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rl(e,t){ra.set(e,t),m(t,[e])}for(var ru=0;ru<ro.length;ru++){var rc=ro[ru];rl(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rl(rn,"onAnimationEnd"),rl(rr,"onAnimationIteration"),rl(ri,"onAnimationStart"),rl("dblclick","onDoubleClick"),rl("focusin","onFocus"),rl("focusout","onBlur"),rl(rs,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(rh));function rf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(e4.apply(this,arguments),eJ){if(eJ){var u=eZ;eJ=!1,eZ=null}else throw Error(h(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rp(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;rf(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;rf(i,o,u),s=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rq];void 0===n&&(n=t[rq]=new Set);var r=e+"__bubble";n.has(r)||(rw(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rw(n,e,r,t)}var ry="_reactListening"+Math.random().toString(36).slice(2);function rv(e){if(!e[ry]){e[ry]=!0,d.forEach(function(t){"selectionchange"!==t&&(rd.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ry]||(t[ry]=!0,rg("selectionchange",!1,t))}}function rw(e,t,n,r){switch(t0(t)){case 1:var i=tQ;break;case 4:i=tX;break;default:i=tY}n=i.bind(null,t,n,e),i=void 0,eQ&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rb(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=rG(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}eK(function(){var r=s,i=eU(n),a=[];e:{var o=ra.get(e);if(void 0!==o){var l=nr,u=e;switch(e){case"keypress":if(0===t3(n))break e;case"keydown":case"keyup":l=nv;break;case"focusin":u="focus",l=nu;break;case"focusout":u="blur",l=nu;break;case"beforeblur":case"afterblur":l=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nb;break;case rn:case rr:case ri:l=nc;break;case rs:l=n_;break;case"scroll":l=ns;break;case"wheel":l=nE;break;case"copy":case"cut":case"paste":l=nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nw}var c=0!=(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&null!=(m=eG(p,d))&&c.push(r_(p,m,f))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(0==(7&t)){if(o="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(o&&n!==eM&&(u=n.relatedTarget||n.fromElement)&&(rG(u)||u[rH]))&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,null!==(u=u?rG(u):null)&&(h=e9(u),u!==h||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=no,m="onMouseLeave",d="onMouseEnter",p="mouse",("pointerout"===e||"pointerover"===e)&&(c=nw,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:rX(l),f=null==u?o:rX(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,rG(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)t:{for(c=l,d=u,p=0,f=c;f;f=rS(f))p++;for(f=0,m=d;m;m=rS(m))f++;for(;0<p-f;)c=rS(c),p--;for(;0<f-p;)d=rS(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break t;c=rS(c),d=rS(d)}c=null}else c=null;null!==l&&rk(a,o,l,c,!1),null!==u&&null!==h&&rk(a,h,u,c,!0)}e:{if("select"===(l=(o=r?rX(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g,y=nV;else if(nD(o)){if(nz)y=nG;else{y=nW;var v=nq}}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(y=nK);if(y&&(y=y(e,r))){nO(a,y,n,i);break e}v&&v(e,o,r),"focusout"===e&&(v=o._wrapperState)&&v.controlled&&"number"===o.type&&eg(o,"number",o.value)}switch(v=r?rX(r):window,e){case"focusin":(nD(v)||"true"===v.contentEditable)&&(n2=v,n4=r,n9=null);break;case"focusout":n9=n4=n2=null;break;case"mousedown":n3=!0;break;case"contextmenu":case"mouseup":case"dragend":n3=!1,n6(a,n,i);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n6(a,n,i)}if(nk)t:{switch(e){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else nA?nx(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(nC&&"ko"!==n.locale&&(nA||"onCompositionStart"!==w?"onCompositionEnd"===w&&nA&&(g=t9()):(t2="value"in(t1=i)?t1.value:t1.textContent,nA=!0)),0<(v=rE(r,w)).length&&(w=new nd(w,e,null,n,i),a.push({event:w,listeners:v}),g?w.data=g:null!==(g=nR(n))&&(w.data=g))),(g=nI?function(e,t){switch(e){case"compositionend":return nR(t);case"keypress":if(32!==t.which)return null;return nN=!0," ";case"textInput":return" "===(e=t.data)&&nN?null:e;default:return null}}(e,n):function(e,t){if(nA)return"compositionend"===e||!nk&&nx(e,t)?(e=t9(),t4=t2=t1=null,nA=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nC&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rE(r,"onBeforeInput")).length&&(i=new nd("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=g)}rp(a,t)})}function r_(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rE(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=eG(e,n))&&r.unshift(r_(e,s,i)),null!=(s=eG(e,t))&&r.push(r_(e,s,i))),e=e.return}return r}function rS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rk(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=eG(n,s))&&a.unshift(r_(n,l,o)):i||null!=(l=eG(n,s))&&a.push(r_(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var rT=/\r\n?/g,rI=/\u0000|\uFFFD/g;function rC(e){return("string"==typeof e?e:""+e).replace(rT,"\n").replace(rI,"")}function rN(e,t,n){if(t=rC(t),rC(e)!==t&&n)throw Error(h(425))}function rx(){}var rR=null,rA=null;function rP(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rD="function"==typeof setTimeout?setTimeout:void 0,rO="function"==typeof clearTimeout?clearTimeout:void 0,rL="function"==typeof Promise?Promise:void 0,rM="function"==typeof queueMicrotask?queueMicrotask:void 0!==rL?function(e){return rL.resolve(null).then(e).catch(rU)}:rD;function rU(e){setTimeout(function(){throw e})}function rF(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType){if("/$"===(n=i.data)){if(0===r){e.removeChild(i),tW(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=i}while(n)tW(t)}function rV(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rz(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rj=Math.random().toString(36).slice(2),rB="__reactFiber$"+rj,r$="__reactProps$"+rj,rH="__reactContainer$"+rj,rq="__reactEvents$"+rj,rW="__reactListeners$"+rj,rK="__reactHandles$"+rj;function rG(e){var t=e[rB];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rH]||n[rB]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rz(e);null!==e;){if(n=e[rB])return n;e=rz(e)}return t}n=(e=n).parentNode}return null}function rQ(e){return(e=e[rB]||e[rH])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rX(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(h(33))}function rY(e){return e[r$]||null}var rJ=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rJ[rZ],rJ[rZ]=null,rZ--)}function r2(e,t){rJ[++rZ]=e.current,e.current=t}var r4={},r9=r0(r4),r3=r0(!1),r6=r4;function r5(e,t){var n=e.type.contextTypes;if(!n)return r4;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function r7(e){return null!=(e=e.childContextTypes)}function r8(){r1(r3),r1(r9)}function ie(e,t,n){if(r9.current!==r4)throw Error(h(168));r2(r9,t),r2(r3,n)}function it(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(h(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case R:return"Fragment";case x:return"Portal";case P:return"Profiler";case A:return"StrictMode";case M:return"Suspense";case U:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case D:return(t._context.displayName||"Context")+".Provider";case L:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case F:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return en({},n,r)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r4,r6=r9.current,r2(r9,e),r2(r3,r3.current),!0}function ii(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=it(e,t,r6),r.__reactInternalMemoizedMergedChildContext=e,r1(r3),r1(r9),r2(r9,e)):r1(r3),r2(r3,n)}var is=null,ia=!1,io=!1;function il(e){null===is?is=[e]:is.push(e)}function iu(){if(!io&&null!==is){io=!0;var e=0,t=tS;try{var n=is;for(tS=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}is=null,ia=!1}catch(t){throw null!==is&&(is=is.slice(e+1)),e7(ti,iu),t}finally{tS=t,io=!1}}return null}var ic=[],ih=0,id=null,ip=0,im=[],ig=0,iy=null,iv=1,iw="";function ib(e,t){ic[ih++]=ip,ic[ih++]=id,id=e,ip=t}function i_(e,t,n){im[ig++]=iv,im[ig++]=iw,im[ig++]=iy,iy=e;var r=iv;e=iw;var i=32-th(r)-1;r&=~(1<<i),n+=1;var s=32-th(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,iv=1<<32-th(t)+i|n<<i|r,iw=s+e}else iv=1<<s|n<<i|r,iw=e}function iE(e){null!==e.return&&(ib(e,1),i_(e,1,0))}function iS(e){for(;e===id;)id=ic[--ih],ic[ih]=null,ip=ic[--ih],ic[ih]=null;for(;e===iy;)iy=im[--ig],im[ig]=null,iw=im[--ig],im[ig]=null,iv=im[--ig],im[ig]=null}var ik=null,iT=null,iI=!1,iC=null;function iN(e,t){var n=o7(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ix(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ik=e,iT=rV(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ik=e,iT=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==iy?{id:iv,overflow:iw}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=o7(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ik=e,iT=null,!0);default:return!1}}function iR(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iA(e){if(iI){var t=iT;if(t){var n=t;if(!ix(e,t)){if(iR(e))throw Error(h(418));t=rV(n.nextSibling);var r=ik;t&&ix(e,t)?iN(r,n):(e.flags=-4097&e.flags|2,iI=!1,ik=e)}}else{if(iR(e))throw Error(h(418));e.flags=-4097&e.flags|2,iI=!1,ik=e}}}function iP(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ik=e}function iD(e){if(e!==ik)return!1;if(!iI)return iP(e),iI=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rP(e.type,e.memoizedProps)),t&&(t=iT)){if(iR(e))throw iO(),Error(h(418));for(;t;)iN(e,t),t=rV(t.nextSibling)}if(iP(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(h(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){iT=rV(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}iT=null}}else iT=ik?rV(e.stateNode.nextSibling):null;return!0}function iO(){for(var e=iT;e;)e=rV(e.nextSibling)}function iL(){iT=ik=null,iI=!1}function iM(e){null===iC?iC=[e]:iC.push(e)}var iU=C.ReactCurrentBatchConfig;function iF(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var iV=r0(null),iz=null,ij=null,iB=null;function i$(){iB=ij=iz=null}function iH(e){var t=iV.current;r1(iV),e._currentValue=t}function iq(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function iW(e,t){iz=e,iB=ij=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(a_=!0),e.firstContext=null)}function iK(e){var t=e._currentValue;if(iB!==e){if(e={context:e,memoizedValue:t,next:null},null===ij){if(null===iz)throw Error(h(308));ij=e,iz.dependencies={lanes:0,firstContext:e}}else ij=ij.next=e}return t}var iG=null;function iQ(e){null===iG?iG=[e]:iG.push(e)}function iX(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,iQ(t)):(n.next=i.next,i.next=n),t.interleaved=n,iY(e,r)}function iY(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var iJ=!1;function iZ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i2(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&ol)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,iY(e,n)}return null===(i=r.interleaved)?(t.next=t,iQ(r)):(t.next=i.next,i.next=t),r.interleaved=t,iY(e,n)}function i4(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tE(e,n)}}function i9(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n)null===s?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function i3(e,t,n,r){var i=e.updateQueue;iJ=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&(o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l)}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=en({},h,d);break e;case 2:iJ=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do a|=i.lane,i=i.next;while(i!==t)}else null===s&&(i.shared.lanes=0);og|=a,e.lanes=a,e.memoizedState=h}}function i6(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(h(191,i));i.call(r)}}}var i5=(new u.Component).refs;function i7(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var i8={isMounted:function(e){return!!(e=e._reactInternals)&&e9(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oO(),i=oL(e),s=i1(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=i2(e,s,i))&&(oM(t,e,i,r),i4(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oO(),i=oL(e),s=i1(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=i2(e,s,i))&&(oM(t,e,i,r),i4(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oO(),r=oL(e),i=i1(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=i2(e,i,r))&&(oM(t,e,r,n),i4(t,e,r))}};function se(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||!nX(n,r)||!nX(i,s)}function st(e,t,n){var r=!1,i=r4,s=t.contextType;return"object"==typeof s&&null!==s?s=iK(s):(i=r7(t)?r6:r9.current,s=(r=null!=(r=t.contextTypes))?r5(e,i):r4),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=i8,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sn(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&i8.enqueueReplaceState(t,t.state,null)}function sr(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=i5,iZ(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=iK(s):(s=r7(t)?r6:r9.current,i.context=r5(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(i7(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&i8.enqueueReplaceState(i,i.state,null),i3(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function si(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;t===i5&&(t=i.refs={}),null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function ss(e,t){throw Error(h(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sa(e){return(0,e._init)(e._payload)}function so(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?(t=li(n,e.mode,r)).return=e:(t=i(t,n)).return=e,t}function l(e,t,n,r){var s=n.type;return s===R?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===V&&sa(s)===t.type)?(r=i(t,n.props)).ref=si(e,t,n):(r=lt(n.type,n.key,n.props,null,e.mode,r)).ref=si(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ls(n,e.mode,r)).return=e:(t=i(t,n.children||[])).return=e,t}function c(e,t,n,r,s){return null===t||7!==t.tag?(t=ln(n,e.mode,r,s)).return=e:(t=i(t,n)).return=e,t}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=li(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case N:return(n=lt(t.type,t.key,t.props,null,e.mode,n)).ref=si(e,null,t),n.return=e,n;case x:return(t=ls(t,e.mode,n)).return=e,t;case V:return d(e,(0,t._init)(t._payload),n)}if(ey(t)||B(t))return(t=ln(t,e.mode,n,null)).return=e,t;ss(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case N:return n.key===i?l(e,t,n,r):null;case x:return n.key===i?u(e,t,n,r):null;case V:return f(e,t,(i=n._init)(n._payload),r)}if(ey(n)||B(n))return null!==i?null:c(e,t,n,r,null);ss(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case N:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case x:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case V:return p(e,t,n,(0,r._init)(r._payload),i)}if(ey(r)||B(r))return c(t,e=e.get(n)||null,r,i,null);ss(t,r)}return null}return function o(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===R&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case N:e:{for(var g=c.key,y=u;null!==y;){if(y.key===g){if((g=c.type)===R){if(7===y.tag){n(l,y.sibling),(u=i(y,c.props.children)).return=l,l=u;break e}}else if(y.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===V&&sa(g)===y.type){n(l,y.sibling),(u=i(y,c.props)).ref=si(l,y,c),u.return=l,l=u;break e}n(l,y);break}t(l,y),y=y.sibling}c.type===R?((u=ln(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=lt(c.type,c.key,c.props,null,l.mode,m)).ref=si(l,u,c),m.return=l,l=m)}return a(l);case x:e:{for(y=c.key;null!==u;){if(u.key===y){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=ls(c,l.mode,m)).return=l,l=u}return a(l);case V:return o(l,u,(y=c._init)(c._payload),m)}if(ey(c))return function(i,a,o,l){for(var u=null,c=null,h=a,m=a=0,g=null;null!==h&&m<o.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var y=f(i,h,o[m],l);if(null===y){null===h&&(h=g);break}e&&h&&null===y.alternate&&t(i,h),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,h=g}if(m===o.length)return n(i,h),iI&&ib(i,m),u;if(null===h){for(;m<o.length;m++)null!==(h=d(i,o[m],l))&&(a=s(h,a,m),null===c?u=h:c.sibling=h,c=h);return iI&&ib(i,m),u}for(h=r(i,h);m<o.length;m++)null!==(g=p(h,i,m,o[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&h.forEach(function(e){return t(i,e)}),iI&&ib(i,m),u}(l,u,c,m);if(B(c))return function(i,a,o,l){var u=B(o);if("function"!=typeof u)throw Error(h(150));if(null==(o=u.call(o)))throw Error(h(151));for(var c=u=null,m=a,g=a=0,y=null,v=o.next();null!==m&&!v.done;g++,v=o.next()){m.index>g?(y=m,m=null):y=m.sibling;var w=f(i,m,v.value,l);if(null===w){null===m&&(m=y);break}e&&m&&null===w.alternate&&t(i,m),a=s(w,a,g),null===c?u=w:c.sibling=w,c=w,m=y}if(v.done)return n(i,m),iI&&ib(i,g),u;if(null===m){for(;!v.done;g++,v=o.next())null!==(v=d(i,v.value,l))&&(a=s(v,a,g),null===c?u=v:c.sibling=v,c=v);return iI&&ib(i,g),u}for(m=r(i,m);!v.done;g++,v=o.next())null!==(v=p(m,i,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=s(v,a,g),null===c?u=v:c.sibling=v,c=v);return e&&m.forEach(function(e){return t(i,e)}),iI&&ib(i,g),u}(l,u,c,m);ss(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l):(n(l,u),(u=li(c,l.mode,m)).return=l),a(l=u)):n(l,u)}}var sl=so(!0),su=so(!1),sc={},sh=r0(sc),sd=r0(sc),sf=r0(sc);function sp(e){if(e===sc)throw Error(h(174));return e}function sm(e,t){switch(r2(sf,t),r2(sd,e),r2(sh,sc),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ek(null,"");break;default:t=ek(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(sh),r2(sh,t)}function sg(){r1(sh),r1(sd),r1(sf)}function sy(e){sp(sf.current);var t=sp(sh.current),n=ek(t,e.type);t!==n&&(r2(sd,e),r2(sh,n))}function sv(e){sd.current===e&&(r1(sh),r1(sd))}var sw=r0(0);function sb(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var s_=[];function sE(){for(var e=0;e<s_.length;e++)s_[e]._workInProgressVersionPrimary=null;s_.length=0}var sS=C.ReactCurrentDispatcher,sk=C.ReactCurrentBatchConfig,sT=0,sI=null,sC=null,sN=null,sx=!1,sR=!1,sA=0,sP=0;function sD(){throw Error(h(321))}function sO(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nQ(e[n],t[n]))return!1;return!0}function sL(e,t,n,r,i,s){if(sT=s,sI=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sS.current=null===e||null===e.memoizedState?al:au,e=n(r,i),sR){s=0;do{if(sR=!1,sA=0,25<=s)throw Error(h(301));s+=1,sN=sC=null,t.updateQueue=null,sS.current=ac,e=n(r,i)}while(sR)}if(sS.current=ao,t=null!==sC&&null!==sC.next,sT=0,sN=sC=sI=null,sx=!1,t)throw Error(h(300));return e}function sM(){var e=0!==sA;return sA=0,e}function sU(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===sN?sI.memoizedState=sN=e:sN=sN.next=e,sN}function sF(){if(null===sC){var e=sI.alternate;e=null!==e?e.memoizedState:null}else e=sC.next;var t=null===sN?sI.memoizedState:sN.next;if(null!==t)sN=t,sC=e;else{if(null===e)throw Error(h(310));e={memoizedState:(sC=e).memoizedState,baseState:sC.baseState,baseQueue:sC.baseQueue,queue:sC.queue,next:null},null===sN?sI.memoizedState=sN=e:sN=sN.next=e}return sN}function sV(e,t){return"function"==typeof t?t(e):t}function sz(e){var t=sF(),n=t.queue;if(null===n)throw Error(h(311));n.lastRenderedReducer=e;var r=sC,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((sT&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=d,a=r):l=l.next=d,sI.lanes|=c,og|=c}u=u.next}while(null!==u&&u!==s)null===l?a=r:l.next=o,nQ(r,t.memoizedState)||(a_=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do s=i.lane,sI.lanes|=s,og|=s,i=i.next;while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sj(e){var t=sF(),n=t.queue;if(null===n)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i)nQ(s,t.memoizedState)||(a_=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function sB(){}function s$(e,t){var n=sI,r=sF(),i=t(),s=!nQ(r.memoizedState,i);if(s&&(r.memoizedState=i,a_=!0),r=r.queue,s1(sW.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==sN&&1&sN.memoizedState.tag){if(n.flags|=2048,sX(9,sq.bind(null,n,r,i,t),void 0,null),null===ou)throw Error(h(349));0!=(30&sT)||sH(n,t,i)}return i}function sH(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sI.updateQueue)?(t={lastEffect:null,stores:null},sI.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function sq(e,t,n,r){t.value=n,t.getSnapshot=r,sK(t)&&sG(e)}function sW(e,t,n){return n(function(){sK(t)&&sG(e)})}function sK(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nQ(e,n)}catch(e){return!0}}function sG(e){var t=iY(e,1);null!==t&&oM(t,e,1,-1)}function sQ(e){var t=sU();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sV,lastRenderedState:e},t.queue=e,e=e.dispatch=ar.bind(null,sI,e),[t.memoizedState,e]}function sX(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sI.updateQueue)?(t={lastEffect:null,stores:null},sI.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function sY(){return sF().memoizedState}function sJ(e,t,n,r){var i=sU();sI.flags|=e,i.memoizedState=sX(1|t,n,void 0,void 0===r?null:r)}function sZ(e,t,n,r){var i=sF();r=void 0===r?null:r;var s=void 0;if(null!==sC){var a=sC.memoizedState;if(s=a.destroy,null!==r&&sO(r,a.deps)){i.memoizedState=sX(t,n,s,r);return}}sI.flags|=e,i.memoizedState=sX(1|t,n,s,r)}function s0(e,t){return sJ(8390656,8,e,t)}function s1(e,t){return sZ(2048,8,e,t)}function s2(e,t){return sZ(4,2,e,t)}function s4(e,t){return sZ(4,4,e,t)}function s9(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function s3(e,t,n){return n=null!=n?n.concat([e]):null,sZ(4,4,s9.bind(null,t,e),n)}function s6(){}function s5(e,t){var n=sF();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&sO(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function s7(e,t){var n=sF();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&sO(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function s8(e,t,n){return 0==(21&sT)?(e.baseState&&(e.baseState=!1,a_=!0),e.memoizedState=n):(nQ(n,t)||(n=tw(),sI.lanes|=n,og|=n,e.baseState=!0),t)}function ae(e,t){var n=tS;tS=0!==n&&4>n?n:4,e(!0);var r=sk.transition;sk.transition={};try{e(!1),t()}finally{tS=n,sk.transition=r}}function at(){return sF().memoizedState}function an(e,t,n){var r=oL(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ai(e)?as(t,n):null!==(n=iX(e,t,n,r))&&(oM(n,e,r,oO()),aa(n,t,r))}function ar(e,t,n){var r=oL(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ai(e))as(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,nQ(o,a)){var l=t.interleaved;null===l?(i.next=i,iQ(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(n=iX(e,t,i,r))&&(oM(n,e,r,i=oO()),aa(n,t,r))}}function ai(e){var t=e.alternate;return e===sI||null!==t&&t===sI}function as(e,t){sR=sx=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aa(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tE(e,n)}}var ao={readContext:iK,useCallback:sD,useContext:sD,useEffect:sD,useImperativeHandle:sD,useInsertionEffect:sD,useLayoutEffect:sD,useMemo:sD,useReducer:sD,useRef:sD,useState:sD,useDebugValue:sD,useDeferredValue:sD,useTransition:sD,useMutableSource:sD,useSyncExternalStore:sD,useId:sD,unstable_isNewReconciler:!1},al={readContext:iK,useCallback:function(e,t){return sU().memoizedState=[e,void 0===t?null:t],e},useContext:iK,useEffect:s0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,sJ(4194308,4,s9.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sJ(4194308,4,e,t)},useInsertionEffect:function(e,t){return sJ(4,2,e,t)},useMemo:function(e,t){var n=sU();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sU();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=an.bind(null,sI,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},sU().memoizedState=e},useState:sQ,useDebugValue:s6,useDeferredValue:function(e){return sU().memoizedState=e},useTransition:function(){var e=sQ(!1),t=e[0];return e=ae.bind(null,e[1]),sU().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sI,i=sU();if(iI){if(void 0===n)throw Error(h(407));n=n()}else{if(n=t(),null===ou)throw Error(h(349));0!=(30&sT)||sH(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,s0(sW.bind(null,r,s,e),[e]),r.flags|=2048,sX(9,sq.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=sU(),t=ou.identifierPrefix;if(iI){var n=iw,r=iv;t=":"+t+"R"+(n=(r&~(1<<32-th(r)-1)).toString(32)+n),0<(n=sA++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=sP++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},au={readContext:iK,useCallback:s5,useContext:iK,useEffect:s1,useImperativeHandle:s3,useInsertionEffect:s2,useLayoutEffect:s4,useMemo:s7,useReducer:sz,useRef:sY,useState:function(){return sz(sV)},useDebugValue:s6,useDeferredValue:function(e){return s8(sF(),sC.memoizedState,e)},useTransition:function(){return[sz(sV)[0],sF().memoizedState]},useMutableSource:sB,useSyncExternalStore:s$,useId:at,unstable_isNewReconciler:!1},ac={readContext:iK,useCallback:s5,useContext:iK,useEffect:s1,useImperativeHandle:s3,useInsertionEffect:s2,useLayoutEffect:s4,useMemo:s7,useReducer:sj,useRef:sY,useState:function(){return sj(sV)},useDebugValue:s6,useDeferredValue:function(e){var t=sF();return null===sC?t.memoizedState=e:s8(t,sC.memoizedState,e)},useTransition:function(){return[sj(sV)[0],sF().memoizedState]},useMutableSource:sB,useSyncExternalStore:s$,useId:at,unstable_isNewReconciler:!1};function ah(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=es(e.type,!1);case 11:return e=es(e.type.render,!1);case 1:return e=es(e.type,!0);default:return""}}(r),r=r.return;while(r)var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function ad(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function af(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ap="function"==typeof WeakMap?WeakMap:Map;function am(e,t,n){(n=i1(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ok||(ok=!0,oT=r),af(e,t)},n}function ag(e,t,n){(n=i1(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){af(e,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){af(e,t),"function"!=typeof r&&(null===oI?oI=new Set([this]):oI.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function ay(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ap;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=o4.bind(null,e,t,n),t.then(e,e))}function av(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function aw(e,t,n,r,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=i1(-1,1)).tag=2,i2(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=i),e}var ab=C.ReactCurrentOwner,a_=!1;function aE(e,t,n,r){t.child=null===e?su(t,null,n,r):sl(t,e.child,n,r)}function aS(e,t,n,r,i){n=n.render;var s=t.ref;return(iW(t,i),r=sL(e,t,n,r,s,i),n=sM(),null===e||a_)?(iI&&n&&iE(t),t.flags|=1,aE(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,aB(e,t,i))}function ak(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||o8(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=lt(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,aT(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:nX)(a,r)&&e.ref===t.ref)return aB(e,t,i)}return t.flags|=1,(e=le(s,r)).ref=t.ref,e.return=t,t.child=e}function aT(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(nX(s,r)&&e.ref===t.ref){if(a_=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,aB(e,t,i);0!=(131072&e.flags)&&(a_=!0)}}return aN(e,t,n,r,i)}function aI(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(of,od),od|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(of,od),od|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,r2(of,od),od|=r}}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,r2(of,od),od|=r;return aE(e,t,i,n),t.child}function aC(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aN(e,t,n,r,i){var s=r7(n)?r6:r9.current;return(s=r5(t,s),iW(t,i),n=sL(e,t,n,r,s,i),r=sM(),null===e||a_)?(iI&&r&&iE(t),t.flags|=1,aE(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,aB(e,t,i))}function ax(e,t,n,r,i){if(r7(n)){var s=!0;ir(t)}else s=!1;if(iW(t,i),null===t.stateNode)aj(e,t),st(t,n,r),sr(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;u="object"==typeof u&&null!==u?iK(u):r5(t,u=r7(n)?r6:r9.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&sn(t,a,r,u),iJ=!1;var d=t.memoizedState;a.state=d,i3(t,r,a,i),l=t.memoizedState,o!==r||d!==l||r3.current||iJ?("function"==typeof c&&(i7(t,n,c,r),l=t.memoizedState),(o=iJ||se(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,i0(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:iF(t.type,o),a.props=u,h=t.pendingProps,d=a.context,l="object"==typeof(l=n.contextType)&&null!==l?iK(l):r5(t,l=r7(n)?r6:r9.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&sn(t,a,r,l),iJ=!1,d=t.memoizedState,a.state=d,i3(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||r3.current||iJ?("function"==typeof f&&(i7(t,n,f,r),p=t.memoizedState),(u=iJ||se(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return aR(e,t,n,r,s,i)}function aR(e,t,n,r,i,s){aC(e,t);var a=0!=(128&t.flags);if(!r&&!a)return i&&ii(t,n,!1),aB(e,t,s);r=t.stateNode,ab.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=sl(t,e.child,null,s),t.child=sl(t,null,o,s)):aE(e,t,o,s),t.memoizedState=r.state,i&&ii(t,n,!0),t.child}function aA(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),sm(e,t.containerInfo)}function aP(e,t,n,r,i){return iL(),iM(i),t.flags|=256,aE(e,t,n,r),t.child}var aD={dehydrated:null,treeContext:null,retryLane:0};function aO(e){return{baseLanes:e,cachePool:null,transitions:null}}function aL(e,t,n){var r,i=t.pendingProps,s=sw.current,a=!1,o=0!=(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(s|=1),r2(sw,1&s),null===e)return(iA(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=o):a=lr(o,i,0,null),e=ln(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aO(n),t.memoizedState=aD,e):aM(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,aU(e,t,a,r=ad(Error(h(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=lr({mode:"visible",children:r.children},i,0,null),s=ln(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&sl(t,e.child,null,a),t.child.memoizedState=aO(a),t.memoizedState=aD,s);if(0==(1&t.mode))return aU(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var o=r.dgst;return r=o,aU(e,t,a,r=ad(s=Error(h(419)),r,void 0))}if(o=0!=(a&e.childLanes),a_||o){if(null!==(r=ou)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|a))?0:i)&&i!==s.retryLane&&(s.retryLane=i,iY(e,i),oM(r,e,i,-1))}return oQ(),aU(e,t,a,r=ad(Error(h(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=o3.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,iT=rV(i.nextSibling),ik=t,iI=!0,iC=null,null!==e&&(im[ig++]=iv,im[ig++]=iw,im[ig++]=iy,iv=e.id,iw=e.overflow,iy=t),t=aM(t,r.children),t.flags|=4096,t)}(e,t,o,i,r,s,n);if(a){a=i.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&o)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=le(s,l)).subtreeFlags=14680064&s.subtreeFlags,null!==r?a=le(r,a):(a=ln(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=null===(o=e.child.memoizedState)?aO(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=aD,i}return e=(a=e.child).sibling,i=le(a,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function aM(e,t){return(t=lr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function aU(e,t,n,r){return null!==r&&iM(r),sl(t,e.child,null,n),e=aM(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aF(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),iq(e.return,t,n)}function aV(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function az(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(aE(e,t,r.children,n),0!=(2&(r=sw.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aF(e,n,t);else if(19===e.tag)aF(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(sw,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===sb(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),aV(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===sb(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}aV(t,!0,n,null,s);break;case"together":aV(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aj(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function aB(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),og|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(h(153));if(null!==t.child){for(n=le(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=le(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function a$(e,t){if(!iI)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function aH(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}i=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},s=function(){},a=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sp(sh.current);var s,a=null;switch(n){case"input":i=eh(e,i),r=eh(e,r),a=[];break;case"select":i=en({},i,{value:void 0}),r=en({},r,{value:void 0}),a=[];break;case"textarea":i=ew(e,i),r=ew(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=rx)}for(u in eO(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u]){if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o)){if("style"===u){if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&rm("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},o=function(e,t,n,r){n!==r&&(t.flags|=4)};var aq=!1,aW=!1,aK="function"==typeof WeakSet?WeakSet:Set,aG=null;function aQ(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){o2(e,t,n)}else n.current=null}}function aX(e,t,n){try{n()}catch(n){o2(e,t,n)}}var aY=!1;function aJ(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&aX(t,n,s)}i=i.next}while(i!==r)}}function aZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function a0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a4=null,a9=!1;function a3(e,t,n){for(n=n.child;null!==n;)a6(e,t,n),n=n.sibling}function a6(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:aW||aQ(n,t);case 6:var r=a4,i=a9;a4=null,a3(e,t,n),a4=r,a9=i,null!==a4&&(a9?(e=a4,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):a4.removeChild(n.stateNode));break;case 18:null!==a4&&(a9?(e=a4,n=n.stateNode,8===e.nodeType?rF(e.parentNode,n):1===e.nodeType&&rF(e,n),tW(e)):rF(a4,n.stateNode));break;case 4:r=a4,i=a9,a4=n.stateNode.containerInfo,a9=!0,a3(e,t,n),a4=r,a9=i;break;case 0:case 11:case 14:case 15:if(!aW&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(0!=(2&s)?aX(n,t,a):0!=(4&s)&&aX(n,t,a)),i=i.next}while(i!==r)}a3(e,t,n);break;case 1:if(!aW&&(aQ(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){o2(n,t,e)}a3(e,t,n);break;case 21:default:a3(e,t,n);break;case 22:1&n.mode?(aW=(r=aW)||null!==n.memoizedState,a3(e,t,n),aW=r):a3(e,t,n)}}function a5(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new aK),t.forEach(function(t){var r=o6.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function a7(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=s;e:for(;null!==a;){switch(a.tag){case 5:a4=a.stateNode,a9=!1;break e;case 3:case 4:a4=a.stateNode.containerInfo,a9=!0;break e}a=a.return}if(null===a4)throw Error(h(160));a6(e,s,i),a4=null,a9=!1;var o=i.alternate;null!==o&&(o.return=null),i.return=null}catch(e){o2(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a8(t,e),t=t.sibling}function a8(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a7(t,e),oe(e),4&r){try{aJ(3,e,e.return),aZ(3,e)}catch(t){o2(e,e.return,t)}try{aJ(5,e,e.return)}catch(t){o2(e,e.return,t)}}break;case 1:a7(t,e),oe(e),512&r&&null!==n&&aQ(n,n.return);break;case 5:if(a7(t,e),oe(e),512&r&&null!==n&&aQ(n,n.return),32&e.flags){var i=e.stateNode;try{eN(i,"")}catch(t){o2(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&ef(i,s),eL(o,a);var u=eL(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];"style"===c?eP(i,d):"dangerouslySetInnerHTML"===c?eC(i,d):"children"===c?eN(i,d):I(i,c,d,u)}switch(o){case"input":ep(i,s);break;case"textarea":e_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;null!=p?ev(i,!!s.multiple,p,!1):!!s.multiple!==f&&(null!=s.defaultValue?ev(i,!!s.multiple,s.defaultValue,!0):ev(i,!!s.multiple,s.multiple?[]:"",!1))}i[r$]=s}catch(t){o2(e,e.return,t)}}break;case 6:if(a7(t,e),oe(e),4&r){if(null===e.stateNode)throw Error(h(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){o2(e,e.return,t)}}break;case 3:if(a7(t,e),oe(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tW(t.containerInfo)}catch(t){o2(e,e.return,t)}break;case 4:default:a7(t,e),oe(e);break;case 13:a7(t,e),oe(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,s&&(null===i.alternate||null===i.alternate.memoizedState)&&(o_=tn())),4&r&&a5(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(aW=(u=aW)||c,a7(t,e),aW=u):a7(t,e),oe(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(aG=e,c=e.child;null!==c;){for(d=aG=c;null!==aG;){switch(p=(f=aG).child,f.tag){case 0:case 11:case 14:case 15:aJ(4,f,f.return);break;case 1:aQ(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){o2(r,n,e)}}break;case 5:aQ(f,f.return);break;case 22:if(null!==f.memoizedState){on(d);continue}}null!==p?(p.return=f,aG=p):on(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{i=d.stateNode,u?(s=i.style,"function"==typeof s.setProperty?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=eA("display",a))}catch(t){o2(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){o2(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:a7(t,e),oe(e),4&r&&a5(e);case 21:}}function oe(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(a1(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(eN(i,""),r.flags&=-33);var s=a2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=a2(e);!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rx));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,o,a);break;default:throw Error(h(161))}}catch(t){o2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ot(e){for(;null!==aG;){var t=aG;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aW||aZ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!aW){if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:iF(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var s=t.updateQueue;null!==s&&i6(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}i6(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tW(d)}}}break;default:throw Error(h(163))}aW||512&t.flags&&a0(t)}catch(e){o2(t,t.return,e)}}if(t===e){aG=null;break}if(null!==(n=t.sibling)){n.return=t.return,aG=n;break}aG=t.return}}function on(e){for(;null!==aG;){var t=aG;if(t===e){aG=null;break}var n=t.sibling;if(null!==n){n.return=t.return,aG=n;break}aG=t.return}}function or(e){for(;null!==aG;){var t=aG;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aZ(4,t)}catch(e){o2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){o2(t,i,e)}}var s=t.return;try{a0(t)}catch(e){o2(t,s,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){o2(t,a,e)}}}catch(e){o2(t,t.return,e)}if(t===e){aG=null;break}var o=t.sibling;if(null!==o){o.return=t.return,aG=o;break}aG=t.return}}var oi=Math.ceil,os=C.ReactCurrentDispatcher,oa=C.ReactCurrentOwner,oo=C.ReactCurrentBatchConfig,ol=0,ou=null,oc=null,oh=0,od=0,of=r0(0),op=0,om=null,og=0,oy=0,ov=0,ow=null,ob=null,o_=0,oE=1/0,oS=null,ok=!1,oT=null,oI=null,oC=!1,oN=null,ox=0,oR=0,oA=null,oP=-1,oD=0;function oO(){return 0!=(6&ol)?tn():-1!==oP?oP:oP=tn()}function oL(e){return 0==(1&e.mode)?1:0!=(2&ol)&&0!==oh?oh&-oh:null!==iU.transition?(0===oD&&(oD=tw()),oD):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function oM(e,t,n,r){if(50<oR)throw oR=0,oA=null,Error(h(185));t_(e,n,r),(0==(2&ol)||e!==ou)&&(e===ou&&(0==(2&ol)&&(oy|=n),4===op&&oj(e,oh)),oU(e,r),1===n&&0===ol&&0==(1&t.mode)&&(oE=tn()+500,ia&&iu()))}function oU(e,t){var n,r,i,s=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-th(s),o=1<<a,l=i[a];-1===l?(0==(o&n)||0!=(o&r))&&(i[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var a=ty(e,e===ou?oh:0);if(0===a)null!==s&&e8(s),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=s&&e8(s),1===t)0===e.tag?(i=oB.bind(null,e),ia=!0,il(i)):il(oB.bind(null,e)),rM(function(){0==(6&ol)&&iu()}),s=null;else{switch(tk(a)){case 1:s=ti;break;case 4:s=ts;break;case 16:default:s=ta;break;case 536870912:s=tl}s=e7(s,oF.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function oF(e,t){if(oP=-1,oD=0,0!=(6&ol))throw Error(h(327));var n=e.callbackNode;if(o0()&&e.callbackNode!==n)return null;var r=ty(e,e===ou?oh:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=oX(e,r);else{t=r;var i=ol;ol|=2;var s=oG();for((ou!==e||oh!==t)&&(oS=null,oE=tn()+500,oW(e,t));;)try{(function(){for(;null!==oc&&!te();)oY(oc)})();break}catch(t){oK(e,t)}i$(),os.current=s,ol=i,null!==oc?t=0:(ou=null,oh=0,t=op)}if(0!==t){if(2===t&&0!==(i=tv(e))&&(r=i,t=oV(e,i)),1===t)throw n=om,oW(e,0),oj(e,r),oU(e,tn()),n;if(6===t)oj(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nQ(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=oX(e,r))&&0!==(s=tv(e))&&(r=s,t=oV(e,s)),1===t))throw n=om,oW(e,0),oj(e,r),oU(e,tn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:case 5:oZ(e,ob,oS);break;case 3:if(oj(e,r),(130023424&r)===r&&10<(t=o_+500-tn())){if(0!==ty(e,0))break;if(((i=e.suspendedLanes)&r)!==r){oO(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rD(oZ.bind(null,e,ob,oS),t);break}oZ(e,ob,oS);break;case 4:if(oj(e,r),(4194240&r)===r)break;for(i=-1,t=e.eventTimes;0<r;){var a=31-th(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oi(r/1960))-r)){e.timeoutHandle=rD(oZ.bind(null,e,ob,oS),r);break}oZ(e,ob,oS);break;default:throw Error(h(329))}}}return oU(e,tn()),e.callbackNode===n?oF.bind(null,e):null}function oV(e,t){var n=ow;return e.current.memoizedState.isDehydrated&&(oW(e,t).flags|=256),2!==(e=oX(e,t))&&(t=ob,ob=n,null!==t&&oz(t)),e}function oz(e){null===ob?ob=e:ob.push.apply(ob,e)}function oj(e,t){for(t&=~ov,t&=~oy,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-th(t),r=1<<n;e[n]=-1,t&=~r}}function oB(e){if(0!=(6&ol))throw Error(h(327));o0();var t=ty(e,0);if(0==(1&t))return oU(e,tn()),null;var n=oX(e,t);if(0!==e.tag&&2===n){var r=tv(e);0!==r&&(t=r,n=oV(e,r))}if(1===n)throw n=om,oW(e,0),oj(e,t),oU(e,tn()),n;if(6===n)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,oZ(e,ob,oS),oU(e,tn()),null}function o$(e,t){var n=ol;ol|=1;try{return e(t)}finally{0===(ol=n)&&(oE=tn()+500,ia&&iu())}}function oH(e){null!==oN&&0===oN.tag&&0==(6&ol)&&o0();var t=ol;ol|=1;var n=oo.transition,r=tS;try{if(oo.transition=null,tS=1,e)return e()}finally{tS=r,oo.transition=n,0==(6&(ol=t))&&iu()}}function oq(){od=of.current,r1(of)}function oW(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rO(n)),null!==oc)for(n=oc.return;null!==n;){var r=n;switch(iS(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r8();break;case 3:sg(),r1(r3),r1(r9),sE();break;case 5:sv(r);break;case 4:sg();break;case 13:case 19:r1(sw);break;case 10:iH(r.type._context);break;case 22:case 23:oq()}n=n.return}if(ou=e,oc=e=le(e.current,null),oh=od=t,op=0,om=null,ov=oy=og=0,ob=ow=null,null!==iG){for(t=0;t<iG.length;t++)if(null!==(r=(n=iG[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}iG=null}return e}function oK(e,t){for(;;){var n=oc;try{if(i$(),sS.current=ao,sx){for(var r=sI.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}sx=!1}if(sT=0,sN=sC=sI=null,sR=!1,sA=0,oa.current=null,null===n||null===n.return){op=1,om=t,oc=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=oh,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=av(a);if(null!==p){p.flags&=-257,aw(p,a,o,s,t),1&p.mode&&ay(s,u,t),t=p,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){ay(s,u,t),oQ();break e}l=Error(h(426))}else if(iI&&1&o.mode){var y=av(a);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),aw(y,a,o,s,t),iM(ah(l,o));break e}}s=l=ah(l,o),4!==op&&(op=2),null===ow?ow=[s]:ow.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=am(s,l,t);i9(s,v);break e;case 1:o=l;var w=s.type,b=s.stateNode;if(0==(128&s.flags)&&("function"==typeof w.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===oI||!oI.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=ag(s,o,t);i9(s,_);break e}}s=s.return}while(null!==s)}oJ(n)}catch(e){t=e,oc===n&&null!==n&&(oc=n=n.return);continue}break}}function oG(){var e=os.current;return os.current=ao,null===e?ao:e}function oQ(){(0===op||3===op||2===op)&&(op=4),null===ou||0==(268435455&og)&&0==(268435455&oy)||oj(ou,oh)}function oX(e,t){var n=ol;ol|=2;var r=oG();for((ou!==e||oh!==t)&&(oS=null,oW(e,t));;)try{(function(){for(;null!==oc;)oY(oc)})();break}catch(t){oK(e,t)}if(i$(),ol=n,os.current=r,null!==oc)throw Error(h(261));return ou=null,oh=0,op}function oY(e){var t=l(e.alternate,e,od);e.memoizedProps=e.pendingProps,null===t?oJ(e):oc=t,oa.current=null}function oJ(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(iS(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aH(t),null;case 1:case 17:return r7(t.type)&&r8(),aH(t),null;case 3:return r=t.stateNode,sg(),r1(r3),r1(r9),sE(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(iD(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iC&&(oz(iC),iC=null))),s(e,t),aH(t),null;case 5:sv(t);var l=sp(sf.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(h(166));return aH(t),null}if(e=sp(sh.current),iD(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[rB]=t,r[r$]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(l=0;l<rh.length;l++)rm(rh[l],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ed(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":eb(r,u),rm("invalid",r)}for(var c in eO(n,u),l=null,u)if(u.hasOwnProperty(c)){var d=u[c];"children"===c?"string"==typeof d?r.textContent!==d&&(!0!==u.suppressHydrationWarning&&rN(r.textContent,d,e),l=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(!0!==u.suppressHydrationWarning&&rN(r.textContent,d,e),l=["children",""+d]):p.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":el(r),em(r,u,!0);break;case"textarea":el(r),eE(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rx)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[rB]=t,e[r$]=r,i(e,t,!1,!1),t.stateNode=e;e:{switch(c=eL(n,r),n){case"dialog":rm("cancel",e),rm("close",e),l=r;break;case"iframe":case"object":case"embed":rm("load",e),l=r;break;case"video":case"audio":for(l=0;l<rh.length;l++)rm(rh[l],e);l=r;break;case"source":rm("error",e),l=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),l=r;break;case"details":rm("toggle",e),l=r;break;case"input":ed(e,r),l=eh(e,r),rm("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":eb(e,r),l=ew(e,r),rm("invalid",e)}for(u in eO(n,l),d=l)if(d.hasOwnProperty(u)){var f=d[u];"style"===u?eP(e,f):"dangerouslySetInnerHTML"===u?null!=(f=f?f.__html:void 0)&&eC(e,f):"children"===u?"string"==typeof f?("textarea"!==n||""!==f)&&eN(e,f):"number"==typeof f&&eN(e,""+f):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=f&&"onScroll"===u&&rm("scroll",e):null!=f&&I(e,u,f,c))}switch(n){case"input":el(e),em(e,r,!1);break;case"textarea":el(e),eE(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ea(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ev(e,!!r.multiple,u,!1):null!=r.defaultValue&&ev(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rx)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aH(t),null;case 6:if(e&&null!=t.stateNode)o(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(h(166));if(n=sp(sf.current),sp(sh.current),iD(t)){if(r=t.stateNode,n=t.memoizedProps,r[rB]=t,(u=r.nodeValue!==n)&&null!==(e=ik))switch(e.tag){case 3:rN(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rN(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[rB]=t,t.stateNode=r}return aH(t),null;case 13:if(r1(sw),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(iI&&null!==iT&&0!=(1&t.mode)&&0==(128&t.flags))iO(),iL(),t.flags|=98560,u=!1;else if(u=iD(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(h(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(h(317));u[rB]=t}else iL(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aH(t),u=!1}else null!==iC&&(oz(iC),iC=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&sw.current)?0===op&&(op=3):oQ())),null!==t.updateQueue&&(t.flags|=4),aH(t),null;case 4:return sg(),s(e,t),null===e&&rv(t.stateNode.containerInfo),aH(t),null;case 10:return iH(t.type._context),aH(t),null;case 19:if(r1(sw),null===(u=t.memoizedState))return aH(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)a$(u,!1);else{if(0!==op||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=sb(e))){for(t.flags|=128,a$(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(sw,1&sw.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>oE&&(t.flags|=128,r=!0,a$(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=sb(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),a$(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!iI)return aH(t),null}else 2*tn()-u.renderingStartTime>oE&&1073741824!==n&&(t.flags|=128,r=!0,a$(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=sw.current,r2(sw,r?1&n|2:1&n),t;return aH(t),null;case 22:case 23:return oq(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&od)&&(aH(t),6&t.subtreeFlags&&(t.flags|=8192)):aH(t),null;case 24:case 25:return null}throw Error(h(156,t.tag))}(n,t,od))){oc=n;return}}else{if(null!==(n=function(e,t){switch(iS(t),t.tag){case 1:return r7(t.type)&&r8(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return sg(),r1(r3),r1(r9),sE(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return sv(t),null;case 13:if(r1(sw),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(h(340));iL()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(sw),null;case 4:return sg(),null;case 10:return iH(t.type._context),null;case 22:case 23:return oq(),null;default:return null}}(n,t))){n.flags&=32767,oc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{op=6,oc=null;return}}if(null!==(t=t.sibling)){oc=t;return}oc=t=e}while(null!==t)0===op&&(op=5)}function oZ(e,t,n){var r=tS,i=oo.transition;try{oo.transition=null,tS=1,function(e,t,n,r){do o0();while(null!==oN)if(0!=(6&ol))throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-th(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===ou&&(oc=ou=null,oh=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||oC||(oC=!0,a=ta,o=function(){return o0(),null},e7(a,o)),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=oo.transition,oo.transition=null;var a,o,l,u,c,d=tS;tS=1;var f=ol;ol|=4,oa.current=null,function(e,t){if(rR=tG,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i,s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(;f!==n||0!==s&&3!==f.nodeType||(l=o+s),f!==a||0!==r&&3!==f.nodeType||(u=o+r),3===f.nodeType&&(o+=f.nodeValue.length),null!==(i=f.firstChild);)p=f,f=i;for(;;){if(f===e)break t;if(p===n&&++c===s&&(l=o),p===a&&++d===r&&(u=o),null!==(i=f.nextSibling))break;p=(f=p).parentNode}f=i}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rA={focusedElem:e,selectionRange:n},tG=!1,aG=t;null!==aG;)if(e=(t=aG).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aG=e;else for(;null!==aG;){t=aG;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,w=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:iF(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(h(163))}}catch(e){o2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aG=e;break}aG=t.return}m=aY,aY=!1}(e,n),a8(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=nJ(n,s);var a=nJ(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rA),tG=!!rR,rA=rR=null,e.current=n,l=n,u=e,c=i,aG=l,function e(t,n,r){for(var i=0!=(1&t.mode);null!==aG;){var s=aG,a=s.child;if(22===s.tag&&i){var o=null!==s.memoizedState||aq;if(!o){var l=s.alternate,u=null!==l&&null!==l.memoizedState||aW;l=aq;var c=aW;if(aq=o,(aW=u)&&!c)for(aG=s;null!==aG;)u=(o=aG).child,22===o.tag&&null!==o.memoizedState?or(s):null!==u?(u.return=o,aG=u):or(s);for(;null!==a;)aG=a,e(a,n,r),a=a.sibling;aG=s,aq=l,aW=c}ot(t,n,r)}else 0!=(8772&s.subtreeFlags)&&null!==a?(a.return=s,aG=a):ot(t,n,r)}}(l,u,c),tt(),ol=f,tS=d,oo.transition=s}else e.current=n;if(oC&&(oC=!1,oN=e,ox=i),0===(s=e.pendingLanes)&&(oI=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),oU(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((i=t[n]).value,{componentStack:i.stack,digest:i.digest});if(ok)throw ok=!1,e=oT,oT=null,e;0!=(1&ox)&&0!==e.tag&&o0(),0!=(1&(s=e.pendingLanes))?e===oA?oR++:(oR=0,oA=e):oR=0,iu()}}(e,t,n,r)}finally{oo.transition=i,tS=r}return null}function o0(){if(null!==oN){var e=tk(ox),t=oo.transition,n=tS;try{if(oo.transition=null,tS=16>e?16:e,null===oN)var r=!1;else{if(e=oN,oN=null,ox=0,0!=(6&ol))throw Error(h(331));var i=ol;for(ol|=4,aG=e.current;null!==aG;){var s=aG,a=s.child;if(0!=(16&aG.flags)){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(aG=u;null!==aG;){var c=aG;switch(c.tag){case 0:case 11:case 15:aJ(8,c,s)}var d=c.child;if(null!==d)d.return=c,aG=d;else for(;null!==aG;){var f=(c=aG).sibling,p=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rB],delete n[r$],delete n[rq],delete n[rW],delete n[rK]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){aG=null;break}if(null!==f){f.return=p,aG=f;break}aG=p}}}var m=s.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}aG=s}}if(0!=(2064&s.subtreeFlags)&&null!==a)a.return=s,aG=a;else for(;null!==aG;){if(s=aG,0!=(2048&s.flags))switch(s.tag){case 0:case 11:case 15:aJ(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,aG=v;break}aG=s.return}}var w=e.current;for(aG=w;null!==aG;){var b=(a=aG).child;if(0!=(2064&a.subtreeFlags)&&null!==b)b.return=a,aG=b;else for(a=w;null!==aG;){if(o=aG,0!=(2048&o.flags))try{switch(o.tag){case 0:case 11:case 15:aZ(9,o)}}catch(e){o2(o,o.return,e)}if(o===a){aG=null;break}var _=o.sibling;if(null!==_){_.return=o.return,aG=_;break}aG=o.return}}if(ol=i,iu(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tS=n,oo.transition=t}}return!1}function o1(e,t,n){t=am(e,t=ah(n,t),1),e=i2(e,t,1),t=oO(),null!==e&&(t_(e,1,t),oU(e,t))}function o2(e,t,n){if(3===e.tag)o1(e,e,n);else for(;null!==t;){if(3===t.tag){o1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===oI||!oI.has(r))){e=ag(t,e=ah(n,e),1),t=i2(t,e,1),e=oO(),null!==t&&(t_(t,1,e),oU(t,e));break}}t=t.return}}function o4(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=oO(),e.pingedLanes|=e.suspendedLanes&n,ou===e&&(oh&n)===n&&(4===op||3===op&&(130023424&oh)===oh&&500>tn()-o_?oW(e,0):ov|=n),oU(e,t)}function o9(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=oO();null!==(e=iY(e,t))&&(t_(e,t,n),oU(e,n))}function o3(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),o9(e,n)}function o6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}null!==r&&r.delete(t),o9(e,n)}function o5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function o7(e,t,n,r){return new o5(e,t,n,r)}function o8(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var n=e.alternate;return null===n?((n=o7(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lt(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)o8(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case R:return ln(n.children,i,s,t);case A:a=8,i|=8;break;case P:return(e=o7(12,n,t,2|i)).elementType=P,e.lanes=s,e;case M:return(e=o7(13,n,t,i)).elementType=M,e.lanes=s,e;case U:return(e=o7(19,n,t,i)).elementType=U,e.lanes=s,e;case z:return lr(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case D:a=10;break e;case O:a=9;break e;case L:a=11;break e;case F:a=14;break e;case V:a=16,r=null;break e}throw Error(h(130,null==e?e:typeof e,""))}return(t=o7(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function ln(e,t,n,r){return(e=o7(7,e,r,t)).lanes=n,e}function lr(e,t,n,r){return(e=o7(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return(e=o7(6,e,null,t)).lanes=n,e}function ls(e,t,n){return(t=o7(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function la(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tb(0),this.expirationTimes=tb(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tb(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lo(e,t,n,r,i,s,a,o,l){return e=new la(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=o7(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iZ(s),e}function ll(e){if(!e)return r4;e=e._reactInternals;e:{if(e9(e)!==e||1!==e.tag)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(h(171))}if(1===e.tag){var n=e.type;if(r7(n))return it(e,n,t)}return t}function lu(e,t,n,r,i,s,a,o,l){return(e=lo(n,r,!0,e,i,s,a,o,l)).context=ll(null),n=e.current,(s=i1(r=oO(),i=oL(n))).callback=null!=t?t:null,i2(n,s,i),e.current.lanes=i,t_(e,i,r),oU(e,r),e}function lc(e,t,n,r){var i=t.current,s=oO(),a=oL(i);return n=ll(n),null===t.context?t.context=n:t.pendingContext=n,(t=i1(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=i2(i,t,a))&&(oM(e,i,a,s),i4(e,i,a)),a}function lh(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ld(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function lf(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r3.current)a_=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return a_=!1,function(e,t,n){switch(t.tag){case 3:aA(t),iL();break;case 5:sy(t);break;case 1:r7(t.type)&&ir(t);break;case 4:sm(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;r2(iV,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(sw,1&sw.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return aL(e,t,n);return r2(sw,1&sw.current),null!==(e=aB(e,t,n))?e.sibling:null}r2(sw,1&sw.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return az(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),r2(sw,sw.current),!r)return null;break;case 22:case 23:return t.lanes=0,aI(e,t,n)}return aB(e,t,n)}(e,t,n);a_=0!=(131072&e.flags)}}else a_=!1,iI&&0!=(1048576&t.flags)&&i_(t,ip,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;aj(e,t),e=t.pendingProps;var i=r5(t,r9.current);iW(t,n),i=sL(null,t,r,e,i,n);var s=sM();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r7(r)?(s=!0,ir(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,iZ(t),i.updater=i8,t.stateNode=i,i._reactInternals=t,sr(t,r,e,n),t=aR(null,t,r,!0,s,n)):(t.tag=0,iI&&s&&iE(t),aE(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(aj(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return o8(e)?1:0;if(null!=e){if((e=e.$$typeof)===L)return 11;if(e===F)return 14}return 2}(r),e=iF(r,e),i){case 0:t=aN(null,t,r,e,n);break e;case 1:t=ax(null,t,r,e,n);break e;case 11:t=aS(null,t,r,e,n);break e;case 14:t=ak(null,t,r,iF(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iF(r,i),aN(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iF(r,i),ax(e,t,r,i,n);case 3:e:{if(aA(t),null===e)throw Error(h(387));r=t.pendingProps,i=(s=t.memoizedState).element,i0(e,t),i3(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){i=ah(Error(h(423)),t),t=aP(e,t,r,n,i);break e}if(r!==i){i=ah(Error(h(424)),t),t=aP(e,t,r,n,i);break e}for(iT=rV(t.stateNode.containerInfo.firstChild),ik=t,iI=!0,iC=null,n=su(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(iL(),r===i){t=aB(e,t,n);break e}aE(e,t,r,n)}t=t.child}return t;case 5:return sy(t),null===e&&iA(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,rP(r,i)?a=null:null!==s&&rP(r,s)&&(t.flags|=32),aC(e,t),aE(e,t,a,n),t.child;case 6:return null===e&&iA(t),null;case 13:return aL(e,t,n);case 4:return sm(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=sl(t,null,r,n):aE(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iF(r,i),aS(e,t,r,i,n);case 7:return aE(e,t,t.pendingProps,n),t.child;case 8:case 12:return aE(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,r2(iV,r._currentValue),r._currentValue=a,null!==s){if(nQ(s.value,a)){if(s.children===i.children&&!r3.current){t=aB(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=i1(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),iq(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(h(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),iq(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}}aE(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,iW(t,n),r=r(i=iK(i)),t.flags|=1,aE(e,t,r,n),t.child;case 14:return i=iF(r=t.type,t.pendingProps),i=iF(r.type,i),ak(e,t,r,i,n);case 15:return aT(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:iF(r,i),aj(e,t),t.tag=1,r7(r)?(e=!0,ir(t)):e=!1,iW(t,n),st(t,r,i),sr(t,r,i,n),aR(null,t,r,!0,e,n);case 19:return az(e,t,n);case 22:return aI(e,t,n)}throw Error(h(156,t.tag))};var lp="function"==typeof reportError?reportError:function(e){console.error(e)};function lm(e){this._internalRoot=e}function lg(e){this._internalRoot=e}function ly(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lw(){}function lb(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=lh(a);o.call(e)}}lc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=lh(a);s.call(e)}}var a=lu(t,r,e,0,null,!1,!1,"",lw);return e._reactRootContainer=a,e[rH]=a.current,rv(8===e.nodeType?e.parentNode:e),oH(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=lh(l);o.call(e)}}var l=lo(e,0,!1,null,null,!1,!1,"",lw);return e._reactRootContainer=l,e[rH]=l.current,rv(8===e.nodeType?e.parentNode:e),oH(function(){lc(t,l,n,r)}),l}(n,t,e,i,r);return lh(a)}lg.prototype.render=lm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(h(409));lc(e,t,null,null)},lg.prototype.unmount=lm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;oH(function(){lc(null,e,null,null)}),t[rH]=null}},lg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tN();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tU.length&&0!==t&&t<tU[n].priority;n++);tU.splice(n,0,e),0===n&&tj(e)}},tT=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tE(t,1|n),oU(t,tn()),0==(6&ol)&&(oE=tn()+500,iu()))}break;case 13:oH(function(){var t=iY(e,1);null!==t&&oM(t,e,1,oO())}),lf(e,1)}},tI=function(e){if(13===e.tag){var t=iY(e,134217728);null!==t&&oM(t,e,134217728,oO()),lf(e,134217728)}},tC=function(e){if(13===e.tag){var t=oL(e),n=iY(e,t);null!==n&&oM(n,e,t,oO()),lf(e,t)}},tN=function(){return tS},tx=function(e,t){var n=tS;try{return tS=e,t()}finally{tS=n}},eF=function(e,t,n){switch(t){case"input":if(ep(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=rY(r);if(!i)throw Error(h(90));eu(r),ep(r,i)}}}break;case"textarea":e_(e,n);break;case"select":null!=(t=n.value)&&ev(e,!!n.multiple,t,!1)}},eH=o$,eq=oH;var l_={findFiberByHostInstance:rG,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lE={bundleType:l_.bundleType,version:l_.version,rendererPackageName:l_.rendererPackageName,rendererConfig:l_.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e5(e))?null:e.stateNode},findFiberByHostInstance:l_.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lS.isDisabled&&lS.supportsFiber)try{tu=lS.inject(lE),tc=lS}catch(e){}}$={usingClientEntryPoint:!1,Events:[rQ,rX,rY,eB,e$,o$]},H=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ly(t))throw Error(h(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},q=function(e,t){if(!ly(e))throw Error(h(299));var n=!1,r="",i=lp;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=lo(e,1,!1,null,null,n,!1,r,i),e[rH]=t.current,rv(8===e.nodeType?e.parentNode:e),new lm(t)},W=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(h(188));throw Error(h(268,e=Object.keys(e).join(",")))}return e=null===(e=e5(t))?null:e.stateNode},K=function(e){return oH(e)},G=function(e,t,n){if(!lv(t))throw Error(h(200));return lb(null,e,t,!0,n)},Q=function(e,t,n){if(!ly(e))throw Error(h(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=lp;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=lu(t,null,e,1,null!=n?n:null,i,!1,s,a),e[rH]=t.current,rv(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lg(t)},X=function(e,t,n){if(!lv(t))throw Error(h(200));return lb(null,e,t,!1,n)},Y=function(e){if(!lv(e))throw Error(h(40));return!!e._reactRootContainer&&(oH(function(){lb(null,null,e,!1,function(){e._reactRootContainer=null,e[rH]=null})}),!0)},J=o$,Z=function(e,t,n,r){if(!lv(n))throw Error(h(200));if(null==e||void 0===e._reactInternals)throw Error(h(38));return lb(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),f.register("fO90s",function(e,t){e.exports=f("gcnCG")}),f.register("gcnCG",function(e,t){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break}}function i(e){return 0===e.length?null:e[0]}function s(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,s=i>>>1;r<s;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else if(u<i&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n(e.exports,"unstable_now",()=>o,e=>o=e),n(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),n(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),n(e.exports,"unstable_LowPriority",()=>c,e=>c=e),n(e.exports,"unstable_NormalPriority",()=>h,e=>h=e),n(e.exports,"unstable_Profiling",()=>d,e=>d=e),n(e.exports,"unstable_UserBlockingPriority",()=>f,e=>f=e),n(e.exports,"unstable_cancelCallback",()=>p,e=>p=e),n(e.exports,"unstable_continueExecution",()=>m,e=>m=e),n(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),n(e.exports,"unstable_getCurrentPriorityLevel",()=>y,e=>y=e),n(e.exports,"unstable_getFirstCallbackNode",()=>v,e=>v=e),n(e.exports,"unstable_next",()=>w,e=>w=e),n(e.exports,"unstable_pauseExecution",()=>b,e=>b=e),n(e.exports,"unstable_requestPaint",()=>_,e=>_=e),n(e.exports,"unstable_runWithPriority",()=>E,e=>E=e),n(e.exports,"unstable_scheduleCallback",()=>S,e=>S=e),n(e.exports,"unstable_shouldYield",()=>k,e=>k=e),n(e.exports,"unstable_wrapCallback",()=>T,e=>T=e),"object"==typeof performance&&"function"==typeof performance.now){var o,l,u,c,h,d,f,p,m,g,y,v,w,b,_,E,S,k,T,I,C=performance;o=function(){return C.now()}}else{var N=Date,x=N.now();o=function(){return N.now()-x}}var R=[],A=[],P=1,D=null,O=3,L=!1,M=!1,U=!1,F="function"==typeof setTimeout?setTimeout:null,V="function"==typeof clearTimeout?clearTimeout:null,z="undefined"!=typeof setImmediate?setImmediate:null;function j(e){for(var t=i(A);null!==t;){if(null===t.callback)s(A);else if(t.startTime<=e)s(A),t.sortIndex=t.expirationTime,r(R,t);else break;t=i(A)}}function B(e){if(U=!1,j(e),!M){if(null!==i(R))M=!0,Z($);else{var t=i(A);null!==t&&ee(B,t.startTime-e)}}}function $(e,t){M=!1,U&&(U=!1,V(W),W=-1),L=!0;var n=O;try{for(j(t),D=i(R);null!==D&&(!(D.expirationTime>t)||e&&!Q());){var r=D.callback;if("function"==typeof r){D.callback=null,O=D.priorityLevel;var a=r(D.expirationTime<=t);t=o(),"function"==typeof a?D.callback=a:D===i(R)&&s(R),j(t)}else s(R);D=i(R)}if(null!==D)var l=!0;else{var u=i(A);null!==u&&ee(B,u.startTime-t),l=!1}return l}finally{D=null,O=n,L=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,q=null,W=-1,K=5,G=-1;function Q(){return!(o()-G<K)}function X(){if(null!==q){var e=o();G=e;var t=!0;try{t=q(!0,e)}finally{t?I():(H=!1,q=null)}}else H=!1}if("function"==typeof z)I=function(){z(X)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=X,I=function(){J.postMessage(null)}}else I=function(){F(X,0)};function Z(e){q=e,H||(H=!0,I())}function ee(e,t){W=F(function(){e(o())},t)}l=5,u=1,c=4,h=3,d=null,f=2,p=function(e){e.callback=null},m=function(){M||L||(M=!0,Z($))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},y=function(){return O},v=function(){return i(R)},w=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},b=function(){},_=function(){},E=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},S=function(e,t,n){var s=o();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?s+n:s,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:P++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>s?(e.sortIndex=n,r(A,e),null===i(R)&&e===i(A)&&(U?(V(W),W=-1):U=!0,ee(B,n-s))):(e.sortIndex=a,r(R,e),M||L||(M=!0,Z($))),e},k=Q,T=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}});var p={};p=f("1b2ls");var m={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),tq=(m=f("Xw6Mv")).createRoot,m.hydrateRoot;/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g=f("acw62");/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */(tU=tW||(tW={})).Pop="POP",/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */tU.Push="PUSH",/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */tU.Replace="REPLACE";const v="popstate";function w(e,t){if(!1===e||null==e)throw Error(t)}function b(e,t){if(!e){// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{// Welcome to debugging history!
//
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw Error(t);// eslint-disable-next-line no-empty
}catch(e){}}}/**
 * For browser-based histories, we combine the state and key into an object
 */function _(e,t){return{usr:e.state,key:e.key,idx:t}}/**
 * Creates a Location object with a unique key from the given Path
 */function E(e,t,n,r){return void 0===n&&(n=null),y({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?k(t):t,{state:n,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function S(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function k(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}(tF=tK||(tK={})).data="data",tF.deferred="deferred",tF.redirect="redirect",tF.error="error";const T=/^:\w+$/,I=e=>"*"===e;/**
 * @private
 */function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function N(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function x(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return(// When v7_relativeSplatPath is enabled, use the full pathname for the leaf
// match so we include splat values for "." links.  See:
// https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
t?n.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase):n.map(e=>e.pathnameBase))}/**
 * @private
 */function R(e,t,n,r){let i,s;void 0===r&&(r=!1),"string"==typeof e?i=k(e):(w(!(i=y({},e)).pathname||!i.pathname.includes("?"),N("?","pathname","search",i)),w(!i.pathname||!i.pathname.includes("#"),N("#","pathname","hash",i)),w(!i.search||!i.search.includes("#"),N("#","search","hash",i)));let a=""===e||""===i.pathname,o=a?"/":i.pathname;// Routing is relative to the current pathname if explicitly requested.
//
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(null==o)s=n;else{let e=t.length-1;// With relative="route" (the default), each leading .. segment means
// "go up one route" instead of "go up one URL segment".  This is a key
// difference from how <a href> works and a major reason we call this a
// "to" value instead of a "href".
if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */function(e,t){let n;void 0===t&&(t="/");let{pathname:r,search:i="",hash:s=""}="string"==typeof e?k(e):e;return{pathname:r?r.startsWith("/")?r:(n=t.replace(/\/+$/,"").split("/"),r.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t,search:D(i),hash:O(s)}}(i,s),u=o&&"/"!==o&&o.endsWith("/"),c=(a||"."===o)&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}/**
 * @private
 */const A=e=>e.join("/").replace(/\/\/+/g,"/"),P=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Symbol("deferred");/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g=f("acw62");function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const M=/*#__PURE__*/g.createContext(null),U=/*#__PURE__*/g.createContext(null),F=/*#__PURE__*/g.createContext(null),V=/*#__PURE__*/g.createContext(null),z=/*#__PURE__*/g.createContext({outlet:null,matches:[],isDataRoute:!1}),j=/*#__PURE__*/g.createContext(null);/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */function B(){return null!=g.useContext(V)}/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */function $(){return B()||w(!1),g.useContext(V).location}// Mute warnings for calls to useNavigate in SSR environments
function H(e){g.useContext(F).static||// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
g.useLayoutEffect(e)}/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */function q(){let{isDataRoute:e}=g.useContext(z);// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */function(){let e;let{router:t}=(X.UseNavigateStable,(e=g.useContext(M))||w(!1),e),n=J(Y.UseNavigateStable),r=g.useRef(!1);return H(()=>{r.current=!0}),g.useCallback(function(e,i){void 0===i&&(i={}),r.current&&("number"==typeof e?t.navigate(e):t.navigate(e,L({fromRouteId:n},i)))},[t,n])}():function(){B()||w(!1);let e=g.useContext(M),{basename:t,future:n,navigator:r}=g.useContext(F),{matches:i}=g.useContext(z),{pathname:s}=$(),a=JSON.stringify(x(i,n.v7_relativeSplatPath)),o=g.useRef(!1);return H(()=>{o.current=!0}),g.useCallback(function(n,i){// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n){r.go(n);return}let l=R(n,JSON.parse(a),s,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:A([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)},[t,r,a,s,e])}()}/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */function W(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=g.useContext(F),{matches:i}=g.useContext(z),{pathname:s}=$(),a=JSON.stringify(x(i,r.v7_relativeSplatPath));return g.useMemo(()=>R(e,JSON.parse(a),s,"path"===n),[e,a,s,n])}const K=/*#__PURE__*/g.createElement(function(){var e;let t,n,r;let i=(n=g.useContext(j),Y.UseRouteError,(t=g.useContext(U))||w(!1),r=J(Y.UseRouteError),// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
void 0!==n?n:null==(e=t.errors)?void 0:e[r]),s=null!=i&&"number"==typeof i.status&&"string"==typeof i.statusText&&"boolean"==typeof i.internal&&"data"in i?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),a=i instanceof Error?i.stack:null;return /*#__PURE__*/g.createElement(g.Fragment,null,/*#__PURE__*/g.createElement("h2",null,"Unexpected Application Error!"),/*#__PURE__*/g.createElement("h3",{style:{fontStyle:"italic"}},s),a?/*#__PURE__*/g.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)},null);class G extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return(// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
//
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation})}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?/*#__PURE__*/g.createElement(z.Provider,{value:this.props.routeContext},/*#__PURE__*/g.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(M);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),/*#__PURE__*/g.createElement(z.Provider,{value:t},r)}var X=((tV=X||{}).UseBlocker="useBlocker",tV.UseRevalidator="useRevalidator",tV.UseNavigateStable="useNavigate",tV),Y=((tz=Y||{}).UseBlocker="useBlocker",tz.UseLoaderData="useLoaderData",tz.UseActionData="useActionData",tz.UseRouteError="useRouteError",tz.UseNavigation="useNavigation",tz.UseRouteLoaderData="useRouteLoaderData",tz.UseMatches="useMatches",tz.UseRevalidator="useRevalidator",tz.UseNavigateStable="useNavigate",tz.UseRouteId="useRouteId",tz);// Internal version with hookName-aware debugging
function J(e){let t;let n=((t=g.useContext(z))||w(!1),t),r=n.matches[n.matches.length-1];return r.route.id||w(!1),r.route.id}const Z={};/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */function ee(e){w(!1)}/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */function et(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tW.Pop,navigator:s,static:a=!1,future:o}=e;B()&&w(!1);// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let l=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:l,navigator:s,static:a,future:L({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);"string"==typeof r&&(r=k(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:p="default"}=r,m=g.useMemo(()=>{let e=C(c,l);return null==e?null:{location:{pathname:e,search:h,hash:d,state:f,key:p},navigationType:i}},[l,c,h,d,f,p,i]);return null==m?null:/*#__PURE__*/g.createElement(F.Provider,{value:u},/*#__PURE__*/g.createElement(V.Provider,{children:n,value:m}))}/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */function en(e){let{children:t,location:n}=e;return(// Internal implementation with accept optional param for RouterProvider usage
function(e,t,n,r){let i;B()||w(!1);let{navigator:s}=g.useContext(F),{matches:a}=g.useContext(z),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=$();if(t){var h;let e="string"==typeof t?k(t):t;"/"===u||(null==(h=e.pathname)?void 0:h.startsWith(u))||w(!1),i=e}else i=c;let d=i.pathname||"/",f=/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */function(e,t,n){void 0===n&&(n="/");let r=C(("string"==typeof t?k(t):t).pathname||"/",n);if(null==r)return null;let i=function e(t,n,r,i){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i="");let s=(t,s,a)=>{var o;let l,u,c={relativePath:void 0===a?t.path||"":a,caseSensitive:!0===t.caseSensitive,childrenIndex:s,route:t};c.relativePath.startsWith("/")&&(w(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),c.relativePath=c.relativePath.slice(i.length));let h=A([i,c.relativePath]),d=r.concat(c);t.children&&t.children.length>0&&(w(// @ts-expect-error
!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+h+'".'),e(t.children,n,d,h)),(null!=t.path||t.index)&&n.push({path:h,score:(o=t.index,u=(l=h.split("/")).length,l.some(I)&&(u+=-2),o&&(u+=2),l.filter(e=>!I(e)).reduce((e,t)=>e+(T.test(t)?3:""===t?1:10),u)),routesMeta:d})};return t.forEach((e,t)=>{var n;// coarse-grain check for optional params
if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of /**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...i]=n,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===i.length)// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return s?[a,""]:[a];let o=e(i.join("/")),l=[];// for absolute paths, ensure `/` instead of empty segment
return(// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
l.push(...o.map(e=>""===e?a:[a,e].join("/"))),s&&l.push(...o),l.map(e=>t.startsWith("/")&&""===e?"/":e))}(e.path))s(e,t,n);else s(e,t)}),n}(e);!function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score// Higher score first
:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
n[n.length-1]-r[r.length-1]:// so they sort equally.
0)})}(i);let s=null;for(let e=0;null==s&&e<i.length;++e)s=function(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let e=0;e<n.length;++e){let a=n[e],o=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */function(e,t){var n,r,i;let s,a;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[o,l]=(n=e.path,r=e.caseSensitive,i=e.end,void 0===r&&(r=!1),void 0===i&&(i=!0),b("*"===n||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),s=[],a="^"+n.replace(/\/*\*?$/,"")// Ignore trailing / and /*, we'll handle it below
.replace(/^\/*/,"/")// Make sure it has a leading /
.replace(/[\\.*+^${}|()[\]]/g,"\\$&")// Escape special regex chars
.replace(/\/:(\w+)(\?)?/g,(e,t,n)=>(s.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")),n.endsWith("*")?(s.push({paramName:"*"}),a+="*"===n||"/*"===n?"(.*)$"// Already matched the initial /, just match the rest
:"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":""!==n&&"/"!==n&&// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),s]),u=t.match(o);if(!u)return null;let c=u[0],h=c.replace(/(.)\/+$/,"$1"),d=u.slice(1);return{params:l.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===r){let e=d[n]||"";h=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let s=d[n];return i&&!s?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return b(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s||"",r),e},{}),pathname:c,pathnameBase:h,pattern:e}}({path:a.relativePath,caseSensitive:a.caseSensitive,end:o},l);if(!u)return null;Object.assign(r,u.params);let c=a.route;s.push({// TODO: Can this as be avoided?
params:r,pathname:A([i,u.pathname]),pathnameBase:P(A([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=A([i,u.pathnameBase]))}return s}(i[e],// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
function(e){try{return decodeURI(e)}catch(t){return b(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r));return s}(e,{pathname:"/"===u?d:d.slice(u.length)||"/"}),p=function(e,t,n,r){var i,s;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){if(null==(s=n)||!s.errors)return null;// boundary.  Use the pre-matched (or shimmed) matches
e=n.matches}let a=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=a.findIndex(e=>e.route.id&&(null==o?void 0:o[e.route.id]));e>=0||w(!1),a=a.slice(0,Math.min(a.length,e+1))}// If we're in a partial hydration mode, detect if we need to render down to
// a given HydrateFallback while we load the rest of the hydration data
let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||i){// We found the first route that's not ready to render (waiting on
// lazy, or has a loader that hasn't run yet).  Flag that we need to
// render a fallback and render up until the appropriate fallback
l=!0,a=u>=0?a.slice(0,u+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{var s;let c;let h=!1,d=null,f=null;n&&(c=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||K,l&&(u<0&&0===i?(Z[s="route-fallback"]||(Z[s]=!0),h=!0,f=null):u===i&&(h=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=c?d:h?f:r.route.Component?/*#__PURE__*/g.createElement(r.route.Component,null):r.route.element?r.route.element:e,/*#__PURE__*/g.createElement(Q,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:null!=n},children:t})};// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?/*#__PURE__*/g.createElement(G,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:A([u,// Re-encode pathnames that were decoded inside matchRoutes
    s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:A([u,// Re-encode pathnames that were decoded inside matchRoutes
    s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,void 0,void 0);return(// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
t&&p?/*#__PURE__*/g.createElement(V.Provider,{value:{location:L({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:tW.Pop}},p):p)}(///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */function e(t,n){void 0===n&&(n=[]);let r=[];return g.Children.forEach(t,(t,i)=>{if(!/*#__PURE__*/g.isValidElement(t))// conditionals in their route config.
return;let s=[...n,i];if(t.type===g.Fragment){// Transparently support React.Fragment and its children.
r.push.apply(r,e(t.props.children,s));return}t.type!==ee&&w(!1),t.props.index&&t.props.children&&w(!1);let a={id:t.props.id||s.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=e(t.props.children,s)),r.push(a)}),r}(t),n))}g.startTransition;var er=((tj=er||{})[tj.pending=0]="pending",tj[tj.success=1]="success",tj[tj.error=2]="error",tj);function ei(){return(ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}new Promise(()=>{});const es=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ea=g.startTransition;/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */function eo(e){let{basename:t,children:n,future:r,window:i}=e,s=g.useRef();null==s.current&&(s.current=function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=tW.Pop,l=null,u=c();function c(){return(a.state||{idx:null}).idx}function h(){o=tW.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:o,location:f.location,delta:t})}function d(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:S(e);return w(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,a.replaceState(y({},a.state,{idx:u}),""));let f={get action(){return o},get location(){return e(i,a)},listen(e){if(l)throw Error("A history only accepts one active listener");return i.addEventListener(v,h),l=e,()=>{i.removeEventListener(v,h),l=null}},createHref:e=>t(i,e),createURL:d,encodeLocation(e){// Encode a Location the same way window.location would
let t=d(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){o=tW.Push;let r=E(f.location,e,t);n&&n(r,e);let h=_(r,u=c()+1),d=f.createHref(r);// try...catch because iOS limits us to 100 pushState calls :/
try{a.pushState(h,"",d)}catch(e){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
i.location.assign(d)}s&&l&&l({action:o,location:f.location,delta:1})},replace:function(e,t){o=tW.Replace;let r=E(f.location,e,t);n&&n(r,e);let i=_(r,u=c()),h=f.createHref(r);a.replaceState(i,"",h),s&&l&&l({action:o,location:f.location,delta:0})},go:e=>a.go(e)};return f}(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return E("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:S(t)},null,{window:i,v5Compat:!0}));let a=s.current,[o,l]=g.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=g.useCallback(e=>{u&&ea?ea(()=>l(e)):l(e)},[l,u]);return g.useLayoutEffect(()=>a.listen(c),[a,c]),/*#__PURE__*/g.createElement(et,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}m.flushSync;const el="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,eu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ec=/*#__PURE__*/g.forwardRef(function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,es),{basename:f}=g.useContext(F),p=!1;if("string"==typeof u&&eu.test(u)&&(// Render the absolute href server- and client-side
n=u,el))try{let e=new URL(window.location.href),t=new URL(u.startsWith("//")?e.protocol+u:u),n=C(t.pathname,f);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(e){}// Rendered into <a href> for relative URLs
let m=/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */function(e,t){let{relative:n}=void 0===t?{}:t;B()||w(!1);let{basename:r,navigator:i}=g.useContext(F),{hash:s,pathname:a,search:o}=W(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:A([r,a])),i.createHref({pathname:l,search:o,hash:s})}(u,{relative:i}),y=// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:o}=void 0===t?{}:t,l=q(),u=$(),c=W(e,{relative:a});return g.useCallback(t=>{0!==t.button||// Ignore everything but left clicks
n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),l(e,{replace:void 0!==r?r:S(u)===S(c),state:i,preventScrollReset:s,relative:a,unstable_viewTransition:o}))},[u,l,c,r,i,n,e,s,a,o])}(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});return /*#__PURE__*/g.createElement("a",ei({},d,{href:n||m,onClick:p||s?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:t,target:l}))});(tB=tG||(tG={})).UseScrollRestoration="useScrollRestoration",tB.UseSubmit="useSubmit",tB.UseSubmitFetcher="useSubmitFetcher",tB.UseFetcher="useFetcher",tB.useViewTransitionState="useViewTransitionState",(t$=tQ||(tQ={})).UseFetcher="useFetcher",t$.UseFetchers="useFetchers",t$.UseScrollRestoration="useScrollRestoration";var g=f("acw62"),eh={},ed=eh={};function ef(){throw Error("setTimeout has not been defined")}function ep(){throw Error("clearTimeout has not been defined")}function em(e){if(tX===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((tX===ef||!tX)&&setTimeout)return tX=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return tX(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return tX.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return tX.call(this,e,0)}}}!function(){try{tX="function"==typeof setTimeout?setTimeout:ef}catch(e){tX=ef}try{tY="function"==typeof clearTimeout?clearTimeout:ep}catch(e){tY=ep}}();var eg=[],ey=!1,ev=-1;function ew(){ey&&tJ&&(ey=!1,tJ.length?eg=tJ.concat(eg):ev=-1,eg.length&&eb())}function eb(){if(!ey){var e=em(ew);ey=!0;for(var t=eg.length;t;){for(tJ=eg,eg=[];++ev<t;)tJ&&tJ[ev].run();ev=-1,t=eg.length}tJ=null,ey=!1,function(e){if(tY===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((tY===ep||!tY)&&clearTimeout)return tY=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
tY(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return tY.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return tY.call(this,e)}}}(e)}}// v8 likes predictible objects
function e_(e,t){this.fun=e,this.array=t}function eE(){}ed.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];eg.push(new e_(e,t)),1!==eg.length||ey||em(eb)},e_.prototype.run=function(){this.fun.apply(null,this.array)},ed.title="browser",ed.browser=!0,ed.env={},ed.argv=[],ed.version="",ed.versions={},ed.on=eE,ed.addListener=eE,ed.once=eE,ed.off=eE,ed.removeListener=eE,ed.removeAllListeners=eE,ed.emit=eE,ed.prependListener=eE,ed.prependOnceListener=eE,ed.listeners=function(e){return[]},ed.binding=function(e){throw Error("process.binding is not supported")},ed.cwd=function(){return"/"},ed.chdir=function(e){throw Error("process.chdir is not supported")},ed.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},ek=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){// Surrogate Pair
let s=e[n++],a=e[n++],o=e[n++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},eT={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4,h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eS(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):ek(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length,a=s?n[e.charAt(t)]:0;++t;let o=t<e.length,l=o?n[e.charAt(t)]:64;++t;let u=t<e.length,c=u?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==l||null==c)throw new eI;let h=i<<2|a>>4;if(r.push(h),64!==l){let e=a<<4&240|l>>2;if(r.push(e),64!==c){let e=l<<6&192|c;r.push(e)}}}return r},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class eI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const eC=function(e){let t=eS(e);return eT.encodeByteArray(t,!0)},eN=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return eC(e).replace(/\./g,"")},ex=function(e){try{return eT.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},eR=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==c)return c;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,eA=()=>{if(void 0===eh||void 0===eh.env)return;let e=void 0;if(e)return JSON.parse(e)},eP=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&ex(e[1]);return t&&JSON.parse(t)},eD=()=>{try{return eR()||eA()||eP()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eO=e=>{var t,n;return null===(n=null===(t=eD())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},eL=e=>{let t=eO(e);if(!t)return;let n=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},eM=()=>{var e;return null===(e=eD())||void 0===e?void 0:e.config},eU=e=>{var t;return null===(t=eD())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function eV(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class ez extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */n){super(t),this.code=e,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,ez.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ej.prototype.create)}}class ej{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(eB,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`,o=new ez(r,a,n);return o}}const eB=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function e$(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(eH(n)&&eH(s)){if(!e$(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function eH(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function eq(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function eW(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function eK(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class eG{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=eQ),void 0===r.error&&(r.error=eQ),void 0===r.complete&&(r.complete=eQ);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){// nothing
}}),this.observers.push(r),i}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){// Ignore exceptions raised in Observers or missing methods of an
// Observer.
// Log error to console. b/31404806
"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eQ(){// do nothing
}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eX(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class eY{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eJ="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class eZ{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eF;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eJ})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=eJ){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eJ){return this.instances.has(e)}getOptions(e=eJ){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eJ?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(e=eJ){return this.component?this.component.multipleInstances?e:eJ:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class e0{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new eZ(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const e1=[];(tH=tZ||(tZ={}))[tH.DEBUG=0]="DEBUG",tH[tH.VERBOSE=1]="VERBOSE",tH[tH.INFO=2]="INFO",tH[tH.WARN=3]="WARN",tH[tH.ERROR=4]="ERROR",tH[tH.SILENT=5]="SILENT";const e2={debug:tZ.DEBUG,verbose:tZ.VERBOSE,info:tZ.INFO,warn:tZ.WARN,error:tZ.ERROR,silent:tZ.SILENT},e4=tZ.INFO,e9={[tZ.DEBUG]:"log",[tZ.VERBOSE]:"log",[tZ.INFO]:"info",[tZ.WARN]:"warn",[tZ.ERROR]:"error"},e3=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=e9[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e6{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=e4,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=e3,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */e1.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in tZ))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?e2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,tZ.DEBUG,...e),this._logHandler(this,tZ.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,tZ.VERBOSE,...e),this._logHandler(this,tZ.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,tZ.INFO,...e),this._logHandler(this,tZ.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,tZ.WARN,...e),this._logHandler(this,tZ.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,tZ.ERROR,...e),this._logHandler(this,tZ.ERROR,...e)}}const e5=(e,t)=>t.some(t=>e instanceof t),e7=new WeakMap,e8=new WeakMap,te=new WeakMap,tt=new WeakMap,tn=new WeakMap;let tr={get(e,t,n){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return e8.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||te.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return ti(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ti(n){var r;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ti(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&e7.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
tn.set(t,e),t}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(tt.has(n))return tt.get(n);let i="function"==typeof(r=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
r.apply(ts(this),e),ti(e7.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return ti(r.apply(ts(this),e))}:function(e,...t){let n=r.call(ts(this),e,...t);return te.set(n,e.sort?e.sort():[e]),ti(n)}:(r instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(e8.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
e8.set(e,t)}(r),e5(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,tr):r;return i!==n&&(tt.set(n,i),tn.set(i,n)),i}const ts=e=>tn.get(e),ta=["get","getKey","getAll","getAllKeys","count"],to=["put","add","delete","clear"],tl=new Map;function tu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tl.get(t))return tl.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=to.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ta.includes(n)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return tl.set(t,s),s}tr={...tM=tr,get:(e,t,n)=>tu(e,t)||tM.get(e,t,n),has:(e,t)=>!!tu(e,t)||tM.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const th="@firebase/app",td="0.9.25",tf=new e6("@firebase/app"),tp="[DEFAULT]",tm={[th]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tg=new Map,ty=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function tv(e){let t=e.name;if(ty.has(t))return tf.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let n of(ty.set(t,e),tg.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(n){tf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function tw(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const tb=new ej("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eY("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw tb.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */const tE="10.7.1";function tS(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:tp,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw tb.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(i)});if(n||(n=eM()),!n)throw tb.create("no-options"/* AppError.NO_OPTIONS */);let s=tg.get(i);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if(e$(n,s.options)&&e$(r,s.config))return s;throw tb.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:i})}let a=new e0(i);for(let e of ty.values())a.addComponent(e);let o=new t_(n,r,a);return tg.set(i,o),o}/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function tk(e=tp){let t=tg.get(e);if(!t&&e===tp&&eM())return tS();if(!t)throw tb.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function tT(e,t,n){var r;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let i=null!==(r=tm[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tf.warn(e.join(" "));return}tv(new eY(`${i}-version`,()=>({library:i,version:t}),"VERSION"/* ComponentType.VERSION */))}const tI="firebase-heartbeat-store";let tC=null;function tN(){return tC||(tC=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=ti(a);return r&&a.addEventListener("upgradeneeded",e=>{r(ti(a.result),e.oldVersion,e.newVersion,ti(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(tI)}}).catch(e=>{throw tb.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),tC}async function tx(e){try{let t=await tN(),n=await t.transaction(tI).objectStore(tI).get(tA(e));return n}catch(e){if(e instanceof ez)tf.warn(e.message);else{let t=tb.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});tf.warn(t.message)}}}async function tR(e,t){try{let n=await tN(),r=n.transaction(tI,"readwrite"),i=r.objectStore(tI);await i.put(t,tA(e)),await r.done}catch(e){if(e instanceof ez)tf.warn(e.message);else{let t=tb.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});tf.warn(t.message)}}}function tA(e){return`${e.name}!${e.options.appId}`}class tP{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tO(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=tD();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){var e;// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tD(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],r=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=n.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),tL(n)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:i.agent,dates:[i.date]}),tL(n)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=eN(JSON.stringify({version:2,heartbeats:n}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=r,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i)}}function tD(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class tO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await tx(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tR(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tR(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function tL(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return eN(JSON.stringify({version:2,heartbeats:e})).length}tv(new eY("platform-logger",e=>new tc(e),"PRIVATE"/* ComponentType.PRIVATE */)),tv(new eY("heartbeat",e=>new tP(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
tT(th,td,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
tT(th,td,"esm2017"),// Register platform SDK identifier (no version).
tT("fire-js","");var tM,tU,tF,tV,tz,tj,tB,t$,tH,tq,tW,tK,tG,tQ,tX,tY,tJ,tZ,t0,t1="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{},t2={},t4=t4||{},t9=t1||self;function t3(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function t6(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function t5(e,t,n){return e.call.apply(e.bind,arguments)}function t7(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function t8(e,t,n){return(t8=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t5:t7).apply(null,arguments)}function ne(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function nn(){this.s=this.s,this.o=this.o}nn.prototype.s=!1,nn.prototype.sa=function(){this.s||(this.s=!0,this.N())},nn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function ni(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ns(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(t3(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function na(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}na.prototype.h=function(){this.defaultPrevented=!0};var no=function(){if(!t9.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};t9.addEventListener("test",e,t),t9.removeEventListener("test",e,t)}catch(e){}return e}();function nl(e){return/^[\s\xa0]*$/.test(e)}function nu(){var e=t9.navigator;return e&&(e=e.userAgent)?e:""}function nc(e){return -1!=nu().indexOf(e)}function nh(e){return nh[" "](e),e}nh[" "]=function(){};var nd=nc("Opera"),nf=nc("Trident")||nc("MSIE"),np=nc("Edge"),nm=np||nf,ng=nc("Gecko")&&!(-1!=nu().toLowerCase().indexOf("webkit")&&!nc("Edge"))&&!(nc("Trident")||nc("MSIE"))&&!nc("Edge"),ny=-1!=nu().toLowerCase().indexOf("webkit")&&!nc("Edge");function nv(){var e=t9.document;return e?e.documentMode:void 0}e:{var nw,nb="",n_=(nw=nu(),ng?/rv:([^\);]+)(\)|;)/.exec(nw):np?/Edge\/([\d\.]+)/.exec(nw):nf?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(nw):ny?/WebKit\/(\S+)/.exec(nw):nd?/(?:Version)[ \/]?(\S+)/.exec(nw):void 0);if(n_&&(nb=n_?n_[1]:""),nf){var nE=nv();if(null!=nE&&nE>parseFloat(nb)){s=String(nE);break e}}s=nb}var nS=t9.document&&nf&&(nv()||parseInt(s,10))||void 0;function nk(e,t){if(na.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ng){e:{try{nh(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:nT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&nk.$.h.call(this)}}nt(nk,na);var nT={2:"touch",3:"pen",4:"mouse"};nk.prototype.h=function(){nk.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var nI="closure_listenable_"+(1e6*Math.random()|0),nC=0;function nN(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++nC,this.fa=this.ia=!1}function nx(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function nR(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function nA(e){let t={};for(let n in e)t[n]=e[n];return t}const nP="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nD(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<nP.length;t++)n=nP[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function nO(e){this.src=e,this.g={},this.h=0}function nL(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=nr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(nx(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function nM(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}nO.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=nM(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new nN(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var nU="closure_lm_"+(1e6*Math.random()|0),nF={};function nV(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=t6(i)?!!i.capture:!!i,o=n$(e);if(o||(e[nU]=o=new nO(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return nB.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)no||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(nj(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nz(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[nI])nL(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(nj(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=n$(t))?(nL(n,e),0==n.h&&(n.src=null,t[nU]=null)):nx(e)}}}function nj(e){return e in nF?nF[e]:nF[e]="on"+e}function nB(e,t){if(e.fa)e=!0;else{t=new nk(t,this);var n=e.listener,r=e.la||e.src;e.ia&&nz(e),e=n.call(r,t)}return e}function n$(e){return(e=e[nU])instanceof nO?e:null}var nH="__closure_events_fn_"+(1e9*Math.random()>>>0);function nq(e){return"function"==typeof e?e:(e[nH]||(e[nH]=function(t){return e.handleEvent(t)}),e[nH])}function nW(){nn.call(this),this.i=new nO(this),this.S=this,this.J=null}function nK(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new na(t,e);else if(t instanceof na)t.target=t.target||e;else{var i=t;nD(t=new na(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=nG(a,r,!0,t)&&i}if(i=nG(a=t.g=e,r,!0,t)&&i,i=nG(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=nG(a=t.g=n[s],r,!1,t)&&i}function nG(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&nL(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}nt(nW,nn),nW.prototype[nI]=!0,nW.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=t6(i)?!!i.capture:!!i,r=nq(r),t&&t[nI])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=nM(a=t.g[n],r,i,s))&&(nx(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=n$(t))&&(n=t.g[n.toString()],t=-1,n&&(t=nM(n,r,i,s)),(r=-1<t?n[t]:null)&&nz(r))}(this,e,t,n,r)},nW.prototype.N=function(){if(nW.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nx(n[r]);delete t.g[e],t.h--}}this.J=null},nW.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},nW.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var nQ=t9.JSON.stringify,nX=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new nY,e=>e.reset());class nY{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let nJ,nZ=!1,n0=new class{constructor(){this.h=this.g=null}add(e,t){let n=nX.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},n1=()=>{let e=t9.Promise.resolve(void 0);nJ=()=>{e.then(n2)}};var n2=()=>{let e;for(var t;e=null,n0.g&&(e=n0.g,n0.g=n0.g.next,n0.g||(n0.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){t9.setTimeout(()=>{throw e},0)}(e)}nX.j(t),100>nX.h&&(nX.h++,t.next=nX.g,nX.g=t)}nZ=!1};function n4(e,t){nW.call(this),this.h=e||1,this.g=t||t9,this.j=t8(this.qb,this),this.l=Date.now()}function n9(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function n3(e,t,n){if("function"==typeof e)n&&(e=t8(e,n));else if(e&&"function"==typeof e.handleEvent)e=t8(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:t9.setTimeout(e,t||0)}nt(n4,nW),(t0=n4.prototype).ga=!1,t0.T=null,t0.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nK(this,"tick"),this.ga&&(n9(this),this.start()))}},t0.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},t0.N=function(){n4.$.N.call(this),n9(this),delete this.g};class n6 extends nn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=n3(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(t9.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function n5(e){nn.call(this),this.h=e,this.g={}}nt(n5,nn);var n7=[];function n8(e,t,n,r){Array.isArray(n)||(n&&(n7[0]=n.toString()),n=n7);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=nq(r),t&&t[nI]?t.P(n,r,t6(i)?!!i.capture:!!i,s):nV(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=nq(r),t&&t[nI]?t.O(n,r,t6(i)?!!i.capture:!!i,s):nV(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function re(e){nR(e.g,function(e,t){this.g.hasOwnProperty(t)&&nz(e)},e),e.g={}}function rt(){this.g=!0}function rn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return nQ(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}n5.prototype.N=function(){n5.$.N.call(this),re(this)},n5.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},rt.prototype.Ea=function(){this.g=!1},rt.prototype.info=function(){};var rr={},ri=null;function rs(){return ri=ri||new nW}function ra(e){na.call(this,rr.Ta,e)}function ro(e){let t=rs();nK(t,new ra(t))}function rl(e,t){na.call(this,rr.STAT_EVENT,e),this.stat=t}function ru(e){let t=rs();nK(t,new rl(t,e))}function rc(e,t){na.call(this,rr.Ua,e),this.size=t}function rh(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return t9.setTimeout(function(){e()},t)}rr.Ta="serverreachability",nt(ra,na),rr.STAT_EVENT="statevent",nt(rl,na),rr.Ua="timingevent",nt(rc,na);var rd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rp(){}function rm(e){return e.h||(e.h=e.i())}function rg(){}rp.prototype.h=null;var ry={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rv(){na.call(this,"d")}function rw(){na.call(this,"c")}function rb(){}function r_(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new n5(this),this.P=rS,e=nm?125:void 0,this.V=new n4(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rE}function rE(){this.i=null,this.g="",this.h=!1}nt(rv,na),nt(rw,na),nt(rb,rp),rb.prototype.g=function(){return new XMLHttpRequest},rb.prototype.i=function(){return{}},o=new rb;var rS=45e3,rk={},rT={};function rI(e,t,n){e.L=1,e.A=rH(rV(t)),e.u=n,e.S=!0,rC(e,null)}function rC(e,t){e.G=Date.now(),rR(e),e.B=rV(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),r4(n.i,"t",r),e.o=0,n=e.l.J,e.h=new rE,e.g=iG(e.l,n?t:null,!e.u),0<e.O&&(e.M=new n6(t8(e.Pa,e,e.g),e.O)),n8(e.U,e.g,"readystatechange",e.nb),t=e.I?nA(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ro(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function rN(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function rx(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if((i=function(e,t){var n=e.o,r=t.indexOf("\n",n);return -1==r?rT:isNaN(n=Number(t.substring(n,r)))?rk:(r+=1)+n>t.length?rT:(t=t.slice(r,r+n),e.o=r+n,t)}(e,n))==rT){4==t&&(e.s=4,ru(14),r=!1),rn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rk){e.s=4,ru(15),rn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else rn(e.j,e.m,i,null),rL(e,i);rN(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,ru(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iz(t),t.M=!0,ru(11))):(rn(e.j,e.m,n,"[Invalid Chunked Response]"),rO(e),rD(e))}function rR(e){e.Y=Date.now()+e.P,rA(e,e.P)}function rA(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=rh(t8(e.lb,e),t)}function rP(e){e.C&&(t9.clearTimeout(e.C),e.C=null)}function rD(e){0==e.l.H||e.J||i$(e.l,e)}function rO(e){rP(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,n9(e.V),re(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rL(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||ie(n.i,e))){if(!e.K&&ie(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)iB(n),iP(n);else break e}iV(n),ru(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=rh(t8(n.ib,n),6e3));if(1>=r8(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else iq(n,11)}else if((e.K||n.g==e)&&iB(n),!nl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let i=o[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(it(s,s.h),s.h=null))}if(r.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,r$(r.I,r.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=iK(r,r.J?r.pa:null,r.Y),e.K){ir(r.i,e);var a=r.L;a&&e.setTimeout(a),e.C&&(rP(e),rR(e)),r.g=e}else iF(r);0<n.j.length&&iO(n)}else"stop"!=o[0]&&"close"!=o[0]||iq(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?iq(n,7):iA(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}ro(4)}catch(e){}}function rM(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(t3(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(t3(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(t3(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(t0=r_.prototype).setTimeout=function(e){this.P=e},t0.nb=function(e){e=e.target;let t=this.M;t&&3==iT(e)?t.l():this.Pa(e)},t0.Pa=function(e){try{if(e==this.g)e:{let c=iT(this.g);var t=this.g.Ia();let h=this.g.da();if(!(3>c)&&(3!=c||nm||this.g&&(this.h.h||this.g.ja()||iI(this.g)))){this.J||4!=c||7==t||(8==t||0>=h?ro(3):ro(2)),rP(this);var n=this.g.da();this.ca=n;t:if(rN(this)){var r=iI(this.g);e="";var i=r.length,s=4==iT(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rO(this),rD(this);var a="";break t}this.h.i=new t9.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nl(o)){var u=o;break t}}u=null}if(n=u)rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rL(this,n);else{this.i=!1,this.s=3,ru(12),rO(this),rD(this);break e}}this.S?(rx(this,c,a),nm&&this.i&&3==c&&(n8(this.U,this.V,"tick",this.mb),this.V.start())):(rn(this.j,this.m,a,null),rL(this,a)),4==c&&rO(this),this.i&&!this.J&&(4==c?i$(this.l,this):(this.i=!1,rR(this)))}else(function(e){let t={};e=(e.g&&2<=iT(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(nl(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,ru(12)):(this.s=0,ru(13)),rO(this),rD(this)}}}catch(e){}finally{}},t0.mb=function(){if(this.g){var e=iT(this.g),t=this.g.ja();this.o<t.length&&(rP(this),rx(this,e,t),this.i&&4!=e&&rR(this))}},t0.cancel=function(){this.J=!0,rO(this)},t0.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(ro(),ru(17)),rO(this),this.s=2,rD(this)):rA(this,this.Y-e)};var rU=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rF(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof rF){this.h=e.h,rz(this,e.j),this.s=e.s,this.g=e.g,rj(this,e.m),this.l=e.l;var t=e.i,n=new rZ;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),rB(this,n),this.o=e.o}else e&&(t=String(e).match(rU))?(this.h=!1,rz(this,t[1]||"",!0),this.s=rq(t[2]||""),this.g=rq(t[3]||"",!0),rj(this,t[4]),this.l=rq(t[5]||"",!0),rB(this,t[6]||"",!0),this.o=rq(t[7]||"")):(this.h=!1,this.i=new rZ(null,this.h))}function rV(e){return new rF(e)}function rz(e,t,n){e.j=n?rq(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rj(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rB(e,t,n){var r,i;t instanceof rZ?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(r0(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(r1(this,t),r4(this,n,e))},r)),r.j=i):(n||(t=rW(t,rY)),e.i=new rZ(t,e.h))}function r$(e,t,n){e.i.set(t,n)}function rH(e){return r$(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rq(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rW(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,rK),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rK(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rF.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rW(t,rG,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rW(t,rG,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(rW(n,"/"==n.charAt(0)?rX:rQ,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",rW(n,rJ)),e.join("")};var rG=/[#\/\?@]/g,rQ=/[#\?:]/g,rX=/[#\?]/g,rY=/[#\?@]/g,rJ=/#/g;function rZ(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function r0(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function r1(e,t){r0(e),t=r9(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function r2(e,t){return r0(e),t=r9(e,t),e.g.has(t)}function r4(e,t,n){r1(e,t),0<n.length&&(e.i=null,e.g.set(r9(e,t),ni(n)),e.h+=n.length)}function r9(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(t0=rZ.prototype).add=function(e,t){r0(this),this.i=null,e=r9(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},t0.forEach=function(e,t){r0(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},t0.ta=function(){r0(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},t0.Z=function(e){r0(this);let t=[];if("string"==typeof e)r2(this,e)&&(t=t.concat(this.g.get(r9(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},t0.set=function(e,t){return r0(this),this.i=null,r2(this,e=r9(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},t0.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},t0.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var r3=class{constructor(e,t){this.g=e,this.map=t}};function r6(e){this.l=e||r5,e=t9.PerformanceNavigationTiming?0<(e=t9.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(t9.g&&t9.g.Ka&&t9.g.Ka()&&t9.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r5=10;function r7(e){return!!e.h||!!e.g&&e.g.size>=e.j}function r8(e){return e.h?1:e.g?e.g.size:0}function ie(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function it(e,t){e.g?e.g.add(t):e.h=t}function ir(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ii(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return ni(e.i)}r6.prototype.cancel=function(){if(this.i=ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var is=class{stringify(e){return t9.JSON.stringify(e,void 0)}parse(e){return t9.JSON.parse(e,void 0)}};function ia(){this.g=new is}function io(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function il(e){this.l=e.ec||null,this.j=e.ob||!1}function iu(e,t){nW.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ic,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(il,rp),il.prototype.g=function(){return new iu(this.l,this.j)},il.prototype.i=(r={},function(){return r}),nt(iu,nW);var ic=0;function ih(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function id(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ip(e)}function ip(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(t0=iu.prototype).open=function(e,t){if(this.readyState!=ic)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ip(this)},t0.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||t9).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},t0.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,id(this)),this.readyState=ic},t0.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ip(this)),this.g&&(this.readyState=3,ip(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==t9.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ih(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},t0.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?id(this):ip(this),3==this.readyState&&ih(this)}},t0.Za=function(e){this.g&&(this.response=this.responseText=e,id(this))},t0.Ya=function(e){this.g&&(this.response=e,id(this))},t0.ka=function(){this.g&&id(this)},t0.setRequestHeader=function(e,t){this.v.append(e,t)},t0.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},t0.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(iu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var im=t9.JSON.parse;function ig(e){nW.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=iy,this.L=this.M=!1}nt(ig,nW);var iy="",iv=/^https?$/i,iw=["POST","PUT"];function ib(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,i_(e),iS(e)}function i_(e){e.F||(e.F=!0,nK(e,"complete"),nK(e,"error"))}function iE(e){if(e.h&&void 0!==t4&&(!e.C[1]||4!=iT(e)||2!=e.da())){if(e.v&&4==iT(e))n3(e.La,0,e);else if(nK(e,"readystatechange"),4==iT(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.I).match(rU)[1]||null;!i&&t9.self&&t9.self.location&&(i=t9.self.location.protocol.slice(0,-1)),n=!iv.test(i?i.toLowerCase():"")}t=n}if(t)nK(e,"complete"),nK(e,"success");else{e.m=6;try{var s=2<iT(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",i_(e)}}finally{iS(e)}}}}function iS(e,t){if(e.g){ik(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||nK(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function ik(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(t9.clearTimeout(e.A),e.A=null)}function iT(e){return e.g?e.g.readyState:0}function iI(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case iy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function iC(e){let t="";return nR(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function iN(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iC(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):r$(e,t,n))}function ix(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function iR(e){this.Ga=0,this.j=[],this.l=new rt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ix("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ix("baseRetryDelayMs",5e3,e),this.hb=ix("retryDelaySeedMs",1e4,e),this.eb=ix("forwardChannelMaxRetries",2,e),this.xa=ix("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new r6(e&&e.concurrentRequestLimit),this.Ja=new ia,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function iA(e){if(iD(e),3==e.H){var t=e.W++,n=rV(e.I);if(r$(n,"SID",e.K),r$(n,"RID",t),r$(n,"TYPE","terminate"),iM(e,n),(t=new r_(e,e.l,t)).L=2,t.A=rH(rV(n)),n=!1,t9.navigator&&t9.navigator.sendBeacon)try{n=t9.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&t9.Image&&((new Image).src=t.A,n=!0),n||(t.g=iG(t.l,null),t.g.ha(t.A)),t.G=Date.now(),rR(t)}iW(e)}function iP(e){e.g&&(iz(e),e.g.cancel(),e.g=null)}function iD(e){iP(e),e.u&&(t9.clearTimeout(e.u),e.u=null),iB(e),e.i.cancel(),e.m&&("number"==typeof e.m&&t9.clearTimeout(e.m),e.m=null)}function iO(e){if(!r7(e.i)&&!e.m){e.m=!0;var t=e.Na;nJ||n1(),nZ||(nJ(),nZ=!0),n0.add(t,e),e.C=0}}function iL(e,t){var n;n=t?t.m:e.W++;let r=rV(e.I);r$(r,"SID",e.K),r$(r,"RID",n),r$(r,"AID",e.V),iM(e,r),e.o&&e.s&&iN(r,e.o,e.s),n=new r_(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=iU(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),it(e.i,n),rI(n,r,t)}function iM(e,t){e.na&&nR(e.na,function(e,n){r$(t,n,e)}),e.h&&rM({},function(e,n){r$(t,n,e)})}function iU(e,t,n){n=Math.min(e.j.length,n);var r=e.h?t8(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{rM(e,function(e,n){let i=e;t6(e)&&(i=nQ(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function iF(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;nJ||n1(),nZ||(nJ(),nZ=!0),n0.add(t,e),e.A=0}}function iV(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=rh(t8(e.Ma,e),iH(e,e.A)),e.A++,!0)}function iz(e){null!=e.B&&(t9.clearTimeout(e.B),e.B=null)}function ij(e){e.g=new r_(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=rV(e.wa);r$(t,"RID","rpc"),r$(t,"SID",e.K),r$(t,"AID",e.V),r$(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&r$(t,"TO",e.qa),r$(t,"TYPE","xmlhttp"),iM(e,t),e.o&&e.s&&iN(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=rH(rV(t)),n.u=null,n.S=!0,rC(n,e)}function iB(e){null!=e.v&&(t9.clearTimeout(e.v),e.v=null)}function i$(e,t){var n=null;if(e.g==t){iB(e),iz(e),e.g=null;var r=2}else{if(!ie(e.i,t))return;n=t.F,ir(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i,s=e.C;nK(r=rs(),new rc(r,n)),iO(e)}else iF(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==r&&(i=t,!(r8(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=rh(t8(e.Na,e,i),iH(e,e.C)),e.C++,!0)))||2==r&&iV(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:iq(e,5);break;case 4:iq(e,10);break;case 3:iq(e,6);break;default:iq(e,2)}}}function iH(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function iq(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=t8(e.pb,e);n||(n=new rF("//www.google.com/images/cleardot.gif"),t9.location&&"http"==t9.location.protocol||rz(n,"https"),rH(n)),function(e,t){let n=new rt;if(t9.Image){let r=new Image;r.onload=ne(io,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ne(io,n,r,"TestLoadImage: error",!1,t),r.onabort=ne(io,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ne(io,n,r,"TestLoadImage: timeout",!1,t),t9.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else ru(2);e.H=0,e.h&&e.h.za(t),iW(e),iD(e)}function iW(e){if(e.H=0,e.ma=[],e.h){let t=ii(e.i);(0!=t.length||0!=e.j.length)&&(ns(e.ma,t),ns(e.ma,e.j),e.i.i.length=0,ni(e.j),e.j.length=0),e.h.ya()}}function iK(e,t,n){var r=n instanceof rF?rV(n):new rF(n);if(""!=r.g)t&&(r.g=t+"."+r.g),rj(r,r.m);else{var i=t9.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new rF(null);r&&rz(s,r),t&&(s.g=t),i&&rj(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&r$(r,n,t),r$(r,"VER",e.ra),iM(e,r),r}function iG(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new ig(e.Ha&&!e.va?new il({ob:n}):e.va)).Oa(e.J),t}function iQ(){}function iX(){if(nf&&!(10<=Number(nS)))throw Error("Environmental error: no available transport.")}function iY(e,t){nW.call(this),this.g=new iR(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!nl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!nl(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new i0(this)}function iJ(e){rv.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function iZ(){rw.call(this),this.status=1}function i0(e){this.g=e}function i1(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function i2(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function i4(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(t0=ig.prototype).Oa=function(e){this.M=e},t0.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?rm(this.u):rm(o),this.g.onreadystatechange=t8(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){ib(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=t9.FormData&&e instanceof t9.FormData,!(0<=nr(iw,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;ik(this),0<this.B&&((this.L=(s=this.g,nf&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=t8(this.ua,this)):this.A=n3(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ib(this,e)}},t0.ua=function(){void 0!==t4&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nK(this,"timeout"),this.abort(8))},t0.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,nK(this,"complete"),nK(this,"abort"),iS(this))},t0.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),iS(this,!0)),ig.$.N.call(this)},t0.La=function(){this.s||(this.G||this.v||this.l?iE(this):this.kb())},t0.kb=function(){iE(this)},t0.isActive=function(){return!!this.g},t0.da=function(){try{return 2<iT(this)?this.g.status:-1}catch(e){return -1}},t0.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},t0.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),im(t)}},t0.Ia=function(){return this.m},t0.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(t0=iR.prototype).ra=8,t0.H=1,t0.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new r_(this,this.l,e),s=this.s;if(this.U&&(s?nD(s=nA(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=iU(this,i,t),r$(n=rV(this.I),"RID",e),r$(n,"CVER",22),this.F&&r$(n,"X-HTTP-Session-Id",this.F),iM(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(iC(s)))+"&"+t:this.o&&iN(n,this.o,s)),it(this.i,i),this.bb&&r$(n,"TYPE","init"),this.P?(r$(n,"$req",t),r$(n,"SID","null"),i.aa=!0,rI(i,n,null)):rI(i,n,t),this.H=2}}else 3==this.H&&(e?iL(this,e):0==this.j.length||r7(this.i)||iL(this))}},t0.Ma=function(){if(this.u=null,ij(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=rh(t8(this.jb,this),e)}},t0.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ru(10),iP(this),ij(this))},t0.ib=function(){null!=this.v&&(this.v=null,iP(this),iV(this),ru(19))},t0.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ru(2)):(this.l.info("Failed to ping google.com"),ru(1))},t0.isActive=function(){return!!this.h&&this.h.isActive(this)},(t0=iQ.prototype).Ba=function(){},t0.Aa=function(){},t0.za=function(){},t0.ya=function(){},t0.isActive=function(){return!0},t0.Va=function(){},iX.prototype.g=function(e,t){return new iY(e,t)},nt(iY,nW),iY.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ru(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=iK(e,null,e.Y),iO(e)},iY.prototype.close=function(){iA(this.g)},iY.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=nQ(e),e=n);t.j.push(new r3(t.fb++,e)),3==t.H&&iO(t)},iY.prototype.N=function(){this.g.h=null,delete this.j,iA(this.g),delete this.g,iY.$.N.call(this)},nt(iJ,rv),nt(iZ,rw),nt(i0,iQ),i0.prototype.Ba=function(){nK(this.g,"a")},i0.prototype.Aa=function(e){nK(this.g,new iJ(e))},i0.prototype.za=function(e){nK(this.g,new iZ)},i0.prototype.ya=function(){nK(this.g,"b")},nt(i1,function(){this.blockSize=-1}),i1.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},i1.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)i2(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){i2(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){i2(this,r),i=0;break}}this.h=i,this.i+=t},i1.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i9={};function i3(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(i9,e)?i9[e]:i9[e]=new i4([0|e],0>e?-1:0):new i4([0|e],0>e?-1:0)}function i6(e){if(isNaN(e)||!isFinite(e))return i7;if(0>e)return sr(i6(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=i5;return new i4(t,0)}var i5=4294967296,i7=i3(0),i8=i3(1),se=i3(16777216);function st(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function sn(e){return -1==e.h}function sr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new i4(n,~e.h).add(i8)}function si(e,t){return e.add(sr(t))}function ss(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function sa(e,t){this.g=e,this.h=t}function so(e,t){if(st(t))throw Error("division by zero");if(st(e))return new sa(i7,i7);if(sn(e))return t=so(sr(e),t),new sa(sr(t.g),sr(t.h));if(sn(t))return t=so(e,sr(t)),new sa(sr(t.g),t.h);if(30<e.g.length){if(sn(e)||sn(t))throw Error("slowDivide_ only works with positive integers.");for(var n=i8,r=t;0>=r.X(e);)n=sl(n),r=sl(r);var i=su(n,1),s=su(r,1);for(r=su(r,2),n=su(n,2);!st(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=su(r,1),n=su(n,1)}return t=si(e,i.R(t)),new sa(i,t)}for(i=i7;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=i6(n)).R(t);sn(a)||0<a.X(e);)n-=r,a=(s=i6(n)).R(t);st(s)&&(s=i8),i=i.add(s),e=si(e,a)}return new sa(i,e)}function sl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new i4(n,e.h)}function su(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new i4(i,e.h)}(t0=i4.prototype).ea=function(){if(sn(this))return-sr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:i5+r)*t,t*=i5}return e},t0.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(st(this))return"0";if(sn(this))return"-"+sr(this).toString(e);for(var t=i6(Math.pow(e,6)),n=this,r="";;){var i=so(n,t).g,s=((0<(n=si(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(st(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t0.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},t0.X=function(e){return sn(e=si(this,e))?-1:st(e)?0:1},t0.abs=function(){return sn(this)?sr(this):this},t0.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new i4(n,-2147483648&n[n.length-1]?-1:0)},t0.R=function(e){if(st(this)||st(e))return i7;if(sn(this))return sn(e)?sr(this).R(sr(e)):sr(sr(this).R(e));if(sn(e))return sr(this.R(sr(e)));if(0>this.X(se)&&0>e.X(se))return i6(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,ss(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ss(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,ss(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,ss(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new i4(n,0)},t0.gb=function(e){return so(this,e).h},t0.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new i4(n,this.h&e.h)},t0.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new i4(n,this.h|e.h)},t0.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new i4(n,this.h^e.h)},iX.prototype.createWebChannel=iX.prototype.g,iY.prototype.send=iY.prototype.u,iY.prototype.open=iY.prototype.m,iY.prototype.close=iY.prototype.close,rd.NO_ERROR=0,rd.TIMEOUT=8,rd.HTTP_ERROR=6,rf.COMPLETE="complete",rg.EventType=ry,ry.OPEN="a",ry.CLOSE="b",ry.ERROR="c",ry.MESSAGE="d",nW.prototype.listen=nW.prototype.O,ig.prototype.listenOnce=ig.prototype.P,ig.prototype.getLastError=ig.prototype.Sa,ig.prototype.getLastErrorCode=ig.prototype.Ia,ig.prototype.getStatus=ig.prototype.da,ig.prototype.getResponseJson=ig.prototype.Wa,ig.prototype.getResponseText=ig.prototype.ja,ig.prototype.send=ig.prototype.ha,ig.prototype.setWithCredentials=ig.prototype.Oa,i1.prototype.digest=i1.prototype.l,i1.prototype.reset=i1.prototype.reset,i1.prototype.update=i1.prototype.j,i4.prototype.add=i4.prototype.add,i4.prototype.multiply=i4.prototype.R,i4.prototype.modulo=i4.prototype.gb,i4.prototype.compare=i4.prototype.X,i4.prototype.toNumber=i4.prototype.ea,i4.prototype.toString=i4.prototype.toString,i4.prototype.getBits=i4.prototype.D,i4.fromNumber=i6,i4.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return sr(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=i6(Math.pow(n,8)),i=i7,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=i6(Math.pow(n,a)),i=i.R(a).add(i6(o))):i=(i=i.R(r)).add(i6(o))}return i};var sc=t2.createWebChannelTransport=function(){return new iX},sh=t2.getStatEventTarget=function(){return rs()},sd=t2.ErrorCode=rd,sf=t2.EventType=rf,sp=t2.Event=rr,sm=t2.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};t2.FetchXmlHttpFactory=il;var sg=t2.WebChannel=rg,sy=t2.XhrIo=ig,sv=t2.Md5=i1,sw=t2.Integer=i4;const sb="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */class s_{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}/** A user with a null UID. */s_.UNAUTHENTICATED=new s_(null),// non-FirebaseAuth providers.
s_.GOOGLE_CREDENTIALS=new s_("google-credentials-uid"),s_.FIRST_PARTY=new s_("first-party-uid"),s_.MOCK_USER=new s_("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sE="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=new e6("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function sk(){return sS.logLevel}function sT(e,...t){if(sS.logLevel<=tZ.DEBUG){let n=t.map(sN);sS.debug(`Firestore (${sE}): ${e}`,...n)}}function sI(e,...t){if(sS.logLevel<=tZ.ERROR){let n=t.map(sN);sS.error(`Firestore (${sE}): ${e}`,...n)}}/**
 * @internal
 */function sC(e,...t){if(sS.logLevel<=tZ.WARN){let n=t.map(sN);sS.warn(`Firestore (${sE}): ${e}`,...n)}}/**
 * Converts an additional log parameter to a string representation.
 */function sN(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Formats an object as a JSON string, suitable for logging. */return JSON.stringify(e)}catch(t){// Converting to JSON failed, just log the object directly
return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */function sx(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${sE}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw sI(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={// Causes are copied from:
// https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
/** Not an error; returned on success. */OK:"ok",/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/** Unknown error or an error from a different error domain. */UNKNOWN:"unknown",/**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */INVALID_ARGUMENT:"invalid-argument",/**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */DEADLINE_EXCEEDED:"deadline-exceeded",/** Some requested entity (e.g., file or directory) was not found. */NOT_FOUND:"not-found",/**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */ALREADY_EXISTS:"already-exists",/**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */PERMISSION_DENIED:"permission-denied",/**
     * The request does not have valid authentication credentials for the
     * operation.
     */UNAUTHENTICATED:"unauthenticated",/**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */RESOURCE_EXHAUSTED:"resource-exhausted",/**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */FAILED_PRECONDITION:"failed-precondition",/**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */ABORTED:"aborted",/**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */OUT_OF_RANGE:"out-of-range",/** Operation is not implemented or not supported/enabled in this service. */UNIMPLEMENTED:"unimplemented",/**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */INTERNAL:"internal",/**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class sA extends ez{/** @hideconstructor */constructor(/**
     * The backend error code associated with this error.
     */e,/**
     * A custom error description.
     */t){super(e,t),this.code=e,this.message=t,// class and so inheritance does not work correctly. We could alternatively
// do the same "back-door inheritance" trick that FirebaseError does.
this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class sO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(s_.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class sL{constructor(e){this.token=e,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sM{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=s_.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new sP;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sP,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{sT("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(sT("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sP)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(sT("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||sx(),new sD(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||sx(),new s_(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class sU{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=s_.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class sF{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new sU(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(s_.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sz{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&sT("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,sT("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{sT("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):sT("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||sx(),this.R=e.token,new sV(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A utility class for generating unique alphanumeric IDs of a specified length.
 *
 * @internal
 * Exported internally for testing purposes.
 */class sj{static newId(){// Alphanumeric characters
let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */function(e){// Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)// be evenly mapped to indices of `chars` via a modulo operation.
n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function sB(e,t){return e<t?-1:e>t?1:0}/** Helper to compare arrays using isEqual(). */function s$(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */class sH{/**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */constructor(/**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */e,/**
     * The fractions of a second at nanosecond resolution.*
     */t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new sA(sR.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new sA(sR.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return sH.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(e){return sH.fromMillis(e.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new sH(t,n)}/**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */toDate(){return new Date(this.toMillis())}/**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?sB(this.nanoseconds,e.nanoseconds):sB(this.seconds,e.seconds)}/**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}/** Returns a textual representation of this `Timestamp`. */toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}/** Returns a JSON-serializable representation of this `Timestamp`. */toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}/**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */valueOf(){// This method returns a string of the form <seconds>.<nanoseconds> where
// <seconds> is translated to have a non-negative value and both <seconds>
// and <nanoseconds> are left-padded with zeroes to be a consistent length.
// Strings with this format then have a lexiographical ordering that matches
// the expected ordering. The <seconds> translation is done to avoid having
// a leading negative sign (i.e. a leading '-' character) in its string
// representation, which would affect its lexiographical ordering.
let e=this.seconds- -62135596800;// Note: Up to 12 decimal digits are required to represent all valid
// 'seconds' values.
return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */class sq{constructor(e){this.timestamp=e}static fromTimestamp(e){return new sq(e)}static min(){return new sq(new sH(0,0))}static max(){return new sq(new sH(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Path represents an ordered sequence of string segments.
 */class sW{constructor(e,t,n){void 0===t?t=0:t>e.length&&sx(),void 0===n?n=e.length-t:n>e.length-t&&sx(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===sW.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof sW?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class sK extends sW{construct(e,t,n){return new sK(e,t,n)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new sA(sR.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...n.split("/").filter(e=>e.length>0))}return new sK(t)}static emptyPath(){return new sK([])}}const sG=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class sQ extends sW{construct(e,t,n){return new sQ(e,t,n)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(e){return sG.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sQ.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new sQ(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new sA(sR.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new sA(sR.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new sA(sR.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new sA(sR.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sQ(t)}static emptyPath(){return new sQ([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @internal
 */class sX{constructor(e){this.path=e}static fromPath(e){return new sX(sK.fromString(e))}static fromName(e){return new sX(sK.fromString(e).popFirst(5))}static empty(){return new sX(sK.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===sK.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return sK.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new sX(new sK(e.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class sY{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */e,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */t,/*
     * The largest mutation batch id that's been processed by Firestore.
     */n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}/** Returns an offset that sorts before all regular offsets. */static min(){return new sY(sq.min(),sX.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new sY(sq.max(),sX.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class sJ{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */async function sZ(e){if(e.code!==sR.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;sT("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */class s0{constructor(e){// NOTE: next/catchCallback will always point to our own wrapper functions,
// not the user's raw next() or catch() callbacks.
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,// chaining.
this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&// value should be defined unless T is Void, but we can't express
// that in the type system.
this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&sx(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new s0((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof s0?t:s0.resolve(t)}catch(e){return s0.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):s0.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):s0.reject(t)}static resolve(e){return new s0((t,n)=>{t(e)})}static reject(e){return new s0((t,n)=>{n(e)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
e){return new s0((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(e){let t=s0.resolve(!1);for(let n of e)t=t.next(e=>e?s0.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(e,t){return new s0((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(e,t){return new s0((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function s1(e){// Use name equality, as instanceof checks on errors don't work with errors
// that wrap other errors.
return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */class s2{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}/** Returns whether the value represents -0. */function s4(e){// Detect if the value is -0.0. Based on polyfill from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s9(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function s3(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function s6(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}s2._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class s5{constructor(e,t){this.comparator=e,this.root=t||s8.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new s5(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,s8.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new s5(this.comparator,this.root.remove(e,this.comparator).copy(null,null,s8.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(e){// Number of nodes that were pruned when descending right
let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.root.reverseTraversal(e)}// Returns an iterator over the SortedMap.
getIterator(){return new s7(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new s7(this.root,e,this.comparator,!1)}getReverseIterator(){return new s7(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new s7(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class s7{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class s8{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:s8.RED,this.left=null!=r?r:s8.EMPTY,this.right=null!=i?i:s8.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,n,r,i){return new s8(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
// for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}// Traverses the tree in reverse key order and calls the specified action
// function for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}// Returns the minimum node in the tree.
min(){return this.left.isEmpty()?this:this.left.min()}// Returns the maximum key in the tree.
minKey(){return this.min().key}// Returns the maximum key in the tree.
maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}// Returns new tree, with the key/value added.
insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return s8.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return s8.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,s8.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,s8.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw sx();let e=this.left.check();if(e!==this.right.check())throw sx();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
s8.EMPTY=null,s8.RED=!0,s8.BLACK=!1,// end LLRBEmptyNode
s8.EMPTY=new class{constructor(){this.size=0}get key(){throw sx()}get value(){throw sx()}get color(){throw sx()}get left(){throw sx()}get right(){throw sx()}// Returns a copy of the current node.
copy(e,t,n,r,i){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,n){return new s8(e,t)}// Returns a copy of the tree, with the specified key removed.
remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}// For testing.
checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */class ae{constructor(e){this.comparator=e,this.data=new s5(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new at(this.data.getIterator())}getIteratorFrom(e){return new at(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ae(this.comparator);return t.data=e,t}}class at{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */class an{constructor(e){this.fields=e,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
e.sort(sQ.comparator)}static empty(){return new an([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(e){let t=new ae(sQ.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new an(t.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return s$(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An error encountered while decoding base64 string.
 */class ar extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */class ai{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ar("Invalid base64 string: "+e):e}}(e);return new ai(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ai(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return sB(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ai.EMPTY_BYTE_STRING=new ai("");const as=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function aa(e){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(e||sx(),"string"==typeof e){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let t=0,n=as.exec(e);if(n||sx(),n[1]){// Pad the fraction out to 9 digits (nanos).
let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}// Parse the date to get the seconds.
let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ao(e.seconds),nanos:ao(e.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function ao(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}/** Converts the possible Proto types for Blobs into a ByteString. */function al(e){return"string"==typeof e?ai.fromBase64String(e):ai.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */function au(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function ac(e){let t=e.mapValue.fields.__previous_value__;return au(t)?ac(t):t}/**
 * Returns the local time at which this timestamp was first set.
 */function ah(e){let t=aa(e.mapValue.fields.__local_write_time__.timestampValue);return new sH(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class af{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new af("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof af&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function am(e){return"nullValue"in e?0/* TypeOrder.NullValue */:"booleanValue"in e?1/* TypeOrder.BooleanValue */:"integerValue"in e||"doubleValue"in e?2/* TypeOrder.NumberValue */:"timestampValue"in e?3/* TypeOrder.TimestampValue */:"stringValue"in e?5/* TypeOrder.StringValue */:"bytesValue"in e?6/* TypeOrder.BlobValue */:"referenceValue"in e?7/* TypeOrder.RefValue */:"geoPointValue"in e?8/* TypeOrder.GeoPointValue */:"arrayValue"in e?9/* TypeOrder.ArrayValue */:"mapValue"in e?au(e)?4/* TypeOrder.ServerTimestampValue */:aC(e)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:sx()}/** Tests `left` and `right` for equality based on the backend semantics. */function ag(e,t){if(e===t)return!0;let n=am(e);if(n!==am(t))return!1;switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return e.booleanValue===t.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return ah(e).isEqual(ah(t));case 3/* TypeOrder.TimestampValue */:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=aa(e.timestampValue),r=aa(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue===t.stringValue;case 6/* TypeOrder.BlobValue */:return al(e.bytesValue).isEqual(al(t.bytesValue));case 7/* TypeOrder.RefValue */:return e.referenceValue===t.referenceValue;case 8/* TypeOrder.GeoPointValue */:return ao(e.geoPointValue.latitude)===ao(t.geoPointValue.latitude)&&ao(e.geoPointValue.longitude)===ao(t.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ao(e.integerValue)===ao(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ao(e.doubleValue),r=ao(t.doubleValue);return n===r?s4(n)===s4(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9/* TypeOrder.ArrayValue */:return s$(e.arrayValue.values||[],t.arrayValue.values||[],ag);case 10/* TypeOrder.ObjectValue */:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(s9(n)!==s9(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ag(n[e],r[e])))return!1;return!0}(e,t);default:return sx()}}function ay(e,t){return void 0!==(e.values||[]).find(e=>ag(e,t))}function av(e,t){if(e===t)return 0;let n=am(e),r=am(t);if(n!==r)return sB(n,r);switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return sB(e.booleanValue,t.booleanValue);case 2/* TypeOrder.NumberValue */:return function(e,t){let n=ao(e.integerValue||e.doubleValue),r=ao(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3/* TypeOrder.TimestampValue */:return aw(e.timestampValue,t.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return aw(ah(e),ah(t));case 5/* TypeOrder.StringValue */:return sB(e.stringValue,t.stringValue);case 6/* TypeOrder.BlobValue */:return function(e,t){let n=al(e),r=al(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7/* TypeOrder.RefValue */:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=sB(n[e],r[e]);if(0!==t)return t}return sB(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(e,t){let n=sB(ao(e.latitude),ao(t.latitude));return 0!==n?n:sB(ao(e.longitude),ao(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=av(n[e],r[e]);if(t)return t}return sB(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(e,t){if(e===ap.mapValue&&t===ap.mapValue)return 0;if(e===ap.mapValue)return 1;if(t===ap.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=sB(r[e],s[e]);if(0!==t)return t;let a=av(n[r[e]],i[s[e]]);if(0!==a)return a}return sB(r.length,s.length)}(e.mapValue,t.mapValue);default:throw sx()}}function aw(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return sB(e,t);let n=aa(e),r=aa(t),i=sB(n.seconds,r.seconds);return 0!==i?i:sB(n.nanos,r.nanos)}function ab(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=aa(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?al(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,sX.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=ab(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${ab(e.fields[i])}`;return n+"}"}(e.mapValue):sx()}/** Returns true if `value` is an IntegerValue . */function a_(e){return!!e&&"integerValue"in e}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function aE(e){return!!e&&"arrayValue"in e}/** Returns true if `value` is a NullValue. */function aS(e){return!!e&&"nullValue"in e}/** Returns true if `value` is NaN. */function ak(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}/** Returns true if `value` is a MapValue. */function aT(e){return!!e&&"mapValue"in e}/** Creates a deep copy of `source`. */function aI(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return s3(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=aI(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=aI(e.arrayValue.values[n]);return t}return Object.assign({},e)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function aC(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */class aN{constructor(e){this.value=e}static empty(){return new aN({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!aT(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=aI(t)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(e){let t=sQ.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){// Insert the accumulated changes at this parent location
let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=aI(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(e){let t=this.field(e.popLast());aT(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ag(this.value,e.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];aT(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(e,t,n){for(let r of(s3(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new aN(aI(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */class ax{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(e){return new ax(e,0/* DocumentType.INVALID */,/* version */sq.min(),/* readTime */sq.min(),/* createTime */sq.min(),aN.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(e,t,n,r){return new ax(e,1/* DocumentType.FOUND_DOCUMENT */,/* version */t,/* readTime */sq.min(),/* createTime */n,r,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(e,t){return new ax(e,2/* DocumentType.NO_DOCUMENT */,/* version */t,/* readTime */sq.min(),/* createTime */sq.min(),aN.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(e,t){return new ax(e,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */t,/* readTime */sq.min(),/* createTime */sq.min(),aN.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(e,t){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(sq.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=t,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(e){return this.version=e,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=aN.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(e){return this.version=e,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=aN.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=sq.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(e){return e instanceof ax&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ax(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */class aR{constructor(e,t){this.position=e,this.inclusive=t}}function aA(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?sX.comparator(sX.fromName(a.referenceValue),n.key):av(a,n.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(r*=-1),0!==r)break}return r}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function aP(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ag(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */class aD{constructor(e,t="asc"/* Direction.ASCENDING */){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{}class aL extends aO{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t,n){return e.isKeyField()?"in"/* Operator.IN */===t||"not-in"/* Operator.NOT_IN */===t?this.createKeyFieldInFilter(e,t,n):new aV(e,t,n):"array-contains"/* Operator.ARRAY_CONTAINS */===t?new a$(e,n):"in"/* Operator.IN */===t?new aH(e,n):"not-in"/* Operator.NOT_IN */===t?new aq(e,n):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===t?new aW(e,n):new aL(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"/* Operator.IN */===t?new az(e,n):new aj(e,n)}matches(e){let t=e.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==t&&this.matchesComparison(av(t,this.value)):null!==t&&am(this.value)===am(t)&&this.matchesComparison(av(t,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(e){switch(this.op){case"<"/* Operator.LESS_THAN */:return e<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return e<=0;case"=="/* Operator.EQUAL */:return 0===e;case"!="/* Operator.NOT_EQUAL */:return 0!==e;case">"/* Operator.GREATER_THAN */:return e>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return e>=0;default:return sx()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class aM extends aO{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t){return new aM(e,t)}matches(e){return aU(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}}function aU(e){return"and"/* CompositeOperator.AND */===e.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function aF(e){for(let t of e.filters)if(t instanceof aM)return!1;return!0}class aV extends aL{constructor(e,t,n){super(e,t,n),this.key=sX.fromName(n.referenceValue)}matches(e){let t=sX.comparator(e.key,this.key);return this.matchesComparison(t)}}/** Filter that matches on key fields within an array. */class az extends aL{constructor(e,t){super(e,"in"/* Operator.IN */,t),this.keys=aB("in"/* Operator.IN */,t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}/** Filter that matches on key fields not present within an array. */class aj extends aL{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t),this.keys=aB("not-in"/* Operator.NOT_IN */,t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function aB(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>sX.fromName(e.referenceValue))}/** A Filter that implements the array-contains operator. */class a$ extends aL{constructor(e,t){super(e,"array-contains"/* Operator.ARRAY_CONTAINS */,t)}matches(e){let t=e.data.field(this.field);return aE(t)&&ay(t.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class aH extends aL{constructor(e,t){super(e,"in"/* Operator.IN */,t)}matches(e){let t=e.data.field(this.field);return null!==t&&ay(this.value.arrayValue,t)}}/** A Filter that implements the not-in operator. */class aq extends aL{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t)}matches(e){if(ay(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ay(this.value.arrayValue,t)}}/** A Filter that implements the array-contains-any operator. */class aW extends aL{constructor(e,t){super(e,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,t)}matches(e){let t=e.data.field(this.field);return!(!aE(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ay(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Visible for testing
class aK{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function aG(e,t=null,n=[],r=[],i=null,s=null,a=null){return new aK(e,t,n,r,i,s,a)}function aQ(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof aL)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString()+t.op.toString()+ab(t.value);if(aF(t)&&aU(t))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return t.filters.map(t=>e(t)).join(",");{// filter instanceof CompositeFilter
    let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>ab(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>ab(e)).join(",")),e.ce=t}return e.ce}function aX(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof aL?n instanceof aL&&t.op===n.op&&t.field.isEqual(n.field)&&ag(t.value,n.value):t instanceof aM?n instanceof aM&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void sx()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!aP(e.startAt,t.startAt)&&aP(e.endAt,t.endAt)}function aY(e){return sX.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/** Returns the number of segments of a perfect index for this target. *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */class aJ{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(e,t=null,n=[],r=[],i=null,s="F"/* LimitType.First */,a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,// non-aggregate queries.
this.he=null,// aggregate queries. Unlike targets for non-aggregate queries,
// aggregate query targets do not contain normalized order-bys, they only
// contain explicit order-bys.
this.Pe=null,this.startAt,this.endAt}}/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 *//**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */function aZ(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}/**
 * Returns the normalized order-by constraint that is used to execute the Query,
 * which can be different from the order-by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`). The normalized order-by
 * includes implicit order-bys in addition to the explicit user provided
 * order-bys.
 */function a0(e){if(null===e.le){let t;e.le=[];let n=new Set;// Any explicit order by fields should be added as is.
for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());// The order of the implicit ordering always matches the last explicit order by.
let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */,i=(t=new ae(sQ.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t);// Any inequality fields not explicitly ordered should be implicitly ordered in a lexicographical
// order. When there are multiple inequality filters on the same field, the field should be added
// only once.
// Note: `SortedSet<FieldPath>` sorts the key field before other fields. However, we want the key
// field to be sorted last.
i.forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new aD(t,r))}),n.has(sQ.keyField().canonicalString())||e.le.push(new aD(sQ.keyField(),r))}return e.le}/**
 * Converts this `Query` instance to its corresponding `Target` representation.
 */function a1(e){return e.he||(e.he=/**
 * Converts this `Query` instance to its corresponding `Target` representation,
 * for use within an aggregate query. Unlike targets for non-aggregate queries,
 * aggregate query targets do not contain normalized order-bys, they only
 * contain explicit order-bys.
 */function(e,t){if("F"/* LimitType.First */===e.limitType)return aG(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{// Flip the orderBy directions since we want the last results
t=t.map(e=>{let t="desc"/* Direction.DESCENDING */===e.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;return new aD(e.field,t)});// We need to swap the cursors to match the now-flipped query ordering.
let n=e.endAt?new aR(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new aR(e.startAt.position,e.startAt.inclusive):null;// Now return as a LimitType.First query.
return aG(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,a0(e))),e.he}function a2(e,t,n){return new aJ(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function a4(e,t){return aX(a1(e),a1(t))&&e.limitType===t.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function a9(e){return`${aQ(a1(e))}|lt:${e.limitType}`}function a3(e){var t;let n;return`Query(target=${n=(t=a1(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>/** Returns a debug description for `filter`. */(function e(t){return t instanceof aL?`${t.field.canonicalString()} ${t.op} ${ab(t.value)}`:t instanceof aM?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ab(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ab(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function a6(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):sX.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){// We must use `queryNormalizedOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let n of a0(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(e,t,n){let r=aA(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,a0(e),t))&&(!e.endAt||!!function(e,t,n){let r=aA(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,a0(e),t))}/**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */function a5(e){return(t,n)=>{let r=!1;for(let i of a0(e)){let e=function(e,t,n){let r=e.field.isKeyField()?sX.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?av(r,i):sx()}(e.field,t,n);switch(e.dir){case"asc"/* Direction.ASCENDING */:return r;case"desc"/* Direction.DESCENDING */:return -1*r;default:return sx()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */class a7{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}/** Put this key and value in the map. */set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){s3(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return s6(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a8=new s5(sX.comparator),oe=new s5(sX.comparator);function ot(...e){let t=oe;for(let n of e)t=t.insert(n.key,n);return t}function on(e){let t=oe;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function or(){return new a7(e=>e.toString(),(e,t)=>e.isEqual(t))}const oi=new s5(sX.comparator),os=new ae(sX.comparator);function oa(...e){let t=os;for(let n of e)t=t.add(n);return t}const oo=new ae(sB);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */function ol(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:s4(t)?"-0":t}}/**
 * Returns an IntegerValue for `value`.
 */function ou(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Used to represent a field transform on a mutation. */class oc{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
// See https://github.com/microsoft/TypeScript/issues/5451
this._=void 0}}/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */function oh(e,t){return e instanceof oy?/** Returns true if `value` is either an IntegerValue or a DoubleValue. */a_(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class od extends oc{}/** Transforms an array value via a union operation. */class of extends oc{constructor(e){super(),this.elements=e}}function op(e,t){let n=ow(t);for(let t of e.elements)n.some(e=>ag(e,t))||n.push(t);return{arrayValue:{values:n}}}/** Transforms an array value via a remove operation. */class om extends oc{constructor(e){super(),this.elements=e}}function og(e,t){let n=ow(t);for(let t of e.elements)n=n.filter(e=>!ag(e,t));return{arrayValue:{values:n}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class oy extends oc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ov(e){return ao(e.integerValue||e.doubleValue)}function ow(e){return aE(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/** The result of successfully applying a mutation to the backend. */class ob{constructor(/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */e,/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */t){this.version=e,this.transformResults=t}}/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */class o_{constructor(e,t){this.updateTime=e,this.exists=t}/** Creates a new empty Precondition. */static none(){return new o_}/** Creates a new Precondition with an exists flag. */static exists(e){return new o_(void 0,e)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(e){return new o_(e)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function oE(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */class oS{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function ok(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===t)return e.isNoDocument()?new oP(e.key,o_.none()):new oC(e.key,e.data,o_.none());{let n=e.data,r=aN.empty(),i=new ae(sQ.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new oN(e.key,r,new an(i.toArray()),o_.none())}}/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param previousMask - The fields that have been updated before applying this mutation.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns A `FieldMask` representing the fields that are changed by applying this mutation.
 */function oT(e,t,n,r){return e instanceof oC?function(e,t,n,r){if(!oE(e.precondition,t))// caused a name collision).
return n;let i=e.value.clone(),s=oA(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(e,t,n,r):e instanceof oN?function(e,t,n,r){if(!oE(e.precondition,t))return n;let i=oA(e.fieldTransforms,r,t),s=t.data;return(s.setAll(ox(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):oE(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function oI(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&s$(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof of&&r instanceof of||n instanceof om&&r instanceof om?s$(n.elements,r.elements,ag):n instanceof oy&&r instanceof oy?ag(n.Ie,r.Ie):n instanceof od&&r instanceof od)})))&&(0/* MutationType.Set */===e.type?e.value.isEqual(t.value):1/* MutationType.Patch */!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class oC extends oS{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class oN extends oS{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function ox(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function oR(e,t,n){var r;let i=new Map;e.length===n.length||sx();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof of?op(o,l):o instanceof om?og(o,l):r))}return i}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function oA(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof od?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return t&&au(t)&&(t=ac(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof of?op(e,s):e instanceof om?og(e,s):function(e,t){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let n=oh(e,t),r=ov(n)+ov(e.Ie);return a_(n)&&a_(e.Ie)?ou(r):ol(e.serializer,r)}(e,s))}return r}/** A mutation that deletes the document at the given key. */class oP extends oS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class oD extends oS{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A batch of mutations that will be sent as one unit to the backend.
 */class oO{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof oC?function(e,t,n){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let r=e.value.clone(),i=oR(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof oN?function(e,t,n){if(!oE(e.precondition,t))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void t.convertToUnknownDocument(n.version);let r=oR(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ox(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(e,t){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=oT(n,e,t,this.localWriteTime));// Second, apply all user-provided mutations.
for(let n of this.mutations)n.key.isEqual(e.key)&&(t=oT(n,e,t,this.localWriteTime));return t}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(e,t){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let n=or();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
a=t.has(r.key)?null:a;let o=ok(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(sq.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oa())}isEqual(e){return this.batchId===e.batchId&&s$(this.mutations,e.mutations,(e,t)=>oI(e,t))&&s$(this.baseMutations,e.baseMutations,(e,t)=>oI(e,t))}}/** The result of applying a mutation batch to the backend. */class oL{constructor(e,t,n,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(e,t,n){e.mutations.length===n.length||sx();let r=oi,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new oL(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */class oM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 *//**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */function oF(e){if(void 0===e)// to send invalid proto messages) we may get an error with no GRPC code.
return sI("GRPC error has no .code"),sR.UNKNOWN;switch(e){case l.OK:return sR.OK;case l.CANCELLED:return sR.CANCELLED;case l.UNKNOWN:return sR.UNKNOWN;case l.DEADLINE_EXCEEDED:return sR.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return sR.RESOURCE_EXHAUSTED;case l.INTERNAL:return sR.INTERNAL;case l.UNAVAILABLE:return sR.UNAVAILABLE;case l.UNAUTHENTICATED:return sR.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return sR.INVALID_ARGUMENT;case l.NOT_FOUND:return sR.NOT_FOUND;case l.ALREADY_EXISTS:return sR.ALREADY_EXISTS;case l.PERMISSION_DENIED:return sR.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return sR.FAILED_PRECONDITION;case l.ABORTED:return sR.ABORTED;case l.OUT_OF_RANGE:return sR.OUT_OF_RANGE;case l.UNIMPLEMENTED:return sR.UNIMPLEMENTED;case l.DATA_LOSS:return sR.DATA_LOSS;default:return sx()}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(u=l||(l={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS";/**
 * An instance of the Platform's 'TextDecoder' implementation.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=new sw([4294967295,4294967295],0);// Hash a string using md5 hashing algorithm.
function oz(e){let t=(new TextEncoder).encode(e),n=new sv;return n.update(t),new Uint8Array(n.digest())}// Interpret the 16 bytes array as two 64-bit unsigned integers, encoded using
// 2’s complement using little endian.
function oj(e){let t=new DataView(e.buffer),n=t.getUint32(0,/* littleEndian= */!0),r=t.getUint32(4,/* littleEndian= */!0),i=t.getUint32(8,/* littleEndian= */!0),s=t.getUint32(12,/* littleEndian= */!0);return[new sw([n,r],0),new sw([i,s],0)]}class oB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new o$(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new o$(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new o$(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=sw.fromNumber(this.Te)}// Calculate the ith hash value based on the hashed 64bit integers,
// and calculate its corresponding bit index in the bitmap to be checked.
de(e,t,n){// Calculate hashed value h(i) = h1 + (i * h2).
let r=e.add(t.multiply(sw.fromNumber(n)));// Wrap if hash value overflow 64bit.
return 1===r.compare(oV)&&(r=new sw([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}// Return whether the bit on the given index in the bitmap is set to 1.
Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){// Empty bitmap should always return false on membership check.
if(0===this.Te)return!1;let t=oz(e),[n,r]=oj(t);for(let e=0;e<this.hashCount;e++){let t=this.de(n,r,e);if(!this.Ae(t))return!1}return!0}/** Create bloom filter for testing purposes only. */static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new oB(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Te)return;let t=oz(e),[n,r]=oj(t);for(let e=0;e<this.hashCount;e++){let t=this.de(n,r,e);this.Re(t)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class o$ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */class oH{constructor(/**
     * The snapshot version this event brings us up to, or MIN if not set.
     */e,/**
     * A map from target to changes to the target. See TargetChange.
     */t,/**
     * A map of targets that is known to be inconsistent, and the purpose for
     * re-listening. Listens for these targets should be re-established without
     * resume tokens.
     */n,/**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */r,/**
     * A set of which document updates are due only to limbo resolution targets.
     */i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}/**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */// PORTING NOTE: Multi-tab only
static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,oq.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new oH(sq.min(),r,new s5(sB),a8,oa())}}/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */class oq{constructor(/**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */e,/**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */t,/**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */n,/**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */r,/**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}/**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new oq(n,t,oa(),oa(),oa())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */class oW{constructor(/** The new document applies to all of these targets. */e,/** The new document is removed from all of these targets. */t,/** The key of the document for this change. */n,/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class oK{constructor(e,t){this.targetId=e,this.fe=t}}class oG{constructor(/** What kind of change occurred to the watch target. */e,/** The target IDs that were added/removed/set. */t,/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */n=ai.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}/** Tracks the internal state of a Watch target. */class oQ{constructor(){/**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */this.ge=0,/**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */this.pe=oJ(),/** See public getters for explanations of these fields. */this.ye=ai.EMPTY_BYTE_STRING,this.we=!1,/**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */this.Se=!0}/**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */get current(){return this.we}/** The last resume token sent to us for this target. */get resumeToken(){return this.ye}/** Whether this target has pending target adds or target removes. */get be(){return 0!==this.ge}/** Whether we have modified any state that should trigger a snapshot. */get De(){return this.Se}/**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}/**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */ve(){let e=oa(),t=oa(),n=oa();return this.pe.forEach((r,i)=>{switch(i){case 0/* ChangeType.Added */:e=e.add(r);break;case 2/* ChangeType.Modified */:t=t.add(r);break;case 1/* ChangeType.Removed */:n=n.add(r);break;default:sx()}}),new oq(this.ye,this.we,e,t,n)}/**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */Fe(){this.Se=!1,this.pe=oJ()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||sx()}Be(){this.Se=!0,this.we=!0}}/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */class oX{constructor(e){this.Le=e,/** The internal state of all tracked targets. */this.ke=new Map,/** Keeps track of the documents to update since the last raised snapshot. */this.qe=a8,/** A mapping of document keys to their set of target IDs. */this.Qe=oY(),/**
         * A map of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */this.Ke=new s5(sB)}/**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}/** Processes and adds the WatchTargetChange to the current set of changes. */Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0/* WatchTargetChangeState.NoChange */:this.je(t)&&n.Ce(e.resumeToken);break;case 1/* WatchTargetChangeState.Added */:// We need to decrement the number of pending acks needed from watch
// for this targetId.
n.Ne(),n.be||// We have a freshly added target, so we need to reset any state
// that we had previously. This can happen e.g. when remove and add
// back a target for existence filter mismatches.
n.Fe(),n.Ce(e.resumeToken);break;case 2/* WatchTargetChangeState.Removed */:// We need to keep track of removed targets to we can post-filter and
// remove any target changes.
// We need to decrement the number of pending acks needed from watch
// for this targetId.
n.Ne(),n.be||this.removeTarget(t);break;case 3/* WatchTargetChangeState.Current */:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4/* WatchTargetChangeState.Reset */:this.je(t)&&// Reset the target and synthesizes removes for all existing
// documents. The backend will re-add any documents that still
// match the target before it sends the next global snapshot.
(this.He(t),n.Ce(e.resumeToken));break;default:sx()}})}/**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}/**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(aY(i)){if(0===n){// The existence filter told us the document does not exist. We deduce
// that this document does not exist and apply a deleted document to
// our updates. Without applying this deleted document there might be
// another query that will raise this document as part of a snapshot
// until it is resolved, essentially exposing inconsistency between
// queries.
let e=new sX(i.path);this.We(t,e,ax.newNoDocument(e,sq.min()))}else 1===n||sx()}else{let r=this.Ze(t);// Existence filter mismatch. Mark the documents as being in limbo, and
// raise a snapshot with `isFromCache:true`.
if(r!==n){// Apply bloom filter to identify and mark removed documents.
let n=this.Xe(e),i=n?this.et(n,e,r):1/* BloomFilterApplicationStatus.Skipped */;0/* BloomFilterApplicationStatus.Success */!==i&&(// If bloom filter application fails, we reset the mapping and
// trigger re-run of the query.
this.He(t),this.Ke=this.Ke.insert(t,2/* BloomFilterApplicationStatus.FalsePositive */===i?"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */))}}}}/**
     * Parse the bloom filter from the "unchanged_names" field of an existence
     * filter.
     */Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=al(i).toUint8Array()}catch(e){if(e instanceof ar)return sC("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{// BloomFilter throws error if the inputs are invalid.
n=new oB(t,s,a)}catch(e){return sC(e instanceof o$?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}/**
     * Apply bloom filter to remove the deleted documents, and return the
     * application status.
     */et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0/* BloomFilterApplicationStatus.Success */:2/* BloomFilterApplicationStatus.FalsePositive */}/**
     * Filter out removed documents based on bloom filter membership result and
     * return number of documents removed.
     */rt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,/*updatedDocument=*/null),r++)}),r}/**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&aY(i.target)){// Document queries for document that don't exist can produce an empty
// result set. To update our local cache, we synthesize a document
// delete if we have not previously received the document. This
// resolves the limbo state of the document, removing it from
// limboDocumentRefs.
// TODO(dimond): Ideally we would have an explicit lookup target
// instead resulting in an explicit delete message and we could
// remove this special logic.
let t=new sX(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,ax.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=oa();// We extract the set of limbo-only document updates as the GC logic
// special-cases documents that do not appear in the target cache.
// TODO(gsoltis): Expand on this comment once GC is available in the JS
// client.
this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new oH(e,t,this.Ke,this.qe,n);return this.qe=a8,this.Qe=oY(),this.Ke=new s5(sB),r}/**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */// Visible for testing.
Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2/* ChangeType.Modified */:0/* ChangeType.Added */;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}/**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */// Visible for testing.
We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1/* ChangeType.Removed */):// snapshot, so we can just ignore the change.
r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}/**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}/**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new oQ,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new ae(sB),this.Qe=this.Qe.insert(e,t)),t}/**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */je(e){let t=null!==this.Ye(e);return t||sT("WatchChangeAggregator","Detected inactive target",e),t}/**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}/**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */He(e){this.ke.set(e,new oQ),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,/*updatedDocument=*/null)})}/**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function oY(){return new s5(sX.comparator)}function oJ(){return new s5(sX.comparator)}const oZ={asc:"ASCENDING",desc:"DESCENDING"},o0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},o1={and:"AND",or:"OR"};/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */class o2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */function o4(e,t){return e.useProto3Json||null==t?t:{value:t}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function o9(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */function o3(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function o6(e){return e||sx(),sq.fromTimestamp(function(e){let t=aa(e);return new sH(t.seconds,t.nanos)}(e))}function o5(e,t){return new sK(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function o7(e){let t=sK.fromString(e);return lo(t)||sx(),t}function o8(e,t){return o5(e.databaseId,t.path)}function le(e,t){let n=o7(t);if(n.get(1)!==e.databaseId.projectId)throw new sA(sR.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new sA(sR.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new sX(lr(n))}function lt(e,t){return o5(e.databaseId,t)}function ln(e){return new sK(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lr(e){return e.length>4&&"documents"===e.get(4)||sx(),e.popFirst(5)}/** Creates a Document proto from key and fields (but no create/update time) */function li(e,t,n){return{name:o8(e,t),fields:n.value.mapValue.fields}}function ls(e){return{fieldPath:e.canonicalString()}}function la(e){return sQ.fromServerFormat(e.fieldPath)}function lo(e){// Resource names have at least 4 components (project ID, database ID)
return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable set of metadata that the local store tracks for each target.
 */class ll{constructor(/** The target being listened to. */e,/**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */t,/** The purpose of the target. */n,/**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */r,/** The latest snapshot version seen for this target. */i=sq.min(),s=sq.min(),a=ai.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}/** Creates a new target data instance with an updated sequence number. */withSequenceNumber(e){return new ll(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}/**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */withResumeToken(e,t){return new ll(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,/* expectedCount= */null)}/**
     * Creates a new target data instance with an updated expected count.
     */withExpectedCount(e){return new ll(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}/**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */withLastLimboFreeSnapshotVersion(e){return new ll(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Serializer for values stored in the LocalStore. */class lu{constructor(e){this.ut=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */class lc{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */ht(e,t){this.Pt(e,t),// (see go/firestore-storage-format#encodings).
t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(ao(e.integerValue));else if("doubleValue"in e){let n=ao(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),s4(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Tt(t,20),"string"==typeof n?t.dt(n):(t.dt(`${n.seconds||""}`),t.Et(n.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(al(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?aC(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):sx()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let n=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(n)))this.At(e,t),this.Pt(n[e],t)}yt(e,t){let n=e.values||[];for(let e of(this.Tt(t,50),n))this.Pt(e,t)}ft(e,t){this.Tt(t,37),sX.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Et(2)}}lc.St=new lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of IndexManager.
 */class lh{constructor(){this.on=new ld}addToCollectionParentIndex(e,t){return this.on.add(t),s0.resolve()}getCollectionParents(e,t){return s0.resolve(this.on.getEntries(t))}addFieldIndex(e,t){// Field indices are not supported with memory persistence.
return s0.resolve()}deleteFieldIndex(e,t){// Field indices are not supported with memory persistence.
return s0.resolve()}deleteAllFieldIndexes(e){// Field indices are not supported with memory persistence.
return s0.resolve()}createTargetIndexes(e,t){// Field indices are not supported with memory persistence.
return s0.resolve()}getDocumentsMatchingTarget(e,t){// Field indices are not supported with memory persistence.
return s0.resolve(null)}getIndexType(e,t){// Field indices are not supported with memory persistence.
return s0.resolve(0/* IndexType.NONE */)}getFieldIndexes(e,t){// Field indices are not supported with memory persistence.
return s0.resolve([])}getNextCollectionGroupToUpdate(e){// Field indices are not supported with memory persistence.
return s0.resolve(null)}getMinOffset(e,t){return s0.resolve(sY.min())}getMinOffsetFromCollectionGroup(e,t){return s0.resolve(sY.min())}updateCollectionGroup(e,t,n){// Field indices are not supported with memory persistence.
return s0.resolve()}updateIndexEntries(e,t){// Field indices are not supported with memory persistence.
return s0.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class ld{constructor(){this.index={}}// Returns false if the entry already existed.
add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ae(sK.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ae(sK.comparator)).toArray()}}new Uint8Array(0);class lf{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new lf(e,lf.DEFAULT_COLLECTION_PERCENTILE,lf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** A mutation queue for a specific user, backed by IndexedDB. */lf.DEFAULT_COLLECTION_PERCENTILE=10,lf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lf.DEFAULT=new lf(41943040,lf.DEFAULT_COLLECTION_PERCENTILE,lf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lf.DISABLED=new lf(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Offset to ensure non-overlapping target ids. *//**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */class lp{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){// The target cache generator must return '2' in its first call to `next()`
// as there is no differentiation in the protocol layer between an unset
// number and the number '0'. If we were to sent a target with target ID
// '0', the backend would consider it unset and replace it with its own ID.
return new lp(0)}static Nn(){// Sync engine assigns target IDs for limbo document detection.
return new lp(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */class lm{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new a7(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ax.newInvalidDocument(e).setReadTime(t))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?s0.resolve(n):this.getFromCache(e,t)}/**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */getEntries(e,t){return this.getAllFromCache(e,t)}/**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}/** Helper to assert this.changes is not null  */assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */class lg{constructor(e,/**
     * The fields that are locally mutated by patch mutations.
     *
     * If the overlayed	document is from set or delete mutations, this is `null`.
     * If there is no overlay (mutation) for the document, this is an empty `FieldMask`.
     */t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */class ly{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&oT(n.mutation,e,an.empty(),sH.now()),e))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,oa()).next(()=>t))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(e,t,n=oa()){let r=or();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ot();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(e,t){let n=or();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,oa()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}/**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */computeViews(e,t,n,r){let i=a8,s=or(),a=or();return t.forEach((e,t)=>{let a=n.get(t.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
r.has(t.key)&&(void 0===a||a.mutation instanceof oN)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),oT(a.mutation,t,a.mutation.getFieldMask(),sH.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(t.key,an.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new lg(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=or(),r=new s5((e,t)=>e-t),i=oa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||an.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||oa()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=or();l.forEach(e=>{if(!i.has(e)){let r=ok(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return s0.waitFor(s)}).next(()=>n)}/**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}/**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     * @param context - A optional tracker to keep a record of important details
     *   during database local query execution.
     */getDocumentsMatchingQuery(e,t,n,r){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return sX.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}/**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):s0.resolve(or()),a=-1,o=i;return s.next(t=>s0.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?s0.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,oa())).next(e=>({batchId:a,changes:on(e)})))})}getDocumentsMatchingDocumentQuery(e,t){// Just do a simple document lookup.
return this.getDocument(e,new sX(t)).next(e=>{let t=ot();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=ot();return this.indexManager.getCollectionParents(e,i).next(a=>s0.forEach(a,a=>{var o;let l=(o=a.child(i),new aJ(o,/*collectionGroup=*/null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){// Query the remote documents and overlay mutations.
let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,ax.newInvalidDocument(r)))});// Apply the overlays and match against the query.
let n=ot();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&oT(s.mutation,r,an.empty(),sH.now()),a6(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return s0.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:o6(t.createTime)}),s0.resolve()}getNamedQuery(e,t){return s0.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(e){let t=function(e){var t,n,r,i,s,a,o,l;let u,c=function(e){let t=o7(e);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===t.length?sK.emptyPath():lr(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||sx();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=la(e.unaryFilter.field);return aL.create(t,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let n=la(e.unaryFilter.field);return aL.create(n,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=la(e.unaryFilter.field);return aL.create(r,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let i=la(e.unaryFilter.field);return aL.create(i,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return sx()}}(t):void 0!==t.fieldFilter?aL.create(la(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return sx()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?aM.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return sx()}}(t.compositeFilter.op)):sx()}(e);return n instanceof aM&&aF(t=n)&&aU(t)?n.getFilters():[n]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new aD(la(e.field),function(e){switch(e){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(e.direction))));let g=null;h.limit&&(g=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new aR(n,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new aR(n,t)}(h.endAt)),n=c,r=f,i=m,s=p,a=g,o=y,l=v,new aJ(n,r,i,s,a,"F"/* LimitType.First */,o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?a2(t,t.limit,"L"/* LimitType.Last */):t}(t.bundledQuery),readTime:o6(t.readTime)}),s0.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of DocumentOverlayCache.
 */class lw{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new s5(sX.comparator),this.lr=new Map}getOverlay(e,t){return s0.resolve(this.overlays.get(t))}getOverlays(e,t){let n=or();return s0.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.lt(e,t,r)}),s0.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(n)),s0.resolve()}getOverlaysForCollection(e,t,n){let r=or(),i=t.length+1,s=new sX(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return s0.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new s5((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=or(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=or(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return s0.resolve(a)}lt(e,t,n){// Remove the association of the overlay to its batch id.
let r=this.overlays.get(n.key);if(null!==r){let e=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new oM(t,n));// Create the association of this overlay to the given largestBatchId.
let i=this.lr.get(t);void 0===i&&(i=oa(),this.lr.set(t,i)),this.lr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */class lb{constructor(){// A set of outstanding references to a document sorted by key.
this.hr=new ae(l_.Pr),this.Ir=new ae(l_.Tr)}/** Returns true if the reference set contains no references. */isEmpty(){return this.hr.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(e,t){let n=new l_(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}/** Add references to the given document keys for the given ID. */Er(e,t){e.forEach(e=>this.addReference(e,t))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(e,t){this.dr(new l_(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */Rr(e){let t=new sX(new sK([])),n=new l_(t,e),r=new l_(t,e+1),i=[];return this.Ir.forEachInRange([n,r],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new sX(new sK([])),n=new l_(t,e),r=new l_(t,e+1),i=oa();return this.Ir.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new l_(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class l_{constructor(e,t){this.key=e,this.gr=t}/** Compare by key then by ID */static Pr(e,t){return sX.comparator(e.key,t.key)||sB(e.gr,t.gr)}/** Compare by ID then by key */static Tr(e,t){return sB(e.gr,t.gr)||sX.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.pr=1,/** An ordered mapping between documents and the mutations batch IDs. */this.yr=new ae(l_.Pr)}checkEmpty(e){return s0.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new oO(i,t,n,r);// Track references by document key and index collection parents.
for(let t of(this.mutationQueue.push(s),r))this.yr=this.yr.add(new l_(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return s0.resolve(s)}lookupMutationBatch(e,t){return s0.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Sr(t+1),r=n<0?0:n;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return s0.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return s0.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return s0.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new l_(t,0),r=new l_(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],e=>{let t=this.wr(e.gr);i.push(t)}),s0.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ae(sB);return t.forEach(e=>{let t=new l_(e,0),r=new l_(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],e=>{n=n.add(e.gr)})}),s0.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){// Use the query path as a prefix for testing if a document matches the
// query.
let n=t.path,r=n.length+1,i=n;sX.isDocumentKey(i)||(i=i.child(""));let s=new l_(new sX(i),0),a=new ae(sB);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(t.length===r&&(a=a.add(e.gr)),!0)},s),s0.resolve(this.br(a))}br(e){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let t=[];return e.forEach(e=>{let n=this.wr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||sx(),this.mutationQueue.shift();let n=this.yr;return s0.forEach(t.mutations,r=>{let i=new l_(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=n})}Fn(e){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(e,t){let n=new l_(t,0),r=this.yr.firstAfterOrEqual(n);return s0.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,s0.resolve()}/**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */Dr(e,t){return this.Sr(e)}/**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}/**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */class lS{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(e){this.Cr=e,/** Underlying cache of documents and their read times. */this.docs=new s5(sX.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(e){this.indexManager=e}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return s0.resolve(n?n.document.mutableCopy():ax.newInvalidDocument(t))}getEntries(e,t){let n=a8;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ax.newInvalidDocument(e))}),s0.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=a8,s=t.path,a=new sX(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=sX.comparator(e.documentKey,t.documentKey))?n:sB(e.largestBatchId,t.largestBatchId)}(new sY(a.readTime,a.key,-1),n)||(r.has(a.key)||a6(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return s0.resolve(i)}getAllFromCollectionGroup(e,t,n,r){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
sx()}vr(e,t){return s0.forEach(this.docs,e=>t(e))}newChangeBuffer(e){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new lk(this)}getSize(e){return s0.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class lk extends lm{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(n)}),s0.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.persistence=e,/**
         * Maps a target to the data about that target
         */this.Fr=new a7(e=>aQ(e),aX),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=sq.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Mr=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.Or=new lb,this.targetCount=0,this.Nr=lp.On()}forEachTarget(e,t){return this.Fr.forEach((e,n)=>t(n)),s0.resolve()}getLastRemoteSnapshotVersion(e){return s0.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return s0.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),s0.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),s0.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new lp(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,s0.resolve()}updateTargetData(e,t){return this.kn(t),s0.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,s0.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),s0.waitFor(i).next(()=>r)}getTargetCount(e){return s0.resolve(this.targetCount)}getTargetData(e,t){let n=this.Fr.get(t)||null;return s0.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),s0.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),s0.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),s0.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Or.mr(t);return s0.resolve(n)}containsKey(e,t){return s0.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */class lI{/**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */constructor(e,t){this.Br={},this.overlays={},this.Lr=new s2(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new lT(this),this.indexManager=new lh,this.remoteDocumentCache=new lS(e=>this.referenceDelegate.Qr(e)),this.serializer=new lu(t),this.Kr=new lv(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(e){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new lE(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){sT("MemoryPersistence","Starting transaction:",e);let r=new lC(this.Lr.next());return this.referenceDelegate.$r(),n(r).next(e=>this.referenceDelegate.Ur(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Wr(e,t){return s0.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class lC extends sJ{constructor(e){super(),this.currentSequenceNumber=e}}class lN{constructor(e){this.persistence=e,/** Tracks all documents that are active in Query views. */this.Gr=new lb,/** The list of documents that are potentially GCed after each transaction. */this.zr=null}static jr(e){return new lN(e)}get Hr(){if(this.zr)return this.zr;throw sx()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),s0.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),s0.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),s0.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){// Remove newly orphaned documents.
let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return s0.forEach(this.Hr,n=>{let r=sX.fromPath(n);return this.Jr(e,r).next(e=>{e||t.removeEntry(r,sq.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){// For eager GC, we don't care about the document size, there are no size thresholds.
return 0}Jr(e,t){return s0.or([()=>s0.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */class lx{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=r}static Qi(e,t){let n=oa(),r=oa();for(let e of t.docChanges)switch(e.type){case 0/* ChangeType.Added */:n=n.add(e.doc.key);break;case 1/* ChangeType.Removed */:r=r.add(e.doc.key)}return new lx(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A tracker to keep a record of important details during database local query
 * execution.
 */class lR{constructor(){/**
         * Counts the number of documents passed through during local query execution.
         */this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */class lA{constructor(){this.Ki=!1,this.$i=!1,/**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */this.Ui=100,this.Wi=8}/** Sets the document view to query against. */initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(e,t,n,r){// Stores the result from executing the query; using this object is more
// convenient than passing the result between steps of the persistence
// transaction and improves readability comparatively.
let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new lR;return this.Hi(e,t,n).next(r=>{if(i.result=r,this.$i)return this.Ji(e,t,n,r.size)})}).next(()=>i.result)}Ji(e,t,n,r){return n.documentReadCount<this.Ui?(sk()<=tZ.DEBUG&&sT("QueryEngine","SDK will not create cache indexes for query:",a3(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),s0.resolve()):(sk()<=tZ.DEBUG&&sT("QueryEngine","Query:",a3(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(sk()<=tZ.DEBUG&&sT("QueryEngine","The SDK decides to create cache indexes for query:",a3(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,a1(t))):s0.resolve())}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */zi(e,t){if(aZ(t))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return s0.resolve(null);let n=a1(t);return this.indexManager.getIndexType(e,n).next(r=>0/* IndexType.NONE */===r?null:(null!==t.limit&&1/* IndexType.PARTIAL */===r&&(n=a1(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    t=a2(t,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=oa(...r);return this.Gi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Yi(t,r);return this.Zi(t,s,i,n.readTime)?this.zi(e,a2(t,null,"F"/* LimitType.First */)):this.Xi(e,s,t,n)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */ji(e,t,n,r){return aZ(t)||r.isEqual(sq.min())?s0.resolve(null):this.Gi.getDocuments(e,n).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,n,r)?s0.resolve(null):(sk()<=tZ.DEBUG&&sT("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),a3(t)),this.Xi(e,s,t,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(e,t){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=sq.fromTimestamp(1e9===r?new sH(n+1,0):new sH(n,r));return new sY(i,sX.empty(),-1)}(r,0)).next(e=>e))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */Yi(e,t){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let n=new ae(a5(e));return t.forEach((t,r)=>{a6(e,r)&&(n=n.add(r))}),n}/**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */Zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let i="F"/* LimitType.First */===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,t,n){return sk()<=tZ.DEBUG&&sT("QueryEngine","Using full collection scan to execute query:",a3(t)),this.Gi.getDocumentsMatchingQuery(e,t,sY.min(),n)}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */Xi(e,t,n,r){// Retrieve all results for documents that were updated since the offset.
return this.Gi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class lP{constructor(/** Manages our in-memory or durable persistence. */e,t,n,r){this.persistence=e,this.es=t,this.serializer=r,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.ts=new s5(sB),/** Maps a target to its targetID. */this.ns=new a7(e=>aQ(e),aX),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ly(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function lD(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.os(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=oa();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return e.localDocuments.getDocuments(n,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */function lO(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function lL(e,t,n){let r=e.ts.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!s1(e))throw e;// All `releaseTarget` does is record the final metadata state for the
// target, but we've been recording this periodically during target
// activity. If we lose this write this could cause a very slight
// difference in the order of target deletion during GC, but we
// don't define exact LRU semantics so this is acceptable.
sT("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ts=e.ts.remove(t),e.ns.delete(r.target)}/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */function lM(e,t,n){let r=sq.min(),i=oa();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ns.get(n);return void 0!==r?s0.resolve(e.ts.get(r)):e.qr.getTargetData(t,n)})(e,s,a1(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,n?r:sq.min(),n?i:oa())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.rs.get(r)||sq.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.rs.set(r,s),{documents:n,ls:i}}))}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class lU{constructor(){this.activeTargetIds=oo}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */Es(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lF{constructor(){this.eo=new lU,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){// No op.
}updateMutationState(e,t,n){// No op.
}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new lU,Promise.resolve()}handleUserChange(e,t,n){// No op.
}setOnlineState(e){// No op.
}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){// No op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{ro(e){// No-op.
}shutdown(){// No-op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals *//**
 * Browser implementation of ConnectivityMonitor.
 */class lz{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(sT("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0/* NetworkStatus.AVAILABLE */)}_o(){for(let e of(sT("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
// here for testing via FakeWindow.
/** Checks that all used attributes of window are available. */static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */let lj=null;/**
 * Generates and returns an initial value for `lastUniqueDebugId`.
 *
 * The returned value is randomly selected from a range of integers that are
 * represented as 8 hexadecimal digits. This means that (within reason) any
 * numbers generated by incrementing the returned number by 1 will also be
 * represented by 8 hexadecimal digits. This leads to all "IDs" having the same
 * length when converted to a hexadecimal string, making reading logs containing
 * these IDs easier to follow. And since the return value is randomly selected
 * it will help to differentiate between logs from different executions.
 *//**
 * Generates and returns a unique ID as a hexadecimal string.
 *
 * The returned ID is intended to be used in debug logging messages to help
 * correlate log messages that may be spatially separated in the logs, but
 * logically related. For example, a network connection could include the same
 * "debug ID" string in all of its log messages to help trace a specific
 * connection over time.
 *
 * @return the 10-character generated ID (e.g. "0xa1b2c3d4").
 */function lB(){return null===lj?lj=268435456+Math.round(2147483648*Math.random()):lj++,"0x"+lj.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */class lH{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lq="WebChannelConnection";class lW extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}wo(e,t,n,r,i){let s=lB(),a=this.So(e,t);sT("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(o,r,i),this.Do(e,a,o,n).then(t=>(sT("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw sC("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Co(e,t,n,r,i,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.wo(e,t,n,r,i)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */bo(e,t,n){e["X-Goog-Api-Client"]=// so we need to get its value when we need it in a function.
function(){return"gl-js/ fire/"+sE}(),// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}So(e,t){let n=l$[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,n,r){let i=lB();return new Promise((s,a)=>{let o=new sy;o.setWithCredentials(!0),o.listenOnce(sf.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case sd.NO_ERROR:let t=o.getResponseJson();sT(lq,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case sd.TIMEOUT:sT(lq,`RPC '${e}' ${i} timed out`),a(new sA(sR.DEADLINE_EXCEEDED,"Request time out"));break;case sd.HTTP_ERROR:let n=o.getStatus();if(sT(lq,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(sR).indexOf(t)>=0?t:sR.UNKNOWN}(t.status);a(new sA(e,t.message))}else a(new sA(sR.UNKNOWN,"Server responded with status "+o.getStatus()))}else // it's most probably a connection issue
a(new sA(sR.UNAVAILABLE,"Connection failed."));break;default:sx()}}finally{sT(lq,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);sT(lq,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}vo(e,t,n){let r=lB(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=sc(),a=sh(),o={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(o.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(o.useFetchStreams=!0),this.bo(o.initMessageHeaders,t,n),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
o.encodeInitMessageHeaders=!0;let c=i.join("");sT(lq,`Creating RPC '${e}' stream ${r}: ${c}`,o);let h=s.createWebChannel(c,o),d=!1,f=!1,p=new lH({co:t=>{f?sT(lq,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(sT(lq,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),sT(lq,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},lo:()=>h.close()}),m=(e,t,n)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return m(h,sg.EventType.OPEN,()=>{f||sT(lq,`RPC '${e}' stream ${r} transport opened.`)}),m(h,sg.EventType.CLOSE,()=>{f||(f=!0,sT(lq,`RPC '${e}' stream ${r} transport closed`),p.Ro())}),m(h,sg.EventType.ERROR,t=>{f||(f=!0,sC(lq,`RPC '${e}' stream ${r} transport errored:`,t),p.Ro(new sA(sR.UNAVAILABLE,"The operation could not be completed")))}),m(h,sg.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||sx();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){sT(lq,`RPC '${e}' stream ${r} received error:`,s);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let t=s.status,n=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(e){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=l[e];if(void 0!==t)return oF(t)}(t),i=s.message;void 0===n&&(n=sR.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Ro(new sA(n,i)),h.close()}else sT(lq,`RPC '${e}' stream ${r} received:`,i),p.Vo(i)}}),m(a,sp.STAT_EVENT,t=>{t.stat===sm.PROXY?sT(lq,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===sm.NOPROXY&&sT(lq,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
p.Ao()},0),p}}/** The Platform's 'document' implementation or null if not available. */function lK(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
// eslint-disable-next-line no-restricted-globals
return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lG(e){return new o2(e,/* useProto3Json= */!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */class lQ{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */e,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */t,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,/** The last backoff attempt, as epoch milliseconds. */this.Bo=Date.now(),this.reset()}/**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */reset(){this.Oo=0}/**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */Lo(){this.Oo=this.xo}/**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */ko(e){// Cancel any pending backoff operation.
this.cancel();// First schedule using the current base (which may be 0 and should be
// honored as such).
let t=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);// Guard against lastAttemptTime being in the future due to a clock change.
r>0&&sT("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),// bounds.
this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}/** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */class lX{constructor(e,t,n,r,i,s,a,o){this.si=e,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new lQ(e,t)}/**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */jo(){return 1/* PersistentStreamState.Starting */===this.state||5/* PersistentStreamState.Backoff */===this.state||this.Ho()}/**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */Ho(){return 2/* PersistentStreamState.Open */===this.state||3/* PersistentStreamState.Healthy */===this.state}/**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */start(){4/* PersistentStreamState.Error */!==this.state?this.auth():this.Jo()}/**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */async stop(){this.jo()&&await this.close(0/* PersistentStreamState.Initial */)}/**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */Yo(){this.state=0/* PersistentStreamState.Initial */,this.zo.reset()}/**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */Zo(){// Starts the idle time if we are in state 'Open' and are not yet already
// running a timer (in which case the previous idle timeout still applies).
this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}/** Sends a message to the underlying stream. */e_(e){this.t_(),this.stream.send(e)}/** Called by the idle timer when the stream should close due to inactivity. */async Xo(){if(this.Ho())// it restarts so set the stream state to Initial instead of Error.
return this.close(0/* PersistentStreamState.Initial */)}/** Marks the stream as active again. */t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}/** Cancels the health check delayed operation. */n_(){this.Go&&(this.Go.cancel(),this.Go=null)}/**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */async close(e,t){// Cancel any outstanding timers (they're guaranteed not to execute).
this.t_(),this.n_(),this.zo.cancel(),// underlying stream), guaranteeing they won't execute.
this.Uo++,4/* PersistentStreamState.Error */!==e?this.zo.reset():t&&t.code===sR.RESOURCE_EXHAUSTED?(sI(t.toString()),sI("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===sR.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
// happen since both Auth and AppCheck ensure a sufficient TTL when we
// request a token. If a user manually resets their system clock this can
// fail, however. In this case, we should get a Code.UNAUTHENTICATED error
// before we received the first message and we need to invalidate the token
// to ensure that we fetch a new token.
(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),// inhibit backoff or otherwise manipulate the state in its non-started state.
this.state=e,await this.listener.Io(t)}/**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */r_(){}auth(){this.state=1/* PersistentStreamState.Starting */;let e=this.i_(this.Uo),t=this.Uo;// TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Uo===t&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.s_(e,n)},t=>{e(()=>{let e=new sA(sR.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)})})}s_(e,t){let n=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{n(()=>(this.state=2/* PersistentStreamState.Open */,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.ho()))}),this.stream.Io(e=>{n(()=>this.o_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Jo(){this.state=5/* PersistentStreamState.Backoff */,this.zo.ko(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
o_(e){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return sT("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,e)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(sT("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */class lY extends lX{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff"/* TimerId.ListenStreamConnectionBackoff */,"listen_stream_idle"/* TimerId.ListenStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,n,r,s),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){// A successful response means the stream is healthy
this.zo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;// proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
// if unset
let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0/* WatchTargetChangeState.NoChange */:"ADD"===r?1/* WatchTargetChangeState.Added */:"REMOVE"===r?2/* WatchTargetChangeState.Removed */:"CURRENT"===r?3/* WatchTargetChangeState.Current */:"RESET"===r?4/* WatchTargetChangeState.Reset */:sx(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||sx(),ai.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||sx(),ai.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?sR.UNKNOWN:oF(e.code);return new sA(t,e.message||"")}(l);n=new oG(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=le(e,r.document.name),s=o6(r.document.updateTime),a=r.document.createTime?o6(r.document.createTime):sq.min(),o=new aN({mapValue:{fields:r.document.fields}}),l=ax.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new oW(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=le(e,r.document),s=r.readTime?o6(r.readTime):sq.min(),a=ax.newNoDocument(i,s),o=r.removedTargetIds||[];n=new oW([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=le(e,r.document),s=r.removedTargetIds||[];n=new oW([],s,i,null)}else{if(!("filter"in t))return sx();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new oU(r,i),a=e.targetId;n=new oK(a,s)}}return n}(this.serializer,e),n=function(e){// We have only reached a consistent snapshot for the entire stream if there
// is a read_time set and it applies to all targets (i.e. the list of
// targets is empty). The backend is guaranteed to send such responses.
if(!("targetChange"in e))return sq.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?sq.min():t.readTime?o6(t.readTime):sq.min()}(e);return this.listener.a_(t,n)}/**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */u_(e){let t={};t.database=ln(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=aY(r)?{documents:{documents:[lt(e,r.path)]}}:{query:function(e,t){var n,r;// Dissect the path into parent, collectionId, and optional key filter.
let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=lt(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=lt(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof aL?function(e){if("=="/* Operator.EQUAL */===e.op){if(ak(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NAN"}};if(aS(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NULL"}}}else if("!="/* Operator.NOT_EQUAL */===e.op){if(ak(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NOT_NAN"}};if(aS(e.value))return{unaryFilter:{field:ls(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(e.field),op:o0[e.op],value:e.value}}}(t):t instanceof aM?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:o1[t.op],filters:n}}}(t):sx()}(aM.create(e,"and"/* CompositeOperator.AND */))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:ls(e.field),direction:oZ[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=o4(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=o3(e,t.resumeToken);let r=o4(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(sq.min())>0){// TODO(wuandy): Consider removing above check because it is most likely true.
// Right now, many tests depend on this behaviour though (leaving min() out
// of serialization).
n.readTime=o9(e,t.snapshotVersion.toTimestamp());let r=o4(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen"/* TargetPurpose.Listen */:return null;case"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */:return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */:return"limbo-document";default:return sx()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.e_(t)}/**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */c_(e){let t={};t.database=ln(this.serializer),t.removeTarget=e,this.e_(t)}}/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */class lJ extends lX{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,n,r,s),this.serializer=i,this.l_=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get h_(){return this.l_}// Override of PersistentStream.start
start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||sx(),this.lastStreamToken=e.streamToken,this.l_){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.zo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||sx(),t.map(e=>{let t;return(t=e.updateTime?o6(e.updateTime):o6(n)).isEqual(sq.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(t=o6(n)),new ob(t,e.transformResults||[])})):[]),i=o6(e.commitTime);return this.listener.I_(i,r)}// The first response is always the handshake response
return e.writeResults&&0!==e.writeResults.length&&sx(),this.l_=!0,this.listener.T_()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */E_(){// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=ln(this.serializer),this.e_(e)}/** Sends a group of mutations to the Firestore backend to apply. */P_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof oC)r={update:li(e,t.key,t.value)};else if(t instanceof oP)r={delete:o8(e,t.key)};else if(t instanceof oN)r={update:li(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof oD))return sx();r={verify:o8(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof od)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof of)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof om)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oy)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw sx()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:o9(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:sx()),r})(this.serializer,e))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 *//**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */class lZ extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new sA(sR.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */wo(e,t,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===sR.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sA(sR.UNKNOWN,e.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */Co(e,t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===sR.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sA(sR.UNKNOWN,e.toString())})}terminate(){this.d_=!0}}/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */class l0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,/** The current OnlineState. */this.state="Unknown"/* OnlineState.Unknown */,/**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */this.V_=0,/**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */this.m_=null,/**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */this.f_=!0}/**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */g_(){0===this.V_&&(this.p_("Unknown"/* OnlineState.Unknown */),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout"/* TimerId.OnlineStateTimeout */,1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"/* OnlineState.Offline */),Promise.resolve())))}/**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */w_(e){"Online"/* OnlineState.Online */===this.state?this.p_("Unknown"/* OnlineState.Unknown */):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline"/* OnlineState.Offline */)))}/**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */set(e){this.S_(),this.V_=0,"Online"/* OnlineState.Online */===e&&// We've connected to watch at least once. Don't warn the developer
// about being offline going forward.
(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(sI(t),this.f_=!1):sT("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */e,/** The client-side proxy for interacting with the backend. */t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},/**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */this.b_=[],/**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */this.D_=new Map,/**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */this.C_=new Set,/**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */this.v_=[],this.F_=i,this.F_.ro(e=>{n.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
ue(this)&&(sT("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.C_.add(4/* OfflineCause.ConnectivityChange */),await l4(e),e.M_.set("Unknown"/* OnlineState.Unknown */),e.C_.delete(4/* OfflineCause.ConnectivityChange */),await l2(e)}(this))})}),this.M_=new l0(n,r)}}async function l2(e){if(ue(e))for(let t of e.v_)await t(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function l4(e){for(let t of e.v_)await t(/* enabled= */!1)}/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */function l9(e,t){e.D_.has(t.targetId)||// Mark this as something the client is currently listening for.
(e.D_.set(t.targetId,t),l8(e)?l7(e):um(e).Ho()&&l6(e,t))}/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */function l3(e,t){let n=um(e);e.D_.delete(t),n.Ho()&&l5(e,t),0===e.D_.size&&(n.Ho()?n.Zo():ue(e)&&// Revert to OnlineState.Unknown if the watch stream is not open and we
// have no listeners, since without any listens to send we cannot
// confirm if the stream is healthy and upgrade to OnlineState.Online.
e.M_.set("Unknown"/* OnlineState.Unknown */))}/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */function l6(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(sq.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}um(e).u_(t)}/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */function l5(e,t){e.x_.Oe(t),um(e).c_(t)}function l7(e){e.x_=new oX({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),um(e).start(),e.M_.g_()}/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */function l8(e){return ue(e)&&!um(e).jo()&&e.D_.size>0}function ue(e){return 0===e.C_.size}async function ut(e){e.D_.forEach((t,n)=>{l6(e,t)})}async function un(e,t){e.x_=void 0,l8(e)?(e.M_.w_(t),l7(e)):// The online state is set to unknown because there is no active attempt
// at establishing a connection
e.M_.set("Unknown"/* OnlineState.Unknown */)}async function ur(e,t,n){if(e.M_.set("Online"/* OnlineState.Online */),t instanceof oG&&2/* WatchTargetChangeState.Removed */===t.state&&t.cause)// to raise events
try{await /** Handles an error on a target */async function(e,t){let n=t.cause;for(let r of t.targetIds)e.D_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.D_.delete(r),e.x_.removeTarget(r))}(e,t)}catch(n){sT("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ui(e,n)}else if(t instanceof oW?e.x_.$e(t):t instanceof oK?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(sq.min()))try{let t=await lO(e.localStore);n.compareTo(t)>=0&&// We have received a target change with a global snapshot if the snapshot
// version is not equal to SnapshotVersion.min().
await /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */function(e,t){let n=e.x_.it(t);// Update in-memory resume tokens. LocalStore will update the
// persistent view of these when applying the completed RemoteEvent.
return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.D_.get(r);// A watched target might have been removed already.
i&&e.D_.set(r,i.withResumeToken(n.resumeToken,t))}}),// existence filter mismatches.
n.targetMismatches.forEach((t,n)=>{let r=e.D_.get(t);if(!r)return;// Clear the resume token for the target, since we're in a known mismatch
// state.
e.D_.set(t,r.withResumeToken(ai.EMPTY_BYTE_STRING,r.snapshotVersion)),// deliberately don't send a resume token so that we get a full update.
l5(e,t);// Mark the target we send as being on behalf of an existence filter
// mismatch, but don't actually retain that in listenTargets. This ensures
// that we flag the first re-listen this way without impacting future
// listens of this target (that might happen e.g. on reconnect).
let i=new ll(r.target,t,n,r.sequenceNumber);l6(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){sT("RemoteStore","Failed to raise snapshot:",t),await ui(e,t)}}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function ui(e,t,n){if(!s1(t))throw t;e.C_.add(1/* OfflineCause.IndexedDbFailed */),await l4(e),e.M_.set("Offline"/* OnlineState.Offline */),n||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(n=()=>lO(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{sT("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1/* OfflineCause.IndexedDbFailed */),await l2(e)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function us(e,t){return t().catch(n=>ui(e,n,t))}async function ua(e){let t=ug(e),n=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ue(e)&&e.b_.length<10;)try{let r=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.b_.length&&t.Zo();break}n=r.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(e,t){e.b_.push(t);let n=ug(e);n.Ho()&&n.h_&&n.P_(t.mutations)}(e,r)}catch(t){await ui(e,t)}uo(e)&&ul(e)}function uo(e){return ue(e)&&!ug(e).jo()&&e.b_.length>0}function ul(e){ug(e).start()}async function uu(e){ug(e).E_()}async function uc(e){let t=ug(e);// Send the write pipeline now that the stream is established.
for(let n of e.b_)t.P_(n.mutations)}async function uh(e,t,n){let r=e.b_.shift(),i=oL.from(r,t,n);await us(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),// slot has freed up.
await ua(e)}async function ud(e,t){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
t&&ug(e).h_&&// This error affects the actual write.
await async function(e,t){var n;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(e){switch(e){default:return sx();case sR.CANCELLED:case sR.UNKNOWN:case sR.DEADLINE_EXCEEDED:case sR.RESOURCE_EXHAUSTED:case sR.INTERNAL:case sR.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case sR.UNAUTHENTICATED:return!1;case sR.INVALID_ARGUMENT:case sR.NOT_FOUND:case sR.ALREADY_EXISTS:case sR.PERMISSION_DENIED:case sR.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case sR.ABORTED:case sR.OUT_OF_RANGE:case sR.UNIMPLEMENTED:case sR.DATA_LOSS:return!0}}(n=t.code)&&n!==sR.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let n=e.b_.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
ug(e).Yo(),await us(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),// another slot has freed up.
await ua(e)}}(e,t),// pipeline for failed writes
uo(e)&&ul(e)}async function uf(e,t){e.asyncQueue.verifyOperationInProgress(),sT("RemoteStore","RemoteStore received new credentials");let n=ue(e);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
e.C_.add(3/* OfflineCause.CredentialChange */),await l4(e),n&&// Don't set the network status to Unknown if we are offline.
e.M_.set("Unknown"/* OnlineState.Unknown */),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3/* OfflineCause.CredentialChange */),await l2(e)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function up(e,t){t?(e.C_.delete(2/* OfflineCause.IsSecondary */),await l2(e)):t||(e.C_.add(2/* OfflineCause.IsSecondary */),await l4(e),e.M_.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function um(e){var t,n,r;return e.O_||// Create stream (but note that it is not started yet).
(e.O_=(t=e.datastore,n=e.asyncQueue,r={ho:ut.bind(null,e),Io:un.bind(null,e),a_:ur.bind(null,e)},t.A_(),new lY(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.v_.push(async t=>{t?(e.O_.Yo(),l8(e)?l7(e):e.M_.set("Unknown"/* OnlineState.Unknown */)):(await e.O_.stop(),e.x_=void 0)})),e.O_}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function ug(e){var t,n,r;return e.N_||// Create stream (but note that it is not started yet).
(e.N_=(t=e.datastore,n=e.asyncQueue,r={ho:uu.bind(null,e),Io:ud.bind(null,e),T_:uc.bind(null,e),I_:uh.bind(null,e)},t.A_(),new lJ(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.v_.push(async t=>{t?(e.N_.Yo(),await ua(e)):(await e.N_.stop(),e.b_.length>0&&(sT("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */class uy{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new sP,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
// 'UnhandledPromiseRejectionWarning' log spam.
this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}/**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new uy(e,t,s,r,i);return a.start(n),a}/**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}/**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */skipDelay(){return this.handleDelayElapsed()}/**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new sA(sR.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function uv(e,t){if(sI("AsyncQueue",`${t}: ${e}`),s1(e))return new sA(sR.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */class uw{/** The default ordering is by key if the comparator is omitted */constructor(e){// We are adding document key comparator to the end as it's the only
// guaranteed unique property of a document.
this.comparator=e?(t,n)=>e(t,n)||sX.comparator(t.key,n.key):(e,t)=>sX.comparator(e.key,t.key),this.keyedMap=ot(),this.sortedSet=new s5(this.comparator)}/**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */static emptySet(e){return new uw(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}/**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}/** Iterates documents in order defined by "comparator" */forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}/** Inserts or updates a document with the same key */add(e){// First remove the element if we have it.
let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}/** Deletes a document with a given key */delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof uw)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new uw;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */class ub{constructor(){this.B_=new s5(sX.comparator)}track(e){let t=e.doc.key,n=this.B_.get(t);n?0/* ChangeType.Added */!==e.type&&3/* ChangeType.Metadata */===n.type?this.B_=this.B_.insert(t,e):3/* ChangeType.Metadata */===e.type&&1/* ChangeType.Removed */!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2/* ChangeType.Modified */===e.type&&2/* ChangeType.Modified */===n.type?this.B_=this.B_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):2/* ChangeType.Modified */===e.type&&0/* ChangeType.Added */===n.type?this.B_=this.B_.insert(t,{type:0/* ChangeType.Added */,doc:e.doc}):1/* ChangeType.Removed */===e.type&&0/* ChangeType.Added */===n.type?this.B_=this.B_.remove(t):1/* ChangeType.Removed */===e.type&&2/* ChangeType.Modified */===n.type?this.B_=this.B_.insert(t,{type:1/* ChangeType.Removed */,doc:n.doc}):0/* ChangeType.Added */===e.type&&1/* ChangeType.Removed */===n.type?this.B_=this.B_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):// Added->Added
// Removed->Removed
// Modified->Added
// Removed->Modified
// Metadata->Added
// Removed->Metadata
sx():this.B_=this.B_.insert(t,e)}L_(){let e=[];return this.B_.inorderTraversal((t,n)=>{e.push(n)}),e}}class u_{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}/** Returns a view snapshot as if all documents in the snapshot were added. */static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0/* ChangeType.Added */,doc:e})}),new u_(e,t,uw.emptySet(t),s,n,r,/* syncStateChanged= */!0,/* excludesMetadataChanges= */!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&a4(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */class uE{constructor(){this.k_=void 0,this.listeners=[]}}class uS{constructor(){this.queries=new a7(e=>a9(e),a4),this.onlineState="Unknown"/* OnlineState.Unknown */,this.q_=new Set}}async function uk(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new uE),r)try{i.k_=await e.onListen(n)}catch(n){let e=uv(n,`Initialization of query '${a3(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Q_(e.onlineState),i.k_&&t.K_(i.k_)&&uN(e)}async function uT(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function uI(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.K_(r)&&(n=!0);i.k_=r}}n&&uN(e)}function uC(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);// Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
// after an error.
e.queries.delete(t)}// Call all global snapshot listeners that have been set.
function uN(e){e.q_.forEach(e=>{e.next()})}/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */class ux{constructor(e,t,n){this.query=e,this.U_=t,/**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */this.W_=!1,this.G_=null,this.onlineState="Unknown"/* OnlineState.Unknown */,this.options=n||{}}/**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */K_(e){if(!this.options.includeMetadataChanges){// Remove the metadata only changes.
let t=[];for(let n of e.docChanges)3/* ChangeType.Metadata */!==n.type&&t.push(n);e=new u_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,/* excludesMetadataChanges= */!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}/** Returns whether a snapshot was raised. */Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){return(// Always raise the first event when we're synced
!e.fromCache||(!this.options.J_||!("Offline"/* OnlineState.Offline */!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"/* OnlineState.Offline */===t));// Raise data from cache if we have any documents, have cached results before,
// or we are offline.
}z_(e){// We don't need to handle includeDocumentMetadataChanges here because
// the Metadata only changes have already been stripped out if needed.
// At this point the only changes we will see are the ones we should
// propagate.
if(e.docChanges.length>0)return!0;let t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges;// Generally we should have hit one of the cases above, but it's possible
// to get here if there were only metadata docChanges and they got
// stripped out.
}H_(e){e=u_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.key=e}}class uA{constructor(e){this.key=e}}/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */class uP{constructor(e,/** Documents included in the remote target */t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,/**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */this.current=!1,/** Documents in the view but not in the remote target */this.oa=oa(),/** Document Keys that have local changes */this.mutatedKeys=oa(),this._a=a5(e),this.aa=new uw(this._a)}/**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */get ua(){return this.ia}/**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */ca(e,t){let n=t?t.la:new ub,r=t?t.aa:this.aa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"/* LimitType.First */===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"/* LimitType.Last */===this.query.limitType&&r.size===this.query.limit?r.first():null;// Drop documents out to meet limit/limitToLast requirement.
if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=a6(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||// We only consider committed mutations for documents that were
// mutated during the lifetime of the view.
this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3/* ChangeType.Metadata */,doc:c}),f=!0):this.ha(u,c)||(n.track({type:2/* ChangeType.Modified */,doc:c}),f=!0,(o&&this._a(c,o)>0||l&&0>this._a(c,l))&&// This doc moved from inside the limit to outside the limit.
// That means there may be some other doc in the local cache
// that should be included instead.
(a=!0)):!u&&c?(n.track({type:0/* ChangeType.Added */,doc:c}),f=!0):u&&!c&&(n.track({type:1/* ChangeType.Removed */,doc:u}),f=!0,(o||l)&&// A doc was removed from a full limit query. We'll need to
// requery from the local cache to see if we know about some other
// doc that should be in the results.
(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"/* LimitType.First */===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1/* ChangeType.Removed */,doc:e})}return{aa:s,la:n,Zi:a,mutatedKeys:i}}ha(e,t){// We suppress the initial change event for documents that were modified as
// part of a write acknowledgment (e.g. when the value of a server transform
// is applied) as Watch will send us the same document again.
// By suppressing the event, we only raise two user visible events (one with
// `hasPendingWrites` and the final state of the document) instead of three
// (one with `hasPendingWrites`, the modified document with
// `hasPendingWrites` and the final state of the document).
return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}/**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param limboResolutionEnabled - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @param targetIsPendingReset - Whether the target is pending to reset due to
     *        existence filter mismatch. If not explicitly specified, it is treated
     *        equivalently to `false`.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */// PORTING NOTE: The iOS/Android clients always compute limbo document changes.
applyChanges(e,t,n,r){let i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;// Sort changes based on type and query comparator
let s=e.la.L_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0/* ChangeType.Added */:return 1;case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:// A metadata change is converted to a modified change at the public
    // api layer.  Since we sort by document key and then change type,
    // metadata and modified changes must be sorted equivalently.
    return 2;case 1/* ChangeType.Removed */:return 0;default:return sx()}};return n(e)-n(t)})(e.type,t.type)||this._a(e.doc,t.doc)),this.Pa(n),r=null!=r&&r;let a=t&&!r?this.Ia():[],o=0===this.oa.size&&this.current&&!r?1/* SyncState.Synced */:0/* SyncState.Local */,l=o!==this.sa;return(// We are at synced state if there is no limbo docs are waiting to be resolved, view is current
// with the backend, and the query is not pending to reset due to existence filter mismatch.
(this.sa=o,0!==s.length||l)?{snapshot:new u_(this.query,e.aa,i,s,e.mutatedKeys,0/* SyncState.Local */===o,l,/* excludesMetadataChanges= */!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a})}/**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */Q_(e){return this.current&&"Offline"/* OnlineState.Offline */===e?// to refresh our syncState and generate a ViewChange as appropriate. We
// are guaranteed to get a new TargetChange that sets `current` back to
// true once the client is back online.
(this.current=!1,this.applyChanges({aa:this.aa,la:new ub,mutatedKeys:this.mutatedKeys,Zi:!1},/* limboResolutionEnabled= */!1)):{Ta:[]}}/**
     * Returns whether the doc for the given key should be in limbo.
     */Ea(e){// If the remote end says it's part of this query, it's not in limbo.
return!this.ia.has(e)&&// The local store doesn't think it's a result, so it shouldn't be in limbo.
!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}/**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */Pa(e){e&&(e.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=e.current)}Ia(){// We can only determine limbo documents when we're in-sync with the server.
if(!this.current)return[];// TODO(klimt): Do this incrementally so that it's not quadratic when
// updating many documents.
let e=this.oa;this.oa=oa(),this.aa.forEach(e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))});// Diff the new limbo docs with the old limbo docs.
let t=[];return e.forEach(e=>{this.oa.has(e)||t.push(new uA(e))}),this.oa.forEach(n=>{e.has(n)||t.push(new uR(n))}),t}/**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */// PORTING NOTE: Multi-tab only.
da(e){this.ia=e.ls,this.oa=oa();let t=this.ca(e.documents);return this.applyChanges(t,/* limboResolutionEnabled= */!0)}/**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */// PORTING NOTE: Multi-tab only.
Aa(){return u_.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0/* SyncState.Local */===this.sa,this.hasCachedResults)}}/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */class uD{constructor(/**
     * The query itself.
     */e,/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */t,/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */n){this.query=e,this.targetId=t,this.view=n}}/** Tracks a limbo resolution. */class uO{constructor(e){this.key=e,/**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */this.Ra=!1}}/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class uL{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new a7(e=>a9(e),a4),this.fa=new Map,/**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */this.ga=new Set,/**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */this.pa=new s5(sX.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.ya=new Map,this.wa=new lb,/** Stores user completion handlers, indexed by User and BatchId. */this.Sa={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.ba=new Map,this.Da=lp.Nn(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */async function uM(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=uz.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uZ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uB.bind(null,e),e.Va.a_=uI.bind(null,e.eventManager),e.Va.Fa=uC.bind(null,e.eventManager),e),o=a.ma.get(t);if(o)// already exists when EventManager calls us for the first time. This
// happens when the primary tab is already listening to this query on
// behalf of another tab and the user of the primary also starts listening
// to the query. EventManager will not have an assigned target ID in this
// case and calls `listen` to obtain this ID.
i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Aa();else{let e=await (n=a.localStore,r=a1(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.qr.getTargetData(e,r).next(i=>i?// previous targetID.
    // TODO(mcg): freshen last accessed date?
    (t=i,s0.resolve(t)):n.qr.allocateTargetId(e).next(i=>(t=new ll(r,i,"TargetPurposeListen"/* TargetPurpose.Listen */,e.currentSequenceNumber),n.qr.addTargetData(e,t).next(()=>t))))}).then(e=>{// If Multi-Tab is enabled, the existing target data may be newer than
// the in-memory data
let t=n.ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await uU(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&l9(a.remoteStore,e)}return s}/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */async function uU(e,t,n,r,i){// PORTING NOTE: On Web only, we inject the code that registers new Limbo
// targets based on view changes. This allows us to only depend on Limbo
// changes when user code includes queries.
e.va=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ca(n);i.Zi&&// The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (i=await lM(e.localStore,t.query,/* usePreviousResults= */!1).then(({documents:e})=>t.view.ca(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,/* limboResolutionEnabled= */e.isPrimaryClient,s,a);return uQ(e,t.targetId,o.Ta),o.snapshot})(e,t,n,r);let s=await lM(e.localStore,t,/* usePreviousResults= */!0),a=new uP(t,s.ls),o=a.ca(s.documents),l=oq.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"/* OnlineState.Offline */!==e.onlineState,i),u=a.applyChanges(o,/* limboResolutionEnabled= */e.isPrimaryClient,l);uQ(e,n,u.Ta);let c=new uD(t,n,a);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}/** Stops listening to the query. */async function uF(e,t){let n=e.ma.get(t),r=e.fa.get(n.targetId);if(r.length>1)return e.fa.set(n.targetId,r.filter(e=>!a4(e,t))),void e.ma.delete(t);// No other queries are mapped to the target, clean up the query and the target.
e.isPrimaryClient?(// We need to remove the local query target first to allow us to verify
// whether any other client is still interested in this target.
e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await lL(e.localStore,n.targetId,/*keepPersistedTargetData=*/!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),l3(e.remoteStore,n.targetId),uK(e,n.targetId)}).catch(sZ)):(uK(e,n.targetId),await lL(e.localStore,n.targetId,/*keepPersistedTargetData=*/!0))}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function uV(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=u$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uH.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=sH.now(),s=t.reduce((e,t)=>e.add(t.key),oa());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let o=a8,l=oa();return e.ss.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;// For non-idempotent mutations (such as `FieldValue.increment()`),
// we record the base state in a separate patch mutation. This is
// later used to guarantee consistent values and prevents flicker
// even if the backend sends us an update that already includes our
// transform.
let s=[];for(let e of t){let t=/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=oh(r.transform,e||null);null!=i&&(null===n&&(n=aN.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new oN(e.key,t,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function e(t){let n=[];return s3(t.fields,(t,r)=>{let i=new sQ([t]);if(aT(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else // leaf nodes.
for(let e of t)n.push(i.child(e))}else // nodes.
n.push(i)}),new an(n)}(t.value.mapValue),o_.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:on(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Sa[i.currentUser.toKey()])||(e=new s5(sB)),e=e.insert(r,n),i.Sa[i.currentUser.toKey()]=e,await uY(i,s.changes),await ua(i.remoteStore)}catch(t){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let e=uv(t,"Failed to persist write");n.reject(e)}}/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */async function uz(e,t){try{let n=await /**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */function(e,t){let n=t.snapshotVersion,r=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.ss.newChangeBuffer({trackRemovals:!0});// Reset newTargetDataByTargetMap in case this transaction gets re-run.
r=e.ts;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;// Only update the remote keys if the target is still active. This
// ensures that we can persist the updated target data along with
// the updated assignment.
u.push(e.qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.qr.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(ai.EMPTY_BYTE_STRING,sq.min()).withLastLimboFreeSnapshotVersion(sq.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(a,c),o=c,// Always persist target data if we don't already have a resume token.
(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.qr.updateTargetData(i,c))});let c=a8,h=oa();// HACK: The only reason we allow a null snapshot version is so that we
// can synthesize remote events when we get permission denied errors while
// trying to resolve the state of a locally cached document that is in
// limbo.
if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),// the remote documents in advance in a single call.
u.push((s=t.documentUpdates,a=oa(),o=oa(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=a8;return s.forEach((n,r)=>{let i=e.get(n);// Check if see if there is a existence state change for this document.
r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),// to ensure that rejected limbo resolutions (which fabricate
// NoDocuments with SnapshotVersion.min()) never add documents to
// cache.
r.isNoDocument()&&r.version.isEqual(sq.min())?// events. We remove these documents from cache since we lost
// access.
(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):sT("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{us:t,cs:o}})).next(e=>{c=e.us,h=e.cs})),!n.isEqual(sq.min())){let t=e.qr.getLastRemoteSnapshotVersion(i).next(t=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return s0.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.ts=r,t))}(e.localStore,t);// Update `receivedDocument` as appropriate for any limbo targets.
t.targetChanges.forEach((t,n)=>{let r=e.ya.get(n);r&&// Since this is a limbo resolution lookup, it's for a single document
// and it could be added, modified, or removed, but not a combination.
(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||sx(),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?r.Ra||sx():t.removedDocuments.size>0&&(r.Ra||sx(),r.Ra=!1))}),await uY(e,n,t)}catch(e){await sZ(e)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function uj(e,t,n){var r;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(e.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===n||!e.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===n){let n;let i=[];e.ma.forEach((e,n)=>{let r=n.view.Q_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.Q_(t)&&(n=!0)}),n&&uN(r),i.length&&e.Va.a_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */async function uB(e,t,n){// PORTING NOTE: Multi-tab only.
e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.ya.get(t),i=r&&r.key;if(i){// TODO(klimt): We really only should do the following on permission
// denied errors, but we don't have the cause code here.
// It's a limbo doc. Create a synthetic event saying it was deleted.
// This is kind of a hack. Ideally, we would have a method in the local
// store to purge a document. However, it would be tricky to keep all of
// the local store's invariants with another method.
let n=new s5(sX.comparator);// TODO(b/217189216): This limbo document should ideally have a read time,
// so that it is picked up by any read-time based scans. The backend,
// however, does not send a read time for target removals.
n=n.insert(i,ax.newNoDocument(i,sq.min()));let r=oa().add(i),s=new oH(sq.min(),/* targetChanges= */new Map,/* targetMismatches= */new s5(sB),n,r);await uz(e,s),// We only remove it from bookkeeping after we successfully applied the
// RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
// this query when the RemoteStore restarts the Watch stream, which should
// re-trigger the target failure.
e.pa=e.pa.remove(i),e.ya.delete(t),uX(e)}else await lL(e.localStore,t,/* keepPersistedTargetData */!1).then(()=>uK(e,t,n)).catch(sZ)}async function u$(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=s0.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||sx(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=oa();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
uW(e,r,/*error=*/null),uq(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await uY(e,i)}catch(e){await sZ(e)}}async function uH(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||sx(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
uW(e,t,n),uq(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await uY(e,i)}catch(e){await sZ(e)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function uq(e,t){(e.ba.get(t)||[]).forEach(e=>{e.resolve()}),e.ba.delete(t)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function uW(e,t,n){let r=e.Sa[e.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Sa[e.currentUser.toKey()]=r}}function uK(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.fa.get(t)))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(t=>{e.wa.containsKey(t)||// We removed the last reference for this key
uG(e,t)})}function uG(e,t){e.ga.delete(t.path.canonicalString());// It's possible that the target already got removed because the query failed. In that case,
// the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
let n=e.pa.get(t);null!==n&&(l3(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),uX(e))}function uQ(e,t,n){for(let r of n)r instanceof uR?(e.wa.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(sT("SyncEngine","New document in limbo: "+n),e.ga.add(r),uX(e))}(e,r)):r instanceof uA?(sT("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||// We removed the last reference for this key
uG(e,r.key)):sx()}/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */function uX(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){var t;let n=e.ga.values().next().value;e.ga.delete(n);let r=new sX(sK.fromString(n)),i=e.Da.next();e.ya.set(i,new uO(r)),e.pa=e.pa.insert(r,i),l9(e.remoteStore,new ll(a1((t=r.path,new aJ(t))),i,"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */,s2._e))}}async function uY(e,t,n){let r=[],i=[],s=[];e.ma.isEmpty()||(e.ma.forEach((a,o)=>{s.push(e.va(o,t,n).then(t=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=lx.Qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Va.a_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>s0.forEach(t,t=>s0.forEach(t.ki,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>s0.forEach(t.qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!s1(e))throw e;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
sT("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ts.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);// Advance the last limbo free snapshot version
e.ts=e.ts.insert(t,i)}}}(e.localStore,i))}async function uJ(e,t){if(!e.currentUser.isEqual(t)){sT("SyncEngine","User change. New user:",t.toKey());let n=await lD(e.localStore,t);e.currentUser=t,e.ba.forEach(e=>{e.forEach(e=>{e.reject(new sA(sR.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ba.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await uY(e,n._s)}}function uZ(e,t){let n=e.ya.get(t);if(n&&n.Ra)return oa().add(n.key);{let n=oa(),r=e.fa.get(t);if(!r)return n;for(let t of r){let r=e.ma.get(t);n=n.unionWith(r.view.ua)}return n}}class u0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lG(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var /** Manages our in-memory or durable persistence. */t,n,r,i;return t=this.persistence,n=new lA,r=e.initialUser,i=this.serializer,new lP(t,n,r,i)}createPersistence(e){return new lI(lN.jr,this.serializer)}createSharedClientState(e){return new lF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class u1{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,/* startAsPrimary=*/!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>uj(this.syncEngine,e,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=uJ.bind(null,this.syncEngine),await up(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uS}createDatastore(e){var t,n,r;let i=lG(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new lW(t));return n=e.authCredentials,r=e.appCheckCredentials,new lZ(n,r,s,i)}createRemoteStore(e){var t,n,r,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=lz.D()?new lz:new lV,new l1(t,n,r,e=>uj(this.syncEngine,e,0/* OnlineStateSource.RemoteStore */),i)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new uL(e,t,n,r,i,s);return a&&(o.Ca=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){sT("RemoteStore","RemoteStore shutting down."),e.C_.add(5/* OfflineCause.Shutdown */),await l4(e),e.F_.shutdown(),// triggering spurious listener events with cached data, etc.
e.M_.set("Unknown"/* OnlineState.Unknown */)}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */class u2{constructor(e){this.observer=e,/**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):sI("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */class u4{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=s_.UNAUTHENTICATED,this.clientId=sj.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{sT("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(sT("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new sA(sR.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new sP;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=uv(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function u9(e,t){e.asyncQueue.verifyOperationInProgress(),sT("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await lD(t.localStore,e),r=e)}),// need to be terminated to allow the delete to succeed.
t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function u3(e,t){e.asyncQueue.verifyOperationInProgress();let n=await u6(e);sT("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),// precedence over the offline component provider.
e.setCredentialChangeListener(e=>uf(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>uf(t.remoteStore,n)),e._onlineComponents=t}async function u6(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){sT("FirestoreClient","Using user provided OfflineComponentProvider");try{await u9(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===sR.FAILED_PRECONDITION||t.code===sR.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===t.code||20===t.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===t.code))throw t;sC("Error using user provided cache. Falling back to memory cache: "+t),await u9(e,new u0)}}else sT("FirestoreClient","Using default OfflineComponentProvider"),await u9(e,new u0)}return e._offlineComponents}async function u5(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(sT("FirestoreClient","Using user provided OnlineComponentProvider"),await u3(e,e._uninitializedComponentsProvider._online)):(sT("FirestoreClient","Using default OnlineComponentProvider"),await u3(e,new u1))),e._onlineComponents}async function u7(e){let t=await u5(e),n=t.eventManager;return n.onListen=uM.bind(null,t.syncEngine),n.onUnlisten=uF.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 *//**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
 */function u8(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t,n){if(!n)throw new sA(sR.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function cn(e){if(!sX.isDocumentKey(e))throw new sA(sR.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function cr(e){if(sX.isDocumentKey(e))throw new sA(sR.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function ci(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":sx()}function cs(e,t){if("_delegate"in e&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new sA(sR.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ci(e);throw new sA(sR.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */class ca{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new sA(sR.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new sA(sR.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,n,r){if(!0===t&&!0===r)throw new sA(sR.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u8(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new sA(sR.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new sA(sR.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new sA(sR.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class co{/** @hideconstructor */constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ca({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new sA(sR.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new sA(sR.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ca(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new sO;switch(e.type){case"firstParty":return new sF(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new sA(sR.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=ce.get(e);t&&(sT("ComponentProvider","Removing Datastore"),ce.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */class cl{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,n){this.converter=t,this._query=n,/** The type of this Firestore reference. */this.type="query",this.firestore=e}withConverter(e){return new cl(this.firestore,e,this._query)}}/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class cu{/** @hideconstructor */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,n){this.converter=t,this._key=n,/** The type of this Firestore reference. */this.type="document",this.firestore=e}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new cc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cu(this.firestore,e,this._key)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class cc extends cl{/** @hideconstructor */constructor(e,t,n){super(e,t,new aJ(n)),this._path=n,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let e=this._path.popLast();return e.isEmpty()?null:new cu(this.firestore,/* converter= */null,new sX(e))}withConverter(e){return new cc(this.firestore,e,this._path)}}function ch(e,t,...n){if(e=eX(e),ct("collection","path",t),e instanceof co){let r=sK.fromString(t,...n);return cr(r),new cc(e,/* converter= */null,r)}{if(!(e instanceof cu||e instanceof cc))throw new sA(sR.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(sK.fromString(t,...n));return cr(r),new cc(e.firestore,/* converter= */null,r)}}function cd(e,t,...n){if(e=eX(e),// 'undefined' and 'null'.
1==arguments.length&&(t=sj.newId()),ct("doc","path",t),e instanceof co){let r=sK.fromString(t,...n);return cn(r),new cu(e,/* converter= */null,new sX(r))}{if(!(e instanceof cu||e instanceof cc))throw new sA(sR.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(sK.fromString(t,...n));return cn(r),new cu(e.firestore,e instanceof cc?e.converter:null,new sX(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){// The last promise in the queue.
this.Ja=Promise.resolve(),// retried with backoff.
this.Ya=[],// be changed again.
this.Za=!1,// automatically removed after they are run or canceled.
this.Xa=[],this.eu=null,// assertion sanity-checks.
this.tu=!1,this.nu=!1,this.ru=[],this.zo=new lQ(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.iu=()=>{let e=lK();e&&sT("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=lK();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=lK();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new sP;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!s1(e))throw e;// Failure will be handled by AsyncQueue
sT("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;this.eu=e,this.tu=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw sI("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,n){this.su(),this.ru.indexOf(e)>-1&&(t=0);let r=uy.createAndSchedule(this,e,t,n,e=>this.au(e));return this.Xa.push(r),r}su(){this.eu&&sx()}verifyOperationInProgress(){}/**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */async uu(){// Operations in the queue prior to draining may have enqueued additional
// operations. Keep draining the queue until the tail is no longer advanced,
// which indicates that no more new operations were enqueued and that all
// operations were executed.
let e;do e=this.Ja,await e;while(e!==this.Ja)}/**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}/**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */lu(e){// Note that draining may generate more delayed ops, so we do that first.
return this.uu().then(()=>{for(let t of(// Run ops in the same order they'd run if they ran naturally.
this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"/* TimerId.All */!==e&&t.timerId===e)break;return this.uu()})}/**
     * For Tests: Skip all subsequent delays for a timer id.
     */hu(e){this.ru.push(e)}/** Called once a DelayedOperation is run or canceled. */au(e){// NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */class cp extends co{/** @hideconstructor */constructor(e,t,n,r){super(e,t,n,r),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new cf,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
cg(this),this._firestoreClient.terminate()}}/**
 * @internal
 */function cm(e){return e._firestoreClient||cg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function cg(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ad(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,u8(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new u4(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing an array of bytes.
 */class cy{/** @hideconstructor */constructor(e){this._byteString=e}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(e){try{return new cy(ai.fromBase64String(e))}catch(e){throw new sA(sR.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(e){return new cy(ai.fromUint8Array(e))}/**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */toBase64(){return this._byteString.toBase64()}/**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */toUint8Array(){return this._byteString.toUint8Array()}/**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */toString(){return"Bytes(base64: "+this.toBase64()+")"}/**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */class cv{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new sA(sR.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sQ(e)}/**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */class cw{/**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */class cb{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new sA(sR.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new sA(sR.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}/**
     * The latitude of this `GeoPoint` instance.
     */get latitude(){return this._lat}/**
     * The longitude of this `GeoPoint` instance.
     */get longitude(){return this._long}/**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */isEqual(e){return this._lat===e._lat&&this._long===e._long}/** Returns a JSON-serializable representation of this GeoPoint. */toJSON(){return{latitude:this._lat,longitude:this._long}}/**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */_compareTo(e){return sB(this._lat,e._lat)||sB(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class cE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new oN(e,this.data,this.fieldMask,t,this.fieldTransforms):new oC(e,this.data,t,this.fieldTransforms)}}function cS(e){switch(e){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw sx()}}/** A "context" object passed around while parsing user data. */class ck{/**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,// external call and we need to validate the entire path.
void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}/** Returns a new context with the specified settings overwritten. */Tu(e){return new ck(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Au(e),r}Ru(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(e){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.Tu({path:void 0,du:!0})}mu(e){return cR(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Pu(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(cS(this.Iu)&&c_.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class cT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||lG(e)}/** Creates a new top-level parse context. */pu(e,t,n,r=!1){return new ck({Iu:e,methodName:t,gu:n,path:sQ.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cI(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof sH||e instanceof cb||e instanceof cy||e instanceof cu||e instanceof cw)}function cC(e,t,n){if(!cI(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ci(n);throw"an object"===r?t.mu(e+" a custom object"):t.mu(e+" "+r)}}/**
 * Matches any characters in a field path string that are reserved.
 */const cN=RegExp("[~\\*/\\[\\]]");/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function cx(e,t,n){if(t.search(cN)>=0)throw cR(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,/* hasConverter= */!1,/* path= */void 0,n);try{return new cv(...t.split("."))._internalPath}catch(r){throw cR(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,/* hasConverter= */!1,/* path= */void 0,n)}}function cR(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new sA(sR.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */class cA{// Note: This class is stripped down version of the DocumentSnapshot in
// the legacy SDK. The changes are:
// - No support for SnapshotMetadata.
// - No support for SnapshotOptions.
/** @hideconstructor protected */constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}/** Property of the `DocumentSnapshot` that provides the document's ID. */get id(){return this._key.path.lastSegment()}/**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */get ref(){return new cu(this._firestore,this._converter,this._key)}/**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */exists(){return null!==this._document}/**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */data(){if(this._document){if(this._converter){// We only want to use the converter and create a new DocumentSnapshot
// if a converter has been provided.
let e=new cP(this._firestore,this._userDataWriter,this._key,this._document,/* converter= */null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e){if(this._document){let t=this._document.data.field(cD("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class cP extends cA{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */data(){return super.data()}}/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */function cD(e,t){return"string"==typeof t?cx(e,t):t instanceof cv?t._internalPath:t._delegate._internalPath}class cO{convertValue(e,t="none"){switch(am(e)){case 0/* TypeOrder.NullValue */:return null;case 1/* TypeOrder.BooleanValue */:return e.booleanValue;case 2/* TypeOrder.NumberValue */:return ao(e.integerValue||e.doubleValue);case 3/* TypeOrder.TimestampValue */:return this.convertTimestamp(e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return this.convertServerTimestamp(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue;case 6/* TypeOrder.BlobValue */:return this.convertBytes(al(e.bytesValue));case 7/* TypeOrder.RefValue */:return this.convertReference(e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return this.convertGeoPoint(e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return this.convertArray(e.arrayValue,t);case 10/* TypeOrder.ObjectValue */:return this.convertObject(e.mapValue,t);default:throw sx()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}/**
     * @internal
     */convertObjectMap(e,t="none"){let n={};return s3(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new cb(ao(e.latitude),ao(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ac(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ah(e));default:return null}}convertTimestamp(e){let t=aa(e);return new sH(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=sK.fromString(e);lo(n)||sx();let r=new af(n.get(1),n.get(3)),i=new sX(n.popFirst(5));return r.isEqual(t)||// TODO(b/64130202): Somehow support foreign references.
sI(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Metadata about a snapshot, describing the state of the snapshot.
 */class cL{/** @hideconstructor */constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}/**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */class cM extends cA{/** @hideconstructor protected */constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}/**
     * Returns whether or not the data exists. True if the document exists.
     */exists(){return super.exists()}/**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */data(e={}){if(this._document){if(this._converter){// We only want to use the converter and create a new DocumentSnapshot
// if a converter has been provided.
let t=new cU(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,/* converter= */null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e,t={}){if(this._document){let n=this._document.data.field(cD("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class cU extends cM{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */data(e={}){return super.data(e)}}/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */class cF{/** @hideconstructor */constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new cL(r.hasPendingWrites,r.fromCache),this.query=n}/** An array of all the documents in the `QuerySnapshot`. */get docs(){let e=[];return this.forEach(t=>e.push(t)),e}/** The number of documents in the `QuerySnapshot`. */get size(){return this._snapshot.docs.size}/** True if there are no documents in the `QuerySnapshot`. */get empty(){return 0===this.size}/**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new cU(this._firestore,this._userDataWriter,n.key,n,new cL(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}/**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new sA(sR.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=/** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new cU(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cL(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{// A `DocumentSet` that is updated incrementally as changes are applied to use
// to lookup the index of a document.
let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3/* ChangeType.Metadata */!==e.type).map(t=>{let r=new cU(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cL(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0/* ChangeType.Added */!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1/* ChangeType.Removed */!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0/* ChangeType.Added */:return"added";case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:return"modified";case 1/* ChangeType.Removed */:return"removed";default:return sx()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class cV extends cO{constructor(e){super(),this.firestore=e}convertBytes(e){return new cy(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new cu(this.firestore,/* converter= */null,t)}}/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */function cz(e,t){return function(e,t){let n=new sP;return e.asyncQueue.enqueueAndForget(async()=>uV(await u5(e).then(e=>e.syncEngine),t,n)),n.promise}(cm(e),t)}function cj(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function cB(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}new WeakMap,function(e=!0){sE=tE,tv(new eY("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new cp(new sM(t.getProvider("auth-internal")),new sz(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new sA(sR.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new af(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),tT(sb,"4.4.0",void 0),tT(sb,"4.4.0","esm2017")}(),tT("firebase","10.7.1","app"),"function"==typeof SuppressedError&&SuppressedError;const c$=new ej("auth","Firebase",cB()),cH=new e6("@firebase/auth");function cq(e,...t){cH.logLevel<=tZ.ERROR&&cH.error(`Auth (${tE}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cW(e,...t){throw cQ(e,...t)}function cK(e,...t){return cQ(e,...t)}function cG(e,t,n){let r=Object.assign(Object.assign({},cB()),{[t]:n}),i=new ej("auth","Firebase",r);return i.create(t,{appName:e.name})}function cQ(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c$.create(e,...t)}function cX(e,t,...n){if(!e)throw cQ(t,...n)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function cY(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw cq(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cJ(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function cZ(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class c0{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||cY("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eV())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===cZ()||"https:"===cZ()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(e,t){e.emulator||cY("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void cY("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void cY("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void cY("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const c4={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,INVALID_LOGIN_CREDENTIALS:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_CREDENTIAL */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},c9=new c0(3e4,6e4);function c3(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function c6(e,t,n,r,i={}){return c5(e,i,async()=>{let i={},s={};r&&("GET"/* HttpMethod.GET */===t?s=r:i={body:JSON.stringify(r)});let a=eq(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(o["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),c2.fetch()(c8(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))})}async function c5(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},c4),t);try{let t=new he(e),i=await Promise.race([n(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw ht(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,s);if(i.ok&&!("errorMessage"in s))return s;{let t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===n)throw ht(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,s);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===n)throw ht(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,s);if("USER_DISABLED"/* ServerError.USER_DISABLED */===n)throw ht(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,s);let o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw cG(e,o,a);cW(e,o)}}catch(t){if(t instanceof ez)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
cW(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function c7(e,t,n,r,i={}){let s=await c6(e,t,n,r,i);return"mfaPendingCredential"in s&&cW(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:s}),s}function c8(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?c1(e.config,i):`${e.config.apiScheme}://${i}`}class he{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(cK(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),c9.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ht(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=cK(e,t,r);return(// We know customData is defined on error because errorParams is defined
i.customData._tokenResponse=n,i)}function hn(e){return void 0!==e&&void 0!==e.enterprise}class hr{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The list of providers and their enablement status for reCAPTCHA Enterprise.
         */this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}/**
     * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
     *
     * @param providerStr - The provider whose enforcement state is to be returned.
     * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
     */getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE"/* EnforcementState.ENFORCE */;case"AUDIT":return"AUDIT"/* EnforcementState.AUDIT */;case"OFF":return"OFF"/* EnforcementState.OFF */;default:return"ENFORCEMENT_STATE_UNSPECIFIED"/* EnforcementState.ENFORCEMENT_STATE_UNSPECIFIED */}}(t.enforcementState);return null}/**
     * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
     *
     * @param providerStr - The provider whose enablement state is to be returned.
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
     */isProviderEnabled(e){return"ENFORCE"/* EnforcementState.ENFORCE */===this.getProviderEnforcementState(e)||"AUDIT"/* EnforcementState.AUDIT */===this.getProviderEnforcementState(e)}}async function hi(e,t){return c6(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,c3(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(e,t){return c6(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function ha(e,t){return c6(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function hl(e,t=!1){let n=eX(e),r=await n.getIdToken(t),i=hc(r);cX(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ho(hu(i.auth_time)),issuedAtTime:ho(hu(i.iat)),expirationTime:ho(hu(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function hu(e){return 1e3*Number(e)}function hc(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return cq("JWT malformed, contained fewer than 3 sections"),null;try{let e=ex(n);if(!e)return cq("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return cq("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ez&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){// Only retry on network errors
(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(e){var t;let n=e.auth,r=await e.getIdToken(),i=await hh(e,ha(n,{idToken:r}));cX(null==i?void 0:i.users.length,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=cj(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[],o=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==o?void 0:o.length),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hf(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function hm(e){let t=eX(e);await hp(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(e,t){let n=await c5(e,{},async()=>{let n=eq({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=c8(e,r,"/v1/token"/* Endpoint.TOKEN */,`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",c2.fetch()(s,{method:"POST"/* HttpMethod.POST */,headers:a,body:n})});// The response comes back in snake_case. Convert to camel:
return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hy(e,t){return c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts:revokeToken"/* Endpoint.REVOKE_TOKEN */,c3(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class hv{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){cX(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cX(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cX(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=hc(e);return cX(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cX(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cX(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(cX(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await hg(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new hv;return n&&(cX("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.refreshToken=n),r&&(cX("string"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.accessToken=r),i&&(cX("number"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hv,this.toJSON())}_performRefresh(){return cY("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(e,t){cX("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class hb{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=cj(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new hd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await hh(this,this.stsTokenManager.getToken(this.auth,e));return cX(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hl(this,e)}reload(){return hm(this)}_assign(e){this!==e&&(cX(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new hb(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
cX(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await hh(this,hs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;cX(v&&E,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let S=hv.fromJSON(this.name,E);cX("string"==typeof v,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),hw(c,e.name),hw(h,e.name),cX("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cX("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),hw(d,e.name),hw(f,e.name),hw(p,e.name),hw(m,e.name),hw(g,e.name),hw(y,e.name);let k=new hb({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(k.providerData=_.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,n=!1){let r=new hv;r.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let i=new hb({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return(// Updates the user info and data and resolves with a user instance.
await hp(i),i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;function hE(e){e instanceof Function||cY("Expected a class definition");let t=h_.get(e);return t?t instanceof e||cY("Instance stored in cache mismatched with class"):(t=new e,h_.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(e,t,n){return`firebase:${e}:${t}:${n}`}hS.type="NONE";class hT{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=hk(this.userKey,r.apiKey,i),this.fullPersistenceKey=hk("persistence"/* KeyName.PERSISTENCE_USER */,r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?hb._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new hT(hE(hS),e,n);// Eliminate any persistences that are not available
let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||hE(hS),s=hk(n,e.config.apiKey,e.name),a=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let n of t)try{let t=await n._get(s);if(t){let r=hb._fromJSON(e,t);// throws for unparsable blob (wrong format)
n!==i&&(a=r),i=n;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&// we'll just let it bubble to surface the error.
await i._set(s,a.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new hT(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function hI(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(hR(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(hC(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(hP(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(hD(t))return"Webos"/* BrowserName.WEBOS */;if(hN(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||hx(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(hA(t))return"Android"/* BrowserName.ANDROID */;let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"/* BrowserName.OTHER */}function hC(e=eV()){return/firefox\//i.test(e)}function hN(e=eV()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hx(e=eV()){return/crios\//i.test(e)}function hR(e=eV()){return/iemobile/i.test(e)}function hA(e=eV()){return/android/i.test(e)}function hP(e=eV()){return/blackberry/i.test(e)}function hD(e=eV()){return/webos/i.test(e)}function hO(e=eV()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function hL(e=eV()){// TODO: implement getBrowserName equivalent for OS.
return hO(e)||hA(e)||hD(e)||hP(e)||/windows phone/i.test(e)||hR(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function hM(e,t=[]){let n;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
n=hI(eV());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
n=`${hI(eV())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${n}/JsCore/${tE}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let n=t=>new Promise((n,r)=>{try{let r=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    n(r)}catch(e){// Sync callback throws.
    r(e)}});// Attach the onAbort if present
n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function hF(e,t={}){return c6(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,c3(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class hV{constructor(e){var t,n,r,i;// Only include custom strength options defined in the response.
let s=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;let o={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),// Combine the status into single isValid property.
o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let n;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */n>="a"&&n<="z",/* containsUppercaseCharacter= */n>="A"&&n<="Z",/* containsNumericCharacter= */n>="0"&&n<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(n))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hj(this),this.idTokenSubscription=new hj(this),this.beforeStateQueue=new hU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c$,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hE(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await hT.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!n||n===s)&&(null==a?void 0:a.user)&&(r=a.user,i=!0)}// If no user in persistence, there is no current user. Set to null.
if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(cX(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hp(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?eX(e):null;return t&&cX(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&cX(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hE(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await hF(this),t=new hV(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ej("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}/**
     * Revokes the given access token. Currently only supports Apple OAuth access tokens.
     */async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN"/* TokenType.ACCESS_TOKEN */,token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await hy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&hE(e)||this._popupRedirectResolver;cX(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await hT.create(this,[hE(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(cX(a,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{let n=e.addObserver(t);return()=>{s=!0,n()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return cX(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=hM(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=n);// If the App Check service exists, add the App Check token in the headers
let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){cH.logLevel<=tZ.WARN&&cH.warn(`Auth (${tE}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class hj{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let n=new eG(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return cX(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function hB(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=cK("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)})}function h$(e){return`__${e}${Math.floor(1e6*Math.random())}`}class hH{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=eX(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{hi(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new hr(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;hn(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&hn(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}hB("https://www.google.com/recaptcha/enterprise.js?render="+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function hq(e,t,n,r=!1){let i;let s=new hH(e);try{i=await s.verify(n)}catch(e){i=await s.verify(n,!0)}let a=Object.assign({},t);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),a}async function hW(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"/* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */))return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await hq(e,t,n,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===n);return r(e,i)}});{let i=await hq(e,t,n,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===n);return r(e,i)}}function hK(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function hG(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class hQ{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return cY("not implemented")}/** @internal */_getIdTokenResponse(e){return cY("not implemented")}/** @internal */_linkToIdToken(e,t){return cY("not implemented")}/** @internal */_getReauthenticationResolver(e){return cY("not implemented")}}// Used for linking an email/password account to an existing idToken. Uses the same request/response
// format as updateEmailPassword.
async function hX(e,t){return c6(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hY(e,t){return c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,c3(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hJ(e,t){return c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,c3(e,t))}async function hZ(e,t){return c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,c3(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class h0 extends hQ{/** @internal */constructor(/** @internal */e,/** @internal */t,n,/** @internal */r=null){super("password"/* ProviderId.PASSWORD */,n),this._email=e,this._password=t,this._tenantId=r}/** @internal */static _fromEmailAndPassword(e,t){return new h0(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,n=null){return new h0(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,n)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return hW(e,t,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */,hY);case"emailLink"/* SignInMethod.EMAIL_LINK */:return hJ(e,{email:this._email,oobCode:this._password});default:cW(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return hW(e,n,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */,hX);case"emailLink"/* SignInMethod.EMAIL_LINK */:return hZ(e,{idToken:t,email:this._email,oobCode:this._password});default:cW(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(e,t){return c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,c3(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class h2 extends hQ{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new h2(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cW("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=cj(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new h2(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return h1(e,t)}/** @internal */_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,h1(e,n)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,h1(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=eq(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h4(e,t){return c6(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,c3(e,t))}async function h9(e,t){return c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,c3(e,t))}async function h3(e,t){let n=await c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,c3(e,t));if(n.temporaryProof)throw ht(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,n);return n}const h6={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function h5(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return c7(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,c3(e,n),h6)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class h7 extends hQ{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new h7({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new h7({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return h9(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return h3(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return h5(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new h7({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class h8{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,n,r,i,s,a;let o=eW(eK(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(n=o.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);// Validate API key, code and mode.
cX(l&&u&&c,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=eW(eK(e)).link,n=t?eW(eK(t)).deep_link_id:null,r=eW(eK(e)).deep_link_id,i=r?eW(eK(r)).link:null;return i||r||n||t||e}(e);try{return new h8(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class de{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=de.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return h0._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let n=h8.parseLink(t);return cX(n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),h0._fromEmailAndCode(e,n.code,n.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */de.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */de.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */de.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class dt{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class dn extends dt{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class dr extends dn{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return h2._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */dr.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */dr.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class di extends dn{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return h2._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return di.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return di.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */di.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */di.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class ds extends dn{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return h2._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */ds.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */ds.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class da extends dn{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return h2._fromParams({providerId:da.PROVIDER_ID,signInMethod:da.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return da.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return da.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return da.credential(t,n)}catch(e){return null}}}/** Always set to {@link SignInMethod}.TWITTER. */da.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */da.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await hb._fromIdTokenResponse(e,n,r),s=du(n),a=new dl({user:i,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,/* reload */!0);let r=du(n);return new dl({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function du(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends ez{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new dc(e,t,n,r)}}function dh(e,t,n,r){let i="reauthenticate"/* OperationType.REAUTHENTICATE */===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw dc._fromErrorAndOperation(e,n,t,r);throw n})}async function dd(e,t,n=!1){let r=await hh(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dl._forOperation(e,"link"/* OperationType.LINK */,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(e,t,n=!1){let{auth:r}=e,i="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let s=await hh(e,dh(r,i,t,e),n);cX(s.idToken,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=hc(s.idToken);cX(a,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:o}=a;return cX(e.uid===o,r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),dl._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&cW(r,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(e,t,n=!1){let r="signIn"/* OperationType.SIGN_IN */,i=await dh(e,r,t),s=await dl._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;const dm="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class dg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(dm,"1"),this.storage.removeItem(dm),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class dy extends dg{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=eV();return hN(e)||hO(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=hL(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let n=this.storage.getItem(t),r=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let r=this.storage.getItem(n);// Value not synchronized, synchronize manually.
if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);/** Detects Internet Explorer. */(function(){let e=eV();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv extends dg{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}dv.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class dw{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new dw(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:n,response:a})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}dw.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class d_{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,n=50/* _TimeoutDuration.ACK */){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((a,o)=>{let l=db("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(u),r=setTimeout(()=>{o(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(r),a(e.data.response);break;default:clearTimeout(u),clearTimeout(r),o(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function dE(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(){return void 0!==dE().WorkerGlobalScope&&"function"==typeof dE().importScripts}async function dk(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebaseLocalStorageDb",dI="firebaseLocalStorage",dC="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class dN{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dx(e,t){return e.transaction([dI],t?"readwrite":"readonly").objectStore(dI)}function dR(){let e=indexedDB.open(dT,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(dI,{keyPath:dC})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
n.objectStoreNames.contains(dI)?t(n):(// Need to close the database or else you get a `blocked` event
n.close(),await function(){let e=indexedDB.deleteDatabase(dT);return new dN(e).toPromise()}(),t(await dR()))})})}async function dA(e,t,n){let r=dx(e,!0).put({[dC]:t,value:n});return new dN(r).toPromise()}async function dP(e,t){let n=dx(e,!1).get(t),r=await new dN(n).toPromise();return void 0===r?null:r.value}function dD(e,t){let n=dx(e,!0).delete(t);return new dN(n).toPromise()}class dO{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await dR()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return dS()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=dw._getInstance(dS()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await dk(),!this.activeServiceWorker)return;this.sender=new d_(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let n=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await dR();return await dA(e,dm,"1"),await dD(e,dm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>dA(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>dP(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dD(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=dx(e,!1).getAll();return new dN(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function dL(e,t,n){var r,i,s;let a=await n.verify();try{let o;if(cX("string"==typeof a,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),cX("recaptcha"===n.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){cX("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,c3(e,i)));return n.phoneSessionInfo.sessionInfo}{cX("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;cX(n,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}},c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,c3(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await h4(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}dO.type="LOCAL",h$("rcb"),new c0(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class dM{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=dM.PROVIDER_ID,this.auth=eX(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return dL(this.auth,e,eX(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return h7._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return dM.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return dM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?h7._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */function dU(e,t){return t?hE(t):(cX(e._popupRedirectResolver,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),e._popupRedirectResolver)}/** Always set to {@link ProviderId}.PHONE. */dM.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */dM.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF extends hQ{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return h1(e,this._buildIdpRequest())}_linkToIdToken(e,t){return h1(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return h1(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dV(e){return dp(e.auth,new dF(e),e.bypassAuthState)}function dz(e){let{auth:t,user:n}=e;return cX(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),df(n,new dF(e),e.bypassAuthState)}async function dj(e){let{auth:t,user:n}=e;return cX(n,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),dd(n,new dF(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class dB{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return dV;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return dj;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return dz;default:cW(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||cY("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||cY("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d$=new c0(2e3,1e4);/**
 * Authenticates a Firebase client using a popup-based OAuth authentication flow.
 *
 * @remarks
 * If succeeds, returns the signed in user along with the provider's credential. If sign in was
 * unsuccessful, returns an error object containing additional information about the error.
 *
 * This method does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */async function dH(e,t,n){let r=eX(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&cW(e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),cG(e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */,`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,dt);let i=dU(r,n),s=new dq(r,"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */,t,i);return s.executeNotNull()}/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class dq extends dB{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,dq.currentPopupAction&&dq.currentPopupAction.cancel(),dq.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return cX(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||cY("Popup operations only handle one event");let e=db();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(cK(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(cK(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dq.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cK(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,d$.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
dq.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const dW=new Map;class dK extends dB{constructor(e,t,n=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,n),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=dW.get(this.auth._key());if(!e){try{let t=await dG(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dW.set(this.auth._key(),e)}return this.bypassAuthState||dW.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dG(e,t){let n=hk("pendingRedirect",t.config.apiKey,t.name),r=hE(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function dQ(e,t){dW.set(e._key(),t)}async function dX(e,t,n=!1){let r=eX(e),i=dU(r,t),s=new dK(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class dY{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return dZ(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!dZ(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(cK(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(dJ(e))}saveEventToCache(e){this.cachedEventUids.add(dJ(e)),this.lastProcessedEventTime=Date.now()}}function dJ(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function dZ({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(e,t={}){return c6(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d2=/^https?/;async function d4(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await d0(e);for(let e of t)try{if(function(e){let t=cJ(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!d2.test(n))return!1;if(d1.test(e))// only contain the IP, no extra character.
return r===e;// Dots in pattern should be escaped.
let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
cW(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d9=new c0(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function d3(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=dE().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let d6=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d5=new c0(5e3,15e3),d7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d8=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function fe(e){let t=await (d6=d6||new Promise((t,n)=>{var r,i,s;// Function to run when gapi.load is ready.
function a(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
d3(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
d3(),n(cK(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:d9.get()})}if(null===(i=null===(r=dE().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=dE().gapi)||void 0===s?void 0:s.load)a();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=h$("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
dE()[t]=()=>{// GApi loader should be ready.
gapi.load?a():n(cK(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},hB(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
d6=null,e)})),n=dE().gapi;return cX(n,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;cX(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let n=t.emulator?c1(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:tE},i=d8.get(e.config.apiHost);i&&(r.eid=i);let s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eq(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d7,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let i=cK(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),s=dE().setTimeout(()=>{r(i)},d5.get());// Clear timer and resolve pending iframe ready promise.
    function a(){dE().clearTimeout(s),n(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(a).then(a,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class fn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const fr=encodeURIComponent("fac");async function fi(e,t,n,r,i,s){cX(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),cX(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tE,eventId:i};if(t instanceof dt)// TODO set additionalParams from the provider as well?
for(let[n,r]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))a[n]=r;if(t instanceof dn){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}for(let t of(e.tenantId&&(a.tid=e.tenantId),Object.keys(a)))void 0===a[t]&&delete a[t];// Sets the App Check token to pass to the widget
let o=await e._getAppCheckToken(),l=o?`#${fr}=${encodeURIComponent(o)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?c1(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${eq(a).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */const fs="webStorageSupport",fa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dv,this._completeRedirectFn=dX,this._overrideRedirectResult=dQ}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,n,r){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||cY("_initialize() not called before _openPopup()");let s=await fi(e,t,n,cJ(),r);return function(e,t,n,r=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),o="",l=Object.assign(Object.assign({},ft),{width:r.toString(),height:i.toString(),top:s,left:a}),u=eV().toLowerCase();n&&(o=hx(u)?"_blank":n),hC(u)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=eV()){var t;return hO(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",o),new fn(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let h=window.open(t||"",o,c);cX(h,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{h.focus()}catch(e){}return new fn(h)}(e,s,db())}async _openRedirect(e,t,n,r){await this._originValidation(e);let i=await fi(e,t,n,cJ(),r);return dE().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||cY("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await fe(e),n=new dY(e);return t.register("authEvent",t=>{cX(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let r=n.onEvent(t.authEvent);return{status:r?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(fs,{type:fs},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[fs];void 0!==i&&t(!!i),cW(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return hL()||hN()||hO()}};class fo{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,n);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return cY("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class fl extends fo{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new fl(e)}/** @internal */_finalizeEnroll(e,t,n){return c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,c3(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,c3(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class fu extends fo{constructor(e,t,n){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=n}/** @internal */static _fromSecret(e,t){return new fu(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new fu(t,e)}/** @internal */async _finalizeEnroll(e,t,n){return cX(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,c3(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){cX(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let n={verificationCode:this.otp};return c6(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,c3(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class fc{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,n,r,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new fc(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var n;let r=!1;return(fh(e)||fh(t))&&(r=!0),r&&(fh(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),fh(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function fh(e){return void 0===e||(null==e?void 0:e.length)===0}var fd="@firebase/auth",ff="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){cX(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const fm=eU("authIdTokenMaxAge")||300;let fg=null;const fy=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fm)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let i=null==n?void 0:n.token;fg!==i&&(fg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};i="Browser"/* ClientPlatform.BROWSER */,tv(new eY("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;cX(a&&!a.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:n.name});let l={apiKey:a,authDomain:o,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:hM(i)},u=new hz(n,r,s,l);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hE);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);r.initialize()})),tv(new eY("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=eX(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new fp(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),tT(fd,ff,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(i)),tT(fd,ff,"esm2017");// Initialize Firebase
const fv=tS({apiKey:"AIzaSyBOyM_4bV-Gi6dGDZEmRBNY4PWiJauecwc",authDomain:"blog-project-28c29.firebaseapp.com",projectId:"blog-project-28c29",storageBucket:"blog-project-28c29.appspot.com",messagingSenderId:"955239358716",appId:"1:955239358716:web:8c23c6f2f15a67d8707779"}),fw=function(e,t){let n="object"==typeof e?e:tk(),r=tw(n,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!r._initialized){let e=eL("firestore");e&&/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */function(e,t,n,r={}){var i;let s=(e=cs(e,co))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&sC("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=s_.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[eN(JSON.stringify({alg:"none",type:"JWT"})),eN(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new sA(sR.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new s_(s)}e._authCredentials=new sL(new sD(t,n))}}(r,...e)}return r}(fv),fb=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=tk()){let t=tw(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let n=tw(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if(e$(r,null!=t?t:{}))return e;cW(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let r=n.initialize({options:t});return r}(e,{popupRedirectResolver:fa,persistence:[dO,dy,dv]}),r=eU("authTokenSyncURL");if(r){let e=fy(r);eX(n).beforeAuthStateChanged(e,()=>e(n.currentUser)),eX(n).onIdTokenChanged(t=>e(t),void 0,void 0)}let i=eO("auth");return i&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,n){let r=eX(e);cX(r._canInitEmulator,r,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),cX(/^https?:\/\//.test(t),r,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let i=!!(null==n?void 0:n.disableWarnings),s=hK(t),{host:a,port:o}=function(e){let t=hK(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);// Strip out "username:password@".
if(i){let e=i[1];return{host:e,port:hG(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:hG(t)}}}(t),l=null===o?"":`:${o}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${i}`),n}(fv),f_=new di;var fE=function({isAuth:e}){let[t,n]=(0,g.useState)([]),r=ch(fw,"posts"),i=async e=>{let t=cd(fw,"posts",e);try{await cz(cs(t.firestore,cp),[new oP(t._key,o_.none())])}catch(e){console.error(`Error deleting post: ${e}`)}};return(0,g.useEffect)(()=>{try{let e=async()=>{let e=await /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */function(e){e=cs(e,cl);let t=cs(e.firestore,cp),n=cm(t),r=new cV(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"/* LimitType.Last */===e.limitType&&0===e.explicitOrderBy.length)throw new sA(sR.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new sP;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new u2({next:n=>{// Remove query first before passing event to user to avoid
    // user actions affecting the now stale query.
    t.enqueueAndForget(()=>uT(e,a)),n.fromCache&&"server"===r.source?i.reject(new sA(sR.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new ux(n,s,{includeMetadataChanges:!0,J_:!0});return uk(e,a)})(await u7(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new cF(t,r,e,n)))}(r);n(e.docs.map(e=>({...e.data(),id:e.id}))),console.log(t)};e()}catch(e){console.error(`Error fetching posts: ${e}`)}},[i]),/*#__PURE__*/(0,p.jsx)("div",{className:"homePage",children:t.map(t=>(console.log(t.author.name),/*#__PURE__*/(0,p.jsxs)("div",{className:"post",children:[/*#__PURE__*/(0,p.jsxs)("div",{className:"postHeader",children:[/*#__PURE__*/(0,p.jsx)("div",{className:"title",children:/*#__PURE__*/(0,p.jsxs)("h1",{children:[" ",t.title]})}),/*#__PURE__*/(0,p.jsx)("div",{className:"deletePost",children:e&&t.author.id===fb.currentUser.uid&&/*#__PURE__*/(0,p.jsxs)("button",{onClick:()=>{i(t.id)},children:[" ","\uD83D\uDDD1"]})})]}),/*#__PURE__*/(0,p.jsxs)("div",{className:"postTextContainer",children:[" ",t.postText," "]}),/*#__PURE__*/(0,p.jsxs)("h3",{children:["@",t.author.name]})]})))})},g=f("acw62"),fS=function({isAuth:e}){let[t,n]=(0,g.useState)(""),[r,i]=(0,g.useState)(""),s=ch(fw,"posts"),a=q(),o=async()=>{await /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */function(e,t){var n,r;let i=cs(e.firestore,cp),s=cd(e),a=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return cz(i,[/** Parse document data from a set() call. */(function(e,t,n,r,i,s={}){let a,o;let l=e.pu(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,t,n,i);cC("Data must be an object, but it was:",l,r);let u=function e(t,n){let r={};return s6(t)?// mask to ensure that the server creates a map entry.
n.path&&n.path.length>0&&n.fieldMask.push(n.path):s3(t,(t,i)=>{let s=/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function t(n,r){if(cI(// from firestore-exp.
n=eX(n)))return cC("Unsupported field value:",r,n),e(n,r);if(n instanceof cw)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(e,t){// Sentinels are only supported with writes, and not within arrays.
if(!cS(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,r),null;if(void 0===n&&r.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
r.path&&r.fieldMask.push(r.path),n instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(r.settings.du&&4/* UserDataSource.ArrayArgument */!==r.Iu)throw r.mu("Nested arrays are not supported");return function(e,n){let r=[],i=0;for(let s of e){let e=t(s,n.Vu(i));null==e&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(e={nullValue:"NULL_VALUE"}),r.push(e),i++}return{arrayValue:{values:r}}}(n,r)}return function(e,t){if(null===(e=eX(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!s4(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?ou(r):ol(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=sH.fromDate(e);return{timestampValue:o9(t.serializer,n)}}if(e instanceof sH){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let n=new sH(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:o9(t.serializer,n)}}if(e instanceof cb)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cy)return{bytesValue:o3(t.serializer,e._byteString)};if(e instanceof cu){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:o5(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${ci(e)}`)}(n,r)}(i,n.Eu(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}(r,l);if(s.merge)a=new an(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function(e,t,n){if(// FieldPath.
(t=eX(t))instanceof cv)return t._internalPath;if("string"==typeof t)return cx(e,t);throw cR("Field path arguments must be of type string or ",e,/* hasConverter= */!1,/* path= */void 0,n)}(t,r,n);if(!l.contains(i))throw new sA(sR.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}a=new an(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new cE(new aN(u),a,o)})(function(e){let t=e._freezeSettings(),n=lG(e._databaseId);return new cT(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,o_.exists(!1))]).then(()=>s)}(s,{title:t,postText:r,author:{name:fb.currentUser.displayName,id:fb.currentUser.uid}}),a("/")};return(0,g.useEffect)(()=>{e||a("/login")},[]),/*#__PURE__*/(0,p.jsx)("div",{className:"createPostPage",children:/*#__PURE__*/(0,p.jsxs)("div",{className:"cpContainer",children:[/*#__PURE__*/(0,p.jsx)("h1",{children:"Create A Post"}),/*#__PURE__*/(0,p.jsxs)("div",{className:"inputGp",children:[/*#__PURE__*/(0,p.jsx)("label",{children:" Title:"}),/*#__PURE__*/(0,p.jsx)("input",{placeholder:"Title...",onChange:e=>{n(e.target.value)}})]}),/*#__PURE__*/(0,p.jsxs)("div",{className:"inputGp",children:[/*#__PURE__*/(0,p.jsx)("label",{children:" Post:"}),/*#__PURE__*/(0,p.jsx)("textarea",{placeholder:"Post...",onChange:e=>{i(e.target.value)}})]}),/*#__PURE__*/(0,p.jsx)("button",{onClick:o,children:" Submit Post"})]})})};f("acw62");var fk=function({setIsAuth:e}){let t=q(),n=localStorage.getItem("cachedRequestId"),r=()=>{n&&localStorage.removeItem("cachedRequestId")},i=()=>{let i=Math.floor(1e16*Math.random());dH(fb,f_).then(s=>{localStorage.setItem("isAuth",!0),e(!0),t("/"),i!==n&&r()})};return/*#__PURE__*/(0,p.jsxs)("div",{className:"LoginPage",children:[/*#__PURE__*/(0,p.jsx)("p",{children:"Sign in with Google to continue"}),/*#__PURE__*/(0,p.jsx)("button",{className:"login-with-google-btn",onClick:()=>{i()},children:"Sign in with Google"})]})},g=f("acw62");const fT=tq(document.querySelector("#root"));fT.render(/*#__PURE__*/(0,p.jsx)(function(){let[e,t]=(0,g.useState)(localStorage.getItem("isAuth"));return/*#__PURE__*/(0,p.jsx)(p.Fragment,{children:/*#__PURE__*/(0,p.jsxs)(eo,{children:[/*#__PURE__*/(0,p.jsxs)("nav",{children:[/*#__PURE__*/(0,p.jsx)(ec,{to:"/",children:"Home"}),e?/*#__PURE__*/(0,p.jsxs)(p.Fragment,{children:[/*#__PURE__*/(0,p.jsx)(ec,{to:"/createpost",children:"Create post"}),/*#__PURE__*/(0,p.jsx)("button",{onClick:()=>{eX(fb).signOut().then(()=>{localStorage.clear(),t(!1),window.location.pathname="/login"})},children:"Log out"})]}):/*#__PURE__*/(0,p.jsx)(ec,{to:"/login",children:"Login"})]}),/*#__PURE__*/(0,p.jsxs)(en,{children:[/*#__PURE__*/(0,p.jsx)(ee,{path:"/",element:/*#__PURE__*/(0,p.jsx)(fE,{isAuth:e})}),/*#__PURE__*/(0,p.jsx)(ee,{path:"/createpost",element:/*#__PURE__*/(0,p.jsx)(fS,{isAuth:e})}),/*#__PURE__*/(0,p.jsx)(ee,{path:"/login",element:/*#__PURE__*/(0,p.jsx)(fk,{setIsAuth:t})})]})]})})},{}));//# sourceMappingURL=index.5d1e9723.js.map

//# sourceMappingURL=index.5d1e9723.js.map
