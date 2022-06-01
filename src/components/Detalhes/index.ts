import './styles.css'
import {photoURL} from '../LoginButton/index'

const renderDetalhes = photoUrl


const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if(token){
    renderDetalhes(app)
}else{
    location.href = 'login.html'
}