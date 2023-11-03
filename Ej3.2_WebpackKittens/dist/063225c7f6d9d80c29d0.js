window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e)if(h[e[r]]!==n)return"pfx"!=t||e[r];return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return!1===r?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+C.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):c(i=(e+" "+E.join(r+" ")+r).split(" "),t,n)}var l,u,d={},f=t.documentElement,p="modernizr",m=t.createElement(p),h=m.style,g=t.createElement("input"),v=":)",y={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",C=x.split(" "),E=x.toLowerCase().split(" "),S="http://www.w3.org/2000/svg",w={},k={},T={},j=[],N=j.slice,M=function(e,n,r,o){var i,a,c,s=t.createElement("div"),l=t.body,u=l||t.createElement("body");if(parseInt(r,10))for(;r--;)(c=t.createElement("div")).id=o?o[r]:p+(r+1),s.appendChild(c);return i=["&#173;","<style>",e,"</style>"].join(""),s.id=p,u.innerHTML+=i,u.appendChild(s),l||f.appendChild(u),a=n(s,e),l?s.parentNode.removeChild(s):u.parentNode.removeChild(u),!!a},P=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,i){i=i||t.createElement(e[r]||"div");var a=(r="on"+r)in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(r,""),a=o(i[r],"function"),o(i[r],"undefined")||(i[r]=n),i.removeAttribute(r))),i=null,a}}(),A={}.hasOwnProperty;for(var L in u=o(A,"undefined")||o(A.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=N.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(N.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(N.call(arguments)))};return r}),function(n,r){var o=n.join(""),i=r.length;M(o,(function(n,r){for(var o=t.styleSheets[t.styleSheets.length-1],a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",c=n.childNodes,s={};i--;)s[c[i].id]=c[i];d.touch="ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch||9===(s.touch&&s.touch.offsetTop),d.csstransforms3d=9===(s.csstransforms3d&&s.csstransforms3d.offsetLeft)&&3===s.csstransforms3d.offsetHeight,d.generatedcontent=(s.generatedcontent&&s.generatedcontent.offsetHeight)>=1,d.fontface=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),i,r)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",b.join("touch-enabled),("),p,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",b.join("transform-3d),("),p,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',v,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]),w.flexbox=function(){return s("flexOrder")},w.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},w.canvastext=function(){return!!d.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},w.webgl=function(){try{var r,o=t.createElement("canvas");r=!(!e.WebGLRenderingContext||!o.getContext("experimental-webgl")&&!o.getContext("webgl")),o=n}catch(e){r=!1}return r},w.touch=function(){return d.touch},w.geolocation=function(){return!!navigator.geolocation},w.postmessage=function(){return!!e.postMessage},w.websqldatabase=function(){return!!e.openDatabase},w.indexedDB=function(){return!!s("indexedDB",e)},w.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},w.history=function(){return!!e.history&&!!history.pushState},w.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},w.websockets=function(){for(var t=-1,n=C.length;++t<n;)if(e[C[t]+"WebSocket"])return!0;return"WebSocket"in e},w.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(h.backgroundColor,"rgba")},w.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(h.backgroundColor,"rgba")||i(h.backgroundColor,"hsla")},w.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(h.background)},w.backgroundsize=function(){return s("backgroundSize")},w.borderimage=function(){return s("borderImage")},w.borderradius=function(){return s("borderRadius")},w.boxshadow=function(){return s("boxShadow")},w.textshadow=function(){return""===t.createElement("div").style.textShadow},w.opacity=function(){return r(b.join("opacity:.55;")+""),/^0.55$/.test(h.opacity)},w.cssanimations=function(){return s("animationName")},w.csscolumns=function(){return s("columnCount")},w.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+b.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-17)),i(h.backgroundImage,"gradient")},w.cssreflections=function(){return s("boxReflect")},w.csstransforms=function(){return!!s("transform")},w.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in f.style&&(e=d.csstransforms3d),e},w.csstransitions=function(){return s("transition")},w.fontface=function(){return d.fontface},w.generatedcontent=function(){return d.generatedcontent},w.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},w.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},w.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(e){return!1}},w.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(e){return!1}},w.webworkers=function(){return!!e.Worker},w.applicationcache=function(){return!!e.applicationCache},w.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S,"svg").createSVGRect},w.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S},w.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(y.call(t.createElementNS(S,"animate")))},w.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(y.call(t.createElementNS(S,"clipPath")))},w)u(w,L)&&(l=L.toLowerCase(),d[l]=w[L](),j.push((d[l]?"":"no-")+l));return d.input||(d.input=function(n){for(var r=0,o=n.length;r<o;r++)T[n[r]]=n[r]in g;return T.list&&(T.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)g.setAttribute("type",o=e[a]),(r="text"!==g.type)&&(g.value=v,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&g.style.WebkitAppearance!==n?(f.appendChild(g),r=(i=t.defaultView).getComputedStyle&&"textfield"!==i.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,f.removeChild(g)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?r=g.checkValidity&&!1===g.checkValidity():/^color$/.test(o)?(f.appendChild(g),f.offsetWidth,r=g.value!=v,f.removeChild(g)):r=g.value!=v)),k[e[a]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),m=g=null,function(e,t){function n(e){for(var t,r={},o=e.createElement,i=e.createDocumentFragment,a=function(){var e=s.elements;return"string"==typeof e?e.split(" "):e}(),l=i(),u=a.length;u--;)t=a[u],r[t]=o(t),l.createElement(t);e.createElement=function(e){var t=(r[e]||(r[e]=o(e))).cloneNode(!1);return s.shivMethods&&!c.test(e)?l.appendChild(t):t},e.createDocumentFragment=function(){var e=l.cloneNode(!1);return s.shivMethods?(n(e),e):e}}function r(e){var t;return e.documentShived||(s.shivCSS&&!o&&(t=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}</style>",r.insertBefore(n.lastChild,r.firstChild)}(e)),s.shivMethods&&!i&&(t=!n(e)),t&&(e.documentShived=t)),e}var o,i,a=e.html5||{},c=/^<|^(?:button|iframe|input|script|textarea)$/i;!function(){var n,r=t.createElement("a"),a=e.getComputedStyle,c=t.documentElement,s=t.body||(n=c.insertBefore(t.createElement("body"),c.firstChild));s.insertBefore(r,s.firstChild),r.hidden=!0,r.innerHTML="<xyz></xyz>",o="none"==(r.currentStyle||a(r,null)).display,i=1==r.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}(),s.removeChild(r),n&&c.removeChild(n)}();var s={elements:a.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),shivCSS:!1!==a.shivCSS,shivMethods:!1!==a.shivMethods,type:"default",shivDocument:r};e.html5=s,r(t)}(this,t),d._version="2.5.2",d._prefixes=b,d._domPrefixes=E,d._cssomPrefixes=C,d.mq=function(t){var n,r=e.matchMedia||e.msMatchMedia;return r?r(t).matches:(M("@media "+t+" { #"+p+" { position: absolute; } }",(function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position})),n)},d.hasEvent=P,d.testProp=function(e){return a([e])},d.testAllProps=s,d.testStyles=M,d.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+j.join(" "),d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m((function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)}),0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t))for(var r in"img"!=e&&m((function(){C.removeChild(d)}),50),T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}l=l||f.errorTimeout;var d={},p=0,g=0,b={t:r,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[],d=t.createElement(e)),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===T[n]?(C.insertBefore(d,x?null:h),m(u,l)):T[n].push(d))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?S:E,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,C=x?p:h.parentNode,E=(p=!!t.attachEvent,b?"object":p?"script":"img"),S=p?"script":E,w=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],T={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e,t,n,o,i){var a=function(e){e=e.split("!");var t,n,r,o=k.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)r=e[n].split("="),(t=j[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=k[n](i);return i}(e),s=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(t&&(t=r(t)?t:t[e]||t[o]||t[e.split("/").pop().split("?")[0]]||c),a.instead?a.instead(e,t,n,o,i):(T[a.url]?a.noexec=!0:T[a.url]=1,n.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":void 0,a.noexec,a.attrs,a.timeout),(r(t)||r(s))&&n.load((function(){u(),t&&t(a.origUrl,i,o),s&&s(a.origUrl,i,o),T[a.url]=2}))))}function n(e,n){function a(e,i){if(e){if(o(e))i||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),t(e,d,n,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!i&&! --c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),t(e[s],d,n,s,l))}else!i&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;a(l?e.yep:e.nope,!!u),u&&a(u)}var a,s,l=this.yepnope.loader;if(o(e))t(e,0,l,0);else if(w(e))for(a=0;a<e.length;a++)o(s=e[a])?t(s,0,l,0):w(s)?f(s):Object(s)===s&&n(s,l);else Object(e)===e&&n(e,l)},f.addPrefix=function(e,t){j[e]=t},f.addFilter=function(e){k.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script");for(d in o=o||f.errorTimeout,p.src=e,r)p.setAttribute(d,r[d]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m((function(){u||(u=1,n(1))}),o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l;for(l in n=s?c:n||i,(o=t.createElement("link")).href=e,o.rel="stylesheet",o.type="text/css",r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};