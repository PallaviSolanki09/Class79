name_of_std=[];
function submit(){
    var name_1=document.getElementById("std_1").value;
    var name_2=document.getElementById("std_2").value;
    var name_3=document.getElementById("std_3").value;
    var name_4=document.getElementById("std_4").value;
    name_of_std.push(name_1,name_2,name_3,name_4);
    console.log(name_of_std);
    document.getElementById("display_std").innerHTML=name_of_std;
    document.getElementById("submit_std").style.display="none";
    document.getElementById("sort_std").style.display="inline-block";
}
function sort(){
    name_of_std.sort();
    console.log(name_of_std);
    document.getElementById("display_std").innerHTML=name_of_std;
}
