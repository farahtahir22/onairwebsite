/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
// Project pages at https://user.github.io/<repo>/ need this prefix. Custom domains
// serve the same files from the site root, so asset URLs must be /_next/... — set
// GITHUB_PAGES_ROOT_SITE=true in CI (repo variable) when using a custom domain.
const useRootSite =
  process.env.GITHUB_PAGES_ROOT_SITE === 'true' ||
  process.env.GITHUB_PAGES_ROOT_SITE === '1'
const basePath =
  useRootSite ? '' : isGithubActions && repoName ? `/${repoName}` : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig
