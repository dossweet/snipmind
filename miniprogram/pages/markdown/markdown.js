Page({
    data: {
        cards: [],
        currentCard: 0,
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },

    onLoad: function () {
        // 静态的 Markdown 内容
        const markdownContent = `
  # 微信小程序开发入门
  微信小程序是一种不需要下载安装即可使用的应用，它实现了应用"触手可及"的梦想。
  
  # 开发环境搭建
  首先需要下载微信开发者工具，然后注册一个小程序账号。开发者工具提供了完整的 IDE，包括编辑器、调试器和模拟器。
  
  # 小程序结构
  小程序由配置文件、页面文件和逻辑文件组成。
  - app.json: 全局配置
  - app.js: 全局逻辑
  - app.wxss: 全局样式
  
  # 页面开发
  每个页面由四个文件组成：
  - WXML: 结构文件，类似于 HTML
  - WXSS: 样式文件，类似于 CSS
  - JS: 逻辑文件
  - JSON: 配置文件
  
  # 组件使用
  微信小程序提供了丰富的基础组件，如 view、text、button 等。
  还有丰富的扩展组件，如地图、视频、画布等。
  
  # 数据绑定
  WXML 中的动态数据通过 {{}} 语法进行绑定，数据来源于 Page 中的 data。
  
  # 事件处理
  通过 bind 或 catch 前缀绑定事件，如 bindtap、catchtap 等。
  
  # 生命周期
  小程序有自己的生命周期，包括 onLoad、onShow、onReady 等。
      `;

        this.parseMarkdown(markdownContent);
    },

    parseMarkdown: function (markdown) {
        const sections = [];
        const regex = /(#{1,6})\s*(.+)/g;
        let match;
        let lastIndex = 0;
        let lastTitle = null;

        while ((match = regex.exec(markdown)) !== null) {
            const [fullMatch, hashes, title] = match;
            const startIndex = match.index;

            if (lastTitle !== null) {
                sections.push({
                    title: lastTitle,
                    content: markdown.slice(lastIndex, startIndex).trim()
                });
            }

            lastTitle = title;
            lastIndex = startIndex + fullMatch.length;
        }

        if (lastTitle !== null) {
            sections.push({
                title: lastTitle,
                content: markdown.slice(lastIndex).trim()
            });
        }
        console.log('sections:', sections);
        this.setData({
            cards: sections
        });
    },

    onSwiperChange: function (e) {
        this.setData({
            currentCard: e.detail.current
        });
    }
});