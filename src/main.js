import './style.css';
import ambientTrack from '../assets/ambient-space.mp3';
import sunImage from '../assets/sun-v3.png';
import mercuryImage from '../assets/mercury.webp';
import venusImage from '../assets/venus.webp';
import earthImage from '../assets/earth-v2.png';
import marsImage from '../assets/mars.webp';
import jupiterImage from '../assets/jupiter.webp';
import saturnImage from '../assets/saturn.webp';
import uranusImage from '../assets/uranus.webp';
import neptuneImage from '../assets/neptune.webp';
import moonImage from '../assets/moon.png';
import halleyImage from '../assets/halley.png';

const images = {
  sun: sunImage,
  mercury: mercuryImage,
  venus: venusImage,
  earth: earthImage,
  mars: marsImage,
  jupiter: jupiterImage,
  saturn: saturnImage,
  uranus: uranusImage,
  neptune: neptuneImage,
  moon: moonImage,
  halley: halleyImage
};

const worlds = [
  {id:'sun',name:'太阳',en:'SUN',archive:'STELLAR',title:'恒星 · 光的源头',image:'sun',accent:'#ffb44a',desc:'它汇聚了太阳系 99.86% 的质量，也把光与热送往每一颗行星。',distance:'0 km',period:'约 25 天',temp:'5,500°C',moons:'—'},
  {id:'mercury',name:'水星',en:'MERCURY',title:'极昼与极夜',image:'mercury',accent:'#c2b5a3',desc:'离太阳最近的岩石行星。白昼炽热，长夜冰冷，布满古老撞击坑。',distance:'5,791 万 km',period:'88 天',temp:'167°C',moons:'0'},
  {id:'venus',name:'金星',en:'VENUS',title:'云层下的灼热',image:'venus',accent:'#d7a866',desc:'厚重云层包裹着失控的温室世界，它是太阳系表面最热的行星。',distance:'1.082 亿 km',period:'224.7 天',temp:'464°C',moons:'0'},
  {id:'earth',name:'地球',en:'EARTH',title:'蓝色家园',image:'earth',accent:'#73bde7',desc:'液态水、稳定大气与恰好的距离，让生命在这里拥有了时间。',distance:'1.496 亿 km',period:'365.25 天',temp:'15°C',moons:'1'},
  {id:'mars',name:'火星',en:'MARS',title:'红色荒原',image:'mars',accent:'#d56d45',desc:'氧化铁染红了大地，干涸河谷记录着一个更湿润的远古时代。',distance:'2.279 亿 km',period:'687 天',temp:'−63°C',moons:'2'},
  {id:'jupiter',name:'木星',en:'JUPITER',title:'风暴之王',image:'jupiter',accent:'#d4a170',desc:'最大的行星。持续数百年的风暴，在条纹状云带之间缓慢旋转。',distance:'7.785 亿 km',period:'11.86 年',temp:'−110°C',moons:'95'},
  {id:'saturn',name:'土星',en:'SATURN',title:'环的世界',image:'saturn',accent:'#e0c890',desc:'无数冰粒与岩屑组成壮丽光环，在引力中排列成极薄的唱片。',distance:'14.34 亿 km',period:'29.45 年',temp:'−140°C',moons:'146'},
  {id:'uranus',name:'天王星',en:'URANUS',title:'侧躺的冰巨星',image:'uranus',accent:'#9be0e8',desc:'它几乎横躺着绕太阳公转，一季可以延续二十多年。',distance:'28.71 亿 km',period:'84 年',temp:'−195°C',moons:'28'},
  {id:'neptune',name:'海王星',en:'NEPTUNE',title:'日光的边界',image:'neptune',accent:'#5f8ee6',desc:'阳光抵达这里需要四小时，深蓝大气中刮着太阳系最快的风。',distance:'44.95 亿 km',period:'164.8 年',temp:'−200°C',moons:'16'},
  {id:'moon',name:'月球',en:'MOON',archive:'SATELLITE',title:'潮汐的伙伴',image:'moon',accent:'#d7d9dc',desc:'它是地球唯一的天然卫星，布满撞击坑的表面保存着太阳系早期的痕迹。',distance:'约 1.496 亿 km',period:'27.3 天',temp:'−53°C',moons:'0'},
  {id:'halley',name:'哈雷彗星',en:'HALLEY',archive:'COMET',title:'归来的长尾访客',image:'halley',accent:'#9edfff',desc:'冰与尘埃组成的古老彗核每隔约七十五年归来，接近太阳时展开明亮长尾。',distance:'0.586–35.1 AU',period:'约 75.3 年',temp:'变化剧烈',moons:'—'}
];

worlds.forEach(world=>{ if(!world.archive) world.archive='PLANETARY'; });

const details={sun:['恒星','太阳系中心','持续观测'],mercury:['岩石行星','内太阳系','信使号'],venus:['岩石行星','内太阳系','多国探测'],earth:['岩石行星','内太阳系','人类家园'],mars:['岩石行星','内太阳系','火星车'],jupiter:['气态巨行星','外太阳系','朱诺号'],saturn:['气态巨行星','外太阳系','卡西尼号'],uranus:['冰巨行星','外太阳系','旅行者2号'],neptune:['冰巨行星','外太阳系','旅行者2号'],moon:['天然卫星','地月系统','载人登月'],halley:['周期彗星','太阳系小天体','多探测器飞越']};

document.querySelector('#app').innerHTML = `<main class="archive" style="--accent:${worlds[3].accent}">
  <div class="scene" aria-live="polite"><div class="scene-a"></div><div class="scene-b"></div><div class="grain"></div></div>
  <header><a class="brand" href="#"><span>日心志</span><small>SOLAR ARCHIVE</small></a><button class="sound" aria-label="开启声音" aria-pressed="false"><i></i><span>开启声音</span></button></header>
  <nav class="world-nav" aria-label="太阳系成员" role="tablist">${worlds.map((w,i)=>`<button class="${i===9?'extended':''}" role="tab" aria-selected="${i===3}" data-index="${i}"><i style="--c:${w.accent}"></i><span>${w.name}</span></button>`).join('')}</nav>
  <section class="identity"><small class="catalog">SOL / <b>04</b> · <span>PLANETARY</span> ARCHIVE</small><h1><span>地球</span><em> · 蓝色家园</em></h1><p>液态水、稳定大气与恰好的距离，让生命在这里拥有了时间。</p></section>
  <aside class="data-panel"><div class="panel-head"><div><small>SELECTED OBJECT</small><strong>地球</strong></div><b>04</b></div><p class="panel-desc">液态水、稳定大气与恰好的距离，让生命在这里拥有了时间。</p><dl><div><dt>距太阳</dt><dd data-key="distance">1.496 亿 km</dd></div><div><dt>公转周期</dt><dd data-key="period">365.25 天</dd></div><div><dt>平均温度</dt><dd data-key="temp">15°C</dd></div><div><dt>已知卫星</dt><dd data-key="moons">1</dd></div></dl><button class="more">展开天体档案 <span>＋</span></button></aside>
  <div class="progress"><span>04</span><div><i></i></div><b>${String(worlds.length).padStart(2,'0')}</b></div>
  <button class="prev" aria-label="上一颗行星">←</button><button class="next" aria-label="下一颗行星">→</button>
  <p class="swipe-hint">使用方向键 · 探索太阳系</p>
  <div class="detail-sheet" hidden><div><span>PLANETARY NOTE</span><button aria-label="关闭">×</button></div><h2>地球</h2><p></p><ul><li>类型 <b>岩石行星</b></li><li>位置 <b>内太阳系</b></li><li>探索 <b>人类家园</b></li></ul></div>
</main>`;

let active=3, front='a', touchX=0;
const root=document.querySelector('.archive'), a=document.querySelector('.scene-a'), b=document.querySelector('.scene-b');
root.dataset.world=worlds[active].id;
const setWorld=(index,dir=1)=>{active=(index+worlds.length)%worlds.length; const w=worlds[active], incoming=front==='a'?b:a, outgoing=front==='a'?a:b, panel=document.querySelector('.data-panel'); incoming.style.backgroundImage=`url("${images[w.image]}")`; incoming.className=`scene-${front==='a'?'b':'a'} incoming ${dir<0?'reverse':''}`; outgoing.className=`scene-${front} outgoing ${dir<0?'reverse':''}`; panel.classList.add('is-updating'); setTimeout(()=>{outgoing.className=`scene-${front}`; incoming.className=`scene-${front==='a'?'b':'a'} active`;front=front==='a'?'b':'a'},720);
 root.style.setProperty('--accent',w.accent); root.dataset.world=w.id; document.querySelectorAll('.world-nav button').forEach((x,i)=>x.setAttribute('aria-selected',i===active)); document.querySelector('.world-nav button[aria-selected=true]').scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
 document.querySelector('.catalog b').textContent=String(active+1).padStart(2,'0'); document.querySelector('.catalog span').textContent=w.archive; document.querySelector('.identity h1 span').textContent=w.name; document.querySelector('.identity h1 em').textContent=` · ${w.title}`; document.querySelector('.identity p').textContent=w.desc; document.querySelector('.panel-head strong').textContent=w.name; document.querySelector('.panel-head>b').textContent=String(active+1).padStart(2,'0'); document.querySelector('.panel-desc').textContent=w.desc; for(const key of ['distance','period','temp','moons'])document.querySelector(`[data-key=${key}]`).textContent=w[key]; document.querySelector('.progress span').textContent=String(active+1).padStart(2,'0'); document.querySelector('.progress i').style.width=`${(active+1)/worlds.length*100}%`; document.querySelector('.detail-sheet>div>span').textContent=`${w.archive} NOTE`; document.querySelector('.detail-sheet h2').textContent=w.name; document.querySelector('.detail-sheet>p').textContent=w.desc; document.querySelectorAll('.detail-sheet li b').forEach((el,i)=>el.textContent=details[w.id][i]); requestAnimationFrame(()=>requestAnimationFrame(()=>panel.classList.remove('is-updating')));
};
a.style.backgroundImage=`url("${images[worlds[3].image]}")`;a.classList.add('active');
document.querySelectorAll('.world-nav button').forEach(btn=>btn.addEventListener('click',()=>{const i=+btn.dataset.index;setWorld(i,i>active?1:-1)}));
document.querySelector('.prev').onclick=()=>setWorld(active-1,-1);document.querySelector('.next').onclick=()=>setWorld(active+1,1);
root.addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true});root.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>55)setWorld(active+(d<0?1:-1),d<0?1:-1)},{passive:true});
const sheet=document.querySelector('.detail-sheet');document.querySelector('.more').onclick=()=>{sheet.hidden=false;requestAnimationFrame(()=>sheet.classList.add('open'))};sheet.querySelector('button').onclick=()=>{sheet.classList.remove('open');setTimeout(()=>sheet.hidden=true,350)};
const ambientAudio=new Audio(ambientTrack);ambientAudio.loop=true;ambientAudio.preload='auto';ambientAudio.volume=0;window.__ambientAudio=ambientAudio;
let volumeFade;
const fadeAudio=(target,duration=700)=>{clearInterval(volumeFade);const start=ambientAudio.volume,steps=20,delta=(target-start)/steps;let step=0;volumeFade=setInterval(()=>{step++;ambientAudio.volume=Math.max(0,Math.min(1,start+delta*step));if(step>=steps){clearInterval(volumeFade);if(target===0)ambientAudio.pause()}},duration/steps)};
document.querySelector('.sound').onclick=async e=>{const button=e.currentTarget,on=button.getAttribute('aria-pressed')==='true';if(on){clearInterval(volumeFade);ambientAudio.volume=0;ambientAudio.pause()}else{try{await ambientAudio.play();fadeAudio(.34)}catch{button.dataset.audioState='blocked';return}}button.setAttribute('aria-pressed',String(!on));button.setAttribute('aria-label',on?'开启声音':'关闭声音');button.querySelector('span').textContent=on?'开启声音':'关闭声音';button.dataset.audioState=on?'paused':'playing'};
window.addEventListener('keydown',e=>{if(e.repeat)return;const map={ArrowRight:document.querySelector('.next'),ArrowLeft:document.querySelector('.prev')},btn=map[e.key];if(!btn)return;e.preventDefault();btn.classList.add('pressed');setTimeout(()=>btn.classList.remove('pressed'),180);setWorld(active+(e.key==='ArrowRight'?1:-1),e.key==='ArrowRight'?1:-1)});
