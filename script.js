const input_field = document.querySelector('.input');

document.addEventListener('click', function (e) {
    if (input_field.contains(e.target)) {
        // click inside
        input_field.style.border = "2px solid rgba(220, 20, 60, 0.5)";
    } else {
        // click outside
        input_field.style.border = "2px solid rgba(220, 20, 60, 0.2)";
    }
});

const rating = document.querySelector('.rating');
const logo = document.querySelector('.logo');

rating.addEventListener('click', function () {
    logo.style.opacity = "0.9";
    logo.style.transform = " translate(-50%, -50%) scale(1)";
    setTimeout(() => {
        logo.style.opacity = "0";
        logo.style.transform = " translate(-50%, -50%) scale(0.2)";
    }, 1000);
});
