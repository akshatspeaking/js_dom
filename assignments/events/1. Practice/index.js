//Select the section with an id of container without using querySelector.

document.getElementById("container");

//Select the section with an id of container using querySelector.

document.querySelector("#container");

//Select all of the list items with a class of "second".

document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

let ordered = document.querySelector("ol");
ordered.getElementsByClassName("third");

//Give the section with an id of container the text "Hello!".

// document.querySelector("#container").innerText = "Hello"

//Add the class main to the div with a class of footer.

document.querySelector(".footer").className = "main footer";

//Remove the class main on the div with a class of footer.

document.querySelector(".footer").className = "footer"


//Create a new li element.

let newli = document.createElement("li");

//Give the li the text "four".

newli.innerText = "four";

//Append the li to the ul element.

document.querySelector("ul").append(newli);

//Loop over all of the list inside the ol tag and give them a background color of "green".

NOT CLEAR


//Remove the div with a class of footer.

document.querySelector(".footer").remove();