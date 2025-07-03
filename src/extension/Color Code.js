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
function ColorCode()
{
var RGBAtoHSLAFunction=(r,g,b,a)=>
{
var rv=Number(Number(r)/255);
var gv=Number(Number(g)/255);
var bv=Number(Number(b)/255);
var av=Number(a);
var max=Math.max(rv,gv,bv);
var min=Math.min(rv,gv,bv);
if(max==min)
{
var hv=Math.round(0/360*255);
}
else
{
if(max==rv && gv>=bv)
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+0)/360*255);
}
else
{
if(max==rv && gv<bv)
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+360)/360*255);
}
else
{
if(max==gv)
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+120)/360*255);
}
else
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+240)/360*255);
}
}
}
}
if(max==0)
{
var sv=0;
}
else
{
var sv=Math.round((1-(min/max))*255);
}
var lv=Math.round(0.5*(max+min)*255);
var hsla=
{
"h":hv,
"s":sv,
"l":lv,
"a":av
}
return hsla;
}
var RGBAtoHSVAFunction=(r,g,b,a)=>
{
var rv=Number(Number(r)/255);
var gv=Number(Number(g)/255);
var bv=Number(Number(b)/255);
var av=Number(a);
var max=Math.max(rv,gv,bv);
var min=Math.min(rv,gv,bv);
if(max==min)
{
var hv=Math.round(0/360*255);
}
else
{
if(max==rv && gv>=bv)
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+0)/360*255);
}
else
{
if(max==rv && gv<bv)
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+360)/360*255);
}
else
{
if(max==gv)
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+120)/360*255);
}
else
{
var hv=Math.round(Number(60*(gv-bv)/(max-min)+240)/360*255);
}
}
}
}
if(max==0)
{
var sv=0;
}
else
{
var sv=Math.round((1-(min/max))*255);
}
var vv=Math.round(max*255);
var hsva=
{
"h":hv,
"s":sv,
"v":vv,
"a":av
}
return hsva;
}
var RGBAtoHEXAFunction=(r,g,b,a)=>
{
var rv=Number(r);
var gv=Number(g);
var bv=Number(b);
var av=Number(a);
var th=String(rv.toString(16)).toUpperCase();
switch(Number(String(th).length))
{
case 1:
var hv=String('0'+''+th);
break;
default:
var hv=String(th);
break;
}
var te=String(gv.toString(16)).toUpperCase();
switch(Number(String(te).length))
{
case 1:
var ev=String('0'+''+te);
break;
default:
var ev=String(te);
break;
}
var tx=String(bv.toString(16)).toUpperCase();
switch(Number(String(tx).length))
{
case 1:
var xv=String('0'+''+tx);
break;
default:
var xv=String(tx);
break;
}
var ta=String(av.toString(16)).toUpperCase();
switch(Number(String(ta).length))
{
case 1:
var av=String('0'+''+ta);
break;
default:
var av=String(ta);
break;
}
var hexa=
{
"h":hv,
"e":ev,
"x":xv,
"a":av
}
return hexa;
}
var RGBAtoCMYKAFunction=(r,g,b,a)=>
{
var rv=Number(Number(r)/255);
var gv=Number(Number(g)/255);
var bv=Number(Number(b)/255);
var av=Number(Number(a)/255);
var max=Math.max(rv,gv,bv);
var kv=Math.round((1-max)*100);
var cv=Math.round(((1-rv-kv)/(1-kv))*100);
var mv=Math.round(((1-gv-kv)/(1-kv))*100);
var yv=Math.round(((1-bv-kv)/(1-kv))*100);
var av=Math.round(av*100);
var cmyka=
{
"c":cv,
"m":mv,
"y":yv,
"k":kv,
"a":av
}
return cmyka;
}
var HSLAtoRGBAFunction=(h,s,l,a)=>
{
var hv=Number(Number(h)/255);
var sv=Number(Number(s)/255);
var lv=Number(Number(l)/255);
var av=Number(a);
switch(sv)
{
case 0:
var rv=Number(sv*255);
var gv=Number(sv*255);
var bv=Number(sv*255);
break;
default:
if(lv<0.5)
{
var q=Number(lv*(1+sv));
}
else
{
var q=Number(lv+sv-(lv*sv));
}
var p=Number(2*lv-q);
var tr=Number(hv+(1/3));
if(tr<0)
{
var tr=Number(tr+1);
}
else
{
if(tr>1)
{
var tr=Number(tr-1);
}
else
{
var tr=Number(tr);
}
}
var tg=Number(hv);
if(tg<0)
{
var tg=Number(tg+1);
}
else
{
if(tg>1)
{
var tg=Number(tg-1);
}
else
{
var tg=Number(tg);
}
}
var tb=Number(hv-(1/3));
if(tb<0)
{
var tb=Number(tb+1)
}
else
{
if(tb>1)
{
var tb=Number(tb-1);
}
else
{
var tb=Number(tb);
}
}
if(tr<Number(1/6))
{
var rv=Math.round(p+((q-p)*6*tr));
}
else
{
if(tr>=Number(1/6) && tr<0.5)
{
var rv=Math.round(q);
}
else
{
if(tr>=0.5 && tr<Number(2/3))
{
var rv=Math.round(p+((q-p)*6*((2/3)-tr)));
}
else
{
var rv=Math.round(p);
}
}
}
if(tg<Number(1/6))
{
var gv=Math.round(p+((q-p)*6*tg));
}
else
{
if(tg>=Number(1/6) && tg<0.5)
{
var gv=Math.round(q);
}
else
{
if(tg>=0.5 && tg<Number(2/3))
{
var gv=Math.round(p+((q-p)*6*((2/3)-tg)));
}
else
{
var gv=Math.round(p);
}
}
}
if(tb<Number(1/6))
{
var bv=Math.round(p+((q-p)*6*tb));
}
else
{
if(tb>=Number(1/6) && tb<0.5)
{
var bv=Math.round(q);
}
else
{
if(tb>=0.5 && tb<Number(2/3))
{
var bv=Math.round(p+((q-p)*6*((2/3)-tb)));
}
else
{
var bv=Math.round(p);
}
}
}
var rv=Number(rv*255);
var gv=Number(gv*255);
var bv=Number(bv*255);
break;
}
var rgba=
{
"r":rv,
"g":gv,
"b":bv,
"a":av
}
return rgba;
}
var HSVAtoRGBAFunction=(h,s,v,a)=>
{
var hv=Number(Number(h)/255*360);
var sv=Number(Number(s)/255);
var vv=Number(Number(v)/255);
var av=Number(a);
var hi=Math.round(hv/60);
var f=Number(hv/60-hi);
var p=Math.round(vv*(1-sv));
var q=Math.round(vv*(1-f*sv));
var t=Math.round(vv*(1-(1-f)*sv));
switch(Number(hi))
{
case 0:
var rv=Number(vv*255);
var gv=Number(t*255);
var bv=Number(p*255);
break;
case 1:
var rv=Number(q*255);
var gv=Number(vv*255);
var bv=Number(p*255);
break;
case 2:
var rv=Number(p*255);
var gv=Number(vv*255);
var bv=Number(t*255);
break;
case 3:
var rv=Number(p*255);
var gv=Number(q*255);
var bv=Number(vv*255);
break;
case 4:
var rv=Number(t*255);
var gv=Number(p*255);
var bv=Number(vv*255);
break;
default:
var rv=Number(vv*255);
var gv=Number(p*255);
var bv=Number(q*255);
break;
}
var rgba=
{
"r":rv,
"g":gv,
"b":bv,
"a":av
}
return rgba;
}
var HEXAtoRGBAFunction=(h,e,x,a)=>
{
var hv=String('0x'+''+h);
var ev=String('0x'+''+e);
var xv=String('0x'+''+x);
var av=String('0x'+''+a);
var rv=Number(Number(hv).valueOf());
var gv=Number(Number(ev).valueOf());
var bv=Number(Number(xv).valueOf());
var av=Number(Number(av).valueOf());
var rgba=
{
"r":rv,
"g":gv,
"b":bv,
"a":av
}
return rgba;
}
var CMYKAtoRGBAFunction=(c,m,y,k,a)=>
{
var cv=Number(Number(c)/100);
var mv=Number(Number(m)/100);
var yv=Number(Number(y)/100);
var kv=Number(Number(k)/100);
var av=Number(Number(a)/100);
var rv=Math.round(((1-cv)*(1-kv))*255);
var gv=Math.round(((1-mv)*(1-kv))*255);
var bv=Math.round(((1-yv)*(1-kv))*255);
var av=Math.round(av*255);
var rgba=
{
"r":rv,
"g":gv,
"b":bv,
"a":av
}
return rgba;
}
Object.defineProperty(this,"name",createDescriptor("Color Code",true,true,true));
Object.defineProperty(this,"RGBAtoHSLA",createDescriptor(RGBAtoHSLAFunction,true,false,true));
Object.defineProperty(this,"RGBAtoHSVA",createDescriptor(RGBAtoHSVAFunction,true,false,true));
Object.defineProperty(this,"RGBAtoHEXA",createDescriptor(RGBAtoHEXAFunction,true,false,true));
Object.defineProperty(this,"RGBAtoCMYKA",createDescriptor(RGBAtoCMYKAFunction,true,false,true));
Object.defineProperty(this,"HSLAtoRGBA",createDescriptor(HSLAtoRGBAFunction,true,false,true));
Object.defineProperty(this,"HSVAtoRGBA",createDescriptor(HSVAtoRGBAFunction,true,false,true));
Object.defineProperty(this,"HEXAtoRGBA",createDescriptor(HEXAtoRGBAFunction,true,false,true));
Object.defineProperty(this,"CMYKAtoRGBA",createDescriptor(CMYKAtoRGBAFunction,true,false,true));
}
//function end