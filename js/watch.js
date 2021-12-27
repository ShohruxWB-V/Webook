const myInfoBag = document.querySelectorAll('.hide-info');
const myInfoButton = document.querySelector('.myInfo');
const mouseIcon = document.querySelector('.mouse-icon');
let offsee = false;
console.log(myInfoBag);

myInfoButton.addEventListener("click", () => {
    if (!offsee) {
        myInfoButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
        offsee = true;
        for (let i = 0; i < myInfoBag.length; i++) {
            myInfoBag[i].classList.add('active');
        }
    }
    else {
        myInfoButton.innerHTML = '<i class="fas fa-eye"></i>';
        offsee = false;
        for (let i = 0; i < myInfoBag.length; i++) {
            myInfoBag[i].classList.remove('active');
        }
    }
})

window.addEventListener('scroll', ()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(Math.ceil(scrolled)=== scrollable){
        alert('Sahifa to\'liqonli tushidi');
    }
    console.log(scrolled);
})

function scrollToBottom() {
    window.scrollTo(
        {top:940 ,behavior:"smooth"});
}

mouseIcon.addEventListener("click", scrollToBottom);