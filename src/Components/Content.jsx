import "./Content.css"
import PropTypes from "prop-types";


function Content(props) {
    const { count } = props;
    const paragraphs = [];
    for (let i = 0; i < count; i++){
        paragraphs.push(<p key={i}>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Aperiam aspernatur optio praesentium ducimus 
             laudantium, officiis accusamus adipisci minima! Fugit laboriosam 
             nam modi ut cupiditate blanditiis aspernatur beatae placeat voluptatem impedit!</p>);
    }
    return (<div id="content" className="first-content">
        {paragraphs}
    </div>  );
}

Content.propTypes = {
    count: PropTypes.number
}

Content.defaultProps = {
    count: 5
}
export default Content;