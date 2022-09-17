import { useState } from 'react';
import type { ReactNode } from 'react';

const Button = ({ onClick, outline, children }: { onClick?: () => void, outline?: boolean, children?: ReactNode }) => {
    const color = outline ? "hover:bg-green-400 text-green-500 hover:text-white" : "bg-green-500 hover:bg-green-400 text-white";
    return (
        <button onClick={onClick} className={`border border-green-500 font-bold py-2 px-6 rounded mx-2 uppercase ${color}`}>
            {children}
        </button>
    );
};

const Modal = ({ opened, onClosed, children }: { opened: boolean, onClosed?: () => void, children?: ReactNode }) => {
    if (!opened) {
        return undefined;
    }

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/40 flex justify-center items-center"
            onClick={(ev) => {
                if (ev.target === ev.currentTarget) {
                    onClosed?.();
                }
            }}>
            <div className="bg-white p-8 m-4 w-96">
                {children}
            </div>
        </div>
    );
}

const Index = () => {
    const [message, setMessage] = useState('');

    return (
        <>
            <header className="bg-green-200 px-4 py-8">
                <h1 className="container mx-auto bg-white p-4 max-w-sm rounded-lg shadow-md">Hello Tailwind CSS</h1>
            </header>
            <main className="md:container md:mx-auto p-8">
                <p>Hello world! This is a test.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="container text-right mt-2">
                    <Button onClick={() => setMessage("cancelled!")} outline>cancel</Button>
                    <Button onClick={() => setMessage("ok!")}>OK</Button>
                </div>
                <Modal opened={message !== ''} onClosed={() => setMessage('')}>
                    {message}
                    <div className="container text-right relative top-4 left-4">
                        <Button onClick={() => setMessage('')}>OK</Button>
                    </div>
                </Modal>
            </main>
        </>
    );
};

export default Index;
