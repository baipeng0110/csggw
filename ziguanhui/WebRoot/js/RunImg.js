function runimg(a,b,c) {
var speed=30;
var pic = document.getElementById(a);
var pic1 = document.getElementById(b);
var pic2 = document.getElementById(c);
    pic2.innerHTML=pic1.innerHTML;
    function Marquee()
		{
           if(pic2.offsetWidth-pic.scrollLeft<=0)
			{
             pic.scrollLeft-=pic1.offsetWidth;
           	 }else{
             pic.scrollLeft++;
             }
         }
     var MyMar=setInterval(Marquee,speed);
     pic.onmouseover=function() {clearInterval(MyMar)};
     pic.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
	 }