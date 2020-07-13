<!-- eslint-disable vue/no-v-html -->
<template>
	<div v-observe-visibility="visibilityChanged">
		<b-tabs
			class="profile-tab"
			content-class="mt-3"
			:nav-class="{ 'show-pr': visiable }"
		>
			<b-tab
				v-for="(item, index) in $t('pages.index.about.tabs')"
				:key="index"
				:title="item.title"
			>
				<p v-html="item.description" />
			</b-tab>
		</b-tabs>
		<div class="profile-tab">
			<ul class="button-group">
				<li><a href="#" class="download-button">Download CV.</a></li>
				<li><a href="#" class="hire-button">Hire Me</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({ visiable: false }),
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>
