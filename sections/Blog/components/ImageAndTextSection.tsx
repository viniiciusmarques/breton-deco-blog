// deno-lint-ignore-file react-no-danger
import { Picture } from "apps/website/components/Picture.tsx";
import { type ImageWidget } from "apps/admin/widgets.ts";
import { type HTMLWidget } from "apps/admin/widgets.ts";

/**
 * @title Imagem e Texto
 */
export interface ImageAndTextSectionProps {
  image: ImageWidget;
  text: HTMLWidget;
}

/**
 * @title Imagem e Texto
 */
export default function ImageAndTextSection({
  image,
  text,
}: ImageAndTextSectionProps) {
  if (!image || !text) {
    return null;
  }

  return (
    <div class="flex items-center gap-4">
      <Picture class="w-1/2">
        <img class="w-full" src={image} alt="Imagem 1" />
      </Picture>
      <div class="w-1/2" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
