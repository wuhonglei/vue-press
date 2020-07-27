module.exports = {
    title: 'aTrust帮助手册',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        // 顶部导航
        nav: [{
            text: '前端积累',
            link: '/accumulate/JS/test.md'
        }, { // 内部链接以 docs 为根目录
            text: '前端算法',
            link: '/algorithm/simple/test.md'
        }, { // 外部链接
            text: '博客',
            link: 'http://obkoro1.com/'
        }, { // 下拉列表
            text: 'Github',
            items: [{
                    text: 'Github 地址',
                    link: 'https://github.com/OBKoro1/simple/test.md'
                },
                {
                    text: '算法仓库',
                    link: 'https://github.com/OBKoro1/Brush_algorithm'
                }
            ]
        }],
        sidebar: { // 侧边导航
            '/accumulate/': [{
                title: '侧边栏下拉框菜单1',
                children: [
                    '/accumulate/JS/test', // 以 docs 为根目录来查找文件
                    // 上面地址查找的是: docs>accumulate>JS>test.md 文件
                    // 文件名后自动加.md后缀，每个子选项的标题通过解析 md 文件的第一个 h1/h2/h3 得到
                ]
            }],
            // docs 目录下的 algorithm 文件夹，这是第二组侧边栏
            '/algorithm/': [{
                title: '第二组侧边栏下拉框的标题1',
                children: [
                    ['/algorithm/simple/test', '测试']
                ]
            }]
        }
    }
};