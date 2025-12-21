// =====================
// GURLLICART APP.JS
// =====================

document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     KONFIGURASI GLOBAL
  ===================== */
  const waNumber = "6288268000599";

  /* =====================
     PRODUCT MODAL (CUSTOM)
  ===================== */
  const lihatButtons = document.querySelectorAll(".lihat-btn");
  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-product-img");
  const modalName = document.getElementById("modal-product-name");
  const modalPrice = document.getElementById("modal-product-price");
  const modalWaBtn = document.getElementById("modal-wa-button");
  const modalClose = document.getElementById("modal-close");

  lihatButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;
      const img = button.dataset.img;

      // Isi konten modal
      modalName.textContent = name;
      modalPrice.textContent = price;
      modalImg.src = img;

      // Link WhatsApp
      const message = encodeURIComponent(
        `Halo! Saya ingin memesan "${name}".`
      );
      modalWaBtn.href = `https://wa.me/${waNumber}?text=${message}`;

      // Tampilkan modal
      modal.classList.add("show");
    });
  });

  /* =====================
     CLOSE MODAL
  ===================== */
  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Tutup modal jika klik area gelap
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

});