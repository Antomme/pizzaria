/**
 * Renders the global footer component.
 *
 * This component is intended to be displayed at the bottom
 * of every page in the application. It contains static
 * navigation links such as "Über uns", "Impressum", and "Kontakt".
 *
 * @returns {JSX.Element} The footer section with navigation links.
 */

export function Footer(){
    return (<footer className="footer">
        <a>Über uns</a>
        <a>Impressum</a>
        <a>Kontakt</a>
    </footer>);
}