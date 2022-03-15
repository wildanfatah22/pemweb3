function lastMod() {
    document.getElementById("pesan").innerHTML = "Dimodifikasi terakhir pada : " + document.lastModified;
}

function tambah() {
    document.kirim.hasil.value = parseInt(document.kirim.val1.value) + parseInt(document.kirim.val2.value);
    lastMod();
}

function kurang() {
    document.kirim.hasil.value = parseInt(document.kirim.val1.value) - parseInt(document.kirim.val2.value);
    lastMod();
}

function kali() {
    document.kirim.hasil.value = parseInt(document.kirim.val1.value) * parseInt(document.kirim.val2.value);
    lastMod();
}

function bagi() {
    document.kirim.hasil.value = parseInt(document.kirim.val1.value) / parseInt(document.kirim.val2.value);
    lastMod();
}