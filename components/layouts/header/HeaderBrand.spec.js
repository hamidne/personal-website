import { shallowMount } from '@vue/test-utils'
import HeaderBrand from './HeaderBrand.vue'

/* #region  Test setup */
const factory = () => {
	return shallowMount(HeaderBrand)
}
/* #endregion */

describe('HeaderBrand.vue', () => {
	let wrapper
	beforeEach(() => (wrapper = factory()))

	test('mounts properly', () => {
		expect(wrapper.vm).toBeTruthy()
	})
})
