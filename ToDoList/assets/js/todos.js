// toggle check by clicking
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("checked");
})

//Delete icon remove the blong item
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
})

//Add new item
//listen to the input and action on enter key
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grab the new item
		var newItem = $(this).val();
		$(this).val("");
		//add the new item to list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newItem + "</li>");

	}
})

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})
