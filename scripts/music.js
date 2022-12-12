
function filter(item) {
    return item.id > Math.floor(Math.random() * 100);
}

function ready() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("preloader").classList.add("hidden")
            renderPosts(data.filter(item => filter(item)))
        })
        .catch((error) => {
            document.getElementById("posts").innerHTML = '<div class="posts__error"> Что-то пошло не так ( </div>'
            console.log(error)
        })
}

function renderPosts(data) {
    let posts = ""
    data.forEach(item => {
        posts += '<div class="post"> <div class="post__title">' + item.title + '</div>' +
            '<div class="post__body">' + item.body + '</div></div>'
    })
    document.getElementById("posts").innerHTML = posts
}

document.addEventListener("DOMContentLoaded", ready);

