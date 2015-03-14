$(document).ready(function() {
		// Push Menu
			var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
				showLeftPush = document.getElementById( 'showLeftPush' ),
				mainContent = document.getElementById( 'main-content' )
				body = document.body;


			showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( mainContent, 'cbp-spmenu-push-toright' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
				disableOther( 'showLeftPush' );
			};
  

			function disableOther( button ) {
				if( button !== 'showLeftPush' ) {
					classie.toggle( showLeftPush, 'disabled' );
				}
			}

		// Tree Menu
			// First Level Menu
			$('.accordian > ul').hide();
			$('.plus-minus-toggle').click(function(){		
				// $(this).parent().parent().find('.accordian-first').slideToggle('fast');
				// $(this).parent().parent().find('.accordian-first li:first-child').slideToggle('fast');
				$(this).parent().parent().find('ul').slideToggle('fast');
			}); 
			// Second Level Menu							
			$('.accordian-first .plus-minus-toggle').click(function(){
				debugger;
				$(this).parent().siblings().hide();
				// $('.accordian-first li').find('').hide();
				$(this).parent().parent().children().slideToggle('fast');
			});
});			