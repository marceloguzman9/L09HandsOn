let btn= document.getElementById("btn");
btn.addEventListener("click", function()  {
  
  let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById(".card-text").innerHTML = myObj.text;
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

}

  
//Create a function that will show the name, picture and birthday of Einstein when the page is loaded using the einstein.json file.
//Create a button that will call the above function and will display his bio when clicked.
//Don't forget the necessary HTML code to allow this all to work!
