function popup(parentPopup, bgPopup, btnPopup) {
    var popup = document.querySelector(parentPopup),
        bg = document.querySelector(bgPopup),
        btn = document.querySelector(btnPopup);

    btn.addEventListener('click', function(){
        popup.classList.toggle('visible');
    });
    bg.addEventListener('click', function(){
        popup.classList.toggle('visible');
    });
}

popup('.popup', '.popup__bg', '.button-js');

