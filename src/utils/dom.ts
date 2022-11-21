export const lockBodyScroll = () => {
  const scrollingElement =
    (document.scrollingElement as HTMLElement) || document.body;
  const currentPadding = parseInt(scrollingElement.style?.paddingRight) || 0;
  const currentScrollbarWidth = getScrollbarWidth()
  scrollingElement.style.paddingRight = `${currentPadding + currentScrollbarWidth}px`;
  scrollingElement.style.overflow = "hidden";
};

export const unlockBodyScroll = () => {
  const scrollingElement =
    (document.scrollingElement as HTMLElement) || document.body;
  const currentScrollbarWidth = getScrollbarWidth()
  const currentPadding = parseInt(scrollingElement.style?.paddingRight) || currentScrollbarWidth;
  scrollingElement.style.paddingRight = `${currentPadding - currentScrollbarWidth}px`;
  scrollingElement.style.overflow = "auto";
};

function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer?.parentNode?.removeChild(outer);
  return scrollbarWidth;
}