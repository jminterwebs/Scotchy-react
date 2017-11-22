function regionShowInfo(id){
  regionShowNext(id)
}

function regionShowNext(id){

  $.get(`/regions/${id}`, function(data){
    console.log(data)
    let regionShow = `<div> <span onClick="prevInfo(${id})">Show Prev </span> <span onClick="nextInfo(${id})">Show Next </span>
    <h3> Region: ${data.country}</h3>
    </div>`

    $('.indexList').hide()
    $('.showList').empty().append(regionShow)
  })


}
