const startTime = new Date();

function ready() {
    const footer = document.getElementById('footer');
    const endTime = new Date()

    const dif = (endTime.getTime() - startTime.getTime()) / 1000;
    footer.innerHTML += 'Page load time is ' + dif + 'seconds';

    if (document.location.href.includes("/index.html")){
        console.log("aaaaaaaaa")
        document.getElementById("index-nav").classList.add("navigation__elem-selected")
    }
    if (document.location.href.includes("/about.html")){
        document.getElementById("about-nav").classList.add("navigation__elem-selected")
    }
    if (document.location.href.includes("/constructor.html")){
        document.getElementById("constructor-nav").classList.add("navigation__elem-selected")
    }
}

document.addEventListener("DOMContentLoaded", ready);

