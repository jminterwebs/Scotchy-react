function distillerShowInfo(id){
  distillerNextShow(id)
}


function distillerNextShow(id){
  let distillerWhiskeys = []


  $.get(`/distillers/${id}`, function(data){
      for(let i =0; i < data.whiskeys.length; i ++){
        distillerWhiskeys.push(`<li>${data.whiskeys[i].name}</li>`)
      }
    let distillerShow = `<div > <span onClick="prevInfo(${id})">Show Prev </span> <span onClick="nextInfo(${id})">Show Next </span>
        <h1>${data.name}</h1>
        <h3>Region: ${data.region_name}</h3>
        <div class=class="whiskeyList"></div>
    </div>`

    $('.whiskeyList').empty().append(distillerWhiskeys)
    $('.indexList').hide()
    $('.favDistiller').hide()
    $('.favWhiskey').hide()
    $('.showList').empty().append(distillerShow)


  })



}
