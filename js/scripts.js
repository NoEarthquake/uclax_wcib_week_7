jQuery(function() {
  console.log('loaded');
  let wishCount = 0;
  let max_count = 3;
  let headerArray = ['Congratulations On Your Graduation', 'Happy Birthday', 'Congratulations On Your New Job', "Are you sure you didn't graduate recently?"];
  let paraArray = ["We are proud of you son!", 'One more year!', "I'm so happy you got the position!", "I swear something like that happened. Anyway, if you visited more often this wouldn't even be a problem..."];
  let btnArray = ["Dad I haven't gratuated yet", "My birthday was a month ago", "I told you I didn't get that job!", "Whatever, I give up."];
  let btnStyleArray = ["btn-primary", 'btn-info', 'btn-warning', 'btn-danger'];
	let colorArray = ['white','yellow','blueviolet','red'];

  $('#responsebtn').click(function() {
    console.log('clicked');

    let prev = wishCount;
    wishCount++;
    if (wishCount > max_count) {
      wishCount = 0;
    }
    $(this).html(btnArray[wishCount]).removeClass(btnStyleArray[prev]).addClass(btnStyleArray[wishCount]);
		$('.bodycall').css("background-image", "url('images/bg" + wishCount + ".jpg')");
		$('.iconimg').attr('src','images/icon'+wishCount+'.jpg');
		$('.hdng').html(headerArray[wishCount]).css("color",colorArray[wishCount]);
		$('.para').html(paraArray[wishCount]).css("color",colorArray[wishCount]);



  });

});
