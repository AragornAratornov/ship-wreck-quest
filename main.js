function showSmallText() {
    var bigText = document.getElementById("start");
    var smallText = document.getElementById("plate");

    bigText.style.display = "none"; // Скрыть большую надпись
    smallText.style.display = "block"; // Показать маленький текст по левому краю
  }
function In(n, arr){
  let x = false;
  for(let i=0; i<arr.length; i++){
      if(String(n)==arr[i]){
          x = true;
      } 
  }
  return x;
}
var storyline = +0;
var storyway = +0;
var look = false;
var choses1 = [">1. ОСМОТРЕТЬСЯ ВНУТРИ", ">2. ВЫЙТИ НАРУЖУ", ">3. ПОТЫКАТЬ НА ПАНЕЛЬ УПРАВЛЕНИЯ"];
var chose2 = [">1. СТОЯТЬ СМИРНО", ">2. БЕЖАТЬ СО ВСЕХ НОГ", ">3. ПОПЫТАТЬСЯ ОТБИТЬСЯ"];
var chose3 = [">1. СПРЫГНУТЬ В ЛЮК", ">2. ЛЕЗТЬ ПО СТРЕМЯНКЕ"];
var chose4 = [">1. ЛЕЗТЬ ВНИЗ",">2. ВЗОБИРАТЬСЯ ВЫШЕ ПО СТРЕМЯНКЕ"];
var chose5 = [">1. УБЕГАТЬ", ">2. ПОПЫТАТЬСЯ ОТБИТЬСЯ"];
var chose6 = [">1. СТРЕМЯНКА", ">2. СПРЫГНУТЬ", ">3. КАНАТ"];
var chose7 = [">1. ВКЛЮЧИТЬ ФОНАРЬ",">2. НЕ ВКЛЮЧАТЬ ФОНАРЬ", ">3. ПРОЙТИ В ТЕМНОТУ", ">1. ПРОЙТИ В ТЕМНОТУ"];
var chose8 = [">1. СПУСТИТЬСЯ", ">2. ВОЙТИ В ЗДАНИЕ"];
var continu = ">ПРОДОЛЖИТЬ";
var reps1 = [">ВЫ ОЧНУЛИСЬ НА ПАССАЖИРСКОМ СИДЕНЬЕ. ОСТАЛЬНЫЕ ЧЛЕНЫ ЭКИПАЖА МЕРТВЫ, НО ВЫ ЦЕЛЫ. ВЫ ОТСТЕГИВАЕТЕСЬ, ПРОВЕРЯЕТЕ СОСТОЯНИЕ КОРАБЛЯ. СИСТЕМА ФУНКЦИОНИРУЕТ, НО СИГНАЛИЗИРУЕТ О ЗНАЧИТЕЛЬНЫХ ПОВРЕЖДЕНИЯХ. ВЗЛЕТ НЕВОЗМОЖЕН. ВЫ ПОТЕРПЕЛИ КРУШЕНИЕ ВОЗЛЕ ЗАБРОШЕННОЙ СТАНЦИИ, ГДЕ ЕСТЬ УБЕЖИЩЕ. ДОЛГО ОСТАВАТЬСЯ НА КОРАБЛЕ НЕЛЬЗЯ. ВНИМАНИЕ!!! НА ПЛАНЕТЕ ПОВЫШЕННЫЙ РАДИАЦИОННЫЙ ФОН.",
">ВЫ ОСМАТРИВАЕТЕ КАБИНУ КОРАБЛЯ. ВЫ ОБНАРУЖИВАЕТЕ ФОНАРЬ И КАНАТ С КОШКОЙ. СНАРУЖИ СЛЫШЕН ГУЛ ПЫЛЕВОЙ БУРИ.",
">ВЫ НЕ МОЖЕТЕ ВЫЙТИ. ВЫХОДНАЯ ДВЕРЦА НЕ ПОДДАЕТСЯ.",
">ВЫ НАТЫКАЛИ НА КНОПКУ ОТКРЫТИЯ ДВЕРЦЫ ВЫХОДА. ВКЛЮЧИЛАСЬ СЕРЕНА, КТО ТО МОГ ЕЕ УСЛЫШАТЬ..."
];
var reps2 = [
  ">ВЫ ВЫШЛИ ИЗ КОРАБЛЯ ЗА СЕКУНДУ ДО ЕГО ВЗРЫВА. ВЫ СЛЫШИТЕ ЧЕЙ-ТО РЕВ. ВЫ НЕ ЗНАЕТЕ ЧТО ЭТО."
];
var reps31 = [
  ">ВЫ ПОДБЕГАЕТЕ К СТАНЦИИ И ВИДИТЕ ДВА ПУТИ ВНУТРЬ."
];
var reps32 = [
  ">ВЫ ПРЫГАЕТЕ В ЛЮК. ВЫ ОКАЗЫВАЕТЕСЬ В ДЛИННОМ КОРИДОРЕ.",
  ">ВЫ ВЫШЛИ В ОГРОМНОЕ ПОМЕЩЕНИЕ. ВКЛЮЧИВ ФОНАРИК ВЫ ОБНАРУЖИВАЕТЕ ЧТО ЭТО АНГАР С КОРАБЛЯМИ. ПРОХОДЯ ИХ ВСЕ, ОДИН ОКАЗЫВАЕТСЯ С ТОПЛИВОМ И В РАБОЧЕМ СОСТОЯНИИ"
];
var reps3 = [reps31, reps32];
var reps41 = [
  ">ВЫ ВЗБИРАЕТЕСЬ НА ЭТАЖ ВЫШЕ, ЗА ВАМИ НИКТО НЕ ГОНИТСЯ, НО СТРЕМЯНКИ БОЛЬШЕ НЕТ. ДАЛЕЕ ВЫ МОЖЕТЕ ВОЙТИ ВНУТРЬ. ВХОД ЭТО СПУСК. ЛИБО ЖЕ ЛЕЗТЬ ДАЛЬШЕ ВВЕРХ",
  ">КАК ЖЕ ВЫ СПУСТИТЕСЬ?"
];
var reps42 = [
  ">ВЫ СПУСТИЛИСЬ ОБРАТНО ВНИЗ. ВХОД ЭТО СПУСК.",
  ">ВЫ СПУСТИЛИСЬ. КРУГОМ ТЕМНОТА.",
  ">ВКЛЮЧИВ ФОНАРЬ, ВЫ ОБНАРУЖИВАЕТЕ КУЧУ МИН НА ПУТИ К ПРИОТКРЫТОЙ ДВЕРИ БУНКЕРА. АККУРАТНО ОБХОДЯ ИХ, ВЫ ЗАХОДИТЕ ВНУТРЬ. РЯДОМ С ПАНЕЛЬЮ УПРАВЛЕНИЯ ЛЕЖИТ СКЕЛЕТ В РАБОЧЕЙ ОДЕЖДЕ И ПИСТОЛЕТОМ В РУКЕ. ЗА СПИНОЙ ВЫ СЛИШИТЕ ГЛУХОЙ РОКОТ."
];
var reps4 = [reps41, reps42];
var reps51 = [
  ">ВЗОБРАВШИСЬ НА ЭТАЖ ВЫШЕ ВЫ ВИДИТЕ СИЛУЭТ."
];
var reps52 = [
  ">ВЫ, МАХАЯ РУКАМИ ПОБЕЖАЛИ ВПЕРЕД И ВРЕЗАЛИСЬ ВО ЧТО-ТО, ВИСЯЩЕЕ НА ПЕРИЛАХ. ОНО УПАЛО ВНИЗ. ВЫ ВИДИТЕ ВХОД.",
  ">ЗАЙДЯ ВНУТРЬ ВЫ ОБНАРУЖИЛИ РАДИОРУБКУ. ОНА РАБОТАЕТ! ПОСЛАВ СИГНАЛ ВЫ НАДЕЕТЕСЬ НА СПАСЕНИЕ. В ДРУГОЙ КОМНАТЕ ВЫ ОБНАРУЖИВАЕТЕ БОЛЬШОЕ КОЛИЧЕСТВО ПРОПИТАНИЯ."
];
var reps5 = [reps51, reps52];
var reps = [reps2, reps3, reps4, reps5];
var inv = false;
var door = false;
var choose = document.getElementById("choose");
var act1 = document.getElementById("act1");
var act2 = document.getElementById("act2");
var act3 = document.getElementById("act3");
var info = document.getElementById("info");
var k = reps1;
function next(){
  choose.cursor = "text";
  choose.innerText=">ДАЛЬНЕЙШИЕ ДЕЙСТВИЯ:";
  choose.removeAttribute('onclick');
  act1.innerText=choses1[0];
  act2.innerText=choses1[1];
  act3.innerText=choses1[2];
  info.innerText=reps1[0];
}
var i = 0;
function ch1(){
  if(storyline==0){
    k = reps1[1];
    story();
    inv = true;
    act1.style.display = "none";
  }
  if(storyline==1){
    death();
  }
  if(storyline==2){
    info.innerText=reps32[0];
    act1.innerText=continu;
    choose.style.display = "none";
    act2.style.display = "none";
    act3.style.display = "none";
    if (i<3&&i>0){
      info.innerText=">КОРИДОР";
      act1.innerText=">ИДТИ";
    }
    if (i==3){
      info.innerText=reps32[1];
    }
    if (i==4){
      document.getElementById("plate").style.display = "none";
      document.getElementById("start").style.display = "flex";
      document.getElementById("menu").innerHTML="Вы выжили и улетели с планеты."
      document.getElementById("start").removeAttribute('onclick');
      i=0;
    }
    i++;
  }
  if(storyline==3){
    if(inv){
      act1.innerText=chose6[0];
      act2.style.display = "block";
      act2.innerText=chose6[1];
      act3.style.display = "block";
      act3.innerText=chose6[2];
    }else{
      act1.innerText=chose6[0];
      act2.innerText=chose6[1];
      storyline--;
    };
    k = reps41[1];
    if (storyway==1){
      k=reps42[0];
    }
    storyway=0;
    story();
    }
  if(storyway==0&&storyline==4){
    if(inv){
    act1.innerText=chose7[0];
    act2.innerText=chose7[1];
    act3.style.display = "block";
    act3.innerText=chose7[2];
    k = reps42[1];
    story();
    }else{
      act1.innerText=chose7[3];
      act2.style.display = "none";
      act3.style.display = "none";
      storyline;
      k = reps42[1];
      story();
    }
  }
  if(storyway==0&&storyline==5){
    act2.style.display = "none";
    act1.innerText=continu;
    act3.style.display = "none";
    k = reps42[2];
    story();
    if(i==1){
      death();
    }
    i++;
  }
  if(storyway==1&&storyline==4){
    act1.innerText=chose4[0];
    act2.style.display = "none";
    act3.style.display = "none";
    k = reps42[0];
    story();
  }
  if(storyway==1&&storyline==5){
    act1.innerText=chose4[0];
    act2.style.display = "none";
    act3.style.display = "none";
    k = reps42[0];
    story();
  }
  if(storyway==0&&storyline==6){
    death();
    }
  if (storyline==2&&(i>0)){
    storyline=1;
  }else{if(storyline==2){
    storyline++;
  }}
  if(storyway==1&&(storyline==4||storyline==5)){
    storyline=2;
    storyway=0;
  }
  if(storyway==0&&storyline==4){
    if(!inv){
      storyline+=1;
    }
  }
  if (door){
    storyline++;
  }
}
function ch2(){
  if(door){
    k = reps2[0];
  if(storyline==0){
    act1.style.display = "block";
    act3.style.display = "block";
    act1.innerText=chose2[0];
    act2.innerText=chose2[1];
    act3.innerText=chose2[2];
    story();
  }
  if(storyline==1){
    act1.style.display = "block";
    act1.innerText=chose3[0];
    act2.innerText=chose3[1];
    act3.style.display = "none";
    k = reps31[0];
    look=true;
    story();
  }
  if(storyline==2){
    act1.innerText=chose4[0];
    act2.innerText=chose4[1];
    k = reps41[0];
    story();
  }
  if(storyline==3){
    act1.innerText=chose5[0];
    act2.innerText=chose5[1];
    k = reps51[0];
    story();
    storyway++;
  }
  if(storyway==1&&storyline==4){
    act1.innerText=chose8[0];
    act2.innerText=chose8[1];
    k = reps52[0];
    story();
    }
  if(storyway==0&&storyline==4){
  if(inv){
    act1.innerText=chose7[0];
    act2.innerText=chose7[1];
    act3.style.display = "block";
    act3.innerText=chose7[2];
    k = reps42[1];
    story();
  }else{
    act1.innerText=chose7[3];
    act2.style.display = "none";
    act3.style.display = "none";
    k = reps42[1];
    story();
  }
}
  if(storyway==1&&storyline==5){
    act1.style.display = "none";
    act2.innerText=continu;
    act3.style.display = "none";
    k = reps52[1];
    story();
    storyline--;
    if(i==1){
      document.getElementById("plate").style.display = "none";
      document.getElementById("start").style.display = "flex";
      document.getElementById("menu").innerHTML= "ВЫ УМЕРЛИ ОТ<br>ГОЛОДА ТАК И НЕ<br>ПОКИНУВ ПЛАНЕТУ.";
      document.getElementById("start").removeAttribute('onclick');
      i=0;
    }
    i++;
  }
  if(!inv){
    if(storyway==0&&storyline==4){
      storyline++;
    }
    if(storyline==5&&storyway==0){
      act2.style.display = "none";
      act1.innerText=chose7[3];
      act3.style.display = "none";
      k = reps42[1];
      story();    
    }
  }else{
  if(storyline==5&&storyway==0){
    death();
  }
  }
  storyline++;
  }else{
  k=reps1[2];
  story();
  act2.style.display = "none";
  }
}
function ch3(){
  if(storyline==0){
    k = reps1[3];
    door = true;
    story();
    act3.style.display = "none";
    act2.style.display = "block";
  }
  if(storyline==1){
    death();
  }
  if(storyway==0&&storyline==4){
    act1.innerText=chose7[0];
    act2.innerText=chose7[1];
    act3.style.display = "block";
    act3.innerText=chose7[2];
    k = reps42[1];
    story();
    storyline++;
  }
  if(storyway=0&&storyline==5){
    death();
  }
  if(storyway==0&&storyline==6){
    death();
  }
  if (storyline>1){
    storyline++;
  }
}
function story(){
  info.innerText=k;
}
function death(){
  document.getElementById("plate").style.display = "none";
  document.getElementById("start").style.display = "flex";
  document.getElementById("menu").innerHTML= "СМЕРТЬ.<br>ОНО ДОБРАЛОСЬ ДО ВАС.";
  document.getElementById("start").removeAttribute('onclick');
}
