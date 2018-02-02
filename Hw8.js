
function slotRoll(){

var i = 0;
    for (i = 0; i < 10; i++) {  
        
    var numGen = Math.floor(Math.random() * 10);
        
    var left = document.getElementById('one');
    var middle = document.getElementById('two');
    var right = document.getElementById('three');
         
        if (numGen == 0 || numGen > 3) {
        continue;
    }

    else if (numGen == 1) {
            
       left.className = 'green';
      
    }

    else if (numGen == 2) {

       left.className = 'blue';
        
    }

    else if (numGen == 3) {

        left.className = 'red';
        
    }
            
          var numgen2 = Math.floor(Math.random() * 10);
          if (numgen2 == 0 || numgen2 > 3) {
        continue;
    }

    else if (numgen2 == 1) {
        
       middle.className = 'green';
      
    }

    else if (numgen2 == 2) {

       middle.className = 'blue';
        
    }

    else if (numgen2 == 3) {

        middle.className = 'red';
        
    }
       
        var numgen3 = Math.floor(Math.random() * 10);
          if (numgen3 == 0 || numgen3 > 3) {
        continue;
    }

    else if (numgen3 == 1) {
        
       right.className = 'green';
      
    }

    else if (numgen3 == 2) {

       right.className = 'blue';
        
    }

    else if (numgen3 == 3) {

        right.className = 'red';
        
        }
        
    }



if (left.className == middle.className && middle.className == right.className ) {
            document.getElementById('winner').innerHTML = "WINNER";
        }
        
        else {
            document.getElementById('winner').innerHTML = "LOSER";
        }
    
}
