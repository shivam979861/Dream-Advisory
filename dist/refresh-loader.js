if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
  const loader = document.querySelector('.refresh-loader');
  loader.hidden = false;
  setTimeout(() => loader.remove(), 2400);
}
