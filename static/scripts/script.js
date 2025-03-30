document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM загружен.");


    function moveLanguageSwitcher() {
        const nav = document.querySelector(".nav");
        const langSwitcher = document.querySelector(".language-switcher");
        const header = document.querySelector(".header");

        if (window.innerWidth <= 1100 && langSwitcher.parentElement !== nav) {
            nav.appendChild(langSwitcher);
        } else if (window.innerWidth > 1100 && langSwitcher.parentElement !== header) {
            header.appendChild(langSwitcher);
        }
    }

    moveLanguageSwitcher(); // Вызываем при загрузке
    window.addEventListener("resize", moveLanguageSwitcher);

    moveLanguageSwitcher();
    window.addEventListener("resize", moveLanguageSwitcher);
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const body = document.body;

    // Бургер-меню
    burger.addEventListener("click", function () {
        nav.classList.toggle("open");
        burger.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            if (!link.closest(".dropdown")) {
                nav.classList.remove("open");
                burger.classList.remove("active");
                body.classList.remove("no-scroll");
            }
        });
    });

    // Логика для dropdown в мобильной версии
    function setupDropdown() {
    document.querySelectorAll(".dropdown > a").forEach(dropdownToggle => {
        dropdownToggle.addEventListener("click", (e) => {
            e.preventDefault(); // Предотвращаем переход по ссылке
            const dropdownMenu = dropdownToggle.nextElementSibling;

            // Если кликнули на пункт, который уже открыт — просто закроем его
            if (dropdownMenu.classList.contains("open")) {
                dropdownMenu.classList.remove("open");
                return;
            }

            // Закрываем все другие открытые меню
            document.querySelectorAll(".dropdown-menu.open").forEach(menu => {
                menu.classList.remove("open");
            });

            // Открываем только нужное меню
            dropdownMenu.classList.add("open");
        });
    });
}

// Вызываем функцию при загрузке и при изменении размера экрана
setupDropdown();
window.addEventListener("resize", setupDropdown);

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
        document.querySelector(".payment").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector("#about").addEventListener("click", function () {
        document.querySelector(".about-company").scrollIntoView({ behavior: "smooth" })
    });

    // --- Переводы интерфейса ---
    const translations = {
        "ru": {
            "footer-h3-1": "Контакты",
            "footer-p1": "Колл-центр: {footer-p1-link}",
            "footer-p2": "Корп. номер: {footer-p2-link}",
            "footer-p3": "Email: {footer-p3-link}",
            "footer-h3-2": "Оплата",
            "footer-h3-3": "Наш Telegram-бот",
            "footer-a": "Телеграм-бот",
            "footer-p4": "© 2025 SEROB. Все права защищены.",

            "payment-h2": "Способы оплаты",
            "call-centre-h2": "Центр поддержки клиентов",
            "call-centre-p1": "Наш колл-центр работает для вас ежедневно с {call-centre-strong1}, за исключением воскресений и государственных праздников.",
            "call-centre-p2": "Мы готовы помочь вам с любыми вопросами, связанными с заказами, доставкой и продукцией. Наши операторы обеспечат быстрые и профессиональные ответы.",
            "call-centre-p3": "Свяжитесь с нами по телефону {call-centre-strong2}, и мы с радостью вам поможем!",

            "call-centre-strong1": "9:00 до 23:00",
            "call-centre-strong2": "+998 (55) 512-02-02",

            "delivery-h2": "Быстрая и удобная доставка",
            "delivery-p1": "Мы заботимся о вашем комфорте и доставляем чистую питьевую воду прямо к вам домой или в офис.",
            "delivery-p2": "🕒 Доставка работает с 9:00 до 23:00, с понедельника по субботу.",
            "delivery-p3": "🚚 Бесплатная доставка по Ташкенту!",

            "about-company-h1": "О компании SEROB",
            "about-company-p1": "SEROB WATER – это не просто бренд питьевой воды, а целая философия заботы о здоровье и комфорте. Хотя компания SEROB была основана недавно, наш опыт в индустрии начинается с 2010 года. До сегодняшнего дня мы прошли долгий путь, анализируя и исправляя ошибки прошлых проектов, чтобы создать действительно качественный продукт. Наша цель – сделать чистую и полезную воду доступной каждому. Сегодня мы обслуживаем тысячи клиентов по всему Узбекистану и продолжаем развиваться.",
            "about-company-h2": "Наша миссия",
            "about-company-p2": "Мы верим, что чистая вода – это основа жизни. Поэтому наша цель – не только поставлять качественную продукцию, но и формировать культуру осознанного потребления воды. Мы стремимся сделать доступ к здоровой воде простым и удобным для каждого.",
            "about-company-h3": "Наши ценности",
            "about-company-li1": "🌍 {about-company-strong1} – мы заботимся о природе, используя перерабатываемые материалы и снижая углеродный след.",
            "about-company-strong1": "Экологичность",
            "about-company-li2": "💙 {about-company-strong2} – гарантируем качество на каждом этапе, от очистки до доставки.",
            "about-company-strong2": "Ответственность",
            "about-company-li3": "🤝 {about-company-strong3} – строим долгосрочные отношения, предлагая удобный сервис и стабильное качество.",
            "about-company-strong3": "Доверие клиентов",
            "about-company-li4": "🚀 {about-company-strong4} – внедряем современные технологии очистки и разрабатываем новые решения для удобного использования воды.",
            "about-company-strong4": "Инновации",
            "about-company-final": "SEROB WATER – это больше, чем вода. Это забота о вашем здоровье, удобство в повседневной жизни и вклад в чистое будущее.",

            "water-desc-h3": "Почему выбирают SEROB ВОДУ?",
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
            "water-p": "Вода SEROB – это высококачественная питьевая вода, прошедшая многоступенчатую очистку и обогащённая полезными минералами. Мы заботимся о вашем здоровье и предлагаем только лучший продукт.",
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
            "footer-h3-1": "Contacts",
            "footer-p1": "Call Center: {footer-p1-link}",
            "footer-p2": "Corp. Number: {footer-p2-link}",
            "footer-p3": "Email: {footer-p3-link}",
            "footer-h3-2": "Payment",
            "footer-h3-3": "Our Telegram Bot",
            "footer-a": "Telegram Bot",
            "footer-p4": "© 2025 SEROB. All rights reserved.",

            "payment-h2": "Payment methods",
            "call-centre-h2": "Customer Support Center",
            "call-centre-p1": "Our call center operates daily from {call-centre-strong1}, except on Sundays and public holidays.",
            "call-centre-p2": "We are ready to assist you with any questions regarding orders, delivery, and products. Our operators provide fast and professional responses.",
            "call-centre-p3": "Contact us by phone at {call-centre-strong2}, and we will be happy to help!",

            "call-centre-strong1": "9:00 AM to 11:00 PM",
            "call-centre-strong2": "+998 (55) 512-02-02",

            "delivery-h2": "Fast and Convenient Delivery",
            "delivery-p1": "We care about your comfort and deliver clean drinking water straight to your home or office.",
            "delivery-p2": "🕒 Delivery operates from 9:00 AM to 11:00 PM, Monday to Saturday.",
            "delivery-p3": "🚚 Free delivery in Tashkent!",

            "about-company-h1": "About SEROB",
            "about-company-p1": "SEROB WATER is not just a drinking water brand but a whole philosophy of care for health and comfort. Although the company SEROB was founded recently, our experience in the industry dates back to 2010. Up to this day, we have come a long way, analyzing and correcting the mistakes of past projects to create a truly high-quality product. Our goal is to make clean and healthy water accessible to everyone. Today, we serve thousands of customers across Uzbekistan and continue to grow.",
            "about-company-h2": "Our Mission",
            "about-company-p2": "We believe that clean water is the foundation of life. That is why our goal is not only to provide quality products but also to promote a culture of conscious water consumption. We strive to make access to healthy water simple and convenient for everyone.",
            "about-company-h3": "Our Values",
            "about-company-li1": "🌍 {about-company-strong1} – we care about nature by using recyclable materials and reducing our carbon footprint.",
            "about-company-strong1": "Environmental Responsibility",
            "about-company-li2": "💙 {about-company-strong2} – we guarantee quality at every stage, from purification to delivery.",
            "about-company-strong2": "Responsibility",
            "about-company-li3": "🤝 {about-company-strong3} – we build long-term relationships by offering convenient service and consistent quality.",
            "about-company-strong3": "Customer Trust",
            "about-company-li4": "🚀 {about-company-strong4} – we implement modern purification technologies and develop new solutions for convenient water usage.",
            "about-company-strong4": "Innovation",
            "about-company-final": "SEROB WATER is more than just water. It is about caring for your health, making everyday life convenient, and contributing to a cleaner future.",

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
            "footer-h3-1": "Aloqa",
            "footer-p1": "Call-markaz: {footer-p1-link}",
            "footer-p2": "Korp. raqam: {footer-p2-link}",
            "footer-p3": "Email: {footer-p3-link}",
            "footer-h3-2": "To‘lov",
            "footer-h3-3": "Bizning Telegram-bot",
            "footer-a": "Telegram-bot",
            "footer-p4": "© 2025 SEROB. Barcha huquqlar himoyalangan.",

            "payment-h2": "To'lov",
            "call-centre-h2": "Mijozlarni qo‘llab-quvvatlash markazi",
            "call-centre-p1": "Bizning call-markazimiz har kuni {call-centre-strong1} ishlaydi, yakshanba va davlat bayramlaridan tashqari.",
            "call-centre-p2": "Buyurtmalar, yetkazib berish va mahsulotlar bo‘yicha har qanday savollaringizga javob berishga tayyormiz. Operatorlarimiz tez va professional javoblarni taqdim etadilar.",
            "call-centre-p3": "Biz bilan {call-centre-strong2} telefon raqami orqali bog‘laning, biz sizga mamnuniyat bilan yordam beramiz!",

            "call-centre-strong1": "9:00 dan 23:00 gacha",
            "call-centre-strong2": "+998 (55) 512-02-02",

            "delivery-h2": "Tez va qulay yetkazib berish",
            "delivery-p1": "Biz sizning qulayligingiz haqida g‘amxo‘rlik qilamiz va toza ichimlik suvini bevosita uyingizga yoki ofisingizga yetkazib beramiz.",
            "delivery-p2": "🕒 Yetkazib berish soat 9:00 dan 23:00 gacha, dushanbadan shanbagacha ishlaydi.",
            "delivery-p3": "🚚 Toshkent bo‘ylab bepul yetkazib berish!",

            "about-company-h1": "SEROB Haqida",
            "about-company-p1": "SEROB WATER bu shunchaki ichimlik suvi brendi emas, balki sog‘liq va qulaylik haqida g‘amxo‘rlik falsafasidir. Garchi SEROB kompaniyasi yaqinda tashkil etilgan bo‘lsa-da, bizning sanoatdagi tajribamiz 2010-yildan boshlangan. Bugungi kungacha biz uzoq yo‘lni bosib o‘tdik, o‘tgan loyihalardagi xatolarni tahlil qilib, to‘g‘rilash orqali haqiqatan ham yuqori sifatli mahsulot yaratdik. Bizning maqsadimiz – toza va foydali suvni har bir kishiga yetkazish. Bugungi kunda biz O‘zbekiston bo‘ylab minglab mijozlarga xizmat ko‘rsatmoqdamiz va rivojlanishda davom etmoqdamiz.",
            "about-company-h2": "Bizning Missiyamiz",
            "about-company-p2": "Biz ishonamizki, toza suv – bu hayot asosidir. Shu sababli, bizning maqsadimiz nafaqat sifatli mahsulot yetkazib berish, balki ongli suv iste’moli madaniyatini shakllantirishdir. Biz sog‘lom suvga kirishni har bir kishi uchun oson va qulay qilishga intilamiz.",
            "about-company-h3": "Bizning Qadriyatlarimiz",
            "about-company-li1": "🌍 {about-company-strong1} – biz qayta ishlanadigan materiallardan foydalanish va karbon izimizni kamaytirish orqali tabiatga g‘amxo‘rlik qilamiz.",
            "about-company-strong1": "Ekologik Mas’uliyat",
            "about-company-li2": "💙 {about-company-strong2} – tozalashdan tortib yetkazib berishgacha har bir bosqichda sifat kafolatlanadi.",
            "about-company-strong2": "Mas’uliyat",
            "about-company-li3": "🤝 {about-company-strong3} – biz qulay xizmat va barqaror sifat taklif qilib, uzoq muddatli munosabatlarni quramiz.",
            "about-company-strong3": "Mijozlar Ishonchi",
            "about-company-li4": "🚀 {about-company-strong4} – biz zamonaviy tozalash texnologiyalarini joriy etamiz va suvdan foydalanish uchun yangi qulay yechimlarni ishlab chiqamiz.",
            "about-company-strong4": "Innovatsiyalar",
            "about-company-final": "SEROB WATER bu shunchaki suv emas. Bu sizning sog‘lig‘ingizga g‘amxo‘rlik, kundalik hayotingizda qulaylik va toza kelajakka qo‘shilgan hissadir.",

            "water-desc-h3": "Nega SEROB SUV tanlashadi?",
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

        // Обновляем текст внутри <strong>
        document.getElementById("about-company-strong1").textContent = translations[lang]["about-company-strong1"];
        document.getElementById("about-company-strong2").textContent = translations[lang]["about-company-strong2"];
        document.getElementById("about-company-strong3").textContent = translations[lang]["about-company-strong3"];
        document.getElementById("about-company-strong4").textContent = translations[lang]["about-company-strong4"];

        // Обновляем элементы списка с учетом <strong>
        document.getElementById("about-company-li1").innerHTML =
            `🌍 <strong id="about-company-strong1">${translations[lang]["about-company-strong1"]}</strong>
            ${translations[lang]["about-company-li1"].replace("{about-company-strong1}", "")}`;

        document.getElementById("about-company-li2").innerHTML =
            `💙 <strong id="about-company-strong2">${translations[lang]["about-company-strong2"]}</strong>
            ${translations[lang]["about-company-li2"].replace("{about-company-strong2}", "")}`;

        document.getElementById("about-company-li3").innerHTML =
            `🤝 <strong id="about-company-strong3">${translations[lang]["about-company-strong3"]}</strong>
            ${translations[lang]["about-company-li3"].replace("{about-company-strong3}", "")}`;

        document.getElementById("about-company-li4").innerHTML =
            `🚀 <strong id="about-company-strong4">${translations[lang]["about-company-strong4"]}</strong>
            ${translations[lang]["about-company-li4"].replace("{about-company-strong4}", "")}`;

        document.getElementById("call-centre-p1").innerHTML =
            translations[lang]["call-centre-p1"].replace(
                "{call-centre-strong1}",
                `<strong id="call-centre-strong1">${translations[lang]["call-centre-strong1"]}</strong>`
            );

        document.getElementById("call-centre-p3").innerHTML =
            translations[lang]["call-centre-p3"].replace(
                "{call-centre-strong2}",
                `<strong id="call-centre-strong2">${translations[lang]["call-centre-strong2"]}</strong>`
            );
        document.getElementById("footer-h3-1").textContent = translations[lang]["footer-h3-1"];
document.getElementById("footer-h3-2").textContent = translations[lang]["footer-h3-2"];
document.getElementById("footer-h3-3").textContent = translations[lang]["footer-h3-3"];
document.getElementById("footer-a").textContent = translations[lang]["footer-a"];
document.getElementById("footer-p4").textContent = translations[lang]["footer-p4"];

// Обновляем параграфы с учетом <a>
document.getElementById("footer-p1").innerHTML =
    `📞 ${translations[lang]["footer-p1"].replace("{footer-p1-link}", '<a href="tel:+998959630202">+998 (95) 963-02-02</a>')}`;

document.getElementById("footer-p2").innerHTML =
    `🏢 ${translations[lang]["footer-p2"].replace("{footer-p2-link}", '<a href="tel:+998555120202">+998 (55) 512-02-02</a>')}`;

document.getElementById("footer-p3").innerHTML =
    `📧 ${translations[lang]["footer-p3"].replace("{footer-p3-link}", '<a href="mailto:info@serobsuv.uz">info@serobsuv.uz</a>')}`;

        // Обновляем текст заголовков и описаний воды
        const elementsToUpdate = [
            "water-h2", "water-p", "water-h3-1", "water-p-1",
            "water-h3-2", "water-p-2", "water-h3-3", "water-p-3",
            "water-desc-h3", "about-company-h1", "about-company-p1",
            "about-company-h2", "about-company-p2", "about-company-h3",
            "about-company-final", "delivery-h2", "delivery-p1", "delivery-p2",
            "delivery-p3", "call-centre-h2", "call-centre-p2", "payment-h2"
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

    function showDropdownMenu() {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("open");
        });
    }

    // --- Обновление обработчика закрытия модального окна ---
    function closeModalHandler() {
        modalOverlay.style.display = "none";
        productModal.style.display = "none";

        // Показываем Dropdown после закрытия модального окна
        showDropdownMenu();
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
