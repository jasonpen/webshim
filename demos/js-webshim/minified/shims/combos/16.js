(function(c){if(!Modernizr.genericDOM){var f=document,i,h,m=/<([\w:]+)/,n={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||n[(m.exec(c)||["",""])[1].toLowerCase()])return c;if(!h){i=f.body;if(!i)return c;h=f.createElement("div");h.style.display="none"}var q=h.cloneNode(!1);i.appendChild(q);q.innerHTML=c;i.removeChild(q);return q.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,f,i,h,m){var n=f.modules,l=/\s*,\s*/,q={},r={},p={},j={},s={},x=c.fn.val,v=function(a,b,d,g,o){return o?x.call(c(a)):x.call(c(a),d)};c.fn.val=function(a){var b=this[0];arguments.length&&null==a&&(a="");if(!arguments.length)return!b||1!==b.nodeType?x.call(this):c.prop(b,"value",a,"val",!0);if(c.isArray(a))return x.apply(this,arguments);var d=c.isFunction(a);return this.each(function(g){b=this;1===b.nodeType&&(d?(g=a.call(b,g,c.prop(b,"value",m,"val",
!0)),null==g&&(g=""),c.prop(b,"value",g,"val")):c.prop(b,"value",a,"val"))})};var t="_webshimsLib"+Math.round(1E3*Math.random()),u=function(a,b,d){a=a.jquery?a[0]:a;if(!a)return d||{};var g=c.data(a,t);d!==m&&(g||(g=c.data(a,t,{})),b&&(g[b]=d));return b?g&&g[b]:g};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){c.fn[a.name]=function(){return this.map(function(){var b=u(this,
"shadowData");return b&&b[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(a){q[a]=c[a];c[a]=function(b,d,g,o,e){var k="val"==o,f=!k?q[a]:v;if(!b||!r[d]||1!==b.nodeType||!k&&o&&"attr"==a&&c.attrFn[d])return f(b,d,g,o,e);var z=(b.nodeName||"").toLowerCase(),n=p[z],l="attr"==a&&(!1===g||null===g)?"removeAttr":a,h,j,w;n||(n=p["*"]);n&&(n=n[d]);n&&(h=n[l]);if(h){if("value"==d)j=h.isVal,h.isVal=k;if("removeAttr"===l)return h.value.call(b);if(g===m)return h.get?h.get.call(b):h.value;h.set&&
("attr"==a&&!0===g&&(g=d),w=h.set.call(b,g));if("value"==d)h.isVal=j}else w=f(b,d,g,o,e);if((g!==m||"removeAttr"===l)&&s[z]&&s[z][d]){var i;i="removeAttr"==l?!1:"prop"==l?!!g:!0;s[z][d].forEach(function(d){if(!d.only||(d.only="prop"==a)||"attr"==d.only&&"prop"!=a)d.call(b,g,i,k?"val":l,a)})}return w};j[a]=function(b,d,g){p[b]||(p[b]={});p[b][d]||(p[b][d]={});var o=p[b][d][a],e=function(b,c,o){return c&&c[b]?c[b]:o&&o[b]?o[b]:"prop"==a&&"value"==d?function(b){return g.isVal?v(this,d,b,!1,0===arguments.length):
q[a](this,d,b)}:"prop"==a&&"value"==b&&g.value.apply?function(b){var c=q[a](this,d);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(b){return q[a](this,d,b)}};p[b][d][a]=g;if(g.value===m){if(!g.set)g.set=g.writeable?e("set",g,o):f.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:c.noop;if(!g.get)g.get=e("get",g,o)}["value","get","set"].forEach(function(a){g[a]&&(g["_sup"+a]=e(a,o))})}});var y=!c.browser.msie||8<parseInt(c.browser.version,10),e=function(){var a=f.getPrototypeOf(h.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,c,o){var e=h.createElement(d),n=f.getPrototypeOf(e);if(y&&n&&a!==n&&(!e[c]||!b.call(e,c))){var l=e[c];o._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l};n[c]=o.value}else o._supvalue=function(){var a=u(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},k.extendValue(d,c,o.value);o.value._supvalue=o._supvalue}}(),k=function(){var a={};f.addReady(function(b,d){var g={},e=function(a){g[a]||(g[a]=c(b.getElementsByTagName(a)),
d[0]&&c.nodeName(d[0],a)&&(g[a]=g[a].add(d)))};c.each(a,function(a,b){e(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){g[a].each(b)})});g=null});var b,d=c([]),g=function(d,g){a[d]?a[d].push(g):a[d]=[g];c.isDOMReady&&(b||c(h.getElementsByTagName(d))).each(g)};return{createTmpCache:function(a){c.isDOMReady&&(b=b||c(h.getElementsByTagName(a)));return b||d},flushTmpCache:function(){b=null},content:function(a,b){g(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){g(a,b)},extendValue:function(a,b,d){g(a,function(){c(this).each(function(){u(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),w=function(a,b){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};c.extend(f,{getID:function(){var a=(new Date).getTime();return function(b){var b=c(b),d=b.attr("id");d||(a++,d="ID-"+a,b.attr("id",d));return d}}(),extendUNDEFProp:function(a,
b){c.each(b,function(b,c){b in a||(a[b]=c)})},createPropDefault:w,data:u,moveToFirstEvent:function(){var a=c._data?"_data":"data";return function(b,d,g){if((b=(c[a](b,"events")||{})[d])&&1<b.length)d=b.pop(),g||(g="bind"),"bind"==g&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(a,b,d){d=d||{};a.jquery&&(a=a[0]);b.jquery&&(b=b[0]);if(!d.shadowFocusElement)d.shadowFocusElement=b;var g=c.data(a,t)||c.data(a,t,{}),e=c.data(b,t)||c.data(b,t,{});g.hasShadow=b;e.nativeElement=
a;e.shadowData=g.shadowData={nativeElement:a,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){u(this,"shadowData",e.shadowData)});if(d.data)g.shadowData.data=d.data,e.shadowData.data=d.data;d=null},propTypes:{standard:function(a){w(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){w(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,b){"string"==typeof b&&(b=b.split(l));b.forEach(function(b){f.defineNodeNamesProperty(a,b,{prop:{set:function(a){c.attr(this,b,a)},get:function(){return c.attr(this,b)||""}}})})},defineNodeNameProperty:function(a,b,d){r[b]=!0;if(d.reflect)f.propTypes[d.propType||"standard"](d);["prop","attr","removeAttr"].forEach(function(g){var o=d[g];o&&(o="prop"===g?c.extend({writeable:!0},o):c.extend({},
o,{writeable:!0}),j[g](a,b,o),"*"!=a&&f.cfg.extendNative&&"prop"==g&&o.value&&c.isFunction(o.value)&&e(a,b,o),d[g]=o)});d.initAttr&&k.content(a,b);return d},defineNodeNameProperties:function(a,b,d,c){for(var e in b)!c&&b[e].initAttr&&k.createTmpCache(a),d&&(b[e][d]?f.log("override: "+a+"["+e+"] for "+d):(b[e][d]={},["value","set","get"].forEach(function(a){a in b[e]&&(b[e][d][a]=b[e][a],delete b[e][a])}))),b[e]=f.defineNodeNameProperty(a,e,b[e]);c||k.flushTmpCache();return b},createElement:function(a,
b,d){var g;c.isFunction(b)&&(b={after:b});k.createTmpCache(a);b.before&&k.createElement(a,b.before);d&&(g=f.defineNodeNameProperties(a,d,!1,!0));b.after&&k.createElement(a,b.after);k.flushTmpCache();return g},onNodeNamesPropertyModify:function(a,b,d,g){"string"==typeof a&&(a=a.split(l));c.isFunction(d)&&(d={set:d});a.forEach(function(a){s[a]||(s[a]={});"string"==typeof b&&(b=b.split(l));d.initAttr&&k.createTmpCache(a);b.forEach(function(b){s[a][b]||(s[a][b]=[],r[b]=!0);if(d.set){if(g)d.set.only=g;
s[a][b].push(d.set)}d.initAttr&&k.content(a,b)});k.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,b,d){d||(d={});if(c.isFunction(d))d.set=d;f.defineNodeNamesProperty(a,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?m:b}},removeAttr:{value:function(){this.removeAttribute(b);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===
m)return d=(a.attributes[b]||{}).value,null==d?m:d;"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var a=[],b={},d,g,e=/:\/\/|^\.*\//,k=function(a,b,d){return b&&d&&-1!==c.inArray(b,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,e.test(d)||(d=f.cfg.basePath+d),f.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,h(a,!0)):c(function(){a.langObj[b]&&h(a,!0);a.loading=!1})}),!0):!1},l=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
h=function(a,b){if(a.activeLang!=d&&a.activeLang!==g){var c=n[a.module].options;if(a.langObj[d]||g&&a.langObj[g])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[g],d),l(a.module);else if(!b&&!k(a,d,c)&&!k(a,g,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),l(a.module)}};return function(e){if("string"==typeof e&&e!==d)d=e,g=d.split("-")[0],d==g&&(g=!1),c.each(a,function(a,b){h(b)});else if("object"==typeof e)if(e.register)b[e.register]||(b[e.register]=[]),b[e.register].push(e),
e.callback();else{if(!e.activeLang)e.activeLang="";a.push(e);h(e)}return d}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){f[a]=function(a,c,e,k){"string"==typeof a&&(a=a.split(l));var n={};a.forEach(function(a){n[a]=f[b](a,c,e,k)});return n}});f.isReady("webshimLocalization",!0)});
(function(c,f){var i=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<i)&&(!c.browser.msie||12>i&&7<i)){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(c,f){c.getAttribute("role")||c.setAttribute("role",f)};c.webshims.addReady(function(n,l){c.each(h,function(f,h){for(var i=c(f,n).add(l.filter(f)),p=0,t=i.length;p<t;p++)m(i[p],h)});if(n===f){var i=f.getElementsByTagName("header")[0],r=f.getElementsByTagName("footer"),p=r.length;
i&&!c(i).closest("section, article")[0]&&m(i,"banner");p&&(i=r[p-1],c(i).closest("section, article")[0]||m(i,"contentinfo"))}})}})(jQuery,document);
(function(c,f,i){var h=f.audio&&f.video,m=!1;if(h)c=document.createElement("video"),f.videoBuffered="buffered"in c,m="loop"in c,i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),f.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,f,i,r,p){var j=f.mediaelement,s=f.cfg.mediaelement,
x=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var g=a.attr("type");if(g)d.type=g,d.container=c.trim(g.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),g=j.getTypeForSrc(d.src,b))d.type=g,d.container=g;if(g=a.attr("media"))d.media=g;return d},v=swfobject.hasFlashPlayerVersion("9.0.115"),t=function(){f.ready("mediaelement-swf",function(){if(!j.createSWF)f.modules["mediaelement-swf"].test=
c.noop,f.reTest(["mediaelement-swf"],h)})};j.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf",
"asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};j.mimeTypes.source=c.extend({},j.mimeTypes.audio,j.mimeTypes.video);j.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(j.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};j.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),
c.isArray(b)||(b=[b]),b.forEach(function(b){var c=r.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var b=[],d=a[0].nodeName.toLowerCase(),g=x(a,d);g.src?b.push(g):c("source",a).each(function(){g=x(this,d);g.src&&b.push(g)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==p&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));j.srces(this,
a);c(this).mediaLoad()})};j.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");j.canSwfPlaySrces=function(a,b){var d="";v&&(a=c(a),b=b||j.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&-1!=j.swfMimeTypes.indexOf(b.container))return d=b,!1}));return d};var u={};j.canNativePlaySrces=function(a,
b){var d="";if(h){var a=c(a),g=(a[0].nodeName||"").toLowerCase();if(!u[g])return d;b=b||j.srces(a);c.each(b,function(b,c){if(c.type&&u[g].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};j.setError=function(a,b){b||(b="can't play sources");c(a).pause().data("mediaerror",b);f.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var y=function(){var a;return function(b,c,g){f.ready("mediaelement-swf",function(){j.createSWF?j.createSWF(b,
c,g):a||(a=!0,t(),y(b,c,g))})}}(),e=function(a,b,c,g,f){c||!1!==c&&b&&"flash"==b.isActive?(c=j.canSwfPlaySrces(a,g))?y(a,c,b):f?j.setError(a,!1):e(a,b,!1,g,!0):(c=j.canNativePlaySrces(a,g))?b&&"flash"==b.isActive&&j.setActive(a,"html5",b):f?(j.setError(a,!1),b&&"flash"==b.isActive&&j.setActive(a,"html5",b)):e(a,b,!0,g,!0)},k=/^(?:embed|object|datalist)$/i,w=function(a,b){var d=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{}),g=j.srces(a),h=a.parentNode;clearTimeout(d.loadTimer);c.data(a,
"mediaerror",!1);if(g.length&&h&&!(1!=h.nodeType||k.test(h.nodeName||"")))b=b||f.data(a,"mediaelement"),e(a,b,s.preferFlash||p,g)};c(r).bind("ended",function(a){var b=f.data(a.target,"mediaelement");(!m||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});m||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=f.defineNodeNameProperty(a,
"load",{prop:{value:function(){var a=f.data(this,"mediaelement");w(this,a);h&&(!a||"html5"==a.isActive)&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});u[a]=f.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var g="";h&&u[a].prop._supvalue&&(g=u[a].prop._supvalue.call(this,b),"no"==g&&(g=""));!g&&v&&(b=c.trim((b||"").split(";")[0]),-1!=j.swfMimeTypes.indexOf(b)&&(g="maybe"));return g}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=
this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){w(a);a=null},9)}});i=function(){f.addReady(function(a,b){c("video, audio",a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<f.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():w(this);if(h){var a,b,e=this,k=function(){var a=c.prop(e,
"buffered");if(a){for(var b="",d=0,g=a.length;d<g;d++)b+=a.end(d);return b}},i=function(){var a=k();a!=b&&(b=a,c(e).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=k());clearTimeout(a);a=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};h?(f.isReady("mediaelement-core",!0),i(),v&&f.ready("WINDOWLOAD mediaelement",t)):f.ready("mediaelement-swf",i)})})(jQuery,Modernizr,
jQuery.webshims);
(function(c){var f=window.Modernizr,i=c.webshims,h=i.bugs,m=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),n=function(){if(m[0].querySelector)try{h.findRequired=!m[0].querySelector("select:required")}catch(c){h.findRequired=!1}};h.findRequired=!1;h.validationMessage=!1;h.valueAsNumberSet=!1;i.capturingEventPrevented=function(f){if(!f._isPolyfilled){var h=f.isDefaultPrevented,i=
f.preventDefault;f.preventDefault=function(){clearTimeout(c.data(f.target,f.type+"DefaultPrevented"));c.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){c.removeData(f.target,f.type+"DefaultPrevented")},30));return i.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!c.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!f.formvalidation||h.bustedValidity)n();else if(i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0),f.bugfreeformvalidation=
!0,window.opera||c.browser.webkit||window.testGoodWithFix){var l=c("input",m).eq(0),q,r=function(c){i.loader.loadList(["dom-extend"]);i.ready("dom-extend",c)},p=function(h){var j=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){m&&(m.remove(),m=l=null)},9);if(!f.bugfreeformvalidation)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=c.noop;i.isReady("form-number-date-api")&&
j.push("form-number-date-api");i.reTest(j);if(l)try{l.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&r(function(){i.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(f){!f&&this&&c.prop(this,"value",c.prop(this,"value"))}});i.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(f){if(!f&&this)f=c(this).val(),(c("option:last-child",this)[0]||{}).selected=!0,c(this).val(f)}})})}catch(n){}(c.browser.opera||window.testGoodWithFix)&&
r(function(){var h=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(f){var j=i.defineNodeNameProperty(f,"checkValidity",{prop:{value:function(){i.fromSubmit||c(this).bind("invalid.checkvalidity",h);i.fromCheckValidity=!0;var e=j.prop._supvalue.apply(this,arguments);i.fromSubmit||c(this).unbind("invalid.checkvalidity",h);i.fromCheckValidity=!1;return e}}})});f.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var f=this.options||[];if(!f.length){var h=c("select",this);if(h[0]&&h[0].options&&h[0].options.length)f=h[0].options}return f}}})})};m.appendTo("head");if(window.opera||window.testGoodWithFix){n();h.validationMessage=!l.prop("validationMessage");if((f.inputtypes||{}).date){try{l.prop("valueAsNumber",0)}catch(j){}h.valueAsNumberSet="1970-01-01"!=l.prop("value")}l.prop("value","")}m.bind("submit",function(c){f.bugfreeformvalidation=
!1;p(c)});q=setTimeout(function(){m&&m.triggerHandler("submit")},9);c("input, select",m).bind("invalid",p).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(c,f,i,h,m,n){var l={radio:1},q={checkbox:1,radio:1},r=c([]),p=f.bugs,j=function(e){var e=c(e),f,i;f=r;if(l[e[0].type])i=e.prop("form"),f=(f=e[0].name)?i?c(i[f]):c(h.getElementsByName(f)).filter(function(){return!c.prop(this,"form")}):e,f=f.filter('[type="radio"]');return f},s=f.getContentValidationMessage=function(e,h,i){var a=c(e).data("errormessage")||e.getAttribute("x-moz-errormessage")||"";i&&a[i]&&(a=a[i]);"object"==typeof a&&(h=h||c.prop(e,"validity")||
{valid:1},h.valid||c.each(h,function(b,c){if(c&&"valid"!=b&&a[b])return a=a[b],!1}));f.data(e,"contentErrorMessage",a);if("object"==typeof a)a=a.defaultMessage;return a||""},x={number:1,range:1,date:1};c.extend(c.expr.filters,{"valid-element":function(e){return!(!c.prop(e,"willValidate")||!(c.prop(e,"validity")||{valid:1}).valid)},"invalid-element":function(e){return!(!c.prop(e,"willValidate")||(c.prop(e,"validity")||{valid:1}).valid)},"required-element":function(e){return!(!c.prop(e,"willValidate")||
!c.prop(e,"required"))},"optional-element":function(e){return!!(c.prop(e,"willValidate")&&!1===c.prop(e,"required"))},"in-range":function(e){if(!x[c.prop(e,"type")]||!c.prop(e,"willValidate"))return!1;e=c.prop(e,"validity");return!(!e||e.rangeOverflow||e.rangeUnderflow)},"out-of-range":function(e){if(!x[c.prop(e,"type")]||!c.prop(e,"willValidate"))return!1;e=c.prop(e,"validity");return!(!e||!e.rangeOverflow&&!e.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(e){c.expr.filters[e]=
c.expr.filters[e+"-element"]});var v=c.event.customEvent||{};(p.bustedValidity||p.findRequired)&&function(){var e=c.find,f=c.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,a=function(a){return a+"-element"};c.find=function(){var b=Array.prototype.slice,c=function(c){var d=arguments,d=b.call(d,1,d.length);d.unshift(c.replace(i,a));return e.apply(this,d)},g;for(g in e)e.hasOwnProperty(g)&&(c[g]=e[g]);return c}();if(!Modernizr.prefixed||
Modernizr.prefixed("matchesSelector",h.documentElement))c.find.matchesSelector=function(b,c){c=c.replace(i,a);return f.call(this,b,c)}}();var t=c.prop,u={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(e,f,h){var a=t.apply(this,arguments);if(e&&"form"in e&&u[f]&&h!==m&&c(e).hasClass("form-ui-invalid")&&(c.prop(e,"validity")||{valid:1}).valid)c(e).getShadowElement().removeClass("form-ui-invalid"),"checked"==f&&h&&j(e).not(e).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return a};var y=function(e,f){var h;c.each(e,function(a,b){if(b)return h="customError"==a?c.prop(f,"validationMessage"):a,!1});return h};c(h).bind(n.validityUIEvents||"focusout change refreshvalidityui",function(e){if(e.target&&"submit"!=e.target.type&&c.prop(e.target,"willValidate")){var f=c.data(e.target,"webshimsswitchvalidityclass"),h=function(){var a=c(e.target).getNativeElement().trigger("refreshCustomValidityRules")[0],b=c.prop(a,"validity"),d=c(a).getShadowElement(),g,f,h,i;b.valid?d.hasClass("form-ui-valid")||
(g="form-ui-valid",f="form-ui-invalid",i="changedvaliditystate",h="changedvalid",q[a.type]&&a.checked&&j(a).not(a).removeClass(f).addClass(g).removeAttr("aria-invalid"),c.removeData(a,"webshimsinvalidcause")):(b=y(b,a),c.data(a,"webshimsinvalidcause")!=b&&(c.data(a,"webshimsinvalidcause",b),i="changedvaliditystate"),d.hasClass("form-ui-invalid")||(g="form-ui-invalid",f="form-ui-valid",q[a.type]&&!a.checked&&j(a).not(a).removeClass(f).addClass(g),h="changedinvalid"));g&&(d.addClass(g).removeClass(f),
setTimeout(function(){c(a).trigger(h)},0));i&&setTimeout(function(){c(a).trigger(i)},0);c.removeData(e.target,"webshimsswitchvalidityclass")};f&&clearTimeout(f);"refreshvalidityui"==e.type?h():c.data(e.target,"webshimsswitchvalidityclass",setTimeout(h,9))}});v.changedvaliditystate=!0;v.refreshCustomValidityRules=!0;v.changedvalid=!0;v.changedinvalid=!0;v.refreshvalidityui=!0;f.triggerInlineForm=function(e,f){c(e).trigger(f)};f.modules["form-core"].getGroupElements=j;p=function(){f.scrollRoot=c.browser.webkit||
"BackCompat"==h.compatMode?c(h.body):c(h.documentElement)};p();f.ready("DOM",p);f.getRelOffset=function(e,f){var e=c(e),h=c(f).offset(),a;c.swap(c(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){a=e.offset()});h.top-=a.top;h.left-=a.left;return h};f.validityAlert=function(){var e=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",k,j=!1,a=!1,b,d={hideDelay:5E3,showFor:function(e,f,h,m){d._create();var e=c(e),l=c(e).getShadowElement(),n=d.getOffsetFromBody(l);
d.clear();m?this.hide():(this.getMessage(e,f),this.position(l,n),k.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(b,this.hideDelay)),c(i).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(a);a=setTimeout(function(){d.position(l)},9)}));h||this.setFocus(l,n)},getOffsetFromBody:function(a){return f.getRelOffset(k,a)},setFocus:function(a,d){var i=c(a).getShadowFocusElement(),j=f.scrollRoot.scrollTop(),
l=(d||i.offset()).top-30,m;f.getID&&"label"==e&&k.attr("for",f.getID(i));j>l&&(f.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-l)),80)}),m=!0);try{i[0].focus()}catch(n){}m&&(f.scrollRoot.scrollTop(j),setTimeout(function(){f.scrollRoot.scrollTop(j)},0));setTimeout(function(){c(h).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){c("span.va-box",k).text(b||s(a[0])||a.prop("validationMessage"))},position:function(a,b){b=b?c.extend({},b):d.getOffsetFromBody(a);
b.top+=a.outerHeight();k.css(b)},show:function(){"none"===k.css("display")&&k.css({opacity:0}).show();k.addClass("va-visible").fadeTo(400,1)},hide:function(){k.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);c(h).unbind(".validityalert");c(i).unbind(".validityalert");k.stop().removeAttr("for")},_create:function(){if(!k)k=d.errorBubble=c("<"+e+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
e+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){k.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&k.bgIframe()})}};b=c.proxy(d,"hide");return d}();(function(){var e,f=[],i;c(h).bind("invalid",function(a){if(!a.wrongWebkitInvalid){var b=c(a.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!e)e=c.Event("firstinvalid"),e.isInvalidUIPrevented=a.isDefaultPrevented,d=c.Event("firstinvalidsystem"),c(h).triggerHandler(d,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&a.preventDefault();f.push(a.target);a.extraData="fix";clearTimeout(i);i=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:c(f)};e=!1;f=[];c(a.target).trigger(b,b)},9);d=b=null}})})();c.fn.getErrorMessage=function(){var e="",
f=this[0];f&&(e=s(f)||c.prop(f,"customValidationMessage")||c.prop(f,"validationMessage"));return e};n.replaceValidationUI&&f.ready("DOM",function(){c(h).bind("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),c.webshims.validityAlert.showFor(e.target,c(e.target).prop("customValidationMessage")))})})});
