import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const docs = await import(`$lib/${params.slug}/docs.svx`);
    const demo = await import(`$lib/${params.slug}/demo.svelte`);
    return {
      docs: {
        ...docs.metadata,
        content: docs.default
      },
      demo: {
        ...demo.metadata,
        content: demo.default
      }
    };
  } catch {
    throw error(404, 'Not found');
  }
};
