$(document).ready(function() {
		// Tree Menu

	$("#selector").jstree();
	jstree.bind("click.jstree", function (event) {
   var node = $(event.target).closest("li");
   var data = node.data("jstree");
   // Do some action
});
});			