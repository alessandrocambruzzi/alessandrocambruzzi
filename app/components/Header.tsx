export default function Header() {
    return (
        <header className="text-center text-white py-8 border-[#4d4d4d] md:flex itens-center justify-between">
            <h4 id="home">🏫ESCOLA TECNOLÓGICA📘</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="#home">
                    Home &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#cursos">
                    Cursos &nbsp;
                </a>
                <a className="hover:text-[#00e77f]" href="#">
                    Login &nbsp;{" "}
                </a>
                <a className="hover:text-[#00e77f]" href="#contato">
                    Contato &nbsp;
                </a>
            </nav>
        </header>
    )
}