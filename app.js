const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const mainBtn1 = document.getElementById("mainBtn1");
const mainBtn2 = document.getElementById("mainBtn2");

const pkgCards1 = document.getElementById("pkgCards1");
const pkgCards2 = document.getElementById("pkgCards2");

mainBtn1.addEventListener('click',function(){
    mainBtn1.classList.add("bgClrBlue");
    mainBtn1.classList.add("text-light");
    mainBtn1.classList.remove("txtClr");
    mainBtn1.classList.remove("bg-light");
    
    mainBtn2.classList.add("txtClr");
    mainBtn2.classList.add("bg-light");
    mainBtn2.classList.remove("bgClrBlue");
    mainBtn2.classList.remove("text-light");

    pkgCards1.classList.add("d-block");
    pkgCards1.classList.remove("d-none");

    pkgCards2.classList.add("d-none");
    pkgCards2.classList.remove("d-block");
})

mainBtn2.addEventListener('click',function(){
    mainBtn2.classList.add("bgClrBlue");
    mainBtn2.classList.add("text-light");
    mainBtn2.classList.remove("txtClr");
    mainBtn2.classList.remove("bg-light");
    
    mainBtn1.classList.add("txtClr");
    mainBtn1.classList.add("bg-light");
    mainBtn1.classList.remove("bgClrBlue");
    mainBtn1.classList.remove("text-light");
    
    pkgCards1.classList.add("d-none");
    pkgCards1.classList.remove("d-block");

    pkgCards2.classList.add("d-block");
    pkgCards2.classList.remove("d-none");
})