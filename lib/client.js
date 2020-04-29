/* jshint esversion: 8 */

import jQuery from 'jquery';

/* Desabilitar botão direito e arrastar */
document.oncontextmenu = _ => false;
document.ondragstart = _ => false;

/* Desabilitar botão voltar do navegador */
history.pushState(null, null, document.location.href);
window.onpopstate = _ => history.go(+1);

$(_ => {
  $(document.body).append('<button cmd="cmd_test">0</button>');

  $('[cmd]').on('click', e => {
    if ($(e.target).attr('cmd') !== '') {
      $.ajax({
        dataType: 'text',
        type: 'post',
        url: '/data',
        success: res => alert(`command button clicked: ${$(e.target).attr('cmd')}\nresult: "${res}"`)
      })
    }
  });
});
