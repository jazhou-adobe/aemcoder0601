export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 2) return;

    const titleCell = cells[0];
    const contentCell = cells[1];

    // Build accordion item structure
    row.classList.add('accordion-item');

    // Create the button trigger
    const heading = titleCell.querySelector('h3, h2, h4');
    const titleText = heading ? heading.textContent : titleCell.textContent;

    const button = document.createElement('button');
    button.className = 'accordion-trigger';
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = `<span class="accordion-title">${titleText}</span><span class="accordion-icon material-icons">add</span>`;

    // Create the panel
    const panel = document.createElement('div');
    panel.className = 'accordion-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = contentCell.innerHTML;

    // Clear row and rebuild
    row.innerHTML = '';
    row.appendChild(button);
    row.appendChild(panel);

    // Toggle behavior
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      panel.setAttribute('aria-hidden', String(expanded));
      row.classList.toggle('accordion-item--open', !expanded);
      button.querySelector('.accordion-icon').textContent = expanded ? 'add' : 'remove';
    });
  });
}
