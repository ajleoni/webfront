const topNav = document.querySelector(".top-navigation");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = topNav.getAttribute("data-visible");
    console.log(topNav);
    console.log(visibility);
    if (visibility === "false") {
        topNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        topNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
}
);