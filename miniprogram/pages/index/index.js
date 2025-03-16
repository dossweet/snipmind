const app = getApp();
const stylesMap = {
  h2w: {
    fontFamily: "PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif",
    fontWeight: 300,
    fontSize: "32rpx",
    lineHeight: 1.8,
    wordWrap: "break-word",
    wordBreak: "normal",
    textAlign: "justify",
  },

  h2w__main: {
    margin: "0 40rpx 40rpx 40rpx",
    paddingTop: "40rpx",
  },

  h2w__h1: {
    fontWeight: "bold",
    borderBottomStyle: "double",
    borderBottomWidth: "6rpx",
    fontSize: "42rpx",
    paddingTop: "10rpx",
    paddingBottom: "10rpx",
    marginBottom: "20rpx",
  },

  h2w__h2: {
    fontWeight: "bold",
    borderBottomStyle: "solid",
    borderBottomWidth: "1rpx",
    fontSize: "40rpx",
    paddingTop: "8rpx",
    paddingBottom: "8rpx",
    marginBottom: "18rpx",
  },

  h2w__h3: {
    fontWeight: "bold",
    fontSize: "38rpx",
    paddingTop: "6rpx",
    paddingBottom: "6rpx",
    marginBottom: "12rpx",
  },

  h2w__h4: {
    fontWeight: "bold",
    fontSize: "36rpx",
    paddingTop: "4rpx",
    paddingBottom: "4rpx",
    marginBottom: "12rpx",
  },

  h2w__h5: {
    fontWeight: "bold",
    fontSize: "34rpx",
    paddingTop: "2rpx",
    paddingBottom: "2rpx",
    marginBottom: "12rpx",
  },

  h2w__h6: {
    fontWeight: "bold",
    marginBottom: "12rpx",
  },

  h2w__span: { display: "inline" },
  h2w__b: { display: "inline", fontWeight: "bold" },
  h2w__strong: { display: "inline", fontWeight: "bold" },
  h2w__i: { display: "inline", fontStyle: "italic" },
  h2w__em: { display: "inline", fontStyle: "italic" },
  h2w__code: { display: "inline", fontFamily: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace` },
  h2w__sub: { display: "inline", fontSize: "75%", position: "relative", bottom: "-0.25em" },
  h2w__sup: { display: "inline", fontSize: "75%", position: "relative", top: "-0.5em" },

  h2w__textParent: { display: "inline" },
  h2w__viewParent: { display: "inline" },
  h2w__rich_textParent: { overflowX: "auto" },

  h2w__tableParent: { width: "100%", overflowX: "auto" },
  h2w__table: {
    width: "99.99%",
    borderCollapse: "collapse",
    borderSpacing: "0",
    display: "table",
    marginBottom: "40rpx",
    whiteSpace: "nowrap",
  },
  "h2w__table .h2w__tr:nth-child(2n)": {
    backgroundColor: "red",
  },

  h2w__th: { fontWeight: "bold" },
  h2w__td: {
    padding: "8rpx 16rpx",
    fontSize: "28rpx",
    borderWidth: "1rpx",
    borderStyle: "solid",
    display: "table-cell",
  },

  h2w__pre: {
    padding: "10rpx 14rpx 10rpx 10rpx",
    fontSize: "28rpx",
    wordBreak: "normal",
    borderWidth: "1rpx",
    borderStyle: "solid",
    marginBottom: "40rpx",
    whiteSpace: "nowrap",
    overflowX: "auto",
    tabSize: 4,
    display: "block",
  },
  h2w__code: {
    padding: "4rpx 8rpx",
    margin: "0 4rpx",
    borderWidth: "1rpx",
    borderStyle: "solid",
    borderRadius: "8rpx",
    fontSize: "80%",
    overflowX: "auto",
  },

  h2w__ul: { marginBottom: "40rpx", paddingLeft: "1rem", listStyleType: "disc" },
  h2w__ol: { marginBottom: "40rpx", paddingLeft: "1rem", listStyleType: "decimal" },

  h2w__p: { marginBottom: '20rpx' },
  h2w__blockquote: {
    borderLeftWidth: "8rpx",
    borderLeftStyle: "solid",
    padding: "0 20rpx",
  },

  h2w__s: { textDecoration: "line-through" },
  h2w__strike: { textDecoration: "line-through" },
  h2w__del: { textDecoration: "line-through" },

  h2w__ins: { textDecoration: "underline" },
  h2w__u: { textDecoration: "underline" },

  h2w__a: {
    margin: "0 8rpx",
    borderBottomWidth: "1rpx",
    borderBottomStyle: "solid",
    lineHeight: 1,
  },

  h2w__hr: {
    height: "8rpx",
    margin: "40rpx 0",
  },

  h2w__g_emoji: {
    margin: "0 0.1em",
    fontFamily: `"Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },

  image: {
    maxWidth: "100%",
    height: "auto",
    verticalAlign: "middle",
  },

  video: {
    width: "100%",
    height: "220px",
    fontSize: 0,
    margin: "10rpx auto",
  },

  h2w__lineNum: {
    textAlign: "right",
    float: "left",
    padding: 0,
    margin: "0 1em 0 0",
  },

  h2w__lineNumLine: {
    listStyle: "none",
  },
};

Page({
  data: {
    content: '',
    exampleContent: `## 什么是SnipMind
SnipMind，中文意为：知识切片，指的是将markdown格式的文章内容，以卡片的形式进行展示。

### 如何生成知识切片
您只需要上传markdown格式的文章，我们会帮您智能转换。

### 如何分享知识切片
您可以选择想要分享的卡片集或单张卡片，我们会帮您组合成图片。

## 关于作者
字节跳动前端工程师，一个有双下巴的妹子。热爱技术，热爱前端，喜欢折腾和尝试所有新鲜玩意儿。欢迎添加作者vx：dossweet，可以帮你 debug，也能畅聊 AI。`,
    showExampleContent: true,
    showCards: false, // 控制是否显示卡片
    current: 0, // 当前显示的卡片索引
    cardID: '',
    cardList: [], // 卡片列表
    activeDotIndices: [0, 1, 2, 3, 4], // 当前活跃的指示点索引
    activeDotIndex: 0, // 当前活跃的指示点
    shareTitle: '',
    shareContent: '',
    sharePath: '',
    pageLoading: true,
    shareImagePath: '', // 分享图片路径
    isShareReady: false,
    showSharePanel: false, // 控制分享面板显示
    userInfo: {}, // 用户信息
    hasUserInfo: false, // 是否已获取用户信息
    canIUseGetUserProfile: false, // 是否可以使用getUserProfile接口
    canvasWidth: 345,
    canvasHeight: 360,
    contentWidth: 310,
  },

  onLoad: function (options) {
    const { pageLoading } = this.data;
    const { cardID = '' } = options;
    if (pageLoading) {
      wx.showLoading({
        title: '加载中...', // 提示文本
        mask: true // 是否显示透明蒙层，防止触摸穿透
      });
    }
    // 检查是否可以使用getUserProfile接口
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }

    // 确保分享功能可用
    wx.showShareMenu({
      withShareTicket: true
    })

    // 尝试获取缓存中的用户信息
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      });
    } else {
      // 如果没有缓存的用户信息，尝试自动获取
      this.getUserInfo();
    }
    if (cardID.length > 0) {
      // 展示分享过来的卡片
      this.showShareCard(cardID);
    } else {
      this.setData({
        pageLoading: false
      })
      wx.hideLoading();
    }
  },

  // 检测数据库中是否存在该卡片
  showShareCard: function (cardID = '') {
    // 读取存储到云数据库中的指定卡片
    wx.cloud.callFunction({
      name: 'card_manage',
      data: { operationType: 'QUERY', cardID },
      success: res => {
        wx.hideLoading();
        const { data, success } = res.result;
        if (success) {
          this.setData({ cardList: data.card_content, showCards: true, pageLoading: false });
        }
      },
      fail: err => {
        wx.hideLoading();
        this.setData({ showCards: false, pageLoading: false });
        console.error('调用失败:', err)
      }
    });
  },

  // 获取用户信息
  getUserProfile: function () {
    if (this.data.canIUseGetUserProfile) {
      // 使用新接口
      wx.getUserProfile({
        desc: '用于完善用户资料',
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
          // 缓存用户信息
          wx.setStorageSync('userInfo', res.userInfo);
        },
        fail: (res) => {
          console.log(res);
        }
      });
    } else {
      // 使用旧接口（已不推荐）
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => {
                this.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                });
                // 缓存用户信息
                wx.setStorageSync('userInfo', res.userInfo);
              }
            });
          }
        }
      });
    }
  },

  // 标题点击事件处理
  onTitleClick: function () {
    // 只有在卡片模式下才切换回输入框模式
    if (this.data.showCards) {
      // 直接切换回输入框模式，无需确认
      this.setData({
        showCards: false
      });
    }
  },

  // 文本输入事件处理
  onContentInput: function (e) {
    this.setData({
      content: e.detail.value
    });
  },

  // 隐藏示例
  onExampleContentTap: function () {
    this.setData({
      showExampleContent: false
    })
  },

  // 提交按钮点击事件
  onSubmit: function () {
    wx.showLoading({
      title: '处理中...',
    })
    const content = this.data.content.length > 0 ? this.data.content : this.data.exampleContent;
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getMarkdownSections',
      data: {
        markdownText: content,
        transferType: 'split'
      }
    }).then(res => {
      if (res.result.success) {
        const sections = res.result.sections.split('---').filter(Boolean);
        // const sections = res.result.sections;
        if (sections.length === 0) {
          wx.hideLoading();
          wx.showToast({
            title: '内容处理失败',
            icon: 'none'
          });
          return;
        }
        const sectionsFormat = sections.map((item) => {
          const section = app.towxml(item, 'markdown');
          const richText = this.convertTowxmlToRichText(section);
          return {
            originSection: item,
            section,
            richText,
            selected: true
          };
        });
        // 更新数据，显示轮播卡片
        this.setData({
          cardList: sectionsFormat,
          showCards: true,
          current: 0,
          activeDotIndex: 0
        });

        wx.hideLoading();

        // 显示成功提示
        wx.showToast({
          title: `已生成${sectionsFormat.length}张卡片`,
          icon: 'success'
        });
      } else {
        this.setData({ isLoading: false });
        wx.showToast({
          title: '分割失败',
          icon: 'none',
          duration: 2000
        });
      }
    }).catch(err => {
      console.error('调用失败:', err);
      this.setData({ isLoading: false });

      wx.showToast({
        title: '调用失败',
        icon: 'none',
        duration: 2000
      });
    });
  },

  // 格式化Markdown内容
  formatMarkdown: function (content) {
    if (!content) return '';

    // 1. 去除多余的空格和制表符
    let formatted = content.replace(/\t/g, '    '); // 将制表符替换为4个空格

    // 2. 规范化换行符
    formatted = formatted.replace(/\r\n/g, '\n'); // 将Windows换行符转换为Unix换行符

    // 3. 处理段落：确保段落之间有空行
    formatted = formatted.replace(/\n{3,}/g, '\n'); // 将多个连续换行符替换为一个

    // 4. 处理标题：确保标题前有空行
    formatted = formatted.replace(/([^\n])\n(#{1,6}\s)/g, '$1\n\n$2');

    // 4.1 修复：确保标题格式正确（标题符号和文本之间有空格）
    // 这一步不再需要，因为我们将完全删除#号

    // 4.2 修复：确保标题后有空行
    formatted = formatted.replace(/(^#{1,6}\s.+)(\n[^#\n])/gm, '$1\n\n$2');

    // 4.3 新增：删除标题前的所有#号，只保留标题文本
    formatted = formatted.replace(/^(#{1,6})\s+(.+)$/gm, function (match, hashes, titleText) {
      // 完全删除#号，只保留标题文本
      return titleText;
    });

    // 5. 处理列表：确保列表项前有正确的空格
    formatted = formatted.replace(/^\s*(-|\*|\+|\d+\.)\s*/gm, '$1 ');

    // 6. 处理引用块：确保引用块前有空行
    formatted = formatted.replace(/([^\n])\n(>\s)/g, '$1\n\n$2');

    // 7. 处理代码块：确保代码块前后有空行
    formatted = formatted.replace(/([^\n])\n(```)/g, '$1\n\n$2');
    formatted = formatted.replace(/(```)\n([^\n])/g, '$1\n\n$2');

    // 8. 去除行首和行尾的空格
    formatted = formatted.split('\n').map(line => line.trim()).join('\n');

    return formatted;
  },

  // 处理 swiper 切换事件
  onSwiperChange: function (e) {
    const current = e.detail.current;
    const totalCards = this.data.cardList.length;

    // 计算当前显示的5个指示点对应的卡片索引范围
    let startDisplayIndex = Math.max(0, Math.min(current - 2, totalCards - 5));

    // 计算当前卡片在显示的5个指示点中的索引
    const activeDotIndex = current - startDisplayIndex;

    // 计算5个指示点对应的卡片索引
    const activeDotIndices = [0, 1, 2, 3, 4].map(i => startDisplayIndex + i);

    // 更新当前卡片索引和活跃指示点
    this.setData({
      current: current,
      activeDotIndex: activeDotIndex,
      activeDotIndices: activeDotIndices
    });
  },

  // 点击指标点切换到对应卡片（当卡片数量小于等于4时使用）
  switchToCard: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    });
  },

  // 获取指示点的样式类（当卡片数量大于4时使用）
  getIndicatorClass: function (dotIndex) {
    // 直接使用activeDotIndex来判断是否激活
    return dotIndex === this.data.activeDotIndex ? 'active' : '';
  },

  // 点击指标点切换到对应区间的卡片（当卡片数量大于4时使用）
  switchToIndicator: function (e) {
    const index = e.currentTarget.dataset.index;
    const targetCardIndex = this.data.activeDotIndices[index];

    // 切换到目标卡片
    if (targetCardIndex !== undefined && targetCardIndex < this.data.cardList.length) {
      this.setData({
        current: targetCardIndex
      });
    }
  },

  // 切换卡片选中状态
  toggleCardSelection: function (e) {
    const index = e.currentTarget.dataset.index;
    const cardList = this.data.cardList;

    // 更新选中状态
    cardList[index].selected = !cardList[index].selected;

    this.setData({
      cardList: cardList
    });
  },

  // 复制单张卡片内容
  copyCardContent: function (e) {
    const index = e.currentTarget.dataset.index || this.data.current;
    const cardContent = this.formatMarkdown(this.data.cardList[index].originSection || '');
    // 复制到剪贴板
    wx.setClipboardData({
      data: cardContent,
      success: () => {
        wx.showToast({
          title: '内容已复制',
          icon: 'success',
          duration: 2000
        });
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 复制按钮点击事件
  onCopy: function () {
    // 获取所有选中的卡片
    const selectedCards = this.data.cardList.filter(card => card.selected).map(item => this.formatMarkdown(item.originSection));
    if (selectedCards.length === 0) {
      wx.showToast({
        title: '请至少选择一张卡片',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 合并所有选中卡片的内容
    const contentToCopy = selectedCards.join('\n\n'); // 使用格式化后的纯文本内容

    // 复制到剪贴板
    wx.setClipboardData({
      data: contentToCopy,
      success: () => {
        wx.showToast({
          title: '全文已复制',
          icon: 'success',
          duration: 2000
        });
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  // 下载单张卡片为图片
  downloadCardImage: function (e) {
    const index = e.currentTarget.dataset.index || this.data.current;
    // 获取当前卡片的rich-text内容
    const currentCard = this.data.cardList[index];
    if (!currentCard || !currentCard.richText) {
      wx.showToast({
        title: '卡片内容为空',
        icon: 'none'
      });
      return;
    }

    // 设置canvas尺寸
    this.setData({
      canvasWidth: 345,
      canvasHeight: 360,
    }, () => {
      // 绘制完成后的回调函数
      const drawCallback = () => {
        // 延迟一下确保绘制完成
        setTimeout(() => {
          // 调用保存图片函数
          this.saveCanvasToImage('SINGLE_CARD');
        }, 500);
      };

      // 调用绘制函数
      this.drawRichTextToCanvas(currentCard.richText, drawCallback);
    });
  },

  // 将文本分割成多行
  splitTextIntoLines: function (ctx, text, maxWidth) {
    if (!text) return [];

    const lines = [];
    let tempLine = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const tempWidth = ctx.measureText(tempLine + char).width;

      if (tempWidth > maxWidth && tempLine !== '') {
        lines.push(tempLine);
        tempLine = char;
      } else {
        tempLine += char;
      }
    }

    if (tempLine) {
      lines.push(tempLine);
    }

    return lines;
  },

  // 将rich-text节点绘制到canvas
  drawRichTextToCanvas: function (richTextNodes, callback, drawType = 'SINGLE_CARD') {
    if (!richTextNodes || !richTextNodes.length) {
      wx.showToast({
        title: '下载失败，请重试',
        icon: 'none'
      });
      return;
    }
    const canvasId = drawType === 'SINGLE_CARD' ? 'canvasArea' : 'myCanvas';
    const ctx = wx.createCanvasContext(canvasId);
    // 清空画布并设置背景色
    ctx.setFillStyle('#ffffff');
    ctx.fillRect(0, 0, this.data.canvasWidth, this.data.canvasHeight);

    // 设置初始Y坐标和左边距
    let y = 0;
    const leftPadding = 0; // 左边距
    const contentWidth = this.data.canvasWidth - 40;

    // 应用基础样式
    const applyBaseStyle = (ctx, style) => {
      if (!style) return;

      // 设置字体大小
      if (style.fontSize) {
        let fontSize = style.fontSize;
        // 如果是rpx单位，转换为px
        if (typeof fontSize === 'string' && fontSize.includes('rpx')) {
          fontSize = parseInt(fontSize) / 2;
        }
        ctx.setFontSize(fontSize || 32);
      }

      // 设置颜色
      if (style.color) {
        ctx.setFillStyle(style.color);
      } else {
        ctx.setFillStyle('#333333');
      }

      // 设置线宽
      if (style.lineWidth) {
        ctx.setLineWidth(style.lineWidth);
      } else {
        ctx.setLineWidth(1);
      }
    };

    // 应用节点样式
    const applyNodeStyle = (ctx, style, classNames = []) => {
      if (!style) return;

      // 应用基础样式
      applyBaseStyle(ctx, style);

      // 处理class样式
      let mergedStyle = { ...style };
      if (classNames && classNames.length) {
        classNames.forEach(className => {
          // 直接从全局stylesMap中获取样式
          if (stylesMap[className]) {
            mergedStyle = { ...mergedStyle, ...stylesMap[className] };
          }
        });
      }

      // 设置字体样式
      let fontStyle = mergedStyle.fontStyle || 'normal';
      let fontWeight = mergedStyle.fontWeight || 'normal';
      let fontSize = mergedStyle.fontSize || 32;

      // 如果是rpx单位，转换为px
      if (typeof fontSize === 'string' && fontSize.includes('rpx')) {
        fontSize = parseInt(fontSize) / 2;
      }

      let fontFamily = mergedStyle.fontFamily || 'sans-serif';

      // 设置字体
      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;

      // 设置文本对齐方式
      if (mergedStyle.textAlign) {
        ctx.setTextAlign(mergedStyle.textAlign);
      }

      // 设置线宽
      if (mergedStyle.lineWidth) {
        ctx.setLineWidth(mergedStyle.lineWidth);
      }

      // 设置描边样式
      if (mergedStyle.strokeStyle) {
        ctx.setStrokeStyle(mergedStyle.strokeStyle);
      }

      return mergedStyle;
    };

    // 处理margin字符串，转换为数值
    const parseMargin = (marginStr) => {
      if (!marginStr || typeof marginStr !== 'string') return { top: 0, right: 0, bottom: 0, left: 0 };

      const values = marginStr.split(' ').map(val => {
        if (val.includes('rpx')) {
          return parseInt(val) / 2;
        }
        return parseInt(val) || 0;
      });

      if (values.length === 1) {
        return { top: values[0], right: values[0], bottom: values[0], left: values[0] };
      } else if (values.length === 2) {
        return { top: values[0], right: values[1], bottom: values[0], left: values[1] };
      } else if (values.length === 3) {
        return { top: values[0], right: values[1], bottom: values[2], left: values[1] };
      } else if (values.length === 4) {
        return { top: values[0], right: values[1], bottom: values[2], left: values[3] };
      }

      return { top: 0, right: 0, bottom: 0, left: 0 };
    };

    // 获取元素起始高度
    const getStartY = (node, x, currentY, level = 0, parentStyle = null) => {
      if (!node) return currentY;

      // 处理文本节点
      if (node.type === 'text') {
        // 如果文本为空或只包含空格，则跳过
        if (!node.text || node.text.trim() === '') {
          return currentY;
        }

        // 获取父节点样式
        let style = parentStyle || stylesMap['h2w'];

        // 计算缩进
        let indent = level * 10;

        // 处理文本换行
        const lines = this.getTextLines(ctx, node.text, contentWidth - indent);
        for (let i = 0; i < lines.length; i++) {
          currentY += (style.fontSize ? (typeof style.fontSize === 'string' ? parseInt(style.fontSize) / 2 : style.fontSize) : 32) * (style.lineHeight || 1.5);
        }

        return currentY;
      }

      // 处理元素节点
      if (node.name) {
        // 获取节点样式
        let classNames = [];
        if (node.attrs && node.attrs.class) {
          classNames = node.attrs.class.split(' ');
        }

        // 获取标签样式
        let tagStyle = {};

        // 先应用h2w基础样式（对所有非标题元素）
        if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.name)) {
          tagStyle = { ...tagStyle, ...stylesMap['h2w'] };
        }

        // 根据标签名获取对应的h2w__标签样式
        const h2wClassName = `h2w__${node.name}`;
        if (stylesMap[h2wClassName]) {
          tagStyle = { ...tagStyle, ...stylesMap[h2wClassName] };
        }

        // 应用class样式
        let style = applyNodeStyle(ctx, tagStyle, classNames);

        // 添加上边距
        if (style.marginTop) {
          currentY += typeof style.marginTop === 'string' ? parseInt(style.marginTop) / 2 : style.marginTop;
        }

        // 处理不同类型的标签
        switch (node.name) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            // 获取标题文本
            let titleText = '';
            if (node.children) {
              for (let child of node.children) {
                if (child.type === 'text') {
                  titleText += child.text || '';
                }
              }
            }

            // 绘制标题文本
            if (titleText) {
              // 计算行高
              let fontSize = style.fontSize;
              if (typeof fontSize === 'string') {
                fontSize = parseInt(fontSize) / 2;
              }
              currentY += (fontSize || 32) * (style.lineHeight || 1.5);

              // 为标题添加下划线
              if (style.borderBottomStyle) {
                currentY += 5;
              }
            }
            break;

          case 'p':
            // 处理段落内容
            if (node.children) {
              for (let child of node.children) {
                currentY = getStartY(child, x, currentY, level, style);
              }
            }
            break;

          case 'ul':
          case 'ol':
            // 处理列表项
            if (node.children) {
              let index = 1;
              for (let child of node.children) {
                if (child.name === 'li') {
                  // 设置列表项样式
                  const liClassName = 'h2w__li';
                  // 合并h2w基础样式和列表项特定样式
                  const liStyle = stylesMap[liClassName] ? { ...stylesMap['h2w'], ...stylesMap[liClassName], ...style } : { ...stylesMap['h2w'], ...style };

                  // 计算缩进
                  let indent = level * 10;
                  if (liStyle.paddingLeft) {
                    indent += typeof liStyle.paddingLeft === 'string' ? parseInt(liStyle.paddingLeft) / 2 : liStyle.paddingLeft;
                  }

                  // 绘制列表项标记
                  if (node.name === 'ul') {
                    // 处理列表项内容
                    if (child.children) {
                      for (let grandChild of child.children) {
                        currentY = getStartY(grandChild, x + indent + 15, currentY, level + 1, liStyle);
                      }
                    }
                  } else {
                    // 处理列表项内容
                    if (child.children) {
                      for (let grandChild of child.children) {
                        currentY = getStartY(grandChild, x + indent + 15, currentY, level + 1, liStyle);
                      }
                    }
                  }

                  // 添加列表项间距
                  if (liStyle.marginBottom) {
                    currentY += typeof liStyle.marginBottom === 'string' ? parseInt(liStyle.marginBottom) / 2 : liStyle.marginBottom;
                  } else {
                    currentY += 5;
                  }
                } else {
                  currentY = getStartY(child, x, currentY, level + 1, style);
                }
              }
            }
            break;

          case 'blockquote':
            // 获取引用块样式
            const bqClassName = 'h2w__blockquote';
            // 合并h2w基础样式和引用块特定样式
            const bqStyle = stylesMap[bqClassName] ? { ...stylesMap['h2w'], ...stylesMap[bqClassName], ...style } : { ...stylesMap['h2w'], ...style };

            const borderX = x;
            const startY = currentY;

            // 处理引用块内容
            if (node.children) {
              for (let child of node.children) {
                currentY = getStartY(child, x + contentIndent, currentY, level + 1, bqStyle);
              }
            }

            break;

          case 'a':
            // 获取链接样式
            const aClassName = 'h2w__a';
            // 合并h2w基础样式和链接特定样式
            const aStyle = stylesMap[aClassName] ? { ...stylesMap['h2w'], ...stylesMap[aClassName], ...style } : { ...stylesMap['h2w'], ...style };

            // 获取链接文本
            let linkText = '';
            if (node.children) {
              for (let child of node.children) {
                if (child.type === 'text') {
                  linkText += child.text || '';
                }
              }
            }

            // 绘制链接文本
            if (linkText) {
              // 计算行高
              let fontSize = aStyle.fontSize;
              if (typeof fontSize === 'string') {
                fontSize = parseInt(fontSize) / 2;
              }
              currentY += (fontSize || 32) * (aStyle.lineHeight || 1.5);
            }
            break;

          case 'div':
            // 处理div内容
            if (node.children) {
              for (let child of node.children) {
                currentY = getStartY(child, x, currentY, level, style);
              }
            }
            break;

          default:
            // 处理其他标签
            if (node.children) {
              for (let child of node.children) {
                currentY = getStartY(child, x, currentY, level, style);
              }
            }
            break;
        }

        // 添加下边距
        if (style.marginBottom) {
          currentY += typeof style.marginBottom === 'string' ? parseInt(style.marginBottom) / 2 : style.marginBottom;
        }

        return currentY;
      }

      // 处理子节点
      if (node.children && node.children.length > 0) {
        let newY = currentY;
        for (let child of node.children) {
          newY = getStartY(child, x, newY, level, parentStyle);
        }
        return newY;
      }

      return currentY;
    };

    // 递归绘制节点
    const drawNode = (node, x, currentY, level = 0, parentStyle = null) => {
      if (!node) return currentY;

      // 处理文本节点
      if (node.type === 'text') {
        // 如果文本为空或只包含空格，则跳过
        if (!node.text || node.text.trim() === '') {
          return currentY;
        }

        // 获取父节点样式
        let style = parentStyle || stylesMap['h2w'];

        // 计算缩进
        let indent = level * 10;

        // 处理文本换行
        const lines = this.getTextLines(ctx, node.text, contentWidth - indent);
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(lines[i], x + indent, currentY);
          currentY += (style.fontSize ? (typeof style.fontSize === 'string' ? parseInt(style.fontSize) / 2 : style.fontSize) : 32) * (style.lineHeight || 1.5);

          // 绘制下划线
          if (style.textDecoration === 'underline') {
            const lineWidth = ctx.measureText(lines[i]).width;
            ctx.setStrokeStyle(style.color || '#333333');
            ctx.setLineWidth(1);
            ctx.beginPath();
            ctx.moveTo(x + indent, currentY - 2);
            ctx.lineTo(x + indent + lineWidth, currentY - 2);
            ctx.stroke();
          }
        }

        return currentY;
      }

      // 处理元素节点
      if (node.name) {
        // 获取节点样式
        let classNames = [];
        if (node.attrs && node.attrs.class) {
          classNames = node.attrs.class.split(' ');
        }

        // 获取标签样式
        let tagStyle = {};

        // 先应用h2w基础样式（对所有非标题元素）
        if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.name)) {
          tagStyle = { ...tagStyle, ...stylesMap['h2w'] };
        }

        // 根据标签名获取对应的h2w__标签样式
        const h2wClassName = `h2w__${node.name}`;
        if (stylesMap[h2wClassName]) {
          tagStyle = { ...tagStyle, ...stylesMap[h2wClassName] };
        }

        // 应用class样式
        let style = applyNodeStyle(ctx, tagStyle, classNames);

        // 添加上边距
        if (style.marginTop) {
          currentY += typeof style.marginTop === 'string' ? parseInt(style.marginTop) / 2 : style.marginTop;
        }

        // 处理不同类型的标签
        switch (node.name) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            // 获取标题文本
            let titleText = '';
            if (node.children) {
              for (let child of node.children) {
                if (child.type === 'text') {
                  titleText += child.text || '';
                }
              }
            }

            // 绘制标题文本
            if (titleText) {
              ctx.fillText(titleText, x, currentY);

              // 计算行高
              let fontSize = style.fontSize;
              if (typeof fontSize === 'string') {
                fontSize = parseInt(fontSize) / 2;
              }
              currentY += (fontSize || 32) * (style.lineHeight || 1.5);

              // 为标题添加下划线
              if (style.borderBottomStyle) {
                const lineWidth = ctx.measureText(titleText).width;
                const lineY = currentY + 2;

                // 设置边框颜色和宽度
                ctx.setStrokeStyle(style.borderBottomColor || '#eeeeee');
                let borderWidth = style.borderBottomWidth;
                if (typeof borderWidth === 'string') {
                  borderWidth = parseInt(borderWidth) / 2;
                }
                ctx.setLineWidth(borderWidth || 1);

                // 绘制下划线
                ctx.beginPath();
                ctx.moveTo(x, lineY);
                ctx.lineTo(x + lineWidth, lineY);
                ctx.stroke();

                // 如果是双线样式
                if (style.borderBottomStyle === 'double') {
                  ctx.beginPath();
                  ctx.moveTo(x, lineY + 3);
                  ctx.lineTo(x + lineWidth, lineY + 3);
                  ctx.stroke();
                }

                currentY += 5;
              }
            }
            break;

          case 'p':
            // 处理段落内容
            if (node.children) {
              for (let child of node.children) {
                currentY = drawNode(child, x, currentY, level, style);
              }
            }
            break;

          case 'ul':
          case 'ol':
            // 处理列表项
            if (node.children) {
              let index = 1;
              for (let child of node.children) {
                if (child.name === 'li') {
                  // 设置列表项样式
                  const liClassName = 'h2w__li';
                  // 合并h2w基础样式和列表项特定样式
                  const liStyle = stylesMap[liClassName] ? { ...stylesMap['h2w'], ...stylesMap[liClassName], ...style } : { ...stylesMap['h2w'], ...style };

                  // 计算缩进
                  let indent = level * 10;
                  if (liStyle.paddingLeft) {
                    indent += typeof liStyle.paddingLeft === 'string' ? parseInt(liStyle.paddingLeft) / 2 : liStyle.paddingLeft;
                  }

                  // 绘制列表项标记
                  if (node.name === 'ul') {
                    // 无序列表项，绘制圆点 "•"
                    ctx.fillText("•", x + indent - 20, currentY);

                    // 处理列表项内容
                    if (child.children) {
                      for (let grandChild of child.children) {
                        currentY = drawNode(grandChild, x + indent + 15, currentY, level + 1, liStyle);
                      }
                    }
                  } else {
                    // 有序列表项，绘制序号
                    ctx.fillText(`${index}.`, x + indent, currentY + (liStyle.fontSize ? (typeof liStyle.fontSize === 'string' ? parseInt(liStyle.fontSize) / 2 : liStyle.fontSize) : 32) / 2);
                    index++;

                    // 处理列表项内容
                    if (child.children) {
                      for (let grandChild of child.children) {
                        currentY = drawNode(grandChild, x + indent + 15, currentY, level + 1, liStyle);
                      }
                    }
                  }

                  // 添加列表项间距
                  if (liStyle.marginBottom) {
                    currentY += typeof liStyle.marginBottom === 'string' ? parseInt(liStyle.marginBottom) / 2 : liStyle.marginBottom;
                  } else {
                    currentY += 5;
                  }
                } else {
                  currentY = drawNode(child, x, currentY, level + 1, style);
                }
              }
            }
            break;

          case 'blockquote':
            // 获取引用块样式
            const bqClassName = 'h2w__blockquote';
            // 合并h2w基础样式和引用块特定样式
            const bqStyle = stylesMap[bqClassName] ? { ...stylesMap['h2w'], ...stylesMap[bqClassName], ...style } : { ...stylesMap['h2w'], ...style };

            const borderX = x;
            const startY = currentY;

            // 处理引用块内容
            if (node.children) {
              // 计算内容缩进
              let contentIndent = 0;
              if (bqStyle.paddingLeft) {
                contentIndent = typeof bqStyle.paddingLeft === 'string' ? parseInt(bqStyle.paddingLeft) / 2 : bqStyle.paddingLeft;
              }

              for (let child of node.children) {
                currentY = drawNode(child, x + contentIndent, currentY, level + 1, bqStyle);
              }
            }

            // 绘制左边框
            let borderWidth = bqStyle.borderLeftWidth;
            if (typeof borderWidth === 'string') {
              borderWidth = parseInt(borderWidth) / 2;
            }

            ctx.setFillStyle(bqStyle.borderLeftColor || '#dddddd');
            ctx.fillRect(borderX, startY, borderWidth || 4, currentY - startY);
            break;

          case 'a':
            // 获取链接样式
            const aClassName = 'h2w__a';
            // 合并h2w基础样式和链接特定样式
            const aStyle = stylesMap[aClassName] ? { ...stylesMap['h2w'], ...stylesMap[aClassName], ...style } : { ...stylesMap['h2w'], ...style };

            // 获取链接文本
            let linkText = '';
            if (node.children) {
              for (let child of node.children) {
                if (child.type === 'text') {
                  linkText += child.text || '';
                }
              }
            }

            // 绘制链接文本
            if (linkText) {
              // 设置链接颜色
              ctx.setFillStyle('#07c160'); // 链接通常使用绿色

              ctx.fillText(linkText, x, currentY);

              // 计算行高
              let fontSize = aStyle.fontSize;
              if (typeof fontSize === 'string') {
                fontSize = parseInt(fontSize) / 2;
              }
              currentY += (fontSize || 32) * (aStyle.lineHeight || 1.5);

              // 绘制下划线
              if (aStyle.borderBottomWidth) {
                const linkWidth = ctx.measureText(linkText).width;

                ctx.setStrokeStyle('#07c160');
                let borderWidth = aStyle.borderBottomWidth;
                if (typeof borderWidth === 'string') {
                  borderWidth = parseInt(borderWidth) / 2;
                }
                ctx.setLineWidth(borderWidth || 1);

                ctx.beginPath();
                ctx.moveTo(x, currentY - 2);
                ctx.lineTo(x + linkWidth, currentY - 2);
                ctx.stroke();
              }
            }
            break;

          case 'div':
            // 处理div内容
            if (node.children) {
              for (let child of node.children) {
                currentY = drawNode(child, x, currentY, level, style);
              }
            }
            break;

          default:
            // 处理其他标签
            if (node.children) {
              for (let child of node.children) {
                currentY = drawNode(child, x, currentY, level, style);
              }
            }
            break;
        }

        // 添加下边距
        if (style.marginBottom) {
          currentY += typeof style.marginBottom === 'string' ? parseInt(style.marginBottom) / 2 : style.marginBottom;
        }

        return currentY;
      }

      // 处理子节点
      if (node.children && node.children.length > 0) {
        let newY = currentY;
        for (let child of node.children) {
          newY = drawNode(child, x, newY, level, parentStyle);
        }
        return newY;
      }

      return currentY;
    };

    // 开始绘制
    let finalY = y;
    // 处理rich-text节点
    if (richTextNodes && richTextNodes.length > 0) {
      // 获取外层div的样式 (h2w h2w-light)
      const outerNode = richTextNodes[0];
      let outerStyle = {};

      if (outerNode.attrs && outerNode.attrs.class) {
        const outerClasses = outerNode.attrs.class.split(' ');
        outerClasses.forEach(className => {
          if (stylesMap[className]) {
            outerStyle = { ...outerStyle, ...stylesMap[className] };
          }
        });
      }
      // 应用外层样式
      applyNodeStyle(ctx, outerStyle);

      // 获取内层div的样式 (h2w__main)
      let innerNode = null;
      let innerStyle = {};

      if (outerNode.children && outerNode.children.length > 0) {
        innerNode = outerNode.children[0];

        if (innerNode.attrs && innerNode.attrs.class) {
          const innerClasses = innerNode.attrs.class.split(' ');
          innerClasses.forEach(className => {
            if (stylesMap[className]) {
              innerStyle = { ...innerStyle, ...stylesMap[className] };
            }
          });
        }
      }

      // 应用内层样式
      applyNodeStyle(ctx, innerStyle);

      // 处理内层div的margin
      let mainMargin = { top: 0, right: 0, bottom: 0, left: 0 };
      if (innerStyle.margin) {
        mainMargin = parseMargin(innerStyle.margin);
      }
      // 调整起始位置和宽度
      const startX = leftPadding + mainMargin.left;
      const startY = y + mainMargin.top;
      // 应用内层div的paddingTop
      let paddingTop = 0;
      if (innerStyle.paddingTop) {
        paddingTop = typeof innerStyle.paddingTop === 'string' ?
          parseInt(innerStyle.paddingTop) / 2 : innerStyle.paddingTop;
      }

      finalY = startY + paddingTop;
      // 获取内容距离顶部的高度
      if (drawType === 'SINGLE_CARD') {
        if (drawType === 'SINGLE_CARD' && innerNode && innerNode.children && innerNode.children.length > 0) {
          for (let child of innerNode.children) {
            finalY = getStartY(child, startX, finalY, 0, { ...outerStyle, ...innerStyle });
          }
        }
        finalY = 200 - (finalY / 2);
      } else {
        finalY = 60;
      }
      // 绘制内层div的内容
      if (innerNode && innerNode.children && innerNode.children.length > 0) {
        for (let child of innerNode.children) {
          finalY = drawNode(child, startX, finalY, 0, { ...outerStyle, ...innerStyle });
        }
      }

      // 添加内层div的marginBottom
      finalY += mainMargin.bottom;
    }

    // 调整画布高度
    if (drawType === 'ALL') {
      this.setData({
        canvasHeight: finalY
      });
    }

    // 绘制到画布
    ctx.draw(false, () => {
      wx.hideLoading();
      // 如果提供了回调函数，则调用它
      if (typeof callback === 'function') {
        callback(finalY + 20);
      }
    });
  },

  // 保存Canvas为图片
  saveCanvasToImage: function (drawType) {
    wx.showLoading({
      title: '保存中...',
    });

    // 检查是否已经绘制了内容
    if (this.data.canvasHeight <= 300) {
      wx.showToast({
        title: '下载失败，请重试',
        icon: 'none'
      });
      return;
    }

    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    const pixelRatio = systemInfo.pixelRatio || 2;

    // 创建canvas上下文
    const query = wx.createSelectorQuery();
    const canvasElement = drawType === 'SINGLE_CARD' ? '#canvasArea' : '#myCanvas';
    const canvasId = drawType === 'SINGLE_CARD' ? 'canvasArea' : 'myCanvas';
    query.select(canvasElement)
      .fields({ node: true, size: true })
      .exec((res) => {
        // 兼容旧版本微信
        if (res && res[0]) {
          // 使用旧版本API
          wx.canvasToTempFilePath({
            canvasId: canvasId,
            x: 0,
            y: 0,
            width: this.data.canvasWidth,
            height: this.data.canvasHeight,
            destWidth: this.data.canvasWidth * pixelRatio,
            destHeight: this.data.canvasHeight * pixelRatio,
            fileType: 'png', // 使用PNG格式而不是JPG
            quality: 1,
            success: (res) => {
              wx.hideLoading();

              // 保存图片到相册
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: () => {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success'
                  });
                },
                fail: (err) => {
                  console.error('保存失败:', err);
                  // 如果是因为用户拒绝授权导致的失败
                  if (err.errMsg.indexOf('auth deny') >= 0 || err.errMsg.indexOf('authorize') >= 0) {
                    wx.showModal({
                      title: '提示',
                      content: '需要您授权保存图片到相册',
                      confirmText: '去授权',
                      success: (res) => {
                        if (res.confirm) {
                          wx.openSetting({
                            success: (settingRes) => {
                              if (settingRes.authSetting['scope.writePhotosAlbum']) {
                                wx.showToast({
                                  title: '授权成功，请重新保存',
                                  icon: 'none'
                                });
                              } else {
                                wx.showToast({
                                  title: '授权失败',
                                  icon: 'none'
                                });
                              }
                            }
                          });
                        }
                      }
                    });
                  } else {
                    wx.showToast({
                      title: '下载失败，请重试',
                      icon: 'none'
                    });
                  }
                }
              });

              this.setData({
                showSharePanel: false
              })
            },
            fail: (err) => {
              wx.hideLoading();
              console.error('生成图片失败:', err);
              wx.showToast({
                title: '下载失败，请重试',
                icon: 'none'
              });
            }
          }, this);
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '下载失败，请重试',
            icon: 'none'
          });
        }
      });
  },

  // 将towxml数据转换为rich-text可用的结构
  convertTowxmlToRichText: function (towxmlData) {
    if (!towxmlData) return [];

    // 递归处理节点
    const processNode = (node) => {
      // 处理空节点
      if (!node) return null;

      // 处理文本节点
      if (node.type === 'text') {
        // 如果文本不为null或undefined，且只包含空格，则返回换行符
        if (node.text !== null && node.text !== undefined && node.text !== '' && node.text.trim() === '') {
          return {
            type: 'text',
            text: '\n'
          };
        }
        return {
          type: 'text',
          text: node.text || ''
        };
      }

      // 处理数组
      if (Array.isArray(node)) {
        return node.map(item => processNode(item)).filter(Boolean);
      }

      // 创建rich-text节点
      const richTextNode = {};

      // 设置节点类型和名称
      if (node.type === 'tag') {
        richTextNode.name = this.mapTagName(node.tag);

        // 处理属性
        if (node.attr && Object.keys(node.attr).length > 0) {
          richTextNode.attrs = { ...node.attr };
        } else if (node.attrs && Object.keys(node.attrs).length > 0) {
          richTextNode.attrs = { ...node.attrs };
        } else {
          richTextNode.attrs = {};
        }

        // 处理子节点
        if (node.child && node.child.length > 0) {
          richTextNode.children = node.child.map(child => processNode(child)).filter(Boolean);
        } else if (node.children && node.children.length > 0) {
          richTextNode.children = node.children.map(child => processNode(child)).filter(Boolean);
        }
      }
      // 处理特殊的数据结构，如图片中展示的
      else if (node.children && Array.isArray(node.children)) {
        // 这里处理类似于图片中展示的结构
        richTextNode.name = 'div';
        richTextNode.attrs = {};

        // 添加class
        if (node.attrs && node.attrs.class) {
          richTextNode.attrs.class = node.attrs.class;
        }

        // 处理子节点
        richTextNode.children = node.children.map(child => processNode(child)).filter(Boolean);
      }
      // 处理带有text属性的节点
      else if (node.text !== undefined) {
        // 如果文本不为null或undefined，且只包含空格，则返回换行符
        if (node.text !== null && node.text !== '' && node.text.trim() === '') {
          return {
            type: 'text',
            text: '\n'
          };
        }
        return {
          type: 'text',
          text: node.text
        };
      }
      // 处理其他类型的节点
      else {
        richTextNode.name = 'div';
        richTextNode.attrs = {};

        // 如果有theme属性，添加为class
        if (node.theme) {
          richTextNode.attrs.class = node.theme;
        }

        // 处理可能的子节点
        if (node._e && node._e.child) {
          richTextNode.children = [processNode(node._e.child)].filter(Boolean);
        }
      }

      return richTextNode;
    };

    // 处理根节点
    let processedNodes = [];

    if (towxmlData.children && towxmlData.children.length > 0) {
      processedNodes = towxmlData.children.map(child => processNode(child)).filter(Boolean);
    } else if (towxmlData.child && towxmlData.child.length > 0) {
      processedNodes = towxmlData.child.map(child => processNode(child)).filter(Boolean);
    } else if (towxmlData.theme && towxmlData.children) {
      // 处理图片中展示的特殊结构
      if (Array.isArray(towxmlData.children)) {
        towxmlData.children.forEach(child => {
          const processed = processNode(child);
          if (processed) {
            processedNodes.push(processed);
          }
        });
      }
    } else {
      // 如果没有明确的子节点结构，尝试处理整个对象
      const processed = processNode(towxmlData);
      if (processed) {
        processedNodes = [processed];
      }
    }

    // 添加两层父节点包装
    // 内层div，class为h2w__main
    const innerWrapper = {
      name: 'div',
      attrs: {
        class: 'h2w__main'
      },
      children: processedNodes
    };

    // 外层div，class为h2w h2w-light
    const outerWrapper = {
      name: 'div',
      attrs: {
        class: 'h2w h2w-light'
      },
      children: [innerWrapper]
    };

    return [outerWrapper];
  },

  // 映射标签名称
  mapTagName: function (tag) {
    if (!tag) return 'div';

    // 标签映射表
    const tagMapping = {
      'h1': 'h1',
      'h2': 'h2',
      'h3': 'h3',
      'h4': 'h4',
      'h5': 'h5',
      'h6': 'h6',
      'p': 'p',
      'a': 'a',
      'img': 'img',
      'ul': 'ul',
      'ol': 'ol',
      'li': 'li',
      'pre': 'pre',
      'code': 'code',
      'blockquote': 'blockquote',
      'hr': 'hr',
      'br': 'br',
      'strong': 'strong',
      'em': 'em',
      'span': 'span',
      'view': 'div',
      'text': 'span'
    };

    return tagMapping[tag.toLowerCase()] || 'div';
  },

  // 获取文本换行
  getTextLines: function (ctx, text, maxWidth) {
    if (!text) return [];

    const lines = [];
    let tempLine = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const tempWidth = ctx.measureText(tempLine + char).width;

      if (tempWidth > maxWidth && tempLine !== '') {
        lines.push(tempLine);
        tempLine = char;
      } else {
        tempLine += char;
      }
    }

    if (tempLine) {
      lines.push(tempLine);
    }

    return lines;
  },

  // 分享按钮点击事件
  onShare: function () {
    // 获取所有选中的卡片
    const selectedCards = this.data.cardList.filter(card => card.selected);
    if (selectedCards.length === 0) {
      wx.showToast({
        title: '请至少选择一张卡片',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    this.setData({
      showSharePanel: true // 显示自定义分享面板
    })
    const cardContent = this.data.cardList;
    const cardID = this.data.cardID || '';
    if (cardID.length === 0) {
      // 存储卡片到云数据库
      wx.cloud.callFunction({
        name: 'card_manage',
        data: { cardContent },
        success: res => {
          if (res.result.success) {
            const shareCardID = res.result.data.cardID;
            this.setData({ cardID: shareCardID });
            // 准备分享内容
            const title = "SnipMind";
            const content = selectedCards.map(card => card.formattedContent).join('\n\n');
            const path = `/pages/index/index?cardID=${shareCardID}`; // 小程序页面路径

            // 设置分享参数
            this.setData({
              shareTitle: title,
              shareContent: content,
              sharePath: path,
              cardID: shareCardID,
              isShareReady: true,
            });
          }
        },
        fail: err => console.error('调用失败:', err)
      });
    }
  },

  // 隐藏分享面板
  hideSharePanel: function () {
    this.setData({
      showSharePanel: false
    });
  },

  // 生成长图
  generateWholePicture: function () {
    const selectedCard = this.data.cardList.filter(item => item.selected).map(item => item.originSection);
    const selectedContent = selectedCard.join('\n\n');
    const selectedContentTowxml = app.towxml(selectedContent, 'markdown');
    const selectedContentRichText = this.convertTowxmlToRichText(selectedContentTowxml);
    if (!selectedCard.length) {
      wx.showToast({
        title: '至少选择一张卡片',
        icon: 'none'
      });
      return;
    }

    // 显示加载提示
    wx.showLoading({
      title: '生成图片中...',
    });

    // 设置canvas尺寸
    this.setData({
      canvasWidth: 345,
      canvasHeight: 1000,
    }, () => {
      // 绘制完成后的回调函数
      const drawCallback = () => {
        // 延迟一下确保绘制完成
        setTimeout(() => {
          // 调用保存图片函数
          this.saveCanvasToImage('ALL');
        }, 500);
      };

      // 调用绘制函数
      this.drawRichTextToCanvas(selectedContentRichText, drawCallback, 'ALL');
    });
  },

  // 复制链接
  copyLink: function () {
    const shareCardID = this.data.cardID;
    this.hideSharePanel();
    // 调用云函数
    wx.cloud.callFunction({
      name: 'generateMiniProgramLink',
    }).then(res => {
      const miniprogramUrl = res.result.miniprogramUrl
      const errcode = res.result.miniprogramUrl.errcode;
      if (errcode) {
        wx.showToast({
          title: '服务异常',
          icon: 'none',
          duration: 2000
        });
      }
    }).catch(err => {
      console.error('调用失败:', err);
      this.setData({ isLoading: false });

      wx.showToast({
        title: '服务异常',
        icon: 'none',
        duration: 2000
      });
    });
  },

  // 监听用户点击分享
  onShareAppMessage() {
    this.hideSharePanel();
    // 存储当前卡片内容到数据库，便于用户进入时直接查看
    const shareCardID = this.data.cardID;
    return {
      title: '我做了一套思维碎片，分享给你', // 分享的标题
      path: `/pages/index/index?cardID=${shareCardID}`, // 分享后打开的页面路径
    }
  }
});