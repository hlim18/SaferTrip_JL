# SaferTrip_JL
My part of developing the SaferTrip web app

## 1. Main Page
### 1.1 Responsive Web Design 
#### 1.1.1 CSS @media query
> The @media rule is used in media queries to apply different styles for different media types/devices

Started with small screens first and worked up.

#### 1.1.2 How I divided sections
    /* smartphones */ 
    @media screen and (min-width : 0px)
    /* iPhones 6/7/8 plus */
    @media screen and (min-width : 414px)
    /* iPads */
    @media screen and (min-width : 768px)
    /* Desktops and laptops */
    @media screen and (min-width : 1024px)

#### 1.1.3 Acknowledgements
* CSS @media rule @ [w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* 2017.03.31 "Stop using device breakpoints" (by Adam Silver @ [Medium](https://medium.com/simple-human/stop-using-device-breakpoints-b11a87e2625c))
* 2012.10.08 "How to deal with various screen sizes by using CSS3 @media query" in Korean (by Seong-Kwang Song @ his [blog](http://blog.saltfactory.net/using-css-media-query-for-responsive-web/))

### 1.2 Fade-in on page load
#### 1.2.1 How to work with Bootstrap 4.1.x
To use BootstrapCDN, links of CSS and JS stated in the bootstrap website need to be added. But, when I copied and pasted the links in my html document. It didn't work. I solved the issue by replacing the jQuery Bootstrap CDN with the jQuery Google CDN. 

    [jQuery Bootstrap CDN]
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

    [jQuery Google CDN]
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

#### 1.2.2 How to fade in on page load

#### 1.2.3 Acknowledgements
* Boostrap 4.1.x Introduction @ [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
* jQuery Get Started @ [w3schools](https://www.w3schools.com/JQuery/jquery_get_started.asp)
* jQuery delay() Method @ [w3schools](https://www.w3schools.com/jquery/eff_delay.asp)
* jQuery .animate() @ [jQuery](http://api.jquery.com/animate/)
* jQuery fade-in on page load (by James Houghton @ [CodePen](https://codepen.io/blondersholmvik/pen/BLKxZE))

## 2. Bulit With
* <b>HTML, CSS</b>
* <b>JavaScript</b>
    - [jQuery](https://jquery.com/) : a lightweight, "write less, do more", JavaScript library

- - -
2018 © Jen Lim 