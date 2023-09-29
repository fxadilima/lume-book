import lume from "lume/mod.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.5.1/toc.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.5.1/title.ts";
import image from "https://deno.land/x/lume_markdown_plugins@v0.5.1/image.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.5.1/footnotes.ts";
import remark from 'lume/plugins/remark.ts';
import codeHighlight from 'lume/plugins/code_highlight.ts';
import metas from 'lume/plugins/metas.ts';
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
    prettyUrls: false
}).use(toc())
  .use(title())
  .use(image())
  .use(footnotes())
  .use(remark())
  .use(codeHighlight())
  .use(metas())
  .use(sitemap());

site.ignore((path) => {
    if (path.startsWith("/tests")) {
        console.log("Ignoring " + path);
        return true;
    }
    return false;
});

site.copy('book.svg');
site.copy('styles');
site.copy('images');

export default site;
