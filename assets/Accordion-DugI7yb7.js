import{a as o,_ as g,R as u,b as j,c as w,P as t,j as e}from"./index-CnM89Tlv.js";import{a as L,b as I}from"./DefaultLayout-BffWQ03x.js";import"./index.esm-CRDzk6B6.js";import{C as M,a as Y}from"./CRow-DztBVeOE.js";import{C as N,a as S}from"./CCardBody-DJvBaJro.js";import{C as T}from"./CCardHeader-CbJcAlto.js";import{C as B}from"./CCollapse-BQp7xlYB.js";import"./cil-user-Dlmw-Gem.js";var H=o.createContext({}),x=o.forwardRef(function(s,d){var h=s.children,m=s.activeItemKey,i=s.alwaysOpen,a=i===void 0?!1:i,p=s.className,l=s.flush,y=g(s,["children","activeItemKey","alwaysOpen","className","flush"]),f=o.useState(m),v=f[0],b=f[1];return u.createElement("div",j({className:w("accordion",{"accordion-flush":l},p)},y,{ref:d}),u.createElement(H.Provider,{value:{_activeItemKey:v,alwaysOpen:a,setActiveKey:b}},h))});x.propTypes={alwaysOpen:t.bool,activeItemKey:t.oneOfType([t.number,t.string]),children:t.node,className:t.string,flush:t.bool};x.displayName="CAccordion";var A=o.createContext({}),n=o.forwardRef(function(s,d){var h=s.children,m=s.className,i=s.id,a=s.itemKey,p=g(s,["children","className","id","itemKey"]),l=i??o.useId(),y=o.useRef(a??l),f=o.useContext(H),v=f._activeItemKey,b=f.alwaysOpen,O=f.setActiveKey,E=o.useState(v===y.current),C=E[0],R=E[1];return o.useEffect(function(){!b&&C&&O(y.current)},[C]),o.useEffect(function(){R(v===y.current)},[v]),u.createElement("div",j({className:w("accordion-item",m)},p,{ref:d}),u.createElement(A.Provider,{value:{id:l,setVisible:R,visible:C}},h))});n.propTypes={children:t.node,className:t.string,itemKey:t.oneOfType([t.number,t.string])};n.displayName="CAccordionItem";var r=o.forwardRef(function(s,d){var h=s.children,m=s.className,i=g(s,["children","className"]),a=o.useContext(A),p=a.id,l=a.visible;return u.createElement(B,{className:"accordion-collapse",id:p,visible:l},u.createElement("div",j({className:w("accordion-body",m)},i,{ref:d}),h))});r.propTypes={children:t.node,className:t.string};r.displayName="CAccordionBody";var K=o.forwardRef(function(s,d){var h=s.children,m=s.className,i=g(s,["children","className"]),a=o.useContext(A),p=a.id,l=a.visible,y=a.setVisible;return u.createElement("button",j({type:"button",className:w("accordion-button",{collapsed:!l},m),"aria-controls":p,"aria-expanded":l,onClick:function(){return y(!l)}},i,{ref:d}),h)});K.propTypes={children:t.node,className:t.string};K.displayName="CAccordionButton";var c=o.forwardRef(function(s,d){var h=s.children,m=s.className,i=g(s,["children","className"]);return u.createElement("div",j({className:w("accordion-header",m)},i,{ref:d}),u.createElement(K,null,h))});c.propTypes={children:t.node,className:t.string};c.displayName="CAccordionHeader";const G=()=>e.jsx(M,{children:e.jsxs(Y,{xs:12,children:[e.jsx(L,{href:"components/accordion/"}),e.jsxs(N,{className:"mb-4",children:[e.jsx(T,{children:e.jsx("strong",{children:"React Accordion"})}),e.jsxs(S,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(I,{href:"components/accordion",children:e.jsxs(x,{activeItemKey:2,children:[e.jsxs(n,{itemKey:1,children:[e.jsx(c,{children:"Accordion Item #1"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(n,{itemKey:2,children:[e.jsx(c,{children:"Accordion Item #2"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(n,{itemKey:3,children:[e.jsx(c,{children:"Accordion Item #3"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),e.jsxs(N,{className:"mb-4",children:[e.jsxs(T,{children:[e.jsx("strong",{children:"React Accordion"})," ",e.jsx("small",{children:"Flush"})]}),e.jsxs(S,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"flush"})," to remove the default ",e.jsx("code",{children:"background-color"}),", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]}),e.jsx(I,{href:"components/accordion#flush",children:e.jsxs(x,{flush:!0,children:[e.jsxs(n,{itemKey:1,children:[e.jsx(c,{children:"Accordion Item #1"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(n,{itemKey:2,children:[e.jsx(c,{children:"Accordion Item #2"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(n,{itemKey:3,children:[e.jsx(c,{children:"Accordion Item #3"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),e.jsxs(N,{className:"mb-4",children:[e.jsxs(T,{children:[e.jsx("strong",{children:"React Accordion"})," ",e.jsx("small",{children:"Always open"})]}),e.jsxs(S,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"alwaysOpen"})," property to make accordion items stay open when another item is opened."]}),e.jsx(I,{href:"components/accordion#flush",children:e.jsxs(x,{alwaysOpen:!0,children:[e.jsxs(n,{itemKey:1,children:[e.jsx(c,{children:"Accordion Item #1"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(n,{itemKey:2,children:[e.jsx(c,{children:"Accordion Item #2"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(n,{itemKey:3,children:[e.jsx(c,{children:"Accordion Item #3"}),e.jsxs(r,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]})]})});export{G as default};
