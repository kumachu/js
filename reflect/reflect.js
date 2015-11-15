(function (jQuery) {
	var $ = jQuery;
	var reflectHander = {
		start: function(target, response) {
			this.reflectHtml(target, response);
		},
		reflectHtml: function(parentTarget, response) {
			if (this.isPrimitive(response)) {
				this.reflectValue(parentTarget, response);
			} else if(this.isArray(response)) {
				this.reflectArray(parentTarget, response);
			} else {
				this.reflectObject(parentTarget, response);
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
		reflectArray: function(target, values) {
			for (var i = values.length - 1; i >= 0; i--) {
				if (i === values.length -1) {
					var cloneTarget = target;
				} else {
					var cloneTarget = target.clone();
					target.after(cloneTarget);
				}
				this.reflectHtml(target, values[i]);
			}
		},
		reflectObject: function(parentTarget, response) {
			for (key in response) {
				var target = parentTarget.children("." + key);
				var value = response[key];
				this.reflectHtml(target, value);
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