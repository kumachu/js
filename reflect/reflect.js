(function (jQuery) {
	var $ = jQuery;
	var reflectHander = {
		start: function(target, response) {
			reflectHtml(target, response);
		}
	}

	function reflectHtml(target, response) {
		for (key in response) {
			var childTarget = target.children("." + key);
			var value = response[key];
			var valueType = typeof value;

			if (valueType === "string" || valueType === "number" || 
				valueType === "boolean") {

				if (childTarget.prop("tagName") == "INPUT") {
					childTarget.val(value);
				} else {
					childTarget.html(value);
				}
			} else if (value instanceof Array) {
				for (var val in value) {
					var cloneTarget = clone(childTarget, key);
					reflectHtml(cloneTarget, val);
				}
			} else {
				reflectHtml(childTarget, value);
			}
		}
	}

	function clone(obj, targetClass) {
		var dummy = $("<div>");
		obj.clone().appendTo(dummy);
		var cloneObj = dummy.children("." + targetClass);
		return cloneObj;
	}

	$.fn.reflectResponse = function(response) {
		var target = $(this);
		reflectHander.start(target, response);
	}
})(jQuery);