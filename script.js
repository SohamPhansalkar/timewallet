console.log("JS file loaded...")
const fs = new FileReader

t = 0;
document.getElementById("time").innerHTML = t;

//console.log(fs.readAsText(time.txt));

pass_is = "pypthon.js"

function conpass(){
    let timenow = parseInt(document.getElementById("time").value);
    if (document.getElementById("mainpass").value === "python.js"){
        if(document.getElementById("r1").value == 0){
            document.getElementById("time").innerHTML = t + 15;
            t = t+15;
            document.getElementById("mainpass").innerHTML = "****"
        }else{
            document.getElementById("time").innerHTML = t + 60;
            t = t+60;
        }
    }else{
        document.getElementById("myalert").style.color = "red"
    }
}

function re15(){
    t = t - 15;
    document.getElementById("time").innerHTML = t;

}

function re60(){
    t = t - 60;
    document.getElementById("time").innerHTML = t;

}