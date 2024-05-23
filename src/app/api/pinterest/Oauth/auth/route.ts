import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

    const CLIENT_ID = process.env.PINTEREST_CLIENT_ID;
    const REDIRECT_URI = process.env.PINTEREST_REDIRECT_URI;
    const SCOPE = process.env.PINTEREST_SCOPE;
    const STATE = generateRandomString();
    const RESPONCE_TYPE = "code";
    const URL = `https://www.pinterest.com/oauth/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONCE_TYPE}&scope=${SCOPE}&state=${STATE}`;
    return NextResponse.redirect(URL)
}



function generateRandomString() {
    return [...Array(30)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
}
