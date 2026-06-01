export default async function decorate(block) {
  // The block has one row with two cells: image cell and content cell.
  // Structure is already correct from .plain.html - no DOM restructuring needed.
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 2) {
      cells[0].classList.add('cald-banner-icon');
      cells[1].classList.add('cald-banner-content');
    }
  });
}
