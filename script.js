(function(){
function $(i){return document.getElementById(i)}
var C=["#e5484d","#f5821f","#f7c92b","#3fae5a","#2a8bd6","#4b4fc4","#8e4ec6"];
var arcs=$("arcs"),NS="http://www.w3.org/2000/svg";
C.forEach(function(c,i){
  var r=168-i*13,p=document.createElementNS(NS,"path");
  p.setAttribute("d","M"+(200-r)+" 205A"+r+" "+r+" 0 0 1 "+(200+r)+" 205");
  p.setAttribute("pathLength","100");p.setAttribute("stroke",c);p.setAttribute("class","arc");arcs.appendChild(p)
});
var A=arcs.children;

var P=["Pernyataan umum","Deretan penjelas","Simpulan"];
var lessonSlides=[
  {title:"Apa Itu Teks Eksplanasi?",body:["Teks eksplanasi adalah teks yang menjelaskan proses terjadinya suatu peristiwa atau fenomena.","Fenomena yang dibahas dapat berupa kejadian alam, sosial, budaya, maupun ilmu pengetahuan."]},
  {title:"Apa Tujuannya?",body:["Teks eksplanasi membantu pembaca memahami bagaimana dan mengapa suatu peristiwa terjadi.","Penjelasannya disusun berdasarkan fakta, bukan sekadar pendapat atau cerita khayalan."]},
  {title:"Bagaimana Strukturnya?",items:["Pernyataan umum: mengenalkan fenomena yang akan dijelaskan.","Deretan penjelas: menguraikan urutan proses atau hubungan sebab-akibat.","Simpulan: merangkum proses atau menegaskan kembali penjelasan."]},
  {title:"Ciri Kebahasaannya",items:["Menggunakan kata hubung sebab-akibat, seperti karena, sehingga, dan akibatnya.","Menggunakan kata hubung urutan waktu, seperti lalu, kemudian, dan setelah itu.","Memakai istilah yang sesuai dengan fenomena serta menyampaikan fakta."]},
  {title:"Siap Merakit Teks?",body:["Sekarang, gunakan pemahamanmu untuk menyusun teks eksplanasi tentang proses terbentuknya pelangi.","Pilih kalimat yang tepat pada setiap langkah. Jawabanmu akan membentuk teks yang utuh."]}
];
var S=[
 {p:0,g:"Buka teksmu dengan kalimat yang memperkenalkan pelangi.",o:[
  ["Pelangi adalah fenomena alam berupa lengkung warna yang sering tampak di langit setelah hujan.",1,"Kalimat ini memperkenalkan fenomena secara umum."],
  ["Pelangi pasti menjadi pemandangan paling indah di dunia.",0,"Ini pendapat, bukan fakta yang bisa dibuktikan."],
  ["Jadi, pelangi terjadi karena sinar matahari bertemu tetes air.",0,"Kata “Jadi” menandakan simpulan, bukan pembuka."]]},
 {p:1,g:"Jelaskan awal terbentuknya pelangi.",o:[
  ["Pelangi terbentuk ketika sinar matahari mengenai tetes-tetes air hujan yang masih melayang di udara.",1,"Ini penjelasan awal proses yang berdasarkan fakta."],
  ["Aku suka melihat pelangi bersama teman-temanku.",0,"Ini pengalaman pribadi, bukan penjelasan proses."],
  ["Pelangi terbentuk karena ada peri yang melukis langit.",0,"Ini imajinasi, bukan fakta ilmiah."]]},
 {p:1,g:"Lanjutkan: apa yang terjadi pada sinar di dalam tetes air?",o:[
  ["Sinar matahari yang masuk ke tetes air dibiaskan, sehingga arah rambatnya berubah.",1,"Ada hubungan sebab-akibat dengan kata hubung “sehingga”."],
  ["Akhirnya, warna-warna itu tampak sebagai pelangi di langit.",0,"Ini hasil akhir proses, jadi belum waktunya ditulis."],
  ["Pembiasan adalah pelajaran yang sangat membosankan.",0,"Ini pendapat pribadi, bukan fakta."]]},
 {p:1,g:"Lanjutkan proses berikutnya dengan kata hubung urutan waktu.",o:[
  ["Setelah itu, cahaya dipantulkan oleh bagian dalam tetes air dan dibiaskan lagi saat keluar.",1,"“Setelah itu” menunjukkan urutan tahap proses."],
  ["Cahaya putih hanya terdiri dari satu warna saja.",0,"Ini salah. Cahaya putih terdiri dari banyak warna."],
  ["Sebaiknya kita tidak keluar rumah saat hujan.",0,"Ini saran, tidak berhubungan dengan proses pelangi."]]},
 {p:1,g:"Jelaskan akibat dari proses tadi.",o:[
  ["Akibatnya, cahaya putih terurai menjadi spektrum warna yang kita kenal sebagai pelangi.",1,"Kata “Akibatnya” menyatakan hasil dari proses sebelumnya."],
  ["Akibatnya, semua cahaya berubah menjadi hitam.",0,"Ini tidak sesuai fakta."],
  ["Warna pelangi adalah warna favoritku.",0,"Ini pendapat pribadi."]]},
 {p:1,g:"Tambahkan fakta tentang cara melihat pelangi dengan jelas.",o:[
  ["Pelangi tampak jelas jika kita membelakangi matahari dan menghadap ke arah hujan.",1,"Ini fakta yang bisa dibuktikan."],
  ["Pelangi hanya bisa dilihat dari bawah tanah.",0,"Ini tidak sesuai kenyataan."],
  ["Sungguh menakjubkan, pasti semua orang setuju.",0,"Ini pendapat, bukan fakta."]]},
 {p:2,g:"Tutup teksmu dengan simpulan.",o:[
  ["Jadi, pelangi terbentuk karena sinar matahari dibiaskan, dipantulkan, dan diuraikan oleh tetes air hujan menjadi spektrum warna.",1,"Kata “Jadi” merangkum seluruh proses."],
  ["Pelangi adalah fenomena alam yang sering tampak setelah hujan.",0,"Kalimat ini cocok sebagai pembuka, bukan penutup."],
  ["Pelangi memang paling bagus dilihat sambil makan es krim.",0,"Ini pendapat pribadi."]]}
];
var i,stars,first,built;
function shuffle(a){for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1)),t=a[k];a[k]=a[j];a[j]=t}return a}
function setStars(){$("stars").textContent="⭐ "+stars}
function start(){
  i=0;stars=0;built=[];setStars();
  for(var k=0;k<A.length;k++)A[k].setAttribute("class","arc");
  $("txt").innerHTML='<p class="placeholder">Kalimat yang kamu pilih akan tersusun di sini.</p>';
  $("done").hidden=true;$("play").hidden=false;render()
}
function render(){
  var s=S[i];first=true;
  $("step").textContent="Langkah "+(i+1)+" dari "+S.length+": "+P[s.p];
  $("goal").textContent=s.g;$("fb").textContent="";$("fb").className="fb";$("nx").hidden=true;
  var box=$("opts");box.innerHTML="";
  shuffle(s.o.slice()).forEach(function(o){
    var b=document.createElement("button");b.className="opt";b.textContent=o[0];
    b.onclick=function(){
      if(!$("nx").hidden)return;
      if(o[1]){
        b.className="opt y";$("fb").textContent="Benar! "+o[2];$("fb").className="fb good";
        if(first){stars++;setStars()}
        A[i].setAttribute("class","arc on");
        built.push([o[0],s.p]);paint();
        box.querySelectorAll("button").forEach(function(x){x.disabled=true});
        $("nx").textContent=(i===S.length-1)?"Selesai":"Lanjut";$("nx").hidden=false;$("nx").focus()
      }else{
        first=false;b.className="opt x";b.disabled=true;$("fb").textContent="Belum tepat. "+o[2];$("fb").className="fb bad"
      }
    };
    box.appendChild(b)
  })
}
function paint(){
  var p=document.createElement("p");
  built.forEach(function(b){var sp=document.createElement("span");sp.className="p"+b[1];sp.textContent=b[0];p.appendChild(sp)});
  $("txt").innerHTML="";$("txt").appendChild(p);$("txt").parentNode.scrollTop=1e5
}
$("nx").onclick=function(){
  i++;
  if(i>=S.length){
    $("play").hidden=true;$("done").hidden=false;
    $("rank").textContent=stars===7?"🌈 Penulis Pelangi Sempurna!":stars>=5?"🌈 Penulis Hebat!":"🌦️ Penulis Pemula, ayo coba lagi!";
    $("score").textContent="Kamu benar pada percobaan pertama di "+stars+" dari "+S.length+" langkah. Teks eksplanasimu sudah lengkap di bawah.";
    return
  }
  render()
};
$("again").onclick=start;
function view(g){$("menu").hidden=g;$("game").hidden=!g;$("bmenu").hidden=!g;$("bmenu").classList.remove("lesson-menu");window.scrollTo(0,0)}
var lessonIndex=0;
function renderLesson(){
  var slide=lessonSlides[lessonIndex],body=$("lesson-body");
  $("lesson-title").textContent=slide.title;
  $("lesson-count").textContent="0"+(lessonIndex+1)+" / 0"+lessonSlides.length;
  $("lesson-progress").style.width=((lessonIndex+1)/lessonSlides.length*100)+"%";
  body.innerHTML="";
  (slide.body||[]).forEach(function(text){var p=document.createElement("p");p.textContent=text;body.appendChild(p)});
  if(slide.items){
    var list=document.createElement("ul");
    slide.items.forEach(function(text){var item=document.createElement("li");item.textContent=text;list.appendChild(item)});
    body.appendChild(list)
  }
  $("lesson-next").innerHTML=lessonIndex===lessonSlides.length-1?'Mulai Merakit <span aria-hidden="true">→</span>':'Klik untuk lanjut <span aria-hidden="true">→</span>';
}
function advanceLesson(){
  if(lessonIndex<lessonSlides.length-1){lessonIndex++;renderLesson();return}
  $("lesson").hidden=true;start();view(true)
}
$("start").onclick=function(){
  lessonIndex=0;renderLesson();$("menu").hidden=true;$("lesson").hidden=false;$("game").hidden=true;$("bmenu").hidden=false;$("bmenu").classList.add("lesson-menu");window.scrollTo(0,0);
  try{if(document.fullscreenEnabled&&!document.fullscreenElement)document.documentElement.requestFullscreen().catch(function(){})}catch(e){}
};
$("lesson-next").onclick=advanceLesson;
$("lesson").addEventListener("click",function(e){if(e.target.closest("button"))return;advanceLesson()});
$("lesson").addEventListener("keydown",function(e){if(e.target.closest("button"))return;if(e.key==="Enter"||e.key===" "){e.preventDefault();advanceLesson()}});
$("bmenu").onclick=function(){view(false)};
var about=$("about");
function closeAbout(){$("about-open").focus();about.hidden=true}
$("about-open").onclick=function(){about.hidden=false;$("about-close").focus()};
$("about-close").onclick=closeAbout;
$("about-dismiss").onclick=closeAbout;
about.onclick=function(e){if(e.target===about)closeAbout()};
var study=$("study"),studyBook=$("study-book"),studyStatus=$("study-status"),studyDocument=null,studyLoading=null,studySpread=0,studyTurning=false,studyRenderId=0,studyResizeTimer;
var studyPages={
  left:$("study-left-canvas"),right:$("study-right-canvas"),
  front:$("study-turn-front"),back:$("study-turn-back")
};
function loadPdfLibrary(){
  if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);
  if(!studyLoading){
    studyLoading=new Promise(function(resolve,reject){
      var script=document.createElement("script");
      script.src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.onload=function(){
        if(!window.pdfjsLib){reject(new Error("Pustaka pembaca PDF tidak tersedia."));return}
        window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(window.pdfjsLib)
      };
      script.onerror=function(){reject(new Error("Pustaka pembaca PDF gagal dimuat."))};
      document.head.appendChild(script)
    }).catch(function(error){studyLoading=null;throw error})
  }
  return studyLoading
}
function clearCanvas(canvas){
  var context=canvas.getContext("2d");
  canvas.width=1;canvas.height=1;canvas.style.width="";canvas.style.height="";
  context.clearRect(0,0,1,1)
}
function drawStudyPage(pageNumber,canvas,renderId){
  if(!pageNumber||pageNumber>studyDocument.numPages){clearCanvas(canvas);return Promise.resolve()}
  return studyDocument.getPage(pageNumber).then(function(page){
    if(renderId!==studyRenderId)return;
    var surface=canvas.parentElement;
    var base=page.getViewport({scale:1});
    var fit=Math.min((surface.clientWidth-32)/base.width,(surface.clientHeight-32)/base.height);
    if(!isFinite(fit)||fit<=0)fit=1;
    var ratio=Math.min(window.devicePixelRatio||1,2);
    var viewport=page.getViewport({scale:fit*ratio});
    canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
    canvas.style.width=(viewport.width/ratio)+"px";canvas.style.height=(viewport.height/ratio)+"px";
    var task=page.render({canvasContext:canvas.getContext("2d"),viewport:viewport});
    return task.promise
  })
}
function updateStudyControls(){
  var total=Math.ceil(studyDocument.numPages/2),first=studySpread*2+1,last=Math.min(first+1,studyDocument.numPages);
  $("study-page-indicator").textContent=first+(last>first?"-"+last:"")+" / "+studyDocument.numPages;
  $("study-prev").disabled=studyTurning||studySpread===0;
  $("study-next").disabled=studyTurning||studySpread>=total-1
}
function renderStudySpread(){
  if(!studyDocument)return Promise.resolve();
  var wide=studyBook.clientWidth>=700,id=++studyRenderId,first=studySpread*2+1;
  studyBook.classList.remove("turn-next","turn-prev");
  studyBook.classList.toggle("two-page",wide);
  $("study-left-number").textContent=wide&&first<=studyDocument.numPages?first:"";
  $("study-right-number").textContent=wide&&first+1<=studyDocument.numPages?first+1:(wide?"":first);
  updateStudyControls();
  var tasks=[];
  if(wide)tasks.push(drawStudyPage(first,studyPages.left,id));
  else clearCanvas(studyPages.left);
  tasks.push(drawStudyPage(wide?first+1:first,studyPages.right,id));
  return Promise.all(tasks)
}
function openStudyBook(){
  studyStatus.textContent="Memuat bahan ajar...";
  loadPdfLibrary().then(function(pdfjs){
    if(studyDocument)return studyDocument;
    return pdfjs.getDocument("bahanajar.pdf").promise.then(function(document){studyDocument=document;return document})
  }).then(function(){
    return renderStudySpread()
  }).then(function(){
    studyStatus.textContent=""
  }).catch(function(error){
    studyStatus.textContent="Bahan ajar gagal dimuat. Gunakan tombol Buka PDF atau Unduh. "+error.message
  })
}
function turnStudyPage(direction){
  if(!studyDocument||studyTurning)return;
  var total=Math.ceil(studyDocument.numPages/2),next=studySpread+direction;
  if(next<0||next>=total)return;
  studyTurning=true;updateStudyControls();
  studyStatus.textContent="Membalik halaman...";
  var wide=studyBook.clientWidth>=700;
  var frontPage=direction>0?(wide?studySpread*2+2:studySpread*2+1):studySpread*2+1;
  var backPage=direction>0?(wide?studySpread*2+3:studySpread*2+2):studySpread*2;
  var id=++studyRenderId;
  Promise.all([
    drawStudyPage(frontPage,studyPages.front,id),
    drawStudyPage(backPage,studyPages.back,id)
  ]).then(function(){
    var finished=false;
    function finish(){
      if(finished)return;
      finished=true;studyBook.removeEventListener("animationend",finish);
      studySpread=next;studyTurning=false;
      renderStudySpread().then(function(){studyStatus.textContent=""}).catch(function(error){
        studyStatus.textContent="Halaman gagal ditampilkan. "+error.message
      })
    }
    studyBook.addEventListener("animationend",finish);
    requestAnimationFrame(function(){studyBook.classList.add(direction>0?"turn-next":"turn-prev")});
    window.setTimeout(finish,850)
  }).catch(function(error){
    studyTurning=false;studyStatus.textContent="Halaman gagal ditampilkan. "+error.message;updateStudyControls()
  })
}
function closeStudy(){$("study-open").focus();study.hidden=true}
$("study-open").onclick=function(){study.hidden=false;openStudyBook();$("study-close").focus()};
$("study-close").onclick=closeStudy;
study.onclick=function(e){if(e.target===study)closeStudy()};
$("study-prev").onclick=function(){turnStudyPage(-1)};
$("study-next").onclick=function(){turnStudyPage(1)};
var studySwipeStart=null;
studyBook.addEventListener("pointerdown",function(e){studySwipeStart={x:e.clientX,y:e.clientY}});
studyBook.addEventListener("pointerup",function(e){
  if(!studySwipeStart)return;
  var dx=e.clientX-studySwipeStart.x,dy=e.clientY-studySwipeStart.y;studySwipeStart=null;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))turnStudyPage(dx<0?1:-1)
});
studyBook.addEventListener("pointercancel",function(){studySwipeStart=null});
window.addEventListener("resize",function(){
  if(studyDocument&&!study.hidden&&!studyTurning){
    window.clearTimeout(studyResizeTimer);
    studyResizeTimer=window.setTimeout(function(){
      renderStudySpread().catch(function(error){studyStatus.textContent="Halaman gagal ditampilkan. "+error.message})
    },150)
  }
});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){if(!study.hidden)closeStudy();else if(!about.hidden)closeAbout()}
  else if(!study.hidden&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){turnStudyPage(e.key==="ArrowRight"?1:-1)}
});
var fs=$("bfs");
if(!document.fullscreenEnabled){fs.hidden=true}
fs.onclick=function(){try{if(document.fullscreenElement){document.exitFullscreen()}else{document.documentElement.requestFullscreen().catch(function(){})}}catch(e){}};
document.addEventListener("fullscreenchange",function(){fs.textContent=document.fullscreenElement?"Keluar layar penuh":"Layar penuh"});
start();
})();
