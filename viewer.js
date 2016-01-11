var pictNo = 1;

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
