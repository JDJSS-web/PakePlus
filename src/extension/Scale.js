function createDescriptor(propretyValue,propertyWritable,propertyEnumerable,propertyConfigurable)
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
function Scale()
{
var box=
[
"48",
"49",
"50",
"51",
"52",
"53",
"54",
"55",
"56",
"57",
"65",
"66",
"67",
"68",
"69",
"70",
"71",
"72",
"73",
"74",
"75",
"76",
"77",
"78",
"79",
"80",
"81",
"82",
"83",
"84",
"85",
"86",
"87",
"88",
"89",
"90",
"97",
"98",
"99",
"100",
"101",
"102",
"103",
"104",
"105",
"106",
"107",
"108",
"109",
"110",
"111",
"112",
"113",
"114",
"115",
"116",
"117",
"118",
"119",
"120",
"121",
"122",
"915",
"916",
"923",
"928",
"931",
"937",
"945",
"946",
"947",
"948",
"950",
"952",
"955",
"958",
"960",
"963",
"966",
"968",
"33",
"34",
"35",
"36",
"37",
"38",
"39",
"40",
"41",
"42",
"43",
"44",
"45",
"46",
"47",
"58",
"59",
"60",
"61",
"62",
"63",
"64",
"91",
"92",
"93",
"94",
"95",
"96",
"123",
"124",
"125",
"126"
]
var scaleDECFunction=(dec,sn)=>
{
var scaleList=new Array();
var value1=Number(dec);
var value2=Number(sn);
var value3=Number(value1);
var targetValue=Number(-1);
do
{
var modValue=Number(value3%value2);
var targetValue=Number((value3-modValue)/value2);
var value3=Number(targetValue);
scaleList.push(String.fromCodePoint(Number(box[modValue])));
}
while(targetValue!=0)
var scaleValue1=scaleList.reverse();
var scaleValue2=String(scaleValue1.toString());
var scaleValue3=String(String(scaleValue2).replaceAll(",",""));
var result=String(scaleValue3);
return result;
}
var scaleSCAFunction=(sca,sn)=>
{
var value1=String(sca);
var value2=Number(sn);
var value3=String(value1).split("");
var value4=value3.reverse();
var targetValue=Number(0);
for(var si=0;si<=value4.length-1;si=si+1)
{
var targetValue=Number(Number(targetValue)+Number(value4[si])*Math.pow(value2,Number(si)));
}
var result=Number(targetValue);
return result;
}
Object.defineProperty(this,"name",createDescriptor("Scale",true,true,true));
Object.defineProperty(this,"scaleDEC",createDescriptor(scaleDECFunction,true,false,true));
Object.defineProperty(this,"scaleSCA",createDescriptor(scaleSCAFunction,true,false,true));
}
//function end