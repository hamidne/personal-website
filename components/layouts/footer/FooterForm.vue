<template>
	<form action="#">
		<div class="row">
			<div class="col-lg-6">
				<div class="input-group">
					<input type="text" required />
					<label>Your Name</label>
				</div>
				<!-- /.input-group -->
			</div>
			<!-- /.col- -->
			<div class="col-lg-6">
				<div class="input-group">
					<input type="email" required />
					<label>Your Email Address</label>
				</div>
				<!-- /.input-group -->
			</div>
			<!-- /.col- -->
			<div class="col-12">
				<div class="input-group">
					<input type="text" required />
					<label>Your Subject</label>
				</div>
				<!-- /.input-group -->
			</div>
			<!-- /.col- -->
			<div class="col-12">
				<div class="input-group">
					<textarea required></textarea>
					<label>Your Message</label>
				</div>
				<!-- /.input-group -->
			</div>
			<!-- /.col- -->
			<div class="col-12">
				<div class="clearfix">
					<button class="send-button">Send Message</button>
				</div>
			</div>
		</div>
		<!-- /.row -->
	</form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
