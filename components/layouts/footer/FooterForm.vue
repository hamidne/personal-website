<template>
	<b-form @submit.prevent="">
		<b-row>
			<b-col lg="6">
				<div class="input-group">
					<input type="text" required />
					<label v-text="$t('layouts.footer.form.name')" />
				</div>
			</b-col>
			<b-col lg="6">
				<div class="input-group">
					<input type="email" required />
					<label v-text="$t('layouts.footer.form.email')" />
				</div>
			</b-col>
			<b-col cols="12">
				<div class="input-group">
					<input type="text" required />
					<label v-text="$t('layouts.footer.form.subject')" />
				</div>
			</b-col>
			<b-col cols="12">
				<div class="input-group">
					<textarea required />
					<label v-text="$t('layouts.footer.form.message')" />
				</div>
			</b-col>
			<b-col cols="12">
				<div class="clearfix">
					<button class="send-button" v-text="$t('layouts.footer.form.send')" />
				</div>
			</b-col>
		</b-row>
	</b-form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
