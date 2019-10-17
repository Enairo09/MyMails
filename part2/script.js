
var countMessage = document.getElementsByClassName('avatar').length;

document.getElementById('count').textContent = countMessage;

for (var i = 0 ; i<document.getElementsByClassName('trash').length ; i++){
  document.getElementsByClassName('trash').item(i).addEventListener("click", 
       function(){ 
        this.parentNode.remove();
        var countMessage = document.getElementsByClassName('avatar').length;
        document.getElementById('count').textContent = countMessage;
        }
  );
}

for (var i = 0 ; i<document.getElementsByClassName('row').length ; i++){
    document.getElementsByClassName('row').item(i).addEventListener("click", 
         function(){ 
          this.style.color = 'red';
          this.style.backgroundColor = 'yellow';
          }
    );
  }
// pour mettre en maj les noms en cliquant : 
// for (var i = 0 ; i<document.getElementsByTagName('h6').length ; i++){
//     document.getElementsByTagName('h6').item(i).addEventListener("click", 
//         function(){ 
//             var textUpper = this.textContent;
//             this.textContent = textUpper.toUpperCase();
//           }
//     );
//   }

// mettre le paragraphe en maj en cliquant sur le nom
for (var i = 0 ; i<document.getElementsByTagName('h6').length ; i++){
    document.getElementsByTagName('h6').item(i).addEventListener("click", 
        function(){ 
            // console.log(this.nextElementSibling.textContent);
            var textUpper = this.nextElementSibling.textContent;
            this.nextElementSibling.textContent = textUpper.toUpperCase();
            // this.textContent = textUpper.toUpperCase();
          }
    );
  }  
// // mettre les paragraphes en maj en cliquant sur le nom
// for (var i = 0 ; i<document.getElementsByTagName('h6').length ; i++){
//     document.getElementsByTagName('h6').item(i).addEventListener("click", 
//         function(){ 
//             for (var j = 0 ; j<this.nextElementSibling.length ; j++)
//             var textUpper = this.nextElementSibling.textContent;
//             this.nextElementSibling.textContent = textUpper.toUpperCase();
//           }
//     );
//   }  

// //compter le nombre de lettre par paragraphe
// for (var l = 0 ; l < document.getElementsByTagName('p').length ; l++) {
//     var textPara = document.getElementsByTagName('p')[l].textContent;
//     console.log(textPara.length);
// }

//compter le nombre de mots par paragraphe
for (var l = 0 ; l < document.getElementsByTagName('p').length ; l++) {
    var textPara = document.getElementsByTagName('p')[l].textContent;
    var text = textPara.split(' ');
   
    // console.log(text.length + text);
}

//compter le nombre de fois ou lorem libero et elit apparaissent
for (var l = 0 ; l < document.getElementsByTagName('p').length ; l++) {
    var textPara = document.getElementsByTagName('p')[l].textContent;
    var countLorem = textPara.split('lorem');
    console.log(countLorem.length);
    
    // if (text[l] === 'lorem'){
    //     countLorem = countLorem +1;
    //     console.log(countLorem);
    // }else if (text[l] === 'libero') {
    //     console.log(text[l]);
    // }else if (text[l] === 'elit'){
    //     console.log(text[l]);

    // }else{}
}


// //compter le nombre de fois ou lorem libero et elit apparaissent
// for (var l = 0 ; l < document.getElementsByTagName('p').length ; l++) {
//     var textPara = document.getElementsByTagName('p')[l].textContent;
//     var text = textPara.split(' ');
//     var countLorem = 0
//     if (text[l] === 'lorem'){
//         countLorem = countLorem +1;
//         console.log(countLorem);
//     }else if (text[l] === 'libero') {
//         console.log(text[l]);
//     }else if (text[l] === 'elit'){
//         console.log(text[l]);

//     }else{}
// }