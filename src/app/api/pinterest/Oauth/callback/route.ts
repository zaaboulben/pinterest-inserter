
//callback route for pinterest
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest,) {
    const REQUEST_URL = new URL(req.nextUrl)
    const CODE = REQUEST_URL.searchParams.get('code');
    const CLIENT_ID = process.env.PINTEREST_CLIENT_ID;
    const CLIENT_SECRET = process.env.PINTEREST_CLIENT_SECRET;
    const REDIRECT_URI = process.env.PINTEREST_REDIRECT_URI;
    const BASE64CREDENTIALS = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
    try {
        const RESPONCE_TOKEN = await axios.post('https://api.pinterest.com/v5/oauth/token', {
            grant_type: 'authorization_code',
            code: CODE,

            redirect_uri: REDIRECT_URI,
        }, {
            headers: {
                'Authorization': `Basic ${BASE64CREDENTIALS}`,
                'Content-Type': 'application/x-www-form-urlencoded'

            }


        })
        const ACCESS_TOKEN = RESPONCE_TOKEN.data.access_token;
        console.log('access token', ACCESS_TOKEN);
        const REFRESH_TOKEN = RESPONCE_TOKEN.data.refresh_token;
        console.log('refresh token', REFRESH_TOKEN);

        console.log(RESPONCE_TOKEN, 'RESPONCE');



        return NextResponse.redirect('http://localhost:3000', {
            status: 302,
            headers: {
                'Set-Cookie': `pinterest_access_token=${ACCESS_TOKEN}; HttpOnly; Secure; SameSite=Strict; Path=/, pinterest_refresh_token=${REFRESH_TOKEN}; HttpOnly; Secure; SameSite=Strict; Path=/,client_id=${CLIENT_ID}; HttpOnly; Secure; SameSite=Strict; Path=/`,

            },


        })


    } catch (error) {
        console.log('error', error);
        return NextResponse.json({ error: 'erreur de auth GGGG ' }, { status: 500 })
    }
}


//url = http://localhost:3000/api/pinterest/Oauth/callback