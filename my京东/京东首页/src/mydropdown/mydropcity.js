(function(){
function DropCity(options){
    this.wrap = options.wrap;
    this.width = options.width;
    this.title = options.title;
    this.menuList = options.menuList;
    // console.log(this.menuList)
    this.len = this.menuList.length;
    // console.log(this.wrap)
    this.createDom();
    this.initStyle();
    this.bindEvent();
}

DropCity.prototype.createDom = function(){
    $('<a>'+ this.title +'</a>').appendTo($('#city'));
    $('<div class="dropcity"></div>').appendTo($('#city'));
    $('<ul class="cityList"></ul>').appendTo($('.dropcity'));
    // $('<h2>'+ this.title +'</h2>').appendTo($('#city'));
    for(var i = 0; i < this.len; i++){
        var menu = this.menuList[i];
        if(menu.title){
            $('<h3>'+ menu.title +'</h3>').appendTo('.cityList');
        }
        menu.items.forEach(function(ele, index){
            $('<li>'+ ele.name +'</li>').appendTo($('.cityList'));

        })   
    }

}

DropCity.prototype.initStyle = function(){
    var self = this;
    var width = self.menuList[0].itemWidth;
    // console.log(self.menuList[0].itemWidth)
    $(this.wrap).css({
        position:'absolute',
        left:'300px',
        width:40,
        paddingLeft:10,
        cursor:'pointer',
    }).find('.dropcity').css({
        position:'absolute',
        left:0,
        backgroundColor:'#fff',
        border:'1px solid #eee',
        width:this.width,
        overflow:'hidden',
        paddingLeft:10,
        display:'none',
        zIndex:100,
    }).find('.cityList  li').css({
        width:width,
        float:'left',
        cursor:'pointer',
        // color:'red'
    })
}

DropCity.prototype.bindEvent = function(){
    
    $('#city').hover(function(){
        $(this).css({
            backgroundColor:'#fff',
            // color:'red'
        }).find('a').css({
            color:'red',
        })
        $('.dropcity').show();

    }, function(){
        $(this).css({
            backgroundColor:'transparent',
        }).find('a').css({
            color:'#999',
        })
        $('.dropcity').hide();
    })

    $('.cityList > li').hover(function(){
        $(this).css({
            color:'red',

        })

    }, function(){
        $(this).css({
            color:'#999',
        })

    })
}

$.fn.extend({
    addDropcity:function(options){
        options.wrap = this || $('body');
        new DropCity(options);
        return this;
    }
})
    // $.fn.extend({
    //     mydropCity:function(options){
    //         options.wrap = this || $('body');
    //         new DropCity(options);
    //         return this;

    //     }
    // })
}());

// (function(){
//     function Dropcity(options){
//         this.wrap = options.wrap;
//         this.href = options.href || '#';
//         this.title = options.title || '';
//         this.width = options.width;
//         this.menuList = options.menuList;
//         this.len = this.menuList.length;
//         this.direction = options.direction || 'y';
//         // console.log(this.len)
//         // this.createDom();
//         // this.initStyle();
//         // this.bindEvent();
//     }


//     $.fn.extend({
//         addDropcity:function(options){
//             options.wrap = this || $('body');
//             new Dropcity(options);
//             return this;
//         }
//     })
// }());

