$(document).ready(function() {

//1)Высота блоков в одной строке должна быть одинаковой

	setHeight($("div.box"));
	setHeight($("div.block"));

	function setHeight(obj) {
		var generalHeight = 0;
		obj.each(function() {
			if(this.offsetHeight > generalHeight) {
				generalHeight = this.offsetHeight;
			} 
		});
		obj.height(generalHeight);
	}

//2)Первому элементу каждого списка назначить цвет текста красный

	$("ul.list li:first-child").css("color", "red"); 	

//3)Очистить поля формы от введенных данных по клику на Clean

	$(".btn-clean").click(function() {					
		$("input:text, input:password").val("");
	});

//4)Во все четные элементы списка поставить порядковый номер перед текстом	

	$("ul.list").each(function() {
		var i = 2;
		$(this).children("li:odd").each(function() {
			$(this).prepend(i+ ' ');
			i = i + 2;
		});
	});

//5)По клику на элемент списка назначать на него класс "active".
//	Одновременно этот класс может быть только на одном элементе в пределах одного списка

	
	$("ul.list li").click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});


});
