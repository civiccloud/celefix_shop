webpackJsonp([30],{188:function(e,t,n){n(594);var a=n(23)(n(515),n(666),"data-v-276e0726",null);e.exports=a.exports},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(75),r=n.n(a);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},222:function(e,t,n){t=e.exports=n(167)(),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#35495e}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#ccc}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #ccc;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',"",{version:3,sources:["C:/xampp/htdocs/celelink_shop/node_modules/vux/src/components/x-header/index.vue"],names:[],mappings:"AAgHA,YACE,kBAAmB,AACnB,cAAe,AACf,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,8BACE,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,qDAEE,cAAe,AACf,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,mCACE,oBAAsB,CACvB,AACD,2DAEE,kBAAmB,AACnB,SAAU,AACV,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,UAAY,CACb,AACD,wIAIE,WAAY,AACZ,iBAAkB,AAClB,UAAY,CACb,AACD,oKAIE,UAAa,CACd,AACD,6BACE,SAAW,CACZ,AACD,8CACE,iBAAmB,CACpB,AACD,yCACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,SAAU,AACV,SAAW,CACZ,AACD,gDACE,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,yBAA0B,AAC1B,iCAAkC,AAC1B,yBAA0B,AAClC,QAAS,AACT,QAAU,CACX,AACD,8BACE,UAAY,CACb,AACD,qEAEE,gBAAiB,AACjB,cAAgB,CACjB,AACD,qDACE,mCAA0C,AAC1C,cAAgB,CACjB,AACD,uCACE,8BAA+B,AACvB,qBAAuB,CAChC,AACD,sCACE,8BAA+B,AACvB,qBAAuB,CAChC,AACD,2BACA,GACI,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACxC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,mBACA,GACI,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACxC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,2BACA,GACI,UAAW,AACX,qCAAsC,AAC9B,4BAA8B,CACzC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,mBACA,GACI,UAAW,AACX,qCAAsC,AAC9B,4BAA8B,CACzC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA",file:"index.vue",sourcesContent:['/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-header {\n  position: relative;\n  padding: 3px 0;\n  box-sizing: border-box;\n  background-color: #35495e;\n}\n.vux-header .vux-header-title {\n  line-height: 40px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  color: #fff;\n}\n.vux-header-title-area,\n.vux-header .vux-header-title {\n  margin: 0 88px;\n  height: 40px;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vux-header .vux-header-title > span {\n  display: inline-block;\n}\n.vux-header .vux-header-left,\n.vux-header .vux-header-right {\n  position: absolute;\n  top: 14px;\n  display: block;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a,\n.vux-header .vux-header-left button,\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  float: left;\n  margin-right: 8px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a:active,\n.vux-header .vux-header-left button:active,\n.vux-header .vux-header-right a:active,\n.vux-header .vux-header-right button:active {\n  opacity: 0.5;\n}\n.vux-header .vux-header-left {\n  left: 18px;\n}\n.vux-header .vux-header-left .vux-header-back {\n  padding-left: 16px;\n}\n.vux-header .vux-header-left .left-arrow {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: -5px;\n  left: -5px;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  content: "";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #ccc;\n  border-width: 1px 0 0 1px;\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n  top: 8px;\n  left: 7px;\n}\n.vux-header .vux-header-right {\n  right: 15px;\n}\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  margin-left: 8px;\n  margin-right: 0;\n}\n.vux-header .vux-header-right .vux-header-more:after {\n  content: "\\2022\\0020\\2022\\0020\\2022\\0020";\n  font-size: 16px;\n}\n.vux-header-fade-in-right-enter-active {\n  -webkit-animation: fadeinR .5s;\n          animation: fadeinR .5s;\n}\n.vux-header-fade-in-left-enter-active {\n  -webkit-animation: fadeinL .5s;\n          animation: fadeinL .5s;\n}\n@-webkit-keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@-webkit-keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n'],sourceRoot:""}])},223:function(e,t,n){var a=n(222);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(168)("964e0424",a,!0)},224:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[n("transition",{attrs:{name:e.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),n("transition",{attrs:{name:e.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():n("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[n("transition",{attrs:{name:e.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?n("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),n("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},225:function(e,t,n){n(223);var a=n(23)(n(221),n(224),null,null);e.exports=a.exports},456:function(e,t,n){e.exports=n.p+"static/img/personallogo.e4601d5.png"},515:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(225),r=n.n(a),i=n(76);t.default={components:{XHeader:r.a},data:function(){return{title:"关于我们",phone:"",copyright:"",abstract:"",copyrightText:""}},mounted:function(){var e=this;n.i(i.h)(1).then(function(t){e.copyrightText=t.data.copyright,e.abstract=t.data.edition}),n.i(i.h)(4).then(function(t){e.copyright=t.data.copyright,e.phone=t.data.edition})}}},550:function(e,t,n){t=e.exports=n(167)(),t.push([e.i,".about[data-v-276e0726]{text-align:center}.about img[data-v-276e0726]{width:2.50666rem;height:2.50666rem;margin-top:1.28rem;margin-bottom:.34666em}.about .version[data-v-276e0726]{margin-bottom:.92rem}.about p[data-v-276e0726]{margin-bottom:.45333rem}","",{version:3,sources:["C:/xampp/htdocs/celelink_shop/src/page/personal/About.vue"],names:[],mappings:"AACA,wBACE,iBAAmB,CACpB,AACD,4BACI,iBAAkB,AAClB,kBAAmB,AACnB,mBAAoB,AACpB,sBAAyB,CAC5B,AACD,iCACI,oBAAuB,CAC1B,AACD,0BACI,uBAA0B,CAC7B",file:"About.vue",sourcesContent:["\n.about[data-v-276e0726] {\n  text-align: center;\n}\n.about img[data-v-276e0726] {\n    width: 2.50666rem;\n    height: 2.50666rem;\n    margin-top: 1.28rem;\n    margin-bottom: 0.34666em;\n}\n.about .version[data-v-276e0726] {\n    margin-bottom: 0.92rem;\n}\n.about p[data-v-276e0726] {\n    margin-bottom: 0.45333rem;\n}\n"],sourceRoot:""}])},594:function(e,t,n){var a=n(550);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(168)("1bc54a88",a,!0)},666:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v(e._s(e.title))]),e._v(" "),a("x-header",{staticClass:"page-head",attrs:{"left-options":{backText:""},title:e.title}}),e._v(" "),a("img",{attrs:{src:n(456),alt:""}}),e._v(" "),a("p",{staticClass:"version"},[e._v("yizhitao：1.0.0")]),e._v(" "),a("p",[e._v("微信订阅号：yizhitao")]),e._v(" "),a("p",[e._v("微信服务号：yizhitao8888")]),e._v(" "),a("p",[e._v(e._s(e.copyright)+"："+e._s(e.phone))]),e._v(" "),a("p",[e._v(e._s(e.abstract))]),e._v(" "),a("p",[e._v(e._s(e.copyrightText))])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=30.71bf0f8ded67a6355428.js.map