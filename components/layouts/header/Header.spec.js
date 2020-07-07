import { shallowMount } from '@vue/test-utils'
import Header from './Header.vue'

/* #region  Test setup */
const factory = () => {
	return shallowMount(Header)
}
/* #endregion */

describe('Header.vue', () => {
	let wrapper
	beforeEach(() => (wrapper = factory()))

	test('mounts properly', () => {
		expect(wrapper.vm).toBeTruthy()
	})
})
