const cloud = require('wx-server-sdk');
const crypto = require('crypto'); // 引入 crypto 生成 UUID

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();
const cardCollection = db.collection('card_message');

exports.main = async (event, context) => {
  const { operationType = 'ADD', cardContent = [], cardID = '' } = event;

  // 生成唯一 cardID
  const cardUUID = crypto.randomUUID();

  const addCard = async () => {
    await cardCollection.add({
      data: {
        card_uuid: cardUUID,
        card_content: cardContent,
        createdAt: new Date()
      }
    });
  }

  try {
    if (operationType === 'ADD') {
      await addCard();
      return { success: true, message: '添加成功', data: { cardID: cardUUID } };
    } else if (operationType === 'QUERY') {
      const result = await cardCollection.where({ card_uuid: cardID }).get();
      if (result.data.length > 0) {
        return { success: true, data: result.data[0] };
      } else {
        return { success: false, message: '未查询到卡片信息' };
      }
    }
    return { success: true, message: '无效操作', data: { cardID: cardUUID } };
  } catch (error) {
    return { success: false, message: '操作失败', error };
  }
};
