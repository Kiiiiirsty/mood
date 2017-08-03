$(document).ready(function(){
  $("iframe").hide();
    $("#moodSelection .happy").click(function(){
        $(".ihappy").fadeToggle();
    });

    $("#moodSelection .relaxed").click(function(){
        $(".irelaxed").fadeToggle();
    });

    $("#moodSelection .down").click(function(){
        $(".idown").fadeToggle();
    });

    $("#moodSelection .anxious").click(function(){
        $(".ianxious").fadeToggle();
    });

    $("#moodSelection .neutral").click(function(){
        $(".ineutral").fadeToggle();
    });


});
