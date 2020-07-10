<template>
	<div class="service-block">
		<img src="images/icon/icon18.svg" alt="" class="icon" />
		<h5 class="title">
			<a href="#" v-text="title" />
		</h5>
		<p v-text="description" />
		<a href="#" class="read-more">
			<i class="fal fa-long-arrow-right" />
		</a>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>
