(function () {
    function Swiper(options) {
        // console.log(this)
        this.wrap = options.wrap;
        this.imgList = options.imgList;
        this.imgLen = this.imgList.length;
        this.imgWidth = options.width || $(this.wrap).width();
        this.imgHeight = options.height || '100%';
        // console.log(options.Width)
        // console.log(this.imgHeight)

        // console.log(this.width)
        // console.log(this.imgLen)
        this.nowIndex = 0;
        this.flag = false;
        this.createDom();
        this.initStyle();
        this.bindEvent();
        this.autoPlay();
    }
    Swiper.prototype.createDom = function () {
        var $Swiper = $('<div class="swiper"></div>');
        var $imgList = $('<ul class="img-list"></ul>');
        var $dotDiv = $('<div class="dot"></div>');
        for (var i = 0; i < this.imgLen; i++) {
            $('<li><img src="' + this.imgList[i] + '"/></li>').appendTo($imgList);
            $('<span></span>').appendTo($dotDiv);
        }
        $Swiper.append($imgList).append($('<div class="left-btn"> &lt;</div><div class="right-btn"> &gt;</div>'))
            .append($dotDiv)
            .appendTo($(this.wrap));
    }
    Swiper.prototype.move = function (direction) {
        if(this.flag){
            this.flag = true;
        }
       this.flag = false;
        switch (direction) {
            case "prev":
                if (this.nowIndex == 0) {
                    this.nowIndex = this.imgLen - 1;
                } else {
                    this.nowIndex --;
                }
                break;
            case "next":
                if (this.nowIndex == this.imgLen - 1) {
                    this.nowIndex = 0
                } else {
                    this.nowIndex ++;
                }
                break;
            default:
                this.nowIndex = direction;
                break;
        }
        var self = this;
        $('.img-list li').fadeOut().eq(this.nowIndex).fadeIn(function(){
            self.autoPlay();
            self.flag = false;

        })
        $('.dot span').css({
            backgroundColor:'#fff',
        }).eq(this.nowIndex).css({
            backgroundColor:'red'
        })
    }

    Swiper.prototype.bindEvent = function () {
        var self = this;
        $('.left-btn').on('click', function () {
            self.move('prev');

        })
        $('.right-btn').on('click', function () {
            self.move('next');
            //   console.log(this.nowIndex)
        })
        $('.dot span').on('click', function () {
            //   console.log($(this).index())
            var index = $(this).index();
            self.move(index);
            //   console.log(index)

        })

    }
    
    Swiper.prototype.autoPlay = function(){
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function(){
            self.move('next');
        }, 1500);

    }

    


  


    Swiper.prototype.initStyle = function () {


        $('.swiper').css({
            width: this.imgWidth,
            height: this.imgHeight,
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            border: '1px solid #000',

        })
        $('.swiper > .img-list').css({
            margin: 0,
            paddding: 0,
            width: '100%',
            height: '100%',
            position: 'relative',
        })
        $('.swiper > .img-list > li').css({
            display:'none',
            width: '100%',
            height: '100%',
            listStyle: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
        }).eq(0).css({
            display:'block'
        }).end().find('img').css({
            width:'100%',
            height:'100%',
        })
        $('.left-btn, .right-btn').css({
            position: 'absolute',
            top: '50%',
            width: '24px',
            height: '40px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            marginTop: '-20px',
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '40px',
            cursor: 'pointer',

        })
        $('.left-btn').css({
            left: '5px',

        })
        $('.right-btn').css({
            right: '5px',

        })
        $('.dot').css({
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
        })
        $('.dot span').css({
            display: 'inline-block',
            width: 8,
            height: 8,
            backgroundColor: '#fff',
            borderRadius: '50%',
            marginRight: 10,

        }).eq(this.nowIndex).css({
            backgroundColor:'red',
        })

    }
    $.fn.extend({
        round: function (options) {
            // 兼容父级 保存轮播图的父级
            options.wrap = this || $('body');
            // console.log(this)
            // 构建轮播图对象
            var swiper = new Swiper(options);
            return this;
        }
    })


}());
 // Swiper.prototype.createDom = function(){
    //             var swiperContent = $('<div class="swiper"></div>');
    //             var imgList = $('<ul class="swiper-list"></ul>');
    //             var dotDiv = $('<div class="dot"></div>');
    //             for(var i = 0;i < this.imgLen; i++){
    //                 $('<li><img src="' + this.imgList[i] + '"/></li>').appendTo(imgList);
    //                 $('<span></span>').appendTo(dotDiv);
    //             }
    //             swiperContent.append(imgList)
    //             .append($('<div class="left-btn"> &lt;</dv><div class="right-btn"> &gt;</div>'))
    //             .append(dotDiv)
    //             .appendTo($(this.wrap));
    //         }






