$(document).ready(function() {

    // https://codepen.io/hlim18/pen/jppoGK
    // The default language is Korean
    var lang = "ko";
    // Check for localStorage support (On reload, show the website based on previous setting)
    if("localStorage" in window){
        var usrLang = localStorage.getItem("uiLang");
            if(usrLang) {
                lang = usrLang
            }
    }

    // // * language setting START
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
      
    // get/set the selected language
    $(".translate").click(function() {
        var lang = $(this).attr("id");

        // update localStorage key
        if("localStorage" in window){
            localStorage.setItem("uiLang", lang);
            console.log( localStorage.getItem('uiLang') );
        }
        $(".lang").each(function(index, element) {
          $(this).text(arrLang[lang][$(this).attr("key")]);
        });
      });
    // // * language setting END

    var arrLang = {
        // "object"에 "<br>안 먹힘.." 그럼 html에서 조정?!
        "en-us": {
            "tabTitle": "SaferTrip",
            "mainPgTitle": "SaferTrip",
            "subTitle": "Find safer paths to travel",
            "story" : "Kitty always patrols<br>tourist attractions to help people<br>to travel safely.<br><br>So, Kitty asks for your help.<br>Please let Kitty know<br>crime-ridden areas!<br><br>Based on what people tell Kitty,<br>Kitty will guide you<br>to safer paths to travel.",
            "firstOption" : "Lonesome<br>road",
            "secondOption" : "Too<br>Dark",
            "thirdOption" : "There<br>was an<br>incident",
            "fourthOption" : "Red-light<br>district",
            "fifthOption" : "Etc",
            "tutorial1" : "Areas that CCTV cover are marked with green circles.",
            "tutorial2-1" : "Crime-ridden areas are marked with orange circles.",
            "tutorial2-2" : "You can participate in reporting crime-ridden areas.",
            "tutorial3" : "Please tap where you feel unsafe.",
            "tutorial4-1" : "Orange location icon is appeared.",
            "tutorial4-2" : "Tap the icon!",
            "tutorial5-1" : "Find a safer path",
            "tutorial5-2" : "You can find a safer path more likely to be covered by CCTVs and/or less likely to be reported as crime-ridden areas.",
            "menu1" : "Introduction",
            "menu2" : "How to Use",
            "menu3" : "Ratings & Reviews"
        },
        "ko": {
            "tabTitle": "야옹씨의 안전한 하루",
            "mainPgTitle": "야옹씨의<br>안전한 하루",
            "subTitle": "내가 만들어나가는 우리동네 안전 지도",
            "story" : "야옹씨는 사람들이 안전하게<br>여행할 수 있도록<br>항상 여행지를 순찰하는<br>좋은 길고양이에요.<br><br>그래서 야옹씨는<br>여러분들에게 도움을 청해요.<br>위험해보이는 길을<br>알고있다면 알려주세요!<br><br>여러분이 알려주신<br>정보를 기반으로<br>위험 지역을 피한<br>안전한 길로 안내해 드릴 거에요.",
            "firstOption" : "인적이<br>드물어요",
            "secondOption" : "어두워요",
            "thirdOption" : "사고가<br>난 적<br>있어요",
            "fourthOption" : "유흥가에요",
            "fifthOption" : "기타",
            "tutorial1" : "CCTV가 설치되어있는 곳은<br>초록색으로 표시되어있어요.",
            "tutorial2-1" : "위험하게 느껴지는 곳은<br>주황색으로 표시되어있어요.",
            "tutorial2-2" : "여러분이 직접 표시를<br>할 수도 있어요.",
            "tutorial3" : "길을 가다가<br>위험해보이는 곳이 있다면<br>눌러주세요.",
            "tutorial4-1" : "주황색 위치 아이콘이 생겼어요.",
            "tutorial4-2" : "아이콘을 눌러보세요!",
            "tutorial5-1" : "안전길찾기",
            "tutorial5-2" : "CCTV가 설치되어 있거나,<br>위험하게 느껴지는 곳을 최대한 피한 안전한 길로<br>안내 받을 수도 있어요.",
            "menu1" : "소개",
            "menu2" : "사용방법",
            "menu3" : "사용후기"
        }
    };

    // loading animation
    $("#fallingStars").delay(300).animate({'opacity':'1'},500);
    $("#title").delay(500).animate({'opacity':'1'},800);
    $("#slogan").delay(800).animate({'opacity':'1'},800);

    // https://codepen.io/hlim18/pen/EpbLmN
    $('#test').click(function(){
        // $(".options").fadeToggle();
        $(".options:hidden").fadeIn()
            .on("click", function(){
                // hex color #_ _ _ _ _ _
                $(this).css("background", "#F3C78D");
            })
            .on({
                // // include this for "thank-you" & "cancel" message codes
                // click: function(){
                // // // "Thank-you" message START
                // swal({
                //     title: 'Thank you!',
                //     text: 'Your input has been recorded.',
                //     // type: 'warning',
                //     imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png', 
                //     imageAlt: 'Cat logo',
                //     // imageClass: 'swal2-thx-img',
                //     animation: false,
                //     customClass: 'swal2-thx-msg',
                //     // backdrop color : light gray
                //     backdrop: `
                //         rgba(211,211,211,0.4) 
                //         center left
                //         no-repeat
                //     `,
                //     confirmButtonColor: '#9FEDDA',
                //     confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Got it!</div>'
                // })
                // // // "Thank-you" message END

                // // "Cancel" button START
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
                // // "cancel" button END

                // // include this for "text-input" & "login & password" message codes
                click: async function(){

                // // // "text" enter message START
                const {value: text} = await swal({
                    title: 'Why do you feel unsafe here?',
                    input: 'text',
                    inputPlaceholder: 'Type your message :)',
                    customClass: 'swal2-textbox-msg',

                    showCancelButton: true,
                    confirmButtonColor: '#F3C78D',
                    confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Yes!</div>',
                    cancelButtonColor: '#9FEDDA',
                    cancelButtonText: '<div id="swal2-cancelBtnTxt" style="color:#000000">Cancel</div>',
                    // backdrop color : light gray
                    backdrop: `
                    rgba(211,211,211,0.4) 
                    center left
                    no-repeat
                    `,
                    inputValidator: (value) => {
                        return !value && 'You need to write something!'
                    }
                });
                if (text) {
                    swal({
                        text: `Your entered : "${text}"`,
                        // backdrop color : light gray
                        backdrop: `
                        rgba(211,211,211,0.4) 
                        center left
                        no-repeat
                        `,
                        confirmButtonColor: '#F3C78D',
                        confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Okay</div>'
                    })
                }
                // // "text" enter message END
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
