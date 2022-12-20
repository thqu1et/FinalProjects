$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 function create(){
    let element = document.getElementById('loginform')
    let element2 = document.getElementById('register-form')
    element.style.display = 'none';
    element2.style.display = 'block';
 }
 function login(){
   let element3 = document.getElementById('register-form')
   let element4 = document.getElementById('loginform')
   element3.style.display = 'none';
   element4.style.display = 'block';
 }