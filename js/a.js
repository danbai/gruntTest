(function() {
	var oEye = $('#eye');

	var Page = {
		init: function() {
			this.render();
		},
		render: function() {
			oEye.on('mouseenter', function() {
				$(this).css({'width': 200, 'height': 200,'transform': 'rotate(180deg)'});
			});
		}
	}

	Page.init();
}());