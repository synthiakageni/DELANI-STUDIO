$(".clickable1").click(function(){
    $(".show1").slideToggle();
    $(".hide1").Toggle();
    $(".show1").slideToggle();
    $(".hide1").fadeOut(1500);
  });
  
  $(".clickable2").click(function() {
    $(".hide2").slideToggle(1200);
    $(".show2").slideToggle(1500);
  });
  $(".clickable3").click(function() {
    $(".hide3").slideToggle(1200);
    $(".show3").slideToggle(1500);
  });
  $("#sub").click(function(event) {
    var name = $("#name").val();
    alert(name + " Thank you for replying");
    event.preventDefault();
  });

  