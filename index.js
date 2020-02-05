$(document).ready()

$('#js-shopping-list-form').submit(event=> {
	event.preventDefault();
	let newItem = $('input[type = "text"]').val();
	$('ul').append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
	document.getElementById('js-shopping-list-form').reset();
});

//toggle checked button

$('ul').on('click','.shopping-item-toggle', event=> {
	$(event.target).closest('li').children('span.shopping-item').toggleClass('shopping-item__checked');
});
//delete list item


$('ul').on('click', '.shopping-item-delete', event=>{
	$(event.target).closest('li').remove();
	event.stopPropagation();
})