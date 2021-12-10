function cekform(){
    nama = document.getElementById('nama');
    panggilan = document.getElementById('panggilan');
    tel = document.getElementById('tel');
    tal = document.getElementById('tal');
    usia = document.getElementById('usia');
    kelamin = document.getElementById('kelamin');
    kota = document.getElementById('kota');
    panggilan = document.getElementById('panggilan');
    email = document.getElementById('email');
    hp = document.getElementById('hp');
    sosial = document.getElementById('sosial');

    if(nama.value ==''){
        alert('Nama Tidak boleh kosong');
        nama.focus();
        return false;
    }else if(nama.value.length <= 3){
        alert('Minimal 3 Karakter');
        nama.focus();
        return false;
    }else if(panggilan.value ==''){
        alert('Panggilan Tidak boleh kosong');
        panggilan.focus();
        return false;
    }else if(panggilan.value.length <= 3){
        alert('Minimal 3 Karakter');
        panggilan.focus();
        return false;
    }else if(tel.value ==''){
        alert('Tempat Lahir Tidak boleh kosong');
        tel.focus();
        return false;
    }else if(tal.value ==''){
        alert('Tanggal Lahir Tidak boleh kosong');
        tal.focus();
        return false;
    }else if(kelamin.value == ''){
        alert('Jenis Kelamin Tidak boleh kosong');
        kelamin.focus();
        return false;
    }else if(kota.value == ''){
        alert('Kota Tidak boleh kosong');
        kota.focus();
        return false;
    }else if(email.value ==''){
        alert('Email Tidak boleh kosong');
        email.focus();
        return false;
    }else if(hp.value ==''){
        alert('No HP tidak boleh kosong')
        hp.focus();
        return false;
    }else if(hp.value.length <= 4){
        alert('Minimal 4 Karakter');
        hp.focus();
        return false;
    }else if(sosial.value ==''){
        alert('Media sosial tidak boleh kosong')
        sosial.focus();
        return false;
    }
}