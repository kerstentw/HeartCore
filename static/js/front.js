$(window).ready(function(){

SPEED = 700;
value = 0

/*
$("#cw").click(function(){
  value += 90;

  $("#circle").rotate({
      animateTo:value
  },3000);
  


});

$("#ccw").click(function(){
  value -= 45;
  
  $("#circle").rotate({
      animateTo:value
  },3000);
});

*/


$("#cw").rotate({
  //async : true,
  bind:
    {
      click: function(){
        value += 72;
        $("#circle_mb").rotate({animateTo:value})
//        $("#fox").rotate({animateTo: value + 10});
    }
}

});


$("#ccw").rotate({
  //async : true,
  bind:
    {
      click: function(){
        value -= 72;
        $("#circle_mb").rotate({animateTo:value});
  //      $("#fox").rotate({animateTo:value + 10});

      }
    }

});

  $("#runIt").click(function(){

        var $container = $("html,body");
        var $scrollTo = $('#circle_container');
        $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0},SPEED);
    });


  $("#gotoCast").click(function(){
       var $container = $("html,body");
       var $scrollTo = $("#cast");
     $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0}, SPEED);

  });

  $("#BackUp").click(function(){
    var $container = $("html,body");
    var $scrollTo = $("#circle_container");
     $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0}, SPEED);

  });


   $(".small_circle").click(function(){
   var name = $(this)
   $("#char_info").text(name.attr("class"))
  });
});


//cast = JSON.parse(fs.readFileSync('static/js/cast.json',"utf8"));
//console.log(cast)
/*
$(this).click(function(){
 var name = this.attr('href');
 console.log(name)
 console.log(cast[name]) 
});
*/


/*
  Track1 = false;
  Track2 = false;
  Track3 =  false;
  Track4 = false;
  Track5 = false;
*/


/*
  var SPEED = 700;
  $("#g1_info").hide();
  $("#g1_liner").hide();

  $("#g2_info").hide();
  $("#g2_liner").hide();

  $("#g3_info").hide();
  $("#g3_liner").hide();

  $("#g4_info").hide();
  $("#g4_liner").hide();

  $("#g5_info").hide();
  $("#g5_liner").hide();








  $("#group_1").click(function(){
      $("#g1_liner").fadeIn(1500);
      setTimeout(function(){$("#g1_info").fadeIn()},700);
      Track1 = true;      

  });



  $("#group_2").click(function(){
      $("#g2_liner").fadeIn(1500);
      setTimeout(function(){$("#g2_info").fadeIn()},700);
      Track2 = true;      

  });





  $("#group_3").click(function(){
      $("#g3_liner").fadeIn(1500);
      setTimeout(function(){$("#g3_info").fadeIn()},700);
      Track3 = true;      

  });






  $("#group_4").click(function(){
      $("#g4_liner").fadeIn(1500);
      setTimeout(function(){$("#g4_info").fadeIn()},700);
      Track4 = true;      

  });






  $("#group_5").click(function(){
      $("#g5_liner").fadeIn(1500);
      setTimeout(function(){$("#g5_info").fadeIn()},700);
      Track5 = true;      

  });




  $("#runIt").click(function(){

        var $container = $("html,body");
        var $scrollTo = $('#main_container');
        $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0},SPEED);
    });


  $("#gotoCast").click(function(){
       var $container = $("html,body");
       var $scrollTo = $("#cast");
     $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0}, SPEED);

  });

  $("#BackUp").click(function(){
    var $container = $("html,body");
    var $scrollTo = $("#main_container");
     $container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top, scrollLeft: 0}, SPEED);

  });

  $(this).click(function(){
 

  if (Track1 == false){
    $("#g1_info").hide();
    $("#g1_liner").hide();
  }
  if (Track2 == false){
    $("#g2_info").hide();
    $("#g2_liner").hide();
  } 
  if (Track3 == false){
    $("#g3_info").hide();
    $("#g3_liner").hide();
   }
  if (Track4 == false){
    $("#g4_info").hide();
    $("#g4_liner").hide();
  } 
  if (Track5 == false){
    $("#g5_info").hide();
    $("#g5_liner").hide();
   }
   

  
        Track1 = false;
        Track2 = false; 
        Track3 = false; 
        Track4 = false; 
        Track5 = false;
   

  });

});
*/



