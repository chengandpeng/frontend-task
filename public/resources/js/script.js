$(document).ready(function() {
	var friends;

	function geneContent(index) {
		var friend;
		switch(index) {
			case 0:
				friend = friends["deluxe"].friends;
				break;
			case 1:
				friend = friends["shared"].friends;
				break;
			case 2:
				friend = friends["animal-friendly"].friends;
				break;
			case 3:
				friend = friends["another"].friends;
				break;
			case 4:
				friend = friends["and-another"].friends;
				break;
		}

		var sort_friend = friend.sort();
		var content = ' has stayed here';
		switch(friend.length) {
			case 0:
				content = '';
				break;
			case 1:
				content = sort_friend[0] + content;
				break;
			case 2:
				content = sort_friend[0] + ", " + sort_friend[1] + content;
				break;
			case 3:
				content = sort_friend[0] + ", " + sort_friend[1] + ", and 1 other friend" + content;
				break;
			default:
				content = sort_friend[0] + ", " + sort_friend[1] + ", and " + (friend.length - 2) + " other friends" + content;
		}
		return content;
	}

	$(".type-list ul li").click(function() {
		$(".type-list ul li").removeClass("active");
		$(this).addClass("active");

		var content = geneContent($(this).index());
		$("#friendMessage").text(content);
	});

	$(".mobile-select select").change(function() {
		var content = geneContent(parseInt($(this).val()));
		$("#friendMessage").text(content);
	});

	/* -- init click "Animal Friendly" tab --*/
	$.getJSON("friends.json", function(data) {
		if(data) {
			friends = data;
			$('#initClicked').trigger('click');
		}
	})
	
});