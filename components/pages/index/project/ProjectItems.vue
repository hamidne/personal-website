<template>
	<b-container>
		<div v-for="(item, index) in items" :key="index" class="project-item">
			<img src="images/icon/icon18.svg" alt="" class="icon" />
			<h5 class="title">
				<a href="#" v-text="item.title" />
			</h5>
			<p v-text="item.description" />
			<a href="#" class="read-more">
				<i class="fal fa-long-arrow-right" />
			</a>
		</div>
	</b-container>
</template>

<script>
export default {
	data: () => ({
		items: [{ title: 'asdasd', description: 'asdasdas' }],
	}),
}
</script>

<style lang="scss" scoped>
.project-item {
	background: #202245;
	position: relative;
	padding: 50px 80px 40px 70px;
	margin-top: 70px;
	z-index: 1;
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
