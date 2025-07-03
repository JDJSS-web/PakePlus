function QS(argument)
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
var eqo=new Object(outputValue);
eqo.eventQuery=function(eventName,eventFunction)
{
var valueCheck=this instanceof(HTMLElement);
if(this==window || this==document || valueCheck==true)
{
this.addEventListener(eventName,eventFunction,{passive:false});
}
else
{
for(var item of this)
{
item.addEventListener(eventName,eventFunction,{passive:false});
}
}
}
return eqo;
}