function resetForm()
{
var label=document.querySelectorAll("#tool-3>form>label");
var input=document.querySelectorAll("input[type='text']");
var output=document.querySelectorAll("output");
for(var item1 of label)
{
item1.innerText=String("");
}
for(var item2 of input)
{
item2.value=String("");
}
for(var item3 of output)
{
item3.innerText=String("");
}
}
//function end
function resetSelector()
{
var controlItem=document.querySelectorAll("control-item");
var topItem=document.querySelectorAll("top-item");
for(var item1 of controlItem)
{
switch(Boolean(item1==controlItem[0]))
{
case false:
item1.setAttribute("select","normal");
break;
default:
item1.setAttribute("select","select");
break;
}
}
for(var item2 of topItem)
{
switch(Boolean(item2==topItem[0]))
{
case false:
item2.setAttribute("select","normal");
break;
default:
item2.setAttribute("select","select");
break;
}
}
}
//function end
function checkInput(inputList,maximum)
{
var maximumValue=Number(maximum);
for(var item of inputList)
{
var processValue=Number(parseInt(String(item),16));
var condition1=Boolean(Number.isInteger(Number(item))==true && Number(item)>=0 && Number(item)<=maximumValue);
var condition2=Boolean(Number.isInteger(Number(processValue))==true && Number(processValue)>=0 && Number(processValue)<=maximumValue);
if(condition1==true || condition2==true)
{
var checkResult=String("T");
}
else
{
var checkResult=String("F");
break;
}
}
var result=String(checkResult);
return result;
}
//function end
function colorCodeDispose(colorCodeData)
{
var values=Object.values(colorCodeData);
var valueList=String(values.toString());
var result=String("("+valueList+")");
return result;
}
//function end
function equipmentCheck()
{
var STE=document.querySelectorAll("[style-type]");
var userAgent=navigator.userAgent;
var mobileDetect=new MobileDetect(userAgent);
var mobile=mobileDetect.mobile();
if(mobile)
{
for(var item of STE)
{
item.setAttribute("style-type","B");
}
}
else
{
for(var item of STE)
{
item.setAttribute("style-type","A");
}
}
}
//function end
function eventFunction1()
{
var eventMethod1=()=>
{
var dialog=document.querySelectorAll("dialog");
var aside=document.querySelectorAll("aside");
var input=document.querySelectorAll("input[type='text']");
var index=Number(getElementIndex().method("a"));
switch(index)
{
case 0:
dialog[0].close();
dialog[1].show();
input[0].blur();
break;
case 1:
var cev=aside[1].children;
dialog[0].close();
dialog[2].show();
aside[1].scrollTop=Number(0);
cev[0].scrollLeft=Number(0);
input[1].blur();
break;
default:
var cev=aside[2].children;
dialog[0].close();
dialog[3].show();
cev[0].scrollLeft=Number(0);
input[2].blur();
input[3].blur();
input[4].blur();
break;
}
}
QS("a").eventQuery("click",eventMethod1);
}
//function end
function eventFunction2()
{
var eventMethod2=()=>
{
var controlItem=document.querySelectorAll("control-item");
var event=window.event;
var target=event.target;
var selectorCheck=String(target.getAttribute("select"));
switch(selectorCheck)
{
case "normal":
for(var item of controlItem)
{
switch(Boolean(item==target))
{
case false:
item.setAttribute("select","normal");
break;
default:
item.setAttribute("select","select");
break;
}
}
break;
default:
break;
}
}
QS("control-item").eventQuery("click",eventMethod2);
}
//function end
function eventFunction3()
{
var controlItem=document.querySelectorAll("control-item");
var eventMethod3=()=>
{
var controlItem=document.querySelector("control-item[select='select']");
var label=document.querySelectorAll("#tool-1>form>label");
var index=Number(getElementIndex().method("control-item",controlItem));
resetForm();
switch(index)
{
case 0:
label[0].innerText=String("Unicode");
label[1].innerText=String("字符转换结果");
break;
default:
label[0].innerText=String("字符");
label[1].innerText=String("Unicode转换结果");
break;
}
}
var mutationObserver1=new MutationObserver(eventMethod3);
var option1=
{
"attributeFilter":["select"]
}
for(var item of controlItem)
{
mutationObserver1.observe(item,option1);
}
}
//function end
function eventFunction4()
{
var eventMethod4=()=>
{
var controlItem=document.querySelector("control-item[select='select']");
var topItem=document.querySelector("top-item[select='select']");
var selectorInput=document.querySelectorAll("input[name='selector-input']");
var mainInput=document.querySelectorAll("input[name='main-input']");
var output=document.querySelectorAll("output");
var event=window.event;
var index=Number(getElementIndex().method("button[type='submit']"));
var executionType1=Number(getElementIndex().method("control-item",controlItem));
var executionType2=Number(getElementIndex().method("top-item",topItem));
var executionType3=Boolean(String(selectorInput[0].value)!="" && String(selectorInput[1])!="" && Number(selectorInput[0])!=Number(selectorInput[1]));
event.preventDefault();
switch(index)
{
case 0:
switch(executionType1)
{
case 0:
var inputValue1=Number(mainInput[index].value);
switch(Boolean(isNaN(inputValue1)==false && Number.isInteger(Number(inputValue1))==true && Number(inputValue1)>=1 && Number(inputValue1)<=134071))
{
case false:
mainInput[index].value=String("");
break;
default:
mainInput[index].value=String("");
output[0].innerText=String(String.fromCodePoint(Number(inputValue1)));
break;
}
break;
default:
var inputValue1=String(mainInput[index].value);
switch(Boolean(Number(inputValue1.length)==1))
{
case false:
mainInput[index].value=String("");
break;
default:
mainInput[index].value=String("");
output[0].innerText=Number(String(inputValue1).codePointAt(0));
break;
}
break;
}
break;
case 1:
var colorcode=new ColorCode();
var inputValue2=String(mainInput[index].value);
var processValue1=String(String(inputValue2).replaceAll("(",""));
var processValue2=String(String(processValue1).replaceAll(")",""));
var inputList=String(processValue2).split(",");
var valueCheck1=Number(String(inputValue2).indexOf("(",0));
var valueCheck2=Number(String(inputValue2).indexOf(")",0));
var valueCheck3=Number(String(inputValue2).indexOf(",",0));
var valueCheck4=Number(inputList.length);
switch(Boolean(valueCheck1!=-1 && valueCheck2!=-1 && valueCheck3!=-1))
{
case true:
switch(executionType2)
{
case 0:
var valueCheck5=String(checkInput(inputList,"255"));
switch(Boolean(valueCheck4==4 && String(valueCheck5)=="T"))
{
case true:
output[1].innerText=String(colorCodeDispose(colorcode.RGBAtoHSLA(inputList[0],inputList[1],inputList[2],inputList[3])));
output[2].innerText=String(colorCodeDispose(colorcode.RGBAtoHSVA(inputList[0],inputList[1],inputList[2],inputList[3])));
output[3].innerText=String(colorCodeDispose(colorcode.RGBAtoHEXA(inputList[0],inputList[1],inputList[2],inputList[3])));
output[4].innerText=String(colorCodeDispose(colorcode.RGBAtoCMYKA(inputList[0],inputList[1],inputList[2],inputList[3])));
break;
default:
mainInput[index].value=String("");
break;
}
break;
case 1:
var valueCheck5=String(checkInput(inputList,"255"));
switch(Boolean(valueCheck4==4 && String(valueCheck5)=="T"))
{
case true:
var rgba=colorcode.HSLAtoRGBA(inputList[0],inputList[1],inputList[2],inputList[3])
output[1].innerText=String(colorCodeDispose(rgba));
output[2].innerText=String(colorCodeDispose(colorcode.RGBAtoHSVA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[3].innerText=String(colorCodeDispose(colorcode.RGBAtoHEXA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[4].innerText=String(colorCodeDispose(colorcode.RGBAtoCMYKA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
break;
default:
mainInput[index].value=String("");
break;
}
break;
case 2:
var valueCheck5=String(checkInput(inputList,"255"));
switch(Boolean(valueCheck4==4 && String(valueCheck5)=="T"))
{
case true:
var rgba=colorcode.HSVAtoRGBA(inputList[0],inputList[1],inputList[2],inputList[3])
output[1].innerText=String(colorCodeDispose(rgba));
output[2].innerText=String(colorCodeDispose(colorcode.RGBAtoHSLA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[3].innerText=String(colorCodeDispose(colorcode.RGBAtoHEXA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[4].innerText=String(colorCodeDispose(colorcode.RGBAtoCMYKA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
break;
default:
mainInput[index].value=String("");
break;
}
break;
case 3:
var valueCheck5=String(checkInput(inputList,"255"));
switch(Boolean(valueCheck4==4 && String(valueCheck5)=="T"))
{
case true:
var rgba=colorcode.HEXAtoRGBA(inputList[0],inputList[1],inputList[2],inputList[3])
output[1].innerText=String(colorCodeDispose(rgba));
output[2].innerText=String(colorCodeDispose(colorcode.RGBAtoHSLA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[3].innerText=String(colorCodeDispose(colorcode.RGBAtoHSVA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[4].innerText=String(colorCodeDispose(colorcode.RGBAtoCMYKA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
break;
default:
mainInput[index].value=String("");
break;
}
break;
default:
var valueCheck5=String(checkInput(inputList,"100"));
switch(Boolean(valueCheck4==5 && String(valueCheck5)=="T"))
{
case true:
var rgba=colorcode.CMYKAtoRGBA(inputList[0],inputList[1],inputList[2],inputList[3],inputList[4])
output[1].innerText=String(colorCodeDispose(rgba));
output[2].innerText=String(colorCodeDispose(colorcode.RGBAtoHSLA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[3].innerText=String(colorCodeDispose(colorcode.RGBAtoHSVA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
output[4].innerText=String(colorCodeDispose(colorcode.RGBAtoHEXA(rgba["r"],rgba["g"],rgba["b"],rgba["a"])));
break;
default:
mainInput[index].value=String("");
break;
}
break;
}
break;
default:
mainInput[index].value=String("");
break;
}
break;
default:
var scale=new Scale();
var inputValue3=String(mainInput[2].value);
switch(Boolean(inputValue3!="" && executionType3==true))
{
case false:
mainInput[2].value=String("");
break;
default:
var sn1=Number(selectorInput[0].value);
var sn2=Number(selectorInput[1].value);
var dec=Number(scale.scaleSCA(inputValue3,sn1));
var sca=String(scale.scaleDEC(dec,sn2));
mainInput[2].value=String("");
output[5].innerText=String(sca);
break;
}
break;
}
}
QS("button[type='submit']").eventQuery("click",eventMethod4);
}
//function end
function eventFunction5()
{
var eventMethod5=()=>
{
var getTarget=(trigger)=>
{
var copyCode=String(trigger.getAttribute("copy-target"));
var targetSelector=String("output[copy-code='"+""+String(copyCode)+""+"']");
var copyTarget=document.querySelector(targetSelector);
var text=String(String(copyTarget.innerText).replaceAll("\n",""));
return text;
}
var errorMethod=()=>
{
console.log("Fail to copy!");
}
var clipboard=new ClipboardJS("button[type='button']",{text:getTarget});
clipboard.on("error",errorMethod);
}
QS("button[type='button']").eventQuery("click",eventMethod5);
}
//function end
function eventFunction6()
{
var eventMethod6=()=>
{
resetForm();
}
QS("button[type='reset']").eventQuery("click",eventMethod6);
}
//function end
function eventFunction7()
{
var eventMethod7=()=>
{
var dialog=document.querySelectorAll("dialog");
var index=Number(getElementIndex().method("i"));
resetForm();
resetSelector();
switch(index)
{
case 0:
dialog[1].close();
dialog[0].show();
break;
case 1:
dialog[2].close();
dialog[0].show();
break;
default:
dialog[3].close();
dialog[0].show();
break;
}
}
QS("i").eventQuery("click",eventMethod7);
}
//function end
function eventFunction8()
{
var eventMethod8=()=>
{
var topItem=document.querySelectorAll("top-item");
var event=window.event;
var target=event.target;
var selectorCheck=String(target.getAttribute("select"));
switch(selectorCheck)
{
case "normal":
for(var item of topItem)
{
switch(Boolean(item==target))
{
case false:
item.setAttribute("select","normal");
break;
default:
item.setAttribute("select","select");
break;
}
}
break;
default:
break;
}
}
QS("top-item").eventQuery("click",eventMethod8);
}
//function end
function eventFunction9()
{
var topItem=document.querySelectorAll("top-item");
var eventMethod9=()=>
{
var topItem=document.querySelector("top-item[select='select']");
var label=document.querySelectorAll("#tool-2>form>label");
var button=document.querySelectorAll("#tool-2>button[type='button']");
var index=Number(getElementIndex().method("top-item",topItem));
resetForm();
switch(index)
{
case 0:
label[0].innerText=String("RGBA");
label[1].innerText=String("HSLA结果");
label[2].innerText=String("HSVA结果");
label[3].innerText=String("HEXA结果");
label[4].innerText=String("CMYKA结果");
button[0].innerText=String("复制HSLA结果");
button[1].innerText=String("复制HSVA结果");
button[2].innerText=String("复制HEXA结果");
button[3].innerText=String("复制CMYKA结果");
break;
case 1:
label[0].innerText=String("HSLA");
label[1].innerText=String("RGBA结果");
label[2].innerText=String("HSVA结果");
label[3].innerText=String("HEXA结果");
label[4].innerText=String("CMYKA结果");
button[0].innerText=String("复制RGBA结果");
button[1].innerText=String("复制HSVA结果");
button[2].innerText=String("复制HEXA结果");
button[3].innerText=String("复制CMYKA结果");
break;
case 2:
label[0].innerText=String("HSVA");
label[1].innerText=String("RGBA结果");
label[2].innerText=String("HSLA结果");
label[3].innerText=String("HEXA结果");
label[4].innerText=String("CMYKA结果");
button[0].innerText=String("复制RGBA结果");
button[1].innerText=String("复制HSLA结果");
button[2].innerText=String("复制HEXA结果");
button[3].innerText=String("复制CMYKA结果");
break;
case 3:
label[0].innerText=String("HEXA");
label[1].innerText=String("RGBA结果");
label[2].innerText=String("HSLA结果");
label[3].innerText=String("HSVA结果");
label[4].innerText=String("CMYKA结果");
button[0].innerText=String("复制RGBA结果");
button[1].innerText=String("复制HSLA结果");
button[2].innerText=String("复制HSVA结果");
button[3].innerText=String("复制CMYKA结果");
break;
default:
label[0].innerText=String("CMYKA");
label[1].innerText=String("RGBA结果");
label[2].innerText=String("HSLA结果");
label[3].innerText=String("HSVA结果");
label[4].innerText=String("HEXA结果");
button[0].innerText=String("复制RGBA结果");
button[1].innerText=String("复制HSLA结果");
button[2].innerText=String("复制HSVA结果");
button[3].innerText=String("复制HEXA结果");
break;
}
}
var mutationObserver2=new MutationObserver(eventMethod9);
var option2=
{
"attributeFilter":["select"]
}
for(var item of topItem)
{
mutationObserver2.observe(item,option2);
}
}
//function end
function eventFunction10()
{
var eventMethod10=()=>
{
var selectorInput=document.querySelectorAll("input[name='selector-input']");
var label=document.querySelectorAll("#tool-3>form>label");
var index=Number(getElementIndex().method("input[name='selector-input']"));
var SIV=String(selectorInput[index].value);
switch(Boolean(SIV!=""))
{
case false:
label[index].innerText=String("");
break;
default:
break;
}
}
QS("input[name='selector-input']").eventQuery("input",eventMethod10);
}
//function end
function eventFunction11()
{
var eventMethod11=()=>
{
var selectorInput=document.querySelectorAll("input[name='selector-input']");
var label=document.querySelectorAll("#tool-3>form>label");
var index=Number(getElementIndex().method("input[name='selector-input']"));
var inputValue1=String(selectorInput[0].value);
var inputValue2=String(selectorInput[1].value);
var inputValue3=Number(selectorInput[0].value);
var inputValue4=Number(selectorInput[1].value);
var condition1=Boolean(inputValue1=="" && inputValue2=="");
var condition2=Boolean(inputValue1=="" || inputValue2=="");
var condition3=Boolean(isNaN(Number(inputValue3))==false && isNaN(Number(inputValue4))==false);
var condition4=Boolean(Number.isInteger(Number(inputValue4))==true && Number.isInteger(Number(inputValue4))==true);
var condition5=Boolean(Number(inputValue3)>=2 && Number(inputValue3)<=112 && Number(inputValue4)>=2 && Number(inputValue4)<=112);
var condition6=Boolean(Number(inputValue3)!=Number(inputValue4));
var processCondition1=Boolean(condition1==false && condition2==true);
var processCondition2=Boolean(condition3==true && condition4==true && condition5==true && condition6==true);
var finalCondition=Boolean(processCondition1==true || processCondition2==true);
switch(finalCondition)
{
case false:
selectorInput[index].value=String("");
break;
default:
switch(index)
{
case 0:
label[index].innerText=String(Number(inputValue1)+"进制值");
break;
default:
label[index].innerText=String(Number(inputValue2)+"进制结果");
break;
}
break;
}
}
QS("input[name='selector-input']").eventQuery("blur",eventMethod11);
}
//function end
function main()
{
equipmentCheck();
eventFunction1();
eventFunction2();
eventFunction3();
eventFunction4();
eventFunction5();
eventFunction6();
eventFunction7();
eventFunction8();
eventFunction9();
eventFunction10();
eventFunction11();
}
QS(window).eventQuery("DOMContentLoaded",main);