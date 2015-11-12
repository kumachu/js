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
				for (var i = response.length - 1; i >= 0; i--) {
					if (i === response.length -1) {
						var cloneTarget = parentTarget;
					} else {
						var cloneTarget = parentTarget.clone();
						parentTarget.after(cloneTarget);
					}
					this.reflectHtml(parentTarget, response[i]);
				}
			} else {
				this.reflectObject(parentTarget, response);
			}
		},
		reflectObject: function(parentTarget, response) {
			for (key in response) {
				var target = parentTarget.children("." + key);
				var value = response[key];
				this.reflectHtml(target, value);
			}
		},
		reflectValue: function (target, value) {
			if (target.prop("tagName") === "INPUT") {
				target.val(value);
			} else {
				target.html(value);
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