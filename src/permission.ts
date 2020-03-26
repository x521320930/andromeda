import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route } from 'vue-router';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
