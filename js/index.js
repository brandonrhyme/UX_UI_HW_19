console.log("Your index.js file is loaded correctly!")

//  Zoom Hero Content Animation 

$(document).ready(function(){
    $("button").hover(function(){
        $("div.content").css("scale" , "1.3")
  });
});

//  Hamburger Menu Dropdown (Borrowed from Activity 19.1?)
//  >> first need to apply media query for hamburger icon <<

$("#toggle").on("click", function(){
    $("#dropDown").slideToggle();
  });  

//  Fade In Skills & Work Items



//  Button State Animations
