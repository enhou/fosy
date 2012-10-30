$(document).ready(function() {
	// topnav drop-menu
	$("ul.topnav li span").click(function() {
		var hidden = $(this).parents("li").children("ul").is(":hidden");
		$(".left-wrapper>ul>li>ul").fadeOut(300);

		if (hidden) {
			$(this).parents("li").children("ul").fadeToggle(300);
		}

		$(this).toggleClass('open');
		return false;
	});

	$(".left-wrapper>ul>li>ul").mouseup(function() {
		return false
	});

	$("ul.topnav li span").mouseup(function() {
		return false
	});

	$(document).mouseup(function() {
		$(".left-wrapper>ul>li>ul").fadeOut();
		$("ul.topnav li span").removeClass('open');
		return false;
	});
	
	
	// gallery-label drop-menu

$(".select-action").click(function() {
		var labelHidden = $(this).parents(".gallery-label").children(".list-box").is(":hidden");
		$(".list-box").fadeOut(230);

		if (labelHidden) {
			$(this).parents(".gallery-label").children(".list-box").fadeToggle();
		}

		$(this).toggleClass('open');
		return false;
	});

	$(".list-box").mouseup(function() {
		return false
	});

	$(".select-action").mouseup(function() {
		return false
	});

	$(document).mouseup(function() {
		$(".list-box").fadeOut(230);
		$(".select-action").removeClass('open');
		return false;
	});
	
	

$(function() {

	var input = $('input#s');
	var divInput = $('div.input');
	var width = divInput.width();
	var outerWidth = divInput.parent().width() - (divInput.outerWidth() - width) - 28;
	var submit = $('#searchSubmit');
	var txt = input.val();

	input.bind('focus', function() {
		if (input.val() === txt) {
			input.val('');
		}
		$(this).animate({
			color : '#000'
		}, 300);
		// text color
		$(this).parent().animate({
			width : outerWidth + 'px',
			backgroundColor : '#fff', // background color
			paddingRight : '43px'
		}, 300, function() {
			if (!(input.val() === '' || input.val() === txt)) {
				if (!($.browser.msie && $.browser.version < 9)) {
					submit.fadeIn(300);
				} else {
					submit.css({
						display : 'block'
					});
				}
			}
		}).addClass('focus');
	}).bind('blur', function() {
		$(this).animate({
			color : '#b4bdc4'
		}, 300);
		// text color
		$(this).parent().animate({
			width : width + 'px',
			backgroundColor : '#e8edf1', // background color
			paddingRight : '15px'
		}, 300, function() {
			if (input.val() === '') {
				input.val(txt)
			}
		}).removeClass('focus');
		if (!($.browser.msie && $.browser.version < 9)) {
			submit.fadeOut(100);
		} else {
			submit.css({
				display : 'none'
			});
		}
	}).keyup(function() {
		if (input.val() === '') {
			if (!($.browser.msie && $.browser.version < 9)) {
				submit.fadeOut(300);
			} else {
				submit.css({
					display : 'none'
				});
			}
		} else {
			if (!($.browser.msie && $.browser.version < 9)) {
				submit.fadeIn(300);
			} else {
				submit.css({
					display : 'none'
				});
			}
		}
	});
}); 

});