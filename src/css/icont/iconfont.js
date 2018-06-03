(function(window){var svgSprite='<svg><symbol id="icon-arrowleftdl" viewBox="0 0 1024 1024"><path d="M801.92 768c12.224 0 24.576-4.672 33.92-14.08 18.752-18.752 18.752-49.152 0-67.904l-222.08-222.08 222.08-222.08c18.752-18.752 18.752-49.152 0-67.904s-49.152-18.752-67.904 0l-256 256C493.248 448.832 493.248 479.168 512 497.92l256 256C777.344 763.328 789.632 768 801.92 768z"  ></path><path d="M481.92 768c12.288 0 24.576-4.672 33.92-14.08 18.752-18.752 18.752-49.152 0-67.904l-222.08-222.08 222.08-222.08c18.752-18.752 18.752-49.152 0-67.904S466.752 155.328 448 174.08l-256 256C173.248 448.832 173.248 479.168 192 497.92l256 256C457.344 763.328 469.632 768 481.92 768z"  ></path></symbol><symbol id="icon-arrowleftl" viewBox="0 0 1024 1024"><path d="M656 816c12.224 0 24.576-4.608 33.856-14.016 18.816-18.88 18.816-49.28 0-67.968L467.904 512l222.016-222.016c18.816-18.752 18.816-49.152 0-67.968-18.752-18.752-49.152-18.752-67.904 0l-256 256c-18.752 18.752-18.752 49.152 0 67.968l256 256C631.424 811.392 643.776 816 656 816z"  ></path></symbol><symbol id="icon-arrowrightdl" viewBox="0 0 1024 1024"><path d="M240 800c-12.288 0-24.576-4.672-33.92-14.08-18.752-18.752-18.752-49.152 0-67.904l222.08-222.08L206.08 273.92c-18.752-18.752-18.752-49.152 0-67.904s49.152-18.752 67.904 0l256 256c18.752 18.752 18.752 49.152 0 67.904l-256 256C264.576 795.328 252.288 800 240 800z"  ></path><path d="M560 800c-12.288 0-24.576-4.672-33.92-14.08-18.752-18.752-18.752-49.152 0-67.904l222.08-222.08L526.08 273.92c-18.752-18.752-18.752-49.152 0-67.904s49.152-18.752 67.904 0l256 256c18.752 18.752 18.752 49.152 0 67.904l-256 256C584.576 795.328 572.288 800 560 800z"  ></path></symbol><symbol id="icon-arrowrightl" viewBox="0 0 1024 1024"><path d="M399.936 816c-12.224 0-24.576-4.608-33.856-14.016-18.816-18.88-18.816-49.28 0-67.968L588.032 512 366.08 289.984c-18.816-18.752-18.816-49.152 0-67.968 18.752-18.752 49.152-18.752 67.904 0l256 256c18.752 18.752 18.752 49.152 0 67.968l-256 256C424.512 811.392 412.16 816 399.936 816z"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M512 170.666667c-188.544 0-341.333333 152.832-341.333333 341.333333s152.789333 341.333333 341.333333 341.333333 341.333333-152.832 341.333333-341.333333-152.789333-341.333333-341.333333-341.333333zM670.165333 609.834667c16.682667 16.682667 16.682667 43.648 0 60.330667-8.32 8.32-19.242667 12.501333-30.165333 12.501333s-21.845333-4.181333-30.165333-12.501333l-97.834667-97.834667-97.834667 97.834667c-8.32 8.32-19.242667 12.501333-30.165333 12.501333s-21.845333-4.181333-30.165333-12.501333c-16.682667-16.682667-16.682667-43.648 0-60.330667l97.834667-97.834667-97.834667-97.834667c-16.682667-16.682667-16.682667-43.648 0-60.330667s43.648-16.682667 60.330667 0l97.834667 97.834667 97.834667-97.834667c16.682667-16.682667 43.648-16.682667 60.330667 0s16.682667 43.648 0 60.330667l-97.834667 97.834667 97.834667 97.834667z"  ></path></symbol><symbol id="icon-rili" viewBox="0 0 1024 1024"><path d="M784 160h-112V128c0-17.6-14.4-32-32-32s-32 14.4-32 32v32H416V128c0-17.6-14.4-32-32-32s-32 14.4-32 32v32h-112C152 160 80 232 80 320v448c0 88 72 160 160 160h544c88 0 160-72 160-160V320c0-88-72-160-160-160z m-544 64h112v32c0 17.6 14.4 32 32 32s32-14.4 32-32v-32h192v32c0 17.6 14.4 32 32 32s32-14.4 32-32v-32h112c52.8 0 96 43.2 96 96v32H144v-32c0-52.8 43.2-96 96-96z m544 640H240c-52.8 0-96-43.2-96-96V416h736v352c0 52.8-43.2 96-96 96z" fill="#4A576A" ></path><path d="M288 672h64c17.6 0 32 14.4 32 32s-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32zM480 672h64c17.6 0 32 14.4 32 32s-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32zM672 672h64c17.6 0 32 14.4 32 32s-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32zM288 512h64c17.6 0 32 14.4 32 32s-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32zM480 512h64c17.6 0 32 14.4 32 32s-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32zM672 512h64c17.6 0 32 14.4 32 32s-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32s14.4-32 32-32z" fill="#4A576A" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)