var btnn = document.getElementsByClassName("btnn");
var slide = document.getElementById("slide")

btnn[0].onclick = function(){
    slide.style.transform="translateX(0px)";
    for(i=0;i<4;i++){
    btnn[i].classList.remove("active")
}
    this.classList.add("active")
}

btnn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<4;i++){
        btnn[i].classList.remove("active")
    }
        this.classList.add("active")
    }


btnn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0;i<4;i++){
        btnn[i].classList.remove("active")
    }
        this.classList.add("active")
    
}

btnn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0;i<4;i++){
        btnn[i].classList.remove("active")
    }
        this.classList.add("active")
    
}