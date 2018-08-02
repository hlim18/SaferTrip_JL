$(document).ready(function() {

    // // ES6 Modules or TypeScript
    // import Swal from 'sweetalert2'

    // // CommonJS
    // const Swal = require('sweetalert2')

    $("#fallingStars").delay(300).animate({'opacity':'1'},500);
    $("#title").delay(500).animate({'opacity':'1'},800);
    $("#slogan").delay(800).animate({'opacity':'1'},800);

    // swal({
    //     title: 'Sweet!',
    //     text: 'Modal with a custom image.',
    //     imageUrl: 'https://unsplash.it/400/200',
    //     imageWidth: 400,
    //     imageHeight: 200,
    //     imageAlt: 'Custom image',
    //     animation: false
    // });
    
    // https://codepen.io/hlim18/pen/EpbLmN
    $('#test').click(function(){
        // $(".options").fadeToggle();
        $(".options:hidden").fadeIn()
            .on("click", function(){
                $(this).css("background", "#F3C78D");
            })
            .on("click", function(){
                swal({
                    title: 'Thank you!',
                    text: 'Your request has been recorded.',
                    imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'Custom image',
                    animation: false,
                    customClass: 'sweetalert-lg',
                    // backdrop color : light gray
                    backdrop: `
                        rgba(211,211,211,0.4) 
                        center left
                        no-repeat
                    `
                })
            });
    });
});
