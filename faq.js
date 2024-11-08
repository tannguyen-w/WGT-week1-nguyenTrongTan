const itemTop = document.querySelectorAll(".item-top");

itemTop.forEach((top) => {
    top.addEventListener("click", () => {
        let item = top.parentElement;
        const content = item.querySelector(".item-content");

        const icons = item.querySelectorAll(".fa-solid");

        // const plus = item.querySelector(".fa-plus");
        // const minus = item.querySelector(".fa-minus");

        // if (content.style.display !== "block") {
        //     content.style.display = "block";
        //     content.style.opacity = "1";
        //     top.style.border = "none";
        //     minus.style.display = "block";
        //     plus.style.display = "none";
        // } else {
        //     content.style.display = "none";
        //     content.style.opacity = "0";
        //     top.style.borderBottom = "1px solid #ccc";
        //     minus.style.display = "none";
        //     plus.style.display = "block";
        // }

        content.classList.toggle("open");
        top.classList.toggle("border");
        top.classList.toggle("active");
        icons.forEach((icon) => icon.classList.toggle("d-none"));
    });
});
