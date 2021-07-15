import React from 'react'
import TableComponent from './TableComponent'
import { COLUMNS, ORDER } from '../../columns'
import { COLUMNSTWO, ORDERTWO } from '../../columns2'



export default {
    title: 'Table/HoldingsTable',
    component: TableComponent
}


export const HoldingsTable = (props) => <TableComponent columns={COLUMNS} order={ORDER} />
export const TransactionsTable = (props) => <TableComponent url={props.data2} columns={COLUMNSTWO} order={ORDERTWO} />