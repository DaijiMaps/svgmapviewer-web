grep -hr title src/content/demos |
while read a title; do
  mkdir -p public/demos/${title}
  pushd ../svgmapviewer-demos/packages/demos/${title}
  pnpx vite build --base /demos/${title}
  popd
  rsync -avz --delete ../svgmapviewer-demos/packages/demos/${title}/dist/ ./public/demos/${title}/
done
