(function (jQuery) {
	var $ = jQuery;
	var reflectHander = {
		start: function(target, json) {
			reflectHtml(target, json);
		}
	}

	function reflectHtml(target, json) {
		for (key in json) {
			var childTarget = target.children("." + key);
			var value = json[key];
			if (typeof json[key] == "string") {
				childTarget.html(value);
			} else {
				reflectHtml(childTarget, value);
			}
		}
	}

	$.fn.reflect = function(json) {
		var target = $(this);
		reflectHander.start(target, json);
	}
})(jQuery);