import BaseController from './base-controller';
import { inject } from '@ember/service';

export default BaseController.extend({
  auth: inject(),
});
