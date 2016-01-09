var pictNo = 1;

function revBtnClick(){
  document.getElementById('no').innerHTML = 'No.1';
  document.getElementById('pict').src = 'img/1.jpg';
  document.getElementById('no').className = 'no1';
}

function fwdBtnClick(){
  pictNo++;
  document.getElementById('no').innerHTML = 'No.' + pictNo;
  document.getElementById('pict').src = 'img/2.jpg';
  document.getElementById('no').className = 'no2';
}
