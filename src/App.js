
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
import { Primary } from './components/Button/Button.stories';

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
      <Primary name="" />
      <Link to="/">First Table</Link>
      <Link to="/second">Second Table</Link>

      <Switch>
        <Route exact path="/">
          <SortingTable />
        </Route>
        <Route exact path="/second">
          <SortingTableTwo2 />
          {/* <TableComponent
            url={data2}
            columns={COLUMNSTWO}
            order={ORDERTWO} /> */}
        </Route>
      </Switch>


    </div>
  );
}

export default App;
