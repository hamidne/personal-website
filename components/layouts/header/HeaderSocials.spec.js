import { shallowMount } from '@vue/test-utils'
import HeaderSocials from './HeaderSocials.vue'

/* #region  Test setup */
const factory = () => {
	return shallowMount(HeaderSocials)
}
/* #endregion */

describe('HeaderSocials.vue', () => {
	let wrapper
	beforeEach(() => (wrapper = factory()))

	test('mounts properly', () => {
		expect(wrapper.vm).toBeTruthy()
	})
})
