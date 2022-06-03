import renderLoginButton from './components/LoginButton'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
renderLoginButton(app)

const p = <HTMLParagraphElement> document.createElement('p')
app.appendChild(p)

setInterval(()=>{
    const time = new Date().toLocaleTimeString()
    p.innerHTML= time
},1000)