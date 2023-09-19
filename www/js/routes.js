const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/pdf/',
    componentUrl: './pages/pdf.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
