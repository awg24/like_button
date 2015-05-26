$(document).ready(function(){

	$button = $("#like-btn");
	var counter = 0;

	$button.on("click", likeIncrease);

	function likeIncrease(){
		counter++;
		if(counter === 1){
			$button.html(counter+" Like");
		} else {
			$button.html(counter+" Likes");
		}
	}
});