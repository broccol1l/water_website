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
    if (event.target === contactsModalOverlay) {
        contactsModalOverlay.style.display = "none";
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
            "water-desc-h3": "Почему выбирают SEROB WATER?",
            "water-desc-li1": "{water-desc-li1s} многократная фильтрация без вредных примесей.",
            "water-desc-li2": "{water-desc-li2s} без посторонних запахов и примесей.",
            "water-desc-li3": "{water-desc-li3s} соответствует международным стандартам качества.",
            "water-desc-li4": "{water-desc-li4s} удобный заказ через наш {water-desc-href} или Колл-центр",
            "water-desc-href": "Телеграм-бот",
            "water-desc-li1s": "Полная очистка:",
            "water-desc-li2s": "Натуральный вкус:",
            "water-desc-li3s": "Безопасность:",
            "water-desc-li4s": "Доставка на дом и в офис:",
            "water-h2": "Кристальная чистота в каждой капле",
            "water-p": "Вода SEROB WATER – это высококачественная питьевая вода, прошедшая многоступенчатую очистку и обогащённая полезными минералами. Мы заботимся о вашем здоровье и предлагаем только лучший продукт.",
            "water-h3-1": "Идеальная чистота",
            "water-p-1": "Удаляем 99.9% примесей и бактерий, сохраняя природную свежесть.",
            "water-h3-2": "Оптимальный баланс",
            "water-p-2": "Вода содержит необходимые минералы для здоровья и энергии.",
            "water-h3-3": "Современные технологии",
            "water-p-3": "Используем передовые методы фильтрации и контроля качества.",
            "main-title": "SEROB ВОДА",
            "subtitle": "Чистая вода для вашего {highlight1}",
            "highlight1": "Дома и Офиса",
            "text": "Закажите воду через наш {link}",
            "link": "Телеграм-бот",
            "order-button": "Заказать",
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
            "water-desc-h3": "Why choose SEROB WATER?",
            "water-desc-li1": "{water-desc-li1s} multiple filtration without harmful impurities.",
            "water-desc-li2": "{water-desc-li2s} free from foreign odors and contaminants.",
            "water-desc-li3": "{water-desc-li3s} meets international quality standards.",
            "water-desc-li4": "{water-desc-li4s} convenient ordering via our {water-desc-href} or Call-centre",
            "water-desc-href": "Telegram bot",

            "water-desc-li1s": "Complete purification:",
            "water-desc-li2s": "Natural taste:",
            "water-desc-li3s": "Safety:",
            "water-desc-li4s": "Home and office delivery:",

            "water-h2": "Crystal clarity in every drop",
            "water-p": "SEROB WATER is high-quality drinking water that has undergone multi-stage purification and is enriched with beneficial minerals. We care about your health and offer only the best product.",
            "water-h3-1": "Perfect purity",
            "water-p-1": "We remove 99.9% of impurities and bacteria while preserving natural freshness.",
            "water-h3-2": "Optimal balance",
            "water-p-2": "The water contains essential minerals for health and energy.",
            "water-h3-3": "Modern technology",
            "water-p-3": "We use advanced filtration and quality control methods.",
            "main-title": "SEROB WATER",
            "subtitle": "Pure water for your {highlight1}",
            "highlight1": "Home and Office",
            "text": "Order water via our {link}",
            "link": "Telegram bot",
            "order-button": "Order",
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
            "water-desc-h3": "Nega SEROB WATERni tanlashadi?",
            "water-desc-li1": "{water-desc-li1s} zararli aralashmalarsiz ko‘p bosqichli filtratsiya.",
            "water-desc-li2": "{water-desc-li2s} begona hid va qo‘shimchalarsiz.",
            "water-desc-li3": "{water-desc-li3s} xalqaro sifat standartlariga mos.",
            "water-desc-li4": "{water-desc-li4s} qulay buyurtma bizning {water-desc-href} yoki Call-markaz",
            "water-desc-href": "Telegram-botimiz",
            "water-desc-li1s": "To‘liq tozalash:",
            "water-desc-li2s": "Tabiiy ta’m:",
            "water-desc-li3s": "Xavfsizlik:",
            "water-desc-li4s": "Uy va ofisga yetkazib berish:",

            "water-h2": "Har bir tomchida kristall kabi tozalik",
            "water-p": "SEROB SUV – bu ko‘p bosqichli tozalashdan o‘tgan va foydali minerallar bilan boyitilgan yuqori sifatli ichimlik suvi. Biz sizning sog‘lig‘ingiz haqida qayg‘uramiz va faqat eng yaxshi mahsulotni taklif qilamiz.",
            "water-h3-1": "Mukammal tozalik",
            "water-p-1": "99.9% ifloslik va bakteriyalarni yo‘q qiladi, tabiiy yangiligini saqlaydi.",
            "water-h3-2": "Eng yaxshi muvozanat",
            "water-p-2": "Sog‘liq va energiya uchun zarur minerallarni o‘z ichiga oladi.",
            "water-h3-3": "Zamonaviy texnologiyalar",
            "water-p-3": "Biz ilg‘or filtratsiya va sifat nazorati usullaridan foydalanamiz.",
            "main-title": "SEROB SUV",
            "subtitle": "Toza suv sizning {highlight1}",
            "highlight1": "Uyingiz va ofisingiz uchun",
            "text": "Buyurtma berish uchun bizning {link}",
            "link": "Telegram-botimizdan foydalaning",
            "order-button": "Buyurtma",
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


        const linkText = translations[lang]["link"];
        const textWithPlaceholder = translations[lang]["text"].replace("{link}", `<span class="link" id="link">${linkText}</span>`);
        document.getElementById("text").innerHTML = textWithPlaceholder;

        const highlight1Text = translations[lang]["highlight1"];
        const subtitleWithPlaceholder = translations[lang]["subtitle"].replace("{highlight1}", `<span class="highlight" id="highlight1">${highlight1Text}</span>`);
        document.getElementById("subtitle").innerHTML = subtitleWithPlaceholder;

        // Обновляем текст заголовков и описаний списка преимуществ
        document.getElementById("water-desc-h3").textContent = translations[lang]["water-desc-h3"];

        // Обновляем только текст внутри <strong>
        document.getElementById("water-desc-li1s").textContent = translations[lang]["water-desc-li1s"];
        document.getElementById("water-desc-li2s").textContent = translations[lang]["water-desc-li2s"];
        document.getElementById("water-desc-li3s").textContent = translations[lang]["water-desc-li3s"];
        document.getElementById("water-desc-li4s").textContent = translations[lang]["water-desc-li4s"];

        // Обновляем основной текст без изменения <strong>
        document.getElementById("water-desc-li1").childNodes[1].nodeValue = translations[lang]["water-desc-li1"].replace("{water-desc-li1s}", "");
        document.getElementById("water-desc-li2").childNodes[1].nodeValue = translations[lang]["water-desc-li2"].replace("{water-desc-li2s}", "");
        document.getElementById("water-desc-li3").childNodes[1].nodeValue = translations[lang]["water-desc-li3"].replace("{water-desc-li3s}", "");
        document.getElementById("water-desc-li4").innerHTML =
    `<strong id="water-desc-li4s">${translations[lang]["water-desc-li4s"]}</strong>
    ${translations[lang]["water-desc-li4"].replace("{water-desc-href}", `<a href="https://t.me/serobsuvbot" id="water-desc-href">${translations[lang]["water-desc-href"]}</a>`).replace("{water-desc-li4s}", "")}`;


        // Обновляем текст заголовков и описаний воды
        const elementsToUpdate = [
            "water-h2", "water-p", "water-h3-1", "water-p-1",
            "water-h3-2", "water-p-2", "water-h3-3", "water-p-3",
            "water-desc-h3"
        ];

elementsToUpdate.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
        elem.textContent = translations[lang][id];
    }
});
        document.getElementById("main-title").textContent = translations[lang]["main-title"];
        document.getElementById("order-button").textContent = translations[lang]["order-button"];
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
