import { useEffect } from 'react';

/**
 * Updates the document title and meta description for the current page.
 * Restores the previous values when the component unmounts.
 */
export function useSeo(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content') ?? undefined;

    if (description) {
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (description && descriptionTag && previousDescription !== undefined) {
        descriptionTag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
