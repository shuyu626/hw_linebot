import axios from 'axios' // 網路請求的處理和管理
import place from '../places/taiwanplaces.js'
import fs from 'node:fs'
import _ from 'lodash'

// 解決景點介紹部分不可以超過300字的規定
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.slice(0, maxLength - 3) + '...'
  }
}

export default async (event) => {
  try {
    const { data } = await axios.get('https://media.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json')

    const replies = _.shuffle(data.XML_Head.Infos.Info) // 使用 lodash 的 shuffle 函式來隨機排列景點資料
      .filter(d => d.Region === event.message.text)
      .slice(0, 10)
      .map(d => {
        const p = place()
        p.header.contents[0].text = d?.Name
        p.body.contents[0].contents[1].text = d?.Add || '未知地點'
        p.body.contents[1].contents[1].text = d?.Opentime || '未知營業時間'
        p.body.contents[2].contents[1].text = d?.Ticketinfo || '未知票價'
        p.body.contents[3].contents[1].text = d?.Tel || '未知電話'
        p.footer.contents[0].action.uri = `https://www.google.com/maps/search/?api=1&query=${d?.Py},${d?.Px}`
        p.footer.contents[1].action.text = truncateText(d?.Description || '未有相關訊息', 300)
        return p
      })
    const result = await event.reply({
      type: 'flex',
      altText: '景點查詢', // 替代文字，line紀錄裡顯示的
      contents: {
        type: 'carousel', // 單張卡片的話寫bubble，多張卡片寫carousel
        contents: replies
      }
    })
    // if (process.env.DEBUG === 'true') {
    //   console.dir(data, { depth: null })

    if (result.message) {
      fs.writeFileSync('./dump/tourism.json', JSON.stringify(replies, null, 2))
    }
    // }
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}
