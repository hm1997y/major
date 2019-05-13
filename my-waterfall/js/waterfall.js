var oLi = document.getElementsByClassName('col');
var page = 1;
var lock = false;
function getData(){
    lock = true;
    // ajax('GET', './js/data.txt', 'cpage=1', true, rendDom);
    ajax('GET', 'getPics.php', 'cpage=' + page, true, rendDom);
    console.log('====')
}

function rendDom(data){
    data = typeof data === 'string' ? JSON.parse(data) : data;
    data.forEach(function(ele){
        var itemDom = createDom(ele);
        var minIndex = getMinLi();
        oLi[minIndex].appendChild(itemDom);
    })
    page ++;
    lock = false;


}
function createDom(data){
    var itemDom = document.createElement('div');
    var img = new Image();
    img.src = data.preview;
    var p = document.createElement('p');
    p.innerText = data.title;
    itemDom.appendChild(img);
    itemDom.appendChild(p);
    return itemDom;
}

function getMinLi(){
    var oLi = document.getElementsByClassName('col');
    var minIndex = 0;
    var minHeight = oLi[minIndex].offsetHeight;
    var len = oLi.length;
    for(var i = 1; i < len; i++){
        if(oLi[i].offsetHeight < minHeight){
            minHeight = oLi[i].offsetHeight;
            minIndex = i;
        }
    }
    return minIndex;
}
var timer = null;
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var minHeight = oLi[getMinLi()].offsetHeight;
    if(scrollTop + clientHeight > minHeight){
        clearTimeout(timer);
        if(!lock){
            timer = setTimeout(function(){
                getData();
    
            }, 2000);
        }
        
    }

}
getData();
