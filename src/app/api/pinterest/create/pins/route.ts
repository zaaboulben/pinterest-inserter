import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('pinterest_access_token');

    if (!accessToken?.value) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    console.log('data', data);
    
    

    const { link, title, description, dominant_color, alt_text, board_id, board_section_id, parent_pin_id, note, media_source,image } = data;
   

    const pinData = {
      link: link || "https://www.pinterest.com/",
      title: title || "Sample Title",
      description: description || "Sample Description",
      dominant_color: dominant_color || "#6E7874",
      alt_text: alt_text || "Sample Alt Text",
      board_id: board_id || "888546270171269453",
      board_section_id: board_section_id || null,
      media_source: {
        source_type: media_source.source_type || "image_base64",
        content_type: media_source.content_type,
        data: image, // URL or file path of the image
        is_standard: true
      },
      parent_pin_id: parent_pin_id || null,
      note: note || "Sample Note"
    };
console.log('pinData', pinData);

    const response = await axios.post('https://api.pinterest.com/v5/pins', pinData, {
      headers: {
        'Authorization': `Bearer ${accessToken?.value}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('response', response.data);

    return NextResponse.json(response.data, { status: 201 });
  } catch (error: any) {
    console.error('Error creating pin:', error.response || error.message);
    return NextResponse.json({ error: 'Failed to create pin', details: error.response?.data || error.message }, { status: 500 });
  }
}
//@ts-ignore
async function getBase64(url: string) {
  const response = await axios.get(url, {
    responseType: 'arraybuffer'
  });

  return Buffer.from(response.data, 'binary').toString('base64');
}