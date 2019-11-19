var lis=document.getElementsByClassName("sheyinshi")[0].children;
var divs=document.getElementsByClassName("baseright")[0].children;
var alast=document.getElementsByClassName("alast")[0];
console.log(lis);
console.log(divs);
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
		for(var i=0;i<lis.length;i++)
		{
			lis[i].className="";
			divs[i].className="";
		}
		var j=this.getAttribute("dy");
		this.className="active";
		divs[j].className="active";
	}
}
var dianji1=document.getElementById("dianji1");
dianji1.click();