import { useEffect } from 'react';

/**
 * Custom hook to update document title and meta description dynamically on route navigation.
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 */
export default function useDocumentTitle(title, description) {
  useEffect(() => {
    // Update Document Title
    const originalTitle = document.title;
    if (title) {
      document.title = `${title} | DS Events Odisha`;
    }

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (description) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Scroll smoothly to top on route render
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, [title, description]);
}
