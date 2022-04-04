

$(document).ready(function() {
/* ------------ Start Parallax JS ------------ */
 
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
if(!isMobile) {
	if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
}else{
	$(".parallex").sitManParallex({  invert: true });
}	

/* ------------ End Parallax JS ------------ */ 
});