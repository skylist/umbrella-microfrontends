This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

para funcionar com o proxy reverso foi necessario incluir uma nova chave no `next.config.js`

a chave basePath deve ser igual a que é configurada no `nginx.conf` 

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/next-app'
}

module.exports = nextConfig
``` 