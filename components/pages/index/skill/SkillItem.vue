<template>
	<div class="skill-bar">
		<div class="progress">
			<div class="progress-bar" :data-percent="percent">
				<span class="percent-text">
					<span ref="percent" class="count"></span>%
				</span>
			</div>
		</div>
		<div class="skill-title" v-text="title" />
		<span class="category" v-text="category" />
	</div>
</template>

<script>
import { CountUp } from 'countup.js'

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		percent: {
			type: Number,
			default: 0,
		},
	},
	data: () => ({}),
	mounted() {
		this.countUp = new CountUp(this.$refs.percent, this.percent, {
			suffix: '%',
		})
		window.addEventListener('scroll', this.countUpFn)
	},
}
</script>

<style lang="scss" scoped></style>
