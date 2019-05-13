var tableData = [];
var model = document.getElementsByClassName('model')[0];
var curPage = 1;
var allPage = 10;
var pageSize = 10;

function init() {
    var data = changeData('http://api.duyiedu.com/api/student/findAll', 'appkey=just_be_happy_1547734649125');
    console.log(data)
    tableData = data.data;
    allPage = Math.ceil(tableData.length / pageSize);
    fillPage(curPage, allPage);
    var data = tableData.splice(0, pageSize);
    renderTableData(data);
    search();


}
init();

function bindEvent() {
    var dl = document.getElementById('left');
    var drop = document.getElementById('drop');
    console.log(123)
    console.log(dl)
    // active.classList.remove('active');
    dl.onclick = function (e) {
        console.log(e.target.tagName, e.target)
        if (e.target.tagName != 'DD') {
            return false;
        }
        initContent(e.target);
        initMenu();        
        e.target.classList.add('active');

    }
    var dropBtn = document.getElementsByClassName('dropBtn')[0];
    var dropList = document.getElementsByClassName('dropList')[0];
    dropBtn.onclick = function () {
        dropList.style.display = 'block';

    }
    drop.onclick = function (e) {
        console.log(e.target.tagName, e.target)
        if (e.target.tagName != 'DD') {
            return false;
        }
        initContent(e.target);
        // initMenu();        
        // e.target.classList.add('active');

    }
    dropList.onmouseleave = function () {
        dropList.style.display = 'none';
    }
    // 表单编辑按钮必须要在表格数据渲染完成之后
    // var editSubmit = document.getElementById('edit-submit');
    // var editForm = document.getElementById('edit-student-form');
    // editSubmit.onclick = function(e){
    //     e.preventDefault();
    //     // getFormData(editForm);
    //     // 参数传递 多个参数 用对象拼接
    //     var obj = Object.assign({
    //         appkey:'just_be_happy_1547734649125'
    //     }, getFormData(editForm));
    //     console.log(getFormData(editForm))
    //     var result = changeData('http://api.duyiedu.com/api/student/updateStudent', obj);
    //     console.log(result);
    //     if(result.status == 'success'){
    //         editForm.reset();
    //         alert('修改成功');
    //         model.classList.remove('show');
    //         renderTableData();

    //     }else{
    //         alert(result.msg);
    //     }

    // }
}
bindEvent();
//初始化左侧导航
function initMenu() {
    var active = document.getElementsByClassName('active');
    var len = active.length;
    console.log(len, '========',active[0])
    for (var i = 0; i < len; i++) {
        active[i].classList.remove('active');
    }
}
//初始化右侧内容区
function initContent(dom) {
    var id = dom.getAttribute('data-id');
    var showContent = document.getElementById(id);
    var content = document.getElementsByClassName('content');
    var len = content.length;
    for (var i = 0; i < len; i++) {
        content[i].style.display = 'none';
    }
    showContent.style.display = 'block';
}
//获取数据
function changeData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object') {
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}

// 渲染表格数据
function renderTableData(data) {
    // var data = changeData('http://api.duyiedu.com/api/student/findAll', 'appkey=just_be_happy_1547734649125');
    // console.log(data.data)
    var table = document.getElementById('student-body');
    var str = '';
    // tableData = data.data;
    var len = data.length;


    for (var i = 0; i < len; i++) {
        str += '<tr>\
        <td>'+ data[i].sNo + '</td>\
        <td>'+ data[i].name + '</td>\
        <td>'+ (data[i].sex ? '女' : '男') + '</td>\
        <td>'+ data[i].email + '</td>\
        <td>'+ (new Date().getFullYear() - data[i].birth) + '</td>\
        <td>'+ data[i].phone + '</td>\
        <td>'+ data[i].address + '</td>\
        <td>\
            <button class="change" data-index='+ i + '>编辑</button>\
            <button class="del" data-index='+ i + '>删除</button>\
        </td>\
    </tr>';
    }
    // console.log(str)
    table.innerHTML = str;
    bindTaleEvent();
}
// renderTableData()


// 搜索查询学生信息

function search() {
    var inp = document.getElementById('inp');
    var searchBtn = document.getElementById('search-btn');
    var studentForm = document.getElementById('list');
    searchBtn.onclick = function (e) {
        var value = inp.value;
        curPage = 1;
        // console.log(value)

        if (!value) {
            renderTableData();
            return false;
        }
        var result = changeData('http://api.duyiedu.com/api/student/searchStudent', {
            appkey: 'just_be_happy_1547734649125',
            sex: -1,
            search: value,
            page: curPage,
            size: pageSize,

        })
        console.log(result)
        if (result.status = 'success') {
            var data = result.data;
            allPage = Math.ceil(data.cont / pageSize);
            tableData = result.data.searchList;
            fillPage(curPage, allPage);
            renderTableData(tableData);
            edit();


        } else {
            alert(result.msg);
        }


    }
}


// 编辑删除按钮
function edit() {
    var modifiled = document.getElementsByClassName('change');
    var del = document.getElementsByClassName('del');
    var modelContent = document.getElementsByClassName('model-content')[0];
    var len = modifiled.length;
    for (var i = 0; i < len; i++) {
        // console.log(modifiled[i])

        modifiled[i].onclick = function (e) {
            console.log(e)
            var index = e.target.getAttribute('data-index');
            // console.log(index);
            console.log(tableData)
            model.classList.add('show');
            modelContent.style.display = 'block';
            getEditData(tableData[index]);

        }
        modelContent.onclick = function (e) {
            e.stopPropagation();

        }
        model.onclick = function (e) {
            // e.preventDefault();
            model.classList.remove('show')
        }
        del[i].onclick = function (e) {
            var isDel = window.confirm('确认删除？');
            var list = document.getElementById('list');
            console.log(isDel);
            if (!isDel) {
                return false;
            }
            var index = e.target.getAttribute('data-index');
            var result = changeData('http://api.duyiedu.com/api/student/delBySno', {
                appkey: 'just_be_happy_1547734649125',
                sNo: tableData[index].sNo

            })
            if (result.status == 'success') {
                alert('删除成功');
                allPage = Math.ceil(tableData.cont / pageSize);
                fillPage(curPage, allPage);
                renderTableData(tableData);
                location.reload();

            } else {
                alert(result.msg)
            }
        }



    }
}
edit();

// 获取编辑表单数据
function getEditData(data) {
    var editForm = document.getElementById('edit-student-form');
    console.log(editForm)
    for (var prop in data) {
        if (editForm[prop]) {
            editForm[prop].value = data[prop];
            console.log(data[prop], editForm[prop].value)
        }
    }

}

// 数据修改时获取表单数据
function getFormData(form) {
    var name = form.name.value;
    var sex = form.sex.value;
    var sNo = form.sNo.value;
    var email = form.email.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value;
    var student = {
        name: name,
        sex: sex,
        sNo: sNo,
        email: email,
        birth: birth,
        phone: phone,
        address: address,
    }
    return student;

}
// 修改学生信息
function bindTaleEvent() {
    var editSubmit = document.getElementById('edit-submit');
    var editForm = document.getElementById('edit-student-form');
    editSubmit.onclick = function (e) {
        e.preventDefault();
        // getFormData(editForm);
        // 参数传递 多个参数 用对象拼接
        var obj = Object.assign({
            appkey: 'just_be_happy_1547734649125'
        }, getFormData(editForm));
        console.log(getFormData(editForm))
        var result = changeData('http://api.duyiedu.com/api/student/updateStudent', obj);
        console.log(result);
        if (result.status == 'success') {
            editForm.reset();
            alert('修改成功');
            model.classList.remove('show');
            renderTableData(tableData);

        } else {
            alert(result.msg);
        }

    }
}

// 添加一个学生信息
function addStudent() {
    var addForm = document.getElementById('add-student-submit');
    console.log(addForm)
    var addSubmit = document.getElementById('add-submit');
    var list = document.getElementById('list');
    curPage = 1;
    addSubmit.onclick = function (e) {
        // e.preventDefault();
        var obj = Object.assign({
            appkey: 'just_be_happy_1547734649125'
        }, getFormData(addForm));
        var result = changeData('http://api.duyiedu.com/api/student/addStudent', obj);
        if (result.status == 'success') {
            addForm.reset();
            alert('添加成功');
            // list.classList.add('active');
            // window.location.reload();
            allPage = Math.ceil(data.cont / pageSize);
            fillPage(curPage, allPage);
            renderTableData(tableData);


        } else {
            alert(result.msg);
        }

    }
}




addStudent();


// var turnPage = document.getElementsByClassName('turnPage')[0];
function fillPage(curPage, allPage) {
    var wrap = document.getElementById('turnPage');
    var prev = document.getElementsByClassName('prev')[0];
    wrap.innerHTML = null;
    if (curPage > 1) {

        var prev = document.createElement('li');
        prev.classList.add('prev');
        prev.innerText = '上一页';
        wrap.appendChild(prev);
        // str = '<li class="prev">上一页</li>';
        // wrap.innerHTML = str;
    } else if (curPage < 1) {
        prev.classList.remove('prev');

    }
    if (curPage != 1 && curPage - 2 > 1) {
        var li = document.createElement('li');
        li.classList.add('tab-number');
        li.innerText = '1';
        wrap.appendChild(li);
        // str = '<li class="tab-number">1</li>';
        // wrap.innerHTML = str;
    }
    if (curPage - 2 > 2) {
        // str = '<span>...<span>';
        // wrap.innerHTML = str;
        var dot = document.createElement('span');
        dot.innerText = '...';
        wrap.appendChild(dot);
    }

    // var cen = '';
    for (var i = curPage - 2; i <= curPage + 2; i++) {
        if (i > 0 && i <= allPage) {
            //   += '<li class="tab-number">' + i +'</li>';
            var li = document.createElement('li');
            li.classList.add('tab-number');
            li.innerText = i;
            console.log(curPage, i)
            wrap.appendChild(li);
            if (i == curPage) {
                li.classList.add('cur-page');
            }

        }
    }

    if (allPage - curPage > 3) {
        // str = '<span>...<span>';
        // wrap.innerHTML = str;
        var dot = document.createElement('span');
        dot.innerText = '...';
        wrap.appendChild(dot);

    }
    if (curPage + 2 < allPage) {
        // str = '<li class="tab-number>'+ allPage +'</li>';
        // wrap.innerHTML = str;
        // for(var i = curPage;i <= curPage + 2; i++){
        var last = document.createElement('li');
        last.classList.add('tab-number');
        last.innerText = allPage;
        wrap.appendChild(last);
    }
    if (curPage < allPage) {
        // str = '<li class="next">下一页</li>';
        var next = document.createElement('li');
        next.classList.add('next');
        next.innerText = '下一页';
        wrap.appendChild(next);
    } else {
        wrap.classList.remove('next');
    }

    pageBindEvent();
}
function pageBindEvent() {
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];
    var tab = document.getElementsByClassName('tab-number');
    if (prev) {
        prev.onclick = function (e) {
            curPage--;
            // console.log(this.innerText);
            var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
                appkey: 'just_be_happy_1547734649125',
                page: curPage,
                size: pageSize
            })
            allPage = Math.ceil(result.data.cont / pageSize);
            fillPage(curPage, allPage);
            renderTableData(result.data.findByPage);
            edit();

            // change();
        }
    }
    if (next) {
        next.onclick = function (e) {
            curPage++;
            var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
                appkey: 'just_be_happy_1547734649125',
                page: curPage,
                size: pageSize
            })
            allPage = Math.ceil(result.data.cont / pageSize);
            // console.log(this.innerText)
            fillPage(curPage, allPage);
            renderTableData(result.data.findByPage);
            edit();

            // change();
        }
    }


    for (var i = 0; i < tab.length; i++) {
        // console.log(tab[i].innerText)
        // tab[i].innerText = curPage;
        // this.change();
        tab[i].onclick = function (e) {
            curPage = parseInt(e.target.innerText);
            // pageData(curPage);
            // console.log(curPage, pageData(2))
            var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
                appkey: 'just_be_happy_1547734649125',
                page: curPage,
                size: pageSize
            })
            allPage = Math.ceil(result.data.cont / pageSize);
            fillPage(curPage, allPage);
            renderTableData(result.data.findByPage);
        }
    }
}


// 点击页码渲染当前页

// 获取当前页的数据
// function pageData(curPage) {
//     var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
//         appkey: 'just_be_happy_1547734649125',
//         page: curPage,
//         size: pageSize
//     })

//     allPage = Math.ceil(result.data.cont / pageSize);

// }


// function pageSearch() {
//     console.log('======')
//     var page = document.getElementsByClassName('tab-number');
//     var prev = document.getElementsByClassName('prev')[0];
//     var next = document.getElementsByClassName('next')[0];
//     console.log(page.length, page)
//     for (var i = 0; i < page.length; i++) {
//         page[i].onclick = function (e) {
//             curPage = parseInt(e.target.innerText);
//             console.log(curPage)
//             var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
//                 appkey: 'just_be_happy_1547734649125',
//                 page: curPage,
//                 size: pageSize
//             })
//             // console.log(result)
//             allPage = Math.ceil(result.data.cont / pageSize);
//             // console.log(typeof allPage, typeof curPage)
//             console.log(result.data.findByPage, curPage, allPage)
//             fillPage(curPage, allPage);
//             renderTableData(result.data.findByPage);
//             console.log('======')

//             // fillPage(curPage, allPage);
//         }
//         if(prev){
//             prev.onclick = function(e){
//                 curPage = curPage - 1;
//                 var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
//                     appkey: 'just_be_happy_1547734649125',
//                     page: curPage,
//                     size: pageSize
//                 })
//                 console.log('=====', curPage, allPage)
//                 fillPage(curPage, allPage);
//                 renderTableData(result.data.findByPage);

//             }
//         }

//         if(next){
//             next.onclick = function(e){
//                 curPage = curPage + 1;
//                 var result = changeData('http://api.duyiedu.com/api/student/findByPage', {
//                     appkey: 'just_be_happy_1547734649125',
//                     page: curPage,
//                     size: pageSize
//                 })
//                 console.log('=====', curPage, allPage)
//                 renderTableData(result.data.findByPage);                
//                 fillPage(curPage, allPage);

//             }
//         }
//     }
// }


// pageSearch();








