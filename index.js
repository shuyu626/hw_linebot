import 'dotenv/config'
import linebot from 'linebot'
import commandTourism from './commands/tourism.js'
import place from './commands/place.js'
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'location') {
    console.log('Received location message:', event.message)
    commandTourism(event)
  }
})

bot.on('message', event => {
  console.log('Received location message:', event.message)
  if (event.message.type === 'text') {
    if (event.message.text === '北部') {
      event.reply({
        type: 'text',
        text: '想去哪呀?',
        // 限制13個
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '基隆市',
                label: '基隆市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '臺北市',
                label: '臺北市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '新北市',
                label: '新北市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '桃園市',
                label: '桃園市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '宜蘭縣',
                label: '宜蘭縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '新竹縣',
                label: '新竹縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '新竹市',
                label: '新竹市'
              }
            }
          ]
        }
      })
    } else if (event.message.text === '中部') {
      event.reply({
        type: 'text',
        text: '想去哪呀?',
        // 限制13個
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '苗栗縣',
                label: '苗栗縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '臺中市',
                label: '臺中市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '彰化縣',
                label: '彰化縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '彰化市',
                label: '彰化市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '雲林縣',
                label: '雲林縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '南投縣',
                label: '南投縣'
              }
            }
          ]
        }
      })
    } else if (event.message.text === '南部') {
      event.reply({
        type: 'text',
        text: '想去哪呀?',
        // 限制13個
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '嘉義縣',
                label: '嘉義縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '嘉義市',
                label: '嘉義市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '臺南市',
                label: '臺南市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '高雄市',
                label: '高雄市'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '屏東縣',
                label: '屏東縣'
              }
            }
          ]
        }
      })
    } else if (event.message.text === '東部') {
      event.reply({
        type: 'text',
        text: '想去哪呀?',
        // 限制13個
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '花蓮縣',
                label: '花蓮縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '臺東縣',
                label: '臺東縣'
              }
            }
          ]
        }
      })
    } else if (event.message.text === '離島') {
      event.reply({
        type: 'text',
        text: '想去哪呀?',
        // 限制13個
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '連江縣',
                label: '連江縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '金門縣',
                label: '金門縣'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '澎湖縣',
                label: '澎湖縣'
              }
            }
          ]
        }
      })
    } else {
      place(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => { // 監聽指定端口的函式調用
  console.log('機器人啟動')
})
