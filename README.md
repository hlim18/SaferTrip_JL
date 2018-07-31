# SaferTrip_JL
My part of developing the SaferTrip web app

## 1. Main Page
### 1.1 Responsive Web Design 
#### 1.1.1 CSS @media query
> The `@media` rule is used in media queries to apply different styles for different media types/devices

Started with small screens first and worked up.

#### 1.1.2 How I divided sections
    /* Smartphones */ 
    @media screen and (min-width : 0px)
    /* Galaxy S5 */
    @media screen and (min-width : 360px) 
    /* iPhones 6/7/8  */
    @media screen and (min-width : 375px)
    /* iPhones 6/7/8 plus */
    @media screen and (min-width : 414px)
    /* iPads */
    @media screen and (min-width : 768px)
    /* Desktops and laptops */
    @media screen and (min-width : 1024px)

#### 1.1.3 Responsive background - full screen
```CSS
body{
    background: url("Images/main_1_cover.svg") no-repeat center center fixed;
    background-size: 100% 100%;
}
```

#### 1.1.4 Responsive image - full screen, fixed top
```CSS
#fallingStars{
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    overflow: auto;
}
```

#### 1.1.5 Acknowledgements
* CSS `@media` rule @ [w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* 2017.03.31 "Stop using device breakpoints" (by Adam Silver @ [Medium](https://medium.com/simple-human/stop-using-device-breakpoints-b11a87e2625c))
* 2012.10.08 "How to deal with various screen sizes by using CSS3 `@media` query" in Korean (by Seong-Kwang Song @ his [blog](http://blog.saltfactory.net/using-css-media-query-for-responsive-web/))
* 2013.08.28 "Responsive image full screen" @ [StackOverflow](https://stackoverflow.com/questions/18490334/responsive-image-full-screen-and-centered-maintain-aspect-ratio-not-exceed-wi)
- - -

### 1.2 Fade-in on page load
#### 1.2.1 How to work with Bootstrap 4.1.x
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

- - -

#### 1.2.2 How to fade in on page load
##### 1.2.2.1 Method 1 : Chainging opacity from 0 to 1 
###### 1.2.2.1.1 CSS & JS Codes for Method 1

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

###### 1.2.2.1.2 Acknowledgements
* Boostrap 4.1.x Introduction @ [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* jQuery Get Started @ [w3schools](https://www.w3schools.com/JQuery/jquery_get_started.asp)
* jQuery `delay()` Method @ [w3schools](https://www.w3schools.com/jquery/eff_delay.asp)
* jQuery `.animate()` @ [jQuery](http://api.jquery.com/animate/)
* jQuery fade-in on page load (by James Houghton @ [CodePen](https://codepen.io/blondersholmvik/pen/BLKxZE))

###### 1.2.2.1.3 Limit
Increasing opacity from 0 to 1 and including contents in a html document prevents me from creating a singple page application.

- - -

##### 1.2.2.2. Method 2 : 


###### 1.2.2.1.3 CSS & JS Codes for Method 2

###### 1.2.2.1.4 Acknowledgements
* JSON - What is JSON and how to use it @ [ILoveCoding](https://ilovecoding.org/lessons/json-what-is-json-and-how-to-use-it)
* Ajax: Create a Single Page App with jQuery @ [ILoveCoding](https://ilovecoding.org/lessons/ajax-create-a-single-page-app-with-jquery)
* jQuery Ajax in Korean @ [Open Tutorials](https://opentutorials.org/course/1375/6851)
* Node.js Course in Korean @ [Open Tutorials](https://opentutorials.org/course/2136)
* What is CRUD? @ [CodeAcademy](https://www.codecademy.com/articles/what-is-crud)
* Build a Single Page Application with jQuery & AJAX Course @ [Udemy](https://www.udemy.com/jquery-ajax/learn/v4/overview)

- - -

### 1.3 Two Language Options
The SaferTrip project will be available in 2 languages : Korean & English. 

    1. Parse the Accept-Language HTTP header, which contains information about users' language preferences
    2. (If the server can't find matching language(s)) Determine users' location from their IP address

#### 1.3.2 Acknowledgements
* Website that recognizes user's location/IP & changes lang. based on that @ [StackOverflow](https://stackoverflow.com/questions/2039016/website-that-recognizes-users-location-ip-changes-lang-based-on-that)
* `Accept-Language` @ [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
* `Accept-Language` used for locale setting @ [W3C](https://www.w3.org/International/questions/qa-accept-lang-locales)
* Detecting Language of a Visitor @ [Localize](https://help.localizejs.com/docs/detecting-language-of-a-visitor)


- - -

## 2. On the map
### 2.1. Crime-ridden Areas Selection
#### 2.1.1. Multiple options fade-toggle on click
The translate() function accepts two arguments, indicating how much to move the element along the x and y axes respectively.

##### 2.1.1.1. Code Example
The translate() function accepts two arguments, indicating how much to move the element along the x and y axes respectively.

##### 2.1.1.2. Acknowledgements
* `.fadeIn()` @ [jQuery](https://api.jquery.com/fadeIn/)
* `:hidden Selector` @ [jQuery](https://api.jquery.com/hidden-selector/)
* CSS 'translate()` function @ [Quackit](https://www.quackit.com/css/functions/css_translate_function.cfm)
* The shapes of CSS @ [CSS-Tricks](https://css-tricks.com/examples/ShapesOfCSS/)
* Center texts inside circles & fadeToggle not working @ [StackOverflow](https://stackoverflow.com/questions/51609769/center-texts-inside-circles-fadetoggle-not-working)
* CSS background image to fit width, height should auto-scale in proportion @ [StackOverflow](https://stackoverflow.com/questions/9262861/css-background-image-to-fit-width-height-should-auto-scale-in-proportion?rq=1)
- - -

## 3. Bulit With
* <b>HTML, CSS</b>
* <b>JavaScript</b>
    - [jQuery](https://jquery.com/) : a lightweight, "write less, do more", JavaScript library

- - -
2018 © Jen Lim 