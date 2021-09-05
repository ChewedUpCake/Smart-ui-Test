// BURGER MENU-----------------------------

let burger_content = document.getElementById("burger-content");
let menu_header = document.getElementById("burger-menu");

menu_header.addEventListener('click', () => {
    if (burger_content.classList.contains("burger-open")) {
        burger_content.classList.remove("burger-open");
        menu_header.classList.remove("burger-open");
    } else {
        burger_content.classList.add("burger-open");
        menu_header.classList.add("burger-open");
    }
});



//COUNTER----------------------------------------
let statistics = document.querySelector('.statistic');

statistics.addEventListener('scroll', () => {

})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const calcCount = (el) => {
    const count = +el.innerHTML;
    el.innerHTML = 0;
    const increment = 72;

    const interval = setInterval(() => {
        const currentValue = +el.innerHTML
        if ((count - currentValue) < increment) {
            clearInterval(interval)
            return  el.innerHTML = numberWithCommas(count)
        }
        else if (currentValue  === count) {
            clearInterval(interval)
            return el.innerHTML = numberWithCommas(count)
        }

        el.innerHTML = currentValue + increment
    }, 0.1)
}


const elements = document.querySelectorAll('.number');


elements.forEach(i => calcCount(i))

// CAROUSEL---------------------------------------

window.addEventListener('DOMContentLoaded', () => {
    //Slides in slider
    const slides = document.querySelectorAll('.carousel-item');
    //Slider body
    const slider = document.querySelector('.carousel-container');

    //Dynamic nav dots
    const dotsWrapper = document.createElement('ol'),
        dots=[];

    const timeOutMS = 1000;


    dotsWrapper.classList.add('dots');
    slider.append(dotsWrapper);

    //Сreating the number of dots to match the slides
    for(let i = 0; i<slides.length;i++){
        const dot = document.createElement('li');
        //Data attribute for navigation in future
        dot.setAttribute('data-slide', i+1);
        dot.classList.add('dot');
        //First slide and first dot
        if(i==0){
            dot.style.opacity = 1;
        }
        dotsWrapper.append(dot);
        dots.push(dot);
    }

    //variable for showing slide
    let slideIndex = 1;

    showSlieds(slideIndex);

    //function for changing opacity
    function getOpacityShow(dots){
        dots.forEach(dot=>dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function showSlieds(n) {
        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n<1){
            slideIndex = slides.length;
        }

        slides.forEach((element)=>{
            element.style.display = "none";
        })

        dots.forEach((dot)=>{
            dot.style.opacity= 0.5;
        })

        slides[slideIndex-1].style.display = "block";
        getOpacityShow(dots);
    }

    //Event Listeners

    dots.forEach(dot=>{
        dot.addEventListener('click',(e)=>{
            let slideTo = e.target.getAttribute('data-slide');
            slideIndex = slideTo;
            showSlieds(slideIndex);
        });
    });

    const slidesTimer = () => {
        setInterval(() => {
            showSlieds(slideIndex += 1);
        }, timeOutMS);
    }

    // slidesTimer();
});


//SORTING CUISINES------------------------------------

const recipesArray = [
    {
        "recipes": "american",
        "recipesAmount": 1437,
    },
    {
        "recipes": "chinese",
        "recipesAmount": 145,
    },
    {
        "recipes": "french",
        "recipesAmount": 27,
    },
    {
        "recipes": "indian",
        "recipesAmount": 856,
    },
    {
        "recipes": "italian",
        "recipesAmount": 327,
    },
    {
        "recipes": "mexican",
        "recipesAmount": 529,
    },
    {
        "recipes": "pizza",
        "recipesAmount": 327,
    },
    {
        "recipes": "seafood",
        "recipesAmount": 731,
    },
    {
        "recipes": "steakhouse",
        "recipesAmount": 174,
    },
    {
        "recipes": "sushi",
        "recipesAmount": 237,
    },
];

console.log(recipesArray)

const sortMin = [...recipesArray].sort(function (a, b) {
    return a.recipesAmount - b.recipesAmount
})
console.log(sortMin,recipesArray)


const sortMax = [...recipesArray].sort(function (a, b) {
    return b.recipesAmount - a.recipesAmount
})
console.log(sortMax, recipesArray)


const navLinks = [
    {
        link: document.getElementById('sort-min'),
        sort: sortMin
    },
    {
        link: document.getElementById('sort-max'),
        sort: sortMax
    },
];

navLinks.forEach(item => {
    console.log(item)
    item.link.addEventListener('click', event => {
        event.preventDefault();
        renderTable(item.sort);
        const links = document.querySelectorAll('a');
        links.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
    })
})

const table = document.querySelector('.cuisines__container');

const renderTable = recipes => {

    table.innerHTML = recipes.reduce((acc, el, index) => {
        return acc + `
           <div class="cuisines-item">
          <div class="cuisines__image" style="background-image: url(/assets/img/cuisines/${el.recipes}.png)"></div>
          <div class="cuisines__title">
            <p>${el.recipesAmount} Recipes</p>
            <h2><a href="#">${el.recipes}</a></h2>
          </div>
        </div>
        `
    }, '');
}


renderTable(recipesArray)
