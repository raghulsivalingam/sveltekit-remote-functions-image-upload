<script lang="ts">
	import { uploadImage } from '$lib/remote/image.remote';
</script>

<h1>image upload with remote functions</h1>

<form {...uploadImage} enctype="multipart/form-data">
	<input type="file" name="image" />
	{#if uploadImage.result?.success}
		<p>Upload done</p>
	{/if}
	<button {...uploadImage.buttonProps}>Upload Image</button>
</form>
