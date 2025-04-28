import { Picture } from "apps/website/components/Picture.tsx";
import { type ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Imagem Três Colunas
 * @label Imagem Três Colunas
 */
export interface ImageThreeColumnSectionProps {
  imageOne: ImageWidget;
  imageTwo: ImageWidget;
  imageThree: ImageWidget;
}

export default function ImageThreeColumnSection({
  imageOne,
  imageTwo,
  imageThree,
}: ImageThreeColumnSectionProps) {
  if (!imageOne || !imageTwo || !imageThree) {
    return null;
  }

  return (
    <Picture class="flex gap-4">
      <img src={imageOne} alt="Imagem 1" class="w-1/3" />
      <img src={imageTwo} alt="Imagem 2" class="w-1/3" />
      <img src={imageThree} alt="Imagem 3" class="w-1/3" />
    </Picture>
  );
}
