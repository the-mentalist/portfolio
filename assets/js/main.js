function showContent(id){
	for(var i=1; i<=3; i++)
		$('#content-box'+i).css('display','none');
	$('#content-box'+id).css('display','block');
}