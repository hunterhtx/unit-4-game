$(function(){var characterFactoryProducts = []
    
var CharacterFactory = function(nameParam, imageParam, healthParam,
counterAttackParam, attackPowerParam) {

  var brandNewCharacter = {}
   brandNewCharacter.name = nameParam;
   brandNewCharacter.image = imageParam;
   brandNewCharacter.health = healthParam;
   brandNewCharacter.counterAttack = counterAttackParam;
   brandNewCharacter.attackPower = attackPowerParam;
   brandNewCharacter.AI = false; 

   
   brandNewCharacter.imgClick =  function (){
        // listen for when img is clicked
    }
   brandNewCharacter.moveImg =  function (){
        // moves img
    }
   brandNewCharacter.loseHP =  function(){
        // makes hp go down
    }
   brandNewCharacter.attack =  function (){
        // does the math between attackPower and counter attack
    }
   brandNewCharacter.increaseAttackPower = function (){
        
    }
    characterFactoryProducts.push(brandNewCharacter)
    //our character is now ready to be delivered
    return brandNewCharacter
}

    var o = CharacterFactory('Obi Won Kanobi', 'https://i.imgur.com/TJW2o36.png', 50, 50, 50)
    var dm = CharacterFactory('Darth Mole', 'https://i.imgur.com/cHfYVxh.jpg', 50, 50, 50)
    var ls = CharacterFactory('Luke Skywalker', 'https://i.imgur.com/37kgoYj.png', 50, 50, 50)
    var dv = CharacterFactory('Darth Vader', 'https://i.imgur.com/wbxbA.jpg', 50, 50, 50)
    

var waitingToBePlayedByPlayer = []
var waitingToBePlayedByAI = []
 
$( characterFactoryProducts).each( function() {
waitingToBePlayedByPlayer.push(this)
   }
);


$.each( waitingToBePlayedByPlayer, function( ) {
var div = $(document.createElement('div'))

var img = $(document.createElement('img'))
img.attr('src', this.image);

var p1 = $(document.createElement('p'))
p1.html(this.name)
var p2 = $(document.createElement('p'))
p2.html(this.attackPower)



p1.addClass('charText')
p2.addClass('charText')
img.addClass('charImg')
div.addClass('charDiv')


img.appendTo(div);
p1.prependTo(div)
p2.appendTo(div)
//console.log(div.html())


div.prependTo($('#baseDiv'))



 div.on( "click",  function(){alert(p1.html())} );

});

//console.log($('#baseDiv').html())
$('#baseDiv').css({ transform: 'scale(.3)' });
})
