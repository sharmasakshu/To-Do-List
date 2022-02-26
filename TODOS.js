//check off todos by clicking
$("ul").on("click","li",function(){
 
 $(this).toggleClass("completed");
});
//Click on X to delete Todo
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){ // parent() for one class up
 $(this).remove();
});
event.stopPropagation();     //it will not bibble up other elemets will not effect other listeners or css property
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){    //character code for enter key is 13
		//grabbing new todo text from input
	var todotext=$(this).val(); // value enter is stored in todotext
	$(this).val(""); // now input text is empty 
	//create a new li to add to ul
	$("ul").append("<li><span> <i class='fa fa-trash'></i> </span>"+ todotext + "</li>")
}
});$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});