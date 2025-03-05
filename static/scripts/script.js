document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM загружен.");

    document.querySelector(".qr-container").addEventListener("click", function () {
        window.location.href = "https://links.dukduk.uz";
    });

    document.querySelector("#contacts").addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block";
    });

    document.querySelector(".modal-close").addEventListener("click", function () {
        document.querySelector(".modal").style.display = "none";
    });

    document.querySelector("#payment").addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });

    document.querySelector("#about").addEventListener("click", function () {
        document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    });

    const modalOverlay = document.getElementById("modalOverlay");
    const productModal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");

    function openModal(title, description, newUrl) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalOverlay.classList.add("active");
        productModal.classList.add("active");

        history.pushState({}, "", newUrl);
    }

    function closeModalHandler() {
        modalOverlay.classList.remove("active");
        productModal.classList.remove("active");

        history.pushState({}, "", "/index");
    }

    document.querySelectorAll(".product-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const title = link.getAttribute("data-name");
            const description = `Описание продукта: ${title}`;
            openModal(title, description, `/product/${encodeURIComponent(title)}`);
        });
    });

    document.querySelectorAll(".accessory-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const title = link.getAttribute("data-name");
            const description = `Описание аксессуара: ${title}`;
            openModal(title, description, `/accessory/${encodeURIComponent(title)}`);
        });
    });

    closeModal.addEventListener("click", closeModalHandler);
    modalOverlay.addEventListener("click", closeModalHandler);
});



