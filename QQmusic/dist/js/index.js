var root = window.player;
var dataList, len;
// var nowIndex = 0;
var audio = root.audioManager;
var timer;
var control;
var playAudio;
console.log(audio)
var total;
function getData(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            dataList = data;
            len = dataList.length;
            control = new root.controlIndex(len);
            root.render(data[0]);
            playAudio = audio.getAudio(data[0].audio);
            listRender(dataList);
            listBindevent();
            // console.log(data[0].audio, audio.getAudio(data[0].audio))
            change(0);
            barRun(playAudio);
            bindEvent();
            console.log(data);
        },
        error: function () {
            console.log('error');
        }
    })
}

function bindEvent() {
    $('body').on('play:change', function (e, index) {
        // console.log(index,'change')
        playAudio = audio.getAudio(dataList[index].audio);
        change(index);
        barRun(playAudio);
        // console.log(audio.getAudio(dataList[index].audio))
        root.render(dataList[index]);
        if (audio.status == 'play') {
            audio.play();
        }
    })
    $('.prev').on('click', function () {
        // if (nowIndex == 0) {
        //     nowIndex = len - 1;
        // } else {
        //     nowIndex--;
        // }
        var i = control.prev();
        $('body').trigger('play:change', i);
        // console.log(i)
        // audio.getAudio(dataList[i].audio);
        // root.render(dataList[i]);
    });

    $('.next').on('click', function () {
        // if(nowIndex == len -1){
        //     nowIndex = 0;
        // }else{
        //     nowIndex ++;
        // }
        var i = control.next();
        $('body').trigger('play:change', i);
        // audio.getAudio(dataList[i].audio);
        // root.render(dataList[i]);
    });

    $('.play').on('click', function () {
        if (audio.status == 'pause') {
            // $(this).addClass('playing');
            audio.play();

            deg = $('.img').attr('data-deg');
            console.log(deg)
            rotate(deg);

        } else {
            // $(this).removeClass('playing');
            audio.pause();
            clearInterval(timer);
        }
        $('.play').toggleClass('playing')
    });

    $('.list').on('click', function (e) {
        e.stopPropagation();
        $('.menu').css({ display: 'block' })
    })
    console.log($('.menu'))
    $('body').on('click', function () {
        $('.menu').css({ display: 'none' })
    });

}

// 列表渲染
function listRender(data) {
    data = dataList;
    var str = '';
    for (var i = 0; i < len; i++) {
        str += '<li>\
        <span class="songName">' + data[i].song +'</span>\
        <span class="singerName">'+ data[i].singer +'</span>\
    </li>'
    }
    $('.menu').html(str);
}


// 列表播放
function listBindevent() {
    $('li').on('click', function (e) {
        var self = this;
        var nowIndex;
        // console.log(e.target, $(self).children().eq(0).text())
        var newSong = dataList.filter(function (ele, index) {
            var cur = JSON.stringify($(self).children().eq(0).text());
            var now = JSON.stringify(ele.song);
            // console.log(cur, now, cur == now)
            if (now == JSON.stringify($(self).children().eq(0).text())) {
                nowIndex = index;
                return true;
            } else {
                return false;
            }
            // nowIndex = index;
            // return now == JSON.stringify($(self).children().eq(0).text());
        })
        // console.log(newSong, nowIndex)
        control = new root.controlIndex(len);
        root.render(dataList[nowIndex]);
        playAudio = audio.getAudio(dataList[nowIndex].audio);
        // console.log(data[0].audio, audio.getAudio(data[0].audio))
        change(nowIndex);
        barRun(playAudio);
        // bindEvent();
        audio.play();
        $('.play').addClass('playing');

        console.log('====')



    })

}

function rotate(deg) {
    // var deg = 0;
    clearInterval(timer);
    deg = parseInt(deg);
    timer = setInterval(function () {
        deg += 2;
        $('.img').attr('data-deg', deg);
        $('.img').css({
            transform: 'rotateZ(' + deg + 'deg)',
            transition: 'transform 0.2s linear'
        })
    }, 200)
}

function barRun(nowAudio) {
    // var nowAudio = audio.getAudio(dataList[index].audio);
    setInterval(function () {
        total = nowAudio.duration;
        var nowTime = nowAudio.currentTime;
        var curTime = parseInt(nowTime / 60) + ':' + parseInt(nowTime % 60);
        var allTime = parseInt(total / 60) + ':' + parseInt(total % 60);
        var newWidth = nowTime / total * $('.bar').width();
        console.log(newWidth, nowTime, total);
        $('.all-time').html(allTime)
        $('.cur-time').html(curTime);
        $('.drop').css({
            width: newWidth,
        })
        $('.dot').css({ left: newWidth });

    }, 1000)
}

function change() {
    $('.bar').on('click', function (e) {
        var location = e.layerX;
        console.log(e, location)
        var width = $('.bar').width();
        // playAudio = audio.getAudio(dataList[index].audio)
        // var total = playAudio.duration;
        // console.log(total)
        // console.log(location / width, playAudio, playAudio.duration)
        var targetTime = location / width * playAudio.duration;
        playAudio.currentTime = targetTime;
        console.log(targetTime)
    })
}

getData("../mock/data.json");