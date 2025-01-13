import { useState } from 'react'
import { Cell, Pie, PieChart } from 'recharts';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <PieChart width={700} height={700} className='margin10px'>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={200} fill="#82ca9d" label={label} > {
            data.map((entry, index) =>
              (<Cell key={`cell-${index}`} fill={COLORS[index]} />)
            )
          } </Pie>
        </PieChart>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
