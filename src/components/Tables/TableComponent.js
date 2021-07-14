import React, { useState, useEffect, useMemo } from 'react'
import { useTable, useSortBy, usePagination, useColumnOrder } from 'react-table'
import { COLUMNS } from '../../columns'
import { Success } from '../Button/Button.stories'
import './TableStyle.css'

function TableComponent(props) {

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         fetch(props.url)
    //             .then(res => res.json())
    //             .then(d => setData(d.payload))
    //     }
    //     fetchApi()

    // }, [])




    console.log(props.url)
    console.log(props.columns)

    const columns = useMemo(() => props.columns, [])



    const tableInstance = useTable({
        columns: columns,
        data: props.url
    }, useSortBy, usePagination, useColumnOrder)


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
        setColumnOrder(props.order.sort(() => 0.5 - Math.random()))
    }

    return (
        <>

            <button onClick={changeOrder}>Change column order</button>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? " V" : "^") : ''}
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
            <div>
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
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>

                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    )
}

export default TableComponent

