"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[3528],{83528:(l,o,n)=>{n.r(o),n.d(o,{LazyModalsContainer:()=>i,PostmanModalFactory:()=>u});var e=n(7560),a=n(40540),t=n(35348),s=n(35736);const d="modalmanager.toggleModal";var c=n(52322);const r={isOpen:!1,modalComponent:t.u_,lazyModalContent:()=>(0,c.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,c.jsx)(t.hz,{children:(0,c.jsx)(s.Z,{size:"large"})})},i=()=>{const[l,o]=(0,a.useState)(r);return(0,a.useEffect)((()=>{const n=n=>{const{fallback:a,customModalComponent:s,lazyModalContent:d,childProps:c,modalProps:i}=n.detail;o(null!==d?{modalProps:i,childProps:c,isOpen:!0,modalComponent:s||t.u_,lazyModalContent:d,fallback:a||r.fallback}:(0,e.Z)({},l,{isOpen:!1}))};return document.addEventListener(d,n),()=>{document.removeEventListener(d,n)}}),[l]),(0,c.jsx)(l.modalComponent,(0,e.Z)({},l.modalProps,{isOpen:l.isOpen,onClose:()=>{var n,e;null==(n=l.modalProps)||null==(e=n.onClose)||e.call(n),o(r)},children:(0,c.jsx)(a.Suspense,{fallback:l.fallback,children:(0,c.jsx)(l.lazyModalContent,(0,e.Z)({},l.childProps,{onClose:()=>{var n,e;null==l||null==(n=l.childProps)||null==(e=n.onClose)||e.call(n),o(r)}}))})}))},u=Object.freeze({openModal(l){const o=new CustomEvent(d,{detail:l});document.dispatchEvent(o)},closeModal(){const l=new CustomEvent(d,{detail:{lazyModalContent:null}});document.dispatchEvent(l)}})}}]);
//# sourceMappingURL=3528.7973ebb1a4039478.js.map