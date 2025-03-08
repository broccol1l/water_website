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
    const modalPhotos = document.getElementById("modalPhotos");
    const closeModal = document.getElementById("closeModal");

    function openModal(title, photos, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description || "";

        // Очистка предыдущих фото
        modalPhotos.innerHTML = '';

        if (photos.length > 0) {
            let currentPhotoIndex = 0;

            // Создаем элемент изображения
            const img = document.createElement("img");
            img.src = photos[currentPhotoIndex].startsWith("/") ? photos[currentPhotoIndex] : "/" + photos[currentPhotoIndex];
            img.alt = "Фото продукта";
            img.classList.add("modal-photo");
            modalPhotos.appendChild(img);

            // Создаем кнопки навигации, если фото больше 1
            if (photos.length > 1) {
                const prevBtn = document.createElement("button");
                prevBtn.textContent = "<";
                prevBtn.classList.add("photo-nav", "prev-photo");
                prevBtn.addEventListener("click", () => {
                    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
                    img.src = photos[currentPhotoIndex].startsWith("/") ? photos[currentPhotoIndex] : "/" + photos[currentPhotoIndex];
                });

                const nextBtn = document.createElement("button");
                nextBtn.textContent = ">";
                nextBtn.classList.add("photo-nav", "next-photo");
                nextBtn.addEventListener("click", () => {
                    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
                    img.src = photos[currentPhotoIndex].startsWith("/") ? photos[currentPhotoIndex] : "/" + photos[currentPhotoIndex];
                });

                modalPhotos.appendChild(prevBtn);
                modalPhotos.appendChild(nextBtn);
            }
        } else {
            modalPhotos.innerHTML = "<p>Нет фото</p>";
        }

        // Показ модального окна
        modalOverlay.style.display = "block";
        productModal.style.display = "block";
    }

    function closeModalHandler() {
        modalOverlay.style.display = "none";
        productModal.style.display = "none";
    }

    // --- Обработчики кликов на продукцию и аксессуары ---
    document.querySelectorAll(".product-link, .accessory-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const title = link.getAttribute("data-name");
            const description = link.getAttribute("data-description") || "";
            const photosAttr = link.getAttribute("data-photos");
            const photos = photosAttr ? photosAttr.split(',') : [];

            openModal(title, photos, description);
        });
    });

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", closeModalHandler);
});
