var $=(element)=>
{
var dragonQuery=new Object();
var createDescriptor=(propretyValue,propertyWritable,propertyEnumerable,propertyConfigurable)=>
{
var descriptor=
{
value:propretyValue,
writable:propertyWritable,
enumerable:propertyEnumerable,
configurable:propertyConfigurable
}
return descriptor;
}
//function end
var FRMethod=(object,name,fn)=>
{
var old=object[name];
var objectFunction=function(...args)
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
Object.defineProperty(object,name,createDescriptor(objectFunction,true,false,true));
}
//function end
var optionChecker=(option)=>
{
var valueList=Object.values(option);
var check=valueList.find((item)=>
{
return Array.isArray(item)==true;
});
if(Array.isArray(option)==false && check==undefined)
{
return true;
}
else
{
return false;
}
}
//function end
var classList=(method,classOption)=>
{
var methodValue=String(method);
if(Array.isArray(classOption)==true)
{
var ECL=element.classList;
if(methodValue==String("Check"))
{
var result=classOption.find((item)=>
{
return ECL.contains(item)==false;
});
if(result==undefined)
{
return true;
}
else
{
return false;
}
}
else if(methodValue==String("Add"))
{
classOption.map((item)=>
{
ECL.add(item);
});
}
else if(methodValue==String("Get"))
{
return ECL;
}
else if(methodValue==String("Replace"))
{
classOption.map((item)=>
{
ECL.replace(item["Old Class"],item["New Class"]);
});
}
else if(methodValue==String("Remove"))
{
classOption.map((item)=>
{
ECL.remove(item);
});
}
}
else
{
}
}
//function end
var attribute_1=(method,option)=>
{
var methodValue=String(method);
if(optionChecker(option)==true)
{
var keys=Object.keys(option);
if(methodValue==String("Set"))
{
keys.map((keyItem)=>
{
element.setAttribute(keyItem,option[keyItem]);
});
}
else if(methodValue==String("Get"))
{
var attributeOption=new Object();
keys.map((keyItem)=>
{
var attributeValue=String(element.getAttribute(keyItem));
Object.defineProperty(attributeOption,keyItem,createDescriptor(attributeValue,true,true,true));
});
return attributeOption;
}
else if(methodValue==String("Remove"))
{
keys.map((keyItem)=>
{
element.removeAttribute(keyItem);
});
}
}
else
{
}
}
//function end
var attribute_2=(method,nameSpace,option)=>
{
var methodValue=String(method);
if(optionChecker(option)==true)
{
var keys=Object.keys(option);
if(methodValue==String("Set"))
{
keys.map((keyItem)=>
{
element.setAttributeNS(nameSpace,keyItem,option[keyItem]);
});
}
else if(methodValue==String("Get"))
{
var attributeOption=new Object();
keys.map((keyItem)=>
{
var attributeValue=String(element.getAttributeNS(nameSpace,keyItem));
Object.defineProperty(attributeOption,keyItem,createDescriptor(attributeValue,true,true,true));
});
return attributeOption;
}
else if(methodValue==String("Remove"))
{
keys.map((keyItem)=>
{
element.removeAttributeNS(nameSpace,keyItem);
});
}
}
else
{
}
}
//function end
var css=(method,option)=>
{
var methodValue=String(method);
if(optionChecker(option)==true)
{
var keys=Object.keys(option);
if(methodValue==String("Set"))
{
keys.map((keyItem)=>
{
element.style.setProperty(keyItem,option[keyItem]);
});
}
else if(methodValue==String("Get"))
{
var propertyOption=new Object();
keys.map((keyItem)=>
{
var propertyValue=element.style.getPropertyValue(keyItem);
Object.defineProperty(propertyOption,keyItem,createDescriptor(propertyValue,true,true,true));
});
return propertyOption;
}
else if(methodValue==String("Remove"))
{
keys.map((keyItem)=>
{
element.style.removeProperty(keyItem);
});
}
}
else
{
}
}
Object.defineProperty(dragonQuery,"classList",createDescriptor(classList,true,false,true));
FRMethod(dragonQuery,"attribute",attribute_1);
FRMethod(dragonQuery,"attribute",attribute_2);
Object.defineProperty(dragonQuery,"css",createDescriptor(css,true,false,true));
return dragonQuery;
}