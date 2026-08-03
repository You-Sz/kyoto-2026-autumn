const days = [
  {
    id: "day-1",
    date: "10.08",
    weekday: "THU",
    title: "抵達關西・前往京都",
    tone: "arrival",
    events: [
      ["15:15", "台灣起飛", "出發前完成線上報到，隨身留一套過夜用品。"],
      ["19:00", "抵達關西國際機場", "入境、領行李，預留約 75 分鐘。"],
      ["20:30", "HARUKA 前往京都", "車程約 75–90 分鐘；抵達後由八條口出站。"],
      ["22:00", "入住 Hotel Vischio Kyoto", "飯店距京都站八條口步行約 2 分鐘。"],
    ],
    note: "今晚先整理一晚小行李；大件行李請飯店保管到 10/10。",
  },
  {
    id: "day-2",
    date: "10.09",
    weekday: "FRI",
    title: "天橋立觀光船・傘松公園・伊根二選一",
    tone: "coast",
    events: [
      ["08:38", "京都 → 天橋立", "搭特急橋立 1 號直達，預計 10:39 抵達；指定席開放後再確認最終班表。"],
      ["10:39", "天橋立站寄放行李", "使用改札外置物櫃；大型櫃客滿時詢問觀光案內所。"],
      ["10:50", "智恩寺・迴旋橋", "簡單參觀與拍照，步行前往天橋立觀光船碼頭。"],
      ["11:30", "天橋立觀光船", "天橋立棧橋 → 一之宮棧橋，約 12 分鐘；從海上欣賞松林沙洲並直接銜接傘松公園。"],
      ["11:50", "元伊勢籠神社・傘松公園單人吊椅", "簡單參拜後搭單人空中吊椅上山看昇龍觀；怕高或遇雨可改搭廂型纜車。"],
      ["12:15", "Ama Dining 景觀午餐", "在傘松公園 AmaTerrace 內用餐，餐後完成胯下觀景；餐廳排隊時改點輕食。"],
      ["13:20", "吊椅下山・搭巴士前往伊根", "目標銜接元伊勢籠神社／纜車下附近的巴士；出發前再次核對秋季班表。"],
      ["14:00", "伊根現場二選一", "A：直接前往舟屋街道與 INE CAFE；B：在伊根灣遊船碼頭下車，搭約 25 分鐘觀光船。"],
      ["14:40", "INE CAFE 海景下午茶", "A路線可先喝咖啡再散步；B路線搭完船後建議叫計程車前往咖啡廳。"],
      ["15:20", "舟屋散步或咖啡休息", "A路線完整散步舟屋街道；B路線以觀光船＋咖啡為主，只逛舟屋日和周邊。"],
      ["16:13", "伊根 → 天橋立站", "目標搭這班回程巴士，預計 17:11 抵達。"],
      ["17:30", "取行李・北野屋接駁", "提前預約車站接駁，入住後享用一泊二食與溫泉。"],
    ],
    alert: "硬截止｜16:13 必須由伊根搭回程巴士；北野屋接駁至 18:00、晚餐最晚 18:30。伊根灣觀光船與完整舟屋散步擇一，不要臨時兩個都塞。",
  },
  {
    id: "day-3",
    date: "10.10",
    weekday: "SAT",
    title: "慢遊天橋立・四條河原町購物",
    tone: "shopping",
    events: [
      ["07:30", "北野屋早餐・退房", "08:30 左右完成退房，搭飯店接駁前往天橋立站。"],
      ["08:50", "寄放行李・彈性安排", "行李放天橋立站置物櫃，依天氣、體力和回京都的特急班次決定下一站。"],
      ["09:00", "有空再去 View Land", "選配行程：步行約 7 分鐘到入口，搭吊椅看飛龍觀；若前一天已滿足或時間不足就直接省略。"],
      ["10:15", "返回天橋立站", "取回行李、買伴手禮，準備搭中午前後的特急。"],
      ["14:30", "回到京都站", "實際時間依特急班次調整；入住 Hotel Vischio Kyoto 並領回大行李。"],
      ["15:30", "四條河原町購物", "大丸京都、四條通、新京極、寺町京極、京都高島屋 S.C.。"],
      ["19:00", "河原町・先斗町晚餐", "飯後可沿鴨川散步，或回京都站 Porta 補買。"],
    ],
    note: "前一天已在傘松公園看昇龍觀，View Land只是另一個飛龍觀角度；想多泡湯或增加京都購物時間就直接省略。",
  },
  {
    id: "day-4",
    date: "10.11",
    weekday: "SUN",
    title: "伏見稻荷・東福寺・清水寺東山散策",
    tone: "temple",
    events: [
      ["09:00", "京都站出發", "搭 JR 奈良線至稻荷站；不必搭公車。"],
      ["09:25", "伏見稻荷大社", "樓門、本殿、千本鳥居至奧社奉拜所；不登山頂。"],
      ["10:40", "前往東福寺", "JR 一站或步行約 20–25 分鐘。"],
      ["11:00", "東福寺", "通天橋、方丈庭園與臥雲橋，停留約 75 分鐘。"],
      ["12:15", "計程車前往清水寺", "週日公車容易塞車，請在五條坂或清水坂周邊下車。"],
      ["12:35", "午餐", "避開排隊名店，控制在 45 分鐘內。"],
      ["13:20", "清水寺", "清水舞台、主要伽藍與音羽瀑布。"],
      ["14:40", "二年坂・三年坂", "一路下坡經八坂庚申堂、寧寧之道與圓山公園。"],
      ["16:30", "八坂神社・祇園", "傍晚參拜，之後步行至河原町晚餐或補買。"],
    ],
    alert: "09:00 才出發仍可完成，但不要登伏見稻荷山頂；東福寺到清水寺建議搭計程車。",
  },
  {
    id: "day-5",
    date: "10.12",
    weekday: "MON",
    title: "清晨直奔關西機場",
    tone: "flight",
    events: [
      ["05:45", "起床・退房", "前一晚完成打包，早餐改準備便利商店輕食。"],
      ["06:44", "京都 → 關西機場", "搭 HARUKA 5 號，預計 08:19 抵達；訂票時再確認最終班表。"],
      ["08:19", "報到・托運", "距起飛約 2 小時 56 分鐘；確認航空公司航廈後辦理安檢與出境。"],
      ["11:15", "關西機場起飛", "回程不安排大阪市區，避免任何轉乘風險。"],
      ["13:10", "抵達台灣", "旅程結束。"],
    ],
    alert: "日本運動之日連假｜建議搭 06:44 HARUKA；07:13左右下一班約 08:51 才抵達，遇報到或安檢排隊時緩衝較少。",
  },
];

const links = [
  ["天橋立觀光船", "https://www.tankai.jp/tw/cruise/amanohashidate-sightseeing-boat/"],
  ["伊根灣觀光船", "https://www.tankai.jp/trip/ineboat/"],
  ["傘松公園", "https://www.tankai.jp/trip/kasamatsu/"],
  ["View Land", "https://www.viewland.jp/en/"],
  ["丹海巴士時刻", "https://www.tankai.jp/routebus/timetable/"],
  ["北野屋", "https://www.hotel-kitanoya.jp/lg_en/"],
  ["INE CAFE", "https://www.ine-kankou.jp/taste/ine-cafe"],
  ["HARUKA", "https://www.kansai-airport.or.jp/en/access/from-airport/train"],
];

export default function Home() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="nav shell" aria-label="主要導覽">
          <a className="brand" href="#top">京阪・丹後</a>
          <div className="nav-links">
            <a href="#overview">行程總覽</a>
            <a href="#day-2">天橋立</a>
            <a href="#checklist">出發準備</a>
          </div>
        </nav>

        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow">AUTUMN JOURNEY · 2026</p>
            <h1>京都、天橋立<br />五日秋旅</h1>
            <p className="lead">從千本鳥居到伊根舟屋，在京都的古寺與丹後的海之間，留一段剛剛好的慢旅行。</p>
            <a className="primary-button" href="#overview">查看每日行程 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-card" aria-label="旅程摘要">
            <div className="stamp"><span>OCT</span><strong>08—12</strong><small>5 DAYS / 4 NIGHTS</small></div>
            <div className="route-line">
              <span>TPE</span><i></i><span>KIX</span><i></i><span>KYOTO</span><i></i><span>INE</span>
            </div>
            <div className="hotel-brief">
              <p><span>京都</span> Hotel Vischio Kyoto</p>
              <p><span>天橋立</span> 溫泉飯店 北野屋</p>
            </div>
          </div>
        </div>
        <div className="mountain" aria-hidden="true"><i></i><i></i><i></i></div>
      </header>

      <section className="overview shell" id="overview">
        <div className="section-heading">
          <p>TRIP AT A GLANCE</p>
          <h2>旅程一覽</h2>
        </div>
        <div className="overview-grid">
          <article><span>去程航班</span><strong>10/08 · 15:15</strong><small>19:00 抵達關西機場</small></article>
          <article><span>回程航班</span><strong>10/12 · 11:15</strong><small>13:10 抵達台灣</small></article>
          <article><span>移動重點</span><strong>HARUKA + 橋立號</strong><small>指定席建議預先購買</small></article>
        </div>
        <div className="quick-nav" aria-label="每日快速跳轉">
          {days.map((day) => <a href={`#${day.id}`} key={day.id}><strong>{day.date}</strong><span>{day.title.split("・")[0]}</span></a>)}
        </div>
      </section>

      <section className="itinerary shell">
        {days.map((day, index) => (
          <article className={`day day-${day.tone}`} id={day.id} key={day.id}>
            <aside className="day-date">
              <span>DAY {index + 1}</span>
              <strong>{day.date}</strong>
              <em>{day.weekday}</em>
            </aside>
            <div className="day-content">
              <div className="day-title"><p>{index === 1 ? "SEA OF KYOTO" : index === 3 ? "CLASSIC KYOTO" : "DAILY ROUTE"}</p><h2>{day.title}</h2></div>
              <ol className="timeline">
                {day.events.map(([time, title, detail]) => (
                  <li key={`${day.id}-${time}`}>
                    <time>{time}</time>
                    <div><h3>{title}</h3><p>{detail}</p></div>
                  </li>
                ))}
              </ol>
              {day.alert && <div className="alert"><span>!</span><p>{day.alert}</p></div>}
              {day.note && <div className="note"><span>旅途筆記</span><p>{day.note}</p></div>}
            </div>
          </article>
        ))}
      </section>

      <section className="checklist" id="checklist">
        <div className="shell checklist-inner">
          <div className="section-heading light"><p>BEFORE YOU GO</p><h2>出發前確認</h2></div>
          <div className="check-grid">
            <div><b>01</b><h3>交通預約</h3><p>京都往返天橋立指定席、10/12 第一班 HARUKA。</p></div>
            <div><b>02</b><h3>行李安排</h3><p>大件行李留在京都；天橋立過夜行李使用車站置物櫃。</p></div>
            <div><b>03</b><h3>接駁確認</h3><p>向北野屋預約 10/9 約 17:30 天橋立站接駁。</p></div>
            <div><b>04</b><h3>時刻複查</h3><p>出發前再次確認觀光船、丹海巴士與特急最終班表。</p></div>
          </div>
          <div className="source-links">
            {links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}<span>↗</span></a>)}
          </div>
        </div>
      </section>

      <footer><div className="shell"><strong>京都・天橋立 2026</strong><p>時刻為行程規劃參考，請以出發日前官方最新班表為準。</p><a href="#top">回到頂端 ↑</a></div></footer>
    </main>
  );
}
