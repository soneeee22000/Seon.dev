import { useState, useEffect, useRef } from "react";

/* ─── GLOBAL STYLES ─────────────────────────────────────────────────── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#06080D;--bg2:#0B0F16;--surface:#101620;--border:#1C2535;
  --text:#E6ECF5;--muted:#4E5E72;--accent:#C9A96E;
  --blue:#7B9CCC;--purple:#9C7BCC;--green:#7BCC9C;--warm:#CCB87B;
}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);overflow-x:hidden;}
::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--accent);border-radius:2px;}
a{color:inherit;text-decoration:none;}

@keyframes fadeUp{from{opacity:0;transform:translateY(70px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes g1{0%,93%,100%{clip-path:inset(0 0 100% 0);transform:translate(0);}94%{clip-path:inset(22% 0 58% 0);transform:translate(-5px,2px);}96%{clip-path:inset(57% 0 28% 0);transform:translate(5px,-2px);}98%{clip-path:inset(12% 0 82% 0);transform:translate(-3px,3px);}}
@keyframes g2{0%,93%,100%{clip-path:inset(0 0 100% 0);transform:translate(0);}94%{clip-path:inset(62% 0 22% 0);transform:translate(5px,-2px);}96%{clip-path:inset(28% 0 55% 0);transform:translate(-5px,2px);}98%{clip-path:inset(75% 0 8% 0);transform:translate(3px,-3px);}}
@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@keyframes pulse{0%,100%{opacity:.9;}50%{opacity:.25;}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
@keyframes shimmer{0%{background-position:-200% 0;}100%{background-position:200% 0;}}
@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes cspin{from{transform:rotate(0deg);}to{transform:rotate(-360deg);}}
@keyframes borderPulse{0%,100%{border-color:rgba(201,169,110,.2);}50%{border-color:rgba(201,169,110,.6);}}
@keyframes scanline{0%{top:-30%;}100%{top:110%;}}
@keyframes dotBlink{0%,100%{background:var(--accent);}50%{background:transparent;}}
@keyframes scrollDot{0%{transform:translateY(-4px);opacity:0;}50%{opacity:1;}100%{transform:translateY(4px);opacity:0;}}
@keyframes glow{0%,100%{box-shadow:0 0 15px rgba(201,169,110,.2);}50%{box-shadow:0 0 35px rgba(201,169,110,.7),0 0 60px rgba(201,169,110,.3);}}
@keyframes lineGrow{from{transform:scaleY(0);transform-origin:top;}to{transform:scaleY(1);transform-origin:top;}}

.reveal{opacity:0;transform:translateY(55px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
.reveal.in{opacity:1;transform:translateY(0);}
.rl{opacity:0;transform:translateX(-55px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
.rl.in{opacity:1;transform:translateX(0);}
.rr{opacity:0;transform:translateX(55px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
.rr.in{opacity:1;transform:translateX(0);}

.nav-link{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.18em;color:#4E5E72;cursor:pointer;transition:color .3s;user-select:none;}
.nav-link:hover{color:var(--accent);}

.cert-shimmer{position:relative;overflow:hidden;}
.cert-shimmer::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,transparent 25%,rgba(255,255,255,.08) 50%,transparent 75%);background-size:200% 100%;opacity:0;transition:opacity .3s;}
.cert-shimmer:hover::after{opacity:1;animation:shimmer 1.6s infinite;}

.proj3d{transform-style:preserve-3d;transition:transform .06s ease,box-shadow .4s ease;}
`;

/* ─── DATA ──────────────────────────────────────────────────────────── */
const GREETINGS = ["မင်္ဂလာပါ", "Bonjour", "สวัสดี", "Hello", "Hej"];

const EXP = [
  {
    job:"Founding AI Engineer", company:"Siloett.AI", badge:"Station F · Paris",
    url:"https://siloett.ai/lander", date:"Dec 2025 — Present", color:"#C9A96E",
    pts:[
      "Architecting AI-powered CreativeAI solutions for Narrative OS — RAG pipelines, agentic systems, and LLM orchestration",
      "Building production-grade end-to-end AI systems from research to deployment in fast-paced startup environment",
      "Operating at Station F, the world's largest startup campus — collaborating directly with the founder"
    ]
  },
  {
    job:"Data Scientist / Cloud Engineer", company:"Floware SAS", badge:"École Polytechnique Incubator",
    url:"https://floware.fr", date:"Jul 2024 — Jun 2025", color:"#7B9CCC",
    pts:[
      "Designed a cloud-based batch data processing pipeline using Microsoft Azure Batch and Docker for urban mobility analytics",
      "Automated Computer Vision and Bluetooth sensor workflows enabling scalable, real-time smart city insights",
      "Delivered production analytics dashboards adopted by city government and transport stakeholders"
    ]
  }
];

const PROJECTS = [
  { id:1, featured:true, emoji:"💉", title:"VaxEvidence",
    desc:"Real-World Evidence platform for vaccine research. Full-stack application for ingesting, analyzing, and visualizing vaccine safety and efficacy data from real-world sources at scale.",
    tags:["Next.js","React","TypeScript","Supabase"], color:"#C9A96E",
    demo:"https://vaxevidence-dev.vercel.app/", gh:"https://github.com/soneeee22000/VaxEvidence-Dev" },
  { id:2, featured:false, emoji:"🧠", title:"PsychHealth AI",
    desc:"Mental health NLP app using Retrieval-Augmented Generation — combining pre-trained LLMs with external knowledge for contextual, personalized support.",
    tags:["NLP","PyTorch","HuggingFace"], color:"#9C7BCC",
    demo:"https://psych-ai-rag-mvp.streamlit.app/", gh:"https://github.com/soneeee22000/Psych_ai_with_RAG" },
  { id:3, featured:false, emoji:"⚡", title:"Ecoforecaster",
    desc:"Interactive energy consumption dashboard for France with AI-powered recommendations to reduce household energy costs and build a sustainable smart home.",
    tags:["Next.js","Python","JavaScript"], color:"#7BCC9C",
    demo:"https://ai-energy-theta.vercel.app/", gh:"https://github.com/soneeee22000/AI_Energy_Main_App" },
  { id:4, featured:false, emoji:"🔬", title:"Diabetes Detection",
    desc:"ML classification of diabetic patients from Raman spectroscopy signal data using ensemble scikit-learn methods. AIT collaborative research.",
    tags:["Python","scikit-learn","ML"], color:"#CC7B7B",
    demo:"#", gh:"https://github.com/AtiChetsurakul/DataScienceAndMLProjects" },
  { id:5, featured:false, emoji:"🐍", title:"Snake ID Myanmar",
    desc:"Venomous snake identification app for Myanmar using CNN image classification, helping rural communities identify dangerous species quickly.",
    tags:["Python","Streamlit","CNN"], color:"#CCB87B",
    demo:"https://mysnakensafety.streamlit.app/", gh:"https://github.com/soneeee22000/my_snake_id" },
  { id:6, featured:false, emoji:"📋", title:"ZenHub PM System",
    desc:"Agile project management system integrating GitHub and ZenHub for streamlined team workflow, sprint planning, and developer collaboration.",
    tags:["GitHub","Scrum","Agile"], color:"#7B9CCC",
    demo:"#", gh:"https://github.com/users/soneeee22000/projects/1" }
];

const SKILLS = [
  { name:"PyTorch", cat:"AI / ML", logo:"https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
  { name:"Python", cat:"Language", logo:"https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name:"React", cat:"Frontend", logo:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { name:"Azure", cat:"Cloud", logo:"https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { name:"Docker", cat:"DevOps", logo:"https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name:"PostgreSQL", cat:"Database", logo:"https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name:"Neo4j", cat:"Database", logo:"https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg" },
  { name:"GitLab", cat:"DevOps", logo:"https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
  { name:"Node.js", cat:"Backend", logo:"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { name:"GitHub", cat:"DevOps", logo:"https://www.vectorlogo.zone/logos/github/github-icon.svg" },
];

const CAT_COLORS = { "AI / ML":"#C9A96E","Language":"#7B9CCC","Frontend":"#9C7BCC","Cloud":"#7BCC9C","DevOps":"#CCB87B","Database":"#CC7B7B","Backend":"#7BAACC" };

const EDUCATION = [
  { degree:"MSc Data Science & Network Intelligence", school:"Telecom SudParis", loc:"Paris, France",
    date:"2023 — 2024", gpa:"15.15/20", note:"QS Rank #46 Worldwide", color:"#C9A96E", flag:"🇫🇷" },
  { degree:"MSc Data Science & Artificial Intelligence", school:"Asian Institute of Technology", loc:"Bangkok, Thailand",
    date:"2022 — 2024", gpa:"3.17/4.0", note:"Dual Degree Program", color:"#7B9CCC", flag:"🇹🇭" },
  { degree:"BA Social Science Studies", school:"Myanmar Institute of Theology", loc:"Yangon, Myanmar",
    date:"2016 — 2020", gpa:"3.67/4.0", note:"Graduated Top of Class", color:"#7BCC9C", flag:"🇲🇲" },
  { degree:"BA English Literature & Linguistics", school:"University of Yangon", loc:"Yangon, Myanmar",
    date:"2016 — 2020*", gpa:"4.09/5.0", note:"Myanmar's Oldest University", color:"#9C7BCC", flag:"🇲🇲",
    asterisk:"*Interrupted due to COVID-19 & Military Coup" }
];

const CERTS = [
  { title:"Machine Learning Specialization", issuer:"Stanford / DeepLearning.AI", by:"Andrew Ng · Coursera",
    color:"#C9A96E", emoji:"🤖", url:"https://coursera.org/share/946625f9bdea354d2f8da22c15c66ee4" },
  { title:"Python for Everybody Specialization", issuer:"University of Michigan", by:"Dr. Charles Severance",
    color:"#7B9CCC", emoji:"🐍", url:"https://www.coursera.org/account/accomplishments/specialization/5UN5XA31T3XY" },
  { title:"Agile Development & Scrum", issuer:"IBM", by:"DevOps Specialization · Coursera",
    color:"#9C7BCC", emoji:"⚡", url:"https://coursera.org/share/8358fd39d8b8896c54f93d33f5372843" },
  { title:"Meta Full Stack Developer", issuer:"Meta", by:"React · Django · API Design",
    color:"#7BCC9C", emoji:"💻", url:"https://coursera.org/share/8358fd39d8b8896c54f93d33f5372843" }
];

/* ─── NAVBAR ─────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  const links = [["ABOUT","about"],["EXPERIENCE","experience"],["PROJECTS","projects"],["SKILLS","skills"],["EDUCATION","education"],["CONTACT","contact"]];
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:200,
      padding:"18px 40px", display:"flex", justifyContent:"space-between", alignItems:"center",
      background: scrolled ? "rgba(6,8,13,.94)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(28,37,53,.7)" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      transition:"all .5s ease",
    }}>
      <div onClick={() => go("hero")} style={{ fontFamily:"'Playfair Display',serif", fontSize:"20px", color:"var(--accent)", letterSpacing:".06em", cursor:"pointer", fontWeight:"700" }}>
        PSK
      </div>
      <div style={{ display:"flex", gap:"28px", flexWrap:"wrap" }}>
        {links.map(([label, id]) => (
          <span key={id} className="nav-link" onClick={() => go(id)}>{label}</span>
        ))}
      </div>
      <a href="/files/resume.pdf" style={{
        fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".2em",
        color:"var(--accent)", border:"1px solid rgba(201,169,110,.5)", padding:"8px 16px",
        transition:"all .3s",
      }}
        onMouseEnter={e => { e.currentTarget.style.background="var(--accent)"; e.currentTarget.style.color="var(--bg)"; }}
        onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--accent)"; }}>
        RÉSUMÉ ↗
      </a>
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────── */
function Hero() {
  const canvasRef = useRef(null);
  const [greetIdx, setGreetIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setGreetIdx(i => (i + 1) % GREETINGS.length); setVisible(true); }, 350);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, mx = 0, my = 0;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 75 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.4 + .4, op: Math.random() * .45 + .08,
    }));

    const onMove = e => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left; my = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        const dx = mx - p.x, dy = my - p.y, d = Math.sqrt(dx*dx + dy*dy);
        if (d < 130) { p.vx -= (dx/d) * .07; p.vy -= (dy/d) * .07; }
        p.vx *= .985; p.vy *= .985;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; } if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; } if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(201,169,110,${p.op})`; ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i+1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx + dy*dy);
        if (d < 105) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(201,169,110,${(1-d/105)*.11})`; ctx.lineWidth=.5; ctx.stroke();
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", resize); };
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <section id="hero" style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
      <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,169,110,.04) 0%, transparent 65%)" }} />
      {/* Scan line effect */}
      <div style={{ position:"absolute", left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent, rgba(201,169,110,.18), transparent)", animation:"scanline 7s linear infinite", pointerEvents:"none" }} />

      <div style={{ position:"relative", zIndex:2, textAlign:"center", padding:"0 24px", maxWidth:"1000px" }}>
        {/* Greeting */}
        <div style={{
          fontFamily:"'DM Mono',monospace", fontSize:"13px", letterSpacing:".35em",
          color:"var(--accent)", marginBottom:"28px", height:"22px",
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-8px)",
          transition:"all .35s ease",
        }}>
          {GREETINGS[greetIdx]}
        </div>

        {/* Name with glitch */}
        <div style={{ position:"relative", marginBottom:"20px" }}>
          <h1 style={{
            fontFamily:"'Playfair Display',serif", fontWeight:"900", lineHeight:"1.0",
            fontSize:"clamp(44px,9vw,96px)", color:"#E6ECF5", letterSpacing:"-.02em",
            animation:"fadeUp 1s ease .2s both",
          }}>Pyae Sone Kyaw</h1>
          <h1 aria-hidden style={{
            position:"absolute", inset:0,
            fontFamily:"'Playfair Display',serif", fontWeight:"900", lineHeight:"1.0",
            fontSize:"clamp(44px,9vw,96px)", color:"var(--accent)", letterSpacing:"-.02em",
            animation:"g1 6s ease-in-out 2s infinite", mixBlendMode:"screen", pointerEvents:"none",
          }}>Pyae Sone Kyaw</h1>
          <h1 aria-hidden style={{
            position:"absolute", inset:0,
            fontFamily:"'Playfair Display',serif", fontWeight:"900", lineHeight:"1.0",
            fontSize:"clamp(44px,9vw,96px)", color:"var(--blue)", letterSpacing:"-.02em",
            animation:"g2 6s ease-in-out 2s infinite", mixBlendMode:"screen", pointerEvents:"none",
          }}>Pyae Sone Kyaw</h1>
        </div>

        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(10px,1.6vw,14px)", letterSpacing:".22em", color:"var(--muted)", marginBottom:"8px", animation:"fadeUp 1s ease .45s both" }}>
          FOUNDING AI ENGINEER · STATION F · PARIS
        </div>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(10px,1.4vw,12px)", letterSpacing:".18em", color:"var(--accent)", marginBottom:"52px", animation:"fadeUp 1s ease .6s both" }}>
          CreativeAI &nbsp;·&nbsp; NLP &nbsp;·&nbsp; Full-Stack AI Systems
        </div>

        <div style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap", animation:"fadeUp 1s ease .8s both" }}>
          {[
            { label:"VIEW WORK ↓", primary:true, fn:() => go("projects") },
            { label:"GET IN TOUCH →", primary:false, fn:() => go("contact") },
          ].map(btn => (
            <button key={btn.label} onClick={btn.fn} style={{
              fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:".2em",
              background: btn.primary ? "var(--accent)" : "transparent",
              color: btn.primary ? "#06080D" : "#E6ECF5",
              border: btn.primary ? "1px solid var(--accent)" : "1px solid rgba(230,236,245,.22)",
              padding:"13px 30px", cursor:"pointer", transition:"all .3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = btn.primary ? "#E8C88A" : "rgba(201,169,110,.08)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = btn.primary ? "#06080D" : "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = btn.primary ? "var(--accent)" : "transparent"; e.currentTarget.style.borderColor = btn.primary ? "var(--accent)" : "rgba(230,236,245,.22)"; e.currentTarget.style.color = btn.primary ? "#06080D" : "#E6ECF5"; }}>
              {btn.label}
            </button>
          ))}
        </div>

        <div style={{ display:"flex", gap:"28px", justifyContent:"center", marginTop:"44px", animation:"fadeIn 1s ease 1.2s both" }}>
          {[["GITHUB","https://github.com/soneeee22000"],["LINKEDIN","https://www.linkedin.com/in/pyae-sone-kyaw-80386721b/"]].map(([lbl,url]) => (
            <a key={lbl} href={url} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:".15em", color:"var(--muted)", transition:"color .3s" }}
              onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--muted)"}>
              {lbl} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:"absolute", bottom:"32px", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"10px", animation:"fadeIn 1.5s ease 1.5s both" }}>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"8px", letterSpacing:".3em", color:"var(--muted)" }}>SCROLL</span>
        <div style={{ width:"20px", height:"34px", border:"1px solid rgba(201,169,110,.3)", borderRadius:"10px", display:"flex", alignItems:"flex-start", justifyContent:"center", padding:"5px 0" }}>
          <div style={{ width:"4px", height:"4px", borderRadius:"50%", background:"var(--accent)", animation:"scrollDot 1.8s ease infinite" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ padding:"120px 40px", maxWidth:"1200px", margin:"0 auto" }}>
      <div className="reveal" style={{ marginBottom:"64px" }}>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>01 — ABOUT</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,6vw,62px)", fontWeight:"700", lineHeight:"1.1" }}>
          Building at the intersection of<br/>
          <em style={{ color:"var(--accent)" }}>AI and Human Experience</em>
        </h2>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"64px", alignItems:"start" }}>
        {/* Left */}
        <div className="rl">
          <div style={{ position:"relative", maxWidth:"360px", aspectRatio:"3/4", background:"var(--surface)", border:"1px solid var(--border)", overflow:"hidden", animation:"borderPulse 4s ease infinite" }}>
            <img src="/images/seon.jpg" alt="Pyae Sone Kyaw"
              onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            <div style={{ display:"none", width:"100%", height:"100%", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg,#111820,#1a2535)" }}>
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"96px", color:"rgba(201,169,110,.2)", fontWeight:"900" }}>PSK</span>
            </div>
            {/* Corner marks */}
            {[["top:12px;left:12px","top","left"],["bottom:12px;right:12px","bottom","right"]].map(([pos, v, h]) => (
              <div key={pos} style={{
                position:"absolute", [v]:"12px", [h]:"12px",
                width:"20px", height:"20px",
                borderTop: v === "top" ? "2px solid var(--accent)" : "none",
                borderLeft: h === "left" ? "2px solid var(--accent)" : "none",
                borderBottom: v === "bottom" ? "2px solid var(--accent)" : "none",
                borderRight: h === "right" ? "2px solid var(--accent)" : "none",
              }} />
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"20px", maxWidth:"360px" }}>
            {[["2+","Yrs in AI / ML"],["6+","Projects Shipped"],["2","Master's Degrees"],["3","Countries Lived"]].map(([n,l]) => (
              <div key={l} style={{ padding:"16px", background:"var(--surface)", border:"1px solid var(--border)", transition:"border-color .3s" }}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(201,169,110,.4)"} onMouseLeave={e=>e.currentTarget.style.borderColor="var(--border)"}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"30px", color:"var(--accent)", fontWeight:"700" }}>{n}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".1em", color:"var(--muted)", marginTop:"4px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rr" style={{ paddingTop:"8px" }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"20px", lineHeight:"1.65", color:"#A8B8CC", fontStyle:"italic", marginBottom:"32px", borderLeft:"2px solid var(--accent)", paddingLeft:"20px" }}>
            "A Data Scientist and AI Researcher with dual Master's degrees spanning Asia and Europe — building impactful tools at the frontier of CreativeAI."
          </p>
          {[
            "Currently a Founding AI Engineer at Siloett.AI (Station F, Paris), where I architect AI-powered solutions for Narrative OS — the creative industry's intelligence layer.",
            "My expertise spans deep learning, NLP, computer vision, and agentic AI systems, with a strong focus on CreativeAI and AI for Social Good domains.",
            "I bring an unusual combination: technical depth in Python (PyTorch, FastAPI) + cloud infrastructure (Azure, Docker) + multilingual communication skills across Burmese, English, French, and Thai.",
            "This multicultural background uniquely positions me to build AI systems that work across diverse human contexts and communities.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize:"14.5px", lineHeight:"1.85", color:"#7A8FA8", marginBottom:"18px" }}>{p}</p>
          ))}

          <div style={{ marginTop:"36px" }}>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".28em", color:"var(--muted)", marginBottom:"14px" }}>TECH STACK</div>
            <div style={{ overflow:"hidden", maskImage:"linear-gradient(to right,transparent,black 8%,black 92%,transparent)" }}>
              <div style={{ display:"flex", gap:"16px", animation:"marquee 22s linear infinite", width:"max-content" }}>
                {[...SKILLS,...SKILLS].map((s, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"8px", padding:"7px 14px", background:"var(--surface)", border:"1px solid var(--border)", whiteSpace:"nowrap", flexShrink:0 }}>
                    <img src={s.logo} alt={s.name} width={16} height={16} style={{ objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", color:"#7A8FA8", letterSpacing:".08em" }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─────────────────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" style={{ padding:"120px 40px", background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <div className="reveal" style={{ marginBottom:"64px" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>02 — EXPERIENCE</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,6vw,62px)", fontWeight:"700", lineHeight:"1.1" }}>
            Where I've <em style={{ color:"var(--accent)" }}>Built & Learned</em>
          </h2>
        </div>

        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:"0", top:"24px", width:"1px", bottom:"24px", background:"linear-gradient(to bottom, var(--accent), rgba(201,169,110,.08))", animation:"lineGrow 1.5s ease .3s both" }} />
          <div style={{ display:"flex", flexDirection:"column", gap:"48px", paddingLeft:"44px" }}>
            {EXP.map((ex, i) => (
              <div key={i} className="reveal" style={{ transitionDelay:`${i*.18}s`, position:"relative" }}>
                <div style={{
                  position:"absolute", left:"-52px", top:"22px",
                  width:"14px", height:"14px", borderRadius:"50%",
                  border:`2px solid ${ex.color}`, background:"var(--bg2)",
                  animation:"glow 3s ease-in-out infinite",
                }} />
                <div style={{
                  padding:"32px 36px", background:"var(--surface)", border:"1px solid var(--border)",
                  transition:"border-color .35s, box-shadow .35s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=`${ex.color}50`; e.currentTarget.style.boxShadow=`0 12px 48px ${ex.color}12`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="none"; }}>

                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"16px", flexWrap:"wrap", marginBottom:"6px" }}>
                    <div>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"22px", fontWeight:"700", color:"#E6ECF5", marginBottom:"6px" }}>{ex.job}</h3>
                      <div style={{ display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap" }}>
                        <a href={ex.url} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:ex.color, letterSpacing:".04em", transition:"opacity .2s" }}
                          onMouseEnter={e=>e.currentTarget.style.opacity=".7"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                          {ex.company} ↗
                        </a>
                        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", padding:"3px 10px", border:`1px solid ${ex.color}40`, color:ex.color, letterSpacing:".12em" }}>{ex.badge}</span>
                      </div>
                    </div>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", color:"var(--muted)", letterSpacing:".12em", whiteSpace:"nowrap", paddingTop:"4px" }}>{ex.date}</span>
                  </div>

                  <div style={{ marginTop:"20px", display:"flex", flexDirection:"column", gap:"10px" }}>
                    {ex.pts.map((pt, j) => (
                      <div key={j} style={{ display:"flex", gap:"12px", alignItems:"flex-start" }}>
                        <span style={{ color:ex.color, fontSize:"10px", marginTop:"5px", flexShrink:0 }}>◆</span>
                        <p style={{ fontSize:"14px", lineHeight:"1.75", color:"#7A8FA8" }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────────────────────── */
function Projects() {
  const handleMove = e => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateZ(8px)`;
    c.style.boxShadow = `${-x*18}px ${-y*18}px 40px rgba(0,0,0,.45)`;
  };
  const handleLeave = e => {
    e.currentTarget.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  const featured = PROJECTS.find(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding:"120px 40px", maxWidth:"1200px", margin:"0 auto" }}>
      <div className="reveal" style={{ marginBottom:"64px" }}>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>03 — PROJECTS</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,6vw,62px)", fontWeight:"700", lineHeight:"1.1" }}>
          Things I've <em style={{ color:"var(--accent)" }}>Built</em>
        </h2>
      </div>

      {/* Featured */}
      <div className="reveal proj3d" style={{ marginBottom:"20px" }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <div style={{
          background:"var(--surface)", border:`1px solid ${featured.color}35`,
          position:"relative", overflow:"hidden", padding:"44px 40px",
          boxShadow:`inset 0 0 80px ${featured.color}06`,
        }}>
          <div style={{ position:"absolute", top:0, right:0, background:"var(--accent)", color:"#06080D", fontFamily:"'DM Mono',monospace", fontSize:"8px", letterSpacing:".25em", padding:"6px 14px" }}>FEATURED</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"44px", alignItems:"center" }}>
            <div>
              <div style={{ fontSize:"44px", marginBottom:"16px" }}>{featured.emoji}</div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"34px", fontWeight:"700", color:"#E6ECF5", marginBottom:"14px" }}>{featured.title}</h3>
              <p style={{ fontSize:"14px", lineHeight:"1.8", color:"#7A8FA8", marginBottom:"24px" }}>{featured.desc}</p>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", marginBottom:"28px" }}>
                {featured.tags.map(t => (
                  <span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", padding:"4px 11px", background:`${featured.color}12`, border:`1px solid ${featured.color}35`, color:featured.color, letterSpacing:".1em" }}>{t}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:"14px", flexWrap:"wrap" }}>
                <a href={featured.demo} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".18em", background:"var(--accent)", color:"#06080D", padding:"10px 22px", transition:"background .3s" }}
                  onMouseEnter={e=>e.currentTarget.style.background="#E8C88A"} onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>LIVE DEMO ↗</a>
                <a href={featured.gh} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".18em", border:`1px solid ${featured.color}50`, color:featured.color, padding:"10px 22px", transition:"all .3s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background=`${featured.color}12`;}} onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}>GITHUB ↗</a>
              </div>
            </div>
            <div style={{ aspectRatio:"16/9", background:`${featured.color}08`, border:`1px solid ${featured.color}18`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"12px" }}>
              <div style={{ fontSize:"72px", opacity:".5", animation:"float 4s ease-in-out infinite" }}>{featured.emoji}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".22em", color:`${featured.color}70` }}>LIVE AT VERCEL ↗</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"16px" }}>
        {rest.map((p, i) => (
          <div key={p.id} className="reveal proj3d" style={{ transitionDelay:`${i*.09}s` }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
            <div style={{ padding:"28px", background:"var(--surface)", border:"1px solid var(--border)", height:"100%", transition:"border-color .3s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor=`${p.color}40`} onMouseLeave={e=>e.currentTarget.style.borderColor="var(--border)"}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"16px" }}>
                <span style={{ fontSize:"30px" }}>{p.emoji}</span>
                <div style={{ display:"flex", gap:"10px" }}>
                  {p.demo !== "#" && <a href={p.demo} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", color:"var(--muted)", letterSpacing:".1em", transition:"color .3s" }}
                    onMouseEnter={e=>e.currentTarget.style.color=p.color} onMouseLeave={e=>e.currentTarget.style.color="var(--muted)"}>DEMO ↗</a>}
                  <a href={p.gh} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", color:"var(--muted)", letterSpacing:".1em", transition:"color .3s" }}
                    onMouseEnter={e=>e.currentTarget.style.color=p.color} onMouseLeave={e=>e.currentTarget.style.color="var(--muted)"}>GH ↗</a>
                </div>
              </div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"19px", fontWeight:"700", color:"#E6ECF5", marginBottom:"8px" }}>{p.title}</h3>
              <p style={{ fontSize:"13px", lineHeight:"1.75", color:"#6A7F98", marginBottom:"16px" }}>{p.desc}</p>
              <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", padding:"3px 8px", background:`${p.color}10`, border:`1px solid ${p.color}28`, color:p.color }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────────────────── */
function Skills() {
  const rings = [
    { skills:[SKILLS[0],SKILLS[3],SKILLS[6],SKILLS[9]], r:108, dur:22 },
    { skills:[SKILLS[1],SKILLS[4],SKILLS[7]], r:156, dur:30 },
    { skills:[SKILLS[2],SKILLS[5],SKILLS[8]], r:204, dur:40 },
  ];
  const byCat = SKILLS.reduce((a,s) => { (a[s.cat]=a[s.cat]||[]).push(s); return a; }, {});

  return (
    <section id="skills" style={{ padding:"120px 40px", background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <div className="reveal" style={{ marginBottom:"64px" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>04 — SKILLS</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,6vw,62px)", fontWeight:"700", lineHeight:"1.1" }}>
            Tools of the <em style={{ color:"var(--accent)" }}>Trade</em>
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"80px", alignItems:"center" }}>
          {/* SVG orbital */}
          <div className="rl" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="440" height="440" viewBox="0 0 440 440" style={{ overflow:"visible" }}>
              {/* Orbit rings */}
              {rings.map(ring => (
                <circle key={ring.r} cx="220" cy="220" r={ring.r} fill="none" stroke="rgba(201,169,110,0.1)" strokeWidth="1" strokeDasharray="4 8" />
              ))}
              {/* Center core */}
              <circle cx="220" cy="220" r="38" fill="url(#coreGrad)" />
              <defs>
                <radialGradient id="coreGrad" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#E8C88A"/>
                  <stop offset="100%" stopColor="#8A6030"/>
                </radialGradient>
              </defs>
              <text x="220" y="226" textAnchor="middle" style={{ fontFamily:"'Playfair Display',serif", fontWeight:"900", fill:"#06080D", fontSize:"20px" }}>AI</text>
              {/* Glow filter ring */}
              <circle cx="220" cy="220" r="38" fill="none" stroke="rgba(201,169,110,.5)" strokeWidth="1" style={{ animation:"glow 3s ease-in-out infinite" }} />

              {rings.map((ring, ri) => {
                const color = ["#C9A96E","#7B9CCC","#9C7BCC"][ri];
                return (
                  <g key={ri} style={{ transformOrigin:"220px 220px", animation:`spin ${ring.dur}s linear infinite` }}>
                    {ring.skills.map((skill, si) => {
                      const angle = (si / ring.skills.length) * 2 * Math.PI - Math.PI/2;
                      const sx = 220 + ring.r * Math.cos(angle);
                      const sy = 220 + ring.r * Math.sin(angle);
                      return (
                        <g key={skill.name} style={{ transformOrigin:`${sx}px ${sy}px`, animation:`cspin ${ring.dur}s linear infinite` }}>
                          <circle cx={sx} cy={sy} r="22" fill="#101620" stroke={color} strokeWidth="1" style={{ opacity:.85 }} />
                          <image href={skill.logo} x={sx-11} y={sy-11} width="22" height="22" style={{ opacity:.9 }} />
                          <title>{skill.name}</title>
                        </g>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Skill list */}
          <div className="rr" style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
            {Object.entries(byCat).map(([cat, items]) => {
              const cc = CAT_COLORS[cat] || "var(--accent)";
              return (
                <div key={cat}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:cc, flexShrink:0 }} />
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".25em", color:"var(--muted)" }}>{cat.toUpperCase()}</span>
                  </div>
                  <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                    {items.map(s => (
                      <div key={s.name} style={{ display:"flex", alignItems:"center", gap:"6px", padding:"6px 12px", background:"var(--surface)", border:`1px solid ${cc}28`, transition:"all .3s", cursor:"default" }}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor=cc; e.currentTarget.style.background=`${cc}0E`;}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor=`${cc}28`; e.currentTarget.style.background="var(--surface)";}}>
                        <img src={s.logo} alt={s.name} width={13} height={13} style={{ objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", color:"#A0B0C4" }}>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop:"8px", padding:"18px 20px", background:"var(--surface)", border:"1px solid var(--border)" }}>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"8px", letterSpacing:".25em", color:"var(--accent)", marginBottom:"8px" }}>ALSO FLUENT IN</div>
              <p style={{ fontSize:"12px", color:"#6A7F98", lineHeight:"1.8" }}>FastAPI · Streamlit · LangChain · Hugging Face · OpenAI API · Next.js · TypeScript · Supabase · Pandas · NumPy · Jupyter · scikit-learn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EDUCATION ──────────────────────────────────────────────────────── */
function Education() {
  return (
    <section id="education" style={{ padding:"120px 40px", maxWidth:"1200px", margin:"0 auto" }}>
      <div className="reveal" style={{ marginBottom:"64px" }}>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>05 — EDUCATION</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,6vw,62px)", fontWeight:"700", lineHeight:"1.1" }}>
          Asia <span style={{ color:"var(--muted)" }}>→</span> Europe.<br/>
          <em style={{ color:"var(--accent)" }}>The Journey Shapes the Engineer</em>
        </h2>
      </div>

      {/* Journey banner */}
      <div className="reveal" style={{ marginBottom:"48px", padding:"36px 40px", background:"var(--surface)", border:"1px solid var(--border)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(123,156,204,.04), rgba(201,169,110,.04))" }} />
        <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center", position:"relative", flexWrap:"wrap", gap:"24px" }}>
          {[
            { flag:"🇲🇲", city:"Yangon", label:"Origins", date:"2016—2020", color:"#7BCC9C" },
            { flag:"→", city:"", label:"", date:"", color:"var(--muted)", arrow:true },
            { flag:"🇹🇭", city:"Bangkok", label:"Asian Institute of Technology", date:"2022—2024", color:"#7B9CCC" },
            { flag:"✈", city:"", label:"Dual Degree", date:"", color:"var(--accent)", arrow:true },
            { flag:"🇫🇷", city:"Paris", label:"Telecom SudParis", date:"2023—2024", color:"#C9A96E" },
            { flag:"→", city:"", label:"", date:"", color:"var(--muted)", arrow:true },
            { flag:"🏙", city:"Station F", label:"Siloett.AI", date:"2025—Now", color:"#C9A96E" },
          ].map((item, i) => item.arrow ? (
            <div key={i} style={{ fontSize:"20px", color:item.color, opacity:.6 }}>{item.flag}</div>
          ) : (
            <div key={i} style={{ textAlign:"center" }}>
              <div style={{ fontSize:"28px", marginBottom:"6px" }}>{item.flag}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".12em", color:item.color, marginBottom:"3px" }}>{item.date}</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"15px", color:"#E6ECF5", marginBottom:"2px" }}>{item.city}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", color:"var(--muted)", maxWidth:"120px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"16px" }}>
        {EDUCATION.map((ed, i) => (
          <div key={i} className="reveal" style={{ transitionDelay:`${i*.1}s` }}>
            <div style={{
              padding:"28px", background:"var(--surface)", border:"1px solid var(--border)",
              height:"100%", transition:"all .3s", position:"relative", overflow:"hidden",
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=`${ed.color}50`; e.currentTarget.style.boxShadow=`0 8px 32px ${ed.color}10`;}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="none";}}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:ed.color }} />
              <div style={{ fontSize:"24px", marginBottom:"14px" }}>{ed.flag}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".15em", color:ed.color, marginBottom:"6px" }}>{ed.date}</div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"15px", fontWeight:"700", color:"#E6ECF5", marginBottom:"6px", lineHeight:"1.35" }}>{ed.degree}</h3>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:ed.color, marginBottom:"3px" }}>{ed.school}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", color:"var(--muted)", marginBottom:"18px" }}>{ed.loc}</div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
                <div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"8px", letterSpacing:".15em", color:"var(--muted)", marginBottom:"2px" }}>GPA</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"22px", color:ed.color, fontWeight:"700" }}>{ed.gpa}</div>
                </div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", color:"var(--muted)", textAlign:"right", maxWidth:"110px", lineHeight:"1.4" }}>{ed.note}</div>
              </div>
              {ed.asterisk && <div style={{ marginTop:"12px", paddingTop:"10px", borderTop:"1px solid var(--border)", fontFamily:"'DM Mono',monospace", fontSize:"9px", color:"var(--muted)", lineHeight:"1.5" }}>{ed.asterisk}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CERTIFICATIONS ─────────────────────────────────────────────────── */
function Certifications() {
  return (
    <section id="certifications" style={{ padding:"120px 40px", background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
        <div className="reveal" style={{ marginBottom:"64px" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>06 — CERTIFICATIONS</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,6vw,62px)", fontWeight:"700", lineHeight:"1.1" }}>
            Proof of <em style={{ color:"var(--accent)" }}>Commitment</em>
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"16px" }}>
          {CERTS.map((c, i) => (
            <div key={i} className="reveal cert-shimmer" style={{ transitionDelay:`${i*.09}s` }}>
              <a href={c.url} target="_blank">
                <div style={{
                  padding:"32px", background:"var(--surface)", border:"1px solid var(--border)",
                  transition:"all .35s", display:"block",
                }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=`${c.color}50`; e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow=`0 20px 48px ${c.color}14`;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none";}}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"20px" }}>
                    <span style={{ fontSize:"36px" }}>{c.emoji}</span>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"8px", letterSpacing:".18em", color:c.color, padding:"4px 9px", border:`1px solid ${c.color}40` }}>VERIFIED ↗</div>
                  </div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"17px", fontWeight:"700", color:"#E6ECF5", marginBottom:"8px", lineHeight:"1.3" }}>{c.title}</h3>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:c.color, marginBottom:"4px" }}>{c.issuer}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", color:"var(--muted)" }}>{c.by}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────────────── */
function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText("pyaesonekyaw101010@gmail.com").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  return (
    <section id="contact" style={{ padding:"140px 40px", textAlign:"center", position:"relative", overflow:"hidden" }}>
      {/* Ambient glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,169,110,.06), transparent)", pointerEvents:"none" }} />
      <div style={{ maxWidth:"700px", margin:"0 auto", position:"relative" }}>
        <div className="reveal">
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".35em", color:"var(--accent)", marginBottom:"14px" }}>07 — CONTACT</div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(40px,8vw,86px)", fontWeight:"900", lineHeight:"1.0", marginBottom:"20px" }}>
            Let's Build<br/><em style={{ color:"var(--accent)" }}>Something.</em>
          </h2>
          <p style={{ fontSize:"15px", lineHeight:"1.85", color:"#6A7F98", maxWidth:"480px", margin:"0 auto 52px" }}>
            Open to AI engineering roles, founding team opportunities, and collaborations in CreativeAI, NLP, and AI for Social Good.
          </p>
        </div>

        <div className="reveal" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"20px" }}>
          <button onClick={copy} style={{
            fontFamily:"'DM Mono',monospace", fontSize:"13px", letterSpacing:".08em",
            color: copied ? "#7BCC9C" : "#E6ECF5",
            background:"transparent", border:`1px solid ${copied ? "#7BCC9C" : "rgba(230,236,245,.15)"}`,
            padding:"16px 36px", cursor:"pointer", transition:"all .3s",
            display:"flex", alignItems:"center", gap:"14px",
          }}
            onMouseEnter={e=>{ if(!copied){e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)";} }}
            onMouseLeave={e=>{ if(!copied){e.currentTarget.style.borderColor="rgba(230,236,245,.15)"; e.currentTarget.style.color="#E6ECF5";} }}>
            {copied ? "✓ COPIED" : "pyaesonekyaw101010@gmail.com"}
            {!copied && <span style={{ fontSize:"8px", letterSpacing:".22em", color:"var(--muted)" }}>CLICK TO COPY</span>}
          </button>

          <div style={{ display:"flex", gap:"24px" }}>
            {[["GITHUB","https://github.com/soneeee22000"],["LINKEDIN","https://www.linkedin.com/in/pyae-sone-kyaw-80386721b/"]].map(([l,u]) => (
              <a key={l} href={u} target="_blank" style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:".2em", color:"var(--muted)", transition:"color .3s" }}
                onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--muted)"}>
                {l} ↗
              </a>
            ))}
          </div>

          <div style={{ width:"160px", height:"1px", background:"linear-gradient(to right,transparent,rgba(201,169,110,.5),transparent)", marginTop:"32px" }} />
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"9px", letterSpacing:".2em", color:"var(--muted)" }}>BASED IN PARIS · OPEN TO REMOTE</p>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ padding:"28px 40px", borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"14px" }}>
      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"18px", color:"var(--accent)", fontWeight:"700" }}>PSK</div>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"8px", letterSpacing:".2em", color:"var(--muted)" }}>PYAE SONE KYAW · FOUNDING AI ENGINEER · PARIS 2026</div>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"8px", color:"var(--muted)" }}>BUILT WITH REACT ♥</div>
    </footer>
  );
}

/* ─── APP ────────────────────────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = STYLES;
    document.head.appendChild(style);
    return () => { try { document.head.removeChild(style); } catch {} };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } }),
      { threshold: 0.07, rootMargin:"0px 0px -40px 0px" }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal,.rl,.rr").forEach(el => obs.observe(el));
    }, 150);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);

  return (
    <div style={{ background:"var(--bg)", color:"var(--text)", fontFamily:"'DM Sans',sans-serif", minHeight:"100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
