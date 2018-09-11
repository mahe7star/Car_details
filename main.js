function changeImage(color){
    const element = $('#car-img');
    element.attr("src",`/assets/images/color/${color}.jpg`);
    $('.color-name').text(color);
}

