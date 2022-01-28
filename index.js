const popup = document.getElementById('pop-up')
const header = document.getElementById('header')
const bgAnim = document.querySelectorAll('.bg__animation div')

function openPopup(e){
    e.classList.add('active');
    popup.classList.add('active');
    header.innerText = e.innerText;
    startBgAnim();
    addAndRemovePopups(e)
}

function startBgAnim(){
    for(let i=0; i < bgAnim.length; i++){
        bgAnim[i].classList.add('active');
    }
}

function addAndRemovePopups(e){
    const popups = document.getElementsByClassName('popups');
    for(let i=0; i < popups.length; i++){
        popups[i].classList.remove('active')
    }
    document.getElementById(`${e.innerText.toLowerCase()}`).classList.add('active');
}