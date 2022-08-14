"use strict";(self["webpackChunkevent_web_spa_vue3_comp_pinia"]=self["webpackChunkevent_web_spa_vue3_comp_pinia"]||[]).push([[404],{8865:function(e,t,a){a.d(t,{b:function(){return u}});var l=a(4301),n=a(5437),o=a(6035);let s=[];const i=async()=>{s=[];const e=(0,o.hJ)(n.db,"events"),t=(0,o.IO)(e,(0,o.Xo)("people")),a=await(0,o.PL)(t);return a.forEach((e=>{let t=Object.assign({},{id:e.id},e.data());s.push(t)})),s},u=(0,l.Q_)("events",{state:()=>({allEvents:[]}),getters:{},actions:{updateEvents(){i().then((e=>this.allEvents=e))}}})},7404:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var l=a(3396),n=a(7139),o=a(4870),s=a(9242),i=a(5437),u=a(6035);const d=async e=>{await(0,u.oe)((0,u.JU)(i.db,"events",e))},r=async(e,t)=>{await(0,u.pl)((0,u.JU)(i.db,"events",e),t)};var c=a(8922),v=a(8865),m=a(678),p=a(7312),w=a(5405),f=a(6572),h=a(1332),g=a(1334),_=a(1888),U=(a(6699),a(2583)),b=a(8423),k=a(4544),y=a(4906),x=a(8717),E=a(5975),S=a(1107),W=a(2385);const z=(0,S.e)()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...(0,k.x)({width:"auto"}),...(0,y.X)({transition:{component:U.v}})},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const s=(0,x.z)(e,"modelValue"),{dimensionStyles:i}=(0,k.$)(e),{scopeId:u}=(0,E.a)(),d=(0,o.iH)();function r(e){var t,a;const l=e.relatedTarget,n=e.target;if(l!==n&&null!=(t=d.value)&&t.contentEl&&null!=(a=d.value)&&a.isTop&&![document,d.value.contentEl].includes(n)&&!d.value.contentEl.contains(n)){const e=[...d.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")));if(!e.length)return;const t=e[0],a=e[e.length-1];l===t?a.focus():t.focus()}}return W.BR&&(0,l.YP)((()=>s.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)}),{immediate:!0}),(0,l.YP)(s,(async e=>{var t,a;(await(0,l.Y3)(),e)?null==(t=d.value.contentEl)||t.focus({preventScroll:!0}):null==(a=d.value.activatorEl)||a.focus({preventScroll:!0})})),()=>(0,l.Wm)(b.y,(0,l.dG)({modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}],style:i.value,transition:e.transition,ref:d,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(s.value)},"z-index":2400},u,a),{default:n.default,activator:n.activator})}});var C=a(4075),T=a(6824),V=a(8521),F=a(9234),H=a(8694);const D=e=>((0,l.dD)("data-v-28b2fc83"),e=e(),(0,l.Cn)(),e),A={class:"mt-4 d-flex justify-space-around"},Y={class:"title mt-2 pa-2 text-center text-blue"},j={class:"text-center text-lime-darken-1 mt-6"},q=(0,l.Uk)(" Total Events numbers: "),J={class:"text-red"},B={class:"mx-auto"},O=D((()=>(0,l._)("p",{class:"text-body-2 ml-2"},"Click button to see...",-1))),P=(0,l.Uk)("More "),I=D((()=>(0,l._)("h3",{class:"mb-1 text-decoration-underline"}," Description: ",-1))),N={class:"text-teal"},Z={class:"mb-1 text-decoration-underline"},L=(0,l.Uk)(" Date: "),G={class:"font-weight-light text-teal"},Q={class:"mb-1 text-decoration-underline"},X=(0,l.Uk)(" People interested in: "),K={class:"font-weight-light text-teal"},M={class:"mb-1 text-decoration-underline"},R=(0,l.Uk)(" Organizer: "),$={class:"font-weight-light text-teal"},ee=(0,l.Uk)(" Join the event "),te=(0,l.Uk)("Edit event "),ae=(0,l.Uk)("Delete event "),le=(0,l.Uk)("Exit "),ne={class:"text-center"},oe=(0,l.Uk)("No"),se=(0,l.Uk)("Yes");var ie={__name:"EventsView",setup(e){(0,m.tv)();const t=(0,c.a)(),a=(0,v.b)();(0,l.bv)((()=>a.updateEvents()));const i=(0,o.iH)(JSON.parse(localStorage.getItem("auth")).uid);let u=(0,o.iH)(!1),U=(0,o.iH)(!1),b=(0,o.iH)(""),k=(0,o.iH)("Are you sure to want to delete this event ?"),y=(0,o.iH)(!0),x=(0,o.iH)("");const E=(0,o.iH)("only my"),S=e=>{const t=a.allEvents.find((t=>t.id==e));b.value=t},W=()=>{u.value=!1},D=e=>{let t=a.allEvents.filter((t=>t.id==e))[0],l=t.voters.find((e=>e==i.value));l?(x.value="You have already voted!",console.log("You have already voted!")):(t.voters.push(i.value),t.people++,r(e,t),x.value="Thank you for like!",console.log("Thank you for like!")),setTimeout((()=>{u.value=!1,x.value=""}),2500)},ie=()=>{U.value=!0},ue=e=>{y.value=!1,d(e).then((()=>{a.updateEvents(),k.value="Event was be deleted success.",console.log("Event was be deleted success.")})).catch((e=>{k.value="Fail to delete event",e.message,console.log("Fail to delete event",e.message)})),setTimeout((()=>{k.value="Are you sure to want to delete this event ?",y.value=!0,u.value=!1,U.value=!1}),2500)},de=()=>{"only my"==E.value?(E.value="all",a.allEvents=a.allEvents.filter((e=>e.organizer==t.data.uid))):(a.updateEvents(),E.value="only my")};return(e,d)=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",A,[(0,l._)("h3",Y,[(0,l.Uk)((0,n.zw)(""+((0,o.SU)(t).isAuth?"Organize New Event":"Cannot find any event..."))+" ",1),(0,l._)("span",null,[(0,l.Wm)(p.T,{class:"",color:"red",variant:"outlined",size:"small",to:"/events/add"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(""+((0,o.SU)(t).isAuth?"Create":"Create first")),1)])),_:1})])])]),(0,l._)("div",j,[q,(0,l._)("span",J,(0,n.zw)((0,o.SU)(a).allEvents.length?(0,o.SU)(a).allEvents.length:0),1),(0,l.Wm)(p.T,{"min-width":"90",onClick:de,class:"ml-2",size:"small",with:"11",color:""+("all"==E.value?"blue-darken-4":"teal-darken-3")},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(E.value),1)])),_:1},8,["color"])]),(0,l._)("div",null,[(0,l.Wm)(T.o,{class:"d-flex align-center ma-4 mt-0"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,o.SU)(a).allEvents,((e,a)=>((0,l.wg)(),(0,l.j4)(V.D,{key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(w._,{class:"mx-auto bg-grey-darken-3 mt-12","min-width":"300","max-width":"300"},{default:(0,l.w5)((()=>[(0,l.Wm)(f.E,{class:""},{default:(0,l.w5)((()=>[(0,l._)("span",B,(0,n.zw)(e.title),1)])),_:2},1024),(0,l.Wm)(H.f,{src:e.image,height:"200",cover:""},null,8,["src"]),(0,l.Wm)(h.Q),(0,l.Wm)(g.h,null,{default:(0,l.w5)((()=>[O,(0,l.Wm)(F.C),(0,l.Wm)(T.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{transition:"dialog-center-transition",modelValue:(0,o.SU)(u),"onUpdate:modelValue":d[5]||(d[5]=e=>(0,o.dq)(u)?u.value=e:u=e),"max-width":"600","max-height":"600",class:"bg-grey-darken-3"},{activator:(0,l.w5)((({props:t})=>[(0,l.Wm)(p.T,(0,l.dG)(t,{id:a,width:"100",class:"bg-success",color:"white","prepend-icon":"mdi-swap-vertical-bold",onClick:t=>S(e.id)}),{default:(0,l.w5)((()=>[P])),_:2},1040,["id","onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(f.E,{class:"mx-auto mb-8 text-decoration-underline"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,o.SU)(b).title),1)])),_:1}),(0,l.Wm)(H.f,{src:(0,o.SU)(b).image,width:"400",height:"200",cover:"",class:"mx-auto"},null,8,["src"]),(0,l.Wm)(C.J),(0,l.Wm)(_.Z,null,{default:(0,l.w5)((()=>[I,(0,l._)("p",N,(0,n.zw)((0,o.SU)(b).description),1),(0,l._)("h3",Z,[L,(0,l._)("span",G,(0,n.zw)((0,o.SU)(b).date),1)]),(0,l._)("h3",Q,[X,(0,l._)("span",K,(0,n.zw)((0,o.SU)(b).people),1)]),(0,l._)("h3",M,[R,(0,l._)("span",$,(0,n.zw)((0,o.SU)(t).data.displayName),1)])])),_:1}),(0,l.Wm)(g.h,{class:"d-flex justify-space-around"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(p.T,{class:"bg-primary pa-2 mr-12",rounded:"4","append-icon":"mdi-thumb-up",color:"",variant:"outlined",onClick:d[0]||(d[0]=e=>D((0,o.SU)(b).id))},{default:(0,l.w5)((()=>[ee])),_:1},512),[[s.F8,i.value!=(0,o.SU)(b).organizer]]),(0,l.wy)((0,l.Wm)(p.T,{class:"bg-warning pa-2",rounded:"4","append-icon":"mdi-square-edit-outline",color:"",variant:"outlined",onClick:W,to:{name:"edit",params:{id:(0,o.SU)(b).id}}},{default:(0,l.w5)((()=>[te])),_:1},8,["to"]),[[s.F8,i.value==(0,o.SU)(b).organizer]]),(0,l.wy)((0,l.Wm)(p.T,{class:"bg-error pa-2",rounded:"4","append-icon":"mdi-delete",variant:"outlined",onClick:ie},{default:(0,l.w5)((()=>[ae])),_:1},512),[[s.F8,i.value==(0,o.SU)(b).organizer]]),(0,l.Wm)(p.T,{width:"100",class:"bg-success pa-2",rounded:"4","append-icon":"mdi-exit-run",variant:"outlined",onClick:d[1]||(d[1]=e=>(0,o.dq)(u)?u.value=!1:u=!1)},{default:(0,l.w5)((()=>[le])),_:1})])),_:1}),(0,l._)("div",ne,[(0,l.Wm)(z,{transition:"dialog-top-transition",modelValue:(0,o.SU)(U),"onUpdate:modelValue":d[4]||(d[4]=e=>(0,o.dq)(U)?U.value=e:U=e),activator:"parent"},{default:(0,l.w5)((()=>[(0,l.Wm)(w._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_.Z,{class:"text-black font-italic"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,o.SU)(k)),1)])),_:1}),(0,l.Wm)(g.h,{class:"d-flex justify-space-around"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(p.T,{color:"error ",onClick:d[2]||(d[2]=e=>(0,o.dq)(U)?U.value=!1:U=!1)},{default:(0,l.w5)((()=>[oe])),_:1},512),[[s.F8,(0,o.SU)(y)]]),(0,l.wy)((0,l.Wm)(p.T,{color:"green",onClick:d[3]||(d[3]=e=>[ue((0,o.SU)(b).id)])},{default:(0,l.w5)((()=>[se])),_:1},512),[[s.F8,(0,o.SU)(y)]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.wy)((0,l.Wm)(_.Z,{class:"mx-auto mt-2 text-yellow"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,o.SU)(x)),1)])),_:1},512),[[s.F8,!0]])])),_:2},1032,["modelValue"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])]))}},ue=a(89);const de=(0,ue.Z)(ie,[["__scopeId","data-v-28b2fc83"]]);var re=de}}]);
//# sourceMappingURL=404.8833508a.js.map