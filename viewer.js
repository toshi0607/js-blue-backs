var pictNo = 1;

function revBtnClick(){
  pictNo--;
  document.getElementById('no').innerHTML = 'No.' + pictNo;
  document.getElementById('pict').src = 'img/' + pictNo + '.jpg';
  document.getElementById('no').className = 'no1';
}

function fwdBtnClick(){
  pictNo++;
  document.getElementById('no').innerHTML = 'No.' + pictNo;
  document.getElementById('pict').src = 'img/' + pictNo + '.jpg';
  if (pictNo === 4) {
    document.getElementById('no').className = 'no2';
    document.getElementById('fwd_btn').disabled = 'disabled';
  }
}
