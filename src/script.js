$(document).ready(function() {

  function showIG(){
    var url="https://api.instagram.com/v1/users/2534562560/media/recent/?access_token=2534562560.e3b1322.a9adadd5e86541a88c5c3403453378db"
    console.log("searching url: " + url);
    $.getJSON(url, function(results) {
      $('#igDisplay').empty();
      for(var i=0; i< 4; i++) {
        $('#igDisplay').append("<img src='" + results.data[i].images.low_resolution.url + "' />");
      }
    });
  }
  showIG();

  var nImages = $('.viwerImage .imageWrap').length;
  var n = 0;
  function goto(n) {
    $('.viwerImage .imageWrap').removeClass("visible").addClass("hide");
    $($('.viwerImage .imageWrap')[n]).removeClass("hide").addClass("visible");
  }
  setInterval(function(){
    n = (n + 1) % nImages;
    goto(n);
  }, 5000);

  function post(data) {
    data.formkey = "1FAIpQLSc7VVDGxz6sehCjWx3sVGtGom9XHSeE7NJMqRoaa2WNmZZk3A";
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSc7VVDGxz6sehCjWx3sVGtGom9XHSeE7NJMqRoaa2WNmZZk3A/formResponse",
      data: data,
      type: "POST",
      dataType: "xml",
    });
  }
  $(function() {
  	$("#newsLetter .buttonWires").click(function(e) {
	    var form = $("#newsLetter");
	    var email = form.find(".email");
	    var submit = form.find(".submit");
  		var data = {
  			"entry.616378690": email.val(),
  		};
  		setTimeout(function() {
  				submit.val("Thank you!");
  		    $(".subscribe-form").addClass("submitted");
          $(".submitted-copy").removeClass("hidden");
          $("#newsLetter .right").addClass("hidden");
  		}, 500);
  		setTimeout(function() {
  		    submit.val("Wait ...");
  			post(data);
  		}, 0);
  		return false;
    });
  });

});
