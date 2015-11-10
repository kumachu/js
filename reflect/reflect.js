(function (jQuery) {
	var $ = jQuery;
	var reflectHander = {
		start: function(target, json) {
			for (key in json) {
				target.find("." + key).html(json[key]);
			}
		}
	}
	$.fn.reflect = function(json) {
		var target = $(this);
		reflectHander.start(target, json);
	}
})(jQuery);