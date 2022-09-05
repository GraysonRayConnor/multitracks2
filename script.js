const togglePromo = document.querySelector(".toggle-promo");
const promoCode = document.querySelector(".promo-code");

togglePromo.addEventListener("change", () => {
    togglePromo.checked ? promoCode.style.display = "block" : promoCode.style.display = "none";
});


