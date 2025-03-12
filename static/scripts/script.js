document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM загружен.");
    // --- Открытие модального окна контактов ---
    const contactsModalOverlay = document.getElementById("contactsModalOverlay")
    const contactsModal = document.getElementById("contactsModal");
    const closeContactsModal = document.getElementById("closeContactsModal");
    const contactsButton = document.getElementById("contacts");

    contactsButton.addEventListener("click", function () {
        contactsModalOverlay.style.display = "block";
        contactsModal.style.display = "block";
    });

    closeContactsModal.addEventListener("click", function () {
        contactsModalOverlay.style.display = "none";
        contactsModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === contactsModal) {
            contactsModal.style.display = "none";
        }
    });


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
            "accessories": "Аксессуары",
            "contactsTitle": "Контакты",
            "contactsCorporate": "Корпоративный номер:",
            "contactsCallCenter": "Колл-центр:",
            "contactsEmail": "Email:",
            "contactsLocation": "Локация:",
            "contactsLocationValue": "ул. Мусамухамедова, городской посёлок Салар, Кибрайский район, Ташкентская область"
        },
        "en": {
            "about": "About",
            "payment": "Payment",
            "contacts": "Contacts",
            "products": "Products",
            "accessories": "Accessories",
            "contactsTitle": "Contacts",
            "contactsCorporate": "Corporate number:",
            "contactsCallCenter": "Call center:",
            "contactsEmail": "Email:",
            "contactsLocation": "Location:",
            "contactsLocationValue": "Musamukhamedova St., Salar town, Kibray district, Tashkent region"
        },
        "uz": {
            "about": "Kompaniya haqida",
            "payment": "To'lov",
            "contacts": "Kontaktlar",
            "products": "Mahsulotlar",
            "accessories": "Aksessuarlar",
            "contactsTitle": "Kontaktlar",
            "contactsCorporate": "Korporativ raqam:",
            "contactsCallCenter": "Call-markaz:",
            "contactsEmail": "Email:",
            "contactsLocation": "Manzil:",
            "contactsLocationValue": "Musamuxamedova ko'chasi, Salar shaharchasi, Kibray tumani, Toshkent viloyati"
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
        // Обновляем текст в модальном окне контактов
    document.getElementById("contactsTitle").textContent = translations[lang]["contactsTitle"];
    document.getElementById("contactsCorporate").innerHTML = `<strong>${translations[lang]["contactsCorporate"]}</strong> +998 (95) 963-02-02`;
    document.getElementById("contactsCallCenter").innerHTML = `<strong>${translations[lang]["contactsCallCenter"]}</strong> +998 (55) 512-02-02`;
    document.getElementById("contactsEmail").innerHTML = `<strong>${translations[lang]["contactsEmail"]}</strong> info@serobsuv.uz`;

    // ✅ Теперь обновляется заголовок и сам адрес
    document.getElementById("contactsLocation").innerHTML = `<strong>${translations[lang]["contactsLocation"]}</strong> <span id="contactsLocationValue">${translations[lang]["contactsLocationValue"]}</span>`;

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
