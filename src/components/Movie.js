// 이건 app.js에서 떨어져나온 하나의 컴포넌트 = react 장점 중 하나 
// movie component은 사실 그냥 Movie라는 function
// movie component가 부모 component(app.js)로부터 모든 prop(=properties)를 받아옴
// parent component에서 직접 가져오는 이름은 api의 이름 그대로 가져와야 하지만 prop이름은 내맘대로 지어도됨
// ex. <Movie posterImg={movie.poster_path} />
import PropTypes from 'prop-types'

function Movie({id, posterImg, title, rating, adult, releaseDate, summary}) {
    return <li>
        <div key={id}>
            <img src={posterImg} alt={`poster ${title}`} />
            <h3>{title}</h3>
            <span>{(Math.round(rating * 100) /100).toFixed(2)}</span>
            <div>{adult ? <span>19세</span> : <span>전연령</span>}</div>
            <span>{releaseDate}</span>
            <p>{summary}</p>
        </div>
    </li>
}

Movie.propTypes = {
    posterImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
};

export default Movie;