import { format } from 'date-fns'
import NumberFormat from 'react-number-format';

export const URLTWO = "https://canopy-frontend-task.vercel.app/api/transactions"

export const COLUMNSTWO = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Ticket Ref',
        accessor: 'ticketref'
    },
    {
        Header: 'Trade Date',
        accessor: 'traded_on',
        Cell: ({ value }) => { return format(new Date(value.slice(6), value.slice(0, 2), value.slice(3, 5)), 'dd/MM/yyyy') }
    },
    {
        Header: 'QTY',
        accessor: 'quantity',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    },
    {
        Header: 'CCY',
        accessor: 'currency',
    },
    {
        Header: 'Settlement Amount',
        accessor: 'settlement_amount',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    }
]

export const ORDERTWO = ['name', 'ticketref', 'currency', 'settlement_amount', 'traded_on', 'quantity']