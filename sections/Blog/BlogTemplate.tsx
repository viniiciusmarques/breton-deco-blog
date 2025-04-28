// deno-lint-ignore-file
// deno-lint-ignore-file react-no-danger
import { CSS } from "../../static/css.ts";
import Image from "apps/website/components/Image.tsx";
import { BlogPost } from "../../types.ts";
import { useId } from "preact/hooks";

export interface Props {
  post: BlogPost | null;
}

export default function Template({ post }: Props) {
  if (!post) return null;

  const id = useId();

  const { image, sections = [] } = post;

  console.log(sections);

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {image && (
        <div id="main-banner" class="w-full">
          <Image
            className="w-full object-cover aspect-video max-h-[560px]"
            width={600}
            src={image}
          />
        </div>
      )}
      <div class="blog-breton">
        {sections?.map((section) => {
          const { Component, props } = section;

          if (!Component || !props) return null;

          return (
            <div key={id}>
              <Component {...props} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
