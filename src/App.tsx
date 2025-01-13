import { ReactElement, useState } from 'react'
import { Cell, Pie, PieChart } from 'recharts';
import './App.css'


const App = () => {
  /** 定数 */
  const chart_height = 400;
  const chart_width = chart_height * 1.2;
  const chart_radius = chart_height * 0.4;

  // チャートに割り振るシード値
  const [chartSeed, setChartSeed] = useState(1);
  let reLoadChart = function () {
    // チャートのシード値を更新することで、再読み込みする
    setChartSeed(Math.random());
  }

  /** 円グラフに登録するデータ */
  let chartData: (string | number)[][] = [
    ["name", "value", "color"],
    ["データ１", 11, "#0088FE"],
    ["データ２", 2, "#00C49F"],
    ["データ３", 2, "#FFBB28"],
    ["データ４", 2, "#FF8042"],
    ["データ５", 7, "#afeeee"],
  ];

  /** data の 要素の編集テキストボックス */
  const Editors = () => {

    // 各要素のエディタを追加
    const Inputs = () => {

      const listB: Array<ReactElement> = [];
      for (let i = 1; i < chartData.length; i++) {
        let data1 = chartData[i];
        listB.push(<>
          <li key={i}>
            <input type='text' onChange={reLoadChart} value={data1[0]} />を
            <input type='number' className="timeInput" onChange={reLoadChart} value={data1[1]} />時間
            色：<input type='text' onChange={reLoadChart} value={data1[2]} />
          </li>
        </>
        )
      }
      return (
        <>
          {listB}
        </>
      )
    }
    return (<>
      <ul>
        <Inputs />
      </ul>
    </>)
  }



  /** 円グラフに登録するデータ */
  let data = [
    {
      index: 0,
      name: 'データ1',
      value: 10,
    }, {
      index: 1,
      name: 'データ2',
      value: 2,
    }, {
      index: 2,
      name: 'データ3',
      value: 3,
    }, {
      index: 3,
      name: 'データ4',
      value: 4,
    }, {
      index: 4,
      name: 'データ5',
      value: 5,
    }
  ];

  /** 円グラフの各要素の色 */
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", '#afeeee'];

  /** 円グラフのラベル定義 */
  const label = ({ name }: any) => {
    return name;
  }

  return (
    <>
      <div>
        <div className="editor">
          <Editors />
        </div>
        <div className="chart">
          <PieChart width={chart_width} height={chart_height} className='margin10px'>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={chart_radius} fill="#82ca9d" label={label} > {
              data.map((entry, index) =>
                (<Cell key={`cell-${index}`} fill={COLORS[index]} />)
              )
            } </Pie>
          </PieChart>
        </div>
      </div>
    </>
  )
}

/**
 * 引数「val」が数値であることをチェック
 * @param val チェック対象の値
 * @returns 変換後の数値
 */
function checkNumber(val: any): number {
  let number = Number(val);
  if (0 < number) {
    return number;
  }
  return 0;
}

export default App
