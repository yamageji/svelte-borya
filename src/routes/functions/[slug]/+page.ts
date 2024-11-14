export function load({ params }) {
  return {
    slug: params.slug
  };
}

export const prerender = true;
