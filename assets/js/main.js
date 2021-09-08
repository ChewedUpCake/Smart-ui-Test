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

//SIGN-UP FORM

const renderSignUp = () => {
    const newModal = document.createElement('div');
    newModal.classList.add('form')
    document.body.append(newModal)

    newModal.innerHTML = `
             <div class="form-container">
                <span class="form-container__close"><</span>
                <img class="form-container__logo" src="assets/img/logo.png" alt="logo">
                <h3 class="form-container__header">SIGN-UP</h3>
                <form class="form-container__fields" id="add-user-form">
                    <input required id="add-user__username" type="text" placeholder="Username">
                    <input required id="add-user__email" type="text" placeholder="Email">
                    <input required id="add-user__password" type="text" placeholder="password">
                    <div class="btn__form">
                      <button type="submit" class="form-container__btn">SIGN UP</button>
                    </div>
                    <div class="form-container__hint">
                        <p>IF YOU ALREADY HAVE AN ACCOUNT<br><span class="form-container__link" id="logInform">LOG IN</span></p>
                    </div>
              </form>`

    // LOGIN BUTTON LISTENER IN FORM
    const logIN = document.getElementById('logInform');

    logIN.addEventListener('click', () => {
        const openedModal = document.querySelector(`.form`)

        if (openedModal) {
            openedModal.remove();
        }
        renderLogIn();
    });
    // CLOSE BUTTON LISTENER IN FORM
    const closeButton = newModal.querySelector('.form-container__close');
    closeButton.addEventListener('click', () => {
        newModal.remove()
    })
}

//SIGN-UP BUTTON LISTENER
const signUpBtn = document.getElementById('sign-up');

signUpBtn.addEventListener('click', () => {
    const openedModal = document.querySelector(`.form`)

    if (openedModal) {
        openedModal.remove();
    }
    renderSignUp();
});


//LOG-IN FORM

const renderLogIn = () => {
    const newModal = document.createElement('div');
    newModal.classList.add('form')
    document.body.append(newModal)

    newModal.innerHTML = `
             <div class="form-container">
                <span class="form-container__close"><</span>
                <img class="form-container__logo" src="assets/img/logo.png" alt="logo">
                <h3 class="form-container__header">SIGN-UP</h3>
                <form class="form-container__fields" id="login-user-form">
                    <input required id="login-user__username" type="text" placeholder="Username or email">
                    <input required id="add-user__password" type="text" placeholder="password">
                    <div class="btn__form">
                      <button type="submit" class="form-container__btn">SIGN UP</button>
                    </div>
                    <div class="form-container__hint">
                        <p>DON\`T HAVE AN ACCOUNT?<br><span class="form-container__link" id="signUpform">SIGN UP</span></p>
                    </div>
              </form>`

    //SIGN-UP BUTTON LISTENER IN FORM
    const signUP = document.getElementById('signUpform');

    signUP.addEventListener('click', () => {
        const openedModal = document.querySelector(`.form`)

        if (openedModal) {
            openedModal.remove();
        }
        renderSignUp();
    })
    //CLOSE BUTTON LISTENER IN FORM
    const closeButton = newModal.querySelector('.form-container__close');
    closeButton.addEventListener('click', () => {
        newModal.remove()
    })
};

//LOGIN BUTTON LISTENER IN FORM
const logInBtn = document.getElementById('log-in');

logInBtn.addEventListener('click', () => {
    const openedModal = document.querySelector(`.form`)

    if (openedModal) {
        openedModal.remove();
    }
    renderLogIn();
});

// GET REWARDED LINK LISTENER

const getRewarded = document.querySelector('.add-recipe-link');

getRewarded.addEventListener('click', () => {
    const openedModal = document.querySelector(`.form`)

    if (openedModal) {
        openedModal.remove();
    }
    renderSignUp();
});


//COUNTER----------------------------------------
let statistics = document.querySelector('.statistic');
let statisticsTop = statistics.getBoundingClientRect().top;

//ADD COMMAS FUNCTION
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//FUNCTION ANIMATE COUNTING
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
    }, 10)
}


const elements = document.querySelectorAll('.number');
/* I`ve tried to hang the listener but it don`t work properly, if you want to see it anyway,
please uncomment the script under and comment the last call of the function calcCount

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > statisticsTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        elements.forEach(i => calcCount(i))
    }
});
*/
    // Comment me
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

//ARRAY OF VARIABLES AS DATABASE
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

//FUNCTION SORT FROM MIN TO MAX AMOUNT OF RECIPES
const sortMin = [...recipesArray].sort(function (a, b) {
    return a.recipesAmount - b.recipesAmount
})

//FUNCTION SORT FROM MIN TO MAX AMOUNT OF RECIPES
const sortMax = [...recipesArray].sort(function (a, b) {
    return b.recipesAmount - a.recipesAmount
})


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

//LISTENERS FOR NAV BUTTONS
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

//FUNCTION RENDER DYNAMIC GRID IN HTML
const table = document.querySelector('.cuisines__container');

const renderTable = recipes => {

    table.innerHTML = recipes.reduce((acc, el, index) => {
        return acc + `
           <div class="cuisines-item">
          <div class="cuisines__image" style="background-image: url(assets/img/cuisines/${el.recipes}.png)"></div>
          <div class="cuisines__title">
            <p>${el.recipesAmount} Recipes</p>
            <h2><a href="#">${el.recipes}</a></h2>
          </div>
        </div>
        `
    }, '');
}


renderTable(recipesArray)
