$(document).ready(function() {
	var friends;

	function getFriendLen(index) {
		var len = 0;
		switch(index) {
			case 0:
				len = friends["deluxe"].friends.length;
				break;
			case 1:
				len = friends["shared"].friends.length;
				break;
			case 2:
				len = friends["animal-friendly"].friends.length;
				break;
			case 3:
				len = friends["another"].friends.length;
				break;
			case 4:
				len = friends["and-another"].friends.length;
				break;
		}
		return len;
	}

	function getDynamicContent(len) {
		var content = '';
		switch(len) {
			case 0:
				break;
			case 1:
				content = "Jane Doe has stayed here";
				break;
			case 2:
				content = "Jane Doe and John Doe have stayed here";
				break;
			case 3:
				content = "Jane Doe, John Doe, and 1 other friend have stayed here";
				break;
			default:
				content = "Jane Doe, John Doe, and 2 other friends have stayed here";
		}
		return content;
	}

	$(".type-list ul li").click(function() {
		$(".type-list ul li").removeClass("active");
		$(this).addClass("active");

		var len = getFriendLen($(this).index());
		var content = getDynamicContent(len);
		$("#friendMessage").text(content);
	});

	$(".mobile-select select").change(function() {
		var len = getFriendLen(parseInt($(this).val()));
		var content = getDynamicContent(len);
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