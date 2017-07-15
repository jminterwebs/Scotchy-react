
$(function(){

  $(".favWhiskey").on('click', function(){
    $.get("./1/whiskeys", function(data){
          for(let i = 0; i < data.length; i ++){
              $('.whiskeyList').append(`<li> ${<%= link_to data[i].name, user_whiskey_path(current_user, name) %>} Liked by  <%= name.user_likes %> users</h3> </li>``)
          }
      })


    })


  })
