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
			$('.accordian-first:first-child').siblings().hide();

			$('.plus-minus-toggle').click(function(){		
				$(this).parent().parent().find('ul').slideToggle('fast');
			}); 
			// Second Level Menu							
			$('.accordian-first .plus-minus-toggle').click(function(){				
				$(this).parent().parent().find('li:not(:first-child)').slideToggle(100);
			});
});			