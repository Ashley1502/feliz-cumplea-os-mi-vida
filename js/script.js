// =========================
// SONIDO AMBIENTE
// =========================


const windSound =
document.getElementById("windSound");


windSound.volume = 0.25;


// =========================
// ESTRELLAS
// =========================

const background = document.getElementById("background");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="background-star";
    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    const size=Math.random()*3+1;

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.animationDelay=Math.random()*5+"s";

    background.appendChild(star);

}

// =========================
// ESCENAS
// =========================

function nextScene(numero){


    document.querySelectorAll(".scene").forEach(scene=>{


        scene.classList.remove("active");


    });



    document
    .getElementById("scene"+numero)
    .classList.add("active");



    if(numero === 4){


        windSound.play();


    }


}
const constellations = {


1:{

title:"La estrella que nació contigo",

pages:[

"Antes de que existieran recuerdos, sueños o caminos por recorrer, ya había una razón para que este día fuera especial: tú.",

"El cielo guarda millones de estrellas, pero ninguna tiene tu forma de brillar.",

"Una luz no siempre nace para iluminar todo un universo; a veces nace para iluminar pequeños momentos y hacer más cálidos los días difíciles.",

"Esta estrella representa aquello que nunca podrá repetirse: la persona única que eres."

]

},



2:{

title:"La viajera de infinitos mundos",

pages:[

"Hay personas que solo pasan por los mundos que encuentran...",

"Y hay otras que dejan una parte de sí mismas en cada lugar que aman.",

"En cada historia que disfrutas, en cada personaje que admiras y en cada universo que exploras, existe una pequeña parte de ti que yo siempre tengo muy en mente, por eso logro verte en todos lados.",

"Es increíble como dejas huella en cada persona que conoces, no sé lo que piensen las personas que te conocen, pero si de algo estoy segura es que sin dudarlo repetirían una y otra vez el día en el que te conocieron, al menos yo sí lo haría."

]

},



3:{

title:"La voluntad de una estrella eterna",

pages:[

"Dicen que las estrellas más brillantes son aquellas que han soportado las noches más oscuras.",

"Admiro la forma en la que continúas avanzando incluso cuando el camino se vuelve difícil.",

"No porque nunca caigas, sino porque siempre encuentras la manera de levantarte.",

"Tu luz siempre permanecerá, incluso cuando el tiempo y las estaciones cambien."

]

},



4:{

title:"08/07",

pages:[

"Hoy el universo marca una fecha especial.",

"No porque sea un día cualquiera en el calendario, sino porque es el día en que comenzó la historia de una persona capaz de hacer más bonito el mundo.",

"Que esta nueva vuelta alrededor del sol esté llena de momentos que te hagan sonreír, sueños que se acerquen cada vez más y recuerdos que algún día mires con felicidad. Quiero que sepas que nada me hace más feliz que estar un año más en una fecha tan linda como hoy. Este es tu día, así que espero que te consientan mucho, que sonrías, que te diviertas o inclusive que descanses. Anhelo el momento en el que pueda estar a tu lado para ser participe de tu felicidad y de tus recuerdos.",

"Hoy todas las estrellas tienen una razón para brillar: celebrar que existes."

]

}


};



let currentDialogue = null;

let currentPage = 0;

let currentStar = 0;

let completedConstellations = [];



function openMission(numero){

    document
.getElementById("starSound")
.play();


    currentStar = numero;


    currentDialogue = constellations[numero];

    currentPage = 0;



    document.getElementById("dialogueTitle").innerText =
    currentDialogue.title;



    document
    .getElementById("dialogueWindow")
    .classList.add("active");



    showDialogue();


}




function showDialogue(){


    document.getElementById("dialogueText").innerText =
    currentDialogue.pages[currentPage];


}





function nextDialogue(){


    currentPage++;



    if(currentPage >= currentDialogue.pages.length){


        unlockConstellation(currentStar);



        document
        .getElementById("dialogueWindow")
        .classList.remove("active");



        return;


    }



    showDialogue();


}





function unlockConstellation(numero){


    if(completedConstellations.includes(numero)){

        return;

    }



    completedConstellations.push(numero);



    const star =
    document.querySelector(".star-"+numero);



    if(star){

        star.querySelector("span")
        .classList.add("completed");

    }



    document
    .getElementById("contador")
    .innerText =
    completedConstellations.length+" / 4";



    activateLine(numero);



if(completedConstellations.length === 4){

    const sound =
    document.getElementById("completeSound");


    if(sound){

        sound.play();

    }


    completeConstellation();

}


}

function activateLine(numero){


    const line =
    document.querySelector(".line-"+numero);



    if(line){

        line.classList.add("active");

    }


}

function completeConstellation(){



    document
    .querySelectorAll(".constellation-lines line")
    .forEach(line=>{


        line.classList.add("active");


    });



    document
    .getElementById("coreStar")
    .classList.add("complete");



    setTimeout(()=>{


        document
        .getElementById("completionWindow")
        .classList.add("active");


    },1500);



}

function openFinalGift(){


    document
    .getElementById("completionWindow")
    .classList.remove("active");



    nextScene(5);


}