"use strict";

var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.btn_close');
var targetID;

for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click',function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click',function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}