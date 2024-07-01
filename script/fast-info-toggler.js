document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementsByClassName("fast-info__wrapper__toggler");
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            this.parentNode.classList.toggle("open");
            let content = this.parentNode.querySelector(".fast-info__wrapper__text");
            let toggler = this;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                toggler.style.rotate = null;
            } else{
                content.style.maxHeight = content.scrollHeight + "px";
                toggler.style.rotate = "180deg"
            }
        })
    }
})