dragula([document.querySelector('#step-list')]);

correct = 0;

var list = document.getElementsByClassName("sortable");
var checkList;
var metaList = [];
var metaCheck = [];
var correct = ["12345678"];

for (i = 0; i < list.length; i++){
  metaList += list[i].id;
}

function checkOrder(){
  var checkList = document.getElementsByClassName("sortable");
  for (i = 0; i < checkList.length; i++){
    metaCheck += checkList[i].id;
  }
  if (metaCheck == correct) {
    alert("YAY! You win!");
    metaCheck = [];
  } else {
    alert("So close, keep trying!");
    metaCheck = [];
  }
}
