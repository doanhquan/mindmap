

	$('.main').dblclick(function(){
		$(this).empty();
		var input = document.createElement('input');
		input.placeholder = 'nhập';
		this.appendChild(input);
		
	})
	
	$(".main").mousedown(function(ev){
	      if(ev.which == 3)
	      {
	            $('.edit').css('display','block');
	      }
	});
	$('#add').click(function(){
		//$('.row-1').empty();
		var childOne = document.createElement('div');
		$(childOne).css({
			'width': '120px',
			'height': '100px',
			'background': 'red'
		});
		$('.row-1').append(childOne);
	})