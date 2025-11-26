

// app.js
// Interaksi dasar untuk katalog produk

// Contoh: event listener untuk tombol "Pesan Sekarang"

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-button");

  // Nomor WA yang digunakan untuk semua produk
  const waNumber = "6288269209778";

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const productName = btn.getAttribute("data-product");
      const message = encodeURIComponent(`Halo! Saya ingin memesan ${productName}.`);
      const waLink = `https://wa.me/${waNumber}?text=${message}`;
      window.open(waLink, "_blank");
    });
  });
});


// Add click handlers for product "lihat" buttons
// This assumes each button has class .btn-lihat and data attributes for name, price, image

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.lihat-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const price = btn.getAttribute('data-price');
      const img = btn.getAttribute('data-img');

      // Populate modal content
      document.getElementById('modal-product-name').textContent = name;
      document.getElementById('modal-product-price').textContent = price;
      document.getElementById('modal-product-img').src = img;

      // WhatsApp link (one universal number)
      const waNumber = '6288269209778'; // ganti sesuai kebutuhan
      const message = encodeURIComponent(`Halo! Saya ingin memesan ${name}`);
      const waLink = `https://wa.me/${waNumber}?text=${message}`;

      document.getElementById('modal-wa-button').href = waLink;

      // Show modal
      document.getElementById('product-modal').classList.add('show');
    });
  });

  // Close modal
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('product-modal').classList.remove('show');
  });
});

// OPEN ABOUT MODAL
document.querySelectorAll('[data-modal="about"]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('about-modal').classList.add('show');
    });
});

// OPEN REVIEW MODAL
document.querySelectorAll('[data-modal="review"]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('review-modal').classList.add('show');
    });
});

// CLOSE ABOUT MODAL
document.querySelector('.close-about').addEventListener('click', () => {
    document.getElementById('about-modal').classList.remove('show');
});

// CLOSE REVIEW MODAL
document.querySelector('.close-review').addEventListener('click', () => {
    document.getElementById('review-modal').classList.remove('show');
});
