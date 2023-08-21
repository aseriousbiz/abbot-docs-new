# Abbot Docs Site

## Repo Setup

1. Install .NET SDK: https://dotnet.microsoft.com/en-us/
2. Run `script/bootstrap`

## Running the site locally

1. Run `script/server`

Make changes and the server should auto-refresh!

## Using images

Images should be placed in the `public/images` folder.
We create a folder under 'articles/[uid]' for each article, and place images in there.
There is a utility script called `script/img-place` that will do this for you in one of three ways.
In each of the below examples, we're placing a PNG image in the article with UID `playbooks.foo` called `cool-stuff.png`

1. From a URL. If you have a URL for an image you want to place you can use img-place to do it:
    1. **Always** ensure you have the rights to use the image!
    2. Run `script/img-place -u https://example.com/image.png playbooks.foo cool-stuff.png`
    3. You should see `Reference it with: '<img src="/public/images/playbooks.foo/cool-stuff.png">'` in the output.
    4. Copy that and put it in your article.
2. (macOS only, for now) From the Clipboard. If you have an image in the clipboard, you can also place it with img-place
    1. Run `script/img-place --clip playbooks.foo cool-stuff.png`
    2. You should see `Reference it with: '<img src="/public/images/playbooks.foo/cool-stuff.png">'` in the output.
    3. Copy that and put it in your article.
3. From a local path:
    1. Run `script/img-place --path /path/to/image.png playbooks.foo cool-stuff.png`
    2. You should see `Reference it with: '<img src="/public/images/playbooks.foo/cool-stuff.png">'` in the output.
    3. Copy that and put it in your article.

If you have an article that already references images by URL, use '--url' to convert them to local images and add the '--replace' flag, which will replace the URL with the local image reference in all our articles.
