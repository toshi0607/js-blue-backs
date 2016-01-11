var pictNo = 1;
var myImg = [];

myImg[0] = document.createElement('img');
myImg[0].src = 'img/1.jpg';
myImg[1] = document.createElement('img');
myImg[1].src = 'img/2.jpg';
myImg[2] = document.createElement('img');
myImg[2].src = 'img/3.jpg';
myImg[3] = document.createElement('img');
myImg[3].src = 'img/4.jpg';

function revBtnClick(){
  pictNo--;
  document.getElementById('no').innerHTML = 'No.' + pictNo;
  document.getElementById('pict').src = 'img/' + pictNo + '.jpg';

  if (pictNo === 1) {
    document.getElementById('fwd_btn').disabled = 'disabled';
  } else if (pictNo === 3) {
    document.getElementById('fwd_btn').disabled = false;
    document.getElementById('no').className = 'no1';
  }
}

function fwdBtnClick(){
  pictNo++;
  document.getElementById('no').innerHTML = 'No.' + pictNo;
  document.getElementById('pict').src = 'img/' + pictNo + '.jpg';
  if (pictNo === 4) {
    document.getElementById('no').className = 'no2';
    document.getElementById('fwd_btn').disabled = 'disabled';
  } else if (pictNo === 2) {
    document.getElementById('rev_btn').disabled = false;
  }
}
