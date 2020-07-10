<template>
	<footer
		v-observe-visibility="visibilityChanged"
		class="portfo-footer hide-pr"
		:class="{ 'show-pr': visiable }"
	>
		<img src="images/shape/shape-7.svg" alt="" class="round-shape" />
		<div class="container">
			<div
				class="theme-title-one text-center hide-pr"
				:class="{ 'show-pr': visiable }"
			>
				<div class="upper-title">Contact Us</div>
				<h2 class="main-title">
					Send me a message, I will be touch <br />with you shortly.
				</h2>
			</div>

			<footer-form />

			<div class="copyright-text">
				<footer-socials />
				<p>&copy; Built with Love By HamidNE.</p>
			</div>
		</div>
	</footer>
</template>

<script>
import FooterForm from '~/components/layouts/footer/FooterForm.vue'
import FooterSocials from '~/components/layouts/footer/FooterSocials.vue'

export default {
	components: { FooterForm, FooterSocials },
	data: () => ({ visiable: false }),
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>

<style lang="scss" scoped></style>
