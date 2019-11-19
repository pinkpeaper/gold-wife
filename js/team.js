var lis=document.getElementsByClassName("sheyinshi")[0].children;
var alast=document.getElementsByClassName("alast")[0];
var divs=document.getElementsByClassName("baseright")[0].children;
for(var i=0;i<lis.length;i++)
{
	lis[i].onclick=function()
	{
		for(var i=0;i<lis.length;i++)
		{
			lis[i].children[0].innerHTML="+";
		}
		this.children[0].innerHTML="-";
		alast.innerHTML=">"+" "+this.innerText.split("-")[0];
		var dy=this.getAttribute("dy");
		for(var j=0;j<divs.length;j++)
		{
			divs[j].style.display="none";
		}
		divs[dy].style.display="block";
	}
}
var dianji1=document.getElementById("dianji1");
dianji1.click();