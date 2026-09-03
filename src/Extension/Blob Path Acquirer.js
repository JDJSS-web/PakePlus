var BPAcquirer=(BOF)=>
{
if(window.URL)
{
var UO=window.URL;
}
else if(window.webkitURL)
{
var UO=window.webkitURL;
}
else if(window.mozURL)
{
var UO=window.mozURL;
}
else
{
var UO=window.msURL;
}
var BP=String(UO.createObjectURL(BOF));
return BP;
}