 $(document).ready(function(){


 	var val1 = 0;

 	$('.navbar-trigger').click(function(){

 		if(val1==0){
 			$(this).children("img").attr("src","images/cross.png");
 		$('.navbar-custom').slideToggle();

 		val1 = 1;
 	
 	}
 	else {
 		$('.navbar-custom').slideToggle();
 			$(this).children("img").attr("src","images/hamburger.png");
 		val1 = 0;

 	}
 	})
 })



 $('.scroll-link').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});



 $(window).scroll(function() {
var $height1 = $(window).scrollTop();
if($height1 > 10) {
 $('body').addClass("header-fixed");

} else {
 $('body').removeClass("header-fixed");
}
});








  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a svg")
        .removeClass("fa-caret-up")
        .addClass("fa-caret-down");
    } else {
      $(".set > a svg")
        .removeClass("fa-caret-up")
        .addClass("fa-caret-down");
      $(this)
        .find("svg")
        .removeClass("fa-caret-down")
        .addClass("fa-caret-up");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });



  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

 




 $(document).ready(function(){


  var val1 = 0;

  $('.pass-btn1').click(function(){

    if(val1==0){
      $('.password-field1').attr("type","text");
    $('.eye-close').slideToggle();
    $('.eye-open').slideToggle();

    val1 = 1;
  
  }
  else {
     $('.password-field1').attr("type","password");
    $('.eye-close').slideToggle();
    $('.eye-open').slideToggle();
    val1 = 0;

  }
  })
 })