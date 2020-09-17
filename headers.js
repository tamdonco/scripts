
$(document).ready(function() {
  var path = window.location.pathname;
  if (path.substr(12) == "")
      return;

  $('.moderatorbar').hide();  
  $('.postcount').hide();
  $('.postgroup').hide();
  $('.stars').hide();

  $("img").each(function(){
    if($(this).attr("title") == "View Profile"){
        $(this).hide();                
    } 
  });


   for ( var i = 0, r = document.getElementsByClassName('post_wrapper'); i < r.length; i++ ) {

      var tmp1 =  r[i].textContent;
      if (tmp1.indexOf('You are ignoring this user.') >=0 )
          r[i].style.display = 'none';
      
      var count = r[i].getElementsByTagName('a').length;
      for (j=1; j < count; j++) {
        tmp = r[i].getElementsByTagName('a')[j].getAttribute('href');
        if (tmp.indexOf('Show me the post.') >= 0)
	   console.log(tmp);
      }

   }

   // disable right click on image
   $('img').on('contextmenu', function(e) {
      var currentUrl = $(this).attr('src');
      if (currentUrl.indexOf('hitsk.in') < 0) {
         alert('Nhóm Chơ:  Copy Content is prohibited on this forum.');
         return false;
      }
      else
         return true;
   });

   $('img').on('dragstart', function(e) {
      alert('Nhóm Chơ:  Copy Content is prohibited on this forum.');
      return false;
    });


    // hide image from quote
    var i, a = document.querySelectorAll('blockquote img');
    for (i = 0; i < a.length; i++) {
        var str = a[i].src;
        if (str.indexOf('/smiles/') < 0)
            a[i].remove();
    }
  
});

$(document).ready(function() {

  var path = window.location.href;
  path = path.substr(32);
  console.log(path);

  // no need it , admin can see it
  // hide who is online and statistics
  //if (path == "/" || path == "/index.php")
  //    $('.roundframe').hide();


      var uName =$('.greeting').text();
      uName = uName.substr(6);
      console.log(uName+"@");

  if (path.indexOf('action=profile') >= 0) {

      // Hide user summary some info
      $('.noborder').hide();
      document.getElementById("detailedinfo").style.display = "none";


      var gName =$('.username').text();
      gName = gName.substr(0, gName.indexOf(' '));
      console.log(gName);

      var uID = path.substr(path.indexOf('u=') +2);
      console.log(uID);
  }



  // Disable Cut + Copy + Paste from guests
  if (uName == '') {
    //Disable cut copy paste
    $('body').bind('cut copy', function (e) {
          e.preventDefault();
    });
  }

});



