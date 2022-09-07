const togglePromo = document.querySelector(".toggle-promo");
const promoCode = document.querySelector(".promo-code");
const mobileMenu = document.querySelector(".toggle-menu-btn");
const navigation = document.querySelector(".navigation");

mobileMenu.addEventListener("click", () => {
    navigation.classList.toggle("open-menu");
})

togglePromo.addEventListener("change", () => {
    togglePromo.checked ? promoCode.style.display = "block" : promoCode.style.display = "none";
});

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown") != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown");
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
})


