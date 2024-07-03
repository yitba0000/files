"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[6940,8283,7107],{98283:(e,s,r)=>{function t(e,s){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(s,{Z:()=>t})},17107:(e,s,r)=>{r.r(s),r.d(s,{EXTERNAL_ID_QUERY_PREFIX:()=>c,PUBLIC_PROFILE_QUERY_PREFIX:()=>d,TEAM_DETAILS_QUERY_PREFIX:()=>l,USER_DETAILS_QUERY_PREFIX:()=>o,getExternalId:()=>U,getPublicProfile:()=>_,getTeamInfo:()=>h,getTeamsByUserId:()=>T,getUserInfo:()=>b,isTeamUser:()=>I,isUserGuest:()=>g,isUserPartner:()=>y,useAccountDataUpdateSubscription:()=>S,useExternalId:()=>w,usePublicProfile:()=>f,useTeamInfo:()=>m,useTeamSubscription:()=>O,useTeamsByUserId:()=>P,useUserInfo:()=>p});var t=r(97201),n=r(13101),a=r(98283),i=r(45860);const u=["result"],o="user-details",l="team-details",d="public-profile",c="external-id",b=({userId:e=(0,n.getUserId)(),enabled:s=!0}={})=>({queryKey:[o,e],queryFn:({signal:s})=>(async({userId:e=(0,n.getUserId)(),signal:s}={})=>i.postmanGateway.get({path:`/api/users/${e}`,service:"god",signal:s,query:{app_version:window.APP_VERSION,app_target:"artemis"}}).then((e=>{const{result:s}=e,r=(0,a.Z)(e,u);return"success"===s?r:{}})))({signal:s,userId:e}),useErrorBoundary:!1,enabled:s}),p=({userId:e=(0,n.getUserId)(),enabled:s=!0}={})=>(0,t.useDataFetch)(b({userId:e,enabled:s})),I=(e=(0,n.getTeamId)())=>void 0!==e&&""!==e&&"0"!==e,g=(e,s)=>{var r;return null==s||null==(r=s.guest_members)?void 0:r.some((s=>s.id===e))},y=(e,s)=>{var r;return null==s||null==(r=s.partner_members)?void 0:r.some((s=>s.id===e))},h=({teamId:e=(0,n.getTeamId)()}={})=>({queryKey:[l,e],queryFn:({signal:s})=>(async({teamId:e=(0,n.getTeamId)(),signal:s}={})=>I(e)?i.postmanGateway.get({path:`/api/organizations/${e}`,service:"god",signal:s,query:{populate_groups:!0,freecollab:!0,extras:!1,billing:!1,app_version:window.APP_VERSION}}).then((e=>{var s;return"success"===e.result?null==(s=e.data)?void 0:s.organization:{}})).catch((e=>({}))):{})({signal:s,teamId:e}),useErrorBoundary:!0}),m=({teamId:e=(0,n.getTeamId)()}={})=>(0,t.useDataFetch)(h({teamId:e}));var v=r(26663),E=r.n(v);const _=({type:e,userIds:s,populate:r,signal:t})=>({queryKey:[d,s.toString()],queryFn:()=>(async({type:e,userIds:s,populate:r,signal:t})=>{const n={type:e,ids:s};r&&(n.populate=r);const a=await i.postmanGateway.post({url:`${E().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/public_profile",service:"ums",method:"post",data:{body:n},signal:t});if(!a)throw new Error("Received invalid users");return a.users})({type:e,userIds:s,populate:r,signal:t}),useErrorBoundary:!1}),f=e=>(0,t.useDataFetch)(_(e)),T=({userId:e=(0,n.getUserId)(),overrideQueryParams:s,enabled:r=!0})=>({queryKey:[l,e],queryFn:({signal:r})=>(async({userId:e=(0,n.getUserId)(),signal:s,overrideQueryParams:r})=>{var t,a;return await i.postmanGateway.get({url:`${E().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/api/users/${e}/organizations`,service:"god",signal:s,query:Object.assign({user_id:e,populate_groups:!0,freecollab:!0,extras:!1,billing:!1,app_version:null!=(t=null==(a=window)?void 0:a.APP_VERSION)?t:""},r)})})({signal:r,userId:e,overrideQueryParams:s}),useErrorBoundary:!1,enabled:r}),P=e=>{const{userId:s=(0,n.getUserId)(),overrideQueryParams:r,enabled:a}=null!=e?e:{};return(0,t.useDataFetch)(T({userId:s,overrideQueryParams:r,enabled:a}))},U=({userId:e,enabled:s=!0})=>({queryKey:[c,e],queryFn:({signal:s})=>async function({id:e,signal:s}){const r=e||(0,n.getUserId)();return i.postmanGateway.get({url:`${E().IDENTITY_SERVICE_URL}/api/users/${r}/eid/postman`,signal:s}).then((e=>{const s=e.external_id;return function(e){return!!e&&"0"!==e}(s)?s:r}))}({signal:s,id:e}),useErrorBoundary:!1,enabled:s}),w=({userId:e=(0,n.getUserId)(),enabled:s=!0}={})=>(0,t.useDataFetch)(U({userId:e,enabled:s}));var R=r(21466),A=r(40540);const S=()=>{(0,A.useEffect)((()=>{{const e=R.VSCodeCommunicationsService.subscribe("ACCOUNT_DATA_UPDATED",(e=>{null!=e&&e.teamId&&(window.TEAM_ID=String(e.teamId))}));return()=>{e&&e()}}}),[])},C=new class{constructor(){var e=this;this.observer=null,this.abortController=null,this.asyncObserver=null,this.subscriptionsMap={},this.publishEventToSubscriptions=e=>{for(const s of Object.values(this.subscriptionsMap))try{s(e)}catch(e){}},this.init=async function(s){const{asyncObserver:r,abortController:t}=(e=>{const s=new AbortController;return{asyncObserver:i.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"post",url:`/team/${e}/subscribe`,body:{}},subscriptionEvents:["refresh_user_groups","add_member"],unsubscribeRequest:{method:"delete",url:`/team/${e}/subscribe`,body:{}}}),abortController:s}})(s);e.abortController=t,e.asyncObserver=r,e.observer=await r,e.abortController=null,e.observer.subscribe({next:s=>{e.publishEventToSubscriptions(s)},complete:()=>{e.unsubscribe()},error:async function(r){e.cleanup(),await e.init(s)}})},this.subscribe=({teamId:e,subscribingEntityId:s,subscriptionHandler:r})=>{if(s)return this.subscriptionsMap[s]=r,this.observer&&this.asyncObserver||this.init(e),()=>{delete this.subscriptionsMap[s],0===Object.keys(this.subscriptionsMap).length&&this.unsubscribe()}},this.unsubscribe=()=>{var e,s;null==(e=this.abortController)||e.abort(),null==(s=this.observer)||s.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null,this.subscriptionsMap={}}}},O=(e,s,r)=>{(0,A.useEffect)((()=>{if(s&&e){const t=C.subscribe({teamId:e,subscribingEntityId:s,subscriptionHandler:r});return()=>{t&&t()}}}),[])}}}]);
//# sourceMappingURL=6940.f48d2d426ba0f388.js.map