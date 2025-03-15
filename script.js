document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');

    // Mendapatkan file yang diupload
    const file = fileInput.files[0];
    if (file) {
        // Membuat elemen list untuk menampilkan nama file
        const listItem = document.createElement('li');
        listItem.textContent = file.name;

        // Menambahkan item ke daftar
        fileList.appendChild(listItem);

        // Mengosongkan input file setelah upload
        fileInput.value = '';
    }
});