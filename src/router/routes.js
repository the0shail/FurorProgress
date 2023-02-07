
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/product/:id',
    name: 'product-item',
    component: () => import('pages/ProductPage.vue'),
  },
  {
    path: '/product-add',
    component: () => import('pages/ProductAddPage.vue'),
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
