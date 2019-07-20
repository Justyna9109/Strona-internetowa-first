// second-section //

document.addEventListener("DOMContentLoaded",function (){
    {console.log("DOM");}

    var funPicture= document.querySelector(".child_name");
    {console.log(funPicture);}


    funPicture.addEventListener("mouseover",function(){
        funPicture.parentElement.removeChild(funPicture);
    });

    var fun_funPicture= document.querySelector(".child_chair");
    {console.log(fun_funPicture);}


    fun_funPicture.addEventListener("mouseover",function() {
        fun_funPicture.parentElement.removeChild(fun_funPicture);
    });
});


