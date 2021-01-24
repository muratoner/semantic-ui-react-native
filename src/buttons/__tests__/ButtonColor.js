import {UtilColor} from '../../utils'

describe('Button Color Utility', () => {
	it('should get correct text color', () => {
		let primary = UtilColor.contrast(UtilColor.getBgColor('primary'))
		let secondary = UtilColor.contrast(UtilColor.getBgColor('secondary'))
		let red = UtilColor.contrast(UtilColor.getBgColor('blue'))
		let _default = UtilColor.contrast()

		expect(primary).toBe('#fff')
		expect(secondary).toBe('#fff')
		expect(red).toBe('#fff')
		expect(_default).toBe('rgba(0,0,0,.6)')
	})
})
