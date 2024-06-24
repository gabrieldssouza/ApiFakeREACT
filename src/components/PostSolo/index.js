import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostSolo() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        function loadPost() {
            let url = `https://api-fake-blog.onrender.com/postagem/${id}`;

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    console.log(json);
                    setPost(json);
                })
        }
        loadPost();
    }, [id]);

    if (!post) {
        return <div>Carregando</div>;
    }

    return (
        <div className="container disp mt-4" style={{minHeight: '110vh'}}>
            <div className="col-md-4">
                <div className="card card3">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <p>Postado por: {post.profileName}</p>
                        <p>Data da postagem: {post.postDate}</p>
                    </div>
                    <img src={post.thumbImage} className="card-img-top" style={{height: '600px'}} alt="..." />
                </div>
            </div>
        </div>
    );
}

export default PostSolo;
