//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let i = 0
let arrLength

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  let drink = document.querySelector('input').value
  let newDrink = drink.split(' ').join('_')
  /* const url = ''+choice */

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newDrink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks)
        arrLength = (data.drinks).length
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('#fetchedInstructions').innerText = data.drinks[i].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

document.querySelector('#forwardArrow').addEventListener('click', changeDrinkForward)
function changeDrinkForward() {
  if (i === (arrLength - 1)) {
    i = 0
  }else {
    i = i + 1
  }
  getDrink()
}



document.querySelector('#backArrow').addEventListener('click', changeDrinkBackward)
function changeDrinkBackward() {
  if (i === 0) {
    i = (arrLength - 1)
  }else {
    i = i - 1
  }
  getDrink()
}