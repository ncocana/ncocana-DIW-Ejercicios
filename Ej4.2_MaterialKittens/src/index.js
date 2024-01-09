import './css/application.css';
import './sass/application.scss';

// 1. Top App Bar
import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


// 2. Tab Bar + Tab Scroller
import {MDCTabBar} from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// // 3. Layout Grid | Error. There's no component.
// import {MDCLayoutGrid} from '@material/layout-grid';

// const layoutGrid = new MDCLayoutGrid(document.querySelector('.mdc-layout-grid'));

// 4. Card
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
