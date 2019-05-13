(function(){
    function TurnPage(options){
        this.wrap = options.wrap;
        this.allPage = options.allPage;
        this.curPage = options.curPage;
        this.callback = options.callback || function(){};
        this.fillPage();
        this.bindEvent();
    }

    TurnPage.prototype.fillPage = function(){
        $(this.wrap).empty();
        if(this.curPage > 1){
            $(this.wrap).append($('<li class="prev-page">上一页</li>'));
        }else{
            $(this.wrap).remove('prev-page');
        }

        if(this.curPage != 1 && this.curPage - 2 > 1){
            $(this.wrap).append($('<li class="tab-number">1</li>'));
            
        }
        if(this.curPage - 2 > 2){
            $(this.wrap).append($('<span>...</span>'));
        }
        for(var i = this.curPage - 2; i <= this.curPage + 2; i ++ ){
            if(i > 0 && i <= this.allPage){
                var oLi = $('<li class="tab-number">'+ i +'</li>');
                if(i == this.curPage){
                    oLi.addClass('cur-page');
                }
                $(this.wrap).append(oLi);
                
            }
        }
        if(this.allPage - this.curPage > 3){
            $(this.wrap).append($('<span>...</span>'));
        }
        if(this.curPage + 2 < this.allPage){
            $(this.wrap).append($('<li class="tab-number">'+ this.allPage +'</li>'));
        }
        if(this.curPage < this.allPage){
            $(this.wrap).append($('<li class="next-page">下一页</li>'));
        }else{
            $(this.wrap).remove('.next-page');
        }
    }

    TurnPage.prototype.bindEvent = function(){
        // console.log(this)
        var self = this;
        // console.log(self.curPage)
        // console.log($('prev-page'))

        $('.prev-page', this.wrap).on('click', function(){
            self.curPage --;
            self.change();
            // console.log(self.curPage)

            // self.fillPage();
        });

        $('.next-page', this.wrap).on('click', function(){
            self.curPage ++;
            self.change();
            // self.fillPage();
        });
        $('.tab-number', this.wrap).on('click', function(){
            // console.log($(this));
            var curPage = parseInt($(this).text());
            self.curPage = curPage;
            console.log(self.curPage)
            self.change();
        })
    }

    TurnPage.prototype.change = function(){
        this.fillPage();
        this.bindEvent();
        this.callback(this.curPage);
    }




    $.fn.extend({
        turnPage: function(options){
            options.wrap = this;
            new TurnPage(options);
            return this;

        }
    })
}())