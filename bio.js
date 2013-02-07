<script>
  
$(document).ready(function(){
  $(".answer").hide();
  	$("h1").click(function(){
  		$(this).toggleClass("close");
  		$(this).next().slideToggle();
  		return false;
   });
});//end


</script>