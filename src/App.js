
import './App.css';
import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from "react-router-dom"
import { Large } from './components/Input/Input.stories';
import SortingTable from './SortingTable';
import SortingTableTwo2 from './SortingTableTwo';
import TableData from './TableData';
import TableOne from './TableOne';
import TableComponent from './components/Tables/TableComponent';
import { URL, COLUMNS, ORDER } from './columns'
import { URLTWO, COLUMNSTWO, ORDERTWO } from './columns2'
import { Danger, Light, Primary, Secondary } from './components/Button/Button.stories';
import { HoldingsTable } from './components/Tables/Table.stories';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      fetch(URL)
        .then(res => res.json())
        .then(d => setData(d.payload))
    }
    fetchApi()

  }, [])

  const [data2, setData2] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      fetch(URLTWO)
        .then(res => res.json())
        .then(d => setData2(d.transactions))
    }
    fetchApi()

  }, [])


  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Primary name="Table Database" />
        <div style={{ marginTop: '3em', display: 'flex' }}>
          <Link to="/"><Danger name="Holdings" /></Link>
          <Link to="/second"><Light name="Transactions" /></Link>
        </div>
      </div>
      <hr />



      <Switch>
        <Route exact path="/">
          <TableComponent
            url={data}
            columns={COLUMNS}
          />
        </Route>
        <Route exact path="/second">
          <TableComponent
            url={data2}
            columns={COLUMNSTWO}
          />
        </Route>
      </Switch>




    </div>
  );
}

export default App;


{/* <TableComponent
            url={data2}
            columns={COLUMNSTWO}
            order={ORDERTWO} /> */}
