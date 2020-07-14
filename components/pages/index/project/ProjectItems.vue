<template>
	<b-container>
		<div
			v-for="(item, index) in $t('pages.index.project.items')"
			:key="index"
			class="project-item position-relative mt-5 p-5"
		>
			<img src="images/icon/icon18.svg" alt="" class="icon" />
			<h4 class="title text-white" v-text="item.title" />
			<span class="text-white-50" v-text="item.time" />
			<p v-text="item.description" />
		</div>
	</b-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.project-item {
	z-index: 1;
	background: #202245;
	&:hover {
		&::before {
			transform: scale(1, 1);
		}
	}
	&::before {
		content: '';
		top: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		position: absolute;
		transform: scale(1, 0);
		transition: all 0.4s ease-in-out;
		&:dir(ltr) {
			left: 0;
			border-left: 3px solid #e1a34c;
		}
	}
}
</style>
