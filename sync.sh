args="$@"
if [ -z "${args}" ]; then
  args=$( cd public/demos; ls -1 )
fi
echo mapIds: $args

#vite_build_args='--mode development'

for mapId in $args; do
  pushd ../svgmapviewer-demos/packages/demos/${mapId}
  #pnpx vite build --base '' $vite_build_args
  pnpm build
  popd
  rsync -avz --delete ../svgmapviewer-demos/packages/demos/${mapId}/dist/ ./public/demos/${mapId}/
done
