$(document).ready(function(){
	$('#content-box1').css('display','block');
	$('#content-box2').css('display','none');
	$('#content-box3').css('display','none');
});

function showContent(id){
	for(var i=1; i<=3; i++)
		$('#content-box'+i).css('display','none');
	$('#content-box'+id).css('display','block');
}