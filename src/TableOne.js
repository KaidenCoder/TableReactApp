import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import './Table.css'

function TableOne() {

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
    })

    // console.log("ta", tableInstance)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (

        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
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

    )
}

export default TableOne

