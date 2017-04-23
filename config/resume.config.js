export default {
    name : '孙喵喵',
    intension : 'Web前端工程师',

    basicInfo : {
        email : 'sevenskey@163.com',
        phone : '27182818284',
        links : {
            Github : 'http://github.com/sevenskey',
            'Photoshop Works' : 'http://photo.163.com/sevenskey/',
        },
    },

    education : {
        school : '济南大学',
        duration : '2014-2018',
        major : '电子信息科学与技术',
        degree : '本科',
        ranking : '40%',
        awards : [
        ],
    },

    language : {
        cet4 : true, // 填写具体的成绩会显示成绩，填写 true 则仅显示 CET4，填写 false 不显示
        cet6 : '',
        details : [
            '能够阅读英文文档',
        ],
    },

    experience : [
        {
            title : '创客贴',
            duration: '2017.02-2017.03',
            role : 'Web前端开发（实习）',
            description : '完成创客贴新版首页架构设计和编写',
            source : 'http://github.com/sevenskey/chuangkit_new_index',
            demo : 'http://sevenskey.xyz/chuangkit_new_index',
            details : [
                '实现了较为复杂的动画效果',
                '解决了动画性能问题',
                '实现了一个动画控制库'
            ],
        },
        {
            title : 'SResume',
            duration: '2017.04',
            role : '个人项目',
            description : '网页简历生成器',
            source : 'http://github.com/sevenskey/SResume',
            demo : 'http://sevenskey.xyz/resume',
            details : [
                'Vue+Webpack练习作',
                '由JSON生成简历',
            ],
        },
    ],

    skills : [
        {
            title : 'Web前端',
            details : [
                '能够编写模块化的、可维护性良好的代码',
                '熟悉HTML5&CSS3，包括但不限于Canvas、Audio、WebAudioAPI，编写过多个实验性小项目',
                '熟练使用Vue，并了解其基本原理',
                '了解前端自动化，能够使用Webpack构建简单的前端脚手架',
            ],
        },
        {
            title : 'Web后端',
            details : [
                '了解基本的后端知识，使用PHP实现过一个简单的博客程序',
                '能够使用Node、Python编写简单的爬虫',
            ],
        },
        {
            title : '其他',
            details : [
                '日常使用ArchLinux，熟练使用Vim，熟悉常用命令和配置，能编写简单的Bash脚本',
                '具备一定的审美能力，能使用Photoshop完成简单设计',
                '熟悉Git/SVN常用命令，有协作开发经验',
                '科学上网',
            ],
        }
    ],

    selfe : {
        show : true, // 是否显示该栏
        content : [
            '乐于尝试新事物，对技术充满热情',
            '对代码质量非常执着，要求自己的代码必须达到眼界内最高程度的优雅',
        ],
    } 
}
