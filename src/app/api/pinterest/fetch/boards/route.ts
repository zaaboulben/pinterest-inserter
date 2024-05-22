




import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET(res: NextResponse, req: NextRequest) {
    const cookieStore = cookies()
    const ACCESS_TOKEN = cookieStore.get('pinterest_access_token')
    const REFRESH_TOKEN = cookieStore.get('pinterest_refresh_token')
    const CLIENT_ID = cookieStore.get('client_id')
     console.log('access token', ACCESS_TOKEN);
    // console.log('refresh token', REFRESH_TOKEN);
    // console.log('client id', CLIENT_ID);

    if (!ACCESS_TOKEN) {

        return NextResponse.json({ error: 'error no token please connect' }, { status: 500 })

    }
    try {
    const responce = await axios.get('https://api.pinterest.com/v5/boards', {

        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN?.value}`,
            'Content-Type': 'application/json'
        },

    })

    console.log('responce', responce.data);





    return NextResponse.json({responce: responce.data}, { status: 200 })


}catch(error: any){
    console.error('Failed to fetch boards', error.response || error.message);
    return NextResponse.json({ error: 'Failed to fetch boards', details: error.response?.data || error.message }, { status: 500 });
}

}