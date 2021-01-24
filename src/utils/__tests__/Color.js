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
})
