(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{46397:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/[slug]/[[...tab]]",function(){return r(73032)}])},73032:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return y},default:function(){return E}});var i=r(52322),s=r(41578),l=r(15375),t=r(2784),a=r(71095),o=r(16298),c=r(75783),d=r(48550),x=r(40991),m=r(31398),u=r(27742),h=r(19693),b=r(39097),g=r.n(b),j=r(29077),p=r(11493);let v=e=>{var n,r;let{slug:l,name:t,contractAddress:c,description:d,isVerified:u,externalLinks:h,chainId:b,totalItems:v,totalOwners:f,totalVolume:w,floorPrice:k,priceSymbol:C}=e,{toast:L}=(0,a.lmA)(),{formatNumber:T,formatPrice:y,t:E,formatUSD:S}=(0,o.YB)(),P="NONE"===C?null===(n=(0,p.h2)({chainId:b}))||void 0===n?void 0:null===(r=n.nativeToken)||void 0===r?void 0:r.symbol:C,{actions:F}=(0,s.G_)({collection:e}),_=()=>L({status:"success",title:E("LT0638","Added to watchlist")}),I=()=>L({status:"success",title:E("LT0639","Removed from watchlist")}),z=()=>L({status:"error",title:E("LT0632","Failed to update. Please try again later.")}),{like:M,dislike:N,isLikedByAccount:A,isLoading:H}=(0,j.$C)({collection:e,onLike:_,onDislike:I,onError:z}),O=[{label:E("LT0139","Items"),number:v?T(v):"--"},{label:E("LT0140","Owners"),number:f?T(f):"--"},{label:E("LT0141","Floor Price"),number:k&&P?"".concat(y(k)," ").concat(P):"--"},{label:E("LT0142","Total Volume"),number:w?S(w):"--"}];return(0,i.jsx)(a.W20,{maxW:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/container.2xl",px:{base:4},direction:"column",m:"0 auto",children:(0,i.jsxs)(a.kCb,{direction:{base:"column-reverse",md:"row"},justify:{md:"space-between"},align:"start",gap:"4",mb:"8",children:[(0,i.jsxs)(a.kCb,{direction:"column",children:[(0,i.jsx)(x.Nb,{collectionSlug:l,collectionName:t,isVerified:u,nameProps:{as:"h1",size:"xl"},isLink:!0}),(0,i.jsx)(x.x3,{chainId:b,contractAddress:c,textProps:{fontWeight:"medium",fontSize:{base:"xs",md:"sm"}},iconButtonProps:{boxSize:"1rem",color:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/neutral.400"},mb:"2"}),""!==d&&(0,i.jsx)(a.Akm,{mb:"4",startingHeight:26,children:e=>{let{isExpanded:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Mn$,{noOfLines:1,contentProps:{color:"text.secondary"},children:(0,i.jsx)(a.UGj,{components:{p:e=>{let{children:n}=e;return(0,i.jsx)(a.xvT,{display:"inline",children:n})}},children:d})}),(0,i.jsx)(a.pKi,{children:n?E("LT0556","Show Less"):E("LT0005","Read More")})]})}}),(0,i.jsx)(a.kCb,{gap:{base:"6",md:"8"},wrap:"wrap",mb:"4",children:O.map(e=>{let{label:n,number:r}=e;return(0,i.jsxs)(a.kNN,{flex:"0 0 auto",children:[(0,i.jsx)(a.Jf7,{children:r}),(0,i.jsx)(a.dwn,{children:n})]},n)})}),(0,i.jsx)(a.Ugi,{display:{base:"none",md:"flex"},children:Array.isArray(h)&&h.map(e=>{let{name:n,url:r,iconName:s}=e,l=a.PJP[s];if(""!==r)return(0,i.jsx)(a.hU,{as:g(),href:r,target:"_blank",variant:"outline",size:"md",icon:(0,i.jsx)(l,{})},n)})})]}),(0,i.jsxs)(a.kCb,{gap:"2",alignSelf:{base:"end",md:"initial"},children:[(0,i.jsx)(a.zxk,{variant:{base:"ghost",md:"outline"},onClick:()=>A?N():M(),leftIcon:A?(0,i.jsx)(a.PJP.HeartSolid,{color:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/secondary.500"}):(0,i.jsx)(a.PJP.Heart,{}),isLoading:H,children:A?E("LT0240","Favorited"):E("LT0710","Favorite")}),(0,i.jsx)(m.ve,{copyLink:"/collections/".concat(l)}),(0,i.jsx)(x.C1,{actions:F,placement:"bottom-end",menuButtonProps:{as:a.hU,variant:{base:"ghost",md:"outline"},size:"md"}})]})]})})};var f=r(25982),w=r(51621);let k=e=>{let{items:n,isFetchingNextPage:r,fetchNextPage:s,hasNextPage:t}=e,{t:c,formatDate:d,formatQuantity:u}=(0,o.YB)();return(0,i.jsxs)(a.gCW,{spacing:"8",children:[n.map(e=>{var n;let{id:r,slug:s,name:t,description:o,follower:h,iconUrl:b,developer:g,releaseDate:j,tags:p,medias:v}=e,k=(0,l.ux)(p),C=(null===(n=null==v?void 0:v.slice(0,4))||void 0===n?void 0:n.map(e=>({...e,id:(0,f.Z)()})))||[];return(0,i.jsxs)(a.kCb,{direction:{base:"column",md:"row"},gap:{base:"6",md:"12"},align:"center",alignSelf:"stretch",py:{base:"6",md:"12"},pl:{base:0,md:"12"},pr:{base:0,md:"12"},borderRadius:"2xl",bg:"rgba(235, 234, 235, 0.5)",_dark:{bg:"rgba(37, 31, 37, 0.5)"},children:[(0,i.jsx)(m.ew,{media:C,display:{base:"block",md:"none"},containerProps:{px:"6"},showMenu:!1,showGame:!1}),(0,i.jsx)(a.rjZ,{display:{base:"none",md:"grid"},templateColumns:"repeat(3, minmax(1fr, auto))",gap:"2",flex:{md:"2"},children:C.map((e,n)=>{let{isVideo:r}=(0,w.w)(e.contentType);return(0,i.jsx)(a.P4e,{colSpan:0===n?3:"auto",children:r?(0,i.jsx)(m.Fo,{video:e,showMenu:!1,showInfo:!1}):(0,i.jsx)(m.Cn,{media:C,medium:e,showMenu:!1,showGame:!1})},e.id)})}),(0,i.jsxs)(a.kCb,{direction:"column",align:"flex-start",gap:"2",pr:{base:"6",md:0},pl:{base:"6",md:0},flex:{md:"1"},alignSelf:{base:"stretch",md:"center"},children:[(0,i.jsxs)(a.kCb,{align:"center",gap:"4",mb:"2",children:[(0,i.jsx)(a.oM5,{w:"16",ratio:1,borderRadius:"2xl",bgColor:"background.secondary",flexShrink:"0",children:(0,i.jsx)(a.qEK,{src:b,name:t,borderRadius:"2xl"})}),(0,i.jsxs)(a.gCW,{align:"flex-start",spacing:"0",children:[(0,i.jsx)(a.X6q,{as:"h3",children:t}),(0,i.jsxs)(a.xvT,{color:"text.primary",children:[u(h)," ",c("LT0518","Followers")]})]})]}),(0,i.jsxs)(a.kCb,{gap:"0 1rem",wrap:"wrap",children:[g&&""!==g&&(0,i.jsxs)(a.xvT,{noOfLines:1,children:[c("LT0489","Developer"),": ",g]}),j&&""!==j&&(0,i.jsxs)(a.xvT,{children:[c("LT0491","Release Date"),":"," ",d(j,{month:"short",day:void 0,hour:void 0,minute:void 0})]})]}),o&&(0,i.jsx)(a.Akm,{startingHeight:72,mb:"2",children:e=>{let{isExpanded:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Mn$,{noOfLines:3,contentProps:{color:"text.secondary"},children:(0,i.jsx)(a.xvT,{display:"inline",children:o})}),(0,i.jsx)(a.pKi,{children:n?c("LT0556","Show Less"):c("LT0005","Read More")})]})}}),Object.hasOwn(k,"genre")&&(0,i.jsxs)(a.Akm,{startingHeight:32,flexDirection:"row",mb:{base:"2",md:"6"},children:[(0,i.jsx)(a.Mn$,{children:(0,i.jsx)(a.kCb,{wrap:"wrap",gap:"2",children:k.genre.map(e=>(0,i.jsx)(a.Vp9,{size:"md",children:e.value},e.value))})}),(0,i.jsx)(a.pKi,{size:"xs",iconSpacing:"0"})]}),(0,i.jsx)(x.Qj,{size:"lg",variant:"solid",colorScheme:"primary",alignSelf:{base:"stretch",md:"flex-start"},href:"/games/".concat(s),children:c("LT0711","Visit Game")})]})]},r)}),t&&(0,i.jsx)(x.nw,{fetchNextPage:s,isFetchingNextPage:r})]})},C=e=>{let{collection:n,...r}=e,{t:s}=(0,o.YB)(),{account:l}=(0,c.aC)(),{officialAddress:b}=n,{items:g}=r,j=(0,u.wX)(["nfts",...b?["official-sale"]:[],"activity",...l.username?["my-inventory"]:[],...g.length?["related-game"]:[]],{preservedQueryKeys:["slug"]});return(0,t.useEffect)(()=>{d.Kz.viewCollection()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{...n}),(0,i.jsx)(v,{...n}),(0,i.jsx)(a.W20,{maxW:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/container.2xl",mt:6,children:(0,i.jsxs)(x.l8,{...j,isLazy:!0,lazyBehavior:"keepMounted",children:[(0,i.jsx)(x.i1,{title:s("LT0139","Items"),children:(0,i.jsx)(m.kC,{params:{collectionSlugs:[n.slug],chainId:n.chainId,isExplore:!0},isCollectionFilterEnabled:!1,isFilterEnabled:!0,isLoadMoreEnabled:!0,isCollection:!0})}),b&&(0,i.jsx)(x.i1,{title:s("LT0732","Official Sale"),children:(0,i.jsx)(m.kC,{params:{collectionSlugs:[n.slug],chainId:n.chainId,isExplore:!0,orderStatus:["listing"],walletAddress:b},isCollectionFilterEnabled:!1,isFilterEnabled:!0,isLoadMoreEnabled:!0,isCollection:!0,isOfficialSale:!0})}),(0,i.jsx)(x.i1,{title:s("LT0185","Activity"),children:(0,i.jsx)(m.Av,{params:{contractAddress:n.contractAddress,chainId:n.chainId},isCollection:!0})}),(null==l?void 0:l.username)&&(0,i.jsx)(x.i1,{title:s("LT0708","My inventory"),children:(0,i.jsx)(m.kC,{params:{collectionSlugs:[n.slug],chainId:n.chainId,isExplore:!0,username:l.username},isCollectionFilterEnabled:!1,isFilterEnabled:!0,isLoadMoreEnabled:!0,isCollection:!0,isCollectionInventory:!0,isMyItems:!0})}),g.length&&(0,i.jsx)(x.i1,{title:s("LT0709","Related Game"),children:(0,i.jsx)(k,{...r})})]})})]})};var L=r(63474);let T=e=>{var n;let{slug:r,metadata:t,errorMessage:a}=e,{data:o}=(0,s.YD)({slug:r,placeholderData:t}),c=(0,l.sO)({params:{collectionSlug:r},enabled:r&&!a});return a?(0,i.jsx)(L.V,{...e}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.HJ,{title:"".concat(null!==(n=null==o?void 0:o.name)&&void 0!==n?n:null==o?void 0:o.slug," - Collections"),description:null==o?void 0:o.description,imageUrl:(null==o?void 0:o.bannerImageUrl)||(null==o?void 0:o.logoImageUrl)}),(0,i.jsx)(C,{collection:o,...c})]})};T.hideFooter=!0;var y=!0,E=T},19693:function(e,n,r){"use strict";var i=r(52322),s=r(71095),l=r(20430),t=r(40991);let a=e=>{let{bannerImageUrl:n,logoImageUrl:r,name:a,bgProps:o,logoContainerProps:c,logoWrapperProps:d}=e,{ref:x,url:m}=(0,l.Z)(n);return(0,i.jsx)(s.xuv,{ref:x,bgPosition:"center",bgSize:"cover",bgRepeat:"no-repeat",minH:m?{base:"120px",md:96}:{base:"120px",md:56},maxH:m?96:"120px",mb:{base:"2rem",md:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/4.5rem"},...m&&{backgroundImage:"url(".concat(m,")")}||{bgGradient:"linear-gradient(90deg, rgba(255, 113, 170, 0.1) -69.36%, rgba(255, 25, 141, 0.1) 5.27%, rgba(149, 67, 255, 0.1) 79.9%, rgba(47, 81, 172, 0.1) 163%, rgba(22, 36, 83, 0.1) 256.29%)"},...o,children:(0,i.jsx)(s.xuv,{w:"full",minH:m?{base:"120px",md:96}:{base:"120px",md:56},maxW:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/container.2xl",position:"relative",m:"0 auto",...c,children:(0,i.jsx)(s.oM5,{w:{base:20,md:40},ratio:1,position:"absolute",bottom:{base:-16,md:-12},left:"2",borderColor:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/neutral.50",borderRadius:"3xl",borderWidth:".5rem",bgColor:"background.secondary",boxSizing:"content-box",overflow:"hidden",_dark:{borderColor:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/darkTheme.900"},...d,children:(0,i.jsx)(t.qE,{src:r,name:a,borderRadius:"none",size:"xl"})})})})};n.Z=a},63474:function(e,n,r){"use strict";r.d(n,{l:function(){return d},V:function(){return m}});var i=r(52322),s=r(71095),l=r(16298),t=r(39097),a=r.n(t),o=r(27742);let c=()=>{let{t:e}=(0,l.YB)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.HJ,{title:"404 - Error"}),(0,i.jsxs)(s.kCb,{w:"full",direction:"column",align:"center",justify:"center",minH:"60vh",children:[(0,i.jsx)(s.X6q,{as:"h1",children:"404"}),(0,i.jsxs)(s.X6q,{as:"h3",mb:"8",children:[e("LT0281","The page is lost.")," \uD83E\uDD28"]}),(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)(s.zxk,{children:e("LT0368","Navigate back home")})})]})]})};var d=c;let x=e=>{let{errorMessage:n}=e,{t:r}=(0,l.YB)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.HJ,{title:"500 - Error"}),(0,i.jsx)(s.kCb,{w:"full",direction:"column",align:"center",justify:"center",minH:"60vh",children:(0,i.jsxs)(s.gCW,{spacing:"4",children:[(0,i.jsx)(s.X6q,{as:"h1",children:"500"}),(0,i.jsxs)(s.X6q,{as:"h3",children:[r("LT0278","A server error occured.")," \uD83E\uDD28"]}),n&&(0,i.jsx)(s.EKh,{maxW:"https://lootex.io/_next/static/chunks/pages/collections/%5Bslug%5D/container.lg",children:n}),(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)(s.zxk,{children:r("LT0368","Navigate back home")})})]})})]})};var m=x}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=46397)}),_N_E=e.O()}]);