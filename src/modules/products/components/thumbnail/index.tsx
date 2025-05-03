import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  "data-testid"?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  "data-testid": dataTestid,
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <Container
      className={clx(
        "relative w-full overflow-hidden bg-white/80 rounded-lg border border-[#2c524c]/10 group-hover:border-[#c26d43]/20 transition-all duration-300 ease-out",
        "hover:shadow-[0_8px_30px_rgb(44,82,76,0.04)] backdrop-blur-sm",
        className,
        {
          "aspect-[6/9]": isFeatured,
          "aspect-[2/3]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[200px]": size === "small",
          "w-[300px]": size === "medium",
          "w-[450px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
      {/* Add subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c524c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-105"
      draggable={false}
      quality={85}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-[#f8f7f4]">
      <PlaceholderImage size={size === "small" ? 20 : 28} className="text-[#2c524c]/30" />
    </div>
  )
}

export default Thumbnail
