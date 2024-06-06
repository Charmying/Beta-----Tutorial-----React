// 剛開始建立 React 專案的畫面
// import logo from './logo.svg';
// import './App.css';

// console.log(logo);
// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>Edit <code>src/App.js</code> and save to reload.</p>
//                 <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//             </header>
//         </div>
//     );
// }

// export default App;










// import React, { Component } from 'react';   // 引入 React 和 Component 物件， 其中 { Component } 是指下方 class App extends Component 的 Component 可以改為 React.Component
// import logo from './logo.svg';
// import './App.css';
// import add, {minus} from './add';

// console.log(logo);   // 會出現 logo 圖檔路徑

// console.log(add(1, 2));
// console.log(minus(1, 2));

// class App extends Component {   // 其中 Component 是 React 中的基本物件，App 是一個 class 物件
//     render() {
//         let name = "Charmy";
//         let arr = [1, 2, 3, 4, 5];
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>Edit <code>src/App.js</code> and save to reload.</p>
//                     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//                 </header>
//                 <section>
//                     <div>
//                         {/* <h1 style= {{ color: "red" }}>REACTTTTTTTTTTT</h1> */}
//                         {/* 外面 {} 是要執行一段 JS 程式碼，要執行的 JS 程式碼是一個 object */}
//                         <h1 style= {name === "Charmy" ? { color: "red" } : { color: "green" }}>REACTTTTTTTTTTT</h1>

//                         js：{name === "Charmy" ? "這是 Charmy" : "不是 Charmy"}
//                         <br/>
//                         html：name

//                         {
//                             arr.map((v, k) => {
//                                 return <li>{v}</li>
//                             })
//                         }

//                         <p>這是 JSX</p>
//                     </div>
//                     <div>
//                         <label htmlFor="input">
//                             <p>輸入</p>
//                             <input type="text" id="input" />
//                         </label>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }

// export default App;











// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//     render() {
//         const app = <div>這是 app</div>
//         return app
//     }
// }

// export default App;











// 用 react 製作點讚按鈕
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()   // 先繼承

        // 初始化 state
        this.state = {
            like: false
        }
    }

    handleClick() {
        // 利用 setState 去更改 state，render 只有在 setstate 更動後抓 state 狀態去渲染頁面
        this.setState(
            {
                like: !this.state.like
            }
        )
    }

    render() {
        console.log("觸發 render")
        return (
            <button type="button" style={this.state.like ? { color: "red" } : { color: "black" }} onClick={() => this.handleClick()} >
                {
                    this.state.like ? "已按讚" : "喜歡"
                }
            </button>
        )
    }
}

export default App;