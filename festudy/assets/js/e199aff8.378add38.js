"use strict";(self.webpackChunkfe_study=self.webpackChunkfe_study||[]).push([[537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=l,d=c["".concat(m,".").concat(k)]||c[k]||s[k]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:2,title:"html \u5185\u5bb9"},r="**html \u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6**",o={unversionedId:"html/index",id:"html/index",title:"html \u5185\u5bb9",description:"1. src \u548c href \u7684\u5f02\u540c",source:"@site/docs/html/index.md",sourceDirName:"html",slug:"/html/",permalink:"/festudy/docs/html/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/html/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"html \u5185\u5bb9"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u8a00",permalink:"/festudy/docs/\u524d\u8a00"},next:{title:"js \u5185\u5bb9",permalink:"/festudy/docs/js/"}},m={},p=[{value:"1. src \u548c href \u7684\u5f02\u540c",id:"1-src-\u548c-href-\u7684\u5f02\u540c",level:2},{value:"2. \u9875\u9762\u5bfc\u5165\u6837\u5f0f\u65f6\uff0c\u4f7f\u7528 link \u548c@import \u6709\u4ec0\u4e48\u533a\u522b\uff1f",id:"2-\u9875\u9762\u5bfc\u5165\u6837\u5f0f\u65f6\u4f7f\u7528-link-\u548cimport-\u6709\u4ec0\u4e48\u533a\u522b",level:2},{value:"3.\u524d\u7aef SEO \u4f18\u5316",id:"3\u524d\u7aef-seo-\u4f18\u5316",level:2},{value:"4. \u4ece\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u4e00\u4e2a URL \u5730\u5740\u5230\u6d4f\u89c8\u5668\u5b8c\u6210\u6e32\u67d3\u7684\u6574\u4e2a\u8fc7\u7a0b",id:"4-\u4ece\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u4e00\u4e2a-url-\u5730\u5740\u5230\u6d4f\u89c8\u5668\u5b8c\u6210\u6e32\u67d3\u7684\u6574\u4e2a\u8fc7\u7a0b",level:2},{value:"5.img \u6807\u7b7e\u7684 title \u548c alt \u5c5e\u6027",id:"5img-\u6807\u7b7e\u7684-title-\u548c-alt-\u5c5e\u6027",level:2},{value:"6.HTML \u8bed\u4e49\u5316",id:"6html-\u8bed\u4e49\u5316",level:2},{value:"7.cookies\uff0csessionStorage\uff0clocalStorage \u7684\u533a\u522b",id:"7cookiessessionstoragelocalstorage-\u7684\u533a\u522b",level:2},{value:"8.WEB \u6807\u51c6\u4ee5\u53ca W3C \u6807\u51c6\u662f\u4ec0\u4e48?",id:"8web-\u6807\u51c6\u4ee5\u53ca-w3c-\u6807\u51c6\u662f\u4ec0\u4e48",level:2},{value:"9.HTML \u8bf7\u6c42\u65b9\u6cd5\u7528\u9014",id:"9html-\u8bf7\u6c42\u65b9\u6cd5\u7528\u9014",level:2},{value:"10.\u6709\u54ea\u4e9b meta viewport \u5b83\u4eec\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528",id:"10\u6709\u54ea\u4e9b-meta-viewport-\u5b83\u4eec\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528",level:2},{value:"11.\u7f51\u9875\u5236\u4f5c\u4f1a\u7528\u5230\u7684\u56fe\u7247\u683c\u5f0f\u6709\u54ea\u4e9b\uff1f",id:"11\u7f51\u9875\u5236\u4f5c\u4f1a\u7528\u5230\u7684\u56fe\u7247\u683c\u5f0f\u6709\u54ea\u4e9b",level:2},{value:"12.web \u5f00\u53d1\u4e2d\u4f1a\u8bdd\u8ddf\u8e2a\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b",id:"12web-\u5f00\u53d1\u4e2d\u4f1a\u8bdd\u8ddf\u8e2a\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b",level:2},{value:"12.(\u6269\u5c55)canvas \u6307\u7eb9\u8ffd\u8e2a\u6280\u672f",id:"12\u6269\u5c55canvas-\u6307\u7eb9\u8ffd\u8e2a\u6280\u672f",level:2},{value:"13.\u56fe\u7247\u5c55\u793a\u65b9\u9762\u4f18\u5316",id:"13\u56fe\u7247\u5c55\u793a\u65b9\u9762\u4f18\u5316",level:2},{value:"14.\u4e3a\u4ec0\u4e48\u4f7f\u7528\u591a\u4e2a\u57df\u540d\u6765\u5b58\u50a8\u7f51\u7ad9\u8d44\u6e90\u4f1a\u66f4\u6709\u6548\uff1f",id:"14\u4e3a\u4ec0\u4e48\u4f7f\u7528\u591a\u4e2a\u57df\u540d\u6765\u5b58\u50a8\u7f51\u7ad9\u8d44\u6e90\u4f1a\u66f4\u6709\u6548",level:2}],u={toc:p},c="wrapper";function s(e){let{components:t,...i}=e;return(0,l.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"html-\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6"},(0,l.kt)("strong",{parentName:"h1"},"html \u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6")),(0,l.kt)("h2",{id:"1-src-\u548c-href-\u7684\u5f02\u540c"},"1. src \u548c href \u7684\u5f02\u540c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u540c\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u90fd\u662f html \u6807\u7b7e\u7684\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u90fd\u53ef\u7528\u4e8e\u5f15\u7528\u5916\u90e8\u8d44\u6e90")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f02\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"src \u7528\u4e8e\u66ff\u6362\u5f53\u524d\u5143\u7d20\uff0c\u6bd4\u5982 img\u3001script\u3001iframe \u7b49\u7b49\uff0c\u5b83\u6307\u5411\u7684\u8d44\u6e90\u4f1a\u4e0b\u8f7d\u5e76\u5e94\u7528\u5230\u6587\u6863\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"href \u7528\u4e8e\u5efa\u7acb\u5f53\u524d\u5143\u7d20\u6216\u6587\u6863\u4e0e\u5916\u90e8\u8d44\u6e90\u4e4b\u95f4\u7684\u7ec3\u4e60\uff0c\u6bd4\u5982 link\u3001a \u7b49\uff0c\u5b83\u6307\u5411\u7684\u8d44\u6e90\u4e0d\u4f1a\u4e0b\u8f7d\uff0c\u53ea\u662f\u521b\u5efa\u4e00\u4e2a\u94fe\u63a5\u6216\u5f15\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6d4f\u89c8\u5668\u9047\u5230 src \u65f6\uff0c\u4f1a\u6682\u505c\u5176\u4ed6\u8d44\u6e90\u7684\u4e0b\u8f7d\u548c\u5904\u7406\uff0c\u76f4\u63a5\u5c06\u8be5\u8d44\u6e90\u52a0\u8f7d\u3001\u7f16\u8bd1\u3001\u6267\u884c\u5b8c\u6bd5\uff1b\u5f53\u6d4f\u89c8\u5668\u9047\u5230 href \u65f6\uff0c\u4f1a\u5e76\u884c\u4e0b\u8f7d\u8d44\u6e90\uff0c\u5e76\u4e14\u4e0d\u4f1a\u505c\u6b62\u5bf9\u5f53\u524d\u6587\u6863\u7684\u5904\u7406")),(0,l.kt)("h2",{id:"2-\u9875\u9762\u5bfc\u5165\u6837\u5f0f\u65f6\u4f7f\u7528-link-\u548cimport-\u6709\u4ec0\u4e48\u533a\u522b"},"2. \u9875\u9762\u5bfc\u5165\u6837\u5f0f\u65f6\uff0c\u4f7f\u7528 link \u548c@import \u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,l.kt)("p",null,"link \u548c @import \u90fd\u662f\u7528\u4e8e\u5bfc\u5165 css \u6837\u5f0f\u8868\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u5b83\u4eec\u6709\u4ee5\u4e0b\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"link \u662f html \u6807\u7b7e\uff0c@import \u662f css \u8bed\u6cd5\u89c4\u5219"),(0,l.kt)("li",{parentName:"ul"},"link \u53ef\u4ee5\u52a0\u8f7d css \u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5176\u5b83\u7684\u5c5e\u6027\uff0c\u6bd4\u5982 rss\u3001rel \u7b49\uff1b"),(0,l.kt)("li",{parentName:"ul"},"link \u5f15\u5165\u7684 css \u4f1a\u540c\u65f6\u52a0\u8f7d\uff1b@import \u5f15\u5165\u7684 css \u4f1a\u7b49\u5230\u9875\u9762\u52a0\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},"link \u6ca1\u6709\u517c\u5bb9\u6027\u95ee\u9898\uff1b@import \u53ea\u80fd\u5728 IE5+\u8bc6\u522b(IE \u5df2\u6b7b\uff0c\u5ffd\u7565~~~)\u3002"),(0,l.kt)("li",{parentName:"ul"},"link \u53ef\u4ee5\u901a\u8fc7 JS \u64cd\u4f5c DOM \u6765\u6539\u53d8\u6837\u5f0f\uff1b@import \u4e0d\u80fd")),(0,l.kt)("h2",{id:"3\u524d\u7aef-seo-\u4f18\u5316"},"3.\u524d\u7aef SEO \u4f18\u5316"),(0,l.kt)("p",null,"SEO \u4f18\u5316\u4e3b\u8981\u662f\u4e3a\u4e86\u65b9\u4fbf\u641c\u7d22\u5f15\u64ce\u722c\u53d6\u6211\u4eec\u9875\u9762\uff0c\u63d0\u9ad8\u6211\u4eec\u9875\u9762\u7684\u6743\u91cd\u6240\u9700\u8981\u505a\u7684\u3002"),(0,l.kt)("p",null,"\u6bd4\u8f83\u5e38\u89c1\u7684\u6709\u4e0b\u9762\u8fd9\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"title: \u7f51\u7ad9\u7684\u6807\u9898"),(0,l.kt)("li",{parentName:"ul"},"description: \u7f51\u7ad9\u7684\u63cf\u8ff0"),(0,l.kt)("li",{parentName:"ul"},"keywords: \u7f51\u7ad9\u5173\u952e\u8bcd\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e2d\u4f5c\u7528\u6ca1\u90a3\u4e48\u5927\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u4e49\u5316\u7684 HTML \u4ee3\u7801\uff0c\u6bd4\u5982\uff1aheader footer main aside.... \u641c\u7d22\u5f15\u64ce\u80fd\u66f4\u5bb9\u6613\u7406\u89e3\u7f51\u9875"),(0,l.kt)("li",{parentName:"ul"},"\u56fe\u7247\u7684 alt\uff1a\u8fd9\u4e2a\u5f88\u91cd\u8981\uff0c\u4e00\u5b9a\u8981\u5199")),(0,l.kt)("p",null,"\u6ce8\u610f\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91cd\u8981 HTML \u4ee3\u7801\u653e\u5728\u6700\u524d\u9762\uff0c\u6bd4\u5982 meta \u6807\u7b7e\u7684 description title \u7b49 \u5c31\u653e\u5728 head \u91cc\u9762\u7f51\u9875\u7684\u6700\u4e0a\u9762"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u8981\u4fe1\u606f\u4e0d\u8981\u7528 js \u8f93\u51fa\uff1a\u722c\u866b\u4e0d\u4f1a\u6267\u884c js \u83b7\u53d6\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u5c11\u7528 iframe\uff1aiframe \u76f8\u5f53\u4e8e\u4e00\u4e2a\u65b0\u7684 web \u9875\u9762\u4e86\uff0c\u722c\u866b\u4e0d\u4f1a\u6293\u53d6 iframe \u7684\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u7f51\u7ad9\u901f\u5ea6\uff1a\u7f51\u7ad9\u901f\u5ea6\u662f\u641c\u7d22\u5f15\u64ce\u6392\u5e8f\u7684\u91cd\u8981\u6307\u6807\u4e4b\u4e00\uff0c\u6240\u4ee5\u73b0\u5728\u5f88\u591a\u7ad9\u70b9\u90fd\u91c7\u7528 ssr \u6e32\u67d3\u6765\u63d0\u9ad8\u9996\u5c4f\u6e32\u67d3\u901f\u5ea6\u3002\u6bd4\u5982\u6398\u91d1(\u4e0d\u8fc7\u6398\u91d1\u7528\u7684 nuxt \u662f\u6211\u6ca1\u60f3\u5230\u7684)")),(0,l.kt)("h2",{id:"4-\u4ece\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u4e00\u4e2a-url-\u5730\u5740\u5230\u6d4f\u89c8\u5668\u5b8c\u6210\u6e32\u67d3\u7684\u6574\u4e2a\u8fc7\u7a0b"},"4. \u4ece\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u4e00\u4e2a URL \u5730\u5740\u5230\u6d4f\u89c8\u5668\u5b8c\u6210\u6e32\u67d3\u7684\u6574\u4e2a\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u7b80\u6613\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165 URL \u5e76\u4e14\u56de\u8f66"),(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8fdb\u7a0b\u63a5\u53d7\u7528\u6237\u8f93\u5165\u7684 URL\uff0c\u5e76\u5224\u65ad\u662f\u5426\u662f\u6709\u6548\u7684 URL \u683c\u5f0f\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u4f1a\u5c1d\u8bd5\u8fdb\u884c\u641c\u7d22\u6216\u8005\u63d0\u793a\u9519\u8bef"),(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8fdb\u7a0b\u5c06 URL \u4ea4\u7ed9\u7f51\u7edc\u8fdb\u7a0b\uff0c\u7f51\u7edc\u8fdb\u7a0b\u8fdb\u884c DNS \u57df\u540d\u89e3\u6790\uff0c\u627e\u5230\u5bf9\u5e94\u7684 IP \u5730\u5740\uff0c\u7b80\u5386 TCP \u8fde\u63a5"),(0,l.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u8fdb\u7a0b\u63a5\u53d7\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u8bf7\u6c42\uff0c\u5e76\u7b49\u5f85\u670d\u52a1\u5668\u54cd\u5e94\u3002\u5982\u679c\u8bf7\u6c42\u7684\u534f\u8bae\u662f HTTPS\uff0c\u8fd8\u9700\u8981\u8fdb\u884c SSL \u63e1\u624b\u548c\u8bc1\u4e66\u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u8fdb\u7a0b\u63a5\u6536\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\uff0c\u89e3\u6790\u54cd\u5e94\u5934\u548c\u54cd\u5e94\u4f53\u3002\u5982\u679c\u54cd\u5e94\u5934\u4e2d\u56fd\u6709\u91cd\u5b9a\u5411\uff0c\u7f13\u5b58\u7b49\u4fe1\u606f\uff0c\u8fd8\u9700\u8981\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u8fdb\u7a0b\u5c06\u54cd\u5e94\u4f53\u4e2d\u7684 HTML \u6587\u6863\u4f20\u9012\u7ed9\u6e32\u67d3\u8fdb\u7a0b\uff0c\u6e32\u67d3\u8fdb\u7a0b\u5f00\u59cb\u8fdb\u884c\u9875\u9762\u6e32\u67d3"),(0,l.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u8fdb\u7a0b\u5bf9 HTML \u6587\u6863\u8fdb\u884c\u89e3\u6790\uff0c\u6784\u5efa DOM \u6811\u548c CSSOM \u6811\uff0c\u5e76\u5408\u5e76\u6210\u6e32\u67d3\u6811\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u8fdb\u7a0b\u5bf9\u6e32\u67d3\u6811\u8fdb\u884c\u5e03\u5c40\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u8282\u70b9\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\uff0c\u5e76\u751f\u6210\u7ed8\u5236\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u8fdb\u7a0b\u5c06\u7ed8\u5236\u6307\u4ee4\u53d1\u9001\u7ed9\u5408\u6210\u7ebf\u7a0b\uff0c\u5408\u6210\u7ebf\u7a0b\u5c06\u9875\u9762\u5206\u6210\u591a\u4e2a\u56fe\u5c42\uff0c\u5e76\u8c03\u7528 GPU \u8fdb\u884c\u7ed8\u5236\u548c\u5408\u6210"),(0,l.kt)("li",{parentName:"ol"},"\u5408\u6210\u7ebf\u7a0b\u5c06\u5408\u6210\u540e\u7684\u9875\u9762\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\uff0c\u5b8c\u6210\u9875\u9762\u6e32\u67d3")),(0,l.kt)("h2",{id:"5img-\u6807\u7b7e\u7684-title-\u548c-alt-\u5c5e\u6027"},"5.img \u6807\u7b7e\u7684 title \u548c alt \u5c5e\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"title \u662f HTML \u5143\u7d20\u7684\u5171\u6709\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u9f20\u6807\u60ac\u6d6e\u5230\u5143\u7d20\u4e0a\u65f6\u663e\u793a\u76f8\u5e94\u7684\u63d0\u793a\u897f\u6089\u5c3c"),(0,l.kt)("li",{parentName:"ul"},"alt \u662f img \u6807\u7b7e\u7684\u7279\u6709\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u56fe\u7247\u65e0\u6cd5\u52a0\u8f7d\u65f6\u663e\u793a\u56fe\u7247\u5185\u5bb9\u7684\u7b49\u4ef7\u63cf\u8ff0\uff0c\u4e5f\u53ef\u4ee5\u88ab\u8bfb\u5c4f\u5668\u9605\u8bfb"),(0,l.kt)("li",{parentName:"ul"},"title \u548c alt \u7684\u533a\u522b\u662f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"title \u662f\u53ef\u9009\u7684 alt \u662f\u5fc5\u987b\u7684 \u56e0\u4e3a\u5b83\u5bf9\u4e8e\u56fe\u7247\u7684\u53ef\u8bbf\u95ee\u6027\u548c SEO \u4f18\u5316\u6709\u5f88\u5927\u5e2e\u52a9"),(0,l.kt)("li",{parentName:"ul"},"title \u65e8\u5728\u9f20\u6807\u60ac\u6d6e\u65f6\u663e\u793a\uff0calt \u53ea\u5728\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u663e\u793a")))),(0,l.kt)("h2",{id:"6html-\u8bed\u4e49\u5316"},"6.HTML \u8bed\u4e49\u5316"),(0,l.kt)("p",null,"HTML \u8bed\u4e49\u5316\u662f\u6307\u4f7f\u7528\u6709\u4e00\u5b9a\u8bed\u4e49\u7684\u6807\u7b7e\uff0c\u4f8b\u5982\uff1aarticle header footer main aside p h1 \u7b49\u7b49 \u6765\u8868\u793a\u9875\u9762\u7ed3\u6784\u548c\u5185\u5bb9\uff0c\u800c\u4e0d\u662f div \u4e00\u628a\u68ad\u3002"),(0,l.kt)("p",null,"HTML \u8bed\u4e49\u5316\u7684\u597d\u5904\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u5229\u4e8e\u641c\u7d22\u5f15\u64ce\u7684\u5efa\u7acb\u7d22\u5f15\u548c\u6293\u53d6\u6709\u6548\u4fe1\u606f\uff0c\u63d0\u9ad8\u7f51\u7ad9\u7684\u6392\u540d\u548c\u6d41\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5229\u4e8e\u5f00\u53d1\u8005\u9605\u8bfb\u3001\u7ef4\u62a4\u548c\u5199\u51fa\u66f4\u4f18\u96c5\u7684\u4ee3\u7801\u3001\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5229\u4e8e\u6d4f\u89c8\u5668\u3001\u5c4f\u5e55\u9605\u8bfb\u5668\u7b49\u8f85\u52a9\u8bbe\u5907\u89e3\u6790\u9875\u9762\uff0c\u63d0\u9ad8\u7f51\u7ad9\u7684\u53ef\u8bbf\u95ee\u6027\u548c\u7528\u6237\u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5229\u4e8e\u5728\u6ca1\u6709\u6837\u5f0f css \u60c5\u51b5\u4e0b\u4e5f\u80fd\u4ee5\u4e00\u79cd\u6587\u6863\u683c\u5f0f\u663e\u793a\uff0c\u4fbf\u4e8e\u6253\u5370\u6216\u9605\u8bfb")),(0,l.kt)("h2",{id:"7cookiessessionstoragelocalstorage-\u7684\u533a\u522b"},"7.cookies\uff0csessionStorage\uff0clocalStorage \u7684\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cookie \u7531\u670d\u52a1\u5668\u7aef\u5199\u5165\uff0clocalStorage \u548c sessionStorage \u7531\u524d\u7aef\u5199\u5165"),(0,l.kt)("li",{parentName:"ul"},"cookie \u4f1a\u53c2\u4e0e\u4e0e\u670d\u52a1\u7aef\u7684\u901a\u4fe1\uff0clocalStorage \u548c sessionStorage \u4e0d\u4f1a"),(0,l.kt)("li",{parentName:"ul"},"cookie \u6709\u5931\u6548\u65f6\u95f4\uff0clocalStorage \u6ca1\u6709\uff0csessionStorage \u5728\u9875\u9762\u5173\u95ed\u7684\u65f6\u5019\u5c31\u88ab\u6e05\u9664"),(0,l.kt)("li",{parentName:"ul"},"cookie \u4e00\u822c\u4e0d\u8d85\u8fc7 4kb\uff0clocalStorage \u548c sessionStorage \u53ef\u4ee5\u5b58\u50a8 5M \u751a\u81f3\u66f4\u591a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ecf\u5178\u8001\u56fe"),"\n",(0,l.kt)("img",{alt:"img",src:a(8259).Z,width:"1181",height:"577"})),(0,l.kt)("h2",{id:"8web-\u6807\u51c6\u4ee5\u53ca-w3c-\u6807\u51c6\u662f\u4ec0\u4e48"},"8.WEB \u6807\u51c6\u4ee5\u53ca W3C \u6807\u51c6\u662f\u4ec0\u4e48?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WEB \u6807\u51c6\uff1a\u5c06\u7ed3\u6784\u8868\u73b0\u3001\u884c\u4e3a\u5206\u79bb\uff0c\u4f7f\u7f51\u9875\u66f4\u5177\u6709\u6a21\u5757\u5316\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"W3C \u6807\u51c6\u65f6\u503c\u4e07\u7ef4\u7f51\u8054\u76df(W3C)\u5f00\u53d1\u7684\u56fd\u9645 Web \u6807\u51c6\uff0c\u4f8b\u5982 HTML\u3001CSS \u6807\u51c6\u8981\u6c42\u6807\u7b7e\u5b57\u6bcd\u5c0f\u5199\uff0c\u53cc\u6807\u7b7e\u95ed\u5408\uff0c\u6807\u7b7e\u4e0d\u968f\u610f\u5d4c\u5957\u7b49\u3002")),(0,l.kt)("h2",{id:"9html-\u8bf7\u6c42\u65b9\u6cd5\u7528\u9014"},"9.HTML \u8bf7\u6c42\u65b9\u6cd5\u7528\u9014"),(0,l.kt)("p",null,"\u4f46\u662f\u6700\u5e38\u7528\u7684\u5c31 GET,POST,DELET,PUT(PATCH)\uff0c\u751a\u81f3\u53ef\u4ee5 POST \u4e00\u628a\u68ad(\u4f46\u662f\u4e0d\u5efa\u8bae)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GET ------ \u8bf7\u6c42\u7f51\u7edc\u6307\u5b9a\u4f4d\u7f6e\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"POST ------ \u5411\u670d\u52a1\u5668\u63d0\u4ea4\u6570\u636e\uff0c\u8bf7\u6c42\u670d\u52a1\u5668\u8fdb\u884c\u6570\u636e\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"PUT ------ \u5411\u7f51\u7edc\u6307\u5b9a\u4f4d\u7f6e\u4e0a\u4f20\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"DELETE ------ \u8bf7\u6c42\u670d\u52a1\u5668\u5220\u9664 URL \u6240\u6807\u8bc6\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"HEAD ------ \u53ea\u8bf7\u6c42\u54cd\u5e94\u5934\u90e8\uff0c\u54cd\u5e94\u4f53\u4e0d\u4f1a\u8fd4\u56de"),(0,l.kt)("li",{parentName:"ul"},"TRACE ------ \u56de\u663e\u670d\u52a1\u5668\u6536\u5230\u7684\u8bf7\u6c42\uff0c\u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\u6216\u8bca\u65ad"),(0,l.kt)("li",{parentName:"ul"},"PATCH ------ \u5b9e\u4f53\u4e2d\u5305\u542b\u4e00\u4e2a\u8868\uff0c\u8868\u4e2d\u8bf4\u660e\u4e0e\u8be5 URI \u6240\u8868\u793a\u7684\u539f\u5185\u5bb9\u7684\u533a\u522b"),(0,l.kt)("li",{parentName:"ul"},"MOVE ------ \u8bf7\u6c42\u670d\u52a1\u5668\u5c06\u6307\u5b9a\u7684\u9875\u9762\u79fb\u81f3\u53e6\u4e00\u4e2a\u7f51\u7edc\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"COPY ------ \u8bf7\u6c42\u670d\u52a1\u5668\u5c06\u6307\u5b9a\u7684\u9875\u9762\u62f7\u8d1d\u81f3\u53e6\u4e00\u4e2a\u7f51\u7edc\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"LINK ------ \u8bf7\u6c42\u670d\u52a1\u5668\u5efa\u7acb\u94fe\u63a5\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"UNLINK ------ \u65ad\u5f00\u94fe\u63a5\u5173\u7cfb")),(0,l.kt)("h2",{id:"10\u6709\u54ea\u4e9b-meta-viewport-\u5b83\u4eec\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528"},"10.\u6709\u54ea\u4e9b meta viewport \u5b83\u4eec\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528"),(0,l.kt)("p",null,"meta viewport \u662f\u4e00\u4e2a HTML \u6807\u7b7e\uff0c\u7528\u4e8e\u63a7\u5236\u79fb\u52a8\u7aef\u6d4f\u89c8\u5668\u7684\u89c6\u53e3\u5927\u5c0f\u548c\u7f29\u653e\u884c\u4e3a 1\u3002\u5b83\u53ef\u4ee5\u89e3\u51b3\u79fb\u52a8\u7aef\u9875\u9762\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u7684\u9002\u914d\u95ee\u9898 2\u3002\u5e38\u7528\u7684 meta viewport \u5c5e\u6027\u6709\u4ee5\u4e0b\u51e0\u79cd 1\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"width\uff1a\u63a7\u5236\u89c6\u53e3\u7684\u5bbd\u5ea6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u50cf\u7d20\u6570\u6216\u8005 device-width\uff08\u8bbe\u5907\u5bbd\u5ea6\uff09"),(0,l.kt)("li",{parentName:"ul"},"height\uff1a\u63a7\u5236\u89c6\u53e3\u7684\u9ad8\u5ea6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u50cf\u7d20\u6570\u6216\u8005 device-height\uff08\u8bbe\u5907\u9ad8\u5ea6\uff09"),(0,l.kt)("li",{parentName:"ul"},"initial-scale\uff1a\u63a7\u5236\u9875\u9762\u521d\u59cb\u7f29\u653e\u6bd4\u4f8b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.0 \u5230 10.0"),(0,l.kt)("li",{parentName:"ul"},"maximum-scale\uff1a\u63a7\u5236\u9875\u9762\u6700\u5927\u7f29\u653e\u6bd4\u4f8b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.0 \u5230 10.0"),(0,l.kt)("li",{parentName:"ul"},"minimum-scale\uff1a\u63a7\u5236\u9875\u9762\u6700\u5c0f\u7f29\u653e\u6bd4\u4f8b\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.0 \u5230 10.0"),(0,l.kt)("li",{parentName:"ul"},"user-scalable\uff1a\u63a7\u5236\u7528\u6237\u662f\u5426\u53ef\u4ee5\u624b\u52a8\u7f29\u653e\u9875\u9762\uff0c\u53d6\u503c\u4e3a yes \u6216 no")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n\x3c!--H5\u6807\u51c6\u58f0\u660e\uff0c\u4f7f\u7528 HTML5 doctype\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199--\x3e\n<head lang="\u201den\u201d">\n  \x3c!--\u6807\u51c6\u7684 lang \u5c5e\u6027\u5199\u6cd5--\x3e\n  <meta charset="\u2019utf-8\u2032" />\n  \x3c!--\u58f0\u660e\u6587\u6863\u4f7f\u7528\u7684\u5b57\u7b26\u7f16\u7801--\x3e\n  <meta http-equiv="\u201dX-UA-Compatible\u201d" content="\u201dIE" ="edge,chrome" ="1\u2033" />\n  \x3c!--\u4f18\u5148\u4f7f\u7528 IE \u6700\u65b0\u7248\u672c\u548c Chrome--\x3e\n  <meta name="\u201ddescription\u201d" content="\u201d\u4e0d\u8d85\u8fc7150\u4e2a\u5b57\u7b26\u201d" />\n  \x3c!--\u9875\u9762\u63cf\u8ff0--\x3e\n  <meta name="\u201dkeywords\u201d" content="\u201d\u201d" />\n  \x3c!-- \u9875\u9762\u5173\u952e\u8bcd--\x3e\n  <meta name="\u201dauthor\u201d" content="\u201dname," email@gmail.com\u201d />\n  \x3c!--\u7f51\u9875\u4f5c\u8005--\x3e\n  <meta name="\u201drobots\u201d" content="\u201dindex,follow\u201d" />\n  \x3c!--\u641c\u7d22\u5f15\u64ce\u6293\u53d6--\x3e\n  <meta\n    name="\u201dviewport\u201d"\n    content="\u201dinitial-scale"\n    ="1,"\n    maximum-scale="3,"\n    minimum-scale="1,"\n    user-scalable="no\u201d"\n  />\n  \x3c!--\u4e3a\u79fb\u52a8\u8bbe\u5907\u6dfb\u52a0 viewport--\x3e\n  <meta name="\u201dapple-mobile-web-app-title\u201d" content="\u201d\u6807\u9898\u201d" />\n  \x3c!--iOS \u8bbe\u5907 begin--\x3e\n  <meta name="\u201dapple-mobile-web-app-capable\u201d" content="\u201dyes\u201d" />\n  \x3c!--\u6dfb\u52a0\u5230\u4e3b\u5c4f\u540e\u7684\u6807\u9898\uff08iOS 6 \u65b0\u589e\uff09\n\u662f\u5426\u542f\u7528 WebApp \u5168\u5c4f\u6a21\u5f0f\uff0c\u5220\u9664\u82f9\u679c\u9ed8\u8ba4\u7684\u5de5\u5177\u680f\u548c\u83dc\u5355\u680f--\x3e\n  <meta\n    name="\u201dapple-itunes-app\u201d"\n    content="\u201dapp-id"\n    ="myAppStoreID,"\n    affiliate-data="myAffiliateData,"\n    app-argument="myURL\u201d"\n  />\n  \x3c!--\u6dfb\u52a0\u667a\u80fd App \u5e7f\u544a\u6761 Smart App Banner\uff08iOS 6+ Safari\uff09--\x3e\n  <meta name="\u201dapple-mobile-web-app-status-bar-style\u201d" content="\u201dblack\u201d" />\n  <meta name="\u201dformat-detection\u201d" content="\u201dtelphone" ="no," email="no\u201d" />\n  \x3c!--\u8bbe\u7f6e\u82f9\u679c\u5de5\u5177\u680f\u989c\u8272--\x3e\n  <meta name="\u201drenderer\u201d" content="\u201dwebkit\u201d" />\n  \x3c!-- \u542f\u7528360\u6d4f\u89c8\u5668\u7684\u6781\u901f\u6a21\u5f0f(webkit)--\x3e\n  <meta http-equiv="\u201dX-UA-Compatible\u201d" content="\u201dIE" ="edge\u201d" />\n  \x3c!--\u907f\u514dIE\u4f7f\u7528\u517c\u5bb9\u6a21\u5f0f--\x3e\n  <meta http-equiv="\u201dCache-Control\u201d" content="\u201dno-siteapp\u201d" />\n  \x3c!--\u4e0d\u8ba9\u767e\u5ea6\u8f6c\u7801--\x3e\n  <meta name="\u201dHandheldFriendly\u201d" content="\u201dtrue\u201d" />\n  \x3c!--\u9488\u5bf9\u624b\u6301\u8bbe\u5907\u4f18\u5316\uff0c\u4e3b\u8981\u662f\u9488\u5bf9\u4e00\u4e9b\u8001\u7684\u4e0d\u8bc6\u522bviewport\u7684\u6d4f\u89c8\u5668\uff0c\u6bd4\u5982\u9ed1\u8393--\x3e\n  <meta name="\u201dMobileOptimized\u201d" content="\u201d320\u2033" />\n  \x3c!--\u5fae\u8f6f\u7684\u8001\u5f0f\u6d4f\u89c8\u5668--\x3e\n  <meta name="\u201dscreen-orientation\u201d" content="\u201dportrait\u201d" />\n  \x3c!--uc\u5f3a\u5236\u7ad6\u5c4f--\x3e\n  <meta name="\u201dx5-orientation\u201d" content="\u201dportrait\u201d" />\n  \x3c!--QQ\u5f3a\u5236\u7ad6\u5c4f--\x3e\n  <meta name="\u201dfull-screen\u201d" content="\u201dyes\u201d" />\n  \x3c!--UC\u5f3a\u5236\u5168\u5c4f--\x3e\n  <meta name="\u201dx5-fullscreen\u201d" content="\u201dtrue\u201d" />\n  \x3c!--QQ\u5f3a\u5236\u5168\u5c4f--\x3e\n  <meta name="\u201dbrowsermode\u201d" content="\u201dapplication\u201d" />\n  \x3c!--UC\u5e94\u7528\u6a21\u5f0f--\x3e\n  <meta name="\u201dx5-page-mode\u201d" content="\u201dapp\u201d" />\n  \x3c!-- QQ\u5e94\u7528\u6a21\u5f0f--\x3e\n  <meta name="\u201dmsapplication-tap-highlight\u201d" content="\u201dno\u201d" />\n  \x3c!--windows phone \u70b9\u51fb\u65e0\u9ad8\u4eae\n\u8bbe\u7f6e\u9875\u9762\u4e0d\u7f13\u5b58--\x3e\n  <meta http-equiv="\u201dpragma\u201d" content="\u201dno-cache\u201d" />\n  <meta http-equiv="\u201dcache-control\u201d" content="\u201dno-cache\u201d" />\n  <meta http-equiv="\u201dexpires\u201d" content="\u201d0\u2033" />\n</head>\n')),(0,l.kt)("h2",{id:"11\u7f51\u9875\u5236\u4f5c\u4f1a\u7528\u5230\u7684\u56fe\u7247\u683c\u5f0f\u6709\u54ea\u4e9b"},"11.\u7f51\u9875\u5236\u4f5c\u4f1a\u7528\u5230\u7684\u56fe\u7247\u683c\u5f0f\u6709\u54ea\u4e9b\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JPEG(\u6216 JPG)\uff1a\u6700\u4e3a\u5e38\u89c1\u7684\u56fe\u7247\u683c\u5f0f\uff0c\u9002\u5408\u5b58\u50a8\u5f69\u8272\u7167\u7247\u6216\u590d\u6742\u7684\u56fe\u50cf\uff0c\u652f\u6301\u4e0d\u540c\u7a0b\u5ea6\u7684\u538b\u7f29\uff0c\u4f46\u4f1a\u635f\u5931\u4e00\u4e9b\u753b\u8d28"),(0,l.kt)("li",{parentName:"ul"},"PNG\uff1aWeb \u5e7f\u6cdb\u4f7f\u7528\u7684\u56fe\u50cf\u683c\u5f0f\uff0c\u652f\u6301\u900f\u660e\u5ea6\u548c\u65e0\u635f\u538b\u7f29\uff0c\u4f46\u6587\u4ef6\u5927\u5c0f\u8f83\u5927"),(0,l.kt)("li",{parentName:"ul"},"GIT\uff1a\u56fe\u50cf\u52a8\u753b\u683c\u5f0f\uff0c\u53ef\u4ee5\u663e\u793a\u591a\u5e27\u52a8\u753b\u6548\u679c\uff0c\u4f46\u989c\u8272\u6570\u91cf\u6709\u9650"),(0,l.kt)("li",{parentName:"ul"},"WebP\uff1aJPG&PNG \u6700\u4f73\u66ff\u4ee3\u56fe\u50cf\u683c\u5f0f\uff0c\u652f\u6301\u65e0\u635f\u548c\u6709\u635f\u538b\u7f29\u3001\u900f\u660e\u5ea6\u548c\u52a8\u753b\u6548\u679c\uff0c\u6587\u4ef6\u5927\u5c0f\u66f4\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"SVG\uff1a\u53ef\u7f29\u653e\u77e2\u91cf\u56fe\u5f62\u683c\u5f0f\uff0c\u9002\u5408\u5b58\u50a8\u7b80\u5355\u7684\u96c6\u5408\u5f62\u72b6\uff0c\u6587\u5b57\u6216\u56fe\u6807\u7b49\uff0c\u53ef\u4ee5\u4efb\u610f\u653e\u5927\u6216\u7f29\u5c0f\u800c\u4e0d\u5931\u771f\u3002")),(0,l.kt)("h2",{id:"12web-\u5f00\u53d1\u4e2d\u4f1a\u8bdd\u8ddf\u8e2a\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b"},"12.web \u5f00\u53d1\u4e2d\u4f1a\u8bdd\u8ddf\u8e2a\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cookie\uff1a\u4f7f\u7528 cookie \u5b58\u50a8\u4f1a\u8bdd\u7684 ID\uff0c\u7136\u540e\u5728\u540e\u7eed\u8bf7\u6c42\u4e2d\u53bb\u9664 ID \u5e76\u4ece\u670d\u52a1\u5668\u4e0a\u67e5\u627e\u4f1a\u8bdd\u7684\u76f8\u5173\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"URL \u91cd\u5199\uff1a\u5728 URL \u4e2d\u9644\u52a0\u4f1a\u8bdd\u7684 ID\uff0c\u7136\u540e\u5728\u540e\u7eed\u8bf7\u6c42\u4e2d\u89e3\u6790 URL \u5e76\u4ece\u670d\u52a1\u5668\u4e0a\u67e5\u627e\u4f1a\u8bdd\u7684\u76f8\u5173\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u9690\u85cf\u8868\u5355\u57df\uff1a\u5728\u8868\u5355\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u9690\u85cf\u7684\u8f93\u5165\u6b3e\uff0c\u7528\u4e8e\u5b58\u50a8\u4f1a\u8bdd\u7684 ID\u201c\uff0c\u7136\u540e\u5728\u63d0\u4ea4\u8868\u5355\u65f6\u5c06 ID \u4f20\u9012\u7ed9\u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"HttpSession \u5bf9\u8c61\uff1a\u4f7f\u7528 HttpSession \u5bf9\u8c61\u6765\u5b58\u50a8\u548c\u7ba1\u7406\u4f1a\u8bdd\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u548c\u76d1\u542c\u5668\u7b49(\u4e2a\u4eba\u7528\u5f97\u8f83\u591a)")),(0,l.kt)("h2",{id:"12\u6269\u5c55canvas-\u6307\u7eb9\u8ffd\u8e2a\u6280\u672f"},"12.(\u6269\u5c55)canvas \u6307\u7eb9\u8ffd\u8e2a\u6280\u672f"),(0,l.kt)("p",null,"canvas \u6307\u7eb9\u8ffd\u8e2a\u6280\u672f\u662f\u4e00\u79cd\u57fa\u4e8e HTML5 \u7684\u7528\u6237\u8ffd\u8e2a\u6280\u672f\uff0c\u5b83\u5229\u7528 canvas \u5143\u7d20\u6765\u7ed8\u5236\u4e00\u4e9b\u56fe\u5f62\uff0c\u5e76\u6839\u636e\u7528\u6237\u7684\u6d4f\u89c8\u5668\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u786c\u4ef6\u7b49\u7279\u5f81\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684\u6307\u7eb9\u3002\u8fd9\u79cd\u6307\u7eb9\u53ef\u4ee5\u7528\u6765\u8bc6\u522b\u548c\u8ffd\u8e2a\u7528\u6237\u7684\u884c\u4e3a\uff0c\u5e76\u4e14\u5f88\u96be\u88ab\u963b\u6321\u6216\u6e05\u9664\u3002"),(0,l.kt)("p",null,"canvas \u6307\u7eb9\u8ffd\u8e2a\u6280\u672f\u7684\u5b9e\u73b0\u6b65\u9aa4\u5927\u81f4\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u89c1\u7684 canvas \u5143\u7d20\uff0c\u5e76\u83b7\u53d6\u5176\u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 canvas \u4e0a\u7ed8\u5236\u4e00\u4e9b\u6587\u5b57\u3001\u56fe\u5f62\u6216\u6e10\u53d8\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 toDataURL \u65b9\u6cd5\u5c06 canvas \u8f6c\u6362\u4e3a\u56fe\u7247\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u56fe\u7247\u6570\u636e\u8fdb\u884c\u54c8\u5e0c\u8fd0\u7b97\uff0c\u5f97\u5230\u4e00\u4e2a\u552f\u4e00\u7684\u5b57\u7b26\u4e32\uff0c\u5373\u4e3a canvas \u6307\u7eb9")),(0,l.kt)("p",null,"\u4f7f\u7528 canvas \u6307\u7eb9\u8ffd\u8e2a\u6280\u672f\u7684\u7f51\u7ad9\u6216\u8f6f\u4ef6\u6709\u5f88\u591a\uff0c\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Facebook"),(0,l.kt)("li",{parentName:"ul"},"Google"),(0,l.kt)("li",{parentName:"ul"},"Twitter"),(0,l.kt)("li",{parentName:"ul"},"Amazon"),(0,l.kt)("li",{parentName:"ul"},"Netflix")),(0,l.kt)("p",null,"\u610f\u4e49\uff1a\u5229\u7528 canvas \u6307\u7eb9\u6765\u8bc6\u522b\u548c\u8ddf\u8e2a\u7528\u6237\u7684\u884c\u4e3a\uff0c\u4ee5\u63d0\u4f9b\u66f4\u4e2a\u6027\u5316\u7684\u670d\u52a1\u6216\u5e7f\u544a"),(0,l.kt)("h2",{id:"13\u56fe\u7247\u5c55\u793a\u65b9\u9762\u4f18\u5316"},"13.\u56fe\u7247\u5c55\u793a\u65b9\u9762\u4f18\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u5728\u9875\u9762\u4e0a\u7684\u672a\u53ef\u89c6\u533a\u57df\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u6eda\u52a8\u4e8b\u4ef6\uff0c\u5224\u65ad\u56fe\u7247\u4f4d\u7f6e\u4e0e\u6d4f\u89c8\u5668\u9876\u7aef\u7684\u8ddd\u79bb\u4e0e\u9875\u9762\u7684\u8ddd\u79bb\uff0c\u5982\u679c\u524d\u8005\u5c0f\u4e8e\u540e\u8005\uff0c\u4f18\u5148\u52a0\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3a\u5e7b\u706f\u7247\u3001\u76f8\u518c\u7b49\uff0c\u53ef\u4ee5\u4f7f\u7528\u56fe\u7247\u9884\u52a0\u8f7d\u6280\u672f\uff0c\u5c06\u5f53\u524d\u5c55\u793a\u56fe\u7247\u7684\u524d\u4e00\u5f20\u4e0e\u540e\u4e00\u5f20\u4f18\u5148\u4e0b\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u56fe\u7247\u4e3a css \u56fe\u7247\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"CSSsprite"),",",(0,l.kt)("inlineCode",{parentName:"li"},"SVSsprite"),",",(0,l.kt)("inlineCode",{parentName:"li"},"Iconfont"),",",(0,l.kt)("inlineCode",{parentName:"li"},"Base64"),"\u7b49\u6280\u672f"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u56fe\u7247\u8fc7\u5927\uff0c\u53ef\u4ee5\u4f7f\u7528\u7279\u6b8a\u7f16\u7801\u7684\u56fe\u7247\uff0c\u52a0\u8f7d\u65f6\u4f1a\u4f18\u5148\u52a0\u8f7d\u4e00\u5f20\u538b\u7f29\u7684\u7279\u522b\u5389\u5bb3\u7684\u7f29\u7565\u56fe\uff0c\u4ee5\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u56fe\u7247\u5c55\u793a\u533a\u57df\u5c0f\u4e8e\u56fe\u7247\u7684\u771f\u5b9e\u5927\u5c0f\uff0c\u5219\u56e0\u5728\u670d\u52a1\u5668\u7aef\u6839\u636e\u4e1a\u52a1\u9700\u8981\u5148\u884c\u8fdb\u884c\u56fe\u7247\u538b\u7f29\uff0c\u56fe\u7247\u538b\u7f29\u540e\u5927\u5c0f\u4e0e\u5c55\u793a\u4e00\u81f4")),(0,l.kt)("h2",{id:"14\u4e3a\u4ec0\u4e48\u4f7f\u7528\u591a\u4e2a\u57df\u540d\u6765\u5b58\u50a8\u7f51\u7ad9\u8d44\u6e90\u4f1a\u66f4\u6709\u6548"},"14.\u4e3a\u4ec0\u4e48\u4f7f\u7528\u591a\u4e2a\u57df\u540d\u6765\u5b58\u50a8\u7f51\u7ad9\u8d44\u6e90\u4f1a\u66f4\u6709\u6548\uff1f"),(0,l.kt)("p",null,"\u8fd9\u5c31\u4e0d\u5f97\u4e0d\u63d0 vercel \u4e00\u4e2a\u7f51\u7ad9\u7ed9\u914d\u4e09\u4e2a\u57df\u540d\u7684\u6545\u4e8b\u4e86"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CDN"),"\u7f13\u5b58\u66f4\u65b9\u4fbf"),(0,l.kt)("li",{parentName:"ul"},"\u7a81\u7834\u6d4f\u89c8\u5668\u5e76\u53d1\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u7ea6",(0,l.kt)("inlineCode",{parentName:"li"},"cookie"),"\u5e26\u5bbd"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u7ea6\u4e3b\u57df\u540d\u7684\u8fde\u63a5\u6570\uff0c\u4f18\u5316\u9875\u9762\u54cd\u5e94\u901f\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u9632\u6b62\u4e0d\u5fc5\u8981\u7684\u5b89\u5168\u95ee\u9898")))}s.isMDXComponent=!0},8259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cls-defer-4572752a596f1fef6547840fe955f3bf.png"}}]);