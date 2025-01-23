const recipes = [];
const searchButton = document.getElementById("searchButton");
const addButton = document.querySelector('.addButton');
const page1 = document.getElementById("page1");

//returns random val 1 time(s)
function randVal(){
    for (let i=0;i<1;i++){
        var val = Math.floor(Math.random()*9); //rand val = 9
        return val;
    }
}
//assigns function to clicking add
addButton.addEventListener('click', function(){randVal()});
page1.textContent = randVal();
