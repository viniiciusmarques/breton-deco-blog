import { VideoWidget } from "apps/admin/widgets.ts";

/**
 * @title Bloco de video
 * @description Seção de video para o blog
 * @label Bloco de video
 */
export interface VideoSectionProps {
  /**
   * @title Conteúdo
   */
  video: VideoWidget;
}

export default function VideoSection({ video }: VideoSectionProps) {
  if (!video) return null;

  return (
    <div class="video-section-blog">
      <div src={video} autoPlay loop muted playsInline controls={false} />
    </div>
  );
}
