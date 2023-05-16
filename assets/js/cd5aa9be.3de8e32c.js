"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,b=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},o="WMSCapabilitiesLoader",s={unversionedId:"modules/wms/api-reference/wms-capabilities-loader",id:"modules/wms/api-reference/wms-capabilities-loader",title:"WMSCapabilitiesLoader",description:"&nbsp;",source:"@site/../docs/modules/wms/api-reference/wms-capabilities-loader.md",sourceDirName:"modules/wms/api-reference",slug:"/modules/wms/api-reference/wms-capabilities-loader",permalink:"/docs/modules/wms/api-reference/wms-capabilities-loader",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/wms/api-reference/wms-capabilities-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WKTWriter",permalink:"/docs/modules/wkt/api-reference/wkt-writer"},next:{title:"XMLLoader",permalink:"/docs/modules/xml/api-reference/xml-loader"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Parsed Data Format",id:"parsed-data-format",level:2},{value:"Options",id:"options",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wmscapabilitiesloader"},"WMSCapabilitiesLoader"),(0,r.kt)("p",{class:"badges"},(0,r.kt)("img",{src:"https://img.shields.io/badge/From-v3.3-blue.svg?style=flat-square",alt:"From-3.3"}),"\xa0",(0,r.kt)("img",{src:"https://img.shields.io/badge/-BETA-teal.svg",alt:"BETA"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WMSCapabilitiesLoader")," parses the XML-formatted response from the\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://www.opengeospatial.org/"},"OGC")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.ogc.org/standards/wms"},"WMS")," (Web Map Service) standard ",(0,r.kt)("inlineCode",{parentName:"p"},"GetCapabilities")," request into a strongly typed JavaScript data structure."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Loader"),(0,r.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".xml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Web_Map_Service"},"WMS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Data structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decoder Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Streaming Support"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {WMSCapabilitiesLoader} from '@loaders.gl/wms';\nimport {load} from '@loaders.gl/core';\n\n// Form a WMS request\nconst url = `${WMS_SERVICE_URL}?REQUEST=GetCapabilities`;\n\nconst data = await load(url, WMSCapabilitiesLoader, options);\n")),(0,r.kt)("h2",{id:"parsed-data-format"},"Parsed Data Format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** All capabilities of a WMS service - response to a WMS `GetCapabilities` data structure extracted from XML */\nexport type WMSCapabilities = {\n  /** Version of the WMS service */\n  version?: string; // '1.3.0' | '1.1.1' | '1.1.0' | '1.0.0'\n  /** A short name for the service */\n  name: string;\n  /** A human readable name for the service */\n  title?: string;\n  /** A more extensive description of the service */\n  abstract?: string;\n  /** A set of keywords e.g. for searching services */\n  keywords: string[];\n  /** A field of unspecified format, if present describes any access constraints required to use the service. */\n  accessConstraints?: string;\n  /** A field of unspecified format, if present describes any fees associated with the use of the service */\n  fees?: string;\n  /** If present, the max number of layers that can be rendered by the service */\n  layerLimit?: number;\n  /** If present, the widest image that can be rendered by the service */\n  maxWidth?: number;\n  /** If present, the tallest image that can be rendered by the service */\n  maxHeight?: number;\n  /** Hierarchical list of layers. */\n  layers: WMSLayer[];\n  /** A map with information about supported WMS requests. If a record is present, the request is supported by the service */\n  requests: Record<string, WMSRequest>;\n  /** Information about any exceptions that the service will report (HTTP status != 2xx) */\n  exceptions?: WMSExceptions;\n  /** Only if `options.raw`: raw untyped JSON parsed from XML. Can include information not extracted in the typed response. */\n  raw?: Record<string, unknown>;\n  /** Only if `options.xml`, the unparsed XML string can be requested */\n  xml?: string;\n};\n\n/**\n * Metadata about a layer\n * Layers inherit many properties from their parent layers, see description of individual props for details.\n * @see https://www.ogc.org/standard/wms/ 7.2.4.6\n */\nexport type WMSLayer = {\n  /** The title is a human readable name. It is mandatory on each layer. Not inherited.  */\n  title: string;\n  /** A layer is renderable if it has a name. A named parent layer will render all its sublayers. Not inherited. */\n  name?: string;\n  /** A narrative description of the map layer. */\n  abstract?: string;\n  /** A set of keywords e.g. for searching layers */\n  keywords: string[];\n  /** layer limits in unspecified CRS:84-like lng/lat, for quick access w/o CRS calculations.  Defined or inherited. */\n  geographicBoundingBox?: [min: [x: number, y: number], max: [x: number, y: number]];\n  /** Supported CRS. Either defined or inherited. */\n  crs?: string[];\n  /** Bounding boxes in specific CRS:es */\n  boundingBoxes?: WMSBoundingBox[];\n\n  dimensions?: WMSDimension[]; // ?? 7.2.4.6.10\n\n  // minScale: number;\n  // maxScale: number;\n  // MetadataURL\n  // Attribution\n  // Identifier and AuthorityURL\n  // FeatureListURL\n  // DataURL\n\n  /** Whether queries can be performed on the layer */\n  queryable?: boolean;\n  /** `false` if layer has significant no-data areas that the client can display as transparent. */\n  opaque?: boolean;\n  /** WMS cascading allows server to expose layers coming from other WMS servers as if they were local layers */\n  cascaded?: boolean;\n  // noSubsets: boolean\n  // fixedWith: number\n  // fixedHeight: number\n\n  /** A list of styles. @note not yet supported by WMSCapabilitiesLoader */\n  styles?: unknown[];\n\n  /** Sublayers - these inherit crs and boundingBox) if not overridden) */\n  layers: WMSLayer[];\n};\n\n/**\n * A bounding box specifies the coordinate range for data in the layer.\n * No data is available outside the bounding box.\n */\nexport type WMSBoundingBox = {\n  /** CRS indicates the Layer CRS that applies to this bounding box. */\n  crs: string;\n  /** `[[w, s], [e, n]]`, indicates the limits of the bounding box using the axis units and order of the specified CRS. */\n  boundingBox: [min: [x: number, y: number], max: [x: number, y: number]];\n  /** Spatial horizontal resolution of data in same units as bounding box */\n  xResolution?: number;\n  /** Spatial vertical resolution of data in same units as bounding box */\n  yResolution?: number;\n};\n\n/** Metadata about a supported WMS request  */\nexport type WMSRequest = {\n  /** MIMEtypes that can be returned by this request. */\n  mimeTypes: string[];\n};\n\nexport type WMSExceptions = {\n  /** MIME types for exception response payloads. */\n  mimeTypes: string[];\n};\n\nexport type parseWMSCapabilitiesOptions = {\n  /** Add inherited layer information to sub layers */\n  inheritedLayerProps?: boolean;\n  /** Include the \"raw\" JSON (parsed but untyped, unprocessed XML). May contain additional fields */\n  includeRawData?: boolean;\n  /** Include the original XML document text. May contain additional information. */\n  includeXMLText?: boolean;\n  /** @deprecated Use includeRawData` */\n  raw?: boolean;\n\n  // xml options are passed through to xml loader\n};\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wms.inheritedLayerProps?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds inherited layer information from parent layers to sub layers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wms.includeRawData?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},'Include the "raw" JSON (parsed but untyped, unprocessed XML). May contain additional fields')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wms.includeXMLText?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Include the original XML document text. May contain additional information.")))),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"Note that the WMS standard is rather verbose and the XML responses contain some rarely used metadata fields and possibly some vendor specific fields, not all of which are extracted by this loader. If this is a problem, it is possible to inspect the output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLLoader"),", by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"raw")," option."))}u.isMDXComponent=!0}}]);