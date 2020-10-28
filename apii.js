 $( document ).ready(function(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data)
      $.each(data.results, function(key, person){
        let content = '<div class="col-md-4 mb-3">';
        content += `<img src="${person.picture.large}" class="img-fluid rounded-circle">`;
      content += '<div class="' + person.gender + '">'+ person.name.title  + ' ' +  person.name.first + ' ' +  person.name.last +'</div>';
        content += '<div><span class="flag-icon flag-icon-' + person.nat.toLowerCase() + '"></span></div>';
        content += '<div><a href="http://www.twitter.com/'+ person.login.username +'" class="ssk ssk-icon ssk-twitter"><a href="http://www.facebook.com/'+ person.login.username +'" class="ssk ssk-icon ssk-facebook"><a href="http://www.github.com/'+ person.login.username +' " class="ssk ssk-icon ssk-github"></a></div>';
        $('#peeps').append(content + '</div>');

      })
    }
  });
});


//Call back eh uma funcao q passa a funcao pra outra funcao...

//+= se vc coloca soh = vc ta mudando a referencia da variavel
//sem o sinal de + vc apenas ia substituir uma referencia da variavel
//se vc coloca o + ele acrescenta outra referencia
//content eh um objeto pq estamos guardando varias informacoes dentro dele
//uma referencia nao utiliza nenhum espaco de memoria para guardar dados. ela apenas aponta para uma variavel ou objeto existente
//e vai revceber o valor dos mesmos.

//${person.gender}





//don version

/* $.ajax({
  url: 'https://randomuser.me/api/?results=24',
  dataType: 'json',
  success: function(data) {
    console.log(data)
    $.each(data.results, function(key, value){
      var person = value;
      $('#people').append(`<div class="col-md-2 text-center ${person.gender}">
                            <img src="${person.picture.large}" alt="" class="img-fluid rounded-circle">
                            <h3>${person.name.first} ${person.name.last}</h3>
                            <p><span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                          </div>`) */
