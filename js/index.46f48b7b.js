(function(e){function t(t){for(var r,l,a=t[0],o=t[1],u=t[2],p=0,y=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&y.push(n[l][0]),n[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(t);while(y.length)y.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,a=1;a<i.length;a++){var o=i[a];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=i[0]))}return e}var r={},n={index:0},s=[];function l(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=r,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(i,r,function(t){return e[t]}.bind(null,r));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-aliplayer-v2/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=o;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("c31f")},c31f:function(e,t,i){"use strict";i.r(t);i("96dd"),i("a60a"),i("e783"),i("8b1f");var r=i("6e6d"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[!e.isShowMultiple&&e.show?[i("vue-aliplayer-v2",{ref:"VueAliplayerV2",attrs:{source:e.source,options:e.options}})]:e._e(),e.isShowMultiple&&e.show?i("div",{staticClass:"show-multiple"},[e._l(5,(function(t){return[i("vue-aliplayer-v2",{key:t,ref:"VueAliplayerV2",refInFor:!0,staticClass:"multiple-player",attrs:{source:e.source,options:e.options}})]}))],2):e._e(),e.show?e._e():i("p",{staticClass:"remove-text"},[e._v("播放器已销毁!")]),i("div",{staticClass:"player-btns"},[!e.isShowMultiple&&e.show?[i("span",{on:{click:function(t){return e.play()}}},[e._v("播放")]),i("span",{on:{click:function(t){return e.pause()}}},[e._v("暂停")]),i("span",{on:{click:function(t){return e.replay()}}},[e._v("重播")]),i("span",{on:{click:function(t){return e.getCurrentTime()}}},[e._v("播放时刻")]),i("span",{on:{click:function(t){return e.getStatus()}}},[e._v("获取播放器状态")])]:e._e(),i("span",{on:{click:function(t){e.show=!e.show}}},[e._v(e._s(e.show?"销毁":"重载"))]),i("span",{on:{click:function(t){e.options.isLive=!e.options.isLive}}},[e._v(e._s(e.options.isLive?"切换普通模式":"切换直播模式"))]),i("span",{on:{click:function(t){return e.showMultiple()}}},[e._v(e._s(e.isShowMultiple?"显示1个播放器":"显示多个播放器"))])],2),i("div",{staticClass:"source-box"},[i("span",{staticClass:"source-label"},[e._v("选择播放源(支持动态切换):")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],attrs:{name:"source",id:"source"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.source=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"//player.alicdn.com/video/aliyunmedia.mp4"}},[e._v("播放源1")]),i("option",{attrs:{value:"//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4"}},[e._v("播放源2")]),i("option",{attrs:{value:"//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888"}},[e._v("播放源3")]),i("option",{attrs:{value:"//ivi.bupt.edu.cn/hls/cctv1.m3u8"}},[e._v("直播播放源4")])])]),i("div",{staticClass:"source-box"},[i("span",{staticClass:"source-label"},[e._v("输入播放源(支持动态切换):")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],staticClass:"source-input",attrs:{type:"text"},domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}})])],2)},s=[],l={data:function(){return{options:{isLive:!0},source:"//player.alicdn.com/video/aliyunmedia.mp4",show:!0,isShowMultiple:!1}},methods:{play:function(){this.$refs.VueAliplayerV2.play()},pause:function(){this.$refs.VueAliplayerV2.pause()},replay:function(){this.$refs.VueAliplayerV2.replay()},getCurrentTime:function(){this.source="http://ivi.bupt.edu.cn/hls/cctv1.m3u8"},getStatus:function(){var e=this.$refs.VueAliplayerV2.getStatus();console.log("getStatus:",e),alert("getStatus:".concat(e))},showMultiple:function(){this.isShowMultiple=!this.isShowMultiple}}},a=l,o=(i("e780"),i("4e82")),u=Object(o["a"])(a,n,s,!1,null,null,null),c=u.exports,p=(i("7cfd"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:e.playerId}})}),y=[],h=(i("4634"),i("cc1d"),{name:"VueAliplayerV2",props:{options:{required:!1,type:[Object],default:function(){return null}},source:{required:!1,type:[String],default:null},cssLink:{required:!1,type:[String],default:"https://g.alicdn.com/de/prismplayer/2.9.0/skins/default/aliplayer-min.css"},scriptSrc:{required:!1,type:[String],default:"https://g.alicdn.com/de/prismplayer/2.9.0/aliplayer-min.js"}},data:function(){return{player:null,playerId:"player-".concat(Math.random().toString(36).substr(2).toLocaleUpperCase()),config:{id:null,width:"100%",autoplay:!0},events:["ready","play","pause","canplay","playing","ended","liveStreamStop","onM3u8Retry","hideBar","showBar","waiting","timeupdate","snapshoted","requestFullScreen","cancelFullScreen","error","startSeek","completeSeek"]}},watch:{source:function(){this.init()},options:{handler:function(){this.init()},deep:!0}},mounted:function(){var e=this;this.$nextTick((function(){e.init()}))},updated:function(){var e=this;this.$nextTick((function(){e.init()}))},methods:{init:function(){var e=this,t="aliplayer-min-css",i="aliplayer-min-js",r=document.getElementsByTagName("head"),n=document.getElementsByTagName("html"),s=document.getElementById(i),l=document.getElementById(t);if(!l){var a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=this.cssLink,a.id=t,r[0].appendChild(a)}s?this.initPlayer():(s=document.createElement("script"),s.type="text/javascript",s.id=i,s.src=this.scriptSrc,n[0].appendChild(s)),s.addEventListener("load",(function(){e.initPlayer()}))},initPlayer:function(){var e=this;if("undefined"!=typeof window.Aliplayer){var t=this.options;if(t)for(var i in t)this.config[i]=t[i];this.source&&(this.config.source=this.source),this.config.id=this.playerId,this.player&&this.player.dispose(),this.player=Aliplayer(this.config);var r=function(t){e.player&&e.player.on(e.events[t],(function(i){e.$emit(e.events[t],i)}))};for(var n in this.events)r(n)}},getPlayer:function(){return this.player},play:function(){this.player&&this.player.play()},pause:function(){this.player&&this.player.pause()},replay:function(){this.player&&this.player.replay()},seek:function(e){this.player&&this.player.seek(e)},getCurrentTime:function(){return this.player&&this.player.getCurrentTime()},getDuration:function(){return this.player&&this.player.getDuration()},getVolume:function(){return this.player&&this.player.getVolume()},setVolume:function(e){this.player&&this.player.setVolume(e)},loadByUrl:function(e,t){this.player&&this.player.loadByUrl(e,t)},replayByVidAndPlayAuth:function(e,t){this.player&&this.player.replayByVidAndPlayAuth(e,t)},replayByVidAndAuthInfo:function(e,t,i,r,n,s){this.player&&this.player.replayByVidAndAuthInfo(e,t,i,r,n,s)},setPlayerSize:function(e,t){this.player&&this.player.setPlayerSize(e,t)},setSpeed:function(e){this.player&&this.player.setSpeed(e)},setSanpshotProperties:function(e,t,i){this.player&&this.player.setSanpshotProperties(e,t,i)},requestFullScreen:function(){this.player&&this.player.fullscreenService&&this.player.fullscreenService.requestFullScreen()},cancelFullScreen:function(){this.player&&this.player.fullscreenService&&this.player.fullscreenService.cancelFullScreen()},getIsFullScreen:function(){return this.player&&this.player.fullscreenService&&this.player.fullscreenService.getIsFullScreen()},getStatus:function(){return this.player&&this.player.getStatus()},setLiveTimeRange:function(e,t){this.player&&this.player.liveShiftSerivce&&this.player.liveShiftSerivce.setLiveTimeRange(e,t)},setRotate:function(e){this.player&&this.player.setRotate(e)},getRotate:function(){return this.player&&this.player.getRotate()},setImage:function(e){this.player&&this.player.setImage(e)},dispose:function(){this.player&&this.player.dispose()},setCover:function(e){this.player&&this.player.setCover(e)},setProgressMarkers:function(e){this.player&&this.player.setProgressMarkers(e)},setPreviewTime:function(e){this.player&&this.player.setPreviewTime(e)},getPreviewTime:function(){return this.player&&this.player.getPreviewTime()},isPreview:function(){this.player&&this.player.isPreview()},off:function(e,t){this.player&&this.player.off(e,t)}},beforeDestroy:function(){this.dispose();var e=document.querySelector("head"),t=document.querySelectorAll('script[src="https://g.alicdn.com/de/prismplayer/2.8.2/hls/aliplayer-hls-min.js"]');e&&t.forEach((function(t){e.removeChild(t)}))}}),f=h,d=Object(o["a"])(f,p,y,!1,null,null,null),v=d.exports;v.install=function(e,t){t&&t.cssLink&&(v.props.cssLink.default=t.cssLink),t&&t.scriptSrc&&(v.props.scriptSrc.default=t.scriptSrc),e.component(v.name,v)},v.Player=v;var m=v;r["a"].use(m,{}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(c)}}).$mount("#app")},e780:function(e,t,i){"use strict";var r=i("f447"),n=i.n(r);n.a},f447:function(e,t,i){}});
//# sourceMappingURL=index.46f48b7b.js.map