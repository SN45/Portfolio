document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Data Engineer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".row").forEach(row => {
        row.addEventListener("click", function () {
            modal.style.display = "flex";
            modalTitle.innerText = this.dataset.title;
            modalDescription.innerText = this.dataset.description;
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
    };

    /*================================= scroll section active link ===================================*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        /*================================= sticky navbar ===================================*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        /*================================= remove toggle icon and navbar ===================================*/
        if (window.innerWidth <= 768) {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    };
});
