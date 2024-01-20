//HEADER
let element= document.querySelector('.header');
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 55) {
    element.classList.add ('header__sticky');
  } else {
    element.classList.remove ('header__sticky');
  }
})

//BURGER-MENU
let html = document.querySelector('.blur');
let burger = document.querySelector('.burger');
let header = document.querySelector('.header');
let headerNav = document.querySelector('.nav');
burger.addEventListener('click', function (){
    html.classList.toggle('active');
    burger.classList.toggle('active');
    header.classList.toggle('active');
    headerNav.classList.toggle('active');
})

//SECTION-TITLE
const titleSlider = new Swiper('.title_slider', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.title_pagination',
      clickable: true,
    },
  });

  //SECTION-NEWS
const newsSlider = new Swiper('.news_slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    10: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  pagination: {
    el: '.news_pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.news_button_next',
    prevEl: '.news_button_prev',
  },
});

//SECTION-GALLERY
Fancybox.bind("[data-fancybox]", {
});

//READ-MORE
$('.items').readmore({
  startOpen: false,
  speed: 75,
  collapsedHeight: 438,
  moreLink: '<a class="more" href="#">See more</a>',
  lessLink: '<a class="more" href="#">See less</a>',
});

//SECTION-MAP
let map;
const chicago = { lat: 41.85, lng: -87.65 };
function createCenterControl(map) {
  const controlButton = document.createElement("button");
  // Set CSS for the control.
  controlButton.classList.add('buttonStyle');
  controlButton.textContent = "Center Map";
  controlButton.title = "Click to recenter the map";
  controlButton.type = "button";
  // Setup the click event listeners: simply set the map to Chicago.
  controlButton.addEventListener("click", () => {
    map.setCenter(chicago);
  });
  return controlButton;
}
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 49.496675, lng: -102.65625 },
  });
  let georssLayer = new google.maps.KmlLayer({
    url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
  });
  georssLayer.setMap(map);
  // Create the DIV to hold the control.
  const centerControlDiv = document.createElement("div");
  // Create the control.
  const centerControl = createCenterControl(map);
  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    centerControlDiv
  );
}


/*FORM*/
$('.contacts-form').validate ({
  rules: {
    name: {
      required: true,
      minLength: 3,
    },
    email: {
      required: true,
      email:true,
    },
  }
}); 

//SMOOTH-SCROLL
let anchar = document.querySelectorAll('a[href^="#"]');
anchar.forEach (link => {
  link.addEventListener ('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute ('href').substring(1);
    const scrollTarget = document.getElementById (href);
    const topOffset = 70;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    }) 
  })
})

/*ACTIVE-SECTION*/ 
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = () => {
  section.forEach (sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top > offset && top < offset + height) {
      navLink.forEach (links => {
        links.classList.remove ('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}