
var bio = {
    'name' : 'abdullah almunea',
    'role' : 'Web developer',
    'contacts' : {
        'webSite' : 'almunea.me',
        'mobile' : '566147999',
        'email' : 'abdullah@almunea.me',
        'github': 'almunea',
        'twitter': 'almune3',
        'location' : 'Riyadh'
    },
    'biopic': 'images/fry.jpg',
    'welcomeMessage' : 'Hello World!',
    'skills' : [

        'awsomeness' , 'developer' , 'teaching'
    ]

};

bio.display = function() {
    // code to display bio JavaScript object here
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));


    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg);


    if(bio.skills.length > 0){
        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function (skill){
            $('#skills').append(HTMLskills.replace('%data%', skill));

        } );


    }

    formattedContactInfo.forEach(function(contact){
        $("#topContacts,#footerContacts").append(contact);

    });

};




var education = {

    'schools': [
        {
            'name': 'king saud university',
            'location': 'Riyadh',
            'degree': 'BA',
            'major' : ['Computer science','Software engineering'],
            'dates' : 'AUG 2013 - DEC 2018'
        }
    ],
    'onlineCourses': [
        { 'school': 'Udacity',
            'title': 'Object-Oriented Javascript',
            'dates': 'MAR 2017',
            'url': 'https://www.udacity.com/course/ud015'
        },
        { 'school': 'Udacity',
            'title': 'HTML5 Canvas',
            'dates': 'MAR 2017',
            'url': 'https://www.udacity.com/course/ud292'
        },
        { 'school': 'Udacity',
            'title': 'Javascript Basics',
            'dates': 'MAR 2017',
            'url': 'https://www.udacity.com/course/ud804'
        },
        { 'school': 'Udacity',
            'title': 'Intro to HTML and CSS',
            'dates': 'MAR 2017',
            'url': 'https://www.udacity.com/course/ud304'
        },
        { 'school': 'Udacity',
            'title': 'Web Development',
            'dates': 'MAR 2017',
            'url': 'https://www.udacity.com/course/cs253'
        }
    ]
};

    // code to display education JavaScript object here
education.display = function() {


            education.schools.forEach(function (i) {
                $('#education').append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace('%data%', i.name);
                var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', i.degree);
                var formattedSchoolDates = HTMLschoolDates.replace('%data%', i.dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', i.location);
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', i.major);

                $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedSchoolLocation);
                $('.education-entry:last').append(formattedSchoolMajor);
            });






                education.onlineCourses.forEach(function (i) {
                    $('#education').append(HTMLonlineClasses);

                    $('#education').append(HTMLonlineSchool);
                    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', i.title).replace('#', i.url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', i.school);
                    var formattedOnlineDates = HTMLonlineDates.replace('%data%', i.dates);
                    var formattedOnlineURL = HTMLonlineURL.replace('%data%', i.url).replace('#', i.url);

                    $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
                    $('.education-entry:last').append(formattedOnlineDates);
                    $('.education-entry:last').append(formattedOnlineURL);
                });






};



var work = {

    'jobs': [
        {
            'employer': 'Planet Express',
            'title': 'delivery boy',
            'location': 'Riyadh',
            'dates': 'FEB 2017 - JUL 2017',
            'description': 'Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. '
        },
        {
            'employer': "Panucci's Pizza",
            'title': 'delivery boy',
            'location': 'Riyadh',
            'dates': 'FEB 2017 - JUL 2017',
            'description': 'Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. '
        }
    ]
};

work.display = function() {
    // code to display work JavaScript object here


        work.jobs.forEach(function (job) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
            var formattedDatesWorked = HTMLworkDates.replace('%data%', job.dates);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%',job.description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $('.work-entry:last').append(formattedEmployerWorkTitle);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedDatesWorked);
            $('.work-entry:last').append(formattedWorkDescription);
        });


};



var projects = {

    'projects': [
        {
            'title': 'Sample Project 1',
            'dates': '2014',
            'description': 'Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. ',
            'url': 'http://www.google.com',
            'img':[
                'images/image1.png','images/image2.jpeg'
            ]
        }
    ]
};


projects.display = function() {
    // code to display projects JavaScript object here

    projects.projects.forEach(function (project){
        $ ('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDes = HTMLprojectDescription.replace('%data%',project.description);
        $('.project-entry:last').append(formattedDes);



        projects.projects.img.forEach(function (img) {
            // var formattedImg = HTMLprojectImage.replace('%data%',img);
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%',img));
        });
    });

};

// End of function


// execute 'display' methods
bio.display();
education.display();
work.display();
projects.display();


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*





// map here
$('#mapDiv').append(googleMap);
// var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
// $('.work-entry:last').append(formattedLocation);
