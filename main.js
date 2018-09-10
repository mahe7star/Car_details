color = {
    name: 'red'
}
loadUser();
function loadUser() {
    console.log(window.color);
    const template = $('#template').html();
    Mustache.parse(template); 
    const rendered = Mustache.render(template, window.color);
    $('#target').html(rendered);
}
function changeImage(color){
   window.color.name = color;
   loadUser();
   $('.color-name').text(color);
}

