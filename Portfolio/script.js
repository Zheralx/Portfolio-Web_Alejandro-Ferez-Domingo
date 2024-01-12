
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}

//



class Slider {
    slider
    sliderIndex
    arrowLeft
    arrowRight
    selectors
    images
    timeout

    constructor(slider) {
        this.slider = slider
        this.sliderIndex = 0;
        this.images = slider.getElementsByClassName("sliderGroup");


        this.selectors = this.slider.querySelector(".sliderSelector").children;
        for (let selector of this.selectors) {
            selector.addEventListener("click", this.slideTo.bind(this));
        }

        this.arrowLeft = this.slider.querySelector(".slideLeft");
        this.arrowLeft.addEventListener("click", this.slideLeft.bind(this));

        this.arrowRight = this.slider.querySelector(".slideRight");
        this.arrowRight.addEventListener("click", this.slideRight.bind(this));
        //this.timeout = setTimeout(this.slideRight.bind(this), 3500);
    }
    slideRight() {
        clearTimeout(this.timeout);
        this.images[this.sliderIndex].setAttribute("hidden", "");
        this.selectors[this.sliderIndex].setAttribute("class", "far fa-circle");
        if (++this.sliderIndex == this.images.length) this.sliderIndex = 0;
        this.images[this.sliderIndex].removeAttribute("hidden");
        this.selectors[this.sliderIndex].setAttribute("class", "fas fa-circle");
    
        this.timeout = setTimeout(this.slideRight.bind(this), 3500);
    }
    
    slideLeft() {
        clearTimeout(this.timeout);
        this.images[this.sliderIndex].setAttribute("hidden", "");
        this.selectors[this.sliderIndex].setAttribute("class", "far fa-circle");
        if (--this.sliderIndex < 0) this.sliderIndex = this.images.length - 1;
        this.images[this.sliderIndex].removeAttribute("hidden");
        this.selectors[this.sliderIndex].setAttribute("class", "fas fa-circle");
    
        this.timeout = setTimeout(this.slideRight.bind(this), 3500);
    }
    
    slideTo(evt) {
        clearTimeout(this.timeout);
        this.images[this.sliderIndex].setAttribute("hidden", "");
        this.selectors[this.sliderIndex].setAttribute("class", "far fa-circle");
        this.sliderIndex = evt.target.getAttribute("value");
        this.images[this.sliderIndex].removeAttribute("hidden");
    
        this.selectors[this.sliderIndex].setAttribute("class", "fas fa-circle");
    
        this.timeout = setTimeout(this.slideRight.bind(this), 3500);
    }
}

new Slider(document.getElementById("slider1"));
new Slider(document.getElementById("slider2"));