$(function() {
	$('input').focus(function() {
		$(this).css('background-color', 'gainsboro');
	}); // 光标焦点时改变背景颜色
});
$(function() {
	$('input').blur(function() {
		$(this).css('background-color', 'white');
	});
});
$(function() {
	$('#a').click(function() {
		$('div.box').hide(500);
	}); // 隐藏
});
$(function() {
	$('#c').click(function() {
		$('div.box').show(300);
	}); // 显示
});
$(function() {
	$('#d').click(function() {
		$('div.box').toggle(500);
	}); // 隐藏显示轮换
});
$(function() {
	$('#e').click(function() {
		$('div.box').fadeOut(500);
	}); // 渐变隐藏
});
$(function() {
	$('#f').click(function() {
		$('div.box').fadeIn(500);
	}); // 渐变显示
});
$(function() {
	$('#g').click(function() {
		$('div.box').fadeToggle(500);
	}); // 渐变轮换
});
$(function() {
	$('#h').click(function() {
		$('div.box').fadeTo(500, 0.15);
	}); // 渐变到x透明度
});
$(function() {
	$('#aa').click(function() {
		$('div.box').slideUp('slow', function() {
			alert('已经滑动完毕')
		});
	}); //向上滑动
});
$(function() {
	$('#bb').click(function() {
		$('div.box').slideDown(5000);
	}); //向下滑动
});

//$(document).ready(function() {
//	$('#cc').click(function() {
//		$('div.box').slideToggle('slow');
//	});
//});

$(function() {
	$('#cc').click(function() {
		$('div.box').slideToggle('slow');
	});
});

//$(function() {
//	$('dd').click(function() {
//		$('ee').animate({
//			left: '300px',
//		});
//	});
//});

$(function() {
	$('#dd').click(function() {
		var i = $('#ee')
		i.animate({
			height: '300px',
			width: '200px',
			left: '100px',
			fontSize: '2em',
			opacity: '0.4'
		}, 'slow');
		i.animate({
			height: '50px',
			width: '450px',
			fontSize: '3em',
			opacity: '0.6'
		}, 'fast');
		i.animate({
			height: '150px',
			width: '150px',
			fontSize: '5em',
			opacity: '0.3'
		}, 'slow');
		i.animate({
			height: '200px',
			width: '500px',
			fontSize: '2em',
			opacity: '1'
		}, 'fast');
	});
}); // annimate操作CSS改变动画

$(function() {
	$('#ff').click(function() {
		$('#gg').animate({
			height: 'toggle',
			width: 'toggle'
		}, 5000);
	});
}); // 动画轮换

$(function() {
	$('#aaa').click(function() {
		$('#gg').stop();
	});
}); // 动画停止

$(function() {
	$('#bbb').click(function() {
		$('div.box')
			.slideUp(2000).slideDown(2000).css('background-color', 'whitesmoke');
	});
}); // jQuery chaining

$(function() {
	$('#changefont1').click(function() {
		var a = $('#changefont');
		a.slideUp(2000).slideDown(2000).fadeOut(3000).fadeIn(2000).css('color', 'orangered')
	})
})

$(function() {
	$('#ccc').click(function() {
		alert('text:' + $('#text').text());
	});
}); // DOM 操作内容 text

$(function() {
	$('#ddd').click(function() {
		alert('html:' + $('#text').html());
	});
}); // DOM操作标签内

$(function() {
	$('#eee').click(function() {
		alert('attr:' + $('#link').attr('href'));
	});
}); // DOM操作拿到属性

$(function() {
	$('#set_text').click(function() {
		$('#fff').text('set text successful');
	});
});

$(function() {
	$('#set_html').click(function() {
		$('#ggg').html('set html <b>successful</b>');
	});
});

$(function() {
	$('#set_value').click(function() {
		$('#input').val('Tony Stark');
	});
}); // DOM 操作添加值

$(function() {
	$('#set_text_callback').click(function() {
		$('#hhh').text(function(i,origText) {
			return 'old text: ' + origText + ' new text: hi hi hi!(index:' +i+ ')';
		});
	});
});
