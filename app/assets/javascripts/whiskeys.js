// $(function() {
//   $('li').on('click', function(event){
//     console.log(event)
//   })
//
//
//
// })

$(document).on('turbolinks:load', function() {
  testing()

 })




testing = () => {


      $('nav a').on('click', function(event){
        event.preventDefault()
        console.log(this.className)
      $.get(`/${this.className}`, function(data){
        console.log(data)

      })

          // console.log(event)
          //
          // let indexLists = new IndexLists()
          // console.log(indexLists.whiskeyList())
      })


}


function IndexLists(data){

}

IndexLists.prototype.whiskeyList = function(){


return ` <li> whiskey names </li>`



}
