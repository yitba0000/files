"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[3528],{3528:(o,l,n)=>{n.r(l),n.d(l,{LazyModalsContainer:()=>i,PostmanModalFactory:()=>p});var e=n(7560),a=n(540),t=n(5348),s=n(5736);const d="modalmanager.toggleModal";var c=n(2322);const r={isOpen:!1,modalComponent:t.u_,lazyModalContent:()=>(0,c.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,c.jsx)(t.hz,{children:(0,c.jsx)(s.Z,{size:"large"})})},i=()=>{const[o,l]=(0,a.useState)(r);return(0,a.useEffect)((()=>{const n=n=>{const{fallback:a,customModalComponent:s,lazyModalContent:d,childProps:c,modalProps:i}=n.detail;l(null!==d?{modalProps:i,childProps:c,isOpen:!0,modalComponent:s||t.u_,lazyModalContent:d,fallback:a||r.fallback}:(0,e.Z)({},o,{isOpen:!1}))};return document.addEventListener(d,n),()=>{document.removeEventListener(d,n)}}),[o]),(0,c.jsx)(o.modalComponent,(0,e.Z)({},o.modalProps,{isOpen:o.isOpen,onClose:()=>{var n,e;null==(n=o.modalProps)||null==(e=n.onClose)||e.call(n),l(r)},children:(0,c.jsx)(a.Suspense,{fallback:o.fallback,children:(0,c.jsx)(o.lazyModalContent,(0,e.Z)({},o.childProps,{onClose:()=>{var n,e;null==o||null==(n=o.childProps)||null==(e=n.onClose)||e.call(n),l(r)}}))})}))},p=Object.freeze({openModal(o){const l=new CustomEvent(d,{detail:o});document.dispatchEvent(l)},closeModal(){const o=new CustomEvent(d,{detail:{lazyModalContent:null}});document.dispatchEvent(o)}})}}]);
//# sourceMappingURL=3528.b7936674a63b68fe.js.map