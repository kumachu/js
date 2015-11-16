describe('success case', function() {
    it('simple', function(){
        var response = $("#simple").html();
        var json = $.parseJSON(response);
        $(".simple").reflectResponse(json);
        expect($(".simple div.test").html()).toBe("value");

        expect($(".simple input.test").val()).toBe("value");
    });

    it('primitive array', function(){
        var response = $("#primitiveArray").html();
        var json = $.parseJSON(response);
        $(".primitiveArray").reflectResponse(json);
        expect($(".primitiveArray div.test:eq(0)").html()).toBe("value0");
        expect($(".primitiveArray div.test:eq(1)").html()).toBe("value1");
        expect($(".primitiveArray div.test:eq(2)").html()).toBe("value2");

        expect($(".primitiveArray input.test:eq(0)").val()).toBe("value0");
        expect($(".primitiveArray input.test:eq(1)").val()).toBe("value1");
        expect($(".primitiveArray input.test:eq(2)").val()).toBe("value2");
    });

    it('object array', function(){
        var response = $("#objectArray").html();
        var json = $.parseJSON(response);
    	$(".objectArray").reflectResponse(json);
        expect($(".objectArray .testObject:eq(0) div.test1").html()).toBe("value1");
        expect($(".objectArray .testObject:eq(0) div.test2").html()).toBe("value2");
        expect($(".objectArray .testObject:eq(0) div.test3").html()).toBe("value3");
        expect($(".objectArray .testObject:eq(1) div.test1").html()).toBe("value4");
        expect($(".objectArray .testObject:eq(1) div.test2").html()).toBe("value5");
        expect($(".objectArray .testObject:eq(1) div.test3").html()).toBe("value6");
        expect($(".objectArray .testObject:eq(2) div.test1").html()).toBe("value7");
        expect($(".objectArray .testObject:eq(2) div.test2").html()).toBe("value8");
        expect($(".objectArray .testObject:eq(2) div.test3").html()).toBe("value9");

        expect($(".objectArray .testObject:eq(0) input.test1").val()).toBe("value1");
        expect($(".objectArray .testObject:eq(0) input.test2").val()).toBe("value2");
        expect($(".objectArray .testObject:eq(0) input.test3").val()).toBe("value3");
        expect($(".objectArray .testObject:eq(1) input.test1").val()).toBe("value4");
        expect($(".objectArray .testObject:eq(1) input.test2").val()).toBe("value5");
        expect($(".objectArray .testObject:eq(1) input.test3").val()).toBe("value6");
        expect($(".objectArray .testObject:eq(2) input.test1").val()).toBe("value7");
        expect($(".objectArray .testObject:eq(2) input.test2").val()).toBe("value8");
        expect($(".objectArray .testObject:eq(2) input.test3").val()).toBe("value9");
    });
});
