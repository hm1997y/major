$.fn.extend({
    myFullPage: function (config) {
        var colorsArray = config.colorsArray;
        var $W = $(this);
        var $WS = $W.find('.section');
        var commonStyle = {
            width: '100%',
            height: '100%'
        }
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        var lock = true;
        var curIndex = 0;
        var $swl = $WS.find('.sliderWrapper').find('.slider');
        $('html').add('body').css({
            position: 'relative',
            overflow: 'hidden',
            margin: 0,
            padding: 0
        }).add($W).add($WS).css(commonStyle);
        $W.css({
            position: 'absolute',
            left: 0,
            top: 0
        }).find('.section').each(function (index, ele) {
            $(ele).css({
                backgroundColor: colorsArray[index],
                position: 'relative'
            }).find('.slider').css({
                width: clientWidth,
                height: clientHeight,
                float: 'left',
            }).wrapAll('<div class="sliderWrapper"></div>')
        });
        $WS.find('.sliderWrapper').each(function (index, ele) {
            $(ele).css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: $WS.find('.slider').size() * clientWidth,
                height: clientHeight,
                position:'relative'
            });
        });

        $WS.eq(0).addClass('active').end().find('.sliderWrapper').each(function (index, ele) {
            $(ele).find('.slider').eq(0).addClass('innerActive')
        });

        // 37 left 38 top 39 right 40 bottom
        $(document).on('keydown', function (e) {
            var direction = '';

            if (e.which == 38 || e.which == 40) {
                if (lock) {
                    lock = false;
                    var newTop = $W.offset().top;

                    if (e.which == 38 && curIndex != 0) {
                        direction = 'top';
                        config.onLeave(curIndex, direction);
                        newTop += clientHeight;
                        curIndex--;
                    } else if (e.which == 40 && curIndex != $WS.size() - 1) {
                        direction = 'bottom';
                        config.onLeave(curIndex, direction);
                        newTop -= clientHeight;
                        curIndex++;
                    }
                    $W.animate({
                        top: newTop
                    }, 500, 'swing', function () {
                        lock = true;
                        $WS.eq(curIndex).addClass('active');
                        if (direction == 'top') {
                            $WS.eq(curIndex + 1).removeClass('active');
                        } else {
                            $WS.eq(curIndex - 1).removeClass('active');
                        }
                        config.afterLoad(curIndex, direction);
                    });
                }

            }

            if (e.which == 37 || e.which == 39) {

                var $curl = $W.find('.active').find('.sliderWrapper').find('.innerActive');
                if (lock) {
                    lock = false;
                    var newLeft = $WS.find('.sliderWrapper').offset().left;
                    if (e.which == 37 && $curl.index() != 0) {
                        config.onLeave(curIndex, direction);
                        direction = 'left';
                        newLeft += clientWidth;
                    } else if (e.which == 39 && $curl.index() != $W.find('.active').find('.sliderWrapper').find('.slider').size() - 1) {
                        config.onLeave(curIndex, direction);
                        direction = 'right';
                        newLeft -= clientWidth;
                    }
                    $W.find('.active').find('.sliderWrapper').animate({
                        left: newLeft
                    }, 500, 'swing', function () {
                        lock = true;
                        direction != '' ? $curl.removeClass('innerActive') : '';
                        if (direction == 'left') {
                            $curl.prev().addClass('innerActive');
                        } else {
                            $curl.next().addClass('innerActive');

                        }
                        // config.afterLoad($curl.index(), direction);
                    })
                }
            }
        })
    }
});
