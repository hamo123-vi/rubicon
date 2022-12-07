import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Layout } from "../Layout";
import search_icon from '../images/search.png';
import { enterData, enterPage, enterSearchTerm, enterTab, enterTotalPages } from "../rootSlice";
import { RootState } from "../store";
import { focus } from "../ts/focus";
import { display } from "../ts/display";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { smooth } from "../ts/smooth";
import { Empty } from "./Empty";

export const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tab = useSelector((state : RootState) => state.tab);
    const searchterm = useSelector((state : RootState) => state.searchterm);
    const data = useSelector((state : RootState) => state.data);
    const page = useSelector((state : RootState) => state.page);
    const total_pages = useSelector((state : RootState) => state.total_pages);

    useEffect(() => {

        if(searchterm.length < 3) {
            axios.get(`${process.env.REACT_APP_API_URL}/${tab}/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                var temp = [];
                for(let i = 0; i < 10; i++) {
                    temp.push(res.data.results[i])
                }
                dispatch(enterData(temp))
                dispatch(enterTotalPages(res.data.total_pages))
            })
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/search/${tab}?query=${searchterm}&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                dispatch(enterData(res.data.results))
                dispatch(enterTotalPages(res.data.total_pages))
            })
        }

    }, [tab, searchterm, page])

    const setTv = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;
        dispatch(enterTab(button.value));
        smooth()
    };

    const setMovie = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;
        dispatch(enterTab(button.value));
    };

    const setPage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const input: HTMLButtonElement = event.currentTarget;
        dispatch(enterPage(input.value));
        smooth()
    };

    const focusSearch = (input_id: string) => {
        focus(input_id);
    };

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input: HTMLInputElement = event.currentTarget;
        setTimeout(() => {
            dispatch(enterPage(1));
            dispatch(enterSearchTerm(input.value))
        }, 1000)
    };

    return(
        <Layout>
            <div className="tab_container">
                <div className="tb_container">
                    <button type="button" value="tv"
                        className={tab === 'tv' ? "tb tb_left tb_active" : "tb tb_left"}
                            onClick={setTv}>
                        TV Shows
                    </button>
                    <button type="button" value="movie"
                        className={tab === 'movie' ? "tb tb_right tb_active" : "tb tb_right"}
                            onClick={setMovie}>
                        Movies
                    </button>
                </div>
                <div className="search_container">
                    <img id='si' alt='Search icon' onClick={() => focusSearch('sb')} className="search_icon" src={search_icon} />
                    <input id='sb' placeholder="Search..."
                        autoComplete="off"
                            onFocus={(e) => display('si', e.target.value.length)}
                                onBlur={(e) => display('si', e.target.value.length)}
                                    type="text" className="search_bar" onChange={search}
                                        defaultValue={searchterm}/>
                </div>
                <div className="card_container">
                    {
                        data.length > 0 ?
                            data.map((item) => (
                                <div className="card" key={item.id} onClick={() => navigate(`/${tab}/${item.id}`)}>
                                <Card tab={tab} id={item.id}
                                    name={tab === 'movie' ? item.title: item.name}
                                    media={item.backdrop_path}/>
                                    </div>
                            )) : <Empty />
                    }
                </div>
                { searchterm.length > 2 && (data.length === Number(20) || page == total_pages) ?
                <div className="pagination">
                    {   page > 2 ?
                        <button onClick={setPage} value={Number(1)} className="page_button">1</button>:''
                    }
                    {   page > 1 ?
                        <button onClick={setPage} value={Number(page) - Number(1)} className="page_button">{Number(page) - Number(1)}</button>: ''
                    }
                    <button className="page_button active" disabled={true}>{page}</button>
                    {   page < total_pages - 1 ? 
                        <button onClick={setPage} value={Number(page) + Number(1)} className="page_button">{Number(page) + Number(1)}</button>: ''
                    }
                    
                    {   page <= total_pages - 1 ?
                        <button onClick={setPage} value={Number(total_pages)} className="page_button">{total_pages}</button>: ''
                    }
                </div> : ''}
            </div>
        </Layout>
    )
}