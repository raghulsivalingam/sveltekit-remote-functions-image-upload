import { form } from '$app/server';
import { error } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';

export const uploadImage = form(async (data: FormData) => {
	const file = data.get('image');
	if (!(file instanceof File)) {
		throw error(400, 'No file selected');
	}

	const buf = await file.arrayBuffer(); // read image

	// this is for demonstration purposes - in IRL usage, we would upload directly to an R2 bucket
	await writeFile(`uploads/${file.name}`, new Uint8Array(buf));

	return { success: true };
});
