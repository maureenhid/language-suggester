$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var animal = $("input:radio[name=animal]:checked").val();
    var task = $("input:radio[name=task]:checked").val();
    var pastime = $("input:radio[name=pastime]:checked").val();



    if (environment === 'a' && food === 'a' && animal === 'a' || animal === 'a' && task === 'a' && pastime === 'a' || food === 'a' && task === 'a' && pastime === 'a') {
      $(".person1").text(person1Input);
      $("#python").show();
    } else if (environment === 'b' && food === 'b' && animal === 'b' || animal === 'b' && task === 'b' && pastime === 'b'|| food === 'b' && task === 'b' && pastime === 'b') {
      $(".person1").text(person1Input);
      $("#ruby").show();
    } else if (environment === 'c' && food === 'c' && animal === 'c' || animal === 'c' && task === 'c' && pastime === 'c'|| food === 'c' && task === 'c' && pastime === 'c') {
      $(".person1").text(person1Input);
      $("#javascript").show();
    } else if (environment === 'd' && food === 'd' && animal === 'd' || animal === 'd' && task === 'd' && pastime === 'd'|| food === 'd' && task === 'd' && pastime === 'd') {
      $(".person1").text(person1Input);
      $("#sql").show();
    }

    event.preventDefault();
  });  
});