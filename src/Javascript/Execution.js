/*Variable Area*/
/*Process Area*/
var sizeSetter=()=>
{
S("embed","list").forEach((item)=>
{
var DPR=Number(devicePixelRatio);
var computedStyle=window.getComputedStyle(item);
var computedWidth=String(computedStyle.width);
var computedHeight=String(computedStyle.height);
switch(Boolean(computedWidth==String("auto")))
{
case false:
var computedSize=Number(computedWidth.replaceAll("px",""));
break;
default:
var computedSize=Number(computedHeight.replaceAll("px",""));
break;
}
var attributeSize=Number(computedSize*DPR);
var attributeOption=
{
"width":attributeSize,
"height":attributeSize
};
$(item).attribute("Set",attributeOption);
});
}
//function end
/*Observer Area*/
/*Event Area*/
var main=()=>
{
sizeSetter();
}
//function end
var resize=()=>
{
sizeSetter();
}
//function end
var keyController=()=>
{
var target=event.target;
var TTC=String(target.tagName);
var TTN=String(TTC.toLowerCase());
var key=String(event.key);
switch(Boolean(TTN==String("textarea")))
{
case false:
if(key==String("e"))
{
var checker=S("dialog#command-area").hasAttribute("open");
switch(checker)
{
case false:
S("dialog#command-area").showModal();
S("textarea").blur();
break;
default:
S("dialog#command-area").close();
break;
}
}
else if(key==String("Control"))
{
var checker=S("dialog#command-area").hasAttribute("open");
switch(Boolean(checker==false))
{
case false:
S("textarea").focus();
break;
default:
break;
}
}
else
{
}
break;
default:
break;
}
}
//function end
var commandProcessor=async ()=>
{
var target=event.currentTarget;
var targetValue=String(target.value);
var key=String(event.key);
var CB=new Command_Box();
var regexp1=new RegExp("^[0-9A-z\\u0020]+[0-9A-z]$|^[0-9A-z\\u0020]+\\u0020\\u0024.*?\\u0024$","g");
var regexp2=new RegExp("[0-9A-z\\u0020]+[0-9A-z]|[0-9A-z\\u0020]+(?=\\u0020\\u0024)","g");
var regexp3=new RegExp("(?<=\\u0024).*?(?=\\u0024)","g");
switch(key)
{
case "Enter":
event.preventDefault();
if(regexp1.test(targetValue)==true)
{
var functionBody=String(targetValue.match(regexp2)[0]);
var argumentMatcher=targetValue.match(regexp3);
var checker1=CB.hasOwnProperty(functionBody);
switch(Boolean(checker1==false))
{
case false:
var checker2=String(CB[functionBody].constructor.name);
if(checker2.includes("Function")!=false)
{
switch(Boolean(argumentMatcher!=null))
{
case false:
await CB[functionBody]();
break;
default:
var argumentList=String(argumentMatcher[0]);
await eval(`CB["${functionBody}"](${argumentList})`);
break;
}
}
else
{
}
break;
default:
break;
}
}
else
{
}
target.blur();
target.value=String("");
break;
case "Control":
target.blur();
break;
default:
break;
}
}
//function end
var iconExporting=()=>
{
S("a#icon-exporting").click();
}
//function end