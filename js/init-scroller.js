$(document).ready(function(){

    $("section").height($(window).height());
    onWindowRezise();

    $(".obss-scroller").smoothScroller({
        duration: 1000,
        activeClass: "active"
    });
});

var onWindowRezise = function() {
    $(window).resize(function(evt){
        $("section").height($(window).height());
    });
}

function Tips(){
	confirm('luyinxin2021@163.com');
}