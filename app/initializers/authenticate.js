export function initialize(application) {
  application.inject('route', 'auth', 'service:auth');
}

export default {
  initialize
};
