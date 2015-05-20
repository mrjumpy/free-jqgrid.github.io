var pageloader = (function() {
	var init = function() {
		$('#installation-example').load("views/pivot-basic.html");
	};

	return {
		init: init
	};
})();