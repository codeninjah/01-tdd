require('jest')
const { convertMilesToKm } = require('./script.js')

describe('script', () => {

	it('returns 0 for distance 0', () => {
		// Arrange
		const testData = 0 // distance in miles
		const expected = 0 // expected result in km

		// Act
		let actual = convertMilesToKm(testData)

		// Assert
		expect(actual).toBe(expected)
	})

})