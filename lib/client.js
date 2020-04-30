/**
 * client.js - YAD application frontend
 *
 * Copyright (c) 2020 Flavio Augusto (@facmachado)
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */


/* jshint esversion: 6 */


/**
 * Initialize
 */

import jQuery from 'jquery';

/** Disable mouse drag and context menu **/
document.oncontextmenu = _ => false;
document.ondragstart = _ => false;

/** Disable browser back button **/
history.pushState(null, null, document.location.href);
window.onpopstate = _ => history.go(+1);


/**
 * main()
 */
$(_ => {
  $(document.body).append('<button cmd="cmd_date">date</button>');

  /** Call linux uname from here **/
  $('[cmd="cmd_date"]').on('click', e => {
    $.ajax({
      url: '/date',
      type: 'post',
      dataType: 'text',
      success: res => alert(`button clicked: ${$(e.target).attr('cmd')}\ncommand result: ${res}`)
    });
  });
});
