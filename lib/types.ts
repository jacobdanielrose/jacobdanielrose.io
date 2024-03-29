export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
};

export type Song = {
    songUrl: string;
    artist: string;
    title: string;
    ranking: string;
    albumImageUrl: string;
};


export type TopTracks = {
    tracks: Song[];
};

export type Views = {
    total: number;
};
