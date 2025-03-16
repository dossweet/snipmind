# getMarkdownSections 云函数

这个云函数提供了将Markdown文档分成两个合理部分的功能，使用通义千问AI接口进行智能分割。

## 功能特点

- 智能分析Markdown文档结构
- 在合适的位置（如标题处）进行分割
- 确保每个部分内容完整且有意义
- 保持原始的Markdown格式

## 使用前准备

1. 确保已安装所需依赖：
   ```bash
   npm install
   ```

2. 在 `index.js` 文件中，将 `QWEN_API_KEY` 替换为您的实际通义千问API密钥：
   ```javascript
   const QWEN_API_KEY = 'YOUR_QWEN_API_KEY'; // 请替换为您的实际API密钥
   ```

## 调用示例

```javascript
wx.cloud.callFunction({
  name: 'getMarkdownSections',
  data: {
    markdownText: '# Markdown文档\n\n## 第一部分\n这里是一些内容...\n\n## 第二部分\n更多内容...'
  }
}).then(res => {
  if (res.result.success) {
    const sections = res.result.sections;
    console.log('第一部分:', sections[0]);
    console.log('第二部分:', sections[1]);
  } else {
    console.error('分割失败:', res.result.error);
  }
}).catch(err => {
  console.error('调用失败:', err);
});
```

## 返回数据格式

```javascript
{
  success: true,
  sections: [
    "# Markdown文档\n\n## 第一部分\n这里是一些内容...",
    "## 第二部分\n更多内容..."
  ],
  openid: "用户openid",
  appid: "小程序appid",
  unionid: "用户unionid"
}
```

## 注意事项

1. 请确保您有足够的通义千问API调用额度。
2. 对于大型文档，可能需要增加 `max_tokens` 参数。
3. 请妥善保管您的API密钥，不要将其泄露给他人。 