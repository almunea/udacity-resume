
var bio = {
    "name" : "abdullah almunea",
    "role" : "Web developer",
    "contacts" : {
        "webSite" : "almunea.me",
        "mobile" : "566147999",
        "email" : "abdullah@almunea.me",
        "github": "almunea",
        "twitter": "almune3",
        "location" : "Riyadh"
    },
    "picture": "images/me.png",
    "welcomeMassage" : "Hello World!",
    "skills" : [

        "awsomeness" , "developer" , "teaching"
    ]

};
var education = {

    "schools": [
        {
            "name": "king saud university",
            "location": "Riyadh",
            "degree": "BA",
            "major" : "Computer science",
            "dates" : "AUG 2013 - DEC 2018"
        }
    ],
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Object-Oriented Javascript",
            "completed": "MAR 2017",
            "url": "https://www.udacity.com/course/ud015"
        },
        { "school": "Udacity",
            "title": "HTML5 Canvas",
            "completed": "MAR 2017",
            "url": "https://www.udacity.com/course/ud292"
        },
        { "school": "Udacity",
            "title": "Javascript Basics",
            "completed": "MAR 2017",
            "url": "https://www.udacity.com/course/ud804"
        },
        { "school": "Udacity",
            "title": "Intro to HTML and CSS",
            "completed": "MAR 2017",
            "url": "https://www.udacity.com/course/ud304"
        },
        { "school": "Udacity",
            "title": "Web Development",
            "completed": "MAR 2017",
            "url": "https://www.udacity.com/course/cs253"
        }
    ]
};
var work = {

    "jobs": [
        {
            "employer": "Planet Express",
            "title": "delivery boy",
            "location": "Riyadh",
            "dates": "FEB 2017 - JUL 2017",
            "description": "Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. "
        },
        {
            "employer": "Panucci's Pizza",
            "title": "delivery boy",
            "location": "Riyadh",
            "dates": "FEB 2017 - JUL 2017",
            "description": "Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. "
        }
    ]
};
var projects = {

    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. "
            "url": "http://www.google.com"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMassage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();

projects.display = function(){
    for (project in projects.projects){
        $ ("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);


    }
}

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();
// map here
$("#mapDiv").append(googleMap);
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
