/**
 * load an image
 * @param {HTMLElement} container
 * @param {string} src
 * @param {string} alt
 * @param {number} width
 * @param {number} height
 */
function loadImage(container, src, alt, width, height) {
  // loading start time
  const st = Date.now();

  return new Promise((resolve, reject) => {
    const image = new Image();
    alt && (image.alt = alt);
    width && (image.width = width);
    height && (image.height = height);

    image.onerror = (e) => {
      reject(e);
    };
    image.onload = () => {
      // at lease 1s loading time for better skeleton loading animation
      const lt = 1000 - (Date.now() - st);

      if (lt >= 4) {
        setTimeout(() => {
          container.appendChild(image);
          resolve();
        }, lt);
      } else {
        container.appendChild(image);
        resolve();
      }
    };

    image.src = src;
  });
}

export { loadImage };
