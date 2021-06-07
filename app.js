let eyeBalls = document.getElementsByClassName('eye-ball');


document.onmousemove = function (){
    // clientX = la possition du curseur du clien sur x
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    for(let i = 0; i <2;i++){
        eyeBalls[i].style.left = x;
        eyeBalls[i].style.top = y;
        eyeBalls[i]
    }
}