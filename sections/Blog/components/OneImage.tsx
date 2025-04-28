import { Picture } from "apps/website/components/Picture.tsx";
import { type ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Imagem
 * @label Imagem
 */
export interface ImageOneColumnSectionProps {
  image: ImageWidget;
}

export default function ImageOneColumnSection({
  image,
}: ImageOneColumnSectionProps) {
  if (!image) {
    return null;
  }

  return (
    <Picture class="flex gap-4">
      <img src={image} alt="Imagem 1" class="w-full" />
    </Picture>
  );
}
