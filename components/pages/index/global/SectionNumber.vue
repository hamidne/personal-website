<template>
	<div
		v-observe-visibility="visibilityChanged"
		class="section-num hide-pr"
		:class="{ 'show-pr': visible }"
	>
		<span v-text="number.toLocaleString(localISO)" />
	</div>
</template>

<script>
export default {
	props: {
		number: {
			type: Number,
			default: 0,
		},
	},
	data: () => ({ visible: false }),
	computed: {
		localISO() {
			return this.$i18n.localeProperties.iso
		},
	},
	methods: {
		visibilityChanged(visible) {
			this.visible = visible
		},
	},
}
</script>

<style lang="scss" scoped></style>
