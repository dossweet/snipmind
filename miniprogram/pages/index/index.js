Page({
    data: {
        cards: []
    },

    onLoad: function() {
        // 示例 Markdown 文本
        const markdownText = `
# 标题1
这是第一段内容

# 标题2
这是第二段内容，内容较少

# 标题3
这也是一段较少的内容

# 标题4
这是第四段内容，内容比较多，需要单独作为一张卡片
这是更多的内容
还有更多的内容
    `;

        this.parseMarkdown(markdownText);
    },

    parseMarkdown: function(text) {
        const lines = text.split('\n').filter(line => line.trim());
        let currentCard = { sections: [] };
        let currentSection = null;
        let contentLength = 0;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.startsWith('# ')) {
                if (currentSection) {
                    currentCard.sections.push(currentSection);
                }

                currentSection = {
                    title: line.substring(2),
                    content: ''
                };

                // 如果当前卡片内容已经较多，创建新卡片
                if (contentLength > 100) {
                    this.data.cards.push(currentCard);
                    currentCard = { sections: [] };
                    contentLength = 0;
                }
            } else if (currentSection) {
                currentSection.content += (currentSection.content ? '\n' : '') + line;
                contentLength += line.length;
            }
        }

        if (currentSection) {
            currentCard.sections.push(currentSection);
        }
        if (currentCard.sections.length > 0) {
            this.data.cards.push(currentCard);
        }

        this.setData({
            cards: this.data.cards
        });
    }
});