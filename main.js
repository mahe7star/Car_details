function changeImage(color, curr){
    const element = $('#car-img');
    element.attr("src",`assets/images/color/${color}.jpg`);
    $('.color-name').text(color);
    $('.color-cirles').removeClass('active');
    $(curr).addClass('active');
}

