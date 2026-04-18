const modal = document.getElementById("contactPopup");
const btn = document.getElementById("contactBtn");
const span = document.getElementsByClassName("close")[0];

// Mở popup khi click vào link Liên hệ
btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
}

// Đóng popup khi click vào dấu x
span.onclick = function() {
    modal.style.display = "none";
}

// Đóng khi click ra ngoài popup
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}