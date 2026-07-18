exports.handler = async (event, content) => {
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

        const { content } = bodyData; 

        console.log('收到一封新信件:', content); 

        return {
            statusCode: 200, 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({ message: '感谢发送意见，优秀的意见可能会被录取哦！' }), 
        }; 
    }

    return {
        statusCode: 405, 
        body: JSON.stringify({ message: '不支持该请求方法' })
    }
}