(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{63618:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/event/alpha-season",function(){return s(38826)}])},38826:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return Y}});var r=s(52322),n=s(71095),t=s(16298),a=s(50527),l=s(61065),o=s(5632),c=s(75783),d=s(62350),u=s(49177),m=s(76122),x=s(5628),f=s(58943);let p=e=>{let{account:i}=(0,c.aC)();return(0,f.a)(["missions-rank",null==i?void 0:i.username],async function(){let e=await (0,m.zF)();return e},{enabled:Boolean(null==i?void 0:i.username),...e})};var h=s(14661),b=s(24566),g=s(27742);let j=(0,u.Em)({"Mission already completed":{description:{id:"LT0572",defaultMessage:"Point already claimed, You cannot claim rewards twice."}},"Please set your avatar first":{description:{id:"LT0573",defaultMessage:"Please set your avatar form profile setting page first."}},"Please set your introduction first":{description:{id:"LT0574",defaultMessage:"Please set your introduction form profile setting page first."}},"Please set your medias first":{description:{id:"LT0575",defaultMessage:"Please set your medias from profile page first."}},"Please follow 3 games first.":{description:{id:"LT0576",defaultMessage:"Please follow 3 games first. (now: {followingGameCount})"}},"Please link your Facebook account first":{description:{id:"LT0577",defaultMessage:"Please link your Facebook account from social connect page first."}},"Please link your Twitter account first":{description:{id:"LT0578",defaultMessage:"Please link your Twitter account from social connect page first. "}},"Please link your Discord account first":{description:{id:"LT0579",defaultMessage:"Please link your Discord account from social connect page first. "}},"Please link your Steam account first":{description:{id:"LT0580",defaultMessage:"Please link your Steam account from social connect page first."}},"You are not OG":{description:{id:"LT0581",defaultMessage:"You are not an eligible email account, please check you email account first. "}},"Please set your wallet first":{description:{id:"LT0582",defaultMessage:"You are not an eligible address account, please check you address account first."}}}),k=[{failMessageIds:["LT0573","LT0574"],message:(0,u.Em)({id:"LT0656",defaultMessage:"Setup Profile"}),href:"/account/settings"},{failMessageIds:["LT0575"],message:(0,u.Em)({id:"LT0047",defaultMessage:"Upload"}),href:"/account/media"},{failMessageIds:["LT0576"],message:(0,u.Em)({id:"LT0381",defaultMessage:"Follow"}),href:"/games"},{failMessageIds:["LT0577","LT0578","LT0579","LT0580"],message:(0,u.Em)({id:"LT0654",defaultMessage:"Link"}),href:"/account/settings/social-accounts"},{failMessageIds:["LT0581","LT0582"],message:(0,u.Em)({id:"LT0655",defaultMessage:"Check Rules"}),href:"https://lootexio.medium.com/og-lootizen-bonus-lootex-v3-alpha-s1-de92ffd9c5d4"}],v=e=>{let{errorPopup:i}=(0,g.Ol)(),{popup:s}=(0,n.lmA)(),{refetch:r}=(0,h.Z)(),{refetch:a}=p(),{refetch:l}=(0,x.Z)(),{refetch:c}=(0,b.Z)(),{t:u}=(0,t.YB)(),f=(0,o.useRouter)();return(0,d.D)(async e=>{let i=await (0,m.BR)(e);return JSON.parse(i)},{onSuccess:async e=>{r(),a(),l(),c(),s({title:u("RF0099","Congradulation!"),description:u({id:"RF0100",defaultMessage:"You have earned {PT_amount} PT by successfully completing this mission. You can increase your rewards by taking on more tasks."},{PT_amount:e.point}),actions:[{children:u("LT0102","Confirm"),onClick:()=>{},colorScheme:"primary"}]})},onError:e=>{let r=Object.entries(j).find(i=>{let[s,r]=i;if(e.message.includes(s))return r});if(r){let i=r[1].description,n=k.find(e=>e.failMessageIds.includes(null==i?void 0:i.id)),t="LT0576"https://lootex.io/_next/static/chunks/pages/event/===i.id?parseInt(e.message.split("now:")[1].split(")")[0]):0;s({title:u("LT0571","Fail to Claim"),description:u(i,{followingGameCount:t}),actions:[{children:u("LT0433","Cancel"),onClick:()=>{},colorScheme:"mono"},{children:u(null==n?void 0:n.message),onClick:()=>{let e=/^https:\/\//.test(null==n?void 0:n.href);e?window.open(null==n?void 0:n.href,"_blank"):f.push(null==n?void 0:n.href)},colorScheme:"primary"}]})}else i(e)},...e})};var w=s(40991),T=s(31398);let C=e=>(0,f.a)(["missions-template"],async function(){let e=await (0,m.P1)();return{missions:e}},e),y={locked:"locked",undone:"undone",completed:"completed",expired:"expired"},L=e=>{switch(e){case y.expired:return{opacity:"0.5"};case y.locked:return{justifyContent:"space-between",alignItems:{base:"flex-start",md:"center"}};default:return{}}},P=e=>{switch(e){case y.undone:return{columnGap:{base:"5",md:"16"},alignItems:"center"};case y.locked:return{mr:{base:"0",md:"48"}};default:return{columnGap:"16",rowGap:"4",alignItems:{base:"flex-start",md:"center"},flexDirection:{base:"column",md:"row"},w:{base:"full",md:"auto"}}}},R=e=>{let{status:i,children:s}=e;return i===y.undone||i===y.expired?(0,r.jsx)(r.Fragment,{children:s}):(0,r.jsxs)(n.kCb,{alignItems:{base:"flex-start",md:"center"},rowGap:i===y.completed?"2":"4",columnGap:"4",flexGrow:"1",flexDirection:{base:"column",md:"row"},children:[(0,r.jsxs)(n.kCb,{w:"14",h:"14",borderRadius:"xl",flex:"none",justifyContent:"center",alignItems:"center",bgColor:i===y.completed?"https://lootex.io/_next/static/chunks/pages/event/success.500":"https://lootex.io/_next/static/chunks/pages/event/neutral.200",_dark:i===y.locked&&{bgColor:"https://lootex.io/_next/static/chunks/pages/event/darkTheme.800"},mb:i===y.completed&&{base:"2",md:"0"},children:[i===y.completed&&(0,r.jsx)(n.PJP.Check,{}),i===y.locked&&(0,r.jsx)(n.PJP.Help,{_dark:{color:"https://lootex.io/_next/static/chunks/pages/event/neutral.400"}})]}),(0,r.jsx)(n.kCb,{flexDirection:"column",rowGap:"2",children:s})]})},F=e=>{let{status:i,title:s,description:a,link:l,linkTitle:o}=e,{t:c}=(0,t.YB)();return i===y.locked?(0,r.jsx)(n.xvT,{children:c("RF0057","Please finish the missions above to unlock.")}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.X6q,{size:"xs",children:s}),(0,r.jsx)(n.xvT,{as:n.UGj,children:a}),i===y.undone&&l&&o&&(0,r.jsx)(w.Qj,{size:"md",href:l,variant:"link",color:"text.secondary",fontWeight:"normal",alignSelf:"flex-start",pt:"2",_hover:{textDecoration:"none"},rightIcon:(0,r.jsx)(n.PJP.ArrowRight,{boxSize:"1rem"}),children:o})]})},S=e=>{let{status:i,id:s,ctaUrl:a}=e,{t:l}=(0,t.YB)(),{mutate:d,isLoading:u}=v(),m=(0,o.useRouter)(),{signedIn:x}=(0,c.aC)(),{popup:f}=(0,n.lmA)();switch(i){case y.undone:return(0,r.jsx)(n.zxk,{size:"lg",variant:"solid",colorScheme:"primary",flexShrink:"0",visibility:"/invite"!==a?"visible":"hidden",onClick:()=>{x?"/invite"===a?m.push("/invite?tab=referral_history"):d(s):f({status:"error",title:l("LT0091","Please sign in first"),actions:[{children:l("LT0094","Ok"),onClick:()=>{m.push({pathname:"/account/sign-in",query:{redirect:m.asPath}})},colorScheme:"primary"}]})},isLoading:u,children:l("LT0457","Claim")});case y.completed:return(0,r.jsxs)(n.kCb,{alignItems:"center",columnGap:"2",w:"28",children:[(0,r.jsx)(n.PJP.Check,{_dark:{color:"https://lootex.io/_next/static/chunks/pages/event/neutral.400"}}),(0,r.jsx)(n.xvT,{fontWeight:"semibold",children:l("LT0459","Claimed")})]});case y.expired:return(0,r.jsx)(n.xvT,{fontWeight:"semibold",w:"28",flexShrink:"0",textAlign:{base:"flex-start",md:"center"},children:l("LT0696","Expired")});case y.locked:return(0,r.jsx)(r.Fragment,{})}},D=e=>{let{missions:i}=e,{t:s}=(0,t.YB)();return null==i?void 0:i.map((e,i)=>{let{title:t,description:a,cta:l,ctaUrl:o,point:c,id:d}=e,u=function(e){let{title:i,MissionCompletes:s}=e;return"RF0058"===i?y.locked:Array.isArray(s)&&s.length>0?y.completed:new Date(e.expiredAt).getTime()<Date.now()?y.expired:y.undone}(e);return(0,r.jsxs)(n.kCb,{p:"8",border:"1px",borderColor:"https://lootex.io/_next/static/chunks/pages/event/darkTheme.50",borderRadius:"xl",flexDirection:{base:"column",md:"row"},display:["RF0044"].includes(t)?"none":"flex",columnGap:"16",rowGap:"4",alignItems:"center",...L(u),children:[(0,r.jsx)(n.kCb,{flexDirection:"column",rowGap:"2",flexGrow:"1",children:(0,r.jsx)(R,{status:u,children:(0,r.jsx)(F,{status:u,title:s({id:t}),description:s({id:a}),link:o,linkTitle:l&&"NA"!==l&&s({id:l})})})}),(0,r.jsxs)(n.kCb,{...P(u),children:[(0,r.jsxs)(n.X6q,{as:"h4",whiteSpace:"nowrap",children:["+ ",s({id:"RF0024",defaultMessage:"{point} PT"},{point:c})]}),(0,r.jsx)(S,{status:u,id:d,ctaUrl:o})]})]},i)})},M=()=>{let{t:e}=(0,t.YB)(),{signedIn:i}=(0,c.aC)(),{data:{missions:s}={},isLoading:a}=(0,h.Z)(),{data:{missions:l}={},isLoading:o}=C();return(0,r.jsxs)(n.kCb,{flexDirection:"column",rowGap:"4",children:[(0,r.jsx)(n.X6q,{size:"xs",mt:{base:"8",md:"12"},children:e("RF0090","Basic Mission")}),(i?a:o)?(0,r.jsx)(T.gb,{}):(0,r.jsx)(D,{missions:i?s:l})]})};var z=s(89713),G=s(11493);let I=()=>{var e;let{t:i}=(0,t.YB)(),{signedIn:s}=(0,c.aC)(),{account:a}=(0,c.aC)(),l=s?a.referralCode:"",{data:{point:o}={}}=(0,h.Z)(),{data:{loot:d}={}}=(0,b.Z)(),{getRate:u}=(0,G.W1)(),m=u("LOOT"),{onCopy:x,value:f}=(0,g.VP)(""===l?"":"".concat(null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.origin,"/invite/").concat(l),i("RF0062","Referral Link"));return(0,r.jsxs)(n.kCb,{justify:"center",m:"auto",maxW:"https://lootex.io/_next/static/chunks/pages/event/container.xl",align:"center",pt:{base:"12",lg:"14"},pb:{base:"1",lg:"14"},px:"4",flexDirection:{base:"column",lg:"row"},columnGap:"24",rowGap:"8",children:[(0,r.jsxs)(n.kCb,{flex:"1",flexDirection:"column",rowGap:"6",children:[(0,r.jsx)(n.X6q,{as:"h1",children:i("RF0025","Alpha Season Reward Program")}),(0,r.jsxs)(n.kCb,{flexDirection:{base:"column",md:"row"},columnGap:"16",rowGap:"4",children:[(0,r.jsxs)(n.kCb,{flexDirection:"column",children:[(0,r.jsx)(n.xvT,{fontSize:"xl",fontFamily:"heading",fontWeight:"semibold",color:"text.primary",children:"135,135"}),(0,r.jsx)(n.xvT,{fontSize:"sm",children:i("RF0026","LOOT Rewards")})]}),(0,r.jsxs)(n.kCb,{flexDirection:"column",children:[(0,r.jsx)(n.xvT,{fontSize:"xl",fontFamily:"heading",fontWeight:"semibold",color:"text.primary",children:"2023/6/26-2023/7/26"}),(0,r.jsx)(n.xvT,{fontSize:"sm",children:i("RF0027","Duration")})]})]}),(0,r.jsx)(n.zxk,{as:n.rUS,variant:"link",href:"https://go.lootex.io/5379hh",rightIcon:(0,r.jsx)(n.PJP.OpenInNew,{boxSize:"1rem"}),alignSelf:"flex-start",children:i("RF0028","Please Check Details")})]}),(0,r.jsx)(n.kCb,{position:"relative",bg:"linear-gradient(45deg, rgba(250, 249, 250, 0.75) 0%, rgba(250, 249, 250, 0.55) 100%)",_dark:{bg:"linear-gradient(45deg, rgba(25, 19, 25, 0.75) 0%, rgba(25, 19, 25, 0.55) 100%)"},boxShadow:"0px 12px 30px rgba(20, 16, 20, 0.65)",p:{base:"4",md:"8"},w:{base:"auto",md:"450px"},minH:{base:"auto",md:"250px"},borderRadius:"2xl",flexDirection:"column",justifyContent:"center",alignItems:"center",children:(0,r.jsxs)(n.kCb,{flexDirection:"column",rowGap:"8",w:"full",children:[(0,r.jsxs)(n.kCb,{flexDirection:{base:"column",md:"row"},p:{base:"4",md:"0"},children:[(0,r.jsxs)(n.kCb,{flexDirection:"column",minH:{base:"24",md:"0"},flex:"1",pr:{base:"0",md:"4"},pb:{base:"4",md:"0"},children:[(0,r.jsx)(n.X6q,{as:"h4",children:s&&o?o:"--"}),(0,r.jsx)(n.xvT,{fontSize:"sm",children:i("RF0059","Total Points")})]}),(0,r.jsxs)(n.kCb,{flexDirection:"column",minH:{base:"24",md:"0"},flex:"1",borderLeftWidth:{base:"0px",md:"1px"},borderTopWidth:{base:"1px",md:"0px"},borderColor:"border.primary",pl:{base:"0",md:"4"},pt:{base:"4",md:"0"},children:[(0,r.jsx)(n.X6q,{as:"h4",children:i({id:"RF0063",defaultMessage:"{amount} LOOT"},{amount:s?(null!=d?d:0).toFixed(2):"--"})}),(0,r.jsxs)(n.kCb,{flexDirection:"column",children:[(0,r.jsx)(n.xvT,{fontSize:"xs",children:i({id:"RF0060",defaultMessage:"Approx. ${amount}"},{amount:(d*m||0).toFixed(2)})}),(0,r.jsx)(n.xvT,{fontSize:"sm",children:i("RF0061","Current Reward")}),(0,r.jsx)(w.Qj,{leftIcon:(0,r.jsx)(z.Help,{boxSize:"1.25rem"}),href:"/rewards",variant:"link",colorScheme:"mono",size:"sm",mt:"1",justifyContent:"flex-start",children:i("RF0101","See rules here")})]})]})]}),(0,r.jsxs)(n.kCb,{flexDirection:"column",rowGap:"2",p:{base:"4",md:"0"},pt:"0",children:[(0,r.jsx)(n.xvT,{whiteSpace:"nowrap",fontWeight:"bold",children:i("RF0062","Referral Link")}),(0,r.jsxs)(n.kCb,{position:"relative",children:[(0,r.jsx)(n.IIB,{readOnly:!0,value:f}),(0,r.jsx)(n.hU,{ml:"2",variant:"ghost",isDisabled:!s,icon:(0,r.jsx)(n.PJP.Copy,{}),onClick:x})]})]}),!s&&(0,r.jsx)(w.Qj,{href:"/account/sign-in?redirect=%2Fevent%2Falpha-season",colorScheme:"primary",size:"lg",alignSelf:"center",variant:"solid",children:i("LT0390","Sign In")})]})})]})},_=e=>{let{rank:i={}}=e,s={username:i.username,avatarUrl:i.avatarUrl,avatarDecoration:i.avatarDecoration},t={position:"#".concat(null==i?void 0:i.rank),username:(0,r.jsx)(w.He,{avatarSize:"sm",username:i.username,account:s,showAvatar:!0}),missionsCompleted:i.missionCompleteds,validReferrals:i.validReferrals,point:i.points};return(0,r.jsx)(n.Tr,{display:"flex",children:Object.entries(t).map(e=>{let[i,s]=e;return(0,r.jsx)(n.Td,{minW:"username"===i?"250px":"0px",pr:{base:"position"===i?"16":"0",lg:"0"},display:"flex",flex:{base:"position"===i?"0":"1",lg:"1"},pl:"4",children:"object"!=typeof s?(0,r.jsx)(n.xvT,{fontWeight:"semibold",color:"text.primary",children:null!=s?s:"--"}):s},i)})})},W=()=>{let{t:e,formatDate:i}=(0,t.YB)(),{signedIn:s}=(0,c.aC)(),{data:{leaderboard:a,lastUpdate:l}={}}=(0,x.Z)(),{data:o}=p(),{data:{point:d}={}}=(0,h.Z)(),u=[{title:e("RF0071","Position"),value:s?"#".concat((null==o?void 0:o.rank)===0?"100+":null==o?void 0:o.rank):"--"},{title:e("RF0019","User Name"),value:s?null==o?void 0:o.username:"--"},{title:e("RF0072","# of missions completed"),value:s?null==o?void 0:o.missionCompleteds:"--"},{title:e("RF0073","Valid Referrals"),value:s?null==o?void 0:o.validReferrals:"--"},{title:e("RF0074","Total PTs"),value:s?d:"--"}];return(0,r.jsxs)(n.kCb,{flexDirection:"column",rowGap:"12",mt:"12",children:[(0,r.jsx)(n.kCb,{color:"https://lootex.io/_next/static/chunks/pages/event/darkTheme.50",border:"1px",borderRadius:"xl",p:"5",flexDirection:{base:"column",md:"row"},borderColor:"border.primary",children:u.map((e,i)=>{let{title:s,value:t}=e;return(0,r.jsxs)(n.kCb,{flex:"1",flexDirection:"column",p:"4",borderLeftWidth:{base:"0px",md:0!==i?"1px":"0px"},borderTopWidth:{base:0!==i?"1px":"0px",md:"0px"},borderColor:"border.primary",children:[(0,r.jsx)(n.xvT,{fontSize:"xl",fontWeight:"semibold",fontFamily:"heading",color:"text.primary",children:t}),(0,r.jsx)(n.xvT,{fontSize:"sm",children:s})]},i)})}),(0,r.jsxs)(n.kCb,{flexDirection:"column",rowGap:"3",children:[(0,r.jsxs)(n.kCb,{justifyContent:"space-between",w:"full",children:[(0,r.jsx)(n.X6q,{size:"xs",children:e("RF0075","24HR Leaderboard")}),(0,r.jsxs)(n.xvT,{fontSize:"sm",children:[e("LT0218","Last Updated")," ",l&&i(new Date(l))]})]}),(0,r.jsx)(n.kCb,{position:"relative",border:"1px",borderRadius:"2xl",p:"5",borderColor:"border.primary",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",children:(0,r.jsx)(n.xJi,{w:"full",children:(0,r.jsxs)(n.iA_,{children:[(0,r.jsx)(n.hrZ,{children:(0,r.jsx)(n.Tr,{display:"flex",children:u.map((e,i)=>{let{title:s}=e;return(0,r.jsx)(n.Th,{flex:"1",display:"flex",minW:0===i?"100px":"200px",children:s},i)})})}),(0,r.jsx)(n.p3B,{children:Array.isArray(a)&&a.length>0&&a.map((e,i)=>(0,r.jsx)(_,{rank:e},i))})]})})})]})]})},O=()=>{let{t:e}=(0,t.YB)(),{query:i,append:s}=(0,a.oN)(),o=function(e){switch(e){case"all-mission":default:return 0;case"status":return 1}}(null==i?void 0:i.tab);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{}),(0,r.jsx)(n.W20,{maxW:"https://lootex.io/_next/static/chunks/pages/event/container.xl",mt:{base:"8",md:"4"},px:"4",children:(0,r.jsxs)(n.mQc,{index:o,onChange:e=>s({tab:function(e){switch(e){case 0:default:return"all-mission";case 1:return"status"}}(e)}),children:[(0,r.jsxs)(n.tdY,{borderWidth:"full",children:[(0,r.jsx)(n.OK9,{gap:"2",children:e("RF0029","All Missions")}),(0,r.jsx)(n.OK9,{gap:"2",children:e("LT0312","Status")})]}),(0,r.jsxs)(n.nPR,{children:[(0,r.jsx)(n.x45,{px:"0",children:(0,r.jsx)(M,{})}),(0,r.jsx)(n.x45,{px:"0",children:(0,r.jsx)(W,{})})]})]})}),(0,r.jsx)(l.xe,{})]})},A=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.HJ,{title:"Alpha Seaon"}),(0,r.jsx)(O,{})]});var Y=A},5628:function(e,i,s){"use strict";var r=s(58943),n=s(76122);let t=e=>(0,r.a)(["missions-leaderboard"],async function(){let{lastUpdate:e,leaderboard:i}=await (0,n.aJ)();return{lastUpdate:e,leaderboard:i}},e);i.Z=t},14661:function(e,i,s){"use strict";var r=s(58943),n=s(75783),t=s(76122);let a=e=>{let{account:i}=(0,n.aC)();return(0,r.a)(["missions",null==i?void 0:i.username],async function(){let e=await (0,t.uc)(),{point:i}=await (0,t.uD)();return{missions:e,point:i}},{enabled:Boolean(null==i?void 0:i.username),...e})};i.Z=a},24566:function(e,i,s){"use strict";var r=s(30315),n=s(58943),t=s(75783),a=s(76122),l=s(5628);let o=e=>{(0,l.Z)();let{address:i}=(0,r.mA)(),{signedIn:s}=(0,t.aC)();return(0,n.a)(["loot-reward",i],async()=>await (0,a.Yp)(),{enabled:s,...e})};i.Z=o}},function(e){e.O(0,[1065,9774,2888,179],function(){return e(e.s=63618)}),_N_E=e.O()}]);