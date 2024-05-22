import { z } from "zod";

// {
//     "link": "https://www.pinterest.com/",
//     "title": "string",
//     "description": "string",
//     "dominant_color": "#6E7874",
//     "alt_text": "string",
//     "board_id": "string",
//     "board_section_id": "string",
//     "board_owner":
//     -
//     {
//     },
//     "media":
//     -
//     {
//     "media_type": "string"
//     },
//     "media_source":
//     -
//     {
//     One of:

//     Image Base64
//     "source_type": "image_base64",
//     "content_type": "image/jpeg",
//     "data": "string",
//     "is_standard": false
//     },
//     "parent_pin_id": "string",
//     "note": "string"
//     }
export type media_source = {
  source_type: string;
  content_type: string;
  data: string;
  is_standard: boolean;
};
export type createPin = {
  link: string;
  title: string;
  description: string;
  dominant_color: string;
  alt_text: string;
  board_id: string;
  board_section_id: string;
  media: { media_type: string };
  media_source: media_source;
  parent_pin_id: string;
  note: string;
};
export const createPinSchema = z.object({
  link: z.string(),
  title: z.string(),
  description: z.string(),
  dominant_color: z.string(),
  alt_text: z.string(),
  board_id: z.string(),
  board_section_id: z.string(),
  media: z.object({ media_type: z.string() }),
  media_source: z.object({
    source_type: z.string(),
    content_type: z.string(),
    data: z.string(),
    is_standard: z.boolean()
  }),
  parent_pin_id: z.string(),
  note: z.string()
});

export interface userData {
  profile_image: string;
  data: {
    username: string;
    website_url: string;
    board_count: number;
    follower_count: number;
    business_name: string;
    pin_count: number;
    following_count: number;
    id: string;
    monthly_views: number;
    profile_image: string;
  };
}
export type media = {
  pin_thumbnail_urls: string[];
  image_cover_url: string;
};
export type boardData = {
  board_pins_modified_at: string;
  id: string;
  privacy: string;
  description: string;
  created_at: string;
  collaborator_count: number;
  name: string;
  follower_count: number;
  media: media;
  owner: userData;
  pin_count: number;
};

export interface boardList {
  items: boardData[];
  bookmark: null;
}
export type images = {
  url: string;
  width: number;
  height: number;
};

export type pinData = {
  alt_text: string;
  board_id: string;
  board_owner: { username: string };
  board_section_id: string;
  created_at: string;
  creative_type: string;
  description: string;
  dominant_color: string;
  has_been_promoted: boolean;
  id: string;
  is_owner: boolean;
  is_standard: boolean;
  link: string;
  media: {
    images: images;
    media_type: string;
  };
  note: string;
  parent_pin_id: string;
  pin_metrics: string;
  product_tags: string[];
  title: string;
};
export interface pinList {
  bookmark: string;
  items: pinData;
}
