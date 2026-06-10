demos_dirs='
../svgmapviewer.worktrees/demos2/packages/demos
../svgmapviewer-demos/packages/demos
'

args="$@"
if [ -z "${args}" ]; then
  #args=$( cd public/demos; ls -1 )
  args=$( cd src/content/demos; grep -h mapId: *.mdx | sed -e 's,^mapId: ,,' )
fi
echo mapIds: $args

#vite_build_args='--mode development'

for mapId in $args; do
  mapdir=
  case $mapId in
    */*)
      mapId=$(basename $mapId)
      ;;
  esac
  for dir in $demos_dirs; do
    d="$dir/$mapId"
    if [ -d "$d" ]; then
      mapdir="$d"
      break
    fi
  done
  if [ "$mapdir" = "" ]; then
    echo >&2 "map ID ($mapId) not found!"
    continue
  fi

  pushd "$mapdir"
  #pnpx vite build --base '' $vite_build_args
  pnpm install
  env SERVER_BASE=/demos/"$mapId" pnpm build --base /demos/"$mapId"
  popd
  mkdir -p ./public/demos/${mapId}
  rsync -avz --delete ${mapdir}/dist/ ./public/demos/${mapId}/
done
