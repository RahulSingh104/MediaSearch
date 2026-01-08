
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
// import { setLoading, setError, setResults } from '../redux/features/searchSlice'
// import { useEffect } from 'react'
// import ResultCard from './ResultCard'

// const ResultGrid = () => {

//     const dispatch = useDispatch()
//     const { query, activeTabs, results, loading, error } = useSelector((store) => store.search)

//     console.log("Redux search state:", useSelector(store => store.search));


//     useEffect(function () {
//         if (!query) return
//         const getData = async () => {
//             try {
//                 dispatch(setLoading())
//                 let data = []
//                 if (activeTabs == 'photos') {
//                     let response = await fetchPhotos(query)                   
//                     data = response.results.map((item) => ({
//                         id: item.id,
//                         type: 'photo',
//                         title: item.alt_description,
//                         thumbnail: item.urls.small,
//                         src: item.urls.full,
//                         url:item.links.html
//                     }))
//                 }
//                 if (activeTabs == 'videos') {
//                     let response = await fetchVideos(query)
                    

//                     data = response.videos.map((item) => ({
//                         id: item.id,
//                         type: 'video',
//                         title: item.user.name || 'video',
//                         thumbnail: item.image,
//                         src: item.video_files[0].link,
//                         url:item.url
//                     }))
//                 }
//                 if (activeTabs == 'gif') {
//                     let response = await fetchGIF(query)

//                     data = response.data.results.map((item) => ({
//                         id: item.id,
//                         title: item.title || 'GIF',
//                         type: 'gif',
//                         thumbnail: item.media_formats.tinygif.url,
//                         src: item.media_formats.gif.url,
//                         url:item.url
//                     }))

//                 }
//                 dispatch(setResults(data))

//             } catch (err) {
//                 dispatch(setError(err.message))
//             }
//         }
//         getData()
//     }, [query, activeTabs,dispatch])
//     console.log("QUERY:", query);
// console.log("ACTIVE TAB:", activeTabs);


//     if (error) return <h1>Error</h1>
//     if (loading) return <h1>Loading...</h1>

//     return (
//         <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
//             {results.map((item, idx) => {
//                 return <div key={idx}>
//                     <ResultCard item={item} />
//                 </div>
//             })}
//         </div>
//     )
// }

// export default ResultGrid


import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()

    // ✅ READ STATE ONCE (important)
    const { query, activeTabs, results, loading, error } =
        useSelector((store) => store.search)

    // 🔍 DEBUG: full redux search state
    console.log("REDUX SEARCH STATE:", {
        query,
        activeTabs,
        resultsLength: results.length,
        loading,
        error
    })

    useEffect(() => {

        // 🔍 DEBUG: query check
        console.log("USE EFFECT TRIGGERED");
        console.log("QUERY:", query);
        console.log("ACTIVE TAB:", activeTabs);

        if (!query) {
            console.log("❌ Query empty, skipping fetch");
            return;
        }

        const getData = async () => {
            try {
                dispatch(setLoading());
                let data = [];

                if (activeTabs === 'photos') {
                    console.log("📸 Fetching PHOTOS");

                    const response = await fetchPhotos(query);

                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description || 'Photo',
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html,
                    }));
                }

                if (activeTabs === 'videos') {
                    console.log("🎥 Fetching VIDEOS");

                    const response = await fetchVideos(query);

                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user?.name || 'Video',
                        thumbnail: item.image,
                        src: item.video_files?.[0]?.link,
                        url: item.url,
                    }));
                }

                if (activeTabs === 'gif') {
                    console.log("🎞 Fetching GIFS");

                    const response = await fetchGIF(query);

                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'GIF',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url: item.url,
                    }));
                }

                console.log("✅ FETCHED DATA COUNT:", data.length);
                dispatch(setResults(data));

            } catch (err) {
                console.error("❌ FETCH ERROR:", err);
                dispatch(setError(err.message));
            }
        };

        getData();

    }, [query, activeTabs, dispatch]);

    if (error) return <h1>Error: {error}</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            {results.map((item) => (
                <ResultCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ResultGrid;
