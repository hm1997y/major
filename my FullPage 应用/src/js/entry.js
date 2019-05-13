pageEngine.init('.wrapper', ['pink', 'pink', 'pink', 'pink'])
    .addSection('oneSection')
    .addComponent({
        type: 'base',
        className: 'title',
        width: 190,
        height: 25,
        text: '唯有美食不可辜负',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 30,
            color: '#fff',
            padding: '10px',
            textAlign: 'justify',
            fontSize: '20px',
            fontWeight: '900',
            lineHeight: '25px',
            letterSpacing: '3px',
        },
        animateIn: {
            opacity: 1,
        },
        animateOut: {
            opacity: 0,
        },
        delay: 200,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat',
        text: '带你走进四川，吃遍四川美食  follow me!!!',
        center: false,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,
            backgroundImage: 'url(./src/img/1.jpg)',
            textAlign: 'justify',

        },
        animateIn: {
            opacity: 1,
            top: 100,
            left: 50
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 1500,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat',
        center: false,
        css: {
            backgroundImage: 'url(./src/img/2.jpg)',                       
            textAlign: 'justify',
        },
        text: '先来几个开胃小菜，是不是已经感觉口水直流啦。哈哈哈!!!',
        animateIn: {
            opacity: 1,
            top: 100,
            right: 100
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 1000,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat',

        text: '',
        center: false,
        css: {
            backgroundImage: 'url(./src/img/5.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 300,
            left: '30%'
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 1500,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addSection('twoSection')
    .addSlide('2Section-one')
    .addComponent({
        type: 'base',
        className: 'eat food',
        width: 522,
        height: 336,
        text: '首先带你去吃吃四川的美味小吃，一提起小吃，最先说的就是学校天桥下面的糖油果子，刚出锅的，又甜又脆。',
        center: false,
        css: {
            left: 50,
            backgroundImage: 'url(./src/img/14.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 50,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat food',
        text: '然后是伤心凉面、凉粉，来一份又酸又辣又过瘾，再来上一碗冰凉可口的冰粉，真是爽啊！！！',
        center: false,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,
            left: 500,

            backgroundImage: 'url(./src/img/7.jpg)',
            backgroundSize: '100% 100%',
            textAlign: 'justify',
            fontSize: '18px',
            fontWeight: '900',
            lineHeight: '25px'
        },
        animateIn: {
            opacity: 1,
            top: 100,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'food',
        width: 522,
        height: 336,
        text: '',
        center: false,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,
            right: 50,

            backgroundImage: 'url(./src/img/15.jpg)',
            backgroundSize: '100% 100%',
            textAlign: 'justify',
            fontSize: '18px',
            fontWeight: '900',
            lineHeight: '25px'
        },
        animateIn: {
            opacity: 1,
            top: 300,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addSlide('2Section-2')
    .addComponent({
        type: 'base',
        className: ' eat food',
        text: '摆摆龙门阵，再来几份小吃',
        center: false,
        css: {
            left: 50,
            backgroundImage: 'url(./src/img/12.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 60,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: ' eat food',
        text: '',
        center: false,
        css: {
            left: 500,
            backgroundImage: 'url(./src/img/13.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 300,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: ' eat food',
        text: '再来一份狼牙土豆也是必须的',
        center: false,
        css: {
            right:50,
            backgroundImage: 'url(./src/img/8.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 60,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })

    .addSection('threeSection')
    .addSlide('3Section-one')
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '吃完小吃，我们一起去领略一下自然风光消消食吧',
        center: true,
        css: {
            left:60,
            backgroundImage: 'url(./src/img/22.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 30,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '呼吸一口新鲜空气，全身舒畅',
        center: true,
        css: {
            left:500,
            backgroundImage: 'url(./src/img/23.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 80,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: false,
        css: {
            right:30,
            backgroundImage: 'url(./src/img/24.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 300,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 1000,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addSlide('3Section-two')
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: true,
        css: {
            width:'350px',
            left:60,
            backgroundImage: 'url(./src/img/19.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 30,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: true,
        css: {
            width:'350px',
            left:450,
            backgroundImage: 'url(./src/img/26.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 200,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: false,
        css: {
            right:30,
            backgroundImage: 'url(./src/img/16.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 300,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 1000,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addSection('fourSection')
    .addSlide('4Section-1')
    .addComponent({
        type: 'base',
        className: 'eat',
        width: 522,
        height: 336,
        text: '玩够了，让我们来想想晚饭吃什么呢，火锅、烧烤、还是麻辣水煮鱼、回锅肉、夫妻肺片、麻辣兔肉、麻婆豆腐...',
        center: true,
        css: {
            backgroundImage: 'url(./src/img/30.gif)',
            backgroundPosition:'30px 60px',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 100,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 1000,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addSlide('4Section-2')
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: true,
        css: {
            width:'350px',
            left:60,
            backgroundImage: 'url(./src/img/21.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 30,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: true,
        css: {
            width:'350px',
            left:450,
            backgroundImage: 'url(./src/img/27.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 200,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 800,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .addComponent({
        type: 'base',
        className: 'eat ',
        text: '',
        center: false,
        css: {
            right:30,
            backgroundImage: 'url(./src/img/28.jpg)',
            textAlign: 'justify',
        },
        animateIn: {
            opacity: 1,
            top: 300,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 1000,
        event: {
            click: function () {
                alert($(this).text());
            }
        }
    })
    .load();

