export default async function decorate(block) {
  // The site-footer block is mainly structural content.
  // Rows: 1=tagline, 2=nav+social+connect, 3=acknowledgement, 4=copyright
  const rows = [...block.children];

  // Add semantic classes for styling hooks
  if (rows[0]) rows[0].classList.add('footer-tagline');
  if (rows[1]) rows[1].classList.add('footer-nav');
  if (rows[2]) rows[2].classList.add('footer-acknowledgement');
  if (rows[3]) rows[3].classList.add('footer-copyright');
}
