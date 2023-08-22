document.addEventListener('DOMContentLoaded', () => {
    // THE CLUNKIEST WAY TO DO THIS
    // But Docfx unconditionally converts every image into a "clickable" image, wrapping it in an 'a' tag.
    // We hates it. We hates it forever.
    // So we undo it.

    // Get all the images that are directly nested in 'a' tags, within the 'article' section.
    const images = document.querySelectorAll('article a > img');
    for (const img of images) {
        const a = img.parentElement;
        if (a instanceof HTMLAnchorElement && img instanceof HTMLImageElement) {
            if (a.href === img.src && !img.matches('.keep-clickable')) {
                // Undo it!
                a.parentElement.insertBefore(img, a);
                a.remove();
            }
        }
    }
});