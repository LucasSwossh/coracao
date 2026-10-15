// Local tracks supplied for this experience. Audio loads only after interaction.
const PLAYLIST = [
  {
    "id": 4,
    "title": "Ivy",
    "artist": "Frank Ocean",
    "src": "track-04.mp3",
    "duration": 249.29,
    "bytes": 4986336
  },
  {
    "id": 5,
    "title": "Nights",
    "artist": "Frank Ocean",
    "src": "track-05.mp3",
    "duration": 307.23,
    "bytes": 6145130
  },
  {
    "id": 6,
    "title": "Pink + White",
    "artist": "Frank Ocean",
    "src": "track-06.mp3",
    "duration": 184.61,
    "bytes": 3692761
  },
  {
    "id": 7,
    "title": "Evergreen (You Didn’t Deserve Me At All)",
    "artist": "Omar Apollo",
    "src": "track-07.mp3",
    "duration": 220.08,
    "bytes": 4402277
  }
];

(() => {
  'use strict';
  const player=document.getElementById('music-player'),audio=document.getElementById('soundtrack');
  const title=document.getElementById('track-title'),artist=document.getElementById('track-artist');
  const play=document.getElementById('track-play'),prev=document.getElementById('track-prev'),next=document.getElementById('track-next');
  const seek=document.getElementById('track-seek'),elapsed=document.getElementById('track-elapsed'),duration=document.getElementById('track-duration');
  const volume=document.getElementById('track-volume'),expand=document.getElementById('player-expand'),drawer=document.getElementById('player-drawer'),list=document.getElementById('track-list');
  const notice=document.getElementById('player-notice'),announcement=document.getElementById('player-announcement');
  const svg=path=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  const icons={play:svg('<path d="m9 5 11 7-11 7Z" fill="currentColor" stroke="none"/>'),pause:svg('<path d="M8 5v14M16 5v14" stroke-width="3"/>'),prev:svg('<path d="M5 5v14M19 6 8 12l11 6Z" fill="currentColor"/>'),next:svg('<path d="M19 5v14M5 6l11 6-11 6Z" fill="currentColor"/>'),list:svg('<path d="M9 6h12M9 12h12M9 18h12M3 6h.1M3 12h.1M3 18h.1"/>')};
  let index=0,loadedIndex=-1,request=0,seeking=false,pendingSeek=null;
  const rows=[];
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const format=value=>{const seconds=Math.max(0,Math.floor(Number(value)||0));return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;};
  function total(){return loadedIndex===index&&Number.isFinite(audio.duration)&&audio.duration>0?audio.duration:PLAYLIST[index].duration;}
  function report(text=''){notice.textContent=text;notice.hidden=!text;}
  function renderTime(position){
    const time=position??(loadedIndex===index?Number(audio.currentTime)||0:0),end=total();
    elapsed.textContent=format(time);duration.textContent=format(end);
    if(!seeking){seek.value=String(Math.round(clamp(time/(end||1),0,1)*1000));seek.style.setProperty('--progress',`${Number(seek.value)/10}%`);seek.setAttribute('aria-valuetext',`${format(time)} de ${format(end)}`);}
  }
  function renderPlayback(){
    const active=!audio.paused;
    play.innerHTML=active?icons.pause:icons.play;play.setAttribute('aria-label',active?'Pausar música':'Reproduzir música');play.setAttribute('aria-pressed',String(active));player.classList.toggle('is-playing',active);
  }
  function renderTrack(){
    const track=PLAYLIST[index];title.textContent=track.title;title.title=track.title;artist.textContent=track.artist;artist.title=track.artist;
    rows.forEach((row,i)=>{row.setAttribute('aria-current',String(i===index));});
    renderTime(0);renderPlayback();
  }
  function loadCurrent(){
    if(loadedIndex===index)return;
    audio.preload='none';audio.src=PLAYLIST[index].src;loadedIndex=index;audio.load();
  }
  async function start(){
    const token=++request;loadCurrent();report();player.classList.add('is-loading');
    try{await audio.play();}
    catch(error){if(token===request&&error.name!=='AbortError')report(error.name==='NotAllowedError'?'Toque em reproduzir para iniciar.':'Não foi possível tocar esta faixa. Tente novamente ou avance.');}
    finally{if(token===request){player.classList.remove('is-loading');renderPlayback();}}
  }
  function pause(){request++;audio.pause();player.classList.remove('is-loading');renderPlayback();}
  function selectTrack(nextIndex,autoplay=false){
    request++;audio.pause();index=(nextIndex+PLAYLIST.length)%PLAYLIST.length;loadedIndex=-1;pendingSeek=null;seeking=false;
    audio.removeAttribute('src');audio.preload='none';audio.load();report();renderTrack();announcement.textContent=`${PLAYLIST[index].title} — ${PLAYLIST[index].artist}`;
    if(autoplay)start();
  }
  function setDrawer(open,focus=false){drawer.hidden=!open;expand.setAttribute('aria-expanded',String(open));expand.setAttribute('aria-label',open?'Fechar lista de músicas e volume':'Abrir lista de músicas e volume');if(open&&focus)rows[index].focus({preventScroll:true});}
  PLAYLIST.forEach((track,i)=>{
    const row=document.createElement('button');row.type='button';row.className='track-item';row.setAttribute('aria-label',`${track.title}, ${track.artist}, ${format(track.duration)}`);
    const number=document.createElement('span');number.className='track-number';number.textContent=String(i+1).padStart(2,'0');
    const copy=document.createElement('span');copy.className='track-item-copy';const name=document.createElement('span');name.textContent=track.title;const who=document.createElement('small');who.textContent=track.artist;copy.appendChild(name);copy.appendChild(who);
    const time=document.createElement('span');time.className='track-item-time';time.textContent=format(track.duration);row.appendChild(number);row.appendChild(copy);row.appendChild(time);list.appendChild(row);rows.push(row);
    row.addEventListener('click',()=>selectTrack(i,true));
  });
  prev.innerHTML=icons.prev;next.innerHTML=icons.next;expand.innerHTML=icons.list;
  document.getElementById('track-count').textContent=`${PLAYLIST.length} faixas`;
  play.addEventListener('click',()=>audio.paused?start():pause());
  prev.addEventListener('click',()=>{if(loadedIndex===index&&audio.currentTime>3){audio.currentTime=0;renderTime(0);}else selectTrack(index-1,!audio.paused);});
  next.addEventListener('click',()=>selectTrack(index+1,!audio.paused));
  expand.addEventListener('click',e=>setDrawer(drawer.hidden,e.detail===0));
  document.addEventListener('pointerdown',e=>{if(!player.contains(e.target))setDrawer(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!drawer.hidden){setDrawer(false);expand.focus({preventScroll:true});}});
  seek.addEventListener('input',()=>{seeking=true;const target=Number(seek.value)/1000*total();elapsed.textContent=format(target);seek.style.setProperty('--progress',`${Number(seek.value)/10}%`);seek.setAttribute('aria-valuetext',`${format(target)} de ${format(total())}`);});
  seek.addEventListener('change',()=>{
    pendingSeek=clamp(Number(seek.value)/1000*total(),0,total());loadCurrent();
    if(audio.readyState>=1){try{audio.currentTime=pendingSeek;pendingSeek=null;}catch{}}
    else{audio.preload='metadata';audio.load();}
    seeking=false;if(pendingSeek===null)renderTime();
  });
  seek.addEventListener('pointercancel',()=>{seeking=false;renderTime();});
  volume.addEventListener('input',()=>{
    const level=clamp(Number(volume.value),0,1);audio.volume=level;volume.setAttribute('aria-valuetext',`${Math.round(level*100)}%`);
    if(Math.abs(audio.volume-level)>.05)report('Ajuste o volume pelos botões do seu aparelho.');
  });
  audio.addEventListener('loadedmetadata',()=>{if(pendingSeek!==null){try{audio.currentTime=clamp(pendingSeek,0,total());pendingSeek=null;}catch{}}renderTime();});
  audio.addEventListener('timeupdate',()=>{if(!seeking)renderTime();});
  audio.addEventListener('durationchange',()=>{if(!seeking)renderTime();});
  audio.addEventListener('playing',()=>{player.classList.remove('is-loading');report();renderPlayback();});
  audio.addEventListener('pause',renderPlayback);
  audio.addEventListener('waiting',()=>player.classList.add('is-loading'));
  audio.addEventListener('ended',()=>selectTrack(index+1,true));
  audio.addEventListener('error',()=>{player.classList.remove('is-loading');if(loadedIndex===index)report('Não foi possível carregar esta faixa. Você pode tentar a próxima.');renderPlayback();});
  audio.volume=.22;audio.preload='none';volume.setAttribute('aria-valuetext','22%');renderTrack();
})();
