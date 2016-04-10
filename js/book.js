// function populate(s1,s2){
// var s1 = document.getElementById(s1);
// var s2 = document.getElementById(s2);
// s2.innerHTML="";

// if(s1.value == "Pediatrics"){
// var optionArray=["|","dr.John|Dr.John","dr.Philip"|Dr.Philip","dr.Thompson|Dr.Thompson"];
// }
// if(s1.value == "Dermatology"){
// var optionArray=["|","dr.Tom|Dr.Tom","dr.Davis"|Dr.Davis","dr.Phil|Dr.Phil","dr.Raj|Dr.Raj"];
// }
// if(s1.value == "Cardiology"){
// var optionArray=["|","dr.Karen|Dr.Karen","dr.Thomas"|Dr.Thomas"];
// }


// for(var option in optionArray){
// var pair=optionArray[option].split("|");
// var newOption = document.createElement("option");
// newOPtion.value=pair[0];
// newOption.innerHTML = pair[1];
// s2.options.add(newOption);
// }
// }


function populate(s1,s2){
var s1 = document.getElementById(s1);
var s2 = document.getElementById(s2);
s2.innerHTML="";

if(s1.value == "Pediatrics"){
var optionArray=["|","dr.John|Dr.John","dr.Philip|Dr.Philip","dr.Thompson|Dr.Thompson"];
}
if(s1.value == "Dermatology"){
var optionArray=["|","dr.Tom|Dr.Tom","dr.Davis|Dr.Davis","dr.Phil|Dr.Phil","dr.Raj|Dr.Raj"];
}
if(s1.value == "Cardiology"){
var optionArray=["|","dr.Karen|Dr.Karen","dr.Thomas|Dr.Thomas"];
}

for(var option in optionArray){
var pair=optionArray[option].split("|");
var newOption = document.createElement("option");
newOption.value=pair[0];
newOption.innerHTML = pair[1];
s2.options.add(newOption);
}
}


function populate2(s1,s2){
var s1 = document.getElementById(s1);
var s2 = document.getElementById(s2);
s2.innerHTML="";

if(s1.value == "dr.John"){
var optionArray=["|","monday|Monday","wednesday|Wednesday","friday|Friday"];
}
if(s1.value == "dr.Philip"){
var optionArray=["|","wednesday|Wednesday","thursday|Thursday","friday|Friday"];
}
if(s1.value == "dr.Thompson"){
var optionArray=["|","sunday|Sunday"];
}

if(s1.value == "dr.Tom"){
var optionArray=["|","monday|Monday","tuesday|Tuesday","wednesday|Wednesday"];
}
if(s1.value == "dr.Davis"){
var optionArray=["|","tuesday|Tuesday","wednesday|Wednesday","thursday|Thursday","friday|Friday"];
}
if(s1.value == "dr.Phil"){
var optionArray=["|","saturday|Saturday","sunday|Sunday"];
}

if(s1.value == "dr.Raj"){
var optionArray=["|","wednesday|Wednesday"];
}
if(s1.value == "dr.Karen"){
var optionArray=["|","wednesday|Wednesday","thursday|Thursday"];
}
if(s1.value == "dr.Thomas"){
var optionArray=["|","thursday|Thursday","friday|Friday"];
}

for(var option in optionArray){
var pair=optionArray[option].split("|");
var newOption = document.createElement("option");
newOption.value=pair[0];
newOption.innerHTML = pair[1];
s2.options.add(newOption);
}
}

function populate3(s1,s2){
var s1 = document.getElementById(s1);
var s2 = document.getElementById(s2);
s2.innerHTML="";

if(s1.value == "dr.John"){
var optionArray=["|","5-5:30p.m|5-5:30p.m","5:30-6p.m|5:30-6p.m","6-6:30p.m|6-6:30p.m","6:30-7p.m|6:30-7p.m","7-7:30p.m|7-7:30p.m","7:30-8p.m|7:30-8p.m"];
}
if(s1.value == "dr.Philip"){
var optionArray=["|","5-5:30p.m|5-5:30p.m","5:30-6p.m|5:30-6p.m","6-6:30p.m|6-6:30p.m","6:30-7p.m|6:30-7p.m"];
}
if(s1.value == "dr.Thompson"){
var optionArray=["|","10-10:30a.m|10-10:30a.m","10:30-11a.m|10:30-11a.m","11-11:30a.m|11-11:30a.m","11:30a.m-12p.m|11:30a.m-12p.m"];
}

if(s1.value == "dr.Tom"){
var optionArray=["|","2-2:30p.m|2-2:30p.m","2:30-3p.m|2:30-3p.m","3-3:30p.m|3-3:30p.m"];
}
if(s1.value == "dr.Davis"){
var optionArray=["|","5-5:30p.m|5-5:30p.m","5:30-6p.m|5:30-6p.m","6-6:30p.m|6-6:30p.m","6:30-7p.m|6:30-7p.m","7-7:30p.m|7-7:30p.m","7:30-8p.m|7:30-8p.m"];
}
if(s1.value == "dr.Phil"){
var optionArray=["|","10-10:30a.m|10-10:30a.m","10:30-11a.m|10:30-11a.m","11-11:30a.m|11-11:30a.m","11:30a.m-12p.m|11:30a.m-12p.m","12p.m-12:30p.m|12p.m-12:30p.m"];
}

if(s1.value == "dr.Raj"){
var optionArray=["|","6-6:30p.m|6-6:30p.m","6:30-7p.m|6:30-7p.m"];
}
if(s1.value == "dr.Karen"){
var optionArray=["|","10-10:30a.m|10-10:30a.m","10:30-11a.m|10:30-11a.m"];
}
if(s1.value == "dr.Thomas"){
var optionArray=["|","2-2:30p.m|2-2:30p.m","2:30-3p.m|2:30-3p.m","3-3:30p.m|3-3:30p.m","3:30-4p.m|3:30-4p.m"];
}

for(var option in optionArray){
var pair=optionArray[option].split("|");
var newOption = document.createElement("option");
newOption.value=pair[0];
newOption.innerHTML = pair[1];
s2.options.add(newOption);
}

}
