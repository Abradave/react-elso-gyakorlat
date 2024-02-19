import './Footer.css'
import PropTypes from "prop-types";

function Footer(props) {
    const { name, link } = props;

    return ( <footer className="first-footer"><p>Készítette: {name} - elérhető <a href={link}>itt</a> .</p></footer> );
}

Footer.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Footer;