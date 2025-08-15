args="$@"
if [ -z "${args}" ]; then
  #args=$( cd public/demos; ls -1 )
  args=$( cd src/content/demos; grep -h mapId: *.mdx | sed -e 's,^mapId: ,,' )
fi
echo mapIds: $args

#vite_build_args='--mode development'

for mapId in $args; do
  pushd ../svgmapviewer-demos/packages/demos/${mapId}
  #pnpx vite build --base '' $vite_build_args
  pnpm install
  pnpm build
  popd
  mkdir -p ./public/demos/${mapId}
  rsync -avz --delete ../svgmapviewer-demos/packages/demos/${mapId}/dist/ ./public/demos/${mapId}/
done
