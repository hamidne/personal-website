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
				<div class="upper-title" v-text="$t('layouts.footer.title')" />
				<h2 class="main-title" v-text="$t('layouts.footer.description')" />
			</div>

			<footer-form />

			<div class="copyright-text">
				<footer-socials />
				<p v-text="$t('layouts.footer.copyRight')" />
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
