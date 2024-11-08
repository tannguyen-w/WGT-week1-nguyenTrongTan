const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// document.addEventListener("DOMContentLoaded", function () {
//     const faqItems = $$(".faq-item");

//     faqItems.forEach((item) => {
//         const faqTop = item.querySelector(".faq-item__top");
//         faqTop.addEventListener("click", () => {
//             faqItems.forEach((el) => el.classList.remove("active"));

//             item.classList.add("active");
//         });
//     });
// });

const faqTops = $$(".faq-item__top");

faqTops.forEach((top) => {
    top.addEventListener("click", () => {
        const faqItem = top.parentElement;

        const content = faqItem.querySelector(".faq-item__content");

        content.classList.toggle("d-none");
        if (!content.classList.contains("d-none")) {
            faqItem.classList.add("active");
        } else {
            faqItem.classList.remove("active");
        }

        const btns = faqItem.querySelectorAll(".faq-item__btn");
        btns.forEach((btn) => btn.classList.toggle("d-none"));
    });
});

// const faqTops = $$(".faq-item__top");

// faqTops.forEach((top) => {
//     top.addEventListener("click", () => {
//         const faqItem = top.parentElement;

//         const content = faqItem.querySelector(".faq-item__content");

//         if (!faqItem.classList.contains("active") && !content.classList.contains("d-none")) {
//             faqItem.classList.add("active");
//             content.classList.add("d-none");
//         } else {
//             faqItem.classList.remove("active");
//             content.classList.remove("d-none");
//         }
//     });
// });
