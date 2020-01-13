//Function to use the courseType attribute to load course divs of matching type on education page
function loadCourses(element){
	var courseType = element.getAttribute('data-courseType');
	var courses = document.getElementsByClassName("courseSection");
	element.classList.remove("coursecard");
	element.classList.add("coursecard_active");
	element.classList.add("coursecard");
	closeActiveCards();
	for(var i = 0; i < courses.length; i++)
	{
		var thisCourse = courses[i];
	  	if(thisCourse.getAttribute('data-courseType') == courseType){
	  		thisCourse.style.display = "block";
	   	}
	   	else{
	   		thisCourse.style.display = "none";
	   	}
	}
}

//Function to load project by ID on education page
function loadProject(element, isInitial){
	var projectTitle = element.getAttribute('data-projectTitle');
	var projects = document.getElementsByClassName("projectSection");
	closeActiveCards();
	element.classList.remove("projectcard");
	element.classList.add("projectcard_active");
	element.classList.add("projectcard");
	for(var i = 0; i < projects.length; i++)
	{
		var thisProject = projects[i];
	  	if(thisProject.getAttribute('data-projectTitle') == projectTitle){
	  		thisProject.style.display = "block";
	   	}
	   	else{
	   		thisProject.style.display = "none";
	   	}
	}
	document.getElementById("projectImage").src = element.getAttribute('data-imageURL');
	if(!isInitial){
		var elmnt = document.getElementById("projectData");
		//No scroll after states feedback
		//elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
	}
}

//Function to load officer with matching attribute and ID on chapter page
function loadOfficer(element, isInitial){
	var officer = element.getAttribute('data-officer');
	var officers = document.getElementsByClassName("projectSection");
	closeActiveCards();
	element.classList.remove("projectcard");
	element.classList.add("projectcard_active");
	element.classList.add("projectcard");
	for(var i = 0; i < officers.length; i++)
	{
		var thisOfficer = officers[i];
	  	if(thisOfficer.getAttribute('data-officer') == officer){
	  		thisOfficer.style.display = "block";
	   	}
	   	else{
	   		thisOfficer.style.display = "none";
	   	}
	}
	document.getElementById("officer-opack-back").style.backgroundImage = "url('" + element.getAttribute('data-imageURL') + "')";
	if(!isInitial){
		var elmnt = document.getElementById("officerData");
		//No scroll after states feedback
		//elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
	}
}

//Function to reset active class on project cards
function closeActiveCards(){
	var cards = document.getElementsByClassName("projectcard_active");
	for(var i = 0; i < cards.length; i++)
	{
		cards[i].classList.remove("projectcard_active");
	}
	var cards = document.getElementsByClassName("coursecard_active");
	for(var i = 0; i < cards.length; i++)
	{
		cards[i].classList.remove("coursecard_active");
	}
}