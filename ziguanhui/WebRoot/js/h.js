(function(){var h={},mt={},c={id:"31ff32c010fa80d3b0c59db611091740",dm:["zklx.net"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:1331884,qiao:1331884,lxb:0,conv:0,comm:0,apps:''};var p=!0,q=null,r=!1;mt.l={};mt.l.Ia=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.l.cookieEnabled=navigator.cookieEnabled;mt.l.javaEnabled=navigator.javaEnabled();mt.l.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.l.ta=(window.screen.width||0)+"x"+(window.screen.height||0);mt.l.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.G&&(b=new Date,b.setTime(b.getTime()+e.G));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.Ma?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.q={};mt.q.ea=function(a){return document.getElementById(a)};mt.q.Fa=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return q};
(mt.q.T=function(){function a(){if(!a.z){a.z=p;for(var d=0,e=b.length;d<e;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=r,b=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,r);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=p,"complete"===document.readyState)a.z=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var b=r;try{b=window.frameElement==q}catch(n){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.z?d():b.push(d)}}()).z=r;mt.event={};mt.event.c=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.k={};mt.k.parse=function(){return(new Function('return (" + source + ")'))()};
mt.k.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===q)return"null";if(b instanceof Array){var e=["["],m=b.length,n,f,k;for(f=0;f<m;f++)switch(k=b[f],typeof k){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.k.stringify(k)),n=1}e.push("]");return e.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';n=["{"];f=mt.k.stringify;for(m in b)if(Object.prototype.hasOwnProperty.call(b,m))switch(k=
b[m],typeof k){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(m)+":"+f(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.e=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Ja=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.La=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.D=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.D()&&(mt.localStorage.f.expires=b.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,d),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.D())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(b){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.D())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.U={};mt.U.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=q;e=window[b]=q;d&&d(a)};e.src=a};mt.C={};
mt.C.ka=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.C.$=function(a,d,e,b,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="'+d+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.j=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:q};mt.url.Ha=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.ga=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.O=function(a){return(a=mt.url.ga(a))?a.replace(/:\d+$/,""):a};mt.url.Ga=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.g={qa:"http://tongji.baidu.com/hm-web/welcome/ico",S:"hm.baidu.com/hm.gif",X:"baidu.com",na:"hmmd",oa:"hmpl",ma:"hmkw",la:"hmci",pa:"hmsr",p:0,i:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ka:0,Ba:6E5,Ca:10,Da:1024,Aa:1,A:2147483647,V:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={m:{},c:function(a,e){this.m[a]=this.m[a]||[];this.m[a].push(e)},s:function(a,e){this.m[a]=this.m[a]||[];for(var b=this.m[a].length,g=0;g<b;g++)this.m[a][g](e)}};return h.o=a})();
(function(){function a(a,b){var g=document.createElement("script");g.charset="utf-8";d.e(b,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=q,b()}:g.onload=function(){b()});g.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(g,m)}var d=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,a):d.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?e.get("Hm_from_"+c.id):d.get("Hm_from_"+c.id))||"";return a}var d=mt.localStorage,e=mt.sessionStorage;return h.M=a})();
(function(){var a=h.g,d=mt.C,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var e=a.qa+"?s="+c.id,m=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.$("HolmesIcon"+a.i,m,b[2],b[3],"s="+e);break;case "gif":b='<a href="'+e+'" target="_blank"><img border="0" src="'+m+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="'+e+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.o.c("pv-b",e.init);return e})();
(function(){var a=mt.q,d=h.g,e=h.load,b=h.M;h.o.c("pv-b",function(){c.rec&&a.T(function(){for(var g=0,m=c.rp.length;g<m;g++){var n=c.rp[g][0],f=c.rp[g][1],k=a.ea("hm_t_"+n);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*d.A),k=4==f?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+n,"from="+b(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),e(k)}})})})();(function(){var a=h.g,d=h.load,e=h.M;h.o.c("pv-b",function(){if(c.trust&&c.vcard){var b=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*a.A)].join("&");d(b)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.F.ha()+","+h.F.fa();h.b.h()}}function d(){clearTimeout(A);var a;y&&(a="visible"==document[y]);B&&(a=!document[B]);f="undefined"==typeof a?p:a;if((!n||!k)&&f&&l)u=p,t=+new Date;else if(n&&k&&(!f||!l))u=r,s+=+new Date-t;n=f;k=l;A=setTimeout(d,100)}function e(a){var k=document,t="";if(a in k)t=a;else for(var s=["webkit","ms","moz","o"],b=0;b<s.length;b++){var d=s[b]+a.charAt(0).toUpperCase()+a.slice(1);if(d in k){t=
d;break}}return t}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))l="focus"==a.type||"focusin"==a.type?p:r,d()}var g=mt.event,m=h.o,n=p,f=p,k=p,l=p,v=+new Date,t=v,s=0,u=p,y=e("visibilityState"),B=e("hidden"),A;d();(function(){var a=y.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,d);g.c(window,"pageshow",d);g.c(window,"pagehide",d);"object"==typeof document.onfocusin?(g.c(document,"focusin",b),g.c(document,"focusout",b)):(g.c(window,"focus",b),
g.c(window,"blur",b))})();h.F={ha:function(){return+new Date-v},fa:function(){return u?+new Date-t+s:s}};m.c("pv-b",function(){g.c(window,"unload",a())});return h.F})();
(function(){var a=mt.lang,d=h.g,e=h.load,b={ra:function(b){if((void 0===window._dxt||a.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.H();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),b)}},za:function(b){if(a.e(b,"String")||a.e(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.aa=b})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.e(d,"Object")||e.e(d,"Array")?a(d):k[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.k,g=h.g,m=h.o,n=h.aa,f={P:q,r:[],B:0,Q:r,init:function(){f.d=0;f.P={push:function(){f.K.apply(f,arguments)}};m.c("pv-b",function(){f.ba();f.ca()});m.c("pv-d",f.da);m.c("stag-b",function(){h.b.a.api=f.d||f.B?f.d+"_"+f.B:""});m.c("stag-d",function(){h.b.a.api=
0;f.d=0;f.B=0})},ba:function(){var a=window._hmt;if(a&&a.length)for(var b=0;b<a.length;b++){var d=a[b];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(f.d|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))f.d|=2,window._bdhm_autoPageview=d}}},ca:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,d=a.length;b<d;b++)e.e(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?f.K(a[b]):f.r.push(a[b]);window._hmt=f.P}},da:function(){if(0<f.r.length)for(var a=0,b=f.r.length;a<b;a++)f.K(f.r[a]);f.r=q},K:function(a){if(e.e(a,"Array")){var b=a[0];if(f.hasOwnProperty(b)&&e.e(f[b],"Function"))f[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){f.d|=4;h.b.a.et=0;h.b.a.ep="";h.b.I?(h.b.a.nv=0,h.b.a.st=4):h.b.I=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+
a[1];f.Q||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.d|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){f.B++;for(var t=(h.b.a.cv||"*").split("!"),s=t.length;s<b-1;s++)t.push("*");t[b-1]=e+"*"+d(a[2])+"*"+d(a[3]);h.b.a.cv=t.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.sa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],f.Q=p)},_trackOrder:function(d){d=d[1];e.e(d,"Object")&&(a(d),f.d|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.d|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(d){d=
d[1];e.e(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(f.d|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.e(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var l=function(a){var b=h.b.a.rt;f.d|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},m=d.length;if(900>=m)l.call(this,d);else for(var m=Math.ceil(m/900),t="block|"+Math.round(Math.random()*g.A).toString(16)+"|"+m+"|",s=[],u=0;u<m;u++)s.push(u),s.push(d.substring(900*u,900*u+900)),l.call(this,t+s.join("|")),
s=[]}},_setUserId:function(a){a=a[1];n.ra();n.za(a)}};f.init();h.Y=f;return h.Y})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.I=r,this.init())}var d=mt.url,e=mt.U,b=mt.C,g=mt.lang,m=mt.cookie,n=mt.l,f=mt.localStorage,k=mt.sessionStorage,l=h.g,v=h.o;a.prototype={J:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},R:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},w:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.R(a,c.dm[b]))return p}else{var e=d.O(a);if(e&&this.J(e,c.dm[b]))return p}return r},H:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.J(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},N:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.R(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},ia:function(){if(!document.referrer)return l.i-l.p>c.vdur?1:4;var a=
r;this.w(document.referrer)&&this.w(document.location.href)?a=p:(a=d.O(document.referrer),a=this.J(a||"",document.location.hostname));return a?l.i-l.p>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.H(),path:this.N(),G:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},sa:function(a){try{m.set(a,"",{domain:this.H(),path:this.N(),G:-1}),k.remove(a),f.remove(a)}catch(b){}},xa:function(){var a,b,d,e,f;l.p=this.getData("Hm_lpvt_"+
c.id)||0;13==l.p.length&&(l.p=Math.round(l.p/1E3));b=this.ia();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<l.i-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(l.i);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=l.i,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,l.i);d=l.i==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.w(document.location.href)&&
(""===document.referrer||this.w(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},wa:function(){for(var a=[],b=0,d=l.V.length;b<d;b++){var e=l.V[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},ya:function(){this.xa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.ta;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=b.ka();this.a.v="1.1.0";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=d.j(a,l.na)||"";this.a.cp=d.j(a,l.oa)||"";this.a.cw=d.j(a,l.ma)||"";this.a.ci=d.j(a,l.la)||"";this.a.cf=d.j(a,l.pa)||""},init:function(){try{this.ya(),0===this.a.nv?this.va():this.L(".*"),h.b=this,this.Z(),
v.s("pv-b"),this.ua()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(l.protocol+"//"+l.S+"?"+b.join("&"))}},ua:function(){function a(){v.s("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.I=p,this.a.et=0,this.a.ep="",this.h(a)):a()},h:function(a){var b=this;b.a.rnd=Math.round(Math.random()*l.A);v.s("stag-b");var d=l.protocol+"//"+
l.S+"?"+b.wa();v.s("stag-d");b.W(d);e.log(d,function(d){b.L(d);g.e(a,"Function")&&a.call(b)})},Z:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(l.X)?p:r,f=d.j(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&g)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",l.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},W:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},L:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},va:function(){var a=this,b=k.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){e.log(l.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.L(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();var w=h.g,x=h.load;if(c.apps){var z=[w.protocol,"//ers.baidu.com/app/s.js?"];z.push(c.apps);x(z.join(""))}var C=h.g,D=h.load;if(c.conv&&"http:"===C.protocol){var E=["http://page.baidu.com/conversion_js.php?sid="];E.push(c.conv);D(E.join(""))}var F=h.g,G=h.load;
c.lxb&&G([F.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var H=h.load,I=h.g.protocol;if(c.qiao){for(var J=[I+"//goutong.baidu.com/site/"],K=c.id,L=5381,M=K.length,N=0;N<M;N++)L=(33*L+Number(K.charCodeAt(N)))%4294967296;2147483648<L&&(L-=2147483648);J.push(L%1E3+"/");J.push(c.id+"/b.js");J.push("?siteId="+c.qiao);H(J.join(""))}
(function(){var a=mt.q,d=mt.event,e=mt.url,b=mt.k;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.T(function(){n=+new Date});var f=function(){var a,d,f;f=m("navigation");d=m("request");f={netAll:d.start-f.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-f.start};a=document.referrer;var s=q;d=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])s=e.j(a,"qid"),d=e.j(a,"click_t");a=s;f.qid=a!=q?a:"";d!=q?(f.bdDom=n?n-d:0,f.bdRun=g-d,f.bdDef=m("navigation").start-d):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(f);h.b.h()};d.c(window,"load",function(){setTimeout(f,500)})}}catch(k){}})();
(function(){var a=h.g,d={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ea="0";document.body.appendChild(b)}}catch(d){}}},e=navigator.userAgent.toLowerCase();-1<e.indexOf("android")&&-1===e.indexOf("micromessenger")&&d.init()})();
(function(){var a=mt.lang,d=mt.event,e=mt.k;if(c.comm&&"undefined"!==typeof h.b){var b=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},g=/.*\/swt(\/)?([\?|#].*)?$/i,m={click:function(){for(var a=[],d=b(document.getElementsByTagName("a")),d=[].concat.apply(d,b(document.getElementsByTagName("area"))),d=[].concat.apply(d,b(document.getElementsByTagName("img"))),e=/openZoosUrl\(|swt/,f=/\/LR\/Chatpre\.aspx/,k=0,m=d.length;k<m;k++){var l=d[k],n=l.getAttribute("onclick"),
l=l.getAttribute("href");(e.test(n)||f.test(l)||g.test(l))&&a.push(d[k])}return a}},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},f=function(b,d){var f={n:"swt",t:"clk"};f.v=b;if(d){var k=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):q;g.test(k)?(f.sn="mediate",f.snv=k):a.e(l,"String")&&(-1===l.indexOf("openZoosUrl")&&-1!==l.indexOf("swt"))&&(k=d.getAttribute("id")||"",f.sn="wrap",f.snv=l,f.id=k)}h.b.a.et=86;h.b.a.ep=e.stringify(f);
h.b.h();for(f=+new Date;500>=+new Date-f;);},k,l="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),v=function(b,d){if(k===d)return f(l+b,d),r;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(k===d[e])return f(l+b+"/"+(e+1),d[e]),r};d.c(document,"click",function(b){b=b||window.event;k=b.target||b.srcElement;var d={};for(n(m,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});k&&k!==document&&n(d,v)!==r;)k=k.parentNode})}})();
(function(){var a=mt.event,d=mt.k;if(c.comm&&"undefined"!==typeof h.b){var e=+new Date,b={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=d.stringify(b);h.b.h()};a.c(document,"click",function(){b.clk++});a.c(document,"keyup",function(){b.kb=1});a.c(window,"scroll",function(){b.sb++});a.c(window,"unload",function(){b.t=+new Date-e;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
