import { useEffect, useState } from "react";
import Post from "../Post";
import React from "react";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_HOST}/post`, { method: "GET" }).then(
            (response) => {
                response.json().then((posts) => {
                    setPosts(posts);
                });
            }
        );
    }, []);

    return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
}