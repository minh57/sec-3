import { setScreen } from './index.js'
import {InputCommon} from './inputCommon.js'
import {login} from './login.js'
class register{
    container = document.createElement("div")
    title =  document.createElement("h3")
    
    
    form =  document.createElement("form")
    inputName = new InputCommon("Tên bạn","email","Enter your name","inputName")
    inputEmail = new InputCommon("Email","email","Enter your email","inputEmail")
    inputPassword = new InputCommon("Password","password","Enter your Password","inputPassword")
    inputConfirmPassword = new InputCommon("Confirm password","password","Enter your confirm password","input confirm Password")
    
    actionContainer = document.createElement("div")
    btnLogin = document.createElement("button")
    btnRegister = document.createElement("button")

    constructor(){
        this.title.innerHTML="Register"
        
        this.container.appendChild(this.form)

        this.form.appendChild(this.title)
        this.form.appendChild(this.inputName.container)
        this.form.appendChild(this.inputEmail.container)
        this.form.appendChild(this.inputPassword.container)
        this.form.appendChild(this.inputConfirmPassword.container)
 
        this.btnLogin.innerHTML = "Go to Login"
        this.btnRegister.innerHTML = "Register"
        this.btnLogin.addEventListener("click",(e)=>{
            e.preventDefault()
            const loginScreen = new login()
            setScreen(loginScreen.container)

        })
        this.btnRegister.addEventListener("click",(e)=>{
            e.preventDefault()

        })
        this.form.appendChild(this.btnLogin)
        this.form.appendChild(this.btnRegister)
    }
}
export {register}