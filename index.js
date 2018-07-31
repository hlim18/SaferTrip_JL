$(document).ready(function() {
    $("#fallingStars").delay(300).animate({'opacity':'1'},500);
    $("#title").delay(500).animate({'opacity':'1'},800);
    $("#slogan").delay(800).animate({'opacity':'1'},800);

    // https://codepen.io/hlim18/pen/EpbLmN
    $('#test').click(function(){
        // $(this).slideUp();
        // $(".options").fadeToggle();
        $(".options:hidden").fadeIn();
    });

    var click = false;
    
});
