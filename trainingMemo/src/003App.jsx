import { fragment } from "react";

import {Box} from './components/005components'
import {AboutState01, AboutState02, AboutState03} from "./components/006state"
            
const App = () => {
    const square = (num) => num * num;
    return(
        <fragment key="">
        {/* key以外の属性は不可。fragmentは"<>"と"</>"に省略可 */}
        {/* returnでは１つのルートしか返せないため、devタグをつけたくない等の理由がある場合に代替的に使用するもの。表示時には消される。 */}

            {/* props */}
            <div>
                <h1>hello</h1>
                <Box />
                <Box
                    color="red"
                    num={123}
                    bool
                    fn={square}
                    obj={{name:Koji, age:37}}
                    // props（プロパティ）を記入
                />
                <Box>{"kodomo"}</Box>
            </div>


            {/* state */}
            <div>
                <AboutState01 / >
                <AboutState02 / >
                <AboutState03 / >
            </div>


        </fragment> 
    );
}

export default App
