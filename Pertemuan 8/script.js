document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // Validasi Nama
    var studentName = document.getElementById('studentName').value;
    if (!studentName) {
        return alert('Nama lengkap wajib diisi.');
    }
    
    // Validasi ID Siswa
    var studentId = document.getElementById('studentId').value;
    if (!studentId) {
        return alert('ID Siswa wajib diisi.');
    }
    
    // Validasi Email
    var email = document.getElementById('email').value;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return alert('Format email tidak valid.');
    }
    
    // Validasi Password
    var password = document.getElementById('password').value;
    // verifikasi menggunakan REGEX (silakan cari referensi tentang REGEX)
    if (password.length < 6 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
        return alert('Password harus minimal 6 karakter dan mengandung huruf, angka, serta simbol.');
    }
    
    // Validasi Tanggal Lahir
    var birthDate = document.getElementById('birthDate').value;
    if (!birthDate) {
        return alert('Tanggal lahir wajib diisi.');
    }
    
    // Jika semua validasi terpenuhi, proses form submission dilanjutkan.
    // Replace dengan kode untuk submit data atau informasi selanjutnya.
    alert('Success');
    
    // Additional code for form submission or further processing goes here
});
