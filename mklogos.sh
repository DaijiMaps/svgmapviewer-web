inkscape logo-new.inkscape.svg -lj -i Inner -o logo-small.svg
inkscape logo-new.inkscape.svg -l -o logo-normal.svg

for f in logo-normal logo-small; do
  sed \
    -e 's,#ffff00,black,g' \
    -e 's,#000000,yellow,g' \
    < ${f}.svg \
    > ${f}_inv.svg
done

for name in logo-normal logo-small; do
  for suffix in .svg _inv.svg; do
    f=${name}${suffix}
    perl -0777 -pi -le '
s,display:inline[;]?,,gmos;
s, style="",,gmos;
s, width="14mm",,gmos;
s, height="14mm",,gmos;
' $f
    svgo $f
  done
done
