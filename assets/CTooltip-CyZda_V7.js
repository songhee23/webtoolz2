import{a as t,_ as Q,b as o,R as r,c as U,P as e,e as W,q as X}from"./index-CnM89Tlv.js";import{u as Y,s as Z,t as $}from"./DefaultLayout-BffWQ03x.js";import{g as ee,e as ne}from"./getRTLPlacement-CqhOtQql.js";var x=t.forwardRef(function(n,F){var M=n.children,g=n.animation,j=g===void 0?!0:g,L=n.className,_=n.container,v=n.content,h=n.delay,f=h===void 0?0:h,P=n.fallbackPlacements,A=P===void 0?["top","right","bottom","left"]:P,y=n.offset,B=y===void 0?[0,6]:y,w=n.onHide,T=n.onShow,k=n.placement,I=k===void 0?"top":k,d=n.popperConfig,C=n.trigger,i=C===void 0?["hover","focus"]:C,m=n.visible,V=Q(n,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","popperConfig","trigger","visible"]),a=t.useRef(null),s=t.useRef(null),z=Y(F,a),E="tooltip".concat(t.useId()),R=t.useState(!1),l=R[0],N=R[1],S=t.useState(m),c=S[0],H=S[1],b=Z(),D=b.initPopper,G=b.destroyPopper,J=b.updatePopper,O=typeof f=="number"?{show:f,hide:f}:f,q={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:A}},{name:"offset",options:{offset:B}}],placement:ee(I,s.current)},K=o(o({},q),typeof d=="function"?d(q):d);t.useEffect(function(){if(m){u();return}p()},[m]),t.useEffect(function(){if(l&&s.current&&a.current){D(s.current,a.current,K),setTimeout(function(){H(!0)},O.show);return}!l&&s.current&&a.current&&G()},[l]),t.useEffect(function(){!c&&s.current&&a.current&&ne(function(){N(!1)},a.current)},[c]);var u=function(){N(!0),T&&T()},p=function(){setTimeout(function(){H(!1),w&&w()},O.hide)};return t.useEffect(function(){J()},[v]),r.createElement(r.Fragment,null,r.cloneElement(M,o(o(o(o(o({},c&&{"aria-describedby":E}),{ref:s}),(i==="click"||i.includes("click"))&&{onClick:function(){return c?p():u()}}),(i==="focus"||i.includes("focus"))&&{onFocus:function(){return u()},onBlur:function(){return p()}}),(i==="hover"||i.includes("hover"))&&{onMouseEnter:function(){return u()},onMouseLeave:function(){return p()}})),r.createElement($,{container:_,portal:!0},l&&r.createElement("div",o({className:U("tooltip","bs-tooltip-auto",{fade:j,show:c},L),id:E,ref:z,role:"tooltip"},V),r.createElement("div",{className:"tooltip-arrow"}),r.createElement("div",{className:"tooltip-inner"},v))))});x.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:X,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),popperConfig:e.oneOfType([e.func,e.object]),trigger:W,visible:e.bool};x.displayName="CTooltip";export{x as C};
