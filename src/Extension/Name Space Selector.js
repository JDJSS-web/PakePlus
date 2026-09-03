var NNS=(type,tag)=>
{
var nameSpace1=String("http://www.w3.org/1999/xhtml");
var nameSpace2=String("http://www.w3.org/2000/svg");
var nameSpace3=String("http://www.w3.org/1998/Math/MathML");
if(String(type)==String("XHTML"))
{
var selector=document.getElementsByTagNameNS(nameSpace1,String(tag));
return selector;
}
else if(String(type)==String("SVG"))
{
var selector=document.getElementsByTagNameNS(nameSpace2,String(tag));
return selector;
}
else if(String(type)==String("MathML"))
{
var selector=document.getElementsByTagNameNS(nameSpace3,String(tag));
return selector;
}
else
{
var selector=new Array();
return selector;
}
}