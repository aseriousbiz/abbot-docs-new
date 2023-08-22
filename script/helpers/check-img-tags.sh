#!/bin/bash
#/ Usage: script/helpers/check-img-tags.sh <file>
{ set +x; } 2>/dev/null
source_dir="$( cd -P "$( dirname "$0" )" >/dev/null 2>&1 && pwd )"
root_dir=$(cd $source_dir && cd ../../ && pwd)
cd $root_dir
source script/helpers/_utils.sh

success=true
for file in $(find ./src -type f -name "*.md"); do
    # Collect img tag urls
    img_urls=$(grep -Eo '<img[^>]*>' $file | grep -Eo 'src="[^"]*"' | grep -Eo '"[^"]*"' | grep -Eo '[^"]*' | sort | uniq)

    for url in $img_urls; do
        # Only check if it starts '/public'
        if [[ $url == /public* ]]; then
            # Check if the file exists
            if [[ ! -f $root_dir/src$url ]]; then
                echo "[$file] Missing Image: $url"
                success=false
            fi
        fi
    done
done

if $success; then
    echo "All images are present"
else
    echo "Some images are missing"
    exit 1
fi