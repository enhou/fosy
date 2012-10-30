////////////////////////////
// http://www.adipalaz.com/experiments/jquery/accordion.html
///////////////////////////
(function($) {
//http://www.mail-archive.com/jquery-en@googlegroups.com/msg43851.html
$.fn.orphans = function(){
    var txt = [];
    this.each(function(){$.each(this.childNodes, function() {
        if (this.nodeType == 3 && $.trim(this.nodeValue)) txt.push(this)
    })}); 
    return $(txt);
};
//http://www.learningjquery.com/2008/02/simple-effects-plugins:
$.fn.fadeToggle = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle'}, speed, easing, callback);
};
$.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
})(jQuery);
////////////////////////////
$(function() {
    $('.expandBody .collapse').hide(); 
    $('.expandBody .expand').orphans().wrap('<a href="#" title="expand/collapse"></a>');
    


    //demo 5 - div.demo:eq(4) - fadeToggle-slideFadeToggle effects:
    $('.expandBody .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').fadeToggle(800,'linear').siblings('.collapse:visible').slideFadeToggle('slow');
        return false;
    });

});