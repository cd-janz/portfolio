/** Scroll state, active-section tracking and mobile menu for the header. */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
  const list = document.querySelector<HTMLElement>('[data-links]');
  if (!header || !burger || !list) return;

  const onScroll = () => header.setAttribute('data-scrolled', String(window.scrollY > 24));
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open: boolean) => {
    burger.setAttribute('aria-expanded', String(open));
    list.classList.toggle('open', open);
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  list.addEventListener('click', (e) => e.target instanceof HTMLAnchorElement && setMenu(false));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  const links = new Map(
    [...list.querySelectorAll<HTMLAnchorElement>('[data-link]')].map((a) => [a.dataset.link!, a]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((a, id) => a.setAttribute('aria-current', String(id === entry.target.id)));
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}
