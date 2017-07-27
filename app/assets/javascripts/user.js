$(document).on('turbolinks:load', function() {

$.get('/', function(data){

  favWhiskey(data)
  favDistiller(data)
})


})



function favWhiskey(data){
  $(".favWhiskey").on('click', function(event){
    event.preventDefault()
    let list = $('.whiskeyList li').length
      if(list < data.whiskeys.length){
        for(i = list; i <= data.whiskeys.length-1; i ++){

          $('.whiskeyList').append(`<li>${data.whiskeys[i].name} Liked by ${data.whiskeys[i].user_likes} <span onclick="comments(\'addComment\', ${data.whiskeys[i].id}, ${data.id})" class="addComment"> Add Comments</span><span onclick="comments(\'viewComments\', ${data.whiskeys[i].id})" class="viewComments"> View Comments</span><div class="commentArea" id="${data.whiskeys[i].id}"></div></li>`)
        }
    }
  })
}


function favDistiller(data){
  $('.favDistiller').on('click', function(event){
    event.preventDefault()
    let list = $('.distillerList li ').length

      if(list < data.distillers.length){
        for(i= list; i <= data.distillers.length-1; i++){
          $('.distillerList').append(`<li>  Disttler: ${data.distillers[i].name} | Region  ${data.distillers[i].region_name} | <a href="#" onclick="otherWhiskeys(${data.distillers[i].id})"> Other Whiskeys </a>  <div class='distillerWhiskeyList_${data.distillers[i].id}'</div>`)
        }
      }
  })
}

function otherWhiskeys(id){
  event.preventDefault()
    $.get(`/distillers/${id}`, function(data){
      let list = $(`.distillerWhiskeyList_${id} li`).length
      if(list < data.whiskeys.length){
        for (i = list; i < data.whiskeys.length; i ++){
        $(`.distillerWhiskeyList_${id}`).append(`<li>${data.whiskeys[i].name}</li>`)
      }

    }

  })

}

function comments(className, whiskey_id, user_id){

  if(className == "addComment"){

    $( `#${whiskey_id}`).empty().append(`<form><input type="hidden" value="${whiskey_id}" name="whiskey_id" id="whiskey_id"/> <input type="hidden" value="${user_id}" name="user_id" id="user_id"/> <textarea id="content" name="content"></textarea><input type="submit"/></form>`)

       addComment()

  } else if (className == "viewComments") {
    $.get(`/whiskeys/${whiskey_id}/comments`, function(data){
    }).then( function(data){
      let list = $(`#${whiskey_id} li`).length
      console.log(list)
        $(`#${whiskey_id}`).empty()
      for (i =list ; i < data.length; i ++){
        $(`#${whiskey_id}`).append(`<li> ${data[i].content} - ${data[i].user.name}</li>`)
      }
    })

  }

}



function addComment(){

  $('form').submit(function(event){
    event.preventDefault()

    var values = $(this).serialize();
    console.log(values)

      var posting = $.post(`/comments`, values);

      posting.done(function(data) {
          var comment = data;

          console.log(data)
        })


  })

  // var post = data;
  //        $("#postTitle").text(post["title"]);
  //        $("#postBody").text(post["description"]);



}
