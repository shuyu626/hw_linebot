import axios from 'axios'

const main = async () => {
  try {
    const { data } = await axios.get('https://media.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json')
    // console.log(data)有部分資料被省略，可增加下面程式碼顯示被省略的陣列內容
    // depth 參數表示顯示物件屬性的深度限制，{ depth: null } 則表示不限制深度，所有屬性都會被完整地顯示
    console.dir(data, { depth: null })

    console.log(data.XML_Head.Infos.Info[0]?.Name)

    const regions = []
    data.XML_Head.Infos.Info.forEach(spot => {
      regions.push(spot.Region)
    })
    console.log(regions)
  } catch (error) {
    console.log(error)
  }
}

main()
