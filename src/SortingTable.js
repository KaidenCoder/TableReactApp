import React, { useState, useEffect, useMemo } from 'react'
import { useTable, useSortBy, usePagination, useColumnOrder } from 'react-table'
import { COLUMNS } from './columns'
import { Secondary, Success } from './components/Button/Button.stories'
import './Table.css'

function SortingTable() {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            fetch("https://canopy-frontend-task.vercel.app/api/holdings")
                .then(res => res.json())
                .then(d => setData(d.payload))
        }
        fetchApi()

    }, [])




    console.log(data)
    console.log(COLUMNS)

    const columns = useMemo(() => COLUMNS, [])
    // const realdata = useMemo(() => props.name, [])
    // console.log("realdata", realdata)


    const tableInstance = useTable({
        columns: columns,
        data: data
    }, useSortBy, usePagination, useColumnOrder)

    // console.log("ta", tableInstance)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setColumnOrder,
        prepareRow
    } = tableInstance

    const { pageIndex, pageSize } = state

    const changeOrder = () => {
        setColumnOrder(['name', 'ticker', 'asset_class', 'avg_price', 'market_price', 'latest_chg_pct', 'market_value_ccy'].sort(() => 0.5 - Math.random()))
    }

    return (
        <>
            <Secondary name="Holdings Table" />
            <button style={{ border: "none", backgroundColor: "white", margin: '1em' }} onClick={changeOrder}><Success name="Change column order" /></button>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? " ↓" : "↑") : '↔'}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        console.log(row)
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div style={{ padding: "2em" }}>
                <span>
                    Page{' '}<strong>{pageIndex + 1}</strong> of {pageOptions.length}{' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1}
                        onChange={
                            e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }
                        }
                        style={{ width: '50px' }}
                    />
                </span>
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                >
                    {
                        [10, 25, 30].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <div style={{ padding: "1em" }}>
                    <button style={{ margin: "0.3em" }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

                    <button style={{ margin: "0.3em" }} onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button style={{ margin: "0.3em" }} onClick={() => nextPage()} disabled={!canNextPage}>Next</button>

                    <button style={{ margin: "0.3em" }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                </div>
            </div>
        </>
    )
}

export default SortingTable

