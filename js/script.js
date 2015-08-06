$(".pos1 #nav li").click(function() {
    $(".chosen").removeClass("chosen");
    $(this).addClass("chosen");
    $("#page").removeClass("pos1");
    $("#page").addClass("pos2");
    var id = $(this).attr("id");
    $(".selected").removeClass("selected");
    $("."+id).addClass("selected");
    $("li").each(function(){
        var w = $(this).children("span").width() + 10;
        $(this).css("padding-left","calc(100% - "+w+"px)");
    });
});
$("#back").click(function(){
    $("li").css("padding-left","10px");
    $(".chosen").removeClass("chosen");
    $("#page").removeClass("pos2");
    $("#page").addClass("pos1");
});
tappingd = false;
if(tappingd){
    $("#pulsebg").css("display","none");
    $("#check").css("display","none");
}
$('body').bind('touchstart',function() {
    clearInterval(timeout);
});
$('body').bind('touchend', function() {
    timeout = setInterval(function() {
        if($("#check").prop("checked")){
            $("#pulsebg").click();
        }
    },30000);
});