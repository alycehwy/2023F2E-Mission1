const body = document.querySelector('body');
const policyTabs = document.querySelectorAll('.policy-tab li');
const policyBoxes = document.querySelectorAll('.policy-box');
const list = document.querySelector('.list');
const navMobile = document.querySelector('.nav-mobile');
const modalCandidateInfo = document.querySelector('.modal-candidate-info');
const clostBtn = document.querySelector('.close');
const candidateInfoBtn = document.querySelector('.cover-button');


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

function toggleMobileMenu(){
    navMobile.classList.toggle('hide');
    body.classList.toggle('fixedWindow');
}

function toggleModal(){
    modalCandidateInfo.classList.toggle('hide');
    body.classList.toggle('fixedWindow');
}

policyTabs.forEach(tab => tab.addEventListener('click',changePolicyBox));

list.addEventListener('click',toggleMobileMenu);
navMobile.addEventListener('click',(event) => event.target.className === 'menu-close' ? toggleMobileMenu() : '');
navMobile.querySelectorAll('a').forEach(aTag => aTag.addEventListener('click',toggleMobileMenu));

candidateInfoBtn.addEventListener('click',toggleModal);
modalCandidateInfo.addEventListener('click',(event) => event.target.className === 'modal-candidate-info' ? toggleModal() : '');
clostBtn.addEventListener('click',toggleModal);
