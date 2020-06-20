WITHOUT_COMMENTS=(
 compiled/DefaultParamentersInheritance.sol
 compiled/DoubleNamedImports.sol
 compiled/MultiImports.sol
 compiled/NamedImportOnlySelectedFailContract.sol
)

SKIPPED=(
  compiled/EmptyFile.sol
  compiled/LocalImportsWithSPDX.sol
)

compareFile() {
  local file="$1";
  echo "Comparing file: $file"
  cmp -s $file test/$file;
  if [ $? -ne 0 ]
  then
    exit 1
  fi
}

# Compare files with comments

rm -rf compiled
sol-merger "test/contracts/*.sol" compiled

echo "Default compilation (with comments)"

FILES=($(ls compiled/*.sol))
for file in "${FILES[@]}"
do
  if [[ " ${WITHOUT_COMMENTS[@]} " =~ " $file " ]]; then
    continue
  fi
  if [[ " ${SKIPPED[@]} " =~ " $file " ]]; then
    continue
  fi
  compareFile $file
done

# Remove SPDX Plugin
echo "Compilation with plugins"
rm -rf compiled
sol-merger --export-plugin ./dist/lib/plugins/SPDXLicenseRemovePlugin.js "test/contracts/*.sol" compiled

compareFile compiled/LocalImportsWithSPDX.sol

rm -rf compiled
sol-merger --export-plugin SPDXLicenseRemovePlugin "test/contracts/*.sol" compiled

compareFile compiled/LocalImportsWithSPDX.sol

# Remove Comments
echo "Compilation with --remove-comments option"
rm -rf compiled
sol-merger --remove-comments "test/contracts/*.sol" compiled

for file in "${WITHOUT_COMMENTS[@]}"
do
  compareFile $file
done
