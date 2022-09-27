const btnElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header-spot");

btnElement.addEventListener('click', function(){
    headerElement.classList.toggle("nav-open");
});



const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});