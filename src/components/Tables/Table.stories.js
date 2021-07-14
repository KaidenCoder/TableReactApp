import React from 'react'
import TableComponent from './TableComponent'
import { COLUMNS, ORDER } from '../../columns'
import { COLUMNSTWO, ORDERTWO } from '../../columns2'



export default {
    title: 'Table/HoldingsTable',
    component: TableComponent
}


export const HoldingsTable = () => <TableComponent url={data} columns={COLUMNS} order={ORDER} />
export const TransactionsTable = () => <TableComponent url={data2} columns={COLUMNSTWO} order={ORDERTWO} />