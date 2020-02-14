import Link from 'next/link';


export default function Header() {
    return (
        <header>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/async"><a>Async</a></Link></li>
            </ul>
            <style jsx>{`
                ul {
                    margin: 0;
                    padding: 0;
                }
                li {
                    display: inline-block;
                    margin: 0 1em;
                }
            `}</style>
        </header>
    );
}
