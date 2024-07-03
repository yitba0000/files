"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[488],{60488:(e,t,a)=>{function i(e){return window&&window.open(e,"_self","noopener,noreferrer")}a.r(t),a.d(t,{Link:()=>L,OPEN_EXTENSION_URL:()=>A,PostmanTabsManager:()=>Ve,checkContextAndNavigate:()=>i,createPlatformRouter:()=>Be,openExternalLink:()=>E,useAdditionalRouteContext:()=>D,useBeforeTabbedWindowUnload:()=>g,useCurrentPostmanTabContext:()=>v,useIsActivePostmanTab:()=>m,useLoaderData:()=>O,useLocation:()=>T,useMountOutletOnNav:()=>w,useNavigate:()=>S,usePostmanTabsContext:()=>p,useSearchParams:()=>R,useSetTabState:()=>j,useSetTabTitle:()=>k,useTabTitleAndStateUpdates:()=>f,useTabTitleMeta:()=>N,withRouter:()=>c});var n=a(7560),r=a(40540),o=a.n(r),s=a(60607),l=a(52322);function c(e){return t=>{const a=(0,s.useLocation)(),i=(0,s.useNavigate)(),r=(0,s.useParams)();return(0,l.jsx)(e,(0,n.Z)({location:a,navigate:i,params:r},t))}}var d=a(98283),u=a(21466);a(97321);const b=o().createContext(null),p=()=>(0,r.useContext)(b),h=o().createContext(null),v=()=>(0,r.useContext)(h),m=()=>{const e=p(),t=v(),{tabId:a}=t||{};return(null==e?void 0:e.activeTab)===a},f=()=>{const{pathname:e,search:t}=(0,s.useLocation)(),a=m(),{tabId:i,title:n,tabType:o,setTabState:l,isConflicted:c,isDirty:d}=v();(0,r.useEffect)((()=>{a&&n&&(l({title:n,tabType:o,isDirty:d,isConflicted:c}),globalThis.document.title=n)}),[a,i,n,o,d,c,l]),(0,r.useEffect)((()=>{l({currentlyActiveURL:e+t})}),[])},g=()=>{const{tabs:e,tabsMeta:t}=p();(0,r.useEffect)((()=>{}),[])};var x=a(60398);const y=(e,...t)=>{const a=e(...t),i=p(),n=!!v(),o=m(),s=(0,r.useRef)(a);return(0,r.useEffect)((()=>{o&&(s.current=a)}),[o,a]),i&&n&&!o?s.current:a},T=()=>y(s.useLocation),C=(e,t)=>{const a=t[e.id];return!(null!=a&&a.isDirty||null!=a&&a.isConflicted||null!=a&&a.isPinned)},w=()=>{const{tabs:e,tabsMeta:t,setTabs:a,setTabsMeta:i,setActiveTab:o}=p(),l=T(),{state:c,pathname:d,search:u}=l,b=(0,s.useOutlet)(),h=(0,r.useMemo)((()=>b),[d+u]),v=(0,r.useCallback)(((t,i)=>{const n=e.map((e=>e.id===i?t:e));return o(t.id),a(n)}),[o,a,e]),m=(0,r.useCallback)(((r,s,l)=>{const c=(0,n.Z)({replacePreviewTab:!0,pinNewTab:!1},l),d=(0,x.v4)(),u={pathname:r,element:s,id:d},b=e.find((e=>C(e,t)));return b&&null!=c&&c.replacePreviewTab?v(u,b.id):(o(d),null!=c&&c.pinNewTab&&i((e=>(0,n.Z)({},e,{[d]:(0,n.Z)({},e[d],{isPinned:!0})}))),a((e=>[...e,{pathname:r,element:s,id:d}])))}),[e,v,o,a,t,i]);(0,r.useEffect)((()=>{if(!h)return;const t=(e=>{if("string"==typeof e)try{var t;return(null==(t=JSON.parse(e))?void 0:t.navigationParams)||{}}catch(e){return{}}return(null==e?void 0:e.navigationParams)||{}})(c),{tabId:a,newTab:i,sameTab:n}=t;if(i)return m(d,h,{replacePreviewTab:!1,pinNewTab:!0});if(n&&a&&-1!==e.findIndex((e=>e.id===a)))return v({id:(0,x.v4)(),pathname:d,element:h},a);if(a){var r;const t=null==(r=e.find((e=>e.id===a)))?void 0:r.id;if(t)return o(t)}const s=e.find((e=>e.pathname===d));return s?o(null==s?void 0:s.id):m(d,h)}),[h])},j=e=>{const{setTabsMeta:t,activeTab:a}=p();return(0,r.useCallback)((i=>{a===e.id&&t((t=>{const a=(0,n.Z)({},t[e.id]),r={};return"title"in i&&(r.title=i.title||""),"isDirty"in i&&(r.isDirty=i.isDirty||!1),"isConflicted"in i&&(r.isConflicted=i.isConflicted||!1),"tabType"in i&&(r.tabType=i.tabType||"http"),"currentlyActiveURL"in i&&(r.currentlyActiveURL=i.currentlyActiveURL||""),(0,n.Z)({},t,{[e.id]:(0,n.Z)({},a,r)})}))}),[t,e.id,a])},k=e=>{const t=j(e);return(0,r.useCallback)((e=>t({title:e})),[t])},N=()=>{const{setTabState:e}=v()||{};return{setTabTitle:u.onTabTitleChange}},Z=["children","to"],I=["children","to"],_=e=>{let{children:t,to:a}=e,i=(0,d.Z)(e,Z);const{tabId:r}=v()||{};return(0,l.jsx)(s.Link,(0,n.Z)({to:a},i,{state:(0,n.Z)({},i.state,{navigationParams:{sameTab:i.sameTab||!1,newTab:i.newTab||!1,tabId:i.sameTab||i.newTab?r:null}}),children:t}))},L=e=>{let{children:t,to:a}=e,i=(0,d.Z)(e,I);if(i.customNavEvent)return(0,l.jsx)(u.VSCodeLink,(0,n.Z)({to:a},i,{children:t}));const r=(0,n.Z)({},{target:"_self",rel:"noreferrer noopener"},i),o=a.toString();return new RegExp("https?:\\/\\/").test(o)?(0,l.jsx)("a",(0,n.Z)({href:o},r,{onClick:async e=>{i.onClick&&i.onClick(e),e.defaultPrevented},children:t})):(0,l.jsx)(_,(0,n.Z)({to:a},r,{children:t}))},S=()=>{const{tabId:e}=v()||{},t=(0,s.useNavigate)();return(a,i,r)=>{const o=(0,n.Z)({},i),s={sameTab:(null==r?void 0:r.sameTab)||!1,newTab:(null==r?void 0:r.newTab)||!1,tabId:null!=r&&r.sameTab||null!=r&&r.newTab?e:null};if(o.state=null!=i&&i.state&&"string"==typeof i.state?JSON.stringify((0,n.Z)({},JSON.parse(i.state),{navigationParams:s})):(0,n.Z)({},null==i?void 0:i.state,{navigationParams:s}),null==r||!r.customNavEvent||((0,u.vscodeNavigate)(a,i,r),r["customNavEvent-updateURL"]))return t(a,o)}},A="VIEW_COLLECTION_FOLDER_REQUEST";async function E(e){await(0,u.vsCodeOpenExternalLink)(e)}const D=()=>{const e=(0,s.useLocation)();return(0,r.useMemo)((()=>{const t=(e=>{try{var t;if(!e)return{};let a;return"string"==typeof e&&(a=JSON.parse(e)),(null==(t=a)?void 0:t.additionalContext)||{}}catch(e){return{}}})(e.state);return(0,n.Z)({},t,(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.params)||null==(e=e.state)?void 0:e.additionalContext)||{}}catch(e){return{}}})())}),[e.state])},R=()=>{const e=(0,s.useLocation)(),[t,a]=y(s.useSearchParams),i=p(),{setTabState:n,tabId:o}=v()||{};return[t,(0,r.useCallback)((t=>{if(a(t,{state:i&&o?{navigationParams:{tabId:o}}:void 0}),o&&i&&n){const a=t.toString(),i=`${e.pathname}${a?"?"+a:""}`;n({currentlyActiveURL:i})}}),[a,i,e.pathname,n,o])]},O=()=>y(s.useLoaderData);var M=a(26246),P=a(59530),W=a.n(P),U=a(80605),$=a(25869),z=a(64691),F=a(59824),V=a(17282),H=a(20347);const J=({isOpen:e,forTabId:t,position:a,createNewRequest:i,closeMenu:n})=>{const{closeAllNonSelectedTabs:r,closeTab:o,closeAllTabs:s}=p();return(0,l.jsx)(z.Z,{isOpen:e,contextMenu:{posX:null==a?void 0:a.x,posY:null==a?void 0:a.y},closeMenu:n,children:(0,l.jsxs)(F.Z,{children:[(0,l.jsx)(V.Z,{onClick:i,children:"New Request"}),(0,l.jsx)(H.Z,{}),(0,l.jsx)(V.Z,{onClick:()=>o(t),children:"Close Tab"}),(0,l.jsx)(V.Z,{onClick:()=>o(t,!0),children:"Force Close Tab"}),(0,l.jsx)(V.Z,{onClick:()=>r(),children:"Close Other Tabs"}),(0,l.jsx)(V.Z,{onClick:()=>s(),children:"Close All Tabs"}),(0,l.jsx)(V.Z,{onClick:()=>s(!0),children:"Force Close All Tabs"})]})})},X=e=>(0,l.jsx)(J,(0,n.Z)({},e));var q=a(48263),B=a(36914),Y=a(58560),G=a(29225),Q=a(56259),K=a(35547),ee=a(22922),te=a(44306),ae=a(29706),ie=a(10907),ne=a(20455);const re={collection:(0,l.jsx)(Q.Z,{}),folder:(0,l.jsx)(K.Z,{}),http:(0,l.jsx)(ee.Z,{}),"ws-raw":(0,l.jsx)(te.Z,{}),grpc:(0,l.jsx)(ae.Z,{}),"http-response":(0,l.jsx)(ie.Z,{}),environment:(0,l.jsx)(ne.Z,{}),default:(0,l.jsx)(Q.Z,{})},oe=()=>{const{tabs:e,closeAllNonSelectedTabs:t,closeTab:a,closeAllTabs:i,activeTab:n,recentlyClosed:r,openFromRecentlyClosed:o}=p(),s=0===e.length;return(0,l.jsxs)(z.Z,{children:[(0,l.jsx)(q.Z,{children:(0,l.jsx)(U.Z,{icon:(0,l.jsx)(G.Z,{}),type:"tertiary","data-testid":"tabs-more-options-button"})}),(0,l.jsxs)(F.Z,{children:[(0,l.jsx)(B.Z,{label:"Recently Closed Tabs",children:0===r.length?(0,l.jsx)(V.Z,{isDisabled:!0,children:"None"}):r.map(((e,t)=>(0,l.jsx)(V.Z,{onClick:()=>o(t),children:(0,l.jsxs)(Y.Z,{alignItems:"center",gap:"spacing-s",children:[re[e.tabType]||re.default," ",e.title||"Untitled Tab"]})},e.id||e.pathname)))}),(0,l.jsx)(H.Z,{}),(0,l.jsx)(V.Z,{onClick:()=>a(n),isDisabled:s,children:"Close Selected Tab"}),(0,l.jsx)(V.Z,{type:"destructive",onClick:()=>a(n,!0),isDisabled:s,children:"Force Close Selected Tab"}),(0,l.jsx)(V.Z,{onClick:()=>t(),isDisabled:s,children:"Close All but Selected Tab"}),(0,l.jsx)(V.Z,{onClick:()=>i(),isDisabled:s,children:"Close All Tabs"}),(0,l.jsx)(V.Z,{type:"destructive",onClick:()=>i(!0),isDisabled:s,children:"Force Close All Tabs"})]})]})};var se=a(3071),le=a(3341);const ce=W().div.withConfig({displayName:"tab-scrollable-layout__TabsWrapper",componentId:"sc-8w3ijh-0"})(["--border-start-percent:30%;--border-end-percent:70%;display:flex;flex:1 1 auto;overflow-y:hidden;"]),de=W().ul.withConfig({displayName:"tab-scrollable-layout__TabList",componentId:"sc-8w3ijh-1"})(["margin:0;padding:0;flex:0 1 auto;box-sizing:border-box;display:grid;grid-auto-flow:column;flex-wrap:nowrap;grid-template-columns:repeat( auto-fit,minmax(var(--tab-item-min-width),1fr) );overflow:scroll hidden;padding-bottom:48px;margin-bottom:-48px;"]),ue=W().div.withConfig({displayName:"tab-scrollable-layout__TabRightActions",componentId:"sc-8w3ijh-2"})(["flex:1;display:flex;align-items:center;padding:var(--spacing-s);border-left:",";border-bottom:1px solid var(--border-color-default);border-image-slice:0 0 0 1;border-image-source:linear-gradient( to bottom,var(--background-color-primary) var(--border-start-percent),var(--border-color-default) var(--border-start-percent),var(--border-color-default) var(--border-end-percent),var(--background-color-primary) var(--border-end-percent),var(--background-color-primary) calc(100% - 1px),var(--border-color-default) calc(100% - 1px) );"],(e=>e.$tabsCount?"1px solid":"0")),be=W().div.withConfig({displayName:"tab-scrollable-layout__TabLeftActions",componentId:"sc-8w3ijh-3"})(["display:flex;align-items:center;padding:var(--spacing-s);border-right:1px solid var(--border-color-default);border-bottom:1px solid var(--border-color-default);"]),pe=({minWidth:e,maxWidth:t,tabsCount:a,renderTabs:i,rightActions:n})=>{const o=(0,r.useRef)(null),s=(0,r.useRef)(null),[c,d]=(0,r.useState)(!1),[u,b]=(0,r.useState)(!1),[p,h]=(0,r.useState)(!1),[v,m]=(0,r.useState)(`${t}px`);return(0,r.useEffect)((()=>{let e;if(o.current&&s.current){const i=o.current.scrollWidth-o.current.clientWidth>0,n=Math.round(s.current.clientWidth/t);m(n<a?"100%":`${t}px`),d(i),i&&(e=setTimeout((()=>{var e;null==(e=o.current)||e.scrollTo(o.current.scrollWidth,0)}),1))}return()=>{e&&clearTimeout(e)}}),[a,t]),(0,r.useEffect)((()=>{let e=null;const t=o.current,a=()=>{const e=0===(null==t?void 0:t.scrollLeft),a=!!t&&t.scrollLeft===t.scrollWidth-t.clientWidth;b(e),h(a)},i=()=>{e&&clearTimeout(e),e=setTimeout(a,100)};return"onscrollend"in window?null==t||t.addEventListener("scrollend",a):null==t||t.addEventListener("scroll",i),()=>{"onscrollend"in window?null==t||t.removeEventListener("scrollend",a):null==t||t.removeEventListener("scroll",i),e&&clearTimeout(e)}}),[c]),(0,l.jsxs)(ce,{ref:s,children:[c&&(0,l.jsx)(be,{children:(0,l.jsx)(U.Z,{type:"tertiary",icon:(0,l.jsx)(se.Z,{}),onClick:()=>{var t;null==(t=o.current)||t.scrollBy({left:2*-e,behavior:"smooth"})},isDisabled:u})}),(0,l.jsx)(de,{ref:o,children:i(v,c)}),(0,l.jsxs)(ue,{$tabsCount:a,children:[c&&(0,l.jsx)(U.Z,{type:"tertiary",icon:(0,l.jsx)(le.Z,{}),onClick:()=>{var t;null==(t=o.current)||t.scrollBy({left:2*e,behavior:"smooth"})},isDisabled:p}),n]})]})};var he=a(23180);const ve=W().li.withConfig({displayName:"tab-header-item__TabListItem",componentId:"sc-13siyzj-0"})(["position:relative;padding:0;margin:0;list-style:none;box-sizing:border-box;display:flex;width:100%;min-width:var(--tab-item-min-width);max-width:","px;min-height:var(--wp-tabs-header-height);align-items:stretch;"," & + &{border-left:var(--border-width-default,1px) var(--border-style-solid,solid);border-image-slice:0 0 0 1;border-image-source:linear-gradient( to bottom,var(--background-color-primary) var(--border-start-percent),var(--border-color-default) var(--border-start-percent),var(--border-color-default) var(--border-end-percent),var(--background-color-primary) var(--border-end-percent),var(--background-color-primary) calc(100% - 1px),var(--border-color-default) calc(100% - 1px) );}&:last-child .tab-title-container{border-right:0;}"],172,(e=>e.$isActive&&(0,P.css)(["&::before{content:'';position:absolute;bottom:0;left:8px;right:8px;height:1px;background-color:var(--base-color-brand);transition:opacity 0.2s ease-in-out;}"]))),me=W()(s.Link).withConfig({displayName:"tab-header-item__TabHeaderLink",componentId:"sc-13siyzj-1"})(["position:relative;display:flex;width:",";flex:1;"],(e=>e.width)),fe=W().div.withConfig({displayName:"tab-header-item__TabHeaderDiv",componentId:"sc-13siyzj-2"})(["width:100%;display:flex;gap:0.5rem;align-items:center;padding:calc(1px + var(--spacing-s)) var(--spacing-m);box-sizing:border-box;font-style:",";&:hover .tab-close-action{display:block;}",""],(e=>e.$isPreviewTab?"italic":""),(e=>e.$isDirty&&(0,P.css)([".tab-close-icon{display:none;}&:hover{.tab-close-icon{display:flex;}.dirty-indicator{display:none;}}"]))),ge=W().div.withConfig({displayName:"tab-header-item__TabHeaderIconsWrapper",componentId:"sc-13siyzj-3"})(["display:flex;"]),xe=W().div.withConfig({displayName:"tab-header-item__TabTitle",componentId:"sc-13siyzj-4"})(["font-family:var(--text-family-default);line-height:var(--line-height-s);font-size:var(--text-size-s);font-weight:var(--text-weight-regular);padding:0 var(--spacing-xs);flex:1;align-self:center;white-space:nowrap;overflow-x:hidden;"]),ye=W().div.withConfig({displayName:"tab-header-item__TabCloseIconWrapper",componentId:"sc-13siyzj-5"})(["position:relative;display:flex;align-items:center;justify-content:center;height:100%;"]),Te=W().div.withConfig({displayName:"tab-header-item__DirtyStateIndicator",componentId:"sc-13siyzj-6"})(["position:relative;z-index:1;width:calc(1.02 * var(--spacing-s));height:var(--spacing-s);border-radius:50%;background-color:var(--base-color-brand);"]),Ce=W().div.withConfig({displayName:"tab-header-item__CloseTabButtonWrapper",componentId:"sc-13siyzj-7"})(["display:none;position:absolute;top:50%;right:0;transform:translate(0,-50%);padding-left:var(--spacing-l);z-index:1;background:linear-gradient( 270deg,var(--background-color-primary) calc(24px + var(--spacing-xs)),rgba(var(--background-color-primary-rgb) / 95.8%) 0,rgba(var(--background-color-primary-rgb) / 0%) );"]),we=W().div.withConfig({displayName:"tab-header-item__TabTruncShadow",componentId:"sc-13siyzj-8"})(["--border:2px;width:24px;height:calc(100% - calc(var(--border) * 2));position:absolute;top:var(--border);right:calc(24px - var(--spacing-m));z-index:0;background:linear-gradient( 270deg,var(--background-color-primary) 33.33%,rgba(var(--background-color-primary-rgb) / 95.8%) 0,rgba(var(--background-color-primary-rgb) / 0%) );"]),je=e=>null!=e&&e.isConflicted?"[CONFLICT] ":"",ke=e=>{const{activeTab:t,setActiveTab:a,closeTab:i,setTabsMeta:o,tabsMeta:s}=p(),c=t===e.tab.id,d=s[e.tab.id],u=(null==d?void 0:d.currentlyActiveURL)||e.tab.pathname,b=C(e.tab,s),h=(0,r.useCallback)((t=>(t.preventDefault(),t.stopPropagation(),i(e.tab.id),null)),[i,e.tab.id]),v=(0,r.useCallback)((()=>{o((t=>(0,n.Z)({},t,{[e.tab.id]:(0,n.Z)({},d,{isPinned:!0})})))}),[e.tab.id,d,o]);return(0,l.jsx)(ve,{$isActive:c,children:(0,l.jsx)(me,{width:e.width,to:u,onClick:t=>{!c&&a(e.tab.id),c&&t.preventDefault(),c&&t.stopPropagation()},state:{navigationParams:{tabId:e.tab.id}},onContextMenu:e.onContextMenu,children:(0,l.jsxs)(fe,{className:"tab-title-container",$isActive:c,$isDirty:null==d?void 0:d.isDirty,$isPreviewTab:b,onDoubleClick:v,"data-testid":"tab-header",children:[(0,l.jsx)(ge,{children:re[null==d?void 0:d.tabType]||re.default}),(0,l.jsxs)(xe,{title:(null==d?void 0:d.title)||"Loading...",children:[je(d),(null==d?void 0:d.title)||"Loading..."]}),(0,l.jsxs)(ye,{onClick:h,"data-testid":"tab-close-icon",children:[(null==d?void 0:d.isDirty)&&(0,l.jsx)(Te,{className:"dirty-indicator"}),(0,l.jsx)(Ce,{className:"tab-close-action",children:(0,l.jsx)(U.Z,{className:"tab-close-icon",type:"tertiary",size:"small",icon:(0,l.jsx)(he.Z,{})})})]}),(0,l.jsx)(we,{})]})},e.tab.id)})},Ne=W().div.withConfig({displayName:"tabs-header__TabsHeaderWrapper",componentId:"sc-1831r9j-0"})(["--tab-item-min-width:","px;width:100%;overflow-x:auto;display:flex;min-height:var(--wp-tabs-header-height);border-bottom:1px solid var(--border-color-default);&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;"],90),Ze=W().div.withConfig({displayName:"tabs-header__TabHeaderFiller",componentId:"sc-1831r9j-1"})(["flex:0;border-bottom:1px solid var(--border-color-default);display:flex;align-items:center;justify-content:flex-start;padding:0 var(--spacing-xs);gap:var(--spacing-xs);"]),Ie=()=>{const{tabs:e}=p(),[t,a]=(0,r.useState)({open:!1}),{workspaceId:i}=(0,s.useParams)(),n=S(),o=(0,r.useCallback)((()=>{if(!i)return;const e=(0,x.v4)();n(`/workspace/${i}/request/create?requestId=${e}`,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[i,n]),c=(0,r.useCallback)(((e,t)=>{t.preventDefault(),a({open:!0,forTabId:e,position:{x:t.pageX,y:t.pageY}})}),[]),d=(0,r.useCallback)((()=>a({open:!1})),[]),u=(0,r.useCallback)((t=>e.map((e=>(0,l.jsx)(ke,{width:t,tab:e,onContextMenu:t=>c(e.id,t)},e.id)))),[e,c]);return(0,l.jsxs)(Ne,{children:[(0,l.jsx)(pe,{minWidth:90,maxWidth:172,tabsCount:e.length,renderTabs:u,rightActions:(0,l.jsx)(U.Z,{type:"tertiary",icon:(0,l.jsx)($.Z,{}),onClick:o})}),(0,l.jsx)(X,{isOpen:null==t?void 0:t.open,forTabId:null==t?void 0:t.forTabId,position:null==t?void 0:t.position,closeMenu:d,createNewRequest:o}),(0,l.jsx)(Ze,{children:(0,l.jsx)(oe,{})})]})};var _e=a(22833),Le=a.n(_e);const Se=W().div.withConfig({displayName:"tab__TabContentWrapper",componentId:"sc-16oxg4e-0"})(["display:",";height:var(--wp-workbench-height);"],(({$isHidden:e})=>e?"none":"block")),Ae=e=>{const t=!m();return f(),(0,l.jsx)(Se,{className:Le()({"tab-content":!0,"is-hidden":t}),$isHidden:t,children:e.children})},Ee=({tab:e})=>{const{tabsMeta:t}=p(),a=j(e),i=k(e),n=(0,r.useMemo)((()=>{var n,r,o,s;return{tabId:e.id,pathname:e.pathname,isDirty:null==(n=t[e.id])?void 0:n.isDirty,isConflicted:null==(r=t[e.id])?void 0:r.isConflicted,title:(null==(o=t[e.id])?void 0:o.title)||"",tabType:(null==(s=t[e.id])?void 0:s.tabType)||"http",setTabTitle:i,setTabState:a}}),[e.id,e.pathname,t,i,a]);return(0,l.jsx)(h.Provider,{value:n,children:(0,l.jsx)(Ae,{children:e.element},e.pathname)})},De=({fallback:e})=>{const{tabs:t}=p();return(0,r.useMemo)((()=>(0,l.jsxs)(l.Fragment,{children:[0===t.length&&e?e:"",t.map((e=>(0,l.jsx)(Ee,{tab:e},e.pathname)))]})),[t,e])},Re=({children:e})=>(w(),g(),(0,l.jsxs)(l.Fragment,{children:[e," "]})),Oe="tab-close-confirmation-modal",Me=e=>`This tab ${e||"Untitled tab"} has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.`,Pe=[{title:"Don't Save",isDefaultOnDismiss:!0},{title:"Cancel",isPrimary:!0}],We="tab-force-close-confirmation-modal",Ue=e=>`${e} tab${1===e?" has":"s have"} unsaved changes. Your changes will be lost if you force close this tab. Are you sure you want to force close?`,$e=[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Force Close",isPrimary:!0}],ze=(e,t)=>{var a;return null==(a=t[e])?void 0:a.isDirty},Fe=async(e,t)=>{const a=await e.showWarningDialog({uid:Oe,subject:"DO YOU WANT TO SAVE?",message:Me(t),options:Pe});return!a||"Cancel"!==a.title},Ve=({fallback:e})=>{const t=S(),a=(0,s.useMatches)(),i=M.Modals.getModals(),[n,o]=(0,r.useState)(null),[c,d]=(0,r.useState)([]),[u,p]=(0,r.useState)({}),[h,v]=(0,r.useState)([]),m=(0,r.useCallback)((e=>{var a;o(e.id),t((null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname)}),[t,u]),f=(0,r.useCallback)((e=>{e&&v((t=>{var a,i,n;return[...t,{id:e.id,pathname:(null==(a=u[e.id])?void 0:a.currentlyActiveURL)||e.pathname,title:null==(i=u[e.id])?void 0:i.title,tabType:null==(n=u[e.id])?void 0:n.tabType}]}))}),[u]),g=(0,r.useCallback)((e=>v((t=>[...t].splice(e,1)))),[]),x=(0,r.useCallback)((e=>{const a=h[e];t(a.pathname,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),g(e)}),[g,t,h]),y=(0,r.useCallback)((async(e,r=!1)=>{var o;const s=c.findIndex((t=>t.id===e));if(-1===s)return;const l=c[s],b=ze(l.id,u);if(!r&&b&&!await Fe(i,null==(o=u[e])?void 0:o.title))return;if(l.id===n){const e=((e,t)=>{const a=t-1;return e[t+1]||e[a]})(c,s);if(e)m(e);else{const e=a.at(-2);(null==e?void 0:e.pathname)&&t(e.pathname)}}const p=c.filter((t=>t.id!==e));d(p),f(l)}),[t,m,c,a,u,i,n,f]),T=(0,r.useCallback)((async(e=!1)=>{if(e){const e=c.filter((e=>ze(e.id,u))).length;if(e&&!await(async(e,t)=>{const a=await e.showWarningDialog({uid:We,subject:"Confirm force close",message:Ue(t),options:$e});return!a||"Cancel"!==a.title})(i,e))return;for(const e of c)f(e);d([]);const n=a.at(-2);return(null==n?void 0:n.pathname)&&t(n.pathname)}const n=[];for(const e of c){var r;ze(e.id,u)&&!await Fe(i,null==(r=u[e.id])?void 0:r.title)||(f(e),n.push(e.id))}d((e=>e.filter((e=>!n.includes(e.id)))))}),[c,i,a,t,u,f]),C=(0,r.useCallback)((async(e=n)=>{const t=[];for(const n of c){var a;n.id!==e&&(ze(n.id,u)&&!await Fe(i,null==(a=u[n.id])?void 0:a.title)||t.push(n.id))}d((e=>e.filter((e=>!t.includes(e.id)))))}),[n,c,i,u]),w=(0,r.useMemo)((()=>({tabs:c,setTabs:d,tabsMeta:u,setTabsMeta:p,recentlyClosed:h,closeTab:y,closeAllTabs:T,activeTab:n,setActiveTab:o,closeAllNonSelectedTabs:C,openFromRecentlyClosed:x})),[c,u,h,y,n,o,T,C,x]);return(0,l.jsx)(b.Provider,{value:w,children:(0,l.jsxs)(Re,{children:[(0,l.jsx)(M.Modals.Ui.ModalDialog,{uid:Oe}),(0,l.jsx)(M.Modals.Ui.ModalDialog,{uid:We}),(0,l.jsx)(Ie,{}),(0,l.jsx)(De,{fallback:e})]})})};var He,Je=a(47291);const Xe=null==(He=window)||null==(He=He.location)?void 0:He.pathname,qe=(localStorage.getItem("lastVisitedRoute"),()=>{let e="/";try{var t;e=JSON.parse(null==(t=window)?void 0:t.NAVIGATION_CONTEXT).to}catch(e){console.error("Failed to parse NAVIGATION_CONTEXT")}return e}),Be=(e,t)=>{const a=[{opts:{initialEntries:[qe()],initialIndex:0},router:(0,Je.sentryRouter)(s.createMemoryRouter)},(0,Je.sentryRouter)(window.HOST_APP_NAME?s.createBrowserRouter:s.createMemoryRouter),(0,Je.sentryRouter)(s.createMemoryRouter)][0];return{platformRouterConfig:a,router:a.router(e,(0,n.Z)({},a.opts,t))}}}}]);
//# sourceMappingURL=488.005b972abc819d56.js.map