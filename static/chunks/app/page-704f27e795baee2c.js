(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1183:function(e,t,s){Promise.resolve().then(s.bind(s,7003))},7003:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return P}});var r=s(7437),a=s(2265),i=s(9653),n=s(2874),l=s(8819),c=s(8478),o=s(7283),d=s(407),x=s(7100),u=s(5293),m=s(7712),f=s(1994),h=s(3335);function b(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,h.m6)((0,f.W)(t))}let p=(0,m.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground  hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),y=a.forwardRef((e,t)=>{let{className:s,variant:a,size:i,asChild:n=!1,...l}=e,c=n?u.g7:"button";return(0,r.jsx)(c,{className:b(p({variant:a,size:i,className:s})),ref:t,...l})});y.displayName="Button";let g=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:b("rounded-lg border bg-card text-card-foreground shadow-sm",s),...a})});g.displayName="Card";let j=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:b("flex flex-col space-y-1.5 p-6",s),...a})});j.displayName="CardHeader";let v=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("h3",{ref:t,className:b("text-2xl font-semibold leading-none tracking-tight",s),...a})});v.displayName="CardTitle";let N=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("p",{ref:t,className:b("text-sm text-muted-foreground",s),...a})});N.displayName="CardDescription";let k=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:b("p-6 pt-0",s),...a})});k.displayName="CardContent";let w=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:b("flex items-center p-6 pt-0",s),...a})});function C(){let e=(0,a.useRef)(null);return(0,c.F)((t,s)=>{e.current&&(e.current.rotation.x+=.2*s,e.current.rotation.y+=.2*s,e.current.scale.setScalar(1+.1*Math.sin(t.clock.elapsedTime)))}),(0,r.jsxs)("mesh",{ref:e,children:[(0,r.jsx)("sphereGeometry",{args:[1,64,64]}),(0,r.jsx)("meshStandardMaterial",{color:"#ff69b4",wireframe:!0})]})}function E(e){let{children:t}=e,s=(0,i._)(),[c,o]=(0,l.YD)({threshold:.1});return(0,a.useEffect)(()=>{o&&s.start("visible")},[s,o]),(0,r.jsx)(n.E.div,{ref:c,animate:s,initial:"hidden",transition:{duration:.7,ease:"easeInOut"},variants:{visible:{opacity:1,y:0,scale:1},hidden:{opacity:0,y:50,scale:.95}},children:t})}function P(){let[e,t]=(0,a.useState)("monthly"),[s,i]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{let e=setTimeout(()=>i(!1),2e3);return()=>clearTimeout(e)},[]),s)?(0,r.jsxs)("div",{className:"flex items-center justify-center min-h-screen bg-[#0b0b0b] text-[#eaeaea]",children:[(0,r.jsx)("div",{className:"loader",children:"Loading..."})," "]}):(0,r.jsxs)("div",{className:"min-h-screen bg-[#0b0b0b] text-[#eaeaea]",children:[(0,r.jsxs)("section",{className:"relative h-screen flex items-center justify-center overflow-hidden",children:[(0,r.jsx)("div",{className:"absolute inset-0 z-0",children:(0,r.jsxs)(o.Xz,{children:[(0,r.jsx)("ambientLight",{intensity:.6}),(0,r.jsx)("pointLight",{position:[10,10,10],intensity:1.5}),(0,r.jsx)(C,{})]})}),(0,r.jsxs)("div",{className:"z-10 text-center",children:[(0,r.jsx)(n.E.h1,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.7},className:"text-7xl font-extrabold mb-4 tracking-tight text-[#ff69b4]",children:"welcome to nexus"}),(0,r.jsx)(n.E.p,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},className:"text-2xl mb-8 text-[#d0d0d0]",children:"the best roblox executor out there."}),(0,r.jsx)(n.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.7,delay:.5},children:(0,r.jsxs)(y,{size:"lg",className:"bg-[#ff69b4] text-black transition-all hover:scale-110",children:["download",(0,r.jsx)(d.Z,{className:"ml-2 h-4 w-4"})]})})]})]}),(0,r.jsx)("section",{className:"py-24 bg-[#151515]",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsx)(E,{children:(0,r.jsx)("h2",{className:"text-4xl font-bold text-center mb-12 text-[#ff69b4]",children:"features"})}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[{title:"auto inject",description:"automatically inject into roblox, with no clicks of a button."},{title:"unc",description:"70 - 80% unc, that percentage of unc is considered good."},{title:"undetected",description:"this executor will be the most undetected executor"},{title:"custom api",description:"using a custom api (celery api) for the injection."}].map((e,t)=>(0,r.jsx)(E,{children:(0,r.jsxs)(g,{className:"bg-[#212121] border-none shadow-xl hover:shadow-2xl hover:bg-[#56012c] transition-all",children:[(0,r.jsx)(j,{children:(0,r.jsx)(v,{className:"text-2xl text-[#ff69b4]",children:e.title})}),(0,r.jsx)(k,{children:(0,r.jsx)("p",{children:e.description})})]})},t))})]})}),(0,r.jsx)("section",{className:"py-24 bg-[#0b0b0b]",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)(E,{children:[(0,r.jsx)("h2",{className:"text-4xl font-bold text-center mb-12 text-[#ff69b4]",children:"pricing"}),(0,r.jsxs)("div",{className:"flex justify-center mb-8",children:[(0,r.jsx)(y,{variant:"monthly"===e?"default":"outline",onClick:()=>t("monthly"),className:"mr-2 bg-[#ff69b4] hover:scale-105 transition-all",children:"Monthly"}),(0,r.jsx)(y,{variant:"yearly"===e?"default":"outline",onClick:()=>t("yearly"),className:"bg-[#ff69b4] hover:scale-105 transition-all",children:"Yearly"})]})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[{name:"free",monthlyPrice:0,yearlyPrice:0,features:["comes with auto inject","delayed updates","100x max scripts stored"]},{name:"premium",monthlyPrice:10,yearlyPrice:30,features:["up to date updates","sneak peaks of ui","max scripts stored","customizable","dedicated key system"]},{name:"Enterprise",monthlyPrice:30,yearlyPrice:50,features:["sneak peaks of ui, backend, updates","unlimited all","dedicated key system","24/7 support"]}].map((t,s)=>(0,r.jsx)(E,{children:(0,r.jsxs)(g,{className:"bg-[#212121] border-none shadow-xl hover:shadow-2xl transition-all hover:bg-[#56012c]",children:[(0,r.jsxs)(j,{children:[(0,r.jsx)(v,{className:"text-3xl text-[#ff69b4]",children:t.name}),(0,r.jsx)(N,{className:"text-lg text-[#d0d0d0]",children:"monthly"===e?"$".concat(t.monthlyPrice,"/mo"):"$".concat(t.yearlyPrice,"/yr")})]}),(0,r.jsx)(k,{children:(0,r.jsx)("ul",{className:"list-disc list-inside",children:t.features.map((e,t)=>(0,r.jsxs)("li",{className:"text-[#d0d0d0]",children:[(0,r.jsx)(x.Z,{className:"inline-block mr-2 text-[#ff69b4]"}),e]},t))})}),(0,r.jsx)(w,{children:(0,r.jsx)(y,{className:"bg-[#ff69b4] text-black transition-all hover:scale-110",children:"Choose Plan"})})]})},s))})]})}),(0,r.jsx)("footer",{className:"py-12 bg-[#0b0b0b]",children:(0,r.jsx)("div",{className:"container mx-auto text-center",children:(0,r.jsx)("p",{className:"text-[#d0d0d0]",children:"\xa9 2024 Nexus. All rights reserved."})})})]})}w.displayName="CardFooter"}},function(e){e.O(0,[689,120,971,117,744],function(){return e(e.s=1183)}),_N_E=e.O()}]);