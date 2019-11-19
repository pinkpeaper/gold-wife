var baseleft=document.getElementsByClassName("baseleft")[0];
var uls=baseleft.getElementsByTagName("ul");
var daohanglans=document.getElementsByClassName("daohang right clearfix")[0];
var daohanglis=daohanglans.children;
var daohanglisa3=daohanglis[2].children[0];
var daohanglisa4=daohanglis[3].children[0];
var baserights=document.getElementsByClassName("baseright")[0].children;
for(var i=0;i<uls.length;i++)
{
	var lifirst=uls[i].children[0];
	lifirst.onclick=function()
	{   var span=this.children[0];
		var spanV=span.innerHTML;
		console.log(spanV);
		var otherlis=this.parentNode.children;
		for(var j=1;j<otherlis.length;j++)
		{
			otherlis[j].onclick=function()
			{
				var dyV=this.getAttribute("dy");
				for(var bases=0;bases<baserights.length;bases++)
				{
					baserights[bases].className="";
				}
				baserights[dyV].className="active";
				daohanglisa3.innerHTML=">"+" "+this.parentNode.children[0].innerText.split("-")[0];
				daohanglisa4.innerHTML=">"+" "+this.innerHTML;
			}
		}
		if(spanV=="+")
		{
			for(var j=1;j<otherlis.length;j++)
			{
				otherlis[j].className="active";
			}
			span.innerHTML="-";
		}
		else
		{
			for(var j=1;j<otherlis.length;j++)
			{
				otherlis[j].className="";
			}
			span.innerHTML="+";
		}
		
	}
}
var dianji1=document.getElementById("dianji1");
dianji1.click();
var dianji2=document.getElementById("dianji2");
dianji2.click();