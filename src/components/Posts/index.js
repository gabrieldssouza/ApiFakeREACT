import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Post() {
    const [api, setApi] = useState([]);

    useEffect(() => {
        function loadApi() {
            let url = "https://api-fake-blog.onrender.com/postagens";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    console.log(json);
                    setApi(json);
                })
                .catch((error) => {
                    console.error('Erro ao carregar API:', error);
                });
        }
        loadApi();
    }, []);

    return (
        <div className="container disp">
            {api.map((item, index) => (
                <div className="col-md-4 col-sm-12 mt-4" key={index}>
                    <div className="card mb-3 card2">
                        <img src={item.thumbImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <Link to={`/post/${index}`} className="btn btn-primary">Veja mais</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
