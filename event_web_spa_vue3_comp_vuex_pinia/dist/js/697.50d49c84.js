"use strict";(self["webpackChunkevent_web_spa_vue3_comp_pinia"]=self["webpackChunkevent_web_spa_vue3_comp_pinia"]||[]).push([[697],{8865:function(e,l,t){t.d(l,{b:function(){return n}});var a=t(4301),o=t(5437),r=t(6035);let i=[];const u=async()=>{i=[];const e=(0,r.hJ)(o.db,"events"),l=(0,r.IO)(e,(0,r.Xo)("people")),t=await(0,r.PL)(l);return t.forEach((e=>{let l=Object.assign({},{id:e.id},e.data());i.push(l)})),i},n=(0,a.Q_)("events",{state:()=>({allEvents:[]}),getters:{},actions:{updateEvents(){u().then((e=>this.allEvents=e))}}})},3369:function(e,l,t){t.d(l,{K:function(){return i}});var a=t(3396),o=(t(8099),t(1138)),r=t(1107);const i=(0,r.a)({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...(0,o.Q)()},setup(e,l){let{slots:t}=l;return()=>(0,a.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)}})},6353:function(e,l,t){t.d(l,{R:function(){return V}});var a=t(3396),o=t(8302),r=(t(1703),t(6699),t(9242)),i=t(8952),u=t(9903),n=t(4231),s=t(2465),v=t(4870),d=t(3766),c=t(131);const m=Symbol.for("vuetify:v-slider");function p(e,l,t){const a="vertical"===t,o=l.getBoundingClientRect(),r="touches"in e?e.touches[0]:e;return a?r.clientY-(o.top+o.height/2):r.clientX-(o.left+o.width/2)}function f(e,l){return"touches"in e&&e.touches.length?e.touches[0][l]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][l]:e[l]}const h=(0,d.U)({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>"boolean"===typeof e||"always"===e},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>"boolean"===typeof e||"always"===e},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...(0,n.I)(),...(0,s.c)({elevation:2})},"slider"),b=e=>{let{props:l,handleSliderMouseUp:t,handleMouseMove:o,getActiveThumb:r}=e;const{isRtl:i}=(0,u.Vw)(),n=(0,a.Fl)((()=>i.value!==l.reverse)),s=(0,a.Fl)((()=>{let e=i.value?"rtl":"ltr";return l.reverse&&(e="rtl"===e?"ltr":"rtl"),e})),d=(0,a.Fl)((()=>parseFloat(l.min))),h=(0,a.Fl)((()=>parseFloat(l.max))),b=(0,a.Fl)((()=>l.step>0?parseFloat(l.step):0)),k=(0,a.Fl)((()=>{const e=b.value.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0})),y=(0,a.Fl)((()=>parseInt(l.thumbSize,10))),g=(0,a.Fl)((()=>parseInt(l.tickSize,10))),w=(0,a.Fl)((()=>parseInt(l.trackSize,10))),x=(0,a.Fl)((()=>(h.value-d.value)/b.value)),F=(0,v.Vh)(l,"disabled"),S=(0,a.Fl)((()=>"vertical"===l.direction)),V=(0,a.Fl)((()=>{var e;return l.error||l.disabled?void 0:null!=(e=l.thumbColor)?e:l.color})),_=(0,a.Fl)((()=>{var e;return l.error||l.disabled?void 0:null!=(e=l.trackColor)?e:l.color})),C=(0,a.Fl)((()=>{var e;return l.error||l.disabled?void 0:null!=(e=l.trackFillColor)?e:l.color})),z=(0,v.iH)(!1),W=(0,v.iH)(0),N=(0,v.iH)(),T=(0,v.iH)();function B(e){if(b.value<=0)return e;const l=(0,c.uZ)(e,d.value,h.value),t=d.value%b.value,a=Math.round((l-t)/b.value)*b.value+t;return parseFloat(Math.min(a,h.value).toFixed(k.value))}function M(e){var t;const a="vertical"===l.direction,o=a?"top":"left",r=a?"height":"width",i=a?"clientY":"clientX",{[o]:u,[r]:s}=null==(t=N.value)?void 0:t.$el.getBoundingClientRect(),v=f(e,i);let c=Math.min(Math.max((v-u-W.value)/s,0),1)||0;return(a||n.value)&&(c=1-c),B(d.value+c*(h.value-d.value))}let P=!1;const E=e=>{P||(W.value=0,t(M(e))),z.value=!1,P=!1,W.value=0},H=e=>{T.value=r(e),T.value&&(T.value.focus(),z.value=!0,T.value.contains(e.target)?(P=!0,W.value=p(e,T.value,l.direction)):(W.value=0,o(M(e))))},R={passive:!0,capture:!0};function L(e){P=!0,o(M(e))}function Y(e){e.stopPropagation(),e.preventDefault(),E(e),window.removeEventListener("mousemove",L,R),window.removeEventListener("mouseup",Y)}function D(e){e.stopPropagation(),e.preventDefault(),E(e),window.removeEventListener("touchmove",L,R),window.removeEventListener("touchend",D)}function G(e){H(e),window.addEventListener("touchmove",L,R),window.addEventListener("touchend",D,{passive:!1})}function q(e){e.preventDefault(),H(e),window.addEventListener("mousemove",L,R),window.addEventListener("mouseup",Y,{passive:!1})}const I=e=>{const l=(e-d.value)/(h.value-d.value)*100;return(0,c.uZ)(isNaN(l)?0:l,0,100)},A=(0,a.Fl)((()=>l.ticks?Array.isArray(l.ticks)?l.ticks.map((e=>({value:e,position:I(e),label:e.toString()}))):Object.keys(l.ticks).map((e=>({value:parseInt(e,10),position:I(parseInt(e,10)),label:l.ticks[e]}))):x.value!==1/0?(0,c.MT)(x.value+1).map((e=>{const l=d.value+e*b.value;return{value:l,position:I(l)}})):[])),O=(0,a.Fl)((()=>A.value.some((e=>{let{label:l}=e;return!!l})))),U={activeThumbRef:T,color:(0,v.Vh)(l,"color"),decimals:k,disabled:F,direction:(0,v.Vh)(l,"direction"),elevation:(0,v.Vh)(l,"elevation"),hasLabels:O,horizontalDirection:s,isReversed:n,min:d,max:h,mousePressed:z,numTicks:x,onSliderMousedown:q,onSliderTouchstart:G,parsedTicks:A,parseMouseMove:M,position:I,readonly:(0,v.Vh)(l,"readonly"),rounded:(0,v.Vh)(l,"rounded"),roundValue:B,showTicks:(0,v.Vh)(l,"showTicks"),startOffset:W,step:b,thumbSize:y,thumbColor:V,thumbLabel:(0,v.Vh)(l,"thumbLabel"),ticks:(0,v.Vh)(l,"ticks"),tickSize:g,trackColor:_,trackContainerRef:N,trackFillColor:C,trackSize:w,vertical:S};return(0,a.JJ)(m,U),U};var k=t(3824),y=t(2370),g=t(1107);const w=(0,g.a)({name:"VSliderThumb",directives:{Ripple:k.Z},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0}},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t,emit:o}=l;const u=(0,a.f3)(m);if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:n,step:v,vertical:d,disabled:p,thumbSize:f,thumbLabel:h,direction:b,readonly:k,elevation:g,isReversed:w,horizontalDirection:x,mousePressed:F,decimals:S}=u,{textColorClasses:V,textColorStyles:_}=(0,y.rY)(n),{pageup:C,pagedown:z,end:W,home:N,left:T,right:B,down:M,up:P}=c.ff,E=[C,z,W,N,T,B,M,P],H=(0,a.Fl)((()=>v.value?[1,2,3]:[1,5,10]));function R(l,t){if(!E.includes(l.key))return;l.preventDefault();const a=v.value||.1,o=(e.max-e.min)/a;if([T,B,M,P].includes(l.key)){const e=w.value?[T,P]:[B,P],o=e.includes(l.key)?1:-1,r=l.shiftKey?2:l.ctrlKey?1:0;t+=o*a*H.value[r]}else if(l.key===N)t=e.min;else if(l.key===W)t=e.max;else{const e=l.key===z?1:-1;t-=e*a*(o>100?o/10:10)}return Math.max(e.min,Math.min(e.max,t))}function L(l){const t=R(l,e.modelValue);null!=t&&o("update:modelValue",t)}return()=>{var l,o;const u=(0,c.kb)(d.value?100-e.position:e.position,"%"),n=d.value?"block":"inline",{elevationClasses:m}=(0,s.Y)((0,a.Fl)((()=>p.value?void 0:g.value)));return(0,a.Wm)("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&F.value}],style:{[`inset-${n}-start`]:`calc(${u} - var(--v-slider-thumb-size) / 2)`,"--v-slider-thumb-size":(0,c.kb)(f.value),direction:d.value?void 0:x.value},role:"slider",tabindex:p.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":k.value,"aria-orientation":b.value,onKeydown:k.value?void 0:L},[(0,a.Wm)("div",{class:["v-slider-thumb__surface",V.value,m.value],style:{..._.value}},null),(0,a.wy)((0,a.Wm)("div",{class:["v-slider-thumb__ripple",V.value],style:_.value},null),[[(0,a.Q2)("ripple"),!0,null,{circle:!0,center:!0}]]),(0,a.Wm)(i.T0,{origin:"bottom center"},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:"v-slider-thumb__label-container"},[(0,a.Wm)("div",{class:["v-slider-thumb__label"]},[(0,a.Wm)("div",null,[null!=(l=null==(o=t["thumb-label"])?void 0:o.call(t,{modelValue:e.modelValue}))?l:e.modelValue.toFixed(v.value?S.value:1)])])]),[[r.F8,h.value&&e.focused||"always"===h.value]])]})])}}}),x=(0,g.a)({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0}},emits:{},setup(e,l){let{slots:t}=l;const o=(0,a.f3)(m);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{trackColor:r,trackFillColor:i,vertical:u,tickSize:s,showTicks:v,trackSize:d,color:p,rounded:f,parsedTicks:h,horizontalDirection:b}=o,{roundedClasses:k}=(0,n.b)(f),{backgroundColorClasses:g,backgroundColorStyles:w}=(0,y.Y5)(i),{backgroundColorClasses:x,backgroundColorStyles:F}=(0,y.Y5)(r),S=(0,a.Fl)((()=>"inset-"+(u.value?"block-end":"inline-start"))),V=(0,a.Fl)((()=>u.value?"height":"width")),_=(0,a.Fl)((()=>({[S.value]:"0%",[V.value]:"100%"}))),C=(0,a.Fl)((()=>e.stop-e.start)),z=(0,a.Fl)((()=>({[S.value]:(0,c.kb)(e.start,"%"),[V.value]:(0,c.kb)(C.value,"%")}))),W=(0,a.Fl)((()=>{const l=u.value?h.value.slice().reverse():h.value;return l.map(((l,o)=>{var r,i;const n=u.value?"bottom":"margin-inline-start",s=l.position>0&&l.position<100?(0,c.kb)(l.position,"%"):void 0;return(0,a.Wm)("div",{key:l.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":l.position>=e.start&&l.position<=e.stop}],style:{[n]:s}},[(l.label||t["tick-label"])&&(0,a.Wm)("div",{class:"v-slider-track__tick-label"},[null!=(r=null==(i=t["tick-label"])?void 0:i.call(t,{tick:l,index:o}))?r:l.label])])}))}));return()=>(0,a.Wm)("div",{class:["v-slider-track",k.value],style:{"--v-slider-track-size":(0,c.kb)(d.value),"--v-slider-tick-size":(0,c.kb)(s.value),direction:u.value?void 0:b.value}},[(0,a.Wm)("div",{class:["v-slider-track__background",x.value,{"v-slider-track__background--opacity":!!p.value||!i.value}],style:{..._.value,...F.value}},null),(0,a.Wm)("div",{class:["v-slider-track__fill",g.value],style:{...z.value,...w.value}},null),v.value&&(0,a.Wm)("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":"always"===v.value}]},[W.value])])}});var F=t(8969),S=t(8717);const V=(0,g.a)({name:"VSlider",props:{...(0,F.B)(),...h(),...(0,o.co)(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:t,slots:r}=l;const i=(0,v.iH)(),{min:u,max:n,mousePressed:s,roundValue:d,onSliderMousedown:c,onSliderTouchstart:m,trackContainerRef:p,position:f,hasLabels:h,readonly:k}=b({props:e,handleSliderMouseUp:e=>y.value=d(e),handleMouseMove:e=>y.value=d(e),getActiveThumb:()=>{var e;return null==(e=i.value)?void 0:e.$el}}),y=(0,S.z)(e,"modelValue",void 0,(e=>{const l="string"===typeof e?parseFloat(e):null==e?u.value:e;return d(l)})),{isFocused:g,focus:V,blur:_}=(0,F.K)(e),C=(0,a.Fl)((()=>f(y.value)));return()=>{const[l,t]=(0,o.PE)(e);return(0,a.Wm)(o.q8,(0,a.dG)({class:["v-slider",{"v-slider--has-labels":!!r["tick-label"]||h.value,"v-slider--focused":g.value,"v-slider--pressed":s.value,"v-slider--disabled":e.disabled}]},l,{focused:g.value}),{...r,default:l=>{let{id:t}=l;return(0,a.Wm)("div",{class:"v-slider__container",onMousedown:k.value?void 0:c,onTouchstartPassive:k.value?void 0:m},[(0,a.Wm)("input",{id:t.value,name:e.name||t.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:y.value},null),(0,a.Wm)(x,{ref:p,start:0,stop:C.value},{"tick-label":r["tick-label"]}),(0,a.Wm)(w,{ref:i,focused:g.value,min:u.value,max:n.value,modelValue:y.value,"onUpdate:modelValue":e=>y.value=e,position:C.value,elevation:e.elevation,onFocus:V,onBlur:_},{"thumb-label":r["thumb-label"]})])}})}}})},4842:function(e,l,t){t.d(l,{z:function(){return f}});var a=t(3396),o=t(9242),r=t(7568),i=t(8302),u=t(2816),n=t(6199),s=t(8717),v=t(7052),d=t(4870),c=t(1107),m=t(131),p=t(9888);const f=(0,c.a)({name:"VTextarea",directives:{Intersect:v.Z},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...(0,i.co)(),...(0,r.hy)()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:t,emit:v,slots:c}=l;const f=(0,s.z)(e,"modelValue"),h=(0,a.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(f.value):(f.value||"").toString().length)),b=(0,a.Fl)((()=>t.maxlength?t.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function k(l,t){var a,o;e.autofocus&&l&&(null==(a=t[0].target)||null==(o=a.focus)||o.call(a))}const y=(0,d.iH)(),g=(0,d.iH)(),w=(0,d.iH)(!1),x=(0,d.iH)("auto"),F=(0,d.iH)(),S=(0,a.Fl)((()=>w.value||e.persistentPlaceholder)),V=(0,a.Fl)((()=>e.messages.length?e.messages:S.value||e.persistentHint?e.hint:""));function _(){var e;F.value!==document.activeElement&&(null==(e=F.value)||e.focus());w.value||(w.value=!0)}function C(e){_(),v("click:control",e)}function z(e){e.stopPropagation(),_(),(0,a.Y3)((()=>{f.value="",v("click:clear",e)}))}const W=(0,d.iH)();function N(){e.autoGrow&&(0,a.Y3)((()=>{if(!W.value)return;const l=getComputedStyle(W.value),t=parseFloat(l.getPropertyValue("--v-field-padding-top"))+parseFloat(l.getPropertyValue("--v-field-padding-bottom")),a=W.value.scrollHeight,o=parseFloat(l.lineHeight),r=parseFloat(e.rows)*o+t,i=parseFloat(e.maxRows)*o+t||1/0;x.value=(0,m.kb)(Math.min(i,Math.max(r,null!=a?a:0)))}))}let T;return(0,a.bv)(N),(0,a.YP)(f,N),(0,a.YP)((()=>e.rows),N),(0,a.YP)((()=>e.maxRows),N),(0,a.YP)(W,(e=>{var l;e?(T=new ResizeObserver(N),T.observe(W.value)):null==(l=T)||l.disconnect()})),(0,a.Jd)((()=>{var e;null==(e=T)||e.disconnect()})),(0,p.L)((()=>{const l=!!(c.counter||e.counter||e.counterValue),[n,s]=(0,m.An)(t),[{modelValue:v,...d}]=(0,i.PE)(e),[p]=(0,r.g8)(e);return(0,a.Wm)(i.q8,(0,a.dG)({modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,class:["v-textarea",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow}]},n,d,{messages:V.value}),{...c,default:l=>{let{isDisabled:t,isDirty:i,isReadonly:u,isValid:n}=l;return(0,a.Wm)(r.hF,(0,a.dG)({style:{"--v-input-control-height":x.value},"onClick:control":C,"onClick:clear":z,role:"textbox"},p,{active:S.value||i.value,dirty:i.value||e.dirty,focused:w.value,error:!1===n.value}),{...c,default:l=>{let{props:{class:r,...i}}=l;return(0,a.Wm)(a.HY,null,[e.prefix&&(0,a.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,a.wy)((0,a.Wm)("textarea",(0,a.dG)({ref:F,class:r,"onUpdate:modelValue":e=>f.value=e,autofocus:e.autofocus,readonly:u.value,disabled:t.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:_,onBlur:()=>w.value=!1},i,s),null),[[o.nr,f.value],[(0,a.Q2)("intersect"),{handler:k},null,{once:!0}]]),e.autoGrow&&(0,a.wy)((0,a.Wm)("textarea",{class:[r,"v-textarea__sizer"],"onUpdate:modelValue":e=>f.value=e,ref:W,readonly:!0,"aria-hidden":"true"},null),[[o.nr,f.value]]),e.suffix&&(0,a.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?()=>(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(u._,{active:e.persistentCounter||w.value,value:h.value,max:b.value},c.counter)]):void 0})})),(0,n.Z)({},y,g,F)}})}}]);
//# sourceMappingURL=697.50d49c84.js.map