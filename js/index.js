var div_imgs=document.getElementsByClassName("div_imgs")[0];
var imgs=div_imgs.children;
var btns=document.getElementsByTagName("button");
var banner=document.getElementsByClassName("banner")[0];
var lis=banner.getElementsByTagName("li");
var j=0;
//点击按钮
for(var i=0;i<btns.length;i++)
{
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;")
		{
			j++;
			if(j==3)
			{
				j=0;
			}
			for(var i=0;i<imgs.length;i++)
			{
				imgs[i].className="";
				lis[i].className="";
			}
			imgs[j].className="active";
			lis[j].className="active";
			
		}
		else
		{
			j--;
			if(j==-1)
			{
				j=2;
			}
			for(var i=0;i<imgs.length;i++)
			{
				imgs[i].className="";
				lis[i].className="";
			}
			imgs[j].className="active";
			lis[j].className="active";
		}
	}
}
//点击下面的点
for(var i=0;i<lis.length;i++)
{
	lis[i].onclick=function(){
		j=this.getAttribute("dy");
		for(var i=0;i<lis.length;i++)
		{
			lis[i].className="";
			imgs[i].className="";
		}
		this.className="active";
		imgs[j].className="active";
	}
}
//轮播图定时器
var bannertimes=setInterval(function(){
	j++;
	if(j==3)
	{
		j=0;
	}
	for(var i=0;i<imgs.length;i++)
	{
		imgs[i].className="";
		lis[i].className="";
	}
	imgs[j].className="active";
	lis[j].className="active";
},2000);
//鼠标移入暂停
banner.onmouseover=function(){
	clearInterval(bannertimes);
	bannertimes=null;
}
//鼠标移出继续
banner.onmouseout=function(){
	bannertimes=setInterval(function(){
	j++;
	if(j==3)
	{
		j=0;
	}
	for(var i=0;i<imgs.length;i++)
	{
		imgs[i].className="";
		lis[i].className="";
	}
	imgs[j].className="active";
	lis[j].className="active";
},2000);
};
