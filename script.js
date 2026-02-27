document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let userId = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    // Validasi angka
    if (!/^[0-9]+$/.test(userId)) {
        error.textContent = "User ID harus angka, tidak boleh huruf!";
        return;
    }

    if (password === "") {
        error.textContent = "Password tidak boleh kosong!";
        return;
    }

    // Jika semua valid
    error.textContent = "";
    alert("Login berhasil (contoh)!");
});