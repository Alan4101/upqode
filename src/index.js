'use strict';
import './scss/main.scss';
import './js/slider';
// import _ from 'lodash';

let d        = document,
    navList  = d.querySelector('.nav__item'),
    dropItem = d.querySelectorAll('.dropdown-nav__item');

if(!Element.prototype.remove){
    Element.prototype.remove = function remove(){
        if(this.parentNode){
            this.parentNode.removeChild(this);
        }
    }
}

dropItem.addEventListener('mouseenter', (e)=>{
    // var el = e.target;
    // console.log(el);
    //
    if(!dropItem.classList.contains('hover')){
        dropItem.insertAdjacentHTML('afterBegin', `<i class="fas fa-chevron-right"></i>`);
        dropItem.classList.add('hover');
    }else {
        dropItem.children[0].remove();
        dropItem.classList.remove('hover');
    }
}, false);

dropItem.addEventListener('mouseleave', ()=>{

}, false);

(function() {

    let progress =  document.querySelectorAll('progress');
    let percent = [79, 90, 69, 92];

    for( let i =0; i < progress.length; i++){
        progress[i].value = percent[i];
    }
})();
