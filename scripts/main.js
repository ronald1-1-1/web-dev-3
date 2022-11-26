const startTime = new Date();

function ready() {
    const footer = document.getElementById('footer');
    const endTime = new Date()

    const dif = (endTime.getTime() - startTime.getTime()) / 1000;
    footer.innerHTML += 'Page load time is ' + dif + 'seconds';
}

document.addEventListener("DOMContentLoaded", ready);