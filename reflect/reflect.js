Object.prototype.reflect = function(obj) {
	console.log(typeof obj);
	if (typeof obj === "string") {
		this.html(obj);
	} else if (typeof obj === "object") {
		console.log(obj)
	}
}
