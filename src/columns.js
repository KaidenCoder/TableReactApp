import NumberFormat from 'react-number-format';
export const URL = "https://canopy-frontend-task.vercel.app/api/holdings"
export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Ticker',
        accessor: 'ticker'
    },
    {
        Header: 'Asset Class',
        accessor: 'asset_class'
    },
    {
        Header: 'Avg Price',
        accessor: 'avg_price',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    },
    {
        Header: 'Market Price',
        accessor: 'market_price',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    },
    {
        Header: 'Latest change percentage',
        accessor: 'latest_chg_pct'
    },
    {
        Header: 'Market Value in Base CCY -',
        accessor: 'market_value_ccy',
        Cell: ({ value }) => { return <NumberFormat value={value} displayType={'text'} thousandSeparator={true} /> }
    }

]

export const ORDER = ['name', 'ticker', 'asset_class', 'avg_price', 'market_price', 'latest_chg_pct', 'market_value_ccy']