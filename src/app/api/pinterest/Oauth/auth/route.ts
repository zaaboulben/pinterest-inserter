import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

    const CLIENT_ID = process.env.PINTEREST_CLIENT_ID;
    const REDIRECT_URI = process.env.PINTEREST_REDIRECT_URI;
    const SCOPE = process.env.PINTEREST_SCOPE;
    const STATE = generateRandomString();
    const RESPONCE_TYPE = "code";
    // const URL = `https://api.pinterest.com/oauth/?response_type=${RESPONCE_TYPE}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&scope=${SCOPE}&state=${STATE}`;
    const URL = `https://www.pinterest.com/oauth/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONCE_TYPE}&scope=${SCOPE}&state=${STATE}`;
    // console.log('authUrl', URL,"redirected to pinterest");
    const TokenURL= 'https://api.pinterest.com/v5/oauth/pina_AMAT3SIWAAX5UAQAGDAFIDBM2B7X5DYBACGSPQ4BUTVDGD5B6CSRIUVNXEDXWQXNPEY6RYUV32A7R266H5NTYXEPQI6YFTYA'
    return NextResponse.redirect(URL)
}

// const pinterestAuthUrl = new URL('https://www.pinterest.com/oauth/');
// pinterestAuthUrl.searchParams.append('response_type', 'code');
// pinterestAuthUrl.searchParams.append('redirect_uri', process.env.PINTEREST_REDIRECT_URI);
// pinterestAuthUrl.searchParams.append('client_id', process.env.PINTEREST_CLIENT_ID);
// pinterestAuthUrl.searchParams.append('scope', 'read_public,write_public');
// pinterestAuthUrl.searchParams.append('state', 'secure_random_state'); // Should be generated securely and validated in the callback

// return NextResponse.redirect(pinterestAuthUrl);

function generateRandomString() {
    return [...Array(30)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
}