import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { getId } from "../ts/getId";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout";

const Page = () => {

    const id = getId() || '';
    const tab = useSelector((state: RootState) => state.tab);
    const navigate = useNavigate();
    const [videoId, setVideoId] = useState('')
    const [item, setItem] = useState({
        id: 0,
        name: '',
        title: '',
        overview: '',
        backdrop_path: '',
        poster_path: ''
    })

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${tab}/${id}?api_key=f9a1ce98e47b99f33a0d55e918a5fc34`)
        .then((res) => {
            setItem(res.data);
        })

        axios.get(`${process.env.REACT_APP_API_URL}/${tab}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            if(res.data.results.length > 0) {
                res.data.results.map((video: any) => {
                    if(video.type == 'Trailer' && video.site == 'YouTube') {
                        setVideoId(video.key);
                    }
                })
            }
        })
    }, []);

    return(
        <Layout>
            <div className="back" onClick={() => navigate('/')}>Back</div>
            <div className="details">
                {
                    videoId != '' ?
                    <iframe className='details_media'
                        title='Youtube player'
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src={`https://youtube.com/embed/${videoId}?autoplay=0`}>
                    </iframe> :
                    <img alt='' className="details_media" 
                        src={`${process.env.REACT_APP_IMAGE_URL}${item.poster_path}`} />
                }
                <h1 className="details_title">{tab === 'tv' ? item.name : item.title}</h1>
                <p className="overview">{item.overview}</p>
            </div>
        </Layout>
    )
}

export default Page