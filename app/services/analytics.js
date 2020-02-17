import Service from '@ember/service';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';

export default Service.extend({
  ajax: inject(),
  report: task(function * () {
    yield setTimeout(0);
    this.get('ajax').request('/api/analytics/report/', {
      method: 'POST',
      data: {
        user_agent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href,
        action: 'page-view',
      }
    })
  }).maxConcurrency(4).enqueue(),
});
