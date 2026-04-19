import { NextResponse } from 'next/server';

// ── FILL THESE IN ──────────────────────────────────────────────────
// 1. Go to https://developers.facebook.com/tools/explorer/
// 2. Generate a Page Access Token for AhanaGynaecare
// 3. Add it to your .env.local file as FACEBOOK_PAGE_ACCESS_TOKEN
// ──────────────────────────────────────────────────────────────────
const FB_PAGE_ID = 'AhanaGynaecare';
const FB_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get('cursor');

  if (!FB_TOKEN) {
    // Return fallback local photos if no token
    return NextResponse.json({ photos: getFallbackPhotos(), nextCursor: null, isFbToken: false });
  }

  try {
    let url = `https://graph.facebook.com/v19.0/${FB_PAGE_ID}/photos?fields=id,source,name,images&limit=12&access_token=${FB_TOKEN}`;
    if (cursor) url += `&after=${cursor}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      console.error('Facebook API error:', data.error);
      return NextResponse.json({ photos: getFallbackPhotos(), nextCursor: null, isFbToken: false });
    }

    const photos = (data.data || []).map(photo => ({
      id: photo.id,
      url: photo.images?.[0]?.source || photo.source,
      caption: photo.name || '',
    }));

    const nextCursor = data.paging?.cursors?.after || null;
    const hasNextPage = !!data.paging?.next;

    return NextResponse.json({ photos, nextCursor: hasNextPage ? nextCursor : null, isFbToken: true });
  } catch (err) {
    console.error('Gallery API error:', err);
    return NextResponse.json({ photos: getFallbackPhotos(), nextCursor: null, isFbToken: false });
  }
}

function getFallbackPhotos() {
  const gallery = [];
  for (let i = 1; i <= 6; i++) {
    gallery.push({
      id: `local-${i}`,
      url: `/assets/gallery/photo${i}.jpg`,
      caption: `Ahana Gynaecare & IVF - Gallery Photo ${i}`,
    });
  }
  return gallery;
}
