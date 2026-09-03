var S=(selector,option="")=>
{
var selectorCheck=Boolean(selector instanceof(HTMLElement));
if(selector==window || selector==document || selectorCheck==true)
{
return selector;
}
else
{
var elements=document.querySelectorAll(selector);
var elementLength=Number(elements.length);
if(String(option)==String(""))
{
if(elementLength==1)
{
return elements[0];
}
else
{
return elements;
}
}
else if(String(option)==String("list"))
{
return elements;
}
}
}