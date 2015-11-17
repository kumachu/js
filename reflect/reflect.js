(function (jQuery) {
	var $ = jQuery;
	var reflectHander = {
		start: function(target, response) {
			reflectHander.reflectHtml(target, response);
		},
		reflectHtml: function(parentTarget, response) {
			if (reflectHander.isPrimitive(response)) {
				reflectHander.reflectValue(parentTarget, response);
			} else if(reflectHander.isArray(response)) {
				reflectHander.reflectArray(parentTarget, response);
			} else {
				reflectHander.reflectObject(parentTarget, response);
			}
		},
		reflectValue: function (targets, value) {
			targets.each(function(index, val) {
				var target = $(val);
				if (target.prop("tagName") === "INPUT") {
					target.val(value);
				} else {
					target.html(value);
				}
			});

		},
		reflectArray: function(targets, values) {
			targets.each(function () {
				var target = $(this);
				if (target.prop("tagName") === "SELECT") {
					for (var i = 0; i < values.length; i ++) {
						var option = $("<option>");
						option.val(values[i]);
						option.html(values[i]);
						target.append(option);
					}
				} else {
					var valueCount = values.length - 1;
					for (var i = valueCount; i >= 0; i--) {
						if (i === valueCount) {
							var cloneTarget = target;
						} else {
							var cloneTarget = target.clone();
							target.after(cloneTarget);
						}
						reflectHander.reflectHtml(target, values[i]);
					}
				}
			});
		},
		reflectObject: function(parentTarget, response) {
			for (key in response) {
				var target = parentTarget.children("." + key);
				var value = response[key];
				reflectHander.reflectHtml(target, value);
			}
		},
		isPrimitive: function(value) {
			var valueType = typeof value;
			return valueType === "string" || valueType === "number" || valueType === "boolean";
		},
		isArray: function(value) {
			return value instanceof Array;
		}
	}

	$.fn.reflectResponse = function(response) {
		var target = $(this);
		reflectHander.start(target, response);
	}
})(jQuery);