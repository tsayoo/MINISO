// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Konfigurasi Tailwind CSS
module.exports = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
  },
  corePlugins: {
    preflight: false,
  },
};

// Import dan inisialisasi modul ES
import { Collapse, Ripple, Popconfirm, initTE } from "tw-elements";
initTE({ Collapse, Ripple, Popconfirm });

// Fungsi untuk menampilkan konfirmasi pop
function showPopConfirm() {
  if (confirm("Apakah Anda yakin ingin membaca lebih banyak blog?")) {
    window.location.href = "sign.html"; // Redirect jika konfirmasi disetujui
  }
}
