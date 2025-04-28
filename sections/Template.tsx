// deno-lint-ignore-file react-no-danger
import { BlogPost } from "../types.ts";
import { CSS } from "../static/css.ts";

export interface Props {
  post: BlogPost | null;
}

export default function Template({ post }: Props) {
  if (!post) return null;

  const { sections = [] } = post;

  console.log("template", sections);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div class="container">
        {sections?.map(({ Component, props }) => {
          if (!Component || !props) {
            return null;
          }

          return (
            <div>
              <Component {...props} />
            </div>
          );
        })}
      </div>
    </>
  );
}
