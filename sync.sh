( cd public/demos; ls -1 ) |
while read mapId; do
  pushd ../svgmapviewer-demos/packages/demos/${mapId}
  pnpx vite build --base /demos/${mapId}
  popd
  rsync -avz --delete ../svgmapviewer-demos/packages/demos/${mapId}/dist/ ./public/demos/${mapId}/
done
