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


// first-section //

document.addEventListener("DOMContentLoaded",function () {
    {console.log("DOM");}

    var sign = document.querySelector(".sign");

    var sign1 = document.querySelector(".sign1");

    var list=document.querySelectorAll(".text_picture li");
    for(var i=0;i<list.length;i++)

    var index=0;

    list[index].classList.add("visible");


    sign1.addEventListener("click",function(){
        console.log("click");

        list[index].classList.remove("visible");
        index++;

        if (index > list.length - 1) {
            index = 0;
        }

        list[index].classList.add("visible");

    });

    sign.addEventListener("click",function(){
        console.log("click");

        list[index].classList.remove("visible");
        index--;

        if (index < 0) {
            index = list.length - 1;
        }

        list[index].classList.add("visible");


    });






});

