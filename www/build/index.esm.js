import './index-6de32e7e.js';
import { A as ActiveRouter } from './active-router-7e7a9682.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
