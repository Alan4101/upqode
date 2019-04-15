'use strict';
import './scss/main.scss';
import './js/slider';
// import _ from 'lodash';

let d        = document,
    navDown  = d.querySelector('#navDownContainer');

if(!Element.prototype.remove){
    Element.prototype.remove = function remove(){
        if(this.parentNode){
            this.parentNode.removeChild(this);
        }
    }
}

navDown.addEventListener('mouseover', (e)=>{
    let el = e.target;

    if(el.classList.contains('dropdown-nav__item') || el.classList.contains('nav-span__item')){
        el.insertAdjacentHTML('afterBegin', `<i class="fas fa-chevron-right"></i>`);
        el.classList.add('hover');
    }
}, false);

navDown.addEventListener('mouseout', e=>{
    let el = e.target;

    if(el.classList.contains('dropdown-nav__item') && el.classList.contains('hover') || el.classList.contains('nav-span__item')){
        el.children[0].remove();
        el.classList.remove('hover');
    }
}, false);

(function() {

    let progress =  document.querySelectorAll('progress');
    let percent = [79, 90, 69, 92];

    for( let i =0; i < progress.length; i++){
        progress[i].value = percent[i];
    }
})();
