import './styles.css'

const renderWelcomePanel = (container: HTMLElement) => {
  const userName = localStorage.getItem('userName')

  const htmlContent = `
        <div id="welcome">
            <h1>Olá, ${userName}!</h1>
            <a href="logout.html">Sair</a>
           <span id = "timehour"> </span>
        </div>
        
    `
    setInterval(()=>{
    let Hora= new Date();
    const Anyway= <HTMLHeadingElement>document.querySelector('#timehour')
    Hora.setDate(Hora.getDate() + 1)
    Anyway.innerText= `${Hora.toLocaleTimeString()}`
    },1000)

  container.innerHTML = htmlContent
 
}

export default renderWelcomePanel


