/**
 * Renders the global header component.
 *
 * This component is intended to be displayed at the top of all pages.
 * It renders a heading based on the provided title prop.
 *
 * @param {{ input: string }} props - Component props object.
 * @param {string} props.input - The text content displayed inside the <h1> element.
 * @returns {JSX.Element} The header section containing the page title.
 */
export default function Header(props){
    return(<header className = "header">
        <h1 >{props.input}</h1>
    </header>);
}