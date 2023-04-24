"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(n),u=l,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:l,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={},i="Tiles3DLoader",d={unversionedId:"modules/3d-tiles/api-reference/tiles-3d-loader",id:"modules/3d-tiles/api-reference/tiles-3d-loader",title:"Tiles3DLoader",description:"Parses a 3D tiles tileset.",source:"@site/../docs/modules/3d-tiles/api-reference/tiles-3d-loader.md",sourceDirName:"modules/3d-tiles/api-reference",slug:"/modules/3d-tiles/api-reference/tiles-3d-loader",permalink:"/docs/modules/3d-tiles/api-reference/tiles-3d-loader",draft:!1,editUrl:"https://github.com/uber-web/loaders.gl/tree/master/website/../docs/modules/3d-tiles/api-reference/tiles-3d-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3D Tiles Loaders",permalink:"/docs/specifications/category-3d-tiles"},next:{title:"CesiumIonLoader",permalink:"/docs/modules/3d-tiles/api-reference/cesium-ion-loader"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Notes about Tile Types",id:"notes-about-tile-types",level:2},{value:"b3dm, i3dm",id:"b3dm-i3dm",level:3},{value:"glTF content extension",id:"gltf-content-extension",level:3},{value:"Data Format",id:"data-format",level:2},{value:"Tileset Object",id:"tileset-object",level:3},{value:"Tile Object",id:"tile-object",level:3},{value:"Tile Content",id:"tile-content",level:3}],m={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tiles3dloader"},"Tiles3DLoader"),(0,l.kt)("p",{class:"badges"},(0,l.kt)("img",{src:"https://img.shields.io/badge/From-v2.1-blue.svg?style=flat-square",alt:"From-v2.1"})),(0,l.kt)("p",null,"Parses a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles"},"3D tiles")," tileset."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Loader"),(0,l.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File Extensions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".b3dm"),",",(0,l.kt)("inlineCode",{parentName:"td"},".i3dm"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".pnts"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".cmpt"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary (with linked assets)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File Format"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification#tile-format-specifications"},"3D Tiles"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#data-formats"},"Data Formats"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Decoder Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Asynchronous")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Worker Thread Support"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Streaming Support"),(0,l.kt)("td",{parentName:"tr",align:null},"No ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Subloaders"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DracoLoader")," (",(0,l.kt)("inlineCode",{parentName:"td"},".pnts"),"), ",(0,l.kt)("inlineCode",{parentName:"td"},"GLTFLoader")," (",(0,l.kt)("inlineCode",{parentName:"td"},".b3dm"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".i3dm"),"), ",(0,l.kt)("inlineCode",{parentName:"td"},"ImageLoader")," (.",(0,l.kt)("inlineCode",{parentName:"td"},".jpg"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".png"),"), ",(0,l.kt)("inlineCode",{parentName:"td"},"TextureLoader")," (",(0,l.kt)("inlineCode",{parentName:"td"},".ktx"),")")))),(0,l.kt)("p",null,"*"," Streaming is not supported for individual tiles, however tilesets are streamed by loading only the tiles needed for the specified viewports."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"As a tileset contains multiple file formats, ",(0,l.kt)("inlineCode",{parentName:"p"},"Tiles3DLoader")," is needed to be explicitly specified when using ",(0,l.kt)("a",{parentName:"p",href:"https://loaders.gl/modules/core/docs/api-reference/load"},(0,l.kt)("inlineCode",{parentName:"a"},"load"))," function."),(0,l.kt)("p",null,"Load a tileset file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {load} from '@loaders.gl/core';\nimport {Tiles3DLoader} from '@loaders.gl/3d-tiles';\nconst tilesetUrl = 'https://assets.ion.cesium.com/43978/tileset.json';\nconst tilesetJson = await load(tilesetUrl, Tiles3DLoader);\n")),(0,l.kt)("p",null,"To decompress tiles containing Draco compressed glTF models or Draco compressed point clouds:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {load, registerLoaders} from '@loaders.gl/core';\nimport {Tiles3DLoader} from '@loaders.gl/3d-tiles';\nconst tileUrl = 'https://assets.ion.cesium.com/43978/1.pnts';\nconst tile = await load(tileUrl, Tiles3DLoader, {decompress: true});\n")),(0,l.kt)("p",null,"Load a tileset and dynamically load/unload tiles based on viewport with helper class ",(0,l.kt)("inlineCode",{parentName:"p"},"Tileset3D")," (",(0,l.kt)("inlineCode",{parentName:"p"},"@loaders.gl/tiles"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {load} from '@loaders.gl/core';\nimport {Tileset3D} from '@loaders.gl/tiles';\nimport {Tiles3DLoader} from '@loaders.gl/3d-tiles';\nimport {WebMercatorViewport} from '@deck.gl/core';\n\nconst tilesetUrl = 'https://assets.cesium.ion.com/43978/tileset.json';\nconst tilesetJson = await load(tilesetUrl, Tiles3DLoader);\n\n// if your tileset file doesn't have the .json extension, set `3d-tiles.isTileset` to true\nconst tilesetJson = await load(tilesetUrl, Tiles3DLoader, {'3d-tiles': {isTileset: true}});\n\nconst tileset3d = new Tileset3D(tilesetJson, {\n  onTileLoad: tile => console.log(tile)\n});\n\nconst viewport = new WebMercatorViewport({latitude, longitude, zoom, ...});\ntileset3d.update(viewport);\n\n// visible tiles\nconst visibleTiles = tileset3d.tiles.filter(tile => tile.selected);\n// Note that visibleTiles will likely not immediately include all tiles\n// tiles will keep loading and file `onTileLoad` callbacks\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d-tiles.isTileset")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Bool")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"auto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auto")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to load a ",(0,l.kt)("inlineCode",{parentName:"td"},"Tileset")," file. If ",(0,l.kt)("inlineCode",{parentName:"td"},"auto"),", will infer based on url extension.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d-tiles.headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to load data from server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d-tiles.tileset")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tileset")," object loaded by ",(0,l.kt)("inlineCode",{parentName:"td"},"Tiles3DLoader")," or follow the data format specified in ",(0,l.kt)("a",{parentName:"td",href:"#tileset-object"},"Tileset Object"),". It is required when loading i3s geometry content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d-tiles.tile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tile")," object loaded by ",(0,l.kt)("inlineCode",{parentName:"td"},"Tiles3DLoader")," or follow the data format ",(0,l.kt)("a",{parentName:"td",href:"#tile-object"},"Tile Object"),". It is required when loading i3s geometry content")))),(0,l.kt)("p",null,"Point cloud tie options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d-tiles.decodeQuantizedPositions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Pre-decode quantized position on CPU")))),(0,l.kt)("p",null,"For i3dm and b3dm tiles:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3d-tiles.loadGLTF")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Fetch and parse any linked glTF files")))),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"options['3d-tiles'].loadGLTF")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", GLTF loading can be controlled by providing ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/gltf/api-reference/gltf-loader"},(0,l.kt)("inlineCode",{parentName:"a"},"GLTFLoader")," options")," via the ",(0,l.kt)("inlineCode",{parentName:"p"},"options.gltf")," sub options."),(0,l.kt)("h2",{id:"notes-about-tile-types"},"Notes about Tile Types"),(0,l.kt)("h3",{id:"b3dm-i3dm"},"b3dm, i3dm"),(0,l.kt)("p",null,"The Batched 3D Model and Instanced 3D model tile types contain an embedded glTF file. This can be parsed into a hierarchical scene graph description that can be used to instantiate an actual sceneg raph in most WebGL libraries."),(0,l.kt)("p",null,"Can load both binary ",(0,l.kt)("inlineCode",{parentName:"p"},".glb")," files and JSON ",(0,l.kt)("inlineCode",{parentName:"p"},".gltf")," files."),(0,l.kt)("h3",{id:"gltf-content-extension"},"glTF content extension"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_content_gltf"},"3DTILES_content_gltf")," extension is supported. This extension allows a tileset to use glTF 2.0 assets directly as tile content. Both glTF JSON and GLB binary formats are supported."),(0,l.kt)("h2",{id:"data-format"},"Data Format"),(0,l.kt)("p",null,"Loaded data conforms to the 3D Tiles loader category specification with the following exceptions."),(0,l.kt)("h3",{id:"tileset-object"},"Tileset Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Value is ",(0,l.kt)("inlineCode",{parentName:"td"},"TILES3D"),". Indicates the returned object is a Cesium ",(0,l.kt)("inlineCode",{parentName:"td"},"3D Tiles")," tileset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lodMetricType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Root's Level of Detail (LoD) metric type, which is used to decide if a tile is sufficient for current viewport. Used for deciding if this tile is sufficient given current viewport. Cesium use ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/README.md#geometric-error"},(0,l.kt)("inlineCode",{parentName:"a"},"geometricError")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lodMetricValue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"Root's level of detail (LoD) metric value.")))),(0,l.kt)("h3",{id:"tile-object"},"Tile Object"),(0,l.kt)("p",null,"The following fields are guaranteed. Additionally, the loaded tile object will contain all the data fetched from the provided url."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier of the tile, unique in a tileset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"refine")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Refinement type of the tile, ",(0,l.kt)("inlineCode",{parentName:"td"},"ADD")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"REPLACE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the tile, one of ",(0,l.kt)("inlineCode",{parentName:"td"},"pointcloud")," (",(0,l.kt)("inlineCode",{parentName:"td"},".pnts"),"), ",(0,l.kt)("inlineCode",{parentName:"td"},"scenegraph")," (",(0,l.kt)("inlineCode",{parentName:"td"},".i3dm"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".b3dm"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".glb"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".gltf"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boundingVolume")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"A bounding volume in Cartesian coordinates that encloses a tile or its content. Exactly one box, region, or sphere property is required. (",(0,l.kt)("a",{parentName:"td",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/tree/master/specification#bounding-volume"},(0,l.kt)("inlineCode",{parentName:"a"},"Reference")),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lodMetricType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Level of Detail (LoD) metric type, which is used to decide if a tile is sufficient for current viewport. Used for deciding if this tile is sufficient given current viewport. Cesium use ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/AnalyticalGraphicsInc/3d-tiles/blob/master/specification/README.md#geometric-error"},(0,l.kt)("inlineCode",{parentName:"a"},"geometricError")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lodMetricValue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Level of Detail (LoD) metric value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"children")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of objects that define child tiles. Each child tile content is fully enclosed by its parent tile's bounding volume and, generally, has more details than parent. for leaf tiles, the length of this array is zero, and children may not be defined.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transformMatrix")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number[16]")),(0,l.kt)("td",{parentName:"tr",align:null},"A matrix that transforms from the tile's local coordinate system to the parent tile's coordinate system\u2014or the tileset's coordinate system in the case of the root tile")))),(0,l.kt)("h3",{id:"tile-content"},"Tile Content"),(0,l.kt)("p",null,"After content is loaded, the following fields are guaranteed. But different tiles may have different extra content fields."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cartesianOrigin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number[3]")),(0,l.kt)("td",{parentName:"tr",align:null},'"Center" of tile geometry in WGS84 fixed frame coordinates')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cartographicOrigin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number[3]")),(0,l.kt)("td",{parentName:"tr",align:null},'"Origin" in lng/lat (center of tile\'s bounding volume)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"modelMatrix")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number[16]")),(0,l.kt)("td",{parentName:"tr",align:null},"Transforms tile geometry positions to fixed frame coordinates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Each attribute follows luma.gl ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/visgl/luma.gl/blob/master/docs/api-reference/webgl/accessor"},"accessor")," properties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureIds")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Uint32Array")),(0,l.kt)("td",{parentName:"tr",align:null},"An array of feature ids which specify which feature each vertex belongs to. Can be used for picking functionality.")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"attributes")," contains following fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes.positions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{value, type, size, normalized}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes.normals")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{value, type, size, normalized}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributes.colors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{value, type, size, normalized}"))))),(0,l.kt)("p",null,"PointCloud Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pointCount")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of points")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Number[3]")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Number[4]")),(0,l.kt)("td",{parentName:"tr",align:null},"Color of the tile when there are not ",(0,l.kt)("inlineCode",{parentName:"td"},"attributes.colors"))))),(0,l.kt)("p",null,"Scenegraph Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gltf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"check ",(0,l.kt)("a",{parentName:"td",href:"https://loaders.gl/modules/gltf/docs/api-reference/gltf-loader"},"GLTFLoader")," for detailed spec")))))}k.isMDXComponent=!0}}]);