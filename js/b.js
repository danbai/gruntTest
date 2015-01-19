(function() {
	var oEye = $('#eye');

	var Page = {
		init: function() {
			this.render();
		},
		render: function() {
			$(document).on('mousemove', function(ev) {
				var nX = ev.clientX,
					nY = ev.clientY,
					nWinWidth = $(window).width(),
					nWinHeight = $(window).height();
				
				oEye.css('transform', 'rotate(' + nX  + 'deg)');
			});
		}
	}

	Page.init();
}());