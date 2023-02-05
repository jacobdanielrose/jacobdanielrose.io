import { getTopTracks } from 'lib/spotify';

export const config = {
    runtime: 'edge'
};

export default async function handler() {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 5).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        albumImageUrl: track.album.images[0].url
    }));

    return new Response(JSON.stringify({ tracks }), {
        status: 200,
        headers: {
            'content-type': 'application/json',
            'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        }
    });
}