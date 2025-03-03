document.addEventListener("DOMContentLoaded", function () {
    // Открытие ссылки при нажатии на QR-код
    document.querySelector(".qr-container").addEventListener("click", function () {
        window.location.href = "https://links.dukduk.uz";
    });

    // Открытие модального окна для "Контакты"
    document.querySelector("#contacts").addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block";
    });

    // Закрытие модального окна
    document.querySelector(".modal-close").addEventListener("click", function () {
        document.querySelector(".modal").style.display = "none";
    });

    // Прокрутка вниз при нажатии "Способы оплаты"
    document.querySelector("#payment").addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });

    // Прокрутка к "О компании"
    document.querySelector("#about").addEventListener("click", function () {
        document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    });
});

