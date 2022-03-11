import {login} from './login.js'
// import {register} from './register.js'

const app = document.querySelector("#app")

const setScreen = (container)=>{
    app.innerHTML = ""
    app.appendChild(container)
}
// set màn hình chính
const Login = new login()
setScreen(Login.container)


export{setScreen}



