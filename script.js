$('#currentDay').text(dayjs().format('ddd DD/MM/YYYY'))

// function to save to local storage when button is clicked
	// get the values
	// store them

	$('.btn').on('click', function() {
		console.log('testing')
		var textValue = $(this).siblings('.description').val()
		var timeValue = $(this).parent().attr('id')
		localStorage.setItem(timeValue, textValue) 
	}) 

	function hourUpdater() {
		// get current number of hours
		var currentHour = dayjs().hour();
	
		// loop over time blocks
		$('.timeBlock').each(function () {
		  var blockHour = parseInt($(this).attr('id'));
	
		  // check if we've moved past this time
		  if (blockHour < currentHour) {
			$(this).addClass('past');
		  } else if (blockHour === currentHour) {
			$(this).removeClass('past');
			$(this).addClass('present');
		  } else {
			$(this).removeClass('past');
			$(this).removeClass('present');
			$(this).addClass('future');
		  }
		});
	  }
	
	  hourUpdater();
	var interval = setInterval(hourUpdater, 15000);

for(var i = 8; i < 19; i++) {
	$('#'+ i + ' .description').val(localStorage.getItem(i))
}



// function to update classes hours change
	// get current time
	// comptare against those in your time blocks
	// update the classes

// remember to call your update function on page load
// remember to also get values from local storage and set them on page load