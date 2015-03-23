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
				
$("#selector").jstree();
			// $('.accordian > ul').hide();
			// $('.accordian-first:first-child').siblings().hide();

			// $('.plus-minus-toggle').click(function(){		
			// 	$(this).parent().parent().find('ul').slideToggle('fast');
			// }); 
			// // Second Level Menu							
			// $('.accordian-first .plus-minus-toggle').click(function(){				
			// 	$(this).parent().parent().find('li:not(:first-child)').slideToggle(100);
			// });
   //    $(".left-hand-menu").jstree({
   //        "json_data" : {
   //            "data":[
   //                {
   //                    "data" : "Search engines",
   //                    "children" :[
   //                                 {"data":"Yahoo", "metadata":{"href":"http://www.yahoo.com"}},
   //                                 {"data":"Bing", "metadata":{"href":"http://www.bing.com"}},
   //                                 {"data":"Google", "children":[{"data":"Youtube", "metadata":{"href":"http://youtube.com"}},{"data":"Gmail", "metadata":{"href":"http://www.gmail.com"}},{"data":"Orkut","metadata":{"href":"http://www.orkut.com"}}], "metadata" : {"href":"http://youtube.com"}}
   //                                ]
   //                },
   //                {
   //                    "data" : "Networking sites",
   //                    "children" :[
   //                        {"data":"Facebook", "metadata":{"href":"http://www.fb.com"}},
   //                        {"data":"Twitter", "metadata":{"href":"http://twitter.com"}}
   //                    ]
   //                }
   //            ]
   //        },
   //        "plugins" : [ "themes", "json_data", "ui" ]
   //    }).bind("select_node.jstree", function(e, data)
   //        {
   //            if(jQuery.data(data.rslt.obj[0], "href"))
   //            {
   //                window.location=jQuery.data(data.rslt.obj[0], "href");
   //            }
   //            else
   //            {
   //                alert("No href defined for this element");
   //            }
   //        });
});			