var targetDiv = document.getElementById('content');
  var htmlContent = '';
  var h1Page = 'h1.html';

  function populateData(event){
    switch(event.target.value){
      case 'A':{
       htmlContent = "h1Page";
        break;
      }
      case 'B':{
        htmlContent = "<h1>content for B</h1>";
        break;
      }
      case 'C':{
        htmlContent = document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
        break;
      }
      case 'D':{
        htmlContent = document.getElementById("content").innerHTML='<object type="text/html" data="optionD.html" ></object>';
        break;
      }
    }
    targetDiv.innerHTML = htmlContent;
  }

  function load_home() {
       document.getElementById("homeFunction").innerHTML='<object type="text/html" data="home.html" ></object>';
  }
  // function load_home_content() {
  //      document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
  // }
