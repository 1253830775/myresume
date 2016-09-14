function song(s){this.s = s};
song.prototype.Start = function(){
	var dur = change(this.s.duration);
	$('#pro_dur').html(dur);	
	this.s.play();
	$('#circle').css('animationPlayState','running');
	var th = this.s;	
	setInterval(function(){
		var curT = change(th.currentTime);
		$('#pro_num').html(curT);
		$('#music_pro').attr('value',(th.currentTime/th.duration)*100);
	},1000);
	$('.icono-play').attr('class','icono-pause');
}
song.prototype.Pause = function() {
	this.s.pause();
	$('.icono-pause').attr('class','icono-play');
	$('#circle').css('animationPlayState','paused');
}	
$('#circle').css('animationPlayState','paused');
var asong = new song($('.audio')[1]);
$('.icono-play').on('click',function(){
    songstart();
})
function songstart(){
	asong.Start();
	$('.icono-pause').on('click',function(){
		asong.Pause();
		$('.icono-play').on('click',function(){
        songstart();
        })
	});
}
$('.icono-caretDown').on('click',function(){
	$('#top').css('display','none');
	$('#tb').css('display','block');
})
// var i;
// for (i = 1; i < $('tr').length; i++) {
// 	$('tr').eq(i).on('click',function(){
//         start($('.audio')[i]);
// 	})
// };


function change(m){
	min = parseInt(m/60);
	sec = parseInt(m)%60;
	min = check(min);
	sec = check(sec);
	return min+':'+sec ;
}
function check(t){
	if(t<10)
		{return '0'+t;}
	else
		return t;
}