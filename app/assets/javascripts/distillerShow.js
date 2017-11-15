function distillerShowInfo(id){
  distillerNextShow(id)
}


function distillerNextShow(id){
  $.get(`/distillers/${id}`, function(data){
    console.log(data)
    let distillerShow = `<div> <span onClick="prevInfo(${id})">Show Prev </span> <span onClick="nextInfo(${id})">Show Next </span>
        <h1>${data.name}</h1>
        <h3>Region: ${data.region_name}</h3>
    </div>`


     $('.indexList').hide()
     $('.showList').empty().append(distillerShow)


  })



}
