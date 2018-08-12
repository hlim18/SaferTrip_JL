var arrLang = {
    "en-us": {
      "navMenuLogin" : "Login",
      "navMenuIntro" : "Introduction",
      "navMenuHowTo" : "How to Use",
      "navMenuRR" : "Ratings & Reviews"
    },
    "ko": {
      "navMenuLogin" : "로그인",
      "navMenuIntro" : "소개",
      "navMenuHowTo" : "사용방법",
      "navMenuRR" : "사용후기"
    }
  };
  
var lang = "ko";
// Check for localStorage support (On reload, show the website based on previous setting)
if("localStorage" in window){
    var usrLang = localStorage.getItem("uiLang");
        if(usrLang) {
            lang = usrLang
        }
}

$(document).ready(function(){

    // // * language setting START
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });

    // // get/set the selected language
    // // what happens after clicking the "English" or "한국어" button
    $(".translate")
        .on({
            click : function() {
                var lang = $(this).attr("id");
        
                // update localStorage key
                if("localStorage" in window){
                    localStorage.setItem("uiLang", lang);
                    // console.log( localStorage.getItem('uiLang') );
                }
                $(".lang").each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr("key")]);
                });
    // // * language setting END
            }
            // // "click" END
        });
        // "on" END
});