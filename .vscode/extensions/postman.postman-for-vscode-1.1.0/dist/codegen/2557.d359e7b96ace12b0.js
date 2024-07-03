"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[2557],{32557:(e,n,t)=>{t.r(n),t.d(n,{ActiveEnvironmentSelector:()=>Pn,ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX:()=>w,ENVIRONMENT_BROADCAST_EVENT_ACTIONS:()=>O,ENVIRONMENT_ITEM_BROADCAST_EVENT_ACTIONS:()=>L,ENVIRONMENT_ITEM_QUERY_KEY_PREFIX:()=>b,ENVIRONMENT_LIST_QUERY_KEY_PREFIX:()=>m,ENVIRONMENT_SELECTOR_PERMISSIONS_QUERY_KEY_PREFIX:()=>f,ENVIRONMENT_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>E,GLOBALS_BROADCAST_EVENT_ACTIONS:()=>N,GLOBALS_ITEM_QUERY_KEY_PREFIX:()=>h,GLOBALS_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>g,SECRET:()=>ue,VariablesContextProvider:()=>q,VariablesContextStore:()=>l,WORKSPACE_BROADCAST_EVENT_ACTIONS:()=>D,WORKSPACE_QUERY_KEY_PREFIX:()=>y,environmentItemsQuery:()=>M,environmentVariablesHandler:()=>Hn,environmentsSubscriptionHandler:()=>nt,getActiveEnvironment:()=>V,getActiveEnvironmentSession:()=>zn,getActiveGlobalsSession:()=>Jn,getDuplicateEntityName:()=>oe,getDynamicVariableQuery:()=>Sn,getEnvironmentItemQuery:()=>nn,getEnvironmentItemQuerySafe:()=>tn,getEnvironmentSelectorPermissionsQuery:()=>In,getEnvironmentSidebarPermissionsQuery:()=>dn,getEnvironmentWorkbenchPermissionsQuery:()=>yn,getGlobalsItemQuery:()=>an,getGlobalsWorkbenchPermissionsQuery:()=>gn,globalVariablesHandler:()=>Xn,isEnvironmentItemLoading:()=>An,resolveVariablesInObject:()=>qn,setActiveEnvironment:()=>U,unZipVariables:()=>de,updateEnvironment:()=>Yn,updateEnvironmentCacheAndSession:()=>x,updateEnvironmentMutation:()=>Un,updateEnvironmentNameMutation:()=>Kn,updateEnvironmentWithSessionMutation:()=>$n,updateGlobals:()=>Zn,updateGlobalsCacheAndSession:()=>T,updateGlobalsMutation:()=>Gn,updateGlobalsWithSessionMutation:()=>Bn,useActiveAndDynamicVariables:()=>we,useActiveEnvironment:()=>G,useActiveVariables:()=>he,useCreateNewEnvironment:()=>J,useCurrentEnvironmentId:()=>Ie,useEnvironmentDelete:()=>z,useEnvironmentDuplicate:()=>se,useEnvironmentFeatureFlag:()=>X,useEnvironmentItems:()=>W,useEnvironmentListSubscription:()=>te,useEnvironmentSubscription:()=>ie,useSetAsActiveEnvironment:()=>ae,useUpdateEnvironmentName:()=>fe,useUpdateEnvironmentRoles:()=>ke,zipVariables:()=>ce});var a=t(78476),r=t(29875);const o=new r.KVStorage("last-used-active-environment"),s=async e=>await o.get(e)||null,i={queryFn:()=>Promise.reject(),enabled:!1,useErrorBoundary:!1};class l{constructor({collectionFetchOptions:e},n){this.activeEnvironment=null,this.collectionFetchOptions=void 0,this.meta=void 0,this.useActiveEnvironmentFromContext=void 0,this.loadLastUsedActiveEnvironment=()=>{s(this.meta.workspaceId).then((e=>{(0,a.runInAction)((()=>{this.activeEnvironment=e}))})).catch((()=>{}))},this.setActiveEnvironment=e=>{this.activeEnvironment=e,(async(e,n)=>(await o.set(e,n),n))(this.meta.workspaceId,e).catch((()=>{}))},this.meta=n,this.useActiveEnvironmentFromContext=!e,this.collectionFetchOptions=e||i,(0,a.makeObservable)(this,{activeEnvironment:a.observable,setActiveEnvironment:a.action}),this.useActiveEnvironmentFromContext&&this.loadLastUsedActiveEnvironment()}}var c=t(40540),d=t.n(c),u=t(97201),v=t(10099),p=t(45860);const m="environments",b="environment",y="workspace",h="globals",w="environment-sidebar-permissions",E="environment-workbench-permissions",g="globals-workbench-permissions",f="environment-selector-permissions",C=new class{constructor(){var e=this;this.observer=null,this.environmentId="",this.abortController=null,this.asyncObserver=null,this.changeEnvironment=e=>{this.environmentId&&this.unsubscribe(),this.environmentId=e},this.subscribe=async function({environmentId:n=e.environmentId,subscriptionHandler:t}){if(""===n)return;if(e.environmentId!==n&&e.changeEnvironment(n),e.observer||e.asyncObserver)return;const{asyncObserver:a,abortController:r}=(e=>{const n=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:n.signal,subscribeRequest:{method:"post",service:"sync",url:`/environment/${e}/subscribe`,data:{}},subscriptionEvents:["update","update_roles"],responseFilter:e=>{var n;return null==e||null==(n=e.body)?void 0:n.model_id},broadcastFilter:e=>null==e?void 0:e.model_id,unsubscribeRequest:{method:"delete",service:"sync",url:`/environment/${e}/subscribe`,data:{}}}),abortController:n}})(n);e.abortController=r,e.asyncObserver=a,e.observer=await a,e.abortController=null,(0,u.invalidateCache)([b,n]),e.observer.subscribe({next:e=>{t(e,{environmentId:n})},complete:()=>{e.unsubscribe()},error:async function(a){e.cleanup(),await e.subscribe({subscriptionHandler:t,environmentId:n})}})},this.unsubscribe=()=>{var e,n;null==(e=this.abortController)||e.abort(),null==(n=this.observer)||n.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var I=t(7560),k=t(85692),S=t(26663),_=t.n(S);const A=e=>(0,I.Z)({},e,{id:`${e.owner}-${e.id}`}),x=async(e,n)=>{const t=A(n);(0,u.updateCache)({key:[b,e],updater:e=>e?(0,I.Z)({},e,t):e}),await(0,k.updateDependentSession)({model:"environment",modelId:t.id},t)},T=async(e,n)=>{(0,u.updateCache)({key:[h,e],updater:e=>e?(0,I.Z)({},e,n):e}),await(0,k.updateDependentSession)({model:"globals",modelId:n.id},n)};var R=t(14350);let N=function(e){return e.UPDATE="update",e}({}),O=function(e){return e.DELETE="delete",e.CREATE="create",e.UPDATE="update",e}({}),L=function(e){return e.UPDATE="update",e.UPDATE_ROLES="update_roles",e}({}),D=function(e){return e.UPDATE="update",e.UPDATE_ROLES="update_roles",e}({});const P=(e,{environmentId:n})=>{var t;const a=null==e||null==(t=e.meta)?void 0:t.action,r=null==e?void 0:e.data;if(a&&r)switch(a){case L.UPDATE:x(n,r);break;case L.UPDATE_ROLES:(0,u.invalidateCache)([R.ACCESS_CONTROL_QUERY_KEY_PREFIX,R.ALL_ROLES,"environment",n])}},F=new r.KVStorage("active-environment"),V=async e=>F.get($(e)),U=async(e,n)=>{return F.set($(e),(t=n,JSON.parse(JSON.stringify(t))));var t},$=({model:e,modelId:n})=>[e,n].join("/"),j=()=>F,M=e=>({queryKey:[m,e],queryFn:({signal:n})=>(async({signal:e,workspaceId:n})=>{const t=await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/list/environment`,headers:{"Content-type":"text/plain"},signal:e,query:{workspace:n}});if(!Array.isArray(null==t?void 0:t.data))throw new TypeError("Received invalid response from server");return t.data})({signal:n,workspaceId:e}),select:e=>(Array.isArray(e)&&e.sort(((e,n)=>e.name.localeCompare(n.name))),e),useErrorBoundary:!1}),W=({workspaceId:e})=>(0,u.useDataFetch)(M(e)),G=()=>{const e=(0,v.useActiveWorkspaceId)(),n=(0,c.useContext)(Q);if(!n)throw new Error("useActiveEnvironment must be used within a VariablesContextProvider");const[t,o]=(0,c.useState)(n.activeEnvironment);(0,c.useEffect)((()=>{if(n.useActiveEnvironmentFromContext)return(0,a.reaction)((()=>n.activeEnvironment),o)}),[n]);const{data:s}=(0,u.useDataFetch)(n.collectionFetchOptions),i=s?$({model:"collection",modelId:s.id}):"",{value:l}=(0,r.useKVStorage)(j(),i),d=n.useActiveEnvironmentFromContext?t:l,{data:p,isLoading:m,isError:b}=W({workspaceId:e}),y=(null==d?void 0:d.id)&&(null==p?void 0:p.some((({id:e})=>e===d.id)));return y?{data:d,isLoading:m,isError:b}:{data:null,isLoading:m,isError:b}};var B=t(52322);const Q=(0,c.createContext)(void 0),K=()=>{const{data:e}=G();return(0,c.useEffect)((()=>{if(e)return C.subscribe({environmentId:e.id,subscriptionHandler:P}),()=>C.unsubscribe()}),[e]),null},q=({store:e,children:n})=>((e=>{const n=(0,v.useActiveWorkspaceId)(),{data:t}=(0,u.useDataFetch)(e.collectionFetchOptions);(0,c.useEffect)((()=>{null!=t&&t.id&&(async e=>F.has($(e)))({model:"collection",modelId:t.id}).then((e=>{if(!e)return s(n).then((e=>U({model:"collection",modelId:t.id},e)))}))}),[t])})(e),(0,B.jsxs)(Q.Provider,{value:e,children:[(0,B.jsx)(K,{}),n]}));var Y=t(60398),Z=t(39245),H=t(56880);const X=()=>!0,z=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({environmentId:e})=>(async e=>{const n=await p.postmanGateway.delete({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`});return await(0,k.deleteDependentSession)({model:"environment",modelId:e}),n})(e),onMutate:async({workspaceId:n,environmentId:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a}),(0,u.updateCache)({key:a,updater:e=>e?e.filter((({id:e})=>e!==t)):e})},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])}})},J=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({workspaceId:e,requestBody:n})=>(async(e,n)=>await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/import`,body:JSON.stringify(n),query:{workspace:e}}))(e,n),onMutate:async({workspaceId:n,requestBody:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a}),e.setQueryData(a,(e=>[...null!=e?e:[],{id:window.USER_ID+"-"+t.id,name:t.name,isLoading:!0}]))},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])},useErrorBoundary:!1})},ee=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:n=e.workspaceId,subscriptionHandler:t}){if(""===n)return;if(e.workspaceId!==n&&e.changeWorkspace(n),e.observer||e.asyncObserver)return;const{asyncObserver:a,abortController:r}=(e=>{const n=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:n.signal,subscribeRequest:{method:"post",url:`/list/environment?workspace=${e}&subscribe=true`,service:"sync"},subscriptionEvents:["broadcast"],responseFilter:e=>{var n;return null==e||null==(n=e.body)||null==(n=n.subscription)?void 0:n.id},broadcastFilter:e=>{var n;return null==e||null==(n=e.data)||null==(n=n.subscription)?void 0:n.id},unsubscribeRequest:{data:{},method:"delete",url:`/list/environment/subscribe?workspace=${e}`,service:"sync"}}),abortController:n}})(n);e.abortController=r,e.asyncObserver=a,e.observer=await a,e.abortController=null,(0,u.invalidateCache)([m,n]),e.observer.subscribe({next:e=>{t(e,{workspaceId:n})},complete:()=>{e.unsubscribe()},error:async function(a){e.cleanup(),await e.subscribe({subscriptionHandler:t,workspaceId:n})}})},this.unsubscribe=()=>{var e,n;null==(e=this.abortController)||e.abort(),null==(n=this.observer)||n.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}},ne=(e,{workspaceId:n})=>{var t;const a=null==e||null==(t=e.data)?void 0:t.data;if(!Array.isArray(a))return;const r=[],o=[],s=[];for(const e of a)switch(e.action){case O.CREATE:o.push(e.id);break;case O.DELETE:r.push(e.id);break;case O.UPDATE:s.push(e.id)}o.length>0||s.length>0?(0,u.invalidateCache)([m,n]):r.length>0&&((e,n)=>{0!==e.length&&(0,u.updateCache)({key:[m,n],updater:n=>Array.isArray(n)?n.filter((n=>!e.includes(n.id))):n})})(r,n)},te=e=>{(0,c.useEffect)((()=>{if(e)return ee.subscribe({workspaceId:e,subscriptionHandler:ne}),()=>{ee.unsubscribe()}}),[e])},ae=()=>{const e=(0,c.useContext)(Q);if(!e)throw new Error("useSetAsActiveEnvironment must be used within a VariablesProvider");const{data:n}=(0,u.useDataFetch)(e.collectionFetchOptions),t=n?$({model:"collection",modelId:n.id}):"",{setValue:a}=(0,r.useKVStorage)(j(),t);return{mutate:n=>{e.setActiveEnvironment(n),!e.useActiveEnvironmentFromContext&&t&&a(n)}}},re=e=>{const n=e.split(" "),t=n.length,a=n[t-1],r=Number.parseInt(a);return t>=2&&"Copy"===a?e+" 2":t>=3&&"Copy"===n[t-2]&&!Number.isNaN(r)?(n[t-1]=`${r+1}`,n.join(" ")):e+" Copy"},oe=(e,n="")=>{const t=new Set(e);let a=n;for(;t.has(a);)a=re(a);return a},se=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>(async({environmentId:e,workspaceId:n})=>await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}/duplicate`,query:{workspace:n},data:{}}))(e),onMutate:async({workspaceId:n,environmentId:t})=>{const a=[m,n];await e.cancelQueries({queryKey:a});const r=e.getQueryData(a);if(!r)return;const{name:o}=r.find((({id:e})=>e===t));(0,u.updateCache)({key:a,updater:e=>e?[...e,{id:window.USER_ID+"-"+t,name:oe([o],o),isLoading:!0}]:e})},onSettled:(e,n,{workspaceId:t})=>{(0,u.invalidateCache)([m,t])}})},ie=(e="")=>{(0,c.useEffect)((()=>{if(e)return C.subscribe({environmentId:e,subscriptionHandler:P}),()=>{C.unsubscribe()}}),[e])},le=(e,n=new Set)=>t=>{var a;const r=e.findIndex(((e,a)=>e.key===t.key&&e.enabled===t.enabled&&!n.has(a)));let o;return-1===r?o={value:t.value}:(n.add(r),o=e[r]),{key:t.key,value:t.value,sessionValue:o.value,isSessionValueDeleted:null==(a=o)?void 0:a.deleted,enabled:t.enabled,type:t.type}},ce=(e,n)=>e.map(le(n)),de=e=>e.reduce((({initialValues:e,sessionValues:n},t)=>{const{key:a,value:r,sessionValue:o,enabled:s,type:i,isSessionValueDeleted:l}=t;return n.push({key:a,value:o,enabled:s,type:i,deleted:!!l||void 0}),e.push({key:a,value:r,enabled:s,type:i}),{initialValues:e,sessionValues:n}}),{initialValues:[],sessionValues:[]}),ue="secret",ve={queryKey:["empty-collection"],queryFn:()=>Promise.reject(),enabled:!1},pe=(e,n,t=le(n))=>n=>n.map((n=>(0,I.Z)({},t(n),{scope:e}))),me=()=>{var e;const n=(0,v.useActiveWorkspaceId)(),{collectionFetchOptions:t}=null!=(e=(0,c.useContext)(Q))?e:{collectionFetchOptions:ve},{data:a}=(0,u.useDataFetch)(an(n)),{data:r}=(0,u.useDataFetch)(Sn()),{data:o}=(0,u.useDataFetch)(t),{data:s}=G(),{data:i}=(0,u.useDataFetch)(tn(null==s?void 0:s.id)),l=(0,k.useSessionSafe)({model:"environment",modelId:null==i?void 0:i.id}),d=(0,k.useSessionSafe)({model:"globals",modelId:null==a?void 0:a.id}),p=(0,k.useSessionSafe)({model:"collection",modelId:null==o?void 0:o.id});return(0,c.useMemo)((()=>{var e,n,t,s,c,u,v,m,b,y;return{data:[...(y=r,y||[]),...pe("globals",null!=(e=null==(n=d.value)?void 0:n.values)?e:[])(null!=(t=null==a?void 0:a.values)?t:[]),...pe("collection",null!=(s=null==(c=p.value)?void 0:c.values)?s:[])(null!=(u=null==o?void 0:o.variables)?u:[]),...pe("environment",null!=(v=null==(m=l.value)?void 0:m.values)?v:[])(null!=(b=null==i?void 0:i.values)?b:[])].map(((e,n)=>(0,I.Z)({},e,{id:`${e.scope}::${n}`})))}}),[o,p.value,i,l.value,a,d.value,r])},be=e=>{const n=e.filter((e=>"dynamic"===e.type));return[...e.filter((e=>"dynamic"!==e.type)),...n]},ye=e=>{const n=e.filter((e=>{return"boolean"!=typeof(n=e).enabled||n.enabled;var n})),t=(e=>{const n=new Map(e.map((e=>[e.key,e])));return e=>{const t=n.get(e.key);return t&&t.id!==e.id?(0,I.Z)({},e,{overriddenBy:{id:t.id,scope:t.scope}}):e}})(n),a=n.map((e=>t(e)));return{data:be(a)}},he=()=>{const{data:e}=me();return(0,c.useMemo)((()=>{if(!e)return{};const n=e.filter((e=>"dynamic"!==e.type));return ye(n)}),[e])},we=()=>{const{data:e}=me();return(0,c.useMemo)((()=>e?ye(e):{}),[e])},Ee=async({environmentId:e,name:n})=>await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,data:{name:n}}),ge=(e,n,t)=>{(0,u.updateCache)({key:e,updater:e=>e?e.map((e=>e.id===n?(0,I.Z)({},e,{name:t}):e)):e})},fe=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>Ee(e),onMutate:async({workspaceId:n,environmentId:t,name:a})=>{const r=[m,n],o=e.getQueryData(r);if(!o)return;const s=o.find((({id:e})=>e===t));return ge(r,t,a),()=>{s&&ge(r,t,s.name)}},onSuccess:(e,{workspaceId:n,environmentId:t})=>{ge([m,n],t,e.data.name)},onError:(e,n,t)=>{t&&t()}})};var Ce=t(60607);const Ie=()=>{const{pathname:e}=(0,Z.useLocation)(),{environmentId:n}=(0,Ce.useParams)();return n||(null!=e&&e.endsWith("/globals")?"globals":void 0)},ke=()=>(0,u.useMutation)({mutationFn:({signal:e,environmentId:n,roles:t})=>(async({signal:e,environmentId:n,roles:t})=>await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${n}/roles`,data:{roles:t},signal:e}))({signal:e,environmentId:n,roles:t}),onSuccess:(e,n)=>{n.onSuccess&&n.onSuccess(e)}});var Se=t(59530),_e=t.n(Se),Ae=t(20856),xe=t(88691),Te=t(80605),Re=t(29319);const Ne=_e()(Re.Z).withConfig({displayName:"dropdown-button__QuickLookIcon",componentId:"sc-1l4ht93-0"})(["padding:0 var(--spacing-xs);"]),Oe=_e()(xe.Z).withConfig({displayName:"dropdown-button__StyledSplitButton",componentId:"sc-1l4ht93-1"})(["flex:1;min-width:0;button:first-child > span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}&:hover{.aether-split-button__splitter{border-left-color:var(--vscode-button-separator);}}"]),Le=({value:e,isLoading:n,onClick:t,isSecondaryButtonDisabled:a,onSecondaryButtonClick:r,ref:o})=>{const{label:s,forkLabel:i}=e,l=i?`${s} [${i}]`:s;return(0,B.jsx)(Oe,{ref:o,type:"secondary",minWidth:"0px",tooltip:l,text:l,secondaryButton:(0,B.jsx)(Te.Z,{type:"secondary",icon:(0,B.jsx)(Ne,{}),onClick:r,"data-testid":"quick-look-button",isDisabled:a}),isLoading:n,onClick:t})},De=_e().div.withConfig({displayName:"dropdown-menu-footer__DropdownMenuFooterWrapper",componentId:"sc-1xyks5e-0"})(["display:flex;padding:var(--spacing-l);background-color:var(--highlight-background-color-secondary);border-radius:0 0 var(--border-radius-default) var(--border-radius-default);"]),Pe=({text:e,isLoading:n,isDisabled:t,onClick:a})=>(0,B.jsx)(De,{children:(0,B.jsx)(Te.Z,{type:"text",text:e,onClick:a,isLoading:n,isDisabled:t})});var Fe=t(65862);const Ve=_e()(Fe.Z).withConfig({displayName:"dropdown-menu-filter__FilterInput",componentId:"sc-1kj566z-0"})(["border-color:transparent;border-radius:var(--border-radius-default) var(--border-radius-default) 0 0;&:active,&:focus,&:hover,&:focus-within{box-shadow:none;border-color:transparent;}"]),Ue=({value:e,onChange:n})=>{const t=d().useRef(null);return d().useEffect((()=>{t.current&&t.current.focus()}),[]),(0,B.jsx)(Ve,{ref:t,type:"search",value:e,onChange:n,placeholder:"Search"})};var $e=t(81397),je=t(37691);const Me=_e().div.withConfig({displayName:"menu-item-label__LabelWrapper",componentId:"sc-1eo09n5-0"})(["box-sizing:border-box;display:flex;align-items:center;overflow:hidden;cursor:pointer;"]),We=_e().p.withConfig({displayName:"menu-item-label__Label",componentId:"sc-1eo09n5-1"})(["flex:2;margin:0;margin-right:var(--spacing-s);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:fit-content;"]),Ge=_e().p.withConfig({displayName:"menu-item-label__ForkLabel",componentId:"sc-1eo09n5-2"})(["flex:1;white-space:nowrap;overflow:hidden;margin:0;margin-left:var(--spacing-xs);font-size:var(--text-size-s);font-weight:var(--text-weight-regular);text-overflow:ellipsis;color:var(--content-color-tertiary);max-width:fit-content;"]),Be=({label:e,forkLabel:n})=>e?(0,B.jsxs)(Me,{children:[(0,B.jsx)($e.Z,{content:e,openDelay:1e3,placement:"bottom",children:(0,B.jsx)(We,{children:e})}),n&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(je.Z,{color:"content-color-tertiary",size:"small","data-testid":"fork-icon"}),(0,B.jsx)($e.Z,{content:n,openDelay:1e3,placement:"bottom",children:(0,B.jsx)(Ge,{children:n})})]})]}):null,Qe=_e().div.withConfig({displayName:"dropdown-menu-item__DropdownMenuItemWrapper",componentId:"sc-1si47dy-0"})(["flex:1;color:var(--content-color-primary);min-height:28px;box-sizing:border-box;padding:var(--spacing-xs) var(--spacing-s);border-radius:var(--border-radius-default);display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;user-select:none;"," &:hover{background-color:var(--highlight-background-color-secondary);}&:active{background-color:var(--highlight-background-color-tertiary);}"],(({isSelected:e})=>e&&"background-color: var(--highlight-background-color-primary);")),Ke=({isSelected:e,label:n,forkLabel:t,onSelect:a})=>(0,B.jsx)(Qe,{isSelected:e,role:"menuitem",onClick:a,tabIndex:0,onKeyPress:e=>{if("Enter"===e.key||" "===e.key)return e.preventDefault(),e.stopPropagation(),a()},children:(0,B.jsx)(Be,{label:n,forkLabel:t})}),qe=_e().div.withConfig({displayName:"dropdown-menu__DropdownMenuWrapper",componentId:"sc-58knxo-0"})(["display:flex;flex-direction:column;max-height:75vh;width:90vw;max-width:320px;"]),Ye=_e().div.withConfig({displayName:"dropdown-menu__MenuList",componentId:"sc-58knxo-1"})(["flex:1;display:flex;flex-direction:column;padding:var(--spacing-s);overflow-y:auto;background:var(--background-color-primary);:empty::before{content:'No items found';flex:1;min-height:28px;box-sizing:border-box;padding:var(--spacing-xs) var(--spacing-s);color:var(--content-color-tertiary);}"]),Ze=_e().div.withConfig({displayName:"dropdown-menu__HeaderInfoText",componentId:"sc-58knxo-2"})(["padding:var(--spacing-s) var(--spacing-l);color:var(--content-color-secondary);background-color:var(--highlight-background-color-secondary);font-weight:var(--text-weight-bold);user-select:none;"]),He=_e().div.withConfig({displayName:"dropdown-menu__LoadingErrorWrapper",componentId:"sc-58knxo-3"})(["text-align:center;padding:var(--spacing-m);"]),Xe=_e().div.withConfig({displayName:"dropdown-menu__FilterWrapper",componentId:"sc-58knxo-4"})(["border-radius:var(--border-radius-default) var(--border-radius-default) 0 0;",";"],(e=>e.isBleed?" ":"border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);")),ze=({options:e,onChange:n,value:t,isError:a,refetch:r,headerInfoText:o,isCreateNewLoading:s,isCreateNewDisabled:i,onCreateNew:l,createNewText:c="Create New"})=>{const[u,v]=d().useState(""),p=e.filter((({label:e})=>e.toLowerCase().includes(String(u).toLowerCase())));return(0,B.jsxs)(qe,{role:"menu",id:"selectormenu","aria-labelledby":"menubutton",children:[(0,B.jsx)(Xe,{isBleed:Boolean(o),children:(0,B.jsx)(Ue,{value:u,onChange:e=>v(e.target.value)})}),o&&(0,B.jsx)(Ze,{children:o}),a?(0,B.jsxs)(He,{children:["Failed to load. ",(0,B.jsx)(Te.Z,{type:"text",text:"Retry",onClick:r})]}):(0,B.jsx)(Ye,{children:p.map((e=>(0,B.jsx)(Ke,{value:e.value,label:e.label,forkLabel:e.forkLabel,onSelect:()=>(v(""),n(e)),isSelected:e.value===t.value},e.value)))}),l&&(0,B.jsx)(Pe,{text:c,onClick:l,isLoading:s,isDisabled:i})]})},Je=_e().div.withConfig({displayName:"selector__TriggerWrapper",componentId:"sc-bffnwo-0"})(["display:flex;flex:1;max-width:260px;"]),en=({value:e,options:n,onChange:t,isLoading:a,isError:r,refetch:o,headerInfoText:s,isCreateNewLoading:i,isCreateNewDisabled:l,onCreateNew:c,isQuickLookDisabled:u,onQuickLookClick:v,menuPlacement:p,"aria-label":m})=>{const[b,y]=d().useState(!1),h=(0,B.jsx)(Je,{children:(0,B.jsx)(Le,{value:e,isLoading:a,onClick:()=>y((e=>!e)),isSecondaryButtonDisabled:u,onSecondaryButtonClick:()=>(b&&y(!1),v()),"aria-haspopup":"menu","aria-controls":"selectormenu","aria-expanded":b,"aria-label":m})});return(0,B.jsx)(Ae.ZP,{placement:p,trigger:h,isOpen:b,onClickOutside:()=>y(!1),padding:"0",appendTo:"parent",children:b&&(0,B.jsx)(ze,{isCreateNewLoading:i,isCreateNewDisabled:l,onCreateNew:c,headerInfoText:s,options:n,isError:r,refetch:o,onChange:(...e)=>(y(!1),t(...e)),value:e})})},nn=e=>({queryKey:[b,e],queryFn:({signal:n})=>(async(e,{signal:n}={})=>{var t,a;if(!e)throw new Error("Invalid environment id");const r=await p.postmanGateway.get({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,signal:n});null==r||r.data;const o=A(r.data);return await(0,k.updateDependentSession)({model:"environment",modelId:o.id},o),(0,I.Z)({},o,{forkedFrom:null!=(t=null==(a=r.meta)?void 0:a.forkedFrom)?t:null})})(e,{signal:n}),useErrorBoundary:!1}),tn=e=>(0,I.Z)({},nn(null!=e?e:""),{enabled:!!e}),an=e=>({queryKey:[h,e],queryFn:({signal:n})=>(async(e,{signal:n}={})=>{var t;const a=await p.postmanGateway.get({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/workspace/${e}/globals`,signal:n});if(!Array.isArray(null==a||null==(t=a.data)?void 0:t.values))throw new TypeError("Received invalid globals data from server");const r=a.data;return await(0,k.updateDependentSession)({model:"globals",modelId:r.id},r),r})(e,{signal:n}),useErrorBoundary:!1}),rn=async({signal:e,permissionsPayload:n})=>{const t=await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/permissions/check",service:"acs",data:{body:{checks:(0,I.Z)({},n)}},signal:e});if(null==t||!t.results)throw new Error("Received invalid permissions");return t.results},on="workspace",sn="ADD_ENVIRONMENT_TO_WORKSPACE",ln="UPDATE_GLOBALS",cn=(e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:on,permission:a};return t},dn=e=>({queryKey:[y,w,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreateEnvironment:!0,userCanUpdateGlobals:!0};const t={[sn]:`${on}/${e}/${sn}`,[ln]:`${on}/${e}/${ln}`},a=await rn({signal:n,permissionsPayload:cn(e,t)});return{userCanCreateEnvironment:a[t[sn]].allowed,userCanUpdateGlobals:a[t[ln]].allowed}},useErrorBoundary:!1}),un="workspace",vn="ADD_ENVIRONMENT_TO_WORKSPACE",pn="UPDATE_ENVIRONMENT",mn="DELETE_ENVIRONMENT",bn=e=>e.includes(un),yn=(e,n)=>({queryKey:[E,e],queryFn:async({signal:t})=>{if(!window.USER_ID)return{userCanCreate:!0,userCanUpdate:!0,userCanDelete:!0};const a={[vn]:`${un}/${n}/${vn}`,[pn]:`${e}:${pn}`,[mn]:`${e}:${mn}`},r=((e,n,t)=>{const a={};for(const[r,o]of Object.entries(t))a[o]={entityId:window.USER_ID,entityType:"user",permission:r,objectId:bn(o)?n:e,objectType:bn(o)?un:"environment"};return a})(e,n,a),o=await rn({signal:t,permissionsPayload:r});return{userCanCreate:o[a[vn]].allowed,userCanUpdate:o[a[pn]].allowed,userCanDelete:o[a[mn]].allowed}},useErrorBoundary:!1}),hn="workspace",wn="UPDATE_GLOBALS",En=(e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:hn,permission:a};return t},gn=e=>({queryKey:[g,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanUpdate:!0};const t={[wn]:`${hn}/${e}/${wn}`};return{userCanUpdate:(await rn({signal:n,permissionsPayload:En(e,t)}))[t[wn]].allowed}},useErrorBoundary:!1}),fn="workspace",Cn="ADD_ENVIRONMENT_TO_WORKSPACE",In=e=>({queryKey:[f,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreate:!0};const t={[Cn]:`${fn}/${e}/${Cn}`},a=((e,n)=>{const t={};for(const[a,r]of Object.entries(n))t[r]={entityId:window.USER_ID,entityType:"user",permission:a,objectId:e,objectType:fn};return t})(e,t);return{userCanCreate:(await rn({signal:n,permissionsPayload:a}))[t[Cn]].allowed}},useErrorBoundary:!1});var kn=t(21466);const Sn=()=>({queryKey:["dynamic"],queryFn:()=>(async()=>await kn.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_DYNAMIC_VARIABLES",payload:{}}))()}),_n={userCanCreate:!0},An=e=>Boolean(e.isLoading);var xn=t(80809);const Tn="environment-selector-value-paint-mark",{PerfContext:Rn,PerformanceMarkPaint:Nn}=xn.perfComponents,On=()=>{performance.measure("environment-selector-value-paint-time",{},Tn),(0,xn.sendMeasureEvent)({name:Tn,entityType:"generic-selector"})},Ln=Object.freeze({label:"No Environment",value:"",forkLabel:""}),Dn=()=>{var e;const n=(0,Z.useNavigate)(),t=(0,v.useActiveWorkspaceId)(),a=(0,c.useContext)(Q),r=a&&!a.useActiveEnvironmentFromContext;te(t);const{data:o,isError:s,refetch:i}=W({workspaceId:t}),l=!o,{data:d}=G(),p=ae(),m=(0,c.useMemo)((()=>{var e;return[Ln,...null!=(e=null==o?void 0:o.map((e=>{var n;const t=An(e)?null:null==(n=e.attributes)||null==(n=n.fork)?void 0:n.forkLabel;return{label:e.name,value:e.id,forkLabel:null!=t?t:""}})))?e:[]]}),[o]),b=J(),{isLoading:y,userCanCreate:h}=(()=>{const e=(0,v.useActiveWorkspaceId)(),{data:n,error:t}=(0,u.useDataFetch)(In(e));return t?(0,I.Z)({isLoading:!1},_n):n?(0,I.Z)({isLoading:!1},n):(0,I.Z)({isLoading:!0},_n)})(),w=(e,a)=>{const r={rename:(null==a?void 0:a.showRenameOptionOnOpen)||!1};n(`/workspace/${t}/environment/${e}`,{state:JSON.stringify({additionalContext:r})},{customNavEvent:Z.OPEN_EXTENSION_URL})},E=null!=(e=m.find((e=>e.value===(null==d?void 0:d.id))))?e:Ln,g=l&&!s,{markName:f,callback:C}=(0,c.useContext)(Rn);return(0,B.jsx)("div",{"data-testid":"active-environment-selector",children:(0,B.jsx)(Nn,{condition:!g,markName:f||Tn,callback:C||On,children:(0,B.jsx)(en,{options:m,value:E,isLoading:g,isError:s,refetch:i,onChange:e=>{p.mutate(null!=e&&e.value?{id:e.value}:null)},menuPlacement:"bottom-end","aria-label":"active-environment",isQuickLookDisabled:!d||l,onQuickLookClick:()=>{d&&w(d.id)},headerInfoText:r?"Switch environment for the entire collection":void 0,isCreateNewLoading:b.isLoading||y,isCreateNewDisabled:!h,onCreateNew:()=>{b.mutate({workspaceId:t,requestBody:{id:(0,Y.v4)(),name:"New Environment",values:[]}},{onSuccess:({data:e})=>{H.AnalyticsService.addEventV2({category:"environment",action:"create",label:"environment-selector"}),w(`${e.owner}-${e.id}`,{showRenameOptionOnOpen:!0})}})}})})})},Pn=e=>X()?(0,B.jsx)(Dn,(0,I.Z)({},e)):null,Fn=e=>null==e?void 0:e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),Vn=async(e,n)=>{if(!e.id)throw new Error("updateEnvironment: id is required");const t=(e=>{const{values:n}=e;return(0,I.Z)({},e,{values:Fn(n)})})(e),a=(r=(await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${t.id}`,body:JSON.stringify({name:t.name,values:t.values})})).data,(0,I.Z)({},r,{id:`${r.owner}-${r.id}`}));var r;return null!=n&&n.avoidSession||await(0,k.updateDependentSession)({model:"environment",modelId:a.id},a),a},Un=()=>({mutationFn:Vn,onSuccess:e=>{u.cacheClient.setQueryData(["environment",e.id],e)}}),$n=()=>({mutationFn:async(e,n,t=!1)=>{const a=e.id;if(t)return await(0,k.setSession)({model:"environment",modelId:a},n),null;const[r]=await Promise.all([Vn(e,{avoidSession:!0}),(0,k.setSession)({model:"environment",modelId:a},n)]);return{environment:r}},onSuccess:e=>{if(e){const{environment:n}=e;(0,u.updateCache)({key:[b,n.id],updater:e=>e?(0,I.Z)({},e,n):e})}}}),jn=e=>e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),Mn=e=>{const{values:n,workspace:t}=e;return{workspace:t,values:jn(n)}},Wn=async(e,n)=>{const t=e.workspace,a=(await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/workspace/${t}/globals`,body:JSON.stringify(Mn(e))})).data;return null!=n&&n.avoidSession||await(0,k.updateDependentSession)({model:"globals",modelId:a.id},a),a},Gn=()=>({mutationFn:Wn,onSuccess:e=>{u.cacheClient.setQueryData([h,e.workspace],e)}}),Bn=()=>({mutationFn:async(e,n,t=!1)=>{if(t)return await(0,k.setSession)({model:"globals",modelId:e.id},n),null;const[a]=await Promise.all([Wn(e,{avoidSession:!0}),(0,k.setSession)({model:"globals",modelId:e.id},n)]);return{globals:(0,I.Z)({},a,{workspace:e.workspace})}},onSuccess:e=>{if(e){const{globals:n}=e;(0,u.updateCache)({key:["globals",n.workspace],updater:n})}}}),Qn=(e,n)=>{(0,u.updateCache)({key:e,updater:e=>e?(0,I.Z)({},e,{name:n}):e})},Kn=()=>({mutationFn:e=>Ee(e),onMutate:async({environmentId:e,name:n})=>{const t=[b,e],a=u.cacheClient.getQueryData(t);return Qn(t,n),()=>{a&&Qn(t,a.name)}},onSuccess:(e,{environmentId:n})=>{Qn([b,n],e.data.name)},onError:(e,n,t)=>{t&&t()}});async function qn(e,n,t){kn.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:e,variables:n,id:t}})}const Yn=async(...e)=>{const n=await Vn(...e);return(0,u.updateCache)({key:[b,n.id],updater:()=>n}),n},Zn=async(...e)=>{const n=await Wn(...e);return(0,u.updateCache)({key:[h,n.workspace],updater:()=>n}),n},Hn=(0,k.createVariableUpdatesHandler)({model:"environment",hasEditPermission:async(e,{workspaceId:n})=>{var t;const a=await u.cacheClient.fetchQuery(yn(e,n)).catch((()=>null));return null==(t=null==a?void 0:a.userCanUpdate)||t},getValues:async e=>await u.cacheClient.fetchQuery(nn(e)).catch((()=>null)),setValues:(e,n)=>Yn({id:e,values:n})}),Xn=(0,k.createVariableUpdatesHandler)({model:"globals",hasEditPermission:async(e,{workspaceId:n})=>{var t;const a=await u.cacheClient.fetchQuery(gn(n)).catch((()=>null));return null==(t=null==a?void 0:a.userCanUpdate)||t},getValues:async(e,{workspaceId:n})=>await u.cacheClient.fetchQuery(an(n)).catch((()=>null)),setValues:(e,n,{workspaceId:t})=>Zn({id:e,values:n,workspace:t})}),zn=async e=>{if(!e)return;const n=await u.cacheClient.fetchQuery(nn(e));return(0,k.getActiveSession)({model:"environment",modelId:n.id},n)},Jn=async e=>{const n=await u.cacheClient.fetchQuery(an(e));return(0,k.getActiveSession)({model:"globals",modelId:n.id},n)};var et=function(e){return e.GLOBALS="globals",e.WORKSPACE="workspace",e}(et||{});const nt=(e,{workspaceId:n})=>{var t,a;const r=null==e||null==(t=e.meta)?void 0:t.model,o=null==e||null==(a=e.meta)?void 0:a.action;if(r===et.GLOBALS&&o===N.UPDATE){const t=null==e?void 0:e.data;T(n,t)}r===et.WORKSPACE&&o===D.UPDATE_ROLES&&(u.cacheClient.invalidateQueries({queryKey:[E]}),(0,u.invalidateCache)([g,n]))}}}]);
//# sourceMappingURL=2557.d359e7b96ace12b0.js.map