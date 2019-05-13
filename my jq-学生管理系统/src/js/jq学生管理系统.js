var tableData = [];
var pageSize = 10;
var nowPage = 1;
var searchWord = "";


function bindEvent() {
    $('dl').on('click', 'dd', function () {
        $('dd').removeClass('active');
        var id = $(this).data('id');
        console.log($('#' + id))
        $(this).addClass('active');
        if (id == 'list') {
            getTableData(nowPage);
            $('#add-student-submit')[0].reset();
            // transferData('/api/student/findByPage', {
            //     page:nowPage,
            //     size:pageSize
            // }, function (req) {

            //     console.log(req)
            //     allPage = Math.ceil(req.data.cont / pageSize);
            //     $('#turnPage').turnPage({
            //         allPage: allPage,
            //         curPage: nowPage,
            //         callback: function(){

            //         }
            //     })
            //     rendTable(req.data.findByPage);
            // })
        }
        // $('.content').fadeOut();
        // $('#' + id).fadeIn();
        $('.content').css({display:'none'})
        $('#' + id).css({display:'block'})
        // console.log('======')
    });
    $('#edit-submit').on('click', function (e) {
        e.preventDefault();
        var data = $('#edit-student-form').serialize();
        // console.log(data)
        transferData('/api/student/updateStudent', data, function () {
            console.log(data)
            alert('修改成功');
            $('.model').slideUp();
            $('dl > dd[data-id= list]').trigger('click');
        })

    })
    $('#add-submit').on('click', function (e) {
        e.preventDefault();
        var data = $('#add-student-submit').serialize();
        transferData('/api/student/addStudent', data, function () {
           
            alert('提交成功！');
            $('#add-student-submit')[0].reset();
            $('dl > dd[data-id= list]').trigger('click');
        })
    })

    $('#search-submit').on('click', function(e){
        var value = $('#search-word').val();
        nowPage = 1;
        if(!value){
            getTableData(nowPage);
            return false;
        }
        searchWord = value;
        getSearchTableData();
        // transferData('/api/student/searchStudent', {
        //     sex: -1,
        //     search: value,
        //     page: nowPage,
        //     size:pageSize,
        // }, function(req){
        //     console.log(req)
        //     var allPage = Math.ceil(req.data.cont / pageSize);
        //     $('#turnPage').turnPage({
        //         allPage: allPage,
        //         curPage: nowPage,
        //         callback:function(page){
        //             nowPage = page;
        //         }
        //     });
        // rendTable(req.data.searchList);


        // })
    })

}
function init() {
    bindEvent();
    $('dd').eq(0).addClass('active').trigger('click');
}
init();
// function getTableData(page) {
//     $.ajax({
//         type: 'get',
//         url: 'http://api.duyiedu.com/api/student/findAll',
//         data: {
//             appkey: 'just_be_happy_1547734649125',
//         },
//         dataType: 'json',
//         success: function (req) {
//             if (req.status == 'success') {
//                 rendTable(req.data);

//             }
//             transferData('api/student/findAll', data, function(){
//                 rendTable(req.data);

//             })
//         }
//     })
// }
function rendTable(data) {
    var str = '';
    tableData = data;
    data.forEach(function (item, index) {
        str += '<tr>\
                <td>'+ item.sNo + '</td>\
                <td>'+ item.name + '</td>\
                <td>'+ (item.sex ? '女' : '男') + '</td>\
                <td>'+ item.email + '</td>\
                <td>'+ (new Date().getFullYear() - item.birth) + '</td>\
                <td>'+ item.phone + '</td>\
                <td>'+ item.address + '</td>\
                <td>\
                    <button class="change" data-index='+ index + '>编辑</button>\
                    <button class="del" data-index='+ index + '>删除</button>\
                </td>\
            </tr>'
    })

    $('#student-body').html(str);
    bindTableEvent();

}
function initEditForm(data) {
    var editForm = $('#edit-student-form')[0];
    for (var prop in data) {
        if (editForm[prop]) {
            editForm[prop].value = data[prop];
        }
    }
    // console.log(data);
}

// getTableData()
function bindTableEvent(e) {

    $('.change').on('click', function (e) {
       
        var index = $(this).data('index');
        $('.model').slideDown();
        $('.model-content',).slideDown();
        initEditForm(tableData[index]); 
    });
        $('.addList').on('click', function (e) {
            e.stopPropagation();
        })
        $('.model').click(function (e) {
            $('.model').slideUp();
        });
        $('.del').on('click', function () {
            var index = $(this).data('index');
            var isDel = window.confirm('确认删除？');
            var sNo = tableData[index].sNo;
            if (isDel) {
                transferData('/api/student/delBySno', {
                    sNo: sNo
                }, function (req) {
                    alert('删除成功！');
                    $('dl > dd[data-id= list]').trigger('click');
    
                })
            }
    
        }) 

}


function getTableData(page){
    nowPage = page;
    transferData('/api/student/findByPage', {
        page:page,
        size:pageSize
    }, function (req) {

        console.log(req)
        allPage = Math.ceil(req.data.cont / pageSize);
        $('#turnPage').turnPage({
            allPage: allPage,
            curPage: page,
            callback: function(page){
                nowPage = page;
                getTableData(nowPage)

            }
        })
        rendTable(req.data.findByPage);
    })

}

function getSearchTableData(){
    transferData('/api/student/searchStudent', {
        sex: -1,
        search: searchWord,
        page: nowPage,
        size:pageSize,
    }, function(req){
        console.log(req)
        var allPage = Math.ceil(req.data.cont / pageSize);
        $('#turnPage').turnPage({
            allPage: allPage,
            curPage: nowPage,
            callback:function(page){
                nowPage = page;
                getSearchTableData();
            }
        });
    rendTable(req.data.searchList);


    })

}
// function submitFormData(data) {
    // data += '&appkey=ust_be_happy_1547734649125'
    // $.ajax({
    //     type:'get',
    //     url:'http://api.duyiedu.com/api/student/updateStudent',
    //     data:data,
    //     dataType:'json',
    //     success:function(req){
    //         if(req.status == 'success'){
    //             alert('修改成功');
    //             $('.model').slideUp();

    //         }else{
    //             alert(req.msg);
    //         }
    //     }
    // })
    // transferData('api/student/updateStudent', dada, function () {
    //     alert('修改成功');
        //             $('.model').slideUp();
//     })
// }


// function transferData(api, data, callback) {
//     if ($.type(data) == 'string') {
//        data += "&appkey=just_be_happy_1547734649125";
//     } else {
//         data = $.extend(data, {
//             appkey: 'ust_be_happy_1547734649125',
//         })
//     }
   
//     $.ajax({
//         type: 'get',
//         url: 'http://api.duyiedu.com' + api,
//         data: data,
//         dataType: 'json',
//         success: function (req) {
//             if (req.status == 'success') {
//                 callback(req);
//             } else {
//                 alert(req.msg);
//             }
    
//         }
//     })
// }

function transferData(api, data, callback) {
    if ($.type(data) == 'string') {
        data += "&appkey=just_be_happy_1547734649125";
    } else {
        data = $.extend(data, {
            appkey: 'just_be_happy_1547734649125'
        });
    }
    $.ajax({
        type: 'get',
        url: 'http://api.duyiedu.com' + api,
        data: data,
        dataType: 'json',
        success: function (req) {
            if (req.status == 'success') {
                callback(req);
            } else {
                alert(req.msg);
            }
        }
    });
}



