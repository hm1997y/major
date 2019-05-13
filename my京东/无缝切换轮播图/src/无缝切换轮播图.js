(function () {
    function Swiper(options) {

        this.wrap = options.wrap;
        this.imgList = options.imgList;
        this.imgLen = this.imgList.length;
        this.imgWidth = options.width || $(this.wrap).width();
        this.imgHeight = options.height || '100%';
       
        this.nowIndex = 0;
        this.flag = false;
        this.createDom();
        this.initStyle();
        this.newLeft = $('.swiper > .img-list').position().left;
        // console.log(this.newLeft)

        this.bindEvent();
        // this.autoPlay();
        this.autoMove();
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
    Swiper.prototype.initStyle = function () {
        $('.swiper').css({
            width: this.imgWidth,
            height: this.imgHeight,
            position: 'relative',
            overflow: 'hidden',
        })
        $('.swiper > .img-list').css({
            padding: 0,
            margin: 0,
            width: this.imgWidth * this.imgLen,
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,


        })
        $('.img-list li').css({
            width: 500,
            height: '100%',
            float: 'left',
            listStyle: 'none',


        })
        $('img').css({
            width: 500,
            height: '100%',
        })
        $('.left-btn, .right-btn').css({
            position: 'absolute',
            top: '50%',
            width: 25,
            height: 40,
            marginTop: -20,
            fontSize: '30px',
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.5)',
            lineHeight: '40px',
            textAlign: 'center',
            cursor:'pointer',
        })
        $('.left-btn').css({
            left: 5,
        })
        $('.right-btn').css({
            right: 5,
        })
        $('.dot').css({
            position: 'absolute',
            bottom: 10,
            width: '100%',
            textAlign: 'center',
        })
        $('.dot span').css({
            display: 'inline-block',
            width: 8,
            height: 8,
            backgroundColor: '#fff',
            borderRadius: '50%',
            marginRight: '10px',
            cursor:'pointer',
        }).eq(this.nowIndex).css({
            backgroundColor:'red',
        })
    }
   
    Swiper.prototype.move = function(direction){
        if(this.flag){
            this.flag = true;
        }
       this.flag = false;
        var timer = 1500;
        switch(direction){
            case  "prev":
            if(this.nowIndex == 0){
                this.nowIndex = this.imgLen - 1;
                this.newLeft = (- this.imgWidth * this.nowIndex);
                timer = 0;
                // this.nowIndex = this.nowIndex - 1;
                // this.newLeft = (- this.imgWidth * this.nowIndex);
                // timer = 1000;
            }else{
                this.nowIndex --;
                // console.log(this.nowIndex)
        // console.log(this.newLeft)
                this.newLeft = ( - this.imgWidth * this.nowIndex);
            }
            var self = this;

            $('.img-list').animate({
                left:this.newLeft,
                
            }, timer, 'swing', function(){
                // autoMove('next');
                // self.autoMove('next');
                // self.flag = false;
                // clearInterval()
               
            })
            
            break;
            case "next":
            if(this.nowIndex == this.imgLen - 1){
                this.nowIndex = 0;
                this.newLeft = (this.imgWidth * this.nowIndex);
                timer = 0;

            }else{
                this.nowIndex ++;
                this.newLeft = (- this.imgWidth * this.nowIndex);

            }

            $('.img-list').animate({
                left:this.newLeft,
                
            }, timer, 'swing', function(){
               
            })
            break;
            default:
            timer = 500;
            var self = this;
            this.nowIndex = direction;
            
            this.newLeft = (- this.imgWidth * this.nowIndex);

            $('.img-list').animate({
                left:this.newLeft,
                
            }, timer, 'swing', function(){
                self.autoMove('next');
               
            })
            // console.log(this.nowIndex)
            break;
        }

      $('.dot span').css({
            backgroundColor:'#fff',
        }).eq(this.nowIndex).css({
            backgroundColor:'red'
        })

    }
Swiper.prototype.autoMove = function(){
    var self = this;
    // clearTimeout(self.timer);
    clearInterval(self.timer);
    self.timer = setInterval (function(){
        self.move('next');
    }, 1500);
    // var self = this;
    //     clearTimeout(self.timer);
    //     self.timer = setTimeout(function(){
    //         self.move('next');
    //     }, 1500);
}
    Swiper.prototype.bindEvent = function(){
        var self = this;
        $('.left-btn').on('click', function(){
            self.move('prev');
        //    console.log($('.img-list').position())
        // console.log(this.newLeft)
         

        })
        $('.right-btn').on('click', function(){
            self.move('next');
            
        })

        $('.dot span').on('click', function(){
            var index = $(this).index();
            self.move(index);
            // console.log(index)
        })
    }

   



    $.fn.extend({
        round: function (options) {
            options.wrap = this || $('body');
            var Init = new Swiper(options);
            return this;

        }
    })
}())

// $('.img-list').animate({
//     top:1000,
    
// }, 1000, 'swing', function(){
   
// })
// console.log(left)







