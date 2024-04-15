Oslomet Brukernavn : ahyus1798
Github brukernavn : Ahmedlyus
git repo- link https://github.com/AhmedlYus/Oblig3.
Fult navn : Ahmed Liban Yusuf.
this application runs on a local website, with serverport:8080
Last obligatory assigment in DATA1700 / Webdevelopment, 
Program spesifications - 
Chinema booking site, containin frontend javascript input validatition, Jquery, Bootstrap for css functions for HTTP request to the server,
serverside / backend, contains H2 in memory database, JPA reposetory, java springboot server, 
The user chooses movies, and the x amount of tickets they want, inputs their information, and press buy/kjøp 
where the JS/Jquery picks the inputs up and validates it before sending it to a kinobillet function. and makes
the info into an object sending it to the backsend server trough a POST-request, the java backend receves it trough a RestController
and stores it into a JPA Reposotery, when the POST is sucessfull, the js sends a GET-Request to a http method handler, retriving 
the information saves from the database and displayes it on the website.
the slettBilleter function, gets called when button is clicked where the js sends a Get request to a http method deleting all information from the database
