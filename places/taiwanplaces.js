export default () => {
  return {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '大棟山登山步道',
          weight: 'bold',
          size: 'xl',
          style: 'normal',
          align: 'center'
        }
      ],
      backgroundColor: '#b8b2a7'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '地址',
              color: '#aaaaaa',
              size: 'sm',
              flex: 1
            },
            {
              type: 'text',
              text: '桃園市333龜山區兔坑村',
              wrap: true,
              color: '#666666',
              size: 'sm',
              flex: 5
            }
          ]
        },
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'text',
              text: '營業時間',
              flex: 1,
              color: '#aaaaaa',
              size: 'sm'
            },
            {
              type: 'text',
              text: '全年無休',
              flex: 5,
              size: 'sm',
              color: '#666666',
              wrap: true
            }
          ]
        },
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'text',
              text: '票價',
              flex: 1,
              size: 'sm',
              color: '#aaaaaa'
            },
            {
              type: 'text',
              text: '免費',
              flex: 5,
              size: 'sm',
              color: '#666666',
              wrap: true
            }
          ]
        },
        {
          type: 'box',
          layout: 'baseline',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '電話',
              color: '#aaaaaa',
              size: 'sm',
              flex: 1
            },
            {
              type: 'text',
              text: '886-3-3322101',
              wrap: true,
              color: '#666666',
              size: 'sm',
              flex: 5
            }
          ]
        }
      ],
      borderWidth: 'none',
      borderColor: '#aba69b'
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '地圖',
            uri: 'https://www.google.com/maps/search/?api=1&query=24.99835,121.40056'
          },
          color: '#000000'
        },
        {
          type: 'button',
          action: {
            type: 'message',
            text: '目睹海拔405公尺的小百岳風景，有飛機凌空飛、高鐵呼嘯過、蜿蜒淡水河、台北101屹立遠處，攻頂後的重頭戲，就是令人直呼值得。',
            label: '景點介紹'
          },
          color: '#000000',
          height: 'sm'
        }
      ],
      flex: 0,
      backgroundColor: '#dbd5c8',
      borderWidth: 'light',
      borderColor: '#b8b2a7'
    },
    styles: {
      footer: {
        backgroundColor: '#dbd5c8'
      }
    }
  }
}
