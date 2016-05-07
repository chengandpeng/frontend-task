$(document).ready(function() {
	var friends = {
		"deluxe": {
    	"friends": [
      	"Bob Smith",
      	"Jane Doe",
      	"Bubba Hyde",
      	"Betsy Toheavens"
      ]
  	},
    "shared": {
      "friends": [
      	"Bob Smith"
       ]
    },
    "animal-friendly": {
    	"friends": [
        "Bob Smith",
        "Jane Doe",
        "Bubba Hyde"
      ]
    },
    "another": {
      "friends": [
        "Bob Smith",
        "Jane Doe"
      ]
    },
    "and-another": {
    	"friends": []
    }
	}

	$(".type-list ul li").click(function() {
		var index = $(this).index();
		var len;
		switch(index) {
			case 0:
				len = friends.deluxe.friends.length;
				break;
			case 1:
				len = friends.shared.friends.length;
				break;
			case 2:
				len = friends.animal-friendly.friends.length;
				break;
			case 3:
				len = friends.another.friends.length;
				break;
			case 4:
				len = friends.and-another.friends.length;
				break;
		}
	});
});