// main.js
$(document).ready(function(){
    // console.log("hello Tik Tok")
    const video=$("#video-tvc")[0];
    const btn=$("div.btn-item");
    $(".unmute").click(function(){
        if($(this).hasClass("mute")){
            video.muted=true;
        }else{
            video.muted=false;
        }
        $(".unmute").toggleClass("mute")
    })
    $(".icon-Q").hover(
        ()=>{
            btn.hide();
            $(".icon-Q img").css({"transform": "scale(1)","opacity":"1"});
        },()=>{
            btn.show();
            $(".icon-Q img").css({"transform": "scale(0.23)","opacity":"0"});
     })
    // console.log((new Date()).getFullYear());
    $("#copyYear").text((new Date()).getFullYear());


})

