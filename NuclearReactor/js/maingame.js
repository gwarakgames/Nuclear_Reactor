function view(panel) {
    if (panel == 0) {
        console.log("Viewing Nuclear Island");
        document.getElementById("tTurbineIsland").style.display = "none";
        document.getElementById("tNuclearIsland").style.display = "table";
    }
    if (panel == 1) {
        console.log("Viewing Turbine Island");
        document.getElementById("tNuclearIsland").style.display = "none";
        document.getElementById("tTurbineIsland").style.display = "table";
    }
}

function rods(value) {
    var slider = document.getElementById("rods");
    var meter = document.getElementById("stat_ni_rods");
    var rods = document.getElementById("img_rods");
    mx_rods = slider.value;
    meter.innerHTML = (rod_step / mx_rods).toFixed(2);
    rod_img_pos = "-" + (mx_rods * 200) + "px 0px";
    rods.style.objectPosition = rod_img_pos;
}

//Initial Values
var reactorTemp = 0;
var mx_rods = 1;
var rod_step = 100;

setInterval(function() { 

    if (reactorTemp < 1500) {
        reactorTemp = reactorTemp + (1 * mx_rods);
        document.getElementById("stat_ni_inlet").innerHTML = reactorTemp; 
    }

    if (reactorTemp >= 1500) {
        document.getElementById("stat_ni_inlet").style.backgroundColor = "Red";
    }
    
}, 1000);