#!/bin/bash
{ set +x; } 2>/dev/null
source_dir="$( cd -P "$( dirname "$0" )" >/dev/null 2>&1 && pwd )"
root_dir=$(cd $source_dir && cd ../../ && pwd)
cd $root_dir
source script/helpers/_utils.sh

gh_group "Installing docfx..."
dotnet tool update -g docfx
gh_endgroup

gh_group "Purging any old site..."
rm -rf _site
gh_endgroup

gh_group "Generating site into '_site'..."
docfx src/docfx.json
gh_endgroup