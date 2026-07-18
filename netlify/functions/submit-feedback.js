// netlify/functions/submit-feedback.js
const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  // 拿到刚才存在 Netlify 里的数据库地址
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  // 只处理 POST 请求
  if (event.httpMethod === 'POST') {
    let bodyData;
    try {
      bodyData = JSON.parse(event.body);
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: '数据格式错误' }),
      };
    }

    try {
      // 连接数据库
      await client.connect();
      // 选择数据库（叫 letters_db）和集合（叫 letters）
      const db = client.db('letters_db');
      const collection = db.collection('letters');

      // 把信件存进去，顺便记录提交时间
      await collection.insertOne({
        content: bodyData.content,
        createdAt: new Date(),
      });

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: '感谢发送意见，优秀的意见可能会被录取哦！' }),
      };
    } catch (error) {
      console.error('存入数据库失败:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: '服务器内部错误' }),
      };
    } finally {
      await client.close();
    }
  }

  // 如果是 GET 请求，就把所有信件捞出来返回
  if (event.httpMethod === 'GET') {
    try {
      await client.connect();
      const db = client.db('letters_db');
      const collection = db.collection('letters');

      // 按时间倒序，最新的排最前面
      const letters = await collection.find({}).sort({ createdAt: -1 }).toArray();

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(letters),
      };
    } catch (error) {
      console.error('读取信件失败:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: '读取失败' }),
      };
    } finally {
      await client.close();
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: '不支持该请求方法' }),
  };
};