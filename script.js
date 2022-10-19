var hmb = document.querySelector("div.hamburger");
var nav = document.querySelector("nav");
var list = document.querySelectorAll("header ul li");
var parallax= document.querySelectorAll(".parallax");
var img= document.querySelectorAll("img.bgImg")

hmb.addEventListener("click",OnHmbClick);
for(i=0;i<list.length;i++)
{
	list[i].addEventListener("click",OnListClick);
}
document.addEventListener("scroll",OnScroll);
OnScroll();
function OnHmbClick(event)
{
	if(hmb.classList.contains("clicked"))
	{
		hmb.classList.remove("clicked");
		nav.classList.remove("clicked");
	}
	else
	{
		hmb.classList.add("clicked");
		nav.classList.add("clicked");
	}
}

function OnScroll(event)
{
	y1=window.pageYOffset,y2=window.innerHeight;
	//x= window.innerWidth;
	if(y1<y2)
	{
		activate(0)
		parallax[0].style.backgroundPositionY=y1*0.6+"px";
		img[0].style.transform="translate(0,"+ y1*0.8 +"px) rotate("+y1*45/y2+"deg)";
	}
	else if(window.pageYOffset<2*window.innerHeight)
	{
		activate(1)
		parallax[1].style.backgroundPositionY=(window.pageYOffset-window.innerHeight)*1+"px";
	}
	else if(window.pageYOffset<3*window.innerHeight)
	{
		activate(2)
		parallax[2].style.backgroundPositionY=(window.pageYOffset-2*window.innerHeight)*0.5+"px";
		img[1].style.transform="translate(0,"+(y1-2*y2)+"px) rotate(-"+(y1-2*y2)*15/y2+"deg)";
	}
	else 
	{
		activate(3)
	}
}

function OnListClick(event)
{
	for(i=0;i<list.length;i++)
		if(list[i]==this)
			scrollTo(0,i*window.innerHeight+1);
}

function activate(i)
{
	for(x=0;x<list.length;x++)
		list[x].classList.remove("active")
	list[i].classList.add("active");
}