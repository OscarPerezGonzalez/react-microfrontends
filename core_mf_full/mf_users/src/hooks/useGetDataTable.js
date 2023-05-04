import { useEffect, useState, useCallback } from 'react'
import { getUsersFromBinnacle } from '../api/binnacle'
import { DEFAULT_ORDER, DEFAULT_ORDER_BY, DEFAULT_ROWS_PER_PAGE } from '../constants/generalApi'
import { getProfiles } from '../api/profiles'

export const useGetDataTable = fromData => {
	const [data, setData] = useState([])
	const [order, setOrder] = useState(DEFAULT_ORDER)
	const [orderBy, setOrderBy] = useState(DEFAULT_ORDER_BY)
	const [page, setPage] = useState(0)
	const [visibleRows, setVisibleRows] = useState(null)
	const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE)

	useEffect(() => {
		let data = []
		switch (fromData) {
			case 'users':
				data = getUsersFromBinnacle()
				break
			case 'profiles':
				data = getProfiles()
				break
			default:
				break
		}
		setData(data.data)
		const rowsOnMount = data.data.slice(0 * DEFAULT_ROWS_PER_PAGE, 0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE)
		setVisibleRows(rowsOnMount)
	}, [])

	const stableSort = (array, comparator) => {
		const stabilizedThis = array.map((el, index) => [el, index])
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0])
			if (order !== 0) {
				return order
			}
			return a[1] - b[1]
		})
		return stabilizedThis.map(el => el[0])
	}

	const descendingComparator = (a, b, orderBy) => {
		if (b[orderBy] < a[orderBy]) {
			return -1
		}
		if (b[orderBy] > a[orderBy]) {
			return 1
		}
		return 0
	}

	const getComparator = (order, orderBy) => {
		return order === 'desc'
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy)
	}

	const handleRequestSort = useCallback(
		(event, newOrderBy) => {
			const isAsc = orderBy === newOrderBy && order === 'asc'
			const toggledOrder = isAsc ? 'desc' : 'asc'
			setOrder(toggledOrder)
			setOrderBy(newOrderBy)

			const sortedRows = stableSort(data, getComparator(toggledOrder, newOrderBy))
			const updatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			setVisibleRows(updatedRows)
		},
		[order, orderBy, page, rowsPerPage, data],
	)

	const handleChangePage = useCallback(
		(event, newPage) => {
			setPage(newPage)

			const sortedRows = stableSort(data, getComparator(order, orderBy))
			const updatedRows = sortedRows.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage)
			setVisibleRows(updatedRows)
		},
		[order, orderBy, data, rowsPerPage],
	)

	const handleChangeRowsPerPage = useCallback(
		event => {
			const updatedRowsPerPage = parseInt(event.target.value, 10)
			setRowsPerPage(updatedRowsPerPage)
			setPage(0)

			const sortedRows = stableSort(data, getComparator(order, orderBy))
			const updatedRows = sortedRows.slice(0 * updatedRowsPerPage, 0 * updatedRowsPerPage + updatedRowsPerPage)
			setVisibleRows(updatedRows)
		},
		[order, data, orderBy],
	)

	return {
		handleRequestSort,
		order,
		orderBy,
		visibleRows,
		data,
		rowsPerPage,
		page,
		handleChangePage,
		handleChangeRowsPerPage,
	}
}
