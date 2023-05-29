


jQuery(document).ready(function(){


    // anchor click
    $('.i_control').click(function(){
        $('.nav_right').toggleClass('open');
        $(this).toggleClass('i_control_active'); // active bg btn
    });

});
