<template>
	<div
		v-observe-visibility="visibilityChanged"
		class="section-num hide-pr"
		:class="{ 'show-pr': visiable }"
	>
		<span>0</span>
		<span v-text="number" />
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
	data: () => ({ visiable: false }),
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>

<style lang="scss" scoped></style>
