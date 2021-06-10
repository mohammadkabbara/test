let myElement = document.getElementById('myImg'),
myImgs =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_xrE7uD0PuGgCQQWMppA1z6K2NXA1pTu8Q&usqp=CAU'
,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLO-crZi9DT1yBh9QXdFEEdM5TIJJt1Jr6Bw&usqp=CAU'
,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrts4s07RNeg1LNf09MWQTa40FR0QFTDEe2Q&usqp=CAU'];

function changeImage(myElement, myImgs){

    setInterval(function(){
        let myRandomNum =Math.floor(Math.random()*myImgs.length);
        myElement.src =myImgs[myRandomNum];
    }, 2000)
}
changeImage(myElement, myImgs);
console.log(changeImage);
