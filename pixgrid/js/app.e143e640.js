(function(t){function e(e){for(var i,o,n=e[0],c=e[1],l=e[2],u=0,p=[];u<n.length;u++)o=n[u],r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pixgrid/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1728:function(t,e,a){},3344:function(t,e,a){},"372a":function(t,e,a){"use strict";var i=a("881f"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),r=(a("ac6a"),a("2f62"));function s(){for(var t=[],e=o.canvasWidth*o.canvasHeight,a=0;a<e;a++)t.push({id:"p"+a,xs:a%o.canvasWidth,ys:(a-a%o.canvasWidth)/o.canvasWidth,color:"transparent"});return t}i["a"].use(r["a"]);var o={generatedArt:null,updatedList:[],backupList:[],canvasWidth:8,canvasHeight:8,showGrid:!0,showRuler:!0,zoom:1,tileSize:20,newColor:"",bouncePickedColor:!1,isEraser:!1,currentColor:{id:"c2",value:"black"},paletteList:[{id:"c2",value:"black"},{id:"c1",value:"red"},{id:"c3",value:"green"},{id:"c4",value:"blue"},{id:"c5",value:"yellow"},{id:"c6",value:"orange"},{id:"c7",value:"purple"},{id:"c8",value:"white"}]},n={toggleGrid:function(t){t.showGrid=!t.showGrid},toggleRuler:function(t){t.showRuler=!t.showRuler},zoomIn:function(t){var e=.25;t.zoom=t.zoom+e<=8?t.zoom+e:8},zoomOut:function(t){var e=.25;t.zoom=t.zoom-e>=.1?t.zoom-e:1/t.tileSize},zoomReset:function(t){t.zoom=1},addColor:function(t,e){t.paletteList.push({id:e,value:e})},pickedColor:function(t,e){t.currentColor=e},setUpdatedList:function(t,e){e.first?t.backupList=e.list:e.pressed||(t.backupList=t.updatedList),t.updatedList=e.list},generateArt:function(t,e){if(e&&e.clear)t.generatedArt=null;else{var a="";t.updatedList.forEach(function(t){"transparent"!==t.color&&(a+='<div class="pixel" id="'.concat(t.id,'" style="background-color: ').concat(t.color,"; grid-area: ").concat(t.ys+1," / ").concat(t.xs+1," / ").concat(t.ys+2," / ").concat(t.xs+2,'"></div>'))});var i='\n      <div class="art" style="display: grid; grid-template-columns: repeat('.concat(t.canvasWidth,", ").concat(t.tileSize,"px); grid-template-rows: repeat(").concat(t.canvasHeight,", ").concat(t.tileSize,'px);">').concat(a,"</div>\n    ");t.generatedArt=i}},bouncePickedColor:function(t){t.bouncePickedColor=!0,setTimeout(function(){t.bouncePickedColor=!1},1e3)},eraser:function(t,e){t.isEraser=e},undo:function(t){var e=t.updatedList;t.updatedList=t.backupList,t.backupList=e},setCanvasWidth:function(t,e){t.canvasWidth=e},setCanvasHeight:function(t,e){t.canvasHeight=e},setTileSize:function(t,e){t.tileSize=e}},c={setUpdatedList:function(t,e){var a=t.commit;a("setUpdatedList",e),a("generateArt",{clear:!0})},setList:function(t){var e=t.commit;e("setUpdatedList",{list:s(),first:!0}),e("generateArt",{clear:!0})},toggleGrid:function(t){var e=t.commit;return e("toggleGrid")},toggleRuler:function(t){var e=t.commit;return e("toggleRuler")},zoomIn:function(t){var e=t.commit;return e("zoomIn")},zoomOut:function(t){var e=t.commit;return e("zoomOut")},zoomReset:function(t){var e=t.commit;return e("zoomReset")},addColor:function(t,e){var a=t.commit;if(""!==e){var i=o.paletteList.filter(function(t){return t.value===e})[0];if(i)return a("pickedColor",i),void a("bouncePickedColor");a("addColor",e);var r=o.paletteList.filter(function(t){return t.value===e})[0];a("pickedColor",r)}},pickedColor:function(t,e){var a=t.commit;a("eraser",!1),a("pickedColor",e)},generateArt:function(t,e){var a=t.commit;return a("generateArt",e)},eraser:function(t,e){var a=t.commit;return a("eraser",e)},undo:function(t){var e=t.commit;return e("undo")},setCanvasWidth:function(t,e){var a=t.commit;return a("setCanvasWidth",e)},setCanvasHeight:function(t,e){var a=t.commit;return a("setCanvasHeight",e)},setTileSize:function(t,e){var a=t.commit;return a("setTileSize",e)}},l={generatedArt:function(t){return t.generatedArt},updatedList:function(t){return t.updatedList},canvasWidth:function(t){return t.canvasWidth},canvasHeight:function(t){return t.canvasHeight},showGrid:function(t){return t.showGrid},showRuler:function(t){return t.showRuler},zoom:function(t){return t.zoom},tileSize:function(t){return t.tileSize},newColor:function(t){return t.newColor},currentColor:function(t){return t.currentColor},paletteList:function(t){return t.paletteList},bouncePickedColor:function(t){return t.bouncePickedColor},isEraser:function(t){return t.isEraser},backupList:function(t){return t.backupList},cleanList:function(t){return t.cleanList}},d=new r["a"].Store({state:o,getters:l,actions:c,mutations:n}),u=a("ecee"),p=a("ad3d"),v=a("c074"),g=a("c345"),f=a("526e"),C=a.n(f),b=(a("a101"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header",[a("template",{slot:"brand"},[a("div",{staticClass:"brand__logo"},[a("div",{staticClass:"art",staticStyle:{display:"grid","grid-template-columns":"repeat(11, 2px)","grid-template-rows":"repeat(10, 2px)"}},[a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"1 / 3 / 2 / 4"},attrs:{id:"p2"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"1 / 4 / 2 / 5"},attrs:{id:"p3"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"1 / 8 / 2 / 9"},attrs:{id:"p7"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"1 / 9 / 2 / 10"},attrs:{id:"p8"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 2 / 3 / 3"},attrs:{id:"p12"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 3 / 3 / 4"},attrs:{id:"p13"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 4 / 3 / 5"},attrs:{id:"p14"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 5 / 3 / 6"},attrs:{id:"p15"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 7 / 3 / 8"},attrs:{id:"p17"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 8 / 3 / 9"},attrs:{id:"p18"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 9 / 3 / 10"},attrs:{id:"p19"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"2 / 10 / 3 / 11"},attrs:{id:"p20"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 1 / 4 / 2"},attrs:{id:"p22"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 2 / 4 / 3"},attrs:{id:"p23"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 3 / 4 / 4"},attrs:{id:"p24"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 4 / 4 / 5"},attrs:{id:"p25"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 5 / 4 / 6"},attrs:{id:"p26"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 6 / 4 / 7"},attrs:{id:"p27"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 7 / 4 / 8"},attrs:{id:"p28"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 8 / 4 / 9"},attrs:{id:"p29"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 9 / 4 / 10"},attrs:{id:"p30"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 10 / 4 / 11"},attrs:{id:"p31"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"3 / 11 / 4 / 12"},attrs:{id:"p32"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 1 / 5 / 2"},attrs:{id:"p33"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 2 / 5 / 3"},attrs:{id:"p34"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 3 / 5 / 4"},attrs:{id:"p35"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 4 / 5 / 5"},attrs:{id:"p36"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 5 / 5 / 6"},attrs:{id:"p37"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 6 / 5 / 7"},attrs:{id:"p38"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 7 / 5 / 8"},attrs:{id:"p39"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 8 / 5 / 9"},attrs:{id:"p40"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 9 / 5 / 10"},attrs:{id:"p41"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 10 / 5 / 11"},attrs:{id:"p42"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"4 / 11 / 5 / 12"},attrs:{id:"p43"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 1 / 6 / 2"},attrs:{id:"p44"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 2 / 6 / 3"},attrs:{id:"p45"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 3 / 6 / 4"},attrs:{id:"p46"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 4 / 6 / 5"},attrs:{id:"p47"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 5 / 6 / 6"},attrs:{id:"p48"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 6 / 6 / 7"},attrs:{id:"p49"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 7 / 6 / 8"},attrs:{id:"p50"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 8 / 6 / 9"},attrs:{id:"p51"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 9 / 6 / 10"},attrs:{id:"p52"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 10 / 6 / 11"},attrs:{id:"p53"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"5 / 11 / 6 / 12"},attrs:{id:"p54"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 2 / 7 / 3"},attrs:{id:"p56"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 3 / 7 / 4"},attrs:{id:"p57"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 4 / 7 / 5"},attrs:{id:"p58"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 5 / 7 / 6"},attrs:{id:"p59"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 6 / 7 / 7"},attrs:{id:"p60"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 7 / 7 / 8"},attrs:{id:"p61"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 8 / 7 / 9"},attrs:{id:"p62"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 9 / 7 / 10"},attrs:{id:"p63"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"6 / 10 / 7 / 11"},attrs:{id:"p64"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 3 / 8 / 4"},attrs:{id:"p68"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 4 / 8 / 5"},attrs:{id:"p69"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 5 / 8 / 6"},attrs:{id:"p70"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 6 / 8 / 7"},attrs:{id:"p71"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 7 / 8 / 8"},attrs:{id:"p72"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 8 / 8 / 9"},attrs:{id:"p73"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"7 / 9 / 8 / 10"},attrs:{id:"p74"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"8 / 4 / 9 / 5"},attrs:{id:"p80"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"8 / 5 / 9 / 6"},attrs:{id:"p81"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"8 / 6 / 9 / 7"},attrs:{id:"p82"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"8 / 7 / 9 / 8"},attrs:{id:"p83"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"8 / 8 / 9 / 9"},attrs:{id:"p84"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"9 / 5 / 10 / 6"},attrs:{id:"p92"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"9 / 6 / 10 / 7"},attrs:{id:"p93"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"9 / 7 / 10 / 8"},attrs:{id:"p94"}}),a("div",{staticClass:"pixel",staticStyle:{"background-color":"#D67D7D","grid-area":"10 / 6 / 11 / 7"},attrs:{id:"p104"}})])]),a("span",[t._v("PixGrid Editor")])])],2),a("Editor"),a("footer",[t._v("\n    Made with "),a("font-awesome-icon",{attrs:{icon:"heart"}}),t._v(" by "),a("a",{attrs:{href:"https://github.com/jackiecard",title:"Jackie's github page"}},[t._v("jackiecard")]),t._v(".\n  ")],1)],1)}),m=[],D={name:"app"},h=D,k=(a("5c0b"),a("2877")),y=Object(k["a"])(h,b,m,!1,null,null,null),w=y.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editor"},[a("Toolbar",[a("template",{slot:"palette"},[a("ColorPalette",{attrs:{"palette-list":t.paletteList,id:"palette"},on:{"current-color":t.pickedColor}}),a("div",{staticClass:"palette__info"},[a("popper",{attrs:{trigger:"click",options:{placement:"top"}}},[a("div",{staticClass:"popper"},[a("div",[a("sketch-picker",{model:{value:t.newColor,callback:function(e){t.newColor=e},expression:"newColor"}}),a("button",{staticClass:"btn btn--primary",on:{click:function(e){return t.setColor(t.newColor.hex)}}},[t._v("Add Color")])],1)]),a("button",{staticClass:"btn btn--control",attrs:{slot:"reference",id:"colorPicker"},slot:"reference"},[a("span",{staticClass:"hide"},[t._v("Add Color")]),a("font-awesome-icon",{attrs:{icon:"plus"}}),a("div",{class:["current-color",{"current-color--bounce":t.bouncePickedColor}],style:{backgroundColor:t.currentColor.value}},[a("span",{staticClass:"current-color__doubled"},[t._v("Already here!")])]),a("span",{staticClass:"tip"},[t._v("A")])],1)])],1)],1),a("template",{slot:"control"},[a("button",{class:["btn btn--control",{"btn--active":t.isEraser}],on:{click:function(e){return t.eraser(!0)}}},[t._v("\n        Eraser "),a("font-awesome-icon",{attrs:{icon:"eraser"}}),a("span",{staticClass:"tip"},[t._v("E")])],1),a("button",{class:["btn btn--control",{"btn--active":!t.isEraser}],on:{click:function(e){return t.eraser(!1)}}},[t._v("\n        Pencil "),a("font-awesome-icon",{attrs:{icon:"pen"}}),a("span",{staticClass:"tip"},[t._v("P")])],1),a("popper",{attrs:{trigger:"click",options:{placement:"bottom"}}},[a("div",{staticClass:"popper"},[a("div",{staticClass:"zoom-config"},[a("button",{class:["btn btn--control",{"btn--disabled":8===t.zoom}],attrs:{id:"zoom-in"},on:{click:function(e){return t.zoomIn()}}},[t._v("\n                Zoom In \n                "),a("font-awesome-icon",{attrs:{icon:"search-plus"}}),a("span",{staticClass:"tip"},[t._v("+")])],1),a("button",{class:["btn btn--control",{"btn--disabled":t.zoom===1/this.tileSize}],attrs:{id:"zoom-out"},on:{click:function(e){return t.zoomOut()}}},[t._v("\n                Zoom Out \n                "),a("font-awesome-icon",{attrs:{icon:"search-minus"}}),a("span",{staticClass:"tip"},[t._v("-")])],1),a("button",{staticClass:"btn btn--control",attrs:{id:"zoom-reset"},on:{click:function(e){return t.zoomReset()}}},[t._v("Reset Zoom \n                "),a("font-awesome-icon",{attrs:{icon:"search"}}),a("span",{staticClass:"tip"},[t._v("]")])],1)]),a("div",[t._v("Zoom "+t._s(100*t.zoom)+"%")])]),a("button",{staticClass:"btn btn--control",attrs:{slot:"reference",id:"zoom"},slot:"reference"},[t._v("\n            Zoom "),a("font-awesome-icon",{attrs:{icon:"search"}}),a("span",{staticClass:"tip"},[t._v("Z")])],1)]),a("button",{staticClass:"btn btn--control",on:{click:function(e){return t.undo()}}},[t._v("\n        Undo "),a("font-awesome-icon",{attrs:{icon:"undo"}}),a("span",{staticClass:"tip"},[t._v("U")])],1),a("button",{staticClass:"btn btn--control",on:{click:function(e){t.showModal=!0}}},[t._v("\n        Clean "),a("font-awesome-icon",{attrs:{icon:"times"}}),a("span",{staticClass:"tip"},[t._v("X")])],1),t.showModal?a("modal",{on:{quit:function(e){t.showModal=!1},accept:function(e){t.showModal=!1,t.setList()}}},[a("h3",{attrs:{slot:"header"},slot:"header"},[t._v("Are you sure?")]),a("p",{attrs:{slot:"body"},slot:"body"},[t._v("This is wipe out all the work done so far.")])]):t._e(),a("popper",{attrs:{trigger:"click",options:{placement:"bottom"}}},[a("div",{staticClass:"popper"},[a("div",{staticClass:"settings"},[a("label",{attrs:{for:"canvas-width"}},[t._v("Canvas Width")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCanvasWidth,expression:"newCanvasWidth"}],attrs:{type:"text",placeholder:"Canvas Width",name:"canvas-width"},domProps:{value:t.newCanvasWidth},on:{input:function(e){e.target.composing||(t.newCanvasWidth=e.target.value)}}}),a("label",{attrs:{for:"canvas-height"}},[t._v("Canvas Height")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCanvasHeight,expression:"newCanvasHeight"}],attrs:{type:"text",placeholder:"Canvas Height",name:"canvas-height"},domProps:{value:t.newCanvasHeight},on:{input:function(e){e.target.composing||(t.newCanvasHeight=e.target.value)}}}),a("label",{attrs:{for:"tile-size"}},[t._v("Tile Size")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTileSize,expression:"newTileSize"}],attrs:{type:"text",placeholder:"Tile Size",name:"tile-size"},domProps:{value:t.newTileSize},on:{input:function(e){e.target.composing||(t.newTileSize=e.target.value)}}})]),a("button",{staticClass:"btn btn--primary",on:{click:t.setNewConfig}},[t._v("Ok!")])]),a("button",{staticClass:"btn btn--control",attrs:{slot:"reference",id:"settings"},slot:"reference"},[t._v("\n            Settings "),a("font-awesome-icon",{attrs:{icon:"cog"}}),a("span",{staticClass:"tip"},[t._v("S")])],1)]),a("popper",{attrs:{trigger:"click",options:{placement:"top"}}},[a("div",{staticClass:"popper"},[a("h3",[t._v("Build")]),t.generatedArt?a("textarea",{ref:"buildTextarea",staticClass:"generated-art-field",on:{click:function(e){return t.copyContent()}}},[t._v(t._s(this.generatedArt.trim()))]):t._e(),a("div",{class:["generated-art-field__copy",{"generated-art-field__copy--show":t.showCopiedTip}]},[t._v("Copied!")])]),a("button",{staticClass:"btn btn--control",attrs:{slot:"reference",id:"export"},on:{click:function(e){return t.generateArt()}},slot:"reference"},[t._v("\n            Build "),a("font-awesome-icon",{attrs:{icon:"plus-circle"}}),a("span",{staticClass:"tip"},[t._v("B")])],1)]),a("button",{staticClass:"btn btn--control",on:{click:function(e){return t.toggleGrid()}}},[t._v("\n        "+t._s(t.showGrid?"Hide Grid":"Show Grid")+" "),a("font-awesome-icon",{attrs:{icon:"th-large"}}),a("span",{staticClass:"tip"},[t._v("G")])],1),t.showGrid?a("button",{staticClass:"btn btn--control",on:{click:function(e){return t.toggleRuler()}}},[t._v("\n        "+t._s(t.showRuler?"Hide Ruler":"Show Ruler")+" "),a("font-awesome-icon",{attrs:{icon:"ruler"}}),a("span",{staticClass:"tip"},[t._v("R")])],1):t._e()],1)],2),a("Tiles",{attrs:{list:t.updatedList,"canvas-width":t.canvasWidth,"canvas-height":t.canvasHeight,"tile-size":t.tileSize*t.zoom,"show-grid":t.showGrid,"show-ruler":t.showRuler},on:{"update-tiles":t.updateTiles}})],1)},_=[],x=a("5176"),z=a.n(x),L=(a("c5f6"),a("cebc")),T={name:"Editor",data:function(){return{newColor:"",newCanvasWidth:8,newCanvasHeight:8,newTileSize:10,showCopiedTip:!1,showModal:!1}},computed:Object(r["c"])(["updatedList","canvasWidth","canvasHeight","showGrid","showRuler","zoom","tileSize","paletteList","currentColor","generatedArt","bouncePickedColor","isEraser"]),mounted:function(){(!this.updatedList||this.updatedList.length<=0)&&this.setList(),this.bindKeyEvents(),this.newCanvasWidth=this.canvasWidth,this.newCanvasHeight=this.canvasHeight,this.newTileSize=this.tileSize},methods:Object(L["a"])({},Object(r["b"])(["setUpdatedList","toggleGrid","toggleRuler","zoomIn","zoomOut","zoomReset","addColor","pickedColor","generateArt","eraser","undo","setCanvasWidth","setCanvasHeight","setTileSize","setList"]),{setNewConfig:function(){this.setCanvasWidth(Number(this.newCanvasWidth)),this.setCanvasHeight(Number(this.newCanvasHeight)),this.setTileSize(Number(this.newTileSize)),this.setList()},updateTiles:function(t){var e=this,a=this.updatedList.map(function(a){var i=null;return a.id===t.id&&(i=z()({},a),e.isEraser?i.color="transparent":i.color=e.currentColor.value),i||a});this.setUpdatedList({list:a,first:!1,pressed:t.pressed})},setColor:function(t){this.addColor(t),this.newColor=""},copyContent:function(){var t=this,e=this.$refs.buildTextarea;e.select(),document.execCommand("copy"),this.showCopiedTip=!0,setTimeout(function(){t.showCopiedTip=!1},3e3)},bindKeyEvents:function(){var t=this;document.addEventListener("keydown",function(e){var a=e.key;if("c"===a.toLowerCase()){var i=document.querySelector("#palette > li > button");i.focus()}if("e"===a.toLowerCase()&&t.eraser(!0),"p"===a.toLowerCase()&&t.eraser(!1),"u"===a.toLowerCase()&&t.undo(),"x"===a.toLowerCase()&&t.generateList(),"g"===a.toLowerCase()&&t.toggleGrid(),"r"===a.toLowerCase()&&t.toggleRuler(),"z"===a.toLowerCase()){var r=document.querySelector("#zoom");r.click()}if("+"===a.toLowerCase()){var s=document.querySelector("#zoom-in");s.click()}if("-"===a.toLowerCase()){var o=document.querySelector("#zoom-out");o.click()}if("]"===a.toLowerCase()){var n=document.querySelector("#zoom-reset");n.click()}if("a"===a.toLowerCase()){var c=document.querySelector("#colorPicker");c.click()}if("s"===a.toLowerCase()){var l=document.querySelector("#settings");l.click()}if("b"===a.toLowerCase()){var d=document.querySelector("#export");d.click()}})}})},H=T,W=(a("58d3"),Object(k["a"])(H,S,_,!1,null,null,null)),O=W.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tiles-wrapper"},[a("ul",{class:["tiles",{"tiles--grid":t.showGrid},{"tiles--ruler":t.showRuler}],style:t.canvasStyle},t._l(t.list,function(e,i){return a("li",{key:i,class:[{"first-row":i<t.canvasWidth},{"first-column":i%t.canvasWidth===0}],style:{backgroundColor:e.color},on:{mousedown:function(a){return a.preventDefault(),t.clicked(e.id)},mouseup:function(e){return e.preventDefault(),t.release()},mouseover:function(a){return a.preventDefault(),t.over(e.id)}}},[a("div",{staticClass:"tile__info"},[a("div",{staticClass:"tile__info__x"},[t._v(t._s(e.xs+1))]),a("div",{staticClass:"tile__info__y"},[t._v(t._s(e.ys+1))]),a("div",{staticClass:"tile__info__xy"},[t._v("1")])])])}),0)])},P=[],R={name:"Tiles",props:{list:{required:!0,type:Array},tileSize:{required:!0,type:Number},canvasWidth:{required:!1,type:Number},canvasHeight:{required:!1,type:Number},showGrid:{required:!1,type:Boolean},showRuler:{required:!1,type:Boolean}},data:function(){return{pressedItemId:null}},computed:{canvasStyle:function(){return[{"grid-template-columns":"repeat(".concat(this.canvasWidth,", ").concat(this.tileSize,"px)")},{"grid-template-rows":"repeat(".concat(this.canvasHeight,", ").concat(this.tileSize,"px)")}]}},methods:{clicked:function(t){this.$emit("update-tiles",{id:t,pressed:!1}),this.pressedItemId=t},release:function(){this.pressedItemId=null},over:function(t){this.pressedItemId&&this.pressedItemId!==t&&this.$emit("update-tiles",{id:t,pressed:!0})}}},A=R,G=(a("8c6a"),Object(k["a"])(A,E,P,!1,null,"01a1bf9b",null)),j=G.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"color-palette"},[a("div",{staticClass:"color-palette__bg"},t._l(32,function(t){return a("div",{key:t,staticClass:"color-palette__bg__tile"})}),0),t._l(t.paletteList,function(e,i){return a("li",{key:i,on:{click:function(a){return t.pickedColor(e)}}},[a("button",{style:{backgroundColor:e.value}},[e.name?a("span",[t._v(t._s(e.name))]):t._e()])])})],2)},I=[],$={name:"color-palette",props:{paletteList:{required:!0,type:Array}},methods:{pickedColor:function(t){this.$emit("current-color",t)}}},M=$,N=(a("9379"),Object(k["a"])(M,q,I,!1,null,"d6afa156",null)),U=N.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"brand"},[t._t("brand")],2)])},B=[],J={name:"Header"},K=J,X=(a("70ee"),Object(k["a"])(K,Z,B,!1,null,"617ae0df",null)),F=X.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"palette"},[t._t("palette")],2),a("div",{staticClass:"control"},[t._t("control")],2)])},V=[],Y={name:"Toolbar"},tt=Y,et=(a("b751"),Object(k["a"])(tt,Q,V,!1,null,null,null)),at=et.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer",[a("button",{staticClass:"btn btn--primary",on:{click:function(e){return t.$emit("accept")}}},[t._v("\n              OK\n            ")]),a("button",{staticClass:"btn btn--secondary",on:{click:function(e){return t.$emit("quit")}}},[t._v("\n              Cancel\n            ")])])],2)])])])])},rt=[],st={name:"Modal"},ot=st,nt=(a("372a"),Object(k["a"])(ot,it,rt,!1,null,"01d25626",null)),ct=nt.exports;u["a"].autoAddCss=!1,u["c"].add(v["a"]),i["a"].component("font-awesome-icon",p["a"]),i["a"].component("sketch-picker",g["Sketch"]),i["a"].component("popper",C.a),i["a"].component("Editor",O),i["a"].component("Tiles",j),i["a"].component("ColorPalette",U),i["a"].component("Header",F),i["a"].component("Toolbar",at),i["a"].component("Modal",ct),i["a"].config.productionTip=!0,i["a"].config.devtools=!0,new i["a"]({store:d,render:function(t){return t(w)}}).$mount("#app")},"58d3":function(t,e,a){"use strict";var i=a("1728"),r=a.n(i);r.a},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),r=a.n(i);r.a},"5e27":function(t,e,a){},"6cdc":function(t,e,a){},"70ee":function(t,e,a){"use strict";var i=a("6cdc"),r=a.n(i);r.a},"881f":function(t,e,a){},"8c6a":function(t,e,a){"use strict";var i=a("3344"),r=a.n(i);r.a},9379:function(t,e,a){"use strict";var i=a("d186"),r=a.n(i);r.a},b751:function(t,e,a){"use strict";var i=a("f007"),r=a.n(i);r.a},d186:function(t,e,a){},f007:function(t,e,a){}});
//# sourceMappingURL=app.e143e640.js.map