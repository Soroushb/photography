import React, { useEffect } from "react";
import { Pagination, PaginationItem} from '@mui/lab'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

const Paginate = ({page}) => {
    
    const dispatch = useDispatch();

    useEffect(() => {

        if(page) dispatch(getPosts(page))
    }, [page])

    return(
        <Pagination 
        count={5}
        page={1}
        variant="outlined"
        color="primary"
        renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/posts?page=${1}`}/>
        )}/>
    )
}

export default Paginate