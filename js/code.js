var block=document.getElementsByClassName("header_burger");
var mennu=document.getElementsByClassName("header_menu");
var boddy=document.getElementsByTagName("body");
block[0].onclick=function(){
    if(block[0].className=="header_burger"){
        this.className="header_burger active";
        mennu[0].className="header_menu active";
        boddy[0].className="lock"
    }
    else{
        this.className="header_burger";
        mennu[0].className="header_menu";
        boddy[0].className="unlock"
    }
};
    


