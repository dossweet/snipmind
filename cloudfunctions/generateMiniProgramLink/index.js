// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const APPID = 'wxc917c39a28903266'; // 替换成你的 AppID
const SECRET = '19eca1420432f1bbc9eedd24736bd969'; // 替换成你的 AppSecret
const GRANT_TYPE = 'client_credential';

async function getScheme() {
  // 获取小程序 access_token
  const tokenRes = await axios.get(
    `https://api.weixin.qq.com/cgi-bin/token?grant_type=${GRANT_TYPE}&appid=${APPID}&secret=${SECRET}`
  );
  const accessToken = tokenRes.data.access_token;

  // 生成 Scheme 链接
  const schemeRes = await axios.post(
    `https://api.weixin.qq.com/wxa/generatescheme?access_token=${accessToken}`,
    {
      jump_wxa: {
        path: 'pages/index/index', // 目标页面
        query: 'from=share', // 传递参数
      },
      is_expire: false // 是否过期（true：指定有效时间）
    }
  );

  return schemeRes.data;
}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const miniprogramUrl = await getScheme();

  return {
    miniprogramUrl,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}