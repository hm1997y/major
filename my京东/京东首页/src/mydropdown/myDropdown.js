(function(){
    function Dropdown(options){
        this.wrap = options.wrap;
        this.href = options.href || '#';
        this.title = options.title || '';
        this.width = options.width;
        this.menuList = options.menuList;
        this.len = this.menuList.length;
        this.direction = options.direction || 'y';
        // console.log(this.len)
        this.createDom();
        this.initStyle();
        this.bindEvent();
    }
    Dropdown.prototype.createDom = function(){
        $(this.wrap).append($('<a class="dropdown-btn">' + this.title +'</a>'));
        var dopDownDiv = $('<div class="my-dropdown"></div>');
        for(var i = 0; i < this.len; i++){
            var menu = this.menuList[i];
            var dl = $('<dl></dl>');
            if(menu.title){
                $('<dt>'+ menu.title +'</dt>').appendTo(dl);
            }
            menu.items.forEach(function(ele){
                $('<dd>' + ele.name +'</dd>').appendTo(dl);
            })
        dopDownDiv.append(dl);
        }
        $(this.wrap).append(dopDownDiv);
    }

    Dropdown.prototype.initStyle = function(){
       var width = this.width;
        // console.log(this.width)
        $(this.wrap).css({position:'relative'}).find('.my-dropdown').css({
            position:'absolute',
            // left:0,
            backgroundColor:'#fff',
            border:'1px solid #eee',
            paddingLeft:'10px',
            display:'none',
            zIndex:100


        }).find('dl').css({
            width:(width + 10) * 2,
            borderBottom:'1px solid #eee',
            overflow:'hidden',
        }).find('dd').css({
            float:'left',
            width:width,
            textAlign:'left',
            cursor:'pointer',
            whiteSpace: 'nowrap',

        })
        $('.my-dropdown dl', $(this.wrap)).find('dt').css({
            fontWeight:'bold',
            color:'#000',
            textAlign:'left',
        })
        if(this.direction == 'x'){
            $('.my-dropdown', $(this.wrap)).css({
                width:1190,
                right:'-84px',
            })
           var self = this;
            $('.my-dropdown > dl', $(this.wrap)).each(function(i){
                $(this).css({
                    width: self.menuList[i].width,
                    float: 'left',
                    borderRight: '1px solid #eee',
                    margin: 10
                }).find('dd').css({
                    width:self.menuList[i].itemWidth,
                })

            })

        }

    }

    Dropdown.prototype.bindEvent = function(){
        $('.dropdown-btn').hover(function(){
            $(this).css({
                color:'red',
            });
        },function(){
            $(this).css({
                color:'#999',
            })
        })
            
        
      
        $(this.wrap).hover(function(){
            console.log($(this))
            $(this).css({
                backgroundColor: '#fff',
                borderColor: '#eee',
                borderBottomColor: '#fff',
            });
            $('.my-dropdown', $(this)).show();

        }, function(){
            $(this).css({
                backgroundColor:'transparent',
                borderColor:'transparent',
                color:'#999',
            });
            $('.my-dropdown', $(this)).hide();
        });
        $('.my-dropdown > dl > dd').hover(function(){
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
        addDropdown:function(options){
            options.wrap = this || $('body');
            new Dropdown(options);
            return this;
        }
    })
}());

