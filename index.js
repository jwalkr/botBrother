const botBrother = require('bot-brother')

const bot = botBrother({
    key: '677335275:AAFY9z6lzMUPFJpTEz1ShAUixSjabbnKA7g',
    sessionManager: botBrother.sessionManager.memory(),
    polling: {interval: 0 , timeout:1}
})



//let's create command '/start'

bot.command('start')
.invoke(function(context){
    console.log(context)
    //Setting data , datad is used in text message templates
    context.data.user = context.meta.user
    //invoke callback must return promise
    return context.sendMessage('Hello <%=user.first_name%>. How are you')

})
.answer(function (context){
    console.log(context)
    context.data.answer = context.answer
    //returns promise 
    return context.sendMessage('Ok. I understood. You feel <%=answer%>')

})


//creating command '/upload_photo'
bot.command('upload_photo')
.invoke(function(context){
    return context.sendMessage('Drop me a photo , please')
})
.answer(function(context){
    // context.message is an object that represents message
    return context.sendPhoto(context.message.photo[0].file_id , {caption: 'I got your photo!'})
})