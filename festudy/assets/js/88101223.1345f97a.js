"use strict";(self.webpackChunkfe_study=self.webpackChunkfe_study||[]).push([[443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,b=s["".concat(p,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(b,l(l({ref:t},i),{},{components:r})):n.createElement(b,l({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"WebSocket\u5165\u95e8"},l=void 0,c={unversionedId:"advance/WebSocket",id:"advance/WebSocket",title:"WebSocket\u5165\u95e8",description:"\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5",source:"@site/docs/advance/WebSocket.md",sourceDirName:"advance",slug:"/advance/WebSocket",permalink:"/festudy/docs/advance/WebSocket",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advance/WebSocket.md",tags:[],version:"current",frontMatter:{title:"WebSocket\u5165\u95e8"},sidebar:"tutorialSidebar",previous:{title:"WebRTC\u5165\u95e8",permalink:"/festudy/docs/advance/WebRTC"},next:{title:"react \u76f8\u5173",permalink:"/festudy/docs/react/"}},p={},u=[{value:"\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5",id:"\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u4e0e http \u7684\u4e00\u4e9b\u6bd4\u8f83",id:"\u4e0e-http-\u7684\u4e00\u4e9b\u6bd4\u8f83",level:2}],i={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5"},"\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebSocket \u662f\u4e00\u79cd\u5728\u5355\u4e2a TCP \u8fde\u63a5\u4e0a\u8fdb\u884c\u5168\u53cc\u5de5\u901a\u4fe1\u7684\u534f\u8bae\uff0c\u5b83\u662f HTML5 \u4e2d\u7684\u4e00\u90e8\u5206\uff0c\u7531 W3C \u6807\u51c6\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"WebSocket \u63d0\u4f9b\u4e86\u53cc\u5411\u901a\u4fe1\u7684\u80fd\u529b\uff0c\u5141\u8bb8\u670d\u52a1\u5668\u4e3b\u52a8\u53d1\u9001\u6d88\u606f\u7ed9\u5ba2\u6237\u7aef\u3002\u8fd9\u4f7f\u5f97 WebSocket \u6210\u4e3a\u5b9e\u65f6 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u7406\u60f3\u9009\u62e9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 WebSocket API \u4e2d\uff0c\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u53ea\u9700\u8981\u5b8c\u6210\u4e00\u6b21\u63e1\u624b\uff0c\u7136\u540e\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u5c31\u53ef\u4ee5\u521b\u5efa\u6301\u4e45\u8fde\u63a5\uff0c\u5e76\u8fdb\u884c\u53cc\u5411\u6570\u636e\u4f20\u8f93\u3002")),(0,a.kt)("h2",{id:"\u4e0e-http-\u7684\u4e00\u4e9b\u6bd4\u8f83"},"\u4e0e http \u7684\u4e00\u4e9b\u6bd4\u8f83"),(0,a.kt)("p",null,"WebSocket \u548c HTTP \u90fd\u662f\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u4f46\u662f\u5b83\u4eec\u6709\u5f88\u5927\u7684\u533a\u522b\u3002HTTP \u662f\u4e00\u79cd\u65e0\u72b6\u6001\u534f\u8bae\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u662f\u72ec\u7acb\u7684\uff0c\u670d\u52a1\u5668\u4e0d\u4f1a\u4fdd\u7559\u4efb\u4f55\u5ba2\u6237\u7aef\u7684\u6570\u636e\u3002\u800c WebSocket \u662f\u4e00\u79cd\u6709\u72b6\u6001\u534f\u8bae\uff0c\u5b83\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u5efa\u7acb\u4e86\u4e00\u4e2a\u6301\u4e45\u8fde\u63a5\uff0c\u4f7f\u5f97\u670d\u52a1\u5668\u53ef\u4ee5\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u6d88\u606f\u3002\u6b64\u5916\uff0cHTTP \u662f\u57fa\u4e8e\u8bf7\u6c42/\u54cd\u5e94\u6a21\u578b\u7684\uff0c\u5ba2\u6237\u7aef\u5fc5\u987b\u5148\u53d1\u9001\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u624d\u80fd\u54cd\u5e94\u3002\u800c WebSocket \u662f\u5168\u53cc\u5de5\u901a\u4fe1\u7684\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u53ef\u4ee5\u540c\u65f6\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u5dee\u5f02")),(0,a.kt)("p",null,"\u4f20\u7edf HTTP \u8fde\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"## \u666e\u901a\u8fde\u63a5\nhttp://localhost:80/test\n## \u5b89\u5168\u8fde\u63a5\nhttps://localhost:80/test\n")),(0,a.kt)("p",null,"webSocket \u8fde\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"## \u666e\u901a\u8fde\u63a5\nws://localhost:80/test\n## \u5b89\u5168\u8fde\u63a5\nwss://localhost:80/test\n")),(0,a.kt)("p",null,"websocket \u7684\u4e00\u4e9b\u8981\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d88\u606f\u63a8\u9001(\u540c\u6b65)"),(0,a.kt)("li",{parentName:"ul"},"webrtc \u4fe1\u4ee4\u670d\u52a1")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f websocket"),(0,a.kt)("li",{parentName:"ol"},"websocket \u548c http \u7684\u533a\u522b"),(0,a.kt)("li",{parentName:"ol"},"websocket \u5efa\u7acb\u8fde\u63a5\u548c\u7ed3\u675f\u8fde\u63a5")))}d.isMDXComponent=!0}}]);