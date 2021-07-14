import React, { useState, useEffect } from 'react'
import TableOne from './TableOne'


function TableData() {
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

    return (
        <div>
            <TableOne name={data} />
        </div>
    )
}

export default TableData
