/* INTEIRO — edit this object to personalize the experience.
 * Local and offline: no imports, remote fonts, images or libraries are required.
 */
const CONFIG = {
  MESSAGE: 'Há coisas que só ficam inteiras quando encontram você.',
  MESSAGES: [
      "Há coisas que só ficam inteiras quando encontram você.",
      "Você dá cor aos meus dias mais quietos.",
      "Meu lugar favorito cabe no seu abraço.",
      "O amor também mora nos pequenos detalhes.",
      "Com você, até o silêncio tem companhia.",
      "Alguns encontros acendem universos por dentro.",
      "Seu carinho deixa a vida mais leve.",
      "Tem um pouco de você em cada sorriso meu.",
      "A gente se encontra até nas entrelinhas.",
      "Você faz o simples ganhar outro brilho.",
      "O coração reconhece o que lhe faz bem.",
      "Há abraços que continuam mesmo depois da despedida.",
      "Sua presença muda a luz do meu dia.",
      "O bonito é ter com quem dividir o caminho.",
      "Meu sorriso sabe o caminho até você.",
      "Algumas pessoas chegam e viram paisagem favorita.",
      "Com carinho, tudo encontra um lugar.",
      "O que é especial fica nos detalhes.",
      "Há encontros que merecem todos os recomeços.",
      "Você faz meus instantes durarem mais.",
      "Entre tantas estrelas, seu brilho me encontra.",
      "O afeto tem um jeito bonito de permanecer.",
      "Seu nome combina com meus pensamentos bons.",
      "Tem gente que é descanso para a alma.",
      "Você deixa lembranças até nos dias comuns.",
      "O amor cresce onde o cuidado fica.",
      "Com você, o tempo ganha delicadeza.",
      "A felicidade às vezes chega em forma de pessoa.",
      "Seu abraço é um lugar onde gosto de ficar.",
      "Há sentimentos que a distância não diminui.",
      "Você faz parte das minhas coisas bonitas.",
      "A vida fica melhor quando a gente se escolhe.",
      "Até um coração de vidro guarda calor.",
      "Cada pedaço também faz parte da história.",
      "Recomeçar pode ser uma forma de florescer.",
      "A delicadeza também tem sua força.",
      "Há beleza no que encontra seu caminho de volta.",
      "Nem toda pausa é uma despedida.",
      "O carinho sabe juntar o que a pressa espalha.",
      "A luz encontra passagem nas nossas histórias.",
      "Às vezes, o inteiro nasce de um recomeço.",
      "Cada encontro deixa uma luz acesa.",
      "Seu jeito de cuidar fica comigo.",
      "O amor cabe onde existe espaço para ser.",
      "Tem afeto que chega sem fazer barulho.",
      "Você é uma das minhas coincidências favoritas.",
      "Algumas conexões dispensam explicação.",
      "O coração também sorri em silêncio.",
      "Que a gente nunca perca a delicadeza.",
      "O tempo passa; certos carinhos permanecem.",
      "Você torna mais bonito o caminho de volta.",
      "Um gesto pequeno pode iluminar o dia inteiro.",
      "Há presenças que abraçam sem tocar.",
      "Meu carinho por você mora nos detalhes.",
      "O amor encontra poesia nos dias comuns.",
      "Seu riso deixa o mundo um pouco mais leve.",
      "A melhor parte é poder compartilhar.",
      "Entre o acaso e o carinho, encontrei você.",
      "Tem gente que faz a vida parecer casa.",
      "Estar perto também é uma forma de cuidar.",
      "Alguns laços crescem mesmo em silêncio.",
      "Você é aquele pensamento que chega com um sorriso.",
      "O que faz bem merece ficar por perto.",
      "Há histórias que começam com um olhar.",
      "A ternura transforma o jeito de ver o mundo.",
      "Seu carinho faz morada nos meus dias.",
      "O encontro certo deixa espaço para sermos nós.",
      "Com você, os pequenos momentos têm mais cor.",
      "A gente também se encontra pelo cuidado.",
      "O amor pode ser leve e ainda assim profundo.",
      "Tem beleza em escolher ficar mais um pouco.",
      "Seu abraço muda o tamanho das preocupações.",
      "Há pessoas que tornam o agora suficiente.",
      "O que a gente cuida ganha vida.",
      "Algumas lembranças têm a temperatura de um abraço.",
      "Meu coração gosta da sua companhia.",
      "O afeto aproxima até o que parece distante.",
      "Você deixa luz por onde passa.",
      "Tem carinho que atravessa qualquer tela.",
      "A gente cabe nas pequenas alegrias.",
      "O amor é bonito quando existe liberdade.",
      "Há um universo inteiro nos gestos sinceros.",
      "O melhor brilho é aquele que vem do encontro.",
      "Você dá um novo sentido aos meus dias comuns.",
      "Certos encontros ficam mesmo quando o dia termina.",
      "O cuidado é uma forma silenciosa de dizer amor.",
      "Há sorrisos que a memória guarda com carinho.",
      "A vida tem mais cor quando existe afeto.",
      "O seu jeito encontra espaço no meu mundo.",
      "A proximidade mais bonita é poder ser quem somos.",
      "Que o carinho sempre encontre tempo para acontecer.",
      "Nem todo sentimento precisa de muitas palavras.",
      "Meu pensamento faz uma pausa boa quando você chega.",
      "Alguns instantes merecem um lugar para sempre.",
      "Você faz diferença até quando não percebe.",
      "O coração guarda o que os olhos não conseguem ver.",
      "Há coisas bonitas esperando o próximo encontro.",
      "O amor também se revela na calma.",
      "Que a gente continue encontrando motivos para sorrir.",
      "No meio do universo, gosto de encontrar você."
  ],
  TILT_DEGREES: 25,
  HEAL_SECONDS: 1.2,
  JOIN_GLOW_SECONDS: .65,
  COLORS: {
    BACKGROUND: '#020916',
    GLASS: '#155dcc',
    LIGHT: '#319cff',
    EDGE: '#8ddfff',
    MESSAGE: '#c7e9ff'
  },
  PULSE_BPM: 58,
  PARTICLES: 70,
  FRAGMENTS: 12,
  MAX_PIXEL_RATIO: 1.7,
  ARRIVAL_SECONDS: 2.4,
  SCATTER_SECONDS: 1.85,
  RETURN_SECONDS: 1.05
};

(() => {
  'use strict';
  const TAU = Math.PI * 2;
  const MAX_TILT = CONFIG.TILT_DEGREES * Math.PI / 180;
  const CAMERA = 5.5; // Shared by the GPU projection and pointer hit testing.
  const scene = document.getElementById('scene');
  const canvas = document.getElementById('glass');
  const light = document.getElementById('light');
  const ctx = light.getContext('2d');
  const space = document.getElementById('space'), sky = space.getContext('2d');
  let skyDirty = true, lastSkyPaint = -100;
  const svg = document.getElementById('fallback');
  const message = document.getElementById('message');
  const status = document.getElementById('status');
  const targets = document.getElementById('fragment-targets');
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = media.matches;
  let width = 1, height = 1, pixelRatio = 1, scale = 1, centerX = 0, centerY = 0;
  let clock = 0, previous = null, state = 'arrival', stateTime = 0, clicks = 0;
  let completedOnce = false, completionFlash = 0, tiltX = 0, tiltY = 0;
  let orbitVelocityX = 0, orbitVelocityY = 0, keyboardHoldUntil = 0;
  let targetTiltX = 0, targetTiltY = 0, nextClickAt = 0, currentHover = -1;
  let explodedAt = -100, protectedOutline = [];
  let pendingMessage = null, lastMessageIndex = -1;
  const phrases = (CONFIG.MESSAGES || [CONFIG.MESSAGE]).filter(text => typeof text === 'string' && text.trim());
  let musicRect = null;
  let dragCrackLevel = 0, dragRoot = null, dragRootKey = '';
  let fractureStarted = -100, impact = [0, .10], cycle = 0;
  let gl = null, renderer = null, frameId = 0, pointer = null;
  const particles = [], rings = [], fragments = [], fractureEdges = [];
  const rgb = hex => hex.match(/[a-f\d]{2}/gi).map(x => parseInt(x, 16));
  const palette = { light: rgb(CONFIG.COLORS.LIGHT), edge: rgb(CONFIG.COLORS.EDGE) };
  document.documentElement.style.setProperty('--background', CONFIG.COLORS.BACKGROUND);
  document.documentElement.style.setProperty('--text', CONFIG.COLORS.MESSAGE);
  message.textContent = '';
  message.setAttribute('aria-hidden','true');
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  // Seeded geometry makes the same 12 fragments return to exactly the same places.
  let seed = 9137;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

  /* 1. HEART GEOMETRY -------------------------------------------------------
   * A symmetric Bezier outline is divided into actual glass volumes by
   * Voronoi half-planes. Their combined area matches the original heart.
   */
  function bezier(a, b, c, d, t) {
    const u = 1 - t;
    return [u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],
            u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]];
  }
  const curves = [
    [[0,.55],[-.32,1.04],[-1.03,1.00],[-1.03,.38]],
    [[-1.03,.38],[-1.04,-.13],[-.43,-.69],[0,-1.00]],
    [[0,-1.00],[.43,-.69],[1.04,-.13],[1.03,.38]],
    [[1.03,.38],[1.03,1.00],[.32,1.04],[0,.55]]
  ];
  const outline = curves.flatMap(curve => Array.from({length: 9}, (_,i) => bezier(...curve, i/9)));
  function area(polygon) { return polygon.reduce((s,p,i) => { const q=polygon[(i+1)%polygon.length]; return s+p[0]*q[1]-q[0]*p[1]; },0)/2; }
  if (area(outline) < 0) outline.reverse();
  function inside(p, poly) {
    let yes = false;
    for(let i=0,j=poly.length-1;i<poly.length;j=i++) {
      const a=poly[i],b=poly[j];
      if ((a[1]>p[1]) !== (b[1]>p[1]) && p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0]) yes=!yes;
    }
    return yes;
  }
  function clip(poly, nx, ny, limit) {
    const result=[];
    for(let i=0;i<poly.length;i++) {
      const a=poly[i], b=poly[(i+1)%poly.length];
      const da=a[0]*nx+a[1]*ny-limit, db=b[0]*nx+b[1]*ny-limit;
      if(da<=1e-8) result.push(a);
      if((da<0)!==(db<0)) { const t=da/(da-db); result.push([lerp(a[0],b[0],t),lerp(a[1],b[1],t)]); }
    }
    return result;
  }
  function centroid(poly) {
    let x=0,y=0,total=0;
    poly.forEach((a,i)=>{const b=poly[(i+1)%poly.length],v=a[0]*b[1]-b[0]*a[1];x+=(a[0]+b[0])*v;y+=(a[1]+b[1])*v;total+=v;});
    return [x/(3*total),y/(3*total)];
  }
  // Asymmetric fracture origins: neither rows nor mirrored puzzle pieces.
  const defaults=[[-.64,.62],[-.21,.67],[.30,.61],[.77,.32],[-.77,.14],[-.25,.15],[.35,.10],[-.49,-.23],[.00,-.20],[.43,-.35],[-.21,-.55],[.05,-.80]];
  const n=clamp(Math.round(Number(CONFIG.FRAGMENTS)||12),3,32);
  const sites=n===12?defaults:[];
  if(n!==12) { for(let i=0;i<n;i++) { let p; do{p=[random()*1.9-.95,random()*1.75-.95];}while(!inside(p,outline)||sites.some(q=>Math.hypot(p[0]-q[0],p[1]-q[1])<.12));sites.push(p); } }
  function boundaryDistance(p) {
    let min=10;
    outline.forEach((a,i)=>{const b=outline[(i+1)%outline.length],dx=b[0]-a[0],dy=b[1]-a[1];const t=clamp(((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy),0,1);min=Math.min(min,Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy));});
    return min;
  }
  // Both neighbours get exactly the same uneven edge in opposite directions.
  // This gives real shared fracture boundaries without gaps in the whole heart.
  function fractureBoundary(poly) {
    const out=[];
    poly.forEach((p,i)=>{
      const q=poly[(i+1)%poly.length];out.push(p);
      const mid=[(p[0]+q[0])/2,(p[1]+q[1])/2];
      if(boundaryDistance(mid)<1e-5)return;
      const forward=p[0]<q[0]-1e-6 || (Math.abs(p[0]-q[0])<1e-6&&p[1]<q[1]);
      const a=forward?p:q,b=forward?q:p,dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);
      if(len<.08)return;
      const hash=Math.sin(Math.round((a[0]+b[0])*10000)*.017+Math.round((a[1]+b[1])*10000)*.031);
      const amount=Math.min(.024,len*.075);
      const samples=[.32,.69].map((t,j)=>[lerp(a[0],b[0],t)-dy/len*amount*hash*(j?-.65:1),lerp(a[1],b[1],t)+dx/len*amount*hash*(j?-.65:1)]);
      if(!forward)samples.reverse();out.push(...samples);
    });return out;
  }
  const depth = p => .025 + .34*(1-Math.exp(-boundaryDistance(p)/.22));
  function triangulate(poly) {
    const indices=poly.map((_,i)=>i),result=[];
    const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
    let guard=0;
    while(indices.length>3 && guard++<2000) {
      let found=false;
      for(let i=0;i<indices.length;i++) {
        const ia=indices[(i+indices.length-1)%indices.length],ib=indices[i],ic=indices[(i+1)%indices.length];
        const a=poly[ia],b=poly[ib],c=poly[ic];
        if(cross(a,b,c)<1e-9) continue;
        if(indices.some(j=>j!==ia&&j!==ib&&j!==ic&&cross(a,b,poly[j])>1e-8&&cross(b,c,poly[j])>1e-8&&cross(c,a,poly[j])>1e-8))continue;
        result.push([a,b,c]);indices.splice(i,1);found=true;break;
      }
      if(!found) break;
    }
    if(indices.length===3)result.push(indices.map(i=>poly[i]));
    return result;
  }
  function subdivide(tri,level) {
    if(!level)return [tri];
    const [a,b,c]=tri,ab=[(a[0]+b[0])/2,(a[1]+b[1])/2],bc=[(b[0]+c[0])/2,(b[1]+c[1])/2],ca=[(c[0]+a[0])/2,(c[1]+a[1])/2];
    return [[a,ab,ca],[ab,b,bc],[ca,bc,c],[ab,bc,ca]].flatMap(t=>subdivide(t,level-1));
  }
  function normal(a,b,c) {const u=b.map((v,i)=>v-a[i]),v=c.map((x,i)=>x-a[i]);const r=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],l=Math.hypot(...r)||1;return r.map(x=>x/l);}
  sites.forEach((s,id)=>{
    let poly=outline.slice();sites.forEach((q,j)=>{if(j!==id)poly=clip(poly,q[0]-s[0],q[1]-s[1],(q[0]*q[0]+q[1]*q[1]-s[0]*s[0]-s[1]*s[1])/2);});
    const clean=fractureBoundary(poly.filter((p,i)=>Math.hypot(p[0]-poly[(i+1)%poly.length][0],p[1]-poly[(i+1)%poly.length][1])>1e-5));
    const center=centroid(clean), triangles=triangulate(clean),vertices=[],lines=[],outerLines=[],faces=[];
    const cuts=clean.map((a,i)=>[a,clean[(i+1)%clean.length]]).filter(([a,b])=>boundaryDistance([(a[0]+b[0])/2,(a[1]+b[1])/2])>1e-5);
    function cutDistance(p) {return Math.min(...cuts.map(([a,b])=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=clamp(((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy),0,1);return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy);}));}
    function addFace(a,b,c,kind) {
      const faceNormal=normal(a,b,c);
      [a,b,c].forEach((p,i)=>{
        let nor=faceNormal;
        if(kind<2) {
          const direction=kind===0?1:-1;
          // Continuous optical normals prevent each fracture cell from looking
          // like a separate mechanical panel while the heart is still whole.
          const lobe=Math.max(0,Math.min(1,(p[1]-.24)/.40));
          const smooth=[p[0]*.92+Math.tanh(p[0]*5)*lobe*.08,(p[1]+.10)*.86,direction*.82],len=Math.hypot(...smooth);
          nor=smooth.map((v,j)=>v/len*.985+faceNormal[j]*.015);
        }
        vertices.push(p[0]-center[0],p[1]-center[1],p[2],...nor,...[i===0?1:0,i===1?1:0,i===2?1:0],kind,cutDistance(p));
      });
      
    }
    // Curved front/back surfaces and real side faces give each shard thickness.
    triangles.flatMap(t=>subdivide(t,2)).forEach(tri=>{
      const front=tri.map(p=>[...p,depth(p)]),back=tri.map(p=>[...p,-depth(p)]);
      addFace(...front,0);addFace(back[2],back[1],back[0],1);
    });
    clean.forEach((p,i)=>{
      const q=clean[(i+1)%clean.length],a=[...p,depth(p)],b=[...q,depth(q)],c=[...q,-depth(q)],d=[...p,-depth(p)];
      const sideKind=boundaryDistance([(p[0]+q[0])/2,(p[1]+q[1])/2])<1e-5?3:2;
      addFace(a,d,b,sideKind);addFace(b,d,c,sideKind);
      [a,b].forEach(x=>lines.push(x[0]-center[0],x[1]-center[1],x[2]));
      if(boundaryDistance(p)<1e-5&&boundaryDistance(q)<1e-5) [a,b].forEach(x=>outerLines.push(x[0]-center[0],x[1]-center[1],x[2]));
      // Rear rim and thickness edges are most visible when a shard turns.
      [d,c].forEach(x=>lines.push(x[0]-center[0],x[1]-center[1],x[2]));
      if(i%3===0)[a,d].forEach(x=>lines.push(x[0]-center[0],x[1]-center[1],x[2]));
    });
    triangles.forEach(tri=>faces.push(tri.map(p=>[...p,depth(p)])));
    const button=document.createElement('button');button.className='fragment-target';button.hidden=true;button.setAttribute('aria-label',`Reconstruir fragmento ${id+1} de ${n}`);targets.appendChild(button);
    fragments.push({id,poly:clean,center,faces,vertices:new Float32Array(vertices),lines:new Float32Array(lines),outerLines:new Float32Array(outerLines),button,geometryScale:1,motionOpacity:1,
      radius:Math.max(...clean.map(p=>Math.hypot(p[0]-center[0],p[1]-center[1],depth(p)))),velocity:[0,0,0],omega:[0,0,0],cuts,joinedAt:-100,escape:null,nextEscapeAt:0,mass:Math.abs(area(clean)),delay:0,returnDuration:1,bend:[0,0,0],dragged:false,position:[...center,0],rotation:[0,0,0],scatter:[0,0,0],spin:[0,0,0],returned:false,returnAt:null,from:null,fromRotation:null,hover:0,screenPoly:[],screenCenter:[0,0],hitRadius:28});
    button.addEventListener('click',e=>{e.stopPropagation();returnFragment(fragments[id]);});
    button.addEventListener('focus',()=>{currentHover=id;});
    button.addEventListener('blur',()=>{if(currentHover===id)currentHover=-1;});
  });

  const fractureNodes=new Map(), fractureKeys=new Set();
  const pointKey=p=>p.map(v=>v.toFixed(5)).join(',');
  fragments.forEach(f=>f.poly.forEach((a,i)=>{
    const b=f.poly[(i+1)%f.poly.length],mid=[(a[0]+b[0])/2,(a[1]+b[1])/2];
    if(boundaryDistance(mid)<1e-5)return;
    const ka=pointKey(a),kb=pointKey(b),key=[ka,kb].sort().join('|');if(fractureKeys.has(key))return;fractureKeys.add(key);
    if(!fractureNodes.has(ka))fractureNodes.set(ka,{p:a,edges:[],distance:Infinity});
    if(!fractureNodes.has(kb))fractureNodes.set(kb,{p:b,edges:[],distance:Infinity});
    const edge={a:fractureNodes.get(ka),b:fractureNodes.get(kb),length:Math.hypot(a[0]-b[0],a[1]-b[1])};
    edge.a.edges.push(edge);edge.b.edges.push(edge);fractureEdges.push(edge);
  }));
  function prepareFractures(origin=impact,mode='click') {
    const nodes=[...fractureNodes.values()];nodes.forEach(n=>n.distance=Infinity);
    const root=nodes.reduce((best,node)=>Math.hypot(node.p[0]-origin[0],node.p[1]-origin[1])<Math.hypot(best.p[0]-origin[0],best.p[1]-origin[1])?node:best,nodes[0]);
    root.distance=0;const remaining=new Set(nodes);
    while(remaining.size){let nearest=null;for(const node of remaining)if(!nearest||node.distance<nearest.distance)nearest=node;remaining.delete(nearest);for(const edge of nearest.edges){const other=edge.a===nearest?edge.b:edge.a;other.distance=Math.min(other.distance,nearest.distance+edge.length);}}
    const maximum=Math.max(...nodes.filter(n=>Number.isFinite(n.distance)).map(n=>n.distance));
    fractureEdges.forEach(edge=>{
      let a=edge.a,b=edge.b;if(b.distance<a.distance)[a,b]=[b,a];
      const start=a.distance/(maximum||1)*.72,duration=Math.max(.035,edge.length/(maximum||1)*.72);
      if(mode==='drag'){edge.dragA=a;edge.dragB=b;edge.dragStart=start;edge.dragDuration=duration;}
      else{edge.a=a;edge.b=b;edge.start=start;edge.duration=duration;}
    });
  }
  prepareFractures();
  function updateDragStress() {
    if(state!=='intact'){dragCrackLevel=0;return;}
    const manipulating=pointer&&pointer.orbit&&pointer.moved||clock<keyboardHoldUntil;
    if(manipulating&&Math.hypot(targetTiltX,targetTiltY)>.006){
      const direction=[-targetTiltY,targetTiltX];
      const origin=outline.reduce((best,p)=>p[0]*direction[0]+p[1]*direction[1]>best[0]*direction[0]+best[1]*direction[1]?p:best,outline[0]);
      const key=pointKey(origin);
      if(key!==dragRootKey){dragRootKey=key;dragRoot=origin.slice();prepareFractures(origin,'drag');}
    }
    dragCrackLevel=dragRoot?clamp(Math.hypot(tiltX,tiltY)/MAX_TILT,0,1):0;
  }

  /* 2. WEBGL GLASS ----------------------------------------------------------
   * Custom, dependency-free shaders use Fresnel reflections, procedural
   * studio lights and an inner transmission layer. SVG is the live fallback.
   */
  const VERTEX=`
    attribute vec3 aPosition; attribute vec3 aNormal; attribute vec3 aBary; attribute float aKind; attribute float aEdge;
    uniform mat4 uModel; uniform mat4 uProjection; uniform vec2 uCenter;
    varying vec3 vNormal; varying vec3 vPosition; varying vec3 vBary; varying float vKind; varying float vThickness; varying vec2 vHeart; varying float vEdge;
    void main(){ vec4 p=uModel*vec4(aPosition,1.0);vPosition=p.xyz;vNormal=mat3(uModel)*aNormal;vBary=aBary;vKind=aKind;vThickness=abs(aPosition.z);vHeart=aPosition.xy+uCenter;vEdge=aEdge;gl_Position=uProjection*p; }
  `;
  const FRAGMENT=`
    precision mediump float;
    varying vec3 vNormal; varying vec3 vPosition; varying vec3 vBary; varying float vKind; varying float vThickness; varying vec2 vHeart; varying float vEdge;
    uniform vec3 uGlass; uniform vec3 uLight; uniform float uEnergy; uniform float uOpacity; uniform float uTime; uniform float uHover; uniform float uSeparated; uniform float uHeal; uniform float uJoin;
    float beam(vec3 r,vec3 direction,float sharpness){return pow(max(dot(r,normalize(direction)),0.0),sharpness);}
    void main(){
      if(vKind>1.5&&vKind<2.5&&uSeparated<.5)discard;
      float healEdge=1.12-uHeal*2.3;
      float healed=uHeal>=0.0?smoothstep(healEdge-.10,healEdge+.10,vHeart.y):0.0;
      if(vKind>1.5&&vKind<2.5&&healed>.98)discard;
      float wave=uHeal>=0.0&&uHeal<1.0?exp(-pow((vHeart.y-healEdge)/.10,2.0)):0.0;
      vec3 N=normalize(vNormal),V=normalize(vec3(0.0,0.0,5.5)-vPosition);if(dot(N,V)<0.0)N=-N;
      vec3 R=reflect(-V,N);
      float fresnel=pow(1.0-max(dot(N,V),0.0),3.0);
      float key=beam(R,vec3(-.6,1.0,1.4),35.0);
      float strip=beam(R,vec3(.95,.25,1.0),62.0);
      float soft=beam(R,vec3(-.8,-.5,1.2),9.0);
      float diffuse=max(dot(N,normalize(vec3(-.8,1.0,1.8))),0.0);
      float interior=pow(max(0.0,1.0-length(vPosition.xy)*.66),3.0);
      float caustic=pow(.5+.5*sin(vPosition.x*8.0+vPosition.y*5.0+N.x*7.0),7.0);
      float rim=pow(clamp(1.0-vThickness/.30,0.0,1.0),3.0);
      float window=pow(max(0.0,1.0-abs(R.x+.34)*8.0),3.0)*smoothstep(-.4,.65,R.y);
      float ribbon=pow(max(0.0,1.0-abs(R.y-R.x*.38-.30)*13.0),3.0);
      vec3 glass=uGlass*(.115+diffuse*.18)+uLight*(.015+interior*.07+fresnel*.48);
      glass+=vec3(.47,.74,1.0)*(window*1.15+ribbon*.42);
      glass+=uLight*rim*.95;
      glass+=vec3(.55,.88,1.0)*(key*.88+strip*.95+soft*.13);
      glass+=uLight*caustic*.065;
      float edge=min(min(vBary.x,vBary.y),vBary.z);
      float facet=1.0-smoothstep(0.0,.014,edge);
      glass+=uLight*facet*(.008+uEnergy*.06);
      glass+=uLight*uEnergy*(.16+fresnel*.4)+uLight*uHover*.20;
      if(vKind>1.5)glass+=uLight*(.19+fresnel*.6);
      // Light lives in the actual cut surfaces, never in a drawn trail.
      glass+=uLight*uJoin*exp(-vEdge*42.0)*.62;
      glass+=uLight*wave*.52;
      glass=vec3(1.0)-exp(-glass*1.65);
      float alpha=vKind>.5&&vKind<1.5?.36:vKind>1.5?.90:.81;
      if(vKind>1.5&&vKind<2.5)alpha*=1.0-healed;
      gl_FragColor=vec4(glass,uOpacity*alpha);
    }
  `;
  const LINE_VERTEX=`attribute vec3 aPosition;uniform mat4 uModel;uniform mat4 uProjection;uniform vec2 uCenter;varying float vHeartY;void main(){vHeartY=aPosition.y+uCenter.y;gl_Position=uProjection*uModel*vec4(aPosition,1.0);}`;
  const LINE_FRAGMENT=`precision mediump float;uniform vec3 uColor;uniform float uOpacity;uniform float uHeal;varying float vHeartY;void main(){float fade=1.0;if(uHeal>=0.0){float edge=1.12-uHeal*2.3;fade=1.0-smoothstep(edge-.10,edge+.10,vHeartY);}if(fade<.005)discard;gl_FragColor=vec4(uColor,uOpacity*fade);}`;
  function program(vs,fs) {
    const compile=(kind,source)=>{const shader=gl.createShader(kind);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(shader));return shader;};
    const p=gl.createProgram(),v=compile(gl.VERTEX_SHADER,vs),f=compile(gl.FRAGMENT_SHADER,fs);gl.attachShader(p,v);gl.attachShader(p,f);gl.linkProgram(p);gl.deleteShader(v);gl.deleteShader(f);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(p));return p;
  }
  function initWebGL() {
    try {
      gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:true,powerPreference:'low-power'});
      if(!gl)throw new Error('WebGL unavailable');
      const mesh=program(VERTEX,FRAGMENT),line=program(LINE_VERTEX,LINE_FRAGMENT);
      const uniform=(p,names)=>Object.fromEntries(names.map(name=>[name,gl.getUniformLocation(p,name)]));
      renderer={mesh,line,
        attrs:Object.fromEntries(['aPosition','aNormal','aBary','aKind','aEdge'].map(x=>[x,gl.getAttribLocation(mesh,x)])),
        lineAttr:gl.getAttribLocation(line,'aPosition'),
        uniforms:uniform(mesh,['uModel','uProjection','uGlass','uLight','uEnergy','uOpacity','uTime','uHover','uSeparated','uCenter','uHeal','uJoin']),
        lineUniforms:uniform(line,['uModel','uProjection','uColor','uOpacity','uCenter','uHeal'])};
      fragments.forEach(f=>{f.buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,f.buffer);gl.bufferData(gl.ARRAY_BUFFER,f.vertices,gl.STATIC_DRAW);f.lineBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,f.lineBuffer);gl.bufferData(gl.ARRAY_BUFFER,f.lines,gl.STATIC_DRAW);f.outerBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,f.outerBuffer);gl.bufferData(gl.ARRAY_BUFFER,f.outerLines,gl.STATIC_DRAW);});
      gl.enable(gl.DEPTH_TEST);gl.enable(gl.BLEND);gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.clearColor(0,0,0,0);
    } catch(error) { gl=null;renderer=null;canvas.hidden=true;svg.hidden=false;initSVG(); }
  }
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();gl=null;renderer=null;canvas.hidden=true;svg.hidden=false;initSVG();});
  function multiply(a,b) {const out=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)out[c*4+r]+=a[k*4+r]*b[c*4+k];return out;}
  function rotation(x,y,z) {
    const cx=Math.cos(x),sx=Math.sin(x),cy=Math.cos(y),sy=Math.sin(y),cz=Math.cos(z),sz=Math.sin(z);
    return multiply(multiply(new Float32Array([cy,0,-sy,0,0,1,0,0,sy,0,cy,0,0,0,0,1]),new Float32Array([1,0,0,0,0,cx,sx,0,0,-sx,cx,0,0,0,0,1])),new Float32Array([cz,sz,0,0,-sz,cz,0,0,0,0,1,0,0,0,0,1]));
  }
  function model(f,pulse,globalTilt) {
    // The pieces move in world space while their cut faces retain the exact
    // orientation of the heart at the instant it broke.
    const m=multiply(globalTilt,rotation(...f.rotation));
    for(let i=0;i<12;i++)m[i]*=f.geometryScale*pulse;
    m[12]=f.position[0]*pulse;m[13]=f.position[1]*pulse;m[14]=f.position[2]*pulse;
    return m;
  }
  function transform(p,m){return [m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12],m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13],m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]];}
  const perspective=z=>CAMERA/(CAMERA-z);
  function project(p) {const zoom=perspective(p[2]);return [centerX+p[0]*scale*zoom,centerY-p[1]*scale*zoom];}
  function home(f) {return transform([...f.center,0],rotation(tiltX,tiltY,0));}
  function projectionMatrix() {
    const ox=2*centerX/width-1,oy=1-2*centerY/height;
    return new Float32Array([2*scale/width,0,0,0,0,2*scale/height,0,0,-ox/CAMERA,-oy/CAMERA,-.12,-1/CAMERA,ox,oy,0,1]);
  }
  function convexHull(points) {
    const sorted=points.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
    const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
    const half=arr=>{const out=[];for(const p of arr){while(out.length>1&&cross(out[out.length-2],out[out.length-1],p)<=0)out.pop();out.push(p);}return out;};
    const lower=half(sorted),upper=half(sorted.slice().reverse());lower.pop();upper.pop();return lower.concat(upper);
  }
  function updateProjection(f,m) {
    f.screenPoly=convexHull(f.poly.flatMap(p=>[-1,1].map(sign=>project(transform([p[0]-f.center[0],p[1]-f.center[1],sign*depth(p)],m)))));
    f.screenCenter=project(transform([0,0,0],m));
    const [sx,sy]=f.screenCenter;
    f.hitRadius=Math.max(width<=700?32:26,Math.min(42,...f.screenPoly.map(p=>Math.hypot(p[0]-sx,p[1]-sy))));
    f.button.style.left=sx+'px';f.button.style.top=sy+'px';
  }
  function drawGL(pulse,opacity,energy) {
    gl.viewport(0,0,canvas.width,canvas.height);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    const projection=projectionMatrix();
    const tilt=rotation(tiltX,tiltY,0);
    const ordered=fragments.slice().sort((a,b)=>a.position[2]-b.position[2]);
    for(const f of ordered) {
      const m=model(f,(['broken','scattering'].includes(state)&&!f.returned)?1:pulse,tilt);updateProjection(f,m);
      gl.useProgram(renderer.mesh);gl.bindBuffer(gl.ARRAY_BUFFER,f.buffer);
      const attrs=renderer.attrs;
      [['aPosition',3,0],['aNormal',3,12],['aBary',3,24],['aKind',1,36],['aEdge',1,40]].forEach(([name,size,offset])=>{gl.enableVertexAttribArray(attrs[name]);gl.vertexAttribPointer(attrs[name],size,gl.FLOAT,false,44,offset);});
      const u=renderer.uniforms;gl.uniformMatrix4fv(u.uModel,false,m);gl.uniformMatrix4fv(u.uProjection,false,projection);
      gl.uniform3fv(u.uGlass,rgb(CONFIG.COLORS.GLASS).map(v=>v/255));gl.uniform3fv(u.uLight,palette.light.map(v=>v/255));
      gl.uniform1f(u.uEnergy,energy+(f.returnAt!==null?.23:0));gl.uniform1f(u.uOpacity,opacity*.96*f.motionOpacity);gl.uniform1f(u.uTime,clock);gl.uniform1f(u.uHover,f.hover);gl.uniform1f(u.uSeparated,state==='broken'||state==='scattering'||healingProgress()>=0&&healingProgress()<1?1:0);gl.uniform2f(u.uCenter,...f.center);gl.uniform1f(u.uHeal,healingProgress());gl.uniform1f(u.uJoin,joinGlow(f));
      gl.enable(gl.CULL_FACE);gl.cullFace(gl.FRONT);gl.drawArrays(gl.TRIANGLES,0,f.vertices.length/11);
      gl.cullFace(gl.BACK);gl.drawArrays(gl.TRIANGLES,0,f.vertices.length/11);gl.disable(gl.CULL_FACE);
      Object.values(attrs).forEach(a=>gl.disableVertexAttribArray(a));
      gl.useProgram(renderer.line);const separated=state==='broken'||state==='scattering'||healingProgress()>=0&&healingProgress()<1;gl.bindBuffer(gl.ARRAY_BUFFER,separated?f.lineBuffer:f.outerBuffer);gl.enableVertexAttribArray(renderer.lineAttr);gl.vertexAttribPointer(renderer.lineAttr,3,gl.FLOAT,false,12,0);
      const l=renderer.lineUniforms;gl.uniformMatrix4fv(l.uModel,false,m);gl.uniformMatrix4fv(l.uProjection,false,projection);gl.uniform3fv(l.uColor,palette.edge.map(v=>v/255));gl.uniform2f(l.uCenter,...f.center);gl.uniform1f(l.uHeal,separated?healingProgress():-1);
      gl.uniform1f(l.uOpacity,opacity*f.motionOpacity*(.48+energy*.35+f.hover*.35));gl.depthFunc(gl.LEQUAL);gl.drawArrays(gl.LINES,0,(separated?f.lines:f.outerLines).length/3);gl.depthFunc(gl.LESS);gl.disableVertexAttribArray(renderer.lineAttr);
    }
  }
  let svgGroups=[];
  const NS='http://www.w3.org/2000/svg';
  function initSVG() {
    if(svgGroups.length)return;
    svg.innerHTML='<defs><linearGradient id="glass-gradient" x1="0" y1="0" x2="1" y2="1"><stop stop-color="'+CONFIG.COLORS.EDGE+'" stop-opacity=".72"/><stop offset=".34" stop-color="'+CONFIG.COLORS.GLASS+'" stop-opacity=".45"/><stop offset=".72" stop-color="#031936" stop-opacity=".80"/><stop offset="1" stop-color="'+CONFIG.COLORS.LIGHT+'" stop-opacity=".75"/></linearGradient></defs>';
    svgGroups=fragments.map(f=>{const g=document.createElementNS(NS,'g');svg.appendChild(g);const paths=f.faces.map(()=>{const p=document.createElementNS(NS,'path');p.setAttribute('fill','url(#glass-gradient)');p.setAttribute('stroke',CONFIG.COLORS.EDGE);p.setAttribute('stroke-width','.55');g.appendChild(p);return p;});const border=document.createElementNS(NS,'path');border.setAttribute('fill','none');border.setAttribute('stroke',CONFIG.COLORS.EDGE);border.setAttribute('stroke-width','1.2');g.appendChild(border);const join=document.createElementNS(NS,'path');join.setAttribute('fill','none');join.setAttribute('stroke',CONFIG.COLORS.LIGHT);join.setAttribute('stroke-width','2.6');g.appendChild(join);return{g,paths,border,join};});
  }
  function pathString(points) {return points.map((p,i)=>(i?'L':'M')+p[0].toFixed(2)+','+p[1].toFixed(2)).join(' ')+'Z';}
  function drawSVG(pulse,opacity,energy) {
    const tilt=rotation(tiltX,tiltY,0);
    fragments.forEach((f,i)=>{const m=model(f,(['broken','scattering'].includes(state)&&!f.returned)?1:pulse,tilt),group=svgGroups[i];updateProjection(f,m);group.g.setAttribute('opacity',opacity*f.motionOpacity);
      f.faces.forEach((face,j)=>{const surface=m[10]>=0?1:-1;const projected=face.map(p=>project(transform([p[0]-f.center[0],p[1]-f.center[1],p[2]*surface],m)));group.paths[j].setAttribute('d',pathString(projected));const progress=healingProgress(),y=face.reduce((sum,p)=>sum+p[1],0)/3,edge=1.12-progress*2.3;
        const repaired=progress>=0?ease((y-edge+.1)/.2):0;
        group.paths[j].setAttribute('stroke-opacity',(.12+energy*.45)*(1-repaired));
        const band=progress>=0?Math.exp(-Math.pow((y-edge)/.1,2)):0;
        group.paths[j].setAttribute('fill',band>.1?CONFIG.COLORS.LIGHT:'url(#glass-gradient)');});
      const progress=healingProgress(),cutoff=progress>=0?1.12-progress*2.3:2;
      const paths=[];const surface=m[10]>=0?1:-1;
      const segment=(a,b)=>{const point=p=>project(transform([p[0]-f.center[0],p[1]-f.center[1],surface*depth(p)],m));return 'M'+point(a).join(',')+'L'+point(b).join(',');};
      f.poly.forEach((a,i)=>{let b=f.poly[(i+1)%f.poly.length];const external=boundaryDistance([(a[0]+b[0])/2,(a[1]+b[1])/2])<1e-5;
        if(!external&&progress>=0){if(a[1]>cutoff&&b[1]>cutoff)return;if((a[1]>cutoff)!==(b[1]>cutoff)){const t=(cutoff-a[1])/(b[1]-a[1]),p=[lerp(a[0],b[0],t),cutoff];if(a[1]>cutoff)a=p;else b=p;}}paths.push(segment(a,b));});
      group.border.setAttribute('d',paths.join(' '));group.border.setAttribute('stroke-opacity',.45+f.hover*.45+energy*.2);
      group.join.setAttribute('d',f.cuts.map(([a,b])=>segment(a,b)).join(' '));group.join.setAttribute('stroke-opacity',joinGlow(f)*.65);
    });
  }

  /* 3. TIMELINE AND TOUCH ---------------------------------------------------
   * arrival -> intact (three taps) -> scattering -> broken -> completing.
   * A returning shard cannot be selected twice; each completion selects a new phrase.
   */
  function shardScale() { return 1; }
  function refreshMusicBounds() {const player=document.getElementById('music-player');musicRect=player&&player.getBoundingClientRect?player.getBoundingClientRect():null;}
  function musicBounds() {return musicRect;}
  function overlapsPlayer(point,radius=0) {
    const rect=musicBounds();return rect&&rect.width>0&&point[0]+radius>rect.left&&point[0]-radius<rect.right&&point[1]+radius>rect.top&&point[1]-radius<rect.bottom;
  }
  function contain(f,hard=false) {
    const z=clamp(f.position[2],-1.55,1.55),zoom=perspective(z);
    const margin=Math.min(width*.22,f.radius*scale*zoom)+12;
    const rect=musicBounds(),screenX=centerX+f.position[0]*scale*zoom;
    const overPlayer=rect&&rect.width>0&&screenX+margin>rect.left&&screenX-margin<rect.right;
    const floor=overPlayer?Math.min(height*.86,rect.top-10):height*.86;
    const top=10+margin,bottom=floor-margin;
    const minX=(margin-centerX)/(scale*zoom),maxX=(width-margin-centerX)/(scale*zoom);
    const minY=(centerY-bottom)/(scale*zoom),maxY=(centerY-top)/(scale*zoom);
    const bounds=[[minX,maxX],[minY,maxY],[-1.55,1.55]];
    for(let axis=0;axis<3;axis++) {
      const [lo,hi]=bounds[axis],value=f.position[axis];
      if(hard){f.position[axis]=clamp(value,lo,hi);continue;}
      const edge=clock-explodedAt<1.5?.48:.10;
      if(value<lo+edge)f.velocity[axis]+=(lo+edge-value)*12*physicsStep;
      if(value>hi-edge)f.velocity[axis]-=(value-hi+edge)*12*physicsStep;
      if(value<lo||value>hi){f.position[axis]=clamp(value,lo,hi);if((value<lo&&f.velocity[axis]<0)||(value>hi&&f.velocity[axis]>0))f.velocity[axis]*=.12;}
    }
  }
  let physicsStep=0;
  function releaseFragments() {
    const hit=transform([...impact,.12],rotation(tiltX,tiltY,0));
    fragments.forEach(f=>{
      f.position=home(f);f.start=f.position.slice();f.rotation=[0,0,0];
      const direction=[f.position[0]-hit[0]+(random()-.5)*.55,f.position[1]-hit[1]+(random()-.5)*.55,(random()-.5)*2.5];
      const length=Math.hypot(...direction)||1,speed=(1.7+random()*1.8)/Math.pow(.6+f.mass,.20);
      f.velocity=direction.map(v=>v/length*speed);
      f.omega=[(random()-.5)*2.5,(random()-.5)*3.3,(random()-.5)*2.0];
      f.drag=.65+random()*.85;f.angularDrag=.8+random()*.7;
      f.delay=reduced?0:.012+Math.hypot(f.center[0]-impact[0],f.center[1]-impact[1])*.055+random()*.05;
      f.bend=[(random()-.5)*.24,(random()-.5)*.24,.08+random()*.16];
      f.phase=random()*TAU;f.geometryScale=1;
      if(reduced){protectedOutline=outlineProjection();f.position=f.start.map((v,i)=>v+f.velocity[i]/f.drag*.65);contain(f,true);const safe=escapePoint(f);if(safe){const zoom=perspective(f.position[2]);f.position[0]=(safe[0]-centerX)/(scale*zoom);f.position[1]=(centerY-safe[1])/(scale*zoom);}f.scatter=f.position.slice();f.position=f.start.slice();f.velocity=[0,0,0];f.omega=[0,0,0];}
    });
  }
  function outlineProjection() {
    const orientation=rotation(tiltX,tiltY,0);
    return convexHull(outline.flatMap(p=>[-1,1].map(sign=>project(transform([...p,sign*depth(p)],orientation)))));
  }
  function regionDistance(point) {
    let best=Infinity;
    for(let i=0;i<protectedOutline.length;i++){const a=protectedOutline[i],b=protectedOutline[(i+1)%protectedOutline.length],dx=b[0]-a[0],dy=b[1]-a[1],t=clamp(((point[0]-a[0])*dx+(point[1]-a[1])*dy)/(dx*dx+dy*dy),0,1);best=Math.min(best,Math.hypot(point[0]-a[0]-dx*t,point[1]-a[1]-dy*t));}
    return inside(point,protectedOutline)?-best:best;
  }
  let avoidSeed=6731;
  const avoidRandom=()=>{avoidSeed=(avoidSeed*1664525+1013904223)>>>0;return avoidSeed/4294967296;};
  function clearanceRadius(f) {return f.radius*scale*perspective(Math.min(2.5,f.position[2]+f.radius))*.95+12;}
  function escapePoint(f) {
    const p=project(f.position),radius=clearanceRadius(f),margin=Math.min(radius,width*.23)+10;
    let best=null,score=Infinity;
    for(let i=0;i<260;i++) {
      const candidate=[lerp(margin,width-margin,avoidRandom()),lerp(margin,height*.86-margin,avoidRandom())];
      const distance=regionDistance(candidate);if(distance<radius+8||overlapsPlayer(candidate,radius+8))continue;
      const cost=Math.hypot(candidate[0]-p[0],candidate[1]-p[1])+avoidRandom()*30;
      if(cost<score){score=cost;best=candidate;}
    }
    return best;
  }
  function clearConstruction(f,dt) {
    if(!protectedOutline.length)return;
    const radius=clearanceRadius(f),p=project(f.position),distance=regionDistance(p);
    if(distance>=radius+6){f.escape=null;return;}
    const ramp=ease((clock-explodedAt-.25)/.85);
    if((!f.escape||regionDistance(f.escape)<radius+4)&&clock>=f.nextEscapeAt){f.escape=escapePoint(f);f.nextEscapeAt=clock+.3;}
    if(!f.escape){f.velocity[2]=lerp(f.velocity[2],-.8,(1-Math.exp(-dt*3))*ramp);return;}
    const dx=f.escape[0]-p[0],dy=p[1]-f.escape[1],length=Math.hypot(dx,dy)||1;
    const speed=clamp((radius-distance)/(scale*perspective(f.position[2]))*4.0,.95,3.2);
    const steering=(1-Math.exp(-dt*7.0))*ramp;
    f.velocity[0]=lerp(f.velocity[0],dx/length*speed,steering);f.velocity[1]=lerp(f.velocity[1],dy/length*speed,steering);
    // The target is discarded as soon as the piece clears the region. It is
    // never a parking position, a ring, or a prescribed final arrangement.
  }
  function simulateFragment(f,dt) {
    if(reduced||pointer&&pointer.fragment===f&&pointer.moved)return;
    physicsStep=dt;clearConstruction(f,dt);contain(f);
    const age=clock-stateTime,noise=Math.sin(clock*.35+f.phase);
    f.velocity[0]+=noise*.012*dt;f.velocity[1]+=Math.cos(clock*.3+f.phase)*.009*dt;
    const damping=Math.exp(-f.drag*dt),angular=Math.exp(-f.angularDrag*dt);
    for(let axis=0;axis<3;axis++) {
      f.velocity[axis]*=damping;f.position[axis]+=f.velocity[axis]*dt;
      f.rotation[axis]+=f.omega[axis]*dt;f.omega[axis]*=angular;
      // A minute residual drift keeps each fragment alive independently.
      f.rotation[axis]+=.018*Math.sin(clock*.28+f.phase+axis)*dt;
    }
    contain(f);f.scatter=f.position.slice();
  }
  function spawn(x,y,amount,force=1) {
    if(reduced)return;
    const max=Math.max(0,Math.min(250,Math.round(Number(CONFIG.PARTICLES)||0)));
    for(let i=0;i<Math.min(amount,max);i++) {const a=random()*TAU,s=(.35+random()*1.8)*force;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,maxLife:.7+random()*1.1,size:.5+random()*1.2});}
    if(particles.length>max*3)particles.splice(0,particles.length-max*3);
  }
  function ring(x,y,strength=1) {if(!reduced)rings.push({x,y,age:0,strength});}
  function breakHeart() {
    state='scattering';stateTime=clock;explodedAt=clock;message.classList.add('refreshing');message.classList.remove('visible');message.setAttribute('aria-hidden','true');pendingMessage=null;cycle++;orbitVelocityX=orbitVelocityY=0;targetTiltX=tiltX;targetTiltY=tiltY;releaseFragments();currentHover=-1;
    fragments.forEach(f=>{f.returned=false;f.returnAt=null;f.joinedAt=-100;f.escape=null;f.nextEscapeAt=0;f.button.hidden=true;});
    completionFlash=.22;spawn(centerX+impact[0]*scale,centerY-impact[1]*scale,CONFIG.PARTICLES,1.7);ring(centerX,centerY,.65);
    status.textContent=`O coração se dividiu em ${n} fragmentos. Toque em cada um para reconstruir.`;
  }
  function touchHeart(x=centerX,y=centerY) {
    if(state!=='intact'||clock<nextClickAt)return;
    nextClickAt=clock+.22;clicks++;completionFlash=.16;
    ring(x,y,.33);spawn(x,y,Math.round(CONFIG.PARTICLES*.13),.4);
    if(clicks===2){
      const view=rotation(tiltX,tiltY,0),surface=view[10]>=0?1:-1;
      let nearest=null,best=Infinity;
      for(const node of fractureNodes.values()){const p=project(transform([...node.p,surface*depth(node.p)],view)),distance=Math.hypot(p[0]-x,p[1]-y);if(distance<best){best=distance;nearest=node;}}
      impact=nearest?nearest.p.slice():[0,.1];prepareFractures();fractureStarted=clock;
    }
    // The final touch briefly holds tension before the release, rather than
    // instantaneously replacing the intact heart with a cloud of pieces.
    if(clicks>=3){state='tension';stateTime=clock;fractureStarted=Math.min(fractureStarted,clock-.45);}
  }
  function returnFragment(f) {
    if(state!=='broken'||f.returned||f.returnAt!==null)return;
    f.returnAt=clock;f.returnDuration=reduced?.24:CONFIG.RETURN_SECONDS+.12*Math.sqrt(f.mass)+random()*.12;f.returnScale=f.geometryScale;f.from=f.position.slice();f.fromVelocity=f.velocity.slice();f.fromRotation=f.rotation.slice();f.button.hidden=true;
    currentHover=-1;spawn(...f.screenCenter,5,.18);
    // When a keyboard user activates a piece, move focus to the next piece.
    if(document.activeElement===f.button) {const next=fragments.find(x=>!x.returned&&x.returnAt===null);if(next)next.button.focus({preventScroll:true});else scene.focus({preventScroll:true});}
  }
  function healingProgress() {
    if(state==='completing')return clamp((clock-stateTime-.12)/(reduced?.30:CONFIG.HEAL_SECONDS),0,1);
    return completedOnce&&state==='intact'&&clicks<2?1:-1;
  }
  function joinGlow(f) {
    const age=clock-f.joinedAt,duration=reduced?.25:CONFIG.JOIN_GLOW_SECONDS;
    return age>=0&&age<duration?Math.sin(age/duration*Math.PI)*Math.exp(-age*1.1):0;
  }
  function chooseMessage() {
    if(!phrases.length)return CONFIG.MESSAGE;
    if(phrases.length===1){lastMessageIndex=0;return phrases[0];}
    const hasLast=lastMessageIndex>=0;
    let index=Math.floor(Math.random()*(phrases.length-(hasLast?1:0)));
    if(hasLast&&index>=lastMessageIndex)index++;
    lastMessageIndex=index;return phrases[index];
  }
  function finish() {
    state='completing';stateTime=clock;completionFlash=.48;clicks=0;fractureStarted=-100;targets.style.pointerEvents='none';
    ring(centerX,centerY,.35);spawn(centerX,centerY,Math.round(CONFIG.PARTICLES*.2),.3);
    completedOnce=true;
    message.classList.remove('visible');
    message.classList.add('refreshing');
    pendingMessage={text:chooseMessage(),showAt:clock+.12+(reduced?.30:CONFIG.HEAL_SECONDS)+.2};
    status.textContent='O coração está inteiro.';
  }
  // Radial saturation gives every direction, including diagonals, the same
  // angular reach. No square corners and no hard mechanical stop.
  function limitTilt(x,y) {
    const radius=Math.hypot(x,y);if(!radius)return [0,0];
    const factor=MAX_TILT*Math.tanh(radius/MAX_TILT)/radius;
    return [x*factor,y*factor];
  }
  function tiltOrigin() {
    const radius=Math.hypot(tiltX,tiltY);if(!radius)return [0,0];
    const factor=MAX_TILT*Math.atanh(Math.min(.9999,radius/MAX_TILT))/radius;
    return [tiltX*factor,tiltY*factor];
  }
  const dragProgress=(t,k)=>{t=clamp(t,0,1);return(1-Math.exp(-k*t))/(1-Math.exp(-k));};
  function update(dt) {
    refreshMusicBounds();
    completionFlash=Math.max(0,completionFlash-dt*.45);
    if(pendingMessage&&clock>=pendingMessage.showAt){message.setAttribute('aria-hidden','false');message.textContent=pendingMessage.text;message.classList.remove('refreshing');message.classList.add('visible');pendingMessage=null;}
    const arrival=reduced?.45:CONFIG.ARRIVAL_SECONDS;
    if(state==='arrival'&&clock>=arrival){state='intact';stateTime=clock;}
    if(state==='tension'&&clock-stateTime>=(reduced?.1:.38))breakHeart();
    if(state==='completing'&&clock-stateTime>3.0){state='intact';stateTime=clock;nextClickAt=clock+.2;}
    const canOrbit=['intact','arrival','completing'].includes(state);
    if(canOrbit) {
      const holding=pointer&&pointer.orbit;
      if(!holding&&clock>=keyboardHoldUntil){targetTiltX=0;targetTiltY=0;}
      const smoothing=1-Math.exp(-dt*(holding?18:4.5));
      tiltX=lerp(tiltX,targetTiltX,smoothing);tiltY=lerp(tiltY,targetTiltY,smoothing);
    }
    updateDragStress();
    if(state==='scattering'||state==='broken')protectedOutline=outlineProjection();
    for(const f of fragments) {
      f.motionOpacity=1;f.hover=lerp(f.hover,currentHover===f.id?1:0,1-Math.exp(-dt*8));
      if(state==='scattering') {
        if(reduced){const raw=clamp((clock-stateTime)/.28,0,1),atEnd=raw>=.5;f.position=atEnd?f.scatter.slice():f.start.slice();f.motionOpacity=atEnd?ease((raw-.5)*2):1-ease(raw*2);}
        else if(clock-stateTime>=f.delay)simulateFragment(f,dt);
      } else if(state==='broken'&&!f.returned) {
        if(f.returnAt!==null) {
          const raw=clamp((clock-f.returnAt)/f.returnDuration,0,1),t=raw;
          const t2=t*t,t3=t2*t,t4=t3*t,t5=t4*t;
          const h=10*t3-15*t4+6*t5,v=t-6*t3+8*t4-3*t5,bow=16*t2*(1-t)*(1-t),target=home(f);
          f.position=f.from.map((value,i)=>value*(1-h)+target[i]*h+f.fromVelocity[i]*f.returnDuration*v+f.bend[i]*bow);
          f.rotation=f.fromRotation.map(value=>value*(1-h));
          if(reduced){const atEnd=t>=.5;f.position=atEnd?target:f.from.slice();f.rotation=[0,0,0];f.motionOpacity=atEnd?ease((t-.5)*2):1-ease(t*2);}
          if(raw>=1){f.returned=true;f.returnAt=null;f.joinedAt=clock;f.position=target;f.rotation=[0,0,0];f.velocity=[0,0,0];const left=fragments.filter(x=>!x.returned).length;status.textContent=left?`${left} fragmentos restantes.`:'Coração reconstruído.';}
        } else simulateFragment(f,dt);
      } else if(['intact','arrival','completing','tension'].includes(state)||f.returned) {
        f.geometryScale=1;f.position=home(f);f.rotation=[0,0,0];
      }
    }
    if(state==='scattering'&&clock-stateTime>=(reduced?.28:CONFIG.SCATTER_SECONDS)) {state='broken';stateTime=clock;targets.style.pointerEvents='auto';fragments.forEach(f=>f.button.hidden=false);}
    if(state==='broken'&&fragments.every(f=>f.returned))finish();
    for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx*dt*60;p.y+=p.vy*dt*60;p.vx*=Math.exp(-dt*1.5);p.vy*=Math.exp(-dt*1.5);p.life-=dt/p.maxLife;if(p.life<=0)particles.splice(i,1);}
    for(let i=rings.length-1;i>=0;i--){rings[i].age+=dt;if(rings[i].age>1.4)rings.splice(i,1);}
  }
  function hitFragment(x,y) {
    const active=fragments.filter(f=>!f.returned&&f.returnAt===null);
    const direct=active.filter(f=>inside([x,y],f.screenPoly)).sort((a,b)=>b.position[2]-a.position[2])[0];
    if(direct)return direct;
    let nearest=null,best=Infinity;active.forEach(f=>{const d=Math.hypot(x-f.screenCenter[0],y-f.screenCenter[1]);if(d<f.hitRadius&&d<best){nearest=f;best=d;}});return nearest;
  }
  function hitHeart(x,y) {return fragments.some(f=>inside([x,y],f.screenPoly));}
  scene.addEventListener('pointerdown',e=>{
    if(pointer||e.button>0)return;
    if(e.target.closest&&e.target.closest('.fragment-target'))return;
    const f=state==='broken'?hitFragment(e.clientX,e.clientY):null;
    pointer={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,time:e.timeStamp||0,tiltOrigin:tiltOrigin(),moved:false,fragment:f,orbit:['intact','completing'].includes(state)};
    orbitVelocityX=orbitVelocityY=0;targetTiltX=tiltX;targetTiltY=tiltY;
    if(scene.setPointerCapture)scene.setPointerCapture(e.pointerId);
  });
  scene.addEventListener('pointermove',e=>{
    if(pointer&&pointer.id===e.pointerId) {
      if(Math.hypot(e.clientX-pointer.x,e.clientY-pointer.y)>7)pointer.moved=true;
      if(pointer.moved&&pointer.orbit) {
        const sensitivity=2.4/Math.max(350,Math.min(width,height));
        const rawX=pointer.tiltOrigin[0]+(e.clientY-pointer.y)*sensitivity;
        const rawY=pointer.tiltOrigin[1]+(e.clientX-pointer.x)*sensitivity;
        [targetTiltX,targetTiltY]=limitTilt(rawX,rawY);
        scene.style.cursor='grabbing';
      }
      if(pointer.moved&&pointer.fragment&&state==='broken') {
        const f=pointer.fragment,zoom=perspective(f.position[2]);
        f.position=[(e.clientX-centerX)/(scale*zoom),(centerY-e.clientY)/(scale*zoom),f.position[2]];contain(f,true);f.velocity=[0,0,0];
      }
      pointer.lastX=e.clientX;pointer.lastY=e.clientY;pointer.time=e.timeStamp||0;
    }
    if(state==='broken'){const f=hitFragment(e.clientX,e.clientY);currentHover=f?f.id:-1;scene.style.cursor=f?'pointer':'default';}
    else if(!(pointer&&pointer.moved))scene.style.cursor=hitHeart(e.clientX,e.clientY)?'grab':'default';
  });
  scene.addEventListener('pointerup',e=>{
    if(!pointer||pointer.id!==e.pointerId)return;
    if(state==='broken'&&pointer.fragment)returnFragment(pointer.fragment);
    else if(!pointer.moved&&hitHeart(e.clientX,e.clientY))touchHeart(e.clientX,e.clientY);
    pointer=null;targetTiltX=targetTiltY=0;scene.style.cursor='grab';currentHover=-1;
  });
  const cancelPointer=()=>{pointer=null;currentHover=-1;orbitVelocityX=orbitVelocityY=0;targetTiltX=targetTiltY=0;};
  scene.addEventListener('pointercancel',cancelPointer);scene.addEventListener('pointerleave',()=>{if(!pointer)currentHover=-1;});
  scene.addEventListener('keydown',e=>{
    if(e.target!==scene)return;
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)&&['intact','completing'].includes(state)) {
      e.preventDefault();orbitVelocityX=orbitVelocityY=0;
      if(e.key==='ArrowLeft')targetTiltY-=.22;if(e.key==='ArrowRight')targetTiltY+=.22;
      if(e.key==='ArrowUp')targetTiltX-=.22;if(e.key==='ArrowDown')targetTiltX+=.22;[targetTiltX,targetTiltY]=limitTilt(targetTiltX,targetTiltY);keyboardHoldUntil=clock+.6;return;
    }
    if(e.key==='Enter'||e.key===' '){e.preventDefault();if(state==='intact')touchHeart();else if(state==='broken'){const f=fragments.find(x=>!x.returned&&x.returnAt===null);if(f)returnFragment(f);}}
  });
  const onMotionChange=e=>{reduced=e.matches;skyDirty=true;if(reduced){orbitVelocityX=orbitVelocityY=0;particles.length=rings.length=0;}};
  if(media.addEventListener)media.addEventListener('change',onMotionChange);

  /* 4. LIGHT AND ATMOSPHERE ------------------------------------------------
   * The decorative layer never receives clicks; only the actual shards do.
   */
  const dust=Array.from({length:35},()=>({x:random(),y:random(),a:.06+random()*.16,r:.3+random()*.55,phase:random()*TAU}));
  let skySeed=1073;
  const skyRandom=()=>{skySeed=(skySeed*1664525+1013904223)>>>0;return skySeed/4294967296;};
  const stars=Array.from({length:140},()=>({x:skyRandom(),y:skyRandom(),depth:.2+skyRandom()*.8,radius:.25+skyRandom()*.85,brightness:.15+skyRandom()*.55,phase:skyRandom()*TAU}));
  function drawSpace() {
    if(reduced&&!skyDirty)return;
    if(!skyDirty&&clock-lastSkyPaint<1/24)return;
    lastSkyPaint=clock;skyDirty=false;sky.clearRect(0,0,width,height);
    const time=reduced?0:clock;
    for(const star of stars){
      const driftX=reduced?0:Math.sin(time*.012+star.phase)*5*star.depth;
      const driftY=reduced?0:Math.cos(time*.009+star.phase)*4*star.depth;
      const x=star.x*width+driftX+tiltY*star.depth*6,y=star.y*height+driftY+tiltX*star.depth*6;
      const focus=Math.hypot((x-centerX)/width,(y-centerY)/height)<.19?.38:1;
      const twinkle=reduced?1:.78+.22*Math.sin(time*(.18+star.depth*.12)+star.phase);
      const alpha=star.brightness*twinkle*focus*(reduced?1:ease(clock/CONFIG.ARRIVAL_SECONDS));
      sky.fillStyle=`rgba(157,200,247,${alpha})`;sky.beginPath();sky.arc(x,y,star.radius*(.65+star.depth*.55),0,TAU);sky.fill();
      if(star.brightness>.64&&star.depth>.65){const halo=sky.createRadialGradient(x,y,0,x,y,4);halo.addColorStop(0,`rgba(76,143,239,${alpha*.25})`);halo.addColorStop(1,'rgba(30,90,190,0)');sky.fillStyle=halo;sky.fillRect(x-4,y-4,8,8);}
    }
  }
  function glow(x,y,r,alpha,color=palette.light) {
    if(r<=0||alpha<=0)return;
    const gradient=ctx.createRadialGradient(x,y,0,x,y,r);gradient.addColorStop(0,`rgba(${color},${alpha})`);gradient.addColorStop(.22,`rgba(${color},${alpha*.35})`);gradient.addColorStop(1,`rgba(${color},0)`);ctx.fillStyle=gradient;ctx.fillRect(x-r,y-r,r*2,r*2);
  }
  function drawLight(opacity,pulse,energy) {
    ctx.clearRect(0,0,width,height);
    glow(centerX,centerY,scale*2.35,opacity*(.10+energy*.1));
    dust.forEach(p=>{ctx.globalAlpha=opacity*p.a*(reduced?1:.75+.25*Math.sin(clock*.4+p.phase));ctx.fillStyle=CONFIG.COLORS.EDGE;ctx.beginPath();ctx.arc(p.x*width,p.y*height,p.r,0,TAU);ctx.fill();});ctx.globalAlpha=1;
    if(energy>0)glow(centerX,centerY,scale*.7,energy*.11);
    rings.forEach(r=>{
      const t=r.age/1.4,radius=scale*(.10+t*2.2);
      const wave=ctx.createRadialGradient(r.x,r.y,0,r.x,r.y,radius);
      const alpha=(1-t)*(1-t)*.18*r.strength;
      wave.addColorStop(0,`rgba(${palette.light},0)`);wave.addColorStop(.86,`rgba(${palette.light},0)`);wave.addColorStop(.96,`rgba(${palette.light},${alpha})`);wave.addColorStop(1,`rgba(${palette.light},0)`);
      ctx.fillStyle=wave;ctx.fillRect(r.x-radius,r.y-radius,radius*2,radius*2);
    });
    particles.forEach(p=>{ctx.fillStyle=`rgba(${palette.edge},${p.life*.65})`;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,TAU);ctx.fill();});
    const permanent=clicks>=2&&['intact','tension'].includes(state)&&fractureStarted>-99;
    const temporary=!permanent&&state==='intact'&&dragCrackLevel>.003&&dragRoot;
    if(permanent||temporary) {
      const progress=permanent?(reduced?1:clamp((clock-fractureStarted)/1.05,0,1)):dragCrackLevel;
      const tilt=rotation(tiltX,tiltY,0),strength=temporary?ease(dragCrackLevel/.18):1;
      for(const edge of fractureEdges) {
        const start=temporary?edge.dragStart:edge.start,duration=temporary?edge.dragDuration:edge.duration;
        if(start===undefined)continue;
        const growth=clamp((progress-start)/duration,0,1);if(!growth)continue;
        const surface=tilt[10]>=0?1:-1,from=temporary?edge.dragA:edge.a,to=temporary?edge.dragB:edge.b;
        const pa=from.p,pb=[lerp(pa[0],to.p[0],growth),lerp(pa[1],to.p[1],growth)];
        const a=project(transform([...pa,surface*(depth(pa)+.004)],tilt).map(v=>v*pulse)),b=project(transform([...pb,surface*(depth(pb)+.004)],tilt).map(v=>v*pulse));
        ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.lineWidth=.7;
        ctx.strokeStyle=`rgba(${palette.edge},${opacity*.42*strength})`;ctx.shadowColor=CONFIG.COLORS.LIGHT;ctx.shadowBlur=4;ctx.stroke();
        if(growth<1)glow(...b,scale*.035,.28*strength);
      }ctx.shadowBlur=0;
    }
  }

  function resize() {
    refreshMusicBounds();
    width=scene.clientWidth||innerWidth;height=scene.clientHeight||innerHeight;pixelRatio=Math.min(devicePixelRatio||1,CONFIG.MAX_PIXEL_RATIO,(width<=700||height<=450)?1.5:CONFIG.MAX_PIXEL_RATIO);
    [canvas,light].forEach(c=>{c.width=Math.round(width*pixelRatio);c.height=Math.round(height*pixelRatio);});ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
    const skyRatio=Math.min(pixelRatio,1.3);space.width=Math.round(width*skyRatio);space.height=Math.round(height*skyRatio);sky.setTransform(skyRatio,0,0,skyRatio,0,0);skyDirty=true;
    const portrait=width<=700&&height>450;
    const available=portrait&&musicRect?Math.min(height*.86,musicRect.top-24):height;
    scale=Math.min(width*(portrait?.29:.185),available*(portrait?.23:.245),240);
    centerX=height<=450?width*.65:width/2;
    centerY=portrait?available*.45:height*(height<=450?.40:completedOnce?.40:.445);
    if(portrait&&musicRect)scene.style.setProperty('--message-bottom',(height-musicRect.top+20)+'px');
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    if(state==='broken'||state==='scattering')fragments.forEach(f=>{contain(f,true);if(reduced)f.scatter=f.position.slice();});
  }
  let messageShift=0, lastPaint=-1, paintDelta=1/60;
  function render() {
    const duration=reduced?.45:CONFIG.ARRIVAL_SECONDS;
    const opacity=ease(clock/duration);
    const beat=clock*CONFIG.PULSE_BPM/60,phase=beat%1;
    const breathing=reduced?0:Math.exp(-Math.pow((phase-.18)*12,2))*.012+Math.exp(-Math.pow((phase-.39)*14,2))*.004;
    const arrivalScale=reduced?1:.93+.07*ease(clock/duration);
    const pulse=arrivalScale*(1+breathing+completionFlash*.012);
    const energy=completionFlash+(state==='tension'?.06:0);
    // Lift the heart gently as the message becomes visible; never overlap it.
    messageShift=lerp(messageShift,completedOnce?1:0,reduced?1:1-Math.exp(-1.5*(paintDelta||1/60)));
    const portrait=width<=700&&height>450;
    const available=portrait&&musicRect?Math.min(height*.86,musicRect.top-24):height;
    centerY=portrait?available*(.45-.045*messageShift):height*(height<=450?.40:.445-.045*messageShift);
    if(gl)drawGL(pulse,opacity,energy);else drawSVG(pulse,opacity,energy);
    drawSpace();drawLight(opacity,pulse,energy);
  }
  function frame(now) {
    const dt=previous===null?0:Math.min((now-previous)/1000,.045);previous=now;
    clock+=dt;update(dt);
    const interval=gl&&!reduced?1/60:1/30;
    if(clock-lastPaint>=interval-.002){paintDelta=lastPaint<0?1/60:clock-lastPaint;render();lastPaint=clock;}
    frameId=requestAnimationFrame(frame);
  }
  function schedule() {if(!frameId){previous=null;frameId=requestAnimationFrame(frame);}}
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frameId);frameId=0;previous=null;}else schedule();});
  window.addEventListener('resize',resize);
  if(window.visualViewport)window.visualViewport.addEventListener('resize',resize);
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(resize).observe(scene);
  initWebGL();resize();render();schedule();
})();
