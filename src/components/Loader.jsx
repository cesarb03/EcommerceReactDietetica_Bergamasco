import loader from './loader.gif';
import styled from "styled-components";

const Loader = () => {
    return (

        <Lod>
            <div className="loaderContainer">
                <img src={loader} alt="Cargando..." />
            </div>
        </Lod>
    )
}

export default Loader;


const Lod = styled.div`
.loaderContainer img{
    display: block;
    margin: 0 auto;
}

`