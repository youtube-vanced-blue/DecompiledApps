(function(){var u=this,v=function(b,a){b=b.split(".");var c=u;b[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===a?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=a};var y=function(){this.a="";this.b=w};y.prototype.c=!0;var z=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,w={},B=function(b){var a=new y;a.a=b;return a};B("about:blank");var C=!1,D,E=100,F="";
function G(b){var a=document.getElementById("message");if(a){var c=document.querySelectorAll('.gmail_inbodymedia[dir="rtl"],.gmail_inbodymedia [dir="rtl"]');I(c,"ltr");var d=a.style.zoom;d&&(a.style.zoom=1);var q=a.style.width;a.style.width=E+"px";var r=document.body.offsetWidth,h=a.scrollWidth,m=E,p,k=h,n=[],l=!1,A=[];var g=a.getElementsByTagName("*");var f=0;for(p=g.length;f<p;f++){var e=g[f];if(e.height<e.scrollHeight){var t=e.style.height||e.style.minHeight;e.style.height="auto";e.style.minHeight=
t;e.style.maxHeight="none"}}if(!(h<=m)){g=a.querySelectorAll("div[style], textarea[style]");var H=!1;f=0;for(p=g.length;f<p;f++){e=g[f];var x=(t=e.style.width||e.style.minWidth)?t.indexOf("px"):-1;0<=x&&t.slice(0,x)>m&&(J(e,"width",n),J(e,"minWidth",n),J(e,"maxWidth",n),e.style.width="100%",e.style.minWidth="",e.style.maxWidth=t,H=!0)}H&&(k=a.scrollWidth,k<=m&&(l=!0));if(!l){g=a.querySelectorAll("img");x=!1;f=0;for(p=g.length;f<p;f++)e=g[f],t=e.offsetWidth,t>m&&(J(e,"maxWidth",n),J(e,"width",n),J(e,
"height",n),e.style.maxWidth=m+"px",e.style.minWidth="",e.style.width="100%",e.style.height="auto",x=!0);x&&(k=a.scrollWidth,k<=m&&(l=!0))}!l&&(g=a.querySelectorAll("table"),g=K(g,L,n))&&(k=a.scrollWidth,k<=m&&(l=!0));if(!l&&(f=k,g=a.querySelectorAll("td"),g=K(g,null,A)))if(k=a.scrollWidth,k<=m)l=!0;else if(k==f)M(A);else for(f=0,p=A.length;f<p;f++)n.push(A[f]);!l&&.7<(h-k)/(h-m)&&(l=!0);l||M(n)}r/=a.scrollWidth;h=r/d;b&&1>h?(a.style.zoom=d,b.style.zoom=h,b.style.width=q):a.style.zoom=r;a.style.width=
q;I(c,"rtl")}}function I(b,a){for(var c,d=0;c=b[d];d++)c.setAttribute("dir",a)}function M(b){for(var a=0,c=b.length;a<c;a++)b[a][0](b[a][1],b[a][2])}function N(b,a){b.classList.remove(a)}function K(b,a,c){var d,q=!1;var r=0;for(d=b.length;r<d;r++){var h=b[r];a&&!a(h)||h.classList.contains("munged")||(h.classList.add("munged"),h.style.minWidth="",q=!0,c.push([N,h,"munged"]))}return q}function O(b){var a=b.src;b.onclick=function(){bigtop.onInlineImageClicked(a)}}
function P(){C||(window.setTimeout(Q,0),C=!0)}function Q(){G();C=!1;bigtop.setContentHeight(document.documentElement.scrollHeight-100)}function J(b,a,c){var d="data-"+a;b.setAttribute(d,b.style[a]);c.push([R,b,[a,d]])}function R(b,a){var c=a[1];b.style[a[0]]=c?b.getAttribute(c):""}function L(b){return b.hasAttribute("width")||b.style.width}function S(){bigtop.setContentHeight(document.documentElement.scrollHeight-100);bigtop.onContentReady()}
v("toggleElidedTextVisibility",function(b,a,c,d){a=document.getElementById(a);"none"==a.style.display?(a.style.display="block",b.title=c,G(a)):(b.title=d,a.style.display="none");bigtop.toggleElidedRegion(document.documentElement.scrollHeight-100)});function T(){var b=document.getElementsByTagName("FORM"),a,c;for(a=0;a<b.length;++a)if("POST"===b[a].method.toUpperCase()){b[a].onsubmit=function(){alert(F);return!1};var d=b[a].elements;for(c=0;c<d.length;++c)d[c].readOnly=!0}}
v("jumpTo",function(b){bigtop.onAnchorLinkClicked();var a="#"+b;b=location;a instanceof y||a instanceof y||(a=a.c?a.a:String(a),z.test(a)||(a="about:invalid#zClosurez"),a=B(a));b.href=a instanceof y&&a.constructor===y&&a.b===w?a.a:"type_error:SafeUrl"});function U(b){b=b.target.getAttribute("data-linkid");bigtop.onLinkWithLinkIdClicked(parseInt(b,16));return!1}function V(){for(var b=document.getElementById("message").firstChild;b;)"DIV"==b.tagName&&b.setAttribute("dir","auto"),b=b.nextSibling}
v("initializeMessage",function(){E=WEBVIEW_WIDTH;F=FORMS_DISABLED_WARNING;document.getElementById("initial-load-signal").addEventListener("webkitAnimationStart",S,!1);for(var b=document.body.getElementsByTagName("img"),a=0,c=b.length;a<c;a++){var d=b[a],q=d.src;d.src="";d.onload=P;d.src=q}a=0;for(c=b.length;a<c;a++)O(b[a]);G();T();b=document.getElementsByTagName("A");for(a=0;c=b[a];a++)if(d=c.getAttribute("href"))0!=d.indexOf("#")||"#"==d?0==d.indexOf("mailto:")?c.href=d+(0>d.indexOf("?")?"?":"&")+
"src=inbox":0==d.indexOf("http")&&c.getAttribute("data-linkid")&&c.addEventListener("click",U):(d=encodeURIComponent(JSON.stringify(d.substring(1))),c.href="javascript:jumpTo("+d+")");V()});v("preUpdateFullMessageWidthForJB",function(b){document.getElementById("message").style.width=b+"px";bigtop.readyToUpdateFullMessageWidth()});function W(b){D!=b&&(E=D=b,G());S()}v("updateFullMessageWidth",W);v("setUpFullMessageView",function(b,a){F=a;T();W(b);V()});
IS_FULL_MESSAGE&&(document.getElementsByClassName("bodycontainer")[0].setAttribute("id","message"),bigtop.javascriptLoaded());}).call(this);