let myElement = document.getElementById('myImg'),
myImgs =['../img/image.jpg','../img/image1.jpg','../img/image2.jpg'];

function changeImage(myElement, myImgs){

    setInterval(function(){
        let myRandomNum =Math.floor(Math.random()*myImgs.length);
        myElement.src =myImgs[myRandomNum];
    }, 2000)
}
changeImage(myElement, myImgs);
console.log(changeImage);
