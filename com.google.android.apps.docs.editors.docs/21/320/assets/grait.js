(function(){function b(){this.b=window.getSelection();this.a=null}b.prototype.toString=function(){this.a||(this.a=this.b.toString());return this.a};function c(a){try{if(""!=a.toString().replace(/\s+/g,""))return!0}catch(k){console.error(k)}return!1};if(!GoogleDocsResearchSelectionProxy||!GoogleDocsResearchSelectionProxy.updateSelection)throw"GoogleDocsResearchSelectionProxy is not defined!";function d(a){a&&c(a)?GoogleDocsResearchSelectionProxy.updateSelection(a.toString()):GoogleDocsResearchSelectionProxy.updateSelection(null)}var e=navigator&&navigator.userAgent?navigator.userAgent:"";
if(-1!=e.indexOf("iPhone")||-1!=e.indexOf("iPod")||-1!=e.indexOf("iPad")){var f=!1,g=null,h=!1;document.addEventListener("selectionchange",function(){var a=new b;f?g=a:c(a)&&d(a)});document.addEventListener("touchstart",function(){f=!0;g=null;h=!1});document.addEventListener("touchend",function(){f=!1;!g&&h||d(g)});document.addEventListener("scroll",function(){h=!0})}else document.addEventListener("selectionchange",function(){d(new b)});d(new b);
GoogleDocsResearchGsaProxy&&GoogleDocsResearchGsaProxy.onGsaJsEvents&&(window.gsabridge={onJsEvents:function(a){GoogleDocsResearchGsaProxy.onGsaJsEvents(JSON.stringify(a))}});}).call(this);