'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Hi Kurt! Your Awesome!");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);
	// $("#submitBtn").click(submitClick);
	$("#submitBtn").click(updateProject);

}

// function submitClick(e) {
// 	$("width").animate({
// 		width: "300px"
// 	}, 500);
// }

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

// function projectClick(e) {
// 	console.log("Project clicked");

// 	e.preventDefault();

// 	$(this).css("background-color","#00FFFF");
// }

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log(jumbotronHeader);
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    

    if (description.length == 0) { 
    	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
       description.fadeIn();
    } else { 
       description.fadeOut();
    }
}