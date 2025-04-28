import { Picture } from "apps/website/components/Picture.tsx";
import { type ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Imagem Duas Colunas
 * @label Imagem Duas Colunas
 */
export interface ImageTwoColumnSectionProps {
  imageOne: ImageWidget;
  imageTwo: ImageWidget;
}

export default function ImageTwoColumnSection({
  imageOne,
  imageTwo,
}: ImageTwoColumnSectionProps) {
  if (!imageOne || !imageTwo) {
    return null;
  }

  return (
    <Picture class="flex gap-4">
      <img src={imageOne} alt="Imagem 1" class="w-1/2" />
      <img src={imageTwo} alt="Imagem 2" class="w-1/2" />
    </Picture>
  );
}
