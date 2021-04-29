<template>
	<h2 class="theme-title-two">
		{{ title }}<span>.</span>
	</h2>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>
