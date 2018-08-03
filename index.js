$(document).ready(function() {

    // $("#fallingStars").delay(300).animate({'opacity':'1'},500);
    // $("#title").delay(500).animate({'opacity':'1'},800);
    // $("#slogan").delay(800).animate({'opacity':'1'},800);

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
                    text: 'Your input has been recorded.',
                    // type: 'warning',
                    imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png',
                    imageAlt: 'Cat logo',
                    animation: false,
                    // backdrop color : light gray
                    backdrop: `
                        rgba(211,211,211,0.4) 
                        center left
                        no-repeat
                    `,
                    confirmButtonColor: '#9FEDDA',
                    confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Got it!</div>',
                });

                // // "Cancel" buton
                // swal({
                //     title: 'Are you sure?',
                //     imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png',
                //     imageClass: 'swal2-img',
                //     imageAlt: 'Cat logo',
                //     animation: false,
                //     customClass: 'swal2-thxu',
                //     // backdrop color : light gray
                //     backdrop: `
                //         rgba(211,211,211,0.4) 
                //         center left
                //         no-repeat
                //     `,
                //     // Crime-ridden areas : #F3C78D & Safe areas : #9FEDDA
                //     showCancelButton: true,
                //     confirmButtonColor: '#F3C78D',
                //     cancelButtonColor: '#9FEDDA',
                //     confirmButtonText: 'Yes!'
                // }).then((result) => {
                //     if (result.value){
                //         swal({
                //             title: 'Recorded!',
                //             text: 'Your input has been deleted.',
                //             type: 'success',
                //             imageClass: 'swal2-img',
                //             imageAlt: 'Cat logo',
                //             animation: false,
                //             customClass: 'swal2-thxu',
                //             // backdrop color : light gray
                //             backdrop: `
                //                 rgba(211,211,211,0.4) 
                //                 center left
                //                 no-repeat
                //             `
                //         });
                //     }
                // });


            });
    });
})
