export default {
	getBgColor(color) {
		switch (color) {
		case 'primary':
		case 'blue':
			return '#2185d0'
		case 'secondary':
			return '#1b1c1d'
		case 'red':
			return '#db2828'
		case 'orange':
			return '#f2711c'
		case 'yellow':
			return '#fbbd08'
		case 'olive':
			return '##b5cc18'
		case 'green':
			return '#21ba45'
		case 'teal':
			return '#00b5ad'
		case 'violet':
			return '#6435c9'
		case 'purple':
			return '#a333c8'
		case 'pink':
			return '#e03997'
		case 'brown':
			return '#a5673f'
		case 'grey':
			return '#767676'
		case 'black':
			return '#27292a'
		default:
			return '#e0e1e2'
		}
	}
}
