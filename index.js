$(".FirstD").hide();
$(".show-button").click(()=>{
    $(".FirstD").show();
});
$(".change-colors").click(()=>{
    $(".firstli").css("color","red");
    $(".secondli").css("color","blue");
    $(".thirdli").css("color","green");
});

$(".add-button").click(()=>{
    $(".firstul").append(`<li>${$(".firstinput").val()}</li>`);
});

$(".animateD").css({"background-color": "yellow", "width": "100px" , "height":"100px"});


$(".animateB").click(function(){
    $(".animateD").animate({  
        left: '250px',  
        height: '+=50px',  
        width: '+=50px'  
    });  
});


$(".hiddenP").hide();
$(".hiddenB").hover(inFunction,OutFunction);
function inFunction(){
    $(".hiddenP").show();
};
function OutFunction(){
    $(".hiddenP").hide();
};

$(".toB").click(()=>{
    $(".toUl").append(`<li>${$(".toI").val()}</li>`);
});

$(".toUl").on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');;
});
$(".clearA").click(()=>{
    $(".toUl li").each(()=>{
        $(".toUl li").remove();
    });
});