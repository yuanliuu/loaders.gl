"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={},o="HTMLLoader",i={unversionedId:"modules/xml/api-reference/html-loader",id:"modules/xml/api-reference/html-loader",title:"HTMLLoader",description:"&nbsp;",source:"@site/../docs/modules/xml/api-reference/html-loader.md",sourceDirName:"modules/xml/api-reference",slug:"/modules/xml/api-reference/html-loader",permalink:"/docs/modules/xml/api-reference/html-loader",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/xml/api-reference/html-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XMLLoader",permalink:"/docs/modules/xml/api-reference/xml-loader"},next:{title:"Overview",permalink:"/docs/modules/zip/"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Options",id:"options",level:2},{value:"Attributions",id:"attributions",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"htmlloader"},"HTMLLoader"),(0,n.kt)("p",{class:"badges"},(0,n.kt)("img",{src:"https://img.shields.io/badge/From-v3.4-blue.svg?style=flat-square",alt:"From-v3.4"}),"\xa0",(0,n.kt)("img",{src:"https://img.shields.io/badge/-BETA-teal.svg",alt:"BETA"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"HTMLLoader")," parses HTML-encoded data."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"HTMLoader")," attempts to parse an HTML file as an XML file. It does not have any understanding of the structure of HTML or the document.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Loader"),(0,n.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},".html"),", ",(0,n.kt)("inlineCode",{parentName:"td"},".htm"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MIME Type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"text/html"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"File Format"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/xml/"},"eXtensible Markup Language"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,n.kt)("td",{parentName:"tr",align:null},"Free format data structure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decoder Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,n.kt)("td",{parentName:"tr",align:null},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Streaming Support"),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"HTMLLoader")," is only expected to be fit-for-purpose for a few limited use cases.\nIt is not intended for full fidelity parsing or display of HTML files. It is designed for minimal ad-hoc use cases such as "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"the extraction of an error string from an HTML formatted error response from a server"),(0,n.kt)("li",{parentName:"ul"},"or possibly to extract some valuable information (perhaps the URL to a geospatial service) from a server that doesn't provide more structured return formats (such as JSON or XML)."))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {HTMLLoader} from '@loaders.gl/xml';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, HTMLLoader, options);\n")),(0,n.kt)("h2",{id:"data-format"},"Data Format"),(0,n.kt)("p",null,"Unstructured, untyped data in the form a tree of JavaScrip objects representing the hierarchy of tags in the HTML file."),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"For options, see the ",(0,n.kt)("a",{parentName:"p",href:"./xml-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"XMLLoader")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description")))),(0,n.kt)("h2",{id:"attributions"},"Attributions"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"HTMLLoader")," is a wrapper around ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/NaturalIntelligence/fast-xml-parser"},(0,n.kt)("inlineCode",{parentName:"a"},"fast-xml-parser")),"."))}u.isMDXComponent=!0}}]);