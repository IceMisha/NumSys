var a = 0
var string1 = "012"
var string2 = "алфавит"
var string3 = "позицион"
butt.onclick = function() {
    /* Считываем инпаты*/

	var ans1 = document.getElementById('elem1').value
		if (ans1 == (string1)){
		a = a+2;
		}
    var ans2 = document.getElementById('elem2').value
  	if (ans2 == (string2)){
    a = a+1;
    }
    var ans3 = document.getElementById('elem3').value
  	if (ans3.includes(string3)){
    a = a+1;
    }
    var ans4 = document.getElementById('elem4').value
  	if (ans4 == 35){
    a = a+2;
    }
    var ans5 = document.getElementById('elem5').value
  	if (ans5 == 3349){
    a = a+2;
    }
    var ans6 = document.getElementById('elem6').value
  	if (ans6 == 10101010){
    a = a+2;
    }
    var ans7 = document.getElementById('elem7').value
  	if (ans7 == 1012){
    a = a+2;
    }
    var ans8 = document.getElementById('elem8').value
  	if (ans8 == 10111){
    a = a+2;
    }
    var ans9 = document.getElementById('elem9').value
  	if (ans9 == 3){
    a = a+2;
    }
    var ans10 = document.getElementById('elem10').value
  	if (ans10 == 3344){
    a = a+4;
    }
    /* Скрываем страницу и раскрываем результаты*/
    document.getElementById('tohid1').classList.add('hidden');
    document.getElementById('tohid2').classList.add('hidden');
    document.getElementById('res1').classList.remove('hidden');
    window.scrollTo(0,-2000);

document.getElementById('result').innerHTML = "Ваш результат: " +a + " баллов (-а) из 20"
a=0
}