'use strict';
import './scss/main.scss';
import './js/slider';
// import _ from 'lodash';


(function() {
    let progress =  document.querySelectorAll('progress');
    let percent = [79, 90, 69, 92];

    for( let i =0; i < progress.length; i++){
        progress[i].value = percent[i];
    }
})();
