
const routes = [
  {
    path: '/manager',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/manager/Index.vue') },
      { path: 'page2', component: () => import('pages/manager/new-index.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/adminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Index.vue') },
      { path: 'page2', component: () => import('pages/admin/new-index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
