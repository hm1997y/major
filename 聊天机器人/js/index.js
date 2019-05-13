function init(){
    bindEvent();

}
function bindEvent(){
    $('#inp').keyup(function(e){
        if(e.keyCode == 13){
            $('#submit').trigger('click');
        }

    })
    $('#submit').click(function(){
        var value = $('#inp').val();
        if(value){
            
            rendDom('mine', value);
            getData(value);
            $('#inp').val('');
        }

    })
}

// 将输入框的内容渲染到发送框中
function rendDom(who, value){
    $(' <div class="'+ who +'">\
    <div class="bg"></div>\
    <div class="text">'+ value +'</div>\
</div>').appendTo($('.content'));

}
function getData(value){
    $.ajax({
        url:'http://api.duyiedu.com/api/chat/sendMsg',
        method:'GET',
        dataType:'json',
        data: {
            appkey:'just_be_happy_1547734649125',
            msg:value
        },
        success:function(req){
            console.log(req);
            if(req.status == 'success'){
                rendDom('robot', req.data.text);
            }

        }

    })
}
init();