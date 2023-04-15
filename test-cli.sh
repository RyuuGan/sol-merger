WITHOUT_COMMENTS=(
 compiled/DefaultParamentersInheritance.sol
 compiled/DoubleNamedImports.sol
 compiled/MultiImports.sol
 compiled/NamedImportOnlySelectedFailContract.sol
)

SKIPPED=(
  compiled/EmptyFile.sol
  compiled/LocalImportsWithSPDX.sol
  compiled/ImportWithAdditionalRoot.sol
)

PROCESSED_GLOB="test/contracts/!(ImportWithAdditionalRoot).sol"

compareFile() {
  local file="$1";
  echo "Comparing file: $file"
  perl -pi -e 'chomp if eof' "test/$file"
  perl -pi -e 'chomp if eof' "$file"
  cmp -s $file test/$file;
  if [ $? -ne 0 ]
  then
    echo "FAILED: $file"
    echo ">>>>> $file"
    cat $file
    echo -e "\n>>>> test/$file"
    cat test/$file
    exit 1
  fi
}

# Compare files with comments

rm -rf compiled
sol-merger "$PROCESSED_GLOB" compiled

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
sol-merger --export-plugin ./dist/lib/plugins/SPDXLicenseRemovePlugin.js "$PROCESSED_GLOB" compiled

compareFile compiled/LocalImportsWithSPDX.sol

rm -rf compiled
sol-merger --export-plugin SPDXLicenseRemovePlugin "$PROCESSED_GLOB" compiled

compareFile compiled/LocalImportsWithSPDX.sol

echo "Compilation with --additional-root option"
rm -rf compiled
sol-merger --additional-root "./test/contracts/imports" "test/contracts/ImportWithAdditionalRoot.sol" compiled

compareFile compiled/ImportWithAdditionalRoot.sol

# Remove Comments
echo "Compilation with --remove-comments option"
rm -rf compiled
sol-merger --remove-comments "$PROCESSED_GLOB" compiled

for file in "${WITHOUT_COMMENTS[@]}"
do
  compareFile $file
done
