$(document).ready(function() {

    // $("#fallingStars").delay(300).animate({'opacity':'1'},500);
    // $("#title").delay(500).animate({'opacity':'1'},800);
    // $("#slogan").delay(800).animate({'opacity':'1'},800);

    // https://codepen.io/hlim18/pen/EpbLmN
    $('#test').click(function(){
        // $(".options").fadeToggle();
        $(".options:hidden").fadeIn()
            .on("click", function(){
                // hex color #_ _ _ _ _ _
                $(this).css("background", "#F3C78D");
            })
            .on({
                // include this for "thank-you" & "cancel" message codes
                click: function(){

                // "Thank-you" message START
                swal({
                    title: 'Thank you!',
                    text: 'Your input has been recorded.',
                    // type: 'warning',
                    imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png', 
                    imageAlt: 'Cat logo',
                    // imageClass: 'swal2-thx-img',
                    animation: false,
                    customClass: 'swal2-thx-msg',
                    // backdrop color : light gray
                    backdrop: `
                        rgba(211,211,211,0.4) 
                        center left
                        no-repeat
                    `,
                    confirmButtonColor: '#9FEDDA',
                    confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Got it!</div>'
                })
                // "Thank-you" message END

                // "Cancel" button START
                // swal({
                //     title: 'Are you sure?',
                //     imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png',
                //     imageAlt: 'Cat logo',
                //     animation: false,
                //     customClass: 'swal2-cancel-msg',
                //     // backdrop color : light gray
                //     backdrop: `
                //         rgba(211,211,211,0.4) 
                //         center left
                //         no-repeat
                //     `,
                //     // Crime-ridden areas : #F3C78D & Safe areas : #9FEDDA
                //     showCancelButton: true,
                //     confirmButtonColor: '#F3C78D',
                //     confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Yes!</div>',
                //     cancelButtonColor: '#9FEDDA',
                //     cancelButtonText: '<div id="swal2-cancelBtnTxt" style="color:#000000">Cancel</div>',
                // }).then((result) => {
                //     if (result.value){
                //         swal({
                //             title: 'Recorded!',
                //             text: 'Your input has been deleted.',
                //             type: 'success',
                //             animation: true,
                //             customClass: 'swal2-cancel-confirm-msg',
                //             // backdrop color : light gray
                //             backdrop: `
                //                 rgba(211,211,211,0.4) 
                //                 center left
                //                 no-repeat
                //             `,
                //             confirmButtonColor: '#9FEDDA',
                //             confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Got it!</div>'            
                //         });
                //     }
                // });
                // "cancel" button END

                // click: async function(){
                // // "text" enter message START
                // const {value: text} = await swal({
                //     title: 'Why do you feel unsafe here?',
                //     input: 'text',
                //     inputPlaceholder: 'Type your message :)',
                //     customClass: 'swal2-textbox-msg',

                //     showCancelButton: true,
                //     confirmButtonColor: '#F3C78D',
                //     confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Yes!</div>',
                //     cancelButtonColor: '#9FEDDA',
                //     cancelButtonText: '<div id="swal2-cancelBtnTxt" style="color:#000000">Cancel</div>',
                // });
                // if (text) {
                //     swal(
                //         `Your entered "<div id="swal2-textBoxTxt" style="color:#426A6F">${text}".`
                //     )}
                // "text" enter message END

            }
            });
    });
    // $(".swal2-confirm.swal2-styled").on({
    //     mouseenter: function() {
    //         $(this).css({backgroundColor: 'blue'},500)
    //     },
    //     mouseleave: function() {
    //         $(this).css({backgroundColor: 'red'},500)
    //     }
    // });        
})
