import { createRouter, createWebHistory } from 'vue-router';
import LatestResultsPage from './path-to/LatestResultsPage.vue';

const routes = [
  { path: '/latest-results', component: LatestResultsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
