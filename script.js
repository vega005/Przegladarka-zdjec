var index = 0;
var max = 4;
var on = true;
var pom;

//Funkcja losująca zdjęcie
function slider(){
    if(on!=false){
        while(index==pom){
            pom = Math.floor(Math.random() * max);
        }
        choose(pom);
        setTimeout(slider,3000);
    }
    else{
        return;
    }
}

//Funkcja przycisku strzłki w lewo
function back(){
    index -= 1;
    if(index < 0){
        index = 5;
    }
    stop()
    choose(index);
}

//Funkcja przycisku strzałki w prawo
function forward(){
    index += 1;
    if(index > max){
        index = 0;
    }
    stop();
    choose(index);
}

//Funkcja startu w przypadku gdy odtwarzanie slidera wstrzymane
function start(){
    if(on == false){
        on = true;
        slider();
    }
}

//Funkcja zatrzymująca slider
function stop(){
    on = false;
}

//Funkcja wybierająca i wyświetlająca zdjęcie w elemencie HTML
function choose(n){
    var el = document.getElementById("image");
    switch(n){
        case 0: el.innerHTML='<img src="./img/1.jpg" alt="Zdjęcie przekąski">';
                break;
        case 1: el.innerHTML='<img src="./img/2.jpg" alt="Zdjęcie psa">';
                break;
        case 2: el.innerHTML='<img src="./img/3.jpg" alt="Obraz psa2">';
                break;
        case 3: el.innerHTML='<img src="./img/4.jpg" alt="Zdjęcie kota">';
                break;
        case 4: el.innerHTML='<img src="./img/5.jpg" alt="Zdjęcie kota2">';
                break;
    }
    index = n;
    var bt = document.getElementsByClassName("switch");
    var item;
    for(item of bt){
        if(item.innerHTML == index + 1){
            item.style.color = "red";
        }
        else{
            item.style.color = "black";
        }
    }
}
