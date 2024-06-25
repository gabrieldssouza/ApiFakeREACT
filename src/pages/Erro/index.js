import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Erro(){
    return(
        <>
            <Header/>
            <div className="container mt-5" style={{minHeight: '60vh'}}>
                <h1>Erro 404</h1>
                <h2>Página não encontrada!</h2>
            </div>
            <Footer/>
        </>
    );
}

export default Erro;