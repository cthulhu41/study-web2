document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav__burg-button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})