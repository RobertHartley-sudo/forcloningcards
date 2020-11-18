// @ts-check

var blackColor = function() {
    
    
        var x = document.getElementById('red');
        x.id = 'black';
        var x = document.getElementById('yellow');
        x.id = 'black';
        var x = document.getElementById('green');
        x.id = 'black';
        var x = document.getElementById('blue');
        x.id = 'black';
    
    
};

var multiColored = function() {
    location.reload();
};


var openFile = function(event) {

    var input = event.target;

    var reader = new FileReader();

reader.onload = function(){

    var str = "output";
    var stryellow = "yellow";
    var strgreen = "green";
    var strblue = "blue";

    for (var whichone = 0; whichone < 9; whichone++)
        {
        var res = str.concat(String(whichone));
        var resyellow = stryellow.concat(String(whichone));
        var resgreen = strgreen.concat(String(whichone));
        var resblue = strblue.concat(String(whichone));
        

        var bestoutput = document.getElementById(res);
        var bestoutputyellow = document.getElementById(resyellow);
        var bestoutputgreen = document.getElementById(resgreen);
        var bestoutputblue = document.getElementById(resblue);
        
        bestoutput.src = window.URL.createObjectURL(input.files[whichone]);
        bestoutputyellow.src = window.URL.createObjectURL(input.files[whichone]);
        bestoutputgreen.src = window.URL.createObjectURL(input.files[whichone]);
        bestoutputblue.src = window.URL.createObjectURL(input.files[whichone]);
    }    
};

reader.readAsDataURL(input.files[0]);

};

