export const orderKeysOrganize = (listToOrganize, firstNode, secondNode) => {
	const list = []
	listToOrganize.forEach(item => {
		if (!list[item[firstNode][secondNode]]) list[item[firstNode][secondNode]] = []
		list[item[firstNode][secondNode]].push(item)
	})

	return list
}

export const reorganizeLists = listToOrganize => {
	const list = []
	Object.values(listToOrganize).map(permissions => permissions.map(item => list.push(item)))

	return list
}
