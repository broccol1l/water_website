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
    const modalPhotos = document.getElementById("modalPhotos");
    const closeModal = document.getElementById("closeModal");

    function openModal(title, photos) {
        modalTitle.textContent = title;

        // Очистка предыдущих фото
        modalPhotos.innerHTML = '';

        // Добавление фотографий
        if (photos && photos.length > 0) {
            photos.forEach(photoUrl => {
            const img = document.createElement('img');
            // Ensure path starts with a slash if it doesn't already
            img.src = photoUrl.startsWith('/') ? photoUrl : '/' + photoUrl;
            img.alt = 'Фото продукта';
            img.classList.add('modal-photo');
            modalPhotos.appendChild(img);
        });
        } else {
            modalPhotos.innerHTML = '<p>Нет фото</p>';
        }

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
            const photosAttr = link.getAttribute("data-photos");
            const photos = photosAttr ? photosAttr.split(',') : [];

            openModal(title, photos);
        });
    });

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", closeModalHandler);
});