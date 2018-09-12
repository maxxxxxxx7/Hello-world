$(document).ready(function(){

$('.header-items div').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active')
})

$('#burger').on('click',function(){
	console.log('ada')
	$('#burger-list').toggleClass('hide')
})

})