"use strict";(self.webpackChunkfe_study=self.webpackChunkfe_study||[]).push([[9001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||p;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const p={title:"Vue\u6e90\u7801\u89e3\u8bfb\u2014\u2014createApp",description:"\u521b\u5efaApp\u5b9e\u4f8b\u7684\u65f6\u5019\u53d1\u751f\u4e86\u4ec0\u4e48",slug:"vue",authors:[{name:"chovrio",title:"\u65e0",url:"https://github.com/chovrio",image_url:"https://github.com/chovrio.png"}],tags:["vue"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},o="Vue \u6e90\u7801\u89e3\u8bfb\uff08\u4e00\uff09createApp",i={permalink:"/festudy/blog/vue",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Vue\u6e90\u7801\u89e3\u8bfb\uff08\u4e00\uff09createApp.md",source:"@site/blog/Vue\u6e90\u7801\u89e3\u8bfb\uff08\u4e00\uff09createApp.md",title:"Vue\u6e90\u7801\u89e3\u8bfb\u2014\u2014createApp",description:"\u521b\u5efaApp\u5b9e\u4f8b\u7684\u65f6\u5019\u53d1\u751f\u4e86\u4ec0\u4e48",date:"2023-09-04T08:26:53.000Z",formattedDate:"September 4, 2023",tags:[{label:"vue",permalink:"/festudy/blog/tags/vue"}],readingTime:9.285,hasTruncateMarker:!1,authors:[{name:"chovrio",title:"\u65e0",url:"https://github.com/chovrio",image_url:"https://github.com/chovrio.png",imageURL:"https://github.com/chovrio.png"}],frontMatter:{title:"Vue\u6e90\u7801\u89e3\u8bfb\u2014\u2014createApp",description:"\u521b\u5efaApp\u5b9e\u4f8b\u7684\u65f6\u5019\u53d1\u751f\u4e86\u4ec0\u4e48",slug:"vue",authors:[{name:"chovrio",title:"\u65e0",url:"https://github.com/chovrio",image_url:"https://github.com/chovrio.png",imageURL:"https://github.com/chovrio.png"}],tags:["vue"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},nextItem:{title:"HTTP\u534f\u8bae",permalink:"/festudy/blog/http\u534f\u8bae"}},l={authorsImageUrls:[void 0]},c=[{value:"Vue \u6e90\u7801\u7ed3\u6784",id:"vue-\u6e90\u7801\u7ed3\u6784",level:2},{value:"Vue \u6a21\u677f\u7f16\u8bd1",id:"vue-\u6a21\u677f\u7f16\u8bd1",level:2},{value:"createApp",id:"createapp",level:2},{value:"ensureRenderer \u51fd\u6570",id:"ensurerenderer-\u51fd\u6570",level:3},{value:"createAppAPI",id:"createappapi",level:3},{value:"mount \u65b9\u6cd5",id:"mount-\u65b9\u6cd5",level:3}],u={toc:c},s="wrapper";function d(e){let{components:n,...p}=e;return(0,a.kt)(s,(0,r.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-\u6e90\u7801\u7ed3\u6784"},"Vue \u6e90\u7801\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"version \u7248\u672c 3.3.0-beta.1")),(0,a.kt)("p",null,"packages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"\u251c\u2500\u2500 compiler-core // \u62bd\u8c61\u8bed\u6cd5\u6811\u548c\u6e32\u67d3\u6865\u63a5\u5b9e\u73b0\u7684\u6838\u5fc3\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 compiler-dom // \u63d0\u4f9b\u5c06\u6a21\u677f\u7f16\u8bd1\u6210\u6d4f\u89c8\u5668\u539f\u751f DOM \u5143\u7d20\u6e32\u67d3\u51fd\u6570\u7684\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 compiler-sfc // \u63d0\u4f9b\u5c06\u5355\u6587\u4ef6\u7ec4\u4ef6\uff08Vue \u5355\u6587\u4ef6\u7ec4\u4ef6\uff0c\u5373 .vue \u6587\u4ef6\uff09\u89e3\u6790\u6210 JavaScript \u5bf9\u8c61\u7684\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 compiler-ssr // \u63d0\u4f9b\u5728\u670d\u52a1\u7aef\u6e32\u67d3 (SSR) \u671f\u95f4\u7528\u4e8e\u7f16\u8bd1\u548c\u5448\u73b0 Vue \u7ec4\u4ef6\u7684\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 dts-test // \u63d0\u4f9b\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u6d4b\u8bd5\u5de5\u5177\u3002\n\u251c\u2500\u2500 reactivity // \u63d0\u4f9b\u5185\u90e8\u54cd\u5e94\u5f0f\u7cfb\u7edf\u7684\u5b9e\u73b0\uff0c\u652f\u6301\u5728\u5bf9\u8c61\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u66f4\u65b0\u76f8\u5173\u89c6\u56fe\u3002\n\u251c\u2500\u2500 runtime-core // \u63d0\u4f9b Vue \u8fd0\u884c\u65f6\u7684\u6838\u5fc3\u5b9e\u73b0\uff0c\u5305\u62ec vnode \u548c patch \u7b49\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 runtime-dom // \u63d0\u4f9b Vue \u8fd0\u884c\u65f6\u4e0e\u6d4f\u89c8\u5668 DOM \u7684\u4ea4\u4e92\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 runtime-test // \u63d0\u4f9b\u8fd0\u884c\u65f6\u6d4b\u8bd5\u5de5\u5177\u3002\n\u251c\u2500\u2500 server-renderer // \u63d0\u4f9b\u5c06 Vue \u7ec4\u4ef6\u5448\u73b0\u4e3a\u5b57\u7b26\u4e32\u7684\u670d\u52a1\u7aef\u6e32\u67d3\u5f15\u64ce\u3002\n\u251c\u2500\u2500 sfc-playground // \u63d0\u4f9b\u5355\u6587\u4ef6\u7ec4\u4ef6\u5728\u7ebf\u7f16\u8f91\u5668\u7684\u5b9e\u73b0\u3002\n\u251c\u2500\u2500 shared  // \u6536\u96c6 packages \u4e4b\u95f4\u53ef\u5171\u4eab\u7684\u5de5\u5177\u5e93\u3002\n\u251c\u2500\u2500 size-check // \u63d0\u4f9b\u7528\u4e8e\u68c0\u67e5\u4ee3\u7801\u5927\u5c0f\u5e76\u751f\u6210\u5386\u53f2\u8bb0\u5f55\u7684\u5de5\u5177\u3002\n\u251c\u2500\u2500 template-explorer // \u63d0\u4f9b\u7528\u4e8e\u67e5\u770b\u548c\u5206\u6790 Vue.js \u6a21\u677f\u7684\u5728\u7ebf\u5de5\u5177\u3002\n\u251c\u2500\u2500 vue // \u63d0\u4f9b\u96c6\u6210\u4e86 runtime-core \u548c runtime-dom \u7684\u5b8c\u6574\u5305\uff08Vue.js\uff09\u3002\n\u251c\u2500\u2500 vue-compat // \u63d0\u4f9b\u5411\u540e\u517c\u5bb9\u6027\u652f\u6301\u7684\u5b9e\u73b0\u3002\n\u2514\u2500\u2500 global.d.ts\n")),(0,a.kt)("p",null,"\u6bd4\u8f83\u6838\u5fc3\u7684\u5305:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"compiler-core"),(0,a.kt)("li",{parentName:"ul"},"compiler-dom"),(0,a.kt)("li",{parentName:"ul"},"runtime-core"),(0,a.kt)("li",{parentName:"ul"},"runtime-dom"),(0,a.kt)("li",{parentName:"ul"},"reactivity")),(0,a.kt)("h2",{id:"vue-\u6a21\u677f\u7f16\u8bd1"},"Vue \u6a21\u677f\u7f16\u8bd1"),(0,a.kt)("p",null,"\u5728\u4ecb\u7ecd createApp \u8fd9\u4e2a\u51fd\u6570\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u4e86\u89e3\u4ee5\u4e0b Vue \u7684\u6a21\u677f\u7f16\u8bd1\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u7684\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230422213310644",src:t(5558).Z,width:"849",height:"648"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'// App-options.vue \u914d\u7f6e\u5f0fApi\n<template>\n  <div>\u6211\u662f{{ name }}\u73b0\u5728{{ age }}</div>\n</template>\n<script lang="ts">\nexport default {\n  data() {\n    return {\n      name: "\u62fe\u53c1",\n      age: 20,\n    };\n  },\n};\n<\/script>\n// App-setup.vue \u7ec4\u5408\u5f0fApi\u8bed\u6cd5\u7cd6\n<template>\n  <div>\u6211\u662f{{ name }}\u73b0\u5728{{ age }}</div>\n</template>\n<script lang="ts" setup>\nconst { ref } = Vue;\nconst name = ref("\u62fe\u53c1");\nconst age = ref(20);\n<\/script>\n// App-composition.vue \u7ec4\u5408\u5f0fApi\n<template>\n  <div>\u6211\u662f{{ name }}\u73b0\u5728{{ age }}</div>\n</template>\n<script lang="ts">\nconst { ref } = Vue;\nexport default {\n  setup() {\n    const name = ref("\u62fe\u53c1");\n    const age = ref(20);\n    return {\n      name,\n      age,\n    };\n  },\n};\n<\/script>\n')),(0,a.kt)("p",null,"\u8fd9\u4e09\u4e2a\u6587\u4ef6\u88ab\u7f16\u8bd1\u540e\u7684\u7ed3\u679c\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230422213541326",src:t(9844).Z,width:"458",height:"475"})),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u7ec4\u5408\u5f0f Api \u548c\u54cd\u5e94\u5f0f Api \u7684 vue \u5355\u6587\u4ef6\u7f16\u8bd1\u540e\u7ed3\u679c\u5176\u5b9e\u662f\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\u7684\uff0csetup \u548c data \u5b83\u4eec\u7684\u672c\u8d28\u662f\u4e00\u6837\u7684\u77e5\u8bc6\u540d\u5b57\u4e0d\u4e00\u6837\u800c\u5df2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230422213846761",src:t(8044).Z,width:"847",height:"218"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"__file"),"\u5c31\u662f\u5f53\u524d\u6587\u4ef6\u7684\u672c\u5730\u5730\u5740\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"render"),"\u662f\u6e32\u67d3\u51fd\u6570\uff0c\u672c\u8d28\u4e0a\u662f\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/compiler-sfc"),"\u5c06\u5355\u6587\u4ef6\u7ec4\u4ef6\uff08Vue \u5355\u6587\u4ef6\u7ec4\u4ef6\uff0c\u5373 .vue \u6587\u4ef6\uff09\u89e3\u6790\u6210 JavaScript \u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c31\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),"\u8bed\u6cd5\u7cd6\u7684\u6587\u4ef6\u6765\u770b\u770b createApp \u8fd9\u4e2a\u51fd\u6570\u5728\u4f20\u5165\u4e86 App.vue \u5355\u6587\u4ef6\u7f16\u8bd1\u540e\u5bf9\u8c61\u540e\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u3002"),(0,a.kt)("h2",{id:"createapp"},"createApp"),(0,a.kt)("p",null,"\u6839\u636e\u65ad\u70b9\u6211\u4eec\u53ef\u4ee5\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),"\u8fd9\u4e2a\u51fd\u6570\u88ab\u5b9a\u4e49\u5728\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/runtime-dom/src/index.ts"),"\u7684\u7b2c 65 \u884c\u5de6\u53f3\uff0c\u5b83\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"ensureRenderer"),"\u8fd9\u4e2a\u65b9\u6cd5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ensureRenderer"),"\u6709\u8fd4\u56de\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),"\u65b9\u6cd5\uff0c\u901a\u8fc7\u8fd4\u56de\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),"\u65b9\u6cd5\uff0c\u518d\u4f20\u5165\u6211\u4eec\u4f20\u5165\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"App"),"\u6a21\u677f\uff0c\u521b\u5efa\u597d\u4e86\u6211\u4eec\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"app"),"\u5e94\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// https://github.com/vuejs/core/blob/main/packages/runtime-dom/src/index.ts#L65\nexport const createApp = ((...args) => {\n  const app = ensureRenderer().createApp(...args);\n  // \u8fd9\u91cc\u628a\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u8c03\u8bd5\u4ee3\u7801\u548c \u5bf9 app \u7684 mount \u65b9\u6cd5\u7684\u91cd\u5199\u5168\u5220\u9664\u4e86\uff0c\u540e\u9762\u4f1a\u8bb2\n  return app;\n}) as CreateAppFunction<Element>;\n")),(0,a.kt)("h3",{id:"ensurerenderer-\u51fd\u6570"},"ensureRenderer \u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u5927\u4f53\u903b\u8f91\u6bd4\u8f83\u7b80\u5355"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// renderder\u662f\u5728\u4e0a\u9762\u5b9a\u4e49\u7684\u6ca1\u6709\u521d\u59cb\u503c\nlet renderer: Renderer<Element | ShadowRoot> | HydrationRenderer;\n// https://github.com/vuejs/core/blob/main/packages/runtime-dom/src/index.ts#L41\nfunction ensureRenderer() {\n  // renderer \u5b58\u5728\u5c31\u8fd4\u56de\u4e0d\u5b58\u5728\u5c31\u521b\u5efa\u4e00\u4e2a\n  return (\n    renderer ||\n    (renderer = createRenderer<Node, Element | ShadowRoot>(rendererOptions))\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createRenderer"),"\u8fd9\u4e2a\u51fd\u6570\u6765\u81ea\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/runtime-core"),"\uff0c\u4f20\u5165\u7684\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"rendererOptions"),"\u5219\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/runtime-dom/src/index.ts"),"\u4e0b\u5b9a\u4e49\u597d\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n    1.extend\u5176\u5b9e\u5c31\u662f Object.assign \u7528\u4e8e\u5408\u5e76\u4e24\u4e2a\u5bf9\u8c61\n    2.nodeOps\uff1a\u5b58\u50a8\u64cd\u4f5c\u548c\u83b7\u53d6\u8282\u70b9\u7684\u51fd\u6570\u7684\u5bf9\u8c61\n    3.patchProp\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u66f4\u65b0\u8282\u70b9\uff0c\u56e0\u4e3a\u5b83\u4ec5\u4ec5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e3a\u4e86\u5408\u5e76\u5f97\u7528\u5bf9\u8c61\u5305\u88f9\n*/\nconst rendererOptions = /*#__PURE__*/ extend({ patchProp }, nodeOps);\n")),(0,a.kt)("p",null,"\u4f20\u5165\u4e86 rendererOptions \u8fd9\u4e2a\u53c2\u6570\u7ed9 createRenderer \u540e\uff0ccreateRenderer \u53c8\u8c03\u7528\u4e86\u53e6\u4e00\u4e2a\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"baseCreateRenderer"),",\u4e0b\u9762\u662f baseCreateRenderer \u7684\u4e00\u4e9b\u5173\u952e\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// https://github.com/vuejs/core/blob/main/packages/runtime-core/src/renderer.ts#L313\n/**\n * \u539f\u51fd\u6570\u4e2d\u662f\u4f7f\u7528\u4e86\u51fd\u6570\u91cd\u8f7d\uff0c\u5c31\u4e24\u79cd\u7c7b\u578b\uff0c\u5b58\u5728\u521b\u5efa\u6c34\u548c\u51fd\u6570\uff0c\u8fd4\u56de\u6c34\u548c\u540e\u7684renderer\uff0c\n * \u4e0d\u5b58\u5728\u6c34\u548c\u51fd\u6570\uff0c\u8fd4\u56de\u666e\u901arenderer\uff0c\u6211\u4eec\u8fd9\u91cc\u7684\u60c5\u51b5\u662f\u6ca1\u6709\u4f20\u5165\u521b\u5efa\u6c34\u548c\u51fd\u6570\uff0c\n * \u7b80\u5355\u63d0\u4e00\u5634\uff0c\u6c34\u548c\u662fSSR\u6e32\u67d3\u7684\u5173\u952e\n */\nfunction baseCreateRenderer(options, createHydrationFns? = undefined) {\n  // render\u51fd\u6570\u7684\u4f5c\u7528\u662f\u5c06vnode(\u865a\u62dfDOM\u8282\u70b9)\u6e32\u67d3\u5230\u6307\u5b9a\u7684container(\u771f\u5b9eDOM\u5bb9\u5668)\u4e2d\n  const render: RootRenderFunction = (vnode, container, isSVG) => {\n    // \u5982\u679c\u865a\u62dfDOM\u8282\u70b9\u4e3anull\n    if (vnode == null) {\n      // \u4e14\u5bb9\u5668\u4e0a\u5df2\u7ecf\u6302\u8f7d\u4e86_vnode(\u4e4b\u524d\u6e32\u67d3\u51fa\u6765\u7684\u865a\u62dfDOM)\n      if (container._vnode) {\n        // \u5378\u8f7d\u6389\u4e4b\u524d\u6302\u8f7d\u7684\u5185\u5bb9\uff0c\u8fd9\u91cc\u7684unmount\u5728baseCreateRenderer\u51fd\u6570\u5185\uff0c\u6211\u7ed9\u5220\u6389\u4e86\n        unmount(container._vnode, null, null, true);\n      }\n    }\n    // \u5982\u679cvnode\u4e0d\u4e3anull\n    else {\n      // \u901a\u8fc7patch\u51fd\u6570\u5c06\u5bb9\u5668\u4e0a\u7684\u65e7\u7684_vnode\u4e0e\u6700\u65b0\u7684vnode\u8fdb\u884c\u6bd4\u8f83\n      // \u5982\u679c\u4e00\u6837\u5c31\u76f4\u63a5return\uff0c\u4e0d\u4e00\u6837\u5c31\u5c06\u6700\u65b0\u7684\u6e32\u67d3\u5230container\n      patch(\n        container._vnode || null,\n        vnode,\n        container,\n        null,\n        null,\n        null,\n        isSVG\n      );\n    }\n    // \u6267\u884c\u9884\u5148\u6e32\u67d3\u51fd\u6570\u961f\u5217\u4e2d\u7684\u51fd\u6570(\u4f8b\u5982watch\u56de\u8c03\u51fd\u6570)\n    flushPreFlushCbs();\n    // \u6267\u884c\u540e\u7f6e\u6e32\u67d3\u51fd\u6570\u961f\u5217\u4e2d\u7684\u56de\u8c03\u51fd\u6570(\u4f8b\u5982$nextTick)\n    flushPostFlushCbs();\n    // \u66f4\u65b0_vnode\u6307\u5411\n    container._vnode = vnode;\n  };\n  // \u56e0\u4e3a\u6211\u4eec\u8fd9\u91cc\u538b\u6839\u5c31\u6ca1\u4f7f\u7528SSR\u6e32\u67d3\uff0c\u6240\u4ee5\u4e0b\u9762\u4e24\u4e2a\u90fd\u662fundefined\n  let hydrate: ReturnType<typeof createHydrationFunctions>[0] | undefined;\n  let hydrateNode: ReturnType<typeof createHydrationFunctions>[1] | undefined;\n  return {\n    render,\n    hydrate,\n    createApp: createAppAPI(render, hydrate),\n  };\n}\n")),(0,a.kt)("h3",{id:"createappapi"},"createAppAPI"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u662f\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u6211\u4eec\u771f\u6b63\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),"\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// https://github.com/vuejs/core/blob/main/packages/runtime-core/src/apiCreateApp.ts#L199\nexport function createAppAPI<HostElement>(\n  render: RootRenderFunction<HostElement>,\n  hydrate?: RootHydrateFunction\n): CreateAppFunction<HostElement> {\n  // \u8fd4\u56de\u771f\u6b63\u7684createApp\u51fd\u6570 \u53c2\u6570\u662f\u6839\u7ec4\u4ef6\u548c\u5b83\u7684props\u53c2\u6570\u6ca1\u6709\u5c31\u4e3anull\n  return function createApp(rootComponent, rootProps = null) {\n    // \u5982\u679c\u6839\u7ec4\u4ef6\u662f\u51fd\u6570\u7ec4\u4ef6\u5c31\u4f7f\u7528extend\u5c06\u5b83\u653e\u5728\u4e00\u4e2a\u5bf9\u8c61\u91cc\u9762\n    if (!isFunction(rootComponent)) {\n      rootComponent = extend({}, rootComponent)\n    }\n    /** \u521b\u5efa\u6839\u7ec4\u4ef6\u4e0a\u4e0b\u6587 */\n    const context = createAppContext()\n    const app: App = (context.app = {\n        // \u7701\u7565\u4e00\u5927\u5768....\n        // \u5c31\u662fapp\u5bf9\u8c61\uff0cmount\u65b9\u6cd5\u5c31\u5728\u91cc\u9762\n    }\n    /** __COMPAT__ \u662f\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u7528\u4e8e\u6807\u8bb0\u662f\u5426\u5904\u4e8e\u517c\u5bb9\u6a21\u5f0f */\n    if (__COMPAT__) {\n      /**\n       * \u5728\u517c\u5bb9\u6a21\u5f0f\u4e0b\u4e3aapp\u5b89\u88c5\u4e00\u4e9b\u5c5e\u6027($attrs\u548c$listeners)\n       * \u4e3acontext\u52a0\u5165compatConfig\u7684\u5c5e\u6027\n       * \u4e3b\u8981\u662f\u4e3a\u4e86\u5411\u540e\u517c\u5bb9vue2\n       */\n      installAppCompatProperties(app, context, render)\n    }\n    return app\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230423105721466",src:t(4062).Z,width:"367",height:"310"})),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c31\u628a CSR(\u5ba2\u6237\u7aef\u6e32\u67d3\u7684 createApp \u6d41\u7a0b\u8d70\u901a\u4e86)"),(0,a.kt)("h3",{id:"mount-\u65b9\u6cd5"},"mount \u65b9\u6cd5"),(0,a.kt)("p",null,"\u6700\u540e\u518d\u4ecb\u7ecd\u4e00\u4e0b app \u5bf9\u8c61\u91cc\u9762\u7684 mount \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/** \u6807\u8bc6\u7ec4\u4ef6\u662f\u5426\u6302\u8f7d */\nlet isMounted = false\nconst app: App = (context.app = {\n    ...\n    mount(\n        rootContainer: HostElement,\n        isHydrate?: boolean,\n        isSVG?: boolean\n    ): any {\n        // \u6ca1\u6709\u6302\u8f7d\u5c31\u521b\u5efa\u865a\u62dfDOM \u53c2\u6570\u662f\u6839\u7ec4\u4ef6\u548cprops\u53c2\u6570(\u5c31\u662fcreateApp\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570)\n        if (!isMounted) {\n          const vnode = createVNode(\n            rootComponent as ConcreteComponent,\n            rootProps\n          )\n        vnode.appContext = context\n          /** \u5224\u65ad\u662f\u5426\u662f\u670d\u52a1\u7aef\u6e32\u67d3 */\n          if (isHydrate && hydrate) {\n            hydrate(vnode as VNode<Node, Element>, rootContainer as any)\n          } else {\n          /** \u4e0d\u662f\u5c31\u8c03\u7528render\u51fd\u6570\uff0c\u8fd9\u91cc\u7684render\u51fd\u6570\u662f\u6211\u4eec\u4e4b\u524d\u4f20\u5165\u7684 */\n            render(vnode, rootContainer, isSVG)\n          }\n          /** render\u6210\u529f\u540e\u7ec4\u4ef6\u6302\u8f7d\u6210\u529f */\n        isMounted = true\n        /** \u6807\u8bc6\u521b\u5efa\u7684Vue\u5b9e\u4f8b\u7684\u6839\u5bb9\u5668 */\n        app._container = rootContainer\n        /** __vue__app\u6307\u5411vue\u7ec4\u4ef6\u5b9e\u4f8b \u5305\u542b\u865a\u62dfDOM\u548c\u5176\u4ed6\u5c5e\u6027\u6bd4\u5982mount unmount.... */\n        (rootContainer as any).__vue_app__ = app\n        // \u8fd4\u56deApp\u5e94\u7528\u5b9e\u4f8b\u7684\u5e94\u7528\uff0c\u4e0a\u9762\u5b58\u5728\u5f88\u591a\u65b9\u6cd5\n        return getExposeProxy(vnode.component!) || vnode.component!.proxy\n    }\n    ...\n    }\n})\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230423120847058",src:t(1027).Z,width:"564",height:"370"})))}d.isMDXComponent=!0},5558:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-0-914993c6b54a7b5a6716457032334f9a.png"},9844:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-1-6613c9671b433c410c773c3fb68a5c88.png"},8044:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-2-1f3ba5be6edd67a678771229e2853649.png"},4062:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-3-c927fcda46931d01717f1c8b10d433e3.png"},1027:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-4-d6be5e3b3af7650b48662b049ed9de9f.png"}}]);