(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee496ffe"],{4962:function(t,e,i){"use strict";i("9d01")},"9d01":function(t,e,i){},be3c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.total>t.size?i("div",{staticClass:"myCenter"},[i("ul",{staticClass:"page-content"},[1!==t.current?i("li",{staticClass:"page-item",on:{click:function(e){return t.toPage(-1)}}},[t._v(" 👈 ")]):t._e(),1===t.current?t._l(t.realButtonSize,(function(e){return i("li",{key:e,staticClass:"page-item",style:{background:1===e?t.color:"",color:1===e?"var(--white)":""},on:{click:function(i){return t.toPage(e)}}},[t._v(" "+t._s(e)+" ")])})):t.current===t.totalSize?t._l(t.realButtonSize,(function(e){return i("li",{key:e,staticClass:"page-item",style:{background:e===t.realButtonSize?t.color:"",color:e===t.realButtonSize?"var(--white)":""},on:{click:function(i){t.toPage(t.current-(t.realButtonSize-e))}}},[t._v(" "+t._s(t.current-(t.realButtonSize-e))+" ")])})):t._l(t.realButtonSize,(function(e){return i("li",{key:e,staticClass:"page-item",style:{background:Math.ceil(t.realButtonSize/2)-e===0?t.color:"",color:Math.ceil(t.realButtonSize/2)-e===0?"var(--white)":""},on:{click:function(i){t.toPage(t.current-(Math.ceil(t.realButtonSize/2)-e))}}},[t._v(" "+t._s(t.current-(Math.ceil(t.realButtonSize/2)-e))+" ")])})),t.current!==t.totalSize?i("li",{staticClass:"page-item",on:{click:function(e){return t.toPage(-2)}}},[t._v(" 👉 ")]):t._e()],2)]):t._e()},o=[],a=(i("a9e3"),{props:{current:{type:Number,default:1},size:{type:Number,default:10},total:{type:Number,default:0},buttonSize:{type:Number,default:3},color:{type:String,default:""}},data:function(){return{totalSize:0,realButtonSize:0}},computed:{},watch:{total:function(t){this.totalSize=Math.ceil(this.total/this.size),this.realButtonSize=this.buttonSize<this.totalSize?this.buttonSize:this.totalSize}},created:function(){this.totalSize=Math.ceil(this.total/this.size),this.realButtonSize=this.buttonSize<this.totalSize?this.buttonSize:this.totalSize},mounted:function(){},methods:{toPage:function(t){-1===t?this.$emit("toPage",this.current-1):-2===t?this.$emit("toPage",this.current+1):this.$emit("toPage",t)}}}),r=a,l=(i("4962"),i("2877")),u=Object(l["a"])(r,n,o,!1,null,"dadcd0fe",null);e["default"]=u.exports}}]);