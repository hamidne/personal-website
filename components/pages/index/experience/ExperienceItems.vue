<template>
	<div v-observe-visibility="visibilityChanged">
		<ul class="isotop-menu-wrapper hide-pr" :class="{ 'show-pr': visible }">
			<li
				v-for="(tab, index) in $t('pages.index.experience.tabs')"
				:key="index"
				:class="{ 'is-checked': filter === tab.filter }"
				@click="filter = tab.filter"
				v-text="tab.title"
			/>
		</ul>
		<experience-item v-for="item in items" :key="item.title" :item="item" />
	</div>
</template>

<script>
import ExperienceItem from '~/components/pages/index/experience/ExperienceItem'

export default {
	components: { ExperienceItem },
	data: () => ({ visible: false, filter: null }),
	computed: {
		items() {
			if (this.filter === null) { return this.$t('pages.index.experience.items') }
			return this.$t('pages.index.experience.items').filter(item =>
				item.tags.includes(this.filter),
			)
		},
	},
	methods: {
		visibilityChanged(visible, entry) {
			this.visible = visible
		},
	},
}
</script>

<style lang="scss" scoped></style>
