document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM загружен.");

    // --- Открытие QR-ссылки ---
    document.querySelector(".qr-container").addEventListener("click", function () {
        window.location.href = "https://links.dukduk.uz";
    });

    // --- Прокрутка страницы ---
    document.querySelector("#payment").addEventListener("click", function () {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    document.querySelector("#about").addEventListener("click", function () {
        document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    });

    // --- Модальное окно ---
    const modalOverlay = document.getElementById("modalOverlay");
    const productModal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");

    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalOverlay.classList.add("active");
        productModal.classList.add("active");
    }

    function closeModalHandler() {
        modalOverlay.classList.remove("active");
        productModal.classList.remove("active");
    }

    // --- Обработчики кликов на продукцию и аксессуары ---
    document.querySelectorAll(".product-link, .accessory-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const title = link.getAttribute("data-name");
            const description = link.getAttribute("data-description");
            openModal(title, description);
        });
    });

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", closeModalHandler);
});
