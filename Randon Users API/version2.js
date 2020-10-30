 $( document ).ready(function(){
$.ajax({
  url: 'https://randomuser.me/api/?results=50',
  dataType: 'json',
  success: function(data) {
    console.log(data)
    $.each(data.results, function(key, value){
      var person = value;
      $('#people').append(`<div class="col-md-4 text-center mb-3 ${person.gender}">
                            <img src="${person.picture.large}" alt="" class="img-fluid rounded-circle">
                            <h3>${person.name.first} ${person.name.last}</h3>
                            <p><span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                            <a href="http://www.twitter.com/ ${person.login.username}"class="ssk ssk-icon ssk-twitter""></a>
                             <a href="http://www.facebook.com/${person.login.username}"class="ssk ssk-icon ssk-facebook""></a>
                             <a href="http://www.github.com/ ${person.login.username}"class="ssk ssk-icon ssk-github""></a>
                          </div>`)
    })
  }
});
});
