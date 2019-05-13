var area = document.getElementsByClassName('area')[0];
var areaChart = echarts.init(area);
var sex = document.getElementsByClassName('sex')[0];
var sexChart = echarts.init(sex);
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
// 获取学生数据 数据格式转化
// function getAreaData() {
//     var data = changeData('http://api.duyiedu.com/api/student/findAll', {
//         appkey: 'just_be_happy_1547734649125'
//     })
//     var chartData = data.data;
//     console.log(chartData);
//     var numObj = {};
//     var legendData = [], seriesData = [];
//     chartData.forEach(function (ele, index) {
//         if (!numObj[ele.address]) {
//             numObj[ele.address] = 1;
//             legendData.push(ele.address);
//         }
//         numObj[ele.address]++;
//     });
//     console.log(legendData, numObj)
//     for (var prop in numObj) {
//         var obj = {};
//         obj.name = prop;
//         obj.value = numObj[prop];
//         seriesData.push(obj);
//     }
//     // areaChart.setOption(option);

// }
// getAreaData();
// function getSexData() {
//     var data = changeData('http://api.duyiedu.com/api/student/findAll', {
//         appkey: 'just_be_happy_1547734649125'
//     })
//     var chartData = data.data;
//     var numObj = {};
//     var legendData = ['男', '女'], seriesData = [];
//     chartData.forEach(function (ele, index) {
//         if (!numObj[ele.sex]) {
//             numObj[ele.sex] = 1;


//         } else {
//             numObj[ele.sex]++;
//         }

//     })
//     console.log(legendData, numObj[0])
//     seriesData = [{ value: numObj[0], name: '男' }, { value: numObj[1], name: '女' }];
//     // areaChart.setOption(option);
// }


var obj = {
    init: function () {
        this.option = {
            title: {
                text: '',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        this.getAreaData();
        this.getSexData();

    },
    getAreaData: function () {
        var self = this;
        var data = changeData('http://api.duyiedu.com/api/student/findAll', {
            appkey: 'just_be_happy_1547734649125'
        })
        var chartData = data.data;
        console.log(chartData);
        var numObj = {};
        var legendData = [], seriesData = [];
        chartData.forEach(function (ele, index) {
            if (!numObj[ele.address]) {
                numObj[ele.address] = 1;
                legendData.push(ele.address);
            }
            numObj[ele.address]++;
        });
        console.log(legendData, numObj)
        for (var prop in numObj) {
            var obj = {};
            obj.name = prop;
            obj.value = numObj[prop];
            seriesData.push(obj);
        }
        console.log(self.option)
        this.option.title.text = '学生地区分布统计';
        this.option.legend.data = legendData;
        this.option.series[0].data = seriesData;
        var option = this.option;
        areaChart.setOption(option);
    },
    getSexData: function () {
        var data = changeData('http://api.duyiedu.com/api/student/findAll', {
            appkey: 'just_be_happy_1547734649125'
        })
        var chartData = data.data;
        var numObj = {};
        var legendData = ['男', '女'], seriesData = [];
        chartData.forEach(function (ele, index) {
            if (!numObj[ele.sex]) {
                numObj[ele.sex] = 1;


            } else {
                numObj[ele.sex]++;
            }

        })
        console.log(legendData, numObj[0])
        seriesData = [{ value: numObj[0], name: '男' }, { value: numObj[1], name: '女' }];
        this.option.title.text = '学生性别比例统计';
        this.option.legend.data = legendData;
        this.option.series[0].data = seriesData;
        var option = this.option;
        sexChart.setOption(option);
    }



}

obj.init();

// var option = {
//     title : {
//         text: '某站点用户访问来源',
//         subtext: '纯属虚构',
//         x:'center'
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//     },
//     series : [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius : '55%',
//             center: ['50%', '60%'],
//             data:[
//                 {value:335, name:'直接访问'},
//                 {value:310, name:'邮件营销'},
//                 {value:234, name:'联盟广告'},
//                 {value:135, name:'视频广告'},
//                 {value:1548, name:'搜索引擎'}
//             ],
//             itemStyle: {
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//         }
//     ]
// };
// areaChart.setOption(option);