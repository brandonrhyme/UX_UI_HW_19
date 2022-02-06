console.log("Your index.js file is loaded correctly!")
$(document).ready(function(){
    $("button").hover(function(){
        $("div.content").css("scale" , "1.3")
  });
});

$(document).ready(function(){
    $("#hamburgerIcon").on("click", function(){
        $("#slideDownMenu").slideToggle("fast");

    });  
});
