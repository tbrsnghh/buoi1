import Header from "./components/header/Header";
import {Main1, Main2} from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Hook1 from "./components/hook/Hook1"
import Hook2 from "./components/hook/Hook2";
function App() {
    const name = "Le meo";
    return (
        <div>
            {/* <Header />
            <Main1/>
            <Main2/>
            <Footer name1={name}/> */}
            <Hook1 />
            <Hook2 />
        </div>
    )
}
export default App;
