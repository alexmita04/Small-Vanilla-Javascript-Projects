const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_width_label = +label_width.substring(0, label_width.length - 2);

  const min = e.target.min;
  const max = e.target.max;

  const left =
    value * (num_width / max) -
    num_width_label / 2 +
    scale(value, min, max, 10, -10);
  console.log(left);

  label.style.left = `${left}px`;

  label.textContent = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
