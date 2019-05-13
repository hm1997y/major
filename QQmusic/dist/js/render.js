(function($, root){
    function renderImg(src){
        var img = new Image();
        img.src = src;
        img.onload = function(){
            $('.singer-img img').attr('src', src);
            root.blurImg(img, $('body'));
        }
    }

    function renderInfo(data){
        var str = '<div class="song-name">'+ data.song+'</div>\
        <div class="singer-name">'+ data.singer +'</div>\
        <div class="album-name">'+ data.album +'</div>';
        $('.des').html(str);

    }
    function renderIslike(like){
        $('.like').on('click', function(){
            // console.log(like)
            if(like){
                console.log(like)
                $(this).addClass('liking');
                like = false;
            }else{
                $(this).removeClass('liking');
                like = true;
            }
            
        })

    }
    root.render = function(data){
        renderImg(data.image);
        renderInfo(data);
        renderIslike(data.isLike);
    }

})(window.Zepto, window.player || (window.player = {}))

