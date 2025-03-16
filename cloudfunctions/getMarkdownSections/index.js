// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 通义千问API配置
const QWEN_API_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation'
const QWEN_API_KEY = 'sk-xx' // 请替换为您的实际API密钥
const QWEN_MODEL = 'qwen-turbo' // 可选模型: qwen-turbo, qwen-plus, qwen-max 等
const config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Authorization': 'Bearer ' + QWEN_API_KEY,
    }
};

const splitMarkdown = async(markdownText) => {
    const presetPrompt = `帮我把传入的markdown内容拆分成几个合理的段落，要求是：
  1. 一级标题单独是一个段落。
  2.每个段落内文末结尾的内容所属的标题不能大于该段落中前面的标题,即二级标题不能在三级标题之后出现在一个段落里，多个三级标题下的内容可以在一个段落里。
  3.不要把当前标题下的内容错放到其他标题下，即使该标题下没有东西。
  4.每个段落不超过150字。
  5.每个段落里的内容在满足格式要求的情况下，尽可能的饱满。
  6.保留原始的markdown格式。
  7.段落之间用---分隔。
  处理完成后直接返回分割后的markdown内容，不要回复额外的内容。以下内容是传入的markdown：\n
  `;

    const postData = {
        model: QWEN_MODEL,
        input: {
            messages: [{
                    role: 'system',
                    content: 'You are a helpful assistant.',
                },
                {
                    role: 'user',
                    content: presetPrompt + markdownText,
                },
            ],
        },
        parameters: {},
    };

    const response = await axios.post(QWEN_API_URL, postData, config);
    console.log('QWen:', response.data.output.text);

    return response.data.output.text;
    // return ["## 什么是Markard\n\n所谓Markard,知识切片，指的是将指定格式的文章内容，以卡片的形式进行存储。\n\n所谓Markard,知识切片，指的是将指定格式的文章内容，以卡片的形式进行存储。\n\n所谓Markard,知识切片，指的是将指定格式的文章内容，以卡片的形式进行存储。\n\n", "### 如何生成知识切片\n\n您只需要上传markdown格式的文章，我们会帮您智能转换。\n\n", "### 如何分享知识切片\n\n您可以选择想要分享的卡片集或单张卡片，我们会帮您组合成图片，用于分享至微信或朋友圈。\n\n", "### 如何查看历史切片\n\n您可以查看历史生成的知识切片，并进行分享。\n\n", "## 关于作者\n\n字节跳动前端工程师，一个有双下巴的妹子。热爱技术，热爱前端，喜欢折腾和尝试所有新鲜玩意儿。欢迎添加作者vx：dossweet，可以帮你 debug，也能畅聊 AI。"];
}

const formatMarkdown = async(markdownText) => {
    const presetPrompt = `帮我把传入的markdown内容的markdown符号去除，回复中只包含去除markdown格式的结果。以下是要处理的markdown的内容：\n
  `;
    const postData = {
        model: QWEN_MODEL,
        input: {
            messages: [{
                    role: 'system',
                    content: 'You are a helpful assistant.',
                },
                {
                    role: 'user',
                    content: presetPrompt + markdownText,
                },
            ],
        },
        parameters: {},
    };
    const response = await axios.post(QWEN_API_URL, postData, config);
    return response.data.output.text;
    // return "所谓Markard,知识切片，指的是将指定格式的文章内容，以卡片的形式进行存储。";
}

// 云函数入口函数
exports.main = async(event, context) => {
    const wxContext = cloud.getWXContext();
    try {
        // 获取Markdown文本
        const { markdownText, transferType } = event;

        if (!markdownText) {
            throw new Error('缺少必要的markdownText参数');
        }

        if (transferType === 'split') {
            const sections = await splitMarkdown(markdownText);
            return {
                success: true,
                sections,
                openid: wxContext.OPENID,
                appid: wxContext.APPID,
                unionid: wxContext.UNIONID,
            };
        } else if (transferType === 'format') {
            const data = await formatMarkdown(markdownText);
            return {
                success: true,
                data,
                openid: wxContext.OPENID,
                appid: wxContext.APPID,
                unionid: wxContext.UNIONID,
            };
        }

        return {
            success: true,
            transferType,
            openid: wxContext.OPENID,
            appid: wxContext.APPID,
            unionid: wxContext.UNIONID,
        };
    } catch (error) {
        console.error('云函数执行错误:', error);
        return {
            success: false,
            error: error.message,
            openid: wxContext.OPENID,
            appid: wxContext.APPID,
            unionid: wxContext.UNIONID,
        };
    }
};