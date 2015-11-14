describe('success case', function() {
    it('simple', function(){
		var response = $("#simple").html();
		console.log(response);
		var json = $.parseJSON(response);
    	$(".simple").reflectResponse(json);
        expect($(".simple .test").html()).toBe("value");
    });

    it('primitive array', function(){
		var response = $("#primitiveArray").html();
		console.log(response);
		var json = $.parseJSON(response);
    	$(".primitiveArray").reflectResponse(json);
        expect($(".primitiveArray .test:eq(0)").html()).toBe("value0");
        expect($(".primitiveArray .test:eq(1)").html()).toBe("value1");
        expect($(".primitiveArray .test:eq(2)").html()).toBe("value2");
    });

    it('object array', function(){
		var response = $("#objectArray").html();
		console.log(response);
		var json = $.parseJSON(response);
    	$(".objectArray").reflectResponse(json);
        expect($(".objectArray .testObject:eq(0) .test1").html()).toBe("value1");
        expect($(".objectArray .testObject:eq(0) .test2").html()).toBe("value2");
        expect($(".objectArray .testObject:eq(0) .test3").html()).toBe("value3");
        expect($(".objectArray .testObject:eq(1) .test1").html()).toBe("value4");
        expect($(".objectArray .testObject:eq(1) .test2").html()).toBe("value5");
        expect($(".objectArray .testObject:eq(1) .test3").html()).toBe("value6");
        expect($(".objectArray .testObject:eq(2) .test1").html()).toBe("value7");
        expect($(".objectArray .testObject:eq(2) .test2").html()).toBe("value8");
        expect($(".objectArray .testObject:eq(2) .test3").html()).toBe("value9");
    });
});
