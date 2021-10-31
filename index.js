function makeActive(item){
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  item.className += " active";
}


function scrollToPage(item,page){
  let elem=document.getElementById(page);
  elem.scrollIntoView({behavior:"smooth",block:"start"});
}

  
function scrolled(){
  //change active state in nav menu with scrolled
  let arr=["home", "service", "about", "project", "testimonial"];

  let i;
  for(i=arr.length-1;i>=0;i--){
    let elem=document.getElementById(arr[i]);
    if(window.scrollY > (elem.offsetTop - 400)) break;
  }

  if(i>=0) makeActive(document.getElementById(arr[i]+"-nav"));
}