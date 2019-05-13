



// 封装addDropdown方法用于插入下拉菜单
$('#myJD').addDropdown({
    href: '#',
    title: "我的京东",
    width: 126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('#procurement').addDropdown({
    title: '企业采购',
    width: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name:'工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});


$('#service').addDropdown({
    title: '客户服务',
    width: 70,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    title: '网站导航',
    direction: 'x',
    menuList: [{
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }]
})

$('#city'). addDropcity({
    title:'地区',
    width:300,
    menuList: [{
        title: '',
        itemWidth: 85,
        items: [{
            name: '北京'
        }, {
            name: '上海'
        }, {
            name: '广东'
        }, {
            name: '深圳'
        }, {
            name: '四川'
        }, {
            name: '西安'
        }, {
            name: '浙江'
        }, {
            name: '成都'
        }, {
            name: '厦门'
        }, {
            name: '福建'
        }, {
            name: '海南'
        }, {
            name: '湖南'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '普威'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }]
})
$('#slider').round({
    imgList: ["http://img1.360buyimg.com/da/jfs/t1/19069/15/6476/98181/5c539ef8E761d1f78/b55e061e816683ad.jpg",
    "http://img1.360buyimg.com/pop/jfs/t1/23119/39/1904/49543/5c176baaE9cb004c2/7d9e6f6082f55966.jpg", 
   "http://m.360buyimg.com/babel/jfs/t1/7929/16/14126/98815/5c54180bE41403b92/368b7051671df8aa.jpg",
   "http://m.360buyimg.com/babel/jfs/t1/32570/26/1526/78591/5c4ff5f9E24c691f3/29399169307c29f1.jpg"],
})