<template>
	<div class="skill-bar">
		<div class="progress">
			<div class="progress-bar" :data-percent="percent">
				<span class="percent-text">
					<countTo
						ref="percent"
						class="count"
						:start-val="0"
						:end-val="percent"
						:duration="3000"
						:autoplay="false"
						suffix="%"
					/>
					<span class="count">0</span>%
				</span>
			</div>
		</div>
		<div class="skill-title" v-text="title" />
		<span class="category" v-text="category" />
	</div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
	components: { countTo },
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
}
</script>

<style lang="scss" scoped></style>
