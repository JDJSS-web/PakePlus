var nameSpace1=String("http://www.w3.org/2000/svg");
var nameSpace2=String("http://www.w3.org/1999/xlink");
//variable end
var fileOption1=
{
excludeAcceptAllOption:true,
multiple:false,
types:
[
{
description:"Datas",
accept:
{
"application/*":
[
".json",
".dson"
]
}
}
]
};
//variable end
var fileOption2=
{
excludeAcceptAllOption:true,
multiple:false,
types:
[
{
description:"Images",
accept:
{
"image/*":
[
".jpg",
".jpeg",
".png",
".bmp",
".webp"
]
}
}
]
};
//variable end
class Command_Box
{
constructor()
{
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
var EC=(element,selector)=>
{
if(element.matches)
{
var result=element.matches(selector);
return result;
}
else if(element.webkitMatchesSelector)
{
var result=element.webkitMatchesSelector(selector);
return result;
}
else if(element.mozMatchesSelector)
{
var result=element.mozMatchesSelector(selector);
return result;
}
else
{
var result=element.msMatchesSelector(selector);
return result;
}
}
var CNSE=(name)=>
{
var NSE=document.createElementNS(nameSpace1,name);
return NSE;
}
var fileSelector=(type)=>
{
var promise=new Promise(async (resolve,reject)=>
{
try
{
switch(type)
{
case "Data":
var handle=await showOpenFilePicker(fileOption1);
break;
case "Image":
var handle=await showOpenFilePicker(fileOption2);
break;
}
var file=await handle[0].getFile();
resolve(file);
}
catch
{
reject("您取消了文件选择或文件选择失败！");
}
finally
{
}
});
return promise;
}
var dataAcquirer=async (BOF)=>
{
var FRO=new File_Reader();
var content=await FRO["Read_As_Text"](BOF);
var data=JSON.parse(content);
return data;
}
var pathAcquirer=async (BOF)=>
{
var FRO=new File_Reader();
var path=await FRO["Read_As_Data_URL"](BOF);
return path;
}
var FLLC=(string)=>
{
var split=String(string).split("");
var disposal1=split.map((item,index)=>
{
if(index==0)
{
return String(item.toLowerCase());
}
else
{
return String(item);
}
});
var disposal2=String(disposal1.toString());
var result=String(disposal2.replaceAll(",",""));
return result;
}
var JTO=(jsonOption)=>
{
var keys=Object.keys(jsonOption);
var values=Object.values(jsonOption);
var length=Number(keys.length);
var option=new Object();
for(var i=0;i<=length-1;i=i+1)
{
Object.defineProperty(option,FLLC(keys[i]),createDescriptor(values[i],true,true,true));
}
return option;
}
var previewerSwitch_1=()=>
{
S("dialog#icon-previewer").showModal();
}
var previewerSwitch_2=()=>
{
S("dialog#icon-previewer").close();
}
var exporterSwitch_1=()=>
{
S("dialog#icon-exporter").showModal();
}
var exporterSwitch_2=()=>
{
S("dialog#icon-exporter").close();
}
var templateSetter=(id)=>
{
var content=S(`template#${id}`).content;
var clone=document.importNode(content,true);
S("dialog#icon-previewer").appendChild(clone);
}
var templateRemover=()=>
{
S("dialog#icon-previewer").innerHTML="";
}
var sizeSetter=(size)=>
{
var AO=
{
"width":size,
"height":size
};
$(NNS("SVG","svg")[0]).attribute("Set",AO);
}
var sizeRemover=()=>
{
var AO=
{
"width":"",
"height":""
};
$(NNS("SVG","svg")[0]).attribute("Remove",AO);
}
var patternImageSelector=async ()=>
{
var checker=EC(NNS("SVG","defs")[0],"defs:has(pattern)");
switch(Boolean(checker)==false)
{
case false:
var imageFile=await fileSelector("Image");
var imagePath=await pathAcquirer(imageFile);
var AO=
{
"xlink:href":String(imagePath)
};
$(S("pattern>image")).attribute("Set",nameSpace2,AO);
break;
default:
break;
}
}
var iconOptionSelector=async ()=>
{
var optionFile=await fileSelector("Data");
var optionData=await dataAcquirer(optionFile);
var DO=optionData["DEFS Option"];
var BFO=optionData["Background Figure Option"];
var BFN=String(BFO["Figure Name"]).toLowerCase();
var BFOO=BFO["Figure Option"];
var FO=optionData["Figure Option"];
var FN=String(FO["Figure Name"]).toLowerCase();
var FOO=FO["Figure Option"];
var checker1=EC(NNS("SVG","defs")[0],"defs:has(linearGradient#background-fill)");
var checker2=EC(NNS("SVG","defs")[0],"defs:has(linearGradient#figure-fill)");
var checker3=EC(NNS("SVG","defs")[0],"defs:has(pattern#background-fill)");
var checker4=DO.hasOwnProperty("Background Gradient Option");
var checker5=DO.hasOwnProperty("Figure Gradient Option");
var checker6=DO.hasOwnProperty("Pattern Option");
var checker7=DO.hasOwnProperty("Pattern Image Option");
if(checker1==true && checker4==true)
{
var BGO=DO["Background Gradient Option"];
var GO=BGO["Option"];
var AO1=JTO(GO);
var GCL=BGO["Color List"];
var GCLL=Number(GCL.length);
$(S("linearGradient#background-fill")).attribute("Set",AO1);
for(var i=1;i<=GCLL;i=i+1)
{
var stop=CNSE("stop");
var AO2=
{
"offset":Number(Number(1/GCLL).toFixed(2)),
"stop-color":String(GCL[i-1]),
"stop-opacity":"1"
};
$(stop).attribute("Set",AO2);
S("linearGradient#background-fill").appendChild(stop);
}
}
else if(checker2==true && checker5==true)
{
var FGO=DO["Figure Gradient Option"];
var GO=FGO["Option"];
var AO3=JTO(GO);
var GCL=FGO["Color List"];
var GCLL=Number(GCL.length);
$(S("linearGradient#figure-fill")).attribute("Set",AO3);
for(var i=1;i<=GCLL;i=i+1)
{
var stop=CNSE("stop");
var AO4=
{
"offset":Number(Number(1/GCLL).toFixed(2)),
"stop-color":String(GCL[i-1]),
"stop-opacity":"1"
};
$(stop).attribute("Set",AO4);
S("linearGradient#figure-fill").appendChild(stop);
}
}
else if(checker3==true && checker6==true && checker7==true)
{
var PO=DO["Pattern Option"];
var PIO=DO["Pattern Image Option"];
var AO5=JTO(PO);
var AO6=JTO(PIO);
$(NNS("SVG","pattern")[0]).attribute("Set",AO5);
$(S("pattern>image")).attribute("Set",AO6);
}
else
{
}
var BF=CNSE(BFN);
var F=CNSE(FN);
var AO7=JTO(BFOO);
var AO8=JTO(FOO);
$(BF).attribute("Set",AO7);
$(F).attribute("Set",AO8);
NNS("SVG","g")[0].appendChild(BF);
NNS("SVG","g")[1].appendChild(F);
}
var iconOptionRemover=()=>
{
NNS("SVG","g")[0].innerHTML="";
NNS("SVG","g")[1].innerHTML="";
}
var iconImageSelector=async ()=>
{
var checker=EC(NNS("SVG","g")[1],"g:has(image)");
switch(Boolean(checker)==false)
{
case false:
var imageFile=await fileSelector("Image");
var imagePath=await pathAcquirer(imageFile);
var AO=
{
"xlink:href":String(imagePath)
};
$(S("g>image")).attribute("Set",nameSpace2,AO);
break;
default:
break;
}
}
var figureScalingSetter=(scaling)=>
{
var AO=
{
"transform":String(`scale(${scaling},${scaling})`)
};
$(NNS("SVG","g")[1]).attribute("Set",AO);
}
var iconExporter=()=>
{
var iconCode=String(S("dialog#icon-previewer").innerHTML);
var iconDisposal1=String(iconCode.replaceAll("\n",""));
var iconDisposal2=String(iconDisposal1.replaceAll(">",">\n"));
var iconContent=String(iconDisposal2.replaceAll("svg>\n","svg>"));
var iconFile=new File([iconContent],"Icon.svg",{type:"image/svg+xml"});
var iconPath=String(BPAcquirer(iconFile));
var AO1=
{
"href":iconPath,
"download":"Icon.svg"
};
var AO2=
{
"condition":"enabled"
};
$(S("a#icon-exporting")).attribute("Set",AO1);
$(S("embed[situation='icon-exporting']")).attribute("Set",AO2);
}
var systemResetter=()=>
{
var AO1=
{
"href":"",
"download":""
};
var AO2=
{
"condition":"disabled"
};
$(S("a#icon-exporting")).attribute("Remove",AO1);
S("dialog#icon-previewer").innerHTML="";
$(S("embed[situation='icon-exporting']")).attribute("Set",AO2);
}
var propertyList=
{
"Open Previewer":createDescriptor(previewerSwitch_1,true,false,true),
"Close Previewer":createDescriptor(previewerSwitch_2,true,false,true),
"Open Exporter":createDescriptor(exporterSwitch_1,true,false,true),
"Close Exporter":createDescriptor(exporterSwitch_2,true,false,true),
"Set Template":createDescriptor(templateSetter,true,false,true),
"Remove Template":createDescriptor(templateRemover,true,false,true),
"Set Size":createDescriptor(sizeSetter,true,false,true),
"Remove Size":createDescriptor(sizeRemover,true,false,true),
"Select Pattern Image":createDescriptor(patternImageSelector,true,false,true),
"Select Icon Option":createDescriptor(iconOptionSelector,true,false,true),
"Remove Icon Option":createDescriptor(iconOptionRemover,true,false,true),
"Select Icon Image":createDescriptor(iconImageSelector,true,false,true),
"Set Figure Scaling":createDescriptor(figureScalingSetter,true,false,true),
"Export Icon":createDescriptor(iconExporter,true,false,true),
"Reset System":createDescriptor(systemResetter,true,false,true)
};
Object.defineProperty(this,"name",createDescriptor("Command Box",true,true,true));
Object.defineProperties(this,propertyList);
}
}