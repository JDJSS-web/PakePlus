class File_Reader
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
var Read_As_Array_Buffer=(file)=>
{
var promise=new Promise((resolve,reject)=>
{
var FRO=new FileReader();
FRO.readAsArrayBuffer(file);
FRO.onload=()=>
{
resolve(FRO.result);
}
FRO.onerror=()=>
{
reject(String("文件读取失败�?"));
}
});
return promise;
}
var Read_As_Data_URL=(file)=>
{
var promise=new Promise((resolve,reject)=>
{
var FRO=new FileReader();
FRO.readAsDataURL(file);
FRO.onload=()=>
{
resolve(FRO.result);
}
FRO.onerror=()=>
{
reject(String("文件读取失败�?"));
}
});
return promise;
}
var Read_As_Text_1=(file)=>
{
var promise=new Promise((resolve,reject)=>
{
var FRO=new FileReader();
FRO.readAsText(file);
FRO.onload=()=>
{
resolve(FRO.result);
}
FRO.onerror=()=>
{
reject(String("文件读取失败�?"));
}
});
return promise;
}
var Read_As_Text_2=(file,encoding)=>
{
var promise=new Promise((resolve,reject)=>
{
var FRO=new FileReader();
FRO.readAsText(file,encoding);
FRO.onload=()=>
{
resolve(FRO.result);
}
FRO.onerror=()=>
{
reject(String("文件读取失败�?"));
}
});
return promise;
}
Object.defineProperty(this,"name",createDescriptor("File Reader",true,true,true));
Object.defineProperty(this,"Read_As_Array_Buffer",createDescriptor(Read_As_Array_Buffer,true,false,true));
Object.defineProperty(this,"Read_As_Data_URL",createDescriptor(Read_As_Data_URL,true,false,true));
FRMethod(this,"Read_As_Text",Read_As_Text_1);
FRMethod(this,"Read_As_Text",Read_As_Text_2);
}
}