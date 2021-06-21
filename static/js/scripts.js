$(".clickable1").ready(function(){
    $(".hide1").fadeOut();
    $(".show1").on("click",function(){
      $(".hide1").fadeIn();
      $(".show1").slideToggle();
    });
    $(".hide1").on("click",function(){
      $(".show1").show().fadeIn();
      $(".hide1").fadeOut();
    });
    
  });

  $(".clickable2").ready(function(){
    $(".hide2").fadeOut();
    $(".show2").on("click",function(){
      $(".hide2").fadeIn();
      $(".show2").slideToggle();
    });
    $(".hide2").on("click",function(){
      $(".show2").show().fadeIn();
      $(".hide2").fadeOut();
    });
    
  });

  $(".clickable3").ready(function(){
    $(".hide3").fadeOut();
    $(".show3").on("click",function(){
      $(".hide3").fadeIn();
      $(".show3").slideToggle();
    });
    $(".hide3").on("click",function(){
      $(".show3").show().fadeIn();
      $(".hide3").fadeOut();
    });
    
  });

  
  
  
  $("#sub").click(function(event) {
    var name = $("#name").val();
    alert(name + " Thank you for replying");
    event.preventDefault();
  });



  