/**
 * (c) 2015 Mike North <michael.l.north@gmail.com>
 * MIT License
 */

(function () {

  'use strict';

  var serviceUrls = {
    npm: 'https://www.npmjs.org/package/',
    bower: 'https://bower.herokuapp.com/packages/search/',
    composer: 'https://packagist.org/packages/'
  };

  start ();

  function start () {
    const members = [ 'kang85', 'ksh-code', 'kimgenius', 'edencha', 'hosysy', 'wileyday', 'all' ]
    const nicknames = {
      'kang85': 'Billy',
      'ksh-code': 'Henry',
      'kimgenius': 'Genie',
      'edencha': 'Eden',
      'hosysy': 'Hosy',
      'wileyday': 'Wiley',
      'all': '전체'
    }
    members.forEach(member => {
      let $a = $('<a />', {
        class: 'hide-md',
        name: 'assignee_link',
        text: `${nicknames[member]}`,
        style: "cursor: pointer; margin-right: 15px; font-size: 20px;"
      })
      $a.click((e) => {
        console.log('clicked')
        let $input = $('input[type=search][name=card_filter_query]')
        $input.val(`assignee:${member}`)
        let [ url ] = document.location.href.split('?')
        if(member === 'all') return document.location = url
        document.location = url + `?card_filter_query=assignee%3A${member}`
      })
      $('.project-header-controls').prepend($a);
    })
  }
}());
