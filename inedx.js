var $cont = document.querySelector('.cont');
var $elArr = [].slice.call(document.querySelector('.el'));
var $closeBtnArr = [].slice.call(document.querySelector('.el__close-btn'));

setTimeout(function(){
    $cont.classList.remove('s--inactive');
},200);

$elArr.fonEach(function($el){
    $el.addEventListener('click', function(){
        if(this.classList.contains('s--active')) return;
        $cont.classList.add('s--el--active');
        this.classList.add('s--active');
    });
});
$closeBtnArr.forEach(function($btn){
    $btn.addEventListener('click', function(e){
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});