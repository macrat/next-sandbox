import {useState, createContext, useContext, FC} from 'react';

import Layout from '../components/Layout';


interface ColorContextType {
    color: string
    setColor: (color: string) => void
    colors: string[]
}


const ColorContext = createContext<ColorContextType>({
    color: '',
    setColor: c => {},
    colors: [],
});


const useColor = () => useContext<ColorContextType>(ColorContext);


const ColorViewer: FC<{}> = () => {
    const {color} = useColor();

    return (
        <div style={{backgroundColor: color}}>
            <style jsx>{`
                div {
                    width: 300px;
                    height: 300px;
                }
            `}</style>
        </div>
    );
}


const ColorPicker: FC<{}> = () => {
    const {colors, setColor} = useColor();

    return (
        <>
            {colors.map(c => (
                <button style={{backgroundColor: c}} onClick={() => setColor(c)} />
            ))}

            <style jsx>{`
                button {
                    width: 30px;
                    height: 20px;
                }
            `}</style>
        </>
    );
}


const ColorProvider: FC<{initialColor?: string}> = ({children, initialColor='red'}) => {
    const [color, setColor] = useState(initialColor);
    const colors = ['red', 'green', 'blue'];

    return (
        <ColorContext.Provider value={{color, setColor, colors}}>
            {children}
        </ColorContext.Provider>
    );
}


const Context: FC<{}> = () => (
    <Layout>
        <ColorProvider>
            <ColorViewer />
            <ColorPicker />
        </ColorProvider>
    </Layout>
)


export default Context;
