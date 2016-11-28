





$(document).ready(function(){


$(window).scroll(function(e) {
  var hei = $(window).height()
  var box1top = $(".animate1").offset().top
  var box2top = $(".animate2").offset().top
  var box3top = $(".animate3").offset().top
  var box4top = $(".animate4").offset().top
  var box5top = $(".animate5").offset().top
  var box6top = $(".animate6").offset().top
  var box7top = $(".animate7").offset().top
  var box8top = $(".animate8").offset().top
  var box9top = $(".main_top4").offset().top
  var box10top = $(".box5").offset().top
  _scrollTop=$(window).scrollTop()

  if(_scrollTop>(box1top-hei)){
    $(".animate1").addClass('animated zoomInUp')
  }

  if(_scrollTop>(box2top-hei)){
    $(".animate2").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box3top-hei)){
    $(".animate3").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box4top-hei)){
    $(".animate4").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box5top-hei)){
    $(".animate5").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box6top-hei)){
    $(".animate6").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box7top-hei)){
    $(".animate7").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box8top-hei)){
    $(".animate8").addClass('animated zoomInUp')
  }

  if(_scrollTop>(box9top-hei)){
    $(".main_top4").addClass('animated zoomInUp')
  }
  if(_scrollTop>(box10top-hei)){
    $(".box5 a").addClass('animated zoomInUp')
  }

});













})