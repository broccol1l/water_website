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

    // --- Переводы интерфейса ---
    const translations = {
        "ru": {
            "about": "О компании",
            "payment": "Оплата",
            "contacts": "Контакты",
            "products": "Продукция",
            "accessories": "Аксессуары"
        },
        "en": {
            "about": "About",
            "payment": "Payment",
            "contacts": "Contacts",
            "products": "Products",
            "accessories": "Accessories"
        },
        "uz": {
            "about": "Kompaniya haqida",
            "payment": "To'lov",
            "contacts": "Kontaktlar",
            "products": "Mahsulotlar",
            "accessories": "Aksessuarlar"
        }
    };

    // --- Сохранение выбранного языка ---
    let currentLang = localStorage.getItem("lang") || "ru";

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("lang", lang);

        // Обновляем текст ссылок в меню
        document.getElementById("about").textContent = translations[lang]["about"];
        document.getElementById("payment").textContent = translations[lang]["payment"];
        document.getElementById("contacts").textContent = translations[lang]["contacts"];
        document.getElementById("products").textContent = translations[lang]["products"] ;
        document.getElementById("accessories").textContent = translations[lang]["accessories"];

        // Обновляем текст товаров и аксессуаров
        document.querySelectorAll(".product-link").forEach(link => {
            link.textContent = link.getAttribute(`data-name-${lang}`);
        });

        document.querySelectorAll(".accessory-link").forEach(link => {
            link.textContent = link.getAttribute(`data-name-${lang}`);
        });
    }

    // --- Переключение языка ---
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", () => {
            updateLanguage(button.getAttribute("data-lang"));
        });
    });

    // Устанавливаем язык при загрузке страницы
    updateLanguage(currentLang);

    // --- Модальное окно ---
    const modalOverlay = document.getElementById("modalOverlay");
    const productModal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPhotos = document.getElementById("modalPhotos");
    const closeModal = document.getElementById("closeModal");

    function openModal(title, description, photos) {
        modalTitle.textContent = title;
        modalDescription.textContent = description || "";

        modalPhotos.innerHTML = "";
        if (photos.length > 0) {
            let currentPhotoIndex = 0;
            const img = document.createElement("img");
            img.src = photos[currentPhotoIndex];
            img.classList.add("modal-photo");
            modalPhotos.appendChild(img);
        } else {
            modalPhotos.innerHTML = "<p>Нет фото</p>";
        }

        modalOverlay.style.display = "block";
        productModal.style.display = "block";
    }

    function closeModalHandler() {
        modalOverlay.style.display = "none";
        productModal.style.display = "none";
    }

    document.querySelectorAll(".product-link, .accessory-link").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const title = link.getAttribute(`data-name-${currentLang}`);
            const description = link.getAttribute(`data-description-${currentLang}`) || "";
            const photos = link.getAttribute("data-photos").split(",");

            openModal(title, description, photos);
        });
    });

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", closeModalHandler);
});
