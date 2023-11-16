const body = document.querySelector('body');
const policyTabs = document.querySelectorAll('.policy-tab li');
const policyBoxes = document.querySelectorAll('.policy-box');
const list = document.querySelector('.list');
const navMobile = document.querySelector('.nav-mobile');

function openMobileMenu(){
    navMobile.classList.remove('hide');
    body.classList.add('fixedWindow');
}

function closeMobileMenu(event){
    if(event.target.className === 'menu-close'){
        navMobile.classList.add('hide');
    }
}

function changePolicyBox(){
    policyTabs.forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
    policyBoxes.forEach(box => {
        if(box.dataset.page === this.dataset.page){
            box.classList.remove('hide');
        }else{
            box.classList.add('hide');
        }
    });
}

list.addEventListener('click',openMobileMenu);
policyTabs.forEach(tab => tab.addEventListener('click',changePolicyBox));
navMobile.addEventListener('click',closeMobileMenu);