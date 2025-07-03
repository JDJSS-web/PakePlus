function CS(argument)
{
var argumentCheck=argument instanceof(HTMLElement);
if(argument==window || argument==document || argumentCheck==true)
{
var outputValue=argument;
}
else
{
var elements=document.querySelectorAll(argument);
var outputValue=elements;
}
var eco=new Object(outputValue);
eco.eventCancel=function(eventName,eventFunction)
{
var valueCheck=this instanceof(HTMLElement);
if(this==window || this==document || valueCheck==true)
{
this.removeEventListener(eventName,eventFunction,{passive:false});
}
else
{
for(var item of this)
{
item.removeEventListener(eventName,eventFunction,{passive:false});
}
}
}
return eco;
}