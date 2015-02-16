(function($, App) {
  'use strict';

  $(function() {
    scrivito.content_browser.filter_defaults.upload['text/calendar'] = 'Ics'

    scrivito.content_browser.filters.pdfs = {
      'title': 'PDF',
      'query': App.scrivito.obj_where('_obj_class', 'equals', 'Pdf')
    };
  });
})(jQuery, this);
