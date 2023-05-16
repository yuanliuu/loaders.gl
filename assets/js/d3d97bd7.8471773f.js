"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1758],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},o="Overview",i={unversionedId:"modules/core/README",id:"modules/core/README",title:"Overview",description:"The @loaders.gl/core module contains the core API of loaders.gl",source:"@site/../docs/modules/core/README.md",sourceDirName:"modules/core",slug:"/modules/core/",permalink:"/docs/modules/core/",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/core/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supported features",permalink:"/docs/modules/tile-converter/cli-reference/supported-features"},next:{title:"LoaderOptions",permalink:"/docs/modules/core/api-reference/loader-options"}},c={},s=[{value:"Micro-Loaders",id:"micro-loaders",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@loaders.gl/core")," module contains the core API of loaders.gl"),(0,n.kt)("p",null,"The core API offers functions to parse data in various ways using loaders"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/parse"},(0,n.kt)("inlineCode",{parentName:"a"},"parse"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/parse-sync"},(0,n.kt)("inlineCode",{parentName:"a"},"parseSync"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/parse-in-batches"},(0,n.kt)("inlineCode",{parentName:"a"},"parseInBatches")))),(0,n.kt)("p",null,"To fetch data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/fetch-file"},(0,n.kt)("inlineCode",{parentName:"a"},"fetchFile")))),(0,n.kt)("p",null,"To load (fetch and parse) data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/load"},(0,n.kt)("inlineCode",{parentName:"a"},"load")))),(0,n.kt)("p",null,"To register loaders, or select a loader that matches a file from a list of candidate loaders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/register-loaders"},(0,n.kt)("inlineCode",{parentName:"a"},"registerLoaders"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/select-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"selectLoader")))),(0,n.kt)("p",null,"To encode and save data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/encode"},(0,n.kt)("inlineCode",{parentName:"a"},"encode"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/write-file"},(0,n.kt)("inlineCode",{parentName:"a"},"write-file"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/modules/core/api-reference/save"},(0,n.kt)("inlineCode",{parentName:"a"},"save")))),(0,n.kt)("p",null,"As well as some utility functions."),(0,n.kt)("h2",{id:"micro-loaders"},"Micro-Loaders"),(0,n.kt)("p",null,"Loaders with limited functionality but with minimal bundle size impact:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"JSONLoader")),(0,n.kt)("td",{parentName:"tr",align:null},"A minimal non-streaming JSON loader that uses the built-in ",(0,n.kt)("inlineCode",{parentName:"td"},"JSON.parse")," function")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"NullLoader")),(0,n.kt)("td",{parentName:"tr",align:null},"A loader-object that ignores input data and always returns ",(0,n.kt)("inlineCode",{parentName:"td"},"null"),".")))))}u.isMDXComponent=!0}}]);