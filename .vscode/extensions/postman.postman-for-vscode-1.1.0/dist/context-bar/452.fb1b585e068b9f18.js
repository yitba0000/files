"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[452,7560,2389],{7560:(e,t,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{Z:()=>o})},452:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(7560),a=n(540),i=n.n(a),r=n(9578),l=n(9245),c=n(9530),s=n.n(c),d=n(8560),u=n(4962),p=n(9627),h=n(2322);const g=s().div.withConfig({displayName:"active-component-container__StyledCloseIconWrapper",componentId:"sc-199hvsa-0"})(["display:flex;align-items:center;float:right;margin-left:auto;cursor:pointer;"]),f=s()(d.Z).withConfig({displayName:"active-component-container__StyledActiveComponentContainer",componentId:"sc-199hvsa-1"})(["padding:14px;"]),m=({title:e,onClose:t,children:n})=>(0,h.jsxs)(f,{direction:"column",gap:"spacing-s",children:[(0,h.jsxs)(d.Z,{alignItems:"center",width:"100%",children:[(0,h.jsx)(u.Z,{type:"h4",text:e}),(0,h.jsx)(g,{onClick:()=>{null==t||t()},children:(0,h.jsx)(p.Z,{"data-testid":"close-context-bar-btn"})})]}),n]}),x=s().div.withConfig({displayName:"context-bar-label__StyledLabelItemWrapper",componentId:"sc-m03n2-0"})(["display:flex;flex-direction:row;gap:var(--spacing-s);cursor:pointer;background:",";width:32px;height:32px;align-items:center;justify-content:center;border-radius:var(--border-radius-default);use{fill:",";}svg > path[fill]{fill:",";}:hover{use{fill:var(--content-color-primary);}svg > path[fill]{fill:var(--content-color-primary);}}"],(e=>e.isActive?"var(--background-color-tertiary)":""),(e=>e.isActive?"var(--content-color-primary)":"var(--content-color-secondary)"),(e=>e.isActive?"var(--content-color-primary)":"var(--content-color-secondary)")),v=({configuration:e,onCollapseToggle:t,isCollapsed:n,activeConfiguration:o,navigateToActiveView:a})=>{const i=null==e?void 0:e.elements;return(0,h.jsx)(d.Z,{direction:"column",gap:"spacing-s",children:null==i?void 0:i.map((e=>(0,h.jsx)(x,{"data-testid":`context-bar-label-${e.id}`,isActive:e.id===(null==o?void 0:o.id)&&!(null!=n&&n("x")),onClick:()=>{a(e.id),null!=n&&n("x")&&(null==t||t("x"))},children:e.icon},e.id)))})},w=s().div.withConfig({displayName:"context-bar-header__StyledPaneLabelWrapper",componentId:"sc-183itog-0"})(["margin-top:var(--spacing-s);.pane-label{width:42px;}"]),y=({configuration:e,onCollapseToggle:t,isCollapsed:n,activeConfiguration:o,navigateToActiveView:a})=>(0,h.jsx)(w,{children:(0,h.jsx)(r.PaneLabel,{layout:"vertical",actions:(0,h.jsx)(v,{configuration:e,onCollapseToggle:t,isCollapsed:n,activeConfiguration:o,navigateToActiveView:a})})}),b=s().div.withConfig({displayName:"context-bar-contents__ContextBarViewWrapper",componentId:"sc-7wkm1q-0"})(["display:flex;flex-direction:row;"]),C=s()(r.PaneHeader).withConfig({displayName:"context-bar-contents__StyledPaneHeader",componentId:"sc-7wkm1q-1"})(["width:100%;height:100%;overflow-y:scroll;"]),k=({activeConfiguration:e,onCollapseToggle:t,isCollapsed:n,configuration:o,showContextBarHeader:i,unCollapse:c,collapse:s,navigateToActiveView:d,setActiveViewId:u})=>{const p=e?e.View:null,[g,f]=(0,l.useSearchParams)();return(0,a.useEffect)((()=>{e?null==c||c("x"):null==s||s("x")}),[e,s,c]),p?(0,h.jsx)(C,{defaultLayout:"horizontal",horizontalComponent:(0,h.jsxs)(b,{children:[i&&(0,h.jsx)(y,{configuration:o,onCollapseToggle:t,isCollapsed:n,activeConfiguration:e,navigateToActiveView:d}),(0,h.jsx)(r.PaneContent,{children:(0,h.jsx)(m,{title:null==e?void 0:e.title,onClose:()=>{u(null),g.delete("ctx"),f(g)},children:(0,h.jsx)(p,{})})})]})}):null!=n&&n("x")&&i?(0,h.jsx)(C,{defaultLayout:"horizontal",horizontalComponent:(0,h.jsx)(y,{configuration:o,onCollapseToggle:t,isCollapsed:n,activeConfiguration:e,navigateToActiveView:d})}):(0,h.jsx)(C,{defaultLayout:"horizontal"})},j=e=>{const{children:t,configuration:n}=e,c="hidden"===(null==n?void 0:n.mode),s={default:350,collapsed:c?300:42,uncollapsed:350,min:350,resizableByDefault:!0,collapsedByDefault:!0},[d,u]=i().useState(!1),[p,g]=i().useState(!1),[f,m]=i().useState(null),[x,v]=(0,l.useSearchParams)(),[w,y]=i().useState(null),b=e=>null==n?void 0:n.elements.find((t=>t.id===e));if((0,a.useEffect)((()=>{"hidden"===(null==n?void 0:n.mode)?(u(!0),g(!1)):(u(!1),g(!0));const e=x.get("ctx"),t=b(e);t&&t.id!==(null==f?void 0:f.id)&&(m(t),u(!1))}),[]),(0,a.useEffect)((()=>{const e=x.get("ctx"),t=b(e);t?t.id!==(null==f?void 0:f.id)&&(m(t),u(!1),y(e)):(m(null),y(null),c&&!d&&u(!0))}),[x]),d)return t;const C=e=>{if(w&&!e)return;y(e);const t=e||(null==n?void 0:n.defaultElementId);x.set("ctx",t),v(x)};return(0,h.jsxs)(r.PaneGroup,{defaultLayout:"horizontal","data-testid":"context-bar-pane-group",scrollToResize:!0,children:[(0,h.jsx)(r.Pane,{width:{min:270,default:1500,uncollapsed:1500},children:t}),(0,h.jsx)(r.Pane,{width:s,resizableByDefault:!0,testName:!0,onCollapse:()=>{y(null),x.delete("ctx"),v(x)},onExpand:()=>{C()},"data-testid":"context-bar-pane",children:(0,h.jsx)(k,(0,o.Z)({},e,{contextBarAxis:"x",activeConfiguration:f,showContextBarHeader:p,navigateToActiveView:C,setActiveViewId:y}))})]})}},9627:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7560),a=n(540),i=n.n(a),r=n(207),l=i().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),c=i().forwardRef((function(e,t){return i().createElement(r.Z,(0,o.Z)({},e,{svg:l,ref:t}))}));c.getName=function(){return"icon-action-close-stroke"};const s=c},4962:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(2247),a=n(4047),i=n(540),r=n.n(i),l=n(1314),c=n.n(l),s=n(9530),d=n.n(s),u=n(3753),p=n(265);function h(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var g=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?h(e.styleAs,e.theme):h(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?o:"","\n    ");var t,n,o}));function f(e){var t=e.text,n=e.type,o=e.styleAs,l=e.color,c=e._wordBreak,s=e.className,d=e.hasBottomSpacing,u=e.isTruncated,h=e.maxLines,f=e.tooltip,m=e["data-testid"],x=e["data-click"],v=(0,i.useState)(!1),w=(0,a.Z)(v,2),y=w[0],b=w[1],C=r().createElement(g,{as:n,styleAs:o,color:l,className:s,"data-aether-id":"aether-heading","data-testid":m,"data-click":x,hasBottomSpacing:d,isTruncated:u,maxLines:h,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?b(!0):b(!1)},wordBreak:c},t);return y&&(0,p.LX)(e)?(0,p.Ur)(C,f||t):C}f.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},f.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,o.Z)(Object.keys(u.globals.colors)),(0,o.Z)(Object.keys(u.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,o=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}}}]);
//# sourceMappingURL=452.fb1b585e068b9f18.js.map