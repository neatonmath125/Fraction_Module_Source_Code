const $sceneContainer = $('.scene-container');

$('button[data-toggle]').click(function () {
  const toggle = $(this).data('toggle');

  $sceneContainer.toggleClass(toggle);
});

$('input[data-range]').change(function (event) {
  const value = $(this).val();
  const range = $(this).data('range');

  $(`.${range}-particle`).each((i, particle) => {
    const displayValue = i < value ? 'block' : 'none';

    $(particle).css('display', displayValue);
  });
});

