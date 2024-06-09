(self.webpackChunkweb_site=self.webpackChunkweb_site||[]).push([[91],{8877:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_REFERENCE=t.BASIC_FIXED=t.BASIC_MAX_STRING=t.BASIC_MIN_STRING=t.BASIC_MAX_NUMBER=t.BASIC_MIN_NUMBER=void 0,t.BASIC_MIN_NUMBER=0,t.BASIC_MAX_NUMBER=65535,t.BASIC_MIN_STRING=2,t.BASIC_MAX_STRING=10,t.BASIC_FIXED=2,t.MAX_REFERENCE=3},6406:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Mock=void 0;const i=s(r(2018)),o=r(6037),u=r(6393),c=r(8877);class l{source;sourceFile;map;constructor(e){this.source=e,this.map=new Map,this.sourceFile=this.createSourceFile(),this.collect()}createSourceFile(){return i.createSourceFile("example.ts",this.source,i.ScriptTarget.Latest,!0)}collect(){this.sourceFile.forEachChild((e=>{(i.isInterfaceDeclaration(e)||i.isTypeAliasDeclaration(e)||i.isEnumDeclaration(e)||i.isModuleDeclaration(e))&&this.map.set(e.name.text,e)}))}generate(e,t){void 0===t&&(t={});const r=this.map.get(e);if(!r)return{code:404,error:`\u672a\u5728\u7c7b\u578b\u6587\u4ef6\u4e2d\u627e\u5230\u7c7b\u578b${e}`};const n={};switch(r.kind){case i.SyntaxKind.InterfaceDeclaration:return r.members.forEach((r=>{if(i.isPropertySignature(r)){const a=r.name.getText();t.$$pre_type=e;let s=null;if(t[a]&&"object"==typeof t[a]){const e=t[a];s=this.generateCustom(r.type,e)}else s=this.generateByType(r.type,{...t});n[a]=s}})),n;case i.SyntaxKind.EnumDeclaration:{const e=r,t=e.members[(0,u.randomNum)(0,e.members.length-1)];let n=t.name.getText();return n=t.initializer?.getText()||n,{value:n}}default:return{}}}generateBasic(e,t){if(void 0===t&&(t={}),!e)return null;switch(e.kind){case i.SyntaxKind.StringKeyword:return this.generateString({type:"string"});case i.SyntaxKind.NumberKeyword:return this.generateNumber({type:Math.random()>=.5?"number":"number_float"});case i.SyntaxKind.TypeReference:return this.generateReference(e,{...t});case i.SyntaxKind.ArrayType:const r=[];return this.execCount((()=>r.push(this.generateByType(e.elementType,{...t}))),10),r;default:return null}}generateByType(e,t){return void 0===t&&(t={}),e?t.$$reference&&t.$$reference>=c.MAX_REFERENCE?void 0:(e.getText()===t.$$pre_type&&(t.$$reference=t.$$reference?t.$$reference+1:1),this.map.has(e.getText())?this.generate(e.getText(),{...t}):this.generateBasic(e,{...t})):null}generateReference(e,t,r){void 0===t&&(t={}),void 0===r&&(r=10);switch(e.typeName.getText()){case"Map":{const n=new Map,a=e.typeArguments?.[0]?.getText();if(e.typeArguments?.[0]&&this.map.has(a)){this.map.get(a).members.forEach((r=>{let a=r.name.getText();a=r.initializer?.getText()||a,n.set(a,this.generateByType(e.typeArguments?.[1],{...t}))}))}else this.execCount((()=>{const r=this.generateByType(e.typeArguments?.[0],{...t});n.set(r.value||r,this.generateByType(e.typeArguments?.[1],{...t}))}),r);return n}case"Set":{const n=new Set;return this.execCount((()=>n.add(this.generateByType(e.typeArguments?.[0],{...t}))),r),n}case"Array":{const n=[];return this.execCount((()=>n.push(this.generateByType(e.typeArguments?.[0],{...t}))),r),n}}}generateCustom(e,t){if(void 0===t&&(t={type:"string"}),!e)return null;switch(t.type){case"string":return this.verify(t.value,this.generateString(t));case"number":case"number_float":return this.verify(t.value,this.generateNumber(t));case"array":return e.kind===i.SyntaxKind.TypeReference?this.verify(t.value,this.generateReference(e,{},t.length)):this.verify(t.value,this.generateArray(e,t))}}generateString(e){const{min:t=c.BASIC_MIN_STRING,max:r=c.BASIC_MAX_STRING,language:n}=e;switch(n){case"en":return(0,o.generate_en)(t,r);case"zh":return(0,o.generate_cn)(t,r);default:return(0,o.generate_string)(t,r)}}generateNumber(e){const{min:t=c.BASIC_MIN_NUMBER,max:r=c.BASIC_MAX_NUMBER,fixed:n=c.BASIC_FIXED,type:a}=e;switch(a){case"number":return(0,u.randomNum)(t,r);case"number_float":return(0,u.randomFloatNum)(t,r,n)}}generateArray(e,t){const r=e,{length:n}=t,a=[];return this.execCount((()=>a.push(this.generateByType(r.elementType,{}))),n),a}verify(e,t){return"function"==typeof e&&null!==e?e(t):e||t}execCount(e,t){for(let r=0;r<t;r++)e()}}t.Mock=l,t.default=l},6393:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomFloatNum=t.randomNum=void 0;t.randomNum=(e,r)=>Math.floor((0,t.randomFloatNum)(e,r));t.randomFloatNum=function(e,t,r){return void 0===r&&(r=2),Number((Math.random()*(t-e)+e).toFixed(r))}},6037:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generate_cn=t.generate_en=t.generate_string=void 0;const n=r(6393);t.generate_string=(e,r)=>Math.random()>.5?(0,t.generate_en)(e,r):(0,t.generate_cn)(e,r);t.generate_en=(e,t)=>{let r="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=(0,n.randomNum)(e,t);for(let n=0;n<s;n++)r+=a.charAt(Math.floor(62*Math.random()));return r};t.generate_cn=(e,t)=>{let r="";const a=(0,n.randomNum)(e,t);for(let n=0;n<a;n++)r+=String.fromCharCode(Math.floor(20901*Math.random()+19968));return r}},9896:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7378),a=r(5472);const s={container:"container_Pgfs"};var i=r(6406),o=r.n(i),u=r(5404),c=r(6106);function l(){const[e,t]=n.useState("interface User {\n\tname: string;\n\tage: number;\n}"),[r,i]=n.useState(JSON.stringify({name:"maeNx",age:54106.47})),[l,g]=n.useState("User");n.useMemo((()=>new(o())(e)),[e]);return(0,c.jsxs)(a.A,{title:"Hello",description:"Hello React Page",children:[(0,c.jsxs)("div",{className:s.container,children:[(0,c.jsx)(u.Ay,{language:"typescript",width:"50vw",height:"60vh",path:"mock.tsx",onMount:(e,t)=>{t.languages.typescript&&t.languages.typescript.typescriptDefaults.setCompilerOptions({esModuleInterop:!0})},value:e,onChange:t}),(0,c.jsx)(u.Ay,{language:"json",width:"50vw",height:"60vh",path:"mock_json.tsx",value:r,onChange:i})]}),(0,c.jsxs)("div",{children:["name: ",(0,c.jsx)("input",{value:l,onChange:e=>{const t=e.target.value;g(t)},type:"text"}),(0,c.jsx)("button",{onClick:()=>{const t=new(o())(e).generate(l);i(JSON.stringify(t))},children:"generate"})]})]})}},2956:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=2956,e.exports=t},1709:()=>{},5772:()=>{},7982:()=>{},3438:()=>{},5129:()=>{},6326:()=>{},771:()=>{},7091:()=>{}}]);