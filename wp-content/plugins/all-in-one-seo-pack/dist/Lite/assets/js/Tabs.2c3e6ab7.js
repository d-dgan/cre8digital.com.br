import{S as c}from"./SaveChanges.68e73792.js";import{T as u}from"./TruSeoScore.98a47fd6.js";import{a as d,m as h}from"./vuex.esm.19624049.js";import{e as _,a as b}from"./Caret.eeb84d06.js";import{S as m}from"./Information.be119534.js";import{n as l}from"./vueComponentNormalizer.67c9b86e.js";import{T as v}from"./Slide.9538a421.js";var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"aioseo-ellipse",attrs:{viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{r:"2",transform:"matrix(-1 0 0 1 3 3)",fill:"currentColor",stroke:"currentColor","stroke-width":"2"}})])},p=[];const g={},i={};var w=l(g,f,p,!1,y,null,null,null);function y(t){for(let n in i)this[n]=i[n]}const M=function(){return w.exports}();var C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"aioseo-tabs",staticClass:"aioseo-tabs",class:{internal:t.internal,skinny:t.skinnyTabs}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMobileMenu||t.calculateWidth,expression:"!showMobileMenu || calculateWidth"}],ref:"tabs-scroller",staticClass:"tabs-scroller"},[e("md-tabs",{attrs:{"md-sync-route":!t.active,"md-active-tab":t.active},on:{"md-changed":function(s){return t.$emit("changed",s)}},scopedSlots:t._u([{key:"md-tab",fn:function(s){var a=s.tab;return[t._t("md-tab",function(){return[t._t("md-tab-icon",null,{tab:a}),e("span",{staticClass:"label"},[t._v(t._s(a.label))]),t.$root._data.screenContext==="sidebar"&&t.getActiveTabName()!==a.label?e("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(" "+t._s(a.label)+" ")]):t._e(),a.data.errorCount>=0?e("span",{staticClass:"tab-score",class:t.getErrorClass(t.currentPost.page_analysis.analysis[a.data.slug].errors)},[0<t.currentPost.page_analysis.analysis[a.data.slug].errors?e("svg-ellipse",{attrs:{width:"6"}}):t._e(),t.currentPost.page_analysis.analysis[a.data.slug].errors===0?e("svg-circle-check",{attrs:{width:"12"}}):t._e(),t._v(" "+t._s(t.getErrorDisplay(t.currentPost.page_analysis.analysis[a.data.slug].errors))+" ")],1):t._e(),a.data.warning&&t.$root._data.screenContext!=="sidebar"?e("span",{staticClass:"warning"},[e("svg-circle-information",{attrs:{width:"15",height:"15"}})],1):t._e()]},{tab:a})]}}],null,!0)},t._l(t.tabs,function(s,a){return e("md-tab",{key:a,attrs:{id:s.slug,"md-label":s.name,"md-icon":s.icon,to:s.url,"md-template-data":{pro:s.pro,analyze:s.analyze,errorCount:s.errorCount,slug:s.slug,warning:s.warning}}})}),1)],1),t.showMobileMenu?e("div",{staticClass:"aioseo-mobile-tabs"},[e("div",{staticClass:"active-tab",on:{click:function(s){t.showMobileTabs=!t.showMobileTabs}}},[e("div",[t._v(" "+t._s(t.getActiveTabName())+" "),e("svg-caret",{class:{rotated:!t.showMobileTabs},on:{click:function(s){s.stopPropagation(),t.showMobileTabs=!t.showMobileTabs}}}),e("span",{staticClass:"tab-indicator"})],1)]),e("transition-slide",{staticClass:"tab-dropdown",attrs:{active:t.showMobileTabs}},[e("div",{staticClass:"tab-links"},[t.active?t._e():t._l(t.filteredTabs,function(s,a){return e("router-link",{key:a,attrs:{to:s.url},nativeOn:{click:function(o){t.showMobileTabs=!1}}},[t._v(" "+t._s(s.name)+" ")])}),t.active?t._l(t.filteredTabs,function(s,a){return e("a",{key:a,attrs:{href:"#"},on:{click:function(o){o.preventDefault(),t.$emit("changed",s.slug)&&(t.showMobileTabs=!1)}}},[t._v(" "+t._s(s.name)+" ")])}):t._e()],2)])],1):t._e(),t.showSaveButton?e("div",{ref:"tabs-button",staticClass:"button-right"},[t._t("button",function(){return[e("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processSaveChanges}},[t._v(" "+t._s(t.strings.saveChanges)+" ")])]})],2):t._e()])},$=[];const S={components:{SvgCaret:_,SvgCircleCheck:b,SvgCircleInformation:m,SvgEllipse:M,TransitionSlide:v},mixins:[c,u],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:{saveChanges:this.$t.__("Save Changes",this.$td)}}},computed:{...d(["loading","currentPost"]),filteredTabs(){return this.tabs.filter(t=>t.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}},methods:{...h(["openModal"]),getActiveTabName(){const t=this.tabs.find(n=>n.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return t?t.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let t=0;this.calculateWidth=!0,this.$nextTick(()=>{t=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let n=0;const e=this.$refs["tabs-button"];if(e){const s=e.querySelector(".aioseo-button");n=s?s.scrollWidth:0}if(t+n>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})}},beforeDestroy(){window.removeEventListener("resize",this.maybeShowMobileMenu)},mounted(){window.addEventListener("resize",this.maybeShowMobileMenu),this.$nextTick(()=>this.maybeShowMobileMenu())}},r={};var T=l(S,C,$,!1,k,null,null,null);function k(t){for(let n in r)this[n]=r[n]}const L=function(){return T.exports}();export{L as C,M as S};
