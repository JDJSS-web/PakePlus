function getElementIndex()
{
var FRMethod=function(object,name,fn)
{
var old=object[name];
object[name]=function(...args)
{
if(args.length===fn.length)
{
return fn.apply(this,args);
}
else if(typeof(old)==="function")
{
return old.apply(this,args);
}
}
}
var eco=new Object();
eco.name=String("获取元素下标");
FRMethod(eco,"method",function(elementtag)
{
var elements=document.querySelectorAll(elementtag);
var event=window.event;
var element=event.target;
var elementarray=Array.from(elements);
var fc1=function(item)
{
return item==this;
}
var index=Number(elementarray.findIndex(fc1,element));
return index;
});
FRMethod(eco,"method",function(elementtag,targetelement)
{
var elements=document.querySelectorAll(elementtag);
var element=targetelement;
var elementarray=Array.from(elements);
var fc2=function(item)
{
return item==this;
}
var index=Number(elementarray.findIndex(fc2,element));
return index;
});
return eco;
}