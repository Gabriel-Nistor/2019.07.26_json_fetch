var body = document.getElementById("person");
var url = 'http://5d35939a5b83cd0014d0b063.mockapi.io/rotsin/users';

window.onload = getUsers;

function getUsers() {
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.forEach(function (user) {
               
                var userBox = document.createElement("div");
                userBox.className = "person";
               

                var userName = document.createElement("div");
                userName.innerText = "Name:" + " " + user.firstName + " " + user.lastName;
                userBox.appendChild(userName);
                
                var userJob = document.createElement("div");
                userJob.className = "small-font";
                userJob.innerText = "Job:" + " " + user.jobDescription;
                userBox.appendChild(userJob);

                var userCity = document.createElement("div");
                userJob.className = "small-font";
                userCity.innerText = "City" + " " + user.city;
                userBox.appendChild(userCity);

                var userPicture = document.createElement("img");
                userPicture.src = user.avatar;
                userPicture.className = "picture";
                userBox.appendChild(userPicture);

                body.appendChild(userBox);

               

               
                
            });
        })
}
