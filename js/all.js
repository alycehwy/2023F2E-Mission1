const body = document.querySelector('body');
const policyTabs = document.querySelectorAll('.policy-tab li');
const policyBoxes = document.querySelectorAll('.policy-box');
const list = document.querySelector('.list');
const navMobile = document.querySelector('.nav-mobile');
const modalCandidateInfo = document.querySelector('.modal-candidate-info');
const candidateInfoBtn = document.querySelector('.cover-button');
const modalServiceForm = document.querySelector('.modal-service-form');
const serviceForm = document.querySelector('.service-form');
const toTopBtn = document.querySelector('.toTop');
const banner = document.querySelector('.cover-banner');
const bottomOfBanner = banner.getBoundingClientRect().bottom;
let currentPolicyIndex = 0;

function carousel() {
    policyTabs.forEach(tab => tab.classList.remove('active'));
    policyBoxes.forEach(box => box.classList.add('hide'));
    currentPolicyIndex >= policyBoxes.length ? currentPolicyIndex = 0 : ''; 
    policyTabs[currentPolicyIndex].classList.add('active');
    policyBoxes[currentPolicyIndex].classList.remove('hide');
    currentPolicyIndex++;
    setTimeout(carousel, 5000); // Change image every 2 seconds
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
    // let the carousel start after the clicked page
    currentPolicyIndex = this.dataset.page;
}

function toggleMobileMenu(){
    navMobile.classList.toggle('hide');
    body.classList.toggle('fixedWindow');
}

function toggleInfoModal(){
    modalCandidateInfo.classList.toggle('hide');
    body.classList.toggle('fixedWindow');
}

function toggleFormModal(){
    modalServiceForm.classList.toggle('hide');
    body.classList.toggle('fixedWindow');
}

function fixToTop(){
    if(scrollY >= bottomOfBanner){
        toTopBtn.classList.remove('hide');
        toTopBtn.classList.add('fixedToTop');
    }else{
        toTopBtn.classList.add('hide');
        toTopBtn.classList.remove('fixedToTop');
    }
}


// policy box carousel and change
carousel();
policyTabs.forEach(tab => tab.addEventListener('click',changePolicyBox));

// mobile menu open/close
list.addEventListener('click',toggleMobileMenu);
navMobile.addEventListener('click',(event) => event.target.className === 'menu-close' ? toggleMobileMenu() : '');
navMobile.querySelectorAll('a').forEach(aTag => aTag.addEventListener('click',toggleMobileMenu));

// candiate info modal box open/close
candidateInfoBtn.addEventListener('click',toggleInfoModal);
modalCandidateInfo.addEventListener('click',(event) => event.target.className === 'modal-candidate-info' ? toggleInfoModal() : '');
modalCandidateInfo.querySelector('.close').addEventListener('click',toggleInfoModal);

// service form modal box open close
serviceForm.addEventListener('submit',(event) => {
    event.preventDefault();
    toggleFormModal();
});
modalServiceForm.addEventListener('click',(event) => event.target.className === 'modal-service-form' ? toggleFormModal() : '');
modalServiceForm.querySelector('.close').addEventListener('click',toggleFormModal);

// to top button
window.addEventListener('scroll',fixToTop);