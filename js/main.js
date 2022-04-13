let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'


function DOM(ele){
  return document.querySelector(ele)
}

DOM('button').addEventListener('click',drawFive)


function drawFive(){
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
  for(let i = 0;i<5;i++){
    let random = Math.round(Math.random()*11855)
    let image = data.data
    image = image[random].card_images[0].image_url
    let hand = document.createElement('img')
    hand.src = image
    DOM('#hand1').appendChild(hand)
  }
    

  for(let i = 0;i<5;i++){
    let random = Math.round(Math.random()*11855)
    let image = data.data
    image = image[random].name
    let hand = document.createElement('h6')
    hand.innerText = image
    DOM('#name1').appendChild(hand)
  }

  })
}


//   

//       let attack = image[random].atk
//       let defense = image[random].def
// })
// }


// type: "Effect Monster"
