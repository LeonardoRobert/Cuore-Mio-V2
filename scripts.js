document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var id = this.getAttribute('href');
      if(id.length>1){
        document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});