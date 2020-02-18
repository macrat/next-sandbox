import Link from 'next/link';


export default function Header() {
    return (
        <header>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/async"><a>Async</a></Link></li>
                <li><Link href="/lazy-load"><a>LazyLoad</a></Link></li>
                <li><Link href="/context"><a>Context</a></Link></li>
                <li><Link href="/multi-fetch"><a>MultiFetch</a></Link></li>
            </ul>
            <style jsx>{`
                header {
                    border-bottom: 1px solid #666;
                    padding-bottom: 4px;
                    margin-bottom: 6px;
                }
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
