import{Q as g,R as w,V as y,W as N,X as l,Y as R,r as c,o as i,c as B,Z as a,_ as v,a as o,$ as I,a0 as n,a1 as j,a2 as A,a3 as _}from"./vendor.b6e1679d.js";import{_ as E}from"./index.23333042.js";g("data-v-225edd77");const L={class:"h-screen"},S=_("\u9996\u9875"),T=_("\u5C0F\u6E38\u620F"),U=_("\u5783\u573E\u767E\u79D1"),Q=_("\u4E2A\u4EBA\u4E2D\u5FC3");w();const W={setup(X){const d=y(),u=N();let p=l(d.meta.title),e=l(d.path),m=l(d.meta.index==1),f=l("van-slide-right");const b=()=>{u.push(e.value)};R((t,s)=>{p.value=t.meta.title,e.value=t.path,m.value=t.meta.index===1}),u.beforeEach((t,s)=>{f.value=t.meta.index<s.meta.index?"van-slide-right":"van-silde-left"});const k=()=>{u.back()};return(t,s)=>{const h=c("van-nav-bar"),C=c("router-view"),r=c("van-tabbar-item"),V=c("van-tabbar");return i(),B("div",L,[a(m)?(i(),v(h,{key:0,title:a(p),fixed:!0,placeholder:!0},null,8,["title"])):(i(),v(h,{key:1,title:a(p),"left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:k,fixed:!0,placeholder:!0},null,8,["title"])),o(I,{name:a(f)},{default:n(()=>[o(C,{class:"warp"})]),_:1},8,["name"]),a(m)?(i(),v(V,{key:2,modelValue:a(e),"onUpdate:modelValue":s[0]||(s[0]=x=>j(e)?e.value=x:e=x),onChange:b,placeholder:!0},{default:n(()=>[o(r,{name:"/",icon:"home-o"},{default:n(()=>[S]),_:1}),o(r,{name:"/gameIndex",icon:"apps-o"},{default:n(()=>[T]),_:1}),o(r,{name:"/wiki",icon:"cart-o"},{default:n(()=>[U]),_:1}),o(r,{name:"/mine",icon:"user-circle-o"},{default:n(()=>[Q]),_:1})]),_:1},8,["modelValue"])):A("",!0)])}}};var q=E(W,[["__scopeId","data-v-225edd77"]]);export{q as default};
//# sourceMappingURL=cartApp.20b14217.js.map
