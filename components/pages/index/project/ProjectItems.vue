<template>
	<b-container>
		<project-item
			v-for="(item, index) in $t('pages.index.project.items')"
			:key="index"
			:item="item"
		/>
	</b-container>
</template>

<script>
import ProjectItem from '~/components/pages/index/project/ProjectItem.vue'
export default {
	components: { ProjectItem },
}
</script>

<style lang="scss" scoped></style>
