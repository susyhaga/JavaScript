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
