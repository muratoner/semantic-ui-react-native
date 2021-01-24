import {UtilColor} from '..'

describe('Color Util', () => {
	it('check empty state', () => {
		var color = UtilColor.hexToRgb('')
		expect(color).toBe(undefined)

		color = UtilColor.contrast('')
		expect(color).toBe('rgba(0,0,0,.6)')
	})

	it('check contrast color', () => {
		color = UtilColor.contrast('#009999')
		expect(color).toBe('#fff')

		color = UtilColor.contrast('#990000')
		expect(color).toBe('#fff')

		color = UtilColor.contrast('#C0C0C0')
		expect(color).toBe('rgba(0,0,0,.6)')
	})

	it('should get correct background color', () => {
		let primary = UtilColor.getBgColor('primary')
		let blue = UtilColor.getBgColor('blue')
		let secondary = UtilColor.getBgColor('secondary')
		let red = UtilColor.getBgColor('red')
		let orange = UtilColor.getBgColor('orange')
		let yellow = UtilColor.getBgColor('yellow')
		let olive = UtilColor.getBgColor('olive')
		let green = UtilColor.getBgColor('green')
		let teal = UtilColor.getBgColor('teal')
		let violet = UtilColor.getBgColor('violet')
		let purple = UtilColor.getBgColor('purple')
		let pink = UtilColor.getBgColor('pink')
		let brown = UtilColor.getBgColor('brown')
		let grey = UtilColor.getBgColor('grey')
		let black = UtilColor.getBgColor('black')

		expect(primary).toBe('#2185d0')
		expect(blue).toBe('#2185d0')
		expect(secondary).toBe('#1b1c1d')
		expect(red).toBe('#db2828')
		expect(orange).toBe('#f2711c')
		expect(orange).toBe('#f2711c')
		expect(yellow).toBe('#fbbd08')
		expect(olive).toBe('##b5cc18')
		expect(green).toBe('#21ba45')
		expect(teal).toBe('#00b5ad')
		expect(violet).toBe('#6435c9')
		expect(purple).toBe('#a333c8')
		expect(pink).toBe('#e03997')
		expect(brown).toBe('#a5673f')
		expect(grey).toBe('#767676')
		expect(black).toBe('#27292a')
	})
})
