var flag = true; 
$(window).scroll(function() {

    var win_height = $(window).scrollTop();
    var element_position = $('#skills').offset().top - 180;
    
    if ((win_height > element_position) && (win_height) && flag) {
    	console.log("You have reached skills bar");
    	flag=false;
    	$('progress').each(function() {
                    var max = $(this).val();
                    $(this).val(0).animate({
                        value: max
                    }, {
                        duration: 2000,
                        easing: ''
                    });
                });
    }
    else{
    	console.log("You are out of area");
    }
});
