function switchLang(lang) {
    const siElements = document.querySelectorAll('.lang-si');
    const enElements = document.querySelectorAll('.lang-en');
    const btnSi = document.getElementById('btn-si');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'si') {
        siElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
        btnSi.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        enElements.forEach(el => el.classList.remove('hidden'));
        siElements.forEach(el => el.classList.add('hidden'));
        btnEn.classList.add('active');
        btnSi.classList.remove('active');
    }
}