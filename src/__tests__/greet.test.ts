import { greet } from '../index'

describe('greet testings', () => {
	it('should be able to greet', () => {
		const spy = jest.spyOn(console, 'log').mockReturnThis()

		greet()

		expect(spy).toHaveBeenCalledTimes(1)
		
	})
})