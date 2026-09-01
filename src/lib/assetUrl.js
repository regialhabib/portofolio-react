const assetModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
  query: '?url',
})

function getAssetUrl(assetPath) {
  const modulePath = `../assets/${assetPath}`
  return assetModules[modulePath]
}

export { getAssetUrl }
