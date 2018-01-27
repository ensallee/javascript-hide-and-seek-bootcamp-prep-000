function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested, target){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const list=document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i=0; i<list.length; i++){
     list[i].innerHTML=parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild(){
  const divList=document.getElementById('grand-node').querySelectorAll('div');
  let array=[];

  for (let i=0; i<divList.length; i++){
    array.push(divList[i]);
  }
  return array[array.length-1];
  
}