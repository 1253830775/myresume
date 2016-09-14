$('#circle').css('animationPlayState','paused');
for (i = 1; i < $('tr').length; i++) {
	$('tr').eq(i).on('click',function(){
        start($('.audio')[i]);
	})
};
$('.icono-play').one('click',function(){
	start($('.audio')[1]);
});
$('.icono-caretDown').on('click',function(){
	$('#top').css('display','none');
	$('#tb').css('display','block');
})
function start(m){
	var dur = change(m.duration);
	$('#pro_dur').html(dur);	
	m.play();
	$('#circle').css('animationPlayState','running');
	setInterval(function(){
		music_progress(m);
	},1000);
	$('.icono-play').attr('class','icono-pause');
	$('.icono-pause').on('click',function(){
		m.pause();
		$('.icono-pause').attr('class','icono-play');
		$('#circle').css('animationPlayState','paused');
		$('.icono-play').one('click',function(){
			start(m);
		});
	})
}
function music_progress(n){
	var curT = change(n.currentTime);
	$('#pro_num').html(curT);
	$('#music_pro').attr('value',(n.currentTime/n.duration)*100);
}
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