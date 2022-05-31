// Slider
function s(a) {
    return document.querySelector(a)
}

function sa(a) {
    return document.querySelectorAll(a)
}

var images = [
    './slider/1.jpg',
    './slider/2.jpg',
    './slider/3.jpg'
];
var index = 0
var timer;

displayImage(images[index])


function displayImage(img, nextOrPrev) {
    // s(".slider img").setAttribute("src", img)
    if (nextOrPrev == 'n') {
        s(".slider").innerHTML = '<img class="wow fadeInLeft" src="' + img + '" alt="" srcset="">'
        return;
    }
    s(".slider").innerHTML = '<img class="wow fadeInRight" src="' + img + '" alt="" srcset="">'
}

function handleNext() {
    index++
    if (index == images.length) {
        index = 0;
        displayImage(images[index], 'n')
        return;
    }
    displayImage(images[index], 'n')
}


function handlePrev() {
    index--
    if (index < 0) {
        index = images.length - 1
        displayImage(images[index])
        return;
    }
    displayImage(images[index], 'p')
}



function go() {
    if (timer == undefined) {
        timer = setInterval(function() {
            handleNext()
        }, 2000)
    }
}

function stop() {
    clearInterval(timer);
    timer = undefined;
}

/**/
var Clothes = {
    All: [
        './CARDIGANS/1.jpg',
        './CARDIGANS/2.jpg',
        './BLAZERS/1.jpg',
        './BLAZERS/2.jpg',
        './Pants/1.jpg',
        './Pants/2.jpg',

    ],
    BLAZERS: [
        './BLAZERS/1.jpg',
        './BLAZERS/2.jpg',
        './BLAZERS/3.jpg',
        './BLAZERS/4.jpg',
        './BLAZERS/5.jpg',
        './BLAZERS/6.jpg',
    ],
    CARDIGANS: [
        './CARDIGANS/1.jpg',
        './CARDIGANS/2.jpg',
        './CARDIGANS/3.jpg',
        './CARDIGANS/4.jpg',
        './CARDIGANS/5.jpg',
        './CARDIGANS/6.jpg',

    ],
    Pants: [
        './Pants/1.jpg',
        './Pants/2.jpg',
        './Pants/3.jpg',
        './Pants/4.jpg',
        './Pants/5.jpg',
        './Pants/6.jpg',
    ]
}


//make the gallery buttons listen
var gallery_buttons = document.querySelectorAll('.gallery-btn')
for (var k = 0; k < gallery_buttons.length; k++) {
    gallery_buttons[k].addEventListener('click', function(e) {
        displayImages(e.target.innerText)
    })
}

displayImages('All')

function displayImages(category) {
    var categoryImages = Clothes[category]
    var imagesContainer = document.querySelector('.imagesContainer')

    //clear the images container
    imagesContainer.innerHTML = ''

    //display the selected images category
    var imageSrc;
    for (var i = 0; i < categoryImages.length; i++) {
        imageSrc = categoryImages[i]
        imagesContainer.innerHTML += '<img style="width:30%;margin-bottom:10px;" class="wow fadeInUp" data-wow-duration=".5s" src="' + imageSrc + '"/>'
    }
}

//=============scroll top

var scroll_top = document.querySelector(".scroll-top")



scroll_top.classList.add("hide")



//make the browser listen to scroll

window.onscroll = function() {

    if (document.documentElement.scrollTop > 500) {

        scroll_top.classList.remove("hide")

    } else {

        scroll_top.classList.add("hide")

    }

}



scroll_top.addEventListener("click", function() {

    scrollTo({

        top: 0,

        behavior: "smooth"

    })

})