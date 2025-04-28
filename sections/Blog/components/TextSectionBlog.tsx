// deno-lint-ignore-file react-no-danger
import { HTMLWidget } from "apps/admin/widgets.ts";

/**
 * @title Bloco de texto
 * @description Seção de texto para o blog
 */
export interface TextSectionProps {
  /** @title Conteúdo */
  content: HTMLWidget;
}

export default function TextSectionBlog({ content }: TextSectionProps) {
  if (!content) {
    return null;
  }

  return (
    <div class="container text-section-blog">
      <div class="max-w-[800px] m-auto py-20">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
