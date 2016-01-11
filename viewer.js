var pictNo = 1;
var myImg = [];

for (var i = 0;i < 4; i++){
  myImg[i] = document.createElement('img');
  myImg[i].src = 'img/' + (i + 1) + '.jpg';
}

function showImg(){
  document.getElementById('no').innerHTML = 'No.' + pictNo;
  document.getElementById('pict').src = myImg[pictNo - 1].src;
}

function revBtnClick(){
  pictNo--;
  showImg();

  if (pictNo === 1) {
    document.getElementById('fwd_btn').disabled = 'disabled';
  } else if (pictNo === 3) {
    document.getElementById('fwd_btn').disabled = false;
    document.getElementById('no').className = 'no1';
  }
}

function fwdBtnClick(){
  pictNo++;
  showImg();

  if (pictNo === 4) {
    document.getElementById('no').className = 'no2';
    document.getElementById('fwd_btn').disabled = 'disabled';
  } else if (pictNo === 2) {
    document.getElementById('rev_btn').disabled = false;
  }
}
