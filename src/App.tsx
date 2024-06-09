import {useState} from 'react'
import './App.css'
import {PrimeReactProvider} from "primereact/api";
import {InputText} from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"
import {Rating} from "primereact/rating";
import {DataView} from "primereact/dataview";

function App() {
    const [value, setValue] = useState('')
    // const [products] = useState(new Array(10).fill([{
    //     title: 'Apocalypse Wasteland - Synty POLYGON',
    //     rating: 3,
    //     cost: '$10',
    //     category: '3D',
    //     preview: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/b20b9edb-6142-4bfe-8968-207e1f57e2df.jpg'
    // }]).map((el)=>{
    //     return {
    //         ...el,
    //         id: Math.random()
    //     }
    // }))
    const [products] = useState([{
        title: 'Apocalypse Wasteland - Synty POLYGON',
        rating: 3,
        cost: '$10',
        category: '3D',
        preview: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/b20b9edb-6142-4bfe-8968-207e1f57e2df.jpg'
    }])


    const gridItem = (product: any) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-12 shadow-2 border-round" src={product.preview} alt={product.title}/>
                        <div className="text-2xl font-bold">{product.title}</div>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-center">
                        <span className="text-xl font-semibold">{product.cost}</span>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product: any) => {
        if (!product) {
            return;
        }

        return gridItem(product);
    };

    const listTemplate = (products: any[], layout: any) => {
        return <div className="grid grid-nogutter">{products.map((product) => gridItem(product))}</div>;
    };

    return (
        <PrimeReactProvider>
            <>
                <InputText placeholder="Search for assets" value={value} onChange={(e) => setValue(e.target.value)}/>
                <DataView className="mt-6" value={products} listTemplate={listTemplate} layout={'grid'}/>
            </>
        </PrimeReactProvider>

    )
}

export default App
