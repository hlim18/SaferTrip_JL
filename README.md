# SaferTrip_JL
My part of developing the SaferTrip web app

## Table of Contents
1. [Main Page](https://github.com/hlim18/SaferTrip_JL#1-main-page)
- 1.1. [Responsive Web Design](https://github.com/hlim18/SaferTrip_JL#11-responsive-web-design) 
- 1.2. [How to Fade In on Page Load](https://github.com/hlim18/SaferTrip_JL#12-how-to-fade-in-on-page-load)

2. [Settings](https://github.com/hlim18/SaferTrip_JL#2-settings)
- 2.1. [How to use jQuery with Bootstrap 4.1.2.](https://github.com/hlim18/SaferTrip_JL#21-how-to-use-jquery-with-bootstrap-412)
- 2.2. [Fonts Comparison](https://github.com/hlim18/SaferTrip_JL#22-fonts-comparison)
- 2.3. [Detecting Language of a Visitor](https://github.com/hlim18/SaferTrip_JL#23-detecting-language-of-a-visitor)
- 2.4. [Building Multi-Language/Multilingual Website](https://github.com/hlim18/SaferTrip_JL#24-building-multi-languagemultilingual-website)

3. [Crime-ridden Areas Report Options](https://github.com/hlim18/SaferTrip_JL#3-crime-ridden-areas-report-options)
- 3.1. [Fadein() on Click](https://github.com/hlim18/SaferTrip_JL#31-fadein-on-click)
- 3.2. [Center Texts Inside Circles Vertically & Horizontally](https://github.com/hlim18/SaferTrip_JL#32-center-texts-inside-circles-vertically--horizontally)
- 3.3. [Translate() Function](https://github.com/hlim18/SaferTrip_JL#33-translate-function)
- 3.4. [Changing DIV Background Color](https://github.com/hlim18/SaferTrip_JL#34-changing-div-background-color)
- 3.5. [Customized SweetAlert2 Popup Boxes](https://github.com/hlim18/SaferTrip_JL#35-customized-sweetalert2-popup-boxes) 
- 3.6. [Different Popup Messages between Options 1-4 and Option 5](https://github.com/hlim18/SaferTrip_JL#36-different-popup-messages-between-options-1-4-and-option-5)
- 3.7. [How to Keep Background Color Changes on Page Reload](https://github.com/hlim18/SaferTrip_JL#37-how-to-keep-background-color-changes-on-page-reload)
- 3.8. [Canceling a Choice](https://github.com/hlim18/SaferTrip_JL#38-canceling-a-choice) 

4. [Side Navigation Menu](https://github.com/hlim18/SaferTrip_JL#4-side-navigation-menu)

5. [Useful Information](https://github.com/hlim18/SaferTrip_JL#5-useful-information)
- 5.1. [GitHub Markdown : Useful Techniques](https://github.com/hlim18/SaferTrip_JL#51-github-markdown--useful-techniques)
- 5.2. [Resources](https://github.com/hlim18/SaferTrip_JL#52-resources)

6. [Built With](https://github.com/hlim18/SaferTrip_JL#6-bulit-with)
- - -
 
# 1. Main Page
## 1.1. Responsive Web Design 
### 1.1.1. Responsive Breakpoints
> The `@media` rule is used in media queries to apply different styles for different media types/devices

Started with small screens first and worked up.

    1. Smartphones (320 x 568) 
    @media screen and (min-width : 0px) and (min-height: 0px)
    2. Galaxy S5 (360 x 640) 
    @media screen and (min-width : 360px) and (min-height: 64-px)
    3. iPhones 6/7/8 (375 x 667) 
    @media screen and (min-width : 375px) and (min-height: 667x)
    4. iPhone X (375 x 812) 
    @media screen and (min-width : 375px) and (min-height : 812px)
    5. iPhones 6/7/8 plus (414 x 746)  
    @media screen and (min-width : 414px) and (min-height: 746x)
    6. iPads (768 x 1024) 
    @media screen and (min-width : 768px) and (min-height: 1024px)
    7. iPad Pro (1024 x 1366) 
    @media screen and (min-width : 1024px) and (min-height: 1366px) 
    8. Desktop
    @media screen and (min-width : 630px)

#### 1.1.1.1. Acknowledgements
* CSS `@media` rule @ [w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* 2017.03.31 Stop using device breakpoints (by Adam Silver @ [Medium](https://medium.com/simple-human/stop-using-device-breakpoints-b11a87e2625c))
* 2012.10.08 How to deal with various screen sizes by using CSS3 `@media` query `in Korean` (by Seong-Kwang Song @ his [blog](http://blog.saltfactory.net/using-css-media-query-for-responsive-web/))
* CSS background image to fit width, height should auto-scale in proportion @ [StackOverflow](https://stackoverflow.com/questions/9262861/css-background-image-to-fit-width-height-should-auto-scale-in-proportion?rq=1)
* Responsive web design @[ShayHowe](https://learn.shayhowe.com/advanced-html-css/responsive-web-design/)

### 1.1.2. Responsive background - full screen
At first, I used `ackground-size: 100% 100%;` and the background image I received didn't fit into some screen sizes.

For example, there were empty spaces on left & right sides for the following screen sizes: `360 x 640`, `768 x 1024`, `1024 x 1366` and empty spaces on top & bottom sides for the following screen sizes: `411 x 823`, `375 x 812`. So, I did the following:

```CSS
body{
    background: url("Images/main_1_cover.svg") no-repeat center center fixed;
    background-size: cover;
}
```

But, for desktop, when `background-size: cover` was used, I could't see the cat in my image. Because, the original size of my image's height was much longer than the width.

So, I wanted to repeat only a partial part of my image that a cat didn't appear. When I used `background-size: contain` & `background-repeat: repeat-x`, what I saw was the following:

[![current_small.png](https://s25.postimg.cc/pqyvgace7/current_small.png)](https://postimg.cc/image/bkj4l21iz/)

Because I wanted to see the cat only in the middle, I asked a question on `StackOverflow` and learned about `multiple background`. This solved the issue.

```CSS
@media screen and (min-width : 630px) {
    body {
        /* vh: hundredths of the viewport height. */
        height:100vh;
        background:
            /*the main background*/
            url(Images/main_1_cover.svg) center,
            url(Images/main_1_cover.svg) 40% 50%,
            /*repeat the left part*/
            url(Images/main_1_cover.svg) 30% 50%,
            url(Images/main_1_cover.svg) 20% 50%,
            url(Images/main_1_cover.svg) 10% 50%,
            url(Images/main_1_cover.svg) 0% 50%,
            /*repeat the right part*/
            url(Images/main_1_cover.svg) 60% 50%,
            url(Images/main_1_cover.svg) 70% 50%,
            url(Images/main_1_cover.svg) 80% 50%,
            url(Images/main_1_cover.svg) 90% 50%,
            url(Images/main_1_cover.svg) 100% 50%;
        background-repeat:no-repeat;
        background-size:contain;         
    }
}
```

- - -

## 1.2. How to Fade In on Page Load
### 1.2.1. Method 1 : Changing opacity from 0 to 1 
```CSS
#fallingStars{
    opacity: 0;
}
#title{
    opacity: 0;
}
#slogan{
    opacity: 0;
```

```JS
$(document).ready(function() {
    $("#fallingStars").delay(200).animate({'opacity':'1'},500);
    $("#title").delay(500).animate({'opacity':'1'},800);
    $("#slogan").delay(800).animate({'opacity':'1'},800);
```

#### 1.2.1.1. Acknowledgements
* Boostrap 4.1.x Introduction @ [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* jQuery Get Started @ [w3schools](https://www.w3schools.com/JQuery/jquery_get_started.asp)
* jQuery `delay()` Method @ [w3schools](https://www.w3schools.com/jquery/eff_delay.asp)
* jQuery `.animate()` @ [jQuery](http://api.jquery.com/animate/)
* jQuery fade-in on page load (by James Houghton @ [CodePen](https://codepen.io/blondersholmvik/pen/BLKxZE))

#### 1.2.1.2. Limit
Increasing opacity from 0 to 1 and including contents in a html document prevents me from creating a singple page application.

- - -

### 1.2.2. Method 2 : 


#### 1.2.2.1. Acknowledgements
* JSON - What is `JSON` and how to use it @ [ILoveCoding](https://ilovecoding.org/lessons/json-what-is-json-and-how-to-use-it)
* Ajax: Create a `Single Page App` with jQuery @ [ILoveCoding](https://ilovecoding.org/lessons/ajax-create-a-single-page-app-with-jquery)
* jQuery Ajax in Korean @ [Open Tutorials](https://opentutorials.org/course/1375/6851)
* Node.js Course in Korean @ [Open Tutorials](https://opentutorials.org/course/2136)
* What is `CRUD`? @ [CodeAcademy](https://www.codecademy.com/articles/what-is-crud)
* Build a Single Page Application with jQuery & AJAX Course @ [Udemy](https://www.udemy.com/jquery-ajax/learn/v4/overview)
- - -

# 2. Settings

## 2.1. How to Use jQuery with Bootstrap 4.1.2.
To use `Bootstrap CDN`, links of JS stated in the bootstrap website need to be added. But, when I copied and pasted the links in a html document. It didn't work. 
> I solved the issue by replacing the `jQuery & Popper.js` scripts with `jQuery Google CDN`. 

```HTML
<!-- [Before] -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
```

```HTML
<!-- [After] -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

All Google fonts are released under open source licenses. So, those can be used in any non-commercial or commercial project.
- - -

## 2.2. Fonts Comparison
[![fonts.png](https://s25.postimg.cc/9gtyi4fkf/fonts.png)](https://postimg.cc/image/3snnr8b7v/)

Default vs `Sunflower` font vs `Poor Story` font

```HTML
<!-- [Google Fonts] To embed your selected fonts into a webpage, copy this code into the <head> of your HTML document. -->
<link href="https://fonts.googleapis.com/css?family=Poor+Story" rel="stylesheet">
```

```CSS
/* [Google Fonts] Use the following CSS rules to specify these families: */
body{
    font-style: normal;
    font-family: 'Poor Story', sans-serif;
}
```

### 2.2.1. Acknowledgments
* Fonts @ [Google Fonts](https://developers.google.com/fonts/)
* Sunflower @ [Google Fonts](https://fonts.google.com/specimen/Sunflower)
* Poor Story @ [Google Fonts](https://fonts.google.com/specimen/Poor+Story)
- - -

## 2.3. Detecting Language of a Visitor
    1. Parse the Accept-Language HTTP header, which contains information about users' language preferences
    2. (If the server can't find matching language(s)) Determine users' location from their IP address

### 2.3.1. Acknowledgements
* Website that recognizes user's location/IP & changes lang. based on that @ [StackOverflow](https://stackoverflow.com/questions/2039016/website-that-recognizes-users-location-ip-changes-lang-based-on-that)
* `Accept-Language` @ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
* `Accept-Language` used for locale setting @ [w3schools](https://www.w3.org/International/questions/qa-accept-lang-locales)
* Detecting language of a visitor @ [Localize](https://help.localizejs.com/docs/detecting-language-of-a-visitor)
- - -

## 2.4. Building Multi-Language/Multilingual Website
```HTML
<body>
    <!-- `Bootstrap` button didn't work. So, I couldn't use it here. -->
    <button class="translate langBtn" id="en-us">English</button>
    <button class="translate langBtn" id="ko">Korean</button>

    <div id="mainPage">
        <p class="lang" key="mainPgTitle" id="title"></p>
        <p class="lang" key="subTitle" id="slogan"></p>    
</body>
```

```JS
var arrLang = {
    "en-us": {
        "tabTitle": "SaferTrip",
        "mainPgTitle": "SaferTrip",
        "subTitle": "Find safer paths to travel",
    },
    "ko": {
        "tabTitle": "야옹씨의 안전한 하루",
        "mainPgTitle": "야옹씨의 안전한 하루",
        "subTitle": "내가 만들어나가는 우리동네 안전 지도"
    }
};

// The default language is Korean
var lang = "ko";
// Check for localStorage support (On reload, show the website based on previous setting)
if("localStorage" in window){
    var usrLang = localStorage.getItem("uiLang");
        if(usrLang) {
            lang = usrLang
        }
}

$(document).ready(function() {

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
            // console.log( localStorage.getItem('uiLang') );
        }
        $(".lang").each(function(index, element) {
          $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    });
    // // * language setting END
}
```

### 2.4.1. Acknowledgements
* Build multiple language website using jQuery and JSON based methods @ [StackOverflow](https://stackoverflow.com/questions/48137394/build-multiple-language-website-using-jquery-and-json-based-methods)
* Window localStorage Property @ [w3schools](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
* ISO 639-1 standard language codes @ [Andiamo](https://www.andiamo.co.uk/resources/iso-language-codes)
* .attr() @ [jQuery](http://api.jquery.com/attr/)
- - -

# 3. Crime-ridden Areas Report Options
## 3.1. Fadein() on Click
I wanted to show options after clicking a button. So, I used ":hidden" & ".fadeIn()".

```HTML
<div class="container">
    <button type="button" class="btn btn-outline-success" id="test">test</button>
    <div class="options" id="option1"><span>Lonesome<br>road</span></div>
    <div class="options" id="option2"><span>Too<br>Dark</span></div>
    <div class="options" id="option3"><span>There<br>was an<br>incident</span></div>
    <div class="options" id="option4"><span>Red-light<br>district</span></div>
    <div class="options" id="option5"><span>Etc</span></div>
</div>
```

```JS
$('#test').click(function(){
    $(".options:hidden").fadeIn();
});
```

### 3.1.1. Acknowledgements
* `.fadeIn()` @ [jQuery](https://api.jquery.com/fadeIn/)
* `:hidden Selector` @ [jQuery](https://api.jquery.com/hidden-selector/)
* The shapes of CSS @ [CSS-Tricks](https://css-tricks.com/examples/ShapesOfCSS/)
- - -

## 3.2. Center Texts Inside Circles Vertically & Horizontally
In other StackOverflow posts, people gave solutions by using `display: flex` & `vertical-align: middle` & `justify-content: center`. However, I can't use the option and solutions using `display: table-cell`, because I would like to keep `display: none` for `options` class not to show the circles when people visit the webpage. Also, I didn't set `line-height` same as `height` of a div, because this method worked for only one line of text and some of my texts became two lines inside a div. In addition, adding `transform: translateX(-50%) translateY(-50%);` didn't work for me.

### 3.2.1. By using <span>
```HTML
<div class="container">
    <button type="button" class="btn btn-outline-success" id="test">test</button>
    <div class="options" id="option1"><span>Lonesome<br>road</span></div>
    <div class="options" id="option2"><span>Too<br>Dark</span></div>
    <div class="options" id="option3"><span>There<br>was an<br>incident</span></div>
    <div class="options" id="option4"><span>Red-light<br>district</span></div>
    <div class="options" id="option5"><span>Etc</span></div>
</div>
```

```CSS
.options {
    background: #f7f7f5;
    display: none;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    width: 100%;
    /* vertically & horizontally middle */
    left: 50%;
    top: 50%; 
    /* circle */
    border-radius: 50%;
    border-style: solid;
    border-color: #F3C78D;
}

.options span {
    color: #000000;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    width: 100%;
    /* Center texts inside circles */
    top: 50%; 
    left: 50%; 
    transform: translateX(-50%) translateY(-50%);
}
```
- - - 
### 3.2.2. Without using "span" as well as "display: flex" or "display: table-cell"
Aftering adding codes to make a multi-language web app, I couldn't see texts in circles wrapped in `<span>`. So, I used `<p>` tag instead. 

> `.options span` has been changed to `.options > p`.

```HTML
<div class="container">
    <button type="button" id="test">test</button>
    <div class="options withoutInput" id="option1"><p class="lang" key="firstOption"></p></div>
    <div class="options withoutInput" id="option2"><p class="lang" key="secondOption"></p></div>
    <div class="options withoutInput" id="option3"><p class="lang" key="thirdOption"></p></div>
    <div class="options withoutInput" id="option4"><p class="lang" key="fourthOption"></p></div>
    <div class="options withInput" id="option5"><p class="lang" key="fifthOption"></p></div>
</div>
```

- - -

### 3.2.3. Acknowledgments
* CSS center text (horizontally and vertically) inside a div block @ [StackOverflow](https://stackoverflow.com/questions/5703552/)
* How do I vertically align text in a div? @ [StackOverflow](https://stackoverflow.com/questions/2939914/)

- - -

## 3.3. Translate() Function
To locate five options in a circle around a button, I used the translate() function.  The function accepts two arguments, indicating how much to move the element along the x and y axes respectively. For X and Y axes, I didn't use pixels. The reason is that I would need to find right pixels for each responsive breakpoints.

[![circles.png](https://s25.postimg.cc/up7mzk9gv/circles.png)](https://postimg.cc/image/6lgvb9qzv/)

```CSS
#option1{
    transform: translate(-100%, -150%);
}

#option2{
    transform: translate(-160%, -40%);
}

#option3{
    transform: translate(-50%, 50%);
}

#option4{
    transform: translate(60%, -40%);
}

#option5{
    transform: translate(15%, -150%);
}
```

### 3.3.1. Acknowledgements
* `translate()` @ [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)
* CSS `translate()` function @ [Quackit](https://www.quackit.com/css/functions/css_translate_function.cfm)
- - -

## 3.4. Changing DIV Background Color 
As of jQuery 3.0, .bind() has been deprecated. It was superseded by the .on() method for attaching event handlers to a document since jQuery 1.7, so its use was already discouraged.

```JS
    $('#test').click(function(){
        $(".options:hidden").fadeIn().on("click", function(){
            $(this).css("background", "#F3C78D");
        });
    });
```

### 3.4.1. Acknowledgements
* DIV Background Color Change
    - Change DIV background color with .click(function(){ @ [StackOverflow](https://stackoverflow.com/questions/13882265/change-div-background-color-with-clickfunction)
* .on()
    - 2011.12.07 jQuery 1.7 `.on()` vs `.live()` review by Sam Deering @ [SitePoint](https://www.sitepoint.com/on-vs-live-review/#.UEbZwIogdRM)
    - .bind() @ [jQuery](http://api.jquery.com/bind/)
- - - 

## 3.5. Customized SweetAlert2 Popup Boxes 
SweetAlert2 allows us to create beautiful, responsive, customizable, accessible popup boxes.

### 3.5.1. "Thank-you" Message
```JS
.on({click: function(){
    swal({
        title: 'Thank you!',
        text: 'Your input has been recorded.',
        imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png', 
        imageAlt: 'Cat logo',
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
    })}
});
```

### 3.5.2. "Cancel" Confirmation Message
```JS
.on({click: function(){
    swal({
        title: 'Are you sure?',
        imageUrl: 'https://s25.postimg.cc/42csriokf/cat_Logo.png',
        imageAlt: 'Cat logo',
        animation: false,
        customClass: 'swal2-cancel-msg',
        // backdrop color : light gray
        backdrop: `
            rgba(211,211,211,0.4) 
            center left
            no-repeat
        `,
        // Crime-ridden areas : #F3C78D & Safe areas : #9FEDDA
        showCancelButton: true,
        confirmButtonColor: '#F3C78D',
        confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Yes!</div>',
        cancelButtonColor: '#9FEDDA',
        cancelButtonText: '<div id="swal2-cancelBtnTxt" style="color:#000000">Cancel</div>',
    }).then((result) => {
        if (result.value){
            swal({
                title: 'Recorded!',
                text: 'Your input has been deleted.',
                type: 'success',
                animation: true,
                customClass: 'swal2-cancel-confirm-msg',
                // backdrop color : light gray
                backdrop: `
                    rgba(211,211,211,0.4) 
                    center left
                    no-repeat
                `,
                confirmButtonColor: '#9FEDDA',
                confirmButtonText: '<div id="swal2-confirmBtnTxt" style="color:#000000">Got it!<div id="swal2-confirmBtnTxt" style="color:#000000">'            
            });
        }
    })}
});
```

### 3.5.3. User-input Message
`Async/await` is a new way to write asynchronous code. Previous options for asynchronous code are `callbacks` and `promises`. The keyword `await` makes JavaScript wait until that promise settles and  then go on with its result. 

```JS
.on({click: async function(){
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
    });

    if (text) {
    swal(
        `Your entered : <div id="swal2-textBoxTxt" style="color:#426A6F">"${text}"</div>`
    )}}
});
```

### 3.5.4. Acknowledgements
* `SweetAlert2`
    - SweetAlert2 official page @ [GitHub](https://sweetalert2.github.io/)
    - Creating pretty popup messages using SweetAlert2 @ [TutsPlus](https://code.tutsplus.com/tutorials/creating-pretty-popup-messages-using-sweetalert2--cms-30662)
    - SweetAlert2 getting it to work @ [Laracasts](https://laracasts.com/discuss/channels/laravel/sweetalert2-getting-it-to-work?page=1)
    - Support `rem` units for sizing @[GitHub](https://github.com/sweetalert2/sweetalert2/issues/25)
    - Alert changes body `padding` style @ [GitHub](https://github.com/sweetalert2/sweetalert2/issues/678)
    - Sweetalert 2 textarea async @[StackOverflow](https://stackoverflow.com/questions/49751053/sweetalert-2-textarea-async)
* `CSS` Techniques
    - 2018.01.15 45+ jQuery javaScript CSS popup window dialog box @ [Fresh Design Web](https://freshdesignweb.com/jquery-javascript-popup-window/)
    - Simple confirmation popup @ [CodyHouse](https://codyhouse.co/gem/simple-confirmation-popup/)
    - CSS `element>element` selector @ [w3schools](https://www.w3schools.com/cssref/sel_element_gt.asp)
    - Centering a div within a div, inner DIV responsive @ [Tipue](http://www.tipue.com/blog/center-a-div/)
    - Enlarging images using CSS or Javascript @ [StackOverflow](https://stackoverflow.com/questions/18052838/enlarging-images-using-css-or-javascript)
* `Node.js` Techniques
    - 6 Reasons why JavaScript’s Async/Await blows `promises` away (Tutorial) by Mostafa Gaafar @ [HackerNoon](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
    - Async/await @ [JavaScript Info](https://javascript.info/async-await)
        
- - - 

## 3.6. Different Popup Messages between Options 1-4 and Option 5
### 3.6.1. Showing Different Images in SweetAlert2 Popup Messages
Use data-attribute to define the image link inside the element 
```JS
$(document).ready(function() {
    $('#test').click(function(){
    $(".options:hidden").fadeIn()
        .on("click", function(){
        $(this).css("background", "#F3C78D");
        })
        .on("click", function(){
        var url=$(this).attr('data-img');
        swal({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: url,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
            })
        });
    });
});
```

```HTML
  <div class="container">
    <button type="button" class="btn btn-outline-success" id="test">test</button>
    <div class="options" data-img="https://unsplash.it/400/200" id="option1"><span>Hello<br>World</span></div>
    <div class="options" data-img="https://unsplash.it/400/200" id="option2"><span>Goodbye</span></div>
    <div class="options" data-img="https://unsplash.it/400/200" id="option3"><span>How<br>are<br>you?</span></div>
    <div class="options" data-img="https://unsplash.it/400/200" id="option4"><span>Fine</span></div>
    <div class="options" data-img="https://s25.postimg.cc/kw0l49gz3/original.png" id="option5"><span>Okay</span></div>
  </div>
```
- - -

### 3.6.2. Different SweetAlert2 Popup Messages
[Temani Afif](https://stackoverflow.com/users/8620333/temani-afif) let me know how to execute different SweetAlert function. His solution was using `if($(this).attr('id')!="option5")` and `else` within `.on("click", function(){}`. (jsFiddle for his solution can be found [here](https://jsfiddle.net/15no3zyd/5/)).
```JS
.on("click", function(){
    if($(this).attr('id')!="option5") {
        swal({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
        })
    } else {
        swal(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    }
});
```
- - -

### 3.6.3. Executing “function” or “async function” Based on Selection of a Div After Clicking a Button
I wanted to use the textbox popup message that required user input on the `SweetAlert2` official [webpage]((sweetalert2.github.io/#position)) and couldn't make it work. I got `Uncaught SyntaxError: await is only valid in async function` error. So, I searched the issue on StackOverflow and found out that I needed to include `async` ([post](https://stackoverflow.com/questions/49751053/sweetalert-2-textarea-async)). The accepted answer says, "The issue is because you need to declare the click handler function as async in order to use the await keyword within it."

> Because `await` works on `swal`, `swal` is a `promise`.

```HTML
    <div class="container">
        <button type="button" class="btn btn-outline-success" id="test">test</button>
        <div class="options withoutInput" key="firstOption" id="option1">span>Lonesome<br>road</span></div>
        <div class="options withoutInput" id="option2"><span>Too<br>Dark</span></div>
        <div class="options withoutInput" id="option3"><span>There<br>was an<br>incident</span></div>
        <div class="options withoutInput" id="option4"><span>Red-light<br>district</span></div>
        <div class="options withInput" id="option5"><span>Etc</span></div>
    </div>
```

```JS
$('#test').click(function(){
    $(".withoutInput:hidden").fadeIn()
        .on("click", function(){
            $(this).css("background", "#F3C78D");
        })
        .on({ 
            click: function(){
            // "Thank-you" popup message" //
            }
        });
    $(".withInput:hidden").fadeIn()
        .on("click", function(){
            $(this).css("background", "#F3C78D");
        })
        .on({ 
            click: async function(){
            // "user-input" popup message" //
                const {value: text} = await swal({
                    // swal code goes here
                });
                if (text) {
                    // swal code goes here
                }
            }
        });
}); 
```

jsFiddle for this exercise can be found [here](jsfiddle.net/hlim188/15no3zyd/30).

### 3.6.4. Acknowledgements
* Combine hover and click functions (jQuery)? @ [StackOverflow](https://stackoverflow.com/questions/2432003/combine-hover-and-click-functions-jquery)
* 2016.02.08 Mouseenter by Mike Bostock @[bl.ocks](https://bl.ocks.org/mbostock/5247027)
* Including a different image in SweetAlert2 popup message based on selection of a div after clicking a button @ [StackOverflow](https://stackoverflow.com/questions/51694178/including-a-different-image-in-sweetalert2-popup-message-based-on-selection-of-a)
* SweetAlert2 : Executing “function” or “async function” based on selection of a div after clicking a button @[StackOverflow](https://stackoverflow.com/questions/51701900/sweetalert2-executing-function-or-async-function-based-on-selection-of-a-d)
* Sweetalert 2 textarea async @ [StackOverflow](https://stackoverflow.com/questions/49751053/sweetalert-2-textarea-async)
* Multiple Class/ID and Class Selectors @ [CSS-Tricks](https://css-tricks.com/multiple-class-id-selectors/)
- - -

### 3.7. How to Keep Background Color Changes on Page Reload


### 3.7.1. Acknowledgements
* How to keep background color changes on page reload? @ [StackOverflow](https://stackoverflow.com/questions/38928990/)

- - -

## 3.8. Canceling a Choice

### 3.8.1. Acknowledgements
* Button background color toggle @ [StackOverflow](https://stackoverflow.com/questions/17050054/)

- - -

# 4. Side Navigation Menu


- - -

# 5. Useful Information
## 5.1. GitHub Markdown : Useful Techniques
### 5.1.1. Headers

```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
```

# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

### 5.1.2. Block Quote

```
> This is a first blockquote.
>   > This is a second blockquote.
```

> This is a first blockquote.
>   > This is a second blockquote.

### 5.1.3. List
#### 5.1.3.1. Ordered List

```
1. First
2. Second
3. Third
```

1. First
2. Second
3. Third

#### 5.1.3.2. Unordered List
```
* First
    - Second
        + Third
```

* First
    - Second
        + Third

### 5.1.4. Code Block 

* For HTML codes, put ` ```HTML ` before & ` ``` ` after

```HTML
<div class="container">
    <button type="button" class="btn btn-outline-success" id="test">test</button>
</div>
```

* For CSS codes, put ` ```CSS ` before & ` ``` ` after

```CSS
#option1{
    transform: translate(-100%, -150%);
}
```

* For JavaScript codes, put ` ```JS ` before & ` ``` ` after

```JS
$(document).ready(function() {
    $("#slogan").delay(800).animate({'opacity':'1'},800);
}
```

You can also press the tab key once or the space bar four times to create a code block. 

    *This is a code block.*

*This is NOT a code block.*

### 5.1.5. Image Files

I couldn't upload an image in my computer as a part of my README file even after the following attempts:
```
![circles](/../ImagesREADME/circles.png)
![circles](../ImagesREADME/circles.png)
![circles](./ImagesREADME/circles.png)
![circles](/ImagesREADME/circles.png)
![circles](ImagesREADME/circles.png)
![circles](/../circles.png)
![circles](../circles.png)
![circles](./circles.png)
![circles](/circles.png)
![circles](circles.png)

```

I finally made it work by uploading images to @ [PostImage](https://postimg.cc/) and copied a link for GitHub markdown provided by `PostImage`. 

```
[![circles.png](https://s25.postimg.cc/up7mzk9gv/circles.png)](https://postimg.cc/image/6lgvb9qzv/)
```
[![circles.png](https://s25.postimg.cc/up7mzk9gv/circles.png)](https://postimg.cc/image/6lgvb9qzv/)

### 5.1.6. A Horizontal Line
```
***
*****
* * *
- - -
---------------------------------------
```

* * *

***

*****

- - -

---------------------------------------

### 5.1.7. Inline Links
```
[Jen Lim's LinkedIn](https://www.linkedin.com/in/hyejunglim/)
```
[Jen Lim's LinkedIn](https://www.linkedin.com/in/hyejunglim/)

### 5.1.8. Emphasize
```
*italic*
_italic_
**bold**
__bold__
~~striked~~
```
*italic*
_italic_
**bold**
__bold__
~~striked~~

### 5.1.9. Acknowledgements
* About READMEs @[GitHub Help](https://help.github.com/articles/about-readmes/)
* README-Template.md by PurpleBooth @ [GitHubGist](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* How to use Markdown `in Korean` by ihoneymon @ [GitHubGist](https://gist.github.com/ihoneymon/652be052a0727ad59601)
* Markdown Cheatsheet by adam-p @ [GitHubGist](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* How to add screenshot to READMEs in github repository? @ [StackOverflow](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository?noredirect=1&lq=1)
* GitHub relative link in markdown file @ [StackOverflow](https://stackoverflow.com/questions/7653483/github-relative-link-in-markdown-file?rq=1)
- - -

## 5.2. Resources
* <b>CSS</b>
    - CSS @ [CSS Reference](https://cssreference.io/)
    - 2017.08.04 75 Web animation tools you have to try by Nataly Birch @ [Web Designer Depot](https://www.webdesignerdepot.com/2017/08/75-web-animation-tools-you-have-to-try/)
    - Writing effective CSS selectors @ [CSS Wizardy](https://csswizardry.com/2011/09/writing-efficient-css-selectors/)
    - How to center in CSS @[How to Center in CSS](http://howtocenterincss.com/)
    - The Skinny on CSS attribute selectors @ [CSS-tricks](https://css-tricks.com/attribute-selectors/)
- - -

# 6. Bulit With
* <b>HTML, CSS</b>
    - [BootStrap 4.1.2.](https://getbootstrap.com/docs/4.1/getting-started/introduction/) : the world’s most popular framework for building responsive, mobile-first sites
* <b>JavaScript</b>
    - [jQuery 3.3.1.](https://jquery.com/) : a lightweight, "write less, do more", JavaScript library
    - [SweetAlert2](https://sweetalert2.github.io/) : A beautiful, responsive, customizable, accessible replacement for JavaScript's popup boxes

- - -
2018 © Jen Lim 