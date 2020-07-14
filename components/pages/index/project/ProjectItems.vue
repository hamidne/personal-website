<template>
	<div v-observe-visibility="visibilityChanged">
		<ul class="isotop-menu-wrapper hide-pr" :class="{ 'show-pr': visiable }">
			<li
				v-for="(tab, index) in $t('pages.index.project.tabs')"
				:key="index"
				@click="filter = tab.filter"
				v-text="tab.title"
			/>
		</ul>
		<project-item v-for="(item, index) in items" :key="index" :item="item" />
	</div>
</template>

<script>
import ProjectItem from '~/components/pages/index/project/ProjectItem.vue'
export default {
	components: { ProjectItem },
	data: () => ({ visiable: false, filter: 'recent' }),
	computed: {
		items() {
			return this.$t('pages.index.project.items').filter((item) =>
				item.tags.includes(this.filter),
			)
		},
	},
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>

<style lang="scss" scoped></style>
