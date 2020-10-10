const Individuation = () => import('views/individuation/Individuation');
const MusicListDetail = () => import('views/list-detail/MusicListDetail')
const AllMusicList = () => import('views/music-list/all-music-list')
const RankList = () => import('views/rank-list/rank-list')
const ArtistList = () => import('views/artist-list/artist-category')
const ArtistDetail = () => import('views/artist-detail/artist-detail')
const MvCategory = () => import('views/mv/mv-category')
const MvDetail = () => import('views/mv/mv-detail')
const Mv = () => import('views/mv/mv')
const NewSongs = () => import('views/new-songs/new-songs')
const AlbumDetail = () => import('views/album-detail/album-detail')
const SearchDetail=()=>import('views/search-detail/search-detail')

const routes = [
    {
        path: '/',
        redirect: '/individuation'
    },
    {
        path: '/individuation',
        component: Individuation
    },
    {
        path: '/musiclistdetail/:id/:time',
        component: MusicListDetail
    },
    {
        path: '/allmusiclist',
        component: AllMusicList
    },
    {
        path: '/ranklist',
        component: RankList
    },
    {
        path: '/artist-list',
        component: ArtistList
    },
    {
        path: '/artist-detail',
        name: 'artist-detail',
        component: ArtistDetail
    },
    {
        path: '/mv-list',
        component: MvCategory
    },
    {
        path: '/mv-detail/:id',
        component: MvDetail
    },
    {
        path: '/mv',
        component: Mv
    },
    {
        path: '/new-songs',
        component: NewSongs
    },
    {
        path: '/album-detail',
        component: AlbumDetail
    },
    {
        path: '/search-detail/:keyword',
        component: SearchDetail
    },
]
export default routes