(function(){"use strict";var e={5619:function(e,t,a){var r=a(9242),s=a(3396);const n=e=>((0,s.dD)("data-v-6a0f142b"),e=e(),(0,s.Cn)(),e),o=n((()=>(0,s._)("header",null,[(0,s._)("h1",null,"PlayList")],-1))),l={class:"customFilterArea"},i=n((()=>(0,s._)("footer",null,[(0,s._)("p",null,[(0,s.Uk)("© PlayList 2023 - "),(0,s._)("a",{href:"adult"},"hiiragi.dev")])],-1)));function c(e,t,a,n,c,u){const d=(0,s.up)("PurchaseStatusArea"),m=(0,s.up)("SearchArea"),f=(0,s.up)("FilterArea"),h=(0,s.up)("GameList");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.Wm)(d,{games:c.filteredGames},null,8,["games"]),(0,s._)("div",l,[(0,s.Wm)(m,{modelValue:c.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>c.searchQuery=e)},null,8,["modelValue"]),(0,s.Wm)(f,{onPlatformSelected:u.handlePlatformSelected},null,8,["onPlatformSelected"])]),(0,s.Wm)(h,{filteredGames:c.filteredGames},null,8,["filteredGames"]),(0,s.wy)((0,s._)("div",{class:"pageTop",onClick:t[1]||(t[1]=(...e)=>u.pageTop&&u.pageTop(...e))},"▲",512),[[r.F8,c.scrollButtonActive]]),i])}a(560);var u=a(7139);const d=e=>((0,s.dD)("data-v-7dcadec4"),e=e(),(0,s.Cn)(),e),m={class:"purchaseStatusCount"},f={class:"statusCount"},h=d((()=>(0,s._)("div",{class:"statusLabel"},"未購入",-1))),p={class:"statusValue"},v={class:"statusCount"},g=d((()=>(0,s._)("div",{class:"statusLabel"},"購入済",-1))),_={class:"statusValue"};function w(e,t,a,r,n,o){return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",f,[h,(0,s._)("div",p,(0,u.zw)(o.notPurchasedCount),1)]),(0,s._)("div",v,[g,(0,s._)("div",_,(0,u.zw)(o.purchasedCount),1)])])}var y={props:{games:Array},computed:{notPurchasedCount(){return this.games.filter((e=>0===e.purchaseStatus)).length},purchasedCount(){return this.games.filter((e=>1===e.purchaseStatus)).length}}},D=a(89);const P=(0,D.Z)(y,[["render",w],["__scopeId","data-v-7dcadec4"]]);var S=P;const I={class:"searchArea"},b=["value"];function C(e,t,a,r,n,o){return(0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("input",{class:"searchBox",type:"text",value:n.searchQuery,onInput:t[0]||(t[0]=(...e)=>o.updateSearchQuery&&o.updateSearchQuery(...e)),placeholder:"キーワードを入力してください"},null,40,b)])}var G={props:{modelValue:String},data(){return{searchQuery:this.modelValue}},methods:{updateSearchQuery(e){this.searchQuery=e.target.value,this.$emit("update:modelValue",this.searchQuery)}}};const A=(0,D.Z)(G,[["render",C],["__scopeId","data-v-06130520"]]);var N=A;const O=e=>((0,s.dD)("data-v-63d52236"),e=e(),(0,s.Cn)(),e),k={class:"filterArea"},L=O((()=>(0,s._)("option",{value:"all",selected:""},"すべてのゲーム",-1))),j=O((()=>(0,s._)("option",{value:"0"},"未購入",-1))),Q=O((()=>(0,s._)("option",{value:"1"},"購入済",-1))),x=[L,j,Q];function z(e,t,a,n,o,l){return(0,s.wg)(),(0,s.iD)("div",k,[(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedPlatform=e),onChange:t[1]||(t[1]=(...e)=>l.emitPlatform&&l.emitPlatform(...e)),class:"gameSelectBox"},x,544),[[r.bM,o.selectedPlatform]])])}var B={data(){return{selectedPlatform:"all"}},methods:{emitPlatform(){this.$emit("platformSelected",this.selectedPlatform)}}};const V=(0,D.Z)(B,[["render",z],["__scopeId","data-v-63d52236"]]);var T=V;const W={class:"gameList"},Z={class:"gameInfoList"};function E(e,t,a,r,n,o){const l=(0,s.up)("PlatformName"),i=(0,s.up)("GameCard");return(0,s.wg)(),(0,s.iD)("div",W,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.platformNames,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s.Wm)(l,{platformName:e},null,8,["platformName"]),(0,s._)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.platformData[e],((e,t)=>((0,s.wg)(),(0,s.j4)(i,{key:t,gameInfo:e},null,8,["gameInfo"])))),128))])])))),128))])}const F=(0,s._)("div",{class:"borderLine"},null,-1);function U(e,t,a,r,n,o){return(0,s.wg)(),(0,s.iD)("section",null,[(0,s._)("h2",null,(0,u.zw)(a.platformName),1),F])}var M={props:{platformName:String}};const Y=(0,D.Z)(M,[["render",U]]);var H=Y;const K={class:"gameCard"},$=["href"],R=["src","title"],X={class:"gameName"},q={class:"gameInfoBoxLeft"},J={class:"gameInfo"},ee={class:"gameInfo"},te={class:"gameInfo"},ae={class:"gameRank"};function re(e,t,a,r,n,o){return(0,s.wg)(),(0,s.iD)("div",K,[(0,s._)("a",{href:a.gameInfo.url,target:"_blank"},[(0,s._)("img",{class:(0,u.C_)({gameImg:!0,gameImgFilter:0===a.gameInfo.purchaseStatus}),src:a.gameInfo.image,title:a.gameInfo.title},null,10,R)],8,$),(0,s._)("div",X,(0,u.zw)(a.gameInfo.title),1),(0,s._)("div",{class:(0,u.C_)(["gameInfoBox","gameStatusColor"+(0===a.gameInfo.purchaseStatus?"Off":"On")])},[(0,s._)("div",q,[(0,s._)("div",J,(0,u.zw)("9999-99-99"===a.gameInfo.releaseDate?"未定":a.gameInfo.releaseDate),1),(0,s._)("div",ee,(0,u.zw)(0===a.gameInfo.packageType?"パッケージ版":"ダウンロード版"),1),(0,s._)("div",te,(0,u.zw)(0===a.gameInfo.purchaseStatus?"未購入":"購入済"),1)]),(0,s._)("div",ae,(0,u.zw)(a.gameInfo.rank),1)],2)])}var se={props:{gameInfo:Object}};const ne=(0,D.Z)(se,[["render",re],["__scopeId","data-v-407f09f0"]]);var oe=ne,le={props:{filteredGames:Array},data(){return{platformData:{PlayStation5:[],"Nintendo Switch":[],PlayStation4:[],"PlayStation Vita":[],"Nintendo 3DS":[],PlayStation3:[],"Nintendo Wii":[],"Xbox 360":[],"PlayStation Portable":[],"Nintendo DS":[],"Nintendo GAMECUBE":[],"Nintendo Game Boy Advance":[],PlayStation2:[],PC:[],ADULTGAME:[]}}},computed:{platformNames(){return Object.keys(this.platformData).filter((e=>this.platformData[e].length>0))}},watch:{filteredGames:{immediate:!0,handler:function(e){for(const t in this.platformData)this.platformData[t]=[];e.forEach((e=>{const t=e.platform;this.platformData[t].push(e)}))}}},components:{PlatformName:H,GameCard:oe}};const ie=(0,D.Z)(le,[["render",E],["__scopeId","data-v-67f4bc8d"]]);var ce=ie,ue={data(){return{games:[],filteredGames:[],searchQuery:"",selectedPlatform:"",scrollButtonActive:!1,scrollSize:0}},created(){this.loadGameData()},mounted(){window.addEventListener("scroll",this.scrollWindow)},methods:{pageTop(){window.scrollTo({top:0,behavior:"smooth"})},scrollWindow(){const e=100;this.scrollSize=window.scrollY,e<=this.scrollSize?this.scrollButtonActive=!0:this.scrollButtonActive=!1},loadGameData(){fetch("/json/game.json").then((e=>e.json())).then((e=>{this.games=e.sort(((e,t)=>this.parseDate(e.releaseDate)-this.parseDate(t.releaseDate))),this.filterGames()}))},parseDate(e){const t=e.split("-"),a=parseInt(t[0],10),r=parseInt(t[1],10)-1,s=parseInt(t[2],10)-1;return new Date(a,r,s)},filterGames(){this.filteredGames=[...this.games];const e=[];this.searchQuery&&e.push((e=>e.title.toLowerCase().includes(this.searchQuery.toLowerCase()))),this.selectedPlatform&&e.push((e=>"all"==this.selectedPlatform||e.purchaseStatus==this.selectedPlatform)),this.filteredGames=this.filteredGames.filter((t=>e.every((e=>e(t)))))},handlePlatformSelected(e){this.selectedPlatform=e}},computed:{platformNames(){return Object.keys(this.platformData).filter((e=>this.platformData[e].length>0))}},watch:{searchQuery:"filterGames",selectedPlatform:"filterGames"},components:{PurchaseStatusArea:S,SearchArea:N,FilterArea:T,GameList:ce}};const de=(0,D.Z)(ue,[["render",c],["__scopeId","data-v-6a0f142b"]]);var me=de;(0,r.ri)(me).mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,n){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,o=r[0],l=r[1],i=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(i)var u=i(a)}for(t&&t(r);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self["webpackChunkplaylist"]=self["webpackChunkplaylist"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5619)}));r=a.O(r)})();
//# sourceMappingURL=app.81840fd7.js.map