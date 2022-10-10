  import {Link} from 'react-router-dom'
import { MainContainer } from './styles'

export function NoMatch(){
  return(
    <MainContainer>
      <p>Ops! Aqui não tem nada...</p>
      <Link to="/">Voltar para a página inicial</Link>
    </MainContainer>
  )
}