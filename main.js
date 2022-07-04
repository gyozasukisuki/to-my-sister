function fadeAnime(){

    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top-25;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
}

$(window).scroll(function(){
    fadeAnime();
});

function sleep(waitSec, callbackFunc) {

    // 経過時間（秒）
    var spanedSec = 0;

    // 1秒間隔で無名関数を実行
    var id = setInterval(function () {

        spanedSec++;

        // 経過時間 >= 待機時間の場合、待機終了。
        if (spanedSec >= waitSec) {

            // タイマー停止
            clearInterval(id);

            // 完了時、コールバック関数を実行
            if (callbackFunc) callbackFunc();
        }
    }, 1000);

}

function checkMassage(name){
    if(name === "SS"){
        return "<b>お姉ちゃんへ</b><br>もうお姉ちゃんは今日で16歳なんだね。16年って長いの? 短いの?<br class='changeline'> 僕にはまだわかりません。<br>今日に至るまで、<br class='changeline'>沢山の人に支えられてきたと思う。<br class='changeline'>その中には、<br class='changeline'>いとこも、友達もいたと思う。<br>でも、その分お姉ちゃんもたくさんの人を支えてきたんじゃないかなと思うよ。<br>このサイトを作るだけでも<br class='changeline'>たくさんの人の力を借りました。<br class='changeline'>もちろんパパやママもだけれど、HTMLの書き方を載せてくれているサイトを作った人にも支えてもらいました。<br>お姉ちゃんにも<br class='changeline'>たくさん支えてもらいました。<br>お姉ちゃんは本当に<b style='color:red'>心が広い</b>と感じるよ。尊敬してます...<br>お姉ちゃんは<br class='changeline'>これから何に興味を持つのかなぁ<br>まぁとりあえずテストは頑張ってねーー<br>おたんじょうびおめでとう!<br>by テスト後のS.S";
    }else if(name === "BB_and_JJ"){
        return "Wちゃん<br>お誕生日おめでとう。<br class='changeline'>大きくなりましたね。<br>この先、どんな大人になっていくのか<br class='changeline'>楽しみと同時に<br class='changeline'>ジジババは<b>いつも見守っていますよ。</b>";
    }else if(name === "OK"){
        return "誕生日おめでとう😁<br>勉強教えてください。";
    }else if(name === "MaMa"){
        return "ママは、お姉ちゃんが、<br class='changeline'><b>元気</b>に<b>楽しく</b>毎日過ごしてくれたら<br class='changeline'>うれしいよ。";
    }else if(name === "PaPa"){
        return "東京ドームにつれてってね。<br class='changeline'>楽しみだなぁ。<br class='changeline'>あっ おめでとう。";
    }
}

function showMassage(massage){    
    $('#the-massage').html(massage);
    $('#the-massage').show('slow');
}

function scrollTop(){
    scrollTo(0,0);
}

function showAfterRead(){
    $('#after-read').show('fast');
}

$(window).on('load', function() {
    sleep(2,function(){
        $('#loader').hide('slow');
        scrollTop();
    });
	
});
